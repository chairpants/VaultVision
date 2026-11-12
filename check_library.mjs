// Library health check: ask archive.org about every item the library points
// at, and record which items and episodes can no longer be played.
//
//   node check_library.mjs            # scan, update library-health.json + library-dead.js
//   node check_library.mjs --dry-run  # scan and report, write nothing
//   node check_library.mjs --force    # skip the mass-death guard (after a human looked)
//   node check_library.mjs --seed     # confirm on the first sighting (initial run only)
//
// Run on a schedule by .github/workflows/library-check.yml. Nothing here edits
// a show: shows/<Id>/data.js stays exactly as written. The result is a list,
// and every consumer (show.html here; the catalog builds of VaultVisionTV,
// VaultVisionRokuTV, VaultBuster and the rest) filters by it, so an item that
// comes back is restored by the next run with nothing to undo.
//
// One /metadata/<id> request per distinct item (about 1,100), not per episode.
// Four ways an episode is dead, the same four tools/check-items.py in
// VaultVisionTV reports:
//   GONE    /metadata/<id> answers {} or {"error": ...}: withdrawn.
//   DARK    is_dark: the item exists but its files are pulled.
//   GATED   access-restricted-item, or a "loggedin" collection: every file
//           answers 401 to an anonymous request.
//   NOFILE  the item is fine, but nothing in it resolves for this episode's
//           file (renamed, or the derivative it needed is gone).
//
// Three guards, because being wrong here takes good shows off the air:
//   * A request that fails (network, 429, 5xx, a maintenance page) is not a
//     verdict. That item keeps whatever state it had, and if more than a few
//     fail the run stops without writing: archive.org is having a bad day.
//   * Two strikes. A newly dead item is "pending" until a second run, at
//     least MIN_CONFIRM_HOURS later, finds it dead again.
//   * If far more turns up newly dead than rot explains, stop and fail so a
//     person looks (--force to accept it).
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const HEALTH_JSON = path.join(ROOT, "library-health.json");
const DEAD_JS = path.join(ROOT, "library-dead.js");

// Shows that live outside this repo (a product's own data/local-shows) but
// should be watched too. Best effort: one that can't be fetched is skipped.
const EXTRA_SOURCES = [
  { show: "LivePD", url: "https://raw.githubusercontent.com/chairpants/VaultVisionTV/master/data/local-shows/LivePD/data.js" },
];

const WORKERS = 8;
const ATTEMPTS = 4;
const MIN_CONFIRM_HOURS = 6;          // two runs minutes apart are one observation, not two
const MAX_FAILED_FRACTION = 0.02;     // more unanswered requests than this = outage, write nothing
const MAX_NEW_DEAD_FRACTION = 0.03;   // more newly dead items than this = suspicious, stop
const MAX_NEW_DEAD_FLOOR = 25;

const args = new Set(process.argv.slice(2));
const DRY = args.has("--dry-run"), FORCE = args.has("--force"), SEED = args.has("--seed");

// ---------------------------------------------------------------- the library

function readShowsCsv() {
  const text = fs.readFileSync(path.join(ROOT, "shows.js"), "utf8");
  const csv = text.match(/SHOWS_CSV\s*=\s*`([\s\S]*?)`/)?.[1];
  if (!csv) throw new Error("shows.js: no window.SHOWS_CSV template literal");
  const ids = [];
  for (const line of csv.split("\n")) {
    if (!line.trim()) continue;
    // title,id,genre,ext: a title can contain commas, the last three can't
    const cells = line.split(",");
    if (cells.length >= 4) ids.push(cells[cells.length - 3].trim());
  }
  return ids;
}

// data.js is a plain script that assigns window.SHOW; run it the way a
// browser would, in an empty context, and take what it assigned.
function parseShow(source, label) {
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename: label, timeout: 5000 });
  const show = sandbox.window.SHOW;
  if (!show || !Array.isArray(show.episodes)) throw new Error(`${label}: no window.SHOW.episodes`);
  return show;
}

const episodeKey = (itemId, file) => (file ? `${itemId}::${file}` : itemId);

async function loadLibrary() {
  const episodes = [];   // { show, itemId, file, title }
  const problems = [];
  const add = (showId, show) => {
    for (const e of show.episodes) {
      if (!Array.isArray(e) || e.length < 2 || typeof e[0] !== "string") continue;
      episodes.push({ show: showId, itemId: e[0], title: e[1], file: e[2] || null });
    }
  };
  const ids = readShowsCsv();
  for (const id of ids) {
    const file = path.join(ROOT, "shows", id, "data.js");
    try { add(id, parseShow(fs.readFileSync(file, "utf8"), `shows/${id}/data.js`)); }
    catch (e) { problems.push(`${id}: ${e.message}`); }
  }
  for (const { show, url } of EXTRA_SOURCES) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (!r.ok) throw new Error(`http ${r.status}`);
      add(show, parseShow(await r.text(), url));
    } catch (e) { console.warn(`extra source ${show} skipped: ${e.message}`); }
  }
  return { episodes, problems, showCount: ids.length };
}

// ---------------------------------------------------------------- archive.org

const MAINTENANCE_RE = /temporarily offline|undergoing maintenance/i;
const sleep = ms => new Promise(r => setTimeout(r, ms));

// { meta } when archive.org answered, { failed: why } when it didn't. An item
// that doesn't exist still *answers* (with {}), so that's a meta, not a failure.
async function metadata(itemId) {
  let why = "";
  for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
    if (attempt) await sleep(1500 * 2 ** (attempt - 1) + Math.random() * 500);
    try {
      const r = await fetch(`https://archive.org/metadata/${encodeURIComponent(itemId)}`, {
        headers: { "User-Agent": "library-health-check (scheduled, about 1100 requests per run)" },
        signal: AbortSignal.timeout(45000),
      });
      if (!r.ok) { why = `http ${r.status}`; continue; }
      const text = await r.text();
      if (MAINTENANCE_RE.test(text)) { why = "maintenance page"; continue; }
      try { return { meta: JSON.parse(text) }; } catch { why = "non-JSON response"; }
    } catch (e) { why = e.name === "TimeoutError" ? "timeout" : `network (${e.cause?.code || e.message})`; }
  }
  return { failed: why };
}

function itemStatus(meta) {
  if (!meta || !Object.keys(meta).length || meta.error) return "GONE";
  if (meta.is_dark) return "DARK";
  const m = meta.metadata || {};
  const collections = [].concat(m.collection || []);
  if (String(m["access-restricted-item"] ?? "").toLowerCase() === "true" || collections.includes("loggedin")) return "GATED";
  return null;
}

// The file the players would play, or undefined. Mirrors engine/viewer.html
// and VaultVisionTV's resolveEpisodeUrl(): a derivative .mp4 made from the
// named file wins, then the same-stem .mp4 for a non-web container, then the
// name itself. No name at all: the first .mp4, else the first .ogv/.webm.
function resolve(files, file) {
  if (file) {
    const derivative = files.find(f => f.original === file && /\.mp4$/i.test(f.name || ""));
    if (derivative) return derivative;
    if (!/\.(mp4|webm|ogv)$/i.test(file)) {
      const stem = file.replace(/\.[^./]+$/, ".mp4");
      const sameStem = files.find(f => f.name === stem);
      if (sameStem) return sameStem;
    }
    return files.find(f => f.name === file);
  }
  return files.find(f => /\.mp4$/i.test(f.name || "")) || files.find(f => /\.(ogv|webm)$/i.test(f.name || ""));
}

async function pool(items, worker) {
  const out = new Array(items.length);
  let next = 0, done = 0;
  await Promise.all(Array.from({ length: WORKERS }, async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await worker(items[i]);
      if (++done % 200 === 0) console.log(`  ...${done}/${items.length}`);
    }
  }));
  return out;
}

// ---------------------------------------------------------------- the record

function loadHealth() {
  try { return JSON.parse(fs.readFileSync(HEALTH_JSON, "utf8")); }
  catch { return { version: 1, deadItems: {}, deadEpisodes: {}, pending: { items: {}, episodes: {} } }; }
}

const sorted = o => Object.fromEntries(Object.keys(o).sort().map(k => [k, o[k]]));

// Fold this run's sightings into the record for one kind (items or episodes).
//   seen:    key -> { status, shows, title? } for everything dead right now
//   unknown: keys archive.org didn't answer for; they keep their old state
function fold(prevDead, prevPending, seen, unknown, now) {
  const dead = {}, pending = {}, events = [];
  const nowMs = Date.parse(now);
  for (const [key, s] of Object.entries(seen)) {
    const info = { status: s.status, shows: s.shows, ...(s.title ? { title: s.title } : {}) };
    if (prevDead[key]) { dead[key] = { ...info, since: prevDead[key].since }; continue; }
    const p = prevPending[key];
    const oldEnough = p && nowMs - Date.parse(p.firstSeen) >= MIN_CONFIRM_HOURS * 3600e3;
    if (SEED || oldEnough) {
      dead[key] = { ...info, since: (p?.firstSeen || now).slice(0, 10) };
      events.push(["confirmed", key, s]);
    } else {
      pending[key] = { ...info, firstSeen: p?.firstSeen || now };
      if (!p) events.push(["pending", key, s]);
    }
  }
  for (const key of unknown) {
    if (prevDead[key] && !dead[key]) dead[key] = prevDead[key];
    else if (prevPending[key] && !pending[key] && !dead[key]) pending[key] = prevPending[key];
  }
  for (const key of Object.keys(prevDead)) if (!dead[key]) events.push(["restored", key, prevDead[key]]);
  return { dead: sorted(dead), pending: sorted(pending), events };
}

// ---------------------------------------------------------------- main

const { episodes, problems, showCount } = await loadLibrary();
if (problems.length) {
  console.error(`${problems.length} show(s) could not be read:\n  ` + problems.join("\n  "));
  if (problems.length > 5) { console.error("too many to trust the scan; stopping"); process.exit(1); }
}
const itemIds = [...new Set(episodes.map(e => e.itemId))].sort();
console.log(`${showCount} shows, ${episodes.length} episodes, ${itemIds.length} distinct items`);

const t0 = Date.now();
const answers = new Map((await pool(itemIds, metadata)).map((a, i) => [itemIds[i], a]));
const failed = itemIds.filter(id => answers.get(id).failed);
console.log(`archive.org answered for ${itemIds.length - failed.length}/${itemIds.length} items in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
for (const id of failed.slice(0, 15)) console.log(`  no answer: ${id} (${answers.get(id).failed})`);

if (failed.length > Math.max(5, itemIds.length * MAX_FAILED_FRACTION)) {
  console.error(`\n${failed.length} requests went unanswered: that's an archive.org outage or a rate limit, not ${failed.length} dead items. Nothing written.`);
  process.exit(1);
}

const seenItems = {}, seenEpisodes = {};
const unknownItems = new Set(failed), unknownEpisodes = new Set();
const showsOf = (bag, key, show) => { const s = (bag[key].shows ||= []); if (!s.includes(show)) s.push(show); };
for (const ep of episodes) {
  const a = answers.get(ep.itemId), key = episodeKey(ep.itemId, ep.file);
  if (a.failed) { unknownEpisodes.add(key); continue; }
  const status = itemStatus(a.meta);
  if (status) {
    seenItems[ep.itemId] ||= { status };
    showsOf(seenItems, ep.itemId, ep.show);
  } else if (!resolve(a.meta.files || [], ep.file)) {
    seenEpisodes[key] ||= { status: "NOFILE", title: ep.title };
    showsOf(seenEpisodes, key, ep.show);
  }
}

const prev = loadHealth();
const now = new Date().toISOString().replace(/\.\d+Z$/, "Z");
const items = fold(prev.deadItems || {}, prev.pending?.items || {}, seenItems, unknownItems, now);
const eps = fold(prev.deadEpisodes || {}, prev.pending?.episodes || {}, seenEpisodes, unknownEpisodes, now);

const label = (key, s) => `${key}  [${s.status}]  ${(s.shows || []).join(", ")}`;
for (const [what, title] of [["pending", "Newly dead, waiting for a second run to confirm"], ["confirmed", "Confirmed dead, now removed everywhere"], ["restored", "Back from the dead, restored"]]) {
  const rows = [...items.events, ...eps.events].filter(e => e[0] === what);
  if (!rows.length) continue;
  console.log(`\n${title} (${rows.length}):`);
  for (const [, key, s] of rows.slice(0, 60)) console.log("  " + label(key, s));
  if (rows.length > 60) console.log(`  ...and ${rows.length - 60} more`);
}

const newItems = items.events.filter(e => e[0] !== "restored").length;
const newEps = eps.events.filter(e => e[0] !== "restored").length;
const firstRun = !fs.existsSync(HEALTH_JSON);
if (!FORCE && !SEED && !firstRun) {
  const itemLimit = Math.max(MAX_NEW_DEAD_FLOOR, itemIds.length * MAX_NEW_DEAD_FRACTION);
  const epLimit = Math.max(MAX_NEW_DEAD_FLOOR * 8, episodes.length * MAX_NEW_DEAD_FRACTION);
  if (newItems > itemLimit || newEps > epLimit) {
    console.error(`\n${newItems} items and ${newEps} episodes turned up dead in one run, more than ordinary rot explains. Nothing written.\nIf it's real, run the workflow by hand with "force" ticked (or: node check_library.mjs --force).`);
    process.exit(1);
  }
}

// Whole shows with nothing left to play: every episode sits on a dead item or
// is a dead episode. Worked out here so consumers needn't.
const deadShows = [];
{
  const byShow = new Map();
  for (const ep of episodes) (byShow.get(ep.show) ?? byShow.set(ep.show, []).get(ep.show)).push(ep);
  for (const [show, list] of byShow)
    if (list.every(ep => items.dead[ep.itemId] || eps.dead[episodeKey(ep.itemId, ep.file)])) deadShows.push(show);
  deadShows.sort();
}

const health = {
  version: 1,
  // When the lists below last changed, not when the last scan ran: a scan that
  // finds nothing new writes nothing, so this file only moves when there's news.
  changedAt: now,
  summary: {
    items: itemIds.length, episodes: episodes.length,
    deadItems: Object.keys(items.dead).length, deadEpisodes: Object.keys(eps.dead).length,
    pendingItems: Object.keys(items.pending).length, pendingEpisodes: Object.keys(eps.pending).length,
    deadShows: deadShows.length,
  },
  deadShows,
  deadItems: items.dead,
  deadEpisodes: eps.dead,
  pending: { items: items.pending, episodes: eps.pending },
};

const stable = h => JSON.stringify({ ...h, changedAt: null });
const changed = stable(health) !== stable({ ...prev, changedAt: null });
console.log(`\n${health.summary.deadItems} dead items, ${health.summary.deadEpisodes} dead episodes (files missing from live items), ` +
  `${health.summary.pendingItems + health.summary.pendingEpisodes} pending, ${deadShows.length} shows with nothing left`);

if (DRY) { console.log(changed ? "(dry run: would update the record)" : "(dry run: no change)"); process.exit(0); }
if (!changed) { console.log("no change"); process.exit(0); }

fs.writeFileSync(HEALTH_JSON, JSON.stringify(health, null, 1) + "\n");
// The same confirmed lists as a plain script, for pages opened from file://
// (fetch() of a local file is blocked there; <script src> isn't).
fs.writeFileSync(DEAD_JS,
  "// Generated by check_library.mjs. Do not edit: the next scan rewrites it.\n" +
  `window.VAULT_DEAD = ${JSON.stringify({ changedAt: now, items: Object.keys(items.dead), episodes: Object.keys(eps.dead), shows: deadShows }, null, 1)};\n`);
console.log("updated library-health.json and library-dead.js");
