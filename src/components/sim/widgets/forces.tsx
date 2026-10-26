"use client";

import { useEffect, useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Note, PlayBar, rad, Readouts, Slider, Stage, Toggle, useClock } from "../kit";
import { L, t, un } from "../labels";

const W = {
  cart: t("Experiment: force, mass and acceleration", "Փորձ․ ուժ, զանգված և արագացում", "Опыт: сила, масса и ускорение"),
  cartHint: t(
    "Push the cart with a force and press Play. Then double the mass, or switch friction off and let go: without friction the cart keeps going on its own.",
    "Հրի՛ր սայլակը որոշ ուժով և սեղմի՛ր «Սկսել»։ Հետո կրկնապատկի՛ր զանգվածը կամ անջատի՛ր շփումը և բա՛ց թող․ առանց շփման սայլակը շարունակում է շարժվել ինքնուրույն։",
    "Толкни тележку силой и нажми «Пуск». Потом удвой массу или выключи трение и отпусти: без трения тележка продолжает ехать сама.",
  ),
  incline: t("Experiment: a block on a slope", "Փորձ․ չորսու թեք հարթության վրա", "Опыт: брусок на наклонной плоскости"),
  inclineHint: t(
    "Tilt the slope. Gravity splits into two parts: one presses on the slope, one pulls the block down it. When the pull beats friction, the block slides.",
    "Թեքի՛ր հարթությունը։ Ծանրության ուժը բաժանվում է երկու մասի․ մեկը սեղմում է հարթությանը, մյուսը քաշում է չորսուն ներքև։ Երբ այդ մասը գերազանցում է շփմանը, չորսուն սահում է։",
    "Наклоняй плоскость. Сила тяжести раскладывается на две части: одна прижимает брусок, другая тянет его вниз по склону. Когда она больше трения, брусок скользит.",
  ),
  resultant: t("Experiment: adding forces", "Փորձ․ ուժերի գումարում", "Опыт: сложение сил"),
  resultantHint: t(
    "Two ropes pull a ring. Change the forces and the angle between them. The resultant is the diagonal of the parallelogram.",
    "Երկու պարան քաշում են օղակը։ Փոխի՛ր ուժերը և դրանց միջև անկյունը։ Համազորը զուգահեռագծի անկյունագիծն է։",
    "Две верёвки тянут кольцо. Меняй силы и угол между ними. Равнодействующая — диагональ параллелограмма.",
  ),
  third: t("Experiment: action and reaction", "Փորձ․ ազդեցություն և հակազդեցություն", "Опыт: действие и противодействие"),
  thirdHint: t(
    "Two skaters push each other off. The forces are always equal and opposite, but the lighter skater rolls away faster.",
    "Երկու չմշկորդ հրում են իրար։ Ուժերը միշտ հավասար են և հակադիր, բայց թեթև չմշկորդը ավելի արագ է հեռանում։",
    "Два фигуриста отталкиваются друг от друга. Силы всегда равны и противоположны, но лёгкий откатывается быстрее.",
  ),
  friction: t("Experiment: friction", "Փորձ․ շփում", "Опыт: трение"),
  frictionHint: t(
    "Pull the block with the spring balance. While it stays put, friction is exactly as big as your pull. It starts sliding when you pass the maximum.",
    "Քաշի՛ր չորսուն ուժաչափով։ Քանի դեռ այն տեղում է, շփման ուժը ճիշտ հավասար է քո քաշող ուժին։ Այն սկսում է սահել, երբ անցնում ես առավելագույնը։",
    "Тяни брусок динамометром. Пока он стоит, сила трения ровно равна твоей силе. Он поедет, когда превысишь максимум.",
  ),
  gravity: t("Experiment: weight on other worlds", "Փորձ․ կշիռն այլ աշխարհներում", "Опыт: вес на других мирах"),
  gravityHint: t(
    "Your mass is the same everywhere; your weight is not. Pick a world and see the scales.",
    "Քո զանգվածն ամենուր նույնն է, իսկ կշիռը՝ ոչ։ Ընտրի՛ր աշխարհը և նայի՛ր կշեռքին։",
    "Масса везде одна и та же, а вес — нет. Выбери мир и посмотри на весы.",
  ),
  force: t("Applied force F", "Կիրառված ուժ F", "Приложенная сила F"),
  mass: t("Mass m", "Զանգված m", "Масса m"),
  frictionOn: t("Friction", "Շփում", "Трение"),
  net: t("Net force", "Համազոր ուժ", "Равнодействующая"),
  angle: t("Angle", "Անկյուն", "Угол"),
  slope: t("Slope angle", "Թեքության անկյուն", "Угол наклона"),
  mu: t("Friction coefficient μ", "Շփման գործակից μ", "Коэффициент трения μ"),
  slides: t("The block slides down.", "Չորսուն սահում է ներքև։", "Брусок соскальзывает."),
  holds: t("Friction holds the block.", "Շփումը պահում է չորսուն։", "Трение удерживает брусок."),
  m1: t("Mass of skater 1", "1-ին չմշկորդի զանգվածը", "Масса фигуриста 1"),
  m2: t("Mass of skater 2", "2-րդ չմշկորդի զանգվածը", "Масса фигуриста 2"),
  push: t("Push", "Հրել", "Оттолкнуться"),
  surface: t("Surface", "Մակերևույթ", "Поверхность"),
  ice: t("ice", "սառույց", "лёд"),
  wood: t("wood", "փայտ", "дерево"),
  rubber: t("rubber", "ռետին", "резина"),
  sand: t("sandpaper", "հղկաթուղթ", "наждак"),
  pull: t("Pull", "Քաշող ուժ", "Сила тяги"),
  fr: t("Friction force", "Շփման ուժ", "Сила трения"),
  still: t("Static friction: the block does not move.", "Դադարի շփում․ չորսուն չի շարժվում։", "Трение покоя: брусок не движется."),
  moving: t("Sliding friction: the block moves.", "Սահքի շփում․ չորսուն շարժվում է։", "Трение скольжения: брусок движется."),
  weight: t("Weight", "Կշիռ", "Вес"),
  earth: t("Earth", "Երկիր", "Земля"),
  moon: t("Moon", "Լուսին", "Луна"),
  mars: t("Mars", "Մարս", "Марс"),
  jupiter: t("Jupiter", "Յուպիտեր", "Юпитер"),
  your: t("Your mass", "Քո զանգվածը", "Твоя масса"),
};
const U = { N: t("N", "Ն", "Н"), kg: t("kg", "կգ", "кг"), ms: t("m/s", "մ/վ", "м/с"), ms2: t("m/s²", "մ/վ²", "м/с²") };

export default function Forces({ spec, lang }: SimProps) {
  const mode = spec.opts.mode ?? "cart";
  if (mode === "incline") return <Incline spec={spec} lang={lang} />;
  if (mode === "resultant") return <Resultant spec={spec} lang={lang} />;
  if (mode === "third") return <Third spec={spec} lang={lang} />;
  if (mode === "friction") return <Friction spec={spec} lang={lang} />;
  if (mode === "gravity") return <Gravity spec={spec} lang={lang} />;
  return <Cart spec={spec} lang={lang} />;
}

/** Integrates x and v with whatever the forces are right now. */
function useIntegrator(clock: ReturnType<typeof useClock>, accel: (v: number) => number) {
  const st = useRef({ x: 0, v: 0, last: 0 });
  const acc = useRef(accel);
  acc.current = accel;
  const [, force] = useState(0);
  useEffect(() => {
    const s = st.current;
    if (clock.t === 0) {
      s.x = 0; s.v = 0; s.last = 0;
      force((n) => n + 1);
      return;
    }
    let dt = clock.t - s.last;
    s.last = clock.t;
    while (dt > 0) {
      const h = Math.min(dt, 0.01);
      const a = acc.current(s.v);
      const nv = s.v + a * h;
      s.v = s.v > 0 && nv < 0 && a < 0 ? 0 : nv;
      s.x += s.v * h;
      dt -= h;
    }
    force((n) => n + 1);
  }, [clock.t]);
  return st.current;
}

function Cart({ spec, lang }: SimProps) {
  const [F, setF] = useState(20);
  const [m, setM] = useState(5);
  const [fric, setFric] = useState(true);
  const mu = 0.1, g = 10;
  const clock = useClock({ until: 12 });
  const ffr = (v: number) => (fric ? (v > 1e-6 ? mu * m * g : Math.min(F, mu * m * g)) : 0);
  const s = useIntegrator(clock, (v) => (F - ffr(v)) / m);
  const fr = ffr(s.v);
  const net = F - fr;
  const a = net / m;
  const X = 30 + ((s.x % 120) + 120) % 120 * 2.3;
  const N = L(U.N, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.cart, lang)} body={spec.body || L(W.cartHint, lang)}>
      <Stage w={320} h={130} label={L(W.cart, lang)}>
        <rect y="96" width="320" height="34" fill={fric ? "#d6b98c" : "#dbeafe"} />
        {Array.from({ length: 17 }, (_, k) => {
          const px = ((k * 20 - (s.x * 2.3) % 20) + 340) % 340 - 10;
          return <line key={k} x1={px} x2={px + 8} y1="104" y2="112" stroke={fric ? "#a07c4a" : "#93c5fd"} strokeWidth="2" />;
        })}
        <g transform={`translate(${X} 0)`}>
          <rect x="-26" y={66 - m * 0.8} width="52" height={22 + m * 0.8} rx="5" fill="#4f46e5" />
          <text x="0" y="82" textAnchor="middle" className="sim-tag is-plain" fill="#fff">{m} {L(U.kg, lang)}</text>
          <circle cx="-15" cy="92" r="6" fill="#1e1b4b" />
          <circle cx="15" cy="92" r="6" fill="#1e1b4b" />
        </g>
        <Arrow x1={X + 28} y1={70} x2={X + 28 + F * 1.6} y2={70} color="#e11d48" label={`F ${F} ${N}`} />
        {fr > 0 ? <Arrow x1={X - 28} y1={88} x2={X - 28 - fr * 1.6} y2={88} color="#a16207" label={`${fmt(fr, 0, lang)} ${N}`} /> : null}
        <Arrow x1={X} y1={34} x2={X + net * 1.6} y2={34} color="#059669" label={`${L(W.net, lang)} ${fmt(net, 0, lang)} ${N}`} />
      </Stage>
      <Readouts
        items={[
          ["a = F/m", `${fmt(clock.t ? a : (F - (fric ? Math.min(F, mu * m * g) : 0)) / m, 2, lang)} ${L(U.ms2, lang)}`, "#059669"],
          ["v", `${fmt(s.v, 1, lang)} ${L(U.ms, lang)}`, "#4f46e5"],
          ["t", `${fmt(clock.t, 1, lang)} ${un("s", lang)}`],
        ]}
      />
      <Controls>
        <Slider label={L(W.force, lang)} value={F} min={0} max={50} step={5} unit={N} digits={0} lang={lang} onChange={setF} />
        <Slider label={L(W.mass, lang)} value={m} min={1} max={20} unit={L(U.kg, lang)} digits={0} lang={lang} onChange={setM} />
        <div className="art-chips"><Toggle on={fric} label={`${L(W.frictionOn, lang)} μ = 0,1`.replace(",", lang === "en" ? "." : ",")} onChange={setFric} /></div>
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

function Incline({ spec, lang }: SimProps) {
  const [ang, setAng] = useState(20);
  const [mu, setMu] = useState(0.4);
  const m = 2, g = 10;
  const a = rad(ang);
  const mg = m * g, par = mg * Math.sin(a), perp = mg * Math.cos(a), fmax = mu * perp;
  const slides = par > fmax + 1e-9;
  const acc = slides ? g * (Math.sin(a) - mu * Math.cos(a)) : 0;
  const clock = useClock({ until: 3 });
  const along = slides ? Math.min(150, (acc * clock.t * clock.t) / 2 * 40) : 0;
  // slope from (40,180) up to the right
  const L0 = 250;
  const top = { x: 40 + L0 * Math.cos(a), y: 180 - L0 * Math.sin(a) };
  const d = 190 - along; // distance from the bottom corner along the slope
  const c = { x: 40 + d * Math.cos(a), y: 180 - d * Math.sin(a) };
  const nx = -Math.sin(a), ny = -Math.cos(a); // outward normal (screen)
  const bx = c.x + nx * 14, by = c.y + ny * 14; // block centre
  const k = 2.2;
  const N = L(U.N, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.incline, lang)} body={spec.body || L(W.inclineHint, lang)}>
      <Stage w={320} h={200} label={L(W.incline, lang)}>
        <polygon points={`40,180 ${top.x},180 ${top.x},${top.y}`} fill="#e2e8f0" stroke="#94a3b8" />
        <path d={`M ${40 + 28} 180 A 28 28 0 0 0 ${40 + 28 * Math.cos(a)} ${180 - 28 * Math.sin(a)}`} fill="none" stroke="#d97706" strokeWidth="2" />
        <text x={40 + 34} y={174} className="sim-tag" fill="#d97706">{ang}°</text>
        <g transform={`translate(${bx} ${by}) rotate(${-ang})`}>
          <rect x="-16" y="-14" width="32" height="28" rx="3" fill="#4f46e5" />
        </g>
        <Arrow x1={bx} y1={by} x2={bx} y2={by + mg * k} color="#1e1b4b" label="mg" />
        <Arrow x1={bx} y1={by} x2={bx + nx * perp * k} y2={by + ny * perp * k} color="#0284c7" label="N" />
        <Arrow x1={bx} y1={by} x2={bx - Math.cos(a) * par * k} y2={by + Math.sin(a) * par * k} color="#e11d48" dash="4 3" label="mg·sinα" />
        <Arrow x1={bx} y1={by} x2={bx + Math.cos(a) * Math.min(par, fmax) * k} y2={by - Math.sin(a) * Math.min(par, fmax) * k} color="#a16207" label="F_fr" />
      </Stage>
      <Readouts
        items={[
          ["mg·sinα", `${fmt(par, 1, lang)} ${N}`, "#e11d48"],
          ["μ·mg·cosα", `${fmt(fmax, 1, lang)} ${N}`, "#a16207"],
          ["a", `${fmt(acc, 2, lang)} ${L(U.ms2, lang)}`, "#059669"],
        ]}
      />
      <Note tone={slides ? "bad" : "good"}>{L(slides ? W.slides : W.holds, lang)}</Note>
      <Controls>
        <Slider label={L(W.slope, lang)} value={ang} min={0} max={60} unit="°" digits={0} lang={lang} onChange={(n) => { setAng(n); clock.reset(); }} />
        <Slider label={L(W.mu, lang)} value={mu} min={0} max={1} step={0.05} digits={2} lang={lang} onChange={(n) => { setMu(n); clock.reset(); }} />
      </Controls>
      {slides ? <PlayBar clock={clock} lang={lang} noSlow /> : null}
    </ArtFrame>
  );
}

function Resultant({ spec, lang }: SimProps) {
  const [f1, setF1] = useState(30);
  const [f2, setF2] = useState(40);
  const [ang, setAng] = useState(90);
  const k = 2;
  const o = { x: 120, y: 140 };
  const a2 = rad(ang);
  const p1 = { x: o.x + f1 * k, y: o.y };
  const p2 = { x: o.x + f2 * k * Math.cos(a2), y: o.y - f2 * k * Math.sin(a2) };
  const r = { x: p1.x + p2.x - o.x, y: p1.y + p2.y - o.y };
  const R = Math.hypot(r.x - o.x, r.y - o.y) / k;
  const N = L(U.N, lang);
  return (
    <ArtFrame kind="experiment" title={L(W.resultant, lang)} body={spec.body || L(W.resultantHint, lang)}>
      <Stage w={320} h={200} label={L(W.resultant, lang)}>
        <line x1={p1.x} y1={p1.y} x2={r.x} y2={r.y} stroke="#94a3b8" strokeDasharray="4 3" />
        <line x1={p2.x} y1={p2.y} x2={r.x} y2={r.y} stroke="#94a3b8" strokeDasharray="4 3" />
        <Arrow x1={o.x} y1={o.y} x2={p1.x} y2={p1.y} color="#e11d48" label={`F₁ ${f1} ${N}`} />
        <Arrow x1={o.x} y1={o.y} x2={p2.x} y2={p2.y} color="#0284c7" label={`F₂ ${f2} ${N}`} />
        <Arrow x1={o.x} y1={o.y} x2={r.x} y2={r.y} color="#059669" width={4} label={`R ${fmt(R, 1, lang)} ${N}`} />
        <circle cx={o.x} cy={o.y} r="7" fill="none" stroke="#1e1b4b" strokeWidth="3" />
      </Stage>
      <Readouts items={[["R", `${fmt(R, 1, lang)} ${N}`, "#059669"], ["F₁ + F₂", `${f1 + f2} ${N}`], ["|F₁ − F₂|", `${Math.abs(f1 - f2)} ${N}`]]} />
      <Controls>
        <Slider label="F₁" value={f1} min={0} max={60} step={5} unit={N} digits={0} lang={lang} onChange={setF1} />
        <Slider label="F₂" value={f2} min={0} max={60} step={5} unit={N} digits={0} lang={lang} onChange={setF2} />
        <Slider label={L(W.angle, lang)} value={ang} min={0} max={180} step={5} unit="°" digits={0} lang={lang} onChange={setAng} />
      </Controls>
    </ArtFrame>
  );
}

function Third({ spec, lang }: SimProps) {
  const [m1, setM1] = useState(40);
  const [m2, setM2] = useState(80);
  const clock = useClock({ until: 4 });
  const J = 120; // impulse of the push, N·s
  const v1 = J / m1, v2 = J / m2;
  const pushing = clock.t > 0 && clock.t < 0.3;
  const tt = Math.max(0, clock.t - 0.3);
  const x1 = 150 - v1 * tt * 12, x2 = 170 + v2 * tt * 12;
  const N = L(U.N, lang);
  const skater = (x: number, m: number, color: string, dir: number) => (
    <g transform={`translate(${x} 0)`}>
      <circle cx="0" cy={58 - m * 0.05} r="9" fill="#fcd34d" />
      <rect x="-9" y={68 - m * 0.05} width="18" height={30 + m * 0.1} rx="7" fill={color} />
      <line x1={dir * 6} y1="78" x2={dir * 16} y2="80" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <line x1="-12" x2="12" y1="122" y2="122" stroke="#475569" strokeWidth="3" />
      <text x="0" y="140" textAnchor="middle" className="sim-tag" fill={color}>{m} {L(U.kg, lang)}</text>
    </g>
  );
  return (
    <ArtFrame kind="experiment" title={L(W.third, lang)} body={spec.body || L(W.thirdHint, lang)}>
      <Stage w={320} h={150} label={L(W.third, lang)}>
        <rect y="124" width="320" height="26" fill="#e0f2fe" />
        {skater(x1, m1, "#e11d48", 1)}
        {skater(x2, m2, "#4f46e5", -1)}
        {pushing ? (
          <>
            <Arrow x1={x1 + 4} y1={40} x2={x1 - 40} y2={40} color="#e11d48" label={`400 ${N}`} />
            <Arrow x1={x2 - 4} y1={40} x2={x2 + 40} y2={40} color="#4f46e5" label={`400 ${N}`} />
          </>
        ) : null}
        {tt > 0 ? (
          <>
            <Arrow x1={x1} y1={22} x2={x1 - v1 * 10} y2={22} color="#059669" label={`${fmt(v1, 1, lang)} ${L(U.ms, lang)}`} />
            <Arrow x1={x2} y1={22} x2={x2 + v2 * 10} y2={22} color="#059669" label={`${fmt(v2, 1, lang)} ${L(U.ms, lang)}`} />
          </>
        ) : null}
      </Stage>
      <Readouts items={[["F₁ = −F₂", `400 ${N}`], ["v₁ : v₂", `${fmt(v1 / v2, 2, lang)}`, "#059669"], ["m₂ : m₁", `${fmt(m2 / m1, 2, lang)}`]]} />
      <Controls>
        <Slider label={L(W.m1, lang)} value={m1} min={20} max={100} step={5} unit={L(U.kg, lang)} digits={0} lang={lang} onChange={(n) => { setM1(n); clock.reset(); }} />
        <Slider label={L(W.m2, lang)} value={m2} min={20} max={100} step={5} unit={L(U.kg, lang)} digits={0} lang={lang} onChange={(n) => { setM2(n); clock.reset(); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}

const SURFACES = { ice: [0.05, 0.03, "#dbeafe"], wood: [0.5, 0.3, "#d6b98c"], rubber: [0.9, 0.7, "#475569"], sand: [0.8, 0.6, "#a8a29e"] } as const;

function Friction({ spec, lang }: SimProps) {
  const [surf, setSurf] = useState<keyof typeof SURFACES>("wood");
  const [m, setM] = useState(2);
  const [pull, setPull] = useState(4);
  const [mus, muk, color] = SURFACES[surf];
  const Nf = m * 10;
  const max = mus * Nf;
  const moving = pull > max;
  const fr = moving ? muk * Nf : pull;
  const N = L(U.N, lang);
  const p = useLoopX(moving);
  const bx = 120 + (moving ? p * 60 : 0);
  return (
    <ArtFrame kind="experiment" title={L(W.friction, lang)} body={spec.body || L(W.frictionHint, lang)}>
      <Stage w={320} h={140} label={L(W.friction, lang)}>
        <rect y="100" width="320" height="40" fill={color} />
        <rect x={bx - 30} y={100 - 20 - m * 4} width="60" height={20 + m * 4} rx="4" fill="#4f46e5" />
        <text x={bx} y={92} textAnchor="middle" className="sim-tag is-plain" fill="#fff">{m} {L(U.kg, lang)}</text>
        <line x1={bx + 30} y1="88" x2={bx + 60} y2="88" stroke="#1e1b4b" strokeWidth="2" />
        <g transform={`translate(${bx + 60} 80)`}>
          <rect width="70" height="16" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <path d={`M4 8 ${Array.from({ length: 8 }, (_, i) => `L ${8 + i * (4 + pull * 0.3)} ${i % 2 ? 4 : 12}`).join(" ")}`} fill="none" stroke="#d97706" strokeWidth="1.5" />
          <text x="35" y="-5" textAnchor="middle" className="sim-tag" fill="#d97706">{fmt(pull, 1, lang)} {N}</text>
        </g>
        <Arrow x1={bx - 30} y1={96} x2={bx - 30 - fr * 4} y2={96} color="#a16207" label={`${fmt(fr, 1, lang)} ${N}`} />
      </Stage>
      <Note tone={moving ? "bad" : "good"}>{L(moving ? W.moving : W.still, lang)}</Note>
      <Readouts items={[[L(W.pull, lang), `${fmt(pull, 1, lang)} ${N}`, "#d97706"], [L(W.fr, lang), `${fmt(fr, 1, lang)} ${N}`, "#a16207"], ["μ·N max", `${fmt(max, 1, lang)} ${N}`]]} />
      <Controls>
        <p className="art-ctrl-label">{L(W.surface, lang)}</p>
        <Choice value={surf} options={(Object.keys(SURFACES) as Array<keyof typeof SURFACES>).map((k) => [k, L(W[k], lang)])} onChange={setSurf} />
        <Slider label={L(W.mass, lang)} value={m} min={1} max={5} unit={L(U.kg, lang)} digits={0} lang={lang} onChange={setM} />
        <Slider label={L(W.pull, lang)} value={pull} min={0} max={40} step={0.5} unit={N} lang={lang} onChange={setPull} />
      </Controls>
    </ArtFrame>
  );
}

function useLoopX(on: boolean) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!on) { setP(0); return; }
    let id = 0;
    const start = performance.now();
    const tick = (now: number) => { setP(((now - start) / 2500) % 1); id = requestAnimationFrame(tick); };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [on]);
  return p;
}

const WORLDS = { earth: [9.8, "#3b82f6"], moon: [1.6, "#94a3b8"], mars: [3.7, "#ea580c"], jupiter: [24.8, "#d97706"] } as const;

function Gravity({ spec, lang }: SimProps) {
  const [w, setW] = useState<keyof typeof WORLDS>("earth");
  const [m, setM] = useState(40);
  const [g, color] = WORLDS[w];
  const P = m * g;
  const N = L(U.N, lang);
  const needle = (P / 1200) * 270 - 135;
  return (
    <ArtFrame kind="experiment" title={L(W.gravity, lang)} body={spec.body || L(W.gravityHint, lang)}>
      <Stage w={320} h={170} label={L(W.gravity, lang)}>
        <circle cx="70" cy="85" r="52" fill={color} opacity="0.85" />
        <circle cx="52" cy="70" r="10" fill="#fff" opacity="0.18" />
        <text x="70" y="160" textAnchor="middle" className="sim-tag" fill="#1e1b4b">g = {fmt(g, 1, lang)} {L(U.ms2, lang)}</text>
        <g transform="translate(220 90)">
          <circle r="60" fill="#fff" stroke="#1e1b4b" strokeWidth="3" />
          {Array.from({ length: 13 }, (_, i) => {
            const an = rad(-135 + i * 22.5 - 90);
            return (
              <g key={i}>
                <line x1={Math.cos(an) * 50} y1={Math.sin(an) * 50} x2={Math.cos(an) * 56} y2={Math.sin(an) * 56} stroke="#1e1b4b" />
                {i % 2 === 0 ? <text x={Math.cos(an) * 41} y={Math.sin(an) * 41 + 3} textAnchor="middle" className="sim-axis">{i * 100}</text> : null}
              </g>
            );
          })}
          <line x1="0" y1="0" x2={Math.cos(rad(needle - 90)) * 48} y2={Math.sin(rad(needle - 90)) * 48} stroke="#e11d48" strokeWidth="3" strokeLinecap="round" style={{ transition: "all 600ms ease" }} />
          <circle r="5" fill="#1e1b4b" />
          <text y="30" textAnchor="middle" className="sim-tag" fill="#1e1b4b">{N}</text>
        </g>
      </Stage>
      <Readouts items={[[L(W.your, lang), `${m} ${L(U.kg, lang)}`], [L(W.weight, lang), `${fmt(P, 0, lang)} ${N}`, "#e11d48"]]} />
      <Controls>
        <Choice value={w} options={(Object.keys(WORLDS) as Array<keyof typeof WORLDS>).map((k) => [k, L(W[k], lang)])} onChange={setW} />
        <Slider label={L(W.your, lang)} value={m} min={10} max={100} step={5} unit={L(U.kg, lang)} digits={0} lang={lang} onChange={setM} />
      </Controls>
    </ArtFrame>
  );
}
