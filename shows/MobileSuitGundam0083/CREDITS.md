# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Item link](https://archive.org/details/gundam-0083-adult-swim-complete_202607)
— *Mobile Suit Gundam 0083: Stardust Memory* (1991-92 OVA), as broadcast on
Cartoon Network's Adult Swim in 2002. Support the Archive:
https://archive.org/donate

*Mobile Suit Gundam 0083* is the property of Sunrise/Sotsu; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

The item is a mixed bag: a flat set of `Gundam 0083 EpN` files at top level
(missing episode 1 and episode 10) plus a nested `[AoYRips]Gundam 0083 Adult
Swim 2002/` folder holding the complete run, including those two, plus two
sub-30-second stray clips (timestamps as filenames — bumper/dead air,
excluded).

Episode 1 exists twice at two different lengths: a top-level
`Mobile Suit Gundam Ep1.ia.mp4` at ~25 minutes, and the nested folder's
`Gundam 0083 Ep1.ia.mp4` at ~30 minutes. Every other episode here runs
27-35 minutes (broadcast length, commercials included), so the nested,
longer cut is the one that matches — used that one and skipped the shorter
top-level duplicate. Episode 10 only exists in the nested folder, as a
`source: original` file with no Archive-derived version; ffprobe confirms
it's already H.264/AAC, so it streams fine as-is.

## Format note

None — ordinary single-season OVA, one episode per row.

## Poster

The theatrical poster for the *Mobile Suit Gundam 0083: The Fading Light of
Zeon* compilation film, via
[Wikipedia](https://en.wikipedia.org/wiki/Mobile_Suit_Gundam_0083:_Stardust_Memory) —
same title, cast, and mobile suits as the 13-episode OVA this show streams.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
