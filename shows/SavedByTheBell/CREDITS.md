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
[a single archive.org item](https://archive.org/details/savedbythebell_202507)
that bundles the whole franchise. 120 entries across 7 "seasons":

- **Season 0** — *Good Morning, Miss Bliss* (13 episodes), the Disney
  Channel prequel that got reworked into *Saved by the Bell*.
- **Seasons 1-4** — the original NBC run (87 episodes).
- **Season 5** — *The College Years* (19 episodes).
- **Season 6** — *Wedding in Las Vegas*, the standalone reunion TV movie,
  given its own single-entry season since it doesn't belong to any of the
  above.

Deep gratitude to whoever assembled and uploaded the whole thing in one
place. Support the Archive: https://archive.org/donate

*Saved by the Bell*, *Good Morning, Miss Bliss*, and *The College Years*
are the property of their respective rights holders; this project streams
a publicly hosted recording and hosts no video content itself.

## Known quirks

- Season 4's "Hawaiian Style" (04x23) runs about 93 minutes against every
  other episode's ~23 — that's the 2-part TV movie bundled into a single
  file under a regular episode slot, not a truncation issue, so it's left
  exactly as the source has it.
- *The College Years* had a real data problem: two files were both
  labeled 01x12 ("A Question of Ethics" and "Teacher's Pet"), and there
  was no 01x14 at all. "Teacher's Pet" was moved to fill 01x14 — the
  simplest explanation that resolves both the duplicate and the gap at
  once, but it isn't verified against an outside episode guide.

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
