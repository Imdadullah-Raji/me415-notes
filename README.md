# ME415 Notes

Term-final preparation for **ME 415 (Refrigeration and Air Conditioning)**, as a website that reads like a book:

- **Modules**: one module per topic, in order of exam weight, with the full theory and every past term-final question solved. Sections marked ★ are the first read.
- **QB analysis**: where the marks of eleven term-final papers went, by module and by question type.
- **Data book**: the department data book, digitized. Every value read from a table is a link: click it and the table opens over the page, with the cell highlighted.

Worked numericals are broken into steps. Try each step yourself, open its **hint** (which table to read, and a link to a small example of just that step) if you are stuck, and open the step to check.

## Get started

You need **Git**, **Python 3.10 or newer** (the build uses the standard library only: no `pip install`) and
**pandoc 2.9.2.1** (the version the filters are written for, and the one CI uses). Building takes about a minute.

### Windows

1. Install [Git for Windows](https://git-scm.com/download/win) and [Python](https://www.python.org/downloads/windows/).
   In the Python installer, tick **"Add python.exe to PATH"**.
2. Install pandoc 2.9.2.1 with its Windows installer:
   [pandoc-2.9.2.1-windows-x86_64.msi](https://github.com/jgm/pandoc/releases/download/2.9.2.1/pandoc-2.9.2.1-windows-x86_64.msi).
3. Open a **new** PowerShell window (so it sees the new PATH) and check: `git --version`, `py --version`, `pandoc --version`.
4. Build and open the site:

   ```powershell
   git clone https://github.com/Imdadullah-Raji/me415-notes.git
   cd me415-notes
   py build\build_web.py
   cd web
   py -m http.server 8000
   ```

   Then open <http://localhost:8000> in a browser. Stop the server with Ctrl+C. (Opening `web\index.html` directly
   from disk does not work: the table panels are loaded from `tables.json`, which the browser only fetches over http.)

### macOS and Linux

Install Git and Python from your package manager, and pandoc 2.9.2.1 from its
[release page](https://github.com/jgm/pandoc/releases/tag/2.9.2.1). Then:

```bash
git clone https://github.com/Imdadullah-Raji/me415-notes.git
cd me415-notes
python3 build/build_web.py
cd web && python3 -m http.server 8000      # open http://localhost:8000
```

### With conda (any OS)

[`environment.yml`](environment.yml) installs Python and the right pandoc together:

```bash
conda env create -f environment.yml
conda activate me415-notes
python build/build_web.py
```

### Without installing anything

Edit a file on GitHub (the pencil icon) and open a pull request. GitHub Actions builds it and reports any wrong
lookup or broken link on the pull request. When it is merged, the site is rebuilt and published.

### When the build fails

The build stops at the first problem and names the file and the value, for example
`build_web: m02-15-….html [145 s]: table T3 row '3500' …` or `broken link figures/…`. Fix that line in the markdown and
run it again. `pandoc: command not found` (or "not recognized" on Windows) means pandoc is not on the PATH: reopen
the terminal after installing it.

## Layout

| Path | What it is |
|---|---|
| `cover.md` | The front-page text |
| `modules/NN_*/module.md`, `figures/` | Full-guide modules and their figures |
| `databook/databook.md`, `figures/` | The data book |
| `qb/qb.json` | The question-bank analysis behind the QB analysis page |
| `tables/*.csv` | The data-book tables as CSV: the lookups are checked against these and shown from them |
| `build/` | `build_web.py` (the site), `web.lua` (pandoc filter), `web/` (CSS, JS) |
| `environment.yml` | Conda environment: Python and pandoc 2.9.2.1 |

See [CONTRIBUTING.md](CONTRIBUTING.md) to fix or add something.
