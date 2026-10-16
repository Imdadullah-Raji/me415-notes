// ME415 Notes: escalator arrangements in side elevation, as they are sketched in the exam.
// Four floors; up runs solid, down runs dashed. The drawing draws itself once, then arrows travel the rider's path:
// filled arrows going up, open arrows coming down, walking along the floor where the arrangement makes the rider
// walk round. The canvas holds only the drawing and one line describing it; the buttons sit below it.
// With data-static on the host, all four are drawn finished in a 2x2 sheet (used to make the PDF figure).
(function () {
  "use strict";
  var host = document.querySelector('[data-anim="escalators"]');
  if (!host) return;
  var NS = "http://www.w3.org/2000/svg", VW = 1000, VH = 560;
  var FL = [510, 370, 230, 90], X0 = 170, X1 = 950, XL = 360, XR = 780;   // floor levels (Floor 1 at the bottom); run ends
  var OFF = 6, WALK = { up: 0, down: 0 };              // up runs above their line, down runs below; walks on the floor
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var STATIC = host.hasAttribute("data-static");

  // Each arrangement: the side (L or R) where each storey's up run starts at the bottom, and where its down run
  // starts at the top, storeys counted from Floor 1. Taken from the guide's text (§2.13).
  var MODES = {
    spiral: { name: "Spiral crisscross", up: "LRL", down: "LRL",
      text: "Spiral (continuous) crisscross: in each storey the up and down units cross like an X. A rider leaving " +
            "one up unit turns 180° and steps straight onto the next, so travel is continuous; least floor space and structure." },
    walk: { name: "Walk-around crisscross", up: "LLL", down: "LLL",
      text: "Walk-around crisscross: the same X in each storey, with the second storey's directions reversed. The rider " +
            "walks the whole length of the escalator at each floor (stores use it to lead customers past goods)." },
    parallel: { name: "Parallel spiral", up: "LRL", down: "RLR",
      text: "Parallel (multiple parallel, spiral): the up and down units of each storey run side by side, facing the " +
            "same way; the rider turns and continues. Impressive, but more space and structure." },
    stacked: { name: "Stacked parallel", up: "LLL", down: "RRR",
      text: "Stacked parallel (walk-around): the units of every storey are stacked one above the other; the rider walks " +
            "the whole length of the escalator at each floor. Seldom used above two floors." }
  };
  function X(s) { return s === "L" ? XL : XR; }
  function other(s) { return s === "L" ? "R" : "L"; }

  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  // The runs to draw, in drawing order (up runs in the rider's order, then down runs), and the two rider paths.
  function geometry(m) {
    var runs = [], up = [], down = [], i, a, b;
    for (i = 0; i < 3; i++) {                            // up, storey by storey from Floor 1
      a = { x: X(m.up[i]), y: FL[i] - OFF };
      b = { x: X(other(m.up[i])), y: FL[i + 1] - OFF };
      runs.push({ a: a, b: b, dir: "up" });
      if (up.length && up[up.length - 1].x !== a.x) walk(up, a, FL[i] - WALK.up);
      up.push(a, b);
    }
    for (i = 2; i >= 0; i--) {                           // down, storey by storey from the top
      a = { x: X(m.down[i]), y: FL[i + 1] + OFF };
      b = { x: X(other(m.down[i])), y: FL[i] + OFF };
      runs.push({ a: a, b: b, dir: "down" });
      if (down.length && down[down.length - 1].x !== a.x) walk(down, a, FL[i + 1] - WALK.down);
      down.push(a, b);
    }
    return { runs: runs, paths: [route(up, "up"), route(down, "down")] };
    function walk(nodes, a, y) {                         // off one run, along the floor, onto the next
      var x0 = nodes[nodes.length - 1].x;
      nodes.push({ x: x0, y: y }, { x: a.x, y: y });
    }
  }
  function route(nodes, dir) {                           // segments with lengths; walks are the level ones
    var segs = [], total = 0;
    for (var i = 0; i < nodes.length - 1; i++) {
      var p = nodes[i], q = nodes[i + 1], len = Math.hypot(q.x - p.x, q.y - p.y);
      if (len < 1) continue;
      segs.push({ p: p, q: q, len: len, at: total, walk: Math.abs(q.y - p.y) < 1, step: Math.abs(q.x - p.x) < 1 });
      total += len;
    }
    return { segs: segs, total: total, dir: dir };
  }
  function pointAt(r, d) {
    for (var i = 0; i < r.segs.length; i++) {
      var s = r.segs[i];
      if (d <= s.at + s.len || i === r.segs.length - 1) {
        var t = Math.max(0, Math.min(1, (d - s.at) / s.len));
        return { x: s.p.x + (s.q.x - s.p.x) * t, y: s.p.y + (s.q.y - s.p.y) * t,
                 a: Math.atan2(s.q.y - s.p.y, s.q.x - s.p.x) * 180 / Math.PI, step: s.step };
      }
    }
  }

  // ---- draw one arrangement into group g; returns what the animation moves
  var uid = 0;
  function build(g, key, defs, big) {                   // big: a phone, so larger arrows
    var m = MODES[key], geo = geometry(m), items = [], arrows = [];
    var floors = el("path", { d: FL.map(function (y) { return "M" + X0 + " " + y + "H" + X1; }).join(" "),
                              "class": "es-floor", pathLength: 1 }, g);
    items.push({ path: floors, reveal: floors, dur: 500 });
    FL.forEach(function (y, i) {
      var t = el("text", { x: X0 - 16, y: y + 8, "class": "es-note", "text-anchor": "end" }, g);
      t.textContent = "Floor " + (i + 1);
    });
    geo.runs.forEach(function (r) {
      var d = "M" + r.a.x + " " + r.a.y + "L" + r.b.x + " " + r.b.y;
      var p = el("path", { d: d, "class": "es-run es-" + r.dir }, g), it = { path: p, dur: 320 };
      if (r.dir !== "up") {                              // a dashed line is revealed through a growing mask
        var id = "es-m" + uid++, mk = el("mask", { id: id, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: VW, height: VH }, defs);
        it.reveal = el("path", { d: d, stroke: "#fff", "stroke-width": 10, fill: "none", pathLength: 1 }, mk);
        p.setAttribute("mask", "url(#" + id + ")");
      } else {
        p.setAttribute("pathLength", 1);
        it.reveal = p;
      }
      items.push(it);
    });
    items.forEach(function (it) { it.reveal.setAttribute("stroke-dasharray", "1 1"); });
    geo.paths.forEach(function (r) {
      // moving: about two arrows on each run (one every ~220 units of path); still: one at the middle of each run and of each walk
      var spots = [];
      if (STATIC || still) r.segs.forEach(function (s) { if (!s.step) spots.push(s.at + s.len * (s.walk ? (r.dir === "up" ? 0.8 : 0.5) : 0.3)); });
      else for (var n = Math.max(3, Math.round(r.total / 220)), i = 0; i < n; i++)
        spots.push((i + (r.dir === "down" ? 0.5 : 0)) * r.total / n);   // down arrows half a gap behind: where both walk one floor, they alternate
      spots.forEach(function (d0) {
        var a = el("path", { d: r.dir === "up" ? "M-7 -5.5L6 0L-7 5.5Z" : "M-7 -5.5L4.5 0L-7 5.5", "class": "es-arrow es-" + r.dir }, g);
        arrows.push({ el: a, r: r, d0: d0, k: big ? 1.6 : STATIC ? 1.4 : 1 });
      });
    });
    return { items: items, arrows: arrows };
  }
  function placeArrows(arrows, shift, show) {
    arrows.forEach(function (w) {
      var tot = w.r.total, d = (w.d0 + shift) % tot, p = pointAt(w.r, d), fade = 40;
      var o = STATIC || still ? 1 : Math.min(1, d / fade, (tot - d) / fade);
      w.el.setAttribute("transform", "translate(" + p.x.toFixed(1) + " " + p.y.toFixed(1) + ") rotate(" + p.a.toFixed(1) + ") scale(" + w.k + ")");
      w.el.style.opacity = show && !p.step ? Math.max(0, o) : 0;   // hidden on the short step off a run
    });
  }

  // ---- the static sheet: all four, finished, 2x2, ink on white (its own style, so it needs no page CSS)
  if (STATIC) {
    var sheet = el("svg", { xmlns: NS, viewBox: "0 0 " + 2 * VW + " " + 2 * (VH + 70), width: 2 * VW, height: 2 * (VH + 70) });
    el("style", {}, sheet).textContent = ".es-floor{fill:none;stroke:#000;stroke-width:2.4}.es-run{fill:none;stroke:#000;stroke-width:3.4}" +
      ".es-run.es-down{stroke-dasharray:14 9}.es-arrow.es-up{fill:#000}.es-arrow.es-down{fill:#fff;stroke:#000;stroke-width:2.4;stroke-linejoin:round}" +
      ".es-note{font:24px serif;font-variant:small-caps;fill:#555}.es-title{font:bold 32px serif;fill:#000}";
    var sdefs = el("defs", {}, sheet);
    Object.keys(MODES).forEach(function (k, i) {
      var g = el("g", { transform: "translate(" + (i % 2) * VW + " " + (Math.floor(i / 2) * (VH + 70) + 60) + ")" }, sheet);
      var t = el("text", { x: VW / 2, y: -10, "class": "es-title", "text-anchor": "middle" }, g);
      t.textContent = "(" + "abcd"[i] + ") " + MODES[k].name;
      var b = build(g, k, sdefs);
      b.items.forEach(function (it) { it.reveal.style.strokeDashoffset = 0; });
      placeArrows(b.arrows, 0, true);
    });
    host.appendChild(sheet);
    return;
  }

  // ---- the page drawing
  var svg = el("svg", { viewBox: "0 0 " + VW + " " + VH, role: "img" });
  var defs = el("defs", {}, svg), gDraw = el("g", {}, svg), caption = el("text", { "class": "es-caption", "text-anchor": "middle" }, svg);
  host.appendChild(svg);

  var mode = "spiral", cur = null, t0 = 0, shift = 0, moving = !still, visible = true, raf = null, last = 0;
  var DRAWN = 1e9;                                       // t0 = -DRAWN: the drawing is complete

  function setup(drawIn) {
    var m = MODES[mode];
    gDraw.textContent = "";
    defs.textContent = "";
    svg.setAttribute("aria-label", m.name + " escalator arrangement, side elevation");
    var narrow = host.clientWidth > 0 && host.clientWidth < 560;
    svg.classList.toggle("es-narrow", narrow);
    cur = build(gDraw, mode, defs, narrow);
    // the description under the drawing, wrapped to the width; the sheet grows to hold it
    caption.textContent = "";
    var lh = narrow ? 54 : 34, words = (m.text + " Solid runs go up, dashed runs come down.").split(" "), lines = [], line = "";
    var probe = el("tspan", { x: VW / 2 }, caption);
    words.forEach(function (w) {
      probe.textContent = line ? line + " " + w : w;
      if (line && probe.getComputedTextLength() > VW - 50) { lines.push(line); line = w; } else line = probe.textContent;
    });
    lines.push(line);
    caption.textContent = "";
    lines.forEach(function (ln, j) {
      var t = el("tspan", { x: VW / 2, y: VH + (j + 1) * lh }, caption);
      t.textContent = ln;
    });
    svg.setAttribute("viewBox", "0 0 " + VW + " " + (VH + 22 + lines.length * lh));
    t0 = drawIn && !still ? performance.now() : -DRAWN;
    paint(performance.now());
    loop();
  }

  function paint(now) {
    var e = now - t0, done = true;
    cur.items.forEach(function (it) {
      var f = Math.max(0, Math.min(1, e / it.dur));
      it.reveal.style.strokeDashoffset = 1 - f;
      it.path.style.visibility = f > 0 ? "visible" : "hidden";
      if (f < 1) done = false;
      e -= it.dur + 40;
    });
    placeArrows(cur.arrows, shift, done);
    return done;
  }
  function frame(now) {
    raf = null;
    var dt = Math.min(100, now - last);
    last = now;
    var done = paint(now);
    if (done && moving) shift += dt * 0.09;
    if (visible && (!done || moving)) raf = requestAnimationFrame(frame);
  }
  function loop() {
    if (raf === null && visible) { last = performance.now(); raf = requestAnimationFrame(frame); }
  }

  // ---- controls, below the canvas
  var bar = document.createElement("div");
  bar.className = "dd-controls es-controls";
  bar.innerHTML = '<div class="dd-modes">' + Object.keys(MODES).map(function (k) {
      return '<button type="button" data-mode="' + k + '">' + MODES[k].name + "</button>";
    }).join("") + "</div>" +
    '<div class="dd-modes es-acts"><button type="button" class="es-redraw">↻ Draw it again</button>' +
    '<button type="button" class="es-pause"></button></div>';
  host.appendChild(bar);
  var pause = bar.querySelector(".es-pause");
  function label() { pause.textContent = moving ? "❚❚ Stop the arrows" : "▶ Move the arrows"; }
  bar.querySelectorAll("[data-mode]").forEach(function (b) {
    b.onclick = function () {
      mode = b.dataset.mode;
      bar.querySelectorAll("[data-mode]").forEach(function (o) { o.setAttribute("aria-pressed", o === b); });
      shift = 0;
      setup(true);
    };
    b.setAttribute("aria-pressed", b.dataset.mode === mode);
  });
  bar.querySelector(".es-redraw").onclick = function () { shift = 0; setup(true); };
  pause.onclick = function () { moving = !moving; label(); loop(); };
  label();
  if (still) bar.querySelector(".es-acts").hidden = true;   // reduced motion: drawn at once, the arrows standing still
  if (window.IntersectionObserver) {                     // no animation while the drawing is off screen
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; loop(); }).observe(svg);
  }
  var lastW = host.clientWidth;
  window.addEventListener("resize", function () {
    if ((host.clientWidth < 560) !== (lastW < 560)) setup(false);
    lastW = host.clientWidth;
  });
  setup(false);
})();
