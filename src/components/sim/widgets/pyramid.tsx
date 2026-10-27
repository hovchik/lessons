"use client";

import { useState } from "react";
import { ArtFrame } from "@/components/art/frame";
import { cn } from "@/lib/utils";
import type { SimProps } from "../sim-block";
import { fmt, Readouts } from "../kit";
import { L, t } from "../labels";
import { COLORS } from "../math-kit";

/**
 * An energy pyramid: about a tenth of the energy passes up each level of a food chain.
 *   pyramid 🌾 🐇 🦊 🦅 energy=10000      levels from the bottom up, energy of the producers in kJ
 */
const W = {
  title: t("Energy pyramid: the 10% rule", "Էներգիայի բուրգ․ 10%-ի կանոն", "Пирамида энергии: правило 10%"),
  hint: t("Each level passes on only about a tenth of its energy; the rest is used for life and lost as heat. Tap a level.", "Յուրաքանչյուր մակարդակ փոխանցում է իր էներգիայի մոտ մեկ տասներորդը, մնացածը ծախսվում է կենսագործունեության վրա և կորչում որպես ջերմություն։ Հպի՛ր մակարդակին։", "Каждый уровень передаёт дальше лишь около десятой части энергии; остальное уходит на жизнь и рассеивается теплом. Нажми на уровень."),
  level: t("Level", "Մակարդակ", "Уровень"),
  energy: t("Energy", "Էներգիա", "Энергия"),
  share: t("Share of the start", "Սկզբնականի մասը", "Доля от исходной"),
  lost: t("Lost on the way", "Կորել է ճանապարհին", "Потеряно по пути"),
  names: [
    t("producers", "արտադրողներ", "продуценты"),
    t("primary consumers", "առաջնային սպառողներ", "консументы I порядка"),
    t("secondary consumers", "երկրորդային սպառողներ", "консументы II порядка"),
    t("tertiary consumers", "երրորդային սպառողներ", "консументы III порядка"),
    t("top predators", "գագաթային գիշատիչներ", "высшие хищники"),
  ],
};

const SHADES = [COLORS.c, "#22c55e", COLORS.b, "#f97316", COLORS.d];

export default function Pyramid({ spec, lang }: SimProps) {
  const icons = spec.args.length ? spec.args : ["🌾", "🐇", "🦊", "🦅"];
  const start = Number(spec.opts.energy) || 10000;
  const [active, setActive] = useState(icons.length - 1);
  const e = (k: number) => start * 0.1 ** k;
  const n = icons.length;
  const kj = (v: number) => `${fmt(v, v < 10 ? 1 : 0, lang)} kJ`;
  return (
    <ArtFrame kind="experiment" title={L(W.title, lang)} body={spec.body || L(W.hint, lang)}>
      <div className="sim-pyramid">
        {icons.map((_, j) => {
          const k = n - 1 - j;
          return (
            <button
              key={k}
              type="button"
              className={cn("sim-pyramid-level", active === k && "is-active")}
              style={{ width: `${34 + (66 * (n - k)) / n}%`, background: SHADES[k % SHADES.length], outline: active === k ? "3px solid #1e1b4b" : undefined }}
              onClick={() => setActive(k)}
            >
              <span>{icons[k]}</span>
              <span>{kj(e(k))}</span>
            </button>
          );
        })}
      </div>
      <Readouts
        items={[
          [L(W.level, lang), `${active + 1}: ${L(W.names[Math.min(active, W.names.length - 1)], lang)}`, SHADES[active % SHADES.length]],
          [L(W.energy, lang), kj(e(active)), COLORS.a],
          [L(W.share, lang), `${fmt(100 * 0.1 ** active, active > 2 ? 2 : 1, lang)}%`, COLORS.a],
          [L(W.lost, lang), kj(start - e(active)), COLORS.d],
        ]}
      />
    </ArtFrame>
  );
}
