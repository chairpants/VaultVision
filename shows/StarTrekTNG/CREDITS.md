# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** —
[ST9: The Definitive Star Trek 90's Broadcast Collection](https://archive.org/details/ST9_mkv)

That item is **not** TNG-only — its own description says it's "a full
playlist of TNG, DS9, and VOY," all three interleaved together by original
airdate into one combined viewing order. This show uses only the 176 files
whose names carry a `TNG-sXXeYY` tag; the DS9 and Voyager files in the same
item aren't referenced here. Support the Archive:
https://archive.org/donate

*Star Trek: The Next Generation* is the property of its respective rights
holders; this project streams a publicly hosted recording and hosts no video
content itself.

## Source notes

An early draft of this episode list pulled rows straight out of that combined
item without filtering by show — every row's displayed title read "STAR TREK
TNG" regardless of whether the underlying file was actually TNG, DS9, or
Voyager, and the S/E code shown was TNG's own number reused for whichever
episode happened to be airing that same week in each series. E.g. a row
labeled "STAR TREK TNG - S01E01 - e02 Emissary" was actually
`ST9137.DS9-s01e01e02.Emissary.mp4` — the *Deep Space Nine* pilot, not TNG.

This show was rebuilt by filtering the item down to just the 176 files with a
`.TNG-` tag in the filename, which are cleanly and completely numbered
(`s01e01e02`, `s01e03`, `s01e04`, ...) and match
[TVMaze](https://api.tvmaze.com/shows/491/episodes)'s 178-episode, 7-season
record exactly (26/22/26/26/26/26/26) once the two merged files below are
accounted for. Titles come from TVMaze, not the filenames.

Two files each bundle two broadcast episodes into one recording (the pilot
and the series finale), listed here as a single row with a hyphenated code:

- `S01E01-02` "Encounter at Farpoint" (the 2-hour pilot)
- `S07E25-26` "All Good Things..." (the series finale)

Every other TNG two-parter (Best of Both Worlds, Redemption, Unification,
Time's Arrow, Chain of Command, Birthright, Descent) is two separate files/
rows in this item, one per season as it actually aired, and is listed here
as two ordinary rows — only the pilot and finale were recorded as one file.

Deep Space Nine and Voyager are also complete in this same archive.org item
and are added as their own shows — [`StarTrekDS9`](../StarTrekDS9/CREDITS.md)
and [`StarTrekVoyager`](../StarTrekVoyager/CREDITS.md), filtered the same way
(`.DS9-` / `.VOY-` in the filename).

## Format note

Nothing unusual — one self-contained episode per row throughout (two
spanning a broadcast two-parter per the note above), `segments: "none"`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
