# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[MacGyver Collection 1985–1994 S01–S07](https://archive.org/details/macgyver-collection-1985--to-1994) — all 139 episodes (ABC, 1985–92) plus the two 1994 TV movies.
Thanks to the uploader. Support the Archive: https://archive.org/donate

*MacGyver* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/821) and, where the two
disagreed, Wikipedia.

Files are named `MacGyver SxxEyy Title.mp4`; per-season counts
(22/22/20/19/21/21/14) match the broadcast record exactly and every title
agrees with it, so the numbering is used as is.

The two 1994 TV movies, *Lost Treasure of Atlantis* and *Trail to Doomsday*,
are filed by the uploader as `S07M01`/`S07M02`. They sit in season 0 here,
labelled "TV Movies" in the player via `seasonNames` (`show.html`'s tab
still reads "Season 0"), and play after the series finale.

Original `.mp4` uploads, h.264/AAC, 480×360 (DVD re-rips), ~48 min
episodes. No derivatives exist or are needed.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/821), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
