# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Alfred Hitchcock Presents* this player streams comes
from a matching set of 7 archive.org items, one per season, restored and
colorized:

- https://archive.org/details/alfred-hitchcock-presents-s-1e-1-colorized-720p-hd
- https://archive.org/details/alfred-hitchcock-presents-s-2e-13-colorized-sd
- https://archive.org/details/alfred-hitchcock-presents-s-3e-1-colorized-sd
- https://archive.org/details/alfred-hitchcock-presents-s-4e-1-colorized-sd
- https://archive.org/details/alfred-hitchcock-presents-1959-s-5e-1-colorized-sd
- https://archive.org/details/alfred-hitchcock-presents-s-6e-1-colorized-sd
- https://archive.org/details/alfred-hitchcock-presents-s-7e-1-colorized-sd

261 episodes across 7 seasons (CBS/NBC, 1955-62). Deep gratitude to
whoever restored, colorized, and uploaded these. Support the Archive:
https://archive.org/donate

*Alfred Hitchcock Presents* is the property of its respective rights
holders; this project streams a publicly hosted recording and hosts no
video content itself.

## Known gaps

The collection is missing 7 real episodes that no season's archive.org
item has: S01E09, S04E18, S05E34, S06E05, S06E27, S06E35, and S07E34.
Nothing to patch that from this end.

## Episode titles

The source files have no per-episode titles baked into their filenames —
just episode numbers — so the guide lists each entry as "S01E01" etc.
without a title.

## Format note

Unlike VaultVision's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
a multi-hour broadcast block — every entry is one full, self-contained
episode. So a quick REW/FF tap pages to the previous/next episode instead
of seeking within one (wrapping from the last episode back to the first and
vice versa) — same destination as picking it from GUIDE. Press-and-hold
still scrubs through the current episode, unchanged.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
