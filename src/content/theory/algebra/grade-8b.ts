import { th } from "../kit";

const r = String.raw;

/** Algebra 8, unit 2: rational and irrational numbers, square roots. */
export const algebra8b = {
  "rational-irrational": th(
    r`### Why every fraction gives a decimal that ends or repeats

Divide $1$ by $7$ in a column. At each step the remainder is one of $0, 1, 2, \dots, 6$: only **seven** possibilities. If a remainder is $0$, the division ends. If not, then after at most 6 steps some remainder must come back, and from that moment the digits repeat exactly, because the same remainder gives the same next digit:

$$\frac{1}{7} = 0.142857\,142857\ldots = 0.(142857).$$

The same argument works for any $\dfrac{p}{q}$: there are only $q$ possible remainders, so the period is at most $q - 1$ digits long.

### And back: a repeating decimal is a fraction

Let $x = 0.(27) = 0.272727\ldots$ Multiply by $100$ to shift by one period: $100x = 27.272727\ldots$ Subtract: $99x = 27$, so $x = \dfrac{27}{99} = \dfrac{3}{11}$. The tails are identical and cancel.

The same trick gives a surprise: $x = 0.(9) = 0.999\ldots$, $10x = 9.999\ldots$, $9x = 9$, $x = 1$. So $0.999\ldots = 1$: two different decimals for the **same** number. (There is no number between them, so they cannot be different.)

### What irrational numbers are like

A number such as $\sqrt{2} = 1.41421356\ldots$ or $\pi$ has a decimal that **never** ends and **never** repeats. It is not a fraction of whole numbers. You cannot write it out fully, but you can pin it down as precisely as you like: $1.414 < \sqrt{2} < 1.415$.

### How many are there?

Between any two fractions there is another fraction (their average), so the rational numbers are "dense". Yet they do not fill the line: $\sqrt{2}$ sits in a gap. In a precise sense found by Georg Cantor in 1874, there are **far more** irrational numbers than rational ones: a point picked "at random" on the number line is almost certainly irrational.`,
    r`### Ինչու ցանկացած կոտորակ տալիս է վերջավոր կամ պարբերական տասնորդական

$1$-ը $7$-ի բաժանենք սյունակով։ Ամեն քայլում մնացորդը $0, 1, 2, \dots, 6$-ից մեկն է՝ միայն **յոթ** հնարավորություն։ Եթե մնացորդը $0$ է, բաժանումն ավարտվում է։ Եթե ոչ, ապա առավելագույնը 6 քայլից հետո ինչ-որ մնացորդ պետք է կրկնվի, և այդ պահից թվանշանները ճիշտ կրկնվում են, քանի որ նույն մնացորդը տալիս է նույն հաջորդ թվանշանը.

$$\frac{1}{7} = 0{,}142857\,142857\ldots = 0{,}(142857).$$

Նույն դատողությունն աշխատում է ցանկացած $\dfrac{p}{q}$-ի համար. հնարավոր մնացորդները միայն $q$-ն են, ուստի պարբերությունը առավելագույնը $q - 1$ թվանշան է։

### Եվ հակառակը. պարբերական տասնորդականը կոտորակ է

Դիցուք $x = 0{,}(27) = 0{,}272727\ldots$։ Բազմապատկենք $100$-ով՝ մեկ պարբերությամբ տեղաշարժելու համար. $100x = 27{,}272727\ldots$։ Հանենք. $99x = 27$, ուստի $x = \dfrac{27}{99} = \dfrac{3}{11}$։ «Պոչերը» նույնական են և կրճատվում են։

Նույն հնարքն անակնկալ է տալիս. $x = 0{,}(9) = 0{,}999\ldots$, $10x = 9{,}999\ldots$, $9x = 9$, $x = 1$։ Ուստի $0{,}999\ldots = 1$. **նույն** թվի երկու տարբեր տասնորդական գրառում։ (Դրանց միջև թիվ չկա, ուստի դրանք չեն կարող տարբեր լինել։)

### Ինչպիսին են իռացիոնալ թվերը

$\sqrt{2} = 1{,}41421356\ldots$-ի կամ $\pi$-ի պես թիվն ունի տասնորդական գրառում, որը **երբեք** չի ավարտվում և **երբեք** չի կրկնվում։ Այն ամբողջ թվերի կոտորակ չէ։ Այն ամբողջությամբ գրել չես կարող, բայց կարող ես սահմանափակել որքան ուզես ճշգրիտ. $1{,}414 < \sqrt{2} < 1{,}415$։

### Քանի՞սն են դրանք

Ցանկացած երկու կոտորակի միջև կա ևս մեկ կոտորակ (դրանց միջինը), ուստի ռացիոնալ թվերը «խիտ» են։ Այնուամենայնիվ, դրանք չեն լցնում ուղիղը. $\sqrt{2}$-ը նստած է բացվածքում։ Գեորգ Կանտորի 1874 թվականին գտած ճշգրիտ իմաստով իռացիոնալ թվերը **շատ ավելի շատ** են, քան ռացիոնալները. թվային ուղղի վրա «պատահական» ընտրված կետը գրեթե անկասկած իռացիոնալ է։`,
    r`### Почему каждая дробь даёт конечную или периодическую десятичную

Разделим $1$ на $7$ столбиком. На каждом шаге остаток — одно из чисел $0, 1, 2, \dots, 6$: всего **семь** возможностей. Если остаток $0$, деление заканчивается. Если нет, то не более чем через 6 шагов какой-то остаток обязан повториться, и с этого момента цифры повторяются точно, потому что одинаковый остаток даёт одинаковую следующую цифру:

$$\frac{1}{7} = 0{,}142857\,142857\ldots = 0{,}(142857).$$

То же рассуждение работает для любой $\dfrac{p}{q}$: возможных остатков всего $q$, поэтому период не длиннее $q - 1$ цифр.

### И обратно: периодическая дробь — это обыкновенная дробь

Пусть $x = 0{,}(27) = 0{,}272727\ldots$ Умножим на $100$, чтобы сдвинуть на один период: $100x = 27{,}272727\ldots$ Вычтем: $99x = 27$, значит, $x = \dfrac{27}{99} = \dfrac{3}{11}$. «Хвосты» одинаковы и сокращаются.

Тот же приём даёт неожиданность: $x = 0{,}(9) = 0{,}999\ldots$, $10x = 9{,}999\ldots$, $9x = 9$, $x = 1$. Значит, $0{,}999\ldots = 1$: две разные десятичные записи **одного** числа. (Между ними нет ни одного числа, поэтому различаться они не могут.)

### Какие они, иррациональные числа

У числа вроде $\sqrt{2} = 1{,}41421356\ldots$ или $\pi$ десятичная запись **никогда** не кончается и **никогда** не повторяется. Это не дробь из целых чисел. Записать его целиком нельзя, но зажать можно сколь угодно точно: $1{,}414 < \sqrt{2} < 1{,}415$.

### Сколько их?

Между любыми двумя дробями есть ещё одна дробь (их среднее), поэтому рациональные числа «плотные». И всё же они не заполняют прямую: $\sqrt{2}$ сидит в щели. В точном смысле, найденном Георгом Кантором в 1874 году, иррациональных чисел **гораздо больше**, чем рациональных: точка, выбранная на числовой прямой «наугад», почти наверняка иррациональна.`,
  ),

  "arithmetic-root": th(
    r`### The proof that shocked the Pythagoreans

The followers of Pythagoras believed that everything is built from whole numbers and their ratios. Then one of them, by legend **Hippasus**, found that the diagonal of a unit square, $\sqrt{2}$, is **not** a ratio of whole numbers. Here is the proof.

Suppose $\sqrt{2} = \dfrac{p}{q}$, a fraction in lowest terms. Then $p^2 = 2q^2$, so $p^2$ is even, so $p$ is even (an odd number squared is odd). Write $p = 2m$: $4m^2 = 2q^2$, so $q^2 = 2m^2$, and $q$ is even too. But then $\dfrac{p}{q}$ could be cancelled by 2, against our assumption. The assumption was impossible: $\sqrt{2}$ is irrational.

### How the Babylonians computed $\sqrt{2}$

A clay tablet from about 1800 BC (YBC 7289) shows a square with its diagonal and the number $1;24,51,10$ in base 60, that is $1 + \tfrac{24}{60} + \tfrac{51}{60^2} + \tfrac{10}{60^3} \approx 1.4142130$. The true value is $1.4142136\ldots$: correct to six decimal places.

A method that gets there quickly (often credited to Heron of Alexandria): if $x$ is a guess for $\sqrt{a}$, then $\dfrac{a}{x}$ is on the **other side** of $\sqrt{a}$, so take their average:

$$x_{\text{new}} = \frac{1}{2}\left(x + \frac{a}{x}\right).$$

For $\sqrt{2}$, start with $1$: then $1.5$, then $1.41667$, then $1.4142157$. Each step roughly **doubles** the number of correct digits.

### Why the root is defined as non-negative

The equation $x^2 = 9$ has two solutions, $3$ and $-3$. A symbol must name **one** number, otherwise $\sqrt{9} + 1$ would not have a value. The convention picks the non-negative one, which is also the one that makes sense as the side of a square.`,
    r`### Ապացույցը, որ ցնցեց պյութագորականներին

Պյութագորասի հետևորդները հավատում էին, որ ամեն ինչ կառուցված է ամբողջ թվերից և դրանց հարաբերություններից։ Հետո նրանցից մեկը՝ ավանդության համաձայն **Հիպասոսը**, պարզեց, որ միավոր քառակուսու անկյունագիծը՝ $\sqrt{2}$-ը, ամբողջ թվերի հարաբերություն **չէ**։ Ահա ապացույցը։

Ենթադրենք՝ $\sqrt{2} = \dfrac{p}{q}$՝ անկրճատելի կոտորակ։ Այդ դեպքում $p^2 = 2q^2$, ուստի $p^2$-ն զույգ է, ուրեմն $p$-ն զույգ է (կենտ թվի քառակուսին կենտ է)։ Գրենք $p = 2m$. $4m^2 = 2q^2$, ուստի $q^2 = 2m^2$, և $q$-ն էլ է զույգ։ Բայց այդ դեպքում $\dfrac{p}{q}$-ն կարելի կլիներ կրճատել 2-ով, ինչը հակասում է մեր ենթադրությանը։ Ենթադրությունն անհնար էր. $\sqrt{2}$-ը իռացիոնալ է։

### Ինչպես էին բաբելոնացիները հաշվում $\sqrt{2}$-ը

Մոտ մ.թ.ա. 1800 թվականի կավե սալիկը (YBC 7289) ցույց է տալիս քառակուսի՝ անկյունագծով և $1;24,51,10$ թիվը 60-ական համակարգով, այսինքն՝ $1 + \tfrac{24}{60} + \tfrac{51}{60^2} + \tfrac{10}{60^3} \approx 1{,}4142130$։ Իրական արժեքը $1{,}4142136\ldots$ է. ճիշտ է մինչև վեցերորդ նիշը։

Արագ հասնող եղանակ (հաճախ վերագրվում է Հերոն Ալեքսանդրացուն). եթե $x$-ը $\sqrt{a}$-ի ենթադրյալ արժեք է, ապա $\dfrac{a}{x}$-ը գտնվում է $\sqrt{a}$-ի **մյուս կողմում**, ուստի վերցրու դրանց միջինը.

$$x_{\text{նոր}} = \frac{1}{2}\left(x + \frac{a}{x}\right).$$

$\sqrt{2}$-ի համար սկսիր $1$-ից. հետո $1{,}5$, հետո $1{,}41667$, հետո $1{,}4142157$։ Յուրաքանչյուր քայլ մոտավորապես **կրկնապատկում** է ճիշտ թվանշանների քանակը։

### Ինչու է արմատը սահմանվում ոչ բացասական

$x^2 = 9$ հավասարումն ունի երկու լուծում՝ $3$ և $-3$։ Նշանը պետք է անվանի **մեկ** թիվ, այլապես $\sqrt{9} + 1$-ն արժեք չէր ունենա։ Պայմանավորվածությամբ ընտրվում է ոչ բացասականը, որը նաև իմաստ ունի որպես քառակուսու կողմ։`,
    r`### Доказательство, потрясшее пифагорейцев

Последователи Пифагора верили, что всё построено из целых чисел и их отношений. Затем один из них, по легенде **Гиппас**, обнаружил, что диагональ единичного квадрата, $\sqrt{2}$, **не** является отношением целых чисел. Вот доказательство.

Пусть $\sqrt{2} = \dfrac{p}{q}$ — несократимая дробь. Тогда $p^2 = 2q^2$, значит, $p^2$ чётно, а потому чётно и $p$ (квадрат нечётного числа нечётен). Запишем $p = 2m$: $4m^2 = 2q^2$, откуда $q^2 = 2m^2$, и $q$ тоже чётно. Но тогда дробь $\dfrac{p}{q}$ можно сократить на 2 — противоречие с предположением. Предположение невозможно: $\sqrt{2}$ иррационально.

### Как вавилоняне вычисляли $\sqrt{2}$

На глиняной табличке около 1800 года до н. э. (YBC 7289) изображён квадрат с диагональю и число $1;24,51,10$ в шестидесятеричной системе, то есть $1 + \tfrac{24}{60} + \tfrac{51}{60^2} + \tfrac{10}{60^3} \approx 1{,}4142130$. Истинное значение $1{,}4142136\ldots$: верно до шестого знака после запятой.

Быстрый способ (его часто приписывают Герону Александрийскому): если $x$ — прикидка для $\sqrt{a}$, то $\dfrac{a}{x}$ лежит **по другую сторону** от $\sqrt{a}$, так что возьмём их среднее:

$$x_{\text{нов}} = \frac{1}{2}\left(x + \frac{a}{x}\right).$$

Для $\sqrt{2}$ начнём с $1$: потом $1{,}5$, затем $1{,}41667$, затем $1{,}4142157$. Каждый шаг примерно **удваивает** число верных цифр.

### Почему корень определяют неотрицательным

У уравнения $x^2 = 9$ два решения: $3$ и $-3$. Символ должен обозначать **одно** число, иначе у $\sqrt{9} + 1$ не было бы значения. По соглашению выбирают неотрицательное — то самое, которое имеет смысл как сторона квадрата.`,
  ),

  "root-of-product-quotient": th(
    r`### Why $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$

Let $a \ge 0$, $b \ge 0$. The number $\sqrt{a}\sqrt{b}$ has two properties:

- it is **non-negative**, as a product of two non-negative numbers;
- its **square** is $ab$: $(\sqrt{a}\sqrt{b})^2 = (\sqrt{a})^2(\sqrt{b})^2 = ab$.

But $\sqrt{ab}$ is, by definition, *the* non-negative number whose square is $ab$, and there is only one such number. So the two are equal. The quotient rule is proved in exactly the same way.

Notice why $a, b \ge 0$ matter: $\sqrt{(-4)(-9)} = \sqrt{36} = 6$, but $\sqrt{-4}$ and $\sqrt{-9}$ do not exist among real numbers, so the right side would make no sense.

### Why there is no rule for sums

$\sqrt{9 + 16} = 5$, but $\sqrt{9} + \sqrt{16} = 7$. Geometry explains the gap: a right triangle with legs $3$ and $4$ has hypotenuse $\sqrt{3^2 + 4^2} = 5$, while going along the two legs is $3 + 4 = 7$. The straight path is shorter, so in general

$$\sqrt{a + b} \le \sqrt{a} + \sqrt{b},$$

with equality only when $a = 0$ or $b = 0$. Squaring both sides shows why: $a + b \le a + 2\sqrt{ab} + b$.

### Roots by factoring, no calculator

To find $\sqrt{1764}$, split into prime factors: $1764 = 2^2 \cdot 3^2 \cdot 7^2$, so $\sqrt{1764} = 2 \cdot 3 \cdot 7 = 42$. A whole number is a perfect square exactly when every prime in it appears an **even** number of times. That gives another proof that $\sqrt{2}$, $\sqrt{12} = 2\sqrt{3}$ or $\sqrt{50} = 5\sqrt{2}$ are not whole: some prime appears an odd number of times.

### A shortcut for decimals

$\sqrt{0.0009} = \sqrt{\dfrac{9}{10\,000}} = \dfrac{3}{100} = 0.03$. Moving the decimal point by **two** places under the root moves it by **one** place in the answer.`,
    r`### Ինչու $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$

Դիցուք $a \ge 0$, $b \ge 0$։ $\sqrt{a}\sqrt{b}$ թիվն ունի երկու հատկություն.

- այն **ոչ բացասական** է՝ որպես երկու ոչ բացասական թվերի արտադրյալ.
- նրա **քառակուսին** $ab$ է՝ $(\sqrt{a}\sqrt{b})^2 = (\sqrt{a})^2(\sqrt{b})^2 = ab$։

Բայց $\sqrt{ab}$-ն ըստ սահմանման *այն* ոչ բացասական թիվն է, որի քառակուսին $ab$ է, և այդպիսի թիվ միայն մեկն է։ Ուստի երկուսը հավասար են։ Քանորդի կանոնն ապացուցվում է ճիշտ նույն կերպ։

Նկատիր, թե ինչու են կարևոր $a, b \ge 0$ պայմանները. $\sqrt{(-4)(-9)} = \sqrt{36} = 6$, բայց $\sqrt{-4}$-ը և $\sqrt{-9}$-ը իրական թվերի մեջ գոյություն չունեն, ուստի աջ մասն իմաստ չէր ունենա։

### Ինչու գումարների համար կանոն չկա

$\sqrt{9 + 16} = 5$, բայց $\sqrt{9} + \sqrt{16} = 7$։ Երկրաչափությունը բացատրում է տարբերությունը. $3$ և $4$ էջերով ուղղանկյուն եռանկյան ներքնաձիգը $\sqrt{3^2 + 4^2} = 5$ է, իսկ երկու էջերով գնալը՝ $3 + 4 = 7$։ Ուղիղ ճանապարհն ավելի կարճ է, ուստի ընդհանուր դեպքում

$$\sqrt{a + b} \le \sqrt{a} + \sqrt{b},$$

և հավասարությունը տեղի ունի միայն $a = 0$-ի կամ $b = 0$-ի դեպքում։ Երկու մասերը քառակուսի բարձրացնելը ցույց է տալիս պատճառը. $a + b \le a + 2\sqrt{ab} + b$։

### Արմատներ վերլուծմամբ՝ առանց հաշվիչի

$\sqrt{1764}$-ը գտնելու համար վերլուծիր պարզ արտադրիչների. $1764 = 2^2 \cdot 3^2 \cdot 7^2$, ուստի $\sqrt{1764} = 2 \cdot 3 \cdot 7 = 42$։ Ամբողջ թիվը լրիվ քառակուսի է ճիշտ այն դեպքում, երբ նրա մեջ յուրաքանչյուր պարզ թիվ հանդիպում է **զույգ** անգամ։ Սա ևս մեկ ապացույց է տալիս, որ $\sqrt{2}$-ը, $\sqrt{12} = 2\sqrt{3}$-ը կամ $\sqrt{50} = 5\sqrt{2}$-ը ամբողջ չեն. ինչ-որ պարզ թիվ հանդիպում է կենտ անգամ։

### Կրճատ ճանապարհ տասնորդականների համար

$\sqrt{0{,}0009} = \sqrt{\dfrac{9}{10\,000}} = \dfrac{3}{100} = 0{,}03$։ Արմատի տակ ստորակետը **երկու** նիշով տեղաշարժելը պատասխանում այն տեղաշարժում է **մեկ** նիշով։`,
    r`### Почему $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$

Пусть $a \ge 0$, $b \ge 0$. У числа $\sqrt{a}\sqrt{b}$ два свойства:

- оно **неотрицательно** как произведение двух неотрицательных чисел;
- его **квадрат** равен $ab$: $(\sqrt{a}\sqrt{b})^2 = (\sqrt{a})^2(\sqrt{b})^2 = ab$.

Но $\sqrt{ab}$ по определению — *то самое* неотрицательное число, квадрат которого равен $ab$, и такое число одно. Значит, они равны. Правило для частного доказывается точно так же.

Заметь, почему важно $a, b \ge 0$: $\sqrt{(-4)(-9)} = \sqrt{36} = 6$, но $\sqrt{-4}$ и $\sqrt{-9}$ среди действительных чисел не существуют, и правая часть не имела бы смысла.

### Почему для сумм правила нет

$\sqrt{9 + 16} = 5$, а $\sqrt{9} + \sqrt{16} = 7$. Разницу объясняет геометрия: у прямоугольного треугольника с катетами $3$ и $4$ гипотенуза $\sqrt{3^2 + 4^2} = 5$, а путь по двум катетам равен $3 + 4 = 7$. Прямой путь короче, поэтому в общем случае

$$\sqrt{a + b} \le \sqrt{a} + \sqrt{b},$$

причём равенство бывает только при $a = 0$ или $b = 0$. Возведение обеих частей в квадрат показывает причину: $a + b \le a + 2\sqrt{ab} + b$.

### Корни разложением, без калькулятора

Чтобы найти $\sqrt{1764}$, разложи на простые множители: $1764 = 2^2 \cdot 3^2 \cdot 7^2$, значит, $\sqrt{1764} = 2 \cdot 3 \cdot 7 = 42$. Целое число — точный квадрат ровно тогда, когда каждое простое входит в него **чётное** число раз. Это ещё одно доказательство того, что $\sqrt{2}$, $\sqrt{12} = 2\sqrt{3}$ или $\sqrt{50} = 5\sqrt{2}$ не целые: какое-то простое входит нечётное число раз.

### Приём для десятичных дробей

$\sqrt{0{,}0009} = \sqrt{\dfrac{9}{10\,000}} = \dfrac{3}{100} = 0{,}03$. Сдвиг запятой на **два** знака под корнем сдвигает её на **один** знак в ответе.`,
  ),

  "root-of-power": th(
    r`### Why $\sqrt{a^2} = |a|$, proved

$\sqrt{a^2}$ is the non-negative number whose square is $a^2$. Check $|a|$:

- $|a| \ge 0$ always;
- $|a|^2 = a^2$, because $|a|$ is either $a$ or $-a$, and both have square $a^2$.

So $\sqrt{a^2} = |a|$ for **every** real $a$. Writing $\sqrt{a^2} = a$ is correct only when $a \ge 0$.

### Two expressions that look alike

$(\sqrt{x})^2$ and $\sqrt{x^2}$ are different.

| | defined for | equals |
|---|---|---|
| $(\sqrt{x})^2$ | only $x \ge 0$ | $x$ |
| $\sqrt{x^2}$ | every $x$ | $\lvert x \rvert$ |

The graph of $y = (\sqrt{x})^2$ is half of the line $y = x$, only for $x \ge 0$. The graph of $y = \sqrt{x^2}$ is the **V-shape** of $y = |x|$: two half-lines meeting at the origin.

### Where the classic mistake leads

"Prove" that $-3 = 3$: $-3 = \sqrt{(-3)^2} = \sqrt{9} = 3$. The first step is the error: $\sqrt{(-3)^2} = |-3| = 3$, not $-3$. Most errors with roots of powers are this one in disguise.

### Even and odd powers

$\sqrt{a^{2n}} = |a^n|$. If $n$ is even, $a^n \ge 0$ already, so the modulus can be dropped: $\sqrt{a^4} = a^2$, $\sqrt{a^8} = a^4$. If $n$ is odd, it must stay: $\sqrt{a^6} = |a^3|$, which is $-a^3$ for negative $a$.

### Distance on the number line

$|a - b|$ is the **distance** between the points $a$ and $b$, whichever is larger. So $\sqrt{(x - 5)^2} = |x - 5|$ is the distance from $x$ to $5$. In geometry the distance between two points, $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, is the two-dimensional version of the same idea.`,
    r`### Ինչու $\sqrt{a^2} = |a|$. ապացույց

$\sqrt{a^2}$-ն այն ոչ բացասական թիվն է, որի քառակուսին $a^2$ է։ Ստուգենք $|a|$-ն.

- $|a| \ge 0$ միշտ.
- $|a|^2 = a^2$, քանի որ $|a|$-ն կամ $a$ է, կամ $-a$, և երկուսի քառակուսին էլ $a^2$ է։

Ուստի $\sqrt{a^2} = |a|$ **ցանկացած** իրական $a$-ի համար։ $\sqrt{a^2} = a$ գրելը ճիշտ է միայն $a \ge 0$-ի դեպքում։

### Երկու իրար նման արտահայտություն

$(\sqrt{x})^2$-ն և $\sqrt{x^2}$-ն տարբեր են։

| | որոշված է | հավասար է |
|---|---|---|
| $(\sqrt{x})^2$ | միայն $x \ge 0$-ի համար | $x$ |
| $\sqrt{x^2}$ | ցանկացած $x$-ի համար | $\lvert x \rvert$ |

$y = (\sqrt{x})^2$-ի գրաֆիկը $y = x$ ուղղի կեսն է՝ միայն $x \ge 0$-ի համար։ $y = \sqrt{x^2}$-ի գրաֆիկը $y = |x|$-ի **V-աձև** պատկերն է. սկզբնակետում հանդիպող երկու ճառագայթ։

### Ուր է տանում դասական սխալը

«Ապացուցենք», որ $-3 = 3$. $-3 = \sqrt{(-3)^2} = \sqrt{9} = 3$։ Առաջին քայլն է սխալ. $\sqrt{(-3)^2} = |-3| = 3$, ոչ թե $-3$։ Աստիճանի արմատների հետ կապված սխալների մեծ մասը քողարկված այս սխալն է։

### Զույգ և կենտ աստիճաններ

$\sqrt{a^{2n}} = |a^n|$։ Եթե $n$-ը զույգ է, $a^n \ge 0$ արդեն, ուստի մոդուլը կարելի է հանել. $\sqrt{a^4} = a^2$, $\sqrt{a^8} = a^4$։ Եթե $n$-ը կենտ է, այն պետք է մնա. $\sqrt{a^6} = |a^3|$, որը բացասական $a$-ի դեպքում $-a^3$ է։

### Հեռավորությունը թվային ուղղի վրա

$|a - b|$-ն $a$ և $b$ կետերի միջև **հեռավորությունն** է՝ անկախ նրանից, թե որն է մեծ։ Ուստի $\sqrt{(x - 5)^2} = |x - 5|$-ը $x$-ից $5$ հեռավորությունն է։ Երկրաչափությունում երկու կետերի միջև հեռավորությունը՝ $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, նույն գաղափարի երկչափ տարբերակն է։`,
    r`### Почему $\sqrt{a^2} = |a|$: доказательство

$\sqrt{a^2}$ — неотрицательное число, квадрат которого равен $a^2$. Проверим $|a|$:

- $|a| \ge 0$ всегда;
- $|a|^2 = a^2$, потому что $|a|$ — это либо $a$, либо $-a$, а квадрат у обоих $a^2$.

Значит, $\sqrt{a^2} = |a|$ при **любом** действительном $a$. Запись $\sqrt{a^2} = a$ верна только при $a \ge 0$.

### Два похожих выражения

$(\sqrt{x})^2$ и $\sqrt{x^2}$ — разные выражения.

| | определено при | равно |
|---|---|---|
| $(\sqrt{x})^2$ | только $x \ge 0$ | $x$ |
| $\sqrt{x^2}$ | любом $x$ | $\lvert x \rvert$ |

График $y = (\sqrt{x})^2$ — половина прямой $y = x$, только при $x \ge 0$. График $y = \sqrt{x^2}$ — «галочка» $y = |x|$: два луча, сходящихся в начале координат.

### Куда ведёт классическая ошибка

«Докажем», что $-3 = 3$: $-3 = \sqrt{(-3)^2} = \sqrt{9} = 3$. Ошибка в первом шаге: $\sqrt{(-3)^2} = |-3| = 3$, а не $-3$. Большинство ошибок с корнями из степеней — эта ошибка в маскировке.

### Чётные и нечётные степени

$\sqrt{a^{2n}} = |a^n|$. Если $n$ чётно, то $a^n \ge 0$ и так, и модуль можно убрать: $\sqrt{a^4} = a^2$, $\sqrt{a^8} = a^4$. Если $n$ нечётно, модуль нужен: $\sqrt{a^6} = |a^3|$, что при отрицательном $a$ равно $-a^3$.

### Расстояние на числовой прямой

$|a - b|$ — **расстояние** между точками $a$ и $b$, какая бы из них ни была больше. Поэтому $\sqrt{(x - 5)^2} = |x - 5|$ — расстояние от $x$ до $5$. В геометрии расстояние между двумя точками, $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, — двумерная версия той же идеи.`,
  ),

  "simplify-radicals": th(
    r`### Why rationalising the denominator was invented

Before calculators, $\dfrac{1}{\sqrt{2}}$ meant dividing $1$ by $1.41421\ldots$ by hand: a long division by an endless decimal. But $\dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, and $1.41421 : 2 = 0.70711$ is done in your head. Clearing the denominator turned hard divisions into easy ones. Today it is mostly used to make answers **comparable**: is $\dfrac{3}{\sqrt{3}}$ the same as $\sqrt{3}$? Rationalise and see that it is.

### Why the conjugate works

To clear $\sqrt{3} - 1$ from a denominator, multiply top and bottom by $\sqrt{3} + 1$:

$$\frac{1}{\sqrt{3} - 1} = \frac{\sqrt{3} + 1}{(\sqrt{3} - 1)(\sqrt{3} + 1)} = \frac{\sqrt{3} + 1}{3 - 1} = \frac{\sqrt{3} + 1}{2}.$$

The difference of squares $(a - b)(a + b) = a^2 - b^2$ squares each part separately, and squaring removes the root. The middle terms that would contain $\sqrt{3}$ cancel.

### Nested roots that come undone

$\sqrt{3 + 2\sqrt{2}}$ looks complicated, but $(1 + \sqrt{2})^2 = 1 + 2\sqrt{2} + 2 = 3 + 2\sqrt{2}$. So $\sqrt{3 + 2\sqrt{2}} = 1 + \sqrt{2}$. The trick: look for $a + b\sqrt{c}$ that squares to the expression under the root, matching the shape $x^2 + y^2 + 2xy$.

### Comparing radicals without decimals

Which is larger, $3\sqrt{2}$ or $2\sqrt{3}$? Bring the factors under the root: $3\sqrt{2} = \sqrt{18}$ and $2\sqrt{3} = \sqrt{12}$. Since the root function increases, $\sqrt{18} > \sqrt{12}$. Bringing a factor in works because $a = \sqrt{a^2}$ for $a \ge 0$; for a negative factor the minus must stay outside: $-2\sqrt{3} = -\sqrt{12}$.

### Why $\sqrt{8} + \sqrt{18}$ simplifies but $\sqrt{2} + \sqrt{3}$ does not

$\sqrt{8} = 2\sqrt{2}$ and $\sqrt{18} = 3\sqrt{2}$ are **like terms**, multiples of the same $\sqrt{2}$, so they add: $5\sqrt{2}$. $\sqrt{2}$ and $\sqrt{3}$ are like $x$ and $y$: no common "unit", so the sum stays as it is.`,
    r`### Ինչու հորինվեց հայտարարը իռացիոնալությունից ազատելը

Հաշվիչներից առաջ $\dfrac{1}{\sqrt{2}}$-ը նշանակում էր ձեռքով $1$-ը բաժանել $1{,}41421\ldots$-ի՝ անվերջ տասնորդականի վրա երկար բաժանում։ Բայց $\dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, իսկ $1{,}41421 : 2 = 0{,}70711$-ը արվում է մտքում։ Հայտարարն ազատելով՝ դժվար բաժանումները դառնում էին հեշտ։ Այսօր դա հիմնականում օգտագործվում է պատասխանները **համեմատելի** դարձնելու համար. $\dfrac{3}{\sqrt{3}}$-ը նո՞ւյնն է, ինչ $\sqrt{3}$-ը։ Ազատիր հայտարարը և կտեսնես, որ այո։

### Ինչու է համալուծը աշխատում

$\sqrt{3} - 1$-ը հայտարարից հեռացնելու համար համարիչն ու հայտարարը բազմապատկիր $\sqrt{3} + 1$-ով.

$$\frac{1}{\sqrt{3} - 1} = \frac{\sqrt{3} + 1}{(\sqrt{3} - 1)(\sqrt{3} + 1)} = \frac{\sqrt{3} + 1}{3 - 1} = \frac{\sqrt{3} + 1}{2}.$$

$(a - b)(a + b) = a^2 - b^2$ քառակուսիների տարբերությունը յուրաքանչյուր մասը քառակուսի է բարձրացնում առանձին, իսկ քառակուսին հեռացնում է արմատը։ $\sqrt{3}$ պարունակող միջին անդամները կրճատվում են։

### Ներդրված արմատներ, որոնք «քանդվում» են

$\sqrt{3 + 2\sqrt{2}}$-ը բարդ տեսք ունի, բայց $(1 + \sqrt{2})^2 = 1 + 2\sqrt{2} + 2 = 3 + 2\sqrt{2}$։ Ուստի $\sqrt{3 + 2\sqrt{2}} = 1 + \sqrt{2}$։ Հնարքը. փնտրիր $a + b\sqrt{c}$, որի քառակուսին արմատի տակի արտահայտությունն է՝ համապատասխանեցնելով $x^2 + y^2 + 2xy$ տեսքին։

### Արմատների համեմատումն առանց տասնորդականների

Ո՞րն է մեծ՝ $3\sqrt{2}$-ը, թե՞ $2\sqrt{3}$-ը։ Արտադրիչները մտցրու արմատի տակ. $3\sqrt{2} = \sqrt{18}$ և $2\sqrt{3} = \sqrt{12}$։ Քանի որ արմատ ֆունկցիան աճող է, $\sqrt{18} > \sqrt{12}$։ Արտադրիչը ներս մտցնելն աշխատում է, քանի որ $a = \sqrt{a^2}$, երբ $a \ge 0$. բացասական արտադրիչի դեպքում մինուսը պետք է մնա դրսում՝ $-2\sqrt{3} = -\sqrt{12}$։

### Ինչու $\sqrt{8} + \sqrt{18}$-ը պարզեցվում է, իսկ $\sqrt{2} + \sqrt{3}$-ը՝ ոչ

$\sqrt{8} = 2\sqrt{2}$-ը և $\sqrt{18} = 3\sqrt{2}$-ը **նման անդամներ** են՝ նույն $\sqrt{2}$-ի բազմապատիկներ, ուստի գումարվում են՝ $5\sqrt{2}$։ $\sqrt{2}$-ը և $\sqrt{3}$-ը նման են $x$-ին և $y$-ին. ընդհանուր «միավոր» չունեն, ուստի գումարը մնում է ինչպես կա։`,
    r`### Зачем придумали избавляться от иррациональности в знаменателе

До калькуляторов $\dfrac{1}{\sqrt{2}}$ означало вручную делить $1$ на $1{,}41421\ldots$ — долгое деление на бесконечную десятичную дробь. Но $\dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, а $1{,}41421 : 2 = 0{,}70711$ считается в уме. Освобождение знаменателя превращало трудные деления в лёгкие. Сегодня это нужно в основном для того, чтобы ответы можно было **сравнивать**: равно ли $\dfrac{3}{\sqrt{3}}$ числу $\sqrt{3}$? Избавься от корня в знаменателе — и увидишь, что да.

### Почему работает сопряжённое выражение

Чтобы убрать $\sqrt{3} - 1$ из знаменателя, умножь числитель и знаменатель на $\sqrt{3} + 1$:

$$\frac{1}{\sqrt{3} - 1} = \frac{\sqrt{3} + 1}{(\sqrt{3} - 1)(\sqrt{3} + 1)} = \frac{\sqrt{3} + 1}{3 - 1} = \frac{\sqrt{3} + 1}{2}.$$

Разность квадратов $(a - b)(a + b) = a^2 - b^2$ возводит каждую часть в квадрат по отдельности, а квадрат убирает корень. Средние члены, которые содержали бы $\sqrt{3}$, сокращаются.

### Вложенные корни, которые «развязываются»

$\sqrt{3 + 2\sqrt{2}}$ выглядит сложно, но $(1 + \sqrt{2})^2 = 1 + 2\sqrt{2} + 2 = 3 + 2\sqrt{2}$. Значит, $\sqrt{3 + 2\sqrt{2}} = 1 + \sqrt{2}$. Приём: ищи $a + b\sqrt{c}$, квадрат которого равен выражению под корнем, подгоняя его под вид $x^2 + y^2 + 2xy$.

### Сравнение корней без десятичных дробей

Что больше: $3\sqrt{2}$ или $2\sqrt{3}$? Внесём множители под корень: $3\sqrt{2} = \sqrt{18}$ и $2\sqrt{3} = \sqrt{12}$. Функция корня возрастает, поэтому $\sqrt{18} > \sqrt{12}$. Вносить множитель можно, потому что $a = \sqrt{a^2}$ при $a \ge 0$; у отрицательного множителя минус остаётся снаружи: $-2\sqrt{3} = -\sqrt{12}$.

### Почему $\sqrt{8} + \sqrt{18}$ упрощается, а $\sqrt{2} + \sqrt{3}$ — нет

$\sqrt{8} = 2\sqrt{2}$ и $\sqrt{18} = 3\sqrt{2}$ — **подобные** слагаемые, кратные одного и того же $\sqrt{2}$, поэтому складываются: $5\sqrt{2}$. $\sqrt{2}$ и $\sqrt{3}$ — как $x$ и $y$: общей «единицы» нет, и сумма остаётся как есть.`,
  ),

  "sqrt-function": th(
    r`### Why the graph is half a parabola on its side

$y = \sqrt{x}$ means $x = y^2$ with $y \ge 0$. So a point $(a; b)$ is on the graph of $y = \sqrt{x}$ exactly when $(b; a)$ is on the graph of $y = x^2$ (for $b \ge 0$). Swapping the coordinates of every point is the reflection in the line $y = x$. The square root **undoes** the square, and the graph of an "undoing" function is always the mirror image in that diagonal. Such functions are called **inverse** to each other.

### Why it grows more and more slowly

Compare neighbouring values:

$$\sqrt{x + 1} - \sqrt{x} = \frac{(\sqrt{x + 1} - \sqrt{x})(\sqrt{x + 1} + \sqrt{x})}{\sqrt{x + 1} + \sqrt{x}} = \frac{1}{\sqrt{x + 1} + \sqrt{x}}.$$

The bigger $x$ is, the bigger the denominator, so the step gets **smaller**: from $0$ to $1$ the rise is $1$, from $99$ to $100$ only $\dfrac{1}{\sqrt{100} + \sqrt{99}} \approx 0.05$. Yet the function never stops growing: $\sqrt{x}$ passes every height eventually, just slowly. To double $\sqrt{x}$, you must multiply $x$ by **four**.

### Square roots in the world

- **How far you can see.** From height $h$ metres above the sea, the horizon is about $3.57\sqrt{h}$ km away. A person on a beach ($h \approx 1.7$) sees about $4.7$ km; from the top of Aragats ($4090$ m), about $3.57 \cdot 64 \approx 228$ km, in clear air.
- **Pendulums.** A pendulum of length $L$ metres swings back and forth in about $2\sqrt{L}$ seconds. To make it twice as slow, make it four times longer.
- **Falling.** From $s = 5t^2$, the time to fall $s$ metres is $t = \sqrt{\dfrac{s}{5}}$. From 20 m it takes 2 s, from 80 m only 4 s.

### Comparing roots is comparing numbers

The function increases, so $\sqrt{a} < \sqrt{b}$ exactly when $a < b$ (for $a, b \ge 0$). That is why we compare $\sqrt{18}$ and $\sqrt{12}$ by comparing $18$ and $12$.`,
    r`### Ինչու է գրաֆիկը կողքի պառկած պարաբոլի կես

$y = \sqrt{x}$ նշանակում է $x = y^2$, որտեղ $y \ge 0$։ Ուստի $(a; b)$ կետն ընկած է $y = \sqrt{x}$-ի գրաֆիկի վրա ճիշտ այն դեպքում, երբ $(b; a)$-ն ընկած է $y = x^2$-ի գրաֆիկի վրա ($b \ge 0$-ի դեպքում)։ Յուրաքանչյուր կետի կոորդինատները տեղերով փոխելը $y = x$ ուղղի նկատմամբ արտացոլումն է։ Քառակուսի արմատը **հետ է շրջում** քառակուսին, և «հետ շրջող» ֆունկցիայի գրաֆիկը միշտ հայելային պատկեր է այդ անկյունագծի նկատմամբ։ Այդպիսի ֆունկցիաները կոչվում են միմյանց **հակադարձ**։

### Ինչու է այն աճում ավելի ու ավելի դանդաղ

Համեմատենք հարևան արժեքները.

$$\sqrt{x + 1} - \sqrt{x} = \frac{(\sqrt{x + 1} - \sqrt{x})(\sqrt{x + 1} + \sqrt{x})}{\sqrt{x + 1} + \sqrt{x}} = \frac{1}{\sqrt{x + 1} + \sqrt{x}}.$$

Որքան մեծ է $x$-ը, այնքան մեծ է հայտարարը, ուստի քայլը **փոքրանում** է. $0$-ից $1$ բարձրացումը $1$ է, $99$-ից $100$՝ ընդամենը $\dfrac{1}{\sqrt{100} + \sqrt{99}} \approx 0{,}05$։ Այնուամենայնիվ, ֆունկցիան երբեք չի դադարում աճել. $\sqrt{x}$-ը վերջիվերջո անցնում է ցանկացած բարձրություն, պարզապես դանդաղ։ $\sqrt{x}$-ը կրկնապատկելու համար $x$-ը պետք է բազմապատկել **չորսով**։

### Քառակուսի արմատներն աշխարհում

- **Որքան հեռու ես տեսնում։** Ծովից $h$ մետր բարձրությունից հորիզոնը մոտ $3{,}57\sqrt{h}$ կմ հեռու է։ Լողափին կանգնած մարդը ($h \approx 1{,}7$) տեսնում է մոտ $4{,}7$ կմ, Արագածի գագաթից ($4090$ մ)՝ մոտ $3{,}57 \cdot 64 \approx 228$ կմ՝ մաքուր օդի դեպքում։
- **Ճոճանակներ։** $L$ մետր երկարությամբ ճոճանակը մոտ $2\sqrt{L}$ վայրկյանում գնում-գալիս է։ Այն կրկնակի դանդաղ դարձնելու համար այն չորս անգամ երկարացրու։
- **Անկում։** $s = 5t^2$-ից $s$ մետր ընկնելու ժամանակը $t = \sqrt{\dfrac{s}{5}}$ է։ 20 մ-ից այն տևում է 2 վ, 80 մ-ից՝ ընդամենը 4 վ։

### Արմատների համեմատումը թվերի համեմատում է

Ֆունկցիան աճող է, ուստի $\sqrt{a} < \sqrt{b}$ ճիշտ այն դեպքում, երբ $a < b$ ($a, b \ge 0$-ի համար)։ Ահա թե ինչու $\sqrt{18}$-ը և $\sqrt{12}$-ը համեմատում ենք՝ համեմատելով $18$-ը և $12$-ը։`,
    r`### Почему график — половина параболы, лёгшей на бок

$y = \sqrt{x}$ означает $x = y^2$ при $y \ge 0$. Поэтому точка $(a; b)$ лежит на графике $y = \sqrt{x}$ ровно тогда, когда $(b; a)$ лежит на графике $y = x^2$ (при $b \ge 0$). Перестановка координат каждой точки — это отражение относительно прямой $y = x$. Квадратный корень **отменяет** возведение в квадрат, а график «отменяющей» функции всегда зеркален относительно этой диагонали. Такие функции называют **взаимно обратными**.

### Почему он растёт всё медленнее

Сравним соседние значения:

$$\sqrt{x + 1} - \sqrt{x} = \frac{(\sqrt{x + 1} - \sqrt{x})(\sqrt{x + 1} + \sqrt{x})}{\sqrt{x + 1} + \sqrt{x}} = \frac{1}{\sqrt{x + 1} + \sqrt{x}}.$$

Чем больше $x$, тем больше знаменатель, и шаг **уменьшается**: от $0$ до $1$ подъём равен $1$, от $99$ до $100$ — всего $\dfrac{1}{\sqrt{100} + \sqrt{99}} \approx 0{,}05$. И всё же функция никогда не перестаёт расти: $\sqrt{x}$ рано или поздно превзойдёт любую высоту, просто медленно. Чтобы удвоить $\sqrt{x}$, $x$ нужно увеличить в **четыре** раза.

### Квадратные корни в жизни

- **Как далеко видно.** С высоты $h$ метров над морем горизонт находится примерно в $3{,}57\sqrt{h}$ км. Человек на пляже ($h \approx 1{,}7$) видит около $4{,}7$ км; с вершины Арагаца ($4090$ м) — около $3{,}57 \cdot 64 \approx 228$ км при чистом воздухе.
- **Маятники.** Маятник длиной $L$ метров совершает полное колебание примерно за $2\sqrt{L}$ секунд. Чтобы он качался вдвое медленнее, сделай его вчетверо длиннее.
- **Падение.** Из $s = 5t^2$ время падения с высоты $s$ метров $t = \sqrt{\dfrac{s}{5}}$. С 20 м падение длится 2 с, с 80 м — всего 4 с.

### Сравнить корни — значит сравнить числа

Функция возрастает, поэтому $\sqrt{a} < \sqrt{b}$ ровно тогда, когда $a < b$ (при $a, b \ge 0$). Вот почему $\sqrt{18}$ и $\sqrt{12}$ сравнивают, сравнивая $18$ и $12$.`,
  ),
};
