import type { ExamQuestion, ExamScale } from "@/server/db/schema";

export const examTotal = (questions: ExamQuestion[]) => questions.reduce((a, q) => a + (q.points ?? 1), 0);

export type ExamResult = {
  score: number;
  total: number;
  percent: number;
  passed: boolean;
  /** Armenian 20-point exam scale (state exams). */
  am20: number;
  /** Armenian 10-point school mark. */
  am10: number;
  /** Russian 5-point school mark. */
  ru5: 2 | 3 | 4 | 5;
};

/**
 * Converts a raw score into the marks the pupil knows. The conversions are approximate:
 * real exams publish a table every year, and schools may set their own thresholds.
 */
export function scoreExam(questions: ExamQuestion[], answers: Record<number, number | undefined>, passPercent: number): ExamResult {
  const total = examTotal(questions);
  const score = questions.reduce((a, q, i) => a + (answers[i] === q.answer ? (q.points ?? 1) : 0), 0);
  const percent = total ? Math.round((score / total) * 100) : 0;
  const am20 = Math.round((percent / 100) * 20);
  const am10 = Math.max(1, Math.round(percent / 10));
  const ru5: ExamResult["ru5"] = percent >= 80 ? 5 : percent >= 60 ? 4 : percent >= 35 ? 3 : 2;
  return { score, total, percent, passed: percent >= passPercent, am20, am10, ru5 };
}

/** Which marks to show for a given exam scale. */
export function marksFor(scale: ExamScale, r: ExamResult): Array<{ key: "am20" | "am10" | "ru5"; value: number; max: number }> {
  if (scale === "am20") return [{ key: "am20", value: r.am20, max: 20 }];
  if (scale === "ru5") return [{ key: "ru5", value: r.ru5, max: 5 }];
  return [
    { key: "am10", value: r.am10, max: 10 },
    { key: "ru5", value: r.ru5, max: 5 },
  ];
}
