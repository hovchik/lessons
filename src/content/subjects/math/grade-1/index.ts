import { t, type CourseSeed } from "../../../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";
import { unit6 } from "./unit-6";

export const mathGrade1: CourseSeed = {
  subject: "math",
  grade: 1,
  title: t("Mathematics · Grade 1", "Մաթեմատիկա · 1-ին դասարան", "Математика · 1 класс"),
  description: t(
    "Counting to 20, comparing numbers, addition and subtraction within 20, shapes, and simple measurement.",
    "Հաշվել մինչև 20, թվերի համեմատում, գումարում և հանում 20-ի սահմաններում, ձևեր և պարզ չափումներ։",
    "Счёт до 20, сравнение чисел, сложение и вычитание в пределах 20, фигуры и простые измерения.",
  ),
  curriculumNotes: notes(
    [
      "Armenian grade 1 (new 2021 standard): numbers 0–20, place value of ten, addition and subtraction within 20, length and time, geometric shapes. Assessment is descriptive, without marks.",
      "Հայաստանի 1-ին դասարան (2021-ի նոր չափորոշիչ)՝ 0–20 թվեր, տասնյակի հասկացություն, գումարում և հանում 20-ի սահմաններում, երկարություն և ժամանակ, երկրաչափական ձևեր։ Գնահատումը նկարագրական է, առանց նիշերի։",
      "Армянский 1 класс (новый стандарт 2021): числа 0–20, понятие десятка, сложение и вычитание в пределах 20, длина и время, геометрические фигуры. Оценивание описательное, без отметок.",
    ],
    [
      "Russian grade 1 (ФГОС НОО, 4 h/week): numbers 1–20, composition of numbers, addition and subtraction within 20 (including crossing ten), word problems in one step, length in cm/dm, points, segments and polygons.",
      "Ռուսաստանի 1-ին դասարան (ФГОС НОО, 4 ժ/շաբ.)՝ 1–20 թվեր, թվի կազմություն, գումարում և հանում 20-ի սահմաններում (տասնյակի անցումով), միաքայլ խնդիրներ, երկարություն սմ/դմ, կետ, հատված, բազմանկյուն։",
      "Российский 1 класс (ФГОС НОО, 4 ч/нед.): числа 1–20, состав числа, сложение и вычитание в пределах 20 с переходом через десяток, простые текстовые задачи, длина в см/дм, точка, отрезок, многоугольник.",
    ],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
