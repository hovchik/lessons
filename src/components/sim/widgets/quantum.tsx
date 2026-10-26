"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import type { SimProps } from "../sim-block";
import { Arrow, Choice, Controls, fmt, Graph, Note, PlayBar, Readouts, Slider, Stage, useClock, useLoop } from "../kit";
import { L, t, un } from "../labels";

const W = {
  photo: t("Experiment: the photoelectric effect", "Փորձ․ ֆոտոէֆեկտ", "Опыт: фотоэффект"),
  photoHint: t(
    "Shine light on a metal plate. Brighter red light still knocks out no electrons; only light with a high enough frequency does, because each electron takes the energy of one photon: hν = A + Eₖ.",
    "Լույս ուղղի՛ր մետաղե թիթեղին։ Նույնիսկ պայծառ կարմիր լույսը էլեկտրոններ դուրս չի մղում․ դա անում է միայն բավականաչափ բարձր հաճախությամբ լույսը, որովհետև ամեն էլեկտրոն ստանում է մեկ ֆոտոնի էներգիան՝ hν = A + Eₖ։",
    "Посвети на металлическую пластину. Даже яркий красный свет не выбивает электронов; это делает только свет достаточно высокой частоты, ведь каждый электрон получает энергию одного фотона: hν = A + Eₖ.",
  ),
  spectrum: t("The electromagnetic spectrum", "Էլեկտրամագնիսական սպեկտրը", "Шкала электромагнитных волн"),
  spectrumHint: t(
    "Drag along the scale. All these are the same kind of wave travelling at the speed of light; only the wavelength and the frequency change: c = λν.",
    "Շարժի՛ր սանդղակի երկայնքով։ Սրանք բոլորը նույն տեսակի ալիքներ են, որոնք տարածվում են լույսի արագությամբ․ փոխվում են միայն ալիքի երկարությունը և հաճախությունը՝ c = λν։",
    "Веди по шкале. Всё это волны одной природы, бегущие со скоростью света; меняются только длина волны и частота: c = λν.",
  ),
  lines: t("Experiment: spectra of gases", "Փորձ․ գազերի սպեկտրները", "Опыт: спектры газов"),
  linesHint: t(
    "Light from a hot solid gives a continuous rainbow. A glowing gas gives only a few bright lines, and each element has its own set, like a fingerprint.",
    "Տաք պինդ մարմնի լույսը տալիս է անընդհատ ծիածան։ Լուսարձակող գազը տալիս է միայն մի քանի պայծառ գծեր, և ամեն տարր ունի իր գծերը, ինչպես մատնահետքը։",
    "Свет раскалённого твёрдого тела даёт сплошную радугу. Светящийся газ даёт лишь несколько ярких линий, и у каждого элемента свой набор, как отпечаток пальца.",
  ),
  clock: t("Experiment: a light clock on a rocket", "Փորձ․ լուսային ժամացույց հրթիռում", "Опыт: световые часы на ракете"),
  clockHint: t(
    "A light clock ticks each time light goes up and down between two mirrors. Seen from the ground, the moving clock's light runs a longer slanted path, so the moving clock ticks slower: Δt = γ·Δt₀.",
    "Լուսային ժամացույցը «տկտկում» է ամեն անգամ, երբ լույսը գնում-գալիս է երկու հայելիների միջև։ Երկրից նայելիս շարժվող ժամացույցի լույսն անցնում է ավելի երկար թեք ճանապարհ, ուստի շարժվող ժամացույցն ավելի դանդաղ է աշխատում՝ Δt = γ·Δt₀։",
    "Световые часы «тикают» каждый раз, когда свет проходит туда и обратно между двумя зеркалами. С Земли свет в движущихся часах идёт по более длинному косому пути, поэтому движущиеся часы идут медленнее: Δt = γ·Δt₀.",
  ),
  wl: t("Wavelength λ", "Ալիքի երկարություն λ", "Длина волны λ"),
  bright: t("Brightness", "Պայծառություն", "Яркость"),
  metal: t("Metal", "Մետաղ", "Металл"),
  photonE: t("Photon energy hν", "Ֆոտոնի էներգիա hν", "Энергия фотона hν"),
  work: t("Work function A", "Ելքի աշխատանք A", "Работа выхода A"),
  ek: t("Electron energy Eₖ", "Էլեկտրոնի էներգիա Eₖ", "Энергия электрона Eₖ"),
  none: t("No electrons: the photons are too weak, however bright the light is.", "Էլեկտրոններ չկան․ ֆոտոնները շատ թույլ են, որքան էլ պայծառ լինի լույսը։", "Электронов нет: фотоны слишком слабые, как ни увеличивай яркость."),
  some: t("Electrons fly out. Brighter light gives more electrons, not faster ones.", "Էլեկտրոնները դուրս են թռչում։ Ավելի պայծառ լույսը տալիս է ավելի շատ էլեկտրոններ, ոչ թե ավելի արագ։", "Электроны вылетают. Более яркий свет даёт больше электронов, а не более быстрые."),
  graph: t("Eₖ against frequency", "Eₖ-ն ըստ հաճախության", "Eₖ от частоты"),
  f: t("Frequency ν", "Հաճախություն ν", "Частота ν"),
  use: t("Used for", "Կիրառություն", "Применение"),
  source: t("Light source", "Լույսի աղբյուր", "Источник света"),
  lamp: t("Hot lamp filament", "Լամպի տաք թել", "Нить лампы"),
  v: t("Rocket speed v", "Հրթիռի արագություն v", "Скорость ракеты v"),
  ground: t("Ground clock", "Երկրի ժամացույց", "Часы на Земле"),
  moving: t("Rocket clock", "Հրթիռի ժամացույց", "Часы на ракете"),
  ticks: t("ticks", "տիկ", "тиков"),
  gamma: t("γ = 1/√(1 − v²/c²)", "γ = 1/√(1 − v²/c²)", "γ = 1/√(1 − v²/c²)"),
};

const METALS: Record<string, { name: ReturnType<typeof t>; A: number }> = {
  cs: { name: t("Caesium", "Ցեզիում", "Цезий"), A: 1.9 },
  na: { name: t("Sodium", "Նատրիում", "Натрий"), A: 2.3 },
  zn: { name: t("Zinc", "Ցինկ", "Цинк"), A: 4.3 },
  cu: { name: t("Copper", "Պղինձ", "Медь"), A: 4.7 },
};

export function wlColor(nm: number) {
  if (nm < 380) return "#a78bfa";
  if (nm > 750) return "#7f1d1d";
  const h = nm < 440 ? 270 - ((nm - 380) / 60) * 30 : nm < 490 ? 240 - ((nm - 440) / 50) * 60 : nm < 580 ? 180 - ((nm - 490) / 90) * 120 : 60 - ((nm - 580) / 170) * 60;
  return `hsl(${h} 90% 55%)`;
}

export default function Quantum({ spec, lang }: SimProps) {
  const m = spec.opts.mode ?? "photo";
  if (m === "spectrum") return <Spectrum spec={spec} lang={lang} />;
  if (m === "lines") return <Lines spec={spec} lang={lang} />;
  if (m === "clock") return <LightClock spec={spec} lang={lang} />;
  return <Photo spec={spec} lang={lang} />;
}

function Photo({ spec, lang }: SimProps) {
  const [nm, setNm] = useState(Number(spec.opts.nm ?? 600));
  const [b, setB] = useState(60);
  const [metal, setMetal] = useState(spec.opts.metal && METALS[spec.opts.metal] ? spec.opts.metal : "na");
  const p = useLoop(1.4);
  const E = 1240 / nm;
  const A = METALS[metal].A;
  const ek = Math.max(0, E - A);
  const n = ek > 0 ? Math.round(b / 12) : 0;
  const col = wlColor(nm);
  const fx = (ev: number) => ev / 4.136; // ×10¹⁵ Hz
  const line = [[fx(A), 0], [fx(6.2), 6.2 - A]] as Array<[number, number]>;
  return (
    <ArtFrame kind="experiment" title={L(W.photo, lang)} body={spec.body || L(W.photoHint, lang)}>
      <div className="sim-layout is-split">
        <Stage w={320} h={180} label={L(W.photo, lang)}>
          <rect x="0" y="0" width="320" height="180" fill="#0f172a" />
          <path d="M 20 20 L 60 20 L 70 40 L 10 40 Z" fill="#64748b" />
          <polygon points="40,40 150,120 190,120 60,40" fill={col} opacity={0.12 + (b / 100) * 0.4} />
          {Array.from({ length: Math.max(1, Math.round(b / 15)) }, (_, k) => {
            const q = (p + k / Math.max(1, Math.round(b / 15))) % 1;
            const x = 45 + q * 125, y = 40 + q * 80;
            return <path key={k} d={`M ${x - 6} ${y - 4} q 3 -4 6 0 t 6 0`} transform={`rotate(36 ${x} ${y})`} fill="none" stroke={col} strokeWidth="2" />;
          })}
          <rect x="140" y="120" width="70" height="14" fill="#94a3b8" />
          <text x="175" y="150" textAnchor="middle" className="sim-small" fill="#e2e8f0">{L(METALS[metal].name, lang)}</text>
          {Array.from({ length: n }, (_, k) => {
            const q = (p * (0.6 + ek * 0.4) + k / Math.max(1, n)) % 1;
            const ang = -1.2 + (k % 5) * 0.25;
            const d = q * (30 + ek * 30);
            return <circle key={k} cx={175 + (k % 5 - 2) * 10 + Math.cos(ang) * d} cy={118 + Math.sin(ang) * d} r="3" fill="#38bdf8" />;
          })}
        </Stage>
        <Graph x={[0, 1.5]} y={[0, 5]} series={[{ pts: line, color: "#38bdf8" }]} dots={[[fx(E), ek, col]]} xLabel={`ν, 10¹⁵ ${un("Hz", lang)}`} yLabel={`Eₖ, ${un("eV", lang)}`} />
      </div>
      <Readouts
        items={[
          [L(W.photonE, lang), `${fmt(E, 2, lang)} ${un("eV", lang)}`, col],
          [L(W.work, lang), `${fmt(A, 1, lang)} ${un("eV", lang)}`],
          [L(W.ek, lang), `${fmt(ek, 2, lang)} ${un("eV", lang)}`, "#38bdf8"],
        ]}
      />
      <Note tone={ek > 0 ? "good" : "bad"}>{L(ek > 0 ? W.some : W.none, lang)}</Note>
      <Controls>
        <Slider label={L(W.wl, lang)} value={nm} min={200} max={750} step={10} digits={0} unit={un("nm", lang)} lang={lang} onChange={setNm} />
        <Slider label={L(W.bright, lang)} value={b} min={10} max={100} step={10} digits={0} unit="%" lang={lang} onChange={setB} />
      </Controls>
      <Choice value={metal} options={Object.entries(METALS).map(([k, v]) => [k, `${L(v.name, lang)} · ${fmt(v.A, 1, lang)} ${un("eV", lang)}`])} onChange={setMetal} />
    </ArtFrame>
  );
}

const BANDS: Array<{ from: number; to: number; name: ReturnType<typeof t>; use: ReturnType<typeof t>; color: string }> = [
  { from: 3, to: 0, name: t("Radio waves", "Ռադիոալիքներ", "Радиоволны"), use: t("radio, TV, mobile phones", "ռադիո, հեռուստատեսություն, բջջային հեռախոս", "радио, ТВ, мобильная связь"), color: "#94a3b8" },
  { from: 0, to: -3, name: t("Microwaves", "Միկրոալիքներ", "Микроволны"), use: t("microwave ovens, Wi-Fi, radar", "միկրոալիքային վառարան, Wi-Fi, ռադար", "СВЧ-печи, Wi-Fi, радар"), color: "#64748b" },
  { from: -3, to: -6.12, name: t("Infrared", "Ինֆրակարմիր", "Инфракрасное"), use: t("heat, remote controls, night cameras", "ջերմություն, հեռակառավարման վահանակ, գիշերային տեսախցիկ", "тепло, пульты, тепловизоры"), color: "#b91c1c" },
  { from: -6.12, to: -6.42, name: t("Visible light", "Տեսանելի լույս", "Видимый свет"), use: t("our eyes, photosynthesis", "մեր աչքերը, ֆոտոսինթեզ", "наше зрение, фотосинтез"), color: "#22c55e" },
  { from: -6.42, to: -8, name: t("Ultraviolet", "Ուլտրամանուշակագույն", "Ультрафиолет"), use: t("tanning, killing germs, vitamin D", "արևայրուկ, մանրէների ոչնչացում, վիտամին D", "загар, обеззараживание, витамин D"), color: "#7c3aed" },
  { from: -8, to: -11, name: t("X-rays", "Ռենտգենյան ճառագայթներ", "Рентгеновское"), use: t("medical images, airport scanners", "բժշկական նկարներ, օդանավակայանի սկաներ", "снимки в медицине, досмотр в аэропорту"), color: "#0ea5e9" },
  { from: -11, to: -14, name: t("Gamma rays", "Գամմա ճառագայթներ", "Гамма-излучение"), use: t("cancer treatment, nuclear decay", "քաղցկեղի բուժում, միջուկային տրոհում", "лечение рака, ядерный распад"), color: "#16a34a" },
];

function Spectrum({ spec, lang }: SimProps) {
  const [lg, setLg] = useState(Number(spec.opts.log ?? -6.5));
  const X = (v: number) => 10 + ((3 - v) / 17) * 300;
  const band = BANDS.find((b) => lg <= b.from && lg >= b.to) ?? BANDS[BANDS.length - 1];
  const lambda = 10 ** lg;
  const f = 3e8 / lambda;
  const exp = (v: number) => { const e = Math.floor(Math.log10(v)); return `${fmt(v / 10 ** e, 1, lang)}·10${String(e).replace("-", "⁻").replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)])}`; };
  const waveLen = Math.max(4, Math.min(120, (lg + 14) * 7));
  const wave = Array.from({ length: 121 }, (_, k) => `${10 + k * 2.5},${60 + Math.sin((k * 2.5 * 2 * Math.PI) / waveLen) * 16}`).join(" ");
  return (
    <ArtFrame kind="look" title={L(W.spectrum, lang)} body={spec.body || L(W.spectrumHint, lang)}>
      <Stage w={320} h={150} label={L(W.spectrum, lang)}>
        <polyline points={wave} fill="none" stroke={band.color === "#22c55e" ? wlColor(lambda * 1e9) : band.color} strokeWidth="2" />
        {BANDS.map((b, k) => (
          <rect key={k} x={X(b.from)} y="96" width={X(b.to) - X(b.from)} height="22" fill={b.color} opacity={b === band ? 1 : 0.45} />
        ))}
        <defs>
          <linearGradient id="vis-grad" x1="0" x2="1">
            {[750, 650, 590, 550, 490, 450, 400].map((w, k) => <stop key={w} offset={k / 6} stopColor={wlColor(w)} />)}
          </linearGradient>
        </defs>
        <rect x={X(-6.12)} y="96" width={X(-6.42) - X(-6.12)} height="22" fill="url(#vis-grad)" />
        <line x1={X(lg)} x2={X(lg)} y1="88" y2="124" stroke="#1e1b4b" strokeWidth="2" />
        <text x="10" y="138" className="sim-axis">1 {un("km", lang)}</text>
        <text x="310" y="138" textAnchor="end" className="sim-axis">10⁻¹⁴ {un("m", lang)}</text>
        <text x="160" y="16" textAnchor="middle" className="sim-tag" fill="#1e1b4b">{L(band.name, lang)}</text>
      </Stage>
      <Readouts items={[["λ", `${exp(lambda)} ${un("m", lang)}`], ["ν", `${exp(f)} ${un("Hz", lang)}`], [L(W.use, lang), L(band.use, lang)]]} />
      <Controls>
        <Slider label={L(W.wl, lang)} value={-lg} min={-3} max={14} step={0.1} display={`${exp(lambda)} ${un("m", lang)}`} lang={lang} onChange={(v) => setLg(-v)} />
      </Controls>
      <div className="art-chips">
        {BANDS.map((b) => <button key={b.from} type="button" className={`art-chip${b === band ? " is-active" : ""}`} onClick={() => setLg((b.from + b.to) / 2)}>{L(b.name, lang)}</button>)}
      </div>
    </ArtFrame>
  );
}

const GAS_LINES: Record<string, { name: ReturnType<typeof t>; nm: number[] }> = {
  lamp: { name: W.lamp, nm: [] },
  h: { name: t("Hydrogen", "Ջրածին", "Водород"), nm: [410, 434, 486, 656] },
  he: { name: t("Helium", "Հելիում", "Гелий"), nm: [447, 471, 492, 502, 588, 668, 707] },
  na: { name: t("Sodium", "Նատրիում", "Натрий"), nm: [589, 590] },
  hg: { name: t("Mercury", "Սնդիկ", "Ртуть"), nm: [405, 436, 546, 577, 579] },
  ne: { name: t("Neon", "Նեոն", "Неон"), nm: [585, 603, 607, 614, 616, 621, 626, 633, 638, 640, 650, 660, 693, 703] },
};

function Lines({ spec, lang }: SimProps) {
  const [g, setG] = useState(spec.opts.gas && GAS_LINES[spec.opts.gas] ? spec.opts.gas : "h");
  const X = (nm: number) => 10 + ((nm - 380) / 370) * 300;
  const gas = GAS_LINES[g];
  return (
    <ArtFrame kind="experiment" title={L(W.lines, lang)} body={spec.body || L(W.linesHint, lang)}>
      <Stage w={320} h={120} label={L(W.lines, lang)}>
        <defs>
          <linearGradient id="cont-grad" x1="0" x2="1">
            {Array.from({ length: 12 }, (_, k) => <stop key={k} offset={k / 11} stopColor={wlColor(380 + (k / 11) * 370)} />)}
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="300" height="60" rx="4" fill={g === "lamp" ? "url(#cont-grad)" : "#0b1020"} />
        {gas.nm.map((nm) => <rect key={nm} x={X(nm) - 1.5} y="20" width="3" height="60" fill={wlColor(nm)} />)}
        {[400, 500, 600, 700].map((nm) => <text key={nm} x={X(nm)} y="96" textAnchor="middle" className="sim-axis">{nm}</text>)}
        <text x="310" y="112" textAnchor="end" className="sim-axis is-name">λ, {un("nm", lang)}</text>
      </Stage>
      <Choice value={g} options={Object.entries(GAS_LINES).map(([k, v]) => [k, L(v.name, lang)])} onChange={setG} />
    </ArtFrame>
  );
}

function LightClock({ spec, lang }: SimProps) {
  const [beta, setBeta] = useState(Number(spec.opts.v ?? 0.6));
  const clock = useClock({ autoplay: true });
  const gamma = 1 / Math.sqrt(1 - beta * beta);
  const tick = 1; // proper tick time in seconds of animation
  const s = clock.t;
  const ph0 = (s / tick) % 1;
  const ph = (s / (tick * gamma)) % 1;
  const y = (q: number) => 20 + (q < 0.5 ? q * 2 : 2 - q * 2) * 60;
  // light runs at 120 px/s; in the moving clock its vertical speed is c/γ
  const c = 120;
  const mx = 170 + ((c * beta * s) % 120);
  const since = ((s / (tick * gamma)) % 0.5) * tick * gamma;
  const fromX = Math.max(140, mx - c * beta * since);
  return (
    <ArtFrame kind="experiment" title={L(W.clock, lang)} body={spec.body || L(W.clockHint, lang)}>
      <Stage w={320} h={110} label={L(W.clock, lang)}>
        <line x1="20" x2="70" y1="20" y2="20" stroke="#334155" strokeWidth="3" />
        <line x1="20" x2="70" y1="80" y2="80" stroke="#334155" strokeWidth="3" />
        <circle cx="45" cy={y(ph0)} r="4" fill="#facc15" />
        <text x="45" y="100" textAnchor="middle" className="sim-small">{L(W.ground, lang)}</text>
        <line x1={mx - 25} x2={mx + 25} y1="20" y2="20" stroke="#4f46e5" strokeWidth="3" />
        <line x1={mx - 25} x2={mx + 25} y1="80" y2="80" stroke="#4f46e5" strokeWidth="3" />
        <line x1={fromX} y1={ph < 0.5 ? 20 : 80} x2={mx} y2={y(ph)} stroke="#facc15" strokeDasharray="2 3" opacity="0.7" />
        <circle cx={mx} cy={y(ph)} r="4" fill="#facc15" />
        <Arrow x1={mx - 14} y1={50} x2={mx + 14 + beta * 20} y2={50} color="#4f46e5" width={2} label="v" />
        <text x={240} y="100" textAnchor="middle" className="sim-small">{L(W.moving, lang)}</text>
      </Stage>
      <Readouts
        items={[
          ["γ", fmt(gamma, 2, lang), "#4f46e5"],
          [L(W.ground, lang), `${Math.floor(s / tick)} ${L(W.ticks, lang)}`],
          [L(W.moving, lang), `${Math.floor(s / (tick * gamma))} ${L(W.ticks, lang)}`, "#4f46e5"],
        ]}
      />
      <Controls>
        <Slider label={L(W.v, lang)} value={beta} min={0} max={0.99} step={0.01} display={`${fmt(beta, 2, lang)}c`} lang={lang} onChange={(v) => { setBeta(v); clock.reset(); clock.setPlaying(true); }} />
      </Controls>
      <PlayBar clock={clock} lang={lang} />
    </ArtFrame>
  );
}
