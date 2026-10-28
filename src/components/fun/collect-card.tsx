"use client";

import { Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { COLLECTIONS, type Card } from "@/content/cards";
import { cn, pick } from "@/lib/utils";

const RARITY_RING: Record<Card["rarity"], string> = {
  common: "ring-2 ring-[var(--s-soft)]",
  rare: "ring-3 ring-sky-400",
  epic: "ring-3 ring-amber-400",
};
const RARITY_TAG: Record<Card["rarity"], string> = {
  common: "bg-muted text-muted-foreground",
  rare: "bg-sky-100 text-sky-800",
  epic: "bg-amber-100 text-amber-800",
};

/** The face of a card: picture, name, rarity and its fact. */
export function CardFace({ card, shiny, className }: { card: Card; shiny?: boolean; className?: string }) {
  const t = useTranslations("cards");
  const locale = useLocale();
  const color = COLLECTIONS.find((c) => c.id === card.collection)!.color;
  return (
    <article className={cn("flex h-full flex-col rounded-[20px] bg-card p-3 shadow-clay-sm", color, RARITY_RING[card.rarity], shiny && "card-holo", className)}>
      <div className="grid aspect-square place-items-center rounded-[14px] text-5xl sm:text-6xl" style={{ background: "var(--s-soft)" }}>
        <span aria-hidden="true">{card.emoji}</span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-1">
        <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide", RARITY_TAG[card.rarity])}>{t(`rarity.${card.rarity}`)}</span>
        {shiny && (
          <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold uppercase text-fuchsia-700">
            <Sparkles className="size-3" aria-hidden="true" />
            {t("shiny")}
          </span>
        )}
      </div>
      <h3 className="mt-1 text-sm font-black leading-tight text-balance">{pick(card.name, locale)}</h3>
      <p className="mt-1 text-xs leading-snug text-muted-foreground">{pick(card.fact, locale)}</p>
    </article>
  );
}

/** New cards lie face down until the pupil turns them over; that marks them seen. */
export function NewCards({ cards }: { cards: { card: Card; shiny: boolean }[] }) {
  const t = useTranslations("cards");
  const [open, setOpen] = useState<Set<string>>(new Set());
  const flip = (id: string) => {
    if (open.has(id)) return;
    setOpen((s) => new Set(s).add(id));
    fetch("/api/cards/seen", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ cardIds: [id] }) })
      // No live refresh here: it would whisk the card away mid-turn. The album sorts it in on the next visit.
      .catch(() => {});
  };
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {cards.map(({ card, shiny }) => {
        const isOpen = open.has(card.id);
        return (
          <li key={card.id} className="card-flip" data-open={isOpen}>
            <div className="card-flip-inner">
              <button
                type="button"
                onClick={() => flip(card.id)}
                disabled={isOpen}
                aria-hidden={isOpen || undefined}
                className={cn("card-flip-face grid min-h-56 place-items-center rounded-[20px] bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-4 text-white shadow-clay-sm", !isOpen && "card-wobble")}
              >
                <span className="text-center">
                  <span className="block text-5xl" aria-hidden="true">?</span>
                  <span className="mt-2 block text-sm font-extrabold">{t("tapToTurn")}</span>
                </span>
              </button>
              <div className="card-flip-face card-flip-back grid" aria-hidden={!isOpen || undefined}>
                <CardFace card={card} shiny={shiny} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
