import type { QuizQuestion } from "@/server/db/schema";
import { quizItemId } from "./memory";
import { displayForm, localKey, localShown, type Key, type Shown } from "./questions";
import { pick } from "./utils";

/** A quiz question in one language: the page sends only the reader's language to the browser. */
export type LocalQuestion = { shown: Shown<string>; key: Key<string>; explanation?: string };

export function localQuiz(questions: QuizQuestion[], locale: string, lessonId: string): LocalQuestion[] {
  const f = (t: Parameters<typeof pick>[0]) => pick(t, locale);
  return questions.map((q, i) => {
    const { shown, key } = displayForm(q, quizItemId(lessonId, i));
    return {
      shown: localShown(shown, f),
      key: localKey(key, f),
      ...(q.explanation && pick(q.explanation, locale) ? { explanation: pick(q.explanation, locale) } : {}),
    };
  });
}
