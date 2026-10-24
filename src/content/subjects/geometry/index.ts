import { t, unit, type CourseSeed } from "../../types";
import { geometryGrade7 } from "./grade-7";
import { geometryGrade8 } from "./grade-8";
import { geometryGrade9 } from "./grade-9";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometry: CourseSeed[] = [
  geometryGrade7,
  geometryGrade8,
  geometryGrade9,
  {
    subject: "geometry",
    grade: 10,
    title: t("Geometry · Grade 10", "Երկրաչափություն · 10-րդ դասարան", "Геометрия · 10 класс"),
    description: t("Stereometry begins: axioms of space, parallelism and perpendicularity of lines and planes, polyhedra, vectors in space.", "Սկսվում է տարածաչափությունը՝ տարածության աքսիոմներ, ուղիղների և հարթությունների զուգահեռություն և ուղղահայացություն, բազմանիստներ, վեկտորներ տարածության մեջ։", "Начало стереометрии: аксиомы пространства, параллельность и перпендикулярность прямых и плоскостей, многогранники, векторы в пространстве."),
    curriculumNotes: notes(
      ["Armenia grade 10 (2 h/week, natural-science stream more): axioms of stereometry, parallel lines and planes, perpendicularity, dihedral angles, polyhedra (prism, pyramid, regular polyhedra), vectors in space.", "Հայաստան, 10-րդ դասարան (2 ժ/շաբ., բնագիտական հոսքում ավելի)՝ տարածաչափության աքսիոմներ, զուգահեռ ուղիղներ և հարթություններ, ուղղահայացություն, երկնիստ անկյուններ, բազմանիստներ (պրիզմա, բուրգ, կանոնավոր բազմանիստներ), վեկտորներ տարածության մեջ։", "Армения, 10 класс (2 ч/нед., в естественно-научном потоке больше): аксиомы стереометрии, параллельность прямых и плоскостей, перпендикулярность, двугранные углы, многогранники (призма, пирамида, правильные многогранники), векторы в пространстве."],
      ["Russia grade 10 (ФГОС СОО, геометрия 2 h/week): identical sequence — axioms, parallelism, perpendicularity, polyhedra, vectors in space.", "Ռուսաստան, 10-րդ դասարան (ФГОС СОО, երկրաչափություն 2 ժ/շաբ.)՝ նույն հերթականությունը՝ աքսիոմներ, զուգահեռություն, ուղղահայացություն, բազմանիստներ, վեկտորներ տարածության մեջ։", "Россия, 10 класс (ФГОС СОО, геометрия 2 ч/нед.): та же последовательность — аксиомы, параллельность, перпендикулярность, многогранники, векторы в пространстве."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      unit(t("Axioms of stereometry", "Տարածաչափության աքսիոմներ", "Аксиомы стереометрии"), t("Planes in space, consequences of the axioms, first problems.", "Հարթություններ տարածության մեջ, աքսիոմների հետևանքներ, առաջին խնդիրներ։", "Плоскости в пространстве, следствия из аксиом, первые задачи."), [
        ["stereometry-subject", "The subject of stereometry; axioms", "Տարածաչափության առարկան, աքսիոմներ", "Предмет стереометрии; аксиомы"],
        ["axiom-consequences", "Consequences of the axioms", "Աքսիոմների հետևանքները", "Следствия из аксиом"],
        ["drawing-solids", "Drawing spatial figures", "Տարածական պատկերների գծագրում", "Изображение пространственных фигур"],
      ]),
      unit(t("Parallelism in space", "Զուգահեռություն տարածության մեջ", "Параллельность прямых и плоскостей"), t("Parallel lines, line and plane, skew lines, parallel planes, tetrahedron and parallelepiped, sections.", "Զուգահեռ ուղիղներ, ուղիղ և հարթություն, խաչվող ուղիղներ, զուգահեռ հարթություններ, քառանիստ և զուգահեռանիստ, հատույթներ։", "Параллельные прямые, прямая и плоскость, скрещивающиеся прямые, параллельные плоскости, тетраэдр и параллелепипед, сечения."), [
        ["parallel-lines-space", "Parallel lines and planes in space", "Զուգահեռ ուղիղներ և հարթություններ տարածության մեջ", "Параллельность прямых, прямой и плоскости"],
        ["skew-lines", "Skew lines; angle between lines", "Խաչվող ուղիղներ, ուղիղների միջև անկյուն", "Скрещивающиеся прямые; угол между прямыми"],
        ["parallel-planes", "Parallel planes", "Զուգահեռ հարթություններ", "Параллельность плоскостей"],
        ["tetrahedron-parallelepiped", "Tetrahedron and parallelepiped", "Քառանիստ և զուգահեռանիստ", "Тетраэдр и параллелепипед"],
        ["sections", "Constructing sections", "Հատույթների կառուցում", "Построение сечений"],
      ]),
      unit(t("Perpendicularity in space", "Ուղղահայացություն տարածության մեջ", "Перпендикулярность прямых и плоскостей"), t("Line perpendicular to a plane, perpendicular and oblique, three perpendiculars theorem, dihedral angle, perpendicular planes.", "Հարթությանը ուղղահայաց ուղիղ, ուղղահայաց և թեք, երեք ուղղահայացների թեորեմ, երկնիստ անկյուն, ուղղահայաց հարթություններ։", "Прямая, перпендикулярная плоскости, перпендикуляр и наклонная, теорема о трёх перпендикулярах, двугранный угол, перпендикулярные плоскости."), [
        ["line-perpendicular-plane", "Line perpendicular to a plane", "Հարթությանը ուղղահայաց ուղիղ", "Перпендикулярность прямой и плоскости"],
        ["perpendicular-oblique", "Perpendicular and oblique; distance", "Ուղղահայաց և թեք, հեռավորություն", "Перпендикуляр и наклонная; расстояние"],
        ["three-perpendiculars", "Theorem of three perpendiculars", "Երեք ուղղահայացների թեորեմ", "Теорема о трёх перпендикулярах"],
        ["dihedral-angle", "Dihedral angle; perpendicular planes", "Երկնիստ անկյուն, ուղղահայաց հարթություններ", "Двугранный угол; перпендикулярность плоскостей"],
        ["rectangular-parallelepiped", "Rectangular parallelepiped", "Ուղղանկյուն զուգահեռանիստ", "Прямоугольный параллелепипед"],
      ]),
      unit(t("Polyhedra", "Բազմանիստներ", "Многогранники"), t("Prism, pyramid, truncated pyramid, regular polyhedra, surface area.", "Պրիզմա, բուրգ, հատած բուրգ, կանոնավոր բազմանիստներ, մակերևույթի մակերես։", "Призма, пирамида, усечённая пирамида, правильные многогранники, площадь поверхности."), [
        ["prism", "Prism and its surface", "Պրիզմա և նրա մակերևույթը", "Призма и её поверхность"],
        ["pyramid", "Pyramid; regular pyramid", "Բուրգ, կանոնավոր բուրգ", "Пирамида; правильная пирамида"],
        ["truncated-pyramid", "Truncated pyramid", "Հատած բուրգ", "Усечённая пирамида"],
        ["regular-polyhedra", "Regular polyhedra; Euler's formula", "Կանոնավոր բազմանիստներ, Էյլերի բանաձև", "Правильные многогранники; формула Эйлера"],
      ]),
      unit(t("Vectors in space", "Վեկտորներ տարածության մեջ", "Векторы в пространстве"), t("Operations with vectors, coplanar vectors, decomposition in three non-coplanar vectors.", "Վեկտորների գործողություններ, համահարթ վեկտորներ, վերլուծում երեք ոչ համահարթ վեկտորներով։", "Действия с векторами, компланарные векторы, разложение по трём некомпланарным векторам."), [
        ["vectors-space-basics", "Vectors in space: operations", "Վեկտորներ տարածության մեջ․ գործողություններ", "Векторы в пространстве: действия"],
        ["coplanar-vectors", "Coplanar vectors", "Համահարթ վեկտորներ", "Компланарные векторы"],
        ["vector-decomposition", "Decomposition in three non-coplanar vectors", "Վերլուծում երեք ոչ համահարթ վեկտորով", "Разложение по трём некомпланарным векторам"],
      ]),
    ],
  },
  {
    subject: "geometry",
    grade: 11,
    title: t("Geometry · Grade 11", "Երկրաչափություն · 11-րդ դասարան", "Геометрия · 11 класс"),
    description: t("Coordinate method in space, round bodies (cylinder, cone, sphere), volumes of solids.", "Կոորդինատային եղանակ տարածության մեջ, պտտման մարմիններ (գլան, կոն, գունդ), մարմինների ծավալներ։", "Метод координат в пространстве, тела вращения (цилиндр, конус, шар), объёмы тел."),
    curriculumNotes: notes(
      ["Armenia grade 11 (2 h/week): coordinates and vectors in space, scalar product, motions in space, cylinder, cone, sphere and ball, volumes of prism, pyramid, cylinder, cone, ball, surface areas.", "Հայաստան, 11-րդ դասարան (2 ժ/շաբ.)՝ կոորդինատներ և վեկտորներ տարածության մեջ, սկալյար արտադրյալ, շարժումներ, գլան, կոն, սֆերա և գունդ, պրիզմայի, բուրգի, գլանի, կոնի, գնդի ծավալներ, մակերևույթների մակերեսներ։", "Армения, 11 класс (2 ч/нед.): координаты и векторы в пространстве, скалярное произведение, движения в пространстве, цилиндр, конус, сфера и шар, объёмы призмы, пирамиды, цилиндра, конуса, шара, площади поверхностей."],
      ["Russia grade 11 (ФГОС СОО, final year): coordinate method in space, cylinder, cone, ball, volumes of bodies. This is the end of the Russian geometry course.", "Ռուսաստան, 11-րդ դասարան (ФГОС СОО, ավարտական)՝ կոորդինատային եղանակ տարածության մեջ, գլան, կոն, գունդ, մարմինների ծավալներ։ Ռուսական երկրաչափության դասընթացն այստեղ ավարտվում է։", "Россия, 11 класс (ФГОС СОО, выпускной): метод координат в пространстве, цилиндр, конус, шар, объёмы тел. Этим завершается российский курс геометрии."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      unit(t("Coordinate method in space", "Կոորդինատային եղանակ տարածության մեջ", "Метод координат в пространстве"), t("Coordinates of points and vectors, scalar product, angle between lines and planes, motions.", "Կետերի և վեկտորների կոորդինատներ, սկալյար արտադրյալ, ուղիղների և հարթությունների միջև անկյուն, շարժումներ։", "Координаты точек и векторов, скалярное произведение, угол между прямыми и плоскостями, движения."), [
        ["space-coordinates", "Rectangular coordinates in space", "Ուղղանկյուն կոորդինատներ տարածության մեջ", "Прямоугольная система координат в пространстве"],
        ["space-vector-coordinates", "Coordinates of a vector; simple problems", "Վեկտորի կոորդինատները, պարզ խնդիրներ", "Координаты вектора; простейшие задачи"],
        ["space-scalar-product", "Scalar product; angle between lines and planes", "Սկալյար արտադրյալ, անկյուն ուղիղների և հարթությունների միջև", "Скалярное произведение; угол между прямыми и плоскостями"],
        ["plane-equation", "Equation of a plane", "Հարթության հավասարում", "Уравнение плоскости"],
        ["space-motions", "Motions in space", "Շարժումներ տարածության մեջ", "Движения в пространстве"],
      ]),
      unit(t("Cylinder, cone and ball", "Գլան, կոն և գունդ", "Цилиндр, конус и шар"), t("Round bodies, their sections and surface areas.", "Պտտման մարմիններ, դրանց հատույթներ և մակերևույթների մակերեսներ։", "Тела вращения, их сечения и площади поверхностей."), [
        ["cylinder", "Cylinder", "Գլան", "Цилиндр"],
        ["cone", "Cone and truncated cone", "Կոն և հատած կոն", "Конус и усечённый конус"],
        ["sphere-ball", "Sphere and ball; equation of a sphere", "Սֆերա և գունդ, սֆերայի հավասարում", "Сфера и шар; уравнение сферы"],
        ["sphere-plane", "Sphere and plane; tangent plane", "Սֆերա և հարթություն, շոշափող հարթություն", "Взаимное расположение сферы и плоскости; касательная плоскость"],
        ["sphere-area", "Area of a sphere", "Սֆերայի մակերեսը", "Площадь сферы"],
      ]),
      unit(t("Volumes", "Ծավալներ", "Объёмы тел"), t("Volume of parallelepiped, prism, cylinder, pyramid, cone, ball and its parts.", "Զուգահեռանիստի, պրիզմայի, գլանի, բուրգի, կոնի, գնդի և նրա մասերի ծավալ։", "Объём параллелепипеда, призмы, цилиндра, пирамиды, конуса, шара и его частей."), [
        ["volume-concept", "Volume: concept and rectangular parallelepiped", "Ծավալ․ հասկացությունը և ուղղանկյուն զուգահեռանիստ", "Понятие объёма; объём прямоугольного параллелепипеда"],
        ["volume-prism-cylinder", "Volume of a prism and a cylinder", "Պրիզմայի և գլանի ծավալ", "Объём призмы и цилиндра"],
        ["volume-integral", "Volume via the integral; oblique prism", "Ծավալ ինտեգրալով, թեք պրիզմա", "Вычисление объёмов с помощью интеграла; наклонная призма"],
        ["volume-pyramid-cone", "Volume of a pyramid and a cone", "Բուրգի և կոնի ծավալ", "Объём пирамиды и конуса"],
        ["volume-ball", "Volume of a ball and its parts", "Գնդի և նրա մասերի ծավալ", "Объём шара и его частей"],
      ]),
    ],
  },
  {
    subject: "geometry",
    grade: 12,
    title: t("Geometry · Grade 12", "Երկրաչափություն · 12-րդ դասարան", "Геометрия · 12 класс"),
    description: t("Final Armenian year: combinations of solids, inscribed and circumscribed spheres, deeper coordinate and vector methods, systematic exam review of planimetry and stereometry.", "Հայաստանի ավարտական տարի՝ մարմինների համակցություններ, ներգծյալ և արտագծյալ սֆերաներ, կոորդինատային և վեկտորային եղանակների խորացում, հարթաչափության և տարածաչափության համակարգված ամփոփում։", "Выпускной год в Армении: комбинации тел, вписанные и описанные сферы, углублённые координатный и векторный методы, системное повторение планиметрии и стереометрии."),
    curriculumNotes: notes(
      ["Armenia grade 12 (2 h/week): combinations of polyhedra and round bodies, inscribed and circumscribed spheres, distances and angles in space by coordinates, review of planimetry for the unified exam.", "Հայաստան, 12-րդ դասարան (2 ժ/շաբ.)՝ բազմանիստների և պտտման մարմինների համակցություններ, ներգծյալ և արտագծյալ սֆերաներ, հեռավորություններ և անկյուններ տարածության մեջ կոորդինատներով, հարթաչափության ամփոփում միասնական քննության համար։", "Армения, 12 класс (2 ч/нед.): комбинации многогранников и тел вращения, вписанные и описанные сферы, расстояния и углы в пространстве через координаты, повторение планиметрии к единому экзамену."],
      ["No Russian grade 12. Corresponds to advanced-level ЕГЭ stereometry (task 14) and planimetry (task 17) preparation at the end of Russian grade 11.", "Ռուսաստանում 12-րդ դասարան չկա։ Համապատասխանում է ЕГЭ պրոֆիլային տարածաչափության (14-րդ խնդիր) և հարթաչափության (17-րդ խնդիր) նախապատրաստությանը։", "В России 12 класса нет. Соответствует подготовке к стереометрии (задание 14) и планиметрии (задание 17) профильного ЕГЭ в конце 11 класса."],
    ),
    hoursPerWeek: { armenia: 2, russia: null },
    units: [
      unit(t("Combinations of solids", "Մարմինների համակցություններ", "Комбинации тел"), t("Spheres inscribed in and circumscribed about polyhedra, cylinders and cones; prisms in cylinders.", "Բազմանիստների, գլանների և կոնների ներգծյալ և արտագծյալ սֆերաներ, պրիզմաներ գլանների մեջ։", "Сферы, вписанные в многогранники, цилиндры и конусы и описанные около них; призмы в цилиндрах."), [
        ["sphere-polyhedron", "Sphere inscribed in and circumscribed about a polyhedron", "Բազմանիստի ներգծյալ և արտագծյալ սֆերա", "Сфера, вписанная в многогранник и описанная около него"],
        ["sphere-cylinder-cone", "Sphere with cylinder and cone", "Սֆերա գլանի և կոնի հետ", "Сфера с цилиндром и конусом"],
        ["prism-cylinder", "Prism and cylinder; pyramid and cone", "Պրիզմա և գլան, բուրգ և կոն", "Призма и цилиндр; пирамида и конус"],
      ]),
      unit(t("Distances and angles in space", "Հեռավորություններ և անկյուններ տարածության մեջ", "Расстояния и углы в пространстве"), t("Distance between skew lines, from a point to a plane, angles between planes — by coordinates and by construction.", "Խաչվող ուղիղների միջև, կետից հարթություն հեռավորություն, հարթությունների միջև անկյուն՝ կոորդինատներով և կառուցմամբ։", "Расстояние между скрещивающимися прямыми, от точки до плоскости, углы между плоскостями — координатами и построением."), [
        ["distance-point-plane", "Distance from a point to a plane", "Կետից հարթություն հեռավորություն", "Расстояние от точки до плоскости"],
        ["distance-skew-lines", "Distance between skew lines", "Խաչվող ուղիղների միջև հեռավորություն", "Расстояние между скрещивающимися прямыми"],
        ["angle-planes", "Angle between planes; normal vector", "Հարթությունների միջև անկյուն, նորմալ վեկտոր", "Угол между плоскостями; вектор нормали"],
        ["section-areas", "Areas of sections", "Հատույթների մակերեսներ", "Площади сечений"],
      ]),
      unit(t("Planimetry review", "Հարթաչափության ամփոփում", "Повторение планиметрии"), t("Triangles, circles, quadrilaterals, areas — exam-level problems.", "Եռանկյուններ, շրջանագծեր, քառանկյուններ, մակերեսներ՝ քննական մակարդակի խնդիրներ։", "Треугольники, окружности, четырёхугольники, площади — задачи экзаменационного уровня."), [
        ["review-triangles", "Review: triangles and their points", "Ամփոփում․ եռանկյուններ և դրանց կետերը", "Повторение: треугольники и их точки"],
        ["review-circles", "Review: circles, tangents, inscribed angles", "Ամփոփում․ շրջանագծեր, շոշափողներ, ներգծյալ անկյուններ", "Повторение: окружности, касательные, вписанные углы"],
        ["review-quadrilaterals", "Review: quadrilaterals and areas", "Ամփոփում․ քառանկյուններ և մակերեսներ", "Повторение: четырёхугольники и площади"],
        ["review-stereometry", "Review: stereometry", "Ամփոփում․ տարածաչափություն", "Повторение: стереометрия"],
        ["geometry-mock-exam", "Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      ]),
    ],
  },
];
