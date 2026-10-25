import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Graphs of trigonometric functions", "Եռանկյունաչափական ֆունկցիաների գրաֆիկները", "Графики тригонометрических функций"),
  summary: t(
    "Periodic functions, the graphs of y = sin x, y = cos x and y = tan x, their properties, and stretching and shifting these graphs.",
    "Պարբերական ֆունկցիաներ, y = sin x, y = cos x և y = tg x ֆունկցիաների գրաֆիկները, նրանց հատկությունները և այդ գրաֆիկների ձգումն ու տեղաշարժը։",
    "Периодические функции, графики y = sin x, y = cos x и y = tg x, их свойства, растяжение и сдвиг этих графиков.",
  ),
  lessons: [
    lesson(
      "periodicity",
      ["Periodic functions", "Պարբերական ֆունկցիաներ", "Периодические функции"],
      {
        en: ["Define a periodic function and its smallest positive period", "State the periods of sin x, cos x, tan x and cot x", "Find the period of y = sin(kx + b) and similar functions"],
        hy: ["Սահմանել պարբերական ֆունկցիան և նրա փոքրագույն դրական պարբերությունը", "Նշել sin x-ի, cos x-ի, tg x-ի և ctg x-ի պարբերությունները", "Գտնել y = sin(kx + b) և նման ֆունկցիաների պարբերությունը"],
        ru: ["Определять периодическую функцию и её наименьший положительный период", "Называть периоды sin x, cos x, tg x и ctg x", "Находить период функций вида y = sin(kx + b)"],
      },
      {
        en: `## Definition

> A function $f$ is **periodic** with period $T \\ne 0$ if for every $x$ in its domain, $x + T$ and $x - T$ are also in the domain and $f(x + T) = f(x)$.

If $T$ is a period, so are $2T$, $3T$, $-T$ and so on. Usually we name the **smallest positive** period.

Everyday examples: the hour hand repeats every $12$ hours, the seasons every year, the phases of the Moon about every $29.5$ days.

## Periods of the basic functions

Turning through $2\\pi$ brings the point $P_\\alpha$ back, so $\\sin$ and $\\cos$ have period $2\\pi$.

For tangent: $P_{\\alpha + \\pi}$ is symmetric to $P_\\alpha$ about the origin, so both coordinates change sign and their ratio does not. Therefore $\\tan$ and $\\cot$ have period $\\pi$.

| Function | $\\sin x$ | $\\cos x$ | $\\tan x$ | $\\cot x$ |
|---|---|---|---|---|
| Smallest period | $2\\pi$ | $2\\pi$ | $\\pi$ | $\\pi$ |

## Period of f(kx + b)

If $f$ has period $T$, then $y = f(kx + b)$ has period $\\dfrac{T}{\\lvert k\\rvert}$. The shift $b$ does not change the period.

**Example 1.** $y = \\sin 3x$: $T = \\dfrac{2\\pi}{3}$.

**Example 2.** $y = \\cos \\dfrac{x}{2}$: $T = \\dfrac{2\\pi}{1/2} = 4\\pi$.

**Example 3.** $y = \\tan\\left(2x - \\dfrac{\\pi}{4}\\right)$: $T = \\dfrac{\\pi}{2}$.

**Example 4.** $y = 5\\sin x + 1$: the factor $5$ and the $+1$ do not change the period, $T = 2\\pi$.

## Using periodicity

**Example 5.** $f$ has period $4$ and $f(1) = 7$. Then $f(9) = f(1 + 2 \\cdot 4) = 7$ and $f(-3) = f(1 - 4) = 7$.

**Example 6.** $\\sin 750^\\circ = \\sin(720^\\circ + 30^\\circ) = \\sin 30^\\circ = \\dfrac12$.

### Exercises

1. Find the period of $y = \\cos 4x$.
2. Find the period of $y = \\sin \\dfrac{x}{3}$.
3. Find the period of $y = \\cot 5x$.
4. Find the period of $y = 2\\cos\\left(\\pi x + 1\\right)$.
5. $f$ has period $3$, $f(2) = -1$. Find $f(11)$ and $f(-4)$.
6. Compute $\\cos 405^\\circ$ and $\\tan 600^\\circ$.
7. Is $y = x^2$ periodic? Explain.

### Answers

1. $\\dfrac{\\pi}{2}$. 2. $6\\pi$. 3. $\\dfrac{\\pi}{5}$. 4. $\\dfrac{2\\pi}{\\pi} = 2$. 5. $f(11) = f(2 + 9) = -1$; $f(-4) = f(2 - 6) = -1$. 6. $\\cos 45^\\circ = \\dfrac{\\sqrt2}{2}$; $\\tan 600^\\circ = \\tan 60^\\circ = \\sqrt3$. 7. No: it grows without limit for large $x$, so values cannot repeat after a fixed step.`,
        hy: `## Սահմանում

> $f$ ֆունկցիան կոչվում է **պարբերական** $T \\ne 0$ պարբերությամբ, եթե նրա որոշման տիրույթի ցանկացած $x$-ի համար $x + T$-ն և $x - T$-ն նույնպես պատկանում են որոշման տիրույթին և $f(x + T) = f(x)$։

Եթե $T$-ն պարբերություն է, ապա պարբերություն են նաև $2T$-ն, $3T$-ն, $-T$-ն և այլն։ Սովորաբար նշում ենք **փոքրագույն դրական** պարբերությունը։

Կյանքից օրինակներ՝ ժամային սլաքը կրկնվում է $12$ ժամը մեկ, եղանակները՝ տարին մեկ, Լուսնի փուլերը՝ մոտ $29{,}5$ օրը մեկ։

## Հիմնական ֆունկցիաների պարբերությունները

$2\\pi$-ով պտույտը $P_\\alpha$ կետը վերադարձնում է տեղը, ուստի $\\sin$-ի և $\\cos$-ի պարբերությունը $2\\pi$ է։

Տանգենսի դեպքում՝ $P_{\\alpha + \\pi}$-ն համաչափ է $P_\\alpha$-ին սկզբնակետի նկատմամբ, ուստի երկու կոորդինատներն էլ փոխում են նշանը, իսկ նրանց հարաբերությունը՝ ոչ։ Հետևաբար $\\operatorname{tg}$-ի և $\\operatorname{ctg}$-ի պարբերությունը $\\pi$ է։

| Ֆունկցիա | $\\sin x$ | $\\cos x$ | $\\operatorname{tg} x$ | $\\operatorname{ctg} x$ |
|---|---|---|---|---|
| Փոքրագույն պարբերություն | $2\\pi$ | $2\\pi$ | $\\pi$ | $\\pi$ |

## f(kx + b)-ի պարբերությունը

Եթե $f$-ի պարբերությունը $T$ է, ապա $y = f(kx + b)$-ի պարբերությունը $\\dfrac{T}{\\lvert k\\rvert}$ է։ $b$ տեղաշարժը պարբերությունը չի փոխում։

**Օրինակ 1։** $y = \\sin 3x$՝ $T = \\dfrac{2\\pi}{3}$։

**Օրինակ 2։** $y = \\cos \\dfrac{x}{2}$՝ $T = \\dfrac{2\\pi}{1/2} = 4\\pi$։

**Օրինակ 3։** $y = \\operatorname{tg}\\left(2x - \\dfrac{\\pi}{4}\\right)$՝ $T = \\dfrac{\\pi}{2}$։

**Օրինակ 4։** $y = 5\\sin x + 1$՝ $5$ գործակիցը և $+1$-ը պարբերությունը չեն փոխում, $T = 2\\pi$։

## Պարբերականության կիրառում

**Օրինակ 5։** $f$-ի պարբերությունը $4$ է, և $f(1) = 7$։ Այդ դեպքում $f(9) = f(1 + 2 \\cdot 4) = 7$ և $f(-3) = f(1 - 4) = 7$։

**Օրինակ 6։** $\\sin 750^\\circ = \\sin(720^\\circ + 30^\\circ) = \\sin 30^\\circ = \\dfrac12$։

### Վարժություններ

1. Գտեք $y = \\cos 4x$-ի պարբերությունը։
2. Գտեք $y = \\sin \\dfrac{x}{3}$-ի պարբերությունը։
3. Գտեք $y = \\operatorname{ctg} 5x$-ի պարբերությունը։
4. Գտեք $y = 2\\cos\\left(\\pi x + 1\\right)$-ի պարբերությունը։
5. $f$-ի պարբերությունը $3$ է, $f(2) = -1$։ Գտեք $f(11)$-ը և $f(-4)$-ը։
6. Հաշվեք $\\cos 405^\\circ$-ը և $\\operatorname{tg} 600^\\circ$-ը։
7. Պարբերակա՞ն է արդյոք $y = x^2$-ը։ Բացատրեք։

### Պատասխաններ

1. $\\dfrac{\\pi}{2}$։ 2. $6\\pi$։ 3. $\\dfrac{\\pi}{5}$։ 4. $\\dfrac{2\\pi}{\\pi} = 2$։ 5. $f(11) = f(2 + 9) = -1$, $f(-4) = f(2 - 6) = -1$։ 6. $\\cos 45^\\circ = \\dfrac{\\sqrt2}{2}$, $\\operatorname{tg} 600^\\circ = \\operatorname{tg} 60^\\circ = \\sqrt3$։ 7. Ոչ՝ մեծ $x$-երի դեպքում այն անսահմանափակ աճում է, ուստի արժեքները չեն կարող կրկնվել հաստատուն քայլից հետո։`,
        ru: `## Определение

> Функция $f$ называется **периодической** с периодом $T \\ne 0$, если для любого $x$ из области определения числа $x + T$ и $x - T$ тоже принадлежат области определения и $f(x + T) = f(x)$.

Если $T$ — период, то $2T$, $3T$, $-T$ и т. д. тоже периоды. Обычно называют **наименьший положительный** период.

Примеры из жизни: часовая стрелка повторяет положение каждые $12$ часов, времена года — каждый год, фазы Луны — примерно каждые $29{,}5$ суток.

## Периоды основных функций

Поворот на $2\\pi$ возвращает точку $P_\\alpha$ на место, поэтому у $\\sin$ и $\\cos$ период $2\\pi$.

Для тангенса: точка $P_{\\alpha + \\pi}$ симметрична $P_\\alpha$ относительно начала координат, обе координаты меняют знак, а их отношение — нет. Поэтому у $\\operatorname{tg}$ и $\\operatorname{ctg}$ период $\\pi$.

| Функция | $\\sin x$ | $\\cos x$ | $\\operatorname{tg} x$ | $\\operatorname{ctg} x$ |
|---|---|---|---|---|
| Наименьший период | $2\\pi$ | $2\\pi$ | $\\pi$ | $\\pi$ |

## Период f(kx + b)

Если $f$ имеет период $T$, то $y = f(kx + b)$ имеет период $\\dfrac{T}{\\lvert k\\rvert}$. Сдвиг $b$ период не меняет.

**Пример 1.** $y = \\sin 3x$: $T = \\dfrac{2\\pi}{3}$.

**Пример 2.** $y = \\cos \\dfrac{x}{2}$: $T = \\dfrac{2\\pi}{1/2} = 4\\pi$.

**Пример 3.** $y = \\operatorname{tg}\\left(2x - \\dfrac{\\pi}{4}\\right)$: $T = \\dfrac{\\pi}{2}$.

**Пример 4.** $y = 5\\sin x + 1$: множитель $5$ и $+1$ период не меняют, $T = 2\\pi$.

## Применение периодичности

**Пример 5.** Период $f$ равен $4$, $f(1) = 7$. Тогда $f(9) = f(1 + 2 \\cdot 4) = 7$ и $f(-3) = f(1 - 4) = 7$.

**Пример 6.** $\\sin 750^\\circ = \\sin(720^\\circ + 30^\\circ) = \\sin 30^\\circ = \\dfrac12$.

### Упражнения

1. Найдите период $y = \\cos 4x$.
2. Найдите период $y = \\sin \\dfrac{x}{3}$.
3. Найдите период $y = \\operatorname{ctg} 5x$.
4. Найдите период $y = 2\\cos\\left(\\pi x + 1\\right)$.
5. Период $f$ равен $3$, $f(2) = -1$. Найдите $f(11)$ и $f(-4)$.
6. Вычислите $\\cos 405^\\circ$ и $\\operatorname{tg} 600^\\circ$.
7. Является ли $y = x^2$ периодической? Объясните.

### Ответы

1. $\\dfrac{\\pi}{2}$. 2. $6\\pi$. 3. $\\dfrac{\\pi}{5}$. 4. $\\dfrac{2\\pi}{\\pi} = 2$. 5. $f(11) = f(2 + 9) = -1$; $f(-4) = f(2 - 6) = -1$. 6. $\\cos 45^\\circ = \\dfrac{\\sqrt2}{2}$; $\\operatorname{tg} 600^\\circ = \\operatorname{tg} 60^\\circ = \\sqrt3$. 7. Нет: при больших $x$ она неограниченно растёт, поэтому значения не могут повторяться через постоянный шаг.`,
      },
      [
        q(
          t("The smallest positive period of sin x is…", "sin x-ի փոքրագույն դրական պարբերությունը…", "Наименьший положительный период sin x —"),
          [t("π", "π", "π"), t("2π", "2π", "2π"), t("π/2", "π/2", "π/2")],
          1,
        ),
        q(
          t("The smallest positive period of tan x is…", "tg x-ի փոքրագույն դրական պարբերությունը…", "Наименьший положительный период tg x —"),
          [t("π", "π", "π"), t("2π", "2π", "2π"), t("π/2", "π/2", "π/2")],
          0,
        ),
        q(
          t("The period of y = sin 3x is…", "y = sin 3x-ի պարբերությունը…", "Период y = sin 3x —"),
          [t("6π", "6π", "6π"), t("3π", "3π", "3π"), t("2π/3", "2π/3", "2π/3")],
          2,
        ),
        q(
          t("The period of y = cos(x/2) is…", "y = cos(x/2)-ի պարբերությունը…", "Период y = cos(x/2) —"),
          [t("π", "π", "π"), t("4π", "4π", "4π"), t("2π", "2π", "2π")],
          1,
        ),
        q(
          t("Which change does NOT affect the period of sin x?", "Ո՞ր փոփոխությունը չի ազդում sin x-ի պարբերության վրա", "Какое изменение НЕ влияет на период sin x?"),
          [t("replacing x by 2x", "x-ը 2x-ով փոխարինելը", "замена x на 2x"), t("multiplying the function by 5", "ֆունկցիան 5-ով բազմապատկելը", "умножение функции на 5"), t("replacing x by x/3", "x-ը x/3-ով փոխարինելը", "замена x на x/3")],
          1,
        ),
        q(
          t("f has period 4 and f(1) = 7. Then f(9) equals…", "f-ի պարբերությունը 4 է, f(1) = 7։ Այդ դեպքում f(9)-ը…", "Период f равен 4, f(1) = 7. Тогда f(9) равно…"),
          [t("7", "7", "7"), t("9", "9", "9"), t("63", "63", "63")],
          0,
        ),
      ],
    ),
    lesson(
      "graph-sin-cos",
      ["Graphs of y = sin x and y = cos x", "y = sin x և y = cos x ֆունկցիաների գրաֆիկները", "Графики y = sin x и y = cos x"],
      {
        en: ["Plot the sine wave from a table of values on one period", "Read the domain, range, zeros, maxima and minima from the graph", "Get the cosine graph by shifting the sine graph by π/2 to the left"],
        hy: ["Կառուցել սինուսոիդը մեկ պարբերության արժեքների աղյուսակով", "Գրաֆիկից կարդալ որոշման տիրույթը, արժեքների տիրույթը, զրոները, մաքսիմումներն ու մինիմումները", "Կոսինուսի գրաֆիկը ստանալ սինուսի գրաֆիկը π/2-ով ձախ տեղաշարժելով"],
        ru: ["Строить синусоиду по таблице значений на одном периоде", "Читать по графику область определения, множество значений, нули, максимумы и минимумы", "Получать график косинуса сдвигом графика синуса на π/2 влево"],
      },
      {
        en: `## Building the sine wave

Take one period $[0; 2\\pi]$ and the key points:

| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

Join them with a smooth wave: up from $0$ to $1$, down through $0$ to $-1$, and back up to $0$. Then repeat the piece every $2\\pi$ to the left and right. The curve is called a **sinusoid**.

## Properties of y = sin x

- Domain: all real numbers. Range: $[-1; 1]$.
- Period $2\\pi$. The function is odd: the graph is symmetric about the origin.
- Zeros: $x = \\pi k$.
- Maximum $1$ at $x = \\dfrac{\\pi}{2} + 2\\pi k$; minimum $-1$ at $x = -\\dfrac{\\pi}{2} + 2\\pi k$.
- Increases on $\\left[-\\dfrac{\\pi}{2} + 2\\pi k; \\dfrac{\\pi}{2} + 2\\pi k\\right]$, decreases on $\\left[\\dfrac{\\pi}{2} + 2\\pi k; \\dfrac{3\\pi}{2} + 2\\pi k\\right]$.

## The cosine graph

| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |

Since $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$, the cosine graph is the sine wave **shifted $\\dfrac{\\pi}{2}$ to the left**. It has the same shape.

## Properties of y = cos x

- Domain: all real numbers. Range: $[-1; 1]$. Period $2\\pi$.
- Even: the graph is symmetric about the $y$-axis.
- Zeros: $x = \\dfrac{\\pi}{2} + \\pi k$.
- Maximum $1$ at $x = 2\\pi k$; minimum $-1$ at $x = \\pi + 2\\pi k$.
- Decreases on $[2\\pi k; \\pi + 2\\pi k]$, increases on $[\\pi + 2\\pi k; 2\\pi + 2\\pi k]$.

**Example 1.** How many solutions does $\\sin x = 0.3$ have on $[0; 2\\pi]$? The line $y = 0.3$ cuts the wave twice on one period: two solutions.

**Example 2.** Compare $\\sin 1$ and $\\sin 1.5$. Both are in $\\left[0; \\dfrac{\\pi}{2}\\right]$, where sine increases, so $\\sin 1 < \\sin 1.5$.

### Exercises

1. Find the zeros of $y = \\sin x$ on $[-2\\pi; 2\\pi]$.
2. At which points of $[0; 4\\pi]$ does $y = \\cos x$ reach its maximum?
3. On which interval of $[0; 2\\pi]$ does $\\cos x$ decrease?
4. How many solutions does $\\cos x = -0.5$ have on $[0; 2\\pi]$?
5. Compare $\\cos 0.5$ and $\\cos 1$.
6. Compare $\\sin 2$ and $\\sin 3$.
7. Find the range of $y = 3\\cos x - 1$.

### Answers

1. $-2\\pi, -\\pi, 0, \\pi, 2\\pi$. 2. $x = 0, 2\\pi, 4\\pi$. 3. $[0; \\pi]$. 4. Two. 5. Cosine decreases on $[0; \\pi]$, so $\\cos 0.5 > \\cos 1$. 6. Sine decreases on $\\left[\\dfrac{\\pi}{2}; \\pi\\right]$, so $\\sin 2 > \\sin 3$. 7. $[-4; 2]$.`,
        hy: `## Սինուսոիդի կառուցումը

Վերցնենք մեկ պարբերություն՝ $[0; 2\\pi]$, և հիմնական կետերը․

| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

Միացնենք դրանք սահուն ալիքով՝ $0$-ից բարձրանում է մինչև $1$, իջնում $0$-ով մինչև $-1$ և վերադառնում $0$։ Այնուհետև այս կտորը կրկնում ենք $2\\pi$-ն մեկ ձախ և աջ։ Կորը կոչվում է **սինուսոիդ**։

## y = sin x-ի հատկությունները

- Որոշման տիրույթը՝ բոլոր իրական թվերը։ Արժեքների տիրույթը՝ $[-1; 1]$։
- Պարբերությունը՝ $2\\pi$։ Ֆունկցիան կենտ է՝ գրաֆիկը համաչափ է սկզբնակետի նկատմամբ։
- Զրոները՝ $x = \\pi k$։
- Մաքսիմումը՝ $1$, երբ $x = \\dfrac{\\pi}{2} + 2\\pi k$, մինիմումը՝ $-1$, երբ $x = -\\dfrac{\\pi}{2} + 2\\pi k$։
- Աճում է $\\left[-\\dfrac{\\pi}{2} + 2\\pi k; \\dfrac{\\pi}{2} + 2\\pi k\\right]$-ում, նվազում է $\\left[\\dfrac{\\pi}{2} + 2\\pi k; \\dfrac{3\\pi}{2} + 2\\pi k\\right]$-ում։

## Կոսինուսի գրաֆիկը

| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |

Քանի որ $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$, կոսինուսի գրաֆիկը սինուսոիդն է՝ **$\\dfrac{\\pi}{2}$-ով ձախ տեղաշարժված**։ Այն ունի նույն ձևը։

## y = cos x-ի հատկությունները

- Որոշման տիրույթը՝ բոլոր իրական թվերը։ Արժեքների տիրույթը՝ $[-1; 1]$։ Պարբերությունը՝ $2\\pi$։
- Զույգ է՝ գրաֆիկը համաչափ է $y$ առանցքի նկատմամբ։
- Զրոները՝ $x = \\dfrac{\\pi}{2} + \\pi k$։
- Մաքսիմումը՝ $1$, երբ $x = 2\\pi k$, մինիմումը՝ $-1$, երբ $x = \\pi + 2\\pi k$։
- Նվազում է $[2\\pi k; \\pi + 2\\pi k]$-ում, աճում է $[\\pi + 2\\pi k; 2\\pi + 2\\pi k]$-ում։

**Օրինակ 1։** Քանի՞ լուծում ունի $\\sin x = 0{,}3$ հավասարումը $[0; 2\\pi]$-ում։ $y = 0{,}3$ ուղիղը մեկ պարբերության վրա ալիքը հատում է երկու անգամ՝ երկու լուծում։

**Օրինակ 2։** Համեմատեք $\\sin 1$-ը և $\\sin 1{,}5$-ը։ Երկուսն էլ $\\left[0; \\dfrac{\\pi}{2}\\right]$-ում են, որտեղ սինուսն աճում է, ուստի $\\sin 1 < \\sin 1{,}5$։

### Վարժություններ

1. Գտեք $y = \\sin x$-ի զրոները $[-2\\pi; 2\\pi]$-ում։
2. $[0; 4\\pi]$-ի ո՞ր կետերում է $y = \\cos x$-ը հասնում մաքսիմումի։
3. $[0; 2\\pi]$-ի ո՞ր միջակայքում է $\\cos x$-ը նվազում։
4. Քանի՞ լուծում ունի $\\cos x = -0{,}5$ հավասարումը $[0; 2\\pi]$-ում։
5. Համեմատեք $\\cos 0{,}5$-ը և $\\cos 1$-ը։
6. Համեմատեք $\\sin 2$-ը և $\\sin 3$-ը։
7. Գտեք $y = 3\\cos x - 1$-ի արժեքների տիրույթը։

### Պատասխաններ

1. $-2\\pi, -\\pi, 0, \\pi, 2\\pi$։ 2. $x = 0, 2\\pi, 4\\pi$։ 3. $[0; \\pi]$։ 4. Երկու։ 5. Կոսինուսը նվազում է $[0; \\pi]$-ում, ուստի $\\cos 0{,}5 > \\cos 1$։ 6. Սինուսը նվազում է $\\left[\\dfrac{\\pi}{2}; \\pi\\right]$-ում, ուստի $\\sin 2 > \\sin 3$։ 7. $[-4; 2]$։`,
        ru: `## Построение синусоиды

Возьмём один период $[0; 2\\pi]$ и ключевые точки:

| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |

Соединим их плавной волной: вверх от $0$ до $1$, вниз через $0$ до $-1$ и обратно к $0$. Затем повторим этот кусок через каждые $2\\pi$ влево и вправо. Кривая называется **синусоидой**.

## Свойства y = sin x

- Область определения — все действительные числа. Множество значений — $[-1; 1]$.
- Период $2\\pi$. Функция нечётная: график симметричен относительно начала координат.
- Нули: $x = \\pi k$.
- Максимум $1$ при $x = \\dfrac{\\pi}{2} + 2\\pi k$; минимум $-1$ при $x = -\\dfrac{\\pi}{2} + 2\\pi k$.
- Возрастает на $\\left[-\\dfrac{\\pi}{2} + 2\\pi k; \\dfrac{\\pi}{2} + 2\\pi k\\right]$, убывает на $\\left[\\dfrac{\\pi}{2} + 2\\pi k; \\dfrac{3\\pi}{2} + 2\\pi k\\right]$.

## График косинуса

| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $\\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |

Так как $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$, график косинуса — это синусоида, **сдвинутая на $\\dfrac{\\pi}{2}$ влево**. Форма та же.

## Свойства y = cos x

- Область определения — все действительные числа. Множество значений — $[-1; 1]$. Период $2\\pi$.
- Чётная: график симметричен относительно оси $y$.
- Нули: $x = \\dfrac{\\pi}{2} + \\pi k$.
- Максимум $1$ при $x = 2\\pi k$; минимум $-1$ при $x = \\pi + 2\\pi k$.
- Убывает на $[2\\pi k; \\pi + 2\\pi k]$, возрастает на $[\\pi + 2\\pi k; 2\\pi + 2\\pi k]$.

**Пример 1.** Сколько решений имеет $\\sin x = 0{,}3$ на $[0; 2\\pi]$? Прямая $y = 0{,}3$ пересекает волну на одном периоде дважды: два решения.

**Пример 2.** Сравните $\\sin 1$ и $\\sin 1{,}5$. Оба числа в $\\left[0; \\dfrac{\\pi}{2}\\right]$, где синус возрастает, значит, $\\sin 1 < \\sin 1{,}5$.

### Упражнения

1. Найдите нули $y = \\sin x$ на $[-2\\pi; 2\\pi]$.
2. В каких точках $[0; 4\\pi]$ функция $y = \\cos x$ достигает максимума?
3. На каком промежутке из $[0; 2\\pi]$ убывает $\\cos x$?
4. Сколько решений имеет $\\cos x = -0{,}5$ на $[0; 2\\pi]$?
5. Сравните $\\cos 0{,}5$ и $\\cos 1$.
6. Сравните $\\sin 2$ и $\\sin 3$.
7. Найдите множество значений $y = 3\\cos x - 1$.

### Ответы

1. $-2\\pi, -\\pi, 0, \\pi, 2\\pi$. 2. $x = 0, 2\\pi, 4\\pi$. 3. $[0; \\pi]$. 4. Два. 5. Косинус убывает на $[0; \\pi]$, значит, $\\cos 0{,}5 > \\cos 1$. 6. Синус убывает на $\\left[\\dfrac{\\pi}{2}; \\pi\\right]$, значит, $\\sin 2 > \\sin 3$. 7. $[-4; 2]$.`,
      },
      [
        q(
          t("The range of y = sin x is…", "y = sin x-ի արժեքների տիրույթը…", "Множество значений y = sin x —"),
          [t("all real numbers", "բոլոր իրական թվերն են", "все действительные числа"), t("[−1; 1]", "[−1; 1]", "[−1; 1]"), t("[0; 1]", "[0; 1]", "[0; 1]")],
          1,
        ),
        q(
          t("The zeros of y = sin x are…", "y = sin x-ի զրոներն են…", "Нули y = sin x —"),
          [t("x = πk", "x = πk", "x = πk"), t("x = π/2 + πk", "x = π/2 + πk", "x = π/2 + πk"), t("x = 2πk", "x = 2πk", "x = 2πk")],
          0,
        ),
        q(
          t("The cosine graph is the sine graph shifted…", "Կոսինուսի գրաֆիկը սինուսի գրաֆիկն է՝ տեղաշարժված…", "График косинуса — это график синуса, сдвинутый…"),
          [t("π/2 to the left", "π/2-ով ձախ", "на π/2 влево"), t("π/2 to the right", "π/2-ով աջ", "на π/2 вправо"), t("1 up", "1-ով վերև", "на 1 вверх")],
          0,
        ),
        q(
          t("y = cos x reaches its maximum at…", "y = cos x-ը մաքսիմումի հասնում է…", "y = cos x достигает максимума при…"),
          [t("x = π/2 + 2πk", "x = π/2 + 2πk կետերում", "x = π/2 + 2πk"), t("x = 2πk", "x = 2πk կետերում", "x = 2πk"), t("x = π + 2πk", "x = π + 2πk կետերում", "x = π + 2πk")],
          1,
        ),
        q(
          t("Which is true?", "Ո՞րն է ճիշտ", "Что верно?"),
          [t("sin 1 > sin 1.5", "sin 1 > sin 1,5", "sin 1 > sin 1,5"), t("sin 1 < sin 1.5", "sin 1 < sin 1,5", "sin 1 < sin 1,5"), t("sin 1 = sin 1.5", "sin 1 = sin 1,5", "sin 1 = sin 1,5")],
          1,
        ),
        q(
          t("The range of y = 3 cos x − 1 is…", "y = 3 cos x − 1-ի արժեքների տիրույթը…", "Множество значений y = 3 cos x − 1 —"),
          [t("[−1; 3]", "[−1; 3]", "[−1; 3]"), t("[−4; 2]", "[−4; 2]", "[−4; 2]"), t("[−3; 3]", "[−3; 3]", "[−3; 3]")],
          1,
        ),
      ],
    ),
    lesson(
      "graph-tan",
      ["Graphs of y = tan x and y = cot x", "y = tg x և y = ctg x ֆունկցիաների գրաֆիկները", "Графики y = tg x и y = ctg x"],
      {
        en: ["Plot the graph of y = tan x on (−π/2; π/2) and repeat it with period π", "Explain the vertical asymptotes x = π/2 + πk", "List the properties of tan x and cot x and use them to compare values"],
        hy: ["Կառուցել y = tg x-ի գրաֆիկը (−π/2; π/2)-ում և կրկնել այն π պարբերությամբ", "Բացատրել x = π/2 + πk ուղղաձիգ ասիմպտոտները", "Թվարկել tg x-ի և ctg x-ի հատկությունները և դրանցով համեմատել արժեքներ"],
        ru: ["Строить график y = tg x на (−π/2; π/2) и повторять его с периодом π", "Объяснять вертикальные асимптоты x = π/2 + πk", "Перечислять свойства tg x и ctg x и сравнивать с их помощью значения"],
      },
      {
        en: `## One branch

On $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ the cosine is positive and the tangent is defined.

| $x$ | $-\\dfrac{\\pi}{3}$ | $-\\dfrac{\\pi}{4}$ | $0$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |
|---|---|---|---|---|---|
| $\\tan x$ | $-\\sqrt3$ | $-1$ | $0$ | $1$ | $\\sqrt3$ |

As $x$ approaches $\\dfrac{\\pi}{2}$ from the left, $\\cos x \\to 0$ while $\\sin x \\to 1$, so $\\tan x$ grows without limit. Near $-\\dfrac{\\pi}{2}$ it falls without limit. The lines $x = \\pm\\dfrac{\\pi}{2}$ are **vertical asymptotes**: the graph comes closer and closer to them but never touches them.

The curve through these points is one **branch** of the tangent graph. Copying it every $\\pi$ gives the whole graph, the **tangentoid**.

## Properties of y = tan x

- Domain: $x \\ne \\dfrac{\\pi}{2} + \\pi k$. Range: all real numbers.
- Period $\\pi$. Odd: symmetric about the origin.
- Zeros: $x = \\pi k$.
- Increases on every interval $\\left(-\\dfrac{\\pi}{2} + \\pi k; \\dfrac{\\pi}{2} + \\pi k\\right)$.
- No maximum or minimum.

## y = cot x

$\\cot x$ is defined for $x \\ne \\pi k$. On $(0; \\pi)$ it **decreases** from very large values to very small ones, passing $0$ at $x = \\dfrac{\\pi}{2}$. The asymptotes are $x = \\pi k$, the period is $\\pi$ and the function is odd.

| $x$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{2}$ | $\\dfrac{3\\pi}{4}$ | $\\dfrac{5\\pi}{6}$ |
|---|---|---|---|---|---|
| $\\cot x$ | $\\sqrt3$ | $1$ | $0$ | $-1$ | $-\\sqrt3$ |

**Example 1.** Compare $\\tan 1$ and $\\tan 1.2$. Both are in $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ and tangent increases there, so $\\tan 1 < \\tan 1.2$.

**Example 2.** Compare $\\tan 1$ and $\\tan 2$. Here $2 > \\dfrac{\\pi}{2}$, so the numbers are on different branches. $\\tan 1 > 0$ and $\\tan 2 < 0$ (quarter II), so $\\tan 1 > \\tan 2$.

**Example 3.** The equation $\\tan x = 5$ has exactly one solution on each branch.

### Exercises

1. Write the domain of $y = \\tan 2x$.
2. Find the zeros of $y = \\tan x$ on $[-\\pi; 2\\pi]$.
3. Compare $\\tan \\dfrac{\\pi}{5}$ and $\\tan \\dfrac{\\pi}{7}$.
4. Compare $\\cot 1$ and $\\cot 2$.
5. Write the equations of the asymptotes of $y = \\cot x$ on $[0; 2\\pi]$.
6. How many solutions does $\\tan x = -3$ have on $(0; 3\\pi)$?
7. Is $\\tan x$ increasing on its whole domain? Explain with $x = 1$ and $x = 2$.

### Answers

1. $2x \\ne \\dfrac{\\pi}{2} + \\pi k$, so $x \\ne \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$. 2. $-\\pi, 0, \\pi, 2\\pi$. 3. $\\tan \\dfrac{\\pi}{5} > \\tan \\dfrac{\\pi}{7}$. 4. Cotangent decreases on $(0; \\pi)$, so $\\cot 1 > \\cot 2$. 5. $x = 0$, $x = \\pi$, $x = 2\\pi$. 6. Three: one on each branch, with the branches centred at $\\pi$, $2\\pi$ and $3\\pi$ crossing the interval. 7. No: $1 < 2$ but $\\tan 1 > \\tan 2$. It increases only on each branch separately.`,
        hy: `## Մեկ ճյուղ

$\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$-ում կոսինուսը դրական է, և տանգենսը որոշված է։

| $x$ | $-\\dfrac{\\pi}{3}$ | $-\\dfrac{\\pi}{4}$ | $0$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |
|---|---|---|---|---|---|
| $\\operatorname{tg} x$ | $-\\sqrt3$ | $-1$ | $0$ | $1$ | $\\sqrt3$ |

Երբ $x$-ը ձախից մոտենում է $\\dfrac{\\pi}{2}$-ին, $\\cos x \\to 0$, իսկ $\\sin x \\to 1$, ուստի $\\operatorname{tg} x$-ն անսահմանափակ աճում է։ $-\\dfrac{\\pi}{2}$-ի մոտ այն անսահմանափակ նվազում է։ $x = \\pm\\dfrac{\\pi}{2}$ ուղիղները **ուղղաձիգ ասիմպտոտներ** են՝ գրաֆիկը նրանց անընդհատ մոտենում է, բայց երբեք չի հատում։

Այս կետերով անցնող կորը տանգենսի գրաֆիկի մեկ **ճյուղն** է։ Այն $\\pi$-ն մեկ կրկնելով՝ ստանում ենք ամբողջ գրաֆիկը՝ **տանգենսոիդը**։

## y = tg x-ի հատկությունները

- Որոշման տիրույթը՝ $x \\ne \\dfrac{\\pi}{2} + \\pi k$։ Արժեքների տիրույթը՝ բոլոր իրական թվերը։
- Պարբերությունը՝ $\\pi$։ Կենտ է՝ համաչափ է սկզբնակետի նկատմամբ։
- Զրոները՝ $x = \\pi k$։
- Աճում է յուրաքանչյուր $\\left(-\\dfrac{\\pi}{2} + \\pi k; \\dfrac{\\pi}{2} + \\pi k\\right)$ միջակայքում։
- Չունի մաքսիմում և մինիմում։

## y = ctg x

$\\operatorname{ctg} x$-ը որոշված է $x \\ne \\pi k$ դեպքում։ $(0; \\pi)$-ում այն **նվազում է** շատ մեծ արժեքներից մինչև շատ փոքր արժեքներ՝ $x = \\dfrac{\\pi}{2}$-ում անցնելով $0$-ով։ Ասիմպտոտներն են $x = \\pi k$ ուղիղները, պարբերությունը $\\pi$ է, ֆունկցիան կենտ է։

| $x$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{2}$ | $\\dfrac{3\\pi}{4}$ | $\\dfrac{5\\pi}{6}$ |
|---|---|---|---|---|---|
| $\\operatorname{ctg} x$ | $\\sqrt3$ | $1$ | $0$ | $-1$ | $-\\sqrt3$ |

**Օրինակ 1։** Համեմատեք $\\operatorname{tg} 1$-ը և $\\operatorname{tg} 1{,}2$-ը։ Երկուսն էլ $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$-ում են, և այնտեղ տանգենսն աճում է, ուստի $\\operatorname{tg} 1 < \\operatorname{tg} 1{,}2$։

**Օրինակ 2։** Համեմատեք $\\operatorname{tg} 1$-ը և $\\operatorname{tg} 2$-ը։ Այստեղ $2 > \\dfrac{\\pi}{2}$, ուստի թվերը տարբեր ճյուղերի վրա են։ $\\operatorname{tg} 1 > 0$, իսկ $\\operatorname{tg} 2 < 0$ (II քառորդ), ուստի $\\operatorname{tg} 1 > \\operatorname{tg} 2$։

**Օրինակ 3։** $\\operatorname{tg} x = 5$ հավասարումը յուրաքանչյուր ճյուղի վրա ունի ճիշտ մեկ լուծում։

### Վարժություններ

1. Գրեք $y = \\operatorname{tg} 2x$-ի որոշման տիրույթը։
2. Գտեք $y = \\operatorname{tg} x$-ի զրոները $[-\\pi; 2\\pi]$-ում։
3. Համեմատեք $\\operatorname{tg} \\dfrac{\\pi}{5}$-ը և $\\operatorname{tg} \\dfrac{\\pi}{7}$-ը։
4. Համեմատեք $\\operatorname{ctg} 1$-ը և $\\operatorname{ctg} 2$-ը։
5. Գրեք $y = \\operatorname{ctg} x$-ի ասիմպտոտների հավասարումները $[0; 2\\pi]$-ում։
6. Քանի՞ լուծում ունի $\\operatorname{tg} x = -3$ հավասարումը $(0; 3\\pi)$-ում։
7. Արդյո՞ք $\\operatorname{tg} x$-ն աճում է իր ամբողջ որոշման տիրույթում։ Բացատրեք $x = 1$ և $x = 2$ արժեքներով։

### Պատասխաններ

1. $2x \\ne \\dfrac{\\pi}{2} + \\pi k$, ուստի $x \\ne \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$։ 2. $-\\pi, 0, \\pi, 2\\pi$։ 3. $\\operatorname{tg} \\dfrac{\\pi}{5} > \\operatorname{tg} \\dfrac{\\pi}{7}$։ 4. Կոտանգենսը նվազում է $(0; \\pi)$-ում, ուստի $\\operatorname{ctg} 1 > \\operatorname{ctg} 2$։ 5. $x = 0$, $x = \\pi$, $x = 2\\pi$։ 6. Երեք՝ մեկական $\\pi$, $2\\pi$ և $3\\pi$ կենտրոններով ճյուղերից յուրաքանչյուրի վրա, որոնք հատում են միջակայքը։ 7. Ոչ՝ $1 < 2$, բայց $\\operatorname{tg} 1 > \\operatorname{tg} 2$։ Այն աճում է միայն յուրաքանչյուր ճյուղի վրա առանձին։`,
        ru: `## Одна ветвь

На $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ косинус положителен и тангенс определён.

| $x$ | $-\\dfrac{\\pi}{3}$ | $-\\dfrac{\\pi}{4}$ | $0$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{3}$ |
|---|---|---|---|---|---|
| $\\operatorname{tg} x$ | $-\\sqrt3$ | $-1$ | $0$ | $1$ | $\\sqrt3$ |

Когда $x$ приближается к $\\dfrac{\\pi}{2}$ слева, $\\cos x \\to 0$, а $\\sin x \\to 1$, поэтому $\\operatorname{tg} x$ неограниченно растёт. Около $-\\dfrac{\\pi}{2}$ он неограниченно убывает. Прямые $x = \\pm\\dfrac{\\pi}{2}$ — **вертикальные асимптоты**: график всё ближе подходит к ним, но никогда их не пересекает.

Кривая через эти точки — одна **ветвь** графика тангенса. Повторяя её через каждые $\\pi$, получаем весь график — **тангенсоиду**.

## Свойства y = tg x

- Область определения: $x \\ne \\dfrac{\\pi}{2} + \\pi k$. Множество значений — все действительные числа.
- Период $\\pi$. Нечётная: симметрична относительно начала координат.
- Нули: $x = \\pi k$.
- Возрастает на каждом промежутке $\\left(-\\dfrac{\\pi}{2} + \\pi k; \\dfrac{\\pi}{2} + \\pi k\\right)$.
- Ни максимума, ни минимума нет.

## y = ctg x

$\\operatorname{ctg} x$ определён при $x \\ne \\pi k$. На $(0; \\pi)$ он **убывает** от очень больших значений до очень малых, проходя через $0$ при $x = \\dfrac{\\pi}{2}$. Асимптоты $x = \\pi k$, период $\\pi$, функция нечётная.

| $x$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{4}$ | $\\dfrac{\\pi}{2}$ | $\\dfrac{3\\pi}{4}$ | $\\dfrac{5\\pi}{6}$ |
|---|---|---|---|---|---|
| $\\operatorname{ctg} x$ | $\\sqrt3$ | $1$ | $0$ | $-1$ | $-\\sqrt3$ |

**Пример 1.** Сравните $\\operatorname{tg} 1$ и $\\operatorname{tg} 1{,}2$. Оба числа в $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, где тангенс возрастает, значит, $\\operatorname{tg} 1 < \\operatorname{tg} 1{,}2$.

**Пример 2.** Сравните $\\operatorname{tg} 1$ и $\\operatorname{tg} 2$. Здесь $2 > \\dfrac{\\pi}{2}$, числа на разных ветвях. $\\operatorname{tg} 1 > 0$, а $\\operatorname{tg} 2 < 0$ (II четверть), значит, $\\operatorname{tg} 1 > \\operatorname{tg} 2$.

**Пример 3.** Уравнение $\\operatorname{tg} x = 5$ имеет ровно одно решение на каждой ветви.

### Упражнения

1. Запишите область определения $y = \\operatorname{tg} 2x$.
2. Найдите нули $y = \\operatorname{tg} x$ на $[-\\pi; 2\\pi]$.
3. Сравните $\\operatorname{tg} \\dfrac{\\pi}{5}$ и $\\operatorname{tg} \\dfrac{\\pi}{7}$.
4. Сравните $\\operatorname{ctg} 1$ и $\\operatorname{ctg} 2$.
5. Запишите уравнения асимптот $y = \\operatorname{ctg} x$ на $[0; 2\\pi]$.
6. Сколько решений имеет $\\operatorname{tg} x = -3$ на $(0; 3\\pi)$?
7. Возрастает ли $\\operatorname{tg} x$ на всей области определения? Объясните на примере $x = 1$ и $x = 2$.

### Ответы

1. $2x \\ne \\dfrac{\\pi}{2} + \\pi k$, откуда $x \\ne \\dfrac{\\pi}{4} + \\dfrac{\\pi k}{2}$. 2. $-\\pi; 0; \\pi; 2\\pi$. 3. $\\operatorname{tg} \\dfrac{\\pi}{5} > \\operatorname{tg} \\dfrac{\\pi}{7}$. 4. Котангенс убывает на $(0; \\pi)$, значит, $\\operatorname{ctg} 1 > \\operatorname{ctg} 2$. 5. $x = 0$, $x = \\pi$, $x = 2\\pi$. 6. Три: по одному на ветвях с центрами $\\pi$, $2\\pi$ и $3\\pi$, которые пересекают промежуток. 7. Нет: $1 < 2$, но $\\operatorname{tg} 1 > \\operatorname{tg} 2$. Он возрастает только на каждой ветви отдельно.`,
      },
      [
        q(
          t("The period of tan x is…", "tg x-ի պարբերությունը…", "Период tg x —"),
          [t("π", "π", "π"), t("2π", "2π", "2π"), t("π/2", "π/2", "π/2")],
          0,
        ),
        q(
          t("The graph of y = tan x has vertical asymptotes at…", "y = tg x-ի գրաֆիկի ուղղաձիգ ասիմպտոտներն են…", "Вертикальные асимптоты графика y = tg x —"),
          [t("x = πk", "x = πk", "x = πk"), t("x = π/2 + πk", "x = π/2 + πk", "x = π/2 + πk"), t("x = 2πk", "x = 2πk", "x = 2πk")],
          1,
        ),
        q(
          t("The range of y = tan x is…", "y = tg x-ի արժեքների տիրույթը…", "Множество значений y = tg x —"),
          [t("[−1; 1]", "[−1; 1]", "[−1; 1]"), t("all real numbers", "բոլոր իրական թվերն են", "все действительные числа"), t("(0; +∞)", "(0; +∞)", "(0; +∞)")],
          1,
        ),
        q(
          t("On (0; π), cot x…", "(0; π)-ում ctg x-ը…", "На (0; π) ctg x…"),
          [t("increases", "աճում է", "возрастает"), t("decreases", "նվազում է", "убывает"), t("is constant", "հաստատուն է", "постоянен")],
          1,
        ),
        q(
          t("Which is true?", "Ո՞րն է ճիշտ", "Что верно?"),
          [t("tan 1 > tan 2", "tg 1 > tg 2", "tg 1 > tg 2"), t("tan 1 < tan 2", "tg 1 < tg 2", "tg 1 < tg 2"), t("tan 1 = tan 2", "tg 1 = tg 2", "tg 1 = tg 2")],
          0,
        ),
        q(
          t("How many solutions does tan x = 5 have on one branch?", "Քանի՞ լուծում ունի tg x = 5-ը մեկ ճյուղի վրա", "Сколько решений имеет tg x = 5 на одной ветви?"),
          [t("none", "ոչ մի", "ни одного"), t("exactly one", "ճիշտ մեկ", "ровно одно"), t("two", "երկու", "два")],
          1,
        ),
      ],
    ),
    lesson(
      "alg10-trig-properties",
      ["Investigating trigonometric functions", "Եռանկյունաչափական ֆունկցիաների հետազոտում", "Исследование тригонометрических функций"],
      {
        en: ["Decide whether a trigonometric function is even, odd or neither", "Find the range and the largest and smallest values of expressions like a sin x + b", "Use monotonicity to compare values and to find where a function increases"],
        hy: ["Որոշել, թե եռանկյունաչափական ֆունկցիան զույգ է, կենտ, թե ոչ զույգ, ոչ կենտ", "Գտնել a sin x + b տիպի արտահայտությունների արժեքների տիրույթը, մեծագույն և փոքրագույն արժեքները", "Մոնոտոնությամբ համեմատել արժեքներ և գտնել, թե որտեղ է ֆունկցիան աճում"],
        ru: ["Определять, является ли тригонометрическая функция чётной, нечётной или ни той ни другой", "Находить множество значений, наибольшее и наименьшее значения выражений вида a sin x + b", "Использовать монотонность для сравнения значений и поиска промежутков возрастания"],
      },
      {
        en: `## Summary table

| | $\\sin x$ | $\\cos x$ | $\\tan x$ |
|---|---|---|---|
| Domain | all $x$ | all $x$ | $x \\ne \\dfrac{\\pi}{2} + \\pi k$ |
| Range | $[-1; 1]$ | $[-1; 1]$ | all real numbers |
| Period | $2\\pi$ | $2\\pi$ | $\\pi$ |
| Parity | odd | even | odd |
| Zeros | $\\pi k$ | $\\dfrac{\\pi}{2} + \\pi k$ | $\\pi k$ |

## Parity

Check $f(-x)$ against $f(x)$. The domain must be symmetric about $0$.

**Example 1.** $f(x) = x \\sin x$: $f(-x) = (-x)\\sin(-x) = x \\sin x = f(x)$, even.

**Example 2.** $f(x) = \\sin x + \\tan x$: $f(-x) = -\\sin x - \\tan x = -f(x)$, odd.

**Example 3.** $f(x) = \\cos x + \\sin x$: $f(-x) = \\cos x - \\sin x$, which is neither $f(x)$ nor $-f(x)$: neither even nor odd.

## Range and extreme values

Use $-1 \\le \\sin x \\le 1$ and transform the inequality step by step.

**Example 4.** $y = 4 - 3\\cos x$. From $-1 \\le \\cos x \\le 1$: $-3 \\le -3\\cos x \\le 3$, so $1 \\le y \\le 7$. The largest value is $7$ (at $\\cos x = -1$), the smallest is $1$ (at $\\cos x = 1$).

**Example 5.** $y = \\sin^2 x$. Since $0 \\le \\sin^2 x \\le 1$, the range is $[0; 1]$.

**Example 6.** $y = \\sin x \\cos x = \\dfrac12 \\sin 2x$, range $\\left[-\\dfrac12; \\dfrac12\\right]$.

## Monotonicity

**Example 7.** Where does $y = \\sin 2x$ increase? $\\sin t$ increases when $-\\dfrac{\\pi}{2} + 2\\pi k \\le t \\le \\dfrac{\\pi}{2} + 2\\pi k$. With $t = 2x$: $-\\dfrac{\\pi}{4} + \\pi k \\le x \\le \\dfrac{\\pi}{4} + \\pi k$.

**Example 8.** Order $\\cos 1$, $\\cos 2$, $\\cos 3$. All three lie in $[0; \\pi]$, where cosine decreases, so $\\cos 3 < \\cos 2 < \\cos 1$.

### Exercises

1. Is $f(x) = x^2 \\cos x$ even or odd?
2. Is $f(x) = \\dfrac{\\sin x}{x}$ even or odd?
3. Find the range of $y = 2\\sin x + 5$.
4. Find the largest and smallest values of $y = 1 - 4\\sin^2 x$.
5. Find the range of $y = \\sin x + \\sqrt3 \\cos x$. Hint: write it as $2\\sin\\left(x + \\dfrac{\\pi}{3}\\right)$.
6. Where does $y = \\cos 3x$ decrease?
7. Order $\\sin 0.5$, $\\sin 1$, $\\sin 1.5$.

### Answers

1. Even. 2. Even: $\\dfrac{\\sin(-x)}{-x} = \\dfrac{\\sin x}{x}$. 3. $[3; 7]$. 4. Largest $1$, smallest $-3$. 5. $[-2; 2]$. 6. $\\dfrac{2\\pi k}{3} \\le x \\le \\dfrac{\\pi}{3} + \\dfrac{2\\pi k}{3}$. 7. $\\sin 0.5 < \\sin 1 < \\sin 1.5$.`,
        hy: `## Ամփոփիչ աղյուսակ

| | $\\sin x$ | $\\cos x$ | $\\operatorname{tg} x$ |
|---|---|---|---|
| Որոշման տիրույթ | բոլոր $x$-երը | բոլոր $x$-երը | $x \\ne \\dfrac{\\pi}{2} + \\pi k$ |
| Արժեքների տիրույթ | $[-1; 1]$ | $[-1; 1]$ | բոլոր իրական թվերը |
| Պարբերություն | $2\\pi$ | $2\\pi$ | $\\pi$ |
| Զույգություն | կենտ | զույգ | կենտ |
| Զրոներ | $\\pi k$ | $\\dfrac{\\pi}{2} + \\pi k$ | $\\pi k$ |

## Զույգություն

Համեմատում ենք $f(-x)$-ը $f(x)$-ի հետ։ Որոշման տիրույթը պետք է համաչափ լինի $0$-ի նկատմամբ։

**Օրինակ 1։** $f(x) = x \\sin x$՝ $f(-x) = (-x)\\sin(-x) = x \\sin x = f(x)$, զույգ է։

**Օրինակ 2։** $f(x) = \\sin x + \\operatorname{tg} x$՝ $f(-x) = -\\sin x - \\operatorname{tg} x = -f(x)$, կենտ է։

**Օրինակ 3։** $f(x) = \\cos x + \\sin x$՝ $f(-x) = \\cos x - \\sin x$, որը ոչ $f(x)$ է, ոչ $-f(x)$՝ ոչ զույգ է, ոչ կենտ։

## Արժեքների տիրույթ և ծայրահեղ արժեքներ

Օգտվում ենք $-1 \\le \\sin x \\le 1$-ից և անհավասարությունը քայլ առ քայլ ձևափոխում։

**Օրինակ 4։** $y = 4 - 3\\cos x$։ $-1 \\le \\cos x \\le 1$-ից՝ $-3 \\le -3\\cos x \\le 3$, ուստի $1 \\le y \\le 7$։ Մեծագույն արժեքը $7$ է ($\\cos x = -1$ դեպքում), փոքրագույնը՝ $1$ ($\\cos x = 1$ դեպքում)։

**Օրինակ 5։** $y = \\sin^2 x$։ Քանի որ $0 \\le \\sin^2 x \\le 1$, արժեքների տիրույթը $[0; 1]$ է։

**Օրինակ 6։** $y = \\sin x \\cos x = \\dfrac12 \\sin 2x$, արժեքների տիրույթը՝ $\\left[-\\dfrac12; \\dfrac12\\right]$։

## Մոնոտոնություն

**Օրինակ 7։** Որտե՞ղ է աճում $y = \\sin 2x$-ը։ $\\sin t$-ն աճում է, երբ $-\\dfrac{\\pi}{2} + 2\\pi k \\le t \\le \\dfrac{\\pi}{2} + 2\\pi k$։ $t = 2x$ դեպքում՝ $-\\dfrac{\\pi}{4} + \\pi k \\le x \\le \\dfrac{\\pi}{4} + \\pi k$։

**Օրինակ 8։** Դասավորեք $\\cos 1$-ը, $\\cos 2$-ը, $\\cos 3$-ը։ Երեքն էլ $[0; \\pi]$-ում են, որտեղ կոսինուսը նվազում է, ուստի $\\cos 3 < \\cos 2 < \\cos 1$։

### Վարժություններ

1. Զույգ է, թե կենտ $f(x) = x^2 \\cos x$-ը։
2. Զույգ է, թե կենտ $f(x) = \\dfrac{\\sin x}{x}$-ը։
3. Գտեք $y = 2\\sin x + 5$-ի արժեքների տիրույթը։
4. Գտեք $y = 1 - 4\\sin^2 x$-ի մեծագույն և փոքրագույն արժեքները։
5. Գտեք $y = \\sin x + \\sqrt3 \\cos x$-ի արժեքների տիրույթը։ Հուշում՝ գրեք այն $2\\sin\\left(x + \\dfrac{\\pi}{3}\\right)$ տեսքով։
6. Որտե՞ղ է նվազում $y = \\cos 3x$-ը։
7. Դասավորեք $\\sin 0{,}5$-ը, $\\sin 1$-ը, $\\sin 1{,}5$-ը։

### Պատասխաններ

1. Զույգ։ 2. Զույգ՝ $\\dfrac{\\sin(-x)}{-x} = \\dfrac{\\sin x}{x}$։ 3. $[3; 7]$։ 4. Մեծագույնը՝ $1$, փոքրագույնը՝ $-3$։ 5. $[-2; 2]$։ 6. $\\dfrac{2\\pi k}{3} \\le x \\le \\dfrac{\\pi}{3} + \\dfrac{2\\pi k}{3}$։ 7. $\\sin 0{,}5 < \\sin 1 < \\sin 1{,}5$։`,
        ru: `## Сводная таблица

| | $\\sin x$ | $\\cos x$ | $\\operatorname{tg} x$ |
|---|---|---|---|
| Область определения | все $x$ | все $x$ | $x \\ne \\dfrac{\\pi}{2} + \\pi k$ |
| Множество значений | $[-1; 1]$ | $[-1; 1]$ | все действительные числа |
| Период | $2\\pi$ | $2\\pi$ | $\\pi$ |
| Чётность | нечётная | чётная | нечётная |
| Нули | $\\pi k$ | $\\dfrac{\\pi}{2} + \\pi k$ | $\\pi k$ |

## Чётность

Сравниваем $f(-x)$ с $f(x)$. Область определения должна быть симметрична относительно $0$.

**Пример 1.** $f(x) = x \\sin x$: $f(-x) = (-x)\\sin(-x) = x \\sin x = f(x)$, чётная.

**Пример 2.** $f(x) = \\sin x + \\operatorname{tg} x$: $f(-x) = -\\sin x - \\operatorname{tg} x = -f(x)$, нечётная.

**Пример 3.** $f(x) = \\cos x + \\sin x$: $f(-x) = \\cos x - \\sin x$ — не равно ни $f(x)$, ни $-f(x)$: ни чётная, ни нечётная.

## Множество значений и крайние значения

Используем $-1 \\le \\sin x \\le 1$ и шаг за шагом преобразуем неравенство.

**Пример 4.** $y = 4 - 3\\cos x$. Из $-1 \\le \\cos x \\le 1$: $-3 \\le -3\\cos x \\le 3$, значит, $1 \\le y \\le 7$. Наибольшее значение $7$ (при $\\cos x = -1$), наименьшее $1$ (при $\\cos x = 1$).

**Пример 5.** $y = \\sin^2 x$. Так как $0 \\le \\sin^2 x \\le 1$, множество значений $[0; 1]$.

**Пример 6.** $y = \\sin x \\cos x = \\dfrac12 \\sin 2x$, множество значений $\\left[-\\dfrac12; \\dfrac12\\right]$.

## Монотонность

**Пример 7.** Где возрастает $y = \\sin 2x$? $\\sin t$ возрастает при $-\\dfrac{\\pi}{2} + 2\\pi k \\le t \\le \\dfrac{\\pi}{2} + 2\\pi k$. При $t = 2x$: $-\\dfrac{\\pi}{4} + \\pi k \\le x \\le \\dfrac{\\pi}{4} + \\pi k$.

**Пример 8.** Упорядочьте $\\cos 1$, $\\cos 2$, $\\cos 3$. Все три числа в $[0; \\pi]$, где косинус убывает, поэтому $\\cos 3 < \\cos 2 < \\cos 1$.

### Упражнения

1. Чётна или нечётна $f(x) = x^2 \\cos x$?
2. Чётна или нечётна $f(x) = \\dfrac{\\sin x}{x}$?
3. Найдите множество значений $y = 2\\sin x + 5$.
4. Найдите наибольшее и наименьшее значения $y = 1 - 4\\sin^2 x$.
5. Найдите множество значений $y = \\sin x + \\sqrt3 \\cos x$. Подсказка: запишите его как $2\\sin\\left(x + \\dfrac{\\pi}{3}\\right)$.
6. Где убывает $y = \\cos 3x$?
7. Упорядочьте $\\sin 0{,}5$, $\\sin 1$, $\\sin 1{,}5$.

### Ответы

1. Чётная. 2. Чётная: $\\dfrac{\\sin(-x)}{-x} = \\dfrac{\\sin x}{x}$. 3. $[3; 7]$. 4. Наибольшее $1$, наименьшее $-3$. 5. $[-2; 2]$. 6. $\\dfrac{2\\pi k}{3} \\le x \\le \\dfrac{\\pi}{3} + \\dfrac{2\\pi k}{3}$. 7. $\\sin 0{,}5 < \\sin 1 < \\sin 1{,}5$.`,
      },
      [
        q(
          t("Which function is even?", "Ո՞ր ֆունկցիան է զույգ", "Какая функция чётная?"),
          [t("sin x", "sin x", "sin x"), t("cos x", "cos x", "cos x"), t("tan x", "tg x", "tg x")],
          1,
        ),
        q(
          t("f(x) = x sin x is…", "f(x) = x sin x-ը…", "f(x) = x sin x —"),
          [t("even", "զույգ է", "чётная"), t("odd", "կենտ է", "нечётная"), t("neither", "ոչ զույգ է, ոչ կենտ", "ни та ни другая")],
          0,
        ),
        q(
          t("The range of y = 4 − 3 cos x is…", "y = 4 − 3 cos x-ի արժեքների տիրույթը…", "Множество значений y = 4 − 3 cos x —"),
          [t("[1; 7]", "[1; 7]", "[1; 7]"), t("[−3; 3]", "[−3; 3]", "[−3; 3]"), t("[4; 7]", "[4; 7]", "[4; 7]")],
          0,
        ),
        q(
          t("The range of y = sin²x is…", "y = sin²x-ի արժեքների տիրույթը…", "Множество значений y = sin²x —"),
          [t("[−1; 1]", "[−1; 1]", "[−1; 1]"), t("[0; 1]", "[0; 1]", "[0; 1]"), t("[0; 2]", "[0; 2]", "[0; 2]")],
          1,
        ),
        q(
          t("The largest value of sin x cos x is…", "sin x cos x-ի մեծագույն արժեքը…", "Наибольшее значение sin x cos x —"),
          [t("1", "1", "1"), t("1/2", "1/2", "1/2"), t("2", "2", "2")],
          1,
        ),
        q(
          t("Which order is correct?", "Ո՞ր դասավորությունն է ճիշտ", "Какой порядок верен?"),
          [t("cos 1 < cos 2 < cos 3", "cos 1 < cos 2 < cos 3", "cos 1 < cos 2 < cos 3"), t("cos 3 < cos 2 < cos 1", "cos 3 < cos 2 < cos 1", "cos 3 < cos 2 < cos 1"), t("cos 2 < cos 1 < cos 3", "cos 2 < cos 1 < cos 3", "cos 2 < cos 1 < cos 3")],
          1,
        ),
      ],
    ),
    lesson(
      "graph-transformations",
      ["Transforming trigonometric graphs", "Եռանկյունաչափական գրաֆիկների ձևափոխություններ", "Преобразования графиков тригонометрических функций"],
      {
        en: ["Describe the effect of A, k, b and c on the graph of y = A sin(kx + b) + c", "Find the amplitude, period, phase shift and midline of a sinusoid", "Sketch y = A sin(kx + b) + c from its key points"],
        hy: ["Նկարագրել A, k, b և c թվերի ազդեցությունը y = A sin(kx + b) + c ֆունկցիայի գրաֆիկի վրա", "Գտնել սինուսոիդի ամպլիտուդը, պարբերությունը, փուլային տեղաշարժը և միջին գիծը", "Կառուցել y = A sin(kx + b) + c-ի ուրվագիծը նրա հիմնական կետերով"],
        ru: ["Описывать влияние A, k, b и c на график y = A sin(kx + b) + c", "Находить амплитуду, период, сдвиг фазы и среднюю линию синусоиды", "Строить эскиз y = A sin(kx + b) + c по ключевым точкам"],
      },
      {
        en: `## Four numbers

$$y = A\\sin(kx + b) + c, \\qquad A > 0,\\ k > 0.$$

| Number | Effect on the graph of $\\sin x$ |
|---|---|
| $A$ | vertical stretch: values from $-A$ to $A$ (the **amplitude** is $A$) |
| $k$ | horizontal squeeze: period becomes $\\dfrac{2\\pi}{k}$ |
| $b$ | horizontal shift by $\\dfrac{b}{k}$ to the left (if $b > 0$) |
| $c$ | vertical shift by $c$; the **midline** is $y = c$ |

The range is $[c - A; c + A]$.

**Careful with the shift.** $\\sin(2x + \\pi) = \\sin 2\\left(x + \\dfrac{\\pi}{2}\\right)$: the shift is $\\dfrac{\\pi}{2}$, not $\\pi$. Factor out $k$ first.

## A negative sign

$y = -\\sin x$ is the reflection of $y = \\sin x$ in the $x$-axis. $y = \\sin(-x)$ is the reflection in the $y$-axis, which for sine gives the same graph as $-\\sin x$.

## Worked example

**Example 1.** $y = 2\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) + 1$.

- Amplitude $2$, midline $y = 1$, range $[-1; 3]$.
- Period $\\dfrac{2\\pi}{2} = \\pi$.
- $2x - \\dfrac{\\pi}{3} = 2\\left(x - \\dfrac{\\pi}{6}\\right)$: shift $\\dfrac{\\pi}{6}$ to the right.

Key points: set the inside equal to $0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}, 2\\pi$.

| $2x - \\frac{\\pi}{3}$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $x$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{5\\pi}{12}$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{11\\pi}{12}$ | $\\dfrac{7\\pi}{6}$ |
| $y$ | $1$ | $3$ | $1$ | $-1$ | $1$ |

Join the points with one wave and repeat it every $\\pi$.

**Example 2.** A wave on a lake rises $0.5$ m above and falls $0.5$ m below the calm level, and repeats every $4$ s. Its height is $h(t) = 0.5\\sin\\dfrac{\\pi t}{2}$: amplitude $0.5$, period $\\dfrac{2\\pi}{\\pi/2} = 4$.

### Exercises

1. Give the amplitude, period and range of $y = 3\\cos 2x$.
2. Give the midline and range of $y = \\sin x - 2$.
3. Find the shift of $y = \\sin\\left(x + \\dfrac{\\pi}{4}\\right)$ and of $y = \\cos\\left(3x - \\pi\\right)$.
4. Write a function of the form $y = A\\sin kx$ with amplitude $5$ and period $\\pi$.
5. Find the maximum of $y = 2\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) + 1$ and the first positive $x$ where it is reached.
6. How is $y = -2\\cos x$ obtained from $y = \\cos x$?
7. A Ferris wheel of radius $20$ m has its centre $22$ m above the ground and turns once every $10$ min. Write the height of a cabin starting at the lowest point.

### Answers

1. $A = 3$, $T = \\pi$, range $[-3; 3]$. 2. Midline $y = -2$, range $[-3; -1]$. 3. $\\dfrac{\\pi}{4}$ to the left; $\\dfrac{\\pi}{3}$ to the right. 4. $y = 5\\sin 2x$. 5. Maximum $3$ at $x = \\dfrac{5\\pi}{12}$. 6. Stretch vertically by $2$ and reflect in the $x$-axis. 7. $h(t) = 22 - 20\\cos\\dfrac{\\pi t}{5}$ ($t$ in minutes): $h(0) = 2$, $h(5) = 42$.`,
        hy: `## Չորս թիվ

$$y = A\\sin(kx + b) + c, \\qquad A > 0,\\ k > 0.$$

| Թիվ | Ազդեցությունը $\\sin x$-ի գրաֆիկի վրա |
|---|---|
| $A$ | ուղղաձիգ ձգում՝ արժեքները $-A$-ից $A$ (**ամպլիտուդը** $A$ է) |
| $k$ | հորիզոնական սեղմում՝ պարբերությունը դառնում է $\\dfrac{2\\pi}{k}$ |
| $b$ | հորիզոնական տեղաշարժ $\\dfrac{b}{k}$-ով ձախ (եթե $b > 0$) |
| $c$ | ուղղաձիգ տեղաշարժ $c$-ով, **միջին գիծը** $y = c$ է |

Արժեքների տիրույթը $[c - A; c + A]$ է։

**Զգույշ տեղաշարժի հետ։** $\\sin(2x + \\pi) = \\sin 2\\left(x + \\dfrac{\\pi}{2}\\right)$՝ տեղաշարժը $\\dfrac{\\pi}{2}$ է, ոչ թե $\\pi$։ Նախ $k$-ն դուրս բերեք փակագծից։

## Բացասական նշան

$y = -\\sin x$-ը $y = \\sin x$-ի համաչափ պատկերն է $x$ առանցքի նկատմամբ։ $y = \\sin(-x)$-ը համաչափ պատկերն է $y$ առանցքի նկատմամբ, որը սինուսի դեպքում տալիս է նույն գրաֆիկը, ինչ $-\\sin x$-ը։

## Լուծված օրինակ

**Օրինակ 1։** $y = 2\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) + 1$։

- Ամպլիտուդը՝ $2$, միջին գիծը՝ $y = 1$, արժեքների տիրույթը՝ $[-1; 3]$։
- Պարբերությունը՝ $\\dfrac{2\\pi}{2} = \\pi$։
- $2x - \\dfrac{\\pi}{3} = 2\\left(x - \\dfrac{\\pi}{6}\\right)$՝ տեղաշարժ $\\dfrac{\\pi}{6}$-ով աջ։

Հիմնական կետերը՝ ներսի արտահայտությունը հավասարեցնում ենք $0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}, 2\\pi$ թվերին։

| $2x - \\frac{\\pi}{3}$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $x$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{5\\pi}{12}$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{11\\pi}{12}$ | $\\dfrac{7\\pi}{6}$ |
| $y$ | $1$ | $3$ | $1$ | $-1$ | $1$ |

Կետերը միացնում ենք մեկ ալիքով և կրկնում այն $\\pi$-ն մեկ։

**Օրինակ 2։** Լճի ալիքը բարձրանում է հանգիստ մակարդակից $0{,}5$ մ վեր և իջնում $0{,}5$ մ ներքև՝ կրկնվելով $4$ վ-ը մեկ։ Նրա բարձրությունն է $h(t) = 0{,}5\\sin\\dfrac{\\pi t}{2}$՝ ամպլիտուդը $0{,}5$, պարբերությունը $\\dfrac{2\\pi}{\\pi/2} = 4$։

### Վարժություններ

1. Նշեք $y = 3\\cos 2x$-ի ամպլիտուդը, պարբերությունը և արժեքների տիրույթը։
2. Նշեք $y = \\sin x - 2$-ի միջին գիծը և արժեքների տիրույթը։
3. Գտեք $y = \\sin\\left(x + \\dfrac{\\pi}{4}\\right)$-ի և $y = \\cos\\left(3x - \\pi\\right)$-ի տեղաշարժը։
4. Գրեք $y = A\\sin kx$ տեսքի ֆունկցիա $5$ ամպլիտուդով և $\\pi$ պարբերությամբ։
5. Գտեք $y = 2\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) + 1$-ի մաքսիմումը և առաջին դրական $x$-ը, որտեղ այն ընդունվում է։
6. Ինչպե՞ս է $y = -2\\cos x$-ը ստացվում $y = \\cos x$-ից։
7. $20$ մ շառավղով սատանայի անիվի կենտրոնը գետնից $22$ մ բարձր է, և անիվը մեկ պտույտ է կատարում $10$ րոպեում։ Գրեք ամենացածր կետից սկսող խցիկի բարձրությունը։

### Պատասխաններ

1. $A = 3$, $T = \\pi$, արժեքների տիրույթը՝ $[-3; 3]$։ 2. Միջին գիծը՝ $y = -2$, տիրույթը՝ $[-3; -1]$։ 3. $\\dfrac{\\pi}{4}$-ով ձախ, $\\dfrac{\\pi}{3}$-ով աջ։ 4. $y = 5\\sin 2x$։ 5. Մաքսիմումը՝ $3$, $x = \\dfrac{5\\pi}{12}$ կետում։ 6. Ուղղաձիգ ձգում $2$ անգամ և համաչափություն $x$ առանցքի նկատմամբ։ 7. $h(t) = 22 - 20\\cos\\dfrac{\\pi t}{5}$ ($t$-ն րոպեներով)՝ $h(0) = 2$, $h(5) = 42$։`,
        ru: `## Четыре числа

$$y = A\\sin(kx + b) + c, \\qquad A > 0,\\ k > 0.$$

| Число | Влияние на график $\\sin x$ |
|---|---|
| $A$ | растяжение по вертикали: значения от $-A$ до $A$ (**амплитуда** $A$) |
| $k$ | сжатие по горизонтали: период становится $\\dfrac{2\\pi}{k}$ |
| $b$ | сдвиг по горизонтали на $\\dfrac{b}{k}$ влево (при $b > 0$) |
| $c$ | сдвиг по вертикали на $c$; **средняя линия** $y = c$ |

Множество значений $[c - A; c + A]$.

**Осторожно со сдвигом.** $\\sin(2x + \\pi) = \\sin 2\\left(x + \\dfrac{\\pi}{2}\\right)$: сдвиг $\\dfrac{\\pi}{2}$, а не $\\pi$. Сначала вынесите $k$ за скобку.

## Знак минус

$y = -\\sin x$ — отражение $y = \\sin x$ относительно оси $x$. $y = \\sin(-x)$ — отражение относительно оси $y$; для синуса это тот же график, что и $-\\sin x$.

## Разобранный пример

**Пример 1.** $y = 2\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) + 1$.

- Амплитуда $2$, средняя линия $y = 1$, множество значений $[-1; 3]$.
- Период $\\dfrac{2\\pi}{2} = \\pi$.
- $2x - \\dfrac{\\pi}{3} = 2\\left(x - \\dfrac{\\pi}{6}\\right)$: сдвиг на $\\dfrac{\\pi}{6}$ вправо.

Ключевые точки: приравниваем выражение в скобках к $0, \\dfrac{\\pi}{2}, \\pi, \\dfrac{3\\pi}{2}, 2\\pi$.

| $2x - \\frac{\\pi}{3}$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |
|---|---|---|---|---|---|
| $x$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{5\\pi}{12}$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{11\\pi}{12}$ | $\\dfrac{7\\pi}{6}$ |
| $y$ | $1$ | $3$ | $1$ | $-1$ | $1$ |

Соединяем точки одной волной и повторяем её через каждые $\\pi$.

**Пример 2.** Волна на озере поднимается на $0{,}5$ м выше и опускается на $0{,}5$ м ниже спокойного уровня и повторяется каждые $4$ с. Её высота $h(t) = 0{,}5\\sin\\dfrac{\\pi t}{2}$: амплитуда $0{,}5$, период $\\dfrac{2\\pi}{\\pi/2} = 4$.

### Упражнения

1. Укажите амплитуду, период и множество значений $y = 3\\cos 2x$.
2. Укажите среднюю линию и множество значений $y = \\sin x - 2$.
3. Найдите сдвиг $y = \\sin\\left(x + \\dfrac{\\pi}{4}\\right)$ и $y = \\cos\\left(3x - \\pi\\right)$.
4. Запишите функцию вида $y = A\\sin kx$ с амплитудой $5$ и периодом $\\pi$.
5. Найдите максимум $y = 2\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) + 1$ и первое положительное $x$, где он достигается.
6. Как получить $y = -2\\cos x$ из $y = \\cos x$?
7. Колесо обозрения радиусом $20$ м, центр на высоте $22$ м, делает один оборот за $10$ мин. Запишите высоту кабины, стартующей из нижней точки.

### Ответы

1. $A = 3$, $T = \\pi$, множество значений $[-3; 3]$. 2. Средняя линия $y = -2$, множество значений $[-3; -1]$. 3. На $\\dfrac{\\pi}{4}$ влево; на $\\dfrac{\\pi}{3}$ вправо. 4. $y = 5\\sin 2x$. 5. Максимум $3$ при $x = \\dfrac{5\\pi}{12}$. 6. Растянуть по вертикали в $2$ раза и отразить относительно оси $x$. 7. $h(t) = 22 - 20\\cos\\dfrac{\\pi t}{5}$ ($t$ в минутах): $h(0) = 2$, $h(5) = 42$.`,
      },
      [
        q(
          t("The amplitude of y = 3 sin x is…", "y = 3 sin x-ի ամպլիտուդը…", "Амплитуда y = 3 sin x —"),
          [t("1", "1", "1"), t("3", "3", "3"), t("6", "6", "6")],
          1,
        ),
        q(
          t("The period of y = sin 4x is…", "y = sin 4x-ի պարբերությունը…", "Период y = sin 4x —"),
          [t("π/2", "π/2", "π/2"), t("4π", "4π", "4π"), t("8π", "8π", "8π")],
          0,
        ),
        q(
          t("The graph of y = sin x + 2 is the sine graph moved…", "y = sin x + 2-ի գրաֆիկը սինուսի գրաֆիկն է՝ տեղաշարժված…", "График y = sin x + 2 — это синусоида, сдвинутая…"),
          [t("2 up", "2-ով վերև", "на 2 вверх"), t("2 to the left", "2-ով ձախ", "на 2 влево"), t("2 down", "2-ով ներքև", "на 2 вниз")],
          0,
        ),
        q(
          t("The horizontal shift of y = sin(2x + π) is…", "y = sin(2x + π)-ի հորիզոնական տեղաշարժը…", "Горизонтальный сдвиг y = sin(2x + π) —"),
          [t("π to the left", "π-ով ձախ", "на π влево"), t("π/2 to the left", "π/2-ով ձախ", "на π/2 влево"), t("2π to the left", "2π-ով ձախ", "на 2π влево")],
          1,
        ),
        q(
          t("The range of y = 2 sin(2x − π/3) + 1 is…", "y = 2 sin(2x − π/3) + 1-ի արժեքների տիրույթը…", "Множество значений y = 2 sin(2x − π/3) + 1 —"),
          [t("[−1; 3]", "[−1; 3]", "[−1; 3]"), t("[−2; 2]", "[−2; 2]", "[−2; 2]"), t("[0; 3]", "[0; 3]", "[0; 3]")],
          0,
        ),
        q(
          t("y = −sin x is the reflection of y = sin x in…", "y = −sin x-ը y = sin x-ի համաչափ պատկերն է…", "y = −sin x — это отражение y = sin x относительно…"),
          [t("the x-axis", "x առանցքի նկատմամբ", "оси x"), t("the line y = 1", "y = 1 ուղղի նկատմամբ", "прямой y = 1"), t("the line x = π", "x = π ուղղի նկատմամբ", "прямой x = π")],
          0,
        ),
      ],
    ),
  ],
};
