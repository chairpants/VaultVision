# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Unlike most shows here, this one isn't sourced from a handful of per-season
items — it's 241 separate archive.org uploads, one per episode, each
identified as `murphy-brown-s<season>E<episode>-<title-slug>` (e.g.
[murphy-brown-s01E01-respect](https://archive.org/details/murphy-brown-s01E01-respect)).
Five episodes (S04E04, S06E08, S06E20, S07E04, S10E02) instead come from a
single shared pack item,
[20230323_20230323_1949](https://archive.org/details/20230323_20230323_1949),
which bundles a handful of episodes the uploader apparently couldn't find
standalone rips for. Spot-checked a sample of the per-episode items against
their listed filenames and runtimes before adding this — all matched.

*Murphy Brown* is the property of its respective rights holders; this
project streams publicly hosted recordings and hosts no video content
itself. Support the Archive: https://archive.org/donate

## Source notes

**245 of the series' 247 episodes.** Season 1 is missing S01E02 and S01E12
— no file for either turned up among the per-episode items; every other
season (2 through 10) is complete. Left as a real gap rather than papered
over with a wrong file.

**Titles cleaned up from how they arrived.** The episode list this was
built from had two systematic issues, both fixed by deriving the display
title straight from each file's own filename (which was clean) rather than
the pre-built title string (which wasn't):

- Every title repeated the show name twice — e.g. the stored title read
  "Murphy Brown Respect" for an episode whose real name is just "Respect".
- Multi-part episode titles had lost their closing parenthesis — "Brown
  Like Me (1" instead of "Brown Like Me (1)" — for every two/three-part
  episode in the run (Brown Like Me, Going to the Chapel, On Another
  Plane, Uh-Oh, You Say Potatoe I Say Potato, Retrospective, Stepping
  Out/Miles Away, Never Can Say Goodbye).

One incidental typo fixed the same way: "Bah Humboldt " (S06E09) had a
trailing space baked into the filename itself, which is preserved exactly
in the `fileHint` (it has to match the real file), but not carried into
the display title.

## Format note

Ordinary series, one episode per row — `grouping: "season"`,
`segments: "none"`. No merged parts, no segment navigation.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

Official key art, via
[TMDB](https://www.themoviedb.org/tv/3219-murphy-brown) — already a 2:3
portrait, so the same image is used for both `MurphyBrown.jpg` and the
`-tall` variant.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
