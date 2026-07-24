# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Pokémon Season 2 English Dub with English
Subtitles](https://archive.org/details/20220907_20220907_0542) — 36 files, the
complete Orange Islands season. Thanks to whoever uploaded it. Support the
Archive: https://archive.org/donate

*Pokémon* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

**Complete at 36 episodes**, S02E01–S02E36 with no gaps and no duplicates —
matching the broadcast record exactly.

The upload carries `SxxEyy` numbering and its count matches the record, so the
numbering was trusted and the titles replaced with the canonical ones — the
"trust the numbering" case in `ADDING_A_SHOW.md` §1c. Every title agreed with
the record on identity and order; the differences are punctuation only, and the
record's wording is used: "Fit to Be Tide" over "Fit to Be Tide!", "The
Mandarin Island Miss Match" over "Miss-match", "Hello, Pummelo!" over "Hello
Pummelo", "The Underground Round-Up" over "Round Up".

**This is Pokémon's second season**, listed as its own card because Adventures
on the Orange Islands is a separately branded series. The episode codes keep
the real season number, so the show has a Season 2 and no Season 1;
`seasonNames` labels it "Orange Islands" in the player. Season 1 lives
separately as `PokemonIndigoLeague`.

### Codec caveat — worth knowing before this breaks

The originals are **x265 in Matroska**, which no browser decodes. Every episode
therefore depends on Archive's `.mp4` derivative. All 36 exist today, and the
episode list points at those `.mp4` files **directly** rather than naming the
`.mkv` and relying on the player's same-stem fallback, so nothing has to guess
at play time on either the web player or Roku.

Probed rather than assumed, across the first, middle and last of the run:
h.264 video, AAC audio, 480p. Note the frame width varies slightly between
files (628–630 px) — a DVD rip artefact, harmless, but it does break `ffmpeg`
tiling filters that assume even dimensions.

The dependency is the risk: if the Archive ever drops these derivatives, the
whole season goes unplayable, unlike `PokemonIndigoLeague`, whose files are
direct `.mp4` originals. That is the same fragility recorded in
`shows/RenAndStimpy/CREDITS.md`.

Runtimes in `durations` come from the item's own metadata, ~20–22 minutes each.

## Format note

Nothing unusual — one season, one item, one file per episode.

The poster is the "Pallet Party Panic" episode title card rather than a series
logo: this rip has its opening trimmed, cutting from the cold open straight to
the title card, so no logo frame exists in the source.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

Despite the item's title promising English subtitles, there are **no sidecar
subtitle files**. The subtitles are embedded in the `.mkv` originals and do not
survive into the `.mp4` derivatives the player actually streams, so there is
nothing to load. Extracting them from the `.mkv` files into `.vtt` would be the
route if captions are ever wanted here.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
