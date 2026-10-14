# Contributing

Fixes and additions are welcome: a wrong number, an unclear step, a missing hint, a past question not yet stepped.
Edit the markdown (GitHub's web editor is enough), open a pull request, and the build will check it.

## The rules

1. **The build must pass.** It fails if a looked-up value differs from the CSV, if a link or anchor is broken, or if a
   lookup span did not render. The failure message names the file and the value.
2. **Every number in the Essentials must also be printed in its module** (`build/check_essentials.py`), except inside
   mini-examples, whose numbers are made up. A legitimately new number can be whitelisted in the chapter with
   `<!-- ok: 1.25 -->`.
3. Plain, direct English; units on every number; final answers in **bold**. LaTeX maths: `$…$` inline, `$$…$$` display.

## The markup

Standard pandoc markdown, plus a few fenced divs and one span.

**A stepped problem.** Every worked numerical is a sequence of steps a student attempts one at a time:

```
**Solution.** …one line…

::: {.problem #ex-1-1}

::: {.step title="Step 5. Glass solar gain"}
::: hint
Which tables to open and what to read in them, in one or two lines. Link the matching mini-example:
[glass-solar mini-example](#mini-glass-solar).
:::
The solution of this step: the look-ups, then its rows of the ledger.
:::

:::
```

Steps follow the topic's fixed answer order (for cooling load: assumptions, geometry, U, CLTD, glass conduction, glass
solar, partitions, people, lights, equipment, outdoor air, total).

**An answer to reveal.** `::: answer` … `:::` (a practice problem's final answer), or
`::: {.answer label="Show answer"}` for a theory question's model answer.

**A mini-example.** `::: {.mini #mini-glass-solar}` … `:::`, placed in the theory section that teaches the step: one
small, self-contained example of just that step, opening with `**Mini-example: <step>.**`. Its numbers may be made up,
but compute them. In a module, prefix the id with `m-` (`#m-mini-glass-solar`): ids must be unique across the site.

**A data-book lookup.** Wrap every value read from a table in a span naming the table, the row and the column:

```
[174]{.lookup t="18a" row="June" col="N"}
[41]{.lookup t="12b" row="without suspended ceiling;2" col="15"}
```

- `t` is the table id: the number and letter of the data-book table (`9`, `12b`, `18a`), or `r134a-sh`, `nh3-sat`, … for
  the property tables.
- `row` is the row's key cells joined by `;` (never `|`, which breaks markdown tables).
- `col` is the CSV column (`tables/*.csv`) or its short form: a compass column (`N`, `E_W`, `HOR`) or an hour (`15`).
- Do not put a span inside `$…$`.

The build checks that the cell exists and equals the printed value. A plain mention like "Table 19" in running text is
linked to the whole table automatically.

**Boxes.** A blockquote whose first word is bold and one of `KEY`, `EXAMPLE`, `TRY`, `PRACTICE`, `TIP`, `TRAP`, `ASKED`,
`MOCK` becomes a coloured box: `> **TRAP: Do not multiply W/m² by a number of lamps**`.

**First read.** In a module, a `##` heading ending in ★ is marked "First read".
