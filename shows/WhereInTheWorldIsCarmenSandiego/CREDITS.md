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
[a single archive.org item](https://archive.org/details/where-in-the-world-is-carmen-sandiego-tv-show-series)
— 150 flat-named `.mp4` files covering the first two complete seasons of the
1991 PBS game show (WQED Pittsburgh, hosted by Greg Lee with Lynne Thigpen as
The Chief and Rockapella on music), plus the first 20 episodes of Season 3.
Deep gratitude to whoever assembled and uploaded it. Support the Archive:
https://archive.org/donate

This is the **game show**, not *Where on Earth Is Carmen Sandiego?* (the
1994 FOX cartoon) or any of the later animated series.

*Where in the World Is Carmen Sandiego?* is the property of its respective
rights holders; this project streams a publicly hosted recording and hosts no
video content itself.

## Source notes

### Ordering rule applied

**Trust the numbering, replace the titles** (ADDING_A_SHOW step 1c, first
rule). Every file is named `WitWiCS Sxx Eyy Title.mp4`, the numbering is
gapless, and the two seasons that are present in full contain exactly 65
episodes each — matching the broadcast record.

Wikipedia's
[article on the show](https://en.wikipedia.org/wiki/Where_in_the_World_Is_Carmen_Sandiego%3F_(game_show))
confirms the series structure (5 seasons, 295 episodes: 65 / 65 / 65 / 50 /
50) but carries **no per-episode title list**, so the titles were verified
against the Carmen Sandiego Wiki's
[episode guide](https://carmensandiego.fandom.com/wiki/Where_in_the_World_is_Carmen_Sandiego%3F_(TV_Show)/Episode_Guide)
instead. All 150 titles matched that guide at their claimed season/episode
positions — nothing disagreed. Note that the fandom wiki is a weaker source
than Wikipedia; the placement is a count-matched relabel, not a frame-by-frame
verification.

Ten titles are restored in the guide where the filesystem could not hold the
punctuation, or where the uploader shortened them:

| File | Guide title |
|---|---|
| `S01 E23 Minnehaha - The Filching of the Falls` | Minnehaha: The Filching of the Falls |
| `S01 E25 Who Pinched Pisa_` | Who Pinched Pisa? |
| `S01 E44 Who Stole the Hole_` | Who Stole the Hole? |
| `S01 E46 What Goes Up` | What Goes Up… |
| `S01 E56 Who Stole the Bowl_` | Who Stole the Bowl? |
| `S02 E04 What's What With Watts_` | What's What With Watts? |
| `S02 E18 Where'd the Alamo Go_` | Where'd the Alamo Go? |
| `S02 E33 Who Copped Khufu_` | Who Copped Khufu? |
| `S02 E34 Who Bagged the Bull_` | Who Bagged the Bull? |
| `S02 E38 Where's Dave_` | Where's Dave? |

(The trailing `_` is the uploader's stand-in for `?`, which filesystems and
URLs both dislike. The `fileHint` keeps the `_` exactly as uploaded.)

Season 1 episodes 58 and 62 — "The Purloined Pooch" and "The Disoriented
Express" — are the show's two pilot recordings, marked `PILOT #1` / `PILOT #2`
in the fandom guide but broadcast in those slots. They are listed in place.

### Season counts vs. the broadcast record

| Season | Broadcast | Shipped | Notes |
|---|---|---|---|
| 1 (1991) | 65 | 65 | complete |
| 2 (1992) | 65 | 65 | complete |
| 3 (1993) | 65 | **20** | E21–E65 are not in the item |
| 4 (1994) | 50 | **0** | not in the item |
| 5 (1995) | 50 | **0** | not in the item |

**150 of the series' 295 episodes.** Seasons 1 and 2 are complete; Season 3 is
cut off after E20 ("The Bee-Bird Burglary"); Seasons 4 and 5 are absent
entirely. That is what the item holds — nothing was excluded to get there.

### Files excluded

Nothing was excluded on editorial grounds. Every one of the item's 150 video
files is an episode and every one is listed. The only non-listed entries are
the item's housekeeping files, which are not video:

| File | Why |
|---|---|
| `__ia_thumb.jpg` | Archive item tile (still image) |
| `…_archive.torrent` | Archive BitTorrent metadata |
| `…_files.xml`, `…_meta.xml`, `…_meta.sqlite` | Archive metadata |
| `…thumbs/*.jpg` (646 files) | Archive's generated thumbnail strips |

There are no duplicate cuts, bumpers, clip fragments, extras or commentary
tracks in this item, and no `h.264 IA` derivatives — every file is a
`source: original` MPEG4 `.mp4`, which streams directly.

### Runtimes

All 150 episodes run 1 276–1 732 s (21–29 min), median 1 633 s (27 min) —
consistent with a half-hour PBS slot. Nothing looks truncated, so no
`incompleteEpisodes` flags were needed.

## Poster art

`art/WhereInTheWorldIsCarmenSandiego.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/965). Already a 2:3 portrait,
which is the shape the guide's card art box wants.


## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
