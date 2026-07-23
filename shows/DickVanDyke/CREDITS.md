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
[a single archive.org item](https://archive.org/details/the-dick-van-dyke-show-the-complete-series-1961-1966)
that bundles the whole run, one folder per season. All 158 episodes across 5
seasons (CBS, 1961-66) — the complete series, checked episode by episode
against the broadcast order — plus the 1960 unaired pilot, "Head of the
Family", in which Carl Reiner played the part that became Rob Petrie. Deep
gratitude to whoever assembled and uploaded the whole thing in one place.
Support the Archive: https://archive.org/donate

*The Dick Van Dyke Show* is the property of its respective rights holders;
this project streams a publicly hosted recording and hosts no video content
itself.

## Source notes

This is the best-looking source of the four 1960s sitcoms here — a FilmRise /
Paul Brownstein restoration at 1280x720, pillarboxed to keep the original 4:3
frame, where the others are 640x480 tape rips.

The pilot has no season of its own, so it's filed as S00E00 and the guide
labels that group "Unaired Pilot" instead of "Season 0".

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
