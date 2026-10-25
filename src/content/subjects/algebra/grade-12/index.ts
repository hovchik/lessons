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

export const algebraGrade12: CourseSeed = {
  subject: "algebra",
  grade: 12,
  title: t("Algebra · Grade 12", "Հանրահաշիվ · 12-րդ դասարան", "Алгебра · 12 класс"),
  description: t("Final year of Armenian high school: complex numbers, equations and inequalities with parameters, deeper analysis, and systematic review for the state exam.", "Հայաստանի ավագ դպրոցի ավարտական տարի՝ կոմպլեքս թվեր, պարամետրով հավասարումներ և անհավասարություններ, անալիզի խորացում, պետական քննության համակարգված ամփոփում։", "Выпускной год армянской старшей школы: комплексные числа, уравнения и неравенства с параметром, углубление анализа, систематическое повторение к государственному экзамену."),
  curriculumNotes: notes(
    ["Armenia grade 12 (final; the unified state exam in mathematics replaces the school exam for university entry): complex numbers, polynomials and higher-degree equations, parameters, elements of analysis review, probability and statistics, systematic exam preparation.", "Հայաստան, 12-րդ դասարան (ավարտական, միասնական քննություն մաթեմատիկայից)՝ կոմպլեքս թվեր, բազմանդամներ և բարձր աստիճանի հավասարումներ, պարամետրեր, անալիզի ամփոփում, հավանականություն և վիճակագրություն, քննության համակարգված նախապատրաստություն։", "Армения, 12 класс (выпускной, единый экзамен по математике): комплексные числа, многочлены и уравнения высших степеней, параметры, повторение анализа, вероятность и статистика, системная подготовка к экзамену."],
    ["Russia has no grade 12: this content corresponds to the end of Russian grade 11 (advanced level) and to first-year university preparatory material. ЕГЭ profile-level topics (parameters, complex numbers in advanced programmes) are covered here.", "Ռուսաստանում 12-րդ դասարան չկա․ այս բովանդակությունը համապատասխանում է ռուսական 11-րդ դասարանի խորացված մակարդակին և ЕГЭ պրոֆիլային թեմաներին (պարամետրեր, կոմպլեքս թվեր)։", "В России 12 класса нет: это содержание соответствует концу 11 класса углублённого уровня и профильному ЕГЭ (параметры, комплексные числа в углублённых программах)."],
  ),
  hoursPerWeek: { armenia: 4, russia: null },
  units: [unit1, unit2, unit3, unit4, unit5],
};
