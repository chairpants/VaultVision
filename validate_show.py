#!/usr/bin/env python3
"""Validate one show's wiring. Usage: python3 validate_show.py <ShowId> [...]"""
import os
import re
import sys

sys.path.insert(0, os.path.expanduser("~/Projects/VaultVisionRoku/tools"))
from jsdata import JsParseError, parse_show


def check(show_id, html):
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
    if 'viewer.html?show=%s"' % show_id not in html:
        errs.append("no card in index.html for %s" % show_id)
    return errs, warns


def main():
    html = open("index.html", encoding="utf-8").read()
    bad = 0
    for show_id in sys.argv[1:]:
        errs, warns = check(show_id, html)
        print("%s: %s" % (show_id, "OK" if not errs else "%d problem(s)" % len(errs)))
        for e in errs:
            print("  ERROR", e)
        for w in warns:
            print("  warn ", w)
        bad += len(errs)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
