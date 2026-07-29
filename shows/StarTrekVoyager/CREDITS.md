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

Same source item as [`StarTrekTNG`](../StarTrekTNG/CREDITS.md) and
[`StarTrekDS9`](../StarTrekDS9/CREDITS.md) — one archive.org item holding a
combined TNG+DS9+Voyager playlist, filtered here to just the 168 files whose
names carry a `.VOY-` tag. Support the Archive:
https://archive.org/donate

*Star Trek: Voyager* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Source notes

Complete series: 172 broadcast episodes across 7 seasons
(16/26/26/26/26/26/26), matching
[TVMaze](https://api.tvmaze.com/shows/492/episodes) exactly with no gaps.
Titles from TVMaze. See `StarTrekTNG/CREDITS.md` for the full story on why
this needed rebuilding from the raw item rather than trusting an earlier
draft's row titles (every row in that draft was mislabeled "STAR TREK TNG"
regardless of which of the three series it actually was).

Four files each bundle two broadcast episodes into one recording, listed
here as a single row with a hyphenated code:

- `S01E01-02` "Caretaker" (the pilot)
- `S05E15-16` "Dark Frontier"
- `S07E09-10` "Flesh and Blood"
- `S07E25-26` "Endgame" (the series finale)

## Format note

Nothing unusual — one self-contained episode per row throughout (four
spanning a broadcast two-parter per the note above), `segments: "none"`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
