import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Equations and inequalities in two variables", "Երկու անհայտով հավասարումներ և անհավասարումներ", "Уравнения и неравенства с двумя переменными"),
  summary: t("The graph of an equation in two variables, systems with a second-degree equation, word problems and inequalities in two variables.", "Երկու անհայտով հավասարման գրաֆիկը, երկրորդ աստիճանի հավասարում պարունակող համակարգեր, տեքստային խնդիրներ և երկու անհայտով անհավասարումներ։", "График уравнения с двумя переменными, системы с уравнением второй степени, текстовые задачи и неравенства с двумя переменными."),
  lessons: [
    lesson(
      "equation-graph-two-vars",
      ["The graph of an equation in two variables", "Երկու անհայտով հավասարման գրաֆիկը", "График уравнения с двумя переменными"],
      {
        en: ["Check whether a pair of numbers is a solution of an equation", "Recognise the graph of a line, a circle and a parabola from its equation", "Sketch the graph of a simple equation in two variables"],
        hy: ["Ստուգել՝ թվերի զույգը հավասարման լուծում է, թե ոչ", "Հավասարումից ճանաչել ուղղի, շրջանագծի և պարաբոլի գրաֆիկը", "Գծել երկու անհայտով պարզ հավասարման գրաֆիկը"],
        ru: ["Проверять, является ли пара чисел решением уравнения", "Узнавать по уравнению график прямой, окружности и параболы", "Строить график простого уравнения с двумя переменными"],
      },
      {
        en: `## Solutions are pairs

> A **solution** of an equation in two variables is a pair of numbers $(x; y)$ that turns the equation into a true equality.

**Example 1.** Is $(2; 3)$ a solution of $x^2 + y^2 = 13$? Substitute: $4 + 9 = 13$. Yes.
Is $(1; 3)$? Then $1 + 9 = 10 \\ne 13$. No.

An equation in two variables usually has infinitely many solutions, and all of them together form a curve.

> The **graph** of an equation in two variables is the set of all points of the plane whose coordinates are solutions of the equation.

## Graphs worth knowing by heart

| Equation | Graph |
|---|---|
| $ax + by = c$ | a straight line |
| $y = ax^2 + bx + c$ | a parabola |
| $(x - a)^2 + (y - b)^2 = r^2$ | a circle of radius $r$ with centre $(a; b)$ |
| $xy = k$ | a hyperbola |

**Example 2.** $x^2 + y^2 = 25$ is the circle of radius $5$ with centre at the origin. The points $(3; 4)$, $(-5; 0)$ and $(0; -5)$ lie on it.

**Example 3.** $(x - 1)^2 + (y + 2)^2 = 9$ is the circle of radius $3$ with centre $(1; -2)$.

**Example 4.** $x^2 + y^2 = -4$ has no graph at all: a sum of two squares cannot be negative.

## Bringing an equation to a known form

**Example 5.** $x^2 + y^2 - 6x + 4y - 12 = 0$. Complete the square in each variable:
$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4,$$
$$(x - 3)^2 + (y + 2)^2 = 25.$$
This is the circle of radius $5$ with centre $(3; -2)$.

**Example 6.** $2x + y = 6$ can be written as $y = -2x + 6$, a straight line through $(0; 6)$ and $(3; 0)$.

**Example 7.** $x^2 - y = 0$ means $y = x^2$, the usual parabola.

## Points on a graph

**Example 8.** Find $y$ if the point $(4; y)$ lies on the circle $x^2 + y^2 = 25$. Then $16 + y^2 = 25$, so $y = 3$ or $y = -3$: two such points.

### Exercises

1. Is $(1; 2)$ a solution of $3x + y = 5$?
2. Is $(-3; 4)$ a solution of $x^2 + y^2 = 25$?
3. Name the graph of $x^2 + y^2 = 36$ and its radius.
4. Name the centre and the radius of $(x + 2)^2 + (y - 5)^2 = 16$.
5. What is the graph of $y - x^2 = 0$?
6. What is the graph of $4x - y = 8$? Give two of its points.
7. Bring $x^2 + y^2 + 2x - 8y + 8 = 0$ to the standard form of a circle.
8. Find all $y$ for which $(0; y)$ lies on $x^2 + y^2 = 49$.

### Answers

1. Yes, $3 + 2 = 5$.
2. Yes, $9 + 16 = 25$.
3. A circle with centre at the origin, radius $6$.
4. Centre $(-2; 5)$, radius $4$.
5. The parabola $y = x^2$.
6. The line $y = 4x - 8$; for example $(0; -8)$ and $(2; 0)$.
7. $(x + 1)^2 + (y - 4)^2 = 9$.
8. $y = -7$ and $y = 7$.`,
        hy: `## Լուծումները զույգեր են

> Երկու անհայտով հավասարման **լուծում** է $(x; y)$ թվերի զույգը, որը հավասարումը դարձնում է ճիշտ հավասարություն։

**Օրինակ 1։** $(2; 3)$-ը $x^2 + y^2 = 13$-ի լուծո՞ւմ է։ Տեղադրենք՝ $4 + 9 = 13$։ Այո։
Իսկ $(1; 3)$-ը։ Այն ժամանակ $1 + 9 = 10 \\ne 13$։ Ոչ։

Երկու անհայտով հավասարումը սովորաբար ունի անվերջ շատ լուծում, և նրանք բոլորը միասին կազմում են կոր։

> Երկու անհայտով հավասարման **գրաֆիկ** է հարթության բոլոր այն կետերի բազմությունը, որոնց կոորդինատները հավասարման լուծումներ են։

## Գրաֆիկներ, որ արժե անգիր իմանալ

| Հավասարում | Գրաֆիկ |
|---|---|
| $ax + by = c$ | ուղիղ |
| $y = ax^2 + bx + c$ | պարաբոլ |
| $(x - a)^2 + (y - b)^2 = r^2$ | $r$ շառավղով շրջանագիծ՝ $(a; b)$ կենտրոնով |
| $xy = k$ | հիպերբոլ |

**Օրինակ 2։** $x^2 + y^2 = 25$-ը $5$ շառավղով շրջանագիծ է՝ կենտրոնը սկզբնակետում։ Նրա վրա գտնվում են $(3; 4)$, $(-5; 0)$ և $(0; -5)$ կետերը։

**Օրինակ 3։** $(x - 1)^2 + (y + 2)^2 = 9$-ը $3$ շառավղով շրջանագիծ է՝ $(1; -2)$ կենտրոնով։

**Օրինակ 4։** $x^2 + y^2 = -4$-ը գրաֆիկ ընդհանրապես չունի. երկու քառակուսիների գումարը չի կարող բացասական լինել։

## Հավասարումը բերել հայտնի տեսքի

**Օրինակ 5։** $x^2 + y^2 - 6x + 4y - 12 = 0$։ Ամեն փոփոխականի համար անջատենք լրիվ քառակուսի.
$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4,$$
$$(x - 3)^2 + (y + 2)^2 = 25.$$
Սա $5$ շառավղով շրջանագիծ է՝ $(3; -2)$ կենտրոնով։

**Օրինակ 6։** $2x + y = 6$-ը կարելի է գրել $y = -2x + 6$ տեսքով՝ ուղիղ, որն անցնում է $(0; 6)$ և $(3; 0)$ կետերով։

**Օրինակ 7։** $x^2 - y = 0$ նշանակում է $y = x^2$՝ սովորական պարաբոլը։

## Կետեր գրաֆիկի վրա

**Օրինակ 8։** Գտնենք $y$-ը, եթե $(4; y)$ կետը գտնվում է $x^2 + y^2 = 25$ շրջանագծի վրա։ Այն ժամանակ $16 + y^2 = 25$, ուստի $y = 3$ կամ $y = -3$. երկու այդպիսի կետ։

### Վարժություններ

1. $(1; 2)$-ը $3x + y = 5$-ի լուծո՞ւմ է։
2. $(-3; 4)$-ը $x^2 + y^2 = 25$-ի լուծո՞ւմ է։
3. Նշե՛ք $x^2 + y^2 = 36$-ի գրաֆիկը և նրա շառավիղը։
4. Նշե՛ք $(x + 2)^2 + (y - 5)^2 = 16$-ի կենտրոնը և շառավիղը։
5. Ո՞րն է $y - x^2 = 0$-ի գրաֆիկը։
6. Ո՞րն է $4x - y = 8$-ի գրաֆիկը։ Նշե՛ք նրա երկու կետ։
7. Բերե՛ք $x^2 + y^2 + 2x - 8y + 8 = 0$-ը շրջանագծի ստանդարտ տեսքի։
8. Գտե՛ք բոլոր $y$-երը, որոնց դեպքում $(0; y)$-ն գտնվում է $x^2 + y^2 = 49$-ի վրա։

### Պատասխաններ

1. Այո, $3 + 2 = 5$։
2. Այո, $9 + 16 = 25$։
3. Շրջանագիծ՝ կենտրոնը սկզբնակետում, շառավիղը $6$։
4. Կենտրոնը $(-2; 5)$, շառավիղը $4$։
5. $y = x^2$ պարաբոլը։
6. $y = 4x - 8$ ուղիղը; օրինակ՝ $(0; -8)$ և $(2; 0)$։
7. $(x + 1)^2 + (y - 4)^2 = 9$։
8. $y = -7$ և $y = 7$։`,
        ru: `## Решения — это пары

> **Решением** уравнения с двумя переменными называют пару чисел $(x; y)$, которая обращает уравнение в верное равенство.

**Пример 1.** Является ли $(2; 3)$ решением $x^2 + y^2 = 13$? Подставим: $4 + 9 = 13$. Да.
А $(1; 3)$? Тогда $1 + 9 = 10 \\ne 13$. Нет.

Уравнение с двумя переменными обычно имеет бесконечно много решений, и все вместе они образуют кривую.

> **Графиком** уравнения с двумя переменными называют множество всех точек плоскости, координаты которых являются решениями уравнения.

## Графики, которые стоит знать наизусть

| Уравнение | График |
|---|---|
| $ax + by = c$ | прямая |
| $y = ax^2 + bx + c$ | парабола |
| $(x - a)^2 + (y - b)^2 = r^2$ | окружность радиуса $r$ с центром $(a; b)$ |
| $xy = k$ | гипербола |

**Пример 2.** $x^2 + y^2 = 25$ — окружность радиуса $5$ с центром в начале координат. На ней лежат точки $(3; 4)$, $(-5; 0)$ и $(0; -5)$.

**Пример 3.** $(x - 1)^2 + (y + 2)^2 = 9$ — окружность радиуса $3$ с центром $(1; -2)$.

**Пример 4.** У $x^2 + y^2 = -4$ графика вообще нет: сумма двух квадратов не может быть отрицательной.

## Приведение уравнения к известному виду

**Пример 5.** $x^2 + y^2 - 6x + 4y - 12 = 0$. Выделим полный квадрат по каждой переменной:
$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4,$$
$$(x - 3)^2 + (y + 2)^2 = 25.$$
Это окружность радиуса $5$ с центром $(3; -2)$.

**Пример 6.** $2x + y = 6$ можно записать как $y = -2x + 6$ — прямая, проходящая через $(0; 6)$ и $(3; 0)$.

**Пример 7.** $x^2 - y = 0$ означает $y = x^2$ — обычная парабола.

## Точки на графике

**Пример 8.** Найдём $y$, если точка $(4; y)$ лежит на окружности $x^2 + y^2 = 25$. Тогда $16 + y^2 = 25$, значит $y = 3$ или $y = -3$: таких точек две.

### Упражнения

1. Является ли $(1; 2)$ решением $3x + y = 5$?
2. Является ли $(-3; 4)$ решением $x^2 + y^2 = 25$?
3. Назовите график $x^2 + y^2 = 36$ и его радиус.
4. Назовите центр и радиус $(x + 2)^2 + (y - 5)^2 = 16$.
5. Что является графиком $y - x^2 = 0$?
6. Что является графиком $4x - y = 8$? Укажите две его точки.
7. Приведите $x^2 + y^2 + 2x - 8y + 8 = 0$ к стандартному виду окружности.
8. Найдите все $y$, при которых $(0; y)$ лежит на $x^2 + y^2 = 49$.

### Ответы

1. Да, $3 + 2 = 5$.
2. Да, $9 + 16 = 25$.
3. Окружность с центром в начале координат, радиус $6$.
4. Центр $(-2; 5)$, радиус $4$.
5. Парабола $y = x^2$.
6. Прямая $y = 4x - 8$; например, $(0; -8)$ и $(2; 0)$.
7. $(x + 1)^2 + (y - 4)^2 = 9$.
8. $y = -7$ и $y = 7$.`,
      },
      [
        q(t("A solution of an equation in two variables is", "Երկու անհայտով հավասարման լուծումն է", "Решением уравнения с двумя переменными является"), [
          t("a pair of numbers that makes the equality true", "թվերի զույգ, որը հավասարությունը դարձնում է ճիշտ", "пара чисел, обращающая равенство в верное"),
          t("any number", "ցանկացած թիվ", "любое число"),
          t("the value of x only", "միայն x-ի արժեքը", "только значение x"),
        ], 0),
        q(t("The graph of the equation x² + y² = 36 is", "x² + y² = 36 հավասարման գրաֆիկն է", "График уравнения x² + y² = 36 —"), [
          t("a parabola", "պարաբոլ", "парабола"),
          t("a circle of radius 6", "6 շառավղով շրջանագիծ", "окружность радиуса 6"),
          t("a straight line", "ուղիղ", "прямая"),
        ], 1),
        q(t("The centre of the circle (x + 2)² + (y - 5)² = 16 is", "(x + 2)² + (y - 5)² = 16 շրջանագծի կենտրոնն է", "Центр окружности (x + 2)² + (y - 5)² = 16 —"), [
          t("(2; -5)", "(2; -5)", "(2; -5)"),
          t("(2; 5)", "(2; 5)", "(2; 5)"),
          t("(-2; 5)", "(-2; 5)", "(-2; 5)"),
        ], 2),
        q(t("The equation x² + y² = -4 has", "x² + y² = -4 հավասարումն ունի", "Уравнение x² + y² = -4 имеет"), [
          t("no graph at all", "ընդհանրապես գրաֆիկ չունի", "вообще не имеет графика"),
          t("a circle of radius 2 as its graph", "գրաֆիկ՝ 2 շառավղով շրջանագիծ", "графиком окружность радиуса 2"),
          t("a point as its graph", "գրաֆիկ՝ մեկ կետ", "графиком одну точку"),
        ], 0),
        q(t("The graph of the equation ax + by = c is", "ax + by = c հավասարման գրաֆիկն է", "График уравнения ax + by = c —"), [
          t("a circle", "շրջանագիծ", "окружность"),
          t("a straight line", "ուղիղ", "прямая"),
          t("a parabola", "պարաբոլ", "парабола"),
        ], 1),
        q(t("How many points of the circle x² + y² = 25 have abscissa 4?", "x² + y² = 25 շրջանագծի քանի՞ կետ ունի 4 աբսցիս", "Сколько точек окружности x² + y² = 25 имеют абсциссу 4?"), [
          t("none", "ոչ մեկ", "ни одной"),
          t("one", "մեկ", "одна"),
          t("two", "երկու", "две"),
        ], 2),
      ],
    ),
    lesson(
      "nonlinear-systems",
      ["Systems with a second-degree equation", "Երկրորդ աստիճանի հավասարում պարունակող համակարգեր", "Системы с уравнением второй степени"],
      {
        en: ["Solve such a system by substitution", "Use the graphs to tell how many solutions a system has", "Check each pair found in both equations"],
        hy: ["Լուծել այդպիսի համակարգը տեղադրման եղանակով", "Գրաֆիկներով որոշել՝ քանի լուծում ունի համակարգը", "Ստուգել գտնված ամեն զույգն երկու հավասարումներում"],
        ru: ["Решать такую систему способом подстановки", "По графикам определять, сколько решений имеет система", "Проверять каждую найденную пару в обоих уравнениях"],
      },
      {
        en: `## What a solution of a system is

> A **solution of a system** of two equations in two variables is a pair $(x; y)$ that satisfies **both** equations at once.

Graphically, the solutions are the common points of the two graphs. A line and a circle can have two common points, one, or none, so a system can have two solutions, one, or none.

## Substitution, step by step

1. from the simpler equation express one variable through the other;
2. put that expression into the second equation;
3. solve the equation in one variable that you get;
4. find the matching value of the other variable for each root;
5. write the answer as pairs and check them.

**Example 1.**
$$\\begin{cases} x - y = 1, \\\\ x^2 + y^2 = 25. \\end{cases}$$

From the first equation $x = y + 1$. Substitute:
$$(y + 1)^2 + y^2 = 25, \\qquad 2y^2 + 2y - 24 = 0, \\qquad y^2 + y - 12 = 0.$$
Then $y = 3$ or $y = -4$, so $x = 4$ or $x = -3$. The solutions are $(4; 3)$ and $(-3; -4)$. Geometrically the line meets the circle at two points.

**Example 2.**
$$\\begin{cases} y = x^2, \\\\ y = 3x + 4. \\end{cases}$$

Here $x^2 = 3x + 4$, that is $x^2 - 3x - 4 = 0$, so $x = 4$ or $x = -1$, and $y = 16$ or $y = 1$. The solutions are $(4; 16)$ and $(-1; 1)$: the line cuts the parabola twice.

**Example 3.**
$$\\begin{cases} xy = 12, \\\\ x + y = 7. \\end{cases}$$

From the second equation $y = 7 - x$, so $x(7 - x) = 12$, that is $x^2 - 7x + 12 = 0$, giving $x = 3$ and $x = 4$. The solutions are $(3; 4)$ and $(4; 3)$.

## When there is no solution

**Example 4.**
$$\\begin{cases} x^2 + y^2 = 4, \\\\ x + y = 10. \\end{cases}$$

Substituting $y = 10 - x$ gives $x^2 + (10 - x)^2 = 4$, that is $2x^2 - 20x + 96 = 0$, or $x^2 - 10x + 48 = 0$, where $D = 100 - 192 < 0$. There are no solutions: the line passes too far from the circle.

## Addition of the equations

Sometimes adding or subtracting is quicker.

**Example 5.**
$$\\begin{cases} x^2 + y^2 = 20, \\\\ x^2 - y^2 = 12. \\end{cases}$$

Adding gives $2x^2 = 32$, so $x^2 = 16$ and $x = \\pm 4$; subtracting gives $2y^2 = 8$, so $y = \\pm 2$. All four pairs satisfy both equations: $(4; 2)$, $(4; -2)$, $(-4; 2)$, $(-4; -2)$.

### Exercises

1. Solve the system $x + y = 5$, $xy = 6$.
2. Solve the system $y = 2x$, $x^2 + y^2 = 20$.
3. Solve the system $y - x = 2$, $y = x^2$.
4. Solve the system $x^2 + y^2 = 10$, $x - y = 4$.
5. Solve the system $x^2 + y^2 = 1$, $x + y = 5$.
6. Solve the system $x^2 + y^2 = 25$, $x^2 - y^2 = 7$.
7. How many common points have the line $y = 3$ and the circle $x^2 + y^2 = 9$?
8. For which $k$ does the line $y = k$ miss the parabola $y = x^2$?

### Answers

1. $(2; 3)$ and $(3; 2)$.
2. $(2; 4)$ and $(-2; -4)$.
3. $(2; 4)$ and $(-1; 1)$.
4. $(3; -1)$ and $(1; -3)$.
5. No solutions, since $D < 0$.
6. $(4; 3)$, $(4; -3)$, $(-4; 3)$, $(-4; -3)$.
7. One, the point $(0; 3)$.
8. For $k < 0$.`,
        hy: `## Ինչ է համակարգի լուծումը

> Երկու անհայտով երկու հավասարումների **համակարգի լուծում** է $(x; y)$ զույգը, որը բավարարում է **երկու** հավասարումներին միաժամանակ։

Գրաֆիկորեն լուծումներն երկու գրաֆիկների ընդհանուր կետերն են։ Ուղիղն ու շրջանագիծը կարող են ունենալ երկու ընդհանուր կետ, մեկ կամ ոչ մեկ, ուստի համակարգը կարող է ունենալ երկու լուծում, մեկ կամ ոչ մեկ։

## Տեղադրում՝ քայլ առ քայլ

1. ավելի պարզ հավասարումից մեկ փոփոխականն արտահայտել մյուսով;
2. այդ արտահայտությունը տեղադրել երկրորդ հավասարման մեջ;
3. լուծել ստացված մեկ անհայտով հավասարումը;
4. ամեն արմատի համար գտնել մյուս փոփոխականի համապատասխան արժեքը;
5. պատասխանը գրել զույգերով և ստուգել։

**Օրինակ 1։**
$$\\begin{cases} x - y = 1, \\\\ x^2 + y^2 = 25. \\end{cases}$$

Առաջին հավասարումից $x = y + 1$։ Տեղադրենք.
$$(y + 1)^2 + y^2 = 25, \\qquad 2y^2 + 2y - 24 = 0, \\qquad y^2 + y - 12 = 0.$$
Ապա $y = 3$ կամ $y = -4$, ուստի $x = 4$ կամ $x = -3$։ Լուծումներն են $(4; 3)$ և $(-3; -4)$։ Երկրաչափորեն ուղիղը շրջանագծին հատում է երկու կետում։

**Օրինակ 2։**
$$\\begin{cases} y = x^2, \\\\ y = 3x + 4. \\end{cases}$$

Այստեղ $x^2 = 3x + 4$, այսինքն՝ $x^2 - 3x - 4 = 0$, ուստի $x = 4$ կամ $x = -1$, և $y = 16$ կամ $y = 1$։ Լուծումներն են $(4; 16)$ և $(-1; 1)$. ուղիղը պարաբոլը հատում է երկու անգամ։

**Օրինակ 3։**
$$\\begin{cases} xy = 12, \\\\ x + y = 7. \\end{cases}$$

Երկրորդ հավասարումից $y = 7 - x$, ուստի $x(7 - x) = 12$, այսինքն՝ $x^2 - 7x + 12 = 0$, որը տալիս է $x = 3$ և $x = 4$։ Լուծումներն են $(3; 4)$ և $(4; 3)$։

## Երբ լուծում չկա

**Օրինակ 4։**
$$\\begin{cases} x^2 + y^2 = 4, \\\\ x + y = 10. \\end{cases}$$

$y = 10 - x$ տեղադրելը տալիս է $x^2 + (10 - x)^2 = 4$, այսինքն՝ $2x^2 - 20x + 96 = 0$, կամ $x^2 - 10x + 48 = 0$, որտեղ $D = 100 - 192 < 0$։ Լուծում չկա. ուղիղն անցնում է շրջանագծից շատ հեռու։

## Հավասարումների գումարում

Երբեմն գումարելը կամ հանելն ավելի արագ է։

**Օրինակ 5։**
$$\\begin{cases} x^2 + y^2 = 20, \\\\ x^2 - y^2 = 12. \\end{cases}$$

Գումարելը տալիս է $2x^2 = 32$, ուստի $x^2 = 16$ և $x = \\pm 4$; հանելը տալիս է $2y^2 = 8$, ուստի $y = \\pm 2$։ Բոլոր չորս զույգերը բավարարում են երկու հավասարումներին՝ $(4; 2)$, $(4; -2)$, $(-4; 2)$, $(-4; -2)$։

### Վարժություններ

1. Լուծե՛ք $x + y = 5$, $xy = 6$ համակարգը։
2. Լուծե՛ք $y = 2x$, $x^2 + y^2 = 20$ համակարգը։
3. Լուծե՛ք $y - x = 2$, $y = x^2$ համակարգը։
4. Լուծե՛ք $x^2 + y^2 = 10$, $x - y = 4$ համակարգը։
5. Լուծե՛ք $x^2 + y^2 = 1$, $x + y = 5$ համակարգը։
6. Լուծե՛ք $x^2 + y^2 = 25$, $x^2 - y^2 = 7$ համակարգը։
7. Քանի՞ ընդհանուր կետ ունեն $y = 3$ ուղիղը և $x^2 + y^2 = 9$ շրջանագիծը։
8. Ո՞ր $k$-երի դեպքում $y = k$ ուղիղը չի հատում $y = x^2$ պարաբոլը։

### Պատասխաններ

1. $(2; 3)$ և $(3; 2)$։
2. $(2; 4)$ և $(-2; -4)$։
3. $(2; 4)$ և $(-1; 1)$։
4. $(3; -1)$ և $(1; -3)$։
5. Լուծում չկա, քանի որ $D < 0$։
6. $(4; 3)$, $(4; -3)$, $(-4; 3)$, $(-4; -3)$։
7. Մեկ՝ $(0; 3)$ կետը։
8. $k < 0$ դեպքում։`,
        ru: `## Что такое решение системы

> **Решением системы** двух уравнений с двумя переменными называют пару $(x; y)$, которая удовлетворяет **обоим** уравнениям одновременно.

Графически решения — это общие точки двух графиков. Прямая и окружность могут иметь две общие точки, одну или ни одной, поэтому система может иметь два решения, одно или ни одного.

## Подстановка шаг за шагом

1. из более простого уравнения выразить одну переменную через другую;
2. подставить это выражение во второе уравнение;
3. решить полученное уравнение с одной переменной;
4. для каждого корня найти соответствующее значение другой переменной;
5. записать ответ парами и проверить их.

**Пример 1.**
$$\\begin{cases} x - y = 1, \\\\ x^2 + y^2 = 25. \\end{cases}$$

Из первого уравнения $x = y + 1$. Подставим:
$$(y + 1)^2 + y^2 = 25, \\qquad 2y^2 + 2y - 24 = 0, \\qquad y^2 + y - 12 = 0.$$
Тогда $y = 3$ или $y = -4$, значит $x = 4$ или $x = -3$. Решения: $(4; 3)$ и $(-3; -4)$. Геометрически прямая пересекает окружность в двух точках.

**Пример 2.**
$$\\begin{cases} y = x^2, \\\\ y = 3x + 4. \\end{cases}$$

Здесь $x^2 = 3x + 4$, то есть $x^2 - 3x - 4 = 0$, поэтому $x = 4$ или $x = -1$, и $y = 16$ или $y = 1$. Решения: $(4; 16)$ и $(-1; 1)$: прямая дважды пересекает параболу.

**Пример 3.**
$$\\begin{cases} xy = 12, \\\\ x + y = 7. \\end{cases}$$

Из второго уравнения $y = 7 - x$, поэтому $x(7 - x) = 12$, то есть $x^2 - 7x + 12 = 0$, откуда $x = 3$ и $x = 4$. Решения: $(3; 4)$ и $(4; 3)$.

## Когда решений нет

**Пример 4.**
$$\\begin{cases} x^2 + y^2 = 4, \\\\ x + y = 10. \\end{cases}$$

Подстановка $y = 10 - x$ даёт $x^2 + (10 - x)^2 = 4$, то есть $2x^2 - 20x + 96 = 0$, или $x^2 - 10x + 48 = 0$, где $D = 100 - 192 < 0$. Решений нет: прямая проходит слишком далеко от окружности.

## Сложение уравнений

Иногда быстрее сложить или вычесть уравнения.

**Пример 5.**
$$\\begin{cases} x^2 + y^2 = 20, \\\\ x^2 - y^2 = 12. \\end{cases}$$

Сложение даёт $2x^2 = 32$, значит $x^2 = 16$ и $x = \\pm 4$; вычитание даёт $2y^2 = 8$, значит $y = \\pm 2$. Все четыре пары удовлетворяют обоим уравнениям: $(4; 2)$, $(4; -2)$, $(-4; 2)$, $(-4; -2)$.

### Упражнения

1. Решите систему $x + y = 5$, $xy = 6$.
2. Решите систему $y = 2x$, $x^2 + y^2 = 20$.
3. Решите систему $y - x = 2$, $y = x^2$.
4. Решите систему $x^2 + y^2 = 10$, $x - y = 4$.
5. Решите систему $x^2 + y^2 = 1$, $x + y = 5$.
6. Решите систему $x^2 + y^2 = 25$, $x^2 - y^2 = 7$.
7. Сколько общих точек у прямой $y = 3$ и окружности $x^2 + y^2 = 9$?
8. При каких $k$ прямая $y = k$ не пересекает параболу $y = x^2$?

### Ответы

1. $(2; 3)$ и $(3; 2)$.
2. $(2; 4)$ и $(-2; -4)$.
3. $(2; 4)$ и $(-1; 1)$.
4. $(3; -1)$ и $(1; -3)$.
5. Решений нет, так как $D < 0$.
6. $(4; 3)$, $(4; -3)$, $(-4; 3)$, $(-4; -3)$.
7. Одна, точка $(0; 3)$.
8. При $k < 0$.`,
      },
      [
        q(t("A solution of a system in two variables must satisfy", "Երկու անհայտով համակարգի լուծումը պետք է բավարարի", "Решение системы с двумя переменными должно удовлетворять"), [
          t("both equations at once", "երկու հավասարումներին միաժամանակ", "обоим уравнениям одновременно"),
          t("the first equation only", "միայն առաջին հավասարմանը", "только первому уравнению"),
          t("either of the equations", "հավասարումներից որևէ մեկին", "любому из уравнений"),
        ], 0),
        q(t("Graphically, the solutions of a system are", "Գրաֆիկորեն համակարգի լուծումներն են", "Графически решения системы — это"), [
          t("the vertices of the graphs", "գրաֆիկների գագաթները", "вершины графиков"),
          t("the common points of the two graphs", "երկու գրաֆիկների ընդհանուր կետերը", "общие точки двух графиков"),
          t("the zeros of the first equation", "առաջին հավասարման զրոները", "нули первого уравнения"),
        ], 1),
        q(t("The system x + y = 5, xy = 6 has the solutions", "x + y = 5, xy = 6 համակարգն ունի լուծումներ", "Система x + y = 5, xy = 6 имеет решения"), [
          t("(1; 6) and (6; 1)", "(1; 6) և (6; 1)", "(1; 6) и (6; 1)"),
          t("(5; 6) only", "միայն (5; 6)", "только (5; 6)"),
          t("(2; 3) and (3; 2)", "(2; 3) և (3; 2)", "(2; 3) и (3; 2)"),
        ], 2),
        q(t("The system x² + y² = 1, x + y = 5 has", "x² + y² = 1, x + y = 5 համակարգն ունի", "Система x² + y² = 1, x + y = 5 имеет"), [
          t("no solutions", "ոչ մի լուծում", "ни одного решения"),
          t("one solution", "մեկ լուծում", "одно решение"),
          t("two solutions", "երկու լուծում", "два решения"),
        ], 0),
        q(t("How many common points have the line y = 3 and the circle x² + y² = 9?", "Քանի՞ ընդհանուր կետ ունեն y = 3 ուղիղը և x² + y² = 9 շրջանագիծը", "Сколько общих точек у прямой y = 3 и окружности x² + y² = 9?"), [
          t("two", "երկու", "две"),
          t("one", "մեկ", "одна"),
          t("none", "ոչ մեկ", "ни одной"),
        ], 1),
        q(t("The system x² + y² = 20, x² - y² = 12 has", "x² + y² = 20, x² - y² = 12 համակարգն ունի", "Система x² + y² = 20, x² - y² = 12 имеет"), [
          t("one solution", "մեկ լուծում", "одно решение"),
          t("two solutions", "երկու լուծում", "два решения"),
          t("four solutions", "չորս լուծում", "четыре решения"),
        ], 2),
      ],
    ),
    lesson(
      "nonlinear-system-problems",
      ["Word problems solved with systems", "Տեքստային խնդիրներ՝ համակարգերի օգնությամբ", "Текстовые задачи, решаемые системами"],
      {
        en: ["Introduce two unknowns and write two equations", "Solve problems on numbers, on area and on motion", "Reject the solutions that do not fit the sense of the problem"],
        hy: ["Մտցնել երկու անհայտ և գրել երկու հավասարում", "Լուծել թվերի, մակերեսի և շարժման խնդիրներ", "Մերժել այն լուծումները, որոնք չեն համապատասխանում խնդրի իմաստին"],
        ru: ["Вводить два неизвестных и записывать два уравнения", "Решать задачи на числа, площадь и движение", "Отбрасывать решения, не подходящие по смыслу задачи"],
      },
      {
        en: `## The plan of a solution

1. say clearly what the letters mean and in what units;
2. write one equation for each condition of the problem;
3. solve the system;
4. check every pair against the sense of the problem, not only against the equations;
5. answer the question that was asked.

The fourth step matters most. A length, a speed or a number of pupils cannot be negative, so some correct roots of the system are still not answers.

## Numbers

**Example 1.** The sum of two numbers is $13$ and the sum of their squares is $85$. Find the numbers.

$$\\begin{cases} x + y = 13, \\\\ x^2 + y^2 = 85. \\end{cases}$$

From the first, $y = 13 - x$, so $x^2 + (13 - x)^2 = 85$, that is $2x^2 - 26x + 84 = 0$, or $x^2 - 13x + 42 = 0$. Then $x = 6$ or $x = 7$. The numbers are $6$ and $7$.

**Example 2.** The product of two numbers is $-24$ and their difference is $10$. Find them.

$$\\begin{cases} xy = -24, \\\\ x - y = 10. \\end{cases}$$

Here $x = y + 10$, so $y^2 + 10y + 24 = 0$, giving $y = -4$ or $y = -6$. The pairs are $(6; -4)$ and $(4; -6)$. Both fit.

## Area and perimeter

**Example 3.** A rectangle has perimeter $34$ cm and area $70$ cm². Find its sides.

With sides $x$ and $y$ in centimetres:
$$\\begin{cases} 2(x + y) = 34, \\\\ xy = 70, \\end{cases} \\qquad \\begin{cases} x + y = 17, \\\\ xy = 70. \\end{cases}$$
Then $x(17 - x) = 70$, that is $x^2 - 17x + 70 = 0$, so $x = 7$ or $x = 10$. The sides are $7$ cm and $10$ cm.

**Example 4.** The diagonal of a rectangle is $13$ cm and its area is $60$ cm². Find the sides.

$$\\begin{cases} x^2 + y^2 = 169, \\\\ xy = 60. \\end{cases}$$
Then $(x + y)^2 = 169 + 120 = 289$, so $x + y = 17$ (the negative value is rejected, as sides are positive). With $xy = 60$ this gives $x^2 - 17x + 60 = 0$, so the sides are $5$ cm and $12$ cm.

## Motion and work

**Example 5.** A car covers $240$ km. If its speed were $20$ km/h greater, the trip would take one hour less. Find the speed.

Let the speed be $v$ km/h and the time $t$ hours:
$$\\begin{cases} vt = 240, \\\\ (v + 20)(t - 1) = 240. \\end{cases}$$
Expanding the second equation and using $vt = 240$ gives $v = 20t - 20$. Then $20t^2 - 20t - 240 = 0$, that is $t^2 - t - 12 = 0$, so $t = 4$. The speed is $60$ km/h.

**Example 6.** Two workers together finish a job in $6$ days. Alone the first needs $5$ days fewer than the second. How long does each need?

With $x$ and $y$ days:
$$\\begin{cases} \\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{6}, \\\\ y = x + 5. \\end{cases}$$
So $6(x + 5) + 6x = x(x + 5)$, that is $x^2 - 7x - 30 = 0$, giving $x = 10$ or $x = -3$. Days cannot be negative, so the first needs $10$ days and the second $15$ days.

### Exercises

1. The sum of two numbers is $9$ and their product is $20$. Find them.
2. The difference of two numbers is $3$ and the sum of their squares is $29$. Find them.
3. A rectangle has perimeter $26$ m and area $40$ m². Find its sides.
4. The diagonal of a rectangle is $10$ cm and the area is $48$ cm². Find the sides.
5. The sum of two numbers is $12$ and the sum of their squares is $74$. Find them.
6. A square's side is increased by $3$ cm and its area grows by $39$ cm². Find the original side.
7. Two pipes fill a tank in $12$ hours together; alone the first needs $10$ hours fewer than the second. Find both times.
8. The product of two consecutive natural numbers is $156$. Find them.

### Answers

1. $4$ and $5$.
2. $2$ and $5$, or $-5$ and $-2$.
3. $5$ m and $8$ m.
4. $6$ cm and $8$ cm.
5. $5$ and $7$.
6. $5$ cm, from $(x + 3)^2 - x^2 = 39$.
7. $20$ hours and $30$ hours.
8. $12$ and $13$.`,
        hy: `## Լուծման պլանը

1. հստակ ասել՝ ինչ են նշանակում տառերը և ինչ միավորներով;
2. խնդրի ամեն պայմանի համար գրել մեկ հավասարում;
3. լուծել համակարգը;
4. ամեն զույգ ստուգել խնդրի իմաստով, ոչ միայն հավասարումներով;
5. պատասխանել տրված հարցին։

Չորրորդ քայլն ամենակարևորն է։ Երկարությունը, արագությունը կամ աշակերտների թիվը չեն կարող բացասական լինել, ուստի համակարգի որոշ ճիշտ արմատներ, այնուամենայնիվ, պատասխան չեն։

## Թվեր

**Օրինակ 1։** Երկու թվերի գումարը $13$ է, իսկ նրանց քառակուսիների գումարը՝ $85$։ Գտե՛ք թվերը։

$$\\begin{cases} x + y = 13, \\\\ x^2 + y^2 = 85. \\end{cases}$$

Առաջինից $y = 13 - x$, ուստի $x^2 + (13 - x)^2 = 85$, այսինքն՝ $2x^2 - 26x + 84 = 0$, կամ $x^2 - 13x + 42 = 0$։ Ապա $x = 6$ կամ $x = 7$։ Թվերը $6$-ն ու $7$-ն են։

**Օրինակ 2։** Երկու թվերի արտադրյալը $-24$ է, իսկ նրանց տարբերությունը՝ $10$։ Գտե՛ք նրանք։

$$\\begin{cases} xy = -24, \\\\ x - y = 10. \\end{cases}$$

Այստեղ $x = y + 10$, ուստի $y^2 + 10y + 24 = 0$, որը տալիս է $y = -4$ կամ $y = -6$։ Զույգերն են $(6; -4)$ և $(4; -6)$։ Երկուսն էլ հարմար են։

## Մակերես և պարագիծ

**Օրինակ 3։** Ուղղանկյան պարագիծը $34$ սմ է, մակերեսը՝ $70$ սմ²։ Գտե՛ք նրա կողմերը։

$x$ և $y$ կողմերով, սանտիմետրերով.
$$\\begin{cases} 2(x + y) = 34, \\\\ xy = 70, \\end{cases} \\qquad \\begin{cases} x + y = 17, \\\\ xy = 70. \\end{cases}$$
Ապա $x(17 - x) = 70$, այսինքն՝ $x^2 - 17x + 70 = 0$, ուստի $x = 7$ կամ $x = 10$։ Կողմերը $7$ սմ և $10$ սմ են։

**Օրինակ 4։** Ուղղանկյան անկյունագիծը $13$ սմ է, մակերեսը՝ $60$ սմ²։ Գտե՛ք կողմերը։

$$\\begin{cases} x^2 + y^2 = 169, \\\\ xy = 60. \\end{cases}$$
Ապա $(x + y)^2 = 169 + 120 = 289$, ուստի $x + y = 17$ (բացասական արժեքը մերժվում է, քանի որ կողմերը դրական են)։ $xy = 60$-ի հետ միասին սա տալիս է $x^2 - 17x + 60 = 0$, ուստի կողմերը $5$ սմ և $12$ սմ են։

## Շարժում և աշխատանք

**Օրինակ 5։** Ավտոմեքենան անցնում է $240$ կմ։ Եթե նրա արագությունը $20$ կմ/ժ ավելի լիներ, ճանապարհը մեկ ժամով պակաս կտևեր։ Գտե՛ք արագությունը։

Թող արագությունը լինի $v$ կմ/ժ, իսկ ժամանակը՝ $t$ ժամ.
$$\\begin{cases} vt = 240, \\\\ (v + 20)(t - 1) = 240. \\end{cases}$$
Երկրորդ հավասարումը բացելով և $vt = 240$-ն օգտագործելով ստանում ենք $v = 20t - 20$։ Ապա $20t^2 - 20t - 240 = 0$, այսինքն՝ $t^2 - t - 12 = 0$, ուստի $t = 4$։ Արագությունը $60$ կմ/ժ է։

**Օրինակ 6։** Երկու աշխատողը միասին աշխատանքն ավարտում են $6$ օրում։ Մեկ-մեկ առաջինին պետք է $5$ օր պակաս, քան երկրորդին։ Որքա՞ն ժամանակ է պետք յուրաքանչյուրին։

$x$ և $y$ օրերով.
$$\\begin{cases} \\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{6}, \\\\ y = x + 5. \\end{cases}$$
Ուստի $6(x + 5) + 6x = x(x + 5)$, այսինքն՝ $x^2 - 7x - 30 = 0$, որը տալիս է $x = 10$ կամ $x = -3$։ Օրերը բացասական չեն կարող լինել, ուստի առաջինին պետք է $10$ օր, երկրորդին՝ $15$ օր։

### Վարժություններ

1. Երկու թվերի գումարը $9$ է, արտադրյալը՝ $20$։ Գտե՛ք նրանք։
2. Երկու թվերի տարբերությունը $3$ է, քառակուսիների գումարը՝ $29$։ Գտե՛ք նրանք։
3. Ուղղանկյան պարագիծը $26$ մ է, մակերեսը՝ $40$ մ²։ Գտե՛ք կողմերը։
4. Ուղղանկյան անկյունագիծը $10$ սմ է, մակերեսը՝ $48$ սմ²։ Գտե՛ք կողմերը։
5. Երկու թվերի գումարը $12$ է, քառակուսիների գումարը՝ $74$։ Գտե՛ք նրանք։
6. Քառակուսու կողմը մեծացրել են $3$ սմ-ով, և մակերեսն աճել է $39$ սմ²-ով։ Գտե՛ք սկզբնական կողմը։
7. Երկու խողովակը միասին ջրամբարը լցնում են $12$ ժամում; մեկ-մեկ առաջինին պետք է $10$ ժամ պակաս, քան երկրորդին։ Գտե՛ք երկու ժամանակը։
8. Երկու հաջորդական բնական թվերի արտադրյալը $156$ է։ Գտե՛ք նրանք։

### Պատասխաններ

1. $4$ և $5$։
2. $2$ և $5$, կամ $-5$ և $-2$։
3. $5$ մ և $8$ մ։
4. $6$ սմ և $8$ սմ։
5. $5$ և $7$։
6. $5$ սմ, $(x + 3)^2 - x^2 = 39$-ից։
7. $20$ ժամ և $30$ ժամ։
8. $12$ և $13$։`,
        ru: `## План решения

1. ясно сказать, что означают буквы и в каких единицах;
2. записать по одному уравнению на каждое условие задачи;
3. решить систему;
4. проверить каждую пару по смыслу задачи, а не только по уравнениям;
5. ответить на поставленный вопрос.

Четвёртый шаг самый важный. Длина, скорость или число учеников не могут быть отрицательными, поэтому некоторые верные корни системы ответом всё же не являются.

## Числа

**Пример 1.** Сумма двух чисел равна $13$, а сумма их квадратов равна $85$. Найдите числа.

$$\\begin{cases} x + y = 13, \\\\ x^2 + y^2 = 85. \\end{cases}$$

Из первого $y = 13 - x$, поэтому $x^2 + (13 - x)^2 = 85$, то есть $2x^2 - 26x + 84 = 0$, или $x^2 - 13x + 42 = 0$. Тогда $x = 6$ или $x = 7$. Числа $6$ и $7$.

**Пример 2.** Произведение двух чисел равно $-24$, а их разность равна $10$. Найдите их.

$$\\begin{cases} xy = -24, \\\\ x - y = 10. \\end{cases}$$

Здесь $x = y + 10$, поэтому $y^2 + 10y + 24 = 0$, откуда $y = -4$ или $y = -6$. Пары: $(6; -4)$ и $(4; -6)$. Обе подходят.

## Площадь и периметр

**Пример 3.** Периметр прямоугольника равен $34$ см, площадь $70$ см². Найдите его стороны.

Со сторонами $x$ и $y$ в сантиметрах:
$$\\begin{cases} 2(x + y) = 34, \\\\ xy = 70, \\end{cases} \\qquad \\begin{cases} x + y = 17, \\\\ xy = 70. \\end{cases}$$
Тогда $x(17 - x) = 70$, то есть $x^2 - 17x + 70 = 0$, поэтому $x = 7$ или $x = 10$. Стороны $7$ см и $10$ см.

**Пример 4.** Диагональ прямоугольника равна $13$ см, площадь $60$ см². Найдите стороны.

$$\\begin{cases} x^2 + y^2 = 169, \\\\ xy = 60. \\end{cases}$$
Тогда $(x + y)^2 = 169 + 120 = 289$, значит $x + y = 17$ (отрицательное значение отбрасываем, так как стороны положительны). Вместе с $xy = 60$ это даёт $x^2 - 17x + 60 = 0$, поэтому стороны $5$ см и $12$ см.

## Движение и работа

**Пример 5.** Автомобиль проходит $240$ км. Если бы его скорость была на $20$ км/ч больше, путь занял бы на один час меньше. Найдите скорость.

Пусть скорость равна $v$ км/ч, а время $t$ часов:
$$\\begin{cases} vt = 240, \\\\ (v + 20)(t - 1) = 240. \\end{cases}$$
Раскрывая второе уравнение и используя $vt = 240$, получаем $v = 20t - 20$. Тогда $20t^2 - 20t - 240 = 0$, то есть $t^2 - t - 12 = 0$, поэтому $t = 4$. Скорость равна $60$ км/ч.

**Пример 6.** Два рабочих вместе заканчивают работу за $6$ дней. По отдельности первому нужно на $5$ дней меньше, чем второму. Сколько времени нужно каждому?

С $x$ и $y$ днями:
$$\\begin{cases} \\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{6}, \\\\ y = x + 5. \\end{cases}$$
Поэтому $6(x + 5) + 6x = x(x + 5)$, то есть $x^2 - 7x - 30 = 0$, откуда $x = 10$ или $x = -3$. Дни не могут быть отрицательными, поэтому первому нужно $10$ дней, второму $15$ дней.

### Упражнения

1. Сумма двух чисел равна $9$, их произведение $20$. Найдите их.
2. Разность двух чисел равна $3$, сумма их квадратов $29$. Найдите их.
3. Периметр прямоугольника равен $26$ м, площадь $40$ м². Найдите стороны.
4. Диагональ прямоугольника равна $10$ см, площадь $48$ см². Найдите стороны.
5. Сумма двух чисел равна $12$, сумма их квадратов $74$. Найдите их.
6. Сторону квадрата увеличили на $3$ см, и площадь выросла на $39$ см². Найдите исходную сторону.
7. Две трубы наполняют резервуар вместе за $12$ часов; по отдельности первой нужно на $10$ часов меньше, чем второй. Найдите оба времени.
8. Произведение двух последовательных натуральных чисел равно $156$. Найдите их.

### Ответы

1. $4$ и $5$.
2. $2$ и $5$, либо $-5$ и $-2$.
3. $5$ м и $8$ м.
4. $6$ см и $8$ см.
5. $5$ и $7$.
6. $5$ см, из $(x + 3)^2 - x^2 = 39$.
7. $20$ часов и $30$ часов.
8. $12$ и $13$.`,
      },
      [
        q(t("In a word problem with two unknowns one writes", "Երկու անհայտով տեքստային խնդրում գրում ենք", "В текстовой задаче с двумя неизвестными записывают"), [
          t("one equation for each condition", "ամեն պայմանի համար մեկ հավասարում", "по одному уравнению на каждое условие"),
          t("one equation for both conditions", "երկու պայմանի համար մեկ հավասարում", "одно уравнение на оба условия"),
          t("only an inequality", "միայն անհավասարում", "только неравенство"),
        ], 0),
        q(t("Why is a negative root sometimes rejected?", "Ինչո՞ւ բացասական արմատն երբեմն մերժվում է", "Почему отрицательный корень иногда отбрасывают?"), [
          t("because it is harder to compute with", "քանի որ նրա հետ հաշվելն ավելի դժվար է", "потому что с ним труднее считать"),
          t("because a length or a time cannot be negative", "քանի որ երկարությունը կամ ժամանակը բացասական չեն կարող լինել", "потому что длина или время не могут быть отрицательными"),
          t("because the system has two equations", "քանի որ համակարգն ունի երկու հավասարում", "потому что в системе два уравнения"),
        ], 1),
        q(t("The sum of two numbers is 9 and their product is 20. The numbers are", "Երկու թվերի գումարը 9 է, արտադրյալը՝ 20։ Թվերն են", "Сумма двух чисел равна 9, произведение 20. Это числа"), [
          t("2 and 7", "2 և 7", "2 и 7"),
          t("1 and 8", "1 և 8", "1 и 8"),
          t("4 and 5", "4 և 5", "4 и 5"),
        ], 2),
        q(t("A rectangle with perimeter 26 m and area 40 m² has sides", "26 մ պարագծով և 40 մ² մակերեսով ուղղանկյան կողմերն են", "У прямоугольника с периметром 26 м и площадью 40 м² стороны"), [
          t("5 m and 8 m", "5 մ և 8 մ", "5 м и 8 м"),
          t("4 m and 10 m", "4 մ և 10 մ", "4 м и 10 м"),
          t("2 m and 20 m", "2 մ և 20 մ", "2 м и 20 м"),
        ], 0),
        q(t("A rectangle with diagonal 10 cm and area 48 cm² has sides", "10 սմ անկյունագծով և 48 սմ² մակերեսով ուղղանկյան կողմերն են", "У прямоугольника с диагональю 10 см и площадью 48 см² стороны"), [
          t("4 cm and 12 cm", "4 սմ և 12 սմ", "4 см и 12 см"),
          t("6 cm and 8 cm", "6 սմ և 8 սմ", "6 см и 8 см"),
          t("5 cm and 10 cm", "5 սմ և 10 սմ", "5 см и 10 см"),
        ], 1),
        q(t("The product of two consecutive natural numbers is 156. They are", "Երկու հաջորդական բնական թվերի արտադրյալը 156 է։ Նրանք են", "Произведение двух последовательных натуральных чисел равно 156. Это"), [
          t("11 and 14", "11 և 14", "11 и 14"),
          t("10 and 15", "10 և 15", "10 и 15"),
          t("12 and 13", "12 և 13", "12 и 13"),
        ], 2),
      ],
    ),
    lesson(
      "inequalities-two-vars",
      ["Inequalities and systems of inequalities in two variables", "Երկու անհայտով անհավասարումներ և անհավասարումների համակարգեր", "Неравенства и системы неравенств с двумя переменными"],
      {
        en: ["Shade the half-plane given by a linear inequality", "Shade the region given by an inequality with a circle", "Find the region given by a system of inequalities"],
        hy: ["Ներկել գծային անհավասարումով տրված կիսահարթությունը", "Ներկել շրջանագծով անհավասարումով տրված տիրույթը", "Գտնել անհավասարումների համակարգով տրված տիրույթը"],
        ru: ["Закрашивать полуплоскость, заданную линейным неравенством", "Закрашивать область, заданную неравенством с окружностью", "Находить область, заданную системой неравенств"],
      },
      {
        en: `## A solution is again a pair

> A **solution** of an inequality in two variables is a pair $(x; y)$ that turns it into a true inequality. The set of all solutions is a **region** of the plane, not a curve.

The boundary of the region is the graph of the corresponding equation. The boundary is drawn **solid** for $\\ge$ and $\\le$, and **dashed** for $>$ and $<$, because then its own points are not solutions.

## Linear inequalities

A line $ax + by = c$ cuts the plane into two half-planes. One of them is the solution set of $ax + by > c$, the other of $ax + by < c$.

How to decide which: take any point that is not on the line, usually the origin, and test it.

**Example 1.** $y > 2x - 1$.

Draw the dashed line $y = 2x - 1$. Test $(0; 0)$: is $0 > -1$? Yes, so shade the half-plane that contains the origin, the one above the line.

**Example 2.** $x + y \\le 4$.

Draw the solid line $x + y = 4$. Test $(0; 0)$: $0 \\le 4$ is true, so shade the half-plane below the line, together with the line itself.

**Example 3.** $x \\ge 2$ is the half-plane to the right of the vertical line $x = 2$, with the line included.

## Inequalities with a circle

**Example 4.** $x^2 + y^2 \\le 9$ is the disc of radius $3$ centred at the origin, boundary included: a point is a solution exactly when its distance from the origin is at most $3$.

**Example 5.** $x^2 + y^2 > 25$ is the outside of the circle of radius $5$, without the circle itself.

**Example 6.** $y \\ge x^2$ is the region inside the parabola, that is above it, with the parabola included.

## Systems

> A **solution of a system of inequalities** is a pair that satisfies every inequality of the system. The region is the **intersection** of the separate regions.

**Example 7.**
$$\\begin{cases} y \\ge 0, \\\\ x \\ge 0, \\\\ x + y \\le 5. \\end{cases}$$
The first two inequalities give the first quadrant, the third cuts it by a line. The region is a triangle with vertices $(0; 0)$, $(5; 0)$ and $(0; 5)$, all boundaries included.

**Example 8.**
$$\\begin{cases} x^2 + y^2 \\le 16, \\\\ y \\ge 0. \\end{cases}$$
This is the upper half of the disc of radius $4$, a half-disc.

**Example 9.** The system $x^2 + y^2 \\le 1$, $x^2 + y^2 \\ge 9$ has no solutions at all: no point can be both inside the small circle and outside the big one.

### Exercises

1. Is $(1; 5)$ a solution of $y > 3x$?
2. Which half-plane does $y < x + 2$ give: above or below the line?
3. Describe the region $x^2 + y^2 < 4$.
4. Describe the region $x^2 + y^2 \\ge 1$.
5. Is the boundary drawn solid or dashed for $x + y > 7$?
6. Describe the region given by $x \\ge 0$, $y \\ge 0$, $x + y \\le 3$.
7. Describe the region given by $x^2 + y^2 \\le 9$, $x \\ge 0$.
8. Has the system $y \\ge x^2$, $y \\le -1$ any solutions?

### Answers

1. Yes, since $5 > 3$.
2. Below the line.
3. The inside of the circle of radius $2$ centred at the origin, without the circle.
4. The circle of radius $1$ together with everything outside it.
5. Dashed.
6. A triangle with vertices $(0; 0)$, $(3; 0)$, $(0; 3)$, boundaries included.
7. The right half of the disc of radius $3$.
8. No, because $x^2 \\ge 0 > -1$.`,
        hy: `## Լուծումը նորից զույգ է

> Երկու անհայտով անհավասարման **լուծում** է $(x; y)$ զույգը, որը նրան դարձնում է ճիշտ անհավասարություն։ Բոլոր լուծումների բազմությունը հարթության **տիրույթ** է, ոչ թե կոր։

Տիրույթի սահմանը համապատասխան հավասարման գրաֆիկն է։ Սահմանը գծվում է **հոծ** գծով $\\ge$-ի և $\\le$-ի դեպքում, և **կտրտված** գծով $>$-ի և $<$-ի դեպքում, քանի որ այն ժամանակ նրա կետերը լուծում չեն։

## Գծային անհավասարումներ

$ax + by = c$ ուղիղը հարթությունը բաժանում է երկու կիսահարթության։ Նրանցից մեկը $ax + by > c$-ի լուծումների բազմությունն է, մյուսը՝ $ax + by < c$-ի։

Ինչպես որոշել՝ որը. վերցնենք ուղղի վրա չգտնվող ցանկացած կետ, սովորաբար սկզբնակետը, և ստուգենք։

**Օրինակ 1։** $y > 2x - 1$։

Գծենք $y = 2x - 1$ կտրտված ուղիղը։ Ստուգենք $(0; 0)$-ը. $0 > -1$։ Այո, ուստի ներկենք այն կիսահարթությունը, որը պարունակում է սկզբնակետը՝ ուղղից վերևինը։

**Օրինակ 2։** $x + y \\le 4$։

Գծենք $x + y = 4$ հոծ ուղիղը։ Ստուգենք $(0; 0)$-ը. $0 \\le 4$-ը ճիշտ է, ուստի ներկենք ուղղից ցած կիսահարթությունը՝ ուղղի հետ միասին։

**Օրինակ 3։** $x \\ge 2$-ը $x = 2$ ուղղահայաց ուղղից աջ կիսահարթությունն է՝ ուղիղը ներառված։

## Անհավասարումներ շրջանագծով

**Օրինակ 4։** $x^2 + y^2 \\le 9$-ը $3$ շառավղով շրջան է՝ կենտրոնը սկզբնակետում, սահմանը ներառված. կետը լուծում է ուղիղ այն դեպքում, երբ սկզբնակետից նրա հեռավորությունն առավելագույնը $3$ է։

**Օրինակ 5։** $x^2 + y^2 > 25$-ը $5$ շառավղով շրջանագծի արտաքին մասն է՝ առանց շրջանագծի։

**Օրինակ 6։** $y \\ge x^2$-ը պարաբոլի ներսի տիրույթն է, այսինքն՝ նրանից վեր, պարաբոլը ներառված։

## Համակարգեր

> Անհավասարումների **համակարգի լուծում** է այն զույգը, որը բավարարում է համակարգի ամեն անհավասարմանը։ Տիրույթն առանձին տիրույթների **հատումն** է։

**Օրինակ 7։**
$$\\begin{cases} y \\ge 0, \\\\ x \\ge 0, \\\\ x + y \\le 5. \\end{cases}$$
Առաջին երկու անհավասարումները տալիս են առաջին քառորդը, երրորդն այն կտրում է ուղղով։ Տիրույթն եռանկյուն է՝ $(0; 0)$, $(5; 0)$ և $(0; 5)$ գագաթներով, բոլոր սահմանները ներառված։

**Օրինակ 8։**
$$\\begin{cases} x^2 + y^2 \\le 16, \\\\ y \\ge 0. \\end{cases}$$
Սա $4$ շառավղով շրջանի վերին կեսն է՝ կիսաշրջան։

**Օրինակ 9։** $x^2 + y^2 \\le 1$, $x^2 + y^2 \\ge 9$ համակարգն ընդհանրապես լուծում չունի. ոչ մի կետ չի կարող միաժամանակ փոքր շրջանագծի ներսում և մեծի դրսում լինել։

### Վարժություններ

1. $(1; 5)$-ը $y > 3x$-ի լուծո՞ւմ է։
2. Ո՞ր կիսահարթությունն է տալիս $y < x + 2$-ը՝ ուղղից վերևի՞նը, թե ցածինը։
3. Նկարագրե՛ք $x^2 + y^2 < 4$ տիրույթը։
4. Նկարագրե՛ք $x^2 + y^2 \\ge 1$ տիրույթը։
5. $x + y > 7$-ի սահմանը գծվո՞ւմ է հոծ, թե կտրտված գծով։
6. Նկարագրե՛ք $x \\ge 0$, $y \\ge 0$, $x + y \\le 3$ համակարգով տրված տիրույթը։
7. Նկարագրե՛ք $x^2 + y^2 \\le 9$, $x \\ge 0$ համակարգով տրված տիրույթը։
8. $y \\ge x^2$, $y \\le -1$ համակարգն ունի՞ լուծում։

### Պատասխաններ

1. Այո, քանի որ $5 > 3$։
2. Ուղղից ցած։
3. $2$ շառավղով շրջանագծի ներսի մասը՝ կենտրոնը սկզբնակետում, առանց շրջանագծի։
4. $1$ շառավղով շրջանագիծը և նրանից դուրս ամեն ինչ։
5. Կտրտված։
6. Եռանկյուն՝ $(0; 0)$, $(3; 0)$, $(0; 3)$ գագաթներով, սահմանները ներառված։
7. $3$ շառավղով շրջանի աջ կեսը։
8. Ոչ, քանի որ $x^2 \\ge 0 > -1$։`,
        ru: `## Решение — снова пара

> **Решением** неравенства с двумя переменными называют пару $(x; y)$, которая обращает его в верное неравенство. Множество всех решений — это **область** плоскости, а не кривая.

Границей области служит график соответствующего уравнения. Границу чертят **сплошной** линией для $\\ge$ и $\\le$ и **пунктирной** для $>$ и $<$, так как тогда её собственные точки решениями не являются.

## Линейные неравенства

Прямая $ax + by = c$ разбивает плоскость на две полуплоскости. Одна из них — множество решений $ax + by > c$, другая — $ax + by < c$.

Как определить, какая: взять любую точку, не лежащую на прямой, обычно начало координат, и проверить её.

**Пример 1.** $y > 2x - 1$.

Начертим пунктирную прямую $y = 2x - 1$. Проверим $(0; 0)$: верно ли $0 > -1$? Да, поэтому закрашиваем полуплоскость, содержащую начало координат, то есть выше прямой.

**Пример 2.** $x + y \\le 4$.

Начертим сплошную прямую $x + y = 4$. Проверим $(0; 0)$: $0 \\le 4$ верно, поэтому закрашиваем полуплоскость ниже прямой вместе с самой прямой.

**Пример 3.** $x \\ge 2$ — полуплоскость справа от вертикальной прямой $x = 2$, прямая включена.

## Неравенства с окружностью

**Пример 4.** $x^2 + y^2 \\le 9$ — круг радиуса $3$ с центром в начале координат, граница включена: точка является решением в точности тогда, когда её расстояние от начала координат не больше $3$.

**Пример 5.** $x^2 + y^2 > 25$ — внешность окружности радиуса $5$ без самой окружности.

**Пример 6.** $y \\ge x^2$ — область внутри параболы, то есть выше неё, парабола включена.

## Системы

> **Решением системы неравенств** называют пару, удовлетворяющую каждому неравенству системы. Область — это **пересечение** отдельных областей.

**Пример 7.**
$$\\begin{cases} y \\ge 0, \\\\ x \\ge 0, \\\\ x + y \\le 5. \\end{cases}$$
Первые два неравенства дают первую четверть, третье отсекает её прямой. Область — треугольник с вершинами $(0; 0)$, $(5; 0)$ и $(0; 5)$, все границы включены.

**Пример 8.**
$$\\begin{cases} x^2 + y^2 \\le 16, \\\\ y \\ge 0. \\end{cases}$$
Это верхняя половина круга радиуса $4$, полукруг.

**Пример 9.** Система $x^2 + y^2 \\le 1$, $x^2 + y^2 \\ge 9$ решений вообще не имеет: ни одна точка не может быть одновременно внутри малой окружности и вне большой.

### Упражнения

1. Является ли $(1; 5)$ решением $y > 3x$?
2. Какую полуплоскость задаёт $y < x + 2$: выше или ниже прямой?
3. Опишите область $x^2 + y^2 < 4$.
4. Опишите область $x^2 + y^2 \\ge 1$.
5. Сплошной или пунктирной чертят границу для $x + y > 7$?
6. Опишите область, заданную $x \\ge 0$, $y \\ge 0$, $x + y \\le 3$.
7. Опишите область, заданную $x^2 + y^2 \\le 9$, $x \\ge 0$.
8. Имеет ли решения система $y \\ge x^2$, $y \\le -1$?

### Ответы

1. Да, так как $5 > 3$.
2. Ниже прямой.
3. Внутренность окружности радиуса $2$ с центром в начале координат, без самой окружности.
4. Окружность радиуса $1$ вместе со всем, что вне её.
5. Пунктирной.
6. Треугольник с вершинами $(0; 0)$, $(3; 0)$, $(0; 3)$, границы включены.
7. Правая половина круга радиуса $3$.
8. Нет, так как $x^2 \\ge 0 > -1$.`,
      },
      [
        q(t("The set of solutions of an inequality in two variables is", "Երկու անհայտով անհավասարման լուծումների բազմությունն է", "Множество решений неравенства с двумя переменными — это"), [
          t("a region of the plane", "հարթության տիրույթ", "область плоскости"),
          t("a single point", "մեկ կետ", "одна точка"),
          t("a curve", "կոր", "кривая"),
        ], 0),
        q(t("For the sign > the boundary of the region is drawn", "> նշանի դեպքում տիրույթի սահմանը գծվում է", "Для знака > границу области чертят"), [
          t("solid", "հոծ", "сплошной"),
          t("dashed", "կտրտված", "пунктирной"),
          t("in two colours", "երկու գույնով", "в два цвета"),
        ], 1),
        q(t("How is it decided which half-plane to shade?", "Ինչպե՞ս է որոշվում, որ կիսահարթությունը ներկել", "Как определяют, какую полуплоскость закрасить?"), [
          t("always the upper one", "միշտ վերևինը", "всегда верхнюю"),
          t("by the sign of the free term", "ազատ անդամի նշանով", "по знаку свободного члена"),
          t("by testing a point that is not on the line", "ուղղի վրա չգտնվող կետը ստուգելով", "проверкой точки, не лежащей на прямой"),
        ], 2),
        q(t("The region x² + y² ≤ 9 is", "x² + y² ≤ 9 տիրույթն է", "Область x² + y² ≤ 9 — это"), [
          t("the disc of radius 3 with its boundary", "3 շառավղով շրջանը սահմանի հետ", "круг радиуса 3 вместе с границей"),
          t("the outside of the circle of radius 3", "3 շառավղով շրջանագծի արտաքին մասը", "внешность окружности радиуса 3"),
          t("the circle of radius 9", "9 շառավղով շրջանագիծը", "окружность радиуса 9"),
        ], 0),
        q(t("The region of a system of inequalities is", "Անհավասարումների համակարգի տիրույթն է", "Область системы неравенств — это"), [
          t("the union of the separate regions", "առանձին տիրույթների միավորումը", "объединение отдельных областей"),
          t("the intersection of the separate regions", "առանձին տիրույթների հատումը", "пересечение отдельных областей"),
          t("the largest of the separate regions", "առանձին տիրույթներից ամենամեծը", "наибольшая из отдельных областей"),
        ], 1),
        q(t("The system y ≥ x², y ≤ -1 has", "y ≥ x², y ≤ -1 համակարգն ունի", "Система y ≥ x², y ≤ -1 имеет"), [
          t("a half-plane of solutions", "լուծումների կիսահարթություն", "полуплоскость решений"),
          t("exactly one solution", "ուղիղ մեկ լուծում", "ровно одно решение"),
          t("no solutions", "ոչ մի լուծում", "ни одного решения"),
        ], 2),
      ],
    ),
  ],
};
