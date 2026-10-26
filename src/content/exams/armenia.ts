import type { ExamSeed } from "./types";
import { armenia4 } from "./armenia-4";
import { armenia9 } from "./armenia-9";
import { armenia12 } from "./armenia-12";
import { armeniaUnified } from "./armenia-unified";

/** Armenian state exams: grade 4 knowledge checks, grade 9 finals, grade 12 state finals, unified entrance exams. */
export const armeniaExams: ExamSeed[] = [...armenia4, ...armenia9, ...armenia12, ...armeniaUnified];
