# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

Unlike most players here, this one is assembled from a search rather than a
single item: 40 separate archive.org uploads, each an off-air capture of one
USA Network *Up All Night* broadcast (1989-97), hosted by Rhonda Shear or
Gilbert Gottfried. About 78 hours in total, commercials and host segments
intact. Deep gratitude to the tapers who kept these. Support the Archive:
https://archive.org/donate

*USA Up All Night* and the films it aired are the property of their respective
rights holders; this project streams publicly hosted recordings and hosts no
video content itself.

## Source notes

The search for "USA Up All Night" returns 122 items, and most are not
broadcasts. Sorting them out was the whole job here.

61 were discarded immediately as other people's shows that merely mention Up
All Night in a description — *Dimension of Darkness*, *Nightmare Fuel*,
*Thriller TV*, a podcast episode, an Atari newsletter. Of the 61 that remained,
these were dropped too:

- `hell-comes-to-frogtown-usa-up-all-night` — second capture of Hell Comes to Frogtown, shorter
- `usa-up-all-night-return-of-the-killer-tomatoes` — second capture of Return of the Killer Tomatoes, undated and shorter
- `sorority-babes` — second capture of Sorority Babes, shorter
- `usa-up-all-night-beach-balls` — third copy of the same Beach Balls recording
- `1992-usa-up-all-night-beach-ballz` — third copy of the same Beach Balls recording
- `te-2-foxspr` — a mixed VHS tape (PBS/Fox/USA), not an Up All Night broadcast
- `2021-02-22-15-07-05` — unidentifiable capture — no film or date given
- `USAUpAllNight1995` — promo/segment reel, under 6 minutes
- `vts-01-1_20200817` — host segments only, 25 minutes
- `BestOfLNGUSAUpAllNight` — compilation, not a broadcast
- `usa-up-all-night-hot-splash-first-25-minutes-only` — first 25 minutes only
- `usa-up-all-night-host-segments-under-the-rainbow-equalizer-2` — host segments only
- `usa-up-all-night-under-the-rainbow-host-segments` — host segments only
- `new-01_202604` — Amazing Stories excerpt, 13 minutes
- `new-16_202604` — Amazing Stories excerpt, 12 minutes
- `new-24_20260413` — excerpt, 18 minutes
- `20220508-153856` — bumpers and commercials only
- `1992-uan-adz` — bumpers and commercials only
- `1992-uan-2` — bumpers and commercials only
- `1992-xmas-uan-bump` — bumpers only
- `usa-network-commercial-break-4-28-1995with-the-start-of-usa-up-all-night` — commercial break only

What is left is 40 full broadcasts, each 83 minutes or longer, ranging from
1989 to 1997. Where two uploads held the same broadcast the longer capture was
kept — three copies of the same *Beach Balls* recording exist, all identical in
length.

Dates come from the uploads themselves where they give one; 18 of the 40 are
dated to the day, the rest only to a year or not at all, so they are listed by
film instead. Film titles are spelled properly here rather than carried over
from the upload titles, which are inconsistent ("Beach Ballz'", "Nothern
Kicks", dates run into the film name).

Two entries are honest about being incomplete: the August 25, 1990 capture is
partial (though at over four hours it is the longest here), and *Dream a Little
Evil* loses its ending.

## Format note

`segments: "film"`, like MonsterVision — each entry is a feature with host
segments and period commercials around it, so REW/FF jumps to the start or end
of the film rather than paging between recordings, and the episode list shows
the film's name. The one double feature, *Monster High* with *Witch Academy*,
uses a `shows` entry instead, so REW/FF snaps between the two films.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.

## Poster

Gilbert Gottfried mid-rant, from the *Hell Comes to Frogtown* broadcast he
hosted — he is who this block looks like.

## Everything else

- **[three.js](https://threejs.org)** (MIT) — 3D rendering, including
  GLTFLoader, OrbitControls, and CSS3DRenderer.
- **VCR OSD Mono** typeface by Riciery Leal — the on-screen display font,
  served via [CDNFonts](https://www.cdnfonts.com/vcr-osd-mono.font).
