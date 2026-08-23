# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[blade-runner_202411](https://archive.org/details/blade-runner_202411) — one
file, uploader-described as "Bladerunner movie complete as mp4". The file's
own embedded container title (read via `ffprobe`, not shown anywhere in the
item's public listing) identifies it more specifically: *Blade Runner: The
Director's Cut (1992)*, a letterboxed widescreen PAL VHS recording, "w/Adverts
& Bumpers" — i.e. a home tape recording with the original broadcast's
commercial breaks and station bumpers left in, re-encoded from a separate
archive.org item (`win-20220219-16-06-58-pro`).

Support the Archive: https://archive.org/donate

*Blade Runner* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

**This is the Director's Cut (1992), not the original 1982 theatrical
release** — confirmed by the embedded file metadata, not by watching start to
finish. Runtime (~115 min) includes the baked-in period TV ads and bumpers
from the source recording, not just the film itself, consistent with a PAL
VHS-off-air capture.

Two other Blade Runner items were deliberately passed over before this one:
a French-dubbed-only upload (`film-blade-runner-vf-1982`, no English audio or
subtitles), and a multi-file item from an uploader whose collection also
included an explicitly YTS/YIFY-branded scene release
(`blade-runner-1982_202601`) — skipped as a piracy-scene-sourced batch
regardless of which specific file was picked from it. This item has no such
branding and its own metadata traces back to a personal VHS recording.

## Poster art

Title card grabbed from the film itself.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
