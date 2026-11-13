# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

All 225 episodes (CBS, 1957–63), in one item:

- [e-n-ll-l-s-01.-e-30-e-ht-s](https://archive.org/details/e-n-ll-l-s-01.-e-30-e-ht-s)

Thanks to the uploader. Support the Archive: https://archive.org/donate

*Have Gun – Will Travel* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/3360).

Files are named `Have Gun - Will Travel SxxEyy Title`; per-season counts
(39/39/39/38/38/32) match the broadcast record exactly, so the numbering is
used as is and titles come from the episode list.

Every episode exists twice in the item: the uploaded `.mp4` and an archive
`.ia.mp4` re-encode. Some of the uploads are HEVC, which Firefox (and Chrome
on some systems) can't play, so every row points at the h.264 `.ia.mp4`.

Nine filenames use variant titles ("Poker Fiend", "Killing of Jessie May",
"The Lost Weekend" …); the broadcast titles are used instead.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/3360), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
