import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer, fact } from "../more";

export const grade11: VisualMap[number] = {
  "derivative-definition": [
    "plot mode=tangent fn=sq x=-1",
    closer(
      `**A limit of slopes.** $f'(x_0) = \\displaystyle\\lim_{h \\to 0} \\dfrac{f(x_0 + h) - f(x_0)}{h}$. The fraction is the slope of a chord through two points of the graph; as the second point slides towards the first, the chord becomes the tangent.

**Do it once by hand.** For $f(x) = x^2$ at $x_0 = -1$: $\\dfrac{(-1 + h)^2 - 1}{h} = \\dfrac{-2h + h^2}{h} = -2 + h \\to -2$. The tangent above falls with slope $-2$.

**Where there is no derivative.** At a sharp corner, such as $y = |x|$ at 0, the chords from the left and from the right have different slopes ($-1$ and $1$), so the limit does not exist.`,
      `**Թեքությունների սահման։** $f'(x_0) = \\displaystyle\\lim_{h \\to 0} \\dfrac{f(x_0 + h) - f(x_0)}{h}$։ Կոտորակը գրաֆիկի երկու կետով անցնող լարի թեքությունն է․ երբ երկրորդ կետը սահում է դեպի առաջինը, լարը դառնում է շոշափող։

**Մեկ անգամ արա ձեռքով։** $f(x) = x^2$-ու համար $x_0 = -1$-ում՝ $\\dfrac{(-1 + h)^2 - 1}{h} = \\dfrac{-2h + h^2}{h} = -2 + h \\to -2$։ Վերևի շոշափողն իջնում է $-2$ թեքությամբ։

**Որտեղ ածանցյալ չկա։** Սուր անկյունում, օրինակ՝ $y = |x|$-ի 0 կետում, ձախից և աջից լարերն ունեն տարբեր թեքություններ ($-1$ և $1$), ուստի սահմանը գոյություն չունի։`,
      `**Предел наклонов.** $f'(x_0) = \\displaystyle\\lim_{h \\to 0} \\dfrac{f(x_0 + h) - f(x_0)}{h}$. Дробь — наклон хорды через две точки графика; когда вторая точка скользит к первой, хорда превращается в касательную.

**Сделай один раз руками.** Для $f(x) = x^2$ в точке $x_0 = -1$: $\\dfrac{(-1 + h)^2 - 1}{h} = \\dfrac{-2h + h^2}{h} = -2 + h \\to -2$. Касательная выше идёт вниз с наклоном $-2$.

**Где производной нет.** В остром углу, например у $y = |x|$ в нуле, хорды слева и справа имеют разные наклоны ($-1$ и $1$), поэтому предела не существует.`,
    ),
    ask(2, {
      en: ["Does y = |x| have a derivative at x = 0?", ["yes, it is 0", "no", "yes, it is 1"], "The slope is −1 on the left and 1 on the right: there is a corner."],
      hy: ["y = |x|-ն ունի՞ ածանցյալ x = 0 կետում։", ["այո, այն 0 է", "ոչ", "այո, այն 1 է"], "Ձախից թեքությունը −1 է, աջից՝ 1․ կա անկյուն։"],
      ru: ["Есть ли у y = |x| производная в точке x = 0?", ["да, она равна 0", "нет", "да, она равна 1"], "Слева наклон −1, справа 1: в нуле излом."],
    }),
  ],
  "differentiation-rules": [
    closer(
      `**Sums are easy, products are not.** $(u + v)' = u' + v'$, but $(uv)' = u'v + uv'$, **not** $u'v'$. Check with $x \\cdot x = x^2$: the wrong rule would give $1 \\cdot 1 = 1$ instead of $2x$.

**The product rule in action.** $(x^2 \\sin x)' = 2x \\sin x + x^2 \\cos x$. Each factor takes its turn being differentiated while the other waits.

**Quotients.** $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$; the minus means the order matters. Example: $\\left(\\dfrac{x}{x + 1}\\right)' = \\dfrac{(x + 1) - x}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$.`,
      `**Գումարները հեշտ են, արտադրյալները՝ ոչ։** $(u + v)' = u' + v'$, բայց $(uv)' = u'v + uv'$, **ոչ թե** $u'v'$։ Ստուգիր $x \\cdot x = x^2$-ով․ սխալ կանոնը կտար $1 \\cdot 1 = 1$՝ $2x$-ի փոխարեն։

**Արտադրյալի կանոնը գործողության մեջ։** $(x^2 \\sin x)' = 2x \\sin x + x^2 \\cos x$։ Յուրաքանչյուր արտադրիչ հերթով ածանցվում է, իսկ մյուսը սպասում է։

**Քանորդներ։** $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$․ մինուսը նշանակում է, որ կարգը կարևոր է։ Օրինակ՝ $\\left(\\dfrac{x}{x + 1}\\right)' = \\dfrac{(x + 1) - x}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$։`,
      `**Суммы — легко, произведения — нет.** $(u + v)' = u' + v'$, но $(uv)' = u'v + uv'$, **а не** $u'v'$. Проверь на $x \\cdot x = x^2$: неверное правило дало бы $1 \\cdot 1 = 1$ вместо $2x$.

**Правило произведения в деле.** $(x^2 \\sin x)' = 2x \\sin x + x^2 \\cos x$. Каждый множитель по очереди дифференцируется, а другой ждёт.

**Частные.** $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$; минус означает, что порядок важен. Пример: $\\left(\\dfrac{x}{x + 1}\\right)' = \\dfrac{(x + 1) - x}{(x + 1)^2} = \\dfrac{1}{(x + 1)^2}$.`,
    ),
    ask(2, {
      en: ["(x · cos x)′ = ?", ["−sin x", "cos x − x sin x", "cos x + x sin x"], "u′v + uv′ = 1 · cos x + x · (−sin x)."],
      hy: ["(x · cos x)′ = ?", ["−sin x", "cos x − x sin x", "cos x + x sin x"], "u′v + uv′ = 1 · cos x + x · (−sin x)։"],
      ru: ["(x · cos x)′ = ?", ["−sin x", "cos x − x sin x", "cos x + x sin x"], "u′v + uv′ = 1 · cos x + x · (−sin x)."],
    }),
  ],
  "derivative-power-trig": [
    "plot mode=tangent fn=sin x=0 show=deriv",
    closer(
      `**The slope of sine is cosine.** Turn on the graph of f′ above and move the point. At $x = 0$ sine climbs most steeply, with slope 1, which is $\\cos 0$. At the top of the wave the slope is 0, and so is cosine. So $(\\sin x)' = \\cos x$.

**And cosine goes the other way.** $(\\cos x)' = -\\sin x$: cosine starts at its top, so it first falls. Then $(\\tan x)' = \\dfrac{1}{\\cos^2 x}$, always positive, because tangent always rises.

**Powers with any exponent.** $(x^n)' = nx^{n-1}$ works for negative and fractional $n$ too: $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$, $(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$.`,
      `**Սինուսի թեքությունը կոսինուսն է։** Վերևում միացրու f′-ի գրաֆիկը և շարժիր կետը։ $x = 0$-ում սինուսը բարձրանում է ամենից կտրուկ՝ 1 թեքությամբ, որը $\\cos 0$-ն է։ Ալիքի գագաթում թեքությունը 0 է, կոսինուսն էլ։ Ուրեմն $(\\sin x)' = \\cos x$։

**Իսկ կոսինուսը գնում է հակառակ։** $(\\cos x)' = -\\sin x$․ կոսինուսը սկսվում է իր գագաթից, ուստի սկզբում իջնում է։ Հետո $(\\operatorname{tg} x)' = \\dfrac{1}{\\cos^2 x}$՝ միշտ դրական, քանի որ տանգենսը միշտ աճում է։

**Ցանկացած ցուցիչով աստիճաններ։** $(x^n)' = nx^{n-1}$-ը գործում է նաև բացասական և կոտորակային $n$-ի համար՝ $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$, $(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$։`,
      `**Наклон синуса — косинус.** Включи график f′ выше и двигай точку. При $x = 0$ синус поднимается круче всего, с наклоном 1, а это $\\cos 0$. На вершине волны наклон 0, и косинус тоже. Поэтому $(\\sin x)' = \\cos x$.

**А косинус идёт в другую сторону.** $(\\cos x)' = -\\sin x$: косинус начинается с вершины, поэтому сначала убывает. Далее $(\\operatorname{tg} x)' = \\dfrac{1}{\\cos^2 x}$ — всегда положительна, ведь тангенс всегда растёт.

**Степени с любым показателем.** $(x^n)' = nx^{n-1}$ работает и для отрицательных, и для дробных $n$: $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^2}$, $(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$.`,
    ),
    ask(3, {
      en: ["(√x)′ at x = 4 equals…", ["2", "1/2", "1/4"], "1/(2√4) = 1/4."],
      hy: ["(√x)′-ը x = 4 կետում հավասար է…", ["2", "1/2", "1/4"], "1/(2√4) = 1/4։"],
      ru: ["(√x)′ при x = 4 равна…", ["2", "1/2", "1/4"], "1/(2√4) = 1/4."],
    }),
  ],
  "chain-rule": [
    closer(
      `**Outside, then inside.** For $f(g(x))$, differentiate the outer function as if the inside were a single letter, then multiply by the derivative of the inside: $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$.

**Examples.** $(\\sin 3x)' = \\cos 3x \\cdot 3$. $((2x + 1)^5)' = 5(2x + 1)^4 \\cdot 2 = 10(2x + 1)^4$. $(\\sqrt{x^2 + 1})' = \\dfrac{2x}{2\\sqrt{x^2 + 1}} = \\dfrac{x}{\\sqrt{x^2 + 1}}$.

**Gears.** If gear A turns 3 times as fast as gear B, and B 2 times as fast as C, then A turns $3 \\cdot 2 = 6$ times as fast as C. Rates of change through a chain multiply in the same way.`,
      `**Նախ դրսինը, հետո ներսինը։** $f(g(x))$-ի համար ածանցիր արտաքին ֆունկցիան, կարծես ներսինը մեկ տառ լիներ, հետո բազմապատկիր ներքին ֆունկցիայի ածանցյալով՝ $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$։

**Օրինակներ։** $(\\sin 3x)' = \\cos 3x \\cdot 3$։ $((2x + 1)^5)' = 5(2x + 1)^4 \\cdot 2 = 10(2x + 1)^4$։ $(\\sqrt{x^2 + 1})' = \\dfrac{2x}{2\\sqrt{x^2 + 1}} = \\dfrac{x}{\\sqrt{x^2 + 1}}$։

**Ատամնանիվներ։** Եթե A ատամնանիվը պտտվում է B-ից 3 անգամ արագ, իսկ B-ն՝ C-ից 2 անգամ արագ, ապա A-ն պտտվում է C-ից $3 \\cdot 2 = 6$ անգամ արագ։ Շղթայով փոփոխության արագությունները բազմապատկվում են նույն կերպ։`,
      `**Сначала внешняя, потом внутренняя.** Для $f(g(x))$ продифференцируй внешнюю функцию, как будто внутри одна буква, а затем умножь на производную внутренней: $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$.

**Примеры.** $(\\sin 3x)' = \\cos 3x \\cdot 3$. $((2x + 1)^5)' = 5(2x + 1)^4 \\cdot 2 = 10(2x + 1)^4$. $(\\sqrt{x^2 + 1})' = \\dfrac{2x}{2\\sqrt{x^2 + 1}} = \\dfrac{x}{\\sqrt{x^2 + 1}}$.

**Шестерёнки.** Если шестерня A вращается в 3 раза быстрее B, а B — в 2 раза быстрее C, то A вращается в $3 \\cdot 2 = 6$ раз быстрее C. Скорости изменения по цепочке перемножаются так же.`,
    ),
    ask(1, {
      en: ["(cos 5x)′ = ?", ["−5 sin 5x", "−sin 5x", "5 sin 5x"], "Outer: −sin 5x; inner: (5x)′ = 5."],
      hy: ["(cos 5x)′ = ?", ["−5 sin 5x", "−sin 5x", "5 sin 5x"], "Արտաքինը՝ −sin 5x, ներքինը՝ (5x)′ = 5։"],
      ru: ["(cos 5x)′ = ?", ["−5 sin 5x", "−sin 5x", "5 sin 5x"], "Внешняя: −sin 5x; внутренняя: (5x)′ = 5."],
    }),
  ],
  "tangent-line": [
    "plot mode=tangent fn=exp x=0",
    closer(
      `**The equation in one line.** The tangent at $x_0$ passes through $(x_0; f(x_0))$ with slope $f'(x_0)$: $y = f(x_0) + f'(x_0)(x - x_0)$.

**An example on the graph above.** For $f(x) = e^x$ at $x_0 = 0$: $f(0) = 1$ and $f'(0) = 1$, so the tangent is $y = 1 + x$. Near 0 the line and the curve are almost the same: $e^{0.1} \\approx 1.105$, and the line gives $1.1$.

**Tangents as quick estimates.** Replacing a curve by its tangent near a point is called linear approximation. $\\sqrt{4.1} \\approx 2 + \\dfrac{1}{4} \\cdot 0.1 = 2.025$, while the true value is $2.0248\\ldots$`,
      `**Հավասարումը՝ մեկ տողով։** $x_0$-ում շոշափողն անցնում է $(x_0; f(x_0))$ կետով՝ $f'(x_0)$ թեքությամբ՝ $y = f(x_0) + f'(x_0)(x - x_0)$։

**Օրինակ՝ վերևի գրաֆիկի վրա։** $f(x) = e^x$-ի համար $x_0 = 0$-ում՝ $f(0) = 1$ և $f'(0) = 1$, ուրեմն շոշափողը $y = 1 + x$ է։ 0-ի մոտ ուղիղը և կորը գրեթե նույնն են՝ $e^{0{,}1} \\approx 1{,}105$, իսկ ուղիղը տալիս է $1{,}1$։

**Շոշափողները՝ որպես արագ գնահատումներ։** Կետի մոտ կորը շոշափողով փոխարինելը կոչվում է գծային մոտարկում։ $\\sqrt{4{,}1} \\approx 2 + \\dfrac{1}{4} \\cdot 0{,}1 = 2{,}025$, մինչդեռ ճշգրիտ արժեքը $2{,}0248\\ldots$ է։`,
      `**Уравнение в одну строку.** Касательная в $x_0$ проходит через $(x_0; f(x_0))$ с наклоном $f'(x_0)$: $y = f(x_0) + f'(x_0)(x - x_0)$.

**Пример на графике выше.** Для $f(x) = e^x$ в $x_0 = 0$: $f(0) = 1$ и $f'(0) = 1$, поэтому касательная $y = 1 + x$. Около 0 прямая и кривая почти совпадают: $e^{0{,}1} \\approx 1{,}105$, а прямая даёт $1{,}1$.

**Касательная как быстрая оценка.** Замена кривой касательной около точки называется линейным приближением. $\\sqrt{4{,}1} \\approx 2 + \\dfrac{1}{4} \\cdot 0{,}1 = 2{,}025$, а точное значение $2{,}0248\\ldots$`,
    ),
    ask(1, {
      en: ["The tangent to y = x² at x₀ = 1 is…", ["y = 2x − 1", "y = 2x + 1", "y = x + 1"], "f(1) = 1, f′(1) = 2: y = 1 + 2(x − 1) = 2x − 1."],
      hy: ["y = x²-ու շոշափողը x₀ = 1 կետում…", ["y = 2x − 1", "y = 2x + 1", "y = x + 1"], "f(1) = 1, f′(1) = 2․ y = 1 + 2(x − 1) = 2x − 1։"],
      ru: ["Касательная к y = x² в точке x₀ = 1 —", ["y = 2x − 1", "y = 2x + 1", "y = x + 1"], "f(1) = 1, f′(1) = 2: y = 1 + 2(x − 1) = 2x − 1."],
    }),
  ],
  "increasing-decreasing": [
    "plot mode=tangent fn=cubic x=-2 show=deriv",
    closer(
      `**The sign of f′ tells the direction.** Where $f'(x) > 0$ the tangents point upwards and the function increases; where $f'(x) < 0$ it decreases. Move the point above along $f(x) = x^3 - 3x$ and watch the slope change sign.

**A recipe.** Find $f'$, solve $f'(x) = 0$, mark the roots on a line and find the sign of $f'$ between them. For $x^3 - 3x$: $f'(x) = 3(x - 1)(x + 1)$, positive outside $[-1; 1]$, negative inside. So $f$ increases on $(-\\infty; -1]$ and $[1; +\\infty)$, decreases on $[-1; 1]$.

**Using it to prove inequalities.** If $f(0) = 0$ and $f' > 0$ for $x > 0$, then $f(x) > 0$ for $x > 0$. That is how $\\sin x < x$ is proved for $x > 0$.`,
      `**f′-ի նշանը ցույց է տալիս ուղղությունը։** Որտեղ $f'(x) > 0$, շոշափողներն ուղղված են վեր, և ֆունկցիան աճում է, որտեղ $f'(x) < 0$՝ նվազում։ Վերևում կետը շարժիր $f(x) = x^3 - 3x$-ի երկայնքով և հետևիր, թե ինչպես է թեքությունը փոխում նշանը։

**Բաղադրատոմս։** Գտիր $f'$-ը, լուծիր $f'(x) = 0$-ն, արմատները նշիր ուղղի վրա և գտիր $f'$-ի նշանը դրանց միջև։ $x^3 - 3x$-ի համար՝ $f'(x) = 3(x - 1)(x + 1)$, դրական $[-1; 1]$-ից դուրս, բացասական՝ ներսում։ Ուրեմն $f$-ը աճում է $(-\\infty; -1]$-ում և $[1; +\\infty)$-ում, նվազում՝ $[-1; 1]$-ում։

**Կիրառում անհավասարությունների ապացույցում։** Եթե $f(0) = 0$ և $f' > 0$, երբ $x > 0$, ապա $f(x) > 0$, երբ $x > 0$։ Այսպես է ապացուցվում $\\sin x < x$-ը $x > 0$-ի համար։`,
      `**Знак f′ показывает направление.** Где $f'(x) > 0$, касательные смотрят вверх и функция возрастает; где $f'(x) < 0$ — убывает. Двигай точку выше вдоль $f(x) = x^3 - 3x$ и смотри, как наклон меняет знак.

**Рецепт.** Найди $f'$, реши $f'(x) = 0$, отметь корни на прямой и определи знак $f'$ между ними. Для $x^3 - 3x$: $f'(x) = 3(x - 1)(x + 1)$, положительна вне $[-1; 1]$, отрицательна внутри. Значит, $f$ возрастает на $(-\\infty; -1]$ и $[1; +\\infty)$ и убывает на $[-1; 1]$.

**Применение к неравенствам.** Если $f(0) = 0$ и $f' > 0$ при $x > 0$, то $f(x) > 0$ при $x > 0$. Так доказывают $\\sin x < x$ при $x > 0$.`,
    ),
    ask(2, {
      en: ["Where does f(x) = x² − 6x decrease?", ["x ≥ 3", "x ≤ 3", "x ≤ 0"], "f′(x) = 2x − 6 is negative for x < 3."],
      hy: ["Որտե՞ղ է f(x) = x² − 6x-ը նվազում։", ["x ≥ 3", "x ≤ 3", "x ≤ 0"], "f′(x) = 2x − 6-ը բացասական է x < 3 դեպքում։"],
      ru: ["Где убывает f(x) = x² − 6x?", ["x ≥ 3", "x ≤ 3", "x ≤ 0"], "f′(x) = 2x − 6 отрицательна при x < 3."],
    }),
  ],
  extrema: [
    "plot mode=tangent fn=cubic x=-1 show=deriv",
    closer(
      `**At a peak the tangent is flat.** At $x = -1$ above, $f(x) = x^3 - 3x$ has a local maximum: the tangent is horizontal and $f'(-1) = 0$. At $x = 1$ there is a local minimum, also with $f' = 0$.

**f′ = 0 is not enough.** $y = x^3$ has $f'(0) = 0$, but no peak or valley at 0: the graph just pauses and keeps rising. An extremum needs $f'$ to **change sign**: from $+$ to $-$ for a maximum, from $-$ to $+$ for a minimum.

**Local, not global.** A local maximum is the highest point nearby, not necessarily the highest overall: $x^3 - 3x$ has a local maximum of 2 at $x = -1$, yet the function takes much larger values for big $x$.`,
      `**Գագաթում շոշափողը հորիզոնական է։** Վերևում $x = -1$-ում $f(x) = x^3 - 3x$-ն ունի տեղային մաքսիմում․ շոշափողը հորիզոնական է, և $f'(-1) = 0$։ $x = 1$-ում տեղային մինիմում է, նույնպես $f' = 0$-ով։

**f′ = 0-ն բավական չէ։** $y = x^3$-ի համար $f'(0) = 0$, բայց 0-ում ոչ գագաթ կա, ոչ փոս․ գրաֆիկը պարզապես կանգ է առնում և շարունակում աճել։ Էքստրեմումի համար $f'$-ը պետք է **փոխի նշանը**՝ $+$-ից $-$ մաքսիմումի համար, $-$-ից $+$ մինիմումի համար։

**Տեղային, ոչ թե գլոբալ։** Տեղային մաքսիմումը մոտակայքի ամենաբարձր կետն է, պարտադիր չէ՝ ամենաբարձրն ընդհանրապես․ $x^3 - 3x$-ն ունի 2 տեղային մաքսիմում $x = -1$-ում, բայց մեծ $x$-երի դեպքում ֆունկցիան ընդունում է շատ ավելի մեծ արժեքներ։`,
      `**На вершине касательная горизонтальна.** При $x = -1$ выше у $f(x) = x^3 - 3x$ локальный максимум: касательная горизонтальна, $f'(-1) = 0$. При $x = 1$ — локальный минимум, тоже с $f' = 0$.

**f′ = 0 — ещё не всё.** У $y = x^3$ $f'(0) = 0$, но в нуле нет ни вершины, ни впадины: график лишь замирает и растёт дальше. Для экстремума $f'$ должна **сменить знак**: с $+$ на $-$ для максимума, с $-$ на $+$ для минимума.

**Локальный, а не глобальный.** Локальный максимум — самая высокая точка поблизости, не обязательно вообще: у $x^3 - 3x$ локальный максимум 2 при $x = -1$, но при больших $x$ функция принимает гораздо большие значения.`,
    ),
    ask(2, {
      en: ["f′ changes sign from − to + at x = 2. At x = 2 the function has…", ["a maximum", "a minimum", "no extremum"], "Falling, then rising: a valley."],
      hy: ["x = 2 կետում f′-ը նշանը փոխում է −-ից +։ x = 2-ում ֆունկցիան ունի…", ["մաքսիմում", "մինիմում", "էքստրեմում չունի"], "Նախ նվազում, հետո աճում՝ փոս։"],
      ru: ["В точке x = 2 производная меняет знак с − на +. В x = 2 у функции…", ["максимум", "минимум", "нет экстремума"], "Сначала убывает, потом возрастает — впадина."],
    }),
  ],
  "sketching-functions": [
    closer(
      `**A fixed order of questions.** Domain; parity; intersections with the axes; $f'$, its zeros and signs (where the function rises and falls, extrema); behaviour at the ends of the domain. Then draw.

**Example: f(x) = x³ − 3x² + 4.** $f'(x) = 3x^2 - 6x = 3x(x - 2)$. Maximum at $x = 0$: $f(0) = 4$; minimum at $x = 2$: $f(2) = 0$, so the graph touches the x-axis there. It goes to $-\\infty$ on the left and $+\\infty$ on the right.

**Use a few extra points.** $f(-1) = 0$ and $f(3) = 4$ fix the shape. Five or six well-chosen points plus the derivative information give a faithful sketch.`,
      `**Հարցերի հաստատուն կարգ։** Որոշման տիրույթ, զույգություն, հատումներ առանցքների հետ, $f'$-ը, նրա զրոներն ու նշանները (որտեղ է ֆունկցիան աճում և նվազում, էքստրեմումներ), վարքն որոշման տիրույթի ծայրերում։ Հետո գծիր։

**Օրինակ՝ f(x) = x³ − 3x² + 4։** $f'(x) = 3x^2 - 6x = 3x(x - 2)$։ Մաքսիմում $x = 0$-ում՝ $f(0) = 4$, մինիմում $x = 2$-ում՝ $f(2) = 0$, ուրեմն գրաֆիկն այնտեղ դիպչում է x առանցքին։ Ձախում գնում է $-\\infty$, աջում՝ $+\\infty$։

**Օգտվիր մի քանի լրացուցիչ կետից։** $f(-1) = 0$-ն ու $f(3) = 4$-ը ամրացնում են ձևը։ Հինգ-վեց լավ ընտրված կետը և ածանցյալի տվյալները տալիս են հավատարիմ ուրվագիծ։`,
      `**Постоянный порядок вопросов.** Область определения; чётность; пересечения с осями; $f'$, её нули и знаки (где функция растёт и убывает, экстремумы); поведение на концах области определения. Затем рисуй.

**Пример: f(x) = x³ − 3x² + 4.** $f'(x) = 3x^2 - 6x = 3x(x - 2)$. Максимум при $x = 0$: $f(0) = 4$; минимум при $x = 2$: $f(2) = 0$, то есть график касается там оси x. Слева он уходит в $-\\infty$, справа в $+\\infty$.

**Добавь несколько точек.** $f(-1) = 0$ и $f(3) = 4$ закрепляют форму. Пять-шесть удачно выбранных точек плюс сведения о производной дают верный эскиз.`,
    ),
    ask(2, {
      en: ["f(x) = x³ − 3x² + 4 has a local minimum at…", ["x = 0", "x = 2", "x = −1"], "f′ = 3x(x − 2) changes from − to + at x = 2."],
      hy: ["f(x) = x³ − 3x² + 4-ն տեղային մինիմում ունի…", ["x = 0-ում", "x = 2-ում", "x = −1-ում"], "f′ = 3x(x − 2)-ը x = 2-ում փոխվում է −-ից +։"],
      ru: ["У f(x) = x³ − 3x² + 4 локальный минимум в точке…", ["x = 0", "x = 2", "x = −1"], "f′ = 3x(x − 2) меняет знак с − на + при x = 2."],
    }),
  ],
  "max-min-on-interval": [
    closer(
      `**Check the candidates, then compare.** On a closed interval $[a; b]$ the largest and smallest values are reached either at a point where $f' = 0$ inside the interval or at an end. Compute $f$ at all of them and pick.

**Example.** $f(x) = x^3 - 3x$ on $[0; 2]$: $f'(x) = 0$ at $x = 1$ (the root $-1$ is outside). $f(0) = 0$, $f(1) = -2$, $f(2) = 2$. Smallest $-2$, largest $2$.

**Do not forget the ends.** On $[0; 2]$ the largest value is at the end $x = 2$, not at any point where $f' = 0$. Many mistakes come from checking only the critical points.`,
      `**Ստուգիր թեկնածուներին, հետո համեմատիր։** $[a; b]$ փակ հատվածում ամենամեծ և ամենափոքր արժեքներն ընդունվում են կամ հատվածի ներսում այն կետում, որտեղ $f' = 0$, կամ ծայրում։ Հաշվիր $f$-ը բոլորում և ընտրիր։

**Օրինակ։** $f(x) = x^3 - 3x$-ը $[0; 2]$-ում․ $f'(x) = 0$, երբ $x = 1$ ($-1$ արմատը դուրս է)։ $f(0) = 0$, $f(1) = -2$, $f(2) = 2$։ Ամենափոքրը՝ $-2$, ամենամեծը՝ $2$։

**Մի մոռացիր ծայրերը։** $[0; 2]$-ում ամենամեծ արժեքը $x = 2$ ծայրում է, ոչ թե $f' = 0$ կետերից որևէ մեկում։ Շատ սխալներ գալիս են միայն կրիտիկական կետերը ստուգելուց։`,
      `**Проверь кандидатов и сравни.** На отрезке $[a; b]$ наибольшее и наименьшее значения достигаются либо в точке внутри отрезка, где $f' = 0$, либо на конце. Вычисли $f$ во всех этих точках и выбери.

**Пример.** $f(x) = x^3 - 3x$ на $[0; 2]$: $f'(x) = 0$ при $x = 1$ (корень $-1$ вне отрезка). $f(0) = 0$, $f(1) = -2$, $f(2) = 2$. Наименьшее $-2$, наибольшее $2$.

**Не забывай концы.** На $[0; 2]$ наибольшее значение — на конце $x = 2$, а не в точке, где $f' = 0$. Многие ошибки — от проверки одних только критических точек.`,
    ),
    ask(3, {
      en: ["The largest value of f(x) = x² on [−1; 3] is…", ["0", "1", "9"], "The candidates are f(0) = 0, f(−1) = 1 and f(3) = 9."],
      hy: ["f(x) = x²-ու ամենամեծ արժեքը [−1; 3]-ում…", ["0", "1", "9"], "Թեկնածուներն են f(0) = 0, f(−1) = 1 և f(3) = 9։"],
      ru: ["Наибольшее значение f(x) = x² на [−1; 3] равно…", ["0", "1", "9"], "Кандидаты: f(0) = 0, f(−1) = 1 и f(3) = 9."],
    }),
  ],
  optimisation: [
    closer(
      `**Turn the story into one function.** 40 m of fence around a rectangular garden: if one side is $x$, the other is $20 - x$, and the area is $S(x) = x(20 - x)$ for $0 < x < 20$.

**Then find its maximum.** $S'(x) = 20 - 2x = 0$ at $x = 10$, and $S'$ changes from $+$ to $-$ there. The best garden is a $10 \\times 10$ square with area 100 m².

**Change the story, change the answer.** If the garden leans against a wall and the fence covers only three sides, $S(x) = x(40 - 2x)$, the maximum is at $x = 10$, and the garden is $10 \\times 20$ with area 200 m². Always write down which quantity you are optimising and its domain.`,
      `**Պատմությունը դարձրու մեկ ֆունկցիա։** Ուղղանկյուն այգու շուրջ 40 մ ցանկապատ․ եթե մի կողմը $x$ է, մյուսը $20 - x$ է, իսկ մակերեսը՝ $S(x) = x(20 - x)$, $0 < x < 20$։

**Հետո գտիր նրա մաքսիմումը։** $S'(x) = 20 - 2x = 0$, երբ $x = 10$, և այնտեղ $S'$-ը փոխվում է $+$-ից $-$։ Լավագույն այգին $10 \\times 10$ քառակուսին է՝ 100 մ² մակերեսով։

**Փոխիր պատմությունը՝ կփոխվի պատասխանը։** Եթե այգին հենված է պատին, և ցանկապատը ծածկում է միայն երեք կողմը, $S(x) = x(40 - 2x)$, մաքսիմումը $x = 10$-ում է, և այգին $10 \\times 20$ է՝ 200 մ² մակերեսով։ Միշտ գրիր, թե որ մեծությունն ես օպտիմալացնում և որն է նրա որոշման տիրույթը։`,
      `**Преврати историю в одну функцию.** 40 м забора вокруг прямоугольного сада: если одна сторона $x$, другая $20 - x$, а площадь $S(x) = x(20 - x)$ при $0 < x < 20$.

**Затем найди её максимум.** $S'(x) = 20 - 2x = 0$ при $x = 10$, и там $S'$ меняет знак с $+$ на $-$. Лучший сад — квадрат $10 \\times 10$ площадью 100 м².

**Меняется история — меняется ответ.** Если сад примыкает к стене и забор идёт только с трёх сторон, $S(x) = x(40 - 2x)$, максимум при $x = 10$, и сад $10 \\times 20$ площадью 200 м². Всегда записывай, какую величину оптимизируешь и какова её область определения.`,
    ),
    ask(2, {
      en: ["Two positive numbers add up to 12. Their product is largest when they are…", ["4 and 8", "6 and 6", "2 and 10"], "P(x) = x(12 − x), P′ = 12 − 2x = 0 at x = 6."],
      hy: ["Երկու դրական թվերի գումարը 12 է։ Դրանց արտադրյալն ամենամեծն է, երբ դրանք են…", ["4 և 8", "6 և 6", "2 և 10"], "P(x) = x(12 − x), P′ = 12 − 2x = 0, երբ x = 6։"],
      ru: ["Сумма двух положительных чисел 12. Их произведение наибольшее, когда это…", ["4 и 8", "6 и 6", "2 и 10"], "P(x) = x(12 − x), P′ = 12 − 2x = 0 при x = 6."],
    }),
  ],
  "exponential-function": [
    "plot mode=exp a=2",
    closer(
      `**Always through (0; 1), always above the axis.** $a^0 = 1$ for every base, and $a^x > 0$ for every $x$. The graph hugs the x-axis on one side and shoots up on the other. Change the base above.

**a > 1 grows, 0 < a < 1 decays.** $2^x$ doubles with each step to the right; $\\left(\\dfrac{1}{2}\\right)^x = 2^{-x}$ is its mirror image in the y-axis and halves with each step.

**Faster than any power.** For large $x$, $2^x$ overtakes $x^2$, $x^{10}$, any power of $x$: $2^{10} = 1024 > 10^2$, and $2^{60} > 60^{10}$. Exponential growth always wins in the end.`,
      `**Միշտ (0; 1) կետով, միշտ առանցքից վեր։** $a^0 = 1$ ցանկացած հիմքի համար, և $a^x > 0$ ցանկացած $x$-ի համար։ Գրաֆիկը մի կողմից սեղմվում է x առանցքին, մյուս կողմից արագ բարձրանում։ Վերևում փոխիր հիմքը։

**a > 1-ը աճում է, 0 < a < 1-ը՝ նվազում։** $2^x$-ը ամեն քայլ դեպի աջ կրկնապատկվում է, $\\left(\\dfrac{1}{2}\\right)^x = 2^{-x}$-ը նրա հայելային պատկերն է y առանցքի նկատմամբ և ամեն քայլ կիսվում է։

**Ավելի արագ, քան ցանկացած աստիճան։** Մեծ $x$-երի դեպքում $2^x$-ը անցնում է $x^2$-ուն, $x^{10}$-ին, $x$-ի ցանկացած աստիճանի՝ $2^{10} = 1024 > 10^2$, և $2^{60} > 60^{10}$։ Ցուցչային աճը վերջում միշտ հաղթում է։`,
      `**Всегда через (0; 1), всегда выше оси.** $a^0 = 1$ при любом основании, и $a^x > 0$ при любом $x$. С одной стороны график прижимается к оси x, с другой — резко уходит вверх. Меняй основание выше.

**a > 1 — растёт, 0 < a < 1 — убывает.** $2^x$ удваивается с каждым шагом вправо; $\\left(\\dfrac{1}{2}\\right)^x = 2^{-x}$ — его зеркальное отражение относительно оси y, оно с каждым шагом уменьшается вдвое.

**Быстрее любой степени.** При больших $x$ функция $2^x$ обгоняет $x^2$, $x^{10}$ — любую степень $x$: $2^{10} = 1024 > 10^2$, и $2^{60} > 60^{10}$. Показательный рост в конце концов всегда побеждает.`,
    ),
    ask(1, {
      en: ["Which point lies on the graph of every y = aˣ?", ["(0; 1)", "(1; 0)", "(0; 0)"], "a⁰ = 1 for every base a."],
      hy: ["Ո՞ր կետն է գտնվում ցանկացած y = aˣ-ի գրաֆիկի վրա։", ["(0; 1)", "(1; 0)", "(0; 0)"], "a⁰ = 1 ցանկացած a հիմքի համար։"],
      ru: ["Какая точка лежит на графике любой функции y = aˣ?", ["(0; 1)", "(1; 0)", "(0; 0)"], "a⁰ = 1 при любом основании a."],
    }),
  ],
  "alg11-number-e": [
    "plot mode=tangent fn=exp x=1 show=deriv",
    closer(
      `**The function that is its own slope.** Turn on f′ above: for $e^x$ the two graphs coincide. At every point the slope of $e^x$ equals its height: $(e^x)' = e^x$. Among all bases $a$, only $e \\approx 2.718$ has this property.

**Where e comes from.** Put money in a bank at 100% a year. Paid once: ×2. Paid twice, 50% each half: $1.5^2 = 2.25$. Paid every day: $\\left(1 + \\dfrac{1}{365}\\right)^{365} \\approx 2.7146$. Paid continuously: exactly $e = \\displaystyle\\lim_{n \\to \\infty}\\left(1 + \\dfrac{1}{n}\\right)^n$.

**Other bases through e.** $a^x = e^{x \\ln a}$, so $(a^x)' = a^x \\ln a$. For $a = 2$: $(2^x)' = 2^x \\cdot 0.693\\ldots$`,
      `**Ֆունկցիա, որն ինքն իր թեքությունն է։** Վերևում միացրու f′-ը․ $e^x$-ի համար երկու գրաֆիկները համընկնում են։ Ամեն կետում $e^x$-ի թեքությունը հավասար է նրա բարձրությանը՝ $(e^x)' = e^x$։ Բոլոր $a$ հիմքերից միայն $e \\approx 2{,}718$-ն ունի այս հատկությունը։

**Որտեղից է գալիս e-ն։** Գումարը դիր բանկում տարեկան 100%-ով։ Վճարվում է մեկ անգամ՝ ×2։ Երկու անգամ՝ ամեն կեսին 50%՝ $1{,}5^2 = 2{,}25$։ Ամեն օր՝ $\\left(1 + \\dfrac{1}{365}\\right)^{365} \\approx 2{,}7146$։ Անընդհատ՝ ճիշտ $e = \\displaystyle\\lim_{n \\to \\infty}\\left(1 + \\dfrac{1}{n}\\right)^n$։

**Մյուս հիմքերը՝ e-ի միջոցով։** $a^x = e^{x \\ln a}$, ուրեմն $(a^x)' = a^x \\ln a$։ $a = 2$-ի համար՝ $(2^x)' = 2^x \\cdot 0{,}693\\ldots$`,
      `**Функция, которая сама себе наклон.** Включи f′ выше: у $e^x$ оба графика совпадают. В каждой точке наклон $e^x$ равен её высоте: $(e^x)' = e^x$. Из всех оснований $a$ этим свойством обладает только $e \\approx 2{,}718$.

**Откуда берётся e.** Положи деньги в банк под 100% годовых. Начисляют раз в год: ×2. Дважды, по 50% за полгода: $1{,}5^2 = 2{,}25$. Каждый день: $\\left(1 + \\dfrac{1}{365}\\right)^{365} \\approx 2{,}7146$. Непрерывно: ровно $e = \\displaystyle\\lim_{n \\to \\infty}\\left(1 + \\dfrac{1}{n}\\right)^n$.

**Другие основания через e.** $a^x = e^{x \\ln a}$, поэтому $(a^x)' = a^x \\ln a$. Для $a = 2$: $(2^x)' = 2^x \\cdot 0{,}693\\ldots$`,
    ),
    ask(2, {
      en: ["(e^(3x))′ = ?", ["e^(3x)", "3e^(3x)", "3x · e^(3x − 1)"], "Chain rule: e^(3x) · (3x)′ = 3e^(3x)."],
      hy: ["(e^(3x))′ = ?", ["e^(3x)", "3e^(3x)", "3x · e^(3x − 1)"], "Բարդ ֆունկցիայի կանոն՝ e^(3x) · (3x)′ = 3e^(3x)։"],
      ru: ["(e^(3x))′ = ?", ["e^(3x)", "3e^(3x)", "3x · e^(3x − 1)"], "Производная сложной функции: e^(3x) · (3x)′ = 3e^(3x)."],
    }),
  ],
  "exponential-equations": [
    closer(
      `**Same base on both sides.** $4^x = 32$: write both as powers of 2, $2^{2x} = 2^5$, so $2x = 5$, $x = 2.5$. Because $a^x$ is monotonic, equal powers mean equal exponents.

**A substitution for repeated powers.** $4^x - 3 \\cdot 2^x - 4 = 0$: let $t = 2^x > 0$. Then $t^2 - 3t - 4 = 0$, $t = 4$ or $t = -1$. Only $t = 4$ is possible, so $x = 2$.

**When the bases do not match, take a logarithm.** $3^x = 7$ gives $x = \\log_3 7 \\approx 1.77$. An answer with a logarithm is a perfectly good exact answer.`,
      `**Երկու կողմում՝ նույն հիմքը։** $4^x = 32$․ երկուսն էլ գրիր 2-ի աստիճաններով՝ $2^{2x} = 2^5$, ուրեմն $2x = 5$, $x = 2{,}5$։ Քանի որ $a^x$-ը մոնոտոն է, հավասար աստիճանները նշանակում են հավասար ցուցիչներ։

**Տեղադրում՝ կրկնվող աստիճանների համար։** $4^x - 3 \\cdot 2^x - 4 = 0$․ նշանակիր $t = 2^x > 0$։ Այդ դեպքում $t^2 - 3t - 4 = 0$, $t = 4$ կամ $t = -1$։ Հնարավոր է միայն $t = 4$-ը, ուրեմն $x = 2$։

**Երբ հիմքերը չեն համընկնում, լոգարիթմիր։** $3^x = 7$-ից $x = \\log_3 7 \\approx 1{,}77$։ Լոգարիթմով պատասխանը լիովին ճշգրիտ պատասխան է։`,
      `**Одинаковое основание с обеих сторон.** $4^x = 32$: запиши обе части степенями 2, $2^{2x} = 2^5$, значит, $2x = 5$, $x = 2{,}5$. Функция $a^x$ монотонна, поэтому равные степени означают равные показатели.

**Замена для повторяющихся степеней.** $4^x - 3 \\cdot 2^x - 4 = 0$: пусть $t = 2^x > 0$. Тогда $t^2 - 3t - 4 = 0$, $t = 4$ или $t = -1$. Возможно только $t = 4$, поэтому $x = 2$.

**Если основания не сводятся — логарифмируй.** $3^x = 7$ даёт $x = \\log_3 7 \\approx 1{,}77$. Ответ с логарифмом — вполне точный ответ.`,
    ),
    ask(1, {
      en: ["Solve 9^x = 27.", ["x = 3/2", "x = 3", "x = 2/3"], "3^(2x) = 3³, so 2x = 3."],
      hy: ["Լուծի՛ր 9^x = 27։", ["x = 3/2", "x = 3", "x = 2/3"], "3^(2x) = 3³, ուրեմն 2x = 3։"],
      ru: ["Реши 9^x = 27.", ["x = 3/2", "x = 3", "x = 2/3"], "3^(2x) = 3³, значит, 2x = 3."],
    }),
  ],
  "exponential-inequalities": [
    "plot mode=exp a=0.5",
    closer(
      `**The base decides whether the sign flips.** For $a > 1$ the function $a^x$ increases, so $a^x > a^c$ means $x > c$. For $0 < a < 1$ it decreases, as in the graph above, so the sign turns around: $\\left(\\dfrac{1}{2}\\right)^x > \\dfrac{1}{8}$ means $x < 3$.

**Write both sides with one base.** $2^{x+1} \\le 16$: $2^{x+1} \\le 2^4$, base 2 > 1, so $x + 1 \\le 4$, $x \\le 3$.

**Positivity helps too.** $3^x > -5$ holds for all $x$, because $3^x$ is always positive; $3^x < 0$ never holds.`,
      `**Հիմքն է որոշում՝ նշանը շրջվո՞ւմ է։** $a > 1$ դեպքում $a^x$-ը աճում է, ուստի $a^x > a^c$ նշանակում է $x > c$։ $0 < a < 1$ դեպքում այն նվազում է, ինչպես վերևի գրաֆիկում, ուստի նշանը շրջվում է՝ $\\left(\\dfrac{1}{2}\\right)^x > \\dfrac{1}{8}$ նշանակում է $x < 3$։

**Երկու կողմն էլ գրիր մեկ հիմքով։** $2^{x+1} \\le 16$․ $2^{x+1} \\le 2^4$, հիմքը՝ 2 > 1, ուրեմն $x + 1 \\le 4$, $x \\le 3$։

**Դրականությունն էլ է օգնում։** $3^x > -5$-ը ճիշտ է բոլոր $x$-երի համար, քանի որ $3^x$-ը միշտ դրական է, իսկ $3^x < 0$-ն երբեք ճիշտ չէ։`,
      `**Основание решает, меняется ли знак.** При $a > 1$ функция $a^x$ возрастает, поэтому $a^x > a^c$ означает $x > c$. При $0 < a < 1$ она убывает, как на графике выше, и знак меняется: $\\left(\\dfrac{1}{2}\\right)^x > \\dfrac{1}{8}$ означает $x < 3$.

**Запиши обе части с одним основанием.** $2^{x+1} \\le 16$: $2^{x+1} \\le 2^4$, основание 2 > 1, поэтому $x + 1 \\le 4$, $x \\le 3$.

**Помогает и положительность.** $3^x > -5$ верно при всех $x$, потому что $3^x$ всегда положительно; $3^x < 0$ не выполняется никогда.`,
    ),
    ask(2, {
      en: ["Solve (1/3)^x ≥ 9.", ["x ≥ −2", "x ≤ −2", "x ≤ 2"], "9 = (1/3)^(−2); the base is less than 1, so the sign flips: x ≤ −2."],
      hy: ["Լուծի՛ր (1/3)^x ≥ 9։", ["x ≥ −2", "x ≤ −2", "x ≤ 2"], "9 = (1/3)^(−2), հիմքը 1-ից փոքր է, ուստի նշանը շրջվում է՝ x ≤ −2։"],
      ru: ["Реши (1/3)^x ≥ 9.", ["x ≥ −2", "x ≤ −2", "x ≤ 2"], "9 = (1/3)^(−2); основание меньше 1, знак меняется: x ≤ −2."],
    }),
  ],
  "exponential-growth": [
    "seq mode=geom b=16 q=0.5 n=8",
    closer(
      `**Equal times, equal factors.** Exponential change multiplies by the same factor in equal time intervals: $N(t) = N_0 \\cdot q^{t/T}$. The columns above halve at every step, like a radioactive sample after each half-life.

**Half-life.** Carbon-14 has a half-life of about 5730 years. A bone with a quarter of the original carbon-14 is about two half-lives, roughly 11,500 years, old. That is how radiocarbon dating works.

**Doubling time.** A population growing 7% a year doubles in about 10 years, since $1.07^{10} \\approx 1.97$. A handy rule: doubling time ≈ 70 ÷ (percentage growth).`,
      `**Հավասար ժամանակներ՝ հավասար արտադրիչներ։** Ցուցչային փոփոխությունը հավասար ժամանակահատվածներում բազմապատկում է նույն թվով՝ $N(t) = N_0 \\cdot q^{t/T}$։ Վերևի սյուներն ամեն քայլ կիսվում են, ինչպես ռադիոակտիվ նմուշը՝ ամեն կիսատրոհման պարբերությունից հետո։

**Կիսատրոհման պարբերություն։** Ածխածին-14-ի կիսատրոհման պարբերությունը մոտ 5730 տարի է։ Ոսկորը, որում մնացել է սկզբնական ածխածին-14-ի քառորդը, մոտ երկու կիսատրոհման պարբերության՝ մոտ 11 500 տարվա հնություն ունի։ Այսպես է աշխատում ռադիոածխածնային թվագրումը։

**Կրկնապատկման ժամանակը։** Տարեկան 7%-ով աճող բնակչությունը կրկնապատկվում է մոտ 10 տարում, քանի որ $1{,}07^{10} \\approx 1{,}97$։ Հարմար կանոն՝ կրկնապատկման ժամանակը ≈ 70 ÷ (աճի տոկոսը)։`,
      `**Равные промежутки — равные множители.** Показательное изменение за равные промежутки времени умножает величину на одно и то же число: $N(t) = N_0 \\cdot q^{t/T}$. Столбики выше на каждом шаге уменьшаются вдвое, как радиоактивный образец после каждого периода полураспада.

**Период полураспада.** У углерода-14 период полураспада около 5730 лет. Кости, в которой осталась четверть исходного углерода-14, около двух периодов полураспада, примерно 11 500 лет. Так работает радиоуглеродное датирование.

**Время удвоения.** Население, растущее на 7% в год, удваивается примерно за 10 лет, ведь $1{,}07^{10} \\approx 1{,}97$. Удобное правило: время удвоения ≈ 70 ÷ (процент роста).`,
    ),
    ask(2, {
      en: ["A substance has a half-life of 3 days. What fraction is left after 9 days?", ["1/3", "1/8", "1/9"], "9 days are 3 half-lives: (1/2)³ = 1/8."],
      hy: ["Նյութի կիսատրոհման պարբերությունը 3 օր է։ Ո՞ր մասն է մնում 9 օր հետո։", ["1/3", "1/8", "1/9"], "9 օրը 3 կիսատրոհման պարբերություն է՝ (1/2)³ = 1/8։"],
      ru: ["Период полураспада вещества 3 дня. Какая доля останется через 9 дней?", ["1/3", "1/8", "1/9"], "9 дней — это 3 периода полураспада: (1/2)³ = 1/8."],
    }),
  ],
  "logarithm-definition": [
    "plot mode=log a=2",
    closer(
      `**A logarithm answers "which power?".** $\\log_a b$ is the exponent to which $a$ must be raised to get $b$: $\\log_2 8 = 3$ because $2^3 = 8$; $\\log_{10} 0.01 = -2$ because $10^{-2} = 0.01$.

**The mirror of the exponent.** The graph of $y = \\log_2 x$ above is the graph of $y = 2^x$ reflected in the line $y = x$. It passes through $(1; 0)$, exists only for $x > 0$, and grows very slowly: $\\log_2 1024 = 10$.

**Two facts that follow at once.** $a^{\\log_a b} = b$ and $\\log_a a^c = c$. The logarithm and the power undo each other.`,
      `**Լոգարիթմը պատասխանում է «ո՞ր աստիճանը» հարցին։** $\\log_a b$-ն այն ցուցիչն է, որով պետք է $a$-ն բարձրացնել՝ $b$ ստանալու համար՝ $\\log_2 8 = 3$, քանի որ $2^3 = 8$, $\\log_{10} 0{,}01 = -2$, քանի որ $10^{-2} = 0{,}01$։

**Ցուցչայինի հայելին։** Վերևի $y = \\log_2 x$-ի գրաֆիկը $y = 2^x$-ի գրաֆիկն է՝ արտապատկերված $y = x$ ուղղի նկատմամբ։ Այն անցնում է $(1; 0)$-ով, գոյություն ունի միայն $x > 0$-ի համար և աճում է շատ դանդաղ՝ $\\log_2 1024 = 10$։

**Երկու փաստ, որ անմիջապես հետևում են։** $a^{\\log_a b} = b$ և $\\log_a a^c = c$։ Լոգարիթմն ու աստիճանը վերացնում են միմյանց։`,
      `**Логарифм отвечает на вопрос «какая степень?».** $\\log_a b$ — показатель, в который нужно возвести $a$, чтобы получить $b$: $\\log_2 8 = 3$, потому что $2^3 = 8$; $\\log_{10} 0{,}01 = -2$, потому что $10^{-2} = 0{,}01$.

**Зеркало показательной функции.** График $y = \\log_2 x$ выше — это график $y = 2^x$, отражённый относительно прямой $y = x$. Он проходит через $(1; 0)$, существует только при $x > 0$ и растёт очень медленно: $\\log_2 1024 = 10$.

**Два факта, которые следуют сразу.** $a^{\\log_a b} = b$ и $\\log_a a^c = c$. Логарифм и степень отменяют друг друга.`,
    ),
    ask(2, {
      en: ["log₃ (1/9) = ?", ["2", "−2", "1/2"], "3^(−2) = 1/9."],
      hy: ["log₃ (1/9) = ?", ["2", "−2", "1/2"], "3^(−2) = 1/9։"],
      ru: ["log₃ (1/9) = ?", ["2", "−2", "1/2"], "3^(−2) = 1/9."],
    }),
  ],
  "logarithm-properties": [
    closer(
      `**Logarithms turn multiplication into addition.** $\\log_a(bc) = \\log_a b + \\log_a c$, $\\log_a \\dfrac{b}{c} = \\log_a b - \\log_a c$, $\\log_a b^k = k \\log_a b$. They are the exponent rules, read in another language.

**Examples.** $\\log_6 4 + \\log_6 9 = \\log_6 36 = 2$. $\\log_2 80 - \\log_2 5 = \\log_2 16 = 4$. $\\log_3 81^5 = 5 \\cdot 4 = 20$.

**Common traps.** $\\log(b + c)$ is **not** $\\log b + \\log c$, and $\\dfrac{\\log b}{\\log c}$ is **not** $\\log \\dfrac{b}{c}$. Before slide rules and calculators, these properties let people multiply large numbers using tables of logarithms.`,
      `**Լոգարիթմները բազմապատկումը դարձնում են գումարում։** $\\log_a(bc) = \\log_a b + \\log_a c$, $\\log_a \\dfrac{b}{c} = \\log_a b - \\log_a c$, $\\log_a b^k = k \\log_a b$։ Դրանք աստիճանների կանոններն են՝ կարդացված այլ լեզվով։

**Օրինակներ։** $\\log_6 4 + \\log_6 9 = \\log_6 36 = 2$։ $\\log_2 80 - \\log_2 5 = \\log_2 16 = 4$։ $\\log_3 81^5 = 5 \\cdot 4 = 20$։

**Տարածված թակարդներ։** $\\log(b + c)$-ն $\\log b + \\log c$ **չէ**, և $\\dfrac{\\log b}{\\log c}$-ն $\\log \\dfrac{b}{c}$ **չէ**։ Մինչև լոգարիթմական քանոնները և հաշվիչներն այս հատկությունները թույլ էին տալիս մեծ թվեր բազմապատկել լոգարիթմների աղյուսակներով։`,
      `**Логарифмы превращают умножение в сложение.** $\\log_a(bc) = \\log_a b + \\log_a c$, $\\log_a \\dfrac{b}{c} = \\log_a b - \\log_a c$, $\\log_a b^k = k \\log_a b$. Это правила степеней, прочитанные на другом языке.

**Примеры.** $\\log_6 4 + \\log_6 9 = \\log_6 36 = 2$. $\\log_2 80 - \\log_2 5 = \\log_2 16 = 4$. $\\log_3 81^5 = 5 \\cdot 4 = 20$.

**Частые ловушки.** $\\log(b + c)$ — **не** $\\log b + \\log c$, а $\\dfrac{\\log b}{\\log c}$ — **не** $\\log \\dfrac{b}{c}$. До логарифмических линеек и калькуляторов эти свойства позволяли перемножать большие числа по таблицам логарифмов.`,
    ),
    fact(
      "John Napier published the first tables of logarithms in 1614. The astronomer Laplace later said that logarithms, by shortening the labours, doubled the life of the astronomer.",
      "Ջոն Նեպերը լոգարիթմների առաջին աղյուսակները հրատարակեց 1614 թվականին։ Աստղագետ Լապլասը հետագայում ասել է, որ լոգարիթմները, կրճատելով աշխատանքը, կրկնապատկեցին աստղագետի կյանքը։",
      "Джон Непер опубликовал первые таблицы логарифмов в 1614 году. Астроном Лаплас позже говорил, что логарифмы, сократив труд, удвоили жизнь астронома.",
    ),
    ask(1, {
      en: ["log₂ 12 − log₂ 3 = ?", ["2", "log₂ 9", "4"], "log₂ (12/3) = log₂ 4 = 2."],
      hy: ["log₂ 12 − log₂ 3 = ?", ["2", "log₂ 9", "4"], "log₂ (12/3) = log₂ 4 = 2։"],
      ru: ["log₂ 12 − log₂ 3 = ?", ["2", "log₂ 9", "4"], "log₂ (12/3) = log₂ 4 = 2."],
    }),
  ],
  "change-of-base": [
    closer(
      `**Any base through any other.** $\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$. A calculator only knows $\\lg$ (base 10) and $\\ln$ (base $e$), so $\\log_2 7 = \\dfrac{\\ln 7}{\\ln 2} \\approx \\dfrac{1.946}{0.693} \\approx 2.81$.

**Two useful special cases.** $\\log_a b = \\dfrac{1}{\\log_b a}$, so $\\log_8 2 = \\dfrac{1}{3}$. And $\\log_{a^k} b = \\dfrac{1}{k}\\log_a b$: $\\log_4 32 = \\dfrac{1}{2}\\log_2 32 = 2.5$.

**Decimal logarithms count digits.** $\\lg 1000 = 3$, and a whole number $N$ has $\\lfloor \\lg N \\rfloor + 1$ digits. Since $\\lg 2 \\approx 0.301$, $2^{100}$ has $\\lfloor 30.1 \\rfloor + 1 = 31$ digits.`,
      `**Ցանկացած հիմք՝ ցանկացած այլ հիմքի միջոցով։** $\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$։ Հաշվիչը գիտի միայն $\\lg$-ը (10 հիմքով) և $\\ln$-ը ($e$ հիմքով), ուստի $\\log_2 7 = \\dfrac{\\ln 7}{\\ln 2} \\approx \\dfrac{1{,}946}{0{,}693} \\approx 2{,}81$։

**Երկու օգտակար մասնավոր դեպք։** $\\log_a b = \\dfrac{1}{\\log_b a}$, ուրեմն $\\log_8 2 = \\dfrac{1}{3}$։ Եվ $\\log_{a^k} b = \\dfrac{1}{k}\\log_a b$՝ $\\log_4 32 = \\dfrac{1}{2}\\log_2 32 = 2{,}5$։

**Տասնորդական լոգարիթմները հաշվում են թվանշանները։** $\\lg 1000 = 3$, և $N$ ամբողջ թիվն ունի $\\lfloor \\lg N \\rfloor + 1$ թվանշան։ Քանի որ $\\lg 2 \\approx 0{,}301$, $2^{100}$-ն ունի $\\lfloor 30{,}1 \\rfloor + 1 = 31$ թվանշան։`,
      `**Любое основание через любое другое.** $\\log_a b = \\dfrac{\\log_c b}{\\log_c a}$. Калькулятор знает только $\\lg$ (основание 10) и $\\ln$ (основание $e$), поэтому $\\log_2 7 = \\dfrac{\\ln 7}{\\ln 2} \\approx \\dfrac{1{,}946}{0{,}693} \\approx 2{,}81$.

**Два полезных частных случая.** $\\log_a b = \\dfrac{1}{\\log_b a}$, поэтому $\\log_8 2 = \\dfrac{1}{3}$. И $\\log_{a^k} b = \\dfrac{1}{k}\\log_a b$: $\\log_4 32 = \\dfrac{1}{2}\\log_2 32 = 2{,}5$.

**Десятичные логарифмы считают цифры.** $\\lg 1000 = 3$, а у натурального числа $N$ ровно $\\lfloor \\lg N \\rfloor + 1$ цифр. Так как $\\lg 2 \\approx 0{,}301$, у $2^{100}$ всего $\\lfloor 30{,}1 \\rfloor + 1 = 31$ цифра.`,
    ),
    ask(1, {
      en: ["log₉ 27 = ?", ["3/2", "3", "2/3"], "log₉ 27 = log₃ 27 / log₃ 9 = 3/2."],
      hy: ["log₉ 27 = ?", ["3/2", "3", "2/3"], "log₉ 27 = log₃ 27 / log₃ 9 = 3/2։"],
      ru: ["log₉ 27 = ?", ["3/2", "3", "2/3"], "log₉ 27 = log₃ 27 / log₃ 9 = 3/2."],
    }),
  ],
  "logarithmic-function": [
    "plot mode=log a=0.5",
    closer(
      `**Only positive x, any y.** $y = \\log_a x$ is defined for $x > 0$ and takes every real value. Every such graph passes through $(1; 0)$, and the y-axis is a vertical asymptote.

**The base decides the direction.** For $a > 1$ the logarithm increases; for $0 < a < 1$ it decreases, as with base $\\dfrac{1}{2}$ above. The switch "Show the exponent" draws $a^x$, its mirror image in $y = x$.

**Slow growth is useful.** $\\log_2 x$ reaches 10 at $x = 1024$ and only 20 at about a million. That is why logarithmic scales (decibels, the Richter scale, pH) squeeze huge ranges into small numbers.`,
      `**Միայն դրական x, ցանկացած y։** $y = \\log_a x$-ը որոշված է $x > 0$-ի համար և ընդունում է բոլոր իրական արժեքները։ Այդպիսի յուրաքանչյուր գրաֆիկ անցնում է $(1; 0)$-ով, իսկ y առանցքն ուղղաձիգ ասիմպտոտ է։

**Հիմքն է որոշում ուղղությունը։** $a > 1$ դեպքում լոգարիթմն աճում է, $0 < a < 1$ դեպքում՝ նվազում, ինչպես վերևում $\\dfrac{1}{2}$ հիմքով։ «Ցույց տալ ցուցչայինը» անջատիչը գծում է $a^x$-ը՝ նրա հայելային պատկերը $y = x$-ի նկատմամբ։

**Դանդաղ աճն օգտակար է։** $\\log_2 x$-ը 10-ի հասնում է $x = 1024$-ում, իսկ 20-ի՝ միայն մոտ մեկ միլիոնում։ Ահա թե ինչու են լոգարիթմական սանդղակները (դեցիբելներ, Ռիխտերի սանդղակ, pH) հսկայական միջակայքերը սեղմում փոքր թվերի մեջ։`,
      `**Только положительные x, любые y.** $y = \\log_a x$ определена при $x > 0$ и принимает все действительные значения. Каждый такой график проходит через $(1; 0)$, а ось y — вертикальная асимптота.

**Основание определяет направление.** При $a > 1$ логарифм возрастает, при $0 < a < 1$ — убывает, как с основанием $\\dfrac{1}{2}$ выше. Переключатель «Показать показательную» рисует $a^x$ — зеркальное отражение относительно $y = x$.

**Медленный рост полезен.** $\\log_2 x$ достигает 10 при $x = 1024$ и всего 20 при примерно миллионе. Поэтому логарифмические шкалы (децибелы, шкала Рихтера, pH) умещают огромные диапазоны в небольшие числа.`,
    ),
    ask(1, {
      en: ["What is the domain of y = log₂ (x − 3)?", ["x > 3", "x ≥ 3", "x > 0"], "The argument of a logarithm must be positive: x − 3 > 0."],
      hy: ["Ո՞րն է y = log₂ (x − 3)-ի որոշման տիրույթը։", ["x > 3", "x ≥ 3", "x > 0"], "Լոգարիթմի արգումենտը պետք է դրական լինի՝ x − 3 > 0։"],
      ru: ["Какова область определения y = log₂ (x − 3)?", ["x > 3", "x ≥ 3", "x > 0"], "Аргумент логарифма должен быть положительным: x − 3 > 0."],
    }),
  ],
  "logarithmic-equations": [
    closer(
      `**Write the conditions first.** Every argument of a logarithm must be positive, and the base positive and not 1. Then solve, and keep only the roots that satisfy the conditions.

**An example.** $\\log_2 x + \\log_2(x - 2) = 3$, with $x > 2$. Combine: $\\log_2(x(x - 2)) = 3$, so $x^2 - 2x = 8$, $x = 4$ or $x = -2$. Only $x = 4$ satisfies $x > 2$.

**Why extra roots appear.** Combining two logarithms into one widens the domain: $\\log_2(x(x - 2))$ also exists for $x < 0$, where the original two logarithms did not. The conditions written at the start filter this out.`,
      `**Նախ գրիր պայմանները։** Լոգարիթմի յուրաքանչյուր արգումենտ պետք է դրական լինի, իսկ հիմքը՝ դրական և 1-ից տարբեր։ Հետո լուծիր և պահիր միայն պայմաններին բավարարող արմատները։

**Օրինակ։** $\\log_2 x + \\log_2(x - 2) = 3$, $x > 2$։ Միավորիր՝ $\\log_2(x(x - 2)) = 3$, ուրեմն $x^2 - 2x = 8$, $x = 4$ կամ $x = -2$։ Միայն $x = 4$-ն է բավարարում $x > 2$-ին։

**Ինչու են հայտնվում ավելորդ արմատներ։** Երկու լոգարիթմը մեկի մեջ միավորելիս որոշման տիրույթն ընդլայնվում է․ $\\log_2(x(x - 2))$-ը գոյություն ունի նաև $x < 0$-ի դեպքում, որտեղ սկզբնական երկու լոգարիթմները չկային։ Սկզբում գրված պայմանները զտում են դա։`,
      `**Сначала выпиши условия.** Каждый аргумент логарифма должен быть положительным, а основание — положительным и не равным 1. Затем реши и оставь только корни, удовлетворяющие условиям.

**Пример.** $\\log_2 x + \\log_2(x - 2) = 3$ при $x > 2$. Объединяем: $\\log_2(x(x - 2)) = 3$, значит, $x^2 - 2x = 8$, $x = 4$ или $x = -2$. Условию $x > 2$ удовлетворяет только $x = 4$.

**Откуда лишние корни.** Объединение двух логарифмов в один расширяет область определения: $\\log_2(x(x - 2))$ существует и при $x < 0$, где исходных логарифмов не было. Условия, записанные в начале, это отсеивают.`,
    ),
    ask(1, {
      en: ["Solve log₃ (2x − 1) = 2.", ["x = 5", "x = 4", "x = 3.5"], "2x − 1 = 3² = 9, so x = 5 (and 2 · 5 − 1 > 0)."],
      hy: ["Լուծի՛ր log₃ (2x − 1) = 2։", ["x = 5", "x = 4", "x = 3,5"], "2x − 1 = 3² = 9, ուրեմն x = 5 (և 2 · 5 − 1 > 0)։"],
      ru: ["Реши log₃ (2x − 1) = 2.", ["x = 5", "x = 4", "x = 3,5"], "2x − 1 = 3² = 9, значит, x = 5 (и 2 · 5 − 1 > 0)."],
    }),
  ],
  "logarithmic-inequalities": [
    closer(
      `**Two things to remember at once.** The arguments must be positive, and the base decides whether the sign flips. For $a > 1$: $\\log_a f > \\log_a g$ means $f > g > 0$. For $0 < a < 1$: it means $0 < f < g$.

**An example with base > 1.** $\\log_2(x - 1) < 3$: $0 < x - 1 < 8$, so $1 < x < 9$. Forgetting the left part would wrongly include $x \\le 1$, where the logarithm does not exist.

**An example with base < 1.** $\\log_{1/3} x > -2$: $-2 = \\log_{1/3} 9$, and the base is less than 1, so $0 < x < 9$.`,
      `**Երկու բան միաժամանակ հիշելու համար։** Արգումենտները պետք է դրական լինեն, և հիմքն է որոշում՝ նշանը շրջվո՞ւմ է։ $a > 1$ դեպքում՝ $\\log_a f > \\log_a g$ նշանակում է $f > g > 0$։ $0 < a < 1$ դեպքում՝ $0 < f < g$։

**Օրինակ 1-ից մեծ հիմքով։** $\\log_2(x - 1) < 3$․ $0 < x - 1 < 8$, ուրեմն $1 < x < 9$։ Ձախ մասը մոռանալիս սխալմամբ կներառվեր $x \\le 1$-ը, որտեղ լոգարիթմը գոյություն չունի։

**Օրինակ 1-ից փոքր հիմքով։** $\\log_{1/3} x > -2$․ $-2 = \\log_{1/3} 9$, իսկ հիմքը 1-ից փոքր է, ուրեմն $0 < x < 9$։`,
      `**Помни две вещи сразу.** Аргументы должны быть положительными, а основание решает, меняется ли знак. При $a > 1$: $\\log_a f > \\log_a g$ означает $f > g > 0$. При $0 < a < 1$: $0 < f < g$.

**Пример с основанием > 1.** $\\log_2(x - 1) < 3$: $0 < x - 1 < 8$, значит, $1 < x < 9$. Если забыть левую часть, в ответ ошибочно попадут $x \\le 1$, где логарифм не существует.

**Пример с основанием < 1.** $\\log_{1/3} x > -2$: $-2 = \\log_{1/3} 9$, а основание меньше 1, поэтому $0 < x < 9$.`,
    ),
    ask(2, {
      en: ["Solve log₂ x > 3.", ["0 < x < 8", "x > 8", "x > 6"], "Base 2 > 1, so x > 2³ = 8 (which is also positive)."],
      hy: ["Լուծի՛ր log₂ x > 3։", ["0 < x < 8", "x > 8", "x > 6"], "Հիմքը՝ 2 > 1, ուրեմն x > 2³ = 8 (որը նաև դրական է)։"],
      ru: ["Реши log₂ x > 3.", ["0 < x < 8", "x > 8", "x > 6"], "Основание 2 > 1, поэтому x > 2³ = 8 (и это положительно)."],
    }),
  ],
  antiderivative: [
    closer(
      `**Differentiation run backwards.** $F$ is an antiderivative of $f$ if $F' = f$. Since $(x^3)' = 3x^2$, an antiderivative of $3x^2$ is $x^3$.

**Always "+ C".** $x^3 + 5$ and $x^3 - 2$ have the same derivative, so the antiderivatives of $3x^2$ are all $x^3 + C$. Their graphs are copies of one another, shifted up and down.

**Finding C from one point.** If a car's speed is $v(t) = 2t$ and at $t = 0$ it is 5 m from the start, then its position is $s(t) = t^2 + C$ with $s(0) = 5$, so $s(t) = t^2 + 5$.`,
      `**Ածանցումը՝ հակառակ ուղղությամբ։** $F$-ը $f$-ի նախնական է, եթե $F' = f$։ Քանի որ $(x^3)' = 3x^2$, $3x^2$-ու նախնականը $x^3$-ն է։

**Միշտ «+ C»։** $x^3 + 5$-ը և $x^3 - 2$-ը ունեն նույն ածանցյալը, ուստի $3x^2$-ու նախնականները բոլորն են $x^3 + C$։ Դրանց գրաֆիկները միմյանց պատճեններն են՝ տեղաշարժված վեր ու վար։

**C-ն գտնել մեկ կետով։** Եթե մեքենայի արագությունը $v(t) = 2t$ է, և $t = 0$-ում այն մեկնակետից 5 մ հեռու է, ապա նրա դիրքը $s(t) = t^2 + C$ է, $s(0) = 5$, ուրեմն $s(t) = t^2 + 5$։`,
      `**Дифференцирование задом наперёд.** $F$ — первообразная $f$, если $F' = f$. Так как $(x^3)' = 3x^2$, первообразная $3x^2$ — это $x^3$.

**Всегда «+ C».** У $x^3 + 5$ и $x^3 - 2$ одна и та же производная, поэтому все первообразные $3x^2$ — это $x^3 + C$. Их графики — копии друг друга, сдвинутые вверх и вниз.

**C из одной точки.** Если скорость машины $v(t) = 2t$ и при $t = 0$ она в 5 м от старта, то её координата $s(t) = t^2 + C$ с $s(0) = 5$, значит, $s(t) = t^2 + 5$.`,
    ),
    ask(2, {
      en: ["Which is an antiderivative of f(x) = cos x?", ["−sin x", "sin x + 7", "cos x"], "(sin x + 7)′ = cos x."],
      hy: ["Ո՞րն է f(x) = cos x-ի նախնականը։", ["−sin x", "sin x + 7", "cos x"], "(sin x + 7)′ = cos x։"],
      ru: ["Какая функция — первообразная f(x) = cos x?", ["−sin x", "sin x + 7", "cos x"], "(sin x + 7)′ = cos x."],
    }),
  ],
  "antiderivative-rules": [
    closer(
      `**The power rule backwards.** An antiderivative of $x^n$ is $\\dfrac{x^{n+1}}{n + 1} + C$ for $n \\ne -1$: raise the power by one, then divide by the new power. For $n = -1$: $\\ln|x| + C$.

**Sums and constants pass through.** $\\int (6x^2 - 4x + 1)\\,dx = 2x^3 - 2x^2 + x + C$. Check by differentiating: it gives back $6x^2 - 4x + 1$.

**A linear inside divides by its slope.** An antiderivative of $\\cos 3x$ is $\\dfrac{1}{3}\\sin 3x$, of $e^{2x}$ is $\\dfrac{1}{2}e^{2x}$, of $(2x + 1)^4$ is $\\dfrac{(2x + 1)^5}{10}$: it is the chain rule in reverse.`,
      `**Աստիճանի կանոնը՝ հակառակ ուղղությամբ։** $x^n$-ի նախնականը $\\dfrac{x^{n+1}}{n + 1} + C$ է, երբ $n \\ne -1$․ մեկով բարձրացրու աստիճանը, հետո բաժանիր նոր աստիճանի վրա։ $n = -1$-ի դեպքում՝ $\\ln|x| + C$։

**Գումարներն ու հաստատուններն անցնում են։** $\\int (6x^2 - 4x + 1)\\,dx = 2x^3 - 2x^2 + x + C$։ Ստուգիր՝ ածանցելով․ ստացվում է նորից $6x^2 - 4x + 1$։

**Գծային ներքին ֆունկցիան բաժանվում է իր թեքության վրա։** $\\cos 3x$-ի նախնականը $\\dfrac{1}{3}\\sin 3x$ է, $e^{2x}$-ինը՝ $\\dfrac{1}{2}e^{2x}$, $(2x + 1)^4$-ինը՝ $\\dfrac{(2x + 1)^5}{10}$․ դա բարդ ֆունկցիայի կանոնն է՝ հակառակ ուղղությամբ։`,
      `**Правило степени наоборот.** Первообразная $x^n$ — это $\\dfrac{x^{n+1}}{n + 1} + C$ при $n \\ne -1$: подними степень на единицу и раздели на новую степень. При $n = -1$: $\\ln|x| + C$.

**Суммы и константы проходят насквозь.** $\\int (6x^2 - 4x + 1)\\,dx = 2x^3 - 2x^2 + x + C$. Проверь дифференцированием: получится снова $6x^2 - 4x + 1$.

**Линейная внутренняя функция делится на свой коэффициент.** Первообразная $\\cos 3x$ — $\\dfrac{1}{3}\\sin 3x$, $e^{2x}$ — $\\dfrac{1}{2}e^{2x}$, $(2x + 1)^4$ — $\\dfrac{(2x + 1)^5}{10}$: это правило сложной функции наоборот.`,
    ),
    ask(1, {
      en: ["An antiderivative of x⁴ is…", ["x⁵/5", "4x³", "x⁵"], "Raise the power to 5 and divide by 5."],
      hy: ["x⁴-ի նախնականն է…", ["x⁵/5", "4x³", "x⁵"], "Աստիճանը բարձրացրու մինչև 5 և բաժանիր 5-ի։"],
      ru: ["Первообразная x⁴ —", ["x⁵/5", "4x³", "x⁵"], "Подними степень до 5 и раздели на 5."],
    }),
  ],
  "definite-integral": [
    "plot mode=area fn=sq a=0 b=2 n=4",
    closer(
      `**Area as a limit of rectangles.** Cut $[a; b]$ into $n$ strips and replace each strip by a rectangle. Above, with 4 rectangles under $y = x^2$ on $[0; 2]$, the sum is only rough; add more and it approaches the exact area $\\dfrac{8}{3} \\approx 2.67$.

**The integral is that limit.** $\\displaystyle\\int_a^b f(x)\\,dx$ is the number the sums approach as the strips get thinner. For a positive function it is the area under the graph.

**Below the axis counts as negative.** Where $f(x) < 0$ the rectangles have negative height. So $\\displaystyle\\int_0^{2\\pi} \\sin x\\,dx = 0$: the hump above the axis and the dip below cancel out.`,
      `**Մակերեսը՝ որպես ուղղանկյունների սահման։** $[a; b]$-ն կտրիր $n$ շերտի և յուրաքանչյուր շերտ փոխարինիր ուղղանկյունով։ Վերևում $[0; 2]$-ում $y = x^2$-ու տակ 4 ուղղանկյունով գումարը միայն մոտավոր է․ ավելացրու դրանց թիվը, և այն կմոտենա ճշգրիտ մակերեսին՝ $\\dfrac{8}{3} \\approx 2{,}67$։

**Ինտեգրալը հենց այդ սահմանն է։** $\\displaystyle\\int_a^b f(x)\\,dx$-ը այն թիվն է, որին մոտենում են գումարները, երբ շերտերը բարակում են։ Դրական ֆունկցիայի համար դա գրաֆիկի տակ գտնվող մակերեսն է։

**Առանցքից ներքևը հաշվվում է բացասական։** Որտեղ $f(x) < 0$, ուղղանկյուններն ունեն բացասական բարձրություն։ Ուրեմն $\\displaystyle\\int_0^{2\\pi} \\sin x\\,dx = 0$․ առանցքից վեր եղած կուզն ու ներքևի փոսը չեզոքացնում են միմյանց։`,
      `**Площадь как предел прямоугольников.** Разрежь $[a; b]$ на $n$ полосок и замени каждую прямоугольником. Выше при 4 прямоугольниках под $y = x^2$ на $[0; 2]$ сумма лишь приблизительна; добавь их, и она приблизится к точной площади $\\dfrac{8}{3} \\approx 2{,}67$.

**Интеграл — это и есть предел.** $\\displaystyle\\int_a^b f(x)\\,dx$ — число, к которому стремятся суммы, когда полоски становятся тоньше. Для положительной функции это площадь под графиком.

**Ниже оси — со знаком минус.** Где $f(x) < 0$, у прямоугольников отрицательная высота. Поэтому $\\displaystyle\\int_0^{2\\pi} \\sin x\\,dx = 0$: горб над осью и впадина под ней взаимно уничтожаются.`,
    ),
    ask(1, {
      en: ["∫ from 0 to 3 of 2 dx = ?", ["6", "2", "3"], "A rectangle 3 wide and 2 high has area 6."],
      hy: ["2-ի ինտեգրալը 0-ից 3 = ?", ["6", "2", "3"], "3 լայնությամբ և 2 բարձրությամբ ուղղանկյան մակերեսը 6 է։"],
      ru: ["Интеграл от 2 по отрезку [0; 3] равен…", ["6", "2", "3"], "Прямоугольник шириной 3 и высотой 2 имеет площадь 6."],
    }),
  ],
  "newton-leibniz": [
    "plot mode=area fn=sin a=0 b=4 n=8",
    closer(
      `**Area through an antiderivative.** $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$, where $F' = f$. No rectangles needed: one antiderivative, two substitutions.

**Check it against the picture.** The area under one hump of sine, from 0 to $\\pi$, is $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = -\\cos \\pi - (-\\cos 0) = 1 + 1 = 2$. Increase the number of rectangles above and watch the sum approach 2.

**Area between two curves.** Integrate the upper minus the lower. Between $y = x$ and $y = x^2$ on $[0; 1]$: $\\displaystyle\\int_0^1 (x - x^2)\\,dx = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$.`,
      `**Մակերեսը՝ նախնականի միջոցով։** $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$, որտեղ $F' = f$։ Ուղղանկյուններ պետք չեն՝ մեկ նախնական, երկու տեղադրում։

**Ստուգիր նկարով։** Սինուսի մեկ կուզի տակ, 0-ից $\\pi$, մակերեսը $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = -\\cos \\pi - (-\\cos 0) = 1 + 1 = 2$ է։ Վերևում ավելացրու ուղղանկյունների թիվը և հետևիր, թե ինչպես է գումարը մոտենում 2-ին։

**Մակերես երկու կորերի միջև։** Ինտեգրիր վերինը հանած ներքինը։ $y = x$-ի և $y = x^2$-ու միջև $[0; 1]$-ում՝ $\\displaystyle\\int_0^1 (x - x^2)\\,dx = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$։`,
      `**Площадь через первообразную.** $\\displaystyle\\int_a^b f(x)\\,dx = F(b) - F(a)$, где $F' = f$. Никаких прямоугольников: одна первообразная, две подстановки.

**Сверь с картинкой.** Площадь под одним горбом синуса, от 0 до $\\pi$, равна $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = -\\cos \\pi - (-\\cos 0) = 1 + 1 = 2$. Увеличь число прямоугольников выше и смотри, как сумма приближается к 2.

**Площадь между двумя кривыми.** Интегрируй верхнюю минус нижнюю. Между $y = x$ и $y = x^2$ на $[0; 1]$: $\\displaystyle\\int_0^1 (x - x^2)\\,dx = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$.`,
    ),
    ask(2, {
      en: ["∫ from 1 to 2 of 3x² dx = ?", ["3", "7", "9"], "F(x) = x³: 2³ − 1³ = 7."],
      hy: ["3x²-ու ինտեգրալը 1-ից 2 = ?", ["3", "7", "9"], "F(x) = x³․ 2³ − 1³ = 7։"],
      ru: ["Интеграл от 3x² по отрезку [1; 2] равен…", ["3", "7", "9"], "F(x) = x³: 2³ − 1³ = 7."],
    }),
  ],
  "binomial-theorem": [
    closer(
      `**The coefficients come from Pascal's triangle.** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$, and the numbers 1, 3, 3, 1 are row 3 of the triangle. In general the coefficient of $a^{n-k}b^k$ is $C_n^k$: the number of ways to pick $b$ from $k$ of the $n$ brackets.

**Quick checks.** The exponents in each term add up to $n$. Putting $a = b = 1$ shows that the coefficients add up to $2^n$: $1 + 3 + 3 + 1 = 8$.

**Estimates without a calculator.** $1.01^{10} = (1 + 0.01)^{10} \\approx 1 + 10 \\cdot 0.01 + 45 \\cdot 0.0001 = 1.1045$; the true value is $1.10462\\ldots$`,
      `**Գործակիցները գալիս են Պասկալի եռանկյունուց։** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$, և 1, 3, 3, 1 թվերն եռանկյան 3-րդ տողն են։ Ընդհանուր դեպքում $a^{n-k}b^k$-ի գործակիցը $C_n^k$ է՝ $n$ փակագծերից $k$-ից $b$ ընտրելու եղանակների թիվը։

**Արագ ստուգումներ։** Յուրաքանչյուր անդամում ցուցիչների գումարը $n$ է։ $a = b = 1$ տեղադրելը ցույց է տալիս, որ գործակիցների գումարը $2^n$ է՝ $1 + 3 + 3 + 1 = 8$։

**Գնահատումներ առանց հաշվիչի։** $1{,}01^{10} = (1 + 0{,}01)^{10} \\approx 1 + 10 \\cdot 0{,}01 + 45 \\cdot 0{,}0001 = 1{,}1045$, իսկ ճշգրիտ արժեքը $1{,}10462\\ldots$ է։`,
      `**Коэффициенты берутся из треугольника Паскаля.** $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$, и числа 1, 3, 3, 1 — это 3-я строка треугольника. В общем случае коэффициент при $a^{n-k}b^k$ равен $C_n^k$ — числу способов выбрать $b$ из $k$ скобок из $n$.

**Быстрые проверки.** В каждом члене показатели в сумме дают $n$. Подстановка $a = b = 1$ показывает, что сумма коэффициентов равна $2^n$: $1 + 3 + 3 + 1 = 8$.

**Оценки без калькулятора.** $1{,}01^{10} = (1 + 0{,}01)^{10} \\approx 1 + 10 \\cdot 0{,}01 + 45 \\cdot 0{,}0001 = 1{,}1045$; точное значение $1{,}10462\\ldots$`,
    ),
    ask(2, {
      en: ["The coefficient of a²b² in (a + b)⁴ is…", ["4", "6", "12"], "C₄² = 6 (row 4: 1, 4, 6, 4, 1)."],
      hy: ["(a + b)⁴-ում a²b²-ու գործակիցն է…", ["4", "6", "12"], "C₄² = 6 (4-րդ տող՝ 1, 4, 6, 4, 1)։"],
      ru: ["Коэффициент при a²b² в (a + b)⁴ равен…", ["4", "6", "12"], "C₄² = 6 (строка 4: 1, 4, 6, 4, 1)."],
    }),
  ],
  "probability-rules": [
    "chance mode=die",
    closer(
      `**"Or": add, but do not count twice.** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. A die shows an even number or a number above 4: $\\dfrac{3}{6} + \\dfrac{2}{6} - \\dfrac{1}{6} = \\dfrac{4}{6}$, because 6 is in both.

**"And" for independent events: multiply.** Two sixes in two throws: $\\dfrac{1}{6} \\cdot \\dfrac{1}{6} = \\dfrac{1}{36}$. Independence means one result tells nothing about the other.

**"At least one" through the opposite.** At least one six in 4 throws: $1 - \\left(\\dfrac{5}{6}\\right)^4 \\approx 0.518$, slightly better than even.`,
      `**«Կամ»․ գումարիր, բայց երկու անգամ մի հաշվիր։** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$։ Զառին ելնում է զույգ թիվ կամ 4-ից մեծ թիվ՝ $\\dfrac{3}{6} + \\dfrac{2}{6} - \\dfrac{1}{6} = \\dfrac{4}{6}$, քանի որ 6-ը երկուսի մեջ էլ կա։

**«Եվ» անկախ պատահույթների համար՝ բազմապատկիր։** Երկու նետումով երկու վեցնոց՝ $\\dfrac{1}{6} \\cdot \\dfrac{1}{6} = \\dfrac{1}{36}$։ Անկախություն նշանակում է, որ մի արդյունքն ոչինչ չի ասում մյուսի մասին։

**«Առնվազն մեկ»՝ հակադիրի միջոցով։** 4 նետումով առնվազն մեկ վեցնոց՝ $1 - \\left(\\dfrac{5}{6}\\right)^4 \\approx 0{,}518$, կեսից մի փոքր ավելի։`,
      `**«Или»: складывай, но не считай дважды.** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. На кубике выпало чётное или больше 4: $\\dfrac{3}{6} + \\dfrac{2}{6} - \\dfrac{1}{6} = \\dfrac{4}{6}$, потому что 6 входит в оба события.

**«И» для независимых событий: умножай.** Две шестёрки за два броска: $\\dfrac{1}{6} \\cdot \\dfrac{1}{6} = \\dfrac{1}{36}$. Независимость означает, что один результат ничего не говорит о другом.

**«Хотя бы один» через противоположное.** Хотя бы одна шестёрка за 4 броска: $1 - \\left(\\dfrac{5}{6}\\right)^4 \\approx 0{,}518$ — чуть больше половины.`,
    ),
    fact(
      "In the 17th century the gambler Chevalier de Méré noticed that betting on at least one six in 4 throws won slightly more often than it lost, but betting on a double six in 24 throws of two dice did not. His question to Pascal started the mathematical theory of probability.",
      "17-րդ դարում խաղամոլ շևալյե դը Մերեն նկատեց, որ 4 նետումով առնվազն մեկ վեցնոցի վրա խաղադրույքը մի փոքր ավելի հաճախ է շահում, քան պարտվում, իսկ երկու զառի 24 նետումով կրկնակի վեցնոցի վրա խաղադրույքը՝ ոչ։ Նրա հարցը Պասկալին սկիզբ դրեց հավանականությունների մաթեմատիկական տեսությանը։",
      "В XVII веке игрок шевалье де Мере заметил, что ставка на хотя бы одну шестёрку за 4 броска выигрывает чуть чаще, чем проигрывает, а ставка на две шестёрки за 24 броска двух кубиков — нет. Его вопрос Паскалю положил начало математической теории вероятностей.",
    ),
    ask(2, {
      en: ["A coin is tossed 3 times. What is the probability of 3 heads?", ["1/3", "1/8", "1/6"], "Independent tosses: (1/2)³ = 1/8."],
      hy: ["Մետաղադրամը նետում են 3 անգամ։ Որքա՞ն է 3 գերբի հավանականությունը։", ["1/3", "1/8", "1/6"], "Անկախ նետումներ՝ (1/2)³ = 1/8։"],
      ru: ["Монету бросают 3 раза. Какова вероятность трёх орлов?", ["1/3", "1/8", "1/6"], "Броски независимы: (1/2)³ = 1/8."],
    }),
  ],
  "conditional-probability": [
    closer(
      `**New information shrinks the world.** $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$: once we know $B$ happened, only the outcomes inside $B$ remain. A die shows an even number; the chance it is 6 rises from $\\dfrac{1}{6}$ to $\\dfrac{1}{3}$.

**A famous surprise.** A family has two children, and at least one is a boy. The chance that both are boys is $\\dfrac{1}{3}$, not $\\dfrac{1}{2}$: of the equally likely BB, BG, GB, only BB is "both", and GG is excluded.

**Independence in this language.** $A$ and $B$ are independent when $P(A \\mid B) = P(A)$: knowing $B$ does not change the chance of $A$.`,
      `**Նոր տեղեկությունը փոքրացնում է աշխարհը։** $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$․ երբ գիտենք, որ $B$-ն տեղի է ունեցել, մնում են միայն $B$-ի ներսի ելքերը։ Զառին ելել է զույգ թիվ․ հավանականությունը, որ դա 6 է, $\\dfrac{1}{6}$-ից աճում է մինչև $\\dfrac{1}{3}$։

**Հայտնի անակնկալ։** Ընտանիքն ունի երկու երեխա, և առնվազն մեկը տղա է։ Հավանականությունը, որ երկուսն էլ տղա են, $\\dfrac{1}{3}$ է, ոչ թե $\\dfrac{1}{2}$․ հավասարահնարավոր ՏՏ, ՏԱ, ԱՏ դեպքերից «երկուսն էլ» է միայն ՏՏ-ն, իսկ ԱԱ-ն բացառված է։

**Անկախությունն այս լեզվով։** $A$-ն և $B$-ն անկախ են, երբ $P(A \\mid B) = P(A)$․ $B$-ն իմանալը չի փոխում $A$-ի հավանականությունը։`,
      `**Новая информация сужает мир.** $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$: если известно, что $B$ произошло, остаются только исходы внутри $B$. На кубике выпало чётное число; вероятность, что это 6, растёт с $\\dfrac{1}{6}$ до $\\dfrac{1}{3}$.

**Знаменитый сюрприз.** В семье двое детей, и хотя бы один из них мальчик. Вероятность, что оба мальчики, равна $\\dfrac{1}{3}$, а не $\\dfrac{1}{2}$: из равновозможных ММ, МД, ДМ «оба» — только ММ, а ДД исключено.

**Независимость на этом языке.** $A$ и $B$ независимы, если $P(A \\mid B) = P(A)$: знание о $B$ не меняет шансов $A$.`,
    ),
    ask(2, {
      en: ["A die shows more than 3. What is the probability that it shows 4?", ["1/6", "1/3", "1/2"], "Only 4, 5, 6 remain, and one of them is 4."],
      hy: ["Զառին ելել է 3-ից մեծ թիվ։ Որքա՞ն է հավանականությունը, որ դա 4 է։", ["1/6", "1/3", "1/2"], "Մնում են միայն 4, 5, 6-ը, և դրանցից մեկը 4-ն է։"],
      ru: ["На кубике выпало больше 3. Какова вероятность, что выпало 4?", ["1/6", "1/3", "1/2"], "Остаются только 4, 5, 6, и одно из них — 4."],
    }),
  ],
  "random-variables": [
    "chance mode=dice",
    closer(
      `**A number attached to chance.** A random variable is a number determined by a random outcome, such as the sum of two dice. Its distribution lists the possible values and their probabilities.

**Expected value: the long-run average.** $E(X) = x_1p_1 + x_2p_2 + \\ldots$ For one die: $\\dfrac{1 + 2 + \\ldots + 6}{6} = 3.5$, a value it never actually shows. For the sum of two dice: $3.5 + 3.5 = 7$, the tallest bar above.

**Is a game worth playing?** A ticket costs 100 and wins 1000 with probability $\\dfrac{1}{20}$. The expected gain is $1000 \\cdot \\dfrac{1}{20} - 100 = -50$: on average you lose 50 per ticket.`,
      `**Պատահականությանը կցված թիվ։** Պատահական մեծությունը պատահական ելքով որոշվող թիվ է, օրինակ՝ երկու զառի գումարը։ Նրա բաշխումը թվարկում է հնարավոր արժեքները և դրանց հավանականությունները։

**Մաթեմատիկական սպասում՝ երկար ժամանակի միջինը։** $E(X) = x_1p_1 + x_2p_2 + \\ldots$ Մեկ զառի համար՝ $\\dfrac{1 + 2 + \\ldots + 6}{6} = 3{,}5$, արժեք, որն իրականում երբեք չի ելնում։ Երկու զառի գումարի համար՝ $3{,}5 + 3{,}5 = 7$, վերևի ամենաբարձր սյունը։

**Արժե՞ խաղալ։** Տոմսն արժե 100 և $\\dfrac{1}{20}$ հավանականությամբ շահում է 1000։ Սպասվող շահույթը $1000 \\cdot \\dfrac{1}{20} - 100 = -50$ է․ միջինում յուրաքանչյուր տոմսից կորցնում ես 50։`,
      `**Число, привязанное к случаю.** Случайная величина — число, которое определяется случайным исходом, например сумма двух кубиков. Её распределение — список возможных значений и их вероятностей.

**Математическое ожидание — среднее в долгой серии.** $E(X) = x_1p_1 + x_2p_2 + \\ldots$ Для одного кубика: $\\dfrac{1 + 2 + \\ldots + 6}{6} = 3{,}5$ — значение, которое на самом деле никогда не выпадает. Для суммы двух кубиков: $3{,}5 + 3{,}5 = 7$, самый высокий столбик выше.

**Стоит ли играть?** Билет стоит 100 и выигрывает 1000 с вероятностью $\\dfrac{1}{20}$. Ожидаемый выигрыш $1000 \\cdot \\dfrac{1}{20} - 100 = -50$: в среднем на каждом билете теряешь 50.`,
    ),
    ask(2, {
      en: ["A game pays 6 if a die shows 6 and nothing otherwise. What is the expected payout?", ["6", "1", "3.5"], "6 · 1/6 = 1."],
      hy: ["Խաղը վճարում է 6, եթե զառին ելնի 6, և ոչինչ՝ հակառակ դեպքում։ Որքա՞ն է սպասվող վճարը։", ["6", "1", "3,5"], "6 · 1/6 = 1։"],
      ru: ["Игра платит 6, если на кубике выпало 6, иначе ничего. Каков ожидаемый выигрыш?", ["6", "1", "3,5"], "6 · 1/6 = 1."],
    }),
  ],
  "alg11-year-review": [
    "plot mode=exp a=2 show=log",
    closer(
      `**The year on one page.**
- Derivatives: $(x^n)' = nx^{n-1}$, $(\\sin x)' = \\cos x$, $(e^x)' = e^x$, $(\\ln x)' = \\dfrac{1}{x}$; product, quotient and chain rules.
- Using $f'$: tangents, monotonicity, extrema, largest and smallest values.
- Exponents and logarithms: $\\log_a b = c \\iff a^c = b$; the base decides whether an inequality flips; always check the domain.
- Integrals: antiderivative $+ C$; $\\int_a^b f = F(b) - F(a)$.
- Probability: add for "or", multiply for independent "and", use the opposite for "at least one".

**On the graph above.** $2^x$ and $\\log_2 x$ are mirror images in $y = x$: $(3; 8)$ lies on one and $(8; 3)$ on the other.`,
      `**Տարին մեկ էջում։**
- Ածանցյալներ՝ $(x^n)' = nx^{n-1}$, $(\\sin x)' = \\cos x$, $(e^x)' = e^x$, $(\\ln x)' = \\dfrac{1}{x}$, արտադրյալի, քանորդի և բարդ ֆունկցիայի կանոններ։
- $f'$-ի կիրառումներ՝ շոշափողներ, մոնոտոնություն, էքստրեմումներ, ամենամեծ և ամենափոքր արժեքներ։
- Աստիճաններ և լոգարիթմներ՝ $\\log_a b = c \\iff a^c = b$, հիմքն է որոշում՝ անհավասարությունը շրջվո՞ւմ է, միշտ ստուգիր որոշման տիրույթը։
- Ինտեգրալներ՝ նախնական $+ C$, $\\int_a^b f = F(b) - F(a)$։
- Հավանականություն՝ գումարիր «կամ»-ի համար, բազմապատկիր անկախ «և»-ի համար, «առնվազն մեկի» համար օգտվիր հակադիրից։

**Վերևի գրաֆիկի վրա։** $2^x$-ը և $\\log_2 x$-ը հայելային պատկերներ են $y = x$-ի նկատմամբ․ $(3; 8)$-ը գտնվում է մեկի, $(8; 3)$-ը՝ մյուսի վրա։`,
      `**Весь год на одной странице.**
- Производные: $(x^n)' = nx^{n-1}$, $(\\sin x)' = \\cos x$, $(e^x)' = e^x$, $(\\ln x)' = \\dfrac{1}{x}$; правила произведения, частного и сложной функции.
- Применение $f'$: касательные, монотонность, экстремумы, наибольшие и наименьшие значения.
- Степени и логарифмы: $\\log_a b = c \\iff a^c = b$; основание решает, меняется ли знак неравенства; всегда проверяй область определения.
- Интегралы: первообразная $+ C$; $\\int_a^b f = F(b) - F(a)$.
- Вероятность: «или» — складываем, независимое «и» — умножаем, «хотя бы один» — через противоположное.

**На графике выше.** $2^x$ и $\\log_2 x$ симметричны относительно $y = x$: $(3; 8)$ лежит на одном, $(8; 3)$ — на другом.`,
    ),
    ask(1, {
      en: ["(ln x)′ at x = 2 equals…", ["1/2", "2", "ln 2"], "(ln x)′ = 1/x."],
      hy: ["(ln x)′-ը x = 2 կետում հավասար է…", ["1/2", "2", "ln 2"], "(ln x)′ = 1/x։"],
      ru: ["(ln x)′ при x = 2 равна…", ["1/2", "2", "ln 2"], "(ln x)′ = 1/x."],
    }),
  ],
};
