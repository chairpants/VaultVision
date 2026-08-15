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
[a single archive.org item](https://archive.org/details/btvs_20260710) — a
DVD-sourced rip of the complete-series box set, uploaded as one folder tree
(`Buffy the Vampire Slayer (1992+1997–2003)/Season N/…`). The item holds far
more than the show: the 1992 feature film, DVD special features, bonus
featurettes, and a full parallel set of audio-commentary tracks. Only the
episodes themselves are listed here — see **Source notes** for the complete
exclusion list. Deep gratitude to whoever assembled and uploaded it. Support
the Archive: https://archive.org/donate

*Buffy the Vampire Slayer* is the property of its respective rights holders;
this project streams a publicly hosted recording and hosts no video content
itself.

## Source notes

### Ordering rule applied

**Trust the numbering, replace the titles** (ADDING_A_SHOW step 1c, first
rule). Every episode file carries an explicit `S-E_` prefix (`4-10_Hush`), the
run is gapless within each season, and the per-season counts match the
broadcast record everywhere except Season 7 (below). Titles in the guide are
taken by position from
[Wikipedia's episode list](https://en.wikipedia.org/wiki/List_of_Buffy_the_Vampire_Slayer_episodes),
not from the filenames.

Nothing in the upload's numbering disagreed with the broadcast order — the
filenames' own titles matched Wikipedia's on all 141 episodes present, modulo
punctuation the filesystem cannot hold. Corrections the guide makes:

| File | Guide title |
|---|---|
| `1-4_Teacher-s Pet` | Teacher's Pet |
| `1-8_I Robot-You Jane` | I, Robot… You, Jane |
| `1-11_Out of Mind-Out of Sight` | Out of Mind, Out of Sight |
| `2-9_ / 2-10_Whats My Line-Part 1/2` | What's My Line? (Part 1/2) |
| `2-16_Bewitched-Bothered-and Bewildered` | Bewitched, Bothered and Bewildered |
| `3-2_Dead Mans Party` | Dead Man's Party |
| `3-3_Faith-Hope-and Trick` | Faith, Hope & Trick |
| `4-4_Fear Itself` | Fear, Itself |
| `4-20_The. Yoko Factor` | The Yoko Factor |
| `5-12_Chheckpoint` (typo) | Checkpoint |
| `6-8_Tabula. Rasa` | Tabula Rasa |
| `6-12_Double Meat Palace` | Doublemeat Palace |
| `6-14_Older and Faraway` | Older and Far Away |
| `7-16_Story Teller` | Storyteller |
| `  5-1_Buffy VS Dracula` (two leading spaces in the filename — preserved exactly in the `fileHint`) | Buffy vs. Dracula |

Because this is a count-matched relabel rather than a frame-by-frame check, a
file that sits somewhere other than where its own `S-E_` prefix claims would
carry the wrong title. Nothing suggests that happened here — the filenames'
own titles agree with the broadcast order throughout — but only watching can
settle it.

### Season counts vs. the broadcast record

| Season | Broadcast | Shipped | Notes |
|---|---|---|---|
| 1 | 12 | 12 | complete |
| 2 | 22 | 22 | complete |
| 3 | 22 | 22 | complete |
| 4 | 22 | 22 | complete |
| 5 | 22 | 22 | complete |
| 6 | 22 | 22 in 21 files | S06E01–02 "Bargaining" is one 87-minute file |
| 7 | 22 | **19** | **S07E04 "Help", S07E11 "Showtime" and S07E15 "Get It Done" are not in the item at all** |

**141 of the series' 144 episodes, in 140 rows.** Season 7 is incomplete; the
three missing episodes are simply absent from the upload, not excluded by us.
The guide will show Season 7 jumping E03 → E05, E10 → E12, E14 → E16.

### Truncated rips

Two Season 7 files are far short of the ~42-minute norm and are flagged with
`incompleteEpisodes` so they don't read as a playback bug:

* **S07E03 "Same Time, Same Place"** — 406 s (6 min 46 s) instead of ~42 min.
  Badly truncated.
* **S07E14 "First Date"** — 1 830 s (30 min 30 s) instead of ~42 min. Missing
  roughly the last 12 minutes.

All other episodes fall in the 2 460–3 010 s band (41–50 min) that the rest of
the set occupies, except the double-length S06E01–02 (5 218 s / 87 min), which
is correct for a two-part premiere presented as one file.

### Codec / audio

Probed: `h.264` High profile, 720×540, with **four** AAC-LC stereo tracks at
320 kbps each (the DVD's language dubs). Only track 1 is flagged `default`, so
a browser `<video>` element plays that one — which should be the English
program mix, but nothing in the file tags the languages (`language=und` on all
of them), so that is inference rather than verification. If an episode ever
plays in the wrong language, this is why.

### Files deliberately excluded (541 of the item's 677 video entries)

| Count | What | Why |
|---|---|---|
| 228 | `._<name>.mp4` / `._<name>.heic` | macOS AppleDouble resource-fork stubs — 4 096-byte files with `length: 0`. Not video. |
| 174 | `source: original` `.mp4` twins | Every episode and commentary exists twice: as the uploaded original and as Archive's `h.264 IA` derivative. The guide points at the `.ia.mp4` derivative, per house style. |
| 88 | everything under `Season N/Special Features/` and `Season 2/S2 Special Features/` | DVD extras: trailers, script-to-screen features, featurettes, cast biographies, art galleries, outtakes, season overviews, interviews. 44 stems × 2 (original + derivative). |
| 34 | `N-M_Commentary by …` / `N-M_Audio Commentary by …` | DVD audio-commentary tracks. These are the trap in this item: each is the **full episode at the full runtime** with the commentary audio instead of the broadcast mix, so a duration filter alone will not catch them. Excluded by filename. 17 stems × 2. |
| 14 | `Exclusive Never Before Seen Extras/` | Bonus featurettes: *An Intro from Joss Whedon* (45 s), *Back to the Hellmouth*, *Breaking Barriers*, *Buffy Cast and Crew — Favorite Episodes*, *Buffy — An Unlikely Role Model*, *Evil Friends*, *Love Bites*. 7 stems × 2. |
| 2 | `Note from Joss Whedon.heic` (+ its `._` stub) | Still image. |
| 1 | `Buffy The Vampire Slayer_1992.mp4` | The 1992 feature film, not a TV episode. It is already in this repo as the separate show **`BuffyTheVampireSlayer1992`**, which this addition does not touch. |

No duplicate cuts (with/without commercials), bumpers or "part 1 of N"
fragments exist in this item — the noise here is entirely
extras + commentaries + AppleDouble stubs + original/derivative twins.

## Poster art

`art/BuffyTheVampireSlayer.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/95). Already a 2:3 portrait,
which is the shape the guide's card art box wants.


## Format note

Every entry is one full, self-contained episode, so a quick REW/FF tap pages to
the previous/next episode. The one exception is **S06E01-02**, where the
upload presents both parts of "Bargaining" as a single 87-minute file; it is
listed once, with the code `S06E01-02`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
