# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

All 120 episodes (ABC, 1963–67), in one item:

- [The_Fugitive_Series](https://archive.org/details/The_Fugitive_Series)

Thanks to the uploader. Support the Archive: https://archive.org/donate

*The Fugitive* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/7150).

One folder per season, numbered differently in each: `1x01` in seasons 1 and
3, `S02E01` (one subfolder per episode) in season 2, and a bare `01. Title`
in season 4. Every season holds 30 files, matching the broadcast record, and
every filename title agrees with its slot.

Left out: six Barry Morse introduction clips filed beside season 2 episodes,
and a season 2 promo. Seasons 1–3 are black and white, season 4 is colour.

Sources are `.avi` originals; every one has a same-stem h.264 `.mp4`
derivative, and those are what the rows point at.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/7150), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
