# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams comes from
[a single archive.org item](https://archive.org/details/familymatters_202507)
that bundles the whole series, one folder per season. 211 entries across 9
seasons (ABC then CBS, 1989-98). Deep gratitude to whoever assembled and
uploaded the whole thing in one place. Support the Archive:
https://archive.org/donate

*Family Matters* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Known gaps

The source item is missing a small handful of episodes outright rather than
just having noisy filenames — Season 2's "Requiem for an Urkel" is followed
straight by "Fast Eddie Winslow" (no 2x18 file exists), and Season 8 is
missing 8x07, 8x14, and 8x15. Left as real gaps rather than papered over
with a wrong file. A few episodes existed as two copies with the same
number (one plain, one tagged "TV-DVDRip") — the shorter, cleaner filename
was kept and the duplicate dropped.

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
