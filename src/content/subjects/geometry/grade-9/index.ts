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

export const geometryGrade9: CourseSeed = {
  subject: "geometry",
  grade: 9,
  title: t("Geometry · Grade 9", "Երկրաչափություն · 9-րդ դասարան", "Геометрия · 9 класс"),
  description: t("Vectors, coordinate method, solving triangles with sine and cosine laws, regular polygons, circle length and area, motions, and the first look at solids.", "Վեկտորներ, կոորդինատային եղանակ, եռանկյունների լուծում սինուսների և կոսինուսների թեորեմներով, կանոնավոր բազմանկյուններ, շրջանագծի երկարություն և մակերես, շարժումներ, մարմինների առաջին ծանոթություն։", "Векторы, метод координат, решение треугольников по теоремам синусов и косинусов, правильные многоугольники, длина окружности и площадь круга, движения, первое знакомство с телами."),
  curriculumNotes: notes(
    ["Armenia grade 9 (2 h/week): vectors, coordinates, sine and cosine laws, scalar product, regular polygons, circle length and area, motions (symmetry, rotation, translation), initial information about stereometry. Grade 9 state exam includes geometry.", "Հայաստան, 9-րդ դասարան (2 ժ/շաբ.)՝ վեկտորներ, կոորդինատներ, սինուսների և կոսինուսների թեորեմներ, սկալյար արտադրյալ, կանոնավոր բազմանկյուններ, շրջանագծի երկարություն և շրջանի մակերես, շարժումներ, տարածաչափության սկզբնական տեղեկություններ։ 9-րդ դասարանի պետական քննությունը ներառում է երկրաչափություն։", "Армения, 9 класс (2 ч/нед.): векторы, координаты, теоремы синусов и косинусов, скалярное произведение, правильные многоугольники, длина окружности и площадь круга, движения, начальные сведения стереометрии. Экзамен за 9 класс включает геометрию."],
    ["Russia grade 9 (ФГОС ООО, 68 h): vectors, coordinate method, relations between sides and angles, scalar product, circle length and area, motions, initial stereometry. Ends with ОГЭ geometry module.", "Ռուսաստան, 9-րդ դասարան (ФГОС ООО, 68 ժ)՝ վեկտորներ, կոորդինատային եղանակ, կողմերի և անկյունների հարաբերություններ, սկալյար արտադրյալ, շրջանագծի երկարություն և մակերես, շարժումներ, տարածաչափության սկիզբ։ Ավարտվում է ОГЭ երկրաչափության մոդուլով։", "Россия, 9 класс (ФГОС ООО, 68 ч): векторы, метод координат, соотношения между сторонами и углами, скалярное произведение, длина окружности и площадь круга, движения, начальные сведения стереометрии. Завершается геометрическим модулем ОГЭ."],
  ),
  hoursPerWeek: { armenia: 2, russia: 2 },
  units: [unit1, unit2, unit3, unit4, unit5],
};
