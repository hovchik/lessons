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

export const physicsGrade11: CourseSeed = {
  subject: "physics",
  grade: 11,
  title: t("Physics · Grade 11", "Ֆիզիկա · 11-րդ դասարան", "Физика · 11 класс"),
  description: t("Magnetism and induction, oscillations and waves (mechanical and electromagnetic), optics, special relativity, quantum physics.", "Մագնիսականություն և ինդուկցիա, տատանումներ և ալիքներ (մեխանիկական և էլեկտրամագնիսական), օպտիկա, հարաբերականության հատուկ տեսություն, քվանտային ֆիզիկա։", "Магнетизм и индукция, колебания и волны (механические и электромагнитные), оптика, специальная теория относительности, квантовая физика."),
  curriculumNotes: notes(
    ["Armenia grade 11 (2–4 h/week): magnetic field and electromagnetic induction, electromagnetic oscillations and AC, electromagnetic waves and radio, geometric and wave optics, elements of special relativity, light quanta and photoelectric effect, atomic physics.", "Հայաստան, 11-րդ դասարան (2–4 ժ/շաբ.)՝ մագնիսական դաշտ և էլեկտրամագնիսական ինդուկցիա, էլեկտրամագնիսական տատանումներ և փոփոխական հոսանք, էլեկտրամագնիսական ալիքներ և ռադիո, երկրաչափական և ալիքային օպտիկա, հարաբերականության հատուկ տեսության տարրեր, լույսի քվանտներ և ֆոտոէֆեկտ, ատոմի ֆիզիկա։", "Армения, 11 класс (2–4 ч/нед.): магнитное поле и электромагнитная индукция, электромагнитные колебания и переменный ток, электромагнитные волны и радио, геометрическая и волновая оптика, элементы СТО, кванты света и фотоэффект, физика атома."],
    ["Russia grade 11 (ФГОС СОО, final year): electrodynamics continued (magnetic field, induction), oscillations and waves, optics, relativity, quantum physics, atomic and nuclear physics, astronomy elements. Ends with ЕГЭ.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական)՝ էլեկտրադինամիկայի շարունակություն (մագնիսական դաշտ, ինդուկցիա), տատանումներ և ալիքներ, օպտիկա, հարաբերականություն, քվանտային ֆիզիկա, ատոմի և միջուկի ֆիզիկա, աստղագիտություն։ Ավարտվում է ЕГЭ-ով։", "Россия, 11 класс (ФГОС СОО, выпускной): продолжение электродинамики (магнитное поле, индукция), колебания и волны, оптика, СТО, квантовая физика, физика атома и ядра, элементы астрономии. Завершается ЕГЭ."],
  ),
  hoursPerWeek: { armenia: 3, russia: 2 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
