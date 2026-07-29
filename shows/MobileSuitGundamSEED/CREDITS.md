# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Item link](https://archive.org/details/mobile-suit-gundam-seed-ocean-dub) —
*Mobile Suit Gundam SEED* (2002-03), Ocean Group English dub. Support the
Archive: https://archive.org/donate

*Mobile Suit Gundam SEED* is the property of Sunrise/Sotsu; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

The series is 50 episodes; this upload has 48. The uploader's own "Phase NN"
filenames are **not** broadcast episode numbers — they're just a sequential
count of the files actually uploaded, so they drift out of sync with the real
episode numbers every time a gap is skipped. Matched every file to Wikipedia's
episode list by title instead of by that count:

- Phase 01-13 line up with real episodes 1-13 (no gap yet).
- "Within Endless Time" (real episode 14) is missing from this upload, so
  Phase 14 is actually episode 15, and everything from there is off by one.
- "Moment" (real episode 26) is also missing, so Phase 25 onward is off by
  two.

The guide lists each episode under its **real** `S01Exx` code with the
canonical Wikipedia title (a couple of filenames used slightly different
phrasing — "Burning Sandstorm" vs. "Burning Clouds of Sand", "To an Endless
Future" vs. "To a Future that Never Ends" — the canonical title is what's
shown). Episodes 14 and 26 simply have no row; they aren't in this source.
Phase 38's file carries a `v3` suffix (a re-upload) and Phase 46 runs a
second longer — both cosmetic, not truncation.

## Format note

Single-season show; `grouping: "season"` still applies since it's a real
series, it just never splits into season tabs.

## Poster

The official Japanese TV broadcast poster, via
[Wikipedia](https://en.wikipedia.org/wiki/Mobile_Suit_Gundam_SEED).

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
