# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Five items, one per season:
[Season 1](https://archive.org/details/Taxi1x14SugarMama) (22 episodes),
[Season 2](https://archive.org/details/TaxiS02E08TheGreatRace) (24 episodes),
[Season 3](https://archive.org/details/TaxiS03E07TheCallOfTheMild) (20 episodes),
[Season 4](https://archive.org/details/TaxiS04E12BobbyDoesntLiveHereAnymore)
(24 episodes),
[Season 5](https://archive.org/details/Episode1TheShloogelShowLoveUnAmericanStyle)
(24 episodes). Each item identifier happens to be named after one arbitrary
episode inside it (e.g. the Season 1 item is called `Taxi1x14SugarMama`, the
Season 2 item `TaxiS02E08TheGreatRace`) rather than the season as a whole — an
uploader naming quirk, not a sign the item only holds that one episode.
Support the Archive: https://archive.org/donate

All five seasons are complete — 114 of 114 episodes, the full series run.

*Taxi* is the property of its respective rights holders; this project streams
publicly hosted recordings and hosts no video content itself.

## Source notes

Every episode title comes from [TVMaze](https://api.tvmaze.com/shows/2218/episodes),
not from the uploads' own filenames — an early draft of this episode list
(Seasons 2-5) carried the right filenames but had mislabeled every single
row's *displayed* title as `S01E01`–`S01E24` regardless of its real season, a
copy-paste artifact from whatever tool generated the draft. The actual
season/episode number for every row was read from its filename instead (every
item is cleanly and completely numbered — `Taxi 1x01 ... .mp4` for Season 1,
`Taxi S02E01 ... .mp4` for Season 2, `Taxi - S04E01 - ... .mp4` for Season 4,
`Episode 1 ....mp4` for Season 5) and cross-checked against TVMaze's
per-season episode counts (22/24/20/24/24), which match exactly across all
five items — full seasons, no gaps. Season 1's own draft was already labeled
correctly (`S01E01`-`S01E22`) and added without the relabeling step the other
four needed.

Season 5's files are named `Episode N <title>.mp4` with no season number and
inconsistent capitalization (`Episode 9` vs `episode 13`) — confirmed as
Season 5 by matching episode 1's title, "The shloogel show Love un-American
style," to TVMaze's `S05E01`, "The Shloogel Show a.k.a. Love Un-American
Style."

Season 4 mixes two upload generations in one item: `S04E01`–`S04E16` were
uploaded as source-original `.mp4` (already h.264/AAC), while `S04E17`–`S04E24`
were uploaded as `.avi` with an `.mp4` derivative — both play back identically
in-browser (`ffprobe`-verified h.264/AAC throughout), so the plain `.mp4` was
used consistently for every episode regardless of which generation it came
from.

## Format note

Nothing unusual — one self-contained episode per row throughout, `segments:
"none"`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
