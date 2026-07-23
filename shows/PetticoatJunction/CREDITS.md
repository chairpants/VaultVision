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
[a single archive.org item](https://archive.org/details/Petticoat_Junction_Series)
that bundles the whole run, one folder per season. All 222 episodes across 7
seasons (CBS, 1963-70) — the complete series, checked episode by episode
against the broadcast order. Seasons 1-2 are black and white, 3-7 colour.
Deep gratitude to whoever assembled and uploaded the whole thing in one
place. Support the Archive: https://archive.org/donate

*Petticoat Junction* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## Source notes

Nothing is missing, but two details are worth recording.

Most episodes play the Archive's h.264 derivative of the uploader's Cinepak
AVIs. Two Season 4 episodes — 4x10 "Twenty-Five Years Too Late" and 4x12
"Is There a Doctor in the Valley" — were uploaded as .mp4 rather than .avi,
so the Archive never derived them; they're already h.264/AAC and stream
straight from the original.

The item also carries extras this player skips: alternate cuts of about two
dozen Season 1-2 episodes with the original commercials left in (the
uploader's own folders call them "inferior videos"), and a four-minute
Ed Sullivan Show clip of the Ladybugs that fronts S01E27. Both would show up
as duplicate or half-length entries in the guide, so neither is listed.

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
