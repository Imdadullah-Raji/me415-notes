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
        "28": ["degree_of_activity"]}


def fail(msg):
    sys.exit(f"build_web: {msg}")


def table_id(stem):
    if stem in CSV_IDS:
        return CSV_IDS[stem]
    m = re.match(r"t(\d+)([a-z]?)_", stem)
    if not m or stem.startswith("t07"):          # Table 7 is six fitting tables; not linked yet
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
    for f in sorted(TABLES.glob("*.csv")):
        tid = table_id(f.stem)
        if tid is None:
            continue
        rows = list(csv.reader(f.open(newline="")))
        head, body = rows[0], rows[1:]
        keys = [head.index(k) for k in KEYS.get(tid, [head[0]])]
        title, page = captions.get(tid, (f"Table {tid}", None))
        if page and tid not in CSV_IDS.values():      # captioned tables get an anchor (#t-18a); property tables do not
            page += f"#t-{tid}"
        tables[tid] = {"title": tex_plain(title), "page": page, "cols": head, "heads": [pretty_col(h) for h in head],
                       "keys": keys, "rows": body}
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


def tex_plain(s):
    s = s.replace("$^2$", "²").replace("$^3$", "³")
    return re.sub(r"\$([^$]*)\$", lambda m: re.sub(r"[\\{}]", "", m.group(1)).replace("_", ""), s)


def find_col(t, col):
    head = t["cols"]
    if col in head:
        return head.index(col)
    cands = [h for h in head if h in (f"h{col.zfill(2)}", f"hour_{col}") or h.startswith(col + "_")]
    if not cands:
        return None
    return head.index(min(cands, key=len))


def find_row(t, row):
    toks = [x.strip().lower() for x in row.split(";")]
    hits = [i for i, r in enumerate(t["rows"])
            if all(any(r[k].strip().lower() == tok for k in t["keys"]) for tok in toks)]
    return hits


def same(printed, cell):
    a = printed.replace("−", "-").replace("+", "").strip()
    b = cell.strip()
    try:
        return float(a.rstrip("%")) == float(b.rstrip("%"))
    except ValueError:
        return a.lower() == b.lower()


def resolve(tables, tid, row, col, printed, where):
    t = tables.get(tid)
    if t is None:
        fail(f"{where}: lookup to unknown table {tid!r}")
    hits = find_row(t, row)
    if len(hits) != 1:
        fail(f"{where}: table {tid} row {row!r} matches {len(hits)} rows (keys: {[t['cols'][k] for k in t['keys']]})")
    c = find_col(t, col)
    if c is None:
        fail(f"{where}: table {tid} has no column {col!r}")
    cell = t["rows"][hits[0]][c]
    if not same(printed, cell):
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
    r = subprocess.run(args, input=md, capture_output=True, text=True)
    if r.returncode or r.stderr.strip():
        fail(f"pandoc: {r.stderr.strip()}")
    return re.sub(r"<colgroup>.*?</colgroup>", "", r.stdout, flags=re.S)   # pandoc's % widths squash wide tables


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
</head><body>
<header class="bar"><a class="home" href="index.html">{SITE}</a>{menus}<a class="dblink" href="db-index.html">Data book</a></header>
<main class="page">
<div class="crumb">{crumb}</div>
{body}
{nav}
</main>
<script defer src="{KATEX}/katex.min.js"></script>
<script defer src="lookup.js"></script>
</body></html>
"""


# ---------------------------------------------------------------- books
# The Essentials (first read) and the Full guide (the modules), as (key, name, chapter files).
BOOKS = [("e", "Essentials", lambda: [f for f in sorted(ESS.glob("[0-9][0-9]_*.md")) if not f.name.startswith("00_")]),
         ("m", "Full guide", lambda: sorted((GUIDE / "modules").glob("[0-9][0-9]_*/module.md")))]


def load_book(key, files):
    chapters = []
    for f in files():
        md = f.read_text().replace("<!-- pagebreak -->", "")
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


def subheads(body):
    return [(i, re.sub(r"<[^>]+>", "", h).strip()) for i, h in re.findall(r'<h3 id="([^"]+)"[^>]*>(.*?)</h3>', body, re.S)]


# ---------------------------------------------------------------- build
def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "figures").mkdir(parents=True)

    # Data book: one page per ## section; captions give each table its title and page.
    db_md = re.sub(r"^---\n.*?\n---\n", "", DATABOOK.read_text(), flags=re.S)
    db_pages, captions = [], {}
    for chunk in re.split(r"(?m)^(?=## )", db_md):
        m = re.match(r"## (D\d+)\.", chunk)
        if not m:
            continue
        fname = f"db-{m.group(1).lower()}.html"
        chunk = re.sub(r"(?m)^# .*$", "", chunk)          # part headings live in the index
        for cm in re.finditer(r"^\*\*Data Book Table (\d+(?:\([a-z]\))?)[ .(][^*]*?\.?\s*(.*?)\*\*", chunk, re.M):
            captions.setdefault(norm_id(cm.group(1)), (f"Table {cm.group(1)}. {cm.group(2)}".strip(), fname))
        db_pages.append((fname, page_title(chunk), chunk))
    for stem, tid in CSV_IDS.items():                    # property tables have no "Table N" caption
        sec = {"water-sat": "d1", "water-sh": "d2", "r134a-sat": "d3", "r134a-sh": "d4", "nh3-sat": "d6", "nh3-sh": "d7"}[tid]
        captions.setdefault(tid, (next(t for f, t, _ in db_pages if f == f"db-{sec}.html"), f"db-{sec}.html"))
    tables = load_tables(captions)

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
                    resolve(tables, a.get("t"), a.get("row", ""), a.get("col", ""), m.group(1), f"{fname} [{m.group(1)}]")
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
        other = {c["num"]: c for c in books[other_key][1]}
        for ch in chapters:
            for fname, title, md in ch["pages"]:
                i = next(k for k, (_, f) in enumerate(linear) if f == fname)
                prev = linear[i - 1] if i else None
                nxt = linear[i + 1] if i + 1 < len(linear) else None
                crumb = f'{name} · <a href="{ch["pages"][0][0]}">{html.escape(ch["title"])}</a>'
                if ch["num"] in other:
                    label = "Full treatment in the Full guide" if key == "e" else "First read in the Essentials"
                    crumb += f' <a class="xbook" href="{other[ch["num"]]["pages"][0][0]}">{label} →</a>'
                (OUT / fname).write_text(render(title, bodies[fname], book_menus(key, ch, fname), prev, nxt, crumb))
                n_pages += 1

    # Data-book pages.
    db_items = [(t, f, False, 0) for f, t, _ in db_pages]
    for k, (fname, title, md) in enumerate(db_pages):
        body = pandoc(fix_images(md, DATABOOK.parent), databook=True)
        body = re.sub(r"<p><strong>Data Book Table (\d+(?:\([a-z]\))?)",
                      lambda m: f'<p class="tcap" id="t-{norm_id(m.group(1))}"><strong>Data Book Table {m.group(1)}', body)
        prev = db_pages[k - 1][:2][::-1] if k else None          # (title, file)
        nxt = db_pages[k + 1][:2][::-1] if k + 1 < len(db_pages) else None
        secs = menu("Sections", [(t, f, f == fname, 0) for t, f, _, _ in db_items], "secs")
        (OUT / fname).write_text(render(title, body, book_menus() + secs, prev, nxt,
                                        '<a href="db-index.html">Data book</a>'))

    # Index pages.
    front = re.sub(r"^---\n.*?\n---\n", "", (ESS / "00_front.md").read_text(), flags=re.S)
    def toc(chapters):
        return "".join(f'<li><a href="{c["pages"][0][0]}">{html.escape(c["title"])}</a></li>' for c in chapters)
    idx = (f'<h1 class="booktitle">{SITE}</h1><p class="subtitle">ME 415 term-final preparation, '
           f'with the data book one click away.</p>'
           + (pandoc((GUIDE / "cover.md").read_text()) if (GUIDE / "cover.md").exists() else "") +
           f'<h2>Essentials</h2><p>The first read: each topic\'s recurring questions, the theory to understand them, '
           f'one worked example and one practice problem.</p><ul class="toc">{toc(books["e"][1])}</ul>'
           f'<h2>Full guide</h2><p>One module per topic: the full theory and every past term-final question solved. '
           f'Sections marked ★ are the first read.</p><ul class="toc">{toc(books["m"][1])}</ul>' + pandoc(front))
    (OUT / "index.html").write_text(render("Contents", idx, book_menus(), None, None, ""))
    dbtoc = "".join(f'<li><a href="{f}">{html.escape(strip_md(t))}</a></li>' for f, t, _ in db_pages)
    (OUT / "db-index.html").write_text(render("Data book", f'<h1>Data book</h1><ol class="toc plain">{dbtoc}</ol>',
                                              book_menus(), None, None, ""))

    # Assets.
    for name, p in FIGS.items():
        shutil.copy(p, OUT / "figures" / name)
    for f in ASSETS.iterdir():
        shutil.copy(f, OUT / f.name)
    (OUT / "tables.json").write_text(json.dumps(tables, separators=(",", ":")))
    (OUT / ".nojekyll").write_text("")
    check_links(tables)
    counts = ", ".join(f"{name} {sum(len(c['pages']) for c in chapters)}" for name, chapters in books.values())
    print(f"web: {n_pages} pages ({counts}), {len(db_pages)} data-book pages, {n_lookups} lookups resolved, "
          f"{len(FIGS)} figures, tables.json {(OUT / 'tables.json').stat().st_size // 1024} kB")


def check_links(tables):
    """Every local href must reach an existing file and, if it has one, an existing anchor."""
    ids = {p.name: set(re.findall(r'id="([^"]+)"', p.read_text())) for p in OUT.glob("*.html")}
    hrefs = [(f, h) for f in ids for h in re.findall(r'(?:href|src)="([^"]+)"', (OUT / f).read_text())]
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
