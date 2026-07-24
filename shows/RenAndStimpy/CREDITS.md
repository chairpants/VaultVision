# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Four archive.org items, one per season, stitched into a single run:
[Season 1](https://archive.org/details/the-ren-and-stimpy-show-season-1_202601),
[Season 3](https://archive.org/details/the-ren-and-stimpy-show-season-3),
[Season 4](https://archive.org/details/renandstimpyseason4_202604),
[Season 5](https://archive.org/details/renandstimpyshowseason5).
Thanks to whoever uploaded them. Support the Archive:
https://archive.org/donate

*The Ren & Stimpy Show* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## Source notes

**Season 2 is not here.** No item in this lineup covers it, so the guide jumps
from Season 1 straight to Season 3. `seasonNames` spells the four season labels
out literally so the gap reads as a gap rather than a mislabelled tab.

Season 1 leads with S01E00, "Big House Blues" — the 1990 pilot — ahead of its
six broadcast episodes.

Most files are `.mkv` (31 of 47); the rest are `.mp4`. The player never plays
an `.mkv` directly: those rips carry audio a browser can't decode, so it asks
archive.org for the same-named `.mp4` derivative the Archive generated on
upload. That fallback is what makes these entries work — if an item ever loses
its derivatives, the affected episodes go silent rather than failing outright.

## Format note

A Ren & Stimpy half-hour is normally *two* ~11-minute cartoons, and that is
what makes the numbering here look odd. Everywhere except Season 3 the pair
arrives as a single file and the title just names both stories — "Space Dogged
- Feud for Sale". Season 3's uploader instead broke six of its ten half-hours
out into their two cartoons as separate files, coded `S03E01a` / `S03E01b`.

`mergeParts` folds those back together: the halves play back to back as one
episode, the scrubber and runtime span both, and the list shows the merged
title ("Cartoon A / Cartoon B"). The runtimes confirm the reading — each half
runs 9-12 minutes and each pair sums to 20-23, the same as every whole-file
entry.

So twelve part-files become six episodes, and the player lists 41 episodes
where the data file has 47 rows. The guide card counts rows.

Two entries are genuinely not pairs: S01E00 "Big House Blues" is the 1990
pilot, a single 8-minute short, and a handful of half-hours (S03E04, S03E05,
S03E07, S03E09, S04E01, S05E09) gave one story the full slot.

Merging depends on `durations` covering every part, which it does; all 47
runtimes come from the items' own metadata.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
