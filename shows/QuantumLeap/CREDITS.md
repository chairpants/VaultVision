# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Five items, one per season:

* [QLSeason1](https://archive.org/details/QLSeason1) — 8 files
* [QLSeason2](https://archive.org/details/QLSeason2) — 22 files
* [qlseason-3](https://archive.org/details/qlseason-3) — 22 files
* [QLSeason4](https://archive.org/details/QLSeason4) — 22 files
* [QLSeason5](https://archive.org/details/QLSeason5) — 22 files

Support the Archive: https://archive.org/donate

*Quantum Leap* is the property of its respective rights holders; this project
streams publicly hosted recordings and hosts no video content itself.

## Source notes

96 files against Wikipedia's 97-episode broadcast record. The one-file
difference is the pilot: "Genesis" is counted as episodes 1 and 2 but aired as
a single two-hour movie, and the file matches — `Episode 1.mp4` in the Season 1
item runs 93 minutes against ~47 for everything else. It is listed once, as
`S01E01-02`. Season 1 then continues at `S01E03`, so the codes line up with the
broadcast numbering rather than with the file numbering.

Every other season is 22 files against 22 episodes, gapless, in order.

Files are named only `Episode N` — no titles to cross-check against. Titles
come from Wikipedia's per-season episode lists, applied by position. The
per-season counts match the broadcast record exactly, which is good evidence
the uploads are in broadcast order, but it is an educated guess, not proof; a
transposed file would carry the wrong title and only watching would catch it.

Each item holds both an uploaded `Episode N.mp4` (`MPEG4`) and an
Archive-derived `Episode N.ia.mp4` (`h.264`). The rows point at the
**`.ia.mp4`** derivative, the reliably browser-playable one.

`durations` records the derivative runtimes from the item metadata.

## Poster art

The series logo from the main title sequence of "Genesis", about 2:40 in,
cropped to the logo.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
