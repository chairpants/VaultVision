# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Celebrity Deathmatch* this player streams comes from
[a single archive.org item](https://archive.org/details/celebrity_deathmatch_season1)
that bundles the complete series as individual files. 93 episodes (a pilot
plus 92 numbered) across 6 seasons (MTV, 1998-2007). Deep gratitude to
whoever assembled and uploaded the whole run in one place. Support the
Archive: https://archive.org/donate

*Celebrity Deathmatch* is the property of its respective rights holders;
this project streams a publicly hosted recording and hosts no video
content itself.

## Known data quirk

The source labels episodes with both a season-relative S0XE0Y code and an
absolute "Episode NN" number. For 4 absolute numbers (55-58) the S/E code
drifted by one, producing an exact duplicate file under two adjacent
codes — the lower-numbered slot of each pair is kept, the other dropped.
Absolute episode 54 is genuinely missing from this collection; the
source's own numbering has no gap around it, so there's no clean way to
tell exactly where it would have landed beyond "somewhere in season 3."

## Episode titles

The source files have no per-episode titles baked into their filenames —
just numbers — so the guide lists each entry as "S01E01" etc. without a
title.

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
