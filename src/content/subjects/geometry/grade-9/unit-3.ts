import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Relations between the sides and the angles of a triangle", "Եռանկյան կողմերի և անկյունների առնչությունները", "Соотношения между сторонами и углами треугольника"),
  summary: t("The sine, cosine and tangent of angles from 0 to 180 degrees, the area formula with a sine, the law of sines, the law of cosines, solving triangles, and the scalar product of vectors.", "0-ից 180 աստիճան անկյունների սինուսը, կոսինուսը և տանգենսը, մակերեսի բանաձևը սինուսով, սինուսների և կոսինուսների թեորեմները, եռանկյունների լուծումը, վեկտորների սկալյար արտադրյալը։", "Синус, косинус и тангенс углов от 0 до 180 градусов, формула площади через синус, теоремы синусов и косинусов, решение треугольников, скалярное произведение векторов."),
  lessons: [
    lesson(
      "sin-cos-0-180",
      ["Sine, cosine and tangent of an angle from 0 to 180 degrees", "0-ից 180 աստիճան անկյան սինուսը, կոսինուսը և տանգենսը", "Синус, косинус и тангенс угла от 0 до 180 градусов"],
      {
        en: ["Define the sine and cosine of any angle from 0 to 180 degrees through the unit semicircle", "Use the basic trigonometric identity and the formulas for the supplementary angle", "Know the values for 0, 30, 45, 60, 90, 120, 135, 150 and 180 degrees"],
        hy: ["Միավոր կիսաշրջանագծով սահմանել 0-ից 180 աստիճան ցանկացած անկյան սինուսը և կոսինուսը", "Կիրառել հիմնական եռանկյունաչափական նույնությունը և լրացուցիչ անկյան բանաձևերը", "Իմանալ 0, 30, 45, 60, 90, 120, 135, 150 և 180 աստիճանի արժեքները"],
        ru: ["Определять синус и косинус любого угла от 0 до 180 градусов через единичную полуокружность", "Применять основное тригонометрическое тождество и формулы для смежного угла", "Знать значения для 0, 30, 45, 60, 90, 120, 135, 150 и 180 градусов"],
      },
      {
        en: `## Beyond the right triangle

In grade 8 the sine and cosine were defined for an acute angle of a right triangle. A triangle may have an obtuse angle, so the definition has to be widened. We do it with coordinates.

Draw the upper half of the circle of radius $1$ centred at the origin. For an angle $\\alpha$ between $0^\\circ$ and $180^\\circ$, let $M(x; y)$ be the point of this semicircle for which the ray $OM$ makes the angle $\\alpha$ with the positive direction of $Ox$.

> $$\\cos\\alpha = x, \\qquad \\sin\\alpha = y, \\qquad \\tan\\alpha = \\frac{y}{x}\\ (x \\ne 0).$$

For an acute angle this agrees with the old definition, because the right triangle $OMx$ has hypotenuse $1$.

## What the definition tells us at once

Since $M$ is on the upper semicircle, $y \\ge 0$, so $\\sin\\alpha \\ge 0$ always, and $\\sin\\alpha = 0$ only for $\\alpha = 0^\\circ$ and $\\alpha = 180^\\circ$. The coordinate $x$ is positive for an acute angle, zero for $90^\\circ$ and negative for an obtuse angle.

| Angle | $\\sin\\alpha$ | $\\cos\\alpha$ |
|---|---|---|
| acute | positive | positive |
| right | $1$ | $0$ |
| obtuse | positive | negative |

Because $M$ lies on the circle $x^2 + y^2 = 1$:

> $$\\sin^2\\alpha + \\cos^2\\alpha = 1.$$

## The supplementary angle

The points for $\\alpha$ and for $180^\\circ - \\alpha$ are symmetric about the axis $Oy$, so their heights are equal and their first coordinates are opposite:

> $$\\sin(180^\\circ - \\alpha) = \\sin\\alpha, \\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha.$$

**Example 1.** $\\sin 150^\\circ = \\sin 30^\\circ = 0{.}5$ and $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.

## The table to remember

| $\\alpha$ | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ | $120^\\circ$ | $135^\\circ$ | $150^\\circ$ | $180^\\circ$ |
|---|---|---|---|---|---|---|---|---|---|
| $\\sin\\alpha$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\cos\\alpha$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ | $-\\frac{1}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\sqrt{3}}{2}$ | $-1$ |

The sine row rises to $1$ and comes back down; the cosine row falls steadily from $1$ to $-1$. That is worth more than memorising nine pairs.

**Example 2.** Find $\\cos\\alpha$ if $\\sin\\alpha = \\frac{3}{5}$ and $\\alpha$ is obtuse. From the identity, $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\cos\\alpha = \\pm\\frac{4}{5}$. An obtuse angle has a negative cosine, so $\\cos\\alpha = -\\frac{4}{5}$.

**Example 3.** Compute $\\sin 120^\\circ \\cdot \\cos 135^\\circ$. We get $\\frac{\\sqrt{3}}{2}\\cdot\\left(-\\frac{\\sqrt{2}}{2}\\right) = -\\frac{\\sqrt{6}}{4}$.

**Example 4.** The tangent of an obtuse angle is negative, because the height is positive and the first coordinate is negative. For instance $\\tan 135^\\circ = \\frac{\\sqrt{2}/2}{-\\sqrt{2}/2} = -1$. For $\\alpha = 90^\\circ$ the tangent is undefined, since $x = 0$.

### Exercises

1. Write the values of $\\sin 90^\\circ$, $\\cos 90^\\circ$ and $\\sin 180^\\circ$.
2. Compute $\\cos 120^\\circ$ and $\\sin 135^\\circ$.
3. Find $\\sin\\alpha$ if $\\cos\\alpha = -\\frac{5}{13}$.
4. Find $\\cos\\alpha$ if $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$ and $\\alpha$ is obtuse.
5. Compute $\\sin 30^\\circ + \\cos 150^\\circ + \\sin 150^\\circ$.
6. Simplify $\\sin^2 40^\\circ + \\cos^2 40^\\circ$.
7. Can the cosine of an angle of a triangle be equal to $-1$?
8. Compute $\\tan 120^\\circ$.

### Answers

1. $\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$, $\\sin 180^\\circ = 0$.
2. $\\cos 120^\\circ = -\\frac{1}{2}$, $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$.
3. $\\sin^2\\alpha = 1 - \\frac{25}{169} = \\frac{144}{169}$, and the sine is non-negative, so $\\sin\\alpha = \\frac{12}{13}$.
4. $\\cos^2\\alpha = \\frac{1}{4}$, and the angle is obtuse, so $\\cos\\alpha = -\\frac{1}{2}$ and $\\alpha = 150^\\circ$.
5. $0{.}5 - \\frac{\\sqrt{3}}{2} + 0{.}5 = 1 - \\frac{\\sqrt{3}}{2}$.
6. $1$, by the basic identity.
7. No. That would mean the angle is $180^\\circ$, and an angle of a triangle is less than $180^\\circ$.
8. $\\tan 120^\\circ = \\frac{\\sqrt{3}/2}{-1/2} = -\\sqrt{3}$.`,
        hy: `## Ուղղանկյուն եռանկյունից այն կողմ

8-րդ դասարանում սինուսը և կոսինուսը սահմանված էին ուղղանկյուն եռանկյան սուր անկյան համար։ Եռանկյունը կարող է ունենալ բութ անկյուն, ուստի սահմանումը պետք է ընդարձակել։ Դա անում ենք կոորդինատներով։

Գծենք սկզբնակետում կենտրոնով $1$ շառավղով շրջանագծի վերին կեսը։ $0^\\circ$-ից $180^\\circ$ $\\alpha$ անկյան համար թող $M(x; y)$-ը այս կիսաշրջանագծի այն կետն է, որի համար $OM$ ճառագայթը $Ox$-ի դրական ուղղության հետ կազմում է $\\alpha$ անկյուն։

> $$\\cos\\alpha = x, \\qquad \\sin\\alpha = y, \\qquad \\tan\\alpha = \\frac{y}{x}\\ (x \\ne 0).$$

Սուր անկյան համար սա համաձայնվում է հին սահմանման հետ, քանի որ $OMx$ ուղղանկյուն եռանկյան ներքնաձիգը $1$ է։

## Ինչ է ասում սահմանումն անմիջապես

Քանի որ $M$-ը վերին կիսաշրջանագծի վրա է, $y \\ge 0$, ուստի $\\sin\\alpha \\ge 0$ միշտ, և $\\sin\\alpha = 0$ միայն $\\alpha = 0^\\circ$ և $\\alpha = 180^\\circ$ դեպքում։ $x$ կոորդինատը դրական է սուր անկյան համար, զրո՝ $90^\\circ$-ի, և բացասական՝ բութ անկյան համար։

| Անկյունը | $\\sin\\alpha$ | $\\cos\\alpha$ |
|---|---|---|
| սուր | դրական | դրական |
| ուղիղ | $1$ | $0$ |
| բութ | դրական | բացասական |

Քանի որ $M$-ը գտնվում է $x^2 + y^2 = 1$ շրջանագծի վրա՝

> $$\\sin^2\\alpha + \\cos^2\\alpha = 1.$$

## Լրացուցիչ անկյունը

$\\alpha$-ի և $180^\\circ - \\alpha$-ի կետերը համաչափ են $Oy$ առանցքի նկատմամբ, ուստի նրանց բարձրությունները հավասար են, իսկ առաջին կոորդինատները՝ հակադիր՝

> $$\\sin(180^\\circ - \\alpha) = \\sin\\alpha, \\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha.$$

**Օրինակ 1.** $\\sin 150^\\circ = \\sin 30^\\circ = 0{,}5$ և $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$։

## Հիշելու աղյուսակը

| $\\alpha$ | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ | $120^\\circ$ | $135^\\circ$ | $150^\\circ$ | $180^\\circ$ |
|---|---|---|---|---|---|---|---|---|---|
| $\\sin\\alpha$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\cos\\alpha$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ | $-\\frac{1}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\sqrt{3}}{2}$ | $-1$ |

Սինուսի տողը բարձրանում է մինչև $1$ և հետ իջնում, կոսինուսի տողը հաստատուն կերպով իջնում է $1$-ից $-1$։ Սա ավելի արժեքավոր է, քան ինը զույգ անգիր անելը։

**Օրինակ 2.** Գտնենք $\\cos\\alpha$-ն, եթե $\\sin\\alpha = \\frac{3}{5}$ և $\\alpha$-ն բութ է։ Նույնությունից՝ $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, ուստի $\\cos\\alpha = \\pm\\frac{4}{5}$։ Բութ անկյունն ունի բացասական կոսինուս, ուստի $\\cos\\alpha = -\\frac{4}{5}$։

**Օրինակ 3.** Հաշվենք $\\sin 120^\\circ \\cdot \\cos 135^\\circ$։ Ստանում ենք $\\frac{\\sqrt{3}}{2}\\cdot\\left(-\\frac{\\sqrt{2}}{2}\\right) = -\\frac{\\sqrt{6}}{4}$։

**Օրինակ 4.** Բութ անկյան տանգենսը բացասական է, քանի որ բարձրությունը դրական է, իսկ առաջին կոորդինատը՝ բացասական։ Օրինակ՝ $\\tan 135^\\circ = \\frac{\\sqrt{2}/2}{-\\sqrt{2}/2} = -1$։ $\\alpha = 90^\\circ$ դեպքում տանգենսը սահմանված չէ, քանի որ $x = 0$։

### Վարժություններ

1. Գրեք $\\sin 90^\\circ$, $\\cos 90^\\circ$ և $\\sin 180^\\circ$ արժեքները։
2. Հաշվեք $\\cos 120^\\circ$-ը և $\\sin 135^\\circ$-ը։
3. Գտեք $\\sin\\alpha$-ն, եթե $\\cos\\alpha = -\\frac{5}{13}$։
4. Գտեք $\\cos\\alpha$-ն, եթե $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$ և $\\alpha$-ն բութ է։
5. Հաշվեք $\\sin 30^\\circ + \\cos 150^\\circ + \\sin 150^\\circ$։
6. Պարզեցրեք $\\sin^2 40^\\circ + \\cos^2 40^\\circ$։
7. Կարո՞ղ է եռանկյան անկյան կոսինուսը հավասար լինել $-1$-ի։
8. Հաշվեք $\\tan 120^\\circ$։

### Պատասխաններ

1. $\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$, $\\sin 180^\\circ = 0$։
2. $\\cos 120^\\circ = -\\frac{1}{2}$, $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$։
3. $\\sin^2\\alpha = 1 - \\frac{25}{169} = \\frac{144}{169}$, իսկ սինուսն ոչ բացասական է, ուստի $\\sin\\alpha = \\frac{12}{13}$։
4. $\\cos^2\\alpha = \\frac{1}{4}$, իսկ անկյունը բութ է, ուստի $\\cos\\alpha = -\\frac{1}{2}$ և $\\alpha = 150^\\circ$։
5. $0{,}5 - \\frac{\\sqrt{3}}{2} + 0{,}5 = 1 - \\frac{\\sqrt{3}}{2}$։
6. $1$՝ ըստ հիմնական նույնության։
7. Ոչ։ Դա կնշանակեր, որ անկյունը $180^\\circ$ է, իսկ եռանկյան անկյունը $180^\\circ$-ից փոքր է։
8. $\\tan 120^\\circ = \\frac{\\sqrt{3}/2}{-1/2} = -\\sqrt{3}$։`,
        ru: `## За пределами прямоугольного треугольника

В 8 классе синус и косинус были определены для острого угла прямоугольного треугольника. У треугольника может быть тупой угол, поэтому определение надо расширить. Делаем это с помощью координат.

Начертим верхнюю половину окружности радиуса $1$ с центром в начале координат. Для угла $\\alpha$ от $0^\\circ$ до $180^\\circ$ пусть $M(x; y)$ — та точка этой полуокружности, для которой луч $OM$ образует угол $\\alpha$ с положительным направлением оси $Ox$.

> $$\\cos\\alpha = x, \\qquad \\sin\\alpha = y, \\qquad \\tan\\alpha = \\frac{y}{x}\\ (x \\ne 0).$$

Для острого угла это согласуется со старым определением, потому что гипотенуза прямоугольного треугольника $OMx$ равна $1$.

## Что определение говорит сразу

Так как $M$ лежит на верхней полуокружности, $y \\ge 0$, поэтому $\\sin\\alpha \\ge 0$ всегда, и $\\sin\\alpha = 0$ только при $\\alpha = 0^\\circ$ и $\\alpha = 180^\\circ$. Координата $x$ положительна для острого угла, равна нулю при $90^\\circ$ и отрицательна для тупого угла.

| Угол | $\\sin\\alpha$ | $\\cos\\alpha$ |
|---|---|---|
| острый | положителен | положителен |
| прямой | $1$ | $0$ |
| тупой | положителен | отрицателен |

Так как $M$ лежит на окружности $x^2 + y^2 = 1$:

> $$\\sin^2\\alpha + \\cos^2\\alpha = 1.$$

## Смежный угол

Точки для $\\alpha$ и для $180^\\circ - \\alpha$ симметричны относительно оси $Oy$, поэтому их высоты равны, а первые координаты противоположны:

> $$\\sin(180^\\circ - \\alpha) = \\sin\\alpha, \\qquad \\cos(180^\\circ - \\alpha) = -\\cos\\alpha.$$

**Пример 1.** $\\sin 150^\\circ = \\sin 30^\\circ = 0{,}5$ и $\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.

## Таблица, которую стоит помнить

| $\\alpha$ | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ | $120^\\circ$ | $135^\\circ$ | $150^\\circ$ | $180^\\circ$ |
|---|---|---|---|---|---|---|---|---|---|
| $\\sin\\alpha$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\cos\\alpha$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ | $-\\frac{1}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\sqrt{3}}{2}$ | $-1$ |

Строка синуса поднимается до $1$ и возвращается вниз, строка косинуса неуклонно убывает от $1$ до $-1$. Это полезнее, чем заучивать девять пар.

**Пример 2.** Найдём $\\cos\\alpha$, если $\\sin\\alpha = \\frac{3}{5}$ и угол $\\alpha$ тупой. Из тождества $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, поэтому $\\cos\\alpha = \\pm\\frac{4}{5}$. У тупого угла косинус отрицателен, поэтому $\\cos\\alpha = -\\frac{4}{5}$.

**Пример 3.** Вычислим $\\sin 120^\\circ \\cdot \\cos 135^\\circ$. Получаем $\\frac{\\sqrt{3}}{2}\\cdot\\left(-\\frac{\\sqrt{2}}{2}\\right) = -\\frac{\\sqrt{6}}{4}$.

**Пример 4.** Тангенс тупого угла отрицателен, потому что высота положительна, а первая координата отрицательна. Например, $\\tan 135^\\circ = \\frac{\\sqrt{2}/2}{-\\sqrt{2}/2} = -1$. При $\\alpha = 90^\\circ$ тангенс не определён, так как $x = 0$.

### Упражнения

1. Запишите значения $\\sin 90^\\circ$, $\\cos 90^\\circ$ и $\\sin 180^\\circ$.
2. Вычислите $\\cos 120^\\circ$ и $\\sin 135^\\circ$.
3. Найдите $\\sin\\alpha$, если $\\cos\\alpha = -\\frac{5}{13}$.
4. Найдите $\\cos\\alpha$, если $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$ и угол $\\alpha$ тупой.
5. Вычислите $\\sin 30^\\circ + \\cos 150^\\circ + \\sin 150^\\circ$.
6. Упростите $\\sin^2 40^\\circ + \\cos^2 40^\\circ$.
7. Может ли косинус угла треугольника быть равен $-1$?
8. Вычислите $\\tan 120^\\circ$.

### Ответы

1. $\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$, $\\sin 180^\\circ = 0$.
2. $\\cos 120^\\circ = -\\frac{1}{2}$, $\\sin 135^\\circ = \\frac{\\sqrt{2}}{2}$.
3. $\\sin^2\\alpha = 1 - \\frac{25}{169} = \\frac{144}{169}$, а синус неотрицателен, поэтому $\\sin\\alpha = \\frac{12}{13}$.
4. $\\cos^2\\alpha = \\frac{1}{4}$, а угол тупой, поэтому $\\cos\\alpha = -\\frac{1}{2}$ и $\\alpha = 150^\\circ$.
5. $0{,}5 - \\frac{\\sqrt{3}}{2} + 0{,}5 = 1 - \\frac{\\sqrt{3}}{2}$.
6. $1$ по основному тождеству.
7. Нет. Это означало бы, что угол равен $180^\\circ$, а угол треугольника меньше $180^\\circ$.
8. $\\tan 120^\\circ = \\frac{\\sqrt{3}/2}{-1/2} = -\\sqrt{3}$.`,
      },
      [
        q(t("The sine of an angle from 0 to 180 degrees is defined as", "0-ից 180 աստիճան անկյան սինուսը սահմանվում է որպես", "Синус угла от 0 до 180 градусов определяется как"), [
          t("the second coordinate of the point of the unit semicircle", "միավոր կիսաշրջանագծի կետի երկրորդ կոորդինատը", "вторая координата точки единичной полуокружности"),
          t("the first coordinate of that point", "այդ կետի առաջին կոորդինատը", "первая координата этой точки"),
          t("the radius of the semicircle", "կիսաշրջանագծի շառավիղը", "радиус полуокружности"),
        ], 0),
        q(t("The cosine of an obtuse angle is", "Բութ անկյան կոսինուսը", "Косинус тупого угла"), [
          t("positive", "դրական է", "положителен"),
          t("negative", "բացասական է", "отрицателен"),
          t("equal to zero", "զրո է", "равен нулю"),
        ], 1),
        q(t("The basic trigonometric identity states that", "Հիմնական եռանկյունաչափական նույնությունն ասում է, որ", "Основное тригонометрическое тождество утверждает, что"), [
          t("sin α + cos α = 1", "sin α + cos α = 1", "sin α + cos α = 1"),
          t("sin α · cos α = 1", "sin α · cos α = 1", "sin α · cos α = 1"),
          t("sin²α + cos²α = 1", "sin²α + cos²α = 1", "sin²α + cos²α = 1"),
        ], 2),
        q(t("The value of sin 150 degrees equals", "sin 150 աստիճանի արժեքը հավասար է", "Значение sin 150 градусов равно"), [
          t("0,5", "0,5", "0,5"),
          t("-0,5", "-0,5", "-0,5"),
          t("1", "1", "1"),
        ], 0),
        q(t("The cosine of the supplementary angle 180 degrees minus alpha equals", "180 աստիճան հանած ալֆա լրացուցիչ անկյան կոսինուսը հավասար է", "Косинус смежного угла 180 градусов минус альфа равен"), [
          t("cos α", "cos α", "cos α"),
          t("minus cos α", "մինուս cos α", "минус cos α"),
          t("sin α", "sin α", "sin α"),
        ], 1),
        q(t("The sine of an angle of a triangle is never", "Եռանկյան անկյան սինուսն երբեք չի լինում", "Синус угла треугольника никогда не бывает"), [
          t("equal to one", "մեկին հավասար", "равен единице"),
          t("greater than one half", "մեկ երկրորդից մեծ", "больше одной второй"),
          t("negative", "բացասական", "отрицательным"),
        ], 2),
      ],
    ),
    lesson(
      "area-sine",
      ["The area of a triangle through two sides and the angle between them", "Եռանկյան մակերեսն երկու կողմով և նրանց միջև անկյունով", "Площадь треугольника через две стороны и угол между ними"],
      {
        en: ["Prove and use the formula S equals one half ab sin C", "Find an angle of a triangle from its area and two sides", "Apply the formula to parallelograms and quadrilaterals"],
        hy: ["Ապացուցել և կիրառել S = 0,5ab sin C բանաձևը", "Գտնել եռանկյան անկյունն ըստ մակերեսի և երկու կողմի", "Կիրառել բանաձևը զուգահեռագծերի և քառանկյունների համար"],
        ru: ["Доказывать и применять формулу S равно одна вторая ab sin C", "Находить угол треугольника по его площади и двум сторонам", "Применять формулу к параллелограммам и четырёхугольникам"],
      },
      {
        en: `## The formula

> The area of a triangle equals half the product of two of its sides and the sine of the angle between them:
> $$S = \\tfrac{1}{2}ab\\sin C.$$

**Proof.** Take the triangle $ABC$ with $BC = a$, $AC = b$ and the angle $C$ between them. Drop the height $h$ from $B$ onto the line $AC$. In the right triangle formed, $h = a\\sin C$ if $C$ is acute. If $C$ is obtuse, the foot of the height falls outside the side $AC$, and the right triangle has the angle $180^\\circ - C$ at $C$, so $h = a\\sin(180^\\circ - C) = a\\sin C$ again. In both cases
$$S = \\tfrac{1}{2}bh = \\tfrac{1}{2}ab\\sin C.$$

The widened definition of the sine is exactly what makes one formula cover both cases.

## Reading the formula

Since $\\sin C \\le 1$, the area is at most $\\tfrac{1}{2}ab$, with equality only when $C = 90^\\circ$. So among all triangles with two given sides the right one is the largest.

**Example 1.** $a = 6$, $b = 10$, $C = 30^\\circ$. Then $S = \\tfrac{1}{2}\\cdot 6\\cdot 10\\cdot 0{.}5 = 15$.

**Example 2.** $a = 8$, $b = 5$, $C = 150^\\circ$. Then $\\sin 150^\\circ = 0{.}5$, so $S = \\tfrac{1}{2}\\cdot 8\\cdot 5\\cdot 0{.}5 = 10$. A triangle with an obtuse angle of $150^\\circ$ is flat, and its area is small.

**Example 3.** The area of a triangle is $12$, two of its sides are $6$ and $8$. Find the angle between them. From $12 = \\tfrac{1}{2}\\cdot 6\\cdot 8\\cdot\\sin C$ we get $\\sin C = 0{.}5$, so $C = 30^\\circ$ or $C = 150^\\circ$. Both are possible: two different triangles have the same area.

| Given | Found |
|---|---|
| two sides and the angle between them | the area |
| the area and two sides | the sine of the angle, so two possible angles |
| the area and one side | the height to that side |

## A parallelogram

A diagonal splits a parallelogram with sides $a$, $b$ and angle $\\alpha$ into two equal triangles, so

> $$S = ab\\sin\\alpha.$$

**Example 4.** A parallelogram with sides $7$ and $4$ and an angle of $45^\\circ$ has area $7\\cdot 4\\cdot\\frac{\\sqrt{2}}{2} = 14\\sqrt{2}$.

**Example 5.** A rhombus with side $5$ and an angle of $120^\\circ$ has area $25\\sin 120^\\circ = \\frac{25\\sqrt{3}}{2}$. Note that $\\sin 120^\\circ = \\sin 60^\\circ$, so the acute and the obtuse angle of a parallelogram give the same area, as they must.

**Example 6.** In the triangle $ABC$ the bisector from $C$ splits the angle $C = 60^\\circ$ into two angles of $30^\\circ$ and meets $AB$ at $D$. With $CA = 4$, $CB = 6$ and $CD = d$,
$$S_{ACD} + S_{BCD} = S_{ABC}, \\quad \\tfrac{1}{2}\\cdot 4d\\sin 30^\\circ + \\tfrac{1}{2}\\cdot 6d\\sin 30^\\circ = \\tfrac{1}{2}\\cdot 24\\sin 60^\\circ,$$
so $d + 1{.}5d = 6\\sqrt{3}$ and $d = \\frac{12\\sqrt{3}}{5}$. Splitting a figure and adding areas is a standard trick.

### Exercises

1. Find the area of a triangle with sides $10$ and $12$ and the angle $30^\\circ$ between them.
2. Find the area of a triangle with sides $4$ and $9$ and the angle $150^\\circ$ between them.
3. Find the area of a triangle with sides $3$ and $8$ and a right angle between them.
4. The area is $20$ and two sides are $5$ and $16$. Find the possible angles between them.
5. Find the area of a parallelogram with sides $6$ and $10$ and an angle of $60^\\circ$.
6. Find the area of a rhombus with side $8$ and an angle of $135^\\circ$.
7. Two sides of a triangle are $7$ and $9$. What is the greatest possible area?
8. In the triangle $ABC$, $AB = 6$, $AC = 10$ and the angle $A$ equals $120^\\circ$. Find the area.

### Answers

1. $\\tfrac{1}{2}\\cdot 10\\cdot 12\\cdot 0{.}5 = 30$.
2. $\\tfrac{1}{2}\\cdot 4\\cdot 9\\cdot 0{.}5 = 9$.
3. $\\tfrac{1}{2}\\cdot 3\\cdot 8\\cdot 1 = 12$.
4. $\\sin C = \\frac{40}{80} = 0{.}5$, so $C = 30^\\circ$ or $C = 150^\\circ$.
5. $6\\cdot 10\\cdot\\frac{\\sqrt{3}}{2} = 30\\sqrt{3}$.
6. $64\\sin 135^\\circ = 64\\cdot\\frac{\\sqrt{2}}{2} = 32\\sqrt{2}$.
7. $\\tfrac{1}{2}\\cdot 7\\cdot 9 = 31{.}5$, reached when the angle between them is right.
8. $\\tfrac{1}{2}\\cdot 6\\cdot 10\\cdot\\frac{\\sqrt{3}}{2} = 15\\sqrt{3}$.`,
        hy: `## Բանաձևը

> Եռանկյան մակերեսը հավասար է նրա երկու կողմի և նրանց միջև անկյան սինուսի արտադրյալի կեսին՝
> $$S = \\tfrac{1}{2}ab\\sin C.$$

**Ապացույց։** Վերցնենք $ABC$ եռանկյունը, որտեղ $BC = a$, $AC = b$, իսկ $C$-ն նրանց միջև անկյունն է։ $B$-ից $AC$ ուղղի վրա տանենք $h$ բարձրությունը։ Ստացված ուղղանկյուն եռանկյունում $h = a\\sin C$, եթե $C$-ն սուր է։ Եթե $C$-ն բութ է, բարձրության հիմքն ընկնում է $AC$ կողմից դուրս, և ուղղանկյուն եռանկյունը $C$-ում ունի $180^\\circ - C$ անկյուն, ուստի $h = a\\sin(180^\\circ - C) = a\\sin C$ նորից։ Երկու դեպքում էլ
$$S = \\tfrac{1}{2}bh = \\tfrac{1}{2}ab\\sin C.$$

Սինուսի ընդարձակված սահմանումը հենց այն է, ինչը թույլ է տալիս մեկ բանաձևով ծածկել երկու դեպքը։

## Բանաձևի ընթերցումը

Քանի որ $\\sin C \\le 1$, մակերեսն ամենաշատը $\\tfrac{1}{2}ab$ է, և հավասարությունը միայն $C = 90^\\circ$ դեպքում։ Ուրեմն երկու տրված կողմ ունեցող բոլոր եռանկյուններից ուղղանկյունն է ամենամեծը։

**Օրինակ 1.** $a = 6$, $b = 10$, $C = 30^\\circ$։ Այդ դեպքում $S = \\tfrac{1}{2}\\cdot 6\\cdot 10\\cdot 0{,}5 = 15$։

**Օրինակ 2.** $a = 8$, $b = 5$, $C = 150^\\circ$։ Այդ դեպքում $\\sin 150^\\circ = 0{,}5$, ուստի $S = \\tfrac{1}{2}\\cdot 8\\cdot 5\\cdot 0{,}5 = 10$։ $150^\\circ$ բութ անկյուն ունեցող եռանկյունը տափակ է, և նրա մակերեսը փոքր է։

**Օրինակ 3.** Եռանկյան մակերեսը $12$ է, նրա երկու կողմը՝ $6$ և $8$։ Գտնենք նրանց միջև անկյունը։ $12 = \\tfrac{1}{2}\\cdot 6\\cdot 8\\cdot\\sin C$-ից ստանում ենք $\\sin C = 0{,}5$, ուստի $C = 30^\\circ$ կամ $C = 150^\\circ$։ Երկուսն էլ հնարավոր են. երկու տարբեր եռանկյուն ունեն նույն մակերեսը։

| Տրված է | Գտնվում է |
|---|---|
| երկու կողմ և նրանց միջև անկյունը | մակերեսը |
| մակերեսը և երկու կողմը | անկյան սինուսը, ուստի երկու հնարավոր անկյուն |
| մակերեսը և մեկ կողմը | այդ կողմին տարված բարձրությունը |

## Զուգահեռագիծը

Անկյունագիծը $a$, $b$ կողմերով և $\\alpha$ անկյունով զուգահեռագիծը բաժանում է երկու հավասար եռանկյան, ուստի

> $$S = ab\\sin\\alpha.$$

**Օրինակ 4.** $7$ և $4$ կողմերով և $45^\\circ$ անկյունով զուգահեռագծի մակերեսն է $7\\cdot 4\\cdot\\frac{\\sqrt{2}}{2} = 14\\sqrt{2}$։

**Օրինակ 5.** $5$ կողմով և $120^\\circ$ անկյունով շեղանկյան մակերեսն է $25\\sin 120^\\circ = \\frac{25\\sqrt{3}}{2}$։ Նկատենք, որ $\\sin 120^\\circ = \\sin 60^\\circ$, ուստի զուգահեռագծի սուր և բութ անկյունները տալիս են նույն մակերեսը, ինչպես և պետք է։

**Օրինակ 6.** $ABC$ եռանկյունում $C$ գագաթից տարված կիսորդը $C = 60^\\circ$ անկյունը բաժանում է երկու $30^\\circ$ անկյան և $AB$-ին հանդիպում է $D$ կետում։ Երբ $CA = 4$, $CB = 6$ և $CD = d$՝
$$S_{ACD} + S_{BCD} = S_{ABC}, \\quad \\tfrac{1}{2}\\cdot 4d\\sin 30^\\circ + \\tfrac{1}{2}\\cdot 6d\\sin 30^\\circ = \\tfrac{1}{2}\\cdot 24\\sin 60^\\circ,$$
ուստի $d + 1{,}5d = 6\\sqrt{3}$ և $d = \\frac{12\\sqrt{3}}{5}$։ Պատկերը մասերի բաժանելը և մակերեսները գումարելը սովորական հնարք է։

### Վարժություններ

1. Գտեք $10$ և $12$ կողմերով և նրանց միջև $30^\\circ$ անկյունով եռանկյան մակերեսը։
2. Գտեք $4$ և $9$ կողմերով և նրանց միջև $150^\\circ$ անկյունով եռանկյան մակերեսը։
3. Գտեք $3$ և $8$ կողմերով և նրանց միջև ուղիղ անկյունով եռանկյան մակերեսը։
4. Մակերեսը $20$ է, երկու կողմը՝ $5$ և $16$։ Գտեք նրանց միջև հնարավոր անկյունները։
5. Գտեք $6$ և $10$ կողմերով և $60^\\circ$ անկյունով զուգահեռագծի մակերեսը։
6. Գտեք $8$ կողմով և $135^\\circ$ անկյունով շեղանկյան մակերեսը։
7. Եռանկյան երկու կողմը $7$ և $9$ են։ Ո՞րն է հնարավոր ամենամեծ մակերեսը։
8. $ABC$ եռանկյունում $AB = 6$, $AC = 10$, իսկ $A$ անկյունը $120^\\circ$ է։ Գտեք մակերեսը։

### Պատասխաններ

1. $\\tfrac{1}{2}\\cdot 10\\cdot 12\\cdot 0{,}5 = 30$։
2. $\\tfrac{1}{2}\\cdot 4\\cdot 9\\cdot 0{,}5 = 9$։
3. $\\tfrac{1}{2}\\cdot 3\\cdot 8\\cdot 1 = 12$։
4. $\\sin C = \\frac{40}{80} = 0{,}5$, ուստի $C = 30^\\circ$ կամ $C = 150^\\circ$։
5. $6\\cdot 10\\cdot\\frac{\\sqrt{3}}{2} = 30\\sqrt{3}$։
6. $64\\sin 135^\\circ = 64\\cdot\\frac{\\sqrt{2}}{2} = 32\\sqrt{2}$։
7. $\\tfrac{1}{2}\\cdot 7\\cdot 9 = 31{,}5$՝ հասնում է, երբ նրանց միջև անկյունն ուղիղ է։
8. $\\tfrac{1}{2}\\cdot 6\\cdot 10\\cdot\\frac{\\sqrt{3}}{2} = 15\\sqrt{3}$։`,
        ru: `## Формула

> Площадь треугольника равна половине произведения двух его сторон на синус угла между ними:
> $$S = \\tfrac{1}{2}ab\\sin C.$$

**Доказательство.** Возьмём треугольник $ABC$, где $BC = a$, $AC = b$, а $C$ — угол между ними. Опустим высоту $h$ из $B$ на прямую $AC$. В образовавшемся прямоугольном треугольнике $h = a\\sin C$, если угол $C$ острый. Если угол $C$ тупой, основание высоты падает вне стороны $AC$, и прямоугольный треугольник имеет при $C$ угол $180^\\circ - C$, поэтому $h = a\\sin(180^\\circ - C) = a\\sin C$ снова. В обоих случаях
$$S = \\tfrac{1}{2}bh = \\tfrac{1}{2}ab\\sin C.$$

Расширенное определение синуса — это именно то, что позволяет одной формуле покрыть оба случая.

## Чтение формулы

Так как $\\sin C \\le 1$, площадь не больше $\\tfrac{1}{2}ab$, причём равенство только при $C = 90^\\circ$. Значит, среди всех треугольников с двумя данными сторонами прямоугольный самый большой.

**Пример 1.** $a = 6$, $b = 10$, $C = 30^\\circ$. Тогда $S = \\tfrac{1}{2}\\cdot 6\\cdot 10\\cdot 0{,}5 = 15$.

**Пример 2.** $a = 8$, $b = 5$, $C = 150^\\circ$. Тогда $\\sin 150^\\circ = 0{,}5$, поэтому $S = \\tfrac{1}{2}\\cdot 8\\cdot 5\\cdot 0{,}5 = 10$. Треугольник с тупым углом $150^\\circ$ плоский, и его площадь мала.

**Пример 3.** Площадь треугольника равна $12$, две его стороны $6$ и $8$. Найдём угол между ними. Из $12 = \\tfrac{1}{2}\\cdot 6\\cdot 8\\cdot\\sin C$ получаем $\\sin C = 0{,}5$, поэтому $C = 30^\\circ$ или $C = 150^\\circ$. Возможны оба: два разных треугольника имеют одну площадь.

| Дано | Находим |
|---|---|
| две стороны и угол между ними | площадь |
| площадь и две стороны | синус угла, значит два возможных угла |
| площадь и одну сторону | высоту к этой стороне |

## Параллелограмм

Диагональ делит параллелограмм со сторонами $a$, $b$ и углом $\\alpha$ на два равных треугольника, поэтому

> $$S = ab\\sin\\alpha.$$

**Пример 4.** Параллелограмм со сторонами $7$ и $4$ и углом $45^\\circ$ имеет площадь $7\\cdot 4\\cdot\\frac{\\sqrt{2}}{2} = 14\\sqrt{2}$.

**Пример 5.** Ромб со стороной $5$ и углом $120^\\circ$ имеет площадь $25\\sin 120^\\circ = \\frac{25\\sqrt{3}}{2}$. Заметим, что $\\sin 120^\\circ = \\sin 60^\\circ$, поэтому острый и тупой углы параллелограмма дают одну и ту же площадь, как и должно быть.

**Пример 6.** В треугольнике $ABC$ биссектриса из $C$ делит угол $C = 60^\\circ$ на два угла по $30^\\circ$ и встречает $AB$ в точке $D$. При $CA = 4$, $CB = 6$ и $CD = d$
$$S_{ACD} + S_{BCD} = S_{ABC}, \\quad \\tfrac{1}{2}\\cdot 4d\\sin 30^\\circ + \\tfrac{1}{2}\\cdot 6d\\sin 30^\\circ = \\tfrac{1}{2}\\cdot 24\\sin 60^\\circ,$$
поэтому $d + 1{,}5d = 6\\sqrt{3}$ и $d = \\frac{12\\sqrt{3}}{5}$. Разбить фигуру и сложить площади — стандартный приём.

### Упражнения

1. Найдите площадь треугольника со сторонами $10$ и $12$ и углом $30^\\circ$ между ними.
2. Найдите площадь треугольника со сторонами $4$ и $9$ и углом $150^\\circ$ между ними.
3. Найдите площадь треугольника со сторонами $3$ и $8$ и прямым углом между ними.
4. Площадь равна $20$, две стороны $5$ и $16$. Найдите возможные углы между ними.
5. Найдите площадь параллелограмма со сторонами $6$ и $10$ и углом $60^\\circ$.
6. Найдите площадь ромба со стороной $8$ и углом $135^\\circ$.
7. Две стороны треугольника равны $7$ и $9$. Какова наибольшая возможная площадь?
8. В треугольнике $ABC$ $AB = 6$, $AC = 10$, а угол $A$ равен $120^\\circ$. Найдите площадь.

### Ответы

1. $\\tfrac{1}{2}\\cdot 10\\cdot 12\\cdot 0{,}5 = 30$.
2. $\\tfrac{1}{2}\\cdot 4\\cdot 9\\cdot 0{,}5 = 9$.
3. $\\tfrac{1}{2}\\cdot 3\\cdot 8\\cdot 1 = 12$.
4. $\\sin C = \\frac{40}{80} = 0{,}5$, поэтому $C = 30^\\circ$ или $C = 150^\\circ$.
5. $6\\cdot 10\\cdot\\frac{\\sqrt{3}}{2} = 30\\sqrt{3}$.
6. $64\\sin 135^\\circ = 64\\cdot\\frac{\\sqrt{2}}{2} = 32\\sqrt{2}$.
7. $\\tfrac{1}{2}\\cdot 7\\cdot 9 = 31{,}5$, достигается, когда угол между ними прямой.
8. $\\tfrac{1}{2}\\cdot 6\\cdot 10\\cdot\\frac{\\sqrt{3}}{2} = 15\\sqrt{3}$.`,
      },
      [
        q(t("The area of a triangle equals", "Եռանկյան մակերեսը հավասար է", "Площадь треугольника равна"), [
          t("half the product of two sides and the sine of the angle between them", "երկու կողմի և նրանց միջև անկյան սինուսի արտադրյալի կեսին", "половине произведения двух сторон на синус угла между ними"),
          t("the product of two sides and the sine of the angle between them", "երկու կողմի և նրանց միջև անկյան սինուսի արտադրյալին", "произведению двух сторон на синус угла между ними"),
          t("half the product of two sides and the cosine of the angle", "երկու կողմի և անկյան կոսինուսի արտադրյալի կեսին", "половине произведения двух сторон на косинус угла"),
        ], 0),
        q(t("With sides 10 and 12 and an angle of 30 degrees between them the area equals", "10 և 12 կողմերով և նրանց միջև 30 աստիճան անկյունով մակերեսը հավասար է", "При сторонах 10 и 12 и угле 30 градусов между ними площадь равна"), [
          t("60", "60", "60"),
          t("30", "30", "30"),
          t("120", "120", "120"),
        ], 1),
        q(t("Among all triangles with two given sides the largest area belongs to", "Երկու տրված կողմ ունեցող բոլոր եռանկյուններից ամենամեծ մակերեսն ունի", "Среди всех треугольников с двумя данными сторонами наибольшую площадь имеет"), [
          t("the one with the smallest angle between them", "նրանց միջև ամենափոքր անկյուն ունեցողը", "тот, у которого угол между ними наименьший"),
          t("the one with an obtuse angle between them", "նրանց միջև բութ անկյուն ունեցողը", "тот, у которого угол между ними тупой"),
          t("the one with a right angle between them", "նրանց միջև ուղիղ անկյուն ունեցողը", "тот, у которого угол между ними прямой"),
        ], 2),
        q(t("The area of a parallelogram with sides a and b and angle alpha equals", "a և b կողմերով և ալֆա անկյունով զուգահեռագծի մակերեսը հավասար է", "Площадь параллелограмма со сторонами a и b и углом альфа равна"), [
          t("ab sin α", "ab sin α", "ab sin α"),
          t("half of ab sin α", "ab sin α-ի կեսին", "половине ab sin α"),
          t("a + b times sin α", "a + b բազմապատկած sin α", "a + b умножить на sin α"),
        ], 0),
        q(t("If the area and two sides are known, the angle between those sides", "Եթե հայտնի են մակերեսը և երկու կողմը, այդ կողմերի միջև անկյունը", "Если известны площадь и две стороны, угол между этими сторонами"), [
          t("is determined uniquely", "որոշվում է միարժեք", "определяется однозначно"),
          t("has two possible values, one acute and one obtuse", "ունի երկու հնարավոր արժեք՝ մեկ սուր և մեկ բութ", "имеет два возможных значения: острое и тупое"),
          t("cannot be found at all", "ընդհանրապես չի կարող գտնվել", "вообще не может быть найден"),
        ], 1),
        q(t("The sine of 120 degrees and the sine of 60 degrees are", "120 աստիճանի և 60 աստիճանի սինուսները", "Синус 120 градусов и синус 60 градусов"), [
          t("opposite numbers", "հակադիր թվեր են", "противоположные числа"),
          t("reciprocal numbers", "փոխադարձ հակադարձ թվեր են", "взаимно обратные числа"),
          t("equal", "հավասար են", "равны"),
        ], 2),
      ],
    ),
    lesson(
      "sine-law",
      ["The law of sines", "Սինուսների թեորեմը", "Теорема синусов"],
      {
        en: ["State and prove the law of sines", "Find unknown sides and angles with the law of sines", "Use the ratio to find the radius of the circumscribed circle"],
        hy: ["Ձևակերպել և ապացուցել սինուսների թեորեմը", "Սինուսների թեորեմով գտնել անհայտ կողմերը և անկյունները", "Հարաբերությամբ գտնել արտագծած շրջանագծի շառավիղը"],
        ru: ["Формулировать и доказывать теорему синусов", "Находить неизвестные стороны и углы по теореме синусов", "Использовать отношение для нахождения радиуса описанной окружности"],
      },
      {
        en: `## The theorem

> In any triangle the sides are proportional to the sines of the opposite angles:
> $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}.$$

**Proof.** Write the area of the triangle in three ways:
$$S = \\tfrac{1}{2}bc\\sin A = \\tfrac{1}{2}ac\\sin B = \\tfrac{1}{2}ab\\sin C.$$
Divide every part by $\\tfrac{1}{2}abc$:
$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c},$$
and taking reciprocals gives the theorem. Note that the three sines are positive, so no division by zero occurs.

## The common value

The common value of the three ratios is not an accident.

> $$\\frac{a}{\\sin A} = 2R,$$
> where $R$ is the radius of the circle circumscribed about the triangle.

So the law of sines is really a statement with four equal quantities. From it $R = \\frac{a}{2\\sin A}$, which gives the radius without constructing the centre.

**Example 1.** In a triangle $A = 45^\\circ$, $B = 60^\\circ$ and $a = 8$. Find $b$. From $\\frac{8}{\\sin 45^\\circ} = \\frac{b}{\\sin 60^\\circ}$ we get
$$b = 8\\cdot\\frac{\\sqrt{3}/2}{\\sqrt{2}/2} = 8\\cdot\\frac{\\sqrt{3}}{\\sqrt{2}} = 4\\sqrt{6} \\approx 9{.}8.$$
The larger angle faces the larger side, which is a useful check.

**Example 2.** In a triangle $a = 10$, $A = 30^\\circ$. Then $2R = \\frac{10}{0{.}5} = 20$, so $R = 10$.

**Example 3.** A side of a triangle is $6$ and the opposite angle is $120^\\circ$. Find the radius of the circumscribed circle. $2R = \\frac{6}{\\sqrt{3}/2} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$, so $R = 2\\sqrt{3}$.

## When the law of sines works

| Given | Can the law of sines finish the job? |
|---|---|
| two angles and any side | yes, the third angle comes from the sum, then two ratios |
| two sides and the angle opposite one of them | yes, but the answer may be ambiguous |
| two sides and the angle between them | no, use the law of cosines |
| three sides | no, use the law of cosines |

**Example 4.** In a triangle $a = 7$, $b = 5$ and $B = 30^\\circ$. Find $A$. From $\\frac{7}{\\sin A} = \\frac{5}{0{.}5}$ we get $\\sin A = 0{.}7$. Then $A \\approx 44^\\circ$ or $A \\approx 136^\\circ$, and both give a valid triangle, because $B = 30^\\circ$ is small enough. This is the ambiguous case.

**Example 5.** In a triangle $A = 100^\\circ$, $B = 50^\\circ$, $c = 12$. Then $C = 30^\\circ$ and
$$a = \\frac{12\\sin 100^\\circ}{\\sin 30^\\circ} \\approx \\frac{12\\cdot 0{.}985}{0{.}5} \\approx 23{.}6.$$

**Example 6.** The angles of a triangle are in the ratio $1 : 2 : 3$. Find the ratio of its sides. The angles are $30^\\circ$, $60^\\circ$, $90^\\circ$, and the sides are proportional to $\\sin 30^\\circ : \\sin 60^\\circ : \\sin 90^\\circ = \\frac{1}{2} : \\frac{\\sqrt{3}}{2} : 1 = 1 : \\sqrt{3} : 2$. This is the familiar half of an equilateral triangle.

### Exercises

1. In a triangle $A = 30^\\circ$, $B = 45^\\circ$, $a = 6$. Find $b$.
2. In a triangle $a = 9$, $A = 60^\\circ$. Find the radius of the circumscribed circle.
3. In a triangle $A = 75^\\circ$, $B = 45^\\circ$, $c = 10$. Find $C$ and then $a$ to one decimal place, using $\\sin 75^\\circ \\approx 0{.}966$.
4. A chord of a circle of radius $5$ subtends an inscribed angle of $30^\\circ$. Find the chord.
5. In a triangle $b = 8$, $B = 120^\\circ$, $c = 5$. Find $\\sin C$.
6. The angles of a triangle are in the ratio $2 : 3 : 4$. Which side is the longest?
7. Can a triangle have $a = 10$, $A = 30^\\circ$ and $b = 25$?
8. Find the ratio of the sides of a triangle with angles $45^\\circ$, $45^\\circ$ and $90^\\circ$.

### Answers

1. $b = \\frac{6\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{6\\cdot\\sqrt{2}/2}{0{.}5} = 6\\sqrt{2}$.
2. $2R = \\frac{9}{\\sqrt{3}/2} = 6\\sqrt{3}$, so $R = 3\\sqrt{3}$.
3. $C = 60^\\circ$, and $a = \\frac{10\\cdot 0{.}966}{\\sqrt{3}/2} \\approx 11{.}2$.
4. The chord is $a = 2R\\sin 30^\\circ = 10\\cdot 0{.}5 = 5$.
5. $\\sin C = \\frac{5\\sin 120^\\circ}{8} = \\frac{5\\sqrt{3}}{16} \\approx 0{.}54$.
6. The angles are $40^\\circ$, $60^\\circ$, $80^\\circ$, so the side opposite $80^\\circ$ is the longest.
7. No. It would need $\\sin B = \\frac{25\\cdot 0{.}5}{10} = 1{.}25 > 1$, which is impossible.
8. $\\sin 45^\\circ : \\sin 45^\\circ : \\sin 90^\\circ = 1 : 1 : \\sqrt{2}$.`,
        hy: `## Թեորեմը

> Ցանկացած եռանկյունում կողմերը համեմատական են հանդիպակաց անկյունների սինուսներին՝
> $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}.$$

**Ապացույց։** Գրենք եռանկյան մակերեսն երեք եղանակով՝
$$S = \\tfrac{1}{2}bc\\sin A = \\tfrac{1}{2}ac\\sin B = \\tfrac{1}{2}ab\\sin C.$$
Ամեն մաս բաժանենք $\\tfrac{1}{2}abc$-ի՝
$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c},$$
և հակադարձները վերցնելով ստանում ենք թեորեմը։ Նկատենք, որ երեք սինուսները դրական են, ուստի զրոյի բաժանում տեղի չի ունենում։

## Ընդհանուր արժեքը

Երեք հարաբերությունների ընդհանուր արժեքը պատահական չէ։

> $$\\frac{a}{\\sin A} = 2R,$$
> որտեղ $R$-ը եռանկյան շուրջն արտագծած շրջանագծի շառավիղն է։

Ուրեմն սինուսների թեորեմն իրականում չորս հավասար մեծության մասին պնդում է։ Այստեղից $R = \\frac{a}{2\\sin A}$, ինչը տալիս է շառավիղն առանց կենտրոնը կառուցելու։

**Օրինակ 1.** Եռանկյունում $A = 45^\\circ$, $B = 60^\\circ$ և $a = 8$։ Գտնենք $b$-ն։ $\\frac{8}{\\sin 45^\\circ} = \\frac{b}{\\sin 60^\\circ}$-ից ստանում ենք
$$b = 8\\cdot\\frac{\\sqrt{3}/2}{\\sqrt{2}/2} = 8\\cdot\\frac{\\sqrt{3}}{\\sqrt{2}} = 4\\sqrt{6} \\approx 9{,}8.$$
Մեծ անկյան դիմաց մեծ կողմն է, ինչն օգտակար ստուգում է։

**Օրինակ 2.** Եռանկյունում $a = 10$, $A = 30^\\circ$։ Այդ դեպքում $2R = \\frac{10}{0{,}5} = 20$, ուստի $R = 10$։

**Օրինակ 3.** Եռանկյան կողմը $6$ է, հանդիպակաց անկյունը՝ $120^\\circ$։ Գտնենք արտագծած շրջանագծի շառավիղը։ $2R = \\frac{6}{\\sqrt{3}/2} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$, ուստի $R = 2\\sqrt{3}$։

## Երբ է աշխատում սինուսների թեորեմը

| Տրված է | Սինուսների թեորեմը բավարա՞ր է |
|---|---|
| երկու անկյուն և ցանկացած կողմ | այո, երրորդ անկյունը գալիս է գումարից, ապա երկու հարաբերություն |
| երկու կողմ և նրանցից մեկի հանդիպակաց անկյունը | այո, բայց պատասխանը կարող է երկիմաստ լինել |
| երկու կողմ և նրանց միջև անկյունը | ոչ, օգտագործեք կոսինուսների թեորեմը |
| երեք կողմ | ոչ, օգտագործեք կոսինուսների թեորեմը |

**Օրինակ 4.** Եռանկյունում $a = 7$, $b = 5$ և $B = 30^\\circ$։ Գտնենք $A$-ն։ $\\frac{7}{\\sin A} = \\frac{5}{0{,}5}$-ից ստանում ենք $\\sin A = 0{,}7$։ Այդ դեպքում $A \\approx 44^\\circ$ կամ $A \\approx 136^\\circ$, և երկուսն էլ տալիս են հնարավոր եռանկյուն, քանի որ $B = 30^\\circ$-ը բավական փոքր է։ Սա երկիմաստ դեպքն է։

**Օրինակ 5.** Եռանկյունում $A = 100^\\circ$, $B = 50^\\circ$, $c = 12$։ Այդ դեպքում $C = 30^\\circ$ և
$$a = \\frac{12\\sin 100^\\circ}{\\sin 30^\\circ} \\approx \\frac{12\\cdot 0{,}985}{0{,}5} \\approx 23{,}6.$$

**Օրինակ 6.** Եռանկյան անկյունները $1 : 2 : 3$ հարաբերությամբ են։ Գտնենք նրա կողմերի հարաբերությունը։ Անկյուններն են $30^\\circ$, $60^\\circ$, $90^\\circ$, իսկ կողմերը համեմատական են $\\sin 30^\\circ : \\sin 60^\\circ : \\sin 90^\\circ = \\frac{1}{2} : \\frac{\\sqrt{3}}{2} : 1 = 1 : \\sqrt{3} : 2$-ին։ Սա հավասարակողմ եռանկյան ծանոթ կեսն է։

### Վարժություններ

1. Եռանկյունում $A = 30^\\circ$, $B = 45^\\circ$, $a = 6$։ Գտեք $b$-ն։
2. Եռանկյունում $a = 9$, $A = 60^\\circ$։ Գտեք արտագծած շրջանագծի շառավիղը։
3. Եռանկյունում $A = 75^\\circ$, $B = 45^\\circ$, $c = 10$։ Գտեք $C$-ն, ապա $a$-ն՝ մեկ տասնորդական նշանով, օգտագործելով $\\sin 75^\\circ \\approx 0{,}966$։
4. $5$ շառավղով շրջանագծի լարը դիմանում է $30^\\circ$ ներգծյալ անկյան։ Գտեք լարը։
5. Եռանկյունում $b = 8$, $B = 120^\\circ$, $c = 5$։ Գտեք $\\sin C$-ն։
6. Եռանկյան անկյունները $2 : 3 : 4$ հարաբերությամբ են։ Ո՞ր կողմն է ամենաերկարը։
7. Կարո՞ղ է եռանկյունն ունենալ $a = 10$, $A = 30^\\circ$ և $b = 25$։
8. Գտեք $45^\\circ$, $45^\\circ$ և $90^\\circ$ անկյուններով եռանկյան կողմերի հարաբերությունը։

### Պատասխաններ

1. $b = \\frac{6\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{6\\cdot\\sqrt{2}/2}{0{,}5} = 6\\sqrt{2}$։
2. $2R = \\frac{9}{\\sqrt{3}/2} = 6\\sqrt{3}$, ուստի $R = 3\\sqrt{3}$։
3. $C = 60^\\circ$, իսկ $a = \\frac{10\\cdot 0{,}966}{\\sqrt{3}/2} \\approx 11{,}2$։
4. Լարն է $a = 2R\\sin 30^\\circ = 10\\cdot 0{,}5 = 5$։
5. $\\sin C = \\frac{5\\sin 120^\\circ}{8} = \\frac{5\\sqrt{3}}{16} \\approx 0{,}54$։
6. Անկյուններն են $40^\\circ$, $60^\\circ$, $80^\\circ$, ուստի $80^\\circ$-ի հանդիպակաց կողմն է ամենաերկարը։
7. Ոչ։ Դրա համար պետք կլիներ $\\sin B = \\frac{25\\cdot 0{,}5}{10} = 1{,}25 > 1$, ինչն անհնար է։
8. $\\sin 45^\\circ : \\sin 45^\\circ : \\sin 90^\\circ = 1 : 1 : \\sqrt{2}$։`,
        ru: `## Теорема

> В любом треугольнике стороны пропорциональны синусам противолежащих углов:
> $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}.$$

**Доказательство.** Запишем площадь треугольника тремя способами:
$$S = \\tfrac{1}{2}bc\\sin A = \\tfrac{1}{2}ac\\sin B = \\tfrac{1}{2}ab\\sin C.$$
Разделим каждую часть на $\\tfrac{1}{2}abc$:
$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c},$$
и взяв обратные величины, получаем теорему. Заметим, что три синуса положительны, поэтому деления на нуль не происходит.

## Общее значение

Общее значение трёх отношений не случайно.

> $$\\frac{a}{\\sin A} = 2R,$$
> где $R$ — радиус окружности, описанной около треугольника.

Значит, теорема синусов — это на самом деле утверждение о четырёх равных величинах. Отсюда $R = \\frac{a}{2\\sin A}$, что даёт радиус без построения центра.

**Пример 1.** В треугольнике $A = 45^\\circ$, $B = 60^\\circ$ и $a = 8$. Найдём $b$. Из $\\frac{8}{\\sin 45^\\circ} = \\frac{b}{\\sin 60^\\circ}$ получаем
$$b = 8\\cdot\\frac{\\sqrt{3}/2}{\\sqrt{2}/2} = 8\\cdot\\frac{\\sqrt{3}}{\\sqrt{2}} = 4\\sqrt{6} \\approx 9{,}8.$$
Против большего угла лежит большая сторона — полезная проверка.

**Пример 2.** В треугольнике $a = 10$, $A = 30^\\circ$. Тогда $2R = \\frac{10}{0{,}5} = 20$, поэтому $R = 10$.

**Пример 3.** Сторона треугольника равна $6$, противолежащий угол равен $120^\\circ$. Найдём радиус описанной окружности. $2R = \\frac{6}{\\sqrt{3}/2} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$, поэтому $R = 2\\sqrt{3}$.

## Когда работает теорема синусов

| Дано | Достаточно ли теоремы синусов |
|---|---|
| два угла и любая сторона | да, третий угол из суммы, затем два отношения |
| две стороны и угол против одной из них | да, но ответ может быть неоднозначным |
| две стороны и угол между ними | нет, нужна теорема косинусов |
| три стороны | нет, нужна теорема косинусов |

**Пример 4.** В треугольнике $a = 7$, $b = 5$ и $B = 30^\\circ$. Найдём $A$. Из $\\frac{7}{\\sin A} = \\frac{5}{0{,}5}$ получаем $\\sin A = 0{,}7$. Тогда $A \\approx 44^\\circ$ или $A \\approx 136^\\circ$, и оба дают существующий треугольник, так как угол $B = 30^\\circ$ достаточно мал. Это неоднозначный случай.

**Пример 5.** В треугольнике $A = 100^\\circ$, $B = 50^\\circ$, $c = 12$. Тогда $C = 30^\\circ$ и
$$a = \\frac{12\\sin 100^\\circ}{\\sin 30^\\circ} \\approx \\frac{12\\cdot 0{,}985}{0{,}5} \\approx 23{,}6.$$

**Пример 6.** Углы треугольника относятся как $1 : 2 : 3$. Найдём отношение его сторон. Углы равны $30^\\circ$, $60^\\circ$, $90^\\circ$, а стороны пропорциональны $\\sin 30^\\circ : \\sin 60^\\circ : \\sin 90^\\circ = \\frac{1}{2} : \\frac{\\sqrt{3}}{2} : 1 = 1 : \\sqrt{3} : 2$. Это знакомая половина равностороннего треугольника.

### Упражнения

1. В треугольнике $A = 30^\\circ$, $B = 45^\\circ$, $a = 6$. Найдите $b$.
2. В треугольнике $a = 9$, $A = 60^\\circ$. Найдите радиус описанной окружности.
3. В треугольнике $A = 75^\\circ$, $B = 45^\\circ$, $c = 10$. Найдите $C$, затем $a$ с одним знаком после запятой, используя $\\sin 75^\\circ \\approx 0{,}966$.
4. Хорда окружности радиуса $5$ опирается на вписанный угол $30^\\circ$. Найдите хорду.
5. В треугольнике $b = 8$, $B = 120^\\circ$, $c = 5$. Найдите $\\sin C$.
6. Углы треугольника относятся как $2 : 3 : 4$. Какая сторона самая длинная?
7. Может ли треугольник иметь $a = 10$, $A = 30^\\circ$ и $b = 25$?
8. Найдите отношение сторон треугольника с углами $45^\\circ$, $45^\\circ$ и $90^\\circ$.

### Ответы

1. $b = \\frac{6\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{6\\cdot\\sqrt{2}/2}{0{,}5} = 6\\sqrt{2}$.
2. $2R = \\frac{9}{\\sqrt{3}/2} = 6\\sqrt{3}$, поэтому $R = 3\\sqrt{3}$.
3. $C = 60^\\circ$, а $a = \\frac{10\\cdot 0{,}966}{\\sqrt{3}/2} \\approx 11{,}2$.
4. Хорда равна $a = 2R\\sin 30^\\circ = 10\\cdot 0{,}5 = 5$.
5. $\\sin C = \\frac{5\\sin 120^\\circ}{8} = \\frac{5\\sqrt{3}}{16} \\approx 0{,}54$.
6. Углы равны $40^\\circ$, $60^\\circ$, $80^\\circ$, поэтому самая длинная сторона лежит против $80^\\circ$.
7. Нет. Потребовалось бы $\\sin B = \\frac{25\\cdot 0{,}5}{10} = 1{,}25 > 1$, что невозможно.
8. $\\sin 45^\\circ : \\sin 45^\\circ : \\sin 90^\\circ = 1 : 1 : \\sqrt{2}$.`,
      },
      [
        q(t("The law of sines states that the sides of a triangle are", "Սինուսների թեորեմն ասում է, որ եռանկյան կողմերը", "Теорема синусов утверждает, что стороны треугольника"), [
          t("proportional to the sines of the opposite angles", "համեմատական են հանդիպակաց անկյունների սինուսներին", "пропорциональны синусам противолежащих углов"),
          t("equal to the sines of the opposite angles", "հավասար են հանդիպակաց անկյունների սինուսներին", "равны синусам противолежащих углов"),
          t("proportional to the opposite angles themselves", "համեմատական են հենց հանդիպակաց անկյուններին", "пропорциональны самим противолежащим углам"),
        ], 0),
        q(t("The common value of the three ratios in the law of sines equals", "Սինուսների թեորեմի երեք հարաբերությունների ընդհանուր արժեքը հավասար է", "Общее значение трёх отношений в теореме синусов равно"), [
          t("the radius of the circumscribed circle", "արտագծած շրջանագծի շառավղին", "радиусу описанной окружности"),
          t("twice the radius of the circumscribed circle", "արտագծած շրջանագծի շառավղի կրկնապատիկին", "двум радиусам описанной окружности"),
          t("the perimeter of the triangle", "եռանկյան պարագծին", "периметру треугольника"),
        ], 1),
        q(t("The proof of the law of sines given here is based on", "Այստեղ բերված սինուսների թեորեմի ապացույցը հիմնված է", "Приведённое здесь доказательство теоремы синусов основано на том, что"), [
          t("the Pythagorean theorem", "Պյութագորասի թեորեմի վրա", "теореме Пифагора"),
          t("the sum of the angles of a triangle", "եռանկյան անկյունների գումարի վրա", "сумме углов треугольника"),
          t("writing the area in three ways", "մակերեսն երեք եղանակով գրելու վրա", "площадь записывается тремя способами"),
        ], 2),
        q(t("The law of sines is enough when the given data are", "Սինուսների թեորեմը բավարար է, երբ տրված են", "Теоремы синусов достаточно, когда дано"), [
          t("two angles and any side", "երկու անկյուն և ցանկացած կողմ", "два угла и любая сторона"),
          t("two sides and the angle between them", "երկու կողմ և նրանց միջև անկյունը", "две стороны и угол между ними"),
          t("three sides", "երեք կողմ", "три стороны"),
        ], 0),
        q(t("If a = 10 and A = 30 degrees, the radius of the circumscribed circle equals", "Եթե a = 10 և A = 30 աստիճան, արտագծած շրջանագծի շառավիղը հավասար է", "Если a = 10 и A = 30 градусов, радиус описанной окружности равен"), [
          t("5", "5", "5"),
          t("10", "10", "10"),
          t("20", "20", "20"),
        ], 1),
        q(t("If the law of sines gives a sine greater than one, then", "Եթե սինուսների թեորեմը տալիս է մեկից մեծ սինուս, ապա", "Если теорема синусов даёт синус больше единицы, то"), [
          t("the angle is obtuse", "անկյունը բութ է", "угол тупой"),
          t("the triangle is right", "եռանկյունն ուղղանկյուն է", "треугольник прямоугольный"),
          t("no such triangle exists", "այդպիսի եռանկյուն գոյություն չունի", "такого треугольника не существует"),
        ], 2),
      ],
    ),
    lesson(
      "cosine-law",
      ["The law of cosines", "Կոսինուսների թեորեմը", "Теорема косинусов"],
      {
        en: ["State and prove the law of cosines", "Find the third side from two sides and the angle between them", "Find an angle from three sides and decide whether it is obtuse"],
        hy: ["Ձևակերպել և ապացուցել կոսինուսների թեորեմը", "Գտնել երրորդ կողմն ըստ երկու կողմի և նրանց միջև անկյան", "Գտնել անկյունն ըստ երեք կողմի և պարզել՝ բութ է, թե ոչ"],
        ru: ["Формулировать и доказывать теорему косинусов", "Находить третью сторону по двум сторонам и углу между ними", "Находить угол по трём сторонам и определять, тупой ли он"],
      },
      {
        en: `## The theorem

> The square of a side of a triangle equals the sum of the squares of the other two sides minus twice their product times the cosine of the angle between them:
> $$a^2 = b^2 + c^2 - 2bc\\cos A.$$

**Proof with vectors.** From $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$ we get
$$a^2 = \\left\\lvert\\overrightarrow{AC} - \\overrightarrow{AB}\\right\\rvert^2 = AC^2 + AB^2 - 2\\,\\overrightarrow{AC}\\cdot\\overrightarrow{AB} = b^2 + c^2 - 2bc\\cos A,$$
because the scalar product of two vectors equals the product of their lengths and the cosine of the angle between them. A proof with coordinates works as well: put $A$ at the origin and $B$ on the positive half of $Ox$.

## The Pythagorean theorem inside it

If $A = 90^\\circ$, then $\\cos A = 0$ and the formula becomes $a^2 = b^2 + c^2$. So the law of cosines is the Pythagorean theorem with a correction term for the angle.

| Angle $A$ | $\\cos A$ | $a^2$ compared with $b^2 + c^2$ |
|---|---|---|
| acute | positive | smaller |
| right | zero | equal |
| obtuse | negative | larger |

This gives a quick test: the largest angle of a triangle is obtuse exactly when the square of the longest side exceeds the sum of the squares of the other two.

**Example 1.** $b = 5$, $c = 8$, $A = 60^\\circ$. Then
$$a^2 = 25 + 64 - 2\\cdot 5\\cdot 8\\cdot 0{.}5 = 89 - 40 = 49,$$
so $a = 7$.

**Example 2.** $b = 3$, $c = 5$, $A = 120^\\circ$. Then $\\cos A = -0{.}5$ and
$$a^2 = 9 + 25 + 15 = 49, \\quad a = 7.$$
The minus in the formula and the minus in the cosine give a plus: an obtuse angle makes the opposite side longer.

## Finding an angle from three sides

Solving the formula for the cosine:

> $$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}.$$

**Example 3.** The sides are $7$, $8$, $13$. Find the largest angle, which lies opposite $13$:
$$\\cos A = \\frac{49 + 64 - 169}{2\\cdot 7\\cdot 8} = \\frac{-56}{112} = -0{.}5,$$
so $A = 120^\\circ$.

**Example 4.** Is the triangle with sides $6$, $7$, $9$ obtuse? We compare $81$ with $36 + 49 = 85$. Since $81 < 85$, the largest angle is acute, so the triangle is acute.

**Example 5.** The diagonals of a parallelogram with sides $4$ and $6$ and an angle of $60^\\circ$. The short diagonal is opposite the $60^\\circ$ angle:
$$d_1^2 = 16 + 36 - 2\\cdot 24\\cdot 0{.}5 = 28, \\quad d_1 = 2\\sqrt{7}.$$
The long one is opposite the $120^\\circ$ angle:
$$d_2^2 = 16 + 36 + 24 = 76, \\quad d_2 = 2\\sqrt{19}.$$

**Example 6.** Two roads leave a village at an angle of $45^\\circ$. One car drives $30$ km along the first, another $40$ km along the second. The distance between them is
$$\\sqrt{900 + 1600 - 2\\cdot 1200\\cdot\\frac{\\sqrt{2}}{2}} = \\sqrt{2500 - 1200\\sqrt{2}} \\approx \\sqrt{803} \\approx 28{.}3 \\text{ km}.$$

### Exercises

1. Find $a$ if $b = 4$, $c = 6$ and $A = 60^\\circ$.
2. Find $a$ if $b = 2$, $c = 3$ and $A = 120^\\circ$.
3. Find $\\cos A$ if $a = 9$, $b = 7$, $c = 8$.
4. Find the largest angle of the triangle with sides $5$, $6$, $\\sqrt{91}$.
5. Decide whether the triangle with sides $4$, $6$, $8$ is acute, right or obtuse.
6. Find the diagonals of a parallelogram with sides $5$ and $7$ and an angle of $120^\\circ$.
7. Two sides of a triangle are $10$ and $14$, and the angle between them is $90^\\circ$. Find the third side.
8. The sides of a triangle are $7$, $8$, $9$. Find the cosine of the angle opposite the side $8$.

### Answers

1. $a^2 = 16 + 36 - 24 = 28$, so $a = 2\\sqrt{7}$.
2. $a^2 = 4 + 9 + 6 = 19$, so $a = \\sqrt{19}$.
3. $\\cos A = \\frac{49 + 64 - 81}{112} = \\frac{32}{112} = \\frac{2}{7}$.
4. The side $\\sqrt{91}$ is the longest, and $\\cos = \\frac{25 + 36 - 91}{60} = -0{.}5$, so the angle is $120^\\circ$.
5. $64 > 16 + 36 = 52$, so the triangle is obtuse.
6. $d_1^2 = 25 + 49 - 2\\cdot 35\\cdot(-0{.}5) = 109$ and $d_2^2 = 25 + 49 - 35 = 39$, so the diagonals are $\\sqrt{109}$ and $\\sqrt{39}$.
7. $\\sqrt{100 + 196} = \\sqrt{296} = 2\\sqrt{74}$.
8. $\\cos B = \\frac{49 + 81 - 64}{2\\cdot 63} = \\frac{66}{126} = \\frac{11}{21}$.`,
        hy: `## Թեորեմը

> Եռանկյան կողմի քառակուսին հավասար է մյուս երկու կողմերի քառակուսիների գումարին հանած նրանց արտադրյալի կրկնապատիկը բազմապատկած նրանց միջև անկյան կոսինուսով՝
> $$a^2 = b^2 + c^2 - 2bc\\cos A.$$

**Ապացույց վեկտորներով։** $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$-ից ստանում ենք
$$a^2 = \\left\\lvert\\overrightarrow{AC} - \\overrightarrow{AB}\\right\\rvert^2 = AC^2 + AB^2 - 2\\,\\overrightarrow{AC}\\cdot\\overrightarrow{AB} = b^2 + c^2 - 2bc\\cos A,$$
քանի որ երկու վեկտորի սկալյար արտադրյալը հավասար է նրանց երկարությունների և նրանց միջև անկյան կոսինուսի արտադրյալին։ Կոորդինատներով ապացույցն էլ աշխատում է. $A$-ն դնում ենք սկզբնակետում, իսկ $B$-ն՝ $Ox$-ի դրական կեսի վրա։

## Պյութագորասի թեորեմը նրա ներսում

Եթե $A = 90^\\circ$, ապա $\\cos A = 0$ և բանաձևը դառնում է $a^2 = b^2 + c^2$։ Ուրեմն կոսինուսների թեորեմը Պյութագորասի թեորեմն է՝ անկյան համար ուղղող անդամով։

| $A$ անկյունը | $\\cos A$ | $a^2$-ը $b^2 + c^2$-ի համեմատ |
|---|---|---|
| սուր | դրական | փոքր |
| ուղիղ | զրո | հավասար |
| բութ | բացասական | մեծ |

Սա տալիս է արագ ստուգում. եռանկյան ամենամեծ անկյունը բութ է հենց այն դեպքում, երբ ամենաերկար կողմի քառակուսին գերազանցում է մյուս երկուսի քառակուսիների գումարը։

**Օրինակ 1.** $b = 5$, $c = 8$, $A = 60^\\circ$։ Այդ դեպքում
$$a^2 = 25 + 64 - 2\\cdot 5\\cdot 8\\cdot 0{,}5 = 89 - 40 = 49,$$
ուստի $a = 7$։

**Օրինակ 2.** $b = 3$, $c = 5$, $A = 120^\\circ$։ Այդ դեպքում $\\cos A = -0{,}5$ և
$$a^2 = 9 + 25 + 15 = 49, \\quad a = 7.$$
Բանաձևի մինուսը և կոսինուսի մինուսը տալիս են պլյուս. բութ անկյունը հանդիպակաց կողմը դարձնում է ավելի երկար։

## Անկյան գտնելն երեք կողմով

Բանաձևը լուծելով կոսինուսի նկատմամբ՝

> $$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}.$$

**Օրինակ 3.** Կողմերն են $7$, $8$, $13$։ Գտնենք ամենամեծ անկյունը, որը գտնվում է $13$-ի դիմաց՝
$$\\cos A = \\frac{49 + 64 - 169}{2\\cdot 7\\cdot 8} = \\frac{-56}{112} = -0{,}5,$$
ուստի $A = 120^\\circ$։

**Օրինակ 4.** Բութանկյո՞ւն է $6$, $7$, $9$ կողմերով եռանկյունը։ Համեմատենք $81$-ը $36 + 49 = 85$-ի հետ։ Քանի որ $81 < 85$, ամենամեծ անկյունը սուր է, ուստի եռանկյունը սրանկյուն է։

**Օրինակ 5.** $4$ և $6$ կողմերով և $60^\\circ$ անկյունով զուգահեռագծի անկյունագծերը։ Կարճ անկյունագիծը $60^\\circ$ անկյան դիմաց է՝
$$d_1^2 = 16 + 36 - 2\\cdot 24\\cdot 0{,}5 = 28, \\quad d_1 = 2\\sqrt{7}.$$
Երկարը $120^\\circ$ անկյան դիմաց է՝
$$d_2^2 = 16 + 36 + 24 = 76, \\quad d_2 = 2\\sqrt{19}.$$

**Օրինակ 6.** Գյուղից դուրս են գալիս երկու ճանապարհ $45^\\circ$ անկյան տակ։ Մեկ մեքենան առաջինով անցնում է $30$ կմ, մյուսն երկրորդով՝ $40$ կմ։ Նրանց հեռավորությունն է
$$\\sqrt{900 + 1600 - 2\\cdot 1200\\cdot\\frac{\\sqrt{2}}{2}} = \\sqrt{2500 - 1200\\sqrt{2}} \\approx \\sqrt{803} \\approx 28{,}3$$
կմ։

### Վարժություններ

1. Գտեք $a$-ն, եթե $b = 4$, $c = 6$ և $A = 60^\\circ$։
2. Գտեք $a$-ն, եթե $b = 2$, $c = 3$ և $A = 120^\\circ$։
3. Գտեք $\\cos A$-ն, եթե $a = 9$, $b = 7$, $c = 8$։
4. Գտեք $5$, $6$, $\\sqrt{91}$ կողմերով եռանկյան ամենամեծ անկյունը։
5. Պարզեք՝ $4$, $6$, $8$ կողմերով եռանկյունը սրանկյուն է, ուղղանկյուն, թե բութանկյուն։
6. Գտեք $5$ և $7$ կողմերով և $120^\\circ$ անկյունով զուգահեռագծի անկյունագծերը։
7. Եռանկյան երկու կողմը $10$ և $14$ են, նրանց միջև անկյունը՝ $90^\\circ$։ Գտեք երրորդ կողմը։
8. Եռանկյան կողմերն են $7$, $8$, $9$։ Գտեք $8$ կողմի հանդիպակաց անկյան կոսինուսը։

### Պատասխաններ

1. $a^2 = 16 + 36 - 24 = 28$, ուստի $a = 2\\sqrt{7}$։
2. $a^2 = 4 + 9 + 6 = 19$, ուստի $a = \\sqrt{19}$։
3. $\\cos A = \\frac{49 + 64 - 81}{112} = \\frac{32}{112} = \\frac{2}{7}$։
4. $\\sqrt{91}$ կողմն ամենաերկարն է, և $\\cos = \\frac{25 + 36 - 91}{60} = -0{,}5$, ուստի անկյունը $120^\\circ$ է։
5. $64 > 16 + 36 = 52$, ուստի եռանկյունը բութանկյուն է։
6. $d_1^2 = 25 + 49 - 2\\cdot 35\\cdot(-0{,}5) = 109$ և $d_2^2 = 25 + 49 - 35 = 39$, ուստի անկյունագծերն են $\\sqrt{109}$ և $\\sqrt{39}$։
7. $\\sqrt{100 + 196} = \\sqrt{296} = 2\\sqrt{74}$։
8. $\\cos B = \\frac{49 + 81 - 64}{2\\cdot 63} = \\frac{66}{126} = \\frac{11}{21}$։`,
        ru: `## Теорема

> Квадрат стороны треугольника равен сумме квадратов двух других сторон минус удвоенное произведение этих сторон на косинус угла между ними:
> $$a^2 = b^2 + c^2 - 2bc\\cos A.$$

**Доказательство с векторами.** Из $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$ получаем
$$a^2 = \\left\\lvert\\overrightarrow{AC} - \\overrightarrow{AB}\\right\\rvert^2 = AC^2 + AB^2 - 2\\,\\overrightarrow{AC}\\cdot\\overrightarrow{AB} = b^2 + c^2 - 2bc\\cos A,$$
потому что скалярное произведение двух векторов равно произведению их длин на косинус угла между ними. Доказательство в координатах тоже работает: поместим $A$ в начало координат, а $B$ на положительную половину оси $Ox$.

## Теорема Пифагора внутри неё

Если $A = 90^\\circ$, то $\\cos A = 0$ и формула превращается в $a^2 = b^2 + c^2$. Значит, теорема косинусов — это теорема Пифагора с поправкой на угол.

| Угол $A$ | $\\cos A$ | $a^2$ по сравнению с $b^2 + c^2$ |
|---|---|---|
| острый | положителен | меньше |
| прямой | нуль | равно |
| тупой | отрицателен | больше |

Это даёт быструю проверку: наибольший угол треугольника тупой в точности тогда, когда квадрат самой длинной стороны больше суммы квадратов двух других.

**Пример 1.** $b = 5$, $c = 8$, $A = 60^\\circ$. Тогда
$$a^2 = 25 + 64 - 2\\cdot 5\\cdot 8\\cdot 0{,}5 = 89 - 40 = 49,$$
поэтому $a = 7$.

**Пример 2.** $b = 3$, $c = 5$, $A = 120^\\circ$. Тогда $\\cos A = -0{,}5$ и
$$a^2 = 9 + 25 + 15 = 49, \\quad a = 7.$$
Минус в формуле и минус в косинусе дают плюс: тупой угол делает противолежащую сторону длиннее.

## Нахождение угла по трём сторонам

Решая формулу относительно косинуса:

> $$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}.$$

**Пример 3.** Стороны равны $7$, $8$, $13$. Найдём наибольший угол, лежащий против $13$:
$$\\cos A = \\frac{49 + 64 - 169}{2\\cdot 7\\cdot 8} = \\frac{-56}{112} = -0{,}5,$$
поэтому $A = 120^\\circ$.

**Пример 4.** Тупоугольный ли треугольник со сторонами $6$, $7$, $9$? Сравним $81$ с $36 + 49 = 85$. Так как $81 < 85$, наибольший угол острый, поэтому треугольник остроугольный.

**Пример 5.** Диагонали параллелограмма со сторонами $4$ и $6$ и углом $60^\\circ$. Короткая диагональ лежит против угла $60^\\circ$:
$$d_1^2 = 16 + 36 - 2\\cdot 24\\cdot 0{,}5 = 28, \\quad d_1 = 2\\sqrt{7}.$$
Длинная лежит против угла $120^\\circ$:
$$d_2^2 = 16 + 36 + 24 = 76, \\quad d_2 = 2\\sqrt{19}.$$

**Пример 6.** Из села выходят две дороги под углом $45^\\circ$. Одна машина проезжает по первой $30$ км, другая по второй $40$ км. Расстояние между ними равно
$$\\sqrt{900 + 1600 - 2\\cdot 1200\\cdot\\frac{\\sqrt{2}}{2}} = \\sqrt{2500 - 1200\\sqrt{2}} \\approx \\sqrt{803} \\approx 28{,}3$$
км.

### Упражнения

1. Найдите $a$, если $b = 4$, $c = 6$ и $A = 60^\\circ$.
2. Найдите $a$, если $b = 2$, $c = 3$ и $A = 120^\\circ$.
3. Найдите $\\cos A$, если $a = 9$, $b = 7$, $c = 8$.
4. Найдите наибольший угол треугольника со сторонами $5$, $6$, $\\sqrt{91}$.
5. Определите, остроугольный, прямоугольный или тупоугольный треугольник со сторонами $4$, $6$, $8$.
6. Найдите диагонали параллелограмма со сторонами $5$ и $7$ и углом $120^\\circ$.
7. Две стороны треугольника равны $10$ и $14$, угол между ними $90^\\circ$. Найдите третью сторону.
8. Стороны треугольника равны $7$, $8$, $9$. Найдите косинус угла, противолежащего стороне $8$.

### Ответы

1. $a^2 = 16 + 36 - 24 = 28$, поэтому $a = 2\\sqrt{7}$.
2. $a^2 = 4 + 9 + 6 = 19$, поэтому $a = \\sqrt{19}$.
3. $\\cos A = \\frac{49 + 64 - 81}{112} = \\frac{32}{112} = \\frac{2}{7}$.
4. Сторона $\\sqrt{91}$ самая длинная, и $\\cos = \\frac{25 + 36 - 91}{60} = -0{,}5$, поэтому угол равен $120^\\circ$.
5. $64 > 16 + 36 = 52$, поэтому треугольник тупоугольный.
6. $d_1^2 = 25 + 49 - 2\\cdot 35\\cdot(-0{,}5) = 109$ и $d_2^2 = 25 + 49 - 35 = 39$, поэтому диагонали равны $\\sqrt{109}$ и $\\sqrt{39}$.
7. $\\sqrt{100 + 196} = \\sqrt{296} = 2\\sqrt{74}$.
8. $\\cos B = \\frac{49 + 81 - 64}{2\\cdot 63} = \\frac{66}{126} = \\frac{11}{21}$.`,
      },
      [
        q(t("The law of cosines says that a² equals", "Կոսինուսների թեորեմն ասում է, որ a² հավասար է", "Теорема косинусов говорит, что a² равно"), [
          t("b² + c² - 2bc cos A", "b² + c² - 2bc cos A", "b² + c² - 2bc cos A"),
          t("b² + c² + 2bc cos A", "b² + c² + 2bc cos A", "b² + c² + 2bc cos A"),
          t("b² - c² - 2bc cos A", "b² - c² - 2bc cos A", "b² - c² - 2bc cos A"),
        ], 0),
        q(t("When the angle A is right, the law of cosines turns into", "Երբ A անկյունն ուղիղ է, կոսինուսների թեորեմը դառնում է", "Когда угол A прямой, теорема косинусов превращается в"), [
          t("the law of sines", "սինուսների թեորեմ", "теорему синусов"),
          t("the Pythagorean theorem", "Պյութագորասի թեորեմ", "теорему Пифагора"),
          t("the triangle inequality", "եռանկյան անհավասարություն", "неравенство треугольника"),
        ], 1),
        q(t("The largest angle of a triangle is obtuse exactly when", "Եռանկյան ամենամեծ անկյունը բութ է հենց այն դեպքում, երբ", "Наибольший угол треугольника тупой в точности тогда, когда"), [
          t("the longest side is twice the shortest", "ամենաերկար կողմն ամենակարճի կրկնապատիկն է", "самая длинная сторона вдвое больше самой короткой"),
          t("all three sides are different", "բոլոր երեք կողմերը տարբեր են", "все три стороны различны"),
          t("the square of the longest side exceeds the sum of the squares of the other two", "ամենաերկար կողմի քառակուսին գերազանցում է մյուս երկուսի քառակուսիների գումարը", "квадрат самой длинной стороны больше суммы квадратов двух других"),
        ], 2),
        q(t("With b = 5, c = 8 and A = 60 degrees the side a equals", "b = 5, c = 8 և A = 60 աստիճան դեպքում a կողմը հավասար է", "При b = 5, c = 8 и A = 60 градусов сторона a равна"), [
          t("7", "7", "7"),
          t("9", "9", "9"),
          t("13", "13", "13"),
        ], 0),
        q(t("The law of cosines is the right tool when the given data are", "Կոսինուսների թեորեմը ճիշտ գործիքն է, երբ տրված են", "Теорема косинусов — подходящий инструмент, когда дано"), [
          t("two angles and a side", "երկու անկյուն և կողմ", "два угла и сторона"),
          t("two sides and the angle between them", "երկու կողմ և նրանց միջև անկյունը", "две стороны и угол между ними"),
          t("one side and the circumscribed radius", "մեկ կողմ և արտագծած շրջանագծի շառավիղը", "одна сторона и радиус описанной окружности"),
        ], 1),
        q(t("In a triangle with sides 7, 8 and 13 the angle opposite the side 13 equals", "7, 8 և 13 կողմերով եռանկյունում 13 կողմի հանդիպակաց անկյունը հավասար է", "В треугольнике со сторонами 7, 8 и 13 угол против стороны 13 равен"), [
          t("60 degrees", "60 աստիճան", "60 градусам"),
          t("90 degrees", "90 աստիճան", "90 градусам"),
          t("120 degrees", "120 աստիճան", "120 градусам"),
        ], 2),
      ],
    ),
    lesson(
      "solving-triangles-cases",
      ["Solving triangles", "Եռանկյունների լուծումը", "Решение треугольников"],
      {
        en: ["Know the three basic problems of solving a triangle", "Choose the law of sines or the law of cosines for each case", "Carry a solution through to all six elements"],
        hy: ["Իմանալ եռանկյան լուծման երեք հիմնական խնդիրները", "Ամեն դեպքի համար ընտրել սինուսների կամ կոսինուսների թեորեմը", "Լուծումը հասցնել բոլոր վեց տարրերին"],
        ru: ["Знать три основные задачи решения треугольника", "Выбирать теорему синусов или косинусов для каждого случая", "Доводить решение до всех шести элементов"],
      },
      {
        en: `## What solving a triangle means

A triangle has six elements: three sides and three angles. **Solving a triangle** means finding all six from three of them that determine the triangle. Three cases cover the school course.

| Case | Given | Plan |
|---|---|---|
| 1 | two sides and the angle between them | law of cosines for the third side, then law of cosines or sines for an angle, then the angle sum |
| 2 | a side and two angles | the angle sum for the third angle, then the law of sines twice |
| 3 | three sides | law of cosines twice, then the angle sum |

Three angles do not determine a triangle: all similar triangles have the same angles.

## Case 1: two sides and the angle between them

**Example 1.** $b = 5$, $c = 7$, $A = 60^\\circ$.
$$a^2 = 25 + 49 - 2\\cdot 35\\cdot 0{.}5 = 39, \\quad a = \\sqrt{39} \\approx 6{.}24.$$
Now find the angle $B$. Use the law of cosines, not the law of sines, to avoid the ambiguity:
$$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{39 + 49 - 25}{2\\cdot 6{.}24\\cdot 7} \\approx \\frac{63}{87{.}4} \\approx 0{.}721,$$
so $B \\approx 44^\\circ$ and $C \\approx 76^\\circ$. The check is $A + B + C = 180^\\circ$.

## Case 2: a side and two angles

**Example 2.** $a = 12$, $A = 40^\\circ$, $B = 65^\\circ$. Then $C = 75^\\circ$ and
$$b = \\frac{12\\sin 65^\\circ}{\\sin 40^\\circ} \\approx \\frac{12\\cdot 0{.}906}{0{.}643} \\approx 16{.}9, \\qquad c = \\frac{12\\sin 75^\\circ}{\\sin 40^\\circ} \\approx 18{.}0.$$
If the given side is not between the two given angles, nothing changes: find the third angle first and the law of sines still applies.

## Case 3: three sides

**Example 3.** $a = 6$, $b = 7$, $c = 9$. Start with the largest angle, opposite $9$:
$$\\cos C = \\frac{36 + 49 - 81}{84} = \\frac{4}{84} \\approx 0{.}048, \\quad C \\approx 87^\\circ.$$
Then
$$\\cos A = \\frac{49 + 81 - 36}{126} = \\frac{94}{126} \\approx 0{.}746, \\quad A \\approx 42^\\circ,$$
and $B \\approx 51^\\circ$. Finding the largest angle first is wise: it is the only one that can be obtuse, and the law of sines cannot tell an obtuse angle from its acute partner.

**Example 4.** Can a triangle have sides $2$, $3$, $7$? No, because $2 + 3 < 7$. The law of cosines would give $\\cos A = \\frac{4 + 9 - 49}{12} = -3$, outside the range from $-1$ to $1$, which is the algebraic sign of the same failure.

## A practical problem

**Example 5.** To measure the width of a river a surveyor marks two points $A$ and $B$ on one bank with $AB = 60$ m and measures the angles to a tree $C$ on the other bank: $A = 70^\\circ$ and $B = 55^\\circ$. Then $C = 55^\\circ$, so the triangle is isosceles with $AC = AB = 60$ m. The distance from $B$ to the tree is
$$BC = \\frac{60\\sin 70^\\circ}{\\sin 55^\\circ} \\approx \\frac{60\\cdot 0{.}940}{0{.}819} \\approx 68{.}8\\text{ m}.$$
The width of the river is the height from $C$ to $AB$, which equals $AC\\sin 70^\\circ \\approx 56{.}4$ m.

**Example 6.** A triangle has $a = 8$, $b = 10$ and $S = 20$. Then $\\sin C = \\frac{2\\cdot 20}{80} = 0{.}5$, so $C = 30^\\circ$ or $150^\\circ$, and the third side is smaller in the first case and larger in the second. Both triangles exist, so the data do not determine one triangle.

### Exercises

1. Which theorem do you use first when two sides and the angle between them are given?
2. Solve the triangle with $b = 4$, $c = 7$, $A = 60^\\circ$: find $a$.
3. In a triangle $a = 10$, $A = 30^\\circ$, $B = 45^\\circ$. Find $C$ and $b$.
4. In a triangle $a = 5$, $b = 6$, $c = 7$. Find $\\cos C$.
5. Why is it better to find the largest angle first in case 3?
6. Can a triangle have sides $4$, $5$, $10$?
7. In a triangle $A = 30^\\circ$, $C = 105^\\circ$, $b = 8$. Find $B$ and then $a$.
8. Two sides of a triangle are $9$ and $12$ and the angle between them is $120^\\circ$. Find the third side.

### Answers

1. The law of cosines.
2. $a^2 = 16 + 49 - 28 = 37$, so $a = \\sqrt{37}$.
3. $C = 105^\\circ$, and $b = \\frac{10\\sin 45^\\circ}{\\sin 30^\\circ} = 10\\sqrt{2}$.
4. $\\cos C = \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = 0{.}2$.
5. Only the largest angle can be obtuse, and the cosine distinguishes an obtuse angle from an acute one by its sign.
6. No, because $4 + 5 < 10$.
7. $B = 45^\\circ$, and $a = \\frac{8\\sin 30^\\circ}{\\sin 45^\\circ} = \\frac{8\\cdot 0{.}5}{\\sqrt{2}/2} = 4\\sqrt{2}$.
8. $81 + 144 + 108 = 333$, so the third side is $\\sqrt{333} = 3\\sqrt{37}$.`,
        hy: `## Ինչ է նշանակում լուծել եռանկյունը

Եռանկյունն ունի վեց տարր՝ երեք կողմ և երեք անկյուն։ **Եռանկյունը լուծել** նշանակում է գտնել բոլոր վեցը նրանցից երեքով, որոնք որոշում են եռանկյունը։ Երեք դեպք ծածկում է դպրոցական դասընթացը։

| Դեպք | Տրված է | Ծրագիրը |
|---|---|---|
| 1 | երկու կողմ և նրանց միջև անկյունը | կոսինուսների թեորեմ՝ երրորդ կողմի համար, ապա կոսինուսների կամ սինուսների թեորեմ՝ անկյան համար, ապա անկյունների գումարը |
| 2 | կողմ և երկու անկյուն | անկյունների գումարը՝ երրորդ անկյան համար, ապա սինուսների թեորեմն երկու անգամ |
| 3 | երեք կողմ | կոսինուսների թեորեմն երկու անգամ, ապա անկյունների գումարը |

Երեք անկյունը չի որոշում եռանկյունը. բոլոր նման եռանկյուններն ունեն նույն անկյունները։

## Դեպք 1. երկու կողմ և նրանց միջև անկյունը

**Օրինակ 1.** $b = 5$, $c = 7$, $A = 60^\\circ$։
$$a^2 = 25 + 49 - 2\\cdot 35\\cdot 0{,}5 = 39, \\quad a = \\sqrt{39} \\approx 6{,}24.$$
Այժմ գտնենք $B$ անկյունը։ Օգտագործենք կոսինուսների, ոչ թե սինուսների թեորեմը՝ երկիմաստությունից խուսափելու համար՝
$$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{39 + 49 - 25}{2\\cdot 6{,}24\\cdot 7} \\approx \\frac{63}{87{,}4} \\approx 0{,}721,$$
ուստի $B \\approx 44^\\circ$ և $C \\approx 76^\\circ$։ Ստուգումն է $A + B + C = 180^\\circ$։

## Դեպք 2. կողմ և երկու անկյուն

**Օրինակ 2.** $a = 12$, $A = 40^\\circ$, $B = 65^\\circ$։ Այդ դեպքում $C = 75^\\circ$ և
$$b = \\frac{12\\sin 65^\\circ}{\\sin 40^\\circ} \\approx \\frac{12\\cdot 0{,}906}{0{,}643} \\approx 16{,}9, \\qquad c = \\frac{12\\sin 75^\\circ}{\\sin 40^\\circ} \\approx 18{,}0.$$
Եթե տրված կողմն երկու տրված անկյան միջև չէ, ոչինչ չի փոխվում. սկզբում գտնում ենք երրորդ անկյունը, և սինուսների թեորեմը դեռ կիրառելի է։

## Դեպք 3. երեք կողմ

**Օրինակ 3.** $a = 6$, $b = 7$, $c = 9$։ Սկսենք ամենամեծ անկյունից, որը $9$-ի դիմաց է՝
$$\\cos C = \\frac{36 + 49 - 81}{84} = \\frac{4}{84} \\approx 0{,}048, \\quad C \\approx 87^\\circ.$$
Ապա
$$\\cos A = \\frac{49 + 81 - 36}{126} = \\frac{94}{126} \\approx 0{,}746, \\quad A \\approx 42^\\circ,$$
և $B \\approx 51^\\circ$։ Ամենամեծ անկյունը սկզբում գտնելը խելացի է. միայն նա կարող է բութ լինել, իսկ սինուսների թեորեմը չի կարող բութ անկյունը տարբերել նրա սուր զույգից։

**Օրինակ 4.** Կարո՞ղ է եռանկյունն ունենալ $2$, $3$, $7$ կողմեր։ Ոչ, քանի որ $2 + 3 < 7$։ Կոսինուսների թեորեմը կտար $\\cos A = \\frac{4 + 9 - 49}{12} = -3$՝ $-1$-ից $1$ միջակայքից դուրս, ինչը նույն անհնարինության հանրահաշվական նշանն է։

## Գործնական խնդիր

**Օրինակ 5.** Գետի լայնությունը չափելու համար չափագրողը մի ափին նշում է $A$ և $B$ կետերը $AB = 60$ մ, և չափում է անկյունները մյուս ափի $C$ ծառի նկատմամբ՝ $A = 70^\\circ$ և $B = 55^\\circ$։ Այդ դեպքում $C = 55^\\circ$, ուստի եռանկյունը հավասարասրուն է $AC = AB = 60$ մ։ $B$-ից ծառի հեռավորությունն է
$$BC = \\frac{60\\sin 70^\\circ}{\\sin 55^\\circ} \\approx \\frac{60\\cdot 0{,}940}{0{,}819} \\approx 68{,}8$$
մ։ Գետի լայնությունը $C$-ից $AB$-ին տարված բարձրությունն է, որը հավասար է $AC\\sin 70^\\circ \\approx 56{,}4$ մ։

**Օրինակ 6.** Եռանկյունն ունի $a = 8$, $b = 10$ և $S = 20$։ Այդ դեպքում $\\sin C = \\frac{2\\cdot 20}{80} = 0{,}5$, ուստի $C = 30^\\circ$ կամ $150^\\circ$, և երրորդ կողմն առաջին դեպքում փոքր է, երկրորդում՝ մեծ։ Երկու եռանկյունն էլ գոյություն ունեն, ուստի տրված տվյալները մեկ եռանկյուն չեն որոշում։

### Վարժություններ

1. Ո՞ր թեորեմն եք օգտագործում սկզբում, երբ տրված են երկու կողմ և նրանց միջև անկյունը։
2. Լուծեք եռանկյունը, որտեղ $b = 4$, $c = 7$, $A = 60^\\circ$՝ գտեք $a$-ն։
3. Եռանկյունում $a = 10$, $A = 30^\\circ$, $B = 45^\\circ$։ Գտեք $C$-ն և $b$-ն։
4. Եռանկյունում $a = 5$, $b = 6$, $c = 7$։ Գտեք $\\cos C$-ն։
5. Ինչո՞ւ է ավելի լավ երրորդ դեպքում սկզբում գտնել ամենամեծ անկյունը։
6. Կարո՞ղ է եռանկյունն ունենալ $4$, $5$, $10$ կողմեր։
7. Եռանկյունում $A = 30^\\circ$, $C = 105^\\circ$, $b = 8$։ Գտեք $B$-ն, ապա $a$-ն։
8. Եռանկյան երկու կողմը $9$ և $12$ են, նրանց միջև անկյունը՝ $120^\\circ$։ Գտեք երրորդ կողմը։

### Պատասխաններ

1. Կոսինուսների թեորեմը։
2. $a^2 = 16 + 49 - 28 = 37$, ուստի $a = \\sqrt{37}$։
3. $C = 105^\\circ$, իսկ $b = \\frac{10\\sin 45^\\circ}{\\sin 30^\\circ} = 10\\sqrt{2}$։
4. $\\cos C = \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = 0{,}2$։
5. Միայն ամենամեծ անկյունը կարող է բութ լինել, իսկ կոսինուսը բութ անկյունը սուրից տարբերում է իր նշանով։
6. Ոչ, քանի որ $4 + 5 < 10$։
7. $B = 45^\\circ$, իսկ $a = \\frac{8\\sin 30^\\circ}{\\sin 45^\\circ} = \\frac{8\\cdot 0{,}5}{\\sqrt{2}/2} = 4\\sqrt{2}$։
8. $81 + 144 + 108 = 333$, ուստի երրորդ կողմն է $\\sqrt{333} = 3\\sqrt{37}$։`,
        ru: `## Что значит решить треугольник

У треугольника шесть элементов: три стороны и три угла. **Решить треугольник** — значит найти все шесть по трём из них, которые определяют треугольник. Три случая покрывают школьный курс.

| Случай | Дано | План |
|---|---|---|
| 1 | две стороны и угол между ними | теорема косинусов для третьей стороны, затем теорема косинусов или синусов для угла, затем сумма углов |
| 2 | сторона и два угла | сумма углов для третьего угла, затем теорема синусов дважды |
| 3 | три стороны | теорема косинусов дважды, затем сумма углов |

Три угла не определяют треугольник: у всех подобных треугольников углы одинаковы.

## Случай 1: две стороны и угол между ними

**Пример 1.** $b = 5$, $c = 7$, $A = 60^\\circ$.
$$a^2 = 25 + 49 - 2\\cdot 35\\cdot 0{,}5 = 39, \\quad a = \\sqrt{39} \\approx 6{,}24.$$
Теперь найдём угол $B$. Используем теорему косинусов, а не синусов, чтобы избежать неоднозначности:
$$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{39 + 49 - 25}{2\\cdot 6{,}24\\cdot 7} \\approx \\frac{63}{87{,}4} \\approx 0{,}721,$$
поэтому $B \\approx 44^\\circ$ и $C \\approx 76^\\circ$. Проверка: $A + B + C = 180^\\circ$.

## Случай 2: сторона и два угла

**Пример 2.** $a = 12$, $A = 40^\\circ$, $B = 65^\\circ$. Тогда $C = 75^\\circ$ и
$$b = \\frac{12\\sin 65^\\circ}{\\sin 40^\\circ} \\approx \\frac{12\\cdot 0{,}906}{0{,}643} \\approx 16{,}9, \\qquad c = \\frac{12\\sin 75^\\circ}{\\sin 40^\\circ} \\approx 18{,}0.$$
Если данная сторона не лежит между двумя данными углами, ничего не меняется: сначала находим третий угол, и теорема синусов по-прежнему работает.

## Случай 3: три стороны

**Пример 3.** $a = 6$, $b = 7$, $c = 9$. Начнём с наибольшего угла, лежащего против $9$:
$$\\cos C = \\frac{36 + 49 - 81}{84} = \\frac{4}{84} \\approx 0{,}048, \\quad C \\approx 87^\\circ.$$
Затем
$$\\cos A = \\frac{49 + 81 - 36}{126} = \\frac{94}{126} \\approx 0{,}746, \\quad A \\approx 42^\\circ,$$
и $B \\approx 51^\\circ$. Находить наибольший угол первым разумно: только он может быть тупым, а теорема синусов не отличает тупой угол от его острого напарника.

**Пример 4.** Может ли треугольник иметь стороны $2$, $3$, $7$? Нет, потому что $2 + 3 < 7$. Теорема косинусов дала бы $\\cos A = \\frac{4 + 9 - 49}{12} = -3$ — вне промежутка от $-1$ до $1$, и это алгебраический признак той же невозможности.

## Практическая задача

**Пример 5.** Чтобы измерить ширину реки, геодезист отмечает на одном берегу точки $A$ и $B$ с $AB = 60$ м и измеряет углы на дерево $C$ на другом берегу: $A = 70^\\circ$ и $B = 55^\\circ$. Тогда $C = 55^\\circ$, поэтому треугольник равнобедренный с $AC = AB = 60$ м. Расстояние от $B$ до дерева равно
$$BC = \\frac{60\\sin 70^\\circ}{\\sin 55^\\circ} \\approx \\frac{60\\cdot 0{,}940}{0{,}819} \\approx 68{,}8$$
м. Ширина реки — это высота из $C$ к $AB$, равная $AC\\sin 70^\\circ \\approx 56{,}4$ м.

**Пример 6.** В треугольнике $a = 8$, $b = 10$ и $S = 20$. Тогда $\\sin C = \\frac{2\\cdot 20}{80} = 0{,}5$, поэтому $C = 30^\\circ$ или $150^\\circ$, и третья сторона в первом случае меньше, во втором больше. Оба треугольника существуют, поэтому данные не определяют один треугольник.

### Упражнения

1. Какую теорему применяют первой, когда даны две стороны и угол между ними?
2. Решите треугольник с $b = 4$, $c = 7$, $A = 60^\\circ$: найдите $a$.
3. В треугольнике $a = 10$, $A = 30^\\circ$, $B = 45^\\circ$. Найдите $C$ и $b$.
4. В треугольнике $a = 5$, $b = 6$, $c = 7$. Найдите $\\cos C$.
5. Почему в третьем случае лучше сначала найти наибольший угол?
6. Может ли треугольник иметь стороны $4$, $5$, $10$?
7. В треугольнике $A = 30^\\circ$, $C = 105^\\circ$, $b = 8$. Найдите $B$, затем $a$.
8. Две стороны треугольника равны $9$ и $12$, угол между ними $120^\\circ$. Найдите третью сторону.

### Ответы

1. Теорему косинусов.
2. $a^2 = 16 + 49 - 28 = 37$, поэтому $a = \\sqrt{37}$.
3. $C = 105^\\circ$, а $b = \\frac{10\\sin 45^\\circ}{\\sin 30^\\circ} = 10\\sqrt{2}$.
4. $\\cos C = \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = 0{,}2$.
5. Только наибольший угол может быть тупым, а косинус отличает тупой угол от острого знаком.
6. Нет, потому что $4 + 5 < 10$.
7. $B = 45^\\circ$, а $a = \\frac{8\\sin 30^\\circ}{\\sin 45^\\circ} = \\frac{8\\cdot 0{,}5}{\\sqrt{2}/2} = 4\\sqrt{2}$.
8. $81 + 144 + 108 = 333$, поэтому третья сторона равна $\\sqrt{333} = 3\\sqrt{37}$.`,
      },
      [
        q(t("Solving a triangle means finding", "Եռանկյունը լուծել նշանակում է գտնել", "Решить треугольник значит найти"), [
          t("all six of its elements", "նրա բոլոր վեց տարրերը", "все шесть его элементов"),
          t("only its three angles", "միայն նրա երեք անկյունները", "только три его угла"),
          t("only its area", "միայն նրա մակերեսը", "только его площадь"),
        ], 0),
        q(t("Three given angles", "Երեք տրված անկյուն", "Три данных угла"), [
          t("determine the triangle completely", "լրիվ որոշում են եռանկյունը", "полностью определяют треугольник"),
          t("do not determine the triangle, only its shape", "չեն որոշում եռանկյունը, միայն նրա ձևը", "не определяют треугольник, только его форму"),
          t("cannot belong to any triangle", "չեն կարող պատկանել ոչ մի եռանկյան", "не могут принадлежать никакому треугольнику"),
        ], 1),
        q(t("When a side and two angles are given, one starts with", "Երբ տրված են կողմ և երկու անկյուն, սկսում ենք", "Когда даны сторона и два угла, начинают с"), [
          t("the law of cosines", "կոսինուսների թեորեմից", "теоремы косинусов"),
          t("the area formula", "մակերեսի բանաձևից", "формулы площади"),
          t("the sum of the angles of a triangle", "եռանկյան անկյունների գումարից", "суммы углов треугольника"),
        ], 2),
        q(t("When three sides are given, it is best to find first", "Երբ տրված են երեք կողմ, լավագույնն է սկզբում գտնել", "Когда даны три стороны, лучше сначала найти"), [
          t("the largest angle", "ամենամեծ անկյունը", "наибольший угол"),
          t("the smallest angle", "ամենափոքր անկյունը", "наименьший угол"),
          t("the area", "մակերեսը", "площадь"),
        ], 0),
        q(t("If the law of cosines gives a cosine outside the range from -1 to 1, then", "Եթե կոսինուսների թեորեմը տալիս է -1-ից 1 միջակայքից դուրս կոսինուս, ապա", "Если теорема косинусов даёт косинус вне промежутка от -1 до 1, то"), [
          t("the angle is obtuse", "անկյունը բութ է", "угол тупой"),
          t("such a triangle does not exist", "այդպիսի եռանկյուն գոյություն չունի", "такого треугольника не существует"),
          t("the triangle is isosceles", "եռանկյունը հավասարասրուն է", "треугольник равнобедренный"),
        ], 1),
        q(t("The check at the end of solving a triangle is that", "Եռանկյան լուծման վերջում ստուգումն այն է, որ", "Проверка в конце решения треугольника состоит в том, что"), [
          t("all sides are equal", "բոլոր կողմերը հավասար են", "все стороны равны"),
          t("the area is a whole number", "մակերեսն ամբողջ թիվ է", "площадь — целое число"),
          t("the three angles add up to 180 degrees", "երեք անկյունների գումարը 180 աստիճան է", "сумма трёх углов равна 180 градусам"),
        ], 2),
      ],
    ),
    lesson(
      "scalar-product",
      ["The scalar product of two vectors", "Երկու վեկտորի սկալյար արտադրյալը", "Скалярное произведение двух векторов"],
      {
        en: ["Define the angle between two vectors and their scalar product", "Compute the scalar product in coordinates", "Use the sign of the scalar product to tell the kind of angle"],
        hy: ["Սահմանել երկու վեկտորի միջև անկյունը և նրանց սկալյար արտադրյալը", "Հաշվել սկալյար արտադրյալը կոորդինատներով", "Սկալյար արտադրյալի նշանով որոշել անկյան տեսակը"],
        ru: ["Определять угол между двумя векторами и их скалярное произведение", "Вычислять скалярное произведение в координатах", "Определять вид угла по знаку скалярного произведения"],
      },
      {
        en: `## The angle between two vectors

Bring two non-zero vectors $\\vec{a}$ and $\\vec{b}$ to a common beginning. The angle between the rays they span is the **angle between the vectors**, written $\\widehat{\\vec{a}\\vec{b}}$. It lies between $0^\\circ$ and $180^\\circ$. Equally directed vectors make $0^\\circ$, oppositely directed ones $180^\\circ$, and perpendicular ones $90^\\circ$.

## The definition

> The **scalar product** of two vectors is the product of their lengths and the cosine of the angle between them:
> $$\\vec{a}\\cdot\\vec{b} = \\lvert\\vec{a}\\rvert\\,\\lvert\\vec{b}\\rvert\\cos\\widehat{\\vec{a}\\vec{b}}.$$

The result is a number, not a vector, which is where the name comes from. If one of the factors is the zero vector, the product is $0$ by agreement.

The square of a vector is $\\vec{a}\\cdot\\vec{a} = \\lvert\\vec{a}\\rvert^2$, because the angle is $0^\\circ$.

## The sign tells the angle

| Angle between the vectors | $\\vec{a}\\cdot\\vec{b}$ |
|---|---|
| acute | positive |
| right | zero |
| obtuse | negative |

> Two non-zero vectors are perpendicular exactly when their scalar product is zero.

That one line replaces every other test for perpendicularity in coordinate problems.

## In coordinates

> If $\\vec{a}\\{x_1; y_1\\}$ and $\\vec{b}\\{x_2; y_2\\}$, then
> $$\\vec{a}\\cdot\\vec{b} = x_1x_2 + y_1y_2.$$

**Proof sketch.** Apply the law of cosines to the triangle built on the two vectors, or expand $\\lvert\\vec{a} - \\vec{b}\\rvert^2$ in coordinates and compare.

**Example 1.** For $\\vec{a}\\{3; 4\\}$ and $\\vec{b}\\{2; -1\\}$ we get $\\vec{a}\\cdot\\vec{b} = 6 - 4 = 2$. The product is positive, so the angle is acute.

**Example 2.** The vectors $\\{2; 6\\}$ and $\\{3; -1\\}$ have product $6 - 6 = 0$, so they are perpendicular.

**Example 3.** Find the angle between $\\vec{a}\\{1; 0\\}$ and $\\vec{b}\\{1; 1\\}$. Here $\\vec{a}\\cdot\\vec{b} = 1$, $\\lvert\\vec{a}\\rvert = 1$ and $\\lvert\\vec{b}\\rvert = \\sqrt{2}$, so
$$\\cos\\varphi = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\varphi = 45^\\circ.$$

## The formula for the angle

> $$\\cos\\varphi = \\frac{x_1x_2 + y_1y_2}{\\sqrt{x_1^2 + y_1^2}\\cdot\\sqrt{x_2^2 + y_2^2}}.$$

**Example 4.** The angle between $\\{-1; 1\\}$ and $\\{1; 0\\}$ has cosine $\\frac{-1}{\\sqrt{2}}$, so the angle is $135^\\circ$: a negative product means an obtuse angle.

## The rules of calculation

The scalar product behaves almost like the product of numbers.

$$\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{a}, \\qquad (k\\vec{a})\\cdot\\vec{b} = k(\\vec{a}\\cdot\\vec{b}), \\qquad (\\vec{a} + \\vec{b})\\cdot\\vec{c} = \\vec{a}\\cdot\\vec{c} + \\vec{b}\\cdot\\vec{c}.$$

**Example 5.** Expand $(\\vec{a} + \\vec{b})^2 = \\vec{a}^2 + 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$, that is
$$\\lvert\\vec{a} + \\vec{b}\\rvert^2 = \\lvert\\vec{a}\\rvert^2 + 2\\lvert\\vec{a}\\rvert\\lvert\\vec{b}\\rvert\\cos\\varphi + \\lvert\\vec{b}\\rvert^2.$$
With $\\varphi = 90^\\circ$ this is the Pythagorean theorem for the diagonal of a rectangle.

**Example 6.** If $\\lvert\\vec{a}\\rvert = 3$, $\\lvert\\vec{b}\\rvert = 4$ and the angle between them is $60^\\circ$, then $\\vec{a}\\cdot\\vec{b} = 3\\cdot 4\\cdot 0{.}5 = 6$, and
$$\\lvert\\vec{a} + \\vec{b}\\rvert^2 = 9 + 12 + 16 = 37, \\qquad \\lvert\\vec{a} + \\vec{b}\\rvert = \\sqrt{37}.$$

### Exercises

1. Compute the scalar product of $\\{2; 5\\}$ and $\\{3; 1\\}$.
2. Compute the scalar product of $\\{4; -2\\}$ and $\\{1; 2\\}$. What does the answer say about the angle?
3. Find the scalar product if the lengths are $5$ and $6$ and the angle is $120^\\circ$.
4. Find the angle between $\\{3; 0\\}$ and $\\{0; 7\\}$.
5. Find the angle between $\\{1; 1\\}$ and $\\{0; 5\\}$.
6. For which $m$ are the vectors $\\{m; 3\\}$ and $\\{2; -4\\}$ perpendicular?
7. Compute $\\vec{a}\\cdot\\vec{a}$ for $\\vec{a}\\{5; 12\\}$.
8. The lengths of $\\vec{a}$ and $\\vec{b}$ are $2$ and $3$, and the angle between them is $60^\\circ$. Find $\\lvert\\vec{a} - \\vec{b}\\rvert$.

### Answers

1. $6 + 5 = 11$.
2. $4 - 4 = 0$, so the vectors are perpendicular.
3. $5\\cdot 6\\cdot(-0{.}5) = -15$.
4. The product is $0$, so the angle is $90^\\circ$.
5. $\\cos\\varphi = \\frac{5}{\\sqrt{2}\\cdot 5} = \\frac{\\sqrt{2}}{2}$, so $\\varphi = 45^\\circ$.
6. $2m - 12 = 0$, so $m = 6$.
7. $25 + 144 = 169$, which is the square of the length $13$.
8. $\\lvert\\vec{a} - \\vec{b}\\rvert^2 = 4 - 2\\cdot 3 + 9 = 7$, so the length is $\\sqrt{7}$.`,
        hy: `## Երկու վեկտորի միջև անկյունը

Երկու ոչ զրոյական $\\vec{a}$ և $\\vec{b}$ վեկտորները բերենք ընդհանուր սկզբնակետի։ Նրանց ճառագայթների միջև անկյունը **վեկտորների միջև անկյունն** է՝ $\\widehat{\\vec{a}\\vec{b}}$։ Նա գտնվում է $0^\\circ$-ի և $180^\\circ$-ի միջև։ Համուղղված վեկտորները կազմում են $0^\\circ$, հակուղղվածները՝ $180^\\circ$, ուղղահայացները՝ $90^\\circ$։

## Սահմանումը

> Երկու վեկտորի **սկալյար արտադրյալը** նրանց երկարությունների և նրանց միջև անկյան կոսինուսի արտադրյալն է՝
> $$\\vec{a}\\cdot\\vec{b} = \\lvert\\vec{a}\\rvert\\,\\lvert\\vec{b}\\rvert\\cos\\widehat{\\vec{a}\\vec{b}}.$$

Արդյունքը թիվ է, ոչ թե վեկտոր, որտեղից էլ գալիս է անվանումը։ Եթե գործակիցներից մեկը զրոյական վեկտորն է, արտադրյալը պայմանավորվածությամբ $0$ է։

Վեկտորի քառակուսին $\\vec{a}\\cdot\\vec{a} = \\lvert\\vec{a}\\rvert^2$ է, քանի որ անկյունը $0^\\circ$ է։

## Նշանը ցույց է տալիս անկյունը

| Վեկտորների միջև անկյունը | $\\vec{a}\\cdot\\vec{b}$ |
|---|---|
| սուր | դրական |
| ուղիղ | զրո |
| բութ | բացասական |

> Երկու ոչ զրոյական վեկտոր ուղղահայաց են հենց այն դեպքում, երբ նրանց սկալյար արտադրյալը զրո է։

Այս մեկ տողը կոորդինատային խնդիրներում փոխարինում է ուղղահայացության բոլոր մյուս հայտանիշները։

## Կոորդինատներով

> Եթե $\\vec{a}\\{x_1; y_1\\}$ և $\\vec{b}\\{x_2; y_2\\}$, ապա
> $$\\vec{a}\\cdot\\vec{b} = x_1x_2 + y_1y_2.$$

**Ապացույցի ուրվագիծ։** Կիրառենք կոսինուսների թեորեմն երկու վեկտորի վրա կառուցված եռանկյան համար, կամ բացենք $\\lvert\\vec{a} - \\vec{b}\\rvert^2$-ը կոորդինատներով և համեմատենք։

**Օրինակ 1.** $\\vec{a}\\{3; 4\\}$ և $\\vec{b}\\{2; -1\\}$ դեպքում ստանում ենք $\\vec{a}\\cdot\\vec{b} = 6 - 4 = 2$։ Արտադրյալը դրական է, ուստի անկյունը սուր է։

**Օրինակ 2.** $\\{2; 6\\}$ և $\\{3; -1\\}$ վեկտորների արտադրյալն է $6 - 6 = 0$, ուստի նրանք ուղղահայաց են։

**Օրինակ 3.** Գտնենք $\\vec{a}\\{1; 0\\}$ և $\\vec{b}\\{1; 1\\}$ վեկտորների միջև անկյունը։ Այստեղ $\\vec{a}\\cdot\\vec{b} = 1$, $\\lvert\\vec{a}\\rvert = 1$ և $\\lvert\\vec{b}\\rvert = \\sqrt{2}$, ուստի
$$\\cos\\varphi = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\varphi = 45^\\circ.$$

## Անկյան բանաձևը

> $$\\cos\\varphi = \\frac{x_1x_2 + y_1y_2}{\\sqrt{x_1^2 + y_1^2}\\cdot\\sqrt{x_2^2 + y_2^2}}.$$

**Օրինակ 4.** $\\{-1; 1\\}$ և $\\{1; 0\\}$ վեկտորների միջև անկյան կոսինուսն է $\\frac{-1}{\\sqrt{2}}$, ուստի անկյունը $135^\\circ$ է. բացասական արտադրյալը նշանակում է բութ անկյուն։

## Հաշվման կանոնները

Սկալյար արտադրյալն իրեն պահում է գրեթե ինչպես թվերի արտադրյալը։

$$\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{a}, \\qquad (k\\vec{a})\\cdot\\vec{b} = k(\\vec{a}\\cdot\\vec{b}), \\qquad (\\vec{a} + \\vec{b})\\cdot\\vec{c} = \\vec{a}\\cdot\\vec{c} + \\vec{b}\\cdot\\vec{c}.$$

**Օրինակ 5.** Բացենք $(\\vec{a} + \\vec{b})^2 = \\vec{a}^2 + 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$, այսինքն
$$\\lvert\\vec{a} + \\vec{b}\\rvert^2 = \\lvert\\vec{a}\\rvert^2 + 2\\lvert\\vec{a}\\rvert\\lvert\\vec{b}\\rvert\\cos\\varphi + \\lvert\\vec{b}\\rvert^2.$$
$\\varphi = 90^\\circ$ դեպքում սա ուղղանկյան անկյունագծի համար Պյութագորասի թեորեմն է։

**Օրինակ 6.** Եթե $\\lvert\\vec{a}\\rvert = 3$, $\\lvert\\vec{b}\\rvert = 4$ և նրանց միջև անկյունը $60^\\circ$ է, ապա $\\vec{a}\\cdot\\vec{b} = 3\\cdot 4\\cdot 0{,}5 = 6$, և
$$\\lvert\\vec{a} + \\vec{b}\\rvert^2 = 9 + 12 + 16 = 37, \\qquad \\lvert\\vec{a} + \\vec{b}\\rvert = \\sqrt{37}.$$

### Վարժություններ

1. Հաշվեք $\\{2; 5\\}$ և $\\{3; 1\\}$ վեկտորների սկալյար արտադրյալը։
2. Հաշվեք $\\{4; -2\\}$ և $\\{1; 2\\}$ վեկտորների սկալյար արտադրյալը։ Ի՞նչ է ասում պատասխանն անկյան մասին։
3. Գտեք սկալյար արտադրյալը, եթե երկարությունները $5$ և $6$ են, անկյունը՝ $120^\\circ$։
4. Գտեք $\\{3; 0\\}$ և $\\{0; 7\\}$ վեկտորների միջև անկյունը։
5. Գտեք $\\{1; 1\\}$ և $\\{0; 5\\}$ վեկտորների միջև անկյունը։
6. $m$-ի ո՞ր արժեքի դեպքում են $\\{m; 3\\}$ և $\\{2; -4\\}$ վեկտորներն ուղղահայաց։
7. Հաշվեք $\\vec{a}\\cdot\\vec{a}$-ն $\\vec{a}\\{5; 12\\}$ դեպքում։
8. $\\vec{a}$-ի և $\\vec{b}$-ի երկարությունները $2$ և $3$ են, նրանց միջև անկյունը՝ $60^\\circ$։ Գտեք $\\lvert\\vec{a} - \\vec{b}\\rvert$-ը։

### Պատասխաններ

1. $6 + 5 = 11$։
2. $4 - 4 = 0$, ուստի վեկտորներն ուղղահայաց են։
3. $5\\cdot 6\\cdot(-0{,}5) = -15$։
4. Արտադրյալը $0$ է, ուստի անկյունը $90^\\circ$ է։
5. $\\cos\\varphi = \\frac{5}{\\sqrt{2}\\cdot 5} = \\frac{\\sqrt{2}}{2}$, ուստի $\\varphi = 45^\\circ$։
6. $2m - 12 = 0$, ուստի $m = 6$։
7. $25 + 144 = 169$, ինչը $13$ երկարության քառակուսին է։
8. $\\lvert\\vec{a} - \\vec{b}\\rvert^2 = 4 - 2\\cdot 3 + 9 = 7$, ուստի երկարությունն է $\\sqrt{7}$։`,
        ru: `## Угол между двумя векторами

Приведём два ненулевых вектора $\\vec{a}$ и $\\vec{b}$ к общему началу. Угол между лучами, которые они задают, и есть **угол между векторами**, обозначаемый $\\widehat{\\vec{a}\\vec{b}}$. Он лежит между $0^\\circ$ и $180^\\circ$. Сонаправленные векторы дают $0^\\circ$, противоположно направленные $180^\\circ$, перпендикулярные $90^\\circ$.

## Определение

> **Скалярное произведение** двух векторов — это произведение их длин на косинус угла между ними:
> $$\\vec{a}\\cdot\\vec{b} = \\lvert\\vec{a}\\rvert\\,\\lvert\\vec{b}\\rvert\\cos\\widehat{\\vec{a}\\vec{b}}.$$

Результат — число, а не вектор, откуда и название. Если один из множителей — нулевой вектор, произведение по договорённости равно $0$.

Квадрат вектора равен $\\vec{a}\\cdot\\vec{a} = \\lvert\\vec{a}\\rvert^2$, так как угол равен $0^\\circ$.

## Знак указывает на угол

| Угол между векторами | $\\vec{a}\\cdot\\vec{b}$ |
|---|---|
| острый | положительно |
| прямой | равно нулю |
| тупой | отрицательно |

> Два ненулевых вектора перпендикулярны в точности тогда, когда их скалярное произведение равно нулю.

Эта одна строка заменяет все остальные признаки перпендикулярности в координатных задачах.

## В координатах

> Если $\\vec{a}\\{x_1; y_1\\}$ и $\\vec{b}\\{x_2; y_2\\}$, то
> $$\\vec{a}\\cdot\\vec{b} = x_1x_2 + y_1y_2.$$

**Набросок доказательства.** Применим теорему косинусов к треугольнику, построенному на двух векторах, или раскроем $\\lvert\\vec{a} - \\vec{b}\\rvert^2$ в координатах и сравним.

**Пример 1.** Для $\\vec{a}\\{3; 4\\}$ и $\\vec{b}\\{2; -1\\}$ получаем $\\vec{a}\\cdot\\vec{b} = 6 - 4 = 2$. Произведение положительно, поэтому угол острый.

**Пример 2.** У векторов $\\{2; 6\\}$ и $\\{3; -1\\}$ произведение равно $6 - 6 = 0$, поэтому они перпендикулярны.

**Пример 3.** Найдём угол между $\\vec{a}\\{1; 0\\}$ и $\\vec{b}\\{1; 1\\}$. Здесь $\\vec{a}\\cdot\\vec{b} = 1$, $\\lvert\\vec{a}\\rvert = 1$ и $\\lvert\\vec{b}\\rvert = \\sqrt{2}$, поэтому
$$\\cos\\varphi = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\varphi = 45^\\circ.$$

## Формула для угла

> $$\\cos\\varphi = \\frac{x_1x_2 + y_1y_2}{\\sqrt{x_1^2 + y_1^2}\\cdot\\sqrt{x_2^2 + y_2^2}}.$$

**Пример 4.** У угла между $\\{-1; 1\\}$ и $\\{1; 0\\}$ косинус равен $\\frac{-1}{\\sqrt{2}}$, поэтому угол равен $135^\\circ$: отрицательное произведение означает тупой угол.

## Правила вычислений

Скалярное произведение ведёт себя почти как произведение чисел.

$$\\vec{a}\\cdot\\vec{b} = \\vec{b}\\cdot\\vec{a}, \\qquad (k\\vec{a})\\cdot\\vec{b} = k(\\vec{a}\\cdot\\vec{b}), \\qquad (\\vec{a} + \\vec{b})\\cdot\\vec{c} = \\vec{a}\\cdot\\vec{c} + \\vec{b}\\cdot\\vec{c}.$$

**Пример 5.** Раскроем $(\\vec{a} + \\vec{b})^2 = \\vec{a}^2 + 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$, то есть
$$\\lvert\\vec{a} + \\vec{b}\\rvert^2 = \\lvert\\vec{a}\\rvert^2 + 2\\lvert\\vec{a}\\rvert\\lvert\\vec{b}\\rvert\\cos\\varphi + \\lvert\\vec{b}\\rvert^2.$$
При $\\varphi = 90^\\circ$ это теорема Пифагора для диагонали прямоугольника.

**Пример 6.** Если $\\lvert\\vec{a}\\rvert = 3$, $\\lvert\\vec{b}\\rvert = 4$ и угол между ними равен $60^\\circ$, то $\\vec{a}\\cdot\\vec{b} = 3\\cdot 4\\cdot 0{,}5 = 6$, и
$$\\lvert\\vec{a} + \\vec{b}\\rvert^2 = 9 + 12 + 16 = 37, \\qquad \\lvert\\vec{a} + \\vec{b}\\rvert = \\sqrt{37}.$$

### Упражнения

1. Вычислите скалярное произведение $\\{2; 5\\}$ и $\\{3; 1\\}$.
2. Вычислите скалярное произведение $\\{4; -2\\}$ и $\\{1; 2\\}$. Что ответ говорит об угле?
3. Найдите скалярное произведение, если длины равны $5$ и $6$, а угол $120^\\circ$.
4. Найдите угол между $\\{3; 0\\}$ и $\\{0; 7\\}$.
5. Найдите угол между $\\{1; 1\\}$ и $\\{0; 5\\}$.
6. При каком $m$ векторы $\\{m; 3\\}$ и $\\{2; -4\\}$ перпендикулярны?
7. Вычислите $\\vec{a}\\cdot\\vec{a}$ для $\\vec{a}\\{5; 12\\}$.
8. Длины $\\vec{a}$ и $\\vec{b}$ равны $2$ и $3$, угол между ними $60^\\circ$. Найдите $\\lvert\\vec{a} - \\vec{b}\\rvert$.

### Ответы

1. $6 + 5 = 11$.
2. $4 - 4 = 0$, поэтому векторы перпендикулярны.
3. $5\\cdot 6\\cdot(-0{,}5) = -15$.
4. Произведение равно $0$, поэтому угол равен $90^\\circ$.
5. $\\cos\\varphi = \\frac{5}{\\sqrt{2}\\cdot 5} = \\frac{\\sqrt{2}}{2}$, поэтому $\\varphi = 45^\\circ$.
6. $2m - 12 = 0$, поэтому $m = 6$.
7. $25 + 144 = 169$ — это квадрат длины $13$.
8. $\\lvert\\vec{a} - \\vec{b}\\rvert^2 = 4 - 2\\cdot 3 + 9 = 7$, поэтому длина равна $\\sqrt{7}$.`,
      },
      [
        q(t("The scalar product of two vectors is", "Երկու վեկտորի սկալյար արտադրյալը", "Скалярное произведение двух векторов —"), [
          t("a number", "թիվ է", "число"),
          t("a vector", "վեկտոր է", "вектор"),
          t("an angle", "անկյուն է", "угол"),
        ], 0),
        q(t("In coordinates the scalar product of {x1; y1} and {x2; y2} equals", "Կոորդինատներով {x1; y1} և {x2; y2} վեկտորների սկալյար արտադրյալը հավասար է", "В координатах скалярное произведение {x1; y1} и {x2; y2} равно"), [
          t("x1 + x2 + y1 + y2", "x1 + x2 + y1 + y2", "x1 + x2 + y1 + y2"),
          t("x1x2 + y1y2", "x1x2 + y1y2", "x1x2 + y1y2"),
          t("x1y1 + x2y2", "x1y1 + x2y2", "x1y1 + x2y2"),
        ], 1),
        q(t("Two non-zero vectors are perpendicular exactly when their scalar product is", "Երկու ոչ զրոյական վեկտոր ուղղահայաց են հենց այն դեպքում, երբ նրանց սկալյար արտադրյալը", "Два ненулевых вектора перпендикулярны в точности тогда, когда их скалярное произведение"), [
          t("positive", "դրական է", "положительно"),
          t("equal to one", "մեկին հավասար է", "равно единице"),
          t("equal to zero", "զրո է", "равно нулю"),
        ], 2),
        q(t("A negative scalar product means that the angle between the vectors is", "Բացասական սկալյար արտադրյալը նշանակում է, որ վեկտորների միջև անկյունը", "Отрицательное скалярное произведение означает, что угол между векторами"), [
          t("obtuse", "բութ է", "тупой"),
          t("acute", "սուր է", "острый"),
          t("right", "ուղիղ է", "прямой"),
        ], 0),
        q(t("The scalar product of a vector with itself equals", "Վեկտորի սկալյար արտադրյալն ինքն իր հետ հավասար է", "Скалярное произведение вектора на себя равно"), [
          t("zero", "զրոյի", "нулю"),
          t("the square of its length", "նրա երկարության քառակուսուն", "квадрату его длины"),
          t("its length", "նրա երկարությանը", "его длине"),
        ], 1),
        q(t("The angle between two vectors always lies", "Երկու վեկտորի միջև անկյունը միշտ գտնվում է", "Угол между двумя векторами всегда лежит"), [
          t("between 0 and 90 degrees", "0-ի և 90 աստիճանի միջև", "между 0 и 90 градусами"),
          t("between 90 and 180 degrees", "90-ի և 180 աստիճանի միջև", "между 90 и 180 градусами"),
          t("between 0 and 180 degrees", "0-ի և 180 աստիճանի միջև", "между 0 и 180 градусами"),
        ], 2),
      ],
    ),
    lesson(
      "scalar-product-applications",
      ["Using the scalar product in problems", "Սկալյար արտադրյալի կիրառումը խնդիրներում", "Применение скалярного произведения в задачах"],
      {
        en: ["Prove perpendicularity and find angles in figures with the scalar product", "Derive known theorems from the properties of the scalar product", "Solve problems about lengths of medians and diagonals"],
        hy: ["Սկալյար արտադրյալով ապացուցել ուղղահայացություն և գտնել անկյուններ պատկերներում", "Սկալյար արտադրյալի հատկություններից արտածել հայտնի թեորեմներ", "Լուծել միջնագծերի և անկյունագծերի երկարությունների խնդիրներ"],
        ru: ["Доказывать перпендикулярность и находить углы в фигурах с помощью скалярного произведения", "Выводить известные теоремы из свойств скалярного произведения", "Решать задачи о длинах медиан и диагоналей"],
      },
      {
        en: `## Why the scalar product is useful

A length is a scalar square, and an angle is a quotient of scalar products. So any question about lengths and angles can be written as algebra with dots, and the rules of expanding brackets do the rest. Three kinds of problem appear again and again.

## Perpendicularity

**Example 1.** The quadrilateral $ABCD$ has $A(0; 0)$, $B(4; 3)$, $C(7; -1)$, $D(3; -4)$. Are its diagonals perpendicular? We compute
$$\\overrightarrow{AC}\\{7; -1\\}, \\quad \\overrightarrow{BD}\\{-1; -7\\}, \\quad \\overrightarrow{AC}\\cdot\\overrightarrow{BD} = -7 + 7 = 0.$$
Yes, they are. Note that the sides $AB$ and $AD$ both have length $5$, so this is a kite, and in a kite the diagonals are indeed perpendicular.

**Example 2.** In a rhombus the diagonals are perpendicular. With $\\overrightarrow{AB} = \\vec{a}$ and $\\overrightarrow{AD} = \\vec{b}$, the diagonals are $\\vec{a} + \\vec{b}$ and $\\vec{b} - \\vec{a}$, so
$$(\\vec{a} + \\vec{b})\\cdot(\\vec{b} - \\vec{a}) = \\vec{b}^2 - \\vec{a}^2 = \\lvert\\vec{b}\\rvert^2 - \\lvert\\vec{a}\\rvert^2 = 0,$$
because all sides of a rhombus are equal. Two lines of algebra replace a drawing with equal triangles.

## Angles in a figure

**Example 3.** Find the angle at the vertex $A$ of the triangle $A(1; 1)$, $B(4; 5)$, $C(6; 1)$. The vectors from $A$ are $\\overrightarrow{AB}\\{3; 4\\}$ and $\\overrightarrow{AC}\\{5; 0\\}$, so
$$\\cos A = \\frac{15 + 0}{5\\cdot 5} = 0{.}6, \\qquad A \\approx 53^\\circ.$$

**Example 4.** Find the angle between the diagonal and a side of a square with vertices $(0; 0)$, $(a; 0)$, $(a; a)$, $(0; a)$. The vectors $\\{a; a\\}$ and $\\{a; 0\\}$ give
$$\\cos\\varphi = \\frac{a^2}{a\\sqrt{2}\\cdot a} = \\frac{1}{\\sqrt{2}},$$
so $\\varphi = 45^\\circ$, independently of $a$.

## Lengths of medians and diagonals

Expanding a scalar square turns a length into known quantities.

**Example 5.** The median to the side $a$ of a triangle. With $\\overrightarrow{AB} = \\vec{c}$ and $\\overrightarrow{AC} = \\vec{b}$, the median from $A$ is $\\vec{m} = \\tfrac{1}{2}(\\vec{b} + \\vec{c})$, so
$$4m^2 = \\lvert\\vec{b} + \\vec{c}\\rvert^2 = b^2 + c^2 + 2\\vec{b}\\cdot\\vec{c} = b^2 + c^2 + (b^2 + c^2 - a^2),$$
because $2\\vec{b}\\cdot\\vec{c} = 2bc\\cos A = b^2 + c^2 - a^2$ by the law of cosines. Hence

> $$m_a = \\tfrac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}.$$

**Example 6.** In a triangle with sides $a = 6$, $b = 7$, $c = 9$ the median to $a$ is
$$m_a = \\tfrac{1}{2}\\sqrt{98 + 162 - 36} = \\tfrac{1}{2}\\sqrt{224} = 2\\sqrt{14} \\approx 7{.}48.$$

| Quantity | Vector expression |
|---|---|
| side $BC$ | $\\lvert\\vec{b} - \\vec{c}\\rvert$ |
| median from $A$ | $\\tfrac{1}{2}\\lvert\\vec{b} + \\vec{c}\\rvert$ |
| angle at $A$ | from $\\vec{b}\\cdot\\vec{c}$ |
| test for a right angle at $A$ | $\\vec{b}\\cdot\\vec{c} = 0$ |

### Exercises

1. Are the vectors $\\{6; -4\\}$ and $\\{2; 3\\}$ perpendicular?
2. Find the angle at the vertex $B$ of the triangle $A(0; 0)$, $B(3; 0)$, $C(3; 3)$.
3. In the quadrilateral with $A(0; 0)$, $B(2; 5)$, $C(9; 3)$, $D(7; -2)$, check whether the side $AB$ is perpendicular to the side $BC$.
4. Find the median to the side $a = 8$ in a triangle with $b = 6$ and $c = 10$.
5. Prove with vectors that in a parallelogram the sum of the squares of the diagonals equals the sum of the squares of the sides.
6. Find the angle between the vectors $\\overrightarrow{AB}$ and $\\overrightarrow{AC}$ for $A(2; 2)$, $B(5; 6)$, $C(2; 7)$.
7. For which $m$ is the vector $\\{m; 2\\}$ perpendicular to the vector $\\{3; m\\}$?
8. A triangle has $b = 5$, $c = 5$ and $a = 6$. Find the median to the side $a$ and check it against the height.

### Answers

1. $12 - 12 = 0$, so yes.
2. The vectors from $B$ are $\\{-3; 0\\}$ and $\\{0; 3\\}$, whose product is $0$, so the angle is $90^\\circ$.
3. $\\overrightarrow{AB}\\{2; 5\\}$ and $\\overrightarrow{BC}\\{7; -2\\}$ give $14 - 10 = 4 \\ne 0$, so they are not perpendicular.
4. $m_a = \\tfrac{1}{2}\\sqrt{72 + 200 - 64} = \\tfrac{1}{2}\\sqrt{208} = 2\\sqrt{13}$.
5. $\\lvert\\vec{a} + \\vec{b}\\rvert^2 + \\lvert\\vec{a} - \\vec{b}\\rvert^2 = 2\\lvert\\vec{a}\\rvert^2 + 2\\lvert\\vec{b}\\rvert^2$, since the cross terms cancel.
6. $\\overrightarrow{AB}\\{3; 4\\}$ and $\\overrightarrow{AC}\\{0; 5\\}$ give $\\cos\\varphi = \\frac{20}{25} = 0{.}8$, so $\\varphi \\approx 37^\\circ$.
7. $3m + 2m = 5m = 0$, so $m = 0$.
8. $m_a = \\tfrac{1}{2}\\sqrt{50 + 50 - 36} = \\tfrac{1}{2}\\cdot 8 = 4$. The triangle is isosceles, so the median to the base is the height, and indeed $\\sqrt{25 - 9} = 4$.`,
        hy: `## Ինչու է օգտակար սկալյար արտադրյալը

Երկարությունը սկալյար քառակուսի է, իսկ անկյունը՝ սկալյար արտադրյալների հարաբերություն։ Ուրեմն երկարությունների և անկյունների մասին ցանկացած հարց կարելի է գրել որպես հանրահաշիվ կետերով, իսկ փակագծերի բացման կանոններն անում են մնացածը։ Երեք տեսակի խնդիր հանդիպում է նորից ու նորից։

## Ուղղահայացություն

**Օրինակ 1.** $ABCD$ քառանկյունն ունի $A(0; 0)$, $B(4; 3)$, $C(7; -1)$, $D(3; -4)$։ Ուղղահայա՞ց են նրա անկյունագծերը։ Հաշվենք՝
$$\\overrightarrow{AC}\\{7; -1\\}, \\quad \\overrightarrow{BD}\\{-1; -7\\}, \\quad \\overrightarrow{AC}\\cdot\\overrightarrow{BD} = -7 + 7 = 0.$$
Այո։ Նկատենք, որ $AB$ և $AD$ կողմերն երկուսն էլ ունեն $5$ երկարություն, ուստի սա դեղձանիկ է, իսկ դեղձանիկում անկյունագծերն իրոք ուղղահայաց են։

**Օրինակ 2.** Շեղանկյունում անկյունագծերն ուղղահայաց են։ Երբ $\\overrightarrow{AB} = \\vec{a}$ և $\\overrightarrow{AD} = \\vec{b}$, անկյունագծերն են $\\vec{a} + \\vec{b}$ և $\\vec{b} - \\vec{a}$, ուստի
$$(\\vec{a} + \\vec{b})\\cdot(\\vec{b} - \\vec{a}) = \\vec{b}^2 - \\vec{a}^2 = \\lvert\\vec{b}\\rvert^2 - \\lvert\\vec{a}\\rvert^2 = 0,$$
քանի որ շեղանկյան բոլոր կողմերը հավասար են։ Հանրահաշվի երկու տողը փոխարինում է հավասար եռանկյուններով գծագիրը։

## Անկյուններ պատկերում

**Օրինակ 3.** Գտնենք $A(1; 1)$, $B(4; 5)$, $C(6; 1)$ եռանկյան $A$ գագաթի անկյունը։ $A$-ից վեկտորներն են $\\overrightarrow{AB}\\{3; 4\\}$ և $\\overrightarrow{AC}\\{5; 0\\}$, ուստի
$$\\cos A = \\frac{15 + 0}{5\\cdot 5} = 0{,}6, \\qquad A \\approx 53^\\circ.$$

**Օրինակ 4.** Գտնենք $(0; 0)$, $(a; 0)$, $(a; a)$, $(0; a)$ գագաթներով քառակուսու անկյունագծի և կողմի միջև անկյունը։ $\\{a; a\\}$ և $\\{a; 0\\}$ վեկտորները տալիս են
$$\\cos\\varphi = \\frac{a^2}{a\\sqrt{2}\\cdot a} = \\frac{1}{\\sqrt{2}},$$
ուստի $\\varphi = 45^\\circ$՝ անկախ $a$-ից։

## Միջնագծերի և անկյունագծերի երկարությունները

Սկալյար քառակուսու բացումն երկարությունը վերածում է հայտնի մեծությունների։

**Օրինակ 5.** Եռանկյան $a$ կողմին տարված միջնագիծը։ Երբ $\\overrightarrow{AB} = \\vec{c}$ և $\\overrightarrow{AC} = \\vec{b}$, $A$-ից միջնագիծն է $\\vec{m} = \\tfrac{1}{2}(\\vec{b} + \\vec{c})$, ուստի
$$4m^2 = \\lvert\\vec{b} + \\vec{c}\\rvert^2 = b^2 + c^2 + 2\\vec{b}\\cdot\\vec{c} = b^2 + c^2 + (b^2 + c^2 - a^2),$$
քանի որ կոսինուսների թեորեմով $2\\vec{b}\\cdot\\vec{c} = 2bc\\cos A = b^2 + c^2 - a^2$։ Հետևաբար

> $$m_a = \\tfrac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}.$$

**Օրինակ 6.** $a = 6$, $b = 7$, $c = 9$ կողմերով եռանկյունում $a$-ին տարված միջնագիծն է
$$m_a = \\tfrac{1}{2}\\sqrt{98 + 162 - 36} = \\tfrac{1}{2}\\sqrt{224} = 2\\sqrt{14} \\approx 7{,}48.$$

| Մեծությունը | Վեկտորային արտահայտությունը |
|---|---|
| $BC$ կողմը | $\\lvert\\vec{b} - \\vec{c}\\rvert$ |
| $A$-ից միջնագիծը | $\\tfrac{1}{2}\\lvert\\vec{b} + \\vec{c}\\rvert$ |
| $A$-ի անկյունը | $\\vec{b}\\cdot\\vec{c}$-ից |
| $A$-ում ուղիղ անկյան հայտանիշը | $\\vec{b}\\cdot\\vec{c} = 0$ |

### Վարժություններ

1. Ուղղահայա՞ց են $\\{6; -4\\}$ և $\\{2; 3\\}$ վեկտորները։
2. Գտեք $A(0; 0)$, $B(3; 0)$, $C(3; 3)$ եռանկյան $B$ գագաթի անկյունը։
3. $A(0; 0)$, $B(2; 5)$, $C(9; 3)$, $D(7; -2)$ քառանկյունում ստուգեք՝ $AB$ կողմն ուղղահայա՞ց է $BC$ կողմին։
4. Գտեք $b = 6$ և $c = 10$ ունեցող եռանկյունում $a = 8$ կողմին տարված միջնագիծը։
5. Վեկտորներով ապացուցեք, որ զուգահեռագծում անկյունագծերի քառակուսիների գումարը հավասար է կողմերի քառակուսիների գումարին։
6. Գտեք $\\overrightarrow{AB}$ և $\\overrightarrow{AC}$ վեկտորների միջև անկյունը $A(2; 2)$, $B(5; 6)$, $C(2; 7)$ դեպքում։
7. $m$-ի ո՞ր արժեքի դեպքում է $\\{m; 2\\}$ վեկտորն ուղղահայաց $\\{3; m\\}$ վեկտորին։
8. Եռանկյունն ունի $b = 5$, $c = 5$ և $a = 6$։ Գտեք $a$ կողմին տարված միջնագիծը և ստուգեք բարձրության հետ։

### Պատասխաններ

1. $12 - 12 = 0$, ուստի այո։
2. $B$-ից վեկտորներն են $\\{-3; 0\\}$ և $\\{0; 3\\}$, որոնց արտադրյալը $0$ է, ուստի անկյունը $90^\\circ$ է։
3. $\\overrightarrow{AB}\\{2; 5\\}$ և $\\overrightarrow{BC}\\{7; -2\\}$ տալիս են $14 - 10 = 4 \\ne 0$, ուստի նրանք ուղղահայաց չեն։
4. $m_a = \\tfrac{1}{2}\\sqrt{72 + 200 - 64} = \\tfrac{1}{2}\\sqrt{208} = 2\\sqrt{13}$։
5. $\\lvert\\vec{a} + \\vec{b}\\rvert^2 + \\lvert\\vec{a} - \\vec{b}\\rvert^2 = 2\\lvert\\vec{a}\\rvert^2 + 2\\lvert\\vec{b}\\rvert^2$, քանի որ խառն անդամները կրճատվում են։
6. $\\overrightarrow{AB}\\{3; 4\\}$ և $\\overrightarrow{AC}\\{0; 5\\}$ տալիս են $\\cos\\varphi = \\frac{20}{25} = 0{,}8$, ուստի $\\varphi \\approx 37^\\circ$։
7. $3m + 2m = 5m = 0$, ուստի $m = 0$։
8. $m_a = \\tfrac{1}{2}\\sqrt{50 + 50 - 36} = \\tfrac{1}{2}\\cdot 8 = 4$։ Եռանկյունը հավասարասրուն է, ուստի հիմքին տարված միջնագիծը բարձրությունն է, և իրոք $\\sqrt{25 - 9} = 4$։`,
        ru: `## Почему скалярное произведение полезно

Длина — это скалярный квадрат, а угол — отношение скалярных произведений. Значит, любой вопрос о длинах и углах можно записать как алгебру с точками, а правила раскрытия скобок сделают остальное. Три типа задач встречаются снова и снова.

## Перпендикулярность

**Пример 1.** Четырёхугольник $ABCD$ имеет $A(0; 0)$, $B(4; 3)$, $C(7; -1)$, $D(3; -4)$. Перпендикулярны ли его диагонали? Вычислим
$$\\overrightarrow{AC}\\{7; -1\\}, \\quad \\overrightarrow{BD}\\{-1; -7\\}, \\quad \\overrightarrow{AC}\\cdot\\overrightarrow{BD} = -7 + 7 = 0.$$
Да. Заметим, что стороны $AB$ и $AD$ обе имеют длину $5$, поэтому это дельтоид, а у дельтоида диагонали действительно перпендикулярны.

**Пример 2.** В ромбе диагонали перпендикулярны. При $\\overrightarrow{AB} = \\vec{a}$ и $\\overrightarrow{AD} = \\vec{b}$ диагонали равны $\\vec{a} + \\vec{b}$ и $\\vec{b} - \\vec{a}$, поэтому
$$(\\vec{a} + \\vec{b})\\cdot(\\vec{b} - \\vec{a}) = \\vec{b}^2 - \\vec{a}^2 = \\lvert\\vec{b}\\rvert^2 - \\lvert\\vec{a}\\rvert^2 = 0,$$
так как все стороны ромба равны. Две строки алгебры заменяют чертёж с равными треугольниками.

## Углы в фигуре

**Пример 3.** Найдём угол при вершине $A$ треугольника $A(1; 1)$, $B(4; 5)$, $C(6; 1)$. Векторы из $A$ равны $\\overrightarrow{AB}\\{3; 4\\}$ и $\\overrightarrow{AC}\\{5; 0\\}$, поэтому
$$\\cos A = \\frac{15 + 0}{5\\cdot 5} = 0{,}6, \\qquad A \\approx 53^\\circ.$$

**Пример 4.** Найдём угол между диагональю и стороной квадрата с вершинами $(0; 0)$, $(a; 0)$, $(a; a)$, $(0; a)$. Векторы $\\{a; a\\}$ и $\\{a; 0\\}$ дают
$$\\cos\\varphi = \\frac{a^2}{a\\sqrt{2}\\cdot a} = \\frac{1}{\\sqrt{2}},$$
поэтому $\\varphi = 45^\\circ$ независимо от $a$.

## Длины медиан и диагоналей

Раскрытие скалярного квадрата превращает длину в известные величины.

**Пример 5.** Медиана к стороне $a$ треугольника. При $\\overrightarrow{AB} = \\vec{c}$ и $\\overrightarrow{AC} = \\vec{b}$ медиана из $A$ равна $\\vec{m} = \\tfrac{1}{2}(\\vec{b} + \\vec{c})$, поэтому
$$4m^2 = \\lvert\\vec{b} + \\vec{c}\\rvert^2 = b^2 + c^2 + 2\\vec{b}\\cdot\\vec{c} = b^2 + c^2 + (b^2 + c^2 - a^2),$$
так как по теореме косинусов $2\\vec{b}\\cdot\\vec{c} = 2bc\\cos A = b^2 + c^2 - a^2$. Следовательно

> $$m_a = \\tfrac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}.$$

**Пример 6.** В треугольнике со сторонами $a = 6$, $b = 7$, $c = 9$ медиана к $a$ равна
$$m_a = \\tfrac{1}{2}\\sqrt{98 + 162 - 36} = \\tfrac{1}{2}\\sqrt{224} = 2\\sqrt{14} \\approx 7{,}48.$$

| Величина | Векторное выражение |
|---|---|
| сторона $BC$ | $\\lvert\\vec{b} - \\vec{c}\\rvert$ |
| медиана из $A$ | $\\tfrac{1}{2}\\lvert\\vec{b} + \\vec{c}\\rvert$ |
| угол при $A$ | из $\\vec{b}\\cdot\\vec{c}$ |
| признак прямого угла при $A$ | $\\vec{b}\\cdot\\vec{c} = 0$ |

### Упражнения

1. Перпендикулярны ли векторы $\\{6; -4\\}$ и $\\{2; 3\\}$?
2. Найдите угол при вершине $B$ треугольника $A(0; 0)$, $B(3; 0)$, $C(3; 3)$.
3. В четырёхугольнике с $A(0; 0)$, $B(2; 5)$, $C(9; 3)$, $D(7; -2)$ проверьте, перпендикулярна ли сторона $AB$ стороне $BC$.
4. Найдите медиану к стороне $a = 8$ в треугольнике с $b = 6$ и $c = 10$.
5. Докажите с помощью векторов, что в параллелограмме сумма квадратов диагоналей равна сумме квадратов сторон.
6. Найдите угол между векторами $\\overrightarrow{AB}$ и $\\overrightarrow{AC}$ при $A(2; 2)$, $B(5; 6)$, $C(2; 7)$.
7. При каком $m$ вектор $\\{m; 2\\}$ перпендикулярен вектору $\\{3; m\\}$?
8. В треугольнике $b = 5$, $c = 5$ и $a = 6$. Найдите медиану к стороне $a$ и сверьте её с высотой.

### Ответы

1. $12 - 12 = 0$, значит да.
2. Векторы из $B$ равны $\\{-3; 0\\}$ и $\\{0; 3\\}$, их произведение равно $0$, поэтому угол равен $90^\\circ$.
3. $\\overrightarrow{AB}\\{2; 5\\}$ и $\\overrightarrow{BC}\\{7; -2\\}$ дают $14 - 10 = 4 \\ne 0$, поэтому они не перпендикулярны.
4. $m_a = \\tfrac{1}{2}\\sqrt{72 + 200 - 64} = \\tfrac{1}{2}\\sqrt{208} = 2\\sqrt{13}$.
5. $\\lvert\\vec{a} + \\vec{b}\\rvert^2 + \\lvert\\vec{a} - \\vec{b}\\rvert^2 = 2\\lvert\\vec{a}\\rvert^2 + 2\\lvert\\vec{b}\\rvert^2$, так как смешанные члены сокращаются.
6. $\\overrightarrow{AB}\\{3; 4\\}$ и $\\overrightarrow{AC}\\{0; 5\\}$ дают $\\cos\\varphi = \\frac{20}{25} = 0{,}8$, поэтому $\\varphi \\approx 37^\\circ$.
7. $3m + 2m = 5m = 0$, поэтому $m = 0$.
8. $m_a = \\tfrac{1}{2}\\sqrt{50 + 50 - 36} = \\tfrac{1}{2}\\cdot 8 = 4$. Треугольник равнобедренный, поэтому медиана к основанию является высотой, и действительно $\\sqrt{25 - 9} = 4$.`,
      },
      [
        q(t("To prove that two segments are perpendicular with vectors one checks that", "Վեկտորներով երկու հատվածի ուղղահայացությունն ապացուցելու համար ստուգում ենք, որ", "Чтобы доказать перпендикулярность двух отрезков с помощью векторов, проверяют, что"), [
          t("their scalar product equals zero", "նրանց սկալյար արտադրյալը զրո է", "их скалярное произведение равно нулю"),
          t("their lengths are equal", "նրանց երկարությունները հավասար են", "их длины равны"),
          t("their coordinates are proportional", "նրանց կոորդինատները համեմատական են", "их координаты пропорциональны"),
        ], 0),
        q(t("The angle between the diagonal and a side of a square equals", "Քառակուսու անկյունագծի և կողմի միջև անկյունը հավասար է", "Угол между диагональю и стороной квадрата равен"), [
          t("30 degrees", "30 աստիճան", "30 градусам"),
          t("45 degrees", "45 աստիճան", "45 градусам"),
          t("60 degrees", "60 աստիճան", "60 градусам"),
        ], 1),
        q(t("The median from A is expressed through the vectors of the two sides as", "A-ից միջնագիծն երկու կողմի վեկտորներով արտահայտվում է որպես", "Медиана из A выражается через векторы двух сторон как"), [
          t("their difference", "նրանց տարբերությունը", "их разность"),
          t("their sum", "նրանց գումարը", "их сумма"),
          t("half of their sum", "նրանց գումարի կեսը", "половина их суммы"),
        ], 2),
        q(t("The formula for the median to the side a is one half of the root of", "a կողմին տարված միջնագծի բանաձևն արմատի կեսն է այն արտահայտությունից, որը հավասար է", "Формула медианы к стороне a — это половина корня из"), [
          t("2b² + 2c² - a²", "2b² + 2c² - a²", "2b² + 2c² - a²"),
          t("b² + c² - a²", "b² + c² - a²", "b² + c² - a²"),
          t("2b² + 2c² + a²", "2b² + 2c² + a²", "2b² + 2c² + a²"),
        ], 0),
        q(t("In a rhombus the scalar product of the two diagonals equals zero because", "Շեղանկյունում երկու անկյունագծի սկալյար արտադրյալը զրո է, քանի որ", "В ромбе скалярное произведение двух диагоналей равно нулю, потому что"), [
          t("the diagonals are equal", "անկյունագծերը հավասար են", "диагонали равны"),
          t("all sides are equal", "բոլոր կողմերը հավասար են", "все стороны равны"),
          t("the angles are right", "անկյուններն ուղիղ են", "углы прямые"),
        ], 1),
        q(t("A length of a segment is computed with the scalar product as", "Հատվածի երկարությունը սկալյար արտադրյալով հաշվվում է որպես", "Длина отрезка вычисляется через скалярное произведение как"), [
          t("the scalar product of the vector with any other vector", "վեկտորի սկալյար արտադրյալը ցանկացած այլ վեկտորի հետ", "скалярное произведение вектора с любым другим вектором"),
          t("the sum of the coordinates of the vector", "վեկտորի կոորդինատների գումարը", "сумма координат вектора"),
          t("the square root of the scalar square of the vector", "վեկտորի սկալյար քառակուսու քառակուսի արմատը", "квадратный корень из скалярного квадрата вектора"),
        ], 2),
      ],
    ),
  ],
};
