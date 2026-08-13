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
[1](https://archive.org/details/coach-season-1_202311),
[2](https://archive.org/details/coach-season-2_202311),
[3](https://archive.org/details/coach-season-3_202311),
[4](https://archive.org/details/coach-season-4),
[5](https://archive.org/details/coach-season-5),
[6](https://archive.org/details/coach-season-6),
[7](https://archive.org/details/coach-season-7),
[8](https://archive.org/details/coach-season-8),
[9](https://archive.org/details/coach-season-9).
The guide stitches them into one run of 198 episodes (ABC, 1989-97) — all nine
seasons, complete but for two episodes of season 5. Thanks to whoever uploaded
them. Support the Archive: https://archive.org/donate

*Coach* is the property of its respective rights holders; this project streams
a publicly hosted recording and hosts no video content itself.

## Source notes

Season 5 is missing E12 and E13, so E11 is followed by E14, "The Commercial:
Part 2", whose part 1 isn't in the item. Nothing is renumbered to hide that —
the episode codes are the real broadcast ones. Every other season is complete.

Seasons 1 and 3 come from `_202311` items that a first pass didn't turn up;
they were added later. Both carry each episode twice, as an uploaded `.mp4`
and an Archive-derived `.ia.mp4`, and the rows point at the `.ia.mp4`
derivatives (`format: "h.264 IA"`) to match how seasons 2 and 5 already
reference their files.

Episode titles come from Wikipedia's episode list rather than the filenames,
which drop apostrophes and commas ("Kelly Meet Christine" for "Kelly, Meet
Christine", "2 Brs Mtn Vw" for "2 BRs, MTN VW"). One correction on top of
that: Wikipedia lists the first episode as "Pliot", which is a typo for
"Pilot" and is spelled correctly here.

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
