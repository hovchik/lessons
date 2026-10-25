import type { ExamSeed } from "./types";
import { armeniaExams } from "./armenia";
import { russiaExams } from "./russia";
import { trials } from "./trials";

export type { ExamSeed };

/** All exams: Armenian state/unified exams, Russian ОГЭ/ЕГЭ, then year-end trials for every course. */
export const exams: ExamSeed[] = [...armeniaExams, ...russiaExams, ...trials];
