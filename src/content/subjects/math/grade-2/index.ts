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


export const mathGrade2: CourseSeed = {
  subject: "math",
  grade: 2,
  title: t("Mathematics · Grade 2", "Մաթեմատիկա · 2-րդ դասարան", "Математика · 2 класс"),
  description: t(
    "Numbers to 100, written addition and subtraction, the meaning of multiplication and division, length, mass and time.",
    "Թվեր մինչև 100, գրավոր գումարում և հանում, բազմապատկման և բաժանման իմաստը, երկարություն, զանգված և ժամանակ։",
    "Числа до 100, письменное сложение и вычитание, смысл умножения и деления, длина, масса и время.",
  ),
  curriculumNotes: notes(
    ["Armenia grade 2: numbers to 100, oral and written addition/subtraction, introduction of multiplication and division, tables of 2–5, perimeter, units of length, mass and time.", "Հայաստան, 2-րդ դասարան՝ թվեր մինչև 100, բանավոր և գրավոր գումարում/հանում, բազմապատկման և բաժանման ներմուծում, 2–5-ի աղյուսակ, պարագիծ, երկարության, զանգվածի և ժամանակի միավորներ։", "Армения, 2 класс: числа до 100, устное и письменное сложение/вычитание, введение умножения и деления, таблица на 2–5, периметр, единицы длины, массы и времени."],
    ["Russia grade 2 (ФГОС): numbers 1–100, written column addition and subtraction, multiplication and division as repeated addition/sharing, tables of 2 and 3, order of operations with brackets, perimeter, rouble/kopeck, hour/minute.", "Ռուսաստան, 2-րդ դասարան (ФГОС)՝ 1–100 թվեր, սյունակով գումարում և հանում, բազմապատկում և բաժանում, 2-ի և 3-ի աղյուսակ, գործողությունների կարգ փակագծերով, պարագիծ, ժամ/րոպե։", "Россия, 2 класс (ФГОС): числа 1–100, сложение и вычитание столбиком, умножение и деление как сложение одинаковых слагаемых и деление поровну, таблица на 2 и 3, порядок действий со скобками, периметр, рубль/копейка, час/минута."],
  ),
  hoursPerWeek: { armenia: 5, russia: 4 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
