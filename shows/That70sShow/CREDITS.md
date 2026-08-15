# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Three separate archive.org items, one per season, stitched back into a single
three-season run:
[Season 1](https://archive.org/details/that-70s-show-season-1_202607),
[Season 2](https://archive.org/details/that-70s-show-season-2_20260728),
[Season 3](https://archive.org/details/that-70s-show-season-3).
That's 76 of the series' 200 episodes (Fox, 1998-2006): 25 + 26 + 25, complete
and gapless for those three seasons. Different uploaders, different rips —
seasons 1 and 2 are modern widescreen-era HD sources, season 3 is a much older
low-resolution capture. Deep gratitude to everyone who put them up. Support the
Archive: https://archive.org/donate

*That '70s Show* is the property of its respective rights holders; this project
streams publicly hosted recordings and hosts no video content itself.

## Source notes

**Episode list built from the metadata, not from guesswork.** Every row comes
from `https://archive.org/metadata/<item>`; no filename was inferred.

**Ordering rule applied: trust the numbering, replace the titles.** All three
uploads carry explicit per-season episode numbering and their per-season counts
match Wikipedia's broadcast record exactly (25 / 26 / 25). Titles in the guide
are Wikipedia's canonical ones, taken by position, not the uploads' own.

What disagreed, and what that leaves uncertain:

- **Seasons 1 and 2 agreed completely.** Every filename's own title matched the
  broadcast episode at that position. Only two cosmetic fixes were needed:
  `S1.E18 "The Career Day"` is listed as **Career Day**, and
  `S2.E17 "After Glow"` as **Afterglow**.
- **Season 3 disagreed in exactly one place.** The files are numbered
  `301`–`325` and those numbers track broadcast order for 23 of 25 episodes —
  but `321` is *Eric's Drunken Tattoo* and `322` is *Fez Dates Donna*, while
  Wikipedia (and the production codes, 321 and 322) put **Fez Dates Donna at
  S03E21** and **Eric's Drunken Tattoo at S03E22**. Both aired back to back on
  the same night, May 1 2001, so sources genuinely differ on which came first.
  Those two rows were **pinned by title** rather than by file number, so the
  file whose name says *Fez Dates Donna* is the one listed at S03E21. This is
  the one deliberate departure from the trust-the-numbering rule.
- Season 3 filename titles were normalised to the canonical spellings:
  `304 "Too Old To Trick Or Treat, Too Young "` (truncated on upload) →
  **Too Old to Trick or Treat, Too Young to Die**;
  `309 "Hyde s Christmas Rager"` → **Hyde's Christmas Rager**;
  `311 "Who Wants It More"` → **Who Wants It More?**;
  `312 "Fez Gets The Girl"` → **Fez Gets A Girl**;
  `317 "Kitty's Birthday (That's Today!)"` →
  **Kitty's Birthday (Is That Today?!)**;
  `318 "The Trials of M. Kelso"` → **The Trials of Michael Kelso**;
  `320 "Holy Craps"` → **Holy Craps!**;
  `323 "Canadian road trip"` → **Canadian Road Trip**.

A count-matched relabel is an educated guess, not proof. If a season 3 file sits
somewhere other than its own number claims, its title here will be wrong, and
only watching it can settle that.

**Codec note — why seasons 1 and 2 point at `.ia.mp4`.** Those two items were
uploaded as 720p **HEVC/H.265** `.mp4` originals, which most browsers refuse to
decode. The Archive derived an h.264/AAC `.ia.mp4` for each, and that is what
the episode rows point at (854×480). The 720p originals sit alongside them at
the same path without the `.ia` infix if a better source is ever wanted. Season
3's originals are Cinepak `.avi` files, equally unplayable in a browser, so
those rows point at the Archive's `.mp4` h.264 derivatives instead. The `.avi`
and HEVC originals are deliberately not listed.

**Runtimes.** `durations` is populated for all 76 episodes from the metadata
`length` field. Two outliers worth knowing about, neither of them broken:
`S03E21 "Fez Dates Donna"` runs 26:46 against the season's usual ~22:00 (a
longer cut, not a fault), and `S03E02 "Red Sees Red"` is the shortest at 20:27.
Nothing is truncated badly enough to need `incompleteEpisodes`.

**Filename characters.** Seasons 1 and 2 use nested folders and a U+2219 BULLET
OPERATOR (`∙`) as the separator in every filename, plus a double space in the
folder name. Those paths are copied verbatim; the player URL-encodes each path
segment separately, so both survive.

## Poster art

`art/That70sShow.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/52). Already a 2:3 portrait,
which is the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
