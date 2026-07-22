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
captures of Nick at Nite, with original commercials intact where present.
See `../research/nick-at-nite.md` for how this list was verified. Two
multi-channel tapes from that research pass were deliberately left out:
most of their runtime is a different channel entirely (TV Land, Sci-Fi,
Fox), with Nick at Nite only a small slice — not a good fit for a player
meant to feel like an evening of Nick at Nite. Deep gratitude to the
VHS-hoarders who kept the reruns running. Support the Archive:
https://archive.org/donate

The player also uses the Archive's metadata API and per-item thumbnail frames
(for the ambient lighting effect). Nick at Nite and its shows are the
property of their respective rights holders; this project streams publicly
hosted recordings and hosts no video content itself.

## A note on runtime

`nick-at-nite-1999` runs about 6 hours — a real recording, not a mistake,
but noticeably longer than the rest of the list (~2-3 hours each). If very
long archive.org streams turn out to be less reliable in practice, that's
the one to suspect first.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Show/segment data

No episode has real timestamps yet (no uploader provided a breakdown for
this bucket). Show order comes from each tape's title/description and is
spread evenly across the runtime — same approach as Fox Kids' `SHOWS` table.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
