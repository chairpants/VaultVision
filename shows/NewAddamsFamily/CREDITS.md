# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[The New Addams Family (1998–1999) complete series](https://archive.org/details/newaddamsfamily) — all 65 episodes (YTV / Fox Family, 1998–99).
Thanks to the uploader. Support the Archive: https://archive.org/donate

*The New Addams Family* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/18035) and, where the two
disagreed, Wikipedia.

The item numbers its files `S01E01`–`S01E65`, one season, which is how
Wikipedia lists the show. TVmaze splits the same 65 episodes 52 + 13 into
two seasons; its titles match the files position for position across that
split, so the single-season numbering is kept.

Sources are `.mkv` originals; every one has a same-stem h.264 `.mp4`
derivative, and those are what the rows point at. 642×480, ~21 min
episodes.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/18035), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
