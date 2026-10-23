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

export const algebraGrade7: CourseSeed = {
  subject: "algebra",
  grade: 7,
  title: t("Algebra · Grade 7", "Հանրահաշիվ · 7-րդ դասարան", "Алгебра · 7 класс"),
  description: t(
    "Expressions and identities, linear equations, the first functions, powers, polynomials, factorisation and systems of linear equations.",
    "Արտահայտություններ և նույնություններ, գծային հավասարումներ, առաջին ֆունկցիաները, աստիճան, բազմանդամներ, վերլուծում արտադրիչների, գծային հավասարումների համակարգեր։",
    "Выражения и тождества, линейные уравнения, первые функции, степень, многочлены, разложение на множители и системы линейных уравнений.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 7 (3 h/week): algebra separates from geometry. Topics: algebraic expressions, identities, linear equations in one variable, functions and graphs, power with natural exponent, monomials and polynomials, abridged multiplication formulas, systems of two linear equations.", "Հայաստան, 7-րդ դասարան (3 ժ/շաբ.)՝ հանրահաշիվն անջատվում է երկրաչափությունից։ Թեմաներ՝ հանրահաշվական արտահայտություններ, նույնություններ, մեկ փոփոխականով գծային հավասարումներ, ֆունկցիաներ և գրաֆիկներ, բնական ցուցիչով աստիճան, միանդամներ և բազմանդամներ, կրճատ բազմապատկման բանաձևեր, երկու գծային հավասարումների համակարգեր։", "Армения, 7 класс (3 ч/нед.): алгебра отделяется от геометрии. Темы: алгебраические выражения, тождества, линейные уравнения с одной переменной, функции и графики, степень с натуральным показателем, одночлены и многочлены, формулы сокращённого умножения, системы двух линейных уравнений."],
    ["Russia grade 7 (ФГОС ООО, 3 h/week, 105 h): the same core — expressions, identities, linear equations, linear function y = kx + b, powers, polynomials, abridged multiplication, systems of linear equations, plus first statistics and probability.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, 3 ժ/շաբ., 105 ժ)՝ նույն միջուկը՝ արտահայտություններ, նույնություններ, գծային հավասարումներ, գծային ֆունկցիա y = kx + b, աստիճան, բազմանդամներ, կրճատ բազմապատկում, գծային համակարգեր, ինչպես նաև վիճակագրության և հավանականության սկիզբ։", "Россия, 7 класс (ФГОС ООО, 3 ч/нед., 105 ч): то же ядро — выражения, тождества, линейные уравнения, линейная функция y = kx + b, степень, многочлены, формулы сокращённого умножения, системы линейных уравнений, а также начала статистики и вероятности."],
  ),
  hoursPerWeek: { armenia: 3, russia: 3 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
};
