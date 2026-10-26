"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { ArtLang } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { Choice, clamp, fmt, Note, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";
import { COLORS, Counter, Sum } from "../math-kit";

/**
 * Inequalities and intervals on the number line:
 *   interval sign=> a=2                         one inequality: x > 2 and its interval (2; +∞)
 *   interval mode=system s1=>= a1=-1 s2=< a2=4  two inequalities and their intersection
 *   interval mode=signs roots=-2,1,3 sign=>     the interval method: signs of (x − x₁)(x − x₂)(x − x₃)
 */
const W = {
  ineq: t("Experiment: an inequality on the number line", "Փորձ․ անհավասարություն թվային առանցքի վրա", "Опыт: неравенство на числовой прямой"),
  ineqHint: t("A filled dot belongs to the answer, an empty one does not. The shaded part is every x that makes the inequality true.", "Լցված կետը պատկանում է պատասխանին, դատարկը՝ ոչ։ Ներկված մասը բոլոր այն x-երն են, որոնց դեպքում անհավասարությունը ճիշտ է։", "Закрашенная точка входит в ответ, пустая — нет. Заштрихованная часть — все x, при которых неравенство верно."),
  system: t("Experiment: a system of inequalities", "Փորձ․ անհավասարումների համակարգ", "Опыт: система неравенств"),
  systemHint: t("Each inequality shades its own part of the line. The system's solution is where the shadings overlap.", "Յուրաքանչյուր անհավասարում ներկում է ուղղի իր մասը։ Համակարգի լուծումն այնտեղ է, որտեղ ներկումները համընկնում են։", "Каждое неравенство штрихует свою часть прямой. Решение системы — там, где штриховки перекрываются."),
  signs: t("Experiment: the interval method", "Փորձ․ միջակայքերի եղանակ", "Опыт: метод интервалов"),
  signsHint: t("The roots cut the line into intervals. On each interval the product keeps one sign, and the sign changes at every root.", "Արմատները ուղիղը բաժանում են միջակայքերի։ Յուրաքանչյուր միջակայքում արտադրյալը պահում է մեկ նշան, իսկ յուրաքանչյուր արմատում նշանը փոխվում է։", "Корни делят прямую на промежутки. На каждом промежутке произведение сохраняет знак, а в каждом корне знак меняется."),
  interval: t("Interval", "Միջակայք", "Промежуток"),
  answer: t("Answer", "Պատասխան", "Ответ"),
  empty: t("The shadings do not overlap: the system has no solution.", "Ներկումները չեն համընկնում․ համակարգը լուծում չունի։", "Штриховки не перекрываются: у системы нет решений."),
  first: t("First", "Առաջին", "Первое"),
  second: t("Second", "Երկրորդ", "Второе"),
  roots: t("Roots", "Արմատներ", "Корни"),
};

type Sign = "<" | "≤" | ">" | "≥";
const SIGNS: Sign[] = ["<", "≤", ">", "≥"];
const ASCII: Record<string, Sign> = { "<": "<", "<=": "≤", ">": ">", ">=": "≥", "≤": "≤", "≥": "≥" };
const parseSign = (s: string | undefined, d: Sign): Sign => ASCII[s ?? ""] ?? d;

const MIN = -8, MAX = 8, PAD = 18, LW = 320;
const X = (v: number) => PAD + ((clamp(v, MIN, MAX) - MIN) / (MAX - MIN)) * (LW - 2 * PAD);
const nf = (v: number, lang: ArtLang) => fmt(v, 2, lang).replace("-", "−");

type Iv = { lo: number; loIn: boolean; hi: number; hiIn: boolean };
const ray = (s: Sign, a: number): Iv => (s === "<" || s === "≤" ? { lo: -Infinity, loIn: false, hi: a, hiIn: s === "≤" } : { lo: a, loIn: s === "≥", hi: Infinity, hiIn: false });
function ivText(iv: Iv, lang: ArtLang) {
  const lo = iv.lo === -Infinity ? "−∞" : nf(iv.lo, lang), hi = iv.hi === Infinity ? "+∞" : nf(iv.hi, lang);
  if (iv.lo === iv.hi) return `{${lo}}`;
  return `${iv.loIn ? "[" : "("}${lo}; ${hi}${iv.hiIn ? "]" : ")"}`;
}
function intersect(p: Iv, q: Iv): Iv | null {
  const lo = Math.max(p.lo, q.lo), hi = Math.min(p.hi, q.hi);
  const loIn = lo === p.lo && lo === q.lo ? p.loIn && q.loIn : lo === p.lo ? p.loIn : q.loIn;
  const hiIn = hi === p.hi && hi === q.hi ? p.hiIn && q.hiIn : hi === p.hi ? p.hiIn : q.hiIn;
  if (lo > hi || (lo === hi && !(loIn && hiIn))) return null;
  return { lo, loIn, hi, hiIn };
}

function Axis({ y }: { y: number }) {
  const ticks = Array.from({ length: MAX - MIN + 1 }, (_, i) => MIN + i);
  return (
    <g>
      <line x1={6} x2={LW - 4} y1={y} y2={y} stroke={COLORS.line} strokeWidth="1.6" />
      <path d={`M${LW - 10} ${y - 4}L${LW - 3} ${y}L${LW - 10} ${y + 4}`} fill="none" stroke={COLORS.line} strokeWidth="1.6" />
      {ticks.map((v) => (
        <g key={v}>
          <line x1={X(v)} x2={X(v)} y1={y - 4} y2={y + 4} stroke={COLORS.line} />
          <text x={X(v)} y={y + 15} textAnchor="middle" className="sim-axis">{String(v).replace("-", "−")}</text>
        </g>
      ))}
    </g>
  );
}

/** A shaded interval drawn as a thick band at height y, with end dots (filled = included). */
function Band({ iv, y, color }: { iv: Iv; y: number; color: string }) {
  const x1 = iv.lo === -Infinity ? 6 : X(iv.lo), x2 = iv.hi === Infinity ? LW - 6 : X(iv.hi);
  return (
    <g>
      <rect x={x1} y={y - 5} width={Math.max(2, x2 - x1)} height={10} rx="4" fill={color} opacity="0.35" />
      {iv.lo === -Infinity ? <path d={`M14 ${y - 7}L4 ${y}L14 ${y + 7}`} fill="none" stroke={color} strokeWidth="2.5" /> : null}
      {iv.hi === Infinity ? <path d={`M${LW - 14} ${y - 7}L${LW - 4} ${y}L${LW - 14} ${y + 7}`} fill="none" stroke={color} strokeWidth="2.5" /> : null}
      {iv.lo !== -Infinity ? <circle cx={X(iv.lo)} cy={y} r="5.5" fill={iv.loIn ? color : "#fff"} stroke={color} strokeWidth="2.5" /> : null}
      {iv.hi !== Infinity && iv.hi !== iv.lo ? <circle cx={X(iv.hi)} cy={y} r="5.5" fill={iv.hiIn ? color : "#fff"} stroke={color} strokeWidth="2.5" /> : null}
    </g>
  );
}

export default function Interval({ spec, lang }: SimProps) {
  if (spec.opts.mode === "system") return <SystemView spec={spec} lang={lang} />;
  if (spec.opts.mode === "signs") return <SignsView spec={spec} lang={lang} />;
  return <IneqView spec={spec} lang={lang} />;
}

function IneqView({ spec, lang }: SimProps) {
  const [s, setS] = useState<Sign>(parseSign(spec.opts.sign, ">"));
  const [a, setA] = useState(clamp(Number(spec.opts.a ?? 2), -6, 6));
  const iv = ray(s, a);
  return (
    <ArtFrame kind="experiment" title={L(W.ineq, lang)} body={spec.body || L(W.ineqHint, lang)}>
      <Stage w={LW} h={80} label={`x ${s} ${nf(a, lang)}`}>
        <Axis y={50} />
        <Band iv={iv} y={30} color={COLORS.a} />
      </Stage>
      <Sum parts={[[`x ${s} ${nf(a, lang)}`, COLORS.a], "  ⇔  ", [`x ∈ ${ivText(iv, lang)}`, COLORS.c]]} />
      <Choice value={s} options={SIGNS.map((v) => [v, `x ${v} a`])} onChange={setS} />
      <Slider label="a" value={a} min={-6} max={6} step={0.5} lang={lang} display={nf(a, lang)} onChange={setA} />
    </ArtFrame>
  );
}

function SystemView({ spec, lang }: SimProps) {
  const [s1, setS1] = useState<Sign>(parseSign(spec.opts.s1, "≥"));
  const [a1, setA1] = useState(clamp(Number(spec.opts.a1 ?? -1), -6, 6));
  const [s2, setS2] = useState<Sign>(parseSign(spec.opts.s2, "<"));
  const [a2, setA2] = useState(clamp(Number(spec.opts.a2 ?? 4), -6, 6));
  const p = ray(s1, a1), q = ray(s2, a2), r = intersect(p, q);
  return (
    <ArtFrame kind="experiment" title={L(W.system, lang)} body={spec.body || L(W.systemHint, lang)}>
      <Stage w={LW} h={104} label={`x ${s1} ${a1}, x ${s2} ${a2}`}>
        <Axis y={78} />
        <Band iv={p} y={18} color={COLORS.a} />
        <Band iv={q} y={38} color={COLORS.b} />
        {r ? <Band iv={r} y={60} color={COLORS.c} /> : null}
      </Stage>
      <Sum parts={["{ ", [`x ${s1} ${nf(a1, lang)}`, COLORS.a], " ; ", [`x ${s2} ${nf(a2, lang)}`, COLORS.b], " }"]} />
      {r ? <Readouts items={[[L(W.answer, lang), `x ∈ ${ivText(r, lang)}`, COLORS.c]]} /> : <Note tone="bad">{L(W.empty, lang)}</Note>}
      <Choice value={s1} options={SIGNS.map((v) => [v, `${L(W.first, lang)}: ${v}`])} onChange={setS1} />
      <Slider label="a₁" value={a1} min={-6} max={6} step={0.5} lang={lang} display={nf(a1, lang)} onChange={setA1} />
      <Choice value={s2} options={SIGNS.map((v) => [v, `${L(W.second, lang)}: ${v}`])} onChange={setS2} />
      <Slider label="a₂" value={a2} min={-6} max={6} step={0.5} lang={lang} display={nf(a2, lang)} onChange={setA2} />
    </ArtFrame>
  );
}

function SignsView({ spec, lang }: SimProps) {
  const init = (spec.opts.roots ?? "-2,1,3").split(",").map(Number).filter((v) => Number.isFinite(v)).slice(0, 3);
  const [rs, setRs] = useState<number[]>(init.length >= 2 ? init.map((v) => clamp(Math.round(v), -6, 6)) : [-2, 1, 3]);
  const [s, setS] = useState<Sign>(parseSign(spec.opts.sign, ">"));
  const roots = [...new Set(rs)].sort((p, q) => p - q);
  const f = (x: number) => roots.reduce((m, r) => m * (x - r), 1);
  const cuts = [-Infinity, ...roots, Infinity];
  const parts = cuts.slice(1).map((hi, i) => {
    const lo = cuts[i];
    const mid = lo === -Infinity ? hi - 1 : hi === Infinity ? lo + 1 : (lo + hi) / 2;
    return { lo, hi, pos: f(mid) > 0 };
  });
  const want = s === ">" || s === "≥";
  const strict = s === "<" || s === ">";
  const chosen = parts.filter((p) => p.pos === want).map((p) => ({ lo: p.lo, loIn: !strict && p.lo !== -Infinity, hi: p.hi, hiIn: !strict && p.hi !== Infinity }));
  // with ≥ / ≤ a root standing alone between two rejected intervals is still a solution
  const alone = strict ? [] : roots.filter((r) => !chosen.some((c) => c.lo === r || c.hi === r)).map((r) => ({ lo: r, loIn: true, hi: r, hiIn: true }));
  const answer = [...chosen, ...alone].sort((p, q) => p.lo - q.lo);
  const fac = (r: number) => (r === 0 ? "x" : `(x ${r > 0 ? "−" : "+"} ${Math.abs(r)})`);
  const expr = `${roots.map(fac).join("")} ${s} 0`;
  return (
    <ArtFrame kind="experiment" title={L(W.signs, lang)} body={spec.body || L(W.signsHint, lang)}>
      <Stage w={LW} h={96} label={expr}>
        <Axis y={70} />
        {parts.map((p, i) => {
          const x1 = p.lo === -Infinity ? 8 : X(p.lo), x2 = p.hi === Infinity ? LW - 8 : X(p.hi);
          return (
            <g key={i}>
              <path d={`M${x1} 62Q${(x1 + x2) / 2} ${p.pos ? 22 : 44} ${x2} 62`} fill="none" stroke={p.pos ? COLORS.c : COLORS.d} strokeWidth="2" />
              <text x={(x1 + x2) / 2} y={p.pos ? 36 : 50} textAnchor="middle" className="sim-tag" fill={p.pos ? COLORS.c : COLORS.d}>{p.pos ? "+" : "−"}</text>
            </g>
          );
        })}
        {answer.map((iv, i) => <Band key={i} iv={iv} y={70} color={COLORS.a} />)}
        {roots.map((r) => <circle key={r} cx={X(r)} cy={70} r="5.5" fill={strict ? "#fff" : COLORS.a} stroke={COLORS.a} strokeWidth="2.5" />)}
      </Stage>
      <Sum parts={[[expr, COLORS.a]]} />
      <Readouts items={[[L(W.answer, lang), answer.length ? `x ∈ ${answer.map((iv) => ivText(iv, lang)).join(" ∪ ")}` : "∅", COLORS.a]]} />
      <Choice value={s} options={SIGNS.map((v) => [v, `${v} 0`])} onChange={setS} />
      <div className="art-row">
        {rs.map((r, i) => (
          <Counter key={i} label={`x${"₁₂₃"[i]}`} value={r} min={-6} max={6} onChange={(v) => setRs(rs.map((q, j) => (j === i ? v : q)))} lang={lang} color={COLORS.b} />
        ))}
      </div>
    </ArtFrame>
  );
}
