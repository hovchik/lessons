import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Trigonometric equations and inequalities", "Եռանկյունաչափական հավասարումներ և անհավասարություններ", "Тригонометрические уравнения и неравенства"),
  summary: t(
    "Arccosine, arcsine and arctangent, the simplest equations cos x = a, sin x = a and tan x = a, methods for harder equations, and the simplest inequalities.",
    "Արկկոսինուս, արկսինուս և արկտանգենս, cos x = a, sin x = a և tg x = a ամենապարզ հավասարումները, ավելի բարդ հավասարումների լուծման եղանակներ և ամենապարզ անհավասարությունները։",
    "Арккосинус, арксинус и арктангенс, простейшие уравнения cos x = a, sin x = a и tg x = a, методы решения более сложных уравнений и простейшие неравенства.",
  ),
  lessons: [
    lesson(
      "arccos",
      ["Arccosine and the equation cos x = a", "Արկկոսինուս և cos x = a հավասարումը", "Арккосинус и уравнение cos x = a"],
      {
        en: ["Define arccos a for −1 ≤ a ≤ 1 as an angle from [0; π]", "Use the formula arccos(−a) = π − arccos a", "Solve cos x = a with the general formula x = ±arccos a + 2πk and the special cases a = 0, 1, −1"],
        hy: ["Սահմանել arccos a-ն −1 ≤ a ≤ 1 դեպքում որպես [0; π]-ին պատկանող անկյուն", "Օգտվել arccos(−a) = π − arccos a բանաձևից", "Լուծել cos x = a հավասարումը x = ±arccos a + 2πk ընդհանուր բանաձևով և a = 0, 1, −1 մասնավոր դեպքերը"],
        ru: ["Определять arccos a при −1 ≤ a ≤ 1 как угол из [0; π]", "Использовать формулу arccos(−a) = π − arccos a", "Решать cos x = a по общей формуле x = ±arccos a + 2πk и частные случаи a = 0, 1, −1"],
      },
      {
        en: `## Definition

> For $-1 \\le a \\le 1$, $\\arccos a$ is the angle $\\alpha$ from $[0; \\pi]$ whose cosine equals $a$.

$$\\arccos a = \\alpha \\iff \\cos \\alpha = a \\text{ and } 0 \\le \\alpha \\le \\pi.$$

The interval $[0; \\pi]$ is chosen because cosine takes every value from $-1$ to $1$ exactly once there.

| $a$ | $-1$ | $-\\dfrac{\\sqrt3}{2}$ | $-\\dfrac12$ | $0$ |
|---|---|---|---|---|
| $\\arccos a$ | $\\pi$ | $\\dfrac{5\\pi}{6}$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |

| $a$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $1$ |
|---|---|---|---|
| $\\arccos a$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{4}$ | $0$ |

**Negative argument:** $\\arccos(-a) = \\pi - \\arccos a$. For example $\\arccos\\left(-\\dfrac{\\sqrt2}{2}\\right) = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}$.

$\\arccos 2$ does not exist, because no cosine equals $2$.

## The equation cos x = a

- If $\\lvert a\\rvert > 1$, there are no solutions.
- If $\\lvert a\\rvert \\le 1$, on the unit circle the vertical line $x = a$ meets the circle at the points for $\\pm\\arccos a$. Adding full turns:

$$x = \\pm\\arccos a + 2\\pi k, \\quad k \\in \\mathbb{Z}.$$

Special cases, written more simply:

| Equation | Solutions |
|---|---|
| $\\cos x = 1$ | $x = 2\\pi k$ |
| $\\cos x = 0$ | $x = \\dfrac{\\pi}{2} + \\pi k$ |
| $\\cos x = -1$ | $x = \\pi + 2\\pi k$ |

**Example 1.** $\\cos x = \\dfrac12$: $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.

**Example 2.** $\\cos x = -\\dfrac{\\sqrt3}{2}$: $x = \\pm\\dfrac{5\\pi}{6} + 2\\pi k$.

**Example 3.** $\\cos 2x = \\dfrac{\\sqrt2}{2}$: $2x = \\pm\\dfrac{\\pi}{4} + 2\\pi k$, so $x = \\pm\\dfrac{\\pi}{8} + \\pi k$.

**Example 4.** $\\cos x = 0.3$: $x = \\pm\\arccos 0.3 + 2\\pi k$. This is an exact answer; a calculator gives $\\arccos 0.3 \\approx 1.27$.

### Exercises

1. Compute $\\arccos \\dfrac{\\sqrt3}{2}$ and $\\arccos(-1)$.
2. Compute $\\arccos\\left(-\\dfrac12\\right) + \\arccos \\dfrac12$.
3. Does $\\arccos \\dfrac{\\pi}{2}$ exist?
4. Solve $\\cos x = \\dfrac{\\sqrt2}{2}$.
5. Solve $\\cos x = -\\dfrac12$.
6. Solve $\\cos\\dfrac{x}{3} = 0$.
7. Solve $2\\cos x + 3 = 0$.

### Answers

1. $\\dfrac{\\pi}{6}$; $\\pi$. 2. $\\dfrac{2\\pi}{3} + \\dfrac{\\pi}{3} = \\pi$. 3. No: $\\dfrac{\\pi}{2} \\approx 1.57 > 1$. 4. $x = \\pm\\dfrac{\\pi}{4} + 2\\pi k$. 5. $x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$. 6. $\\dfrac{x}{3} = \\dfrac{\\pi}{2} + \\pi k$, $x = \\dfrac{3\\pi}{2} + 3\\pi k$. 7. $\\cos x = -1.5$: no solutions.`,
        hy: `## Սահմանում

> $-1 \\le a \\le 1$ դեպքում $\\arccos a$-ն $[0; \\pi]$-ին պատկանող այն $\\alpha$ անկյունն է, որի կոսինուսը հավասար է $a$-ի։

$$\\arccos a = \\alpha \\iff \\cos \\alpha = a \\text{ և } 0 \\le \\alpha \\le \\pi.$$

$[0; \\pi]$ միջակայքն ընտրված է, քանի որ այնտեղ կոսինուսը $-1$-ից $1$ յուրաքանչյուր արժեք ընդունում է ճիշտ մեկ անգամ։

| $a$ | $-1$ | $-\\dfrac{\\sqrt3}{2}$ | $-\\dfrac12$ | $0$ |
|---|---|---|---|---|
| $\\arccos a$ | $\\pi$ | $\\dfrac{5\\pi}{6}$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |

| $a$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $1$ |
|---|---|---|---|
| $\\arccos a$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{4}$ | $0$ |

**Բացասական արգումենտ՝** $\\arccos(-a) = \\pi - \\arccos a$։ Օրինակ՝ $\\arccos\\left(-\\dfrac{\\sqrt2}{2}\\right) = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}$։

$\\arccos 2$ գոյություն չունի, քանի որ ոչ մի կոսինուս հավասար չէ $2$-ի։

## cos x = a հավասարումը

- Եթե $\\lvert a\\rvert > 1$, լուծումներ չկան։
- Եթե $\\lvert a\\rvert \\le 1$, միավոր շրջանագծի վրա $x = a$ ուղղաձիգ ուղիղը շրջանագիծը հատում է $\\pm\\arccos a$ անկյուններին համապատասխանող կետերում։ Ավելացնելով լրիվ պտույտներ՝

$$x = \\pm\\arccos a + 2\\pi k, \\quad k \\in \\mathbb{Z}.$$

Մասնավոր դեպքերը՝ գրված ավելի պարզ․

| Հավասարում | Լուծումներ |
|---|---|
| $\\cos x = 1$ | $x = 2\\pi k$ |
| $\\cos x = 0$ | $x = \\dfrac{\\pi}{2} + \\pi k$ |
| $\\cos x = -1$ | $x = \\pi + 2\\pi k$ |

**Օրինակ 1։** $\\cos x = \\dfrac12$՝ $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$։

**Օրինակ 2։** $\\cos x = -\\dfrac{\\sqrt3}{2}$՝ $x = \\pm\\dfrac{5\\pi}{6} + 2\\pi k$։

**Օրինակ 3։** $\\cos 2x = \\dfrac{\\sqrt2}{2}$՝ $2x = \\pm\\dfrac{\\pi}{4} + 2\\pi k$, ուստի $x = \\pm\\dfrac{\\pi}{8} + \\pi k$։

**Օրինակ 4։** $\\cos x = 0{,}3$՝ $x = \\pm\\arccos 0{,}3 + 2\\pi k$։ Սա ճշգրիտ պատասխան է, հաշվիչը տալիս է $\\arccos 0{,}3 \\approx 1{,}27$։

### Վարժություններ

1. Հաշվեք $\\arccos \\dfrac{\\sqrt3}{2}$-ը և $\\arccos(-1)$-ը։
2. Հաշվեք $\\arccos\\left(-\\dfrac12\\right) + \\arccos \\dfrac12$-ը։
3. Գոյություն ունի՞ $\\arccos \\dfrac{\\pi}{2}$-ը։
4. Լուծեք $\\cos x = \\dfrac{\\sqrt2}{2}$ հավասարումը։
5. Լուծեք $\\cos x = -\\dfrac12$ հավասարումը։
6. Լուծեք $\\cos\\dfrac{x}{3} = 0$ հավասարումը։
7. Լուծեք $2\\cos x + 3 = 0$ հավասարումը։

### Պատասխաններ

1. $\\dfrac{\\pi}{6}$, $\\pi$։ 2. $\\dfrac{2\\pi}{3} + \\dfrac{\\pi}{3} = \\pi$։ 3. Ոչ՝ $\\dfrac{\\pi}{2} \\approx 1{,}57 > 1$։ 4. $x = \\pm\\dfrac{\\pi}{4} + 2\\pi k$։ 5. $x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$։ 6. $\\dfrac{x}{3} = \\dfrac{\\pi}{2} + \\pi k$, $x = \\dfrac{3\\pi}{2} + 3\\pi k$։ 7. $\\cos x = -1{,}5$՝ լուծումներ չկան։`,
        ru: `## Определение

> При $-1 \\le a \\le 1$ $\\arccos a$ — это угол $\\alpha$ из $[0; \\pi]$, косинус которого равен $a$.

$$\\arccos a = \\alpha \\iff \\cos \\alpha = a \\text{ и } 0 \\le \\alpha \\le \\pi.$$

Промежуток $[0; \\pi]$ выбран потому, что на нём косинус принимает каждое значение от $-1$ до $1$ ровно один раз.

| $a$ | $-1$ | $-\\dfrac{\\sqrt3}{2}$ | $-\\dfrac12$ | $0$ |
|---|---|---|---|---|
| $\\arccos a$ | $\\pi$ | $\\dfrac{5\\pi}{6}$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |

| $a$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $1$ |
|---|---|---|---|
| $\\arccos a$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{4}$ | $0$ |

**Отрицательный аргумент:** $\\arccos(-a) = \\pi - \\arccos a$. Например, $\\arccos\\left(-\\dfrac{\\sqrt2}{2}\\right) = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}$.

$\\arccos 2$ не существует: никакой косинус не равен $2$.

## Уравнение cos x = a

- Если $\\lvert a\\rvert > 1$, решений нет.
- Если $\\lvert a\\rvert \\le 1$, на единичной окружности вертикальная прямая $x = a$ пересекает окружность в точках, соответствующих углам $\\pm\\arccos a$. Добавляя полные обороты:

$$x = \\pm\\arccos a + 2\\pi k, \\quad k \\in \\mathbb{Z}.$$

Частные случаи записывают проще:

| Уравнение | Решения |
|---|---|
| $\\cos x = 1$ | $x = 2\\pi k$ |
| $\\cos x = 0$ | $x = \\dfrac{\\pi}{2} + \\pi k$ |
| $\\cos x = -1$ | $x = \\pi + 2\\pi k$ |

**Пример 1.** $\\cos x = \\dfrac12$: $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.

**Пример 2.** $\\cos x = -\\dfrac{\\sqrt3}{2}$: $x = \\pm\\dfrac{5\\pi}{6} + 2\\pi k$.

**Пример 3.** $\\cos 2x = \\dfrac{\\sqrt2}{2}$: $2x = \\pm\\dfrac{\\pi}{4} + 2\\pi k$, откуда $x = \\pm\\dfrac{\\pi}{8} + \\pi k$.

**Пример 4.** $\\cos x = 0{,}3$: $x = \\pm\\arccos 0{,}3 + 2\\pi k$. Это точный ответ; калькулятор даёт $\\arccos 0{,}3 \\approx 1{,}27$.

### Упражнения

1. Вычислите $\\arccos \\dfrac{\\sqrt3}{2}$ и $\\arccos(-1)$.
2. Вычислите $\\arccos\\left(-\\dfrac12\\right) + \\arccos \\dfrac12$.
3. Существует ли $\\arccos \\dfrac{\\pi}{2}$?
4. Решите $\\cos x = \\dfrac{\\sqrt2}{2}$.
5. Решите $\\cos x = -\\dfrac12$.
6. Решите $\\cos\\dfrac{x}{3} = 0$.
7. Решите $2\\cos x + 3 = 0$.

### Ответы

1. $\\dfrac{\\pi}{6}$; $\\pi$. 2. $\\dfrac{2\\pi}{3} + \\dfrac{\\pi}{3} = \\pi$. 3. Нет: $\\dfrac{\\pi}{2} \\approx 1{,}57 > 1$. 4. $x = \\pm\\dfrac{\\pi}{4} + 2\\pi k$. 5. $x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$. 6. $\\dfrac{x}{3} = \\dfrac{\\pi}{2} + \\pi k$, $x = \\dfrac{3\\pi}{2} + 3\\pi k$. 7. $\\cos x = -1{,}5$ — решений нет.`,
      },
      [
        q(
          t("arccos a takes values in…", "arccos a-ն ընդունում է արժեքներ…", "arccos a принимает значения из…"),
          [t("[−π/2; π/2]", "[−π/2; π/2]-ից", "[−π/2; π/2]"), t("[0; π]", "[0; π]-ից", "[0; π]"), t("[0; 2π]", "[0; 2π]-ից", "[0; 2π]")],
          1,
        ),
        q(
          t("arccos(1/2) equals…", "arccos(1/2)-ը հավասար է…", "arccos(1/2) равен…"),
          [t("π/6", "π/6", "π/6"), t("π/3", "π/3", "π/3"), t("2π/3", "2π/3", "2π/3")],
          1,
        ),
        q(
          t("arccos(−a) equals…", "arccos(−a)-ն հավասար է…", "arccos(−a) равен…"),
          [t("−arccos a", "−arccos a", "−arccos a"), t("π − arccos a", "π − arccos a", "π − arccos a"), t("π + arccos a", "π + arccos a", "π + arccos a")],
          1,
        ),
        q(
          t("The solutions of cos x = a (|a| ≤ 1) are…", "cos x = a (|a| ≤ 1) հավասարման լուծումներն են…", "Решения cos x = a (|a| ≤ 1) —"),
          [t("x = ±arccos a + 2πk", "x = ±arccos a + 2πk", "x = ±arccos a + 2πk"), t("x = arccos a + πk", "x = arccos a + πk", "x = arccos a + πk"), t("x = (−1)ᵏ arccos a + πk", "x = (−1)ᵏ arccos a + πk", "x = (−1)ᵏ arccos a + πk")],
          0,
        ),
        q(
          t("The solutions of cos x = 0 are…", "cos x = 0 հավասարման լուծումներն են…", "Решения cos x = 0 —"),
          [t("x = πk", "x = πk", "x = πk"), t("x = π/2 + πk", "x = π/2 + πk", "x = π/2 + πk"), t("x = 2πk", "x = 2πk", "x = 2πk")],
          1,
        ),
        q(
          t("How many solutions does cos x = 1.5 have?", "Քանի՞ լուծում ունի cos x = 1,5 հավասարումը", "Сколько решений у cos x = 1,5?"),
          [t("none", "ոչ մի", "ни одного"), t("one", "մեկ", "одно"), t("infinitely many", "անվերջ շատ", "бесконечно много")],
          0,
        ),
      ],
    ),
    lesson(
      "arcsin",
      ["Arcsine and the equation sin x = a", "Արկսինուս և sin x = a հավասարումը", "Арксинус и уравнение sin x = a"],
      {
        en: ["Define arcsin a for −1 ≤ a ≤ 1 as an angle from [−π/2; π/2]", "Use the formula arcsin(−a) = −arcsin a", "Solve sin x = a with x = (−1)ᵏ arcsin a + πk and the special cases a = 0, 1, −1"],
        hy: ["Սահմանել arcsin a-ն −1 ≤ a ≤ 1 դեպքում որպես [−π/2; π/2]-ին պատկանող անկյուն", "Օգտվել arcsin(−a) = −arcsin a բանաձևից", "Լուծել sin x = a հավասարումը x = (−1)ᵏ arcsin a + πk բանաձևով և a = 0, 1, −1 մասնավոր դեպքերը"],
        ru: ["Определять arcsin a при −1 ≤ a ≤ 1 как угол из [−π/2; π/2]", "Использовать формулу arcsin(−a) = −arcsin a", "Решать sin x = a по формуле x = (−1)ᵏ arcsin a + πk и частные случаи a = 0, 1, −1"],
      },
      {
        en: `## Definition

> For $-1 \\le a \\le 1$, $\\arcsin a$ is the angle $\\alpha$ from $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ whose sine equals $a$.

On this interval sine increases and takes every value from $-1$ to $1$ exactly once.

| $a$ | $-1$ | $-\\dfrac12$ | $0$ | $\\dfrac12$ |
|---|---|---|---|---|
| $\\arcsin a$ | $-\\dfrac{\\pi}{2}$ | $-\\dfrac{\\pi}{6}$ | $0$ | $\\dfrac{\\pi}{6}$ |

| $a$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
|---|---|---|---|
| $\\arcsin a$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |

**Negative argument:** $\\arcsin(-a) = -\\arcsin a$. So $\\arcsin\\left(-\\dfrac{\\sqrt3}{2}\\right) = -\\dfrac{\\pi}{3}$.

## The equation sin x = a

- If $\\lvert a\\rvert > 1$, there are no solutions.
- If $\\lvert a\\rvert \\le 1$, the horizontal line $y = a$ meets the unit circle at two points: the angles $\\arcsin a$ and $\\pi - \\arcsin a$. Adding full turns gives two series:

$$x = \\arcsin a + 2\\pi k, \\qquad x = \\pi - \\arcsin a + 2\\pi k.$$

Both series are written as one formula:

$$x = (-1)^k \\arcsin a + \\pi k, \\quad k \\in \\mathbb{Z}.$$

For even $k$ it gives the first series, for odd $k$ the second.

| Equation | Solutions |
|---|---|
| $\\sin x = 1$ | $x = \\dfrac{\\pi}{2} + 2\\pi k$ |
| $\\sin x = 0$ | $x = \\pi k$ |
| $\\sin x = -1$ | $x = -\\dfrac{\\pi}{2} + 2\\pi k$ |

**Example 1.** $\\sin x = \\dfrac12$: $x = (-1)^k \\dfrac{\\pi}{6} + \\pi k$. The two series are $\\dfrac{\\pi}{6} + 2\\pi k$ and $\\dfrac{5\\pi}{6} + 2\\pi k$.

**Example 2.** $\\sin x = -\\dfrac{\\sqrt2}{2}$: $x = (-1)^{k+1} \\dfrac{\\pi}{4} + \\pi k$.

**Example 3.** $\\sin 3x = 1$: $3x = \\dfrac{\\pi}{2} + 2\\pi k$, $x = \\dfrac{\\pi}{6} + \\dfrac{2\\pi k}{3}$.

**Example 4.** Find the solutions of $\\sin x = \\dfrac{\\sqrt3}{2}$ in $[0; 2\\pi]$. The series give $\\dfrac{\\pi}{3}$ and $\\dfrac{2\\pi}{3}$.

### Exercises

1. Compute $\\arcsin \\dfrac{\\sqrt2}{2}$ and $\\arcsin(-1)$.
2. Compute $\\arcsin\\left(-\\dfrac12\\right) + \\arccos\\left(-\\dfrac12\\right)$.
3. Solve $\\sin x = \\dfrac{\\sqrt3}{2}$.
4. Solve $\\sin x = -\\dfrac12$.
5. Solve $2\\sin \\dfrac{x}{2} = \\sqrt2$.
6. Solve $\\sin\\left(x - \\dfrac{\\pi}{4}\\right) = 0$.
7. Find all solutions of $\\sin x = -\\dfrac12$ in $[0; 2\\pi]$.

### Answers

1. $\\dfrac{\\pi}{4}$; $-\\dfrac{\\pi}{2}$. 2. $-\\dfrac{\\pi}{6} + \\dfrac{2\\pi}{3} = \\dfrac{\\pi}{2}$. 3. $x = (-1)^k \\dfrac{\\pi}{3} + \\pi k$. 4. $x = (-1)^{k+1} \\dfrac{\\pi}{6} + \\pi k$. 5. $\\sin \\dfrac{x}{2} = \\dfrac{\\sqrt2}{2}$, $x = (-1)^k \\dfrac{\\pi}{2} + 2\\pi k$. 6. $x = \\dfrac{\\pi}{4} + \\pi k$. 7. $\\dfrac{7\\pi}{6}$ and $\\dfrac{11\\pi}{6}$.`,
        hy: `## Սահմանում

> $-1 \\le a \\le 1$ դեպքում $\\arcsin a$-ն $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$-ին պատկանող այն $\\alpha$ անկյունն է, որի սինուսը հավասար է $a$-ի։

Այս միջակայքում սինուսն աճում է և $-1$-ից $1$ յուրաքանչյուր արժեք ընդունում է ճիշտ մեկ անգամ։

| $a$ | $-1$ | $-\\dfrac12$ | $0$ | $\\dfrac12$ |
|---|---|---|---|---|
| $\\arcsin a$ | $-\\dfrac{\\pi}{2}$ | $-\\dfrac{\\pi}{6}$ | $0$ | $\\dfrac{\\pi}{6}$ |

| $a$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
|---|---|---|---|
| $\\arcsin a$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |

**Բացասական արգումենտ՝** $\\arcsin(-a) = -\\arcsin a$։ Այսպիսով՝ $\\arcsin\\left(-\\dfrac{\\sqrt3}{2}\\right) = -\\dfrac{\\pi}{3}$։

## sin x = a հավասարումը

- Եթե $\\lvert a\\rvert > 1$, լուծումներ չկան։
- Եթե $\\lvert a\\rvert \\le 1$, $y = a$ հորիզոնական ուղիղը միավոր շրջանագիծը հատում է երկու կետում՝ $\\arcsin a$ և $\\pi - \\arcsin a$ անկյուններին համապատասխան։ Ավելացնելով լրիվ պտույտներ՝ ստանում ենք երկու շարք․

$$x = \\arcsin a + 2\\pi k, \\qquad x = \\pi - \\arcsin a + 2\\pi k.$$

Երկու շարքերը գրվում են մեկ բանաձևով՝

$$x = (-1)^k \\arcsin a + \\pi k, \\quad k \\in \\mathbb{Z}.$$

Զույգ $k$-երի դեպքում այն տալիս է առաջին շարքը, կենտ $k$-երի դեպքում՝ երկրորդը։

| Հավասարում | Լուծումներ |
|---|---|
| $\\sin x = 1$ | $x = \\dfrac{\\pi}{2} + 2\\pi k$ |
| $\\sin x = 0$ | $x = \\pi k$ |
| $\\sin x = -1$ | $x = -\\dfrac{\\pi}{2} + 2\\pi k$ |

**Օրինակ 1։** $\\sin x = \\dfrac12$՝ $x = (-1)^k \\dfrac{\\pi}{6} + \\pi k$։ Երկու շարքերն են՝ $\\dfrac{\\pi}{6} + 2\\pi k$ և $\\dfrac{5\\pi}{6} + 2\\pi k$։

**Օրինակ 2։** $\\sin x = -\\dfrac{\\sqrt2}{2}$՝ $x = (-1)^{k+1} \\dfrac{\\pi}{4} + \\pi k$։

**Օրինակ 3։** $\\sin 3x = 1$՝ $3x = \\dfrac{\\pi}{2} + 2\\pi k$, $x = \\dfrac{\\pi}{6} + \\dfrac{2\\pi k}{3}$։

**Օրինակ 4։** Գտեք $\\sin x = \\dfrac{\\sqrt3}{2}$ հավասարման լուծումները $[0; 2\\pi]$-ում։ Շարքերը տալիս են $\\dfrac{\\pi}{3}$ և $\\dfrac{2\\pi}{3}$։

### Վարժություններ

1. Հաշվեք $\\arcsin \\dfrac{\\sqrt2}{2}$-ը և $\\arcsin(-1)$-ը։
2. Հաշվեք $\\arcsin\\left(-\\dfrac12\\right) + \\arccos\\left(-\\dfrac12\\right)$-ը։
3. Լուծեք $\\sin x = \\dfrac{\\sqrt3}{2}$ հավասարումը։
4. Լուծեք $\\sin x = -\\dfrac12$ հավասարումը։
5. Լուծեք $2\\sin \\dfrac{x}{2} = \\sqrt2$ հավասարումը։
6. Լուծեք $\\sin\\left(x - \\dfrac{\\pi}{4}\\right) = 0$ հավասարումը։
7. Գտեք $\\sin x = -\\dfrac12$ հավասարման բոլոր լուծումները $[0; 2\\pi]$-ում։

### Պատասխաններ

1. $\\dfrac{\\pi}{4}$, $-\\dfrac{\\pi}{2}$։ 2. $-\\dfrac{\\pi}{6} + \\dfrac{2\\pi}{3} = \\dfrac{\\pi}{2}$։ 3. $x = (-1)^k \\dfrac{\\pi}{3} + \\pi k$։ 4. $x = (-1)^{k+1} \\dfrac{\\pi}{6} + \\pi k$։ 5. $\\sin \\dfrac{x}{2} = \\dfrac{\\sqrt2}{2}$, $x = (-1)^k \\dfrac{\\pi}{2} + 2\\pi k$։ 6. $x = \\dfrac{\\pi}{4} + \\pi k$։ 7. $\\dfrac{7\\pi}{6}$ և $\\dfrac{11\\pi}{6}$։`,
        ru: `## Определение

> При $-1 \\le a \\le 1$ $\\arcsin a$ — это угол $\\alpha$ из $\\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$, синус которого равен $a$.

На этом промежутке синус возрастает и принимает каждое значение от $-1$ до $1$ ровно один раз.

| $a$ | $-1$ | $-\\dfrac12$ | $0$ | $\\dfrac12$ |
|---|---|---|---|---|
| $\\arcsin a$ | $-\\dfrac{\\pi}{2}$ | $-\\dfrac{\\pi}{6}$ | $0$ | $\\dfrac{\\pi}{6}$ |

| $a$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
|---|---|---|---|
| $\\arcsin a$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |

**Отрицательный аргумент:** $\\arcsin(-a) = -\\arcsin a$. Так, $\\arcsin\\left(-\\dfrac{\\sqrt3}{2}\\right) = -\\dfrac{\\pi}{3}$.

## Уравнение sin x = a

- Если $\\lvert a\\rvert > 1$, решений нет.
- Если $\\lvert a\\rvert \\le 1$, горизонтальная прямая $y = a$ пересекает единичную окружность в двух точках — для углов $\\arcsin a$ и $\\pi - \\arcsin a$. Добавляя полные обороты, получаем две серии:

$$x = \\arcsin a + 2\\pi k, \\qquad x = \\pi - \\arcsin a + 2\\pi k.$$

Обе серии записывают одной формулой:

$$x = (-1)^k \\arcsin a + \\pi k, \\quad k \\in \\mathbb{Z}.$$

При чётных $k$ получается первая серия, при нечётных — вторая.

| Уравнение | Решения |
|---|---|
| $\\sin x = 1$ | $x = \\dfrac{\\pi}{2} + 2\\pi k$ |
| $\\sin x = 0$ | $x = \\pi k$ |
| $\\sin x = -1$ | $x = -\\dfrac{\\pi}{2} + 2\\pi k$ |

**Пример 1.** $\\sin x = \\dfrac12$: $x = (-1)^k \\dfrac{\\pi}{6} + \\pi k$. Две серии: $\\dfrac{\\pi}{6} + 2\\pi k$ и $\\dfrac{5\\pi}{6} + 2\\pi k$.

**Пример 2.** $\\sin x = -\\dfrac{\\sqrt2}{2}$: $x = (-1)^{k+1} \\dfrac{\\pi}{4} + \\pi k$.

**Пример 3.** $\\sin 3x = 1$: $3x = \\dfrac{\\pi}{2} + 2\\pi k$, $x = \\dfrac{\\pi}{6} + \\dfrac{2\\pi k}{3}$.

**Пример 4.** Найдите решения $\\sin x = \\dfrac{\\sqrt3}{2}$ на $[0; 2\\pi]$. Серии дают $\\dfrac{\\pi}{3}$ и $\\dfrac{2\\pi}{3}$.

### Упражнения

1. Вычислите $\\arcsin \\dfrac{\\sqrt2}{2}$ и $\\arcsin(-1)$.
2. Вычислите $\\arcsin\\left(-\\dfrac12\\right) + \\arccos\\left(-\\dfrac12\\right)$.
3. Решите $\\sin x = \\dfrac{\\sqrt3}{2}$.
4. Решите $\\sin x = -\\dfrac12$.
5. Решите $2\\sin \\dfrac{x}{2} = \\sqrt2$.
6. Решите $\\sin\\left(x - \\dfrac{\\pi}{4}\\right) = 0$.
7. Найдите все решения $\\sin x = -\\dfrac12$ на $[0; 2\\pi]$.

### Ответы

1. $\\dfrac{\\pi}{4}$; $-\\dfrac{\\pi}{2}$. 2. $-\\dfrac{\\pi}{6} + \\dfrac{2\\pi}{3} = \\dfrac{\\pi}{2}$. 3. $x = (-1)^k \\dfrac{\\pi}{3} + \\pi k$. 4. $x = (-1)^{k+1} \\dfrac{\\pi}{6} + \\pi k$. 5. $\\sin \\dfrac{x}{2} = \\dfrac{\\sqrt2}{2}$, $x = (-1)^k \\dfrac{\\pi}{2} + 2\\pi k$. 6. $x = \\dfrac{\\pi}{4} + \\pi k$. 7. $\\dfrac{7\\pi}{6}$ и $\\dfrac{11\\pi}{6}$.`,
      },
      [
        q(
          t("arcsin a takes values in…", "arcsin a-ն ընդունում է արժեքներ…", "arcsin a принимает значения из…"),
          [t("[−π/2; π/2]", "[−π/2; π/2]-ից", "[−π/2; π/2]"), t("[0; π]", "[0; π]-ից", "[0; π]"), t("(0; π)", "(0; π)-ից", "(0; π)")],
          0,
        ),
        q(
          t("arcsin(−1/2) equals…", "arcsin(−1/2)-ը հավասար է…", "arcsin(−1/2) равен…"),
          [t("−π/6", "−π/6", "−π/6"), t("5π/6", "5π/6", "5π/6"), t("7π/6", "7π/6", "7π/6")],
          0,
        ),
        q(
          t("The solutions of sin x = a (|a| ≤ 1) are…", "sin x = a (|a| ≤ 1) հավասարման լուծումներն են…", "Решения sin x = a (|a| ≤ 1) —"),
          [t("x = ±arcsin a + 2πk", "x = ±arcsin a + 2πk", "x = ±arcsin a + 2πk"), t("x = (−1)ᵏ arcsin a + πk", "x = (−1)ᵏ arcsin a + πk", "x = (−1)ᵏ arcsin a + πk"), t("x = arcsin a + πk", "x = arcsin a + πk", "x = arcsin a + πk")],
          1,
        ),
        q(
          t("The solutions of sin x = 0 are…", "sin x = 0 հավասարման լուծումներն են…", "Решения sin x = 0 —"),
          [t("x = πk", "x = πk", "x = πk"), t("x = π/2 + πk", "x = π/2 + πk", "x = π/2 + πk"), t("x = 2πk", "x = 2πk", "x = 2πk")],
          0,
        ),
        q(
          t("The solutions of sin x = 1 are…", "sin x = 1 հավասարման լուծումներն են…", "Решения sin x = 1 —"),
          [t("x = π/2 + πk", "x = π/2 + πk", "x = π/2 + πk"), t("x = π/2 + 2πk", "x = π/2 + 2πk", "x = π/2 + 2πk"), t("x = 2πk", "x = 2πk", "x = 2πk")],
          1,
        ),
        q(
          t("The solutions of sin x = 1/2 in [0; 2π] are…", "sin x = 1/2 հավասարման լուծումները [0; 2π]-ում…", "Решения sin x = 1/2 на [0; 2π] —"),
          [t("π/6 and 5π/6", "π/6 և 5π/6", "π/6 и 5π/6"), t("π/6 and 7π/6", "π/6 և 7π/6", "π/6 и 7π/6"), t("π/3 and 2π/3", "π/3 և 2π/3", "π/3 и 2π/3")],
          0,
        ),
      ],
    ),
    lesson(
      "arctan",
      ["Arctangent and the equation tan x = a", "Արկտանգենս և tg x = a հավասարումը", "Арктангенс и уравнение tg x = a"],
      {
        en: ["Define arctan a for any real a as an angle from (−π/2; π/2), and arccot a as an angle from (0; π)", "Use arctan(−a) = −arctan a", "Solve tan x = a and cot x = a"],
        hy: ["Սահմանել arctg a-ն ցանկացած իրական a-ի համար որպես (−π/2; π/2)-ին պատկանող անկյուն, իսկ arcctg a-ն՝ որպես (0; π)-ին պատկանող անկյուն", "Օգտվել arctg(−a) = −arctg a բանաձևից", "Լուծել tg x = a և ctg x = a հավասարումները"],
        ru: ["Определять arctg a для любого действительного a как угол из (−π/2; π/2), а arcctg a — как угол из (0; π)", "Использовать формулу arctg(−a) = −arctg a", "Решать уравнения tg x = a и ctg x = a"],
      },
      {
        en: `## Definition

> For any real $a$, $\\arctan a$ is the angle $\\alpha$ from $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ whose tangent equals $a$.

Unlike arcsine and arccosine, arctangent exists for **every** number, because the tangent takes all real values on one branch.

| $a$ | $-\\sqrt3$ | $-1$ | $0$ |
|---|---|---|---|
| $\\arctan a$ | $-\\dfrac{\\pi}{3}$ | $-\\dfrac{\\pi}{4}$ | $0$ |

| $a$ | $\\dfrac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ |
|---|---|---|---|
| $\\arctan a$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |

$\\arctan(-a) = -\\arctan a$.

**Arccotangent.** $\\operatorname{arccot} a$ is the angle from $(0; \\pi)$ whose cotangent is $a$. For example $\\operatorname{arccot} 1 = \\dfrac{\\pi}{4}$, $\\operatorname{arccot}(-1) = \\dfrac{3\\pi}{4}$, and $\\operatorname{arccot}(-a) = \\pi - \\operatorname{arccot} a$.

## The equations

Tangent has period $\\pi$ and takes each value once on each branch, so

$$\\tan x = a \\iff x = \\arctan a + \\pi k, \\qquad \\cot x = a \\iff x = \\operatorname{arccot} a + \\pi k.$$

There is a solution for every real $a$.

**Example 1.** $\\tan x = 1$: $x = \\dfrac{\\pi}{4} + \\pi k$.

**Example 2.** $\\tan x = -\\sqrt3$: $x = -\\dfrac{\\pi}{3} + \\pi k$.

**Example 3.** $\\cot x = \\sqrt3$: $x = \\dfrac{\\pi}{6} + \\pi k$.

**Example 4.** $\\tan\\left(2x + \\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt3}{3}$: $2x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + \\pi k$, so $x = \\dfrac{\\pi k}{2}$.

**Example 5.** $\\tan x = 4$: $x = \\arctan 4 + \\pi k$ ($\\arctan 4 \\approx 1.33$).

## Summary of the simplest equations

| Equation | Condition | Solutions |
|---|---|---|
| $\\cos x = a$ | $\\lvert a\\rvert \\le 1$ | $\\pm\\arccos a + 2\\pi k$ |
| $\\sin x = a$ | $\\lvert a\\rvert \\le 1$ | $(-1)^k \\arcsin a + \\pi k$ |
| $\\tan x = a$ | any $a$ | $\\arctan a + \\pi k$ |
| $\\cot x = a$ | any $a$ | $\\operatorname{arccot} a + \\pi k$ |

### Exercises

1. Compute $\\arctan \\sqrt3$ and $\\arctan(-1)$.
2. Compute $\\arctan 1 + \\arccos\\left(-\\dfrac{\\sqrt2}{2}\\right)$.
3. Solve $\\tan x = \\dfrac{\\sqrt3}{3}$.
4. Solve $\\cot x = -1$.
5. Solve $\\sqrt3 \\tan 3x = 3$.
6. Solve $\\tan\\dfrac{x}{2} = 0$.
7. Find the solutions of $\\tan x = 1$ in $[0; 2\\pi]$.

### Answers

1. $\\dfrac{\\pi}{3}$; $-\\dfrac{\\pi}{4}$. 2. $\\dfrac{\\pi}{4} + \\dfrac{3\\pi}{4} = \\pi$. 3. $x = \\dfrac{\\pi}{6} + \\pi k$. 4. $x = \\dfrac{3\\pi}{4} + \\pi k$. 5. $\\tan 3x = \\sqrt3$, $3x = \\dfrac{\\pi}{3} + \\pi k$, $x = \\dfrac{\\pi}{9} + \\dfrac{\\pi k}{3}$. 6. $x = 2\\pi k$. 7. $\\dfrac{\\pi}{4}$ and $\\dfrac{5\\pi}{4}$.`,
        hy: `## Սահմանում

> Ցանկացած իրական $a$-ի համար $\\operatorname{arctg} a$-ն $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$-ին պատկանող այն $\\alpha$ անկյունն է, որի տանգենսը հավասար է $a$-ի։

Ի տարբերություն արկսինուսի և արկկոսինուսի՝ արկտանգենսը գոյություն ունի **ցանկացած** թվի համար, քանի որ տանգենսը մեկ ճյուղի վրա ընդունում է բոլոր իրական արժեքները։

| $a$ | $-\\sqrt3$ | $-1$ | $0$ |
|---|---|---|---|
| $\\operatorname{arctg} a$ | $-\\dfrac{\\pi}{3}$ | $-\\dfrac{\\pi}{4}$ | $0$ |

| $a$ | $\\dfrac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ |
|---|---|---|---|
| $\\operatorname{arctg} a$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |

$\\operatorname{arctg}(-a) = -\\operatorname{arctg} a$։

**Արկկոտանգենս։** $\\operatorname{arcctg} a$-ն $(0; \\pi)$-ին պատկանող այն անկյունն է, որի կոտանգենսը $a$ է։ Օրինակ՝ $\\operatorname{arcctg} 1 = \\dfrac{\\pi}{4}$, $\\operatorname{arcctg}(-1) = \\dfrac{3\\pi}{4}$, և $\\operatorname{arcctg}(-a) = \\pi - \\operatorname{arcctg} a$։

## Հավասարումները

Տանգենսի պարբերությունը $\\pi$ է, և յուրաքանչյուր ճյուղի վրա այն յուրաքանչյուր արժեք ընդունում է մեկ անգամ, ուստի

$$\\operatorname{tg} x = a \\iff x = \\operatorname{arctg} a + \\pi k, \\qquad \\operatorname{ctg} x = a \\iff x = \\operatorname{arcctg} a + \\pi k.$$

Լուծում կա ցանկացած իրական $a$-ի համար։

**Օրինակ 1։** $\\operatorname{tg} x = 1$՝ $x = \\dfrac{\\pi}{4} + \\pi k$։

**Օրինակ 2։** $\\operatorname{tg} x = -\\sqrt3$՝ $x = -\\dfrac{\\pi}{3} + \\pi k$։

**Օրինակ 3։** $\\operatorname{ctg} x = \\sqrt3$՝ $x = \\dfrac{\\pi}{6} + \\pi k$։

**Օրինակ 4։** $\\operatorname{tg}\\left(2x + \\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt3}{3}$՝ $2x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + \\pi k$, ուստի $x = \\dfrac{\\pi k}{2}$։

**Օրինակ 5։** $\\operatorname{tg} x = 4$՝ $x = \\operatorname{arctg} 4 + \\pi k$ ($\\operatorname{arctg} 4 \\approx 1{,}33$)։

## Ամենապարզ հավասարումների ամփոփում

| Հավասարում | Պայման | Լուծումներ |
|---|---|---|
| $\\cos x = a$ | $\\lvert a\\rvert \\le 1$ | $\\pm\\arccos a + 2\\pi k$ |
| $\\sin x = a$ | $\\lvert a\\rvert \\le 1$ | $(-1)^k \\arcsin a + \\pi k$ |
| $\\operatorname{tg} x = a$ | ցանկացած $a$ | $\\operatorname{arctg} a + \\pi k$ |
| $\\operatorname{ctg} x = a$ | ցանկացած $a$ | $\\operatorname{arcctg} a + \\pi k$ |

### Վարժություններ

1. Հաշվեք $\\operatorname{arctg} \\sqrt3$-ը և $\\operatorname{arctg}(-1)$-ը։
2. Հաշվեք $\\operatorname{arctg} 1 + \\arccos\\left(-\\dfrac{\\sqrt2}{2}\\right)$-ը։
3. Լուծեք $\\operatorname{tg} x = \\dfrac{\\sqrt3}{3}$ հավասարումը։
4. Լուծեք $\\operatorname{ctg} x = -1$ հավասարումը։
5. Լուծեք $\\sqrt3 \\operatorname{tg} 3x = 3$ հավասարումը։
6. Լուծեք $\\operatorname{tg}\\dfrac{x}{2} = 0$ հավասարումը։
7. Գտեք $\\operatorname{tg} x = 1$ հավասարման լուծումները $[0; 2\\pi]$-ում։

### Պատասխաններ

1. $\\dfrac{\\pi}{3}$, $-\\dfrac{\\pi}{4}$։ 2. $\\dfrac{\\pi}{4} + \\dfrac{3\\pi}{4} = \\pi$։ 3. $x = \\dfrac{\\pi}{6} + \\pi k$։ 4. $x = \\dfrac{3\\pi}{4} + \\pi k$։ 5. $\\operatorname{tg} 3x = \\sqrt3$, $3x = \\dfrac{\\pi}{3} + \\pi k$, $x = \\dfrac{\\pi}{9} + \\dfrac{\\pi k}{3}$։ 6. $x = 2\\pi k$։ 7. $\\dfrac{\\pi}{4}$ և $\\dfrac{5\\pi}{4}$։`,
        ru: `## Определение

> Для любого действительного $a$ $\\operatorname{arctg} a$ — это угол $\\alpha$ из $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, тангенс которого равен $a$.

В отличие от арксинуса и арккосинуса, арктангенс существует для **любого** числа: на одной ветви тангенс принимает все действительные значения.

| $a$ | $-\\sqrt3$ | $-1$ | $0$ |
|---|---|---|---|
| $\\operatorname{arctg} a$ | $-\\dfrac{\\pi}{3}$ | $-\\dfrac{\\pi}{4}$ | $0$ |

| $a$ | $\\dfrac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ |
|---|---|---|---|
| $\\operatorname{arctg} a$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |

$\\operatorname{arctg}(-a) = -\\operatorname{arctg} a$.

**Арккотангенс.** $\\operatorname{arcctg} a$ — угол из $(0; \\pi)$, котангенс которого равен $a$. Например, $\\operatorname{arcctg} 1 = \\dfrac{\\pi}{4}$, $\\operatorname{arcctg}(-1) = \\dfrac{3\\pi}{4}$, и $\\operatorname{arcctg}(-a) = \\pi - \\operatorname{arcctg} a$.

## Уравнения

Тангенс имеет период $\\pi$ и на каждой ветви принимает каждое значение один раз, поэтому

$$\\operatorname{tg} x = a \\iff x = \\operatorname{arctg} a + \\pi k, \\qquad \\operatorname{ctg} x = a \\iff x = \\operatorname{arcctg} a + \\pi k.$$

Решение есть при любом действительном $a$.

**Пример 1.** $\\operatorname{tg} x = 1$: $x = \\dfrac{\\pi}{4} + \\pi k$.

**Пример 2.** $\\operatorname{tg} x = -\\sqrt3$: $x = -\\dfrac{\\pi}{3} + \\pi k$.

**Пример 3.** $\\operatorname{ctg} x = \\sqrt3$: $x = \\dfrac{\\pi}{6} + \\pi k$.

**Пример 4.** $\\operatorname{tg}\\left(2x + \\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt3}{3}$: $2x + \\dfrac{\\pi}{6} = \\dfrac{\\pi}{6} + \\pi k$, откуда $x = \\dfrac{\\pi k}{2}$.

**Пример 5.** $\\operatorname{tg} x = 4$: $x = \\operatorname{arctg} 4 + \\pi k$ ($\\operatorname{arctg} 4 \\approx 1{,}33$).

## Сводка простейших уравнений

| Уравнение | Условие | Решения |
|---|---|---|
| $\\cos x = a$ | $\\lvert a\\rvert \\le 1$ | $\\pm\\arccos a + 2\\pi k$ |
| $\\sin x = a$ | $\\lvert a\\rvert \\le 1$ | $(-1)^k \\arcsin a + \\pi k$ |
| $\\operatorname{tg} x = a$ | любое $a$ | $\\operatorname{arctg} a + \\pi k$ |
| $\\operatorname{ctg} x = a$ | любое $a$ | $\\operatorname{arcctg} a + \\pi k$ |

### Упражнения

1. Вычислите $\\operatorname{arctg} \\sqrt3$ и $\\operatorname{arctg}(-1)$.
2. Вычислите $\\operatorname{arctg} 1 + \\arccos\\left(-\\dfrac{\\sqrt2}{2}\\right)$.
3. Решите $\\operatorname{tg} x = \\dfrac{\\sqrt3}{3}$.
4. Решите $\\operatorname{ctg} x = -1$.
5. Решите $\\sqrt3 \\operatorname{tg} 3x = 3$.
6. Решите $\\operatorname{tg}\\dfrac{x}{2} = 0$.
7. Найдите решения $\\operatorname{tg} x = 1$ на $[0; 2\\pi]$.

### Ответы

1. $\\dfrac{\\pi}{3}$; $-\\dfrac{\\pi}{4}$. 2. $\\dfrac{\\pi}{4} + \\dfrac{3\\pi}{4} = \\pi$. 3. $x = \\dfrac{\\pi}{6} + \\pi k$. 4. $x = \\dfrac{3\\pi}{4} + \\pi k$. 5. $\\operatorname{tg} 3x = \\sqrt3$, $3x = \\dfrac{\\pi}{3} + \\pi k$, $x = \\dfrac{\\pi}{9} + \\dfrac{\\pi k}{3}$. 6. $x = 2\\pi k$. 7. $\\dfrac{\\pi}{4}$ и $\\dfrac{5\\pi}{4}$.`,
      },
      [
        q(
          t("arctan a takes values in…", "arctg a-ն ընդունում է արժեքներ…", "arctg a принимает значения из…"),
          [t("(−π/2; π/2)", "(−π/2; π/2)-ից", "(−π/2; π/2)"), t("[0; π]", "[0; π]-ից", "[0; π]"), t("[−1; 1]", "[−1; 1]-ից", "[−1; 1]")],
          0,
        ),
        q(
          t("arctan 1 equals…", "arctg 1-ը հավասար է…", "arctg 1 равен…"),
          [t("π/6", "π/6", "π/6"), t("π/4", "π/4", "π/4"), t("π/3", "π/3", "π/3")],
          1,
        ),
        q(
          t("For which a does the equation tan x = a have solutions?", "Ո՞ր a-երի դեպքում tg x = a հավասարումն ունի լուծումներ", "При каких a уравнение tg x = a имеет решения?"),
          [t("only |a| ≤ 1", "միայն |a| ≤ 1", "только при |a| ≤ 1"), t("only a > 0", "միայն a > 0", "только при a > 0"), t("for every a", "ցանկացած a-ի դեպքում", "при любом a")],
          2,
        ),
        q(
          t("The solutions of tan x = a are…", "tg x = a հավասարման լուծումներն են…", "Решения tg x = a —"),
          [t("x = arctan a + πk", "x = arctg a + πk", "x = arctg a + πk"), t("x = arctan a + 2πk", "x = arctg a + 2πk", "x = arctg a + 2πk"), t("x = ±arctan a + πk", "x = ±arctg a + πk", "x = ±arctg a + πk")],
          0,
        ),
        q(
          t("arctan(−√3) equals…", "arctg(−√3)-ը հավասար է…", "arctg(−√3) равен…"),
          [t("2π/3", "2π/3", "2π/3"), t("−π/3", "−π/3", "−π/3"), t("−π/6", "−π/6", "−π/6")],
          1,
        ),
        q(
          t("arccot(−1) equals…", "arcctg(−1)-ը հավասար է…", "arcctg(−1) равен…"),
          [t("−π/4", "−π/4", "−π/4"), t("3π/4", "3π/4", "3π/4"), t("π/4", "π/4", "π/4")],
          1,
        ),
      ],
    ),
    lesson(
      "trig-equation-methods",
      ["Methods for solving trigonometric equations", "Եռանկյունաչափական հավասարումների լուծման եղանակներ", "Методы решения тригонометрических уравнений"],
      {
        en: ["Reduce an equation to a quadratic in sin x, cos x or tan x", "Solve homogeneous equations a sin x + b cos x = 0 and a sin²x + b sin x cos x + c cos²x = 0 by dividing by a power of cos x", "Solve equations by factoring, and check that no roots are lost or gained"],
        hy: ["Հավասարումը բերել sin x-ի, cos x-ի կամ tg x-ի նկատմամբ քառակուսային հավասարման", "Լուծել a sin x + b cos x = 0 և a sin²x + b sin x cos x + c cos²x = 0 համասեռ հավասարումները՝ բաժանելով cos x-ի աստիճանի վրա", "Լուծել հավասարումներ արտադրիչների վերլուծությամբ և ստուգել, որ արմատներ չեն կորել կամ ավելացել"],
        ru: ["Сводить уравнение к квадратному относительно sin x, cos x или tg x", "Решать однородные уравнения a sin x + b cos x = 0 и a sin²x + b sin x cos x + c cos²x = 0 делением на степень cos x", "Решать уравнения разложением на множители и следить, чтобы корни не терялись и не появлялись лишние"],
      },
      {
        en: `## 1. Substitution: a quadratic equation

**Example 1.** $2\\sin^2 x - \\sin x - 1 = 0$. Let $t = \\sin x$, $-1 \\le t \\le 1$: $2t^2 - t - 1 = 0$, $t = 1$ or $t = -\\dfrac12$.

- $\\sin x = 1$: $x = \\dfrac{\\pi}{2} + 2\\pi k$.
- $\\sin x = -\\dfrac12$: $x = (-1)^{k+1}\\dfrac{\\pi}{6} + \\pi k$.

**Example 2.** $2\\cos^2 x + 3\\sin x - 3 = 0$. Replace $\\cos^2 x = 1 - \\sin^2 x$: $2 - 2\\sin^2 x + 3\\sin x - 3 = 0$, that is $2\\sin^2 x - 3\\sin x + 1 = 0$. Then $\\sin x = 1$ or $\\sin x = \\dfrac12$, so $x = \\dfrac{\\pi}{2} + 2\\pi k$ or $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$.

Always check that $t$ lies in $[-1; 1]$. A root $t = 2$ gives no solutions.

## 2. Homogeneous equations

**Example 3.** $\\sin x - \\sqrt3\\cos x = 0$. If $\\cos x = 0$, then $\\sin x = \\pm 1 \\ne 0$, so $\\cos x \\ne 0$ and we may divide by it: $\\tan x = \\sqrt3$, $x = \\dfrac{\\pi}{3} + \\pi k$.

**Example 4.** $\\sin^2 x - 4\\sin x\\cos x + 3\\cos^2 x = 0$. Divide by $\\cos^2 x$: $\\tan^2 x - 4\\tan x + 3 = 0$, $\\tan x = 1$ or $\\tan x = 3$. So $x = \\dfrac{\\pi}{4} + \\pi k$ or $x = \\arctan 3 + \\pi k$.

## 3. Factoring

**Example 5.** $\\sin 2x = \\cos x$. Write $2\\sin x\\cos x - \\cos x = 0$, $\\cos x(2\\sin x - 1) = 0$:

- $\\cos x = 0$: $x = \\dfrac{\\pi}{2} + \\pi k$;
- $\\sin x = \\dfrac12$: $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$.

**Do not divide by $\\cos x$** here: that would lose the roots where $\\cos x = 0$.

**Example 6.** $\\sin 3x + \\sin x = 0$. Sum to product: $2\\sin 2x\\cos x = 0$. $\\sin 2x = 0$ gives $x = \\dfrac{\\pi k}{2}$; $\\cos x = 0$ gives $x = \\dfrac{\\pi}{2} + \\pi k$, which is already among the first. Answer: $x = \\dfrac{\\pi k}{2}$.

## 4. Lowering the degree

**Example 7.** $\\cos^2 x = \\dfrac14$. Use $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$: $\\cos 2x = -\\dfrac12$, $2x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$, $x = \\pm\\dfrac{\\pi}{3} + \\pi k$.

### Exercises

1. Solve $2\\cos^2 x - \\cos x = 0$.
2. Solve $\\tan^2 x - 3 = 0$.
3. Solve $2\\sin^2 x + \\cos x - 1 = 0$.
4. Solve $\\sin x + \\cos x = 0$.
5. Solve $3\\sin^2 x - 4\\sin x\\cos x + \\cos^2 x = 0$.
6. Solve $\\sin 2x - \\sin x = 0$.
7. Solve $\\cos 2x + \\cos x = 0$.

### Answers

1. $\\cos x = 0$ or $\\cos x = \\dfrac12$: $x = \\dfrac{\\pi}{2} + \\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$. 2. $\\tan x = \\pm\\sqrt3$: $x = \\pm\\dfrac{\\pi}{3} + \\pi k$. 3. $2\\cos^2 x - \\cos x - 1 = 0$, $\\cos x = 1$ or $-\\dfrac12$: $x = 2\\pi k$, $x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$. 4. $\\tan x = -1$, $x = -\\dfrac{\\pi}{4} + \\pi k$. 5. $3\\tan^2 x - 4\\tan x + 1 = 0$: $x = \\dfrac{\\pi}{4} + \\pi k$, $x = \\arctan\\dfrac13 + \\pi k$. 6. $\\sin x(2\\cos x - 1) = 0$: $x = \\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$. 7. $2\\cos^2 x + \\cos x - 1 = 0$, $\\cos x = -1$ or $\\dfrac12$: $x = \\pi + 2\\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.`,
        hy: `## 1. Տեղադրում՝ քառակուսային հավասարում

**Օրինակ 1։** $2\\sin^2 x - \\sin x - 1 = 0$։ Նշանակենք $t = \\sin x$, $-1 \\le t \\le 1$՝ $2t^2 - t - 1 = 0$, $t = 1$ կամ $t = -\\dfrac12$։

- $\\sin x = 1$՝ $x = \\dfrac{\\pi}{2} + 2\\pi k$։
- $\\sin x = -\\dfrac12$՝ $x = (-1)^{k+1}\\dfrac{\\pi}{6} + \\pi k$։

**Օրինակ 2։** $2\\cos^2 x + 3\\sin x - 3 = 0$։ Փոխարինենք $\\cos^2 x = 1 - \\sin^2 x$՝ $2 - 2\\sin^2 x + 3\\sin x - 3 = 0$, այսինքն՝ $2\\sin^2 x - 3\\sin x + 1 = 0$։ Այդ դեպքում $\\sin x = 1$ կամ $\\sin x = \\dfrac12$, ուստի $x = \\dfrac{\\pi}{2} + 2\\pi k$ կամ $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$։

Միշտ ստուգեք, որ $t$-ն պատկանի $[-1; 1]$-ին։ $t = 2$ արմատը լուծումներ չի տալիս։

## 2. Համասեռ հավասարումներ

**Օրինակ 3։** $\\sin x - \\sqrt3\\cos x = 0$։ Եթե $\\cos x = 0$, ապա $\\sin x = \\pm 1 \\ne 0$, ուստի $\\cos x \\ne 0$, և կարող ենք բաժանել դրա վրա՝ $\\operatorname{tg} x = \\sqrt3$, $x = \\dfrac{\\pi}{3} + \\pi k$։

**Օրինակ 4։** $\\sin^2 x - 4\\sin x\\cos x + 3\\cos^2 x = 0$։ Բաժանենք $\\cos^2 x$-ի վրա՝ $\\operatorname{tg}^2 x - 4\\operatorname{tg} x + 3 = 0$, $\\operatorname{tg} x = 1$ կամ $\\operatorname{tg} x = 3$։ Ուստի $x = \\dfrac{\\pi}{4} + \\pi k$ կամ $x = \\operatorname{arctg} 3 + \\pi k$։

## 3. Արտադրիչների վերլուծում

**Օրինակ 5։** $\\sin 2x = \\cos x$։ Գրենք $2\\sin x\\cos x - \\cos x = 0$, $\\cos x(2\\sin x - 1) = 0$․

- $\\cos x = 0$՝ $x = \\dfrac{\\pi}{2} + \\pi k$,
- $\\sin x = \\dfrac12$՝ $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$։

**Այստեղ մի՛ բաժանեք $\\cos x$-ի վրա**՝ այդպես կկորցնեք այն արմատները, որտեղ $\\cos x = 0$։

**Օրինակ 6։** $\\sin 3x + \\sin x = 0$։ Գումարից արտադրյալ՝ $2\\sin 2x\\cos x = 0$։ $\\sin 2x = 0$-ն տալիս է $x = \\dfrac{\\pi k}{2}$, $\\cos x = 0$-ն տալիս է $x = \\dfrac{\\pi}{2} + \\pi k$, որոնք արդեն առաջինների մեջ են։ Պատասխան՝ $x = \\dfrac{\\pi k}{2}$։

## 4. Աստիճանի իջեցում

**Օրինակ 7։** $\\cos^2 x = \\dfrac14$։ Օգտվենք $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$-ից՝ $\\cos 2x = -\\dfrac12$, $2x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$, $x = \\pm\\dfrac{\\pi}{3} + \\pi k$։

### Վարժություններ

1. Լուծեք $2\\cos^2 x - \\cos x = 0$ հավասարումը։
2. Լուծեք $\\operatorname{tg}^2 x - 3 = 0$ հավասարումը։
3. Լուծեք $2\\sin^2 x + \\cos x - 1 = 0$ հավասարումը։
4. Լուծեք $\\sin x + \\cos x = 0$ հավասարումը։
5. Լուծեք $3\\sin^2 x - 4\\sin x\\cos x + \\cos^2 x = 0$ հավասարումը։
6. Լուծեք $\\sin 2x - \\sin x = 0$ հավասարումը։
7. Լուծեք $\\cos 2x + \\cos x = 0$ հավասարումը։

### Պատասխաններ

1. $\\cos x = 0$ կամ $\\cos x = \\dfrac12$՝ $x = \\dfrac{\\pi}{2} + \\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$։ 2. $\\operatorname{tg} x = \\pm\\sqrt3$՝ $x = \\pm\\dfrac{\\pi}{3} + \\pi k$։ 3. $2\\cos^2 x - \\cos x - 1 = 0$, $\\cos x = 1$ կամ $-\\dfrac12$՝ $x = 2\\pi k$, $x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$։ 4. $\\operatorname{tg} x = -1$, $x = -\\dfrac{\\pi}{4} + \\pi k$։ 5. $3\\operatorname{tg}^2 x - 4\\operatorname{tg} x + 1 = 0$՝ $x = \\dfrac{\\pi}{4} + \\pi k$, $x = \\operatorname{arctg}\\dfrac13 + \\pi k$։ 6. $\\sin x(2\\cos x - 1) = 0$՝ $x = \\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$։ 7. $2\\cos^2 x + \\cos x - 1 = 0$, $\\cos x = -1$ կամ $\\dfrac12$՝ $x = \\pi + 2\\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$։`,
        ru: `## 1. Замена: квадратное уравнение

**Пример 1.** $2\\sin^2 x - \\sin x - 1 = 0$. Пусть $t = \\sin x$, $-1 \\le t \\le 1$: $2t^2 - t - 1 = 0$, $t = 1$ или $t = -\\dfrac12$.

- $\\sin x = 1$: $x = \\dfrac{\\pi}{2} + 2\\pi k$.
- $\\sin x = -\\dfrac12$: $x = (-1)^{k+1}\\dfrac{\\pi}{6} + \\pi k$.

**Пример 2.** $2\\cos^2 x + 3\\sin x - 3 = 0$. Заменим $\\cos^2 x = 1 - \\sin^2 x$: $2 - 2\\sin^2 x + 3\\sin x - 3 = 0$, то есть $2\\sin^2 x - 3\\sin x + 1 = 0$. Тогда $\\sin x = 1$ или $\\sin x = \\dfrac12$, откуда $x = \\dfrac{\\pi}{2} + 2\\pi k$ или $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$.

Всегда проверяйте, что $t$ лежит в $[-1; 1]$. Корень $t = 2$ решений не даёт.

## 2. Однородные уравнения

**Пример 3.** $\\sin x - \\sqrt3\\cos x = 0$. Если $\\cos x = 0$, то $\\sin x = \\pm 1 \\ne 0$, значит, $\\cos x \\ne 0$ и на него можно делить: $\\operatorname{tg} x = \\sqrt3$, $x = \\dfrac{\\pi}{3} + \\pi k$.

**Пример 4.** $\\sin^2 x - 4\\sin x\\cos x + 3\\cos^2 x = 0$. Делим на $\\cos^2 x$: $\\operatorname{tg}^2 x - 4\\operatorname{tg} x + 3 = 0$, $\\operatorname{tg} x = 1$ или $\\operatorname{tg} x = 3$. Значит, $x = \\dfrac{\\pi}{4} + \\pi k$ или $x = \\operatorname{arctg} 3 + \\pi k$.

## 3. Разложение на множители

**Пример 5.** $\\sin 2x = \\cos x$. Запишем $2\\sin x\\cos x - \\cos x = 0$, $\\cos x(2\\sin x - 1) = 0$:

- $\\cos x = 0$: $x = \\dfrac{\\pi}{2} + \\pi k$;
- $\\sin x = \\dfrac12$: $x = (-1)^k\\dfrac{\\pi}{6} + \\pi k$.

**Не делите здесь на $\\cos x$**: так теряются корни, где $\\cos x = 0$.

**Пример 6.** $\\sin 3x + \\sin x = 0$. Сумма в произведение: $2\\sin 2x\\cos x = 0$. $\\sin 2x = 0$ даёт $x = \\dfrac{\\pi k}{2}$; $\\cos x = 0$ даёт $x = \\dfrac{\\pi}{2} + \\pi k$ — они уже входят в первую серию. Ответ: $x = \\dfrac{\\pi k}{2}$.

## 4. Понижение степени

**Пример 7.** $\\cos^2 x = \\dfrac14$. По формуле $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$: $\\cos 2x = -\\dfrac12$, $2x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$, $x = \\pm\\dfrac{\\pi}{3} + \\pi k$.

### Упражнения

1. Решите $2\\cos^2 x - \\cos x = 0$.
2. Решите $\\operatorname{tg}^2 x - 3 = 0$.
3. Решите $2\\sin^2 x + \\cos x - 1 = 0$.
4. Решите $\\sin x + \\cos x = 0$.
5. Решите $3\\sin^2 x - 4\\sin x\\cos x + \\cos^2 x = 0$.
6. Решите $\\sin 2x - \\sin x = 0$.
7. Решите $\\cos 2x + \\cos x = 0$.

### Ответы

1. $\\cos x = 0$ или $\\cos x = \\dfrac12$: $x = \\dfrac{\\pi}{2} + \\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$. 2. $\\operatorname{tg} x = \\pm\\sqrt3$: $x = \\pm\\dfrac{\\pi}{3} + \\pi k$. 3. $2\\cos^2 x - \\cos x - 1 = 0$, $\\cos x = 1$ или $-\\dfrac12$: $x = 2\\pi k$, $x = \\pm\\dfrac{2\\pi}{3} + 2\\pi k$. 4. $\\operatorname{tg} x = -1$, $x = -\\dfrac{\\pi}{4} + \\pi k$. 5. $3\\operatorname{tg}^2 x - 4\\operatorname{tg} x + 1 = 0$: $x = \\dfrac{\\pi}{4} + \\pi k$, $x = \\operatorname{arctg}\\dfrac13 + \\pi k$. 6. $\\sin x(2\\cos x - 1) = 0$: $x = \\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$. 7. $2\\cos^2 x + \\cos x - 1 = 0$, $\\cos x = -1$ или $\\dfrac12$: $x = \\pi + 2\\pi k$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.`,
      },
      [
        q(
          t("In 2sin²x − sin x − 1 = 0 we substitute…", "2sin²x − sin x − 1 = 0 հավասարման մեջ նշանակում ենք…", "В уравнении 2sin²x − sin x − 1 = 0 делают замену…"),
          [t("t = sin x", "t = sin x", "t = sin x"), t("t = cos x", "t = cos x", "t = cos x"), t("t = 2x", "t = 2x", "t = 2x")],
          0,
        ),
        q(
          t("After the substitution t = sin x, which root must be rejected?", "t = sin x նշանակումից հետո ո՞ր արմատը պետք է մերժել", "После замены t = sin x какой корень нужно отбросить?"),
          [t("t = 1", "t = 1", "t = 1"), t("t = −1/2", "t = −1/2", "t = −1/2"), t("t = 2", "t = 2", "t = 2")],
          2,
        ),
        q(
          t("sin x − √3 cos x = 0 is solved by dividing by…", "sin x − √3 cos x = 0 հավասարումը լուծվում է բաժանելով…", "sin x − √3 cos x = 0 решают делением на…"),
          [t("sin x", "sin x-ի վրա", "sin x"), t("cos x", "cos x-ի վրա", "cos x"), t("√3", "√3-ի վրա", "√3")],
          1,
        ),
        q(
          t("Why must we not divide sin 2x = cos x by cos x?", "Ինչու՞ չի կարելի sin 2x = cos x-ը բաժանել cos x-ի վրա", "Почему нельзя делить sin 2x = cos x на cos x?"),
          [t("roots with cos x = 0 would be lost", "կկորչեն cos x = 0 արմատները", "потеряются корни с cos x = 0"), t("extra roots would appear", "կհայտնվեն ավելորդ արմատներ", "появятся лишние корни"), t("cos x is always zero", "cos x-ը միշտ զրո է", "cos x всегда равен нулю")],
          0,
        ),
        q(
          t("The solutions of tan x = −1 are…", "tg x = −1 հավասարման լուծումներն են…", "Решения tg x = −1 —"),
          [t("x = −π/4 + πk", "x = −π/4 + πk", "x = −π/4 + πk"), t("x = π/4 + πk", "x = π/4 + πk", "x = π/4 + πk"), t("x = −π/4 + 2πk", "x = −π/4 + 2πk", "x = −π/4 + 2πk")],
          0,
        ),
        q(
          t("sin 3x + sin x = 0 becomes…", "sin 3x + sin x = 0 հավասարումը դառնում է…", "sin 3x + sin x = 0 превращается в…"),
          [t("2 sin 2x cos x = 0", "2 sin 2x cos x = 0", "2 sin 2x cos x = 0"), t("sin 4x = 0", "sin 4x = 0", "sin 4x = 0"), t("2 cos 2x sin x = 0", "2 cos 2x sin x = 0", "2 cos 2x sin x = 0")],
          0,
        ),
      ],
    ),
    lesson(
      "trig-inequalities",
      ["Simplest trigonometric inequalities", "Ամենապարզ եռանկյունաչափական անհավասարություններ", "Простейшие тригонометрические неравенства"],
      {
        en: ["Solve sin x > a, sin x < a, cos x > a and cos x < a with the unit circle", "Solve tan x > a and tan x < a with the graph", "Write the answer as an interval with the period added"],
        hy: ["Լուծել sin x > a, sin x < a, cos x > a և cos x < a անհավասարությունները միավոր շրջանագծով", "Լուծել tg x > a և tg x < a անհավասարությունները գրաֆիկով", "Գրել պատասխանը միջակայքի տեսքով՝ ավելացնելով պարբերությունը"],
        ru: ["Решать sin x > a, sin x < a, cos x > a и cos x < a с помощью единичной окружности", "Решать tg x > a и tg x < a с помощью графика", "Записывать ответ в виде промежутка с добавлением периода"],
      },
      {
        en: `## Method with the unit circle

1. Draw the line $y = a$ (for sine) or $x = a$ (for cosine).
2. Mark the arc of the circle where the condition holds.
3. Find the two ends of the arc, going **anticlockwise** from the smaller to the larger angle.
4. Add the period $2\\pi k$.

## Sine

**Example 1.** $\\sin x > \\dfrac12$. The line $y = \\dfrac12$ cuts the circle at $\\dfrac{\\pi}{6}$ and $\\dfrac{5\\pi}{6}$. The points above the line form the upper arc between them:

$$\\frac{\\pi}{6} + 2\\pi k < x < \\frac{5\\pi}{6} + 2\\pi k.$$

**Example 2.** $\\sin x \\le -\\dfrac{\\sqrt2}{2}$. The line cuts the circle at $-\\dfrac{3\\pi}{4}$ and $-\\dfrac{\\pi}{4}$ (going anticlockwise along the lower arc):

$$-\\frac{3\\pi}{4} + 2\\pi k \\le x \\le -\\frac{\\pi}{4} + 2\\pi k.$$

## Cosine

**Example 3.** $\\cos x > \\dfrac12$. The line $x = \\dfrac12$ cuts the circle at $\\pm\\dfrac{\\pi}{3}$. The points to the right form the arc from $-\\dfrac{\\pi}{3}$ to $\\dfrac{\\pi}{3}$:

$$-\\frac{\\pi}{3} + 2\\pi k < x < \\frac{\\pi}{3} + 2\\pi k.$$

**Example 4.** $\\cos x < -\\dfrac{\\sqrt3}{2}$. Ends at $\\dfrac{5\\pi}{6}$ and $\\dfrac{7\\pi}{6}$, the left arc:

$$\\frac{5\\pi}{6} + 2\\pi k < x < \\frac{7\\pi}{6} + 2\\pi k.$$

## Tangent

On one branch $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ the tangent increases, and the period is $\\pi$.

**Example 5.** $\\tan x \\ge 1$: $\\dfrac{\\pi}{4} + \\pi k \\le x < \\dfrac{\\pi}{2} + \\pi k$. The right end is open because the tangent is not defined there.

**Example 6.** $\\tan x < \\sqrt3$: $-\\dfrac{\\pi}{2} + \\pi k < x < \\dfrac{\\pi}{3} + \\pi k$.

## Special cases

$\\sin x \\le 1$ holds for all $x$; $\\sin x > 1$ has no solutions; $\\cos x \\ge -1$ holds for all $x$.

### Exercises

1. Solve $\\sin x < \\dfrac12$.
2. Solve $\\sin x \\ge \\dfrac{\\sqrt3}{2}$.
3. Solve $\\cos x \\le \\dfrac{\\sqrt2}{2}$.
4. Solve $\\cos x > -\\dfrac12$.
5. Solve $\\tan x > -1$.
6. Solve $2\\sin x + 1 > 0$.
7. Solve $\\cos x < 2$.

### Answers

1. $-\\dfrac{7\\pi}{6} + 2\\pi k < x < \\dfrac{\\pi}{6} + 2\\pi k$. 2. $\\dfrac{\\pi}{3} + 2\\pi k \\le x \\le \\dfrac{2\\pi}{3} + 2\\pi k$. 3. $\\dfrac{\\pi}{4} + 2\\pi k \\le x \\le \\dfrac{7\\pi}{4} + 2\\pi k$. 4. $-\\dfrac{2\\pi}{3} + 2\\pi k < x < \\dfrac{2\\pi}{3} + 2\\pi k$. 5. $-\\dfrac{\\pi}{4} + \\pi k < x < \\dfrac{\\pi}{2} + \\pi k$. 6. $\\sin x > -\\dfrac12$: $-\\dfrac{\\pi}{6} + 2\\pi k < x < \\dfrac{7\\pi}{6} + 2\\pi k$. 7. All real $x$.`,
        hy: `## Միավոր շրջանագծի եղանակը

1. Կառուցեք $y = a$ ուղիղը (սինուսի համար) կամ $x = a$ ուղիղը (կոսինուսի համար)։
2. Նշեք շրջանագծի այն աղեղը, որտեղ պայմանը տեղի ունի։
3. Գտեք աղեղի երկու ծայրերը՝ շարժվելով **ժամացույցի սլաքի հակառակ** ուղղությամբ փոքր անկյունից դեպի մեծը։
4. Ավելացրեք $2\\pi k$ պարբերությունը։

## Սինուս

**Օրինակ 1։** $\\sin x > \\dfrac12$։ $y = \\dfrac12$ ուղիղը շրջանագիծը հատում է $\\dfrac{\\pi}{6}$ և $\\dfrac{5\\pi}{6}$ կետերում։ Ուղղից վերև գտնվող կետերը կազմում են նրանց միջև վերին աղեղը՝

$$\\frac{\\pi}{6} + 2\\pi k < x < \\frac{5\\pi}{6} + 2\\pi k.$$

**Օրինակ 2։** $\\sin x \\le -\\dfrac{\\sqrt2}{2}$։ Ուղիղը շրջանագիծը հատում է $-\\dfrac{3\\pi}{4}$ և $-\\dfrac{\\pi}{4}$ կետերում (ստորին աղեղով ժամացույցի սլաքի հակառակ ուղղությամբ)՝

$$-\\frac{3\\pi}{4} + 2\\pi k \\le x \\le -\\frac{\\pi}{4} + 2\\pi k.$$

## Կոսինուս

**Օրինակ 3։** $\\cos x > \\dfrac12$։ $x = \\dfrac12$ ուղիղը շրջանագիծը հատում է $\\pm\\dfrac{\\pi}{3}$ կետերում։ Աջ կողմի կետերը կազմում են $-\\dfrac{\\pi}{3}$-ից $\\dfrac{\\pi}{3}$ աղեղը՝

$$-\\frac{\\pi}{3} + 2\\pi k < x < \\frac{\\pi}{3} + 2\\pi k.$$

**Օրինակ 4։** $\\cos x < -\\dfrac{\\sqrt3}{2}$։ Ծայրերն են $\\dfrac{5\\pi}{6}$-ը և $\\dfrac{7\\pi}{6}$-ը, ձախ աղեղը՝

$$\\frac{5\\pi}{6} + 2\\pi k < x < \\frac{7\\pi}{6} + 2\\pi k.$$

## Տանգենս

Մեկ ճյուղի վրա՝ $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$-ում, տանգենսն աճում է, իսկ պարբերությունը $\\pi$ է։

**Օրինակ 5։** $\\operatorname{tg} x \\ge 1$՝ $\\dfrac{\\pi}{4} + \\pi k \\le x < \\dfrac{\\pi}{2} + \\pi k$։ Աջ ծայրը բաց է, քանի որ այնտեղ տանգենսը որոշված չէ։

**Օրինակ 6։** $\\operatorname{tg} x < \\sqrt3$՝ $-\\dfrac{\\pi}{2} + \\pi k < x < \\dfrac{\\pi}{3} + \\pi k$։

## Մասնավոր դեպքեր

$\\sin x \\le 1$-ը ճիշտ է բոլոր $x$-երի համար, $\\sin x > 1$-ը լուծումներ չունի, $\\cos x \\ge -1$-ը ճիշտ է բոլոր $x$-երի համար։

### Վարժություններ

1. Լուծեք $\\sin x < \\dfrac12$ անհավասարությունը։
2. Լուծեք $\\sin x \\ge \\dfrac{\\sqrt3}{2}$ անհավասարությունը։
3. Լուծեք $\\cos x \\le \\dfrac{\\sqrt2}{2}$ անհավասարությունը։
4. Լուծեք $\\cos x > -\\dfrac12$ անհավասարությունը։
5. Լուծեք $\\operatorname{tg} x > -1$ անհավասարությունը։
6. Լուծեք $2\\sin x + 1 > 0$ անհավասարությունը։
7. Լուծեք $\\cos x < 2$ անհավասարությունը։

### Պատասխաններ

1. $-\\dfrac{7\\pi}{6} + 2\\pi k < x < \\dfrac{\\pi}{6} + 2\\pi k$։ 2. $\\dfrac{\\pi}{3} + 2\\pi k \\le x \\le \\dfrac{2\\pi}{3} + 2\\pi k$։ 3. $\\dfrac{\\pi}{4} + 2\\pi k \\le x \\le \\dfrac{7\\pi}{4} + 2\\pi k$։ 4. $-\\dfrac{2\\pi}{3} + 2\\pi k < x < \\dfrac{2\\pi}{3} + 2\\pi k$։ 5. $-\\dfrac{\\pi}{4} + \\pi k < x < \\dfrac{\\pi}{2} + \\pi k$։ 6. $\\sin x > -\\dfrac12$՝ $-\\dfrac{\\pi}{6} + 2\\pi k < x < \\dfrac{7\\pi}{6} + 2\\pi k$։ 7. Բոլոր իրական $x$-երը։`,
        ru: `## Метод единичной окружности

1. Проведите прямую $y = a$ (для синуса) или $x = a$ (для косинуса).
2. Отметьте дугу окружности, где условие выполняется.
3. Найдите два конца дуги, двигаясь **против часовой стрелки** от меньшего угла к большему.
4. Добавьте период $2\\pi k$.

## Синус

**Пример 1.** $\\sin x > \\dfrac12$. Прямая $y = \\dfrac12$ пересекает окружность в точках $\\dfrac{\\pi}{6}$ и $\\dfrac{5\\pi}{6}$. Точки выше прямой образуют верхнюю дугу между ними:

$$\\frac{\\pi}{6} + 2\\pi k < x < \\frac{5\\pi}{6} + 2\\pi k.$$

**Пример 2.** $\\sin x \\le -\\dfrac{\\sqrt2}{2}$. Прямая пересекает окружность в точках $-\\dfrac{3\\pi}{4}$ и $-\\dfrac{\\pi}{4}$ (по нижней дуге против часовой стрелки):

$$-\\frac{3\\pi}{4} + 2\\pi k \\le x \\le -\\frac{\\pi}{4} + 2\\pi k.$$

## Косинус

**Пример 3.** $\\cos x > \\dfrac12$. Прямая $x = \\dfrac12$ пересекает окружность в точках $\\pm\\dfrac{\\pi}{3}$. Точки правее образуют дугу от $-\\dfrac{\\pi}{3}$ до $\\dfrac{\\pi}{3}$:

$$-\\frac{\\pi}{3} + 2\\pi k < x < \\frac{\\pi}{3} + 2\\pi k.$$

**Пример 4.** $\\cos x < -\\dfrac{\\sqrt3}{2}$. Концы $\\dfrac{5\\pi}{6}$ и $\\dfrac{7\\pi}{6}$, левая дуга:

$$\\frac{5\\pi}{6} + 2\\pi k < x < \\frac{7\\pi}{6} + 2\\pi k.$$

## Тангенс

На одной ветви $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ тангенс возрастает, период $\\pi$.

**Пример 5.** $\\operatorname{tg} x \\ge 1$: $\\dfrac{\\pi}{4} + \\pi k \\le x < \\dfrac{\\pi}{2} + \\pi k$. Правый конец открыт: там тангенс не определён.

**Пример 6.** $\\operatorname{tg} x < \\sqrt3$: $-\\dfrac{\\pi}{2} + \\pi k < x < \\dfrac{\\pi}{3} + \\pi k$.

## Особые случаи

$\\sin x \\le 1$ верно при всех $x$; $\\sin x > 1$ решений не имеет; $\\cos x \\ge -1$ верно при всех $x$.

### Упражнения

1. Решите $\\sin x < \\dfrac12$.
2. Решите $\\sin x \\ge \\dfrac{\\sqrt3}{2}$.
3. Решите $\\cos x \\le \\dfrac{\\sqrt2}{2}$.
4. Решите $\\cos x > -\\dfrac12$.
5. Решите $\\operatorname{tg} x > -1$.
6. Решите $2\\sin x + 1 > 0$.
7. Решите $\\cos x < 2$.

### Ответы

1. $-\\dfrac{7\\pi}{6} + 2\\pi k < x < \\dfrac{\\pi}{6} + 2\\pi k$. 2. $\\dfrac{\\pi}{3} + 2\\pi k \\le x \\le \\dfrac{2\\pi}{3} + 2\\pi k$. 3. $\\dfrac{\\pi}{4} + 2\\pi k \\le x \\le \\dfrac{7\\pi}{4} + 2\\pi k$. 4. $-\\dfrac{2\\pi}{3} + 2\\pi k < x < \\dfrac{2\\pi}{3} + 2\\pi k$. 5. $-\\dfrac{\\pi}{4} + \\pi k < x < \\dfrac{\\pi}{2} + \\pi k$. 6. $\\sin x > -\\dfrac12$: $-\\dfrac{\\pi}{6} + 2\\pi k < x < \\dfrac{7\\pi}{6} + 2\\pi k$. 7. Все действительные $x$.`,
      },
      [
        q(
          t("The solutions of sin x > 1/2 are…", "sin x > 1/2 անհավասարության լուծումներն են…", "Решения sin x > 1/2 —"),
          [t("π/6 + 2πk < x < 5π/6 + 2πk", "π/6 + 2πk < x < 5π/6 + 2πk", "π/6 + 2πk < x < 5π/6 + 2πk"), t("−π/6 + 2πk < x < π/6 + 2πk", "−π/6 + 2πk < x < π/6 + 2πk", "−π/6 + 2πk < x < π/6 + 2πk"), t("π/3 + 2πk < x < 2π/3 + 2πk", "π/3 + 2πk < x < 2π/3 + 2πk", "π/3 + 2πk < x < 2π/3 + 2πk")],
          0,
        ),
        q(
          t("The solutions of cos x > 1/2 are…", "cos x > 1/2 անհավասարության լուծումներն են…", "Решения cos x > 1/2 —"),
          [t("π/3 + 2πk < x < 5π/3 + 2πk", "π/3 + 2πk < x < 5π/3 + 2πk", "π/3 + 2πk < x < 5π/3 + 2πk"), t("−π/3 + 2πk < x < π/3 + 2πk", "−π/3 + 2πk < x < π/3 + 2πk", "−π/3 + 2πk < x < π/3 + 2πk"), t("−π/6 + 2πk < x < π/6 + 2πk", "−π/6 + 2πk < x < π/6 + 2πk", "−π/6 + 2πk < x < π/6 + 2πk")],
          1,
        ),
        q(
          t("For sine inequalities we draw the line…", "Սինուսով անհավասարությունների համար կառուցում ենք…", "Для неравенств с синусом проводят прямую…"),
          [t("y = a", "y = a ուղիղը", "y = a"), t("x = a", "x = a ուղիղը", "x = a"), t("y = x", "y = x ուղիղը", "y = x")],
          0,
        ),
        q(
          t("The period added in tan x > a is…", "tg x > a անհավասարության մեջ ավելացվող պարբերությունը…", "В неравенстве tg x > a добавляют период…"),
          [t("2πk", "2πk", "2πk"), t("πk", "πk", "πk"), t("πk/2", "πk/2", "πk/2")],
          1,
        ),
        q(
          t("The solutions of sin x > 1 are…", "sin x > 1 անհավասարության լուծումները…", "Решения sin x > 1 —"),
          [t("all x", "բոլոր x-երն են", "все x"), t("x = π/2 + 2πk", "x = π/2 + 2πk", "x = π/2 + 2πk"), t("there are none", "չկան", "их нет")],
          2,
        ),
        q(
          t("The solutions of tan x ≥ 1 are…", "tg x ≥ 1 անհավասարության լուծումներն են…", "Решения tg x ≥ 1 —"),
          [t("π/4 + πk ≤ x < π/2 + πk", "π/4 + πk ≤ x < π/2 + πk", "π/4 + πk ≤ x < π/2 + πk"), t("π/4 + πk ≤ x ≤ π/2 + πk", "π/4 + πk ≤ x ≤ π/2 + πk", "π/4 + πk ≤ x ≤ π/2 + πk"), t("−π/2 + πk < x ≤ π/4 + πk", "−π/2 + πk < x ≤ π/4 + πk", "−π/2 + πk < x ≤ π/4 + πk")],
          0,
        ),
      ],
    ),
  ],
};
