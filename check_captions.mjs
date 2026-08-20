// node check_captions.mjs
//
// Guards the one thing that makes captions cheap: captions.js is fetched only
// when captions are actually switched on. Most shows ship an empty stub, but a
// handful are real -- SNICK's is 10MB -- and that used to download on every
// viewer open regardless of the CAPTIONS setting, blocking startup on it.
//
// Two ways it regresses, both invisible in a browser (captions still work,
// they just cost 10MB again):
//   * an ungated load creeps back in, so CC-off viewers pay for the pack
//   * the memo breaks, so every episode re-requests the same pack
//
// Pulls the real functions out of viewer.html rather than restating them.
import { readFileSync } from 'node:fs';
import assert from 'node:assert';

const html = readFileSync(new URL('engine/viewer.html', import.meta.url), 'utf8');

// --- source level: every captions.js reference is the one gated path --------
const refs = [...html.matchAll(/^.*captions\.js`.*$/gm)].map(m => m[0].trim());
assert.strictEqual(refs.length, 1,
  'expected exactly one captions.js fetch (inside loadCaptionsJs), found ' +
  refs.length + ':\n  ' + refs.join('\n  '));

assert(/if \(ccOn\) await loadCaptionsJs\(\)/.test(html),
  'load() must gate the caption pack on ccOn -- an ungated await means CC-off viewers download it anyway');

// --- behavioral: memoization + the late-toggle re-cue ------------------------
function pick(re, name) {
  const m = re.exec(html);
  assert(m, name + ' not found in viewer.html -- renamed?');
  return m[0];
}

let appended = 0;
const sandbox = {
  showId: 'SNICK',
  document: { createElement: () => ({}), head: { append(s) { appended++; s.onload(); } } },
  URL: { createObjectURL: () => 'blob:stub' },
  Blob: class { constructor(parts) { this.parts = parts; } },
  window: { CAPTIONS: null },
  cc: { style: {} },
  v: { _track: null, querySelector() { return this._track; } },
  ccOn: true,
};

const src = [
  pick(/^let capsPromise =.*$/m, 'capsPromise'),
  pick(/^function loadCaptionsJs\(\)[\s\S]*?\n\}/m, 'loadCaptionsJs'),
  pick(/^const layoutCues[\s\S]*?line:-2'\);$/m, 'layoutCues'),
  pick(/^let curPartKey =.*$/m, 'curPartKey'),
  pick(/^function applyPackedCaptions\(\)[\s\S]*?\n\}/m, 'applyPackedCaptions'),
  'return { loadCaptionsJs, applyPackedCaptions, setKey: k => { curPartKey = k; } };',
].join('\n');

const api = new Function(...Object.keys(sandbox), src)(...Object.values(sandbox));

// memoized: three calls, one <script>
await Promise.all([api.loadCaptionsJs(), api.loadCaptionsJs(), api.loadCaptionsJs()]);
assert.strictEqual(appended, 1,
  'captions.js requested ' + appended + ' times, expected 1 -- the memo is broken');

// late toggle, no packed cues for this part: leave the live track alone
sandbox.v._track = { src: 'live.vtt', track: {} };
api.setKey('nope');
api.applyPackedCaptions();
assert.strictEqual(sandbox.v._track.src, 'live.vtt',
  'no packed cues: must not clobber the live/loose-file track');

// late toggle with packed cues: re-point the track and reveal the badge
sandbox.window.CAPTIONS = { 'snick-05-08-93': 'WEBVTT\n\n00:00:01.000 --> 00:00:02.000\nhi\n' };
api.setKey('snick-05-08-93');
api.applyPackedCaptions();
assert.strictEqual(sandbox.v._track.src, 'blob:stub',
  'packed cues: track must switch to the packed blob');
assert.strictEqual(sandbox.cc.style.display, 'block',
  'packed cues: CC badge must become visible');
assert.strictEqual(sandbox.v._track.track.mode, 'showing',
  'CC is on: cues must actually show');

console.log('ok -- captions.js loads once, only when CC is on, and a late toggle re-cues');
