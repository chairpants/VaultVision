# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Batman: The Animated Series* this player streams comes
from [a single archive.org item](https://archive.org/details/dragon-ball-z-1989-2018-the-complete-uncut-series-16-dbz-movies-4-ovas-8-tv-spec)
(its archive.org identifier is a leftover from a repurposed/renamed
upload — the actual content is Batman). The item bundles two very
different rips: a messy DVD disc-chapter dump (files numbered by disc
position, not real episode order, plus two literal multi-hour whole-disc
files) and a clean, properly-titled BluRay-sourced set. Only the clean set
is used here.

109 episodes: seasons 1-4 (85 episodes) are the original 1992-95 run;
seasons 5-6 (24 episodes) are *The New Batman Adventures* (1997-98),
renumbered to continue the season count rather than collide with TAS's
own season 1/2. Deep gratitude to whoever assembled and uploaded these.
Support the Archive: https://archive.org/donate

The BluRay-sourced originals carry AC3 (Dolby Digital) audio, which
browsers don't decode natively — that played back silent. Every episode
uses archive.org's own `.ia.mp4` derivative instead (h264 video, AAC
audio), the same fix applied to Get Smart elsewhere in this project.

*Batman: The Animated Series* and *The New Batman Adventures* are the
property of their respective rights holders; this project streams a
publicly hosted recording and hosts no video content itself. Two bonus
movies bundled in the same archive.org item (*Mask of the Phantasm* and
*Sub-Zero*) weren't added to the lineup — out of format for an episode
list.

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
