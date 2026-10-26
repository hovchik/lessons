"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { Tr } from "@/lib/art/spec";
import { list } from "@/lib/art/spec";
import { boxVerts, frustumVerts, hull, ngon, PLATONIC, polyArea3, prismVerts, pyramidVerts, section, type Solid, type V } from "@/lib/sim/solids";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { EqList, Slider, Toggle, fmt } from "../kit";
import { L, t, UI } from "../labels";
import { project, rotate, useOrbit } from "../three";

const W = {
  hint: t("Turn the solid with your finger. Change its sizes and watch the formulas.", "Պտտի՛ր մարմինը մատով։ Փոխի՛ր չափերը և հետևի՛ր բանաձևերին։", "Поворачивай тело пальцем. Меняй размеры и следи за формулами."),
  net: t("Net", "Փռվածք", "Развёртка"),
  section: t("Section", "Հատույթ", "Сечение"),
  diag: t("Diagonal", "Անկյունագիծ", "Диагональ"),
  height: t("Height of the plane", "Հարթության բարձրություն", "Высота плоскости"),
  tilt: t("Tilt of the plane", "Հարթության թեքություն", "Наклон плоскости"),
  sArea: t("Section area", "Հատույթի մակերես", "Площадь сечения"),
  sides: t("Number of sides", "Կողմերի թիվը", "Число сторон"),
  euler: t("Euler: vertices − edges + faces", "Էյլեր․ գագաթներ − կողեր + նիստեր", "Эйлер: вершины − рёбра + грани"),
  V: t("Volume", "Ծավալ", "Объём"),
  S: t("Surface area", "Մակերևույթի մակերես", "Площадь поверхности"),
  Sside: t("Lateral surface", "Կողմնային մակերևույթ", "Боковая поверхность"),
};

const NAMES: Record<string, Tr> = {
  cube: t("Cube", "Խորանարդ", "Куб"),
  box: t("Rectangular box", "Ուղղանկյունանիստ", "Прямоугольный параллелепипед"),
  prism: t("Regular prism", "Կանոնավոր պրիզմա", "Правильная призма"),
  pyramid: t("Regular pyramid", "Կանոնավոր բուրգ", "Правильная пирамида"),
  frustum: t("Truncated pyramid", "Հատած բուրգ", "Усечённая пирамида"),
  cylinder: t("Cylinder", "Գլան", "Цилиндр"),
  cone: t("Cone", "Կոն", "Конус"),
  cfrustum: t("Truncated cone", "Հատած կոն", "Усечённый конус"),
  sphere: t("Sphere and ball", "Սֆերա և գունդ", "Сфера и шар"),
  tetra: t("Regular tetrahedron", "Կանոնավոր քառանիստ", "Правильный тетраэдр"),
  octa: t("Octahedron", "Ութանիստ", "Октаэдр"),
  icosa: t("Icosahedron", "Քսանանիստ", "Икосаэдр"),
  dodeca: t("Dodecahedron", "Տասներկուանիստ", "Додекаэдр"),
};

type Dims = { a: number; b: number; c: number; h: number; r: number; r2: number; n: number };
const CURVED = new Set(["cylinder", "cone", "cfrustum"]);
const SEG = 36;

function build(shape: string, d: Dims): Solid | null {
  switch (shape) {
    case "cube": return hull(boxVerts(d.a, d.a, d.a));
    case "box": return hull(boxVerts(d.a, d.b, d.c));
    case "prism": return hull(prismVerts(ngon(d.n, d.a), d.h));
    case "pyramid": return hull(pyramidVerts(ngon(d.n, d.a), d.h));
    case "frustum": return hull(frustumVerts(ngon(d.n, d.a), d.b / d.a, d.h));
    case "cylinder": return hull(prismVerts(ngon(SEG, d.r, 0, true), d.h));
    case "cone": return hull(pyramidVerts(ngon(SEG, d.r, 0, true), d.h));
    case "cfrustum": return hull(frustumVerts(ngon(SEG, d.r, 0, true), d.r2 / d.r, d.h));
    default: return PLATONIC[shape] ? hull(PLATONIC[shape]) : null;
  }
}

const f2 = (v: number, lang: SimProps["lang"]) => fmt(v, 2, lang);
const baseArea = (n: number, a: number) => (n * a * a) / (4 * Math.tan(Math.PI / n));
const apo = (n: number, a: number) => a / (2 * Math.tan(Math.PI / n));

function formulas(shape: string, d: Dims, lang: SimProps["lang"]): Array<[string, string, string?]> {
  const { a, b, c, h, r, r2, n } = d;
  const P = Math.PI;
  switch (shape) {
    case "cube": return [[L(W.V, lang), `a³ = ${f2(a ** 3, lang)}`, "#4f46e5"], [L(W.S, lang), `6a² = ${f2(6 * a * a, lang)}`], ["d", `a√3 = ${f2(a * Math.sqrt(3), lang)}`]];
    case "box": return [[L(W.V, lang), `abc = ${f2(a * b * c, lang)}`, "#4f46e5"], [L(W.S, lang), `2(ab + bc + ac) = ${f2(2 * (a * b + b * c + a * c), lang)}`], ["d", `√(a² + b² + c²) = ${f2(Math.hypot(a, b, c), lang)}`]];
    case "prism": { const B = baseArea(n, a); return [[L(W.V, lang), `S·h = ${f2(B, lang)}·${f2(h, lang)} = ${f2(B * h, lang)}`, "#4f46e5"], [L(W.Sside, lang), `n·a·h = ${f2(n * a * h, lang)}`], [L(W.S, lang), f2(n * a * h + 2 * B, lang)]]; }
    case "pyramid": { const B = baseArea(n, a), m = Math.hypot(h, apo(n, a)); return [[L(W.V, lang), `⅓·S·h = ${f2((B * h) / 3, lang)}`, "#4f46e5"], [L(W.Sside, lang), `½·P·m = ½·${f2(n * a, lang)}·${f2(m, lang)} = ${f2((n * a * m) / 2, lang)}`], [L(W.S, lang), f2((n * a * m) / 2 + B, lang)]]; }
    case "frustum": { const S1 = baseArea(n, a), S2 = baseArea(n, b); return [[L(W.V, lang), `⅓h(S₁ + S₂ + √(S₁S₂)) = ${f2((h / 3) * (S1 + S2 + Math.sqrt(S1 * S2)), lang)}`, "#4f46e5"], ["S₁, S₂", `${f2(S1, lang)}, ${f2(S2, lang)}`]]; }
    case "cylinder": return [[L(W.V, lang), `πr²h = ${f2(P * r * r * h, lang)}`, "#4f46e5"], [L(W.Sside, lang), `2πrh = ${f2(2 * P * r * h, lang)}`], [L(W.S, lang), `2πr(r + h) = ${f2(2 * P * r * (r + h), lang)}`]];
    case "cone": { const l = Math.hypot(r, h); return [[L(W.V, lang), `⅓πr²h = ${f2((P * r * r * h) / 3, lang)}`, "#4f46e5"], ["l", `√(r² + h²) = ${f2(l, lang)}`], [L(W.Sside, lang), `πrl = ${f2(P * r * l, lang)}`]]; }
    case "cfrustum": { const l = Math.hypot(r - r2, h); return [[L(W.V, lang), `⅓πh(R² + Rr + r²) = ${f2((P * h * (r * r + r * r2 + r2 * r2)) / 3, lang)}`, "#4f46e5"], [L(W.Sside, lang), `π(R + r)l = ${f2(P * (r + r2) * l, lang)}`]]; }
    case "sphere": return [[L(W.V, lang), `⁴⁄₃πR³ = ${f2((4 / 3) * P * r ** 3, lang)}`, "#4f46e5"], [L(W.S, lang), `4πR² = ${f2(4 * P * r * r, lang)}`]];
    default: return [];
  }
}

const SLIDERS: Record<string, Array<keyof Dims>> = {
  cube: ["a"], box: ["a", "b", "c"], prism: ["n", "a", "h"], pyramid: ["n", "a", "h"], frustum: ["n", "a", "b", "h"],
  cylinder: ["r", "h"], cone: ["r", "h"], cfrustum: ["r", "r2", "h"], sphere: ["r"],
};
const RANGE: Record<keyof Dims, [number, number, number]> = { a: [1, 4, 0.5], b: [0.5, 4, 0.5], c: [1, 4, 0.5], h: [1, 5, 0.5], r: [0.5, 3, 0.5], r2: [0.5, 2.5, 0.5], n: [3, 8, 1] };
const LABEL: Record<keyof Dims, string> = { a: "a", b: "b", c: "c", h: "h", r: "R", r2: "r", n: "n" };

export default function SolidWidget({ spec, lang }: SimProps) {
  const shapes = list(spec.opts.set, spec.args.length ? spec.args : ["cube"]).filter((s) => NAMES[s]);
  const [shape, setShape] = useState(shapes[0] ?? "cube");
  const [d, setD] = useState<Dims>({ a: Number(spec.opts.a ?? 2), b: Number(spec.opts.b ?? 1.5), c: Number(spec.opts.c ?? 2.5), h: Number(spec.opts.h ?? 3), r: Number(spec.opts.r ?? 1.5), r2: Number(spec.opts.r2 ?? 0.8), n: Number(spec.opts.n ?? 4) });
  const [sec, setSec] = useState(spec.opts.show === "section");
  const [net, setNet] = useState(spec.opts.show === "net");
  const [diag, setDiag] = useState(spec.opts.show === "diag");
  const [hp, setHp] = useState(0), [tilt, setTilt] = useState(0);
  const orbit = useOrbit({ yaw: 0.5, pitch: 0.35 });
  const solid = useMemo(() => build(shape, d), [shape, d]);
  const isSphere = shape === "sphere";
  const extent = isSphere ? d.r : Math.max(...(solid?.verts.map((v) => Math.hypot(v.x, v.y, v.z)) ?? [1]));
  const scale = 82 / extent;
  const cx = 160, cy = 110;
  const pr = (v: V) => project(v, orbit.rot, scale, cx, cy);
  const canNet = ["cube", "box", "prism", "pyramid", "cylinder", "cone"].includes(shape);
  const canDiag = ["cube", "box"].includes(shape);
  const platonic = !!PLATONIC[shape];

  const nrm = { x: -Math.sin((tilt * Math.PI) / 180), y: Math.cos((tilt * Math.PI) / 180), z: 0 };
  const dPlane = hp * extent;
  const cut = sec && solid ? section(solid, nrm, dPlane) : [];

  const items: ReactNode[] = [];
  if (isSphere) {
    const c = pr({ x: 0, y: 0, z: 0 });
    const R = d.r * scale;
    const ring = (y: number, rr: number) => Array.from({ length: 49 }, (_, i) => { const a = (i / 48) * 2 * Math.PI; return { p: pr({ x: rr * Math.cos(a), y, z: rr * Math.sin(a) }), z: rotate({ x: rr * Math.cos(a), y, z: rr * Math.sin(a) }, orbit.rot).z }; });
    const eq = ring(0, d.r);
    items.push(<circle key="s" cx={c.x} cy={c.y} r={R} fill="url(#sph)" stroke="#1e1b4b" strokeWidth="2" />);
    eq.slice(1).forEach((q, i) => items.push(<line key={`e${i}`} x1={eq[i].p.x} y1={eq[i].p.y} x2={q.p.x} y2={q.p.y} stroke="#1e1b4b" strokeWidth="1.4" strokeDasharray={q.z < 0 ? "3 3" : undefined} opacity={q.z < 0 ? 0.5 : 1} />));
    if (sec) {
      const y = hp * d.r, rr = Math.sqrt(Math.max(0, d.r * d.r - y * y));
      const rg = ring(y, rr);
      items.push(<polygon key="sec" points={rg.map((q) => `${q.p.x},${q.p.y}`).join(" ")} fill="#f472b6" fillOpacity="0.45" stroke="#db2777" strokeWidth="2" />);
    }
    const top = pr({ x: 0, y: d.r, z: 0 });
    items.push(<line key="rad" x1={c.x} y1={c.y} x2={top.x} y2={top.y} stroke="#e11d48" strokeWidth="2" />);
  } else if (solid) {
    const P = solid.verts.map(pr);
    const front = solid.normals.map((n) => rotate(n, orbit.rot).z > 1e-6);
    solid.faces.forEach((f, i) => {
      if (!front[i]) return;
      items.push(<polygon key={`f${i}`} points={f.map((k) => `${P[k].x.toFixed(1)},${P[k].y.toFixed(1)}`).join(" ")} fill="#c7d2fe" fillOpacity={CURVED.has(shape) ? 0.55 : 0.4} stroke="none" />);
    });
    solid.edges.forEach((e, i) => {
      const vis = e.f.some((fi) => front[fi]);
      if (e.smooth && !(front[e.f[0]] !== front[e.f[1]])) return;
      items.push(<line key={`e${i}`} x1={P[e.a].x} y1={P[e.a].y} x2={P[e.b].x} y2={P[e.b].y} stroke="#1e1b4b" strokeWidth={vis ? 2 : 1.2} strokeDasharray={vis ? undefined : "4 3"} opacity={vis ? 1 : 0.55} strokeLinecap="round" />);
    });
    if (cut.length >= 3) items.push(<polygon key="sec" points={cut.map((v) => { const q = pr(v); return `${q.x},${q.y}`; }).join(" ")} fill="#f472b6" fillOpacity="0.5" stroke="#db2777" strokeWidth="2" />);
    if (diag && canDiag) {
      const a = shape === "cube" ? d.a : d.a, b = shape === "cube" ? d.a : d.b, c = shape === "cube" ? d.a : d.c;
      const p1 = pr({ x: -a / 2, y: -c / 2, z: -b / 2 }), p2 = pr({ x: a / 2, y: c / 2, z: b / 2 });
      items.push(<line key="dg" x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#e11d48" strokeWidth="2.5" />);
    }
  }

  const read: Array<[string, string, string?]> = platonic && solid
    ? [[L(W.euler, lang), `${solid.verts.length} − ${solid.edges.length} + ${solid.faces.length} = ${solid.verts.length - solid.edges.length + solid.faces.length}`, "#4f46e5"]]
    : formulas(shape, d, lang);
  if (sec) {
    const area = isSphere ? Math.PI * Math.max(0, d.r * d.r - (hp * d.r) ** 2) : cut.length >= 3 ? polyArea3(cut) : 0;
    read.push([L(W.sArea, lang), f2(area, lang), "#db2777"]);
  }
  const dims = SLIDERS[shape] ?? [];
  return (
    <ArtFrame kind="look" title={L(NAMES[shape], lang)} body={spec.body || `${L(W.hint, lang)} ${L(UI.rotate, lang)}`}>
      {net && canNet ? <Net shape={shape} d={d} lang={lang} /> : (
        <svg viewBox="0 0 320 220" className="sim-stage" style={{ maxWidth: "29rem", cursor: "grab" }} role="img" aria-label={L(NAMES[shape], lang)} {...orbit.handlers}>
          <defs>
            <radialGradient id="sph" cx="0.35" cy="0.35" r="0.75"><stop offset="0" stopColor="#eef2ff" /><stop offset="1" stopColor="#a5b4fc" /></radialGradient>
          </defs>
          <rect width="320" height="220" fill="#fbfcff" />
          {items}
        </svg>
      )}
      <EqList items={read} />
      {dims.map((k) => (
        <Slider key={k} label={LABEL[k]} value={d[k]} min={RANGE[k][0]} max={k === "r2" ? Math.min(RANGE.r2[1], d.r - 0.5) : RANGE[k][1]} step={RANGE[k][2]} digits={k === "n" ? 0 : 1} lang={lang} onChange={(v) => setD({ ...d, [k]: v })} />
      ))}
      {sec ? (
        <>
          <Slider label={L(W.height, lang)} value={hp} min={-0.95} max={0.95} step={0.05} display={`${Math.round(((hp + 1) / 2) * 100)}%`} lang={lang} onChange={setHp} />
          {!isSphere ? <Slider label={L(W.tilt, lang)} value={tilt} min={0} max={60} step={5} digits={0} unit="°" lang={lang} onChange={setTilt} /> : null}
        </>
      ) : null}
      <div className="art-row">
        {!platonic ? <Toggle on={sec} label={L(W.section, lang)} onChange={(v) => { setSec(v); if (v) setNet(false); }} /> : null}
        {canNet ? <Toggle on={net} label={L(W.net, lang)} onChange={(v) => { setNet(v); if (v) setSec(false); }} /> : null}
        {canDiag ? <Toggle on={diag} label={L(W.diag, lang)} onChange={setDiag} /> : null}
      </div>
      {shapes.length > 1 ? (
        <div className="art-chips">
          {shapes.map((s) => <button key={s} type="button" className={cn("art-chip", s === shape && "is-active")} onClick={() => setShape(s)}>{L(NAMES[s], lang)}</button>)}
        </div>
      ) : null}
    </ArtFrame>
  );
}

/* ---------------- flat nets ---------------- */

function Net({ shape, d, lang }: { shape: string; d: Dims; lang: SimProps["lang"] }) {
  const parts: Array<{ pts: Array<[number, number]>; base?: boolean } | { circle: [number, number, number] } | { sector: [number, number, number, number] }> = [];
  if (shape === "cube" || shape === "box") {
    const a = d.a, b = shape === "cube" ? d.a : d.b, c = shape === "cube" ? d.a : d.c;
    const rect = (x: number, y: number, w: number, h: number, base = false) => parts.push({ pts: [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], base });
    rect(0, b, b, c); rect(b, b, a, c); rect(b + a, b, b, c); rect(2 * b + a, b, a, c);
    rect(b, 0, a, b, true); rect(b, b + c, a, b, true);
  } else if (shape === "prism") {
    for (let i = 0; i < d.n; i++) parts.push({ pts: [[i * d.a, 0], [(i + 1) * d.a, 0], [(i + 1) * d.a, d.h], [i * d.a, d.h]] });
    const g = ngon(d.n, d.a);
    const edge0 = [g[g.length - 1], g[0]];
    const ang = Math.atan2(edge0[1].z - edge0[0].z, edge0[1].x - edge0[0].x);
    const place = (y0: number, flip: number) => g.map((p) => {
      const q = { x: p.x - edge0[0].x, z: p.z - edge0[0].z };
      const x = q.x * Math.cos(-ang) - q.z * Math.sin(-ang), z = q.x * Math.sin(-ang) + q.z * Math.cos(-ang);
      return [x, y0 + flip * Math.abs(z)] as [number, number];
    });
    parts.push({ pts: place(0, -1), base: true }, { pts: place(d.h, 1), base: true });
  } else if (shape === "pyramid") {
    const g = ngon(d.n, d.a).map((p) => [p.x, p.z] as [number, number]);
    parts.push({ pts: g, base: true });
    const m = Math.hypot(d.h, apo(d.n, d.a));
    g.forEach((p, i) => {
      const q = g[(i + 1) % g.length];
      const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, l = Math.hypot(mx, my) || 1;
      parts.push({ pts: [p, q, [mx + (mx / l) * m, my + (my / l) * m]] });
    });
  } else if (shape === "cylinder") {
    const L0 = 2 * Math.PI * d.r;
    parts.push({ pts: [[0, 0], [L0, 0], [L0, d.h], [0, d.h]] }, { circle: [L0 / 2, -d.r, d.r] }, { circle: [L0 / 2, d.h + d.r, d.r] });
  } else if (shape === "cone") {
    const l = Math.hypot(d.r, d.h), ang = (2 * Math.PI * d.r) / l;
    parts.push({ sector: [0, 0, l, ang] }, { circle: [0, l + d.r, d.r] });
  }
  const xs: number[] = [], ys: number[] = [];
  parts.forEach((p) => {
    if ("pts" in p) p.pts.forEach(([x, y]) => { xs.push(x); ys.push(y); });
    else if ("circle" in p) { const [x, y, r] = p.circle; xs.push(x - r, x + r); ys.push(y - r, y + r); }
    else { const [x, y, r] = p.sector; xs.push(x - r, x + r); ys.push(y, y + r); }
  });
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const k = Math.min(290 / (maxX - minX || 1), 200 / (maxY - minY || 1));
  const X = (x: number) => 15 + (x - minX) * k, Y = (y: number) => 10 + (y - minY) * k;
  return (
    <svg viewBox="0 0 320 220" className="sim-stage" style={{ maxWidth: "29rem" }} role="img" aria-label={L(W.net, lang)}>
      <rect width="320" height="220" fill="#fbfcff" />
      {parts.map((p, i) => {
        if ("pts" in p) return <polygon key={i} points={p.pts.map(([x, y]) => `${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} fill={p.base ? "#fbcfe8" : "#c7d2fe"} stroke="#1e1b4b" strokeWidth="1.6" strokeLinejoin="round" />;
        if ("circle" in p) { const [x, y, r] = p.circle; return <circle key={i} cx={X(x)} cy={Y(y)} r={r * k} fill="#fbcfe8" stroke="#1e1b4b" strokeWidth="1.6" />; }
        const [x, y, r, a] = p.sector;
        const a0 = Math.PI / 2 - a / 2, a1 = Math.PI / 2 + a / 2;
        return <path key={i} d={`M${X(x)},${Y(y)} L${X(x + r * Math.cos(a0))},${Y(y + r * Math.sin(a0))} A${r * k},${r * k} 0 ${a > Math.PI ? 1 : 0} 1 ${X(x + r * Math.cos(a1))},${Y(y + r * Math.sin(a1))} Z`} fill="#c7d2fe" stroke="#1e1b4b" strokeWidth="1.6" />;
      })}
    </svg>
  );
}

