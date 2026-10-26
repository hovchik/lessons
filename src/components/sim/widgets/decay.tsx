"use client";

import { useMemo, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Choice, Graph, Note, PlayBar, Readouts, Stage, Toggle, useClock, useLoop, fmt } from "../kit";
import { L, t, un } from "../labels";

const W = {
  half: t("Experiment: half-life", "Փորձ․ կիսատրոհման պարբերություն", "Опыт: период полураспада"),
  halfHint: t(
    "Each square is a radioactive nucleus. Nobody can tell when one nucleus decays, but after every half-life about half of those left have decayed.",
    "Ամեն քառակուսի ռադիոակտիվ միջուկ է։ Ոչ ոք չի կարող ասել, թե երբ կտրոհվի առանձին միջուկը, բայց ամեն կիսատրոհման պարբերությունից հետո մնացածների մոտ կեսը տրոհվում է։",
    "Каждый квадрат — радиоактивное ядро. Никто не знает, когда распадётся отдельное ядро, но за каждый период полураспада распадается примерно половина оставшихся.",
  ),
  absorb: t("Experiment: what stops radiation?", "Փորձ․ ի՞նչն է կանգնեցնում ճառագայթումը", "Опыт: что задерживает излучение?"),
  absorbHint: t(
    "Pick a kind of radiation and put a barrier in its way. Alpha is stopped by paper, beta by a few millimetres of aluminium, gamma only weakens in thick lead. A magnet bends α and β in opposite directions.",
    "Ընտրի՛ր ճառագայթման տեսակը և դի՛ր արգելք դրա ճանապարհին։ Ալֆան կանգնում է թղթից, բետան՝ մի քանի միլիմետր ալյումինից, իսկ գամման միայն թուլանում է հաստ կապարում։ Մագնիսը α-ն և β-ն շեղում է հակառակ կողմեր։",
    "Выбери вид излучения и поставь преграду. Альфа задерживается бумагой, бета — несколькими миллиметрами алюминия, гамма лишь ослабевает в толстом свинце. Магнит отклоняет α и β в разные стороны.",
  ),
  chain: t("Experiment: a chain reaction", "Փորձ․ շղթայական ռեակցիա", "Опыт: цепная реакция"),
  chainHint: t(
    "A neutron splits a uranium-235 nucleus; the fission releases 2–3 new neutrons, which split more nuclei. Control rods absorb some neutrons and keep the reaction steady.",
    "Նեյտրոնը տրոհում է ուրան-235-ի միջուկը, տրոհումից դուրս են գալիս 2–3 նոր նեյտրոններ, որոնք տրոհում են նոր միջուկներ։ Կառավարող ձողերը կլանում են նեյտրոնների մի մասը և ռեակցիան պահում են կայուն։",
    "Нейтрон делит ядро урана-235; при делении вылетают 2–3 новых нейтрона, которые делят новые ядра. Регулирующие стержни поглощают часть нейтронов и удерживают реакцию на постоянном уровне.",
  ),
  left: t("Nuclei left", "Մնացած միջուկներ", "Осталось ядер"),
  isotope: t("Isotope", "Իզոտոպ", "Изотоп"),
  theory: t("N = N₀·2^(−t/T)", "N = N₀·2^(−t/T)", "N = N₀·2^(−t/T)"),
  none: t("No barrier", "Առանց արգելքի", "Без преграды"),
  paper: t("Paper", "Թուղթ", "Бумага"),
  alu: t("Aluminium 5 mm", "Ալյումին 5 մմ", "Алюминий 5 мм"),
  lead: t("Lead 5 cm", "Կապար 5 սմ", "Свинец 5 см"),
  magnet: t("Magnetic field", "Մագնիսական դաշտ", "Магнитное поле"),
  stopped: t("Stopped", "Կանգնեց", "Задержано"),
  weaker: t("Weakened, but some still gets through", "Թուլացավ, բայց մի մասը դեռ անցնում է", "Ослабло, но часть проходит"),
  through: t("Goes through", "Անցնում է", "Проходит"),
  rods: t("Control rods", "Կառավարող ձողեր", "Регулирующие стержни"),
  out: t("Rods out", "Ձողերը դուրս", "Стержни выведены"),
  half_: t("Half in", "Կիսով չափ", "Наполовину"),
  in: t("Rods in", "Ձողերը ներս", "Стержни введены"),
  gen: t("Generation", "Սերունդ", "Поколение"),
  neutrons: t("Neutrons", "Նեյտրոններ", "Нейтроны"),
  next: t("Next generation", "Հաջորդ սերունդը", "Следующее поколение"),
  restart: t("Start again", "Սկսել նորից", "Начать заново"),
  super: t("Supercritical: the number of neutrons grows, as in a bomb.", "Գերկրիտիկական․ նեյտրոնների թիվն աճում է, ինչպես ռումբում։", "Надкритично: число нейтронов растёт, как в бомбе."),
  crit: t("Critical: each fission causes one new fission on average, as in a working reactor.", "Կրիտիկական․ միջինում ամեն տրոհում առաջացնում է մեկ նոր տրոհում, ինչպես աշխատող ռեակտորում։", "Критично: в среднем каждое деление вызывает одно новое, как в работающем реакторе."),
  sub: t("Subcritical: the reaction dies out.", "Ենթակրիտիկական․ ռեակցիան մարում է։", "Подкритично: реакция затухает."),
};

const ISOTOPES: Record<string, { name: string; half: string }> = {
  i131: { name: "¹³¹I", half: "8" },
  rn222: { name: "²²²Rn", half: "3.8" },
  c14: { name: "¹⁴C", half: "5730" },
  co60: { name: "⁶⁰Co", half: "5.3" },
};
const halfUnit = (k: string) => (k === "c14" || k === "co60" ? "years" : "days") as "years" | "days";

function seeded(n: number, seed: number) {
  let s = seed;
  return Array.from({ length: n }, () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  });
}

export default function Decay({ spec, lang }: SimProps) {
  if (spec.opts.mode === "absorb") return <Absorb spec={spec} lang={lang} />;
  if (spec.opts.mode === "chain") return <Chain spec={spec} lang={lang} />;
  return <Half spec={spec} lang={lang} />;
}

function Half({ spec, lang }: SimProps) {
  const [iso, setIso] = useState(spec.opts.isotope && ISOTOPES[spec.opts.isotope] ? spec.opts.isotope : "i131");
  const [seed, setSeed] = useState(7);
  const N0 = 100;
  const span = 5; // half-lives shown
  const clock = useClock({ until: span * 2 });
  // one half-life = 2 s of animation; each nucleus has its own random lifetime
  const life = useMemo(() => seeded(N0, seed).map((r) => (-Math.log(1 - r) / Math.LN2) * 2), [seed]);
  const s = clock.t;
  const alive = life.filter((l) => l > s).length;
  const T = Number(ISOTOPES[iso].half);
  const theory = Array.from({ length: 51 }, (_, k) => [(k * span) / 50, N0 * 2 ** (-(k * span) / 50)] as [number, number]);
  const real = Array.from({ length: 51 }, (_, k) => (k * span) / 50).filter((h) => h * 2 <= s).map((h) => [h, life.filter((l) => l > h * 2).length] as [number, number]);
  return (
    <ArtFrame kind="experiment" title={L(W.half, lang)} body={spec.body || L(W.halfHint, lang)}>
      <div className="sim-layout is-even">
        <Stage w={200} h={200} label={L(W.half, lang)}>
          {life.map((l, k) => (
            <rect key={k} x={6 + (k % 10) * 19} y={6 + Math.floor(k / 10) * 19} width="16" height="16" rx="4" fill={l > s ? "#7c3aed" : "#e2e8f0"} style={{ transition: "fill 200ms" }} />
          ))}
        </Stage>
        <Graph x={[0, span]} y={[0, N0]} series={[{ pts: theory, color: "#94a3b8", dash: "4 3" }, { pts: real, color: "#7c3aed" }]} xLabel={`t / T`} yLabel="N" cursor={s / 2} />
      </div>
      <Readouts
        items={[
          [L(W.left, lang), String(alive), "#7c3aed"],
          ["t / T", fmt(s / 2, 1, lang)],
          ["t", `${fmt((s / 2) * T, T >= 100 ? 0 : 1, lang)} ${un(halfUnit(iso), lang)}`],
        ]}
      />
      <div className="art-chips">
        {Object.entries(ISOTOPES).map(([k, v]) => (
          <button key={k} type="button" className={`art-chip${k === iso ? " is-active" : ""}`} onClick={() => { setIso(k); clock.reset(); }}>
            {v.name} · T = {fmt(Number(v.half), 1, lang)} {un(halfUnit(k), lang)}
          </button>
        ))}
      </div>
      <PlayBar clock={clock} lang={lang} onReset={() => setSeed((n) => n + 1)} />
    </ArtFrame>
  );
}

type Ray = "a" | "b" | "g";
type Wall = "none" | "paper" | "alu" | "lead";
const RAY: Record<Ray, { name: string; color: string; reach: Record<Wall, number> }> = {
  a: { name: "α", color: "#e11d48", reach: { none: 1, paper: 0, alu: 0, lead: 0 } },
  b: { name: "β", color: "#2563eb", reach: { none: 1, paper: 1, alu: 0, lead: 0 } },
  g: { name: "γ", color: "#16a34a", reach: { none: 1, paper: 1, alu: 0.9, lead: 0.3 } },
};

function Absorb({ spec, lang }: SimProps) {
  const [ray, setRay] = useState<Ray>((spec.opts.ray as Ray) in RAY ? (spec.opts.ray as Ray) : "a");
  const [wall, setWall] = useState<Wall>("none");
  const [mag, setMag] = useState(false);
  const p = useLoop(1.6);
  const r = RAY[ray];
  const reach = r.reach[wall];
  const wx = 170;
  const bend = mag ? (ray === "a" ? -1 : ray === "b" ? 1.8 : 0) : 0;
  const yAt = (x: number) => 70 + bend * ((x - 40) / 260) ** 2 * 50;
  const dots = Array.from({ length: 10 }, (_, k) => ((p + k / 10) % 1) * 260 + 40);
  const verdict = reach === 0 ? W.stopped : reach < 1 ? W.weaker : W.through;
  return (
    <ArtFrame kind="experiment" title={L(W.absorb, lang)} body={spec.body || L(W.absorbHint, lang)}>
      <Stage w={320} h={140} label={L(W.absorb, lang)}>
        {mag ? Array.from({ length: 40 }, (_, k) => <text key={k} x={60 + (k % 10) * 26} y={20 + Math.floor(k / 10) * 34} className="sim-axis" opacity="0.5">×</text>) : null}
        <rect x="10" y="54" width="30" height="32" rx="4" fill="#475569" />
        <circle cx="32" cy="70" r="5" fill="#facc15" />
        {wall !== "none" ? <rect x={wx} y="20" width={wall === "paper" ? 3 : wall === "alu" ? 8 : 18} height="100" fill={wall === "paper" ? "#fef3c7" : wall === "alu" ? "#cbd5e1" : "#475569"} stroke="#64748b" /> : null}
        <rect x="290" y="50" width="22" height="40" rx="4" fill="#0f172a" />
        <circle cx="301" cy="62" r="5" fill={reach > 0 ? "#22c55e" : "#334155"} className={reach > 0 ? "sim-pulse" : undefined} />
        {dots.map((x, k) => {
          const blocked = wall !== "none" && x > wx && (reach === 0 || (reach < 1 && k % 10 >= reach * 10));
          if (blocked) return null;
          return r.name === "γ"
            ? <path key={k} d={`M${x - 6} ${yAt(x)} q 3 -4 6 0 t 6 0`} fill="none" stroke={r.color} strokeWidth="2" />
            : <circle key={k} cx={x} cy={yAt(x)} r={ray === "a" ? 4.5 : 2.5} fill={r.color} />;
        })}
      </Stage>
      <Note tone={reach === 0 ? "bad" : reach < 1 ? undefined : "good"}>{r.name}: {L(verdict, lang)}</Note>
      <Choice value={ray} options={[["a", "α"], ["b", "β"], ["g", "γ"]]} onChange={setRay} />
      <Choice value={wall} options={[["none", L(W.none, lang)], ["paper", L(W.paper, lang)], ["alu", L(W.alu, lang)], ["lead", L(W.lead, lang)]]} onChange={setWall} />
      <div className="art-chips"><Toggle on={mag} label={L(W.magnet, lang)} onChange={setMag} /></div>
    </ArtFrame>
  );
}

type Rods = "out" | "half" | "in";
const K: Record<Rods, number> = { out: 2.5, half: 1, in: 0.5 };

function Chain({ spec, lang }: SimProps) {
  const [rods, setRods] = useState<Rods>((spec.opts.rods as Rods) in K ? (spec.opts.rods as Rods) : "out");
  const [gen, setGen] = useState(0);
  const rnd = useMemo(() => seeded(400, 11), []);
  // build generations: each fission gives 2 or 3 neutrons, rods absorb some of them
  const gens = useMemo(() => {
    const out: Array<Array<{ x: number; y: number; from: number; dead: boolean }>> = [[{ x: 160, y: 18, from: -1, dead: false }]];
    let r = 0;
    for (let g = 1; g <= 5; g++) {
      const prev = out[g - 1].filter((n) => !n.dead);
      const next: Array<{ x: number; y: number; from: number; dead: boolean }> = [];
      const cap = 30;
      prev.forEach((n) => {
        const kids = rnd[r++ % 400] < 0.5 ? 2 : 3;
        for (let c = 0; c < kids && next.length < cap; c++) {
          // rods out: every neutron splits a nucleus; half in: one per fission; in: one every other fission
          const dead = rods === "out" ? false : rods === "half" ? c > 0 : c > 0 || rnd[r++ % 400] < 0.5;
          next.push({ x: 0, y: 18 + g * 34, from: out[g - 1].indexOf(n), dead });
        }
      });
      next.forEach((n, i) => (n.x = ((i + 0.5) / Math.max(1, next.length)) * 300 + 10));
      out.push(next);
      if (!next.some((n) => !n.dead)) break;
    }
    return out;
  }, [rods, rnd]);
  const shown = gens.slice(0, gen + 1);
  const live = shown[shown.length - 1].filter((n) => !n.dead).length;
  const verdict = rods === "out" ? W.super : rods === "half" ? W.crit : W.sub;
  return (
    <ArtFrame kind="experiment" title={L(W.chain, lang)} body={spec.body || L(W.chainHint, lang)}>
      <Stage w={320} h={200} label={L(W.chain, lang)}>
        {rods !== "out" ? [60, 160, 260].map((x) => <rect key={x} x={x - 4} y="0" width="8" height={rods === "in" ? 200 : 100} fill="#334155" opacity="0.35" />) : null}
        {shown.map((g, gi) =>
          g.map((n, k) => {
            const parent = gi > 0 ? shown[gi - 1][n.from] : null;
            return (
              <g key={`${gi}-${k}`} className="sim-fade-in">
                {parent ? <line x1={parent.x} y1={parent.y} x2={n.x} y2={n.y} stroke={n.dead ? "#cbd5e1" : "#2563eb"} strokeWidth="1.2" strokeDasharray={n.dead ? "2 2" : undefined} /> : null}
                {n.dead ? <circle cx={n.x} cy={n.y} r="3" fill="#94a3b8" /> : <>
                  <circle cx={n.x} cy={n.y} r="7" fill="#f59e0b" stroke="#b45309" />
                  <circle cx={n.x} cy={n.y - 9} r="2.5" fill="#2563eb" />
                </>}
              </g>
            );
          }),
        )}
      </Stage>
      <Readouts items={[[L(W.gen, lang), String(shown.length - 1)], [L(W.neutrons, lang), String(live), "#2563eb"], ["k", fmt(K[rods], 1, lang)]]} />
      {gen > 1 ? <Note tone={rods === "half" ? "good" : rods === "out" ? "bad" : undefined}>{L(verdict, lang)}</Note> : null}
      <Choice value={rods} options={[["out", L(W.out, lang)], ["half", L(W.half_, lang)], ["in", L(W.in, lang)]]} onChange={(v) => { setRods(v); setGen(0); }} />
      <div className="art-row">
        <button type="button" className="art-btn is-primary" disabled={gen >= gens.length - 1} onClick={() => setGen(gen + 1)}>{L(W.next, lang)}</button>
        <button type="button" className="art-btn" onClick={() => setGen(0)}>{L(W.restart, lang)}</button>
      </div>
    </ArtFrame>
  );
}
