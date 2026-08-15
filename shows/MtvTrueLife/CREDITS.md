# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Eight standalone *True Life* recordings, found via a `subject:"MTV True Life"`
search, each its own archive.org item:

- [I'm a Porn Star](https://archive.org/details/im-a-porn-star-1998) (1998)
- [I'm a Football Hero](https://archive.org/details/im-a-football-hero-2000) (2000)
- [I'm on Crystal Meth](https://archive.org/details/im-on-crystal-meth-2000) (2000)
- [I'm on the Runway](https://archive.org/details/im-on-the-runway-2000_202312) (2000)
- [I'm a Private Wrestler](https://archive.org/details/truelifepw.avi) (2002)
- [I Have Embarrassing Parents](https://archive.org/details/MTVTrueLifeParents) (2002) — the uploader's own title notes "Season 3, Episode 13", matching the numbering derived below independently
- [I'm on Adderall](https://archive.org/details/im-on-adderall-2004) (2004)
- [I'm a Competitive Eater](https://archive.org/details/videoplayback_20231216_0556) (2006)

Support the Archive: https://archive.org/donate

*MTV True Life* is the property of its respective rights holders (MTV
Networks/Viacom); this project streams publicly hosted recordings and hosts
no video content itself.

## Source notes

The `subject:"MTV True Life"` search returns 10 items; two were excluded as
not being episodes: `20220107-151103` (an unrelated *MTV After Hours* / *120
Minutes* tape sharing the subject tag) and `youtube-3sT2he_cVPM` (a short
promotional sneak-peek clip, not a full episode).

None of the eight archive.org items carry season/episode numbering. It was
derived from [Wikipedia's *True Life* episode list](https://en.wikipedia.org/wiki/List_of_True_Life_episodes),
which numbers episodes sequentially overall rather than per season; the
season/in-season number here is that list's position counted within its own
season heading:

| Episode | Overall # (Wikipedia) | Assigned |
|---|---|---|
| I'm a Porn Star | 5 | S01E05 |
| I'm a Football Hero | 13 | S02E06 |
| I'm on Crystal Meth | 14 | S02E07 |
| I'm on the Runway | 18 | S02E11 |
| I'm a Private Wrestler | 31 | S03E09 |
| I Have Embarrassing Parents | 35 | S03E13 |
| I'm on Adderall | 77 | S04E36 |
| I'm a Competitive Eater | 103 | S08E08 |

The Embarrassing Parents result (S03E13) independently matches the uploader's
own "Season 3, Episode 13" label on that item, which supports the method.
This is still a count-matched inference, not a verified broadcast record —
Wikipedia's list is not itself in strict air-date order within a season (e.g.
season 2's #16 airs after #17/#18), so treat the numbering as "this is
episode N of the season" rather than proof of broadcast position.

Every item was checked against its `archive.org/metadata` file list rather
than guessed from filenames. Where an item offers both an original upload and
an Archive-generated derivative, the derivative `.mp4` (h.264/AAC) was used
for browser playback; where only a `source: original` `.mp4` exists
(*Football Hero*, *Runway*, *Competitive Eater*), it was probed with
`ffprobe` and confirmed h.264/AAC, so it's used directly.

**I'm on Crystal Meth** — the derivative `.mp4` Archive generated is
truncated: it runs 1906s (~32 min) while the original `.mkv` (also h.264/AAC,
confirmed via `ffprobe`) runs the full 3608s (~60 min). Frame-grabbing both
at the same timestamp (1880s) shows identical content up to that point, and a
grab from the `.mkv` just past where the `.mp4` ends (1900s) shows new,
different footage — so this is a real incomplete transcode, not an
alternate/shorter cut. The `.mp4` is used anyway (browsers don't reliably
play `.mkv` in `<video>` even with compatible codecs) and flagged via
`incompleteEpisodes`.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
