import { z } from "zod";

/** An answer to any kind of question as the client sends it (see QuizResponse in src/lib/questions.ts). */
export const QuizResponseSchema = z.union([
  z.number().int().min(-1).max(50),
  z.string().max(40),
  z.array(z.string().max(80)).max(20),
  z.array(z.number().int().min(-1).max(50)).max(20),
]);
