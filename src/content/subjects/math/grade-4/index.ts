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

export const mathGrade4: CourseSeed = {
  subject: "math",
  grade: 4,
  title: t("Mathematics · Grade 4", "Մաթեմատիկա · 4-րդ դասարան", "Математика · 4 класс"),
  description: t(
    "Multi-digit numbers, written multiplication and division, speed problems, and the end-of-primary review.",
    "Բազմանիշ թվեր, գրավոր բազմապատկում և բաժանում, արագության խնդիրներ, տարրական դպրոցի ամփոփում։",
    "Многозначные числа, письменное умножение и деление, задачи на движение, итоговое повторение начальной школы.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 4: numbers to a million, four operations with multi-digit numbers, speed/time/distance, area and perimeter, data in tables and diagrams. Ends with the grade 4 state assessment (20-point scale).", "Հայաստան, 4-րդ դասարան՝ թվեր մինչև միլիոն, չորս գործողություն բազմանիշ թվերով, արագություն/ժամանակ/ուղի, մակերես և պարագիծ, տվյալներ աղյուսակներում։ Ավարտվում է 4-րդ դասարանի պետական ստուգմամբ (20-բալանոց)։", "Армения, 4 класс: числа до миллиона, четыре действия с многозначными числами, скорость/время/расстояние, площадь и периметр, данные в таблицах и диаграммах. Завершается государственной проверкой за 4 класс (20-балльная шкала)."],
    ["Russia grade 4 (ФГОС): numbers beyond 1000, column multiplication and division by two- and three-digit numbers, quantities (t, ц, km², га), motion problems, equations, diagrams. Ends with ВПР (all-Russian check).", "Ռուսաստան, 4-րդ դասարան (ФГОС)՝ թվեր 1000-ից մեծ, սյունակով բազմապատկում և բաժանում երկնիշ և եռանիշ թվերով, մեծություններ (տ, ց, կմ², հա), շարժման խնդիրներ, հավասարումներ, դիագրամներ։ Ավարտվում է ВПР ստուգմամբ։", "Россия, 4 класс (ФГОС): числа больше 1000, умножение и деление столбиком на двузначное и трёхзначное число, величины (т, ц, км², га), задачи на движение, уравнения, диаграммы. Завершается ВПР."],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
