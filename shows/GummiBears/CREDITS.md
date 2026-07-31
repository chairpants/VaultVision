# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Six per-season items, one per season:

- [Season 1](https://archive.org/details/gummi-bears-s-01-e-09-a-gummi-by-any-other-name)
- [Season 2](https://archive.org/details/gummi-bears-s-02-e-12-my-gummi-lies-over-the-ocean)
- [Season 3](https://archive.org/details/gummi-bears-s-03-e-07-day-of-the-beevilweevils)
- [Season 4](https://archive.org/details/gummi-bears-s-04-e-15-top-gum)
- [Season 5](https://archive.org/details/gummi-bears-s-05-e-11-beg-burrow-and-steal)
- [Season 6](https://archive.org/details/gummi-bears-s-06-e-19-wings-over-dunwyn)

*Adventures of the Gummi Bears* is the property of its respective rights
holders (Walt Disney Television Animation); this project streams a publicly
hosted recording and hosts no video content itself. Support the Archive:
https://archive.org/donate

## Source notes

Wikipedia's ["List of Adventures of the Gummi Bears
episodes"](https://en.wikipedia.org/wiki/List_of_Adventures_of_the_Gummi_Bears_episodes)
is the reference used for titles, ordering, and per-season counts. The show
often aired a half-hour as either one ~22-minute story or two ~11-minute
stories back to back; each item already ships those as separate files, so
each one is listed here as its own guide entry rather than merged — no
`mergeParts`, since the two halves of a pair aren't always adjacent in the
source items (see Season 6 below), which the merge machinery requires.

**Season 3 reordered.** The item's own file numbering (`S03E08`-`S03E11`)
interleaves two broadcast pairs: "Water Way to Go" / "Close Encounters of
the Gummi Kind" and "Snows Your Old Man" / "Boggling the Bears" are filed as
08/09/10/11 in upload order but that's Water Way To Go, Boggling The Bears,
Close Encounters, Snows Your Old Man — not broadcast order. The guide lists
them in Wikipedia's actual pairing (Water Way to Go, Close Encounters,
Snows Your Old Man, Boggling the Bears); the underlying filenames are
unchanged, only the guide's play order and episode codes were corrected.

**Season 5/6 boundary is a real production quirk, not an upload error.**
Episode 48, "Never Give a Gummi an Even Break" / "Friar Tum," aired as two
separately-scheduled halves seven months apart, straddling the Season 5/6
switchover — 48a during Season 5's original run (Jan 1990), 48b during
Season 6's premiere week (Sept 1990). Wikipedia's own season tables split
the pair the same way. The archive's Season 5 item doesn't contain 48a at
all; both halves instead live in the Season 6 item, filed non-adjacently as
`S06E08` and `S06E02`. Rather than let 48a vanish, it's listed here as
**S05E13**, sourced from the Season 6 item's file — the one row in this show
whose item id doesn't match the rest of its season. "Friar Tum" (48b) opens
Season 6 as **S06E01** here.

**Missing: the true Season 6 opener.** "A Gummi's Work Is Never Done"
(the actual first Season 6 episode by air date, aired two days before
"Friar Tum") has no file in the Season 6 item at all — not a numbering
quirk, just absent from this rip. Season 6 here starts at "Friar Tum"
instead. Everything else across all six seasons is present: 94 of the
95 canonical segments.

Two extra spelling notes, kept for anyone diffing against the filenames:
the item's Season 2 files all have a leading space baked into every
filename (`" Gummi Bears S02E01 - ..."`) — preserved exactly since it's
part of the real path — and "For Whom the Spell Holds" is misspelled
"...Spells Holds" in its filename only; the guide uses the correct title.

## Poster

Official key art, via
[TMDB](https://www.themoviedb.org/tv/1931-disney-s-adventures-of-the-gummi-bears)
— already a 2:3 portrait, so the same image is used for both `GummiBears.jpg`
and the `-tall` variant.

## Format note

`grouping: "season"`, `segments: "none"` — an ordinary series, no merged
parts, no static/lineup segment navigation. REW/FF pages to the previous/next
episode.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
