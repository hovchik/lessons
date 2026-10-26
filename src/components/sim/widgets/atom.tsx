"use client";

import { useEffect, useRef, useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { configuration, ELEMENTS, shells } from "@/lib/sim/elements";
import type { SimProps } from "../sim-block";
import { Controls, fmt, Note, Readouts, Slider, Stage, Toggle, useLoop } from "../kit";
import { L, t, un } from "../labels";

const W = {
  build: t("Experiment: build an atom", "Փորձ․ կառուցի՛ր ատոմ", "Опыт: собери атом"),
  buildHint: t(
    "Add protons, neutrons and electrons. The number of protons decides the element; neutrons change the isotope; extra or missing electrons make an ion.",
    "Ավելացրո՛ւ պրոտոններ, նեյտրոններ և էլեկտրոններ։ Պրոտոնների թիվը որոշում է տարրը, նեյտրոնները՝ իզոտոպը, ավելորդ կամ պակաս էլեկտրոնները դարձնում են այն իոն։",
    "Добавляй протоны, нейтроны и электроны. Число протонов определяет элемент, нейтроны — изотоп, лишние или недостающие электроны делают атом ионом.",
  ),
  shells: t("Electron shells of an atom", "Ատոմի էլեկտրոնային շերտերը", "Электронные слои атома"),
  shellsHint: t(
    "Pick an element. Electrons fill the shells from the inside out; the outer electrons decide how the element reacts.",
    "Ընտրի՛ր տարրը։ Էլեկտրոնները լցնում են շերտերը ներսից դեպի դուրս․ արտաքին էլեկտրոններն են որոշում, թե ինչպես է տարրը փոխազդում։",
    "Выбери элемент. Электроны заполняют слои изнутри наружу; внешние электроны определяют, как элемент реагирует.",
  ),
  config: t("Filling the orbitals", "Օրբիտալների լրացումը", "Заполнение орбиталей"),
  configHint: t(
    "Each box is an orbital with room for two electrons with opposite spins. Electrons go into the lowest energy level first (1s, 2s, 2p, 3s, 3p, 4s, 3d…).",
    "Ամեն վանդակ օրբիտալ է՝ հակադիր սպիններով երկու էլեկտրոնի համար։ Էլեկտրոնները նախ զբաղեցնում են ամենացածր էներգիայի մակարդակը (1s, 2s, 2p, 3s, 3p, 4s, 3d…)։",
    "Каждая клетка — орбиталь на два электрона с противоположными спинами. Электроны сначала занимают самый низкий уровень (1s, 2s, 2p, 3s, 3p, 4s, 3d…).",
  ),
  rutherford: t("Experiment: Rutherford's gold foil", "Փորձ․ Ռեզերֆորդի ոսկե թիթեղը", "Опыт: золотая фольга Резерфорда"),
  rutherfordHint: t(
    "Alpha particles fly at a thin gold foil. Almost all go straight through, a few bounce back. So the atom is mostly empty, with a tiny heavy positive nucleus.",
    "Ալֆա մասնիկները թռչում են դեպի բարակ ոսկե թիթեղը։ Համարյա բոլորն անցնում են ուղիղ, մի քանիսը հետ են թռչում։ Ուրեմն ատոմը հիմնականում դատարկ է, իսկ միջուկը՝ փոքրիկ, ծանր և դրական։",
    "Альфа-частицы летят в тонкую золотую фольгу. Почти все пролетают насквозь, немногие отскакивают назад. Значит, атом почти пустой, а ядро крошечное, тяжёлое и положительное.",
  ),
  bohr: t("Experiment: light from a hydrogen atom", "Փորձ․ ջրածնի ատոմի լույսը", "Опыт: свет атома водорода"),
  bohrHint: t(
    "Tap a higher level to excite the electron, then let it jump down. Each jump gives a photon of one exact colour: that is why atoms have line spectra.",
    "Սեղմի՛ր ավելի բարձր մակարդակի վրա՝ էլեկտրոնը գրգռելու համար, հետո թող այն ցատկի ներքև։ Ամեն ցատկը տալիս է մեկ որոշակի գույնի ֆոտոն․ այդ պատճառով ատոմներն ունեն գծային սպեկտրներ։",
    "Нажми на верхний уровень, чтобы возбудить электрон, затем дай ему перейти вниз. Каждый переход даёт фотон одного точного цвета: поэтому у атомов линейчатые спектры.",
  ),
  protons: t("Protons", "Պրոտոններ", "Протоны"),
  neutrons: t("Neutrons", "Նեյտրոններ", "Нейтроны"),
  electrons: t("Electrons", "Էլեկտրոններ", "Электроны"),
  element: t("Element", "Տարր", "Элемент"),
  massNum: t("Mass number A", "Զանգվածային թիվ A", "Массовое число A"),
  charge: t("Charge", "Լիցք", "Заряд"),
  neutral: t("neutral atom", "չեզոք ատոմ", "нейтральный атом"),
  ion: t("ion", "իոն", "ион"),
  stable: t("stable isotope", "կայուն իզոտոպ", "стабильный изотоп"),
  radio: t("radioactive isotope", "ռադիոակտիվ իզոտոպ", "радиоактивный изотоп"),
  none: t("such a nucleus falls apart at once", "այդպիսի միջուկը անմիջապես քայքայվում է", "такое ядро сразу распадается"),
  noElement: t("No protons: no element", "Պրոտոններ չկան․ տարր չկա", "Нет протонов — нет элемента"),
  z: t("Atomic number Z", "Կարգաթիվ Z", "Порядковый номер Z"),
  valence: t("Outer electrons", "Արտաքին էլեկտրոններ", "Внешних электронов"),
  fire: t("Fire alpha particles", "Արձակել ալֆա մասնիկներ", "Пустить альфа-частицы"),
  through: t("went straight through", "անցան ուղիղ", "прошли насквозь"),
  bounced: t("were deflected strongly", "ուժեղ շեղվեցին", "сильно отклонились"),
  zoom: t("Show the nuclei", "Ցույց տալ միջուկները", "Показать ядра"),
  level: t("Level", "Մակարդակ", "Уровень"),
  photon: t("Photon", "Ֆոտոն", "Фотон"),
  uv: t("ultraviolet (invisible)", "ուլտրամանուշակագույն (անտեսանելի)", "ультрафиолет (невидимый)"),
  ir: t("infrared (invisible)", "ինֆրակարմիր (անտեսանելի)", "инфракрасный (невидимый)"),
  visible: t("visible", "տեսանելի", "видимый"),
  jump: t("Jump down", "Ցատկել ներքև", "Перейти вниз"),
};

// stable mass numbers for Z = 1…20, then radioactive ones that are well known
const STABLE: Record<number, number[]> = { 1: [1, 2], 2: [3, 4], 3: [6, 7], 4: [9], 5: [10, 11], 6: [12, 13], 7: [14, 15], 8: [16, 17, 18], 9: [19], 10: [20, 21, 22], 11: [23], 12: [24, 25, 26], 13: [27], 14: [28, 29, 30], 15: [31], 16: [32, 33, 34, 36], 17: [35, 37], 18: [36, 38, 40], 19: [39, 41], 20: [40, 42, 43, 44, 46, 48] };

export default function Atom({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "build";
  if (m === "shells") return <Shells spec={spec} lang={lang} />;
  if (m === "config") return <Config spec={spec} lang={lang} />;
  if (m === "rutherford") return <Rutherford spec={spec} lang={lang} />;
  if (m === "bohr") return <Bohr spec={spec} lang={lang} />;
  return <Build spec={spec} lang={lang} />;
}

function Counter({ label, value, set, min = 0, max, color }: { label: string; value: number; set: (n: number) => void; min?: number; max: number; color: string }) {
  return (
    <div style={{ display: "grid", gap: "0.2rem", justifyItems: "center" }}>
      <span style={{ fontSize: "0.8rem", fontWeight: 800, color }}>{label}</span>
      <span className="sim-counter">
        <button type="button" onClick={() => set(Math.max(min, value - 1))} aria-label={`${label} −`}>−</button>
        <b>{value}</b>
        <button type="button" onClick={() => set(Math.min(max, value + 1))} aria-label={`${label} +`}>+</button>
      </span>
    </div>
  );
}

function Nucleus({ p, n, cx, cy, scale = 1 }: { p: number; n: number; cx: number; cy: number; scale?: number }) {
  const total = p + n;
  const balls: Array<{ x: number; y: number; c: string }> = [];
  const r0 = 5 * scale;
  for (let i = 0; i < total; i++) {
    const a = i * 2.399963; // golden angle spiral keeps it round
    const rr = r0 * 0.9 * Math.sqrt(i);
    balls.push({ x: cx + rr * Math.cos(a), y: cy + rr * Math.sin(a), c: (i * p) % total < p ? "#e11d48" : "#94a3b8" });
  }
  // put the protons in evenly
  let pp = 0;
  balls.forEach((b, i) => { const want = Math.round(((i + 1) * p) / Math.max(1, total)); b.c = want > pp ? "#e11d48" : "#94a3b8"; if (want > pp) pp++; });
  return <g>{balls.reverse().map((b, i) => <circle key={i} cx={b.x} cy={b.y} r={r0} fill={b.c} stroke="#fff" strokeWidth="1" />)}</g>;
}

function Orbits({ counts, cx, cy, spin, r0 = 34, step = 20 }: { counts: number[]; cx: number; cy: number; spin: number; r0?: number; step?: number }) {
  return (
    <g>
      {counts.map((n, k) => {
        const r = r0 + k * step;
        return (
          <g key={k}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#c7d2fe" strokeWidth="1.5" />
            {Array.from({ length: n }, (_, i) => {
              const a = (i / n) * 2 * Math.PI + spin * (1 - k * 0.15) * 2 * Math.PI;
              return <circle key={i} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r="4.5" fill="#2563eb" stroke="#fff" strokeWidth="1" />;
            })}
          </g>
        );
      })}
    </g>
  );
}

function Build({ spec, lang }: SimProps) {
  const [p, setP] = useState(Number(spec.opts.p ?? 6));
  const [n, setN] = useState(Number(spec.opts.n ?? 6));
  const [e, setE] = useState(Number(spec.opts.e ?? 6));
  const spin = useLoop(12);
  const el = ELEMENTS[p - 1];
  const A = p + n;
  const q = p - e;
  const known = STABLE[p];
  const status = !p ? null : known?.includes(A) ? "stable" : known && Math.min(...known.map((a) => Math.abs(a - A))) <= 3 ? "radio" : "none";
  // electrons by shell 2, 8, 8 for the first 20
  const sh: number[] = [];
  let left = e;
  for (const cap of [2, 8, 8, 18]) { if (left <= 0) break; sh.push(Math.min(cap, left)); left -= cap; }
  return (
    <ArtFrame kind="experiment" title={L(W.build, lang)} body={spec.body || L(W.buildHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={240} h={240} label={L(W.build, lang)}>
          <Orbits counts={sh} cx={120} cy={120} spin={spin} r0={40} step={24} />
          <Nucleus p={p} n={n} cx={120} cy={120} scale={p + n > 24 ? 0.75 : 1} />
        </Stage>
        <div>
          {el ? (
            <div className="sim-el-card" style={{ marginTop: 0 }}>
              <div className="sim-el-big" style={{ background: "#e0e7ff" }}>
                <small>{p}</small>
                {el.sym}
                <i>{A}</i>
              </div>
              <div>
                <b style={{ fontSize: "1.1rem" }}>{el.name[lang]}{q ? <sup>{Math.abs(q) > 1 ? Math.abs(q) : ""}{q > 0 ? "+" : "−"}</sup> : null}</b>
                <p className="sim-small" style={{ fontSize: "0.85rem" }}>{el.name[lang]}-{A} · {q ? L(W.ion, lang) : L(W.neutral, lang)}</p>
              </div>
            </div>
          ) : <Note>{L(W.noElement, lang)}</Note>}
          {status ? <Note tone={status === "stable" ? "good" : "bad"}>{L(status === "stable" ? W.stable : status === "radio" ? W.radio : W.none, lang)}</Note> : null}
          <Readouts items={[[L(W.massNum, lang), String(A)], [L(W.charge, lang), q === 0 ? "0" : `${q > 0 ? "+" : "−"}${Math.abs(q)}`, q ? "#e11d48" : undefined] as [string, string, string?]].map((x) => x as [string, string, string])} />
        </div>
      </div>
      <div className="art-row" style={{ marginTop: "0.7rem", justifyContent: "space-around" }}>
        <Counter label={L(W.protons, lang)} value={p} set={setP} max={20} color="#e11d48" />
        <Counter label={L(W.neutrons, lang)} value={n} set={setN} max={30} color="#64748b" />
        <Counter label={L(W.electrons, lang)} value={e} set={setE} max={22} color="#2563eb" />
      </div>
    </ArtFrame>
  );
}

function Shells({ spec, lang }: SimProps) {
  const [z, setZ] = useState(Number(spec.opts.z ?? 11));
  const spin = useLoop(14);
  const el = ELEMENTS[z - 1];
  const sh = shells(z);
  const big = sh.length > 4;
  return (
    <ArtFrame kind="look" title={L(W.shells, lang)} body={spec.body || L(W.shellsHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={260} h={260} label={L(W.shells, lang)}>
          <Orbits counts={sh} cx={130} cy={130} spin={spin} r0={big ? 26 : 34} step={big ? 16 : 22} />
          <circle cx="130" cy="130" r="14" fill="#e11d48" />
          <text x="130" y="134" textAnchor="middle" className="sim-tag is-plain" fill="#fff">+{z}</text>
        </Stage>
        <div>
          <div className="sim-el-card" style={{ marginTop: 0 }}>
            <div className="sim-el-big" style={{ background: "#e0e7ff" }}><small>{z}</small>{el.sym}</div>
            <div>
              <b style={{ fontSize: "1.1rem" }}>{el.name[lang]}</b>
              <p style={{ fontSize: "0.85rem", fontWeight: 700 }}>{sh.join(", ")}</p>
            </div>
          </div>
          <Readouts items={[[L(W.valence, lang), String(sh[sh.length - 1]), "#2563eb"], [L(W.z, lang), String(z), "#e11d48"]]} />
        </div>
      </div>
      <Controls>
        <Slider label={L(W.element, lang)} value={z} min={1} max={36} digits={0} lang={lang} onChange={setZ} />
      </Controls>
    </ArtFrame>
  );
}

function Config({ spec, lang }: SimProps) {
  const [z, setZ] = useState(Number(spec.opts.z ?? 8));
  const el = ELEMENTS[z - 1];
  const conf = configuration(z);
  const boxes = (s: string) => ({ s: 1, p: 3, d: 5, f: 7 })[s[1] as "s"] ?? 1;
  return (
    <ArtFrame kind="look" title={L(W.config, lang)} body={spec.body || L(W.configHint, lang)}>
      <p style={{ fontWeight: 900, fontSize: "1.05rem" }}>
        {el.name[lang]} ({el.sym}): {conf.map(([s, n]) => <span key={s} style={{ marginRight: "0.35rem" }}>{s}<sup>{n}</sup></span>)}
      </p>
      <div style={{ display: "grid", gap: "0.45rem", marginTop: "0.6rem" }}>
        {conf.map(([s, n]) => {
          const k = boxes(s);
          // Hund's rule: one electron in each box first, then pair up
          const ups = Math.min(n, k), downs = Math.max(0, n - k);
          return (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <b style={{ width: "2.2rem", color: "#4f46e5" }}>{s}</b>
              <div style={{ display: "flex", gap: "2px" }}>
                {Array.from({ length: k }, (_, i) => (
                  <span key={i} style={{ width: "2rem", height: "2rem", border: "2px solid #c7d2fe", borderRadius: 6, display: "grid", placeItems: "center", fontWeight: 900, background: "#fff", color: "#2563eb" }}>
                    {i < ups ? "↑" : ""}{i < downs ? "↓" : ""}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Controls>
        <Slider label={L(W.element, lang)} value={z} min={1} max={36} digits={0} lang={lang} onChange={setZ} />
      </Controls>
    </ArtFrame>
  );
}

type Alpha = { y: number; x: number; vx: number; vy: number; hit: boolean };
function Rutherford({ spec, lang }: SimProps) {
  const [zoom, setZoom] = useState(false);
  const [stats, setStats] = useState({ through: 0, bounced: 0 });
  const alphas = useRef<Alpha[]>([]);
  const [, setTick] = useState(0);
  useEffect(() => {
    let id = 0;
    let last = performance.now();
    const nuclei = Array.from({ length: 5 }, (_, i) => ({ x: 200, y: 20 + i * 40 }));
    const tick = (now: number) => {
      const dt = Math.min(0.04, (now - last) / 1000);
      last = now;
      for (const a of alphas.current) {
        for (const n of nuclei) {
          const dx = a.x - n.x, dy = a.y - n.y, d2 = Math.max(4, dx * dx + dy * dy);
          const f = 9000 / d2;
          const d = Math.sqrt(d2);
          a.vx += (f * dx) / d * dt * 60;
          a.vy += (f * dy) / d * dt * 60;
          if (d < 14) a.hit = true;
        }
        a.x += a.vx * dt;
        a.y += a.vy * dt;
      }
      const gone = alphas.current.filter((a) => a.x > 330 || a.x < -10 || a.y < -10 || a.y > 210);
      if (gone.length) {
        setStats((s) => ({ through: s.through + gone.filter((a) => a.vx > 0 && Math.abs(a.vy) < a.vx * 0.5).length, bounced: s.bounced + gone.filter((a) => !(a.vx > 0 && Math.abs(a.vy) < a.vx * 0.5)).length }));
        alphas.current = alphas.current.filter((a) => !gone.includes(a));
      }
      setTick((n) => (n + 1) % 1e6);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);
  const fire = () => {
    for (let i = 0; i < 24; i++) alphas.current.push({ x: -5 - Math.random() * 60, y: 10 + Math.random() * 180, vx: 160, vy: 0, hit: false });
  };
  return (
    <ArtFrame kind="experiment" title={L(W.rutherford, lang)} body={spec.body || L(W.rutherfordHint, lang)}>
      <Stage w={320} h={200} label={L(W.rutherford, lang)} bg="#0f172a">
        <rect x="194" y="0" width="12" height="200" fill="#facc15" opacity="0.25" />
        {zoom ? Array.from({ length: 5 }, (_, i) => (
          <g key={i}>
            <circle cx="200" cy={20 + i * 40} r="17" fill="none" stroke="#facc15" strokeDasharray="2 3" opacity="0.5" />
            <circle cx="200" cy={20 + i * 40} r="3" fill="#f59e0b" />
          </g>
        )) : null}
        {alphas.current.map((a, i) => <circle key={i} cx={a.x} cy={a.y} r="2.5" fill={a.hit ? "#f43f5e" : "#38bdf8"} />)}
        <rect x="0" y="80" width="14" height="40" fill="#475569" />
      </Stage>
      <Readouts items={[[L(W.through, lang), String(stats.through), "#38bdf8"], [L(W.bounced, lang), String(stats.bounced), "#f43f5e"]]} />
      <div className="art-row" style={{ marginTop: "0.6rem" }}>
        <button type="button" className="art-btn is-primary" onClick={fire}>{L(W.fire, lang)}</button>
        <Toggle on={zoom} label={L(W.zoom, lang)} onChange={setZoom} />
      </div>
    </ArtFrame>
  );
}

const LEVELS = [1, 2, 3, 4, 5, 6];
const E = (n: number) => -13.6 / (n * n);
function lambdaColor(nm: number) {
  if (nm < 380) return "#a78bfa";
  if (nm > 750) return "#7f1d1d";
  const h = nm < 440 ? 270 - ((nm - 380) / 60) * 30 : nm < 490 ? 240 - ((nm - 440) / 50) * 60 : nm < 580 ? 180 - ((nm - 490) / 90) * 120 : 60 - ((nm - 580) / 170) * 60;
  return `hsl(${h} 90% 55%)`;
}

function Bohr({ spec, lang }: SimProps) {
  const [cur, setCur] = useState(1);
  const [lines, setLines] = useState<number[]>([]);
  const [flash, setFlash] = useState<{ nm: number; key: number } | null>(null);
  const y = (n: number) => 180 + (E(n) / 13.6) * 160;
  const jump = (to: number) => {
    if (to >= cur) { setCur(to); return; }
    const dE = E(cur) - E(to);
    const nm = 1240 / dE;
    setLines((l) => (l.includes(Math.round(nm)) ? l : [...l, Math.round(nm)]));
    setFlash({ nm, key: Date.now() });
    setCur(to);
  };
  const vis = (nm: number) => (nm < 380 ? W.uv : nm > 750 ? W.ir : W.visible);
  return (
    <ArtFrame kind="experiment" title={L(W.bohr, lang)} body={spec.body || L(W.bohrHint, lang)}>
      <Stage w={320} h={240} label={L(W.bohr, lang)}>
        {LEVELS.map((n) => (
          <g key={n} onClick={() => jump(n)} style={{ cursor: "pointer" }}>
            <rect x="20" y={y(n) - 9} width="180" height="18" fill="transparent" />
            <line x1="30" x2="190" y1={y(n)} y2={y(n)} stroke={n === cur ? "#4f46e5" : "#94a3b8"} strokeWidth={n === cur ? 3 : 1.5} />
            <text x="196" y={y(n) + 3} className="sim-small">n = {n} · {fmt(E(n), 2, lang)} {un("eV", lang)}</text>
          </g>
        ))}
        <circle cx="110" cy={y(cur)} r="7" fill="#2563eb" stroke="#fff" strokeWidth="2" style={{ transition: "cy 400ms ease" }} />
        {flash ? <path key={flash.key} d={`M 120 ${y(cur)} q 10 -8 20 0 t 20 0 t 20 0 t 20 0`} fill="none" stroke={lambdaColor(flash.nm)} strokeWidth="3" className="sim-fade-in" /> : null}
        <rect x="20" y="214" width="280" height="18" fill="#0f172a" rx="4" />
        {lines.map((nm) => nm >= 380 && nm <= 750 ? <rect key={nm} x={20 + ((nm - 380) / 370) * 280} y="214" width="3" height="18" fill={lambdaColor(nm)} /> : null)}
      </Stage>
      {flash ? <Note>{L(W.photon, lang)}: λ = {fmt(flash.nm, 0, lang)} {un("nm", lang)} · {L(vis(flash.nm), lang)}</Note> : null}
      <div className="art-chips">
        {LEVELS.filter((n) => n < cur).map((n) => <button key={n} type="button" className="art-chip" onClick={() => jump(n)}>{L(W.jump, lang)} → n = {n}</button>)}
      </div>
    </ArtFrame>
  );
}
