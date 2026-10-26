"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Bubbles } from "../chem-draw";
import { Choice, EqList, Note, Stage, clamp, useClock, useLoop } from "../kit";
import { L, t } from "../labels";

const W = {
  title: t("Experiment: how active is the metal?", "Փորձ․ որքա՞ն ակտիվ է մետաղը", "Опыт: насколько активен металл?"),
  hint: t(
    "Metals to the left of hydrogen in the activity series push hydrogen out of acids; the further left, the faster. A metal also pushes any metal to its right out of a salt solution.",
    "Ակտիվության շարքում ջրածնից ձախ գտնվող մետաղները դուրս են մղում ջրածինը թթուներից․ որքան ձախ, այնքան արագ։ Մետաղը նաև աղի լուծույթից դուրս է մղում իրենից աջ գտնվող ցանկացած մետաղ։",
    "Металлы левее водорода в ряду активности вытесняют водород из кислот; чем левее, тем быстрее. Металл также вытесняет из раствора соли любой металл, стоящий правее него.",
  ),
  water: t("Into water", "Ջրի մեջ", "В воду"),
  acid: t("Into acid", "Թթվի մեջ", "В кислоту"),
  salt: t("Into a salt", "Աղի լուծույթի մեջ", "В раствор соли"),
  drop: t("Drop it in", "Գցել", "Опустить"),
  again: t("Again", "Նորից", "Снова"),
  metal: t("Metal", "Մետաղ", "Металл"),
  solution: t("Solution", "Լուծույթ", "Раствор"),
  eq: t("Equation", "Հավասարում", "Уравнение"),
  nothing: t("Nothing happens: in the series this metal stands to the right of {x}.", "Ոչինչ չի կատարվում․ շարքում այս մետաղը գտնվում է {x}-ից աջ։", "Ничего не происходит: в ряду этот металл стоит правее {x}."),
  heated: t("Magnesium reacts with water only when it is hot.", "Մագնեզիումը ջրի հետ փոխազդում է միայն տաքացնելիս։", "Магний реагирует с водой только при нагревании."),
  violent: t("Very violent: the hydrogen catches fire.", "Շատ բուռն է․ ջրածինը բռնկվում է։", "Очень бурно: водород загорается."),
  coat: t("The plate gets coated with the less active metal pulled out of the solution.", "Թիթեղը պատվում է լուծույթից դուրս մղված ավելի պասիվ մետաղով։", "Пластинка покрывается менее активным металлом, вытесненным из раствора."),
  series: t("Activity series", "Ակտիվության շարք", "Ряд активности"),
};

const SERIES = ["K", "Ca", "Na", "Mg", "Al", "Zn", "Fe", "Ni", "Sn", "Pb", "H₂", "Cu", "Hg", "Ag", "Au"];
const LOOK: Record<string, string> = { K: "#cbd5e1", Na: "#e2e8f0", Ca: "#e7e5e4", Mg: "#d1d5db", Al: "#e5e7eb", Zn: "#9ca3af", Fe: "#6b7280", Cu: "#c2410c", Ag: "#f1f5f9" };

type Rx = { rate: number; eq: string; extra?: keyof typeof W };
const WATER: Record<string, Rx> = {
  K: { rate: 1, eq: "2K + 2H₂O → 2KOH + H₂↑", extra: "violent" },
  Na: { rate: 0.8, eq: "2Na + 2H₂O → 2NaOH + H₂↑" },
  Ca: { rate: 0.5, eq: "Ca + 2H₂O → Ca(OH)₂ + H₂↑" },
  Mg: { rate: 0.06, eq: "Mg + 2H₂O → Mg(OH)₂ + H₂↑", extra: "heated" },
  Fe: { rate: 0, eq: "—" },
  Cu: { rate: 0, eq: "—" },
};
const ACID: Record<string, Rx> = {
  Mg: { rate: 1, eq: "Mg + 2HCl → MgCl₂ + H₂↑" },
  Al: { rate: 0.6, eq: "2Al + 6HCl → 2AlCl₃ + 3H₂↑" },
  Zn: { rate: 0.45, eq: "Zn + 2HCl → ZnCl₂ + H₂↑" },
  Fe: { rate: 0.2, eq: "Fe + 2HCl → FeCl₂ + H₂↑" },
  Cu: { rate: 0, eq: "—" },
  Ag: { rate: 0, eq: "—" },
};
const SALTS: Record<string, { m: string; f: string; color: string }> = {
  ZnSO4: { m: "Zn", f: "ZnSO₄", color: "#f1f5f9" },
  FeSO4: { m: "Fe", f: "FeSO₄", color: "#bbf7d0" },
  CuSO4: { m: "Cu", f: "CuSO₄", color: "#60a5fa" },
  AgNO3: { m: "Ag", f: "AgNO₃", color: "#f1f5f9" },
};
const DISPLACE: Record<string, string> = {
  "Zn FeSO4": "Zn + FeSO₄ → ZnSO₄ + Fe",
  "Zn CuSO4": "Zn + CuSO₄ → ZnSO₄ + Cu",
  "Zn AgNO3": "Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag",
  "Fe CuSO4": "Fe + CuSO₄ → FeSO₄ + Cu",
  "Fe AgNO3": "Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag",
  "Cu AgNO3": "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag",
};
const AFTER: Record<string, string> = { Zn: "#f1f5f9", Fe: "#bbf7d0", Cu: "#7dd3fc" };

type Mode = "water" | "acid" | "salt";

function Tube({ x, color, children }: { x: number; color: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d={`M${x},40 L${x},140 A22,22 0 0 0 ${x + 44},140 L${x + 44},40`} fill="none" />
      <path d={`M${x},70 L${x},140 A22,22 0 0 0 ${x + 44},140 L${x + 44},70 Z`} fill={color} opacity="0.8" style={{ transition: "fill 1.5s ease" }} />
      {children}
      <path d={`M${x - 3},36 L${x},40 L${x},140 A22,22 0 0 0 ${x + 44},140 L${x + 44},40 L${x + 47},36`} fill="none" stroke="#64748b" strokeWidth="2.2" />
    </g>
  );
}

export default function Activity({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<Mode>((["water", "acid", "salt"] as Mode[]).find((m) => m === spec.opts.mode) ?? "acid");
  const table = mode === "water" ? WATER : ACID;
  const metals = mode === "salt" ? ["Zn", "Fe", "Cu"] : Object.keys(table);
  const [metal, setMetal] = useState("Zn");
  const [salt, setSalt] = useState("CuSO4");
  const m = metals.includes(metal) ? metal : metals[0];
  const clock = useClock({ until: 4 });
  const p = useLoop(1.6);
  const k = clamp(clock.t / 3, 0, 1);
  const inside = clock.t > 0;
  const rx = mode !== "salt" ? table[m] : null;
  const S = SALTS[salt];
  const disp = mode === "salt" ? DISPLACE[`${m} ${salt}`] : undefined;
  const reset = (f: () => void) => { f(); clock.reset(); };
  const sx = (s: string) => 16 + SERIES.indexOf(s) * 19.6;
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={320} h={200} label={L(W.title, lang)}>
        <text x={160} y={12} textAnchor="middle" className="sim-small">{L(W.series, lang)} →</text>
        {SERIES.map((s) => {
          const on = s === m || (mode === "salt" ? s === S.m : s === "H₂");
          return (
            <g key={s}>
              <rect x={sx(s) - 9} y={17} width={18} height={16} rx="4" fill={s === "H₂" ? "#fee2e2" : on ? "#c7d2fe" : "#f1f5f9"} stroke={on ? "#4f46e5" : "none"} />
              <text x={sx(s)} y={28.5} textAnchor="middle" style={{ fontSize: 7.5, fontWeight: 800 }} fill="#1e1b4b">{s}</text>
            </g>
          );
        })}
        <Tube x={138} color={mode === "salt" ? (disp && inside ? `color-mix(in srgb, ${S.color} ${Math.round((1 - k) * 100)}%, ${AFTER[m]})` : S.color) : mode === "acid" ? "#fef9c3" : "#e0f2fe"}>
          {mode === "salt" ? (
            <g>
              <rect x={152} y={inside ? 60 : -40} width={16} height={100} rx="2" fill={LOOK[m]} stroke="#475569" style={{ transition: "y 600ms ease" }} />
              {disp && inside ? <rect x={152} y={92} width={16} height={68} rx="2" fill={LOOK[S.m]} opacity={k} stroke={S.m === "Ag" ? "#94a3b8" : "none"} /> : null}
            </g>
          ) : (
            <g>
              <rect x={150} y={inside ? 146 : -30} width={20} height={10} rx="3" fill={LOOK[m]} stroke="#475569" style={{ transition: "y 600ms ease" }} />
              {inside && rx && rx.rate > 0 ? <Bubbles x={142} y={74} w={36} h={80} n={Math.round(3 + rx.rate * 14)} p={(p * (0.4 + rx.rate)) % 1} r={2 + rx.rate * 2} /> : null}
              {inside && rx?.extra === "violent" ? <path d="M160,66 q-8,-14 0,-26 q8,12 0,26 Z" fill="#c084fc" opacity={0.6 + 0.4 * Math.sin(p * 12)} /> : null}
            </g>
          )}
        </Tube>
        <text x={160} y={186} textAnchor="middle" className="sim-tag">
          {m} + {mode === "salt" ? S.f : mode === "acid" ? "HCl" : "H₂O"}
        </text>
      </Stage>
      <div className="art-row">
        <button type="button" className="art-btn is-primary" onClick={() => (inside ? clock.reset() : clock.setPlaying(true))}>{L(inside ? W.again : W.drop, lang)}</button>
      </div>
      {inside && k > 0.3 ? (
        mode === "salt" ? (
          disp ? (
            <>
              <EqList items={[[L(W.eq, lang), disp, "#4f46e5"]]} />
              <Note tone="good">{L(W.coat, lang)}</Note>
            </>
          ) : <Note>{L(W.nothing, lang).replace("{x}", S.m)}</Note>
        ) : rx && rx.rate > 0 ? (
          <>
            <EqList items={[[L(W.eq, lang), rx.eq, "#4f46e5"]]} />
            {rx.extra ? <Note>{L(W[rx.extra], lang)}</Note> : null}
          </>
        ) : <Note>{L(W.nothing, lang).replace("{x}", "H₂")}</Note>
      ) : null}
      <Choice value={mode} options={(["water", "acid", "salt"] as Mode[]).map((x) => [x, L(W[x], lang)])} onChange={(v) => reset(() => setMode(v))} />
      <div className="art-chips">
        {metals.map((x) => <button key={x} type="button" className={cn("art-chip", x === m && "is-active")} onClick={() => reset(() => setMetal(x))}>{x}</button>)}
      </div>
      {mode === "salt" ? (
        <div className="art-chips">
          {Object.keys(SALTS).map((x) => <button key={x} type="button" className={cn("art-chip", x === salt && "is-active")} onClick={() => reset(() => setSalt(x))}>{SALTS[x].f}</button>)}
        </div>
      ) : null}
    </ArtFrame>
  );
}
