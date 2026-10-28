import { CARDS, type Card, type CardRarity, type CollectionId } from "@/content/cards";
import { seeded } from "./calc";

/** How often each rarity comes up when a card is drawn (among those the pupil hasn't got). */
export const RARITY_WEIGHT: Record<CardRarity, number> = { common: 70, rare: 25, epic: 5 };

/** A stable number from a string, so the same unit always deals the same card. */
export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/**
 * The card a mastered unit deals: one the pupil doesn't own, from the
 * subject's collection (or any other once that one is complete). Rarity
 * first, by weight, then a card of that rarity. Null when every card is owned.
 */
export function drawCard(collection: CollectionId, owned: Set<string>, seed: string): Card | null {
  const own = CARDS.filter((c) => c.collection === collection && !owned.has(c.id));
  const pool = own.length ? own : CARDS.filter((c) => !owned.has(c.id));
  if (!pool.length) return null;
  const rng = seeded(hashString(seed));
  const rarities = (Object.keys(RARITY_WEIGHT) as CardRarity[]).filter((r) => pool.some((c) => c.rarity === r));
  const total = rarities.reduce((s, r) => s + RARITY_WEIGHT[r], 0);
  let x = rng() * total;
  let rarity = rarities[rarities.length - 1];
  for (const r of rarities) {
    if (x < RARITY_WEIGHT[r]) {
      rarity = r;
      break;
    }
    x -= RARITY_WEIGHT[r];
  }
  const of = pool.filter((c) => c.rarity === rarity);
  return of[Math.floor(rng() * of.length)];
}
