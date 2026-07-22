# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *X-Men: The Animated Series* this player streams comes
from [a single archive.org item](https://archive.org/details/x-men_1992_720p_english)
that bundles the complete series as individual files. 76 episodes across
5 seasons (Fox Kids, 1992-97) — the full run. Deep gratitude to whoever
assembled and uploaded the whole run in one place. Support the Archive:
https://archive.org/donate

*X-Men: The Animated Series* is the property of its respective rights
holders; this project streams a publicly hosted recording and hosts no
video content itself.

## Season numbering

The source files number episodes flat (EP01-EP76) with no season markers
at all, so the 5-season split used here (13/13/19/21/10) comes from the
show's real, published season boundaries — not anything in the source
filenames.

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
