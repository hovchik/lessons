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

export const mathGrade6: CourseSeed = {
  subject: "math",
  grade: 6,
  title: t("Mathematics · Grade 6", "Մաթեմատիկա · 6-րդ դասարան", "Математика · 6 класс"),
  description: t(
    "Ratios and proportion, rational numbers (negative numbers), equations, coordinates, and preparation for algebra and geometry.",
    "Հարաբերություն և համեմատություն, ռացիոնալ (բացասական) թվեր, հավասարումներ, կոորդինատներ, նախապատրաստություն հանրահաշվին և երկրաչափությանը։",
    "Отношения и пропорции, рациональные (отрицательные) числа, уравнения, координаты, подготовка к алгебре и геометрии.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 6: fractions review, ratios, proportions and percentages, integers and rational numbers, operations with rational numbers, linear equations, coordinate plane, circle and circumference, symmetry. Last year before algebra and geometry split.", "Հայաստան, 6-րդ դասարան՝ կոտորակների ամփոփում, հարաբերություն, համեմատություն, տոկոս, ամբողջ և ռացիոնալ թվեր, գործողություններ դրանց հետ, գծային հավասարումներ, կոորդինատային հարթություն, շրջանագիծ, համաչափություն։ Վերջին տարին մինչև հանրահաշվի և երկրաչափության բաժանումը։", "Армения, 6 класс: повторение дробей, отношения, пропорции и проценты, целые и рациональные числа, действия с ними, линейные уравнения, координатная плоскость, окружность, симметрия. Последний год перед разделением на алгебру и геометрию."],
    ["Russia grade 6 (ФГОС ООО, 5 h/week, 175 h): divisibility, fractions with different denominators, ratios and proportions, scale, circle and circumference, positive and negative numbers, rational numbers, solving equations, coordinate plane, statistics basics.", "Ռուսաստան, 6-րդ դասարան (ФГОС ООО, 5 ժ/շաբ.)՝ բաժանելիություն, տարբեր հայտարարով կոտորակներ, հարաբերություն և համեմատություն, մասշտաբ, շրջանագիծ, դրական և բացասական թվեր, ռացիոնալ թվեր, հավասարումներ, կոորդինատային հարթություն, վիճակագրության հիմունքներ։", "Россия, 6 класс (ФГОС ООО, 5 ч/нед., 175 ч): делимость, дроби с разными знаменателями, отношения и пропорции, масштаб, окружность и круг, положительные и отрицательные числа, рациональные числа, решение уравнений, координатная плоскость, элементы статистики."],
  ),
  hoursPerWeek: { armenia: 5, russia: 5 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
