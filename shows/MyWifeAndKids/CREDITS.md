# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[My Wife & Kids: The Complete Series](https://archive.org/details/my-wife-and-kids-complete-series_202511) — all 123 episodes (ABC, 2001–05).
Thanks to the uploader. Support the Archive: https://archive.org/donate

*My Wife and Kids* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/952) and, where the two
disagreed, Wikipedia.

Per-season file counts (11/29/27/30/26) match the broadcast record
exactly, so per `ADDING_A_SHOW.md` §1c the uploader's `SxxEyy` numbering
is trusted and every title is taken from the episode list by position. Five
filenames disagree with that list:

- S04E08 / S04E09 — files read "Ultrasound" / "Marathon". Wikipedia agrees
  with the files; TVmaze has the two swapped. Wikipedia's order is used.
- S05E11 / S05E12 — files read "They Call Me El Foosay" / "Careful What You
  Wish For"; both Wikipedia and TVmaze have them the other way round. Titles
  follow the episode list by position.
- S05E03 — file reads "Resolutions", a title that appears in no episode
  list. It sits where "Child-Care Class" aired, and is labelled that.

That is an educated guess, not a frame-by-frame check: if any of those files
really holds the episode its filename names, its title here is wrong.

Original `.mp4` uploads, h.264 High/AAC, 1280×720, ~21 min episodes. The
item's one `.ia.mp4` derivative is ignored.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/952), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
