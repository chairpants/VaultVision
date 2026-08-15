# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

This player streams
[a single archive.org item](https://archive.org/details/GTVSeries1995) —
the complete 1995-98 Fox Kids run of R. L. Stine's *Goosebumps*: all 74
broadcast episodes, packaged as 68 files (six two-parters are single
double-length files). Deep gratitude to whoever assembled and uploaded the
whole series. Support the Archive: https://archive.org/donate

*Goosebumps* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

**Ordering rule applied: trust the numbering, replace the titles.**
The upload carries explicit `SxxEyy` numbering and its per-season counts match
[Wikipedia's episode list](https://en.wikipedia.org/wiki/List_of_Goosebumps_episodes)
exactly — 19 / 25 / 22 / 8 = 74 episodes — and, unusually, so does every
two-parter pairing (`S01E01-E02`, `S01E16-E17`, `S01E18-E19`, `S02E11-E12`,
`S02E20-E21`, `S02E24-E25` are exactly the ones Wikipedia groups). Nothing in
the numbering disagreed with the broadcast record. Titles were still taken
from Wikipedia rather than the filenames, which differ in punctuation and in
a few cases in wording:

| File says | Guide says (canonical on-screen title) |
|---|---|
| `It Came from Beneath the Sink!` | It Came from Beneath the Sink |
| `Say Cheese and Die!` | Say Cheese and Die |
| `Be Careful What You Wish For...` | Be Careful What You Wish For |
| `Go Eat Worms!` | Go Eat Worms |
| `You Can't Scare Me!` | You Can't Scare Me |
| `The Haunted Mask II` | Haunted Mask II |
| `Let's Get Invisible!` | Let's Get Invisible |
| `The Scarecrow Walks at Midnight` | Scarecrow Walks at Midnight |
| `Calling All Creeps!` | Calling All Creeps |
| `A Shocker on Shock Street` | Shocker on Shock Street |
| `The Perfect School` | Perfect School |
| `Say Cheese and Die-Again!` | Say Cheese and Die… Again |

(The book titles carry the exclamation marks and the em dash; the episodes'
on-screen title cards do not. Wikipedia has explicit editor notes on each of
these, which is what they were checked against.)

**Two-parter numbering.** Six stories were uploaded as one double-length file
covering two broadcast episodes; those rows use the double-episode code form
from the conventions table (`S01E01-02`, `S01E16-17`, `S01E18-19`,
`S02E11-12`, `S02E20-21`, `S02E24-25`). The other two-parters are two separate
files and get one row each; because both halves share a single canonical
title, the guide appends "(Part 1)" / "(Part 2)" so adjacent rows aren't
identical. "Chillogy" is a three-parter with per-part subtitles and is listed
as `S03E19`/`S03E20`/`S03E21`, "Chillogy Part 1: Squeal of Fortune" etc.
"Monster Blood" / "More Monster Blood" (`S02E15`/`S02E16`) aired the same night
and are numbered as two episodes by Wikipedia, which is how they're listed
here, despite the uploader's `(1)`/`(2)` suffixes.

**Files excluded.** Every episode exists twice in the item, as an `.mkv`
original and an archive-derived h.264 `.mp4`. The guide points at the `.mp4`
throughout — the `.mkv` originals are skipped so the list has no duplicate
rows, and because an `.mkv` audio track is not something every browser will
decode. Nothing else was excluded; there are no bumpers or clip fragments.

**Runtimes.** Single episodes run 1281-1340 s (~21-22 min), doubles 2589-2695 s.
Two exceptions: `S03E20` (1206 s) and `S03E21` (1181 s), the second and third
Chillogy parts, run roughly 1.5 minutes short of their siblings. That is not
enough to look broken, so they are not flagged with `incompleteEpisodes` —
noted here in case a viewer notices an abrupt end.

Poster art is the Archive's own generated thumbnail from the middle of
`S02E14`, "Scarecrow Walks at Midnight".

## Poster art

`art/Goosebumps.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/5835). Already a 2:3 portrait,
which is the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
