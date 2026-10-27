"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang, Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, Toggle } from "../kit";
import { L, t } from "../labels";
import { cn } from "@/lib/utils";

/**
 * A small spreadsheet.
 *   sheet             marks for two half-years; pick the function in column D and change the marks
 *   sheet mode=copy   a formula copied down: a relative reference (B1) slides, an absolute one ($B$1) stays
 */
const W = {
  marks: t("Experiment: a spreadsheet of marks", "Փորձ․ գնահատականների աղյուսակ", "Опыт: таблица оценок"),
  marksHint: t("Change any mark in columns B and C: the formulas in column D and the chart update by themselves. Tap a cell in D to see its formula.", "Փոխի՛ր B և C սյունակների ցանկացած գնահատական․ D սյունակի բանաձևերը և գծապատկերն ինքնուրույն թարմացվում են։ Սեղմի՛ր D սյունակի բջջին՝ նրա բանաձևը տեսնելու համար։", "Измени любую оценку в столбцах B и C: формулы в столбце D и диаграмма обновятся сами. Нажми на ячейку в D, чтобы увидеть её формулу."),
  copy: t("Experiment: copying a formula", "Փորձ․ բանաձևի պատճենում", "Опыт: копируем формулу"),
  copyHint: t("The formula in C3 was copied down to C4 and C5. Switch between B1 and $B$1 and watch what the copies refer to.", "C3 բջջի բանաձևը պատճենվել է ներքև՝ C4 և C5։ Փոխի՛ր B1-ի և $B$1-ի միջև և տե՛ս, թե ինչին են հղում պատճենները։", "Формулу из C3 скопировали вниз в C4 и C5. Переключайся между B1 и $B$1 и смотри, на что ссылаются копии."),
  subject: t("Subject", "Առարկա", "Предмет"),
  h1: t("1st half", "1-ին կիսամյակ", "1-е полугодие"),
  h2: t("2nd half", "2-րդ կիսամյակ", "2-е полугодие"),
  subjects: [t("Maths", "Մաթեմատիկա", "Математика"), t("Armenian", "Հայոց լեզու", "Армянский язык"), t("History", "Պատմություն", "История"), t("English", "Անգլերեն", "Английский")],
  rate: t("Rate", "Փոխարժեք", "Курс"),
  item: t("Item", "Ապրանք", "Товар"),
  drams: t("Drams", "Դրամ", "Драмы"),
  dollars: t("Dollars", "Դոլար", "Доллары"),
  items: [t("Book", "Գիրք", "Книга"), t("Pen", "Գրիչ", "Ручка"), t("Bag", "Պայուսակ", "Рюкзак")],
  absolute: t("Use $B$1", "Օգտագործել $B$1", "Использовать $B$1"),
  wrong: t("The copies point to the wrong cells: B2 holds a word, and B3 is a price, not the rate.", "Պատճենները հղում են սխալ բջիջների․ B2-ում բառ է, իսկ B3-ը գին է, ոչ թե փոխարժեք։", "Копии ссылаются не на те ячейки: в B2 слово, а B3 — это цена, а не курс."),
  right: t("Every copy still divides by B1: the $ signs froze both the column and the row.", "Յուրաքանչյուր պատճեն դեռ բաժանում է B1-ի․ $ նշանները սառեցրին և՛ սյունակը, և՛ տողը։", "Каждая копия по-прежнему делит на B1: знаки $ заморозили и столбец, и строку."),
};

type Fn = "AVERAGE" | "SUM" | "MAX" | "MIN";
const FN: Record<Fn, (xs: number[]) => number> = {
  AVERAGE: (xs) => xs.reduce((a, b) => a + b, 0) / xs.length,
  SUM: (xs) => xs.reduce((a, b) => a + b, 0),
  MAX: (xs) => Math.max(...xs),
  MIN: (xs) => Math.min(...xs),
};
const dec = (v: number, lang: ArtLang) => { const s = String(Math.round(v * 100) / 100); return lang === "en" ? s : s.replace(".", ","); };

function Head({ cols }: { cols: string[] }) {
  return <thead><tr><th />{cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>;
}

function Marks({ lang, body }: { lang: ArtLang; body: string }) {
  const [m, setM] = useState([[8, 9], [9, 9], [7, 9], [6, 8]]);
  const [fn, setFn] = useState<Fn>("AVERAGE");
  const [sel, setSel] = useState(0);
  const vals = m.map((r) => FN[fn](r));
  const max = fn === "SUM" ? 20 : 10;
  const set = (r: number, c: number, v: string) => { const n = Math.max(0, Math.min(10, Number(v) || 0)); setM(m.map((row, i) => (i === r ? row.map((x, j) => (j === c ? n : x)) : row))); };
  return (
    <ArtFrame kind="experiment" title={L(W.marks, lang)} body={body || L(W.marksHint, lang)}>
      <p className="sim-fx"><b>D{sel + 2}</b> <span>fx</span> <code>={fn}(B{sel + 2}:C{sel + 2})</code></p>
      <div className="sim-sheet-wrap">
        <table className="sim-sheet">
          <Head cols={["A", "B", "C", "D"]} />
          <tbody>
            <tr><th>1</th><td className="is-label">{L(W.subject, lang)}</td><td className="is-label">{L(W.h1, lang)}</td><td className="is-label">{L(W.h2, lang)}</td><td className="is-label">{fn}</td></tr>
            {m.map((row, r) => (
              <tr key={r}>
                <th>{r + 2}</th>
                <td>{L(W.subjects[r], lang)}</td>
                {row.map((v, c) => <td key={c} className="is-num"><input type="number" min={0} max={10} value={v} onChange={(e) => set(r, c, e.target.value)} aria-label={`${"BC"[c]}${r + 2}`} /></td>)}
                <td className={cn("is-num is-formula", sel === r && "is-sel")} onClick={() => setSel(r)}>{dec(vals[r], lang)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Choice value={fn} options={(Object.keys(FN) as Fn[]).map((f) => [f, f])} onChange={setFn} />
      <div className="sim-bars">
        {vals.map((v, r) => (
          <div key={r} className="sim-bars-row">
            <span className="sim-bars-label"><span>{L(W.subjects[r], lang)}</span><b>{dec(v, lang)}</b></span>
            <span className="sim-bars-track"><span style={{ width: `${(v / max) * 100}%`, background: ["#4f46e5", "#f59e0b", "#10b981", "#e11d48"][r] }} /></span>
          </div>
        ))}
      </div>
    </ArtFrame>
  );
}

function Copy({ lang, body }: { lang: ArtLang; body: string }) {
  const [rate, setRate] = useState(390);
  const [abs, setAbs] = useState(false);
  const [sel, setSel] = useState(1);
  const prices = [3900, 780, 11700];
  // column B, rows 1..5: the rate, the header word, then the three prices
  const colB: Array<number | Tr> = [rate, W.drams, ...prices];
  const cell = (row: number) => {
    const ref = abs ? 1 : row - 2; // the copy of =B3/B1 in row `row` refers to B(row-2) when relative
    const d = colB[ref - 1];
    if (typeof d !== "number") return { f: `=B${row}/${abs ? "$B$1" : `B${ref}`}`, v: "#VALUE!", bad: true };
    return { f: `=B${row}/${abs ? "$B$1" : `B${ref}`}`, v: dec(prices[row - 3] / d, lang), bad: !abs && row > 3 };
  };
  const rows = [3, 4, 5].map(cell);
  const lbl = (tr: Tr) => L(tr, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.copy, lang)} body={body || L(W.copyHint, lang)}>
      <p className="sim-fx"><b>C{sel + 3}</b> <span>fx</span> <code>{rows[sel].f}</code></p>
      <div className="sim-sheet-wrap">
        <table className="sim-sheet">
          <Head cols={["A", "B", "C"]} />
          <tbody>
            <tr><th>1</th><td>{lbl(W.rate)}</td><td className="is-num is-hot"><input type="number" min={1} value={rate} onChange={(e) => setRate(Math.max(1, Number(e.target.value) || 1))} aria-label="B1" /></td><td /></tr>
            <tr><th>2</th><td className="is-label">{lbl(W.item)}</td><td className="is-label">{lbl(W.drams)}</td><td className="is-label">{lbl(W.dollars)}</td></tr>
            {rows.map((c, i) => (
              <tr key={i}>
                <th>{i + 3}</th>
                <td>{lbl(W.items[i])}</td>
                <td className="is-num">{prices[i]}</td>
                <td className={cn("is-num is-formula", sel === i && "is-sel", c.bad && "is-bad")} onClick={() => setSel(i)}>{c.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="art-chips"><Toggle on={abs} label={L(W.absolute, lang)} onChange={setAbs} /></div>
      <p className={abs ? "sim-note is-good" : "sim-note is-bad"}>{L(abs ? W.right : W.wrong, lang)}</p>
    </ArtFrame>
  );
}

export default function Sheet({ spec, lang }: SimProps) {
  return spec.opts.mode === "copy" ? <Copy lang={lang} body={spec.body} /> : <Marks lang={lang} body={spec.body} />;
}
