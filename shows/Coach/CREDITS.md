# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Like Newhart, this player draws on a separate archive.org item per season
rather than one item for the series:
[2](https://archive.org/details/coach-season-2_202311),
[4](https://archive.org/details/coach-season-4),
[5](https://archive.org/details/coach-season-5),
[6](https://archive.org/details/coach-season-6),
[7](https://archive.org/details/coach-season-7),
[8](https://archive.org/details/coach-season-8),
[9](https://archive.org/details/coach-season-9).
The guide stitches them into one run of 163 episodes (ABC, 1989-97) covering
seasons 2 and 4-9. Thanks to whoever uploaded them. Support the Archive:
https://archive.org/donate

*Coach* is the property of its respective rights holders; this project streams
a publicly hosted recording and hosts no video content itself.

## Source notes

Seasons 1 and 3 aren't on the Archive as far as this search found, so the guide
starts at season 2 and jumps from 4 to 5. Nothing is renumbered to hide the
gaps — the episode codes are the real broadcast ones, so S04E22 is followed by
S05E01. Season 5 is also missing E12 and E13, so E11 is followed by E14, "The
Commercial (2)", whose part 1 isn't in the item.

Note on `coach-season-5`: for a while its metadata endpoint answered
`{"error": "item metadata may be invalid"}` and its download directory 404'd,
which looks exactly like a withdrawn item. It wasn't — the item was mid-move
between servers (its metadata carries `"conflict": "alt-loc"`), and all 21
episodes stream normally once it settles. Worth remembering before writing off
an item on a metadata error alone: re-check it later, and check a real file
with a range request rather than trusting the metadata endpoint by itself.

Two-part and three-part episodes keep the broadcast "(1)" / "(2)" / "(3)"
suffixes in their titles rather than being merged, matching how the files were
uploaded.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
