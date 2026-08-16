# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Battlestar Galactica S 02 E 20](https://archive.org/details/battlestar-galactica-s-02-e-20) —
despite the item's title (named after whatever file the uploader happened to
test with), this item holds the complete reimagined series: the 2003
miniseries and all four seasons, each episode uploaded individually with a
real `h.264`/AAC `.mp4` derivative. Support the Archive:
https://archive.org/donate

*Battlestar Galactica* (2004) is the property of NBCUniversal; this project
streams a publicly hosted recording and hosts no video content itself.

This is a different show from the 1978 original already on VaultVision as
[`BattlestarGalactica`](../BattlestarGalactica/CREDITS.md) — this one is
`BattlestarGalactica2004`, named and carded as "Battlestar Galactica (2004)"
to keep the two apart, the same convention used for `It1990` and
`LandOfTheLost1991`.

## Source notes

75 rows: a 2-part miniseries (`Season 0`) plus seasons 1–4. Seasons 1–3 (13,
20, 20 episodes) match Wikipedia's broadcast counts exactly, so per the usual
rule the upload's own `SxxEyy` filenames were trusted for placement; none of
those files carry episode titles, so every title in the guide was taken from
Wikipedia's episode lists by position.

Season 4 needed more care: the upload has only 20 files against a real
21-episode season. Files 1–14 carry real episode titles baked into their
filenames, which cross-check cleanly against Wikipedia's season 4 list
position-for-position. Files 15–19 are bare (`S04E15.mp4`, etc.) but still
line up 1:1 with real episodes 15–19 ("No Exit" through "Daybreak (Part 1)").
The last file, `S04E20 The Frakking Series Finale.mp4` (~95.6 minutes), is
long enough to be a fan-merged cut of the two-part extended finale that
Wikipedia lists as separate episodes 20 ("Daybreak (Part 2)") and 21
("Daybreak (Part 3)") — those aired the same night as a single ~2h11m block.
That file is listed as one row with a combined code, `S04E20-21`, the same
double-episode convention already used elsewhere in this repo (see
`BeavisButthead`'s `S02E10-11`).

The item also has `BSG - The Miniseries - Deleted Scenes.mp4` (~21 minutes) —
excluded from the episode list; it's bonus deleted-scene material, not a
broadcast episode.

Every file in the item ships with both a `.mkv` original and an auto-derived
`.mp4`; the `.mp4` derivative is used throughout for browser playback.

Playback confirmed working (correct h.264/AAC derivative, real Range/seek
support, real decoded frames) but with an unusually slow first response from
this item's datanode at the time of testing — roughly 25–30 seconds before
the first byte arrives, versus well under a second for other shows' items.
Once data starts flowing, playback and seeking are normal. This looked like
datanode-side load rather than anything wrong with the files themselves; if
episodes consistently take that long to start, it's worth re-checking whether
the item has moved to a healthier datanode.

## Format note

`S04E20-21` is a single row spanning two broadcast episode numbers in its
code (a merged file, not the `mergeParts` mechanism — that's for splitting
one logical episode across adjacent rows, which doesn't apply here). Season 0
carries the miniseries under `seasonNames: { 0: "Miniseries" }`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
