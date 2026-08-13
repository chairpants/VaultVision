# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[One item](https://archive.org/details/caroline-in-the-city) holding the whole
run: 97 episodes across four seasons (NBC, 1995-99), complete, no gaps in any
season. Thanks to whoever uploaded it. Support the Archive:
https://archive.org/donate

*Caroline in the City* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## Source notes

Files are numbered `SxNN` — "Caroline in the City S1x01.mp4" — rather than the
usual `SxxExx`. The numbering was cross-checked against Wikipedia's episode
list before being trusted: the item's per-season counts (24/25/26/22) match the
broadcast counts exactly, so the file numbers are the broadcast numbers. Titles
come from Wikipedia, not the filenames, which carry no titles at all.

Every file is an uploaded `source: original` with no Archive-derived
`.ia.mp4` alongside it, which is the case the guide warns about — an `.mp4`
original can carry AC3/DTS audio the browser won't decode, and there's no
derivative to fall back on. Probed before adding: h.264 High video, AAC-LC
stereo at 44.1 kHz, so they stream as-is. Each file also carries a third
stream, an embedded PNG cover image, which players ignore.

## Poster art

A frame from the season 1 opening — Caroline at her drawing table with the cat,
which is the premise in one image. The source is pillarboxed 4:3 inside a 16:9
frame, so the bars were cropped off before scaling to the guide's usual 360px
width.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
