import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Derivative", "Ածանցյալ", "Производная"),
  summary: t(
    "The definition of the derivative, the rules of differentiation, derivatives of power and trigonometric functions, the chain rule and the tangent line.",
    "Ածանցյալի սահմանումը, ածանցման կանոնները, աստիճանային և եռանկյունաչափական ֆունկցիաների ածանցյալները, բարդ ֆունկցիայի ածանցյալը և շոշափողը։",
    "Определение производной, правила дифференцирования, производные степенных и тригонометрических функций, производная сложной функции и касательная.",
  ),
  lessons: [
    lesson(
      "derivative-definition",
      ["Definition of the derivative", "Ածանցյալի սահմանումը", "Определение производной"],
      {
        en: ["State the definition of the derivative through the increment of the argument and of the function", "Find derivatives of simple functions directly from the definition", "Recognise points where a function has no derivative"],
        hy: ["Ձևակերպել ածանցյալի սահմանումը արգումենտի և ֆունկցիայի աճերի միջոցով", "Գտնել պարզ ֆունկցիաների ածանցյալները անմիջապես սահմանումից", "Ճանաչել կետեր, որտեղ ֆունկցիան ածանցյալ չունի"],
        ru: ["Формулировать определение производной через приращения аргумента и функции", "Находить производные простых функций по определению", "Узнавать точки, где функция не имеет производной"],
      },
      {
        en: `## Increments

Let $x_0$ be a point and $\\Delta x$ a small change of the argument. The **increment of the function** is

$$\\Delta f = f(x_0 + \\Delta x) - f(x_0).$$

## Definition

> The **derivative** of $f$ at $x_0$ is the limit of the ratio of the increments when $\\Delta x \\to 0$:

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}.$$

If this limit exists, $f$ is called **differentiable** at $x_0$. Finding a derivative is called **differentiation**.

## Three steps

1. Write $\\Delta f$.
2. Divide by $\\Delta x$ and simplify.
3. Let $\\Delta x \\to 0$.

**Example 1.** $f(x) = x^3$. $\\Delta f = (x + \\Delta x)^3 - x^3 = 3x^2\\Delta x + 3x(\\Delta x)^2 + (\\Delta x)^3$. Then $\\dfrac{\\Delta f}{\\Delta x} = 3x^2 + 3x\\Delta x + (\\Delta x)^2 \\to 3x^2$. So $(x^3)' = 3x^2$.

**Example 2.** $f(x) = \\dfrac1x$. $\\Delta f = \\dfrac{1}{x + \\Delta x} - \\dfrac1x = \\dfrac{-\\Delta x}{x(x + \\Delta x)}$, so $\\dfrac{\\Delta f}{\\Delta x} = -\\dfrac{1}{x(x + \\Delta x)} \\to -\\dfrac{1}{x^2}$.

**Example 3.** $f(x) = \\sqrt{x}$, $x > 0$. Multiply by the conjugate: $\\dfrac{\\sqrt{x + \\Delta x} - \\sqrt{x}}{\\Delta x} = \\dfrac{1}{\\sqrt{x + \\Delta x} + \\sqrt{x}} \\to \\dfrac{1}{2\\sqrt{x}}$.

## Where there is no derivative

The function $y = \\lvert x\\rvert$ has a corner at $0$. For $\\Delta x > 0$ the ratio is $1$, for $\\Delta x < 0$ it is $-1$, so the limit does not exist. A function **can be continuous and still have no derivative** at a point. The reverse is true, though: a differentiable function is always continuous.

### Exercises

1. Find $\\Delta f$ for $f(x) = 2x + 5$ when $x_0 = 1$, $\\Delta x = 0.1$.
2. From the definition, find $f'(x)$ for $f(x) = x^2 - 3x$.
3. From the definition, find $f'(2)$ for $f(x) = x^3$.
4. From the definition, find $f'(x)$ for $f(x) = \\dfrac{2}{x}$.
5. From the definition, find $f'(x)$ for $f(x) = c$, a constant.
6. Does $y = \\lvert x - 3\\rvert$ have a derivative at $x = 3$?
7. For $f(x) = x^2$, compute $\\dfrac{\\Delta f}{\\Delta x}$ at $x_0 = 1$ for $\\Delta x = 0.1$ and $0.01$. What number does it approach?

### Answers

1. $\\Delta f = 2 \\cdot 0.1 = 0.2$. 2. $\\dfrac{\\Delta f}{\\Delta x} = 2x + \\Delta x - 3 \\to 2x - 3$. 3. $12$. 4. $-\\dfrac{2}{x^2}$. 5. $\\Delta f = 0$, so $f'(x) = 0$. 6. No: there is a corner. 7. $2.1$ and $2.01$; they approach $2$.`,
        hy: `## Աճեր

Դիցուք $x_0$-ն կետ է, իսկ $\\Delta x$-ը՝ արգումենտի փոքր փոփոխություն։ **Ֆունկցիայի աճն** է

$$\\Delta f = f(x_0 + \\Delta x) - f(x_0).$$

## Սահմանում

> $f$-ի **ածանցյալը** $x_0$ կետում աճերի հարաբերության սահմանն է, երբ $\\Delta x \\to 0$․

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}.$$

Եթե այդ սահմանը գոյություն ունի, $f$-ը կոչվում է $x_0$ կետում **ածանցելի**։ Ածանցյալի գտնելը կոչվում է **ածանցում**։

## Երեք քայլ

1. Գրեք $\\Delta f$-ը։
2. Բաժանեք $\\Delta x$-ի վրա և պարզեցրեք։
3. Ձգտեցրեք $\\Delta x$-ը $0$-ի։

**Օրինակ 1։** $f(x) = x^3$։ $\\Delta f = (x + \\Delta x)^3 - x^3 = 3x^2\\Delta x + 3x(\\Delta x)^2 + (\\Delta x)^3$։ Այդ դեպքում $\\dfrac{\\Delta f}{\\Delta x} = 3x^2 + 3x\\Delta x + (\\Delta x)^2 \\to 3x^2$։ Ուստի $(x^3)' = 3x^2$։

**Օրինակ 2։** $f(x) = \\dfrac1x$։ $\\Delta f = \\dfrac{1}{x + \\Delta x} - \\dfrac1x = \\dfrac{-\\Delta x}{x(x + \\Delta x)}$, ուստի $\\dfrac{\\Delta f}{\\Delta x} = -\\dfrac{1}{x(x + \\Delta x)} \\to -\\dfrac{1}{x^2}$։

**Օրինակ 3։** $f(x) = \\sqrt{x}$, $x > 0$։ Բազմապատկենք համալուծով՝ $\\dfrac{\\sqrt{x + \\Delta x} - \\sqrt{x}}{\\Delta x} = \\dfrac{1}{\\sqrt{x + \\Delta x} + \\sqrt{x}} \\to \\dfrac{1}{2\\sqrt{x}}$։

## Որտեղ ածանցյալ չկա

$y = \\lvert x\\rvert$ ֆունկցիան $0$-ում ունի անկյունային կետ։ $\\Delta x > 0$ դեպքում հարաբերությունը $1$ է, $\\Delta x < 0$ դեպքում՝ $-1$, ուստի սահմանը գոյություն չունի։ Ֆունկցիան **կարող է անընդհատ լինել և այնուամենայնիվ ածանցյալ չունենալ** կետում։ Հակառակը, սակայն, ճիշտ է՝ ածանցելի ֆունկցիան միշտ անընդհատ է։

### Վարժություններ

1. Գտեք $\\Delta f$-ը $f(x) = 2x + 5$-ի համար, երբ $x_0 = 1$, $\\Delta x = 0{,}1$։
2. Սահմանումով գտեք $f'(x)$-ը $f(x) = x^2 - 3x$-ի համար։
3. Սահմանումով գտեք $f'(2)$-ը $f(x) = x^3$-ի համար։
4. Սահմանումով գտեք $f'(x)$-ը $f(x) = \\dfrac{2}{x}$-ի համար։
5. Սահմանումով գտեք $f'(x)$-ը $f(x) = c$ հաստատունի համար։
6. Ունի՞ արդյոք $y = \\lvert x - 3\\rvert$-ը ածանցյալ $x = 3$ կետում։
7. $f(x) = x^2$-ի համար հաշվեք $\\dfrac{\\Delta f}{\\Delta x}$-ը $x_0 = 1$ կետում $\\Delta x = 0{,}1$ և $0{,}01$ դեպքերում։ Ո՞ր թվին է այն մոտենում։

### Պատասխաններ

1. $\\Delta f = 2 \\cdot 0{,}1 = 0{,}2$։ 2. $\\dfrac{\\Delta f}{\\Delta x} = 2x + \\Delta x - 3 \\to 2x - 3$։ 3. $12$։ 4. $-\\dfrac{2}{x^2}$։ 5. $\\Delta f = 0$, ուստի $f'(x) = 0$։ 6. Ոչ՝ այնտեղ անկյունային կետ է։ 7. $2{,}1$ և $2{,}01$, մոտենում է $2$-ին։`,
        ru: `## Приращения

Пусть $x_0$ — точка, а $\\Delta x$ — малое изменение аргумента. **Приращение функции**:

$$\\Delta f = f(x_0 + \\Delta x) - f(x_0).$$

## Определение

> **Производная** функции $f$ в точке $x_0$ — предел отношения приращений при $\\Delta x \\to 0$:

$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}.$$

Если этот предел существует, $f$ называется **дифференцируемой** в точке $x_0$. Нахождение производной называется **дифференцированием**.

## Три шага

1. Запишите $\\Delta f$.
2. Разделите на $\\Delta x$ и упростите.
3. Устремите $\\Delta x$ к $0$.

**Пример 1.** $f(x) = x^3$. $\\Delta f = (x + \\Delta x)^3 - x^3 = 3x^2\\Delta x + 3x(\\Delta x)^2 + (\\Delta x)^3$. Тогда $\\dfrac{\\Delta f}{\\Delta x} = 3x^2 + 3x\\Delta x + (\\Delta x)^2 \\to 3x^2$. Значит, $(x^3)' = 3x^2$.

**Пример 2.** $f(x) = \\dfrac1x$. $\\Delta f = \\dfrac{1}{x + \\Delta x} - \\dfrac1x = \\dfrac{-\\Delta x}{x(x + \\Delta x)}$, поэтому $\\dfrac{\\Delta f}{\\Delta x} = -\\dfrac{1}{x(x + \\Delta x)} \\to -\\dfrac{1}{x^2}$.

**Пример 3.** $f(x) = \\sqrt{x}$, $x > 0$. Умножим на сопряжённое: $\\dfrac{\\sqrt{x + \\Delta x} - \\sqrt{x}}{\\Delta x} = \\dfrac{1}{\\sqrt{x + \\Delta x} + \\sqrt{x}} \\to \\dfrac{1}{2\\sqrt{x}}$.

## Где производной нет

Функция $y = \\lvert x\\rvert$ имеет в $0$ излом. При $\\Delta x > 0$ отношение равно $1$, при $\\Delta x < 0$ — $-1$, поэтому предела нет. Функция **может быть непрерывной и всё же не иметь производной** в точке. Обратное верно: дифференцируемая функция всегда непрерывна.

### Упражнения

1. Найдите $\\Delta f$ для $f(x) = 2x + 5$ при $x_0 = 1$, $\\Delta x = 0{,}1$.
2. По определению найдите $f'(x)$ для $f(x) = x^2 - 3x$.
3. По определению найдите $f'(2)$ для $f(x) = x^3$.
4. По определению найдите $f'(x)$ для $f(x) = \\dfrac{2}{x}$.
5. По определению найдите $f'(x)$ для постоянной $f(x) = c$.
6. Имеет ли $y = \\lvert x - 3\\rvert$ производную в точке $x = 3$?
7. Для $f(x) = x^2$ вычислите $\\dfrac{\\Delta f}{\\Delta x}$ в точке $x_0 = 1$ при $\\Delta x = 0{,}1$ и $0{,}01$. К какому числу оно приближается?

### Ответы

1. $\\Delta f = 2 \\cdot 0{,}1 = 0{,}2$. 2. $\\dfrac{\\Delta f}{\\Delta x} = 2x + \\Delta x - 3 \\to 2x - 3$. 3. $12$. 4. $-\\dfrac{2}{x^2}$. 5. $\\Delta f = 0$, значит, $f'(x) = 0$. 6. Нет: там излом. 7. $2{,}1$ и $2{,}01$; приближается к $2$.`,
      },
      [
        q(
          t("The increment of the function is…", "Ֆունկցիայի աճն է…", "Приращение функции —"),
          [t("f(x₀ + Δx) − f(x₀)", "f(x₀ + Δx) − f(x₀)", "f(x₀ + Δx) − f(x₀)"), t("f(x₀) · Δx", "f(x₀) · Δx", "f(x₀) · Δx"), t("f(Δx)", "f(Δx)", "f(Δx)")],
          0,
        ),
        q(
          t("The derivative is the limit of Δf/Δx as…", "Ածանցյալը Δf/Δx-ի սահմանն է, երբ…", "Производная — предел Δf/Δx при…"),
          [t("Δx → 0", "Δx → 0", "Δx → 0"), t("Δx → 1", "Δx → 1", "Δx → 1"), t("x → ∞", "x → ∞", "x → ∞")],
          0,
        ),
        q(
          t("From the definition, (x³)′ equals…", "Սահմանումից (x³)′-ը հավասար է…", "По определению (x³)′ равно…"),
          [t("3x", "3x", "3x"), t("3x²", "3x²", "3x²"), t("x²", "x²", "x²")],
          1,
        ),
        q(
          t("(1/x)′ equals…", "(1/x)′-ը հավասար է…", "(1/x)′ равно…"),
          [t("1/x²", "1/x²", "1/x²"), t("−1/x²", "−1/x²", "−1/x²"), t("ln x", "ln x", "ln x")],
          1,
        ),
        q(
          t("Does y = |x| have a derivative at 0?", "Ունի՞ y = |x|-ը ածանցյալ 0-ում", "Есть ли у y = |x| производная в 0?"),
          [t("yes, it equals 0", "այո, այն 0 է", "да, она равна 0"), t("yes, it equals 1", "այո, այն 1 է", "да, она равна 1"), t("no", "ոչ", "нет")],
          2,
        ),
        q(
          t("Which statement is true?", "Ո՞ր պնդումն է ճիշտ", "Какое утверждение верно?"),
          [t("every continuous function is differentiable", "ամեն անընդհատ ֆունկցիա ածանցելի է", "всякая непрерывная функция дифференцируема"), t("every differentiable function is continuous", "ամեն ածանցելի ֆունկցիա անընդհատ է", "всякая дифференцируемая функция непрерывна"), t("no function is both", "ոչ մի ֆունկցիա երկուսն էլ չէ", "ни одна функция не бывает и тем и другим")],
          1,
        ),
      ],
    ),
    lesson(
      "differentiation-rules",
      ["Rules of differentiation", "Ածանցման կանոնները", "Правила дифференцирования"],
      {
        en: ["Apply the rules for a sum, a constant factor, a product and a quotient", "Combine the rules with the derivative of xⁿ", "Compute the value of a derivative at a point"],
        hy: ["Կիրառել գումարի, հաստատուն արտադրիչի, արտադրյալի և քանորդի կանոնները", "Համատեղել կանոնները xⁿ-ի ածանցյալի հետ", "Հաշվել ածանցյալի արժեքը կետում"],
        ru: ["Применять правила для суммы, постоянного множителя, произведения и частного", "Сочетать правила с производной xⁿ", "Вычислять значение производной в точке"],
      },
      {
        en: `## The four rules

If $u$ and $v$ are differentiable and $c$ is a number:

| Rule | Formula |
|---|---|
| Sum | $(u \\pm v)' = u' \\pm v'$ |
| Constant factor | $(cu)' = c\\,u'$ |
| Product | $(uv)' = u'v + uv'$ |
| Quotient | $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$, $v \\ne 0$ |

Together with $(x^n)' = nx^{n-1}$ they give the derivative of any polynomial or rational function.

**Why the product rule?** $\\Delta(uv) = (u + \\Delta u)(v + \\Delta v) - uv = \\Delta u\\,v + u\\,\\Delta v + \\Delta u\\,\\Delta v$. Divide by $\\Delta x$: the last term tends to $0$, which leaves $u'v + uv'$.

## Examples

**Example 1.** $\\left(4x^5 - \\dfrac{x^3}{3} + 2x - 9\\right)' = 20x^4 - x^2 + 2$.

**Example 2.** $\\left(\\dfrac{3}{x^2}\\right)' = (3x^{-2})' = -6x^{-3} = -\\dfrac{6}{x^3}$.

**Example 3.** $\\left((x^2 + 1)(x - 3)\\right)' = 2x(x - 3) + (x^2 + 1) = 3x^2 - 6x + 1$.

**Example 4.** $\\left(\\dfrac{2x - 1}{x + 2}\\right)' = \\dfrac{2(x + 2) - (2x - 1)}{(x + 2)^2} = \\dfrac{5}{(x + 2)^2}$.

**Example 5.** $f(x) = x\\sqrt{x} = x^{3/2}$, so $f'(x) = \\dfrac32\\sqrt{x}$ and $f'(4) = 3$.

**Tip.** Before using the product or quotient rule, see whether the expression can be simplified. $\\dfrac{x^3 + x}{x} = x^2 + 1$ for $x \\ne 0$, with derivative $2x$.

### Exercises

1. Differentiate $2x^6 - 5x^4 + x - 7$.
2. Differentiate $\\dfrac{1}{x^3} + 4\\sqrt{x}$.
3. Differentiate $(3x + 1)(x^2 - 2)$ in two ways.
4. Differentiate $\\dfrac{x^2}{x + 1}$.
5. Differentiate $\\dfrac{x + 3}{x - 3}$.
6. $f(x) = x^3 - 2x^2$. Find $f'(-1)$.
7. Solve $f'(x) = 0$ for $f(x) = x^3 - 12x$.

### Answers

1. $12x^5 - 20x^3 + 1$. 2. $-\\dfrac{3}{x^4} + \\dfrac{2}{\\sqrt{x}}$. 3. $9x^2 + 2x - 6$. 4. $\\dfrac{x^2 + 2x}{(x + 1)^2}$. 5. $-\\dfrac{6}{(x - 3)^2}$. 6. $f'(x) = 3x^2 - 4x$, $f'(-1) = 7$. 7. $3x^2 - 12 = 0$, $x = \\pm 2$.`,
        hy: `## Չորս կանոնները

Եթե $u$-ն և $v$-ն ածանցելի են, իսկ $c$-ն թիվ է․

| Կանոն | Բանաձև |
|---|---|
| Գումար | $(u \\pm v)' = u' \\pm v'$ |
| Հաստատուն արտադրիչ | $(cu)' = c\\,u'$ |
| Արտադրյալ | $(uv)' = u'v + uv'$ |
| Քանորդ | $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$, $v \\ne 0$ |

$(x^n)' = nx^{n-1}$-ի հետ միասին դրանք տալիս են ցանկացած բազմանդամի կամ ռացիոնալ ֆունկցիայի ածանցյալը։

**Ինչու՞ է այդպիսին արտադրյալի կանոնը։** $\\Delta(uv) = (u + \\Delta u)(v + \\Delta v) - uv = \\Delta u\\,v + u\\,\\Delta v + \\Delta u\\,\\Delta v$։ Բաժանենք $\\Delta x$-ի վրա՝ վերջին անդամը ձգտում է $0$-ի, և մնում է $u'v + uv'$։

## Օրինակներ

**Օրինակ 1։** $\\left(4x^5 - \\dfrac{x^3}{3} + 2x - 9\\right)' = 20x^4 - x^2 + 2$։

**Օրինակ 2։** $\\left(\\dfrac{3}{x^2}\\right)' = (3x^{-2})' = -6x^{-3} = -\\dfrac{6}{x^3}$։

**Օրինակ 3։** $\\left((x^2 + 1)(x - 3)\\right)' = 2x(x - 3) + (x^2 + 1) = 3x^2 - 6x + 1$։

**Օրինակ 4։** $\\left(\\dfrac{2x - 1}{x + 2}\\right)' = \\dfrac{2(x + 2) - (2x - 1)}{(x + 2)^2} = \\dfrac{5}{(x + 2)^2}$։

**Օրինակ 5։** $f(x) = x\\sqrt{x} = x^{3/2}$, ուստի $f'(x) = \\dfrac32\\sqrt{x}$ և $f'(4) = 3$։

**Խորհուրդ։** Արտադրյալի կամ քանորդի կանոնը կիրառելուց առաջ տեսեք՝ արդյոք արտահայտությունը չի պարզեցվում։ $\\dfrac{x^3 + x}{x} = x^2 + 1$, երբ $x \\ne 0$, և ածանցյալը $2x$ է։

### Վարժություններ

1. Ածանցեք $2x^6 - 5x^4 + x - 7$-ը։
2. Ածանցեք $\\dfrac{1}{x^3} + 4\\sqrt{x}$-ը։
3. Ածանցեք $(3x + 1)(x^2 - 2)$-ը երկու եղանակով։
4. Ածանցեք $\\dfrac{x^2}{x + 1}$-ը։
5. Ածանցեք $\\dfrac{x + 3}{x - 3}$-ը։
6. $f(x) = x^3 - 2x^2$։ Գտեք $f'(-1)$-ը։
7. Լուծեք $f'(x) = 0$ հավասարումը $f(x) = x^3 - 12x$-ի համար։

### Պատասխաններ

1. $12x^5 - 20x^3 + 1$։ 2. $-\\dfrac{3}{x^4} + \\dfrac{2}{\\sqrt{x}}$։ 3. $9x^2 + 2x - 6$։ 4. $\\dfrac{x^2 + 2x}{(x + 1)^2}$։ 5. $-\\dfrac{6}{(x - 3)^2}$։ 6. $f'(x) = 3x^2 - 4x$, $f'(-1) = 7$։ 7. $3x^2 - 12 = 0$, $x = \\pm 2$։`,
        ru: `## Четыре правила

Если $u$ и $v$ дифференцируемы, а $c$ — число:

| Правило | Формула |
|---|---|
| Сумма | $(u \\pm v)' = u' \\pm v'$ |
| Постоянный множитель | $(cu)' = c\\,u'$ |
| Произведение | $(uv)' = u'v + uv'$ |
| Частное | $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$, $v \\ne 0$ |

Вместе с $(x^n)' = nx^{n-1}$ они дают производную любого многочлена или рациональной функции.

**Откуда правило произведения?** $\\Delta(uv) = (u + \\Delta u)(v + \\Delta v) - uv = \\Delta u\\,v + u\\,\\Delta v + \\Delta u\\,\\Delta v$. Делим на $\\Delta x$: последнее слагаемое стремится к $0$, остаётся $u'v + uv'$.

## Примеры

**Пример 1.** $\\left(4x^5 - \\dfrac{x^3}{3} + 2x - 9\\right)' = 20x^4 - x^2 + 2$.

**Пример 2.** $\\left(\\dfrac{3}{x^2}\\right)' = (3x^{-2})' = -6x^{-3} = -\\dfrac{6}{x^3}$.

**Пример 3.** $\\left((x^2 + 1)(x - 3)\\right)' = 2x(x - 3) + (x^2 + 1) = 3x^2 - 6x + 1$.

**Пример 4.** $\\left(\\dfrac{2x - 1}{x + 2}\\right)' = \\dfrac{2(x + 2) - (2x - 1)}{(x + 2)^2} = \\dfrac{5}{(x + 2)^2}$.

**Пример 5.** $f(x) = x\\sqrt{x} = x^{3/2}$, поэтому $f'(x) = \\dfrac32\\sqrt{x}$ и $f'(4) = 3$.

**Совет.** Прежде чем применять правило произведения или частного, проверьте, нельзя ли упростить выражение. $\\dfrac{x^3 + x}{x} = x^2 + 1$ при $x \\ne 0$, производная $2x$.

### Упражнения

1. Найдите производную $2x^6 - 5x^4 + x - 7$.
2. Найдите производную $\\dfrac{1}{x^3} + 4\\sqrt{x}$.
3. Найдите производную $(3x + 1)(x^2 - 2)$ двумя способами.
4. Найдите производную $\\dfrac{x^2}{x + 1}$.
5. Найдите производную $\\dfrac{x + 3}{x - 3}$.
6. $f(x) = x^3 - 2x^2$. Найдите $f'(-1)$.
7. Решите $f'(x) = 0$ для $f(x) = x^3 - 12x$.

### Ответы

1. $12x^5 - 20x^3 + 1$. 2. $-\\dfrac{3}{x^4} + \\dfrac{2}{\\sqrt{x}}$. 3. $9x^2 + 2x - 6$. 4. $\\dfrac{x^2 + 2x}{(x + 1)^2}$. 5. $-\\dfrac{6}{(x - 3)^2}$. 6. $f'(x) = 3x^2 - 4x$, $f'(-1) = 7$. 7. $3x^2 - 12 = 0$, $x = \\pm 2$.`,
      },
      [
        q(
          t("(u + v)′ equals…", "(u + v)′-ը հավասար է…", "(u + v)′ равно…"),
          [t("u′ + v′", "u′ + v′", "u′ + v′"), t("u′v′", "u′v′", "u′v′"), t("u′v + uv′", "u′v + uv′", "u′v + uv′")],
          0,
        ),
        q(
          t("(u/v)′ equals…", "(u/v)′-ը հավասար է…", "(u/v)′ равно…"),
          [t("u′/v′", "u′/v′", "u′/v′"), t("(u′v − uv′)/v²", "(u′v − uv′)/v²", "(u′v − uv′)/v²"), t("(u′v + uv′)/v²", "(u′v + uv′)/v²", "(u′v + uv′)/v²")],
          1,
        ),
        q(
          t("(5x⁴)′ equals…", "(5x⁴)′-ը հավասար է…", "(5x⁴)′ равно…"),
          [t("20x³", "20x³", "20x³"), t("5x³", "5x³", "5x³"), t("20x⁴", "20x⁴", "20x⁴")],
          0,
        ),
        q(
          t("(3/x²)′ equals…", "(3/x²)′-ը հավասար է…", "(3/x²)′ равно…"),
          [t("6/x³", "6/x³", "6/x³"), t("−6/x³", "−6/x³", "−6/x³"), t("−3/x", "−3/x", "−3/x")],
          1,
        ),
        q(
          t("f(x) = x³ − 2x². f′(−1) equals…", "f(x) = x³ − 2x²։ f′(−1)-ը հավասար է…", "f(x) = x³ − 2x². f′(−1) равно…"),
          [t("−1", "−1", "−1"), t("7", "7", "7"), t("−7", "−7", "−7")],
          1,
        ),
        q(
          t("The roots of f′(x) = 0 for f(x) = x³ − 12x are…", "f(x) = x³ − 12x-ի համար f′(x) = 0-ի արմատներն են…", "Корни f′(x) = 0 для f(x) = x³ − 12x —"),
          [t("±2", "±2", "±2"), t("±√12", "±√12", "±√12"), t("0 and 12", "0 և 12", "0 и 12")],
          0,
        ),
      ],
    ),
    lesson(
      "derivative-power-trig",
      ["Derivatives of power and trigonometric functions", "Աստիճանային և եռանկյունաչափական ֆունկցիաների ածանցյալներ", "Производные степенных и тригонометрических функций"],
      {
        en: ["Use (xᵖ)′ = p·xᵖ⁻¹ for any real exponent p", "Know the derivatives of sin x, cos x, tan x and cot x", "Differentiate expressions that mix powers and trigonometric functions"],
        hy: ["Օգտվել (xᵖ)′ = p·xᵖ⁻¹ բանաձևից ցանկացած իրական p ցուցիչի համար", "Իմանալ sin x-ի, cos x-ի, tg x-ի և ctg x-ի ածանցյալները", "Ածանցել աստիճաններ և եռանկյունաչափական ֆունկցիաներ պարունակող արտահայտություններ"],
        ru: ["Использовать (xᵖ)′ = p·xᵖ⁻¹ для любого действительного показателя p", "Знать производные sin x, cos x, tg x и ctg x", "Дифференцировать выражения со степенями и тригонометрическими функциями"],
      },
      {
        en: `## Power functions

$$(x^p)' = p\\,x^{p-1} \\quad \\text{for every real } p \\ (x > 0 \\text{ when } p \\text{ is not an integer}).$$

| $f(x)$ | $x^7$ | $\\dfrac{1}{x^4} = x^{-4}$ | $\\sqrt[3]{x} = x^{1/3}$ | $x^{\\sqrt2}$ |
|---|---|---|---|---|
| $f'(x)$ | $7x^6$ | $-\\dfrac{4}{x^5}$ | $\\dfrac{1}{3\\sqrt[3]{x^2}}$ | $\\sqrt2\\,x^{\\sqrt2 - 1}$ |

Write roots and fractions as powers first.

## Trigonometric functions

$$(\\sin x)' = \\cos x, \\qquad (\\cos x)' = -\\sin x,$$

$$(\\tan x)' = \\frac{1}{\\cos^2 x}, \\qquad (\\cot x)' = -\\frac{1}{\\sin^2 x}.$$

The first follows from the definition with the sum-to-product formula and the limit $\\dfrac{\\sin t}{t} \\to 1$. The other three follow from the first with the rules.

**Example 1.** $(3\\sin x - 2\\cos x)' = 3\\cos x + 2\\sin x$.

**Example 2.** $(x^2\\cos x)' = 2x\\cos x - x^2\\sin x$.

**Example 3.** $\\left(\\dfrac{\\sin x}{x}\\right)' = \\dfrac{x\\cos x - \\sin x}{x^2}$.

**Example 4.** $f(x) = \\tan x - 4x$. $f'(x) = \\dfrac{1}{\\cos^2 x} - 4$, and $f'\\left(\\dfrac{\\pi}{3}\\right) = 4 - 4 = 0$.

**Example 5.** $(\\sin x\\cos x)' = \\cos^2 x - \\sin^2 x = \\cos 2x$.

### Exercises

1. Differentiate $x^{10} - \\dfrac{2}{x^5}$.
2. Differentiate $\\sqrt[4]{x^3}$.
3. Differentiate $5\\cos x + \\tan x$.
4. Differentiate $x\\sin x$.
5. Differentiate $\\dfrac{\\cos x}{x^2}$.
6. $f(x) = \\sin x + \\cos x$. Find $f'\\left(\\dfrac{\\pi}{4}\\right)$.
7. Solve $f'(x) = 0$ for $f(x) = 2\\sin x - x$.

### Answers

1. $10x^9 + \\dfrac{10}{x^6}$. 2. $\\dfrac{3}{4\\sqrt[4]{x}}$. 3. $-5\\sin x + \\dfrac{1}{\\cos^2 x}$. 4. $\\sin x + x\\cos x$. 5. $\\dfrac{-x\\sin x - 2\\cos x}{x^3}$. 6. $\\cos\\dfrac{\\pi}{4} - \\sin\\dfrac{\\pi}{4} = 0$. 7. $2\\cos x - 1 = 0$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.`,
        hy: `## Աստիճանային ֆունկցիաներ

$$(x^p)' = p\\,x^{p-1} \\quad \\text{ցանկացած իրական } p\\text{-ի համար} \\ (x > 0, \\text{ երբ } p\\text{-ն ամբողջ չէ}).$$

| $f(x)$ | $x^7$ | $\\dfrac{1}{x^4} = x^{-4}$ | $\\sqrt[3]{x} = x^{1/3}$ | $x^{\\sqrt2}$ |
|---|---|---|---|---|
| $f'(x)$ | $7x^6$ | $-\\dfrac{4}{x^5}$ | $\\dfrac{1}{3\\sqrt[3]{x^2}}$ | $\\sqrt2\\,x^{\\sqrt2 - 1}$ |

Արմատներն ու կոտորակները նախ գրեք աստիճանների տեսքով։

## Եռանկյունաչափական ֆունկցիաներ

$$(\\sin x)' = \\cos x, \\qquad (\\cos x)' = -\\sin x,$$

$$(\\operatorname{tg} x)' = \\frac{1}{\\cos^2 x}, \\qquad (\\operatorname{ctg} x)' = -\\frac{1}{\\sin^2 x}.$$

Առաջինը ստացվում է սահմանումից՝ գումարից արտադրյալ բանաձևով և $\\dfrac{\\sin t}{t} \\to 1$ սահմանով։ Մյուս երեքը ստացվում են առաջինից՝ կանոնների օգնությամբ։

**Օրինակ 1։** $(3\\sin x - 2\\cos x)' = 3\\cos x + 2\\sin x$։

**Օրինակ 2։** $(x^2\\cos x)' = 2x\\cos x - x^2\\sin x$։

**Օրինակ 3։** $\\left(\\dfrac{\\sin x}{x}\\right)' = \\dfrac{x\\cos x - \\sin x}{x^2}$։

**Օրինակ 4։** $f(x) = \\operatorname{tg} x - 4x$։ $f'(x) = \\dfrac{1}{\\cos^2 x} - 4$, և $f'\\left(\\dfrac{\\pi}{3}\\right) = 4 - 4 = 0$։

**Օրինակ 5։** $(\\sin x\\cos x)' = \\cos^2 x - \\sin^2 x = \\cos 2x$։

### Վարժություններ

1. Ածանցեք $x^{10} - \\dfrac{2}{x^5}$-ը։
2. Ածանցեք $\\sqrt[4]{x^3}$-ը։
3. Ածանցեք $5\\cos x + \\operatorname{tg} x$-ը։
4. Ածանցեք $x\\sin x$-ը։
5. Ածանցեք $\\dfrac{\\cos x}{x^2}$-ը։
6. $f(x) = \\sin x + \\cos x$։ Գտեք $f'\\left(\\dfrac{\\pi}{4}\\right)$-ը։
7. Լուծեք $f'(x) = 0$ հավասարումը $f(x) = 2\\sin x - x$-ի համար։

### Պատասխաններ

1. $10x^9 + \\dfrac{10}{x^6}$։ 2. $\\dfrac{3}{4\\sqrt[4]{x}}$։ 3. $-5\\sin x + \\dfrac{1}{\\cos^2 x}$։ 4. $\\sin x + x\\cos x$։ 5. $\\dfrac{-x\\sin x - 2\\cos x}{x^3}$։ 6. $\\cos\\dfrac{\\pi}{4} - \\sin\\dfrac{\\pi}{4} = 0$։ 7. $2\\cos x - 1 = 0$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$։`,
        ru: `## Степенные функции

$$(x^p)' = p\\,x^{p-1} \\quad \\text{при любом действительном } p \\ (x > 0, \\text{ если } p \\text{ не целое}).$$

| $f(x)$ | $x^7$ | $\\dfrac{1}{x^4} = x^{-4}$ | $\\sqrt[3]{x} = x^{1/3}$ | $x^{\\sqrt2}$ |
|---|---|---|---|---|
| $f'(x)$ | $7x^6$ | $-\\dfrac{4}{x^5}$ | $\\dfrac{1}{3\\sqrt[3]{x^2}}$ | $\\sqrt2\\,x^{\\sqrt2 - 1}$ |

Корни и дроби сначала запишите в виде степеней.

## Тригонометрические функции

$$(\\sin x)' = \\cos x, \\qquad (\\cos x)' = -\\sin x,$$

$$(\\operatorname{tg} x)' = \\frac{1}{\\cos^2 x}, \\qquad (\\operatorname{ctg} x)' = -\\frac{1}{\\sin^2 x}.$$

Первая следует из определения с помощью формулы суммы в произведение и предела $\\dfrac{\\sin t}{t} \\to 1$. Остальные три выводятся из первой по правилам.

**Пример 1.** $(3\\sin x - 2\\cos x)' = 3\\cos x + 2\\sin x$.

**Пример 2.** $(x^2\\cos x)' = 2x\\cos x - x^2\\sin x$.

**Пример 3.** $\\left(\\dfrac{\\sin x}{x}\\right)' = \\dfrac{x\\cos x - \\sin x}{x^2}$.

**Пример 4.** $f(x) = \\operatorname{tg} x - 4x$. $f'(x) = \\dfrac{1}{\\cos^2 x} - 4$, и $f'\\left(\\dfrac{\\pi}{3}\\right) = 4 - 4 = 0$.

**Пример 5.** $(\\sin x\\cos x)' = \\cos^2 x - \\sin^2 x = \\cos 2x$.

### Упражнения

1. Найдите производную $x^{10} - \\dfrac{2}{x^5}$.
2. Найдите производную $\\sqrt[4]{x^3}$.
3. Найдите производную $5\\cos x + \\operatorname{tg} x$.
4. Найдите производную $x\\sin x$.
5. Найдите производную $\\dfrac{\\cos x}{x^2}$.
6. $f(x) = \\sin x + \\cos x$. Найдите $f'\\left(\\dfrac{\\pi}{4}\\right)$.
7. Решите $f'(x) = 0$ для $f(x) = 2\\sin x - x$.

### Ответы

1. $10x^9 + \\dfrac{10}{x^6}$. 2. $\\dfrac{3}{4\\sqrt[4]{x}}$. 3. $-5\\sin x + \\dfrac{1}{\\cos^2 x}$. 4. $\\sin x + x\\cos x$. 5. $\\dfrac{-x\\sin x - 2\\cos x}{x^3}$. 6. $\\cos\\dfrac{\\pi}{4} - \\sin\\dfrac{\\pi}{4} = 0$. 7. $2\\cos x - 1 = 0$, $x = \\pm\\dfrac{\\pi}{3} + 2\\pi k$.`,
      },
      [
        q(
          t("(sin x)′ equals…", "(sin x)′-ը հավասար է…", "(sin x)′ равно…"),
          [t("cos x", "cos x", "cos x"), t("−cos x", "−cos x", "−cos x"), t("−sin x", "−sin x", "−sin x")],
          0,
        ),
        q(
          t("(tan x)′ equals…", "(tg x)′-ը հավասար է…", "(tg x)′ равно…"),
          [t("1/cos²x", "1/cos²x", "1/cos²x"), t("−1/sin²x", "−1/sin²x", "−1/sin²x"), t("cot x", "ctg x", "ctg x")],
          0,
        ),
        q(
          t("(cot x)′ equals…", "(ctg x)′-ը հավասար է…", "(ctg x)′ равно…"),
          [t("1/sin²x", "1/sin²x", "1/sin²x"), t("−1/sin²x", "−1/sin²x", "−1/sin²x"), t("−tan x", "−tg x", "−tg x")],
          1,
        ),
        q(
          t("The derivative of ∛x is…", "∛x-ի ածանցյալը…", "Производная ∛x —"),
          [t("1/(3∛x²)", "1/(3∛x²)", "1/(3∛x²)"), t("3∛x²", "3∛x²", "3∛x²"), t("1/(3∛x)", "1/(3∛x)", "1/(3∛x)")],
          0,
        ),
        q(
          t("(x sin x)′ equals…", "(x sin x)′-ը հավասար է…", "(x sin x)′ равно…"),
          [t("cos x", "cos x", "cos x"), t("sin x + x cos x", "sin x + x cos x", "sin x + x cos x"), t("x cos x", "x cos x", "x cos x")],
          1,
        ),
        q(
          t("(sin x cos x)′ equals…", "(sin x cos x)′-ը հավասար է…", "(sin x cos x)′ равно…"),
          [t("cos 2x", "cos 2x", "cos 2x"), t("sin 2x", "sin 2x", "sin 2x"), t("−sin x cos x", "−sin x cos x", "−sin x cos x")],
          0,
        ),
      ],
    ),
    lesson(
      "chain-rule",
      ["Derivative of a composite function", "Բարդ ֆունկցիայի ածանցյալ", "Производная сложной функции"],
      {
        en: ["Recognise a composite function f(g(x)) and name its outer and inner functions", "Apply the chain rule (f(g(x)))′ = f′(g(x)) · g′(x)", "Differentiate expressions like (3x − 1)⁵, √(x² + 1) and sin 4x"],
        hy: ["Ճանաչել f(g(x)) բարդ ֆունկցիան և անվանել նրա արտաքին և ներքին ֆունկցիաները", "Կիրառել (f(g(x)))′ = f′(g(x)) · g′(x) կանոնը", "Ածանցել (3x − 1)⁵, √(x² + 1) և sin 4x տիպի արտահայտություններ"],
        ru: ["Узнавать сложную функцию f(g(x)) и называть внешнюю и внутреннюю функции", "Применять правило (f(g(x)))′ = f′(g(x)) · g′(x)", "Дифференцировать выражения вида (3x − 1)⁵, √(x² + 1) и sin 4x"],
      },
      {
        en: `## Composite functions

In $y = (3x - 1)^5$ we first compute the **inner** function $u = 3x - 1$, then the **outer** function $y = u^5$. Such a function is written $y = f(g(x))$.

| Function | Outer $f(u)$ | Inner $u = g(x)$ |
|---|---|---|
| $(3x - 1)^5$ | $u^5$ | $3x - 1$ |
| $\\sqrt{x^2 + 1}$ | $\\sqrt{u}$ | $x^2 + 1$ |
| $\\sin 4x$ | $\\sin u$ | $4x$ |
| $\\cos^3 x$ | $u^3$ | $\\cos x$ |

## The chain rule

$$\\left(f(g(x))\\right)' = f'(g(x)) \\cdot g'(x).$$

In words: differentiate the outer function, keep the inside unchanged, then multiply by the derivative of the inside.

**Example 1.** $\\left((3x - 1)^5\\right)' = 5(3x - 1)^4 \\cdot 3 = 15(3x - 1)^4$.

**Example 2.** $\\left(\\sqrt{x^2 + 1}\\right)' = \\dfrac{1}{2\\sqrt{x^2 + 1}} \\cdot 2x = \\dfrac{x}{\\sqrt{x^2 + 1}}$.

**Example 3.** $(\\sin 4x)' = 4\\cos 4x$. In general $(f(kx + b))' = k\\,f'(kx + b)$.

**Example 4.** $(\\cos^3 x)' = 3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x\\sin x$.

**Example 5.** Two layers: $\\left(\\sin^2 3x\\right)' = 2\\sin 3x \\cdot \\cos 3x \\cdot 3 = 3\\sin 6x$.

**Example 6.** $\\left(\\dfrac{1}{(2x + 5)^3}\\right)' = \\left((2x + 5)^{-3}\\right)' = -3(2x + 5)^{-4} \\cdot 2 = -\\dfrac{6}{(2x + 5)^4}$.

### Exercises

1. Name the outer and inner functions of $\\cos(x^2)$.
2. Differentiate $(2x + 7)^{10}$.
3. Differentiate $\\sqrt{5 - 4x}$.
4. Differentiate $\\cos\\left(3x - \\dfrac{\\pi}{4}\\right)$.
5. Differentiate $\\sin^4 x$.
6. Differentiate $\\tan 2x$.
7. $f(x) = (x^2 - 3)^3$. Find $f'(2)$.

### Answers

1. Outer $\\cos u$, inner $x^2$. 2. $20(2x + 7)^9$. 3. $-\\dfrac{2}{\\sqrt{5 - 4x}}$. 4. $-3\\sin\\left(3x - \\dfrac{\\pi}{4}\\right)$. 5. $4\\sin^3 x\\cos x$. 6. $\\dfrac{2}{\\cos^2 2x}$. 7. $f'(x) = 6x(x^2 - 3)^2$, $f'(2) = 12$.`,
        hy: `## Բարդ ֆունկցիաներ

$y = (3x - 1)^5$-ում նախ հաշվում ենք **ներքին** $u = 3x - 1$ ֆունկցիան, ապա **արտաքին** $y = u^5$ ֆունկցիան։ Այդպիսի ֆունկցիան գրվում է $y = f(g(x))$։

| Ֆունկցիա | Արտաքին $f(u)$ | Ներքին $u = g(x)$ |
|---|---|---|
| $(3x - 1)^5$ | $u^5$ | $3x - 1$ |
| $\\sqrt{x^2 + 1}$ | $\\sqrt{u}$ | $x^2 + 1$ |
| $\\sin 4x$ | $\\sin u$ | $4x$ |
| $\\cos^3 x$ | $u^3$ | $\\cos x$ |

## Բարդ ֆունկցիայի ածանցման կանոնը

$$\\left(f(g(x))\\right)' = f'(g(x)) \\cdot g'(x).$$

Բառերով՝ ածանցեք արտաքին ֆունկցիան՝ ներսը թողնելով անփոփոխ, ապա բազմապատկեք ներսի ածանցյալով։

**Օրինակ 1։** $\\left((3x - 1)^5\\right)' = 5(3x - 1)^4 \\cdot 3 = 15(3x - 1)^4$։

**Օրինակ 2։** $\\left(\\sqrt{x^2 + 1}\\right)' = \\dfrac{1}{2\\sqrt{x^2 + 1}} \\cdot 2x = \\dfrac{x}{\\sqrt{x^2 + 1}}$։

**Օրինակ 3։** $(\\sin 4x)' = 4\\cos 4x$։ Ընդհանուր դեպքում $(f(kx + b))' = k\\,f'(kx + b)$։

**Օրինակ 4։** $(\\cos^3 x)' = 3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x\\sin x$։

**Օրինակ 5։** Երկու շերտ՝ $\\left(\\sin^2 3x\\right)' = 2\\sin 3x \\cdot \\cos 3x \\cdot 3 = 3\\sin 6x$։

**Օրինակ 6։** $\\left(\\dfrac{1}{(2x + 5)^3}\\right)' = \\left((2x + 5)^{-3}\\right)' = -3(2x + 5)^{-4} \\cdot 2 = -\\dfrac{6}{(2x + 5)^4}$։

### Վարժություններ

1. Անվանեք $\\cos(x^2)$-ի արտաքին և ներքին ֆունկցիաները։
2. Ածանցեք $(2x + 7)^{10}$-ը։
3. Ածանցեք $\\sqrt{5 - 4x}$-ը։
4. Ածանցեք $\\cos\\left(3x - \\dfrac{\\pi}{4}\\right)$-ը։
5. Ածանցեք $\\sin^4 x$-ը։
6. Ածանցեք $\\operatorname{tg} 2x$-ը։
7. $f(x) = (x^2 - 3)^3$։ Գտեք $f'(2)$-ը։

### Պատասխաններ

1. Արտաքինը՝ $\\cos u$, ներքինը՝ $x^2$։ 2. $20(2x + 7)^9$։ 3. $-\\dfrac{2}{\\sqrt{5 - 4x}}$։ 4. $-3\\sin\\left(3x - \\dfrac{\\pi}{4}\\right)$։ 5. $4\\sin^3 x\\cos x$։ 6. $\\dfrac{2}{\\cos^2 2x}$։ 7. $f'(x) = 6x(x^2 - 3)^2$, $f'(2) = 12$։`,
        ru: `## Сложные функции

В $y = (3x - 1)^5$ сначала вычисляют **внутреннюю** функцию $u = 3x - 1$, затем **внешнюю** $y = u^5$. Такую функцию записывают $y = f(g(x))$.

| Функция | Внешняя $f(u)$ | Внутренняя $u = g(x)$ |
|---|---|---|
| $(3x - 1)^5$ | $u^5$ | $3x - 1$ |
| $\\sqrt{x^2 + 1}$ | $\\sqrt{u}$ | $x^2 + 1$ |
| $\\sin 4x$ | $\\sin u$ | $4x$ |
| $\\cos^3 x$ | $u^3$ | $\\cos x$ |

## Правило дифференцирования сложной функции

$$\\left(f(g(x))\\right)' = f'(g(x)) \\cdot g'(x).$$

Словами: продифференцируйте внешнюю функцию, оставив внутреннюю без изменений, и умножьте на производную внутренней.

**Пример 1.** $\\left((3x - 1)^5\\right)' = 5(3x - 1)^4 \\cdot 3 = 15(3x - 1)^4$.

**Пример 2.** $\\left(\\sqrt{x^2 + 1}\\right)' = \\dfrac{1}{2\\sqrt{x^2 + 1}} \\cdot 2x = \\dfrac{x}{\\sqrt{x^2 + 1}}$.

**Пример 3.** $(\\sin 4x)' = 4\\cos 4x$. В общем случае $(f(kx + b))' = k\\,f'(kx + b)$.

**Пример 4.** $(\\cos^3 x)' = 3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x\\sin x$.

**Пример 5.** Два слоя: $\\left(\\sin^2 3x\\right)' = 2\\sin 3x \\cdot \\cos 3x \\cdot 3 = 3\\sin 6x$.

**Пример 6.** $\\left(\\dfrac{1}{(2x + 5)^3}\\right)' = \\left((2x + 5)^{-3}\\right)' = -3(2x + 5)^{-4} \\cdot 2 = -\\dfrac{6}{(2x + 5)^4}$.

### Упражнения

1. Назовите внешнюю и внутреннюю функции для $\\cos(x^2)$.
2. Найдите производную $(2x + 7)^{10}$.
3. Найдите производную $\\sqrt{5 - 4x}$.
4. Найдите производную $\\cos\\left(3x - \\dfrac{\\pi}{4}\\right)$.
5. Найдите производную $\\sin^4 x$.
6. Найдите производную $\\operatorname{tg} 2x$.
7. $f(x) = (x^2 - 3)^3$. Найдите $f'(2)$.

### Ответы

1. Внешняя $\\cos u$, внутренняя $x^2$. 2. $20(2x + 7)^9$. 3. $-\\dfrac{2}{\\sqrt{5 - 4x}}$. 4. $-3\\sin\\left(3x - \\dfrac{\\pi}{4}\\right)$. 5. $4\\sin^3 x\\cos x$. 6. $\\dfrac{2}{\\cos^2 2x}$. 7. $f'(x) = 6x(x^2 - 3)^2$, $f'(2) = 12$.`,
      },
      [
        q(
          t("In sin 4x the inner function is…", "sin 4x-ում ներքին ֆունկցիան…", "В sin 4x внутренняя функция —"),
          [t("sin u", "sin u-ն է", "sin u"), t("4x", "4x-ն է", "4x"), t("4", "4-ն է", "4")],
          1,
        ),
        q(
          t("(f(g(x)))′ equals…", "(f(g(x)))′-ը հավասար է…", "(f(g(x)))′ равно…"),
          [t("f′(x) · g′(x)", "f′(x) · g′(x)", "f′(x) · g′(x)"), t("f′(g(x)) · g′(x)", "f′(g(x)) · g′(x)", "f′(g(x)) · g′(x)"), t("f′(g′(x))", "f′(g′(x))", "f′(g′(x))")],
          1,
        ),
        q(
          t("((3x − 1)⁵)′ equals…", "((3x − 1)⁵)′-ը հավասար է…", "((3x − 1)⁵)′ равно…"),
          [t("5(3x − 1)⁴", "5(3x − 1)⁴", "5(3x − 1)⁴"), t("15(3x − 1)⁴", "15(3x − 1)⁴", "15(3x − 1)⁴"), t("3(3x − 1)⁵", "3(3x − 1)⁵", "3(3x − 1)⁵")],
          1,
        ),
        q(
          t("(sin 4x)′ equals…", "(sin 4x)′-ը հավասար է…", "(sin 4x)′ равно…"),
          [t("cos 4x", "cos 4x", "cos 4x"), t("4 cos 4x", "4 cos 4x", "4 cos 4x"), t("4 cos x", "4 cos x", "4 cos x")],
          1,
        ),
        q(
          t("(√(x² + 1))′ equals…", "(√(x² + 1))′-ը հավասար է…", "(√(x² + 1))′ равно…"),
          [t("x/√(x² + 1)", "x/√(x² + 1)", "x/√(x² + 1)"), t("1/(2√(x² + 1))", "1/(2√(x² + 1))", "1/(2√(x² + 1))"), t("2x√(x² + 1)", "2x√(x² + 1)", "2x√(x² + 1)")],
          0,
        ),
        q(
          t("(cos³x)′ equals…", "(cos³x)′-ը հավասար է…", "(cos³x)′ равно…"),
          [t("3cos²x", "3cos²x", "3cos²x"), t("−3cos²x sin x", "−3cos²x sin x", "−3cos²x sin x"), t("−sin³x", "−sin³x", "−sin³x")],
          1,
        ),
      ],
    ),
    lesson(
      "tangent-line",
      ["Geometric meaning: the tangent line", "Երկրաչափական իմաստ․ շոշափող", "Геометрический смысл: уравнение касательной"],
      {
        en: ["Explain that f′(x₀) is the slope of the tangent and tan α of its angle with the x-axis", "Write the equation of the tangent y = f(x₀) + f′(x₀)(x − x₀)", "Find tangents with a given slope or parallel to a given line"],
        hy: ["Բացատրել, որ f′(x₀)-ն շոշափողի անկյունային գործակիցն է և x առանցքի հետ նրա կազմած անկյան տանգենսը", "Գրել շոշափողի y = f(x₀) + f′(x₀)(x − x₀) հավասարումը", "Գտնել տրված անկյունային գործակցով կամ տրված ուղղին զուգահեռ շոշափողներ"],
        ru: ["Объяснять, что f′(x₀) — угловой коэффициент касательной и тангенс её угла с осью x", "Записывать уравнение касательной y = f(x₀) + f′(x₀)(x − x₀)", "Находить касательные с заданным угловым коэффициентом или параллельные данной прямой"],
      },
      {
        en: `## Slope of the tangent

The tangent to the graph at $x_0$ is the limit position of a secant. Its slope is

$$k = f'(x_0) = \\tan\\alpha,$$

where $\\alpha$ is the angle between the tangent and the positive direction of the $x$-axis.

- $f'(x_0) > 0$: the tangent rises, $\\alpha$ is acute.
- $f'(x_0) < 0$: the tangent falls, $\\alpha$ is obtuse.
- $f'(x_0) = 0$: the tangent is horizontal.

## Equation of the tangent

$$y = f(x_0) + f'(x_0)(x - x_0).$$

Algorithm: find $f(x_0)$, find $f'(x)$ and $f'(x_0)$, substitute.

**Example 1.** $f(x) = x^2 - 4x + 1$, $x_0 = 3$. $f(3) = -2$, $f'(x) = 2x - 4$, $f'(3) = 2$. Tangent: $y = -2 + 2(x - 3) = 2x - 8$.

**Example 2.** $f(x) = \\sin x$, $x_0 = 0$: $y = x$. Near $0$ the sine graph almost coincides with this line.

**Example 3.** At what angle does $y = \\sqrt3\\,x - \\dfrac{x^3}{3}$ cross the $x$-axis at the origin? $y'(0) = \\sqrt3 = \\tan 60^\\circ$, so the angle is $60^\\circ$.

## A given slope

**Example 4.** At which point is the tangent to $y = x^2 + 3x$ parallel to $y = 5x - 1$? Parallel lines have equal slopes: $2x + 3 = 5$, $x = 1$, the point is $(1; 4)$, and the tangent is $y = 5x - 1$ itself.

**Example 5.** Find the points where the tangent to $y = x^3 - 3x$ is horizontal: $3x^2 - 3 = 0$, $x = \\pm1$, the points $(1; -2)$ and $(-1; 2)$.

### Exercises

1. Write the tangent to $y = x^3$ at $x_0 = 1$.
2. Write the tangent to $y = \\dfrac{1}{x}$ at $x_0 = 2$.
3. Write the tangent to $y = \\cos x$ at $x_0 = \\dfrac{\\pi}{2}$.
4. Find the angle between the $x$-axis and the tangent to $y = x^2$ at $x_0 = \\dfrac12$.
5. At which point is the tangent to $y = x^2 - 6x$ horizontal?
6. At which point is the tangent to $y = x^2$ parallel to $y = -4x + 7$?
7. Is the slope of the tangent to $y = 2\\sqrt{x}$ at $x_0 = 4$ positive or negative? Find it.

### Answers

1. $y = 3x - 2$. 2. $y = -\\dfrac14 x + 1$. 3. $y = -x + \\dfrac{\\pi}{2}$. 4. $k = 1$, the angle is $45^\\circ$. 5. $(3; -9)$. 6. $2x = -4$, the point $(-2; 4)$. 7. $y' = \\dfrac{1}{\\sqrt{x}}$, $k = \\dfrac12 > 0$.`,
        hy: `## Շոշափողի թեքությունը

Գրաֆիկին $x_0$ կետում տարված շոշափողը հատողի սահմանային դիրքն է։ Նրա անկյունային գործակիցն է

$$k = f'(x_0) = \\operatorname{tg}\\alpha,$$

որտեղ $\\alpha$-ն շոշափողի և $x$ առանցքի դրական ուղղության կազմած անկյունն է։

- $f'(x_0) > 0$՝ շոշափողը բարձրանում է, $\\alpha$-ն սուր է։
- $f'(x_0) < 0$՝ շոշափողն իջնում է, $\\alpha$-ն բութ է։
- $f'(x_0) = 0$՝ շոշափողը հորիզոնական է։

## Շոշափողի հավասարումը

$$y = f(x_0) + f'(x_0)(x - x_0).$$

Ալգորիթմ՝ գտեք $f(x_0)$-ն, գտեք $f'(x)$-ը և $f'(x_0)$-ն, տեղադրեք։

**Օրինակ 1։** $f(x) = x^2 - 4x + 1$, $x_0 = 3$։ $f(3) = -2$, $f'(x) = 2x - 4$, $f'(3) = 2$։ Շոշափողը՝ $y = -2 + 2(x - 3) = 2x - 8$։

**Օրինակ 2։** $f(x) = \\sin x$, $x_0 = 0$՝ $y = x$։ $0$-ի մոտ սինուսի գրաֆիկը գրեթե համընկնում է այս ուղղին։

**Օրինակ 3։** Ի՞նչ անկյան տակ է $y = \\sqrt3\\,x - \\dfrac{x^3}{3}$-ը հատում $x$ առանցքը սկզբնակետում։ $y'(0) = \\sqrt3 = \\operatorname{tg} 60^\\circ$, ուստի անկյունը $60^\\circ$ է։

## Տրված թեքություն

**Օրինակ 4։** Ո՞ր կետում է $y = x^2 + 3x$-ի շոշափողը զուգահեռ $y = 5x - 1$-ին։ Զուգահեռ ուղիղների անկյունային գործակիցները հավասար են՝ $2x + 3 = 5$, $x = 1$, կետը $(1; 4)$ է, իսկ շոշափողը հենց $y = 5x - 1$-ն է։

**Օրինակ 5։** Գտեք կետերը, որտեղ $y = x^3 - 3x$-ի շոշափողը հորիզոնական է՝ $3x^2 - 3 = 0$, $x = \\pm1$, կետերը՝ $(1; -2)$ և $(-1; 2)$։

### Վարժություններ

1. Գրեք $y = x^3$-ի շոշափողը $x_0 = 1$ կետում։
2. Գրեք $y = \\dfrac{1}{x}$-ի շոշափողը $x_0 = 2$ կետում։
3. Գրեք $y = \\cos x$-ի շոշափողը $x_0 = \\dfrac{\\pi}{2}$ կետում։
4. Գտեք $x$ առանցքի և $y = x^2$-ի $x_0 = \\dfrac12$ կետում տարված շոշափողի կազմած անկյունը։
5. Ո՞ր կետում է $y = x^2 - 6x$-ի շոշափողը հորիզոնական։
6. Ո՞ր կետում է $y = x^2$-ի շոշափողը զուգահեռ $y = -4x + 7$-ին։
7. Դրակա՞ն է, թե բացասական $y = 2\\sqrt{x}$-ի շոշափողի թեքությունը $x_0 = 4$ կետում։ Գտեք այն։

### Պատասխաններ

1. $y = 3x - 2$։ 2. $y = -\\dfrac14 x + 1$։ 3. $y = -x + \\dfrac{\\pi}{2}$։ 4. $k = 1$, անկյունը $45^\\circ$ է։ 5. $(3; -9)$։ 6. $2x = -4$, կետը՝ $(-2; 4)$։ 7. $y' = \\dfrac{1}{\\sqrt{x}}$, $k = \\dfrac12 > 0$։`,
        ru: `## Наклон касательной

Касательная к графику в точке $x_0$ — предельное положение секущей. Её угловой коэффициент

$$k = f'(x_0) = \\operatorname{tg}\\alpha,$$

где $\\alpha$ — угол между касательной и положительным направлением оси $x$.

- $f'(x_0) > 0$: касательная поднимается, $\\alpha$ острый.
- $f'(x_0) < 0$: касательная опускается, $\\alpha$ тупой.
- $f'(x_0) = 0$: касательная горизонтальна.

## Уравнение касательной

$$y = f(x_0) + f'(x_0)(x - x_0).$$

Алгоритм: найти $f(x_0)$, найти $f'(x)$ и $f'(x_0)$, подставить.

**Пример 1.** $f(x) = x^2 - 4x + 1$, $x_0 = 3$. $f(3) = -2$, $f'(x) = 2x - 4$, $f'(3) = 2$. Касательная: $y = -2 + 2(x - 3) = 2x - 8$.

**Пример 2.** $f(x) = \\sin x$, $x_0 = 0$: $y = x$. Около $0$ график синуса почти совпадает с этой прямой.

**Пример 3.** Под каким углом $y = \\sqrt3\\,x - \\dfrac{x^3}{3}$ пересекает ось $x$ в начале координат? $y'(0) = \\sqrt3 = \\operatorname{tg} 60^\\circ$, угол $60^\\circ$.

## Заданный наклон

**Пример 4.** В какой точке касательная к $y = x^2 + 3x$ параллельна $y = 5x - 1$? У параллельных прямых равные угловые коэффициенты: $2x + 3 = 5$, $x = 1$, точка $(1; 4)$, а касательная — сама прямая $y = 5x - 1$.

**Пример 5.** Найдите точки, где касательная к $y = x^3 - 3x$ горизонтальна: $3x^2 - 3 = 0$, $x = \\pm1$, точки $(1; -2)$ и $(-1; 2)$.

### Упражнения

1. Запишите касательную к $y = x^3$ в точке $x_0 = 1$.
2. Запишите касательную к $y = \\dfrac{1}{x}$ в точке $x_0 = 2$.
3. Запишите касательную к $y = \\cos x$ в точке $x_0 = \\dfrac{\\pi}{2}$.
4. Найдите угол между осью $x$ и касательной к $y = x^2$ в точке $x_0 = \\dfrac12$.
5. В какой точке касательная к $y = x^2 - 6x$ горизонтальна?
6. В какой точке касательная к $y = x^2$ параллельна $y = -4x + 7$?
7. Положителен или отрицателен наклон касательной к $y = 2\\sqrt{x}$ в точке $x_0 = 4$? Найдите его.

### Ответы

1. $y = 3x - 2$. 2. $y = -\\dfrac14 x + 1$. 3. $y = -x + \\dfrac{\\pi}{2}$. 4. $k = 1$, угол $45^\\circ$. 5. $(3; -9)$. 6. $2x = -4$, точка $(-2; 4)$. 7. $y' = \\dfrac{1}{\\sqrt{x}}$, $k = \\dfrac12 > 0$.`,
      },
      [
        q(
          t("f′(x₀) equals the tangent's…", "f′(x₀)-ն հավասար է շոշափողի…", "f′(x₀) равна у касательной…"),
          [t("slope", "անկյունային գործակցին", "угловому коэффициенту"), t("y-intercept", "y առանցքի հետ հատման կետին", "точке пересечения с осью y"), t("length", "երկարությանը", "длине")],
          0,
        ),
        q(
          t("The tangent equation is…", "Շոշափողի հավասարումն է…", "Уравнение касательной —"),
          [t("y = f(x₀) + f′(x₀)(x − x₀)", "y = f(x₀) + f′(x₀)(x − x₀)", "y = f(x₀) + f′(x₀)(x − x₀)"), t("y = f′(x₀)x", "y = f′(x₀)x", "y = f′(x₀)x"), t("y = f(x₀)(x − x₀)", "y = f(x₀)(x − x₀)", "y = f(x₀)(x − x₀)")],
          0,
        ),
        q(
          t("If f′(x₀) = 0, the tangent is…", "Եթե f′(x₀) = 0, շոշափողը…", "Если f′(x₀) = 0, касательная…"),
          [t("vertical", "ուղղաձիգ է", "вертикальна"), t("horizontal", "հորիզոնական է", "горизонтальна"), t("missing", "բացակայում է", "отсутствует")],
          1,
        ),
        q(
          t("The tangent to y = x³ at x₀ = 1 is…", "y = x³-ի շոշափողը x₀ = 1 կետում…", "Касательная к y = x³ в точке x₀ = 1 —"),
          [t("y = 3x − 2", "y = 3x − 2", "y = 3x − 2"), t("y = 3x + 1", "y = 3x + 1", "y = 3x + 1"), t("y = x", "y = x", "y = x")],
          0,
        ),
        q(
          t("Parallel lines have…", "Զուգահեռ ուղիղներն ունեն…", "У параллельных прямых…"),
          [t("equal slopes", "հավասար անկյունային գործակիցներ", "равные угловые коэффициенты"), t("opposite slopes", "հակադիր անկյունային գործակիցներ", "противоположные угловые коэффициенты"), t("slopes with product −1", "անկյունային գործակիցներ, որոնց արտադրյալը −1 է", "угловые коэффициенты с произведением −1")],
          0,
        ),
        q(
          t("If f′(x₀) < 0, the angle of the tangent with the x-axis is…", "Եթե f′(x₀) < 0, շոշափողի և x առանցքի անկյունը…", "Если f′(x₀) < 0, угол касательной с осью x…"),
          [t("acute", "սուր է", "острый"), t("obtuse", "բութ է", "тупой"), t("right", "ուղիղ է", "прямой")],
          1,
        ),
      ],
    ),
  ],
};
