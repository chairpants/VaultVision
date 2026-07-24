# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Eerie Indiana 1991 Complete Series](https://archive.org/details/eerie-indiana-1991_202601)
— all 19 episodes of the single season (NBC, 1991-92), about 24 minutes each.
Support the Archive: https://archive.org/donate

*Eerie, Indiana* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

Every episode is an `.mkv`, which the player handles by falling back to the
`.mp4` derivative archive.org generated alongside it — all of them have one,
checked file by file, so nothing here depends on a container browsers won't
open.

## Source notes

Complete at 19 episodes, named `E01 · Title.mkv`. Titles come from Wikipedia's
episode list, parsed from raw wikitext; E13 has no counterpart there and keeps
the upload's own title.

## Poster

The town sign from the first episode — as good as a title card for this one.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
