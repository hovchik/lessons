import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometryGrade11: CourseSeed = {
  subject: "geometry",
  grade: 11,
  title: t("Geometry · Grade 11", "Երկրաչափություն · 11-րդ դասարան", "Геометрия · 11 класс"),
  description: t("Coordinate method in space, round bodies (cylinder, cone, sphere), volumes of solids.", "Կոորդինատային եղանակ տարածության մեջ, պտտման մարմիններ (գլան, կոն, գունդ), մարմինների ծավալներ։", "Метод координат в пространстве, тела вращения (цилиндр, конус, шар), объёмы тел."),
  curriculumNotes: notes(
    ["Armenia grade 11 (2 h/week): coordinates and vectors in space, scalar product, motions in space, cylinder, cone, sphere and ball, volumes of prism, pyramid, cylinder, cone, ball, surface areas.", "Հայաստան, 11-րդ դասարան (2 ժ/շաբ.)՝ կոորդինատներ և վեկտորներ տարածության մեջ, սկալյար արտադրյալ, շարժումներ, գլան, կոն, սֆերա և գունդ, պրիզմայի, բուրգի, գլանի, կոնի, գնդի ծավալներ, մակերևույթների մակերեսներ։", "Армения, 11 класс (2 ч/нед.): координаты и векторы в пространстве, скалярное произведение, движения в пространстве, цилиндр, конус, сфера и шар, объёмы призмы, пирамиды, цилиндра, конуса, шара, площади поверхностей."],
    ["Russia grade 11 (ФГОС СОО, final year): coordinate method in space, cylinder, cone, ball, volumes of bodies. This is the end of the Russian geometry course.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական)՝ կոորդինատային եղանակ տարածության մեջ, գլան, կոն, գունդ, մարմինների ծավալներ։ Ռուսական երկրաչափության դասընթացն այստեղ ավարտվում է։", "Россия, 11 класс (ФГОС СОО, выпускной): метод координат в пространстве, цилиндр, конус, шар, объёмы тел. Этим завершается российский курс геометрии."],
  ),
  hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3],
};
