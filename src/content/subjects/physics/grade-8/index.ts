import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const physicsGrade8: CourseSeed = {
  subject: "physics",
  grade: 8,
  title: t("Physics · Grade 8", "Ֆիզիկա · 8-րդ դասարան", "Физика · 8 класс"),
  description: t("Thermal phenomena, electricity, magnetism and light.", "Ջերմային երևույթներ, էլեկտրականություն, մագնիսականություն և լույս։", "Тепловые явления, электричество, магнетизм и свет."),
  curriculumNotes: notes(
    ["Armenia grade 8 (2 h/week): thermal phenomena (internal energy, heat transfer, specific heat, phase changes, heat engines), electric phenomena (charge, current, Ohm's law, series and parallel circuits, work and power of current), electromagnetic phenomena, light phenomena (reflection, refraction, lenses).", "Հայաստան, 8-րդ դասարան (2 ժ/շաբ.)՝ ջերմային երևույթներ (ներքին էներգիա, ջերմափոխանակում, տեսակարար ջերմունակություն, ֆազային անցումներ, ջերմային շարժիչներ), էլեկտրական երևույթներ (լիցք, հոսանք, Օհմի օրենք, հաջորդական և զուգահեռ միացում, հոսանքի աշխատանք և հզորություն), էլեկտրամագնիսական երևույթներ, լուսային երևույթներ (անդրադարձում, բեկում, ոսպնյակներ)։", "Армения, 8 класс (2 ч/нед.): тепловые явления (внутренняя энергия, теплопередача, удельная теплоёмкость, фазовые переходы, тепловые двигатели), электрические явления (заряд, ток, закон Ома, последовательное и параллельное соединение, работа и мощность тока), электромагнитные явления, световые явления (отражение, преломление, линзы)."],
    ["Russia grade 8 (ФГОС ООО, 70 h): thermal phenomena, electric phenomena, electromagnetic phenomena, light phenomena — the same four blocks.", "Ռուսաստան, 8-րդ դասարան (ФГОС ООО, 70 ժ)՝ ջերմային, էլեկտրական, էլեկտրամագնիսական, լուսային երևույթներ՝ նույն չորս բաժինը։", "Россия, 8 класс (ФГОС ООО, 70 ч): тепловые, электрические, электромагнитные и световые явления — те же четыре блока."],
  ),
  hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3, unit4],
};
