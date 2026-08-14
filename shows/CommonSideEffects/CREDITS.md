# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[One item](https://archive.org/details/s-1-e-1_202608) holding all ten episodes
of Season 1, no gaps. The uploader's description says a Season 2 update is
planned for February 2027. Support the Archive: https://archive.org/donate

*Common Side Effects* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## Source notes

Each episode is present twice: an uploaded 1080p `.mkv` and an Archive-derived
854×480 `.mp4`. The rows point straight at the **`.mp4`** — the browser plays
it directly, no Matroska container and no reliance on the engine's file
resolution. The 1080p originals stay unused; a browser can't be trusted to open
them.

The files are named only `S1 E1`…`S1 E10`, with no titles. Titles come from
Wikipedia's episode list, applied by position: ten files against a ten-episode
broadcast season, in order, so the numbering is trustworthy. Nothing in the
filenames contradicts it — but nothing in them confirms it either, since they
carry no titles to cross-check. Only watching would settle it.

`durations` records the derivative runtimes from the item metadata, which is
what plays (~21–23 minutes each).

## Poster art

A frame from "Pilot" at 45 seconds — Marshall Cuso at the Reutical event. The
episode's title sequence is a wordless montage with no title card in it, so
there was no real card to grab.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
