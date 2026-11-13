# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[The Golden Girls: Complete Series](https://archive.org/details/the-golden-girls-complete-series) — all 180 broadcast episodes (NBC, 1985–92) in 172 files: the eight two-part
episodes are each held as one hour-long file.
Thanks to the uploader. Support the Archive: https://archive.org/donate

*The Golden Girls* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/722) and, where the two
disagreed, Wikipedia.

Every file carries its air date and `SxxEyy` code, and each code's title
agrees with the broadcast record, so the uploader's numbering is used as is.

- The eight two-parters are single hour-long files coded `S03E18-19`,
  `S04E06-07`, `S04E25-26`, `S05E25-26`, `S06E24-25`, `S07E08-09`,
  `S07E20-21` and `S07E25-26`, and titled "(Parts 1 & 2)". That is why
  per-season file counts run one short of the 25/26-episode seasons in
  seasons 3–7; nothing is missing.
- S01E11's file is labelled "Stan's Return"; the broadcast title is "The
  Return of Dorothy's Ex", used here.
- S07E10's filename is garbled (`Ro-Love569XZilmsMile`); it is "Ro$e Love$
  Mile$".

Sources are `.mkv` originals (MPEG-2 rips, deinterlaced); every one has a
same-stem h.264 `.mp4` derivative, and those are what the rows point at.
640×480, ~25 min episodes.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/722), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
