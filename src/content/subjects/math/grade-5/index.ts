import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";
import { unit6 } from "./unit-6";
import { unit7 } from "./unit-7";


const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const mathGrade5: CourseSeed = {
  subject: "math",
  grade: 5,
  title: t("Mathematics · Grade 5", "Մաթեմատիկա · 5-րդ դասարան", "Математика · 5 класс"),
  description: t(
    "Natural numbers, divisibility, common fractions, decimals, percentages and the first steps in geometry.",
    "Բնական թվեր, բաժանելիություն, հասարակ կոտորակներ, տասնորդական կոտորակներ, տոկոսներ և երկրաչափության առաջին քայլերը։",
    "Натуральные числа, делимость, обыкновенные и десятичные дроби, проценты и первые шаги в геометрии.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 5 (middle school begins; 10-point marks start): natural numbers and powers, divisibility, common fractions, decimals, percentages, angles and area/volume. Textbook tradition: Б. Нахапетян / Խ. Հայրապետյան series.", "Հայաստան, 5-րդ դասարան (սկսվում է միջին դպրոցը, 10-բալանոց նիշեր)՝ բնական թվեր և աստիճաններ, բաժանելիություն, հասարակ կոտորակներ, տասնորդականներ, տոկոսներ, անկյուններ, մակերես/ծավալ։", "Армения, 5 класс (начало средней школы, 10-балльные оценки): натуральные числа и степени, делимость, обыкновенные дроби, десятичные дроби, проценты, углы, площадь/объём."],
    ["Russia grade 5 (ФГОС ООО, 5 h/week, 175 h): natural numbers, powers, divisibility, common fractions, decimals, percentages, averages, visual geometry (angles, area, volume), text problems, elements of history of mathematics.", "Ռուսաստան, 5-րդ դասարան (ФГОС ООО, 5 ժ/շաբ., 175 ժ)՝ բնական թվեր, աստիճաններ, բաժանելիություն, հասարակ կոտորակներ, տասնորդականներ, տոկոսներ, միջին թվաբանական, ակնառու երկրաչափություն։", "Россия, 5 класс (ФГОС ООО, 5 ч/нед., 175 ч): натуральные числа, степени, делимость, обыкновенные дроби, десятичные дроби, проценты, среднее арифметическое, наглядная геометрия, текстовые задачи, история математики."],
  ),
  hoursPerWeek: { armenia: 5, russia: 5 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
};
