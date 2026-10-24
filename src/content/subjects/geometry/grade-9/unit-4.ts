import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("The length of a circle and the area of a disc", "Շրջանագծի երկարությունը և շրջանի մակերեսը", "Длина окружности и площадь круга"),
  summary: t("Regular polygons, the circles inscribed in and circumscribed about them, the length of a circle and of an arc, the area of a disc, a sector and a segment.", "Կանոնավոր բազմանկյուններ, նրանց ներգծած և արտագծած շրջանագծեր, շրջանագծի և աղեղի երկարությունը, շրջանի, սեկտորի և սեգմենտի մակերեսը։", "Правильные многоугольники, вписанные в них и описанные около них окружности, длина окружности и дуги, площадь круга, сектора и сегмента."),
  lessons: [
    lesson(
      "regular-polygons",
      ["Regular polygons", "Կանոնավոր բազմանկյուններ", "Правильные многоугольники"],
      {
        en: ["Define a regular polygon and compute the sum of the angles of a convex polygon", "Find the angle of a regular n-gon", "Construct regular polygons by dividing a circle"],
        hy: ["Սահմանել կանոնավոր բազմանկյունը և հաշվել ուռուցիկ բազմանկյան անկյունների գումարը", "Գտնել կանոնավոր n-անկյան անկյունը", "Կառուցել կանոնավոր բազմանկյուններ՝ շրջանագիծը բաժանելով"],
        ru: ["Определять правильный многоугольник и вычислять сумму углов выпуклого многоугольника", "Находить угол правильного n-угольника", "Строить правильные многоугольники делением окружности"],
      },
      {
        en: `## The sum of the angles

> The sum of the angles of a convex $n$-gon equals $(n - 2)\\cdot 180^\\circ$.

**Proof.** Draw all the diagonals from one vertex. They cut the polygon into $n - 2$ triangles, and the angles of these triangles together make exactly the angles of the polygon.

| $n$ | Name | Sum of the angles |
|---|---|---|
| $3$ | triangle | $180^\\circ$ |
| $4$ | quadrilateral | $360^\\circ$ |
| $5$ | pentagon | $540^\\circ$ |
| $6$ | hexagon | $720^\\circ$ |
| $8$ | octagon | $1080^\\circ$ |

## Regular polygons

> A convex polygon is **regular** if all its sides are equal and all its angles are equal.

A regular triangle is the equilateral triangle, and a regular quadrilateral is the square. For larger $n$ both conditions are needed: a rhombus has equal sides but unequal angles, and a rectangle has equal angles but unequal sides.

> The angle of a regular $n$-gon equals
> $$\\alpha_n = \\frac{(n - 2)\\cdot 180^\\circ}{n}.$$

**Example 1.** For the regular hexagon $\\alpha_6 = \\frac{4\\cdot 180^\\circ}{6} = 120^\\circ$. For the regular pentagon $\\alpha_5 = 108^\\circ$, and for the regular octagon $\\alpha_8 = 135^\\circ$.

**Example 2.** How many sides has a regular polygon whose angle is $150^\\circ$? From $\\frac{(n - 2)180}{n} = 150$ we get $180n - 360 = 150n$, so $30n = 360$ and $n = 12$.

**Example 3.** Is there a regular polygon with an angle of $100^\\circ$? From $\\frac{(n-2)180}{n} = 100$ we get $80n = 360$, that is $n = 4{.}5$, which is not a whole number. So there is none.

## The exterior angle

The exterior angle of a regular $n$-gon is $\\frac{360^\\circ}{n}$, because going once round the polygon turns you through a full circle. This is often the quickest route: a regular $n$-gon has an exterior angle of $\\frac{360^\\circ}{n}$ and therefore an interior angle of $180^\\circ - \\frac{360^\\circ}{n}$.

**Example 4.** The exterior angle of the regular decagon is $36^\\circ$, so its interior angle is $144^\\circ$.

## Construction by dividing a circle

If a circle is divided into $n$ equal arcs and the division points are joined in order, the result is a regular $n$-gon: equal arcs give equal chords, and every inscribed angle rests on $n - 2$ of the equal arcs.

A hexagon is the easiest: the side of a regular hexagon inscribed in a circle equals the radius, so stepping the radius round the circle with compasses gives six points. Joining every other point gives an equilateral triangle, and bisecting the arcs gives a twelve-gon. Starting from two perpendicular diameters gives a square and then an octagon.

**Example 5.** A regular hexagon with side $a$ splits into six equilateral triangles with side $a$, so its area is $6\\cdot\\frac{a^2\\sqrt{3}}{4} = \\frac{3a^2\\sqrt{3}}{2}$. For $a = 4$ this is $24\\sqrt{3}$.

**Example 6.** The sum of the angles of a polygon is $1440^\\circ$. How many sides has it? From $(n - 2)180 = 1440$ we get $n - 2 = 8$ and $n = 10$.

### Exercises

1. Find the sum of the angles of a convex heptagon.
2. Find the angle of a regular nine-sided polygon.
3. How many sides has a regular polygon whose angle is $162^\\circ$?
4. Find the exterior angle of a regular pentagon.
5. Is there a regular polygon with an angle of $130^\\circ$?
6. The sum of the angles of a polygon is $2160^\\circ$. Find the number of its sides.
7. Find the area of a regular hexagon with side $6$.
8. Why is a rhombus not a regular polygon in general?

### Answers

1. $(7 - 2)\\cdot 180^\\circ = 900^\\circ$.
2. $\\frac{7\\cdot 180^\\circ}{9} = 140^\\circ$.
3. $\\frac{360}{180 - 162} = \\frac{360}{18} = 20$ sides.
4. $\\frac{360^\\circ}{5} = 72^\\circ$.
5. $\\frac{360}{50} = 7{.}2$ is not a whole number, so there is none.
6. $n - 2 = 12$, so $n = 14$.
7. $\\frac{3\\cdot 36\\sqrt{3}}{2} = 54\\sqrt{3}$.
8. Its sides are equal, but its angles need not be.`,
        hy: `## Անկյունների գումարը

> Ուռուցիկ $n$-անկյան անկյունների գումարը հավասար է $(n - 2)\\cdot 180^\\circ$։

**Ապացույց։** Մի գագաթից տանենք բոլոր անկյունագծերը։ Նրանք բազմանկյունը բաժանում են $n - 2$ եռանկյան, և այս եռանկյունների անկյունները միասին կազմում են հենց բազմանկյան անկյունները։

| $n$ | Անվանումը | Անկյունների գումարը |
|---|---|---|
| $3$ | եռանկյուն | $180^\\circ$ |
| $4$ | քառանկյուն | $360^\\circ$ |
| $5$ | հնգանկյուն | $540^\\circ$ |
| $6$ | վեցանկյուն | $720^\\circ$ |
| $8$ | ութանկյուն | $1080^\\circ$ |

## Կանոնավոր բազմանկյուններ

> Ուռուցիկ բազմանկյունը **կանոնավոր** է, եթե նրա բոլոր կողմերը հավասար են և բոլոր անկյունները հավասար են։

Կանոնավոր եռանկյունը հավասարակողմ եռանկյունն է, իսկ կանոնավոր քառանկյունը՝ քառակուսին։ Ավելի մեծ $n$-ի համար երկու պայմանն էլ անհրաժեշտ է. շեղանկյունն ունի հավասար կողմեր, բայց ոչ հավասար անկյուններ, իսկ ուղղանկյունն ունի հավասար անկյուններ, բայց ոչ հավասար կողմեր։

> Կանոնավոր $n$-անկյան անկյունը հավասար է
> $$\\alpha_n = \\frac{(n - 2)\\cdot 180^\\circ}{n}.$$

**Օրինակ 1.** Կանոնավոր վեցանկյան համար $\\alpha_6 = \\frac{4\\cdot 180^\\circ}{6} = 120^\\circ$։ Կանոնավոր հնգանկյան համար $\\alpha_5 = 108^\\circ$, իսկ կանոնավոր ութանկյան համար $\\alpha_8 = 135^\\circ$։

**Օրինակ 2.** Քանի՞ կողմ ունի կանոնավոր բազմանկյունը, որի անկյունը $150^\\circ$ է։ $\\frac{(n - 2)180}{n} = 150$-ից ստանում ենք $180n - 360 = 150n$, ուստի $30n = 360$ և $n = 12$։

**Օրինակ 3.** Գոյություն ունի՞ կանոնավոր բազմանկյուն $100^\\circ$ անկյունով։ $\\frac{(n-2)180}{n} = 100$-ից ստանում ենք $80n = 360$, այսինքն $n = 4{,}5$, ինչն ամբողջ թիվ չէ։ Ուրեմն չկա։

## Արտաքին անկյունը

Կանոնավոր $n$-անկյան արտաքին անկյունը $\\frac{360^\\circ}{n}$ է, քանի որ բազմանկյան շուրջը մեկ անգամ պտտվելով շրջվում ես լրիվ շրջան։ Սա հաճախ ամենակարճ ճանապարհն է. կանոնավոր $n$-անկյունն ունի $\\frac{360^\\circ}{n}$ արտաքին անկյուն և հետևաբար $180^\\circ - \\frac{360^\\circ}{n}$ ներքին անկյուն։

**Օրինակ 4.** Կանոնավոր տասանկյան արտաքին անկյունը $36^\\circ$ է, ուստի նրա ներքին անկյունը $144^\\circ$ է։

## Կառուցումը շրջանագիծը բաժանելով

Եթե շրջանագիծը բաժանենք $n$ հավասար աղեղի և բաժանման կետերը միացնենք հերթականությամբ, ստացվում է կանոնավոր $n$-անկյուն. հավասար աղեղները տալիս են հավասար լարեր, իսկ ամեն ներգծյալ անկյուն հենվում է հավասար աղեղներից $n - 2$-ի վրա։

Վեցանկյունն ամենահեշտն է. շրջանագծին ներգծած կանոնավոր վեցանկյան կողմը հավասար է շառավղին, ուստի կարկինով շառավիղը շրջանագծի շուրջը քայլելով ստանում ենք վեց կետ։ Մեկընդմեջ կետերը միացնելով ստանում ենք հավասարակողմ եռանկյուն, իսկ աղեղները կիսելով՝ տասներկուանկյուն։ Երկու ուղղահայաց տրամագծից սկսելով ստանում ենք քառակուսի, ապա ութանկյուն։

**Օրինակ 5.** $a$ կողմով կանոնավոր վեցանկյունը բաժանվում է $a$ կողմով վեց հավասարակողմ եռանկյան, ուստի նրա մակերեսն է $6\\cdot\\frac{a^2\\sqrt{3}}{4} = \\frac{3a^2\\sqrt{3}}{2}$։ $a = 4$ դեպքում սա $24\\sqrt{3}$ է։

**Օրինակ 6.** Բազմանկյան անկյունների գումարը $1440^\\circ$ է։ Քանի՞ կողմ ունի նա։ $(n - 2)180 = 1440$-ից ստանում ենք $n - 2 = 8$ և $n = 10$։

### Վարժություններ

1. Գտեք ուռուցիկ յոթանկյան անկյունների գումարը։
2. Գտեք կանոնավոր ինըանկյան անկյունը։
3. Քանի՞ կողմ ունի կանոնավոր բազմանկյունը, որի անկյունը $162^\\circ$ է։
4. Գտեք կանոնավոր հնգանկյան արտաքին անկյունը։
5. Գոյություն ունի՞ կանոնավոր բազմանկյուն $130^\\circ$ անկյունով։
6. Բազմանկյան անկյունների գումարը $2160^\\circ$ է։ Գտեք նրա կողմերի թիվը։
7. Գտեք $6$ կողմով կանոնավոր վեցանկյան մակերեսը։
8. Ինչո՞ւ շեղանկյունն ընդհանուր դեպքում կանոնավոր բազմանկյուն չէ։

### Պատասխաններ

1. $(7 - 2)\\cdot 180^\\circ = 900^\\circ$։
2. $\\frac{7\\cdot 180^\\circ}{9} = 140^\\circ$։
3. $\\frac{360}{180 - 162} = \\frac{360}{18} = 20$ կողմ։
4. $\\frac{360^\\circ}{5} = 72^\\circ$։
5. $\\frac{360}{50} = 7{,}2$-ը ամբողջ թիվ չէ, ուստի չկա։
6. $n - 2 = 12$, ուստի $n = 14$։
7. $\\frac{3\\cdot 36\\sqrt{3}}{2} = 54\\sqrt{3}$։
8. Նրա կողմերը հավասար են, բայց անկյունները պարտադիր չէ, որ հավասար լինեն։`,
        ru: `## Сумма углов

> Сумма углов выпуклого $n$-угольника равна $(n - 2)\\cdot 180^\\circ$.

**Доказательство.** Проведём из одной вершины все диагонали. Они разбивают многоугольник на $n - 2$ треугольника, и углы этих треугольников вместе составляют в точности углы многоугольника.

| $n$ | Название | Сумма углов |
|---|---|---|
| $3$ | треугольник | $180^\\circ$ |
| $4$ | четырёхугольник | $360^\\circ$ |
| $5$ | пятиугольник | $540^\\circ$ |
| $6$ | шестиугольник | $720^\\circ$ |
| $8$ | восьмиугольник | $1080^\\circ$ |

## Правильные многоугольники

> Выпуклый многоугольник называется **правильным**, если все его стороны равны и все углы равны.

Правильный треугольник — это равносторонний треугольник, а правильный четырёхугольник — квадрат. При большем $n$ нужны оба условия: у ромба стороны равны, а углы нет, у прямоугольника углы равны, а стороны нет.

> Угол правильного $n$-угольника равен
> $$\\alpha_n = \\frac{(n - 2)\\cdot 180^\\circ}{n}.$$

**Пример 1.** Для правильного шестиугольника $\\alpha_6 = \\frac{4\\cdot 180^\\circ}{6} = 120^\\circ$. Для правильного пятиугольника $\\alpha_5 = 108^\\circ$, а для правильного восьмиугольника $\\alpha_8 = 135^\\circ$.

**Пример 2.** Сколько сторон у правильного многоугольника с углом $150^\\circ$? Из $\\frac{(n - 2)180}{n} = 150$ получаем $180n - 360 = 150n$, поэтому $30n = 360$ и $n = 12$.

**Пример 3.** Существует ли правильный многоугольник с углом $100^\\circ$? Из $\\frac{(n-2)180}{n} = 100$ получаем $80n = 360$, то есть $n = 4{,}5$ — не целое число. Значит, такого нет.

## Внешний угол

Внешний угол правильного $n$-угольника равен $\\frac{360^\\circ}{n}$, потому что, обойдя многоугольник один раз, вы поворачиваетесь на полный круг. Это часто самый короткий путь: у правильного $n$-угольника внешний угол равен $\\frac{360^\\circ}{n}$, а значит внутренний равен $180^\\circ - \\frac{360^\\circ}{n}$.

**Пример 4.** Внешний угол правильного десятиугольника равен $36^\\circ$, поэтому его внутренний угол равен $144^\\circ$.

## Построение делением окружности

Если окружность разделить на $n$ равных дуг и соединить точки деления по порядку, получится правильный $n$-угольник: равные дуги дают равные хорды, а каждый вписанный угол опирается на $n - 2$ из этих равных дуг.

Шестиугольник самый простой: сторона правильного шестиугольника, вписанного в окружность, равна радиусу, поэтому, откладывая радиус циркулем по окружности, получаем шесть точек. Соединяя точки через одну, получаем равносторонний треугольник, а деля дуги пополам — двенадцатиугольник. Начав с двух перпендикулярных диаметров, получаем квадрат, а затем восьмиугольник.

**Пример 5.** Правильный шестиугольник со стороной $a$ разбивается на шесть равносторонних треугольников со стороной $a$, поэтому его площадь равна $6\\cdot\\frac{a^2\\sqrt{3}}{4} = \\frac{3a^2\\sqrt{3}}{2}$. При $a = 4$ это $24\\sqrt{3}$.

**Пример 6.** Сумма углов многоугольника равна $1440^\\circ$. Сколько у него сторон? Из $(n - 2)180 = 1440$ получаем $n - 2 = 8$ и $n = 10$.

### Упражнения

1. Найдите сумму углов выпуклого семиугольника.
2. Найдите угол правильного девятиугольника.
3. Сколько сторон у правильного многоугольника с углом $162^\\circ$?
4. Найдите внешний угол правильного пятиугольника.
5. Существует ли правильный многоугольник с углом $130^\\circ$?
6. Сумма углов многоугольника равна $2160^\\circ$. Найдите число его сторон.
7. Найдите площадь правильного шестиугольника со стороной $6$.
8. Почему ромб в общем случае не является правильным многоугольником?

### Ответы

1. $(7 - 2)\\cdot 180^\\circ = 900^\\circ$.
2. $\\frac{7\\cdot 180^\\circ}{9} = 140^\\circ$.
3. $\\frac{360}{180 - 162} = \\frac{360}{18} = 20$ сторон.
4. $\\frac{360^\\circ}{5} = 72^\\circ$.
5. $\\frac{360}{50} = 7{,}2$ — не целое число, поэтому такого нет.
6. $n - 2 = 12$, поэтому $n = 14$.
7. $\\frac{3\\cdot 36\\sqrt{3}}{2} = 54\\sqrt{3}$.
8. Его стороны равны, но углы равными быть не обязаны.`,
      },
      [
        q(t("The sum of the angles of a convex n-gon equals", "Ուռուցիկ n-անկյան անկյունների գումարը հավասար է", "Сумма углов выпуклого n-угольника равна"), [
          t("(n - 2) times 180 degrees", "(n - 2) բազմապատկած 180 աստիճան", "(n - 2) умножить на 180 градусов"),
          t("n times 180 degrees", "n բազմապատկած 180 աստիճան", "n умножить на 180 градусов"),
          t("360 degrees for every n", "360 աստիճան ցանկացած n-ի համար", "360 градусам при любом n"),
        ], 0),
        q(t("A polygon is regular when", "Բազմանկյունը կանոնավոր է, երբ", "Многоугольник правильный, когда"), [
          t("all its sides are equal", "նրա բոլոր կողմերը հավասար են", "все его стороны равны"),
          t("all its sides and all its angles are equal", "նրա բոլոր կողմերը և բոլոր անկյունները հավասար են", "все его стороны и все углы равны"),
          t("all its angles are equal", "նրա բոլոր անկյունները հավասար են", "все его углы равны"),
        ], 1),
        q(t("The angle of a regular hexagon equals", "Կանոնավոր վեցանկյան անկյունը հավասար է", "Угол правильного шестиугольника равен"), [
          t("60 degrees", "60 աստիճան", "60 градусам"),
          t("90 degrees", "90 աստիճան", "90 градусам"),
          t("120 degrees", "120 աստիճան", "120 градусам"),
        ], 2),
        q(t("The exterior angle of a regular n-gon equals", "Կանոնավոր n-անկյան արտաքին անկյունը հավասար է", "Внешний угол правильного n-угольника равен"), [
          t("360 degrees divided by n", "360 աստիճան բաժանած n-ի", "360 градусов, делённым на n"),
          t("180 degrees divided by n", "180 աստիճան բաժանած n-ի", "180 градусам, делённым на n"),
          t("n times 360 degrees", "n բազմապատկած 360 աստիճան", "n умножить на 360 градусов"),
        ], 0),
        q(t("The side of a regular hexagon inscribed in a circle equals", "Շրջանագծին ներգծած կանոնավոր վեցանկյան կողմը հավասար է", "Сторона правильного шестиугольника, вписанного в окружность, равна"), [
          t("the diameter", "տրամագծին", "диаметру"),
          t("the radius", "շառավղին", "радиусу"),
          t("half the radius", "շառավղի կեսին", "половине радиуса"),
        ], 1),
        q(t("There is no regular polygon with an angle of 100 degrees because", "100 աստիճան անկյունով կանոնավոր բազմանկյուն չկա, քանի որ", "Правильного многоугольника с углом 100 градусов не существует, потому что"), [
          t("100 degrees is less than 108 degrees", "100 աստիճանը փոքր է 108 աստիճանից", "100 градусов меньше 108 градусов"),
          t("the angle of a regular polygon is always even", "կանոնավոր բազմանկյան անկյունը միշտ զույգ է", "угол правильного многоугольника всегда чётный"),
          t("the equation gives a number of sides that is not a whole number", "հավասարումը տալիս է կողմերի ոչ ամբողջ թիվ", "уравнение даёт нецелое число сторон"),
        ], 2),
      ],
    ),
    lesson(
      "regular-polygon-circles",
      ["The circles inscribed in and circumscribed about a regular polygon", "Կանոնավոր բազմանկյան ներգծած և արտագծած շրջանագծերը", "Окружности, вписанная в правильный многоугольник и описанная около него"],
      {
        en: ["Know that every regular polygon has an inscribed and a circumscribed circle with a common centre", "Use the formulas for the side, the radius and the apothem", "Find the area of a regular polygon"],
        hy: ["Իմանալ, որ ամեն կանոնավոր բազմանկյուն ունի ներգծած և արտագծած շրջանագծեր ընդհանուր կենտրոնով", "Կիրառել կողմի, շառավղի և ապոթեմի բանաձևերը", "Գտնել կանոնավոր բազմանկյան մակերեսը"],
        ru: ["Знать, что у каждого правильного многоугольника есть вписанная и описанная окружности с общим центром", "Применять формулы для стороны, радиуса и апофемы", "Находить площадь правильного многоугольника"],
      },
      {
        en: `## Two circles, one centre

> About any regular polygon one circle can be circumscribed, and in it one circle can be inscribed. The two circles have the same centre.

That centre is the **centre of the polygon**. The radius $R$ of the circumscribed circle reaches the vertices; the radius $r$ of the inscribed circle reaches the midpoints of the sides and is called the **apothem**.

Joining the centre to the $n$ vertices cuts the polygon into $n$ equal isosceles triangles. The angle at the centre in each of them is $\\frac{360^\\circ}{n}$, and the apothem is its height. This single picture gives every formula below.

## The formulas

Let $a_n$ be the side of the regular $n$-gon. Half of a triangle at the centre is a right triangle with the angle $\\frac{180^\\circ}{n}$ at the centre, the leg $\\frac{a_n}{2}$ opposite it, the other leg $r$ and the hypotenuse $R$. Hence

> $$a_n = 2R\\sin\\frac{180^\\circ}{n}, \\qquad r = R\\cos\\frac{180^\\circ}{n}, \\qquad r = \\frac{a_n}{2\\tan\\frac{180^\\circ}{n}}.$$

| $n$ | $a_n$ | $r$ |
|---|---|---|
| $3$ | $R\\sqrt{3}$ | $\\frac{R}{2}$ |
| $4$ | $R\\sqrt{2}$ | $\\frac{R\\sqrt{2}}{2}$ |
| $6$ | $R$ | $\\frac{R\\sqrt{3}}{2}$ |

The row $n = 6$ is the one worth remembering: the side of the regular hexagon equals the radius.

**Example 1.** A regular hexagon is inscribed in a circle of radius $8$. Its side is $8$, and its apothem is $4\\sqrt{3} \\approx 6{.}93$.

**Example 2.** A square is inscribed in a circle of radius $5$. Its side is $5\\sqrt{2} \\approx 7{.}07$, and its apothem is $\\frac{5\\sqrt{2}}{2} \\approx 3{.}54$.

**Example 3.** A regular triangle has side $12$. Then $R = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$ and $r = 2\\sqrt{3}$: in an equilateral triangle the circumscribed radius is twice the inscribed one, which matches the fact that the centre divides each median in the ratio $2 : 1$.

## The area

The $n$ equal triangles each have base $a_n$ and height $r$, so

> $$S = \\tfrac{1}{2}P r,$$
> where $P = na_n$ is the perimeter.

The same formula holds for any polygon with an inscribed circle, and it is worth comparing with the area of a disc, which will turn out to be $\\tfrac{1}{2}\\cdot 2\\pi R\\cdot R$.

**Example 4.** A regular hexagon with side $6$ has perimeter $36$ and apothem $3\\sqrt{3}$, so
$$S = \\tfrac{1}{2}\\cdot 36\\cdot 3\\sqrt{3} = 54\\sqrt{3}.$$
This agrees with six equilateral triangles of side $6$.

**Example 5.** A regular octagon is inscribed in a circle of radius $10$. Its side is $20\\sin 22{.}5^\\circ \\approx 7{.}65$ and its apothem is $10\\cos 22{.}5^\\circ \\approx 9{.}24$, so its area is about $\\tfrac{1}{2}\\cdot 8\\cdot 7{.}65\\cdot 9{.}24 \\approx 283$. The disc of radius $10$ has area about $314$, so the octagon already fills about nine tenths of it.

**Example 6.** The apothem of a regular hexagon is $5\\sqrt{3}$. Then $R = \\frac{r}{\\cos 30^\\circ} = \\frac{5\\sqrt{3}}{\\sqrt{3}/2} = 10$, the side is $10$, and the area is $\\tfrac{1}{2}\\cdot 60\\cdot 5\\sqrt{3} = 150\\sqrt{3}$.

### Exercises

1. Find the side of a regular hexagon inscribed in a circle of radius $9$.
2. Find the side of a square inscribed in a circle of radius $6$.
3. Find the apothem of a regular hexagon with side $10$.
4. Find the radius of the circle circumscribed about an equilateral triangle with side $6$.
5. Find the area of a regular hexagon inscribed in a circle of radius $4$.
6. A regular polygon has perimeter $48$ and apothem $5$. Find its area.
7. Find the radius of the circle inscribed in a square with side $8$.
8. The side of a regular triangle is $a$. Express its apothem through $a$.

### Answers

1. $9$, since the side equals the radius.
2. $6\\sqrt{2}$.
3. $r = \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3}$.
4. $R = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$.
5. The side is $4$, the apothem $2\\sqrt{3}$, so $S = \\tfrac{1}{2}\\cdot 24\\cdot 2\\sqrt{3} = 24\\sqrt{3}$.
6. $S = \\tfrac{1}{2}\\cdot 48\\cdot 5 = 120$.
7. $4$, half the side.
8. $r = \\frac{a}{2\\tan 60^\\circ} = \\frac{a}{2\\sqrt{3}} = \\frac{a\\sqrt{3}}{6}$.`,
        hy: `## Երկու շրջանագիծ, մեկ կենտրոն

> Ցանկացած կանոնավոր բազմանկյան շուրջը կարելի է արտագծել մեկ շրջանագիծ, և նրա մեջ կարելի է ներգծել մեկ շրջանագիծ։ Երկու շրջանագծերն ունեն նույն կենտրոնը։

Այդ կենտրոնը **բազմանկյան կենտրոնն** է։ Արտագծած շրջանագծի $R$ շառավիղը հասնում է գագաթներին, ներգծած շրջանագծի $r$ շառավիղը հասնում է կողմերի միջնակետերին և կոչվում է **ապոթեմ**։

Կենտրոնը $n$ գագաթների հետ միացնելը բազմանկյունը բաժանում է $n$ հավասար հավասարասրուն եռանկյան։ Նրանցից ամեն մեկում կենտրոնի անկյունը $\\frac{360^\\circ}{n}$ է, իսկ ապոթեմը նրա բարձրությունն է։ Այս մեկ պատկերը տալիս է ներքևի բոլոր բանաձևերը։

## Բանաձևերը

Թող $a_n$-ը կանոնավոր $n$-անկյան կողմն է։ Կենտրոնի եռանկյան կեսն ուղղանկյուն եռանկյուն է՝ կենտրոնում $\\frac{180^\\circ}{n}$ անկյունով, նրա դիմաց $\\frac{a_n}{2}$ էջով, մյուս $r$ էջով և $R$ ներքնաձիգով։ Հետևաբար

> $$a_n = 2R\\sin\\frac{180^\\circ}{n}, \\qquad r = R\\cos\\frac{180^\\circ}{n}, \\qquad r = \\frac{a_n}{2\\tan\\frac{180^\\circ}{n}}.$$

| $n$ | $a_n$ | $r$ |
|---|---|---|
| $3$ | $R\\sqrt{3}$ | $\\frac{R}{2}$ |
| $4$ | $R\\sqrt{2}$ | $\\frac{R\\sqrt{2}}{2}$ |
| $6$ | $R$ | $\\frac{R\\sqrt{3}}{2}$ |

$n = 6$ տողն արժե հիշել. կանոնավոր վեցանկյան կողմը հավասար է շառավղին։

**Օրինակ 1.** Կանոնավոր վեցանկյունը ներգծված է $8$ շառավղով շրջանագծին։ Նրա կողմը $8$ է, ապոթեմը՝ $4\\sqrt{3} \\approx 6{,}93$։

**Օրինակ 2.** Քառակուսին ներգծված է $5$ շառավղով շրջանագծին։ Նրա կողմը $5\\sqrt{2} \\approx 7{,}07$ է, ապոթեմը՝ $\\frac{5\\sqrt{2}}{2} \\approx 3{,}54$։

**Օրինակ 3.** Կանոնավոր եռանկյան կողմը $12$ է։ Այդ դեպքում $R = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$ և $r = 2\\sqrt{3}$. հավասարակողմ եռանկյունում արտագծած շառավիղը ներգծածի կրկնապատիկն է, ինչը համաձայնվում է այն բանի հետ, որ կենտրոնն ամեն միջնագիծ բաժանում է $2 : 1$ հարաբերությամբ։

## Մակերեսը

$n$ հավասար եռանկյուններից ամեն մեկն ունի $a_n$ հիմք և $r$ բարձրություն, ուստի

> $$S = \\tfrac{1}{2}P r,$$
> որտեղ $P = na_n$-ը պարագիծն է։

Նույն բանաձևը ճիշտ է ներգծած շրջանագիծ ունեցող ցանկացած բազմանկյան համար, և արժե համեմատել շրջանի մակերեսի հետ, որը կստացվի $\\tfrac{1}{2}\\cdot 2\\pi R\\cdot R$։

**Օրինակ 4.** $6$ կողմով կանոնավոր վեցանկյունն ունի $36$ պարագիծ և $3\\sqrt{3}$ ապոթեմ, ուստի
$$S = \\tfrac{1}{2}\\cdot 36\\cdot 3\\sqrt{3} = 54\\sqrt{3}.$$
Սա համաձայնվում է $6$ կողմով վեց հավասարակողմ եռանկյան հետ։

**Օրինակ 5.** Կանոնավոր ութանկյունը ներգծված է $10$ շառավղով շրջանագծին։ Նրա կողմը $20\\sin 22{,}5^\\circ \\approx 7{,}65$ է, ապոթեմը՝ $10\\cos 22{,}5^\\circ \\approx 9{,}24$, ուստի մակերեսը մոտ $\\tfrac{1}{2}\\cdot 8\\cdot 7{,}65\\cdot 9{,}24 \\approx 283$ է։ $10$ շառավղով շրջանի մակերեսը մոտ $314$ է, ուստի ութանկյունն արդեն լցնում է նրա մոտ ինը տասներորդը։

**Օրինակ 6.** Կանոնավոր վեցանկյան ապոթեմը $5\\sqrt{3}$ է։ Այդ դեպքում $R = \\frac{r}{\\cos 30^\\circ} = \\frac{5\\sqrt{3}}{\\sqrt{3}/2} = 10$, կողմը $10$ է, իսկ մակերեսը՝ $\\tfrac{1}{2}\\cdot 60\\cdot 5\\sqrt{3} = 150\\sqrt{3}$։

### Վարժություններ

1. Գտեք $9$ շառավղով շրջանագծին ներգծած կանոնավոր վեցանկյան կողմը։
2. Գտեք $6$ շառավղով շրջանագծին ներգծած քառակուսու կողմը։
3. Գտեք $10$ կողմով կանոնավոր վեցանկյան ապոթեմը։
4. Գտեք $6$ կողմով հավասարակողմ եռանկյան շուրջն արտագծած շրջանագծի շառավիղը։
5. Գտեք $4$ շառավղով շրջանագծին ներգծած կանոնավոր վեցանկյան մակերեսը։
6. Կանոնավոր բազմանկյան պարագիծը $48$ է, ապոթեմը՝ $5$։ Գտեք նրա մակերեսը։
7. Գտեք $8$ կողմով քառակուսուն ներգծած շրջանագծի շառավիղը։
8. Կանոնավոր եռանկյան կողմը $a$ է։ Արտահայտեք նրա ապոթեմը $a$-ով։

### Պատասխաններ

1. $9$, քանի որ կողմը հավասար է շառավղին։
2. $6\\sqrt{2}$։
3. $r = \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3}$։
4. $R = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$։
5. Կողմը $4$ է, ապոթեմը՝ $2\\sqrt{3}$, ուստի $S = \\tfrac{1}{2}\\cdot 24\\cdot 2\\sqrt{3} = 24\\sqrt{3}$։
6. $S = \\tfrac{1}{2}\\cdot 48\\cdot 5 = 120$։
7. $4$՝ կողմի կեսը։
8. $r = \\frac{a}{2\\tan 60^\\circ} = \\frac{a}{2\\sqrt{3}} = \\frac{a\\sqrt{3}}{6}$։`,
        ru: `## Две окружности, один центр

> Около любого правильного многоугольника можно описать одну окружность, и в него можно вписать одну окружность. Обе окружности имеют один и тот же центр.

Этот центр называется **центром многоугольника**. Радиус $R$ описанной окружности доходит до вершин, радиус $r$ вписанной доходит до середин сторон и называется **апофемой**.

Соединив центр с $n$ вершинами, разбиваем многоугольник на $n$ равных равнобедренных треугольников. Угол при центре в каждом из них равен $\\frac{360^\\circ}{n}$, а апофема — его высота. Этот единственный чертёж даёт все формулы ниже.

## Формулы

Пусть $a_n$ — сторона правильного $n$-угольника. Половина треугольника при центре — прямоугольный треугольник с углом $\\frac{180^\\circ}{n}$ при центре, противолежащим катетом $\\frac{a_n}{2}$, другим катетом $r$ и гипотенузой $R$. Отсюда

> $$a_n = 2R\\sin\\frac{180^\\circ}{n}, \\qquad r = R\\cos\\frac{180^\\circ}{n}, \\qquad r = \\frac{a_n}{2\\tan\\frac{180^\\circ}{n}}.$$

| $n$ | $a_n$ | $r$ |
|---|---|---|
| $3$ | $R\\sqrt{3}$ | $\\frac{R}{2}$ |
| $4$ | $R\\sqrt{2}$ | $\\frac{R\\sqrt{2}}{2}$ |
| $6$ | $R$ | $\\frac{R\\sqrt{3}}{2}$ |

Строку $n = 6$ стоит запомнить: сторона правильного шестиугольника равна радиусу.

**Пример 1.** Правильный шестиугольник вписан в окружность радиуса $8$. Его сторона равна $8$, а апофема $4\\sqrt{3} \\approx 6{,}93$.

**Пример 2.** Квадрат вписан в окружность радиуса $5$. Его сторона равна $5\\sqrt{2} \\approx 7{,}07$, а апофема $\\frac{5\\sqrt{2}}{2} \\approx 3{,}54$.

**Пример 3.** Сторона правильного треугольника равна $12$. Тогда $R = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$ и $r = 2\\sqrt{3}$: в равностороннем треугольнике радиус описанной окружности вдвое больше радиуса вписанной, что согласуется с тем, что центр делит каждую медиану в отношении $2 : 1$.

## Площадь

Каждый из $n$ равных треугольников имеет основание $a_n$ и высоту $r$, поэтому

> $$S = \\tfrac{1}{2}P r,$$
> где $P = na_n$ — периметр.

Та же формула верна для любого многоугольника с вписанной окружностью, и её стоит сравнить с площадью круга, которая окажется равной $\\tfrac{1}{2}\\cdot 2\\pi R\\cdot R$.

**Пример 4.** Правильный шестиугольник со стороной $6$ имеет периметр $36$ и апофему $3\\sqrt{3}$, поэтому
$$S = \\tfrac{1}{2}\\cdot 36\\cdot 3\\sqrt{3} = 54\\sqrt{3}.$$
Это согласуется с шестью равносторонними треугольниками со стороной $6$.

**Пример 5.** Правильный восьмиугольник вписан в окружность радиуса $10$. Его сторона равна $20\\sin 22{,}5^\\circ \\approx 7{,}65$, апофема $10\\cos 22{,}5^\\circ \\approx 9{,}24$, поэтому площадь примерно $\\tfrac{1}{2}\\cdot 8\\cdot 7{,}65\\cdot 9{,}24 \\approx 283$. Круг радиуса $10$ имеет площадь около $314$, поэтому восьмиугольник уже занимает около девяти десятых от неё.

**Пример 6.** Апофема правильного шестиугольника равна $5\\sqrt{3}$. Тогда $R = \\frac{r}{\\cos 30^\\circ} = \\frac{5\\sqrt{3}}{\\sqrt{3}/2} = 10$, сторона равна $10$, а площадь $\\tfrac{1}{2}\\cdot 60\\cdot 5\\sqrt{3} = 150\\sqrt{3}$.

### Упражнения

1. Найдите сторону правильного шестиугольника, вписанного в окружность радиуса $9$.
2. Найдите сторону квадрата, вписанного в окружность радиуса $6$.
3. Найдите апофему правильного шестиугольника со стороной $10$.
4. Найдите радиус окружности, описанной около равностороннего треугольника со стороной $6$.
5. Найдите площадь правильного шестиугольника, вписанного в окружность радиуса $4$.
6. У правильного многоугольника периметр $48$ и апофема $5$. Найдите его площадь.
7. Найдите радиус окружности, вписанной в квадрат со стороной $8$.
8. Сторона правильного треугольника равна $a$. Выразите его апофему через $a$.

### Ответы

1. $9$, так как сторона равна радиусу.
2. $6\\sqrt{2}$.
3. $r = \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3}$.
4. $R = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$.
5. Сторона равна $4$, апофема $2\\sqrt{3}$, поэтому $S = \\tfrac{1}{2}\\cdot 24\\cdot 2\\sqrt{3} = 24\\sqrt{3}$.
6. $S = \\tfrac{1}{2}\\cdot 48\\cdot 5 = 120$.
7. $4$ — половина стороны.
8. $r = \\frac{a}{2\\tan 60^\\circ} = \\frac{a}{2\\sqrt{3}} = \\frac{a\\sqrt{3}}{6}$.`,
      },
      [
        q(t("Every regular polygon has", "Ամեն կանոնավոր բազմանկյուն ունի", "У каждого правильного многоугольника есть"), [
          t("both an inscribed and a circumscribed circle, with a common centre", "և ներգծած, և արտագծած շրջանագիծ՝ ընդհանուր կենտրոնով", "и вписанная, и описанная окружности с общим центром"),
          t("only a circumscribed circle", "միայն արտագծած շրջանագիծ", "только описанная окружность"),
          t("two circles with different centres", "երկու շրջանագիծ տարբեր կենտրոններով", "две окружности с разными центрами"),
        ], 0),
        q(t("The apothem of a regular polygon is", "Կանոնավոր բազմանկյան ապոթեմը", "Апофема правильного многоугольника —"), [
          t("the radius of the circumscribed circle", "արտագծած շրջանագծի շառավիղը", "радиус описанной окружности"),
          t("the radius of the inscribed circle", "ներգծած շրջանագծի շառավիղը", "радиус вписанной окружности"),
          t("half of the side", "կողմի կեսը", "половина стороны"),
        ], 1),
        q(t("Joining the centre to all the vertices of a regular n-gon gives", "Կանոնավոր n-անկյան կենտրոնը բոլոր գագաթների հետ միացնելը տալիս է", "Соединение центра со всеми вершинами правильного n-угольника даёт"), [
          t("n right triangles", "n ուղղանկյուն եռանկյուն", "n прямоугольных треугольников"),
          t("n - 2 triangles", "n - 2 եռանկյուն", "n - 2 треугольника"),
          t("n equal isosceles triangles", "n հավասար հավասարասրուն եռանկյուն", "n равных равнобедренных треугольников"),
        ], 2),
        q(t("The area of a regular polygon equals", "Կանոնավոր բազմանկյան մակերեսը հավասար է", "Площадь правильного многоугольника равна"), [
          t("half the perimeter times the apothem", "պարագծի կեսը բազմապատկած ապոթեմով", "половине периметра, умноженной на апофему"),
          t("the perimeter times the apothem", "պարագիծը բազմապատկած ապոթեմով", "периметру, умноженному на апофему"),
          t("half the side times the apothem", "կողմի կեսը բազմապատկած ապոթեմով", "половине стороны, умноженной на апофему"),
        ], 0),
        q(t("The side of a regular n-gon inscribed in a circle of radius R equals", "R շառավղով շրջանագծին ներգծած կանոնավոր n-անկյան կողմը հավասար է", "Сторона правильного n-угольника, вписанного в окружность радиуса R, равна"), [
          t("R times the sine of 360 degrees over n", "R բազմապատկած 360 աստիճան բաժանած n-ի սինուսով", "R, умноженному на синус 360 градусов, делённых на n"),
          t("2R times the sine of 180 degrees over n", "2R բազմապատկած 180 աստիճան բաժանած n-ի սինուսով", "2R, умноженному на синус 180 градусов, делённых на n"),
          t("2R times the cosine of 180 degrees over n", "2R բազմապատկած 180 աստիճան բաժանած n-ի կոսինուսով", "2R, умноженному на косинус 180 градусов, делённых на n"),
        ], 1),
        q(t("In an equilateral triangle the circumscribed radius compared with the inscribed one is", "Հավասարակողմ եռանկյունում արտագծած շառավիղը ներգծածի համեմատ", "В равностороннем треугольнике радиус описанной окружности по сравнению с вписанной"), [
          t("equal", "հավասար է", "равен"),
          t("three times as large", "երեք անգամ մեծ է", "в три раза больше"),
          t("twice as large", "երկու անգամ մեծ է", "в два раза больше"),
        ], 2),
      ],
    ),
    lesson(
      "circumference-arc",
      ["The length of a circle and of an arc", "Շրջանագծի և աղեղի երկարությունը", "Длина окружности и дуги"],
      {
        en: ["Know that the ratio of the circumference to the diameter is the same for all circles", "Use the formula C = 2 pi R", "Find the length of an arc of a given degree measure"],
        hy: ["Իմանալ, որ շրջանագծի երկարության և տրամագծի հարաբերությունը նույնն է բոլոր շրջանագծերի համար", "Կիրառել C = 2 պի R բանաձևը", "Գտնել տրված աստիճանային չափով աղեղի երկարությունը"],
        ru: ["Знать, что отношение длины окружности к диаметру одинаково для всех окружностей", "Применять формулу C = 2 пи R", "Находить длину дуги с данной градусной мерой"],
      },
      {
        en: `## The number pi

Inscribe a regular $n$-gon in a circle. As $n$ grows, its perimeter grows too and comes as close to the length of the circle as we like. That is how the length of a circle is defined: it is the limit of the perimeters of the inscribed regular polygons.

Because all circles are similar, this limit is proportional to the radius.

> The ratio of the length of a circle to its diameter is the same for every circle. It is denoted by $\\pi$:
> $$\\pi = \\frac{C}{2R} \\approx 3{.}14159.$$

The number $\\pi$ is not a fraction and not a root; its decimal expansion never repeats. For school work $\\pi \\approx 3{.}14$ is enough, and $\\frac{22}{7} \\approx 3{.}143$ is a good fraction to know.

> $$C = 2\\pi R = \\pi d.$$

**Example 1.** A circle of radius $5$ cm has length $10\\pi \\approx 31{.}4$ cm.

**Example 2.** A circle has length $18\\pi$. Then $R = 9$.

**Example 3.** A wheel of diameter $70$ cm makes $100$ turns. The distance travelled is $100\\pi\\cdot 0{.}7 \\approx 220$ m, since each turn advances the wheel by its circumference.

## The length of an arc

A full circle corresponds to $360^\\circ$. An arc of $\\alpha$ degrees is the same fraction of the circle, so its length is the same fraction of $C$:

> $$l = \\frac{\\pi R\\alpha}{180^\\circ}.$$

| Arc | Fraction of the circle | Length |
|---|---|---|
| $360^\\circ$ | $1$ | $2\\pi R$ |
| $180^\\circ$ | $\\frac{1}{2}$ | $\\pi R$ |
| $90^\\circ$ | $\\frac{1}{4}$ | $\\frac{\\pi R}{2}$ |
| $60^\\circ$ | $\\frac{1}{6}$ | $\\frac{\\pi R}{3}$ |

**Example 4.** The arc of $120^\\circ$ in a circle of radius $6$ has length $\\frac{\\pi\\cdot 6\\cdot 120}{180} = 4\\pi \\approx 12{.}6$.

**Example 5.** An arc of a circle of radius $10$ has length $5\\pi$. Its degree measure is found from $\\frac{\\pi\\cdot 10\\cdot\\alpha}{180} = 5\\pi$, which gives $\\alpha = 90^\\circ$.

**Example 6.** A rope is wound once round the Earth's equator and then lengthened by $1$ m and lifted to an equal height everywhere. How high does it rise? The length grows from $2\\pi R$ to $2\\pi R + 1 = 2\\pi(R + h)$, so $h = \\frac{1}{2\\pi} \\approx 0{.}16$ m. The answer does not depend on the radius at all, which is why the question is a famous puzzle.

### Exercises

1. Find the length of a circle of radius $7$, leaving $\\pi$ in the answer.
2. Find the radius of a circle of length $24\\pi$.
3. Find the length of a circle of diameter $10$ to one decimal place, with $\\pi \\approx 3{.}14$.
4. Find the length of the arc of $60^\\circ$ in a circle of radius $9$.
5. Find the length of the arc of $150^\\circ$ in a circle of radius $12$.
6. An arc of a circle of radius $4$ has length $2\\pi$. Find its degree measure.
7. A wheel of radius $35$ cm rolls $44$ m. How many turns does it make, with $\\pi \\approx \\frac{22}{7}$?
8. Two circles have radii $3$ and $5$. By how much is the second circle longer?

### Answers

1. $14\\pi$.
2. $R = 12$.
3. $31{.}4$.
4. $\\frac{\\pi\\cdot 9\\cdot 60}{180} = 3\\pi$.
5. $\\frac{\\pi\\cdot 12\\cdot 150}{180} = 10\\pi$.
6. $\\frac{\\pi\\cdot 4\\cdot\\alpha}{180} = 2\\pi$ gives $\\alpha = 90^\\circ$.
7. One turn is $2\\cdot\\frac{22}{7}\\cdot 0{.}35 = 2{.}2$ m, so the wheel makes $20$ turns.
8. $10\\pi - 6\\pi = 4\\pi \\approx 12{.}6$.`,
        hy: `## Պի թիվը

Շրջանագծին ներգծենք կանոնավոր $n$-անկյուն։ Երբ $n$-ը աճում է, նրա պարագիծն էլ աճում է և շրջանագծի երկարությանը մոտենում այնքան, որքան ուզենք։ Այսպես է սահմանվում շրջանագծի երկարությունը. դա ներգծած կանոնավոր բազմանկյունների պարագծերի սահմանն է։

Քանի որ բոլոր շրջանագծերը նման են, այս սահմանը համեմատական է շառավղին։

> Շրջանագծի երկարության և նրա տրամագծի հարաբերությունը նույնն է ամեն շրջանագծի համար։ Նա նշանակվում է $\\pi$՝
> $$\\pi = \\frac{C}{2R} \\approx 3{,}14159.$$

$\\pi$ թիվը կոտորակ չէ և արմատ չէ. նրա տասնորդական գրառումն երբեք չի կրկնվում։ Դպրոցական աշխատանքի համար $\\pi \\approx 3{,}14$-ը բավական է, իսկ $\\frac{22}{7} \\approx 3{,}143$-ը լավ կոտորակ է իմանալու համար։

> $$C = 2\\pi R = \\pi d.$$

**Օրինակ 1.** $5$ սմ շառավղով շրջանագծի երկարությունն է $10\\pi \\approx 31{,}4$ սմ։

**Օրինակ 2.** Շրջանագծի երկարությունը $18\\pi$ է։ Այդ դեպքում $R = 9$։

**Օրինակ 3.** $70$ սմ տրամագծով անիվը կատարում է $100$ պտույտ։ Անցած ճանապարհն է $100\\pi\\cdot 0{,}7 \\approx 220$ մ, քանի որ ամեն պտույտ անիվն առաջ է տանում իր երկարությամբ։

## Աղեղի երկարությունը

Լրիվ շրջանագիծը համապատասխանում է $360^\\circ$-ի։ $\\alpha$ աստիճանի աղեղը շրջանագծի նույն մասն է, ուստի նրա երկարությունը $C$-ի նույն մասն է՝

> $$l = \\frac{\\pi R\\alpha}{180^\\circ}.$$

| Աղեղը | Շրջանագծի մասը | Երկարությունը |
|---|---|---|
| $360^\\circ$ | $1$ | $2\\pi R$ |
| $180^\\circ$ | $\\frac{1}{2}$ | $\\pi R$ |
| $90^\\circ$ | $\\frac{1}{4}$ | $\\frac{\\pi R}{2}$ |
| $60^\\circ$ | $\\frac{1}{6}$ | $\\frac{\\pi R}{3}$ |

**Օրինակ 4.** $6$ շառավղով շրջանագծի $120^\\circ$ աղեղի երկարությունն է $\\frac{\\pi\\cdot 6\\cdot 120}{180} = 4\\pi \\approx 12{,}6$։

**Օրինակ 5.** $10$ շառավղով շրջանագծի աղեղի երկարությունը $5\\pi$ է։ Նրա աստիճանային չափը գտնվում է $\\frac{\\pi\\cdot 10\\cdot\\alpha}{180} = 5\\pi$-ից, ինչը տալիս է $\\alpha = 90^\\circ$։

**Օրինակ 6.** Պարանը մեկ անգամ փաթաթված է Երկրի հասարակածի շուրջը, ապա երկարացվում է $1$ մ-ով և ամենուրեք բարձրացվում հավասար բարձրության։ Ինչքա՞ն կբարձրանա։ Երկարությունն աճում է $2\\pi R$-ից մինչև $2\\pi R + 1 = 2\\pi(R + h)$, ուստի $h = \\frac{1}{2\\pi} \\approx 0{,}16$ մ։ Պատասխանը բոլորովին կախված չէ շառավղից, ահա թե ինչու այս հարցը հայտնի գլուխկոտրուկ է։

### Վարժություններ

1. Գտեք $7$ շառավղով շրջանագծի երկարությունը՝ պատասխանում թողնելով $\\pi$-ն։
2. Գտեք $24\\pi$ երկարությամբ շրջանագծի շառավիղը։
3. Գտեք $10$ տրամագծով շրջանագծի երկարությունը մեկ տասնորդական նշանով, երբ $\\pi \\approx 3{,}14$։
4. Գտեք $9$ շառավղով շրջանագծի $60^\\circ$ աղեղի երկարությունը։
5. Գտեք $12$ շառավղով շրջանագծի $150^\\circ$ աղեղի երկարությունը։
6. $4$ շառավղով շրջանագծի աղեղի երկարությունը $2\\pi$ է։ Գտեք նրա աստիճանային չափը։
7. $35$ սմ շառավղով անիվը գլորվում է $44$ մ։ Քանի՞ պտույտ է կատարում, երբ $\\pi \\approx \\frac{22}{7}$։
8. Երկու շրջանագծի շառավիղներն են $3$ և $5$։ Որքանո՞վ է երկրորդ շրջանագիծն ավելի երկար։

### Պատասխաններ

1. $14\\pi$։
2. $R = 12$։
3. $31{,}4$։
4. $\\frac{\\pi\\cdot 9\\cdot 60}{180} = 3\\pi$։
5. $\\frac{\\pi\\cdot 12\\cdot 150}{180} = 10\\pi$։
6. $\\frac{\\pi\\cdot 4\\cdot\\alpha}{180} = 2\\pi$-ը տալիս է $\\alpha = 90^\\circ$։
7. Մեկ պտույտն է $2\\cdot\\frac{22}{7}\\cdot 0{,}35 = 2{,}2$ մ, ուստի անիվը կատարում է $20$ պտույտ։
8. $10\\pi - 6\\pi = 4\\pi \\approx 12{,}6$։`,
        ru: `## Число пи

Впишем в окружность правильный $n$-угольник. При росте $n$ его периметр тоже растёт и приближается к длине окружности настолько, насколько мы хотим. Так и определяется длина окружности: это предел периметров вписанных правильных многоугольников.

Так как все окружности подобны, этот предел пропорционален радиусу.

> Отношение длины окружности к её диаметру одинаково для любой окружности. Оно обозначается $\\pi$:
> $$\\pi = \\frac{C}{2R} \\approx 3{,}14159.$$

Число $\\pi$ не является дробью и не является корнем: его десятичная запись никогда не повторяется. Для школьных задач достаточно $\\pi \\approx 3{,}14$, а $\\frac{22}{7} \\approx 3{,}143$ — удобная дробь, которую полезно помнить.

> $$C = 2\\pi R = \\pi d.$$

**Пример 1.** Окружность радиуса $5$ см имеет длину $10\\pi \\approx 31{,}4$ см.

**Пример 2.** Длина окружности равна $18\\pi$. Тогда $R = 9$.

**Пример 3.** Колесо диаметром $70$ см делает $100$ оборотов. Пройденный путь равен $100\\pi\\cdot 0{,}7 \\approx 220$ м, так как за каждый оборот колесо продвигается на свою длину.

## Длина дуги

Полная окружность отвечает $360^\\circ$. Дуга в $\\alpha$ градусов составляет ту же долю окружности, поэтому её длина составляет ту же долю от $C$:

> $$l = \\frac{\\pi R\\alpha}{180^\\circ}.$$

| Дуга | Доля окружности | Длина |
|---|---|---|
| $360^\\circ$ | $1$ | $2\\pi R$ |
| $180^\\circ$ | $\\frac{1}{2}$ | $\\pi R$ |
| $90^\\circ$ | $\\frac{1}{4}$ | $\\frac{\\pi R}{2}$ |
| $60^\\circ$ | $\\frac{1}{6}$ | $\\frac{\\pi R}{3}$ |

**Пример 4.** Дуга $120^\\circ$ в окружности радиуса $6$ имеет длину $\\frac{\\pi\\cdot 6\\cdot 120}{180} = 4\\pi \\approx 12{,}6$.

**Пример 5.** Дуга окружности радиуса $10$ имеет длину $5\\pi$. Её градусная мера находится из $\\frac{\\pi\\cdot 10\\cdot\\alpha}{180} = 5\\pi$, что даёт $\\alpha = 90^\\circ$.

**Пример 6.** Верёвку один раз обвили вокруг экватора Земли, затем удлинили на $1$ м и подняли везде на одинаковую высоту. На сколько она поднимется? Длина растёт с $2\\pi R$ до $2\\pi R + 1 = 2\\pi(R + h)$, поэтому $h = \\frac{1}{2\\pi} \\approx 0{,}16$ м. Ответ вовсе не зависит от радиуса, поэтому эта задача — известная головоломка.

### Упражнения

1. Найдите длину окружности радиуса $7$, оставив $\\pi$ в ответе.
2. Найдите радиус окружности длины $24\\pi$.
3. Найдите длину окружности диаметра $10$ с одним знаком после запятой при $\\pi \\approx 3{,}14$.
4. Найдите длину дуги $60^\\circ$ в окружности радиуса $9$.
5. Найдите длину дуги $150^\\circ$ в окружности радиуса $12$.
6. Дуга окружности радиуса $4$ имеет длину $2\\pi$. Найдите её градусную меру.
7. Колесо радиуса $35$ см прокатилось $44$ м. Сколько оборотов оно сделало при $\\pi \\approx \\frac{22}{7}$?
8. У двух окружностей радиусы $3$ и $5$. Насколько вторая окружность длиннее?

### Ответы

1. $14\\pi$.
2. $R = 12$.
3. $31{,}4$.
4. $\\frac{\\pi\\cdot 9\\cdot 60}{180} = 3\\pi$.
5. $\\frac{\\pi\\cdot 12\\cdot 150}{180} = 10\\pi$.
6. $\\frac{\\pi\\cdot 4\\cdot\\alpha}{180} = 2\\pi$ даёт $\\alpha = 90^\\circ$.
7. Один оборот равен $2\\cdot\\frac{22}{7}\\cdot 0{,}35 = 2{,}2$ м, поэтому колесо сделало $20$ оборотов.
8. $10\\pi - 6\\pi = 4\\pi \\approx 12{,}6$.`,
      },
      [
        q(t("The ratio of the length of a circle to its diameter", "Շրջանագծի երկարության և նրա տրամագծի հարաբերությունը", "Отношение длины окружности к её диаметру"), [
          t("is the same for all circles", "նույնն է բոլոր շրջանագծերի համար", "одинаково для всех окружностей"),
          t("grows with the radius", "աճում է շառավղի հետ", "растёт с радиусом"),
          t("decreases with the radius", "նվազում է շառավղի հետ", "убывает с радиусом"),
        ], 0),
        q(t("The length of a circle of radius R equals", "R շառավղով շրջանագծի երկարությունը հավասար է", "Длина окружности радиуса R равна"), [
          t("pi R", "պի R", "пи R"),
          t("2 pi R", "2 պի R", "2 пи R"),
          t("pi R squared", "պի R քառակուսի", "пи R в квадрате"),
        ], 1),
        q(t("The length of a circle is defined as the limit of", "Շրջանագծի երկարությունը սահմանվում է որպես սահման", "Длина окружности определяется как предел"), [
          t("the radii of the inscribed polygons", "ներգծած բազմանկյունների շառավիղների", "радиусов вписанных многоугольников"),
          t("the areas of the inscribed polygons", "ներգծած բազմանկյունների մակերեսների", "площадей вписанных многоугольников"),
          t("the perimeters of the inscribed regular polygons", "ներգծած կանոնավոր բազմանկյունների պարագծերի", "периметров вписанных правильных многоугольников"),
        ], 2),
        q(t("The length of an arc of 90 degrees equals", "90 աստիճան աղեղի երկարությունը հավասար է", "Длина дуги 90 градусов равна"), [
          t("one quarter of the length of the circle", "շրջանագծի երկարության մեկ քառորդին", "одной четверти длины окружности"),
          t("one half of the length of the circle", "շրջանագծի երկարության կեսին", "половине длины окружности"),
          t("one sixth of the length of the circle", "շրջանագծի երկարության մեկ վեցերորդին", "одной шестой длины окружности"),
        ], 0),
        q(t("The number pi is approximately equal to", "Պի թիվը մոտավորապես հավասար է", "Число пи приблизительно равно"), [
          t("2,72", "2,72", "2,72"),
          t("3,14", "3,14", "3,14"),
          t("1,41", "1,41", "1,41"),
        ], 1),
        q(t("If a rope round the equator is lengthened by one metre and lifted evenly, the height it rises", "Եթե հասարակածի շուրջը պարանն երկարացվի մեկ մետրով և հավասարաչափ բարձրացվի, բարձրությունը", "Если верёвку вокруг экватора удлинить на один метр и поднять равномерно, высота подъёма"), [
          t("is larger for a larger planet", "ավելի մեծ է ավելի մեծ մոլորակի համար", "больше для большей планеты"),
          t("is smaller for a larger planet", "ավելի փոքր է ավելի մեծ մոլորակի համար", "меньше для большей планеты"),
          t("does not depend on the size of the planet", "կախված չէ մոլորակի չափից", "не зависит от размера планеты"),
        ], 2),
      ],
    ),
    lesson(
      "circle-sector-area",
      ["The area of a disc, a sector and a segment", "Շրջանի, սեկտորի և սեգմենտի մակերեսը", "Площадь круга, сектора и сегмента"],
      {
        en: ["Use the formula for the area of a disc", "Find the area of a circular sector", "Find the area of a circular segment"],
        hy: ["Կիրառել շրջանի մակերեսի բանաձևը", "Գտնել շրջանային սեկտորի մակերեսը", "Գտնել շրջանային սեգմենտի մակերեսը"],
        ru: ["Применять формулу площади круга", "Находить площадь кругового сектора", "Находить площадь кругового сегмента"],
      },
      {
        en: `## The area of a disc

A **disc** is a circle together with the part of the plane inside it. Inscribe a regular $n$-gon, whose area is $\\tfrac{1}{2}P r$. As $n$ grows, $P$ tends to $2\\pi R$ and the apothem $r$ tends to $R$, so the area tends to $\\tfrac{1}{2}\\cdot 2\\pi R\\cdot R$:

> $$S = \\pi R^2.$$

**Example 1.** A disc of radius $6$ has area $36\\pi \\approx 113$.

**Example 2.** A disc has area $49\\pi$. Then $R = 7$ and the circle has length $14\\pi$.

**Example 3.** If the radius of a disc is doubled, the area grows four times, because the area depends on the square of the radius. Three times the radius gives nine times the area.

## The area of a sector

A **circular sector** is the part of a disc bounded by two radii and an arc. Its area is the same fraction of the disc as its arc is of the circle:

> $$S_{\\text{sector}} = \\frac{\\pi R^2\\alpha}{360^\\circ}.$$

| Arc | Area of the sector |
|---|---|
| $360^\\circ$ | $\\pi R^2$ |
| $180^\\circ$ | $\\frac{\\pi R^2}{2}$ |
| $90^\\circ$ | $\\frac{\\pi R^2}{4}$ |
| $60^\\circ$ | $\\frac{\\pi R^2}{6}$ |

**Example 4.** The sector of $120^\\circ$ in a disc of radius $3$ has area $\\frac{9\\pi\\cdot 120}{360} = 3\\pi$.

**Example 5.** A sector of a disc of radius $6$ has area $6\\pi$. Then $\\frac{36\\pi\\alpha}{360} = 6\\pi$, so $\\alpha = 60^\\circ$.

## The area of a segment

A **circular segment** is the part of a disc cut off by a chord. For an arc smaller than a semicircle, the segment is the sector minus the triangle built on the two radii:

> $$S_{\\text{segment}} = \\frac{\\pi R^2\\alpha}{360^\\circ} - \\tfrac{1}{2}R^2\\sin\\alpha.$$

If the arc is larger than a semicircle, the triangle is added instead of subtracted, or more simply the small segment is subtracted from the whole disc.

**Example 6.** In a disc of radius $4$ a chord cuts off an arc of $90^\\circ$. The sector has area $4\\pi$, the right triangle on the two radii has area $\\tfrac{1}{2}\\cdot 16 = 8$, so the smaller segment has area $4\\pi - 8 \\approx 4{.}57$. The larger segment has area $16\\pi - (4\\pi - 8) = 12\\pi + 8$.

**Example 7.** A goat is tied with a rope of length $5$ m to a corner of a straight fence. It can graze a half disc of radius $5$, that is $\\frac{25\\pi}{2} \\approx 39{.}3$ square metres. If instead it is tied to the outer corner of a square shed, it can graze three quarters of the disc.

### Exercises

1. Find the area of a disc of radius $10$, leaving $\\pi$ in the answer.
2. Find the radius of a disc of area $81\\pi$.
3. The radius of a disc is tripled. How many times does the area grow?
4. Find the area of the sector of $60^\\circ$ in a disc of radius $6$.
5. Find the area of the sector of $45^\\circ$ in a disc of radius $8$.
6. A sector of a disc of radius $10$ has area $25\\pi$. Find its angle.
7. In a disc of radius $2$ a chord cuts off an arc of $90^\\circ$. Find the area of the smaller segment.
8. Find the area of the ring between two circles with the same centre and radii $3$ and $5$.

### Answers

1. $100\\pi$.
2. $R = 9$.
3. Nine times.
4. $\\frac{36\\pi}{6} = 6\\pi$.
5. $\\frac{64\\pi}{8} = 8\\pi$.
6. $\\frac{100\\pi\\alpha}{360} = 25\\pi$ gives $\\alpha = 90^\\circ$.
7. $\\pi - 2$.
8. $25\\pi - 9\\pi = 16\\pi$.`,
        hy: `## Շրջանի մակերեսը

**Շրջանը** շրջանագիծն է նրա ներսի հարթության մասի հետ միասին։ Ներգծենք կանոնավոր $n$-անկյուն, որի մակերեսն է $\\tfrac{1}{2}P r$։ Երբ $n$-ը աճում է, $P$-ն ձգտում է $2\\pi R$-ի, իսկ $r$ ապոթեմը՝ $R$-ի, ուստի մակերեսը ձգտում է $\\tfrac{1}{2}\\cdot 2\\pi R\\cdot R$-ի՝

> $$S = \\pi R^2.$$

**Օրինակ 1.** $6$ շառավղով շրջանի մակերեսն է $36\\pi \\approx 113$։

**Օրինակ 2.** Շրջանի մակերեսը $49\\pi$ է։ Այդ դեպքում $R = 7$, իսկ շրջանագծի երկարությունը՝ $14\\pi$։

**Օրինակ 3.** Եթե շրջանի շառավիղը կրկնապատկվի, մակերեսն աճում է չորս անգամ, քանի որ մակերեսը կախված է շառավղի քառակուսուց։ Շառավղի եռապատիկը տալիս է մակերեսի ինըպատիկ։

## Սեկտորի մակերեսը

**Շրջանային սեկտորը** շրջանի այն մասն է, որը սահմանափակված է երկու շառավղով և աղեղով։ Նրա մակերեսը շրջանի նույն մասն է, ինչ նրա աղեղը՝ շրջանագծի՝

> $$S = \\frac{\\pi R^2\\alpha}{360^\\circ}.$$

| Աղեղը | Սեկտորի մակերեսը |
|---|---|
| $360^\\circ$ | $\\pi R^2$ |
| $180^\\circ$ | $\\frac{\\pi R^2}{2}$ |
| $90^\\circ$ | $\\frac{\\pi R^2}{4}$ |
| $60^\\circ$ | $\\frac{\\pi R^2}{6}$ |

**Օրինակ 4.** $3$ շառավղով շրջանի $120^\\circ$ սեկտորի մակերեսն է $\\frac{9\\pi\\cdot 120}{360} = 3\\pi$։

**Օրինակ 5.** $6$ շառավղով շրջանի սեկտորի մակերեսը $6\\pi$ է։ Այդ դեպքում $\\frac{36\\pi\\alpha}{360} = 6\\pi$, ուստի $\\alpha = 60^\\circ$։

## Սեգմենտի մակերեսը

**Շրջանային սեգմենտը** շրջանի այն մասն է, որը կտրում է լարը։ Կիսաշրջանագծից փոքր աղեղի դեպքում սեգմենտը սեկտորն է հանած երկու շառավղի վրա կառուցված եռանկյունը՝

> $$S = \\frac{\\pi R^2\\alpha}{360^\\circ} - \\tfrac{1}{2}R^2\\sin\\alpha.$$

Եթե աղեղը կիսաշրջանագծից մեծ է, եռանկյունը գումարվում է հանելու փոխարեն, կամ ավելի պարզ՝ փոքր սեգմենտը հանվում է ամբողջ շրջանից։

**Օրինակ 6.** $4$ շառավղով շրջանում լարը կտրում է $90^\\circ$ աղեղ։ Սեկտորի մակերեսն է $4\\pi$, երկու շառավղի վրա ուղղանկյուն եռանկյան մակերեսն է $\\tfrac{1}{2}\\cdot 16 = 8$, ուստի փոքր սեգմենտի մակերեսն է $4\\pi - 8 \\approx 4{,}57$։ Մեծ սեգմենտի մակերեսն է $16\\pi - (4\\pi - 8) = 12\\pi + 8$։

**Օրինակ 7.** Այծը $5$ մ պարանով կապված է ուղիղ ցանկապատի անկյունին։ Նա կարող է արածել $5$ շառավղով կիսաշրջան, այսինքն $\\frac{25\\pi}{2} \\approx 39{,}3$ քառակուսի մետր։ Եթե փոխարենը նա կապված է քառակուսի տնակի արտաքին անկյունին, կարող է արածել շրջանի երեք քառորդը։

### Վարժություններ

1. Գտեք $10$ շառավղով շրջանի մակերեսը՝ պատասխանում թողնելով $\\pi$-ն։
2. Գտեք $81\\pi$ մակերեսով շրջանի շառավիղը։
3. Շրջանի շառավիղն եռապատկվում է։ Քանի՞ անգամ աճում է մակերեսը։
4. Գտեք $6$ շառավղով շրջանի $60^\\circ$ սեկտորի մակերեսը։
5. Գտեք $8$ շառավղով շրջանի $45^\\circ$ սեկտորի մակերեսը։
6. $10$ շառավղով շրջանի սեկտորի մակերեսը $25\\pi$ է։ Գտեք նրա անկյունը։
7. $2$ շառավղով շրջանում լարը կտրում է $90^\\circ$ աղեղ։ Գտեք փոքր սեգմենտի մակերեսը։
8. Գտեք ընդհանուր կենտրոնով և $3$ ու $5$ շառավիղներով երկու շրջանագծերի միջև օղակի մակերեսը։

### Պատասխաններ

1. $100\\pi$։
2. $R = 9$։
3. Ինն անգամ։
4. $\\frac{36\\pi}{6} = 6\\pi$։
5. $\\frac{64\\pi}{8} = 8\\pi$։
6. $\\frac{100\\pi\\alpha}{360} = 25\\pi$-ը տալիս է $\\alpha = 90^\\circ$։
7. $\\pi - 2$։
8. $25\\pi - 9\\pi = 16\\pi$։`,
        ru: `## Площадь круга

**Круг** — это окружность вместе с частью плоскости внутри неё. Впишем правильный $n$-угольник, площадь которого равна $\\tfrac{1}{2}P r$. При росте $n$ периметр $P$ стремится к $2\\pi R$, а апофема $r$ стремится к $R$, поэтому площадь стремится к $\\tfrac{1}{2}\\cdot 2\\pi R\\cdot R$:

> $$S = \\pi R^2.$$

**Пример 1.** Круг радиуса $6$ имеет площадь $36\\pi \\approx 113$.

**Пример 2.** Площадь круга равна $49\\pi$. Тогда $R = 7$, а длина окружности равна $14\\pi$.

**Пример 3.** Если радиус круга удвоить, площадь вырастет в четыре раза, так как площадь зависит от квадрата радиуса. Трёхкратный радиус даёт девятикратную площадь.

## Площадь сектора

**Круговой сектор** — часть круга, ограниченная двумя радиусами и дугой. Его площадь составляет ту же долю круга, какую его дуга составляет от окружности:

> $$S = \\frac{\\pi R^2\\alpha}{360^\\circ}.$$

| Дуга | Площадь сектора |
|---|---|
| $360^\\circ$ | $\\pi R^2$ |
| $180^\\circ$ | $\\frac{\\pi R^2}{2}$ |
| $90^\\circ$ | $\\frac{\\pi R^2}{4}$ |
| $60^\\circ$ | $\\frac{\\pi R^2}{6}$ |

**Пример 4.** Сектор $120^\\circ$ в круге радиуса $3$ имеет площадь $\\frac{9\\pi\\cdot 120}{360} = 3\\pi$.

**Пример 5.** Площадь сектора круга радиуса $6$ равна $6\\pi$. Тогда $\\frac{36\\pi\\alpha}{360} = 6\\pi$, поэтому $\\alpha = 60^\\circ$.

## Площадь сегмента

**Круговой сегмент** — часть круга, отсекаемая хордой. Для дуги, меньшей полуокружности, сегмент — это сектор минус треугольник, построенный на двух радиусах:

> $$S = \\frac{\\pi R^2\\alpha}{360^\\circ} - \\tfrac{1}{2}R^2\\sin\\alpha.$$

Если дуга больше полуокружности, треугольник прибавляется вместо вычитания, или проще: малый сегмент вычитают из всего круга.

**Пример 6.** В круге радиуса $4$ хорда отсекает дугу $90^\\circ$. Площадь сектора равна $4\\pi$, площадь прямоугольного треугольника на двух радиусах равна $\\tfrac{1}{2}\\cdot 16 = 8$, поэтому площадь меньшего сегмента равна $4\\pi - 8 \\approx 4{,}57$. Площадь большего сегмента равна $16\\pi - (4\\pi - 8) = 12\\pi + 8$.

**Пример 7.** Козу привязали верёвкой длиной $5$ м к углу прямого забора. Она может пастись на половине круга радиуса $5$, то есть на $\\frac{25\\pi}{2} \\approx 39{,}3$ квадратного метра. Если же её привязать к наружному углу квадратного сарая, она сможет пастись на трёх четвертях круга.

### Упражнения

1. Найдите площадь круга радиуса $10$, оставив $\\pi$ в ответе.
2. Найдите радиус круга площади $81\\pi$.
3. Радиус круга увеличили втрое. Во сколько раз выросла площадь?
4. Найдите площадь сектора $60^\\circ$ в круге радиуса $6$.
5. Найдите площадь сектора $45^\\circ$ в круге радиуса $8$.
6. Площадь сектора круга радиуса $10$ равна $25\\pi$. Найдите его угол.
7. В круге радиуса $2$ хорда отсекает дугу $90^\\circ$. Найдите площадь меньшего сегмента.
8. Найдите площадь кольца между двумя окружностями с общим центром и радиусами $3$ и $5$.

### Ответы

1. $100\\pi$.
2. $R = 9$.
3. В девять раз.
4. $\\frac{36\\pi}{6} = 6\\pi$.
5. $\\frac{64\\pi}{8} = 8\\pi$.
6. $\\frac{100\\pi\\alpha}{360} = 25\\pi$ даёт $\\alpha = 90^\\circ$.
7. $\\pi - 2$.
8. $25\\pi - 9\\pi = 16\\pi$.`,
      },
      [
        q(t("The area of a disc of radius R equals", "R շառավղով շրջանի մակերեսը հավասար է", "Площадь круга радиуса R равна"), [
          t("pi R squared", "պի R քառակուսի", "пи R в квадрате"),
          t("2 pi R", "2 պի R", "2 пи R"),
          t("pi R", "պի R", "пи R"),
        ], 0),
        q(t("If the radius of a disc is doubled, its area", "Եթե շրջանի շառավիղը կրկնապատկվի, նրա մակերեսը", "Если радиус круга удвоить, его площадь"), [
          t("doubles", "կրկնապատկվում է", "удваивается"),
          t("grows four times", "աճում է չորս անգամ", "вырастает в четыре раза"),
          t("grows eight times", "աճում է ութ անգամ", "вырастает в восемь раз"),
        ], 1),
        q(t("A circular sector is bounded by", "Շրջանային սեկտորը սահմանափակված է", "Круговой сектор ограничен"), [
          t("a chord and an arc", "լարով և աղեղով", "хордой и дугой"),
          t("two chords", "երկու լարով", "двумя хордами"),
          t("two radii and an arc", "երկու շառավղով և աղեղով", "двумя радиусами и дугой"),
        ], 2),
        q(t("The area of the sector of 90 degrees equals", "90 աստիճան սեկտորի մակերեսը հավասար է", "Площадь сектора 90 градусов равна"), [
          t("one quarter of the area of the disc", "շրջանի մակերեսի մեկ քառորդին", "одной четверти площади круга"),
          t("one half of the area of the disc", "շրջանի մակերեսի կեսին", "половине площади круга"),
          t("one eighth of the area of the disc", "շրջանի մակերեսի մեկ ութերորդին", "одной восьмой площади круга"),
        ], 0),
        q(t("A circular segment is the part of a disc cut off by", "Շրջանային սեգմենտը շրջանի այն մասն է, որը կտրում է", "Круговой сегмент — часть круга, отсекаемая"), [
          t("a radius", "շառավիղը", "радиусом"),
          t("a chord", "լարը", "хордой"),
          t("a tangent", "շոշափողը", "касательной"),
        ], 1),
        q(t("The area of a small segment is found as the area of the sector", "Փոքր սեգմենտի մակերեսը գտնվում է որպես սեկտորի մակերեսը", "Площадь малого сегмента находится как площадь сектора"), [
          t("plus the area of the triangle on the two radii", "գումարած երկու շառավղի վրա եռանկյան մակերեսը", "плюс площадь треугольника на двух радиусах"),
          t("times the area of the triangle on the two radii", "բազմապատկած երկու շառավղի վրա եռանկյան մակերեսով", "умноженная на площадь треугольника на двух радиусах"),
          t("minus the area of the triangle on the two radii", "հանած երկու շառավղի վրա եռանկյան մակերեսը", "минус площадь треугольника на двух радиусах"),
        ], 2),
      ],
    ),
    lesson(
      "circle-area-problems",
      ["Problems on the circle and the disc", "Շրջանագծի և շրջանի խնդիրներ", "Задачи на окружность и круг"],
      {
        en: ["Find the areas of figures made of circular and polygonal pieces", "Compare a disc with the polygons inscribed in and circumscribed about it", "Solve applied problems with circles"],
        hy: ["Գտնել շրջանային և բազմանկյուն մասերից կազմված պատկերների մակերեսները", "Համեմատել շրջանը նրան ներգծած և արտագծած բազմանկյունների հետ", "Լուծել շրջանագծերի կիրառական խնդիրներ"],
        ru: ["Находить площади фигур, составленных из круговых и многоугольных частей", "Сравнивать круг с вписанными в него и описанными около него многоугольниками", "Решать прикладные задачи с окружностями"],
      },
      {
        en: `## Adding and subtracting pieces

Almost every problem of this unit is solved by one idea: cut the figure into pieces whose areas you know, then add or subtract. The pieces are discs, sectors, segments, triangles and rectangles.

**Example 1.** A ring is bounded by two circles with the same centre and radii $R$ and $r$. Its area is
$$\\pi R^2 - \\pi r^2 = \\pi(R - r)(R + r).$$
For $R = 8$ and $r = 6$ this is $\\pi\\cdot 2\\cdot 14 = 28\\pi$.

**Example 2.** A square of side $10$ has a disc inscribed in it. The area left outside the disc is
$$100 - 25\\pi \\approx 100 - 78{.}5 = 21{.}5,$$
so a little over a fifth of the square. The same question for a disc circumscribed about the square gives $50\\pi - 100 \\approx 57$.

**Example 3.** Four equal discs of radius $1$ are placed in the corners of a square of side $4$, each touching two sides. The area not covered is $16 - 4\\pi \\approx 3{.}4$.

## Inscribed and circumscribed

A disc sits between any polygon inscribed in it and any polygon circumscribed about it, so their areas bracket $\\pi R^2$. This is exactly how Archimedes estimated $\\pi$: with $96$-gons he showed that
$$3\\tfrac{10}{71} < \\pi < 3\\tfrac{1}{7}.$$

| Figure with $R = 1$ | Area |
|---|---|
| inscribed square | $2$ |
| inscribed regular hexagon | $\\approx 2{.}60$ |
| disc | $\\approx 3{.}14$ |
| circumscribed regular hexagon | $\\approx 3{.}46$ |
| circumscribed square | $4$ |

**Example 4.** A regular hexagon with side $a$ and the disc inscribed in it. The apothem is $\\frac{a\\sqrt{3}}{2}$, so the disc has area $\\frac{3\\pi a^2}{4}$, while the hexagon has area $\\frac{3a^2\\sqrt{3}}{2}$. The ratio is
$$\\frac{3\\pi a^2/4}{3a^2\\sqrt{3}/2} = \\frac{\\pi}{2\\sqrt{3}} \\approx 0{.}907,$$
so the inscribed disc fills about $91$ per cent of a regular hexagon. For a square the figure is only about $79$ per cent, which is one reason bees build hexagonal cells.

## Applied problems

**Example 5.** A circular flower bed of radius $3$ m is surrounded by a path $1$ m wide. The area of the path is
$$\\pi\\cdot 16 - \\pi\\cdot 9 = 7\\pi \\approx 22 \\text{ square metres}.$$

**Example 6.** A pizza of diameter $30$ cm is cut into $8$ equal sectors. Each piece has area $\\frac{\\pi\\cdot 225}{8} \\approx 88$ square centimetres, and its crust is an arc of length $\\frac{30\\pi}{8} \\approx 11{.}8$ cm.

**Example 7.** A minute hand of length $10$ cm sweeps the area $\\pi\\cdot 100 \\approx 314$ square centimetres in an hour, and a quarter of that, about $79$, in a quarter of an hour. Its tip travels $20\\pi \\approx 63$ cm in that hour.

### Exercises

1. Find the area of the ring between circles of radii $4$ and $7$.
2. A disc is inscribed in a square of side $6$. Find the area outside the disc.
3. A square is inscribed in a disc of radius $5$. Find the area of the disc outside the square.
4. A circular pond of radius $5$ m is surrounded by a path $2$ m wide. Find the area of the path.
5. A pizza of radius $20$ cm is cut into $6$ equal pieces. Find the area and the arc of one piece.
6. Find the ratio of the area of a disc to the area of the square circumscribed about it.
7. An equilateral triangle with side $6$ has a disc inscribed in it. Find the area of the disc.
8. The hour hand of a clock is $6$ cm long. What area does it sweep in $4$ hours?

### Answers

1. $49\\pi - 16\\pi = 33\\pi$.
2. $36 - 9\\pi \\approx 7{.}7$.
3. The square has side $5\\sqrt{2}$ and area $50$, so the answer is $25\\pi - 50 \\approx 28{.}5$.
4. $\\pi\\cdot 49 - \\pi\\cdot 25 = 24\\pi \\approx 75$ square metres.
5. Area $\\frac{400\\pi}{6} \\approx 209$ square centimetres, arc $\\frac{40\\pi}{6} \\approx 21$ cm.
6. $\\frac{\\pi R^2}{4R^2} = \\frac{\\pi}{4} \\approx 0{.}785$.
7. The apothem is $\\frac{6\\sqrt{3}}{6} = \\sqrt{3}$, so the area is $3\\pi$.
8. In $4$ hours the hand turns through $120^\\circ$, so it sweeps $\\frac{36\\pi\\cdot 120}{360} = 12\\pi \\approx 37{.}7$ square centimetres.`,
        hy: `## Մասերի գումարում և հանում

Այս գլխի գրեթե ամեն խնդիր լուծվում է մեկ գաղափարով. պատկերը բաժանել մասերի, որոնց մակերեսները գիտեք, ապա գումարել կամ հանել։ Մասերն են շրջաններ, սեկտորներ, սեգմենտներ, եռանկյուններ և ուղղանկյուններ։

**Օրինակ 1.** Օղակը սահմանափակված է ընդհանուր կենտրոնով և $R$ ու $r$ շառավիղներով երկու շրջանագծով։ Նրա մակերեսն է
$$\\pi R^2 - \\pi r^2 = \\pi(R - r)(R + r).$$
$R = 8$ և $r = 6$ դեպքում սա $\\pi\\cdot 2\\cdot 14 = 28\\pi$ է։

**Օրինակ 2.** $10$ կողմով քառակուսուն ներգծված է շրջան։ Շրջանից դուրս մնացած մակերեսն է
$$100 - 25\\pi \\approx 100 - 78{,}5 = 21{,}5,$$
այսինքն քառակուսու մի փոքր ավելի, քան հինգերորդը։ Նույն հարցը քառակուսու շուրջն արտագծած շրջանի համար տալիս է $50\\pi - 100 \\approx 57$։

**Օրինակ 3.** $1$ շառավղով չորս հավասար շրջան դրված են $4$ կողմով քառակուսու անկյուններում՝ ամեն մեկը շոշափելով երկու կողմ։ Չծածկված մակերեսն է $16 - 4\\pi \\approx 3{,}4$։

## Ներգծած և արտագծած

Շրջանը գտնվում է նրան ներգծած ցանկացած բազմանկյան և նրա շուրջն արտագծած ցանկացած բազմանկյան միջև, ուստի նրանց մակերեսները փակագծում են $\\pi R^2$-ը։ Հենց այսպես է Արքիմեդը գնահատել $\\pi$-ն. $96$-անկյուններով նա ցույց տվեց, որ
$$3\\tfrac{10}{71} < \\pi < 3\\tfrac{1}{7}.$$

| Պատկերը $R = 1$ դեպքում | Մակերեսը |
|---|---|
| ներգծած քառակուսի | $2$ |
| ներգծած կանոնավոր վեցանկյուն | $\\approx 2{,}60$ |
| շրջան | $\\approx 3{,}14$ |
| արտագծած կանոնավոր վեցանկյուն | $\\approx 3{,}46$ |
| արտագծած քառակուսի | $4$ |

**Օրինակ 4.** $a$ կողմով կանոնավոր վեցանկյունը և նրան ներգծած շրջանը։ Ապոթեմն է $\\frac{a\\sqrt{3}}{2}$, ուստի շրջանի մակերեսն է $\\frac{3\\pi a^2}{4}$, իսկ վեցանկյան մակերեսն է $\\frac{3a^2\\sqrt{3}}{2}$։ Հարաբերությունն է
$$\\frac{3\\pi a^2/4}{3a^2\\sqrt{3}/2} = \\frac{\\pi}{2\\sqrt{3}} \\approx 0{,}907,$$
ուստի ներգծած շրջանը լցնում է կանոնավոր վեցանկյան մոտ $91$ տոկոսը։ Քառակուսու համար թիվը միայն մոտ $79$ տոկոս է, ահա մեկ պատճառը, թե ինչու մեղուները կառուցում են վեցանկյուն բջիջներ։

## Կիրառական խնդիրներ

**Օրինակ 5.** $3$ մ շառավղով շրջանային ծաղկանոցը շրջապատված է $1$ մ լայնությամբ ճանապարհով։ Ճանապարհի մակերեսն է
$$\\pi\\cdot 16 - \\pi\\cdot 9 = 7\\pi \\approx 22$$
քառակուսի մետր։

**Օրինակ 6.** $30$ սմ տրամագծով պիցցան կտրված է $8$ հավասար սեկտորի։ Ամեն կտորի մակերեսն է $\\frac{\\pi\\cdot 225}{8} \\approx 88$ քառակուսի սանտիմետր, իսկ նրա եզրը $\\frac{30\\pi}{8} \\approx 11{,}8$ սմ երկարությամբ աղեղ է։

**Օրինակ 7.** $10$ սմ երկարությամբ րոպեի սլաքը մեկ ժամում ավլում է $\\pi\\cdot 100 \\approx 314$ քառակուսի սանտիմետր, իսկ քառորդ ժամում՝ դրա քառորդը՝ մոտ $79$։ Նրա ծայրն այդ ժամում անցնում է $20\\pi \\approx 63$ սմ։

### Վարժություններ

1. Գտեք $4$ և $7$ շառավիղներով շրջանագծերի միջև օղակի մակերեսը։
2. $6$ կողմով քառակուսուն ներգծված է շրջան։ Գտեք շրջանից դուրս մակերեսը։
3. $5$ շառավղով շրջանին ներգծված է քառակուսի։ Գտեք քառակուսուց դուրս շրջանի մակերեսը։
4. $5$ մ շառավղով շրջանային լճակը շրջապատված է $2$ մ լայնությամբ ճանապարհով։ Գտեք ճանապարհի մակերեսը։
5. $20$ սմ շառավղով պիցցան կտրված է $6$ հավասար կտորի։ Գտեք մեկ կտորի մակերեսը և աղեղը։
6. Գտեք շրջանի մակերեսի հարաբերությունը նրա շուրջն արտագծած քառակուսու մակերեսին։
7. $6$ կողմով հավասարակողմ եռանկյանը ներգծված է շրջան։ Գտեք շրջանի մակերեսը։
8. Ժամացույցի ժամի սլաքը $6$ սմ է։ Ի՞նչ մակերես է նա ավլում $4$ ժամում։

### Պատասխաններ

1. $49\\pi - 16\\pi = 33\\pi$։
2. $36 - 9\\pi \\approx 7{,}7$։
3. Քառակուսու կողմը $5\\sqrt{2}$ է, մակերեսը՝ $50$, ուստի պատասխանն է $25\\pi - 50 \\approx 28{,}5$։
4. $\\pi\\cdot 49 - \\pi\\cdot 25 = 24\\pi \\approx 75$ քառակուսի մետր։
5. Մակերեսը $\\frac{400\\pi}{6} \\approx 209$ քառակուսի սանտիմետր, աղեղը՝ $\\frac{40\\pi}{6} \\approx 21$ սմ։
6. $\\frac{\\pi R^2}{4R^2} = \\frac{\\pi}{4} \\approx 0{,}785$։
7. Ապոթեմն է $\\frac{6\\sqrt{3}}{6} = \\sqrt{3}$, ուստի մակերեսն է $3\\pi$։
8. $4$ ժամում սլաքը պտտվում է $120^\\circ$, ուստի ավլում է $\\frac{36\\pi\\cdot 120}{360} = 12\\pi \\approx 37{,}7$ քառակուսի սանտիմետր։`,
        ru: `## Сложение и вычитание частей

Почти каждая задача этой главы решается одной идеей: разрезать фигуру на части, площади которых известны, а затем сложить или вычесть. Части — это круги, секторы, сегменты, треугольники и прямоугольники.

**Пример 1.** Кольцо ограничено двумя окружностями с общим центром и радиусами $R$ и $r$. Его площадь равна
$$\\pi R^2 - \\pi r^2 = \\pi(R - r)(R + r).$$
При $R = 8$ и $r = 6$ это $\\pi\\cdot 2\\cdot 14 = 28\\pi$.

**Пример 2.** В квадрат со стороной $10$ вписан круг. Площадь, оставшаяся вне круга, равна
$$100 - 25\\pi \\approx 100 - 78{,}5 = 21{,}5,$$
то есть немного больше пятой части квадрата. Тот же вопрос для круга, описанного около квадрата, даёт $50\\pi - 100 \\approx 57$.

**Пример 3.** Четыре равных круга радиуса $1$ размещены в углах квадрата со стороной $4$, каждый касается двух сторон. Незакрытая площадь равна $16 - 4\\pi \\approx 3{,}4$.

## Вписанные и описанные

Круг лежит между любым вписанным в него многоугольником и любым описанным около него, поэтому их площади зажимают $\\pi R^2$. Именно так Архимед оценил $\\pi$: с помощью $96$-угольников он показал, что
$$3\\tfrac{10}{71} < \\pi < 3\\tfrac{1}{7}.$$

| Фигура при $R = 1$ | Площадь |
|---|---|
| вписанный квадрат | $2$ |
| вписанный правильный шестиугольник | $\\approx 2{,}60$ |
| круг | $\\approx 3{,}14$ |
| описанный правильный шестиугольник | $\\approx 3{,}46$ |
| описанный квадрат | $4$ |

**Пример 4.** Правильный шестиугольник со стороной $a$ и вписанный в него круг. Апофема равна $\\frac{a\\sqrt{3}}{2}$, поэтому площадь круга равна $\\frac{3\\pi a^2}{4}$, а площадь шестиугольника равна $\\frac{3a^2\\sqrt{3}}{2}$. Отношение равно
$$\\frac{3\\pi a^2/4}{3a^2\\sqrt{3}/2} = \\frac{\\pi}{2\\sqrt{3}} \\approx 0{,}907,$$
поэтому вписанный круг занимает около $91$ процента правильного шестиугольника. Для квадрата это лишь около $79$ процентов, и это одна из причин, по которым пчёлы строят шестиугольные ячейки.

## Прикладные задачи

**Пример 5.** Круглая клумба радиуса $3$ м окружена дорожкой шириной $1$ м. Площадь дорожки равна
$$\\pi\\cdot 16 - \\pi\\cdot 9 = 7\\pi \\approx 22$$
квадратных метра.

**Пример 6.** Пиццу диаметром $30$ см разрезали на $8$ равных секторов. Площадь каждого куска равна $\\frac{\\pi\\cdot 225}{8} \\approx 88$ квадратного сантиметра, а его край — дуга длиной $\\frac{30\\pi}{8} \\approx 11{,}8$ см.

**Пример 7.** Минутная стрелка длиной $10$ см за час обметает площадь $\\pi\\cdot 100 \\approx 314$ квадратных сантиметров, а за четверть часа — четверть этого, около $79$. Её конец проходит за этот час $20\\pi \\approx 63$ см.

### Упражнения

1. Найдите площадь кольца между окружностями радиусов $4$ и $7$.
2. В квадрат со стороной $6$ вписан круг. Найдите площадь вне круга.
3. В круг радиуса $5$ вписан квадрат. Найдите площадь круга вне квадрата.
4. Круглый пруд радиуса $5$ м окружён дорожкой шириной $2$ м. Найдите площадь дорожки.
5. Пиццу радиуса $20$ см разрезали на $6$ равных кусков. Найдите площадь и дугу одного куска.
6. Найдите отношение площади круга к площади описанного около него квадрата.
7. В равносторонний треугольник со стороной $6$ вписан круг. Найдите площадь круга.
8. Часовая стрелка длиной $6$ см. Какую площадь она обметает за $4$ часа?

### Ответы

1. $49\\pi - 16\\pi = 33\\pi$.
2. $36 - 9\\pi \\approx 7{,}7$.
3. Сторона квадрата равна $5\\sqrt{2}$, площадь $50$, поэтому ответ $25\\pi - 50 \\approx 28{,}5$.
4. $\\pi\\cdot 49 - \\pi\\cdot 25 = 24\\pi \\approx 75$ квадратных метров.
5. Площадь $\\frac{400\\pi}{6} \\approx 209$ квадратного сантиметра, дуга $\\frac{40\\pi}{6} \\approx 21$ см.
6. $\\frac{\\pi R^2}{4R^2} = \\frac{\\pi}{4} \\approx 0{,}785$.
7. Апофема равна $\\frac{6\\sqrt{3}}{6} = \\sqrt{3}$, поэтому площадь равна $3\\pi$.
8. За $4$ часа стрелка поворачивается на $120^\\circ$, поэтому обметает $\\frac{36\\pi\\cdot 120}{360} = 12\\pi \\approx 37{,}7$ квадратного сантиметра.`,
      },
      [
        q(t("The area of a ring between circles of radii R and r equals", "R և r շառավիղներով շրջանագծերի միջև օղակի մակերեսը հավասար է", "Площадь кольца между окружностями радиусов R и r равна"), [
          t("pi times R squared minus r squared", "պի բազմապատկած R քառակուսի հանած r քառակուսի", "пи, умноженному на R в квадрате минус r в квадрате"),
          t("pi times R minus r", "պի բազմապատկած R հանած r", "пи, умноженному на R минус r"),
          t("pi times R plus r", "պի բազմապատկած R գումարած r", "пи, умноженному на R плюс r"),
        ], 0),
        q(t("A disc inscribed in a square fills about", "Քառակուսուն ներգծած շրջանը լցնում է մոտ", "Круг, вписанный в квадрат, занимает около"), [
          t("50 per cent of it", "նրա 50 տոկոսը", "50 процентов его"),
          t("79 per cent of it", "նրա 79 տոկոսը", "79 процентов его"),
          t("95 per cent of it", "նրա 95 տոկոսը", "95 процентов его"),
        ], 1),
        q(t("Archimedes estimated pi by comparing the disc with", "Արքիմեդը գնահատել է պի-ն՝ շրջանը համեմատելով", "Архимед оценил пи, сравнивая круг с"), [
          t("other discs", "այլ շրջանների հետ", "другими кругами"),
          t("rectangles of equal area", "հավասար մակերեսի ուղղանկյունների հետ", "прямоугольниками равной площади"),
          t("inscribed and circumscribed regular polygons", "ներգծած և արտագծած կանոնավոր բազմանկյունների հետ", "вписанными и описанными правильными многоугольниками"),
        ], 2),
        q(t("A disc inscribed in a regular hexagon fills about", "Կանոնավոր վեցանկյանը ներգծած շրջանը լցնում է մոտ", "Круг, вписанный в правильный шестиугольник, занимает около"), [
          t("91 per cent of it", "նրա 91 տոկոսը", "91 процента его"),
          t("60 per cent of it", "նրա 60 տոկոսը", "60 процентов его"),
          t("100 per cent of it", "նրա 100 տոկոսը", "100 процентов его"),
        ], 0),
        q(t("A path of width 1 around a circular bed of radius 3 has area", "3 շառավղով շրջանային ծաղկանոցի շուրջ 1 լայնությամբ ճանապարհի մակերեսն է", "Дорожка шириной 1 вокруг круглой клумбы радиуса 3 имеет площадь"), [
          t("4 pi", "4 պի", "4 пи"),
          t("7 pi", "7 պի", "7 пи"),
          t("16 pi", "16 պի", "16 пи"),
        ], 1),
        q(t("The usual method in problems of this kind is to", "Այսպիսի խնդիրներում սովորական եղանակն է", "Обычный метод в таких задачах —"), [
          t("measure the figure with a ruler", "պատկերը չափել քանոնով", "измерить фигуру линейкой"),
          t("guess the answer and check it", "գուշակել պատասխանը և ստուգել", "угадать ответ и проверить его"),
          t("cut the figure into pieces with known areas and add or subtract", "պատկերը բաժանել հայտնի մակերեսով մասերի և գումարել կամ հանել", "разрезать фигуру на части с известными площадями и сложить или вычесть"),
        ], 2),
      ],
    ),
  ],
};
