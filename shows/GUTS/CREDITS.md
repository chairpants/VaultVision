# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Four items, one per season:
[Season 1](https://archive.org/details/nickelodeon-guts-season-1) (1992-93),
[Season 2](https://archive.org/details/nickelodeon-guts-season-2) (1993-94),
[Season 3](https://archive.org/details/nickelodeon-guts-season-3) (1994-95),
[Global GUTS / Season 4](https://archive.org/details/nickelodeon-global-guts-season-4)
(1994-95, the international-teams format that replaced the regular show for
its final season). Deep gratitude to whoever digitized and uploaded the whole
run. Support the Archive: https://archive.org/donate

*GUTS* is the property of its respective rights holders; this project streams
a publicly hosted recording and hosts no video content itself.

## Source notes

Each item's files are cleanly numbered `Episode <season><ep>.mp4` (`101`-`147`,
`200`-`239`, `301`-`338`, `400`-`433`) with a gapless run per season and a
per-season file count that matches the broadcast record exactly (47/40/38/34),
so per [the numbering rule](../../ADDING_A_SHOW.md#step-1--find-and-vet-the-source)
the upload order was trusted and every title was replaced with the real
contestant lineup, sourced from
[next-episode.net](https://next-episode.net/nickelodeon-guts) (seasons 1-3) and
[TVMaze](https://api.tvmaze.com/shows/32066/episodes) (season 4, listed there
under "Global Guts" — cross-checked against next-episode.net's own Global GUTS
page, same lineups, minor spelling variants).

Both the plain `Episode NNN.mp4` and archive's `.ia.mp4` derivative are
byte-identical, already-web-compatible h.264/AAC (`ffprobe`-verified) — the
plain filename was used throughout for consistency with Season 4, which has no
`.ia.mp4` derivative at all.

**Season 2's numbering has one open question.** `Episode 200.mp4` runs ~50
minutes — roughly double every other episode — matching next-episode.net's
separately-listed "Special: GUTS All-Stars", so it's filed as `S02E00`. That
leaves 39 regular files (`201`-`239`) for the 40 regular episodes
next-episode.net lists. This guide assumes `201`→#1 through `239`→#39 and
that the season's final episode ("Viet - Mia - Erika") simply isn't in this
upload — a reasonable read given the clean sequential numbering, but unverified
against content, so if a title looks off by one late in Season 2, this is why.

Season 4's last two entries carry TVMaze's own titles verbatim
("The Road to the Extreme Arena" and "Allison vs. Cesar vs. Katie (Special
Olympics)") rather than a contestant lineup — that's what TVMaze and
next-episode.net both call them.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
