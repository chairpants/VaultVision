# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams comes from five archive.org items, one
per series, covering the Saban-era 90s run only — Mighty Morphin Power
Rangers through Turbo, stopping before *Power Rangers in Space* took the
franchise into 1998:

- Season 1: https://archive.org/details/mighty-morphin-power-rangers-season-1
- Season 2: https://archive.org/details/mighty-morphin-power-rangers-season-2
- Season 3: https://archive.org/details/mighty-morphin-power-rangers-season-3
- Zeo (Season 4): https://archive.org/details/power-rangers-zeo
- Turbo (Season 5): https://archive.org/details/power-rangers-turbo_20220925

Plus [*Mighty Morphin Power Rangers: The Movie*](https://archive.org/details/mighty-morphin-power-rangers-the-movie-1995_202308)
(1995), filed as a bonus entry at the end of Season 3. 249 entries in all.
Deep gratitude to whoever assembled and uploaded the whole run. Support the
Archive: https://archive.org/donate

*Power Rangers* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Known quirks

The season 1-3 items number a handful of bonus segments (a "Fan Club"
video, a holiday special, a couple of "Karate Club" interstitials, a
Bulk & Skull clip show) under the same episode number as a real episode.
Rather than drop either one or guess a real air date for the bonus, the
loser of each collision was refiled at the end of its season — so a few
seasons run slightly past their canonical episode count. The real episodes
keep their correct numbers throughout.

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
