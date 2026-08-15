# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[MTV TRL Total Request Live Archive (1998-2001)](https://archive.org/details/trl-archive)
— 53 dated recordings, digitized from tapes, spanning September 1998 to
January 2001. [MTV TRL (July 8, 2002)](https://archive.org/details/vts-01-1_20250625)
— a single later recording, captured as four sequential DVD chapter files.
Support the Archive: https://archive.org/donate

*MTV TRL / Total Request Live* is the property of its respective rights
holders (MTV Networks/Viacom); this project streams publicly hosted
recordings and hosts no video content itself.

## Source notes

TRL has no broadcast "seasons" or official episode numbering — this player
lists every surviving recording as `S01Enn`, dated in the episode name, in
chronological broadcast order. One recording carries no specific date in its
filename ("TRL 2000 - TRL Uncensored.mp4"); it's placed between the last
dated 1999 recording and the first dated 2000 one, and labeled "TRL
Uncensored" instead of a date.

`trl-archive` holds 69 video files; 16 were excluded as short clips/bumpers
(all under 5 minutes, mostly 1-4 minutes — teaser or partial-tape fragments
rather than full broadcasts): `TRL 1998-09-21`, `1998-10-18`, `1998-10-26`,
`1999-02-03`, `1999-02-08`, `1999-02-09`, `1999-03-16`, `1999-04-05`,
`1999-04-15`, `1999-05-13`, `1999-07-24`, `1999-07-25`, `1999-08-06`,
`1999-08-11`, `2000-11-01`, `2001-09-25`.

`vts-01-1_20250625` holds `VIDEO_TS.mp4` (a near-empty DVD menu placeholder,
excluded) plus `VTS_01_1.mp4` through `VTS_01_4.mp4` — one continuous ~35
minute recording split across four DVD chapter files by the ripping/capture
process. Rather than list four separate stub episodes, they're chained into
one logical episode (S01E54) via `mergeParts`, playing back to back.

## Format note

`mergeParts: true` — only S01E54 uses it, for the reason above. Every other
episode is a single self-contained file, so REW/FF pages to the
previous/next episode (wrapping at the ends) rather than seeking within a
block.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
