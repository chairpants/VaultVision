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
[a single archive.org item](https://archive.org/details/the.-jetsons) — the
complete original 1962-63 ABC season of *The Jetsons*: 24 episodes,
"Rosie the Robot" through "Elroy's Mob", as `WEBRip.x264-ION10` files.
That is the whole of the show's first run; the 1985-87 syndicated revival
(51 further episodes) is **not** in this item, so the guide lists Season 1
only. Deep gratitude to whoever uploaded it. Support the Archive:
https://archive.org/donate

*The Jetsons* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

**Ordering rule applied: trust the numbering, replace the titles.**
The upload carries explicit `S01E01`–`S01E24` numbering and its season size
(24) matches the broadcast record on
[Wikipedia's episode list](https://en.wikipedia.org/wiki/List_of_The_Jetsons_episodes)
exactly, so the files were left in their own order and every title was taken
from Wikipedia by position. The filenames carry no titles at all, so there was
nothing to disagree with — but that also means nothing corroborates the
numbering beyond its being complete and gapless. If a file sits somewhere
other than its `SxxEyy` claims, its title here will be wrong; only watching
can settle that. Runtimes are uniform (1527-1562 s, ~26 min), which is at
least consistent with a single clean source.

Files used are the archive-generated `*.ia.mp4` derivatives rather than the
uploader's identically-sized `*.mp4` originals — same resolution (720x540)
and byte count, but the `.ia.mp4` is the faststart remux the Archive serves
for streaming. Nothing else in the item was excluded; there are no bumpers,
extras or alternate cuts.

Poster art is the Archive's own generated thumbnail from the middle of
S01E12, "Astro's Top Secret".

## Poster art

`art/TheJetsons.jpg` is the show's key art, via
[TMDB](https://www.themoviedb.org/tv/2362). Already a 2:3 portrait,
which is the shape the guide's card art box wants.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
