// ME415 Notes: lift door arrangements in plan (seen from above), as they are drawn in the exam.
// Closed panels solid on their tracks, open positions dashed, arrows marked with each panel's speed (v or 2v);
// the panels slide when the door is opened. The canvas holds only the drawing and one line describing it;
// the arrangement buttons, the Open button and the slider sit below it.
(function () {
  "use strict";
  var host = document.querySelector('[data-anim="doors"]');
  if (!host) return;
  var NS = "http://www.w3.org/2000/svg", VW = 1000, VH = 380;   // VH: the drawing; the description is added below it
  var W = 300, OL = 320, OR = OL + W;                    // the clear opening, W wide
  var WALL = [140, 180], TRACK = [215, 300], PH = 18;    // wall faces; the two door tracks; panel thickness
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Each panel: closed x-range [a, b], travel (signed), track (0 nearer the wall), speed label.
  var MODES = {
    single: { name: "Single-slide", stacks: [[OR, OR + W, "W"]],
      panels: [{ a: OL, b: OR, d: W, track: 0, v: "v" }],
      text: "Single-slide: one panel, W wide, slides fully to one side; it needs W of wall beside the opening." },
    centre: { name: "Centre-opening", stacks: [[OL - W / 2, OL, "W/2"], [OR, OR + W / 2, "W/2"]],
      panels: [{ a: OL, b: OL + W / 2, d: -W / 2, track: 0, v: "v" }, { a: OL + W / 2, b: OR, d: W / 2, track: 0, v: "v" }],
      text: "Centre-opening: two panels, W/2 each, part from the middle at the same speed; W/2 of wall on each side." },
    twospeed: { name: "Two-speed", stacks: [[OR, OR + W / 2, "W/2"]],
      panels: [{ a: OL, b: OL + W / 2, d: W, track: 0, v: "2v" }, { a: OL + W / 2, b: OR, d: W / 2, track: 1, v: "v" }],
      text: "Two-speed: two panels, W/2 each, on two tracks, both stacking on one side in W/2 of wall. " +
            "In the same time the far panel travels W and the near one W/2, so the far one moves at 2v." },
    twocentre: { name: "Two-speed centre-opening", stacks: [[OL - W / 4, OL, "W/4"], [OR, OR + W / 4, "W/4"]],
      panels: [{ a: OL + W / 4, b: OL + W / 2, d: -W / 2, track: 0, v: "2v" }, { a: OL, b: OL + W / 4, d: -W / 4, track: 1, v: "v" },
               { a: OL + W / 2, b: OL + 3 * W / 4, d: W / 2, track: 0, v: "2v" }, { a: OL + 3 * W / 4, b: OR, d: W / 4, track: 1, v: "v" }],
      text: "Two-speed centre-opening: a two-speed pair on each side, four panels of W/4; " +
            "it stacks in only W/4 on each side, so it gives the widest opening." }
  };

  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function text(parent, x, y, s, cls, anchor) {
    var t = el("text", { x: x, y: y, "class": cls || "dd-text", "text-anchor": anchor || "middle" }, parent);
    t.textContent = s;
    return t;
  }
  function dim(g, x1, x2, y, label) {                     // a dimension line with end ticks and arrows
    el("path", { d: "M" + x1 + " " + (y - 12) + "V" + (y + 12) + "M" + x2 + " " + (y - 12) + "V" + (y + 12) +
                    "M" + x1 + " " + y + "H" + x2 + "M" + (x1 + 10) + " " + (y - 5) + "L" + x1 + " " + y + "L" + (x1 + 10) + " " + (y + 5) +
                    "M" + (x2 - 10) + " " + (y - 5) + "L" + x2 + " " + y + "L" + (x2 - 10) + " " + (y + 5), "class": "dd-thin" }, g);
    text(g, (x1 + x2) / 2, y - 14, label, "dd-dim");
  }
  function ty(p) { return TRACK[p.track]; }

  var svg = el("svg", { viewBox: "0 0 " + VW + " " + VH, role: "img" });
  var gStatic = el("g", {}, svg), gMove = el("g", {}, svg), caption = el("text", { "class": "dd-caption", "text-anchor": "middle" }, svg);
  host.appendChild(svg);

  var mode = "twospeed", p = 0, anim = null, panels = [];

  function build() {
    var m = MODES[mode];
    gStatic.textContent = "";
    gMove.textContent = "";
    svg.setAttribute("aria-label", m.name + " lift door, in plan");
    // the landing wall, hatched, with the clear opening W
    [[40, OL], [OR, VW - 40]].forEach(function (w, i) {
      var clip = el("clipPath", { id: "dd-wall" + i }, gStatic), hw = WALL[1] - WALL[0], h = "";
      el("rect", { x: w[0], y: WALL[0], width: w[1] - w[0], height: hw }, clip);
      for (var x = w[0] - hw; x < w[1]; x += 20) h += "M" + x + " " + WALL[1] + "l" + hw + " " + (-hw);
      el("path", { d: h, "class": "dd-hatch", "clip-path": "url(#dd-wall" + i + ")" }, gStatic);
      el("rect", { x: w[0], y: WALL[0], width: w[1] - w[0], height: hw, "class": "dd-wall" }, gStatic);
    });
    text(gStatic, 50, 60, "Landing", "dd-note", "start");
    text(gStatic, 50, 345, "Hoistway side", "dd-note", "start");
    var narrow = host.clientWidth > 0 && host.clientWidth < 560;   // a phone: larger type, shorter labels
    svg.classList.toggle("dd-narrow", narrow);
    dim(gStatic, OL, OR, 105, narrow ? "W" : "W (clear opening)");
    m.stacks.forEach(function (s) { dim(gStatic, s[0], s[1], 105, s[2]); });
    // the tracks the panels use
    var lo = Math.min(OL, m.stacks[0][0]) - 10, hi = Math.max(OR, m.stacks[m.stacks.length - 1][1]) + 10;
    var tracks = mode === "twospeed" || mode === "twocentre" ? TRACK : [TRACK[0]];
    tracks.forEach(function (t) { el("path", { d: "M" + lo + " " + t + "H" + hi, "class": "dd-track" }, gStatic); });
    // open positions dashed, travel arrows with the speed
    m.panels.forEach(function (q) {
      var y = ty(q), c0 = (q.a + q.b) / 2, c1 = c0 + q.d, s = q.d > 0 ? 1 : -1, ay = y + PH / 2 + 18;
      el("rect", { x: q.a + q.d, y: y - PH / 2, width: q.b - q.a, height: PH, "class": "dd-open" }, gStatic);
      el("path", { d: "M" + c0 + " " + ay + "H" + c1 + "M" + (c1 - s * 12) + " " + (ay - 6) + "L" + c1 + " " + ay + "L" + (c1 - s * 12) + " " + (ay + 6),
                   "class": "dd-thin" }, gStatic);
      text(gStatic, (c0 + c1) / 2, ay + 32, q.v, "dd-speed");
    });
    panels = m.panels.map(function (q) {
      return el("rect", { y: ty(q) - PH / 2, width: q.b - q.a, height: PH, "class": "dd-panel" }, gMove);
    });
    // the description under the drawing, wrapped to the width; the sheet grows to hold it
    caption.textContent = "";
    var lh = narrow ? 44 : 34, words = m.text.split(" "), lines = [], line = "";
    var probe = el("tspan", { x: VW / 2 }, caption);
    words.forEach(function (w) {
      probe.textContent = line ? line + " " + w : w;
      if (line && probe.getComputedTextLength() > VW - 50) { lines.push(line); line = w; } else line = probe.textContent;
    });
    lines.push(line);
    caption.textContent = "";
    lines.forEach(function (ln, j) {
      var t = el("tspan", { x: VW / 2, y: VH + 8 + (j + 1) * lh }, caption);
      t.textContent = ln;
    });
    svg.setAttribute("viewBox", "0 0 " + VW + " " + (VH + 26 + lines.length * lh));
    draw();
  }

  function draw() {
    MODES[mode].panels.forEach(function (q, i) { panels[i].setAttribute("x", q.a + q.d * p); });
    slider.value = Math.round(p * 100);
    readout.textContent = Math.round(p * 100) + "% open";
    play.textContent = p >= 0.999 ? "◀ Close" : "▶ Open";
  }

  function animateTo(target) {
    cancelAnimationFrame(anim);
    var from = p, t0 = performance.now(), T = still ? 1 : 1800 * Math.abs(target - from) + 1;
    (function frame(now) {
      var t = Math.min(1, (now - t0) / T), e = t * t * (3 - 2 * t);   // start and stop gently
      p = from + (target - from) * e;
      draw();
      if (t < 1) anim = requestAnimationFrame(frame);
    })(t0);
  }

  // ---- controls, below the canvas
  var bar = document.createElement("div");
  bar.className = "dd-controls";
  bar.innerHTML = '<div class="dd-modes">' + Object.keys(MODES).map(function (k) {
      return '<button type="button" data-mode="' + k + '">' + MODES[k].name + "</button>";
    }).join("") + "</div>" +
    '<div class="dd-move"><button type="button" class="dd-play"></button>' +
    '<input type="range" min="0" max="100" step="1" value="0" aria-label="How far the door is open">' +
    '<span class="dd-read"></span></div>';
  host.appendChild(bar);
  var play = bar.querySelector(".dd-play"), slider = bar.querySelector("input"), readout = bar.querySelector(".dd-read");
  bar.querySelectorAll("[data-mode]").forEach(function (b) {
    b.onclick = function () {
      cancelAnimationFrame(anim);
      mode = b.dataset.mode;
      p = 0;
      bar.querySelectorAll("[data-mode]").forEach(function (o) { o.setAttribute("aria-pressed", o === b); });
      build();
    };
    b.setAttribute("aria-pressed", b.dataset.mode === mode);
  });
  play.onclick = function () { animateTo(p >= 0.999 ? 0 : 1); };
  slider.oninput = function () { cancelAnimationFrame(anim); p = slider.value / 100; draw(); };
  var lastW = 0;
  window.addEventListener("resize", function () {
    if ((host.clientWidth < 560) !== (lastW < 560)) build();
    lastW = host.clientWidth;
  });
  lastW = host.clientWidth;
  build();
})();
