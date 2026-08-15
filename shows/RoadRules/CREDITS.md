# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

95 episodes stitched together from nine archive.org items, one per uploaded
season/tour:
[Road Rules: South Pacific](https://archive.org/details/road-rules-south-pacific),
[Road Rules All Stars](https://archive.org/details/rrasaiu),
[Semester at Sea](https://archive.org/details/road-rules-semester-at-sea),
[Season 6](https://archive.org/details/road-rules-6),
[Season 7](https://archive.org/details/road-rules-7),
[Maximum Velocity Tour](https://archive.org/details/road-rules-maximum-velocity-tour),
[The Quest](https://archive.org/details/road-rules-the-quest),
[Season 11](https://archive.org/details/road-rules-11),
[Road Rules 2007](https://archive.org/details/road-rules-2007).
Support the Archive: https://archive.org/donate

*Road Rules* is the property of its respective rights holders (MTV
Networks/Viacom); this project streams publicly hosted recordings and hosts
no video content itself.

## Source notes

This show's episode list was assembled by **AutoArchive**, a local tool
(`~/Projects/AutoArchive`) that scans archive.org collections and matches
the files against canonical episode order (via TVMaze), then exports
straight into VaultVision's `data.js` format. That matching is automated,
not hand-verified episode-by-episode the way most of the rest of this
library was — treat season/episode placement here as AutoArchive's best
match rather than a frame-checked guarantee.

Every `fileHint` in this show was checked against its archive.org item's
file listing (`archive.org/metadata/<item>`) — all 95 resolve to a real
file, nothing missing.

Coverage is partial and uneven by design of what's survived online: several
seasons (1, 3, 4, 5, 8, 12, 13) aren't represented at all, and some seasons
here (e.g. the Maximum Velocity Tour item) only contribute a handful of
episodes rather than a full run. This reflects what AutoArchive found
matched against the canonical run, not a completeness guarantee.

The library also contained a duplicate/mismatched entry —
`ChallengeRealWorldRoad` — carrying **The Challenge**'s episode data under a
garbled title. It was excluded as a stray mismatch, not a real show.

## Format note

Standard episodic playback — one file per episode, REW/FF pages to the
previous/next episode (wrapping at the ends).

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
