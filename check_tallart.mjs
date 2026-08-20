// node check_tallart.mjs
//
// Guards index.html's TALL_EXTS list against the actual contents of art/.
// That list is what the guide probes for a card's portrait ("-tall") art, one
// HTTP request per extension, and a miss is a 404. Two ways it can go wrong,
// both silent in a browser:
//
//   dead extension  -- listed but no file on disk ever uses it, so every card
//                      pays a guaranteed 404 for it. 700+ cards x a few dead
//                      extensions was enough of a request burst to trip GitHub
//                      Pages' rate limiter.
//   missing extension -- a -tall file on disk whose extension isn't listed is
//                      simply never found, and the card quietly shows its
//                      landscape art instead with nothing logged.
//
// Reads the list out of index.html rather than restating it, so editing the
// real one is what this test sees.
import { readFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert';

const root = new URL('.', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');

const decl = /const TALL_EXTS = \[[^\]]*\];/.exec(html);
assert(decl, 'TALL_EXTS declaration not found in index.html -- did it get renamed?');
const TALL_EXTS = new Function(`${decl[0]};return TALL_EXTS`)();

const onDisk = new Set(
  readdirSync(new URL('art/', root))
    .filter(f => /-tall\.[^.]+$/.test(f))
    .map(f => f.split('.').pop().toLowerCase())
);
assert(onDisk.size, 'no -tall art found at all -- wrong directory?');

const dead = TALL_EXTS.filter(e => !onDisk.has(e));
const missing = [...onDisk].filter(e => !TALL_EXTS.includes(e));

assert.deepStrictEqual(dead, [],
  `TALL_EXTS lists ${dead.join(', ')} but no -tall art uses ${dead.length > 1 ? 'those' : 'that'}; ` +
  `every card pays a 404 per dead extension. Drop them.`);
assert.deepStrictEqual(missing, [],
  `art/ has -tall files ending in ${missing.join(', ')} that TALL_EXTS doesn't list, ` +
  `so those cards never find their portrait art. Add them.`);

console.log(`ok -- TALL_EXTS [${TALL_EXTS.join(', ')}] matches ${onDisk.size} extension(s) in art/`);
