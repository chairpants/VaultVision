#!/usr/bin/env python3
"""Validate one show's wiring. Usage: python3 validate_show.py <ShowId> [...]"""
import csv
import os
import re
import sys

sys.path.insert(0, os.path.expanduser("~/Projects/VaultVisionRoku/tools"))
from jsdata import JsParseError, parse_show


def load_shows_csv():
    """id -> (title, genre, ext), read from the guide's shows.js.

    shows.js is a `window.SHOWS_CSV = ...` JS template literal wrapping plain
    CSV, so the guide can load it via <script src> instead of fetch(), which
    lets index.html still work opened as a file:// URL (fetch() of a local
    file is blocked by Chrome's CORS policy; <script src> isn't).
    """
    text = open("shows.js", encoding="utf-8").read()
    m = re.search(r"window\.SHOWS_CSV\s*=\s*`(.*)`;\s*$", text, re.S)
    if not m:
        raise ValueError("shows.js: couldn't find `window.SHOWS_CSV = `...`;`")
    rows = {}
    for lineno, row in enumerate(csv.reader(m.group(1).splitlines()), 1):
        if len(row) != 4:
            raise ValueError("shows.js:%d: want 4 CSV fields, got %d" % (lineno, len(row)))
        title, show_id, genre, ext = row
        if show_id in rows:
            raise ValueError("shows.js: duplicate entry for %s" % show_id)
        rows[show_id] = (title, genre, ext)
    return rows


def check(show_id, shows_csv):
    errs, warns = [], []
    p = "shows/%s/data.js" % show_id
    if not os.path.exists(p):
        return ["%s missing" % p], []
    try:
        d = parse_show(open(p, encoding="utf-8").read())
    except JsParseError as e:
        return ["%s: %s" % (p, e)], []

    for f in ("title", "art", "storageProgressKey", "storageSettingsKey",
              "grouping", "segments", "episodes"):
        if f not in d:
            errs.append("data.js: missing required field %r" % f)
    if d.get("id", show_id) != show_id:
        errs.append("data.js id=%r != folder name %r" % (d.get("id"), show_id))
    if d.get("storageProgressKey") != show_id.lower() + "-progress":
        errs.append("storageProgressKey must be %r (Resume row depends on it)"
                    % (show_id.lower() + "-progress"))
    if d.get("storageSettingsKey") != show_id.lower() + "-settings":
        errs.append("storageSettingsKey must be %r" % (show_id.lower() + "-settings"))
    if d.get("grouping") not in ("season", "flat"):
        errs.append("grouping must be 'season' or 'flat'")
    if d.get("segments") not in ("none", "static", "film", "lineup"):
        errs.append("segments must be 'none' | 'static' | 'film' | 'lineup'")

    art = d.get("art", "")
    if art and not os.path.exists("art/" + art):
        errs.append("art/%s does not exist" % art)

    eps = d.get("episodes") or []
    if not eps:
        errs.append("no episodes")
    keys, seen = [], set()
    for i, e in enumerate(eps):
        if not isinstance(e, list) or not (2 <= len(e) <= 3):
            errs.append("episode %d: want [item, title] or [item, title, file]" % i)
            continue
        title = e[1]
        key = "%s::%s" % (e[0], e[2]) if len(e) > 2 else e[0]
        keys.append(key)
        if key in seen:
            errs.append("episode %d: duplicate key %s" % (i, key))
        seen.add(key)
        bits = title.split(" - ")
        if d.get("grouping") == "season":
            if len(bits) < 2:
                errs.append("episode %d: title %r must be 'SHOW - S01E01 - Name'"
                            % (i, title))
            elif not re.match(r"^S\d+E\d+", bits[1], re.I):
                warns.append("episode %d: code %r is not SxxEyy -> treated as season 1"
                             % (i, bits[1]))
        elif d.get("segments") == "lineup" and not re.search(r"\d\d/\d\d/\d{4}", title):
            if re.search(r"\b\d{4}\b", title):
                warns.append("episode %d: lineup title %r has only a year -> read as Jan 1"
                             % (i, title))
            else:
                errs.append("episode %d: lineup title %r has no date at all -> falls back "
                            "to the show name" % (i, title))

    dur = d.get("durations") or {}
    for k in dur:
        if k not in seen:
            warns.append("durations key matches no episode: %s" % k)
    if dur and [k for k in keys if k not in dur]:
        warns.append("%d episode(s) have no duration entry"
                     % len([k for k in keys if k not in dur]))
    if d.get("mergeParts") and not dur:
        errs.append("mergeParts needs durations to build the merged timeline")

    if d.get("segments") == "static" and not d.get("shows"):
        errs.append("segments:'static' requires a `shows` map")
    if d.get("segments") == "film" and not d.get("film"):
        errs.append("segments:'film' requires a `film` map")
    if d.get("segments") == "lineup" and not d.get("lineups"):
        errs.append("segments:'lineup' requires a `lineups` table")
    for m in ((d.get("shows") or {}), (d.get("film") or {}),
              (d.get("segmentTimestamps") or {})):
        for kk in m:
            if kk not in seen:
                errs.append("keyed map entry matches no episode: %s" % kk)

    for name, rect in (d.get("cropBySeason") or {}).items():
        if not all(x in rect for x in "xywh"):
            errs.append("cropBySeason[%s] needs x, y, w, h" % name)
    if d.get("crop") and not all(x in d["crop"] for x in "xywh"):
        errs.append("crop needs x, y, w, h")
    for code in d.get("incompleteEpisodes") or []:
        if not any(e[1].split(" - ")[1:2] == [code] for e in eps if len(e) > 1):
            errs.append("incompleteEpisodes: no episode has code %s" % code)

    for f in ("captions.js", "CREDITS.md"):
        if not os.path.exists("shows/%s/%s" % (show_id, f)):
            errs.append("shows/%s/%s missing" % (show_id, f))

    # The guide (index.html) is generated from shows.js's SHOWS_CSV data at
    # load time — a show with no row there, or one whose title/art extension
    # has drifted out of sync with data.js, silently doesn't show up (or shows
    # up wrong).
    row = shows_csv.get(show_id)
    if not row:
        errs.append("no entry in shows.js for %s" % show_id)
    else:
        csv_title, csv_genre, csv_ext = row
        if csv_title != d.get("title"):
            # Not necessarily a bug: the guide's display name is sometimes more
            # descriptive than data.js's internal title (e.g. "Stephen King's
            # The Shining (1997)" vs. "The Shining") — flag it for a human to
            # confirm that's intentional rather than staleness, don't hard-fail.
            warns.append("shows.js title %r != data.js title %r" % (csv_title, d.get("title")))
        art_ext = os.path.splitext(art)[1].lstrip(".")
        if art and csv_ext != art_ext:
            errs.append("shows.js art extension %r != data.js art %r" % (csv_ext, art))
        if not csv_genre:
            errs.append("shows.js: empty genre for %s" % show_id)
    return errs, warns


def main():
    shows_csv = load_shows_csv()
    bad = 0
    for show_id in sys.argv[1:]:
        errs, warns = check(show_id, shows_csv)
        print("%s: %s" % (show_id, "OK" if not errs else "%d problem(s)" % len(errs)))
        for e in errs:
            print("  ERROR", e)
        for w in warns:
            print("  warn ", w)
        bad += len(errs)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
