# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

47 episodes (49 files; one is a 5-part merged special — see Format note)
from three archive.org items:
[Alice in Chains / Nirvana (5.1)](https://archive.org/details/alice-in-chains-mtv-unplugged-5.1),
[MTV Unplugged '90-'99 (44 performances)](https://archive.org/details/mtv-unplugged-92-eric-clapton-03.10.92),
[Shawn Mendes (2017)](https://archive.org/details/shawnmendes_mtv_u).
Support the Archive: https://archive.org/donate

*MTV Unplugged* is the property of its respective rights holders (MTV
Networks/Viacom); this project streams publicly hosted recordings and hosts
no video content itself.

## Source notes

This show's episode list was assembled by **AutoArchive**, a local tool
(`~/Projects/AutoArchive`) that scans archive.org collections and matches
the files against canonical episode order (via TVMaze), then exports
straight into VaultVision's `data.js` format. That matching is automated,
not hand-verified episode-by-episode the way most of the rest of this
library was.

**A real mismatch was found and fixed here, not just cosmetic cruft.** The
exported `data.js` had four episodes (S01E01, E03, E04, E05) titled after
canonical TVMaze episodes — "Alice in Chains", "Shakira '01", "Staind '01",
"Wallflowers '01" — but every one of their `fileHint`s actually pointed at
`Act 1`/`4`/`5`/`6` of a completely unrelated 2017 Shawn Mendes special
(item `shawnmendes_mtv_u`). Meanwhile the genuine Alice in Chains recording
sat unused in the `alice-in-chains-mtv-unplugged-5.1` item the whole time,
alongside the (correctly-matched) Nirvana one. Fixed by:

- Re-pointing S01E01 at the real Alice in Chains file.
- Removing the invented Shakira/Staind/Wallflowers episodes entirely — no
  file in this library actually holds those performances.
- Folding all five surviving Shawn Mendes act files (`Act 1`, `2`, `4`, `5`,
  `6` — there's no `Act 3`, the recording has a gap) into one merged
  episode, S01E03, via `mergeParts`, titled "Shawn Mendes (2017)".
- Renumbering the 44 correctly-matched `mtv-unplugged-92-eric-clapton-*`
  episodes (originally S01E06-E49) down to S01E04-E47 to close the gap.

Every `fileHint` in the corrected list was checked against its archive.org
item's file listing — all 51 rows (47 logical episodes) resolve to a real
file, nothing missing.

## Format note

This is a concert/performance anthology — a different artist each episode,
all filed under one pseudo-season — rather than a narrative series.
Standard per-episode REW/FF still applies (pages to the previous/next
episode, wrapping at the ends), except S01E03: `mergeParts: true` chains
its five Shawn Mendes act files into one continuous playback, the same
mechanism used elsewhere in this library for a recording split across
multiple capture files.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
