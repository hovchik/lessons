/**
 * Which courses each state exam covers, for the placement test and the plan to
 * the exam (src/server/exam-plan.ts). A year-end trial covers its own course.
 * `npm run content:check` makes sure every exam and course here exists.
 */
const range = (subject: string, from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => `${subject}-${from + i}`);
const math = (from: number, to: number) => [...range("algebra", from, to), ...range("geometry", from, to)];

export const EXAM_SCOPE: Record<string, string[]> = {
  "am-4-math": range("math", 1, 4),
  "am-4-armenian": range("armenian", 1, 4),
  "am-9-math": math(7, 9),
  "am-9-armenian": range("armenian", 5, 9),
  "am-9-physics": range("physics", 7, 9),
  "am-9-english": range("english", 5, 9),
  "am-12-math": math(10, 12),
  "am-12-armenian": range("armenian", 10, 12),
  "am-unified-math": math(7, 12),
  "am-unified-physics": range("physics", 7, 12),
  "am-unified-english": range("english", 7, 12),
  "am-unified-russian": range("russian", 7, 12),
  "ru-oge-math": math(7, 9),
  "ru-oge-russian": range("russian", 5, 9),
  "ru-oge-physics": range("physics", 7, 9),
  "ru-oge-english": range("english", 5, 9),
  "ru-ege-math-base": math(7, 11),
  "ru-ege-math-profile": math(7, 11),
  "ru-ege-russian": range("russian", 7, 11),
  "ru-ege-physics": range("physics", 7, 11),
  "ru-ege-english": range("english", 7, 11),
};

/** The courses an exam covers: the map above for a state exam, its own course for a trial. */
export function examScope(exam: { id: string; kind: string; subjectId?: string | null; subject?: string | null; grade: number }): string[] {
  if (exam.kind === "trial") {
    const s = exam.subjectId ?? exam.subject;
    return s ? [`${s}-${exam.grade}`] : [];
  }
  return EXAM_SCOPE[exam.id] ?? [];
}
