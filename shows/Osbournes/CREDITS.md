# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

51 episodes — the complete series — from one archive.org item:
[The Osbournes: Season 1-4 (Complete Series)](https://archive.org/details/the-osbournes-season-1-4-complete-series).
Support the Archive: https://archive.org/donate

*The Osbournes* is the property of its respective rights holders (MTV
Networks/Viacom); this project streams a publicly hosted recording and hosts
no video content itself.

## Source notes

This show's episode list was assembled by **AutoArchive**, a local tool
(`~/Projects/AutoArchive`) that scans archive.org collections and matches
the files against canonical episode order (via TVMaze), then exports
straight into VaultVision's `data.js` format. That matching is automated,
not hand-verified episode-by-episode the way most of the rest of this
library was — treat season/episode placement here as AutoArchive's best
match rather than a frame-checked guarantee.

Every `fileHint` was checked against the archive.org item's file listing —
all 51 resolve to a real file, nothing missing. Episode count (10+21+10+10)
matches the show's real broadcast structure.

The exported `data.js` originally used the folder id `Osbournes4Series` and
titled every episode `THE OSBOURNES 4 ( SERIES) - ...` — cruft from how the
source item name got parsed. Renamed to the standard `Osbournes` id/title
here; every episode title's show-name segment was stripped back to
`THE OSBOURNES`. S01E01 also carried a duplicated `The Osbournes The
Osbournes ...` in its episode name (from the underlying filename itself
repeating the show name); collapsed to a single `The Osbournes - ...`.

The source library also contained a second, weaker AutoArchive match for
this show — item `the.-osbournes-complete-show`, 34 episodes, generic
undated filenames, and a gap at S03E06 — that clearly duplicates this show
with less complete coverage. It was excluded in favor of this 51-episode
build.

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
