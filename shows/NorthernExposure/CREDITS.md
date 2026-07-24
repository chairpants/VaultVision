# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Six archive.org items, one per season, stitched into the complete 110-episode
run (CBS, 1990-95):
[S1](https://archive.org/details/northern-exposure-s01) (8),
[S2](https://archive.org/details/northern-exposure-s02) (7),
[S3](https://archive.org/details/northern-exposure-s03) (23),
[S4](https://archive.org/details/northern-exposure-s04) (25),
[S5](https://archive.org/details/northern-exposure-s05) (24),
[S6](https://archive.org/details/northern-exposure-s06) (23).
Thanks to whoever preserved and uploaded the whole series. Support the Archive:
https://archive.org/donate

*Northern Exposure* is the property of its respective rights holders; this
project streams publicly hosted recordings and hosts no video content itself.

## Source notes

**The guide's episode titles are not the uploader's.** They are the broadcast
titles, applied by position; 30 of the 110 filenames disagree with the
broadcast order and are not used. This is the one thing to know about this
show, so here is the reasoning.

Each file is named `S<season>E<episode> - <title> - <date>.mp4`, and within a
single filename the title and the date often contradict each other. Season 3 is
the clearest case: the file numbered S03E18 is titled "Lost and Found" but
dated 03.02.92, while "Lost and Found" actually aired 03.09.92 — its title
stream is shifted one slot against its own date stream. Only 28 of 110
filenames carry a title and a date that both match the broadcast record. Some
labels name an episode from an entirely different season ("The Graduate", a
Season 6 episode, appears on files numbered S03E17 *and* S05E14), and 14 name
nothing in the series at all.

What is solid is the numbering. Each item holds a complete, gapless run whose
per-season counts match the broadcast record exactly — 8, 7, 23, 25, 24, 23 —
and 80 of the 110 positions already agree with the broadcast title. So the
files are treated as being in broadcast order, with the wrong labels stripped
off, rather than trusting labels that disagree with themselves.

The consequence, stated plainly: if a file ever turns out to sit somewhere
other than where its own `SxxEyy` puts it, its guide title will be wrong. That
risk is inherent to this upload and can only be cleared by watching. The
episode order shown is the broadcast order either way.

Titles and air dates were taken from the raw wikitext of Wikipedia's
[List of Northern Exposure episodes](https://en.wikipedia.org/wiki/List_of_Northern_Exposure_episodes)
and parsed mechanically — a summarizer asked for the same list returned two
contradictory answers for Season 6, so the tables were read directly instead.

Every episode exists twice in each item: the uploader's `.mp4` and the
Archive's `.ia.mp4` derivative. They are the same size, and both probe as
h.264/AAC, so the entries point at the originals. (The metadata calls the
originals "MPEG4", which usually signals a codec a browser can't decode; here
it's only the container label, confirmed with ffprobe.)

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

The show's own main title card, over the Cicely street shot, grabbed from
S03E01 at 2:16.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
