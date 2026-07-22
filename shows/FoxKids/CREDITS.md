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
digitized and preserved by its community of uploaders — real off-air/VHS
captures of the Fox Kids Saturday morning block, with original commercials
intact. See `../research/fox-kids-saturday-morning.md` for how this list was
verified (Rinse Repeat-style recreations and off-topic uploads were
excluded). Several dates are approximate rather than exact — where a tape's
own archive.org metadata date was contradicted by its actual content (e.g.
X-Men can't predate its October 1992 premiere), the player shows a loose
era instead of a fabricated precise date. Deep gratitude to the VHS-hoarders
who kept Saturday morning alive. Support the Archive: https://archive.org/donate

The player also uses the Archive's metadata API and per-item thumbnail frames
(for the ambient lighting effect). Fox Kids and its shows are the property
of their respective rights holders; this project streams publicly hosted
recordings and hosts no video content itself.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Show/segment data

One episode (`vhs-tv-fox-kids-monkey-magic-woc`) has real program timestamps
straight from the uploader's own archive.org description. Every other
episode's show order comes from the tape's title/description, spread evenly
across the runtime since no exact timestamps were given — same idea as
SNICK-lite's `LINEUPS` fallback, but keyed per-tape (`SHOWS`) instead of by
era, since Fox Kids affiliates didn't run one fixed national lineup the way
SNICK or TGIF did.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
