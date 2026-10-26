import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Coordinate method in space", "Կոորդինատային եղանակ տարածության մեջ", "Метод координат в пространстве"),
  summary: t("Coordinates of points and vectors, scalar product, angle between lines and planes, motions.", "Կետերի և վեկտորների կոորդինատներ, սկալյար արտադրյալ, ուղիղների և հարթությունների միջև անկյուն, շարժումներ։", "Координаты точек и векторов, скалярное произведение, угол между прямыми и плоскостями, движения."),
  lessons: [
    lesson(
      "space-coordinates",
      ["Rectangular coordinates in space", "Ուղղանկյուն կոորդինատներ տարածության մեջ", "Прямоугольная система координат в пространстве"],
      {
        en: ["Describe the rectangular coordinate system Oxyz, the coordinate planes and the coordinates of a point", "Derive and apply the distance formula and the midpoint formula in space", "Find projections and symmetric images of points and solve problems about distances and equidistant points"],
        hy: ["Նկարագրել Oxyz ուղղանկյուն կոորդինատային համակարգը, կոորդինատային հարթությունները և կետի կոորդինատները", "Արտածել և կիրառել հեռավորության և միջնակետի բանաձևերը տարածության մեջ", "Գտնել կետերի պրոյեկցիաները և համաչափ պատկերները, լուծել հեռավորությունների և հավասարահեռ կետերի խնդիրներ"],
        ru: ["Описывать прямоугольную систему координат Oxyz, координатные плоскости и координаты точки", "Выводить и применять формулу расстояния и формулу середины отрезка в пространстве", "Находить проекции и симметричные образы точек и решать задачи о расстояниях и равноудалённых точках"],
      },
      {
        en: `## The coordinate system

Three pairwise perpendicular lines through a point $O$ with chosen directions and a common unit form the **rectangular coordinate system** $Oxyz$: the **axes** $Ox$ (abscissa), $Oy$ (ordinate) and $Oz$ (applicate), the **origin** $O$ and the three **coordinate planes** $Oxy$, $Oxz$, $Oyz$.

Through a point $M$ draw the planes parallel to the coordinate planes; they meet the axes at points with coordinates $x$, $y$, $z$ on the respective axes. These numbers are the **coordinates** of $M$: $M(x; y; z)$. Equivalently, $x$, $y$, $z$ are the signed distances from $M$ to the planes $Oyz$, $Oxz$, $Oxy$.

- A point lies in the plane $Oxy$ exactly when $z = 0$; in $Oxz$ when $y = 0$; in $Oyz$ when $x = 0$.
- A point lies on the axis $Ox$ when $y = z = 0$, on $Oy$ when $x = z = 0$, on $Oz$ when $x = y = 0$.
- The origin is $O(0; 0; 0)$.

**Example 1.** For $A(2; -3; 5)$ the projection onto the plane $Oxy$ is $(2; -3; 0)$, onto the axis $Ox$ it is $(2; 0; 0)$. The distance from $A$ to the plane $Oxy$ is $\\lvert z\\rvert = 5$, to the axis $Oz$ it is $\\sqrt{x^2 + y^2} = \\sqrt{13}$, to the origin $\\sqrt{4 + 9 + 25} = \\sqrt{38}$.

**Example 2.** Symmetry changes signs. The point symmetric to $A(2; -3; 5)$ with respect to the origin is $(-2; 3; -5)$; with respect to the plane $Oxy$ it is $(2; -3; -5)$ (only $z$ changes sign); with respect to the axis $Ox$ it is $(2; 3; -5)$ (the coordinate along the axis is kept, the other two change sign).

## Distance between two points

**Theorem.** For $A(x_1; y_1; z_1)$ and $B(x_2; y_2; z_2)$
$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}.$$

*Proof.* If the segment $AB$ is not parallel to a coordinate plane, the planes through $A$ and $B$ parallel to the coordinate planes cut out a rectangular box with edges $\\lvert x_2 - x_1\\rvert$, $\\lvert y_2 - y_1\\rvert$, $\\lvert z_2 - z_1\\rvert$, and $AB$ is its diagonal; the square of the diagonal is the sum of the squares of the edges. The degenerate cases (some differences equal to zero) reduce to the plane formula or to a single difference. $\\blacksquare$

In particular $OM = \\sqrt{x^2 + y^2 + z^2}$.

**Example 3.** $A(1; 2; 3)$, $B(4; 6; 15)$: $AB = \\sqrt{9 + 16 + 144} = 13$.

**Example 4.** The points $A(1; 0; 0)$, $B(0; 1; 0)$, $C(0; 0; 1)$ form an equilateral triangle: each side equals $\\sqrt{1 + 1} = \\sqrt2$. Its perimeter is $3\\sqrt2$.

**Example 5.** For $A(3; -1; 2)$, $B(0; -4; 2)$, $C(-3; 2; 1)$: $AB^2 = 9 + 9 + 0 = 18$, $AC^2 = 36 + 9 + 1 = 46$, $BC^2 = 9 + 36 + 1 = 46$. The triangle is isosceles with $AC = BC$.

**Example 6.** Find the point on the axis $Oz$ equidistant from $A(1; 2; 3)$ and $B(2; 0; 1)$. Let it be $M(0; 0; z)$. Then $1 + 4 + (z - 3)^2 = 4 + 0 + (z - 1)^2$, so $14 - 6z = 5 - 2z$, $z = \\dfrac94$: $M\\left(0; 0; \\dfrac94\\right)$.

## Midpoint of a segment

**Theorem.** The midpoint of $AB$ has coordinates
$$\\left(\\frac{x_1 + x_2}{2};\\ \\frac{y_1 + y_2}{2};\\ \\frac{z_1 + z_2}{2}\\right).$$

*Proof.* Project onto each axis: the projection of the midpoint is the midpoint of the projections (parallel planes cut equal segments on the two lines), and on a line the midpoint has the mean coordinate. $\\blacksquare$

**Example 7.** The midpoint of $A(1; -2; 4)$ and $B(3; 6; -2)$ is $(2; 2; 1)$.

**Example 8.** $A(1; 2; 3)$, $B(2; 4; 5)$, $C(4; 7; 8)$ are three vertices of a parallelogram $ABCD$. The diagonals bisect each other, so the midpoint of $AC$, which is $\\left(\\dfrac52; \\dfrac92; \\dfrac{11}{2}\\right)$, is also the midpoint of $BD$. Hence $D = (5 - 2; 9 - 4; 11 - 5) = (3; 5; 6)$.

### Exercises

1. For $M(-3; 4; 12)$ find the distances to the three coordinate planes, to the three axes and to the origin.
2. Find $AB$ for $A(2; -1; 3)$ and $B(-1; 3; 3)$.
3. Find the midpoint of $A(-4; 2; 7)$ and $B(6; -8; 1)$.
4. Is the triangle $A(1; 1; 1)$, $B(2; 3; 4)$, $C(4; 3; 1)$ isosceles?
5. Find the point on the axis $Oy$ equidistant from $A(2; 1; 3)$ and $B(0; 5; 1)$.
6. Find the points symmetric to $P(-1; 5; -2)$ with respect to the plane $Oxz$, the axis $Oy$ and the origin.
7. $A(0; 1; 2)$, $B(3; 2; 4)$, $C(5; 6; 7)$ are vertices of a parallelogram $ABCD$. Find $D$.
8. Prove that $A(1; 2; 3)$, $B(3; 4; 5)$, $C(7; 8; 9)$ lie on one line.

### Answers

1. To the planes: $3$, $4$, $12$; to $Ox$: $\\sqrt{16 + 144} = 4\\sqrt{10}$, to $Oy$: $\\sqrt{9 + 144} = 3\\sqrt{17}$, to $Oz$: $5$; to the origin $13$. 2. $\\sqrt{9 + 16} = 5$. 3. $(1; -3; 4)$. 4. $AB^2 = 14$, $BC^2 = 13$, $AC^2 = 13$; yes, $AC = BC$. 5. $(0; y; 0)$ with $4 + (y - 1)^2 + 9 = (y - 5)^2 + 1$, $14 - 2y = 26 - 10y$, $y = \\dfrac32$. 6. $(-1; -5; -2)$, $(1; 5; 2)$, $(1; -5; 2)$. 7. $D = A + C - B = (2; 5; 5)$. 8. $AB = 2\\sqrt3$, $BC = 4\\sqrt3$, $AC = 6\\sqrt3 = AB + BC$, so $B$ lies on the segment $AC$.`,
        hy: `## Կոորդինատային համակարգը

$O$ կետով անցնող երեք զույգ առ զույգ ուղղահայաց ուղիղները՝ ընտրված ուղղություններով և ընդհանուր միավորով, կազմում են $Oxyz$ **ուղղանկյուն կոորդինատային համակարգը**․ $Ox$ (աբսցիսների), $Oy$ (օրդինատների) և $Oz$ (ապլիկատների) **առանցքները**, $O$ **սկզբնակետը** և երեք **կոորդինատային հարթությունները**՝ $Oxy$, $Oxz$, $Oyz$։

$M$ կետով տանենք կոորդինատային հարթություններին զուգահեռ հարթություններ, դրանք առանցքները հատում են կետերում, որոնց կոորդինատները համապատասխան առանցքների վրա $x$, $y$, $z$ են։ Այս թվերը $M$-ի **կոորդինատներն** են․ $M(x; y; z)$։ Համարժեքորեն՝ $x$, $y$, $z$-ը $M$-ից $Oyz$, $Oxz$, $Oxy$ հարթությունների նշանով հեռավորություններն են։

- Կետն ընկած է $Oxy$ հարթության մեջ ճիշտ այն դեպքում, երբ $z = 0$, $Oxz$-ում՝ երբ $y = 0$, $Oyz$-ում՝ երբ $x = 0$։
- Կետն ընկած է $Ox$ առանցքի վրա, երբ $y = z = 0$, $Oy$-ի վրա՝ երբ $x = z = 0$, $Oz$-ի վրա՝ երբ $x = y = 0$։
- Սկզբնակետը $O(0; 0; 0)$ է։

**Օրինակ 1։** $A(2; -3; 5)$ կետի պրոյեկցիան $Oxy$ հարթության վրա $(2; -3; 0)$ է, $Ox$ առանցքի վրա՝ $(2; 0; 0)$։ $A$-ից $Oxy$ հարթության հեռավորությունը $\\lvert z\\rvert = 5$ է, $Oz$ առանցքից՝ $\\sqrt{x^2 + y^2} = \\sqrt{13}$, սկզբնակետից՝ $\\sqrt{4 + 9 + 25} = \\sqrt{38}$։

**Օրինակ 2։** Համաչափությունը փոխում է նշանները։ $A(2; -3; 5)$-ին սկզբնակետի նկատմամբ համաչափ կետը $(-2; 3; -5)$ է, $Oxy$ հարթության նկատմամբ՝ $(2; -3; -5)$ (միայն $z$-ն է նշան փոխում), $Ox$ առանցքի նկատմամբ՝ $(2; 3; -5)$ (առանցքի երկայնքով կոորդինատը պահպանվում է, մյուս երկուսը նշան են փոխում)։

## Երկու կետերի հեռավորությունը

**Թեորեմ։** $A(x_1; y_1; z_1)$ և $B(x_2; y_2; z_2)$ կետերի համար
$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}.$$

*Ապացույց։* Եթե $AB$ հատվածը զուգահեռ չէ կոորդինատային հարթությանը, $A$-ով և $B$-ով կոորդինատային հարթություններին զուգահեռ հարթություններն անջատում են $\\lvert x_2 - x_1\\rvert$, $\\lvert y_2 - y_1\\rvert$, $\\lvert z_2 - z_1\\rvert$ կողերով ուղղանկյունանիստ, որի անկյունագիծը $AB$-ն է, իսկ անկյունագծի քառակուսին կողերի քառակուսիների գումարն է։ Այլասերված դեպքերը (որոշ տարբերություններ զրո են) բերվում են հարթության բանաձևին կամ մեկ տարբերության։ $\\blacksquare$

Մասնավորապես $OM = \\sqrt{x^2 + y^2 + z^2}$։

**Օրինակ 3։** $A(1; 2; 3)$, $B(4; 6; 15)$․ $AB = \\sqrt{9 + 16 + 144} = 13$։

**Օրինակ 4։** $A(1; 0; 0)$, $B(0; 1; 0)$, $C(0; 0; 1)$ կետերը կազմում են հավասարակողմ եռանկյուն․ յուրաքանչյուր կողմը $\\sqrt{1 + 1} = \\sqrt2$ է։ Պարագիծը $3\\sqrt2$ է։

**Օրինակ 5։** $A(3; -1; 2)$, $B(0; -4; 2)$, $C(-3; 2; 1)$ կետերի համար $AB^2 = 9 + 9 + 0 = 18$, $AC^2 = 36 + 9 + 1 = 46$, $BC^2 = 9 + 36 + 1 = 46$։ Եռանկյունը հավասարասրուն է՝ $AC = BC$։

**Օրինակ 6։** Գտնենք $Oz$ առանցքի այն կետը, որը հավասարահեռ է $A(1; 2; 3)$-ից և $B(2; 0; 1)$-ից։ Այն լինի $M(0; 0; z)$։ Այդ դեպքում $1 + 4 + (z - 3)^2 = 4 + 0 + (z - 1)^2$, ուստի $14 - 6z = 5 - 2z$, $z = \\dfrac94$․ $M\\left(0; 0; \\dfrac94\\right)$։

## Հատվածի միջնակետը

**Թեորեմ։** $AB$-ի միջնակետն ունի
$$\\left(\\frac{x_1 + x_2}{2};\\ \\frac{y_1 + y_2}{2};\\ \\frac{z_1 + z_2}{2}\\right)$$
կոորդինատները։

*Ապացույց։* Պրոյեկտենք յուրաքանչյուր առանցքի վրա․ միջնակետի պրոյեկցիան պրոյեկցիաների միջնակետն է (զուգահեռ հարթություններն երկու ուղիղների վրա հավասար հատվածներ են անջատում), իսկ ուղղի վրա միջնակետն ունի միջին կոորդինատը։ $\\blacksquare$

**Օրինակ 7։** $A(1; -2; 4)$-ի և $B(3; 6; -2)$-ի միջնակետը $(2; 2; 1)$ է։

**Օրինակ 8։** $A(1; 2; 3)$, $B(2; 4; 5)$, $C(4; 7; 8)$ կետերը $ABCD$ զուգահեռագծի երեք գագաթներն են։ Անկյունագծերը հատման կետով կիսվում են, ուստի $AC$-ի միջնակետը՝ $\\left(\\dfrac52; \\dfrac92; \\dfrac{11}{2}\\right)$, նաև $BD$-ի միջնակետն է։ Հետևաբար $D = (5 - 2; 9 - 4; 11 - 5) = (3; 5; 6)$։

### Վարժություններ

1. $M(-3; 4; 12)$ կետի համար գտեք հեռավորություններն երեք կոորդինատային հարթություններից, երեք առանցքներից և սկզբնակետից։
2. Գտեք $AB$-ն, եթե $A(2; -1; 3)$, $B(-1; 3; 3)$։
3. Գտեք $A(-4; 2; 7)$-ի և $B(6; -8; 1)$-ի միջնակետը։
4. Հավասարասրո՞ւն է արդյոք $A(1; 1; 1)$, $B(2; 3; 4)$, $C(4; 3; 1)$ եռանկյունը։
5. Գտեք $Oy$ առանցքի այն կետը, որը հավասարահեռ է $A(2; 1; 3)$-ից և $B(0; 5; 1)$-ից։
6. Գտեք $P(-1; 5; -2)$-ին $Oxz$ հարթության, $Oy$ առանցքի և սկզբնակետի նկատմամբ համաչափ կետերը։
7. $A(0; 1; 2)$, $B(3; 2; 4)$, $C(5; 6; 7)$-ը $ABCD$ զուգահեռագծի գագաթներ են։ Գտեք $D$-ն։
8. Ապացուցեք, որ $A(1; 2; 3)$, $B(3; 4; 5)$, $C(7; 8; 9)$ կետերը մեկ ուղղի վրա են։

### Պատասխաններ

1. Հարթություններից՝ $3$, $4$, $12$, $Ox$-ից՝ $\\sqrt{16 + 144} = 4\\sqrt{10}$, $Oy$-ից՝ $\\sqrt{9 + 144} = 3\\sqrt{17}$, $Oz$-ից՝ $5$, սկզբնակետից՝ $13$։ 2. $\\sqrt{9 + 16} = 5$։ 3. $(1; -3; 4)$։ 4. $AB^2 = 14$, $BC^2 = 13$, $AC^2 = 13$, այո, $AC = BC$։ 5. $(0; y; 0)$, որտեղ $4 + (y - 1)^2 + 9 = (y - 5)^2 + 1$, $14 - 2y = 26 - 10y$, $y = \\dfrac32$։ 6. $(-1; -5; -2)$, $(1; 5; 2)$, $(1; -5; 2)$։ 7. $D = A + C - B = (2; 5; 5)$։ 8. $AB = 2\\sqrt3$, $BC = 4\\sqrt3$, $AC = 6\\sqrt3 = AB + BC$, ուստի $B$-ն ընկած է $AC$ հատվածի վրա։`,
        ru: `## Система координат

Три попарно перпендикулярные прямые через точку $O$ с выбранными направлениями и общей единицей образуют **прямоугольную систему координат** $Oxyz$: **оси** $Ox$ (абсцисс), $Oy$ (ординат) и $Oz$ (аппликат), **начало координат** $O$ и три **координатные плоскости** $Oxy$, $Oxz$, $Oyz$.

Через точку $M$ проведём плоскости, параллельные координатным плоскостям; они пересекают оси в точках с координатами $x$, $y$, $z$ на соответствующих осях. Эти числа — **координаты** точки $M$: $M(x; y; z)$. Равносильно, $x$, $y$, $z$ — расстояния со знаком от $M$ до плоскостей $Oyz$, $Oxz$, $Oxy$.

- Точка лежит в плоскости $Oxy$ ровно тогда, когда $z = 0$; в $Oxz$ — когда $y = 0$; в $Oyz$ — когда $x = 0$.
- Точка лежит на оси $Ox$, когда $y = z = 0$, на $Oy$ — когда $x = z = 0$, на $Oz$ — когда $x = y = 0$.
- Начало координат — $O(0; 0; 0)$.

**Пример 1.** Для $A(2; -3; 5)$ проекция на плоскость $Oxy$ — $(2; -3; 0)$, на ось $Ox$ — $(2; 0; 0)$. Расстояние от $A$ до плоскости $Oxy$ равно $\\lvert z\\rvert = 5$, до оси $Oz$ — $\\sqrt{x^2 + y^2} = \\sqrt{13}$, до начала координат — $\\sqrt{4 + 9 + 25} = \\sqrt{38}$.

**Пример 2.** Симметрия меняет знаки. Точка, симметричная $A(2; -3; 5)$ относительно начала координат, — $(-2; 3; -5)$; относительно плоскости $Oxy$ — $(2; -3; -5)$ (знак меняет только $z$); относительно оси $Ox$ — $(2; 3; -5)$ (координата вдоль оси сохраняется, две другие меняют знак).

## Расстояние между двумя точками

**Теорема.** Для $A(x_1; y_1; z_1)$ и $B(x_2; y_2; z_2)$
$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}.$$

*Доказательство.* Если отрезок $AB$ не параллелен координатной плоскости, плоскости через $A$ и $B$, параллельные координатным, вырезают прямоугольный параллелепипед с рёбрами $\\lvert x_2 - x_1\\rvert$, $\\lvert y_2 - y_1\\rvert$, $\\lvert z_2 - z_1\\rvert$, а $AB$ — его диагональ; квадрат диагонали равен сумме квадратов рёбер. Вырожденные случаи (некоторые разности равны нулю) сводятся к формуле на плоскости или к одной разности. $\\blacksquare$

В частности, $OM = \\sqrt{x^2 + y^2 + z^2}$.

**Пример 3.** $A(1; 2; 3)$, $B(4; 6; 15)$: $AB = \\sqrt{9 + 16 + 144} = 13$.

**Пример 4.** Точки $A(1; 0; 0)$, $B(0; 1; 0)$, $C(0; 0; 1)$ образуют равносторонний треугольник: каждая сторона равна $\\sqrt{1 + 1} = \\sqrt2$. Его периметр $3\\sqrt2$.

**Пример 5.** Для $A(3; -1; 2)$, $B(0; -4; 2)$, $C(-3; 2; 1)$: $AB^2 = 9 + 9 + 0 = 18$, $AC^2 = 36 + 9 + 1 = 46$, $BC^2 = 9 + 36 + 1 = 46$. Треугольник равнобедренный, $AC = BC$.

**Пример 6.** Найдём точку оси $Oz$, равноудалённую от $A(1; 2; 3)$ и $B(2; 0; 1)$. Пусть это $M(0; 0; z)$. Тогда $1 + 4 + (z - 3)^2 = 4 + 0 + (z - 1)^2$, поэтому $14 - 6z = 5 - 2z$, $z = \\dfrac94$: $M\\left(0; 0; \\dfrac94\\right)$.

## Середина отрезка

**Теорема.** Середина отрезка $AB$ имеет координаты
$$\\left(\\frac{x_1 + x_2}{2};\\ \\frac{y_1 + y_2}{2};\\ \\frac{z_1 + z_2}{2}\\right).$$

*Доказательство.* Спроектируем на каждую ось: проекция середины — середина проекций (параллельные плоскости отсекают на двух прямых равные отрезки), а на прямой середина имеет среднюю координату. $\\blacksquare$

**Пример 7.** Середина отрезка с концами $A(1; -2; 4)$ и $B(3; 6; -2)$ — точка $(2; 2; 1)$.

**Пример 8.** $A(1; 2; 3)$, $B(2; 4; 5)$, $C(4; 7; 8)$ — три вершины параллелограмма $ABCD$. Диагонали делятся точкой пересечения пополам, поэтому середина $AC$, то есть $\\left(\\dfrac52; \\dfrac92; \\dfrac{11}{2}\\right)$, является и серединой $BD$. Значит, $D = (5 - 2; 9 - 4; 11 - 5) = (3; 5; 6)$.

### Упражнения

1. Для $M(-3; 4; 12)$ найдите расстояния до трёх координатных плоскостей, до трёх осей и до начала координат.
2. Найдите $AB$ для $A(2; -1; 3)$ и $B(-1; 3; 3)$.
3. Найдите середину отрезка с концами $A(-4; 2; 7)$ и $B(6; -8; 1)$.
4. Является ли треугольник $A(1; 1; 1)$, $B(2; 3; 4)$, $C(4; 3; 1)$ равнобедренным?
5. Найдите точку оси $Oy$, равноудалённую от $A(2; 1; 3)$ и $B(0; 5; 1)$.
6. Найдите точки, симметричные $P(-1; 5; -2)$ относительно плоскости $Oxz$, оси $Oy$ и начала координат.
7. $A(0; 1; 2)$, $B(3; 2; 4)$, $C(5; 6; 7)$ — вершины параллелограмма $ABCD$. Найдите $D$.
8. Докажите, что $A(1; 2; 3)$, $B(3; 4; 5)$, $C(7; 8; 9)$ лежат на одной прямой.

### Ответы

1. До плоскостей: $3$, $4$, $12$; до $Ox$: $\\sqrt{16 + 144} = 4\\sqrt{10}$, до $Oy$: $\\sqrt{9 + 144} = 3\\sqrt{17}$, до $Oz$: $5$; до начала координат $13$. 2. $\\sqrt{9 + 16} = 5$. 3. $(1; -3; 4)$. 4. $AB^2 = 14$, $BC^2 = 13$, $AC^2 = 13$; да, $AC = BC$. 5. $(0; y; 0)$, где $4 + (y - 1)^2 + 9 = (y - 5)^2 + 1$, $14 - 2y = 26 - 10y$, $y = \\dfrac32$. 6. $(-1; -5; -2)$, $(1; 5; 2)$, $(1; -5; 2)$. 7. $D = A + C - B = (2; 5; 5)$. 8. $AB = 2\\sqrt3$, $BC = 4\\sqrt3$, $AC = 6\\sqrt3 = AB + BC$, поэтому $B$ лежит на отрезке $AC$.`,
      },
      [
        q(t("A point lies in the plane Oxy exactly when…", "Կետն ընկած է Oxy հարթության մեջ ճիշտ այն դեպքում, երբ…", "Точка лежит в плоскости Oxy ровно тогда, когда…"), [t("x = 0", "x = 0", "x = 0"), t("y = 0", "y = 0", "y = 0"), t("z = 0", "z = 0", "z = 0")], 2),
        q(t("The distance from (1; 2; 2) to the origin is…", "(1; 2; 2) կետից սկզբնակետի հեռավորությունը…", "Расстояние от (1; 2; 2) до начала координат равно…"), [t("3", "3", "3"), t("5", "5", "5"), t("√5", "√5", "√5")], 0),
        q(t("The midpoint of (2; 4; 6) and (4; 0; −2) is…", "(2; 4; 6) և (4; 0; −2) կետերի միջնակետը…", "Середина отрезка с концами (2; 4; 6) и (4; 0; −2) —"), [t("(3; 2; 2)", "(3; 2; 2)", "(3; 2; 2)"), t("(6; 4; 4)", "(6; 4; 4)", "(6; 4; 4)"), t("(1; 2; 4)", "(1; 2; 4)", "(1; 2; 4)")], 0),
        q(t("The point symmetric to (1; −2; 3) with respect to the origin is…", "(1; −2; 3)-ին սկզբնակետի նկատմամբ համաչափ կետը…", "Точка, симметричная (1; −2; 3) относительно начала координат, —"), [t("(−1; 2; −3)", "(−1; 2; −3)", "(−1; 2; −3)"), t("(1; −2; −3)", "(1; −2; −3)", "(1; −2; −3)"), t("(−1; −2; 3)", "(−1; −2; 3)", "(−1; −2; 3)")], 0),
        q(t("The distance from M(3; 4; 5) to the axis Oz is…", "M(3; 4; 5) կետից Oz առանցքի հեռավորությունը…", "Расстояние от M(3; 4; 5) до оси Oz равно…"), [t("5", "5", "5"), t("√50", "√50", "√50"), t("3", "3", "3")], 0),
        q(t("The distance between A(x₁; y₁; z₁) and B(x₂; y₂; z₂) is the square root of…", "A(x₁; y₁; z₁) և B(x₂; y₂; z₂) կետերի հեռավորությունը քառակուսի արմատն է…", "Расстояние между A(x₁; y₁; z₁) и B(x₂; y₂; z₂) — квадратный корень из…"), [t("the sum of the differences of coordinates", "կոորդինատների տարբերությունների գումարից", "суммы разностей координат"), t("the sum of the squares of the differences of coordinates", "կոորդինատների տարբերությունների քառակուսիների գումարից", "суммы квадратов разностей координат"), t("the product of the differences of coordinates", "կոորդինատների տարբերությունների արտադրյալից", "произведения разностей координат")], 1),
      ],
    ),
    lesson(
      "space-vector-coordinates",
      ["Coordinates of a vector; simple problems", "Վեկտորի կոորդինատները, պարզ խնդիրներ", "Координаты вектора; простейшие задачи"],
      {
        en: ["Decompose a vector in the unit vectors i, j, k and read off its coordinates", "Add, subtract and scale vectors coordinate-wise, find the coordinates of AB and the length of a vector", "Test collinearity by proportional coordinates and solve problems about parallelograms and points dividing a segment"],
        hy: ["Վերլուծել վեկտորն i, j, k միավոր վեկտորներով և կարդալ նրա կոորդինատները", "Գումարել, հանել և թվով բազմապատկել վեկտորները կոորդինատներով, գտնել AB-ի կոորդինատները և վեկտորի երկարությունը", "Ստուգել համագիծությունը համեմատական կոորդինատներով և լուծել զուգահեռագծերի և հատվածը բաժանող կետերի խնդիրներ"],
        ru: ["Разлагать вектор по единичным векторам i, j, k и находить его координаты", "Складывать, вычитать и умножать векторы на число покоординатно, находить координаты AB и длину вектора", "Проверять коллинеарность по пропорциональности координат и решать задачи о параллелограммах и точках, делящих отрезок"],
      },
      {
        en: `## Coordinates of a vector

Let $\\vec i$, $\\vec j$, $\\vec k$ be the **unit vectors** along the axes $Ox$, $Oy$, $Oz$. They are non-coplanar, so every vector has a unique decomposition
$$\\vec a = x\\vec i + y\\vec j + z\\vec k.$$
The numbers $x$, $y$, $z$ are the **coordinates** of $\\vec a$; we write $\\vec a\\{x; y; z\\}$. Equal vectors have equal coordinates, $\\vec 0\\{0; 0; 0\\}$, and the radius vector $\\overrightarrow{OM}$ has the coordinates of the point $M$.

**Rules.** For $\\vec a\\{x_1; y_1; z_1\\}$ and $\\vec b\\{x_2; y_2; z_2\\}$:

- $\\vec a + \\vec b\\{x_1 + x_2; y_1 + y_2; z_1 + z_2\\}$, $\\vec a - \\vec b\\{x_1 - x_2; y_1 - y_2; z_1 - z_2\\}$;
- $k\\vec a\\{kx_1; ky_1; kz_1\\}$;
- for $A(x_1; y_1; z_1)$, $B(x_2; y_2; z_2)$: $\\overrightarrow{AB}\\{x_2 - x_1; y_2 - y_1; z_2 - z_1\\}$ (end minus start), since $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$;
- $\\lvert\\vec a\\rvert = \\sqrt{x_1^2 + y_1^2 + z_1^2}$, because $\\vec a$ is the diagonal of a rectangular box with edges $\\lvert x_1\\rvert$, $\\lvert y_1\\rvert$, $\\lvert z_1\\rvert$.

**Example 1.** $\\vec a\\{2; -1; 3\\}$, $\\vec b\\{-1; 4; 0\\}$. Then $\\vec a + \\vec b\\{1; 3; 3\\}$, $\\vec a - \\vec b\\{3; -5; 3\\}$, $2\\vec a\\{4; -2; 6\\}$, $3\\vec a - 2\\vec b\\{8; -11; 9\\}$.

**Example 2.** $A(1; 2; -1)$, $B(3; -2; 5)$: $\\overrightarrow{AB}\\{2; -4; 6\\}$, $\\lvert\\overrightarrow{AB}\\rvert = \\sqrt{4 + 16 + 36} = \\sqrt{56} = 2\\sqrt{14}$.

**Example 3.** $\\vec a\\{3; -2; 5\\} = 3\\vec i - 2\\vec j + 5\\vec k$. The unit vector in the direction of $\\vec a\\{2; -1; 2\\}$ is $\\dfrac{\\vec a}{\\lvert\\vec a\\rvert}$; since $\\lvert\\vec a\\rvert = 3$, it is $\\left\\{\\dfrac23; -\\dfrac13; \\dfrac23\\right\\}$.

## Collinear vectors

Non-zero vectors are collinear exactly when $\\vec b = k\\vec a$, that is, when their coordinates are **proportional**: $\\dfrac{x_2}{x_1} = \\dfrac{y_2}{y_1} = \\dfrac{z_2}{z_1}$ (a zero coordinate of $\\vec a$ must be matched by a zero coordinate of $\\vec b$). The sign of $k$ tells whether they are co-directed ($k > 0$) or opposite.

**Example 4.** $\\vec a\\{2; -4; 6\\}$ and $\\vec b\\{-1; 2; -3\\}$: $\\vec b = -\\dfrac12\\vec a$, collinear and oppositely directed. $\\vec a\\{1; 2; 3\\}$ and $\\vec c\\{2; 4; 5\\}$: $\\dfrac21 = \\dfrac42 \\ne \\dfrac53$, not collinear.

**Example 5.** Find $m$ and $n$ so that $\\vec a\\{2; m; 4\\}$ and $\\vec b\\{-1; 3; n\\}$ are collinear. $\\dfrac{-1}{2} = \\dfrac{3}{m} = \\dfrac{n}{4}$ gives $m = -6$, $n = -2$.

## Simple problems

**Example 6.** $\\overrightarrow{AB}\\{3; -1; 2\\}$ and $A(1; 1; 1)$. The end is $B = (1 + 3; 1 - 1; 1 + 2) = (4; 0; 3)$.

**Example 7.** $ABCD$ is a parallelogram with $A(1; 0; 2)$, $B(3; 1; 0)$, $D(0; 2; 5)$. Then $\\overrightarrow{BC} = \\overrightarrow{AD}\\{-1; 2; 3\\}$, so $C = (3 - 1; 1 + 2; 0 + 3) = (2; 3; 3)$. Check: $\\overrightarrow{DC}\\{2; 1; -2\\} = \\overrightarrow{AB}$.

**Example 8.** The point $P$ divides $AB$ so that $AP : PB = 2 : 1$. Then $\\overrightarrow{AP} = \\dfrac23\\overrightarrow{AB}$ and $\\overrightarrow{OP} = \\overrightarrow{OA} + \\dfrac23(\\overrightarrow{OB} - \\overrightarrow{OA}) = \\dfrac{\\overrightarrow{OA} + 2\\overrightarrow{OB}}{3}$. For $A(1; 2; 3)$, $B(4; -1; 0)$: $P\\left(\\dfrac{1 + 8}{3}; \\dfrac{2 - 2}{3}; \\dfrac{3 + 0}{3}\\right) = (3; 0; 1)$. The midpoint formula is the case $1 : 1$.

### Exercises

1. $\\vec a\\{1; -2; 2\\}$, $\\vec b\\{3; 0; -4\\}$. Find $\\vec a + \\vec b$, $\\vec a - \\vec b$, $2\\vec a + \\vec b$, $\\lvert\\vec a\\rvert$, $\\lvert\\vec b\\rvert$.
2. $A(2; -3; 1)$, $B(5; 1; -1)$. Find the coordinates and the length of $\\overrightarrow{AB}$.
3. Are the vectors collinear: $\\vec a\\{4; -2; 6\\}$ and $\\vec b\\{-6; 3; -9\\}$; $\\vec c\\{1; 1; 2\\}$ and $\\vec d\\{2; 2; 3\\}$?
4. Find $m$ and $n$ so that $\\vec a\\{m; 3; -6\\}$ and $\\vec b\\{2; -1; n\\}$ are collinear.
5. Find the unit vector in the direction of $\\{6; -2; 3\\}$.
6. $\\overrightarrow{AB}\\{-2; 5; 1\\}$ and $B(0; 3; 4)$. Find $A$.
7. $ABCD$ is a parallelogram with $A(1; 1; 1)$, $B(2; 3; 5)$, $D(4; 0; 2)$. Find $C$.
8. $P$ lies on $AB$ with $AP : PB = 1 : 3$, $A(0; 4; 8)$, $B(4; 0; 4)$. Find $P$.

### Answers

1. $\\{4; -2; -2\\}$, $\\{-2; -2; 6\\}$, $\\{5; -4; 0\\}$, $3$, $5$. 2. $\\{3; 4; -2\\}$, $\\sqrt{29}$. 3. Yes, $\\vec b = -\\dfrac32\\vec a$; no, $\\dfrac21 = \\dfrac21 \\ne \\dfrac32$. 4. $\\dfrac m2 = \\dfrac{3}{-1} = \\dfrac{-6}{n}$: $m = -6$, $n = 2$. 5. Length $7$: $\\left\\{\\dfrac67; -\\dfrac27; \\dfrac37\\right\\}$. 6. $A = B - \\overrightarrow{AB} = (2; -2; 3)$. 7. $C = B + D - A = (5; 2; 6)$. 8. $\\overrightarrow{OP} = \\dfrac{3\\overrightarrow{OA} + \\overrightarrow{OB}}{4}$: $P(1; 3; 7)$.`,
        hy: `## Վեկտորի կոորդինատները

$\\vec i$, $\\vec j$, $\\vec k$-ն լինեն $Ox$, $Oy$, $Oz$ առանցքների **միավոր վեկտորները**։ Դրանք ոչ համահարթ են, ուստի ցանկացած վեկտոր ունի միակ վերլուծություն․
$$\\vec a = x\\vec i + y\\vec j + z\\vec k.$$
$x$, $y$, $z$ թվերը $\\vec a$-ի **կոորդինատներն** են, գրում ենք $\\vec a\\{x; y; z\\}$։ Հավասար վեկտորներն ունեն հավասար կոորդինատներ, $\\vec 0\\{0; 0; 0\\}$, իսկ $\\overrightarrow{OM}$ շառավիղ-վեկտորն ունի $M$ կետի կոորդինատները։

**Կանոններ։** $\\vec a\\{x_1; y_1; z_1\\}$ և $\\vec b\\{x_2; y_2; z_2\\}$ վեկտորների համար․

- $\\vec a + \\vec b\\{x_1 + x_2; y_1 + y_2; z_1 + z_2\\}$, $\\vec a - \\vec b\\{x_1 - x_2; y_1 - y_2; z_1 - z_2\\}$,
- $k\\vec a\\{kx_1; ky_1; kz_1\\}$,
- $A(x_1; y_1; z_1)$, $B(x_2; y_2; z_2)$ կետերի համար $\\overrightarrow{AB}\\{x_2 - x_1; y_2 - y_1; z_2 - z_1\\}$ (վերջը հանած սկիզբը), քանի որ $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$,
- $\\lvert\\vec a\\rvert = \\sqrt{x_1^2 + y_1^2 + z_1^2}$, քանի որ $\\vec a$-ն $\\lvert x_1\\rvert$, $\\lvert y_1\\rvert$, $\\lvert z_1\\rvert$ կողերով ուղղանկյունանիստի անկյունագիծն է։

**Օրինակ 1։** $\\vec a\\{2; -1; 3\\}$, $\\vec b\\{-1; 4; 0\\}$։ Այդ դեպքում $\\vec a + \\vec b\\{1; 3; 3\\}$, $\\vec a - \\vec b\\{3; -5; 3\\}$, $2\\vec a\\{4; -2; 6\\}$, $3\\vec a - 2\\vec b\\{8; -11; 9\\}$։

**Օրինակ 2։** $A(1; 2; -1)$, $B(3; -2; 5)$․ $\\overrightarrow{AB}\\{2; -4; 6\\}$, $\\lvert\\overrightarrow{AB}\\rvert = \\sqrt{4 + 16 + 36} = \\sqrt{56} = 2\\sqrt{14}$։

**Օրինակ 3։** $\\vec a\\{3; -2; 5\\} = 3\\vec i - 2\\vec j + 5\\vec k$։ $\\vec a\\{2; -1; 2\\}$ ուղղությամբ միավոր վեկտորը $\\dfrac{\\vec a}{\\lvert\\vec a\\rvert}$-ն է, քանի որ $\\lvert\\vec a\\rvert = 3$, այն $\\left\\{\\dfrac23; -\\dfrac13; \\dfrac23\\right\\}$ է։

## Համագիծ վեկտորներ

Ոչ զրոյական վեկտորները համագիծ են ճիշտ այն դեպքում, երբ $\\vec b = k\\vec a$, այսինքն՝ երբ դրանց կոորդինատները **համեմատական** են․ $\\dfrac{x_2}{x_1} = \\dfrac{y_2}{y_1} = \\dfrac{z_2}{z_1}$ ($\\vec a$-ի զրոյական կոորդինատին պետք է համապատասխանի $\\vec b$-ի զրոյական կոորդինատ)։ $k$-ի նշանը ցույց է տալիս՝ համուղղված են ($k > 0$), թե հակառակ ուղղված։

**Օրինակ 4։** $\\vec a\\{2; -4; 6\\}$ և $\\vec b\\{-1; 2; -3\\}$․ $\\vec b = -\\dfrac12\\vec a$, համագիծ են և հակառակ ուղղված։ $\\vec a\\{1; 2; 3\\}$ և $\\vec c\\{2; 4; 5\\}$․ $\\dfrac21 = \\dfrac42 \\ne \\dfrac53$, համագիծ չեն։

**Օրինակ 5։** Գտնենք $m$-ը և $n$-ը, որ $\\vec a\\{2; m; 4\\}$-ն ու $\\vec b\\{-1; 3; n\\}$-ը համագիծ լինեն։ $\\dfrac{-1}{2} = \\dfrac{3}{m} = \\dfrac{n}{4}$-ից $m = -6$, $n = -2$։

## Պարզ խնդիրներ

**Օրինակ 6։** $\\overrightarrow{AB}\\{3; -1; 2\\}$ և $A(1; 1; 1)$։ Վերջը $B = (1 + 3; 1 - 1; 1 + 2) = (4; 0; 3)$ է։

**Օրինակ 7։** $ABCD$-ն զուգահեռագիծ է, $A(1; 0; 2)$, $B(3; 1; 0)$, $D(0; 2; 5)$։ Այդ դեպքում $\\overrightarrow{BC} = \\overrightarrow{AD}\\{-1; 2; 3\\}$, ուստի $C = (3 - 1; 1 + 2; 0 + 3) = (2; 3; 3)$։ Ստուգում․ $\\overrightarrow{DC}\\{2; 1; -2\\} = \\overrightarrow{AB}$։

**Օրինակ 8։** $P$ կետը $AB$-ն բաժանում է այնպես, որ $AP : PB = 2 : 1$։ Այդ դեպքում $\\overrightarrow{AP} = \\dfrac23\\overrightarrow{AB}$ և $\\overrightarrow{OP} = \\overrightarrow{OA} + \\dfrac23(\\overrightarrow{OB} - \\overrightarrow{OA}) = \\dfrac{\\overrightarrow{OA} + 2\\overrightarrow{OB}}{3}$։ $A(1; 2; 3)$, $B(4; -1; 0)$ դեպքում՝ $P\\left(\\dfrac{1 + 8}{3}; \\dfrac{2 - 2}{3}; \\dfrac{3 + 0}{3}\\right) = (3; 0; 1)$։ Միջնակետի բանաձևը $1 : 1$ դեպքն է։

### Վարժություններ

1. $\\vec a\\{1; -2; 2\\}$, $\\vec b\\{3; 0; -4\\}$։ Գտեք $\\vec a + \\vec b$, $\\vec a - \\vec b$, $2\\vec a + \\vec b$, $\\lvert\\vec a\\rvert$, $\\lvert\\vec b\\rvert$։
2. $A(2; -3; 1)$, $B(5; 1; -1)$։ Գտեք $\\overrightarrow{AB}$-ի կոորդինատները և երկարությունը։
3. Համագի՞ծ են արդյոք վեկտորները․ $\\vec a\\{4; -2; 6\\}$ և $\\vec b\\{-6; 3; -9\\}$, $\\vec c\\{1; 1; 2\\}$ և $\\vec d\\{2; 2; 3\\}$։
4. Գտեք $m$-ը և $n$-ը, որ $\\vec a\\{m; 3; -6\\}$-ն ու $\\vec b\\{2; -1; n\\}$-ը համագիծ լինեն։
5. Գտեք $\\{6; -2; 3\\}$ ուղղությամբ միավոր վեկտորը։
6. $\\overrightarrow{AB}\\{-2; 5; 1\\}$ և $B(0; 3; 4)$։ Գտեք $A$-ն։
7. $ABCD$-ն զուգահեռագիծ է, $A(1; 1; 1)$, $B(2; 3; 5)$, $D(4; 0; 2)$։ Գտեք $C$-ն։
8. $P$-ն $AB$-ի վրա է, $AP : PB = 1 : 3$, $A(0; 4; 8)$, $B(4; 0; 4)$։ Գտեք $P$-ն։

### Պատասխաններ

1. $\\{4; -2; -2\\}$, $\\{-2; -2; 6\\}$, $\\{5; -4; 0\\}$, $3$, $5$։ 2. $\\{3; 4; -2\\}$, $\\sqrt{29}$։ 3. Այո, $\\vec b = -\\dfrac32\\vec a$, ոչ, $\\dfrac21 = \\dfrac21 \\ne \\dfrac32$։ 4. $\\dfrac m2 = \\dfrac{3}{-1} = \\dfrac{-6}{n}$․ $m = -6$, $n = 2$։ 5. Երկարությունը $7$ է․ $\\left\\{\\dfrac67; -\\dfrac27; \\dfrac37\\right\\}$։ 6. $A = B - \\overrightarrow{AB} = (2; -2; 3)$։ 7. $C = B + D - A = (5; 2; 6)$։ 8. $\\overrightarrow{OP} = \\dfrac{3\\overrightarrow{OA} + \\overrightarrow{OB}}{4}$․ $P(1; 3; 7)$։`,
        ru: `## Координаты вектора

Пусть $\\vec i$, $\\vec j$, $\\vec k$ — **единичные векторы** осей $Ox$, $Oy$, $Oz$. Они некомпланарны, поэтому каждый вектор имеет единственное разложение
$$\\vec a = x\\vec i + y\\vec j + z\\vec k.$$
Числа $x$, $y$, $z$ — **координаты** вектора $\\vec a$; пишем $\\vec a\\{x; y; z\\}$. Равные векторы имеют равные координаты, $\\vec 0\\{0; 0; 0\\}$, а радиус-вектор $\\overrightarrow{OM}$ имеет координаты точки $M$.

**Правила.** Для $\\vec a\\{x_1; y_1; z_1\\}$ и $\\vec b\\{x_2; y_2; z_2\\}$:

- $\\vec a + \\vec b\\{x_1 + x_2; y_1 + y_2; z_1 + z_2\\}$, $\\vec a - \\vec b\\{x_1 - x_2; y_1 - y_2; z_1 - z_2\\}$;
- $k\\vec a\\{kx_1; ky_1; kz_1\\}$;
- для $A(x_1; y_1; z_1)$, $B(x_2; y_2; z_2)$: $\\overrightarrow{AB}\\{x_2 - x_1; y_2 - y_1; z_2 - z_1\\}$ (конец минус начало), так как $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$;
- $\\lvert\\vec a\\rvert = \\sqrt{x_1^2 + y_1^2 + z_1^2}$, потому что $\\vec a$ — диагональ прямоугольного параллелепипеда с рёбрами $\\lvert x_1\\rvert$, $\\lvert y_1\\rvert$, $\\lvert z_1\\rvert$.

**Пример 1.** $\\vec a\\{2; -1; 3\\}$, $\\vec b\\{-1; 4; 0\\}$. Тогда $\\vec a + \\vec b\\{1; 3; 3\\}$, $\\vec a - \\vec b\\{3; -5; 3\\}$, $2\\vec a\\{4; -2; 6\\}$, $3\\vec a - 2\\vec b\\{8; -11; 9\\}$.

**Пример 2.** $A(1; 2; -1)$, $B(3; -2; 5)$: $\\overrightarrow{AB}\\{2; -4; 6\\}$, $\\lvert\\overrightarrow{AB}\\rvert = \\sqrt{4 + 16 + 36} = \\sqrt{56} = 2\\sqrt{14}$.

**Пример 3.** $\\vec a\\{3; -2; 5\\} = 3\\vec i - 2\\vec j + 5\\vec k$. Единичный вектор в направлении $\\vec a\\{2; -1; 2\\}$ равен $\\dfrac{\\vec a}{\\lvert\\vec a\\rvert}$; так как $\\lvert\\vec a\\rvert = 3$, это $\\left\\{\\dfrac23; -\\dfrac13; \\dfrac23\\right\\}$.

## Коллинеарные векторы

Ненулевые векторы коллинеарны ровно тогда, когда $\\vec b = k\\vec a$, то есть когда их координаты **пропорциональны**: $\\dfrac{x_2}{x_1} = \\dfrac{y_2}{y_1} = \\dfrac{z_2}{z_1}$ (нулевой координате $\\vec a$ должна соответствовать нулевая координата $\\vec b$). Знак $k$ показывает, сонаправлены они ($k > 0$) или противоположно направлены.

**Пример 4.** $\\vec a\\{2; -4; 6\\}$ и $\\vec b\\{-1; 2; -3\\}$: $\\vec b = -\\dfrac12\\vec a$, коллинеарны и противоположно направлены. $\\vec a\\{1; 2; 3\\}$ и $\\vec c\\{2; 4; 5\\}$: $\\dfrac21 = \\dfrac42 \\ne \\dfrac53$, не коллинеарны.

**Пример 5.** Найдём $m$ и $n$, при которых $\\vec a\\{2; m; 4\\}$ и $\\vec b\\{-1; 3; n\\}$ коллинеарны. Из $\\dfrac{-1}{2} = \\dfrac{3}{m} = \\dfrac{n}{4}$ получаем $m = -6$, $n = -2$.

## Простейшие задачи

**Пример 6.** $\\overrightarrow{AB}\\{3; -1; 2\\}$ и $A(1; 1; 1)$. Конец $B = (1 + 3; 1 - 1; 1 + 2) = (4; 0; 3)$.

**Пример 7.** $ABCD$ — параллелограмм, $A(1; 0; 2)$, $B(3; 1; 0)$, $D(0; 2; 5)$. Тогда $\\overrightarrow{BC} = \\overrightarrow{AD}\\{-1; 2; 3\\}$, поэтому $C = (3 - 1; 1 + 2; 0 + 3) = (2; 3; 3)$. Проверка: $\\overrightarrow{DC}\\{2; 1; -2\\} = \\overrightarrow{AB}$.

**Пример 8.** Точка $P$ делит $AB$ так, что $AP : PB = 2 : 1$. Тогда $\\overrightarrow{AP} = \\dfrac23\\overrightarrow{AB}$ и $\\overrightarrow{OP} = \\overrightarrow{OA} + \\dfrac23(\\overrightarrow{OB} - \\overrightarrow{OA}) = \\dfrac{\\overrightarrow{OA} + 2\\overrightarrow{OB}}{3}$. Для $A(1; 2; 3)$, $B(4; -1; 0)$: $P\\left(\\dfrac{1 + 8}{3}; \\dfrac{2 - 2}{3}; \\dfrac{3 + 0}{3}\\right) = (3; 0; 1)$. Формула середины — случай $1 : 1$.

### Упражнения

1. $\\vec a\\{1; -2; 2\\}$, $\\vec b\\{3; 0; -4\\}$. Найдите $\\vec a + \\vec b$, $\\vec a - \\vec b$, $2\\vec a + \\vec b$, $\\lvert\\vec a\\rvert$, $\\lvert\\vec b\\rvert$.
2. $A(2; -3; 1)$, $B(5; 1; -1)$. Найдите координаты и длину $\\overrightarrow{AB}$.
3. Коллинеарны ли векторы: $\\vec a\\{4; -2; 6\\}$ и $\\vec b\\{-6; 3; -9\\}$; $\\vec c\\{1; 1; 2\\}$ и $\\vec d\\{2; 2; 3\\}$?
4. Найдите $m$ и $n$, при которых $\\vec a\\{m; 3; -6\\}$ и $\\vec b\\{2; -1; n\\}$ коллинеарны.
5. Найдите единичный вектор в направлении $\\{6; -2; 3\\}$.
6. $\\overrightarrow{AB}\\{-2; 5; 1\\}$ и $B(0; 3; 4)$. Найдите $A$.
7. $ABCD$ — параллелограмм, $A(1; 1; 1)$, $B(2; 3; 5)$, $D(4; 0; 2)$. Найдите $C$.
8. $P$ лежит на $AB$, $AP : PB = 1 : 3$, $A(0; 4; 8)$, $B(4; 0; 4)$. Найдите $P$.

### Ответы

1. $\\{4; -2; -2\\}$, $\\{-2; -2; 6\\}$, $\\{5; -4; 0\\}$, $3$, $5$. 2. $\\{3; 4; -2\\}$, $\\sqrt{29}$. 3. Да, $\\vec b = -\\dfrac32\\vec a$; нет, $\\dfrac21 = \\dfrac21 \\ne \\dfrac32$. 4. $\\dfrac m2 = \\dfrac{3}{-1} = \\dfrac{-6}{n}$: $m = -6$, $n = 2$. 5. Длина $7$: $\\left\\{\\dfrac67; -\\dfrac27; \\dfrac37\\right\\}$. 6. $A = B - \\overrightarrow{AB} = (2; -2; 3)$. 7. $C = B + D - A = (5; 2; 6)$. 8. $\\overrightarrow{OP} = \\dfrac{3\\overrightarrow{OA} + \\overrightarrow{OB}}{4}$: $P(1; 3; 7)$.`,
      },
      [
        q(t("The coordinates of the unit vector i are…", "i միավոր վեկտորի կոորդինատները…", "Координаты единичного вектора i —"), [t("{1; 0; 0}", "{1; 0; 0}", "{1; 0; 0}"), t("{0; 1; 0}", "{0; 1; 0}", "{0; 1; 0}"), t("{1; 1; 1}", "{1; 1; 1}", "{1; 1; 1}")], 0),
        q(t("{1; 2; 3} + {3; 2; 1} =", "{1; 2; 3} + {3; 2; 1} =", "{1; 2; 3} + {3; 2; 1} ="), [t("{4; 4; 4}", "{4; 4; 4}", "{4; 4; 4}"), t("{3; 4; 3}", "{3; 4; 3}", "{3; 4; 3}"), t("{−2; 0; 2}", "{−2; 0; 2}", "{−2; 0; 2}")], 0),
        q(t("The length of the vector {2; 3; 6} is…", "{2; 3; 6} վեկտորի երկարությունը…", "Длина вектора {2; 3; 6} равна…"), [t("11", "11", "11"), t("7", "7", "7"), t("√11", "√11", "√11")], 1),
        q(t("For A(1; 1; 1) and B(2; 3; 4) the vector AB has coordinates…", "A(1; 1; 1) և B(2; 3; 4) կետերի համար AB վեկտորի կոորդինատները…", "Для A(1; 1; 1) и B(2; 3; 4) вектор AB имеет координаты…"), [t("{3; 4; 5}", "{3; 4; 5}", "{3; 4; 5}"), t("{1; 2; 3}", "{1; 2; 3}", "{1; 2; 3}"), t("{−1; −2; −3}", "{−1; −2; −3}", "{−1; −2; −3}")], 1),
        q(t("The vectors {2; 4; 6} and {1; 2; 3} are…", "{2; 4; 6} և {1; 2; 3} վեկտորները…", "Векторы {2; 4; 6} и {1; 2; 3}…"), [t("collinear", "համագիծ են", "коллинеарны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("equal", "հավասար են", "равны")], 0),
        q(t("2·{1; −1; 0} =", "2·{1; −1; 0} =", "2·{1; −1; 0} ="), [t("{2; −2; 0}", "{2; −2; 0}", "{2; −2; 0}"), t("{3; 1; 2}", "{3; 1; 2}", "{3; 1; 2}"), t("{2; −1; 0}", "{2; −1; 0}", "{2; −1; 0}")], 0),
      ],
    ),
    lesson(
      "space-scalar-product",
      ["Scalar product; angle between lines and planes", "Սկալյար արտադրյալ, անկյուն ուղիղների և հարթությունների միջև", "Скалярное произведение; угол между прямыми и плоскостями"],
      {
        en: ["Define the scalar product, compute it from coordinates and use its properties", "Find the angle between vectors and test perpendicularity", "Compute angles between lines, between a line and a plane and between planes with direction and normal vectors in a cube"],
        hy: ["Սահմանել սկալյար արտադրյալը, հաշվել այն կոորդինատներով և կիրառել նրա հատկությունները", "Գտնել վեկտորների միջև անկյունը և ստուգել ուղղահայացությունը", "Խորանարդում ուղղորդող և նորմալ վեկտորներով հաշվել անկյուններ ուղիղների, ուղղի և հարթության, հարթությունների միջև"],
        ru: ["Определять скалярное произведение, вычислять его по координатам и применять его свойства", "Находить угол между векторами и проверять перпендикулярность", "Вычислять углы между прямыми, между прямой и плоскостью и между плоскостями с помощью направляющих и нормальных векторов в кубе"],
      },
      {
        en: `## Scalar product

The **angle between non-zero vectors** $\\vec a$ and $\\vec b$ is the angle $\\varphi$ ($0^\\circ \\le \\varphi \\le 180^\\circ$) between them when laid off from one point. The **scalar product** is the number
$$\\vec a \\cdot \\vec b = \\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert \\cos\\varphi.$$

**Theorem.** In coordinates, for $\\vec a\\{x_1; y_1; z_1\\}$ and $\\vec b\\{x_2; y_2; z_2\\}$
$$\\vec a \\cdot \\vec b = x_1x_2 + y_1y_2 + z_1z_2.$$

*Proof.* By the law of cosines for the triangle on $\\vec a$, $\\vec b$, $\\vec b - \\vec a$: $\\lvert\\vec b - \\vec a\\rvert^2 = \\lvert\\vec a\\rvert^2 + \\lvert\\vec b\\rvert^2 - 2\\vec a \\cdot \\vec b$. Writing all three lengths in coordinates and simplifying, $\\vec a \\cdot \\vec b = x_1x_2 + y_1y_2 + z_1z_2$. $\\blacksquare$

**Properties.** $\\vec a \\cdot \\vec a = \\lvert\\vec a\\rvert^2 \\ge 0$; $\\vec a \\cdot \\vec b = \\vec b \\cdot \\vec a$; $(k\\vec a) \\cdot \\vec b = k(\\vec a \\cdot \\vec b)$; $(\\vec a + \\vec b) \\cdot \\vec c = \\vec a \\cdot \\vec c + \\vec b \\cdot \\vec c$. Non-zero vectors are **perpendicular** exactly when $\\vec a \\cdot \\vec b = 0$. The angle is found from
$$\\cos\\varphi = \\frac{\\vec a \\cdot \\vec b}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert} = \\frac{x_1x_2 + y_1y_2 + z_1z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2}\\,\\sqrt{x_2^2 + y_2^2 + z_2^2}}.$$

**Example 1.** $\\vec a\\{1; 2; -2\\}$, $\\vec b\\{2; -1; 2\\}$: $\\vec a \\cdot \\vec b = 2 - 2 - 4 = -4$, $\\lvert\\vec a\\rvert = \\lvert\\vec b\\rvert = 3$, $\\cos\\varphi = -\\dfrac49$; the angle is obtuse.

**Example 2.** $\\vec a\\{1; -2; 3\\}$ and $\\vec b\\{4; 5; 2\\}$: $4 - 10 + 6 = 0$, perpendicular. For which $k$ is $\\{k; 2; -1\\} \\perp \\{3; -1; 4\\}$? $3k - 2 - 4 = 0$, $k = 2$.

**Example 3.** $\\lvert\\vec a\\rvert = 3$, $\\lvert\\vec b\\rvert = 4$, the angle between them is $60^\\circ$. Then $\\vec a \\cdot \\vec b = 6$ and $\\lvert\\vec a + \\vec b\\rvert^2 = \\lvert\\vec a\\rvert^2 + 2\\vec a \\cdot \\vec b + \\lvert\\vec b\\rvert^2 = 9 + 12 + 16 = 37$, $\\lvert\\vec a + \\vec b\\rvert = \\sqrt{37}$; similarly $\\lvert\\vec a - \\vec b\\rvert = \\sqrt{9 - 12 + 16} = \\sqrt{13}$.

## Angles in a cube by coordinates

Place the unit cube $ABCDA_1B_1C_1D_1$ with $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$; then $C(1; 1; 0)$, $B_1(1; 0; 1)$, $C_1(1; 1; 1)$, $D_1(0; 1; 1)$.

**Angle between lines.** The angle between lines is at most $90^\\circ$, so for direction vectors $\\vec a$, $\\vec b$
$$\\cos\\theta = \\frac{\\lvert\\vec a \\cdot \\vec b\\rvert}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert}.$$

**Example 4.** Lines $AB_1$ and $BC_1$: $\\overrightarrow{AB_1}\\{1; 0; 1\\}$, $\\overrightarrow{BC_1}\\{0; 1; 1\\}$, $\\cos\\theta = \\dfrac{1}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac12$, $\\theta = 60^\\circ$. Lines $AC_1$ and $BD$: $\\{1; 1; 1\\} \\cdot \\{-1; 1; 0\\} = 0$, so $\\theta = 90^\\circ$.

**Angle between a line and a plane.** A non-zero vector perpendicular to a plane is a **normal vector** $\\vec n$ of the plane. If a line has direction vector $\\vec a$, the angle $\\theta$ between the line and the plane is complementary to the angle between $\\vec a$ and $\\vec n$, so
$$\\sin\\theta = \\frac{\\lvert\\vec a \\cdot \\vec n\\rvert}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec n\\rvert}.$$
A normal vector of a plane through three points is found as a vector perpendicular to two non-collinear vectors of the plane.

**Example 5.** The line $AC_1$ and the base $ABC$: $\\vec a\\{1; 1; 1\\}$, $\\vec n = \\vec k\\{0; 0; 1\\}$, $\\sin\\theta = \\dfrac{1}{\\sqrt3}$. This agrees with $\\tan\\theta = \\dfrac{1}{\\sqrt2}$ found in grade 10.

**Example 6.** The line $AB_1$ and the plane $BB_1D_1D$. The plane contains $\\overrightarrow{BD}\\{-1; 1; 0\\}$ and $\\overrightarrow{BB_1}\\{0; 0; 1\\}$; a vector $\\vec n\\{p; q; r\\}$ perpendicular to both satisfies $-p + q = 0$, $r = 0$, so $\\vec n\\{1; 1; 0\\}$. Then $\\sin\\theta = \\dfrac{\\lvert 1 + 0 + 0\\rvert}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac12$, $\\theta = 30^\\circ$.

**Angle between planes.** The angle between two planes equals the angle between their normal vectors (taken at most $90^\\circ$):
$$\\cos\\theta = \\frac{\\lvert\\vec n_1 \\cdot \\vec n_2\\rvert}{\\lvert\\vec n_1\\rvert \\cdot \\lvert\\vec n_2\\rvert}.$$

**Example 7.** The planes $A_1BD$ and $ABC$. In $A_1BD$ lie $\\overrightarrow{BD}\\{-1; 1; 0\\}$ and $\\overrightarrow{BA_1}\\{-1; 0; 1\\}$; $\\vec n\\{p; q; r\\}$ with $-p + q = 0$, $-p + r = 0$ gives $\\vec n\\{1; 1; 1\\}$. With $\\vec n_2\\{0; 0; 1\\}$: $\\cos\\theta = \\dfrac{1}{\\sqrt3}$, so $\\tan\\theta = \\sqrt2$, as in grade 10.

**Example 8.** The planes $AB_1C$ and $ABC$: in $AB_1C$ lie $\\overrightarrow{AC}\\{1; 1; 0\\}$ and $\\overrightarrow{AB_1}\\{1; 0; 1\\}$; $p + q = 0$, $p + r = 0$ gives $\\vec n\\{1; -1; -1\\}$. $\\cos\\theta = \\dfrac{\\lvert -1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$: the same angle, by the symmetry of the cube.

### Exercises

In exercises 4 to 7 use the unit cube placed as above.

1. $\\vec a\\{2; -1; 2\\}$, $\\vec b\\{1; 4; -3\\}$. Find $\\vec a \\cdot \\vec b$ and the cosine of the angle between them.
2. Are $\\{3; -1; 2\\}$ and $\\{2; 4; -1\\}$ perpendicular? For which $k$ is $\\{1; k; 3\\} \\perp \\{2; -1; 1\\}$?
3. Find the angle between $\\vec a\\{1; 1; 0\\}$ and $\\vec b\\{0; 1; 1\\}$.
4. Find the angle between the lines $AD_1$ and $DC_1$.
5. Find the angle between the lines $A_1C$ and $B_1D_1$.
6. Find the sine of the angle between the line $BD_1$ and the plane $ABC$.
7. Find the angle between the line $AC$ and the plane $BB_1D_1D$.
8. $\\lvert\\vec a\\rvert = 2$, $\\lvert\\vec b\\rvert = 3$, the angle between them is $120^\\circ$. Find $\\lvert\\vec a + \\vec b\\rvert$ and $\\lvert\\vec a - \\vec b\\rvert$.

### Answers

1. $2 - 4 - 6 = -8$; $\\cos\\varphi = \\dfrac{-8}{3\\sqrt{26}}$. 2. $6 - 4 - 2 = 0$, yes; $2 - k + 3 = 0$, $k = 5$. 3. $\\cos\\varphi = \\dfrac{1}{2}$, $60^\\circ$. 4. $\\{0; 1; 1\\} \\cdot \\{1; 0; 1\\} = 1$, $\\cos\\theta = \\dfrac12$, $60^\\circ$. 5. $\\{1; 1; -1\\} \\cdot \\{-1; 1; 0\\} = 0$, $90^\\circ$. 6. $\\vec a\\{-1; 1; 1\\}$, $\\vec n\\{0; 0; 1\\}$, $\\sin\\theta = \\dfrac{1}{\\sqrt3}$. 7. $\\vec a\\{1; 1; 0\\}$ is itself a normal vector of the plane (Example 6), so $\\sin\\theta = 1$, $\\theta = 90^\\circ$. 8. $\\vec a \\cdot \\vec b = -3$; $\\lvert\\vec a + \\vec b\\rvert = \\sqrt{4 - 6 + 9} = \\sqrt7$, $\\lvert\\vec a - \\vec b\\rvert = \\sqrt{4 + 6 + 9} = \\sqrt{19}$.`,
        hy: `## Սկալյար արտադրյալ

Ոչ զրոյական $\\vec a$ և $\\vec b$ **վեկտորների միջև անկյունը** մեկ կետից տեղադրելիս դրանց միջև $\\varphi$ անկյունն է ($0^\\circ \\le \\varphi \\le 180^\\circ$)։ **Սկալյար արտադրյալը**
$$\\vec a \\cdot \\vec b = \\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert \\cos\\varphi$$
թիվն է։

**Թեորեմ։** Կոորդինատներով՝ $\\vec a\\{x_1; y_1; z_1\\}$ և $\\vec b\\{x_2; y_2; z_2\\}$ վեկտորների համար
$$\\vec a \\cdot \\vec b = x_1x_2 + y_1y_2 + z_1z_2.$$

*Ապացույց։* $\\vec a$, $\\vec b$, $\\vec b - \\vec a$ վեկտորների վրա կառուցված եռանկյան համար կոսինուսների թեորեմով $\\lvert\\vec b - \\vec a\\rvert^2 = \\lvert\\vec a\\rvert^2 + \\lvert\\vec b\\rvert^2 - 2\\vec a \\cdot \\vec b$։ Երեք երկարությունները կոորդինատներով գրելով և պարզեցնելով՝ $\\vec a \\cdot \\vec b = x_1x_2 + y_1y_2 + z_1z_2$։ $\\blacksquare$

**Հատկություններ։** $\\vec a \\cdot \\vec a = \\lvert\\vec a\\rvert^2 \\ge 0$, $\\vec a \\cdot \\vec b = \\vec b \\cdot \\vec a$, $(k\\vec a) \\cdot \\vec b = k(\\vec a \\cdot \\vec b)$, $(\\vec a + \\vec b) \\cdot \\vec c = \\vec a \\cdot \\vec c + \\vec b \\cdot \\vec c$։ Ոչ զրոյական վեկտորներն **ուղղահայաց** են ճիշտ այն դեպքում, երբ $\\vec a \\cdot \\vec b = 0$։ Անկյունը գտնվում է
$$\\cos\\varphi = \\frac{\\vec a \\cdot \\vec b}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert} = \\frac{x_1x_2 + y_1y_2 + z_1z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2}\\,\\sqrt{x_2^2 + y_2^2 + z_2^2}}$$
բանաձևով։

**Օրինակ 1։** $\\vec a\\{1; 2; -2\\}$, $\\vec b\\{2; -1; 2\\}$․ $\\vec a \\cdot \\vec b = 2 - 2 - 4 = -4$, $\\lvert\\vec a\\rvert = \\lvert\\vec b\\rvert = 3$, $\\cos\\varphi = -\\dfrac49$, անկյունը բութ է։

**Օրինակ 2։** $\\vec a\\{1; -2; 3\\}$ և $\\vec b\\{4; 5; 2\\}$․ $4 - 10 + 6 = 0$, ուղղահայաց են։ $k$-ի ո՞ր արժեքի դեպքում է $\\{k; 2; -1\\} \\perp \\{3; -1; 4\\}$։ $3k - 2 - 4 = 0$, $k = 2$։

**Օրինակ 3։** $\\lvert\\vec a\\rvert = 3$, $\\lvert\\vec b\\rvert = 4$, դրանց միջև անկյունը $60^\\circ$ է։ Այդ դեպքում $\\vec a \\cdot \\vec b = 6$ և $\\lvert\\vec a + \\vec b\\rvert^2 = \\lvert\\vec a\\rvert^2 + 2\\vec a \\cdot \\vec b + \\lvert\\vec b\\rvert^2 = 9 + 12 + 16 = 37$, $\\lvert\\vec a + \\vec b\\rvert = \\sqrt{37}$, նմանապես $\\lvert\\vec a - \\vec b\\rvert = \\sqrt{9 - 12 + 16} = \\sqrt{13}$։

## Անկյուններ խորանարդում կոորդինատներով

Տեղադրենք $ABCDA_1B_1C_1D_1$ միավոր խորանարդն այնպես, որ $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$, այդ դեպքում $C(1; 1; 0)$, $B_1(1; 0; 1)$, $C_1(1; 1; 1)$, $D_1(0; 1; 1)$։

**Անկյուն ուղիղների միջև։** Ուղիղների միջև անկյունն առավելագույնը $90^\\circ$ է, ուստի $\\vec a$, $\\vec b$ ուղղորդող վեկտորների համար
$$\\cos\\theta = \\frac{\\lvert\\vec a \\cdot \\vec b\\rvert}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert}.$$

**Օրինակ 4։** $AB_1$ և $BC_1$ ուղիղները․ $\\overrightarrow{AB_1}\\{1; 0; 1\\}$, $\\overrightarrow{BC_1}\\{0; 1; 1\\}$, $\\cos\\theta = \\dfrac{1}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac12$, $\\theta = 60^\\circ$։ $AC_1$ և $BD$ ուղիղները․ $\\{1; 1; 1\\} \\cdot \\{-1; 1; 0\\} = 0$, ուստի $\\theta = 90^\\circ$։

**Անկյուն ուղղի և հարթության միջև։** Հարթությանն ուղղահայաց ոչ զրոյական վեկտորը հարթության **նորմալ վեկտորն** է՝ $\\vec n$։ Եթե ուղղի ուղղորդող վեկտորը $\\vec a$-ն է, ուղղի և հարթության միջև $\\theta$ անկյունը լրացնում է $\\vec a$-ի և $\\vec n$-ի միջև անկյունը մինչև $90^\\circ$, ուստի
$$\\sin\\theta = \\frac{\\lvert\\vec a \\cdot \\vec n\\rvert}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec n\\rvert}.$$
Երեք կետով անցնող հարթության նորմալ վեկտորը գտնվում է որպես հարթության երկու ոչ համագիծ վեկտորներին ուղղահայաց վեկտոր։

**Օրինակ 5։** $AC_1$ ուղիղը և $ABC$ հիմքը․ $\\vec a\\{1; 1; 1\\}$, $\\vec n = \\vec k\\{0; 0; 1\\}$, $\\sin\\theta = \\dfrac{1}{\\sqrt3}$։ Սա համաձայն է 10-րդ դասարանում գտած $\\operatorname{tg}\\theta = \\dfrac{1}{\\sqrt2}$-ին։

**Օրինակ 6։** $AB_1$ ուղիղը և $BB_1D_1D$ հարթությունը։ Հարթությունը պարունակում է $\\overrightarrow{BD}\\{-1; 1; 0\\}$ և $\\overrightarrow{BB_1}\\{0; 0; 1\\}$ վեկտորները, երկուսին էլ ուղղահայաց $\\vec n\\{p; q; r\\}$ վեկտորը բավարարում է $-p + q = 0$, $r = 0$, ուստի $\\vec n\\{1; 1; 0\\}$։ Այդ դեպքում $\\sin\\theta = \\dfrac{\\lvert 1 + 0 + 0\\rvert}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac12$, $\\theta = 30^\\circ$։

**Անկյուն հարթությունների միջև։** Երկու հարթությունների միջև անկյունը հավասար է դրանց նորմալ վեկտորների միջև անկյանը (վերցված առավելագույնը $90^\\circ$)․
$$\\cos\\theta = \\frac{\\lvert\\vec n_1 \\cdot \\vec n_2\\rvert}{\\lvert\\vec n_1\\rvert \\cdot \\lvert\\vec n_2\\rvert}.$$

**Օրինակ 7։** $A_1BD$ և $ABC$ հարթությունները։ $A_1BD$-ում ընկած են $\\overrightarrow{BD}\\{-1; 1; 0\\}$ և $\\overrightarrow{BA_1}\\{-1; 0; 1\\}$ վեկտորները, $-p + q = 0$, $-p + r = 0$ պայմաններով $\\vec n\\{p; q; r\\}$-ը տալիս է $\\vec n\\{1; 1; 1\\}$։ $\\vec n_2\\{0; 0; 1\\}$-ի հետ՝ $\\cos\\theta = \\dfrac{1}{\\sqrt3}$, ուստի $\\operatorname{tg}\\theta = \\sqrt2$, ինչպես 10-րդ դասարանում։

**Օրինակ 8։** $AB_1C$ և $ABC$ հարթությունները․ $AB_1C$-ում ընկած են $\\overrightarrow{AC}\\{1; 1; 0\\}$ և $\\overrightarrow{AB_1}\\{1; 0; 1\\}$, $p + q = 0$, $p + r = 0$ տալիս է $\\vec n\\{1; -1; -1\\}$։ $\\cos\\theta = \\dfrac{\\lvert -1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$․ նույն անկյունը՝ խորանարդի համաչափության շնորհիվ։

### Վարժություններ

4-7 վարժություններում օգտագործեք վերը տեղադրված միավոր խորանարդը։

1. $\\vec a\\{2; -1; 2\\}$, $\\vec b\\{1; 4; -3\\}$։ Գտեք $\\vec a \\cdot \\vec b$-ն և դրանց միջև անկյան կոսինուսը։
2. Ուղղահայա՞ց են արդյոք $\\{3; -1; 2\\}$-ը և $\\{2; 4; -1\\}$-ը։ $k$-ի ո՞ր արժեքի դեպքում է $\\{1; k; 3\\} \\perp \\{2; -1; 1\\}$։
3. Գտեք $\\vec a\\{1; 1; 0\\}$ և $\\vec b\\{0; 1; 1\\}$ վեկտորների միջև անկյունը։
4. Գտեք $AD_1$ և $DC_1$ ուղիղների միջև անկյունը։
5. Գտեք $A_1C$ և $B_1D_1$ ուղիղների միջև անկյունը։
6. Գտեք $BD_1$ ուղղի և $ABC$ հարթության միջև անկյան սինուսը։
7. Գտեք $AC$ ուղղի և $BB_1D_1D$ հարթության միջև անկյունը։
8. $\\lvert\\vec a\\rvert = 2$, $\\lvert\\vec b\\rvert = 3$, դրանց միջև անկյունը $120^\\circ$ է։ Գտեք $\\lvert\\vec a + \\vec b\\rvert$-ն և $\\lvert\\vec a - \\vec b\\rvert$-ն։

### Պատասխաններ

1. $2 - 4 - 6 = -8$, $\\cos\\varphi = \\dfrac{-8}{3\\sqrt{26}}$։ 2. $6 - 4 - 2 = 0$, այո, $2 - k + 3 = 0$, $k = 5$։ 3. $\\cos\\varphi = \\dfrac{1}{2}$, $60^\\circ$։ 4. $\\{0; 1; 1\\} \\cdot \\{1; 0; 1\\} = 1$, $\\cos\\theta = \\dfrac12$, $60^\\circ$։ 5. $\\{1; 1; -1\\} \\cdot \\{-1; 1; 0\\} = 0$, $90^\\circ$։ 6. $\\vec a\\{-1; 1; 1\\}$, $\\vec n\\{0; 0; 1\\}$, $\\sin\\theta = \\dfrac{1}{\\sqrt3}$։ 7. $\\vec a\\{1; 1; 0\\}$-ն ինքը հարթության նորմալ վեկտոր է (օրինակ 6), ուստի $\\sin\\theta = 1$, $\\theta = 90^\\circ$։ 8. $\\vec a \\cdot \\vec b = -3$, $\\lvert\\vec a + \\vec b\\rvert = \\sqrt{4 - 6 + 9} = \\sqrt7$, $\\lvert\\vec a - \\vec b\\rvert = \\sqrt{4 + 6 + 9} = \\sqrt{19}$։`,
        ru: `## Скалярное произведение

**Угол между ненулевыми векторами** $\\vec a$ и $\\vec b$ — угол $\\varphi$ ($0^\\circ \\le \\varphi \\le 180^\\circ$) между ними при откладывании от одной точки. **Скалярное произведение** — число
$$\\vec a \\cdot \\vec b = \\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert \\cos\\varphi.$$

**Теорема.** В координатах для $\\vec a\\{x_1; y_1; z_1\\}$ и $\\vec b\\{x_2; y_2; z_2\\}$
$$\\vec a \\cdot \\vec b = x_1x_2 + y_1y_2 + z_1z_2.$$

*Доказательство.* По теореме косинусов для треугольника на векторах $\\vec a$, $\\vec b$, $\\vec b - \\vec a$: $\\lvert\\vec b - \\vec a\\rvert^2 = \\lvert\\vec a\\rvert^2 + \\lvert\\vec b\\rvert^2 - 2\\vec a \\cdot \\vec b$. Записав все три длины в координатах и упростив, получаем $\\vec a \\cdot \\vec b = x_1x_2 + y_1y_2 + z_1z_2$. $\\blacksquare$

**Свойства.** $\\vec a \\cdot \\vec a = \\lvert\\vec a\\rvert^2 \\ge 0$; $\\vec a \\cdot \\vec b = \\vec b \\cdot \\vec a$; $(k\\vec a) \\cdot \\vec b = k(\\vec a \\cdot \\vec b)$; $(\\vec a + \\vec b) \\cdot \\vec c = \\vec a \\cdot \\vec c + \\vec b \\cdot \\vec c$. Ненулевые векторы **перпендикулярны** ровно тогда, когда $\\vec a \\cdot \\vec b = 0$. Угол находится по формуле
$$\\cos\\varphi = \\frac{\\vec a \\cdot \\vec b}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert} = \\frac{x_1x_2 + y_1y_2 + z_1z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2}\\,\\sqrt{x_2^2 + y_2^2 + z_2^2}}.$$

**Пример 1.** $\\vec a\\{1; 2; -2\\}$, $\\vec b\\{2; -1; 2\\}$: $\\vec a \\cdot \\vec b = 2 - 2 - 4 = -4$, $\\lvert\\vec a\\rvert = \\lvert\\vec b\\rvert = 3$, $\\cos\\varphi = -\\dfrac49$; угол тупой.

**Пример 2.** $\\vec a\\{1; -2; 3\\}$ и $\\vec b\\{4; 5; 2\\}$: $4 - 10 + 6 = 0$, перпендикулярны. При каком $k$ будет $\\{k; 2; -1\\} \\perp \\{3; -1; 4\\}$? $3k - 2 - 4 = 0$, $k = 2$.

**Пример 3.** $\\lvert\\vec a\\rvert = 3$, $\\lvert\\vec b\\rvert = 4$, угол между ними $60^\\circ$. Тогда $\\vec a \\cdot \\vec b = 6$ и $\\lvert\\vec a + \\vec b\\rvert^2 = \\lvert\\vec a\\rvert^2 + 2\\vec a \\cdot \\vec b + \\lvert\\vec b\\rvert^2 = 9 + 12 + 16 = 37$, $\\lvert\\vec a + \\vec b\\rvert = \\sqrt{37}$; аналогично $\\lvert\\vec a - \\vec b\\rvert = \\sqrt{9 - 12 + 16} = \\sqrt{13}$.

## Углы в кубе через координаты

Расположим единичный куб $ABCDA_1B_1C_1D_1$ так, что $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$; тогда $C(1; 1; 0)$, $B_1(1; 0; 1)$, $C_1(1; 1; 1)$, $D_1(0; 1; 1)$.

**Угол между прямыми.** Угол между прямыми не превосходит $90^\\circ$, поэтому для направляющих векторов $\\vec a$, $\\vec b$
$$\\cos\\theta = \\frac{\\lvert\\vec a \\cdot \\vec b\\rvert}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec b\\rvert}.$$

**Пример 4.** Прямые $AB_1$ и $BC_1$: $\\overrightarrow{AB_1}\\{1; 0; 1\\}$, $\\overrightarrow{BC_1}\\{0; 1; 1\\}$, $\\cos\\theta = \\dfrac{1}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac12$, $\\theta = 60^\\circ$. Прямые $AC_1$ и $BD$: $\\{1; 1; 1\\} \\cdot \\{-1; 1; 0\\} = 0$, поэтому $\\theta = 90^\\circ$.

**Угол между прямой и плоскостью.** Ненулевой вектор, перпендикулярный плоскости, — её **нормальный вектор** $\\vec n$. Если направляющий вектор прямой $\\vec a$, то угол $\\theta$ между прямой и плоскостью дополняет угол между $\\vec a$ и $\\vec n$ до $90^\\circ$, поэтому
$$\\sin\\theta = \\frac{\\lvert\\vec a \\cdot \\vec n\\rvert}{\\lvert\\vec a\\rvert \\cdot \\lvert\\vec n\\rvert}.$$
Нормальный вектор плоскости, проходящей через три точки, находят как вектор, перпендикулярный двум неколлинеарным векторам плоскости.

**Пример 5.** Прямая $AC_1$ и основание $ABC$: $\\vec a\\{1; 1; 1\\}$, $\\vec n = \\vec k\\{0; 0; 1\\}$, $\\sin\\theta = \\dfrac{1}{\\sqrt3}$. Это согласуется с найденным в 10 классе $\\operatorname{tg}\\theta = \\dfrac{1}{\\sqrt2}$.

**Пример 6.** Прямая $AB_1$ и плоскость $BB_1D_1D$. Плоскость содержит $\\overrightarrow{BD}\\{-1; 1; 0\\}$ и $\\overrightarrow{BB_1}\\{0; 0; 1\\}$; вектор $\\vec n\\{p; q; r\\}$, перпендикулярный обоим, удовлетворяет $-p + q = 0$, $r = 0$, поэтому $\\vec n\\{1; 1; 0\\}$. Тогда $\\sin\\theta = \\dfrac{\\lvert 1 + 0 + 0\\rvert}{\\sqrt2 \\cdot \\sqrt2} = \\dfrac12$, $\\theta = 30^\\circ$.

**Угол между плоскостями.** Угол между двумя плоскостями равен углу между их нормальными векторами (взятому не больше $90^\\circ$):
$$\\cos\\theta = \\frac{\\lvert\\vec n_1 \\cdot \\vec n_2\\rvert}{\\lvert\\vec n_1\\rvert \\cdot \\lvert\\vec n_2\\rvert}.$$

**Пример 7.** Плоскости $A_1BD$ и $ABC$. В $A_1BD$ лежат $\\overrightarrow{BD}\\{-1; 1; 0\\}$ и $\\overrightarrow{BA_1}\\{-1; 0; 1\\}$; $\\vec n\\{p; q; r\\}$ с условиями $-p + q = 0$, $-p + r = 0$ даёт $\\vec n\\{1; 1; 1\\}$. С $\\vec n_2\\{0; 0; 1\\}$: $\\cos\\theta = \\dfrac{1}{\\sqrt3}$, поэтому $\\operatorname{tg}\\theta = \\sqrt2$, как в 10 классе.

**Пример 8.** Плоскости $AB_1C$ и $ABC$: в $AB_1C$ лежат $\\overrightarrow{AC}\\{1; 1; 0\\}$ и $\\overrightarrow{AB_1}\\{1; 0; 1\\}$; $p + q = 0$, $p + r = 0$ даёт $\\vec n\\{1; -1; -1\\}$. $\\cos\\theta = \\dfrac{\\lvert -1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$: тот же угол, по симметрии куба.

### Упражнения

В упражнениях 4–7 используйте единичный куб, расположенный как выше.

1. $\\vec a\\{2; -1; 2\\}$, $\\vec b\\{1; 4; -3\\}$. Найдите $\\vec a \\cdot \\vec b$ и косинус угла между ними.
2. Перпендикулярны ли $\\{3; -1; 2\\}$ и $\\{2; 4; -1\\}$? При каком $k$ будет $\\{1; k; 3\\} \\perp \\{2; -1; 1\\}$?
3. Найдите угол между $\\vec a\\{1; 1; 0\\}$ и $\\vec b\\{0; 1; 1\\}$.
4. Найдите угол между прямыми $AD_1$ и $DC_1$.
5. Найдите угол между прямыми $A_1C$ и $B_1D_1$.
6. Найдите синус угла между прямой $BD_1$ и плоскостью $ABC$.
7. Найдите угол между прямой $AC$ и плоскостью $BB_1D_1D$.
8. $\\lvert\\vec a\\rvert = 2$, $\\lvert\\vec b\\rvert = 3$, угол между ними $120^\\circ$. Найдите $\\lvert\\vec a + \\vec b\\rvert$ и $\\lvert\\vec a - \\vec b\\rvert$.

### Ответы

1. $2 - 4 - 6 = -8$; $\\cos\\varphi = \\dfrac{-8}{3\\sqrt{26}}$. 2. $6 - 4 - 2 = 0$, да; $2 - k + 3 = 0$, $k = 5$. 3. $\\cos\\varphi = \\dfrac{1}{2}$, $60^\\circ$. 4. $\\{0; 1; 1\\} \\cdot \\{1; 0; 1\\} = 1$, $\\cos\\theta = \\dfrac12$, $60^\\circ$. 5. $\\{1; 1; -1\\} \\cdot \\{-1; 1; 0\\} = 0$, $90^\\circ$. 6. $\\vec a\\{-1; 1; 1\\}$, $\\vec n\\{0; 0; 1\\}$, $\\sin\\theta = \\dfrac{1}{\\sqrt3}$. 7. $\\vec a\\{1; 1; 0\\}$ сам является нормальным вектором плоскости (пример 6), поэтому $\\sin\\theta = 1$, $\\theta = 90^\\circ$. 8. $\\vec a \\cdot \\vec b = -3$; $\\lvert\\vec a + \\vec b\\rvert = \\sqrt{4 - 6 + 9} = \\sqrt7$, $\\lvert\\vec a - \\vec b\\rvert = \\sqrt{4 + 6 + 9} = \\sqrt{19}$.`,
      },
      [
        q(t("The scalar product a·b equals…", "a·b սկալյար արտադրյալը հավասար է…", "Скалярное произведение a·b равно…"), [t("|a|·|b|·cos φ", "|a|·|b|·cos φ", "|a|·|b|·cos φ"), t("|a|·|b|·sin φ", "|a|·|b|·sin φ", "|a|·|b|·sin φ"), t("|a| + |b|", "|a| + |b|", "|a| + |b|")], 0),
        q(t("{1; 2; 3}·{3; −2; 1} =", "{1; 2; 3}·{3; −2; 1} =", "{1; 2; 3}·{3; −2; 1} ="), [t("2", "2", "2"), t("10", "10", "10"), t("{3; −4; 3}", "{3; −4; 3}", "{3; −4; 3}")], 0),
        q(t("Non-zero vectors are perpendicular exactly when…", "Ոչ զրոյական վեկտորներն ուղղահայաց են ճիշտ այն դեպքում, երբ…", "Ненулевые векторы перпендикулярны ровно тогда, когда…"), [t("a·b = 0", "a·b = 0", "a·b = 0"), t("a·b = 1", "a·b = 1", "a·b = 1"), t("|a| = |b|", "|a| = |b|", "|a| = |b|")], 0),
        q(t("The angle between {1; 0; 0} and {1; 1; 0} is…", "{1; 0; 0} և {1; 1; 0} վեկտորների միջև անկյունը…", "Угол между {1; 0; 0} и {1; 1; 0} равен…"), [t("30°", "30°", "30°"), t("45°", "45°", "45°"), t("60°", "60°", "60°")], 1),
        q(t("a·a equals…", "a·a-ն հավասար է…", "a·a равно…"), [t("0", "0", "0"), t("|a|", "|a|", "|a|"), t("|a|²", "|a|²", "|a|²")], 2),
        q(t("The angle θ between a line with direction vector a and a plane with normal vector n satisfies…", "a ուղղորդող վեկտորով ուղղի և n նորմալ վեկտորով հարթության միջև θ անկյունը բավարարում է…", "Угол θ между прямой с направляющим вектором a и плоскостью с нормальным вектором n удовлетворяет…"), [t("cos θ = |a·n| / (|a|·|n|)", "cos θ = |a·n| / (|a|·|n|)", "cos θ = |a·n| / (|a|·|n|)"), t("sin θ = |a·n| / (|a|·|n|)", "sin θ = |a·n| / (|a|·|n|)", "sin θ = |a·n| / (|a|·|n|)"), t("tan θ = a·n", "tan θ = a·n", "tan θ = a·n")], 1),
      ],
    ),
    lesson(
      "plane-equation",
      ["Equation of a plane", "Հարթության հավասարում", "Уравнение плоскости"],
      {
        en: ["Derive the equation ax + by + cz + d = 0 of a plane from a point and a normal vector and read the normal vector off an equation", "Write the equation of a plane through three points or in intercept form", "Compute the distance from a point to a plane and the distance between parallel planes, and test planes for parallelism and perpendicularity"],
        hy: ["Արտածել հարթության ax + by + cz + d = 0 հավասարումը կետով և նորմալ վեկտորով և հավասարումից կարդալ նորմալ վեկտորը", "Գրել երեք կետով անցնող հարթության հավասարումը կամ հատվածների հավասարումը", "Հաշվել կետից հարթության հեռավորությունը և զուգահեռ հարթությունների հեռավորությունը, ստուգել հարթությունների զուգահեռությունն ու ուղղահայացությունը"],
        ru: ["Выводить уравнение плоскости ax + by + cz + d = 0 по точке и нормальному вектору и считывать нормальный вектор из уравнения", "Записывать уравнение плоскости через три точки или в отрезках", "Вычислять расстояние от точки до плоскости и между параллельными плоскостями, проверять плоскости на параллельность и перпендикулярность"],
      },
      {
        en: `## The general equation

**Theorem.** A plane through the point $M_0(x_0; y_0; z_0)$ with normal vector $\\vec n\\{a; b; c\\}$ consists exactly of the points $M(x; y; z)$ with
$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0,$$
that is, every plane has an equation of the form $ax + by + cz + d = 0$ with $\\{a; b; c\\} \\ne \\vec 0$, and conversely every such equation defines a plane with normal vector $\\{a; b; c\\}$.

*Proof.* $M$ lies in the plane exactly when $\\overrightarrow{M_0M}\\{x - x_0; y - y_0; z - z_0\\}$ is perpendicular to $\\vec n$, that is, when $\\vec n \\cdot \\overrightarrow{M_0M} = 0$. Expanding gives the equation with $d = -(ax_0 + by_0 + cz_0)$. Conversely, any equation $ax + by + cz + d = 0$ has a solution $M_0$, and rewriting it as $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$ shows it is the plane through $M_0$ perpendicular to $\\{a; b; c\\}$. $\\blacksquare$

**Special cases.** $z = 0$ is the plane $Oxy$; $x = 3$ is parallel to $Oyz$; if $c = 0$, the plane $ax + by + d = 0$ is parallel to the axis $Oz$ (its normal is perpendicular to $\\vec k$). If $d = 0$, the plane passes through the origin.

**Example 1.** The plane through $M_0(1; -2; 3)$ with normal $\\{2; -1; 4\\}$: $2(x - 1) - (y + 2) + 4(z - 3) = 0$, that is, $2x - y + 4z - 16 = 0$.

**Example 2.** A plane cutting the axes at $(p; 0; 0)$, $(0; q; 0)$, $(0; 0; r)$ has the **intercept equation** $\\dfrac xp + \\dfrac yq + \\dfrac zr = 1$. Through $(1; 0; 0)$, $(0; 2; 0)$, $(0; 0; 3)$: $x + \\dfrac y2 + \\dfrac z3 = 1$, or $6x + 3y + 2z - 6 = 0$, normal $\\{6; 3; 2\\}$.

**Example 3.** The plane through $A(1; 1; 1)$, $B(2; 0; 1)$, $C(1; 2; 3)$. The vectors $\\overrightarrow{AB}\\{1; -1; 0\\}$ and $\\overrightarrow{AC}\\{0; 1; 2\\}$ lie in it; a normal $\\vec n\\{p; q; r\\}$ satisfies $p - q = 0$ and $q + 2r = 0$, so take $\\vec n\\{2; 2; -1\\}$. The equation: $2(x - 1) + 2(y - 1) - (z - 1) = 0$, that is, $2x + 2y - z - 3 = 0$. Check: $B$: $4 - 1 - 3 = 0$; $C$: $2 + 4 - 3 - 3 = 0$.

## Distance from a point to a plane

**Theorem.** The distance from $P(x_0; y_0; z_0)$ to the plane $ax + by + cz + d = 0$ is
$$\\rho = \\frac{\\lvert ax_0 + by_0 + cz_0 + d\\rvert}{\\sqrt{a^2 + b^2 + c^2}}.$$

*Proof.* Take any point $M$ of the plane. The distance is the length of the projection of $\\overrightarrow{MP}$ onto the normal: $\\rho = \\dfrac{\\lvert\\vec n \\cdot \\overrightarrow{MP}\\rvert}{\\lvert\\vec n\\rvert}$. Now $\\vec n \\cdot \\overrightarrow{MP} = a(x_0 - x_M) + b(y_0 - y_M) + c(z_0 - z_M) = ax_0 + by_0 + cz_0 + d$, because $ax_M + by_M + cz_M = -d$. $\\blacksquare$

**Example 4.** From $P(4; 1; -2)$ to $2x + 2y - z - 3 = 0$: $\\rho = \\dfrac{\\lvert 8 + 2 + 2 - 3\\rvert}{3} = 3$.

**Example 5.** The planes $2x - y + 2z + 1 = 0$ and $2x - y + 2z - 8 = 0$ are parallel (equal normals). The point $(0; 1; 0)$ lies on the first; its distance to the second is $\\dfrac{\\lvert 0 - 1 + 0 - 8\\rvert}{3} = 3$, which is the distance between the planes.

**Example 6.** In the unit cube ($A$ at the origin, $B$, $D$, $A_1$ on the axes) the plane $A_1BD$ passes through $(0; 0; 1)$, $(1; 0; 0)$, $(0; 1; 0)$, so its equation is $x + y + z = 1$; the plane $CB_1D_1$ through $(1; 1; 0)$, $(1; 0; 1)$, $(0; 1; 1)$ is $x + y + z = 2$. They are parallel, and the distances from $A(0; 0; 0)$ to the first and from $C_1(1; 1; 1)$ to the second are both $\\dfrac{1}{\\sqrt3}$. So the two planes cut the diagonal $AC_1 = \\sqrt3$ into three equal parts.

## Mutual position of planes and lines

Planes $a_1x + b_1y + c_1z + d_1 = 0$ and $a_2x + b_2y + c_2z + d_2 = 0$ are **parallel or coincide** when their normals are collinear ($a_1 : b_1 : c_1 = a_2 : b_2 : c_2$), and **perpendicular** when $a_1a_2 + b_1b_2 + c_1c_2 = 0$. A line with direction vector $\\vec a$ is parallel to a plane (or lies in it) when $\\vec a \\cdot \\vec n = 0$.

**Example 7.** $2x - y + z = 5$ and $x + y - z = 2$: $2 - 1 - 1 = 0$, perpendicular. $x + y + z = 1$ and $z = 0$: $\\cos\\theta = \\dfrac{1}{\\sqrt3 \\cdot 1}$, the angle found in the previous lesson.

**Example 8.** The line through $A(1; 2; 3)$ with direction $\\{1; -2; 1\\}$ and the plane $3x + 2y + z = 0$: $\\vec a \\cdot \\vec n = 3 - 4 + 1 = 0$, so the line is parallel to the plane; since $3 + 4 + 3 = 10 \\ne 0$, $A$ is not on the plane. The distance from the line to the plane equals the distance from $A$: $\\dfrac{10}{\\sqrt{14}}$.

### Exercises

1. Write the equation of the plane through $M(2; -1; 0)$ with normal vector $\\{1; 3; -2\\}$.
2. Write the equation of the plane through $(2; 0; 0)$, $(0; -1; 0)$, $(0; 0; 4)$.
3. Write the equation of the plane through $A(0; 1; 2)$, $B(1; 1; 3)$, $C(2; 0; 2)$.
4. Find the distance from $(3; -1; 2)$ to the plane $2x - 2y + z + 3 = 0$.
5. Find the distance between the planes $x - 2y + 2z = 1$ and $x - 2y + 2z = 10$.
6. In the unit cube write the equation of the plane $AB_1D_1$ and find the distances from $C$ and from $C_1$ to it.
7. Are the planes $x + 2y - 3z = 4$ and $4x + y + 2z = 0$ perpendicular? Are $2x - 4y + 6z = 1$ and $x - 2y + 3z = 7$ parallel?
8. The line through $(1; 1; 1)$ with direction $\\{2; 1; -1\\}$ and the plane $x - y + z = 5$: are they parallel? Find the distance between them.

### Answers

1. $(x - 2) + 3(y + 1) - 2z = 0$, i.e. $x + 3y - 2z + 1 = 0$. 2. $\\dfrac x2 - y + \\dfrac z4 = 1$, i.e. $2x - 4y + z - 4 = 0$. 3. $\\overrightarrow{AB}\\{1; 0; 1\\}$, $\\overrightarrow{AC}\\{2; -1; 0\\}$, $\\vec n\\{1; 2; -1\\}$; $x + 2y - z = 0$. 4. $\\dfrac{\\lvert 6 + 2 + 2 + 3\\rvert}{3} = \\dfrac{13}{3}$. 5. $\\dfrac{9}{3} = 3$. 6. $\\vec n \\perp \\{1; 0; 1\\}, \\{0; 1; 1\\}$ gives $\\vec n\\{1; 1; -1\\}$, plane $x + y - z = 0$; from $C(1; 1; 0)$: $\\dfrac{2}{\\sqrt3}$, from $C_1(1; 1; 1)$: $\\dfrac{1}{\\sqrt3}$. 7. $4 + 2 - 6 = 0$, yes; yes, the coefficients are proportional and the planes do not coincide. 8. $2 - 1 - 1 = 0$, parallel; $1 - 1 + 1 = 1 \\ne 5$, so the line is not in the plane; distance $\\dfrac{\\lvert 1 - 5\\rvert}{\\sqrt3} = \\dfrac{4}{\\sqrt3}$.`,
        hy: `## Ընդհանուր հավասարումը

**Թեորեմ։** $M_0(x_0; y_0; z_0)$ կետով անցնող և $\\vec n\\{a; b; c\\}$ նորմալ վեկտորով հարթությունը բաղկացած է ճիշտ այն $M(x; y; z)$ կետերից, որոնց համար
$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0,$$
այսինքն՝ յուրաքանչյուր հարթություն ունի $ax + by + cz + d = 0$ տեսքի հավասարում, որտեղ $\\{a; b; c\\} \\ne \\vec 0$, և հակառակը՝ յուրաքանչյուր այդպիսի հավասարում որոշում է $\\{a; b; c\\}$ նորմալ վեկտորով հարթություն։

*Ապացույց։* $M$-ն ընկած է հարթության մեջ ճիշտ այն դեպքում, երբ $\\overrightarrow{M_0M}\\{x - x_0; y - y_0; z - z_0\\}$-ն ուղղահայաց է $\\vec n$-ին, այսինքն՝ երբ $\\vec n \\cdot \\overrightarrow{M_0M} = 0$։ Բացելով՝ ստանում ենք հավասարումը $d = -(ax_0 + by_0 + cz_0)$-ով։ Հակառակը, $ax + by + cz + d = 0$ ցանկացած հավասարում ունի $M_0$ լուծում, և այն $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$ տեսքով գրելը ցույց է տալիս, որ դա $M_0$-ով անցնող և $\\{a; b; c\\}$-ին ուղղահայաց հարթությունն է։ $\\blacksquare$

**Մասնավոր դեպքեր։** $z = 0$-ն $Oxy$ հարթությունն է, $x = 3$-ը զուգահեռ է $Oyz$-ին, եթե $c = 0$, ապա $ax + by + d = 0$ հարթությունը զուգահեռ է $Oz$ առանցքին (նրա նորմալն ուղղահայաց է $\\vec k$-ին)։ Եթե $d = 0$, հարթությունն անցնում է սկզբնակետով։

**Օրինակ 1։** $M_0(1; -2; 3)$-ով անցնող և $\\{2; -1; 4\\}$ նորմալով հարթությունը․ $2(x - 1) - (y + 2) + 4(z - 3) = 0$, այսինքն՝ $2x - y + 4z - 16 = 0$։

**Օրինակ 2։** Առանցքները $(p; 0; 0)$, $(0; q; 0)$, $(0; 0; r)$ կետերում հատող հարթությունն ունի $\\dfrac xp + \\dfrac yq + \\dfrac zr = 1$ **հատվածների հավասարումը**։ $(1; 0; 0)$, $(0; 2; 0)$, $(0; 0; 3)$ կետերով՝ $x + \\dfrac y2 + \\dfrac z3 = 1$ կամ $6x + 3y + 2z - 6 = 0$, նորմալը՝ $\\{6; 3; 2\\}$։

**Օրինակ 3։** $A(1; 1; 1)$, $B(2; 0; 1)$, $C(1; 2; 3)$ կետերով անցնող հարթությունը։ $\\overrightarrow{AB}\\{1; -1; 0\\}$ և $\\overrightarrow{AC}\\{0; 1; 2\\}$ վեկտորներն ընկած են նրա մեջ, $\\vec n\\{p; q; r\\}$ նորմալը բավարարում է $p - q = 0$ և $q + 2r = 0$, ուստի վերցնենք $\\vec n\\{2; 2; -1\\}$։ Հավասարումը․ $2(x - 1) + 2(y - 1) - (z - 1) = 0$, այսինքն՝ $2x + 2y - z - 3 = 0$։ Ստուգում․ $B$՝ $4 - 1 - 3 = 0$, $C$՝ $2 + 4 - 3 - 3 = 0$։

## Կետից հարթության հեռավորությունը

**Թեորեմ։** $P(x_0; y_0; z_0)$ կետից $ax + by + cz + d = 0$ հարթության հեռավորությունը
$$\\rho = \\frac{\\lvert ax_0 + by_0 + cz_0 + d\\rvert}{\\sqrt{a^2 + b^2 + c^2}}$$
է։

*Ապացույց։* Վերցնենք հարթության ցանկացած $M$ կետ։ Հեռավորությունը $\\overrightarrow{MP}$-ի՝ նորմալի վրա պրոյեկցիայի երկարությունն է․ $\\rho = \\dfrac{\\lvert\\vec n \\cdot \\overrightarrow{MP}\\rvert}{\\lvert\\vec n\\rvert}$։ Իսկ $\\vec n \\cdot \\overrightarrow{MP} = a(x_0 - x_M) + b(y_0 - y_M) + c(z_0 - z_M) = ax_0 + by_0 + cz_0 + d$, քանի որ $ax_M + by_M + cz_M = -d$։ $\\blacksquare$

**Օրինակ 4։** $P(4; 1; -2)$-ից $2x + 2y - z - 3 = 0$-ին․ $\\rho = \\dfrac{\\lvert 8 + 2 + 2 - 3\\rvert}{3} = 3$։

**Օրինակ 5։** $2x - y + 2z + 1 = 0$ և $2x - y + 2z - 8 = 0$ հարթությունները զուգահեռ են (հավասար նորմալներ)։ $(0; 1; 0)$ կետն ընկած է առաջինի վրա, նրա հեռավորությունն երկրորդից $\\dfrac{\\lvert 0 - 1 + 0 - 8\\rvert}{3} = 3$ է, որը հարթությունների հեռավորությունն է։

**Օրինակ 6։** Միավոր խորանարդում ($A$-ն սկզբնակետում, $B$, $D$, $A_1$-ն առանցքների վրա) $A_1BD$ հարթությունն անցնում է $(0; 0; 1)$, $(1; 0; 0)$, $(0; 1; 0)$ կետերով, ուստի նրա հավասարումը $x + y + z = 1$ է, $(1; 1; 0)$, $(1; 0; 1)$, $(0; 1; 1)$ կետերով $CB_1D_1$ հարթությունը՝ $x + y + z = 2$։ Դրանք զուգահեռ են, իսկ $A(0; 0; 0)$-ից առաջինի և $C_1(1; 1; 1)$-ից երկրորդի հեռավորություններն երկուսն էլ $\\dfrac{1}{\\sqrt3}$ են։ Ուրեմն երկու հարթությունները $AC_1 = \\sqrt3$ անկյունագիծը բաժանում են երեք հավասար մասի։

## Հարթությունների և ուղիղների փոխադարձ դասավորությունը

$a_1x + b_1y + c_1z + d_1 = 0$ և $a_2x + b_2y + c_2z + d_2 = 0$ հարթությունները **զուգահեռ են կամ համընկնում են**, երբ դրանց նորմալները համագիծ են ($a_1 : b_1 : c_1 = a_2 : b_2 : c_2$), և **ուղղահայաց են**, երբ $a_1a_2 + b_1b_2 + c_1c_2 = 0$։ $\\vec a$ ուղղորդող վեկտորով ուղիղը զուգահեռ է հարթությանը (կամ ընկած է նրա մեջ), երբ $\\vec a \\cdot \\vec n = 0$։

**Օրինակ 7։** $2x - y + z = 5$ և $x + y - z = 2$․ $2 - 1 - 1 = 0$, ուղղահայաց են։ $x + y + z = 1$ և $z = 0$․ $\\cos\\theta = \\dfrac{1}{\\sqrt3 \\cdot 1}$՝ նախորդ դասում գտած անկյունը։

**Օրինակ 8։** $A(1; 2; 3)$-ով անցնող $\\{1; -2; 1\\}$ ուղղությամբ ուղիղը և $3x + 2y + z = 0$ հարթությունը․ $\\vec a \\cdot \\vec n = 3 - 4 + 1 = 0$, ուստի ուղիղը զուգահեռ է հարթությանը, քանի որ $3 + 4 + 3 = 10 \\ne 0$, $A$-ն հարթության վրա չէ։ Ուղղից հարթության հեռավորությունը հավասար է $A$-ից հեռավորությանը․ $\\dfrac{10}{\\sqrt{14}}$։

### Վարժություններ

1. Գրեք $M(2; -1; 0)$-ով անցնող և $\\{1; 3; -2\\}$ նորմալ վեկտորով հարթության հավասարումը։
2. Գրեք $(2; 0; 0)$, $(0; -1; 0)$, $(0; 0; 4)$ կետերով անցնող հարթության հավասարումը։
3. Գրեք $A(0; 1; 2)$, $B(1; 1; 3)$, $C(2; 0; 2)$ կետերով անցնող հարթության հավասարումը։
4. Գտեք $(3; -1; 2)$ կետից $2x - 2y + z + 3 = 0$ հարթության հեռավորությունը։
5. Գտեք $x - 2y + 2z = 1$ և $x - 2y + 2z = 10$ հարթությունների հեռավորությունը։
6. Միավոր խորանարդում գրեք $AB_1D_1$ հարթության հավասարումը և գտեք $C$-ից և $C_1$-ից նրա հեռավորությունները։
7. Ուղղահայա՞ց են արդյոք $x + 2y - 3z = 4$ և $4x + y + 2z = 0$ հարթությունները։ Զուգահե՞ռ են արդյոք $2x - 4y + 6z = 1$-ը և $x - 2y + 3z = 7$-ը։
8. $(1; 1; 1)$-ով անցնող $\\{2; 1; -1\\}$ ուղղությամբ ուղիղը և $x - y + z = 5$ հարթությունը․ զուգահե՞ռ են արդյոք։ Գտեք դրանց հեռավորությունը։

### Պատասխաններ

1. $(x - 2) + 3(y + 1) - 2z = 0$, այսինքն՝ $x + 3y - 2z + 1 = 0$։ 2. $\\dfrac x2 - y + \\dfrac z4 = 1$, այսինքն՝ $2x - 4y + z - 4 = 0$։ 3. $\\overrightarrow{AB}\\{1; 0; 1\\}$, $\\overrightarrow{AC}\\{2; -1; 0\\}$, $\\vec n\\{1; 2; -1\\}$, $x + 2y - z = 0$։ 4. $\\dfrac{\\lvert 6 + 2 + 2 + 3\\rvert}{3} = \\dfrac{13}{3}$։ 5. $\\dfrac{9}{3} = 3$։ 6. $\\vec n \\perp \\{1; 0; 1\\}, \\{0; 1; 1\\}$-ից $\\vec n\\{1; 1; -1\\}$, հարթությունը՝ $x + y - z = 0$, $C(1; 1; 0)$-ից՝ $\\dfrac{2}{\\sqrt3}$, $C_1(1; 1; 1)$-ից՝ $\\dfrac{1}{\\sqrt3}$։ 7. $4 + 2 - 6 = 0$, այո, այո, գործակիցները համեմատական են, և հարթությունները չեն համընկնում։ 8. $2 - 1 - 1 = 0$, զուգահեռ են, $1 - 1 + 1 = 1 \\ne 5$, ուստի ուղիղը հարթության մեջ չէ, հեռավորությունը՝ $\\dfrac{\\lvert 1 - 5\\rvert}{\\sqrt3} = \\dfrac{4}{\\sqrt3}$։`,
        ru: `## Общее уравнение

**Теорема.** Плоскость, проходящая через точку $M_0(x_0; y_0; z_0)$ с нормальным вектором $\\vec n\\{a; b; c\\}$, состоит ровно из точек $M(x; y; z)$, для которых
$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0,$$
то есть каждая плоскость имеет уравнение вида $ax + by + cz + d = 0$, где $\\{a; b; c\\} \\ne \\vec 0$, и обратно, каждое такое уравнение задаёт плоскость с нормальным вектором $\\{a; b; c\\}$.

*Доказательство.* $M$ лежит в плоскости ровно тогда, когда $\\overrightarrow{M_0M}\\{x - x_0; y - y_0; z - z_0\\}$ перпендикулярен $\\vec n$, то есть когда $\\vec n \\cdot \\overrightarrow{M_0M} = 0$. Раскрывая скобки, получаем уравнение с $d = -(ax_0 + by_0 + cz_0)$. Обратно, любое уравнение $ax + by + cz + d = 0$ имеет решение $M_0$, и запись его в виде $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$ показывает, что это плоскость через $M_0$, перпендикулярная $\\{a; b; c\\}$. $\\blacksquare$

**Частные случаи.** $z = 0$ — плоскость $Oxy$; $x = 3$ параллельна $Oyz$; если $c = 0$, плоскость $ax + by + d = 0$ параллельна оси $Oz$ (её нормаль перпендикулярна $\\vec k$). Если $d = 0$, плоскость проходит через начало координат.

**Пример 1.** Плоскость через $M_0(1; -2; 3)$ с нормалью $\\{2; -1; 4\\}$: $2(x - 1) - (y + 2) + 4(z - 3) = 0$, то есть $2x - y + 4z - 16 = 0$.

**Пример 2.** Плоскость, пересекающая оси в точках $(p; 0; 0)$, $(0; q; 0)$, $(0; 0; r)$, имеет **уравнение в отрезках** $\\dfrac xp + \\dfrac yq + \\dfrac zr = 1$. Через $(1; 0; 0)$, $(0; 2; 0)$, $(0; 0; 3)$: $x + \\dfrac y2 + \\dfrac z3 = 1$, или $6x + 3y + 2z - 6 = 0$, нормаль $\\{6; 3; 2\\}$.

**Пример 3.** Плоскость через $A(1; 1; 1)$, $B(2; 0; 1)$, $C(1; 2; 3)$. Векторы $\\overrightarrow{AB}\\{1; -1; 0\\}$ и $\\overrightarrow{AC}\\{0; 1; 2\\}$ лежат в ней; нормаль $\\vec n\\{p; q; r\\}$ удовлетворяет $p - q = 0$ и $q + 2r = 0$, поэтому возьмём $\\vec n\\{2; 2; -1\\}$. Уравнение: $2(x - 1) + 2(y - 1) - (z - 1) = 0$, то есть $2x + 2y - z - 3 = 0$. Проверка: $B$: $4 - 1 - 3 = 0$; $C$: $2 + 4 - 3 - 3 = 0$.

## Расстояние от точки до плоскости

**Теорема.** Расстояние от $P(x_0; y_0; z_0)$ до плоскости $ax + by + cz + d = 0$ равно
$$\\rho = \\frac{\\lvert ax_0 + by_0 + cz_0 + d\\rvert}{\\sqrt{a^2 + b^2 + c^2}}.$$

*Доказательство.* Возьмём любую точку $M$ плоскости. Расстояние — длина проекции $\\overrightarrow{MP}$ на нормаль: $\\rho = \\dfrac{\\lvert\\vec n \\cdot \\overrightarrow{MP}\\rvert}{\\lvert\\vec n\\rvert}$. При этом $\\vec n \\cdot \\overrightarrow{MP} = a(x_0 - x_M) + b(y_0 - y_M) + c(z_0 - z_M) = ax_0 + by_0 + cz_0 + d$, так как $ax_M + by_M + cz_M = -d$. $\\blacksquare$

**Пример 4.** От $P(4; 1; -2)$ до $2x + 2y - z - 3 = 0$: $\\rho = \\dfrac{\\lvert 8 + 2 + 2 - 3\\rvert}{3} = 3$.

**Пример 5.** Плоскости $2x - y + 2z + 1 = 0$ и $2x - y + 2z - 8 = 0$ параллельны (равные нормали). Точка $(0; 1; 0)$ лежит на первой; её расстояние до второй $\\dfrac{\\lvert 0 - 1 + 0 - 8\\rvert}{3} = 3$ — это расстояние между плоскостями.

**Пример 6.** В единичном кубе ($A$ в начале координат, $B$, $D$, $A_1$ на осях) плоскость $A_1BD$ проходит через $(0; 0; 1)$, $(1; 0; 0)$, $(0; 1; 0)$, поэтому её уравнение $x + y + z = 1$; плоскость $CB_1D_1$ через $(1; 1; 0)$, $(1; 0; 1)$, $(0; 1; 1)$ — это $x + y + z = 2$. Они параллельны, а расстояния от $A(0; 0; 0)$ до первой и от $C_1(1; 1; 1)$ до второй равны $\\dfrac{1}{\\sqrt3}$. Значит, две плоскости делят диагональ $AC_1 = \\sqrt3$ на три равные части.

## Взаимное расположение плоскостей и прямых

Плоскости $a_1x + b_1y + c_1z + d_1 = 0$ и $a_2x + b_2y + c_2z + d_2 = 0$ **параллельны или совпадают**, когда их нормали коллинеарны ($a_1 : b_1 : c_1 = a_2 : b_2 : c_2$), и **перпендикулярны**, когда $a_1a_2 + b_1b_2 + c_1c_2 = 0$. Прямая с направляющим вектором $\\vec a$ параллельна плоскости (или лежит в ней), когда $\\vec a \\cdot \\vec n = 0$.

**Пример 7.** $2x - y + z = 5$ и $x + y - z = 2$: $2 - 1 - 1 = 0$, перпендикулярны. $x + y + z = 1$ и $z = 0$: $\\cos\\theta = \\dfrac{1}{\\sqrt3 \\cdot 1}$ — угол, найденный в предыдущем уроке.

**Пример 8.** Прямая через $A(1; 2; 3)$ с направлением $\\{1; -2; 1\\}$ и плоскость $3x + 2y + z = 0$: $\\vec a \\cdot \\vec n = 3 - 4 + 1 = 0$, поэтому прямая параллельна плоскости; так как $3 + 4 + 3 = 10 \\ne 0$, $A$ не лежит в плоскости. Расстояние от прямой до плоскости равно расстоянию от $A$: $\\dfrac{10}{\\sqrt{14}}$.

### Упражнения

1. Напишите уравнение плоскости через $M(2; -1; 0)$ с нормальным вектором $\\{1; 3; -2\\}$.
2. Напишите уравнение плоскости через $(2; 0; 0)$, $(0; -1; 0)$, $(0; 0; 4)$.
3. Напишите уравнение плоскости через $A(0; 1; 2)$, $B(1; 1; 3)$, $C(2; 0; 2)$.
4. Найдите расстояние от $(3; -1; 2)$ до плоскости $2x - 2y + z + 3 = 0$.
5. Найдите расстояние между плоскостями $x - 2y + 2z = 1$ и $x - 2y + 2z = 10$.
6. В единичном кубе напишите уравнение плоскости $AB_1D_1$ и найдите расстояния от $C$ и от $C_1$ до неё.
7. Перпендикулярны ли плоскости $x + 2y - 3z = 4$ и $4x + y + 2z = 0$? Параллельны ли $2x - 4y + 6z = 1$ и $x - 2y + 3z = 7$?
8. Прямая через $(1; 1; 1)$ с направлением $\\{2; 1; -1\\}$ и плоскость $x - y + z = 5$: параллельны ли они? Найдите расстояние между ними.

### Ответы

1. $(x - 2) + 3(y + 1) - 2z = 0$, то есть $x + 3y - 2z + 1 = 0$. 2. $\\dfrac x2 - y + \\dfrac z4 = 1$, то есть $2x - 4y + z - 4 = 0$. 3. $\\overrightarrow{AB}\\{1; 0; 1\\}$, $\\overrightarrow{AC}\\{2; -1; 0\\}$, $\\vec n\\{1; 2; -1\\}$; $x + 2y - z = 0$. 4. $\\dfrac{\\lvert 6 + 2 + 2 + 3\\rvert}{3} = \\dfrac{13}{3}$. 5. $\\dfrac{9}{3} = 3$. 6. Из $\\vec n \\perp \\{1; 0; 1\\}, \\{0; 1; 1\\}$ получаем $\\vec n\\{1; 1; -1\\}$, плоскость $x + y - z = 0$; от $C(1; 1; 0)$: $\\dfrac{2}{\\sqrt3}$, от $C_1(1; 1; 1)$: $\\dfrac{1}{\\sqrt3}$. 7. $4 + 2 - 6 = 0$, да; да, коэффициенты пропорциональны, а плоскости не совпадают. 8. $2 - 1 - 1 = 0$, параллельны; $1 - 1 + 1 = 1 \\ne 5$, поэтому прямая не лежит в плоскости; расстояние $\\dfrac{\\lvert 1 - 5\\rvert}{\\sqrt3} = \\dfrac{4}{\\sqrt3}$.`,
      },
      [
        q(t("A normal vector of the plane 2x − 3y + z − 7 = 0 is…", "2x − 3y + z − 7 = 0 հարթության նորմալ վեկտորը…", "Нормальный вектор плоскости 2x − 3y + z − 7 = 0 —"), [t("{2; −3; 1}", "{2; −3; 1}", "{2; −3; 1}"), t("{2; −3; −7}", "{2; −3; −7}", "{2; −3; −7}"), t("{1; 1; 1}", "{1; 1; 1}", "{1; 1; 1}")], 0),
        q(t("The equation z = 0 defines…", "z = 0 հավասարումը որոշում է…", "Уравнение z = 0 задаёт…"), [t("the axis Oz", "Oz առանցքը", "ось Oz"), t("the plane Oxy", "Oxy հարթությունը", "плоскость Oxy"), t("the plane Oxz", "Oxz հարթությունը", "плоскость Oxz")], 1),
        q(t("The distance from the origin to the plane x + 2y + 2z − 6 = 0 is…", "Սկզբնակետից x + 2y + 2z − 6 = 0 հարթության հեռավորությունը…", "Расстояние от начала координат до плоскости x + 2y + 2z − 6 = 0 равно…"), [t("6", "6", "6"), t("2", "2", "2"), t("3", "3", "3")], 1),
        q(t("The planes x + y + z = 1 and 2x + 2y + 2z = 5 are…", "x + y + z = 1 և 2x + 2y + 2z = 5 հարթությունները…", "Плоскости x + y + z = 1 и 2x + 2y + 2z = 5…"), [t("parallel", "զուգահեռ են", "параллельны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("the same plane", "նույն հարթությունն են", "одна и та же плоскость")], 0),
        q(t("The planes x − y = 0 and x + y = 0 are…", "x − y = 0 և x + y = 0 հարթությունները…", "Плоскости x − y = 0 и x + y = 0…"), [t("parallel", "զուգահեռ են", "параллельны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("the same plane", "նույն հարթությունն են", "одна и та же плоскость")], 1),
        q(t("The plane through (1; 0; 0), (0; 1; 0), (0; 0; 1) has equation…", "(1; 0; 0), (0; 1; 0), (0; 0; 1) կետերով անցնող հարթության հավասարումը…", "Плоскость через (1; 0; 0), (0; 1; 0), (0; 0; 1) имеет уравнение…"), [t("x + y + z = 1", "x + y + z = 1", "x + y + z = 1"), t("x + y + z = 0", "x + y + z = 0", "x + y + z = 0"), t("xyz = 1", "xyz = 1", "xyz = 1")], 0),
      ],
    ),
    lesson(
      "space-motions",
      ["Motions in space", "Շարժումներ տարածության մեջ", "Движения в пространстве"],
      {
        en: ["Define a motion of space and recognise central, axial and mirror symmetry, parallel translation and rotation about an axis", "Write the coordinate formulas of the basic motions and prove with them that these maps preserve distances", "Find images of points and planes under motions and describe the symmetries of a cube and other solids"],
        hy: ["Սահմանել տարածության շարժումը և ճանաչել կենտրոնական, առանցքային և հայելային համաչափությունները, զուգահեռ տեղափոխությունը և առանցքի շուրջ պտույտը", "Գրել հիմնական շարժումների կոորդինատային բանաձևերը և դրանցով ապացուցել, որ այդ արտապատկերումները պահպանում են հեռավորությունները", "Գտնել կետերի և հարթությունների պատկերները շարժումների դեպքում և նկարագրել խորանարդի և այլ մարմինների համաչափությունները"],
        ru: ["Определять движение пространства и распознавать центральную, осевую и зеркальную симметрии, параллельный перенос и поворот вокруг оси", "Записывать координатные формулы основных движений и доказывать с их помощью, что эти отображения сохраняют расстояния", "Находить образы точек и плоскостей при движениях и описывать симметрии куба и других тел"],
      },
      {
        en: `## What a motion is

A **motion** of space is a map of space onto itself that preserves distances: if $A \\mapsto A'$ and $B \\mapsto B'$, then $A'B' = AB$.

**Theorem.** A motion maps a segment to an equal segment, a line to a line, a plane to a plane, and preserves angles between lines and between planes.

*Proof for a segment.* A point $M$ lies on the segment $AB$ exactly when $AM + MB = AB$. Distances are preserved, so $A'M' + M'B' = A'B'$, and $M'$ lies on $A'B'$; every point of $A'B'$ is an image for the same reason applied to the inverse map. Lines and planes are unions of segments through their points, and angles are determined by the sides of triangles, which are preserved. $\\blacksquare$

The composition of two motions is a motion, and the inverse of a motion is a motion.

## The basic motions in coordinates

| Motion | Image of $(x; y; z)$ |
|---|---|
| Central symmetry about $O$ | $(-x; -y; -z)$ |
| Central symmetry about $Q(x_0; y_0; z_0)$ | $(2x_0 - x; 2y_0 - y; 2z_0 - z)$ |
| Mirror symmetry in the plane $Oxy$ | $(x; y; -z)$ |
| Axial symmetry about the axis $Oz$ | $(-x; -y; z)$ |
| Translation by $\\vec p\\{a; b; c\\}$ | $(x + a; y + b; z + c)$ |
| Rotation about $Oz$ by $90^\\circ$ | $(-y; x; z)$ |

**Central symmetry** about $Q$ sends $M$ to the point $M'$ for which $Q$ is the midpoint of $MM'$; the formula follows from the midpoint formula. **Mirror symmetry** in a plane sends $M$ to $M'$ with the plane as the perpendicular bisector of $MM'$. **Axial symmetry** about a line sends $M$ to $M'$ with the line as the perpendicular bisector of $MM'$ in the plane through $M$ perpendicular to the line; about $Oz$ it keeps $z$ and changes the signs of $x$, $y$. A **translation** by $\\vec p$ sends $M$ to $M'$ with $\\overrightarrow{MM'} = \\vec p$. A **rotation** about an axis by an angle $\\alpha$ turns every plane perpendicular to the axis by $\\alpha$ about its point on the axis.

**Example 1.** Central symmetry about $Q(1; 2; 3)$ sends $A(4; 0; -1)$ to $(2 - 4; 4 - 0; 6 + 1) = (-2; 4; 7)$. Check: the midpoint of $A$ and its image is $(1; 2; 3)$.

**Example 2.** Central symmetry about the origin is a motion. For $A(x_1; y_1; z_1)$, $B(x_2; y_2; z_2)$ the images are $A'(-x_1; -y_1; -z_1)$, $B'(-x_2; -y_2; -z_2)$, and
$$A'B'^2 = (-x_2 + x_1)^2 + (-y_2 + y_1)^2 + (-z_2 + z_1)^2 = AB^2.$$
The same computation works for mirror symmetry, since $(-z_2 + z_1)^2 = (z_2 - z_1)^2$, and for translation, since the differences of coordinates do not change. $\\blacksquare$

**Example 3.** The images of $M(3; -5; 2)$: in the plane $Oxz$ (change the sign of $y$) $(3; 5; 2)$; about the axis $Oy$ (keep $y$) $(-3; -5; -2)$; about the origin $(-3; 5; -2)$.

**Example 4.** Compose the symmetries in the planes $Oxy$ and $Oxz$: $(x; y; z) \\mapsto (x; y; -z) \\mapsto (x; -y; -z)$. The result is the axial symmetry about $Ox$: two mirror symmetries in perpendicular planes compose to the axial symmetry about their common line.

**Example 5.** The translation by $\\vec p\\{2; -1; 3\\}$ sends $A(1; 1; 1)$ to $(3; 0; 4)$. The image of the plane $x + y + z = 1$: a point $(x'; y'; z')$ of the image comes from $(x' - 2; y' + 1; z' - 3)$ on the plane, so $(x' - 2) + (y' + 1) + (z' - 3) = 1$, that is, $x + y + z = 5$: a parallel plane.

**Example 6.** The image of the plane $2x - y + z = 4$ under central symmetry about the origin is obtained by substituting $(-x; -y; -z)$: $-2x + y - z = 4$, i.e. $2x - y + z = -4$, a parallel plane at the same distance from the origin.

**Example 7.** The rotation about $Oz$ by $90^\\circ$, $(x; y; z) \\mapsto (-y; x; z)$, is a motion: for two points the differences of coordinates are permuted and one changes sign, so the sum of their squares is unchanged. It sends $\\vec i$ to $\\vec j$ and $\\vec j$ to $-\\vec i$.

## Symmetry of solids

A figure has a **centre of symmetry** (an **axis**, a **plane of symmetry**) if the corresponding symmetry maps it onto itself.

**Example 8.** The cube $ABCDA_1B_1C_1D_1$ with centre $O$: the central symmetry about $O$ swaps opposite vertices ($A \\leftrightarrow C_1$ and so on), so $O$ is the centre of symmetry. The cube has $9$ planes of symmetry: $3$ parallel to pairs of faces through the centre, and $6$ passing through pairs of opposite edges (such as $AA_1C_1C$). Its axes of symmetry: $3$ through the centres of opposite faces, $6$ through the midpoints of opposite edges, and the $4$ diagonals (rotations by $120^\\circ$). A regular tetrahedron has no centre of symmetry but $6$ planes of symmetry, each through an edge and the midpoint of the opposite edge.

### Exercises

1. Find the image of $(3; 3; 5)$ under the central symmetry about $Q(-1; 2; 0)$.
2. Find the images of $M(2; -3; 4)$ under the symmetries in the plane $Oxy$, in the plane $Oyz$, about the axis $Ox$ and about the origin.
3. Where does the translation by $\\{-1; 4; 2\\}$ send $A(0; 1; 1)$? Which translation sends $(2; 2; 2)$ to $(5; 0; 3)$?
4. Find the image of the plane $x - 2y + 2z = 3$ under the translation by $\\{1; 1; 1\\}$.
5. Find the image of the plane $3x + y - z = 2$ under the symmetry in the plane $Oxy$.
6. Prove that the symmetry in the plane $Oxy$ is a motion.
7. Which motion is the composition of the symmetry in $Oxy$ followed by the symmetry in $Oyz$?
8. How many planes of symmetry have: a rectangular parallelepiped with three different edges; a regular quadrilateral pyramid; a cube?

### Answers

1. $(-2 - 3; 4 - 3; 0 - 5) = (-5; 1; -5)$. 2. $(2; -3; -4)$, $(-2; -3; 4)$, $(2; 3; -4)$, $(-2; 3; -4)$. 3. $(-1; 5; 3)$; by $\\{3; -2; 1\\}$. 4. $(x - 1) - 2(y - 1) + 2(z - 1) = 3$, i.e. $x - 2y + 2z = 4$. 5. Substitute $-z$ for $z$: $3x + y + z = 2$. 6. $(x; y; z) \\mapsto (x; y; -z)$; the differences of $x$ and $y$ are unchanged and $(-z_2 + z_1)^2 = (z_2 - z_1)^2$, so $A'B' = AB$. 7. $(x; y; z) \\mapsto (x; y; -z) \\mapsto (-x; y; -z)$: the axial symmetry about $Oy$. 8. $3$; $4$ (two through opposite lateral edges, two through the apothems of opposite faces); $9$.`,
        hy: `## Ի՞նչ է շարժումը

Տարածության **շարժումը** տարածության արտապատկերումն է ինքն իր վրա, որը պահպանում է հեռավորությունները․ եթե $A \\mapsto A'$ և $B \\mapsto B'$, ապա $A'B' = AB$։

**Թեորեմ։** Շարժումը հատվածն արտապատկերում է հավասար հատվածի, ուղիղը՝ ուղղի, հարթությունը՝ հարթության և պահպանում է ուղիղների միջև և հարթությունների միջև անկյունները։

*Ապացույցը հատվածի համար։* $M$ կետն ընկած է $AB$ հատվածի վրա ճիշտ այն դեպքում, երբ $AM + MB = AB$։ Հեռավորությունները պահպանվում են, ուստի $A'M' + M'B' = A'B'$, և $M'$-ն ընկած է $A'B'$-ի վրա, $A'B'$-ի յուրաքանչյուր կետ պատկեր է նույն պատճառաբանությամբ՝ կիրառված հակադարձ արտապատկերման համար։ Ուղիղները և հարթությունները դրանց կետերով անցնող հատվածների միավորումներ են, իսկ անկյունները որոշվում են եռանկյունների կողմերով, որոնք պահպանվում են։ $\\blacksquare$

Երկու շարժումների համադրությունը շարժում է, շարժման հակադարձը շարժում է։

## Հիմնական շարժումները կոորդինատներով

| Շարժում | $(x; y; z)$-ի պատկերը |
|---|---|
| Կենտրոնական համաչափություն $O$-ի նկատմամբ | $(-x; -y; -z)$ |
| Կենտրոնական համաչափություն $Q(x_0; y_0; z_0)$-ի նկատմամբ | $(2x_0 - x; 2y_0 - y; 2z_0 - z)$ |
| Հայելային համաչափություն $Oxy$ հարթության նկատմամբ | $(x; y; -z)$ |
| Առանցքային համաչափություն $Oz$ առանցքի նկատմամբ | $(-x; -y; z)$ |
| Զուգահեռ տեղափոխություն $\\vec p\\{a; b; c\\}$-ով | $(x + a; y + b; z + c)$ |
| Պտույտ $Oz$-ի շուրջ $90^\\circ$-ով | $(-y; x; z)$ |

$Q$-ի նկատմամբ **կենտրոնական համաչափությունը** $M$-ն արտապատկերում է այն $M'$ կետին, որի համար $Q$-ն $MM'$-ի միջնակետն է, բանաձևը հետևում է միջնակետի բանաձևից։ Հարթության նկատմամբ **հայելային համաչափությունը** $M$-ն արտապատկերում է $M'$-ի, որտեղ հարթությունը $MM'$-ի միջնուղղահայաց հարթությունն է։ Ուղղի նկատմամբ **առանցքային համաչափությունը** $M$-ն արտապատկերում է $M'$-ի, որտեղ ուղիղը $MM'$-ի միջնուղղահայացն է $M$-ով անցնող և ուղղին ուղղահայաց հարթության մեջ, $Oz$-ի նկատմամբ այն պահպանում է $z$-ը և փոխում է $x$-ի, $y$-ի նշանները։ $\\vec p$-ով **զուգահեռ տեղափոխությունը** $M$-ն արտապատկերում է $M'$-ի, որտեղ $\\overrightarrow{MM'} = \\vec p$։ Առանցքի շուրջ $\\alpha$ անկյունով **պտույտը** առանցքին ուղղահայաց յուրաքանչյուր հարթություն պտտում է $\\alpha$-ով առանցքի հետ նրա հատման կետի շուրջ։

**Օրինակ 1։** $Q(1; 2; 3)$-ի նկատմամբ կենտրոնական համաչափությունը $A(4; 0; -1)$-ն արտապատկերում է $(2 - 4; 4 - 0; 6 + 1) = (-2; 4; 7)$-ի։ Ստուգում․ $A$-ի և նրա պատկերի միջնակետը $(1; 2; 3)$ է։

**Օրինակ 2։** Սկզբնակետի նկատմամբ կենտրոնական համաչափությունը շարժում է։ $A(x_1; y_1; z_1)$, $B(x_2; y_2; z_2)$ կետերի պատկերները $A'(-x_1; -y_1; -z_1)$, $B'(-x_2; -y_2; -z_2)$ են, և
$$A'B'^2 = (-x_2 + x_1)^2 + (-y_2 + y_1)^2 + (-z_2 + z_1)^2 = AB^2.$$
Նույն հաշվարկն աշխատում է հայելային համաչափության համար, քանի որ $(-z_2 + z_1)^2 = (z_2 - z_1)^2$, և զուգահեռ տեղափոխության համար, քանի որ կոորդինատների տարբերությունները չեն փոխվում։ $\\blacksquare$

**Օրինակ 3։** $M(3; -5; 2)$-ի պատկերները․ $Oxz$ հարթության նկատմամբ ($y$-ի նշանը փոխվում է) $(3; 5; 2)$, $Oy$ առանցքի նկատմամբ ($y$-ը պահպանվում է) $(-3; -5; -2)$, սկզբնակետի նկատմամբ $(-3; 5; -2)$։

**Օրինակ 4։** Համադրենք $Oxy$ և $Oxz$ հարթությունների նկատմամբ համաչափությունները․ $(x; y; z) \\mapsto (x; y; -z) \\mapsto (x; -y; -z)$։ Արդյունքը $Ox$-ի նկատմամբ առանցքային համաչափությունն է․ ուղղահայաց հարթությունների նկատմամբ երկու հայելային համաչափությունների համադրությունը դրանց ընդհանուր ուղղի նկատմամբ առանցքային համաչափությունն է։

**Օրինակ 5։** $\\vec p\\{2; -1; 3\\}$-ով տեղափոխությունը $A(1; 1; 1)$-ն արտապատկերում է $(3; 0; 4)$-ի։ $x + y + z = 1$ հարթության պատկերը․ պատկերի $(x'; y'; z')$ կետը ստացվում է հարթության $(x' - 2; y' + 1; z' - 3)$ կետից, ուստի $(x' - 2) + (y' + 1) + (z' - 3) = 1$, այսինքն՝ $x + y + z = 5$․ զուգահեռ հարթություն։

**Օրինակ 6։** $2x - y + z = 4$ հարթության պատկերը սկզբնակետի նկատմամբ կենտրոնական համաչափության դեպքում ստացվում է $(-x; -y; -z)$ տեղադրելով․ $-2x + y - z = 4$, այսինքն՝ $2x - y + z = -4$՝ սկզբնակետից նույն հեռավորության վրա գտնվող զուգահեռ հարթություն։

**Օրինակ 7։** $Oz$-ի շուրջ $90^\\circ$-ով պտույտը՝ $(x; y; z) \\mapsto (-y; x; z)$, շարժում է․ երկու կետերի համար կոորդինատների տարբերությունները տեղափոխվում են, և մեկը նշան է փոխում, ուստի դրանց քառակուսիների գումարը չի փոխվում։ Այն $\\vec i$-ն արտապատկերում է $\\vec j$-ի, իսկ $\\vec j$-ն՝ $-\\vec i$-ի։

## Մարմինների համաչափությունը

Պատկերն ունի **համաչափության կենտրոն** (**առանցք**, **համաչափության հարթություն**), եթե համապատասխան համաչափությունն այն արտապատկերում է ինքն իր վրա։

**Օրինակ 8։** $O$ կենտրոնով $ABCDA_1B_1C_1D_1$ խորանարդը․ $O$-ի նկատմամբ կենտրոնական համաչափությունը փոխատեղում է հանդիպակաց գագաթները ($A \\leftrightarrow C_1$ և այլն), ուստի $O$-ն համաչափության կենտրոն է։ Խորանարդն ունի $9$ համաչափության հարթություն․ $3$-ը՝ նիստերի զույգերին զուգահեռ կենտրոնով անցնող, և $6$-ը՝ հանդիպակաց կողերի զույգերով անցնող (օրինակ՝ $AA_1C_1C$)։ Նրա համաչափության առանցքները․ $3$-ը՝ հանդիպակաց նիստերի կենտրոններով, $6$-ը՝ հանդիպակաց կողերի միջնակետերով, և $4$ անկյունագծերը ($120^\\circ$-ով պտույտներ)։ Կանոնավոր քառանիստը համաչափության կենտրոն չունի, բայց ունի $6$ համաչափության հարթություն՝ յուրաքանչյուրը կողով և հանդիպակաց կողի միջնակետով։

### Վարժություններ

1. Գտեք $(3; 3; 5)$-ի պատկերը $Q(-1; 2; 0)$-ի նկատմամբ կենտրոնական համաչափության դեպքում։
2. Գտեք $M(2; -3; 4)$-ի պատկերները $Oxy$ հարթության, $Oyz$ հարթության, $Ox$ առանցքի և սկզբնակետի նկատմամբ համաչափությունների դեպքում։
3. Ո՞ւր է $\\{-1; 4; 2\\}$-ով տեղափոխությունն արտապատկերում $A(0; 1; 1)$-ը։ Ո՞ր տեղափոխությունն է $(2; 2; 2)$-ն արտապատկերում $(5; 0; 3)$-ի։
4. Գտեք $x - 2y + 2z = 3$ հարթության պատկերը $\\{1; 1; 1\\}$-ով տեղափոխության դեպքում։
5. Գտեք $3x + y - z = 2$ հարթության պատկերը $Oxy$ հարթության նկատմամբ համաչափության դեպքում։
6. Ապացուցեք, որ $Oxy$ հարթության նկատմամբ համաչափությունը շարժում է։
7. Ո՞ր շարժումն է $Oxy$-ի նկատմամբ, ապա $Oyz$-ի նկատմամբ համաչափությունների համադրությունը։
8. Քանի՞ համաչափության հարթություն ունեն՝ երեք տարբեր կողերով ուղղանկյունանիստը, կանոնավոր քառանկյուն բուրգը, խորանարդը։

### Պատասխաններ

1. $(-2 - 3; 4 - 3; 0 - 5) = (-5; 1; -5)$։ 2. $(2; -3; -4)$, $(-2; -3; 4)$, $(2; 3; -4)$, $(-2; 3; -4)$։ 3. $(-1; 5; 3)$, $\\{3; -2; 1\\}$-ով։ 4. $(x - 1) - 2(y - 1) + 2(z - 1) = 3$, այսինքն՝ $x - 2y + 2z = 4$։ 5. $z$-ի փոխարեն տեղադրենք $-z$․ $3x + y + z = 2$։ 6. $(x; y; z) \\mapsto (x; y; -z)$, $x$-ի և $y$-ի տարբերությունները չեն փոխվում, իսկ $(-z_2 + z_1)^2 = (z_2 - z_1)^2$, ուստի $A'B' = AB$։ 7. $(x; y; z) \\mapsto (x; y; -z) \\mapsto (-x; y; -z)$․ $Oy$-ի նկատմամբ առանցքային համաչափությունը։ 8. $3$, $4$ (երկուսը՝ հանդիպակաց կողմնային կողերով, երկուսը՝ հանդիպակաց նիստերի ապոթեմներով), $9$։`,
        ru: `## Что такое движение

**Движение** пространства — отображение пространства на себя, сохраняющее расстояния: если $A \\mapsto A'$ и $B \\mapsto B'$, то $A'B' = AB$.

**Теорема.** Движение переводит отрезок в равный отрезок, прямую в прямую, плоскость в плоскость и сохраняет углы между прямыми и между плоскостями.

*Доказательство для отрезка.* Точка $M$ лежит на отрезке $AB$ ровно тогда, когда $AM + MB = AB$. Расстояния сохраняются, поэтому $A'M' + M'B' = A'B'$, и $M'$ лежит на $A'B'$; каждая точка $A'B'$ является образом по той же причине, применённой к обратному отображению. Прямые и плоскости — объединения отрезков, проходящих через их точки, а углы определяются сторонами треугольников, которые сохраняются. $\\blacksquare$

Композиция двух движений — движение, обратное к движению — движение.

## Основные движения в координатах

| Движение | Образ точки $(x; y; z)$ |
|---|---|
| Центральная симметрия относительно $O$ | $(-x; -y; -z)$ |
| Центральная симметрия относительно $Q(x_0; y_0; z_0)$ | $(2x_0 - x; 2y_0 - y; 2z_0 - z)$ |
| Зеркальная симметрия относительно плоскости $Oxy$ | $(x; y; -z)$ |
| Осевая симметрия относительно оси $Oz$ | $(-x; -y; z)$ |
| Параллельный перенос на $\\vec p\\{a; b; c\\}$ | $(x + a; y + b; z + c)$ |
| Поворот вокруг $Oz$ на $90^\\circ$ | $(-y; x; z)$ |

**Центральная симметрия** относительно $Q$ переводит $M$ в точку $M'$, для которой $Q$ — середина $MM'$; формула следует из формулы середины. **Зеркальная симметрия** относительно плоскости переводит $M$ в $M'$, для которой плоскость — серединный перпендикуляр к $MM'$. **Осевая симметрия** относительно прямой переводит $M$ в $M'$, для которой прямая — серединный перпендикуляр к $MM'$ в плоскости через $M$, перпендикулярной прямой; относительно $Oz$ она сохраняет $z$ и меняет знаки $x$, $y$. **Параллельный перенос** на $\\vec p$ переводит $M$ в $M'$ с $\\overrightarrow{MM'} = \\vec p$. **Поворот** вокруг оси на угол $\\alpha$ поворачивает каждую плоскость, перпендикулярную оси, на $\\alpha$ вокруг её точки на оси.

**Пример 1.** Центральная симметрия относительно $Q(1; 2; 3)$ переводит $A(4; 0; -1)$ в $(2 - 4; 4 - 0; 6 + 1) = (-2; 4; 7)$. Проверка: середина $A$ и её образа — $(1; 2; 3)$.

**Пример 2.** Центральная симметрия относительно начала координат — движение. Для $A(x_1; y_1; z_1)$, $B(x_2; y_2; z_2)$ образы $A'(-x_1; -y_1; -z_1)$, $B'(-x_2; -y_2; -z_2)$, и
$$A'B'^2 = (-x_2 + x_1)^2 + (-y_2 + y_1)^2 + (-z_2 + z_1)^2 = AB^2.$$
То же вычисление работает для зеркальной симметрии, так как $(-z_2 + z_1)^2 = (z_2 - z_1)^2$, и для переноса, так как разности координат не меняются. $\\blacksquare$

**Пример 3.** Образы точки $M(3; -5; 2)$: относительно плоскости $Oxz$ (меняется знак $y$) $(3; 5; 2)$; относительно оси $Oy$ (сохраняется $y$) $(-3; -5; -2)$; относительно начала координат $(-3; 5; -2)$.

**Пример 4.** Составим симметрии относительно плоскостей $Oxy$ и $Oxz$: $(x; y; z) \\mapsto (x; y; -z) \\mapsto (x; -y; -z)$. Результат — осевая симметрия относительно $Ox$: композиция двух зеркальных симметрий относительно перпендикулярных плоскостей есть осевая симметрия относительно их общей прямой.

**Пример 5.** Перенос на $\\vec p\\{2; -1; 3\\}$ переводит $A(1; 1; 1)$ в $(3; 0; 4)$. Образ плоскости $x + y + z = 1$: точка $(x'; y'; z')$ образа получается из точки $(x' - 2; y' + 1; z' - 3)$ плоскости, поэтому $(x' - 2) + (y' + 1) + (z' - 3) = 1$, то есть $x + y + z = 5$: параллельная плоскость.

**Пример 6.** Образ плоскости $2x - y + z = 4$ при центральной симметрии относительно начала координат получается подстановкой $(-x; -y; -z)$: $-2x + y - z = 4$, то есть $2x - y + z = -4$ — параллельная плоскость на том же расстоянии от начала координат.

**Пример 7.** Поворот вокруг $Oz$ на $90^\\circ$, $(x; y; z) \\mapsto (-y; x; z)$, — движение: для двух точек разности координат переставляются, и одна меняет знак, поэтому сумма их квадратов не меняется. Он переводит $\\vec i$ в $\\vec j$, а $\\vec j$ — в $-\\vec i$.

## Симметрия тел

Фигура имеет **центр симметрии** (**ось**, **плоскость симметрии**), если соответствующая симметрия переводит её в себя.

**Пример 8.** Куб $ABCDA_1B_1C_1D_1$ с центром $O$: центральная симметрия относительно $O$ меняет местами противоположные вершины ($A \\leftrightarrow C_1$ и т. д.), поэтому $O$ — центр симметрии. У куба $9$ плоскостей симметрии: $3$ параллельны парам граней и проходят через центр, $6$ проходят через пары противоположных рёбер (например, $AA_1C_1C$). Его оси симметрии: $3$ через центры противоположных граней, $6$ через середины противоположных рёбер и $4$ диагонали (повороты на $120^\\circ$). У правильного тетраэдра нет центра симметрии, но есть $6$ плоскостей симметрии — каждая через ребро и середину противоположного ребра.

### Упражнения

1. Найдите образ точки $(3; 3; 5)$ при центральной симметрии относительно $Q(-1; 2; 0)$.
2. Найдите образы точки $M(2; -3; 4)$ при симметриях относительно плоскости $Oxy$, плоскости $Oyz$, оси $Ox$ и начала координат.
3. Куда перенос на $\\{-1; 4; 2\\}$ переводит $A(0; 1; 1)$? Какой перенос переводит $(2; 2; 2)$ в $(5; 0; 3)$?
4. Найдите образ плоскости $x - 2y + 2z = 3$ при переносе на $\\{1; 1; 1\\}$.
5. Найдите образ плоскости $3x + y - z = 2$ при симметрии относительно плоскости $Oxy$.
6. Докажите, что симметрия относительно плоскости $Oxy$ — движение.
7. Каким движением является композиция симметрии относительно $Oxy$, а затем относительно $Oyz$?
8. Сколько плоскостей симметрии у прямоугольного параллелепипеда с тремя различными рёбрами; у правильной четырёхугольной пирамиды; у куба?

### Ответы

1. $(-2 - 3; 4 - 3; 0 - 5) = (-5; 1; -5)$. 2. $(2; -3; -4)$, $(-2; -3; 4)$, $(2; 3; -4)$, $(-2; 3; -4)$. 3. $(-1; 5; 3)$; на $\\{3; -2; 1\\}$. 4. $(x - 1) - 2(y - 1) + 2(z - 1) = 3$, то есть $x - 2y + 2z = 4$. 5. Подставим $-z$ вместо $z$: $3x + y + z = 2$. 6. $(x; y; z) \\mapsto (x; y; -z)$; разности $x$ и $y$ не меняются, а $(-z_2 + z_1)^2 = (z_2 - z_1)^2$, поэтому $A'B' = AB$. 7. $(x; y; z) \\mapsto (x; y; -z) \\mapsto (-x; y; -z)$: осевая симметрия относительно $Oy$. 8. $3$; $4$ (две через противоположные боковые рёбра, две через апофемы противоположных граней); $9$.`,
      },
      [
        q(t("A motion of space is a map that preserves…", "Տարածության շարժումն արտապատկերում է, որը պահպանում է…", "Движение пространства — отображение, сохраняющее…"), [t("distances", "հեռավորությունները", "расстояния"), t("coordinates", "կոորդինատները", "координаты"), t("only directions", "միայն ուղղությունները", "только направления")], 0),
        q(t("The image of (1; 2; 3) under central symmetry about the origin is…", "(1; 2; 3)-ի պատկերը սկզբնակետի նկատմամբ կենտրոնական համաչափության դեպքում…", "Образ точки (1; 2; 3) при центральной симметрии относительно начала координат —"), [t("(−1; −2; −3)", "(−1; −2; −3)", "(−1; −2; −3)"), t("(1; 2; −3)", "(1; 2; −3)", "(1; 2; −3)"), t("(3; 2; 1)", "(3; 2; 1)", "(3; 2; 1)")], 0),
        q(t("The symmetry in the plane Oxy maps (x; y; z) to…", "Oxy հարթության նկատմամբ համաչափությունը (x; y; z)-ն արտապատկերում է…", "Симметрия относительно плоскости Oxy переводит (x; y; z) в…"), [t("(−x; −y; z)", "(−x; −y; z)", "(−x; −y; z)"), t("(x; y; −z)", "(x; y; −z)", "(x; y; −z)"), t("(x; −y; z)", "(x; −y; z)", "(x; −y; z)")], 1),
        q(t("The translation by {1; 0; −2} maps the origin to…", "{1; 0; −2}-ով տեղափոխությունը սկզբնակետն արտապատկերում է…", "Перенос на {1; 0; −2} переводит начало координат в…"), [t("(1; 0; −2)", "(1; 0; −2)", "(1; 0; −2)"), t("(−1; 0; 2)", "(−1; 0; 2)", "(−1; 0; 2)"), t("(0; 0; 0)", "(0; 0; 0)", "(0; 0; 0)")], 0),
        q(t("Under a motion a plane is mapped to…", "Շարժման դեպքում հարթությունն արտապատկերվում է…", "При движении плоскость переходит в…"), [t("a plane", "հարթության", "плоскость"), t("a line", "ուղղի", "прямую"), t("a point", "կետի", "точку")], 0),
        q(t("How many planes of symmetry does a cube have?", "Քանի՞ համաչափության հարթություն ունի խորանարդը։", "Сколько плоскостей симметрии у куба?"), [t("3", "3", "3"), t("6", "6", "6"), t("9", "9", "9")], 2),
      ],
    ),
  ],
};
