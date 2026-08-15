# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

105 episodes from seven archive.org items, one per season:
[The Inferno](https://archive.org/details/the-challenge-season-8)
(uploaded as "season 8", but placed as this show's earliest run here —
see Source notes),
[Season 2](https://archive.org/details/the-challenge-season-2),
[Season 3](https://archive.org/details/the-challenge-season-3),
[Season 4](https://archive.org/details/the-challenge-season-4),
[Season 5](https://archive.org/details/the-challenge-season-5),
[Season 6](https://archive.org/details/the-challenge-season-6),
[Season 7](https://archive.org/details/the-challenge-season-7).
Support the Archive: https://archive.org/donate

*The Challenge* is the property of its respective rights holders (MTV
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
file listing (`archive.org/metadata/<item>`) — all 105 resolve to a real
file, nothing missing.

The archive.org item uploaded as `the-challenge-season-8` (The Inferno) is
placed as this show's `S01`, not `S08` — the uploader's own filename numbers
it against a different counting scheme than the canonical order AutoArchive
matched against. Not independently re-verified; flagging it here so it isn't
mistaken for a mismatch later. Season 1 (the original) isn't represented in
this build at all — coverage reflects what AutoArchive found and matched,
not a guarantee of completeness.

The library also contained a duplicate entry — `ChallengeRealWorldRoad` —
carrying this show's exact episode list (same items, same files, same
durations) under a garbled title. It was excluded as a stray mismatch, not
a real second show.

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
