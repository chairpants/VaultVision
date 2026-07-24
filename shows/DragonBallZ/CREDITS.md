# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Two items, stitched into the complete 291-episode run (Fuji TV, 1989-96):

- [Dragon Ball Z Complete Dub](https://archive.org/details/dbzcomplete) —
  episodes 1-67 here, DBOX 480p x264, about 24 minutes each.
- [Dragon Ball Z Funimation {Faulconer Score}](https://archive.org/details/dragon-ball-z-funimation-faulconer-score)
  — episodes 68-291, about 19 minutes each.

Support the Archive: https://archive.org/donate

*Dragon Ball Z* is the property of its respective rights holders; this project
streams publicly hosted recordings and hosts no video content itself.

## Source notes

Episode titles are the English dub titles, taken from the raw wikitext of
Wikipedia's episode list and parsed mechanically rather than through a
summarizer. The files are trusted for *placement* — their numbering is
complete and matches the broadcast record — and relabelled from that list, the
house rule for uploads whose own labels can't be verified (see
`ADDING_A_SHOW.md` §1c).

**The two halves are different cuts, and it shows at episode 68.** Episodes
1-67 come from the DBOX release and run about 24 minutes with the Japanese
score; from 68 on it's the Funimation broadcast version with Bruce Faulconer's
score, running about 19 minutes. Same episodes in the same order, but the
runtime drops by five minutes and the music changes at that seam. The split is
where it is because neither item covers the whole series: the first holds
1-100, the second 68-291, so switching at 68 keeps the source consistent for as
long as possible and uses one source per episode.

Both items were probed rather than trusted: every file is h.264/AAC in MP4 and
plays directly, with no derivative lookup needed.

## Poster

A frame from the first episode.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
