import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Integral", "Ինտեգրալ", "Интеграл"),
  summary: t("Antiderivative, rules, definite integral, area of a curvilinear trapezium.", "Նախնական, կանոններ, որոշյալ ինտեգրալ, կորագիծ սեղանի մակերես։", "Первообразная, правила, определённый интеграл, площадь криволинейной трапеции."),
  lessons: [
    lesson(
      "antiderivative",
      ["The antiderivative", "Նախնական", "Первообразная"],
      {
        en: ["Define an antiderivative: F is an antiderivative of f if F′ = f", "Explain why all antiderivatives of f differ by a constant and write F(x) + C", "Know the table of antiderivatives for xⁿ, 1/x, eˣ, aˣ, sin x, cos x"],
        hy: ["Սահմանել նախնականը․ F-ը f-ի նախնական է, եթե F′ = f", "Բացատրել, թե ինչու f-ի բոլոր նախնականները տարբերվում են հաստատունով, և գրել F(x) + C", "Իմանալ xⁿ, 1/x, eˣ, aˣ, sin x, cos x ֆունկցիաների նախնականների աղյուսակը"],
        ru: ["Определять первообразную: F — первообразная для f, если F′ = f", "Объяснять, почему все первообразные f отличаются на константу, и записывать F(x) + C", "Знать таблицу первообразных для xⁿ, 1/x, eˣ, aˣ, sin x, cos x"],
      },
      {
        en: `## The reverse problem

Differentiation answers the question: given $F$, what is $F'$? Now we reverse it: given $f$, find a function whose derivative is $f$.

> **Definition.** A function $F$ is an **antiderivative** of $f$ on an interval if $F'(x) = f(x)$ for every $x$ in that interval.

**Example 1.** $F(x) = x^3$ is an antiderivative of $f(x) = 3x^2$, since $(x^3)' = 3x^2$. But so are $x^3 + 1$ and $x^3 - 7$: the derivative of a constant is zero.

## The general antiderivative

> **Theorem.** If $F$ is an antiderivative of $f$ on an interval, then every antiderivative of $f$ there has the form $F(x) + C$, where $C$ is a constant.

Why: if $F' = G' = f$, then $(G - F)' = 0$, and a function with zero derivative on an interval is constant.

Geometrically the graphs $y = F(x) + C$ are vertical shifts of one another; at every $x$ their tangents are parallel.

## Table of antiderivatives

Each row is read from the derivative table backwards.

| $f(x)$ | $F(x)$ |
| --- | --- |
| $k$ (constant) | $kx + C$ |
| $x^n$, $n \\ne -1$ | $\\dfrac{x^{n+1}}{n+1} + C$ |
| $\\dfrac1x$ | $\\ln \\lvert x\\rvert + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\\dfrac{a^x}{\\ln a} + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\dfrac{1}{\\cos^2 x}$ | $\\tan x + C$ |

**Example 2.** An antiderivative of $x^4$ is $\\dfrac{x^5}{5}$: check $\\left(\\dfrac{x^5}{5}\\right)' = x^4$.

**Example 3.** $f(x) = \\dfrac{1}{x^2} = x^{-2}$: $F(x) = \\dfrac{x^{-1}}{-1} = -\\dfrac1x + C$.

**Example 4.** $f(x) = \\sqrt x = x^{1/2}$: $F(x) = \\dfrac{x^{3/2}}{3/2} = \\dfrac23 x\\sqrt x + C$.

## Choosing the constant

The constant is fixed by an extra condition.

**Example 5.** Find the antiderivative of $f(x) = 2x$ whose graph passes through $(1; 5)$. General form $F(x) = x^2 + C$; $F(1) = 1 + C = 5$, so $C = 4$ and $F(x) = x^2 + 4$.

**Example 6.** A body moves with velocity $v(t) = 3t^2$ and $s(0) = 2$. Since $s' = v$, $s(t) = t^3 + C$, and $s(0) = 2$ gives $s(t) = t^3 + 2$.

### Exercises

1. Check that $F(x) = x^2 - \\cos x$ is an antiderivative of $f(x) = 2x + \\sin x$.
2. Write the general antiderivative of $x^6$, $x^{-3}$, $\\sqrt[3]{x}$.
3. Write the general antiderivative of $5$, $e^x$, $\\cos x$, $2^x$.
4. Is $F(x) = \\ln x$ an antiderivative of $\\dfrac1x$ on $(0; +\\infty)$? And $F(x) = \\ln(-x)$ on $(-\\infty; 0)$?
5. Find the antiderivative of $f(x) = 3x^2$ passing through $(2; 1)$.
6. Find the antiderivative of $f(x) = \\sin x$ with $F(0) = 3$.
7. Velocity $v(t) = 4t$, $s(1) = 5$. Find $s(t)$.
8. Which of $x^3 + 2$, $x^3 - x$, $x^3 + 100$ are antiderivatives of $3x^2$?

### Answers

1. $F' = 2x + \\sin x$. 2. $\\dfrac{x^7}{7} + C$; $-\\dfrac{1}{2x^2} + C$; $\\dfrac34 x\\sqrt[3]{x} + C$. 3. $5x + C$; $e^x + C$; $\\sin x + C$; $\\dfrac{2^x}{\\ln 2} + C$. 4. Yes; yes, since $(\\ln(-x))' = \\dfrac{-1}{-x} = \\dfrac1x$. That is why the table has $\\ln\\lvert x\\rvert$. 5. $x^3 + C$, $8 + C = 1$: $F = x^3 - 7$. 6. $-\\cos x + C$, $-1 + C = 3$: $F = 4 - \\cos x$. 7. $s = 2t^2 + 3$. 8. The first and third.`,
        hy: `## Հակադարձ խնդիրը

Ածանցումը պատասխանում է հարցին․ տրված է $F$-ը, ի՞նչ է $F'$-ը։ Հիմա շրջում ենք հարցը․ տրված է $f$-ը, գտնել ֆունկցիա, որի ածանցյալը $f$-ն է։

> **Սահմանում։** $F$ ֆունկցիան կոչվում է $f$-ի **նախնական** տրված միջակայքում, եթե այդ միջակայքի յուրաքանչյուր $x$-ի համար $F'(x) = f(x)$։

**Օրինակ 1։** $F(x) = x^3$-ը $f(x) = 3x^2$-ի նախնական է, քանի որ $(x^3)' = 3x^2$։ Բայց նախնական են նաև $x^3 + 1$-ը և $x^3 - 7$-ը․ հաստատունի ածանցյալը զրո է։

## Ընդհանուր նախնականը

> **Թեորեմ։** Եթե $F$-ը $f$-ի նախնական է միջակայքում, ապա այդ միջակայքում $f$-ի ցանկացած նախնական ունի $F(x) + C$ տեսքը, որտեղ $C$-ն հաստատուն է։

Պատճառը․ եթե $F' = G' = f$, ապա $(G - F)' = 0$, իսկ միջակայքում զրո ածանցյալ ունեցող ֆունկցիան հաստատուն է։

Երկրաչափորեն $y = F(x) + C$ գրաֆիկները միմյանց ուղղաձիգ տեղաշարժերն են․ յուրաքանչյուր $x$-ում նրանց շոշափողները զուգահեռ են։

## Նախնականների աղյուսակ

Յուրաքանչյուր տող ածանցյալների աղյուսակն է, կարդացված հակառակ ուղղությամբ։

| $f(x)$ | $F(x)$ |
| --- | --- |
| $k$ (հաստատուն) | $kx + C$ |
| $x^n$, $n \\ne -1$ | $\\dfrac{x^{n+1}}{n+1} + C$ |
| $\\dfrac1x$ | $\\ln \\lvert x\\rvert + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\\dfrac{a^x}{\\ln a} + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\dfrac{1}{\\cos^2 x}$ | $\\operatorname{tg} x + C$ |

**Օրինակ 2։** $x^4$-ի նախնականն է $\\dfrac{x^5}{5}$-ը․ ստուգում՝ $\\left(\\dfrac{x^5}{5}\\right)' = x^4$։

**Օրինակ 3։** $f(x) = \\dfrac{1}{x^2} = x^{-2}$․ $F(x) = \\dfrac{x^{-1}}{-1} = -\\dfrac1x + C$։

**Օրինակ 4։** $f(x) = \\sqrt x = x^{1/2}$․ $F(x) = \\dfrac{x^{3/2}}{3/2} = \\dfrac23 x\\sqrt x + C$։

## Հաստատունի ընտրությունը

Հաստատունը որոշվում է լրացուցիչ պայմանով։

**Օրինակ 5։** Գտնենք $f(x) = 2x$-ի այն նախնականը, որի գրաֆիկն անցնում է $(1; 5)$ կետով։ Ընդհանուր տեսքը՝ $F(x) = x^2 + C$, $F(1) = 1 + C = 5$, ուստի $C = 4$ և $F(x) = x^2 + 4$։

**Օրինակ 6։** Մարմինը շարժվում է $v(t) = 3t^2$ արագությամբ, և $s(0) = 2$։ Քանի որ $s' = v$, ապա $s(t) = t^3 + C$, իսկ $s(0) = 2$ պայմանից՝ $s(t) = t^3 + 2$։

### Վարժություններ

1. Ստուգեք, որ $F(x) = x^2 - \\cos x$-ը $f(x) = 2x + \\sin x$-ի նախնական է։
2. Գրեք $x^6$, $x^{-3}$, $\\sqrt[3]{x}$ ֆունկցիաների ընդհանուր նախնականը։
3. Գրեք $5$, $e^x$, $\\cos x$, $2^x$ ֆունկցիաների ընդհանուր նախնականը։
4. $F(x) = \\ln x$-ը $\\dfrac1x$-ի նախնակա՞ն է $(0; +\\infty)$-ում։ Իսկ $F(x) = \\ln(-x)$-ը՝ $(-\\infty; 0)$-ում։
5. Գտեք $f(x) = 3x^2$-ի այն նախնականը, որն անցնում է $(2; 1)$ կետով։
6. Գտեք $f(x) = \\sin x$-ի այն նախնականը, որի համար $F(0) = 3$։
7. Արագությունը $v(t) = 4t$ է, $s(1) = 5$։ Գտեք $s(t)$-ը։
8. $x^3 + 2$, $x^3 - x$, $x^3 + 100$ ֆունկցիաներից որո՞նք են $3x^2$-ի նախնական։

### Պատասխաններ

1. $F' = 2x + \\sin x$։ 2. $\\dfrac{x^7}{7} + C$, $-\\dfrac{1}{2x^2} + C$, $\\dfrac34 x\\sqrt[3]{x} + C$։ 3. $5x + C$, $e^x + C$, $\\sin x + C$, $\\dfrac{2^x}{\\ln 2} + C$։ 4. Այո, այո, քանի որ $(\\ln(-x))' = \\dfrac{-1}{-x} = \\dfrac1x$։ Հենց դրա համար աղյուսակում $\\ln\\lvert x\\rvert$ է։ 5. $x^3 + C$, $8 + C = 1$՝ $F = x^3 - 7$։ 6. $-\\cos x + C$, $-1 + C = 3$՝ $F = 4 - \\cos x$։ 7. $s = 2t^2 + 3$։ 8. Առաջինը և երրորդը։`,
        ru: `## Обратная задача

Дифференцирование отвечает на вопрос: дана $F$, какова $F'$? Теперь обратим вопрос: дана $f$, найти функцию, производная которой равна $f$.

> **Определение.** Функция $F$ называется **первообразной** для $f$ на промежутке, если $F'(x) = f(x)$ для каждого $x$ из этого промежутка.

**Пример 1.** $F(x) = x^3$ — первообразная для $f(x) = 3x^2$, так как $(x^3)' = 3x^2$. Но первообразными являются и $x^3 + 1$, и $x^3 - 7$: производная константы равна нулю.

## Общий вид первообразной

> **Теорема.** Если $F$ — первообразная для $f$ на промежутке, то любая первообразная для $f$ на нём имеет вид $F(x) + C$, где $C$ — константа.

Почему: если $F' = G' = f$, то $(G - F)' = 0$, а функция с нулевой производной на промежутке постоянна.

Геометрически графики $y = F(x) + C$ получаются друг из друга сдвигом по вертикали; при каждом $x$ их касательные параллельны.

## Таблица первообразных

Каждая строка — таблица производных, прочитанная в обратную сторону.

| $f(x)$ | $F(x)$ |
| --- | --- |
| $k$ (константа) | $kx + C$ |
| $x^n$, $n \\ne -1$ | $\\dfrac{x^{n+1}}{n+1} + C$ |
| $\\dfrac1x$ | $\\ln \\lvert x\\rvert + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\\dfrac{a^x}{\\ln a} + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\dfrac{1}{\\cos^2 x}$ | $\\operatorname{tg} x + C$ |

**Пример 2.** Первообразная для $x^4$ — это $\\dfrac{x^5}{5}$: проверка $\\left(\\dfrac{x^5}{5}\\right)' = x^4$.

**Пример 3.** $f(x) = \\dfrac{1}{x^2} = x^{-2}$: $F(x) = \\dfrac{x^{-1}}{-1} = -\\dfrac1x + C$.

**Пример 4.** $f(x) = \\sqrt x = x^{1/2}$: $F(x) = \\dfrac{x^{3/2}}{3/2} = \\dfrac23 x\\sqrt x + C$.

## Выбор константы

Константа определяется дополнительным условием.

**Пример 5.** Найдём первообразную для $f(x) = 2x$, график которой проходит через $(1; 5)$. Общий вид $F(x) = x^2 + C$; $F(1) = 1 + C = 5$, значит $C = 4$ и $F(x) = x^2 + 4$.

**Пример 6.** Тело движется со скоростью $v(t) = 3t^2$, и $s(0) = 2$. Так как $s' = v$, то $s(t) = t^3 + C$, а из $s(0) = 2$ получаем $s(t) = t^3 + 2$.

### Упражнения

1. Проверьте, что $F(x) = x^2 - \\cos x$ — первообразная для $f(x) = 2x + \\sin x$.
2. Запишите общий вид первообразной для $x^6$, $x^{-3}$, $\\sqrt[3]{x}$.
3. Запишите общий вид первообразной для $5$, $e^x$, $\\cos x$, $2^x$.
4. Является ли $F(x) = \\ln x$ первообразной для $\\dfrac1x$ на $(0; +\\infty)$? А $F(x) = \\ln(-x)$ на $(-\\infty; 0)$?
5. Найдите первообразную для $f(x) = 3x^2$, проходящую через $(2; 1)$.
6. Найдите первообразную для $f(x) = \\sin x$ с условием $F(0) = 3$.
7. Скорость $v(t) = 4t$, $s(1) = 5$. Найдите $s(t)$.
8. Какие из функций $x^3 + 2$, $x^3 - x$, $x^3 + 100$ являются первообразными для $3x^2$?

### Ответы

1. $F' = 2x + \\sin x$. 2. $\\dfrac{x^7}{7} + C$; $-\\dfrac{1}{2x^2} + C$; $\\dfrac34 x\\sqrt[3]{x} + C$. 3. $5x + C$; $e^x + C$; $\\sin x + C$; $\\dfrac{2^x}{\\ln 2} + C$. 4. Да; да, так как $(\\ln(-x))' = \\dfrac{-1}{-x} = \\dfrac1x$. Поэтому в таблице стоит $\\ln\\lvert x\\rvert$. 5. $x^3 + C$, $8 + C = 1$: $F = x^3 - 7$. 6. $-\\cos x + C$, $-1 + C = 3$: $F = 4 - \\cos x$. 7. $s = 2t^2 + 3$. 8. Первая и третья.`,
      },
      [
        q(t("F is an antiderivative of f if…", "F-ը f-ի նախնական է, եթե…", "F — первообразная для f, если…"), [t("F′ = f", "F′ = f", "F′ = f"), t("f′ = F", "f′ = F", "f′ = F"), t("F = f + C", "F = f + C", "F = f + C")], 0),
        q(t("Two antiderivatives of the same function differ by…", "Նույն ֆունկցիայի երկու նախնականները տարբերվում են…", "Две первообразные одной функции отличаются…"), [t("a constant", "հաստատունով", "на константу"), t("a factor x", "x արտադրիչով", "на множитель x"), t("nothing, they coincide", "ոչնչով, դրանք համընկնում են", "ничем, они совпадают")], 0),
        q(t("The general antiderivative of x⁴ is…", "x⁴-ի ընդհանուր նախնականը…", "Общий вид первообразной для x⁴ —"), [t("4x³ + C", "4x³ + C", "4x³ + C"), t("x⁵/5 + C", "x⁵/5 + C", "x⁵/5 + C"), t("x⁵ + C", "x⁵ + C", "x⁵ + C")], 1),
        q(t("The antiderivative of sin x is…", "sin x-ի նախնականը…", "Первообразная для sin x —"), [t("cos x + C", "cos x + C", "cos x + C"), t("−cos x + C", "−cos x + C", "−cos x + C"), t("−sin x + C", "−sin x + C", "−sin x + C")], 1),
        q(t("The antiderivative of 1/x for x > 0 is…", "1/x-ի նախնականը x > 0 դեպքում…", "Первообразная для 1/x при x > 0 —"), [t("ln x + C", "ln x + C", "ln x + C"), t("−1/x² + C", "−1/x² + C", "−1/x² + C"), t("1/x² + C", "1/x² + C", "1/x² + C")], 0),
        q(t("The antiderivative of 2x through (1; 5) is…", "2x-ի նախնականը, որն անցնում է (1; 5) կետով…", "Первообразная для 2x, проходящая через (1; 5), —"), [t("x² + 5", "x² + 5", "x² + 5"), t("x² + 4", "x² + 4", "x² + 4"), t("x² + 1", "x² + 1", "x² + 1")], 1),
      ],
    ),
    lesson(
      "antiderivative-rules",
      ["Rules for finding antiderivatives", "Նախնականի գտնելու կանոնները", "Правила нахождения первообразных"],
      {
        en: ["Find antiderivatives of a sum and of a constant multiple", "Use the rule for f(kx + b): the antiderivative is (1/k)·F(kx + b)", "Rewrite products and quotients as sums of powers before integrating"],
        hy: ["Գտնել գումարի և հաստատուն արտադրիչով ֆունկցիայի նախնականը", "Օգտվել f(kx + b)-ի կանոնից․ նախնականը (1/k)·F(kx + b) է", "Նախնական գտնելուց առաջ արտադրյալները և քանորդները վերածել աստիճանների գումարի"],
        ru: ["Находить первообразные суммы и произведения на константу", "Применять правило для f(kx + b): первообразная равна (1/k)·F(kx + b)", "Перед интегрированием представлять произведения и дроби в виде суммы степеней"],
      },
      {
        en: `## Three rules

Let $F$ and $G$ be antiderivatives of $f$ and $g$. Then:

1. $F + G$ is an antiderivative of $f + g$.
2. $kF$ is an antiderivative of $kf$ for a constant $k$.
3. $\\dfrac1k F(kx + b)$ is an antiderivative of $f(kx + b)$ for $k \\ne 0$.

The first two follow from the derivative of a sum and of a constant multiple. The third: $\\left(\\dfrac1k F(kx + b)\\right)' = \\dfrac1k \\cdot F'(kx + b) \\cdot k = f(kx + b)$ by the chain rule.

There is **no** rule for the antiderivative of a product or quotient. Such expressions must first be transformed.

## Worked examples

**Example 1.** $f(x) = 3x^2 - 4x + 7$. Term by term: $F(x) = x^3 - 2x^2 + 7x + C$.

**Example 2.** $f(x) = \\cos 5x$. With $k = 5$: $F(x) = \\dfrac15 \\sin 5x + C$. Check: $\\left(\\dfrac15 \\sin 5x\\right)' = \\dfrac15 \\cdot 5\\cos 5x$.

**Example 3.** $f(x) = (2x - 1)^4$. Treat $2x - 1$ as $kx + b$: $F(x) = \\dfrac12 \\cdot \\dfrac{(2x - 1)^5}{5} = \\dfrac{(2x - 1)^5}{10} + C$.

**Example 4.** $f(x) = e^{-3x}$: $F(x) = -\\dfrac13 e^{-3x} + C$.

**Example 5.** $f(x) = \\dfrac{1}{3x + 2}$: $F(x) = \\dfrac13 \\ln \\lvert 3x + 2\\rvert + C$.

**Example 6.** $f(x) = x(x + 2)^2$. Expand: $x^3 + 4x^2 + 4x$, so $F(x) = \\dfrac{x^4}{4} + \\dfrac{4x^3}{3} + 2x^2 + C$.

**Example 7.** $f(x) = \\dfrac{x^3 + 1}{x^2} = x + x^{-2}$: $F(x) = \\dfrac{x^2}{2} - \\dfrac1x + C$.

**Example 8.** $f(x) = \\sin^2 x$. Use $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$: $F(x) = \\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$.

## Finding a specific antiderivative

**Example 9.** Find the antiderivative of $f(x) = 6x^2 - 2$ with $F(1) = 4$. General: $2x^3 - 2x + C$; $2 - 2 + C = 4$, so $C = 4$: $F(x) = 2x^3 - 2x + 4$.

### Exercises

1. Find the general antiderivative of $4x^3 - 6x + 1$.
2. Find the general antiderivative of $\\sin 3x$ and $\\cos \\dfrac x2$.
3. Find the general antiderivative of $(3x + 1)^5$ and $\\sqrt{2x - 4}$.
4. Find the general antiderivative of $e^{2x}$ and $\\dfrac{1}{1 - x}$.
5. Find the general antiderivative of $(x - 3)(x + 1)$.
6. Find the general antiderivative of $\\dfrac{x^2 - 4}{x}$ and $\\dfrac{2x + 1}{\\sqrt x}$.
7. Find the general antiderivative of $\\cos^2 x$.
8. Find the antiderivative of $f(x) = 2\\cos 2x$ with $F\\left(\\dfrac{\\pi}{4}\\right) = 0$.

### Answers

1. $x^4 - 3x^2 + x + C$. 2. $-\\dfrac13 \\cos 3x + C$; $2\\sin \\dfrac x2 + C$. 3. $\\dfrac{(3x + 1)^6}{18} + C$; $\\dfrac13 (2x - 4)^{3/2} + C$. 4. $\\dfrac12 e^{2x} + C$; $-\\ln\\lvert 1 - x\\rvert + C$. 5. $x^2 - 2x - 3 \\to \\dfrac{x^3}{3} - x^2 - 3x + C$. 6. $x - \\dfrac4x \\to \\dfrac{x^2}{2} - 4\\ln\\lvert x\\rvert + C$; $2x^{1/2} + x^{-1/2} \\to \\dfrac43 x\\sqrt x + 2\\sqrt x + C$. 7. $\\dfrac{1 + \\cos 2x}{2} \\to \\dfrac x2 + \\dfrac{\\sin 2x}{4} + C$. 8. $\\sin 2x + C$, $1 + C = 0$: $F = \\sin 2x - 1$.`,
        hy: `## Երեք կանոն

Դիցուք $F$-ը և $G$-ն $f$-ի և $g$-ի նախնականներն են։ Այդ դեպքում․

1. $F + G$-ն $f + g$-ի նախնական է։
2. $kF$-ը $kf$-ի նախնական է ($k$-ն հաստատուն է)։
3. $\\dfrac1k F(kx + b)$-ն $f(kx + b)$-ի նախնական է ($k \\ne 0$)։

Առաջին երկուսը հետևում են գումարի և հաստատուն արտադրիչի ածանցյալի կանոններից։ Երրորդը․ $\\left(\\dfrac1k F(kx + b)\\right)' = \\dfrac1k \\cdot F'(kx + b) \\cdot k = f(kx + b)$՝ բարդ ֆունկցիայի կանոնով։

Արտադրյալի կամ քանորդի նախնականի համար կանոն **չկա**։ Այդպիսի արտահայտությունները նախ պետք է ձևափոխել։

## Լուծված օրինակներ

**Օրինակ 1։** $f(x) = 3x^2 - 4x + 7$։ Անդամ առ անդամ՝ $F(x) = x^3 - 2x^2 + 7x + C$։

**Օրինակ 2։** $f(x) = \\cos 5x$։ $k = 5$ դեպքում՝ $F(x) = \\dfrac15 \\sin 5x + C$։ Ստուգում՝ $\\left(\\dfrac15 \\sin 5x\\right)' = \\dfrac15 \\cdot 5\\cos 5x$։

**Օրինակ 3։** $f(x) = (2x - 1)^4$։ $2x - 1$-ը դիտենք որպես $kx + b$․ $F(x) = \\dfrac12 \\cdot \\dfrac{(2x - 1)^5}{5} = \\dfrac{(2x - 1)^5}{10} + C$։

**Օրինակ 4։** $f(x) = e^{-3x}$․ $F(x) = -\\dfrac13 e^{-3x} + C$։

**Օրինակ 5։** $f(x) = \\dfrac{1}{3x + 2}$․ $F(x) = \\dfrac13 \\ln \\lvert 3x + 2\\rvert + C$։

**Օրինակ 6։** $f(x) = x(x + 2)^2$։ Բացենք փակագծերը․ $x^3 + 4x^2 + 4x$, ուստի $F(x) = \\dfrac{x^4}{4} + \\dfrac{4x^3}{3} + 2x^2 + C$։

**Օրինակ 7։** $f(x) = \\dfrac{x^3 + 1}{x^2} = x + x^{-2}$․ $F(x) = \\dfrac{x^2}{2} - \\dfrac1x + C$։

**Օրինակ 8։** $f(x) = \\sin^2 x$։ Օգտվենք $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$ բանաձևից․ $F(x) = \\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$։

## Որոշակի նախնականի գտնելը

**Օրինակ 9։** Գտնենք $f(x) = 6x^2 - 2$-ի այն նախնականը, որի համար $F(1) = 4$։ Ընդհանուր տեսքը՝ $2x^3 - 2x + C$, $2 - 2 + C = 4$, ուստի $C = 4$․ $F(x) = 2x^3 - 2x + 4$։

### Վարժություններ

1. Գտեք $4x^3 - 6x + 1$-ի ընդհանուր նախնականը։
2. Գտեք $\\sin 3x$-ի և $\\cos \\dfrac x2$-ի ընդհանուր նախնականը։
3. Գտեք $(3x + 1)^5$-ի և $\\sqrt{2x - 4}$-ի ընդհանուր նախնականը։
4. Գտեք $e^{2x}$-ի և $\\dfrac{1}{1 - x}$-ի ընդհանուր նախնականը։
5. Գտեք $(x - 3)(x + 1)$-ի ընդհանուր նախնականը։
6. Գտեք $\\dfrac{x^2 - 4}{x}$-ի և $\\dfrac{2x + 1}{\\sqrt x}$-ի ընդհանուր նախնականը։
7. Գտեք $\\cos^2 x$-ի ընդհանուր նախնականը։
8. Գտեք $f(x) = 2\\cos 2x$-ի այն նախնականը, որի համար $F\\left(\\dfrac{\\pi}{4}\\right) = 0$։

### Պատասխաններ

1. $x^4 - 3x^2 + x + C$։ 2. $-\\dfrac13 \\cos 3x + C$, $2\\sin \\dfrac x2 + C$։ 3. $\\dfrac{(3x + 1)^6}{18} + C$, $\\dfrac13 (2x - 4)^{3/2} + C$։ 4. $\\dfrac12 e^{2x} + C$, $-\\ln\\lvert 1 - x\\rvert + C$։ 5. $x^2 - 2x - 3 \\to \\dfrac{x^3}{3} - x^2 - 3x + C$։ 6. $x - \\dfrac4x \\to \\dfrac{x^2}{2} - 4\\ln\\lvert x\\rvert + C$, $2x^{1/2} + x^{-1/2} \\to \\dfrac43 x\\sqrt x + 2\\sqrt x + C$։ 7. $\\dfrac{1 + \\cos 2x}{2} \\to \\dfrac x2 + \\dfrac{\\sin 2x}{4} + C$։ 8. $\\sin 2x + C$, $1 + C = 0$՝ $F = \\sin 2x - 1$։`,
        ru: `## Три правила

Пусть $F$ и $G$ — первообразные для $f$ и $g$. Тогда:

1. $F + G$ — первообразная для $f + g$.
2. $kF$ — первообразная для $kf$ при постоянном $k$.
3. $\\dfrac1k F(kx + b)$ — первообразная для $f(kx + b)$ при $k \\ne 0$.

Первые два следуют из производной суммы и произведения на константу. Третье: $\\left(\\dfrac1k F(kx + b)\\right)' = \\dfrac1k \\cdot F'(kx + b) \\cdot k = f(kx + b)$ по правилу сложной функции.

Правила для первообразной произведения или частного **нет**. Такие выражения нужно сначала преобразовать.

## Разобранные примеры

**Пример 1.** $f(x) = 3x^2 - 4x + 7$. Почленно: $F(x) = x^3 - 2x^2 + 7x + C$.

**Пример 2.** $f(x) = \\cos 5x$. При $k = 5$: $F(x) = \\dfrac15 \\sin 5x + C$. Проверка: $\\left(\\dfrac15 \\sin 5x\\right)' = \\dfrac15 \\cdot 5\\cos 5x$.

**Пример 3.** $f(x) = (2x - 1)^4$. Рассматриваем $2x - 1$ как $kx + b$: $F(x) = \\dfrac12 \\cdot \\dfrac{(2x - 1)^5}{5} = \\dfrac{(2x - 1)^5}{10} + C$.

**Пример 4.** $f(x) = e^{-3x}$: $F(x) = -\\dfrac13 e^{-3x} + C$.

**Пример 5.** $f(x) = \\dfrac{1}{3x + 2}$: $F(x) = \\dfrac13 \\ln \\lvert 3x + 2\\rvert + C$.

**Пример 6.** $f(x) = x(x + 2)^2$. Раскроем скобки: $x^3 + 4x^2 + 4x$, значит $F(x) = \\dfrac{x^4}{4} + \\dfrac{4x^3}{3} + 2x^2 + C$.

**Пример 7.** $f(x) = \\dfrac{x^3 + 1}{x^2} = x + x^{-2}$: $F(x) = \\dfrac{x^2}{2} - \\dfrac1x + C$.

**Пример 8.** $f(x) = \\sin^2 x$. Используем $\\sin^2 x = \\dfrac{1 - \\cos 2x}{2}$: $F(x) = \\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + C$.

## Нахождение конкретной первообразной

**Пример 9.** Найдём первообразную для $f(x) = 6x^2 - 2$ с условием $F(1) = 4$. Общий вид: $2x^3 - 2x + C$; $2 - 2 + C = 4$, значит $C = 4$: $F(x) = 2x^3 - 2x + 4$.

### Упражнения

1. Найдите общий вид первообразной для $4x^3 - 6x + 1$.
2. Найдите общий вид первообразной для $\\sin 3x$ и $\\cos \\dfrac x2$.
3. Найдите общий вид первообразной для $(3x + 1)^5$ и $\\sqrt{2x - 4}$.
4. Найдите общий вид первообразной для $e^{2x}$ и $\\dfrac{1}{1 - x}$.
5. Найдите общий вид первообразной для $(x - 3)(x + 1)$.
6. Найдите общий вид первообразной для $\\dfrac{x^2 - 4}{x}$ и $\\dfrac{2x + 1}{\\sqrt x}$.
7. Найдите общий вид первообразной для $\\cos^2 x$.
8. Найдите первообразную для $f(x) = 2\\cos 2x$ с условием $F\\left(\\dfrac{\\pi}{4}\\right) = 0$.

### Ответы

1. $x^4 - 3x^2 + x + C$. 2. $-\\dfrac13 \\cos 3x + C$; $2\\sin \\dfrac x2 + C$. 3. $\\dfrac{(3x + 1)^6}{18} + C$; $\\dfrac13 (2x - 4)^{3/2} + C$. 4. $\\dfrac12 e^{2x} + C$; $-\\ln\\lvert 1 - x\\rvert + C$. 5. $x^2 - 2x - 3 \\to \\dfrac{x^3}{3} - x^2 - 3x + C$. 6. $x - \\dfrac4x \\to \\dfrac{x^2}{2} - 4\\ln\\lvert x\\rvert + C$; $2x^{1/2} + x^{-1/2} \\to \\dfrac43 x\\sqrt x + 2\\sqrt x + C$. 7. $\\dfrac{1 + \\cos 2x}{2} \\to \\dfrac x2 + \\dfrac{\\sin 2x}{4} + C$. 8. $\\sin 2x + C$, $1 + C = 0$: $F = \\sin 2x - 1$.`,
      },
      [
        q(t("The antiderivative of f(kx + b) is…", "f(kx + b)-ի նախնականը…", "Первообразная для f(kx + b) —"), [t("k·F(kx + b)", "k·F(kx + b)", "k·F(kx + b)"), t("(1/k)·F(kx + b)", "(1/k)·F(kx + b)", "(1/k)·F(kx + b)"), t("F(kx + b)", "F(kx + b)", "F(kx + b)")], 1),
        q(t("The antiderivative of cos 5x is…", "cos 5x-ի նախնականը…", "Первообразная для cos 5x —"), [t("5 sin 5x + C", "5 sin 5x + C", "5 sin 5x + C"), t("sin 5x + C", "sin 5x + C", "sin 5x + C"), t("(1/5) sin 5x + C", "(1/5) sin 5x + C", "(1/5) sin 5x + C")], 2),
        q(t("The antiderivative of e^(−3x) is…", "e^(−3x)-ի նախնականը…", "Первообразная для e^(−3x) —"), [t("−(1/3) e^(−3x) + C", "−(1/3) e^(−3x) + C", "−(1/3) e^(−3x) + C"), t("−3 e^(−3x) + C", "−3 e^(−3x) + C", "−3 e^(−3x) + C"), t("e^(−3x) + C", "e^(−3x) + C", "e^(−3x) + C")], 0),
        q(t("To find the antiderivative of x(x + 2)², first…", "x(x + 2)²-ի նախնականը գտնելու համար նախ…", "Чтобы найти первообразную для x(x + 2)², сначала…"), [t("multiply the antiderivatives of the factors", "բազմապատկում ենք արտադրիչների նախնականները", "перемножают первообразные множителей"), t("expand the brackets", "բացում ենք փակագծերը", "раскрывают скобки"), t("differentiate", "ածանցում ենք", "дифференцируют")], 1),
        q(t("The antiderivative of 1/(3x + 2) is…", "1/(3x + 2)-ի նախնականը…", "Первообразная для 1/(3x + 2) —"), [t("3 ln|3x + 2| + C", "3 ln|3x + 2| + C", "3 ln|3x + 2| + C"), t("(1/3) ln|3x + 2| + C", "(1/3) ln|3x + 2| + C", "(1/3) ln|3x + 2| + C"), t("−3/(3x + 2)² + C", "−3/(3x + 2)² + C", "−3/(3x + 2)² + C")], 1),
        q(t("The antiderivative of 6x² − 2 with F(1) = 4 is…", "6x² − 2-ի նախնականը F(1) = 4 պայմանով…", "Первообразная для 6x² − 2 с F(1) = 4 —"), [t("2x³ − 2x + 4", "2x³ − 2x + 4", "2x³ − 2x + 4"), t("2x³ − 2x", "2x³ − 2x", "2x³ − 2x"), t("12x + 4", "12x + 4", "12x + 4")], 0),
      ],
    ),
    lesson(
      "definite-integral",
      ["Area and the definite integral", "Մակերես և որոշյալ ինտեգրալ", "Площадь криволинейной трапеции и интеграл"],
      {
        en: ["Describe a curvilinear trapezium and approximate its area by sums of rectangles", "Define the definite integral ∫ₐᵇ f(x)dx as the limit of such sums", "Use the properties: linearity, additivity over intervals, the sign of the integral"],
        hy: ["Նկարագրել կորագիծ սեղանը և նրա մակերեսը մոտարկել ուղղանկյունների գումարներով", "Սահմանել ∫ₐᵇ f(x)dx որոշյալ ինտեգրալը որպես այդպիսի գումարների սահման", "Օգտվել հատկություններից․ գծայնություն, ադիտիվություն միջակայքերի նկատմամբ, ինտեգրալի նշան"],
        ru: ["Описывать криволинейную трапецию и приближать её площадь суммами прямоугольников", "Определять определённый интеграл ∫ₐᵇ f(x)dx как предел таких сумм", "Использовать свойства: линейность, аддитивность по отрезкам, знак интеграла"],
      },
      {
        en: `## The curvilinear trapezium

Let $f$ be continuous and non-negative on $[a; b]$. The figure bounded by the graph $y = f(x)$, the $x$-axis and the vertical lines $x = a$, $x = b$ is called a **curvilinear trapezium**. How do we find its area $S$?

## Approximating by rectangles

Divide $[a; b]$ into $n$ equal parts of length $\\Delta x = \\dfrac{b - a}{n}$ with points $x_0 = a, x_1, \\ldots, x_n = b$. On each part build a rectangle of height $f(x_k)$. The total area of the rectangles is the **integral sum**

$$S_n = f(x_0)\\Delta x + f(x_1)\\Delta x + \\ldots + f(x_{n-1})\\Delta x.$$

As $n$ grows, the staircase hugs the curve more closely and $S_n \\to S$.

**Example 1.** $f(x) = x$ on $[0; 1]$ with $n = 4$: $\\Delta x = 0.25$, heights $0, 0.25, 0.5, 0.75$, so $S_4 = 0.25(0 + 0.25 + 0.5 + 0.75) = 0.375$. With $n = 8$: $S_8 = 0.4375$. The limit is the area of the triangle, $0.5$.

## Definition

> The **definite integral** of $f$ from $a$ to $b$ is the limit of the integral sums as $n \\to \\infty$:
>
> $\\displaystyle\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} S_n.$

$a$ and $b$ are the **lower** and **upper limits**, $f$ is the **integrand**. For $f \\ge 0$ the integral equals the area of the curvilinear trapezium. For $f \\le 0$ the sums are negative, so the integral equals **minus** the area.

**Example 2.** $\\displaystyle\\int_0^1 x\\,dx = \\dfrac12$ (triangle), $\\displaystyle\\int_0^3 2\\,dx = 6$ (rectangle $3 \\times 2$), $\\displaystyle\\int_{-2}^{2} \\sqrt{4 - x^2}\\,dx = 2\\pi$ (half of a disc of radius $2$).

## Properties

For continuous $f$, $g$ and constants $k$:

1. $\\displaystyle\\int_a^b \\big(f(x) + g(x)\\big)dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$, $\\displaystyle\\int_a^b k f(x)\\,dx = k\\int_a^b f(x)\\,dx$.
2. $\\displaystyle\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$ (additivity).
3. $\\displaystyle\\int_a^a f(x)\\,dx = 0$ and $\\displaystyle\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.
4. If $f(x) \\ge 0$ on $[a; b]$, then $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$.

**Example 3.** Knowing $\\displaystyle\\int_0^2 f = 5$ and $\\displaystyle\\int_2^6 f = 3$, we get $\\displaystyle\\int_0^6 f = 8$ and $\\displaystyle\\int_0^6 3f = 24$.

**Example 4.** $\\displaystyle\\int_{-1}^{1} x^3\\,dx = 0$: the function is odd, and the area below the axis on $[-1; 0]$ cancels the area above it on $[0; 1]$.

### Exercises

1. Compute $S_4$ for $f(x) = x^2$ on $[0; 1]$ using left endpoints. Compare with the exact value $\\dfrac13$.
2. Evaluate $\\displaystyle\\int_1^4 3\\,dx$ as an area.
3. Evaluate $\\displaystyle\\int_0^2 (2x)\\,dx$ as an area.
4. Evaluate $\\displaystyle\\int_0^3 \\sqrt{9 - x^2}\\,dx$ as an area.
5. Given $\\displaystyle\\int_0^5 f = 7$ and $\\displaystyle\\int_3^5 f = 2$, find $\\displaystyle\\int_0^3 f$ and $\\displaystyle\\int_5^0 f$.
6. Given $\\displaystyle\\int_1^3 f = 4$, $\\displaystyle\\int_1^3 g = -1$, find $\\displaystyle\\int_1^3 (2f - 3g)$.
7. Without computing, state the sign of $\\displaystyle\\int_1^2 (x^2 - 5)\\,dx$.
8. Explain why $\\displaystyle\\int_{-\\pi}^{\\pi} \\sin x\\,dx = 0$.

### Answers

1. $0.25(0 + 0.0625 + 0.25 + 0.5625) = 0.21875$, less than $\\dfrac13$ because the function increases. 2. $9$. 3. Triangle: $\\dfrac12 \\cdot 2 \\cdot 4 = 4$. 4. Quarter disc: $\\dfrac{9\\pi}{4}$. 5. $5$; $-7$. 6. $8 + 3 = 11$. 7. Negative: $x^2 - 5 < 0$ on $[1; 2]$. 8. $\\sin x$ is odd; the areas on $[-\\pi; 0]$ and $[0; \\pi]$ are equal and have opposite signs.`,
        hy: `## Կորագիծ սեղան

Դիցուք $f$-ն անընդհատ է և ոչ բացասական $[a; b]$-ում։ $y = f(x)$ գրաֆիկով, $x$ առանցքով և $x = a$, $x = b$ ուղղաձիգ գծերով սահմանափակված պատկերը կոչվում է **կորագիծ սեղան**։ Ինչպե՞ս գտնել նրա $S$ մակերեսը։

## Մոտարկում ուղղանկյուններով

$[a; b]$-ը բաժանենք $n$ հավասար մասերի՝ $\\Delta x = \\dfrac{b - a}{n}$ երկարությամբ, $x_0 = a, x_1, \\ldots, x_n = b$ կետերով։ Յուրաքանչյուր մասի վրա կառուցենք $f(x_k)$ բարձրությամբ ուղղանկյուն։ Ուղղանկյունների ընդհանուր մակերեսը **ինտեգրալային գումարն** է․

$$S_n = f(x_0)\\Delta x + f(x_1)\\Delta x + \\ldots + f(x_{n-1})\\Delta x$$

$n$-ի մեծացմանը զուգընթաց աստիճանավոր պատկերն ավելի սեղմ է հարում կորին, և $S_n \\to S$։

**Օրինակ 1։** $f(x) = x$ $[0; 1]$-ում, $n = 4$․ $\\Delta x = 0{,}25$, բարձրությունները՝ $0$, $0{,}25$, $0{,}5$, $0{,}75$, ուստի $S_4 = 0{,}25(0 + 0{,}25 + 0{,}5 + 0{,}75) = 0{,}375$։ $n = 8$ դեպքում՝ $S_8 = 0{,}4375$։ Սահմանն եռանկյան մակերեսն է՝ $0{,}5$։

## Սահմանում

> $f$-ի **որոշյալ ինտեգրալը** $a$-ից $b$ ինտեգրալային գումարների սահմանն է, երբ $n \\to \\infty$․
>
> $\\displaystyle\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} S_n$

$a$-ն և $b$-ն **ստորին** և **վերին սահմաններն** են, $f$-ը՝ **ենթաինտեգրալային ֆունկցիան**։ $f \\ge 0$ դեպքում ինտեգրալը հավասար է կորագիծ սեղանի մակերեսին։ $f \\le 0$ դեպքում գումարները բացասական են, ուստի ինտեգրալը հավասար է մակերեսին՝ **մինուս** նշանով։

**Օրինակ 2։** $\\displaystyle\\int_0^1 x\\,dx = \\dfrac12$ (եռանկյուն), $\\displaystyle\\int_0^3 2\\,dx = 6$ ($3 \\times 2$ ուղղանկյուն), $\\displaystyle\\int_{-2}^{2} \\sqrt{4 - x^2}\\,dx = 2\\pi$ ($2$ շառավղով կիսաշրջան)։

## Հատկություններ

Անընդհատ $f$, $g$ և հաստատուն $k$ դեպքում․

1. $\\displaystyle\\int_a^b \\big(f(x) + g(x)\\big)dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$, $\\displaystyle\\int_a^b k f(x)\\,dx = k\\int_a^b f(x)\\,dx$։
2. $\\displaystyle\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$ (ադիտիվություն)։
3. $\\displaystyle\\int_a^a f(x)\\,dx = 0$ և $\\displaystyle\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$։
4. Եթե $f(x) \\ge 0$ $[a; b]$-ում, ապա $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$։

**Օրինակ 3։** Եթե $\\displaystyle\\int_0^2 f = 5$ և $\\displaystyle\\int_2^6 f = 3$, ապա $\\displaystyle\\int_0^6 f = 8$ և $\\displaystyle\\int_0^6 3f = 24$։

**Օրինակ 4։** $\\displaystyle\\int_{-1}^{1} x^3\\,dx = 0$․ ֆունկցիան կենտ է, և $[-1; 0]$-ում առանցքից ներքև մակերեսը փոխհատուցում է $[0; 1]$-ում առանցքից վերև մակերեսին։

### Վարժություններ

1. Հաշվեք $S_4$-ը $f(x) = x^2$-ի համար $[0; 1]$-ում՝ ձախ ծայրակետերով։ Համեմատեք $\\dfrac13$ ճշգրիտ արժեքի հետ։
2. Հաշվեք $\\displaystyle\\int_1^4 3\\,dx$-ը որպես մակերես։
3. Հաշվեք $\\displaystyle\\int_0^2 (2x)\\,dx$-ը որպես մակերես։
4. Հաշվեք $\\displaystyle\\int_0^3 \\sqrt{9 - x^2}\\,dx$-ը որպես մակերես։
5. Եթե $\\displaystyle\\int_0^5 f = 7$ և $\\displaystyle\\int_3^5 f = 2$, գտեք $\\displaystyle\\int_0^3 f$-ը և $\\displaystyle\\int_5^0 f$-ը։
6. Եթե $\\displaystyle\\int_1^3 f = 4$, $\\displaystyle\\int_1^3 g = -1$, գտեք $\\displaystyle\\int_1^3 (2f - 3g)$-ը։
7. Առանց հաշվելու որոշեք $\\displaystyle\\int_1^2 (x^2 - 5)\\,dx$-ի նշանը։
8. Բացատրեք, թե ինչու $\\displaystyle\\int_{-\\pi}^{\\pi} \\sin x\\,dx = 0$։

### Պատասխաններ

1. $0{,}25(0 + 0{,}0625 + 0{,}25 + 0{,}5625) = 0{,}21875$, փոքր է $\\dfrac13$-ից, քանի որ ֆունկցիան աճում է։ 2. $9$։ 3. Եռանկյուն՝ $\\dfrac12 \\cdot 2 \\cdot 4 = 4$։ 4. Քառորդ շրջան՝ $\\dfrac{9\\pi}{4}$։ 5. $5$, $-7$։ 6. $8 + 3 = 11$։ 7. Բացասական․ $x^2 - 5 < 0$ $[1; 2]$-ում։ 8. $\\sin x$-ը կենտ է, $[-\\pi; 0]$-ում և $[0; \\pi]$-ում մակերեսները հավասար են և հակառակ նշանի։`,
        ru: `## Криволинейная трапеция

Пусть $f$ непрерывна и неотрицательна на $[a; b]$. Фигура, ограниченная графиком $y = f(x)$, осью $x$ и вертикальными прямыми $x = a$, $x = b$, называется **криволинейной трапецией**. Как найти её площадь $S$?

## Приближение прямоугольниками

Разобьём $[a; b]$ на $n$ равных частей длины $\\Delta x = \\dfrac{b - a}{n}$ точками $x_0 = a, x_1, \\ldots, x_n = b$. На каждой части построим прямоугольник высоты $f(x_k)$. Суммарная площадь прямоугольников — **интегральная сумма**

$$S_n = f(x_0)\\Delta x + f(x_1)\\Delta x + \\ldots + f(x_{n-1})\\Delta x.$$

С ростом $n$ ступенчатая фигура всё теснее прилегает к кривой, и $S_n \\to S$.

**Пример 1.** $f(x) = x$ на $[0; 1]$ при $n = 4$: $\\Delta x = 0{,}25$, высоты $0$, $0{,}25$, $0{,}5$, $0{,}75$, значит $S_4 = 0{,}25(0 + 0{,}25 + 0{,}5 + 0{,}75) = 0{,}375$. При $n = 8$: $S_8 = 0{,}4375$. Предел — площадь треугольника, $0{,}5$.

## Определение

> **Определённым интегралом** от $f$ от $a$ до $b$ называется предел интегральных сумм при $n \\to \\infty$:
>
> $\\displaystyle\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} S_n.$

$a$ и $b$ — **нижний** и **верхний пределы**, $f$ — **подынтегральная функция**. При $f \\ge 0$ интеграл равен площади криволинейной трапеции. При $f \\le 0$ суммы отрицательны, поэтому интеграл равен площади со знаком **минус**.

**Пример 2.** $\\displaystyle\\int_0^1 x\\,dx = \\dfrac12$ (треугольник), $\\displaystyle\\int_0^3 2\\,dx = 6$ (прямоугольник $3 \\times 2$), $\\displaystyle\\int_{-2}^{2} \\sqrt{4 - x^2}\\,dx = 2\\pi$ (полукруг радиуса $2$).

## Свойства

Для непрерывных $f$, $g$ и константы $k$:

1. $\\displaystyle\\int_a^b \\big(f(x) + g(x)\\big)dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$, $\\displaystyle\\int_a^b k f(x)\\,dx = k\\int_a^b f(x)\\,dx$.
2. $\\displaystyle\\int_a^c f(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx$ (аддитивность).
3. $\\displaystyle\\int_a^a f(x)\\,dx = 0$ и $\\displaystyle\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.
4. Если $f(x) \\ge 0$ на $[a; b]$, то $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$.

**Пример 3.** Зная $\\displaystyle\\int_0^2 f = 5$ и $\\displaystyle\\int_2^6 f = 3$, получаем $\\displaystyle\\int_0^6 f = 8$ и $\\displaystyle\\int_0^6 3f = 24$.

**Пример 4.** $\\displaystyle\\int_{-1}^{1} x^3\\,dx = 0$: функция нечётна, и площадь под осью на $[-1; 0]$ компенсирует площадь над осью на $[0; 1]$.

### Упражнения

1. Вычислите $S_4$ для $f(x) = x^2$ на $[0; 1]$ по левым концам. Сравните с точным значением $\\dfrac13$.
2. Вычислите $\\displaystyle\\int_1^4 3\\,dx$ как площадь.
3. Вычислите $\\displaystyle\\int_0^2 (2x)\\,dx$ как площадь.
4. Вычислите $\\displaystyle\\int_0^3 \\sqrt{9 - x^2}\\,dx$ как площадь.
5. Зная $\\displaystyle\\int_0^5 f = 7$ и $\\displaystyle\\int_3^5 f = 2$, найдите $\\displaystyle\\int_0^3 f$ и $\\displaystyle\\int_5^0 f$.
6. Зная $\\displaystyle\\int_1^3 f = 4$, $\\displaystyle\\int_1^3 g = -1$, найдите $\\displaystyle\\int_1^3 (2f - 3g)$.
7. Не вычисляя, определите знак $\\displaystyle\\int_1^2 (x^2 - 5)\\,dx$.
8. Объясните, почему $\\displaystyle\\int_{-\\pi}^{\\pi} \\sin x\\,dx = 0$.

### Ответы

1. $0{,}25(0 + 0{,}0625 + 0{,}25 + 0{,}5625) = 0{,}21875$, меньше $\\dfrac13$, так как функция возрастает. 2. $9$. 3. Треугольник: $\\dfrac12 \\cdot 2 \\cdot 4 = 4$. 4. Четверть круга: $\\dfrac{9\\pi}{4}$. 5. $5$; $-7$. 6. $8 + 3 = 11$. 7. Отрицательный: $x^2 - 5 < 0$ на $[1; 2]$. 8. $\\sin x$ нечётна; площади на $[-\\pi; 0]$ и $[0; \\pi]$ равны и имеют противоположные знаки.`,
      },
      [
        q(t("A curvilinear trapezium is bounded by…", "Կորագիծ սեղանը սահմանափակված է…", "Криволинейная трапеция ограничена…"), [t("the graph, the x-axis and two vertical lines", "գրաֆիկով, x առանցքով և երկու ուղղաձիգ գծով", "графиком, осью x и двумя вертикальными прямыми"), t("two parallel lines", "երկու զուգահեռ ուղիղներով", "двумя параллельными прямыми"), t("the graph and the y-axis", "գրաֆիկով և y առանցքով", "графиком и осью y")], 0),
        q(t("The definite integral is defined as…", "Որոշյալ ինտեգրալը սահմանվում է որպես…", "Определённый интеграл определяется как…"), [t("the derivative of f", "f-ի ածանցյալ", "производная f"), t("the limit of integral sums", "ինտեգրալային գումարների սահման", "предел интегральных сумм"), t("the product f(b)·(b − a)", "f(b)·(b − a) արտադրյալ", "произведение f(b)·(b − a)")], 1),
        q(t("∫₀³ 2 dx equals…", "∫₀³ 2 dx-ը հավասար է…", "∫₀³ 2 dx равен…"), [t("2", "2", "2"), t("3", "3", "3"), t("6", "6", "6")], 2),
        q(t("If f ≤ 0 on [a; b], the integral is…", "Եթե f ≤ 0 [a; b]-ում, ինտեգրալը…", "Если f ≤ 0 на [a; b], интеграл…"), [t("minus the area", "մակերեսի հակադիրն է", "равен минус площади"), t("the area", "մակերեսն է", "равен площади"), t("zero", "զրո է", "равен нулю")], 0),
        q(t("∫ₐᵇ f + ∫ᵇᶜ f equals…", "∫ₐᵇ f + ∫ᵇᶜ f-ը հավասար է…", "∫ₐᵇ f + ∫ᵇᶜ f равен…"), [t("∫ₐᶜ f", "∫ₐᶜ f", "∫ₐᶜ f"), t("∫ᶜₐ f", "∫ᶜₐ f", "∫ᶜₐ f"), t("0", "0", "0")], 0),
        q(t("∫₋₁¹ x³ dx equals…", "∫₋₁¹ x³ dx-ը հավասար է…", "∫₋₁¹ x³ dx равен…"), [t("1/2", "1/2", "1/2"), t("0", "0", "0"), t("1/4", "1/4", "1/4")], 1),
      ],
    ),
    lesson(
      "newton-leibniz",
      ["Newton–Leibniz formula and applications", "Նյուտոն–Լայբնիցի բանաձև և կիրառություններ", "Формула Ньютона–Лейбница и применения"],
      {
        en: ["Compute definite integrals with ∫ₐᵇ f(x)dx = F(b) − F(a)", "Find the area between two curves and of figures partly below the x-axis", "Apply the integral to distance from velocity and other accumulated quantities"],
        hy: ["Հաշվել որոշյալ ինտեգրալներ ∫ₐᵇ f(x)dx = F(b) − F(a) բանաձևով", "Գտնել երկու կորերի միջև և մասամբ x առանցքից ներքև գտնվող պատկերների մակերեսը", "Կիրառել ինտեգրալն արագությունից անցած ճանապարհը և այլ կուտակված մեծություններ գտնելու համար"],
        ru: ["Вычислять определённые интегралы по формуле ∫ₐᵇ f(x)dx = F(b) − F(a)", "Находить площадь между двумя кривыми и фигур, частично лежащих под осью x", "Применять интеграл для нахождения пути по скорости и других накопленных величин"],
      },
      {
        en: `## The formula

The two halves of the course meet here: the integral, defined through areas, is computed through antiderivatives.

> **Newton–Leibniz formula.** If $F$ is any antiderivative of a continuous $f$ on $[a; b]$, then
>
> $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a).$

The difference is written $F(x)\\Big|_a^b$. The constant $C$ cancels, so any antiderivative may be used.

**Why it works.** Let $S(x)$ be the area under the graph from $a$ to $x$. Increasing $x$ by a small $h$ adds a thin strip of area about $f(x)h$, so $S'(x) = f(x)$: the area function is an antiderivative of $f$. Since $S(a) = 0$, $S(x) = F(x) - F(a)$, and $S(b) = F(b) - F(a)$.

**Example 1.** $\\displaystyle\\int_0^1 x^2\\,dx = \\dfrac{x^3}{3}\\Big|_0^1 = \\dfrac13 - 0 = \\dfrac13$. The staircase sums from the previous lesson tend exactly to this.

**Example 2.** $\\displaystyle\\int_1^4 \\dfrac{1}{\\sqrt x}\\,dx = 2\\sqrt x\\Big|_1^4 = 4 - 2 = 2$.

**Example 3.** $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = -\\cos x\\Big|_0^{\\pi} = -(-1) - (-1) = 2$.

**Example 4.** $\\displaystyle\\int_0^{\\ln 2} e^x\\,dx = e^x\\Big|_0^{\\ln 2} = 2 - 1 = 1$.

## Areas

**Below the axis.** For $f \\le 0$ the area is $-\\displaystyle\\int_a^b f\\,dx$. If the graph crosses the axis, split the interval at the zeros.

**Example 5.** Area between $y = x^2 - 1$ and the $x$-axis on $[0; 2]$. Zero at $x = 1$. $\\displaystyle\\int_0^1 (x^2 - 1)dx = -\\dfrac23$, $\\displaystyle\\int_1^2 (x^2 - 1)dx = \\dfrac43$. Area $= \\dfrac23 + \\dfrac43 = 2$.

**Between two curves.** If $f(x) \\ge g(x)$ on $[a; b]$, the area between the graphs is $\\displaystyle\\int_a^b \\big(f(x) - g(x)\\big)dx$.

**Example 6.** Area between $y = x$ and $y = x^2$. They meet at $x = 0$ and $x = 1$, and $x \\ge x^2$ there: $S = \\displaystyle\\int_0^1 (x - x^2)dx = \\dfrac12 - \\dfrac13 = \\dfrac16$.

**Example 7.** Area between $y = 4 - x^2$ and $y = x + 2$. Intersections: $4 - x^2 = x + 2$, $x = -2$ or $x = 1$. $S = \\displaystyle\\int_{-2}^{1} (2 - x - x^2)dx = \\left(2x - \\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^{1} = \\dfrac76 + \\dfrac{10}{3} = \\dfrac92$.

## Physical applications

If $v(t)$ is velocity, the distance travelled from $t_1$ to $t_2$ is $\\displaystyle\\int_{t_1}^{t_2} v(t)\\,dt$. In general, the integral of a rate gives the total change.

**Example 8.** $v(t) = 3t^2 + 2$ m/s. Distance in the first $2$ s: $\\displaystyle\\int_0^2 (3t^2 + 2)dt = (t^3 + 2t)\\Big|_0^2 = 12$ m.

**Example 9.** Water flows into a tank at $q(t) = 6 - t$ litres per minute, $0 \\le t \\le 6$. Total volume: $\\displaystyle\\int_0^6 (6 - t)dt = 36 - 18 = 18$ litres.

### Exercises

1. Compute $\\displaystyle\\int_1^3 (2x + 1)dx$ and $\\displaystyle\\int_0^2 (x^3 - x)dx$.
2. Compute $\\displaystyle\\int_1^e \\dfrac{dx}{x}$ and $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$.
3. Compute $\\displaystyle\\int_0^1 e^{2x}dx$ and $\\displaystyle\\int_0^{\\pi/6} \\sin 3x\\,dx$.
4. Find the area under $y = \\dfrac1{x^2}$ on $[1; 2]$.
5. Find the area between $y = x^2 - 4$ and the $x$-axis.
6. Find the area between $y = \\sqrt x$ and $y = x$.
7. Find the area between $y = x^2$ and $y = 2x + 3$.
8. $v(t) = 4t - t^2$ m/s. Find the distance travelled for $0 \\le t \\le 4$.

### Answers

1. $(x^2 + x)\\Big|_1^3 = 12 - 2 = 10$; $\\left(\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right)\\Big|_0^2 = 4 - 2 = 2$. 2. $\\ln e - \\ln 1 = 1$; $1$. 3. $\\dfrac{e^2 - 1}{2}$; $-\\dfrac13 \\cos 3x\\Big|_0^{\\pi/6} = \\dfrac13$. 4. $-\\dfrac1x\\Big|_1^2 = \\dfrac12$. 5. Zeros $\\pm 2$; $-\\displaystyle\\int_{-2}^{2}(x^2 - 4)dx = \\dfrac{32}{3}$. 6. On $[0; 1]$, $\\sqrt x \\ge x$: $\\dfrac23 - \\dfrac12 = \\dfrac16$. 7. Intersections $x = -1$, $x = 3$: $\\displaystyle\\int_{-1}^{3}(2x + 3 - x^2)dx = \\dfrac{32}{3}$. 8. $\\left(2t^2 - \\dfrac{t^3}{3}\\right)\\Big|_0^4 = 32 - \\dfrac{64}{3} = \\dfrac{32}{3}$ m.`,
        hy: `## Բանաձևը

Դասընթացի երկու կեսերն այստեղ հանդիպում են․ մակերեսների միջոցով սահմանված ինտեգրալը հաշվվում է նախնականների միջոցով։

> **Նյուտոն–Լայբնիցի բանաձև։** Եթե $F$-ը $[a; b]$-ում անընդհատ $f$-ի որևէ նախնական է, ապա
>
> $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$

Տարբերությունը գրվում է $F(x)\\Big|_a^b$։ $C$ հաստատունը կրճատվում է, ուստի կարելի է օգտվել ցանկացած նախնականից։

**Ինչու է այն գործում։** Դիցուք $S(x)$-ը գրաֆիկի տակի մակերեսն է $a$-ից $x$։ $x$-ը փոքր $h$-ով մեծացնելիս ավելանում է մոտավորապես $f(x)h$ մակերեսով բարակ շերտ, ուստի $S'(x) = f(x)$․ մակերեսի ֆունկցիան $f$-ի նախնական է։ Քանի որ $S(a) = 0$, ապա $S(x) = F(x) - F(a)$, և $S(b) = F(b) - F(a)$։

**Օրինակ 1։** $\\displaystyle\\int_0^1 x^2\\,dx = \\dfrac{x^3}{3}\\Big|_0^1 = \\dfrac13 - 0 = \\dfrac13$։ Նախորդ դասի աստիճանավոր գումարները ձգտում են հենց սրան։

**Օրինակ 2։** $\\displaystyle\\int_1^4 \\dfrac{1}{\\sqrt x}\\,dx = 2\\sqrt x\\Big|_1^4 = 4 - 2 = 2$։

**Օրինակ 3։** $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = -\\cos x\\Big|_0^{\\pi} = -(-1) - (-1) = 2$։

**Օրինակ 4։** $\\displaystyle\\int_0^{\\ln 2} e^x\\,dx = e^x\\Big|_0^{\\ln 2} = 2 - 1 = 1$։

## Մակերեսներ

**Առանցքից ներքև։** $f \\le 0$ դեպքում մակերեսը $-\\displaystyle\\int_a^b f\\,dx$ է։ Եթե գրաֆիկը հատում է առանցքը, միջակայքը բաժանեք զրոների կետերում։

**Օրինակ 5։** $y = x^2 - 1$-ի և $x$ առանցքի միջև մակերեսը $[0; 2]$-ում։ Զրոն $x = 1$ է։ $\\displaystyle\\int_0^1 (x^2 - 1)dx = -\\dfrac23$, $\\displaystyle\\int_1^2 (x^2 - 1)dx = \\dfrac43$։ Մակերեսը՝ $\\dfrac23 + \\dfrac43 = 2$։

**Երկու կորերի միջև։** Եթե $f(x) \\ge g(x)$ $[a; b]$-ում, գրաֆիկների միջև մակերեսը $\\displaystyle\\int_a^b \\big(f(x) - g(x)\\big)dx$ է։

**Օրինակ 6։** $y = x$-ի և $y = x^2$-ի միջև մակերեսը։ Հատվում են $x = 0$ և $x = 1$ կետերում, և այնտեղ $x \\ge x^2$․ $S = \\displaystyle\\int_0^1 (x - x^2)dx = \\dfrac12 - \\dfrac13 = \\dfrac16$։

**Օրինակ 7։** $y = 4 - x^2$-ի և $y = x + 2$-ի միջև մակերեսը։ Հատման կետերը՝ $4 - x^2 = x + 2$, $x = -2$ կամ $x = 1$։ $S = \\displaystyle\\int_{-2}^{1} (2 - x - x^2)dx = \\left(2x - \\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^{1} = \\dfrac76 + \\dfrac{10}{3} = \\dfrac92$։

## Ֆիզիկական կիրառություններ

Եթե $v(t)$-ն արագությունն է, $t_1$-ից $t_2$ անցած ճանապարհը $\\displaystyle\\int_{t_1}^{t_2} v(t)\\,dt$ է։ Ընդհանրապես, փոփոխության արագության ինտեգրալը տալիս է ընդհանուր փոփոխությունը։

**Օրինակ 8։** $v(t) = 3t^2 + 2$ մ/վ։ Առաջին $2$ վրկ-ում անցած ճանապարհը՝ $\\displaystyle\\int_0^2 (3t^2 + 2)dt = (t^3 + 2t)\\Big|_0^2 = 12$ մ։

**Օրինակ 9։** Ջուրը լցվում է բաքի մեջ $q(t) = 6 - t$ լ/րոպե արագությամբ, $0 \\le t \\le 6$։ Ընդհանուր ծավալը՝ $\\displaystyle\\int_0^6 (6 - t)dt = 36 - 18 = 18$ լ։

### Վարժություններ

1. Հաշվեք $\\displaystyle\\int_1^3 (2x + 1)dx$ և $\\displaystyle\\int_0^2 (x^3 - x)dx$։
2. Հաշվեք $\\displaystyle\\int_1^e \\dfrac{dx}{x}$ և $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$։
3. Հաշվեք $\\displaystyle\\int_0^1 e^{2x}dx$ և $\\displaystyle\\int_0^{\\pi/6} \\sin 3x\\,dx$։
4. Գտեք $y = \\dfrac1{x^2}$-ի տակի մակերեսը $[1; 2]$-ում։
5. Գտեք $y = x^2 - 4$-ի և $x$ առանցքի միջև մակերեսը։
6. Գտեք $y = \\sqrt x$-ի և $y = x$-ի միջև մակերեսը։
7. Գտեք $y = x^2$-ի և $y = 2x + 3$-ի միջև մակերեսը։
8. $v(t) = 4t - t^2$ մ/վ։ Գտեք $0 \\le t \\le 4$ ընթացքում անցած ճանապարհը։

### Պատասխաններ

1. $(x^2 + x)\\Big|_1^3 = 12 - 2 = 10$, $\\left(\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right)\\Big|_0^2 = 4 - 2 = 2$։ 2. $\\ln e - \\ln 1 = 1$, $1$։ 3. $\\dfrac{e^2 - 1}{2}$, $-\\dfrac13 \\cos 3x\\Big|_0^{\\pi/6} = \\dfrac13$։ 4. $-\\dfrac1x\\Big|_1^2 = \\dfrac12$։ 5. Զրոները՝ $\\pm 2$, $-\\displaystyle\\int_{-2}^{2}(x^2 - 4)dx = \\dfrac{32}{3}$։ 6. $[0; 1]$-ում $\\sqrt x \\ge x$՝ $\\dfrac23 - \\dfrac12 = \\dfrac16$։ 7. Հատման կետերը՝ $x = -1$, $x = 3$․ $\\displaystyle\\int_{-1}^{3}(2x + 3 - x^2)dx = \\dfrac{32}{3}$։ 8. $\\left(2t^2 - \\dfrac{t^3}{3}\\right)\\Big|_0^4 = 32 - \\dfrac{64}{3} = \\dfrac{32}{3}$ մ։`,
        ru: `## Формула

Здесь встречаются две половины курса: интеграл, определённый через площади, вычисляется через первообразные.

> **Формула Ньютона–Лейбница.** Если $F$ — любая первообразная непрерывной на $[a; b]$ функции $f$, то
>
> $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a).$

Разность записывают как $F(x)\\Big|_a^b$. Константа $C$ сокращается, поэтому подходит любая первообразная.

**Почему это работает.** Пусть $S(x)$ — площадь под графиком от $a$ до $x$. При увеличении $x$ на малое $h$ добавляется тонкая полоска площадью около $f(x)h$, поэтому $S'(x) = f(x)$: функция площади — первообразная для $f$. Так как $S(a) = 0$, то $S(x) = F(x) - F(a)$, и $S(b) = F(b) - F(a)$.

**Пример 1.** $\\displaystyle\\int_0^1 x^2\\,dx = \\dfrac{x^3}{3}\\Big|_0^1 = \\dfrac13 - 0 = \\dfrac13$. Ступенчатые суммы из прошлого урока стремятся именно к этому.

**Пример 2.** $\\displaystyle\\int_1^4 \\dfrac{1}{\\sqrt x}\\,dx = 2\\sqrt x\\Big|_1^4 = 4 - 2 = 2$.

**Пример 3.** $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = -\\cos x\\Big|_0^{\\pi} = -(-1) - (-1) = 2$.

**Пример 4.** $\\displaystyle\\int_0^{\\ln 2} e^x\\,dx = e^x\\Big|_0^{\\ln 2} = 2 - 1 = 1$.

## Площади

**Под осью.** При $f \\le 0$ площадь равна $-\\displaystyle\\int_a^b f\\,dx$. Если график пересекает ось, разбейте отрезок в нулях функции.

**Пример 5.** Площадь между $y = x^2 - 1$ и осью $x$ на $[0; 2]$. Нуль при $x = 1$. $\\displaystyle\\int_0^1 (x^2 - 1)dx = -\\dfrac23$, $\\displaystyle\\int_1^2 (x^2 - 1)dx = \\dfrac43$. Площадь $= \\dfrac23 + \\dfrac43 = 2$.

**Между двумя кривыми.** Если $f(x) \\ge g(x)$ на $[a; b]$, площадь между графиками равна $\\displaystyle\\int_a^b \\big(f(x) - g(x)\\big)dx$.

**Пример 6.** Площадь между $y = x$ и $y = x^2$. Они пересекаются при $x = 0$ и $x = 1$, и там $x \\ge x^2$: $S = \\displaystyle\\int_0^1 (x - x^2)dx = \\dfrac12 - \\dfrac13 = \\dfrac16$.

**Пример 7.** Площадь между $y = 4 - x^2$ и $y = x + 2$. Пересечения: $4 - x^2 = x + 2$, $x = -2$ или $x = 1$. $S = \\displaystyle\\int_{-2}^{1} (2 - x - x^2)dx = \\left(2x - \\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right)\\Big|_{-2}^{1} = \\dfrac76 + \\dfrac{10}{3} = \\dfrac92$.

## Физические применения

Если $v(t)$ — скорость, то путь за время от $t_1$ до $t_2$ равен $\\displaystyle\\int_{t_1}^{t_2} v(t)\\,dt$. Вообще, интеграл от скорости изменения даёт полное изменение величины.

**Пример 8.** $v(t) = 3t^2 + 2$ м/с. Путь за первые $2$ с: $\\displaystyle\\int_0^2 (3t^2 + 2)dt = (t^3 + 2t)\\Big|_0^2 = 12$ м.

**Пример 9.** Вода поступает в бак со скоростью $q(t) = 6 - t$ л/мин, $0 \\le t \\le 6$. Общий объём: $\\displaystyle\\int_0^6 (6 - t)dt = 36 - 18 = 18$ л.

### Упражнения

1. Вычислите $\\displaystyle\\int_1^3 (2x + 1)dx$ и $\\displaystyle\\int_0^2 (x^3 - x)dx$.
2. Вычислите $\\displaystyle\\int_1^e \\dfrac{dx}{x}$ и $\\displaystyle\\int_0^{\\pi/2} \\cos x\\,dx$.
3. Вычислите $\\displaystyle\\int_0^1 e^{2x}dx$ и $\\displaystyle\\int_0^{\\pi/6} \\sin 3x\\,dx$.
4. Найдите площадь под $y = \\dfrac1{x^2}$ на $[1; 2]$.
5. Найдите площадь между $y = x^2 - 4$ и осью $x$.
6. Найдите площадь между $y = \\sqrt x$ и $y = x$.
7. Найдите площадь между $y = x^2$ и $y = 2x + 3$.
8. $v(t) = 4t - t^2$ м/с. Найдите путь за $0 \\le t \\le 4$.

### Ответы

1. $(x^2 + x)\\Big|_1^3 = 12 - 2 = 10$; $\\left(\\dfrac{x^4}{4} - \\dfrac{x^2}{2}\\right)\\Big|_0^2 = 4 - 2 = 2$. 2. $\\ln e - \\ln 1 = 1$; $1$. 3. $\\dfrac{e^2 - 1}{2}$; $-\\dfrac13 \\cos 3x\\Big|_0^{\\pi/6} = \\dfrac13$. 4. $-\\dfrac1x\\Big|_1^2 = \\dfrac12$. 5. Нули $\\pm 2$; $-\\displaystyle\\int_{-2}^{2}(x^2 - 4)dx = \\dfrac{32}{3}$. 6. На $[0; 1]$ $\\sqrt x \\ge x$: $\\dfrac23 - \\dfrac12 = \\dfrac16$. 7. Пересечения $x = -1$, $x = 3$: $\\displaystyle\\int_{-1}^{3}(2x + 3 - x^2)dx = \\dfrac{32}{3}$. 8. $\\left(2t^2 - \\dfrac{t^3}{3}\\right)\\Big|_0^4 = 32 - \\dfrac{64}{3} = \\dfrac{32}{3}$ м.`,
      },
      [
        q(t("∫ₐᵇ f(x)dx equals…", "∫ₐᵇ f(x)dx-ը հավասար է…", "∫ₐᵇ f(x)dx равен…"), [t("F(b) − F(a)", "F(b) − F(a)", "F(b) − F(a)"), t("F(a) − F(b)", "F(a) − F(b)", "F(a) − F(b)"), t("f(b) − f(a)", "f(b) − f(a)", "f(b) − f(a)")], 0),
        q(t("∫₀¹ x² dx equals…", "∫₀¹ x² dx-ը հավասար է…", "∫₀¹ x² dx равен…"), [t("1", "1", "1"), t("1/2", "1/2", "1/2"), t("1/3", "1/3", "1/3")], 2),
        q(t("∫₀^π sin x dx equals…", "∫₀^π sin x dx-ը հավասար է…", "∫₀^π sin x dx равен…"), [t("0", "0", "0"), t("2", "2", "2"), t("π", "π", "π")], 1),
        q(t("The area between f and g (f ≥ g) on [a; b] is…", "f-ի և g-ի (f ≥ g) միջև մակերեսը [a; b]-ում…", "Площадь между f и g (f ≥ g) на [a; b] —"), [t("∫ₐᵇ (f − g) dx", "∫ₐᵇ (f − g) dx", "∫ₐᵇ (f − g) dx"), t("∫ₐᵇ (f + g) dx", "∫ₐᵇ (f + g) dx", "∫ₐᵇ (f + g) dx"), t("∫ₐᵇ f·g dx", "∫ₐᵇ f·g dx", "∫ₐᵇ f·g dx")], 0),
        q(t("The area between y = x and y = x² is…", "y = x-ի և y = x²-ի միջև մակերեսը…", "Площадь между y = x и y = x² —"), [t("1/6", "1/6", "1/6"), t("1/3", "1/3", "1/3"), t("1/2", "1/2", "1/2")], 0),
        q(t("The distance travelled with velocity v(t) from t₁ to t₂ is…", "v(t) արագությամբ t₁-ից t₂ անցած ճանապարհը…", "Путь при скорости v(t) от t₁ до t₂ —"), [t("v(t₂) − v(t₁)", "v(t₂) − v(t₁)", "v(t₂) − v(t₁)"), t("∫ v(t) dt from t₁ to t₂", "∫ v(t) dt t₁-ից t₂", "∫ v(t) dt от t₁ до t₂"), t("v′(t₂)", "v′(t₂)", "v′(t₂)")], 1),
      ],
    ),
  ],
};
