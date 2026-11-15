import { th } from "../kit";

const r = String.raw;

/** Algebra 8, unit 3: quadratic equations. */
export const algebra8c = {
  "incomplete-quadratics": th(
    r`### Why a quadratic equation has at most two roots

Suppose $ax^2 + bx + c = 0$ ($a \ne 0$) has a root $x_1$. Subtract $ax_1^2 + bx_1 + c = 0$ from the equation:

$$a(x^2 - x_1^2) + b(x - x_1) = 0 \;\Rightarrow\; (x - x_1)\big(a(x + x_1) + b\big) = 0.$$

So every root is either $x_1$ or a root of the **linear** equation $a(x + x_1) + b = 0$, which has exactly one root. That makes at most two roots in total. (In the same way, an equation of degree $n$ has at most $n$ roots.)

### Why $x^2 = a$ has two roots, one, or none

- $a > 0$: $x^2 - a = (x - \sqrt{a})(x + \sqrt{a}) = 0$, so $x = \pm\sqrt{a}$. Two opposite roots, because opposite numbers have equal squares.
- $a = 0$: only $x = 0$.
- $a < 0$: a square is never negative, so there are **no** real roots.

The graph says the same: the horizontal line $y = a$ meets the parabola $y = x^2$ twice, touches it at the vertex, or misses it.

### Why we never divide by $x$

$3x^2 = 5x$. Dividing by $x$ gives $x = \tfrac{5}{3}$ and silently assumes $x \ne 0$. But $x = 0$ is a root. Factoring keeps everything: $x(3x - 5) = 0$, so $x = 0$ or $x = \tfrac{5}{3}$. This is the "divide by an expression with $x$" mistake from grade 7, and it is the most common error with incomplete quadratics.

### Four thousand years of quadratics

Babylonian scribes around 1800 BC solved problems like "the area of a square minus its side is 870": $x^2 - x = 870$. Their recipe was completing the square, written out in words. They knew only positive answers, so "two roots" was not yet an idea.`,
    r`### Ինչու քառակուսի հավասարումն ունի առավելագույնը երկու արմատ

Դիցուք $ax^2 + bx + c = 0$-ն ($a \ne 0$) ունի $x_1$ արմատ։ Հավասարումից հանենք $ax_1^2 + bx_1 + c = 0$-ն.

$$a(x^2 - x_1^2) + b(x - x_1) = 0 \;\Rightarrow\; (x - x_1)\big(a(x + x_1) + b\big) = 0.$$

Ուստի յուրաքանչյուր արմատ կամ $x_1$-ն է, կամ $a(x + x_1) + b = 0$ **գծային** հավասարման արմատը, որն ունի ճիշտ մեկ արմատ։ Ընդամենը՝ առավելագույնը երկու արմատ։ (Նույն կերպ $n$-րդ աստիճանի հավասարումն ունի առավելագույնը $n$ արմատ։)

### Ինչու $x^2 = a$-ն ունի երկու, մեկ կամ ոչ մի արմատ

- $a > 0$. $x^2 - a = (x - \sqrt{a})(x + \sqrt{a}) = 0$, ուստի $x = \pm\sqrt{a}$։ Երկու հակադիր արմատ, քանի որ հակադիր թվերն ունեն հավասար քառակուսիներ։
- $a = 0$. միայն $x = 0$։
- $a < 0$. քառակուսին երբեք բացասական չէ, ուստի իրական արմատներ **չկան**։

Գրաֆիկն ասում է նույնը. $y = a$ հորիզոնական ուղիղը $y = x^2$ պարաբոլը հատում է երկու անգամ, շոշափում է գագաթում կամ չի հատում։

### Ինչու երբեք չենք բաժանում $x$-ի

$3x^2 = 5x$։ $x$-ի բաժանելը տալիս է $x = \tfrac{5}{3}$ և լուռ ենթադրում, որ $x \ne 0$։ Բայց $x = 0$-ն արմատ է։ Վերլուծումը պահպանում է ամեն ինչ. $x(3x - 5) = 0$, ուստի $x = 0$ կամ $x = \tfrac{5}{3}$։ Սա 7-րդ դասարանի «$x$ պարունակող արտահայտության վրա բաժանելու» սխալն է, և այն ոչ լրիվ քառակուսի հավասարումների ամենահաճախ սխալն է։

### Քառակուսի հավասարումների չորս հազար տարին

Մոտ մ.թ.ա. 1800 թվականին բաբելոնյան դպիրները լուծում էին այնպիսի խնդիրներ, ինչպես «քառակուսու մակերեսից հանած նրա կողմը 870 է»՝ $x^2 - x = 870$։ Նրանց բաղադրատոմսը քառակուսու լրացումն էր՝ գրված բառերով։ Նրանք գիտեին միայն դրական պատասխաններ, ուստի «երկու արմատ» գաղափարը դեռ չկար։`,
    r`### Почему у квадратного уравнения не больше двух корней

Пусть $ax^2 + bx + c = 0$ ($a \ne 0$) имеет корень $x_1$. Вычтем из уравнения равенство $ax_1^2 + bx_1 + c = 0$:

$$a(x^2 - x_1^2) + b(x - x_1) = 0 \;\Rightarrow\; (x - x_1)\big(a(x + x_1) + b\big) = 0.$$

Значит, каждый корень — это либо $x_1$, либо корень **линейного** уравнения $a(x + x_1) + b = 0$, у которого ровно один корень. Всего не больше двух корней. (Точно так же у уравнения степени $n$ не больше $n$ корней.)

### Почему у $x^2 = a$ два корня, один или ни одного

- $a > 0$: $x^2 - a = (x - \sqrt{a})(x + \sqrt{a}) = 0$, значит, $x = \pm\sqrt{a}$. Два противоположных корня, потому что у противоположных чисел равные квадраты.
- $a = 0$: только $x = 0$.
- $a < 0$: квадрат никогда не отрицателен, поэтому действительных корней **нет**.

График говорит то же: горизонтальная прямая $y = a$ пересекает параболу $y = x^2$ дважды, касается её в вершине или проходит мимо.

### Почему нельзя делить на $x$

$3x^2 = 5x$. Деление на $x$ даёт $x = \tfrac{5}{3}$ и молча предполагает $x \ne 0$. Но $x = 0$ — корень. Разложение сохраняет всё: $x(3x - 5) = 0$, значит, $x = 0$ или $x = \tfrac{5}{3}$. Это ошибка «деления на выражение с $x$» из 7 класса, и она самая частая в неполных квадратных уравнениях.

### Четыре тысячи лет квадратных уравнений

Вавилонские писцы около 1800 года до н. э. решали задачи вроде «площадь квадрата минус его сторона равна 870»: $x^2 - x = 870$. Их рецепт — выделение полного квадрата, записанное словами. Они знали только положительные ответы, так что идеи «двух корней» ещё не было.`,
  ),

  "quadratic-formula": th(
    r`### Deriving the formula

Start from $ax^2 + bx + c = 0$, $a \ne 0$, and complete the square, exactly as al-Khwarizmi did, but with letters.

1. Divide by $a$: $x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = 0$.
2. Add and subtract $\left(\dfrac{b}{2a}\right)^2$ to make a perfect square:

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}.$$

3. The left side is a square, so it cannot be negative. The denominator $4a^2$ is positive. So everything depends on the sign of $D = b^2 - 4ac$:
   - $D < 0$: the right side is negative, no real roots;
   - $D = 0$: $x + \dfrac{b}{2a} = 0$, one root $x = -\dfrac{b}{2a}$;
   - $D > 0$: $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{D}}{2a}$, so

$$x = \frac{-b \pm \sqrt{D}}{2a}.$$

The formula is nothing but completing the square, done once for all equations at the same time.

### Why "discriminant"

The Latin word *discriminare* means "to tell apart". The number $D$ tells apart the three cases without solving. It also measures **how far apart** the roots are: $x_1 - x_2 = \dfrac{\sqrt{D}}{a}$ (for $a > 0$). When $D = 0$ the two roots merge into one.

### Who found it

Indian mathematicians stated general rules: **Brahmagupta** in 628 gave a rule for one root of $ax^2 + bx = c$, and **Sridhara** (about 900) a rule close to today's formula. Negative roots were long thought "absurd". The formula in its modern written form only appeared after Viète and Descartes introduced letters in the 16th–17th centuries.

### Why the vertex is at $x = -\dfrac{b}{2a}$

Step 2 shows that $ax^2 + bx + c = a\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{D}{4a}$. For $a > 0$ the square part is smallest, zero, at $x = -\dfrac{b}{2a}$: the lowest point of the parabola. The roots sit **symmetrically** on both sides of it, at distance $\dfrac{\sqrt{D}}{2a}$.`,
    r`### Բանաձևի արտածումը

Սկսենք $ax^2 + bx + c = 0$-ից, $a \ne 0$, և լրացնենք քառակուսին ճիշտ այնպես, ինչպես ալ-Խորեզմին, բայց տառերով։

1. Բաժանենք $a$-ի. $x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = 0$։
2. Գումարենք և հանենք $\left(\dfrac{b}{2a}\right)^2$՝ լրիվ քառակուսի ստանալու համար.

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}.$$

3. Ձախ մասը քառակուսի է, ուստի չի կարող բացասական լինել։ $4a^2$ հայտարարը դրական է։ Ուստի ամեն ինչ կախված է $D = b^2 - 4ac$-ի նշանից.
   - $D < 0$. աջ մասը բացասական է, իրական արմատներ չկան.
   - $D = 0$. $x + \dfrac{b}{2a} = 0$, մեկ արմատ՝ $x = -\dfrac{b}{2a}$.
   - $D > 0$. $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{D}}{2a}$, ուստի

$$x = \frac{-b \pm \sqrt{D}}{2a}.$$

Բանաձևը ոչ այլ ինչ է, քան քառակուսու լրացում՝ մեկ անգամ արված բոլոր հավասարումների համար միանգամից։

### Ինչու «դիսկրիմինանտ»

Լատիներեն *discriminare* բառը նշանակում է «տարբերել»։ $D$ թիվն առանց լուծելու տարբերում է երեք դեպքերը (հայերեն այն կոչվում է նաև **տարբերիչ**)։ Այն չափում է նաև, թե արմատները **որքան հեռու** են իրարից. $x_1 - x_2 = \dfrac{\sqrt{D}}{a}$ ($a > 0$-ի դեպքում)։ Երբ $D = 0$, երկու արմատները միաձուլվում են մեկի։

### Ով գտավ այն

Հնդիկ մաթեմատիկոսները ձևակերպեցին ընդհանուր կանոններ. **Բրահմագուպտան** 628 թվականին տվեց $ax^2 + bx = c$-ի մեկ արմատի կանոնը, իսկ **Շրիդհարան** (մոտ 900 թ.)՝ այսօրվա բանաձևին մոտ կանոն։ Բացասական արմատները երկար ժամանակ համարվում էին «անհեթեթ»։ Բանաձևն իր ժամանակակից գրավոր տեսքով հայտնվեց միայն այն բանից հետո, երբ Վիետը և Դեկարտը XVI–XVII դարերում ներմուծեցին տառերը։

### Ինչու է գագաթը $x = -\dfrac{b}{2a}$-ում

2-րդ քայլը ցույց է տալիս, որ $ax^2 + bx + c = a\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{D}{4a}$։ $a > 0$-ի դեպքում քառակուսային մասն ամենափոքրն է՝ զրո, $x = -\dfrac{b}{2a}$-ում. պարաբոլի ամենացածր կետը։ Արմատները նրա երկու կողմերում են **համաչափ**՝ $\dfrac{\sqrt{D}}{2a}$ հեռավորությամբ։`,
    r`### Вывод формулы

Начнём с $ax^2 + bx + c = 0$, $a \ne 0$, и выделим полный квадрат — точно как аль-Хорезми, только буквами.

1. Разделим на $a$: $x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = 0$.
2. Прибавим и вычтем $\left(\dfrac{b}{2a}\right)^2$, чтобы получить полный квадрат:

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a} = \frac{b^2 - 4ac}{4a^2}.$$

3. Слева квадрат, он не может быть отрицательным. Знаменатель $4a^2$ положителен. Значит, всё зависит от знака $D = b^2 - 4ac$:
   - $D < 0$: правая часть отрицательна, действительных корней нет;
   - $D = 0$: $x + \dfrac{b}{2a} = 0$, один корень $x = -\dfrac{b}{2a}$;
   - $D > 0$: $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{D}}{2a}$, откуда

$$x = \frac{-b \pm \sqrt{D}}{2a}.$$

Формула — это не что иное, как выделение полного квадрата, проделанное один раз сразу для всех уравнений.

### Почему «дискриминант»

Латинское *discriminare* значит «различать». Число $D$ различает три случая, не решая уравнения. Оно также показывает, **насколько далеко** друг от друга корни: $x_1 - x_2 = \dfrac{\sqrt{D}}{a}$ (при $a > 0$). При $D = 0$ два корня сливаются в один.

### Кто её нашёл

Индийские математики сформулировали общие правила: **Брахмагупта** в 628 году дал правило для одного корня $ax^2 + bx = c$, а **Шридхара** (около 900 года) — правило, близкое к современной формуле. Отрицательные корни долго считали «нелепыми». В современной буквенной записи формула появилась только после того, как Виет и Декарт в XVI–XVII веках ввели буквы.

### Почему вершина — в $x = -\dfrac{b}{2a}$

Шаг 2 показывает, что $ax^2 + bx + c = a\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{D}{4a}$. При $a > 0$ квадратная часть наименьшая, равная нулю, при $x = -\dfrac{b}{2a}$: это нижняя точка параболы. Корни лежат **симметрично** по обе стороны от неё, на расстоянии $\dfrac{\sqrt{D}}{2a}$.`,
  ),

  vieta: th(
    r`### The proof in two lines

From the formula, $x_1 = \dfrac{-b + \sqrt{D}}{2a}$ and $x_2 = \dfrac{-b - \sqrt{D}}{2a}$. Add them: the roots cancel, $x_1 + x_2 = \dfrac{-2b}{2a} = -\dfrac{b}{a}$. Multiply them, using the difference of squares:

$$x_1x_2 = \frac{(-b)^2 - (\sqrt{D})^2}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{c}{a}.$$

A second proof needs no formula. If $x_1$ and $x_2$ are the roots, then $ax^2 + bx + c = a(x - x_1)(x - x_2) = a\big(x^2 - (x_1 + x_2)x + x_1x_2\big)$. Compare coefficients: $b = -a(x_1 + x_2)$, $c = ax_1x_2$.

### François Viète

The theorem is named after **François Viète** (1540–1603), a French lawyer who did mathematics in his spare time and, among other things, broke the secret codes of the Spanish king for Henry IV. His great idea was to write letters for given numbers, so that one calculation could stand for a whole family of problems. His theorem is exactly such a statement: it holds for every quadratic equation at once.

### Finding expressions without finding the roots

For $x^2 - 5x + 3 = 0$ the roots are ugly, $\dfrac{5 \pm \sqrt{13}}{2}$. But $x_1 + x_2 = 5$ and $x_1x_2 = 3$, so

$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 25 - 6 = 19, \qquad \frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1x_2} = \frac{5}{3}.$$

Any expression that does not change when $x_1$ and $x_2$ are swapped can be computed this way.

### The converse: building an equation

If two numbers have sum $s$ and product $p$, they are the roots of $x^2 - sx + p = 0$. Need an equation with roots $2 + \sqrt{3}$ and $2 - \sqrt{3}$? Sum $4$, product $4 - 3 = 1$: $x^2 - 4x + 1 = 0$.`,
    r`### Ապացույցը երկու տողով

Բանաձևից՝ $x_1 = \dfrac{-b + \sqrt{D}}{2a}$ և $x_2 = \dfrac{-b - \sqrt{D}}{2a}$։ Գումարենք դրանք. արմատները կրճատվում են, $x_1 + x_2 = \dfrac{-2b}{2a} = -\dfrac{b}{a}$։ Բազմապատկենք դրանք՝ օգտագործելով քառակուսիների տարբերությունը.

$$x_1x_2 = \frac{(-b)^2 - (\sqrt{D})^2}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{c}{a}.$$

Երկրորդ ապացույցին բանաձև պետք չէ։ Եթե $x_1$-ը և $x_2$-ը արմատներն են, ապա $ax^2 + bx + c = a(x - x_1)(x - x_2) = a\big(x^2 - (x_1 + x_2)x + x_1x_2\big)$։ Համեմատենք գործակիցները. $b = -a(x_1 + x_2)$, $c = ax_1x_2$։

### Ֆրանսուա Վիետ

Թեորեմը կրում է **Ֆրանսուա Վիետի** (1540–1603) անունը. նա ֆրանսիացի իրավաբան էր, որը մաթեմատիկայով զբաղվում էր ազատ ժամանակ և, ի թիվս այլ բաների, Հենրիխ IV-ի համար վերծանեց իսպանական թագավորի գաղտնագրերը։ Նրա մեծ գաղափարն էր տառերով գրել տրված թվերը, որպեսզի մեկ հաշվարկը ներկայացնի խնդիրների մի ամբողջ ընտանիք։ Նրա թեորեմը հենց այդպիսի պնդում է. այն միանգամից ճիշտ է բոլոր քառակուսի հավասարումների համար։

### Արտահայտություններ գտնել՝ առանց արմատները գտնելու

$x^2 - 5x + 3 = 0$-ի արմատներն անհարմար են՝ $\dfrac{5 \pm \sqrt{13}}{2}$։ Բայց $x_1 + x_2 = 5$ և $x_1x_2 = 3$, ուստի

$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 25 - 6 = 19, \qquad \frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1x_2} = \frac{5}{3}.$$

Այն ցանկացած արտահայտություն, որը չի փոխվում $x_1$-ը և $x_2$-ը տեղերով փոխելիս, կարելի է հաշվել այս եղանակով։

### Հակադարձը. հավասարման կառուցումը

Եթե երկու թվի գումարը $s$ է, արտադրյալը՝ $p$, ապա դրանք $x^2 - sx + p = 0$-ի արմատներն են։ Պե՞տք է $2 + \sqrt{3}$ և $2 - \sqrt{3}$ արմատներով հավասարում։ Գումարը $4$ է, արտադրյալը՝ $4 - 3 = 1$. $x^2 - 4x + 1 = 0$։`,
    r`### Доказательство в две строки

По формуле $x_1 = \dfrac{-b + \sqrt{D}}{2a}$ и $x_2 = \dfrac{-b - \sqrt{D}}{2a}$. Сложим: корни сокращаются, $x_1 + x_2 = \dfrac{-2b}{2a} = -\dfrac{b}{a}$. Перемножим, пользуясь разностью квадратов:

$$x_1x_2 = \frac{(-b)^2 - (\sqrt{D})^2}{4a^2} = \frac{b^2 - (b^2 - 4ac)}{4a^2} = \frac{c}{a}.$$

Второе доказательство обходится без формулы. Если $x_1$ и $x_2$ — корни, то $ax^2 + bx + c = a(x - x_1)(x - x_2) = a\big(x^2 - (x_1 + x_2)x + x_1x_2\big)$. Сравним коэффициенты: $b = -a(x_1 + x_2)$, $c = ax_1x_2$.

### Франсуа Виет

Теорема названа в честь **Франсуа Виета** (1540–1603) — французского юриста, который занимался математикой в свободное время и, среди прочего, расшифровал для Генриха IV тайные шифры испанского короля. Его великая идея — обозначать буквами данные числа, чтобы одно вычисление представляло целое семейство задач. Его теорема как раз такое утверждение: она верна сразу для всех квадратных уравнений.

### Находим выражения, не находя корней

У $x^2 - 5x + 3 = 0$ корни некрасивые: $\dfrac{5 \pm \sqrt{13}}{2}$. Но $x_1 + x_2 = 5$ и $x_1x_2 = 3$, поэтому

$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 25 - 6 = 19, \qquad \frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1x_2} = \frac{5}{3}.$$

Так можно вычислить любое выражение, которое не меняется при перестановке $x_1$ и $x_2$.

### Обратная теорема: строим уравнение

Если у двух чисел сумма $s$ и произведение $p$, то они — корни $x^2 - sx + p = 0$. Нужно уравнение с корнями $2 + \sqrt{3}$ и $2 - \sqrt{3}$? Сумма $4$, произведение $4 - 3 = 1$: $x^2 - 4x + 1 = 0$.`,
  ),

  "factor-quadratic-trinomial": th(
    r`### Why the roots give the factors

By Vieta, $b = -a(x_1 + x_2)$ and $c = ax_1x_2$. Substitute:

$$ax^2 + bx + c = a\big(x^2 - (x_1 + x_2)x + x_1x_2\big) = a(x - x_1)(x - x_2).$$

The last step is just multiplying out $(x - x_1)(x - x_2)$. So knowing the roots is the same as knowing the factorisation, and the other way round: $x_1$ is a root exactly when $x - x_1$ is a factor.

### Why the trinomial cannot be factored when $D < 0$

Suppose $ax^2 + bx + c = a(x - p)(x - q)$ with real $p$ and $q$. Then $x = p$ makes the right side zero, so $p$ is a root. But with $D < 0$ there are no real roots. So no such factorisation exists. The trinomial is "prime", like $x^2 + 1$.

### The sign of a trinomial

The factored form tells you where the trinomial is positive or negative. Take $x^2 - x - 6 = (x - 3)(x + 2)$:

| $x$ | $x + 2$ | $x - 3$ | product |
|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $+$ |
| $-2 < x < 3$ | $+$ | $-$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

The parabola is below the axis **between** the roots and above it outside. This is the key to quadratic inequalities in grade 9.

### Why it is useful for fractions

$\dfrac{x^2 - x - 6}{x^2 - 9}$ seems stuck. Factor both: $\dfrac{(x - 3)(x + 2)}{(x - 3)(x + 3)} = \dfrac{x + 2}{x + 3}$, for $x \ne \pm 3$. The quadratic formula has become a tool for cancelling.

### Do not lose $a$

$2x^2 - 7x + 3$ has roots $3$ and $\tfrac{1}{2}$, so it equals $2(x - 3)\left(x - \tfrac{1}{2}\right) = (x - 3)(2x - 1)$. Without the $2$, $(x - 3)\left(x - \tfrac{1}{2}\right)$ would be $x^2 - 3.5x + 1.5$, a different trinomial with the same roots.`,
    r`### Ինչու են արմատները տալիս արտադրիչները

Վիետի թեորեմով՝ $b = -a(x_1 + x_2)$ և $c = ax_1x_2$։ Տեղադրենք.

$$ax^2 + bx + c = a\big(x^2 - (x_1 + x_2)x + x_1x_2\big) = a(x - x_1)(x - x_2).$$

Վերջին քայլը պարզապես $(x - x_1)(x - x_2)$-ի բացումն է։ Ուստի արմատներն իմանալը նույնն է, ինչ վերլուծությունն իմանալը, և հակառակը. $x_1$-ը արմատ է ճիշտ այն դեպքում, երբ $x - x_1$-ը արտադրիչ է։

### Ինչու եռանդամը չի վերլուծվում, երբ $D < 0$

Դիցուք $ax^2 + bx + c = a(x - p)(x - q)$, որտեղ $p$-ն և $q$-ն իրական են։ Այդ դեպքում $x = p$-ն աջ մասը դարձնում է զրո, ուստի $p$-ն արմատ է։ Բայց $D < 0$-ի դեպքում իրական արմատներ չկան։ Ուստի այդպիսի վերլուծություն գոյություն չունի։ Եռանդամը «պարզ» է, ինչպես $x^2 + 1$-ը։

### Եռանդամի նշանը

Վերլուծած տեսքն ասում է, թե որտեղ է եռանդամը դրական կամ բացասական։ Վերցնենք $x^2 - x - 6 = (x - 3)(x + 2)$.

| $x$ | $x + 2$ | $x - 3$ | արտադրյալ |
|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $+$ |
| $-2 < x < 3$ | $+$ | $-$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

Պարաբոլը առանցքից ներքև է արմատների **միջև** և վերև՝ դրսում։ Սա 9-րդ դասարանի քառակուսի անհավասարումների բանալին է։

### Ինչու է այն օգտակար կոտորակների համար

$\dfrac{x^2 - x - 6}{x^2 - 9}$-ը կարծես խցանված է։ Վերլուծիր երկուսն էլ. $\dfrac{(x - 3)(x + 2)}{(x - 3)(x + 3)} = \dfrac{x + 2}{x + 3}$, $x \ne \pm 3$-ի դեպքում։ Քառակուսի հավասարման բանաձևը դարձավ կրճատման գործիք։

### Մի կորցրու $a$-ն

$2x^2 - 7x + 3$-ի արմատներն են $3$ և $\tfrac{1}{2}$, ուստի այն հավասար է $2(x - 3)\left(x - \tfrac{1}{2}\right) = (x - 3)(2x - 1)$-ի։ Առանց $2$-ի՝ $(x - 3)\left(x - \tfrac{1}{2}\right)$-ը կլիներ $x^2 - 3{,}5x + 1{,}5$՝ նույն արմատներով մեկ այլ եռանդամ։`,
    r`### Почему корни дают множители

По теореме Виета $b = -a(x_1 + x_2)$ и $c = ax_1x_2$. Подставим:

$$ax^2 + bx + c = a\big(x^2 - (x_1 + x_2)x + x_1x_2\big) = a(x - x_1)(x - x_2).$$

Последний шаг — просто раскрытие $(x - x_1)(x - x_2)$. Значит, знать корни — то же самое, что знать разложение, и наоборот: $x_1$ — корень ровно тогда, когда $x - x_1$ — множитель.

### Почему при $D < 0$ трёхчлен не раскладывается

Пусть $ax^2 + bx + c = a(x - p)(x - q)$ с действительными $p$ и $q$. Тогда при $x = p$ правая часть равна нулю, значит, $p$ — корень. Но при $D < 0$ действительных корней нет. Значит, такого разложения не существует. Трёхчлен «простой», как $x^2 + 1$.

### Знак трёхчлена

Разложение показывает, где трёхчлен положителен, а где отрицателен. Возьмём $x^2 - x - 6 = (x - 3)(x + 2)$:

| $x$ | $x + 2$ | $x - 3$ | произведение |
|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $+$ |
| $-2 < x < 3$ | $+$ | $-$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

Парабола ниже оси **между** корнями и выше — снаружи. Это ключ к квадратным неравенствам 9 класса.

### Почему это полезно для дробей

$\dfrac{x^2 - x - 6}{x^2 - 9}$ кажется тупиком. Разложим обе части: $\dfrac{(x - 3)(x + 2)}{(x - 3)(x + 3)} = \dfrac{x + 2}{x + 3}$ при $x \ne \pm 3$. Формула корней превратилась в инструмент для сокращения.

### Не теряй $a$

У $2x^2 - 7x + 3$ корни $3$ и $\tfrac{1}{2}$, поэтому он равен $2(x - 3)\left(x - \tfrac{1}{2}\right) = (x - 3)(2x - 1)$. Без двойки $(x - 3)\left(x - \tfrac{1}{2}\right)$ было бы $x^2 - 3{,}5x + 1{,}5$ — другим трёхчленом с теми же корнями.`,
  ),

  "fractional-rational-equations": th(
    r`### Where extraneous roots come from

Multiplying both sides of an equation by a number keeps it equivalent only if the number is **not zero**. When we multiply by the common denominator, we multiply by an **expression** like $x - 3$, which is zero at $x = 3$. At that one value the step is not reversible, and $x = 3$ may slip in as a fake root.

$$\frac{x^2}{x - 3} = \frac{9}{x - 3} \;\xrightarrow{\;\cdot (x - 3)\;}\; x^2 = 9 \;\Rightarrow\; x = \pm 3.$$

The new equation $x^2 = 9$ has a root the old one did not. That is why we either write the forbidden values first and throw out roots that hit them, or check every root in the **original** equation. Extraneous roots are never "wrong answers by bad luck"; they come from one precise step.

### A shortcut: one fraction equal to zero

If the equation can be written as $\dfrac{A}{B} = 0$, solve $A = 0$ and keep only the roots with $B \ne 0$. No multiplication is needed, so no extra roots appear, and the forbidden values are checked automatically.

### Work problems are fractional equations

"One pipe fills a pool in 6 hours, the other in 3. How long do both take?" In one hour the pipes fill $\dfrac{1}{6}$ and $\dfrac{1}{3}$ of the pool. Together, in $t$ hours:

$$\frac{t}{6} + \frac{t}{3} = 1 \;\Rightarrow\; t = 2.$$

If the time of one pipe is unknown, the equation becomes truly fractional. "Together they take 4 hours; the first alone needs 6 hours more than the second": $\dfrac{1}{x} + \dfrac{1}{x + 6} = \dfrac{1}{4}$, which leads to $x^2 - 2x - 24 = 0$, $x = 6$ (the root $x = -4$ is rejected: time is positive).

### Why fractions in equations are natural

Rates (speed, productivity, price per item) are quotients, so equations about rates are full of fractions. Whenever a problem says "per hour", "each" or "how many times faster", expect a fractional equation.`,
    r`### Որտեղից են կողմնակի արմատները

Հավասարման երկու մասերը թվով բազմապատկելը համարժեքությունը պահպանում է միայն այն դեպքում, երբ թիվը **զրո չէ**։ Երբ բազմապատկում ենք ընդհանուր հայտարարով, բազմապատկում ենք $x - 3$-ի պես **արտահայտությամբ**, որը զրո է $x = 3$-ի դեպքում։ Այդ մեկ արժեքի դեպքում քայլը հետադարձելի չէ, և $x = 3$-ը կարող է սողոսկել որպես կեղծ արմատ.

$$\frac{x^2}{x - 3} = \frac{9}{x - 3} \;\xrightarrow{\;\cdot (x - 3)\;}\; x^2 = 9 \;\Rightarrow\; x = \pm 3.$$

Նոր $x^2 = 9$ հավասարումն ունի մի արմատ, որը հինը չուներ։ Ահա թե ինչու կամ նախ գրում ենք արգելված արժեքները և դեն նետում դրանց հետ համընկնող արմատները, կամ ստուգում ենք յուրաքանչյուր արմատ **սկզբնական** հավասարման մեջ։ Կողմնակի արմատները երբեք «պատահաբար սխալ պատասխաններ» չեն. դրանք առաջանում են մեկ ճշգրիտ քայլից։

### Կրճատ ճանապարհ. զրոյի հավասար մեկ կոտորակ

Եթե հավասարումը կարելի է գրել $\dfrac{A}{B} = 0$ տեսքով, լուծիր $A = 0$-ն և պահիր միայն այն արմատները, որոնց դեպքում $B \ne 0$։ Բազմապատկում պետք չէ, ուստի ավելորդ արմատներ չեն հայտնվում, և արգելված արժեքներն ինքնաբերաբար ստուգվում են։

### Աշխատանքի խնդիրները կոտորակային հավասարումներ են

«Մի խողովակը լողավազանը լցնում է 6 ժամում, մյուսը՝ 3։ Որքա՞ն ժամանակ կպահանջեն երկուսը միասին»։ Մեկ ժամում խողովակները լցնում են լողավազանի $\dfrac{1}{6}$ և $\dfrac{1}{3}$ մասը։ Միասին՝ $t$ ժամում.

$$\frac{t}{6} + \frac{t}{3} = 1 \;\Rightarrow\; t = 2.$$

Եթե մի խողովակի ժամանակն անհայտ է, հավասարումը դառնում է իսկապես կոտորակային։ «Միասին նրանք ծախսում են 4 ժամ, առաջինին մենակ պետք է 6 ժամ ավելի, քան երկրորդին». $\dfrac{1}{x} + \dfrac{1}{x + 6} = \dfrac{1}{4}$, որը բերում է $x^2 - 2x - 24 = 0$-ի, $x = 6$ ($x = -4$ արմատը մերժվում է. ժամանակը դրական է)։

### Ինչու են կոտորակները հավասարումներում բնական

Արագությունները (շարժման արագություն, արտադրողականություն, մեկ միավորի գին) քանորդներ են, ուստի արագությունների մասին հավասարումները լի են կոտորակներով։ Երբ խնդիրն ասում է «ժամում», «յուրաքանչյուրը» կամ «քանի անգամ արագ», սպասիր կոտորակային հավասարման։`,
    r`### Откуда берутся посторонние корни

Умножение обеих частей уравнения на число сохраняет равносильность, только если число **не равно нулю**. Умножая на общий знаменатель, мы умножаем на **выражение** вроде $x - 3$, которое равно нулю при $x = 3$. При этом единственном значении шаг необратим, и $x = 3$ может проскользнуть как фальшивый корень:

$$\frac{x^2}{x - 3} = \frac{9}{x - 3} \;\xrightarrow{\;\cdot (x - 3)\;}\; x^2 = 9 \;\Rightarrow\; x = \pm 3.$$

У нового уравнения $x^2 = 9$ есть корень, которого не было у старого. Поэтому мы либо сначала выписываем запрещённые значения и отбрасываем совпавшие с ними корни, либо проверяем каждый корень по **исходному** уравнению. Посторонние корни — никогда не «случайно неверные ответы»: они возникают на одном вполне определённом шаге.

### Короткий путь: одна дробь, равная нулю

Если уравнение можно записать как $\dfrac{A}{B} = 0$, реши $A = 0$ и оставь только корни, при которых $B \ne 0$. Умножать не нужно, поэтому лишние корни не появляются, а запрещённые значения проверяются автоматически.

### Задачи на работу — дробные уравнения

«Одна труба наполняет бассейн за 6 часов, другая — за 3. За сколько наполнят обе?» За час трубы наполняют $\dfrac{1}{6}$ и $\dfrac{1}{3}$ бассейна. Вместе за $t$ часов:

$$\frac{t}{6} + \frac{t}{3} = 1 \;\Rightarrow\; t = 2.$$

Если время одной трубы неизвестно, уравнение становится по-настоящему дробным. «Вместе они наполняют за 4 часа; первой одной нужно на 6 часов больше, чем второй»: $\dfrac{1}{x} + \dfrac{1}{x + 6} = \dfrac{1}{4}$, что приводит к $x^2 - 2x - 24 = 0$, $x = 6$ (корень $x = -4$ отбрасываем: время положительно).

### Почему дроби в уравнениях естественны

Скорости (движения, работы, цена за штуку) — это частные, поэтому уравнения о них полны дробей. Когда в задаче звучит «в час», «каждый» или «во сколько раз быстрее», жди дробного уравнения.`,
  ),

  "quadratic-word-problems": th(
    r`### When both roots make sense

A ball is thrown straight up at 20 m/s. Its height after $t$ seconds is about $h = 20t - 5t^2$ metres. When is it 15 m high?

$$20t - 5t^2 = 15 \;\Rightarrow\; t^2 - 4t + 3 = 0 \;\Rightarrow\; t = 1 \text{ or } t = 3.$$

Both answers are right: the ball passes 15 m **on the way up** after 1 s and **on the way down** after 3 s. Before rejecting a root, ask what it means. A negative time or length is rejected; two positive times may both be real events.

When is it 20 m high? $t^2 - 4t + 4 = 0$, $(t - 2)^2 = 0$: only $t = 2$, the top of the flight ($D = 0$). And 25 m? $D < 0$: the ball never gets that high. The three cases of the discriminant are three different physical stories.

### The golden ratio

Cut a square off a rectangle so that the leftover rectangle has the **same shape** as the original. If the short side is $1$ and the long side $x$, the leftover has sides $x - 1$ and $1$, and the same shape means

$$\frac{x}{1} = \frac{1}{x - 1} \;\Rightarrow\; x^2 - x - 1 = 0 \;\Rightarrow\; x = \frac{1 + \sqrt{5}}{2} \approx 1.618.$$

This is the **golden ratio** $\varphi$, the number the continued fraction $1 + \cfrac{1}{1 + \cfrac{1}{1 + \dots}}$ was approaching. The negative root $\dfrac{1 - \sqrt{5}}{2}$ is rejected for a length, but notice that it equals $1 - \varphi$, and it appears in formulas for Fibonacci numbers.

### Choosing the unknown well

"Two numbers differ by 3, their product is 70." With $x$ and $x + 3$: $x^2 + 3x - 70 = 0$. With the **average** $m$, the numbers are $m - 1.5$ and $m + 1.5$, so $m^2 - 2.25 = 70$, $m = \pm 8.5$: an incomplete quadratic, solved in one line. Numbers $7$ and $10$ (or $-10$ and $-7$). A symmetric choice of the unknown often removes the $bx$ term.`,
    r`### Երբ երկու արմատներն էլ իմաստ ունեն

Գնդակը նետված է ուղիղ վերև 20 մ/վ արագությամբ։ $t$ վայրկյան հետո նրա բարձրությունը մոտ $h = 20t - 5t^2$ մետր է։ Ե՞րբ է այն 15 մ բարձրության վրա.

$$20t - 5t^2 = 15 \;\Rightarrow\; t^2 - 4t + 3 = 0 \;\Rightarrow\; t = 1 \text{ կամ } t = 3.$$

Երկու պատասխաններն էլ ճիշտ են. գնդակն անցնում է 15 մ-ը **վեր բարձրանալիս**՝ 1 վ հետո, և **իջնելիս**՝ 3 վ հետո։ Արմատը մերժելուց առաջ հարցրու, թե ինչ է այն նշանակում։ Բացասական ժամանակը կամ երկարությունը մերժվում է, իսկ երկու դրական ժամանակները կարող են երկուսն էլ իրական իրադարձություններ լինել։

Ե՞րբ է այն 20 մ բարձրության վրա։ $t^2 - 4t + 4 = 0$, $(t - 2)^2 = 0$. միայն $t = 2$, թռիչքի գագաթը ($D = 0$)։ Իսկ 25 մ-ո՞ւմ։ $D < 0$. գնդակն այդքան բարձր երբեք չի հասնում։ Տարբերիչի երեք դեպքերը երեք տարբեր ֆիզիկական պատմություններ են։

### Ոսկե հատումը

Ուղղանկյունից կտրիր քառակուսի այնպես, որ մնացած ուղղանկյունն ունենա սկզբնականի **նույն ձևը**։ Եթե կարճ կողմը $1$ է, իսկ երկարը՝ $x$, մնացածն ունի $x - 1$ և $1$ կողմեր, և նույն ձևը նշանակում է

$$\frac{x}{1} = \frac{1}{x - 1} \;\Rightarrow\; x^2 - x - 1 = 0 \;\Rightarrow\; x = \frac{1 + \sqrt{5}}{2} \approx 1{,}618.$$

Սա **ոսկե հատումն** է՝ $\varphi$, այն թիվը, որին մոտենում էր $1 + \cfrac{1}{1 + \cfrac{1}{1 + \dots}}$ շղթայական կոտորակը։ $\dfrac{1 - \sqrt{5}}{2}$ բացասական արմատը երկարության համար մերժվում է, բայց նկատիր, որ այն հավասար է $1 - \varphi$-ի և հանդիպում է Ֆիբոնաչիի թվերի բանաձևերում։

### Անհայտը լավ ընտրելը

«Երկու թվերի տարբերությունը 3 է, արտադրյալը՝ 70»։ $x$-ով և $x + 3$-ով՝ $x^2 + 3x - 70 = 0$։ **Միջինով**՝ $m$-ով, թվերն են $m - 1{,}5$ և $m + 1{,}5$, ուստի $m^2 - 2{,}25 = 70$, $m = \pm 8{,}5$. ոչ լրիվ քառակուսի հավասարում՝ լուծված մեկ տողում։ Թվերն են $7$ և $10$ (կամ $-10$ և $-7$)։ Անհայտի համաչափ ընտրությունը հաճախ վերացնում է $bx$ անդամը։`,
    r`### Когда оба корня имеют смысл

Мяч брошен вертикально вверх со скоростью 20 м/с. Его высота через $t$ секунд примерно $h = 20t - 5t^2$ метров. Когда он на высоте 15 м?

$$20t - 5t^2 = 15 \;\Rightarrow\; t^2 - 4t + 3 = 0 \;\Rightarrow\; t = 1 \text{ или } t = 3.$$

Оба ответа верны: мяч проходит 15 м **на подъёме** через 1 с и **на спуске** через 3 с. Прежде чем отбросить корень, спроси, что он означает. Отрицательные время или длина отбрасываются, а два положительных момента времени могут оба быть реальными событиями.

Когда он на высоте 20 м? $t^2 - 4t + 4 = 0$, $(t - 2)^2 = 0$: только $t = 2$, верхняя точка полёта ($D = 0$). А 25 м? $D < 0$: так высоко мяч не поднимется. Три случая дискриминанта — три разные физические истории.

### Золотое сечение

Отрежем от прямоугольника квадрат так, чтобы оставшийся прямоугольник был **той же формы**, что и исходный. Если короткая сторона $1$, а длинная $x$, у остатка стороны $x - 1$ и $1$, и одинаковая форма означает

$$\frac{x}{1} = \frac{1}{x - 1} \;\Rightarrow\; x^2 - x - 1 = 0 \;\Rightarrow\; x = \frac{1 + \sqrt{5}}{2} \approx 1{,}618.$$

Это **золотое сечение** $\varphi$ — то самое число, к которому приближалась цепная дробь $1 + \cfrac{1}{1 + \cfrac{1}{1 + \dots}}$. Отрицательный корень $\dfrac{1 - \sqrt{5}}{2}$ для длины отбрасываем, но заметь: он равен $1 - \varphi$ и встречается в формулах для чисел Фибоначчи.

### Удачный выбор неизвестного

«Два числа отличаются на 3, их произведение 70». С $x$ и $x + 3$: $x^2 + 3x - 70 = 0$. Через **среднее** $m$ числа равны $m - 1{,}5$ и $m + 1{,}5$, поэтому $m^2 - 2{,}25 = 70$, $m = \pm 8{,}5$: неполное квадратное уравнение, решаемое в одну строку. Числа $7$ и $10$ (или $-10$ и $-7$). Симметричный выбор неизвестного часто убирает член $bx$.`,
  ),
};
