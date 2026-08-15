// node check_stall.mjs
//
// Exercises the stall watchdog in engine/viewer.html -- the thing that notices
// playback has been buffering forever and re-issues the request, instead of
// leaving the viewer on a frozen picture with no sound until they change
// channel and come back by hand.
//
// It pulls the real function (and the real thresholds) out of viewer.html
// rather than restating them here, so tuning the numbers can't silently
// desync the test from the player.
import { readFileSync } from 'node:fs';
import assert from 'node:assert';

const html = readFileSync(new URL('engine/viewer.html', import.meta.url), 'utf8');
const consts = /const STALL_RELOADS = .*?;/.exec(html);
const fn = /function stallReloadDue\(now, s\) \{[\s\S]*?\n\}/.exec(html);
assert(consts && fn, 'could not find the stall watchdog in engine/viewer.html');
const { stallReloadDue, STALL_MS, COLD_START_MS } =
  new Function(`${consts[0]}${fn[0]};return { stallReloadDue, STALL_MS, COLD_START_MS };`)();

const playing = { bufferingSince: 1, stallReloads: 0, paused: false, ended: false, tvOn: true, readyState: 3 };
const at = ms => 1 + ms;
const due = (ms, over = {}) => stallReloadDue(at(ms), { ...playing, ...over });

// not buffering at all: never
assert.equal(due(99e3, { bufferingSince: 0 }), false, 'fires while not buffering');

// mid-playback stall (a frame is decoded => data was flowing and stopped)
assert.equal(due(STALL_MS - 1), false, 'fires before the stall threshold');
assert.equal(due(STALL_MS), true, 'misses a real mid-playback stall');

// cold start (no frame yet): archive.org is documented to take 15-20s to serve
// a rarely-accessed file's first byte, and reloading only restarts that clock
assert.equal(due(STALL_MS, { readyState: 1 }), false, 'interrupts a legitimate cold start');
assert.equal(due(COLD_START_MS - 1, { readyState: 1 }), false, 'interrupts a legitimate cold start');
assert.equal(due(COLD_START_MS, { readyState: 1 }), true, 'never gives up on a dead cold start');
assert(COLD_START_MS > 20000, 'cold-start grace must clear the documented 15-20s backend warmup');

// things that mean "not our problem"
assert.equal(due(99e3, { paused: true }), false, 'reloads under a deliberate pause');
assert.equal(due(99e3, { ended: true }), false, 'reloads after the episode ended');
assert.equal(due(99e3, { tvOn: false }), false, 'reloads while the TV is switched off');

// capped, so a genuinely dead file falls through to onerror -> retryOrAdvance()
assert.equal(due(99e3, { stallReloads: 1 }), true, 'gives up too early');
assert.equal(due(99e3, { stallReloads: 2 }), false, 'reloads forever on a dead source');

console.log(`OK  stall watchdog: ${STALL_MS / 1000}s mid-playback, ${COLD_START_MS / 1000}s cold start, capped`);
