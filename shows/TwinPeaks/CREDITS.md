# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode of *Twin Peaks* (the original 1990-91 run) this player
streams comes from [a single archive.org item](https://archive.org/details/season-2-episode-8-drive-with-a-dead-girl),
a rip of the Twin Peaks Gold Box Set. 30 episodes: the pilot plus the
complete original run (season 1, episodes 1-7; season 2, episodes 1-22).
Deep gratitude to whoever assembled and uploaded these. Support the
Archive: https://archive.org/donate

*Twin Peaks* is the property of its respective rights holders; this
project streams a publicly hosted recording and hosts no video content
itself.

## What got left out (and why some files are "hours" long)

This is a disc-by-disc rip of a box set, so the item bundles a lot beyond
the episodes themselves — Log Lady episode intros, CBS network bumpers,
deleted scenes, cast interviews, ad spots, hotline messages, trading-card
scans, and so on. None of that is included here.

Several episodes exist as two separate files: a normal ~47-minute cut and
a second file running anywhere from 80 minutes to over 3 hours. Those
long ones aren't a different edit of the episode — they bundle bonus
features directly onto the end of the same episode (confirmed by the
runtime gap in every duplicated pair, and by an entire duplicate "disk 2"
folder of generic `Title_N.mp4` files that turned out to be an exact
re-rip of another disk's episodes under the wrong names). The short cut is
used throughout.

The season 1 opener is the domestic "Original Pilot" — what actually
aired as the 2-hour series premiere — not the alternate "International
Pilot" cut (with a different ending, made for markets where a series
pickup wasn't guaranteed) also present in the same archive.org item.

## Known quality issue

Five episodes in this rip run noticeably shorter than the rest and look
truncated at the source, not intentionally edited down: "The Orchids
Curse" (~36 min), "Checkmate" (~34 min), "Demons" (~13 min), "Double Play"
(~12 min), and especially "Miss Twin Peaks" (~4.5 min). No longer version
of any of these exists in this archive.org item, so they're included as-is
rather than left out entirely.

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
