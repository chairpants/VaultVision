# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

This player streams
[a single archive.org item](https://archive.org/details/gilligans-island-complete-tv-series),
which is organised into `Season 01` / `Season 02` / `Season 03` folders — so
episode rows carry a path, not a bare filename. Deep gratitude to the uploader.
Support the Archive: https://archive.org/donate

*Gilligan's Island* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## What's here

**The complete run — all 98 broadcast episodes** (36 / 32 / 30), plus the
unaired pilot.

The pilot, *Marooned*, is a different cut of the story that was reworked into
the broadcast premiere, so it is listed as `S00E00` under its own
`seasonNames` label ("Unaired Pilot") rather than being folded into season 1.
It is the first row, so the show plays in production order from the top.

Runtimes are tight across the whole run — 1464s to 1575s against a 1518s
median — so nothing looks truncated and there is no `incompleteEpisodes` entry.
Nothing was excluded on editorial grounds.

The item also carries a colorized cut of the pilot, which was deliberately
skipped in favour of the black-and-white one.

## Episode order

Every file carries its own `SxxEyy` code within its season folder
(`Season 01/Gilligans.Island.S01E01.Two.On.A.Raft.mp4`), the per-season counts
match the broadcast record exactly, and the run is gapless. The numbering was
trusted and titles were taken from the canonical episode list.

**97 of 99** filename titles already matched the canonical title exactly. Both
differences are trivial:

| Code | Canonical | Filename said |
|---|---|---|
| S00E00 | Marooned (Unaired Pilot) | Series Pilot |
| S01E07 | Sound of Quacking | The Sound of Quacking |

With counts matching, numbering present, and titles corroborating at 97 of 99
positions, this is about as well supported as an upload gets. It remains an
educated placement rather than a frame-by-frame verification.

## Related titles elsewhere in the guide

The two Gilligan's Island reunion TV movies are separate entries, not part of
this show: *Rescue from Gilligan's Island* (1978) and *The Harlem Globetrotters
on Gilligan's Island* (1981), both under the movie shelves.

## Poster art

`art/GilligansIsland.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/1921). Already a 2:3 portrait, which is
the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
