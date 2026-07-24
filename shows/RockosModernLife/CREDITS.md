# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Two archive.org items, one per season:
[Season 1](https://archive.org/details/rockos-modern-life_202412),
[Season 2](https://archive.org/details/rockos-modern-life-season-2).
Thirteen files each, complete for both seasons. Thanks to whoever uploaded
them. Support the Archive: https://archive.org/donate

*Rocko's Modern Life* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

Seasons 3 and 4 are not in this lineup — no item covers them — so the guide
stops after Season 2.

## Source notes

**Every filename in both uploads is meaningless.** The files are named
`getvid.mp4` and `getvid (2).mp4` through `getvid (26).mp4` — browser-download
artifacts, numbered by whatever order the uploader happened to save them in.
They carry no episode number, no title, and no date, and the numbering runs
straight through both items (Season 1 holds `getvid` and `(2)`–`(13)`, Season 2
holds `(14)`–`(26)`).

Since there was no numbering to trust, every file was pinned individually
rather than sliced by position — the "no usable numbering" case in
`ADDING_A_SHOW.md` §1c. Each was identified by **reading its on-screen title
card**: a contact sheet was built from frames sampled around 38–64s (the first
segment's card, right after the main title) and around 43–57% of the runtime
(the second segment's card), then read directly. Titles in the guide are the
canonical broadcast ones, cross-checked against Wikipedia's episode list.

This is stronger evidence than a count-matched relabel: each row's placement
comes from the episode naming itself, not from an assumption about ordering.

**Upload order is not broadcast order**, which is why this mattered. Season 1
is badly scrambled — `getvid.mp4` is S01E07, and the broadcast order runs
`(8) (9) (12) (11) (13) (2) getvid (3) (4) (6) (5) (7) (10)`. Season 2 is
nearly sequential, with one displacement: `(23)` is S02E12, so `(24)` and
`(25)` slot in ahead of it as S02E10 and S02E11.

Every segment pairing found on the title cards matched the broadcast record
exactly — no episode turned out to be a re-paired or syndicated cut — and all
26 half-hours across the two seasons are present, with no gaps and no
duplicates.

Both items hold `original` `.mp4` uploads with no Archive derivatives (the
Archive skips deriving files uploaded as `.mp4`). Probed rather than assumed:
h.264 video, AAC audio, 720×480. They stream directly.

Runtimes in `durations` come from the items' own metadata, 22–25 minutes each,
consistent with with-commercial-breaks-removed half-hours.

## Format note

A Rocko half-hour is normally *two* ~11-minute cartoons, and each arrives here
as a single file, so the title names both stories — "Leap Frogs - Bedfellows".

Four entries are single stories that took the whole slot: S02E01
"I Have No Son!", S02E06 the Christmas special, and S02E08 "Cruisin'" (which
carries its own "Part II" card partway through, but aired as one episode).
S01E01–S01E13 are all pairs.

Unlike `RenAndStimpy`, no `mergeParts` is needed — nothing is split across
files here, so the 26 rows are 26 episodes.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
