# Credits & Attributions

This project stands on other people's work. Thank you, all.

## CRT TV 3D model

["Magnavox 19" CRT TV - RR1938 W122"](https://skfb.ly/o6xw8) by
[amhyde](https://sketchfab.com/amhyde) is licensed under
[Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

Used as the player's TV set, embedded as glTF for web rendering.

## Video content

**The Internet Archive** — https://archive.org

This is the widest-spread show in the library: **476 episodes across 75
separate archive.org items**, because no single uploader covered the run. The
bulk comes from a handful of season packs —
[US S01](https://archive.org/details/whose-line-is-it-anyway-us-s-01-webdl-1080p)
through [US S08](https://archive.org/details/whose-line-is-it-anyway-us-s-08-webdl-1080p),
[UK series 6](https://archive.org/details/whose-line-is-it-anyway-uk-season-6),
[9](https://archive.org/details/whose-line-is-it-anyway-uk-s-09) and
[10](https://archive.org/details/whose-line-is-it-anyway-uk-s-10), and one
219-episode item, [es_20251113](https://archive.org/details/es_20251113),
carrying the entire CW revival. The rest are one-off uploads of single episodes
filling gaps. Support the Archive: https://archive.org/donate

*Whose Line Is It Anyway?* is the property of its respective rights holders;
this project streams publicly hosted recordings and hosts no video content
itself.

## Source notes

**The season numbers run 1-20 across two different shows.** This is one guide
covering both the Channel 4 original and its ABC/CW successor, and the
numbering doesn't separate them:

| seasons | which show |
|---|---|
| 1-5, 7, 8 | US (ABC) |
| 6, 9, 10 | **UK (Channel 4)** |
| 11-18 | US revival (CW), all from `es_20251113` |
| 19, 20 | US, recent |

So picking season 6 gets you Clive Anderson, and season 7 gets you Drew Carey.
Two further episodes sit on the wrong side of that line: `S01E00` (the UK
pilot, from `whose-line-is-it-anyway-uk-season-1`) and `S05E06` (from
`whose-line-is-it-anyway-uk-season-5`) are UK episodes inside otherwise-US
seasons. Nothing is renumbered here — the episode codes are as supplied — but
anyone browsing should know the dial crosses the Atlantic three times.

Episode titles are the guest lineups ("Greg Proops, Wayne Brady, Colin Mochrie,
Ryan Stiles") rather than episode names, which is how this show is usually
indexed; it's an improv panel show and the episodes have no broadcast titles.

**On vetting:** a first pass flagged 15 of the 75 items as unreachable, which
would have meant dropping 108 episodes. All 15 were false alarms — archive.org
returns intermittent 500s, and a node `fetch` gives up after 10 seconds on data
nodes that routinely take longer to wake. Re-checking with backoff cleared 10,
and curl with a 60-second connect timeout cleared the remaining 5. Every one of
the 476 episodes streams. Worth remembering before pruning a show on the
strength of a single failed request.

## Poster art

`WhoseLineIsItAnyway.jpg` is Drew Carey at the desk, 40 seconds into US S01E01.
`WhoseLineIsItAnyway-tall.jpg` is the supplied portrait poster, which is the
wrong shape for the landscape guide card but right for the tall slot.

## Captions

No captions yet for this player — `captions.js` is an empty placeholder.
