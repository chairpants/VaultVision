# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Wishbone* this player streams comes from
[a single archive.org item](https://archive.org/details/wishbonefullseriesremastered)
that bundles the series as individual files, remastered. Season 1 is the
complete 40-episode run; season 2 only has 10 files here (11 episodes,
since S02E01-02 is a bundled 2-parter) — that's genuinely all this item
has for season 2, not a filtering artifact on this end. The 1998 TV movie
*Dog Days of the West*, bundled in the same item, is included as its own
single-entry season 3. Deep gratitude to whoever assembled and uploaded
this. Support the Archive: https://archive.org/donate

*Wishbone* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.
Two bonus clips in an "extras" folder in the same archive.org item weren't
added — not episodes.

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
