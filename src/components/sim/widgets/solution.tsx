"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Beaker, chemText } from "../chem-draw";
import { Choice, Note, Readouts, Slider, Stage, fmt } from "../kit";
import { L, t, un } from "../labels";
import { mr } from "./mole";

const W = {
  title: t("Experiment: make a solution", "Փորձ․ պատրաստի՛ր լուծույթ", "Опыт: приготовь раствор"),
  fraction: t("Mass fraction", "Զանգվածային բաժին", "Массовая доля"),
  dilute: t("Add water", "Ավելացնել ջուր", "Разбавить"),
  mix: t("Mix two", "Խառնել երկուսը", "Смешать два"),
  molar: t("Molar concentration", "Մոլային կոնցենտրացիա", "Молярная концентрация"),
  hintFraction: t(
    "Dissolve salt in water. The mass fraction of the solute is w = m(solute) / m(solution), where the solution is salt plus water.",
    "Լուծի՛ր աղը ջրում։ Լուծված նյութի զանգվածային բաժինը w = m(նյութ) / m(լուծույթ) է, որտեղ լուծույթը աղ + ջուր է։",
    "Растворяй соль в воде. Массовая доля растворённого вещества w = m(вещества) / m(раствора), а раствор — это соль плюс вода.",
  ),
  hintDilute: t(
    "We start with 100 g of a 20% salt solution. Adding water changes the mass of the solution but not the mass of the salt in it.",
    "Ունենք աղի 20%-անոց լուծույթի 100 գ։ Ջուր ավելացնելիս փոխվում է լուծույթի զանգվածը, բայց ոչ նրանում եղած աղի զանգվածը։",
    "Есть 100 г 20%-го раствора соли. При добавлении воды меняется масса раствора, но не масса соли в нём.",
  ),
  hintMix: t(
    "Pour two solutions of the same salt together. The salt masses add up and the solution masses add up: w = (m₁w₁ + m₂w₂) / (m₁ + m₂).",
    "Միացրո՛ւ նույն աղի երկու լուծույթ։ Աղի զանգվածները գումարվում են, լուծույթների զանգվածները նույնպես․ w = (m₁w₁ + m₂w₂) / (m₁ + m₂)։",
    "Слей два раствора одной соли. Массы соли складываются, массы растворов тоже: w = (m₁w₁ + m₂w₂) / (m₁ + m₂).",
  ),
  hintMolar: t(
    "Molar concentration tells how many moles of the solute are in one litre of solution: c = n / V, where n = m / M.",
    "Մոլային կոնցենտրացիան ցույց է տալիս, թե լուծված նյութի քանի մոլ կա մեկ լիտր լուծույթում․ c = n / V, որտեղ n = m / M։",
    "Молярная концентрация показывает, сколько молей вещества в одном литре раствора: c = n / V, где n = m / M.",
  ),
  salt: t("Salt", "Աղ", "Соль"),
  water: t("Water", "Ջուր", "Вода"),
  solMass: t("Solution", "Լուծույթ", "Раствор"),
  added: t("Water added", "Ավելացված ջուր", "Добавлено воды"),
  same: t("The salt is still 20 g: only the water changed.", "Աղը դեռ 20 գ է․ փոխվել է միայն ջուրը։", "Соли по-прежнему 20 г: изменилась только вода."),
  first: t("First", "Առաջին", "Первый"),
  second: t("Second", "Երկրորդ", "Второй"),
  mass: t("mass", "զանգված", "масса"),
  between: t("The mixture is always between the two: closer to the one you poured more of.", "Խառնուրդը միշտ երկուսի միջև է՝ ավելի մոտ նրան, որից շատ ես լցրել։", "Смесь всегда между двумя: ближе к тому, которого налили больше."),
  vol: t("Volume of solution", "Լուծույթի ծավալ", "Объём раствора"),
  conc: t("Concentration c", "Կոնցենտրացիա c", "Концентрация c"),
  amount: t("Amount n", "Քանակ n", "Количество n"),
};

type Mode = "fraction" | "dilute" | "mix" | "molar";
const SUBST: Record<string, string> = { NaCl: "#e0f2fe", CuSO4: "#3b82f6", KMnO4: "#9333ea", NaOH: "#e0f2fe", "K2Cr2O7": "#f97316" };

/** Lighter or deeper tint of a colour by concentration (0..1). */
const deepen = (c: string, k: number) => `color-mix(in srgb, ${c} ${Math.round(12 + k * 88)}%, #e0f2fe)`;

export default function Solution({ spec, lang }: SimProps) {
  const init = (["fraction", "dilute", "mix", "molar"] as Mode[]).find((m) => m === spec.opts.mode) ?? "fraction";
  const [mode, setMode] = useState<Mode>(init);
  const hint = { fraction: W.hintFraction, dilute: W.hintDilute, mix: W.hintMix, molar: W.hintMolar }[mode];
  const modes: Mode[] = spec.opts.only === "on" ? [init] : ["fraction", "dilute", "mix", "molar"];
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body && mode === init ? spec.body : L(hint, lang)}>
      {mode === "fraction" ? <Fraction lang={lang} /> : mode === "dilute" ? <Dilute lang={lang} /> : mode === "mix" ? <Mix lang={lang} /> : <Molar lang={lang} />}
      {modes.length > 1 ? <Choice value={mode} options={modes.map((m) => [m, L(W[m], lang)])} onChange={setMode} /> : null}
    </ArtFrame>
  );
}

type P = { lang: SimProps["lang"] };

function Fraction({ lang }: P) {
  const [salt, setSalt] = useState(20);
  const [water, setWater] = useState(80);
  const w = salt / (salt + water || 1);
  return (
    <>
      <Stage w={320} h={140} label={L(W.fraction, lang)}>
        <Beaker x={110} y={14} w={100} h={110} level={0.2 + ((salt + water) / 250) * 0.7} color={deepen("#22d3ee", w / 0.5)} />
        <text x={160} y={10} textAnchor="middle" className="sim-small">w = {fmt(w * 100, 1, lang)}%</text>
        <g>
          <rect x={20} y={70} width={60} height={54} rx="6" fill="#fff" stroke="#cbd5e1" />
          <text x={50} y={92} textAnchor="middle" className="sim-tag">{fmt(salt, 0, lang)} {un("g", lang)}</text>
          <text x={50} y={110} textAnchor="middle" className="sim-small">{L(W.salt, lang)}</text>
          <rect x={240} y={70} width={60} height={54} rx="6" fill="#e0f2fe" stroke="#93c5fd" />
          <text x={270} y={92} textAnchor="middle" className="sim-tag">{fmt(water, 0, lang)} {un("g", lang)}</text>
          <text x={270} y={110} textAnchor="middle" className="sim-small">{L(W.water, lang)}</text>
        </g>
      </Stage>
      <Slider label={L(W.salt, lang)} value={salt} min={0} max={60} step={1} unit={un("g", lang)} lang={lang} onChange={setSalt} />
      <Slider label={L(W.water, lang)} value={water} min={20} max={190} step={1} unit={un("g", lang)} lang={lang} onChange={setWater} />
      <Readouts items={[[L(W.solMass, lang), `${fmt(salt + water, 0, lang)} ${un("g", lang)}`], ["w", `${fmt(salt, 0, lang)} / ${fmt(salt + water, 0, lang)} = ${fmt(w * 100, 1, lang)}%`, "#0891b2"]]} />
    </>
  );
}

function Dilute({ lang }: P) {
  const [add, setAdd] = useState(0);
  const total = 100 + add;
  const w = 20 / total;
  return (
    <>
      <Stage w={320} h={140} label={L(W.dilute, lang)}>
        <Beaker x={110} y={14} w={100} h={110} level={0.25 + (add / 300) * 0.65} color={deepen("#22d3ee", w / 0.2)}>
          {Array.from({ length: 20 }, (_, i) => <circle key={i} cx={120 + ((i * 37) % 80)} cy={120 - ((i * 53) % Math.round(20 + (add / 300) * 70))} r="2.2" fill="#0e7490" />)}
        </Beaker>
        <text x={50} y={70} textAnchor="middle" className="sim-tag">+ {fmt(add, 0, lang)} {un("g", lang)}</text>
        <text x={50} y={86} textAnchor="middle" className="sim-small">{L(W.water, lang)}</text>
        <text x={270} y={70} textAnchor="middle" className="sim-tag">20 {un("g", lang)}</text>
        <text x={270} y={86} textAnchor="middle" className="sim-small">{L(W.salt, lang)}</text>
      </Stage>
      <Slider label={L(W.added, lang)} value={add} min={0} max={300} step={10} unit={un("g", lang)} lang={lang} onChange={setAdd} />
      <Readouts items={[[L(W.solMass, lang), `${fmt(total, 0, lang)} ${un("g", lang)}`], ["w", `20 / ${fmt(total, 0, lang)} = ${fmt(w * 100, 1, lang)}%`, "#0891b2"]]} />
      {add > 0 ? <Note>{L(W.same, lang)}</Note> : null}
    </>
  );
}

function Mix({ lang }: P) {
  const [m1, setM1] = useState(100);
  const [w1, setW1] = useState(10);
  const [m2, setM2] = useState(50);
  const [w2, setW2] = useState(40);
  const w = (m1 * w1 + m2 * w2) / (m1 + m2);
  const col = (x: number) => deepen("#22d3ee", x / 50);
  return (
    <>
      <Stage w={320} h={130} label={L(W.mix, lang)}>
        <Beaker x={14} y={30} w={70} h={80} level={m1 / 220} color={col(w1)} />
        <text x={49} y={124} textAnchor="middle" className="sim-small">{fmt(w1, 0, lang)}%</text>
        <text x={100} y={74} textAnchor="middle" className="sim-tag">+</text>
        <Beaker x={116} y={30} w={70} h={80} level={m2 / 220} color={col(w2)} />
        <text x={151} y={124} textAnchor="middle" className="sim-small">{fmt(w2, 0, lang)}%</text>
        <text x={204} y={74} textAnchor="middle" className="sim-tag">=</text>
        <Beaker x={222} y={14} w={86} h={96} level={(m1 + m2) / 420} color={col(w)} />
        <text x={265} y={124} textAnchor="middle" className="sim-tag">{fmt(w, 1, lang)}%</text>
      </Stage>
      <div className="sim-layout is-even">
        <div>
          <Slider label={`${L(W.first, lang)}: ${L(W.mass, lang)}`} value={m1} min={10} max={200} step={10} unit={un("g", lang)} lang={lang} onChange={setM1} />
          <Slider label={`${L(W.first, lang)}: w₁`} value={w1} min={0} max={50} step={1} unit="%" lang={lang} onChange={setW1} />
        </div>
        <div>
          <Slider label={`${L(W.second, lang)}: ${L(W.mass, lang)}`} value={m2} min={10} max={200} step={10} unit={un("g", lang)} lang={lang} onChange={setM2} />
          <Slider label={`${L(W.second, lang)}: w₂`} value={w2} min={0} max={50} step={1} unit="%" lang={lang} onChange={setW2} />
        </div>
      </div>
      <Readouts items={[[L(W.salt, lang), `${fmt((m1 * w1) / 100, 1, lang)} + ${fmt((m2 * w2) / 100, 1, lang)} = ${fmt((m1 * w1 + m2 * w2) / 100, 1, lang)} ${un("g", lang)}`], [L(W.solMass, lang), `${fmt(m1 + m2, 0, lang)} ${un("g", lang)}`], ["w", `${fmt(w, 1, lang)}%`, "#0891b2"]]} />
      <Note>{L(W.between, lang)}</Note>
    </>
  );
}

function Molar({ lang }: P) {
  const [sub, setSub] = useState("CuSO4");
  const [m, setM] = useState(16);
  const [v, setV] = useState(500);
  const M = mr(sub);
  const n = m / M;
  const c = n / (v / 1000);
  return (
    <>
      <Stage w={320} h={140} label={L(W.molar, lang)}>
        <Beaker x={115} y={14} w={90} h={110} level={v / 1100} color={deepen(SUBST[sub], Math.min(1, c / 1))} />
        <text x={50} y={60} textAnchor="middle" className="sim-tag">{chemText(sub)}</text>
        <text x={50} y={78} textAnchor="middle" className="sim-small">M = {fmt(M, 1, lang)}</text>
        <text x={270} y={60} textAnchor="middle" className="sim-tag">{fmt(c, 2, lang)}</text>
        <text x={270} y={78} textAnchor="middle" className="sim-small">{un("mol", lang)}/{un("L", lang)}</text>
      </Stage>
      <Slider label={`m(${chemText(sub)})`} value={m} min={1} max={80} step={1} unit={un("g", lang)} lang={lang} onChange={setM} />
      <Slider label={L(W.vol, lang)} value={v} min={100} max={1000} step={50} unit={un("mL", lang)} lang={lang} onChange={setV} />
      <Readouts items={[[L(W.amount, lang), `${fmt(m, 0, lang)} / ${fmt(M, 1, lang)} = ${fmt(n, 3, lang)} ${un("mol", lang)}`], [L(W.conc, lang), `${fmt(n, 3, lang)} / ${fmt(v / 1000, 2, lang)} = ${fmt(c, 2, lang)} ${un("mol", lang)}/${un("L", lang)}`, "#0891b2"]]} />
      <div className="art-chips">
        {Object.keys(SUBST).map((s) => <button key={s} type="button" className={cn("art-chip", s === sub && "is-active")} onClick={() => setSub(s)}>{chemText(s)}</button>)}
      </div>
    </>
  );
}
