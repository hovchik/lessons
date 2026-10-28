import { and, eq, inArray, isNull } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { getUserMastery } from "./mastery";
import { cardById, collectionFor, type Card } from "@/content/cards";
import { drawCard } from "@/lib/cards";

/**
 * Collectible cards on the server: dealing a card for every unit that has
 * reached "proficient", and the pupil's album. A card is shiny while its
 * unit is mastered; that is read from mastery, not stored.
 */

export type OwnedCard = { card: Card; skillId: string; shiny: boolean; isNew: boolean; createdAt: string };

const subjectOfCourse = (courseId: string) => courseId.replace(/-\d+$/, "");

/** Deals the cards a pupil has earned and not yet got; returns the new ones. */
export async function syncCards(userId: string): Promise<Card[]> {
  const db = await getDb();
  const uc = schema.userCards;
  const byCourse = await getUserMastery(userId);
  const earned = [...byCourse.values()].flat().filter((s) => s.level === "proficient" || s.level === "mastered");
  if (!earned.length) return [];
  const rows = await db.select({ cardId: uc.cardId, skillId: uc.skillId }).from(uc).where(eq(uc.userId, userId)).all();
  const owned = new Set(rows.map((r) => r.cardId));
  const dealt = new Set(rows.map((r) => r.skillId));
  const fresh: Card[] = [];
  for (const s of earned) {
    if (dealt.has(s.skillId)) continue;
    const card = drawCard(collectionFor(subjectOfCourse(s.courseId)), owned, `${userId}:${s.skillId}`);
    if (!card) break;
    // A second tab dealing at the same moment hits the unique keys and deals nothing twice.
    const res = await db.insert(uc).values({ userId, cardId: card.id, skillId: s.skillId, createdAt: new Date().toISOString() }).onConflictDoNothing().run();
    owned.add(card.id);
    dealt.add(s.skillId);
    if (res.rowsAffected > 0) fresh.push(card);
  }
  return fresh;
}

/** The pupil's album, newest first. */
export async function getAlbum(userId: string): Promise<OwnedCard[]> {
  const db = await getDb();
  const uc = schema.userCards;
  const rows = await db.select().from(uc).where(eq(uc.userId, userId)).all();
  if (!rows.length) return [];
  const mastery = [...(await getUserMastery(userId)).values()].flat();
  const mastered = new Set(mastery.filter((s) => s.level === "mastered").map((s) => s.skillId));
  return rows
    .map((r) => ({ card: cardById(r.cardId), skillId: r.skillId, shiny: mastered.has(r.skillId), isNew: !r.seenAt, createdAt: r.createdAt }))
    .filter((x): x is OwnedCard => !!x.card)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** How many cards the pupil hasn't turned over yet. */
export async function countNewCards(userId: string): Promise<number> {
  const db = await getDb();
  const uc = schema.userCards;
  const rows = await db.select({ cardId: uc.cardId }).from(uc).where(and(eq(uc.userId, userId), isNull(uc.seenAt))).all();
  return rows.length;
}

export async function markCardsSeen(userId: string, cardIds: string[]) {
  if (!cardIds.length) return;
  const db = await getDb();
  const uc = schema.userCards;
  await db
    .update(uc)
    .set({ seenAt: new Date().toISOString() })
    .where(and(eq(uc.userId, userId), inArray(uc.cardId, cardIds), isNull(uc.seenAt)))
    .run();
}
