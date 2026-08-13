# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[One item](https://archive.org/details/daria-restoration) holding the complete
series: 65 episodes, five seasons of thirteen, no gaps. The item is titled
"Daria Restored Audio" — it's a fan restoration that puts the original
broadcast music back, which later home-video releases replaced. Thanks to
whoever did that work and uploaded it. Support the Archive:
https://archive.org/donate

*Daria* is the property of its respective rights holders; this project streams
a publicly hosted recording and hosts no video content itself.

## Source notes

Each episode is present twice: an uploaded `.mkv` and an Archive-derived
`.mp4`. The rows point at the **`.mkv`**, deliberately — every derivative names
its `.mkv` in the metadata's `original` field, so the engine's own file
resolution finds the `.mp4` and the browser never has to open a Matroska
container. That's the path described in "Vet the files", used here rather than
hardcoding the derivative's name.

Because of that, the `durations` map is keyed on the `.mkv` names but records
the derivative's runtime, which is what actually plays.

Titles were taken from Wikipedia's episode list and cross-checked against the
filenames, which happen to carry titles too. All 65 agree, and the per-season
counts (13 each) match the broadcast run, so the numbering is trustworthy.

The two TV movies, *Is It Fall Yet?* and *Is It College Yet?*, aren't in this
item and aren't listed here.

## Poster art

The series title card, 45 seconds into "Esteemsters" — the logo roundel on
purple, which is a real title card rather than a frame standing in for one.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
