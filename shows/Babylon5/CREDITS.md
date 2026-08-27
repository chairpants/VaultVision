# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.


## Video content

**The Internet Archive** — https://archive.org

[The Complete Babylon 5](https://archive.org/details/babylon-5-season-1) —
one item, despite the `babylon-5-season-1` identifier, holding the entire
franchise. This player takes the *Babylon 5* portion: the 1993 pilot movie
*The Gathering*, all 110 episodes (PTEN/TNT, 1994-98), and the seven TV
movies and spinoff pilots. The *Crusade* episodes in the same item are a
separate player here. Thanks to the uploader for assembling the whole run in
one place. Support the Archive: https://archive.org/donate

*Babylon 5* is the property of its respective rights holders; this project
streams a publicly hosted recording and hosts no video content itself.

## Source notes

The uploader's leading file numbers (`001`–`130`) are **their own
chronological watch order**, not broadcast order. The `SxEE` code embedded in
each filename *is* broadcast order, and per-season file counts match the
broadcast record exactly (22/22/22/22/22), so per
`ADDING_A_SHOW.md` the embedded numbering was trusted and every title
relabelled from Wikipedia's episode list.

Two corrections applied on top of that:

- Two files both claim `2x16`. `040 - 2x16 - In the Shadow of Z'ha'dum` is
  correct; `036 - 2x16 - Knives` is really S02E17, and is listed here as
  such. That also fills the otherwise-missing S02E17 slot.
- `097 - 5x07 Secrets of the Soul.mkv` and
  `104 - 5x14 -Meditations on the Abyss.mkv` have malformed separators in
  their filenames. `fileHint` copies them verbatim; only the guide's title
  is normalised.

Sources are `.mkv` originals; every one has a same-stem `.mp4` h.264
derivative, and those are what the rows point at. The item also carries a
second, stale set of `.mp4` derivatives named for an earlier renumbering
(`1x05 - The War Prayer.mp4` etc.) — those are ignored; they no longer line
up with the current originals.

The eight movies and specials sit in season 0, in release order: *The
Gathering* (1993), *In the Beginning* (1998), *Thirdspace* (1998), *River of
Souls* (1998), *A Call to Arms* (1999), *The Legend of the Rangers* (2002),
*The Lost Tales* (2007), *The Road Home* (2023). `seasonNames` labels that
"Movies & Specials" in the player; `show.html`'s tab still reads "Season 0".

Nothing was cut for quality; runtimes are consistent (~42 min episodes) with
no truncated rips.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
