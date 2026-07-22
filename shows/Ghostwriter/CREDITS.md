# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Ghostwriter* this player streams comes from
[a single archive.org item](https://archive.org/details/gw-24-whos-who-pt-2-lilazn)
that bundles the series as individual files. 75 files total (Children's
Television Workshop, 1992-95). Deep gratitude to whoever assembled and
uploaded this. Support the Archive: https://archive.org/donate

*Ghostwriter* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Format note

The source numbers files flat (GW 01-74) rather than by season, and most
"episodes" here are really one part of a multi-part mystery arc
(Ghostwriter told each story over several ~22-minute parts) — kept as the
source has them rather than merged, so season 1 here is really "every
part, in order," not 74 distinct one-off episodes. A bonus special is
included as its own single-entry season 2.

Unlike RetroTube's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
a multi-hour broadcast block — every entry is one full, self-contained
file. So a quick REW/FF tap pages to the previous/next part instead of
seeking within one (wrapping from the last entry back to the first and
vice versa) — same destination as picking it from GUIDE. Press-and-hold
still scrubs through the current file, unchanged.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
