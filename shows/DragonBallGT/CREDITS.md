# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[Dragon Ball GT Complete](https://archive.org/details/dragon-ball-gt_202605)
— 61 of the series' 64 episodes (Fuji TV, 1996-97), about 23 minutes each.
Support the Archive: https://archive.org/donate

*Dragon Ball GT* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Episode titles are the English dub titles, taken from the raw wikitext of
Wikipedia's episode list and parsed mechanically rather than through a
summarizer. The files are trusted for *placement* — their numbering is
complete and matches the broadcast record — and relabelled from that list, the
house rule for uploads whose own labels can't be verified (see
`ADDING_A_SHOW.md` §1c).

**Episodes 7, 8 and 9 are not listed.** The item stores every episode as an
`.mkv`, which the player can only handle by falling back to the `.mp4`
derivative archive.org generates alongside. Those three never got one, and the
originals probe as h.264 with **AC3** audio — a codec no browser will decode,
inside a container Safari won't open at all. Listing them would have produced
three entries that fail on load and skip, so they're left out and the guide
shows the gap honestly. If the Archive ever derives them, they can be added
with no other change.

The other 61 rely on that same derivative fallback, which is why their file
hints end in `.mkv`.

## Poster

A frame from the first episode.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
