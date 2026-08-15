# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

368 episodes from fourteen archive.org items:
[The Challenge: The Gauntlet](https://archive.org/details/thechallenge-gauntlet)
(source for a handful of early crossover episodes),
[The Real World: Philadelphia](https://archive.org/details/the-real-world-philadelphia),
[The Real World (1992) — Seasons 5-10](https://archive.org/details/the-real-world-1992-s-05-S10-240p.-vhs-rip),
[Seasons 11-15](https://archive.org/details/the-real-world-1992-s-11-15),
[Seasons 21-26](https://archive.org/details/the-real-world-1992-S21-S26),
and nine individual episodes mirrored from YouTube uploads (item ids
`youtube-2SVRgCnNoZQ`, `youtube-Ue_Nx8L7jeQ`, `youtube-ZglZAm5BiF4`,
`youtube-tfs0R6ZrpqM`, `youtube-Zhx4wLYi1_U`, `youtube-fGFjoZmB3_Y`,
`youtube-wREM8h6Cvzg`, `youtube-MjbODkBzk7U`, `youtube-WghRB34YZRU`) —
search `archive.org/details/<item-id>` for each. Support the Archive:
https://archive.org/donate

*The Real World* is the property of its respective rights holders (MTV
Networks/Viacom); this project streams publicly hosted recordings and hosts
no video content itself.

## Source notes

This show's episode list was assembled by **AutoArchive**, a local tool
(`~/Projects/AutoArchive`) that scans archive.org collections and matches
the files against canonical episode order (via TVMaze), then exports
straight into VaultVision's `data.js` format. That matching is automated,
not hand-verified episode-by-episode the way most of the rest of this
library was — treat season/episode placement here as AutoArchive's best
match rather than a frame-checked guarantee.

Every `fileHint` in this show was checked against its archive.org item's
file listing (`archive.org/metadata/<item>`) — all 368 resolve to a real
file, nothing missing.

Six episode titles came out of the export truncated mid-sentence (cut off
with a literal "…", or carrying raw filename cruft like codec/resolution
tags baked into the title text) — an artifact of AutoArchive's title
formatting on unusually long or messy source filenames, not of the archived
video itself. All six were rebuilt from their `fileHint`/source filename and
fixed here:

- S01E00: `...A Guide to…` → "Showdown at the Real World Road Rules Corral:
  A Guide to the Gauntlet"
- S12E29: `The Real World The Real World Las Vegas Reunion Special (576p. ...` → "Las Vegas Reunion Special"
- S15E00: `...Tips for…` → "Out of My Way, I'm Moving In: Tips for Getting
  Into the Real World Philadelphia"
- S15E27: `...Reunion (576p.…` → "Fistful of Philly: The Real World
  Philadelphia Reunion"
- S21E14: `...Reunion ( .. .AAC2.0` → "Reunion"
- S24E13: `...Reunion (576p. .AAC2.0.PMNT+. ) BHMD` → "Reunion"

Two other trailing-ellipsis titles were left alone as genuine stylistic
titles, not truncation — their source filenames have no more text to
recover: S14E16 "Don't Hate The Player…" and S14E18 "Truth Or… Dare!".

The library also contained a duplicate/mismatched entry —
`ChallengeRealWorldRoad` — carrying **The Challenge**'s episode data under a
garbled title. It was excluded as a stray mismatch, not a real second show
and unrelated to this one.

## Format note

Standard episodic playback — one file per episode, REW/FF pages to the
previous/next episode (wrapping at the ends).

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
