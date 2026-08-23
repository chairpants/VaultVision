# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

[youtube-AUtZOl_QxvY](https://archive.org/details/youtube-AUtZOl_QxvY) — one
file, Mosfilm's own official YouTube upload of the full 1986 film, mirrored to
Archive. Original Russian audio with English subtitles.

Support the Archive: https://archive.org/donate

*Kin-Dza-Dza* (Кин-дза-дза!) is the property of its respective rights
holders (Mosfilm); this project streams a publicly hosted recording and hosts
no video content itself.

## Source notes

Single-file upload from Mosfilm's own YouTube channel, tagged by the uploader
as carrying English subtitles (`#FullMoviesWithEngSubs`) — hardcoded into the
picture, not a separate track, so there's nothing for `captions.js` to carry.
Runtime (~2h13m) matches the film's known length. The item also carries an
`original` WebM; the `derivative` h.264/AAC `.mp4` was used instead, since
that's what the player and this catalog's format preference both expect.

## Poster art

Title card grabbed from the film itself.

## Captions

No captions.js track — the film's English subtitles are burned into the
picture itself (see Source notes above).

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
