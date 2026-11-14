import { choiceOrder } from "../src/lib/questions";
import { examItemId, quizItemId } from "../src/lib/memory";

/**
 * Multiple-choice options are shown in a mixed order (src/lib/questions.ts), and pupils answer with
 * the shown position. Tests are written with the written index; these turn it into the shown one.
 */
export const shownAt = (seed: string, written: number, n: number) => choiceOrder(seed, n).indexOf(written);
export const quizPick = (lessonId: string, i: number, written: number, n: number) => shownAt(quizItemId(lessonId, i), written, n);
export const examPick = (examId: string, i: number, written: number | null, n: number) => (written === null ? null : shownAt(examItemId(examId, i), written, n));
