# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Dragon Ball GT Remastered 1080p HD Tri Audio With Subs](https://archive.org/details/dragon-ball-gt-remastered-1080p-hd-tri-audio-with-subs-2023)
— all 64 episodes (Fuji TV, 1996-97), about 25 minutes each. Support the
Archive: https://archive.org/donate

*Dragon Ball GT* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Complete at 64 episodes, numbered 1-64 with no gaps, grouped into the series'
four sagas.

**This replaced an earlier source.** GT was first added from a different upload
that shipped 64 `.mkv` files but never got `.mp4` derivatives for episodes 7, 8
and 9 — those three probed as h.264 with AC3 audio, which no browser decodes,
so they had to be left out and the show sat at 61. This remastered upload has
all 64 with derivatives, at 1080p, so the whole series was rebuilt from it
rather than patching three episodes in from a second item and leaving the run
split across two sources.

Titles come from the broadcast record, parsed from the raw wikitext of
Wikipedia's episode list; all 64 matched their slot.

The item also carries 12 extras — Toonami promos, a trailer reel, featurettes,
Japanese trailers. They aren't episodes and aren't listed.

Every episode is an `.mkv` played through its `.mp4` derivative; all 64 have
one.

## Poster

A frame from the first episode.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
