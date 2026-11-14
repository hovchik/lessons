import type { QuizQuestion } from "@/server/db/schema";
import { quizItemId } from "./memory";
import { displayForm, localKey, localShown, type Key, type Shown } from "./questions";
import { pick } from "./utils";

/** A quiz question in one language: the page sends only the reader's language to the browser. */
export type LocalQuestion = { itemId: string; shown: Shown<string>; key: Key<string>; explanation?: string; look?: { html: string; find: string[] } };

/** `looks` are the lesson passages behind each question (src/server/look.ts), shown after a wrong answer. */
export function localQuiz(questions: QuizQuestion[], locale: string, lessonId: string, looks: ({ html: string; find: string[] } | null)[] = []): LocalQuestion[] {
  const f = (t: Parameters<typeof pick>[0]) => pick(t, locale);
  return questions.map((q, i) => {
    const { shown, key } = displayForm(q, quizItemId(lessonId, i));
    return {
      itemId: quizItemId(lessonId, i),
      shown: localShown(shown, f),
      key: localKey(key, f),
      ...(q.explanation && pick(q.explanation, locale) ? { explanation: pick(q.explanation, locale) } : {}),
      ...(looks[i] ? { look: looks[i]! } : {}),
    };
  });
}
