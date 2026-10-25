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

export const algebraGrade10: CourseSeed = {
  subject: "algebra",
  grade: 10,
  title: t("Algebra · Grade 10", "Հանրահաշիվ · 10-րդ դասարան", "Алгебра · 10 класс"),
  description: t("Real numbers, trigonometry, trigonometric equations, power and root functions, and the beginning of mathematical analysis.", "Իրական թվեր, եռանկյունաչափություն, եռանկյունաչափական հավասարումներ, աստիճանային և արմատային ֆունկցիաներ, մաթեմատիկական անալիզի սկիզբ։", "Действительные числа, тригонометрия, тригонометрические уравнения, степенные функции и начала математического анализа."),
  curriculumNotes: notes(
    ["Armenia grade 10 (high school; general or natural-science stream, 3–5 h/week): real numbers, trigonometric functions and identities, trigonometric equations, power functions and roots, sequences and limits, introduction to derivative (in some streams).", "Հայաստան, 10-րդ դասարան (ավագ դպրոց, ընդհանուր կամ բնագիտական հոսք, 3–5 ժ/շաբ.)՝ իրական թվեր, եռանկյունաչափական ֆունկցիաներ և նույնություններ, եռանկյունաչափական հավասարումներ, աստիճանային ֆունկցիաներ և արմատներ, հաջորդականություններ և սահմաններ, ածանցյալի ներմուծում (որոշ հոսքերում)։", "Армения, 10 класс (старшая школа, общий или естественно-научный поток, 3–5 ч/нед.): действительные числа, тригонометрические функции и тождества, тригонометрические уравнения, степенные функции и корни, последовательности и пределы, введение производной (в некоторых потоках)."],
    ["Russia grade 10 (ФГОС СОО, «Алгебра и начала математического анализа», base 2–3 h / advanced 4 h): real numbers, power and root functions, trigonometric functions, trigonometric equations, derivative basics (advanced).", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, «Հանրահաշիվ և անալիզի սկիզբ», հիմնական 2–3 ժ / խորացված 4 ժ)՝ իրական թվեր, աստիճանային և արմատային ֆունկցիաներ, եռանկյունաչափական ֆունկցիաներ, եռանկյունաչափական հավասարումներ, ածանցյալի հիմունքներ (խորացված)։", "Россия, 10 класс (ФГОС СОО, «Алгебра и начала математического анализа», база 2–3 ч / углублённый 4 ч): действительные числа, степенные функции и корни, тригонометрические функции, тригонометрические уравнения, основы производной (углублённый уровень)."],
  ),
  hoursPerWeek: { armenia: 4, russia: 3 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
