import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Trigonometric functions", "Եռանկյունաչափական ֆունկցիաներ", "Тригонометрические функции"),
  summary: t(
    "Radian measure, rotation of a point on the unit circle, sine, cosine, tangent and cotangent of any angle, their signs in the quarters, and the basic identities.",
    "Ռադիանային չափ, կետի պտույտ միավոր շրջանագծի վրա, ցանկացած անկյան սինուս, կոսինուս, տանգենս և կոտանգենս, նրանց նշանները քառորդներում և հիմնական նույնությունները։",
    "Радианная мера, поворот точки по единичной окружности, синус, косинус, тангенс и котангенс любого угла, их знаки по четвертям и основные тождества.",
  ),
  lessons: [
    lesson(
      "radians",
      ["Angles in radians", "Անկյուններ ռադիաններով", "Радианная мера угла"],
      {
        en: ["Define one radian and convert angles from degrees to radians and back", "Remember the radian measure of the standard angles 30°, 45°, 60°, 90°, 180°, 270° and 360°", "Find the length of an arc and the area of a sector with the angle in radians"],
        hy: ["Սահմանել մեկ ռադիանը և անկյուններն աստիճաններից վերածել ռադիանների ու հակառակը", "Հիշել 30°, 45°, 60°, 90°, 180°, 270° և 360° ստանդարտ անկյունների ռադիանային չափը", "Գտնել աղեղի երկարությունը և սեկտորի մակերեսը՝ անկյունը ռադիաններով"],
        ru: ["Определять радиан и переводить углы из градусов в радианы и обратно", "Помнить радианную меру стандартных углов 30°, 45°, 60°, 90°, 180°, 270° и 360°", "Находить длину дуги и площадь сектора при угле в радианах"],
      },
      {
        en: `## One radian

> An angle of **one radian** is a central angle that cuts off an arc equal in length to the radius.

The whole circle has length $2\\pi R$, so it contains $2\\pi$ radians:

$$360^\\circ = 2\\pi \\text{ rad}, \\qquad 180^\\circ = \\pi \\text{ rad}, \\qquad 1 \\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57^\\circ.$$

## Converting

$$\\alpha_{\\text{rad}} = \\frac{\\pi}{180^\\circ} \\cdot \\alpha^\\circ, \\qquad \\alpha^\\circ = \\frac{180^\\circ}{\\pi} \\cdot \\alpha_{\\text{rad}}.$$

| Degrees | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ |
|---|---|---|---|---|
| Radians | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |

| Degrees | $90^\\circ$ | $180^\\circ$ | $270^\\circ$ | $360^\\circ$ |
|---|---|---|---|---|
| Radians | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |

**Example 1.** $150^\\circ = \\dfrac{\\pi}{180} \\cdot 150 = \\dfrac{5\\pi}{6}$.

**Example 2.** $\\dfrac{7\\pi}{4} = \\dfrac{180^\\circ}{\\pi} \\cdot \\dfrac{7\\pi}{4} = 315^\\circ$.

**Example 3.** $2$ rad $\\approx 2 \\cdot 57.3^\\circ \\approx 114.6^\\circ$.

The word "rad" is usually omitted: $\\sin 2$ means the sine of $2$ radians.

## Arc and sector

With the angle $\\alpha$ in radians:

$$l = \\alpha R, \\qquad S = \\frac{\\alpha R^2}{2}.$$

**Example 4.** $R = 6$ cm, $\\alpha = \\dfrac{\\pi}{3}$: $l = 2\\pi \\approx 6.28$ cm, $S = \\dfrac{\\pi}{3} \\cdot \\dfrac{36}{2} = 6\\pi \\approx 18.8$ cm².

### Exercises

1. Convert to radians: $120^\\circ$; $210^\\circ$; $36^\\circ$.
2. Convert to degrees: $\\dfrac{2\\pi}{3}$; $\\dfrac{5\\pi}{4}$; $\\dfrac{\\pi}{12}$.
3. How many degrees are in $3$ rad, approximately?
4. Which is greater: $1$ rad or $60^\\circ$?
5. Find the arc length for $R = 10$ and $\\alpha = 0.6$ rad.
6. Find the area of a sector with $R = 4$ and $\\alpha = \\dfrac{\\pi}{4}$.
7. A wheel turns through $5\\pi$ rad. How many full turns is that?

### Answers

1. $\\dfrac{2\\pi}{3}$; $\\dfrac{7\\pi}{6}$; $\\dfrac{\\pi}{5}$. 2. $120^\\circ$; $225^\\circ$; $15^\\circ$. 3. About $172^\\circ$. 4. $60^\\circ = \\dfrac{\\pi}{3} \\approx 1.05$ rad, so $60^\\circ$ is greater. 5. $l = 6$. 6. $S = 2\\pi$. 7. Two and a half turns.`,
        hy: `## Մեկ ռադիան

> **Մեկ ռադիան** անկյունն այն կենտրոնային անկյունն է, որը հատում է շառավղին հավասար երկարությամբ աղեղ։

Ամբողջ շրջանագծի երկարությունը $2\\pi R$ է, ուստի այն պարունակում է $2\\pi$ ռադիան՝

$$360^\\circ = 2\\pi \\text{ ռադ}, \\qquad 180^\\circ = \\pi \\text{ ռադ}, \\qquad 1 \\text{ ռադ} = \\frac{180^\\circ}{\\pi} \\approx 57^\\circ.$$

## Վերածում

$$\\alpha_{\\text{ռադ}} = \\frac{\\pi}{180^\\circ} \\cdot \\alpha^\\circ, \\qquad \\alpha^\\circ = \\frac{180^\\circ}{\\pi} \\cdot \\alpha_{\\text{ռադ}}.$$

| Աստիճան | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ |
|---|---|---|---|---|
| Ռադիան | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |

| Աստիճան | $90^\\circ$ | $180^\\circ$ | $270^\\circ$ | $360^\\circ$ |
|---|---|---|---|---|
| Ռադիան | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |

**Օրինակ 1։** $150^\\circ = \\dfrac{\\pi}{180} \\cdot 150 = \\dfrac{5\\pi}{6}$։

**Օրինակ 2։** $\\dfrac{7\\pi}{4} = \\dfrac{180^\\circ}{\\pi} \\cdot \\dfrac{7\\pi}{4} = 315^\\circ$։

**Օրինակ 3։** $2$ ռադ $\\approx 2 \\cdot 57{,}3^\\circ \\approx 114{,}6^\\circ$։

«Ռադ» բառը սովորաբար բաց է թողնվում՝ $\\sin 2$-ը նշանակում է $2$ ռադիանի սինուս։

## Աղեղ և սեկտոր

Երբ $\\alpha$ անկյունը ռադիաններով է՝

$$l = \\alpha R, \\qquad S = \\frac{\\alpha R^2}{2}.$$

**Օրինակ 4։** $R = 6$ սմ, $\\alpha = \\dfrac{\\pi}{3}$՝ $l = 2\\pi \\approx 6{,}28$ սմ, $S = \\dfrac{\\pi}{3} \\cdot \\dfrac{36}{2} = 6\\pi \\approx 18{,}8$ սմ²։

### Վարժություններ

1. Վերածի՛ր ռադիանների՝ $120^\\circ$, $210^\\circ$, $36^\\circ$։
2. Վերածի՛ր աստիճանների՝ $\\dfrac{2\\pi}{3}$, $\\dfrac{5\\pi}{4}$, $\\dfrac{\\pi}{12}$։
3. Մոտավորապես քանի՞ աստիճան է $3$ ռադը։
4. Ո՞րն է մեծ՝ $1$ ռադը, թե՞ $60^\\circ$-ը։
5. Գտի՛ր աղեղի երկարությունը, եթե $R = 10$ և $\\alpha = 0{,}6$ ռադ։
6. Գտի՛ր սեկտորի մակերեսը, եթե $R = 4$ և $\\alpha = \\dfrac{\\pi}{4}$։
7. Անիվը պտտվում է $5\\pi$ ռադով։ Քանի՞ լրիվ պտույտ է դա։

### Պատասխաններ

1. $\\dfrac{2\\pi}{3}$, $\\dfrac{7\\pi}{6}$, $\\dfrac{\\pi}{5}$։ 2. $120^\\circ$, $225^\\circ$, $15^\\circ$։ 3. Մոտ $172^\\circ$։ 4. $60^\\circ = \\dfrac{\\pi}{3} \\approx 1{,}05$ ռադ, ուստի $60^\\circ$-ն է մեծ։ 5. $l = 6$։ 6. $S = 2\\pi$։ 7. Երկուսուկես պտույտ։`,
        ru: `## Один радиан

> **Угол в один радиан** — это центральный угол, опирающийся на дугу, длина которой равна радиусу.

Длина всей окружности $2\\pi R$, поэтому в ней $2\\pi$ радиан:

$$360^\\circ = 2\\pi \\text{ рад}, \\qquad 180^\\circ = \\pi \\text{ рад}, \\qquad 1 \\text{ рад} = \\frac{180^\\circ}{\\pi} \\approx 57^\\circ.$$

## Перевод

$$\\alpha_{\\text{рад}} = \\frac{\\pi}{180^\\circ} \\cdot \\alpha^\\circ, \\qquad \\alpha^\\circ = \\frac{180^\\circ}{\\pi} \\cdot \\alpha_{\\text{рад}}.$$

| Градусы | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ |
|---|---|---|---|---|
| Радианы | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |

| Градусы | $90^\\circ$ | $180^\\circ$ | $270^\\circ$ | $360^\\circ$ |
|---|---|---|---|---|
| Радианы | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |

**Пример 1.** $150^\\circ = \\dfrac{\\pi}{180} \\cdot 150 = \\dfrac{5\\pi}{6}$.

**Пример 2.** $\\dfrac{7\\pi}{4} = \\dfrac{180^\\circ}{\\pi} \\cdot \\dfrac{7\\pi}{4} = 315^\\circ$.

**Пример 3.** $2$ рад $\\approx 2 \\cdot 57{,}3^\\circ \\approx 114{,}6^\\circ$.

Слово «рад» обычно опускают: $\\sin 2$ означает синус $2$ радиан.

## Дуга и сектор

При угле $\\alpha$ в радианах:

$$l = \\alpha R, \\qquad S = \\frac{\\alpha R^2}{2}.$$

**Пример 4.** $R = 6$ см, $\\alpha = \\dfrac{\\pi}{3}$: $l = 2\\pi \\approx 6{,}28$ см, $S = \\dfrac{\\pi}{3} \\cdot \\dfrac{36}{2} = 6\\pi \\approx 18{,}8$ см².

### Упражнения

1. Переведите в радианы: $120^\\circ$; $210^\\circ$; $36^\\circ$.
2. Переведите в градусы: $\\dfrac{2\\pi}{3}$; $\\dfrac{5\\pi}{4}$; $\\dfrac{\\pi}{12}$.
3. Сколько примерно градусов в $3$ рад?
4. Что больше: $1$ рад или $60^\\circ$?
5. Найдите длину дуги при $R = 10$ и $\\alpha = 0{,}6$ рад.
6. Найдите площадь сектора при $R = 4$ и $\\alpha = \\dfrac{\\pi}{4}$.
7. Колесо повернулось на $5\\pi$ рад. Сколько это полных оборотов?

### Ответы

1. $\\dfrac{2\\pi}{3}$; $\\dfrac{7\\pi}{6}$; $\\dfrac{\\pi}{5}$. 2. $120^\\circ$; $225^\\circ$; $15^\\circ$. 3. Около $172^\\circ$. 4. $60^\\circ = \\dfrac{\\pi}{3} \\approx 1{,}05$ рад, значит, больше $60^\\circ$. 5. $l = 6$. 6. $S = 2\\pi$. 7. Два с половиной оборота.`,
      },
      [
        q(
          t("180° in radians is…", "180°-ը ռադիաններով…", "180° в радианах —"),
          [t("π/2", "π/2", "π/2"), t("π", "π", "π"), t("2π", "2π", "2π")],
          1,
        ),
        q(
          t("π/3 in degrees is…", "π/3-ը աստիճաններով…", "π/3 в градусах —"),
          [t("30°", "30°", "30°"), t("45°", "45°", "45°"), t("60°", "60°", "60°")],
          2,
        ),
        q(
          t("One radian is approximately…", "Մեկ ռադիանը մոտավորապես…", "Один радиан приблизительно равен…"),
          [t("1°", "1°", "1°"), t("57°", "57°", "57°"), t("90°", "90°", "90°")],
          1,
        ),
        q(
          t("The arc length with angle α in radians is…", "Ռադիաններով α անկյան դեպքում աղեղի երկարությունը…", "Длина дуги при угле α в радианах —"),
          [t("l = αR", "l = αR", "l = αR"), t("l = αR²", "l = αR²", "l = αR²"), t("l = 2παR", "l = 2παR", "l = 2παR")],
          0,
        ),
        q(
          t("270° in radians is…", "270°-ը ռադիաններով…", "270° в радианах —"),
          [t("3π/2", "3π/2", "3π/2"), t("2π/3", "2π/3", "2π/3"), t("3π/4", "3π/4", "3π/4")],
          0,
        ),
        q(
          t("The area of a sector with R = 4 and α = π/4 is…", "R = 4 և α = π/4 սեկտորի մակերեսը…", "Площадь сектора с R = 4 и α = π/4 —"),
          [t("π", "π", "π"), t("2π", "2π", "2π"), t("4π", "4π", "4π")],
          1,
        ),
      ],
    ),
    lesson(
      "unit-circle",
      ["Rotating a point on the unit circle", "Կետի պտույտը միավոր շրջանագծի վրա", "Поворот точки на единичной окружности"],
      {
        en: ["Describe the unit circle and the starting point P₀(1; 0)", "Find the point obtained by rotating P₀ through a positive or negative angle, including angles larger than 2π", "Recognise that angles differing by 2πk give the same point"],
        hy: ["Նկարագրել միավոր շրջանագիծը և P₀(1; 0) սկզբնական կետը", "Գտնել P₀ կետը դրական կամ բացասական անկյունով, այդ թվում 2π-ից մեծ անկյունով պտտելիս ստացվող կետը", "Հասկանալ, որ 2πk-ով տարբերվող անկյունները տալիս են նույն կետը"],
        ru: ["Описывать единичную окружность и начальную точку P₀(1; 0)", "Находить точку, полученную поворотом P₀ на положительный или отрицательный угол, в том числе больше 2π", "Понимать, что углы, отличающиеся на 2πk, дают одну и ту же точку"],
      },
      {
        en: `## The unit circle

The **unit circle** is the circle of radius $1$ centred at the origin. Its equation is $x^2 + y^2 = 1$.

We start at the point $P_0(1; 0)$ and rotate it about the origin:

- a **positive** angle means rotation **anticlockwise**;
- a **negative** angle means rotation **clockwise**.

The rotation through $\\alpha$ takes $P_0$ to a point $P_\\alpha$.

## The main points

| Angle | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| Point | $(1; 0)$ | $(0; 1)$ | $(-1; 0)$ | $(0; -1)$ | $(1; 0)$ |

**Example 1.** Rotating through $-\\dfrac{\\pi}{2}$ (a quarter turn clockwise) gives $(0; -1)$, the same point as $\\dfrac{3\\pi}{2}$.

## Angles larger than a full turn

A full turn is $2\\pi$. Turning through $\\alpha + 2\\pi k$ ($k$ an integer) gives **the same point** as turning through $\\alpha$:

$$P_{\\alpha + 2\\pi k} = P_\\alpha.$$

**Example 2.** $\\dfrac{9\\pi}{2} = 4\\pi + \\dfrac{\\pi}{2}$: two full turns and a quarter, so the point is $(0; 1)$.

**Example 3.** $-\\dfrac{7\\pi}{3} = -2\\pi - \\dfrac{\\pi}{3}$: the point is the same as for $-\\dfrac{\\pi}{3}$, in the fourth quarter.

## Quarters

The axes split the circle into four quarters (quadrants):

| Quarter | Angles |
|---|---|
| I | $0 < \\alpha < \\dfrac{\\pi}{2}$ |
| II | $\\dfrac{\\pi}{2} < \\alpha < \\pi$ |
| III | $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ |
| IV | $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$ |

**Example 4.** $\\alpha = 5$ rad. Since $\\dfrac{3\\pi}{2} \\approx 4.71 < 5 < 2\\pi \\approx 6.28$, the point is in quarter IV.

### Exercises

1. Write the coordinates of the point for $\\alpha = 3\\pi$; $\\alpha = -\\pi$; $\\alpha = 5\\pi/2$.
2. In which quarter is the point for $\\alpha = \\dfrac{2\\pi}{3}$; $\\dfrac{7\\pi}{6}$; $-\\dfrac{\\pi}{4}$?
3. Write $\\dfrac{17\\pi}{6}$ as $\\alpha + 2\\pi k$ with $0 \\le \\alpha < 2\\pi$.
4. In which quarter is the point for $\\alpha = 2$ rad? For $\\alpha = 4$ rad?
5. Find all angles that take $P_0$ to $(-1; 0)$.
6. Does the point $\\left(\\dfrac{1}{2}; \\dfrac{1}{2}\\right)$ lie on the unit circle?
7. Name two positive angles and one negative angle that give the point $(0; 1)$.

### Answers

1. $(-1; 0)$; $(-1; 0)$; $(0; 1)$. 2. II; III; IV. 3. $\\dfrac{17\\pi}{6} = \\dfrac{5\\pi}{6} + 2\\pi$. 4. $2$ rad: II, because $1.57 < 2 < 3.14$. $4$ rad: III, because $3.14 < 4 < 4.71$. 5. $\\alpha = \\pi + 2\\pi k$. 6. No: $\\dfrac14 + \\dfrac14 = \\dfrac12 \\ne 1$. 7. For example $\\dfrac{\\pi}{2}$, $\\dfrac{5\\pi}{2}$ and $-\\dfrac{3\\pi}{2}$.`,
        hy: `## Միավոր շրջանագիծը

**Միավոր շրջանագիծը** կոորդինատների սկզբնակետում կենտրոնով և $1$ շառավղով շրջանագիծն է։ Նրա հավասարումն է $x^2 + y^2 = 1$։

Սկսում ենք $P_0(1; 0)$ կետից և պտտում այն սկզբնակետի շուրջ․

- **դրական** անկյունը նշանակում է պտույտ **ժամացույցի սլաքի հակառակ** ուղղությամբ,
- **բացասական** անկյունը՝ պտույտ **ժամացույցի սլաքի** ուղղությամբ։

$\\alpha$ անկյունով պտույտը $P_0$-ն տանում է $P_\\alpha$ կետ։

## Հիմնական կետերը

| Անկյուն | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| Կետ | $(1; 0)$ | $(0; 1)$ | $(-1; 0)$ | $(0; -1)$ | $(1; 0)$ |

**Օրինակ 1։** $-\\dfrac{\\pi}{2}$ անկյունով պտույտը (քառորդ պտույտ ժամացույցի սլաքի ուղղությամբ) տալիս է $(0; -1)$, նույն կետը, ինչ $\\dfrac{3\\pi}{2}$-ը։

## Լրիվ պտույտից մեծ անկյուններ

Լրիվ պտույտը $2\\pi$ է։ $\\alpha + 2\\pi k$ ($k$-ն ամբողջ թիվ է) անկյունով պտույտը տալիս է **նույն կետը**, ինչ $\\alpha$-ով պտույտը՝

$$P_{\\alpha + 2\\pi k} = P_\\alpha.$$

**Օրինակ 2։** $\\dfrac{9\\pi}{2} = 4\\pi + \\dfrac{\\pi}{2}$՝ երկու լրիվ պտույտ և մեկ քառորդ, ուստի կետը $(0; 1)$ է։

**Օրինակ 3։** $-\\dfrac{7\\pi}{3} = -2\\pi - \\dfrac{\\pi}{3}$՝ կետը նույնն է, ինչ $-\\dfrac{\\pi}{3}$-ի դեպքում, չորրորդ քառորդում։

## Քառորդներ

Առանցքները շրջանագիծը բաժանում են չորս քառորդի․

| Քառորդ | Անկյուններ |
|---|---|
| I | $0 < \\alpha < \\dfrac{\\pi}{2}$ |
| II | $\\dfrac{\\pi}{2} < \\alpha < \\pi$ |
| III | $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ |
| IV | $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$ |

**Օրինակ 4։** $\\alpha = 5$ ռադ։ Քանի որ $\\dfrac{3\\pi}{2} \\approx 4{,}71 < 5 < 2\\pi \\approx 6{,}28$, կետը IV քառորդում է։

### Վարժություններ

1. Գրեք կետի կոորդինատները $\\alpha = 3\\pi$, $\\alpha = -\\pi$, $\\alpha = 5\\pi/2$ դեպքերում։
2. Ո՞ր քառորդում է կետը $\\alpha = \\dfrac{2\\pi}{3}$, $\\dfrac{7\\pi}{6}$, $-\\dfrac{\\pi}{4}$ դեպքերում։
3. Գրեք $\\dfrac{17\\pi}{6}$-ը $\\alpha + 2\\pi k$ տեսքով, որտեղ $0 \\le \\alpha < 2\\pi$։
4. Ո՞ր քառորդում է կետը $\\alpha = 2$ ռադ դեպքում, իսկ $\\alpha = 4$ ռադ դեպքում։
5. Գտեք բոլոր անկյունները, որոնք $P_0$-ն տանում են $(-1; 0)$ կետ։
6. Արդյո՞ք $\\left(\\dfrac{1}{2}; \\dfrac{1}{2}\\right)$ կետը միավոր շրջանագծի վրա է։
7. Նշեք երկու դրական և մեկ բացասական անկյուն, որոնք տալիս են $(0; 1)$ կետը։

### Պատասխաններ

1. $(-1; 0)$, $(-1; 0)$, $(0; 1)$։ 2. II, III, IV։ 3. $\\dfrac{17\\pi}{6} = \\dfrac{5\\pi}{6} + 2\\pi$։ 4. $2$ ռադ՝ II, քանի որ $1{,}57 < 2 < 3{,}14$։ $4$ ռադ՝ III, քանի որ $3{,}14 < 4 < 4{,}71$։ 5. $\\alpha = \\pi + 2\\pi k$։ 6. Ոչ՝ $\\dfrac14 + \\dfrac14 = \\dfrac12 \\ne 1$։ 7. Օրինակ՝ $\\dfrac{\\pi}{2}$, $\\dfrac{5\\pi}{2}$ և $-\\dfrac{3\\pi}{2}$։`,
        ru: `## Единичная окружность

**Единичная окружность** — окружность радиуса $1$ с центром в начале координат. Её уравнение $x^2 + y^2 = 1$.

Начинаем с точки $P_0(1; 0)$ и поворачиваем её вокруг начала координат:

- **положительный** угол — поворот **против часовой стрелки**;
- **отрицательный** угол — поворот **по часовой стрелке**.

Поворот на угол $\\alpha$ переводит $P_0$ в точку $P_\\alpha$.

## Основные точки

| Угол | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| Точка | $(1; 0)$ | $(0; 1)$ | $(-1; 0)$ | $(0; -1)$ | $(1; 0)$ |

**Пример 1.** Поворот на $-\\dfrac{\\pi}{2}$ (четверть оборота по часовой стрелке) даёт $(0; -1)$ — ту же точку, что и $\\dfrac{3\\pi}{2}$.

## Углы больше полного оборота

Полный оборот — это $2\\pi$. Поворот на $\\alpha + 2\\pi k$ ($k$ — целое) даёт **ту же точку**, что и поворот на $\\alpha$:

$$P_{\\alpha + 2\\pi k} = P_\\alpha.$$

**Пример 2.** $\\dfrac{9\\pi}{2} = 4\\pi + \\dfrac{\\pi}{2}$: два полных оборота и четверть, точка $(0; 1)$.

**Пример 3.** $-\\dfrac{7\\pi}{3} = -2\\pi - \\dfrac{\\pi}{3}$: точка та же, что для $-\\dfrac{\\pi}{3}$, в четвёртой четверти.

## Четверти

Оси делят окружность на четыре четверти:

| Четверть | Углы |
|---|---|
| I | $0 < \\alpha < \\dfrac{\\pi}{2}$ |
| II | $\\dfrac{\\pi}{2} < \\alpha < \\pi$ |
| III | $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ |
| IV | $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$ |

**Пример 4.** $\\alpha = 5$ рад. Так как $\\dfrac{3\\pi}{2} \\approx 4{,}71 < 5 < 2\\pi \\approx 6{,}28$, точка в IV четверти.

### Упражнения

1. Запишите координаты точки для $\\alpha = 3\\pi$; $\\alpha = -\\pi$; $\\alpha = 5\\pi/2$.
2. В какой четверти точка для $\\alpha = \\dfrac{2\\pi}{3}$; $\\dfrac{7\\pi}{6}$; $-\\dfrac{\\pi}{4}$?
3. Запишите $\\dfrac{17\\pi}{6}$ в виде $\\alpha + 2\\pi k$, где $0 \\le \\alpha < 2\\pi$.
4. В какой четверти точка для $\\alpha = 2$ рад? Для $\\alpha = 4$ рад?
5. Найдите все углы, переводящие $P_0$ в $(-1; 0)$.
6. Лежит ли точка $\\left(\\dfrac{1}{2}; \\dfrac{1}{2}\\right)$ на единичной окружности?
7. Назовите два положительных и один отрицательный угол, дающие точку $(0; 1)$.

### Ответы

1. $(-1; 0)$; $(-1; 0)$; $(0; 1)$. 2. II; III; IV. 3. $\\dfrac{17\\pi}{6} = \\dfrac{5\\pi}{6} + 2\\pi$. 4. $2$ рад — II, так как $1{,}57 < 2 < 3{,}14$; $4$ рад — III, так как $3{,}14 < 4 < 4{,}71$. 5. $\\alpha = \\pi + 2\\pi k$. 6. Нет: $\\dfrac14 + \\dfrac14 = \\dfrac12 \\ne 1$. 7. Например, $\\dfrac{\\pi}{2}$, $\\dfrac{5\\pi}{2}$ и $-\\dfrac{3\\pi}{2}$.`,
      },
      [
        q(
          t("The unit circle has radius…", "Միավոր շրջանագծի շառավիղը…", "Радиус единичной окружности —"),
          [t("1", "1", "1"), t("2", "2", "2"), t("π", "π", "π")],
          0,
        ),
        q(
          t("A positive angle means rotation…", "Դրական անկյունը նշանակում է պտույտ…", "Положительный угол — это поворот…"),
          [t("clockwise", "ժամացույցի սլաքի ուղղությամբ", "по часовой стрелке"), t("anticlockwise", "ժամացույցի սլաքի հակառակ ուղղությամբ", "против часовой стрелки"), t("along the x-axis", "x առանցքով", "вдоль оси x")],
          1,
        ),
        q(
          t("Rotating P₀(1; 0) through π gives…", "P₀(1; 0)-ն π-ով պտտելիս ստացվում է…", "Поворот P₀(1; 0) на π даёт…"),
          [t("(0; 1)", "(0; 1)", "(0; 1)"), t("(−1; 0)", "(−1; 0)", "(−1; 0)"), t("(0; −1)", "(0; −1)", "(0; −1)")],
          1,
        ),
        q(
          t("The angle 2π/3 lies in quarter…", "2π/3 անկյունը գտնվում է…", "Угол 2π/3 лежит в четверти…"),
          [t("I", "I քառորդում", "I"), t("II", "II քառորդում", "II"), t("III", "III քառորդում", "III")],
          1,
        ),
        q(
          t("Which angle gives the same point as π/4?", "Ո՞ր անկյունն է տալիս նույն կետը, ինչ π/4-ը", "Какой угол даёт ту же точку, что и π/4?"),
          [t("9π/4", "9π/4", "9π/4"), t("3π/4", "3π/4", "3π/4"), t("5π/4", "5π/4", "5π/4")],
          0,
        ),
        q(
          t("Rotating through −π/2 gives…", "−π/2-ով պտույտը տալիս է…", "Поворот на −π/2 даёт…"),
          [t("(0; 1)", "(0; 1)", "(0; 1)"), t("(0; −1)", "(0; −1)", "(0; −1)"), t("(−1; 0)", "(−1; 0)", "(−1; 0)")],
          1,
        ),
      ],
    ),
    lesson(
      "sin-cos-tan-definition",
      ["Sine, cosine, tangent and cotangent of any angle", "Ցանկացած անկյան սինուսը, կոսինուսը, տանգենսը և կոտանգենսը", "Синус, косинус, тангенс и котангенс любого угла"],
      {
        en: ["Define sin α and cos α as the coordinates of the point P_α on the unit circle", "Define tan α and cot α and state where they are not defined", "Use the table of values for 0, π/6, π/4, π/3 and π/2"],
        hy: ["Սահմանել sin α-ն և cos α-ն որպես միավոր շրջանագծի P_α կետի կոորդինատներ", "Սահմանել tg α-ն և ctg α-ն և նշել, թե որտեղ նրանք որոշված չեն", "Օգտվել 0, π/6, π/4, π/3 և π/2 անկյունների արժեքների աղյուսակից"],
        ru: ["Определять sin α и cos α как координаты точки P_α единичной окружности", "Определять tg α и ctg α и указывать, где они не определены", "Пользоваться таблицей значений для 0, π/6, π/4, π/3 и π/2"],
      },
      {
        en: `## Definitions

Let $P_\\alpha(x; y)$ be the point of the unit circle obtained by rotating $P_0(1; 0)$ through $\\alpha$.

> $\\cos \\alpha = x$ (the abscissa), $\\qquad \\sin \\alpha = y$ (the ordinate).

$$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} \\ (\\cos \\alpha \\ne 0), \\qquad \\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha} \\ (\\sin \\alpha \\ne 0).$$

For acute angles these agree with the right-triangle definitions from geometry, but now $\\alpha$ can be any real number.

## Range

Since $x^2 + y^2 = 1$, both coordinates lie between $-1$ and $1$:

$$-1 \\le \\sin \\alpha \\le 1, \\qquad -1 \\le \\cos \\alpha \\le 1.$$

Tangent and cotangent can take any real value.

## Where tan and cot are not defined

- $\\tan \\alpha$ is not defined when $\\cos \\alpha = 0$, that is, $\\alpha = \\dfrac{\\pi}{2} + \\pi k$.
- $\\cot \\alpha$ is not defined when $\\sin \\alpha = 0$, that is, $\\alpha = \\pi k$.

## Table of values

| $\\alpha$ | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |
|---|---|---|---|---|---|
| $\\sin \\alpha$ | $0$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
| $\\cos \\alpha$ | $1$ | $\\dfrac{\\sqrt3}{2}$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac12$ | $0$ |
| $\\tan \\alpha$ | $0$ | $\\dfrac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ | — |

**Example 1.** For $\\alpha = \\pi$ the point is $(-1; 0)$, so $\\sin \\pi = 0$, $\\cos \\pi = -1$, $\\tan \\pi = 0$, and $\\cot \\pi$ is not defined.

**Example 2.** For $\\alpha = \\dfrac{3\\pi}{2}$ the point is $(0; -1)$: $\\sin \\dfrac{3\\pi}{2} = -1$, $\\cos \\dfrac{3\\pi}{2} = 0$.

**Example 3.** $2\\sin \\dfrac{\\pi}{6} + \\cos \\dfrac{\\pi}{3} - \\tan \\dfrac{\\pi}{4} = 2 \\cdot \\dfrac12 + \\dfrac12 - 1 = \\dfrac12$.

**Example 4.** Can $\\sin \\alpha = 1.2$? No, because $\\sin \\alpha \\le 1$.

### Exercises

1. Find $\\sin \\alpha$ and $\\cos \\alpha$ for $\\alpha = 0$; $\\dfrac{\\pi}{2}$; $2\\pi$.
2. Compute $\\sin^2 \\dfrac{\\pi}{4} + \\cos^2 \\dfrac{\\pi}{4}$.
3. Compute $4\\cos \\dfrac{\\pi}{3} - \\sqrt3 \\tan \\dfrac{\\pi}{3}$.
4. Which values are impossible: $\\cos \\alpha = -0.9$; $\\sin \\alpha = \\dfrac{\\pi}{3}$; $\\tan \\alpha = 100$?
5. For which $\\alpha$ is $\\cot \\alpha$ not defined? Give three examples.
6. Find the largest and smallest values of $3 + 2\\sin \\alpha$.
7. Compute $\\cot \\dfrac{\\pi}{6} \\cdot \\tan \\dfrac{\\pi}{6}$.

### Answers

1. $0$: $\\sin = 0$, $\\cos = 1$. $\\dfrac{\\pi}{2}$: $\\sin = 1$, $\\cos = 0$. $2\\pi$: $\\sin = 0$, $\\cos = 1$. 2. $1$. 3. $2 - 3 = -1$. 4. Only $\\sin \\alpha = \\dfrac{\\pi}{3} \\approx 1.05$ is impossible. 5. $\\alpha = \\pi k$, for example $0$, $\\pi$, $-2\\pi$. 6. Largest $5$, smallest $1$. 7. $1$.`,
        hy: `## Սահմանումներ

Դիցուք $P_\\alpha(x; y)$-ը միավոր շրջանագծի այն կետն է, որը ստացվում է $P_0(1; 0)$-ն $\\alpha$ անկյունով պտտելիս։

> $\\cos \\alpha = x$ (աբսցիսը), $\\qquad \\sin \\alpha = y$ (օրդինատը)։

$$\\operatorname{tg} \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} \\ (\\cos \\alpha \\ne 0), \\qquad \\operatorname{ctg} \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha} \\ (\\sin \\alpha \\ne 0).$$

Սուր անկյունների համար սրանք համընկնում են երկրաչափության ուղղանկյուն եռանկյան սահմանումների հետ, բայց այժմ $\\alpha$-ն կարող է լինել ցանկացած իրական թիվ։

## Արժեքների տիրույթը

Քանի որ $x^2 + y^2 = 1$, երկու կոորդինատներն էլ $-1$-ի և $1$-ի միջև են՝

$$-1 \\le \\sin \\alpha \\le 1, \\qquad -1 \\le \\cos \\alpha \\le 1.$$

Տանգենսը և կոտանգենսը կարող են ընդունել ցանկացած իրական արժեք։

## Որտեղ tg-ն և ctg-ն որոշված չեն

- $\\operatorname{tg} \\alpha$-ն որոշված չէ, երբ $\\cos \\alpha = 0$, այսինքն՝ $\\alpha = \\dfrac{\\pi}{2} + \\pi k$։
- $\\operatorname{ctg} \\alpha$-ն որոշված չէ, երբ $\\sin \\alpha = 0$, այսինքն՝ $\\alpha = \\pi k$։

## Արժեքների աղյուսակ

| $\\alpha$ | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |
|---|---|---|---|---|---|
| $\\sin \\alpha$ | $0$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
| $\\cos \\alpha$ | $1$ | $\\dfrac{\\sqrt3}{2}$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac12$ | $0$ |
| $\\operatorname{tg} \\alpha$ | $0$ | $\\dfrac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ | — |

**Օրինակ 1։** $\\alpha = \\pi$ դեպքում կետը $(-1; 0)$ է, ուստի $\\sin \\pi = 0$, $\\cos \\pi = -1$, $\\operatorname{tg} \\pi = 0$, իսկ $\\operatorname{ctg} \\pi$-ն որոշված չէ։

**Օրինակ 2։** $\\alpha = \\dfrac{3\\pi}{2}$ դեպքում կետը $(0; -1)$ է՝ $\\sin \\dfrac{3\\pi}{2} = -1$, $\\cos \\dfrac{3\\pi}{2} = 0$։

**Օրինակ 3։** $2\\sin \\dfrac{\\pi}{6} + \\cos \\dfrac{\\pi}{3} - \\operatorname{tg} \\dfrac{\\pi}{4} = 2 \\cdot \\dfrac12 + \\dfrac12 - 1 = \\dfrac12$։

**Օրինակ 4։** Կարո՞ղ է $\\sin \\alpha = 1{,}2$ լինել։ Ոչ, քանի որ $\\sin \\alpha \\le 1$։

### Վարժություններ

1. Գտեք $\\sin \\alpha$-ն և $\\cos \\alpha$-ն $\\alpha = 0$, $\\dfrac{\\pi}{2}$, $2\\pi$ դեպքերում։
2. Հաշվեք $\\sin^2 \\dfrac{\\pi}{4} + \\cos^2 \\dfrac{\\pi}{4}$-ը։
3. Հաշվեք $4\\cos \\dfrac{\\pi}{3} - \\sqrt3 \\operatorname{tg} \\dfrac{\\pi}{3}$-ը։
4. Ո՞ր արժեքներն են անհնար՝ $\\cos \\alpha = -0{,}9$, $\\sin \\alpha = \\dfrac{\\pi}{3}$, $\\operatorname{tg} \\alpha = 100$։
5. Ո՞ր $\\alpha$-ների դեպքում $\\operatorname{ctg} \\alpha$-ն որոշված չէ։ Բերեք երեք օրինակ։
6. Գտեք $3 + 2\\sin \\alpha$-ի մեծագույն և փոքրագույն արժեքները։
7. Հաշվեք $\\operatorname{ctg} \\dfrac{\\pi}{6} \\cdot \\operatorname{tg} \\dfrac{\\pi}{6}$-ը։

### Պատասխաններ

1. $0$՝ $\\sin = 0$, $\\cos = 1$։ $\\dfrac{\\pi}{2}$՝ $\\sin = 1$, $\\cos = 0$։ $2\\pi$՝ $\\sin = 0$, $\\cos = 1$։ 2. $1$։ 3. $2 - 3 = -1$։ 4. Անհնար է միայն $\\sin \\alpha = \\dfrac{\\pi}{3} \\approx 1{,}05$-ը։ 5. $\\alpha = \\pi k$, օրինակ՝ $0$, $\\pi$, $-2\\pi$։ 6. Մեծագույնը՝ $5$, փոքրագույնը՝ $1$։ 7. $1$։`,
        ru: `## Определения

Пусть $P_\\alpha(x; y)$ — точка единичной окружности, полученная поворотом $P_0(1; 0)$ на угол $\\alpha$.

> $\\cos \\alpha = x$ (абсцисса), $\\qquad \\sin \\alpha = y$ (ордината).

$$\\operatorname{tg} \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} \\ (\\cos \\alpha \\ne 0), \\qquad \\operatorname{ctg} \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha} \\ (\\sin \\alpha \\ne 0).$$

Для острых углов это совпадает с определениями через прямоугольный треугольник, но теперь $\\alpha$ может быть любым действительным числом.

## Область значений

Так как $x^2 + y^2 = 1$, обе координаты лежат между $-1$ и $1$:

$$-1 \\le \\sin \\alpha \\le 1, \\qquad -1 \\le \\cos \\alpha \\le 1.$$

Тангенс и котангенс могут принимать любые действительные значения.

## Где tg и ctg не определены

- $\\operatorname{tg} \\alpha$ не определён, когда $\\cos \\alpha = 0$, то есть $\\alpha = \\dfrac{\\pi}{2} + \\pi k$.
- $\\operatorname{ctg} \\alpha$ не определён, когда $\\sin \\alpha = 0$, то есть $\\alpha = \\pi k$.

## Таблица значений

| $\\alpha$ | $0$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{2}$ |
|---|---|---|---|---|---|
| $\\sin \\alpha$ | $0$ | $\\dfrac12$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac{\\sqrt3}{2}$ | $1$ |
| $\\cos \\alpha$ | $1$ | $\\dfrac{\\sqrt3}{2}$ | $\\dfrac{\\sqrt2}{2}$ | $\\dfrac12$ | $0$ |
| $\\operatorname{tg} \\alpha$ | $0$ | $\\dfrac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ | — |

**Пример 1.** Для $\\alpha = \\pi$ точка $(-1; 0)$, поэтому $\\sin \\pi = 0$, $\\cos \\pi = -1$, $\\operatorname{tg} \\pi = 0$, а $\\operatorname{ctg} \\pi$ не определён.

**Пример 2.** Для $\\alpha = \\dfrac{3\\pi}{2}$ точка $(0; -1)$: $\\sin \\dfrac{3\\pi}{2} = -1$, $\\cos \\dfrac{3\\pi}{2} = 0$.

**Пример 3.** $2\\sin \\dfrac{\\pi}{6} + \\cos \\dfrac{\\pi}{3} - \\operatorname{tg} \\dfrac{\\pi}{4} = 2 \\cdot \\dfrac12 + \\dfrac12 - 1 = \\dfrac12$.

**Пример 4.** Может ли $\\sin \\alpha = 1{,}2$? Нет, так как $\\sin \\alpha \\le 1$.

### Упражнения

1. Найдите $\\sin \\alpha$ и $\\cos \\alpha$ для $\\alpha = 0$; $\\dfrac{\\pi}{2}$; $2\\pi$.
2. Вычислите $\\sin^2 \\dfrac{\\pi}{4} + \\cos^2 \\dfrac{\\pi}{4}$.
3. Вычислите $4\\cos \\dfrac{\\pi}{3} - \\sqrt3 \\operatorname{tg} \\dfrac{\\pi}{3}$.
4. Какие значения невозможны: $\\cos \\alpha = -0{,}9$; $\\sin \\alpha = \\dfrac{\\pi}{3}$; $\\operatorname{tg} \\alpha = 100$?
5. При каких $\\alpha$ не определён $\\operatorname{ctg} \\alpha$? Приведите три примера.
6. Найдите наибольшее и наименьшее значения $3 + 2\\sin \\alpha$.
7. Вычислите $\\operatorname{ctg} \\dfrac{\\pi}{6} \\cdot \\operatorname{tg} \\dfrac{\\pi}{6}$.

### Ответы

1. $0$: $\\sin = 0$, $\\cos = 1$. $\\dfrac{\\pi}{2}$: $\\sin = 1$, $\\cos = 0$. $2\\pi$: $\\sin = 0$, $\\cos = 1$. 2. $1$. 3. $2 - 3 = -1$. 4. Невозможно только $\\sin \\alpha = \\dfrac{\\pi}{3} \\approx 1{,}05$. 5. $\\alpha = \\pi k$, например $0$, $\\pi$, $-2\\pi$. 6. Наибольшее $5$, наименьшее $1$. 7. $1$.`,
      },
      [
        q(
          t("On the unit circle, cos α is…", "Միավոր շրջանագծի վրա cos α-ն…", "На единичной окружности cos α — это…"),
          [t("the abscissa of P_α", "P_α կետի աբսցիսն է", "абсцисса точки P_α"), t("the ordinate of P_α", "P_α կետի օրդինատն է", "ордината точки P_α"), t("the length of the arc", "աղեղի երկարությունն է", "длина дуги")],
          0,
        ),
        q(
          t("sin(π/6) equals…", "sin(π/6)-ը հավասար է…", "sin(π/6) равен…"),
          [t("1/2", "1/2", "1/2"), t("√3/2", "√3/2", "√3/2"), t("√2/2", "√2/2", "√2/2")],
          0,
        ),
        q(
          t("cos π equals…", "cos π-ն հավասար է…", "cos π равен…"),
          [t("0", "0", "0"), t("1", "1", "1"), t("−1", "−1", "−1")],
          2,
        ),
        q(
          t("tan α is not defined when…", "tg α-ն որոշված չէ, երբ…", "tg α не определён, когда…"),
          [t("sin α = 0", "sin α = 0", "sin α = 0"), t("cos α = 0", "cos α = 0", "cos α = 0"), t("α = 0", "α = 0", "α = 0")],
          1,
        ),
        q(
          t("Which value is impossible?", "Ո՞ր արժեքն է անհնար", "Какое значение невозможно?"),
          [t("sin α = −1", "sin α = −1", "sin α = −1"), t("cos α = 1.5", "cos α = 1,5", "cos α = 1,5"), t("tan α = 7", "tg α = 7", "tg α = 7")],
          1,
        ),
        q(
          t("tan(π/3) equals…", "tg(π/3)-ը հավասար է…", "tg(π/3) равен…"),
          [t("1", "1", "1"), t("√3/3", "√3/3", "√3/3"), t("√3", "√3", "√3")],
          2,
        ),
      ],
    ),
    lesson(
      "trig-signs",
      ["Signs of the trigonometric functions", "Եռանկյունաչափական ֆունկցիաների նշանները", "Знаки тригонометрических функций"],
      {
        en: ["Determine the sign of sin α, cos α, tan α and cot α from the quarter of the angle", "Use the evenness of cosine and the oddness of sine, tangent and cotangent", "Find the sign of a product or quotient of trigonometric values"],
        hy: ["Որոշել sin α-ի, cos α-ի, tg α-ի և ctg α-ի նշանն ըստ անկյան քառորդի", "Օգտվել կոսինուսի զույգությունից և սինուսի, տանգենսի ու կոտանգենսի կենտությունից", "Գտնել եռանկյունաչափական արժեքների արտադրյալի կամ քանորդի նշանը"],
        ru: ["Определять знак sin α, cos α, tg α и ctg α по четверти угла", "Использовать чётность косинуса и нечётность синуса, тангенса и котангенса", "Находить знак произведения или частного тригонометрических значений"],
      },
      {
        en: `## Signs by quarter

$\\sin \\alpha$ is the $y$-coordinate, so it is positive above the $x$-axis. $\\cos \\alpha$ is the $x$-coordinate, so it is positive to the right of the $y$-axis. Tangent and cotangent are positive when sine and cosine have the same sign.

| Quarter | $\\sin$ | $\\cos$ | $\\tan$, $\\cot$ |
|---|---|---|---|
| I | $+$ | $+$ | $+$ |
| II | $+$ | $-$ | $-$ |
| III | $-$ | $-$ | $+$ |
| IV | $-$ | $+$ | $-$ |

**Example 1.** $\\sin \\dfrac{5\\pi}{6}$: the angle is in II, so the sine is positive.

**Example 2.** $\\cos 4$: since $\\pi < 4 < \\dfrac{3\\pi}{2}$, the angle is in III, so $\\cos 4 < 0$.

**Example 3.** $\\tan \\dfrac{11\\pi}{6}$: the angle is in IV, so the tangent is negative.

## Negative angles

The points $P_\\alpha$ and $P_{-\\alpha}$ are symmetric about the $x$-axis: they have the same abscissa and opposite ordinates. Therefore

$$\\cos(-\\alpha) = \\cos \\alpha, \\qquad \\sin(-\\alpha) = -\\sin \\alpha,$$

$$\\tan(-\\alpha) = -\\tan \\alpha, \\qquad \\cot(-\\alpha) = -\\cot \\alpha.$$

Cosine is an **even** function, the other three are **odd**.

**Example 4.** $\\sin\\left(-\\dfrac{\\pi}{6}\\right) = -\\dfrac12$, $\\cos\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac12$.

## Sign of an expression

**Example 5.** The sign of $\\sin 2 \\cdot \\cos 3$: $2$ rad is in II, so $\\sin 2 > 0$. $3$ rad is in II too, so $\\cos 3 < 0$. The product is negative.

### Exercises

1. State the sign: $\\sin \\dfrac{2\\pi}{3}$; $\\cos \\dfrac{5\\pi}{4}$; $\\tan \\dfrac{7\\pi}{4}$.
2. State the sign: $\\cos 1$; $\\sin 5$; $\\tan 3$.
3. In which quarter is $\\alpha$ if $\\sin \\alpha < 0$ and $\\cos \\alpha > 0$?
4. In which quarters is $\\sin \\alpha \\cdot \\cos \\alpha > 0$?
5. Compute $\\sin\\left(-\\dfrac{\\pi}{2}\\right) + \\cos(-\\pi)$.
6. Compute $\\tan\\left(-\\dfrac{\\pi}{4}\\right) \\cdot \\cos\\left(-\\dfrac{\\pi}{6}\\right)$.
7. State the sign of $\\dfrac{\\sin 4}{\\cos 6}$.

### Answers

1. $+$; $-$; $-$. 2. $+$ (I); $-$ (IV); $-$ (II). 3. IV. 4. I and III. 5. $-1 + (-1) = -2$. 6. $-\\dfrac{\\sqrt3}{2}$. 7. $\\sin 4 < 0$ (III), $\\cos 6 > 0$ (IV), so the quotient is negative.`,
        hy: `## Նշաններն ըստ քառորդների

$\\sin \\alpha$-ն $y$ կոորդինատն է, ուստի դրական է $x$ առանցքից վերև։ $\\cos \\alpha$-ն $x$ կոորդինատն է, ուստի դրական է $y$ առանցքից աջ։ Տանգենսը և կոտանգենսը դրական են, երբ սինուսը և կոսինուսը նույն նշանն ունեն։

| Քառորդ | $\\sin$ | $\\cos$ | $\\operatorname{tg}$, $\\operatorname{ctg}$ |
|---|---|---|---|
| I | $+$ | $+$ | $+$ |
| II | $+$ | $-$ | $-$ |
| III | $-$ | $-$ | $+$ |
| IV | $-$ | $+$ | $-$ |

**Օրինակ 1։** $\\sin \\dfrac{5\\pi}{6}$՝ անկյունը II քառորդում է, ուստի սինուսը դրական է։

**Օրինակ 2։** $\\cos 4$՝ քանի որ $\\pi < 4 < \\dfrac{3\\pi}{2}$, անկյունը III քառորդում է, ուստի $\\cos 4 < 0$։

**Օրինակ 3։** $\\operatorname{tg} \\dfrac{11\\pi}{6}$՝ անկյունը IV քառորդում է, ուստի տանգենսը բացասական է։

## Բացասական անկյուններ

$P_\\alpha$ և $P_{-\\alpha}$ կետերը համաչափ են $x$ առանցքի նկատմամբ՝ նրանց աբսցիսները նույնն են, իսկ օրդինատները՝ հակադիր։ Հետևաբար

$$\\cos(-\\alpha) = \\cos \\alpha, \\qquad \\sin(-\\alpha) = -\\sin \\alpha,$$

$$\\operatorname{tg}(-\\alpha) = -\\operatorname{tg} \\alpha, \\qquad \\operatorname{ctg}(-\\alpha) = -\\operatorname{ctg} \\alpha.$$

Կոսինուսը **զույգ** ֆունկցիա է, մյուս երեքը՝ **կենտ**։

**Օրինակ 4։** $\\sin\\left(-\\dfrac{\\pi}{6}\\right) = -\\dfrac12$, $\\cos\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac12$։

## Արտահայտության նշանը

**Օրինակ 5։** $\\sin 2 \\cdot \\cos 3$-ի նշանը։ $2$ ռադը II քառորդում է, ուստի $\\sin 2 > 0$։ $3$ ռադը նույնպես II քառորդում է, ուստի $\\cos 3 < 0$։ Արտադրյալը բացասական է։

### Վարժություններ

1. Նշեք նշանը՝ $\\sin \\dfrac{2\\pi}{3}$, $\\cos \\dfrac{5\\pi}{4}$, $\\operatorname{tg} \\dfrac{7\\pi}{4}$։
2. Նշեք նշանը՝ $\\cos 1$, $\\sin 5$, $\\operatorname{tg} 3$։
3. Ո՞ր քառորդում է $\\alpha$-ն, եթե $\\sin \\alpha < 0$ և $\\cos \\alpha > 0$։
4. Ո՞ր քառորդներում է $\\sin \\alpha \\cdot \\cos \\alpha > 0$։
5. Հաշվեք $\\sin\\left(-\\dfrac{\\pi}{2}\\right) + \\cos(-\\pi)$-ն։
6. Հաշվեք $\\operatorname{tg}\\left(-\\dfrac{\\pi}{4}\\right) \\cdot \\cos\\left(-\\dfrac{\\pi}{6}\\right)$-ը։
7. Նշեք $\\dfrac{\\sin 4}{\\cos 6}$-ի նշանը։

### Պատասխաններ

1. $+$, $-$, $-$։ 2. $+$ (I), $-$ (IV), $-$ (II)։ 3. IV։ 4. I և III։ 5. $-1 + (-1) = -2$։ 6. $-\\dfrac{\\sqrt3}{2}$։ 7. $\\sin 4 < 0$ (III), $\\cos 6 > 0$ (IV), ուստի քանորդը բացասական է։`,
        ru: `## Знаки по четвертям

$\\sin \\alpha$ — это координата $y$, поэтому он положителен выше оси $x$. $\\cos \\alpha$ — координата $x$, он положителен правее оси $y$. Тангенс и котангенс положительны, когда синус и косинус одного знака.

| Четверть | $\\sin$ | $\\cos$ | $\\operatorname{tg}$, $\\operatorname{ctg}$ |
|---|---|---|---|
| I | $+$ | $+$ | $+$ |
| II | $+$ | $-$ | $-$ |
| III | $-$ | $-$ | $+$ |
| IV | $-$ | $+$ | $-$ |

**Пример 1.** $\\sin \\dfrac{5\\pi}{6}$: угол во II четверти, синус положителен.

**Пример 2.** $\\cos 4$: так как $\\pi < 4 < \\dfrac{3\\pi}{2}$, угол в III четверти, значит, $\\cos 4 < 0$.

**Пример 3.** $\\operatorname{tg} \\dfrac{11\\pi}{6}$: угол в IV четверти, тангенс отрицателен.

## Отрицательные углы

Точки $P_\\alpha$ и $P_{-\\alpha}$ симметричны относительно оси $x$: абсциссы равны, ординаты противоположны. Поэтому

$$\\cos(-\\alpha) = \\cos \\alpha, \\qquad \\sin(-\\alpha) = -\\sin \\alpha,$$

$$\\operatorname{tg}(-\\alpha) = -\\operatorname{tg} \\alpha, \\qquad \\operatorname{ctg}(-\\alpha) = -\\operatorname{ctg} \\alpha.$$

Косинус — **чётная** функция, остальные три — **нечётные**.

**Пример 4.** $\\sin\\left(-\\dfrac{\\pi}{6}\\right) = -\\dfrac12$, $\\cos\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac12$.

## Знак выражения

**Пример 5.** Знак $\\sin 2 \\cdot \\cos 3$: $2$ рад во II четверти, $\\sin 2 > 0$; $3$ рад тоже во II четверти, $\\cos 3 < 0$. Произведение отрицательно.

### Упражнения

1. Определите знак: $\\sin \\dfrac{2\\pi}{3}$; $\\cos \\dfrac{5\\pi}{4}$; $\\operatorname{tg} \\dfrac{7\\pi}{4}$.
2. Определите знак: $\\cos 1$; $\\sin 5$; $\\operatorname{tg} 3$.
3. В какой четверти $\\alpha$, если $\\sin \\alpha < 0$ и $\\cos \\alpha > 0$?
4. В каких четвертях $\\sin \\alpha \\cdot \\cos \\alpha > 0$?
5. Вычислите $\\sin\\left(-\\dfrac{\\pi}{2}\\right) + \\cos(-\\pi)$.
6. Вычислите $\\operatorname{tg}\\left(-\\dfrac{\\pi}{4}\\right) \\cdot \\cos\\left(-\\dfrac{\\pi}{6}\\right)$.
7. Определите знак $\\dfrac{\\sin 4}{\\cos 6}$.

### Ответы

1. $+$; $-$; $-$. 2. $+$ (I); $-$ (IV); $-$ (II). 3. IV. 4. I и III. 5. $-1 + (-1) = -2$. 6. $-\\dfrac{\\sqrt3}{2}$. 7. $\\sin 4 < 0$ (III), $\\cos 6 > 0$ (IV), значит, частное отрицательно.`,
      },
      [
        q(
          t("In quarter II, sin α is…", "II քառորդում sin α-ն…", "Во II четверти sin α…"),
          [t("positive", "դրական է", "положителен"), t("negative", "բացասական է", "отрицателен"), t("zero", "զրո է", "равен нулю")],
          0,
        ),
        q(
          t("In quarter III, tan α is…", "III քառորդում tg α-ն…", "В III четверти tg α…"),
          [t("negative", "բացասական է", "отрицателен"), t("positive", "դրական է", "положителен"), t("not defined", "որոշված չէ", "не определён")],
          1,
        ),
        q(
          t("cos(−α) equals…", "cos(−α)-ն հավասար է…", "cos(−α) равен…"),
          [t("cos α", "cos α", "cos α"), t("−cos α", "−cos α", "−cos α"), t("sin α", "sin α", "sin α")],
          0,
        ),
        q(
          t("sin(−π/6) equals…", "sin(−π/6)-ը հավասար է…", "sin(−π/6) равен…"),
          [t("1/2", "1/2", "1/2"), t("−1/2", "−1/2", "−1/2"), t("−√3/2", "−√3/2", "−√3/2")],
          1,
        ),
        q(
          t("If sin α < 0 and cos α < 0, α is in quarter…", "Եթե sin α < 0 և cos α < 0, α-ն գտնվում է…", "Если sin α < 0 и cos α < 0, то α в четверти…"),
          [t("II", "II քառորդում", "II"), t("III", "III քառորդում", "III"), t("IV", "IV քառորդում", "IV")],
          1,
        ),
        q(
          t("The sign of cos 4 is…", "cos 4-ի նշանը…", "Знак cos 4 —"),
          [t("plus", "պլյուս է", "плюс"), t("minus", "մինուս է", "минус"), t("cos 4 = 0", "cos 4 = 0", "cos 4 = 0")],
          1,
        ),
      ],
    ),
    lesson(
      "basic-identities",
      ["Basic trigonometric identities", "Հիմնական եռանկյունաչափական նույնություններ", "Основные тригонометрические тождества"],
      {
        en: ["State and prove sin²α + cos²α = 1, tan α · cot α = 1 and 1 + tan²α = 1/cos²α", "Find all trigonometric values of an angle from one of them and the quarter", "Simplify expressions and prove identities"],
        hy: ["Ձևակերպել և ապացուցել sin²α + cos²α = 1, tg α · ctg α = 1 և 1 + tg²α = 1/cos²α նույնությունները", "Գտնել անկյան բոլոր եռանկյունաչափական արժեքները՝ իմանալով դրանցից մեկը և քառորդը", "Պարզեցնել արտահայտություններ և ապացուցել նույնություններ"],
        ru: ["Формулировать и доказывать sin²α + cos²α = 1, tg α · ctg α = 1 и 1 + tg²α = 1/cos²α", "Находить все тригонометрические значения угла по одному из них и четверти", "Упрощать выражения и доказывать тождества"],
      },
      {
        en: `## The main identity

The point $P_\\alpha(\\cos \\alpha; \\sin \\alpha)$ lies on the unit circle $x^2 + y^2 = 1$, so for every $\\alpha$

$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1.$$

## Consequences

$$\\tan \\alpha \\cdot \\cot \\alpha = 1, \\qquad 1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}, \\qquad 1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}.$$

The second one comes from dividing the main identity by $\\cos^2 \\alpha$, the third from dividing it by $\\sin^2 \\alpha$. Each holds wherever both sides are defined.

## Finding values from one of them

**Example 1.** $\\sin \\alpha = \\dfrac35$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Find $\\cos \\alpha$, $\\tan \\alpha$, $\\cot \\alpha$.

$\\cos^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. In quarter II the cosine is negative, so $\\cos \\alpha = -\\dfrac45$. Then $\\tan \\alpha = -\\dfrac34$ and $\\cot \\alpha = -\\dfrac43$.

**Example 2.** $\\tan \\alpha = 2$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Find $\\cos \\alpha$.

$\\dfrac{1}{\\cos^2 \\alpha} = 1 + 4 = 5$, so $\\cos^2 \\alpha = \\dfrac15$. In quarter III, $\\cos \\alpha = -\\dfrac{1}{\\sqrt5} = -\\dfrac{\\sqrt5}{5}$.

The quarter decides the sign. Without it there are two answers.

## Simplifying

**Example 3.** $\\dfrac{1 - \\cos^2 \\alpha}{\\sin \\alpha} = \\dfrac{\\sin^2 \\alpha}{\\sin \\alpha} = \\sin \\alpha$.

**Example 4.** $(\\sin \\alpha + \\cos \\alpha)^2 = \\sin^2 \\alpha + 2\\sin \\alpha \\cos \\alpha + \\cos^2 \\alpha = 1 + 2\\sin \\alpha \\cos \\alpha$.

## Proving an identity

Transform one side until it equals the other.

**Example 5.** Prove $\\dfrac{\\sin \\alpha}{1 + \\cos \\alpha} = \\dfrac{1 - \\cos \\alpha}{\\sin \\alpha}$. Cross-multiplying: $\\sin^2 \\alpha = (1 - \\cos \\alpha)(1 + \\cos \\alpha) = 1 - \\cos^2 \\alpha$, which is true.

### Exercises

1. $\\cos \\alpha = \\dfrac{5}{13}$, $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$. Find $\\sin \\alpha$ and $\\tan \\alpha$.
2. $\\cot \\alpha = -3$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Find $\\sin \\alpha$.
3. Simplify $\\sin^2 \\alpha + \\cos^2 \\alpha + \\tan^2 \\alpha$.
4. Simplify $\\dfrac{1}{\\cos^2 \\alpha} - \\tan^2 \\alpha$.
5. Simplify $(1 - \\sin \\alpha)(1 + \\sin \\alpha)$.
6. Prove that $\\tan \\alpha + \\cot \\alpha = \\dfrac{1}{\\sin \\alpha \\cos \\alpha}$.
7. Can $\\sin \\alpha = 0.6$ and $\\cos \\alpha = 0.7$ at the same time?

### Answers

1. $\\sin \\alpha = -\\dfrac{12}{13}$, $\\tan \\alpha = -\\dfrac{12}{5}$. 2. $\\dfrac{1}{\\sin^2 \\alpha} = 10$; in quarter II, $\\sin \\alpha = \\dfrac{\\sqrt{10}}{10}$. 3. $\\dfrac{1}{\\cos^2 \\alpha}$. 4. $1$. 5. $\\cos^2 \\alpha$. 6. $\\dfrac{\\sin \\alpha}{\\cos \\alpha} + \\dfrac{\\cos \\alpha}{\\sin \\alpha} = \\dfrac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin \\alpha \\cos \\alpha} = \\dfrac{1}{\\sin \\alpha \\cos \\alpha}$. 7. No: $0.36 + 0.49 = 0.85 \\ne 1$.`,
        hy: `## Հիմնական նույնությունը

$P_\\alpha(\\cos \\alpha; \\sin \\alpha)$ կետը գտնվում է $x^2 + y^2 = 1$ միավոր շրջանագծի վրա, ուստի ցանկացած $\\alpha$-ի համար

$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1.$$

## Հետևանքներ

$$\\operatorname{tg} \\alpha \\cdot \\operatorname{ctg} \\alpha = 1, \\qquad 1 + \\operatorname{tg}^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}, \\qquad 1 + \\operatorname{ctg}^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}.$$

Երկրորդը ստացվում է հիմնական նույնությունը $\\cos^2 \\alpha$-ի վրա բաժանելով, երրորդը՝ $\\sin^2 \\alpha$-ի վրա բաժանելով։ Յուրաքանչյուրը ճիշտ է այնտեղ, որտեղ երկու կողմերն էլ որոշված են։

## Արժեքների գտնելը դրանցից մեկով

**Օրինակ 1։** $\\sin \\alpha = \\dfrac35$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$։ Գտեք $\\cos \\alpha$-ն, $\\operatorname{tg} \\alpha$-ն, $\\operatorname{ctg} \\alpha$-ն։

$\\cos^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$։ II քառորդում կոսինուսը բացասական է, ուստի $\\cos \\alpha = -\\dfrac45$։ Այդ դեպքում $\\operatorname{tg} \\alpha = -\\dfrac34$, $\\operatorname{ctg} \\alpha = -\\dfrac43$։

**Օրինակ 2։** $\\operatorname{tg} \\alpha = 2$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$։ Գտեք $\\cos \\alpha$-ն։

$\\dfrac{1}{\\cos^2 \\alpha} = 1 + 4 = 5$, ուստի $\\cos^2 \\alpha = \\dfrac15$։ III քառորդում $\\cos \\alpha = -\\dfrac{1}{\\sqrt5} = -\\dfrac{\\sqrt5}{5}$։

Նշանը որոշում է քառորդը։ Առանց դրա կլինի երկու պատասխան։

## Պարզեցում

**Օրինակ 3։** $\\dfrac{1 - \\cos^2 \\alpha}{\\sin \\alpha} = \\dfrac{\\sin^2 \\alpha}{\\sin \\alpha} = \\sin \\alpha$։

**Օրինակ 4։** $(\\sin \\alpha + \\cos \\alpha)^2 = \\sin^2 \\alpha + 2\\sin \\alpha \\cos \\alpha + \\cos^2 \\alpha = 1 + 2\\sin \\alpha \\cos \\alpha$։

## Նույնության ապացուցում

Ձևափոխում ենք մի կողմը, մինչև այն հավասարվի մյուսին։

**Օրինակ 5։** Ապացուցեք, որ $\\dfrac{\\sin \\alpha}{1 + \\cos \\alpha} = \\dfrac{1 - \\cos \\alpha}{\\sin \\alpha}$։ Խաչաձև բազմապատկելով՝ $\\sin^2 \\alpha = (1 - \\cos \\alpha)(1 + \\cos \\alpha) = 1 - \\cos^2 \\alpha$, որը ճիշտ է։

### Վարժություններ

1. $\\cos \\alpha = \\dfrac{5}{13}$, $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$։ Գտեք $\\sin \\alpha$-ն և $\\operatorname{tg} \\alpha$-ն։
2. $\\operatorname{ctg} \\alpha = -3$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$։ Գտեք $\\sin \\alpha$-ն։
3. Պարզեցրեք $\\sin^2 \\alpha + \\cos^2 \\alpha + \\operatorname{tg}^2 \\alpha$-ն։
4. Պարզեցրեք $\\dfrac{1}{\\cos^2 \\alpha} - \\operatorname{tg}^2 \\alpha$-ն։
5. Պարզեցրեք $(1 - \\sin \\alpha)(1 + \\sin \\alpha)$-ն։
6. Ապացուցեք, որ $\\operatorname{tg} \\alpha + \\operatorname{ctg} \\alpha = \\dfrac{1}{\\sin \\alpha \\cos \\alpha}$։
7. Կարո՞ղ են միաժամանակ լինել $\\sin \\alpha = 0{,}6$ և $\\cos \\alpha = 0{,}7$։

### Պատասխաններ

1. $\\sin \\alpha = -\\dfrac{12}{13}$, $\\operatorname{tg} \\alpha = -\\dfrac{12}{5}$։ 2. $\\dfrac{1}{\\sin^2 \\alpha} = 10$, II քառորդում $\\sin \\alpha = \\dfrac{\\sqrt{10}}{10}$։ 3. $\\dfrac{1}{\\cos^2 \\alpha}$։ 4. $1$։ 5. $\\cos^2 \\alpha$։ 6. $\\dfrac{\\sin \\alpha}{\\cos \\alpha} + \\dfrac{\\cos \\alpha}{\\sin \\alpha} = \\dfrac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin \\alpha \\cos \\alpha} = \\dfrac{1}{\\sin \\alpha \\cos \\alpha}$։ 7. Ոչ՝ $0{,}36 + 0{,}49 = 0{,}85 \\ne 1$։`,
        ru: `## Основное тождество

Точка $P_\\alpha(\\cos \\alpha; \\sin \\alpha)$ лежит на единичной окружности $x^2 + y^2 = 1$, поэтому для любого $\\alpha$

$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1.$$

## Следствия

$$\\operatorname{tg} \\alpha \\cdot \\operatorname{ctg} \\alpha = 1, \\qquad 1 + \\operatorname{tg}^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}, \\qquad 1 + \\operatorname{ctg}^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}.$$

Второе получается делением основного тождества на $\\cos^2 \\alpha$, третье — делением на $\\sin^2 \\alpha$. Каждое верно там, где определены обе части.

## Нахождение значений по одному из них

**Пример 1.** $\\sin \\alpha = \\dfrac35$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Найдите $\\cos \\alpha$, $\\operatorname{tg} \\alpha$, $\\operatorname{ctg} \\alpha$.

$\\cos^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. Во II четверти косинус отрицателен, значит, $\\cos \\alpha = -\\dfrac45$. Тогда $\\operatorname{tg} \\alpha = -\\dfrac34$, $\\operatorname{ctg} \\alpha = -\\dfrac43$.

**Пример 2.** $\\operatorname{tg} \\alpha = 2$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Найдите $\\cos \\alpha$.

$\\dfrac{1}{\\cos^2 \\alpha} = 1 + 4 = 5$, откуда $\\cos^2 \\alpha = \\dfrac15$. В III четверти $\\cos \\alpha = -\\dfrac{1}{\\sqrt5} = -\\dfrac{\\sqrt5}{5}$.

Знак определяет четверть. Без неё ответов два.

## Упрощение

**Пример 3.** $\\dfrac{1 - \\cos^2 \\alpha}{\\sin \\alpha} = \\dfrac{\\sin^2 \\alpha}{\\sin \\alpha} = \\sin \\alpha$.

**Пример 4.** $(\\sin \\alpha + \\cos \\alpha)^2 = \\sin^2 \\alpha + 2\\sin \\alpha \\cos \\alpha + \\cos^2 \\alpha = 1 + 2\\sin \\alpha \\cos \\alpha$.

## Доказательство тождества

Преобразуем одну часть, пока она не совпадёт с другой.

**Пример 5.** Докажите, что $\\dfrac{\\sin \\alpha}{1 + \\cos \\alpha} = \\dfrac{1 - \\cos \\alpha}{\\sin \\alpha}$. Перемножив крест-накрест: $\\sin^2 \\alpha = (1 - \\cos \\alpha)(1 + \\cos \\alpha) = 1 - \\cos^2 \\alpha$ — верно.

### Упражнения

1. $\\cos \\alpha = \\dfrac{5}{13}$, $\\dfrac{3\\pi}{2} < \\alpha < 2\\pi$. Найдите $\\sin \\alpha$ и $\\operatorname{tg} \\alpha$.
2. $\\operatorname{ctg} \\alpha = -3$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Найдите $\\sin \\alpha$.
3. Упростите $\\sin^2 \\alpha + \\cos^2 \\alpha + \\operatorname{tg}^2 \\alpha$.
4. Упростите $\\dfrac{1}{\\cos^2 \\alpha} - \\operatorname{tg}^2 \\alpha$.
5. Упростите $(1 - \\sin \\alpha)(1 + \\sin \\alpha)$.
6. Докажите, что $\\operatorname{tg} \\alpha + \\operatorname{ctg} \\alpha = \\dfrac{1}{\\sin \\alpha \\cos \\alpha}$.
7. Могут ли одновременно $\\sin \\alpha = 0{,}6$ и $\\cos \\alpha = 0{,}7$?

### Ответы

1. $\\sin \\alpha = -\\dfrac{12}{13}$, $\\operatorname{tg} \\alpha = -\\dfrac{12}{5}$. 2. $\\dfrac{1}{\\sin^2 \\alpha} = 10$; во II четверти $\\sin \\alpha = \\dfrac{\\sqrt{10}}{10}$. 3. $\\dfrac{1}{\\cos^2 \\alpha}$. 4. $1$. 5. $\\cos^2 \\alpha$. 6. $\\dfrac{\\sin \\alpha}{\\cos \\alpha} + \\dfrac{\\cos \\alpha}{\\sin \\alpha} = \\dfrac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin \\alpha \\cos \\alpha} = \\dfrac{1}{\\sin \\alpha \\cos \\alpha}$. 7. Нет: $0{,}36 + 0{,}49 = 0{,}85 \\ne 1$.`,
      },
      [
        q(
          t("sin²α + cos²α equals…", "sin²α + cos²α-ն հավասար է…", "sin²α + cos²α равно…"),
          [t("0", "0", "0"), t("1", "1", "1"), t("2", "2", "2")],
          1,
        ),
        q(
          t("tan α · cot α equals…", "tg α · ctg α-ն հավասար է…", "tg α · ctg α равно…"),
          [t("1", "1", "1"), t("0", "0", "0"), t("tan²α", "tg²α", "tg²α")],
          0,
        ),
        q(
          t("1 + tan²α equals…", "1 + tg²α-ն հավասար է…", "1 + tg²α равно…"),
          [t("1/sin²α", "1/sin²α", "1/sin²α"), t("1/cos²α", "1/cos²α", "1/cos²α"), t("cos²α", "cos²α", "cos²α")],
          1,
        ),
        q(
          t("sin α = 3/5 and α is in quarter II. Then cos α is…", "sin α = 3/5, α-ն II քառորդում է։ Այդ դեպքում cos α-ն…", "sin α = 3/5, α во II четверти. Тогда cos α —"),
          [t("4/5", "4/5", "4/5"), t("−4/5", "−4/5", "−4/5"), t("−3/4", "−3/4", "−3/4")],
          1,
        ),
        q(
          t("1 − cos²α simplifies to…", "1 − cos²α-ն պարզեցվում է…", "1 − cos²α упрощается до…"),
          [t("sin²α", "sin²α", "sin²α"), t("−sin²α", "−sin²α", "−sin²α"), t("tan²α", "tg²α", "tg²α")],
          0,
        ),
        q(
          t("What decides the sign of cos α found from sin α?", "Ի՞նչն է որոշում sin α-ով գտնված cos α-ի նշանը", "Что определяет знак cos α, найденного по sin α?"),
          [t("the quarter of α", "α-ի քառորդը", "четверть угла α"), t("the size of sin α", "sin α-ի մեծությունը", "величина sin α"), t("nothing, it is always positive", "ոչինչ, այն միշտ դրական է", "ничто, он всегда положителен")],
          0,
        ),
      ],
    ),
  ],
};
