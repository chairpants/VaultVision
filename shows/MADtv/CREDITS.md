# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *MADtv* this player streams comes from
[a single archive.org item](https://archive.org/details/madtv-s-01-e-04)
that bundles the complete series — 14 seasons, 321 episodes (1995-2009).
Deep gratitude to whoever assembled and uploaded the whole run in one
place. Support the Archive: https://archive.org/donate

*MADtv* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## A note on ordering and duplicates

The raw file listing for this item is not in season order — season 2's
episodes sort before season 1's in archive.org's own listing, and several
seasons (2, 5, 6) exist as **two separate copies**: once loose at the top
level of the item, and once inside a `Season N/` subfolder, with the folder
copies being the more complete set (some episodes, e.g. late-season 5 and
6, only exist in the folder copy). The player uses the folder copy whenever
one exists and falls back to the loose copy for seasons 8-14, which only
ever shipped as loose files (no `Season N/` folder for those). Every
episode is deduplicated to exactly one file, sorted numerically by season
then episode, starting at S01E01.

321 confirmed episodes made it in — a little short of the real show's
322-episode run, but no gap or missing episode number turned up inside any
season's own sequence, so whatever's missing wasn't identifiable from the
file list alone.

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
