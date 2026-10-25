import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Quadrilaterals", "Քառանկյուններ", "Четырёхугольники"),
  summary: t(
    "Polygons and their angle sum, the parallelogram and its tests, Thales' theorem, the trapezium, rectangle, rhombus and square, symmetry and problems.",
    "Բազմանկյուններ և դրանց անկյունների գումարը, զուգահեռագիծը և նրա հայտանիշները, Թալեսի թեորեմ, սեղան, ուղղանկյուն, շեղանկյուն և քառակուսի, համաչափություն և խնդիրներ։",
    "Многоугольники и сумма их углов, параллелограмм и его признаки, теорема Фалеса, трапеция, прямоугольник, ромб и квадрат, симметрия и задачи.",
  ),
  lessons: [
    lesson(
      "polygons",
      ["Polygons and the sum of their angles", "Բազմանկյուններ և դրանց անկյունների գումարը", "Многоугольники и сумма их углов"],
      {
        en: ["Name the vertices, sides and diagonals of a polygon", "Use the formula for the sum of the interior angles", "Find the angles of a regular polygon"],
        hy: ["Անվանել բազմանկյան գագաթները, կողմերը և անկյունագծերը", "Կիրառել ներքին անկյունների գումարի բանաձևը", "Գտնել կանոնավոր բազմանկյան անկյունները"],
        ru: ["Называть вершины, стороны и диагонали многоугольника", "Применять формулу суммы внутренних углов", "Находить углы правильного многоугольника"],
      },
      {
        en: `## What a polygon is

A **polygon** is a closed broken line together with the part of the plane it bounds. Its corners are the **vertices**, its segments the **sides**, and a segment joining two non-neighbouring vertices is a **diagonal**. A polygon with $n$ vertices is called an $n$-gon; it has $n$ sides.

A polygon is **convex** if it lies on one side of the line through any of its sides. All the quadrilaterals of this unit are convex.

## The sum of the interior angles

Draw all the diagonals from one vertex. They cut the $n$-gon into $n - 2$ triangles, and the angles of those triangles make up exactly the angles of the polygon. Since each triangle gives $180°$,

$$S = (n - 2) \\cdot 180°.$$

| $n$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|
| $S$ | $180°$ | $360°$ | $540°$ | $720°$ | $1080°$ |

## Exterior angles

At each vertex, the exterior angle is $180°$ minus the interior angle. The sum of the exterior angles of a convex polygon, one at each vertex, is always $360°$, whatever $n$ is.

## Regular polygons

A polygon is **regular** when all its sides and all its angles are equal. Each angle is then

$$\\frac{(n - 2) \\cdot 180°}{n}.$$

For a regular hexagon this is $120°$; for a regular pentagon $108°$.

## The number of diagonals

From each of the $n$ vertices there are $n - 3$ diagonals, and each is counted twice, so a convex $n$-gon has $\\dfrac{n(n - 3)}{2}$ diagonals: $2$ in a quadrilateral, $5$ in a pentagon, $9$ in a hexagon.

### Exercises

1. Find the sum of the angles of a heptagon ($n = 7$).
2. Find the sum of the angles of a decagon ($n = 10$).
3. The sum of the angles is $1440°$. How many sides has the polygon?
4. Find one angle of a regular octagon.
5. Three angles of a quadrilateral are $90°$, $70°$ and $120°$. Find the fourth.
6. How many diagonals has a hexagon?
7. Can a convex polygon have four right angles and nothing else?
8. Find the sum of the exterior angles of a $12$-gon.

### Answers

1. $900°$. 2. $1440°$. 3. $10$. 4. $135°$. 5. $80°$. 6. $9$. 7. Yes, a rectangle. 8. $360°$.`,
        hy: `## Ինչ է բազմանկյունը

**Բազմանկյուն** է կոչվում փակ կոտրված գիծը՝ իր սահմանափակած հարթության մասի հետ։ Նրա անկյունակետերը **գագաթներն** են, հատվածները՝ **կողմերը**, իսկ ոչ հարևան երկու գագաթ միացնող հատվածը՝ **անկյունագիծը**։ $n$ գագաթ ունեցող բազմանկյունը կոչվում է $n$-անկյուն և ունի $n$ կողմ։

Բազմանկյունը **ուռուցիկ** է, եթե այն ընկած է իր ցանկացած կողմով անցնող ուղղի մի կողմում։ Այս բաժնի բոլոր քառանկյուններն ուռուցիկ են։

## Ներքին անկյունների գումարը

Մեկ գագաթից տար բոլոր անկյունագծերը։ Դրանք $n$-անկյունը բաժանում են $n - 2$ եռանկյան, և այդ եռանկյունների անկյունները կազմում են հենց բազմանկյան անկյունները։ Քանի որ ամեն եռանկյուն տալիս է $180°$,

$$S = (n - 2) \\cdot 180°.$$

| $n$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|
| $S$ | $180°$ | $360°$ | $540°$ | $720°$ | $1080°$ |

## Արտաքին անկյուններ

Ամեն գագաթում արտաքին անկյունը $180°$ հանած ներքին անկյունն է։ Ուռուցիկ բազմանկյան արտաքին անկյունների գումարը՝ ամեն գագաթում մեկը, միշտ $360°$ է՝ անկախ $n$-ից։

## Կանոնավոր բազմանկյուններ

Բազմանկյունը **կանոնավոր** է, երբ նրա բոլոր կողմերը և բոլոր անկյունները հավասար են։ Ամեն անկյունն այդ դեպքում

$$\\frac{(n - 2) \\cdot 180°}{n}$$

է։ Կանոնավոր վեցանկյան համար դա $120°$ է, կանոնավոր հնգանկյան՝ $108°$.

## Անկյունագծերի թիվը

$n$ գագաթներից յուրաքանչյուրից ելնում է $n - 3$ անկյունագիծ, և ամեն մեկը հաշվվում է երկու անգամ, ուրեմն ուռուցիկ $n$-անկյունն ունի $\\dfrac{n(n - 3)}{2}$ անկյունագիծ․ քառանկյունում՝ $2$, հնգանկյունում՝ $5$, վեցանկյունում՝ $9$.

### Վարժություններ

1. Գտիր յոթանկյան ($n = 7$) անկյունների գումարը։
2. Գտիր տասանկյան ($n = 10$) անկյունների գումարը։
3. Անկյունների գումարը $1440°$ է։ Քանի՞ կողմ ունի բազմանկյունը։
4. Գտիր կանոնավոր ութանկյան մեկ անկյունը։
5. Քառանկյան երեք անկյուններն են $90°$, $70°$ և $120°$. Գտիր չորրորդը։
6. Քանի՞ անկյունագիծ ունի վեցանկյունը։
7. Կարո՞ղ է ուռուցիկ բազմանկյունն ունենալ չորս ուղիղ անկյուն և ուրիշ ոչինչ։
8. Գտիր $12$-անկյան արտաքին անկյունների գումարը։

### Պատասխաններ

1. $900°$. 2. $1440°$. 3. $10$. 4. $135°$. 5. $80°$. 6. $9$. 7. Այո՝ ուղղանկյունը։ 8. $360°$.`,
        ru: `## Что такое многоугольник

**Многоугольником** называют замкнутую ломаную вместе с частью плоскости, которую она ограничивает. Его углы — это **вершины**, отрезки — **стороны**, а отрезок, соединяющий две несоседние вершины, — **диагональ**. Многоугольник с $n$ вершинами называют $n$-угольником; у него $n$ сторон.

Многоугольник **выпуклый**, если он лежит по одну сторону от прямой, проходящей через любую его сторону. Все четырёхугольники этой главы выпуклые.

## Сумма внутренних углов

Проведи из одной вершины все диагонали. Они разрезают $n$-угольник на $n - 2$ треугольника, и углы этих треугольников как раз составляют углы многоугольника. Так как каждый треугольник даёт $180°$,

$$S = (n - 2) \\cdot 180°.$$

| $n$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|
| $S$ | $180°$ | $360°$ | $540°$ | $720°$ | $1080°$ |

## Внешние углы

В каждой вершине внешний угол равен $180°$ минус внутренний. Сумма внешних углов выпуклого многоугольника, по одному при каждой вершине, всегда равна $360°$ независимо от $n$.

## Правильные многоугольники

Многоугольник **правильный**, если равны все его стороны и все углы. Каждый угол тогда равен

$$\\frac{(n - 2) \\cdot 180°}{n}.$$

Для правильного шестиугольника это $120°$, для правильного пятиугольника $108°$.

## Число диагоналей

Из каждой из $n$ вершин выходит $n - 3$ диагонали, и каждая считается дважды, поэтому у выпуклого $n$-угольника $\\dfrac{n(n - 3)}{2}$ диагоналей: $2$ у четырёхугольника, $5$ у пятиугольника, $9$ у шестиугольника.

### Упражнения

1. Найди сумму углов семиугольника ($n = 7$).
2. Найди сумму углов десятиугольника ($n = 10$).
3. Сумма углов равна $1440°$. Сколько у многоугольника сторон?
4. Найди один угол правильного восьмиугольника.
5. Три угла четырёхугольника равны $90°$, $70°$ и $120°$. Найди четвёртый.
6. Сколько диагоналей у шестиугольника?
7. Может ли у выпуклого многоугольника быть четыре прямых угла и больше никаких?
8. Найди сумму внешних углов $12$-угольника.

### Ответы

1. $900°$. 2. $1440°$. 3. $10$. 4. $135°$. 5. $80°$. 6. $9$. 7. Да, это прямоугольник. 8. $360°$.`,
      },
      [
        q(t("The sum of the angles of an n-gon is…", "n-անկյան անկյունների գումարն է…", "Сумма углов n-угольника равна…"), [t("(n - 2) · 180°", "(n - 2) · 180°", "(n - 2) · 180°"), t("n · 180°", "n · 180°", "n · 180°"), t("360°", "360°", "360°")], 0),
        q(t("The sum of the angles of a pentagon is…", "Հնգանկյան անկյունների գումարն է…", "Сумма углов пятиугольника равна…"), [t("360°", "360°", "360°"), t("540°", "540°", "540°"), t("720°", "720°", "720°")], 1),
        q(t("One angle of a regular hexagon is…", "Կանոնավոր վեցանկյան մեկ անկյունն է…", "Один угол правильного шестиугольника равен…"), [t("60°", "60°", "60°"), t("135°", "135°", "135°"), t("120°", "120°", "120°")], 2),
        q(t("The sum of the exterior angles of any convex polygon is…", "Ցանկացած ուռուցիկ բազմանկյան արտաքին անկյունների գումարն է…", "Сумма внешних углов любого выпуклого многоугольника равна…"), [t("360°", "360°", "360°"), t("180°", "180°", "180°"), t("depends on n", "կախված է n-ից", "зависит от n")], 0),
        q(t("A quadrilateral has how many diagonals?", "Քառանկյունը քանի՞ անկյունագիծ ունի։", "Сколько диагоналей у четырёхугольника?"), [t("1", "1", "1"), t("2", "2", "2"), t("4", "4", "4")], 1),
        q(t("If the angle sum is 1080°, then n is…", "Եթե անկյունների գումարը 1080° է, ապա n-ը…", "Если сумма углов равна 1080°, то n равно…"), [t("6", "6", "6"), t("7", "7", "7"), t("8", "8", "8")], 2),
      ],
    ),
    lesson(
      "parallelogram",
      ["Parallelogram and its properties", "Զուգահեռագիծը և նրա հատկությունները", "Параллелограмм и его свойства"],
      {
        en: ["Define a parallelogram", "Prove and use the properties of its sides, angles and diagonals", "Solve problems on the perimeter and the angles of a parallelogram"],
        hy: ["Սահմանել զուգահեռագիծը", "Ապացուցել և կիրառել նրա կողմերի, անկյունների և անկյունագծերի հատկությունները", "Լուծել զուգահեռագծի պարագծի և անկյունների խնդիրներ"],
        ru: ["Определять параллелограмм", "Доказывать и применять свойства его сторон, углов и диагоналей", "Решать задачи на периметр и углы параллелограмма"],
      },
      {
        en: `## Definition

A **parallelogram** is a quadrilateral whose opposite sides are parallel in pairs: in $ABCD$, $AB \\parallel CD$ and $BC \\parallel AD$.

## Three properties

**1. Opposite sides are equal.** Draw the diagonal $AC$. The angles $\\angle BAC$ and $\\angle DCA$ are alternate for $AB \\parallel CD$, and $\\angle BCA$ and $\\angle DAC$ are alternate for $BC \\parallel AD$; the side $AC$ is common. So $\\triangle ABC = \\triangle CDA$ by the second congruence test, and $AB = CD$, $BC = AD$.

**2. Opposite angles are equal:** $\\angle A = \\angle C$ and $\\angle B = \\angle D$. It follows from the same congruent triangles.

**3. The diagonals bisect each other.** If the diagonals meet at $O$, then $AO = OC$ and $BO = OD$.

## Neighbouring angles

Because $AB \\parallel CD$, the angles at $A$ and $D$ are co-interior, so

$$\\angle A + \\angle D = 180°.$$

Any two neighbouring angles of a parallelogram add up to $180°$.

## Worked example

In a parallelogram one side is $7$ cm, the next is $5$ cm, and $\\angle A = 50°$.

Perimeter: $P = 2(7 + 5) = 24$ cm.

Angles: $\\angle C = \\angle A = 50°$, and $\\angle B = \\angle D = 180° - 50° = 130°$.

### Exercises

1. The sides of a parallelogram are $6$ cm and $9$ cm. Find its perimeter.
2. The perimeter is $40$ cm and one side is $12$ cm. Find the other side.
3. One angle is $64°$. Find the other three.
4. Two neighbouring angles differ by $40°$. Find all four angles.
5. The diagonals meet at $O$ and $AO = 5$ cm. Find $AC$.
6. One angle is twice its neighbour. Find both.
7. The perimeter is $36$ cm and one side is $3$ cm longer than the other. Find the sides.
8. Is a quadrilateral with $AB = CD$ and $BC = AD$ necessarily a parallelogram?

### Answers

1. $30$ cm. 2. $8$ cm. 3. $64°$, $116°$, $116°$. 4. $70°$, $110°$, $70°$, $110°$. 5. $10$ cm. 6. $60°$ and $120°$. 7. $7{,}5$ cm and $10{,}5$ cm. 8. Yes, that is one of the tests of the next lesson.`,
        hy: `## Սահմանում

**Զուգահեռագիծ** է կոչվում այն քառանկյունը, որի հանդիպակաց կողմերը զույգ առ զույգ զուգահեռ են․ $ABCD$-ում $AB \\parallel CD$ և $BC \\parallel AD$.

## Երեք հատկություն

**1. Հանդիպակաց կողմերը հավասար են։** Տար $AC$ անկյունագիծը։ $\\angle BAC$ և $\\angle DCA$ անկյունները խաչադիր են $AB \\parallel CD$-ի համար, $\\angle BCA$-ն և $\\angle DAC$-ը՝ խաչադիր $BC \\parallel AD$-ի համար, իսկ $AC$ կողմն ընդհանուր է։ Ուրեմն $\\triangle ABC = \\triangle CDA$՝ ըստ երկրորդ հայտանիշի, և $AB = CD$, $BC = AD$.

**2. Հանդիպակաց անկյունները հավասար են․** $\\angle A = \\angle C$ և $\\angle B = \\angle D$. Սա հետևում է նույն հավասար եռանկյուններից։

**3. Անկյունագծերը հատման կետում կիսվում են։** Եթե անկյունագծերը հատվում են $O$ կետում, ապա $AO = OC$ և $BO = OD$.

## Հարևան անկյուններ

Քանի որ $AB \\parallel CD$, $A$ և $D$ գագաթների անկյունները ներքին միակողմանի են, ուստի

$$\\angle A + \\angle D = 180°.$$

Զուգահեռագծի ցանկացած երկու հարևան անկյունների գումարը $180°$ է։

## Լուծված օրինակ

Զուգահեռագծի մի կողմը $7$ սմ է, հաջորդը՝ $5$ սմ, իսկ $\\angle A = 50°$.

Պարագիծ՝ $P = 2(7 + 5) = 24$ սմ։

Անկյուններ՝ $\\angle C = \\angle A = 50°$, իսկ $\\angle B = \\angle D = 180° - 50° = 130°$.

### Վարժություններ

1. Զուգահեռագծի կողմերն են $6$ սմ և $9$ սմ։ Գտիր պարագիծը։
2. Պարագիծը $40$ սմ է, մի կողմը՝ $12$ սմ։ Գտիր մյուս կողմը։
3. Մի անկյունը $64°$ է։ Գտիր մյուս երեքը։
4. Երկու հարևան անկյուններ տարբերվում են $40°$-ով։ Գտիր բոլոր չորս անկյունները։
5. Անկյունագծերը հատվում են $O$-ում և $AO = 5$ սմ։ Գտիր $AC$-ն։
6. Մի անկյունն երկու անգամ մեծ է իր հարևանից։ Գտիր երկուսն էլ։
7. Պարագիծը $36$ սմ է, մի կողմը մյուսից $3$ սմ մեծ։ Գտիր կողմերը։
8. Արդյո՞ք $AB = CD$ և $BC = AD$ պայմաններով քառանկյունը պարտադիր զուգահեռագիծ է։

### Պատասխաններ

1. $30$ սմ։ 2. $8$ սմ։ 3. $64°$, $116°$, $116°$. 4. $70°$, $110°$, $70°$, $110°$. 5. $10$ սմ։ 6. $60°$ և $120°$. 7. $7{,}5$ սմ և $10{,}5$ սմ։ 8. Այո, դա հաջորդ դասի հայտանիշներից մեկն է։`,
        ru: `## Определение

**Параллелограммом** называют четырёхугольник, у которого противоположные стороны попарно параллельны: в $ABCD$ выполняется $AB \\parallel CD$ и $BC \\parallel AD$.

## Три свойства

**1. Противоположные стороны равны.** Проведём диагональ $AC$. Углы $\\angle BAC$ и $\\angle DCA$ накрест лежащие при $AB \\parallel CD$, углы $\\angle BCA$ и $\\angle DAC$ накрест лежащие при $BC \\parallel AD$, сторона $AC$ общая. Значит, $\\triangle ABC = \\triangle CDA$ по второму признаку, и $AB = CD$, $BC = AD$.

**2. Противоположные углы равны:** $\\angle A = \\angle C$ и $\\angle B = \\angle D$. Это следует из тех же равных треугольников.

**3. Диагонали точкой пересечения делятся пополам.** Если диагонали пересекаются в точке $O$, то $AO = OC$ и $BO = OD$.

## Соседние углы

Так как $AB \\parallel CD$, углы при $A$ и $D$ односторонние, поэтому

$$\\angle A + \\angle D = 180°.$$

Сумма любых двух соседних углов параллелограмма равна $180°$.

## Разобранный пример

У параллелограмма одна сторона равна $7$ см, соседняя $5$ см, а $\\angle A = 50°$.

Периметр: $P = 2(7 + 5) = 24$ см.

Углы: $\\angle C = \\angle A = 50°$, а $\\angle B = \\angle D = 180° - 50° = 130°$.

### Упражнения

1. Стороны параллелограмма равны $6$ см и $9$ см. Найди периметр.
2. Периметр равен $40$ см, одна сторона $12$ см. Найди другую сторону.
3. Один угол равен $64°$. Найди остальные три.
4. Два соседних угла отличаются на $40°$. Найди все четыре угла.
5. Диагонали пересекаются в точке $O$ и $AO = 5$ см. Найди $AC$.
6. Один угол вдвое больше соседнего. Найди оба.
7. Периметр равен $36$ см, одна сторона на $3$ см длиннее другой. Найди стороны.
8. Обязательно ли четырёхугольник с $AB = CD$ и $BC = AD$ является параллелограммом?

### Ответы

1. $30$ см. 2. $8$ см. 3. $64°$, $116°$, $116°$. 4. $70°$, $110°$, $70°$, $110°$. 5. $10$ см. 6. $60°$ и $120°$. 7. $7{,}5$ см и $10{,}5$ см. 8. Да, это один из признаков следующего урока.`,
      },
      [
        q(t("In a parallelogram the opposite sides are…", "Զուգահեռագծում հանդիպակաց կողմերը…", "В параллелограмме противоположные стороны…"), [t("parallel and equal", "զուգահեռ և հավասար են", "параллельны и равны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("always different", "միշտ տարբեր են", "всегда различны")], 0),
        q(t("Two neighbouring angles of a parallelogram add up to…", "Զուգահեռագծի երկու հարևան անկյունների գումարն է…", "Сумма двух соседних углов параллелограмма равна…"), [t("90°", "90°", "90°"), t("180°", "180°", "180°"), t("360°", "360°", "360°")], 1),
        q(t("The diagonals of a parallelogram…", "Զուգահեռագծի անկյունագծերը…", "Диагонали параллелограмма…"), [t("are equal", "հավասար են", "равны"), t("are perpendicular", "ուղղահայաց են", "перпендикулярны"), t("bisect each other", "հատման կետում կիսվում են", "точкой пересечения делятся пополам")], 2),
        q(t("If one angle is 64°, the opposite angle is…", "Եթե մի անկյունը 64° է, հանդիպակաց անկյունն է…", "Если один угол равен 64°, то противоположный угол равен…"), [t("64°", "64°", "64°"), t("116°", "116°", "116°"), t("26°", "26°", "26°")], 0),
        q(t("The perimeter of a parallelogram with sides 6 and 9 is…", "6 և 9 կողմերով զուգահեռագծի պարագիծն է…", "Периметр параллелограмма со сторонами 6 и 9 равен…"), [t("15", "15", "15"), t("30", "30", "30"), t("54", "54", "54")], 1),
        q(t("Which pair of triangles proves the properties?", "Որ եռանկյունների զույգն է ապացուցում հատկությունները։", "Какая пара треугольников доказывает свойства?"), [t("those cut off by a midline", "միջին գծով անջատվածները", "отсечённые средней линией"), t("the two halves of an angle", "անկյան երկու կեսերը", "две половины угла"), t("the two halves cut by a diagonal", "անկյունագծով բաժանված երկու մասերը", "две части, отсечённые диагональю")], 2),
      ],
    ),
    lesson(
      "parallelogram-tests",
      ["Tests for a parallelogram", "Զուգահեռագծի հայտանիշները", "Признаки параллелограмма"],
      {
        en: ["State the three tests for a parallelogram", "Decide from given data whether a quadrilateral is a parallelogram", "Use a test in a short proof"],
        hy: ["Ձևակերպել զուգահեռագծի երեք հայտանիշները", "Տրված տվյալներով որոշել՝ քառանկյունը զուգահեռագիծ է, թե ոչ", "Կիրառել հայտանիշը կարճ ապացույցում"],
        ru: ["Формулировать три признака параллелограмма", "По данным определять, является ли четырёхугольник параллелограммом", "Применять признак в коротком доказательстве"],
      },
      {
        en: `## Property and test

A **property** says what follows from being a parallelogram. A **test** (a criterion) says what is enough for a quadrilateral to be one. Each property of the last lesson has a converse that happens to be true.

## The three tests

A quadrilateral is a parallelogram if

1. its opposite sides are equal in pairs;
2. two opposite sides are **both** equal and parallel;
3. its diagonals bisect each other.

## Proof of the second test

Let $BC = AD$ and $BC \\parallel AD$ in $ABCD$. Draw the diagonal $AC$. The angles $\\angle BCA$ and $\\angle DAC$ are alternate for the parallel lines, $BC = AD$, and $AC$ is common, so $\\triangle ABC = \\triangle CDA$ by the first congruence test. Hence $\\angle BAC = \\angle DCA$, and these are alternate angles for $AB$ and $CD$, so $AB \\parallel CD$. Both pairs of sides are parallel.

## A warning

One pair of equal sides is not enough, and one pair of parallel sides is not enough either: that gives a trapezium. Both conditions must hold for the **same** pair of sides.

## Example

$ABCD$ has $\\angle A = \\angle C = 110°$ and $\\angle B = \\angle D = 70°$. Then $\\angle A + \\angle B = 180°$, so $AD \\parallel BC$; likewise $\\angle B + \\angle C = 180°$ gives $AB \\parallel CD$. It is a parallelogram.

### Exercises

1. In $ABCD$, $AB = CD = 6$ and $BC = AD = 4$. Is it a parallelogram?
2. In $ABCD$, $BC \\parallel AD$ and $BC = AD = 5$. Is it a parallelogram?
3. The diagonals of $ABCD$ meet at $O$ with $AO = OC$ and $BO = OD$. Is it a parallelogram?
4. In $ABCD$, $AB \\parallel CD$ and $BC = AD$. Must it be a parallelogram?
5. $\\angle A = 80°$ and $\\angle B = 100°$ in $ABCD$. Which sides are parallel?
6. All four angles are equal. Is it a parallelogram?
7. $AB = 5$, $BC = 5$, $CD = 5$, $AD = 5$. Is it a parallelogram?
8. Name the test used in exercise 3.

### Answers

1. Yes, by the first test. 2. Yes, by the second test. 3. Yes, by the third test. 4. No, it may be an isosceles trapezium. 5. $AD \\parallel BC$. 6. Yes, each angle is $90°$ and opposite sides end up parallel. 7. Yes, a rhombus is a parallelogram. 8. The test about the diagonals bisecting each other.`,
        hy: `## Հատկություն և հայտանիշ

**Հատկությունն** ասում է, թե ինչ է հետևում զուգահեռագիծ լինելուց։ **Հայտանիշն** ասում է, թե ինչը բավական է, որ քառանկյունը զուգահեռագիծ լինի։ Նախորդ դասի ամեն հատկություն ունի հակադարձ պնդում, որը ճիշտ է։

## Երեք հայտանիշ

Քառանկյունը զուգահեռագիծ է, եթե

1. նրա հանդիպակաց կողմերը զույգ առ զույգ հավասար են,
2. երկու հանդիպակաց կողմերը **միաժամանակ** հավասար և զուգահեռ են,
3. նրա անկյունագծերը հատման կետում կիսվում են։

## Երկրորդ հայտանիշի ապացույցը

Թող $ABCD$-ում $BC = AD$ և $BC \\parallel AD$. Տանենք $AC$ անկյունագիծը։ $\\angle BCA$ և $\\angle DAC$ անկյունները խաչադիր են զուգահեռ ուղիղների համար, $BC = AD$, իսկ $AC$-ն ընդհանուր է, ուրեմն $\\triangle ABC = \\triangle CDA$՝ ըստ առաջին հայտանիշի։ Հետևաբար $\\angle BAC = \\angle DCA$, իսկ դրանք խաչադիր անկյուններ են $AB$ և $CD$ ուղիղների համար, ուստի $AB \\parallel CD$. Կողմերի երկու զույգն էլ զուգահեռ են։

## Զգուշացում

Հավասար կողմերի մեկ զույգը բավական չէ, և զուգահեռ կողմերի մեկ զույգը ևս բավական չէ․ դա տալիս է սեղան։ Երկու պայմանն էլ պետք է կատարվի կողմերի **միևնույն** զույգի համար։

## Օրինակ

$ABCD$-ում $\\angle A = \\angle C = 110°$ և $\\angle B = \\angle D = 70°$. Այդ դեպքում $\\angle A + \\angle B = 180°$, ուրեմն $AD \\parallel BC$; նույն կերպ $\\angle B + \\angle C = 180°$-ից՝ $AB \\parallel CD$. Սա զուգահեռագիծ է։

### Վարժություններ

1. $ABCD$-ում $AB = CD = 6$ և $BC = AD = 4$. Զուգահեռագի՞ծ է։
2. $ABCD$-ում $BC \\parallel AD$ և $BC = AD = 5$. Զուգահեռագի՞ծ է։
3. $ABCD$-ի անկյունագծերը հատվում են $O$-ում, ընդ որում $AO = OC$ և $BO = OD$. Զուգահեռագի՞ծ է։
4. $ABCD$-ում $AB \\parallel CD$ և $BC = AD$. Պարտադի՞ր է, որ այն զուգահեռագիծ լինի։
5. $ABCD$-ում $\\angle A = 80°$ և $\\angle B = 100°$. Որ կողմերն են զուգահեռ։
6. Բոլոր չորս անկյունները հավասար են։ Զուգահեռագի՞ծ է։
7. $AB = 5$, $BC = 5$, $CD = 5$, $AD = 5$. Զուգահեռագի՞ծ է։
8. Անվանիր 3-րդ վարժությունում կիրառված հայտանիշը։

### Պատասխաններ

1. Այո՝ ըստ առաջին հայտանիշի։ 2. Այո՝ ըստ երկրորդի։ 3. Այո՝ ըստ երրորդի։ 4. Ոչ, այն կարող է լինել հավասարասրուն սեղան։ 5. $AD \\parallel BC$. 6. Այո, ամեն անկյուն $90°$ է, և հանդիպակաց կողմերը ստացվում են զուգահեռ։ 7. Այո, շեղանկյունը զուգահեռագիծ է։ 8. Անկյունագծերի կիսվելու հայտանիշը։`,
        ru: `## Свойство и признак

**Свойство** говорит, что следует из того, что фигура — параллелограмм. **Признак** говорит, чего достаточно, чтобы четырёхугольник им был. У каждого свойства прошлого урока есть обратное утверждение, и оно верно.

## Три признака

Четырёхугольник является параллелограммом, если

1. его противоположные стороны попарно равны;
2. две противоположные стороны **одновременно** равны и параллельны;
3. его диагонали точкой пересечения делятся пополам.

## Доказательство второго признака

Пусть в $ABCD$ выполнено $BC = AD$ и $BC \\parallel AD$. Проведём диагональ $AC$. Углы $\\angle BCA$ и $\\angle DAC$ накрест лежащие при параллельных прямых, $BC = AD$, сторона $AC$ общая, значит $\\triangle ABC = \\triangle CDA$ по первому признаку. Отсюда $\\angle BAC = \\angle DCA$, а это накрест лежащие углы для $AB$ и $CD$, поэтому $AB \\parallel CD$. Обе пары сторон параллельны.

## Предупреждение

Одной пары равных сторон недостаточно, одной пары параллельных сторон тоже: получится трапеция. Оба условия должны выполняться для **одной и той же** пары сторон.

## Пример

В $ABCD$ известно $\\angle A = \\angle C = 110°$ и $\\angle B = \\angle D = 70°$. Тогда $\\angle A + \\angle B = 180°$, значит $AD \\parallel BC$; точно так же из $\\angle B + \\angle C = 180°$ следует $AB \\parallel CD$. Это параллелограмм.

### Упражнения

1. В $ABCD$ известно $AB = CD = 6$ и $BC = AD = 4$. Параллелограмм ли это?
2. В $ABCD$ известно $BC \\parallel AD$ и $BC = AD = 5$. Параллелограмм ли это?
3. Диагонали $ABCD$ пересекаются в точке $O$, причём $AO = OC$ и $BO = OD$. Параллелограмм ли это?
4. В $ABCD$ известно $AB \\parallel CD$ и $BC = AD$. Обязательно ли это параллелограмм?
5. В $ABCD$ известно $\\angle A = 80°$ и $\\angle B = 100°$. Какие стороны параллельны?
6. Все четыре угла равны. Параллелограмм ли это?
7. $AB = 5$, $BC = 5$, $CD = 5$, $AD = 5$. Параллелограмм ли это?
8. Назови признак, применённый в задании 3.

### Ответы

1. Да, по первому признаку. 2. Да, по второму. 3. Да, по третьему. 4. Нет, это может быть равнобедренная трапеция. 5. $AD \\parallel BC$. 6. Да, каждый угол равен $90°$, и противоположные стороны оказываются параллельны. 7. Да, ромб — это параллелограмм. 8. Признак о диагоналях, делящихся пополам.`,
      },
      [
        q(t("A test tells you…", "Հայտանիշն ասում է…", "Признак говорит…"), [t("what is enough to be a parallelogram", "ինչը բավական է զուգահեռագիծ լինելու համար", "чего достаточно, чтобы быть параллелограммом"), t("what follows from it", "ինչ է հետևում դրանից", "что из этого следует"), t("how to measure it", "ինչպես չափել այն", "как его измерить")], 0),
        q(t("Which is a test for a parallelogram?", "Որն է զուգահեռագծի հայտանիշ։", "Что является признаком параллелограмма?"), [t("one pair of parallel sides", "զուգահեռ կողմերի մեկ զույգը", "одна пара параллельных сторон"), t("diagonals bisect each other", "անկյունագծերը կիսվում են", "диагонали делятся пополам"), t("diagonals are equal", "անկյունագծերը հավասար են", "диагонали равны")], 1),
        q(t("Two sides equal and parallel means…", "Երկու կողմերը հավասար և զուգահեռ են՝ նշանակում է…", "Две стороны равны и параллельны — значит…"), [t("a trapezium", "սեղան է", "это трапеция"), t("nothing can be said", "ոչինչ չի կարելի ասել", "ничего сказать нельзя"), t("a parallelogram", "զուգահեռագիծ է", "это параллелограмм")], 2),
        q(t("One pair of parallel sides alone gives…", "Միայն զուգահեռ կողմերի մեկ զույգը տալիս է…", "Одна лишь пара параллельных сторон даёт…"), [t("a trapezium", "սեղան", "трапецию"), t("a parallelogram", "զուգահեռագիծ", "параллелограмм"), t("a rhombus", "շեղանկյուն", "ромб")], 0),
        q(t("If all four angles are equal, the quadrilateral is…", "Եթե բոլոր չորս անկյունները հավասար են, քառանկյունը…", "Если все четыре угла равны, четырёхугольник —"), [t("not a parallelogram", "զուգահեռագիծ չէ", "не параллелограмм"), t("a rectangle", "ուղղանկյուն է", "прямоугольник"), t("a trapezium", "սեղան է", "трапеция")], 1),
        q(t("Which test proves a rhombus is a parallelogram?", "Որ հայտանիշն է ապացուցում, որ շեղանկյունը զուգահեռագիծ է։", "Какой признак доказывает, что ромб — параллелограмм?"), [t("equal diagonals", "հավասար անկյունագծերը", "равные диагонали"), t("right angles", "ուղիղ անկյունները", "прямые углы"), t("opposite sides equal in pairs", "հանդիպակաց կողմերի զույգ առ զույգ հավասարությունը", "попарное равенство противоположных сторон")], 2),
      ],
    ),
    lesson(
      "trapezium",
      ["Trapezium", "Սեղան", "Трапеция"],
      {
        en: ["Name the bases and the legs of a trapezium", "Know the isosceles and the right trapezium", "Use the angles and the midline of a trapezium"],
        hy: ["Անվանել սեղանի հիմքերը և կողմերը", "Իմանալ հավասարասրուն և ուղղանկյուն սեղանները", "Կիրառել սեղանի անկյուններն ու միջին գիծը"],
        ru: ["Называть основания и боковые стороны трапеции", "Знать равнобедренную и прямоугольную трапецию", "Использовать углы и среднюю линию трапеции"],
      },
      {
        en: `## Definition

A **trapezium** is a quadrilateral in which exactly one pair of opposite sides is parallel. The parallel sides are the **bases**, the other two the **legs**.

In trapezium $ABCD$ with $BC \\parallel AD$, the bases are $BC$ and $AD$, the legs $AB$ and $CD$.

## Angles

The angles at each leg are co-interior for the parallel bases, so

$$\\angle A + \\angle B = 180°, \\qquad \\angle C + \\angle D = 180°.$$

## Two special trapeziums

An **isosceles** trapezium has equal legs. Then

* the angles at each base are equal: $\\angle A = \\angle D$ and $\\angle B = \\angle C$;
* the diagonals are equal: $AC = BD$.

A **right** trapezium has a leg perpendicular to the bases; two of its angles are $90°$.

## The midline

The **midline** of a trapezium joins the midpoints of the legs. It is parallel to the bases and equal to their half-sum:

$$m = \\frac{a + b}{2}.$$

For bases $6$ cm and $10$ cm the midline is $8$ cm.

## Worked example

In an isosceles trapezium $\\angle A = 65°$. Then $\\angle D = 65°$, and $\\angle B = \\angle C = 180° - 65° = 115°$.

If its bases are $8$ and $14$ and the legs are $5$ each, the perimeter is $8 + 14 + 5 + 5 = 32$.

### Exercises

1. Name the bases in trapezium $ABCD$ with $BC \\parallel AD$.
2. $\\angle A = 70°$. Find $\\angle B$.
3. In an isosceles trapezium $\\angle B = 100°$. Find all the angles.
4. Find the midline for bases $7$ cm and $13$ cm.
5. The midline is $9$ cm and one base is $6$ cm. Find the other base.
6. Find the perimeter of an isosceles trapezium with bases $5$ and $11$ and legs $7$.
7. How many right angles has a right trapezium?
8. Are the diagonals of every trapezium equal?

### Answers

1. $BC$ and $AD$. 2. $110°$. 3. $100°$, $100°$, $80°$, $80°$. 4. $10$ cm. 5. $12$ cm. 6. $30$. 7. Two. 8. No, only in an isosceles one.`,
        hy: `## Սահմանում

**Սեղան** է կոչվում այն քառանկյունը, որի հանդիպակաց կողմերից ուղիղ մեկ զույգն է զուգահեռ։ Զուգահեռ կողմերը **հիմքերն** են, մյուս երկուսը՝ **սրունքները**։

$BC \\parallel AD$ պայմանով $ABCD$ սեղանում հիմքերն են $BC$-ն և $AD$-ն, սրունքները՝ $AB$-ն և $CD$-ն։

## Անկյուններ

Ամեն սրունքի մոտ անկյունները ներքին միակողմանի են զուգահեռ հիմքերի համար, ուստի

$$\\angle A + \\angle B = 180°, \\qquad \\angle C + \\angle D = 180°.$$

## Երկու հատուկ սեղան

**Հավասարասրուն** սեղանն ունի հավասար սրունքներ։ Այդ դեպքում

* ամեն հիմքի մոտ անկյունները հավասար են․ $\\angle A = \\angle D$ և $\\angle B = \\angle C$;
* անկյունագծերը հավասար են․ $AC = BD$.

**Ուղղանկյուն** սեղանն ունի հիմքերին ուղղահայաց սրունք․ նրա երկու անկյունը $90°$ է։

## Միջին գիծ

Սեղանի **միջին գիծը** միացնում է սրունքների միջնակետերը։ Այն զուգահեռ է հիմքերին և հավասար է դրանց կիսագումարին․

$$m = \\frac{a + b}{2}.$$

$6$ սմ և $10$ սմ հիմքերի դեպքում միջին գիծը $8$ սմ է։

## Լուծված օրինակ

Հավասարասրուն սեղանում $\\angle A = 65°$. Այդ դեպքում $\\angle D = 65°$, իսկ $\\angle B = \\angle C = 180° - 65° = 115°$.

Եթե նրա հիմքերն են $8$-ը և $14$-ը, իսկ սրունքները՝ $5$-ական, ապա պարագիծը $8 + 14 + 5 + 5 = 32$ է։

### Վարժություններ

1. Անվանիր $BC \\parallel AD$ պայմանով $ABCD$ սեղանի հիմքերը։
2. $\\angle A = 70°$. Գտիր $\\angle B$-ն։
3. Հավասարասրուն սեղանում $\\angle B = 100°$. Գտիր բոլոր անկյունները։
4. Գտիր միջին գիծը $7$ սմ և $13$ սմ հիմքերի դեպքում։
5. Միջին գիծը $9$ սմ է, մի հիմքը՝ $6$ սմ։ Գտիր մյուս հիմքը։
6. Գտիր $5$ և $11$ հիմքերով ու $7$ սրունքներով հավասարասրուն սեղանի պարագիծը։
7. Քանի՞ ուղիղ անկյուն ունի ուղղանկյուն սեղանը։
8. Ամեն սեղանի անկյունագծե՞րն են հավասար։

### Պատասխաններ

1. $BC$-ն և $AD$-ն։ 2. $110°$. 3. $100°$, $100°$, $80°$, $80°$. 4. $10$ սմ։ 5. $12$ սմ։ 6. $30$. 7. Երկու։ 8. Ոչ, միայն հավասարասրուն սեղանի։`,
        ru: `## Определение

**Трапецией** называют четырёхугольник, у которого параллельна ровно одна пара противоположных сторон. Параллельные стороны — **основания**, две другие — **боковые стороны**.

В трапеции $ABCD$ с $BC \\parallel AD$ основания — это $BC$ и $AD$, боковые стороны — $AB$ и $CD$.

## Углы

Углы при каждой боковой стороне односторонние при параллельных основаниях, поэтому

$$\\angle A + \\angle B = 180°, \\qquad \\angle C + \\angle D = 180°.$$

## Две особые трапеции

У **равнобедренной** трапеции боковые стороны равны. Тогда

* углы при каждом основании равны: $\\angle A = \\angle D$ и $\\angle B = \\angle C$;
* диагонали равны: $AC = BD$.

У **прямоугольной** трапеции боковая сторона перпендикулярна основаниям; два её угла прямые.

## Средняя линия

**Средняя линия** трапеции соединяет середины боковых сторон. Она параллельна основаниям и равна их полусумме:

$$m = \\frac{a + b}{2}.$$

При основаниях $6$ см и $10$ см средняя линия равна $8$ см.

## Разобранный пример

В равнобедренной трапеции $\\angle A = 65°$. Тогда $\\angle D = 65°$, а $\\angle B = \\angle C = 180° - 65° = 115°$.

Если её основания равны $8$ и $14$, а боковые стороны по $5$, то периметр равен $8 + 14 + 5 + 5 = 32$.

### Упражнения

1. Назови основания трапеции $ABCD$ с $BC \\parallel AD$.
2. $\\angle A = 70°$. Найди $\\angle B$.
3. В равнобедренной трапеции $\\angle B = 100°$. Найди все углы.
4. Найди среднюю линию при основаниях $7$ см и $13$ см.
5. Средняя линия равна $9$ см, одно основание $6$ см. Найди второе основание.
6. Найди периметр равнобедренной трапеции с основаниями $5$ и $11$ и боковыми сторонами $7$.
7. Сколько прямых углов у прямоугольной трапеции?
8. У всякой ли трапеции диагонали равны?

### Ответы

1. $BC$ и $AD$. 2. $110°$. 3. $100°$, $100°$, $80°$, $80°$. 4. $10$ см. 5. $12$ см. 6. $30$. 7. Два. 8. Нет, только у равнобедренной.`,
      },
      [
        q(t("A trapezium has how many pairs of parallel sides?", "Սեղանը զուգահեռ կողմերի քանի՞ զույգ ունի։", "Сколько пар параллельных сторон у трапеции?"), [t("one", "մեկ", "одну"), t("two", "երկու", "две"), t("none", "ոչ մի", "ни одной")], 0),
        q(t("The parallel sides of a trapezium are called…", "Սեղանի զուգահեռ կողմերը կոչվում են…", "Параллельные стороны трапеции называют…"), [t("legs", "սրունքներ", "боковыми сторонами"), t("bases", "հիմքեր", "основаниями"), t("diagonals", "անկյունագծեր", "диагоналями")], 1),
        q(t("The midline of a trapezium equals…", "Սեղանի միջին գիծը հավասար է…", "Средняя линия трапеции равна…"), [t("the larger base", "մեծ հիմքին", "большему основанию"), t("the sum of the bases", "հիմքերի գումարին", "сумме оснований"), t("half the sum of the bases", "հիմքերի կիսագումարին", "полусумме оснований")], 2),
        q(t("In an isosceles trapezium the diagonals are…", "Հավասարասրուն սեղանում անկյունագծերը…", "В равнобедренной трапеции диагонали…"), [t("equal", "հավասար են", "равны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("parallel", "զուգահեռ են", "параллельны")], 0),
        q(t("If ∠A = 70° at a leg, then ∠B equals…", "Եթե սրունքի մոտ ∠A = 70°, ապա ∠B հավասար է…", "Если при боковой стороне ∠A = 70°, то ∠B равен…"), [t("70°", "70°", "70°"), t("110°", "110°", "110°"), t("20°", "20°", "20°")], 1),
        q(t("A right trapezium has…", "Ուղղանկյուն սեղանն ունի…", "У прямоугольной трапеции…"), [t("four right angles", "չորս ուղիղ անկյուն", "четыре прямых угла"), t("one right angle", "մեկ ուղիղ անկյուն", "один прямой угол"), t("two right angles", "երկու ուղիղ անկյուն", "два прямых угла")], 2),
      ],
    ),
    lesson(
      "thales-theorem",
      ["Thales' theorem on equal segments", "Թալեսի թեորեմը հավասար հատվածների մասին", "Теорема Фалеса о равных отрезках"],
      {
        en: ["State Thales' theorem", "Divide a segment into equal parts with ruler and compass", "Use the theorem in trapezium and triangle problems"],
        hy: ["Ձևակերպել Թալեսի թեորեմը", "Քանոնով և կարկինով հատվածը բաժանել հավասար մասերի", "Կիրառել թեորեմը սեղանի և եռանկյան խնդիրներում"],
        ru: ["Формулировать теорему Фалеса", "Делить отрезок на равные части циркулем и линейкой", "Применять теорему в задачах о трапеции и треугольнике"],
      },
      {
        en: `## The theorem

**Thales' theorem.** If parallel lines cut equal segments on one line, they cut equal segments on every other line they cross.

So if $A_1A_2 = A_2A_3 = A_3A_4$ on one line and the lines through $A_1$, $A_2$, $A_3$, $A_4$ are parallel, then they cut equal segments $B_1B_2 = B_2B_3 = B_3B_4$ on the second line too.

## Dividing a segment into equal parts

To divide $AB$ into five equal parts:

1. draw any ray $AX$ from $A$, not along $AB$;
2. mark five equal segments on it with the compass, getting the points $P_1, \\ldots, P_5$;
3. join $P_5$ with $B$;
4. through $P_1, \\ldots, P_4$ draw lines parallel to $P_5B$.

By Thales' theorem they cut $AB$ into five equal parts. No measuring is needed.

## In a trapezium

A line through the midpoint of one leg, parallel to the bases, passes through the midpoint of the other leg. That is why the midline is well defined.

## In a triangle

A line through the midpoint of one side, parallel to a second side, meets the third side at its midpoint. This is the key step in the proof of the midline of a triangle, which comes in the third unit.

## Example

Three parallel lines cut segments of $4$ cm each on one line. On a second line the first segment is $6$ cm. Then the second is also $6$ cm, because Thales' theorem makes the segments on the second line equal to each other, though not to $4$ cm.

### Exercises

1. State what Thales' theorem guarantees.
2. Equal segments on one line give what on another line it crosses?
3. How many parallel lines are needed to divide a segment into four equal parts by this construction?
4. A line through the midpoint of a leg of a trapezium, parallel to the bases, meets the other leg where?
5. Parallel lines cut $3$ cm, $3$ cm, $3$ cm on one line. On another they cut a first segment of $5$ cm. Find the other two.
6. Can Thales' theorem be used without a ruler with marks?
7. In a triangle, a line through the midpoint of $AB$ parallel to $BC$ meets $AC$ where?
8. Why is the midline of a trapezium well defined?

### Answers

1. That parallel lines cutting equal segments on one line cut equal segments on any other. 2. Equal segments again. 3. Three, besides the line through the last point. 4. At its midpoint. 5. $5$ cm and $5$ cm. 6. Yes, a compass and an unmarked ruler are enough. 7. At the midpoint of $AC$. 8. Because the parallel through the midpoint of one leg hits the midpoint of the other.`,
        hy: `## Թեորեմը

**Թալեսի թեորեմ։** Եթե զուգահեռ ուղիղները մի ուղղի վրա անջատում են հավասար հատվածներ, ապա դրանք հավասար հատվածներ են անջատում նաև ցանկացած այլ ուղղի վրա, որը հատում են։

Ուրեմն, եթե մի ուղղի վրա $A_1A_2 = A_2A_3 = A_3A_4$, և $A_1$, $A_2$, $A_3$, $A_4$ կետերով անցնող ուղիղները զուգահեռ են, ապա երկրորդ ուղղի վրա ևս անջատվում են հավասար հատվածներ՝ $B_1B_2 = B_2B_3 = B_3B_4$.

## Հատվածի բաժանումը հավասար մասերի

$AB$-ն հինգ հավասար մասի բաժանելու համար․

1. $A$ կետից տար կամայական $AX$ ճառագայթ, որը $AB$-ի վրա չէ,
2. կարկինով դրա վրա նշիր հինգ հավասար հատված՝ ստանալով $P_1, \\ldots, P_5$ կետերը,
3. միացրու $P_5$-ը $B$-ին,
4. $P_1, \\ldots, P_4$ կետերով տար $P_5B$-ին զուգահեռ ուղիղներ։

Ըստ Թալեսի թեորեմի դրանք $AB$-ն բաժանում են հինգ հավասար մասի։ Չափել պետք չէ։

## Սեղանում

Մի սրունքի միջնակետով անցնող և հիմքերին զուգահեռ ուղիղն անցնում է մյուս սրունքի միջնակետով։ Հենց դրա համար միջին գիծը միարժեք որոշված է։

## Եռանկյունում

Մի կողմի միջնակետով անցնող և երկրորդ կողմին զուգահեռ ուղիղն երրորդ կողմը հատում է նրա միջնակետում։ Սա եռանկյան միջին գծի ապացույցի գլխավոր քայլն է, որը կլինի երրորդ բաժնում։

## Օրինակ

Երեք զուգահեռ ուղիղներ մի ուղղի վրա անջատում են $4$ սմ-անոց հատվածներ։ Երկրորդ ուղղի վրա առաջին հատվածը $6$ սմ է։ Այդ դեպքում երկրորդը նույնպես $6$ սմ է, որովհետև Թալեսի թեորեմն երկրորդ ուղղի հատվածները դարձնում է իրար հավասար, թեև ոչ $4$ սմ։

### Վարժություններ

1. Ասա, թե ինչ է երաշխավորում Թալեսի թեորեմը։
2. Մի ուղղի վրա հավասար հատվածներն ի՞նչ են տալիս մեկ այլ հատվող ուղղի վրա։
3. Այս կառուցմամբ հատվածը չորս հավասար մասի բաժանելու համար քանի՞ զուգահեռ ուղիղ է պետք։
4. Սեղանի սրունքի միջնակետով անցնող և հիմքերին զուգահեռ ուղիղը մյուս սրունքն որտե՞ղ է հատում։
5. Զուգահեռ ուղիղները մի ուղղի վրա անջատում են $3$ սմ, $3$ սմ, $3$ սմ։ Մեկ այլ ուղղի վրա առաջին հատվածը $5$ սմ է։ Գտիր մյուս երկուսը։
6. Կարելի՞ է Թալեսի թեորեմը կիրառել առանց բաժանումներով քանոնի։
7. Եռանկյունում $AB$-ի միջնակետով անցնող և $BC$-ին զուգահեռ ուղիղը $AC$-ն որտե՞ղ է հատում։
8. Ինչու՞ է սեղանի միջին գիծը միարժեք որոշված։

### Պատասխաններ

1. Որ մի ուղղի վրա հավասար հատվածներ անջատող զուգահեռ ուղիղները հավասար հատվածներ են անջատում ցանկացած այլ ուղղի վրա։ 2. Կրկին հավասար հատվածներ։ 3. Երեք՝ բացի վերջին կետով անցնող ուղղից։ 4. Նրա միջնակետում։ 5. $5$ սմ և $5$ սմ։ 6. Այո, բավական են կարկինը և առանց բաժանումների քանոնը։ 7. $AC$-ի միջնակետում։ 8. Որովհետև մի սրունքի միջնակետով տարված զուգահեռն ընկնում է մյուսի միջնակետին։`,
        ru: `## Теорема

**Теорема Фалеса.** Если параллельные прямые отсекают на одной прямой равные отрезки, то они отсекают равные отрезки и на любой другой прямой, которую пересекают.

Значит, если на одной прямой $A_1A_2 = A_2A_3 = A_3A_4$, а прямые через $A_1$, $A_2$, $A_3$, $A_4$ параллельны, то и на второй прямой отсекаются равные отрезки $B_1B_2 = B_2B_3 = B_3B_4$.

## Деление отрезка на равные части

Чтобы разделить $AB$ на пять равных частей:

1. проведи из $A$ произвольный луч $AX$, не лежащий на $AB$;
2. отложи на нём циркулем пять равных отрезков, получив точки $P_1, \\ldots, P_5$;
3. соедини $P_5$ с $B$;
4. через $P_1, \\ldots, P_4$ проведи прямые, параллельные $P_5B$.

По теореме Фалеса они разделят $AB$ на пять равных частей. Измерять ничего не нужно.

## В трапеции

Прямая через середину одной боковой стороны, параллельная основаниям, проходит через середину другой боковой стороны. Именно поэтому средняя линия определена однозначно.

## В треугольнике

Прямая через середину одной стороны, параллельная второй стороне, пересекает третью сторону в её середине. Это главный шаг в доказательстве свойства средней линии треугольника, которое будет в третьей главе.

## Пример

Три параллельные прямые отсекают на одной прямой отрезки по $4$ см. На второй прямой первый отрезок равен $6$ см. Тогда и второй равен $6$ см, потому что теорема Фалеса делает отрезки на второй прямой равными между собой, хотя и не равными $4$ см.

### Упражнения

1. Скажи, что гарантирует теорема Фалеса.
2. Что дают равные отрезки на одной прямой на другой пересекаемой прямой?
3. Сколько параллельных прямых нужно, чтобы этим построением разделить отрезок на четыре равные части?
4. Где прямая через середину боковой стороны трапеции, параллельная основаниям, пересекает вторую боковую сторону?
5. Параллельные прямые отсекают на одной прямой $3$ см, $3$ см, $3$ см. На другой первый отрезок равен $5$ см. Найди остальные два.
6. Можно ли применять теорему Фалеса без линейки с делениями?
7. Где прямая через середину $AB$, параллельная $BC$, пересекает $AC$?
8. Почему средняя линия трапеции определена однозначно?

### Ответы

1. Что параллельные прямые, отсекающие равные отрезки на одной прямой, отсекают равные отрезки и на любой другой. 2. Снова равные отрезки. 3. Три, не считая прямой через последнюю точку. 4. В её середине. 5. $5$ см и $5$ см. 6. Да, достаточно циркуля и линейки без делений. 7. В середине $AC$. 8. Потому что параллельная через середину одной боковой стороны попадает в середину другой.`,
      },
      [
        q(t("Thales' theorem is about…", "Թալեսի թեորեմը վերաբերում է…", "Теорема Фалеса говорит о…"), [t("equal segments cut by parallel lines", "զուգահեռ ուղիղներով անջատված հավասար հատվածներին", "равных отрезках, отсекаемых параллельными прямыми"), t("equal angles", "հավասար անկյուններին", "равных углах"), t("areas", "մակերեսներին", "площадях")], 0),
        q(t("Equal segments on one line give on another line…", "Մի ուղղի հավասար հատվածները մեկ այլ ուղղի վրա տալիս են…", "Равные отрезки на одной прямой дают на другой прямой…"), [t("segments of the same length", "նույն երկարության հատվածներ", "отрезки той же длины"), t("equal segments, maybe of another length", "հավասար հատվածներ, հնարավոր է՝ այլ երկարության", "равные отрезки, возможно другой длины"), t("unequal segments", "անհավասար հատվածներ", "неравные отрезки")], 1),
        q(t("The construction divides a segment using…", "Կառուցումը հատվածը բաժանում է՝ օգտագործելով…", "Построение делит отрезок с помощью…"), [t("a ruler with marks", "բաժանումներով քանոն", "линейки с делениями"), t("a protractor", "անկյունաչափ", "транспортира"), t("a compass and an unmarked ruler", "կարկին և առանց բաժանումների քանոն", "циркуля и линейки без делений")], 2),
        q(t("In a trapezium the parallel through the midpoint of one leg…", "Սեղանում մի սրունքի միջնակետով տարված զուգահեռը…", "В трапеции параллельная через середину одной боковой стороны…"), [t("hits the midpoint of the other leg", "ընկնում է մյուս սրունքի միջնակետին", "попадает в середину другой боковой стороны"), t("hits a base", "ընկնում է հիմքին", "попадает в основание"), t("misses the other leg", "մյուս սրունքին չի հանդիպում", "не встречает другую сторону")], 0),
        q(t("In a triangle the parallel through the midpoint of AB to BC meets AC…", "Եռանկյունում AB-ի միջնակետով BC-ին զուգահեռը AC-ն հատում է…", "В треугольнике параллельная через середину AB к BC пересекает AC…"), [t("at a third of it", "նրա մեկ երրորդում", "в трети"), t("at its midpoint", "նրա միջնակետում", "в её середине"), t("at a vertex", "գագաթում", "в вершине")], 1),
        q(t("To divide a segment into four equal parts you draw…", "Հատվածը չորս հավասար մասի բաժանելու համար տանում ես…", "Чтобы разделить отрезок на четыре равные части, проводят…"), [t("one parallel", "մեկ զուգահեռ", "одну параллель"), t("four parallels", "չորս զուգահեռ", "четыре параллели"), t("three parallels", "երեք զուգահեռ", "три параллели")], 2),
      ],
    ),
    lesson(
      "rectangle-rhombus-square",
      ["Rectangle, rhombus, square", "Ուղղանկյուն, շեղանկյուն, քառակուսի", "Прямоугольник, ромб, квадрат"],
      {
        en: ["Define the rectangle, the rhombus and the square", "Know the special property of the diagonals of each", "Place the three figures in one family tree"],
        hy: ["Սահմանել ուղղանկյունը, շեղանկյունը և քառակուսին", "Իմանալ յուրաքանչյուրի անկյունագծերի հատուկ հատկությունը", "Երեք պատկերը դասավորել մեկ ընտանիքի սխեմայում"],
        ru: ["Определять прямоугольник, ромб и квадрат", "Знать особое свойство диагоналей каждого", "Располагать три фигуры в одной схеме родства"],
      },
      {
        en: `## Three special parallelograms

A **rectangle** is a parallelogram with a right angle. All four of its angles are then right, since neighbouring angles add up to $180°$.

A **rhombus** is a parallelogram with all sides equal.

A **square** is a parallelogram that is both: all angles right and all sides equal.

Each of them keeps every property of a parallelogram and adds one of its own.

## The diagonals

| figure | special property of the diagonals |
|---|---|
| rectangle | equal: $AC = BD$ |
| rhombus | perpendicular, and they bisect the angles |
| square | equal **and** perpendicular |

The tests are the converses: a parallelogram with equal diagonals is a rectangle; a parallelogram with perpendicular diagonals is a rhombus.

## The family tree

$$\\text{quadrilateral} \\to \\text{parallelogram} \\to \\begin{cases} \\text{rectangle} \\\\ \\text{rhombus} \\end{cases} \\to \\text{square}$$

Every square is a rectangle and a rhombus; every rectangle and every rhombus is a parallelogram; but not the other way round.

## Worked example

A rhombus has side $5$ cm and one diagonal $6$ cm. Its diagonals are perpendicular and bisect each other, so they cut it into four right triangles with legs $3$ and $x$ and hypotenuse $5$. Then $x = 4$, and the second diagonal is $8$ cm.

A rectangle with sides $6$ and $8$ has diagonal $10$, and both diagonals are $10$.

### Exercises

1. One angle of a rectangle is $90°$. What are the others?
2. The diagonals of a parallelogram are equal. What is it?
3. The diagonals of a parallelogram are perpendicular. What is it?
4. A rhombus has perimeter $28$ cm. Find its side.
5. A rectangle has sides $9$ and $12$. Find its diagonal.
6. Is every rectangle a square?
7. Is every square a rhombus?
8. In a rhombus one angle is $60°$. Find the others.

### Answers

1. All $90°$. 2. A rectangle. 3. A rhombus. 4. $7$ cm. 5. $15$. 6. No. 7. Yes. 8. $120°$, $60°$, $120°$.`,
        hy: `## Երեք հատուկ զուգահեռագիծ

**Ուղղանկյունը** ուղիղ անկյուն ունեցող զուգահեռագիծ է։ Այդ դեպքում նրա բոլոր չորս անկյուններն ուղիղ են, քանի որ հարևան անկյունների գումարը $180°$ է։

**Շեղանկյունը** բոլոր կողմերը հավասար ունեցող զուգահեռագիծ է։

**Քառակուսին** զուգահեռագիծ է, որը և՛ մեկն է, և՛ մյուսը․ բոլոր անկյուններն ուղիղ են, բոլոր կողմերը՝ հավասար։

Նրանցից յուրաքանչյուրը պահպանում է զուգահեռագծի բոլոր հատկությունները և ավելացնում մեկ իրենը։

## Անկյունագծերը

| պատկեր | անկյունագծերի հատուկ հատկությունը |
|---|---|
| ուղղանկյուն | հավասար են․ $AC = BD$ |
| շեղանկյուն | ուղղահայաց են և կիսում են անկյունները |
| քառակուսի | հավասար են **և** ուղղահայաց |

Հայտանիշները հակադարձ պնդումներն են․ հավասար անկյունագծերով զուգահեռագիծն ուղղանկյուն է, ուղղահայաց անկյունագծերով զուգահեռագիծը՝ շեղանկյուն։

## Ընտանիքի սխեման

$$\\text{քառանկյուն} \\to \\text{զուգահեռագիծ} \\to \\begin{cases} \\text{ուղղանկյուն} \\\\ \\text{շեղանկյուն} \\end{cases} \\to \\text{քառակուսի}$$

Ամեն քառակուսի ուղղանկյուն է և շեղանկյուն, ամեն ուղղանկյուն և ամեն շեղանկյուն՝ զուգահեռագիծ, բայց ոչ հակառակը։

## Լուծված օրինակ

Շեղանկյան կողմը $5$ սմ է, մի անկյունագիծը՝ $6$ սմ։ Նրա անկյունագծերն ուղղահայաց են և կիսվում են, ուստի շեղանկյունը բաժանվում է չորս ուղղանկյուն եռանկյան՝ $3$ և $x$ էջերով ու $5$ ներքնաձիգով։ Այդ դեպքում $x = 4$, և երկրորդ անկյունագիծը $8$ սմ է։

$6$ և $8$ կողմերով ուղղանկյան անկյունագիծը $10$ է, և երկու անկյունագիծն էլ $10$ են։

### Վարժություններ

1. Ուղղանկյան մի անկյունը $90°$ է։ Որո՞նք են մյուսները։
2. Զուգահեռագծի անկյունագծերը հավասար են։ Ի՞նչ է այն։
3. Զուգահեռագծի անկյունագծերն ուղղահայաց են։ Ի՞նչ է այն։
4. Շեղանկյան պարագիծը $28$ սմ է։ Գտիր կողմը։
5. Ուղղանկյան կողմերն են $9$ և $12$. Գտիր անկյունագիծը։
6. Ամեն ուղղանկյուն քառակուսի՞ է։
7. Ամեն քառակուսի շեղանկյու՞ն է։
8. Շեղանկյան մի անկյունը $60°$ է։ Գտիր մյուսները։

### Պատասխաններ

1. Բոլորը $90°$. 2. Ուղղանկյուն։ 3. Շեղանկյուն։ 4. $7$ սմ։ 5. $15$. 6. Ոչ։ 7. Այո։ 8. $120°$, $60°$, $120°$.`,
        ru: `## Три особых параллелограмма

**Прямоугольник** — параллелограмм с прямым углом. Тогда все четыре его угла прямые, ведь соседние углы в сумме дают $180°$.

**Ромб** — параллелограмм, у которого все стороны равны.

**Квадрат** — параллелограмм, который является и тем и другим: все углы прямые и все стороны равны.

Каждый из них сохраняет все свойства параллелограмма и добавляет одно своё.

## Диагонали

| фигура | особое свойство диагоналей |
|---|---|
| прямоугольник | равны: $AC = BD$ |
| ромб | перпендикулярны и делят углы пополам |
| квадрат | равны **и** перпендикулярны |

Признаки — обратные утверждения: параллелограмм с равными диагоналями — прямоугольник; параллелограмм с перпендикулярными диагоналями — ромб.

## Схема родства

$$\\text{четырёхугольник} \\to \\text{параллелограмм} \\to \\begin{cases} \\text{прямоугольник} \\\\ \\text{ромб} \\end{cases} \\to \\text{квадрат}$$

Каждый квадрат — прямоугольник и ромб; каждый прямоугольник и каждый ромб — параллелограмм; но не наоборот.

## Разобранный пример

Сторона ромба равна $5$ см, одна диагональ $6$ см. Диагонали перпендикулярны и делятся пополам, поэтому ромб разбивается на четыре прямоугольных треугольника с катетами $3$ и $x$ и гипотенузой $5$. Тогда $x = 4$, и вторая диагональ равна $8$ см.

У прямоугольника со сторонами $6$ и $8$ диагональ равна $10$, и обе диагонали равны $10$.

### Упражнения

1. Один угол прямоугольника равен $90°$. Чему равны остальные?
2. Диагонали параллелограмма равны. Что это за фигура?
3. Диагонали параллелограмма перпендикулярны. Что это за фигура?
4. Периметр ромба равен $28$ см. Найди сторону.
5. Стороны прямоугольника равны $9$ и $12$. Найди диагональ.
6. Всякий ли прямоугольник — квадрат?
7. Всякий ли квадрат — ромб?
8. Один угол ромба равен $60°$. Найди остальные.

### Ответы

1. Все по $90°$. 2. Прямоугольник. 3. Ромб. 4. $7$ см. 5. $15$. 6. Нет. 7. Да. 8. $120°$, $60°$, $120°$.`,
      },
      [
        q(t("A rectangle is a parallelogram with…", "Ուղղանկյունը զուգահեռագիծ է, որն ունի…", "Прямоугольник — это параллелограмм с…"), [t("a right angle", "ուղիղ անկյուն", "прямым углом"), t("equal sides", "հավասար կողմեր", "равными сторонами"), t("perpendicular diagonals", "ուղղահայաց անկյունագծեր", "перпендикулярными диагоналями")], 0),
        q(t("The diagonals of a rhombus are…", "Շեղանկյան անկյունագծերը…", "Диагонали ромба…"), [t("equal", "հավասար են", "равны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("parallel", "զուգահեռ են", "параллельны")], 1),
        q(t("The diagonals of a square are…", "Քառակուսու անկյունագծերը…", "Диагонали квадрата…"), [t("only equal", "միայն հավասար են", "только равны"), t("only perpendicular", "միայն ուղղահայաց են", "только перпендикулярны"), t("equal and perpendicular", "հավասար և ուղղահայաց են", "равны и перпендикулярны")], 2),
        q(t("Every square is…", "Ամեն քառակուսի…", "Каждый квадрат —"), [t("a rhombus and a rectangle", "շեղանկյուն և ուղղանկյուն է", "ромб и прямоугольник"), t("only a rhombus", "միայն շեղանկյուն է", "только ромб"), t("not a parallelogram", "զուգահեռագիծ չէ", "не параллелограмм")], 0),
        q(t("A rhombus with perimeter 28 cm has side…", "28 սմ պարագծով շեղանկյան կողմն է…", "У ромба с периметром 28 см сторона равна…"), [t("14 cm", "14 սմ", "14 см"), t("7 cm", "7 սմ", "7 см"), t("4 cm", "4 սմ", "4 см")], 1),
        q(t("A parallelogram with equal diagonals is…", "Հավասար անկյունագծերով զուգահեռագիծը…", "Параллелограмм с равными диагоналями — это…"), [t("a rhombus", "շեղանկյուն է", "ромб"), t("a trapezium", "սեղան է", "трапеция"), t("a rectangle", "ուղղանկյուն է", "прямоугольник")], 2),
      ],
    ),
    lesson(
      "axial-central-symmetry",
      ["Axial and central symmetry", "Առանցքային և կենտրոնային համաչափություն", "Осевая и центральная симметрия"],
      {
        en: ["Construct the image of a point in an axis and in a centre", "Find the axes and the centre of symmetry of a figure", "Recognise symmetry in quadrilaterals and in life"],
        hy: ["Կառուցել կետի պատկերն առանցքի և կենտրոնի նկատմամբ", "Գտնել պատկերի համաչափության առանցքները և կենտրոնը", "Ճանաչել համաչափությունը քառանկյուններում և կյանքում"],
        ru: ["Строить образ точки относительно оси и центра", "Находить оси и центр симметрии фигуры", "Узнавать симметрию в четырёхугольниках и в жизни"],
      },
      {
        en: `## Symmetry in an axis

Points $A$ and $A_1$ are **symmetric in the line $l$** if $l$ is perpendicular to $AA_1$ and passes through its midpoint. To construct $A_1$: drop a perpendicular from $A$ to $l$ and continue it the same distance beyond $l$.

A figure has an **axis of symmetry** $l$ if the image of the whole figure in $l$ is the figure itself. Folding along the axis makes the two halves coincide.

## Symmetry in a point

Points $A$ and $A_1$ are **symmetric in the point $O$** if $O$ is the midpoint of $AA_1$. The construction is a half turn: draw the ray $AO$ and mark $OA_1 = AO$ beyond $O$.

A figure has a **centre of symmetry** $O$ if turning it by $180°$ about $O$ leaves it unchanged.

## In the quadrilaterals of this unit

| figure | axes of symmetry | centre |
|---|---|---|
| parallelogram | none in general | yes, the meeting point of the diagonals |
| rectangle | two, through the midpoints of opposite sides | yes |
| rhombus | two, its diagonals | yes |
| square | four | yes |
| isosceles trapezium | one, through the midpoints of the bases | no |

## Where it is seen

A butterfly, a leaf, the facade of a church and most letters of the alphabet have an axis of symmetry: Armenian Հ and Russian Ж are symmetric in a vertical line. A snowflake has six axes. The letters И and S have a centre instead of an axis.

### Exercises

1. Construct the image of a point in a line (describe the steps).
2. How many axes of symmetry has a square?
3. How many has a rectangle that is not a square?
4. Has a parallelogram an axis of symmetry in general?
5. Has a parallelogram a centre of symmetry?
6. How many axes has a rhombus, and what are they?
7. Has an isosceles trapezium a centre of symmetry?
8. Name one letter with a centre of symmetry.

### Answers

1. Drop a perpendicular to the line and continue it the same distance beyond. 2. Four. 3. Two. 4. No. 5. Yes, the meeting point of its diagonals. 6. Two: its diagonals. 7. No, only an axis. 8. For example И or S.`,
        hy: `## Համաչափությունն առանցքի նկատմամբ

$A$ և $A_1$ կետերը **համաչափ են $l$ ուղղի նկատմամբ**, եթե $l$-ը ուղղահայաց է $AA_1$-ին և անցնում է նրա միջնակետով։ $A_1$-ը կառուցելու համար $A$-ից իջեցրու ուղղահայաց $l$-ին և շարունակիր այն նույն հեռավորությամբ $l$-ից այն կողմ։

Պատկերն ունի **համաչափության առանցք** $l$, եթե ամբողջ պատկերի պատկերը $l$-ի նկատմամբ հենց ինքն է։ Առանցքով ծալելիս երկու կեսերը համընկնում են։

## Համաչափությունը կետի նկատմամբ

$A$ և $A_1$ կետերը **համաչափ են $O$ կետի նկատմամբ**, եթե $O$-ն $AA_1$-ի միջնակետն է։ Կառուցումը կես պտույտ է․ տար $AO$ ճառագայթը և $O$-ից այն կողմ նշիր $OA_1 = AO$.

Պատկերն ունի **համաչափության կենտրոն** $O$, եթե $O$-ի շուրջ $180°$-ով պտտելուց այն չի փոխվում։

## Այս բաժնի քառանկյուններում

| պատկեր | համաչափության առանցքներ | կենտրոն |
|---|---|---|
| զուգահեռագիծ | ընդհանուր դեպքում չկա | այո՝ անկյունագծերի հատման կետը |
| ուղղանկյուն | երկու՝ հանդիպակաց կողմերի միջնակետերով | այո |
| շեղանկյուն | երկու՝ նրա անկյունագծերը | այո |
| քառակուսի | չորս | այո |
| հավասարասրուն սեղան | մեկ՝ հիմքերի միջնակետերով | ոչ |

## Որտեղ է այն երևում

Թիթեռը, տերևը, եկեղեցու ճակատը և այբուբենի տառերի մեծ մասն ունեն համաչափության առանցք․ հայերեն Հ-ն և ռուսերեն Ж-ը համաչափ են ուղղաձիգ ուղղի նկատմամբ։ Ձյան փաթիլն ունի վեց առանցք։ И և S տառերն առանցքի փոխարեն ունեն կենտրոն։

### Վարժություններ

1. Կառուցիր կետի պատկերն ուղղի նկատմամբ (նկարագրիր քայլերը)։
2. Քանի՞ համաչափության առանցք ունի քառակուսին։
3. Քանի՞ ունի ուղղանկյունը, որը քառակուսի չէ։
4. Ընդհանուր դեպքում զուգահեռագիծն ունի՞ համաչափության առանցք։
5. Զուգահեռագիծն ունի՞ համաչափության կենտրոն։
6. Քանի՞ առանցք ունի շեղանկյունը և որո՞նք են դրանք։
7. Հավասարասրուն սեղանն ունի՞ համաչափության կենտրոն։
8. Անվանիր կենտրոն ունեցող մեկ տառ։

### Պատասխաններ

1. Ուղղին իջեցնել ուղղահայաց և շարունակել նույն հեռավորությամբ այն կողմ։ 2. Չորս։ 3. Երկու։ 4. Ոչ։ 5. Այո՝ անկյունագծերի հատման կետը։ 6. Երկու՝ նրա անկյունագծերը։ 7. Ոչ, միայն առանցք։ 8. Օրինակ՝ И կամ S.`,
        ru: `## Симметрия относительно оси

Точки $A$ и $A_1$ **симметричны относительно прямой $l$**, если $l$ перпендикулярна $AA_1$ и проходит через её середину. Чтобы построить $A_1$, опусти из $A$ перпендикуляр на $l$ и продолжи его за $l$ на то же расстояние.

У фигуры есть **ось симметрии** $l$, если образ всей фигуры относительно $l$ — сама эта фигура. При сгибании по оси две половины совпадают.

## Симметрия относительно точки

Точки $A$ и $A_1$ **симметричны относительно точки $O$**, если $O$ — середина $AA_1$. Построение — это поворот на полоборота: проведи луч $AO$ и отложи за $O$ отрезок $OA_1 = AO$.

У фигуры есть **центр симметрии** $O$, если поворот на $180°$ вокруг $O$ оставляет её неизменной.

## В четырёхугольниках этой главы

| фигура | оси симметрии | центр |
|---|---|---|
| параллелограмм | в общем случае нет | да, точка пересечения диагоналей |
| прямоугольник | две, через середины противоположных сторон | да |
| ромб | две, его диагонали | да |
| квадрат | четыре | да |
| равнобедренная трапеция | одна, через середины оснований | нет |

## Где это встречается

Бабочка, лист, фасад храма и большинство букв алфавита имеют ось симметрии: армянская Հ и русская Ж симметричны относительно вертикали. У снежинки шесть осей. У букв И и S вместо оси есть центр.

### Упражнения

1. Построй образ точки относительно прямой (опиши шаги).
2. Сколько осей симметрии у квадрата?
3. Сколько их у прямоугольника, не являющегося квадратом?
4. Есть ли у параллелограмма ось симметрии в общем случае?
5. Есть ли у параллелограмма центр симметрии?
6. Сколько осей у ромба и что это за прямые?
7. Есть ли у равнобедренной трапеции центр симметрии?
8. Назови одну букву с центром симметрии.

### Ответы

1. Опустить перпендикуляр на прямую и продолжить его на то же расстояние. 2. Четыре. 3. Две. 4. Нет. 5. Да, точка пересечения диагоналей. 6. Две: его диагонали. 7. Нет, только ось. 8. Например, И или S.`,
      },
      [
        q(t("Two points are symmetric in a line when the line…", "Երկու կետ համաչափ են ուղղի նկատմամբ, երբ ուղիղը…", "Две точки симметричны относительно прямой, когда прямая…"), [t("is the perpendicular bisector of the segment", "հատվածի միջնուղղահայացն է", "является серединным перпендикуляром отрезка"), t("passes through one of them", "անցնում է դրանցից մեկով", "проходит через одну из них"), t("is parallel to the segment", "զուգահեռ է հատվածին", "параллельна отрезку")], 0),
        q(t("A square has how many axes of symmetry?", "Քառակուսին քանի՞ համաչափության առանցք ունի։", "Сколько осей симметрии у квадрата?"), [t("two", "երկու", "две"), t("four", "չորս", "четыре"), t("one", "մեկ", "одну")], 1),
        q(t("The axes of symmetry of a rhombus are…", "Շեղանկյան համաչափության առանցքներն են…", "Оси симметрии ромба — это…"), [t("its sides", "նրա կողմերը", "его стороны"), t("the midlines", "միջին գծերը", "средние линии"), t("its diagonals", "նրա անկյունագծերը", "его диагонали")], 2),
        q(t("The centre of symmetry of a parallelogram is…", "Զուգահեռագծի համաչափության կենտրոնն է…", "Центр симметрии параллелограмма — это…"), [t("the meeting point of the diagonals", "անկյունագծերի հատման կետը", "точка пересечения диагоналей"), t("a vertex", "գագաթը", "вершина"), t("the midpoint of a side", "կողմի միջնակետը", "середина стороны")], 0),
        q(t("An isosceles trapezium has…", "Հավասարասրուն սեղանն ունի…", "У равнобедренной трапеции есть…"), [t("a centre of symmetry", "համաչափության կենտրոն", "центр симметрии"), t("one axis of symmetry", "մեկ համաչափության առանցք", "одна ось симметрии"), t("two axes", "երկու առանցք", "две оси")], 1),
        q(t("Symmetry in a point is the same as a turn by…", "Կետի նկատմամբ համաչափությունը նույնն է, ինչ պտույտը…", "Симметрия относительно точки — это поворот на…"), [t("90°", "90°", "90°"), t("360°", "360°", "360°"), t("180°", "180°", "180°")], 2),
      ],
    ),
    lesson(
      "quadrilateral-problems",
      ["Problems on quadrilaterals", "Քառանկյունների խնդիրներ", "Задачи на четырёхугольники"],
      {
        en: ["Choose the right property or test for a problem", "Write a short solution with reasons", "Solve problems on angles, sides and diagonals"],
        hy: ["Խնդրի համար ընտրել ճիշտ հատկությունը կամ հայտանիշը", "Գրել կարճ լուծում՝ հիմնավորումներով", "Լուծել անկյունների, կողմերի և անկյունագծերի խնդիրներ"],
        ru: ["Выбирать для задачи нужное свойство или признак", "Записывать короткое решение с обоснованиями", "Решать задачи на углы, стороны и диагонали"],
      },
      {
        en: `## How to start

1. Draw the figure and mark everything that is given.
2. Decide which figure you have: parallelogram, trapezium, rhombus, rectangle.
3. Write down the properties that the given data switch on.
4. If a length or an angle is unknown, call it $x$ and make an equation.

## Problem 1 (angles)

*In a parallelogram one angle is $40°$ larger than its neighbour. Find all the angles.*

Neighbouring angles add up to $180°$. Let the smaller be $x$, then

$$x + (x + 40°) = 180°, \\qquad 2x = 140°, \\qquad x = 70°.$$

The angles are $70°$, $110°$, $70°$, $110°$.

## Problem 2 (perimeter)

*The perimeter of a parallelogram is $48$ cm and one side is twice the other. Find the sides.*

$2(x + 2x) = 48$, so $6x = 48$, $x = 8$. The sides are $8$ cm and $16$ cm.

## Problem 3 (bisector)

*The bisector of angle $A$ of a parallelogram cuts side $BC$ at $K$. Prove that $BK = AB$.*

$\\angle BAK = \\angle KAD$ because $AK$ is a bisector, and $\\angle KAD = \\angle AKB$ as alternate angles for $BC \\parallel AD$. So $\\angle BAK = \\angle AKB$, triangle $ABK$ is isosceles and $BK = AB$.

## Problem 4 (trapezium)

*In a right trapezium the smaller base is $5$, the larger $11$, and the slanting leg makes $45°$ with the larger base. Find the height.*

Drop a perpendicular from the end of the smaller base. It cuts off a right triangle with an angle of $45°$, so it is isosceles. Its horizontal leg is $11 - 5 = 6$, so the height is $6$ too.

### Exercises

1. One angle of a parallelogram is three times its neighbour. Find both.
2. The perimeter of a parallelogram is $30$ cm, one side is $4$ cm shorter than the other. Find the sides.
3. In a rhombus the diagonals are $6$ and $8$. Find the side.
4. The angles of a quadrilateral are in the ratio $1 : 2 : 3 : 4$. Find them.
5. In an isosceles trapezium the bases are $4$ and $10$ and the legs $5$. Find the perimeter.
6. The bisector of an angle of a parallelogram with sides $5$ and $9$ cuts the longer side. Into which two parts?
7. One angle of a rhombus is $120°$. Find the angle between a side and the shorter diagonal.
8. The diagonal of a rectangle is $13$ and one side is $5$. Find the other side.

### Answers

1. $45°$ and $135°$. 2. $5{,}5$ cm and $9{,}5$ cm. 3. $5$. 4. $36°$, $72°$, $108°$, $144°$. 5. $24$. 6. $5$ and $4$. 7. $30°$, since the shorter diagonal cuts the $120°$ angle into two $60°$ angles and makes an equilateral triangle with two sides. 8. $12$.`,
        hy: `## Ինչպես սկսել

1. Նկարիր պատկերը և նշիր այն ամենը, ինչ տրված է։
2. Որոշիր, թե որ պատկերն ունես՝ զուգահեռագիծ, սեղան, շեղանկյուն, ուղղանկյուն։
3. Դուրս գրիր այն հատկությունները, որոնք միացնում են տրված տվյալները։
4. Եթե երկարությունը կամ անկյունն անհայտ է, անվանիր այն $x$ և կազմիր հավասարում։

## Խնդիր 1 (անկյուններ)

*Զուգահեռագծի մի անկյունն իր հարևանից $40°$-ով մեծ է։ Գտիր բոլոր անկյունները։*

Հարևան անկյունների գումարը $180°$ է։ Թող փոքրը լինի $x$, ապա

$$x + (x + 40°) = 180°, \\qquad 2x = 140°, \\qquad x = 70°.$$

Անկյուններն են $70°$, $110°$, $70°$, $110°$.

## Խնդիր 2 (պարագիծ)

*Զուգահեռագծի պարագիծը $48$ սմ է, մի կողմը մյուսից երկու անգամ մեծ։ Գտիր կողմերը։*

$2(x + 2x) = 48$, ուրեմն $6x = 48$, $x = 8$. Կողմերն են $8$ սմ և $16$ սմ։

## Խնդիր 3 (կիսորդ)

*Զուգահեռագծի $A$ անկյան կիսորդը $BC$ կողմը հատում է $K$ կետում։ Ապացուցիր, որ $BK = AB$.*

$\\angle BAK = \\angle KAD$, քանի որ $AK$-ն կիսորդ է, իսկ $\\angle KAD = \\angle AKB$՝ որպես խաչադիր անկյուններ $BC \\parallel AD$-ի համար։ Ուրեմն $\\angle BAK = \\angle AKB$, $ABK$ եռանկյունը հավասարասրուն է, և $BK = AB$.

## Խնդիր 4 (սեղան)

*Ուղղանկյուն սեղանի փոքր հիմքը $5$ է, մեծը՝ $11$, իսկ թեք սրունքը մեծ հիմքի հետ կազմում է $45°$. Գտիր բարձրությունը։*

Փոքր հիմքի ծայրից իջեցրու ուղղահայաց։ Այն անջատում է $45°$ անկյունով ուղղանկյուն եռանկյուն, ուրեմն այն հավասարասրուն է։ Նրա հորիզոնական էջը $11 - 5 = 6$ է, ուստի բարձրությունը նույնպես $6$ է։

### Վարժություններ

1. Զուգահեռագծի մի անկյունն երեք անգամ մեծ է հարևանից։ Գտիր երկուսն էլ։
2. Զուգահեռագծի պարագիծը $30$ սմ է, մի կողմը մյուսից $4$ սմ փոքր։ Գտիր կողմերը։
3. Շեղանկյան անկյունագծերն են $6$ և $8$. Գտիր կողմը։
4. Քառանկյան անկյունները հարաբերում են $1 : 2 : 3 : 4$. Գտիր դրանք։
5. Հավասարասրուն սեղանի հիմքերն են $4$ և $10$, սրունքները՝ $5$. Գտիր պարագիծը։
6. $5$ և $9$ կողմերով զուգահեռագծի անկյան կիսորդը հատում է երկար կողմը։ Ո՞ր երկու մասի։
7. Շեղանկյան մի անկյունը $120°$ է։ Գտիր կողմի և փոքր անկյունագծի անկյունը։
8. Ուղղանկյան անկյունագիծը $13$ է, մի կողմը՝ $5$. Գտիր մյուս կողմը։

### Պատասխաններ

1. $45°$ և $135°$. 2. $5{,}5$ սմ և $9{,}5$ սմ։ 3. $5$. 4. $36°$, $72°$, $108°$, $144°$. 5. $24$. 6. $5$ և $4$. 7. $30°$, քանի որ փոքր անկյունագիծը $120°$ անկյունը բաժանում է երկու $60°$-ի և երկու կողմի հետ կազմում հավասարակողմ եռանկյուն։ 8. $12$.`,
        ru: `## С чего начать

1. Нарисуй фигуру и отметь всё, что дано.
2. Определи, какая это фигура: параллелограмм, трапеция, ромб, прямоугольник.
3. Выпиши свойства, которые включают данные условия.
4. Если длина или угол неизвестны, обозначь их $x$ и составь уравнение.

## Задача 1 (углы)

*Один угол параллелограмма на $40°$ больше соседнего. Найди все углы.*

Соседние углы в сумме дают $180°$. Пусть меньший равен $x$, тогда

$$x + (x + 40°) = 180°, \\qquad 2x = 140°, \\qquad x = 70°.$$

Углы равны $70°$, $110°$, $70°$, $110°$.

## Задача 2 (периметр)

*Периметр параллелограмма равен $48$ см, одна сторона вдвое больше другой. Найди стороны.*

$2(x + 2x) = 48$, значит $6x = 48$, $x = 8$. Стороны равны $8$ см и $16$ см.

## Задача 3 (биссектриса)

*Биссектриса угла $A$ параллелограмма пересекает сторону $BC$ в точке $K$. Докажи, что $BK = AB$.*

$\\angle BAK = \\angle KAD$, так как $AK$ — биссектриса, а $\\angle KAD = \\angle AKB$ как накрест лежащие при $BC \\parallel AD$. Значит, $\\angle BAK = \\angle AKB$, треугольник $ABK$ равнобедренный и $BK = AB$.

## Задача 4 (трапеция)

*В прямоугольной трапеции меньшее основание равно $5$, большее $11$, а наклонная боковая сторона образует с большим основанием угол $45°$. Найди высоту.*

Опусти перпендикуляр из конца меньшего основания. Он отсекает прямоугольный треугольник с углом $45°$, значит равнобедренный. Его горизонтальный катет равен $11 - 5 = 6$, поэтому и высота равна $6$.

### Упражнения

1. Один угол параллелограмма втрое больше соседнего. Найди оба.
2. Периметр параллелограмма равен $30$ см, одна сторона на $4$ см меньше другой. Найди стороны.
3. Диагонали ромба равны $6$ и $8$. Найди сторону.
4. Углы четырёхугольника относятся как $1 : 2 : 3 : 4$. Найди их.
5. В равнобедренной трапеции основания равны $4$ и $10$, боковые стороны $5$. Найди периметр.
6. Биссектриса угла параллелограмма со сторонами $5$ и $9$ пересекает большую сторону. На какие две части?
7. Один угол ромба равен $120°$. Найди угол между стороной и меньшей диагональю.
8. Диагональ прямоугольника равна $13$, одна сторона $5$. Найди другую сторону.

### Ответы

1. $45°$ и $135°$. 2. $5{,}5$ см и $9{,}5$ см. 3. $5$. 4. $36°$, $72°$, $108°$, $144°$. 5. $24$. 6. $5$ и $4$. 7. $30°$, так как меньшая диагональ делит угол $120°$ на два угла по $60°$ и образует с двумя сторонами равносторонний треугольник. 8. $12$.`,
      },
      [
        q(t("Neighbouring angles of a parallelogram give the equation…", "Զուգահեռագծի հարևան անկյունները տալիս են հավասարումը…", "Соседние углы параллелограмма дают уравнение…"), [t("x + y = 180°", "x + y = 180°", "x + y = 180°"), t("x + y = 90°", "x + y = 90°", "x + y = 90°"), t("x = y", "x = y", "x = y")], 0),
        q(t("If one angle is 40° more than its neighbour, the smaller is…", "Եթե մի անկյունը հարևանից 40°-ով մեծ է, փոքրն է…", "Если один угол на 40° больше соседнего, меньший равен…"), [t("40°", "40°", "40°"), t("70°", "70°", "70°"), t("110°", "110°", "110°")], 1),
        q(t("A rhombus with diagonals 6 and 8 has side…", "6 և 8 անկյունագծերով շեղանկյան կողմն է…", "У ромба с диагоналями 6 и 8 сторона равна…"), [t("7", "7", "7"), t("10", "10", "10"), t("5", "5", "5")], 2),
        q(t("The bisector of an angle of a parallelogram cuts off…", "Զուգահեռագծի անկյան կիսորդն անջատում է…", "Биссектриса угла параллелограмма отсекает…"), [t("an isosceles triangle", "հավասարասրուն եռանկյուն", "равнобедренный треугольник"), t("a square", "քառակուսի", "квадрат"), t("a right triangle", "ուղղանկյուն եռանկյուն", "прямоугольный треугольник")], 0),
        q(t("Angles in the ratio 1 : 2 : 3 : 4 in a quadrilateral start at…", "Քառանկյունում 1 : 2 : 3 : 4 հարաբերությամբ անկյունները սկսվում են…", "Углы четырёхугольника в отношении 1 : 2 : 3 : 4 начинаются с…"), [t("30°", "30°", "30°"), t("36°", "36°", "36°"), t("45°", "45°", "45°")], 1),
        q(t("A rectangle with diagonal 13 and side 5 has other side…", "13 անկյունագծով և 5 կողմով ուղղանկյան մյուս կողմն է…", "У прямоугольника с диагональю 13 и стороной 5 другая сторона равна…"), [t("8", "8", "8"), t("18", "18", "18"), t("12", "12", "12")], 2),
      ],
    ),
  ],
};
