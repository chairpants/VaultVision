# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Pokémon: Indigo League - The Complete Series (1997-99, English
dub)](https://archive.org/details/pokemon-indigo-league-the-complete-series-1997-99-english-dub)
— 80 files, the complete English dub of the season. Thanks to whoever uploaded
it. Support the Archive: https://archive.org/donate

*Pokémon* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

**The season is complete at 80 episodes, and the two gaps are correct.** Codes
run S01E01–S01E82 with **E35 and E38 absent by design**:

- **E35 "The Legend of Dratini"** was never dubbed into English.
- **E38 "Electric Soldier Porygon"** was pulled from rotation worldwide after
  the 1997 broadcast and never dubbed.

So Indigo League is 82 episodes in Japanese and 80 in English, and this upload
holds all 80. Anyone auditing the list later will see two missing codes and
should not go looking for a better source — there isn't one. An earlier pass at
this show reported "missing 80, 81, 82", which was an artefact of checking the
upload's own numbering against the 82-episode Japanese count; it was wrong.

**E18 "Beauty and the Beach" is present**, which is worth noting because it is
often absent entirely. It was withheld from US broadcast and only aired in June
2000, and the uploader files it as `0017.5` rather than in sequence.

**Numbering was taken from the broadcast record, not the filenames.** The
upload numbers the dub run sequentially 1–79 (plus the 17.5 above), which is
offset from the canonical numbering by up to three places because its sequence
skips the two undubbed episodes and pulls Beauty and the Beach out of order.
Rather than reason about that offset, every file was matched to its canonical
slot **by title**, then given the canonical code. All 80 matched with nothing
left over and nothing double-assigned.

One filename carries a typo — `It's Mr. Mimie Time` — corrected to the
canonical **"It's Mr. Mime Time!"** (E64) in the guide.

Files are `original` `.mp4` uploads. Probed rather than assumed, across the
first, middle and last of the run: h.264 video, AAC audio, 640×480. They stream
directly, with no dependence on Archive derivatives — unlike the two other
Indigo League items that were evaluated and rejected
(`pokemon-indigo-league-season-1-1998` and `pokemon-season-1`), which are x265
Matroska whose derive step only partly succeeded. Between them those two offer
43 playable episodes of 81, and the missing derivatives are permanent, so
neither is worth revisiting.

Runtimes in `durations` come from the item's own metadata, ~22–23 minutes each.

## Format note

Nothing unusual — one season, one item, one file per episode. The upload labels
episodes S01/S02 in its filenames, splitting the run at 52; that split is a
database convention rather than a broadcast season, and Indigo League is a
single season, so the guide presents all 80 as Season 1.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
