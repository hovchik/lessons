"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Graph, Note, PlayBar, Readouts, Slider, Stage, useClock, useLoop } from "../kit";
import { L, t, un } from "../labels";

const W = {
  heating: t("Experiment: heating ice into steam", "Փորձ․ սառույցից մինչև գոլորշի", "Опыт: от льда до пара"),
  heatingHint: t(
    "Switch on the burner and watch the thermometer. While ice melts and while water boils the temperature stands still: all the heat goes into changing the state.",
    "Միացրո՛ւ այրիչը և հետևի՛ր ջերմաչափին։ Սառույցը հալվելիս և ջուրը եռալիս ջերմաստիճանը չի փոխվում․ ամբողջ ջերմությունը ծախսվում է վիճակի փոփոխության վրա։",
    "Включи горелку и смотри на термометр. Пока лёд тает и пока вода кипит, температура стоит на месте: вся теплота идёт на смену состояния.",
  ),
  mix: t("Experiment: mixing hot and cold water", "Փորձ․ տաք և սառը ջրի խառնում", "Опыт: смешиваем горячую и холодную воду"),
  mixHint: t(
    "The hot water gives away exactly as much heat as the cold water takes: c·m₁·(t₁ − t) = c·m₂·(t − t₂).",
    "Տաք ջուրը տալիս է ճիշտ այնքան ջերմություն, որքան ստանում է սառը ջուրը․ c·m₁·(t₁ − t) = c·m₂·(t − t₂)։",
    "Горячая вода отдаёт ровно столько теплоты, сколько получает холодная: c·m₁·(t₁ − t) = c·m₂·(t − t₂).",
  ),
  pv: t("Experiment: gas processes", "Փորձ․ գազային պրոցեսներ", "Опыт: газовые процессы"),
  pvHint: t(
    "Choose a process and move the slider. The cylinder and the p–V diagram change together. The shaded area under the line is the work of the gas.",
    "Ընտրի՛ր պրոցեսը և շարժի՛ր սահիչը։ Գլանը և p–V դիագրամը փոխվում են միասին։ Գծի տակի ներկված մակերեսը գազի աշխատանքն է։",
    "Выбери процесс и двигай ползунок. Цилиндр и диаграмма p–V меняются вместе. Закрашенная площадь под линией — работа газа.",
  ),
  cycle: t("Experiment: a heat engine cycle", "Փորձ․ ջերմային շարժիչի ցիկլ", "Опыт: цикл теплового двигателя"),
  cycleHint: t(
    "The gas takes heat from the hot body, does work, and gives the rest to the cold body. Raise the heater temperature and watch the best possible efficiency (Carnot).",
    "Գազը ջերմություն է ստանում տաքացուցիչից, աշխատանք կատարում և մնացածը տալիս սառնարանին։ Բարձրացրո՛ւ տաքացուցիչի ջերմաստիճանը և հետևի՛ր հնարավոր առավելագույն ՕԳԳ-ին (Կառնո)։",
    "Газ берёт теплоту у нагревателя, совершает работу и отдаёт остаток холодильнику. Подними температуру нагревателя и следи за наибольшим возможным КПД (Карно).",
  ),
  transfer: t("Three ways heat travels", "Ջերմության փոխանցման երեք եղանակ", "Три способа передачи тепла"),
  transferHint: t(
    "Switch between conduction, convection and radiation and compare what carries the heat each time.",
    "Անցի՛ր ջերմահաղորդականությունից կոնվեկցիային և ճառագայթմանը և համեմատի՛ր, թե ամեն անգամ ինչն է տեղափոխում ջերմությունը։",
    "Переключай теплопроводность, конвекцию и излучение и сравни, что каждый раз переносит тепло.",
  ),
  power: t("Burner power", "Այրիչի հզորություն", "Мощность горелки"),
  ice: t("ice warms up", "սառույցը տաքանում է", "лёд нагревается"),
  melting: t("melting at 0 °C", "հալվում է 0 °C-ում", "плавится при 0 °C"),
  water: t("water warms up", "ջուրը տաքանում է", "вода нагревается"),
  boiling: t("boiling at 100 °C", "եռում է 100 °C-ում", "кипит при 100 °C"),
  steam: t("steam", "գոլորշի", "пар"),
  heat: t("Heat given", "Տրված ջերմություն", "Подведено теплоты"),
  m1: t("Hot water", "Տաք ջուր", "Горячая вода"),
  m2: t("Cold water", "Սառը ջուր", "Холодная вода"),
  final: t("Final temperature", "Վերջնական ջերմաստիճան", "Конечная температура"),
  given: t("given away", "տրված", "отдано"),
  taken: t("taken in", "ստացված", "получено"),
  isothermal: t("isothermal (T const)", "իզոթերմ (T = const)", "изотермический (T = const)"),
  isobaric: t("isobaric (p const)", "իզոբար (p = const)", "изобарный (p = const)"),
  isochoric: t("isochoric (V const)", "իզոխոր (V = const)", "изохорный (V = const)"),
  adiabatic: t("adiabatic (Q = 0)", "ադիաբատ (Q = 0)", "адиабатный (Q = 0)"),
  state: t("Change", "Փոփոխություն", "Изменение"),
  work: t("Work of the gas A", "Գազի աշխատանք A", "Работа газа A"),
  th: t("Heater T₁", "Տաքացուցիչ T₁", "Нагреватель T₁"),
  tc: t("Cooler T₂", "Սառնարան T₂", "Холодильник T₂"),
  carnot: t("Carnot efficiency", "Կառնոյի ՕԳԳ", "КПД Карно"),
  conduction: t("Conduction", "Ջերմահաղորդականություն", "Теплопроводность"),
  convection: t("Convection", "Կոնվեկցիա", "Конвекция"),
  radiation: t("Radiation", "Ճառագայթում", "Излучение"),
  condNote: t("Particles pass the shaking on to their neighbours. Metal does it fast, wood and air slowly: the wax pins fall one by one.", "Մասնիկները տատանումը փոխանցում են հարևաններին։ Մետաղը դա անում է արագ, փայտն ու օդը՝ դանդաղ․ մոմե գնդիկները ընկնում են մեկը մյուսի հետևից։", "Частицы передают колебания соседям. Металл делает это быстро, дерево и воздух — медленно: восковые шарики падают по очереди."),
  convNote: t("Warm water is lighter and rises, cold water sinks: the liquid itself carries the heat round in a loop.", "Տաք ջուրն ավելի թեթև է և բարձրանում է, սառը ջուրն իջնում է․ հեղուկն ինքն է շրջանաձև տեղափոխում ջերմությունը։", "Тёплая вода легче и поднимается, холодная опускается: сама жидкость переносит тепло по кругу."),
  radNote: t("Rays carry energy even through empty space. A dark surface absorbs them and warms faster than a shiny white one.", "Ճառագայթները էներգիա են տեղափոխում նույնիսկ դատարկ տարածությամբ։ Մուգ մակերևույթը կլանում է դրանք և ավելի արագ է տաքանում, քան փայլուն սպիտակը։", "Лучи переносят энергию даже через пустоту. Тёмная поверхность поглощает их и нагревается быстрее, чем блестящая белая."),
  copper: t("copper", "պղինձ", "медь"),
  steel: t("steel", "պողպատ", "сталь"),
  glass: t("glass", "ապակի", "стекло"),
  wood: t("wood", "փայտ", "дерево"),
};
const U = { kJ: t("kJ", "կՋ", "кДж"), kg: t("kg", "կգ", "кг"), kW: t("kW", "կՎտ", "кВт") };

export default function Thermo({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "heating";
  if (m === "mix") return <Mix spec={spec} lang={lang} />;
  if (m === "pv") return <PV spec={spec} lang={lang} />;
  if (m === "cycle") return <Cycle spec={spec} lang={lang} />;
  if (m === "transfer") return <Transfer spec={spec} lang={lang} />;
  return <Heating spec={spec} lang={lang} />;
}

// 1 kg of ice from −20 °C: c_ice 2.1, λ 330, c_water 4.2, L 2300 kJ
const STAGES = [
  { q: 42, from: -20, to: 0 },
  { q: 330, from: 0, to: 0 },
  { q: 420, from: 0, to: 100 },
  { q: 2300, from: 100, to: 100 },
  { q: 40, from: 100, to: 120 },
];
const QTOT = STAGES.reduce((s, x) => s + x.q, 0);
function tempAt(q: number) {
  let rest = q;
  for (let i = 0; i < STAGES.length; i++) {
    const s = STAGES[i];
    if (rest <= s.q) return { T: s.from + ((s.to - s.from) * rest) / s.q, stage: i, part: rest / s.q };
    rest -= s.q;
  }
  return { T: 120, stage: 4, part: 1 };
}

function Heating({ spec, lang }: SimProps) {
  const [P, setP] = useState(2); // kW
  const clock = useClock();
  const q = Math.min(QTOT, clock.t * P * 40); // kJ, fast-forwarded
  const { T, stage, part } = tempAt(q);
  const names = [W.ice, W.melting, W.water, W.boiling, W.steam];
  const pts: Array<[number, number]> = [];
  for (let k = 0; k <= 120; k++) {
    const qq = (k / 120) * q;
    pts.push([qq, tempAt(qq).T]);
  }
  const iceLeft = stage === 0 ? 1 : stage === 1 ? 1 - part : 0;
  const water = stage === 0 ? 0 : stage === 1 ? part : stage === 2 ? 1 : stage === 3 ? 1 - part : 0;
  const bub = useLoop(1.2, stage >= 2);
  return (
    <ArtFrame kind="experiment" title={L(W.heating, lang)} body={spec.body || L(W.heatingHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={200} h={200} label={L(W.heating, lang)}>
          <path d="M40 40 L 40 150 Q 40 160 50 160 L 150 160 Q 160 160 160 150 L 160 40" fill="#fff" stroke="#475569" strokeWidth="3" />
          {water > 0 ? <rect x="42" y={158 - 70 * water} width="116" height={70 * water} fill="#7dd3fc" opacity="0.8" /> : null}
          {Array.from({ length: Math.ceil(6 * iceLeft) }, (_, i) => (
            <rect key={i} x={52 + (i % 3) * 32} y={128 - Math.floor(i / 3) * 26} width="26" height="24" rx="4" fill="#e0f2fe" stroke="#93c5fd" strokeWidth="2" />
          ))}
          {stage >= 2 ? Array.from({ length: stage === 3 ? 8 : 3 }, (_, i) => <circle key={i} cx={56 + i * 13} cy={150 - ((bub + i / 8) % 1) * 70} r={stage === 3 ? 4 : 2} fill="#fff" stroke="#38bdf8" />) : null}
          {stage >= 3 ? Array.from({ length: 4 }, (_, i) => <path key={i} d={`M ${70 + i * 20} ${36 - bub * 10} q 6 -8 0 -16 q -6 -8 0 -16`} fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" opacity={0.8 - bub * 0.6} />) : null}
          <path d="M70 182 q 10 -18 20 -6 q 6 -16 12 -4 q 10 -14 18 6 Z" fill="#f97316" opacity={clock.playing ? 1 : 0.25} />
          <rect x="60" y="178" width="80" height="8" rx="3" fill="#475569" />
          <text x="100" y="24" textAnchor="middle" className="sim-tag" fill="#e11d48">{fmt(T, 0, lang)} °C</text>
        </Stage>
        <div>
          <Graph x={[0, QTOT]} y={[-20, 120]} xLabel={`Q, ${L(U.kJ, lang)}`} yLabel="t, °C" series={[{ pts, color: "#e11d48" }]} />
          <Note>{L(names[stage], lang)}</Note>
          <Readouts items={[[L(W.heat, lang), `${fmt(q, 0, lang)} ${L(U.kJ, lang)}`]]} />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.power, lang)} value={P} min={1} max={5} unit={L(U.kW, lang)} digits={0} lang={lang} onChange={setP} />
      </Controls>
      <PlayBar clock={clock} lang={lang} noSlow />
    </ArtFrame>
  );
}

function Mix({ spec, lang }: SimProps) {
  const [m1, setM1] = useState(1);
  const [t1, setT1] = useState(80);
  const [m2, setM2] = useState(2);
  const [t2, setT2] = useState(20);
  const tf = (m1 * t1 + m2 * t2) / (m1 + m2);
  const q = 4.2 * m1 * (t1 - tf);
  const glass = (x: number, m: number, temp: number, label: string) => (
    <g transform={`translate(${x} 0)`}>
      <path d="M0 40 L 6 150 L 54 150 L 60 40" fill="#fff" stroke="#475569" strokeWidth="2.5" />
      <path d={`M${5 - 0.6 * (1 - m / 3) * 10} ${150 - m * 33} L 6 150 L 54 150 L ${55 + 0.6 * (1 - m / 3) * 10} ${150 - m * 33} Z`} fill={`hsl(${220 - temp * 2.2} 85% 65%)`} opacity="0.85" />
      <text x="30" y="168" textAnchor="middle" className="sim-tag" fill="#1e1b4b">{label}</text>
      <text x="30" y="34" textAnchor="middle" className="sim-tag" fill="#e11d48">{fmt(temp, 0, lang)} °C</text>
    </g>
  );
  return (
    <ArtFrame kind="experiment" title={L(W.mix, lang)} body={spec.body || L(W.mixHint, lang)}>
      <Stage w={320} h={180} label={L(W.mix, lang)}>
        {glass(20, m1, t1, `${fmt(m1, 1, lang)} ${L(U.kg, lang)}`)}
        <text x="100" y="100" textAnchor="middle" className="sim-tag" fill="#1e1b4b">+</text>
        {glass(118, m2, t2, `${fmt(m2, 1, lang)} ${L(U.kg, lang)}`)}
        <text x="198" y="100" textAnchor="middle" className="sim-tag" fill="#1e1b4b">=</text>
        <g transform="translate(220 0)">
          <path d="M0 40 L 6 150 L 84 150 L 90 40" fill="#fff" stroke="#475569" strokeWidth="2.5" />
          <rect x="6" y={150 - (m1 + m2) * 18} width="78" height={(m1 + m2) * 18} fill={`hsl(${220 - tf * 2.2} 85% 65%)`} opacity="0.85" />
          <text x="45" y="34" textAnchor="middle" className="sim-tag" fill="#e11d48">{fmt(tf, 1, lang)} °C</text>
        </g>
      </Stage>
      <Readouts items={[[L(W.final, lang), `${fmt(tf, 1, lang)} °C`, "#e11d48"], [`Q ${L(W.given, lang)}`, `${fmt(q, 0, lang)} ${L(U.kJ, lang)}`, "#dc2626"], [`Q ${L(W.taken, lang)}`, `${fmt(4.2 * m2 * (tf - t2), 0, lang)} ${L(U.kJ, lang)}`, "#2563eb"]]} />
      <div className="sim-layout is-even">
        <Controls>
          <p className="art-ctrl-label" style={{ color: "#dc2626" }}>{L(W.m1, lang)}</p>
          <Slider label="m₁" value={m1} min={0.5} max={3} step={0.5} unit={L(U.kg, lang)} lang={lang} onChange={setM1} />
          <Slider label="t₁" value={t1} min={40} max={100} step={5} unit="°C" digits={0} lang={lang} onChange={setT1} />
        </Controls>
        <Controls>
          <p className="art-ctrl-label" style={{ color: "#2563eb" }}>{L(W.m2, lang)}</p>
          <Slider label="m₂" value={m2} min={0.5} max={3} step={0.5} unit={L(U.kg, lang)} lang={lang} onChange={setM2} />
          <Slider label="t₂" value={t2} min={0} max={40} step={5} unit="°C" digits={0} lang={lang} onChange={setT2} />
        </Controls>
      </div>
    </ArtFrame>
  );
}

type Proc = "isothermal" | "isobaric" | "isochoric" | "adiabatic";
function PV({ spec, lang }: SimProps) {
  const [proc, setProc] = useState<Proc>((spec.opts.process as Proc) ?? "isothermal");
  const [s, setS] = useState(50); // 0..100
  const p0 = 2, V0 = 2, T0 = 300; // p in 100 kPa, V in litres
  const k = s / 100;
  const state = (kk: number) => {
    let V = V0 + kk * 4, p = p0;
    if (proc === "isothermal") p = (p0 * V0) / V;
    else if (proc === "isochoric") { V = V0 + 1; p = 1 + kk * 3; }
    else if (proc === "adiabatic") p = p0 * (V0 / V) ** 1.4;
    return { V, p, T: (T0 * p * V) / (p0 * V0) };
  };
  const cur = state(k);
  const curve = Array.from({ length: 41 }, (_, i) => { const st = state(i / 40); return [st.V, st.p] as [number, number]; });
  const upto = curve.filter((_, i) => i / 40 <= k + 1e-9);
  let A = 0;
  for (let i = 1; i < upto.length; i++) A += ((upto[i][1] + upto[i - 1][1]) / 2) * (upto[i][0] - upto[i - 1][0]);
  const pistonX = 40 + cur.V * 32;
  const hot = Math.min(1, Math.max(0, (cur.T - 150) / 600));
  return (
    <ArtFrame kind="experiment" title={L(W.pv, lang)} body={spec.body || L(W.pvHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={300} h={160} label={L(W.pv, lang)}>
          <path d="M260 30 L 36 30 L 36 130 L 260 130" fill="none" stroke="#475569" strokeWidth="4" />
          <rect x="38" y="32" width={pistonX - 38} height="96" fill={`hsl(${220 - hot * 220} 85% ${90 - hot * 20}%)`} />
          <rect x={pistonX} y="30" width="10" height="100" fill="#64748b" />
          <rect x={pistonX + 10} y="76" width={290 - pistonX} height="8" fill="#94a3b8" />
          <text x="44" y="148" className="sim-tag" fill="#1e1b4b">p = {fmt(cur.p * 100, 0, lang)} {un("kPa", lang)} · V = {fmt(cur.V, 1, lang)} {un("L", lang)} · T = {fmt(cur.T, 0, lang)} {un("K", lang)}</text>
        </Stage>
        <Graph x={[0, 7]} y={[0, 4.5]} xLabel="V, L" yLabel="p, 100 kPa" series={[{ pts: curve, color: "#94a3b8", dash: "4 3" }, { pts: upto, color: "#e11d48" }, ...(proc !== "isochoric" ? [{ pts: [[upto[0][0], 0], ...upto, [upto[upto.length - 1][0], 0]] as Array<[number, number]>, color: "#fda4af" }] : [])]} dots={[[cur.V, cur.p, "#e11d48"]]} />
      </div>
      <Readouts items={[[L(W.work, lang), `${fmt(A * 100, 0, lang)} ${un("J", lang)}`, "#e11d48"]]} />
      <Controls>
        <Choice value={proc} options={(["isothermal", "isobaric", "isochoric", "adiabatic"] as Proc[]).map((p) => [p, L(W[p], lang)])} onChange={(p) => { setProc(p); setS(0); }} />
        <Slider label={L(W.state, lang)} value={s} min={0} max={100} step={5} unit="%" digits={0} lang={lang} onChange={setS} />
      </Controls>
    </ArtFrame>
  );
}

function Cycle({ spec, lang }: SimProps) {
  const [th, setTh] = useState(600);
  const [tc, setTc] = useState(300);
  const eta = 1 - tc / th;
  const p = useLoop(4);
  // a rounded loop on the p–V plane
  const loop = Array.from({ length: 81 }, (_, i) => {
    const a = (i / 80) * 2 * Math.PI;
    return [3.5 + 2.2 * Math.cos(a), 2.2 + (1 + eta) * Math.sin(a)] as [number, number];
  });
  const cur = loop[Math.floor(p * 80)];
  const q1 = 1000, a = q1 * eta;
  return (
    <ArtFrame kind="experiment" title={L(W.cycle, lang)} body={spec.body || L(W.cycleHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={300} h={190} label={L(W.cycle, lang)}>
          <rect x="20" y="20" width="80" height="40" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="60" y="44" textAnchor="middle" className="sim-tag" fill="#991b1b">{th} {un("K", lang)}</text>
          <rect x="20" y="130" width="80" height="40" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="60" y="154" textAnchor="middle" className="sim-tag" fill="#1e40af">{tc} {un("K", lang)}</text>
          <circle cx="60" cy="95" r="18" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="60" y="99" textAnchor="middle" className="sim-tag is-plain" fill="#1e1b4b">⚙</text>
          <Arrow x1={60} y1={60} x2={60} y2={77} color="#dc2626" width={6} label="" />
          <Arrow x1={60} y1={113} x2={60} y2={130} color="#2563eb" width={2 + 4 * (1 - eta)} />
          <Arrow x1={78} y1={95} x2={78 + 70 * eta + 10} y2={95} color="#059669" width={2 + 6 * eta} label={`A = ${fmt(a, 0, lang)} ${un("J", lang)}`} />
          <text x="104" y="40" className="sim-tag" fill="#dc2626">Q₁ = {q1} {un("J", lang)}</text>
          <text x="104" y="160" className="sim-tag" fill="#2563eb">Q₂ = {fmt(q1 - a, 0, lang)} {un("J", lang)}</text>
        </Stage>
        <Graph x={[0, 7]} y={[0, 5]} xLabel="V" yLabel="p" series={[{ pts: loop, color: "#7c3aed" }]} dots={[[cur[0], cur[1], "#e11d48"]]} />
      </div>
      <Readouts items={[[L(W.carnot, lang), `${fmt(eta * 100, 0, lang)} %`, "#059669"], ["1 − T₂/T₁", `1 − ${tc}/${th}`]]} />
      <Controls>
        <Slider label={L(W.th, lang)} value={th} min={350} max={1200} step={50} unit={un("K", lang)} digits={0} lang={lang} onChange={(v) => setTh(Math.max(v, tc + 50))} />
        <Slider label={L(W.tc, lang)} value={tc} min={250} max={400} step={10} unit={un("K", lang)} digits={0} lang={lang} onChange={(v) => setTc(Math.min(v, th - 50))} />
      </Controls>
    </ArtFrame>
  );
}

const RODS = { copper: 3, steel: 1.3, glass: 0.25, wood: 0.1 } as const;
function Transfer({ spec, lang }: SimProps) {
  const [way, setWay] = useState<"conduction" | "convection" | "radiation">((spec.opts.way as "conduction") ?? "conduction");
  const [rod, setRod] = useState<keyof typeof RODS>("copper");
  const clock = useClock({ autoplay: true });
  const loop = useLoop(3);
  const reach = Math.min(1, (clock.t * RODS[rod]) / 12);
  return (
    <ArtFrame kind="experiment" title={L(W.transfer, lang)} body={spec.body || L(W.transferHint, lang)}>
      <Choice value={way} options={[["conduction", L(W.conduction, lang)], ["convection", L(W.convection, lang)], ["radiation", L(W.radiation, lang)]]} onChange={(w) => { setWay(w); clock.reset(); clock.setPlaying(true); }} />
      <div style={{ marginTop: "0.6rem" }}>
        {way === "conduction" ? (
          <Stage w={320} h={150} label={L(W.conduction, lang)}>
            <defs>
              <linearGradient id="rodheat" x1="0" x2="1">
                <stop offset="0" stopColor="#ef4444" />
                <stop offset={Math.max(0.01, reach)} stopColor="#fb923c" />
                <stop offset={Math.min(1, reach + 0.05)} stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
            <rect x="40" y="50" width="250" height="14" rx="4" fill="url(#rodheat)" stroke="#475569" />
            <path d="M30 110 q 10 -30 20 -10 q 6 -26 14 -6 q 10 -20 16 10 Z" fill="#f97316" />
            {Array.from({ length: 6 }, (_, i) => {
              const at = (i + 1) / 7;
              const fallen = reach > at;
              return <circle key={i} cx={40 + at * 250} cy={fallen ? 132 : 70} r="5" fill="#fef08a" stroke="#ca8a04" style={{ transition: "cy 500ms ease-in" }} />;
            })}
            <line x1="0" x2="320" y1="138" y2="138" stroke="#cbd5e1" />
          </Stage>
        ) : way === "convection" ? (
          <Stage w={320} h={170} label={L(W.convection, lang)}>
            <rect x="90" y="20" width="140" height="120" rx="6" fill="#e0f2fe" stroke="#475569" strokeWidth="3" />
            {Array.from({ length: 14 }, (_, i) => {
              const a = ((loop + i / 14) % 1) * 2 * Math.PI;
              const x = 160 + 45 * Math.cos(a), y = 80 + 42 * Math.sin(a);
              const warm = Math.sin(a) > 0 ? 0.3 : 1; // bottom is warm
              return <circle key={i} cx={x} cy={y} r="5" fill={`hsl(${warm > 0.5 ? 0 : 210} 80% 60%)`} />;
            })}
            <path d="M118 80 A 42 42 0 0 1 202 80" fill="none" stroke="#94a3b8" strokeDasharray="4 4" />
            <path d="M120 156 q 10 -20 20 -6 q 6 -18 12 -4 q 10 -14 18 6 Z" fill="#f97316" transform="translate(28 -12)" />
          </Stage>
        ) : (
          <Stage w={320} h={170} label={L(W.radiation, lang)} bg="#0f172a">
            <circle cx="50" cy="85" r="28" fill="#facc15" />
            {Array.from({ length: 5 }, (_, i) => (
              <line key={i} x1={84} y1={45 + i * 20} x2={240} y2={45 + i * 20} stroke="#fde047" strokeWidth="2" strokeDasharray="8 6" className="sim-flow" />
            ))}
            <rect x="240" y="40" width="22" height="40" fill="#111827" stroke="#e5e7eb" />
            <rect x="240" y="92" width="22" height="40" fill="#f8fafc" stroke="#e5e7eb" />
            <rect x="280" y={80 - Math.min(36, clock.t * 4)} width="8" height={Math.min(36, clock.t * 4)} fill="#ef4444" />
            <rect x="280" y={132 - Math.min(36, clock.t * 1.5)} width="8" height={Math.min(36, clock.t * 1.5)} fill="#ef4444" />
            <rect x="280" y="44" width="8" height="36" fill="none" stroke="#e5e7eb" />
            <rect x="280" y="96" width="8" height="36" fill="none" stroke="#e5e7eb" />
          </Stage>
        )}
      </div>
      <Note>{L(way === "conduction" ? W.condNote : way === "convection" ? W.convNote : W.radNote, lang)}</Note>
      {way === "conduction" ? <Choice value={rod} options={(Object.keys(RODS) as Array<keyof typeof RODS>).map((k) => [k, L(W[k], lang)])} onChange={(r) => { setRod(r); clock.reset(); clock.setPlaying(true); }} /> : null}
    </ArtFrame>
  );
}
