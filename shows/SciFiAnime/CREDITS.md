# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams is hosted by the Internet Archive and was
digitized and preserved by real off-air recordings of Sci-Fi Channel's
Saturday Anime block. Deep gratitude to `venuswarsscifichannel`,
`lodosswarscifichannel`, and `scifi-saturday-anime-project-ako`'s uploaders
for capturing something this obscure in the first place. Support the
Archive: https://archive.org/donate

This is the thinnest of the five buckets researched — only 5 broadcasts
turned up with a real, confirmed single air date (a 6th, Odin: Photon Space
Sailer Starlight, is real but its air date was never given anywhere in its
metadata). Everything else found during research was either a Rinse
Repeat-style recreation (a real vintage commercial stitched around an
episode, not an actual capture of one broadcast) or a full VHS tape mixing
several unrelated recordings together with no clean single date. See
`../research/sci-fi-channel-saturday-anime.md` for the full breakdown,
including what got excluded and why. Some of those excluded categories are
in the player anyway, added deliberately and labeled:
`rinse-repeat-yu-yu-hakusho-the-movie-sci-fi-channel` (a recreation, no
real air date) and `myopic-vhs-no-05` / `myopic-vhs-no-08` / `myopic-vhs-no-09`
(real VHS tapes, but each bundling several unrelated shows back to back
rather than a single Saturday Anime broadcast — Casshan: Robot Hunter /
Outlaw Star / Tenchi Muyo! / Beast Wars on #05; Roujin Z / Project A-Ko /
Outlaw Star on #08; Dominion Tank Police / Dragon Ball Z / Tenchi Muyo! on
#09).

The Odin archive.org item is also unusual: it bundles **2 separate
recordings** of the same movie in one item, one with an exact date buried
in its own filename (05/31/1997) that never made it into the item's
description. Both are in the player as separate entries.

## A note on runtime

`myopic-vhs-no-05`, `-08`, and `-09` each run **7-8 hours** — by far the
longest files in this player (everything else is ~1.5-2h). If long
archive.org streams are giving you trouble elsewhere in RetroTube, these
three are the ones most likely to struggle.

The player also uses the Archive's metadata API and per-item thumbnail frames
(for the ambient lighting effect). The featured anime and Sci-Fi Channel are
the property of their respective rights holders; this project streams
publicly hosted recordings and hosts no video content itself.

## Format note

Unlike SNICK/Fox Kids/TGIF, this block mostly ran one anime film or OVA per
week, not a rotation of several shows — so for most episodes FF/REW just
jump to the start or end, no show-segment list. The three `myopic-vhs-no-*`
tapes are the exception (see above): their bundled shows each get a real
per-tape `SHOWS` breakdown, spread evenly across the runtime since no exact
timestamps exist — same approach as Fox Kids' and Saturday Morning's
per-tape `SHOWS` tables.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
