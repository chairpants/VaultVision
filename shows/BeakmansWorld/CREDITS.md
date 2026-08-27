# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

One item, [beakmans-world](https://archive.org/details/beakmans-world), holding
the complete series in four per-season folders — 91 files, 26 / 26 / 13 / 26.
Thanks to whoever assembled and uploaded the whole run in one place. Support
the Archive: https://archive.org/donate

*Beakman's World* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## Source notes

91 files against Wikipedia's 91-episode broadcast record, and the per-season
counts match exactly (26 / 26 / 13 / 26). Seasons 2–4 carry `SxxEyy` numbering
in the filenames; season 1 numbers its files `101`–`126` instead, which maps
to `S01E01`–`S01E26` the same way. Numbering is gapless in every season.

Per the count-matched rule, the upload's numbering was trusted and its titles
kept — they are already the show's conventional segment-list titles
("Rain, Beakmania & Volcanoes"), not invented filenames. That is an educated
guess, not frame-by-frame verification: a file sitting somewhere other than
its own number claims would carry the wrong title, and only watching settles
it.

Five titles were normalised from the filenames:

| Code | Filename says | Listed as |
|---|---|---|
| `S01E10` | Levers, Beakmania **and** Television | …**&** Television |
| `S03E02` | Camo**f**lage | Camo**uf**lage |
| `S03E06` | Metamorph**y**sis | Metamorph**o**sis |
| `S04E06` | Aerosa**l** Cans | Aeroso**l** Cans |
| `S04E17` | Archimedi**a**n Screw | Archimed**ea**n Screw |

`S02E16` is listed as the upload has it, "Electronic Motors, Beakmania & Time";
"Electric Motors" is the likelier intent but not certain enough to rewrite.

Season 4's filenames carry a double space (`Beakman's World  - s04e01 - …`) and
lowercase `s04e01` codes. Both are reproduced verbatim in the `fileHint`s,
since a guessed path 404s silently.

Seasons 1, 2 and 4 were uploaded as Cinepak `.avi`, so the Archive derived
h.264 `.mp4`s alongside them — those derivatives are what's listed. Season 3
was uploaded as `.mp4` directly, so it has no derivative and the original is
listed. Runtimes are uniform across all 91 files (~21:20–21:55), so nothing
looks truncated.

`durations` records the file runtimes from the item metadata.

## Poster art

`Cover.jpg` from the archive.org item — Beakman with the rubber chicken,
1280×720.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
