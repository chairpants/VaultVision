# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[The complete series](https://archive.org/details/the-jeffersons-Lando18) —
all 11 seasons in a single item, 248 files. Support the Archive:
https://archive.org/donate

*The Jeffersons* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Source notes

This is the full, complete series: 253 broadcast episodes across 11 seasons
(13/24/24/26/24/24/20/25/27/22/24), matching
[TVMaze](https://api.tvmaze.com/shows/5389/episodes)'s per-season counts
exactly with no gaps. Episode titles come from TVMaze rather than the
upload's own filenames (which are close, but TVMaze has cleaner punctuation
— e.g. "Thomas H. Willis & Co." vs. the upload's "Thomas H Willis and Co").

The item's 248 files aren't quite one-per-episode: 4 files each bundle two or
three consecutive episodes into a single recording (visible in their own
filenames, e.g. `S04E01,02` and `S04E23,24,25`). Those are listed here as one
row apiece with a hyphenated code and a combined title, the same convention
this repo uses elsewhere for double episodes (`SxxEnn-mm`):

- `S04E01-02` "The Grand Opening" (TVMaze: "The Grand Opening (1)" / "(2)")
- `S04E23-25` "George and Louise in a Bind" (TVMaze: "(1)" / "(2)" / "(3)")
- `S07E03-04` "The Jeffersons Go to Hawaii (Parts 2 & 3)" (TVMaze: "(Part 2)" / "(Part 3)")
- `S07E19-20` "Florence's New Job" (TVMaze: "(Part 1)" / "(Part 2)")

Season 7's two standalone Hawaii episodes (Part 1, Part 4) are separate rows
with their own files; only the middle two parts were recorded as one file.

## Format note

Nothing unusual — one self-contained episode per row throughout (a handful
spanning 2-3 broadcast episodes per the note above), `segments: "none"`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
