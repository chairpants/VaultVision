# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Item link](https://archive.org/details/dharma-and-greg-1997-2002-standard-version)
— *Dharma & Greg* (ABC, 1997-2002), a scattered subset of the 5-season,
119-episode run: 63 episodes total — a complete Season 1 (23/23), a handful
of Season 2 (7/24: E1-6, E10), most of Season 3 (21/24, missing E20-22), one
episode of Season 4 (E1 only), and a partial Season 5 (11/24: E1-9, E21, E24
"Part 2" of the finale — E23 "Part 1" is not in this upload). Support the
Archive: https://archive.org/donate

*Dharma & Greg* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Source notes

Filenames explicitly state `Season X Episode NN <title>`, which was checked
against Wikipedia's full episode list — every present episode's stated
season/episode position matches its real broadcast slot exactly, so no
reordering was needed, only title cleanup (a handful of filenames were
missing punctuation or lower-cased for the whole Season 3 batch — canonical
Wikipedia titles are what's shown in the guide). No `.ia.mp4` derivatives
exist for any file in this item — every row uses the `source: original`
`.mp4`; ffprobe confirms H.264/AAC across a sample from each of the three
upload batches (season 1, the lowercase "480" season 3 batch, and the
season 5 batch), so they stream fine as-is.

## Format note

None — ordinary series, one episode per row. The card count reflects the
partial, scattered nature of this upload rather than a clean "N of M" since
it varies wildly by season.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

The official cast poster, via
[TMDB](https://www.themoviedb.org/tv/3461-dharma-greg).

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
