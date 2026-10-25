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

export const geometryGrade10: CourseSeed = {
  subject: "geometry",
  grade: 10,
  title: t("Geometry · Grade 10", "Երկրաչափություն · 10-րդ դասարան", "Геометрия · 10 класс"),
  description: t("Stereometry begins: axioms of space, parallelism and perpendicularity of lines and planes, polyhedra, vectors in space.", "Սկսվում է տարածաչափությունը՝ տարածության աքսիոմներ, ուղիղների և հարթությունների զուգահեռություն և ուղղահայացություն, բազմանիստներ, վեկտորներ տարածության մեջ։", "Начало стереометрии: аксиомы пространства, параллельность и перпендикулярность прямых и плоскостей, многогранники, векторы в пространстве."),
  curriculumNotes: notes(
    ["Armenia grade 10 (2 h/week, natural-science stream more): axioms of stereometry, parallel lines and planes, perpendicularity, dihedral angles, polyhedra (prism, pyramid, regular polyhedra), vectors in space.", "Հայաստան, 10-րդ դասարան (2 ժ/շաբ., բնագիտական հոսքում ավելի)՝ տարածաչափության աքսիոմներ, զուգահեռ ուղիղներ և հարթություններ, ուղղահայացություն, երկնիստ անկյուններ, բազմանիստներ (պրիզմա, բուրգ, կանոնավոր բազմանիստներ), վեկտորներ տարածության մեջ։", "Армения, 10 класс (2 ч/нед., в естественно-научном потоке больше): аксиомы стереометрии, параллельность прямых и плоскостей, перпендикулярность, двугранные углы, многогранники (призма, пирамида, правильные многогранники), векторы в пространстве."],
    ["Russia grade 10 (ФГОС СОО, геометрия 2 h/week): identical sequence — axioms, parallelism, perpendicularity, polyhedra, vectors in space.", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, երկրաչափություն 2 ժ/շաբ.)՝ նույն հերթականությունը՝ աքսիոմներ, զուգահեռություն, ուղղահայացություն, բազմանիստներ, վեկտորներ տարածության մեջ։", "Россия, 10 класс (ФГОС СОО, геометрия 2 ч/нед.): та же последовательность — аксиомы, параллельность, перпендикулярность, многогранники, векторы в пространстве."],
  ),
  hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
