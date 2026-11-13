# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Yes, Dear: The Complete Series](https://archive.org/details/yes-dear) — all 122 episodes (CBS, 2000–06).
Thanks to the uploader. Support the Archive: https://archive.org/donate

*Yes, Dear* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/1511) and, where the two
disagreed, Wikipedia.

Files are named `Yes, Dear - SxxEyy - Title.mp4`; per-season counts
(24/24/24/24/11/15) match the broadcast record exactly and every title
agrees, so the numbering is used as is.

Each episode exists twice in the item: the original `.mp4` and an archive
`.ia.mp4` re-encode of it. The originals are already h.264/AAC (512×384),
so the rows point at those; the `.ia.mp4` copies are ignored. ~21 min
episodes.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/1511), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
