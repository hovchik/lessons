"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Note, Readouts, Slider, Stage } from "../kit";
import { L, t } from "../labels";

const W = {
  buoy: t("Experiment: sink or float?", "Փորձ․ կսուզվի՞, թե՞ կլողա", "Опыт: утонет или всплывёт?"),
  buoyHint: t(
    "Pick a material and a liquid and drop the block in. The liquid pushes up with the weight of the liquid the block pushes aside (Archimedes). If that is enough, the block floats.",
    "Ընտրի՛ր նյութը և հեղուկը և գցի՛ր չորսուն։ Հեղուկը վեր է հրում չորսուի դուրս մղած հեղուկի կշռով (Արքիմեդ)։ Եթե դա բավական է, չորսուն լողում է։",
    "Выбери материал и жидкость и опусти брусок. Жидкость выталкивает его с силой, равной весу вытесненной жидкости (Архимед). Если этого хватает, брусок плавает.",
  ),
  depth: t("Experiment: pressure grows with depth", "Փորձ․ ճնշումը աճում է խորության հետ", "Опыт: давление растёт с глубиной"),
  depthHint: t(
    "Lower the probe. The manometer shows p = ρ·g·h. Water jets from deeper holes shoot further.",
    "Իջեցրո՛ւ զոնդը։ Մանոմետրը ցույց է տալիս p = ρ·g·h։ Ավելի խորը անցքերից ջրի շիթերն ավելի հեռու են թռչում։",
    "Опускай датчик. Манометр показывает p = ρ·g·h. Из более глубоких отверстий струи бьют дальше.",
  ),
  vessels: t("Experiment: communicating vessels", "Փորձ․ հաղորդակից անոթներ", "Опыт: сообщающиеся сосуды"),
  vesselsHint: t(
    "Pour water into one tube: the level is the same in every vessel whatever its shape. Add oil on one side and compare the heights.",
    "Ջուր լցրո՛ւ մի խողովակի մեջ․ մակարդակը նույնն է բոլոր անոթներում՝ անկախ ձևից։ Մի կողմում յուղ ավելացրո՛ւ և համեմատի՛ր բարձրությունները։",
    "Налей воду в одну трубку: уровень одинаков во всех сосудах, какой бы ни была их форма. Добавь масло с одной стороны и сравни высоты.",
  ),
  press: t("Experiment: the hydraulic press", "Փորձ․ հիդրավլիկ մամլիչ", "Опыт: гидравлический пресс"),
  pressHint: t(
    "Push the small piston. The pressure is the same everywhere in the liquid (Pascal), so the big piston pushes with a force as many times bigger as its area.",
    "Սեղմի՛ր փոքր մխոցը։ Ճնշումը հեղուկի ամեն տեղում նույնն է (Պասկալ), ուստի մեծ մխոցը սեղմում է այնքան անգամ մեծ ուժով, որքան անգամ մեծ է նրա մակերեսը։",
    "Надави на малый поршень. Давление в жидкости везде одинаково (Паскаль), поэтому большой поршень давит с силой во столько раз больше, во сколько больше его площадь.",
  ),
  solid: t("Experiment: the same brick, different pressure", "Փորձ․ նույն աղյուսը, տարբեր ճնշում", "Опыт: один кирпич — разное давление"),
  solidHint: t(
    "Put the brick on different faces. Its weight does not change, but a smaller area means more pressure and a deeper dent in the sand.",
    "Դի՛ր աղյուսը տարբեր նիստերի վրա։ Կշիռը չի փոխվում, բայց փոքր մակերեսը նշանակում է ավելի մեծ ճնշում և ավելի խոր հետք ավազում։",
    "Ставь кирпич на разные грани. Вес не меняется, но меньшая площадь — больше давление и глубже вмятина в песке.",
  ),
  atm: t("Experiment: Torricelli's tube", "Փորձ․ Տորիչելիի խողովակը", "Опыт: трубка Торричелли"),
  atmHint: t(
    "Air presses on the mercury in the dish and holds up a column about 760 mm high. Climb a mountain: less air above you, a shorter column.",
    "Օդը ճնշում է թասի սնդիկին և պահում մոտ 760 մմ բարձրությամբ սյուն։ Բարձրացի՛ր լեռը․ վերևում ավելի քիչ օդ, ավելի կարճ սյուն։",
    "Воздух давит на ртуть в чашке и держит столб высотой около 760 мм. Поднимись в горы: воздуха над тобой меньше, столб короче.",
  ),
  material: t("Material", "Նյութ", "Материал"),
  liquid: t("Liquid", "Հեղուկ", "Жидкость"),
  volume: t("Volume", "Ծավալ", "Объём"),
  weight: t("Weight", "Կշիռ", "Вес"),
  archimedes: t("Archimedes force", "Արքիմեդի ուժ", "Архимедова сила"),
  floats: t("It floats. Part under the liquid:", "Լողում է։ Հեղուկում գտնվող մասը․", "Плавает. Под жидкостью:"),
  sinks: t("It sinks: the weight is bigger than the greatest Archimedes force.", "Սուզվում է․ կշիռը մեծ է Արքիմեդի ամենամեծ ուժից։", "Тонет: вес больше наибольшей архимедовой силы."),
  depthL: t("Depth h", "Խորություն h", "Глубина h"),
  pressure: t("Pressure", "Ճնշում", "Давление"),
  water: t("water", "ջուր", "вода"),
  salt: t("salt water", "աղաջուր", "солёная вода"),
  oil: t("oil", "յուղ", "масло"),
  mercury: t("mercury", "սնդիկ", "ртуть"),
  cork: t("cork", "խցան", "пробка"),
  wood: t("pine", "սոճի", "сосна"),
  ice: t("ice", "սառույց", "лёд"),
  plastic: t("plastic", "պլաստիկ", "пластик"),
  alu: t("aluminium", "ալյումին", "алюминий"),
  iron: t("iron", "երկաթ", "железо"),
  gold: t("gold", "ոսկի", "золото"),
  water2: t("Water poured", "Լցված ջուր", "Налито воды"),
  addOil: t("Oil on the right", "Յուղ աջ կողմում", "Масло справа"),
  a1: t("Small piston area", "Փոքր մխոցի մակերես", "Площадь малого поршня"),
  a2: t("Big piston area", "Մեծ մխոցի մակերես", "Площадь большого поршня"),
  f1: t("Force on the small piston", "Ուժը փոքր մխոցի վրա", "Сила на малый поршень"),
  f2: t("Force of the big piston", "Մեծ մխոցի ուժը", "Сила большого поршня"),
  gain: t("Gain in force", "Ուժի շահում", "Выигрыш в силе"),
  face: t("Face", "Նիստ", "Грань"),
  flat: t("lying flat", "պառկած", "плашмя"),
  edge: t("on its side", "կողքի վրա", "на ребре"),
  end: t("standing", "կանգնած", "стоя"),
  area: t("Area", "Մակերես", "Площадь"),
  height: t("Altitude", "Բարձրություն ծովի մակերևույթից", "Высота над уровнем моря"),
  column: t("Mercury column", "Սնդիկի սյուն", "Столб ртути"),
  boil: t("Water boils at", "Ջուրը եռում է", "Вода кипит при"),
  aragats: t("Aragats summit", "Արագածի գագաթ", "Вершина Арагаца"),
  yerevan: t("Yerevan", "Երևան", "Ереван"),
  sea: t("sea level", "ծովի մակարդակ", "уровень моря"),
  everest: t("Everest", "Էվերեստ", "Эверест"),
};
const U = { N: t("N", "Ն", "Н"), kPa: t("kPa", "կՊա", "кПа"), cm: t("cm", "սմ", "см"), cm3: t("cm³", "սմ³", "см³"), cm2: t("cm²", "սմ²", "см²"), m: t("m", "մ", "м"), mm: t("mm", "մմ", "мм"), Pa: t("Pa", "Պա", "Па"), kgm3: t("kg/m³", "կգ/մ³", "кг/м³") };

const LIQUIDS = { water: [1000, "#7dd3fc"], salt: [1030, "#5eead4"], oil: [900, "#fde047"], mercury: [13600, "#cbd5e1"] } as const;
const SOLIDS = { cork: [240, "#d6a46b"], wood: [520, "#e3b875"], ice: [900, "#e0f2fe"], plastic: [1100, "#f472b6"], alu: [2700, "#cbd5e1"], iron: [7800, "#64748b"], gold: [19300, "#facc15"] } as const;

export default function Fluids({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "buoyancy";
  if (m === "depth") return <Depth spec={spec} lang={lang} />;
  if (m === "vessels") return <Vessels spec={spec} lang={lang} />;
  if (m === "press") return <Press spec={spec} lang={lang} />;
  if (m === "solid") return <SolidP spec={spec} lang={lang} />;
  if (m === "atm") return <Atm spec={spec} lang={lang} />;
  return <Buoyancy spec={spec} lang={lang} />;
}

function Buoyancy({ spec, lang }: SimProps) {
  const [mat, setMat] = useState<keyof typeof SOLIDS>((spec.opts.material as keyof typeof SOLIDS) ?? "wood");
  const [liq, setLiq] = useState<keyof typeof LIQUIDS>("water");
  const [vol, setVol] = useState(500); // cm³
  const [rb, cb] = SOLIDS[mat];
  const [rl, cl] = LIQUIDS[liq];
  const g = 10;
  const V = vol / 1e6;
  const P = rb * V * g;
  const Fmax = rl * V * g;
  const floats = rb < rl;
  const frac = floats ? rb / rl : 1;
  const FA = floats ? P : Fmax;
  const side = Math.cbrt(vol) * 3.2; // px
  const surface = 80;
  const tankTop = 40, tankBottom = 190;
  // block top y
  const top = floats ? surface - side * (1 - frac) : tankBottom - side;
  const rise = (frac * side * side) / 220; // the level rises a little
  const N = L(U.N, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.buoy, lang)} body={spec.body || L(W.buoyHint, lang)}>
      <Stage w={320} h={200} label={L(W.buoy, lang)}>
        <rect x="50" y={surface - rise} width="220" height={tankBottom - surface + rise} fill={cl} opacity="0.75" style={{ transition: "all 600ms ease" }} />
        <polyline points={`50,${tankTop} 50,${tankBottom} 270,${tankBottom} 270,${tankTop}`} fill="none" stroke="#475569" strokeWidth="3" />
        <g style={{ transition: "transform 900ms cubic-bezier(.3,1.4,.5,1)", transform: `translate(0px, ${top}px)` }}>
          <rect x={160 - side / 2} y={0} width={side} height={side} rx="3" fill={cb} stroke="#1e1b4b" strokeWidth="1.5" />
        </g>
        <Arrow x1={160} y1={top + side / 2} x2={160} y2={top + side / 2 + P * 4} color="#1e1b4b" label={`P ${fmt(P, 1, lang)} ${N}`} />
        <Arrow x1={160 + side / 2 + 14} y1={top + side} x2={160 + side / 2 + 14} y2={top + side - FA * 4} color="#0284c7" label={`F_A ${fmt(FA, 1, lang)}`} />
      </Stage>
      <Note tone={floats ? "good" : "bad"}>{floats ? `${L(W.floats, lang)} ${fmt(frac * 100, 0, lang)} %` : L(W.sinks, lang)}</Note>
      <Readouts
        items={[
          [`ρ ${L(W[mat], lang)}`, `${rb} ${L(U.kgm3, lang)}`],
          [`ρ ${L(W[liq], lang)}`, `${rl} ${L(U.kgm3, lang)}`, "#0284c7"],
          [L(W.weight, lang), `${fmt(P, 2, lang)} ${N}`],
          [L(W.archimedes, lang), `${fmt(FA, 2, lang)} ${N}`, "#0284c7"],
        ]}
      />
      <Controls>
        <p className="art-ctrl-label">{L(W.material, lang)}</p>
        <Choice value={mat} options={(Object.keys(SOLIDS) as Array<keyof typeof SOLIDS>).map((k) => [k, L(W[k], lang)])} onChange={setMat} />
        <p className="art-ctrl-label">{L(W.liquid, lang)}</p>
        <Choice value={liq} options={(Object.keys(LIQUIDS) as Array<keyof typeof LIQUIDS>).map((k) => [k, L(W[k], lang)])} onChange={setLiq} />
        <Slider label={L(W.volume, lang)} value={vol} min={100} max={1000} step={100} unit={L(U.cm3, lang)} digits={0} lang={lang} onChange={setVol} />
      </Controls>
    </ArtFrame>
  );
}

function Depth({ spec, lang }: SimProps) {
  const [h, setH] = useState(0.5);
  const [liq, setLiq] = useState<keyof typeof LIQUIDS>("water");
  const [rl, cl] = LIQUIDS[liq];
  const p = rl * 10 * h;
  const top = 30, bottom = 190, depthPx = (bottom - top) / 1; // 1 m tank
  const y = top + h * depthPx;
  const dh = Math.min(60, p / 400); // manometer level difference, px
  const holes = [0.3, 0.6, 0.9];
  return (
    <ArtFrame kind="experiment" title={L(W.depth, lang)} body={spec.body || L(W.depthHint, lang)}>
      <Stage w={320} h={200} label={L(W.depth, lang)}>
        <rect x="40" y={top} width="120" height={bottom - top} fill={cl} opacity="0.75" />
        <polyline points={`40,20 40,${bottom} 160,${bottom} 160,20`} fill="none" stroke="#475569" strokeWidth="3" />
        {holes.map((d) => {
          const hy = top + d * depthPx;
          const reach = Math.sqrt(d) * 70;
          return <path key={d} d={`M160 ${hy} Q ${160 + reach * 0.6} ${hy - 4} ${160 + reach} ${bottom + 4}`} fill="none" stroke={cl} strokeWidth="3.5" className="sim-flow" strokeDasharray="6 4" />;
        })}
        <line x1="100" y1="10" x2="100" y2={y} stroke="#475569" strokeWidth="2" />
        <rect x="88" y={y - 3} width="24" height="6" rx="2" fill="#e11d48" />
        <line x1="40" x2="160" y1={y} y2={y} stroke="#e11d48" strokeDasharray="3 3" />
        <text x="44" y={y - 4} className="sim-tag" fill="#e11d48">h = {fmt(h, 2, lang)} {L(U.m, lang)}</text>
        <path d={`M100 10 L 250 10 L 250 40`} fill="none" stroke="#475569" strokeWidth="2" />
        <path d="M250 40 L 250 160 Q 250 176 266 176 Q 282 176 282 160 L 282 60" fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        <path d={`M250 ${110 + dh / 2} L 250 160 Q 250 176 266 176 Q 282 176 282 160 L 282 ${110 - dh / 2}`} fill="none" stroke="#e11d48" strokeWidth="4" />
        <text x="292" y={112} className="sim-tag" fill="#e11d48">Δh</text>
      </Stage>
      <Readouts items={[[L(W.pressure, lang), `${fmt(p / 1000, 2, lang)} ${L(U.kPa, lang)}`, "#e11d48"], ["ρ", `${rl} ${L(U.kgm3, lang)}`]]} />
      <Controls>
        <Choice value={liq} options={(["water", "oil", "salt"] as const).map((k) => [k, L(W[k], lang)])} onChange={setLiq} />
        <Slider label={L(W.depthL, lang)} value={h} min={0} max={1} step={0.05} unit={L(U.m, lang)} digits={2} lang={lang} onChange={setH} />
      </Controls>
    </ArtFrame>
  );
}

function Vessels({ spec, lang }: SimProps) {
  const [w, setW] = useState(60);
  const [oil, setOil] = useState(false);
  const level = 170 - w * 1.4;
  const oilH = 40; // px of oil on the right arm
  // with oil on the right (ρ 900), water on the right is lower by 0.9·oilH relative to the left level
  const lw = oil ? level - oilH * 0.9 * 0.5 : level;
  const rw = oil ? level + oilH * 0.9 * 0.5 : level;
  return (
    <ArtFrame kind="experiment" title={L(W.vessels, lang)} body={spec.body || L(W.vesselsHint, lang)}>
      <Stage w={320} h={200} label={L(W.vessels, lang)}>
        <defs>
          <clipPath id="vessels-clip">
            <path d="M30 20 L 30 180 L 290 180 L 290 20 L 270 20 L 270 160 L 236 160 L 236 20 L 222 20 L 222 160 L 196 160 L 180 20 L 140 20 L 124 160 L 96 160 L 96 20 L 60 20 L 60 160 L 46 160 L 46 20 Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#vessels-clip)">
          <rect x="0" y={oil ? lw : level} width="220" height="200" fill="#7dd3fc" style={{ transition: "y 600ms ease" }} />
          <rect x="220" y={oil ? rw : level} width="100" height="200" fill="#7dd3fc" style={{ transition: "y 600ms ease" }} />
          {oil ? <rect x="236" y={rw - oilH} width="40" height={oilH} fill="#fde047" /> : null}
        </g>
        <path d="M30 20 L 30 180 L 290 180 L 290 20 M46 20 L 46 160 L 60 160 L 60 20 M96 20 L 96 160 L 124 160 L 140 20 M180 20 L 196 160 L 222 160 L 222 20 M236 20 L 236 160 L 270 160 L 270 20" fill="none" stroke="#475569" strokeWidth="2.5" />
        <line x1="20" x2="300" y1={oil ? lw : level} y2={oil ? lw : level} stroke="#0284c7" strokeDasharray="4 3" />
      </Stage>
      {oil ? <Note>h(oil) · 900 = h(water) · 1000</Note> : null}
      <Controls>
        <Slider label={L(W.water2, lang)} value={w} min={20} max={90} step={5} unit="%" digits={0} lang={lang} onChange={setW} />
        <div className="art-chips"><button type="button" className={`art-chip${oil ? " is-active" : ""}`} onClick={() => setOil(!oil)}>{L(W.addOil, lang)}</button></div>
      </Controls>
    </ArtFrame>
  );
}

function Press({ spec, lang }: SimProps) {
  const [a1, setA1] = useState(2);
  const [a2, setA2] = useState(40);
  const [f1, setF1] = useState(100);
  const f2 = (f1 * a2) / a1;
  const p = f1 / (a1 / 1e4);
  const d1 = Math.min(40, f1 / 6); // small piston travel, px
  const d2 = (d1 * a1) / a2;
  const w1 = 8 + a1 * 3, w2 = 30 + a2 * 1.6;
  const N = L(U.N, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.press, lang)} body={spec.body || L(W.pressHint, lang)}>
      <Stage w={320} h={200} label={L(W.press, lang)}>
        <path d={`M ${70 - w1 / 2} 60 L ${70 - w1 / 2} 170 L ${220 + w2 / 2} 170 L ${220 + w2 / 2} 70 M ${70 + w1 / 2} 60 L ${70 + w1 / 2} 150 L ${220 - w2 / 2} 150 L ${220 - w2 / 2} 70`} fill="none" stroke="#475569" strokeWidth="3" />
        <rect x={70 - w1 / 2 + 1.5} y={80 + d1} width={w1 - 3} height={90 - d1} fill="#fde68a" />
        <rect x={70 + w1 / 2} y="150" width={150 - w1 / 2 - w2 / 2} height="20" fill="#fde68a" />
        <rect x={220 - w2 / 2 + 1.5} y={100 - d2} width={w2 - 3} height={70 + d2} fill="#fde68a" />
        <rect x={70 - w1 / 2 + 1.5} y={72 + d1} width={w1 - 3} height="8" fill="#475569" />
        <rect x={220 - w2 / 2 + 1.5} y={92 - d2} width={w2 - 3} height="8" fill="#475569" />
        <Arrow x1={70} y1={30 + d1} x2={70} y2={70 + d1} color="#e11d48" label={`F₁ ${f1} ${N}`} />
        <Arrow x1={220} y1={90 - d2} x2={220} y2={90 - d2 - Math.min(70, f2 / 30)} color="#059669" label={`F₂ ${fmt(f2, 0, lang)} ${N}`} />
      </Stage>
      <Readouts items={[[L(W.pressure, lang), `${fmt(p / 1000, 0, lang)} ${L(U.kPa, lang)}`], [L(W.f2, lang), `${fmt(f2, 0, lang)} ${N}`, "#059669"], [L(W.gain, lang), `× ${fmt(a2 / a1, 1, lang)}`, "#7c3aed"]]} />
      <Controls>
        <Slider label={L(W.f1, lang)} value={f1} min={0} max={200} step={10} unit={N} digits={0} lang={lang} onChange={setF1} />
        <Slider label={L(W.a1, lang)} value={a1} min={1} max={10} unit={L(U.cm2, lang)} digits={0} lang={lang} onChange={setA1} />
        <Slider label={L(W.a2, lang)} value={a2} min={10} max={60} step={5} unit={L(U.cm2, lang)} digits={0} lang={lang} onChange={setA2} />
      </Controls>
    </ArtFrame>
  );
}

function SolidP({ spec, lang }: SimProps) {
  const [face, setFace] = useState<"flat" | "edge" | "end">("flat");
  const dims = { flat: [25, 12, 6.5], edge: [25, 6.5, 12], end: [12, 6.5, 25] } as const; // width, depth, height in cm
  const [w, d, h] = dims[face];
  const P = 35; // N, a brick of 3.5 kg
  const area = w * d;
  const p = P / (area / 1e4);
  const dent = Math.min(26, p / 400);
  return (
    <ArtFrame kind="experiment" title={L(W.solid, lang)} body={spec.body || L(W.solidHint, lang)}>
      <Stage w={320} h={190} label={L(W.solid, lang)}>
        <rect y="130" width="320" height="60" fill="#e7cf9b" />
        <rect x={160 - w * 3} y={130 + dent - h * 3} width={w * 6} height={h * 3} fill="#c2410c" stroke="#7c2d12" strokeWidth="2" style={{ transition: "all 600ms ease" }} />
        <path d={`M ${160 - w * 3 - 6} 130 Q ${160 - w * 3} ${130 + dent} ${160 - w * 3 + 4} ${130 + dent} L ${160 + w * 3 - 4} ${130 + dent} Q ${160 + w * 3} ${130 + dent} ${160 + w * 3 + 6} 130`} fill="none" stroke="#a16207" strokeWidth="2" />
      </Stage>
      <Readouts items={[[L(W.weight, lang), `${P} ${L(U.N, lang)}`], [L(W.area, lang), `${fmt(area, 0, lang)} ${L(U.cm2, lang)}`], [L(W.pressure, lang), `${fmt(p, 0, lang)} ${L(U.Pa, lang)}`, "#e11d48"]]} />
      <Controls>
        <Choice value={face} options={[["flat", L(W.flat, lang)], ["edge", L(W.edge, lang)], ["end", L(W.end, lang)]]} onChange={setFace} />
      </Controls>
    </ArtFrame>
  );
}

function Atm({ spec, lang }: SimProps) {
  const [alt, setAlt] = useState(0);
  const mm = 760 * Math.exp(-alt / 8400);
  const boil = 100 - alt / 300;
  const colTop = 190 - mm * 0.2;
  const presets: Array<[number, string]> = [[0, L(W.sea, lang)], [990, L(W.yerevan, lang)], [4090, L(W.aragats, lang)], [8849, L(W.everest, lang)]];
  return (
    <ArtFrame kind="experiment" title={L(W.atm, lang)} body={spec.body || L(W.atmHint, lang)}>
      <Stage w={320} h={200} label={L(W.atm, lang)}>
        <rect x="30" y="170" width="100" height="24" rx="4" fill="#cbd5e1" stroke="#475569" />
        <rect x="70" y="20" width="20" height="170" rx="4" fill="#fff" stroke="#475569" strokeWidth="2" />
        <rect x="72" y={colTop} width="16" height={190 - colTop} fill="#94a3b8" style={{ transition: "all 500ms ease" }} />
        <text x="96" y={colTop + 4} className="sim-tag" fill="#1e1b4b">{fmt(mm, 0, lang)} {L(U.mm, lang)}</text>
        {Array.from({ length: 6 }, (_, i) => <Arrow key={i} x1={36 + i * 18} y1={140} x2={36 + i * 18} y2={166} color="#0284c7" width={2} head={6} />)}
        <path d={`M170 190 L 230 ${190 - alt / 70} L 300 190 Z`} fill="#a3a3a3" />
        <circle cx={230} cy={186 - alt / 70} r="4" fill="#e11d48" />
      </Stage>
      <Readouts items={[[L(W.column, lang), `${fmt(mm, 0, lang)} ${L(U.mm, lang)}`], [L(W.pressure, lang), `${fmt((mm * 133.3) / 1000, 1, lang)} ${L(U.kPa, lang)}`, "#0284c7"], [L(W.boil, lang), `${fmt(boil, 0, lang)} °C`, "#e11d48"]]} />
      <Controls>
        <Slider label={L(W.height, lang)} value={alt} min={0} max={9000} step={100} unit={L(U.m, lang)} digits={0} lang={lang} onChange={setAlt} />
        <Choice value={String(alt)} options={presets.map(([a, n]) => [String(a), n] as [string, string])} onChange={(v) => setAlt(Number(v))} />
      </Controls>
    </ArtFrame>
  );
}
