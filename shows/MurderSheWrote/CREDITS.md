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
[a single archive.org item](https://archive.org/details/murder-she-wrote_202402).
Deep gratitude to the uploader. Support the Archive:
https://archive.org/donate

*Murder, She Wrote* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## What's here, and what isn't

**218 of the series' 264 broadcast episodes.** The item is named as though it
were the complete run; it is not.

| Seasons | Status |
|---|---|
| 1–8 | complete, 22 episodes each |
| 9 | 21 episodes |
| 10 | 21 episodes |
| 11–12 | **absent entirely** |

Nothing was excluded on editorial grounds — the missing episodes are simply not
in the upload. If a complete run matters, seasons 11–12 need a second source.

`S01E01` runs 5588s against a ~2861s series median; that is correct, not a
fault. The pilot, *The Murder of Sherlock Holmes*, aired as a two-hour TV movie.
No episode runs short enough to look truncated, so there is no
`incompleteEpisodes` entry.

## Episode order

Every file carries its own `SxxEyy` prefix and its own title, and the two agree
with each other throughout. Season sizes match the broadcast record everywhere
the season is present, so the numbering was trusted and titles were taken from
the canonical episode list — the "trust the numbering, replace the titles" rule
in `ADDING_A_SHOW.md`.

**209 of 218** filename titles already matched the canonical title exactly. The
nine that differed are repairs, not re-slottings:

| Code | Canonical | Filename said |
|---|---|---|
| S01E12 | Broadway Malady | Broadway Malody |
| S03E01/02 | Death Stalks the Big Top: Part 1/2 | …- Pt1 / Pt2 |
| S03E20 | The Cemetery Vote | Cemetery Vote |
| S04E14 | Curse of the Daanav | Curse of the Daanau |
| S05E21/22 | Mirror, Mirror on the Wall: Part 1/2 | …- Pt1 / Pt2 |
| S08E17 | To the Last Will I Grapple with Thee | To The End Will I Grapple With Thee |
| S10E02 | For Whom the Ball Tolls | For Whom The Bell Tolls |

A count-matched relabel is an educated placement, not proof. If a file sits
somewhere other than its own `SxxEyy` claims, its title here will be wrong, and
only watching it would settle that.

## Poster art

`art/MurderSheWrote.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/484). Already a 2:3 portrait, which is the
shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
