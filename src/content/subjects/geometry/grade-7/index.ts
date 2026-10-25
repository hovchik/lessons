import { t, type CourseSeed } from "../../../types";
import { unit1 } from "./unit-1";
import { unit2 } from "./unit-2";
import { unit3 } from "./unit-3";
import { unit4 } from "./unit-4";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometryGrade7: CourseSeed = {
  subject: "geometry",
  grade: 7,
  title: t("Geometry · Grade 7", "Երկրաչափություն · 7-րդ դասարան", "Геометрия · 7 класс"),
  description: t("The first systematic course: basic concepts, triangles and congruence, parallel lines, sums of angles, constructions.", "Առաջին համակարգված դասընթացը՝ հիմնական հասկացություններ, եռանկյուններ և հավասարություն, զուգահեռ ուղիղներ, անկյունների գումար, կառուցումներ։", "Первый систематический курс: начальные понятия, треугольники и их равенство, параллельные прямые, суммы углов, построения."),
  curriculumNotes: notes(
    ["Armenia grade 7 (2 h/week): initial geometric concepts, segments and angles, adjacent and vertical angles, triangles, three congruence tests, isosceles triangle, parallel lines, angle sum of a triangle, right triangles, constructions with compass and ruler. Textbook tradition follows the Atanasyan-style axiomatic course.", "Հայաստան, 7-րդ դասարան (2 ժ/շաբ.)՝ սկզբնական երկրաչափական հասկացություններ, հատվածներ և անկյուններ, կից և հակադիր անկյուններ, եռանկյուններ, հավասարության երեք հայտանիշ, հավասարասրուն եռանկյուն, զուգահեռ ուղիղներ, եռանկյան անկյունների գումար, ուղղանկյուն եռանկյուններ, կառուցումներ կարկինով և քանոնով։", "Армения, 7 класс (2 ч/нед.): начальные геометрические сведения, отрезки и углы, смежные и вертикальные углы, треугольники, три признака равенства, равнобедренный треугольник, параллельные прямые, сумма углов треугольника, прямоугольные треугольники, построения циркулем и линейкой."],
    ["Russia grade 7 (ФГОС ООО, 2 h/week, 70 h): the same programme (Атанасян / Погорелов textbooks): basic concepts, triangles, parallel lines, relations between sides and angles, constructions.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, 2 ժ/շաբ., 70 ժ)՝ նույն ծրագիրը (Ատանասյան / Պոգորելով դասագրքեր)՝ հիմնական հասկացություններ, եռանկյուններ, զուգահեռ ուղիղներ, կողմերի և անկյունների հարաբերություններ, կառուցումներ։", "Россия, 7 класс (ФГОС ООО, 2 ч/нед., 70 ч): та же программа (учебники Атанасяна / Погорелова): начальные понятия, треугольники, параллельные прямые, соотношения между сторонами и углами, построения."],
  ),
  hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3, unit4],
};
