"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Note, Stage, useLoop } from "../kit";
import { L, t } from "../labels";

const W = {
  title: t("Experiment: flame tests", "Փորձ․ բոցի գունավորում", "Опыт: окрашивание пламени"),
  hint: t(
    "Dip a clean wire loop into a salt and hold it in the flame. Heat lifts the metal's electrons to higher levels; when they fall back they give out light of a colour that belongs to that metal only.",
    "Մաքուր մետաղալարի օղակը թաթախի՛ր աղի մեջ և մտցրո՛ւ բոցի մեջ։ Ջերմությունը մետաղի էլեկտրոնները բարձրացնում է ավելի բարձր մակարդակներ․ հետ իջնելիս նրանք ճառագում են միայն այդ մետաղին բնորոշ գույնի լույս։",
    "Окуни чистую проволочную петлю в соль и внеси в пламя. Тепло поднимает электроны металла на более высокие уровни; возвращаясь, они испускают свет цвета, присущего только этому металлу.",
  ),
  dip: t("Into the flame", "Բոցի մեջ", "В пламя"),
  out: t("Take out", "Հանել", "Вынуть"),
  why: t("This is how chemists find a metal in a sample, and how fireworks get their colours.", "Այսպես են քիմիկոսները հայտնաբերում մետաղը նմուշում, և այսպես են հրավառությունները գույն ստանում։", "Так химики находят металл в образце, и так фейерверки получают свои цвета."),
};

const SALTS: Record<string, { color: string; name: ReturnType<typeof t> }> = {
  Li: { color: "#e11d48", name: t("crimson", "մուգ կարմիր", "карминово-красный") },
  Na: { color: "#facc15", name: t("bright yellow", "վառ դեղին", "ярко-жёлтый") },
  K: { color: "#c084fc", name: t("lilac", "մանուշակագույն", "фиолетовый") },
  Ca: { color: "#f97316", name: t("brick red", "աղյուսակարմիր", "кирпично-красный") },
  Sr: { color: "#dc2626", name: t("red", "կարմիր", "красный") },
  Ba: { color: "#84cc16", name: t("yellow-green", "դեղնականաչ", "жёлто-зелёный") },
  Cu: { color: "#14b8a6", name: t("blue-green", "կապտականաչ", "сине-зелёный") },
};

export default function Flame({ spec, lang }: SimProps) {
  const [salt, setSalt] = useState(spec.args[0] && SALTS[spec.args[0]] ? spec.args[0] : "Na");
  const [inside, setInside] = useState(false);
  const p = useLoop(0.6);
  const c = inside ? SALTS[salt].color : "#60a5fa";
  const fl = (s: number) => `M160,${150} C${140 - s},${120} ${150 - s},${80 + s * 2} 160,${40 + s * 3} C${170 + s},${80 + s * 2} ${180 + s},${120} 160,150 Z`;
  const wob = Math.sin(p * 6.283) * 3;
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <Stage w={320} h={200} label={L(W.title, lang)} bg="#1e1b4b">
        <rect x={150} y={150} width={20} height={34} fill="#94a3b8" />
        <rect x={130} y={184} width={60} height={8} rx="3" fill="#64748b" />
        <path d={fl(wob)} fill={c} opacity={inside ? 0.85 : 0.5} style={{ transition: "fill 400ms ease" }} />
        <path d="M160,150 C152,135 154,118 160,100 C166,118 168,135 160,150 Z" fill={inside ? "#fff" : "#93c5fd"} opacity="0.6" />
        <g style={{ transform: `translate(${inside ? 0 : 70}px, ${inside ? 0 : -20}px)`, transition: "transform 500ms ease" }}>
          <line x1={168} y1={110} x2={290} y2={60} stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx={164} cy={112} r="5" fill="none" stroke="#cbd5e1" strokeWidth="2" />
          <rect x={286} y={52} width={30} height={14} rx="4" fill="#78350f" transform="rotate(-22 290 60)" />
        </g>
        {inside ? <text x={20} y={30} className="sim-tag" fill={c}>{salt}: {L(SALTS[salt].name, lang)}</text> : null}
      </Stage>
      <div className="art-row">
        <button type="button" className="art-btn is-primary" onClick={() => setInside(!inside)}>{L(inside ? W.out : W.dip, lang)}</button>
      </div>
      {inside ? <Note>{L(W.why, lang)}</Note> : null}
      <div className="art-chips">
        {Object.keys(SALTS).map((s) => (
          <button key={s} type="button" className={cn("art-chip", s === salt && "is-active")} onClick={() => setSalt(s)}>
            {s}Cl{s === "Ca" || s === "Sr" || s === "Ba" || s === "Cu" ? "₂" : ""}
          </button>
        ))}
      </div>
    </ArtFrame>
  );
}
