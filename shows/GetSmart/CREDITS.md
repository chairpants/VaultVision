# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Get Smart* this player streams comes from
[a single archive.org item](https://archive.org/details/get-smart) that bundles the complete series as
individual files. 5 seasons, 138 episodes (1965-1970) — every episode is in this one archive.org item. Deep gratitude to whoever assembled and
uploaded the whole run in one place. Support the Archive:
https://archive.org/donate

*Get Smart* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## A note on codecs

The archive.org item has two copies of most episodes: the original upload
(old MPEG-4 ASP / DivX-style video, which no modern browser can decode —
audio plays fine since that track is MP3, but the video stays black) and a
`.ia.mp4` derivative that archive.org auto-transcodes to H.264/AAC for web
playback. The player uses the derivative for every episode where one
exists. One episode, S05E24 ("Hello, Columbus – Goodbye, America"), has no
derivative on the Archive at all — its only copy is the same incompatible
codec, so that single episode's video will still be black (audio works).

## Format note

Unlike VaultVision's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
a multi-hour broadcast block — every entry is one full, self-contained
episode. So a quick REW/FF tap pages to the previous/next episode instead
of seeking within one (wrapping from the last episode back to the first and
vice versa) — same destination as picking it from GUIDE. Press-and-hold
still scrubs through the current episode, unchanged.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
