# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Eight items, 88 files. The item ids are named after single episodes, but most
of them hold a whole season:

* [sliders-s-01-e-01-pilot-pt-1](https://archive.org/details/sliders-s-01-e-01-pilot-pt-1) — 1 file (S01E01)
* [sliders-s-01-e-02-pilot-pt-2](https://archive.org/details/sliders-s-01-e-02-pilot-pt-2) — 1 file (S01E02)
* [sliders-s-01-e-03-fever](https://archive.org/details/sliders-s-01-e-03-fever) — 1 file (S01E03)
* [sliders-s-01-e-07-eggheads](https://archive.org/details/sliders-s-01-e-07-eggheads) — 7 files (S01E04–E10)
* [sliders-s-02-e-01-into-the-mystic](https://archive.org/details/sliders-s-02-e-01-into-the-mystic) — 13 files (all of season 2)
* [sliders-s-03-e-20-the-last-of-eden](https://archive.org/details/sliders-s-03-e-20-the-last-of-eden) — 25 files (all of season 3)
* [sliders-s-04-e-06-oh-brother-where-art-thou_202507](https://archive.org/details/sliders-s-04-e-06-oh-brother-where-art-thou_202507) — 22 files (all of season 4)
* [sliders-s-05-e-10-easy-slider](https://archive.org/details/sliders-s-05-e-10-easy-slider) — 18 files (all of season 5)

Support the Archive: https://archive.org/donate

*Sliders* is the property of its respective rights holders; this project
streams publicly hosted recordings and hosts no video content itself.

## Source notes

88 files against Wikipedia's 87-episode broadcast record. The one-file
difference is the pilot: it aired as a single two-hour movie counted as one
episode, and the upload splits it into two ~44-minute halves. Both halves are
listed, as `S01E01` and `S01E02`, which is also how the files number
themselves — so season 1 runs E01–E10 here against the record's 9 entries, and
every code from `S01E03` on sits one ahead of Wikipedia's numbering for that
season. Seasons 2–5 match exactly: 13 / 25 / 22 / 18.

The files carry `SxxEyy` numbering *and* episode titles, and per-season counts
match the broadcast record, so the numbering was trusted and the titles kept.
Four titles were normalised to the canonical spelling: `State of the A.R.T.`
(trailing period), `The Exodus, Part 1` / `Part 2` and `Oh Brother, Where Art
Thou?` (question mark). That is a count-matched relabel, not frame-by-frame
verification — a transposed file would carry the wrong title and only watching
would catch it.

Every file is an uploaded `original` `MPEG4` with no Archive derivative, which
is normal for `.mp4` uploads. Runtimes are uniform (~43–46 min), so nothing
looks truncated.

The four season-1 items also carry a large pile of non-video sidecar files
(300+ entries on the season items); nothing here reads them.

`durations` records the file runtimes from the item metadata.

## Poster art

Title card from the main title sequence.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
