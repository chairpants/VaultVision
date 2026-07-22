# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Hey Dude* this player streams comes from
[a single archive.org item](https://archive.org/details/hey-dude_202211) that bundles the complete series as
individual files, organized into "Season N/" folders. 5 seasons, 65 episodes
(1989-1991) plus a bonus interview special with Christine Taylor — the
Nickelodeon dude-ranch sitcom. Deep gratitude to whoever assembled and
uploaded the whole run in one place. Support the Archive:
https://archive.org/donate

*Hey Dude* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Cover art

Logo pulled from Wikimedia Commons via the Wikipedia REST API, no API key
needed — same source used for the rest of RetroTube's hub art.

## Format note

Unlike RetroTube's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
a multi-hour broadcast block — every entry is one full, self-contained
episode. So a quick REW/FF tap pages to the previous/next episode instead
of seeking within one (wrapping from the last episode back to the first and
vice versa) — same destination as picking it from GUIDE. Press-and-hold
still scrubs through the current episode, unchanged.

The interview special has no season number of its own on the archive.org
listing, so it's filed as season 0 and gets its own single-episode column
in the guide.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
