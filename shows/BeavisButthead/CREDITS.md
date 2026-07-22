# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

*Beavis and Butt-Head* this player streams comes from two archive.org
items, each a "complete series" upload bundling episodes as individual
files:

- Seasons 0-7 (the original 1992-97 MTV run, including the Liquid
  Television pilots and the Christmas/Thanksgiving specials):
  https://archive.org/details/beavis-butt-head-1992-97
- Season 8 (the 2011 MTV revival, not covered by the item above):
  https://archive.org/details/s-7-ep-41-beavis-butthead-are-dead

211 episodes total (MTV, 1992-2011). Deep gratitude to whoever assembled
and uploaded these. Support the Archive: https://archive.org/donate

*Beavis and Butt-Head* is the property of its respective rights holders;
this project streams publicly hosted recordings and hosts no video content
itself. The 1996 theatrical film *Beavis and Butt-Head Do America*, also
bundled in the seasons 0-7 item, wasn't added to the episode lineup here.

## Known gaps

- Season 8 (2011 revival) still stops at episode 12, same as before —
  neither archive.org item covers the rest of that run.

## Cover art

Logo pulled from Wikimedia Commons via the Wikipedia REST API, no API key
needed — same source used for the rest of RetroTube's hub art.

## Format note

Every entry is one full, self-contained episode (or a double-length two-parter
bundled as one file), not a multi-hour broadcast block. A quick REW/FF tap
pages to the previous/next episode instead of seeking within one (wrapping
from the last episode back to the first and vice versa) — same destination
as picking it from GUIDE. Press-and-hold still scrubs through the current
episode, unchanged.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
