"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { list } from "@/lib/art/spec";
import { configuration, ELEMENTS, shells, type Element, type Family } from "@/lib/sim/elements";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { Choice, fmt } from "../kit";
import { L, t } from "../labels";

const W = {
  title: t("The periodic table", "Պարբերական համակարգը", "Периодическая система"),
  hint: t("Tap any element to see its card. Switch the colouring to see how properties change across the table.", "Սեղմի՛ր ցանկացած տարրի վրա՝ նրա քարտը տեսնելու համար։ Փոխի՛ր գունավորումը՝ տեսնելու, թե ինչպես են փոխվում հատկությունները։", "Нажми на любой элемент, чтобы увидеть его карточку. Переключай раскраску, чтобы увидеть, как меняются свойства."),
  family: t("Families", "Ընտանիքներ", "Семейства"),
  metal: t("Metals and non-metals", "Մետաղներ և ոչ մետաղներ", "Металлы и неметаллы"),
  en: t("Electronegativity", "Էլեկտրաբացասականություն", "Электроотрицательность"),
  block: t("s, p, d, f blocks", "s, p, d, f բլոկներ", "s-, p-, d-, f-блоки"),
  period: t("Period", "Պարբերություն", "Период"),
  group: t("Group", "Խումբ", "Группа"),
  mass: t("Atomic mass", "Ատոմային զանգված", "Атомная масса"),
  config: t("Electron configuration", "Էլեկտրոնային բանաձև", "Электронная формула"),
  shells: t("Electrons in shells", "Էլեկտրոններն ըստ շերտերի", "Электроны по слоям"),
  enShort: t("Electronegativity", "Էլեկտրաբացասականություն", "Электроотрицательность"),
  metals: t("metal", "մետաղ", "металл"),
  nonmetals: t("non-metal", "ոչ մետաղ", "неметалл"),
  metalloids: t("metalloid", "կիսամետաղ", "полуметалл"),
  trendEn: t("Electronegativity grows to the right along a period and up a group; fluorine has the most.", "Էլեկտրաբացասականությունն աճում է պարբերությունում ձախից աջ և խմբում ներքևից վեր․ ամենամեծը ֆտորինն է։", "Электроотрицательность растёт слева направо по периоду и снизу вверх по группе; больше всех у фтора."),
  trendMetal: t("Metals are on the left and at the bottom, non-metals at the top right; the metalloids form a staircase between them.", "Մետաղները ձախում և ներքևում են, ոչ մետաղները՝ վերևում աջում․ նրանց միջև կիսամետաղները կազմում են «սանդուղք»։", "Металлы слева и внизу, неметаллы справа вверху; между ними «лесенкой» идут полуметаллы."),
};

export const FAMILY: Record<Family, { name: ReturnType<typeof t>; color: string }> = {
  alkali: { name: t("alkali metals", "ալկալիական մետաղներ", "щелочные металлы"), color: "#fca5a5" },
  alkaline: { name: t("alkaline-earth metals", "հողալկալիական մետաղներ", "щёлочноземельные металлы"), color: "#fdba74" },
  transition: { name: t("transition metals", "անցումային մետաղներ", "переходные металлы"), color: "#fcd34d" },
  post: { name: t("other metals", "այլ մետաղներ", "другие металлы"), color: "#cbd5e1" },
  metalloid: { name: t("metalloids", "կիսամետաղներ", "полуметаллы"), color: "#86efac" },
  nonmetal: { name: t("non-metals", "ոչ մետաղներ", "неметаллы"), color: "#7dd3fc" },
  halogen: { name: t("halogens", "հալոգեններ", "галогены"), color: "#a5b4fc" },
  noble: { name: t("noble gases", "իներտ գազեր", "благородные газы"), color: "#d8b4fe" },
  lanthanide: { name: t("lanthanides", "լանթանոիդներ", "лантаноиды"), color: "#f9a8d4" },
  actinide: { name: t("actinides", "ակտինոիդներ", "актиноиды"), color: "#fbcfe8" },
  unknown: { name: t("unknown", "անհայտ", "неизвестно"), color: "#e5e7eb" },
};

type Mode = "family" | "metal" | "en" | "block";

const isMetal = (e: Element) => !["nonmetal", "halogen", "noble", "metalloid"].includes(e.family);
const blockOf = (e: Element) => { const c = configuration(e.z); const last = c[c.length - 1]?.[0] ?? "1s"; return e.z === 2 ? "s" : last[1]; };
const BLOCK: Record<string, string> = { s: "#fca5a5", p: "#93c5fd", d: "#fcd34d", f: "#86efac" };

function color(e: Element, mode: Mode) {
  if (mode === "family") return FAMILY[e.family].color;
  if (mode === "metal") return e.family === "metalloid" ? "#86efac" : isMetal(e) ? "#cbd5e1" : "#7dd3fc";
  if (mode === "block") return BLOCK[blockOf(e)];
  if (e.en == null) return "#f1f5f9";
  const k = (e.en - 0.7) / (4 - 0.7);
  return `hsl(${220 - k * 220} 85% ${88 - k * 30}%)`;
}

const sup = (n: number) => String(n).replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]);

export default function PTable({ spec, lang }: SimProps) {
  const [mode, setMode] = useState<Mode>((["family", "metal", "en", "block"] as Mode[]).includes(spec.opts.mode as Mode) ? (spec.opts.mode as Mode) : "family");
  const marks = list(spec.opts.mark);
  const [sel, setSel] = useState<number>(Number(spec.opts.z ?? ELEMENTS.find((e) => e.sym === marks[0])?.z ?? 11));
  const e = ELEMENTS[sel - 1];
  const dim = (x: Element) => {
    if (marks.length) return !marks.includes(x.sym);
    if (spec.opts.group) return x.group !== Number(spec.opts.group);
    if (spec.opts.period) return x.period !== Number(spec.opts.period);
    return false;
  };
  const legend = mode === "family"
    ? (Object.keys(FAMILY) as Family[]).filter((f) => f !== "unknown").map((f) => [FAMILY[f].color, L(FAMILY[f].name, lang)])
    : mode === "metal" ? [["#cbd5e1", L(W.metals, lang)], ["#86efac", L(W.metalloids, lang)], ["#7dd3fc", L(W.nonmetals, lang)]]
    : mode === "block" ? Object.entries(BLOCK).map(([b, c]) => [c, `${b}`])
    : [["hsl(220 85% 88%)", "0,7"], ["hsl(110 85% 73%)", "2,3"], ["hsl(0 85% 58%)", "4,0"]];
  return (
    <ArtFrame kind="look" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-ptable-wrap">
        <div className="sim-ptable-inner">
          <div className="sim-ptable" role="grid">
            {ELEMENTS.map((x) => (
              <button
                key={x.z}
                type="button"
                className={cn("sim-el", sel === x.z && "is-active", dim(x) && "is-dim")}
                style={{ gridRow: x.row, gridColumn: x.col, background: color(x, mode) }}
                onClick={() => setSel(x.z)}
                aria-label={`${x.z} ${x.name[lang]}`}
              >
                <small>{x.z}</small>
                {x.sym}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="sim-legend">
        {legend.map(([c, n]) => <span key={n}><i style={{ background: c }} />{n}</span>)}
      </div>
      <div className="sim-el-card" aria-live="polite">
        <div className="sim-el-big" style={{ background: color(e, mode) }}>
          <small>{e.z}</small>
          {e.sym}
          <i>{fmt(e.mass, e.mass > 100 ? 1 : 2, lang)}</i>
        </div>
        <div>
          <b style={{ fontSize: "1.1rem" }}>{e.name[lang]}</b>
          <div className="sim-small-note">
            {L(FAMILY[e.family].name, lang)} · {L(W.period, lang)} {e.period}{e.group ? ` · ${L(W.group, lang)} ${e.group}` : ""}
          </div>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, marginTop: "0.25rem" }}>
            {L(W.config, lang)}: {configuration(e.z).map(([s, n]) => `${s}${sup(n)}`).join(" ")}
          </div>
          <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>
            {L(W.shells, lang)}: {shells(e.z).join(", ")}{e.en != null ? ` · ${L(W.enShort, lang)} ${fmt(e.en, 2, lang)}` : ""}
          </div>
        </div>
      </div>
      {mode === "en" ? <p className="sim-note">{L(W.trendEn, lang)}</p> : mode === "metal" ? <p className="sim-note">{L(W.trendMetal, lang)}</p> : null}
      <Choice value={mode} options={[["family", L(W.family, lang)], ["metal", L(W.metal, lang)], ["en", L(W.en, lang)], ["block", L(W.block, lang)]]} onChange={setMode} />
    </ArtFrame>
  );
}
