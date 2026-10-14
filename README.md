# ME415 Notes

Term-final preparation for **ME 415 (Refrigeration and Air Conditioning)**, as a website that reads like a book:

- **Essentials**: the first read. Each topic's recurring questions, the theory to understand them, one worked example and one practice problem.
- **Full guide**: one module per topic, with the full theory and every past term-final question solved. Sections marked ★ are the first read.
- **Data book**: the department data book, digitized. Every value read from a table is a link: click it and the table opens over the page, with the cell highlighted.

Worked numericals are broken into steps. Try each step yourself, open its **hint** (which table to read, and a link to a small example of just that step) if you are stuck, and open the step to check.

## Build it locally

You need Python 3 (standard library only) and [pandoc 2.9.2.1](https://github.com/jgm/pandoc/releases/tag/2.9.2.1).

```bash
python3 build/check_essentials.py      # every number in the Essentials must be printed in its module
python3 build/build_web.py             # -> web/ ; fails on a wrong lookup or a broken link
cd web && python3 -m http.server       # open http://localhost:8000
```

The site is rebuilt and published by GitHub Actions on every push to `main`; pull requests are built and checked.

## Layout

| Path | What it is |
|---|---|
| `essentials/NN_*.md` | Essentials chapters (`00_front.md` is the front page text) |
| `modules/NN_*/module.md`, `figures/` | Full-guide modules and their figures |
| `databook/databook.md`, `figures/` | The data book |
| `tables/*.csv` | The data-book tables as CSV: the lookups are checked against these and shown from them |
| `build/` | `build_web.py` (the site), `web.lua` (pandoc filter), `web/` (CSS, JS), `check_essentials.py` |

See [CONTRIBUTING.md](CONTRIBUTING.md) to fix or add something.
