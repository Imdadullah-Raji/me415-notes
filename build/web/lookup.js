// ME415 Notes: render the maths, and show data-book look-ups over the page.
// A lookup link (a.lookup) carries data-t (table id) and data-r/data-c (the cell, resolved at build time);
// a table reference (a.tref) carries only data-t and shows the whole table.
(function () {
  "use strict";

  document.querySelectorAll(".math").forEach(function (e) {
    try {
      katex.render(e.textContent, e, { displayMode: e.classList.contains("display"), throwOnError: false });
    } catch (_) {}
  });

  // Data-book tables: hold the key columns in place. Their offsets depend on the rendered widths, so they are set
  // here (after the maths is drawn, again once the fonts are in); if the key columns would fill much of a narrow
  // frame, only the first is held.
  var frozen = document.querySelectorAll("table[data-freeze]");
  function freeze() {
    frozen.forEach(function (tb) {
      var want = +tb.dataset.freeze, head = tb.rows[0], lefts = [], x = 0, n, i, r;
      if (!head) return;
      for (i = 0; i < want && i < head.cells.length; i++) { lefts.push(x); x += head.cells[i].offsetWidth; }
      n = want > 1 && x > 0.45 * tb.parentNode.clientWidth ? 1 : want;
      for (r = 0; r < tb.rows.length; r++) {
        for (i = 0; i < want && i < tb.rows[r].cells.length; i++) {
          var c = tb.rows[r].cells[i], on = i < n;
          c.classList.toggle("fz", on);
          c.classList.toggle("fzl", on && i === n - 1);
          c.style.left = on ? lefts[i] + "px" : "";
        }
      }
    });
  }
  if (frozen.length) {
    freeze();
    window.addEventListener("load", freeze);
    window.addEventListener("resize", freeze);
  }

  // An aside: the dagger opens its note in place, and closes it again.
  document.querySelectorAll("button.dag").forEach(function (b) {
    b.addEventListener("click", function () {
      var note = b.nextElementSibling, open = b.getAttribute("aria-expanded") !== "true";
      note.hidden = !open;
      b.setAttribute("aria-expanded", open);
      b.title = open ? "Hide the note" : "Show the note";
    });
  });

  // A menu closes on a click anywhere outside it, or on Escape; opening one menu closes the other.
  var menus = document.querySelectorAll("details.menu");
  document.addEventListener("click", function (e) {
    menus.forEach(function (d) { if (d.open && !d.contains(e.target)) d.open = false; });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") menus.forEach(function (d) { d.open = false; });
  });
  menus.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) menus.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // A menu opens scrolled to the current page.
  document.querySelectorAll("details.menu").forEach(function (d) {
    d.addEventListener("toggle", function () {
      var cur = d.open && d.querySelector("li.cur"), ul = d.querySelector("ul");
      if (cur) ul.scrollTop = cur.offsetTop - ul.clientHeight / 3;
    });
  });

  var links = document.querySelectorAll("a.lookup, a.tref");
  if (!links.length) return;

  var tables = null;
  var loading = fetch("tables.json").then(function (r) { return r.json(); }).then(function (j) {
    tables = j;
    links.forEach(function (a) {
      var t = tables[a.dataset.t];
      if (!t) { a.classList.add("dead"); return; }
      if (t.page) a.href = t.page;
    });
  });

  // A centred panel over a dimmed page: while a table is open, nobody is reading the page behind it.
  var veil = document.createElement("div");
  veil.id = "veil";
  veil.hidden = true;
  veil.innerHTML = '<div id="pop" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(veil);
  var pop = veil.firstChild;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  function mark(s) { return s.replace(/\^([a-z])\b/g, "<sup>$1</sup>"); }   // a footnote mark, "6–8^a"

  function slice(t, r, c) {
    var n = t.rows.length, cols = [], i;
    var flag = t.cols.indexOf("flag");
    for (i = 0; i < t.cols.length; i++) if (i !== flag) cols.push(i);
    if (c != null && cols.length > 16) {
      cols = cols.filter(function (j) { return t.keys.indexOf(j) >= 0 || Math.abs(j - c) <= 6; });
    }
    var r0 = 0, r1 = n;
    if (r != null) {
      r0 = Math.max(0, r - 8); r1 = Math.min(n, r + 9);
      if (t.block != null) {                         // a superheated table: stay inside the pressure block of the cell
        var bv = t.rows[r][t.block];
        while (r0 < r && t.rows[r0][t.block] !== bv) r0++;
        while (r1 > r + 1 && t.rows[r1 - 1][t.block] !== bv) r1--;
      }
    }
    // A text column that is the same on every shown row (e.g. "without suspended ceiling") goes above the table.
    var fixed = [];
    if (r != null && r1 - r0 > 1) {
      cols = cols.filter(function (j) {
        var v = t.rows[r0][j];
        for (var k = r0 + 1; k < r1; k++) if (t.rows[k][j] !== v) return true;
        if (j === c || (t.keys.indexOf(j) < 0 && !isNaN(parseFloat(v)))) return true;
        fixed.push(t.heads[j] + ": " + v);
        return false;
      });
    }
    var h = fixed.length ? '<p class="fixed">' + esc(fixed.join(" · ")) + "</p>" : "";
    h += '<table class="lt"><thead><tr>';
    cols.forEach(function (j) { h += '<th' + (j === c ? ' class="hc"' : "") + ">" + esc(t.heads[j]) + "</th>"; });
    h += "</tr></thead><tbody>";
    if (r0 > 0) h += '<tr class="more"><td colspan="' + cols.length + '">⋮</td></tr>';
    for (i = r0; i < r1; i++) {
      h += "<tr" + (i === r ? ' class="hr"' : "") + ">";
      cols.forEach(function (j) {
        var cls = [];
        if (t.keys.indexOf(j) >= 0) cls.push("key");
        if (i === r && j === c) cls.push("hit");
        h += "<td" + (cls.length ? ' class="' + cls.join(" ") + '"' : "") + ">" + mark(esc(t.rows[i][j])) + "</td>";
      });
      h += "</tr>";
    }
    if (r1 < n) h += '<tr class="more"><td colspan="' + cols.length + '">⋮</td></tr>';
    h += "</tbody></table>";
    if (r != null && flag >= 0 && t.rows[r][flag]) h += '<p class="flag">Note: ' + esc(t.rows[r][flag]) + "</p>";
    return h;
  }

  function show(a) {
    if (!tables) { loading.then(function () { show(a); }); return; }
    var t = tables[a.dataset.t];
    if (!t) return;
    var r = a.dataset.r != null ? +a.dataset.r : null, c = a.dataset.c != null ? +a.dataset.c : null;
    pop.innerHTML =
      '<div class="ph"><span class="pt">' + esc(t.title) + "</span>" +
      (t.page ? '<a class="pfull" href="' + esc(t.page) + '">' + (t.image ? "full chart" : "full table") + ' →</a>' : "") +
      '<button class="px" aria-label="Close">×</button></div>' +
      '<div class="pb">' + (t.image ? '<img class="chart" src="' + esc(t.image) + '" alt="' + esc(t.title) + '">'
                                     : slice(t, r, c)) + "</div>";
    pop.querySelector(".px").onclick = hide;
    veil.hidden = false;
    document.body.classList.add("noscroll");
    var hit = pop.querySelector(".hit");
    if (hit) {
      var pb = pop.querySelector(".pb");
      pb.scrollLeft = Math.max(0, hit.offsetLeft - pb.clientWidth / 2);
      pb.scrollTop = Math.max(0, hit.offsetTop - pb.clientHeight / 2);
    }
  }

  function hide() {
    veil.hidden = true;
    document.body.classList.remove("noscroll");
  }

  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (a.classList.contains("dead")) return;
      e.preventDefault();
      show(a);
    });
  });
  veil.addEventListener("click", function (e) { if (e.target === veil) hide(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !veil.hidden) hide(); });
})();
