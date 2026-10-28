import { getStreakCached } from "@/server/motivation";
import { getReviewSummaryCached } from "@/server/review";

/** The numbers the header and tab bar show for a pupil: the streak and the review queue. */
export type LiveUser = { streak: { days: number; todayDone: boolean }; review: { cards: number; ready: number } };

export async function getLiveUser(userId: string): Promise<LiveUser> {
  const [streak, review] = await Promise.all([getStreakCached(userId), getReviewSummaryCached(userId)]);
  return { streak: { days: streak.days, todayDone: streak.todayDone }, review: { cards: review.cards, ready: review.ready } };
}
