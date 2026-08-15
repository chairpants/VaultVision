# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

This player streams two archive.org items, one per season:

- Season 1 — https://archive.org/details/will-grace-season-1
- Season 2 — https://archive.org/details/will-grace-season-2_202407

Deep gratitude to the uploaders. Support the Archive:
https://archive.org/donate

*Will & Grace* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## What's here

**Seasons 1 and 2, complete — all 46 broadcast episodes**, in 45 rows.

`S02E23-24` ("Ben? Her?") is a single double-length file (2583s against a
~1258s series median), so it is listed once using the double-episode code form.
That is why the row count is 45 rather than 46. Nothing is missing and nothing
was excluded on editorial grounds.

Seasons 3–8 are not in either item.

## Episode order

**This upload carries no episode numbering at all.** Files are prefixed with a
letter — `A. Love and Marriage.mp4`, `B. A New Lease on Life.mp4` — and the
letter sequence runs A–V in season 1 and A–W in season 2, restarting each
season.

Ordering therefore rests on two things agreeing: the letter sequence, and the
title each filename carries. Both were mapped against the canonical episode
list, and the per-season counts match the broadcast record exactly (22, then 24
in 23 files). **39 of 45** filename titles matched the canonical title
character-for-character; the six that differed are repairs:

| Code | Canonical | Filename said |
|---|---|---|
| S01E01 | Love and Marriage (Pilot) | Love and Marriage |
| S01E10 | The Big Vent | The Big Event |
| S01E14/15 | Big Brother Is Coming: Part I/II | …Part 1 / Part 2 |
| S02E04 | Whose Mom is it Anyway? | Who's Mom Is It Anyway |
| S02E12 | He's Come Undone | He's Coming Undone |

Because the titles carried by the files corroborate the letter order at nearly
every position, the placement is well supported. It is still an inference: a
letter prefix is not broadcast metadata, and if the uploader lettered the files
in some other order, episodes would be mislabelled without anything here
revealing it.

## Poster art

`art/WillAndGrace.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/4454). Already a 2:3 portrait, which is
the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
