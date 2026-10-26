"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { BY_SYMBOL, parseFormula } from "@/lib/sim/elements";
import { CPK } from "@/lib/sim/molecule";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { chemText } from "../chem-draw";
import { Choice, Note, Readouts, Slider, Stage, fmt } from "../kit";
import { L, t, un } from "../labels";

const W = {
  mass: t("Relative molecular mass and composition", "Հարաբերական մոլեկուլային զանգված և բաղադրություն", "Относительная молекулярная масса и состав"),
  massHint: t(
    "Mr is the sum of the relative atomic masses of all atoms in the formula. The mass fraction of an element is the share of Mr that its atoms bring: w = n·Ar / Mr.",
    "Mr-ը բանաձևի բոլոր ատոմների հարաբերական ատոմային զանգվածների գումարն է։ Տարրի զանգվածային բաժինը Mr-ի այն մասն է, որը բերում են նրա ատոմները․ w = n·Ar / Mr։",
    "Mr равна сумме относительных атомных масс всех атомов в формуле. Массовая доля элемента — это часть Mr, которую дают его атомы: w = n·Ar / Mr.",
  ),
  amount: t("Experiment: one mole", "Փորձ․ մեկ մոլ", "Опыт: один моль"),
  amountHint: t(
    "A mole is 6.02·10²³ particles. Its mass in grams equals Mr, and one mole of any gas takes 22.4 L at normal conditions. Change the amount and compare substances.",
    "Մոլը 6,02·10²³ մասնիկ է։ Նրա զանգվածը գրամներով հավասար է Mr-ին, իսկ ցանկացած գազի մեկ մոլը նորմալ պայմաններում զբաղեցնում է 22,4 լ։ Փոխի՛ր քանակը և համեմատի՛ր նյութերը։",
    "Моль — это 6,02·10²³ частиц. Его масса в граммах равна Mr, а моль любого газа при нормальных условиях занимает 22,4 л. Меняй количество и сравнивай вещества.",
  ),
  n: t("Amount n", "Քանակ n", "Количество n"),
  m: t("Mass m = n·M", "Զանգված m = n·M", "Масса m = n·M"),
  N: t("Particles N = n·Nₐ", "Մասնիկներ N = n·Nₐ", "Частиц N = n·Nₐ"),
  V: t("Volume V = n·22.4", "Ծավալ V = n·22,4", "Объём V = n·22,4"),
  M: t("Molar mass M", "Մոլային զանգված M", "Молярная масса M"),
  gas: t("Every gas balloon has the same volume for the same amount, but they weigh differently.", "Նույն քանակի դեպքում գազով բոլոր փուչիկներն ունեն նույն ծավալը, բայց տարբեր զանգված։", "При одинаковом количестве все шарики с газом одного объёма, но весят по-разному."),
  solid: t("Solids and liquids have no common molar volume: compare the heaps.", "Պինդ և հեղուկ նյութերն ընդհանուր մոլային ծավալ չունեն․ համեմատի՛ր կույտերը։", "У твёрдых веществ и жидкостей нет общего молярного объёма: сравни кучки."),
  gasK: t("gases", "գազեր", "газы"),
  solidK: t("solids and liquids", "պինդ և հեղուկ", "твёрдые и жидкие"),
};

const ar = (s: string) => (s === "Cl" ? 35.5 : Math.round(BY_SYMBOL[s].mass));
export const mr = (f: string) => Object.entries(parseFormula(f) ?? {}).reduce((a, [s, n]) => a + ar(s) * n, 0);
const tint = (s: string) => (s === "H" ? "#94a3b8" : CPK[s] ?? "#a78bfa");

const MASS_SET = ["H2O", "CO2", "NaCl", "H2SO4", "CaCO3", "Fe2O3", "CuSO4", "NH4NO3", "C6H12O6", "Ca3(PO4)2"];

export default function Mole({ spec, lang }: SimProps) {
  if (spec.opts.mode === "amount") return <Amount spec={spec} lang={lang} />;
  return <Mass spec={spec} lang={lang} />;
}

function Mass({ spec, lang }: SimProps) {
  const set = list(spec.opts.set, spec.args.length ? spec.args : MASS_SET).filter((f) => parseFormula(f));
  const [f, setF] = useState(set[0] ?? "H2O");
  const comp = Object.entries(parseFormula(f) ?? {});
  const M = mr(f);
  let x = 20;
  return (
    <ArtFrame kind="look" title={L(W.mass, lang)} body={spec.body || L(W.massHint, lang)}>
      <p className="sim-question" style={{ textAlign: "center" }}>
        Mr({chemText(f)}) = {comp.map(([s, n]) => (n > 1 ? `${n}·${fmt(ar(s), 1, lang)}` : fmt(ar(s), 1, lang))).join(" + ")} = {fmt(M, 1, lang)}
      </p>
      <Stage w={320} h={70} label={L(W.mass, lang)}>
        {comp.map(([s, n]) => {
          const w = (ar(s) * n * 280) / M;
          const x0 = x;
          x += w;
          return (
            <g key={s}>
              <rect x={x0} y={8} width={Math.max(w - 1, 0.5)} height={30} rx="4" fill={tint(s)} />
              {w > 26 ? <text x={x0 + w / 2} y={28} textAnchor="middle" style={{ fontSize: 12, fontWeight: 900 }} fill="#fff">{s}</text> : null}
              {w > 34 ? <text x={x0 + w / 2} y={56} textAnchor="middle" className="sim-small">{fmt((ar(s) * n * 100) / M, 1, lang)}%</text> : null}
            </g>
          );
        })}
      </Stage>
      <Readouts items={comp.map(([s, n]) => [`w(${s})`, `${fmt((ar(s) * n * 100) / M, 1, lang)}%`, tint(s)])} />
      <div className="art-chips">
        {set.map((n) => <button key={n} type="button" className={cn("art-chip", n === f && "is-active")} onClick={() => setF(n)}>{chemText(n)}</button>)}
      </div>
    </ArtFrame>
  );
}

const GASES = ["H2", "He", "CH4", "N2", "O2", "CO2"];
const GAS_COLOR: Record<string, string> = { H2: "#93c5fd", He: "#f9a8d4", CH4: "#86efac", N2: "#a5b4fc", O2: "#fca5a5", CO2: "#94a3b8" };
const SOLIDS = ["H2O", "NaCl", "Fe", "S", "CaCO3", "C12H22O11"];
const DENSITY: Record<string, number> = { H2O: 1, NaCl: 2.16, Fe: 7.87, S: 2.07, CaCO3: 2.71, C12H22O11: 1.59 };

function Amount({ spec, lang }: SimProps) {
  const [kind, setKind] = useState<"gas" | "solid">(spec.opts.kind === "solid" ? "solid" : "gas");
  const [n, setN] = useState(1);
  const subs = kind === "gas" ? GASES : SOLIDS;
  const [sel, setSel] = useState(kind === "gas" ? "O2" : "H2O");
  const cur = subs.includes(sel) ? sel : subs[0];
  const M = mr(cur);
  const maxM = Math.max(...subs.map(mr));
  return (
    <ArtFrame kind="experiment" title={L(W.amount, lang)} body={spec.body || L(W.amountHint, lang)}>
      <Stage w={320} h={150} label={L(W.amount, lang)}>
        {subs.map((s, i) => {
          const cx = 30 + i * 52;
          const on = s === cur;
          if (kind === "gas") {
            const r = 9 + Math.sqrt(n) * 9;
            return (
              <g key={s} opacity={on ? 1 : 0.45}>
                <line x1={cx} x2={cx} y1={92} y2={118} stroke="#94a3b8" />
                <ellipse cx={cx} cy={92 - r} rx={r * 0.85} ry={r} fill={GAS_COLOR[s]} opacity="0.75" />
                <text x={cx} y={96 - r} textAnchor="middle" style={{ fontSize: 10, fontWeight: 900 }} fill="#1e1b4b">{chemText(s)}</text>
                <text x={cx} y={134} textAnchor="middle" className="sim-small">{fmt(n * mr(s), 1, lang)} {un("g", lang)}</text>
              </g>
            );
          }
          const v = (n * mr(s)) / DENSITY[s];
          const h = Math.round((6 + Math.cbrt(v) * 9) * 10) / 10;
          return (
            <g key={s} opacity={on ? 1 : 0.45}>
              <path d={`M${cx - h * 0.9},118 Q${cx},${118 - h * 2} ${cx + h * 0.9},118 Z`} fill={s === "H2O" ? "#7dd3fc" : s === "Fe" ? "#78716c" : s === "S" ? "#facc15" : "#e2e8f0"} stroke="#94a3b8" />
              <text x={cx} y={134} textAnchor="middle" className="sim-small">{chemText(s)}</text>
              <text x={cx} y={146} textAnchor="middle" className="sim-small">{fmt(v, 0, lang)} {un("cm3", lang)}</text>
            </g>
          );
        })}
        <line x1="6" x2="314" y1="118" y2="118" stroke="#cbd5e1" />
        <rect x={6} y={6} width={(M / maxM) * 120} height={8} rx={4} fill="#a78bfa" />
        <text x={8} y={26} className="sim-small">M({chemText(cur)}) = {fmt(M, 1, lang)} {un("gmol", lang)}</text>
      </Stage>
      <Slider label={L(W.n, lang)} value={n} min={0.5} max={4} step={0.5} unit={un("mol", lang)} lang={lang} onChange={setN} />
      <Readouts
        items={[
          [L(W.M, lang), `${fmt(M, 1, lang)} ${un("gmol", lang)}`],
          [L(W.m, lang), `${fmt(n * M, 1, lang)} ${un("g", lang)}`, "#4f46e5"],
          [L(W.N, lang), `${fmt(n * 6.02, 2, lang)}·10²³`],
          ...(kind === "gas" ? [[L(W.V, lang), `${fmt(n * 22.4, 1, lang)} ${un("L", lang)}`, "#0891b2"] as [string, string, string]] : []),
        ]}
      />
      <Note>{L(kind === "gas" ? W.gas : W.solid, lang)}</Note>
      <Choice value={kind} options={[["gas", L(W.gasK, lang)], ["solid", L(W.solidK, lang)]]} onChange={setKind} />
      <div className="art-chips">
        {subs.map((s) => <button key={s} type="button" className={cn("art-chip", s === cur && "is-active")} onClick={() => setSel(s)}>{chemText(s)}</button>)}
      </div>
    </ArtFrame>
  );
}
