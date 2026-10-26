"use client";

import { useMemo, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { cn } from "@/lib/utils";
import type { Tr } from "@/lib/art/spec";
import type { SimProps } from "../sim-block";
import { EqList, Toggle, useLoop } from "../kit";
import { L, t, UI } from "../labels";
import { project, useOrbit, type V3 } from "../three";

const W = {
  title: t("Crystal lattices", "Բյուրեղային ցանցեր", "Кристаллические решётки"),
  hint: t(
    "Turn the crystal with your finger. What sits at the nodes of the lattice and how strongly it is held decides whether the substance is hard, melts easily or conducts electricity.",
    "Պտտի՛ր բյուրեղը մատով։ Թե ինչ է գտնվում ցանցի հանգույցներում և որքան ամուր է այն պահվում, որոշում է՝ նյութը կարծր է, հեշտ է հալվում, թե հոսանք է հաղորդում։",
    "Поверни кристалл пальцем. То, что находится в узлах решётки, и то, как прочно оно удерживается, решает, твёрдое ли вещество, легко ли плавится и проводит ли ток.",
  ),
  type: t("Lattice", "Ցանց", "Решётка"),
  nodes: t("At the nodes", "Հանգույցներում", "В узлах"),
  props: t("Properties", "Հատկություններ", "Свойства"),
  cell: t("Unit cell", "Տարրական բջիջ", "Элементарная ячейка"),
};

type Atom = V3 & { c: string; r: number; label?: string };
type Crystal = { name: Tr; type: Tr; nodes: Tr; props: Tr; atoms: Atom[]; bonds: Array<[number, number, boolean?]>; electrons?: boolean };

const NA = "#a855f7", CL = "#22c55e", C_ = "#334155", CU = "#f59e0b", O = "#ef4444";

function nacl(): Pick<Crystal, "atoms" | "bonds"> {
  const atoms: Atom[] = [];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) for (let k = 0; k < 3; k++) {
    const na = (i + j + k) % 2 === 0;
    atoms.push({ x: i - 1, y: j - 1, z: k - 1, c: na ? NA : CL, r: na ? 0.2 : 0.3, label: na ? "Na⁺" : "Cl⁻" });
  }
  return { atoms, bonds: pairs(atoms, 1) };
}

function diamond(): Pick<Crystal, "atoms" | "bonds"> {
  const pts: V3[] = [];
  for (let i = 0; i <= 2; i++) for (let j = 0; j <= 2; j++) for (let k = 0; k <= 2; k++) if ((i + j + k) % 2 === 0) pts.push({ x: i, y: j, z: k });
  for (const [a, b, c] of [[0.5, 0.5, 0.5], [0.5, 1.5, 1.5], [1.5, 0.5, 1.5], [1.5, 1.5, 0.5]]) pts.push({ x: a, y: b, z: c });
  const all = pts.map((p) => ({ x: p.x - 1, y: p.y - 1, z: p.z - 1, c: C_, r: 0.14 }));
  const linked = new Set(pairs(all, Math.sqrt(3) / 2).flat());
  const atoms = all.filter((_, i) => linked.has(i));
  return { atoms, bonds: pairs(atoms, Math.sqrt(3) / 2) };
}

function graphite(): Pick<Crystal, "atoms" | "bonds"> {
  const atoms: Atom[] = [];
  const a = 0.42;
  for (let layer = 0; layer < 3; layer++) {
    const shift = layer % 2 ? a : 0;
    for (let q = -2; q <= 2; q++) for (let r = -2; r <= 2; r++) {
      for (const s of [0, 1]) {
        const x = (q + r / 2) * a * Math.sqrt(3) + (s ? 0 : 0) + shift * 0.866;
        const z = r * a * 1.5 + (s ? a : 0) + shift * 0.5;
        if (Math.hypot(x, z) > 1.35) continue;
        atoms.push({ x, y: (layer - 1) * 0.9, z, c: C_, r: 0.09 });
      }
    }
  }
  const bonds = pairs(atoms, a).filter(([i, j]) => atoms[i].y === atoms[j].y);
  return { atoms, bonds };
}

function fcc(c: string, r: number, label?: string): Atom[] {
  const atoms: Atom[] = [];
  for (let i = 0; i <= 2; i++) for (let j = 0; j <= 2; j++) for (let k = 0; k <= 2; k++) if ((i + j + k) % 2 === 0) atoms.push({ x: i - 1, y: j - 1, z: k - 1, c, r, label });
  return atoms;
}

function dryIce(): Pick<Crystal, "atoms" | "bonds"> {
  const atoms: Atom[] = [];
  const bonds: Array<[number, number, boolean?]> = [];
  const dirs: V3[] = [{ x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: -1 }];
  fcc(C_, 0.1).forEach((s, n) => {
    const d = dirs[n % 4];
    const k = 0.2 / Math.sqrt(3);
    const c = atoms.push({ ...s }) - 1;
    const o1 = atoms.push({ x: s.x + d.x * k, y: s.y + d.y * k, z: s.z + d.z * k, c: O, r: 0.1 }) - 1;
    const o2 = atoms.push({ x: s.x - d.x * k, y: s.y - d.y * k, z: s.z - d.z * k, c: O, r: 0.1 }) - 1;
    bonds.push([c, o1], [c, o2]);
  });
  return { atoms, bonds };
}

function pairs(atoms: V3[], d: number) {
  const out: Array<[number, number, boolean?]> = [];
  for (let i = 0; i < atoms.length; i++) for (let j = i + 1; j < atoms.length; j++) {
    if (Math.abs(Math.hypot(atoms[i].x - atoms[j].x, atoms[i].y - atoms[j].y, atoms[i].z - atoms[j].z) - d) < 0.02) out.push([i, j]);
  }
  return out;
}

export const CRYSTALS: Record<string, Crystal> = {
  nacl: {
    name: t("table salt NaCl", "կերակրի աղ NaCl", "поваренная соль NaCl"),
    type: t("ionic", "իոնային", "ионная"),
    nodes: t("Na⁺ and Cl⁻ ions, held by attraction of opposite charges", "Na⁺ և Cl⁻ իոններ, որոնց պահում է հակադիր լիցքերի ձգողությունը", "ионы Na⁺ и Cl⁻, их держит притяжение разноимённых зарядов"),
    props: t("hard but brittle, melts at 801 °C, conducts only when molten or dissolved", "կարծր, բայց փխրուն, հալվում է 801 °C-ում, հոսանք հաղորդում է միայն հալույթում կամ լուծույթում", "твёрдая, но хрупкая, плавится при 801 °C, проводит ток только в расплаве или растворе"),
    ...nacl(),
  },
  diamond: {
    name: t("diamond C", "ալմաստ C", "алмаз C"),
    type: t("atomic (covalent network)", "ատոմային", "атомная"),
    nodes: t("carbon atoms, each joined to four others by covalent bonds", "ածխածնի ատոմներ, յուրաքանչյուրը կովալենտ կապով միացած է չորս այլ ատոմի", "атомы углерода, каждый связан ковалентно с четырьмя другими"),
    props: t("the hardest natural substance, melts above 3500 °C, does not conduct", "ամենակարծր բնական նյութը, հալվում է 3500 °C-ից բարձր, հոսանք չի հաղորդում", "самое твёрдое природное вещество, плавится выше 3500 °C, ток не проводит"),
    ...diamond(),
  },
  graphite: {
    name: t("graphite C", "գրաֆիտ C", "графит C"),
    type: t("atomic, layered", "ատոմային, շերտավոր", "атомная, слоистая"),
    nodes: t("carbon atoms in flat hexagonal layers; the layers are held only weakly", "ածխածնի ատոմներ հարթ վեցանկյուն շերտերում․ շերտերը թույլ են կապված", "атомы углерода в плоских шестиугольных слоях; слои связаны слабо"),
    props: t("soft and slippery (pencil lead), conducts electricity along the layers", "փափուկ և սահուն (մատիտի գրիչ), հոսանք է հաղորդում շերտերի երկայնքով", "мягкий и скользкий (грифель), проводит ток вдоль слоёв"),
    ...graphite(),
  },
  metal: {
    name: t("copper Cu", "պղինձ Cu", "медь Cu"),
    type: t("metallic", "մետաղային", "металлическая"),
    nodes: t("positive metal ions in a sea of free electrons", "դրական մետաղական իոններ ազատ էլեկտրոնների «ծովում»", "положительные ионы металла в «море» свободных электронов"),
    props: t("conducts electricity and heat, shiny, can be bent and drawn into wire", "հաղորդում է հոսանք և ջերմություն, փայլուն է, ճկվում է և ձգվում լարի", "проводит ток и тепло, блестит, гнётся и вытягивается в проволоку"),
    atoms: fcc(CU, 0.26, "Cu⁺"),
    bonds: [],
    electrons: true,
  },
  dryice: {
    name: t("dry ice CO₂", "չոր սառույց CO₂", "сухой лёд CO₂"),
    type: t("molecular", "մոլեկուլային", "молекулярная"),
    nodes: t("whole CO₂ molecules, held by weak forces between molecules", "ամբողջական CO₂ մոլեկուլներ, որոնց պահում են թույլ միջմոլեկուլային ուժեր", "целые молекулы CO₂, их держат слабые межмолекулярные силы"),
    props: t("soft, turns into gas already at −78 °C, does not conduct", "փափուկ է, գազի է վերածվում արդեն −78 °C-ում, հոսանք չի հաղորդում", "мягкий, переходит в газ уже при −78 °C, ток не проводит"),
    ...dryIce(),
  },
};

export default function Lattice({ spec, lang }: SimProps) {
  const ids = list(spec.opts.set, spec.args.length ? spec.args : Object.keys(CRYSTALS)).filter((k) => CRYSTALS[k]);
  const [id, setId] = useState(ids[0] ?? "nacl");
  const [cell, setCell] = useState(false);
  const C = CRYSTALS[id];
  const orbit = useOrbit({ yaw: 0.55, pitch: 0.4 });
  const p = useLoop(6, !!C.electrons);
  const scale = 62;
  const P = C.atoms.map((a) => project(a, orbit.rot, scale, 160, 105));
  const edges = useMemo(() => {
    const v = [-1, 1];
    const corners: V3[] = v.flatMap((x) => v.flatMap((y) => v.map((z) => ({ x, y, z }))));
    return pairs(corners, 2).map(([a, b]) => [corners[a], corners[b]] as const);
  }, []);
  type Item = { z: number; el: React.ReactNode };
  const items: Item[] = [];
  C.bonds.forEach(([a, b], k) => {
    const A = P[a], B = P[b];
    items.push({ z: Math.min(A.z, B.z) - 0.05, el: <line key={`b${k}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" /> });
  });
  C.atoms.forEach((a, k) => {
    const r = a.r * scale;
    items.push({
      z: P[k].z,
      el: (
        <g key={`a${k}`}>
          <circle cx={P[k].x} cy={P[k].y} r={r} fill={a.c} stroke="#0f172a" strokeOpacity="0.3" />
          <circle cx={P[k].x - r * 0.3} cy={P[k].y - r * 0.3} r={r * 0.35} fill="#fff" opacity="0.35" />
          {a.label && r > 11 ? <text x={P[k].x} y={P[k].y + 3} textAnchor="middle" style={{ fontSize: 8, fontWeight: 900 }} fill="#fff">{a.label}</text> : null}
        </g>
      ),
    });
  });
  items.sort((a, b) => a.z - b.z);
  return (
    <ArtFrame kind="look" title={`${L(W.title, lang)}: ${L(C.name, lang)}`} body={spec.body || L(W.hint, lang)}>
      <svg viewBox="0 0 320 210" className="sim-stage" style={{ maxWidth: "30.5rem", cursor: "grab", touchAction: "none" }} role="img" aria-label={L(C.name, lang)} {...orbit.handlers}>
        <rect width="320" height="210" fill="#fbfcff" />
        {cell ? edges.map(([a, b], i) => { const A = project(a, orbit.rot, scale, 160, 105), B = project(b, orbit.rot, scale, 160, 105); return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="#4f46e5" strokeDasharray="4 3" />; }) : null}
        {items.map((it) => it.el)}
        {C.electrons
          ? Array.from({ length: 26 }, (_, i) => {
              const q = project({ x: Math.sin(p * 6.283 + i * 2.1) * 1.1, y: Math.cos(p * 6.283 * (i % 3 ? 1 : -1) + i * 1.3) * 1.1, z: Math.sin(p * 6.283 + i * 0.7) * 1.1 }, orbit.rot, scale, 160, 105);
              return <circle key={`e${i}`} cx={q.x} cy={q.y} r="3" fill="#38bdf8" stroke="#fff" />;
            })
          : null}
        <text x="8" y="202" className="sim-axis is-name">{L(UI.rotate, lang)}</text>
      </svg>
      <EqList items={[[L(W.type, lang), L(C.type, lang), "#4f46e5"], [L(W.nodes, lang), L(C.nodes, lang)], [L(W.props, lang), L(C.props, lang)]]} />
      <Toggle on={cell} label={L(W.cell, lang)} onChange={setCell} />
      {ids.length > 1 ? (
        <div className="art-chips">
          {ids.map((n) => <button key={n} type="button" className={cn("art-chip", n === id && "is-active")} onClick={() => setId(n)}>{L(CRYSTALS[n].name, lang)}</button>)}
        </div>
      ) : null}
    </ArtFrame>
  );
}
