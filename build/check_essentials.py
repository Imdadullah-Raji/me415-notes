"""Check an Essentials chapter against its module: every number it prints must already be printed in the module
(whose numbers are verified by verify/mNN.py), and every figure link must exist.

A "number" here is any decimal (12.6, 0.207) or integer of 3+ digits (1570, 3500). Integers below 100 are skipped
(counts, floors, marks). Years and question tags ([PP 21-22 Q8, 35]) are ignored. A number that legitimately is not
in the module can be whitelisted in the chapter with an HTML comment: <!-- ok: 1.25 0.6 -->. Mini-examples (::: {.mini} divs) are contrived and not checked.

Usage: check_essentials.py [NN ...]      (default: every chapter in ../essentials/)
"""
import re
import sys
from pathlib import Path

GUIDE = Path(__file__).resolve().parents[1]
ESS = GUIDE / "essentials"
MODULES = [{"num": int(d.name[:2]), "dir": d} for d in sorted((GUIDE / "modules").glob("[0-9][0-9]_*"))]


def numbers(text):
    text = re.sub(r"\[PP [^\]]*\]", " ", text)
    text = re.sub(r"\b(19|20)\d\d(-\d\d(\d\d)?)?\b", " ", text)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text)     # figure captions and paths
    text = re.sub(r"<!--.*?-->", " ", text, flags=re.S)
    text = re.sub(r"^::: \{\.mini[^\n]*\n.*?^:::[ \t]*$", " ", text, flags=re.S | re.M)  # contrived mini-examples
    text = re.sub(r"\]\{[^}]*\}", "]", text)                                         # span attributes: {.lookup t="20" row="1500"}
    out = set()
    for m in re.finditer(r"\d+(?:[ ,]\d{3})*(?:\.\d+)?", text):
        s = m.group(0).replace(",", "").replace(" ", "")
        if "." in s or len(s) >= 3:
            out.add(s)
    return out


def norm(s):
    return s.rstrip("0").rstrip(".") if "." in s else s


def check(m):
    ch = next(ESS.glob(f"{m['num']:02d}_*.md"), None)
    if ch is None:
        return None
    text = ch.read_text()
    module = (m["dir"] / "module.md").read_text()
    have = {norm(x) for x in numbers(module)}
    ok = {norm(x) for c in re.findall(r"<!--\s*ok:(.*?)-->", text) for x in c.split()}
    missing = sorted({x for x in numbers(text) if norm(x) not in have and norm(x) not in ok}, key=lambda s: float(s))
    figs = [p for p in re.findall(r"!\[[^\]]*\]\(([^)\s]+)", text) if not (ch.parent / p).exists()]
    print(f"{ch.name}: {len(numbers(text))} numbers, {len(missing)} not in module {m['num']}, {len(figs)} missing figures")
    if missing:
        print("   not in module:", " ".join(missing))
    if figs:
        print("   missing figures:", " ".join(figs))
    return not missing and not figs


if __name__ == "__main__":
    args = sys.argv[1:]
    res = [check(m) for m in MODULES if not args or f"{m['num']:02d}" in args or str(m["num"]) in args]
    sys.exit(0 if all(r is not False for r in res) else 1)
