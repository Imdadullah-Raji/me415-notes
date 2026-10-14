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

  function slice(t, r, c) {
    var n = t.rows.length, cols = [], i;
    var flag = t.cols.indexOf("flag");
    for (i = 0; i < t.cols.length; i++) if (i !== flag) cols.push(i);
    if (c != null && cols.length > 16) {
      cols = cols.filter(function (j) { return t.keys.indexOf(j) >= 0 || Math.abs(j - c) <= 6; });
    }
    var r0 = 0, r1 = n;
    if (r != null) { r0 = Math.max(0, r - 8); r1 = Math.min(n, r + 9); }
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
        h += "<td" + (cls.length ? ' class="' + cls.join(" ") + '"' : "") + ">" + esc(t.rows[i][j]) + "</td>";
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
      (t.page ? '<a class="pfull" href="' + esc(t.page) + '">full table →</a>' : "") +
      '<button class="px" aria-label="Close">×</button></div>' +
      '<div class="pb">' + slice(t, r, c) + "</div>";
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
