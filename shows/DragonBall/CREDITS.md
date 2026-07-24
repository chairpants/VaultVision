# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Two items, together covering the complete 153-episode run (Fuji TV, 1986-89),
about 24 minutes each:

- [Dragon Ball Complete Saga Dub](https://archive.org/details/dragon-ball.-044.0.-dbox.-480p.x-264-i-kaos-v-4-6-c-8747-b-7-curse-of-the-blood-rubies-online-free)
  — the DBOX 480p x264 dub rip, 152 episodes.
- [Dragon Ball HD](https://archive.org/details/dragon-ball-HD-remastered-2022)
  — episode 51 only, the one the first item is missing.

Support the Archive: https://archive.org/donate

*Dragon Ball* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Episode titles are the English dub titles, taken from the raw wikitext of
Wikipedia's episode list and parsed mechanically rather than through a
summarizer. The files are trusted for *placement* — their numbering is
complete and matches the broadcast record — and relabelled from that list, the
house rule for uploads whose own labels can't be verified (see
`ADDING_A_SHOW.md` §1c).

**Episode 51 comes from a second item.** The DBOX upload's files run 001-153
with that one number simply absent — the gap was the upload's, not a numbering
error. It is filled from the HD remastered item, which covers episodes 1-68 and
does have it, so the series is complete at 153. That one episode is an `.mkv`
played through its `.mp4` derivative and runs 24.7 minutes, in line with the
rest; everything else still comes from the DBOX rip.

The item also carries three Dragon Ball feature films as `NNN.0` files (Curse
of the Blood Rubies, Sleeping Princess in Devil's Castle, Mystical Adventure,
about 45-51 minutes each). They aren't listed here — they're films, not
episodes, and belong in their own entry if they're ever added.

## Poster

A frame from the first episode.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
