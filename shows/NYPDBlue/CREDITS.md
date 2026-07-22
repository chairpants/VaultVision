# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *NYPD Blue* this player streams comes from
[a single archive.org item](https://archive.org/details/001-nypd-blue)
that bundles the complete series as individual files. 260 episodes
across 12 seasons (ABC, 1993-2005). Deep gratitude to whoever assembled
and uploaded the whole run in one place. Support the Archive:
https://archive.org/donate

*NYPD Blue* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Season numbering and a known gap

The source numbers episodes flat (001-260) with no season markers at
all, so the season split used here (22/22/22/22/22/22/22/20/23/22/22/20,
the show's real published season sizes) is derived, not anything in the
source filenames.

The real series ran 261 episodes; this collection has 260, missing
exactly one. It landed in season 12 (19 episodes here instead of the real
20) — but the source's own numbering has no internal gap, so there's no
way to identify which specific real episode is the missing one without a
full title-by-title cross-reference against an outside episode guide.

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
