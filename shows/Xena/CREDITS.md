# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Xena: Warrior Princess* this player streams comes from
four archive.org items, one per season, each a clean per-episode upload
with no gaps or duplicates:

- Season 1: https://archive.org/details/xena-s01
- Season 2: https://archive.org/details/xena-s02
- Season 3: https://archive.org/details/xena-s03
- Season 4: https://archive.org/details/xena-s04

90 episodes across 4 seasons (syndication, 1995-99). Deep gratitude to
whoever assembled and uploaded these. Support the Archive:
https://archive.org/donate

*Xena: Warrior Princess* is the property of its respective rights holders;
this project streams a publicly hosted recording and hosts no video
content itself.

## Episode titles

The source files have no per-episode titles baked into their filenames —
just season/episode numbers — so the guide lists each entry as "S01E01"
etc. without a title.

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
