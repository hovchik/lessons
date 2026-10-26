"use client";

import { useMemo, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { molarMass } from "@/lib/sim/elements";
import { CPK, layout, parseSmiles, SIZE } from "@/lib/sim/molecule";
import type { SimProps } from "../sim-block";
import { fmt, Note, Readouts, Toggle } from "../kit";
import { L, t, un, UI } from "../labels";
import { project, useOrbit } from "../three";

const W = {
  title: t("Molecule in 3D", "Մոլեկուլը եռաչափ", "Молекула в 3D"),
  hint: t("Drag to turn the molecule. Each colour is one element; sticks are bonds, a double line is a double bond.", "Քաշի՛ր՝ մոլեկուլը պտտելու համար։ Ամեն գույն մեկ տարր է, ձողիկները կապեր են, կրկնակի գիծը՝ կրկնակի կապ։", "Потяни, чтобы повернуть молекулу. Каждый цвет — элемент; палочки — связи, двойная линия — двойная связь."),
  fill: t("Space-filling", "Ծավալային մոդել", "Объёмная модель"),
  pairs: t("Lone pairs", "Չբաժանված զույգեր", "Неподелённые пары"),
  formula: t("Formula", "Բանաձև", "Формула"),
  mass: t("Molar mass", "Մոլային զանգված", "Молярная масса"),
  shape: t("Shape", "Ձև", "Форма"),
};

type Preset = { smiles: string; f: string; name: ReturnType<typeof t>; shape?: ReturnType<typeof t>; note?: ReturnType<typeof t> };

const LINEAR = t("linear, 180°", "գծային, 180°", "линейная, 180°");
const BENT = t("bent, about 105°", "անկյունային, մոտ 105°", "угловая, около 105°");
const PYRAMID = t("trigonal pyramid, about 107°", "եռանկյուն բուրգ, մոտ 107°", "тригональная пирамида, около 107°");
const TETRA = t("tetrahedral, 109.5°", "քառանիստ, 109,5°", "тетраэдр, 109,5°");
const FLAT = t("flat, 120°", "հարթ, 120°", "плоская, 120°");

export const MOLECULES: Record<string, Preset> = {
  h2: { smiles: "[H][H]", f: "H₂", name: t("hydrogen", "ջրածին", "водород"), shape: LINEAR },
  o2: { smiles: "O=O", f: "O₂", name: t("oxygen", "թթվածին", "кислород"), shape: LINEAR },
  n2: { smiles: "N#N", f: "N₂", name: t("nitrogen", "ազոտ", "азот"), shape: LINEAR, note: t("A triple bond makes N₂ very unreactive.", "Եռակի կապը N₂-ը դարձնում է շատ քիչ ակտիվ։", "Тройная связь делает N₂ очень инертным.") },
  cl2: { smiles: "ClCl", f: "Cl₂", name: t("chlorine", "քլոր", "хлор"), shape: LINEAR },
  hcl: { smiles: "Cl", f: "HCl", name: t("hydrogen chloride", "քլորաջրածին", "хлороводород"), shape: LINEAR, note: t("A polar bond: chlorine pulls the shared electrons towards itself.", "Բևեռային կապ․ քլորն ընդհանուր էլեկտրոնները քաշում է դեպի իրեն։", "Полярная связь: хлор оттягивает общие электроны к себе.") },
  h2o: { smiles: "O", f: "H₂O", name: t("water", "ջուր", "вода"), shape: BENT, note: t("Two lone pairs on oxygen bend the molecule, so water is polar.", "Թթվածնի երկու չբաժանված զույգերը ծռում են մոլեկուլը, ուստի ջուրը բևեռային է։", "Две неподелённые пары кислорода изгибают молекулу, поэтому вода полярна.") },
  h2o2: { smiles: "OO", f: "H₂O₂", name: t("hydrogen peroxide", "ջրածնի պերօքսիդ", "пероксид водорода") },
  co2: { smiles: "O=C=O", f: "CO₂", name: t("carbon dioxide", "ածխաթթու գազ", "углекислый газ"), shape: LINEAR, note: t("The bonds are polar, but the straight shape cancels them: CO₂ is non-polar.", "Կապերը բևեռային են, բայց ուղիղ ձևը չեզոքացնում է դրանք․ CO₂-ը ոչ բևեռային է։", "Связи полярны, но прямая форма их компенсирует: CO₂ неполярен.") },
  co: { smiles: "[C-]#[O+]", f: "CO", name: t("carbon monoxide", "ածխածնի մոնօքսիդ (շմոլ գազ)", "угарный газ"), shape: LINEAR },
  so2: { smiles: "O=S=O", f: "SO₂", name: t("sulfur dioxide", "ծծմբի երկօքսիդ", "сернистый газ"), shape: BENT },
  so3: { smiles: "O=S(=O)=O", f: "SO₃", name: t("sulfur trioxide", "ծծմբի եռօքսիդ", "серный ангидрид"), shape: FLAT },
  o3: { smiles: "O=[O+][O-]", f: "O₃", name: t("ozone", "օզոն", "озон"), shape: BENT },
  nh3: { smiles: "N", f: "NH₃", name: t("ammonia", "ամոնիակ", "аммиак"), shape: PYRAMID, note: t("The lone pair on nitrogen can take an H⁺ ion: NH₃ + H⁺ → NH₄⁺.", "Ազոտի չբաժանված զույգը կարող է միացնել H⁺ իոն․ NH₃ + H⁺ → NH₄⁺։", "Неподелённая пара азота может присоединить ион H⁺: NH₃ + H⁺ → NH₄⁺.") },
  nh4: { smiles: "[NH4+]", f: "NH₄⁺", name: t("ammonium ion", "ամոնիումի իոն", "ион аммония"), shape: TETRA },
  h3o: { smiles: "[OH3+]", f: "H₃O⁺", name: t("hydronium ion", "հիդրօքսոնիումի իոն", "ион гидроксония"), shape: PYRAMID },
  hcn: { smiles: "C#N", f: "HCN", name: t("hydrogen cyanide", "ցիանաջրածին", "циановодород"), shape: LINEAR },
  h2s: { smiles: "S", f: "H₂S", name: t("hydrogen sulfide", "ծծմբաջրածին", "сероводород"), shape: BENT },
  h2so4: { smiles: "OS(=O)(=O)O", f: "H₂SO₄", name: t("sulfuric acid", "ծծմբական թթու", "серная кислота"), shape: TETRA },
  hno3: { smiles: "O[N+](=O)[O-]", f: "HNO₃", name: t("nitric acid", "ազոտական թթու", "азотная кислота"), shape: FLAT },
  h3po4: { smiles: "OP(=O)(O)O", f: "H₃PO₄", name: t("phosphoric acid", "օրթոֆոսֆորական թթու", "ортофосфорная кислота"), shape: TETRA },
  ch4: { smiles: "C", f: "CH₄", name: t("methane", "մեթան", "метан"), shape: TETRA, note: t("Carbon makes four bonds pointing to the corners of a tetrahedron.", "Ածխածինը կազմում է չորս կապ, որոնք ուղղված են քառանիստի գագաթներին։", "Углерод образует четыре связи, направленные к вершинам тетраэдра.") },
  ccl4: { smiles: "ClC(Cl)(Cl)Cl", f: "CCl₄", name: t("tetrachloromethane", "քառաքլորմեթան", "тетрахлорметан"), shape: TETRA },
  ch3cl: { smiles: "CCl", f: "CH₃Cl", name: t("chloromethane", "քլորմեթան", "хлорметан") },
  c2h6: { smiles: "CC", f: "C₂H₆", name: t("ethane", "էթան", "этан") },
  c3h8: { smiles: "CCC", f: "C₃H₈", name: t("propane", "պրոպան", "пропан") },
  c4h10: { smiles: "CCCC", f: "C₄H₁₀", name: t("butane", "բութան", "бутан"), note: t("Butane and isobutane have the same formula but different structures: they are isomers.", "Բութանը և իզոբութանը ունեն նույն բանաձևը, բայց տարբեր կառուցվածք․ դրանք իզոմերներ են։", "У бутана и изобутана одна формула, но разное строение: это изомеры.") },
  isobutane: { smiles: "CC(C)C", f: "C₄H₁₀", name: t("isobutane (2-methylpropane)", "իզոբութան (2-մեթիլպրոպան)", "изобутан (2-метилпропан)") },
  cyclohexane: { smiles: "C1CCCCC1", f: "C₆H₁₂", name: t("cyclohexane", "ցիկլոհեքսան", "циклогексан") },
  c2h4: { smiles: "C=C", f: "C₂H₄", name: t("ethylene (ethene)", "էթիլեն (էթեն)", "этилен (этен)"), shape: FLAT, note: t("The double bond keeps the molecule flat and can open up: this is how polyethylene is made.", "Կրկնակի կապը մոլեկուլը պահում է հարթ և կարող է բացվել․ այդպես է ստացվում պոլիէթիլենը։", "Двойная связь держит молекулу плоской и может раскрываться: так получают полиэтилен.") },
  c3h6: { smiles: "C=CC", f: "C₃H₆", name: t("propene", "պրոպեն", "пропен") },
  c2h2: { smiles: "C#C", f: "C₂H₂", name: t("acetylene (ethyne)", "ացետիլեն (էթին)", "ацетилен (этин)"), shape: LINEAR },
  butadiene: { smiles: "C=CC=C", f: "C₄H₆", name: t("buta-1,3-diene", "բութադիեն-1,3", "бутадиен-1,3") },
  isoprene: { smiles: "C=C(C)C=C", f: "C₅H₈", name: t("isoprene", "իզոպրեն", "изопрен"), note: t("The building block of natural rubber.", "Բնական կաուչուկի «աղյուսը»։", "Звено натурального каучука.") },
  vinylchloride: { smiles: "C=CCl", f: "C₂H₃Cl", name: t("vinyl chloride", "վինիլքլորիդ", "винилхлорид") },
  benzene: { smiles: "C1=CC=CC=C1", f: "C₆H₆", name: t("benzene", "բենզոլ", "бензол"), shape: FLAT, note: t("A flat ring of six carbons; all six C–C bonds are the same length.", "Վեց ածխածնի հարթ օղակ․ բոլոր վեց C–C կապերն ունեն նույն երկարությունը։", "Плоское кольцо из шести атомов углерода; все шесть связей C–C одинаковой длины.") },
  toluene: { smiles: "CC1=CC=CC=C1", f: "C₇H₈", name: t("toluene", "տոլուոլ", "толуол") },
  styrene: { smiles: "C=CC1=CC=CC=C1", f: "C₈H₈", name: t("styrene", "ստիրոլ", "стирол") },
  phenol: { smiles: "OC1=CC=CC=C1", f: "C₆H₅OH", name: t("phenol", "ֆենոլ", "фенол") },
  aniline: { smiles: "NC1=CC=CC=C1", f: "C₆H₅NH₂", name: t("aniline", "անիլին", "анилин") },
  methanol: { smiles: "CO", f: "CH₃OH", name: t("methanol", "մեթանոլ", "метанол") },
  ethanol: { smiles: "CCO", f: "C₂H₅OH", name: t("ethanol", "էթանոլ", "этанол"), note: t("The –OH group makes it an alcohol and lets it mix with water.", "–OH խումբը այն դարձնում է սպիրտ և թույլ է տալիս խառնվել ջրի հետ։", "Группа –OH делает его спиртом и позволяет смешиваться с водой.") },
  glycol: { smiles: "OCCO", f: "C₂H₄(OH)₂", name: t("ethylene glycol", "էթիլենգլիկոլ", "этиленгликоль") },
  glycerol: { smiles: "OCC(O)CO", f: "C₃H₅(OH)₃", name: t("glycerol", "գլիցերին", "глицерин") },
  formaldehyde: { smiles: "C=O", f: "HCHO", name: t("formaldehyde (methanal)", "ֆորմալդեհիդ (մեթանալ)", "формальдегид (метаналь)"), shape: FLAT },
  acetaldehyde: { smiles: "CC=O", f: "CH₃CHO", name: t("acetaldehyde (ethanal)", "ացետալդեհիդ (էթանալ)", "ацетальдегид (этаналь)") },
  acetone: { smiles: "CC(=O)C", f: "CH₃COCH₃", name: t("acetone (propanone)", "ացետոն (պրոպանոն)", "ацетон (пропанон)") },
  formicacid: { smiles: "OC=O", f: "HCOOH", name: t("formic acid", "մրջնաթթու", "муравьиная кислота") },
  aceticacid: { smiles: "CC(=O)O", f: "CH₃COOH", name: t("acetic acid", "քացախաթթու", "уксусная кислота"), note: t("The –COOH group (carboxyl) gives the acid its H⁺.", "–COOH (կարբօքսիլ) խումբն է տալիս թթվի H⁺ իոնը։", "Группа –COOH (карбоксильная) даёт кислоте ион H⁺.") },
  ethylacetate: { smiles: "CC(=O)OCC", f: "CH₃COOC₂H₅", name: t("ethyl acetate (an ester)", "էթիլացետատ (էսթեր)", "этилацетат (сложный эфир)") },
  glucose: { smiles: "OCC(O)C(O)C(O)C(O)C=O", f: "C₆H₁₂O₆", name: t("glucose (open chain)", "գլյուկոզ (բաց շղթա)", "глюкоза (открытая цепь)") },
  methylamine: { smiles: "CN", f: "CH₃NH₂", name: t("methylamine", "մեթիլամին", "метиламин") },
  glycine: { smiles: "NCC(=O)O", f: "NH₂CH₂COOH", name: t("glycine (an amino acid)", "գլիցին (ամինաթթու)", "глицин (аминокислота)"), note: t("An amino group –NH₂ and a carboxyl group –COOH in one molecule.", "Ամինո –NH₂ և կարբօքսիլ –COOH խմբեր մեկ մոլեկուլում։", "Аминогруппа –NH₂ и карбоксильная группа –COOH в одной молекуле.") },
  alanine: { smiles: "CC(N)C(=O)O", f: "C₃H₇NO₂", name: t("alanine", "ալանին", "аланин") },
  urea: { smiles: "NC(=O)N", f: "CO(NH₂)₂", name: t("urea", "միզանյութ", "мочевина") },
};

export default function Molecule({ spec, lang }: SimProps) {
  const ids = list(spec.opts.set, spec.args.length ? spec.args : ["h2o", "co2", "ch4", "nh3"]).filter((k) => MOLECULES[k]);
  const [id, setId] = useState(ids[0] ?? "h2o");
  const [fill, setFill] = useState(false);
  const [pairs, setPairs] = useState(spec.opts.pairs === "on");
  const m = MOLECULES[id];
  const mol = useMemo(() => layout(parseSmiles(m.smiles), true), [m.smiles]);
  const orbit = useOrbit();
  const plain = m.f.replace(/[₀-₉]/g, (d) => String("₀₁₂₃₄₅₆₇₈₉".indexOf(d))).replace(/[⁺⁻]/g, "");
  const M = molarMass(plain);
  const span = Math.max(1, ...mol.atoms.filter((a) => !a.ghost).map((a) => Math.hypot(a.x, a.y, a.z)));
  const scale = Math.min(70, 80 / span);
  const P = mol.atoms.map((a) => project(a, orbit.rot, scale, 160, 105));
  type Item = { z: number; el: React.ReactNode };
  const items: Item[] = [];
  mol.bonds.forEach((b, k) => {
    const A = mol.atoms[b.a], B = mol.atoms[b.b];
    if (B.ghost || A.ghost) {
      if (!pairs || fill) return;
      const g = B.ghost ? b.b : b.a, c = B.ghost ? b.a : b.b;
      const dx = P[g].x - P[c].x, dy = P[g].y - P[c].y;
      items.push({ z: P[g].z, el: <ellipse key={`lp${k}`} cx={P[c].x + dx * 1.2} cy={P[c].y + dy * 1.2} rx={Math.max(4, Math.hypot(dx, dy) * 0.5)} ry="6" transform={`rotate(${(Math.atan2(dy, dx) * 180) / Math.PI} ${P[c].x + dx * 1.2} ${P[c].y + dy * 1.2})`} fill="#f472b6" opacity="0.35" /> });
      return;
    }
    if (fill) return;
    const p1 = P[b.a], p2 = P[b.b];
    const dx = p2.x - p1.x, dy = p2.y - p1.y, l = Math.hypot(dx, dy) || 1;
    const nx = -dy / l, ny = dx / l;
    const offs = b.order === 1 ? [0] : b.order === 2 ? [-3, 3] : [-5, 0, 5];
    items.push({
      z: (p1.z + p2.z) / 2,
      el: <g key={`b${k}`}>{offs.map((o) => <line key={o} x1={p1.x + nx * o} y1={p1.y + ny * o} x2={p2.x + nx * o} y2={p2.y + ny * o} stroke="#94a3b8" strokeWidth={b.order === 1 ? 5 : 3.2} strokeLinecap="round" />)}</g>,
    });
  });
  mol.atoms.forEach((a, k) => {
    if (a.ghost) return;
    const r = (fill ? (SIZE[a.el] ?? 0.45) * 2.6 : SIZE[a.el] ?? 0.45) * scale;
    const c = CPK[a.el] ?? "#a3a3a3";
    items.push({
      z: P[k].z + 0.01,
      el: (
        <g key={`a${k}`}>
          <circle cx={P[k].x} cy={P[k].y} r={r} fill={c} stroke={a.el === "H" ? "#94a3b8" : "#0f172a"} strokeOpacity="0.35" strokeWidth="1" />
          <circle cx={P[k].x - r * 0.3} cy={P[k].y - r * 0.3} r={r * 0.35} fill="#fff" opacity="0.35" />
          {!fill && a.el !== "H" && a.el !== "C" ? <text x={P[k].x} y={P[k].y + 3.5} textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff">{a.el}</text> : null}
        </g>
      ),
    });
  });
  items.sort((p, q) => p.z - q.z);
  const els = Array.from(new Set(mol.atoms.filter((a) => !a.ghost).map((a) => a.el)));
  return (
    <ArtFrame kind="look" title={`${L(W.title, lang)}: ${L(m.name, lang)}`} body={spec.body || L(W.hint, lang)}>
      <svg viewBox="0 0 320 210" className="sim-stage" style={{ maxWidth: "30.5rem", cursor: "grab" }} role="img" aria-label={L(m.name, lang)} {...orbit.handlers}>
        <rect width="320" height="210" fill="#fbfcff" />
        {items.map((it) => it.el)}
        <g transform="translate(8 196)">
          {els.map((e, k) => (
            <g key={e} transform={`translate(${k * 34} 0)`}>
              <circle cx="6" cy="0" r="5" fill={CPK[e] ?? "#a3a3a3"} stroke="#94a3b8" />
              <text x="14" y="3.5" className="sim-axis is-name">{e}</text>
            </g>
          ))}
        </g>
      </svg>
      <Readouts
        items={[
          [L(W.formula, lang), m.f],
          ...(M ? [[L(W.mass, lang), `${fmt(M, 1, lang)} ${un("gmol", lang)}`] as [string, string]] : []),
          ...(m.shape ? [[L(W.shape, lang), L(m.shape, lang)] as [string, string]] : []),
        ]}
      />
      {m.note ? <Note>{L(m.note, lang)}</Note> : null}
      {ids.length > 1 ? (
        <div className="art-chips">
          {ids.map((k) => <button key={k} type="button" className={`art-chip${k === id ? " is-active" : ""}`} onClick={() => setId(k)}>{ids.some((o) => o !== k && MOLECULES[o].f === MOLECULES[k].f) ? L(MOLECULES[k].name, lang) : MOLECULES[k].f}</button>)}
        </div>
      ) : null}
      <div className="art-chips">
        <Toggle on={fill} label={L(W.fill, lang)} onChange={setFill} />
        <Toggle on={pairs} label={L(W.pairs, lang)} onChange={setPairs} />
        <span className="sim-small-note">{L(UI.rotate, lang)}</span>
      </div>
    </ArtFrame>
  );
}
