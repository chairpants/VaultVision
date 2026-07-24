# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Four archive.org items, one per season, stitched into seasons 1-4 of the
original run (CBS, 1959-64):
[S1](https://archive.org/details/the-twilight-zone-season-1) (36),
[S2](https://archive.org/details/the-twilight-zone-season-2_202411) (29),
[S3](https://archive.org/details/the-twilight-zone-s-3e-1-colorized-720p-hd) (37),
[S4](https://archive.org/details/the-twilight-zone-s-4e-3-colorized-720p-hd) (18).
Support the Archive: https://archive.org/donate

*The Twilight Zone* is the property of its respective rights holders; this
project streams publicly hosted recordings and hosts no video content itself.

## Source notes

120 episodes, and every season is complete: 36, 29, 37 and 18 match the
broadcast record exactly. Season 5 is not here — no item in this lineup covers
it — so the guide stops after Season 4.

Titles come from the record, parsed from the raw wikitext of Wikipedia's
per-season articles. Every one of the 120 matched its slot, with nothing
falling back to a filename — which matters more than usual here, because the
Season 3 and 4 files carry no titles at all (`the twilight zone-s3e1-colorized
-720p-hd.mkv`).

The two halves are different masters. Seasons 1 and 2 are 1080p Blu-ray rips;
seasons 3 and 4 are the colorized 720p restorations, and Season 4 is the
hour-long season, so those entries run about 52 minutes against the usual 26.

Despite "X265" in their filenames, the Season 1 and 2 files probe as h.264/AAC
and play directly — the label is wrong, not the file. Seasons 3 and 4 are
`.mkv` and rely on the `.mp4` derivative archive.org generated alongside; all
55 have one.

## Format note

Seasons 3 and 4 come from the same kind of rip as Alfred Hitchcock Presents:
the real picture sits inside a black surround with a watermark panel down the
left edge. `cropBySeason` trims it back, with a separate rect per season
because the two are framed slightly differently. Both were measured with
ffmpeg's `cropdetect` on a real frame rather than copied from the Hitchcock
values — S3 resolves to 608x450 at (130, 16) and S4 to 606x462 at (132, 8) on
an 854x480 frame. Seasons 1 and 2 are left alone.

## Poster

The show's own title card, from the first episode.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
