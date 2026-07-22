// Keyboard / D-pad navigation for the channel guide.
// The guide is a grid of <a class="card"> links; on a TV there's no mouse, so
// this moves a focus ring with the arrow keys and opens a card with OK. Return
// exits the app. Degrades cleanly in a desktop browser (arrow keys + Enter),
// where the Tizen APIs simply aren't present.
(function () {
  "use strict";

  // Ask the runtime to deliver the media/color keys (no-op off-device).
  try {
    if (window.tizen && tizen.tvinputdevice) {
      ["ColorF0Red", "ColorF1Green", "ColorF2Yellow", "ColorF3Blue"]
        .forEach(function (k) { try { tizen.tvinputdevice.registerKey(k); } catch (e) {} });
    }
  } catch (e) {}

  // Each category is its own carousel (one .row = one shelf of cards), so
  // navigation is row/col rather than one flat index: left/right wrap within
  // the current shelf (round robin), up/down move between shelves.
  var rows = [].slice.call(document.querySelectorAll(".row")).map(function (row) {
    return [].slice.call(row.querySelectorAll("a.card"));
  }).filter(function (r) { return r.length; });
  if (!rows.length) return;
  var r = 0, c = 0;

  function focus() {
    rows.forEach(function (row) {
      row.forEach(function (card) { card.classList.remove("tv-focus"); });
    });
    var el = rows[r][c];
    el.classList.add("tv-focus");
    el.focus({ preventScroll: true });
    el.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }

  function exit() {
    try {
      if (window.tizen && tizen.application)
        tizen.application.getCurrentApplication().exit();
    } catch (e) {}
  }

  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      case 39: c = (c + 1) % rows[r].length; break;                  // right, wraps
      case 37: c = (c - 1 + rows[r].length) % rows[r].length; break; // left, wraps
      case 40:                                                       // down
        r = Math.min(rows.length - 1, r + 1);
        c = Math.min(c, rows[r].length - 1);
        break;
      case 38:                                                       // up
        r = Math.max(0, r - 1);
        c = Math.min(c, rows[r].length - 1);
        break;
      case 13: location.href = rows[r][c].href; break;                // OK / Enter
      case 10009: exit(); break;                                      // Return / Back
      default: return;
    }
    e.preventDefault();
    focus();
  });

  focus();
})();
