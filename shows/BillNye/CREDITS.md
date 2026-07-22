# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Bill Nye the Science Guy* this player streams comes from
[a single archive.org item](https://archive.org/details/billnyethescienceguythecompleteseries-07-28-2021)
that bundles the complete series as individual files — 5 seasons, 100
episodes (1993-1998). Deep gratitude to whoever assembled and uploaded the
whole run in one place. Support the Archive: https://archive.org/donate

*Bill Nye the Science Guy* is the property of its respective rights
holders; this project streams a publicly hosted recording and hosts no
video content itself.

## A note on season numbering

The archive.org filenames are just flat sequential numbers (`01 Flight.mp4`
... `100 Motion.mp4`), no season markers — but the real show is a clean 5
seasons of 20 episodes each, so the player derives `S01E01`-`S05E20` from
each file's position (episode N → season `ceil(N/20)`, episode
`((N-1) % 20) + 1`) to get the season-paged guide everyone else has.

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
