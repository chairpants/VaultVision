# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams is hosted by the Internet Archive and was
digitized and preserved by its community of uploaders — real off-air/VHS
captures of ABC's TGIF, with original commercials intact. See
`../research/tgif.md` for how the 14-episode list was verified against each
item's own runtime and description (recreations, split-screen-credit clips,
and off-topic uploads were excluded). Deep gratitude to the VHS-hoarders who
kept Friday night alive. Support the Archive: https://archive.org/donate

The player also uses the Archive's metadata API and per-item thumbnail frames
(for the ambient lighting effect). TGIF and its shows are the property of
their respective rights holders; this project streams publicly hosted
recordings and hosts no video content itself.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
SNICK-lite's caption pipeline (OpenAI Whisper / faster-whisper) could be
reused here later if wanted.

## Lineup data

The "what show is this" feature's era-by-era lineup guesses come from the
archive.org uploaders' own episode breakdowns where available, cross-checked
against [Wikipedia's TGIF article](https://en.wikipedia.org/wiki/TGIF_(TV_programming_block))
for the seasons where no per-episode breakdown existed.

One recording is dated only to the year — it's listed as "TGIF - 1994" rather
than inventing a broadcast date it doesn't have. The player reads a bare year
as January 1st for lineup purposes, which puts it in the Sept 1993 slate:
Family Matters, Boy Meets World, Step By Step, Hangin' With Mr. Cooper —
the same four the item's own title names.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
