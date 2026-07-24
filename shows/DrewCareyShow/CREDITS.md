# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[The Drew Carey Show: The Complete Series](https://archive.org/details/the-drew-carey-show-complete-series)
— all 233 episodes across 9 seasons (ABC, 1995-2004), about 21 minutes each.
Support the Archive: https://archive.org/donate

*The Drew Carey Show* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content itself.

## Source notes

An unusually clean upload: one flat folder, every file named
`The Drew Carey Show SxxEyy - Title.mp4`, complete at 233 episodes, and h.264 /
AAC throughout, so it plays directly with no derivative lookup.

Unlike most uploads here, its labels hold up — the filenames agree with the
broadcast record on 232 of 233 titles, the lone exception being S04E01, which
the upload calls "The Conspiracy" and the record calls "Drew and the
Conspiracy". Titles in the guide still come from the record rather than the
filenames, parsed from the raw wikitext of Wikipedia's episode list.

Six files are punctuation oddities rather than problems — an `=` instead of a
`-`, or a hyphen dropped into the middle of a title (`S01E08 = Lewis' Sister`,
`S07E07 It's - Halloween, Dummy`). They're matched on the `SxxEyy` in the name,
so nothing is missing; only the sloppiness is.

**Seasons 6 and 7 are split two episodes later here than in the broadcast
record.** The upload gives both seasons 27 episodes; the record gives them 25
each and starts Season 7 two episodes earlier. The upload's own numbering is
kept, since it is internally consistent and totals the correct 233, which
leaves four slots (S06E26, S06E27, S07E01, S07E02) with no counterpart in the
record — those four keep the upload's own titles. Every other episode is
titled from the record.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

The show's own title card, grabbed from the pilot at 2:01.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
