import { tip, type TipSeed } from "./types";

/** Algebra, grades 7–12: shortcuts, mnemonics and exam habits beyond the standard course. */
export const algebraTips: TipSeed[] = [
  // ---------- Grade 7 ----------
  tip("algebra", 7, "plug-in-a-number", "problemSolving", ["Test an identity with a number", "Ստուգիր նույնությունը թվով", "Проверяй тождество числом"], {
    en: `Not sure whether $(a+b)^2 = a^2 + b^2$? **Plug in $a = 1$, $b = 2$**: left side $9$, right side $5$. Different, so it is false.

Any time you simplify an expression, substitute a small number into the original and into your result. If they differ, you made a mistake somewhere. Avoid 0 and 1, they hide errors.`,
    hy: `Վստահ չե՞ս, թե $(a+b)^2 = a^2 + b^2$։ **Տեղադրիր $a = 1$, $b = 2$**․ ձախ կողմը $9$, աջը՝ $5$։ Տարբեր են, ուրեմն սխալ է։

Ամեն անգամ արտահայտություն պարզեցնելիս փոքր թիվ տեղադրիր սկզբնականի և քո արդյունքի մեջ։ Եթե տարբերվում են, ինչ-որ տեղ սխալվել ես։ Խուսափիր 0-ից և 1-ից, դրանք սխալները թաքցնում են։`,
    ru: `Не уверен, что $(a+b)^2 = a^2 + b^2$? **Подставь $a = 1$, $b = 2$**: слева $9$, справа $5$. Разные, значит это неверно.

Каждый раз, упрощая выражение, подставь небольшое число в исходное и в результат. Если они различаются, где-то ошибка. Избегай 0 и 1, они скрывают ошибки.`,
  }),
  tip("algebra", 7, "move-across-change-sign", "memory", ["Cross the bridge, change the coat", "Անցիր կամուրջը, փոխիր նշանը", "Перешёл через мост, сменил знак"], {
    en: `In an equation, the equals sign is a bridge. **Any term that crosses the bridge changes its sign.**

$3x + 7 = 22$ → $3x = 22 - 7$. The $+7$ crossed and became $-7$.

Multiplying and dividing swap too: $3x = 15$ → $x = 15 \\div 3$.`,
    hy: `Հավասարման մեջ հավասարության նշանը կամուրջ է։ **Ամեն անդամ, որ անցնում է կամուրջը, փոխում է նշանը։**

$3x + 7 = 22$ → $3x = 22 - 7$։ $+7$-ն անցավ և դարձավ $-7$։

Բազմապատկումն ու բաժանումն էլ տեղերով փոխվում են․ $3x = 15$ → $x = 15 \\div 3$։`,
    ru: `В уравнении знак равенства это мост. **Любое слагаемое, перешедшее мост, меняет знак.**

$3x + 7 = 22$ → $3x = 22 - 7$. $+7$ перешло и стало $-7$.

Умножение и деление тоже меняются: $3x = 15$ → $x = 15 : 3$.`,
  }),
  tip("algebra", 7, "square-of-sum-picture", "memory", ["See (a + b)² as a square", "Տես (a + b)²-ը որպես քառակուսի", "Представь (a + b)² как квадрат"], {
    en: `Draw a square with side $a + b$. Cut it into four pieces: a square $a^2$, a square $b^2$ and **two** rectangles $ab$.

$$(a+b)^2 = a^2 + 2ab + b^2$$

The picture explains the mysterious middle term: there are two rectangles, so the $ab$ is doubled. You will never forget the 2 again.`,
    hy: `Նկարիր քառակուսի $a + b$ կողմով։ Բաժանիր չորս մասի․ $a^2$ քառակուսի, $b^2$ քառակուսի և **երկու** $ab$ ուղղանկյուն։

$$(a+b)^2 = a^2 + 2ab + b^2$$

Նկարը բացատրում է խորհրդավոր միջին անդամը․ երկու ուղղանկյուն կա, ուրեմն $ab$-ն կրկնապատկվում է։ 2-ն այլևս չես մոռանա։`,
    ru: `Нарисуй квадрат со стороной $a + b$. Разрежь его на четыре части: квадрат $a^2$, квадрат $b^2$ и **два** прямоугольника $ab$.

$$(a+b)^2 = a^2 + 2ab + b^2$$

Рисунок объясняет загадочное среднее слагаемое: прямоугольников два, поэтому $ab$ удваивается. Двойку ты больше не забудешь.`,
  }),
  tip("algebra", 7, "like-terms-colours", "study", ["Colour the like terms", "Գունավորիր նման անդամները", "Раскрась подобные слагаемые"], {
    en: `$5x - 3y + 2 - 2x + 7y - 9$. Before collecting, **underline each family in its own way**: all $x$ terms once, all $y$ terms twice, all numbers circled.

$x$: $5x - 2x = 3x$. $y$: $-3y + 7y = 4y$. Numbers: $2 - 9 = -7$.

Answer $3x + 4y - 7$. Marking first stops you from losing a term halfway through.`,
    hy: `$5x - 3y + 2 - 2x + 7y - 9$։ Խմբավորելուց առաջ **ամեն ընտանիքն իր ձևով նշիր**․ $x$-երը մեկ գծով, $y$-երը երկու գծով, թվերը՝ օղակով։

$x$․ $5x - 2x = 3x$։ $y$․ $-3y + 7y = 4y$։ Թվեր․ $2 - 9 = -7$։

Պատասխան՝ $3x + 4y - 7$։ Նախապես նշելով դու ճանապարհին անդամ չես կորցնում։`,
    ru: `$5x - 3y + 2 - 2x + 7y - 9$. Прежде чем приводить, **отметь каждую семью по-своему**: все $x$ одной чертой, все $y$ двумя, числа обведи.

$x$: $5x - 2x = 3x$. $y$: $-3y + 7y = 4y$. Числа: $2 - 9 = -7$.

Ответ $3x + 4y - 7$. Разметка не даёт потерять слагаемое по дороге.`,
  }),
  tip("algebra", 7, "powers-of-two", "memory", ["Know the powers of 2 by heart", "Անգիր գիտես 2-ի աստիճանները", "Знай степени двойки наизусть"], {
    en: `$2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$. Learn them like a phone number.

Then $2^{10} \\approx 1000$ gives quick estimates: $2^{20} \\approx 10^6$, a million. And $64 \\times 32$ is $2^6 \\times 2^5 = 2^{11} = 2048$ without long multiplication.`,
    hy: `$2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$։ Սովորիր հեռախոսի համարի պես։

Հետո $2^{10} \\approx 1000$-ը արագ գնահատականներ է տալիս․ $2^{20} \\approx 10^6$, միլիոն։ Իսկ $64 \\times 32$-ը $2^6 \\times 2^5 = 2^{11} = 2048$ է՝ առանց երկար բազմապատկման։`,
    ru: `$2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$. Выучи как номер телефона.

Тогда $2^{10} \\approx 1000$ даёт быстрые оценки: $2^{20} \\approx 10^6$, миллион. А $64 \\cdot 32$ это $2^6 \\cdot 2^5 = 2^{11} = 2048$ без умножения в столбик.`,
  }),

  // ---------- Grade 8 ----------
  tip("algebra", 8, "vieta-first", "problemSolving", ["Guess the roots with Vieta before the formula", "Գուշակիր արմատները Վիետով՝ բանաձևից առաջ", "Угадай корни по Виету до формулы"], {
    en: `For $x^2 - 7x + 12 = 0$ look for two numbers with **sum 7 and product 12**: 3 and 4. Done, no discriminant.

Rule: in $x^2 + px + q = 0$ the roots add to $-p$ and multiply to $q$. If the leading coefficient is 1 and the roots look like integers, try this for ten seconds before the formula.`,
    hy: `$x^2 - 7x + 12 = 0$-ի համար փնտրիր երկու թիվ, որոնց **գումարը 7 է, արտադրյալը՝ 12**․ 3 և 4։ Վերջ, դիսկրիմինանտ պետք չէ։

Կանոն․ $x^2 + px + q = 0$-ում արմատների գումարը $-p$ է, արտադրյալը՝ $q$։ Եթե ավագ գործակիցը 1 է և արմատները ամբողջ են թվում, բանաձևից առաջ տասը վայրկյան փորձիր սա։`,
    ru: `Для $x^2 - 7x + 12 = 0$ ищи два числа с **суммой 7 и произведением 12**: 3 и 4. Готово, без дискриминанта.

Правило: в $x^2 + px + q = 0$ корни в сумме дают $-p$, а в произведении $q$. Если старший коэффициент 1 и корни похожи на целые, потрать десять секунд на это до формулы.`,
  }),
  tip("algebra", 8, "even-b-formula", "mentalMath", ["Even middle coefficient? Use the short formula", "Զույգ միջին գործակի՞ց․ օգտագործիր կարճ բանաձևը", "Чётный средний коэффициент? Короткая формула"], {
    en: `When $b = 2k$ is even, write $D_1 = k^2 - ac$ and

$$x = \\frac{-k \\pm \\sqrt{D_1}}{a}$$

For $x^2 + 6x - 16 = 0$: $k = 3$, $D_1 = 9 + 16 = 25$, $x = -3 \\pm 5$, so $2$ and $-8$. Smaller numbers, fewer slips.`,
    hy: `Երբ $b = 2k$ զույգ է, գրիր $D_1 = k^2 - ac$ և

$$x = \\frac{-k \\pm \\sqrt{D_1}}{a}$$

$x^2 + 6x - 16 = 0$-ի համար․ $k = 3$, $D_1 = 9 + 16 = 25$, $x = -3 \\pm 5$, ուրեմն $2$ և $-8$։ Փոքր թվեր, քիչ վրիպումներ։`,
    ru: `Когда $b = 2k$ чётное, запиши $D_1 = k^2 - ac$ и

$$x = \\frac{-k \\pm \\sqrt{D_1}}{a}$$

Для $x^2 + 6x - 16 = 0$: $k = 3$, $D_1 = 9 + 16 = 25$, $x = -3 \\pm 5$, то есть $2$ и $-8$. Числа меньше, описок меньше.`,
  }),
  tip("algebra", 8, "sum-of-coefficients", "mentalMath", ["Coefficients add to zero? Then x = 1 is a root", "Գործակիցների գումարը զրո՞ է․ x = 1-ը արմատ է", "Сумма коэффициентов ноль? Тогда x = 1 корень"], {
    en: `In $ax^2 + bx + c = 0$, if $a + b + c = 0$ then $x = 1$ is a root and the other is $\\frac{c}{a}$.

$5x^2 - 8x + 3 = 0$: $5 - 8 + 3 = 0$, so $x_1 = 1$, $x_2 = \\frac{3}{5}$.

Similar: if $a - b + c = 0$ then $x = -1$ is a root and the other is $-\\frac{c}{a}$.`,
    hy: `$ax^2 + bx + c = 0$-ում, եթե $a + b + c = 0$, ապա $x = 1$-ը արմատ է, իսկ մյուսը $\\frac{c}{a}$ է։

$5x^2 - 8x + 3 = 0$․ $5 - 8 + 3 = 0$, ուրեմն $x_1 = 1$, $x_2 = \\frac{3}{5}$։

Նմանապես․ եթե $a - b + c = 0$, ապա $x = -1$-ը արմատ է, մյուսը՝ $-\\frac{c}{a}$։`,
    ru: `В $ax^2 + bx + c = 0$, если $a + b + c = 0$, то $x = 1$ корень, а второй равен $\\frac{c}{a}$.

$5x^2 - 8x + 3 = 0$: $5 - 8 + 3 = 0$, значит $x_1 = 1$, $x_2 = \\frac{3}{5}$.

Похоже: если $a - b + c = 0$, то $x = -1$ корень, а второй равен $-\\frac{c}{a}$.`,
  }),
  tip("algebra", 8, "square-roots-estimate", "mentalMath", ["Estimate a square root in one step", "Գնահատիր քառակուսի արմատը մեկ քայլով", "Оцени квадратный корень за один шаг"], {
    en: `$\\sqrt{N} \\approx a + \\frac{N - a^2}{2a}$ where $a^2$ is the nearest perfect square.

$\\sqrt{52}$: nearest square $49$, $a = 7$. $7 + \\frac{3}{14} \\approx 7{.}21$. The calculator says $7{.}211$.

Memorise squares up to $25^2 = 625$ and this works for most numbers you meet.`,
    hy: `$\\sqrt{N} \\approx a + \\frac{N - a^2}{2a}$, որտեղ $a^2$-ը ամենամոտ լրիվ քառակուսին է։

$\\sqrt{52}$․ մոտակա քառակուսին $49$ է, $a = 7$։ $7 + \\frac{3}{14} \\approx 7{,}21$։ Հաշվիչն ասում է $7{,}211$։

Անգիր սովորիր քառակուսիները մինչև $25^2 = 625$, և սա կաշխատի գրեթե բոլոր թվերի համար։`,
    ru: `$\\sqrt{N} \\approx a + \\frac{N - a^2}{2a}$, где $a^2$ ближайший точный квадрат.

$\\sqrt{52}$: ближайший квадрат $49$, $a = 7$. $7 + \\frac{3}{14} \\approx 7{,}21$. Калькулятор даёт $7{,}211$.

Выучи квадраты до $25^2 = 625$, и это сработает почти для любого числа.`,
  }),
  tip("algebra", 8, "check-domain-first", "exam", ["Write the domain before you solve", "Գրիր թույլատրելի արժեքները լուծելուց առաջ", "Запиши ОДЗ до решения"], {
    en: `In $\\frac{x+2}{x-3} = \\frac{5}{x-3}$ a careless solver gets $x = 3$ and loses the mark, because $x = 3$ makes the denominator zero.

Habit: the first line of any fractional or root equation is the **domain**: $x \\neq 3$ here. Then at the end strike out any root that breaks it.`,
    hy: `$\\frac{x+2}{x-3} = \\frac{5}{x-3}$-ում անփույթ լուծողը ստանում է $x = 3$ և կորցնում բալը, որովհետև $x = 3$-ը հայտարարը զրո է դարձնում։

Սովորություն․ կոտորակային կամ արմատով հավասարման առաջին տողը **թույլատրելի արժեքների բազմությունն** է․ այստեղ $x \\neq 3$։ Վերջում ջնջիր ամեն արմատ, որը խախտում է այն։`,
    ru: `В $\\frac{x+2}{x-3} = \\frac{5}{x-3}$ невнимательный получает $x = 3$ и теряет балл, потому что при $x = 3$ знаменатель равен нулю.

Привычка: первая строка любого дробного или иррационального уравнения это **ОДЗ**: здесь $x \\neq 3$. В конце вычеркни каждый корень, который её нарушает.`,
  }),

  // ---------- Grade 9 ----------
  tip("algebra", 9, "interval-method-sign-chart", "problemSolving", ["Sign chart: start from the right with +", "Նշանների գիծ․ սկսիր աջից՝ պլյուսով", "Метод интервалов: начинай справа с плюса"], {
    en: `For $(x-1)(x+2)(x-4) > 0$ mark the roots $-2, 1, 4$ on a line. If every bracket has the form $(x - a)$, the **rightmost interval is always +** and signs alternate going left: $+, -, +, -$.

Answer: $(-2; 1) \\cup (4; +\\infty)$.

A squared bracket like $(x-1)^2$ does **not** change the sign when you pass it.`,
    hy: `$(x-1)(x+2)(x-4) > 0$-ի համար գծի վրա նշիր $-2, 1, 4$ արմատները։ Եթե ամեն փակագիծ $(x - a)$ տեսքի է, **ամենաաջ միջակայքը միշտ + է**, և ձախ գնալով նշանները հերթագայվում են․ $+, -, +, -$։

Պատասխան․ $(-2; 1) \\cup (4; +\\infty)$։

$(x-1)^2$ տեսքի քառակուսի փակագիծն անցնելիս նշանը **չի** փոխվում։`,
    ru: `Для $(x-1)(x+2)(x-4) > 0$ отметь корни $-2, 1, 4$ на прямой. Если каждая скобка имеет вид $(x - a)$, **самый правый интервал всегда +**, и влево знаки чередуются: $+, -, +, -$.

Ответ: $(-2; 1) \\cup (4; +\\infty)$.

Скобка в квадрате, например $(x-1)^2$, при переходе знак **не** меняет.`,
  }),
  tip("algebra", 9, "arithmetic-sum-pairing", "memory", ["Gauss's pairing trick", "Գաուսի զույգերի հնարքը", "Приём Гаусса с парами"], {
    en: `$1 + 2 + \\dots + 100$: pair the first and last, $1 + 100 = 101$, $2 + 99 = 101$… There are 50 pairs, so $50 \\times 101 = 5050$.

That *is* the arithmetic series formula $S_n = \\frac{(a_1 + a_n)\\,n}{2}$: average of the ends times the count. Remember the story, and the formula remembers itself.`,
    hy: `$1 + 2 + \\dots + 100$․ զուգավորիր առաջինն ու վերջինը, $1 + 100 = 101$, $2 + 99 = 101$… 50 զույգ է, ուրեմն $50 \\times 101 = 5050$։

Սա *հենց* թվաբանական պրոգրեսիայի գումարի բանաձևն է․ $S_n = \\frac{(a_1 + a_n)\\,n}{2}$, ծայրերի միջինը անգամ քանակը։ Հիշիր պատմությունը, և բանաձևն ինքն իրեն կհիշվի։`,
    ru: `$1 + 2 + \\dots + 100$: соедини первое и последнее, $1 + 100 = 101$, $2 + 99 = 101$… Пар 50, значит $50 \\cdot 101 = 5050$.

Это *и есть* формула суммы арифметической прогрессии $S_n = \\frac{(a_1 + a_n)\\,n}{2}$: среднее крайних, умноженное на количество. Помни историю, и формула вспомнится сама.`,
  }),
  tip("algebra", 9, "geometric-series-trick", "problemSolving", ["Multiply by the ratio and subtract", "Բազմապատկիր հայտարարով և հանիր", "Умножь на знаменатель и вычти"], {
    en: `Forgot the geometric sum formula? Rebuild it. Let $S = 1 + 2 + 4 + 8 + 16$. Multiply by the ratio: $2S = 2 + 4 + 8 + 16 + 32$. Subtract: $2S - S = 32 - 1$, so $S = 31$.

In general $S_n = \\frac{b_1(q^n - 1)}{q - 1}$. Deriving it takes 20 seconds and you cannot misremember it.`,
    hy: `Մոռացե՞լ ես երկրաչափական պրոգրեսիայի գումարի բանաձևը։ Վերակառուցիր։ Թող $S = 1 + 2 + 4 + 8 + 16$։ Բազմապատկիր հայտարարով․ $2S = 2 + 4 + 8 + 16 + 32$։ Հանիր․ $2S - S = 32 - 1$, ուրեմն $S = 31$։

Ընդհանուր դեպքում $S_n = \\frac{b_1(q^n - 1)}{q - 1}$։ Արտածելը 20 վայրկյան է տևում, և սխալ հիշել չես կարող։`,
    ru: `Забыл формулу суммы геометрической прогрессии? Выведи её. Пусть $S = 1 + 2 + 4 + 8 + 16$. Умножь на знаменатель: $2S = 2 + 4 + 8 + 16 + 32$. Вычти: $2S - S = 32 - 1$, значит $S = 31$.

В общем виде $S_n = \\frac{b_1(q^n - 1)}{q - 1}$. Вывод занимает 20 секунд, и его невозможно запомнить неправильно.`,
  }),
  tip("algebra", 9, "parabola-vertex-fast", "mentalMath", ["Find the vertex without completing the square", "Գտիր գագաթը առանց լրիվ քառակուսու", "Найди вершину без выделения квадрата"], {
    en: `For $y = ax^2 + bx + c$ the vertex is at $x_0 = -\\frac{b}{2a}$, halfway between the roots. Then just **substitute** to get $y_0$.

$y = 2x^2 - 8x + 3$: $x_0 = \\frac{8}{4} = 2$, $y_0 = 8 - 16 + 3 = -5$. Vertex $(2; -5)$.

Also: the parabola is symmetric, so $y(x_0 + t) = y(x_0 - t)$, useful for sketching.`,
    hy: `$y = ax^2 + bx + c$-ի գագաթը $x_0 = -\\frac{b}{2a}$ կետում է, արմատների միջև ուղիղ մեջտեղում։ Հետո պարզապես **տեղադրիր**, որ ստանաս $y_0$-ը։

$y = 2x^2 - 8x + 3$․ $x_0 = \\frac{8}{4} = 2$, $y_0 = 8 - 16 + 3 = -5$։ Գագաթ՝ $(2; -5)$։

Նաև․ պարաբոլը համաչափ է, ուրեմն $y(x_0 + t) = y(x_0 - t)$, օգտակար է գրաֆիկ գծելիս։`,
    ru: `У $y = ax^2 + bx + c$ вершина в точке $x_0 = -\\frac{b}{2a}$, ровно посередине между корнями. Дальше просто **подставь**, чтобы получить $y_0$.

$y = 2x^2 - 8x + 3$: $x_0 = \\frac{8}{4} = 2$, $y_0 = 8 - 16 + 3 = -5$. Вершина $(2; -5)$.

Ещё: парабола симметрична, поэтому $y(x_0 + t) = y(x_0 - t)$, удобно при построении.`,
  }),
  tip("algebra", 9, "exam-order", "exam", ["Do the easy questions first, twice", "Հեշտ հարցերը լուծիր առաջինը, երկու անգամ", "Сначала лёгкие задания, и дважды"], {
    en: `In the grade 9 final exam, points for an easy question equal points for a hard one. **Pass 1**: solve everything you are sure of. **Pass 2**: return to the hard ones with the remaining time.

Spend the last five minutes re-reading what you wrote, not starting a new problem: most lost marks are copying errors, not ignorance.`,
    hy: `9-րդ դասարանի ավարտական քննության ժամանակ հեշտ հարցի բալը հավասար է դժվարի բալին։ **Առաջին անցում**․ լուծիր այն ամենը, ինչում վստահ ես։ **Երկրորդ անցում**․ մնացած ժամանակով վերադարձիր դժվարներին։

Վերջին հինգ րոպեն ծախսիր գրածդ նորից կարդալու, ոչ թե նոր խնդիր սկսելու վրա․ կորցրած բալերի մեծ մասը արտագրելու սխալներ են, ոչ թե չգիտելու։`,
    ru: `На экзамене за 9 класс балл за лёгкое задание равен баллу за трудное. **Проход 1**: реши всё, в чём уверен. **Проход 2**: вернись к трудным с оставшимся временем.

Последние пять минут перечитывай написанное, а не начинай новую задачу: большинство потерянных баллов это ошибки при переписывании, а не незнание.`,
  }),

  // ---------- Grade 10 ----------
  tip("algebra", 10, "unit-circle-hand", "memory", ["Sines and cosines on your left hand", "Սինուսներն ու կոսինուսները ձախ ձեռքի վրա", "Синусы и косинусы на левой руке"], {
    en: `Spread your left hand, palm up. Fingers from thumb to pinky are $0°, 30°, 45°, 60°, 90°$. Fold the finger for your angle.

$\\sin = \\frac{\\sqrt{\\text{fingers below}}}{2}$, $\\cos = \\frac{\\sqrt{\\text{fingers above}}}{2}$.

$\\sin 30°$: fold the index finger, one finger below (thumb): $\\frac{\\sqrt{1}}{2} = \\frac12$. $\\cos 30°$: three above: $\\frac{\\sqrt3}{2}$.`,
    hy: `Բաց ձախ ձեռքդ, ափը վերև։ Մատները բթամատից մինչև ճկույթ՝ $0°, 30°, 45°, 60°, 90°$։ Ծալիր քո անկյան մատը։

$\\sin = \\frac{\\sqrt{\\text{ներքևի մատներ}}}{2}$, $\\cos = \\frac{\\sqrt{\\text{վերևի մատներ}}}{2}$։

$\\sin 30°$․ ծալիր ցուցամատը, ներքևում մեկ մատ է (բթամատը)․ $\\frac{\\sqrt{1}}{2} = \\frac12$։ $\\cos 30°$․ վերևում երեքն են․ $\\frac{\\sqrt3}{2}$։`,
    ru: `Раскрой левую руку ладонью вверх. Пальцы от большого к мизинцу: $0°, 30°, 45°, 60°, 90°$. Загни палец своего угла.

$\\sin = \\frac{\\sqrt{\\text{пальцы ниже}}}{2}$, $\\cos = \\frac{\\sqrt{\\text{пальцы выше}}}{2}$.

$\\sin 30°$: загни указательный, ниже один палец (большой): $\\frac{\\sqrt{1}}{2} = \\frac12$. $\\cos 30°$: выше три: $\\frac{\\sqrt3}{2}$.`,
  }),
  tip("algebra", 10, "all-students-take-calculus", "memory", ["Which functions are positive where", "Որ ֆունկցիաներն են դրական որտեղ", "Где какие функции положительны"], {
    en: `Going round the quadrants I, II, III, IV: **All, Sine, Tangent, Cosine** are positive. Remember *"All Students Take Calculus"*.

In quadrant II only sine is positive; in III only tangent (and cotangent); in IV only cosine.

So $\\cos 200°$ is negative (quadrant III) and $\\tan 200°$ is positive.`,
    hy: `Քառորդներով I, II, III, IV՝ դրական են **բոլորը, սինուսը, տանգենսը, կոսինուսը**։ Հիշիր հերթականությունը․ *«Բոլորը Սիրում են Տաք Կարկանդակ»*․ Բոլորը, Սինուս, Տանգենս, Կոսինուս։

II քառորդում դրական է միայն սինուսը, III-ում՝ միայն տանգենսը (և կոտանգենսը), IV-ում՝ միայն կոսինուսը։

Ուրեմն $\\cos 200°$-ը բացասական է (III քառորդ), իսկ $\\tan 200°$-ը դրական։`,
    ru: `По четвертям I, II, III, IV положительны: **все, синус, тангенс, косинус**. Запоминалка: *«Все Студенты Тащат Конспекты»*: Все, Синус, Тангенс, Косинус.

Во II четверти положителен только синус, в III только тангенс (и котангенс), в IV только косинус.

Значит $\\cos 200°$ отрицателен (III четверть), а $\\tan 200°$ положителен.`,
  }),
  tip("algebra", 10, "reduction-formula-horse", "memory", ["The horse rule for 90° ± α", "«Ձիու կանոնը» 90° ± α-ի համար", "Правило лошади для 90° ± α"], {
    en: `Reducing $\\sin(90° + \\alpha)$ or $\\cos(270° - \\alpha)$: imagine a horse on the unit circle nodding. For $90°$ and $270°$ it nods **yes**, so the function **changes** (sin ↔ cos). For $180°$ and $360°$ it shakes **no**, so the function stays.

Then take the sign from the quadrant of the original angle (treat $\\alpha$ as acute).

$\\sin(90° + \\alpha)$: function changes to cos, quadrant II where sine is positive: $\\cos\\alpha$.`,
    hy: `$\\sin(90° + \\alpha)$ կամ $\\cos(270° - \\alpha)$ բերելիս պատկերացրու ձի միավոր շրջանագծի վրա, որը գլխով է անում։ $90°$-ի և $270°$-ի դեպքում գլուխը **վերև-ներքև** է շարժում՝ «այո», ուրեմն ֆունկցիան **փոխվում** է (sin ↔ cos)։ $180°$-ի և $360°$-ի դեպքում՝ «ոչ», ֆունկցիան մնում է։

Հետո նշանը վերցրու սկզբնական անկյան քառորդից ($\\alpha$-ն համարիր սուր)։

$\\sin(90° + \\alpha)$․ ֆունկցիան փոխվում է cos-ի, II քառորդում սինուսը դրական է․ $\\cos\\alpha$։`,
    ru: `Приводя $\\sin(90° + \\alpha)$ или $\\cos(270° - \\alpha)$, представь лошадь на единичной окружности. Для $90°$ и $270°$ она кивает **«да»**, значит функция **меняется** (sin ↔ cos). Для $180°$ и $360°$ мотает головой **«нет»**, функция остаётся.

Знак бери из четверти исходного угла (считая $\\alpha$ острым).

$\\sin(90° + \\alpha)$: функция меняется на cos, II четверть, где синус положителен: $\\cos\\alpha$.`,
  }),
  tip("algebra", 10, "log-is-a-question", "memory", ["A logarithm is a question", "Լոգարիթմը հարց է", "Логарифм это вопрос"], {
    en: `Read $\\log_2 32$ as the question **"2 to what power gives 32?"** Answer: 5.

$\\log_5 \\frac{1}{25}$: 5 to what power gives $\\frac{1}{25}$? $-2$.
$\\log_{10} 0{.}001$: $-3$.

Always translate to the question first; the rules $\\log ab = \\log a + \\log b$ and $\\log a^n = n \\log a$ then feel obvious, because they are just the power rules read backwards.`,
    hy: `$\\log_2 32$-ը կարդա որպես հարց․ **«2-ը ո՞ր աստիճանի բարձրացնեմ, որ 32 ստացվի»**։ Պատասխան՝ 5։

$\\log_5 \\frac{1}{25}$․ 5-ը ո՞ր աստիճանի, որ $\\frac{1}{25}$ լինի․ $-2$։
$\\log_{10} 0{,}001$․ $-3$։

Միշտ սկզբում հարցի թարգմանիր․ $\\log ab = \\log a + \\log b$ և $\\log a^n = n \\log a$ կանոնները դրանից հետո ակնհայտ են թվում, որովհետև դրանք աստիճանի կանոններն են՝ հակառակ կողմից կարդացած։`,
    ru: `Читай $\\log_2 32$ как вопрос: **«2 в какой степени даёт 32?»** Ответ: 5.

$\\log_5 \\frac{1}{25}$: 5 в какой степени даёт $\\frac{1}{25}$? $-2$.
$\\log_{10} 0{,}001$: $-3$.

Всегда сначала переводи в вопрос; правила $\\log ab = \\log a + \\log b$ и $\\log a^n = n \\log a$ после этого очевидны, ведь это свойства степеней, прочитанные наоборот.`,
  }),
  tip("algebra", 10, "formula-sheet-weekly", "study", ["Rewrite your formula sheet every Sunday", "Ամեն կիրակի նորից գրիր բանաձևերի թերթիկդ", "Переписывай лист формул каждое воскресенье"], {
    en: `Keep **one** page of trig and log formulas. Every Sunday rewrite it from memory, then compare with last week's and fix the gaps.

Rewriting beats rereading: your hand remembers $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$ long after your eyes have forgotten it. By exam time the page is in your head.`,
    hy: `Պահիր **մեկ** թերթ եռանկյունաչափական և լոգարիթմական բանաձևերով։ Ամեն կիրակի այն նորից գրիր հիշողությամբ, հետո համեմատիր անցյալ շաբաթվա հետ և լրացրու բացերը։

Նորից գրելն ավելի լավ է, քան նորից կարդալը․ ձեռքդ հիշում է $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$-ն շատ ավելի երկար, քան աչքերդ։ Քննությանը թերթիկն արդեն գլխումդ է։`,
    ru: `Держи **одну** страницу формул тригонометрии и логарифмов. Каждое воскресенье переписывай её по памяти, потом сравнивай с прошлой неделей и заполняй пробелы.

Переписывать лучше, чем перечитывать: рука помнит $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$ гораздо дольше, чем глаза. К экзамену страница уже в голове.`,
  }),

  // ---------- Grade 11 ----------
  tip("algebra", 11, "derivative-sign-sketch", "problemSolving", ["Sketch the derivative's sign, not its value", "Նկարիր արտադրյալի նշանը, ոչ արժեքը", "Рисуй знак производной, а не её значение"], {
    en: `To find where a function grows, you only need **where $f'$ is positive**. Factor $f'$, mark its zeros on a line, write $+$ and $-$ on the intervals.

$f(x) = x^3 - 3x$: $f' = 3(x-1)(x+1)$. Signs: $+, -, +$. So $f$ increases on $(-\\infty; -1]$ and $[1; +\\infty)$, with a maximum at $x = -1$ and a minimum at $x = 1$.

Never compute the derivative's actual values unless the question asks.`,
    hy: `Գտնելու համար, թե որտեղ է ֆունկցիան աճում, պետք է միայն **որտեղ է $f'$-ը դրական**։ Վերլուծիր $f'$-ը, գծի վրա նշիր նրա զրոները, միջակայքերում գրիր $+$ և $-$։

$f(x) = x^3 - 3x$․ $f' = 3(x-1)(x+1)$։ Նշաններ․ $+, -, +$։ Ուրեմն $f$-ն աճում է $(-\\infty; -1]$ և $[1; +\\infty)$ վրա, մաքսիմում $x = -1$-ում, մինիմում $x = 1$-ում։

Արտադրյալի իրական արժեքները երբեք մի հաշվիր, եթե հարցը չի պահանջում։`,
    ru: `Чтобы найти, где функция растёт, нужно только **где $f'$ положительна**. Разложи $f'$ на множители, отметь её нули на прямой, напиши $+$ и $-$ на интервалах.

$f(x) = x^3 - 3x$: $f' = 3(x-1)(x+1)$. Знаки: $+, -, +$. Значит $f$ возрастает на $(-\\infty; -1]$ и $[1; +\\infty)$, максимум при $x = -1$, минимум при $x = 1$.

Не вычисляй значения производной, если этого не спрашивают.`,
  }),
  tip("algebra", 11, "exponential-same-base", "problemSolving", ["Exponential equation? Chase the same base", "Ցուցչային հավասարո՞ւմ․ հետապնդիր նույն հիմքը", "Показательное уравнение? Ищи общее основание"], {
    en: `$4^{x+1} = 8^{x-1}$. Both are powers of 2: $2^{2(x+1)} = 2^{3(x-1)}$, so $2x + 2 = 3x - 3$, $x = 5$.

Keep this list in your head: $4, 8, 16, 32 → 2$; $9, 27, 81 → 3$; $25, 125 → 5$; $0{.}5 = 2^{-1}$; $\\frac{1}{9} = 3^{-2}$.

If no common base exists, substitute $t = a^x$ and solve a quadratic.`,
    hy: `$4^{x+1} = 8^{x-1}$։ Երկուսն էլ 2-ի աստիճաններ են․ $2^{2(x+1)} = 2^{3(x-1)}$, ուրեմն $2x + 2 = 3x - 3$, $x = 5$։

Պահիր այս ցուցակը գլխումդ․ $4, 8, 16, 32 → 2$, $9, 27, 81 → 3$, $25, 125 → 5$, $0{,}5 = 2^{-1}$, $\\frac{1}{9} = 3^{-2}$։

Եթե ընդհանուր հիմք չկա, տեղադրիր $t = a^x$ և լուծիր քառակուսի հավասարում։`,
    ru: `$4^{x+1} = 8^{x-1}$. Оба это степени двойки: $2^{2(x+1)} = 2^{3(x-1)}$, значит $2x + 2 = 3x - 3$, $x = 5$.

Держи в голове список: $4, 8, 16, 32 → 2$; $9, 27, 81 → 3$; $25, 125 → 5$; $0{,}5 = 2^{-1}$; $\\frac{1}{9} = 3^{-2}$.

Если общего основания нет, замени $t = a^x$ и реши квадратное уравнение.`,
  }),
  tip("algebra", 11, "tangent-line-fast", "mentalMath", ["Tangent line in one formula", "Շոշափողը մեկ բանաձևով", "Касательная одной формулой"], {
    en: `The tangent to $y = f(x)$ at $x_0$ is

$$y = f(x_0) + f'(x_0)(x - x_0)$$

Three numbers to find, nothing to remember about "k" and "b". For $f(x) = x^2$ at $x_0 = 3$: $f(3) = 9$, $f'(3) = 6$, so $y = 9 + 6(x - 3) = 6x - 9$.

The same formula is also the linear approximation: $\\sqrt{4{.}1} \\approx 2 + \\frac{1}{4}(0{.}1) = 2{.}025$.`,
    hy: `$y = f(x)$-ի շոշափողը $x_0$ կետում․

$$y = f(x_0) + f'(x_0)(x - x_0)$$

Երեք թիվ պետք է գտնել, «k»-ի և «b»-ի մասին հիշել պետք չէ։ $f(x) = x^2$-ի համար $x_0 = 3$-ում․ $f(3) = 9$, $f'(3) = 6$, ուրեմն $y = 9 + 6(x - 3) = 6x - 9$։

Նույն բանաձևը նաև գծային մոտարկում է․ $\\sqrt{4{,}1} \\approx 2 + \\frac{1}{4}(0{,}1) = 2{,}025$։`,
    ru: `Касательная к $y = f(x)$ в точке $x_0$:

$$y = f(x_0) + f'(x_0)(x - x_0)$$

Найти три числа, и ничего не помнить про «k» и «b». Для $f(x) = x^2$ при $x_0 = 3$: $f(3) = 9$, $f'(3) = 6$, значит $y = 9 + 6(x - 3) = 6x - 9$.

Та же формула это линейное приближение: $\\sqrt{4{,}1} \\approx 2 + \\frac{1}{4}(0{,}1) = 2{,}025$.`,
  }),
  tip("algebra", 11, "trig-equation-answer-check", "exam", ["Check trig answers on the circle", "Ստուգիր եռանկյունաչափական պատասխանները շրջանագծի վրա", "Проверяй тригонометрические ответы на окружности"], {
    en: `After solving $\\sin x = -\\frac12$, draw the unit circle and mark the two points with height $-\\frac12$: $-\\frac{\\pi}{6}$ and $-\\frac{5\\pi}{6}$. Your written answer $x = (-1)^{k+1}\\frac{\\pi}{6} + \\pi k$ must hit exactly those points. If it also hits $\\frac{\\pi}{6}$, it is wrong.

Examiners love the circle check because it shows understanding, and it catches sign errors instantly.`,
    hy: `$\\sin x = -\\frac12$ լուծելուց հետո նկարիր միավոր շրջանագիծը և նշիր $-\\frac12$ բարձրությամբ երկու կետերը․ $-\\frac{\\pi}{6}$ և $-\\frac{5\\pi}{6}$։ Քո գրած $x = (-1)^{k+1}\\frac{\\pi}{6} + \\pi k$ պատասխանը պետք է ճիշտ այդ կետերին հասնի։ Եթե հասնում է նաև $\\frac{\\pi}{6}$-ին, սխալ է։

Քննողները սիրում են շրջանագծով ստուգումը, որովհետև այն ցույց է տալիս հասկացողություն և ակնթարթորեն բռնում է նշանի սխալները։`,
    ru: `Решив $\\sin x = -\\frac12$, нарисуй единичную окружность и отметь две точки на высоте $-\\frac12$: $-\\frac{\\pi}{6}$ и $-\\frac{5\\pi}{6}$. Твой ответ $x = (-1)^{k+1}\\frac{\\pi}{6} + \\pi k$ должен попадать ровно в эти точки. Если он попадает и в $\\frac{\\pi}{6}$, он неверен.

Экзаменаторы любят проверку по окружности: она показывает понимание и мгновенно ловит ошибки в знаках.`,
  }),
  tip("algebra", 11, "pomodoro-problem-sets", "study", ["Twenty-five minutes, one topic", "Քսանհինգ րոպե, մեկ թեմա", "Двадцать пять минут, одна тема"], {
    en: `Set a timer for 25 minutes and work on **one** type of problem only, say, logarithmic inequalities. Then five minutes away from the desk. Three rounds is a solid evening.

Mixing topics in one session feels productive but you remember less. Depth first, then on another day mix everything to simulate the exam.`,
    hy: `Դիր ժամաչափ 25 րոպեով և աշխատիր **մեկ** տեսակի խնդրի վրա, ասենք՝ լոգարիթմական անհավասարումներ։ Հետո հինգ րոպե հեռացիր սեղանից։ Երեք փուլը լավ երեկո է։

Մեկ նստաշրջանում թեմաները խառնելը արդյունավետ է թվում, բայց ավելի քիչ ես հիշում։ Սկզբում խորություն, հետո մեկ այլ օր խառնիր ամեն ինչ քննությանը նմանեցնելու համար։`,
    ru: `Поставь таймер на 25 минут и работай только над **одним** типом задач, например логарифмическими неравенствами. Потом пять минут вдали от стола. Три таких раунда это хороший вечер.

Смешивать темы в одном занятии кажется продуктивным, но запоминается меньше. Сначала глубина, а в другой день перемешай всё, чтобы смоделировать экзамен.`,
  }),

  // ---------- Grade 12 ----------
  tip("algebra", 12, "integral-guess-and-check", "problemSolving", ["Guess the antiderivative, then differentiate", "Գուշակիր նախնականը, հետո դիֆերենցիր", "Угадай первообразную, потом продифференцируй"], {
    en: `For $\\int \\cos 3x \\, dx$, guess $\\sin 3x$. Differentiate: $3\\cos 3x$, three times too big, so divide: $\\frac13 \\sin 3x + C$.

Guess-and-check is faster than substitution for every $\\int f(ax + b)\\,dx$, and the derivative check means you never hand in a wrong constant.`,
    hy: `$\\int \\cos 3x \\, dx$-ի համար գուշակիր $\\sin 3x$։ Դիֆերենցիր․ $3\\cos 3x$, երեք անգամ մեծ է, ուրեմն բաժանիր․ $\\frac13 \\sin 3x + C$։

«Գուշակիր և ստուգիր» մեթոդը տեղադրումից արագ է ամեն $\\int f(ax + b)\\,dx$-ի համար, իսկ արտադրյալով ստուգումը նշանակում է, որ սխալ գործակից երբեք չես հանձնում։`,
    ru: `Для $\\int \\cos 3x \\, dx$ предположи $\\sin 3x$. Продифференцируй: $3\\cos 3x$, в три раза больше, значит подели: $\\frac13 \\sin 3x + C$.

«Угадай и проверь» быстрее замены для любого $\\int f(ax + b)\\,dx$, а проверка производной означает, что ты никогда не сдашь неверный коэффициент.`,
  }),
  tip("algebra", 12, "area-sanity-check", "exam", ["An area is never negative", "Մակերեսը երբեք բացասական չէ", "Площадь никогда не отрицательна"], {
    en: `A definite integral is not an area: where the curve is **below** the axis it counts negative. First find where $f(x) = 0$ on the interval, **split** the integral at those points, and add the absolute values of the pieces.

Only when the curve keeps one sign on the whole interval is the area simply $\\lvert \\int_a^b f(x)\\,dx \\rvert$. For $f(x) = x$ on $[-2; 1]$ the integral is $-1{.}5$, but the area is $2 + 0{.}5 = 2{.}5$.

Also estimate: sketch the region and count squares roughly. If the sketch says "about 4" and the integral says 40, recheck the limits.`,
    hy: `Որոշյալ ինտեգրալը մակերես չէ․ որտեղ կորն առանցքից **ներքև** է, այն բացասական է հաշվվում։ Սկզբում գտիր, որտեղ է $f(x) = 0$ միջակայքում, **բաժանիր** ինտեգրալն այդ կետերում և գումարիր մասերի բացարձակ արժեքները։

Միայն երբ կորն ամբողջ միջակայքում նույն նշանն է պահում, մակերեսը պարզապես $\\lvert \\int_a^b f(x)\\,dx \\rvert$ է։ $f(x) = x$-ի համար $[-2; 1]$-ում ինտեգրալը $-1{,}5$ է, բայց մակերեսը՝ $2 + 0{,}5 = 2{,}5$։

Գնահատիր նաև․ նկարիր տիրույթը և մոտավորապես հաշվիր վանդակները։ Եթե նկարն ասում է «մոտ 4», իսկ ինտեգրալը՝ 40, նորից ստուգիր սահմանները։`,
    ru: `Определённый интеграл это не площадь: там, где кривая **ниже** оси, он считается со знаком минус. Сначала найди, где $f(x) = 0$ на отрезке, **разбей** интеграл в этих точках и сложи модули частей.

Только когда кривая сохраняет один знак на всём отрезке, площадь это просто $\\lvert \\int_a^b f(x)\\,dx \\rvert$. Для $f(x) = x$ на $[-2; 1]$ интеграл равен $-1{,}5$, а площадь $2 + 0{,}5 = 2{,}5$.

И оцени: нарисуй область и грубо посчитай клетки. Если рисунок говорит «около 4», а интеграл даёт 40, перепроверь пределы.`,
  }),
  tip("algebra", 12, "complex-roots-pairs", "memory", ["Complex roots come in pairs", "Կոմպլեքս արմատները զույգերով են", "Комплексные корни ходят парами"], {
    en: `A polynomial with real coefficients cannot have a lone complex root: if $2 + 3i$ is a root, so is $2 - 3i$. Their sum is $4$ and their product is $4 + 9 = 13$, so the quadratic factor is $x^2 - 4x + 13$.

Use this to factor a cubic quickly once you know one complex root, and to rule out answer options in a test.`,
    hy: `Իրական գործակիցներով բազմանդամը չի կարող ունենալ միայնակ կոմպլեքս արմատ․ եթե $2 + 3i$-ն արմատ է, $2 - 3i$-ն էլ արմատ է։ Նրանց գումարը $4$ է, արտադրյալը՝ $4 + 9 = 13$, ուրեմն քառակուսի արտադրիչը $x^2 - 4x + 13$ է։

Օգտագործիր սա խորանարդ բազմանդամն արագ վերլուծելու համար, երբ մեկ կոմպլեքս արմատ գիտես, և թեստում պատասխանների տարբերակները բացառելու համար։`,
    ru: `Многочлен с действительными коэффициентами не может иметь одинокий комплексный корень: если $2 + 3i$ корень, то и $2 - 3i$ тоже. Их сумма $4$, произведение $4 + 9 = 13$, значит квадратный множитель равен $x^2 - 4x + 13$.

Используй это, чтобы быстро разложить кубический многочлен, зная один комплексный корень, и чтобы отсекать варианты ответа в тесте.`,
  }),
  tip("algebra", 12, "probability-complement", "problemSolving", ["'At least one' means use the complement", "«Գոնե մեկը» նշանակում է հակադիր պատահար", "«Хотя бы один» значит через противоположное"], {
    en: `*"Probability that at least one of 3 dice shows a six."* Counting the cases directly is messy. Instead find the probability that **none** shows a six, $\\left(\\frac56\\right)^3 = \\frac{125}{216}$, and subtract from 1: $\\frac{91}{216}$.

Whenever you read "at least one", "not all" or "some", think complement first.`,
    hy: `*«Հավանականությունը, որ 3 զառից գոնե մեկը վեց կբերի»*։ Դեպքերն ուղղակի հաշվելը խառն է։ Փոխարենը գտիր հավանականությունը, որ **ոչ մեկը** վեց չի բերում՝ $\\left(\\frac56\\right)^3 = \\frac{125}{216}$, և հանիր 1-ից․ $\\frac{91}{216}$։

Երբ կարդում ես «գոնե մեկը», «ոչ բոլորը» կամ «որոշները», սկզբում մտածիր հակադիր պատահարի մասին։`,
    ru: `*«Вероятность, что хотя бы один из 3 кубиков покажет шесть»*. Считать случаи напрямую муторно. Лучше найди вероятность, что **ни один** не покажет шесть, $\\left(\\frac56\\right)^3 = \\frac{125}{216}$, и вычти из 1: $\\frac{91}{216}$.

Читая «хотя бы один», «не все» или «некоторые», сначала думай о противоположном событии.`,
  }),
  tip("algebra", 12, "mock-exam-routine", "exam", ["Rehearse the whole exam, clock included", "Փորձիր ամբողջ քննությունը՝ ժամացույցով", "Репетируй весь экзамен, с часами"], {
    en: `Once a week in the last two months, sit a **full past paper** in one go: same start time, same duration, no phone, water only. Mark it the next day, not the same evening.

Stamina and time management are skills separate from maths. Students who rehearse usually gain 10–15 % on the real day simply by not panicking at minute 90.`,
    hy: `Վերջին երկու ամիսներին շաբաթը մեկ անգամ նստիր **ամբողջական նախորդ տարվա թեստ** մեկ նստաշրջանով․ նույն սկսելու ժամը, նույն տևողությունը, առանց հեռախոսի, միայն ջուր։ Գնահատիր հաջորդ օրը, ոչ նույն երեկոյան։

Դիմացկունությունն ու ժամանակի կառավարումը մաթեմատիկայից առանձին հմտություններ են։ Փորձ անող աշակերտները քննության օրը սովորաբար 10–15 % ավելի են ստանում՝ պարզապես 90-րդ րոպեին խուճապի չմատնվելով։`,
    ru: `В последние два месяца раз в неделю решай **полный вариант прошлых лет** за один присест: то же время начала, та же длительность, без телефона, только вода. Проверяй на следующий день, не тем же вечером.

Выносливость и управление временем это навыки, отдельные от математики. Те, кто репетирует, обычно получают на 10–15 % больше в настоящий день просто потому, что не паникуют на 90-й минуте.`,
  }),
];
