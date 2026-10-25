import type { ExamSeed } from "./types";
import { russiaOge } from "./russia-oge";
import { russiaEge } from "./russia-ege";

/** Russian state exams: ОГЭ after grade 9 and ЕГЭ after grade 11. */
export const russiaExams: ExamSeed[] = [...russiaOge, ...russiaEge];
