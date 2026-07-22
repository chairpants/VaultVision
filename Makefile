# RetroSamsung build + packaging helpers.
#
#   make assemble   stage the full web app into build/ (pulls shows/ + art/ from RetroTv)
#   make serve      assemble + serve build/ at http://localhost:8080 for a browser test
#   make icon       regenerate icon.png
#   make wgt        package build/ into a signed .wgt   (needs Tizen Studio CLI + a signing profile)
#   make install    sdb-install the .wgt to a connected TV / emulator
#   make clean
#
# Tizen tooling isn't required to develop the UI — `make serve` runs the whole
# app in a normal browser. The .wgt/install targets need Tizen Studio. See README.

# TIZEN/SDB = Tizen Studio CLIs; PROFILE = signing profile (Tizen Certificate
# Manager); TV = device serial from `sdb devices`; IP = TV address for `deploy`.
# (No inline comments on these — Make would keep the trailing spaces.)
TIZEN   ?= tizen
SDB     ?= sdb
PROFILE ?= RetroSamsung
TV      ?=
IP      ?=

APP := index.html tv.js config.xml icon.png

.PHONY: assemble serve icon wgt install clean

assemble: icon
	rm -rf build && mkdir -p build/engine
	cp $(APP) build/
	cp engine/viewer.html engine/magnavox.glb.js engine/LICENSE build/engine/
	cp -r shows build/shows
	cp -r art build/art
	@echo "staged build/ ($$(du -sh build | cut -f1))"

serve: assemble
	@echo "open http://localhost:8080  (arrow keys + Enter emulate the D-pad/OK)"
	cd build && python3 -m http.server 8080

icon:
	python3 tools/make_icon.py

# Package the staged app into a signed widget. Requires a signing profile created
# once in Tizen Studio's Certificate Manager (Samsung author + distributor certs).
wgt: assemble
	$(TIZEN) build-web -- build
	$(TIZEN) package -t wgt -s $(PROFILE) -o . -- build/.buildResult
	@echo "built the .wgt in $$(pwd)"

# Sideload to a TV in Developer Mode (or the emulator). Connect first:
#   sdb connect <tv-ip> ; sdb devices   (then pass TV=<serial>)
install:
	@test -n "$(TV)" || { echo "set TV=<device-serial> (see: sdb devices)"; exit 1; }
	$(TIZEN) install -n $(wildcard *.wgt) -t $(TV)

# One-shot: connect to the TV by IP, package the signed .wgt, and install it.
#   make deploy IP=192.168.1.42
# Requires Tizen Studio CLI on PATH, a signing profile (PROFILE=), and the TV in
# Developer Mode with this PC's IP whitelisted. `sdb connect` names the device
# <ip>:26101, which is what we install onto.
deploy:
	@test -n "$(IP)" || { echo "set IP=<tv-ip>  (TV: Apps > 12345 > Developer Mode on, enter this PC's IP)"; exit 1; }
	@command -v $(SDB) >/dev/null || { echo "sdb not found — install Tizen Studio CLI first (see README)"; exit 1; }
	$(SDB) connect $(IP)
	$(SDB) devices
	$(MAKE) wgt
	$(TIZEN) install -n $(wildcard *.wgt) -t $(IP):26101
	@echo "installed on $(IP) — look for RetroTube in Apps"

# Check the toolchain + TV connection without installing anything.
doctor:
	@printf 'sdb:   '; command -v $(SDB) || echo 'MISSING (install Tizen Studio CLI)'
	@printf 'tizen: '; command -v $(TIZEN) || echo 'MISSING (install Tizen Studio CLI)'
	@echo 'signing profiles:'; $(TIZEN) security-profiles list 2>/dev/null || echo '  none (create one in Certificate Manager)'
	@echo 'connected devices:'; $(SDB) devices 2>/dev/null || echo '  sdb unavailable'

clean:
	rm -rf build *.wgt
