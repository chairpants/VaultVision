# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.


## Video content

**The Internet Archive** — https://archive.org

Road Rules ran 14 seasons on MTV (1995-2007) and no single archive.org item
holds it. This player stitches together **fourteen** separate items, one per
season plus two standalone specials:

| Season | Sub-title | Item | Episodes |
|---|---|---|---|
| — | The Making of Road Rules | [the-making-of-road-rules](https://archive.org/details/the-making-of-road-rules) | 1 |
| 1 | (USA) | [road-rules-s-01ep-15-...](https://archive.org/details/road-rules-s-01ep-15-visit-the-rockford-speedway-for-a-smash-up-time) | 1 of 15 |
| 2 | The Second Adventure | [road-rules-s2](https://archive.org/details/road-rules-s2) | 16 |
| 3 | Europe | [road-rules-europe](https://archive.org/details/road-rules-europe) | 13 |
| 4 | Islands | [road-rules-islands](https://archive.org/details/road-rules-islands) | 15 |
| 5 | All Stars | [rrasaiu](https://archive.org/details/rrasaiu) | 5 of 10 |
| 6 | Down Under | [road-rules-6](https://archive.org/details/road-rules-6) | 12 |
| 7 | Latin America | [road-rules-7](https://archive.org/details/road-rules-7) | 14 |
| 8 | Semester at Sea | [road-rules-semester-at-sea](https://archive.org/details/road-rules-semester-at-sea) | 19 |
| 9 | Maximum Velocity Tour | [road-rules-maximum-velocity-tour](https://archive.org/details/road-rules-maximum-velocity-tour) | 3 of 19 |
| 10 | The Quest | [road-rules-the-quest](https://archive.org/details/road-rules-the-quest) | 16 |
| 11 | Campus Crawl | [road-rules-11](https://archive.org/details/road-rules-11) | 16 |
| 12 | South Pacific | [road-rules-south-pacific](https://archive.org/details/road-rules-south-pacific) | 17 + promo |
| 13 | X-Treme | [road-rules-x-treme](https://archive.org/details/road-rules-x-treme) | 17 |
| 14 | Viewers' Revenge | [road-rules-2007](https://archive.org/details/road-rules-2007) | 15 + launch special |

182 entries in all. Thanks to everyone who uploaded a season. Support the
Archive: https://archive.org/donate

*Road Rules* is the property of its respective rights holders; this project
streams publicly hosted recordings and hosts no video content itself.

## Source notes

**Which item is which season was verified against each item's own title**, not
inferred from filenames. This matters: the season sub-titles are the only
reliable signal, and the numbering in the filenames of one item means nothing
in another. `rrasaiu` labels its files `1x01`-`1x05` but its title is
*Road Rules: All Stars*, which is season **5**; `road-rules-semester-at-sea`
numbers its files `Episode 1`-`Episode 19` but is season **8**;
`road-rules-south-pacific` numbers from `Episode 0` but is season **12**.
Reading those three by file number lands all of them in season 1.

**Episode numbering comes from each item's own codes, not from an external
episode list.** Several seasons opened with a one-hour premiere that the
items hold as a single file (S04E01, S06E01, S07E01, S09E01, S10E01, S11E01
all run ~40-43 min against a ~20 min norm). Episode guides that split those
premieres into two half-hour entries therefore run one number ahead of this
guide from E02 onward in those seasons. The file-to-title pairing here is
exact either way — only the numbers shift.

Where an item held both a source file and archive's re-derived `.ia.mp4` or
`_alq13.ia.mp4`, the higher-resolution one is used and the other ignored;
where the source was Matroska or Cinepak (unplayable in a browser), the
h.264 `.mp4` derivative is used instead. Season 13 and the first three
episodes of season 14 are that case.

Known gaps and oddities:

- **Season 1 is all but missing.** Only E15 ("Visit the Rockford Speedway for
  a Smash-Up Time") exists on archive.org. The `bitsearch.to-road-rules-s-01-s-07`
  item promises S1-S7 but holds no playable video, only a torrent and metadata.
- **Season 5 (All Stars)** holds 5 of its 10 episodes.
- **Season 9 (Maximum Velocity Tour)** holds only E01, E10 and E19.
- **Season 8** has two consecutive files both titled "A Coming Home"
  (Episode 5 and Episode 6). They are different videos of different lengths,
  so one of the two titles is wrong on the upload; both are listed as-is.
- **Season 10** episodes carry an intermittent trial-converter watermark
  ("Created with a … version") burned into the picture. It flashes rather
  than persisting, and only affects that item.
- Season 12's promo special is listed as S12E00, and season 14's launch
  special as S14E00, so each sorts with its own season.
- *The Making of Road Rules* is S00E01, labelled "Specials" in the player.

Deliberately **excluded**: everything under *Real World/Road Rules Challenge*
and *The Challenge*, which archive.org hosts in quantity
(`the-challenge-season-1` through `-8`, `thechallenge-gauntlet` and others).
Those are a different series, even where a season is titled
"Road Rules: All Stars" — that one is included here because MTV counted it as
a Road Rules season and the item is titled accordingly.

This list replaces an earlier **AutoArchive**-generated one (86 rows) that
filed the All Stars, Semester at Sea and South Pacific items into season 1 by
file number and concluded seasons 1, 3, 4, 5, 8, 12 and 13 were "not
represented at all". Those six seasons do exist on archive.org; they were
just being read by the wrong key. The rebuild works from each item's title
and its own episode codes instead, which is why coverage roughly doubled.
The original poster art from that entry is kept.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
