# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Unlike the other players here, this one draws on eight
archive.org items rather than one — the uploader posted a separate item per
season:
[1](https://archive.org/details/NewhartSeries),
[2](https://archive.org/details/NewhartSeries2),
[3](https://archive.org/details/NewhartSeries3),
[4](https://archive.org/details/NewhartSeries4),
[5](https://archive.org/details/NewhartSeries5),
[6](https://archive.org/details/NewhartSeries6),
[7](https://archive.org/details/NewhartSeries7),
[8](https://archive.org/details/NewhartSeries8).
The guide stitches them back into one continuous 8-season run: all 184
episodes (CBS, 1982-90), including "The Last Newhart" — the complete series,
checked episode by episode against the broadcast order. Deep gratitude to
whoever assembled and uploaded the whole thing. Support the Archive:
https://archive.org/donate

*Newhart* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

Because each season is its own item, every episode entry carries its own item
id — the player already supports that, so nothing about playback differs.
One filename was truncated on upload (S02E11, "A Jug Of Wine"); the guide
shows the full title, "A Jug of Wine, a Loaf of Bread and POW".

## Format note

Unlike VaultVision's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
a multi-hour broadcast block — every entry is one full, self-contained
episode. So a quick REW/FF tap pages to the previous/next episode instead
of seeking within one (wrapping from the last episode back to the first and
vice versa) — same destination as picking it from GUIDE. Press-and-hold
still scrubs through the current episode, unchanged.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
