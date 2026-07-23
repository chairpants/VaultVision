# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams comes from
[a single archive.org item](https://archive.org/details/Seinfeld.Complete.Series)
that bundles the whole series, one folder per season. 171 entries across 9
seasons (NBC, 1989-98) — several of the show's hour-long outings (two-part
episodes like "The Trip," "The Pilot," and the finale) are single files
covering two episode numbers, so the guide lists them as e.g. S04E23-24
rather than splitting them. A handful of retrospective specials and
interview extras bundled in the same item (behind-the-scenes documentaries,
an alternate pilot) aren't included here since they aren't episodes of the
show itself. Deep gratitude to whoever assembled and uploaded the whole
thing in one place. Support the Archive: https://archive.org/donate

*Seinfeld* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

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
