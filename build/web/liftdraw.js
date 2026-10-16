// ME415 Notes: the electric traction lift, drawn stage by stage as it is drawn in the exam.
// The canvas holds only the drawing, its labels (which stay once drawn) and the stage line at the bottom;
// the buttons sit below it. Each stage stops when drawn, so the reader can copy it before going on.
(function () {
  "use strict";
  var host = document.querySelector('[data-anim="lift"]');
  if (!host) return;
  var NS = "http://www.w3.org/2000/svg";
  var W = 1000, H = 1000, LX = 300, RX = 700;          // labels end at LX (left column) or start at RX (right)
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function R(x, y, w, h) { return "M" + x + " " + y + "h" + w + "v" + h + "h" + (-w) + "Z"; }
  function C(cx, cy, r) { return "M" + cx + " " + (cy - r) + "a" + r + " " + r + " 0 1 1 0 " + 2 * r + "a" + r + " " + r + " 0 1 1 0 " + (-2 * r); }
  function L(side, text, y, ax, ay) { return { side: side, text: text, y: y, ax: ax, ay: ay }; }
  function spring(cx) {                                  // a buffer: base plate, coil, striker plate
    return R(cx - 16, 912, 32, 8) + " M" + cx + " 912l-10 -6l20 -8l-20 -8l20 -8l-10 -6 M" + (cx - 14) + " 876h28";
  }

  // Each stage is a list of objects; each object is drawn in one go and then gets its labels.
  var STAGES = [
    { title: "Hoistway, machine room and pit", items: [
      { d: R(320, 50, 360, 160) + " M320 222H680", labels: [L("L", "Machine room", 50, 320, 62)] },
      { d: "M340 222V920H660V222 M300 590H340 M300 840H340", labels: [L("R", "Hoistway (lift well)", 760, 660, 760)] },
      { d: "M340 840H660", dash: "10 8", labels: [L("R", "Pit", 865, 650, 868)] }] },
    { title: "Drive sheave, deflector sheave, motor, brake and controller", items: [
      { d: C(510, 135, 40) + " " + C(510, 135, 30) + " " + C(510, 135, 4), labels: [L("R", "Drive sheave", 135, 550, 135)] },
      { d: C(594, 180, 16) + " " + C(594, 180, 3), labels: [L("R", "Deflector sheave", 192, 610, 184)] },
      { d: R(392, 112, 48, 48) + " M398 124h36 M398 136h36 M398 148h36 M440 136h5", labels: [L("L", "Drive motor", 150, 392, 145)] },
      { d: C(455, 135, 10) + " " + R(449, 119, 12, 5) + " " + R(449, 147, 12, 5), labels: [L("L", "Brake", 100, 455, 119)] },
      { d: R(625, 62, 43, 56) + " M632 76h29 M632 90h29 M640 106h14", labels: [L("R", "Controller", 80, 668, 88)] }] },
    { title: "Car, car doors, door operator and counterweight", items: [
      { d: R(404, 420, 132, 12) + " " + R(410, 432, 120, 158), labels: [L("R", "Car (with crosshead)", 470, 530, 480)] },
      { d: "M418 440V585 M424 440V585", labels: [L("L", "Car doors", 485, 421, 495)] },
      { d: R(414, 402, 34, 18), labels: [L("L", "Door operator", 400, 414, 410)] },
      { d: "M410 590V615L418 622", labels: [L("L", "Apron", 625, 412, 612)] },
      { d: R(590, 290, 40, 150) + " M590 315h40 M590 340h40 M590 365h40 M590 390h40 M590 415h40",
        labels: [L("R", "Counterweight", 360, 630, 360)] }] },
    { title: "Hoist ropes", items: [
      { d: "M470 420V135A40 40 0 0 1 537.2 105.6L604.9 168.3A16 16 0 0 1 610 180V290", w: 3,
        labels: [L("R", "Hoist (suspension) ropes", 250, 610, 250)] }] },
    { title: "Car and counterweight guide rails", items: [
      { d: "M398 222V920 M542 222V920", w: 3, labels: [L("R", "Car guide rails", 300, 542, 330)] },
      { d: "M582 222V920 M638 222V920", labels: [L("R", "Counterweight guide rails", 415, 638, 420)] }] },
    { title: "Overspeed governor, governor rope, tension sheave and safety gear", items: [
      { d: C(360, 180, 14) + " " + C(360, 180, 3) + " " + R(352, 194, 16, 16), labels: [L("L", "Overspeed governor", 190, 346, 182)] },
      { d: "M346 180V880 M374 180V880", labels: [L("L", "Governor rope", 270, 346, 270)] },
      { d: C(360, 880, 14) + " M360 894V905 " + R(352, 905, 16, 10), labels: [L("L", "Governor tension sheave", 870, 346, 880)] },
      { d: "M400 588H412V606H404Z M540 588H528V606H536Z M374 597H400", labels: [L("R", "Safety gear", 600, 538, 597)] }] },
    { title: "Landing door, indicator and push-button, limit switches, travelling cable", items: [
      { d: R(336, 480, 8, 110) + " M340 480V590", w: 3, labels: [L("L", "Landing door", 565, 340, 560)] },
      { d: R(306, 452, 28, 14), labels: [L("L", "Landing indicator", 440, 312, 459)] },
      { d: C(320, 525, 6), labels: [L("L", "Landing push-button", 525, 314, 525)] },
      { d: R(544, 250, 12, 16) + " " + R(544, 814, 12, 16), labels: [L("R", "Limit switches", 820, 556, 822)] },
      { d: "M500 590V720C500 770 560 770 560 720V520H660", labels: [L("R", "Travelling cable", 680, 560, 690)] }] },
    { title: "Car buffer and counterweight buffer in the pit", items: [
      { d: spring(470), labels: [L("L", "Car buffer", 945, 460, 908)] },
      { d: spring(610), labels: [L("R", "Counterweight buffer", 910, 622, 896)] }] }
  ];

  // ---- the canvas
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": "Electric traction lift, drawn stage by stage" });
  var defs = el("defs", {}, svg);
  var gDraw = el("g", { "class": "ld-draw" }, svg);
  var gLab = el("g", { "class": "ld-labels" }, svg);
  var stageText = el("text", { x: W / 2, "class": "ld-stage", "text-anchor": "middle" }, svg);
  host.appendChild(svg);

  var n = 0, labels = [];
  STAGES.forEach(function (st, si) {
    st.items.forEach(function (it) {
      var p = el("path", { d: it.d, "class": "ld-line", "stroke-width": it.w || 2.2, "pathLength": 1 }, gDraw);
      it.len = p.getTotalLength ? p.getTotalLength() : 300;
      if (it.dash) {                                     // a dashed line is revealed through a growing mask
        var m = el("mask", { id: "ld-m" + n, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: W, height: H }, defs);
        it.reveal = el("path", { d: it.d, stroke: "#fff", "stroke-width": 8, fill: "none", pathLength: 1 }, m);
        p.removeAttribute("pathLength");
        p.setAttribute("stroke-dasharray", it.dash);
        p.setAttribute("mask", "url(#ld-m" + n + ")");
      } else {
        it.reveal = p;
      }
      it.path = p;
      it.reveal.setAttribute("stroke-dasharray", "1 1");
      it.labelEls = it.labels.map(function (lb) {
        var g = el("g", { "class": "ld-label" }, gLab);
        lb.stage = si;
        lb.leader = el("polyline", { "class": "ld-leader" }, g);
        lb.dot = el("circle", { r: 3.5, "class": "ld-dot" }, g);
        lb.t = el("text", { y: lb.y, "text-anchor": lb.side === "L" ? "end" : "start" }, g);
        lb.t.textContent = lb.text;
        labels.push(lb);
        return g;
      });
      n++;
    });
  });

  // ---- layout. Wide: the drawing at full size, every label at one size. Narrow (a phone): the drawing at 80%, so
  // the label columns widen; the labels of the stage on screen are large (fitted to their column), earlier ones
  // small; the stage line may take two lines, so the sheet grows a little taller.
  var layoutKey = null, NARROW = 560, K = 0.8, CX = 500, CY = 470;
  function layout(now) {
    var narrow = host.clientWidth > 0 && host.clientWidth < NARROW;
    var key = narrow + ":" + now + ":" + stageText.dataset.s;
    if (key === layoutKey) return;
    layoutKey = key;
    var k = narrow ? K : 1, lx = narrow ? 330 : LX, rx = narrow ? 670 : RX, h = narrow ? 1070 : H;
    svg.setAttribute("viewBox", "0 0 " + W + " " + h);
    gDraw.setAttribute("transform", narrow ? "translate(" + CX * (1 - k) + " " + CY * (1 - k) + ") scale(" + k + ")" : "");
    labels.forEach(function (lb) {
      var big = lb.stage === now || now === "all", fs = !narrow ? 25 : big ? 34 : 23, tx = lb.side === "L" ? lx : rx;
      lb.t.setAttribute("x", tx);
      lb.t.style.fontSize = fs + "px";
      if (narrow && big) {                      // fit a long label to its column
        var w = lb.t.getComputedTextLength(), room = (lb.side === "L" ? lx : W - rx) - 10;
        if (w > room) lb.t.style.fontSize = (fs * room / w).toFixed(1) + "px";
      }
      var ax = CX + (lb.ax - CX) * k, ay = CY + (lb.ay - CY) * k;
      lb.leader.setAttribute("points", (tx + (lb.side === "L" ? 8 : -8)) + "," + (lb.y - parseFloat(lb.t.style.fontSize) * 0.32) + " " + ax + "," + ay);
      lb.dot.setAttribute("cx", ax);
      lb.dot.setAttribute("cy", ay);
    });
    // the stage line: one line if it fits, else two, broken at a word
    var text = stageText.dataset.text || "", fsS = narrow ? 34 : 26;
    stageText.style.fontSize = fsS + "px";
    stageText.textContent = text;
    var lines = [text];
    if (stageText.getComputedTextLength() > W - 40) {
      var words = text.split(" "), best = 1, i;
      for (i = 1; i < words.length; i++) {
        if (Math.abs(words.slice(0, i).join(" ").length - text.length / 2) < Math.abs(words.slice(0, best).join(" ").length - text.length / 2)) best = i;
      }
      lines = [words.slice(0, best).join(" "), words.slice(best).join(" ")];
    }
    stageText.textContent = "";
    var y0 = h - 22 - (lines.length - 1) * fsS * 1.2;
    lines.forEach(function (ln, j) {
      var ts = el("tspan", { x: W / 2, y: (y0 + j * fsS * 1.2).toFixed(1) }, stageText);
      ts.textContent = ln;
    });
  }
  window.addEventListener("resize", function () { layoutKey = null; paint(); });

  // ---- state: `done` stages are complete; `cur` is the stage being drawn (or null), `t` its elapsed time in ms
  var done = STAGES.length, cur = null, t = 0, running = false, auto = false, last = 0, gapTimer = null;
  var GAP = still ? 0 : 250, BETWEEN = still ? 0 : 1400;
  function dur(it) { return still ? 0 : Math.min(2200, Math.max(600, it.len / 0.42)); }
  function stageLength(st) { return st.items.reduce(function (s, it) { return s + dur(it) + GAP; }, 0); }

  function setItem(it, f, active) {                       // f: 0 = not drawn, 1 = drawn
    it.reveal.style.strokeDashoffset = 1 - f;
    it.path.style.visibility = f > 0 ? "visible" : "hidden";
    it.path.classList.toggle("ld-active", active);
    it.labelEls.forEach(function (g) { g.classList.toggle("ld-on", f >= 1); });
  }
  function paint() {
    STAGES.forEach(function (st, s) {
      var e = s === cur ? t : 0;
      st.items.forEach(function (it) {
        if (s < done) return setItem(it, 1, false);
        if (s !== cur) return setItem(it, 0, false);
        var d = dur(it), f = d ? Math.max(0, Math.min(1, e / d)) : (e >= 0 ? 1 : 0);
        setItem(it, f, f > 0 && f < 1);
        e -= d + GAP;
      });
    });
    var s = cur !== null ? cur : done - 1, whole = cur === null && done >= STAGES.length;
    stageText.dataset.s = whole ? "all" : s;
    stageText.dataset.text = whole ? "The finished drawing: press “Draw along” to draw it stage by stage"
      : s < 0 ? "Press “Draw stage 1” and draw along" : "Stage " + (s + 1) + ": " + STAGES[s].title;
    layout(whole ? "all" : s);
    buttons();
  }
  function frame(now) {
    if (!running) return;
    t += now - last;
    last = now;
    if (t >= stageLength(STAGES[cur])) {
      done = cur + 1; cur = null; running = false;
      paint();
      if (auto && done < STAGES.length) gapTimer = setTimeout(start, BETWEEN);
      else auto = false;
      return;
    }
    paint();
    requestAnimationFrame(frame);
  }
  function start() {
    gapTimer = null;
    if (cur === null) { if (done >= STAGES.length) return; cur = done; t = 0; }
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
    paint();
  }
  function stop() { running = false; clearTimeout(gapTimer); gapTimer = null; }

  // ---- controls, below the canvas
  var bar = document.createElement("div");
  bar.className = "ld-controls";
  bar.innerHTML = '<button type="button" data-a="back">◀ Back</button>' +
    '<button type="button" data-a="main" class="ld-main"></button>' +
    '<button type="button" data-a="all"></button>' +
    '<button type="button" data-a="restart">↺ Restart</button>';
  host.appendChild(bar);
  var B = {};
  bar.querySelectorAll("button").forEach(function (b) { B[b.dataset.a] = b; });

  function buttons() {
    var end = done >= STAGES.length && cur === null;
    B.main.textContent = running ? "❚❚ Pause" : cur !== null ? "▶ Resume stage " + (cur + 1)
      : end ? "▶ Draw along from stage 1" : "▶ Draw stage " + (done + 1);
    B.all.textContent = auto ? "Stop after this stage" : "Play all";
    B.back.disabled = done === 0 && cur === null;
  }
  B.main.onclick = function () {
    if (running) { stop(); auto = false; paint(); return; }
    if (done >= STAGES.length && cur === null) done = 0;     // from the finished drawing: start again
    start();
  };
  B.all.onclick = function () {
    auto = !auto;
    if (auto && done >= STAGES.length && cur === null) done = 0;
    if (auto && !running && !gapTimer) start();
    if (!auto && gapTimer) stop();
    paint();
  };
  B.back.onclick = function () {
    stop(); auto = false;
    if (cur !== null) cur = null; else done = Math.max(0, done - 1);
    paint();
  };
  B.restart.onclick = function () { stop(); auto = false; cur = null; done = 0; paint(); };
  host.tabIndex = 0;
  host.addEventListener("keydown", function (e) {
    if (e.target !== host) return;
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); B.main.click(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); B.back.click(); }
  });
  paint();
})();
