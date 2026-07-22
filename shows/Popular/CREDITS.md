# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Popular* this player streams comes from
[a single archive.org item](https://archive.org/details/popular-1999-2001)
that bundles the complete series as individual files. 43 episodes across
2 seasons (The WB, 1999-2001) — the full run, matching the item's own
"all 43 eps" description exactly once cleaned up. Deep gratitude to
whoever assembled and uploaded the whole run in one place. Support the
Archive: https://archive.org/donate

*Popular* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Cleanup notes

This item needed real cleanup: a promo/interview clip and an
uploader-flagged broken duplicate of S01E01 ("only works for first 9
minutes") were dropped, plus 3 more exact or near-exact duplicate files
(two copies of S01E22, and two copies each of S02E09/E13, one of each
pair being an inferior split-into-parts stream rip) — the better copy of
each was kept.

Season 1's filenames are mostly just the same repeated cast list pasted
into every entry rather than a real per-episode title, so season 1 is
listed by code only; season 2's titles are real and are kept.

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
