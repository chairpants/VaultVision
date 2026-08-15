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
[a single archive.org item](https://archive.org/details/night-gallery-101-the-cemetery-eyes-the-escape-route)
— its id names only the pilot's three segments, but the item ("N Gallery
Seasons 1,2,3") actually holds the whole of Rod Serling's *Night Gallery*
(NBC, 1969-73): the 1969 pilot TV movie, all 6 Season 1 hours, all 22
Season 2 hours and all 15 Season 3 half-hours, plus the syndication-only
"Die Now, Pay Later". Deep gratitude to whoever assembled and uploaded it.
Support the Archive: https://archive.org/donate

*Night Gallery* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

**Ordering rule applied: pin each file individually.** The upload's own
numbering (`101`–`110`, `201`–`222`, `301`–`318`) does **not** match the
broadcast record — Season 1 was six episodes, not ten, and Season 3 fifteen,
not eighteen — so every file was matched to its episode by title against
[Wikipedia's episode list](https://en.wikipedia.org/wiki/List_of_Night_Gallery_episodes)
and pinned, rather than sliced out of the file numbering.

What disagreed, file by file:

* `101` is the 98-minute 1969 pilot TV movie (The Cemetery / Eyes / Escape
  Route), which predates the series proper. It is listed as `S00E01` with a
  `seasonNames` label of "Pilot (1969 TV movie)".
* `102`–`107` are Season 1 episodes 1-6, in order. Renumbered `S01E01`–`S01E06`
  (the upload's `102` is broadcast `S01E01`, and so on).
* `108 - The Diary` is **not** a Season 1 episode. It is Season 2 episode 8,
  filed in the wrong season, and it is byte-for-byte the same length
  (3078.81 s) as the item's `Night Gallery Extras 1 - Diary, A Matter of
  Semantics, A Big Suprise, Professor Peabody`s Last Lecture` file — i.e. the
  same content uploaded twice. Both were **excluded**; the guide uses `208`
  (3057.05 s) for `S02E08`.
* `109 - The Return of the Sorcerer` and `110 - Whisper` are half-hour Season 3
  episodes, again filed in the wrong season, and duplicate `301` and `313`.
  Both were **excluded** in favour of the `3xx` copies.
* `201`–`222` are Season 2 episodes 1-22, in order, with no disagreements.
* `301`–`315` are Season 3 episodes 1-15, in order, with no disagreements.
* `316 - Die Now, Pay Later` is the episode NBC never aired during the network
  run; it first surfaced in syndication in October 1973. It is kept, as
  `S03E16`, but at 793 s it is roughly half the length of every other Season 3
  half-hour, so it is flagged with `incompleteEpisodes` — expect it to stop
  short.
* `317 - Little Girl Lost` (1419 s) is the syndication half-hour repackaging of
  a segment that already plays inside `222` (`S02E22`, "The Caterpillar /
  Little Girl Lost"). **Excluded** as a duplicate cut.
* `318 - Witches Feast` (304 s) is a five-minute segment lifted out of `202`
  (`S02E02`). **Excluded** as a clip fragment.

That leaves 45 rows: 1 pilot + 6 + 22 + 16, which is the complete broadcast
run plus the one syndication-only episode. The second syndication-only
episode, "Room for One Less", is not in the item and is therefore missing here.

**Episode titles.** *Night Gallery* episodes have no titles of their own — each
hour is an anthology of two to four unrelated segments, and the uploader named
each file after its first segment only. The guide instead names every segment
in the episode, joined with " / ", taken from Wikipedia: so the upload's
`Night Gallery 209 - House with Ghost` reads as
"House—With Ghost / A Midnight Visit to the Neighborhood Blood Bank /
Dr. Stringfellow's Rejuvenator / Hell's Bells". Em dashes are used inside
segment names where the canonical title has one, because the guide's title
grammar splits on " - " (space-hyphen-space) and a plain hyphen there would
break the row.

One deliberate omission: Wikipedia lists a short, "Satisfaction Guaranteed",
under Season 2 — it replaced "Witches' Feast" in the 22 March 1972 *repeat* of
`S02E02`, and is not in the version of the episode this item holds, so it is
not named in the `S02E02` title.

**Segment navigation.** `segments: "none"`. `segments: "static"` with a `shows`
map was considered — it is a natural fit for an anthology, and would make
REW/FF snap between stories — but the engine divides segments evenly across
the runtime unless hand-timed `segmentTimestamps` are supplied, and these
hours hold segments of wildly different lengths (a 35-minute story next to a
2-minute blackout gag). Evenly-divided guesses would put the boundaries in the
wrong places and mislabel the `ch` popup, so REW/FF pages between episodes
instead and the segment list lives in the episode title where it is always
correct.

**Files used.** The archive-generated `*.ia.mp4` derivative throughout, except
`Night Gallery 105 - Make Me Laugh.mp4` (`S01E04`), which has no `.ia.mp4`
derivative and is served from the uploader's original. Original and derivative
are the same resolution and byte size for every other file.

Poster art is the Archive's own generated thumbnail from the middle of `218`
(`S02E18`, "The Waiting Room / Last Rites for a Dead Druid").

## Format note

`seasonNames: { 0: "Pilot (1969 TV movie)" }` relabels the season-0 heading in
the player's episode list. `show.html`'s season tabs and the Roku channel still
render it as "Season 0" — `seasonNames` is player-only.

## Poster art

`art/NightGallery.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/4318). Already a 2:3 portrait,
which is the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
