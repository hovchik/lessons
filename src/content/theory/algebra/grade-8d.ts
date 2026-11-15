import { th } from "../kit";

const r = String.raw;

/** Algebra 8, unit 4: inequalities, intervals and approximate values. */
export const algebra8d = {
  "numerical-inequalities": th(
    r`### Why multiplying by a negative number flips the sign

By definition, $a < b$ means $b - a > 0$. Now multiply by $c$:

- if $c > 0$: $c(b - a)$ is a product of two positive numbers, so $cb - ca > 0$, that is $ca < cb$;
- if $c < 0$: $c(b - a)$ is negative times positive, so $cb - ca < 0$, that is $ca > cb$.

The flip is not a rule to memorise: it follows from the sign of a product. On the number line, multiplying by $-1$ is a reflection in $0$, and a reflection reverses the order of points: $2 < 5$ but $-2 > -5$.

### Comparing by subtracting

Every comparison can be turned into a question about **one sign**. Which is larger, $\dfrac{7}{9}$ or $\dfrac{8}{11}$? $\dfrac{7}{9} - \dfrac{8}{11} = \dfrac{77 - 72}{99} = \dfrac{5}{99} > 0$, so $\dfrac{7}{9}$ is larger. For expressions with letters, factor the difference and look at the signs of the factors.

### The mean of two numbers and their "geometric mean"

For $a, b \ge 0$:

$$\frac{a + b}{2} \ge \sqrt{ab}.$$

Proof: $\dfrac{a + b}{2} - \sqrt{ab} = \dfrac{(\sqrt{a})^2 - 2\sqrt{a}\sqrt{b} + (\sqrt{b})^2}{2} = \dfrac{(\sqrt{a} - \sqrt{b})^2}{2} \ge 0$. Equality holds only when $a = b$.

**Meaning.** A rectangle with sides $a$ and $b$ has the same area as a square with side $\sqrt{ab}$, but its half-perimeter is $a + b \ge 2\sqrt{ab}$. So for a fixed area, the **square** needs the shortest fence. A farmer fencing $400$ m² needs at least $4 \cdot 20 = 80$ m of fence; a $10 \times 40$ plot needs $100$ m.

### Why inequalities matter

Real measurements are never exact, so real statements are usually inequalities: "the bridge holds **at least** 40 tonnes", "the dose must be **less than** 5 mg". Exact equalities are the special case.`,
    r`### Ինչու է բացասական թվով բազմապատկելը շրջում նշանը

Ըստ սահմանման՝ $a < b$ նշանակում է $b - a > 0$։ Այժմ բազմապատկենք $c$-ով.

- եթե $c > 0$. $c(b - a)$-ն երկու դրական թվերի արտադրյալ է, ուստի $cb - ca > 0$, այսինքն՝ $ca < cb$.
- եթե $c < 0$. $c(b - a)$-ն բացասական անգամ դրական է, ուստի $cb - ca < 0$, այսինքն՝ $ca > cb$։

Շրջվելը անգիր անելու կանոն չէ. այն հետևում է արտադրյալի նշանից։ Թվային ուղղի վրա $-1$-ով բազմապատկելը արտացոլում է $0$-ի նկատմամբ, իսկ արտացոլումը շրջում է կետերի կարգը. $2 < 5$, բայց $-2 > -5$։

### Համեմատել հանելով

Ցանկացած համեմատություն կարելի է վերածել **մեկ նշանի** մասին հարցի։ Ո՞րն է մեծ՝ $\dfrac{7}{9}$-ը, թե՞ $\dfrac{8}{11}$-ը։ $\dfrac{7}{9} - \dfrac{8}{11} = \dfrac{77 - 72}{99} = \dfrac{5}{99} > 0$, ուստի $\dfrac{7}{9}$-ն է մեծ։ Տառերով արտահայտությունների դեպքում վերլուծիր տարբերությունը արտադրիչների և նայիր արտադրիչների նշաններին։

### Երկու թվերի միջինը և դրանց «երկրաչափական միջինը»

$a, b \ge 0$-ի համար.

$$\frac{a + b}{2} \ge \sqrt{ab}.$$

Ապացույց. $\dfrac{a + b}{2} - \sqrt{ab} = \dfrac{(\sqrt{a})^2 - 2\sqrt{a}\sqrt{b} + (\sqrt{b})^2}{2} = \dfrac{(\sqrt{a} - \sqrt{b})^2}{2} \ge 0$։ Հավասարությունը տեղի ունի միայն $a = b$-ի դեպքում։

**Իմաստը։** $a$ և $b$ կողմերով ուղղանկյունն ունի նույն մակերեսը, ինչ $\sqrt{ab}$ կողմով քառակուսին, բայց նրա կիսապարագիծը $a + b \ge 2\sqrt{ab}$ է։ Ուստի ֆիքսված մակերեսի դեպքում **քառակուսուն** է պետք ամենակարճ ցանկապատը։ $400$ մ² ցանկապատող ֆերմերին պետք է առնվազն $4 \cdot 20 = 80$ մ ցանկապատ, իսկ $10 \times 40$ հողամասին՝ $100$ մ։

### Ինչու են անհավասարությունները կարևոր

Իրական չափումները երբեք ճշգրիտ չեն, ուստի իրական պնդումները սովորաբար անհավասարություններ են. «կամուրջը դիմանում է **առնվազն** 40 տոննայի», «դեղաչափը պետք է լինի 5 մգ-ից **պակաս**»։ Ճշգրիտ հավասարությունները մասնավոր դեպք են։`,
    r`### Почему умножение на отрицательное число меняет знак неравенства

По определению $a < b$ означает $b - a > 0$. Умножим на $c$:

- если $c > 0$: $c(b - a)$ — произведение двух положительных чисел, значит, $cb - ca > 0$, то есть $ca < cb$;
- если $c < 0$: $c(b - a)$ — отрицательное на положительное, значит, $cb - ca < 0$, то есть $ca > cb$.

Смена знака — не правило для заучивания: она следует из знака произведения. На числовой прямой умножение на $-1$ — отражение относительно $0$, а отражение меняет порядок точек: $2 < 5$, но $-2 > -5$.

### Сравнение через разность

Любое сравнение можно превратить в вопрос об **одном знаке**. Что больше: $\dfrac{7}{9}$ или $\dfrac{8}{11}$? $\dfrac{7}{9} - \dfrac{8}{11} = \dfrac{77 - 72}{99} = \dfrac{5}{99} > 0$, значит, больше $\dfrac{7}{9}$. Для выражений с буквами разложи разность на множители и посмотри на их знаки.

### Среднее двух чисел и их «среднее геометрическое»

При $a, b \ge 0$:

$$\frac{a + b}{2} \ge \sqrt{ab}.$$

Доказательство: $\dfrac{a + b}{2} - \sqrt{ab} = \dfrac{(\sqrt{a})^2 - 2\sqrt{a}\sqrt{b} + (\sqrt{b})^2}{2} = \dfrac{(\sqrt{a} - \sqrt{b})^2}{2} \ge 0$. Равенство только при $a = b$.

**Смысл.** У прямоугольника со сторонами $a$ и $b$ та же площадь, что у квадрата со стороной $\sqrt{ab}$, но его полупериметр $a + b \ge 2\sqrt{ab}$. Значит, при заданной площади **квадрату** нужен самый короткий забор. Фермеру, огораживающему $400$ м², нужно не меньше $4 \cdot 20 = 80$ м забора, а участку $10 \times 40$ — уже $100$ м.

### Почему неравенства важны

Реальные измерения никогда не точны, поэтому реальные утверждения обычно — неравенства: «мост выдерживает **не меньше** 40 тонн», «доза должна быть **меньше** 5 мг». Точные равенства — частный случай.`,
  ),

  "adding-multiplying-inequalities": th(
    r`### Why inequalities of the same direction can be added

If $a < b$ and $c < d$, then $b - a > 0$ and $d - c > 0$. Their sum is positive: $(b + d) - (a + c) > 0$, so $a + c < b + d$. Two "gaps" in the same direction add up to a bigger gap.

### Why they cannot be subtracted

$5 > 1$ and $4 > 0$, but $5 - 4 = 1$ is **not** greater than $1 - 0 = 1$. And $5 > 1$, $10 > 0$ give $5 - 10 = -5$, which is smaller than $1 - 0 = 1$. Subtracting $c < d$ means **adding** $-c > -d$, an inequality of the **opposite** direction, and those cannot be added. The correct way: first turn the second inequality around, then add.

### Why multiplying needs positive numbers

For positive numbers: $a < b$ and $c < d$ give $ac < bc < bd$ (two steps, each multiplying by a positive number). With negative numbers it breaks: $-3 < 1$ and $-3 < 1$, but $(-3)(-3) = 9$ is **not** less than $1 \cdot 1 = 1$.

### Error bounds in real measurements

A rectangular room is measured as $4.2 \pm 0.05$ m by $3.5 \pm 0.05$ m. Then

$$4.15 \le a \le 4.25,\qquad 3.45 \le b \le 3.55.$$

Add: the half-perimeter is between $7.6$ and $7.8$ m. Multiply (all positive): the area is between $4.15 \cdot 3.45 \approx 14.32$ and $4.25 \cdot 3.55 \approx 15.09$ m². The "$14.7$ m²" from multiplying the measured values could be off by almost $0.4$ m² either way. That is how engineers find the **worst case** before ordering flooring.

### Squaring both sides

For $0 \le a < b$, $a^2 < b^2$ (multiply $a < b$ by itself, both positive). Without the condition it fails: $-5 < 2$ but $25 > 4$.`,
    r`### Ինչու կարելի է գումարել նույն ուղղության անհավասարությունները

Եթե $a < b$ և $c < d$, ապա $b - a > 0$ և $d - c > 0$։ Դրանց գումարը դրական է. $(b + d) - (a + c) > 0$, ուստի $a + c < b + d$։ Նույն ուղղությամբ երկու «բացվածք» գումարվելով տալիս են ավելի մեծ բացվածք։

### Ինչու չի կարելի դրանք հանել

$5 > 1$ և $4 > 0$, բայց $5 - 4 = 1$-ը **մեծ չէ** $1 - 0 = 1$-ից։ Իսկ $5 > 1$-ը և $10 > 0$-ն տալիս են $5 - 10 = -5$, որը փոքր է $1 - 0 = 1$-ից։ $c < d$-ն հանել նշանակում է **գումարել** $-c > -d$-ն՝ **հակառակ** ուղղության անհավասարություն, իսկ այդպիսիք չեն գումարվում։ Ճիշտ ճանապարհը. նախ շրջիր երկրորդ անհավասարությունը, հետո գումարիր։

### Ինչու բազմապատկելու համար պետք են դրական թվեր

Դրական թվերի համար. $a < b$-ն և $c < d$-ն տալիս են $ac < bc < bd$ (երկու քայլ, յուրաքանչյուրում բազմապատկում դրական թվով)։ Բացասական թվերի դեպքում դա խախտվում է. $-3 < 1$ և $-3 < 1$, բայց $(-3)(-3) = 9$-ը **փոքր չէ** $1 \cdot 1 = 1$-ից։

### Սխալի սահմանները իրական չափումներում

Ուղղանկյուն սենյակը չափվել է $4{,}2 \pm 0{,}05$ մ-ը $3{,}5 \pm 0{,}05$ մ-ի վրա։ Այդ դեպքում

$$4{,}15 \le a \le 4{,}25,\qquad 3{,}45 \le b \le 3{,}55.$$

Գումարենք. կիսապարագիծը $7{,}6$-ից $7{,}8$ մ է։ Բազմապատկենք (բոլորը դրական են). մակերեսը $4{,}15 \cdot 3{,}45 \approx 14{,}32$-ից $4{,}25 \cdot 3{,}55 \approx 15{,}09$ մ² է։ Չափված արժեքները բազմապատկելուց ստացված «$14{,}7$ մ²»-ը կարող է սխալ լինել գրեթե $0{,}4$ մ²-ով երկու ուղղությամբ էլ։ Այսպես են ճարտարագետները գտնում **ամենավատ դեպքը**՝ հատակի ծածկույթ պատվիրելուց առաջ։

### Երկու մասերը քառակուսի բարձրացնելը

$0 \le a < b$-ի դեպքում $a^2 < b^2$ ($a < b$-ն բազմապատկիր իրենով, երկուսն էլ դրական են)։ Առանց պայմանի դա խախտվում է. $-5 < 2$, բայց $25 > 4$։`,
    r`### Почему неравенства одного знака можно складывать

Если $a < b$ и $c < d$, то $b - a > 0$ и $d - c > 0$. Их сумма положительна: $(b + d) - (a + c) > 0$, значит, $a + c < b + d$. Два «зазора» в одну сторону складываются в больший зазор.

### Почему их нельзя вычитать

$5 > 1$ и $4 > 0$, но $5 - 4 = 1$ **не** больше $1 - 0 = 1$. А $5 > 1$ и $10 > 0$ дают $5 - 10 = -5$, что меньше $1 - 0 = 1$. Вычесть $c < d$ — значит **прибавить** $-c > -d$, неравенство **противоположного** знака, а такие складывать нельзя. Правильно: сначала «перевернуть» второе неравенство, потом сложить.

### Почему для умножения нужны положительные числа

Для положительных чисел: из $a < b$ и $c < d$ следует $ac < bc < bd$ (два шага, каждый — умножение на положительное число). С отрицательными это ломается: $-3 < 1$ и $-3 < 1$, но $(-3)(-3) = 9$ **не** меньше $1 \cdot 1 = 1$.

### Границы погрешности в реальных измерениях

Прямоугольную комнату измерили: $4{,}2 \pm 0{,}05$ м на $3{,}5 \pm 0{,}05$ м. Тогда

$$4{,}15 \le a \le 4{,}25,\qquad 3{,}45 \le b \le 3{,}55.$$

Сложим: полупериметр от $7{,}6$ до $7{,}8$ м. Перемножим (всё положительно): площадь от $4{,}15 \cdot 3{,}45 \approx 14{,}32$ до $4{,}25 \cdot 3{,}55 \approx 15{,}09$ м². «$14{,}7$ м²», полученные перемножением измеренных значений, могут ошибаться почти на $0{,}4$ м² в любую сторону. Так инженеры находят **худший случай** перед заказом покрытия для пола.

### Возведение обеих частей в квадрат

При $0 \le a < b$ имеем $a^2 < b^2$ (умножь $a < b$ само на себя, всё положительно). Без условия это неверно: $-5 < 2$, но $25 > 4$.`,
  ),

  intervals: th(
    r`### Why an open interval has no largest number

The interval $(0; 1)$ contains all $x$ with $0 < x < 1$. Which number in it is the largest? $0.9$? But $0.99$ is larger. $0.999$? Then $0.9999$. In general, for any $x < 1$ the number $\dfrac{x + 1}{2}$ is still less than $1$ but greater than $x$. So there is **no** largest number in $(0; 1)$, even though every number in it is less than $1$. That is exactly the difference between a round bracket (the end is not included) and a square one: $[0; 1]$ does have a largest number, $1$.

### Infinity is not a number

$(-\infty; 3]$ means "all numbers not greater than 3". The symbol $\infty$ is not a point on the line: no number is equal to it, and you cannot add or multiply with it. That is why it always gets a **round** bracket: there is nothing to include.

### "And" and "or"

Intersection and union are the logic words "and" and "or" turned into pictures:

- $x \ge -1$ **and** $x < 4$: the overlap, $[-1; 4)$;
- $x < 1$ **or** $x \ge 3$: everything covered by at least one, $(-\infty; 1) \cup [3; +\infty)$.

The opposite of "$x$ is in $[1; 3)$" is "$x < 1$ **or** $x \ge 3$". Negating an "and" gives an "or", with each condition turned around. (This rule of logic is named after the English mathematician Augustus De Morgan.)

### Tolerances are intervals

A bolt is made to be $50 \pm 0.2$ mm long. That means its length belongs to $[49.8; 50.2]$, or, with the modulus, $|x - 50| \le 0.2$: "the distance from $x$ to 50 is at most $0.2$". Every "plus or minus" on a drawing or a label is an interval.`,
    r`### Ինչու բաց միջակայքը ամենամեծ թիվ չունի

$(0; 1)$ միջակայքը պարունակում է բոլոր այն $x$-երը, որոնց համար $0 < x < 1$։ Ո՞ր թիվն է նրանում ամենամեծը։ $0{,}9$-ը։ Բայց $0{,}99$-ն ավելի մեծ է։ $0{,}999$-ը։ Այդ դեպքում՝ $0{,}9999$-ը։ Ընդհանուր դեպքում ցանկացած $x < 1$-ի համար $\dfrac{x + 1}{2}$ թիվը դեռ փոքր է $1$-ից, բայց մեծ է $x$-ից։ Ուստի $(0; 1)$-ում ամենամեծ թիվ **չկա**, թեև նրա յուրաքանչյուր թիվ փոքր է $1$-ից։ Սա է կլոր փակագծի (ծայրը ներառված չէ) և քառակուսու տարբերությունը. $[0; 1]$-ն ունի ամենամեծ թիվ՝ $1$։

### Անվերջությունը թիվ չէ

$(-\infty; 3]$-ը նշանակում է «3-ից ոչ մեծ բոլոր թվերը»։ $\infty$ նշանն ուղղի վրա կետ չէ. ոչ մի թիվ նրան հավասար չէ, և նրանով չես կարող գումարել կամ բազմապատկել։ Ահա թե ինչու այն միշտ ստանում է **կլոր** փակագիծ. ներառելու բան չկա։

### «Եվ» և «կամ»

Հատումն ու միավորումը «և» և «կամ» տրամաբանական բառերն են՝ դարձած նկարներ.

- $x \ge -1$ **և** $x < 4$. ընդհանուր մասը՝ $[-1; 4)$.
- $x < 1$ **կամ** $x \ge 3$. այն ամենը, ինչ ծածկված է առնվազն մեկով՝ $(-\infty; 1) \cup [3; +\infty)$։

«$x$-ը պատկանում է $[1; 3)$-ին»-ի ժխտումն է «$x < 1$ **կամ** $x \ge 3$»։ «Եվ»-ի ժխտումը տալիս է «կամ»՝ յուրաքանչյուր պայմանը շրջված։ (Տրամաբանության այս կանոնը կրում է անգլիացի մաթեմատիկոս Օգաստես դը Մորգանի անունը։)

### Թույլատրելի շեղումները միջակայքեր են

Պտուտակը պատրաստվում է $50 \pm 0{,}2$ մմ երկարությամբ։ Դա նշանակում է, որ նրա երկարությունը պատկանում է $[49{,}8; 50{,}2]$-ին, կամ մոդուլով՝ $|x - 50| \le 0{,}2$. «$x$-ից 50 հեռավորությունը առավելագույնը $0{,}2$ է»։ Գծագրի կամ պիտակի վրա ամեն «պլյուս-մինուս» միջակայք է։`,
    r`### Почему в открытом промежутке нет наибольшего числа

Промежуток $(0; 1)$ содержит все $x$, для которых $0 < x < 1$. Какое число в нём наибольшее? $0{,}9$? Но $0{,}99$ больше. $0{,}999$? Тогда $0{,}9999$. Вообще, для любого $x < 1$ число $\dfrac{x + 1}{2}$ всё ещё меньше $1$, но больше $x$. Поэтому в $(0; 1)$ **нет** наибольшего числа, хотя каждое его число меньше $1$. В этом и разница между круглой скобкой (конец не включён) и квадратной: у $[0; 1]$ наибольшее число есть — это $1$.

### Бесконечность — не число

$(-\infty; 3]$ означает «все числа, не большие 3». Символ $\infty$ — не точка на прямой: ни одно число ему не равно, и складывать или умножать с ним нельзя. Поэтому рядом с ним всегда **круглая** скобка: включать нечего.

### «И» и «или»

Пересечение и объединение — это логические слова «и» и «или», ставшие картинками:

- $x \ge -1$ **и** $x < 4$: общая часть, $[-1; 4)$;
- $x < 1$ **или** $x \ge 3$: всё, что покрыто хотя бы одним условием, $(-\infty; 1) \cup [3; +\infty)$.

Отрицание «$x$ принадлежит $[1; 3)$» — это «$x < 1$ **или** $x \ge 3$». Отрицание «и» даёт «или», причём каждое условие переворачивается. (Это правило логики названо в честь английского математика Огастеса де Моргана.)

### Допуски — это промежутки

Болт изготавливают длиной $50 \pm 0{,}2$ мм. Значит, его длина принадлежит $[49{,}8; 50{,}2]$, или, через модуль, $|x - 50| \le 0{,}2$: «расстояние от $x$ до 50 не больше $0{,}2$». Каждое «плюс-минус» на чертеже или этикетке — промежуток.`,
  ),

  "linear-inequalities": th(
    r`### Equivalent transformations, again

An inequality is solved by the same moves as an equation, and the reasons are the same:

1. adding the same number to both sides keeps the solutions;
2. multiplying by a **positive** number keeps the solutions;
3. multiplying by a **negative** number keeps the solutions only if the sign is **reversed**.

Each step can be undone (subtract back, divide back), so no solution is lost or gained. The answer is usually not one number but a whole **interval**.

### Why the answer is always a ray (or everything, or nothing)

After simplifying, any linear inequality becomes $ax > b$ (or $<$, $\ge$, $\le$).

- $a > 0$: $x > \dfrac{b}{a}$, a ray to the right;
- $a < 0$: $x < \dfrac{b}{a}$, a ray to the left;
- $a = 0$: $0 > b$, which is either always true (all numbers) or never true (no solutions).

The three cases mirror the three cases of $ax = b$. The boundary point $\dfrac{b}{a}$ is the root of the corresponding **equation**: solving $ax > b$ is finding where the line $y = ax - b$ is above the $x$-axis.

### Seeing it on a graph

$2x - 6 > 0$: draw $y = 2x - 6$. It crosses the axis at $x = 3$ and goes up, so it is above the axis for $x > 3$. For $-2x + 6 > 0$ the line goes **down**, so it is above the axis for $x < 3$. The flip of the sign when dividing by $-2$ is just the line sloping the other way.

### The test-point check

After solving, pick a number inside the answer and one outside, and put both into the original inequality. Inside should give "true", outside "false". This catches a forgotten flip every time.`,
    r`### Համարժեք ձևափոխություններ՝ նորից

Անհավասարումը լուծվում է նույն քայլերով, ինչ հավասարումը, և պատճառներն էլ նույնն են.

1. երկու մասերին նույն թիվը գումարելը պահպանում է լուծումները.
2. **դրական** թվով բազմապատկելը պահպանում է լուծումները.
3. **բացասական** թվով բազմապատկելը պահպանում է լուծումները միայն այն դեպքում, երբ նշանը **շրջվում է**։

Յուրաքանչյուր քայլ կարելի է հետ շրջել (հետ հանել, հետ բաժանել), ուստի ոչ մի լուծում չի կորչում և չի ավելանում։ Պատասխանը սովորաբար մեկ թիվ չէ, այլ ամբողջ **միջակայք**։

### Ինչու է պատասխանը միշտ ճառագայթ (կամ ամեն ինչ, կամ ոչինչ)

Պարզեցնելուց հետո ցանկացած գծային անհավասարում դառնում է $ax > b$ (կամ $<$, $\ge$, $\le$)։

- $a > 0$. $x > \dfrac{b}{a}$, ճառագայթ դեպի աջ.
- $a < 0$. $x < \dfrac{b}{a}$, ճառագայթ դեպի ձախ.
- $a = 0$. $0 > b$, որը կամ միշտ ճիշտ է (բոլոր թվերը), կամ երբեք (լուծումներ չկան)։

Երեք դեպքերը կրկնում են $ax = b$-ի երեք դեպքերը։ $\dfrac{b}{a}$ սահմանային կետը համապատասխան **հավասարման** արմատն է. $ax > b$-ն լուծել նշանակում է գտնել, թե որտեղ է $y = ax - b$ ուղիղը $x$-երի առանցքից վերև։

### Տեսնել գրաֆիկի վրա

$2x - 6 > 0$. գծիր $y = 2x - 6$։ Այն հատում է առանցքը $x = 3$-ում և բարձրանում է, ուստի առանցքից վերև է $x > 3$-ի դեպքում։ $-2x + 6 > 0$-ի համար ուղիղը **իջնում է**, ուստի առանցքից վերև է $x < 3$-ի դեպքում։ $-2$-ի բաժանելիս նշանի շրջվելը պարզապես ուղղի հակառակ թեքությունն է։

### Ստուգում փորձնական կետով

Լուծելուց հետո ընտրիր մի թիվ պատասխանի ներսից և մեկը դրսից, և երկուսն էլ տեղադրիր սկզբնական անհավասարման մեջ։ Ներսինը պետք է տա «ճիշտ», դրսինը՝ «սխալ»։ Սա ամեն անգամ բռնում է մոռացված շրջումը։`,
    r`### Снова равносильные преобразования

Неравенство решают теми же шагами, что и уравнение, и по тем же причинам:

1. прибавление одного и того же числа к обеим частям сохраняет решения;
2. умножение на **положительное** число сохраняет решения;
3. умножение на **отрицательное** число сохраняет решения, только если знак **поменять** на противоположный.

Каждый шаг обратим (вычесть обратно, разделить обратно), поэтому решения не теряются и не появляются. Ответ обычно — не одно число, а целый **промежуток**.

### Почему ответ — всегда луч (или всё, или ничего)

После упрощения любое линейное неравенство принимает вид $ax > b$ (или $<$, $\ge$, $\le$).

- $a > 0$: $x > \dfrac{b}{a}$, луч вправо;
- $a < 0$: $x < \dfrac{b}{a}$, луч влево;
- $a = 0$: $0 > b$ — либо всегда верно (все числа), либо никогда (решений нет).

Три случая повторяют три случая $ax = b$. Граничная точка $\dfrac{b}{a}$ — корень соответствующего **уравнения**: решить $ax > b$ — значит найти, где прямая $y = ax - b$ лежит выше оси $x$.

### Видим на графике

$2x - 6 > 0$: нарисуй $y = 2x - 6$. Прямая пересекает ось при $x = 3$ и идёт вверх, поэтому она выше оси при $x > 3$. Для $-2x + 6 > 0$ прямая идёт **вниз**, поэтому она выше оси при $x < 3$. Смена знака при делении на $-2$ — это просто наклон прямой в другую сторону.

### Проверка пробной точкой

Решив, возьми число внутри ответа и число снаружи и подставь оба в исходное неравенство. Внутреннее должно дать «верно», внешнее — «неверно». Это каждый раз ловит забытую смену знака.`,
  ),

  "systems-of-inequalities": th(
    r`### Why a system means intersection

A number solves the system when it satisfies the **first** inequality **and** the **second**. The set of solutions of each is an interval; the numbers that are in both form their **intersection**. That is all the method is: solve each, then overlap.

### The triangle inequality as a system

Can three sticks of lengths $3$, $5$ and $x$ form a triangle? Each side must be shorter than the sum of the other two:

$$\begin{cases} x < 3 + 5 \\ 3 < 5 + x \\ 5 < 3 + x \end{cases} \;\Rightarrow\; \begin{cases} x < 8 \\ x > -2 \\ x > 2 \end{cases} \;\Rightarrow\; 2 < x < 8.$$

The middle condition is automatically true for a positive length, so it adds nothing. In general the third side lies **strictly between the difference and the sum** of the other two.

### Why a double inequality is a system

$-1 < 2x + 3 < 7$ is short for "$2x + 3 > -1$ **and** $2x + 3 < 7$". It can be solved all at once, doing the same step to **all three** parts: subtract 3, then divide by 2, $-2 < x < 2$. If you divide by a negative number, both signs flip: $-1 < -2x < 4$ gives $\tfrac{1}{2} > x > -2$, which is written $-2 < x < \tfrac{1}{2}$.

### When there is no solution, and why it matters

$x > 5$ and $x < 2$ cannot both be true: the intervals do not meet. In a real problem an empty answer is information. "The parcel must weigh more than 5 kg to go by lorry and less than 2 kg to go by post" means no single delivery method works.

### The modulus as a double inequality

$|x - a| < r$ means "the distance from $x$ to $a$ is less than $r$", that is $a - r < x < a + r$. So $|x - 3| < 2$ is the interval $(1; 5)$. And $|x - 3| > 2$ is the **union** $x < 1$ or $x > 5$: an "or" problem, not a system.`,
    r`### Ինչու համակարգը նշանակում է հատում

Թիվը լուծում է համակարգը, երբ բավարարում է **առաջին** անհավասարմանը **և** **երկրորդին**։ Յուրաքանչյուրի լուծումների բազմությունը միջակայք է, իսկ երկուսում էլ եղող թվերը կազմում են դրանց **հատումը**։ Եղանակն ամբողջությամբ սա է. լուծիր յուրաքանչյուրը, հետո համադրիր։

### Եռանկյան անհավասարությունը որպես համակարգ

Կարո՞ղ են $3$, $5$ և $x$ երկարությամբ երեք ձողեր եռանկյուն կազմել։ Յուրաքանչյուր կողմ պետք է փոքր լինի մյուս երկուսի գումարից.

$$\begin{cases} x < 3 + 5 \\ 3 < 5 + x \\ 5 < 3 + x \end{cases} \;\Rightarrow\; \begin{cases} x < 8 \\ x > -2 \\ x > 2 \end{cases} \;\Rightarrow\; 2 < x < 8.$$

Միջին պայմանը դրական երկարության համար ինքնաբերաբար ճիշտ է, ուստի ոչինչ չի ավելացնում։ Ընդհանուր դեպքում երրորդ կողմը գտնվում է մյուս երկուսի **տարբերության և գումարի միջև**։

### Ինչու է կրկնակի անհավասարությունը համակարգ

$-1 < 2x + 3 < 7$-ը «$2x + 3 > -1$ **և** $2x + 3 < 7$»-ի կրճատ գրառումն է։ Այն կարելի է լուծել միանգամից՝ նույն քայլը կատարելով **բոլոր երեք** մասերի հետ. հանիր 3, հետո բաժանիր 2-ի՝ $-2 < x < 2$։ Եթե բաժանում ես բացասական թվի, երկու նշաններն էլ շրջվում են. $-1 < -2x < 4$-ը տալիս է $\tfrac{1}{2} > x > -2$, որը գրվում է $-2 < x < \tfrac{1}{2}$։

### Երբ լուծում չկա և ինչու է դա կարևոր

$x > 5$-ը և $x < 2$-ը չեն կարող երկուսն էլ ճիշտ լինել. միջակայքերը չեն հանդիպում։ Իրական խնդրում դատարկ պատասխանը տեղեկություն է։ «Ծանրոցը բեռնատարով ուղարկելու համար պետք է 5 կգ-ից ծանր լինի, իսկ փոստով՝ 2 կգ-ից թեթև» նշանակում է, որ առաքման ոչ մի եղանակ չի աշխատում։

### Մոդուլը որպես կրկնակի անհավասարություն

$|x - a| < r$ նշանակում է «$x$-ից $a$ հեռավորությունը փոքր է $r$-ից», այսինքն՝ $a - r < x < a + r$։ Ուստի $|x - 3| < 2$-ը $(1; 5)$ միջակայքն է։ Իսկ $|x - 3| > 2$-ը **միավորումն** է՝ $x < 1$ կամ $x > 5$. «կամ»-ի խնդիր, ոչ թե համակարգ։`,
    r`### Почему система означает пересечение

Число решает систему, если удовлетворяет **первому** неравенству **и** **второму**. Множество решений каждого — промежуток, а числа, входящие в оба, образуют их **пересечение**. Весь метод в этом: реши каждое, потом наложи.

### Неравенство треугольника как система

Можно ли сложить треугольник из палочек длиной $3$, $5$ и $x$? Каждая сторона должна быть меньше суммы двух других:

$$\begin{cases} x < 3 + 5 \\ 3 < 5 + x \\ 5 < 3 + x \end{cases} \;\Rightarrow\; \begin{cases} x < 8 \\ x > -2 \\ x > 2 \end{cases} \;\Rightarrow\; 2 < x < 8.$$

Среднее условие для положительной длины выполняется автоматически и ничего не добавляет. В общем случае третья сторона лежит строго **между разностью и суммой** двух других.

### Почему двойное неравенство — это система

$-1 < 2x + 3 < 7$ — краткая запись «$2x + 3 > -1$ **и** $2x + 3 < 7$». Его можно решить сразу, делая один и тот же шаг со **всеми тремя** частями: вычесть 3, потом разделить на 2: $-2 < x < 2$. Если делить на отрицательное число, меняются оба знака: $-1 < -2x < 4$ даёт $\tfrac{1}{2} > x > -2$, что записывают как $-2 < x < \tfrac{1}{2}$.

### Когда решений нет и почему это важно

$x > 5$ и $x < 2$ не могут выполняться одновременно: промежутки не пересекаются. В реальной задаче пустой ответ — это информация. «Посылка должна весить больше 5 кг, чтобы ехать грузовиком, и меньше 2 кг, чтобы идти почтой» означает, что ни один способ доставки не подходит.

### Модуль как двойное неравенство

$|x - a| < r$ значит «расстояние от $x$ до $a$ меньше $r$», то есть $a - r < x < a + r$. Поэтому $|x - 3| < 2$ — это промежуток $(1; 5)$. А $|x - 3| > 2$ — **объединение** $x < 1$ или $x > 5$: задача на «или», а не система.`,
  ),

  "approximate-values": th(
    r`### Archimedes traps $\pi$ between two fractions

Around 250 BC Archimedes drew regular polygons inside and outside a circle and computed their perimeters. With 96 sides he proved

$$3\tfrac{10}{71} < \pi < 3\tfrac{1}{7}, \quad\text{that is}\quad 3.1408 < \pi < 3.1429.$$

He did not know $\pi$ exactly, and nobody ever will, because it is irrational. But he knew **how big his error could be**: less than $0.002$. That is what an approximate value is for: a number together with a guaranteed bound on its error.

### Why relative errors add when we multiply

Suppose $a$ is measured with relative error $\varepsilon_1$ and $b$ with $\varepsilon_2$, so the measured values are about $a(1 + \varepsilon_1)$ and $b(1 + \varepsilon_2)$. Then

$$a(1 + \varepsilon_1) \cdot b(1 + \varepsilon_2) = ab(1 + \varepsilon_1 + \varepsilon_2 + \varepsilon_1\varepsilon_2) \approx ab(1 + \varepsilon_1 + \varepsilon_2),$$

because $\varepsilon_1\varepsilon_2$ is tiny (two 1% errors give $0.01\%$). So when **multiplying**, the relative errors roughly **add**; the area of a square measured with a 1% error in its side has about a 2% error. When **adding**, it is the absolute errors that add.

### Why giving too many digits is a mistake

A table is measured as $1.2$ m by $0.8$ m with a ruler marked in centimetres. A calculator gives the area $0.96$ m². Writing "$0.9600$ m²" claims a precision of $0.0001$ m², one square centimetre, that the measurement never had. The rule: the answer should not have more **significant digits** than the least precise measurement.

### Eratosthenes measures the Earth

Around 240 BC Eratosthenes noticed that at noon on midsummer's day the Sun was straight overhead in Syene but $7.2°$ from the vertical in Alexandria, about 800 km to the north. $7.2°$ is $\tfrac{1}{50}$ of a full turn, so the Earth's circumference is about $50 \cdot 800 = 40\,000$ km. The true value is $40\,075$ km. A rough estimate made with care can be astonishingly good.`,
    r`### Արքիմեդը $\pi$-ն փակում է երկու կոտորակի միջև

Մոտ մ.թ.ա. 250 թվականին Արքիմեդը շրջանագծի ներսում և դրսում գծեց կանոնավոր բազմանկյուններ և հաշվեց դրանց պարագծերը։ 96 կողմով բազմանկյունով նա ապացուցեց

$$3\tfrac{10}{71} < \pi < 3\tfrac{1}{7}, \quad\text{այսինքն՝}\quad 3{,}1408 < \pi < 3{,}1429.$$

Նա չգիտեր $\pi$-ն ճշգրիտ, և ոչ ոք երբեք չի իմանա, քանի որ այն իռացիոնալ է։ Բայց նա գիտեր, թե **որքան մեծ կարող է լինել իր սխալը**՝ $0{,}002$-ից պակաս։ Ահա թե ինչի համար է մոտավոր արժեքը. թիվ՝ իր սխալի երաշխավորված սահմանով հանդերձ։

### Ինչու են հարաբերական սխալները գումարվում բազմապատկելիս

Ենթադրենք՝ $a$-ն չափվել է $\varepsilon_1$ հարաբերական սխալով, իսկ $b$-ն՝ $\varepsilon_2$-ով, ուստի չափված արժեքները մոտավորապես $a(1 + \varepsilon_1)$ և $b(1 + \varepsilon_2)$ են։ Այդ դեպքում

$$a(1 + \varepsilon_1) \cdot b(1 + \varepsilon_2) = ab(1 + \varepsilon_1 + \varepsilon_2 + \varepsilon_1\varepsilon_2) \approx ab(1 + \varepsilon_1 + \varepsilon_2),$$

քանի որ $\varepsilon_1\varepsilon_2$-ը չնչին է (երկու 1%-անոց սխալ տալիս են $0{,}01\%$)։ Ուստի **բազմապատկելիս** հարաբերական սխալները մոտավորապես **գումարվում են**. 1% սխալով չափված կողմով քառակուսու մակերեսն ունի մոտ 2% սխալ։ **Գումարելիս** գումարվում են բացարձակ սխալները։

### Ինչու է չափազանց շատ թվանշան տալը սխալ

Սեղանը սանտիմետրերով նշված քանոնով չափվել է $1{,}2$ մ-ը $0{,}8$ մ-ի վրա։ Հաշվիչը տալիս է $0{,}96$ մ² մակերես։ «$0{,}9600$ մ²» գրելը պնդում է $0{,}0001$ մ²՝ մեկ քառակուսի սանտիմետր ճշգրտություն, որը չափումը երբեք չի ունեցել։ Կանոնը. պատասխանը չպետք է ունենա ավելի շատ **նշանակալից թվանշաններ**, քան ամենաքիչ ճշգրիտ չափումը։

### Էրատոսթենեսը չափում է Երկիրը

Մոտ մ.թ.ա. 240 թվականին Էրատոսթենեսը նկատեց, որ ամառային արևադարձի կեսօրին Սիենայում Արեգակն ուղիղ գլխավերևում էր, իսկ մոտ 800 կմ հյուսիս գտնվող Ալեքսանդրիայում՝ ուղղաձիգից $7{,}2°$ շեղված։ $7{,}2°$-ը լրիվ պտույտի $\tfrac{1}{50}$-ն է, ուստի Երկրի շրջագիծը մոտ $50 \cdot 800 = 40\,000$ կմ է։ Իրական արժեքը $40\,075$ կմ է։ Խնամքով արված կոպիտ գնահատականը կարող է զարմանալիորեն լավ լինել։`,
    r`### Архимед зажимает $\pi$ между двумя дробями

Около 250 года до н. э. Архимед вписывал в окружность и описывал вокруг неё правильные многоугольники и вычислял их периметры. С 96 сторонами он доказал

$$3\tfrac{10}{71} < \pi < 3\tfrac{1}{7}, \quad\text{то есть}\quad 3{,}1408 < \pi < 3{,}1429.$$

Точного значения $\pi$ он не знал, и никто никогда не узнает, потому что оно иррационально. Но он знал, **насколько велика может быть его ошибка**: меньше $0{,}002$. Вот зачем нужно приближённое значение: число вместе с гарантированной границей погрешности.

### Почему при умножении относительные погрешности складываются

Пусть $a$ измерено с относительной погрешностью $\varepsilon_1$, а $b$ — с $\varepsilon_2$, так что измеренные значения примерно равны $a(1 + \varepsilon_1)$ и $b(1 + \varepsilon_2)$. Тогда

$$a(1 + \varepsilon_1) \cdot b(1 + \varepsilon_2) = ab(1 + \varepsilon_1 + \varepsilon_2 + \varepsilon_1\varepsilon_2) \approx ab(1 + \varepsilon_1 + \varepsilon_2),$$

потому что $\varepsilon_1\varepsilon_2$ крошечно (две погрешности по 1% дают $0{,}01\%$). Значит, при **умножении** относительные погрешности примерно **складываются**: площадь квадрата, сторона которого измерена с погрешностью 1%, имеет погрешность около 2%. При **сложении** складываются абсолютные погрешности.

### Почему слишком много цифр — ошибка

Стол измерили линейкой с сантиметровыми делениями: $1{,}2$ м на $0{,}8$ м. Калькулятор даёт площадь $0{,}96$ м². Запись «$0{,}9600$ м²» заявляет точность $0{,}0001$ м² — один квадратный сантиметр, — которой у измерения никогда не было. Правило: в ответе не должно быть больше **значащих цифр**, чем в наименее точном измерении.

### Эратосфен измеряет Землю

Около 240 года до н. э. Эратосфен заметил, что в полдень в день летнего солнцестояния Солнце в Сиене стояло прямо над головой, а в Александрии, примерно в 800 км к северу, отклонялось от вертикали на $7{,}2°$. $7{,}2°$ — это $\tfrac{1}{50}$ полного оборота, поэтому окружность Земли около $50 \cdot 800 = 40\,000$ км. Истинное значение $40\,075$ км. Грубая, но аккуратная оценка может быть поразительно точной.`,
  ),
};
