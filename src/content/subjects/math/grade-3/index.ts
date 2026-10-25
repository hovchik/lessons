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

export const mathGrade3: CourseSeed = {
  subject: "math",
  grade: 3,
  title: t("Mathematics · Grade 3", "Մաթեմատիկա · 3-րդ դասարան", "Математика · 3 класс"),
  description: t(
    "The full multiplication table, numbers to 1000, division with remainder, area, and multi-step problems.",
    "Բազմապատկման ամբողջ աղյուսակ, թվեր մինչև 1000, բաժանում մնացորդով, մակերես, բազմաքայլ խնդիրներ։",
    "Полная таблица умножения, числа до 1000, деление с остатком, площадь, составные задачи.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 3: tables up to 10, out-of-table multiplication and division, numbers to 1000, area of a rectangle, fractions of a quantity, units of time and mass.", "Հայաստան, 3-րդ դասարան՝ աղյուսակ մինչև 10, արտաաղյուսակային բազմապատկում և բաժանում, թվեր մինչև 1000, ուղղանկյան մակերես, քանակի մասեր, ժամանակի և զանգվածի միավորներ։", "Армения, 3 класс: таблица до 10, внетабличное умножение и деление, числа до 1000, площадь прямоугольника, доли величины, единицы времени и массы."],
    ["Russia grade 3 (ФГОС): tables to 9, multiplying and dividing by one-digit numbers, division with remainder, numbers to 1000, area in cm²/dm²/m², fractions (доли), problems in 2–3 steps, equations.", "Ռուսաստան, 3-րդ դասարան (ФГОС)՝ աղյուսակ մինչև 9, միանիշ թվով բազմապատկում և բաժանում, բաժանում մնացորդով, թվեր մինչև 1000, մակերես սմ²/դմ²/մ², մասեր, 2–3 քայլի խնդիրներ, հավասարումներ։", "Россия, 3 класс (ФГОС): таблица до 9, умножение и деление на однозначное число, деление с остатком, числа до 1000, площадь в см²/дм²/м², доли, задачи в 2–3 действия, уравнения."],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
