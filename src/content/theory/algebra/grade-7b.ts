import { th } from "../kit";

const r = String.raw;

/** Algebra 7, units 3–4: graphs, linear functions, powers, monomials. */
export const algebra7b = {
  "function-graph": th(
    r`### Descartes: equations become pictures

In 1637 **René Descartes** published *La Géométrie*. His idea was to describe each point by two numbers, its distances from two fixed lines. Then a curve becomes an **equation**, and an equation becomes a **curve**. Since then algebra and geometry have helped each other: a hard geometry question can be turned into calculation, and a hard equation can be "looked at". That is why the axes are called **Cartesian coordinates**, after the Latin form of his name, Cartesius.

### Why a graph of a function never has two points above one x

The graph is the set of all points $(x; f(x))$. For each $x$ the function gives exactly one value, so above (or below) each $x$ there is exactly one point of the graph. That is the vertical-line test, and it is just the definition of a function seen as a picture.

### What a graph shows at a glance

- **Zeros:** where the graph meets the $x$-axis, $f(x) = 0$.
- **Sign:** above the axis $f(x) > 0$, below it $f(x) < 0$.
- **Increase and decrease:** moving right, does the graph go up or down?
- **Largest and smallest values:** the highest and lowest points.

A table of values shows only the points you calculated; a graph lets you **guess** what happens between them. The guess can be wrong if the points are far apart, so plot more points where the curve bends.

### How a graph can mislead

If the $y$-axis starts at 95 instead of 0, a change from 96 to 98 looks like a doubling. Before reading a graph in a newspaper, look at the **scale** and where the axes start.`,
    r`### Դեկարտ. հավասարումները դառնում են պատկերներ

1637 թվականին **Ռընե Դեկարտը** հրատարակեց «Երկրաչափություն» գիրքը։ Նրա գաղափարն էր յուրաքանչյուր կետ նկարագրել երկու թվով՝ երկու անշարժ ուղիղներից նրա հեռավորություններով։ Այդ դեպքում կորը դառնում է **հավասարում**, իսկ հավասարումը՝ **կոր**։ Այդ ժամանակից հանրահաշիվն ու երկրաչափությունն օգնում են միմյանց. երկրաչափական բարդ հարցը կարելի է վերածել հաշվարկի, իսկ բարդ հավասարմանը՝ «նայել»։ Ահա թե ինչու են առանցքներն անվանում **դեկարտյան կոորդինատներ**։

### Ինչու ֆունկցիայի գրաֆիկը մեկ $x$-ի վերևում երբեք երկու կետ չունի

Գրաֆիկը բոլոր $(x; f(x))$ կետերի բազմությունն է։ Յուրաքանչյուր $x$-ի համար ֆունկցիան տալիս է ճիշտ մեկ արժեք, ուստի յուրաքանչյուր $x$-ի վերևում (կամ ներքևում) գրաֆիկի ճիշտ մեկ կետ կա։ Սա ուղղաձիգ ուղղի թեստն է, և այն պարզապես ֆունկցիայի սահմանումն է՝ տեսած պատկերի տեսքով։

### Ինչ է գրաֆիկը ցույց տալիս մեկ հայացքից

- **Զրոներ.** որտեղ գրաֆիկը հատում է $x$-երի առանցքը, $f(x) = 0$։
- **Նշան.** առանցքից վերև $f(x) > 0$, ներքև՝ $f(x) < 0$։
- **Աճ և նվազում.** աջ շարժվելիս գրաֆիկը բարձրանո՞ւմ է, թե՞ իջնում։
- **Մեծագույն և փոքրագույն արժեքներ.** ամենաբարձր և ամենացածր կետերը։

Արժեքների աղյուսակը ցույց է տալիս միայն հաշված կետերը, իսկ գրաֆիկը թույլ է տալիս **կռահել**, թե ինչ է կատարվում դրանց միջև։ Կռահումը կարող է սխալ լինել, եթե կետերը հեռու են իրարից, ուստի կորի թեքվող տեղերում ավելի շատ կետեր նշիր։

### Ինչպես կարող է գրաֆիկը մոլորեցնել

Եթե $y$-ների առանցքը սկսվում է 95-ից, ոչ թե 0-ից, 96-ից 98 փոփոխությունը կրկնապատկման տեսք ունի։ Թերթում գրաֆիկ կարդալուց առաջ նայիր **մասշտաբին** և այն բանին, թե որտեղից են սկսվում առանցքները։`,
    r`### Декарт: уравнения становятся картинками

В 1637 году **Рене Декарт** опубликовал «Геометрию». Его идея — описывать каждую точку двумя числами, расстояниями до двух неподвижных прямых. Тогда кривая становится **уравнением**, а уравнение — **кривой**. С тех пор алгебра и геометрия помогают друг другу: трудный геометрический вопрос можно превратить в вычисление, а на трудное уравнение — «посмотреть». Поэтому оси и называют **декартовыми координатами**.

### Почему у графика функции не бывает двух точек над одним x

График — это множество всех точек $(x; f(x))$. Каждому $x$ функция даёт ровно одно значение, поэтому над (или под) каждым $x$ лежит ровно одна точка графика. Это и есть проверка вертикальной прямой — просто определение функции, увиденное как картинка.

### Что график показывает с одного взгляда

- **Нули:** там, где график пересекает ось $x$, $f(x) = 0$.
- **Знак:** выше оси $f(x) > 0$, ниже — $f(x) < 0$.
- **Возрастание и убывание:** при движении вправо график поднимается или опускается?
- **Наибольшее и наименьшее значения:** самая высокая и самая низкая точки.

Таблица значений показывает только вычисленные точки, а график позволяет **догадаться**, что происходит между ними. Догадка может оказаться неверной, если точки далеко друг от друга, поэтому там, где кривая изгибается, ставь больше точек.

### Как график может обмануть

Если ось $y$ начинается с 95, а не с 0, изменение с 96 до 98 выглядит как удвоение. Прежде чем читать график в газете, посмотри на **масштаб** и на то, откуда начинаются оси.`,
  ),

  "direct-proportionality": th(
    r`### Why the graph of y = kx is a straight line through the origin

Take any two points of the graph, $A(x_1; kx_1)$ and $B(x_2; kx_2)$, and drop perpendiculars to the $x$-axis. We get two right triangles with a vertex at $O$. In each the ratio "height : base" is

$$\frac{kx_1}{x_1} = k \quad\text{and}\quad \frac{kx_2}{x_2} = k.$$

The triangles have equal ratios of legs, so they are **similar** and their angles at $O$ are equal. So $OA$ and $OB$ go in the same direction: all points of the graph lie on **one line** through $O$. At $x = 0$ we get $y = 0$, so the line passes through the origin.

### How to recognise direct proportionality

Two quantities are directly proportional when their **ratio** stays the same: $\dfrac{y}{x} = k$. Equivalent tests:

- doubling $x$ doubles $y$, tripling triples it;
- $x = 0$ gives $y = 0$.

A taxi fare of 600 dram plus 250 dram per km is **not** proportional to the distance: 2 km cost 1100 dram, but 4 km cost 1600, not 2200. A fixed fee breaks proportionality. The price of apples at 500 dram per kg **is** proportional to the weight.

### Proportional versus "grows together"

"The more, the more" is not enough. A child's height and age both grow, but a 10-year-old is not twice as tall as a 5-year-old. Only a **constant ratio** makes a proportion. The opposite case, $y = \dfrac{k}{x}$, where the **product** $xy$ is constant (speed and time for a fixed distance), is called inverse proportionality, and its graph is not a line at all.`,
    r`### Ինչու $y = kx$-ի գրաֆիկը սկզբնակետով անցնող ուղիղ է

Վերցնենք գրաֆիկի ցանկացած երկու կետ՝ $A(x_1; kx_1)$ և $B(x_2; kx_2)$, և իջեցնենք ուղղահայացներ $x$-երի առանցքին։ Ստանում ենք $O$ գագաթով երկու ուղղանկյուն եռանկյուն։ Յուրաքանչյուրում «բարձրություն : հիմք» հարաբերությունը

$$\frac{kx_1}{x_1} = k \quad\text{և}\quad \frac{kx_2}{x_2} = k.$$

Եռանկյունների էջերի հարաբերությունները հավասար են, ուստի դրանք **նման** են, և $O$-ի մոտ անկյունները հավասար են։ Ուրեմն $OA$-ն և $OB$-ն ունեն նույն ուղղությունը. գրաֆիկի բոլոր կետերն ընկած են $O$-ով անցնող **մեկ ուղղի** վրա։ $x = 0$-ի դեպքում $y = 0$, ուստի ուղիղն անցնում է սկզբնակետով։

### Ինչպես ճանաչել ուղիղ համեմատականությունը

Երկու մեծություն ուղիղ համեմատական են, երբ դրանց **հարաբերությունը** մնում է նույնը՝ $\dfrac{y}{x} = k$։ Համարժեք թեստեր.

- $x$-ը կրկնապատկելիս $y$-ը կրկնապատկվում է, եռապատկելիս՝ եռապատկվում.
- $x = 0$-ի դեպքում $y = 0$։

600 դրամ նստելու վճարով և կիլոմետրին 250 դրամով տաքսու գինը **համեմատական չէ** ճանապարհին. 2 կմ-ն արժե 1100 դրամ, իսկ 4 կմ-ն՝ 1600, ոչ թե 2200։ Հաստատուն վճարը խախտում է համեմատականությունը։ Կիլոգրամը 500 դրամով խնձորի արժեքը **համեմատական է** կշռին։

### Համեմատական, թե՞ «միասին աճող»

«Որքան շատ, այնքան շատ»-ը բավական չէ։ Երեխայի հասակն ու տարիքը երկուսն էլ աճում են, բայց 10 տարեկանը կրկնակի բարձր չէ 5 տարեկանից։ Միայն **հաստատուն հարաբերությունն** է համեմատականություն։ Հակառակ դեպքը՝ $y = \dfrac{k}{x}$, որտեղ հաստատուն է $xy$ **արտադրյալը** (հաստատուն ճանապարհի դեպքում արագությունն ու ժամանակը), կոչվում է հակադարձ համեմատականություն, և դրա գրաֆիկն ընդհանրապես ուղիղ չէ։`,
    r`### Почему график y = kx — прямая, проходящая через начало координат

Возьмём любые две точки графика, $A(x_1; kx_1)$ и $B(x_2; kx_2)$, и опустим перпендикуляры на ось $x$. Получим два прямоугольных треугольника с вершиной в $O$. В каждом отношение «высота : основание» равно

$$\frac{kx_1}{x_1} = k \quad\text{и}\quad \frac{kx_2}{x_2} = k.$$

Отношения катетов равны, значит, треугольники **подобны**, и их углы при $O$ равны. Следовательно, $OA$ и $OB$ направлены одинаково: все точки графика лежат на **одной прямой**, проходящей через $O$. При $x = 0$ получаем $y = 0$, так что прямая проходит через начало координат.

### Как узнать прямую пропорциональность

Две величины прямо пропорциональны, когда их **отношение** постоянно: $\dfrac{y}{x} = k$. Равносильные признаки:

- при увеличении $x$ вдвое $y$ увеличивается вдвое, втрое — втрое;
- при $x = 0$ получается $y = 0$.

Стоимость такси — 600 драмов за посадку плюс 250 драмов за километр — **не** пропорциональна расстоянию: 2 км стоят 1100 драмов, а 4 км — 1600, а не 2200. Постоянная плата нарушает пропорциональность. Стоимость яблок по 500 драмов за килограмм пропорциональна массе.

### Пропорционально или «растут вместе»

«Чем больше, тем больше» — недостаточно. Рост и возраст ребёнка оба увеличиваются, но десятилетний не вдвое выше пятилетнего. Пропорциональность даёт только **постоянное отношение**. Противоположный случай, $y = \dfrac{k}{x}$, где постоянно **произведение** $xy$ (скорость и время при постоянном пути), называется обратной пропорциональностью, и её график — вовсе не прямая.`,
  ),

  "linear-function": th(
    r`### Equal steps give equal rises

For $y = kx + b$ take two values $x_1$ and $x_2$. Then

$$y_2 - y_1 = (kx_2 + b) - (kx_1 + b) = k(x_2 - x_1).$$

The change in $y$ is always $k$ times the change in $x$, wherever you start. Step 1 to the right: up by $k$. Step 3 to the right: up by $3k$. The $b$ cancels, so it has no effect on the **steepness**. This is why $k$ is called the **slope** and can be found from any two points:

$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$

### Why the graph is a straight line

$y = kx + b$ is $y = kx$ with every point raised by $b$. The graph of $y = kx$ is a line through the origin (shown in the lesson on direct proportionality). Moving a line up or down by the same amount everywhere gives a line again. So the graph of every linear function is a straight line, and **two points** are enough to draw it.

### What k and b mean in real life

A linear function is the model of anything that changes at a **constant rate**:

- $b$ is the **starting value**, at $x = 0$: the starting fee, the starting height, the amount in the account on day 0;
- $k$ is the **rate**: per km, per week, per hour. Its units are "units of $y$ per unit of $x$".

If $k > 0$ the function grows, if $k < 0$ it falls, if $k = 0$ it is constant and the graph is horizontal.

### A model has limits

A seedling 12 cm tall growing 3 cm a week fits $h = 3t + 12$ for a few months. Put $t = 520$ (ten years) and the plant would be 15.7 m tall, which no tomato will ever be. A linear model is only trusted in the range where it was **checked**.`,
    r`### Հավասար քայլերը տալիս են հավասար բարձրացումներ

$y = kx + b$-ի համար վերցնենք երկու արժեք՝ $x_1$ և $x_2$։ Այդ դեպքում

$$y_2 - y_1 = (kx_2 + b) - (kx_1 + b) = k(x_2 - x_1).$$

$y$-ի փոփոխությունը միշտ $k$ անգամ մեծ է $x$-ի փոփոխությունից, որտեղից էլ սկսես։ 1 քայլ աջ՝ $k$-ով վերև։ 3 քայլ աջ՝ $3k$-ով վերև։ $b$-ն կրճատվում է, ուստի **թեքության** վրա չի ազդում։ Ահա թե ինչու $k$-ն կոչվում է **անկյունային գործակից** և կարելի է գտնել ցանկացած երկու կետով.

$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$

### Ինչու է գրաֆիկն ուղիղ

$y = kx + b$-ն $y = kx$-ն է, որի յուրաքանչյուր կետ բարձրացված է $b$-ով։ $y = kx$-ի գրաֆիկը սկզբնակետով անցնող ուղիղ է (ցույց տրված է ուղիղ համեմատականության դասում)։ Ուղիղն ամենուր նույն չափով վերև կամ ներքև տեղաշարժելիս նորից ուղիղ է ստացվում։ Ուստի ցանկացած գծային ֆունկցիայի գրաֆիկն ուղիղ է, և այն գծելու համար **երկու կետը** բավական է։

### Ինչ են նշանակում $k$-ն և $b$-ն իրական կյանքում

Գծային ֆունկցիան այն ամենի մոդելն է, ինչը փոխվում է **հաստատուն արագությամբ**.

- $b$-ն **սկզբնական արժեքն** է՝ $x = 0$-ի դեպքում. նստելու վճարը, սկզբնական բարձրությունը, հաշվի գումարը 0-րդ օրը.
- $k$-ն **արագությունն** է՝ կիլոմետրում, շաբաթում, ժամում։ Նրա միավորները «$y$-ի միավոր՝ $x$-ի մեկ միավորի համար» են։

Եթե $k > 0$, ֆունկցիան աճում է, եթե $k < 0$՝ նվազում, եթե $k = 0$՝ հաստատուն է, և գրաֆիկը հորիզոնական է։

### Մոդելն ունի սահմաններ

Շաբաթական 3 սմ աճող 12 սմ բարձրությամբ սածիլը մի քանի ամիս համապատասխանում է $h = 3t + 12$-ին։ Տեղադրիր $t = 520$ (տասը տարի), և բույսը կլինի 15,7 մ բարձր, ինչը ոչ մի լոլիկ երբեք չի լինի։ Գծային մոդելին վստահում են միայն այն միջակայքում, որտեղ այն **ստուգվել է**։`,
    r`### Равные шаги дают равные подъёмы

Для $y = kx + b$ возьмём два значения $x_1$ и $x_2$. Тогда

$$y_2 - y_1 = (kx_2 + b) - (kx_1 + b) = k(x_2 - x_1).$$

Изменение $y$ всегда в $k$ раз больше изменения $x$, откуда бы мы ни начали. Шаг 1 вправо — подъём на $k$. Шаг 3 вправо — на $3k$. Число $b$ сокращается и на **крутизну** не влияет. Поэтому $k$ называют **угловым коэффициентом**, и его можно найти по любым двум точкам:

$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$

### Почему график — прямая

$y = kx + b$ — это $y = kx$, у которого каждая точка поднята на $b$. График $y = kx$ — прямая через начало координат (это показано в уроке о прямой пропорциональности). Если прямую всюду сдвинуть вверх или вниз на одно и то же расстояние, снова получится прямая. Значит, график любой линейной функции — прямая, и для построения хватает **двух точек**.

### Что означают k и b в жизни

Линейная функция — модель всего, что меняется с **постоянной скоростью**:

- $b$ — **начальное значение** при $x = 0$: плата за посадку, начальная высота, сумма на счёте в нулевой день;
- $k$ — **скорость изменения**: за километр, за неделю, за час. Её единицы — «единицы $y$ на единицу $x$».

Если $k > 0$, функция возрастает, если $k < 0$ — убывает, если $k = 0$ — постоянна, и график горизонтален.

### У модели есть границы

Рассада высотой 12 см, растущая на 3 см в неделю, несколько месяцев подчиняется формуле $h = 3t + 12$. Подставь $t = 520$ (десять лет), и растение окажется высотой 15,7 м — ни один помидор таким не будет. Линейной модели доверяют только в том диапазоне, где её **проверили**.`,
  ),

  "parallel-graphs": th(
    r`### Why equal slopes mean parallel lines

Take $y = kx + b_1$ and $y = kx + b_2$ (the same $k$) with $b_1 \ne b_2$. At every $x$ the vertical gap between them is

$$(kx + b_1) - (kx + b_2) = b_1 - b_2,$$

the same number everywhere. The lines keep a constant vertical distance, so they never meet: they are **parallel**.

### The algebra behind the picture

A common point would need $k_1x + b_1 = k_2x + b_2$, that is

$$(k_1 - k_2)x = b_2 - b_1.$$

This is a linear equation $ax = b$, and its three cases are exactly the three positions of two lines:

| Equation $ax = b$ | Lines |
|---|---|
| $a \ne 0$ ($k_1 \ne k_2$): one root | intersect at one point |
| $a = 0$, $b \ne 0$ ($k_1 = k_2$, $b_1 \ne b_2$): no roots | parallel |
| $a = 0$, $b = 0$ (same $k$ and $b$): every $x$ | the same line |

The geometry of two lines and the algebra of one linear equation are the same fact.

### A look ahead: perpendicular lines

$y = 2x$ goes 1 right and 2 up. Turn that slope triangle by $90°$: it now goes 2 left and 1 up, that is 1 right and $\tfrac{1}{2}$ **down**. So the perpendicular line has slope $-\dfrac{1}{2}$. In general, lines $y = k_1x + b_1$ and $y = k_2x + b_2$ are perpendicular when

$$k_1 \cdot k_2 = -1.$$

You will prove this in geometry; for now, check it on squared paper with $y = 3x$ and $y = -\dfrac{1}{3}x$.`,
    r`### Ինչու են հավասար թեքություններով ուղիղները զուգահեռ

Վերցնենք $y = kx + b_1$ և $y = kx + b_2$, որտեղ $b_1 \ne b_2$։ Յուրաքանչյուր $x$-ի դեպքում դրանց միջև ուղղաձիգ տարբերությունը

$$(kx + b_1) - (kx + b_2) = b_1 - b_2,$$

ամենուր նույն թիվն է։ Ուղիղները պահպանում են հաստատուն ուղղաձիգ հեռավորություն, ուստի երբեք չեն հատվում. դրանք **զուգահեռ** են։

### Նկարի հետևում կանգնած հանրահաշիվը

Ընդհանուր կետի համար պետք է $k_1x + b_1 = k_2x + b_2$, այսինքն՝

$$(k_1 - k_2)x = b_2 - b_1.$$

Սա $ax = b$ գծային հավասարում է, և դրա երեք դեպքերը ճիշտ երկու ուղղի երեք դասավորություններն են.

| $ax = b$ հավասարումը | Ուղիղները |
|---|---|
| $a \ne 0$ ($k_1 \ne k_2$). մեկ արմատ | հատվում են մեկ կետում |
| $a = 0$, $b \ne 0$ ($k_1 = k_2$, $b_1 \ne b_2$). արմատներ չկան | զուգահեռ են |
| $a = 0$, $b = 0$ (նույն $k$ և $b$). ցանկացած $x$ | նույն ուղիղն է |

Երկու ուղղի երկրաչափությունը և մեկ գծային հավասարման հանրահաշիվը նույն փաստն են։

### Հայացք առաջ. ուղղահայաց ուղիղներ

$y = 2x$-ը գնում է 1 աջ և 2 վերև։ Այդ թեքության եռանկյունը պտտենք $90°$-ով. այժմ այն գնում է 2 ձախ և 1 վերև, այսինքն՝ 1 աջ և $\tfrac{1}{2}$ **ներքև**։ Ուստի ուղղահայաց ուղղի անկյունային գործակիցը $-\dfrac{1}{2}$ է։ Ընդհանուր դեպքում $y = k_1x + b_1$ և $y = k_2x + b_2$ ուղիղներն ուղղահայաց են, երբ

$$k_1 \cdot k_2 = -1.$$

Դա կապացուցես երկրաչափությունում, իսկ առայժմ ստուգիր վանդակավոր թղթի վրա $y = 3x$-ով և $y = -\dfrac{1}{3}x$-ով։`,
    r`### Почему при равных угловых коэффициентах прямые параллельны

Возьмём $y = kx + b_1$ и $y = kx + b_2$, где $b_1 \ne b_2$. При каждом $x$ расстояние между ними по вертикали равно

$$(kx + b_1) - (kx + b_2) = b_1 - b_2,$$

одному и тому же числу всюду. Прямые держатся на постоянном вертикальном расстоянии и никогда не встречаются: они **параллельны**.

### Алгебра за картинкой

Для общей точки нужно $k_1x + b_1 = k_2x + b_2$, то есть

$$(k_1 - k_2)x = b_2 - b_1.$$

Это линейное уравнение $ax = b$, и три его случая — это в точности три взаимных положения двух прямых:

| Уравнение $ax = b$ | Прямые |
|---|---|
| $a \ne 0$ ($k_1 \ne k_2$): один корень | пересекаются в одной точке |
| $a = 0$, $b \ne 0$ ($k_1 = k_2$, $b_1 \ne b_2$): корней нет | параллельны |
| $a = 0$, $b = 0$ (одинаковые $k$ и $b$): любое $x$ | совпадают |

Геометрия двух прямых и алгебра одного линейного уравнения — один и тот же факт.

### Взгляд вперёд: перпендикулярные прямые

$y = 2x$ идёт на 1 вправо и на 2 вверх. Повернём этот «треугольник наклона» на $90°$: теперь он идёт на 2 влево и на 1 вверх, то есть на 1 вправо и на $\tfrac{1}{2}$ **вниз**. Значит, у перпендикулярной прямой угловой коэффициент $-\dfrac{1}{2}$. В общем случае прямые $y = k_1x + b_1$ и $y = k_2x + b_2$ перпендикулярны, когда

$$k_1 \cdot k_2 = -1.$$

Это ты докажешь на геометрии, а пока проверь на клетчатой бумаге с $y = 3x$ и $y = -\dfrac{1}{3}x$.`,
  ),

  "power-definition": th(
    r`### How fast powers grow

A legend says the inventor of chess asked for 1 grain of wheat on the first square, 2 on the second, 4 on the third, and so on, doubling up to the 64th square. The king laughed at such a small reward. In total that is

$$1 + 2 + 4 + \dots + 2^{63} = 2^{64} - 1 \approx 1.8 \cdot 10^{19}$$

grains, more wheat than the whole world has grown in all of history.

Another example: a sheet of paper is about $0.1$ mm thick. Fold it in half 42 times (in theory) and it is $0.1 \cdot 2^{42}$ mm thick. Since $2^{10} \approx 1000$, $2^{42} = 4 \cdot (2^{10})^4 \approx 4.4 \cdot 10^{12}$, so the stack is about $4.4 \cdot 10^{11}$ mm $= 440\,000$ km, farther than the Moon.

### Why a negative base gives plus for even exponents

$(-a)^n$ is a product of $n$ minus-signed factors. Minus times minus is plus, so the minus signs cancel **in pairs**. With an even $n$ every minus has a partner, and the result is positive. With an odd $n$ one minus is left over. That is the whole rule.

### Why powers come before multiplication

The order "powers, then multiplication, then addition" is a **convention**, chosen so that the most common expressions need no brackets. Thanks to it $3x^2 + 5x$ means $3 \cdot (x^2) + 5x$, which is what we almost always want. In $-3^2$ the power acts first, on $3$ only: $-3^2 = -(3^2) = -9$. To square $-3$, write $(-3)^2$.

### Why $a^1 = a$

$a^n$ is "$n$ factors of $a$". With one factor there is nothing to multiply, and the product is just $a$. This also keeps the rule $a^m \cdot a^n = a^{m+n}$ working: $a^1 \cdot a^2 = a \cdot a \cdot a = a^3$.`,
    r`### Որքան արագ են աճում աստիճանները

Ավանդության համաձայն՝ շախմատի հնարողը խնդրեց առաջին վանդակի համար 1 հատիկ ցորեն, երկրորդի համար՝ 2, երրորդի համար՝ 4 և այդպես կրկնապատկելով մինչև 64-րդ վանդակը։ Թագավորը ծիծաղեց այդքան փոքր պարգևի վրա։ Ընդամենը սա

$$1 + 2 + 4 + \dots + 2^{63} = 2^{64} - 1 \approx 1{,}8 \cdot 10^{19}$$

հատիկ է՝ ավելի շատ ցորեն, քան ամբողջ աշխարհը աճեցրել է իր ողջ պատմության ընթացքում։

Մեկ այլ օրինակ. թղթի թերթի հաստությունը մոտ $0{,}1$ մմ է։ Ծալիր այն կիսով 42 անգամ (տեսականորեն), և հաստությունը կլինի $0{,}1 \cdot 2^{42}$ մմ։ Քանի որ $2^{10} \approx 1000$, $2^{42} = 4 \cdot (2^{10})^4 \approx 4{,}4 \cdot 10^{12}$, ուստի դարսը մոտ $4{,}4 \cdot 10^{11}$ մմ $= 440\,000$ կմ է՝ Լուսնից ավելի հեռու։

### Ինչու բացասական հիմքը զույգ ցուցիչի դեպքում տալիս է պլյուս

$(-a)^n$-ը մինուս նշանով $n$ արտադրիչների արտադրյալ է։ Մինուսն անգամ մինուս պլյուս է, ուստի մինուսները կրճատվում են **զույգերով**։ Զույգ $n$-ի դեպքում յուրաքանչյուր մինուս ունի զույգ, և արդյունքը դրական է։ Կենտ $n$-ի դեպքում մեկ մինուս ավելորդ է մնում։ Ամբողջ կանոնը սա է։

### Ինչու աստիճանը կատարվում է բազմապատկումից առաջ

«Աստիճան, հետո բազմապատկում, հետո գումարում» կարգը **պայմանավորվածություն** է, որն ընտրվել է, որպեսզի ամենահաճախ հանդիպող արտահայտությունները փակագծեր չպահանջեն։ Դրա շնորհիվ $3x^2 + 5x$-ը նշանակում է $3 \cdot (x^2) + 5x$, ինչը մենք գրեթե միշտ ուզում ենք։ $-3^2$-ում աստիճանը գործում է առաջինը և միայն $3$-ի վրա. $-3^2 = -(3^2) = -9$։ $-3$-ը քառակուսի բարձրացնելու համար գրիր $(-3)^2$։

### Ինչու $a^1 = a$

$a^n$-ը «$a$-ի $n$ արտադրիչ» է։ Մեկ արտադրիչի դեպքում բազմապատկելու բան չկա, և արտադրյալը պարզապես $a$ է։ Սա պահպանում է նաև $a^m \cdot a^n = a^{m+n}$ կանոնը. $a^1 \cdot a^2 = a \cdot a \cdot a = a^3$։`,
    r`### Как быстро растут степени

По легенде, изобретатель шахмат попросил 1 зерно пшеницы за первую клетку, 2 — за вторую, 4 — за третью и так далее, удваивая до 64-й клетки. Царь посмеялся над такой скромной наградой. Всего это

$$1 + 2 + 4 + \dots + 2^{63} = 2^{64} - 1 \approx 1{,}8 \cdot 10^{19}$$

зёрен — больше пшеницы, чем весь мир вырастил за всю историю.

Другой пример: толщина листа бумаги — около $0{,}1$ мм. Сложи его пополам 42 раза (теоретически), и толщина станет $0{,}1 \cdot 2^{42}$ мм. Так как $2^{10} \approx 1000$, то $2^{42} = 4 \cdot (2^{10})^4 \approx 4{,}4 \cdot 10^{12}$, и стопка будет около $4{,}4 \cdot 10^{11}$ мм $= 440\,000$ км — дальше Луны.

### Почему отрицательное основание в чётной степени даёт плюс

$(-a)^n$ — произведение $n$ множителей со знаком минус. Минус на минус даёт плюс, поэтому минусы сокращаются **парами**. При чётном $n$ у каждого минуса есть пара, и результат положителен. При нечётном $n$ один минус остаётся. Вот и всё правило.

### Почему степень выполняется раньше умножения

Порядок «степени, потом умножение, потом сложение» — это **соглашение**, выбранное так, чтобы самые частые выражения обходились без скобок. Благодаря ему $3x^2 + 5x$ означает $3 \cdot (x^2) + 5x$, что нам почти всегда и нужно. В $-3^2$ степень действует первой и только на $3$: $-3^2 = -(3^2) = -9$. Чтобы возвести в квадрат $-3$, пиши $(-3)^2$.

### Почему $a^1 = a$

$a^n$ — это «$n$ множителей $a$». Когда множитель один, умножать нечего, и произведение равно просто $a$. Это сохраняет и правило $a^m \cdot a^n = a^{m+n}$: $a^1 \cdot a^2 = a \cdot a \cdot a = a^3$.`,
  ),

  "multiply-divide-powers": th(
    r`### The proofs are just counting

**Multiplying.** $a^m$ is $m$ factors of $a$, and $a^n$ is $n$ more. Written side by side they make $m + n$ factors:

$$a^m \cdot a^n = \underbrace{a \cdots a}_{m}\cdot\underbrace{a \cdots a}_{n} = a^{m+n}.$$

**Dividing** ($m > n$, $a \ne 0$). In $\dfrac{a^m}{a^n}$ cancel $n$ factors on top against the $n$ on the bottom; $m - n$ factors stay on top: $a^m : a^n = a^{m-n}$. Why $a \ne 0$? Because we are dividing by $a^n$, and $0^n = 0$.

### Why $a^0 = 1$: keeping the rule alive

The definition "$n$ factors" makes no sense for $n = 0$. Mathematicians **choose** the meaning of $a^0$ so that the division rule still works when $m = n$:

$$a^3 : a^3 = 1 \quad\text{and by the rule}\quad a^3 : a^3 = a^{0}.$$

So $a^0$ must be $1$. A pattern says the same: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$; each step down divides by 2, so the next is $2^0 = 1$.

### Looking ahead: negative exponents

Continue the same pattern: $2^0 = 1$, $2^{-1} = \tfrac{1}{2}$, $2^{-2} = \tfrac{1}{4}$. In grade 8 you will define $a^{-n} = \dfrac{1}{a^n}$ for exactly this reason: so that the rules of this lesson keep working for all whole exponents.

### Why $0^0$ is left undefined

Two rules pull in opposite directions: "$0^n = 0$" suggests $0^0 = 0$, while "$a^0 = 1$" suggests $0^0 = 1$. No choice keeps both, so in school algebra $0^0$ has no value.

### A frequent mistake

$a^2 + a^3 \ne a^5$. The rules are about **products**, because they come from counting factors. A sum of powers has no such shortcut: at $a = 2$, $4 + 8 = 12$, but $2^5 = 32$.`,
    r`### Ապացույցները պարզապես հաշվում են

**Բազմապատկում։** $a^m$-ը $a$-ի $m$ արտադրիչ է, իսկ $a^n$-ը՝ ևս $n$։ Կողք կողքի գրած՝ դրանք կազմում են $m + n$ արտադրիչ.

$$a^m \cdot a^n = \underbrace{a \cdots a}_{m}\cdot\underbrace{a \cdots a}_{n} = a^{m+n}.$$

**Բաժանում** ($m > n$, $a \ne 0$)։ $\dfrac{a^m}{a^n}$-ում համարիչի $n$ արտադրիչը կրճատիր հայտարարի $n$-ի հետ. համարիչում մնում է $m - n$ արտադրիչ՝ $a^m : a^n = a^{m-n}$։ Ինչո՞ւ $a \ne 0$։ Որովհետև բաժանում ենք $a^n$-ի, իսկ $0^n = 0$։

### Ինչու $a^0 = 1$. կանոնը կենդանի պահելը

«$n$ արտադրիչ» սահմանումն իմաստ չունի $n = 0$-ի դեպքում։ Մաթեմատիկոսները $a^0$-ի իմաստն **ընտրում են** այնպես, որ բաժանման կանոնն աշխատի նաև $m = n$-ի դեպքում.

$$a^3 : a^3 = 1 \quad\text{իսկ կանոնով}\quad a^3 : a^3 = a^{0}.$$

Ուրեմն $a^0$-ն պետք է լինի $1$։ Օրինաչափությունն էլ նույնն է ասում. $2^3 = 8$, $2^2 = 4$, $2^1 = 2$. ամեն քայլ ներքև բաժանում է 2-ի, ուստի հաջորդը $2^0 = 1$ է։

### Հայացք առաջ. բացասական ցուցիչներ

Շարունակենք նույն օրինաչափությունը. $2^0 = 1$, $2^{-1} = \tfrac{1}{2}$, $2^{-2} = \tfrac{1}{4}$։ 8-րդ դասարանում կսահմանես $a^{-n} = \dfrac{1}{a^n}$ հենց այս պատճառով՝ որպեսզի այս դասի կանոններն աշխատեն բոլոր ամբողջ ցուցիչների համար։

### Ինչու $0^0$-ն անորոշ է թողնվում

Երկու կանոն քաշում են հակառակ կողմեր. «$0^n = 0$»-ն հուշում է $0^0 = 0$, իսկ «$a^0 = 1$»-ը՝ $0^0 = 1$։ Ոչ մի ընտրություն չի պահպանում երկուսն էլ, ուստի դպրոցական հանրահաշվում $0^0$-ն արժեք չունի։

### Հաճախ հանդիպող սխալ

$a^2 + a^3 \ne a^5$։ Կանոնները **արտադրյալների** մասին են, քանի որ ծագում են արտադրիչները հաշվելուց։ Աստիճանների գումարն այդպիսի կրճատ ճանապարհ չունի. $a = 2$-ի դեպքում $4 + 8 = 12$, իսկ $2^5 = 32$։`,
    r`### Доказательства — это просто счёт

**Умножение.** $a^m$ — это $m$ множителей $a$, а $a^n$ — ещё $n$. Записанные рядом, они дают $m + n$ множителей:

$$a^m \cdot a^n = \underbrace{a \cdots a}_{m}\cdot\underbrace{a \cdots a}_{n} = a^{m+n}.$$

**Деление** ($m > n$, $a \ne 0$). В $\dfrac{a^m}{a^n}$ сократим $n$ множителей сверху с $n$ множителями снизу; сверху останется $m - n$ множителей: $a^m : a^n = a^{m-n}$. Почему $a \ne 0$? Потому что мы делим на $a^n$, а $0^n = 0$.

### Почему $a^0 = 1$: сохраняем правило

Определение «$n$ множителей» не имеет смысла при $n = 0$. Математики **выбирают** значение $a^0$ так, чтобы правило деления работало и при $m = n$:

$$a^3 : a^3 = 1 \quad\text{а по правилу}\quad a^3 : a^3 = a^{0}.$$

Значит, $a^0$ должно равняться $1$. То же говорит закономерность: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$; каждый шаг вниз — деление на 2, поэтому дальше $2^0 = 1$.

### Взгляд вперёд: отрицательные показатели

Продолжим ту же закономерность: $2^0 = 1$, $2^{-1} = \tfrac{1}{2}$, $2^{-2} = \tfrac{1}{4}$. В 8 классе ты определишь $a^{-n} = \dfrac{1}{a^n}$ именно поэтому: чтобы правила этого урока работали для всех целых показателей.

### Почему $0^0$ не определяют

Два правила тянут в разные стороны: «$0^n = 0$» подсказывает $0^0 = 0$, а «$a^0 = 1$» — $0^0 = 1$. Никакой выбор не сохраняет оба, поэтому в школьной алгебре у $0^0$ нет значения.

### Частая ошибка

$a^2 + a^3 \ne a^5$. Правила касаются **произведений**, потому что получены подсчётом множителей. Для суммы степеней такого сокращения нет: при $a = 2$ получаем $4 + 8 = 12$, а $2^5 = 32$.`,
  ),

  "power-of-power": th(
    r`### Proofs by grouping

**Power of a power.** $(a^m)^n$ is $n$ copies of $a^m$, and each copy is $m$ factors of $a$. In total $m \cdot n$ factors:

$$(a^3)^2 = a^3 \cdot a^3 = (a\,a\,a)(a\,a\,a) = a^6.$$

**Power of a product.** $(ab)^n$ is $n$ copies of $ab$. The commutative and associative laws let us regroup all the $a$'s together and all the $b$'s together:

$$(ab)^3 = (ab)(ab)(ab) = (a\,a\,a)(b\,b\,b) = a^3b^3.$$

The power of a fraction works the same way: $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$, $b \ne 0$.

### There is no such rule for sums

$(a + b)^2 \ne a^2 + b^2$. At $a = b = 1$: $(1 + 1)^2 = 4$, but $1 + 1 = 2$. The product rule works because multiplication can be regrouped freely; in $(a + b)(a + b)$ there are additions inside, and opening the brackets gives extra terms. You will meet the correct formula, $(a + b)^2 = a^2 + 2ab + b^2$, later this year.

### Towers are read from the top

$2^{3^2}$ means $2^{(3^2)} = 2^9 = 512$, not $(2^3)^2 = 2^6 = 64$. The brackets-free tower is read **top-down**, because $(a^m)^n$ can always be written as $a^{mn}$ and needs no special notation.

### The last digit of a huge power

What is the last digit of $7^{100}$? The last digits of $7^1, 7^2, 7^3, 7^4, 7^5, \dots$ are $7, 9, 3, 1, 7, \dots$: a cycle of length 4, because only the last digit affects the last digit of a product. Since $7^{100} = (7^4)^{25}$ and $7^4$ ends in 1, any power of it ends in 1. So $7^{100}$ ends in **1**, a number with 85 digits we never had to write.`,
    r`### Ապացույցներ խմբավորմամբ

**Աստիճանի աստիճան։** $(a^m)^n$-ը $a^m$-ի $n$ օրինակ է, և յուրաքանչյուր օրինակ $a$-ի $m$ արտադրիչ է։ Ընդամենը $m \cdot n$ արտադրիչ.

$$(a^3)^2 = a^3 \cdot a^3 = (a\,a\,a)(a\,a\,a) = a^6.$$

**Արտադրյալի աստիճան։** $(ab)^n$-ը $ab$-ի $n$ օրինակ է։ Տեղափոխական և զուգորդական օրենքները թույլ են տալիս բոլոր $a$-երը հավաքել միասին, բոլոր $b$-երը՝ միասին.

$$(ab)^3 = (ab)(ab)(ab) = (a\,a\,a)(b\,b\,b) = a^3b^3.$$

Կոտորակի աստիճանը նույն կերպ է աշխատում. $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$, $b \ne 0$։

### Գումարների համար այդպիսի կանոն չկա

$(a + b)^2 \ne a^2 + b^2$։ $a = b = 1$-ի դեպքում $(1 + 1)^2 = 4$, իսկ $1 + 1 = 2$։ Արտադրյալի կանոնն աշխատում է, քանի որ բազմապատկումը կարելի է ազատ վերախմբավորել. $(a + b)(a + b)$-ում ներսում գումարումներ կան, և փակագծերը բացելիս հավելյալ անդամներ են առաջանում։ Ճիշտ բանաձևին՝ $(a + b)^2 = a^2 + 2ab + b^2$-ին, կհանդիպես այս տարի ավելի ուշ։

### «Աշտարակները» կարդացվում են վերևից

$2^{3^2}$-ը նշանակում է $2^{(3^2)} = 2^9 = 512$, ոչ թե $(2^3)^2 = 2^6 = 64$։ Առանց փակագծերի «աշտարակը» կարդացվում է **վերևից ներքև**, քանի որ $(a^m)^n$-ը միշտ կարելի է գրել $a^{mn}$ տեսքով, և այն հատուկ գրառման կարիք չունի։

### Հսկայական աստիճանի վերջին թվանշանը

Ո՞րն է $7^{100}$-ի վերջին թվանշանը։ $7^1, 7^2, 7^3, 7^4, 7^5, \dots$-ի վերջին թվանշաններն են $7, 9, 3, 1, 7, \dots$. 4 երկարությամբ ցիկլ, քանի որ արտադրյալի վերջին թվանշանի վրա ազդում է միայն արտադրիչների վերջին թվանշանը։ Քանի որ $7^{100} = (7^4)^{25}$, իսկ $7^4$-ն ավարտվում է 1-ով, նրա ցանկացած աստիճանն ավարտվում է 1-ով։ Ուստի $7^{100}$-ն ավարտվում է **1**-ով. 85 թվանշանանոց թիվ, որը մենք գրելու կարիք չունեցանք։`,
    r`### Доказательства перегруппировкой

**Степень степени.** $(a^m)^n$ — это $n$ экземпляров $a^m$, и каждый — $m$ множителей $a$. Всего $m \cdot n$ множителей:

$$(a^3)^2 = a^3 \cdot a^3 = (a\,a\,a)(a\,a\,a) = a^6.$$

**Степень произведения.** $(ab)^n$ — это $n$ экземпляров $ab$. Переместительный и сочетательный законы позволяют собрать все $a$ вместе и все $b$ вместе:

$$(ab)^3 = (ab)(ab)(ab) = (a\,a\,a)(b\,b\,b) = a^3b^3.$$

Степень дроби устроена так же: $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$, $b \ne 0$.

### Для сумм такого правила нет

$(a + b)^2 \ne a^2 + b^2$. При $a = b = 1$: $(1 + 1)^2 = 4$, а $1 + 1 = 2$. Правило для произведения работает, потому что множители можно свободно переставлять; в $(a + b)(a + b)$ внутри есть сложения, и при раскрытии скобок появляются лишние члены. Верную формулу, $(a + b)^2 = a^2 + 2ab + b^2$, ты узнаешь позже в этом году.

### «Башни» читают сверху

$2^{3^2}$ означает $2^{(3^2)} = 2^9 = 512$, а не $(2^3)^2 = 2^6 = 64$. Башню без скобок читают **сверху вниз**, потому что $(a^m)^n$ всегда можно записать как $a^{mn}$ и особая запись для неё не нужна.

### Последняя цифра огромной степени

Какой последней цифрой оканчивается $7^{100}$? Последние цифры $7^1, 7^2, 7^3, 7^4, 7^5, \dots$ — это $7, 9, 3, 1, 7, \dots$: цикл длины 4, потому что на последнюю цифру произведения влияют только последние цифры множителей. Так как $7^{100} = (7^4)^{25}$, а $7^4$ оканчивается на 1, любая его степень оканчивается на 1. Значит, $7^{100}$ оканчивается на **1** — а это число из 85 цифр, которое нам не пришлось записывать.`,
  ),

  monomials: th(
    r`### Why a standard form is needed at all

$3a \cdot 2b \cdot a$ and $6a^2b$ are the same monomial written differently. Without one agreed way of writing, we could not even tell whether two monomials are equal or like terms. The standard form (one number in front, each letter once with its power) is like writing every fraction in lowest terms: each monomial has exactly **one** standard form, so comparing becomes easy.

### Why degrees add when we multiply

The degree of a monomial is the total number of letter factors in it. Multiplying puts the letter factors of both monomials side by side, so the counts add:

$$\deg(3x^2y \cdot 5xy^3) = \deg(15x^3y^4) = 7 = 3 + 4.$$

Coefficients multiply, degrees add. That is the monomial version of $a^m a^n = a^{m+n}$.

### Degree as a check on formulas

When the letters stand for lengths, the degree tells you **what kind** of quantity you have:

- degree 1: a length, like the perimeter $2a + 2b$;
- degree 2: an area, like $ab$ or $\pi r^2$;
- degree 3: a volume, like $abc$ or $a^3$.

So if someone writes the surface area of a box as $2ab + 2bc + 2abc$, the last term has degree 3 and cannot be an area: the formula is wrong (it should be $2ab + 2bc + 2ac$). Every term of a correct geometric formula has the **same** degree.

### Why only like terms can be added

$3a^2b + 5a^2b = 8a^2b$ is the distributive law: $(3 + 5)a^2b$. With $3a^2b + 5ab^2$ there is no common factor of that shape to take out, so the sum stays as two terms, just as $3$ apples $+ 5$ pears cannot be written as $8$ of one thing.`,
    r`### Ինչու է ընդհանրապես պետք կանոնական տեսքը

$3a \cdot 2b \cdot a$-ն և $6a^2b$-ն նույն միանդամն են՝ տարբեր գրված։ Առանց գրելու մեկ համաձայնեցված եղանակի մենք չէինք կարող նույնիսկ պարզել՝ երկու միանդամ հավասա՞ր են, թե՞ նման։ Կանոնական տեսքը (առջևում մեկ թիվ, յուրաքանչյուր տառ մեկ անգամ՝ իր աստիճանով) նման է ամեն կոտորակ անկրճատելի տեսքով գրելուն. յուրաքանչյուր միանդամ ունի ճիշտ **մեկ** կանոնական տեսք, ուստի համեմատելը հեշտ է դառնում։

### Ինչու են աստիճանները գումարվում բազմապատկելիս

Միանդամի աստիճանը նրա տառային արտադրիչների ընդհանուր քանակն է։ Բազմապատկելիս երկու միանդամի տառային արտադրիչները դրվում են կողք կողքի, ուստի քանակները գումարվում են.

$$\deg(3x^2y \cdot 5xy^3) = \deg(15x^3y^4) = 7 = 3 + 4.$$

Գործակիցները բազմապատկվում են, աստիճանները՝ գումարվում։ Սա $a^m a^n = a^{m+n}$-ի միանդամային տարբերակն է։

### Աստիճանը՝ որպես բանաձևերի ստուգում

Երբ տառերը նշանակում են երկարություններ, աստիճանն ասում է, թե **ինչ տեսակի** մեծություն ունես.

- 1-ին աստիճան. երկարություն, օրինակ՝ $2a + 2b$ պարագիծը.
- 2-րդ աստիճան. մակերես, օրինակ՝ $ab$ կամ $\pi r^2$.
- 3-րդ աստիճան. ծավալ, օրինակ՝ $abc$ կամ $a^3$։

Ուստի եթե ինչ-որ մեկն արկղի մակերևույթի մակերեսը գրում է $2ab + 2bc + 2abc$, վերջին անդամն ունի 3-րդ աստիճան և չի կարող մակերես լինել. բանաձևը սխալ է (պետք է լինի $2ab + 2bc + 2ac$)։ Ճիշտ երկրաչափական բանաձևի բոլոր անդամներն ունեն **նույն** աստիճանը։

### Ինչու կարելի է գումարել միայն նման անդամները

$3a^2b + 5a^2b = 8a^2b$-ն բաշխական օրենքն է՝ $(3 + 5)a^2b$։ $3a^2b + 5ab^2$-ում այդ տեսքի ընդհանուր արտադրիչ չկա փակագծից դուրս բերելու համար, ուստի գումարը մնում է երկու անդամ, ինչպես որ $3$ խնձոր $+ 5$ տանձը չի կարելի գրել որպես մեկ տեսակի $8$ բան։`,
    r`### Зачем вообще нужен стандартный вид

$3a \cdot 2b \cdot a$ и $6a^2b$ — один и тот же одночлен, записанный по-разному. Без одного согласованного способа записи мы не могли бы даже понять, равны ли два одночлена и подобны ли они. Стандартный вид (одно число впереди, каждая буква один раз со своей степенью) похож на запись каждой дроби в несократимом виде: у каждого одночлена ровно **один** стандартный вид, и сравнивать становится легко.

### Почему при умножении степени складываются

Степень одночлена — это общее число буквенных множителей в нём. При умножении буквенные множители обоих одночленов ставятся рядом, и их количества складываются:

$$\deg(3x^2y \cdot 5xy^3) = \deg(15x^3y^4) = 7 = 3 + 4.$$

Коэффициенты перемножаются, степени складываются. Это «одночленная» версия правила $a^m a^n = a^{m+n}$.

### Степень как проверка формул

Когда буквы означают длины, степень говорит, **какая** у тебя величина:

- степень 1 — длина, например периметр $2a + 2b$;
- степень 2 — площадь, например $ab$ или $\pi r^2$;
- степень 3 — объём, например $abc$ или $a^3$.

Поэтому, если кто-то пишет площадь поверхности коробки как $2ab + 2bc + 2abc$, последний член имеет степень 3 и не может быть площадью: формула неверна (должно быть $2ab + 2bc + 2ac$). У верной геометрической формулы все члены **одной** степени.

### Почему складывать можно только подобные члены

$3a^2b + 5a^2b = 8a^2b$ — это распределительный закон: $(3 + 5)a^2b$. В $3a^2b + 5ab^2$ нет общего множителя такого вида, который можно вынести, поэтому сумма остаётся из двух членов — так же, как $3$ яблока $+ 5$ груш нельзя записать как $8$ штук чего-то одного.`,
  ),

  "x-squared-cubed": th(
    r`### Why the parabola and the cubic are symmetric in different ways

For $y = x^2$: $(-x)^2 = x^2$. Opposite numbers have the same square, so the points $(x; x^2)$ and $(-x; x^2)$ are both on the graph: one is the mirror image of the other in the $y$-axis. Functions with $f(-x) = f(x)$ are called **even**.

For $y = x^3$: $(-x)^3 = -x^3$. Opposite numbers have opposite cubes, so with $(x; x^3)$ the graph also contains $(-x; -x^3)$. Turning the plane by $180°$ about the origin maps the graph onto itself. Such functions, with $f(-x) = -f(x)$, are called **odd**.

### Inside and outside the interval from 0 to 1

For $0 < x < 1$: $x^3 < x^2 < x$. Multiplying by a number less than 1 makes a positive number smaller: $0.5^2 = 0.25$, $0.5^3 = 0.125$.

For $x > 1$: $x < x^2 < x^3$. Now each extra factor makes it bigger.

All three graphs $y = x$, $y = x^2$ and $y = x^3$ pass through $(0; 0)$ and $(1; 1)$ and swap order there.

### The parabola in nature

Galileo found that a falling body covers distances proportional to the **square** of the time: about $s = 5t^2$ metres after $t$ seconds. In 1 s a stone falls 5 m, in 2 s already 20 m, in 3 s 45 m. The graph of the distance is a half of a parabola. A thrown ball flies along a parabola too.

### The cube law: why giants cannot exist

Make a figure twice as tall, keeping its shape. Its weight grows like the volume, $2^3 = 8$ times, but the strength of its bones grows like the cross-section, an **area**, only $2^2 = 4$ times. Each bone must carry twice as much per square centimetre. That is why an elephant's legs are so thick and why an ant scaled up to the size of a dog would collapse. The functions $x^2$ and $x^3$ grow at different speeds, and nature has to obey that.`,
    r`### Ինչու է պարաբոլը համաչափ, իսկ խորանարդային պարաբոլը՝ ոչ այնպես

$y = x^2$-ի համար $(-x)^2 = x^2$։ Հակադիր թվերն ունեն նույն քառակուսին, ուստի $(x; x^2)$ և $(-x; x^2)$ կետերը երկուսն էլ գրաֆիկի վրա են. մեկը մյուսի հայելային պատկերն է $y$-երի առանցքի նկատմամբ։ $f(-x) = f(x)$ պայմանով ֆունկցիաները կոչվում են **զույգ**։

$y = x^3$-ի համար $(-x)^3 = -x^3$։ Հակադիր թվերն ունեն հակադիր խորանարդներ, ուստի $(x; x^3)$-ի հետ գրաֆիկը պարունակում է նաև $(-x; -x^3)$։ Հարթությունը սկզբնակետի շուրջ $180°$-ով պտտելիս գրաֆիկն անցնում է ինքն իր վրա։ Այդպիսի ֆունկցիաները՝ $f(-x) = -f(x)$ պայմանով, կոչվում են **կենտ**։

### 0-ից 1 միջակայքի ներսում և դրսում

$0 < x < 1$-ի դեպքում՝ $x^3 < x^2 < x$։ 1-ից փոքր թվով բազմապատկելը դրական թիվը փոքրացնում է. $0{,}5^2 = 0{,}25$, $0{,}5^3 = 0{,}125$։

$x > 1$-ի դեպքում՝ $x < x^2 < x^3$։ Այժմ յուրաքանչյուր լրացուցիչ արտադրիչ մեծացնում է։

$y = x$, $y = x^2$ և $y = x^3$ երեք գրաֆիկներն էլ անցնում են $(0; 0)$ և $(1; 1)$ կետերով և այնտեղ փոխում են իրենց կարգը։

### Պարաբոլը բնության մեջ

Գալիլեյը պարզեց, որ ընկնող մարմինն անցնում է ժամանակի **քառակուսուն** համեմատական ճանապարհ. $t$ վայրկյանից հետո մոտ $s = 5t^2$ մետր։ 1 վայրկյանում քարն ընկնում է 5 մ, 2 վայրկյանում՝ արդեն 20 մ, 3 վայրկյանում՝ 45 մ։ Ճանապարհի գրաֆիկը պարաբոլի կեսն է։ Նետված գնդակն էլ է թռչում պարաբոլով։

### Խորանարդի օրենքը. ինչու հսկաներ չեն կարող լինել

Մարմինը, ձևը պահելով, դարձրու կրկնակի բարձր։ Նրա կշիռն աճում է ծավալի պես՝ $2^3 = 8$ անգամ, իսկ ոսկորների ամրությունը՝ լայնական կտրվածքի՝ **մակերեսի** պես, միայն $2^2 = 4$ անգամ։ Յուրաքանչյուր ոսկոր պետք է յուրաքանչյուր քառակուսի սանտիմետրի վրա կրկնակի ծանրություն կրի։ Ահա թե ինչու են փղի ոտքերն այդքան հաստ, և ինչու շան չափ մեծացրած մրջյունը կփլվեր։ $x^2$ և $x^3$ ֆունկցիաներն աճում են տարբեր արագությամբ, և բնությունը ստիպված է հնազանդվել դրան։`,
    r`### Почему парабола симметрична, а кубическая парабола — иначе

Для $y = x^2$: $(-x)^2 = x^2$. У противоположных чисел одинаковые квадраты, поэтому точки $(x; x^2)$ и $(-x; x^2)$ обе лежат на графике: одна — зеркальное отражение другой относительно оси $y$. Функции, у которых $f(-x) = f(x)$, называют **чётными**.

Для $y = x^3$: $(-x)^3 = -x^3$. У противоположных чисел противоположные кубы, поэтому вместе с $(x; x^3)$ на графике лежит и $(-x; -x^3)$. Поворот плоскости на $180°$ вокруг начала координат переводит график в себя. Такие функции, у которых $f(-x) = -f(x)$, называют **нечётными**.

### Внутри и вне промежутка от 0 до 1

При $0 < x < 1$: $x^3 < x^2 < x$. Умножение на число меньше 1 уменьшает положительное число: $0{,}5^2 = 0{,}25$, $0{,}5^3 = 0{,}125$.

При $x > 1$: $x < x^2 < x^3$. Теперь каждый лишний множитель увеличивает.

Все три графика $y = x$, $y = x^2$ и $y = x^3$ проходят через $(0; 0)$ и $(1; 1)$ и меняются там местами.

### Парабола в природе

Галилей установил, что падающее тело проходит путь, пропорциональный **квадрату** времени: примерно $s = 5t^2$ метров за $t$ секунд. За 1 с камень пролетает 5 м, за 2 с — уже 20 м, за 3 с — 45 м. График пути — половина параболы. Брошенный мяч тоже летит по параболе.

### Закон куба: почему не бывает великанов

Сделай фигуру вдвое выше, сохранив форму. Её вес растёт как объём — в $2^3 = 8$ раз, а прочность костей растёт как площадь сечения — только в $2^2 = 4$ раза. Каждой кости приходится нести вдвое больше на каждый квадратный сантиметр. Поэтому у слона такие толстые ноги, а муравей, увеличенный до размеров собаки, рухнул бы. Функции $x^2$ и $x^3$ растут с разной скоростью, и природе приходится с этим считаться.`,
  ),
};
