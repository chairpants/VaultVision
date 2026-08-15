// node check_guide.mjs
//
// Replays index.html's guide render against the real shows.js. The failure it
// exists to catch: index.html renders by iterating a hard-coded GENRES array,
// so a shows.js row whose genre isn't in that array is skipped with no error
// and the show simply isn't in the guide. Everything else here is a freebie.
import { readFileSync } from 'node:fs';
const R = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const html = readFileSync(`${R}/index.html`, 'utf8');

const src = readFileSync(`${R}/shows.js`, 'utf8');
const SHOWS_CSV = new Function(`const window={};${src};return window.SHOWS_CSV`)();

const GENRES = new Function(`${/const GENRES = \[[\s\S]*?\n  \];/.exec(html)[0]};return GENRES`)();
const parseCSV = new Function(`${/function parseCSV\(text\) \{[\s\S]*?\n  \}/.exec(html)[0]};return parseCSV`)();
const sortKey = new Function(`${/function sortKey\(title\)[^\n]*/.exec(html)[0]};return sortKey`)();

const byGenre = new Map();
for (const [title, id, genre] of parseCSV(SHOWS_CSV)) {
  if (!byGenre.has(genre)) byGenre.set(genre, []);
  byGenre.get(genre).push({ title, id });
}
const out = [];
let lastSection = null, rendered = 0;
for (const [genre, note, section] of GENRES) {
  const shows = byGenre.get(genre);
  if (!shows || !shows.length) continue;
  if (section && section !== lastSection) { out.push(`## ${section}`); lastSection = section; }
  out.push(`${genre} (${shows.length})`);
  rendered += shows.length;
}
const total = parseCSV(SHOWS_CSV).length;
const dropped = [...byGenre].filter(([g]) => !GENRES.some(([n]) => n === g));

console.log(out.join('\n'));
console.log(`\nrendered ${rendered} of ${total}`);
if (dropped.length) { console.error('DROPPED:', dropped.map(([g, s]) => `${g} (${s.length})`)); process.exit(1); }
if (rendered !== total) { console.error('COUNT MISMATCH'); process.exit(1); }
if (out.filter(l => l === '## Movies').length !== 1) { console.error('expected exactly one Movies banner'); process.exit(1); }
if (sortKey('The Goonies') !== 'goonies') { console.error('sortKey regression'); process.exit(1); }
console.log('OK');
