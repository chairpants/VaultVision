# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams comes from
[a single archive.org item](https://archive.org/details/GreenAcresCompleteSeries)
that bundles the whole run, one folder per season. 169 of the 170 episodes
across 6 seasons (CBS, 1965-71). Deep gratitude to whoever assembled and
uploaded the whole thing in one place. Support the Archive:
https://archive.org/donate

*Green Acres* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Known gaps

Season 1's "Send a Boy to College" (S01E28) has no file in the item at all —
its numbering skips straight from 026 to 028. Left as a real gap rather than
papered over with a wrong file. Everything else is present.

## Numbering

The item numbers its files 001-170 straight through, but those numbers aren't
broadcast order: several Season 1 entries are transposed ("The Ballad of Molly
Turgiss" is filed as 024 though it aired sixth-from-last, "Culture" and "The
Rains Came" are swapped), and the sequence skips 027 while still running to
170. Slicing that range into seasons would have mislabelled most of the back
half of Season 1. Each file is instead pinned to its broadcast season and
episode by matching its title against Wikipedia's episode list, and the guide
shows the canonical titles rather than the upload's spellings ("The Ballard Of
Molly Turgess", "The Vugar Ring", "Ex Secretary").

## Format note

Unlike VaultVision's other players (SNICK, TGIF, Fox Kids, etc.), this isn't
a multi-hour broadcast block — every entry is one full, self-contained
episode. So a quick REW/FF tap pages to the previous/next episode instead
of seeking within one (wrapping from the last episode back to the first and
vice versa) — same destination as picking it from GUIDE. Press-and-hold
still scrubs through the current episode, unchanged.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
Worth noting for later: this item is the rare one that ships closed captions,
a `.cc5.txt` sidecar next to 155 of the 169 episodes. Nothing reads them yet.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
