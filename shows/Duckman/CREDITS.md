# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Duckman: The Complete Series](https://archive.org/details/DuckmanComplete)
— all 70 episodes across 4 seasons (USA Network, 1994-97), about 23 minutes
each. Support the Archive: https://archive.org/donate

*Duckman* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Complete and gapless, with season sizes matching the broadcast record exactly
(13, 9, 20, 28). Files sit in per-season folders inside the item.

Titles come from the record, parsed from the raw wikitext of Wikipedia's
episode list. This upload's own labels were already good — 69 of 70 agree, the
sole difference being that it marks the first episode "I, Duckman (Pilot)"
where the record just says "I, Duckman".

Fifteen filenames drop the space after the show name (`DuckmanS01E08` rather
than `Duckman S01E08`). They're matched on the `SxxEyy` either way, so nothing
is missing; it's only inconsistency in the upload.

Every episode is an `.mkv`, played through the `.mp4` derivative archive.org
generated alongside; all 70 have one.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

A frame from the pilot.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
