# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Item link](https://archive.org/details/law-order-svu-s-01-e-22-slaves) — a
single item holding all 19 seasons (437 files total; 428 are used here).
Support the Archive: https://archive.org/donate

*Law & Order: Special Victims Unit* is the property of its respective rights
holders; this project streams a publicly hosted recording and hosts no video
content itself.

## Source notes

This item is a single archive.org upload that bundles the *Law & Order*
franchise crossover universe together: alongside 428 genuine SVU episodes, it
also holds a handful of files that are actually episodes of other shows
(the flagship *Law & Order*, *Law & Order: Trial by Jury*, *Chicago Fire*,
and *Chicago PD*) — the other halves of two-hour crossover events that SVU
took part in. Those were identified by filename (each carries a parenthetical
naming its real show, e.g. `(Chicago PD S02E07)`) and excluded from this
show entirely:

- `S01E15b Entitled Pt 2 (Law & Order S10E14).mp4` — flagship Law & Order
- `S06E20b Day (Law & Order TbJ S01E11).mp4` — Law & Order: Trial by Jury
- `S07E02b Flaw (Law & Order S16E02).mp4` — flagship Law & Order
- `S15E15b Conventions (Chicago PD S01E06).mp4` — Chicago PD
- `S16E07a Nobody Touches Anything (Chicago Fire S03E07).mp4` — Chicago Fire
- `S16E07c They'll Have to Go Through Me (Chicago PD S02E07).mp4` — Chicago PD
- `S16E20a We Called Her Jellybean (Chicago Fire S03E21).mp4` — Chicago Fire
- `S17E14b The Song of Gregory William Yates (Chicago PD S03E14).mp4` — Chicago PD

One more, `S16E20b+c The Number of Rats (Chicago PD S02E20) + Daydream
Believer.mp4`, was also excluded even though its second half (`Daydream
Believer`) is SVU's own real S16E20 — the file merges a Chicago PD scene and
the SVU scene into one clip with no clean cut point, so there's no way to
carry just the SVU half. **Season 16 has no episode 20 as a result** — a real
gap, not an oversight.

**Season 14 is also missing episode 20** (`Born Psychopath` [S14E19] is
followed directly by `Traumatic Wound` [S14E21] in the source item) — no file
for that slot exists anywhere in the item under any name. Unrelated to the
crossover exclusions above; the upload simply never included it.

Two further edits from the raw filenames:

- `S01E15a Entitled Pt 1.mp4` is labeled here as just **"Entitled"** — its
  real broadcast title per the episode's Wikipedia entry — since only the
  SVU-side first half of that crossover hour is included (see exclusions
  above).
- Episode titles otherwise come straight from the archive.org filenames,
  which were spot-checked against Wikipedia's "List of Law & Order: Special
  Victims Unit episodes" (season sizes for every season line up with the
  broadcast record once the crossover-partner files above are excluded,
  confirming the filenames' own SxxEyy numbering is trustworthy).

Every season count now matches the broadcast record exactly (22, 21, 23, 25,
25, 23, 22, 22, 19, 22, 24, 24, 23, 24 [1 missing], 24, 23 [1 missing], 23,
21, 24 — the last two numbers reflecting the S14E20 and S16E20 gaps above).

Three double-length episodes are single files covering two credited episodes
each and are listed as one row: `S14E01+E02`, `S15E01+E02`, `S17E01+E02`, and
`S19E23+E24`.

Not added here, deliberately: *Law & Order: Trial by Jury* (5 episodes present
in the source paste, well short of its 13-episode run), *Law & Order: Criminal
Intent* (a single stray episode), and the flagship *Law & Order* (a single
stray episode plus two crossover halves — nowhere near its 20+ season run).
Any of those would need their own proper archive.org source, not scraps
pulled from this item.

## Poster art

`art/LawOrderSVU.jpg` is the show's poster, via
[TMDB](https://www.themoviedb.org/tv/2734). Already a 2:3 portrait,
which is the shape the guide's card art box wants. Not a title card grabbed
from an episode — this sandbox couldn't reach archive.org's video-serving
CDN nodes to grab a frame.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
