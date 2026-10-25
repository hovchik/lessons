import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";
import { unit5 } from "./unit-5";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const algebraGrade8: CourseSeed = {
  subject: "algebra",
  grade: 8,
  title: t("Algebra · Grade 8", "Հանրահաշիվ · 8-րդ դասարան", "Алгебра · 8 класс"),
  description: t("Rational expressions, square roots, quadratic equations, inequalities, and powers with integer exponents.", "Ռացիոնալ արտահայտություններ, քառակուսի արմատներ, քառակուսային հավասարումներ, անհավասարություններ, ամբողջ ցուցիչով աստիճան։", "Рациональные выражения, квадратные корни, квадратные уравнения, неравенства и степень с целым показателем."),
  curriculumNotes: notes(
    ["Armenia grade 8 (3 h/week): algebraic fractions, square roots and real numbers, quadratic equations and Vieta's formulas, rational equations, numerical inequalities and linear inequalities, integer exponents and standard form.", "Հայաստան, 8-րդ դասարան (3 ժ/շաբ.)՝ հանրահաշվական կոտորակներ, քառակուսի արմատ և իրական թվեր, քառակուսային հավասարումներ և Վիետի բանաձևեր, ռացիոնալ հավասարումներ, թվային և գծային անհավասարություններ, ամբողջ ցուցիչով աստիճան։", "Армения, 8 класс (3 ч/нед.): алгебраические дроби, квадратные корни и действительные числа, квадратные уравнения и теорема Виета, рациональные уравнения, числовые и линейные неравенства, степень с целым показателем."],
    ["Russia grade 8 (ФГОС ООО, 105 h): rational fractions, function y = k/x, square roots and y = √x, quadratic equations, fractional rational equations, inequalities and their systems, integer powers, standard form of a number, statistics (frequency, histograms).", "Ռուսաստան, 8-րդ դասարան (ФГОС ООО, 105 ժ)՝ ռացիոնալ կոտորակներ, y = k/x, քառակուսի արմատ և y = √x, քառակուսային հավասարումներ, կոտորակային ռացիոնալ հավասարումներ, անհավասարություններ և դրանց համակարգեր, ամբողջ ցուցիչով աստիճան, թվի ստանդարտ տեսք, վիճակագրություն։", "Россия, 8 класс (ФГОС ООО, 105 ч): рациональные дроби, функция y = k/x, квадратные корни и y = √x, квадратные уравнения, дробно-рациональные уравнения, неравенства и их системы, степень с целым показателем, стандартный вид числа, статистика."],
  ),
  hoursPerWeek: { armenia: 3, russia: 3 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
