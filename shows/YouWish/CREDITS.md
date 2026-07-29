# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Item link](https://archive.org/details/you-wish-1997-1998) — *You Wish*
(ABC TGIF, 1997-98), complete 13-episode series. Support the Archive:
https://archive.org/donate

*You Wish* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Same issue as this item's TGIF stablemate *Teen Angel*: the uploader's
numbering (`01`-`13`) isn't broadcast order. Checked every title against
Wikipedia — the series aired 7 episodes in fall 1997, was pulled, then burned
off the remaining 6 in mid-1998, and the upload's file numbers don't reflect
that split. The guide lists all 13 under their real `S01Exx` code and
Wikipedia's title; `fileHint` still points at the file's actual filename.
Episode 4 ("A Real Don Juan") has no `.ia.mp4` — Archive's `original` upload
was already an `.mp4`, and ffprobe confirms H.264/AAC, so it streams fine
as-is. Also excluded: TGIF promos and a cross-show commercial bundled in the
same item — not episodes.

## Format note

None — ordinary series, one episode per row.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

The official cast poster, via
[TMDB](https://www.themoviedb.org/tv/6762-you-wish).

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
