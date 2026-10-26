import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer, fact } from "../more";

export const grade10: VisualMap[number] = {
  "real-numbers": [
    closer(
      `**Sets inside sets.** Natural numbers sit inside the integers, the integers inside the rationals, and the rationals together with the irrationals make the real numbers: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Every point of the number line is a real number.

**The modulus is a distance.** $|a - b|$ is the distance between $a$ and $b$ on the line. So $|x - 3| < 2$ means "x is closer than 2 to the number 3": $1 < x < 5$.

**Between any two reals there are infinitely many more.** Between 1.41 and 1.42 lie 1.415, 1.4142, and also the irrational $\\sqrt{2}$. The line has no gaps.`,
      `**Բազմություններ բազմությունների ներսում։** Բնական թվերը գտնվում են ամբողջների ներսում, ամբողջները՝ ռացիոնալների, իսկ ռացիոնալներն իռացիոնալների հետ կազմում են իրական թվերը՝ $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$։ Թվային ուղղի յուրաքանչյուր կետ իրական թիվ է։

**Մոդուլը հեռավորություն է։** $|a - b|$-ն ուղղի վրա $a$-ի և $b$-ի հեռավորությունն է։ Ուրեմն $|x - 3| < 2$ նշանակում է «x-ը 3 թվից 2-ից ավելի մոտ է»՝ $1 < x < 5$։

**Ցանկացած երկու իրական թվի միջև կան անվերջ շատ ուրիշներ։** 1,41-ի և 1,42-ի միջև են 1,415-ը, 1,4142-ը, նաև իռացիոնալ $\\sqrt{2}$-ը։ Ուղիղը բացվածքներ չունի։`,
      `**Множества внутри множеств.** Натуральные числа лежат внутри целых, целые — внутри рациональных, а рациональные вместе с иррациональными образуют действительные числа: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Каждая точка числовой прямой — действительное число.

**Модуль — это расстояние.** $|a - b|$ — расстояние между $a$ и $b$ на прямой. Поэтому $|x - 3| < 2$ означает «x ближе чем на 2 к числу 3»: $1 < x < 5$.

**Между любыми двумя действительными числами их бесконечно много.** Между 1,41 и 1,42 лежат 1,415, 1,4142 и иррациональное $\\sqrt{2}$. У прямой нет дыр.`,
    ),
    ask(1, {
      en: ["Solve |x − 3| < 2.", ["(1; 5)", "(−1; 5)", "x < 5"], "The points closer than 2 to the number 3."],
      hy: ["Լուծի՛ր |x − 3| < 2։", ["(1; 5)", "(−1; 5)", "x < 5"], "3 թվից 2-ից ավելի մոտ գտնվող կետերը։"],
      ru: ["Реши |x − 3| < 2.", ["(1; 5)", "(−1; 5)", "x < 5"], "Точки, которые ближе чем на 2 к числу 3."],
    }),
  ],
  "nth-roots-properties": [
    closer(
      `**Roots of the same degree multiply.** $\\sqrt[3]{2} \\cdot \\sqrt[3]{4} = \\sqrt[3]{8} = 2$. A root of a root multiplies the degrees: $\\sqrt{\\sqrt{16}} = \\sqrt[4]{16} = 2$.

**Watch the modulus with even degrees.** $\\sqrt[4]{a^4} = |a|$, just like $\\sqrt{a^2} = |a|$. With odd degrees there is no modulus: $\\sqrt[3]{a^3} = a$.

**Comparing roots of different degrees.** Bring them to a common degree. Which is bigger, $\\sqrt{2}$ or $\\sqrt[3]{3}$? Raise both to the 6th power: $(\\sqrt{2})^6 = 8$ and $(\\sqrt[3]{3})^6 = 9$, so $\\sqrt[3]{3}$ is bigger.`,
      `**Միևնույն աստիճանի արմատները բազմապատկվում են։** $\\sqrt[3]{2} \\cdot \\sqrt[3]{4} = \\sqrt[3]{8} = 2$։ Արմատից արմատը բազմապատկում է աստիճանները՝ $\\sqrt{\\sqrt{16}} = \\sqrt[4]{16} = 2$։

**Զույգ աստիճանների դեպքում ուշադրություն դարձրու մոդուլին։** $\\sqrt[4]{a^4} = |a|$, ինչպես $\\sqrt{a^2} = |a|$։ Կենտ աստիճանների դեպքում մոդուլ չկա՝ $\\sqrt[3]{a^3} = a$։

**Տարբեր աստիճանի արմատների համեմատում։** Բեր դրանք ընդհանուր աստիճանի։ Ո՞րն է մեծ՝ $\\sqrt{2}$-ը, թե $\\sqrt[3]{3}$-ը։ Երկուսն էլ բարձրացրու 6-րդ աստիճան՝ $(\\sqrt{2})^6 = 8$ և $(\\sqrt[3]{3})^6 = 9$, ուրեմն $\\sqrt[3]{3}$-ն է մեծ։`,
      `**Корни одной степени перемножаются.** $\\sqrt[3]{2} \\cdot \\sqrt[3]{4} = \\sqrt[3]{8} = 2$. Корень из корня перемножает степени: $\\sqrt{\\sqrt{16}} = \\sqrt[4]{16} = 2$.

**При чётных степенях следи за модулем.** $\\sqrt[4]{a^4} = |a|$, так же как $\\sqrt{a^2} = |a|$. При нечётных модуля нет: $\\sqrt[3]{a^3} = a$.

**Сравнение корней разных степеней.** Приведи их к общей степени. Что больше: $\\sqrt{2}$ или $\\sqrt[3]{3}$? Возведём оба в 6-ю степень: $(\\sqrt{2})^6 = 8$ и $(\\sqrt[3]{3})^6 = 9$, значит, больше $\\sqrt[3]{3}$.`,
    ),
    ask(1, {
      en: ["∛2 · ∛32 = ?", ["4", "∛34", "8"], "∛(2 · 32) = ∛64 = 4."],
      hy: ["∛2 · ∛32 = ?", ["4", "∛34", "8"], "∛(2 · 32) = ∛64 = 4։"],
      ru: ["∛2 · ∛32 = ?", ["4", "∛34", "8"], "∛(2 · 32) = ∛64 = 4."],
    }),
  ],
  "rational-exponent": [
    closer(
      `**A fraction in the exponent is a root.** $a^{m/n} = \\sqrt[n]{a^m}$ for $a > 0$. The denominator is the root, the numerator the power: $8^{2/3} = (\\sqrt[3]{8})^2 = 4$, $16^{-1/2} = \\dfrac{1}{\\sqrt{16}} = \\dfrac{1}{4}$.

**All the old rules still work.** $a^{1/2} \\cdot a^{1/3} = a^{5/6}$, $(a^{2/3})^3 = a^2$. Writing roots as powers often turns a long expression into one line of exponent arithmetic.

**Why only a > 0?** Because $\\dfrac{1}{3} = \\dfrac{2}{6}$, yet $(-8)^{1/3}$ would be $-2$ and $(-8)^{2/6} = \\sqrt[6]{64}$ would be $2$. To avoid such contradictions, fractional powers are defined only for positive bases.`,
      `**Կոտորակ ցուցիչում արմատ է։** $a^{m/n} = \\sqrt[n]{a^m}$, երբ $a > 0$։ Հայտարարն արմատն է, համարիչը՝ աստիճանը՝ $8^{2/3} = (\\sqrt[3]{8})^2 = 4$, $16^{-1/2} = \\dfrac{1}{\\sqrt{16}} = \\dfrac{1}{4}$։

**Բոլոր հին կանոնները շարունակում են գործել։** $a^{1/2} \\cdot a^{1/3} = a^{5/6}$, $(a^{2/3})^3 = a^2$։ Արմատներն աստիճաններով գրելը հաճախ երկար արտահայտությունը վերածում է ցուցիչների թվաբանության մեկ տողի։

**Ինչո՞ւ միայն a > 0։** Որովհետև $\\dfrac{1}{3} = \\dfrac{2}{6}$, բայց $(-8)^{1/3}$-ը կլիներ $-2$, իսկ $(-8)^{2/6} = \\sqrt[6]{64}$-ը՝ $2$։ Այսպիսի հակասություններից խուսափելու համար կոտորակային աստիճանները սահմանվում են միայն դրական հիմքերի համար։`,
      `**Дробь в показателе — это корень.** $a^{m/n} = \\sqrt[n]{a^m}$ при $a > 0$. Знаменатель — степень корня, числитель — степень: $8^{2/3} = (\\sqrt[3]{8})^2 = 4$, $16^{-1/2} = \\dfrac{1}{\\sqrt{16}} = \\dfrac{1}{4}$.

**Все старые правила работают.** $a^{1/2} \\cdot a^{1/3} = a^{5/6}$, $(a^{2/3})^3 = a^2$. Если записать корни степенями, длинное выражение часто превращается в одну строку действий с показателями.

**Почему только a > 0?** Потому что $\\dfrac{1}{3} = \\dfrac{2}{6}$, но $(-8)^{1/3}$ было бы $-2$, а $(-8)^{2/6} = \\sqrt[6]{64}$ — это $2$. Чтобы избежать таких противоречий, дробные степени определяют только для положительных оснований.`,
    ),
    ask(1, {
      en: ["27^(2/3) = ?", ["9", "18", "3"], "∛27 = 3, then 3² = 9."],
      hy: ["27^(2/3) = ?", ["9", "18", "3"], "∛27 = 3, հետո 3² = 9։"],
      ru: ["27^(2/3) = ?", ["9", "18", "3"], "∛27 = 3, затем 3² = 9."],
    }),
  ],
  "power-functions-graphs": [
    "plot mode=power n=0.5",
    closer(
      `**The exponent decides the bend.** For $p > 1$ the graph of $y = x^p$ bends upwards and grows faster and faster. For $0 < p < 1$, like $y = x^{1/2} = \\sqrt{x}$ above, it bends the other way and grows more and more slowly.

**Negative exponents fall.** For $p < 0$ the function decreases for $x > 0$ and approaches both axes, like the hyperbola $y = \\dfrac{1}{x}$.

**Domain for a fractional exponent.** $x^{1/4}$ and $x^{2/3}$ in the sense of rational powers are defined for $x \\ge 0$ only; with a negative exponent, for $x > 0$. All these graphs pass through $(1; 1)$.`,
      `**Ցուցիչն որոշում է կորությունը։** $p > 1$ դեպքում $y = x^p$-ի գրաֆիկը կորանում է վերև և աճում գնալով ավելի արագ։ $0 < p < 1$ դեպքում, ինչպես վերևի $y = x^{1/2} = \\sqrt{x}$-ը, այն կորանում է հակառակ կողմ և աճում գնալով ավելի դանդաղ։

**Բացասական ցուցիչները նվազում են։** $p < 0$ դեպքում ֆունկցիան նվազում է $x > 0$-ի համար և մոտենում երկու առանցքներին, ինչպես $y = \\dfrac{1}{x}$ հիպերբոլը։

**Որոշման տիրույթը կոտորակային ցուցիչի դեպքում։** $x^{1/4}$-ը և $x^{2/3}$-ը՝ ռացիոնալ աստիճանի իմաստով, որոշված են միայն $x \\ge 0$-ի համար, իսկ բացասական ցուցիչի դեպքում՝ $x > 0$-ի համար։ Այս բոլոր գրաֆիկներն անցնում են $(1; 1)$-ով։`,
      `**Показатель решает, как изогнут график.** При $p > 1$ график $y = x^p$ выгибается вверх и растёт всё быстрее. При $0 < p < 1$, как $y = x^{1/2} = \\sqrt{x}$ выше, он изогнут в другую сторону и растёт всё медленнее.

**Отрицательные показатели убывают.** При $p < 0$ функция убывает при $x > 0$ и приближается к обеим осям, как гипербола $y = \\dfrac{1}{x}$.

**Область определения при дробном показателе.** $x^{1/4}$ и $x^{2/3}$ в смысле рациональной степени определены только при $x \\ge 0$, а с отрицательным показателем — при $x > 0$. Все эти графики проходят через $(1; 1)$.`,
    ),
    ask(2, {
      en: ["What is the domain of y = x^(1/4)?", ["all numbers", "x ≥ 0", "x > 0"], "x^(1/4) is the fourth root, which needs x ≥ 0."],
      hy: ["Ո՞րն է y = x^(1/4)-ի որոշման տիրույթը։", ["բոլոր թվերը", "x ≥ 0", "x > 0"], "x^(1/4)-ը չորրորդ աստիճանի արմատն է, որին պետք է x ≥ 0։"],
      ru: ["Какова область определения y = x^(1/4)?", ["все числа", "x ≥ 0", "x > 0"], "x^(1/4) — корень четвёртой степени, для него нужно x ≥ 0."],
    }),
  ],
  "irrational-equations": [
    closer(
      `**Square, then check.** $\\sqrt{x + 2} = x$: squaring gives $x + 2 = x^2$, so $x = 2$ or $x = -1$. Check: $\\sqrt{4} = 2$ ✓, but $\\sqrt{1} = 1 \\ne -1$. The answer is only $x = 2$.

**Why extra roots appear.** Squaring cannot tell $\\sqrt{A} = B$ from $\\sqrt{A} = -B$: both become $A = B^2$. The fake root solves the second equation.

**A condition instead of a check.** Since a root is never negative, $\\sqrt{A} = B$ requires $B \\ge 0$. Writing $x \\ge 0$ at the start of the example above throws out $-1$ immediately.`,
      `**Քառակուսի բարձրացրու, հետո ստուգիր։** $\\sqrt{x + 2} = x$․ քառակուսի բարձրացնելիս ստանում ենք $x + 2 = x^2$, ուրեմն $x = 2$ կամ $x = -1$։ Ստուգում՝ $\\sqrt{4} = 2$ ✓, բայց $\\sqrt{1} = 1 \\ne -1$։ Պատասխանը միայն $x = 2$-ն է։

**Ինչու են ավելորդ արմատներ հայտնվում։** Քառակուսի բարձրացնելը չի տարբերում $\\sqrt{A} = B$-ն $\\sqrt{A} = -B$-ից․ երկուսն էլ դառնում են $A = B^2$։ Կեղծ արմատը լուծում է երկրորդ հավասարումը։

**Պայման՝ ստուգման փոխարեն։** Քանի որ արմատն երբեք բացասական չէ, $\\sqrt{A} = B$-ն պահանջում է $B \\ge 0$։ Վերևի օրինակի սկզբում $x \\ge 0$ գրելն անմիջապես դեն է նետում $-1$-ը։`,
      `**Возведи в квадрат, затем проверь.** $\\sqrt{x + 2} = x$: возведение в квадрат даёт $x + 2 = x^2$, значит, $x = 2$ или $x = -1$. Проверка: $\\sqrt{4} = 2$ ✓, но $\\sqrt{1} = 1 \\ne -1$. Ответ только $x = 2$.

**Откуда берутся лишние корни.** Возведение в квадрат не отличает $\\sqrt{A} = B$ от $\\sqrt{A} = -B$: оба превращаются в $A = B^2$. Посторонний корень решает второе уравнение.

**Условие вместо проверки.** Корень не бывает отрицательным, поэтому $\\sqrt{A} = B$ требует $B \\ge 0$. Если в примере выше сразу записать $x \\ge 0$, корень $-1$ отпадает немедленно.`,
    ),
    ask(1, {
      en: ["Solve √(x + 6) = x.", ["x = 3", "x = −2", "x = 3 and x = −2"], "x + 6 = x² gives 3 and −2, but √4 = 2 ≠ −2."],
      hy: ["Լուծի՛ր √(x + 6) = x։", ["x = 3", "x = −2", "x = 3 և x = −2"], "x + 6 = x²-ից ստացվում է 3 և −2, բայց √4 = 2 ≠ −2։"],
      ru: ["Реши √(x + 6) = x.", ["x = 3", "x = −2", "x = 3 и x = −2"], "x + 6 = x² даёт 3 и −2, но √4 = 2 ≠ −2."],
    }),
  ],
  radians: [
    "unit deg=60",
    closer(
      `**One radian: the arc equals the radius.** Lay the radius along the circle: the angle it covers is 1 radian, about $57.3°$. Half a turn holds $\\pi \\approx 3.14$ radii, so $180° = \\pi$.

**Converting.** Multiply degrees by $\\dfrac{\\pi}{180}$: $30° = \\dfrac{\\pi}{6}$, $45° = \\dfrac{\\pi}{4}$, $60° = \\dfrac{\\pi}{3}$, $90° = \\dfrac{\\pi}{2}$. Move the point above and watch both numbers change together.

**Why mathematicians prefer radians.** The arc length becomes simply $l = R\\alpha$, and later the derivative of $\\sin x$ is exactly $\\cos x$ only when $x$ is in radians.`,
      `**Մեկ ռադիան՝ աղեղը հավասար է շառավղին։** Շառավիղը դիր շրջանագծի երկայնքով․ այն անկյունը, որը նա ծածկում է, 1 ռադիան է՝ մոտ $57{,}3°$։ Կես պտույտում տեղավորվում է $\\pi \\approx 3{,}14$ շառավիղ, ուրեմն $180° = \\pi$։

**Փոխարկում։** Աստիճանները բազմապատկիր $\\dfrac{\\pi}{180}$-ով՝ $30° = \\dfrac{\\pi}{6}$, $45° = \\dfrac{\\pi}{4}$, $60° = \\dfrac{\\pi}{3}$, $90° = \\dfrac{\\pi}{2}$։ Վերևում շարժիր կետը և հետևիր, թե ինչպես են երկու թվերը միասին փոխվում։

**Ինչու են մաթեմատիկոսները նախընտրում ռադիանները։** Աղեղի երկարությունը դառնում է պարզապես $l = R\\alpha$, իսկ հետագայում $\\sin x$-ի ածանցյալը ճիշտ $\\cos x$ է միայն այն դեպքում, երբ $x$-ը ռադիաններով է։`,
      `**Один радиан: дуга равна радиусу.** Отложи радиус вдоль окружности: угол, который он охватывает, — 1 радиан, около $57{,}3°$. В половине оборота помещается $\\pi \\approx 3{,}14$ радиуса, поэтому $180° = \\pi$.

**Перевод.** Умножай градусы на $\\dfrac{\\pi}{180}$: $30° = \\dfrac{\\pi}{6}$, $45° = \\dfrac{\\pi}{4}$, $60° = \\dfrac{\\pi}{3}$, $90° = \\dfrac{\\pi}{2}$. Двигай точку выше и смотри, как оба числа меняются вместе.

**Почему математики предпочитают радианы.** Длина дуги становится просто $l = R\\alpha$, а позже производная $\\sin x$ равна ровно $\\cos x$, только если $x$ в радианах.`,
    ),
    ask(1, {
      en: ["What is 150° in radians?", ["5π/6", "3π/4", "5π/3"], "150 · π / 180 = 5π/6."],
      hy: ["Ինչքա՞ն է 150°-ը ռադիաններով։", ["5π/6", "3π/4", "5π/3"], "150 · π / 180 = 5π/6։"],
      ru: ["Сколько радиан в 150°?", ["5π/6", "3π/4", "5π/3"], "150 · π / 180 = 5π/6."],
    }),
  ],
  "unit-circle": [
    "unit deg=210",
    closer(
      `**Every real number is an angle.** Start at $(1; 0)$ and turn: anticlockwise for positive angles, clockwise for negative ones. Turning by $210°$ lands in the third quarter, as above.

**A full turn changes nothing.** $\\alpha$ and $\\alpha + 360°$ (or $\\alpha + 2\\pi$) give the same point. Try 390° on the slider: it is the point of 30°. That is why trigonometric functions repeat.

**Negative angles have positive twins.** $-90°$ is the same point as $270°$, and $-45°$ the same as $315°$: add 360° until the angle is between 0° and 360°.`,
      `**Յուրաքանչյուր իրական թիվ անկյուն է։** Սկսիր $(1; 0)$-ից և պտտիր՝ ժամսլաքի հակառակ ուղղությամբ դրական անկյունների համար, ժամսլաքի ուղղությամբ՝ բացասականների։ $210°$-ով պտույտը հասցնում է երրորդ քառորդ, ինչպես վերևում։

**Լրիվ պտույտն ոչինչ չի փոխում։** $\\alpha$-ն և $\\alpha + 360°$-ը (կամ $\\alpha + 2\\pi$-ն) տալիս են նույն կետը։ Սահիչով փորձիր 390°-ը․ դա 30°-ի կետն է։ Ահա թե ինչու են եռանկյունաչափական ֆունկցիաները կրկնվում։

**Բացասական անկյուններն ունեն դրական երկվորյակներ։** $-90°$-ը նույն կետն է, ինչ $270°$-ը, իսկ $-45°$-ը՝ նույնը, ինչ $315°$-ը․ գումարիր 360°, մինչև անկյունը լինի 0°-ի և 360°-ի միջև։`,
      `**Любое действительное число — угол.** Начни с $(1; 0)$ и поворачивай: против часовой стрелки для положительных углов, по часовой — для отрицательных. Поворот на $210°$ приводит в третью четверть, как выше.

**Полный оборот ничего не меняет.** $\\alpha$ и $\\alpha + 360°$ (или $\\alpha + 2\\pi$) дают одну и ту же точку. Попробуй на ползунке 390°: это точка угла 30°. Поэтому тригонометрические функции повторяются.

**У отрицательных углов есть положительные двойники.** $-90°$ — та же точка, что $270°$, а $-45°$ — та же, что $315°$: прибавляй 360°, пока угол не окажется между 0° и 360°.`,
    ),
    ask(1, {
      en: ["Which angle gives the same point as 30°?", ["−330°", "330°", "210°"], "−330° + 360° = 30°."],
      hy: ["Ո՞ր անկյունն է տալիս նույն կետը, ինչ 30°-ը։", ["−330°", "330°", "210°"], "−330° + 360° = 30°։"],
      ru: ["Какой угол даёт ту же точку, что и 30°?", ["−330°", "330°", "210°"], "−330° + 360° = 30°."],
    }),
  ],
  "sin-cos-tan-definition": [
    "unit deg=135",
    closer(
      `**Coordinates, nothing more.** The point of angle $\\alpha$ on the unit circle is $(\\cos \\alpha; \\sin \\alpha)$. At $135°$ it is $\\left(-\\dfrac{\\sqrt{2}}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$. Since the point is on a circle of radius 1, both values are between $-1$ and $1$.

**Tangent and cotangent are ratios.** $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$ does not exist where $\\cos \\alpha = 0$ (at 90°, 270°); $\\cot \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha}$ does not exist where $\\sin \\alpha = 0$ (at 0°, 180°).

**The tangent line.** Extend the radius until it meets the vertical line $x = 1$: the height of the meeting point is $\\tan \\alpha$. Near 90° the ray becomes almost vertical and the height runs off to infinity.`,
      `**Կոորդինատներ, ուրիշ ոչինչ։** Միավոր շրջանագծի վրա $\\alpha$ անկյան կետը $(\\cos \\alpha; \\sin \\alpha)$-ն է։ $135°$-ում այն $\\left(-\\dfrac{\\sqrt{2}}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$ է։ Քանի որ կետը 1 շառավղով շրջանագծի վրա է, երկու արժեքներն էլ $-1$-ի և $1$-ի միջև են։

**Տանգենսն ու կոտանգենսը հարաբերություններ են։** $\\operatorname{tg} \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$-ն գոյություն չունի, որտեղ $\\cos \\alpha = 0$ (90°-ում, 270°-ում), $\\operatorname{ctg} \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha}$-ն՝ որտեղ $\\sin \\alpha = 0$ (0°-ում, 180°-ում)։

**Տանգենսների գիծը։** Շառավիղը շարունակիր մինչև $x = 1$ ուղղաձիգ ուղղի հետ հատումը․ հատման կետի բարձրությունը $\\operatorname{tg} \\alpha$-ն է։ 90°-ի մոտ ճառագայթը դառնում է գրեթե ուղղաձիգ, և բարձրությունը գնում է անվերջություն։`,
      `**Координаты, и ничего больше.** Точка угла $\\alpha$ на единичной окружности — $(\\cos \\alpha; \\sin \\alpha)$. При $135°$ это $\\left(-\\dfrac{\\sqrt{2}}{2}; \\dfrac{\\sqrt{2}}{2}\\right)$. Точка лежит на окружности радиуса 1, поэтому оба значения между $-1$ и $1$.

**Тангенс и котангенс — отношения.** $\\operatorname{tg} \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$ не существует там, где $\\cos \\alpha = 0$ (при 90°, 270°); $\\operatorname{ctg} \\alpha = \\dfrac{\\cos \\alpha}{\\sin \\alpha}$ — там, где $\\sin \\alpha = 0$ (при 0°, 180°).

**Линия тангенсов.** Продолжи радиус до пересечения с вертикальной прямой $x = 1$: высота точки пересечения равна $\\operatorname{tg} \\alpha$. Около 90° луч становится почти вертикальным, и высота уходит в бесконечность.`,
    ),
    ask(3, {
      en: ["cos 180° = ?", ["0", "1", "−1"], "The point of 180° is (−1; 0), and cos is its x-coordinate."],
      hy: ["cos 180° = ?", ["0", "1", "−1"], "180°-ի կետը (−1; 0)-ն է, իսկ cos-ը նրա x կոորդինատն է։"],
      ru: ["cos 180° = ?", ["0", "1", "−1"], "Точка угла 180° — это (−1; 0), а cos — её абсцисса."],
    }),
  ],
  "trig-signs": [
    "unit mode=signs fn=sin deg=200",
    closer(
      `**Signs come from the coordinates.** $\\sin \\alpha$ is $y$: positive in quarters I and II. $\\cos \\alpha$ is $x$: positive in I and IV. $\\tan \\alpha = \\dfrac{y}{x}$: positive where $x$ and $y$ have the same sign, in I and III.

**An example.** $200°$ is in quarter III, so $\\sin 200° < 0$, $\\cos 200° < 0$, but $\\tan 200° > 0$. Switch the function above and see the pluses move.

**For radians, find the quarter first.** $\\alpha = 4$: since $\\pi \\approx 3.14 < 4 < \\dfrac{3\\pi}{2} \\approx 4.71$, the angle is in quarter III, so $\\sin 4 < 0$.`,
      `**Նշանները գալիս են կոորդինատներից։** $\\sin \\alpha$-ն $y$-ն է՝ դրական I և II քառորդներում։ $\\cos \\alpha$-ն $x$-ն է՝ դրական I և IV քառորդներում։ $\\operatorname{tg} \\alpha = \\dfrac{y}{x}$՝ դրական այնտեղ, որտեղ $x$-ը և $y$-ը նույն նշանն ունեն՝ I և III քառորդներում։

**Օրինակ։** $200°$-ը III քառորդում է, ուրեմն $\\sin 200° < 0$, $\\cos 200° < 0$, բայց $\\operatorname{tg} 200° > 0$։ Վերևում փոխիր ֆունկցիան և տես, թե ինչպես են պլյուսները տեղափոխվում։

**Ռադիանների դեպքում նախ գտիր քառորդը։** $\\alpha = 4$․ քանի որ $\\pi \\approx 3{,}14 < 4 < \\dfrac{3\\pi}{2} \\approx 4{,}71$, անկյունը III քառորդում է, ուրեմն $\\sin 4 < 0$։`,
      `**Знаки следуют из координат.** $\\sin \\alpha$ — это $y$: положителен в I и II четвертях. $\\cos \\alpha$ — это $x$: положителен в I и IV. $\\operatorname{tg} \\alpha = \\dfrac{y}{x}$: положителен, где $x$ и $y$ одного знака, — в I и III.

**Пример.** $200°$ — в III четверти, поэтому $\\sin 200° < 0$, $\\cos 200° < 0$, а $\\operatorname{tg} 200° > 0$. Переключи функцию выше и посмотри, как перемещаются плюсы.

**Для радиан сначала найди четверть.** $\\alpha = 4$: так как $\\pi \\approx 3{,}14 < 4 < \\dfrac{3\\pi}{2} \\approx 4{,}71$, угол в III четверти, значит, $\\sin 4 < 0$.`,
    ),
    fact(
      "English-speaking pupils remember the signs with the phrase \"All Students Take Calculus\": All functions are positive in quarter I, Sine in II, Tangent in III and Cosine in IV.",
      "Անգլիախոս աշակերտները նշանները հիշում են «All Students Take Calculus» արտահայտությամբ․ I քառորդում դրական են բոլորը (All), II-ում՝ սինուսը (Sine), III-ում՝ տանգենսը (Tangent), IV-ում՝ կոսինուսը (Cosine)։",
      "Англоязычные школьники запоминают знаки фразой «All Students Take Calculus»: в I четверти положительны все (All), во II — синус (Sine), в III — тангенс (Tangent), в IV — косинус (Cosine).",
    ),
    ask(2, {
      en: ["In which quarter is sin α > 0 and cos α < 0?", ["I", "II", "III"], "y > 0 and x < 0: the upper left quarter."],
      hy: ["Ո՞ր քառորդում է sin α > 0 և cos α < 0։", ["I", "II", "III"], "y > 0 և x < 0․ վերին ձախ քառորդը։"],
      ru: ["В какой четверти sin α > 0 и cos α < 0?", ["I", "II", "III"], "y > 0 и x < 0: левая верхняя четверть."],
    }),
  ],
  "basic-identities": [
    closer(
      `**Pythagoras on the unit circle.** The point $(\\cos \\alpha; \\sin \\alpha)$ is at distance 1 from the origin, so $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ for every angle.

**From one value to all the others.** If $\\sin \\alpha = \\dfrac{3}{5}$ and $\\alpha$ is in quarter II, then $\\cos^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. In quarter II cosine is negative, so $\\cos \\alpha = -\\dfrac{4}{5}$ and $\\tan \\alpha = -\\dfrac{3}{4}$. The quarter decides the sign; the identity only gives the size.

**Two more.** $\\tan \\alpha \\cdot \\cot \\alpha = 1$, and dividing the main identity by $\\cos^2 \\alpha$ gives $1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}$.`,
      `**Պյութագորասը միավոր շրջանագծի վրա։** $(\\cos \\alpha; \\sin \\alpha)$ կետը սկզբնակետից 1 հեռավորության վրա է, ուրեմն $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ ցանկացած անկյան համար։

**Մեկ արժեքից՝ մնացած բոլորին։** Եթե $\\sin \\alpha = \\dfrac{3}{5}$ և $\\alpha$-ն II քառորդում է, ապա $\\cos^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$։ II քառորդում կոսինուսը բացասական է, ուրեմն $\\cos \\alpha = -\\dfrac{4}{5}$ և $\\operatorname{tg} \\alpha = -\\dfrac{3}{4}$։ Նշանն որոշում է քառորդը, նույնությունը տալիս է միայն մեծությունը։

**Եվս երկուսը։** $\\operatorname{tg} \\alpha \\cdot \\operatorname{ctg} \\alpha = 1$, իսկ հիմնական նույնությունը $\\cos^2 \\alpha$-ի վրա բաժանելիս ստացվում է $1 + \\operatorname{tg}^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}$։`,
      `**Пифагор на единичной окружности.** Точка $(\\cos \\alpha; \\sin \\alpha)$ находится на расстоянии 1 от начала координат, поэтому $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ для любого угла.

**От одного значения ко всем остальным.** Если $\\sin \\alpha = \\dfrac{3}{5}$ и $\\alpha$ во II четверти, то $\\cos^2 \\alpha = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. Во II четверти косинус отрицателен, поэтому $\\cos \\alpha = -\\dfrac{4}{5}$ и $\\operatorname{tg} \\alpha = -\\dfrac{3}{4}$. Знак определяет четверть, тождество даёт только величину.

**Ещё два.** $\\operatorname{tg} \\alpha \\cdot \\operatorname{ctg} \\alpha = 1$, а деление основного тождества на $\\cos^2 \\alpha$ даёт $1 + \\operatorname{tg}^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha}$.`,
    ),
    ask(2, {
      en: ["sin α = 0.6 and α is in the first quarter. cos α = ?", ["0.4", "0.8", "−0.8"], "cos² α = 1 − 0.36 = 0.64, and cosine is positive in quarter I."],
      hy: ["sin α = 0,6 և α-ն առաջին քառորդում է։ cos α = ?", ["0,4", "0,8", "−0,8"], "cos² α = 1 − 0,36 = 0,64, իսկ I քառորդում կոսինուսը դրական է։"],
      ru: ["sin α = 0,6, α в первой четверти. cos α = ?", ["0,4", "0,8", "−0,8"], "cos² α = 1 − 0,36 = 0,64, а в I четверти косинус положителен."],
    }),
  ],
  "reduction-formulas": [
    "unit deg=150",
    closer(
      `**See it on the circle.** The point of $150°$ is the mirror image of the point of $30°$ in the y-axis: same height, opposite x. So $\\sin 150° = \\sin 30° = \\dfrac{1}{2}$ and $\\cos 150° = -\\cos 30°$.

**A two-question rule.** For $\\pi \\pm \\alpha$ or $2\\pi \\pm \\alpha$ the function stays the same; for $\\dfrac{\\pi}{2} \\pm \\alpha$ or $\\dfrac{3\\pi}{2} \\pm \\alpha$ sine and cosine swap (and tangent with cotangent). The sign is the sign of the **original** function in the quarter where the angle lands, imagining $\\alpha$ small.

**An example.** $\\cos(90° + \\alpha)$: the function changes to sine; $90° + \\alpha$ lies in quarter II, where cosine is negative, so $\\cos(90° + \\alpha) = -\\sin \\alpha$.`,
      `**Տես շրջանագծի վրա։** $150°$-ի կետը $30°$-ի կետի հայելային պատկերն է y առանցքի նկատմամբ՝ նույն բարձրությունը, հակադիր x։ Ուրեմն $\\sin 150° = \\sin 30° = \\dfrac{1}{2}$ և $\\cos 150° = -\\cos 30°$։

**Կանոն երկու հարցով։** $\\pi \\pm \\alpha$-ի կամ $2\\pi \\pm \\alpha$-ի դեպքում ֆունկցիան մնում է նույնը, $\\dfrac{\\pi}{2} \\pm \\alpha$-ի կամ $\\dfrac{3\\pi}{2} \\pm \\alpha$-ի դեպքում սինուսն ու կոսինուսը փոխվում են տեղերով (և տանգենսը՝ կոտանգենսի հետ)։ Նշանը **սկզբնական** ֆունկցիայի նշանն է այն քառորդում, որտեղ հայտնվում է անկյունը՝ $\\alpha$-ն փոքր պատկերացնելով։

**Օրինակ։** $\\cos(90° + \\alpha)$․ ֆունկցիան դառնում է սինուս, $90° + \\alpha$-ն II քառորդում է, որտեղ կոսինուսը բացասական է, ուրեմն $\\cos(90° + \\alpha) = -\\sin \\alpha$։`,
      `**Посмотри на окружности.** Точка $150°$ — зеркальное отражение точки $30°$ относительно оси y: та же высота, противоположная абсцисса. Поэтому $\\sin 150° = \\sin 30° = \\dfrac{1}{2}$ и $\\cos 150° = -\\cos 30°$.

**Правило из двух вопросов.** Для $\\pi \\pm \\alpha$ или $2\\pi \\pm \\alpha$ функция сохраняется; для $\\dfrac{\\pi}{2} \\pm \\alpha$ или $\\dfrac{3\\pi}{2} \\pm \\alpha$ синус и косинус меняются местами (и тангенс с котангенсом). Знак — знак **исходной** функции в той четверти, куда попадает угол, если считать $\\alpha$ малым.

**Пример.** $\\cos(90° + \\alpha)$: функция меняется на синус; $90° + \\alpha$ лежит во II четверти, где косинус отрицателен, поэтому $\\cos(90° + \\alpha) = -\\sin \\alpha$.`,
    ),
    ask(2, {
      en: ["cos 120° = ?", ["1/2", "−1/2", "−√3/2"], "cos(180° − 60°) = −cos 60° = −1/2."],
      hy: ["cos 120° = ?", ["1/2", "−1/2", "−√3/2"], "cos(180° − 60°) = −cos 60° = −1/2։"],
      ru: ["cos 120° = ?", ["1/2", "−1/2", "−√3/2"], "cos(180° − 60°) = −cos 60° = −1/2."],
    }),
  ],
  "addition-formulas": [
    closer(
      `**Sine mixes, cosine keeps.** $\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta$: sine and cosine alternate, and the sign is the same as in the bracket. $\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta$: cosines together, sines together, and the sign is opposite.

**New exact values.** $\\sin 75° = \\sin(45° + 30°) = \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$.

**The trap.** $\\sin(\\alpha + \\beta)$ is **not** $\\sin \\alpha + \\sin \\beta$: $\\sin 60° \\approx 0.87$, while $\\sin 30° + \\sin 30° = 1$.`,
      `**Սինուսը խառնում է, կոսինուսը՝ պահում։** $\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta$․ սինուսն ու կոսինուսը հերթափոխվում են, իսկ նշանը նույնն է, ինչ փակագծում։ $\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta$․ կոսինուսները միասին, սինուսները միասին, իսկ նշանը հակառակն է։

**Նոր ճշգրիտ արժեքներ։** $\\sin 75° = \\sin(45° + 30°) = \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$։

**Թակարդը։** $\\sin(\\alpha + \\beta)$-ն $\\sin \\alpha + \\sin \\beta$ **չէ**․ $\\sin 60° \\approx 0{,}87$, մինչդեռ $\\sin 30° + \\sin 30° = 1$։`,
      `**Синус смешивает, косинус сохраняет.** $\\sin(\\alpha \\pm \\beta) = \\sin \\alpha \\cos \\beta \\pm \\cos \\alpha \\sin \\beta$: синус и косинус чередуются, знак тот же, что в скобке. $\\cos(\\alpha \\pm \\beta) = \\cos \\alpha \\cos \\beta \\mp \\sin \\alpha \\sin \\beta$: косинусы вместе, синусы вместе, знак противоположный.

**Новые точные значения.** $\\sin 75° = \\sin(45° + 30°) = \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6} + \\sqrt{2}}{4}$.

**Ловушка.** $\\sin(\\alpha + \\beta)$ — **не** $\\sin \\alpha + \\sin \\beta$: $\\sin 60° \\approx 0{,}87$, а $\\sin 30° + \\sin 30° = 1$.`,
    ),
    ask(2, {
      en: ["cos(α − β) = ?", ["cos α cos β − sin α sin β", "cos α cos β + sin α sin β", "cos α − cos β"], "For cosine the sign flips: minus in the bracket becomes plus."],
      hy: ["cos(α − β) = ?", ["cos α cos β − sin α sin β", "cos α cos β + sin α sin β", "cos α − cos β"], "Կոսինուսի դեպքում նշանը շրջվում է․ փակագծի մինուսը դառնում է պլյուս։"],
      ru: ["cos(α − β) = ?", ["cos α cos β − sin α sin β", "cos α cos β + sin α sin β", "cos α − cos β"], "У косинуса знак меняется: минус в скобке становится плюсом."],
    }),
  ],
  "double-angle": [
    closer(
      `**Put β = α into the addition formulas.** $\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha$ and $\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$. Using $\\sin^2 + \\cos^2 = 1$, the cosine formula has two more forms: $2\\cos^2 \\alpha - 1$ and $1 - 2\\sin^2 \\alpha$.

**An example.** If $\\sin \\alpha = \\dfrac{3}{5}$ and $\\cos \\alpha = \\dfrac{4}{5}$, then $\\sin 2\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{24}{25}$ and $\\cos 2\\alpha = \\dfrac{16}{25} - \\dfrac{9}{25} = \\dfrac{7}{25}$.

**Read it backwards too.** $\\sin 15° \\cos 15° = \\dfrac{1}{2} \\sin 30° = \\dfrac{1}{4}$, and $\\cos^2 22.5° - \\sin^2 22.5° = \\cos 45° = \\dfrac{\\sqrt{2}}{2}$.`,
      `**Գումարման բանաձևերում դիր β = α։** $\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha$ և $\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$։ $\\sin^2 + \\cos^2 = 1$-ի օգնությամբ կոսինուսի բանաձևն ունի ևս երկու տեսք՝ $2\\cos^2 \\alpha - 1$ և $1 - 2\\sin^2 \\alpha$։

**Օրինակ։** Եթե $\\sin \\alpha = \\dfrac{3}{5}$ և $\\cos \\alpha = \\dfrac{4}{5}$, ապա $\\sin 2\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{24}{25}$ և $\\cos 2\\alpha = \\dfrac{16}{25} - \\dfrac{9}{25} = \\dfrac{7}{25}$։

**Կարդա նաև հակառակ ուղղությամբ։** $\\sin 15° \\cos 15° = \\dfrac{1}{2} \\sin 30° = \\dfrac{1}{4}$, և $\\cos^2 22{,}5° - \\sin^2 22{,}5° = \\cos 45° = \\dfrac{\\sqrt{2}}{2}$։`,
      `**Подставь β = α в формулы сложения.** $\\sin 2\\alpha = 2 \\sin \\alpha \\cos \\alpha$ и $\\cos 2\\alpha = \\cos^2 \\alpha - \\sin^2 \\alpha$. С помощью $\\sin^2 + \\cos^2 = 1$ у формулы косинуса есть ещё два вида: $2\\cos^2 \\alpha - 1$ и $1 - 2\\sin^2 \\alpha$.

**Пример.** Если $\\sin \\alpha = \\dfrac{3}{5}$ и $\\cos \\alpha = \\dfrac{4}{5}$, то $\\sin 2\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot \\dfrac{4}{5} = \\dfrac{24}{25}$ и $\\cos 2\\alpha = \\dfrac{16}{25} - \\dfrac{9}{25} = \\dfrac{7}{25}$.

**Читай и в обратную сторону.** $\\sin 15° \\cos 15° = \\dfrac{1}{2} \\sin 30° = \\dfrac{1}{4}$, а $\\cos^2 22{,}5° - \\sin^2 22{,}5° = \\cos 45° = \\dfrac{\\sqrt{2}}{2}$.`,
    ),
    ask(1, {
      en: ["2 sin 15° cos 15° = ?", ["1/2", "1/4", "√3/2"], "It is sin 30° = 1/2."],
      hy: ["2 sin 15° cos 15° = ?", ["1/2", "1/4", "√3/2"], "Դա sin 30° = 1/2-ն է։"],
      ru: ["2 sin 15° cos 15° = ?", ["1/2", "1/4", "√3/2"], "Это sin 30° = 1/2."],
    }),
  ],
  "half-angle": [
    closer(
      `**Lowering the power.** From $\\cos 2\\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$ we get $\\cos^2 \\alpha = \\dfrac{1 + \\cos 2\\alpha}{2}$ and $\\sin^2 \\alpha = \\dfrac{1 - \\cos 2\\alpha}{2}$. A square becomes a first power of the double angle.

**Half-angle values.** $\\cos^2 15° = \\dfrac{1 + \\cos 30°}{2} = \\dfrac{2 + \\sqrt{3}}{4}$, so $\\cos 15° = \\dfrac{\\sqrt{2 + \\sqrt{3}}}{2}$. The sign of the root comes from the quarter of the half angle: 15° is in quarter I, so it is plus.

**Why it matters later.** Integrals of $\\sin^2 x$ and $\\cos^2 x$ and many equations become easy once the square is gone.`,
      `**Աստիճանի իջեցում։** $\\cos 2\\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$-ից ստանում ենք $\\cos^2 \\alpha = \\dfrac{1 + \\cos 2\\alpha}{2}$ և $\\sin^2 \\alpha = \\dfrac{1 - \\cos 2\\alpha}{2}$։ Քառակուսին դառնում է կրկնակի անկյան առաջին աստիճան։

**Կես անկյան արժեքներ։** $\\cos^2 15° = \\dfrac{1 + \\cos 30°}{2} = \\dfrac{2 + \\sqrt{3}}{4}$, ուրեմն $\\cos 15° = \\dfrac{\\sqrt{2 + \\sqrt{3}}}{2}$։ Արմատի նշանն որոշվում է կես անկյան քառորդով․ 15°-ը I քառորդում է, ուրեմն պլյուս է։

**Ինչու է սա հետագայում կարևոր։** $\\sin^2 x$-ի և $\\cos^2 x$-ի ինտեգրալները և շատ հավասարումներ հեշտանում են, երբ քառակուսին վերանում է։`,
      `**Понижение степени.** Из $\\cos 2\\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$ получаем $\\cos^2 \\alpha = \\dfrac{1 + \\cos 2\\alpha}{2}$ и $\\sin^2 \\alpha = \\dfrac{1 - \\cos 2\\alpha}{2}$. Квадрат превращается в первую степень двойного угла.

**Значения половинного угла.** $\\cos^2 15° = \\dfrac{1 + \\cos 30°}{2} = \\dfrac{2 + \\sqrt{3}}{4}$, значит, $\\cos 15° = \\dfrac{\\sqrt{2 + \\sqrt{3}}}{2}$. Знак корня определяет четверть половинного угла: 15° в I четверти, поэтому плюс.

**Зачем это потом.** Интегралы от $\\sin^2 x$ и $\\cos^2 x$ и многие уравнения становятся простыми, когда квадрат исчезает.`,
    ),
    ask(1, {
      en: ["sin² α written without a square is…", ["(1 − cos 2α)/2", "(1 + cos 2α)/2", "2 sin α"], "From cos 2α = 1 − 2 sin² α."],
      hy: ["sin² α-ն առանց քառակուսու գրված է…", ["(1 − cos 2α)/2", "(1 + cos 2α)/2", "2 sin α"], "cos 2α = 1 − 2 sin² α-ից։"],
      ru: ["sin² α без квадрата записывается как…", ["(1 − cos 2α)/2", "(1 + cos 2α)/2", "2 sin α"], "Из cos 2α = 1 − 2 sin² α."],
    }),
  ],
  "sum-to-product": [
    closer(
      `**Half-sum and half-difference.** $\\sin \\alpha + \\sin \\beta = 2 \\sin \\dfrac{\\alpha + \\beta}{2} \\cos \\dfrac{\\alpha - \\beta}{2}$ and $\\cos \\alpha + \\cos \\beta = 2 \\cos \\dfrac{\\alpha + \\beta}{2} \\cos \\dfrac{\\alpha - \\beta}{2}$. A sum becomes a product, which is what equations need.

**An equation.** $\\sin 3x + \\sin x = 0$ becomes $2 \\sin 2x \\cos x = 0$, so $\\sin 2x = 0$ or $\\cos x = 0$: two simple equations instead of one hard one.

**You can hear this formula.** Two notes of almost the same pitch played together sound like one note getting louder and softer: the product has a fast factor (the half-sum) and a slow one (the half-difference). Musicians call these beats and use them to tune instruments.`,
      `**Կիսագումար և կիսատարբերություն։** $\\sin \\alpha + \\sin \\beta = 2 \\sin \\dfrac{\\alpha + \\beta}{2} \\cos \\dfrac{\\alpha - \\beta}{2}$ և $\\cos \\alpha + \\cos \\beta = 2 \\cos \\dfrac{\\alpha + \\beta}{2} \\cos \\dfrac{\\alpha - \\beta}{2}$։ Գումարը դառնում է արտադրյալ, ինչն էլ պետք է հավասարումներին։

**Հավասարում։** $\\sin 3x + \\sin x = 0$-ն դառնում է $2 \\sin 2x \\cos x = 0$, ուրեմն $\\sin 2x = 0$ կամ $\\cos x = 0$․ մեկ դժվարի փոխարեն երկու պարզ հավասարում։

**Այս բանաձևը կարելի է լսել։** Գրեթե նույն բարձրության երկու նոտա միասին հնչելիս թվում է, թե մեկ նոտա է, որն ուժեղանում ու թուլանում է․ արտադրյալն ունի արագ արտադրիչ (կիսագումարը) և դանդաղ արտադրիչ (կիսատարբերությունը)։ Երաժիշտները դա անվանում են զարկեր և օգտագործում գործիքները լարելու համար։`,
      `**Полусумма и полуразность.** $\\sin \\alpha + \\sin \\beta = 2 \\sin \\dfrac{\\alpha + \\beta}{2} \\cos \\dfrac{\\alpha - \\beta}{2}$ и $\\cos \\alpha + \\cos \\beta = 2 \\cos \\dfrac{\\alpha + \\beta}{2} \\cos \\dfrac{\\alpha - \\beta}{2}$. Сумма превращается в произведение — именно это и нужно в уравнениях.

**Уравнение.** $\\sin 3x + \\sin x = 0$ превращается в $2 \\sin 2x \\cos x = 0$, значит, $\\sin 2x = 0$ или $\\cos x = 0$: два простых уравнения вместо одного трудного.

**Эту формулу можно услышать.** Две ноты почти одинаковой высоты, звучащие вместе, кажутся одной нотой, которая то громче, то тише: в произведении есть быстрый множитель (полусумма) и медленный (полуразность). Музыканты называют это биениями и настраивают по ним инструменты.`,
    ),
    ask(1, {
      en: ["sin 5x + sin x = ?", ["2 sin 3x cos 2x", "2 sin 6x cos 4x", "2 cos 3x sin 2x"], "Half-sum (5x + x)/2 = 3x, half-difference (5x − x)/2 = 2x."],
      hy: ["sin 5x + sin x = ?", ["2 sin 3x cos 2x", "2 sin 6x cos 4x", "2 cos 3x sin 2x"], "Կիսագումարը (5x + x)/2 = 3x, կիսատարբերությունը (5x − x)/2 = 2x։"],
      ru: ["sin 5x + sin x = ?", ["2 sin 3x cos 2x", "2 sin 6x cos 4x", "2 cos 3x sin 2x"], "Полусумма (5x + x)/2 = 3x, полуразность (5x − x)/2 = 2x."],
    }),
  ],
  periodicity: [
    "plot mode=trig fn=sin k=2",
    closer(
      `**A pattern that repeats.** A function is periodic with period $T$ if $f(x + T) = f(x)$ for every $x$. Sine and cosine repeat after $2\\pi$, one full turn; tangent already after $\\pi$.

**Squeezing shortens the period.** $y = \\sin kx$ has period $\\dfrac{2\\pi}{k}$. The graph above is $\\sin 2x$: two full waves fit where $\\sin x$ has one, so its period is $\\pi$ (the orange bar).

**Periodic things around us.** Day and night, seasons, tides, a heartbeat, the hum of a power line at 50 Hz. Sines are the natural language for all of them.`,
      `**Կրկնվող նախշ։** Ֆունկցիան $T$ պարբերությամբ պարբերական է, եթե $f(x + T) = f(x)$ ցանկացած $x$-ի համար։ Սինուսն ու կոսինուսը կրկնվում են $2\\pi$-ից՝ մեկ լրիվ պտույտից հետո, տանգենսը՝ արդեն $\\pi$-ից հետո։

**Սեղմելը կարճացնում է պարբերությունը։** $y = \\sin kx$-ի պարբերությունը $\\dfrac{2\\pi}{k}$ է։ Վերևի գրաֆիկը $\\sin 2x$-ն է․ երկու լրիվ ալիք տեղավորվում է այնտեղ, որտեղ $\\sin x$-ն ունի մեկը, ուրեմն նրա պարբերությունը $\\pi$ է (նարնջագույն շերտը)։

**Պարբերական երևույթներ մեր շուրջը։** Ցերեկ ու գիշեր, տարվա եղանակներ, մակընթացություններ, սրտի զարկեր, էլեկտրագծի 50 Հց բզզոց։ Սինուսները դրանց բոլորի բնական լեզուն են։`,
      `**Повторяющийся узор.** Функция периодична с периодом $T$, если $f(x + T) = f(x)$ при любом $x$. Синус и косинус повторяются через $2\\pi$ — один полный оборот, тангенс — уже через $\\pi$.

**Сжатие укорачивает период.** У $y = \\sin kx$ период $\\dfrac{2\\pi}{k}$. График выше — $\\sin 2x$: две полные волны помещаются там, где у $\\sin x$ одна, поэтому его период $\\pi$ (оранжевая полоска).

**Периодическое вокруг нас.** День и ночь, времена года, приливы, сердцебиение, гул линии электропередачи на 50 Гц. Синусы — естественный язык для всего этого.`,
    ),
    ask(2, {
      en: ["What is the period of y = cos 3x?", ["3π", "2π/3", "π/3"], "T = 2π / k = 2π/3."],
      hy: ["Որքա՞ն է y = cos 3x-ի պարբերությունը։", ["3π", "2π/3", "π/3"], "T = 2π / k = 2π/3։"],
      ru: ["Каков период y = cos 3x?", ["3π", "2π/3", "π/3"], "T = 2π / k = 2π/3."],
    }),
  ],
  "graph-sin-cos": [
    "plot mode=trig fn=sin",
    closer(
      `**The unit circle, unrolled.** As the point goes round the circle, its height is $\\sin x$. Plot the height against the angle and you get the wave above: 0 at $x = 0$, 1 at $\\dfrac{\\pi}{2}$, 0 at $\\pi$, $-1$ at $\\dfrac{3\\pi}{2}$, and again 0 at $2\\pi$.

**Cosine is the same wave, shifted.** $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$: the cosine graph is the sine graph moved $\\dfrac{\\pi}{2}$ to the left, so it starts at its top, $\\cos 0 = 1$. Switch to cos above to compare.

**Key points to remember.** Zeros of $\\sin x$: $x = \\pi n$; maxima: $\\dfrac{\\pi}{2} + 2\\pi n$. Zeros of $\\cos x$: $\\dfrac{\\pi}{2} + \\pi n$; maxima: $2\\pi n$.`,
      `**Միավոր շրջանագիծը՝ փռված։** Երբ կետը պտտվում է շրջանագծով, նրա բարձրությունը $\\sin x$ է։ Բարձրությունը կառուցիր ըստ անկյան, և կստանաս վերևի ալիքը՝ 0 $x = 0$-ում, 1 $\\dfrac{\\pi}{2}$-ում, 0 $\\pi$-ում, $-1$ $\\dfrac{3\\pi}{2}$-ում և կրկին 0 $2\\pi$-ում։

**Կոսինուսը նույն ալիքն է՝ տեղաշարժված։** $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$․ կոսինուսի գրաֆիկը սինուսի գրաֆիկն է՝ $\\dfrac{\\pi}{2}$-ով ձախ տեղաշարժված, ուստի այն սկսվում է իր գագաթից՝ $\\cos 0 = 1$։ Համեմատելու համար վերևում անցիր cos-ին։

**Հիշելու կարևոր կետեր։** $\\sin x$-ի զրոները՝ $x = \\pi n$, մաքսիմումները՝ $\\dfrac{\\pi}{2} + 2\\pi n$։ $\\cos x$-ի զրոները՝ $\\dfrac{\\pi}{2} + \\pi n$, մաքսիմումները՝ $2\\pi n$։`,
      `**Развёрнутая единичная окружность.** Пока точка бежит по окружности, её высота равна $\\sin x$. Построй высоту в зависимости от угла — получится волна выше: 0 при $x = 0$, 1 при $\\dfrac{\\pi}{2}$, 0 при $\\pi$, $-1$ при $\\dfrac{3\\pi}{2}$ и снова 0 при $2\\pi$.

**Косинус — та же волна, только сдвинутая.** $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$: график косинуса — график синуса, сдвинутый на $\\dfrac{\\pi}{2}$ влево, поэтому он начинается с вершины, $\\cos 0 = 1$. Переключись на cos выше, чтобы сравнить.

**Ключевые точки.** Нули $\\sin x$: $x = \\pi n$; максимумы: $\\dfrac{\\pi}{2} + 2\\pi n$. Нули $\\cos x$: $\\dfrac{\\pi}{2} + \\pi n$; максимумы: $2\\pi n$.`,
    ),
    ask(2, {
      en: ["Where on [0; 2π] does y = sin x reach its maximum?", ["x = 0", "x = π/2", "x = π"], "sin(π/2) = 1, the top of the wave."],
      hy: ["[0; 2π]-ի ո՞ր կետում է y = sin x-ը հասնում մաքսիմումի։", ["x = 0", "x = π/2", "x = π"], "sin(π/2) = 1, ալիքի գագաթը։"],
      ru: ["Где на [0; 2π] функция y = sin x достигает максимума?", ["x = 0", "x = π/2", "x = π"], "sin(π/2) = 1 — вершина волны."],
    }),
  ],
  "graph-tan": [
    "plot mode=trig fn=tan",
    closer(
      `**Branches between walls.** $\\tan x = \\dfrac{\\sin x}{\\cos x}$ does not exist where $\\cos x = 0$, at $x = \\dfrac{\\pi}{2} + \\pi n$. Near these lines the graph shoots off to $+\\infty$ on one side and comes from $-\\infty$ on the other: they are **asymptotes**.

**Period π, always increasing.** Each branch rises from $-\\infty$ to $+\\infty$ and they are all copies of the one through the origin. The function is odd: $\\tan(-x) = -\\tan x$.

**Cotangent is the mirror story.** $\\cot x$ has its walls at $x = \\pi n$ (where $\\sin x = 0$) and each branch falls instead of rising.`,
      `**Ճյուղեր պատերի միջև։** $\\operatorname{tg} x = \\dfrac{\\sin x}{\\cos x}$-ը գոյություն չունի, որտեղ $\\cos x = 0$, այսինքն՝ $x = \\dfrac{\\pi}{2} + \\pi n$-ում։ Այս ուղիղների մոտ գրաֆիկը մի կողմից գնում է $+\\infty$, մյուս կողմից գալիս $-\\infty$-ից․ դրանք **ասիմպտոտներ** են։

**Պարբերությունը π է, միշտ աճող։** Յուրաքանչյուր ճյուղ բարձրանում է $-\\infty$-ից մինչև $+\\infty$, և բոլորը սկզբնակետով անցնող ճյուղի պատճեններն են։ Ֆունկցիան կենտ է՝ $\\operatorname{tg}(-x) = -\\operatorname{tg} x$։

**Կոտանգենսը հայելային պատմություն է։** $\\operatorname{ctg} x$-ի պատերը $x = \\pi n$-ում են (որտեղ $\\sin x = 0$), և յուրաքանչյուր ճյուղ բարձրանալու փոխարեն իջնում է։`,
      `**Ветви между стенками.** $\\operatorname{tg} x = \\dfrac{\\sin x}{\\cos x}$ не существует там, где $\\cos x = 0$, — при $x = \\dfrac{\\pi}{2} + \\pi n$. Возле этих прямых график с одной стороны уходит в $+\\infty$, а с другой приходит из $-\\infty$: это **асимптоты**.

**Период π, всегда возрастает.** Каждая ветвь поднимается от $-\\infty$ до $+\\infty$, и все они — копии ветви через начало координат. Функция нечётная: $\\operatorname{tg}(-x) = -\\operatorname{tg} x$.

**Котангенс — зеркальная история.** У $\\operatorname{ctg} x$ стенки при $x = \\pi n$ (где $\\sin x = 0$), и каждая ветвь не возрастает, а убывает.`,
    ),
    ask(2, {
      en: ["Which line is an asymptote of y = tan x?", ["x = 0", "x = π/2", "x = π"], "cos(π/2) = 0, so tan is not defined there."],
      hy: ["Ո՞ր ուղիղն է y = tg x-ի ասիմպտոտ։", ["x = 0", "x = π/2", "x = π"], "cos(π/2) = 0, ուստի այնտեղ tg-ն որոշված չէ։"],
      ru: ["Какая прямая — асимптота графика y = tg x?", ["x = 0", "x = π/2", "x = π"], "cos(π/2) = 0, поэтому там tg не определён."],
    }),
  ],
  "alg10-trig-properties": [
    "plot mode=trig fn=cos a=2",
    closer(
      `**The checklist for any trigonometric function.** Domain, range, parity, period, zeros, where it increases and decreases, greatest and smallest values. The graph above, $y = 2\\cos x$: all real $x$; range $[-2; 2]$; even; period $2\\pi$; zeros at $\\dfrac{\\pi}{2} + \\pi n$; maximum 2 at $x = 2\\pi n$.

**Parity at a glance.** $\\sin$ and $\\tan$ are odd, $\\cos$ is even. So $\\sin(-30°) = -\\dfrac{1}{2}$ but $\\cos(-60°) = \\dfrac{1}{2}$.

**Range of a combination.** $y = 3\\sin x - 1$: since $-1 \\le \\sin x \\le 1$, multiply by 3 and subtract 1: $-4 \\le y \\le 2$.`,
      `**Ցանկացած եռանկյունաչափական ֆունկցիայի ստուգաթերթը։** Որոշման տիրույթ, արժեքների տիրույթ, զույգություն, պարբերություն, զրոներ, որտեղ է աճում և նվազում, ամենամեծ և ամենափոքր արժեքները։ Վերևի գրաֆիկը՝ $y = 2\\cos x$․ բոլոր իրական $x$-երը, արժեքները՝ $[-2; 2]$, զույգ, պարբերությունը՝ $2\\pi$, զրոները՝ $\\dfrac{\\pi}{2} + \\pi n$-ում, մաքսիմումը՝ 2, $x = 2\\pi n$-ում։

**Զույգությունը՝ մեկ հայացքով։** $\\sin$-ը և $\\operatorname{tg}$-ն կենտ են, $\\cos$-ը՝ զույգ։ Ուրեմն $\\sin(-30°) = -\\dfrac{1}{2}$, բայց $\\cos(-60°) = \\dfrac{1}{2}$։

**Համակցության արժեքների տիրույթը։** $y = 3\\sin x - 1$․ քանի որ $-1 \\le \\sin x \\le 1$, բազմապատկիր 3-ով և հանիր 1՝ $-4 \\le y \\le 2$։`,
      `**Чек-лист для любой тригонометрической функции.** Область определения, множество значений, чётность, период, нули, промежутки возрастания и убывания, наибольшее и наименьшее значения. График выше, $y = 2\\cos x$: все действительные $x$; значения $[-2; 2]$; чётная; период $2\\pi$; нули при $\\dfrac{\\pi}{2} + \\pi n$; максимум 2 при $x = 2\\pi n$.

**Чётность с первого взгляда.** $\\sin$ и $\\operatorname{tg}$ нечётные, $\\cos$ чётный. Поэтому $\\sin(-30°) = -\\dfrac{1}{2}$, а $\\cos(-60°) = \\dfrac{1}{2}$.

**Множество значений комбинации.** $y = 3\\sin x - 1$: так как $-1 \\le \\sin x \\le 1$, умножаем на 3 и вычитаем 1: $-4 \\le y \\le 2$.`,
    ),
    ask(2, {
      en: ["What is the range of y = 3 sin x − 1?", ["[−1; 3]", "[−4; 2]", "[−3; 3]"], "3 · (−1) − 1 = −4 and 3 · 1 − 1 = 2."],
      hy: ["Ո՞րն է y = 3 sin x − 1-ի արժեքների տիրույթը։", ["[−1; 3]", "[−4; 2]", "[−3; 3]"], "3 · (−1) − 1 = −4 և 3 · 1 − 1 = 2։"],
      ru: ["Каково множество значений y = 3 sin x − 1?", ["[−1; 3]", "[−4; 2]", "[−3; 3]"], "3 · (−1) − 1 = −4 и 3 · 1 − 1 = 2."],
    }),
  ],
  "graph-transformations": [
    "plot mode=trig fn=sin a=2 k=2 d=1",
    closer(
      `**Three numbers, three effects.** In $y = a \\sin kx + d$: $a$ is the amplitude (the height of the waves), $k$ squeezes the graph (period $\\dfrac{2\\pi}{k}$), $d$ lifts it. Above, $y = 2\\sin 2x + 1$ has period $\\pi$ and range $[-1; 3]$.

**The phase shift hides inside the bracket.** $y = \\sin\\left(x - \\dfrac{\\pi}{3}\\right)$ is $\\sin x$ moved $\\dfrac{\\pi}{3}$ to the right.

**Factor out k first.** $\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) = \\sin 2\\left(x - \\dfrac{\\pi}{6}\\right)$: the shift is $\\dfrac{\\pi}{6}$, not $\\dfrac{\\pi}{3}$. This is the most common mistake with these graphs.`,
      `**Երեք թիվ՝ երեք ազդեցություն։** $y = a \\sin kx + d$-ում $a$-ն ամպլիտուդն է (ալիքների բարձրությունը), $k$-ն սեղմում է գրաֆիկը (պարբերությունը՝ $\\dfrac{2\\pi}{k}$), $d$-ն այն բարձրացնում է։ Վերևում $y = 2\\sin 2x + 1$-ի պարբերությունը $\\pi$ է, արժեքների տիրույթը՝ $[-1; 3]$։

**Փուլային տեղաշարժը թաքնված է փակագծում։** $y = \\sin\\left(x - \\dfrac{\\pi}{3}\\right)$-ը $\\sin x$-ն է՝ $\\dfrac{\\pi}{3}$-ով աջ տեղաշարժված։

**Նախ դուրս բեր k-ն։** $\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) = \\sin 2\\left(x - \\dfrac{\\pi}{6}\\right)$․ տեղաշարժը $\\dfrac{\\pi}{6}$ է, ոչ թե $\\dfrac{\\pi}{3}$։ Սա այս գրաֆիկների ամենատարածված սխալն է։`,
      `**Три числа — три эффекта.** В $y = a \\sin kx + d$: $a$ — амплитуда (высота волн), $k$ сжимает график (период $\\dfrac{2\\pi}{k}$), $d$ поднимает его. Выше у $y = 2\\sin 2x + 1$ период $\\pi$ и множество значений $[-1; 3]$.

**Сдвиг по фазе прячется в скобке.** $y = \\sin\\left(x - \\dfrac{\\pi}{3}\\right)$ — это $\\sin x$, сдвинутый на $\\dfrac{\\pi}{3}$ вправо.

**Сначала вынеси k.** $\\sin\\left(2x - \\dfrac{\\pi}{3}\\right) = \\sin 2\\left(x - \\dfrac{\\pi}{6}\\right)$: сдвиг на $\\dfrac{\\pi}{6}$, а не на $\\dfrac{\\pi}{3}$. Это самая частая ошибка с такими графиками.`,
    ),
    ask(1, {
      en: ["Period and range of y = 2 sin 2x + 1?", ["π and [−1; 3]", "2π and [−1; 3]", "π and [−2; 2]"], "Period 2π/2 = π; the values 2 · [−1; 1] + 1 = [−1; 3]."],
      hy: ["y = 2 sin 2x + 1-ի պարբերությունը և արժեքների տիրույթը։", ["π և [−1; 3]", "2π և [−1; 3]", "π և [−2; 2]"], "Պարբերությունը՝ 2π/2 = π, արժեքները՝ 2 · [−1; 1] + 1 = [−1; 3]։"],
      ru: ["Период и множество значений y = 2 sin 2x + 1?", ["π и [−1; 3]", "2π и [−1; 3]", "π и [−2; 2]"], "Период 2π/2 = π; значения 2 · [−1; 1] + 1 = [−1; 3]."],
    }),
  ],
  arccos: [
    "unit mode=solve fn=cos a=0.5",
    closer(
      `**arccos a is one angle, chosen from [0; π].** It is the angle in the upper half of the circle whose cosine is $a$. $\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{3}$, $\\arccos 0 = \\dfrac{\\pi}{2}$, $\\arccos(-1) = \\pi$.

**The equation has two families of solutions.** The vertical line $x = a$ above cuts the circle at two points, symmetric about the x-axis: $x = \\pm\\arccos a + 2\\pi n$. For $|a| > 1$ the line misses the circle and there are no solutions.

**Negative arguments.** $\\arccos(-a) = \\pi - \\arccos a$, so $\\arccos\\left(-\\dfrac{1}{2}\\right) = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$. Try $-\\dfrac{1}{2}$ above.`,
      `**arccos a-ն մեկ անկյուն է՝ ընտրված [0; π]-ից։** Դա շրջանագծի վերին կեսի այն անկյունն է, որի կոսինուսը $a$ է։ $\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{3}$, $\\arccos 0 = \\dfrac{\\pi}{2}$, $\\arccos(-1) = \\pi$։

**Հավասարումն ունի լուծումների երկու ընտանիք։** Վերևի $x = a$ ուղղաձիգ ուղիղը շրջանագիծը հատում է երկու կետում՝ համաչափ x առանցքի նկատմամբ՝ $x = \\pm\\arccos a + 2\\pi n$։ $|a| > 1$ դեպքում ուղիղը չի հատում շրջանագիծը, և լուծում չկա։

**Բացասական արգումենտներ։** $\\arccos(-a) = \\pi - \\arccos a$, ուրեմն $\\arccos\\left(-\\dfrac{1}{2}\\right) = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$։ Վերևում փորձիր $-\\dfrac{1}{2}$-ը։`,
      `**arccos a — один угол, выбранный из [0; π].** Это угол в верхней половине окружности, косинус которого равен $a$. $\\arccos \\dfrac{1}{2} = \\dfrac{\\pi}{3}$, $\\arccos 0 = \\dfrac{\\pi}{2}$, $\\arccos(-1) = \\pi$.

**У уравнения две серии решений.** Вертикальная прямая $x = a$ выше пересекает окружность в двух точках, симметричных относительно оси x: $x = \\pm\\arccos a + 2\\pi n$. При $|a| > 1$ прямая не задевает окружность, решений нет.

**Отрицательные аргументы.** $\\arccos(-a) = \\pi - \\arccos a$, поэтому $\\arccos\\left(-\\dfrac{1}{2}\\right) = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$. Попробуй $-\\dfrac{1}{2}$ выше.`,
    ),
    ask(2, {
      en: ["arccos(−1/2) = ?", ["−π/3", "2π/3", "π/3"], "π − arccos(1/2) = π − π/3 = 2π/3; arccos is never negative."],
      hy: ["arccos(−1/2) = ?", ["−π/3", "2π/3", "π/3"], "π − arccos(1/2) = π − π/3 = 2π/3․ arccos-ը երբեք բացասական չէ։"],
      ru: ["arccos(−1/2) = ?", ["−π/3", "2π/3", "π/3"], "π − arccos(1/2) = π − π/3 = 2π/3; арккосинус не бывает отрицательным."],
    }),
  ],
  arcsin: [
    "unit mode=solve fn=sin a=0.5",
    closer(
      `**arcsin a is chosen from [−π/2; π/2].** That is the right half of the circle, where every height from $-1$ to $1$ appears exactly once. $\\arcsin \\dfrac{1}{2} = \\dfrac{\\pi}{6}$, $\\arcsin(-1) = -\\dfrac{\\pi}{2}$, and $\\arcsin(-a) = -\\arcsin a$.

**Two points, one formula.** The horizontal line $y = a$ above meets the circle at $\\arcsin a$ and at $\\pi - \\arcsin a$. Both series together are written as $x = (-1)^n \\arcsin a + \\pi n$: even $n$ give the first point, odd $n$ the second.

**Special cases have simpler answers.** $\\sin x = 0$: $x = \\pi n$; $\\sin x = 1$: $x = \\dfrac{\\pi}{2} + 2\\pi n$; $\\sin x = -1$: $x = -\\dfrac{\\pi}{2} + 2\\pi n$.`,
      `**arcsin a-ն ընտրվում է [−π/2; π/2]-ից։** Դա շրջանագծի աջ կեսն է, որտեղ $-1$-ից $1$ ամեն բարձրություն հանդիպում է ճիշտ մեկ անգամ։ $\\arcsin \\dfrac{1}{2} = \\dfrac{\\pi}{6}$, $\\arcsin(-1) = -\\dfrac{\\pi}{2}$, և $\\arcsin(-a) = -\\arcsin a$։

**Երկու կետ՝ մեկ բանաձև։** Վերևի $y = a$ հորիզոնական ուղիղը շրջանագծին հանդիպում է $\\arcsin a$-ում և $\\pi - \\arcsin a$-ում։ Երկու շարքն էլ միասին գրվում են $x = (-1)^n \\arcsin a + \\pi n$ տեսքով․ զույգ $n$-երը տալիս են առաջին կետը, կենտերը՝ երկրորդը։

**Հատուկ դեպքերն ունեն ավելի պարզ պատասխաններ։** $\\sin x = 0$՝ $x = \\pi n$, $\\sin x = 1$՝ $x = \\dfrac{\\pi}{2} + 2\\pi n$, $\\sin x = -1$՝ $x = -\\dfrac{\\pi}{2} + 2\\pi n$։`,
      `**arcsin a выбирается из [−π/2; π/2].** Это правая половина окружности, где каждая высота от $-1$ до $1$ встречается ровно один раз. $\\arcsin \\dfrac{1}{2} = \\dfrac{\\pi}{6}$, $\\arcsin(-1) = -\\dfrac{\\pi}{2}$, и $\\arcsin(-a) = -\\arcsin a$.

**Две точки — одна формула.** Горизонтальная прямая $y = a$ выше встречает окружность в $\\arcsin a$ и в $\\pi - \\arcsin a$. Обе серии вместе записывают как $x = (-1)^n \\arcsin a + \\pi n$: чётные $n$ дают первую точку, нечётные — вторую.

**У частных случаев ответы проще.** $\\sin x = 0$: $x = \\pi n$; $\\sin x = 1$: $x = \\dfrac{\\pi}{2} + 2\\pi n$; $\\sin x = -1$: $x = -\\dfrac{\\pi}{2} + 2\\pi n$.`,
    ),
    ask(1, {
      en: ["What are the solutions of sin x = 1/2 in [0; 2π)?", ["π/6 and 5π/6", "π/6 and 11π/6", "π/3 and 2π/3"], "arcsin(1/2) = π/6 and π − π/6 = 5π/6."],
      hy: ["Որո՞նք են sin x = 1/2-ի լուծումները [0; 2π)-ում։", ["π/6 և 5π/6", "π/6 և 11π/6", "π/3 և 2π/3"], "arcsin(1/2) = π/6 և π − π/6 = 5π/6։"],
      ru: ["Каковы решения sin x = 1/2 на [0; 2π)?", ["π/6 и 5π/6", "π/6 и 11π/6", "π/3 и 2π/3"], "arcsin(1/2) = π/6 и π − π/6 = 5π/6."],
    }),
  ],
  arctan: [
    "unit mode=solve fn=tan a=1",
    closer(
      `**arctan works for every number.** $\\arctan a$ is the angle in $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ whose tangent is $a$; any real $a$ is allowed, because tangent takes every value. $\\arctan 1 = \\dfrac{\\pi}{4}$, $\\arctan \\sqrt{3} = \\dfrac{\\pi}{3}$, $\\arctan(-a) = -\\arctan a$.

**Why one formula is enough.** The line through the origin above meets the circle at two opposite points, exactly $\\pi$ apart. So all solutions of $\\tan x = a$ are $x = \\arctan a + \\pi n$.

**Cotangent in the same way.** $\\cot x = a$ gives $x = \\operatorname{arccot} a + \\pi n$, where $\\operatorname{arccot} a$ lies in $(0; \\pi)$.`,
      `**arctg-ն աշխատում է ցանկացած թվի համար։** $\\operatorname{arctg} a$-ն $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$-ի այն անկյունն է, որի տանգենսը $a$ է․ թույլատրված է ցանկացած իրական $a$, քանի որ տանգենսն ընդունում է բոլոր արժեքները։ $\\operatorname{arctg} 1 = \\dfrac{\\pi}{4}$, $\\operatorname{arctg} \\sqrt{3} = \\dfrac{\\pi}{3}$, $\\operatorname{arctg}(-a) = -\\operatorname{arctg} a$։

**Ինչու է մեկ բանաձևը բավական։** Վերևում սկզբնակետով անցնող ուղիղը շրջանագծին հանդիպում է երկու հակադիր կետում՝ ճիշտ $\\pi$ հեռավորությամբ։ Ուրեմն $\\operatorname{tg} x = a$-ի բոլոր լուծումներն են $x = \\operatorname{arctg} a + \\pi n$։

**Կոտանգենսը՝ նույն կերպ։** $\\operatorname{ctg} x = a$-ն տալիս է $x = \\operatorname{arcctg} a + \\pi n$, որտեղ $\\operatorname{arcctg} a$-ն գտնվում է $(0; \\pi)$-ում։`,
      `**Арктангенс работает для любого числа.** $\\operatorname{arctg} a$ — угол из $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, тангенс которого равен $a$; подходит любое действительное $a$, потому что тангенс принимает все значения. $\\operatorname{arctg} 1 = \\dfrac{\\pi}{4}$, $\\operatorname{arctg} \\sqrt{3} = \\dfrac{\\pi}{3}$, $\\operatorname{arctg}(-a) = -\\operatorname{arctg} a$.

**Почему хватает одной формулы.** Прямая через начало координат выше встречает окружность в двух противоположных точках, ровно через $\\pi$. Поэтому все решения $\\operatorname{tg} x = a$ — это $x = \\operatorname{arctg} a + \\pi n$.

**Котангенс так же.** $\\operatorname{ctg} x = a$ даёт $x = \\operatorname{arcctg} a + \\pi n$, где $\\operatorname{arcctg} a$ лежит в $(0; \\pi)$.`,
    ),
    ask(1, {
      en: ["Solve tan x = −1.", ["x = −π/4 + πn", "x = 3π/4 + 2πn", "x = ±π/4 + πn"], "arctan(−1) = −π/4, and tangent repeats every π."],
      hy: ["Լուծի՛ր tg x = −1։", ["x = −π/4 + πn", "x = 3π/4 + 2πn", "x = ±π/4 + πn"], "arctg(−1) = −π/4, իսկ տանգենսը կրկնվում է յուրաքանչյուր π-ից հետո։"],
      ru: ["Реши tg x = −1.", ["x = −π/4 + πn", "x = 3π/4 + 2πn", "x = ±π/4 + πn"], "arctg(−1) = −π/4, а тангенс повторяется через каждые π."],
    }),
  ],
  "trig-equation-methods": [
    closer(
      `**Reduce to one function.** $2\\sin^2 x - \\sin x - 1 = 0$ is a quadratic in $t = \\sin x$: $t = 1$ or $t = -\\dfrac{1}{2}$. Then solve $\\sin x = 1$ and $\\sin x = -\\dfrac{1}{2}$ separately. Replace $\\cos^2 x$ by $1 - \\sin^2 x$ when both appear.

**Factor.** $\\sin 2x = \\cos x$ becomes $\\cos x(2\\sin x - 1) = 0$. Never divide by $\\cos x$ here: the solutions $\\cos x = 0$ would be lost.

**Homogeneous equations.** In $\\sin x = \\sqrt{3}\\cos x$ every term has the same degree. Here dividing by $\\cos x$ is safe (if $\\cos x = 0$, then $\\sin x = \\pm 1$ and the equation fails), giving $\\tan x = \\sqrt{3}$, $x = \\dfrac{\\pi}{3} + \\pi n$.`,
      `**Բեր մեկ ֆունկցիայի։** $2\\sin^2 x - \\sin x - 1 = 0$-ն քառակուսային է $t = \\sin x$-ի նկատմամբ՝ $t = 1$ կամ $t = -\\dfrac{1}{2}$։ Հետո առանձին լուծիր $\\sin x = 1$-ը և $\\sin x = -\\dfrac{1}{2}$-ը։ Երբ երկուսն էլ կան, $\\cos^2 x$-ը փոխարինիր $1 - \\sin^2 x$-ով։

**Վերլուծիր։** $\\sin 2x = \\cos x$-ը դառնում է $\\cos x(2\\sin x - 1) = 0$։ Այստեղ երբեք մի բաժանիր $\\cos x$-ի․ կկորչեն $\\cos x = 0$ լուծումները։

**Համասեռ հավասարումներ։** $\\sin x = \\sqrt{3}\\cos x$-ում բոլոր անդամներն ունեն նույն աստիճանը։ Այստեղ $\\cos x$-ի վրա բաժանելն անվտանգ է (եթե $\\cos x = 0$, ապա $\\sin x = \\pm 1$, և հավասարումը չի բավարարվում), ստանում ենք $\\operatorname{tg} x = \\sqrt{3}$, $x = \\dfrac{\\pi}{3} + \\pi n$։`,
      `**Сведи к одной функции.** $2\\sin^2 x - \\sin x - 1 = 0$ — квадратное уравнение относительно $t = \\sin x$: $t = 1$ или $t = -\\dfrac{1}{2}$. Затем отдельно реши $\\sin x = 1$ и $\\sin x = -\\dfrac{1}{2}$. Если есть и синус, и косинус, замени $\\cos^2 x$ на $1 - \\sin^2 x$.

**Раскладывай на множители.** $\\sin 2x = \\cos x$ превращается в $\\cos x(2\\sin x - 1) = 0$. Здесь нельзя делить на $\\cos x$: потеряются решения $\\cos x = 0$.

**Однородные уравнения.** В $\\sin x = \\sqrt{3}\\cos x$ все члены одной степени. Здесь делить на $\\cos x$ безопасно (если $\\cos x = 0$, то $\\sin x = \\pm 1$, и равенство не выполняется), получаем $\\operatorname{tg} x = \\sqrt{3}$, $x = \\dfrac{\\pi}{3} + \\pi n$.`,
    ),
    ask(1, {
      en: ["2 sin² x − 3 sin x + 1 = 0 gives sin x = …", ["1 and 1/2", "−1 and −1/2", "2 and 1"], "2t² − 3t + 1 = 0: t = (3 ± 1)/4."],
      hy: ["2 sin² x − 3 sin x + 1 = 0-ից sin x = …", ["1 և 1/2", "−1 և −1/2", "2 և 1"], "2t² − 3t + 1 = 0․ t = (3 ± 1)/4։"],
      ru: ["Из 2 sin² x − 3 sin x + 1 = 0 следует sin x = …", ["1 и 1/2", "−1 и −1/2", "2 и 1"], "2t² − 3t + 1 = 0: t = (3 ± 1)/4."],
    }),
  ],
  "trig-inequalities": [
    closer(
      `**Mark an arc on the circle.** For $\\sin x > \\dfrac{1}{2}$ draw the line $y = \\dfrac{1}{2}$: the points above it form the arc from $\\dfrac{\\pi}{6}$ to $\\dfrac{5\\pi}{6}$. So $\\dfrac{\\pi}{6} + 2\\pi n < x < \\dfrac{5\\pi}{6} + 2\\pi n$.

**Walk anticlockwise.** Write the arc from its starting end to its finishing end going anticlockwise, so that the left number is smaller. For $\\cos x > 0$ the arc goes from $-\\dfrac{\\pi}{2}$ to $\\dfrac{\\pi}{2}$, not from $\\dfrac{\\pi}{2}$ to $-\\dfrac{\\pi}{2}$.

**Add the period at the end.** For sine and cosine add $2\\pi n$ to both ends; for tangent, whose period is $\\pi$, add $\\pi n$: $\\tan x > 1$ gives $\\dfrac{\\pi}{4} + \\pi n < x < \\dfrac{\\pi}{2} + \\pi n$.`,
      `**Նշիր աղեղ շրջանագծի վրա։** $\\sin x > \\dfrac{1}{2}$-ի համար գծիր $y = \\dfrac{1}{2}$ ուղիղը․ նրանից վեր գտնվող կետերը կազմում են $\\dfrac{\\pi}{6}$-ից $\\dfrac{5\\pi}{6}$ աղեղը։ Ուրեմն $\\dfrac{\\pi}{6} + 2\\pi n < x < \\dfrac{5\\pi}{6} + 2\\pi n$։

**Քայլիր ժամսլաքի հակառակ ուղղությամբ։** Աղեղը գրիր նրա սկզբից մինչև վերջ՝ ժամսլաքի հակառակ ուղղությամբ, որպեսզի ձախ թիվն ավելի փոքր լինի։ $\\cos x > 0$-ի համար աղեղը գնում է $-\\dfrac{\\pi}{2}$-ից $\\dfrac{\\pi}{2}$, ոչ թե $\\dfrac{\\pi}{2}$-ից $-\\dfrac{\\pi}{2}$։

**Վերջում ավելացրու պարբերությունը։** Սինուսի և կոսինուսի համար երկու ծայրերին ավելացրու $2\\pi n$, տանգենսի համար, որի պարբերությունը $\\pi$ է՝ $\\pi n$․ $\\operatorname{tg} x > 1$-ը տալիս է $\\dfrac{\\pi}{4} + \\pi n < x < \\dfrac{\\pi}{2} + \\pi n$։`,
      `**Отметь дугу на окружности.** Для $\\sin x > \\dfrac{1}{2}$ проведи прямую $y = \\dfrac{1}{2}$: точки выше неё образуют дугу от $\\dfrac{\\pi}{6}$ до $\\dfrac{5\\pi}{6}$. Поэтому $\\dfrac{\\pi}{6} + 2\\pi n < x < \\dfrac{5\\pi}{6} + 2\\pi n$.

**Иди против часовой стрелки.** Записывай дугу от начала к концу, двигаясь против часовой стрелки, чтобы левое число было меньше. Для $\\cos x > 0$ дуга идёт от $-\\dfrac{\\pi}{2}$ до $\\dfrac{\\pi}{2}$, а не от $\\dfrac{\\pi}{2}$ до $-\\dfrac{\\pi}{2}$.

**Период — в конце.** Для синуса и косинуса прибавь $2\\pi n$ к обоим концам, для тангенса с периодом $\\pi$ — $\\pi n$: $\\operatorname{tg} x > 1$ даёт $\\dfrac{\\pi}{4} + \\pi n < x < \\dfrac{\\pi}{2} + \\pi n$.`,
    ),
    ask(2, {
      en: ["Solve cos x > 0 on [0; 2π).", ["(0; π)", "[0; π/2) ∪ (3π/2; 2π)", "(π/2; 3π/2)"], "Cosine is positive in quarters I and IV."],
      hy: ["Լուծի՛ր cos x > 0-ն [0; 2π)-ում։", ["(0; π)", "[0; π/2) ∪ (3π/2; 2π)", "(π/2; 3π/2)"], "Կոսինուսը դրական է I և IV քառորդներում։"],
      ru: ["Реши cos x > 0 на [0; 2π).", ["(0; π)", "[0; π/2) ∪ (3π/2; 2π)", "(π/2; 3π/2)"], "Косинус положителен в I и IV четвертях."],
    }),
  ],
  "sequence-limit": [
    "seq mode=geom b=8 q=-0.5 n=10",
    closer(
      `**Getting as close as you like.** A sequence tends to $a$ if, for any small distance you choose, all terms from some point on stay within that distance of $a$. The columns above jump up and down, but their size shrinks towards 0: $8 \\cdot (-0.5)^{n-1} \\to 0$.

**Three limits to know.** $\\dfrac{1}{n} \\to 0$; $q^n \\to 0$ for $|q| < 1$; a constant tends to itself.

**Divide by the highest power.** $\\dfrac{2n^2 + 1}{n^2 - 3} = \\dfrac{2 + 1/n^2}{1 - 3/n^2} \\to \\dfrac{2}{1} = 2$. A sequence such as $(-1)^n$, which keeps jumping between $-1$ and $1$, has no limit at all.`,
      `**Մոտենալ որքան ուզես։** Հաջորդականությունը ձգտում է $a$-ի, եթե ցանկացած փոքր հեռավորության համար որոշ տեղից սկսած բոլոր անդամները մնում են $a$-ից այդ հեռավորության մեջ։ Վերևի սյուները ցատկում են վեր ու վար, բայց դրանց չափը փոքրանում է դեպի 0՝ $8 \\cdot (-0{,}5)^{n-1} \\to 0$։

**Երեք սահման, որ պետք է իմանալ։** $\\dfrac{1}{n} \\to 0$, $q^n \\to 0$, երբ $|q| < 1$, հաստատունը ձգտում է ինքն իրեն։

**Բաժանիր ամենաբարձր աստիճանի վրա։** $\\dfrac{2n^2 + 1}{n^2 - 3} = \\dfrac{2 + 1/n^2}{1 - 3/n^2} \\to \\dfrac{2}{1} = 2$։ $(-1)^n$-ի նման հաջորդականությունը, որն անընդհատ ցատկում է $-1$-ի և $1$-ի միջև, ընդհանրապես սահման չունի։`,
      `**Подойти сколь угодно близко.** Последовательность стремится к $a$, если для любого малого расстояния все члены, начиная с некоторого, остаются от $a$ ближе этого расстояния. Столбики выше прыгают вверх и вниз, но их размер уменьшается к 0: $8 \\cdot (-0{,}5)^{n-1} \\to 0$.

**Три предела, которые нужно знать.** $\\dfrac{1}{n} \\to 0$; $q^n \\to 0$ при $|q| < 1$; постоянная стремится к самой себе.

**Дели на старшую степень.** $\\dfrac{2n^2 + 1}{n^2 - 3} = \\dfrac{2 + 1/n^2}{1 - 3/n^2} \\to \\dfrac{2}{1} = 2$. А у последовательности вроде $(-1)^n$, которая всё время прыгает между $-1$ и $1$, предела нет вовсе.`,
    ),
    ask(1, {
      en: ["lim (3n + 1)/(n + 2) = ?", ["3", "1/2", "∞"], "Divide by n: (3 + 1/n)/(1 + 2/n) → 3."],
      hy: ["lim (3n + 1)/(n + 2) = ?", ["3", "1/2", "∞"], "Բաժանիր n-ի՝ (3 + 1/n)/(1 + 2/n) → 3։"],
      ru: ["lim (3n + 1)/(n + 2) = ?", ["3", "1/2", "∞"], "Раздели на n: (3 + 1/n)/(1 + 2/n) → 3."],
    }),
  ],
  "function-limit": [
    closer(
      `**What happens near a point, not at it.** $f(x) = \\dfrac{x^2 - 1}{x - 1}$ is not defined at $x = 1$, yet for $x$ close to 1 it equals $x + 1$, close to 2. So $\\displaystyle\\lim_{x \\to 1} f(x) = 2$: the graph is a line with one point missing.

**Continuity: no jumps, no holes.** A function is continuous at $a$ if the limit there equals $f(a)$. Polynomials, roots, $\\sin$ and $\\cos$ are continuous wherever they are defined, so their limits are found by simply substituting.

**A famous limit.** $\\dfrac{\\sin x}{x} \\to 1$ as $x \\to 0$ (in radians). Try it: $\\dfrac{\\sin 0.1}{0.1} \\approx 0.998$. This is why, for small angles, $\\sin x \\approx x$.`,
      `**Ինչ է կատարվում կետի մոտ, ոչ թե կետում։** $f(x) = \\dfrac{x^2 - 1}{x - 1}$-ը որոշված չէ $x = 1$-ում, բայց 1-ին մոտ $x$-երի համար հավասար է $x + 1$-ի՝ մոտ 2-ին։ Ուրեմն $\\displaystyle\\lim_{x \\to 1} f(x) = 2$․ գրաֆիկն ուղիղ է՝ մեկ բացակայող կետով։

**Անընդհատություն՝ առանց ցատկերի և անցքերի։** Ֆունկցիան $a$-ում անընդհատ է, եթե այնտեղ սահմանը հավասար է $f(a)$-ի։ Բազմանդամները, արմատները, $\\sin$-ը և $\\cos$-ը անընդհատ են այնտեղ, որտեղ որոշված են, ուստի դրանց սահմանները գտնվում են պարզապես տեղադրելով։

**Հայտնի սահման։** $\\dfrac{\\sin x}{x} \\to 1$, երբ $x \\to 0$ (ռադիաններով)։ Փորձիր՝ $\\dfrac{\\sin 0{,}1}{0{,}1} \\approx 0{,}998$։ Ահա թե ինչու փոքր անկյունների համար $\\sin x \\approx x$։`,
      `**Что происходит около точки, а не в ней.** $f(x) = \\dfrac{x^2 - 1}{x - 1}$ не определена при $x = 1$, но при $x$, близких к 1, равна $x + 1$, то есть близка к 2. Поэтому $\\displaystyle\\lim_{x \\to 1} f(x) = 2$: график — прямая с одной выколотой точкой.

**Непрерывность: без скачков и дыр.** Функция непрерывна в $a$, если предел там равен $f(a)$. Многочлены, корни, $\\sin$ и $\\cos$ непрерывны везде, где определены, поэтому их пределы находят простой подстановкой.

**Знаменитый предел.** $\\dfrac{\\sin x}{x} \\to 1$ при $x \\to 0$ (в радианах). Проверь: $\\dfrac{\\sin 0{,}1}{0{,}1} \\approx 0{,}998$. Поэтому для малых углов $\\sin x \\approx x$.`,
    ),
    ask(2, {
      en: ["lim as x → 2 of (x² − 4)/(x − 2) = ?", ["0", "4", "does not exist"], "For x ≠ 2 the fraction equals x + 2, which tends to 4."],
      hy: ["(x² − 4)/(x − 2)-ի սահմանը, երբ x → 2, հավասար է…", ["0", "4", "գոյություն չունի"], "x ≠ 2 դեպքում կոտորակը հավասար է x + 2-ի, որը ձգտում է 4-ի։"],
      ru: ["Предел (x² − 4)/(x − 2) при x → 2 равен…", ["0", "4", "не существует"], "При x ≠ 2 дробь равна x + 2, а это стремится к 4."],
    }),
  ],
  "derivative-idea": [
    "plot mode=tangent fn=sq x=1",
    closer(
      `**From average speed to instant speed.** The average rate of change of $f$ over $[x; x + h]$ is $\\dfrac{f(x + h) - f(x)}{h}$, the slope of a chord. Let $h$ shrink to 0 and the chord turns into the tangent; its slope is the derivative $f'(x)$.

**For x² it can be done by hand.** $\\dfrac{(x + h)^2 - x^2}{h} = \\dfrac{2xh + h^2}{h} = 2x + h \\to 2x$. At $x = 1$ the slope is 2, as the tangent above shows. Move the point: at $x = 0$ the tangent is flat.

**The derivative is everywhere in physics.** Speed is the derivative of position, acceleration the derivative of speed, current the derivative of charge.`,
      `**Միջին արագությունից՝ ակնթարթային։** $f$-ի փոփոխության միջին արագությունը $[x; x + h]$-ում $\\dfrac{f(x + h) - f(x)}{h}$ է՝ լարի թեքությունը։ Թող $h$-ը փոքրանա մինչև 0, և լարը դառնում է շոշափող, իսկ նրա թեքությունը $f'(x)$ ածանցյալն է։

**x²-ու համար դա կարելի է անել ձեռքով։** $\\dfrac{(x + h)^2 - x^2}{h} = \\dfrac{2xh + h^2}{h} = 2x + h \\to 2x$։ $x = 1$-ում թեքությունը 2 է, ինչպես ցույց է տալիս վերևի շոշափողը։ Շարժիր կետը․ $x = 0$-ում շոշափողը հորիզոնական է։

**Ածանցյալը ֆիզիկայում ամենուր է։** Արագությունը դիրքի ածանցյալն է, արագացումը՝ արագության, հոսանքը՝ լիցքի։`,
      `**От средней скорости к мгновенной.** Средняя скорость изменения $f$ на $[x; x + h]$ равна $\\dfrac{f(x + h) - f(x)}{h}$ — это наклон хорды. Пусть $h$ стремится к 0: хорда превращается в касательную, а её наклон — производная $f'(x)$.

**Для x² это можно сделать руками.** $\\dfrac{(x + h)^2 - x^2}{h} = \\dfrac{2xh + h^2}{h} = 2x + h \\to 2x$. При $x = 1$ наклон равен 2, как показывает касательная выше. Подвигай точку: при $x = 0$ касательная горизонтальна.

**Производная в физике повсюду.** Скорость — производная координаты, ускорение — производная скорости, сила тока — производная заряда.`,
    ),
    ask(2, {
      en: ["The derivative of f(x) = x² at x = 3 is…", ["3", "6", "9"], "f′(x) = 2x, so f′(3) = 6."],
      hy: ["f(x) = x²-ու ածանցյալը x = 3 կետում հավասար է…", ["3", "6", "9"], "f′(x) = 2x, ուրեմն f′(3) = 6։"],
      ru: ["Производная f(x) = x² в точке x = 3 равна…", ["3", "6", "9"], "f′(x) = 2x, значит, f′(3) = 6."],
    }),
  ],
  "derivative-rules-intro": [
    "plot mode=tangent fn=cubic x=1 show=deriv",
    closer(
      `**Four rules cover all polynomials.** $(x^n)' = nx^{n-1}$; $(c)' = 0$; $(c \\cdot f)' = c \\cdot f'$; $(f + g)' = f' + g'$. So $(5x^3 - 2x + 7)' = 15x^2 - 2$.

**Read the graph of f′ against f.** Above, $f(x) = x^3 - 3x$ and $f'(x) = 3x^2 - 3$. Where $f'$ is positive, $f$ rises; where $f'$ is negative, $f$ falls; at $x = \\pm 1$, where $f' = 0$, the tangent is horizontal: a hill and a valley.

**Why the constant disappears.** Adding 7 lifts the graph but does not change its steepness anywhere, so the derivative cannot see it.`,
      `**Չորս կանոն ընդգրկում է բոլոր բազմանդամները։** $(x^n)' = nx^{n-1}$, $(c)' = 0$, $(c \\cdot f)' = c \\cdot f'$, $(f + g)' = f' + g'$։ Ուրեմն $(5x^3 - 2x + 7)' = 15x^2 - 2$։

**Կարդա f′-ի գրաֆիկը f-ի կողքին։** Վերևում $f(x) = x^3 - 3x$ և $f'(x) = 3x^2 - 3$։ Որտեղ $f'$-ը դրական է, $f$-ը աճում է, որտեղ բացասական է՝ նվազում, իսկ $x = \\pm 1$-ում, որտեղ $f' = 0$, շոշափողը հորիզոնական է՝ բլուր և հովիտ։

**Ինչու է հաստատունն անհետանում։** 7 գումարելը բարձրացնում է գրաֆիկը, բայց ոչ մի տեղ չի փոխում նրա թեքությունը, ուստի ածանցյալը չի տեսնում այն։`,
      `**Четыре правила охватывают все многочлены.** $(x^n)' = nx^{n-1}$; $(c)' = 0$; $(c \\cdot f)' = c \\cdot f'$; $(f + g)' = f' + g'$. Поэтому $(5x^3 - 2x + 7)' = 15x^2 - 2$.

**Читай график f′ рядом с f.** Выше $f(x) = x^3 - 3x$ и $f'(x) = 3x^2 - 3$. Где $f'$ положительна, $f$ возрастает; где отрицательна — убывает; при $x = \\pm 1$, где $f' = 0$, касательная горизонтальна: холм и впадина.

**Почему константа исчезает.** Прибавление 7 поднимает график, но нигде не меняет его крутизну, поэтому производная её не видит.`,
    ),
    ask(1, {
      en: ["(5x³ − 2x + 7)′ = ?", ["15x² − 2", "15x² − 2 + 7", "5x² − 2"], "(x³)′ = 3x², (x)′ = 1, (7)′ = 0."],
      hy: ["(5x³ − 2x + 7)′ = ?", ["15x² − 2", "15x² − 2 + 7", "5x² − 2"], "(x³)′ = 3x², (x)′ = 1, (7)′ = 0։"],
      ru: ["(5x³ − 2x + 7)′ = ?", ["15x² − 2", "15x² − 2 + 7", "5x² − 2"], "(x³)′ = 3x², (x)′ = 1, (7)′ = 0."],
    }),
  ],
  "alg10-year-review": [
    "unit deg=240",
    closer(
      `**The year on one page.**
- Roots and powers: $a^{m/n} = \\sqrt[n]{a^m}$; check irrational equations for extra roots.
- The unit circle: $(\\cos \\alpha; \\sin \\alpha)$; signs by quarters; $180° = \\pi$.
- Identities: $\\sin^2 + \\cos^2 = 1$, reduction, addition and double-angle formulas.
- Graphs: period $\\dfrac{2\\pi}{k}$, amplitude $|a|$, shifts.
- Equations: $\\pm\\arccos a + 2\\pi n$, $(-1)^n \\arcsin a + \\pi n$, $\\arctan a + \\pi n$.
- Limits and the first derivatives: $(x^n)' = nx^{n-1}$.

**Practise on the circle above.** At $240°$: quarter III, $\\sin 240° = -\\dfrac{\\sqrt{3}}{2}$, $\\cos 240° = -\\dfrac{1}{2}$, and in radians $\\dfrac{4\\pi}{3}$.`,
      `**Տարին մեկ էջում։**
- Արմատներ և աստիճաններ՝ $a^{m/n} = \\sqrt[n]{a^m}$, իռացիոնալ հավասարումներում ստուգիր ավելորդ արմատները։
- Միավոր շրջանագիծ՝ $(\\cos \\alpha; \\sin \\alpha)$, նշաններն ըստ քառորդների, $180° = \\pi$։
- Նույնություններ՝ $\\sin^2 + \\cos^2 = 1$, բերման, գումարման և կրկնակի անկյան բանաձևեր։
- Գրաֆիկներ՝ պարբերություն $\\dfrac{2\\pi}{k}$, ամպլիտուդ $|a|$, տեղաշարժեր։
- Հավասարումներ՝ $\\pm\\arccos a + 2\\pi n$, $(-1)^n \\arcsin a + \\pi n$, $\\operatorname{arctg} a + \\pi n$։
- Սահմաններ և առաջին ածանցյալներ՝ $(x^n)' = nx^{n-1}$։

**Վարժվիր վերևի շրջանագծով։** $240°$-ում՝ III քառորդ, $\\sin 240° = -\\dfrac{\\sqrt{3}}{2}$, $\\cos 240° = -\\dfrac{1}{2}$, իսկ ռադիաններով՝ $\\dfrac{4\\pi}{3}$։`,
      `**Весь год на одной странице.**
- Корни и степени: $a^{m/n} = \\sqrt[n]{a^m}$; в иррациональных уравнениях проверяй посторонние корни.
- Единичная окружность: $(\\cos \\alpha; \\sin \\alpha)$; знаки по четвертям; $180° = \\pi$.
- Тождества: $\\sin^2 + \\cos^2 = 1$, формулы приведения, сложения и двойного угла.
- Графики: период $\\dfrac{2\\pi}{k}$, амплитуда $|a|$, сдвиги.
- Уравнения: $\\pm\\arccos a + 2\\pi n$, $(-1)^n \\arcsin a + \\pi n$, $\\operatorname{arctg} a + \\pi n$.
- Пределы и первые производные: $(x^n)' = nx^{n-1}$.

**Потренируйся на окружности выше.** При $240°$: III четверть, $\\sin 240° = -\\dfrac{\\sqrt{3}}{2}$, $\\cos 240° = -\\dfrac{1}{2}$, а в радианах $\\dfrac{4\\pi}{3}$.`,
    ),
    ask(2, {
      en: ["sin 240° = ?", ["−1/2", "−√3/2", "√3/2"], "240° = 180° + 60°, quarter III: sin 240° = −sin 60° = −√3/2."],
      hy: ["sin 240° = ?", ["−1/2", "−√3/2", "√3/2"], "240° = 180° + 60°, III քառորդ՝ sin 240° = −sin 60° = −√3/2։"],
      ru: ["sin 240° = ?", ["−1/2", "−√3/2", "√3/2"], "240° = 180° + 60°, III четверть: sin 240° = −sin 60° = −√3/2."],
    }),
  ],
};
