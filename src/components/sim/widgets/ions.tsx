"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Beaker, Bubbles } from "../chem-draw";
import { EqList, Note, Stage, Toggle, clamp, useClock, useLoop } from "../kit";
import { L, t } from "../labels";

const W = {
  ex: t("Experiment: ion exchange", "Փորձ․ իոնափոխանակություն", "Опыт: ионный обмен"),
  exHint: t(
    "In solution the salts, acids and bases are already split into ions. Pour the two together: a reaction happens only if some ions can leave the solution as a precipitate, a gas or water.",
    "Լուծույթում աղերը, թթուները և հիմքերն արդեն տրոհված են իոնների։ Միացրո՛ւ լուծույթները․ ռեակցիա տեղի է ունենում միայն այն դեպքում, երբ որոշ իոններ դուրս են գալիս լուծույթից նստվածքի, գազի կամ ջրի ձևով։",
    "В растворе соли, кислоты и основания уже распались на ионы. Слей растворы: реакция идёт, только если какие-то ионы уходят из раствора в осадок, газ или воду.",
  ),
  dis: t("Experiment: does the solution conduct?", "Փորձ․ հոսանք հաղորդու՞մ է լուծույթը", "Опыт: проводит ли раствор ток?"),
  disHint: t(
    "Dissolve a substance and close the circuit. The lamp lights only if the solution has free ions. Strong electrolytes break up completely, weak ones only a little, non-electrolytes not at all.",
    "Լուծի՛ր նյութը և փակի՛ր շղթան։ Լամպը վառվում է միայն այն դեպքում, երբ լուծույթում կան ազատ իոններ։ Ուժեղ էլեկտրոլիտները տրոհվում են ամբողջությամբ, թույլերը՝ մասամբ, ոչ էլեկտրոլիտները՝ ընդհանրապես չեն տրոհվում։",
    "Растворяй вещество и замыкай цепь. Лампа горит, только если в растворе есть свободные ионы. Сильные электролиты распадаются полностью, слабые немного, неэлектролиты совсем нет.",
  ),
  mix: t("Pour together", "Միացնել", "Слить"),
  again: t("Again", "Նորից", "Снова"),
  molecular: t("Molecular", "Մոլեկուլային", "Молекулярное"),
  full: t("Full ionic", "Լրիվ իոնային", "Полное ионное"),
  short: t("Short ionic", "Կրճատ իոնային", "Сокращённое ионное"),
  ppt: t("A precipitate forms: the ions leave the solution as an insoluble solid.", "Առաջանում է նստվածք․ իոնները լուծույթից դուրս են գալիս անլույծ պինդ նյութի ձևով։", "Выпадает осадок: ионы уходят из раствора в нерастворимое твёрдое вещество."),
  gas: t("A gas bubbles out of the solution.", "Լուծույթից գազ է անջատվում։", "Из раствора выделяется газ."),
  water: t("The ions join into water molecules, which hardly split up.", "Իոնները միանում են ջրի մոլեկուլների, որոնք գրեթե չեն տրոհվում։", "Ионы соединяются в молекулы воды, которые почти не распадаются."),
  none: t("No precipitate, gas or water: all the ions just swim around together. There is no reaction.", "Ոչ նստվածք, ոչ գազ, ոչ ջուր․ բոլոր իոնները պարզապես լողում են միասին։ Ռեակցիա չկա։", "Ни осадка, ни газа, ни воды: все ионы просто плавают вместе. Реакции нет."),
  spect: t("Ions that stay unchanged on both sides are spectators: they are crossed out in the short equation.", "Երկու կողմում անփոփոխ մնացող իոնները «դիտորդներ» են․ կրճատ հավասարման մեջ դրանք ջնջվում են։", "Ионы, которые не меняются, — «зрители»: в сокращённом уравнении их вычёркивают."),
  current: t("Close the circuit", "Փակել շղթան", "Замкнуть цепь"),
  strong: t("strong electrolyte", "ուժեղ էլեկտրոլիտ", "сильный электролит"),
  weak: t("weak electrolyte", "թույլ էլեկտրոլիտ", "слабый электролит"),
  non: t("non-electrolyte", "ոչ էլեկտրոլիտ", "неэлектролит"),
  type: t("Type", "Տեսակ", "Тип"),
  eq: t("Dissociation", "Դիսոցում", "Диссоциация"),
  cathode: t("cathode", "կաթոդ", "катод"),
  anode: t("anode", "անոդ", "анод"),
  sugar: t("sugar", "շաքար", "сахар"),
};

type IonDef = [label: string, color: string, n: number];
type Product = { kind: "ppt" | "gas" | "water"; f: string; color: string; n: number };
type Rx = { a: string; b: string; ia: IonDef[]; ib: IonDef[]; na: number; nb: number; gone: string[]; products: Product[]; mol: string; full: string; short: string };

const C = { Na: "#a855f7", Cl: "#84cc16", K: "#8b5cf6", NO3: "#0ea5e9", SO4: "#f59e0b", OH: "#2563eb", H: "#ef4444", Ba: "#14b8a6", Ag: "#94a3b8", Cu: "#1d4ed8", Fe: "#b45309", CO3: "#64748b", NH4: "#db2777" };

export const EXCHANGE: Record<string, Rx> = {
  barium: {
    a: "BaCl₂", b: "Na₂SO₄", ia: [["Ba²⁺", C.Ba, 1], ["Cl⁻", C.Cl, 2]], ib: [["Na⁺", C.Na, 2], ["SO₄²⁻", C.SO4, 1]], na: 2, nb: 2,
    gone: ["Ba²⁺", "SO₄²⁻"], products: [{ kind: "ppt", f: "BaSO₄", color: "#f8fafc", n: 2 }],
    mol: "BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl", full: "Ba²⁺ + 2Cl⁻ + 2Na⁺ + SO₄²⁻ → BaSO₄↓ + 2Na⁺ + 2Cl⁻", short: "Ba²⁺ + SO₄²⁻ → BaSO₄↓",
  },
  silver: {
    a: "AgNO₃", b: "NaCl", ia: [["Ag⁺", C.Ag, 1], ["NO₃⁻", C.NO3, 1]], ib: [["Na⁺", C.Na, 1], ["Cl⁻", C.Cl, 1]], na: 3, nb: 3,
    gone: ["Ag⁺", "Cl⁻"], products: [{ kind: "ppt", f: "AgCl", color: "#f1f5f9", n: 3 }],
    mol: "AgNO₃ + NaCl → AgCl↓ + NaNO₃", full: "Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl↓ + Na⁺ + NO₃⁻", short: "Ag⁺ + Cl⁻ → AgCl↓",
  },
  copper: {
    a: "CuSO₄", b: "NaOH", ia: [["Cu²⁺", C.Cu, 1], ["SO₄²⁻", C.SO4, 1]], ib: [["Na⁺", C.Na, 1], ["OH⁻", C.OH, 1]], na: 2, nb: 4,
    gone: ["Cu²⁺", "OH⁻"], products: [{ kind: "ppt", f: "Cu(OH)₂", color: "#60a5fa", n: 2 }],
    mol: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄", full: "Cu²⁺ + SO₄²⁻ + 2Na⁺ + 2OH⁻ → Cu(OH)₂↓ + 2Na⁺ + SO₄²⁻", short: "Cu²⁺ + 2OH⁻ → Cu(OH)₂↓",
  },
  iron: {
    a: "FeCl₃", b: "NaOH", ia: [["Fe³⁺", C.Fe, 1], ["Cl⁻", C.Cl, 3]], ib: [["Na⁺", C.Na, 1], ["OH⁻", C.OH, 1]], na: 1, nb: 3,
    gone: ["Fe³⁺", "OH⁻"], products: [{ kind: "ppt", f: "Fe(OH)₃", color: "#b45309", n: 1 }],
    mol: "FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl", full: "Fe³⁺ + 3Cl⁻ + 3Na⁺ + 3OH⁻ → Fe(OH)₃↓ + 3Na⁺ + 3Cl⁻", short: "Fe³⁺ + 3OH⁻ → Fe(OH)₃↓",
  },
  carbonate: {
    a: "Na₂CO₃", b: "HCl", ia: [["Na⁺", C.Na, 2], ["CO₃²⁻", C.CO3, 1]], ib: [["H⁺", C.H, 1], ["Cl⁻", C.Cl, 1]], na: 1, nb: 2,
    gone: ["CO₃²⁻", "H⁺"], products: [{ kind: "gas", f: "CO₂", color: "#e2e8f0", n: 1 }, { kind: "water", f: "H₂O", color: "#7dd3fc", n: 1 }],
    mol: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑", full: "2Na⁺ + CO₃²⁻ + 2H⁺ + 2Cl⁻ → 2Na⁺ + 2Cl⁻ + H₂O + CO₂↑", short: "CO₃²⁻ + 2H⁺ → H₂O + CO₂↑",
  },
  neutral: {
    a: "HCl", b: "NaOH", ia: [["H⁺", C.H, 1], ["Cl⁻", C.Cl, 1]], ib: [["Na⁺", C.Na, 1], ["OH⁻", C.OH, 1]], na: 3, nb: 3,
    gone: ["H⁺", "OH⁻"], products: [{ kind: "water", f: "H₂O", color: "#7dd3fc", n: 3 }],
    mol: "HCl + NaOH → NaCl + H₂O", full: "H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O", short: "H⁺ + OH⁻ → H₂O",
  },
  ammonium: {
    a: "NH₄Cl", b: "NaOH", ia: [["NH₄⁺", C.NH4, 1], ["Cl⁻", C.Cl, 1]], ib: [["Na⁺", C.Na, 1], ["OH⁻", C.OH, 1]], na: 2, nb: 2,
    gone: ["NH₄⁺", "OH⁻"], products: [{ kind: "gas", f: "NH₃", color: "#fbcfe8", n: 2 }, { kind: "water", f: "H₂O", color: "#7dd3fc", n: 2 }],
    mol: "NH₄Cl + NaOH → NaCl + NH₃↑ + H₂O", full: "NH₄⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + NH₃↑ + H₂O", short: "NH₄⁺ + OH⁻ → NH₃↑ + H₂O",
  },
  none: {
    a: "NaCl", b: "KNO₃", ia: [["Na⁺", C.Na, 1], ["Cl⁻", C.Cl, 1]], ib: [["K⁺", C.K, 1], ["NO₃⁻", C.NO3, 1]], na: 3, nb: 3,
    gone: [], products: [],
    mol: "NaCl + KNO₃ ↛", full: "Na⁺ + Cl⁻ + K⁺ + NO₃⁻ → Na⁺ + Cl⁻ + K⁺ + NO₃⁻", short: "—",
  },
};

const expand = (defs: IonDef[], units: number) => defs.flatMap(([s, c, n]) => Array.from({ length: n * units }, () => ({ s, c })));
/** Deterministic scatter inside a box. */
const spot = (i: number, n: number, x: number, y: number, w: number, h: number, p: number) => {
  const cols = Math.max(2, Math.ceil(Math.sqrt((n * w) / h)));
  const rows = Math.ceil(n / cols);
  const cx = x + ((i % cols) + 0.5) * (w / cols) + Math.sin(p * 6.283 + i * 1.7) * 3;
  const cy = y + (Math.floor(i / cols) + 0.5) * (h / rows) + Math.cos(p * 6.283 + i * 2.3) * 3;
  return [cx, cy];
};

function IonDot({ x, y, s, c, opacity = 1 }: { x: number; y: number; s: string; c: string; opacity?: number }) {
  return (
    <g opacity={opacity}>
      <circle cx={x} cy={y} r={s.length > 3 ? 11 : 9} fill={c} />
      <text x={x} y={y + 3} textAnchor="middle" style={{ fontSize: 7.5, fontWeight: 800 }} fill="#fff">{s}</text>
    </g>
  );
}

export default function Ions({ spec, lang }: SimProps) {
  if (spec.opts.mode === "dissolve") return <Dissolve spec={spec} lang={lang} />;
  return <Exchange spec={spec} lang={lang} />;
}

function Exchange({ spec, lang }: SimProps) {
  const ids = list(spec.opts.set, spec.args.length ? spec.args : Object.keys(EXCHANGE)).filter((k) => EXCHANGE[k]);
  const [id, setId] = useState(ids[0] ?? "barium");
  const R = EXCHANGE[id];
  const clock = useClock({ until: 2 });
  const p = useLoop(4);
  const k = clamp(clock.t / 1.5, 0, 1);
  const mixed = clock.t > 0;
  const A = expand(R.ia, R.na), B = expand(R.ib, R.nb);
  const all = [...A, ...B];
  const kinds = new Set(R.products.map((x) => x.kind));
  const pick = (n: string) => { setId(n); clock.reset(); };
  return (
    <ArtFrame kind="experiment" title={L(W.ex, lang)} body={spec.body || L(W.exHint, lang)}>
      <Stage w={320} h={170} label={L(W.ex, lang)}>
        {!mixed ? (
          <>
            <Beaker x={20} y={30} w={120} h={110} level={0.8} color="#e0f2fe">
              {A.map((ion, i) => { const [x, y] = spot(i, A.length, 24, 56, 112, 80, p); return <IonDot key={i} x={x} y={y} {...ion} />; })}
            </Beaker>
            <Beaker x={180} y={30} w={120} h={110} level={0.8} color="#e0f2fe">
              {B.map((ion, i) => { const [x, y] = spot(i, B.length, 184, 56, 112, 80, p); return <IonDot key={i} x={x} y={y} {...ion} />; })}
            </Beaker>
            <text x={80} y={160} textAnchor="middle" className="sim-tag">{R.a}</text>
            <text x={240} y={160} textAnchor="middle" className="sim-tag">{R.b}</text>
          </>
        ) : (
          <Beaker x={70} y={14} w={180} h={136} level={0.85} color="#e0f2fe">
            {kinds.has("gas") ? <Bubbles x={80} y={40} w={160} h={100} n={10} p={p} r={4} /> : null}
            {all.map((ion, i) => {
              const out = R.gone.includes(ion.s);
              const [x, y] = spot(i, all.length, 76, 42, 168, 92, p);
              return <IonDot key={i} x={x} y={y} {...ion} opacity={out ? 1 - k : 1} />;
            })}
            {R.products.map((pr, j) =>
              Array.from({ length: pr.n }, (_, i) => {
                if (pr.kind === "ppt") {
                  const x = 100 + i * 34 + j * 8;
                  return (
                    <g key={`${j}-${i}`} opacity={k}>
                      <rect x={x} y={136 - 14 * k} width={28} height={12} rx="4" fill={pr.color} stroke="#64748b" />
                      <text x={x + 14} y={145 - 14 * k} textAnchor="middle" style={{ fontSize: 6.5, fontWeight: 800 }} fill="#1e1b4b">{pr.f}</text>
                    </g>
                  );
                }
                const x = 100 + i * 40 + j * 20;
                const y = pr.kind === "gas" ? 120 - k * 110 - ((p * 60 + i * 20) % 30) * k : 110 - i * 6;
                return (
                  <g key={`${j}-${i}`} opacity={pr.kind === "gas" ? k * (1 - (k > 0.99 ? 0.3 : 0)) : k}>
                    <circle cx={x} cy={y} r="10" fill={pr.color} stroke="#64748b" />
                    <text x={x} y={y + 3} textAnchor="middle" style={{ fontSize: 7, fontWeight: 800 }} fill="#1e1b4b">{pr.f}</text>
                  </g>
                );
              }),
            )}
          </Beaker>
        )}
      </Stage>
      <div className="art-row">
        <button type="button" className="art-btn is-primary" onClick={() => (mixed ? clock.reset() : clock.setPlaying(true))}>
          {L(mixed ? W.again : W.mix, lang)}
        </button>
      </div>
      {mixed && k >= 1 ? (
        <>
          <EqList items={[[L(W.molecular, lang), R.mol], [L(W.full, lang), R.full], [L(W.short, lang), R.short, "#4f46e5"]]} />
          <Note tone={R.products.length ? "good" : undefined}>
            {R.products.length ? `${L(kinds.has("ppt") ? W.ppt : kinds.has("gas") ? W.gas : W.water, lang)} ${L(W.spect, lang)}` : L(W.none, lang)}
          </Note>
        </>
      ) : null}
      {ids.length > 1 ? (
        <div className="art-chips">
          {ids.map((n) => <button key={n} type="button" className={cn("art-chip", n === id && "is-active")} onClick={() => pick(n)}>{EXCHANGE[n].a} + {EXCHANGE[n].b}</button>)}
        </div>
      ) : null}
    </ArtFrame>
  );
}

type Sol = { f: string; type: "strong" | "weak" | "non"; ions: Array<[string, string]>; eq: string; color?: string };
export const SOLUTES: Record<string, Sol> = {
  NaCl: { f: "NaCl", type: "strong", ions: [["Na⁺", C.Na], ["Cl⁻", C.Cl]], eq: "NaCl → Na⁺ + Cl⁻" },
  HCl: { f: "HCl", type: "strong", ions: [["H⁺", C.H], ["Cl⁻", C.Cl]], eq: "HCl → H⁺ + Cl⁻" },
  NaOH: { f: "NaOH", type: "strong", ions: [["Na⁺", C.Na], ["OH⁻", C.OH]], eq: "NaOH → Na⁺ + OH⁻" },
  CuSO4: { f: "CuSO₄", type: "strong", ions: [["Cu²⁺", C.Cu], ["SO₄²⁻", C.SO4]], eq: "CuSO₄ → Cu²⁺ + SO₄²⁻", color: "#93c5fd" },
  CH3COOH: { f: "CH₃COOH", type: "weak", ions: [["H⁺", C.H], ["Ac⁻", "#16a34a"]], eq: "CH₃COOH ⇄ CH₃COO⁻ + H⁺" },
  sugar: { f: "C₁₂H₂₂O₁₁", type: "non", ions: [], eq: "—" },
};

function Dissolve({ spec, lang }: SimProps) {
  const ids = list(spec.opts.set, Object.keys(SOLUTES)).filter((k) => SOLUTES[k]);
  const [id, setId] = useState(ids[0] ?? "NaCl");
  const [on, setOn] = useState(false);
  const p = useLoop(4);
  const clock = useClock({ until: 6 });
  const S = SOLUTES[id];
  const units = 8;
  const split = S.type === "strong" ? units : S.type === "weak" ? 1 : 0;
  const drift = on ? clamp(clock.t / 6, 0, 1) : 0;
  const parts: Array<{ s: string; c: string; q: number }> = [];
  for (let i = 0; i < units; i++) {
    if (i < split) S.ions.forEach(([s, c]) => parts.push({ s, c, q: s.includes("⁺") ? 1 : -1 }));
    else parts.push({ s: S.type === "non" ? L(W.sugar, lang) : "AcH", c: "#94a3b8", q: 0 });
  }
  const glow = on ? split / units : 0;
  const toggle = (v: boolean) => { setOn(v); if (v) { clock.reset(); clock.setPlaying(true); } else clock.reset(); };
  return (
    <ArtFrame kind="experiment" title={L(W.dis, lang)} body={spec.body || L(W.disHint, lang)}>
      <Stage w={320} h={180} label={L(W.dis, lang)}>
        <path d="M86,40 L86,14 L148,14 M172,14 L234,14 L234,40" fill="none" stroke="#334155" strokeWidth="2" />
        <circle cx={160} cy={14} r={11} fill={glow > 0 ? `rgba(250,204,21,${0.25 + glow * 0.75})` : "#f1f5f9"} stroke="#334155" strokeWidth="2" />
        {glow > 0 ? <circle cx={160} cy={14} r={11 + glow * 10} fill="#fde047" opacity={0.35} /> : null}
        <Beaker x={60} y={40} w={200} h={130} level={0.82} color={S.color ?? "#e0f2fe"}>
          {parts.map((pt, i) => {
            const [x0, y] = spot(i, parts.length, 100, 70, 120, 92, p);
            const x = pt.q > 0 ? x0 + (96 - x0) * drift * 0.45 : pt.q < 0 ? x0 + (224 - x0) * drift * 0.45 : x0;
            return <IonDot key={i} x={x} y={y} s={pt.s} c={pt.c} />;
          })}
        </Beaker>
        <rect x={82} y={40} width={8} height={110} fill="#475569" />
        <rect x={230} y={40} width={8} height={110} fill="#475569" />
        <text x={86} y={36} textAnchor="middle" className="sim-small">− {L(W.cathode, lang)}</text>
        <text x={234} y={36} textAnchor="middle" className="sim-small">+ {L(W.anode, lang)}</text>
      </Stage>
      <Toggle on={on} label={L(W.current, lang)} onChange={toggle} />
      <EqList items={[[L(W.type, lang), L(W[S.type], lang), S.type === "strong" ? "#16a34a" : S.type === "weak" ? "#d97706" : "#64748b"], [L(W.eq, lang), S.eq]]} />
      <div className="art-chips">
        {ids.map((n) => <button key={n} type="button" className={cn("art-chip", n === id && "is-active")} onClick={() => { setId(n); toggle(on); }}>{n === "sugar" ? L(W.sugar, lang) : SOLUTES[n].f}</button>)}
      </div>
    </ArtFrame>
  );
}
