import { th } from "../kit";

const r = String.raw;

/** Algebra 7, units 1–2: expressions, identities, equations, statistics, functions. */
export const algebra7a = {
  "algebraic-expressions": th(
    r`### Three thousand years without letters

For most of history, algebra was written in **words**. A Babylonian tablet says: "I added the area and the side of my square and got 0;45. Find the side." The Greek Diophantus (3rd century) used a sign for the unknown, but no letters for given numbers. In 1591 the Frenchman **François Viète** first used letters for *both* the unknowns and the given numbers. Since then one expression describes infinitely many calculations at once.

### Why one expression is worth a thousand examples

"Think of a number, double it, add 6, halve the result and subtract the number you thought of. You get 3." Why always 3? Call the number $x$:

$$\frac{2x + 6}{2} - x = x + 3 - x = 3.$$

The letter $x$ stands for **every** number at once, so the trick is proved for all of them, not just for the ones we tried.

### Where an expression makes sense, and why

An expression has a value only when every operation in it can be done. The only forbidden operation so far is **division by zero**. Why is it forbidden? Dividing $6$ by $2$ means finding the number that gives $6$ when multiplied by $2$. For $6 : 0$ we would need a number that gives $6$ when multiplied by $0$, and there is none, since anything times $0$ is $0$. For $0 : 0$ *every* number would do, so the answer would not be one number. Either way, division by zero has no single answer.

### A common mistake

$\dfrac{5}{x - 3}$ makes no sense at $x = 3$, but $\dfrac{x - 3}{5}$ is fine there: it equals $0$. Look at the **denominator**, not at the numerator.`,
    r`### Երեք հազար տարի՝ առանց տառերի

Պատմության մեծ մասում հանրահաշիվը գրվում էր **բառերով**։ Բաբելոնյան սալիկի վրա գրված է. «Քառակուսուս մակերեսը և կողմը գումարեցի, ստացա 0;45։ Գտիր կողմը»։ Հույն Դիոֆանտը (III դար) անհայտի համար նշան էր օգտագործում, բայց տրված թվերի համար տառեր չուներ։ 1591 թվականին ֆրանսիացի **Ֆրանսուա Վիետն** առաջինը տառերով նշանակեց և՛ անհայտները, և՛ տրված թվերը։ Այդ ժամանակից ի վեր մեկ արտահայտությունը միանգամից նկարագրում է անվերջ շատ հաշվարկներ։

### Ինչու է մեկ արտահայտությունն արժե հազար օրինակ

«Մտապահիր թիվ, կրկնապատկիր, գումարիր 6, արդյունքը կիսիր և հանիր մտապահած թիվը։ Կստանաս 3»։ Ինչո՞ւ միշտ 3։ Թիվը նշանակենք $x$-ով.

$$\frac{2x + 6}{2} - x = x + 3 - x = 3.$$

$x$ տառը միանգամից նշանակում է **ցանկացած** թիվ, ուստի հնարքն ապացուցված է բոլոր թվերի համար, ոչ միայն փորձածների։

### Որտեղ է արտահայտությունն իմաստ ունենում և ինչու

Արտահայտությունն արժեք ունի միայն այն դեպքում, երբ նրա բոլոր գործողությունները կատարելի են։ Առայժմ միակ արգելված գործողությունը **զրոյի վրա բաժանումն** է։ Ինչո՞ւ է այն արգելված։ $6$-ը $2$-ի բաժանել նշանակում է գտնել այն թիվը, որը $2$-ով բազմապատկելիս տալիս է $6$։ $6 : 0$-ի համար պետք կլիներ թիվ, որը $0$-ով բազմապատկելիս տա $6$, բայց այդպիսին չկա, քանի որ ցանկացած թիվ անգամ $0$ հավասար է $0$-ի։ $0 : 0$-ի համար կհամապատասխաներ *ցանկացած* թիվ, ուստի պատասխանը մեկ թիվ չէր լինի։ Երկու դեպքում էլ զրոյի վրա բաժանումը միակ պատասխան չունի։

### Հաճախ հանդիպող սխալ

$\dfrac{5}{x - 3}$-ն իմաստ չունի $x = 3$-ի դեպքում, իսկ $\dfrac{x - 3}{5}$-ը այնտեղ լիովին իմաստալից է՝ հավասար է $0$-ի։ Նայիր **հայտարարին**, ոչ թե համարիչին։`,
    r`### Три тысячи лет без букв

Большую часть истории алгебру записывали **словами**. На вавилонской табличке написано: «Я сложил площадь и сторону своего квадрата и получил 0;45. Найди сторону». Грек Диофант (III век) использовал знак для неизвестного, но букв для данных чисел у него не было. В 1591 году француз **Франсуа Виет** впервые обозначил буквами и неизвестные, и данные числа. С тех пор одно выражение описывает сразу бесконечно много вычислений.

### Почему одно выражение стоит тысячи примеров

«Задумай число, удвой его, прибавь 6, раздели результат пополам и вычти задуманное число. Получится 3». Почему всегда 3? Обозначим число через $x$:

$$\frac{2x + 6}{2} - x = x + 3 - x = 3.$$

Буква $x$ означает **любое** число сразу, поэтому фокус доказан для всех чисел, а не только для тех, что мы попробовали.

### Где выражение имеет смысл и почему

Выражение имеет значение, только если все его действия выполнимы. Пока единственное запрещённое действие — **деление на ноль**. Почему оно запрещено? Разделить $6$ на $2$ — значит найти число, которое при умножении на $2$ даёт $6$. Для $6 : 0$ нужно было бы число, дающее $6$ при умножении на $0$, а такого нет: любое число, умноженное на $0$, равно $0$. Для $0 : 0$ подошло бы *любое* число, и ответ не был бы одним числом. В обоих случаях у деления на ноль нет единственного ответа.

### Частая ошибка

$\dfrac{5}{x - 3}$ не имеет смысла при $x = 3$, а $\dfrac{x - 3}{5}$ там вполне определено и равно $0$. Смотри на **знаменатель**, а не на числитель.`,
  ),

  identities: th(
    r`### Where the laws of operations come from

The commutative, associative and distributive laws are not proved in school algebra: they are the **starting rules** (axioms) of the game. Each one can be *seen*, though.

- $ab = ba$: a rectangle of $a$ rows and $b$ columns holds the same number of squares as one of $b$ rows and $a$ columns: turn it on its side.
- $a(b + c) = ab + ac$: a rectangle $a$ by $b + c$ cuts into two rectangles, $a$ by $b$ and $a$ by $c$.

Every identical transformation is a chain of these few laws. That is why the result is equal to the original for **every** value of the letters.

### Why one checked value proves nothing, and one counterexample proves a lot

An identity is a claim about *all* values. Ten successful checks are still only ten values. But one failure is enough to destroy the claim. $n^2 + n + 41$ is a prime number for $n = 0, 1, 2, \dots, 39$: forty checks in a row! At $n = 40$ it is $40^2 + 40 + 41 = 41^2$, not prime.

### A famous false proof

Let $a = b$. Then $a^2 = ab$, so $a^2 - b^2 = ab - b^2$, that is $(a - b)(a + b) = b(a - b)$. Divide by $a - b$: $a + b = b$, so $2b = b$ and $2 = 1$.

Where is the mistake? Since $a = b$, the factor $a - b$ is **zero**, and we divided by zero. Every other step was a correct identical transformation. Lesson: dividing both sides by an expression is allowed only when that expression is not zero.

### A useful check

If two expressions are identically equal, they must agree at **any** number you pick. So substitute a "random" value such as $x = 2$: if the two sides differ, there is a mistake for sure. If they agree, the transformation is probably right.`,
    r`### Որտեղից են գործողությունների օրենքները

Տեղափոխական, զուգորդական և բաշխական օրենքները դպրոցական հանրահաշվում չեն ապացուցվում. դրանք խաղի **ելակետային կանոններն** են (աքսիոմներ)։ Սակայն յուրաքանչյուրը կարելի է *տեսնել*։

- $ab = ba$. $a$ տող և $b$ սյուն ունեցող ուղղանկյունում նույնքան քառակուսի կա, որքան $b$ տող և $a$ սյուն ունեցողում. պարզապես շրջիր այն։
- $a(b + c) = ab + ac$. $a$-ն $b + c$-ի վրա ուղղանկյունը բաժանվում է երկու ուղղանկյան՝ $a$-ն $b$-ի վրա և $a$-ն $c$-ի վրա։

Ամեն նույնական ձևափոխություն այս մի քանի օրենքների շղթա է։ Ահա թե ինչու արդյունքը հավասար է սկզբնականին տառերի **ցանկացած** արժեքի դեպքում։

### Ինչու մեկ ստուգված արժեքը ոչինչ չի ապացուցում, իսկ մեկ հակաօրինակը շատ բան է ապացուցում

Նույնությունը պնդում է *բոլոր* արժեքների մասին։ Տասը հաջող ստուգումն էլ ընդամենը տասն արժեք է։ Բայց մեկ ձախողումը բավական է պնդումը տապալելու համար։ $n^2 + n + 41$-ը պարզ թիվ է $n = 0, 1, 2, \dots, 39$-ի դեպքում՝ անընդմեջ քառասուն ստուգում։ $n = 40$-ի դեպքում այն $40^2 + 40 + 41 = 41^2$ է, պարզ չէ։

### Հայտնի կեղծ ապացույց

Դիցուք $a = b$։ Այդ դեպքում $a^2 = ab$, ուստի $a^2 - b^2 = ab - b^2$, այսինքն՝ $(a - b)(a + b) = b(a - b)$։ Բաժանենք $a - b$-ի. $a + b = b$, ուրեմն $2b = b$ և $2 = 1$։

Որտե՞ղ է սխալը։ Քանի որ $a = b$, $a - b$ արտադրիչը **զրո** է, և մենք բաժանեցինք զրոյի։ Մնացած բոլոր քայլերը ճիշտ նույնական ձևափոխություններ էին։ Դաս. երկու մասերը արտահայտության վրա բաժանել կարելի է միայն այն դեպքում, երբ այդ արտահայտությունը զրո չէ։

### Օգտակար ստուգում

Եթե երկու արտահայտություն նույնաբար հավասար են, դրանք պետք է համընկնեն **ցանկացած** ընտրած թվի դեպքում։ Ուստի տեղադրիր «պատահական» արժեք, օրինակ՝ $x = 2$. եթե երկու մասերը տարբեր են, սխալն անկասկած կա։ Եթե համընկնում են, ձևափոխությունը, հավանաբար, ճիշտ է։`,
    r`### Откуда берутся законы действий

Переместительный, сочетательный и распределительный законы в школьной алгебре не доказывают: это **исходные правила** игры (аксиомы). Но каждый из них можно *увидеть*.

- $ab = ba$: в прямоугольнике из $a$ рядов и $b$ столбцов столько же клеток, сколько в прямоугольнике из $b$ рядов и $a$ столбцов — просто поверни его.
- $a(b + c) = ab + ac$: прямоугольник $a$ на $b + c$ разрезается на два прямоугольника: $a$ на $b$ и $a$ на $c$.

Любое тождественное преобразование — цепочка этих немногих законов. Поэтому результат равен исходному выражению при **любых** значениях букв.

### Почему одна проверка ничего не доказывает, а один контрпример доказывает многое

Тождество — утверждение обо *всех* значениях. Десять удачных проверок — это всего десять значений. Но одного провала достаточно, чтобы утверждение рухнуло. $n^2 + n + 41$ — простое число при $n = 0, 1, 2, \dots, 39$: сорок проверок подряд! При $n = 40$ получается $40^2 + 40 + 41 = 41^2$ — не простое.

### Знаменитое ложное доказательство

Пусть $a = b$. Тогда $a^2 = ab$, значит, $a^2 - b^2 = ab - b^2$, то есть $(a - b)(a + b) = b(a - b)$. Разделим на $a - b$: $a + b = b$, откуда $2b = b$ и $2 = 1$.

Где ошибка? Раз $a = b$, множитель $a - b$ равен **нулю**, и мы разделили на ноль. Все остальные шаги были правильными тождественными преобразованиями. Вывод: делить обе части на выражение можно, только если оно не равно нулю.

### Полезная проверка

Если два выражения тождественно равны, они совпадают при **любом** выбранном числе. Подставь «случайное» значение, например $x = 2$: если части различаются, ошибка точно есть. Если совпадают, преобразование, скорее всего, верно.`,
  ),

  formulas: th(
    r`### Gauss and the sum 1 + 2 + … + 100

A famous story says that young Carl Friedrich Gauss, aged about nine, was told to add all the numbers from 1 to 100. He answered in a minute. Write the sum twice, once forwards and once backwards:

$$S = 1 + 2 + \dots + 99 + 100,\qquad S = 100 + 99 + \dots + 2 + 1.$$

Each column adds up to $101$, and there are $100$ columns, so $2S = 100 \cdot 101$ and $S = 5050$. With a letter instead of 100 the same argument gives a **formula** for any $n$:

$$1 + 2 + \dots + n = \frac{n(n + 1)}{2}.$$

This is what a formula is for: one argument, done once, answers every question of that kind.

### Units must match on both sides

A formula is an equality of **quantities**, so both sides must be measured in the same units. In $s = vt$: km/h times h gives km. If you ever get "metres = seconds", the formula is wrong. Physicists check every new formula this way first.

The same idea catches mistakes in turning a formula around. From $s = vt$ someone writes $t = v : s$. Units: (km/h) : km = 1/h, not hours. So the correct form must be $t = s : v$.

### Expressing a variable is solving an equation

To get $C$ from $F = 1.8C + 32$, treat $F$ as a known number and $C$ as the unknown: subtract 32, then divide by 1.8. Every step must be allowed: you may divide by $1.8$ because it is not zero. If you express $a$ from $S = ab$ as $a = \dfrac{S}{b}$, you are assuming $b \ne 0$, which is true for a rectangle.`,
    r`### Գաուսը և 1 + 2 + … + 100 գումարը

Հայտնի պատմություն կա. մոտ ինը տարեկան Կառլ Ֆրիդրիխ Գաուսին հանձնարարեցին գումարել 1-ից 100 բոլոր թվերը։ Նա պատասխանեց մեկ րոպեում։ Գումարը գրենք երկու անգամ՝ մեկ ուղիղ, մեկ հակառակ կարգով.

$$S = 1 + 2 + \dots + 99 + 100,\qquad S = 100 + 99 + \dots + 2 + 1.$$

Յուրաքանչյուր սյան գումարը $101$ է, և սյուները $100$-ն են, ուստի $2S = 100 \cdot 101$ և $S = 5050$։ 100-ի փոխարեն տառ վերցնելով՝ նույն դատողությունը տալիս է **բանաձև** ցանկացած $n$-ի համար.

$$1 + 2 + \dots + n = \frac{n(n + 1)}{2}.$$

Ահա թե ինչի համար է բանաձևը. մեկ անգամ արված մեկ դատողությունը պատասխանում է այդ տեսակի բոլոր հարցերին։

### Երկու մասերի միավորները պետք է համընկնեն

Բանաձևը **մեծությունների** հավասարություն է, ուստի երկու մասերը պետք է չափվեն նույն միավորներով։ $s = vt$-ում կմ/ժ անգամ ժ տալիս է կմ։ Եթե երբևէ ստացար «մետր = վայրկյան», բանաձևը սխալ է։ Ֆիզիկոսներն ամեն նոր բանաձև նախ այսպես են ստուգում։

Նույն միտքը բռնում է բանաձևը «շրջելիս» թույլ տրված սխալները։ $s = vt$-ից ինչ-որ մեկը գրում է $t = v : s$։ Միավորները՝ (կմ/ժ) : կմ = 1/ժ, ոչ թե ժամ։ Ուրեմն ճիշտ տեսքը պետք է լինի $t = s : v$։

### Փոփոխականն արտահայտելը հավասարում լուծել է

$F = 1{,}8C + 32$-ից $C$-ն ստանալու համար $F$-ը համարիր հայտնի թիվ, իսկ $C$-ն՝ անհայտ. հանիր 32, ապա բաժանիր 1,8-ի։ Ամեն քայլ պետք է թույլատրելի լինի. $1{,}8$-ի բաժանել կարելի է, քանի որ այն զրո չէ։ Եթե $S = ab$-ից $a$-ն արտահայտում ես $a = \dfrac{S}{b}$ տեսքով, ենթադրում ես, որ $b \ne 0$, ինչը ճիշտ է ուղղանկյան համար։`,
    r`### Гаусс и сумма 1 + 2 + … + 100

Есть знаменитая история: маленькому Карлу Фридриху Гауссу, которому было около девяти лет, велели сложить все числа от 1 до 100. Он ответил через минуту. Запишем сумму дважды — в прямом и обратном порядке:

$$S = 1 + 2 + \dots + 99 + 100,\qquad S = 100 + 99 + \dots + 2 + 1.$$

Сумма в каждом столбце равна $101$, а столбцов $100$, поэтому $2S = 100 \cdot 101$ и $S = 5050$. Если вместо 100 взять букву, то же рассуждение даёт **формулу** для любого $n$:

$$1 + 2 + \dots + n = \frac{n(n + 1)}{2}.$$

Вот для чего нужна формула: одно рассуждение, проведённое один раз, отвечает на все вопросы такого рода.

### Единицы в обеих частях должны совпадать

Формула — это равенство **величин**, поэтому обе части измеряются в одних единицах. В $s = vt$: км/ч умножить на ч — получаются км. Если когда-нибудь вышло «метры = секунды», формула неверна. Физики первым делом проверяют так каждую новую формулу.

Та же идея ловит ошибки при «переворачивании» формулы. Из $s = vt$ кто-то пишет $t = v : s$. Единицы: (км/ч) : км = 1/ч, а не часы. Значит, верно $t = s : v$.

### Выразить переменную — значит решить уравнение

Чтобы получить $C$ из $F = 1{,}8C + 32$, считай $F$ известным числом, а $C$ — неизвестным: вычти 32, потом раздели на 1,8. Каждый шаг должен быть допустим: на $1{,}8$ делить можно, потому что это не ноль. Выражая $a$ из $S = ab$ как $a = \dfrac{S}{b}$, ты предполагаешь, что $b \ne 0$, — для прямоугольника это верно.`,
  ),

  "equation-and-roots": th(
    r`### Why the allowed steps keep the roots

Two transformations are used to solve equations:

1. add the same number (or expression) to both sides;
2. multiply or divide both sides by the same **non-zero** number.

Why do they not change the roots? Take step 1. If $x_0$ makes $A = B$ true, then $A + c = B + c$ is true too. And back: if $A + c = B + c$, subtract $c$ and get $A = B$. Every root of the old equation is a root of the new one, and every root of the new one is a root of the old. So the equations are **equivalent**. Step 2 works the same way, but going back needs division by the number, so the number must not be zero.

### What goes wrong with other steps

- **Multiplying by zero** turns any equation into $0 = 0$, which every number satisfies. Extra "roots" appear.
- **Dividing by an expression with $x$** can lose a root. $x^2 = 3x$; divide by $x$: $x = 3$. But $x = 0$ is also a root, and it was lost, because at $x = 0$ we divided by zero. Safer: $x^2 - 3x = 0$, $x(x - 3) = 0$, so $x = 0$ or $x = 3$.
- **Squaring both sides** can add roots. $x = 2$ has one root; $x^2 = 4$ has two, $2$ and $-2$.

### Why we check roots

When every step is an equivalent transformation, the answer is guaranteed. But a slip in arithmetic is always possible, and in later topics some useful steps are *not* equivalent. Putting the answer back into the **original** equation is the only check that does not depend on the steps you took.`,
    r`### Ինչու թույլատրելի քայլերը պահպանում են արմատները

Հավասարումներ լուծելիս օգտագործում են երկու ձևափոխություն.

1. երկու մասերին գումարել նույն թիվը (կամ արտահայտությունը).
2. երկու մասերը բազմապատկել կամ բաժանել նույն **զրոյից տարբեր** թվի։

Ինչո՞ւ դրանք չեն փոխում արմատները։ Վերցնենք 1-ին քայլը։ Եթե $x_0$-ն $A = B$-ն դարձնում է ճիշտ, ապա ճիշտ է նաև $A + c = B + c$-ն։ Եվ հակառակը. եթե $A + c = B + c$, հանենք $c$ և կստանանք $A = B$։ Հին հավասարման յուրաքանչյուր արմատ նորի արմատ է, և նորի յուրաքանչյուր արմատ՝ հնի։ Ուստի հավասարումները **համարժեք** են։ 2-րդ քայլն աշխատում է նույն կերպ, բայց հետ վերադառնալու համար պետք է բաժանել այդ թվի վրա, ուստի այն չպետք է զրո լինի։

### Ինչ է սխալ գնում այլ քայլերի դեպքում

- **Զրոյով բազմապատկելը** ցանկացած հավասարում դարձնում է $0 = 0$, որին բավարարում է ցանկացած թիվ։ Հայտնվում են ավելորդ «արմատներ»։
- **$x$ պարունակող արտահայտության վրա բաժանելը** կարող է կորցնել արմատը։ $x^2 = 3x$. բաժանենք $x$-ի՝ $x = 3$։ Բայց $x = 0$-ն էլ է արմատ, և այն կորավ, քանի որ $x = 0$-ի դեպքում մենք բաժանեցինք զրոյի։ Ավելի ապահով է՝ $x^2 - 3x = 0$, $x(x - 3) = 0$, ուրեմն $x = 0$ կամ $x = 3$։
- **Երկու մասերը քառակուսի բարձրացնելը** կարող է արմատներ ավելացնել։ $x = 2$-ն ունի մեկ արմատ, $x^2 = 4$-ը՝ երկու՝ $2$ և $-2$։

### Ինչու ենք ստուգում արմատները

Երբ ամեն քայլ համարժեք ձևափոխություն է, պատասխանը երաշխավորված է։ Բայց թվաբանական վրիպակ միշտ հնարավոր է, իսկ հետագա թեմաներում որոշ օգտակար քայլեր համարժեք *չեն*։ Պատասխանը **սկզբնական** հավասարման մեջ տեղադրելը միակ ստուգումն է, որը կախված չէ քո արած քայլերից։`,
    r`### Почему разрешённые шаги сохраняют корни

При решении уравнений используют два преобразования:

1. прибавить к обеим частям одно и то же число (или выражение);
2. умножить или разделить обе части на одно и то же **отличное от нуля** число.

Почему они не меняют корней? Возьмём шаг 1. Если $x_0$ делает $A = B$ верным, то верно и $A + c = B + c$. И обратно: если $A + c = B + c$, вычтем $c$ и получим $A = B$. Каждый корень старого уравнения — корень нового, и каждый корень нового — корень старого. Значит, уравнения **равносильны**. Шаг 2 работает так же, но чтобы вернуться назад, нужно разделить на это число, поэтому оно не должно быть нулём.

### Что ломается при других шагах

- **Умножение на ноль** превращает любое уравнение в $0 = 0$, которому удовлетворяет любое число. Появляются лишние «корни».
- **Деление на выражение с $x$** может потерять корень. $x^2 = 3x$; разделим на $x$: $x = 3$. Но $x = 0$ — тоже корень, и он потерян, потому что при $x = 0$ мы делили на ноль. Надёжнее: $x^2 - 3x = 0$, $x(x - 3) = 0$, значит, $x = 0$ или $x = 3$.
- **Возведение обеих частей в квадрат** может добавить корни. У $x = 2$ один корень, а у $x^2 = 4$ — два: $2$ и $-2$.

### Зачем проверять корни

Если каждый шаг — равносильное преобразование, ответ гарантирован. Но арифметическая описка возможна всегда, а в следующих темах некоторые полезные шаги равносильными *не* являются. Подстановка ответа в **исходное** уравнение — единственная проверка, которая не зависит от сделанных шагов.`,
  ),

  "linear-equation": th(
    r`### Why there are exactly three cases

Every linear equation can be brought to $ax = b$. Then:

- $a \ne 0$: divide by $a$, $x = \dfrac{b}{a}$. **Exactly one** root. Why not two? If $ax_1 = b$ and $ax_2 = b$, then $a(x_1 - x_2) = 0$, and since $a \ne 0$, $x_1 = x_2$.
- $a = 0$, $b = 0$: the equation reads $0 \cdot x = 0$, true for **every** $x$.
- $a = 0$, $b \ne 0$: $0 \cdot x = b$ is false for every $x$: **no roots**.

There is no fourth possibility. So a linear equation never has exactly two or exactly five roots.

### "Al-jabr": where the word algebra comes from

Around 820 the Baghdad scholar **Muhammad al-Khwarizmi** wrote a book on "al-jabr and al-muqabala". **Al-jabr** means "restoring": moving a subtracted term to the other side, where it becomes added. **Al-muqabala** means "balancing": cancelling equal terms on both sides. In $5x - 7 = 2x + 8$, al-jabr gives $5x = 2x + 15$, and al-muqabala gives $3x = 15$. The first word became the name of the whole subject, and the author's name became the word **algorithm**.

### Egypt: the method of false position

The Rhind papyrus (about 1650 BC) solves "a quantity and its seventh make 19". The scribe guesses $7$: $7 + 1 = 8$, not 19. The answer must be $\dfrac{19}{8}$ times bigger: $7 \cdot \dfrac{19}{8} = 16\tfrac{5}{8}$. Why does this work? In $x + \dfrac{x}{7} = 19$ the left side is **proportional** to $x$: doubling $x$ doubles it. So any guess can be scaled to the right answer. This only works for equations of the form $ax = b$, which is exactly what makes them simple.`,
    r`### Ինչու կա ճիշտ երեք դեպք

Ցանկացած գծային հավասարում կարելի է բերել $ax = b$ տեսքի։ Այդ դեպքում.

- $a \ne 0$. բաժանենք $a$-ի՝ $x = \dfrac{b}{a}$։ **Ճիշտ մեկ** արմատ։ Ինչո՞ւ ոչ երկու։ Եթե $ax_1 = b$ և $ax_2 = b$, ապա $a(x_1 - x_2) = 0$, և քանի որ $a \ne 0$, $x_1 = x_2$։
- $a = 0$, $b = 0$. հավասարումը դառնում է $0 \cdot x = 0$, որը ճիշտ է **ցանկացած** $x$-ի դեպքում։
- $a = 0$, $b \ne 0$. $0 \cdot x = b$-ն սխալ է ցանկացած $x$-ի դեպքում. **արմատներ չկան**։

Չորրորդ հնարավորություն չկա։ Ուստի գծային հավասարումը երբեք ճիշտ երկու կամ ճիշտ հինգ արմատ չի ունենում։

### «Ալ-ջաբր». որտեղից է «ալգեբրա» բառը

Մոտ 820 թվականին բաղդադցի գիտնական **Մուհամմադ ալ-Խորեզմին** գիրք գրեց «ալ-ջաբրի և ալ-մուկաբալայի» մասին։ **Ալ-ջաբր** նշանակում է «վերականգնում». հանվող անդամը տեղափոխել մյուս մաս, որտեղ այն դառնում է գումարվող։ **Ալ-մուկաբալա** նշանակում է «հավասարակշռում». կրճատել երկու մասերի հավասար անդամները։ $5x - 7 = 2x + 8$-ում ալ-ջաբրը տալիս է $5x = 2x + 15$, իսկ ալ-մուկաբալան՝ $3x = 15$։ Առաջին բառը դարձավ ամբողջ առարկայի անունը եվրոպական լեզուներում (algebra), իսկ հեղինակի անունից ծագեց **ալգորիթմ** բառը։

### Եգիպտոս. սխալ ենթադրության եղանակը

Ռինդի պապիրուսը (մոտ մ.թ.ա. 1650) լուծում է «մեծությունը և նրա յոթերորդ մասը միասին 19 են» խնդիրը։ Դպիրը ենթադրում է $7$. $7 + 1 = 8$, ոչ թե 19։ Պատասխանը պետք է $\dfrac{19}{8}$ անգամ մեծ լինի՝ $7 \cdot \dfrac{19}{8} = 16\tfrac{5}{8}$։ Ինչո՞ւ է սա աշխատում։ $x + \dfrac{x}{7} = 19$-ում ձախ մասը **համեմատական** է $x$-ին. $x$-ը կրկնապատկելիս այն էլ է կրկնապատկվում։ Ուստի ցանկացած ենթադրություն կարելի է մասշտաբավորել մինչև ճիշտ պատասխան։ Սա աշխատում է միայն $ax = b$ տեսքի հավասարումների համար, և հենց դա է դրանք պարզ դարձնում։`,
    r`### Почему случаев ровно три

Любое линейное уравнение приводится к виду $ax = b$. Тогда:

- $a \ne 0$: делим на $a$, $x = \dfrac{b}{a}$. **Ровно один** корень. Почему не два? Если $ax_1 = b$ и $ax_2 = b$, то $a(x_1 - x_2) = 0$, а раз $a \ne 0$, то $x_1 = x_2$.
- $a = 0$, $b = 0$: уравнение имеет вид $0 \cdot x = 0$ и верно при **любом** $x$.
- $a = 0$, $b \ne 0$: $0 \cdot x = b$ неверно ни при каком $x$ — **корней нет**.

Четвёртой возможности нет. Поэтому у линейного уравнения никогда не бывает ровно двух или ровно пяти корней.

### «Аль-джабр»: откуда слово «алгебра»

Около 820 года багдадский учёный **Мухаммад аль-Хорезми** написал книгу об «аль-джабре и аль-мукабале». **Аль-джабр** означает «восполнение»: перенос вычитаемого члена в другую часть, где он становится слагаемым. **Аль-мукабала** — «противопоставление»: сокращение равных членов в обеих частях. В $5x - 7 = 2x + 8$ аль-джабр даёт $5x = 2x + 15$, а аль-мукабала — $3x = 15$. Первое слово стало названием всей науки, а из имени автора возникло слово **алгоритм**.

### Египет: метод ложного положения

В папирусе Ринда (около 1650 г. до н. э.) решается задача «количество и его седьмая часть вместе дают 19». Писец пробует $7$: $7 + 1 = 8$, а не 19. Ответ должен быть в $\dfrac{19}{8}$ раза больше: $7 \cdot \dfrac{19}{8} = 16\tfrac{5}{8}$. Почему это работает? В $x + \dfrac{x}{7} = 19$ левая часть **пропорциональна** $x$: если удвоить $x$, она удвоится. Поэтому любую пробу можно пересчитать в верный ответ. Так можно решать только уравнения вида $ax = b$ — именно это и делает их простыми.`,
  ),

  "equations-with-brackets": th(
    r`### Why multiplying by the common denominator is safe

In $\dfrac{x}{2} + \dfrac{x}{3} = 5$ we multiply both sides by $6$ and get $3x + 2x = 30$. This is step 2 of the equivalent transformations: multiplying by a **non-zero number**. So no root is lost and none is added. Choose the **least** common denominator: with 12 instead of 6 the answer is the same, only the numbers are bigger.

The distributive law is what lets us multiply *every* term: $6\left(\dfrac{x}{2} + \dfrac{x}{3}\right) = 6 \cdot \dfrac{x}{2} + 6 \cdot \dfrac{x}{3}$.

### The fraction bar is a bracket

$\dfrac{x - 1}{3}$ means $(x - 1) : 3$. The bar groups the whole numerator, like a bracket. That matters when there is a minus in front:

$$\frac{x}{2} - \frac{x - 1}{3} = 1 \quad\Rightarrow\quad 3x - 2(x - 1) = 6 \quad\Rightarrow\quad 3x - 2x + 2 = 6,\ x = 4.$$

The common slip is to write $3x - 2x - 1 = 6$, forgetting that the minus applies to the whole numerator. Keeping the bracket after multiplying prevents it.

### The three most frequent mistakes

1. **Multiplying only some terms.** From $\dfrac{x}{3} + 1 = x$, writing $x + 1 = 3x$ forgets to multiply the $1$. Correct: $x + 3 = 3x$.
2. **Losing a sign at a bracket.** $5 - (2x - 3) = 5 - 2x + 3$, not $5 - 2x - 3$.
3. **Dividing instead of subtracting.** From $2x + 6 = 10$ some write $x + 6 = 5$. Dividing must apply to *every* term: $x + 3 = 5$.

Each of these breaks the rule "do the same to the **whole** of both sides".`,
    r`### Ինչու է ընդհանուր հայտարարով բազմապատկելն անվտանգ

$\dfrac{x}{2} + \dfrac{x}{3} = 5$-ում երկու մասերը բազմապատկում ենք $6$-ով և ստանում $3x + 2x = 30$։ Սա համարժեք ձևափոխությունների 2-րդ քայլն է՝ բազմապատկում **զրոյից տարբեր թվով**։ Ուստի ոչ մի արմատ չի կորչում և ոչ մեկը չի ավելանում։ Ընտրիր **ամենափոքր** ընդհանուր հայտարարը. 6-ի փոխարեն 12-ով պատասխանը նույնն է, պարզապես թվերն են մեծ։

Բաշխական օրենքն է թույլ տալիս բազմապատկել *յուրաքանչյուր* անդամը. $6\left(\dfrac{x}{2} + \dfrac{x}{3}\right) = 6 \cdot \dfrac{x}{2} + 6 \cdot \dfrac{x}{3}$։

### Կոտորակի գիծը փակագիծ է

$\dfrac{x - 1}{3}$ նշանակում է $(x - 1) : 3$։ Գիծը միավորում է ամբողջ համարիչը, ինչպես փակագիծը։ Դա կարևոր է, երբ դիմացը մինուս կա.

$$\frac{x}{2} - \frac{x - 1}{3} = 1 \quad\Rightarrow\quad 3x - 2(x - 1) = 6 \quad\Rightarrow\quad 3x - 2x + 2 = 6,\ x = 4.$$

Հաճախ հանդիպող վրիպակը $3x - 2x - 1 = 6$ գրելն է. մոռանում են, որ մինուսը վերաբերում է ամբողջ համարիչին։ Բազմապատկելուց հետո փակագիծը պահելն օգնում է խուսափել դրանից։

### Երեք ամենահաճախ սխալները

1. **Միայն որոշ անդամներ բազմապատկելը։** $\dfrac{x}{3} + 1 = x$-ից $x + 1 = 3x$ գրելիս մոռանում են բազմապատկել $1$-ը։ Ճիշտ է՝ $x + 3 = 3x$։
2. **Փակագծի մոտ նշանը կորցնելը։** $5 - (2x - 3) = 5 - 2x + 3$, ոչ թե $5 - 2x - 3$։
3. **Հանելու փոխարեն բաժանելը։** $2x + 6 = 10$-ից ոմանք գրում են $x + 6 = 5$։ Բաժանումը պետք է վերաբերի *յուրաքանչյուր* անդամին՝ $x + 3 = 5$։

Այս սխալներից յուրաքանչյուրը խախտում է «երկու մասերի **ամբողջ** պարունակության հետ արա նույնը» կանոնը։`,
    r`### Почему умножать на общий знаменатель безопасно

В $\dfrac{x}{2} + \dfrac{x}{3} = 5$ мы умножаем обе части на $6$ и получаем $3x + 2x = 30$. Это шаг 2 равносильных преобразований: умножение на **отличное от нуля число**. Поэтому ни один корень не теряется и не появляется. Бери **наименьший** общий знаменатель: с 12 вместо 6 ответ тот же, просто числа крупнее.

Именно распределительный закон позволяет умножить *каждый* член: $6\left(\dfrac{x}{2} + \dfrac{x}{3}\right) = 6 \cdot \dfrac{x}{2} + 6 \cdot \dfrac{x}{3}$.

### Черта дроби — это скобка

$\dfrac{x - 1}{3}$ означает $(x - 1) : 3$. Черта объединяет весь числитель, как скобка. Это важно, когда перед дробью стоит минус:

$$\frac{x}{2} - \frac{x - 1}{3} = 1 \quad\Rightarrow\quad 3x - 2(x - 1) = 6 \quad\Rightarrow\quad 3x - 2x + 2 = 6,\ x = 4.$$

Частая описка — написать $3x - 2x - 1 = 6$, забыв, что минус относится ко всему числителю. Если после умножения сохранить скобку, ошибки не будет.

### Три самые частые ошибки

1. **Умножают не все члены.** Из $\dfrac{x}{3} + 1 = x$ пишут $x + 1 = 3x$ и забывают умножить $1$. Верно: $x + 3 = 3x$.
2. **Теряют знак у скобки.** $5 - (2x - 3) = 5 - 2x + 3$, а не $5 - 2x - 3$.
3. **Делят вместо вычитания.** Из $2x + 6 = 10$ некоторые пишут $x + 6 = 5$. Делить нужно *каждый* член: $x + 3 = 5$.

Каждая из этих ошибок нарушает правило «делай одно и то же со **всей** левой и всей правой частью».`,
  ),

  "problems-via-equations": th(
    r`### What "making a model" means

Solving a word problem has three stages, and only the middle one is algebra:

1. **Translate:** turn the words into an equation. Here the choices are yours: what $x$ is, which fact becomes the equation.
2. **Solve:** this part is mechanical.
3. **Interpret:** turn the number back into words and check it against the **story**.

Most mistakes happen in stage 1 or 3, not in stage 2. A useful habit: before writing the equation, write each quantity in terms of $x$ in a list or a table.

### Diophantus's epitaph

A puzzle from an old Greek collection describes the life of Diophantus: "His boyhood lasted a sixth of his life; after a twelfth more his beard grew; after a seventh more he married; five years later a son was born. The son lived half as long as his father, and the father died four years after the son." With $x$ for his age:

$$\frac{x}{6} + \frac{x}{12} + \frac{x}{7} + 5 + \frac{x}{2} + 4 = x.$$

Multiply by 84: $14x + 7x + 12x + 420 + 42x + 336 = 84x$, so $75x + 756 = 84x$ and $x = 84$. Check against the story: boyhood 14 years, beard at 21, married at 33, son at 38, the son lived 42 years, the father died at $80 + 4 = 84$. Everything fits.

### Why the check must use the words

Suppose you mistranslated "half as long as his father" as "half as long as the time left". The equation is wrong, but your solution of it may be perfect, and putting $x$ back into *that* equation will say "correct". Only checking against the original text catches a translation error.

### When a problem has no sensible answer

Sometimes the equation gives $x = -3$ or $x = 2.5$ for a number of people. That is not a failure of algebra: it tells you either the problem has no solution or the model is wrong.`,
    r`### Ինչ է նշանակում «մոդել կազմել»

Տեքստային խնդրի լուծումն ունի երեք փուլ, և դրանցից միայն միջինն է հանրահաշիվ.

1. **Թարգմանել.** բառերը վերածել հավասարման։ Այստեղ ընտրությունը քոնն է՝ ինչ է $x$-ը, ո՛ր փաստն է դառնում հավասարում։
2. **Լուծել.** այս մասը մեխանիկական է։
3. **Մեկնաբանել.** թիվը նորից վերածել բառերի և ստուգել **պատմությամբ**։

Սխալների մեծ մասը լինում է 1-ին կամ 3-րդ փուլում, ոչ թե 2-րդում։ Օգտակար սովորություն. հավասարումը գրելուց առաջ յուրաքանչյուր մեծություն գրիր $x$-ով՝ ցուցակով կամ աղյուսակով։

### Դիոֆանտի տապանագիրը

Հին հունական ժողովածուի մի հանելուկ նկարագրում է Դիոֆանտի կյանքը. «Նրա մանկությունը տևեց կյանքի վեցերորդ մասը, ևս տասներկուերորդ մասից հետո մորուք բուսավ, ևս յոթերորդ մասից հետո ամուսնացավ, հինգ տարի անց որդի ծնվեց։ Որդին ապրեց հոր կյանքի կեսը, իսկ հայրը մահացավ որդուց չորս տարի հետո»։ Նրա տարիքը նշանակենք $x$-ով.

$$\frac{x}{6} + \frac{x}{12} + \frac{x}{7} + 5 + \frac{x}{2} + 4 = x.$$

Բազմապատկենք 84-ով. $14x + 7x + 12x + 420 + 42x + 336 = 84x$, ուրեմն $75x + 756 = 84x$ և $x = 84$։ Ստուգենք պատմությամբ. մանկությունը՝ 14 տարի, մորուքը՝ 21-ում, ամուսնացավ 33-ում, որդին ծնվեց 38-ում, որդին ապրեց 42 տարի, հայրը մահացավ $80 + 4 = 84$-ում։ Ամեն ինչ համապատասխանում է։

### Ինչու ստուգումը պետք է արվի բառերով

Ենթադրենք՝ «հոր կյանքի կեսը» սխալ թարգմանեցիր որպես «մնացած ժամանակի կեսը»։ Հավասարումը սխալ է, բայց դրա լուծումը կարող է անթերի լինել, և $x$-ը *այդ* հավասարման մեջ տեղադրելով՝ կստանաս «ճիշտ է»։ Միայն սկզբնական տեքստով ստուգումն է բռնում թարգմանության սխալը։

### Երբ խնդիրն իմաստալից պատասխան չունի

Երբեմն հավասարումը մարդկանց թվի համար տալիս է $x = -3$ կամ $x = 2{,}5$։ Դա հանրահաշվի ձախողում չէ. այն ասում է, որ կամ խնդիրը լուծում չունի, կամ մոդելը սխալ է։`,
    r`### Что значит «составить модель»

Решение текстовой задачи состоит из трёх этапов, и только средний из них — алгебра:

1. **Перевести:** превратить слова в уравнение. Здесь выбор за тобой: что такое $x$, какой факт станет уравнением.
2. **Решить:** эта часть механическая.
3. **Истолковать:** превратить число обратно в слова и проверить его по **условию**.

Большинство ошибок случается на этапе 1 или 3, а не 2. Полезная привычка: прежде чем писать уравнение, выпиши каждую величину через $x$ списком или таблицей.

### Эпитафия Диофанта

Задача из старинного греческого сборника описывает жизнь Диофанта: «Детство его длилось шестую часть жизни; ещё через двенадцатую часть выросла борода; ещё через седьмую он женился; через пять лет родился сын. Сын прожил половину жизни отца, а отец умер через четыре года после сына». Обозначим его возраст через $x$:

$$\frac{x}{6} + \frac{x}{12} + \frac{x}{7} + 5 + \frac{x}{2} + 4 = x.$$

Умножим на 84: $14x + 7x + 12x + 420 + 42x + 336 = 84x$, то есть $75x + 756 = 84x$ и $x = 84$. Проверим по условию: детство 14 лет, борода в 21, женился в 33, сын родился в 38, сын прожил 42 года, отец умер в $80 + 4 = 84$. Всё сходится.

### Почему проверять нужно по тексту

Допустим, ты неверно перевёл «половину жизни отца» как «половину оставшегося времени». Уравнение неверное, но решить его можно безупречно, и подстановка $x$ в *это* уравнение скажет «верно». Только проверка по исходному тексту ловит ошибку перевода.

### Когда у задачи нет разумного ответа

Иногда уравнение даёт $x = -3$ или $x = 2{,}5$ для числа людей. Это не провал алгебры: так она сообщает, что либо у задачи нет решения, либо модель неверна.`,
  ),

  "mean-median-range": th(
    r`### The mean is the balance point

Put equal weights on a ruler at the data values. The ruler balances exactly at the **mean**. Why? Measure how far each value is from the mean: the deviations $x_1 - \bar{x}, \dots, x_n - \bar{x}$. Their sum is

$$(x_1 + \dots + x_n) - n\bar{x} = n\bar{x} - n\bar{x} = 0,$$

because $x_1 + \dots + x_n = n\bar{x}$ by the definition of the mean. Values above and below "pull" equally. For $2, 3, 7$ the mean is $4$: deviations $-2, -1, +3$, sum $0$.

This also explains the shortcut used in shops and labs: pick a convenient "guess" $a$, average the differences from $a$, and add back. For $98, 101, 103, 102$: differences from 100 are $-2, 1, 3, 2$, their mean is $1$, so the mean is $101$.

### Why the median ignores outliers

The median depends only on the **order** of the values, not on how big the extreme ones are. Make the largest value a million times bigger: it is still the largest, so the middle value does not move. The mean, by contrast, uses every value's size. If nine people earn 300 000 dram and one earns 30 000 000, the mean is 3 270 000, which describes nobody. The median, 300 000, describes the typical person. That is why salaries and house prices are usually reported by the median.

### Why a shift moves the mean but not the range

If every value grows by $c$, the sum grows by $nc$, so the mean grows by $c$. The order does not change, so the median and mode also shift by $c$. The range is a **difference** of two values, and in $(b + c) - (a + c)$ the $c$ cancels. Measures of the **centre** move; measures of the **spread** do not.`,
    r`### Միջինը հավասարակշռության կետն է

Քանոնի վրա տվյալների արժեքների տեղերում դնենք հավասար կշռաքարեր։ Քանոնը հավասարակշռվում է ճիշտ **միջինի** վրա։ Ինչո՞ւ։ Չափենք, թե յուրաքանչյուր արժեքն ինչքան է հեռու միջինից՝ $x_1 - \bar{x}, \dots, x_n - \bar{x}$ շեղումները։ Դրանց գումարն է

$$(x_1 + \dots + x_n) - n\bar{x} = n\bar{x} - n\bar{x} = 0,$$

քանի որ միջինի սահմանման համաձայն $x_1 + \dots + x_n = n\bar{x}$։ Վերևի և ներքևի արժեքները «քաշում» են հավասարապես։ $2, 3, 7$-ի միջինը $4$ է. շեղումները՝ $-2, -1, +3$, գումարը՝ $0$։

Սա բացատրում է նաև խանութներում և լաբորատորիաներում կիրառվող հնարքը. ընտրիր հարմար «ենթադրյալ» $a$ թիվ, գտիր $a$-ից տարբերությունների միջինը և գումարիր $a$-ին։ $98, 101, 103, 102$-ի համար 100-ից տարբերություններն են $-2, 1, 3, 2$, դրանց միջինը $1$ է, ուստի միջինը $101$ է։

### Ինչու մեդիանը չի «զգում» արտանետումները

Մեդիանը կախված է միայն արժեքների **կարգից**, ոչ թե ծայրահեղ արժեքների մեծությունից։ Ամենամեծ արժեքը միլիոն անգամ մեծացրու. այն մնում է ամենամեծը, ուստի միջին արժեքը տեղից չի շարժվում։ Միջինը, հակառակը, օգտագործում է յուրաքանչյուր արժեքի մեծությունը։ Եթե ինը մարդ վաստակում է 300 000 դրամ, իսկ մեկը՝ 30 000 000, միջինը 3 270 000 է, որը ոչ ոքի չի նկարագրում։ Մեդիանը՝ 300 000-ը, նկարագրում է տիպիկ մարդուն։ Ահա թե ինչու աշխատավարձերը և բնակարանների գները սովորաբար ներկայացնում են մեդիանով։

### Ինչու տեղաշարժը փոխում է միջինը, բայց ոչ ընդգրկույթը

Եթե յուրաքանչյուր արժեք մեծանում է $c$-ով, գումարը մեծանում է $nc$-ով, ուստի միջինը մեծանում է $c$-ով։ Կարգը չի փոխվում, ուստի մեդիանն ու մոդան նույնպես տեղաշարժվում են $c$-ով։ Ընդգրկույթը երկու արժեքի **տարբերություն** է, և $(b + c) - (a + c)$-ում $c$-ն կրճատվում է։ **Կենտրոնի** բնութագրերը շարժվում են, **ցրվածության** բնութագրերը՝ ոչ։`,
    r`### Среднее — точка равновесия

Положим на линейку одинаковые грузики в точках, соответствующих значениям. Линейка уравновесится ровно на **среднем**. Почему? Измерим, насколько каждое значение отстоит от среднего: отклонения $x_1 - \bar{x}, \dots, x_n - \bar{x}$. Их сумма равна

$$(x_1 + \dots + x_n) - n\bar{x} = n\bar{x} - n\bar{x} = 0,$$

потому что по определению среднего $x_1 + \dots + x_n = n\bar{x}$. Значения выше и ниже «тянут» одинаково. У $2, 3, 7$ среднее $4$: отклонения $-2, -1, +3$, сумма $0$.

Отсюда и приём, которым пользуются в магазинах и лабораториях: выбери удобное «примерное» число $a$, найди среднее отклонений от $a$ и прибавь его к $a$. Для $98, 101, 103, 102$ отклонения от 100 равны $-2, 1, 3, 2$, их среднее $1$, значит, среднее равно $101$.

### Почему медиана не замечает выбросов

Медиана зависит только от **порядка** значений, а не от величины крайних. Увеличь самое большое значение в миллион раз: оно останется самым большим, и середина не сдвинется. Среднее, наоборот, использует величину каждого значения. Если девять человек зарабатывают 300 000 драмов, а один — 30 000 000, среднее равно 3 270 000 и не описывает никого. Медиана, 300 000, описывает типичного человека. Поэтому зарплаты и цены на жильё обычно сообщают медианой.

### Почему сдвиг меняет среднее, но не размах

Если каждое значение увеличить на $c$, сумма вырастет на $nc$, и среднее вырастет на $c$. Порядок не меняется, поэтому медиана и мода тоже сдвигаются на $c$. Размах — это **разность** двух значений, и в $(b + c) - (a + c)$ число $c$ сокращается. Меры **центра** сдвигаются, меры **разброса** — нет.`,
  ),

  "function-concept": th(
    r`### How the idea of a function grew

- **1673, Leibniz** first used the word *function* for quantities linked to a curve, such as its slope at a point.
- **1734, Euler** wrote $f(x)$ and called a function "an analytic expression", that is, a formula.
- **1837, Dirichlet** gave the modern idea: a function is **any rule** that gives each allowed $x$ exactly one $y$. It does not need a formula at all.

Dirichlet's example shocked his colleagues: $y = 1$ if $x$ is a fraction, $y = 0$ otherwise. No formula, no picture you could draw, but each $x$ gets exactly one $y$, so it is a function.

### Why "exactly one" matters

The whole point of a function is **prediction**: tell me $x$, I tell you $y$. If one input could give two outputs, you could not predict. "A person → their birthday" is a function: everyone has one birthday. "A birthday → a person" is not: thousands of people share a birthday. The same pair of sets, but the direction matters.

### Many inputs, one output is fine

$y = x^2$ gives $4$ for both $x = 2$ and $x = -2$. That does not break the rule: each $x$ still has only one $y$. The rule forbids one $x$ with two $y$, not two $x$ with one $y$.

### The domain is part of the function

$y = 2x$ on all numbers and $y = 2x$ only on whole numbers from 1 to 10 are **different** functions: their graphs are a line and ten dots. The domain comes from the formula (no division by zero) or from the meaning: the cost of $x$ notebooks makes sense only for whole $x \ge 0$.`,
    r`### Ինչպես զարգացավ ֆունկցիայի գաղափարը

- **1673, Լայբնից.** առաջինը *ֆունկցիա* բառն օգտագործեց կորի հետ կապված մեծությունների համար, օրինակ՝ կետում նրա թեքության։
- **1734, Էյլեր.** գրեց $f(x)$ և ֆունկցիան անվանեց «անալիտիկ արտահայտություն», այսինքն՝ բանաձև։
- **1837, Դիրիխլե.** տվեց ժամանակակից գաղափարը. ֆունկցիան **ցանկացած կանոն** է, որը յուրաքանչյուր թույլատրելի $x$-ին համապատասխանեցնում է ճիշտ մեկ $y$։ Բանաձև ընդհանրապես պետք չէ։

Դիրիխլեի օրինակը ցնցեց նրա գործընկերներին. $y = 1$, եթե $x$-ը կոտորակ է, և $y = 0$՝ հակառակ դեպքում։ Ոչ բանաձև կա, ոչ էլ նկարելու հնարավոր պատկեր, բայց յուրաքանչյուր $x$ ստանում է ճիշտ մեկ $y$, ուստի սա ֆունկցիա է։

### Ինչու է «ճիշտ մեկը» կարևոր

Ֆունկցիայի ամբողջ իմաստը **կանխատեսումն** է. ասա ինձ $x$-ը, ես կասեմ $y$-ը։ Եթե մեկ մուտքը կարողանար երկու ելք տալ, կանխատեսել չէր լինի։ «Մարդ → նրա ծննդյան օրը» ֆունկցիա է. յուրաքանչյուրն ունի մեկ ծննդյան օր։ «Ծննդյան օր → մարդ»-ը ֆունկցիա չէ. հազարավոր մարդիկ ունեն նույն ծննդյան օրը։ Նույն զույգ բազմությունները, բայց ուղղությունը կարևոր է։

### Շատ մուտք, մեկ ելք. սա թույլատրելի է

$y = x^2$-ը և՛ $x = 2$-ի, և՛ $x = -2$-ի համար տալիս է $4$։ Սա չի խախտում կանոնը. յուրաքանչյուր $x$ դեռ ունի միայն մեկ $y$։ Կանոնն արգելում է երկու $y$ ունեցող մեկ $x$, ոչ թե մեկ $y$ ունեցող երկու $x$։

### Որոշման տիրույթը ֆունկցիայի մասն է

Բոլոր թվերի վրա $y = 2x$-ը և միայն 1-ից 10 ամբողջ թվերի վրա $y = 2x$-ը **տարբեր** ֆունկցիաներ են. դրանց գրաֆիկները ուղիղ գիծ և տասը կետ են։ Որոշման տիրույթը գալիս է բանաձևից (զրոյի վրա բաժանում չկա) կամ իմաստից. $x$ տետրի արժեքն իմաստ ունի միայն ամբողջ $x \ge 0$-ի դեպքում։`,
    r`### Как развивалось понятие функции

- **1673, Лейбниц** впервые употребил слово *функция* для величин, связанных с кривой, например для её наклона в точке.
- **1734, Эйлер** ввёл запись $f(x)$ и назвал функцию «аналитическим выражением», то есть формулой.
- **1837, Дирихле** дал современное понимание: функция — это **любое правило**, которое каждому допустимому $x$ ставит в соответствие ровно одно $y$. Формула вовсе не обязательна.

Пример Дирихле поразил коллег: $y = 1$, если $x$ — дробь, и $y = 0$ в остальных случаях. Ни формулы, ни графика, который можно нарисовать, но каждому $x$ соответствует ровно одно $y$, значит, это функция.

### Почему важно «ровно одно»

Весь смысл функции — **предсказание**: назови $x$, и я скажу $y$. Если бы одному входу могли отвечать два выхода, предсказывать было бы нельзя. «Человек → его день рождения» — функция: у каждого один день рождения. «День рождения → человек» — не функция: у тысяч людей один и тот же день рождения. Те же два множества, но направление важно.

### Много входов на один выход — можно

$y = x^2$ даёт $4$ и при $x = 2$, и при $x = -2$. Правило это не нарушает: у каждого $x$ по-прежнему одно $y$. Запрещено одному $x$ иметь два $y$, а не двум $x$ — одно $y$.

### Область определения — часть функции

$y = 2x$ на всех числах и $y = 2x$ только на целых числах от 1 до 10 — **разные** функции: их графики — прямая и десять точек. Область определения задаётся формулой (нельзя делить на ноль) или смыслом: стоимость $x$ тетрадей имеет смысл только при целых $x \ge 0$.`,
  ),
};
