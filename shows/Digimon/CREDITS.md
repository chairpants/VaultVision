# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Digimon: Digital Monsters - The Complete Collection (Saban Entertainment,
edited version)](https://archive.org/details/digimon-digital-monsters-the-complete-collection-saban-entertainment-edited-version)
— all 104 episodes of the first two series, about 20 minutes each. Support the
Archive: https://archive.org/donate

*Digimon* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Complete and gapless: 54 episodes of *Digimon Adventure* and 50 of *Digimon
Adventure 02*, matching the broadcast record exactly, listed as seasons 1 and 2
with `seasonNames` giving each its real name rather than a bare number.

This is the Saban English dub, and the titles are the dub's, taken from the
broadcast record — Wikipedia's per-series episode lists, parsed from raw
wikitext. All 104 matched their slot with nothing falling back to a filename.

Getting there needed a parser fix worth recording: these articles build their
tables with `{{#invoke:Episode list|sublist}}` rather than the plain
`{{Episode list}}` every other show here uses, so the first pass read zero
entries and the title cross-check scored 0/104. It scores 95/104 against the
filenames once the invoke form is recognised — the nine differences are the
upload's `[a.k.a. ...]` annotations, not real disagreements.

Every episode is an `.mkv`, played through the `.mp4` derivative archive.org
generated alongside; all 104 have one, checked file by file.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

A frame from the first episode.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
