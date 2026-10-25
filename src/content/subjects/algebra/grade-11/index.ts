import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";
import { unit6 } from "./unit-6";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const algebraGrade11: CourseSeed = {
  subject: "algebra",
  grade: 11,
  title: t("Algebra · Grade 11", "Հանրահաշիվ · 11-րդ դասարան", "Алгебра · 11 класс"),
  description: t("Derivative and its applications, exponential and logarithmic functions, integral, combinatorics and probability.", "Ածանցյալ և նրա կիրառություններ, ցուցչային և լոգարիթմական ֆունկցիաներ, ինտեգրալ, կոմբինատորիկա և հավանականություն։", "Производная и её применение, показательная и логарифмическая функции, интеграл, комбинаторика и вероятность."),
  curriculumNotes: notes(
    ["Armenia grade 11 (3–5 h/week): derivative, its geometric and physical meaning, investigating functions, exponential and logarithmic functions and equations, antiderivative and integral, areas, combinatorics and probability.", "Հայաստան, 11-րդ դասարան (3–5 ժ/շաբ.)՝ ածանցյալ, նրա երկրաչափական և ֆիզիկական իմաստը, ֆունկցիաների հետազոտում, ցուցչային և լոգարիթմական ֆունկցիաներ ու հավասարումներ, նախնական և ինտեգրալ, մակերեսներ, կոմբինատորիկա և հավանականություն։", "Армения, 11 класс (3–5 ч/нед.): производная, её геометрический и физический смысл, исследование функций, показательная и логарифмическая функции и уравнения, первообразная и интеграл, площади, комбинаторика и вероятность."],
    ["Russia grade 11 (ФГОС СОО, final year, ends with ЕГЭ): derivative and its applications, integral, exponential and logarithmic functions and equations, elements of combinatorics, statistics and probability. Armenian grade 11 ≈ Russian grade 11 for analysis; Armenian grade 12 adds review and depth.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական, ЕГЭ)՝ ածանցյալ և կիրառություններ, ինտեգրալ, ցուցչային և լոգարիթմական ֆունկցիաներ ու հավասարումներ, կոմբինատորիկա, վիճակագրություն, հավանականություն։", "Россия, 11 класс (ФГОС СОО, выпускной, ЕГЭ): производная и её применения, интеграл, показательная и логарифмическая функции и уравнения, элементы комбинаторики, статистики и вероятности. Армянский 11 класс ≈ российскому 11-му по анализу; армянский 12-й добавляет повторение и углубление."],
  ),
  hoursPerWeek: { armenia: 4, russia: 3 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
