#!/usr/bin/env python3
"""Generate the Tizen app icon (icon.png): a neon-green CRT on black, matching
the RetroTube VCR aesthetic. 512x512, drawn with Pillow.

Usage:  python3 tools/make_icon.py
"""
import os

from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "icon.png"))

BG = (6, 12, 6)
NEON = (57, 255, 20)


def rounded(draw, box, r, **kw):
    draw.rounded_rectangle(box, radius=r, **kw)


def main():
    S = 512
    im = Image.new("RGB", (S, S), BG)
    d = ImageDraw.Draw(im)

    # CRT cabinet outline
    rounded(d, (56, 96, 456, 372), 34, outline=NEON, width=10)
    # screen
    rounded(d, (86, 126, 380, 342), 18, outline=NEON, width=6)
    # scanlines across the screen
    for y in range(138, 336, 12):
        d.line((96, y, 370, y), fill=(20, 70, 20), width=3)
    # power light + control knobs on the right of the cabinet
    d.ellipse((404, 150, 428, 174), fill=NEON)
    d.ellipse((404, 210, 432, 238), outline=NEON, width=5)
    d.ellipse((404, 262, 432, 290), outline=NEON, width=5)
    # little legs
    d.line((120, 372, 104, 410), fill=NEON, width=10)
    d.line((392, 372, 408, 410), fill=NEON, width=10)
    # wordmark
    d.text((256, 452), "RETROTUBE", fill=NEON, anchor="mm")

    im.save(OUT)
    print("wrote %s (512x512)" % OUT)


if __name__ == "__main__":
    main()
