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

export const physicsGrade9: CourseSeed = {
  subject: "physics",
  grade: 9,
  title: t("Physics · Grade 9", "Ֆիզիկա · 9-րդ դասարան", "Физика · 9 класс"),
  description: t("Laws of motion (kinematics and Newton's laws), mechanical oscillations and waves, electromagnetic field, atomic and nuclear physics basics.", "Շարժման օրենքներ (կինեմատիկա և Նյուտոնի օրենքներ), մեխանիկական տատանումներ և ալիքներ, էլեկտրամագնիսական դաշտ, ատոմի և միջուկի ֆիզիկայի հիմունքներ։", "Законы движения (кинематика и законы Ньютона), механические колебания и волны, электромагнитное поле, основы атомной и ядерной физики."),
  curriculumNotes: notes(
    ["Armenia grade 9 (2 h/week; end of basic school): kinematics (uniform and uniformly accelerated motion, free fall, circular motion), dynamics (Newton's laws, gravitation, momentum), oscillations and waves, sound, electromagnetic induction and waves, structure of the atom and nucleus, radioactivity, elements of astronomy.", "Հայաստան, 9-րդ դասարան (2 ժ/շաբ., հիմնական դպրոցի ավարտ)՝ կինեմատիկա (հավասարաչափ և հավասարաչափ արագացող շարժում, ազատ անկում, շրջանագծով շարժում), դինամիկա (Նյուտոնի օրենքներ, տիեզերական ձգողություն, իմպուլս), տատանումներ և ալիքներ, ձայն, էլեկտրամագնիսական ինդուկցիա և ալիքներ, ատոմի և միջուկի կառուցվածք, ռադիոակտիվություն, աստղագիտության տարրեր։", "Армения, 9 класс (2 ч/нед.; окончание основной школы): кинематика (равномерное и равноускоренное движение, свободное падение, движение по окружности), динамика (законы Ньютона, тяготение, импульс), колебания и волны, звук, электромагнитная индукция и волны, строение атома и ядра, радиоактивность, элементы астрономии."],
    ["Russia grade 9 (ФГОС ООО, 68–102 h): laws of interaction and motion of bodies, mechanical oscillations and waves, sound, electromagnetic field, structure of atom and nucleus, use of nuclear energy, structure and evolution of the Universe.", "Ռուսաստան, 9-րդ դասարան (ФГОС ООО, 68–102 ժ)՝ մարմինների փոխազդեցության և շարժման օրենքներ, մեխանիկական տատանումներ և ալիքներ, ձայն, էլեկտրամագնիսական դաշտ, ատոմի և միջուկի կառուցվածք, միջուկային էներգիա, Տիեզերքի կառուցվածք և էվոլյուցիա։", "Россия, 9 класс (ФГОС ООО, 68–102 ч): законы взаимодействия и движения тел, механические колебания и волны, звук, электромагнитное поле, строение атома и атомного ядра, использование ядерной энергии, строение и эволюция Вселенной."],
  ),
  hoursPerWeek: { armenia: 2, russia: 3 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
