# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Unlike RetroTube's other complete-series shows, *Nick Arcade* isn't one
archive.org item bundling every episode — each episode is its own
separate upload. These 11 were found by searching archive.org for "Nick
Arcade" (movies mediatype) and keeping only the items whose titles carry a
real "S2E##" code:

- https://archive.org/details/full-size-render_20220508 (S2E01)
- https://archive.org/details/full-size-render_20220515_1156 (S2E11)
- https://archive.org/details/full-size-render_20220514 (S2E12)
- https://archive.org/details/full-size-render_20220516 (S2E19)
- https://archive.org/details/full-size-render_20220515 (S2E27)
- https://archive.org/details/full-size-render_20220506 (S2E29)
- https://archive.org/details/full-size-render_20220512 (S2E31)
- https://archive.org/details/episode-235-robert-maureen-vs.-dawn-isaac-1992 (S2E35)
- https://archive.org/details/full-size-render_20220507 (S2E37)
- https://archive.org/details/img-0330_202205 (S2E39)
- https://archive.org/details/full-size-render_20220506_2003 (S2E40)

A 12th item in that same search, S2E17
(full-size-render_20220515_2112), returns "item metadata may be invalid"
straight from archive.org and couldn't be used. All 11 usable episodes
are season 2 — no season 1 or season 3+ episodes turned up with a clean
S#E## code in that search. Deep gratitude to whoever recorded and uploaded
these. Support the Archive: https://archive.org/donate

*Nick Arcade* is the property of its respective rights holders; this
project streams publicly hosted recordings and hosts no video content
itself.

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
