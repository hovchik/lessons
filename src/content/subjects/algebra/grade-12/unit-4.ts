import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Deeper analysis", "Անալիզի խորացում", "Углубление анализа"),
  summary: t("Second derivative and convexity, asymptotes, integrals in physics, differential equations idea.", "Երկրորդ ածանցյալ և ուռուցիկություն, ասիմպտոտներ, ինտեգրալը ֆիզիկայում, դիֆերենցիալ հավասարման գաղափար։", "Вторая производная и выпуклость, асимптоты, интеграл в физике, идея дифференциального уравнения."),
  lessons: [
    lesson(
      "second-derivative",
      ["Second derivative, convexity, inflection", "Երկրորդ ածանցյալ, ուռուցիկություն, շրջման կետ", "Вторая производная, выпуклость, точки перегиба"],
      {
        en: ["Compute the second derivative and interpret it as the rate of change of the slope (acceleration)", "Determine where a graph is convex down or convex up from the sign of f″", "Find inflection points and use the second-derivative test for extrema"],
        hy: ["Հաշվել երկրորդ ածանցյալը և մեկնաբանել այն որպես թեքության փոփոխման արագություն (արագացում)", "f″-ի նշանով որոշել, թե որտեղ է գրաֆիկն ուռուցիկ դեպի ներքև կամ դեպի վերև", "Գտնել շրջման կետերը և էքստրեմումների համար օգտվել երկրորդ ածանցյալի հայտանիշից"],
        ru: ["Вычислять вторую производную и трактовать её как скорость изменения наклона (ускорение)", "По знаку f″ определять, где график выпуклый вниз или вверх", "Находить точки перегиба и применять признак экстремума по второй производной"],
      },
      {
        en: `## The derivative of the derivative

The derivative $f'$ is itself a function, so it can be differentiated again. The result $f'' = (f')'$ is the **second derivative**. Physically, if $s(t)$ is position, $s'$ is velocity and $s''$ is **acceleration**.

**Example 1.** $f(x) = x^4 - 6x^2$: $f' = 4x^3 - 12x$, $f'' = 12x^2 - 12$.

**Example 2.** $s(t) = 5t^2 + 3t$: $v = 10t + 3$, $a = s'' = 10$ (constant acceleration).

**Example 3.** $(\\sin x)'' = -\\sin x$, $(e^{2x})'' = 4e^{2x}$, $(\\ln x)'' = -\\dfrac{1}{x^2}$.

## Convexity

The first derivative tells us whether the graph goes up or down. The second derivative tells us how it **bends**.

- If $f'' > 0$ on an interval, the slope $f'$ increases: the graph is **convex down** (shaped like a cup $\\cup$, lying above its tangents). Example: $y = x^2$.
- If $f'' < 0$, the slope decreases: the graph is **convex up** (like a cap $\\cap$, below its tangents). Example: $y = -x^2$, $y = \\ln x$.

A point where the direction of bending changes is an **inflection point**. There $f'' = 0$ (or does not exist) **and** $f''$ changes sign.

**Example 4.** $f(x) = x^3$: $f'' = 6x$, negative for $x < 0$, positive for $x > 0$. Inflection at $x = 0$: the cubic bends one way, then the other.

**Example 5.** $f(x) = x^4 - 6x^2$ from Example 1: $f'' = 12(x - 1)(x + 1)$. Convex down on $(-\\infty; -1)$ and $(1; +\\infty)$, convex up on $(-1; 1)$. Inflection points at $x = \\pm1$, $f(\\pm1) = -5$.

**Example 6.** $f(x) = x^4$: $f'' = 12x^2 \\ge 0$, zero at $x = 0$ but **without** a sign change. No inflection: the graph is convex down everywhere.

## The second-derivative test

At a critical point $x_0$ ($f'(x_0) = 0$):

- $f''(x_0) > 0$: the graph is cup-shaped there, so $x_0$ is a **minimum**;
- $f''(x_0) < 0$: cap-shaped, a **maximum**;
- $f''(x_0) = 0$: no conclusion, use the sign of $f'$.

**Example 7.** $f(x) = x^3 - 3x$: $f' = 3x^2 - 3 = 0$ at $x = \\pm1$; $f'' = 6x$. $f''(1) = 6 > 0$: minimum $f(1) = -2$. $f''(-1) = -6 < 0$: maximum $f(-1) = 2$.

**Example 8.** $f(x) = xe^{x}$: $f' = (x + 1)e^x = 0$ at $x = -1$; $f'' = (x + 2)e^x$, $f''(-1) = e^{-1} > 0$: minimum.

### Exercises

1. Find $f''$ for $f(x) = 2x^5 - x^3 + 7x$, $f(x) = \\cos 3x$, $f(x) = \\dfrac1x$.
2. $s(t) = t^3 - 6t^2 + 9t$. Find the velocity and acceleration at $t = 1$. When is the acceleration zero?
3. Find the intervals of convexity and the inflection points of $f(x) = x^3 - 6x^2 + 5$.
4. Find the inflection points of $f(x) = x^4 - 4x^3$.
5. Show that $y = e^x$ is convex down everywhere and $y = \\ln x$ is convex up everywhere.
6. Use the second-derivative test on $f(x) = x^4 - 8x^2$.
7. Use the second-derivative test on $f(x) = x + \\dfrac4x$.
8. Does $f(x) = x^5$ have an inflection point at $0$? Does $f(x) = x^6$?

### Answers

1. $40x^3 - 6x$; $-9\\cos 3x$; $\\dfrac{2}{x^3}$. 2. $v = 3t^2 - 12t + 9$, $v(1) = 0$; $a = 6t - 12$, $a(1) = -6$; $a = 0$ at $t = 2$. 3. $f'' = 6x - 12$: convex up on $(-\\infty; 2)$, down on $(2; +\\infty)$; inflection $(2; -11)$. 4. $f'' = 12x^2 - 24x = 12x(x - 2)$: inflections at $x = 0$ and $x = 2$. 5. $(e^x)'' = e^x > 0$; $(\\ln x)'' = -\\dfrac{1}{x^2} < 0$. 6. $f' = 4x^3 - 16x = 4x(x^2 - 4)$: critical $0, \\pm2$; $f'' = 12x^2 - 16$: $f''(0) < 0$ max $0$; $f''(\\pm2) = 32 > 0$ min $-16$. 7. $f' = 1 - \\dfrac{4}{x^2} = 0$ at $x = \\pm2$; $f'' = \\dfrac{8}{x^3}$: $f''(2) > 0$ min $4$; $f''(-2) < 0$ max $-4$. 8. Yes: $f'' = 20x^3$ changes sign. No: $f'' = 30x^4 \\ge 0$ does not.`,
        hy: `## Ածանցյալի ածանցյալը

$f'$ ածանցյալն ինքը ֆունկցիա է, ուստի այն կարելի է նորից ածանցել։ Արդյունքը՝ $f'' = (f')'$, **երկրորդ ածանցյալն** է։ Ֆիզիկապես, եթե $s(t)$-ն դիրքն է, ապա $s'$-ն արագությունն է, իսկ $s''$-ը՝ **արագացումը**։

**Օրինակ 1։** $f(x) = x^4 - 6x^2$․ $f' = 4x^3 - 12x$, $f'' = 12x^2 - 12$։

**Օրինակ 2։** $s(t) = 5t^2 + 3t$․ $v = 10t + 3$, $a = s'' = 10$ (հաստատուն արագացում)։

**Օրինակ 3։** $(\\sin x)'' = -\\sin x$, $(e^{2x})'' = 4e^{2x}$, $(\\ln x)'' = -\\dfrac{1}{x^2}$։

## Ուռուցիկություն

Առաջին ածանցյալն ասում է, թե գրաֆիկը բարձրանում է, թե իջնում։ Երկրորդ ածանցյալն ասում է, թե ինչպես է այն **թեքվում**։

- Եթե միջակայքում $f'' > 0$, ապա $f'$ թեքությունն աճում է․ գրաֆիկը **ուռուցիկ է դեպի ներքև** (բաժակի ձև՝ $\\cup$, գտնվում է իր շոշափողներից վերև)։ Օրինակ՝ $y = x^2$։
- Եթե $f'' < 0$, թեքությունը նվազում է․ գրաֆիկը **ուռուցիկ է դեպի վերև** (գլխարկի ձև՝ $\\cap$, շոշափողներից ներքև)։ Օրինակ՝ $y = -x^2$, $y = \\ln x$։

Այն կետը, որտեղ թեքվելու ուղղությունը փոխվում է, կոչվում է **շրջման կետ**։ Այնտեղ $f'' = 0$ (կամ գոյություն չունի) **և** $f''$-ը փոխում է նշանը։

**Օրինակ 4։** $f(x) = x^3$․ $f'' = 6x$, բացասական է $x < 0$ դեպքում, դրական՝ $x > 0$ դեպքում։ Շրջման կետ՝ $x = 0$․ խորանարդը թեքվում է մի կողմ, հետո՝ մյուս։

**Օրինակ 5։** $f(x) = x^4 - 6x^2$ Օրինակ 1-ից․ $f'' = 12(x - 1)(x + 1)$։ Ուռուցիկ դեպի ներքև $(-\\infty; -1)$ և $(1; +\\infty)$ միջակայքերում, դեպի վերև՝ $(-1; 1)$-ում։ Շրջման կետերը՝ $x = \\pm1$, $f(\\pm1) = -5$։

**Օրինակ 6։** $f(x) = x^4$․ $f'' = 12x^2 \\ge 0$, զրո է $x = 0$-ում, բայց **առանց** նշանի փոփոխության։ Շրջման կետ չկա․ գրաֆիկն ամենուր ուռուցիկ է դեպի ներքև։

## Երկրորդ ածանցյալի հայտանիշը

$x_0$ կրիտիկական կետում ($f'(x_0) = 0$)․

- $f''(x_0) > 0$․ գրաֆիկն այնտեղ բաժակաձև է, ուստի $x_0$-ն **մինիմում** է,
- $f''(x_0) < 0$․ գլխարկաձև է, **մաքսիմում**,
- $f''(x_0) = 0$․ եզրակացություն չկա, օգտվեք $f'$-ի նշանից։

**Օրինակ 7։** $f(x) = x^3 - 3x$․ $f' = 3x^2 - 3 = 0$, երբ $x = \\pm1$, $f'' = 6x$։ $f''(1) = 6 > 0$․ մինիմում $f(1) = -2$։ $f''(-1) = -6 < 0$․ մաքսիմում $f(-1) = 2$։

**Օրինակ 8։** $f(x) = xe^{x}$․ $f' = (x + 1)e^x = 0$, երբ $x = -1$, $f'' = (x + 2)e^x$, $f''(-1) = e^{-1} > 0$․ մինիմում։

### Վարժություններ

1. Գտեք $f''$-ը․ $f(x) = 2x^5 - x^3 + 7x$, $f(x) = \\cos 3x$, $f(x) = \\dfrac1x$։
2. $s(t) = t^3 - 6t^2 + 9t$։ Գտեք արագությունը և արագացումը $t = 1$ պահին։ Ե՞րբ է արագացումը զրո։
3. Գտեք $f(x) = x^3 - 6x^2 + 5$-ի ուռուցիկության միջակայքերը և շրջման կետերը։
4. Գտեք $f(x) = x^4 - 4x^3$-ի շրջման կետերը։
5. Ցույց տվեք, որ $y = e^x$-ն ամենուր ուռուցիկ է դեպի ներքև, իսկ $y = \\ln x$-ը՝ դեպի վերև։
6. Կիրառեք երկրորդ ածանցյալի հայտանիշը $f(x) = x^4 - 8x^2$-ի համար։
7. Կիրառեք երկրորդ ածանցյալի հայտանիշը $f(x) = x + \\dfrac4x$-ի համար։
8. $f(x) = x^5$-ն ունի՞ շրջման կետ $0$-ում։ Իսկ $f(x) = x^6$-ը։

### Պատասխաններ

1. $40x^3 - 6x$, $-9\\cos 3x$, $\\dfrac{2}{x^3}$։ 2. $v = 3t^2 - 12t + 9$, $v(1) = 0$, $a = 6t - 12$, $a(1) = -6$, $a = 0$, երբ $t = 2$։ 3. $f'' = 6x - 12$․ ուռուցիկ դեպի վերև $(-\\infty; 2)$-ում, դեպի ներքև՝ $(2; +\\infty)$-ում, շրջման կետ՝ $(2; -11)$։ 4. $f'' = 12x^2 - 24x = 12x(x - 2)$․ շրջման կետեր $x = 0$ և $x = 2$։ 5. $(e^x)'' = e^x > 0$, $(\\ln x)'' = -\\dfrac{1}{x^2} < 0$։ 6. $f' = 4x^3 - 16x = 4x(x^2 - 4)$․ կրիտիկական կետեր $0, \\pm2$, $f'' = 12x^2 - 16$․ $f''(0) < 0$՝ մաքսիմում $0$, $f''(\\pm2) = 32 > 0$՝ մինիմում $-16$։ 7. $f' = 1 - \\dfrac{4}{x^2} = 0$, երբ $x = \\pm2$, $f'' = \\dfrac{8}{x^3}$․ $f''(2) > 0$՝ մինիմում $4$, $f''(-2) < 0$՝ մաքսիմում $-4$։ 8. Այո․ $f'' = 20x^3$-ը փոխում է նշանը։ Ոչ․ $f'' = 30x^4 \\ge 0$-ն չի փոխում։`,
        ru: `## Производная от производной

Производная $f'$ сама является функцией, поэтому её можно продифференцировать снова. Результат $f'' = (f')'$ — **вторая производная**. Физически, если $s(t)$ — координата, то $s'$ — скорость, а $s''$ — **ускорение**.

**Пример 1.** $f(x) = x^4 - 6x^2$: $f' = 4x^3 - 12x$, $f'' = 12x^2 - 12$.

**Пример 2.** $s(t) = 5t^2 + 3t$: $v = 10t + 3$, $a = s'' = 10$ (постоянное ускорение).

**Пример 3.** $(\\sin x)'' = -\\sin x$, $(e^{2x})'' = 4e^{2x}$, $(\\ln x)'' = -\\dfrac{1}{x^2}$.

## Выпуклость

Первая производная говорит, идёт график вверх или вниз. Вторая производная говорит, как он **изгибается**.

- Если $f'' > 0$ на промежутке, наклон $f'$ растёт: график **выпуклый вниз** (формы чаши $\\cup$, лежит выше своих касательных). Пример: $y = x^2$.
- Если $f'' < 0$, наклон убывает: график **выпуклый вверх** (формы шапки $\\cap$, ниже касательных). Пример: $y = -x^2$, $y = \\ln x$.

Точка, где направление изгиба меняется, называется **точкой перегиба**. В ней $f'' = 0$ (или не существует) **и** $f''$ меняет знак.

**Пример 4.** $f(x) = x^3$: $f'' = 6x$, отрицательна при $x < 0$, положительна при $x > 0$. Перегиб в $x = 0$: кубическая парабола изгибается сначала в одну сторону, потом в другую.

**Пример 5.** $f(x) = x^4 - 6x^2$ из Примера 1: $f'' = 12(x - 1)(x + 1)$. Выпукла вниз на $(-\\infty; -1)$ и $(1; +\\infty)$, вверх на $(-1; 1)$. Точки перегиба $x = \\pm1$, $f(\\pm1) = -5$.

**Пример 6.** $f(x) = x^4$: $f'' = 12x^2 \\ge 0$, нуль при $x = 0$, но **без** смены знака. Перегиба нет: график всюду выпуклый вниз.

## Признак экстремума по второй производной

В критической точке $x_0$ ($f'(x_0) = 0$):

- $f''(x_0) > 0$: график там чашеобразный, значит $x_0$ — **минимум**;
- $f''(x_0) < 0$: шапкообразный, **максимум**;
- $f''(x_0) = 0$: вывода нет, смотрите знак $f'$.

**Пример 7.** $f(x) = x^3 - 3x$: $f' = 3x^2 - 3 = 0$ при $x = \\pm1$; $f'' = 6x$. $f''(1) = 6 > 0$: минимум $f(1) = -2$. $f''(-1) = -6 < 0$: максимум $f(-1) = 2$.

**Пример 8.** $f(x) = xe^{x}$: $f' = (x + 1)e^x = 0$ при $x = -1$; $f'' = (x + 2)e^x$, $f''(-1) = e^{-1} > 0$: минимум.

### Упражнения

1. Найдите $f''$ для $f(x) = 2x^5 - x^3 + 7x$, $f(x) = \\cos 3x$, $f(x) = \\dfrac1x$.
2. $s(t) = t^3 - 6t^2 + 9t$. Найдите скорость и ускорение при $t = 1$. Когда ускорение равно нулю?
3. Найдите промежутки выпуклости и точки перегиба $f(x) = x^3 - 6x^2 + 5$.
4. Найдите точки перегиба $f(x) = x^4 - 4x^3$.
5. Покажите, что $y = e^x$ всюду выпукла вниз, а $y = \\ln x$ всюду выпукла вверх.
6. Примените признак по второй производной к $f(x) = x^4 - 8x^2$.
7. Примените признак по второй производной к $f(x) = x + \\dfrac4x$.
8. Есть ли у $f(x) = x^5$ перегиб в $0$? А у $f(x) = x^6$?

### Ответы

1. $40x^3 - 6x$; $-9\\cos 3x$; $\\dfrac{2}{x^3}$. 2. $v = 3t^2 - 12t + 9$, $v(1) = 0$; $a = 6t - 12$, $a(1) = -6$; $a = 0$ при $t = 2$. 3. $f'' = 6x - 12$: выпукла вверх на $(-\\infty; 2)$, вниз на $(2; +\\infty)$; перегиб $(2; -11)$. 4. $f'' = 12x^2 - 24x = 12x(x - 2)$: перегибы при $x = 0$ и $x = 2$. 5. $(e^x)'' = e^x > 0$; $(\\ln x)'' = -\\dfrac{1}{x^2} < 0$. 6. $f' = 4x^3 - 16x = 4x(x^2 - 4)$: критические $0, \\pm2$; $f'' = 12x^2 - 16$: $f''(0) < 0$ максимум $0$; $f''(\\pm2) = 32 > 0$ минимум $-16$. 7. $f' = 1 - \\dfrac{4}{x^2} = 0$ при $x = \\pm2$; $f'' = \\dfrac{8}{x^3}$: $f''(2) > 0$ минимум $4$; $f''(-2) < 0$ максимум $-4$. 8. Да: $f'' = 20x^3$ меняет знак. Нет: $f'' = 30x^4 \\ge 0$ не меняет.`,
      },
      [
        q(t("Physically, s″(t) is…", "Ֆիզիկապես s″(t)-ն…", "Физически s″(t) — это…"), [t("velocity", "արագությունն է", "скорость"), t("acceleration", "արագացումն է", "ускорение"), t("distance", "ճանապարհն է", "путь")], 1),
        q(t("If f″ > 0 on an interval, the graph is…", "Եթե միջակայքում f″ > 0, գրաֆիկը…", "Если f″ > 0 на промежутке, график…"), [t("convex down (cup)", "ուռուցիկ է դեպի ներքև (բաժակ)", "выпуклый вниз (чаша)"), t("convex up (cap)", "ուռուցիկ է դեպի վերև (գլխարկ)", "выпуклый вверх (шапка)"), t("decreasing", "նվազում է", "убывает")], 0),
        q(t("An inflection point requires…", "Շրջման կետի համար պահանջվում է…", "Для точки перегиба требуется…"), [t("f′ = 0", "f′ = 0", "f′ = 0"), t("f″ = 0 and a sign change of f″", "f″ = 0 և f″-ի նշանի փոփոխություն", "f″ = 0 и смена знака f″"), t("f″ = 0 only", "միայն f″ = 0", "только f″ = 0")], 1),
        q(t("x⁴ at x = 0 has…", "x⁴-ը x = 0-ում ունի…", "x⁴ в точке x = 0 имеет…"), [t("an inflection point", "շրջման կետ", "точку перегиба"), t("no inflection point", "շրջման կետ չունի", "нет точки перегиба"), t("a maximum", "մաքսիմում", "максимум")], 1),
        q(t("If f′(x₀) = 0 and f″(x₀) < 0, then x₀ is…", "Եթե f′(x₀) = 0 և f″(x₀) < 0, ապա x₀-ն…", "Если f′(x₀) = 0 и f″(x₀) < 0, то x₀ —"), [t("a minimum", "մինիմում է", "минимум"), t("a maximum", "մաքսիմում է", "максимум"), t("an inflection point", "շրջման կետ է", "точка перегиба")], 1),
        q(t("(sin x)″ equals…", "(sin x)″-ը հավասար է…", "(sin x)″ равна…"), [t("cos x", "cos x", "cos x"), t("−sin x", "−sin x", "−sin x"), t("sin x", "sin x", "sin x")], 1),
      ],
    ),
    lesson(
      "asymptotes",
      ["Asymptotes and full investigation of a function", "Ասիմպտոտներ և ֆունկցիայի լրիվ հետազոտում", "Асимптоты и полное исследование функции"],
      {
        en: ["Find vertical asymptotes at the zeros of a denominator and horizontal ones from the behaviour as x → ±∞", "Find an oblique asymptote y = kx + b with k = lim f(x)/x and b = lim (f(x) − kx)", "Carry out the full scheme for investigating a function and sketch its graph"],
        hy: ["Գտնել ուղղաձիգ ասիմպտոտները հայտարարի զրոներում և հորիզոնականները՝ x → ±∞ վարքից", "Գտնել թեք ասիմպտոտ y = kx + b, որտեղ k = lim f(x)/x և b = lim (f(x) − kx)", "Իրականացնել ֆունկցիայի հետազոտման լրիվ սխեման և կառուցել գրաֆիկը"],
        ru: ["Находить вертикальные асимптоты в нулях знаменателя и горизонтальные по поведению при x → ±∞", "Находить наклонную асимптоту y = kx + b, где k = lim f(x)/x и b = lim (f(x) − kx)", "Проводить полную схему исследования функции и строить её график"],
      },
      {
        en: `## What an asymptote is

An **asymptote** is a line that the graph approaches without limit as the point moves to infinity along the graph. There are three kinds.

**Vertical**, $x = a$: when $f(x) \\to \\pm\\infty$ as $x \\to a$. For a fraction this happens at zeros of the denominator that are not zeros of the numerator.

**Horizontal**, $y = b$: when $f(x) \\to b$ as $x \\to +\\infty$ or $x \\to -\\infty$.

**Oblique**, $y = kx + b$ with $k \\ne 0$: when $f(x) - (kx + b) \\to 0$. The coefficients are found from

$$k = \\lim_{x \\to \\infty} \\frac{f(x)}{x}, \\qquad b = \\lim_{x \\to \\infty}\\big(f(x) - kx\\big).$$

(A horizontal asymptote is the case $k = 0$.)

**Example 1.** $f(x) = \\dfrac{2x + 1}{x - 3}$. Vertical: $x = 3$. Horizontal: for large $x$, $f(x) \\approx \\dfrac{2x}{x} = 2$, so $y = 2$.

**Example 2.** $f(x) = \\dfrac{x^2 + 1}{x}= x + \\dfrac1x$. Vertical $x = 0$. As $x \\to \\infty$, $\\dfrac1x \\to 0$, so the graph approaches the line $y = x$: an oblique asymptote.

**Example 3.** $f(x) = \\dfrac{x^2 - 3x + 5}{x - 1}$. Divide: $f(x) = x - 2 + \\dfrac{3}{x - 1}$. Vertical $x = 1$, oblique $y = x - 2$.

**Rule for rational functions.** Compare degrees of numerator $n$ and denominator $m$: $n < m$ gives $y = 0$; $n = m$ gives $y = $ ratio of leading coefficients; $n = m + 1$ gives an oblique asymptote (the quotient of the division); $n > m + 1$ gives none.

**Example 4.** $f(x) = \\dfrac{x^2 - 1}{x - 1}$ has **no** vertical asymptote at $x = 1$: the fraction simplifies to $x + 1$ for $x \\ne 1$, and the graph is a line with a hole.

## Full investigation scheme

1. **Domain**; points of discontinuity.
2. **Symmetry**: even, odd, periodic.
3. **Intercepts** with the axes; **sign** of $f$.
4. **Asymptotes**.
5. **$f'$**: critical points, intervals of increase and decrease, extrema.
6. **$f''$**: convexity, inflection points.
7. **Table** of key points and **sketch**.

**Example 5.** Investigate $f(x) = \\dfrac{x^2}{x - 1}$.
1. Domain $x \\ne 1$.
2. Neither even nor odd.
3. Zero at $x = 0$; $f < 0$ for $x < 1$ ($x \\ne 0$), $f > 0$ for $x > 1$.
4. Vertical $x = 1$; division gives $f(x) = x + 1 + \\dfrac{1}{x - 1}$, so oblique $y = x + 1$.
5. $f' = \\dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \\dfrac{x(x - 2)}{(x - 1)^2}$. Zeros $0$ and $2$. $f' > 0$ for $x < 0$ and $x > 2$, $f' < 0$ on $(0; 1)$ and $(1; 2)$. Maximum $f(0) = 0$, minimum $f(2) = 4$.
6. $f'' = \\dfrac{2}{(x - 1)^3}$: convex up for $x < 1$, convex down for $x > 1$; no inflection point (the sign changes only across the asymptote).
7. Sketch: two branches; the left one rises to the maximum at the origin, then falls to $-\\infty$ near $x = 1$; the right one comes down from $+\\infty$ to the minimum $(2; 4)$, then rises along $y = x + 1$.

**Example 6.** $f(x) = xe^{-x}$. Domain $\\mathbb R$; zero at $0$; as $x \\to +\\infty$, $f \\to 0$ (horizontal asymptote $y = 0$ on the right); as $x \\to -\\infty$, $f \\to -\\infty$. $f' = (1 - x)e^{-x}$: maximum $f(1) = \\dfrac1e$. $f'' = (x - 2)e^{-x}$: inflection at $x = 2$.

### Exercises

1. Find the asymptotes of $f(x) = \\dfrac{3x - 1}{x + 2}$.
2. Find the asymptotes of $f(x) = \\dfrac{1}{x^2 - 4}$.
3. Find the asymptotes of $f(x) = \\dfrac{x^2 + 2x}{x - 1}$.
4. Find the asymptotes of $f(x) = \\dfrac{2x^2 - 3}{x^2 + 1}$ and $f(x) = \\dfrac{x^3}{x^2 + 1}$.
5. Does $f(x) = \\dfrac{x^2 - 4}{x - 2}$ have a vertical asymptote?
6. Investigate $f(x) = \\dfrac{x^2 + 1}{x}$ by the full scheme.
7. Investigate $f(x) = \\dfrac{4x}{x^2 + 1}$: symmetry, asymptotes, extrema.
8. Investigate $f(x) = x^2 e^{-x}$: asymptotes, extrema, inflection points.

### Answers

1. $x = -2$, $y = 3$. 2. $x = \\pm2$, $y = 0$. 3. $f = x + 3 + \\dfrac{3}{x - 1}$: $x = 1$, $y = x + 3$. 4. $y = 2$ only; $f = x - \\dfrac{x}{x^2 + 1}$: oblique $y = x$ only. 5. No: $f = x + 2$ for $x \\ne 2$, a hole at $(2; 4)$. 6. Odd; $x = 0$ and $y = x$; $f' = 1 - \\dfrac{1}{x^2}$: max $f(-1) = -2$, min $f(1) = 2$; $f'' = \\dfrac{2}{x^3}$: convex up for $x < 0$, down for $x > 0$. 7. Odd; $y = 0$; $f' = \\dfrac{4(1 - x^2)}{(x^2 + 1)^2}$: min $f(-1) = -2$, max $f(1) = 2$. 8. $y = 0$ as $x \\to +\\infty$; $f' = x(2 - x)e^{-x}$: min $f(0) = 0$, max $f(2) = 4e^{-2}$; $f'' = (x^2 - 4x + 2)e^{-x}$: inflections at $x = 2 \\pm \\sqrt2$.`,
        hy: `## Ինչ է ասիմպտոտը

**Ասիմպտոտը** ուղիղ է, որին գրաֆիկն անսահման մոտենում է, երբ կետը գրաֆիկով հեռանում է անվերջություն։ Կա երեք տեսակ։

**Ուղղաձիգ**, $x = a$․ երբ $f(x) \\to \\pm\\infty$, երբ $x \\to a$։ Կոտորակի դեպքում դա տեղի է ունենում հայտարարի այն զրոներում, որոնք համարիչի զրո չեն։

**Հորիզոնական**, $y = b$․ երբ $f(x) \\to b$, երբ $x \\to +\\infty$ կամ $x \\to -\\infty$։

**Թեք**, $y = kx + b$, $k \\ne 0$․ երբ $f(x) - (kx + b) \\to 0$։ Գործակիցները գտնվում են այսպես․

$$k = \\lim_{x \\to \\infty} \\frac{f(x)}{x}, \\qquad b = \\lim_{x \\to \\infty}\\big(f(x) - kx\\big)$$

(Հորիզոնական ասիմպտոտը $k = 0$ դեպքն է։)

**Օրինակ 1։** $f(x) = \\dfrac{2x + 1}{x - 3}$։ Ուղղաձիգ՝ $x = 3$։ Հորիզոնական՝ մեծ $x$-երի դեպքում $f(x) \\approx \\dfrac{2x}{x} = 2$, ուստի $y = 2$։

**Օրինակ 2։** $f(x) = \\dfrac{x^2 + 1}{x}= x + \\dfrac1x$։ Ուղղաձիգ՝ $x = 0$։ Երբ $x \\to \\infty$, $\\dfrac1x \\to 0$, ուստի գրաֆիկը մոտենում է $y = x$ ուղղին․ թեք ասիմպտոտ։

**Օրինակ 3։** $f(x) = \\dfrac{x^2 - 3x + 5}{x - 1}$։ Բաժանենք․ $f(x) = x - 2 + \\dfrac{3}{x - 1}$։ Ուղղաձիգ՝ $x = 1$, թեք՝ $y = x - 2$։

**Կանոն ռացիոնալ ֆունկցիաների համար։** Համեմատեք համարիչի $n$ և հայտարարի $m$ աստիճանները․ $n < m$՝ $y = 0$, $n = m$՝ $y = $ ավագ գործակիցների հարաբերություն, $n = m + 1$՝ թեք ասիմպտոտ (բաժանման քանորդը), $n > m + 1$՝ ասիմպտոտ չկա։

**Օրինակ 4։** $f(x) = \\dfrac{x^2 - 1}{x - 1}$-ը $x = 1$-ում ուղղաձիգ ասիմպտոտ **չունի**․ կոտորակը $x \\ne 1$ դեպքում կրճատվում է $x + 1$-ի, և գրաֆիկն ուղիղ է՝ «ծակով»։

## Լրիվ հետազոտման սխեմա

1. **Որոշման տիրույթ**, խզման կետեր։
2. **Համաչափություն**․ զույգ, կենտ, պարբերական։
3. **Հատման կետեր** առանցքների հետ, $f$-ի **նշանը**։
4. **Ասիմպտոտներ**։
5. **$f'$**․ կրիտիկական կետեր, աճման և նվազման միջակայքեր, էքստրեմումներ։
6. **$f''$**․ ուռուցիկություն, շրջման կետեր։
7. Հիմնական կետերի **աղյուսակ** և **գրաֆիկ**։

**Օրինակ 5։** Հետազոտենք $f(x) = \\dfrac{x^2}{x - 1}$-ը։
1. Որոշման տիրույթ՝ $x \\ne 1$։
2. Ոչ զույգ է, ոչ կենտ։
3. Զրո $x = 0$-ում, $f < 0$, երբ $x < 1$ ($x \\ne 0$), $f > 0$, երբ $x > 1$։
4. Ուղղաձիգ՝ $x = 1$, բաժանումը տալիս է $f(x) = x + 1 + \\dfrac{1}{x - 1}$, ուստի թեք՝ $y = x + 1$։
5. $f' = \\dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \\dfrac{x(x - 2)}{(x - 1)^2}$։ Զրոները՝ $0$ և $2$։ $f' > 0$, երբ $x < 0$ և $x > 2$, $f' < 0$ $(0; 1)$ և $(1; 2)$ միջակայքերում։ Մաքսիմում $f(0) = 0$, մինիմում $f(2) = 4$։
6. $f'' = \\dfrac{2}{(x - 1)^3}$․ ուռուցիկ դեպի վերև, երբ $x < 1$, դեպի ներքև, երբ $x > 1$, շրջման կետ չկա (նշանը փոխվում է միայն ասիմպտոտի վրայով)։
7. Գրաֆիկ․ երկու ճյուղ, ձախը բարձրանում է մինչև սկզբնակետի մաքսիմումը, ապա իջնում է $-\\infty$՝ $x = 1$-ի մոտ, աջն իջնում է $+\\infty$-ից մինչև $(2; 4)$ մինիմումը, ապա բարձրանում է $y = x + 1$-ի երկայնքով։

**Օրինակ 6։** $f(x) = xe^{-x}$։ Որոշման տիրույթ՝ $\\mathbb R$, զրո՝ $0$-ում, երբ $x \\to +\\infty$, $f \\to 0$ (հորիզոնական ասիմպտոտ $y = 0$ աջից), երբ $x \\to -\\infty$, $f \\to -\\infty$։ $f' = (1 - x)e^{-x}$․ մաքսիմում $f(1) = \\dfrac1e$։ $f'' = (x - 2)e^{-x}$․ շրջման կետ $x = 2$։

### Վարժություններ

1. Գտեք $f(x) = \\dfrac{3x - 1}{x + 2}$-ի ասիմպտոտները։
2. Գտեք $f(x) = \\dfrac{1}{x^2 - 4}$-ի ասիմպտոտները։
3. Գտեք $f(x) = \\dfrac{x^2 + 2x}{x - 1}$-ի ասիմպտոտները։
4. Գտեք $f(x) = \\dfrac{2x^2 - 3}{x^2 + 1}$-ի և $f(x) = \\dfrac{x^3}{x^2 + 1}$-ի ասիմպտոտները։
5. $f(x) = \\dfrac{x^2 - 4}{x - 2}$-ն ունի՞ ուղղաձիգ ասիմպտոտ։
6. Լրիվ սխեմայով հետազոտեք $f(x) = \\dfrac{x^2 + 1}{x}$-ը։
7. Հետազոտեք $f(x) = \\dfrac{4x}{x^2 + 1}$-ը․ համաչափություն, ասիմպտոտներ, էքստրեմումներ։
8. Հետազոտեք $f(x) = x^2 e^{-x}$-ը․ ասիմպտոտներ, էքստրեմումներ, շրջման կետեր։

### Պատասխաններ

1. $x = -2$, $y = 3$։ 2. $x = \\pm2$, $y = 0$։ 3. $f = x + 3 + \\dfrac{3}{x - 1}$․ $x = 1$, $y = x + 3$։ 4. Միայն $y = 2$, $f = x - \\dfrac{x}{x^2 + 1}$․ միայն թեք $y = x$։ 5. Ոչ․ $f = x + 2$, երբ $x \\ne 2$, «ծակ» $(2; 4)$-ում։ 6. Կենտ, $x = 0$ և $y = x$, $f' = 1 - \\dfrac{1}{x^2}$․ մաքսիմում $f(-1) = -2$, մինիմում $f(1) = 2$, $f'' = \\dfrac{2}{x^3}$․ ուռուցիկ դեպի վերև, երբ $x < 0$, դեպի ներքև, երբ $x > 0$։ 7. Կենտ, $y = 0$, $f' = \\dfrac{4(1 - x^2)}{(x^2 + 1)^2}$․ մինիմում $f(-1) = -2$, մաքսիմում $f(1) = 2$։ 8. $y = 0$, երբ $x \\to +\\infty$, $f' = x(2 - x)e^{-x}$․ մինիմում $f(0) = 0$, մաքսիմում $f(2) = 4e^{-2}$, $f'' = (x^2 - 4x + 2)e^{-x}$․ շրջման կետեր $x = 2 \\pm \\sqrt2$։`,
        ru: `## Что такое асимптота

**Асимптота** — прямая, к которой график неограниченно приближается, когда точка уходит по графику в бесконечность. Есть три вида.

**Вертикальная**, $x = a$: когда $f(x) \\to \\pm\\infty$ при $x \\to a$. Для дроби это происходит в нулях знаменателя, не являющихся нулями числителя.

**Горизонтальная**, $y = b$: когда $f(x) \\to b$ при $x \\to +\\infty$ или $x \\to -\\infty$.

**Наклонная**, $y = kx + b$ при $k \\ne 0$: когда $f(x) - (kx + b) \\to 0$. Коэффициенты находят так:

$$k = \\lim_{x \\to \\infty} \\frac{f(x)}{x}, \\qquad b = \\lim_{x \\to \\infty}\\big(f(x) - kx\\big).$$

(Горизонтальная асимптота — случай $k = 0$.)

**Пример 1.** $f(x) = \\dfrac{2x + 1}{x - 3}$. Вертикальная: $x = 3$. Горизонтальная: при больших $x$ $f(x) \\approx \\dfrac{2x}{x} = 2$, значит $y = 2$.

**Пример 2.** $f(x) = \\dfrac{x^2 + 1}{x}= x + \\dfrac1x$. Вертикальная $x = 0$. При $x \\to \\infty$ $\\dfrac1x \\to 0$, поэтому график приближается к прямой $y = x$: наклонная асимптота.

**Пример 3.** $f(x) = \\dfrac{x^2 - 3x + 5}{x - 1}$. Разделим: $f(x) = x - 2 + \\dfrac{3}{x - 1}$. Вертикальная $x = 1$, наклонная $y = x - 2$.

**Правило для рациональных функций.** Сравним степени числителя $n$ и знаменателя $m$: $n < m$ даёт $y = 0$; $n = m$ даёт $y = $ отношение старших коэффициентов; $n = m + 1$ даёт наклонную асимптоту (частное от деления); $n > m + 1$ — асимптот нет.

**Пример 4.** $f(x) = \\dfrac{x^2 - 1}{x - 1}$ **не имеет** вертикальной асимптоты в $x = 1$: дробь сокращается до $x + 1$ при $x \\ne 1$, и график — прямая с «выколотой» точкой.

## Схема полного исследования

1. **Область определения**; точки разрыва.
2. **Симметрия**: чётность, нечётность, периодичность.
3. **Точки пересечения** с осями; **знак** $f$.
4. **Асимптоты**.
5. **$f'$**: критические точки, промежутки возрастания и убывания, экстремумы.
6. **$f''$**: выпуклость, точки перегиба.
7. **Таблица** ключевых точек и **эскиз графика**.

**Пример 5.** Исследуем $f(x) = \\dfrac{x^2}{x - 1}$.
1. Область определения $x \\ne 1$.
2. Ни чётная, ни нечётная.
3. Нуль при $x = 0$; $f < 0$ при $x < 1$ ($x \\ne 0$), $f > 0$ при $x > 1$.
4. Вертикальная $x = 1$; деление даёт $f(x) = x + 1 + \\dfrac{1}{x - 1}$, значит наклонная $y = x + 1$.
5. $f' = \\dfrac{2x(x - 1) - x^2}{(x - 1)^2} = \\dfrac{x(x - 2)}{(x - 1)^2}$. Нули $0$ и $2$. $f' > 0$ при $x < 0$ и $x > 2$, $f' < 0$ на $(0; 1)$ и $(1; 2)$. Максимум $f(0) = 0$, минимум $f(2) = 4$.
6. $f'' = \\dfrac{2}{(x - 1)^3}$: выпукла вверх при $x < 1$, вниз при $x > 1$; точки перегиба нет (знак меняется только через асимптоту).
7. Эскиз: две ветви; левая поднимается до максимума в начале координат, затем падает к $-\\infty$ у $x = 1$; правая спускается от $+\\infty$ к минимуму $(2; 4)$, затем растёт вдоль $y = x + 1$.

**Пример 6.** $f(x) = xe^{-x}$. Область определения $\\mathbb R$; нуль в $0$; при $x \\to +\\infty$ $f \\to 0$ (горизонтальная асимптота $y = 0$ справа); при $x \\to -\\infty$ $f \\to -\\infty$. $f' = (1 - x)e^{-x}$: максимум $f(1) = \\dfrac1e$. $f'' = (x - 2)e^{-x}$: перегиб при $x = 2$.

### Упражнения

1. Найдите асимптоты $f(x) = \\dfrac{3x - 1}{x + 2}$.
2. Найдите асимптоты $f(x) = \\dfrac{1}{x^2 - 4}$.
3. Найдите асимптоты $f(x) = \\dfrac{x^2 + 2x}{x - 1}$.
4. Найдите асимптоты $f(x) = \\dfrac{2x^2 - 3}{x^2 + 1}$ и $f(x) = \\dfrac{x^3}{x^2 + 1}$.
5. Есть ли у $f(x) = \\dfrac{x^2 - 4}{x - 2}$ вертикальная асимптота?
6. Исследуйте $f(x) = \\dfrac{x^2 + 1}{x}$ по полной схеме.
7. Исследуйте $f(x) = \\dfrac{4x}{x^2 + 1}$: симметрия, асимптоты, экстремумы.
8. Исследуйте $f(x) = x^2 e^{-x}$: асимптоты, экстремумы, точки перегиба.

### Ответы

1. $x = -2$, $y = 3$. 2. $x = \\pm2$, $y = 0$. 3. $f = x + 3 + \\dfrac{3}{x - 1}$: $x = 1$, $y = x + 3$. 4. Только $y = 2$; $f = x - \\dfrac{x}{x^2 + 1}$: только наклонная $y = x$. 5. Нет: $f = x + 2$ при $x \\ne 2$, выколотая точка $(2; 4)$. 6. Нечётная; $x = 0$ и $y = x$; $f' = 1 - \\dfrac{1}{x^2}$: максимум $f(-1) = -2$, минимум $f(1) = 2$; $f'' = \\dfrac{2}{x^3}$: выпукла вверх при $x < 0$, вниз при $x > 0$. 7. Нечётная; $y = 0$; $f' = \\dfrac{4(1 - x^2)}{(x^2 + 1)^2}$: минимум $f(-1) = -2$, максимум $f(1) = 2$. 8. $y = 0$ при $x \\to +\\infty$; $f' = x(2 - x)e^{-x}$: минимум $f(0) = 0$, максимум $f(2) = 4e^{-2}$; $f'' = (x^2 - 4x + 2)e^{-x}$: перегибы при $x = 2 \\pm \\sqrt2$.`,
      },
      [
        q(t("A vertical asymptote of a fraction occurs at…", "Կոտորակի ուղղաձիգ ասիմպտոտը լինում է…", "Вертикальная асимптота дроби возникает в…"), [t("zeros of the numerator", "համարիչի զրոներում", "нулях числителя"), t("zeros of the denominator not cancelled by the numerator", "հայտարարի զրոներում, որոնք համարիչով չեն կրճատվում", "нулях знаменателя, не сокращающихся с числителем"), t("x = 0 always", "միշտ x = 0-ում", "всегда в x = 0")], 1),
        q(t("The horizontal asymptote of (2x + 1)/(x − 3) is…", "(2x + 1)/(x − 3)-ի հորիզոնական ասիմպտոտը…", "Горизонтальная асимптота (2x + 1)/(x − 3) —"), [t("y = 2", "y = 2", "y = 2"), t("y = 3", "y = 3", "y = 3"), t("y = −1/3", "y = −1/3", "y = −1/3")], 0),
        q(t("For an oblique asymptote y = kx + b, k equals…", "y = kx + b թեք ասիմպտոտի համար k-ն հավասար է…", "Для наклонной асимптоты y = kx + b коэффициент k равен…"), [t("lim f(x)", "lim f(x)", "lim f(x)"), t("lim f(x)/x", "lim f(x)/x", "lim f(x)/x"), t("lim f′(x)/x", "lim f′(x)/x", "lim f′(x)/x")], 1),
        q(t("The oblique asymptote of (x² + 1)/x is…", "(x² + 1)/x-ի թեք ասիմպտոտը…", "Наклонная асимптота (x² + 1)/x —"), [t("y = x", "y = x", "y = x"), t("y = x + 1", "y = x + 1", "y = x + 1"), t("y = 1", "y = 1", "y = 1")], 0),
        q(t("A rational function has an oblique asymptote when…", "Ռացիոնալ ֆունկցիան թեք ասիմպտոտ ունի, երբ…", "Рациональная функция имеет наклонную асимптоту, когда…"), [t("deg numerator = deg denominator", "համարիչի աստիճանը = հայտարարի աստիճանին", "степень числителя = степени знаменателя"), t("deg numerator = deg denominator + 1", "համարիչի աստիճանը = հայտարարի աստիճանը + 1", "степень числителя = степень знаменателя + 1"), t("deg numerator < deg denominator", "համարիչի աստիճանը < հայտարարի աստիճանից", "степень числителя < степени знаменателя")], 1),
        q(t("(x² − 1)/(x − 1) at x = 1 has…", "(x² − 1)/(x − 1)-ը x = 1-ում ունի…", "(x² − 1)/(x − 1) в точке x = 1 имеет…"), [t("a vertical asymptote", "ուղղաձիգ ասիմպտոտ", "вертикальную асимптоту"), t("a hole in the graph", "«ծակ» գրաֆիկում", "выколотую точку"), t("a maximum", "մաքսիմում", "максимум")], 1),
      ],
    ),
    lesson(
      "integral-applications",
      ["Integral in geometry and physics", "Ինտեգրալն երկրաչափության և ֆիզիկայի մեջ", "Интеграл в геометрии и физике"],
      {
        en: ["Compute the volume of a solid of revolution with V = π∫ₐᵇ f(x)² dx", "Find work done by a variable force and distance from a velocity graph with sign changes", "Compute the average value of a function on an interval"],
        hy: ["Հաշվել պտտման մարմնի ծավալը V = π∫ₐᵇ f(x)² dx բանաձևով", "Գտնել փոփոխական ուժի աշխատանքը և նշանը փոխող արագությամբ անցած ճանապարհը", "Հաշվել ֆունկցիայի միջին արժեքը հատվածում"],
        ru: ["Вычислять объём тела вращения по формуле V = π∫ₐᵇ f(x)² dx", "Находить работу переменной силы и путь по скорости, меняющей знак", "Вычислять среднее значение функции на отрезке"],
      },
      {
        en: `## The integral as a sum of thin pieces

Every application below follows the same idea: cut the object into thin slices, write the contribution of one slice, add them all with an integral.

## Volume of a solid of revolution

Rotate the curvilinear trapezium under $y = f(x)$, $a \\le x \\le b$, about the $x$-axis. A thin slice at $x$ of thickness $dx$ is a disc of radius $f(x)$ and volume $\\pi f(x)^2\\,dx$. Hence

$$V = \\pi\\int_a^b f(x)^2\\,dx.$$

**Example 1.** A cone of height $h$ and base radius $r$: rotate $y = \\dfrac rh x$ on $[0; h]$. $V = \\pi\\displaystyle\\int_0^h \\dfrac{r^2}{h^2}x^2\\,dx = \\pi\\dfrac{r^2}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13\\pi r^2 h$, the familiar formula.

**Example 2.** A sphere of radius $R$: rotate $y = \\sqrt{R^2 - x^2}$ on $[-R; R]$. $V = \\pi\\displaystyle\\int_{-R}^{R}(R^2 - x^2)\\,dx = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3$.

**Example 3.** Rotate $y = x^2$, $0 \\le x \\le 1$, about the $x$-axis: $V = \\pi\\displaystyle\\int_0^1 x^4\\,dx = \\dfrac{\\pi}{5}$.

## Distance and displacement

If velocity $v(t)$ changes sign, $\\displaystyle\\int_{t_1}^{t_2} v\\,dt$ gives the **displacement** (net change of position), while the **distance travelled** is $\\displaystyle\\int_{t_1}^{t_2} \\lvert v\\rvert\\,dt$.

**Example 4.** $v(t) = 6 - 2t$ m/s on $[0; 5]$. Displacement: $\\displaystyle\\int_0^5(6 - 2t)dt = 30 - 25 = 5$ m. The velocity is zero at $t = 3$; distance $= \\displaystyle\\int_0^3(6 - 2t)dt + \\displaystyle\\int_3^5(2t - 6)dt = 9 + 4 = 13$ m.

## Work of a variable force

If a force $F(x)$ acts along the $x$-axis, the work on a small displacement $dx$ is $F(x)\\,dx$, so

$$A = \\int_a^b F(x)\\,dx.$$

**Example 5.** Hooke's law: stretching a spring by $x$ needs force $F = kx$. Work to stretch from $0$ to $\\ell$: $A = \\displaystyle\\int_0^{\\ell} kx\\,dx = \\dfrac{k\\ell^2}{2}$. For $k = 200$ N/m and $\\ell = 0.1$ m: $A = 1$ J.

**Example 6.** A spring is stretched $2$ cm by a force of $10$ N. Work to stretch it by $6$ cm? $k = \\dfrac{10}{0.02} = 500$ N/m, $A = \\dfrac{500 \\cdot 0.06^2}{2} = 0.9$ J.

## Average value

The **mean value** of $f$ on $[a; b]$ is

$$f_{\\text{avg}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx,$$

the height of the rectangle with the same area as the curvilinear trapezium.

**Example 7.** Average of $f(x) = x^2$ on $[0; 3]$: $\\dfrac13 \\cdot \\dfrac{27}{3} = 3$.

**Example 8.** The temperature during a day is $T(t) = 15 + 5\\sin\\dfrac{\\pi t}{12}$, $0 \\le t \\le 12$. Average: $\\dfrac{1}{12}\\displaystyle\\int_0^{12}\\left(15 + 5\\sin\\dfrac{\\pi t}{12}\\right)dt = 15 + \\dfrac{5}{12} \\cdot \\dfrac{12}{\\pi} \\cdot 2 = 15 + \\dfrac{10}{\\pi} \\approx 18.2^\\circ$.

### Exercises

1. Find the volume obtained by rotating $y = \\sqrt x$, $0 \\le x \\le 4$, about the $x$-axis.
2. Find the volume obtained by rotating $y = 2x$, $0 \\le x \\le 3$, about the $x$-axis and check against the cone formula.
3. Find the volume obtained by rotating $y = e^x$, $0 \\le x \\le 1$, about the $x$-axis.
4. $v(t) = t^2 - 4$ m/s on $[0; 3]$. Find the displacement and the distance.
5. $v(t) = \\sin t$ on $[0; 2\\pi]$. Find the displacement and the distance.
6. A spring with $k = 400$ N/m is stretched from $5$ cm to $15$ cm. Find the work.
7. Find the average value of $f(x) = \\sin x$ on $[0; \\pi]$ and of $f(x) = \\dfrac1x$ on $[1; e]$.
8. Find the average value of $f(x) = 3x^2 - 2x$ on $[0; 2]$ and a point where $f$ equals it.

### Answers

1. $\\pi\\displaystyle\\int_0^4 x\\,dx = 8\\pi$. 2. $\\pi\\displaystyle\\int_0^3 4x^2\\,dx = 36\\pi = \\dfrac13\\pi \\cdot 6^2 \\cdot 3$ ✓. 3. $\\pi\\displaystyle\\int_0^1 e^{2x}dx = \\dfrac{\\pi(e^2 - 1)}{2}$. 4. Displacement $9 - 12 = -3$ m; zero at $t = 2$: distance $\\dfrac{16}{3} + \\dfrac{7}{3} = \\dfrac{23}{3}$ m. 5. $0$; $4$. 6. $\\displaystyle\\int_{0.05}^{0.15} 400x\\,dx = 200(0.0225 - 0.0025) = 4$ J. 7. $\\dfrac2\\pi$; $\\dfrac{1}{e - 1}$. 8. $\\dfrac12(8 - 4) = 2$; $3x^2 - 2x = 2$ at $x = \\dfrac{1 + \\sqrt7}{3} \\approx 1.22$.`,
        hy: `## Ինտեգրալը որպես բարակ կտորների գումար

Ստորև բերված յուրաքանչյուր կիրառություն հետևում է նույն գաղափարին․ օբյեկտը կտրել բարակ շերտերի, գրել մեկ շերտի ներդրումը, բոլորը գումարել ինտեգրալով։

## Պտտման մարմնի ծավալը

Պտտենք $y = f(x)$, $a \\le x \\le b$ կորագիծ սեղանը $x$ առանցքի շուրջ։ $x$ կետում $dx$ հաստությամբ բարակ շերտը $f(x)$ շառավղով սկավառակ է՝ $\\pi f(x)^2\\,dx$ ծավալով։ Հետևաբար

$$V = \\pi\\int_a^b f(x)^2\\,dx$$

**Օրինակ 1։** $h$ բարձրությամբ և $r$ հիմքի շառավղով կոն․ պտտենք $y = \\dfrac rh x$-ը $[0; h]$-ում։ $V = \\pi\\displaystyle\\int_0^h \\dfrac{r^2}{h^2}x^2\\,dx = \\pi\\dfrac{r^2}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13\\pi r^2 h$՝ ծանոթ բանաձևը։

**Օրինակ 2։** $R$ շառավղով գունդ․ պտտենք $y = \\sqrt{R^2 - x^2}$-ը $[-R; R]$-ում։ $V = \\pi\\displaystyle\\int_{-R}^{R}(R^2 - x^2)\\,dx = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3$։

**Օրինակ 3։** Պտտենք $y = x^2$-ը, $0 \\le x \\le 1$, $x$ առանցքի շուրջ․ $V = \\pi\\displaystyle\\int_0^1 x^4\\,dx = \\dfrac{\\pi}{5}$։

## Ճանապարհ և տեղափոխություն

Եթե $v(t)$ արագությունը փոխում է նշանը, ապա $\\displaystyle\\int_{t_1}^{t_2} v\\,dt$-ն տալիս է **տեղափոխությունը** (դիրքի զուտ փոփոխությունը), իսկ **անցած ճանապարհը** $\\displaystyle\\int_{t_1}^{t_2} \\lvert v\\rvert\\,dt$ է։

**Օրինակ 4։** $v(t) = 6 - 2t$ մ/վ $[0; 5]$-ում։ Տեղափոխություն՝ $\\displaystyle\\int_0^5(6 - 2t)dt = 30 - 25 = 5$ մ։ Արագությունը զրո է $t = 3$-ում, ճանապարհը՝ $\\displaystyle\\int_0^3(6 - 2t)dt + \\displaystyle\\int_3^5(2t - 6)dt = 9 + 4 = 13$ մ։

## Փոփոխական ուժի աշխատանքը

Եթե $F(x)$ ուժը գործում է $x$ առանցքի ուղղությամբ, փոքր $dx$ տեղափոխության վրա աշխատանքը $F(x)\\,dx$ է, ուստի

$$A = \\int_a^b F(x)\\,dx$$

**Օրինակ 5։** Հուկի օրենք․ զսպանակը $x$-ով ձգելու համար պետք է $F = kx$ ուժ։ $0$-ից $\\ell$ ձգելու աշխատանքը՝ $A = \\displaystyle\\int_0^{\\ell} kx\\,dx = \\dfrac{k\\ell^2}{2}$։ $k = 200$ Ն/մ և $\\ell = 0{,}1$ մ դեպքում՝ $A = 1$ Ջ։

**Օրինակ 6։** Զսպանակը $10$ Ն ուժով ձգվում է $2$ սմ-ով։ Ի՞նչ աշխատանք է պետք այն $6$ սմ-ով ձգելու համար։ $k = \\dfrac{10}{0{,}02} = 500$ Ն/մ, $A = \\dfrac{500 \\cdot 0{,}06^2}{2} = 0{,}9$ Ջ։

## Միջին արժեք

$f$-ի **միջին արժեքը** $[a; b]$-ում

$$f_{\\text{միջ}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx,$$

այն ուղղանկյան բարձրությունն է, որն ունի կորագիծ սեղանի մակերեսը։

**Օրինակ 7։** $f(x) = x^2$-ի միջինը $[0; 3]$-ում՝ $\\dfrac13 \\cdot \\dfrac{27}{3} = 3$։

**Օրինակ 8։** Օրվա ընթացքում ջերմաստիճանը $T(t) = 15 + 5\\sin\\dfrac{\\pi t}{12}$ է, $0 \\le t \\le 12$։ Միջինը՝ $\\dfrac{1}{12}\\displaystyle\\int_0^{12}\\left(15 + 5\\sin\\dfrac{\\pi t}{12}\\right)dt = 15 + \\dfrac{5}{12} \\cdot \\dfrac{12}{\\pi} \\cdot 2 = 15 + \\dfrac{10}{\\pi} \\approx 18{,}2^\\circ$։

### Վարժություններ

1. Գտեք $y = \\sqrt x$, $0 \\le x \\le 4$ կորը $x$ առանցքի շուրջ պտտելիս ստացվող ծավալը։
2. Գտեք $y = 2x$, $0 \\le x \\le 3$ կորը $x$ առանցքի շուրջ պտտելիս ստացվող ծավալը և ստուգեք կոնի բանաձևով։
3. Գտեք $y = e^x$, $0 \\le x \\le 1$ կորը $x$ առանցքի շուրջ պտտելիս ստացվող ծավալը։
4. $v(t) = t^2 - 4$ մ/վ $[0; 3]$-ում։ Գտեք տեղափոխությունը և ճանապարհը։
5. $v(t) = \\sin t$ $[0; 2\\pi]$-ում։ Գտեք տեղափոխությունը և ճանապարհը։
6. $k = 400$ Ն/մ զսպանակը ձգվում է $5$ սմ-ից մինչև $15$ սմ։ Գտեք աշխատանքը։
7. Գտեք $f(x) = \\sin x$-ի միջին արժեքը $[0; \\pi]$-ում և $f(x) = \\dfrac1x$-ինը՝ $[1; e]$-ում։
8. Գտեք $f(x) = 3x^2 - 2x$-ի միջին արժեքը $[0; 2]$-ում և այն կետը, որտեղ $f$-ը հավասար է դրան։

### Պատասխաններ

1. $\\pi\\displaystyle\\int_0^4 x\\,dx = 8\\pi$։ 2. $\\pi\\displaystyle\\int_0^3 4x^2\\,dx = 36\\pi = \\dfrac13\\pi \\cdot 6^2 \\cdot 3$ ✓։ 3. $\\pi\\displaystyle\\int_0^1 e^{2x}dx = \\dfrac{\\pi(e^2 - 1)}{2}$։ 4. Տեղափոխություն $9 - 12 = -3$ մ, զրո $t = 2$-ում, ճանապարհ $\\dfrac{16}{3} + \\dfrac{7}{3} = \\dfrac{23}{3}$ մ։ 5. $0$, $4$։ 6. $\\displaystyle\\int_{0{,}05}^{0{,}15} 400x\\,dx = 200(0{,}0225 - 0{,}0025) = 4$ Ջ։ 7. $\\dfrac2\\pi$, $\\dfrac{1}{e - 1}$։ 8. $\\dfrac12(8 - 4) = 2$, $3x^2 - 2x = 2$, երբ $x = \\dfrac{1 + \\sqrt7}{3} \\approx 1{,}22$։`,
        ru: `## Интеграл как сумма тонких кусочков

Каждое применение ниже следует одной идее: разрезать объект на тонкие слои, записать вклад одного слоя, сложить все интегралом.

## Объём тела вращения

Повернём криволинейную трапецию под $y = f(x)$, $a \\le x \\le b$, вокруг оси $x$. Тонкий слой в точке $x$ толщины $dx$ — диск радиуса $f(x)$ объёмом $\\pi f(x)^2\\,dx$. Значит

$$V = \\pi\\int_a^b f(x)^2\\,dx.$$

**Пример 1.** Конус высоты $h$ с радиусом основания $r$: вращаем $y = \\dfrac rh x$ на $[0; h]$. $V = \\pi\\displaystyle\\int_0^h \\dfrac{r^2}{h^2}x^2\\,dx = \\pi\\dfrac{r^2}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13\\pi r^2 h$ — знакомая формула.

**Пример 2.** Шар радиуса $R$: вращаем $y = \\sqrt{R^2 - x^2}$ на $[-R; R]$. $V = \\pi\\displaystyle\\int_{-R}^{R}(R^2 - x^2)\\,dx = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3$.

**Пример 3.** Вращаем $y = x^2$, $0 \\le x \\le 1$, вокруг оси $x$: $V = \\pi\\displaystyle\\int_0^1 x^4\\,dx = \\dfrac{\\pi}{5}$.

## Путь и перемещение

Если скорость $v(t)$ меняет знак, то $\\displaystyle\\int_{t_1}^{t_2} v\\,dt$ даёт **перемещение** (суммарное изменение координаты), а **пройденный путь** равен $\\displaystyle\\int_{t_1}^{t_2} \\lvert v\\rvert\\,dt$.

**Пример 4.** $v(t) = 6 - 2t$ м/с на $[0; 5]$. Перемещение: $\\displaystyle\\int_0^5(6 - 2t)dt = 30 - 25 = 5$ м. Скорость равна нулю при $t = 3$; путь $= \\displaystyle\\int_0^3(6 - 2t)dt + \\displaystyle\\int_3^5(2t - 6)dt = 9 + 4 = 13$ м.

## Работа переменной силы

Если сила $F(x)$ действует вдоль оси $x$, работа на малом перемещении $dx$ равна $F(x)\\,dx$, поэтому

$$A = \\int_a^b F(x)\\,dx.$$

**Пример 5.** Закон Гука: чтобы растянуть пружину на $x$, нужна сила $F = kx$. Работа растяжения от $0$ до $\\ell$: $A = \\displaystyle\\int_0^{\\ell} kx\\,dx = \\dfrac{k\\ell^2}{2}$. При $k = 200$ Н/м и $\\ell = 0{,}1$ м: $A = 1$ Дж.

**Пример 6.** Пружина растягивается на $2$ см силой $10$ Н. Какова работа растяжения на $6$ см? $k = \\dfrac{10}{0{,}02} = 500$ Н/м, $A = \\dfrac{500 \\cdot 0{,}06^2}{2} = 0{,}9$ Дж.

## Среднее значение

**Среднее значение** $f$ на $[a; b]$:

$$f_{\\text{ср}} = \\frac{1}{b - a}\\int_a^b f(x)\\,dx,$$

это высота прямоугольника с той же площадью, что и у криволинейной трапеции.

**Пример 7.** Среднее $f(x) = x^2$ на $[0; 3]$: $\\dfrac13 \\cdot \\dfrac{27}{3} = 3$.

**Пример 8.** Температура в течение дня $T(t) = 15 + 5\\sin\\dfrac{\\pi t}{12}$, $0 \\le t \\le 12$. Среднее: $\\dfrac{1}{12}\\displaystyle\\int_0^{12}\\left(15 + 5\\sin\\dfrac{\\pi t}{12}\\right)dt = 15 + \\dfrac{5}{12} \\cdot \\dfrac{12}{\\pi} \\cdot 2 = 15 + \\dfrac{10}{\\pi} \\approx 18{,}2^\\circ$.

### Упражнения

1. Найдите объём тела, полученного вращением $y = \\sqrt x$, $0 \\le x \\le 4$, вокруг оси $x$.
2. Найдите объём тела, полученного вращением $y = 2x$, $0 \\le x \\le 3$, вокруг оси $x$, и сверьте с формулой конуса.
3. Найдите объём тела, полученного вращением $y = e^x$, $0 \\le x \\le 1$, вокруг оси $x$.
4. $v(t) = t^2 - 4$ м/с на $[0; 3]$. Найдите перемещение и путь.
5. $v(t) = \\sin t$ на $[0; 2\\pi]$. Найдите перемещение и путь.
6. Пружину с $k = 400$ Н/м растягивают с $5$ см до $15$ см. Найдите работу.
7. Найдите среднее значение $f(x) = \\sin x$ на $[0; \\pi]$ и $f(x) = \\dfrac1x$ на $[1; e]$.
8. Найдите среднее значение $f(x) = 3x^2 - 2x$ на $[0; 2]$ и точку, где $f$ ему равна.

### Ответы

1. $\\pi\\displaystyle\\int_0^4 x\\,dx = 8\\pi$. 2. $\\pi\\displaystyle\\int_0^3 4x^2\\,dx = 36\\pi = \\dfrac13\\pi \\cdot 6^2 \\cdot 3$ ✓. 3. $\\pi\\displaystyle\\int_0^1 e^{2x}dx = \\dfrac{\\pi(e^2 - 1)}{2}$. 4. Перемещение $9 - 12 = -3$ м; нуль при $t = 2$: путь $\\dfrac{16}{3} + \\dfrac{7}{3} = \\dfrac{23}{3}$ м. 5. $0$; $4$. 6. $\\displaystyle\\int_{0{,}05}^{0{,}15} 400x\\,dx = 200(0{,}0225 - 0{,}0025) = 4$ Дж. 7. $\\dfrac2\\pi$; $\\dfrac{1}{e - 1}$. 8. $\\dfrac12(8 - 4) = 2$; $3x^2 - 2x = 2$ при $x = \\dfrac{1 + \\sqrt7}{3} \\approx 1{,}22$.`,
      },
      [
        q(t("The volume of a solid of revolution about the x-axis is…", "x առանցքի շուրջ պտտման մարմնի ծավալը…", "Объём тела вращения вокруг оси x равен…"), [t("π∫ f(x) dx", "π∫ f(x) dx", "π∫ f(x) dx"), t("π∫ f(x)² dx", "π∫ f(x)² dx", "π∫ f(x)² dx"), t("∫ f(x)² dx", "∫ f(x)² dx", "∫ f(x)² dx")], 1),
        q(t("Rotating y = x² on [0; 1] gives volume…", "y = x²-ը [0; 1]-ում պտտելիս ծավալը…", "Вращение y = x² на [0; 1] даёт объём…"), [t("π/3", "π/3", "π/3"), t("π/5", "π/5", "π/5"), t("π/4", "π/4", "π/4")], 1),
        q(t("If v changes sign, the distance travelled is…", "Եթե v-ն փոխում է նշանը, անցած ճանապարհը…", "Если v меняет знак, пройденный путь равен…"), [t("∫ v dt", "∫ v dt", "∫ v dt"), t("∫ |v| dt", "∫ |v| dt", "∫ |v| dt"), t("v(t₂) − v(t₁)", "v(t₂) − v(t₁)", "v(t₂) − v(t₁)")], 1),
        q(t("The work of a variable force F(x) from a to b is…", "a-ից b փոփոխական F(x) ուժի աշխատանքը…", "Работа переменной силы F(x) от a до b равна…"), [t("F(b) − F(a)", "F(b) − F(a)", "F(b) − F(a)"), t("∫ₐᵇ F(x) dx", "∫ₐᵇ F(x) dx", "∫ₐᵇ F(x) dx"), t("F(b)·(b − a)", "F(b)·(b − a)", "F(b)·(b − a)")], 1),
        q(t("The work to stretch a spring from 0 to ℓ is…", "Զսպանակը 0-ից ℓ ձգելու աշխատանքը…", "Работа растяжения пружины от 0 до ℓ равна…"), [t("kℓ", "kℓ", "kℓ"), t("kℓ²/2", "kℓ²/2", "kℓ²/2"), t("kℓ²", "kℓ²", "kℓ²")], 1),
        q(t("The average value of f on [a; b] is…", "f-ի միջին արժեքը [a; b]-ում…", "Среднее значение f на [a; b] равно…"), [t("∫ₐᵇ f dx / (b − a)", "∫ₐᵇ f dx / (b − a)", "∫ₐᵇ f dx / (b − a)"), t("(f(a) + f(b))/2", "(f(a) + f(b))/2", "(f(a) + f(b))/2"), t("∫ₐᵇ f dx", "∫ₐᵇ f dx", "∫ₐᵇ f dx")], 0),
      ],
    ),
    lesson(
      "differential-equations-idea",
      ["Simple differential equations", "Պարզագույն դիֆերենցիալ հավասարումներ", "Простейшие дифференциальные уравнения"],
      {
        en: ["Explain what a differential equation is and check whether a given function is a solution", "Solve y′ = f(x) by integration and y′ = ky by y = Ce^(kx), and fix C from an initial condition", "Model growth, decay and cooling with y′ = ky and y′ = k(y − T)"],
        hy: ["Բացատրել, թե ինչ է դիֆերենցիալ հավասարումը, և ստուգել, թե տրված ֆունկցիան լուծում է, թե ոչ", "Լուծել y′ = f(x) հավասարումն ինտեգրմամբ և y′ = ky-ը՝ y = Ce^(kx) տեսքով, և որոշել C-ն սկզբնական պայմանից", "Մոդելավորել աճը, նվազումը և սառչումը y′ = ky և y′ = k(y − T) հավասարումներով"],
        ru: ["Объяснять, что такое дифференциальное уравнение, и проверять, является ли данная функция решением", "Решать y′ = f(x) интегрированием и y′ = ky в виде y = Ce^(kx), находя C из начального условия", "Моделировать рост, распад и остывание уравнениями y′ = ky и y′ = k(y − T)"],
      },
      {
        en: `## Equations whose unknown is a function

A **differential equation** relates an unknown function $y(x)$ to its derivatives. To solve it means to find all functions $y$ that satisfy it. Unlike algebraic equations, the answer is a **family** of functions with an arbitrary constant; an **initial condition** such as $y(0) = 3$ picks one of them.

**Example 1.** Is $y = x^2 + 5$ a solution of $y' = 2x$? $y' = 2x$ ✓. So is $y = x^2 - 7$: every $y = x^2 + C$ is.

**Example 2.** Is $y = e^{3x}$ a solution of $y' = 3y$? $y' = 3e^{3x} = 3y$ ✓. Is $y = \\sin x$ a solution of $y'' = -y$? $y'' = -\\sin x = -y$ ✓.

## Type 1: $y' = f(x)$

The solution is the antiderivative: $y = \\displaystyle\\int f(x)\\,dx = F(x) + C$.

**Example 3.** $y' = 6x^2 - 4x$, $y(1) = 2$. General solution $y = 2x^3 - 2x^2 + C$; $2 - 2 + C = 2$, $C = 2$: $y = 2x^3 - 2x^2 + 2$.

**Example 4.** $y'' = 6x$, $y(0) = 1$, $y'(0) = -2$. Integrate twice: $y' = 3x^2 + C_1$, $C_1 = -2$; $y = x^3 - 2x + C_2$, $C_2 = 1$. So $y = x^3 - 2x + 1$.

## Type 2: $y' = ky$

"The rate of change is proportional to the quantity itself." We know $(e^{kx})' = ke^{kx}$, so $y = Ce^{kx}$ is a solution for every $C$, and these are all the solutions:

$$y' = ky \\iff y = Ce^{kx}, \\qquad C = y(0).$$

**Example 5.** $y' = -2y$, $y(0) = 5$: $y = 5e^{-2x}$.

**Example 6.** A population grows at a rate proportional to its size: $P' = 0.03P$, $P(0) = 2000$. Then $P(t) = 2000e^{0.03t}$; after $10$ years $P \\approx 2000 \\cdot 1.35 = 2700$. Doubling time: $e^{0.03t} = 2$, $t = \\dfrac{\\ln 2}{0.03} \\approx 23$ years.

**Example 7.** Radioactive decay: $m' = -\\lambda m$, so $m = m_0 e^{-\\lambda t}$. If the half-life is $T$, then $e^{-\\lambda T} = \\dfrac12$, $\\lambda = \\dfrac{\\ln 2}{T}$. For carbon-14, $T = 5730$ years. A sample with $25\\%$ of the original carbon-14 is $2T = 11\\,460$ years old.

## Type 3: $y' = k(y - T)$ (Newton's law of cooling)

A hot body cools at a rate proportional to the temperature difference with the surroundings $T$. Substituting $u = y - T$ gives $u' = ku$, so

$$y = T + Ce^{kt}, \\qquad k < 0.$$

**Example 8.** Tea at $90^\\circ$ in a room at $20^\\circ$ cools to $60^\\circ$ in $10$ minutes. $y = 20 + 70e^{kt}$; $60 = 20 + 70e^{10k}$, $e^{10k} = \\dfrac47$, $k = \\dfrac{1}{10}\\ln\\dfrac47 \\approx -0.056$. When is it $40^\\circ$? $20 = 70e^{kt}$, $e^{kt} = \\dfrac27$, $t = \\dfrac{\\ln(2/7)}{k} \\approx 22$ minutes.

### Exercises

1. Check whether $y = \\cos 2x$ solves $y'' + 4y = 0$ and whether $y = x^3$ solves $xy' = 3y$.
2. Solve $y' = 4x^3 - 1$ with $y(1) = 3$.
3. Solve $y' = \\cos x$ with $y(0) = 2$.
4. Solve $y'' = 2$ with $y(0) = 1$, $y'(0) = 0$.
5. Solve $y' = 5y$, $y(0) = 2$ and $y' = -y$, $y(0) = -3$.
6. Bacteria double every $3$ hours: find $k$ in $N' = kN$ and $N(t)$ if $N(0) = 500$.
7. A substance has half-life $8$ days. What fraction remains after $20$ days?
8. A body at $100^\\circ$ in a room at $25^\\circ$ cools to $75^\\circ$ in $5$ minutes. Find its temperature after $15$ minutes.

### Answers

1. $y'' = -4\\cos 2x = -4y$ ✓; $xy' = 3x^3 = 3y$ ✓. 2. $y = x^4 - x + 3$. 3. $y = \\sin x + 2$. 4. $y = x^2 + 1$. 5. $y = 2e^{5x}$; $y = -3e^{-x}$. 6. $e^{3k} = 2$, $k = \\dfrac{\\ln 2}{3} \\approx 0.231$; $N = 500 \\cdot 2^{t/3}$. 7. $\\left(\\dfrac12\\right)^{20/8} = 2^{-2.5} \\approx 0.18$. 8. $y = 25 + 75e^{kt}$, $e^{5k} = \\dfrac{50}{75} = \\dfrac23$; after $15$ min: $25 + 75\\left(\\dfrac23\\right)^3 = 25 + \\dfrac{200}{9} \\approx 47^\\circ$.`,
        hy: `## Հավասարումներ, որոնց անհայտը ֆունկցիա է

**Դիֆերենցիալ հավասարումը** կապում է անհայտ $y(x)$ ֆունկցիան իր ածանցյալների հետ։ Լուծել այն նշանակում է գտնել բոլոր $y$ ֆունկցիաները, որոնք բավարարում են նրան։ Ի տարբերություն հանրահաշվական հավասարումների՝ պատասխանը ֆունկցիաների **ընտանիք** է՝ կամայական հաստատունով, իսկ **սկզբնական պայմանը**, օրինակ՝ $y(0) = 3$, ընտրում է դրանցից մեկը։

**Օրինակ 1։** $y = x^2 + 5$-ը $y' = 2x$-ի լուծո՞ւմ է։ $y' = 2x$ ✓։ Լուծում է նաև $y = x^2 - 7$-ը․ ցանկացած $y = x^2 + C$ լուծում է։

**Օրինակ 2։** $y = e^{3x}$-ը $y' = 3y$-ի լուծո՞ւմ է։ $y' = 3e^{3x} = 3y$ ✓։ $y = \\sin x$-ը $y'' = -y$-ի լուծո՞ւմ է։ $y'' = -\\sin x = -y$ ✓։

## Տիպ 1․ $y' = f(x)$

Լուծումը նախնականն է․ $y = \\displaystyle\\int f(x)\\,dx = F(x) + C$։

**Օրինակ 3։** $y' = 6x^2 - 4x$, $y(1) = 2$։ Ընդհանուր լուծումը՝ $y = 2x^3 - 2x^2 + C$, $2 - 2 + C = 2$, $C = 2$․ $y = 2x^3 - 2x^2 + 2$։

**Օրինակ 4։** $y'' = 6x$, $y(0) = 1$, $y'(0) = -2$։ Ինտեգրենք երկու անգամ․ $y' = 3x^2 + C_1$, $C_1 = -2$, $y = x^3 - 2x + C_2$, $C_2 = 1$։ Ուստի $y = x^3 - 2x + 1$։

## Տիպ 2․ $y' = ky$

«Փոփոխման արագությունը համեմատական է հենց մեծությանը»։ Գիտենք, որ $(e^{kx})' = ke^{kx}$, ուստի $y = Ce^{kx}$-ը լուծում է ցանկացած $C$-ի դեպքում, և դրանք բոլոր լուծումներն են․

$$y' = ky \\iff y = Ce^{kx}, \\qquad C = y(0)$$

**Օրինակ 5։** $y' = -2y$, $y(0) = 5$․ $y = 5e^{-2x}$։

**Օրինակ 6։** Բնակչությունն աճում է իր մեծությանը համեմատական արագությամբ․ $P' = 0{,}03P$, $P(0) = 2000$։ Այդ դեպքում $P(t) = 2000e^{0{,}03t}$, $10$ տարի անց՝ $P \\approx 2000 \\cdot 1{,}35 = 2700$։ Կրկնապատկման ժամանակը՝ $e^{0{,}03t} = 2$, $t = \\dfrac{\\ln 2}{0{,}03} \\approx 23$ տարի։

**Օրինակ 7։** Ռադիոակտիվ տրոհում․ $m' = -\\lambda m$, ուստի $m = m_0 e^{-\\lambda t}$։ Եթե կիսատրոհման պարբերությունը $T$ է, ապա $e^{-\\lambda T} = \\dfrac12$, $\\lambda = \\dfrac{\\ln 2}{T}$։ Ածխածին-14-ի համար $T = 5730$ տարի։ Սկզբնական ածխածին-14-ի $25\\%$-ն ունեցող նմուշը $2T = 11\\,460$ տարեկան է։

## Տիպ 3․ $y' = k(y - T)$ (Նյուտոնի սառեցման օրենքը)

Տաք մարմինը սառչում է շրջապատի $T$ ջերմաստիճանի հետ տարբերությանը համեմատական արագությամբ։ $u = y - T$ տեղադրելով՝ $u' = ku$, ուստի

$$y = T + Ce^{kt}, \\qquad k < 0$$

**Օրինակ 8։** $90^\\circ$ թեյը $20^\\circ$ սենյակում $10$ րոպեում սառչում է մինչև $60^\\circ$։ $y = 20 + 70e^{kt}$, $60 = 20 + 70e^{10k}$, $e^{10k} = \\dfrac47$, $k = \\dfrac{1}{10}\\ln\\dfrac47 \\approx -0{,}056$։ Ե՞րբ կլինի $40^\\circ$։ $20 = 70e^{kt}$, $e^{kt} = \\dfrac27$, $t = \\dfrac{\\ln(2/7)}{k} \\approx 22$ րոպե։

### Վարժություններ

1. Ստուգեք՝ $y = \\cos 2x$-ը լուծո՞ւմ է $y'' + 4y = 0$-ը, իսկ $y = x^3$-ը՝ $xy' = 3y$-ը։
2. Լուծեք $y' = 4x^3 - 1$, $y(1) = 3$։
3. Լուծեք $y' = \\cos x$, $y(0) = 2$։
4. Լուծեք $y'' = 2$, $y(0) = 1$, $y'(0) = 0$։
5. Լուծեք $y' = 5y$, $y(0) = 2$ և $y' = -y$, $y(0) = -3$։
6. Բակտերիաները կրկնապատկվում են ամեն $3$ ժամը մեկ․ գտեք $k$-ն $N' = kN$-ում և $N(t)$-ն, եթե $N(0) = 500$։
7. Նյութի կիսատրոհման պարբերությունը $8$ օր է։ Ի՞նչ մաս կմնա $20$ օր անց։
8. $100^\\circ$ մարմինը $25^\\circ$ սենյակում $5$ րոպեում սառչում է մինչև $75^\\circ$։ Գտեք նրա ջերմաստիճանը $15$ րոպե անց։

### Պատասխաններ

1. $y'' = -4\\cos 2x = -4y$ ✓, $xy' = 3x^3 = 3y$ ✓։ 2. $y = x^4 - x + 3$։ 3. $y = \\sin x + 2$։ 4. $y = x^2 + 1$։ 5. $y = 2e^{5x}$, $y = -3e^{-x}$։ 6. $e^{3k} = 2$, $k = \\dfrac{\\ln 2}{3} \\approx 0{,}231$, $N = 500 \\cdot 2^{t/3}$։ 7. $\\left(\\dfrac12\\right)^{20/8} = 2^{-2{,}5} \\approx 0{,}18$։ 8. $y = 25 + 75e^{kt}$, $e^{5k} = \\dfrac{50}{75} = \\dfrac23$, $15$ րոպե անց՝ $25 + 75\\left(\\dfrac23\\right)^3 = 25 + \\dfrac{200}{9} \\approx 47^\\circ$։`,
        ru: `## Уравнения, в которых неизвестное — функция

**Дифференциальное уравнение** связывает неизвестную функцию $y(x)$ с её производными. Решить его — значит найти все функции $y$, которые ему удовлетворяют. В отличие от алгебраических уравнений, ответ — **семейство** функций с произвольной постоянной; **начальное условие**, например $y(0) = 3$, выбирает одну из них.

**Пример 1.** Является ли $y = x^2 + 5$ решением $y' = 2x$? $y' = 2x$ ✓. Решение и $y = x^2 - 7$: любая $y = x^2 + C$.

**Пример 2.** Является ли $y = e^{3x}$ решением $y' = 3y$? $y' = 3e^{3x} = 3y$ ✓. Является ли $y = \\sin x$ решением $y'' = -y$? $y'' = -\\sin x = -y$ ✓.

## Тип 1: $y' = f(x)$

Решение — первообразная: $y = \\displaystyle\\int f(x)\\,dx = F(x) + C$.

**Пример 3.** $y' = 6x^2 - 4x$, $y(1) = 2$. Общее решение $y = 2x^3 - 2x^2 + C$; $2 - 2 + C = 2$, $C = 2$: $y = 2x^3 - 2x^2 + 2$.

**Пример 4.** $y'' = 6x$, $y(0) = 1$, $y'(0) = -2$. Интегрируем дважды: $y' = 3x^2 + C_1$, $C_1 = -2$; $y = x^3 - 2x + C_2$, $C_2 = 1$. Итак, $y = x^3 - 2x + 1$.

## Тип 2: $y' = ky$

«Скорость изменения пропорциональна самой величине». Мы знаем, что $(e^{kx})' = ke^{kx}$, поэтому $y = Ce^{kx}$ — решение при любом $C$, и это все решения:

$$y' = ky \\iff y = Ce^{kx}, \\qquad C = y(0).$$

**Пример 5.** $y' = -2y$, $y(0) = 5$: $y = 5e^{-2x}$.

**Пример 6.** Население растёт со скоростью, пропорциональной его численности: $P' = 0{,}03P$, $P(0) = 2000$. Тогда $P(t) = 2000e^{0{,}03t}$; через $10$ лет $P \\approx 2000 \\cdot 1{,}35 = 2700$. Время удвоения: $e^{0{,}03t} = 2$, $t = \\dfrac{\\ln 2}{0{,}03} \\approx 23$ года.

**Пример 7.** Радиоактивный распад: $m' = -\\lambda m$, значит $m = m_0 e^{-\\lambda t}$. Если период полураспада $T$, то $e^{-\\lambda T} = \\dfrac12$, $\\lambda = \\dfrac{\\ln 2}{T}$. Для углерода-14 $T = 5730$ лет. Образец с $25\\%$ исходного углерода-14 имеет возраст $2T = 11\\,460$ лет.

## Тип 3: $y' = k(y - T)$ (закон охлаждения Ньютона)

Горячее тело остывает со скоростью, пропорциональной разности температур с окружающей средой $T$. Подстановка $u = y - T$ даёт $u' = ku$, поэтому

$$y = T + Ce^{kt}, \\qquad k < 0.$$

**Пример 8.** Чай при $90^\\circ$ в комнате при $20^\\circ$ остывает до $60^\\circ$ за $10$ минут. $y = 20 + 70e^{kt}$; $60 = 20 + 70e^{10k}$, $e^{10k} = \\dfrac47$, $k = \\dfrac{1}{10}\\ln\\dfrac47 \\approx -0{,}056$. Когда будет $40^\\circ$? $20 = 70e^{kt}$, $e^{kt} = \\dfrac27$, $t = \\dfrac{\\ln(2/7)}{k} \\approx 22$ минуты.

### Упражнения

1. Проверьте, является ли $y = \\cos 2x$ решением $y'' + 4y = 0$ и является ли $y = x^3$ решением $xy' = 3y$.
2. Решите $y' = 4x^3 - 1$ при $y(1) = 3$.
3. Решите $y' = \\cos x$ при $y(0) = 2$.
4. Решите $y'' = 2$ при $y(0) = 1$, $y'(0) = 0$.
5. Решите $y' = 5y$, $y(0) = 2$ и $y' = -y$, $y(0) = -3$.
6. Бактерии удваиваются каждые $3$ часа: найдите $k$ в $N' = kN$ и $N(t)$, если $N(0) = 500$.
7. Период полураспада вещества $8$ дней. Какая доля останется через $20$ дней?
8. Тело при $100^\\circ$ в комнате при $25^\\circ$ остывает до $75^\\circ$ за $5$ минут. Найдите его температуру через $15$ минут.

### Ответы

1. $y'' = -4\\cos 2x = -4y$ ✓; $xy' = 3x^3 = 3y$ ✓. 2. $y = x^4 - x + 3$. 3. $y = \\sin x + 2$. 4. $y = x^2 + 1$. 5. $y = 2e^{5x}$; $y = -3e^{-x}$. 6. $e^{3k} = 2$, $k = \\dfrac{\\ln 2}{3} \\approx 0{,}231$; $N = 500 \\cdot 2^{t/3}$. 7. $\\left(\\dfrac12\\right)^{20/8} = 2^{-2{,}5} \\approx 0{,}18$. 8. $y = 25 + 75e^{kt}$, $e^{5k} = \\dfrac{50}{75} = \\dfrac23$; через $15$ мин: $25 + 75\\left(\\dfrac23\\right)^3 = 25 + \\dfrac{200}{9} \\approx 47^\\circ$.`,
      },
      [
        q(t("The general solution of y′ = f(x) is…", "y′ = f(x)-ի ընդհանուր լուծումը…", "Общее решение y′ = f(x) —"), [t("y = f′(x)", "y = f′(x)", "y = f′(x)"), t("y = F(x) + C, where F′ = f", "y = F(x) + C, որտեղ F′ = f", "y = F(x) + C, где F′ = f"), t("y = f(x) + C", "y = f(x) + C", "y = f(x) + C")], 1),
        q(t("The solutions of y′ = ky are…", "y′ = ky-ի լուծումները…", "Решения y′ = ky —"), [t("y = kx + C", "y = kx + C", "y = kx + C"), t("y = Ce^(kx)", "y = Ce^(kx)", "y = Ce^(kx)"), t("y = Cx^k", "y = Cx^k", "y = Cx^k")], 1),
        q(t("y′ = −2y with y(0) = 5 gives…", "y′ = −2y, y(0) = 5-ից ստացվում է…", "y′ = −2y при y(0) = 5 даёт…"), [t("y = 5e^(−2x)", "y = 5e^(−2x)", "y = 5e^(−2x)"), t("y = −2e^(5x)", "y = −2e^(5x)", "y = −2e^(5x)"), t("y = 5 − 2x", "y = 5 − 2x", "y = 5 − 2x")], 0),
        q(t("An initial condition is used to…", "Սկզբնական պայմանն օգտագործվում է…", "Начальное условие нужно, чтобы…"), [t("find the constant C", "C հաստատունը գտնելու համար", "найти постоянную C"), t("find k", "k-ն գտնելու համար", "найти k"), t("check the derivative", "ածանցյալը ստուգելու համար", "проверить производную")], 0),
        q(t("With half-life T, the decay constant is λ = …", "T կիսատրոհման պարբերության դեպքում λ = …", "При периоде полураспада T постоянная распада λ = …"), [t("T/ln 2", "T/ln 2", "T/ln 2"), t("ln 2 / T", "ln 2 / T", "ln 2 / T"), t("2/T", "2/T", "2/T")], 1),
        q(t("Newton's cooling law y′ = k(y − T) has solutions…", "Նյուտոնի սառեցման օրենքի y′ = k(y − T) լուծումները…", "Решения закона охлаждения y′ = k(y − T) —"), [t("y = T + Ce^(kt)", "y = T + Ce^(kt)", "y = T + Ce^(kt)"), t("y = Ce^(kt) − T", "y = Ce^(kt) − T", "y = Ce^(kt) − T"), t("y = T·e^(kt)", "y = T·e^(kt)", "y = T·e^(kt)")], 0),
      ],
    ),
  ],
};
