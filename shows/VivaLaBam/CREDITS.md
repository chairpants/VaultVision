# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

40 episodes from one archive.org item:
[Viva La Bam (complete series)](https://archive.org/details/vivalabam).
Support the Archive: https://archive.org/donate

*Viva La Bam* is the property of its respective rights holders (MTV
Networks/Viacom); this project streams a publicly hosted recording and
hosts no video content itself.

## Source notes

This show's episode list was assembled by **AutoArchive**, a local tool
(`~/Projects/AutoArchive`) that scans archive.org collections and matches
the files against canonical episode order (via TVMaze), then exports
straight into VaultVision's `data.js` format. That matching is automated,
not hand-verified episode-by-episode the way most of the rest of this
library was — treat season/episode placement here as AutoArchive's best
match rather than a frame-checked guarantee.

Every `fileHint` was checked against the archive.org item's file listing —
all 40 resolve to a real file, nothing missing.

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
