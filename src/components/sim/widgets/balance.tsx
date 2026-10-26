"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { parseFormula } from "@/lib/sim/elements";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Note } from "../kit";
import { L, t, UI } from "../labels";
import { CPK } from "@/lib/sim/molecule";

const W = {
  title: t("Balance the equation", "Հավասարեցրո՛ւ հավասարումը", "Уравняй уравнение"),
  hint: t("Change the coefficients in front of the formulas until every kind of atom is the same on both sides. Atoms are not created or destroyed: this is the law of conservation of mass.", "Փոխի՛ր բանաձևերի առջևի գործակիցները, մինչև ամեն տեսակի ատոմ երկու կողմում հավասար լինի։ Ատոմները չեն ստեղծվում և չեն անհետանում․ սա զանգվածի պահպանման օրենքն է։", "Меняй коэффициенты перед формулами, пока атомов каждого вида не станет поровну с обеих сторон. Атомы не появляются и не исчезают: это закон сохранения массы."),
  left: t("left", "ձախում", "слева"),
  right: t("right", "աջում", "справа"),
  simplify: t("Balanced, but all coefficients can be divided by a common number. Use the smallest ones.", "Հավասարեցված է, բայց բոլոր գործակիցները կարելի է բաժանել ընդհանուր թվի։ Վերցրո՛ւ ամենափոքրերը։", "Уравнено, но все коэффициенты можно сократить. Возьми наименьшие."),
  show: t("Show the answer", "Ցույց տալ պատասխանը", "Показать ответ"),
};

type R = { l: string[]; r: string[]; k: number[] };

export const REACTIONS: Record<string, R> = {
  water: { l: ["H2", "O2"], r: ["H2O"], k: [2, 1, 2] },
  methane: { l: ["CH4", "O2"], r: ["CO2", "H2O"], k: [1, 2, 1, 2] },
  propane: { l: ["C3H8", "O2"], r: ["CO2", "H2O"], k: [1, 5, 3, 4] },
  ethane: { l: ["C2H6", "O2"], r: ["CO2", "H2O"], k: [2, 7, 4, 6] },
  ethanol: { l: ["C2H5OH", "O2"], r: ["CO2", "H2O"], k: [1, 3, 2, 3] },
  magnetite: { l: ["Fe", "O2"], r: ["Fe3O4"], k: [3, 2, 1] },
  rust: { l: ["Fe", "O2"], r: ["Fe2O3"], k: [4, 3, 2] },
  alumina: { l: ["Al", "O2"], r: ["Al2O3"], k: [4, 3, 2] },
  phosphorus: { l: ["P", "O2"], r: ["P2O5"], k: [4, 5, 2] },
  sulfur: { l: ["SO2", "O2"], r: ["SO3"], k: [2, 1, 2] },
  sodium: { l: ["Na", "H2O"], r: ["NaOH", "H2"], k: [2, 2, 2, 1] },
  magnesium: { l: ["Mg", "HCl"], r: ["MgCl2", "H2"], k: [1, 2, 1, 1] },
  zinc: { l: ["Zn", "HCl"], r: ["ZnCl2", "H2"], k: [1, 2, 1, 1] },
  aluminium: { l: ["Al", "HCl"], r: ["AlCl3", "H2"], k: [2, 6, 2, 3] },
  limestone: { l: ["CaCO3"], r: ["CaO", "CO2"], k: [1, 1, 1] },
  peroxide: { l: ["H2O2"], r: ["H2O", "O2"], k: [2, 2, 1] },
  chlorate: { l: ["KClO3"], r: ["KCl", "O2"], k: [2, 2, 3] },
  ammonia: { l: ["N2", "H2"], r: ["NH3"], k: [1, 3, 2] },
  neutral: { l: ["NaOH", "H2SO4"], r: ["Na2SO4", "H2O"], k: [2, 1, 1, 2] },
  silver: { l: ["AgNO3", "NaCl"], r: ["AgCl", "NaNO3"], k: [1, 1, 1, 1] },
  copper: { l: ["CuO", "H2"], r: ["Cu", "H2O"], k: [1, 1, 1, 1] },
  blast: { l: ["Fe2O3", "CO"], r: ["Fe", "CO2"], k: [1, 3, 2, 3] },
  thermite: { l: ["Al", "Fe2O3"], r: ["Al2O3", "Fe"], k: [2, 1, 1, 2] },
  photosynthesis: { l: ["CO2", "H2O"], r: ["C6H12O6", "O2"], k: [6, 6, 1, 6] },
  hydroxide: { l: ["CuSO4", "NaOH"], r: ["Cu(OH)2", "Na2SO4"], k: [1, 2, 1, 1] },
};

const sub = (f: string) => f.replace(/\d/g, (d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]);
const barColor = (e: string) => (e === "H" ? "#94a3b8" : CPK[e] ?? "#94a3b8");
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

export default function Balance({ spec, lang }: SimProps) {
  const ids = list(spec.opts.set, spec.args.length ? spec.args : ["water", "methane", "rust", "sodium"]).filter((k) => REACTIONS[k]);
  const [id, setId] = useState(ids[0] ?? "water");
  const R = REACTIONS[id];
  const all = [...R.l, ...R.r];
  const [k, setK] = useState<number[]>(all.map(() => 1));
  const count = (side: string[], off: number) => {
    const out: Record<string, number> = {};
    side.forEach((f, i) => { const p = parseFormula(f) ?? {}; for (const [el, n] of Object.entries(p)) out[el] = (out[el] ?? 0) + n * k[off + i]; });
    return out;
  };
  const left = count(R.l, 0), right = count(R.r, R.l.length);
  const els = Array.from(new Set([...Object.keys(left), ...Object.keys(right)]));
  const ok = els.every((e) => left[e] === right[e]);
  const g = k.reduce((a, b) => gcd(a, b));
  const pick = (n: string) => { setId(n); setK([...REACTIONS[n].l, ...REACTIONS[n].r].map(() => 1)); };
  const max = Math.max(...els.map((e) => Math.max(left[e] ?? 0, right[e] ?? 0)), 1);
  const species = (f: string, i: number) => (
    <span className="sim-sp" key={i}>
      <span className="sim-counter">
        <button type="button" aria-label="−" onClick={() => setK(k.map((v, j) => (j === i ? Math.max(1, v - 1) : v)))}><Minus className="size-4" /></button>
        <b>{k[i]}</b>
        <button type="button" aria-label="+" onClick={() => setK(k.map((v, j) => (j === i ? Math.min(12, v + 1) : v)))}><Plus className="size-4" /></button>
      </span>
      <span>{k[i] > 1 ? k[i] : ""}{sub(f)}</span>
    </span>
  );
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-eq">
        {R.l.map((f, i) => <span key={`l${i}`} style={{ display: "contents" }}>{i ? <span>+</span> : null}{species(f, i)}</span>)}
        <span>→</span>
        {R.r.map((f, i) => <span key={`r${i}`} style={{ display: "contents" }}>{i ? <span>+</span> : null}{species(f, R.l.length + i)}</span>)}
      </div>
      <div className="sim-bars">
        {els.map((e) => (
          <div key={e} className="sim-bal-row">
            <span className="sim-bar is-left"><i style={{ width: `${((left[e] ?? 0) / max) * 100}%`, background: barColor(e) }} /></span>
            <span className={cn(left[e] === right[e] ? "is-ok" : "is-off")}>{left[e] ?? 0} · <b>{e}</b> · {right[e] ?? 0}</span>
            <span className="sim-bar"><i style={{ width: `${((right[e] ?? 0) / max) * 100}%`, background: barColor(e) }} /></span>
          </div>
        ))}
      </div>
      {ok ? <Note tone="good">{g > 1 ? L(W.simplify, lang) : L(UI.balanced, lang)}</Note> : null}
      <div className="art-row">
        <button type="button" className="art-btn" onClick={() => setK(R.k)}>{L(W.show, lang)}</button>
      </div>
      {ids.length > 1 ? (
        <div className="art-chips">
          {ids.map((n) => <button key={n} type="button" className={cn("art-chip", n === id && "is-active")} onClick={() => pick(n)}>{REACTIONS[n].l.map(sub).join(" + ")} →</button>)}
        </div>
      ) : null}
    </ArtFrame>
  );
}
