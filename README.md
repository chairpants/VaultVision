# RetroSamsung

A **Samsung Smart TV (Tizen)** port of the RetroTv / RetroTube web app. Browse a
channel guide of classic shows and play them edge-to-edge from
[archive.org](https://archive.org), with the on-screen display, episode guide,
captions — and a toggle into the three.js **3D Magnavox CRT** mode. This app
hosts no video itself.

## Why this is easy where Roku was hard

A Samsung TV app is a **Tizen web app** — HTML/CSS/JS in the TV's Chromium
runtime. So unlike the [RetroRoku](../RetroRoku) BrightScript rewrite, this
**reuses RetroTv's actual code**: the real `<video>`, the OSD, the ambilight,
captions, and the existing flat/3D toggle all carry over. The port is a thin
layer: a `config.xml` manifest, **TV-remote navigation**, and `.wgt` packaging.

And it's **testable here** — the whole UI + playback runs in a desktop browser
(`make serve`), and Tizen Studio ships a **TV emulator** for the TV-only APIs.

## Remote controls

Guide (`index.html`, see `tv.js`):

| Key | Action |
|---|---|
| D-pad ← ↑ → ↓ | move the focus ring across the poster grid |
| OK / Enter | open the focused show |
| Return (Back) | exit the app |

Player (`engine/viewer.html`, handler near the bottom of the module):

| Key | Action |
|---|---|
| OK / Play-Pause | turn on (first press) · then play / pause |
| ← / → · Rewind / FF | previous / next episode (or show, within a broadcast) |
| ↑ / ↓ | volume up / down |
| **Red** | episode guide |
| **Green** | flip 3D CRT mode ⇄ flat |
| **Yellow** | settings |
| **Blue** | captions |
| Return (Back) | back to the guide |

**Inside the episode guide / settings overlays, the D-pad navigates** (they used
to be mouse-only): ↑/↓ move the selection (highlighted row), OK plays the episode
or toggles the setting, ←/→ page seasons (guide) or adjust a slider/checkbox
(settings), and Red/Yellow/Back close.

Arrow keys + Enter stand in for the D-pad/OK in a desktop browser. The color and
media keys are TV-only, so for **desktop testing** letter keys mirror them:
`g` guide · `s` settings · `d` 3D toggle · `c` captions · `Esc` back/close.

## Testing

1. **Desktop browser** — the fastest loop, covers the whole UI + video:
   ```
   make serve      # assembles build/ and serves http://localhost:8080
   ```
   Drive it with arrow keys + Enter. (Color/media keys and app-exit are TV-only.)
2. **Tizen TV emulator** — for the Tizen APIs (key registration, app lifecycle).
   Launch it from Tizen Studio's Emulator Manager, then `make install TV=<emulator>`.
3. **A real Samsung TV** — one command once the three prerequisites below exist:
   ```
   make doctor                    # checks sdb/tizen + signing profile + devices
   make deploy IP=<tv-ip>         # connect + package signed .wgt + install
   ```

### Prerequisites for a real TV (one-time, and they need *you*)

Samsung gates sideloading deliberately, so these can't be fully automated:

1. **Tizen Studio CLI** on PATH (provides `tizen` + `sdb`). Install Tizen Studio
   (or the CLI-only package) from the Tizen site, plus the **Samsung Certificate
   Extension** via its Package Manager.
2. **A signing profile.** Samsung `.wgt`s need an *author* cert **and a
   distributor cert tied to your Samsung account + the TV's DUID**. Create it once
   in **Certificate Manager** (or `tizen certificate` / `tizen security-profiles`),
   then pass its name as `PROFILE=`. The TV's DUID shows up after `sdb connect`.
3. **Developer Mode on the TV.** Apps → type `12345` on the remote → toggle
   Developer Mode **On** and enter this PC's IP. Reboot the TV when it asks.

## Packaging

`make wgt` runs `tizen build-web` + `tizen package -t wgt`. Widgets must be
**signed**: create a signing profile once in Tizen Studio's *Certificate
Manager* (a Samsung author + distributor certificate) and pass its name as
`PROFILE=`. Without Tizen Studio you can still develop everything via `make serve`.

## Layout

```
index.html            channel guide (RetroTv's, + D-pad focus via tv.js)
tv.js                 guide remote navigation
engine/
  viewer.html         flat/3D player (RetroTv's, + a TV-remote keydown handler)
  magnavox.glb.js     the 3D CRT model (~20 MB, only fetched in 3D mode)
config.xml            Tizen manifest (privileges, icon, content, TV profile)
icon.png              app icon (tools/make_icon.py)
Makefile              assemble / serve / wgt / install
build/                staged app (make assemble) — shows/ + art/ pulled from RetroTv
```

`shows/` (per-show episode data) and `art/` (posters) are bundled in the repo, so
it's self-contained — clone and `make assemble` / `make wgt` with no other
dependencies.

## Caveats / not yet done

- **Ambilight = a 2nd `<video>`.** Some TVs have a single hardware video decoder;
  the blurred ambilight twin may not play on-device. Needs a TV check — if it
  fails, fall back to the thumbnail-frame approach RetroRoku uses.
- **CDN dependencies.** three.js and the VCR font load from CDNs, and video comes
  from archive.org — all need the `internet` privilege + `access origin="*"`
  (already set). For reliability you may want to bundle three.js and the font.
- **`.wgt` size.** The 3D model is ~20 MB; bundling `shows/` + `art/` makes the
  staged app ~48 MB. Fine to sideload; trim `art/`/model if you want it lean.
- **Signing.** A Samsung certificate is required to install on real hardware.
