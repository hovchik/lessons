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

export const algebraGrade9: CourseSeed = {
  subject: "algebra",
  grade: 9,
  title: t("Algebra · Grade 9", "Հանրահաշիվ · 9-րդ դասարան", "Алгебра · 9 класс"),
  description: t("Quadratic function and inequalities, equations and systems of higher degree, sequences and progressions, elements of combinatorics and probability.", "Քառակուսային ֆունկցիա և անհավասարություններ, բարձր կարգի հավասարումներ և համակարգեր, հաջորդականություններ և պրոգրեսիաներ, կոմբինատորիկայի և հավանականության տարրեր։", "Квадратичная функция и неравенства, уравнения и системы высших степеней, последовательности и прогрессии, элементы комбинаторики и вероятности."),
  curriculumNotes: notes(
    ["Armenia grade 9 (3 h/week): end of basic school, state exam in mathematics (20-point). Topics: properties of functions, quadratic function and its graph, quadratic inequalities, equations reducible to quadratics, systems of nonlinear equations, arithmetic and geometric progressions, elements of combinatorics and probability.", "Հայաստան, 9-րդ դասարան (3 ժ/շաբ.)՝ հիմնական դպրոցի ավարտ, մաթեմատիկայի պետական քննություն (20-բալանոց)։ Թեմաներ՝ ֆունկցիաների հատկություններ, քառակուսային ֆունկցիա և նրա գրաֆիկը, քառակուսային անհավասարություններ, քառակուսայինի բերվող հավասարումներ, ոչ գծային համակարգեր, թվաբանական և երկրաչափական պրոգրեսիաներ, կոմբինատորիկա և հավանականություն։", "Армения, 9 класс (3 ч/нед.): окончание основной школы, государственный экзамен по математике (20 баллов). Темы: свойства функций, квадратичная функция и её график, квадратные неравенства, уравнения, сводящиеся к квадратным, нелинейные системы, арифметическая и геометрическая прогрессии, комбинаторика и вероятность."],
    ["Russia grade 9 (ФГОС ООО, 102 h): ends with ОГЭ. Quadratic function, power function, equations and inequalities with one and two variables, arithmetic and geometric progressions, elements of combinatorics and probability theory.", "Ռուսաստան, 9-րդ դասարան (ФГОС ООО, 102 ժ)՝ ավարտվում է ОГЭ քննությամբ։ Քառակուսային ֆունկցիա, աստիճանային ֆունկցիա, մեկ և երկու փոփոխականով հավասարումներ և անհավասարություններ, պրոգրեսիաներ, կոմբինատորիկա և հավանականություն։", "Россия, 9 класс (ФГОС ООО, 102 ч): завершается ОГЭ. Квадратичная функция, степенная функция, уравнения и неравенства с одной и двумя переменными, арифметическая и геометрическая прогрессии, элементы комбинаторики и теории вероятностей."],
  ),
  hoursPerWeek: { armenia: 3, russia: 3 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
