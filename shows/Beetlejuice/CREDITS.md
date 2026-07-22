# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Beetlejuice* (the animated series) this player streams
comes from [a single archive.org item](https://archive.org/details/beetlejuice-1989-complete-animated-series)
that bundles the complete series as individual files. 94 episodes across
4 seasons (1989-91; the syndicated run moved between ABC and Fox Kids
partway through) — many bundle two or three shorter segments into one
file, same as they originally aired. Deep gratitude to whoever assembled
and uploaded the whole run in one place. Support the Archive:
https://archive.org/donate

*Beetlejuice* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Known quirk

The source item's own season numbering is uneven — season 1 has 13
episodes, seasons 2 and 3 have 8 each, and season 4 has 65 — which is
almost certainly the uploader's own tagging, not this player's doing.
Kept as-is rather than guessing at "correct" season boundaries.

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
