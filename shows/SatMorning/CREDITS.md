# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Every episode this player streams is hosted by the Internet Archive and was
digitized and preserved by its community of uploaders — real off-air/VHS
captures of ABC, NBC, and CBS's Saturday morning cartoon blocks, spanning
1974-1993. This was the messiest bucket to research: most of what surfaced
is one tape/disk of a multi-part capture (`vts-01-1`, `vts-01-2`, "Disk
2/3", etc.) that would need its sibling parts found and stitched together —
not attempted here. What's in this player is only what stands on its own as
a real, complete-enough recording. See
`../research/abc-nbc-cbs-saturday-morning.md` for the fragments left out and
why. Deep gratitude to the VHS-hoarders who kept Saturday morning alive.
Support the Archive: https://archive.org/donate

The player also uses the Archive's metadata API and per-item thumbnail frames
(for the ambient lighting effect). These networks and shows are the property
of their respective rights holders; this project streams publicly hosted
recordings and hosts no video content itself.

## A note on runtime

The 09/13/1986 episode (`1986-09-13-abc-saturday-morning-popples-...`) runs
about 6 hours — it's a combined ABC + NBC recording, genuinely that long,
not a mistake. It's the single longest file across all five VaultVision
players. If very long archive.org streams turn out to be less reliable in
practice, that's the one to suspect first.

## A note on the June 7, 1986 episode

Two different archive.org uploads claim the same date and nearly the same
runtime for NBC that Saturday, but their descriptions disagree on what's
actually on the tape (Smurfs/Punky Brewster/Alvin/Kidd Video vs.
superhero cartoons and Johnny Quest). This player uses the one with the
more detailed, personal-sounding description; the other was left out rather
than guessing which is right. Worth a manual look before trusting either.

## Show/segment data

No episode has real timestamps yet. Show order for the ones where it's
known comes from the uploader's own title/description and is spread evenly
across the runtime — same approach as Fox Kids and Nick at Nite's per-tape
`SHOWS` tables. Two episodes (the two undated ABC 1993 recordings) have no
specific show order confirmed and use a single generic label.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
- Player engine (the 3D TV, OSD, controls) adapted from the SNICK-lite
  project in this same workspace — same code, different lineup.
