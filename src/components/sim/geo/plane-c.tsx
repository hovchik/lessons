"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Note, Readouts, Slider, Stage, fmt } from "../kit";
import { L, t, UI } from "../labels";
import { add, Angle, angleAt, areaOf, centroid, circumcenter, COL, deg1, dist, Dot, Grid, Handles, Label, Line, mid, mul, Name, type P, Poly, Seg, snap, sub, usePoints } from "./kit";

const U = 20;
const BOX = { w: 320, h: 220 };
const O = { x: 160, y: 110 };
const toW = (p: P) => ({ x: Math.round((p.x - O.x) / U * 10) / 10, y: Math.round((O.y - p.y) / U * 10) / 10 });
const toS = (x: number, y: number) => ({ x: O.x + x * U, y: O.y - y * U });
const n1 = (v: number, lang: SimProps["lang"]) => fmt(v, 1, lang);

const W = {
  vec: t("Vectors", "Վեկտորներ", "Векторы"),
  vecHint: t("Drag the tips of a and b. Pick an operation to see how the result is built.", "Քաշի՛ր a և b վեկտորների ծայրերը։ Ընտրի՛ր գործողությունը՝ տեսնելու, թե ինչպես է կառուցվում արդյունքը։", "Двигай концы векторов a и b. Выбери действие и посмотри, как строится результат."),
  sum: t("a + b", "a + b", "a + b"),
  diff: t("a − b", "a − b", "a − b"),
  scalar: t("k·a", "k·a", "k·a"),
  dot: t("a · b", "a · b", "a · b"),
  sumNote: t("Triangle rule: put b at the end of a. The diagonal of the parallelogram on a and b gives the same sum.", "Եռանկյան կանոն․ b-ն տեղադրի՛ր a-ի ծայրից։ a-ի և b-ի վրա կառուցված զուգահեռագծի անկյունագիծը տալիս է նույն գումարը։", "Правило треугольника: отложи b от конца a. Диагональ параллелограмма на a и b даёт ту же сумму."),
  diffNote: t("a − b goes from the end of b to the end of a, because b + (a − b) = a.", "a − b-ն գնում է b-ի ծայրից a-ի ծայրը, քանի որ b + (a − b) = a։", "a − b идёт от конца b к концу a, ведь b + (a − b) = a."),
  scalarNote: t("k·a lies on the same line as a; for k < 0 it points the other way.", "k·a-ն գտնվում է a-ի հետ նույն ուղղի վրա․ k < 0-ի դեպքում այն ուղղված է հակառակ։", "k·a лежит на одной прямой с a; при k < 0 он направлен в другую сторону."),
  dotNote: t("a · b = x₁x₂ + y₁y₂ = |a|·|b|·cos φ. It is zero exactly when the vectors are perpendicular.", "a · b = x₁x₂ + y₁y₂ = |a|·|b|·cos φ։ Այն զրո է ճիշտ այն դեպքում, երբ վեկտորներն ուղղահայաց են։", "a · b = x₁x₂ + y₁y₂ = |a|·|b|·cos φ. Он равен нулю ровно тогда, когда векторы перпендикулярны."),
  coord: t("The coordinate plane", "Կոորդինատային հարթություն", "Координатная плоскость"),
  coordHint: t("Drag A and B to whole-number points and watch the formulas follow.", "Քաշի՛ր A-ն և B-ն ամբողջ կոորդինատներով կետեր և հետևի՛ր բանաձևերին։", "Двигай A и B по целым точкам и следи за формулами."),
  midpoint: t("midpoint and distance", "միջնակետ և հեռավորություն", "середина и расстояние"),
  line: t("line", "ուղիղ", "прямая"),
  circle: t("circle", "շրջանագիծ", "окружность"),
  slope: t("slope", "անկյունային գործակից", "угловой коэффициент"),
  vertical: t("vertical line", "ուղղաձիգ ուղիղ", "вертикальная прямая"),
  tr: t("Moving figures", "Պատկերների շարժումներ", "Движения фигур"),
  trHint: t("Pick a motion and drag the blue handles. The image (dashed) is always congruent to the figure: a motion keeps all lengths and angles.", "Ընտրի՛ր շարժումը և քաշի՛ր կապույտ կետերը։ Պատկերը (կետագծով) միշտ հավասար է սկզբնականին․ շարժումը պահպանում է բոլոր երկարություններն ու անկյունները։", "Выбери движение и двигай синие точки. Образ (пунктир) всегда равен фигуре: движение сохраняет все длины и углы."),
  axial: t("axial symmetry", "առանցքային համաչափություն", "осевая симметрия"),
  central: t("central symmetry", "կենտրոնային համաչափություն", "центральная симметрия"),
  translate: t("translation", "զուգահեռ տեղափոխություն", "параллельный перенос"),
  rotate: t("rotation", "պտույտ", "поворот"),
  angle: t("Angle", "Անկյուն", "Угол"),
  laws: t("Solving a triangle", "Եռանկյան լուծում", "Решение треугольника"),
  lawsHint: t("Drag the vertices. The law of sines, the law of cosines and the area formula hold for every triangle.", "Քաշի՛ր գագաթները։ Սինուսների թեորեմը, կոսինուսների թեորեմը և մակերեսի բանաձևը ճիշտ են ցանկացած եռանկյան համար։", "Двигай вершины. Теорема синусов, теорема косинусов и формула площади верны для любого треугольника."),
  sines: t("law of sines", "սինուսների թեորեմ", "теорема синусов"),
  cosines: t("law of cosines", "կոսինուսների թեորեմ", "теорема косинусов"),
  area: t("area", "մակերես", "площадь"),
};

/* ---------------- vectors ---------------- */

type VMode = "sum" | "diff" | "scalar" | "dot";

export function VectorsPreset({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<VMode>((["sum", "diff", "scalar", "dot"] as VMode[]).find((x) => x === spec.opts.mode) ?? "sum");
  const [k, setK] = useState(2);
  const { pts, drag } = usePoints({ a: toS(3, 2), b: toS(1, -2) }, BOX, (_, p) => add(O, snap(sub(p, O), U)));
  const A = pts.a, B = pts.b;
  const va = toW(A), vb = toW(B);
  const S = add(A, sub(B, O));
  const Kp = add(O, mul(sub(A, O), k));
  const dotv = va.x * vb.x + va.y * vb.y;
  const la = Math.hypot(va.x, va.y), lb = Math.hypot(vb.x, vb.y);
  const phi = la && lb ? angleAt(A, O, B) : 0;
  const notes: Record<VMode, ReturnType<typeof t>> = { sum: W.sumNote, diff: W.diffNote, scalar: W.scalarNote, dot: W.dotNote };
  return (
    <ArtFrame kind="experiment" title={L(W.vec, lang)} body={spec.body || L(W.vecHint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.vec, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Grid w={BOX.w} h={BOX.h} step={U} />
        <Seg a={{ x: 0, y: O.y }} b={{ x: 320, y: O.y }} color={COL.soft} w={1} />
        <Seg a={{ x: O.x, y: 0 }} b={{ x: O.x, y: 220 }} color={COL.soft} w={1} />
        {mode === "sum" ? (
          <g>
            <Seg a={A} b={S} color={COL.soft} dash="4 3" /><Seg a={B} b={S} color={COL.soft} dash="4 3" />
            <Arrow x1={A.x} y1={A.y} x2={S.x} y2={S.y} color={COL.c} width={2.5} />
            <Arrow x1={O.x} y1={O.y} x2={S.x} y2={S.y} color={COL.d} width={3.5} label="a + b" />
          </g>
        ) : null}
        {mode === "diff" ? <Arrow x1={B.x} y1={B.y} x2={A.x} y2={A.y} color={COL.d} width={3.5} label="a − b" /> : null}
        {mode === "scalar" ? <Arrow x1={O.x} y1={O.y} x2={Kp.x} y2={Kp.y} color={COL.d} width={6} label={`${fmt(k, 1, lang)}a`} /> : null}
        {mode === "dot" && la && lb ? <Angle a={A} b={O} c={B} r={20} color={COL.e} label="φ" /> : null}
        <Arrow x1={O.x} y1={O.y} x2={A.x} y2={A.y} color={COL.a} width={3} label="a" />
        {mode !== "scalar" ? <Arrow x1={O.x} y1={O.y} x2={B.x} y2={B.y} color={COL.b} width={3} label="b" /> : null}
        <Handles pts={pts} keys={mode === "scalar" ? ["a"] : ["a", "b"]} colors={{ b: COL.b }} />
      </Stage>
      <Readouts
        items={[
          ["a", `(${n1(va.x, lang)}; ${n1(va.y, lang)})`, COL.a],
          ...(mode !== "scalar" ? [["b", `(${n1(vb.x, lang)}; ${n1(vb.y, lang)})`, COL.b] as [string, string, string]] : []),
          ...(mode === "sum" ? [["a + b", `(${n1(va.x + vb.x, lang)}; ${n1(va.y + vb.y, lang)})`, COL.d] as [string, string, string]] : []),
          ...(mode === "diff" ? [["a − b", `(${n1(va.x - vb.x, lang)}; ${n1(va.y - vb.y, lang)})`, COL.d] as [string, string, string]] : []),
          ...(mode === "scalar" ? [["k·a", `(${n1(k * va.x, lang)}; ${n1(k * va.y, lang)})`, COL.d] as [string, string, string]] : []),
          ...(mode === "dot" ? [["a · b", `${n1(va.x * vb.x, lang)} + ${n1(va.y * vb.y, lang)} = ${n1(dotv, lang)}`, COL.d] as [string, string, string], ["φ", deg1(phi, lang), COL.e] as [string, string, string]] : []),
        ]}
      />
      {mode === "scalar" ? <Slider label="k" value={k} min={-2} max={2.5} step={0.5} lang={lang} onChange={setK} /> : null}
      <Note tone={mode === "dot" && Math.abs(dotv) < 1e-9 && la && lb ? "good" : undefined}>{L(notes[mode], lang)}</Note>
      <Choice value={mode} options={(["sum", "diff", "scalar", "dot"] as VMode[]).map((m) => [m, L(W[m], lang)])} onChange={setMode} />
    </ArtFrame>
  );
}

/* ---------------- coordinates ---------------- */

type CMode = "midpoint" | "line" | "circle";

export function CoordsPreset({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<CMode>((["midpoint", "line", "circle"] as CMode[]).find((x) => x === spec.opts.mode) ?? "midpoint");
  const { pts, drag } = usePoints({ A: toS(-3, -1), B: toS(4, 3) }, BOX, (_, p) => add(O, snap(sub(p, O), U)));
  const A = pts.A, B = pts.B, a = toW(A), b = toW(B);
  const M = mid(A, B), m = toW(M);
  const d = Math.hypot(b.x - a.x, b.y - a.y);
  const kx = b.x - a.x, ky = b.y - a.y;
  const sign = (v: number) => (v < 0 ? `− ${n1(-v, lang)}` : `+ ${n1(v, lang)}`);
  let lineEq = "";
  if (kx === 0) lineEq = `x = ${n1(a.x, lang)}`;
  else {
    const k = ky / kx, c = a.y - k * a.x;
    lineEq = `y = ${n1(k, lang)}x ${sign(c)}`;
  }
  const r2 = (b.x - a.x) ** 2 + (b.y - a.y) ** 2;
  const sq = (v: number, s: string) => (v === 0 ? `${s}²` : `(${s} ${v > 0 ? "−" : "+"} ${n1(Math.abs(v), lang)})²`);
  return (
    <ArtFrame kind="experiment" title={L(W.coord, lang)} body={spec.body || L(W.coordHint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.coord, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Grid w={BOX.w} h={BOX.h} step={U} />
        <Seg a={{ x: 0, y: O.y }} b={{ x: 320, y: O.y }} color={COL.line} w={1.2} />
        <Seg a={{ x: O.x, y: 0 }} b={{ x: O.x, y: 220 }} color={COL.line} w={1.2} />
        <text x="312" y={O.y - 4} className="sim-axis is-name">x</text>
        <text x={O.x + 4} y="10" className="sim-axis is-name">y</text>
        {[-7, -5, -3, -1, 1, 3, 5, 7].map((v) => <text key={v} x={O.x + v * U} y={O.y + 11} textAnchor="middle" className="sim-axis">{v}</text>)}
        {mode === "midpoint" ? (
          <g>
            <Seg a={A} b={B} color={COL.a} w={2.5} />
            <Seg a={A} b={{ x: B.x, y: A.y }} color={COL.soft} dash="4 3" /><Seg a={{ x: B.x, y: A.y }} b={B} color={COL.soft} dash="4 3" />
            <Dot p={M} color={COL.b} r={4} /><Label p={M} dx={14} color={COL.b}>M</Label>
          </g>
        ) : null}
        {mode === "line" && dist(A, B) > 0 ? <Line a={A} b={B} color={COL.a} w={2.5} /> : null}
        {mode === "circle" ? <g><circle cx={A.x} cy={A.y} r={dist(A, B)} fill="#c7d2fe" fillOpacity="0.3" stroke={COL.a} strokeWidth="2.5" /><Seg a={A} b={B} color={COL.b} dash="4 3" /></g> : null}
        <Handles pts={pts} labels={{ A: `A(${n1(a.x, lang)}; ${n1(a.y, lang)})`, B: `B(${n1(b.x, lang)}; ${n1(b.y, lang)})` }} colors={{ B: COL.b }} />
      </Stage>
      <Readouts
        items={
          mode === "midpoint"
            ? [["M", `((${n1(a.x, lang)} + ${n1(b.x, lang)}) : 2; (${n1(a.y, lang)} + ${n1(b.y, lang)}) : 2) = (${n1(m.x, lang)}; ${n1(m.y, lang)})`, COL.b], ["AB", `√(${n1(kx, lang)}² + ${n1(ky, lang)}²) = √${n1(kx * kx + ky * ky, lang)} ≈ ${fmt(d, 2, lang)}`, COL.a]]
            : mode === "line"
              ? [[L(W.line, lang), lineEq, COL.a], [L(W.slope, lang), kx === 0 ? L(W.vertical, lang) : `k = ${n1(ky, lang)} / ${n1(kx, lang)} = ${fmt(ky / kx, 2, lang)}`]]
              : [[L(W.circle, lang), `${sq(a.x, "x")} + ${sq(a.y, "y")} = ${n1(r2, lang)}`, COL.a], ["r", `√${n1(r2, lang)} ≈ ${fmt(Math.sqrt(r2), 2, lang)}`, COL.b]]
        }
      />
      <Choice value={mode} options={(["midpoint", "line", "circle"] as CMode[]).map((x) => [x, L(W[x], lang)])} onChange={setMode} />
    </ArtFrame>
  );
}

/* ---------------- motions ---------------- */

type TMode = "axial" | "central" | "translate" | "rotate";
const FLAG: P[] = [{ x: 0, y: 0 }, { x: 0, y: -60 }, { x: 40, y: -48 }, { x: 8, y: -36 }, { x: 8, y: 0 }];

export function TransformPreset({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<TMode>((["axial", "central", "translate", "rotate"] as TMode[]).find((x) => x === spec.opts.mode) ?? "axial");
  const [ang, setAng] = useState(90);
  const { pts, drag } = usePoints({ F: { x: 80, y: 170 }, M1: { x: 170, y: 20 }, M2: { x: 190, y: 200 }, C: { x: 160, y: 120 }, V: { x: 230, y: 70 } }, BOX);
  const fig = FLAG.map((p) => add(pts.F, p));
  const map = (p: P): P => {
    if (mode === "axial") {
      const a = pts.M1, d = sub(pts.M2, a), l2 = d.x * d.x + d.y * d.y || 1, k = ((p.x - a.x) * d.x + (p.y - a.y) * d.y) / l2;
      const f = add(a, mul(d, k));
      return sub(mul(f, 2), p);
    }
    if (mode === "central") return sub(mul(pts.C, 2), p);
    if (mode === "translate") return add(p, sub(pts.V, pts.F));
    const r = (-ang * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r), q = sub(p, pts.C);
    return add(pts.C, { x: q.x * c - q.y * s, y: q.x * s + q.y * c });
  };
  const img = fig.map(map);
  const keys: Record<TMode, Array<"F" | "M1" | "M2" | "C" | "V">> = { axial: ["F", "M1", "M2"], central: ["F", "C"], translate: ["F", "V"], rotate: ["F", "C"] };
  return (
    <ArtFrame kind="experiment" title={L(W.tr, lang)} body={spec.body || L(W.trHint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.tr, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        <Grid w={BOX.w} h={BOX.h} step={20} />
        {mode === "axial" ? <Line a={pts.M1} b={pts.M2} color={COL.c} w={2} /> : null}
        {mode === "translate" ? <Arrow x1={pts.F.x} y1={pts.F.y} x2={pts.V.x} y2={pts.V.y} color={COL.c} width={2.5} /> : null}
        {mode === "central" || mode === "rotate" ? <Seg a={fig[2]} b={img[2]} color={COL.soft} dash="3 3" /> : null}
        {mode === "rotate" ? <><Seg a={pts.C} b={fig[2]} color={COL.e} w={1.2} /><Seg a={pts.C} b={img[2]} color={COL.e} w={1.2} /><Angle a={fig[2]} b={pts.C} c={img[2]} r={20} color={COL.e} label={`${ang}°`} /></> : null}
        {mode === "axial" ? <Seg a={fig[2]} b={img[2]} color={COL.soft} dash="3 3" /> : null}
        <Poly pts={fig} fill="#c7d2fe" opacity={0.8} />
        <Poly pts={img} fill="#fbcfe8" opacity={0.6} dash="5 4" stroke={COL.b} />
        <Handles pts={pts} keys={keys[mode]} colors={{ M1: COL.c, M2: COL.c, C: COL.c, V: COL.c }} />
      </Stage>
      {mode === "rotate" ? <Slider label={L(W.angle, lang)} value={ang} min={-180} max={180} step={15} digits={0} unit="°" lang={lang} onChange={setAng} /> : null}
      <Choice value={mode} options={(["axial", "central", "translate", "rotate"] as TMode[]).map((x) => [x, L(W[x], lang)])} onChange={setMode} />
      <p className="sim-small-note">{L(UI.drag, lang)}</p>
    </ArtFrame>
  );
}

/* ---------------- laws of sines and cosines ---------------- */

type LMode = "sines" | "cosines" | "area";

export function LawsPreset({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<LMode>((["sines", "cosines", "area"] as LMode[]).find((x) => x === spec.opts.mode) ?? "sines");
  const { pts, drag } = usePoints({ A: { x: 50, y: 180 }, B: { x: 270, y: 180 }, C: { x: 120, y: 50 } }, BOX, (_, p) => snap(p, 5));
  const { A, B, C } = pts;
  const a = dist(B, C) / U, b = dist(A, C) / U, c = dist(A, B) / U;
  const rA = (angleAt(B, A, C) * Math.PI) / 180, rB = (angleAt(A, B, C) * Math.PI) / 180, rC = (angleAt(A, C, B) * Math.PI) / 180;
  const Oc = circumcenter(A, B, C), G = centroid(A, B, C);
  const S = areaOf([A, B, C]) / (U * U);
  return (
    <ArtFrame kind="experiment" title={L(W.laws, lang)} body={spec.body || L(W.lawsHint, lang)}>
      <Stage w={BOX.w} h={BOX.h} label={L(W.laws, lang)} svgRef={drag.ref} onPointerDown={drag.onPointerDown}>
        {mode === "sines" ? <circle cx={Oc.x} cy={Oc.y} r={dist(Oc, A)} fill="none" stroke={COL.c} strokeDasharray="4 3" /> : null}
        <Poly pts={[A, B, C]} fill="#eef2ff" />
        <Angle a={B} b={A} c={C} color={COL.a} label="α" />
        <Angle a={A} b={B} c={C} color={COL.b} label="β" />
        <Angle a={A} b={C} c={B} color={COL.c} label="γ" />
        <Label p={mid(B, C)} dx={10} dy={-6}>a</Label><Label p={mid(A, C)} dx={-10} dy={-6}>b</Label><Label p={mid(A, B)} dy={12}>c</Label>
        <Name p={A} from={G}>A</Name><Name p={B} from={G}>B</Name><Name p={C} from={G}>C</Name>
        <Handles pts={pts} />
      </Stage>
      <Readouts
        items={
          mode === "sines"
            ? [["a / sin α", fmt(a / Math.sin(rA), 2, lang), COL.a], ["b / sin β", fmt(b / Math.sin(rB), 2, lang), COL.b], ["c / sin γ", fmt(c / Math.sin(rC), 2, lang), COL.c], ["2R", fmt((2 * dist(Oc, A)) / U, 2, lang)]]
            : mode === "cosines"
              ? [["c²", fmt(c * c, 2, lang), COL.a], ["a² + b² − 2ab·cos γ", `${fmt(a * a, 1, lang)} + ${fmt(b * b, 1, lang)} − ${fmt(2 * a * b * Math.cos(rC), 1, lang)} = ${fmt(a * a + b * b - 2 * a * b * Math.cos(rC), 2, lang)}`, COL.c]]
              : [["½·a·b·sin γ", `½·${fmt(a, 1, lang)}·${fmt(b, 1, lang)}·${fmt(Math.sin(rC), 2, lang)} = ${fmt(0.5 * a * b * Math.sin(rC), 2, lang)}`, COL.a], ["S", fmt(S, 2, lang)]]
        }
      />
      <Choice value={mode} options={(["sines", "cosines", "area"] as LMode[]).map((x) => [x, L(W[x], lang)])} onChange={setMode} />
    </ArtFrame>
  );
}
