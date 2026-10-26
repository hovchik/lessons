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

export const physicsGrade10: CourseSeed = {
  subject: "physics",
  grade: 10,
  title: t("Physics · Grade 10", "Ֆիզիկա · 10-րդ դասարան", "Физика · 10 класс"),
  description: t("Mechanics in depth, molecular physics and thermodynamics, electrostatics and direct current.", "Մեխանիկա խորությամբ, մոլեկուլային ֆիզիկա և թերմոդինամիկա, էլեկտրաստատիկա և հաստատուն հոսանք։", "Углублённая механика, молекулярная физика и термодинамика, электростатика и постоянный ток."),
  curriculumNotes: notes(
    ["Armenia grade 10 (2–4 h/week by stream): kinematics and dynamics with vectors, statics, conservation laws, molecular-kinetic theory, ideal gas laws, thermodynamics, electrostatics, direct current, current in different media.", "Հայաստան, 10-րդ դասարան (2–4 ժ/շաբ. հոսքից կախված)՝ կինեմատիկա և դինամիկա վեկտորներով, ստատիկա, պահպանման օրենքներ, մոլեկուլային-կինետիկ տեսություն, իդեալական գազի օրենքներ, թերմոդինամիկա, էլեկտրաստատիկա, հաստատուն հոսանք, հոսանքը տարբեր միջավայրերում։", "Армения, 10 класс (2–4 ч/нед. по потоку): кинематика и динамика с векторами, статика, законы сохранения, молекулярно-кинетическая теория, газовые законы, термодинамика, электростатика, постоянный ток, ток в различных средах."],
    ["Russia grade 10 (ФГОС СОО, base 2 h / advanced 5 h; Мякишев textbook tradition): mechanics, molecular physics and thermodynamics, electrodynamics (electrostatics, DC, current in media).", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, հիմնական 2 ժ / խորացված 5 ժ, Մյակիշևի դասագրքեր)՝ մեխանիկա, մոլեկուլային ֆիզիկա և թերմոդինամիկա, էլեկտրադինամիկա (էլեկտրաստատիկա, հաստատուն հոսանք, հոսանքը միջավայրերում)։", "Россия, 10 класс (ФГОС СОО, база 2 ч / углублённый 5 ч; учебники Мякишева): механика, молекулярная физика и термодинамика, электродинамика (электростатика, постоянный ток, ток в средах)."],
  ),
  hoursPerWeek: { armenia: 3, russia: 2 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
