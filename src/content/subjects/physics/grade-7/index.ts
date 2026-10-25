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

export const physicsGrade7: CourseSeed = {
  subject: "physics",
  grade: 7,
  title: t("Physics · Grade 7", "Ֆիզիկա · 7-րդ դասարան", "Физика · 7 класс"),
  description: t("Introduction to physics: measurement, structure of matter, motion and forces, pressure, work and energy.", "Ֆիզիկայի ներածություն՝ չափումներ, նյութի կառուցվածք, շարժում և ուժեր, ճնշում, աշխատանք և էներգիա։", "Введение в физику: измерения, строение вещества, движение и силы, давление, работа и энергия."),
  curriculumNotes: notes(
    ["Armenia grade 7 (2 h/week): physics starts. Topics: what physics studies, measuring physical quantities, structure of matter (molecules, diffusion, states), mechanical motion, speed, mass and density, forces (gravity, elasticity, friction), pressure of solids, liquids and gases, Archimedes' force, work, power, simple machines, energy.", "Հայաստան, 7-րդ դասարան (2 ժ/շաբ.)՝ ֆիզիկան սկսվում է։ Թեմաներ՝ ինչ է ուսումնասիրում ֆիզիկան, ֆիզիկական մեծությունների չափում, նյութի կառուցվածք (մոլեկուլներ, դիֆուզիա, վիճակներ), մեխանիկական շարժում, արագություն, զանգված և խտություն, ուժեր (ծանրության, առաձգականության, շփման), պինդ մարմինների, հեղուկների և գազերի ճնշում, Արքիմեդի ուժ, աշխատանք, հզորություն, պարզ մեխանիզմներ, էներգիա։", "Армения, 7 класс (2 ч/нед.): начало физики. Темы: что изучает физика, измерение физических величин, строение вещества (молекулы, диффузия, агрегатные состояния), механическое движение, скорость, масса и плотность, силы (тяжести, упругости, трения), давление твёрдых тел, жидкостей и газов, сила Архимеда, работа, мощность, простые механизмы, энергия."],
    ["Russia grade 7 (ФГОС ООО, 2 h/week, 70 h; Перышкин textbook tradition): the same sequence — introduction, structure of matter, interaction of bodies, pressure, work and power, energy.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, 2 ժ/շաբ., 70 ժ, Պերիշկինի դասագրքերի ավանդույթ)՝ նույն հերթականությունը՝ ներածություն, նյութի կառուցվածք, մարմինների փոխազդեցություն, ճնշում, աշխատանք և հզորություն, էներգիա։", "Россия, 7 класс (ФГОС ООО, 2 ч/нед., 70 ч; традиция учебников Перышкина): та же последовательность — введение, строение вещества, взаимодействие тел, давление, работа и мощность, энергия."],
  ),
  hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
