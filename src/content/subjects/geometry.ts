import { t, unit, q, type CourseSeed } from "../types";

const notes = (am: [string, string, string], ru: [string, string, string]) => ({
  armenia: t(...am),
  russia: t(...ru),
});

export const geometry: CourseSeed[] = [
  {
    subject: "geometry",
    grade: 7,
    title: t("Geometry · Grade 7", "Երկրաչափություն · 7-րդ դասարան", "Геометрия · 7 класс"),
    description: t("The first systematic course: basic concepts, triangles and congruence, parallel lines, sums of angles, constructions.", "Առաջին համակարգված դասընթացը՝ հիմնական հասկացություններ, եռանկյուններ և հավասարություն, զուգահեռ ուղիղներ, անկյունների գումար, կառուցումներ։", "Первый систематический курс: начальные понятия, треугольники и их равенство, параллельные прямые, суммы углов, построения."),
    curriculumNotes: notes(
      ["Armenia grade 7 (2 h/week): initial geometric concepts, segments and angles, adjacent and vertical angles, triangles, three congruence tests, isosceles triangle, parallel lines, angle sum of a triangle, right triangles, constructions with compass and ruler. Textbook tradition follows the Atanasyan-style axiomatic course.", "Հայաստան, 7-րդ դասարան (2 ժ/շաբ.)՝ սկզբնական երկրաչափական հասկացություններ, հատվածներ և անկյուններ, կից և հակադիր անկյուններ, եռանկյուններ, հավասարության երեք հայտանիշ, հավասարասրուն եռանկյուն, զուգահեռ ուղիղներ, եռանկյան անկյունների գումար, ուղղանկյուն եռանկյուններ, կառուցումներ կարկինով և քանոնով։", "Армения, 7 класс (2 ч/нед.): начальные геометрические сведения, отрезки и углы, смежные и вертикальные углы, треугольники, три признака равенства, равнобедренный треугольник, параллельные прямые, сумма углов треугольника, прямоугольные треугольники, построения циркулем и линейкой."],
      ["Russia grade 7 (ФГОС ООО, 2 h/week, 70 h): the same programme (Атанасян / Погорелов textbooks): basic concepts, triangles, parallel lines, relations between sides and angles, constructions.", "Ռուսաստան, 7-րդ դասարան (ФГОС ООО, 2 ժ/շաբ., 70 ժ)՝ նույն ծրագիրը (Ատանասյան / Պոգորելով դասագրքեր)՝ հիմնական հասկացություններ, եռանկյուններ, զուգահեռ ուղիղներ, կողմերի և անկյունների հարաբերություններ, կառուցումներ։", "Россия, 7 класс (ФГОС ООО, 2 ч/нед., 70 ч): та же программа (учебники Атанасяна / Погорелова): начальные понятия, треугольники, параллельные прямые, соотношения между сторонами и углами, построения."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      {
        title: t("Basic geometric concepts", "Սկզբնական երկրաչափական հասկացություններ", "Начальные геометрические сведения"),
        summary: t("Points, lines, segments, rays, angles, measurement, adjacent and vertical angles, perpendicular lines.", "Կետ, ուղիղ, հատված, ճառագայթ, անկյուն, չափում, կից և հակադիր անկյուններ, ուղղահայաց ուղիղներ։", "Точки, прямые, отрезки, лучи, углы, измерение, смежные и вертикальные углы, перпендикулярные прямые."),
        lessons: [
          {
            slug: "points-lines-planes",
            title: t("Points, lines and the first axioms", "Կետեր, ուղիղներ և առաջին աքսիոմները", "Точки, прямые и первые аксиомы"),
            objectives: {
              en: ["Name the basic undefined objects of geometry", "State the axiom about a line through two points", "Use correct notation for points, lines, segments and rays"],
              hy: ["Անվանել երկրաչափության հիմնական անսահմանելի օբյեկտները", "Ձևակերպել երկու կետով անցնող ուղղի աքսիոմը", "Օգտագործել կետերի, ուղիղների, հատվածների և ճառագայթների ճիշտ նշանակումները"],
              ru: ["Называть основные неопределяемые объекты геометрии", "Формулировать аксиому о прямой, проходящей через две точки", "Использовать правильные обозначения точек, прямых, отрезков и лучей"],
            },
            content: {
              en: `## What geometry studies

**Geometry** (Greek: *geo* — earth, *metreo* — measure) began as the art of measuring land. Today it is the science of shapes, their sizes and their positions. The part dealing with figures in a plane is **planimetry**; figures in space belong to **stereometry** (grades 10–12).

## Undefined concepts

Every theory must start somewhere. In geometry the **point**, the **line** and the **plane** are accepted without definition; their properties are described by **axioms** — statements accepted without proof. Everything else is **defined** and **proved** (theorems).

- A point has no size. Points are named with capital letters: $A$, $B$, $M$.
- A line is infinite in both directions and has no thickness. Lines are named with small letters ($a$, $b$) or by two of their points ($AB$).

## The first axioms

1. Through any two points passes exactly **one** line.
2. Of three points on a line, exactly one lies **between** the other two.
3. Every line divides the plane into two **half-planes**.

From axiom 1 it follows that two distinct lines have **at most one** common point. If they have one, they *intersect*; if none, they are *parallel* (we return to this later).

## Segments and rays

- A **segment** $AB$ is the part of a line between points $A$ and $B$, including them. $A$ and $B$ are its *endpoints*.
- A **ray** $OA$ starts at $O$ and goes through $A$ without end. $O$ is the *origin*.
- Two rays with a common origin lying on one line are **opposite rays**.

### Notation check

| Object | Written | Note |
|---|---|---|
| point $M$ lies on line $a$ | $M \\in a$ | "belongs to" |
| point $K$ not on $a$ | $K \\notin a$ | |
| lines $a$ and $b$ meet at $P$ | $a \\cap b = P$ | |

### Exercises

1. Mark three points not on one line. How many lines pass through pairs of them? Draw them.
2. Mark four points, no three on one line. How many lines now?
3. Points $A$, $B$, $C$ lie on one line, $AB = 5$ cm, $BC = 3$ cm. What can $AC$ be? (Two cases!)`,
              hy: `## Ի՞նչ է ուսումնասիրում երկրաչափությունը

**Երկրաչափությունը** (հունարեն *geo* — երկիր, *metreo* — չափել) սկսվել է որպես հողի չափման արվեստ։ Այսօր այն գիտություն է ձևերի, դրանց չափերի և դիրքերի մասին։ Հարթության պատկերներով զբաղվող բաժինը **հարթաչափությունն** է, տարածության պատկերները՝ **տարածաչափությանը** (10–12-րդ դասարաններ)։

## Անսահմանելի հասկացություններ

Յուրաքանչյուր տեսություն ինչ-որ տեղից պետք է սկսվի։ Երկրաչափության մեջ **կետը**, **ուղիղը** և **հարթությունը** ընդունվում են առանց սահմանման, դրանց հատկությունները նկարագրվում են **աքսիոմներով**՝ առանց ապացույցի ընդունվող պնդումներով։ Մնացած ամեն ինչ **սահմանվում** և **ապացուցվում** է (թեորեմներ)։

- Կետը չափ չունի։ Կետերը նշանակվում են մեծատառերով՝ $A$, $B$, $M$։
- Ուղիղը երկու ուղղությամբ անվերջ է և հաստություն չունի։ Ուղիղները նշանակվում են փոքրատառով ($a$, $b$) կամ իր երկու կետով ($AB$)։

## Առաջին աքսիոմները

1. Ցանկացած երկու կետով անցնում է ճիշտ **մեկ** ուղիղ։
2. Ուղղի երեք կետից ճիշտ մեկը գտնվում է մյուս երկուսի **միջև**։
3. Յուրաքանչյուր ուղիղ հարթությունը բաժանում է երկու **կիսահարթության**։

1-ին աքսիոմից հետևում է, որ երկու տարբեր ուղիղներ ունեն **առավելագույնը մեկ** ընդհանուր կետ։ Եթե ունեն՝ *հատվում* են, եթե ոչ՝ *զուգահեռ* են (դրան դեռ կվերադառնանք)։

## Հատվածներ և ճառագայթներ

- **Հատված** $AB$՝ ուղղի մասը $A$ և $B$ կետերի միջև՝ դրանք ներառյալ։ $A$-ն և $B$-ն *ծայրակետեր* են։
- **Ճառագայթ** $OA$՝ սկսվում է $O$-ից, անցնում $A$-ով և վերջ չունի։ $O$-ն *սկիզբն* է։
- Ընդհանուր սկզբով, մեկ ուղղի վրա գտնվող երկու ճառագայթները **հակադիր ճառագայթներ** են։

### Նշանակումներ

| Օբյեկտ | Գրառում | Նշում |
|---|---|---|
| $M$ կետը $a$ ուղղի վրա է | $M \\in a$ | «պատկանում է» |
| $K$ կետը $a$-ի վրա չէ | $K \\notin a$ | |
| $a$ և $b$ ուղիղները հատվում են $P$-ում | $a \\cap b = P$ | |

### Վարժություններ

1. Նշիր երեք կետ, որոնք մեկ ուղղի վրա չեն։ Քանի՞ ուղիղ է անցնում դրանց զույգերով։ Գծիր։
2. Նշիր չորս կետ, որոնցից ոչ երեքը մեկ ուղղի վրա չեն։ Հիմա քանի՞ ուղիղ։
3. $A$, $B$, $C$ կետերը մեկ ուղղի վրա են, $AB = 5$ սմ, $BC = 3$ սմ։ Ինչքա՞ն կարող է լինել $AC$-ն։ (Երկու դեպք)`,
              ru: `## Что изучает геометрия

**Геометрия** (греч. *гео* — земля, *метрео* — измеряю) родилась как искусство измерения земли. Сегодня это наука о фигурах, их размерах и взаимном расположении. Раздел о фигурах на плоскости — **планиметрия**; фигуры в пространстве изучает **стереометрия** (10–12 классы).

## Неопределяемые понятия

Любая теория должна с чего-то начинаться. В геометрии **точка**, **прямая** и **плоскость** принимаются без определения; их свойства описывают **аксиомы** — утверждения, принимаемые без доказательства. Всё остальное **определяется** и **доказывается** (теоремы).

- Точка не имеет размеров. Точки обозначают заглавными буквами: $A$, $B$, $M$.
- Прямая бесконечна в обе стороны и не имеет толщины. Прямые обозначают строчными буквами ($a$, $b$) или двумя точками ($AB$).

## Первые аксиомы

1. Через любые две точки проходит ровно **одна** прямая.
2. Из трёх точек на прямой ровно одна лежит **между** двумя другими.
3. Каждая прямая разбивает плоскость на две **полуплоскости**.

Из аксиомы 1 следует, что две различные прямые имеют **не более одной** общей точки. Если она есть — прямые *пересекаются*; если нет — *параллельны* (к этому мы вернёмся).

## Отрезки и лучи

- **Отрезок** $AB$ — часть прямой между точками $A$ и $B$ вместе с ними. $A$ и $B$ — *концы* отрезка.
- **Луч** $OA$ начинается в $O$, проходит через $A$ и не имеет конца. $O$ — *начало* луча.
- Два луча с общим началом, лежащие на одной прямой, — **дополнительные лучи**.

### Обозначения

| Объект | Запись | Примечание |
|---|---|---|
| точка $M$ лежит на прямой $a$ | $M \\in a$ | «принадлежит» |
| точка $K$ не лежит на $a$ | $K \\notin a$ | |
| прямые $a$ и $b$ пересекаются в $P$ | $a \\cap b = P$ | |

### Упражнения

1. Отметь три точки, не лежащие на одной прямой. Сколько прямых проходит через пары этих точек? Начерти их.
2. Отметь четыре точки, никакие три из которых не лежат на одной прямой. Сколько теперь прямых?
3. Точки $A$, $B$, $C$ лежат на одной прямой, $AB = 5$ см, $BC = 3$ см. Чему может равняться $AC$? (Два случая!)`,
            },
            quiz: [
              q(t("How many lines pass through two distinct points?", "Երկու տարբեր կետով քանի՞ ուղիղ է անցնում։", "Сколько прямых проходит через две различные точки?"), [t("none", "ոչ մի", "ни одной"), t("exactly one", "ճիշտ մեկ", "ровно одна"), t("infinitely many", "անվերջ շատ", "бесконечно много")], 1),
              q(t("Which has two endpoints?", "Ո՞րն ունի երկու ծայրակետ։", "У чего два конца?"), [t("a line", "ուղիղը", "прямая"), t("a ray", "ճառագայթը", "луч"), t("a segment", "հատվածը", "отрезок")], 2),
              q(t("A, B, C on a line with AB = 5, BC = 3. AC can be…", "A, B, C մեկ ուղղի վրա են, AB = 5, BC = 3։ AC-ն կարող է լինել…", "A, B, C на одной прямой, AB = 5, BC = 3. AC может быть…"), [t("only 8", "միայն 8", "только 8"), t("8 or 2", "8 կամ 2", "8 или 2"), t("only 2", "միայն 2", "только 2")], 1),
            ],
          },
          { slug: "measuring-segments", title: t("Measuring segments", "Հատվածների չափում", "Измерение отрезков") },
          { slug: "angles-measurement", title: t("Angles and their measurement", "Անկյուններ և դրանց չափումը", "Углы и их измерение") },
          { slug: "adjacent-vertical-angles", title: t("Adjacent and vertical angles", "Կից և հակադիր անկյուններ", "Смежные и вертикальные углы") },
          { slug: "perpendicular-lines", title: t("Perpendicular lines", "Ուղղահայաց ուղիղներ", "Перпендикулярные прямые") },
        ],
      },
      unit(t("Triangles", "Եռանկյուններ", "Треугольники"), t("Congruence tests, isosceles triangle, medians, bisectors, altitudes, constructions.", "Հավասարության հայտանիշներ, հավասարասրուն եռանկյուն, միջնագծեր, կիսորդներ, բարձրություններ, կառուցումներ։", "Признаки равенства, равнобедренный треугольник, медианы, биссектрисы, высоты, построения."), [
        ["triangle-elements", "Triangle and its elements", "Եռանկյունը և նրա տարրերը", "Треугольник и его элементы"],
        ["first-congruence-test", "First congruence test (SAS)", "Հավասարության առաջին հայտանիշ", "Первый признак равенства треугольников"],
        ["median-bisector-altitude", "Median, bisector and altitude", "Միջնագիծ, կիսորդ և բարձրություն", "Медиана, биссектриса и высота"],
        ["isosceles-triangle", "Properties of the isosceles triangle", "Հավասարասրուն եռանկյան հատկությունները", "Свойства равнобедренного треугольника"],
        ["second-third-tests", "Second (ASA) and third (SSS) congruence tests", "Երկրորդ և երրորդ հայտանիշները", "Второй и третий признаки равенства"],
        ["circle-basics", "Circle: centre, radius, chord, diameter", "Շրջանագիծ․ կենտրոն, շառավիղ, լար, տրամագիծ", "Окружность: центр, радиус, хорда, диаметр"],
        ["constructions", "Constructions with compass and straightedge", "Կառուցումներ կարկինով և քանոնով", "Задачи на построение"],
      ]),
      unit(t("Parallel lines", "Զուգահեռ ուղիղներ", "Параллельные прямые"), t("Tests for parallel lines, the parallel axiom, properties of parallel lines.", "Զուգահեռության հայտանիշներ, զուգահեռների աքսիոմ, զուգահեռ ուղիղների հատկություններ։", "Признаки параллельности, аксиома параллельных, свойства параллельных прямых."), [
        ["parallel-definition", "Definition and tests for parallel lines", "Սահմանում և զուգահեռության հայտանիշներ", "Определение и признаки параллельности прямых"],
        ["parallel-axiom", "The parallel axiom", "Զուգահեռների աքսիոմը", "Аксиома параллельных прямых"],
        ["parallel-properties", "Angles formed by parallel lines and a transversal", "Զուգահեռ ուղիղների և հատողի կազմած անկյունները", "Углы при параллельных прямых и секущей"],
      ]),
      unit(t("Relations between sides and angles of a triangle", "Եռանկյան կողմերի և անկյունների հարաբերությունները", "Соотношения между сторонами и углами треугольника"), t("Angle sum, exterior angle, triangle inequality, right triangles.", "Անկյունների գումար, արտաքին անկյուն, եռանկյան անհավասարություն, ուղղանկյուն եռանկյուններ։", "Сумма углов, внешний угол, неравенство треугольника, прямоугольные треугольники."), [
        ["angle-sum", "Sum of the angles of a triangle", "Եռանկյան անկյունների գումարը", "Сумма углов треугольника"],
        ["exterior-angle", "Exterior angle of a triangle", "Եռանկյան արտաքին անկյուն", "Внешний угол треугольника"],
        ["sides-angles-relation", "Larger side opposite larger angle; triangle inequality", "Մեծ կողմի դիմաց մեծ անկյուն, եռանկյան անհավասարություն", "Против большей стороны лежит больший угол; неравенство треугольника"],
        ["right-triangle-properties", "Properties of right triangles", "Ուղղանկյուն եռանկյան հատկությունները", "Свойства прямоугольных треугольников"],
        ["right-triangle-congruence", "Congruence tests for right triangles", "Ուղղանկյուն եռանկյունների հավասարության հայտանիշներ", "Признаки равенства прямоугольных треугольников"],
        ["distance-point-line", "Distance from a point to a line", "Կետից ուղղի հեռավորություն", "Расстояние от точки до прямой"],
        ["constructions-2", "Constructing a triangle from three elements", "Եռանկյան կառուցում երեք տարրով", "Построение треугольника по трём элементам"],
      ]),
    ],
  },
  {
    subject: "geometry",
    grade: 8,
    title: t("Geometry · Grade 8", "Երկրաչափություն · 8-րդ դասարան", "Геометрия · 8 класс"),
    description: t("Quadrilaterals, areas, the Pythagorean theorem, similar triangles, trigonometry of the right triangle, circles.", "Քառանկյուններ, մակերեսներ, Պյութագորասի թեորեմ, նման եռանկյուններ, ուղղանկյուն եռանկյան եռանկյունաչափություն, շրջանագիծ։", "Четырёхугольники, площади, теорема Пифагора, подобные треугольники, тригонометрия прямоугольного треугольника, окружность."),
    curriculumNotes: notes(
      ["Armenia grade 8 (2 h/week): polygons and quadrilaterals (parallelogram, rectangle, rhombus, square, trapezium), areas, Pythagorean theorem, similarity, sine/cosine/tangent of an acute angle, circle (tangent, inscribed angles, inscribed and circumscribed circles).", "Հայաստան, 8-րդ դասարան (2 ժ/շաբ.)՝ բազմանկյուններ և քառանկյուններ (զուգահեռագիծ, ուղղանկյուն, շեղանկյուն, քառակուսի, սեղան), մակերեսներ, Պյութագորասի թեորեմ, նմանություն, սուր անկյան սինուս/կոսինուս/տանգենս, շրջանագիծ (շոշափող, ներգծյալ անկյուններ, ներգծյալ և արտագծյալ շրջանագծեր)։", "Армения, 8 класс (2 ч/нед.): многоугольники и четырёхугольники (параллелограмм, прямоугольник, ромб, квадрат, трапеция), площади, теорема Пифагора, подобие, синус/косинус/тангенс острого угла, окружность (касательная, вписанные углы, вписанная и описанная окружности)."],
      ["Russia grade 8 (ФГОС ООО, 70 h): quadrilaterals, area, Pythagorean theorem, similar triangles, trigonometric ratios, circle, four remarkable points of a triangle. Identical core to Armenia.", "Ռուսաստան, 8-րդ դասարան (ФГОС ООО, 70 ժ)՝ քառանկյուններ, մակերես, Պյութագորասի թեորեմ, նման եռանկյուններ, եռանկյունաչափական հարաբերություններ, շրջանագիծ, եռանկյան չորս նշանավոր կետերը։ Միջուկը նույնն է, ինչ Հայաստանում։", "Россия, 8 класс (ФГОС ООО, 70 ч): четырёхугольники, площадь, теорема Пифагора, подобные треугольники, тригонометрические соотношения, окружность, четыре замечательные точки треугольника. Ядро совпадает с армянским."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      unit(t("Quadrilaterals", "Քառանկյուններ", "Четырёхугольники"), t("Polygons, parallelogram and its tests, trapezium, rectangle, rhombus, square, symmetry.", "Բազմանկյուններ, զուգահեռագիծ և նրա հայտանիշները, սեղան, ուղղանկյուն, շեղանկյուն, քառակուսի, համաչափություն։", "Многоугольники, параллелограмм и его признаки, трапеция, прямоугольник, ромб, квадрат, симметрия."), [
        ["polygons", "Polygons and the sum of their angles", "Բազմանկյուններ և դրանց անկյունների գումարը", "Многоугольники и сумма их углов"],
        ["parallelogram", "Parallelogram: properties and tests", "Զուգահեռագիծ․ հատկություններ և հայտանիշներ", "Параллелограмм: свойства и признаки"],
        ["trapezium", "Trapezium", "Սեղան", "Трапеция"],
        ["rectangle-rhombus-square", "Rectangle, rhombus, square", "Ուղղանկյուն, շեղանկյուն, քառակուսի", "Прямоугольник, ромб, квадрат"],
        ["axial-central-symmetry", "Axial and central symmetry", "Առանցքային և կենտրոնային համաչափություն", "Осевая и центральная симметрия"],
      ]),
      unit(t("Area", "Մակերես", "Площадь"), t("Area of rectangle, parallelogram, triangle, trapezium; Pythagorean theorem.", "Ուղղանկյան, զուգահեռագծի, եռանկյան, սեղանի մակերես, Պյութագորասի թեորեմ։", "Площадь прямоугольника, параллелограмма, треугольника, трапеции; теорема Пифагора."), [
        ["area-concept", "Area of a polygon and of a rectangle", "Բազմանկյան և ուղղանկյան մակերես", "Площадь многоугольника и прямоугольника"],
        ["area-parallelogram-triangle", "Area of a parallelogram and a triangle", "Զուգահեռագծի և եռանկյան մակերես", "Площадь параллелограмма и треугольника"],
        ["area-trapezium", "Area of a trapezium", "Սեղանի մակերես", "Площадь трапеции"],
        ["pythagoras", "The Pythagorean theorem", "Պյութագորասի թեորեմ", "Теорема Пифагора"],
        ["pythagoras-converse", "Converse of the Pythagorean theorem; Pythagorean triples", "Պյութագորասի հակադարձ թեորեմ, պյութագորասյան եռյակներ", "Обратная теорема Пифагора; пифагоровы тройки"],
        ["herons-formula", "Heron's formula", "Հերոնի բանաձև", "Формула Герона"],
      ]),
      unit(t("Similar triangles", "Նման եռանկյուններ", "Подобные треугольники"), t("Proportional segments, similarity tests, midline, applications, trigonometric ratios.", "Համեմատական հատվածներ, նմանության հայտանիշներ, միջին գիծ, կիրառություններ, եռանկյունաչափական հարաբերություններ։", "Пропорциональные отрезки, признаки подобия, средняя линия, применения, тригонометрические соотношения."), [
        ["similarity-definition", "Proportional segments and similar triangles", "Համեմատական հատվածներ և նման եռանկյուններ", "Пропорциональные отрезки и подобные треугольники"],
        ["similarity-tests", "Three similarity tests", "Նմանության երեք հայտանիշները", "Три признака подобия треугольников"],
        ["midline", "Midline of a triangle; medians meet at one point", "Եռանկյան միջին գիծ, միջնագծերի հատման կետ", "Средняя линия треугольника; точка пересечения медиан"],
        ["proportional-in-right-triangle", "Proportional segments in a right triangle", "Համեմատական հատվածներ ուղղանկյուն եռանկյան մեջ", "Пропорциональные отрезки в прямоугольном треугольнике"],
        ["sin-cos-tan-acute", "Sine, cosine and tangent of an acute angle", "Սուր անկյան սինուս, կոսինուս և տանգենս", "Синус, косинус и тангенс острого угла"],
        ["trig-values-30-45-60", "Values for 30°, 45°, 60°", "30°, 45°, 60° անկյունների արժեքները", "Значения для 30°, 45°, 60°"],
      ]),
      unit(t("Circle", "Շրջանագիծ", "Окружность"), t("Tangent, central and inscribed angles, four remarkable points, inscribed and circumscribed circles.", "Շոշափող, կենտրոնային և ներգծյալ անկյուններ, չորս նշանավոր կետեր, ներգծյալ և արտագծյալ շրջանագծեր։", "Касательная, центральные и вписанные углы, четыре замечательные точки, вписанная и описанная окружности."), [
        ["tangent-line", "Tangent to a circle", "Շրջանագծի շոշափող", "Касательная к окружности"],
        ["central-inscribed-angles", "Central and inscribed angles", "Կենտրոնային և ներգծյալ անկյուններ", "Центральные и вписанные углы"],
        ["chords-theorem", "Intersecting chords theorem", "Հատվող լարերի թեորեմ", "Теорема об отрезках пересекающихся хорд"],
        ["remarkable-points", "Four remarkable points of a triangle", "Եռանկյան չորս նշանավոր կետերը", "Четыре замечательные точки треугольника"],
        ["inscribed-circumscribed", "Inscribed and circumscribed circles", "Ներգծյալ և արտագծյալ շրջանագծեր", "Вписанная и описанная окружности"],
      ]),
    ],
  },
  {
    subject: "geometry",
    grade: 9,
    title: t("Geometry · Grade 9", "Երկրաչափություն · 9-րդ դասարան", "Геометрия · 9 класс"),
    description: t("Vectors, coordinate method, solving triangles with sine and cosine laws, regular polygons, circle length and area, motions, and the first look at solids.", "Վեկտորներ, կոորդինատային եղանակ, եռանկյունների լուծում սինուսների և կոսինուսների թեորեմներով, կանոնավոր բազմանկյուններ, շրջանագծի երկարություն և մակերես, շարժումներ, մարմինների առաջին ծանոթություն։", "Векторы, метод координат, решение треугольников по теоремам синусов и косинусов, правильные многоугольники, длина окружности и площадь круга, движения, первое знакомство с телами."),
    curriculumNotes: notes(
      ["Armenia grade 9 (2 h/week): vectors, coordinates, sine and cosine laws, scalar product, regular polygons, circle length and area, motions (symmetry, rotation, translation), initial information about stereometry. Grade 9 state exam includes geometry.", "Հայաստան, 9-րդ դասարան (2 ժ/շաբ.)՝ վեկտորներ, կոորդինատներ, սինուսների և կոսինուսների թեորեմներ, սկալյար արտադրյալ, կանոնավոր բազմանկյուններ, շրջանագծի երկարություն և շրջանի մակերես, շարժումներ, տարածաչափության սկզբնական տեղեկություններ։ 9-րդ դասարանի պետական քննությունը ներառում է երկրաչափություն։", "Армения, 9 класс (2 ч/нед.): векторы, координаты, теоремы синусов и косинусов, скалярное произведение, правильные многоугольники, длина окружности и площадь круга, движения, начальные сведения стереометрии. Экзамен за 9 класс включает геометрию."],
      ["Russia grade 9 (ФГОС ООО, 68 h): vectors, coordinate method, relations between sides and angles, scalar product, circle length and area, motions, initial stereometry. Ends with ОГЭ geometry module.", "Ռուսաստան, 9-րդ դասարան (ФГОС ООО, 68 ժ)՝ վեկտորներ, կոորդինատային եղանակ, կողմերի և անկյունների հարաբերություններ, սկալյար արտադրյալ, շրջանագծի երկարություն և մակերես, շարժումներ, տարածաչափության սկիզբ։ Ավարտվում է ОГЭ երկրաչափության մոդուլով։", "Россия, 9 класс (ФГОС ООО, 68 ч): векторы, метод координат, соотношения между сторонами и углами, скалярное произведение, длина окружности и площадь круга, движения, начальные сведения стереометрии. Завершается геометрическим модулем ОГЭ."],
    ),
    hoursPerWeek: { armenia: 2, russia: 2 },
    units: [
      unit(t("Vectors", "Վեկտորներ", "Векторы"), t("Vector concept, addition, subtraction, multiplication by a number, applications.", "Վեկտորի գաղափար, գումարում, հանում, թվով բազմապատկում, կիրառություններ։", "Понятие вектора, сложение, вычитание, умножение на число, применения."), [
        ["vector-concept", "Vectors: equality and collinearity", "Վեկտորներ․ հավասարություն և կոլինեարություն", "Понятие вектора, равенство и коллинеарность"],
        ["vector-addition", "Adding and subtracting vectors", "Վեկտորների գումարում և հանում", "Сложение и вычитание векторов"],
        ["vector-scalar", "Multiplying a vector by a number", "Վեկտորի բազմապատկում թվով", "Умножение вектора на число"],
        ["vectors-applications", "Midline of a trapezium and other applications", "Սեղանի միջին գիծ և այլ կիրառություններ", "Средняя линия трапеции и другие применения"],
      ]),
      unit(t("Coordinate method", "Կոորդինատային եղանակ", "Метод координат"), t("Coordinates of a vector, midpoint, distance, equations of circle and line.", "Վեկտորի կոորդինատները, միջնակետ, հեռավորություն, շրջանագծի և ուղղի հավասարումներ։", "Координаты вектора, середина отрезка, расстояние, уравнения окружности и прямой."), [
        ["vector-coordinates", "Coordinates of a vector", "Վեկտորի կոորդինատները", "Координаты вектора"],
        ["midpoint-distance", "Midpoint and distance formulas", "Միջնակետի և հեռավորության բանաձևեր", "Координаты середины отрезка и расстояние между точками"],
        ["circle-equation", "Equation of a circle", "Շրջանագծի հավասարում", "Уравнение окружности"],
        ["line-equation", "Equation of a line", "Ուղղի հավասարում", "Уравнение прямой"],
      ]),
      unit(t("Solving triangles", "Եռանկյունների լուծում", "Соотношения между сторонами и углами треугольника"), t("Sine and cosine of angles 0°–180°, area via sine, sine law, cosine law, scalar product.", "0°–180° անկյունների սինուս և կոսինուս, մակերես սինուսով, սինուսների և կոսինուսների թեորեմներ, սկալյար արտադրյալ։", "Синус и косинус углов 0°–180°, площадь через синус, теоремы синусов и косинусов, скалярное произведение."), [
        ["sin-cos-0-180", "Sine and cosine of angles from 0° to 180°", "Սինուս և կոսինուս 0°-ից 180°", "Синус и косинус углов от 0° до 180°"],
        ["area-sine", "Area of a triangle via sine", "Եռանկյան մակերեսը սինուսով", "Площадь треугольника через синус"],
        ["sine-law", "The law of sines", "Սինուսների թեորեմ", "Теорема синусов"],
        ["cosine-law", "The law of cosines", "Կոսինուսների թեորեմ", "Теорема косинусов"],
        ["solving-triangles-cases", "Solving triangles: the three cases", "Եռանկյունների լուծում․ երեք դեպք", "Решение треугольников: три случая"],
        ["scalar-product", "Scalar product of vectors", "Վեկտորների սկալյար արտադրյալ", "Скалярное произведение векторов"],
      ]),
      unit(t("Circle length and area", "Շրջանագծի երկարություն և շրջանի մակերես", "Длина окружности и площадь круга"), t("Regular polygons, inscribed and circumscribed circles, arc length, sector area.", "Կանոնավոր բազմանկյուններ, ներգծյալ և արտագծյալ շրջանագծեր, աղեղի երկարություն, սեկտորի մակերես։", "Правильные многоугольники, вписанная и описанная окружности, длина дуги, площадь сектора."), [
        ["regular-polygons", "Regular polygons", "Կանոնավոր բազմանկյուններ", "Правильные многоугольники"],
        ["regular-polygon-circles", "Circles inscribed in and circumscribed about regular polygons", "Կանոնավոր բազմանկյան ներգծյալ և արտագծյալ շրջանագծեր", "Окружности, вписанные в правильный многоугольник и описанные около него"],
        ["circumference-arc", "Circumference and arc length", "Շրջանագծի և աղեղի երկարություն", "Длина окружности и дуги"],
        ["circle-sector-area", "Area of a circle and a sector", "Շրջանի և սեկտորի մակերես", "Площадь круга и кругового сектора"],
      ]),
      unit(t("Motions and solids", "Շարժումներ և մարմիններ", "Движения и тела"), t("Symmetries, translation, rotation; polyhedra and round bodies — a preview.", "Համաչափություններ, զուգահեռ տեղափոխություն, պտույտ, բազմանիստներ և պտտման մարմիններ՝ նախադիտում։", "Симметрии, параллельный перенос, поворот; многогранники и тела вращения — предварительный обзор."), [
        ["motions", "Motions: symmetry, translation, rotation", "Շարժումներ․ համաչափություն, տեղափոխություն, պտույտ", "Движения: симметрия, параллельный перенос, поворот"],
        ["polyhedra-preview", "Prism, pyramid, their surface and volume", "Պրիզմա, բուրգ, մակերևույթ և ծավալ", "Призма, пирамида, их поверхность и объём"],
        ["round-bodies-preview", "Cylinder, cone, sphere", "Գլան, կոն, գունդ", "Цилиндр, конус, шар"],
        ["geometry-9-review", "Review for the grade 9 exam", "Ամփոփում 9-րդ դասարանի քննության համար", "Повторение к экзамену за 9 класс"],
      ]),
    ],
  },
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
