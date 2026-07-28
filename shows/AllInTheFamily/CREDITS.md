# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Five items, none of which alone covers a full season cleanly:

- [arcibaldo](https://archive.org/details/arcibaldo) — the Italian dub
  ("Arcibaldo"), recorded off Tokyvideo. Whatever the uploader could find,
  filenames numbered `SxEy` in what appears to be original US broadcast order.
- [1998 All In The Family Nick At Nite... WOC](https://archive.org/details/1998-all-in-the-family-nick-at-nite-norman-lear-picks-marathon-5-nights-woc_202506) —
  a 40-episode "Norman Lear Picks" marathon recorded off Nick at Nite in 1998,
  with commercials. Only 3 of its 40 episodes are used here (see below); the
  rest overlap seasons already covered elsewhere or aren't part of this show's
  episode set yet.
- [1976 All In The Family S6E21... WOC](https://archive.org/details/1976-all-in-the-family-s-6-e-21-2001-nick-at-nite-woc-720p) —
  a single episode recorded off Nick at Nite in 2001.
- [All In The Family: The Complete Third Season](https://archive.org/details/all-in-the-family-s3) —
  official DVD rip, 3 discs.
- [All In The Family: The Complete Fourth Season](https://archive.org/details/all-in-the-family-s4) —
  official DVD rip, 3 discs.

Support the Archive: https://archive.org/donate

*All in the Family* is the property of its respective rights holders; this
project streams publicly hosted recordings and hosts no video content itself.

## Source notes

Episode titles for every episode come from
[TVMaze](https://api.tvmaze.com/shows/1784/episodes), not from any upload's own
filenames — none of the five sources reliably carries the real episode name.

**Season 1** (10 of 13 episodes) and **Season 2** (15 of 24) — from
`arcibaldo`, whose files are numbered `1x01`–`3x06`. The Italian dub was
assumed to preserve original US broadcast season/episode order (the normal
practice for a straight dub, not a reordered syndication package); its numbers
were taken at face value and matched directly to TVMaze's season/episode
titles. Three additional Season 2 episodes (`S02E09`, `S02E14`, `S02E15`) —
absent from `arcibaldo` — were pulled from the 1998 Nick at Nite marathon item
instead, which happens to have those exact three among its 40 clips; those
files already carried correct `SxEy` codes and titles in their own filenames,
which line up with TVMaze. One filename in `arcibaldo`, `arcibldo ep
2x12.mp4`, is misspelled in the upload itself ("arcibldo") — used as-is since
it's the real filename on the item.

Season 1/2 episodes not available from either source (`S01E09`, `S01E11`,
`S01E12`, `S02E02`, `S02E10`, `S02E11`, `S02E13`, `S02E16`–`S02E19`,
`S02E24`) are simply missing from this show — no source for them was found.

**Season 6** (1 episode only, `S06E21` "Love by Appointment") — from the 2001
Nick at Nite recording. Its own upload title read "S6E21" but a duplicated
draft of this episode list mislabeled it `S01E21`; corrected here since the
item's title and description both clearly date it to the 1975–76 season.

**Season 3** (24 of 24 — the full season) and **Season 4** (24 of 24) — from
the official DVD rips. Neither DVD's raw filenames carry any episode
numbering: files are named after their disc only (`(Disc 1)`, `(Disc 1)1`,
`(Disc 1)2`, ... / `Season 4 Disc 1`, `Season 4 Disc 11`, ...), with bonus
featurettes, trailers, and menu loops interspersed at arbitrary track numbers
and running a fraction of an episode's length. For each disc, the very short
files (under 5 minutes) were excluded as bonus content, and the remaining
full-length files (all ~25–26 minutes) were taken in ascending track
order and assigned sequentially to that season's next unclaimed episode
number. This is an educated guess, not a verified match — DVD authoring
typically keeps episodes in broadcast order per disc, and each season's count
of full-length files (8/8/8 per season) landed exactly on the known 24-episode
count, which is reassuring, but no title-level verification was done per
episode. If an episode sits in the wrong slot, its title will be wrong; only
watching will confirm the exact placement.

## Format note

Nothing unusual — one self-contained episode per row throughout, `segments:
"none"`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
