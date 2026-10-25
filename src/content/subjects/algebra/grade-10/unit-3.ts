import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Trigonometric formulas", "Եռանկյունաչափական բանաձևեր", "Тригонометрические формулы"),
  summary: t(
    "Reduction formulas, sine and cosine of a sum and a difference, double-angle and half-angle formulas, and turning sums into products.",
    "Բերման բանաձևեր, գումարի և տարբերության սինուս ու կոսինուս, կրկնակի և կես անկյան բանաձևեր, գումարի ձևափոխումն արտադրյալի։",
    "Формулы приведения, синус и косинус суммы и разности, формулы двойного и половинного угла, преобразование суммы в произведение.",
  ),
  lessons: [
    lesson(
      "reduction-formulas",
      ["Reduction formulas", "Բերման բանաձևեր", "Формулы приведения"],
      {
        en: ["Reduce the sine, cosine or tangent of π ± α, π/2 ± α, 3π/2 ± α and 2π ± α to a function of α", "Apply the rule: keep or change the function name, then put the sign of the original function", "Compute values of large angles by reducing them to an acute angle"],
        hy: ["π ± α, π/2 ± α, 3π/2 ± α և 2π ± α անկյունների սինուսը, կոսինուսը կամ տանգենսը բերել α-ի ֆունկցիայի", "Կիրառել կանոնը՝ պահել կամ փոխել ֆունկցիայի անունը, ապա դնել սկզբնական ֆունկցիայի նշանը", "Հաշվել մեծ անկյունների արժեքները՝ դրանք բերելով սուր անկյան"],
        ru: ["Приводить синус, косинус или тангенс углов π ± α, π/2 ± α, 3π/2 ± α и 2π ± α к функции угла α", "Применять правило: сохранить или сменить название функции, затем поставить знак исходной функции", "Вычислять значения больших углов, приводя их к острому углу"],
      },
      {
        en: `## The rule

To simplify $f(n \\cdot \\tfrac{\\pi}{2} \\pm \\alpha)$, where $f$ is sin, cos, tan or cot:

1. **Name.** If the angle is $\\pi \\pm \\alpha$ or $2\\pi \\pm \\alpha$ (a horizontal axis), keep the function. If it is $\\dfrac{\\pi}{2} \\pm \\alpha$ or $\\dfrac{3\\pi}{2} \\pm \\alpha$ (a vertical axis), change sin to cos, tan to cot, and back.
2. **Sign.** Pretend $\\alpha$ is a small acute angle, find the quarter of the original angle and take the sign of the **original** function there.

## The most used formulas

| Angle | $\\sin$ | $\\cos$ |
|---|---|---|
| $\\pi - \\alpha$ | $\\sin \\alpha$ | $-\\cos \\alpha$ |
| $\\pi + \\alpha$ | $-\\sin \\alpha$ | $-\\cos \\alpha$ |
| $\\dfrac{\\pi}{2} - \\alpha$ | $\\cos \\alpha$ | $\\sin \\alpha$ |
| $\\dfrac{\\pi}{2} + \\alpha$ | $\\cos \\alpha$ | $-\\sin \\alpha$ |
| $2\\pi - \\alpha$ | $-\\sin \\alpha$ | $\\cos \\alpha$ |

**Example 1.** $\\cos\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$. Vertical axis, so cos becomes sin. $\\dfrac{3\\pi}{2} + \\alpha$ is in IV, where cosine is positive. Answer: $\\sin \\alpha$.

**Example 2.** $\\tan(\\pi - \\alpha)$. Horizontal axis, tan stays. $\\pi - \\alpha$ is in II, where tangent is negative. Answer: $-\\tan \\alpha$.

## Computing values

**Example 3.** $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\dfrac12$.

**Example 4.** $\\cos \\dfrac{4\\pi}{3} = \\cos\\left(\\pi + \\dfrac{\\pi}{3}\\right) = -\\cos \\dfrac{\\pi}{3} = -\\dfrac12$.

**Example 5.** $\\sin \\dfrac{17\\pi}{6} = \\sin\\left(2\\pi + \\dfrac{5\\pi}{6}\\right) = \\sin \\dfrac{5\\pi}{6} = \\sin\\left(\\pi - \\dfrac{\\pi}{6}\\right) = \\dfrac12$.

### Exercises

1. Simplify: $\\sin(\\pi + \\alpha)$; $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$; $\\tan\\left(\\dfrac{3\\pi}{2} - \\alpha\\right)$.
2. Simplify: $\\cos(2\\pi - \\alpha)$; $\\sin\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$; $\\cot(\\pi + \\alpha)$.
3. Compute $\\cos 120^\\circ$; $\\sin 225^\\circ$; $\\tan 300^\\circ$.
4. Compute $\\sin \\dfrac{7\\pi}{6}$; $\\cos \\dfrac{5\\pi}{3}$.
5. Compute $\\cos \\dfrac{11\\pi}{4}$.
6. Simplify $\\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$.
7. Show that $\\sin 40^\\circ = \\cos 50^\\circ$.

### Answers

1. $-\\sin \\alpha$; $\\sin \\alpha$; $\\cot \\alpha$. 2. $\\cos \\alpha$; $-\\cos \\alpha$; $\\cot \\alpha$. 3. $-\\dfrac12$; $-\\dfrac{\\sqrt2}{2}$; $-\\sqrt3$. 4. $-\\dfrac12$; $\\dfrac12$. 5. $\\dfrac{11\\pi}{4} = 2\\pi + \\dfrac{3\\pi}{4}$, so the value is $-\\dfrac{\\sqrt2}{2}$. 6. $\\sin \\alpha - \\sin \\alpha = 0$. 7. $\\cos 50^\\circ = \\cos(90^\\circ - 40^\\circ) = \\sin 40^\\circ$.`,
        hy: `## Կանոնը

$f(n \\cdot \\tfrac{\\pi}{2} \\pm \\alpha)$ արտահայտությունը պարզեցնելու համար, որտեղ $f$-ը sin, cos, tg կամ ctg է․

1. **Անունը։** Եթե անկյունը $\\pi \\pm \\alpha$ կամ $2\\pi \\pm \\alpha$ է (հորիզոնական առանցք), ֆունկցիան պահում ենք։ Եթե $\\dfrac{\\pi}{2} \\pm \\alpha$ կամ $\\dfrac{3\\pi}{2} \\pm \\alpha$ է (ուղղաձիգ առանցք), sin-ը փոխում ենք cos-ի, tg-ն՝ ctg-ի, և հակառակը։
2. **Նշանը։** Համարում ենք $\\alpha$-ն փոքր սուր անկյուն, գտնում ենք սկզբնական անկյան քառորդը և վերցնում **սկզբնական** ֆունկցիայի նշանն այնտեղ։

## Ամենաօգտագործվող բանաձևերը

| Անկյուն | $\\sin$ | $\\cos$ |
|---|---|---|
| $\\pi - \\alpha$ | $\\sin \\alpha$ | $-\\cos \\alpha$ |
| $\\pi + \\alpha$ | $-\\sin \\alpha$ | $-\\cos \\alpha$ |
| $\\dfrac{\\pi}{2} - \\alpha$ | $\\cos \\alpha$ | $\\sin \\alpha$ |
| $\\dfrac{\\pi}{2} + \\alpha$ | $\\cos \\alpha$ | $-\\sin \\alpha$ |
| $2\\pi - \\alpha$ | $-\\sin \\alpha$ | $\\cos \\alpha$ |

**Օրինակ 1։** $\\cos\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$։ Ուղղաձիգ առանցք է, ուստի cos-ը դառնում է sin։ $\\dfrac{3\\pi}{2} + \\alpha$-ն IV քառորդում է, որտեղ կոսինուսը դրական է։ Պատասխան՝ $\\sin \\alpha$։

**Օրինակ 2։** $\\operatorname{tg}(\\pi - \\alpha)$։ Հորիզոնական առանցք է, tg-ն մնում է։ $\\pi - \\alpha$-ն II քառորդում է, որտեղ տանգենսը բացասական է։ Պատասխան՝ $-\\operatorname{tg} \\alpha$։

## Արժեքների հաշվում

**Օրինակ 3։** $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\dfrac12$։

**Օրինակ 4։** $\\cos \\dfrac{4\\pi}{3} = \\cos\\left(\\pi + \\dfrac{\\pi}{3}\\right) = -\\cos \\dfrac{\\pi}{3} = -\\dfrac12$։

**Օրինակ 5։** $\\sin \\dfrac{17\\pi}{6} = \\sin\\left(2\\pi + \\dfrac{5\\pi}{6}\\right) = \\sin \\dfrac{5\\pi}{6} = \\sin\\left(\\pi - \\dfrac{\\pi}{6}\\right) = \\dfrac12$։

### Վարժություններ

1. Պարզեցրեք՝ $\\sin(\\pi + \\alpha)$, $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$, $\\operatorname{tg}\\left(\\dfrac{3\\pi}{2} - \\alpha\\right)$։
2. Պարզեցրեք՝ $\\cos(2\\pi - \\alpha)$, $\\sin\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$, $\\operatorname{ctg}(\\pi + \\alpha)$։
3. Հաշվեք $\\cos 120^\\circ$, $\\sin 225^\\circ$, $\\operatorname{tg} 300^\\circ$։
4. Հաշվեք $\\sin \\dfrac{7\\pi}{6}$, $\\cos \\dfrac{5\\pi}{3}$։
5. Հաշվեք $\\cos \\dfrac{11\\pi}{4}$։
6. Պարզեցրեք $\\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$-ն։
7. Ցույց տվեք, որ $\\sin 40^\\circ = \\cos 50^\\circ$։

### Պատասխաններ

1. $-\\sin \\alpha$, $\\sin \\alpha$, $\\operatorname{ctg} \\alpha$։ 2. $\\cos \\alpha$, $-\\cos \\alpha$, $\\operatorname{ctg} \\alpha$։ 3. $-\\dfrac12$, $-\\dfrac{\\sqrt2}{2}$, $-\\sqrt3$։ 4. $-\\dfrac12$, $\\dfrac12$։ 5. $\\dfrac{11\\pi}{4} = 2\\pi + \\dfrac{3\\pi}{4}$, ուստի արժեքը $-\\dfrac{\\sqrt2}{2}$ է։ 6. $\\sin \\alpha - \\sin \\alpha = 0$։ 7. $\\cos 50^\\circ = \\cos(90^\\circ - 40^\\circ) = \\sin 40^\\circ$։`,
        ru: `## Правило

Чтобы упростить $f(n \\cdot \\tfrac{\\pi}{2} \\pm \\alpha)$, где $f$ — sin, cos, tg или ctg:

1. **Название.** Если угол $\\pi \\pm \\alpha$ или $2\\pi \\pm \\alpha$ (горизонтальная ось), функция сохраняется. Если $\\dfrac{\\pi}{2} \\pm \\alpha$ или $\\dfrac{3\\pi}{2} \\pm \\alpha$ (вертикальная ось), sin меняется на cos, tg на ctg и обратно.
2. **Знак.** Считаем $\\alpha$ малым острым углом, находим четверть исходного угла и берём знак **исходной** функции в ней.

## Самые нужные формулы

| Угол | $\\sin$ | $\\cos$ |
|---|---|---|
| $\\pi - \\alpha$ | $\\sin \\alpha$ | $-\\cos \\alpha$ |
| $\\pi + \\alpha$ | $-\\sin \\alpha$ | $-\\cos \\alpha$ |
| $\\dfrac{\\pi}{2} - \\alpha$ | $\\cos \\alpha$ | $\\sin \\alpha$ |
| $\\dfrac{\\pi}{2} + \\alpha$ | $\\cos \\alpha$ | $-\\sin \\alpha$ |
| $2\\pi - \\alpha$ | $-\\sin \\alpha$ | $\\cos \\alpha$ |

**Пример 1.** $\\cos\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$. Вертикальная ось — cos меняется на sin. $\\dfrac{3\\pi}{2} + \\alpha$ в IV четверти, где косинус положителен. Ответ: $\\sin \\alpha$.

**Пример 2.** $\\operatorname{tg}(\\pi - \\alpha)$. Горизонтальная ось — tg сохраняется. $\\pi - \\alpha$ во II четверти, где тангенс отрицателен. Ответ: $-\\operatorname{tg} \\alpha$.

## Вычисление значений

**Пример 3.** $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\dfrac12$.

**Пример 4.** $\\cos \\dfrac{4\\pi}{3} = \\cos\\left(\\pi + \\dfrac{\\pi}{3}\\right) = -\\cos \\dfrac{\\pi}{3} = -\\dfrac12$.

**Пример 5.** $\\sin \\dfrac{17\\pi}{6} = \\sin\\left(2\\pi + \\dfrac{5\\pi}{6}\\right) = \\sin \\dfrac{5\\pi}{6} = \\sin\\left(\\pi - \\dfrac{\\pi}{6}\\right) = \\dfrac12$.

### Упражнения

1. Упростите: $\\sin(\\pi + \\alpha)$; $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right)$; $\\operatorname{tg}\\left(\\dfrac{3\\pi}{2} - \\alpha\\right)$.
2. Упростите: $\\cos(2\\pi - \\alpha)$; $\\sin\\left(\\dfrac{3\\pi}{2} + \\alpha\\right)$; $\\operatorname{ctg}(\\pi + \\alpha)$.
3. Вычислите $\\cos 120^\\circ$; $\\sin 225^\\circ$; $\\operatorname{tg} 300^\\circ$.
4. Вычислите $\\sin \\dfrac{7\\pi}{6}$; $\\cos \\dfrac{5\\pi}{3}$.
5. Вычислите $\\cos \\dfrac{11\\pi}{4}$.
6. Упростите $\\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} + \\alpha\\right)$.
7. Покажите, что $\\sin 40^\\circ = \\cos 50^\\circ$.

### Ответы

1. $-\\sin \\alpha$; $\\sin \\alpha$; $\\operatorname{ctg} \\alpha$. 2. $\\cos \\alpha$; $-\\cos \\alpha$; $\\operatorname{ctg} \\alpha$. 3. $-\\dfrac12$; $-\\dfrac{\\sqrt2}{2}$; $-\\sqrt3$. 4. $-\\dfrac12$; $\\dfrac12$. 5. $\\dfrac{11\\pi}{4} = 2\\pi + \\dfrac{3\\pi}{4}$, значение $-\\dfrac{\\sqrt2}{2}$. 6. $\\sin \\alpha - \\sin \\alpha = 0$. 7. $\\cos 50^\\circ = \\cos(90^\\circ - 40^\\circ) = \\sin 40^\\circ$.`,
      },
      [
        q(
          t("sin(π − α) equals…", "sin(π − α)-ն հավասար է…", "sin(π − α) равен…"),
          [t("sin α", "sin α", "sin α"), t("−sin α", "−sin α", "−sin α"), t("cos α", "cos α", "cos α")],
          0,
        ),
        q(
          t("cos(π/2 + α) equals…", "cos(π/2 + α)-ն հավասար է…", "cos(π/2 + α) равен…"),
          [t("sin α", "sin α", "sin α"), t("−sin α", "−sin α", "−sin α"), t("−cos α", "−cos α", "−cos α")],
          1,
        ),
        q(
          t("For angles π ± α the function name…", "π ± α անկյունների դեպքում ֆունկցիայի անունը…", "Для углов π ± α название функции…"),
          [t("stays the same", "մնում է նույնը", "сохраняется"), t("changes", "փոխվում է", "меняется"), t("depends on α", "կախված է α-ից", "зависит от α")],
          0,
        ),
        q(
          t("cos 120° equals…", "cos 120°-ը հավասար է…", "cos 120° равен…"),
          [t("1/2", "1/2", "1/2"), t("−1/2", "−1/2", "−1/2"), t("−√3/2", "−√3/2", "−√3/2")],
          1,
        ),
        q(
          t("tan(π + α) equals…", "tg(π + α)-ն հավասար է…", "tg(π + α) равен…"),
          [t("tan α", "tg α", "tg α"), t("−tan α", "−tg α", "−tg α"), t("cot α", "ctg α", "ctg α")],
          0,
        ),
        q(
          t("sin 225° equals…", "sin 225°-ը հավասար է…", "sin 225° равен…"),
          [t("√2/2", "√2/2", "√2/2"), t("−√2/2", "−√2/2", "−√2/2"), t("−1/2", "−1/2", "−1/2")],
          1,
        ),
      ],
    ),
    lesson(
      "addition-formulas",
      ["Sine and cosine of a sum and a difference", "Գումարի և տարբերության սինուսն ու կոսինուսը", "Синус и косинус суммы и разности"],
      {
        en: ["State the formulas for sin(α ± β), cos(α ± β) and tan(α ± β)", "Compute exact values such as sin 75° and cos 15°", "Collapse expressions like sin α cos β + cos α sin β back into one function"],
        hy: ["Ձևակերպել sin(α ± β), cos(α ± β) և tg(α ± β) բանաձևերը", "Հաշվել ճշգրիտ արժեքներ, օրինակ՝ sin 75° և cos 15°", "sin α cos β + cos α sin β տիպի արտահայտությունները վերադարձնել մեկ ֆունկցիայի"],
        ru: ["Формулировать формулы sin(α ± β), cos(α ± β) и tg(α ± β)", "Вычислять точные значения, например sin 75° и cos 15°", "Сворачивать выражения вида sin α cos β + cos α sin β в одну функцию"],
      },
      {
        en: `## The formulas

$$\\cos(\\alpha - \\beta) = \\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$$

$$\\cos(\\alpha + \\beta) = \\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$$

$$\\sin(\\alpha + \\beta) = \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$$

$$\\sin(\\alpha - \\beta) = \\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta$$

$$\\tan(\\alpha \\pm \\beta) = \\frac{\\tan \\alpha \\pm \\tan \\beta}{1 \\mp \\tan \\alpha \\tan \\beta}$$

The first is proved with the distance between the points $P_\\alpha$ and $P_\\beta$ on the unit circle. The others follow from it with $\\beta \\to -\\beta$ and the reduction formulas.

**Memory aid.** For cosine the sign inside flips (cos of a sum has a minus). For sine the sign stays.

## Exact values

**Example 1.** $\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2} \\cdot \\dfrac12 = \\dfrac{\\sqrt6 + \\sqrt2}{4}$.

**Example 2.** $\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2} \\cdot \\dfrac12 = \\dfrac{\\sqrt6 + \\sqrt2}{4}$.

**Example 3.** $\\tan 15^\\circ = \\tan(45^\\circ - 30^\\circ) = \\dfrac{1 - \\frac{\\sqrt3}{3}}{1 + \\frac{\\sqrt3}{3}} = \\dfrac{3 - \\sqrt3}{3 + \\sqrt3} = 2 - \\sqrt3$.

## Collapsing

**Example 4.** $\\sin 50^\\circ \\cos 10^\\circ - \\cos 50^\\circ \\sin 10^\\circ = \\sin 40^\\circ$.

**Example 5.** $\\cos 3x \\cos x - \\sin 3x \\sin x = \\cos 4x$.

## With given values

**Example 6.** $\\sin \\alpha = \\dfrac35$, $\\cos \\beta = \\dfrac{5}{13}$, both angles acute. Then $\\cos \\alpha = \\dfrac45$, $\\sin \\beta = \\dfrac{12}{13}$ and

$$\\sin(\\alpha + \\beta) = \\frac35 \\cdot \\frac{5}{13} + \\frac45 \\cdot \\frac{12}{13} = \\frac{15 + 48}{65} = \\frac{63}{65}.$$

### Exercises

1. Compute $\\cos 75^\\circ$.
2. Compute $\\sin 15^\\circ$.
3. Compute $\\sin 20^\\circ \\cos 40^\\circ + \\cos 20^\\circ \\sin 40^\\circ$.
4. Simplify $\\cos 5x \\cos 2x + \\sin 5x \\sin 2x$.
5. Compute $\\tan 75^\\circ$.
6. With the data of Example 6, find $\\cos(\\alpha - \\beta)$.
7. Prove that $\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta) = 2\\sin \\alpha \\cos \\beta$.

### Answers

1. $\\dfrac{\\sqrt6 - \\sqrt2}{4}$. 2. $\\dfrac{\\sqrt6 - \\sqrt2}{4}$. 3. $\\sin 60^\\circ = \\dfrac{\\sqrt3}{2}$. 4. $\\cos 3x$. 5. $2 + \\sqrt3$. 6. $\\dfrac45 \\cdot \\dfrac{5}{13} + \\dfrac35 \\cdot \\dfrac{12}{13} = \\dfrac{56}{65}$. 7. Add the two formulas: the terms $\\cos \\alpha \\sin \\beta$ cancel.`,
        hy: `## Բանաձևերը

$$\\cos(\\alpha - \\beta) = \\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$$

$$\\cos(\\alpha + \\beta) = \\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$$

$$\\sin(\\alpha + \\beta) = \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$$

$$\\sin(\\alpha - \\beta) = \\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta$$

$$\\operatorname{tg}(\\alpha \\pm \\beta) = \\frac{\\operatorname{tg} \\alpha \\pm \\operatorname{tg} \\beta}{1 \\mp \\operatorname{tg} \\alpha \\operatorname{tg} \\beta}$$

Առաջինն ապացուցվում է միավոր շրջանագծի $P_\\alpha$ և $P_\\beta$ կետերի հեռավորության միջոցով։ Մյուսները ստացվում են դրանից՝ $\\beta$-ն $-\\beta$-ով փոխարինելով և բերման բանաձևերով։

**Հիշելու համար։** Կոսինուսի դեպքում նշանը ներսում փոխվում է (գումարի կոսինուսում մինուս է)։ Սինուսի դեպքում նշանը մնում է։

## Ճշգրիտ արժեքներ

**Օրինակ 1։** $\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2} \\cdot \\dfrac12 = \\dfrac{\\sqrt6 + \\sqrt2}{4}$։

**Օրինակ 2։** $\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2} \\cdot \\dfrac12 = \\dfrac{\\sqrt6 + \\sqrt2}{4}$։

**Օրինակ 3։** $\\operatorname{tg} 15^\\circ = \\operatorname{tg}(45^\\circ - 30^\\circ) = \\dfrac{1 - \\frac{\\sqrt3}{3}}{1 + \\frac{\\sqrt3}{3}} = \\dfrac{3 - \\sqrt3}{3 + \\sqrt3} = 2 - \\sqrt3$։

## Վերադարձում մեկ ֆունկցիայի

**Օրինակ 4։** $\\sin 50^\\circ \\cos 10^\\circ - \\cos 50^\\circ \\sin 10^\\circ = \\sin 40^\\circ$։

**Օրինակ 5։** $\\cos 3x \\cos x - \\sin 3x \\sin x = \\cos 4x$։

## Տրված արժեքներով

**Օրինակ 6։** $\\sin \\alpha = \\dfrac35$, $\\cos \\beta = \\dfrac{5}{13}$, երկու անկյուններն էլ սուր են։ Այդ դեպքում $\\cos \\alpha = \\dfrac45$, $\\sin \\beta = \\dfrac{12}{13}$ և

$$\\sin(\\alpha + \\beta) = \\frac35 \\cdot \\frac{5}{13} + \\frac45 \\cdot \\frac{12}{13} = \\frac{15 + 48}{65} = \\frac{63}{65}.$$

### Վարժություններ

1. Հաշվեք $\\cos 75^\\circ$-ը։
2. Հաշվեք $\\sin 15^\\circ$-ը։
3. Հաշվեք $\\sin 20^\\circ \\cos 40^\\circ + \\cos 20^\\circ \\sin 40^\\circ$-ը։
4. Պարզեցրեք $\\cos 5x \\cos 2x + \\sin 5x \\sin 2x$-ը։
5. Հաշվեք $\\operatorname{tg} 75^\\circ$-ը։
6. 6-րդ օրինակի տվյալներով գտեք $\\cos(\\alpha - \\beta)$-ն։
7. Ապացուցեք, որ $\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta) = 2\\sin \\alpha \\cos \\beta$։

### Պատասխաններ

1. $\\dfrac{\\sqrt6 - \\sqrt2}{4}$։ 2. $\\dfrac{\\sqrt6 - \\sqrt2}{4}$։ 3. $\\sin 60^\\circ = \\dfrac{\\sqrt3}{2}$։ 4. $\\cos 3x$։ 5. $2 + \\sqrt3$։ 6. $\\dfrac45 \\cdot \\dfrac{5}{13} + \\dfrac35 \\cdot \\dfrac{12}{13} = \\dfrac{56}{65}$։ 7. Գումարեք երկու բանաձևերը՝ $\\cos \\alpha \\sin \\beta$ անդամները կրճատվում են։`,
        ru: `## Формулы

$$\\cos(\\alpha - \\beta) = \\cos \\alpha \\cos \\beta + \\sin \\alpha \\sin \\beta$$

$$\\cos(\\alpha + \\beta) = \\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$$

$$\\sin(\\alpha + \\beta) = \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$$

$$\\sin(\\alpha - \\beta) = \\sin \\alpha \\cos \\beta - \\cos \\alpha \\sin \\beta$$

$$\\operatorname{tg}(\\alpha \\pm \\beta) = \\frac{\\operatorname{tg} \\alpha \\pm \\operatorname{tg} \\beta}{1 \\mp \\operatorname{tg} \\alpha \\operatorname{tg} \\beta}$$

Первая доказывается через расстояние между точками $P_\\alpha$ и $P_\\beta$ единичной окружности. Остальные следуют из неё заменой $\\beta$ на $-\\beta$ и формулами приведения.

**Как запомнить.** У косинуса знак внутри меняется (в косинусе суммы минус). У синуса знак сохраняется.

## Точные значения

**Пример 1.** $\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2} \\cdot \\dfrac12 = \\dfrac{\\sqrt6 + \\sqrt2}{4}$.

**Пример 2.** $\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2} \\cdot \\dfrac12 = \\dfrac{\\sqrt6 + \\sqrt2}{4}$.

**Пример 3.** $\\operatorname{tg} 15^\\circ = \\operatorname{tg}(45^\\circ - 30^\\circ) = \\dfrac{1 - \\frac{\\sqrt3}{3}}{1 + \\frac{\\sqrt3}{3}} = \\dfrac{3 - \\sqrt3}{3 + \\sqrt3} = 2 - \\sqrt3$.

## Сворачивание

**Пример 4.** $\\sin 50^\\circ \\cos 10^\\circ - \\cos 50^\\circ \\sin 10^\\circ = \\sin 40^\\circ$.

**Пример 5.** $\\cos 3x \\cos x - \\sin 3x \\sin x = \\cos 4x$.

## По данным значениям

**Пример 6.** $\\sin \\alpha = \\dfrac35$, $\\cos \\beta = \\dfrac{5}{13}$, оба угла острые. Тогда $\\cos \\alpha = \\dfrac45$, $\\sin \\beta = \\dfrac{12}{13}$ и

$$\\sin(\\alpha + \\beta) = \\frac35 \\cdot \\frac{5}{13} + \\frac45 \\cdot \\frac{12}{13} = \\frac{15 + 48}{65} = \\frac{63}{65}.$$

### Упражнения

1. Вычислите $\\cos 75^\\circ$.
2. Вычислите $\\sin 15^\\circ$.
3. Вычислите $\\sin 20^\\circ \\cos 40^\\circ + \\cos 20^\\circ \\sin 40^\\circ$.
4. Упростите $\\cos 5x \\cos 2x + \\sin 5x \\sin 2x$.
5. Вычислите $\\operatorname{tg} 75^\\circ$.
6. По данным примера 6 найдите $\\cos(\\alpha - \\beta)$.
7. Докажите, что $\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta) = 2\\sin \\alpha \\cos \\beta$.

### Ответы

1. $\\dfrac{\\sqrt6 - \\sqrt2}{4}$. 2. $\\dfrac{\\sqrt6 - \\sqrt2}{4}$. 3. $\\sin 60^\\circ = \\dfrac{\\sqrt3}{2}$. 4. $\\cos 3x$. 5. $2 + \\sqrt3$. 6. $\\dfrac45 \\cdot \\dfrac{5}{13} + \\dfrac35 \\cdot \\dfrac{12}{13} = \\dfrac{56}{65}$. 7. Сложите две формулы: слагаемые $\\cos \\alpha \\sin \\beta$ взаимно уничтожаются.`,
      },
      [
        q(
          t("cos(α + β) equals…", "cos(α + β)-ն հավասար է…", "cos(α + β) равен…"),
          [t("cos α cos β − sin α sin β", "cos α cos β − sin α sin β", "cos α cos β − sin α sin β"), t("cos α cos β + sin α sin β", "cos α cos β + sin α sin β", "cos α cos β + sin α sin β"), t("sin α cos β + cos α sin β", "sin α cos β + cos α sin β", "sin α cos β + cos α sin β")],
          0,
        ),
        q(
          t("sin(α − β) equals…", "sin(α − β)-ն հավասար է…", "sin(α − β) равен…"),
          [t("sin α cos β + cos α sin β", "sin α cos β + cos α sin β", "sin α cos β + cos α sin β"), t("sin α cos β − cos α sin β", "sin α cos β − cos α sin β", "sin α cos β − cos α sin β"), t("cos α cos β − sin α sin β", "cos α cos β − sin α sin β", "cos α cos β − sin α sin β")],
          1,
        ),
        q(
          t("sin 75° equals…", "sin 75°-ը հավասար է…", "sin 75° равен…"),
          [t("(√6 + √2)/4", "(√6 + √2)/4", "(√6 + √2)/4"), t("(√6 − √2)/4", "(√6 − √2)/4", "(√6 − √2)/4"), t("√3/2", "√3/2", "√3/2")],
          0,
        ),
        q(
          t("cos 3x cos x − sin 3x sin x equals…", "cos 3x cos x − sin 3x sin x-ը հավասար է…", "cos 3x cos x − sin 3x sin x равно…"),
          [t("cos 2x", "cos 2x", "cos 2x"), t("cos 4x", "cos 4x", "cos 4x"), t("sin 4x", "sin 4x", "sin 4x")],
          1,
        ),
        q(
          t("tan 15° equals…", "tg 15°-ը հավասար է…", "tg 15° равен…"),
          [t("2 + √3", "2 + √3", "2 + √3"), t("2 − √3", "2 − √3", "2 − √3"), t("√3 − 1", "√3 − 1", "√3 − 1")],
          1,
        ),
        q(
          t("sin 20° cos 40° + cos 20° sin 40° equals…", "sin 20° cos 40° + cos 20° sin 40°-ը հավասար է…", "sin 20° cos 40° + cos 20° sin 40° равно…"),
          [t("sin 20°", "sin 20°", "sin 20°"), t("√3/2", "√3/2", "√3/2"), t("1/2", "1/2", "1/2")],
          1,
        ),
      ],
    ),
    lesson(
      "double-angle",
      ["Double-angle formulas", "Կրկնակի անկյան բանաձևեր", "Формулы двойного угла"],
      {
        en: ["Derive sin 2α, cos 2α and tan 2α from the addition formulas", "Use the three forms of cos 2α", "Compute values and simplify expressions with double angles"],
        hy: ["Գումարի բանաձևերից դուրս բերել sin 2α-ն, cos 2α-ն և tg 2α-ն", "Օգտվել cos 2α-ի երեք տեսքերից", "Հաշվել արժեքներ և պարզեցնել կրկնակի անկյուններով արտահայտություններ"],
        ru: ["Выводить sin 2α, cos 2α и tg 2α из формул сложения", "Использовать три вида формулы cos 2α", "Вычислять значения и упрощать выражения с двойными углами"],
      },
      {
        en: `## The formulas

Put $\\beta = \\alpha$ in the addition formulas:

$$\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$$

$$\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$$

$$\\tan 2\\alpha = \\frac{2\\tan \\alpha}{1 - \\tan^2 \\alpha}$$

The last two forms of $\\cos 2\\alpha$ come from $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.

## Computing

**Example 1.** $\\sin \\alpha = \\dfrac35$, $\\alpha$ acute. Then $\\cos \\alpha = \\dfrac45$ and

$$\\sin 2\\alpha = 2 \\cdot \\frac35 \\cdot \\frac45 = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2 \\cdot \\frac{9}{25} = \\frac{7}{25}.$$

**Example 2.** $2\\sin 15^\\circ \\cos 15^\\circ = \\sin 30^\\circ = \\dfrac12$.

**Example 3.** $\\cos^2 \\dfrac{\\pi}{8} - \\sin^2 \\dfrac{\\pi}{8} = \\cos \\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}$.

## Simplifying

**Example 4.** $\\dfrac{\\sin 2\\alpha}{\\sin \\alpha} = \\dfrac{2\\sin \\alpha \\cos \\alpha}{\\sin \\alpha} = 2\\cos \\alpha$.

**Example 5.** $\\dfrac{\\cos 2\\alpha}{\\cos \\alpha - \\sin \\alpha} = \\dfrac{(\\cos \\alpha - \\sin \\alpha)(\\cos \\alpha + \\sin \\alpha)}{\\cos \\alpha - \\sin \\alpha} = \\cos \\alpha + \\sin \\alpha$.

**Example 6.** $(\\sin \\alpha - \\cos \\alpha)^2 = 1 - \\sin 2\\alpha$.

## Not only 2α

The formulas work for any angle and its double: $\\sin 4x = 2\\sin 2x \\cos 2x$, $\\cos x = 1 - 2\\sin^2 \\dfrac{x}{2}$.

### Exercises

1. Compute $2\\sin 22.5^\\circ \\cos 22.5^\\circ$.
2. Compute $1 - 2\\sin^2 75^\\circ$.
3. $\\cos \\alpha = -\\dfrac{5}{13}$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Find $\\sin 2\\alpha$ and $\\cos 2\\alpha$.
4. $\\tan \\alpha = 3$. Find $\\tan 2\\alpha$.
5. Simplify $\\dfrac{\\sin 2\\alpha}{1 + \\cos 2\\alpha}$.
6. Simplify $\\cos^4 \\alpha - \\sin^4 \\alpha$.
7. Write $\\sin 6x$ through functions of $3x$.

### Answers

1. $\\sin 45^\\circ = \\dfrac{\\sqrt2}{2}$. 2. $\\cos 150^\\circ = -\\dfrac{\\sqrt3}{2}$. 3. $\\sin \\alpha = \\dfrac{12}{13}$; $\\sin 2\\alpha = -\\dfrac{120}{169}$; $\\cos 2\\alpha = \\dfrac{25 - 144}{169} = -\\dfrac{119}{169}$. 4. $\\dfrac{6}{1 - 9} = -\\dfrac34$. 5. $\\dfrac{2\\sin \\alpha \\cos \\alpha}{2\\cos^2 \\alpha} = \\tan \\alpha$. 6. $(\\cos^2 \\alpha - \\sin^2 \\alpha)(\\cos^2 \\alpha + \\sin^2 \\alpha) = \\cos 2\\alpha$. 7. $2\\sin 3x \\cos 3x$.`,
        hy: `## Բանաձևերը

Գումարի բանաձևերում տեղադրենք $\\beta = \\alpha$․

$$\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$$

$$\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$$

$$\\operatorname{tg} 2\\alpha = \\frac{2\\operatorname{tg} \\alpha}{1 - \\operatorname{tg}^2 \\alpha}$$

$\\cos 2\\alpha$-ի վերջին երկու տեսքերը ստացվում են $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ նույնությունից։

## Հաշվում

**Օրինակ 1։** $\\sin \\alpha = \\dfrac35$, $\\alpha$-ն սուր է։ Այդ դեպքում $\\cos \\alpha = \\dfrac45$ և

$$\\sin 2\\alpha = 2 \\cdot \\frac35 \\cdot \\frac45 = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2 \\cdot \\frac{9}{25} = \\frac{7}{25}.$$

**Օրինակ 2։** $2\\sin 15^\\circ \\cos 15^\\circ = \\sin 30^\\circ = \\dfrac12$։

**Օրինակ 3։** $\\cos^2 \\dfrac{\\pi}{8} - \\sin^2 \\dfrac{\\pi}{8} = \\cos \\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}$։

## Պարզեցում

**Օրինակ 4։** $\\dfrac{\\sin 2\\alpha}{\\sin \\alpha} = \\dfrac{2\\sin \\alpha \\cos \\alpha}{\\sin \\alpha} = 2\\cos \\alpha$։

**Օրինակ 5։** $\\dfrac{\\cos 2\\alpha}{\\cos \\alpha - \\sin \\alpha} = \\dfrac{(\\cos \\alpha - \\sin \\alpha)(\\cos \\alpha + \\sin \\alpha)}{\\cos \\alpha - \\sin \\alpha} = \\cos \\alpha + \\sin \\alpha$։

**Օրինակ 6։** $(\\sin \\alpha - \\cos \\alpha)^2 = 1 - \\sin 2\\alpha$։

## Ոչ միայն 2α

Բանաձևերը ճիշտ են ցանկացած անկյան և նրա կրկնապատիկի համար՝ $\\sin 4x = 2\\sin 2x \\cos 2x$, $\\cos x = 1 - 2\\sin^2 \\dfrac{x}{2}$։

### Վարժություններ

1. Հաշվեք $2\\sin 22{,}5^\\circ \\cos 22{,}5^\\circ$-ը։
2. Հաշվեք $1 - 2\\sin^2 75^\\circ$-ը։
3. $\\cos \\alpha = -\\dfrac{5}{13}$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$։ Գտեք $\\sin 2\\alpha$-ն և $\\cos 2\\alpha$-ն։
4. $\\operatorname{tg} \\alpha = 3$։ Գտեք $\\operatorname{tg} 2\\alpha$-ն։
5. Պարզեցրեք $\\dfrac{\\sin 2\\alpha}{1 + \\cos 2\\alpha}$-ն։
6. Պարզեցրեք $\\cos^4 \\alpha - \\sin^4 \\alpha$-ն։
7. Արտահայտեք $\\sin 6x$-ը $3x$-ի ֆունկցիաներով։

### Պատասխաններ

1. $\\sin 45^\\circ = \\dfrac{\\sqrt2}{2}$։ 2. $\\cos 150^\\circ = -\\dfrac{\\sqrt3}{2}$։ 3. $\\sin \\alpha = \\dfrac{12}{13}$, $\\sin 2\\alpha = -\\dfrac{120}{169}$, $\\cos 2\\alpha = \\dfrac{25 - 144}{169} = -\\dfrac{119}{169}$։ 4. $\\dfrac{6}{1 - 9} = -\\dfrac34$։ 5. $\\dfrac{2\\sin \\alpha \\cos \\alpha}{2\\cos^2 \\alpha} = \\operatorname{tg} \\alpha$։ 6. $(\\cos^2 \\alpha - \\sin^2 \\alpha)(\\cos^2 \\alpha + \\sin^2 \\alpha) = \\cos 2\\alpha$։ 7. $2\\sin 3x \\cos 3x$։`,
        ru: `## Формулы

Положим $\\beta = \\alpha$ в формулах сложения:

$$\\sin 2\\alpha = 2\\sin \\alpha \\cos \\alpha$$

$$\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$$

$$\\operatorname{tg} 2\\alpha = \\frac{2\\operatorname{tg} \\alpha}{1 - \\operatorname{tg}^2 \\alpha}$$

Два последних вида $\\cos 2\\alpha$ получаются из $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.

## Вычисление

**Пример 1.** $\\sin \\alpha = \\dfrac35$, $\\alpha$ — острый. Тогда $\\cos \\alpha = \\dfrac45$ и

$$\\sin 2\\alpha = 2 \\cdot \\frac35 \\cdot \\frac45 = \\frac{24}{25}, \\qquad \\cos 2\\alpha = 1 - 2 \\cdot \\frac{9}{25} = \\frac{7}{25}.$$

**Пример 2.** $2\\sin 15^\\circ \\cos 15^\\circ = \\sin 30^\\circ = \\dfrac12$.

**Пример 3.** $\\cos^2 \\dfrac{\\pi}{8} - \\sin^2 \\dfrac{\\pi}{8} = \\cos \\dfrac{\\pi}{4} = \\dfrac{\\sqrt2}{2}$.

## Упрощение

**Пример 4.** $\\dfrac{\\sin 2\\alpha}{\\sin \\alpha} = \\dfrac{2\\sin \\alpha \\cos \\alpha}{\\sin \\alpha} = 2\\cos \\alpha$.

**Пример 5.** $\\dfrac{\\cos 2\\alpha}{\\cos \\alpha - \\sin \\alpha} = \\dfrac{(\\cos \\alpha - \\sin \\alpha)(\\cos \\alpha + \\sin \\alpha)}{\\cos \\alpha - \\sin \\alpha} = \\cos \\alpha + \\sin \\alpha$.

**Пример 6.** $(\\sin \\alpha - \\cos \\alpha)^2 = 1 - \\sin 2\\alpha$.

## Не только 2α

Формулы верны для любого угла и его удвоенного: $\\sin 4x = 2\\sin 2x \\cos 2x$, $\\cos x = 1 - 2\\sin^2 \\dfrac{x}{2}$.

### Упражнения

1. Вычислите $2\\sin 22{,}5^\\circ \\cos 22{,}5^\\circ$.
2. Вычислите $1 - 2\\sin^2 75^\\circ$.
3. $\\cos \\alpha = -\\dfrac{5}{13}$, $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Найдите $\\sin 2\\alpha$ и $\\cos 2\\alpha$.
4. $\\operatorname{tg} \\alpha = 3$. Найдите $\\operatorname{tg} 2\\alpha$.
5. Упростите $\\dfrac{\\sin 2\\alpha}{1 + \\cos 2\\alpha}$.
6. Упростите $\\cos^4 \\alpha - \\sin^4 \\alpha$.
7. Выразите $\\sin 6x$ через функции угла $3x$.

### Ответы

1. $\\sin 45^\\circ = \\dfrac{\\sqrt2}{2}$. 2. $\\cos 150^\\circ = -\\dfrac{\\sqrt3}{2}$. 3. $\\sin \\alpha = \\dfrac{12}{13}$; $\\sin 2\\alpha = -\\dfrac{120}{169}$; $\\cos 2\\alpha = \\dfrac{25 - 144}{169} = -\\dfrac{119}{169}$. 4. $\\dfrac{6}{1 - 9} = -\\dfrac34$. 5. $\\dfrac{2\\sin \\alpha \\cos \\alpha}{2\\cos^2 \\alpha} = \\operatorname{tg} \\alpha$. 6. $(\\cos^2 \\alpha - \\sin^2 \\alpha)(\\cos^2 \\alpha + \\sin^2 \\alpha) = \\cos 2\\alpha$. 7. $2\\sin 3x \\cos 3x$.`,
      },
      [
        q(
          t("sin 2α equals…", "sin 2α-ն հավասար է…", "sin 2α равен…"),
          [t("2 sin α", "2 sin α", "2 sin α"), t("2 sin α cos α", "2 sin α cos α", "2 sin α cos α"), t("sin²α − cos²α", "sin²α − cos²α", "sin²α − cos²α")],
          1,
        ),
        q(
          t("Which is NOT a form of cos 2α?", "Ո՞րը cos 2α-ի տեսք ՉԷ", "Что НЕ является видом cos 2α?"),
          [t("1 − 2sin²α", "1 − 2sin²α", "1 − 2sin²α"), t("2cos²α − 1", "2cos²α − 1", "2cos²α − 1"), t("1 − 2cos²α", "1 − 2cos²α", "1 − 2cos²α")],
          2,
        ),
        q(
          t("2 sin 15° cos 15° equals…", "2 sin 15° cos 15°-ը հավասար է…", "2 sin 15° cos 15° равно…"),
          [t("1/2", "1/2", "1/2"), t("√3/2", "√3/2", "√3/2"), t("1/4", "1/4", "1/4")],
          0,
        ),
        q(
          t("cos²α − sin²α equals…", "cos²α − sin²α-ն հավասար է…", "cos²α − sin²α равно…"),
          [t("1", "1", "1"), t("cos 2α", "cos 2α", "cos 2α"), t("sin 2α", "sin 2α", "sin 2α")],
          1,
        ),
        q(
          t("tan α = 3. Then tan 2α equals…", "tg α = 3։ Այդ դեպքում tg 2α-ն…", "tg α = 3. Тогда tg 2α равен…"),
          [t("6", "6", "6"), t("−3/4", "−3/4", "−3/4"), t("3/4", "3/4", "3/4")],
          1,
        ),
        q(
          t("sin 2α / sin α simplifies to…", "sin 2α / sin α-ն պարզեցվում է…", "sin 2α / sin α упрощается до…"),
          [t("2", "2", "2"), t("2 cos α", "2 cos α", "2 cos α"), t("cos α", "cos α", "cos α")],
          1,
        ),
      ],
    ),
    lesson(
      "half-angle",
      ["Half-angle and power-reduction formulas", "Կես անկյան և աստիճանի իջեցման բանաձևեր", "Формулы половинного угла и понижения степени"],
      {
        en: ["Derive sin²α and cos²α through cos 2α (power reduction)", "Find sin(α/2), cos(α/2) and tan(α/2) and choose the correct sign", "Express sin α, cos α and tan α through t = tan(α/2)"],
        hy: ["sin²α-ն և cos²α-ն արտահայտել cos 2α-ով (աստիճանի իջեցում)", "Գտնել sin(α/2)-ը, cos(α/2)-ը և tg(α/2)-ը և ընտրել ճիշտ նշանը", "sin α-ն, cos α-ն և tg α-ն արտահայտել t = tg(α/2)-ով"],
        ru: ["Выражать sin²α и cos²α через cos 2α (понижение степени)", "Находить sin(α/2), cos(α/2) и tg(α/2) и выбирать правильный знак", "Выражать sin α, cos α и tg α через t = tg(α/2)"],
      },
      {
        en: `## Power reduction

From $\\cos 2\\alpha = 1 - 2\\sin^2 \\alpha = 2\\cos^2 \\alpha - 1$:

$$\\sin^2 \\alpha = \\frac{1 - \\cos 2\\alpha}{2}, \\qquad \\cos^2 \\alpha = \\frac{1 + \\cos 2\\alpha}{2}.$$

These turn a square into a first power of a double angle. They are used a lot in equations and later in integrals.

## Half angle

Replace $\\alpha$ by $\\dfrac{\\alpha}{2}$:

$$\\sin^2 \\frac{\\alpha}{2} = \\frac{1 - \\cos \\alpha}{2}, \\qquad \\cos^2 \\frac{\\alpha}{2} = \\frac{1 + \\cos \\alpha}{2}, \\qquad \\tan \\frac{\\alpha}{2} = \\frac{\\sin \\alpha}{1 + \\cos \\alpha} = \\frac{1 - \\cos \\alpha}{\\sin \\alpha}.$$

The sign of $\\sin \\dfrac{\\alpha}{2}$ or $\\cos \\dfrac{\\alpha}{2}$ is chosen by the quarter of $\\dfrac{\\alpha}{2}$, not of $\\alpha$.

**Example 1.** $\\cos 15^\\circ = \\sqrt{\\dfrac{1 + \\cos 30^\\circ}{2}} = \\sqrt{\\dfrac{2 + \\sqrt3}{4}} = \\dfrac{\\sqrt{2 + \\sqrt3}}{2}$ (positive, since $15^\\circ$ is acute).

**Example 2.** $\\tan \\dfrac{\\pi}{8} = \\dfrac{1 - \\cos \\frac{\\pi}{4}}{\\sin \\frac{\\pi}{4}} = \\dfrac{1 - \\frac{\\sqrt2}{2}}{\\frac{\\sqrt2}{2}} = \\sqrt2 - 1$.

**Example 3.** $\\cos \\alpha = -\\dfrac{7}{25}$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Then $\\dfrac{\\pi}{2} < \\dfrac{\\alpha}{2} < \\dfrac{3\\pi}{4}$ (quarter II), so $\\sin \\dfrac{\\alpha}{2} > 0$:

$$\\sin \\frac{\\alpha}{2} = \\sqrt{\\frac{1 + \\frac{7}{25}}{2}} = \\sqrt{\\frac{16}{25}} = \\frac45.$$

## Through the tangent of the half angle

With $t = \\tan \\dfrac{\\alpha}{2}$:

$$\\sin \\alpha = \\frac{2t}{1 + t^2}, \\qquad \\cos \\alpha = \\frac{1 - t^2}{1 + t^2}, \\qquad \\tan \\alpha = \\frac{2t}{1 - t^2}.$$

**Example 4.** $\\tan \\dfrac{\\alpha}{2} = 2$: $\\sin \\alpha = \\dfrac45$, $\\cos \\alpha = -\\dfrac35$.

### Exercises

1. Write $\\cos^2 3x$ without a square.
2. Compute $\\sin 22.5^\\circ$.
3. Compute $\\cos^2 \\dfrac{\\pi}{12} - \\dfrac12$ using power reduction.
4. $\\cos \\alpha = 0.6$, $0 < \\alpha < \\dfrac{\\pi}{2}$. Find $\\cos \\dfrac{\\alpha}{2}$ and $\\tan \\dfrac{\\alpha}{2}$.
5. $\\tan \\dfrac{\\alpha}{2} = \\dfrac12$. Find $\\sin \\alpha$ and $\\cos \\alpha$.
6. Simplify $\\dfrac{1 - \\cos 2x}{1 + \\cos 2x}$.
7. Prove that $\\sin^4 x + \\cos^4 x = 1 - \\dfrac12 \\sin^2 2x$.

### Answers

1. $\\dfrac{1 + \\cos 6x}{2}$. 2. $\\sqrt{\\dfrac{1 - \\frac{\\sqrt2}{2}}{2}} = \\dfrac{\\sqrt{2 - \\sqrt2}}{2}$. 3. $\\dfrac{1 + \\cos \\frac{\\pi}{6}}{2} - \\dfrac12 = \\dfrac{\\sqrt3}{4}$. 4. $\\cos \\dfrac{\\alpha}{2} = \\sqrt{0.8} = \\dfrac{2\\sqrt5}{5}$; $\\sin \\alpha = 0.8$, $\\tan \\dfrac{\\alpha}{2} = \\dfrac{0.8}{1.6} = \\dfrac12$. 5. $\\sin \\alpha = \\dfrac45$, $\\cos \\alpha = \\dfrac35$. 6. $\\tan^2 x$. 7. $\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - \\dfrac12 \\sin^2 2x$.`,
        hy: `## Աստիճանի իջեցում

$\\cos 2\\alpha = 1 - 2\\sin^2 \\alpha = 2\\cos^2 \\alpha - 1$ բանաձևից՝

$$\\sin^2 \\alpha = \\frac{1 - \\cos 2\\alpha}{2}, \\qquad \\cos^2 \\alpha = \\frac{1 + \\cos 2\\alpha}{2}.$$

Սրանք քառակուսին վերածում են կրկնակի անկյան առաջին աստիճանի։ Դրանք շատ են օգտագործվում հավասարումներում, իսկ հետագայում՝ ինտեգրալներում։

## Կես անկյուն

$\\alpha$-ն փոխարինենք $\\dfrac{\\alpha}{2}$-ով․

$$\\sin^2 \\frac{\\alpha}{2} = \\frac{1 - \\cos \\alpha}{2}, \\qquad \\cos^2 \\frac{\\alpha}{2} = \\frac{1 + \\cos \\alpha}{2}, \\qquad \\operatorname{tg} \\frac{\\alpha}{2} = \\frac{\\sin \\alpha}{1 + \\cos \\alpha} = \\frac{1 - \\cos \\alpha}{\\sin \\alpha}.$$

$\\sin \\dfrac{\\alpha}{2}$-ի կամ $\\cos \\dfrac{\\alpha}{2}$-ի նշանն ընտրվում է ըստ $\\dfrac{\\alpha}{2}$-ի քառորդի, ոչ թե $\\alpha$-ի։

**Օրինակ 1։** $\\cos 15^\\circ = \\sqrt{\\dfrac{1 + \\cos 30^\\circ}{2}} = \\sqrt{\\dfrac{2 + \\sqrt3}{4}} = \\dfrac{\\sqrt{2 + \\sqrt3}}{2}$ (դրական, քանի որ $15^\\circ$-ը սուր է)։

**Օրինակ 2։** $\\operatorname{tg} \\dfrac{\\pi}{8} = \\dfrac{1 - \\cos \\frac{\\pi}{4}}{\\sin \\frac{\\pi}{4}} = \\dfrac{1 - \\frac{\\sqrt2}{2}}{\\frac{\\sqrt2}{2}} = \\sqrt2 - 1$։

**Օրինակ 3։** $\\cos \\alpha = -\\dfrac{7}{25}$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$։ Այդ դեպքում $\\dfrac{\\pi}{2} < \\dfrac{\\alpha}{2} < \\dfrac{3\\pi}{4}$ (II քառորդ), ուստի $\\sin \\dfrac{\\alpha}{2} > 0$․

$$\\sin \\frac{\\alpha}{2} = \\sqrt{\\frac{1 + \\frac{7}{25}}{2}} = \\sqrt{\\frac{16}{25}} = \\frac45.$$

## Կես անկյան տանգենսով

$t = \\operatorname{tg} \\dfrac{\\alpha}{2}$ նշանակմամբ՝

$$\\sin \\alpha = \\frac{2t}{1 + t^2}, \\qquad \\cos \\alpha = \\frac{1 - t^2}{1 + t^2}, \\qquad \\operatorname{tg} \\alpha = \\frac{2t}{1 - t^2}.$$

**Օրինակ 4։** $\\operatorname{tg} \\dfrac{\\alpha}{2} = 2$՝ $\\sin \\alpha = \\dfrac45$, $\\cos \\alpha = -\\dfrac35$։

### Վարժություններ

1. Գրեք $\\cos^2 3x$-ն առանց քառակուսու։
2. Հաշվեք $\\sin 22{,}5^\\circ$-ը։
3. Աստիճանի իջեցմամբ հաշվեք $\\cos^2 \\dfrac{\\pi}{12} - \\dfrac12$-ը։
4. $\\cos \\alpha = 0{,}6$, $0 < \\alpha < \\dfrac{\\pi}{2}$։ Գտեք $\\cos \\dfrac{\\alpha}{2}$-ը և $\\operatorname{tg} \\dfrac{\\alpha}{2}$-ը։
5. $\\operatorname{tg} \\dfrac{\\alpha}{2} = \\dfrac12$։ Գտեք $\\sin \\alpha$-ն և $\\cos \\alpha$-ն։
6. Պարզեցրեք $\\dfrac{1 - \\cos 2x}{1 + \\cos 2x}$-ը։
7. Ապացուցեք, որ $\\sin^4 x + \\cos^4 x = 1 - \\dfrac12 \\sin^2 2x$։

### Պատասխաններ

1. $\\dfrac{1 + \\cos 6x}{2}$։ 2. $\\sqrt{\\dfrac{1 - \\frac{\\sqrt2}{2}}{2}} = \\dfrac{\\sqrt{2 - \\sqrt2}}{2}$։ 3. $\\dfrac{1 + \\cos \\frac{\\pi}{6}}{2} - \\dfrac12 = \\dfrac{\\sqrt3}{4}$։ 4. $\\cos \\dfrac{\\alpha}{2} = \\sqrt{0{,}8} = \\dfrac{2\\sqrt5}{5}$, $\\sin \\alpha = 0{,}8$, $\\operatorname{tg} \\dfrac{\\alpha}{2} = \\dfrac{0{,}8}{1{,}6} = \\dfrac12$։ 5. $\\sin \\alpha = \\dfrac45$, $\\cos \\alpha = \\dfrac35$։ 6. $\\operatorname{tg}^2 x$։ 7. $\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - \\dfrac12 \\sin^2 2x$։`,
        ru: `## Понижение степени

Из $\\cos 2\\alpha = 1 - 2\\sin^2 \\alpha = 2\\cos^2 \\alpha - 1$:

$$\\sin^2 \\alpha = \\frac{1 - \\cos 2\\alpha}{2}, \\qquad \\cos^2 \\alpha = \\frac{1 + \\cos 2\\alpha}{2}.$$

Эти формулы превращают квадрат в первую степень функции двойного угла. Они часто нужны в уравнениях, а позже — в интегралах.

## Половинный угол

Заменим $\\alpha$ на $\\dfrac{\\alpha}{2}$:

$$\\sin^2 \\frac{\\alpha}{2} = \\frac{1 - \\cos \\alpha}{2}, \\qquad \\cos^2 \\frac{\\alpha}{2} = \\frac{1 + \\cos \\alpha}{2}, \\qquad \\operatorname{tg} \\frac{\\alpha}{2} = \\frac{\\sin \\alpha}{1 + \\cos \\alpha} = \\frac{1 - \\cos \\alpha}{\\sin \\alpha}.$$

Знак $\\sin \\dfrac{\\alpha}{2}$ или $\\cos \\dfrac{\\alpha}{2}$ выбирают по четверти угла $\\dfrac{\\alpha}{2}$, а не $\\alpha$.

**Пример 1.** $\\cos 15^\\circ = \\sqrt{\\dfrac{1 + \\cos 30^\\circ}{2}} = \\sqrt{\\dfrac{2 + \\sqrt3}{4}} = \\dfrac{\\sqrt{2 + \\sqrt3}}{2}$ (положителен, так как $15^\\circ$ — острый угол).

**Пример 2.** $\\operatorname{tg} \\dfrac{\\pi}{8} = \\dfrac{1 - \\cos \\frac{\\pi}{4}}{\\sin \\frac{\\pi}{4}} = \\dfrac{1 - \\frac{\\sqrt2}{2}}{\\frac{\\sqrt2}{2}} = \\sqrt2 - 1$.

**Пример 3.** $\\cos \\alpha = -\\dfrac{7}{25}$, $\\pi < \\alpha < \\dfrac{3\\pi}{2}$. Тогда $\\dfrac{\\pi}{2} < \\dfrac{\\alpha}{2} < \\dfrac{3\\pi}{4}$ (II четверть), поэтому $\\sin \\dfrac{\\alpha}{2} > 0$:

$$\\sin \\frac{\\alpha}{2} = \\sqrt{\\frac{1 + \\frac{7}{25}}{2}} = \\sqrt{\\frac{16}{25}} = \\frac45.$$

## Через тангенс половинного угла

При $t = \\operatorname{tg} \\dfrac{\\alpha}{2}$:

$$\\sin \\alpha = \\frac{2t}{1 + t^2}, \\qquad \\cos \\alpha = \\frac{1 - t^2}{1 + t^2}, \\qquad \\operatorname{tg} \\alpha = \\frac{2t}{1 - t^2}.$$

**Пример 4.** $\\operatorname{tg} \\dfrac{\\alpha}{2} = 2$: $\\sin \\alpha = \\dfrac45$, $\\cos \\alpha = -\\dfrac35$.

### Упражнения

1. Запишите $\\cos^2 3x$ без квадрата.
2. Вычислите $\\sin 22{,}5^\\circ$.
3. С помощью понижения степени вычислите $\\cos^2 \\dfrac{\\pi}{12} - \\dfrac12$.
4. $\\cos \\alpha = 0{,}6$, $0 < \\alpha < \\dfrac{\\pi}{2}$. Найдите $\\cos \\dfrac{\\alpha}{2}$ и $\\operatorname{tg} \\dfrac{\\alpha}{2}$.
5. $\\operatorname{tg} \\dfrac{\\alpha}{2} = \\dfrac12$. Найдите $\\sin \\alpha$ и $\\cos \\alpha$.
6. Упростите $\\dfrac{1 - \\cos 2x}{1 + \\cos 2x}$.
7. Докажите, что $\\sin^4 x + \\cos^4 x = 1 - \\dfrac12 \\sin^2 2x$.

### Ответы

1. $\\dfrac{1 + \\cos 6x}{2}$. 2. $\\sqrt{\\dfrac{1 - \\frac{\\sqrt2}{2}}{2}} = \\dfrac{\\sqrt{2 - \\sqrt2}}{2}$. 3. $\\dfrac{1 + \\cos \\frac{\\pi}{6}}{2} - \\dfrac12 = \\dfrac{\\sqrt3}{4}$. 4. $\\cos \\dfrac{\\alpha}{2} = \\sqrt{0{,}8} = \\dfrac{2\\sqrt5}{5}$; $\\sin \\alpha = 0{,}8$, $\\operatorname{tg} \\dfrac{\\alpha}{2} = \\dfrac{0{,}8}{1{,}6} = \\dfrac12$. 5. $\\sin \\alpha = \\dfrac45$, $\\cos \\alpha = \\dfrac35$. 6. $\\operatorname{tg}^2 x$. 7. $\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x = 1 - \\dfrac12 \\sin^2 2x$.`,
      },
      [
        q(
          t("sin²α equals…", "sin²α-ն հավասար է…", "sin²α равен…"),
          [t("(1 − cos 2α)/2", "(1 − cos 2α)/2", "(1 − cos 2α)/2"), t("(1 + cos 2α)/2", "(1 + cos 2α)/2", "(1 + cos 2α)/2"), t("1 − cos 2α", "1 − cos 2α", "1 − cos 2α")],
          0,
        ),
        q(
          t("cos²α equals…", "cos²α-ն հավասար է…", "cos²α равен…"),
          [t("(1 − cos 2α)/2", "(1 − cos 2α)/2", "(1 − cos 2α)/2"), t("(1 + cos 2α)/2", "(1 + cos 2α)/2", "(1 + cos 2α)/2"), t("2 cos 2α", "2 cos 2α", "2 cos 2α")],
          1,
        ),
        q(
          t("The sign of sin(α/2) is chosen by the quarter of…", "sin(α/2)-ի նշանն ընտրվում է ըստ քառորդի…", "Знак sin(α/2) выбирают по четверти угла…"),
          [t("α", "α-ի", "α"), t("α/2", "α/2-ի", "α/2"), t("2α", "2α-ի", "2α")],
          1,
        ),
        q(
          t("tan(π/8) equals…", "tg(π/8)-ը հավասար է…", "tg(π/8) равен…"),
          [t("√2 − 1", "√2 − 1", "√2 − 1"), t("√2 + 1", "√2 + 1", "√2 + 1"), t("1/2", "1/2", "1/2")],
          0,
        ),
        q(
          t("With t = tan(α/2), sin α equals…", "t = tg(α/2) դեպքում sin α-ն…", "При t = tg(α/2) sin α равен…"),
          [t("2t/(1 + t²)", "2t/(1 + t²)", "2t/(1 + t²)"), t("(1 − t²)/(1 + t²)", "(1 − t²)/(1 + t²)", "(1 − t²)/(1 + t²)"), t("2t/(1 − t²)", "2t/(1 − t²)", "2t/(1 − t²)")],
          0,
        ),
        q(
          t("(1 − cos 2x)/(1 + cos 2x) equals…", "(1 − cos 2x)/(1 + cos 2x)-ն հավասար է…", "(1 − cos 2x)/(1 + cos 2x) равно…"),
          [t("tan²x", "tg²x", "tg²x"), t("cot²x", "ctg²x", "ctg²x"), t("cos 2x", "cos 2x", "cos 2x")],
          0,
        ),
      ],
    ),
    lesson(
      "sum-to-product",
      ["Sums into products and back", "Գումարի ձևափոխումն արտադրյալի և հակառակը", "Преобразование суммы в произведение и обратно"],
      {
        en: ["Turn sin α ± sin β and cos α ± cos β into products", "Turn products of sines and cosines into sums", "Use these formulas to simplify expressions and to prepare equations for factoring"],
        hy: ["sin α ± sin β և cos α ± cos β արտահայտությունները ձևափոխել արտադրյալի", "Սինուսների և կոսինուսների արտադրյալները ձևափոխել գումարի", "Օգտվել այս բանաձևերից արտահայտություններ պարզեցնելու և հավասարումներն արտադրիչների վերլուծելուն նախապատրաստելու համար"],
        ru: ["Преобразовывать sin α ± sin β и cos α ± cos β в произведения", "Преобразовывать произведения синусов и косинусов в суммы", "Использовать эти формулы для упрощения выражений и подготовки уравнений к разложению на множители"],
      },
      {
        en: `## Sum to product

$$\\sin \\alpha + \\sin \\beta = 2\\sin \\frac{\\alpha + \\beta}{2} \\cos \\frac{\\alpha - \\beta}{2}$$

$$\\sin \\alpha - \\sin \\beta = 2\\sin \\frac{\\alpha - \\beta}{2} \\cos \\frac{\\alpha + \\beta}{2}$$

$$\\cos \\alpha + \\cos \\beta = 2\\cos \\frac{\\alpha + \\beta}{2} \\cos \\frac{\\alpha - \\beta}{2}$$

$$\\cos \\alpha - \\cos \\beta = -2\\sin \\frac{\\alpha + \\beta}{2} \\sin \\frac{\\alpha - \\beta}{2}$$

Watch the minus sign in the last formula.

**Example 1.** $\\sin 75^\\circ + \\sin 15^\\circ = 2\\sin 45^\\circ \\cos 30^\\circ = 2 \\cdot \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} = \\dfrac{\\sqrt6}{2}$.

**Example 2.** $\\cos 5x - \\cos 3x = -2\\sin 4x \\sin x$.

**Example 3.** $\\cos 80^\\circ + \\cos 40^\\circ = 2\\cos 60^\\circ \\cos 20^\\circ = \\cos 20^\\circ$.

## Product to sum

These follow from adding and subtracting the addition formulas:

$$\\sin \\alpha \\cos \\beta = \\frac12\\left(\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)\\right)$$

$$\\cos \\alpha \\cos \\beta = \\frac12\\left(\\cos(\\alpha - \\beta) + \\cos(\\alpha + \\beta)\\right)$$

$$\\sin \\alpha \\sin \\beta = \\frac12\\left(\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)\\right)$$

**Example 4.** $2\\sin 3x \\cos x = \\sin 4x + \\sin 2x$.

**Example 5.** $\\sin 75^\\circ \\sin 15^\\circ = \\dfrac12(\\cos 60^\\circ - \\cos 90^\\circ) = \\dfrac14$.

## Why it helps

Equations are solved by factoring: a product is zero when a factor is zero. For $\\sin 3x + \\sin x = 0$ we get $2\\sin 2x \\cos x = 0$, which splits into two simple equations.

### Exercises

1. Write as a product: $\\sin 7x + \\sin 3x$.
2. Write as a product: $\\cos 6x - \\cos 2x$.
3. Compute $\\cos 75^\\circ + \\cos 15^\\circ$.
4. Compute $\\sin 105^\\circ - \\sin 15^\\circ$.
5. Write as a sum: $2\\cos 4x \\cos x$.
6. Compute $\\cos 75^\\circ \\cos 15^\\circ$.
7. Simplify $\\dfrac{\\sin 3x + \\sin x}{\\cos 3x + \\cos x}$.

### Answers

1. $2\\sin 5x \\cos 2x$. 2. $-2\\sin 4x \\sin 2x$. 3. $2\\cos 45^\\circ \\cos 30^\\circ = \\dfrac{\\sqrt6}{2}$. 4. $2\\sin 45^\\circ \\cos 60^\\circ = \\dfrac{\\sqrt2}{2}$. 5. $\\cos 3x + \\cos 5x$. 6. $\\dfrac12(\\cos 60^\\circ + \\cos 90^\\circ) = \\dfrac14$. 7. $\\dfrac{2\\sin 2x \\cos x}{2\\cos 2x \\cos x} = \\tan 2x$.`,
        hy: `## Գումարից արտադրյալ

$$\\sin \\alpha + \\sin \\beta = 2\\sin \\frac{\\alpha + \\beta}{2} \\cos \\frac{\\alpha - \\beta}{2}$$

$$\\sin \\alpha - \\sin \\beta = 2\\sin \\frac{\\alpha - \\beta}{2} \\cos \\frac{\\alpha + \\beta}{2}$$

$$\\cos \\alpha + \\cos \\beta = 2\\cos \\frac{\\alpha + \\beta}{2} \\cos \\frac{\\alpha - \\beta}{2}$$

$$\\cos \\alpha - \\cos \\beta = -2\\sin \\frac{\\alpha + \\beta}{2} \\sin \\frac{\\alpha - \\beta}{2}$$

Ուշադրություն դարձրեք վերջին բանաձևի մինուս նշանին։

**Օրինակ 1։** $\\sin 75^\\circ + \\sin 15^\\circ = 2\\sin 45^\\circ \\cos 30^\\circ = 2 \\cdot \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} = \\dfrac{\\sqrt6}{2}$։

**Օրինակ 2։** $\\cos 5x - \\cos 3x = -2\\sin 4x \\sin x$։

**Օրինակ 3։** $\\cos 80^\\circ + \\cos 40^\\circ = 2\\cos 60^\\circ \\cos 20^\\circ = \\cos 20^\\circ$։

## Արտադրյալից գումար

Սրանք ստացվում են գումարի բանաձևերը գումարելով և հանելով․

$$\\sin \\alpha \\cos \\beta = \\frac12\\left(\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)\\right)$$

$$\\cos \\alpha \\cos \\beta = \\frac12\\left(\\cos(\\alpha - \\beta) + \\cos(\\alpha + \\beta)\\right)$$

$$\\sin \\alpha \\sin \\beta = \\frac12\\left(\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)\\right)$$

**Օրինակ 4։** $2\\sin 3x \\cos x = \\sin 4x + \\sin 2x$։

**Օրինակ 5։** $\\sin 75^\\circ \\sin 15^\\circ = \\dfrac12(\\cos 60^\\circ - \\cos 90^\\circ) = \\dfrac14$։

## Ինչու է սա օգտակար

Հավասարումները լուծվում են արտադրիչների վերլուծությամբ՝ արտադրյալը զրո է, երբ արտադրիչներից մեկը զրո է։ $\\sin 3x + \\sin x = 0$ հավասարումից ստանում ենք $2\\sin 2x \\cos x = 0$, որը բաժանվում է երկու պարզ հավասարման։

### Վարժություններ

1. Գրեք արտադրյալի տեսքով՝ $\\sin 7x + \\sin 3x$։
2. Գրեք արտադրյալի տեսքով՝ $\\cos 6x - \\cos 2x$։
3. Հաշվեք $\\cos 75^\\circ + \\cos 15^\\circ$-ը։
4. Հաշվեք $\\sin 105^\\circ - \\sin 15^\\circ$-ը։
5. Գրեք գումարի տեսքով՝ $2\\cos 4x \\cos x$։
6. Հաշվեք $\\cos 75^\\circ \\cos 15^\\circ$-ը։
7. Պարզեցրեք $\\dfrac{\\sin 3x + \\sin x}{\\cos 3x + \\cos x}$-ը։

### Պատասխաններ

1. $2\\sin 5x \\cos 2x$։ 2. $-2\\sin 4x \\sin 2x$։ 3. $2\\cos 45^\\circ \\cos 30^\\circ = \\dfrac{\\sqrt6}{2}$։ 4. $2\\sin 45^\\circ \\cos 60^\\circ = \\dfrac{\\sqrt2}{2}$։ 5. $\\cos 3x + \\cos 5x$։ 6. $\\dfrac12(\\cos 60^\\circ + \\cos 90^\\circ) = \\dfrac14$։ 7. $\\dfrac{2\\sin 2x \\cos x}{2\\cos 2x \\cos x} = \\operatorname{tg} 2x$։`,
        ru: `## Сумма в произведение

$$\\sin \\alpha + \\sin \\beta = 2\\sin \\frac{\\alpha + \\beta}{2} \\cos \\frac{\\alpha - \\beta}{2}$$

$$\\sin \\alpha - \\sin \\beta = 2\\sin \\frac{\\alpha - \\beta}{2} \\cos \\frac{\\alpha + \\beta}{2}$$

$$\\cos \\alpha + \\cos \\beta = 2\\cos \\frac{\\alpha + \\beta}{2} \\cos \\frac{\\alpha - \\beta}{2}$$

$$\\cos \\alpha - \\cos \\beta = -2\\sin \\frac{\\alpha + \\beta}{2} \\sin \\frac{\\alpha - \\beta}{2}$$

Обратите внимание на минус в последней формуле.

**Пример 1.** $\\sin 75^\\circ + \\sin 15^\\circ = 2\\sin 45^\\circ \\cos 30^\\circ = 2 \\cdot \\dfrac{\\sqrt2}{2} \\cdot \\dfrac{\\sqrt3}{2} = \\dfrac{\\sqrt6}{2}$.

**Пример 2.** $\\cos 5x - \\cos 3x = -2\\sin 4x \\sin x$.

**Пример 3.** $\\cos 80^\\circ + \\cos 40^\\circ = 2\\cos 60^\\circ \\cos 20^\\circ = \\cos 20^\\circ$.

## Произведение в сумму

Эти формулы получаются сложением и вычитанием формул сложения:

$$\\sin \\alpha \\cos \\beta = \\frac12\\left(\\sin(\\alpha + \\beta) + \\sin(\\alpha - \\beta)\\right)$$

$$\\cos \\alpha \\cos \\beta = \\frac12\\left(\\cos(\\alpha - \\beta) + \\cos(\\alpha + \\beta)\\right)$$

$$\\sin \\alpha \\sin \\beta = \\frac12\\left(\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)\\right)$$

**Пример 4.** $2\\sin 3x \\cos x = \\sin 4x + \\sin 2x$.

**Пример 5.** $\\sin 75^\\circ \\sin 15^\\circ = \\dfrac12(\\cos 60^\\circ - \\cos 90^\\circ) = \\dfrac14$.

## Зачем это нужно

Уравнения решают разложением на множители: произведение равно нулю, когда один из множителей равен нулю. Из $\\sin 3x + \\sin x = 0$ получаем $2\\sin 2x \\cos x = 0$ — это распадается на два простых уравнения.

### Упражнения

1. Запишите в виде произведения: $\\sin 7x + \\sin 3x$.
2. Запишите в виде произведения: $\\cos 6x - \\cos 2x$.
3. Вычислите $\\cos 75^\\circ + \\cos 15^\\circ$.
4. Вычислите $\\sin 105^\\circ - \\sin 15^\\circ$.
5. Запишите в виде суммы: $2\\cos 4x \\cos x$.
6. Вычислите $\\cos 75^\\circ \\cos 15^\\circ$.
7. Упростите $\\dfrac{\\sin 3x + \\sin x}{\\cos 3x + \\cos x}$.

### Ответы

1. $2\\sin 5x \\cos 2x$. 2. $-2\\sin 4x \\sin 2x$. 3. $2\\cos 45^\\circ \\cos 30^\\circ = \\dfrac{\\sqrt6}{2}$. 4. $2\\sin 45^\\circ \\cos 60^\\circ = \\dfrac{\\sqrt2}{2}$. 5. $\\cos 3x + \\cos 5x$. 6. $\\dfrac12(\\cos 60^\\circ + \\cos 90^\\circ) = \\dfrac14$. 7. $\\dfrac{2\\sin 2x \\cos x}{2\\cos 2x \\cos x} = \\operatorname{tg} 2x$.`,
      },
      [
        q(
          t("sin α + sin β equals…", "sin α + sin β-ն հավասար է…", "sin α + sin β равно…"),
          [t("2 sin((α+β)/2) cos((α−β)/2)", "2 sin((α+β)/2) cos((α−β)/2)", "2 sin((α+β)/2) cos((α−β)/2)"), t("2 cos((α+β)/2) cos((α−β)/2)", "2 cos((α+β)/2) cos((α−β)/2)", "2 cos((α+β)/2) cos((α−β)/2)"), t("sin(α + β)", "sin(α + β)", "sin(α + β)")],
          0,
        ),
        q(
          t("Which formula has a minus sign in front?", "Ո՞ր բանաձևի առջև է մինուս նշանը", "В какой формуле стоит минус впереди?"),
          [t("cos α + cos β", "cos α + cos β", "cos α + cos β"), t("cos α − cos β", "cos α − cos β", "cos α − cos β"), t("sin α − sin β", "sin α − sin β", "sin α − sin β")],
          1,
        ),
        q(
          t("sin 75° + sin 15° equals…", "sin 75° + sin 15°-ը հավասար է…", "sin 75° + sin 15° равно…"),
          [t("√6/2", "√6/2", "√6/2"), t("1", "1", "1"), t("√2/2", "√2/2", "√2/2")],
          0,
        ),
        q(
          t("2 sin 3x cos x equals…", "2 sin 3x cos x-ը հավասար է…", "2 sin 3x cos x равно…"),
          [t("sin 4x + sin 2x", "sin 4x + sin 2x", "sin 4x + sin 2x"), t("sin 4x − sin 2x", "sin 4x − sin 2x", "sin 4x − sin 2x"), t("cos 4x + cos 2x", "cos 4x + cos 2x", "cos 4x + cos 2x")],
          0,
        ),
        q(
          t("cos 80° + cos 40° equals…", "cos 80° + cos 40°-ը հավասար է…", "cos 80° + cos 40° равно…"),
          [t("cos 120°", "cos 120°", "cos 120°"), t("cos 20°", "cos 20°", "cos 20°"), t("2 cos 20°", "2 cos 20°", "2 cos 20°")],
          1,
        ),
        q(
          t("sin 75° sin 15° equals…", "sin 75° sin 15°-ը հավասար է…", "sin 75° sin 15° равно…"),
          [t("1/2", "1/2", "1/2"), t("1/4", "1/4", "1/4"), t("√3/4", "√3/4", "√3/4")],
          1,
        ),
      ],
    ),
  ],
};
