# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

- Seasons 1–15: [Saturday Night Live Seasons 1–15](https://archive.org/download/snl-season-1-15/Saturday%20Night%20Live%20Seasons%201-15/)
- Season 16: [saturday-night-live-season-16](https://archive.org/details/saturday-night-live-season-16)
- Season 17: [saturday-night-live-season-17](https://archive.org/details/saturday-night-live-season-17)
- Season 18: [saturday-night-live-season-18](https://archive.org/details/saturday-night-live-season-18)
- Season 19: [saturday-night-live-season-19](https://archive.org/details/saturday-night-live-season-19)
- Season 20: [saturday-night-live-season-20](https://archive.org/details/saturday-night-live-season-20)
- Season 21: [saturday-night-live-season-21](https://archive.org/details/saturday-night-live-season-21)
- Season 22: [saturday-night-live-season-22](https://archive.org/details/saturday-night-live-season-22)
- Season 23: [saturday-night-live-season-23](https://archive.org/details/saturday-night-live-season-23)
- Season 24: [saturday-night-live-season-24](https://archive.org/details/saturday-night-live-season-24)
- Season 25: [saturday-night-live-season-25](https://archive.org/details/saturday-night-live-season-25)
- Season 26: [saturday-night-live-season-26](https://archive.org/details/saturday-night-live-season-26)
- Season 27: [saturday-night-live-season-27](https://archive.org/details/saturday-night-live-season-27)

Support the Archive: https://archive.org/donate

*Saturday Night Live* is the property of NBCUniversal/Broadway Video; this
project streams publicly hosted recordings and hosts no video content itself.

## Source notes

525 episodes across seasons 1–27 (24/22/20/20/20/13/20/20/19/17/18/20/13/20/20/
20/20/20/20/20/20/20/20/19/20/20/20 per season) — every count matches the
broadcast record on Wikipedia's season-by-season episode lists exactly, so per
[the usual rule](../../ADDING_A_SHOW.md#step-1--find-and-vet-the-source), the
upload's own `SxxEyy` numbering (or, for seasons 4–15, its `Season N` folder +
in-folder ordinal) was trusted rather than re-verifying every file by hand.
Season 6's 13-episode count matches the season Jean Doumanian was replaced
mid-run; season 13's 13-episode count matches the 1987–88 writers' strike that
cut that season short — neither is a missing-episode gap.

Two one-off corrections found while cross-checking against Wikipedia:

- **Season 25 numbering**: the upload's files for "Garth Brooks (November 13,
  1999)" and "Jennifer Aniston (November 20, 1999)" were *both* labeled
  `E06`, leaving no `E05`. Wikipedia confirms Garth Brooks aired first
  (November 13) — relabeled to `E05`, Aniston kept `E06`. The only labeling
  error found in seasons 16–27's otherwise-clean `SxxEyy` filenames.
- Seasons 1–3 (in the `snl-season-1-15` item) already carry full
  `SHOW - SxxEyy - Name` titles in the filename, taken as-is. Seasons 4–15
  use varying per-season filename conventions inside that same item (a
  leading `NN.` ordinal, a `NN.NN -` season.episode pair, or a bare `NN`
  ordinal); season and episode number were derived from those plus each
  file's `Season N` folder, not retyped from Wikipedia, since the per-season
  counts already lined up exactly.

Two file variants exist for seasons 16–27 (a `source: original` `.mp4` and an
IA-generated `.ia.mp4` derivative of identical size/length); the original
(non-`.ia`) file is used throughout. Seasons 1–15 ship an `.avi` alongside an
`h.264` `.mp4` derivative for every episode; the `.mp4` is used throughout.

## Format note

Nothing unusual — one `episodes` row per broadcast episode, no merged parts,
no segment navigation, no crop.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
