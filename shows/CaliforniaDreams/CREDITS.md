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
[a single archive.org item](https://archive.org/details/california-dreams-1992-season-one)
— the complete first season of *California Dreams* (NBC Saturday mornings,
1992): all 13 episodes, "The First Gig" through "Where's Dennis?", in broadcast
order. Thanks to the uploader for putting the whole season up in one piece.
Support the Archive: https://archive.org/donate

*California Dreams* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## Source notes

**Episode list built from the metadata, not from guesswork.** Every row comes
from `https://archive.org/metadata/california-dreams-1992-season-one`; no
filename was inferred.

**Ordering rule applied: trust the numbering, replace the titles.** The upload
carries explicit `S01E01`–`S01E13` numbering and its count matches Wikipedia's
broadcast record exactly (13 episodes). Position for position, the upload's own
titles also match Wikipedia's list, so nothing needed moving.

What disagreed:

- Nothing about the *order*. One oddity worth flagging: this season's accepted
  broadcast order happens to be alphabetical by title from episode 2 onward
  (Battle → Beat → Double → Dream → Friends → Guess → It's → Mother →
  Romancing → They → This → Where's). That pattern looks synthetic, and it is
  possible the published order was reconstructed alphabetically at some point
  rather than from logs — but the upload, Wikipedia and TV Guide all agree on
  it, and the production codes (6052, 6051, 6053, 6055, 6060, 6054, …) are
  scrambled relative to it in the way a real broadcast order usually is. It is
  listed as everyone else lists it.
- Three **titles** where Wikipedia looks wrong and the upload looks right. In
  each case TV Guide and IMDb side with the upload, so the upload's spelling was
  kept: **Beat of His Own Dream** (S01E03 — Wikipedia says "Drum"),
  **This Time** (S01E12 — Wikipedia says "The Time"), and
  **Where's Dennis?** (S01E13 — Wikipedia drops the question mark).
  `S01E11` was normalised the other way, to **They Shoot Videos, Don't They?**
  with the question mark Wikipedia and TV Guide both use.

Since counts and order matched, this is a count-matched relabel, not a
frame-by-frame verification. If a file sits somewhere other than its own
`SxxEyy` claims, its title here will be wrong.

**Codec note.** The item's originals are Matroska `.mkv` files, which browsers
generally will not play. Every row points at the Archive's h.264 `.mp4`
derivative for the same stem (512×384); the `.mkv` originals are deliberately
not listed.

**Runtimes.** `durations` is populated for all 13 episodes from the metadata
`length` field. They cluster tightly between 21:41 and 22:29, so nothing needed
`incompleteEpisodes`.

Nothing was excluded beyond the `.mkv` originals — the item contains no
bumpers, clip fragments or duplicate cuts.

## Poster art

`art/CaliforniaDreams.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/257). Already a 2:3 portrait,
which is the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
