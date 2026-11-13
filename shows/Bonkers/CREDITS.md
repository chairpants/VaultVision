# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

All 65 episodes (Disney Afternoon, 1993–94), one item per season:

- [disney-bonkers-season-1](https://archive.org/details/disney-bonkers-season-1)
- [disney-bonkers-season-2](https://archive.org/details/disney-bonkers-season-2)
- [disney-bonkers-season-3](https://archive.org/details/disney-bonkers-season-3)
- [disney-bonkers-season-4](https://archive.org/details/disney-bonkers-season-4)

Thanks to the uploaders. Support the Archive: https://archive.org/donate

*Bonkers* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Found via the AutoArchive library database (`library-db/`, export of
2026-11-12). Episode numbering and titles were checked against TVmaze's
episode list (https://www.tvmaze.com/shows/19137).

Files are named by code only (`Bonkers.S01E01.mp4`), and the three episode
lists disagree on how the 65 split up (Wikipedia: 41 + 20 + compilations;
TVmaze: 20/11/23/9 = 63). Every episode's on-screen title card was read to
settle it:

- Season 1 files E03–E22 are TVmaze's season 1 E01–E20 in order.
- Season 1 files E01–E02 are the two-part pilot "Going Bonkers" / "Gone
  Bonkers", which TVmaze doesn't list. They sit in season 0, labelled
  "Pilot" in the player, and play first.
- Season 3 was checked title card by title card and matches TVmaze exactly;
  seasons 2 and 4 match in count and are labelled by position.

## Poster

Series poster from [TVmaze](https://www.tvmaze.com/shows/19137), used for both
the guide card and the tall art.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
