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
[a single archive.org item](https://archive.org/details/animaniacs-1993-1998-movie_202601)
that bundles the whole series plus the 1999 theatrical movie, one folder
per season. 100 entries — 99 half-hour episodes across 5 seasons (Fox
Kids/The WB, 1993-98), essentially the complete series, plus *Wakko's
Wish* filed as a bonus "S06E01" so it doesn't collide with Season 5's own
numbering. Deep gratitude to whoever assembled and uploaded the whole
thing in one place. Support the Archive: https://archive.org/donate

*Animaniacs* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Episode titles

Each entry's title is the tape/DVD-rip's own segment listing for that
half-hour — most episodes are three unrelated shorts stitched together, so
the guide shows all of them comma-separated rather than picking just one.

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
