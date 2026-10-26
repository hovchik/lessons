import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer, fact } from "../more";

export const grade12: VisualMap[number] = {
  "imaginary-unit": [
    "plot mode=complex a=3 b=2",
    closer(
      `**A number is a point.** Real numbers fill a line; complex numbers fill a plane. $z = 3 + 2i$ is the point $(3; 2)$: 3 steps along the real axis, 2 steps up the imaginary axis. Drag it above.

**Why $i^2 = -1$ makes sense.** Multiplying by $i$ turns the arrow by $90°$ about 0. Turn $1$ once and you reach $i$; turn it again and you reach $-1$. So two quarter turns are a half turn: $i \\cdot i = -1$.

**Powers of $i$ go round in a circle.** $i, -1, -i, 1$ are the four quarter turns, so $i^n$ repeats every 4 steps. Only the remainder of $n$ divided by 4 matters: $i^{2026} = i^{2} = -1$, since $2026 = 4 \\cdot 506 + 2$.`,
      `**Թիվը կետ է։** Իրական թվերը լցնում են ուղիղը, կոմպլեքս թվերը՝ հարթությունը։ $z = 3 + 2i$-ն $(3; 2)$ կետն է․ 3 քայլ իրական առանցքով, 2 քայլ վեր՝ կեղծ առանցքով։ Տեղաշարժիր այն վերևում։

**Ինչու է $i^2 = -1$-ն իմաստալից։** $i$-ով բազմապատկելը սլաքը պտտում է $90°$-ով 0-ի շուրջ։ $1$-ը մեկ անգամ պտտելով՝ հասնում ես $i$-ին, ևս մեկ անգամ՝ $-1$-ին։ Երկու քառորդ պտույտը կես պտույտ է․ $i \\cdot i = -1$։

**$i$-ի աստիճանները շրջան են կազմում։** $i, -1, -i, 1$-ը չորս քառորդ պտույտներն են, ուստի $i^n$-ը կրկնվում է 4 քայլը մեկ։ Կարևոր է միայն $n$-ը 4-ի բաժանելիս մնացորդը․ $i^{2026} = i^{2} = -1$, քանի որ $2026 = 4 \\cdot 506 + 2$։`,
      `**Число — это точка.** Действительные числа заполняют прямую, комплексные — плоскость. $z = 3 + 2i$ — это точка $(3; 2)$: 3 шага по действительной оси, 2 шага вверх по мнимой. Перетащи её выше.

**Почему $i^2 = -1$ имеет смысл.** Умножение на $i$ поворачивает стрелку на $90°$ вокруг 0. Повернёшь $1$ один раз — получишь $i$, ещё раз — $-1$. Два четверть-оборота — это пол-оборота: $i \\cdot i = -1$.

**Степени $i$ ходят по кругу.** $i, -1, -i, 1$ — четыре четверть-оборота, поэтому $i^n$ повторяется через каждые 4 шага. Важен только остаток от деления $n$ на 4: $i^{2026} = i^{2} = -1$, так как $2026 = 4 \\cdot 506 + 2$.`,
    ),
    fact(
      "Square roots of negative numbers first appeared in the 16th century, in Cardano's formula for cubic equations, as a strange step in the middle of the calculation that still led to real answers. Descartes called such numbers \"imaginary\", and the name stuck.",
      "Բացասական թվերի քառակուսի արմատներն առաջին անգամ հայտնվեցին 16-րդ դարում՝ խորանարդային հավասարումների Կարդանոյի բանաձևում, որպես տարօրինակ քայլ հաշվարկի մեջտեղում, որը, այնուամենայնիվ, բերում էր իրական պատասխանների։ Դեկարտն այդպիսի թվերն անվանեց «կեղծ», և անունը մնաց։",
      "Квадратные корни из отрицательных чисел впервые появились в XVI веке в формуле Кардано для кубических уравнений — как странный шаг посреди вычислений, который всё равно приводил к действительным ответам. Декарт назвал такие числа «мнимыми», и название закрепилось.",
    ),
    ask(2, {
      en: ["i²⁰²⁶ = ?", ["1", "−1", "i", "−i"], "2026 = 4 · 506 + 2, so i²⁰²⁶ = i² = −1."],
      hy: ["i²⁰²⁶ = ?", ["1", "−1", "i", "−i"], "2026 = 4 · 506 + 2, ուստի i²⁰²⁶ = i² = −1։"],
      ru: ["i²⁰²⁶ = ?", ["1", "−1", "i", "−i"], "2026 = 4 · 506 + 2, поэтому i²⁰²⁶ = i² = −1."],
    }),
  ],
  "complex-operations": [
    "plot mode=complex a=2 b=1",
    closer(
      `**Adding is adding arrows.** $(2 + i) + (1 + 3i) = 3 + 4i$: real parts with real parts, imaginary with imaginary. On the plane the two arrows are placed end to end, like forces in physics.

**Multiplying is opening brackets, then $i^2 = -1$.** $(2 + i)(1 + 3i) = 2 + 6i + i + 3i^2 = 2 + 7i - 3 = -1 + 7i$.

**Dividing uses the conjugate.** $z \\bar z = (a + bi)(a - bi) = a^2 + b^2$ is always real, so multiply the top and the bottom by the conjugate of the bottom: $\\dfrac{1 + i}{1 - i} = \\dfrac{(1 + i)^2}{(1 - i)(1 + i)} = \\dfrac{2i}{2} = i$.`,
      `**Գումարելը սլաքներ գումարելն է։** $(2 + i) + (1 + 3i) = 3 + 4i$․ իրական մասերը՝ իրականների, կեղծերը՝ կեղծերի հետ։ Հարթության վրա երկու սլաքները դրվում են իրար հետևից, ինչպես ուժերը ֆիզիկայում։

**Բազմապատկելը փակագծեր բացելն է, հետո՝ $i^2 = -1$։** $(2 + i)(1 + 3i) = 2 + 6i + i + 3i^2 = 2 + 7i - 3 = -1 + 7i$։

**Բաժանելիս օգտագործվում է համալուծը։** $z \\bar z = (a + bi)(a - bi) = a^2 + b^2$-ն միշտ իրական է, ուստի համարիչն ու հայտարարը բազմապատկիր հայտարարի համալուծով․ $\\dfrac{1 + i}{1 - i} = \\dfrac{(1 + i)^2}{(1 - i)(1 + i)} = \\dfrac{2i}{2} = i$։`,
      `**Сложение — это сложение стрелок.** $(2 + i) + (1 + 3i) = 3 + 4i$: действительные части с действительными, мнимые с мнимыми. На плоскости две стрелки ставятся одна за другой, как силы в физике.

**Умножение — раскрыть скобки и заменить $i^2 = -1$.** $(2 + i)(1 + 3i) = 2 + 6i + i + 3i^2 = 2 + 7i - 3 = -1 + 7i$.

**Деление — через сопряжённое.** $z \\bar z = (a + bi)(a - bi) = a^2 + b^2$ всегда действительно, поэтому числитель и знаменатель умножают на число, сопряжённое знаменателю: $\\dfrac{1 + i}{1 - i} = \\dfrac{(1 + i)^2}{(1 - i)(1 + i)} = \\dfrac{2i}{2} = i$.`,
    ),
    ask(2, {
      en: ["(1 + 2i)(1 − 2i) = ?", ["−3", "5", "1 − 4i", "5 + 4i"], "z · z̄ = a² + b² = 1 + 4 = 5."],
      hy: ["(1 + 2i)(1 − 2i) = ?", ["−3", "5", "1 − 4i", "5 + 4i"], "z · z̄ = a² + b² = 1 + 4 = 5։"],
      ru: ["(1 + 2i)(1 − 2i) = ?", ["−3", "5", "1 − 4i", "5 + 4i"], "z · z̄ = a² + b² = 1 + 4 = 5."],
    }),
  ],
  "complex-plane": [
    "plot mode=complex a=3 b=4",
    closer(
      `**The modulus is a length.** $|z| = \\sqrt{a^2 + b^2}$ is the distance from 0 to the point, by Pythagoras. For $3 + 4i$ it is $\\sqrt{9 + 16} = 5$: the famous 3-4-5 triangle is hiding in the picture above.

**The modulus of a difference is a distance.** $|z - w|$ is the distance between the points $z$ and $w$. That turns equations into shapes: $|z| = 2$ is a circle of radius 2 about 0, and $|z - i| = |z + 1|$ is the line of points equally far from $i$ and $-1$.

**Useful facts.** $|z|^2 = z \\bar z$, $|zw| = |z| \\cdot |w|$, and $|z + w| \\le |z| + |w|$: one side of a triangle is never longer than the other two together.`,
      `**Մոդուլն երկարություն է։** $|z| = \\sqrt{a^2 + b^2}$-ն 0-ից մինչև կետը հեռավորությունն է՝ ըստ Պյութագորասի։ $3 + 4i$-ի համար այն $\\sqrt{9 + 16} = 5$ է․ վերևի նկարում թաքնված է հայտնի 3-4-5 եռանկյունը։

**Տարբերության մոդուլը հեռավորություն է։** $|z - w|$-ն $z$ և $w$ կետերի հեռավորությունն է։ Դա հավասարումները դարձնում է պատկերներ․ $|z| = 2$-ը 0 կենտրոնով 2 շառավղով շրջանագիծ է, իսկ $|z - i| = |z + 1|$-ը $i$-ից և $-1$-ից հավասարահեռ կետերի ուղիղն է։

**Օգտակար փաստեր։** $|z|^2 = z \\bar z$, $|zw| = |z| \\cdot |w|$ և $|z + w| \\le |z| + |w|$․ եռանկյան կողմն երբեք մեծ չէ մյուս երկուսի գումարից։`,
      `**Модуль — это длина.** $|z| = \\sqrt{a^2 + b^2}$ — расстояние от 0 до точки, по теореме Пифагора. Для $3 + 4i$ это $\\sqrt{9 + 16} = 5$: на картинке выше прячется знаменитый египетский треугольник 3-4-5.

**Модуль разности — это расстояние.** $|z - w|$ — расстояние между точками $z$ и $w$. Так уравнения превращаются в фигуры: $|z| = 2$ — окружность радиуса 2 с центром в 0, а $|z - i| = |z + 1|$ — прямая из точек, равноудалённых от $i$ и $-1$.

**Полезные факты.** $|z|^2 = z \\bar z$, $|zw| = |z| \\cdot |w|$ и $|z + w| \\le |z| + |w|$: сторона треугольника никогда не длиннее суммы двух других.`,
    ),
    ask(2, {
      en: ["|−5 + 12i| = ?", ["7", "13", "17", "√119"], "√(25 + 144) = √169 = 13."],
      hy: ["|−5 + 12i| = ?", ["7", "13", "17", "√119"], "√(25 + 144) = √169 = 13։"],
      ru: ["|−5 + 12i| = ?", ["7", "13", "17", "√119"], "√(25 + 144) = √169 = 13."],
    }),
  ],
  "trigonometric-form": [
    "plot mode=complex a=1 b=1",
    closer(
      `**Length and angle instead of across and up.** Any $z \\ne 0$ is $z = r(\\cos\\varphi + i\\sin\\varphi)$, where $r = |z|$ and $\\varphi$ is the argument. For $1 + i$: $r = \\sqrt2$, $\\varphi = \\dfrac{\\pi}{4}$, so $1 + i = \\sqrt2\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$.

**Why this form is so handy.** When numbers are multiplied, their moduli multiply and their arguments add. Multiplying by $i$ (modulus 1, argument $90°$) only turns, exactly as the button above shows.

**De Moivre in one line.** $z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)$. So $(1 + i)^8 = (\\sqrt2)^8(\\cos 2\\pi + i\\sin 2\\pi) = 16$, with no brackets to open at all.`,
      `**Երկարություն և անկյուն՝ «աջ» և «վեր»-ի փոխարեն։** Ցանկացած $z \\ne 0$ թիվ $z = r(\\cos\\varphi + i\\sin\\varphi)$ է, որտեղ $r = |z|$, իսկ $\\varphi$-ն արգումենտն է։ $1 + i$-ի համար՝ $r = \\sqrt2$, $\\varphi = \\dfrac{\\pi}{4}$, ուստի $1 + i = \\sqrt2\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$։

**Ինչու է այս տեսքն այդքան հարմար։** Թվերը բազմապատկելիս նրանց մոդուլները բազմապատկվում են, իսկ արգումենտները՝ գումարվում։ $i$-ով բազմապատկելը (մոդուլը 1, արգումենտը $90°$) միայն պտտում է, ճիշտ ինչպես ցույց է տալիս վերևի կոճակը։

**Մուավրը մեկ տողով։** $z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)$։ Այսպես՝ $(1 + i)^8 = (\\sqrt2)^8(\\cos 2\\pi + i\\sin 2\\pi) = 16$, առանց որևէ փակագիծ բացելու։`,
      `**Длина и угол вместо «вправо» и «вверх».** Любое $z \\ne 0$ записывается как $z = r(\\cos\\varphi + i\\sin\\varphi)$, где $r = |z|$, а $\\varphi$ — аргумент. Для $1 + i$: $r = \\sqrt2$, $\\varphi = \\dfrac{\\pi}{4}$, то есть $1 + i = \\sqrt2\\left(\\cos\\dfrac{\\pi}{4} + i\\sin\\dfrac{\\pi}{4}\\right)$.

**Чем удобна эта форма.** При умножении чисел модули перемножаются, а аргументы складываются. Умножение на $i$ (модуль 1, аргумент $90°$) только поворачивает — ровно как показывает кнопка выше.

**Муавр в одну строку.** $z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)$. Поэтому $(1 + i)^8 = (\\sqrt2)^8(\\cos 2\\pi + i\\sin 2\\pi) = 16$ — и никаких скобок раскрывать не нужно.`,
    ),
    ask(2, {
      en: ["(1 + i)⁴ = ?", ["4", "−4", "4i", "16"], "Modulus (√2)⁴ = 4, argument 4 · 45° = 180°, so the result is −4."],
      hy: ["(1 + i)⁴ = ?", ["4", "−4", "4i", "16"], "Մոդուլը (√2)⁴ = 4, արգումենտը 4 · 45° = 180°, ուստի արդյունքը −4 է։"],
      ru: ["(1 + i)⁴ = ?", ["4", "−4", "4i", "16"], "Модуль (√2)⁴ = 4, аргумент 4 · 45° = 180°, значит, получается −4."],
    }),
  ],
  "quadratic-complex-roots": [
    "plot mode=quad form=general a=1 b=2 c=5",
    closer(
      `**When the parabola misses the axis.** $x^2 + 2x + 5$ never reaches 0 for real $x$: the graph above floats over the axis. Its discriminant is $D = 4 - 20 = -16 < 0$.

**In $\\mathbb C$ the roots are still there.** $\\sqrt{-16} = 4i$, so $x = \\dfrac{-2 \\pm 4i}{2} = -1 \\pm 2i$. The real part $-1$ is exactly the $x$ of the vertex, and the imaginary part $2 = \\sqrt{4}$ comes from the height of the vertex, 4.

**Roots come in pairs.** With real coefficients the two roots are always conjugate, and Vieta still works: $(-1 + 2i) + (-1 - 2i) = -2 = -\\dfrac{b}{a}$ and $(-1 + 2i)(-1 - 2i) = 1 + 4 = 5 = \\dfrac{c}{a}$.`,
      `**Երբ պարաբոլը չի հասնում առանցքին։** $x^2 + 2x + 5$-ը իրական $x$-երի դեպքում երբեք 0 չի դառնում․ վերևի գրաֆիկը «լողում» է առանցքից վեր։ Դիսկրիմինանտը $D = 4 - 20 = -16 < 0$ է։

**$\\mathbb C$-ում արմատներն այնուամենայնիվ կան։** $\\sqrt{-16} = 4i$, ուստի $x = \\dfrac{-2 \\pm 4i}{2} = -1 \\pm 2i$։ Իրական մասը՝ $-1$-ը, ճիշտ գագաթի $x$-ն է, իսկ կեղծ մասը՝ $2 = \\sqrt{4}$-ը, գալիս է գագաթի բարձրությունից՝ 4-ից։

**Արմատները գալիս են զույգերով։** Իրական գործակիցների դեպքում երկու արմատները միշտ համալուծ են, և Վիետի թեորեմը դեռ գործում է․ $(-1 + 2i) + (-1 - 2i) = -2 = -\\dfrac{b}{a}$ և $(-1 + 2i)(-1 - 2i) = 1 + 4 = 5 = \\dfrac{c}{a}$։`,
      `**Когда парабола не достаёт до оси.** $x^2 + 2x + 5$ при действительных $x$ никогда не равно 0: график выше «парит» над осью. Дискриминант $D = 4 - 20 = -16 < 0$.

**В $\\mathbb C$ корни всё равно есть.** $\\sqrt{-16} = 4i$, поэтому $x = \\dfrac{-2 \\pm 4i}{2} = -1 \\pm 2i$. Действительная часть $-1$ — это ровно абсцисса вершины, а мнимая часть $2 = \\sqrt{4}$ берётся из высоты вершины, 4.

**Корни ходят парами.** При действительных коэффициентах два корня всегда сопряжены, и теорема Виета по-прежнему работает: $(-1 + 2i) + (-1 - 2i) = -2 = -\\dfrac{b}{a}$ и $(-1 + 2i)(-1 - 2i) = 1 + 4 = 5 = \\dfrac{c}{a}$.`,
    ),
    ask(2, {
      en: ["Solve x² + 9 = 0 in the complex numbers.", ["x = ±3", "x = ±3i", "no roots", "x = 3i only"], "x² = −9, so x = ±√9 · i = ±3i."],
      hy: ["Լուծիր x² + 9 = 0-ն կոմպլեքս թվերում։", ["x = ±3", "x = ±3i", "արմատ չկա", "միայն x = 3i"], "x² = −9, ուստի x = ±√9 · i = ±3i։"],
      ru: ["Реши x² + 9 = 0 в комплексных числах.", ["x = ±3", "x = ±3i", "корней нет", "только x = 3i"], "x² = −9, значит, x = ±√9 · i = ±3i."],
    }),
  ],
  "polynomial-division": [
    closer(
      `**Exactly like long division of numbers.** Divide $x^3 - 2x^2 + 4$ by $x - 3$. Write the missing $0x$ so the columns line up. Step 1: $x^3 \\div x = x^2$; subtract $x^2(x - 3)$, leaving $x^2 + 0x$. Step 2: $+x$; subtract $x(x - 3)$, leaving $3x + 4$. Step 3: $+3$; subtract $3(x - 3)$, leaving $13$.

**Result.** $x^3 - 2x^2 + 4 = (x - 3)(x^2 + x + 3) + 13$. The quotient is $x^2 + x + 3$ and the remainder is $13$.

**When to stop.** You stop as soon as the remainder has a lower degree than the divisor, just as with numbers you stop when the remainder is smaller than the divisor. Check: put $x = 3$ into the left side: $27 - 18 + 4 = 13$.`,
      `**Ճիշտ ինչպես թվերի բաժանումը սյունակով։** Բաժանիր $x^3 - 2x^2 + 4$-ը $x - 3$-ի։ Գրիր բացակայող $0x$-ը, որ սյունակները համընկնեն։ Քայլ 1․ $x^3 \\div x = x^2$, հանիր $x^2(x - 3)$-ը, մնում է $x^2 + 0x$։ Քայլ 2․ $+x$, հանիր $x(x - 3)$-ը, մնում է $3x + 4$։ Քայլ 3․ $+3$, հանիր $3(x - 3)$-ը, մնում է $13$։

**Արդյունքը։** $x^3 - 2x^2 + 4 = (x - 3)(x^2 + x + 3) + 13$։ Քանորդը $x^2 + x + 3$ է, մնացորդը՝ $13$։

**Երբ կանգ առնել։** Կանգ ես առնում, հենց որ մնացորդի աստիճանը փոքր է բաժանարարի աստիճանից, ինչպես թվերի դեպքում ես կանգ առնում, երբ մնացորդը փոքր է բաժանարարից։ Ստուգում․ ձախ մասում տեղադրիր $x = 3$․ $27 - 18 + 4 = 13$։`,
      `**Ровно как деление чисел уголком.** Разделим $x^3 - 2x^2 + 4$ на $x - 3$. Допишем недостающее $0x$, чтобы столбцы совпадали. Шаг 1: $x^3 \\div x = x^2$; вычитаем $x^2(x - 3)$, остаётся $x^2 + 0x$. Шаг 2: $+x$; вычитаем $x(x - 3)$, остаётся $3x + 4$. Шаг 3: $+3$; вычитаем $3(x - 3)$, остаётся $13$.

**Итог.** $x^3 - 2x^2 + 4 = (x - 3)(x^2 + x + 3) + 13$. Частное $x^2 + x + 3$, остаток $13$.

**Когда остановиться.** Останавливаемся, как только степень остатка меньше степени делителя, — так же, как с числами останавливаемся, когда остаток меньше делителя. Проверка: подставим $x = 3$ в левую часть: $27 - 18 + 4 = 13$.`,
    ),
    ask(2, {
      en: ["A polynomial of degree 5 is divided by a polynomial of degree 2. What is the degree of the quotient?", ["2", "3", "5", "7"], "Degrees subtract: 5 − 2 = 3."],
      hy: ["5-րդ աստիճանի բազմանդամը բաժանում են 2-րդ աստիճանի բազմանդամի։ Ո՞րն է քանորդի աստիճանը։", ["2", "3", "5", "7"], "Աստիճանները հանվում են․ 5 − 2 = 3։"],
      ru: ["Многочлен 5-й степени делят на многочлен 2-й степени. Какова степень частного?", ["2", "3", "5", "7"], "Степени вычитаются: 5 − 2 = 3."],
    }),
  ],
  bezout: [
    closer(
      `**The remainder without dividing.** Bezout: the remainder of $P(x)$ divided by $x - a$ is just $P(a)$. In the previous lesson that is why the remainder of $x^3 - 2x^2 + 4$ by $x - 3$ was $P(3) = 13$. In particular, $a$ is a root exactly when $P(x)$ is divisible by $x - a$.

**Horner's scheme: the fast way.** For $P(x) = 2x^3 - 3x^2 + 0x + 5$ and $a = 2$, take the coefficients $2, -3, 0, 5$. Bring down 2; then each time multiply by 2 and add the next coefficient: $2 \\cdot 2 - 3 = 1$, $1 \\cdot 2 + 0 = 2$, $2 \\cdot 2 + 5 = 9$.

**Read the answer.** The last number is the remainder, $P(2) = 9$, and the others are the quotient: $2x^2 + x + 2$. So $P(x) = (x - 2)(2x^2 + x + 2) + 9$.`,
      `**Մնացորդն առանց բաժանելու։** Բեզու․ $P(x)$-ը $x - a$-ի բաժանելիս մնացորդը պարզապես $P(a)$-ն է։ Դրա համար էլ նախորդ դասում $x^3 - 2x^2 + 4$-ը $x - 3$-ի բաժանելիս մնացորդը $P(3) = 13$ էր։ Մասնավորապես՝ $a$-ն արմատ է ճիշտ այն դեպքում, երբ $P(x)$-ը բաժանվում է $x - a$-ի։

**Հորների սխեման՝ արագ ճանապարհ։** $P(x) = 2x^3 - 3x^2 + 0x + 5$-ի և $a = 2$-ի համար վերցրու $2, -3, 0, 5$ գործակիցները։ Իջեցրու 2-ը, հետո ամեն անգամ բազմապատկիր 2-ով և գումարիր հաջորդ գործակիցը․ $2 \\cdot 2 - 3 = 1$, $1 \\cdot 2 + 0 = 2$, $2 \\cdot 2 + 5 = 9$։

**Կարդա պատասխանը։** Վերջին թիվը մնացորդն է՝ $P(2) = 9$, իսկ մյուսները քանորդն են՝ $2x^2 + x + 2$։ Այսպիսով՝ $P(x) = (x - 2)(2x^2 + x + 2) + 9$։`,
      `**Остаток без деления.** Безу: остаток от деления $P(x)$ на $x - a$ равен просто $P(a)$. Поэтому в прошлом уроке остаток от деления $x^3 - 2x^2 + 4$ на $x - 3$ был $P(3) = 13$. В частности, $a$ — корень ровно тогда, когда $P(x)$ делится на $x - a$.

**Схема Горнера — быстрый путь.** Для $P(x) = 2x^3 - 3x^2 + 0x + 5$ и $a = 2$ берём коэффициенты $2, -3, 0, 5$. Сносим 2, затем каждый раз умножаем на 2 и прибавляем следующий коэффициент: $2 \\cdot 2 - 3 = 1$, $1 \\cdot 2 + 0 = 2$, $2 \\cdot 2 + 5 = 9$.

**Читаем ответ.** Последнее число — остаток, $P(2) = 9$, остальные — частное: $2x^2 + x + 2$. Итак, $P(x) = (x - 2)(2x^2 + x + 2) + 9$.`,
    ),
    ask(3, {
      en: ["What is the remainder of x¹⁰⁰ + 1 divided by x + 1?", ["0", "1", "2", "−1"], "x + 1 = x − (−1), so the remainder is P(−1) = 1 + 1 = 2."],
      hy: ["Ի՞նչ մնացորդ է ստացվում x¹⁰⁰ + 1-ը x + 1-ի բաժանելիս։", ["0", "1", "2", "−1"], "x + 1 = x − (−1), ուստի մնացորդը P(−1) = 1 + 1 = 2 է։"],
      ru: ["Какой остаток даёт x¹⁰⁰ + 1 при делении на x + 1?", ["0", "1", "2", "−1"], "x + 1 = x − (−1), поэтому остаток равен P(−1) = 1 + 1 = 2."],
    }),
  ],
  "rational-roots": [
    closer(
      `**Where to look for roots.** If a polynomial has integer coefficients, every integer root divides the free term. More generally, a rational root $\\dfrac{p}{q}$ in lowest terms has $p$ dividing the free term and $q$ dividing the leading coefficient. That gives a short list of candidates to try.

**Example.** $x^3 - 6x^2 + 11x - 6$: the candidates are $\\pm1, \\pm2, \\pm3, \\pm6$. $P(1) = 1 - 6 + 11 - 6 = 0$, so $x = 1$ is a root. Horner gives $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$.

**One root unlocks the rest.** After each root found, divide and the degree drops by one. A cubic becomes a quadratic, which you already know how to solve.`,
      `**Որտեղ փնտրել արմատները։** Եթե բազմանդամն ունի ամբողջ գործակիցներ, ապա յուրաքանչյուր ամբողջ արմատ ազատ անդամի բաժանարար է։ Ավելի ընդհանուր՝ $\\dfrac{p}{q}$ անկրճատելի ռացիոնալ արմատի համար $p$-ն ազատ անդամի բաժանարար է, իսկ $q$-ն՝ ավագ գործակցի։ Դա տալիս է փորձելու թեկնածուների կարճ ցուցակ։

**Օրինակ։** $x^3 - 6x^2 + 11x - 6$․ թեկնածուներն են $\\pm1, \\pm2, \\pm3, \\pm6$։ $P(1) = 1 - 6 + 11 - 6 = 0$, ուստի $x = 1$-ը արմատ է։ Հորների սխեմայով՝ $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$։

**Մեկ արմատը բացում է մնացածը։** Յուրաքանչյուր գտնված արմատից հետո բաժանիր, և աստիճանը մեկով իջնում է։ Խորանարդայինը դառնում է քառակուսային, որը դու արդեն գիտես լուծել։`,
      `**Где искать корни.** Если у многочлена целые коэффициенты, то каждый целый корень — делитель свободного члена. В общем случае у несократимого рационального корня $\\dfrac{p}{q}$ число $p$ делит свободный член, а $q$ — старший коэффициент. Это даёт короткий список кандидатов.

**Пример.** $x^3 - 6x^2 + 11x - 6$: кандидаты $\\pm1, \\pm2, \\pm3, \\pm6$. $P(1) = 1 - 6 + 11 - 6 = 0$, значит, $x = 1$ — корень. По Горнеру $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$.

**Один корень открывает остальные.** После каждого найденного корня делим, и степень падает на единицу. Кубический многочлен становится квадратным, а его ты уже умеешь решать.`,
    ),
    ask(3, {
      en: ["Which number cannot be a rational root of 2x³ + x − 3?", ["1", "3/2", "2", "−1/2"], "The numerator must divide 3 and the denominator must divide 2; 2 does not divide 3."],
      hy: ["Ո՞ր թիվը չի կարող լինել 2x³ + x − 3-ի ռացիոնալ արմատ։", ["1", "3/2", "2", "−1/2"], "Համարիչը պետք է լինի 3-ի բաժանարար, հայտարարը՝ 2-ի․ 2-ը 3-ի բաժանարար չէ։"],
      ru: ["Какое число не может быть рациональным корнем 2x³ + x − 3?", ["1", "3/2", "2", "−1/2"], "Числитель должен делить 3, знаменатель — 2; а 2 не делит 3."],
    }),
  ],
  "symmetric-equations": [
    closer(
      `**Spot the mirror.** In $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$ the coefficients read the same from both ends: $1, -5, 8, -5, 1$. Such an equation is called symmetric (reciprocal), and $x = 0$ is not a root.

**Divide by $x^2$ and substitute.** $x^2 + \\dfrac{1}{x^2} - 5\\left(x + \\dfrac{1}{x}\\right) + 8 = 0$. Put $t = x + \\dfrac{1}{x}$; then $x^2 + \\dfrac{1}{x^2} = t^2 - 2$, and the equation becomes $t^2 - 5t + 6 = 0$, so $t = 2$ or $t = 3$.

**Go back to $x$.** $x + \\dfrac{1}{x} = 2$ gives $x = 1$; $x + \\dfrac{1}{x} = 3$ gives $x^2 - 3x + 1 = 0$, $x = \\dfrac{3 \\pm \\sqrt5}{2}$. Keep in mind that for real $x$ always $|t| \\ge 2$, so a value such as $t = 1$ gives no real roots.`,
      `**Նկատիր հայելին։** $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$-ում գործակիցներն երկու ծայրից նույնն են կարդացվում․ $1, -5, 8, -5, 1$։ Այդպիսի հավասարումը կոչվում է սիմետրիկ (փոխադարձ), և $x = 0$-ն արմատ չէ։

**Բաժանիր $x^2$-ու և կատարիր տեղադրություն։** $x^2 + \\dfrac{1}{x^2} - 5\\left(x + \\dfrac{1}{x}\\right) + 8 = 0$։ Նշանակիր $t = x + \\dfrac{1}{x}$․ այդ դեպքում $x^2 + \\dfrac{1}{x^2} = t^2 - 2$, և հավասարումը դառնում է $t^2 - 5t + 6 = 0$, ուստի $t = 2$ կամ $t = 3$։

**Վերադարձիր $x$-ին։** $x + \\dfrac{1}{x} = 2$-ից՝ $x = 1$, $x + \\dfrac{1}{x} = 3$-ից՝ $x^2 - 3x + 1 = 0$, $x = \\dfrac{3 \\pm \\sqrt5}{2}$։ Հիշիր, որ իրական $x$-ի դեպքում միշտ $|t| \\ge 2$, ուստի, օրինակ, $t = 1$ արժեքն իրական արմատներ չի տալիս։`,
      `**Заметь зеркало.** В $x^4 - 5x^3 + 8x^2 - 5x + 1 = 0$ коэффициенты читаются одинаково с обоих концов: $1, -5, 8, -5, 1$. Такое уравнение называют симметрическим (возвратным), и $x = 0$ не является корнем.

**Делим на $x^2$ и делаем замену.** $x^2 + \\dfrac{1}{x^2} - 5\\left(x + \\dfrac{1}{x}\\right) + 8 = 0$. Пусть $t = x + \\dfrac{1}{x}$; тогда $x^2 + \\dfrac{1}{x^2} = t^2 - 2$, и уравнение становится $t^2 - 5t + 6 = 0$, откуда $t = 2$ или $t = 3$.

**Возвращаемся к $x$.** $x + \\dfrac{1}{x} = 2$ даёт $x = 1$; $x + \\dfrac{1}{x} = 3$ даёт $x^2 - 3x + 1 = 0$, $x = \\dfrac{3 \\pm \\sqrt5}{2}$. Помни, что при действительных $x$ всегда $|t| \\ge 2$, так что значение вроде $t = 1$ действительных корней не даёт.`,
    ),
    ask(2, {
      en: ["If t = x + 1/x, then x² + 1/x² = ?", ["t²", "t² − 2", "t² + 2", "2t"], "t² = x² + 2 + 1/x², so x² + 1/x² = t² − 2."],
      hy: ["Եթե t = x + 1/x, ապա x² + 1/x² = ?", ["t²", "t² − 2", "t² + 2", "2t"], "t² = x² + 2 + 1/x², ուստի x² + 1/x² = t² − 2։"],
      ru: ["Если t = x + 1/x, то x² + 1/x² = ?", ["t²", "t² − 2", "t² + 2", "2t"], "t² = x² + 2 + 1/x², поэтому x² + 1/x² = t² − 2."],
    }),
  ],
  "linear-parameters": [
    closer(
      `**Three outcomes, always.** Every linear equation can be brought to $ax = b$. If $a \\ne 0$ there is exactly one root $x = \\dfrac{b}{a}$. If $a = 0$ and $b = 0$, every $x$ works. If $a = 0$ and $b \\ne 0$, there are no roots.

**Example.** $(a^2 - 4)x = a - 2$. The coefficient vanishes at $a = \\pm2$, so check those values separately. $a = 2$: $0 \\cdot x = 0$, any $x$. $a = -2$: $0 \\cdot x = -4$, no roots. Otherwise $x = \\dfrac{a - 2}{(a - 2)(a + 2)} = \\dfrac{1}{a + 2}$.

**The classic trap.** Never divide by an expression with the parameter until you have checked when it is zero. Those special values are usually the whole point of the problem.`,
      `**Միշտ երեք ելք։** Ցանկացած գծային հավասարում կարելի է բերել $ax = b$ տեսքի։ Եթե $a \\ne 0$, կա ճիշտ մեկ արմատ՝ $x = \\dfrac{b}{a}$։ Եթե $a = 0$ և $b = 0$, ցանկացած $x$ բավարարում է։ Եթե $a = 0$ և $b \\ne 0$, արմատներ չկան։

**Օրինակ։** $(a^2 - 4)x = a - 2$։ Գործակիցը զրո է դառնում $a = \\pm2$-ի դեպքում, ուստի այդ արժեքները ստուգիր առանձին։ $a = 2$․ $0 \\cdot x = 0$, ցանկացած $x$։ $a = -2$․ $0 \\cdot x = -4$, արմատ չկա։ Մնացած դեպքերում՝ $x = \\dfrac{a - 2}{(a - 2)(a + 2)} = \\dfrac{1}{a + 2}$։

**Դասական թակարդը։** Երբեք մի բաժանիր պարամետր պարունակող արտահայտության վրա, քանի դեռ չես ստուգել, թե երբ է այն զրո։ Այդ հատուկ արժեքները սովորաբար խնդրի ողջ իմաստն են։`,
      `**Всегда три исхода.** Любое линейное уравнение сводится к $ax = b$. Если $a \\ne 0$ — ровно один корень $x = \\dfrac{b}{a}$. Если $a = 0$ и $b = 0$ — подходит любое $x$. Если $a = 0$ и $b \\ne 0$ — корней нет.

**Пример.** $(a^2 - 4)x = a - 2$. Коэффициент обращается в ноль при $a = \\pm2$, эти значения проверяем отдельно. $a = 2$: $0 \\cdot x = 0$, любое $x$. $a = -2$: $0 \\cdot x = -4$, корней нет. В остальных случаях $x = \\dfrac{a - 2}{(a - 2)(a + 2)} = \\dfrac{1}{a + 2}$.

**Классическая ловушка.** Никогда не дели на выражение с параметром, пока не проверил, когда оно равно нулю. Именно эти особые значения обычно и составляют суть задачи.`,
    ),
    ask(1, {
      en: ["For which a does (a − 1)x = a² − 1 have infinitely many roots?", ["a = 1", "a = −1", "a = 0", "never"], "At a = 1 it becomes 0 · x = 0. At a = −1 it is −2x = 0, one root."],
      hy: ["a-ի ո՞ր արժեքի դեպքում (a − 1)x = a² − 1-ն ունի անվերջ շատ արմատներ։", ["a = 1", "a = −1", "a = 0", "երբեք"], "a = 1-ի դեպքում ստացվում է 0 · x = 0։ a = −1-ի դեպքում՝ −2x = 0, մեկ արմատ։"],
      ru: ["При каком a уравнение (a − 1)x = a² − 1 имеет бесконечно много корней?", ["a = 1", "a = −1", "a = 0", "никогда"], "При a = 1 получается 0 · x = 0. При a = −1 — −2x = 0, один корень."],
    }),
  ],
  "quadratic-parameters": [
    "plot mode=quad form=general a=1 b=-2 c=1",
    closer(
      `**Move the parabola up and down.** For $x^2 - 2x + c = 0$ change $c$ above. $D = 4 - 4c$: for $c < 1$ the parabola cuts the axis twice, at $c = 1$ it just touches it (one root $x = 1$), and for $c > 1$ it floats above (no real roots).

**Watch the leading coefficient.** In $ax^2 + 2x + 1 = 0$ the case $a = 0$ is not a quadratic at all: $2x + 1 = 0$ has the one root $x = -\\dfrac{1}{2}$. For $a \\ne 0$, one root means $D = 4 - 4a = 0$, so $a = 1$. The full answer to "exactly one root" is $a = 0$ or $a = 1$.

**Vieta helps with signs.** Both roots positive means $D \\ge 0$, $x_1 + x_2 > 0$ and $x_1 x_2 > 0$. Roots of opposite signs need only $x_1 x_2 = \\dfrac{c}{a} < 0$.`,
      `**Շարժիր պարաբոլը վեր և վար։** $x^2 - 2x + c = 0$-ի համար փոխիր $c$-ն վերևում։ $D = 4 - 4c$․ $c < 1$-ի դեպքում պարաբոլն երկու անգամ հատում է առանցքը, $c = 1$-ի դեպքում միայն շոշափում է այն (մեկ արմատ՝ $x = 1$), իսկ $c > 1$-ի դեպքում «լողում» է վերևում (իրական արմատներ չկան)։

**Հետևիր ավագ գործակցին։** $ax^2 + 2x + 1 = 0$-ում $a = 0$ դեպքն ընդհանրապես քառակուսային չէ․ $2x + 1 = 0$-ն ունի մեկ արմատ՝ $x = -\\dfrac{1}{2}$։ $a \\ne 0$-ի դեպքում մեկ արմատ նշանակում է $D = 4 - 4a = 0$, այսինքն՝ $a = 1$։ «Ճիշտ մեկ արմատ» հարցի լրիվ պատասխանը՝ $a = 0$ կամ $a = 1$։

**Վիետն օգնում է նշանների հարցում։** Երկու արմատն էլ դրական են, երբ $D \\ge 0$, $x_1 + x_2 > 0$ և $x_1 x_2 > 0$։ Տարբեր նշանների արմատների համար բավական է $x_1 x_2 = \\dfrac{c}{a} < 0$։`,
      `**Двигай параболу вверх и вниз.** Для $x^2 - 2x + c = 0$ меняй $c$ выше. $D = 4 - 4c$: при $c < 1$ парабола пересекает ось дважды, при $c = 1$ только касается её (один корень $x = 1$), а при $c > 1$ «парит» сверху (действительных корней нет).

**Следи за старшим коэффициентом.** В $ax^2 + 2x + 1 = 0$ случай $a = 0$ — вовсе не квадратное уравнение: $2x + 1 = 0$ имеет один корень $x = -\\dfrac{1}{2}$. При $a \\ne 0$ один корень означает $D = 4 - 4a = 0$, то есть $a = 1$. Полный ответ на «ровно один корень»: $a = 0$ или $a = 1$.

**Виет помогает со знаками.** Оба корня положительны, когда $D \\ge 0$, $x_1 + x_2 > 0$ и $x_1 x_2 > 0$. Для корней разных знаков достаточно $x_1 x_2 = \\dfrac{c}{a} < 0$.`,
    ),
    ask(1, {
      en: ["When does x² + 4x + c = 0 have two different real roots?", ["c < 4", "c > 4", "c = 4", "c < −4"], "D = 16 − 4c > 0 gives c < 4."],
      hy: ["Ե՞րբ ունի x² + 4x + c = 0-ն երկու տարբեր իրական արմատ։", ["c < 4", "c > 4", "c = 4", "c < −4"], "D = 16 − 4c > 0-ից՝ c < 4։"],
      ru: ["Когда x² + 4x + c = 0 имеет два различных действительных корня?", ["c < 4", "c > 4", "c = 4", "c < −4"], "D = 16 − 4c > 0 даёт c < 4."],
    }),
  ],
  "roots-location": [
    "plot mode=quad form=general a=1 b=-6 c=5",
    closer(
      `**Look, don't solve.** $f(x) = x^2 - 6x + 5$ has roots 1 and 5 and its vertex at $x_0 = 3$. To decide where the roots lie relative to a number $k$, you rarely need the roots themselves: the sign of $f(k)$, the vertex and $D$ are enough.

**$k$ between the roots.** For $a > 0$ this happens exactly when $f(k) < 0$: the point of the graph above $k$ is below the axis. Here $f(2) = 4 - 12 + 5 = -3 < 0$, and indeed $1 < 2 < 5$. No condition on $D$ is needed.

**Both roots greater than $k$.** For $a > 0$ you need three things at once: $D \\ge 0$ (the roots exist), $x_0 > k$ (the vertex is to the right) and $f(k) > 0$ (the graph is still above the axis at $k$). Check with $k = 0$: $D = 16$, $x_0 = 3 > 0$, $f(0) = 5 > 0$.`,
      `**Նայիր, մի լուծիր։** $f(x) = x^2 - 6x + 5$-ն ունի 1 և 5 արմատները, գագաթը՝ $x_0 = 3$-ում։ Որոշելու համար, թե որտեղ են արմատները $k$ թվի նկատմամբ, հազվադեպ են պետք հենց արմատները․ բավական են $f(k)$-ի նշանը, գագաթը և $D$-ն։

**$k$-ն արմատների միջև։** $a > 0$-ի դեպքում դա տեղի ունի ճիշտ այն ժամանակ, երբ $f(k) < 0$․ գրաֆիկի $k$-ի վերևի կետն առանցքից ցածր է։ Այստեղ $f(2) = 4 - 12 + 5 = -3 < 0$, և իսկապես $1 < 2 < 5$։ $D$-ի վրա պայման պետք չէ։

**Երկու արմատն էլ մեծ են $k$-ից։** $a > 0$-ի դեպքում պետք են միանգամից երեք բան․ $D \\ge 0$ (արմատները կան), $x_0 > k$ (գագաթն աջ է) և $f(k) > 0$ (գրաֆիկը $k$-ում դեռ առանցքից վեր է)։ Ստուգիր $k = 0$-ով․ $D = 16$, $x_0 = 3 > 0$, $f(0) = 5 > 0$։`,
      `**Смотри, а не решай.** У $f(x) = x^2 - 6x + 5$ корни 1 и 5, вершина в $x_0 = 3$. Чтобы понять, где лежат корни относительно числа $k$, сами корни нужны редко: хватает знака $f(k)$, вершины и $D$.

**$k$ между корнями.** При $a > 0$ это бывает ровно тогда, когда $f(k) < 0$: точка графика над $k$ лежит ниже оси. Здесь $f(2) = 4 - 12 + 5 = -3 < 0$, и действительно $1 < 2 < 5$. Условие на $D$ не нужно.

**Оба корня больше $k$.** При $a > 0$ нужны сразу три условия: $D \\ge 0$ (корни есть), $x_0 > k$ (вершина правее) и $f(k) > 0$ (в точке $k$ график ещё над осью). Проверим при $k = 0$: $D = 16$, $x_0 = 3 > 0$, $f(0) = 5 > 0$.`,
    ),
    ask(2, {
      en: ["For a > 0, the number k lies strictly between the roots of f exactly when:", ["f(k) > 0", "f(k) < 0", "D > 0", "the vertex is at k"], "The graph is below the axis only between the roots."],
      hy: ["a > 0-ի դեպքում k թիվը f-ի արմատների միջև է ճիշտ այն ժամանակ, երբ՝", ["f(k) > 0", "f(k) < 0", "D > 0", "գագաթը k-ում է"], "Գրաֆիկն առանցքից ցածր է միայն արմատների միջև։"],
      ru: ["При a > 0 число k лежит строго между корнями f ровно тогда, когда:", ["f(k) > 0", "f(k) < 0", "D > 0", "вершина в точке k"], "График ниже оси только между корнями."],
    }),
  ],
  "graphical-parameters": [
    "plot mode=shift base=abs m=1 n=-2",
    closer(
      `**Put the parameter on its own.** Write the equation as $f(x) = a$. Then the solutions are the crossings of the fixed graph $y = f(x)$ with the horizontal line $y = a$, and changing $a$ just slides the line up and down.

**Example: a V.** $|x - 1| - 2 = a$ is the graph above. For $a > -2$ the line cuts both arms: two solutions. At $a = -2$ it touches the corner: one solution, $x = 1$. For $a < -2$ it misses: none.

**Example: a W.** $y = x^2 - 4|x| + 3$ has lowest points $(\\pm2; -1)$ and a peak $(0; 3)$. Slide the line: $a < -1$ gives 0 solutions, $a = -1$ gives 2, $-1 < a < 3$ gives 4, $a = 3$ gives 3, and $a > 3$ gives 2.`,
      `**Պարամետրն առանձնացրու։** Հավասարումը գրիր $f(x) = a$ տեսքով։ Այդ դեպքում լուծումները $y = f(x)$ անշարժ գրաֆիկի և $y = a$ հորիզոնական ուղղի հատման կետերն են, իսկ $a$-ն փոխելը պարզապես սահեցնում է ուղիղը վեր և վար։

**Օրինակ՝ V։** $|x - 1| - 2 = a$-ն վերևի գրաֆիկն է։ $a > -2$-ի դեպքում ուղիղը հատում է երկու թևը՝ երկու լուծում։ $a = -2$-ի դեպքում այն դիպչում է անկյանը՝ մեկ լուծում՝ $x = 1$։ $a < -2$-ի դեպքում չի հատում՝ լուծում չկա։

**Օրինակ՝ W։** $y = x^2 - 4|x| + 3$-ն ունի $(\\pm2; -1)$ ամենացածր կետերը և $(0; 3)$ գագաթը։ Սահեցրու ուղիղը․ $a < -1$-ի դեպքում 0 լուծում, $a = -1$-ի դեպքում՝ 2, $-1 < a < 3$-ի դեպքում՝ 4, $a = 3$-ի դեպքում՝ 3, իսկ $a > 3$-ի դեպքում՝ 2։`,
      `**Отдели параметр.** Запиши уравнение в виде $f(x) = a$. Тогда решения — точки пересечения неподвижного графика $y = f(x)$ с горизонтальной прямой $y = a$, а изменение $a$ просто двигает прямую вверх и вниз.

**Пример: галочка.** $|x - 1| - 2 = a$ — это график выше. При $a > -2$ прямая пересекает обе ветви: два решения. При $a = -2$ она касается угла: одно решение $x = 1$. При $a < -2$ мимо: решений нет.

**Пример: буква W.** У $y = x^2 - 4|x| + 3$ нижние точки $(\\pm2; -1)$ и пик $(0; 3)$. Двигаем прямую: при $a < -1$ решений 0, при $a = -1$ — 2, при $-1 < a < 3$ — 4, при $a = 3$ — 3, при $a > 3$ — 2.`,
    ),
    ask(2, {
      en: ["How many solutions does x² − 4|x| + 3 = 3 have?", ["2", "3", "4", "1"], "x² − 4|x| = 0 gives |x| = 0 or |x| = 4: x = 0, ±4."],
      hy: ["Քանի՞ լուծում ունի x² − 4|x| + 3 = 3-ը։", ["2", "3", "4", "1"], "x² − 4|x| = 0-ից՝ |x| = 0 կամ |x| = 4․ x = 0, ±4։"],
      ru: ["Сколько решений у x² − 4|x| + 3 = 3?", ["2", "3", "4", "1"], "x² − 4|x| = 0 даёт |x| = 0 или |x| = 4: x = 0, ±4."],
    }),
  ],
  "second-derivative": [
    "plot mode=tangent fn=cubic x=0 show=deriv",
    closer(
      `**The slope of the slope.** For $f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3$ and $f''(x) = 6x$. $f''$ tells how fast the slope itself changes, that is, which way the graph bends.

**Cup or cap.** Where $f'' > 0$ (here $x > 0$) the slopes keep growing and the graph is convex downwards, like a cup. Where $f'' < 0$ ($x < 0$) it is convex upwards, like a cap. At $x = 0$ the bending flips: an inflection point. Move the point above to $x = 0$: the tangent crosses the curve there.

**A quick test for extremes.** $f'(\\pm1) = 0$. $f''(1) = 6 > 0$: a cup, so $x = 1$ is a minimum. $f''(-1) = -6 < 0$: a cap, so $x = -1$ is a maximum. In physics, $f''$ of the position is the acceleration.`,
      `**Թեքության թեքությունը։** $f(x) = x^3 - 3x$-ի համար՝ $f'(x) = 3x^2 - 3$ և $f''(x) = 6x$։ $f''$-ը ցույց է տալիս, թե որքան արագ է փոխվում հենց թեքությունը, այսինքն՝ որ կողմ է կորանում գրաֆիկը։

**Բաժակ կամ գլխարկ։** Որտեղ $f'' > 0$ (այստեղ՝ $x > 0$), թեքություններն աճում են, և գրաֆիկն ուռուցիկ է դեպի ներքև՝ բաժակի պես։ Որտեղ $f'' < 0$ ($x < 0$), այն ուռուցիկ է դեպի վերև՝ գլխարկի պես։ $x = 0$-ում կորությունը շրջվում է․ դա շրջման կետ է։ Վերևի կետը տար $x = 0$․ այնտեղ շոշափողը հատում է կորը։

**Էքստրեմումների արագ ստուգում։** $f'(\\pm1) = 0$։ $f''(1) = 6 > 0$՝ բաժակ, ուստի $x = 1$-ը մինիմում է։ $f''(-1) = -6 < 0$՝ գլխարկ, ուստի $x = -1$-ը մաքսիմում է։ Ֆիզիկայում դիրքի $f''$-ը արագացումն է։`,
      `**Наклон наклона.** Для $f(x) = x^3 - 3x$: $f'(x) = 3x^2 - 3$ и $f''(x) = 6x$. $f''$ показывает, как быстро меняется сам наклон, то есть куда изгибается график.

**Чашка или шапка.** Где $f'' > 0$ (здесь $x > 0$), наклоны растут, и график выпуклый вниз, как чашка. Где $f'' < 0$ ($x < 0$), он выпуклый вверх, как шапка. В $x = 0$ изгиб меняется — это точка перегиба. Передвинь точку выше в $x = 0$: там касательная пересекает кривую.

**Быстрый тест на экстремумы.** $f'(\\pm1) = 0$. $f''(1) = 6 > 0$ — чашка, значит, $x = 1$ — минимум. $f''(-1) = -6 < 0$ — шапка, значит, $x = -1$ — максимум. В физике $f''$ от координаты — это ускорение.`,
    ),
    ask(2, {
      en: ["f(x) = x³ − 3x has f′(−1) = 0 and f″(−1) = −6. So x = −1 is:", ["a minimum", "a maximum", "an inflection point", "not a critical point"], "f″ < 0 means the graph is a cap there, so it is a maximum."],
      hy: ["f(x) = x³ − 3x-ի համար f′(−1) = 0 և f″(−1) = −6։ Ուրեմն x = −1-ը՝", ["մինիմում է", "մաքսիմում է", "շրջման կետ է", "կրիտիկական կետ չէ"], "f″ < 0 նշանակում է, որ այնտեղ գրաֆիկը գլխարկ է, ուստի մաքսիմում է։"],
      ru: ["У f(x) = x³ − 3x f′(−1) = 0 и f″(−1) = −6. Значит, x = −1 —", ["минимум", "максимум", "точка перегиба", "не критическая точка"], "f″ < 0 — там график шапкой, значит, это максимум."],
    }),
  ],
  asymptotes: [
    "plot mode=shift base=inv m=1 n=2",
    closer(
      `**Lines the graph hugs.** $y = \\dfrac{1}{x - 1} + 2$ is drawn above. Near $x = 1$ the denominator tends to 0 and the graph shoots off to $\\pm\\infty$: that is the vertical asymptote $x = 1$. Far to the left and right the fraction dies away and the graph presses against the horizontal asymptote $y = 2$.

**How to find them.** Vertical: where the denominator is 0 but the numerator is not. Horizontal: the limit of $f(x)$ as $x \\to \\pm\\infty$. Oblique $y = kx + b$: $k = \\lim \\dfrac{f(x)}{x}$, $b = \\lim (f(x) - kx)$. For example, $\\dfrac{x^2 + 1}{x} = x + \\dfrac{1}{x}$ has the oblique asymptote $y = x$ and the vertical one $x = 0$.

**The full investigation, in order.** Domain, symmetry, zeros, asymptotes, then $f'$ (increase, decrease, extremes), then $f''$ (convexity, inflection), and only then the sketch.`,
      `**Ուղիղներ, որոնց գրաֆիկը «գրկում է»։** Վերևում պատկերված է $y = \\dfrac{1}{x - 1} + 2$-ը։ $x = 1$-ի մոտ հայտարարը ձգտում է 0-ի, և գրաֆիկը սլանում է դեպի $\\pm\\infty$․ դա $x = 1$ ուղղաձիգ ասիմպտոտն է։ Հեռու՝ ձախ և աջ, կոտորակը մարում է, և գրաֆիկը սեղմվում է $y = 2$ հորիզոնական ասիմպտոտին։

**Ինչպես գտնել դրանք։** Ուղղաձիգ՝ որտեղ հայտարարը 0 է, իսկ համարիչը՝ ոչ։ Հորիզոնական՝ $f(x)$-ի սահմանը, երբ $x \\to \\pm\\infty$։ Թեք՝ $y = kx + b$, $k = \\lim \\dfrac{f(x)}{x}$, $b = \\lim (f(x) - kx)$։ Օրինակ՝ $\\dfrac{x^2 + 1}{x} = x + \\dfrac{1}{x}$-ն ունի $y = x$ թեք և $x = 0$ ուղղաձիգ ասիմպտոտներ։

**Լրիվ հետազոտությունը՝ ըստ հերթականության։** Որոշման տիրույթ, համաչափություն, զրոներ, ասիմպտոտներ, հետո $f'$ (աճ, նվազում, էքստրեմումներ), հետո $f''$ (ուռուցիկություն, շրջման կետեր), և միայն դրանից հետո՝ էսքիզը։`,
      `**Прямые, к которым жмётся график.** Выше нарисован $y = \\dfrac{1}{x - 1} + 2$. Возле $x = 1$ знаменатель стремится к 0, и график улетает в $\\pm\\infty$: это вертикальная асимптота $x = 1$. Далеко слева и справа дробь затухает, и график прижимается к горизонтальной асимптоте $y = 2$.

**Как их найти.** Вертикальная — где знаменатель равен 0, а числитель нет. Горизонтальная — предел $f(x)$ при $x \\to \\pm\\infty$. Наклонная $y = kx + b$: $k = \\lim \\dfrac{f(x)}{x}$, $b = \\lim (f(x) - kx)$. Например, у $\\dfrac{x^2 + 1}{x} = x + \\dfrac{1}{x}$ наклонная асимптота $y = x$ и вертикальная $x = 0$.

**Полное исследование по порядку.** Область определения, симметрия, нули, асимптоты, затем $f'$ (возрастание, убывание, экстремумы), затем $f''$ (выпуклость, перегибы) и только потом эскиз.`,
    ),
    ask(1, {
      en: ["What is the horizontal asymptote of y = (2x + 1)/(x − 3)?", ["y = 2", "y = 3", "x = 3", "y = −1/3"], "For large x the fraction is about 2x/x = 2."],
      hy: ["Ո՞րն է y = (2x + 1)/(x − 3)-ի հորիզոնական ասիմպտոտը։", ["y = 2", "y = 3", "x = 3", "y = −1/3"], "Մեծ x-երի դեպքում կոտորակը մոտավորապես 2x/x = 2 է։"],
      ru: ["Какова горизонтальная асимптота y = (2x + 1)/(x − 3)?", ["y = 2", "y = 3", "x = 3", "y = −1/3"], "При больших x дробь примерно 2x/x = 2."],
    }),
  ],
  "integral-applications": [
    "plot mode=area fn=sqrt a=0 b=4 n=8",
    closer(
      `**Area.** The area under $y = \\sqrt x$ from 0 to 4 is $\\displaystyle\\int_0^4 \\sqrt x\\,dx = \\dfrac{2}{3}x^{3/2}\\Big|_0^4 = \\dfrac{2}{3} \\cdot 8 = \\dfrac{16}{3} \\approx 5.33$. Add rectangles above and watch their total approach this number.

**Volume.** Spin the same curve around the $x$-axis. Each thin slice is a disc of area $\\pi y^2$, so $V = \\pi\\displaystyle\\int_0^4 (\\sqrt x)^2\\,dx = \\pi\\int_0^4 x\\,dx = 8\\pi$. That is the volume of a paraboloid, a shape like a satellite dish.

**Physics.** Whenever something accumulates, there is an integral. Distance is the integral of speed, $s = \\displaystyle\\int v\\,dt$; work is the integral of force, $A = \\displaystyle\\int F\\,dx$; mass is the integral of density.`,
      `**Մակերես։** $y = \\sqrt x$-ի տակ 0-ից 4 մակերեսը $\\displaystyle\\int_0^4 \\sqrt x\\,dx = \\dfrac{2}{3}x^{3/2}\\Big|_0^4 = \\dfrac{2}{3} \\cdot 8 = \\dfrac{16}{3} \\approx 5{,}33$ է։ Ավելացրու ուղղանկյուններ վերևում և տես, թե ինչպես է դրանց գումարը մոտենում այս թվին։

**Ծավալ։** Պտտիր նույն կորը $x$ առանցքի շուրջ։ Յուրաքանչյուր բարակ շերտ $\\pi y^2$ մակերեսով սկավառակ է, ուստի $V = \\pi\\displaystyle\\int_0^4 (\\sqrt x)^2\\,dx = \\pi\\int_0^4 x\\,dx = 8\\pi$։ Դա պարաբոլոիդի՝ արբանյակային ափսեի նման մարմնի ծավալն է։

**Ֆիզիկա։** Ամեն անգամ, երբ ինչ-որ բան կուտակվում է, կա ինտեգրալ։ Ճանապարհն արագության ինտեգրալն է՝ $s = \\displaystyle\\int v\\,dt$, աշխատանքը՝ ուժի ինտեգրալը՝ $A = \\displaystyle\\int F\\,dx$, զանգվածը՝ խտության ինտեգրալը։`,
      `**Площадь.** Площадь под $y = \\sqrt x$ от 0 до 4 равна $\\displaystyle\\int_0^4 \\sqrt x\\,dx = \\dfrac{2}{3}x^{3/2}\\Big|_0^4 = \\dfrac{2}{3} \\cdot 8 = \\dfrac{16}{3} \\approx 5{,}33$. Добавляй прямоугольники выше и смотри, как их сумма приближается к этому числу.

**Объём.** Повернём ту же кривую вокруг оси $x$. Каждый тонкий срез — круг площади $\\pi y^2$, поэтому $V = \\pi\\displaystyle\\int_0^4 (\\sqrt x)^2\\,dx = \\pi\\int_0^4 x\\,dx = 8\\pi$. Это объём параболоида — тела, похожего на спутниковую тарелку.

**Физика.** Всякий раз, когда что-то накапливается, появляется интеграл. Путь — интеграл скорости, $s = \\displaystyle\\int v\\,dt$; работа — интеграл силы, $A = \\displaystyle\\int F\\,dx$; масса — интеграл плотности.`,
    ),
    ask(2, {
      en: ["A car moves with speed v(t) = 2t m/s. How far does it go from t = 0 to t = 3 s?", ["6 m", "9 m", "18 m", "3 m"], "s = ∫ 2t dt from 0 to 3 = t² from 0 to 3 = 9."],
      hy: ["Մեքենան շարժվում է v(t) = 2t մ/վ արագությամբ։ Ի՞նչ ճանապարհ է անցնում t = 0-ից t = 3 վ ընթացքում։", ["6 մ", "9 մ", "18 մ", "3 մ"], "s = ∫ 2t dt 0-ից 3 = t² 0-ից 3 = 9։"],
      ru: ["Машина едет со скоростью v(t) = 2t м/с. Какой путь она проходит от t = 0 до t = 3 с?", ["6 м", "9 м", "18 м", "3 м"], "s = ∫ 2t dt от 0 до 3 = t² от 0 до 3 = 9."],
    }),
  ],
  "differential-equations-idea": [
    "plot mode=tangent fn=exp x=0 show=deriv",
    closer(
      `**An equation for a function.** $y' = y$ asks: which function equals its own slope? Turn on f′ above: the graph of the slope of $e^x$ lies exactly on top of $e^x$. So $y = e^x$ works, and so does $y = Ce^x$ for any constant $C$.

**One starting value picks one curve.** The general solution is a whole family. An initial condition chooses one member: $y(0) = 3$ gives $C = 3$, so $y = 3e^x$.

**Where this appears.** $y' = ky$ means "grows (or shrinks) in proportion to itself": bacteria, money at compound interest, radioactive decay ($k < 0$). Its solution is $y = y_0 e^{kx}$. The equation $y'' = -\\omega^2 y$ describes a swinging pendulum or a spring; its solutions are $\\sin \\omega t$ and $\\cos \\omega t$.`,
      `**Հավասարում ֆունկցիայի համար։** $y' = y$-ը հարցնում է․ ո՞ր ֆունկցիան է հավասար իր թեքությանը։ Վերևում միացրու f′-ը․ $e^x$-ի թեքության գրաֆիկը ճիշտ համընկնում է $e^x$-ին։ Ուրեմն $y = e^x$-ը լուծում է, ինչպես նաև $y = Ce^x$-ը ցանկացած $C$ հաստատունի դեպքում։

**Մեկ սկզբնական արժեքն ընտրում է մեկ կոր։** Ընդհանուր լուծումը մի ամբողջ ընտանիք է։ Սկզբնական պայմանն ընտրում է դրա մեկ անդամը․ $y(0) = 3$-ից $C = 3$, ուստի $y = 3e^x$։

**Որտեղ է սա հանդիպում։** $y' = ky$ նշանակում է «աճում է (կամ նվազում) իրեն համեմատական»․ բակտերիաներ, բարդ տոկոսով գումար, ռադիոակտիվ տրոհում ($k < 0$)։ Նրա լուծումն է $y = y_0 e^{kx}$։ $y'' = -\\omega^2 y$ հավասարումը նկարագրում է ճոճանակի կամ զսպանակի տատանումը․ նրա լուծումներն են $\\sin \\omega t$-ն և $\\cos \\omega t$-ն։`,
      `**Уравнение на функцию.** $y' = y$ спрашивает: какая функция равна своему наклону? Включи f′ выше: график наклона $e^x$ ложится ровно на $e^x$. Значит, $y = e^x$ подходит, как и $y = Ce^x$ при любой постоянной $C$.

**Одно начальное значение выбирает одну кривую.** Общее решение — целое семейство. Начальное условие выбирает одного его представителя: $y(0) = 3$ даёт $C = 3$, то есть $y = 3e^x$.

**Где это встречается.** $y' = ky$ значит «растёт (или убывает) пропорционально самому себе»: бактерии, вклад под сложный процент, радиоактивный распад ($k < 0$). Решение — $y = y_0 e^{kx}$. Уравнение $y'' = -\\omega^2 y$ описывает колебания маятника или пружины; его решения — $\\sin \\omega t$ и $\\cos \\omega t$.`,
    ),
    ask(1, {
      en: ["Which function solves y′ = 2y with y(0) = 5?", ["y = 5e^(2x)", "y = 2e^(5x)", "y = 5 + 2x", "y = e^(2x) + 5"], "y = Ce^(2x), and y(0) = C = 5."],
      hy: ["Ո՞ր ֆունկցիան է y′ = 2y-ի լուծումը y(0) = 5 պայմանով։", ["y = 5e^(2x)", "y = 2e^(5x)", "y = 5 + 2x", "y = e^(2x) + 5"], "y = Ce^(2x), և y(0) = C = 5։"],
      ru: ["Какая функция решает y′ = 2y при y(0) = 5?", ["y = 5e^(2x)", "y = 2e^(5x)", "y = 5 + 2x", "y = e^(2x) + 5"], "y = Ce^(2x), а y(0) = C = 5."],
    }),
  ],
  "review-expressions": [
    closer(
      `**Traps that cost points.** $\\sqrt{a^2} = |a|$, not $a$: so $\\sqrt{(1 - \\sqrt2)^2} = \\sqrt2 - 1$. $(a + b)^2 \\ne a^2 + b^2$: the middle term $2ab$ is easy to forget. $\\sqrt{a + b} \\ne \\sqrt a + \\sqrt b$, and $\\log(b + c) \\ne \\log b + \\log c$.

**Tools worth having at your fingertips.** Short multiplication formulas in both directions, factoring out a common factor, getting rid of a root in the denominator with the conjugate: $\\dfrac{1}{\\sqrt3 - 1} = \\dfrac{\\sqrt3 + 1}{2}$.

**Check by plugging in.** After simplifying, put in a simple number such as $x = 2$ on both sides. If the values differ, there is a mistake; if they agree, you can be much more confident.`,
      `**Թակարդներ, որոնք միավորներ են խլում։** $\\sqrt{a^2} = |a|$, ոչ թե $a$․ ուստի $\\sqrt{(1 - \\sqrt2)^2} = \\sqrt2 - 1$։ $(a + b)^2 \\ne a^2 + b^2$․ միջին՝ $2ab$ անդամը հեշտ է մոռանալ։ $\\sqrt{a + b} \\ne \\sqrt a + \\sqrt b$ և $\\log(b + c) \\ne \\log b + \\log c$։

**Գործիքներ, որոնք պետք է միշտ ձեռքի տակ լինեն։** Կրճատ բազմապատկման բանաձևերը՝ երկու ուղղությամբ, ընդհանուր արտադրիչը փակագծից դուրս բերելը, հայտարարի արմատից ազատվելը համալուծով․ $\\dfrac{1}{\\sqrt3 - 1} = \\dfrac{\\sqrt3 + 1}{2}$։

**Ստուգիր տեղադրելով։** Պարզեցնելուց հետո երկու կողմում տեղադրիր պարզ թիվ, օրինակ՝ $x = 2$։ Եթե արժեքները տարբեր են, սխալ կա, եթե համընկնում են, կարող ես շատ ավելի վստահ լինել։`,
      `**Ловушки, которые стоят баллов.** $\\sqrt{a^2} = |a|$, а не $a$: поэтому $\\sqrt{(1 - \\sqrt2)^2} = \\sqrt2 - 1$. $(a + b)^2 \\ne a^2 + b^2$: средний член $2ab$ легко забыть. $\\sqrt{a + b} \\ne \\sqrt a + \\sqrt b$ и $\\log(b + c) \\ne \\log b + \\log c$.

**Инструменты, которые должны быть под рукой.** Формулы сокращённого умножения в обе стороны, вынесение общего множителя, избавление от корня в знаменателе через сопряжённое: $\\dfrac{1}{\\sqrt3 - 1} = \\dfrac{\\sqrt3 + 1}{2}$.

**Проверяй подстановкой.** После упрощения подставь простое число, например $x = 2$, в обе части. Если значения разные — есть ошибка; если совпали — можно быть гораздо увереннее.`,
    ),
    ask(2, {
      en: ["√((1 − √2)²) = ?", ["1 − √2", "√2 − 1", "1 + √2", "−1 − √2"], "√(a²) = |a|, and 1 − √2 is negative, so the answer is √2 − 1."],
      hy: ["√((1 − √2)²) = ?", ["1 − √2", "√2 − 1", "1 + √2", "−1 − √2"], "√(a²) = |a|, իսկ 1 − √2-ը բացասական է, ուստի պատասխանը √2 − 1 է։"],
      ru: ["√((1 − √2)²) = ?", ["1 − √2", "√2 − 1", "1 + √2", "−1 − √2"], "√(a²) = |a|, а 1 − √2 отрицательно, поэтому ответ √2 − 1."],
    }),
  ],
  "review-equations": [
    closer(
      `**Before you start: the domain.** Under an even root the expression must be $\\ge 0$, a denominator must not be 0, and a logarithm needs a positive argument. Write these conditions down first.

**Squaring can add roots.** $\\sqrt{x + 2} = x$. Square: $x + 2 = x^2$, $x^2 - x - 2 = 0$, $x = 2$ or $x = -1$. Check: $x = -1$ gives $\\sqrt1 = 1 \\ne -1$. Only $x = 2$ is a root.

**Dividing can lose roots.** In $x^2 = 3x$ it is tempting to divide by $x$ and get only $x = 3$. Instead move everything to one side and factor: $x(x - 3) = 0$, so $x = 0$ or $x = 3$. For systems, choose substitution or addition, and check the pair in both equations.`,
      `**Սկսելուց առաջ՝ թույլատրելի արժեքները։** Զույգ աստիճանի արմատի տակ արտահայտությունը պետք է լինի $\\ge 0$, հայտարարը չպետք է լինի 0, իսկ լոգարիթմի արգումենտը պետք է լինի դրական։ Նախ գրի առ այդ պայմանները։

**Քառակուսի բարձրացնելը կարող է արմատներ ավելացնել։** $\\sqrt{x + 2} = x$։ Բարձրացրու քառակուսի․ $x + 2 = x^2$, $x^2 - x - 2 = 0$, $x = 2$ կամ $x = -1$։ Ստուգում․ $x = -1$-ի դեպքում $\\sqrt1 = 1 \\ne -1$։ Միայն $x = 2$-ն է արմատ։

**Բաժանելը կարող է արմատներ կորցնել։** $x^2 = 3x$-ում գայթակղիչ է բաժանել $x$-ի և ստանալ միայն $x = 3$։ Փոխարենն ամեն ինչ տեղափոխիր մեկ կողմ և վերլուծիր արտադրիչների․ $x(x - 3) = 0$, ուստի $x = 0$ կամ $x = 3$։ Համակարգերի համար ընտրիր տեղադրման կամ գումարման եղանակը և ստուգիր զույգն երկու հավասարումում։`,
      `**Прежде всего — ОДЗ.** Под корнем чётной степени выражение должно быть $\\ge 0$, знаменатель не равен 0, у логарифма аргумент положителен. Сначала выпиши эти условия.

**Возведение в квадрат может добавить корни.** $\\sqrt{x + 2} = x$. Возводим в квадрат: $x + 2 = x^2$, $x^2 - x - 2 = 0$, $x = 2$ или $x = -1$. Проверка: при $x = -1$ получаем $\\sqrt1 = 1 \\ne -1$. Корень только $x = 2$.

**Деление может потерять корни.** В $x^2 = 3x$ хочется разделить на $x$ и получить только $x = 3$. Вместо этого перенеси всё в одну часть и разложи: $x(x - 3) = 0$, то есть $x = 0$ или $x = 3$. В системах выбирай подстановку или сложение и проверяй пару в обоих уравнениях.`,
    ),
    ask(2, {
      en: ["Solving x² = 3x by dividing both sides by x loses which root?", ["x = 3", "x = 0", "x = −3", "none"], "x(x − 3) = 0 has the roots 0 and 3; dividing by x throws away x = 0."],
      hy: ["x² = 3x-ը երկու կողմը x-ի բաժանելով լուծելիս ո՞ր արմատն է կորչում։", ["x = 3", "x = 0", "x = −3", "ոչ մեկը"], "x(x − 3) = 0-ն ունի 0 և 3 արմատները․ x-ի բաժանելը դեն է նետում x = 0-ն։"],
      ru: ["Какой корень теряется, если решать x² = 3x делением обеих частей на x?", ["x = 3", "x = 0", "x = −3", "никакой"], "У x(x − 3) = 0 корни 0 и 3; деление на x выбрасывает x = 0."],
    }),
  ],
  "review-inequalities": [
    "interval mode=signs roots=-3,0,2 sign=<=",
    closer(
      `**The interval method in four steps.** Move everything to one side, factor, mark the roots on the line, and find the signs. For $x(x + 3)(x - 2) \\le 0$ the roots $-3, 0, 2$ cut the line into four parts; the sign on the far right is $+$ and then alternates. Answer: $(-\\infty; -3] \\cup [0; 2]$.

**Even powers do not flip the sign.** In $(x - 1)^2(x + 2) > 0$ the factor $(x - 1)^2$ is never negative, so the sign changes only at $-2$. Answer: $(-2; 1) \\cup (1; +\\infty)$: the point $x = 1$ itself is removed, because there the product is 0.

**Never multiply by something of unknown sign.** In $\\dfrac{x - 1}{x + 2} \\ge 0$ do not multiply by $x + 2$; treat the fraction like a product, and remember the denominator can never be 0: $(-\\infty; -2) \\cup [1; +\\infty)$.`,
      `**Միջակայքերի եղանակը՝ չորս քայլով։** Ամեն ինչ տեղափոխիր մեկ կողմ, վերլուծիր արտադրիչների, նշիր արմատներն ուղղի վրա և գտիր նշանները։ $x(x + 3)(x - 2) \\le 0$-ի համար $-3, 0, 2$ արմատներն ուղիղը բաժանում են չորս մասի․ ծայր աջում նշանը $+$ է, հետո հերթափոխվում է։ Պատասխան՝ $(-\\infty; -3] \\cup [0; 2]$։

**Զույգ աստիճանները նշանը չեն փոխում։** $(x - 1)^2(x + 2) > 0$-ում $(x - 1)^2$ արտադրիչն երբեք բացասական չէ, ուստի նշանը փոխվում է միայն $-2$-ում։ Պատասխան՝ $(-2; 1) \\cup (1; +\\infty)$․ հենց $x = 1$ կետը հանվում է, քանի որ այնտեղ արտադրյալը 0 է։

**Երբեք մի բազմապատկիր անհայտ նշանով արտահայտությամբ։** $\\dfrac{x - 1}{x + 2} \\ge 0$-ում մի բազմապատկիր $x + 2$-ով․ կոտորակին վերաբերվիր ինչպես արտադրյալին և հիշիր, որ հայտարարն երբեք 0 չի կարող լինել․ $(-\\infty; -2) \\cup [1; +\\infty)$։`,
      `**Метод интервалов в четыре шага.** Перенеси всё в одну часть, разложи на множители, отметь корни на прямой и расставь знаки. Для $x(x + 3)(x - 2) \\le 0$ корни $-3, 0, 2$ делят прямую на четыре части; крайний правый знак $+$, дальше знаки чередуются. Ответ: $(-\\infty; -3] \\cup [0; 2]$.

**Чётные степени знак не меняют.** В $(x - 1)^2(x + 2) > 0$ множитель $(x - 1)^2$ никогда не отрицателен, поэтому знак меняется только в $-2$. Ответ: $(-2; 1) \\cup (1; +\\infty)$ — саму точку $x = 1$ выкалываем, там произведение равно 0.

**Никогда не умножай на выражение неизвестного знака.** В $\\dfrac{x - 1}{x + 2} \\ge 0$ не умножай на $x + 2$; работай с дробью как с произведением и помни, что знаменатель не может быть 0: $(-\\infty; -2) \\cup [1; +\\infty)$.`,
    ),
    ask(2, {
      en: ["Solve (x − 1)²(x + 2) > 0.", ["x > −2", "(−2; 1) ∪ (1; +∞)", "x < −2", "(−2; 1)"], "The square is positive except at x = 1, where the product is 0; x + 2 > 0 gives x > −2."],
      hy: ["Լուծիր (x − 1)²(x + 2) > 0-ն։", ["x > −2", "(−2; 1) ∪ (1; +∞)", "x < −2", "(−2; 1)"], "Քառակուսին դրական է, բացի x = 1-ից, որտեղ արտադրյալը 0 է․ x + 2 > 0-ից՝ x > −2։"],
      ru: ["Реши (x − 1)²(x + 2) > 0.", ["x > −2", "(−2; 1) ∪ (1; +∞)", "x < −2", "(−2; 1)"], "Квадрат положителен везде, кроме x = 1, где произведение равно 0; x + 2 > 0 даёт x > −2."],
    }),
  ],
  "review-functions": [
    "plot mode=shift base=sq m=1 n=-2",
    closer(
      `**Every graph from a few basic ones.** $y = f(x - m) + n$ is the graph of $f$ moved $m$ to the right and $n$ up. Above, $y = (x - 1)^2 - 2$ is the parabola $y = x^2$ moved 1 right and 2 down. Watch the sign: $f(x + 3)$ moves the graph **left**.

**Reflections and stretches.** $-f(x)$ flips the graph over the $x$-axis, $f(-x)$ over the $y$-axis, $k f(x)$ stretches it vertically, and $|f(x)|$ folds the part below the axis upwards.

**What to know about every function.** Domain and range, zeros, sign, increase and decrease, extremes, even or odd, periodic or not. For the basic functions (linear, quadratic, power, $\\dfrac{1}{x}$, $\\sqrt x$, exponential, logarithmic, trigonometric) you should be able to sketch the graph in seconds.`,
      `**Ամեն գրաֆիկ՝ մի քանի հիմնականից։** $y = f(x - m) + n$-ը $f$-ի գրաֆիկն է՝ տեղաշարժված $m$-ով աջ և $n$-ով վեր։ Վերևում $y = (x - 1)^2 - 2$-ը $y = x^2$ պարաբոլն է՝ տեղաշարժված 1-ով աջ և 2-ով վար։ Հետևիր նշանին․ $f(x + 3)$-ը գրաֆիկը տեղաշարժում է **ձախ**։

**Արտապատկերումներ և ձգումներ։** $-f(x)$-ը գրաֆիկը շրջում է $x$ առանցքի նկատմամբ, $f(-x)$-ը՝ $y$ առանցքի նկատմամբ, $k f(x)$-ը ձգում է այն ուղղաձիգ, իսկ $|f(x)|$-ը առանցքից ցածր մասը ծալում է վեր։

**Ինչ իմանալ յուրաքանչյուր ֆունկցիայի մասին։** Որոշման տիրույթ և արժեքների տիրույթ, զրոներ, նշան, աճ և նվազում, էքստրեմումներ, զույգ կամ կենտ, պարբերական, թե ոչ։ Հիմնական ֆունկցիաների (գծային, քառակուսային, աստիճանային, $\\dfrac{1}{x}$, $\\sqrt x$, ցուցչային, լոգարիթմական, եռանկյունաչափական) գրաֆիկները պետք է կարողանաս գծել վայրկյանների ընթացքում։`,
      `**Любой график — из нескольких основных.** $y = f(x - m) + n$ — график $f$, сдвинутый на $m$ вправо и на $n$ вверх. Выше $y = (x - 1)^2 - 2$ — парабола $y = x^2$, сдвинутая на 1 вправо и на 2 вниз. Следи за знаком: $f(x + 3)$ сдвигает график **влево**.

**Отражения и растяжения.** $-f(x)$ отражает график относительно оси $x$, $f(-x)$ — относительно оси $y$, $k f(x)$ растягивает его по вертикали, а $|f(x)|$ отгибает часть под осью наверх.

**Что знать о каждой функции.** Область определения и множество значений, нули, знак, возрастание и убывание, экстремумы, чётность, периодичность. Графики основных функций (линейной, квадратичной, степенной, $\\dfrac{1}{x}$, $\\sqrt x$, показательной, логарифмической, тригонометрических) нужно уметь набросать за секунды.`,
    ),
    ask(2, {
      en: ["The graph of y = (x + 3)² − 1 is the parabola y = x² moved:", ["3 right, 1 down", "3 left, 1 down", "3 left, 1 up", "1 left, 3 down"], "x + 3 = x − (−3): 3 to the left; − 1: 1 down."],
      hy: ["y = (x + 3)² − 1-ի գրաֆիկը y = x² պարաբոլն է՝ տեղաշարժված", ["3-ով աջ, 1-ով վար", "3-ով ձախ, 1-ով վար", "3-ով ձախ, 1-ով վեր", "1-ով ձախ, 3-ով վար"], "x + 3 = x − (−3)․ 3-ով ձախ, − 1․ 1-ով վար։"],
      ru: ["График y = (x + 3)² − 1 — это парабола y = x², сдвинутая:", ["на 3 вправо, на 1 вниз", "на 3 влево, на 1 вниз", "на 3 влево, на 1 вверх", "на 1 влево, на 3 вниз"], "x + 3 = x − (−3): на 3 влево; − 1: на 1 вниз."],
    }),
  ],
  "review-word-problems": [
    closer(
      `**One table solves most problems.** For motion: distance = speed × time. For work: work = rate × time, with the whole job taken as 1. Make a row for each object, fill in what you know, and call the unknown $x$.

**Percentages multiply.** Up 20% means $\\times 1.2$; down 20% means $\\times 0.8$. One after the other: $1.2 \\cdot 0.8 = 0.96$, so the price falls by 4%, not back to where it was. Compound interest is the same idea repeated: $S = S_0(1 + p)^n$.

**Mixtures and alloys.** Track the pure substance: amount = concentration × mass. Mixing 2 kg of a 10% solution with 3 kg of a 20% one gives $0.2 + 0.6 = 0.8$ kg of substance in 5 kg, that is 16%. Finally, check that the answer makes sense: a time cannot be negative, and people cannot be counted in fractions.`,
      `**Մեկ աղյուսակը լուծում է խնդիրների մեծ մասը։** Շարժման համար՝ ճանապարհ = արագություն × ժամանակ։ Աշխատանքի համար՝ աշխատանք = արտադրողականություն × ժամանակ, ամբողջ աշխատանքը համարելով 1։ Յուրաքանչյուր օբյեկտի համար կազմիր տող, լրացրու հայտնին, իսկ անհայտը նշանակիր $x$։

**Տոկոսները բազմապատկվում են։** 20%-ով աճ նշանակում է $\\times 1{,}2$, 20%-ով նվազում՝ $\\times 0{,}8$։ Մեկը մյուսից հետո՝ $1{,}2 \\cdot 0{,}8 = 0{,}96$, ուստի գինը նվազում է 4%-ով, այլ ոչ թե վերադառնում նախկինին։ Բարդ տոկոսը նույն գաղափարն է՝ կրկնված․ $S = S_0(1 + p)^n$։

**Խառնուրդներ և համաձուլվածքներ։** Հետևիր մաքուր նյութին․ քանակ = խտություն × զանգված։ 10%-անոց լուծույթի 2 կգ-ը 20%-անոցի 3 կգ-ի հետ խառնելով՝ ստանում ես $0{,}2 + 0{,}6 = 0{,}8$ կգ նյութ 5 կգ-ում, այսինքն՝ 16%։ Վերջում ստուգիր, որ պատասխանն իմաստալից է․ ժամանակը չի կարող բացասական լինել, իսկ մարդկանց թիվը՝ կոտորակային։`,
      `**Одна таблица решает большинство задач.** Для движения: путь = скорость × время. Для работы: работа = производительность × время, вся работа принимается за 1. Сделай строку для каждого объекта, заполни известное, неизвестное обозначь $x$.

**Проценты перемножаются.** Рост на 20% — это $\\times 1{,}2$; снижение на 20% — $\\times 0{,}8$. Одно за другим: $1{,}2 \\cdot 0{,}8 = 0{,}96$, то есть цена падает на 4%, а не возвращается к прежней. Сложный процент — та же идея, повторённая: $S = S_0(1 + p)^n$.

**Смеси и сплавы.** Следи за чистым веществом: количество = концентрация × масса. Смешав 2 кг 10%-го раствора с 3 кг 20%-го, получим $0{,}2 + 0{,}6 = 0{,}8$ кг вещества в 5 кг, то есть 16%. В конце проверь, что ответ имеет смысл: время не бывает отрицательным, а людей не считают дробями.`,
    ),
    ask(2, {
      en: ["A price rises by 20% and then falls by 20%. Overall it:", ["is unchanged", "falls by 4%", "rises by 4%", "falls by 20%"], "1.2 · 0.8 = 0.96, which is 4% less than at the start."],
      hy: ["Գինը բարձրանում է 20%-ով, հետո իջնում 20%-ով։ Ընդհանուր առմամբ այն՝", ["չի փոխվում", "նվազում է 4%-ով", "աճում է 4%-ով", "նվազում է 20%-ով"], "1,2 · 0,8 = 0,96, այսինքն՝ սկզբնականից 4%-ով պակաս։"],
      ru: ["Цену подняли на 20%, а затем снизили на 20%. В итоге она:", ["не изменилась", "снизилась на 4%", "выросла на 4%", "снизилась на 20%"], "1,2 · 0,8 = 0,96, то есть на 4% меньше исходной."],
    }),
  ],
  "mock-exam": [
    closer(
      `**First pass: collect the easy points.** Read the whole paper quickly. Solve everything you are sure of first, and mark the problems that need more thought instead of getting stuck on the first hard one.

**Second pass: the harder problems.** Give each a fixed amount of time. If a method does not work after a few minutes, try another: a substitution, a graph, plugging in the answer options.

**Last minutes: check, don't start.** Check the domain, the signs, and whether the answer fits the question (the "sum of the roots", not the roots; the answer in the requested units). A nearly finished problem that you complete and check is worth more than a new one you only begin.`,
      `**Առաջին անցում՝ հավաքիր հեշտ միավորները։** Արագ կարդա ամբողջ առաջադրանքը։ Նախ լուծիր այն ամենը, ինչում վստահ ես, իսկ ավելի շատ մտածել պահանջող խնդիրները նշիր՝ առաջին իսկ դժվարի վրա չխրվելու համար։

**Երկրորդ անցում՝ դժվար խնդիրները։** Յուրաքանչյուրին տուր որոշակի ժամանակ։ Եթե մի քանի րոպեից հետո եղանակը չի աշխատում, փորձիր ուրիշը․ տեղադրություն, գրաֆիկ, պատասխանների տարբերակների տեղադրում։

**Վերջին րոպեներ՝ ստուգիր, նորը մի սկսիր։** Ստուգիր թույլատրելի արժեքները, նշանները և արդյոք պատասխանը համապատասխանում է հարցին («արմատների գումարը», ոչ թե արմատները, պատասխանը՝ պահանջված միավորներով)։ Գրեթե ավարտված խնդիրը, որը կավարտես և կստուգես, ավելի արժեքավոր է, քան նորը, որը միայն կսկսես։`,
      `**Первый проход: собери лёгкие баллы.** Быстро прочитай весь вариант. Сначала реши всё, в чём уверен, а задачи, требующие размышлений, отметь, чтобы не застрять на первой же трудной.

**Второй проход: задачи посложнее.** Дай каждой фиксированное время. Если способ не работает через несколько минут, попробуй другой: замену, график, подстановку вариантов ответа.

**Последние минуты: проверяй, а не начинай.** Проверь ОДЗ, знаки и то, отвечает ли ответ на вопрос («сумма корней», а не корни; ответ в нужных единицах). Почти решённая задача, которую ты доведёшь и проверишь, стоит больше новой, которую ты только начнёшь.`,
    ),
    ask(2, {
      en: ["Ten minutes are left. One problem is nearly finished, another is not started. The best move?", ["start the new one", "finish and check the nearly finished one", "guess both answers"], "Securing points you have almost earned pays more than starting from zero."],
      hy: ["Մնացել է տասը րոպե։ Մի խնդիրը գրեթե ավարտված է, մյուսը՝ չսկսված։ Ո՞րն է լավագույն քայլը։", ["սկսել նորը", "ավարտել և ստուգել գրեթե ավարտվածը", "գուշակել երկու պատասխանն էլ"], "Գրեթե վաստակած միավորներն ապահովելն ավելի շահավետ է, քան զրոյից սկսելը։"],
      ru: ["Осталось десять минут. Одна задача почти решена, другая не начата. Как лучше поступить?", ["начать новую", "дорешать и проверить почти решённую", "угадать оба ответа"], "Закрепить почти заработанные баллы выгоднее, чем начинать с нуля."],
    }),
  ],
};
