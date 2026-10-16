"""Web edition of the Essentials: ../essentials/NN_*.md + ../databook/databook.md -> ../web/ (static site, flat).

One page per subsection ("a page is a notebook page"), prev/next across the whole book, a chapter menu and a
section menu. Data-book lookups ([174]{.lookup t="18a" row="June" col="N"}) are resolved here against the CSVs in
hvac_data/extracted/tables: the build fails if a cell does not exist or differs from the printed value. The
resolved cells go to the page as data-r/data-c, the tables to web/tables.json; web/lookup.js shows them over the page.

Usage: build_web.py            (then: cd ../web && python -m http.server)
"""
import csv
import html
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

BUILD = Path(__file__).resolve().parent
GUIDE = BUILD.parent
ESS = GUIDE / "essentials"
DATABOOK = GUIDE / "databook" / "databook.md"
TABLES = GUIDE / "tables"                                     # the public repo carries a copy of the CSVs
if not TABLES.exists():
    TABLES = GUIDE.parent / "hvac_data" / "extracted" / "tables"
PAPER_TABLES = GUIDE.parent.parent / "extracted_papers" / "tables" / "2022-2023" / "ME415"   # T1-T6, BNBC (attached to papers)
ASSETS = BUILD / "web"
OUT = GUIDE / "web"

SITE = "ME415 Notes"
KATEX = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist"

# Table id -> CSV, and the columns that identify a row (joined by ";" in a lookup's row="…"; not "|", which splits pipe-table cells).
CSV_IDS = {"t01_r718_saturated": "water-sat", "t_water_superheated": "water-sh", "t_r134a_saturated": "r134a-sat",
           "t_r134a_superheated": "r134a-sh", "t_nh3_saturated": "nh3-sat", "t_nh3_superheated": "nh3-sh"}
KEYS = {"9": ["station"], "11": ["type_of_premise"], "12a": ["roof_no"], "12b": ["ceiling", "roof_no"],
        "13": ["lat_deg_N", "month"], "14": ["group_no", "description"], "15": ["wall_group", "orientation"],
        "16": ["code"], "17": ["description"], "18a": ["month"], "18b": ["month"], "19": ["orientation", "room_construction"],
        "20": ["solar_time_h"], "21": ["section", "type_of_glass", "nominal_thickness"], "22": ["a"],
        "23": ["room_envelope_construction"], "24": ["hours_on_h", "a_coef", "b_class"],
        "25": ["total_operational_hours_h"], "26": ["total_operational_hours_h"], "27": ["total_hours_in_space_h"],
        "28": ["degree_of_activity"],
        "T1": ["facility_type"], "T2": ["facility"], "T3": ["elevator_capacity_lb"], "T4": ["building_type"],
        "r134a-sat": ["T_C"], "nh3-sat": ["T_C"], "r134a-sh": ["p_MPa", "T_C"], "nh3-sh": ["p_bar", "T_C"],
        "water-sh": ["p_bar", "T_C"], "water-sat": ["T_C"],
        "7-ED1-3": ["r_over_D"], "7-CD3-10": ["D_mm"], "7-ED5-3-Cb": ["As_over_Ac", "Ab_over_Ac"],
        "7-ED5-3-Cs": ["As_over_Ac", "Ab_over_Ac"], "7-SD5-10-Cb": ["Ab_over_Ac"], "7-SD5-10-Cs": ["As_over_Ac"],
        "T5": ["building_height", "floors"], "T6": ["building_type", "rise_m"], "bnbc": ["building_type**"]}
BLOCKS = {"r134a-sh": "p_MPa", "nh3-sh": "p_bar", "water-sh": "p_bar"}   # the panel stays inside one pressure block
CHARTS = {"C1": "att_C1_average_trip_time.png", "C2": "att_C2_round_trip_time.png"}   # lift charts: shown as images


def fail(msg):
    sys.exit(f"build_web: {msg}")


def table_id(stem):
    if stem in CSV_IDS:
        return CSV_IDS[stem]
    m = re.match(r"t07_([A-Z]+\d-\d+)_.*?(_C[bs])?$", stem)      # Table 7 fittings: 7-ED1-3, 7-ED5-3-Cb, ...
    if m:
        return "7-" + m.group(1) + (m.group(2).replace("_", "-") if m.group(2) else "")
    m = re.match(r"att_(T[1-6])_", stem)
    if m:
        return m.group(1)
    if stem.startswith("att_BNBC_table_4.4.1"):
        return "bnbc"
    m = re.match(r"t(\d+)([a-z]?)_", stem)
    if not m:
        return None
    return str(int(m.group(1))) + m.group(2)


def norm_id(s):                                    # "18(a)" -> "18a"
    return re.sub(r"[()]", "", s)


def slugify(s):
    s = re.sub(r"[$\\{}^_]", "", s.lower())
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")[:48]


# ---------------------------------------------------------------- tables
def load_tables(captions):
    tables = {}
    files = sorted(TABLES.glob("*.csv")) + (sorted(PAPER_TABLES.glob("att_*.csv")) if PAPER_TABLES.exists() else [])
    for f in files:
        tid = table_id(f.stem)
        if tid is None:
            continue
        rows = list(csv.reader(f.open(newline="", encoding="utf-8")))
        head, body = rows[0], rows[1:]
        keys = [head.index(k) for k in KEYS.get(tid, [head[0]])]
        title, page = captions.get(tid, (f"Table {tid}", None))
        if page and tid not in CSV_IDS.values():         # anchors: #t-18a, #t-T1, #t-7-ED5-3-Cb (see db_tables)
            page += f"#t-{tid}"
        tables[tid] = {"title": tex_plain(title), "page": page, "cols": head, "heads": [pretty_col(h) for h in head],
                       "keys": keys, "rows": body}
        if tid in BLOCKS:
            tables[tid]["block"] = head.index(BLOCKS[tid])
    return tables


UNIT = re.compile(r"_(C|W_m2|W_m2K|W_mK|m2K_W|m2C_W|W_m2C|kJ_kg|kJ_kgK|m3_kg|kg_m3|kg_m2|MPa|bar|m_s|W|mm|h)$")
COMPASS = re.compile(r"^(N|NNE|NE|ENE|E|ESE|SE|SSE|S|SSW|SW|WSW|W|WNW|NW|NNW|HOR)(_(N|NNE|NE|ENE|E|ESE|SE|SSE|S|SSW|SW|WSW|W|WNW|NW|NNW|HOR))*$")


def pretty_col(h):
    """CSV column -> header shown in the popover: units dropped, hours as numbers, compass pairs as N/S."""
    m = re.match(r"^(?:h|hour_)(\d+)$", h)
    if m:
        return str(int(m.group(1)))
    s = UNIT.sub("", h)
    if COMPASS.match(s):
        return s.replace("_", "/")
    return s.replace("_", " ")


TEX_SYM = {r"\ge": "≥", r"\le": "≤", r"\rho": "ρ", r"\varepsilon": "ε", r"\epsilon": "ε", r"\theta": "θ",
           r"\Delta": "Δ", r"\omega": "ω", r"\phi": "φ"}


def tex_plain(s):
    s = s.replace("$^2$", "²").replace("$^3$", "³")
    for k, v in TEX_SYM.items():
        s = s.replace(k, v)
    return re.sub(r"\$([^$]*)\$", lambda m: re.sub(r"[\\{}]", "", m.group(1)).replace("_", ""), s)


def find_col(t, col):
    head = t["cols"]
    if col in head:
        return head.index(col)
    cands = [h for h in head if h in (f"h{col.zfill(2)}", f"hour_{col}") or h.startswith(col + "_")
             or h.endswith("_" + col)]                # "0.3" finds Vb_over_Vc_0.3
    if not cands:
        return None
    return head.index(min(cands, key=len))


def key_eq(cell, tok):
    """A row key matches as text, or as a number: row="-40" finds the row keyed -40.00."""
    cell = cell.strip().lower()
    if cell == tok:
        return True
    try:
        return float(cell) == float(tok)
    except ValueError:
        return False


def find_row(t, row):
    toks = [x.strip().lower() for x in row.split(";")]
    hits = [i for i, r in enumerate(t["rows"])
            if all(any(key_eq(r[k], tok) for k in t["keys"]) for tok in toks)]
    return hits


def same(printed, cell, x=1.0):
    """The printed value equals the cell (times x, a unit factor such as MPa -> kPa) at the printed precision:
    51.2 matches 0.05121 MPa with x=1000; 374.00 matches 374.00."""
    a = printed.replace("−", "-").replace("+", "").strip()
    b = cell.strip()
    try:
        va, vb = float(a.rstrip("%")), float(b.rstrip("%")) * x
        dec = len(a.rstrip("%").split(".")[1]) if "." in a else 0
        return abs(va - vb) <= 0.5 * 10 ** -dec + 1e-9
    except ValueError:                                # a text cell may hold more than is printed: "110–130 (10–12)^a"
        a = a.rstrip("%").lower()
        return a == b.lower() or bool(re.search(r"(?<![\w.–-])" + re.escape(a) + r"(?![\w.–-])", b.lower()))


def resolve(tables, tid, row, col, printed, where, x=1.0):
    t = tables.get(tid)
    if t is None:
        fail(f"{where}: lookup to unknown table {tid!r}")
    if not row and not col:                           # the whole table, or a chart: [RT = 145 s]{.lookup t="C2"}
        return None, None
    hits = find_row(t, row)
    if len(hits) != 1:
        fail(f"{where}: table {tid} row {row!r} matches {len(hits)} rows (keys: {[t['cols'][k] for k in t['keys']]})")
    c = find_col(t, col)
    if c is None:
        fail(f"{where}: table {tid} has no column {col!r}")
    cell = t["rows"][hits[0]][c]
    if not same(printed, cell, x):
        fail(f"{where}: table {tid} [{row} / {t['cols'][c]}] is {cell!r}, the text prints {printed!r}")
    return hits[0], c


# ---------------------------------------------------------------- markdown -> pages
PAGE_LINES = 150


def split_pages(md):
    """A page per ## section. A ## longer than PAGE_LINES is cut at its ### headings, and consecutive short pieces
    are packed back together up to PAGE_LINES, so a page is neither a scrap nor a whole chapter."""
    def cut(lines, level):
        out, cur, fence = [], [], False
        for ln in lines:
            if ln.startswith("```"):
                fence = not fence
            if not fence and ln.startswith(level + " ") and any(x.strip() for x in cur):
                out.append(cur)
                cur = []
            cur.append(ln)
        if any(x.strip() for x in cur):
            out.append(cur)
        return out

    pages = []
    for sec in cut(md.split("\n"), "##"):
        if len(sec) <= PAGE_LINES:
            pages.append(sec)
            continue
        cur = []
        for piece in cut(sec, "###"):
            if cur and len(cur) + len(piece) > PAGE_LINES:
                pages.append(cur)
                cur = []
            cur += piece
        pages.append(cur)
    return ["\n".join(p).strip() + "\n" for p in pages]


def page_title(md):
    heads = re.findall(r"^#{1,3} (.*)$", md, re.M)
    return heads[0] if heads else ""


def strip_md(s):
    s = re.sub(r"[*`]", "", re.sub(r"\$([^$]*)\$", r"\1", s))
    return re.sub(r'"([^"]*)"', "\u201c\\1\u201d", s)


FIGS = {}
IMG = r"(!\[(?:[^\[\]]|\[[^\[\]]*\])*\]\()([^)\s]+)"     # ![caption, which may cite [Arif p.40]](path


def fix_images(md, src_dir):
    def sub(m):
        p = (src_dir / m.group(2)).resolve()
        if not p.exists():
            fail(f"missing figure {p}")
        parts = p.parts
        name = f"m{parts[parts.index('modules') + 1][:2]}_{p.name}" if "modules" in parts else p.name
        FIGS[name] = p
        return f"{m.group(1)}figures/{name}"
    return re.sub(IMG, sub, md)


def pandoc(md, databook=False):
    args = ["pandoc", "-f", "markdown", "-t", "html5", "--katex", "--lua-filter", str(BUILD / "web.lua")]
    if databook:
        args += ["-M", "databook=true"]
    r = subprocess.run(args, input=md, capture_output=True, text=True, encoding="utf-8")
    if r.returncode or r.stderr.strip():
        fail(f"pandoc: {r.stderr.strip()}")
    out = re.sub(r"<colgroup>.*?</colgroup>", "", r.stdout, flags=re.S)   # pandoc's % widths squash wide tables
    return out.replace('<table style="width:100%;">', "<table>")       # ...and so does its width:100%


def ids_in(md):
    return set(re.findall(r"\{[^}]*#([\w-]+)", md))


# ---------------------------------------------------------------- template
def menu(label, items, cls):
    """items: (title, href, current, level); level 1 entries are the ### headings inside a page."""
    lis = "".join(f'<li class="l{lvl}{" cur" if cur else ""}"><a href="{href}">{html.escape(t)}</a></li>'
                  for t, href, cur, lvl in items)
    return f'<details class="menu {cls}"><summary>{label}</summary><ul>{lis}</ul></details>'


def render(title, body, menus, prev, nxt, crumb):
    nav = ""
    if prev or nxt:
        p = f'<a class="prev" href="{prev[1]}">← {html.escape(prev[0])}</a>' if prev else "<span></span>"
        n = f'<a class="next" href="{nxt[1]}">{html.escape(nxt[0])} →</a>' if nxt else "<span></span>"
        nav = f'<nav class="pager">{p}{n}</nav>'
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)} · {SITE}</title>
<link rel="stylesheet" href="{KATEX}/katex.min.css">
<link rel="stylesheet" href="book.css">
<script src="theme.js"></script>
</head><body>
<header class="bar"><a class="home" href="index.html">{SITE}</a>{menus}<a class="dblink" href="qb.html">QB analysis</a><a href="db-index.html">Data book</a><button class="themebtn" type="button" aria-label="Switch theme">☾</button></header>
<main class="page">
<div class="crumb">{crumb}</div>
{body}
{nav}
</main>
<script defer src="{KATEX}/katex.min.js"></script>
<script defer src="lookup.js"></script>
{'<script defer src="liftdraw.js"></script>' + chr(10) if 'data-anim="lift"' in body else ''}</body></html>
"""


# ---------------------------------------------------------------- books
# The Essentials (first read) and the Full guide (the modules), as (key, name, chapter files).
WITH_ESSENTIALS = False          # the Essentials are incomplete: off the site for now (the markdown stays)
BOOKS = ([("e", "Essentials", lambda: [f for f in sorted(ESS.glob("[0-9][0-9]_*.md")) if not f.name.startswith("00_")])]
         if WITH_ESSENTIALS and ESS.exists() else []) + \
        [("m", "Modules", lambda: sorted((GUIDE / "modules").glob("[0-9][0-9]_*/module.md")))]


def load_book(key, files):
    chapters = []
    for f in files():
        md = f.read_text(encoding="utf-8").replace("<!-- pagebreak -->", "")
        md = re.sub(r"<!-- BEGIN DATA TABLES.*?<!-- END DATA TABLES -->", "", md, flags=re.S)  # the data book replaces it
        md = fix_images(md, f.parent)
        num = (f.name if key == "e" else f.parent.name)[:2]
        title = re.search(r"^# (.*)$", md, re.M).group(1)
        pages = []
        for k, p in enumerate(split_pages(md)):
            pt = strip_md(page_title(p)) if k else strip_md(title)
            pages.append((f"{key}{num}-{k:02d}-{slugify(pt.replace('★', ''))}.html", pt, p))
        chapters.append({"num": num, "title": strip_md(title), "pages": pages})
    return chapters


def db_caption(text):
    """A data-book table caption -> (table id or None, anchor, short label), or None if it is not a caption."""
    t = re.sub(r"<[^>]+>", "", text)
    m = re.match(r"Data Book Table (\d+(?:\([a-z]\))?)", t)
    if m and m.group(1) == "7":                             # the fittings: one caption per sub-table
        f = re.search(r"\(([A-Z]+\d-\d+)\)(.*)", t)
        sub = "-Cb" if "branch" in f.group(2) else "-Cs" if "main" in f.group(2) else ""
        return f"7-{f.group(1)}{sub}", f"t-7-{f.group(1)}{sub}", f.group(1) + {"-Cb": " branch", "-Cs": " main"}.get(sub, "")
    if m:
        return norm_id(m.group(1)), f"t-{norm_id(m.group(1))}", m.group(1)
    m = re.match(r"(T[1-6])\.", t)
    if m:
        return m.group(1), f"t-{m.group(1)}", m.group(1)
    m = re.match(r"BNBC (\d{4})", t)
    if m:
        tid = "bnbc" if m.group(1) == "2020" else f"bnbc-{m.group(1)}"
        return tid, f"t-{tid}", f"BNBC {m.group(1)}"
    m = re.match(r"([\d.]+) (bar|MPa),", t)                 # a pressure block of a superheated table
    if m:
        return None, "p-" + slugify(f"{m.group(1)} {m.group(2)}"), m.group(1)
    return None


def db_tables(body, tables):
    """Data-book page: an id on every table caption, each table in a frame that scrolls both ways with its header row
    and key columns held in place (lookup.js sets the column offsets), long text cells wrapped at a fixed width,
    and a jump line under the heading. Returns (body, [(menu label, anchor)])."""
    pieces, jumps, pos, pending = [], [], 0, None
    for m in re.finditer(r"<p><strong>(.*?)</strong>(.*?)</p>|<table>.*?</table>", body, re.S):
        pieces.append(body[pos:m.start()])
        pos = m.end()
        if m.group(0).startswith("<p>"):
            pieces.append(m.group(0))
            info = db_caption(m.group(1))
            if info:
                pending = (len(pieces) - 1, m, info)
            continue
        tid = None
        if pending:
            k, c, (tid, aid, short) = pending
            pending = None
            pieces[k] = f'<p class="tcap" id="{aid}"><strong>{c.group(1)}</strong>{c.group(2)}\x00UP\x00</p>'
            label = re.sub(r'<span class="math inline">(.*?)</span>', lambda s: tex_plain(f"${s.group(1)}$"), c.group(1))
            label = html.unescape(re.sub(r"<[^>]+>", "", label)).replace("Data Book ", "")
            jumps.append((short, label if len(label) <= 64 else label[:62].rstrip(" ,.(") + "…", aid))
        t = tables.get(tid)
        n = 1
        if t:                                                   # freeze the leading key columns, at most two
            n = 0
            while n < len(t["cols"]) and n in t["keys"]:
                n += 1
            n = min(max(n, 1), 2)
        tab = re.sub(r"<td([^>]*)>(.*?)</td>", lambda d: d.group(0) if len(re.sub(r"<[^>]+>", "", d.group(2))) <= 48
                     else f'<td{d.group(1)}><span class="wrap">{d.group(2)}</span></td>', m.group(0), flags=re.S)
        pieces.append(f'<div class="tframe">' + tab.replace("<table>", f'<table data-freeze="{n}">', 1) + "</div>")
    body = "".join(pieces) + body[pos:]
    if len(jumps) < 2:
        return body.replace("\x00UP\x00", ""), []
    body = body.replace("\x00UP\x00", ' <a class="up" href="#jump" title="Back to the list of tables">↑</a>')
    unit = {re.search(r"(bar|MPa)", lab).group(1) for _, lab, aid in jumps if aid.startswith("p-")}
    head = f"Pressure ({unit.pop()}):" if len(unit) == 1 and all(a.startswith("p-") for *_, a in jumps) else "Tables:"
    line = (f'<p class="jump" id="jump"><span>{head}</span> '
            + " · ".join(f'<a href="#{aid}">{html.escape(short)}</a>' for short, _, aid in jumps) + "</p>")
    body = re.sub(r"(</h2>)", lambda m: m.group(1) + "\n" + line, body, count=1)
    return body, [(label, aid) for _, label, aid in jumps]


def subheads(body):
    return [(i, re.sub(r"<[^>]+>", "", h).strip()) for i, h in re.findall(r'<h3 id="([^"]+)"[^>]*>(.*?)</h3>', body, re.S)]


# ---------------------------------------------------------------- question-bank analysis page
SHORT = {"CL": "Cooling load", "LI": "Lifts", "FI": "Fire", "CM": "Components", "SP": "Special refrigeration",
         "AC": "Psychrometry and AC", "VC": "Vapour compression", "AB": "Absorption", "DU": "Ducts", "RF": "Refrigerants"}


def bars(rows, vmax, fmt, compact=False):
    """Plain horizontal bars: rows of (label html, sub text, value, tooltip). One series: no legend, value at the end."""
    out = []
    for lab, sub, v, tip in rows:
        out.append(f'<div class="brow" title="{html.escape(tip)}"><div class="blab">{lab}'
                   + (f'<span class="bsub">{html.escape(sub)}</span>' if sub else "") + '</div>'
                   f'<div class="btrack"><div class="bfill" style="width:{max(v, 0) / vmax * 100:.1f}%"></div></div>'
                   f'<div class="bval">{fmt(v)}</div></div>')
    return f'<div class="bars{" compact" if compact else ""}">' + "".join(out) + "</div>"


def qb_page(qb, mods):
    ys = lambda y: y[2:4] + "-" + y[7:9]
    years, topics = qb["years"], qb["topics"]
    href = lambda tp: mods[f"{tp['module']:02d}"]["pages"][0][0] if f"{tp['module']:02d}" in mods else "#"
    tname = lambda tp: f"Module {tp['module']}. {tp['name']}"
    every = [a for a in qb["archetypes"] if a["papers"] >= 10]
    top3 = topics[:3]
    peak = max(qb["rep_by_year"].items(), key=lambda kv: kv[1])
    h = [f'<h1>Question bank analysis</h1>',
         f'<p>Every part of the {len(years)} term-final papers from {ys(years[0])} to {ys(years[-1])}: {qb["n_entries"]} '
         f'parts, {qb["total_marks"]:.0f} marks offered. Each part is tagged with its topic (one module each) and its '
         f'<em>archetype</em>, the recurring question type it belongs to.</p>',
         '<h2>Findings</h2><ul>',
         f'<li><b>The topics carry nearly equal weight.</b> The top three, {", ".join(tp["name"].lower() for tp in top3)}, '
         f'take {sum(tp["pct"] for tp in top3):.1f}% of the marks between them; the modules are ordered by this weight.</li>',
         f'<li><b>{qb["theory_pct"]:.0f}% of the marks are theory</b> (short notes, comparisons, sketches) and '
         f'{qb["numerical_pct"]:.0f}% numericals.</li>',
         f'<li><b>{qb["recycled_pct"]:.0f}% of all marks went to questions asked more than once</b>, verbatim, nearly '
         f'verbatim or as a template with new numbers. In {ys(peak[0])}, {peak[1]:.0f}% of the paper\'s marks repeated '
         f'an earlier paper.</li>',
         '<li><b>Asked in at least 10 of 11 papers:</b> ' + "; ".join(f'{html.escape(a["name"].split(":")[0].split("(")[0].strip())} '
                                                                      f'({a["papers"]}/11)' for a in every) + ".</li>",
         "</ul>",
         '<h2>Where the marks go</h2><p>Share of all marks offered, by module.</p>',
         bars([(f'<a href="{href(tp)}">{html.escape(tname(tp))}</a>', f'{tp["count"]} parts · in {tp["papers"]}/11 papers',
                tp["pct"], f'{tp["name"]}: {tp["marks"]:.0f} marks, {tp["pct"]:.1f}%') for tp in topics],
              max(tp["pct"] for tp in topics), lambda v: f"{v:.1f}%"),
         '<h2>By paper</h2><p>Each module\'s share of a paper\'s marks, in %. A blank is a paper that did not ask it.</p>',
         '<div class="tscroll"><table class="yt"><thead><tr><th>Module</th>' + "".join(f"<th>{ys(y)}</th>" for y in years)
         + "</tr></thead><tbody>"
         + "".join(f'<tr><th><a href="{href(tp)}" title="{html.escape(tp["name"])}">{tp["module"]}. '
                   f'{SHORT.get(tp["key"], html.escape(tp["name"]))}</a></th>'
                   + "".join(f'<td>{v:.0f}</td>' if v else "<td></td>" for v in (tp["share_by_year"][y] for y in years))
                   + "</tr>" for tp in topics)
         + "</tbody></table></div>",
         '<h2>Repetition</h2><p>Share of each paper\'s marks that repeat a question set in an earlier paper.</p>',
         bars([(ys(y), "", v, f"{y}: {v:.1f}% repeated") for y, v in qb["rep_by_year"].items()], 100, lambda v: f"{v:.0f}%",
              compact=True),
         '<h2>Recurring question types</h2><p>For each module, its archetypes and how many of the 11 papers asked each.</p>']
    arch = {}
    for a in qb["archetypes"]:
        arch.setdefault(a["topic"], []).append(a)
    for tp in topics:
        rows = [(html.escape(a["name"].split(":")[0]), f'{a["kind"]} · {a["count"]} parts · {a["pct"]:.1f}% of marks',
                 a["papers"], f'{a["name"]} — asked in {", ".join(ys(y) for y in a["years"])}')
                for a in sorted(arch.get(tp["key"], []), key=lambda a: (-a["papers"], -a["pct"]))]
        h.append(f'<h3><a href="{href(tp)}">{html.escape(tname(tp))}</a> <span class="share">{tp["pct"]:.1f}% of marks</span></h3>')
        h.append(bars(rows, 11, lambda v: f"{v}/11"))
    kind_of = {a["key"]: a["kind"] for a in qb["archetypes"]}
    fams = sorted(qb["families"], key=lambda f: (-len(f["years"]), -f["marks"]))
    for title, sel in (("Repeated numericals", lambda f: kind_of.get(f["arch"]) != "theory"),
                       ("Repeated theory questions", lambda f: kind_of.get(f["arch"]) == "theory")):
        fs = [f for f in fams if sel(f)]
        h.append(f'<h2>{title}</h2><p>{len(fs)} families of questions asked again, verbatim, nearly verbatim, or as a '
                 f'template with new numbers.</p><ul class="fams">')
        for f in fs:
            h.append(f'<li><details><summary>{html.escape(f["title"])} <span class="share">{f["kind"]} · '
                     f'{len(f["years"])} papers · {f["marks"]:.0f} marks</span></summary>'
                     f'<p>{html.escape(f["note"])}</p><p class="yrs">Asked in {", ".join(ys(y) for y in f["years"])}.</p>'
                     f'</details></li>')
        h.append("</ul>")
    h.append('<h2>Method</h2><p>Each part of each paper was transcribed, given its printed marks, and tagged by hand with '
             'a topic and an archetype. A paper offers 280 marks (275 in 2012-13, 270 since 2022-23) and the shares are of '
             'the marks offered. A part counts as repeated when it belongs to a family of near-identical questions that an '
             'earlier paper already asked; the first paper to ask it does not count.</p>')
    return "\n".join(h)


# ---------------------------------------------------------------- build
def main():
    global OUT
    if "--out" in sys.argv:                           # build elsewhere (several builds at once, or a quick check)
        OUT = Path(sys.argv[sys.argv.index("--out") + 1]).resolve()
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "figures").mkdir(parents=True)

    # Data book: one page per ## section; captions give each table its title and page.
    db_md = re.sub(r"^---\n.*?\n---\n", "", DATABOOK.read_text(encoding="utf-8"), flags=re.S)
    db_pages, captions = [], {}
    for chunk in re.split(r"(?m)^(?=## )", db_md):
        m = re.match(r"## (D\d+)\.", chunk)
        if not m:
            continue
        fname = f"db-{m.group(1).lower()}.html"
        chunk = re.sub(r"(?m)^# .*$", "", chunk)          # part headings live in the index
        for cm in re.finditer(r"^\*\*Data Book Table (\d+(?:\([a-z]\))?)[ .(][^*]*?\.?\s*(.*?)\*\*", chunk, re.M):
            captions.setdefault(norm_id(cm.group(1)), (f"Table {cm.group(1)}. {cm.group(2)}".strip(), fname))
        for cm in re.finditer(r"^\*\*(T[1-6])\. (.*?)\*\*", chunk, re.M):
            captions.setdefault(cm.group(1), (f"{cm.group(1)}. {cm.group(2)}", fname))
        for cm in re.finditer(r"^!\[(C[12])\. ([^\]]*?)\.? Panels", chunk, re.M):
            captions.setdefault(cm.group(1), (f"{cm.group(1)}. {cm.group(2)}", fname))
        for cm in re.finditer(r"^!\[Data Book Chart (\d+)\. ([^\]]*?)\]\(([^)\s]+)", chunk, re.M):
            cid = f"chart{cm.group(1)}"
            if cid not in CHARTS:
                CHARTS[cid] = Path(cm.group(3)).name
                captions[cid] = (f"Chart {cm.group(1)}. " + re.split(r"(?<=[.)])\s(?=[A-Z][a-z])", cm.group(2), 1)[0].rstrip("."), fname)
        for cm in re.finditer(r"^\*\*Data Book Table 7\. ([^*]*?)\(([A-Z]+\d-\d+)\)([^*]*)\*\*", chunk, re.M):
            sub = "-Cb" if "branch" in cm.group(3) else "-Cs" if "main" in cm.group(3) else ""
            for tid in ([f"7-{cm.group(2)}{sub}"] if sub or cm.group(2) in ("ED1-3", "CD3-10") else []):
                captions.setdefault(tid, (f"Table 7. {cm.group(1)}({cm.group(2)}){cm.group(3)}".strip(), fname))
        for cm in re.finditer(r"^\*\*BNBC 2020 Table 4\.4\.1\. ([^*]*)\*\*", chunk, re.M):
            captions.setdefault("bnbc", (f"BNBC 2020 Table 4.4.1. {cm.group(1)}", fname))
        db_pages.append((fname, page_title(chunk), chunk))
    for stem, tid in CSV_IDS.items():                    # property tables have no "Table N" caption
        sec = {"water-sat": "d1", "water-sh": "d2", "r134a-sat": "d3", "r134a-sh": "d4", "nh3-sat": "d6", "nh3-sh": "d7"}[tid]
        captions.setdefault(tid, (next(t for f, t, _ in db_pages if f == f"db-{sec}.html"), f"db-{sec}.html"))
    tables = load_tables(captions)
    for cid, img in CHARTS.items():
        title, page = captions.get(cid, (cid, None))
        tables[cid] = {"title": tex_plain(title), "page": page, "image": f"figures/{img}"}

    books = {key: (name, load_book(key, files)) for key, name, files in BOOKS}

    # Where every anchor lives, for cross-page links (#mini-glass-solar -> e01-02-….html#mini-glass-solar).
    home = {}
    for _, chapters in books.values():
        for ch in chapters:
            for fname, _, md in ch["pages"]:
                for i in ids_in(md):
                    if i in home:
                        fail(f"duplicate id #{i} ({home[i]}, {fname})")
                    home[i] = fname

    # Pass 1: render every page (lookups resolved and checked).
    bodies, n_lookups = {}, 0
    for _, chapters in books.values():
        for ch in chapters:
            for fname, _, md in ch["pages"]:
                for m in re.finditer(r"\[([^\]]+)\]\{\.lookup ([^}]*)\}", md):
                    a = dict(re.findall(r'(\w+)="([^"]*)"', m.group(2)))
                    resolve(tables, a.get("t"), a.get("row", ""), a.get("col", ""), m.group(1), f"{fname} [{m.group(1)}]",
                            float(a.get("x", 1)))
                    n_lookups += 1
                for i in re.findall(r"\]\(#([\w-]+)\)", md):
                    if i not in home and not re.match(r"^\d", i):
                        fail(f"{fname}: link to #{i}, which no page defines")
                body = pandoc(md)
                n_md, n_html = len(re.findall(r"\]\{\.lookup ", md)), body.count('class="lookup"')
                if n_md != n_html:
                    fail(f"{fname}: {n_md} lookups in the markdown but {n_html} rendered (a broken span or table cell?)")

                def add_cell(m):
                    a = {k: html.unescape(v) for k, v in re.findall(r'(data-\w+)="([^"]*)"', m.group(0))}
                    t = tables[a["data-t"]]                  # already validated against the markdown above
                    if not a.get("data-row"):
                        return m.group(0)
                    r, c = find_row(t, a["data-row"])[0], find_col(t, a["data-col"])
                    return m.group(0)[:-1] + f' data-r="{r}" data-c="{c}">'
                body = re.sub(r'<a href="#" class="lookup"[^>]*>', add_cell, body)
                body = re.sub(r'href="#([\w-]+)"', lambda m: f'href="{home[m.group(1)]}#{m.group(1)}"'
                              if home.get(m.group(1), fname) != fname else m.group(0), body)
                bodies[fname] = body

    def book_menus(cur_key=None, cur_ch=None, cur_page=None):
        out = ""
        for key, (name, chapters) in books.items():
            out += menu(name, [(c["title"], c["pages"][0][0], c is cur_ch, 0) for c in chapters],
                        "book" + (" curbook" if key == cur_key else ""))
        if cur_ch:
            items = []
            for f, t, _ in cur_ch["pages"]:
                items.append((t, f, f == cur_page, 0))
                heads = subheads(bodies[f])
                if heads and heads[0][1] == t:          # the page opens with this ### heading: already listed
                    heads = heads[1:]
                items += [(h, f"{f}#{i}", False, 1) for i, h in heads]
            out += menu("Sections", items, "secs")
        return out

    # Pass 2: write the pages, with menus, cross-book links and prev/next within each book.
    n_pages = 0
    for key, (name, chapters) in books.items():
        linear = [(t, f) for c in chapters for f, t, _ in c["pages"]]
        other_key = "m" if key == "e" else "e"
        other = {c["num"]: c for c in books[other_key][1]} if other_key in books else {}
        for ch in chapters:
            for fname, title, md in ch["pages"]:
                i = next(k for k, (_, f) in enumerate(linear) if f == fname)
                prev = linear[i - 1] if i else None
                nxt = linear[i + 1] if i + 1 < len(linear) else None
                crumb = f'{name} · <a href="{ch["pages"][0][0]}">{html.escape(ch["title"])}</a>'
                if ch["num"] in other:
                    label = "Full treatment in the module" if key == "e" else "First read in the Essentials"
                    crumb += f' <a class="xbook" href="{other[ch["num"]]["pages"][0][0]}">{label} →</a>'
                (OUT / fname).write_text(render(title, bodies[fname], book_menus(key, ch, fname), prev, nxt, crumb), encoding="utf-8")
                n_pages += 1

    # Data-book pages.
    db_items = [(t, f, False, 0) for f, t, _ in db_pages]
    for k, (fname, title, md) in enumerate(db_pages):
        body = pandoc(fix_images(md, DATABOOK.parent), databook=True)
        body, jumps = db_tables(body, tables)
        prev = db_pages[k - 1][:2][::-1] if k else None          # (title, file)
        nxt = db_pages[k + 1][:2][::-1] if k + 1 < len(db_pages) else None
        items = []
        for t, f, _, _ in db_items:                              # this page's tables, indented under it
            items.append((t, f, f == fname, 0))
            if f == fname:
                items += [(label, f"#{aid}", False, 1) for label, aid in jumps]
        secs = menu("Sections", items, "secs")
        (OUT / fname).write_text(render(title, body, book_menus() + secs, prev, nxt,
                                        '<a href="db-index.html">Data book</a>'), encoding="utf-8")

    # Index pages.
    qb = json.loads((GUIDE / "qb" / "qb.json").read_text(encoding="utf-8")) if (GUIDE / "qb" / "qb.json").exists() else None
    share = {f"{tp['module']:02d}": tp["pct"] for tp in qb["topics"]} if qb else {}
    def toc(chapters):
        return "".join(f'<li><a href="{c["pages"][0][0]}">{html.escape(c["title"])}</a>'
                       + (f' <span class="share">{share[c["num"]]:.1f}% of marks</span>' if c["num"] in share else "")
                       + "</li>" for c in chapters)
    idx = (f'<h1 class="booktitle">{SITE}</h1><p class="subtitle">ME 415 term-final preparation, '
           f'with the data book one click away.</p>'
           + (pandoc((GUIDE / "cover.md").read_text(encoding="utf-8")) if (GUIDE / "cover.md").exists() else "")
           + "".join(f'<h2>{name}</h2>'
                     + ('<p>One module per topic, in order of exam weight: the full theory and every past term-final '
                        'question solved. Sections marked ★ are the first read.</p>' if key == "m" else "")
                     + f'<ul class="toc">{toc(chapters)}</ul>' for key, (name, chapters) in books.items())
           + '<h2>Also</h2><ul class="toc"><li><a href="db-index.html">Data book</a></li>'
           + ('<li><a href="qb.html">Question bank analysis</a>: where the marks of eleven papers went</li>' if qb else "")
           + "</ul>")
    (OUT / "index.html").write_text(render("Contents", idx, book_menus(), None, None, ""), encoding="utf-8")
    if qb:
        mods = {c["num"]: c for c in books["m"][1]}
        (OUT / "qb.html").write_text(render("Question bank analysis", qb_page(qb, mods), book_menus(), None, None,
                                            '<a href="index.html">Contents</a>'), encoding="utf-8")
    dbtoc = "".join(f'<li><a href="{f}">{html.escape(strip_md(t))}</a></li>' for f, t, _ in db_pages)
    (OUT / "db-index.html").write_text(render("Data book", f'<h1>Data book</h1><ol class="toc plain">{dbtoc}</ol>',
                                              book_menus(), None, None, ""), encoding="utf-8")

    # Assets.
    for name, p in FIGS.items():
        shutil.copy(p, OUT / "figures" / name)
    for f in ASSETS.iterdir():
        shutil.copy(f, OUT / f.name)
    (OUT / "tables.json").write_text(json.dumps(tables, separators=(",", ":")), encoding="utf-8")
    (OUT / ".nojekyll").write_text("", encoding="utf-8")
    check_links(tables)
    counts = ", ".join(f"{name} {sum(len(c['pages']) for c in chapters)}" for name, chapters in books.values())
    print(f"web: {n_pages} pages ({counts}), {len(db_pages)} data-book pages, {n_lookups} lookups resolved, "
          f"{len(FIGS)} figures, tables.json {(OUT / 'tables.json').stat().st_size // 1024} kB")


def check_links(tables):
    """Every local href must reach an existing file and, if it has one, an existing anchor."""
    ids = {p.name: set(re.findall(r'id="([^"]+)"', p.read_text(encoding="utf-8"))) for p in OUT.glob("*.html")}
    hrefs = [(f, h) for f in ids for h in re.findall(r'(?:href|src)="([^"]+)"', (OUT / f).read_text(encoding="utf-8"))]
    hrefs += [("tables.json", t["page"]) for t in tables.values() if t["page"]]
    for f, h in hrefs:
        if h.startswith("http") or h == "#":
            continue
        page, _, anc = h.partition("#")
        page = page or f
        if not (OUT / page).is_file() or (anc and anc not in ids.get(page, ())):
            fail(f"{f}: broken link {h}")


if __name__ == "__main__":
    main()
