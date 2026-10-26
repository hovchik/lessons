import type { VisualBlock } from ".";

/** One language of a quick check: the question, the options and an optional explanation. */
type Q = [question: string, options: string[], why?: string];

/**
 * A quick multiple-choice check in all three languages. `answer` counts from 1.
 * A `predict` check asks before the lesson explains, so it goes before the first heading.
 */
export function ask(answer: number, q: { en: Q; hy: Q; ru: Q }, predict = false): VisualBlock {
  const body = ([question, options, why]: Q) => [question, ...options.map((o) => `- ${o}`), ...(why ? [`> ${why}`] : [])].join("\n");
  return {
    spec: `check answer=${answer}${predict ? " predict" : ""}`,
    at: predict ? "top" : undefined,
    prompt: { en: body(q.en), hy: body(q.hy), ru: body(q.ru) },
  };
}
