// RetroSamsung — TV remote / D-pad navigation for the channel guide.
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

  var cards = [].slice.call(document.querySelectorAll("a.card"));
  if (!cards.length) return;
  var focusIndex = 0;

  // Columns per row, inferred from how many cards share the top row's offsetTop
  // (the guide uses a responsive auto-fill grid, so this adapts to the panel).
  function cols() {
    var top = cards[0].offsetTop, n = 0;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].offsetTop !== top) break;
      n++;
    }
    return Math.max(1, n);
  }

  function focus(i) {
    focusIndex = Math.max(0, Math.min(cards.length - 1, i));
    cards.forEach(function (c, j) { c.classList.toggle("tv-focus", j === focusIndex); });
    var el = cards[focusIndex];
    el.focus({ preventScroll: true });
    el.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  function exit() {
    try {
      if (window.tizen && tizen.application)
        tizen.application.getCurrentApplication().exit();
    } catch (e) {}
  }

  document.addEventListener("keydown", function (e) {
    var c = cols();
    switch (e.keyCode) {
      case 39: focus(focusIndex + 1); break;   // right
      case 37: focus(focusIndex - 1); break;   // left
      case 40: focus(focusIndex + c); break;   // down
      case 38: focus(focusIndex - c); break;   // up
      case 13: location.href = cards[focusIndex].href; break;  // OK / Enter
      case 10009: exit(); break;               // Return / Back
      default: return;
    }
    e.preventDefault();
  });

  focus(0);
})();
