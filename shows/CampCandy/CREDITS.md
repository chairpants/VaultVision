# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

The episodes of *Camp Candy* this player streams come from
[a single archive.org item](https://archive.org/details/s-02e-12-one-million-years-bc),
a fan-assembled collection rather than a clean "complete series" upload.
34 of the roughly 65 episodes across 3 seasons (NBC, 1989-92) are present.

*Camp Candy* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Known mess (per your own warning, and it checked out)

- **Real gaps**: the collection itself is missing episodes — season 1 has
  no 10 or 11, season 2 has no 6, 9, or 13, season 3 has no 11. Nothing to
  patch that from this end; it's what the uploader had.
- **Duplicate episodes, resolved**: 12 episodes existed as two different
  files — a plain version and one from a "Polish - English Insert" folder,
  where the uploader had spliced in a better-quality Polish source with
  the English audio re-synced on top (per their own description). Where
  both existed, the curated Polish-insert version was used; the plain
  version fills in everything else.
- A separate "Promos and Bumpers" folder (network bumpers, a music-video
  clip, a promo reel) was left out — not episodes.

## Format note

Unlike RetroTube's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
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
