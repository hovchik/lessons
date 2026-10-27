import type { QuizQuestion } from "@/server/db/schema";
import { pick } from "./utils";

/** A quiz question in one language: the page sends only the reader's language to the browser. */
export type LocalQuestion = { prompt: string; options: string[]; answer: number; explanation?: string };

export function localQuiz(questions: QuizQuestion[], locale: string): LocalQuestion[] {
  return questions.map((q) => ({
    prompt: pick(q.prompt, locale),
    options: q.options.map((o) => pick(o, locale)),
    answer: q.answer,
    ...(q.explanation && pick(q.explanation, locale) ? { explanation: pick(q.explanation, locale) } : {}),
  }));
}
