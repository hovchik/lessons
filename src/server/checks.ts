import { eq } from "drizzle-orm";
import { getDb, schema } from "./db/client";
import { recordAnswers } from "./learner";
import { checkAnswers, checkItemId } from "@/lib/checks";
import { pick } from "@/lib/utils";

/**
 * Records the first pick on a lesson's quick check. The right option is read
 * from the lesson body in the language the pupil saw, so the client only sends
 * which option it picked. The answer is logged for the learner model; Daily
 * Review cannot show an interactive check, so no card is scheduled.
 */
export async function recordCheck(input: { userId: string; lessonId: string; index: number; choice: number; locale: string; ms?: number | null }) {
  const db = await getDb();
  const lesson = await db
    .select({ id: schema.lessons.id, courseId: schema.lessons.courseId, content: schema.lessons.content, status: schema.lessons.status })
    .from(schema.lessons)
    .where(eq(schema.lessons.id, input.lessonId))
    .get();
  if (!lesson || lesson.status !== "published") return null;
  const answers = checkAnswers(pick(lesson.content, input.locale));
  if (input.index >= answers.length) return null;
  const correct = input.choice === answers[input.index];
  await recordAnswers(input.userId, [
    { itemId: checkItemId(lesson.id, input.index), source: "check", refId: lesson.id, courseId: lesson.courseId, correct, choice: input.choice, ms: input.ms ?? null, schedule: false },
  ]);
  return { correct };
}
