import { z } from "zod";

/** An answer to any kind of question as the client sends it (see QuizResponse in src/lib/questions.ts). */
export const QuizResponseSchema = z.union([
  z.number().int().min(-1).max(50),
  z.string().max(40),
  z.array(z.string().max(80)).max(20),
  z.array(z.number().int().min(-1).max(50)).max(20),
]);

const i18n = z.object({ en: z.string(), hy: z.string(), ru: z.string() });
const explanation = i18n.optional();

/** A stored quiz question of any kind, as the admin editor sends a lesson's whole quiz (see QuizQuestion in db/schema.ts). */
export const QuizQuestionSchema = z.union([
  z.object({ kind: z.literal("choice").optional(), prompt: i18n, options: z.array(i18n).min(2), answer: z.number().int().min(0), explanation }),
  z.object({ kind: z.literal("number"), prompt: i18n, answer: z.number().finite(), tolerance: z.number().min(0).optional(), unit: i18n.optional(), explanation }),
  z.object({ kind: z.literal("gap"), prompt: i18n, text: i18n, gaps: z.array(i18n).min(1), explanation }),
  z.object({ kind: z.literal("order"), prompt: i18n, items: z.array(i18n).min(3).max(8), explanation }),
  z.object({ kind: z.literal("match"), prompt: i18n, pairs: z.array(z.tuple([i18n, i18n])).min(3).max(8), explanation }),
]);
