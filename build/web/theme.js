// ME415 Notes: light or dark. Loaded in <head> (not deferred) so the theme is set before the page is drawn.
// The site follows the system setting until the reader clicks the toggle; the choice is then kept in localStorage
// (if storage is blocked the toggle still works, for the current page).
(function () {
  "use strict";
  var KEY = "me415-theme", root = document.documentElement, saved = null;
  try { saved = localStorage.getItem(KEY); } catch (_) {}
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function label(btn) {
    var dark = current() === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.title = btn.getAttribute("aria-label");
  }
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".themebtn");
    if (!btn) return;
    label(btn);
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (_) {}
      label(btn);
    });
  });
})();
