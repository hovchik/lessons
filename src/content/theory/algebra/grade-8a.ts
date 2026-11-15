import { th } from "../kit";

const r = String.raw;

/** Algebra 8, unit 1: rational expressions and the function y = k/x. */
export const algebra8a = {
  "rational-expressions": th(
    r`### Rational expressions behave like fractions of numbers

Whole numbers can be added, subtracted and multiplied without leaving the whole numbers, but dividing them gives **fractions**. Polynomials are the same: their sums, differences and products are polynomials, but a quotient such as $\dfrac{x + 1}{x - 2}$ is a new kind of object, a **rational expression**. Everything you know about fractions of numbers (common denominators, cancelling, turning over to divide) carries over, because the same laws of operations hold.

### Why "the numerator is zero" is not enough

A fraction $\dfrac{A}{B}$ is the number that gives $A$ when multiplied by $B$. If $B \ne 0$ and $A = 0$, that number is $0$. If $B = 0$, there is no such number at all (see division by zero). So

$$\frac{A}{B} = 0 \iff A = 0 \text{ and } B \ne 0.$$

Both parts of the condition are needed. $\dfrac{x^2 - 4}{x - 2} = 0$: the numerator vanishes at $x = \pm 2$, but at $x = 2$ the fraction does not exist. The only root is $x = -2$.

### A graph with a hole

Simplify $\dfrac{x^2 - 4}{x - 2} = \dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$. The graph of $y = x + 2$ is a straight line. But the graph of the original fraction is that line **with one point removed**, $(2; 4)$, because at $x = 2$ the fraction has no value. On a drawing the missing point is marked with an empty circle.

That is why the forbidden values are written down **before** simplifying and kept afterwards: the simplified expression may hide them.

### Where admissible values come from in real problems

$t = \dfrac{60}{v}$ is the time for a 60 km trip at speed $v$. Algebra forbids $v = 0$; common sense also forbids $v < 0$. A formula's admissible values and the values that make sense in the problem are two different things; the second set is usually smaller.`,
    r`### Ռացիոնալ արտահայտություններն իրենց պահում են թվային կոտորակների պես

Ամբողջ թվերը կարելի է գումարել, հանել և բազմապատկել՝ առանց ամբողջ թվերից դուրս գալու, բայց դրանք բաժանելիս ստացվում են **կոտորակներ**։ Բազմանդամների դեպքում նույնն է. դրանց գումարները, տարբերությունները և արտադրյալները բազմանդամներ են, բայց $\dfrac{x + 1}{x - 2}$-ի պես քանորդը նոր տեսակի օբյեկտ է՝ **ռացիոնալ արտահայտություն**։ Թվային կոտորակների մասին քո իմացած ամեն ինչ (ընդհանուր հայտարար, կրճատում, բաժանելիս շրջել) փոխանցվում է դրանց, քանի որ գործում են գործողությունների նույն օրենքները։

### Ինչու «համարիչը զրո է»-ն բավական չէ

$\dfrac{A}{B}$ կոտորակն այն թիվն է, որը $B$-ով բազմապատկելիս տալիս է $A$։ Եթե $B \ne 0$ և $A = 0$, այդ թիվը $0$ է։ Եթե $B = 0$, այդպիսի թիվ ընդհանրապես չկա (տես զրոյի վրա բաժանումը)։ Ուստի

$$\frac{A}{B} = 0 \iff A = 0 \text{ և } B \ne 0.$$

Պայմանի երկու մասերն էլ պետք են։ $\dfrac{x^2 - 4}{x - 2} = 0$. համարիչը զրո է $x = \pm 2$-ի դեպքում, բայց $x = 2$-ի դեպքում կոտորակը գոյություն չունի։ Միակ արմատը $x = -2$-ն է։

### Անցքով գրաֆիկ

Պարզեցնենք. $\dfrac{x^2 - 4}{x - 2} = \dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$։ $y = x + 2$-ի գրաֆիկն ուղիղ է։ Բայց սկզբնական կոտորակի գրաֆիկն այդ ուղիղն է՝ **մեկ կետը հանված**՝ $(2; 4)$, քանի որ $x = 2$-ի դեպքում կոտորակն արժեք չունի։ Գծագրում բացակայող կետը նշում են դատարկ շրջանակով։

Ահա թե ինչու արգելված արժեքները գրի են առնվում **պարզեցնելուց առաջ** և պահպանվում դրանից հետո. պարզեցված արտահայտությունը կարող է թաքցնել դրանք։

### Որտեղից են թույլատրելի արժեքները գալիս իրական խնդիրներում

$t = \dfrac{60}{v}$-ն $v$ արագությամբ 60 կմ ճանապարհի ժամանակն է։ Հանրահաշիվն արգելում է $v = 0$-ն, իսկ ողջամտությունն արգելում է նաև $v < 0$-ն։ Բանաձևի թույլատրելի արժեքները և խնդրում իմաստ ունեցող արժեքները երկու տարբեր բաներ են. երկրորդ բազմությունը սովորաբար ավելի փոքր է։`,
    r`### Рациональные выражения ведут себя как обычные дроби

Целые числа можно складывать, вычитать и умножать, не выходя за пределы целых чисел, но при делении получаются **дроби**. С многочленами так же: их суммы, разности и произведения — многочлены, а частное вроде $\dfrac{x + 1}{x - 2}$ — объект нового рода, **рациональное выражение**. Всё, что ты знаешь о числовых дробях (общий знаменатель, сокращение, «переворачивание» при делении), переносится на них, потому что действуют те же законы.

### Почему «числитель равен нулю» — недостаточно

Дробь $\dfrac{A}{B}$ — это число, которое при умножении на $B$ даёт $A$. Если $B \ne 0$ и $A = 0$, это число равно $0$. Если $B = 0$, такого числа нет вовсе (вспомни деление на ноль). Поэтому

$$\frac{A}{B} = 0 \iff A = 0 \text{ и } B \ne 0.$$

Нужны обе части условия. $\dfrac{x^2 - 4}{x - 2} = 0$: числитель обращается в ноль при $x = \pm 2$, но при $x = 2$ дробь не существует. Единственный корень $x = -2$.

### График с дыркой

Упростим: $\dfrac{x^2 - 4}{x - 2} = \dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$. График $y = x + 2$ — прямая. Но график исходной дроби — эта прямая **без одной точки** $(2; 4)$, потому что при $x = 2$ дробь не имеет значения. На чертеже выколотую точку отмечают пустым кружком.

Поэтому запрещённые значения записывают **до** упрощения и сохраняют после: упрощённое выражение может их скрыть.

### Откуда берутся допустимые значения в задачах

$t = \dfrac{60}{v}$ — время на 60 км при скорости $v$. Алгебра запрещает $v = 0$, здравый смысл запрещает и $v < 0$. Допустимые значения формулы и значения, имеющие смысл в задаче, — разные вещи; второе множество обычно меньше.`,
  ),

  "reduce-fractions": th(
    r`### Why the basic property is true

$\dfrac{ac}{bc} = \dfrac{a}{b}$ for $b \ne 0$, $c \ne 0$. Proof: multiplying by $\dfrac{c}{c}$ means multiplying by $1$, and that changes nothing:

$$\frac{a}{b} = \frac{a}{b} \cdot 1 = \frac{a}{b} \cdot \frac{c}{c} = \frac{ac}{bc}.$$

Read left to right, this is **expanding** a fraction (used to reach a common denominator); read right to left, it is **cancelling**. Both are one and the same fact.

### Why only factors can be cancelled

The property speaks of a common **factor** $c$ of the whole numerator and the whole denominator. In $\dfrac{x + 3}{3}$ the 3 on top is a *term*, not a factor, so nothing can be cancelled. Check with a number: at $x = 6$, $\dfrac{6 + 3}{3} = 3$, while "cancelled" it would be $x = 6$. Wrong.

A safe rule: **factor first, then cancel only brackets or letters that multiply everything**. $\dfrac{x^2 + 3x}{3x} = \dfrac{x(x + 3)}{3x} = \dfrac{x + 3}{3}$, and here the process stops.

### The equality holds only where both sides exist

$\dfrac{x^2 - 9}{x + 3} = x - 3$ is true for every $x \ne -3$, but not at $x = -3$: there the left side has no value while the right side equals $-6$. Such an equality is an **identity on the admissible values**. Write the condition next to it: $x - 3$, $x \ne -3$.

### A trick with opposite brackets

$b - a = -(a - b)$. So $\dfrac{a - b}{b - a} = -1$ (for $a \ne b$). This explains a whole family of simplifications: $\dfrac{3 - x}{x^2 - 9} = \dfrac{-(x - 3)}{(x - 3)(x + 3)} = -\dfrac{1}{x + 3}$. The sign moves out, then the brackets match and cancel.`,
    r`### Ինչու է հիմնական հատկությունը ճիշտ

$\dfrac{ac}{bc} = \dfrac{a}{b}$, երբ $b \ne 0$, $c \ne 0$։ Ապացույց. $\dfrac{c}{c}$-ով բազմապատկելը նշանակում է բազմապատկել $1$-ով, և դա ոչինչ չի փոխում.

$$\frac{a}{b} = \frac{a}{b} \cdot 1 = \frac{a}{b} \cdot \frac{c}{c} = \frac{ac}{bc}.$$

Ձախից աջ կարդացած՝ սա կոտորակի **ընդլայնումն** է (օգտագործվում է ընդհանուր հայտարարի բերելիս), աջից ձախ՝ **կրճատումը**։ Երկուսն էլ նույն փաստն են։

### Ինչու կարելի է կրճատել միայն արտադրիչները

Հատկությունը խոսում է ամբողջ համարիչի և ամբողջ հայտարարի ընդհանուր $c$ **արտադրիչի** մասին։ $\dfrac{x + 3}{3}$-ում վերևի 3-ը *գումարելի* է, ոչ թե արտադրիչ, ուստի ոչինչ չի կրճատվում։ Ստուգիր թվով. $x = 6$-ի դեպքում $\dfrac{6 + 3}{3} = 3$, իսկ «կրճատվածը» կլիներ $x = 6$։ Սխալ է։

Ապահով կանոն. **նախ վերլուծիր արտադրիչների, հետո կրճատիր միայն այն փակագծերն ու տառերը, որոնք բազմապատկում են ամեն ինչ**։ $\dfrac{x^2 + 3x}{3x} = \dfrac{x(x + 3)}{3x} = \dfrac{x + 3}{3}$, և այստեղ գործընթացը կանգ է առնում։

### Հավասարությունը ճիշտ է միայն այնտեղ, որտեղ երկու մասերը գոյություն ունեն

$\dfrac{x^2 - 9}{x + 3} = x - 3$-ը ճիշտ է ցանկացած $x \ne -3$-ի դեպքում, բայց ոչ $x = -3$-ի դեպքում. այնտեղ ձախ մասն արժեք չունի, իսկ աջը հավասար է $-6$-ի։ Այդպիսի հավասարությունը **նույնություն է թույլատրելի արժեքների վրա**։ Պայմանը գրիր կողքին. $x - 3$, $x \ne -3$։

### Հնարք հակադիր փակագծերով

$b - a = -(a - b)$։ Ուստի $\dfrac{a - b}{b - a} = -1$ ($a \ne b$-ի դեպքում)։ Սա բացատրում է պարզեցումների մի ամբողջ ընտանիք. $\dfrac{3 - x}{x^2 - 9} = \dfrac{-(x - 3)}{(x - 3)(x + 3)} = -\dfrac{1}{x + 3}$։ Նշանը դուրս է գալիս, հետո փակագծերը համընկնում են և կրճատվում։`,
    r`### Почему основное свойство верно

$\dfrac{ac}{bc} = \dfrac{a}{b}$ при $b \ne 0$, $c \ne 0$. Доказательство: умножить на $\dfrac{c}{c}$ — значит умножить на $1$, а это ничего не меняет:

$$\frac{a}{b} = \frac{a}{b} \cdot 1 = \frac{a}{b} \cdot \frac{c}{c} = \frac{ac}{bc}.$$

Слева направо это **расширение** дроби (так приводят к общему знаменателю), справа налево — **сокращение**. Это один и тот же факт.

### Почему сокращать можно только множители

Свойство говорит об общем **множителе** $c$ всего числителя и всего знаменателя. В $\dfrac{x + 3}{3}$ тройка сверху — *слагаемое*, а не множитель, поэтому сокращать нечего. Проверь числом: при $x = 6$ получаем $\dfrac{6 + 3}{3} = 3$, а «сокращённое» дало бы $x = 6$. Неверно.

Надёжное правило: **сначала разложи на множители, потом сокращай только скобки и буквы, которые умножают всё**. $\dfrac{x^2 + 3x}{3x} = \dfrac{x(x + 3)}{3x} = \dfrac{x + 3}{3}$ — и на этом всё.

### Равенство верно только там, где существуют обе части

$\dfrac{x^2 - 9}{x + 3} = x - 3$ верно при любом $x \ne -3$, но не при $x = -3$: там левая часть не имеет значения, а правая равна $-6$. Такое равенство — **тождество на множестве допустимых значений**. Пиши условие рядом: $x - 3$, $x \ne -3$.

### Приём с противоположными скобками

$b - a = -(a - b)$. Поэтому $\dfrac{a - b}{b - a} = -1$ (при $a \ne b$). Это объясняет целое семейство упрощений: $\dfrac{3 - x}{x^2 - 9} = \dfrac{-(x - 3)}{(x - 3)(x + 3)} = -\dfrac{1}{x + 3}$. Знак выходит наружу, затем скобки совпадают и сокращаются.`,
  ),

  "add-subtract-rational": th(
    r`### Why we need a common denominator

$\dfrac{a}{c} + \dfrac{b}{c} = \dfrac{a + b}{c}$ is the distributive law: $\dfrac{a}{c} + \dfrac{b}{c} = a \cdot \dfrac{1}{c} + b \cdot \dfrac{1}{c} = (a + b) \cdot \dfrac{1}{c}$. It only works when both fractions are "counted in the same units" $\dfrac{1}{c}$. Different denominators are different units, like metres and centimetres: we first convert both fractions to a common unit using the basic property.

The **least** common denominator is built like the least common multiple of numbers: factor each denominator and take every factor the **largest** number of times it appears. For $\dfrac{1}{x^2 - 1}$ and $\dfrac{1}{x^2 + x}$: $(x - 1)(x + 1)$ and $x(x + 1)$, so the common denominator is $x(x - 1)(x + 1)$, not the product of the two, which would contain $(x + 1)^2$ needlessly.

### A beautiful sum that collapses

Check that for every $n \ne 0, -1$

$$\frac{1}{n} - \frac{1}{n + 1} = \frac{(n + 1) - n}{n(n + 1)} = \frac{1}{n(n + 1)}.$$

Now compute $\dfrac{1}{1 \cdot 2} + \dfrac{1}{2 \cdot 3} + \dfrac{1}{3 \cdot 4} + \dots + \dfrac{1}{99 \cdot 100}$. Replace each term:

$$\left(1 - \tfrac{1}{2}\right) + \left(\tfrac{1}{2} - \tfrac{1}{3}\right) + \dots + \left(\tfrac{1}{99} - \tfrac{1}{100}\right) = 1 - \frac{1}{100} = \frac{99}{100}.$$

Every middle term cancels with the next one, like the sections of a folding telescope. Such sums are called **telescoping**.

### Egyptian fractions

Ancient Egyptians wrote fractions as sums of **different unit fractions** ($\tfrac{1}{n}$): $\tfrac{2}{5} = \tfrac{1}{3} + \tfrac{1}{15}$. The same identity, read differently, $\dfrac{1}{n} = \dfrac{1}{n + 1} + \dfrac{1}{n(n + 1)}$, shows that this is always possible: any unit fraction splits into two smaller different ones.`,
    r`### Ինչու է պետք ընդհանուր հայտարարը

$\dfrac{a}{c} + \dfrac{b}{c} = \dfrac{a + b}{c}$-ն բաշխական օրենքն է. $\dfrac{a}{c} + \dfrac{b}{c} = a \cdot \dfrac{1}{c} + b \cdot \dfrac{1}{c} = (a + b) \cdot \dfrac{1}{c}$։ Այն աշխատում է միայն այն դեպքում, երբ երկու կոտորակները «հաշված են նույն միավորներով»՝ $\dfrac{1}{c}$-ով։ Տարբեր հայտարարները տարբեր միավորներ են, ինչպես մետրը և սանտիմետրը. նախ հիմնական հատկությամբ երկու կոտորակները բերում ենք ընդհանուր միավորի։

**Ամենափոքր** ընդհանուր հայտարարը կառուցվում է թվերի ամենափոքր ընդհանուր բազմապատիկի պես. վերլուծիր յուրաքանչյուր հայտարարը և վերցրու յուրաքանչյուր արտադրիչ այնքան անգամ, որքան **ամենաշատն** է այն հանդիպում։ $\dfrac{1}{x^2 - 1}$-ի և $\dfrac{1}{x^2 + x}$-ի համար՝ $(x - 1)(x + 1)$ և $x(x + 1)$, ուստի ընդհանուր հայտարարը $x(x - 1)(x + 1)$ է, ոչ թե երկուսի արտադրյալը, որն անհարկի կպարունակեր $(x + 1)^2$։

### Գեղեցիկ գումար, որը «ծալվում է»

Ստուգիր, որ ցանկացած $n \ne 0, -1$-ի համար

$$\frac{1}{n} - \frac{1}{n + 1} = \frac{(n + 1) - n}{n(n + 1)} = \frac{1}{n(n + 1)}.$$

Այժմ հաշվիր $\dfrac{1}{1 \cdot 2} + \dfrac{1}{2 \cdot 3} + \dfrac{1}{3 \cdot 4} + \dots + \dfrac{1}{99 \cdot 100}$։ Փոխարինիր յուրաքանչյուր գումարելին.

$$\left(1 - \tfrac{1}{2}\right) + \left(\tfrac{1}{2} - \tfrac{1}{3}\right) + \dots + \left(\tfrac{1}{99} - \tfrac{1}{100}\right) = 1 - \frac{1}{100} = \frac{99}{100}.$$

Միջին յուրաքանչյուր անդամ կրճատվում է հաջորդի հետ, ինչպես ծալովի աստղադիտակի մասերը։ Այդպիսի գումարները կոչվում են **աստղադիտակային** (տելեսկոպիկ)։

### Եգիպտական կոտորակներ

Հին եգիպտացիները կոտորակները գրում էին **տարբեր միավոր կոտորակների** ($\tfrac{1}{n}$) գումարի տեսքով. $\tfrac{2}{5} = \tfrac{1}{3} + \tfrac{1}{15}$։ Նույն նույնությունը, այլ կերպ կարդացած՝ $\dfrac{1}{n} = \dfrac{1}{n + 1} + \dfrac{1}{n(n + 1)}$, ցույց է տալիս, որ դա միշտ հնարավոր է. ցանկացած միավոր կոտորակ բաժանվում է երկու ավելի փոքր տարբեր կոտորակների։`,
    r`### Зачем нужен общий знаменатель

$\dfrac{a}{c} + \dfrac{b}{c} = \dfrac{a + b}{c}$ — это распределительный закон: $\dfrac{a}{c} + \dfrac{b}{c} = a \cdot \dfrac{1}{c} + b \cdot \dfrac{1}{c} = (a + b) \cdot \dfrac{1}{c}$. Он работает, только когда обе дроби «посчитаны в одних единицах» $\dfrac{1}{c}$. Разные знаменатели — разные единицы, как метры и сантиметры: сначала с помощью основного свойства переводим обе дроби в общую единицу.

**Наименьший** общий знаменатель строится как НОК чисел: разложи каждый знаменатель и возьми каждый множитель **наибольшее** число раз, сколько он встречается. Для $\dfrac{1}{x^2 - 1}$ и $\dfrac{1}{x^2 + x}$: $(x - 1)(x + 1)$ и $x(x + 1)$, поэтому общий знаменатель $x(x - 1)(x + 1)$, а не произведение двух знаменателей, в котором лишний раз оказалось бы $(x + 1)^2$.

### Красивая сумма, которая «складывается»

Проверь, что при любом $n \ne 0, -1$

$$\frac{1}{n} - \frac{1}{n + 1} = \frac{(n + 1) - n}{n(n + 1)} = \frac{1}{n(n + 1)}.$$

Теперь вычисли $\dfrac{1}{1 \cdot 2} + \dfrac{1}{2 \cdot 3} + \dfrac{1}{3 \cdot 4} + \dots + \dfrac{1}{99 \cdot 100}$. Заменим каждое слагаемое:

$$\left(1 - \tfrac{1}{2}\right) + \left(\tfrac{1}{2} - \tfrac{1}{3}\right) + \dots + \left(\tfrac{1}{99} - \tfrac{1}{100}\right) = 1 - \frac{1}{100} = \frac{99}{100}.$$

Каждый средний член сокращается со следующим, как колена складной подзорной трубы. Такие суммы называют **телескопическими**.

### Египетские дроби

Древние египтяне записывали дроби суммами **разных единичных дробей** ($\tfrac{1}{n}$): $\tfrac{2}{5} = \tfrac{1}{3} + \tfrac{1}{15}$. То же тождество, прочитанное иначе, $\dfrac{1}{n} = \dfrac{1}{n + 1} + \dfrac{1}{n(n + 1)}$, показывает, что это всегда возможно: любая единичная дробь распадается на две меньшие разные.`,
  ),

  "multiply-divide-rational": th(
    r`### Why multiplication works "top times top, bottom times bottom"

$\dfrac{a}{b}$ is $a \cdot \dfrac{1}{b}$, and $\dfrac{1}{b} \cdot \dfrac{1}{d} = \dfrac{1}{bd}$, because $bd \cdot \left(\dfrac{1}{b} \cdot \dfrac{1}{d}\right) = \left(b \cdot \dfrac{1}{b}\right)\left(d \cdot \dfrac{1}{d}\right) = 1$. Regrouping gives

$$\frac{a}{b} \cdot \frac{c}{d} = ac \cdot \frac{1}{bd} = \frac{ac}{bd}.$$

### Why dividing means turning over

Dividing $\dfrac{a}{b}$ by $\dfrac{c}{d}$ means finding the $X$ with $X \cdot \dfrac{c}{d} = \dfrac{a}{b}$. Try $X = \dfrac{a}{b} \cdot \dfrac{d}{c}$: then $X \cdot \dfrac{c}{d} = \dfrac{a}{b} \cdot \dfrac{d}{c} \cdot \dfrac{c}{d} = \dfrac{a}{b} \cdot 1$. It works, so

$$\frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}.$$

### Division brings a new forbidden value

Turning $\dfrac{c}{d}$ over puts $c$ into the denominator. So when dividing, the **numerator of the divisor** must not be zero either. In

$$\frac{x}{x + 1} : \frac{x - 2}{x}$$

the denominators give $x \ne -1$ and $x \ne 0$, and the division adds $x \ne 2$. After simplifying, $\dfrac{x^2}{(x + 1)(x - 2)}$, the condition $x \ne 0$ is no longer visible, but it is still there: at $x = 0$ the original expression has no value.

### Cancelling before multiplying is not just faster

Cancelling first keeps the numbers and degrees small, and it also makes mistakes visible. $\dfrac{x^2 - 1}{x} \cdot \dfrac{x^2}{x + 1}$: multiply out first and you get $\dfrac{x^4 - x^2}{x^2 + x}$, which then has to be factored again. Factor and cancel first, and it is $x(x - 1)$ in one line.`,
    r`### Ինչու է բազմապատկումն աշխատում «վերևն անգամ վերև, ներքևն անգամ ներքև»

$\dfrac{a}{b}$-ն $a \cdot \dfrac{1}{b}$ է, իսկ $\dfrac{1}{b} \cdot \dfrac{1}{d} = \dfrac{1}{bd}$, քանի որ $bd \cdot \left(\dfrac{1}{b} \cdot \dfrac{1}{d}\right) = \left(b \cdot \dfrac{1}{b}\right)\left(d \cdot \dfrac{1}{d}\right) = 1$։ Վերախմբավորելով՝ ստանում ենք

$$\frac{a}{b} \cdot \frac{c}{d} = ac \cdot \frac{1}{bd} = \frac{ac}{bd}.$$

### Ինչու բաժանել նշանակում է շրջել

$\dfrac{a}{b}$-ն $\dfrac{c}{d}$-ի բաժանել նշանակում է գտնել այն $X$-ը, որի դեպքում $X \cdot \dfrac{c}{d} = \dfrac{a}{b}$։ Փորձենք $X = \dfrac{a}{b} \cdot \dfrac{d}{c}$. այդ դեպքում $X \cdot \dfrac{c}{d} = \dfrac{a}{b} \cdot \dfrac{d}{c} \cdot \dfrac{c}{d} = \dfrac{a}{b} \cdot 1$։ Աշխատում է, ուստի

$$\frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}.$$

### Բաժանումը բերում է նոր արգելված արժեք

$\dfrac{c}{d}$-ն շրջելիս $c$-ն անցնում է հայտարար։ Ուստի բաժանելիս **բաժանարարի համարիչը** նույնպես չպետք է զրո լինի։

$$\frac{x}{x + 1} : \frac{x - 2}{x}$$

արտահայտության մեջ հայտարարները տալիս են $x \ne -1$ և $x \ne 0$, իսկ բաժանումն ավելացնում է $x \ne 2$։ Պարզեցնելուց հետո՝ $\dfrac{x^2}{(x + 1)(x - 2)}$, $x \ne 0$ պայմանն այլևս չի երևում, բայց այն դեռ կա. $x = 0$-ի դեպքում սկզբնական արտահայտությունն արժեք չունի։

### Բազմապատկելուց առաջ կրճատելը միայն ավելի արագ չէ

Նախ կրճատելով՝ թվերն ու աստիճանները փոքր են մնում, և սխալներն էլ տեսանելի են դառնում։ $\dfrac{x^2 - 1}{x} \cdot \dfrac{x^2}{x + 1}$. նախ բազմապատկիր, և կստանաս $\dfrac{x^4 - x^2}{x^2 + x}$, որը հետո պետք է նորից վերլուծել։ Նախ վերլուծիր ու կրճատիր, և մեկ տողում կստանաս $x(x - 1)$։`,
    r`### Почему умножение — «верх на верх, низ на низ»

$\dfrac{a}{b}$ — это $a \cdot \dfrac{1}{b}$, а $\dfrac{1}{b} \cdot \dfrac{1}{d} = \dfrac{1}{bd}$, потому что $bd \cdot \left(\dfrac{1}{b} \cdot \dfrac{1}{d}\right) = \left(b \cdot \dfrac{1}{b}\right)\left(d \cdot \dfrac{1}{d}\right) = 1$. Перегруппировав, получаем

$$\frac{a}{b} \cdot \frac{c}{d} = ac \cdot \frac{1}{bd} = \frac{ac}{bd}.$$

### Почему делить — значит переворачивать

Разделить $\dfrac{a}{b}$ на $\dfrac{c}{d}$ — значит найти такое $X$, что $X \cdot \dfrac{c}{d} = \dfrac{a}{b}$. Попробуем $X = \dfrac{a}{b} \cdot \dfrac{d}{c}$: тогда $X \cdot \dfrac{c}{d} = \dfrac{a}{b} \cdot \dfrac{d}{c} \cdot \dfrac{c}{d} = \dfrac{a}{b} \cdot 1$. Подходит, значит,

$$\frac{a}{b} : \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}.$$

### Деление приносит новое запрещённое значение

Когда $\dfrac{c}{d}$ переворачивают, $c$ попадает в знаменатель. Поэтому при делении не должен равняться нулю и **числитель делителя**. В

$$\frac{x}{x + 1} : \frac{x - 2}{x}$$

знаменатели дают $x \ne -1$ и $x \ne 0$, а деление добавляет $x \ne 2$. После упрощения, $\dfrac{x^2}{(x + 1)(x - 2)}$, условие $x \ne 0$ уже не видно, но оно по-прежнему есть: при $x = 0$ исходное выражение не имеет значения.

### Сокращать до умножения — не только быстрее

Сокращение в начале сохраняет числа и степени маленькими и делает ошибки заметными. $\dfrac{x^2 - 1}{x} \cdot \dfrac{x^2}{x + 1}$: если сначала перемножить, получится $\dfrac{x^4 - x^2}{x^2 + x}$, которое потом придётся раскладывать заново. Если сначала разложить и сократить, ответ $x(x - 1)$ получается в одну строку.`,
  ),

  "combined-rational-transformations": th(
    r`### Fractions inside fractions: continued fractions

Simplify step by step from the bottom up:

$$1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1}}} = 1 + \cfrac{1}{1 + \cfrac{1}{2}} = 1 + \cfrac{1}{\tfrac{3}{2}} = 1 + \frac{2}{3} = \frac{5}{3}.$$

Make the tower one storey taller each time and you get $1, 2, \tfrac{3}{2}, \tfrac{5}{3}, \tfrac{8}{5}, \tfrac{13}{8}, \dots$ The numerators and denominators are the **Fibonacci numbers** $1, 1, 2, 3, 5, 8, 13, \dots$, where each is the sum of the two before. The fractions get closer and closer to the **golden ratio** $\varphi \approx 1.618$. Why? If the tower went on forever and its value were $x$, then the part under the first fraction bar is the same tower, so $x = 1 + \dfrac{1}{x}$, that is $x^2 = x + 1$. You will solve this equation later this year.

### Why a plan beats cleverness

A long expression contains many places to make a slip. A fixed order protects you:

1. factor every numerator and denominator;
2. write down all forbidden values;
3. do the brackets, then multiplication and division, then addition and subtraction;
4. cancel at every step.

Experienced solvers are not people who never make mistakes; they are people whose method makes mistakes easy to see.

### Proving an identity on its domain

To prove $\left(\dfrac{1}{x - 1} - \dfrac{1}{x + 1}\right) \cdot \dfrac{x^2 - 1}{2} = 1$, transform the left side until it becomes the right side, and state for which $x$ it holds: $x \ne \pm 1$. At $x = \pm 1$ the left side does not exist, so the identity says nothing there, even though the right side is $1$ for every $x$.

### The fastest check

Substitute one simple admissible number, such as $x = 2$ or $x = 3$, into the original expression and into your answer. If they differ, there is a mistake. It takes a minute and saves a lost exam point.`,
    r`### Կոտորակներ կոտորակների ներսում. շղթայական կոտորակներ

Պարզեցնենք քայլ առ քայլ՝ ներքևից վերև.

$$1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1}}} = 1 + \cfrac{1}{1 + \cfrac{1}{2}} = 1 + \cfrac{1}{\tfrac{3}{2}} = 1 + \frac{2}{3} = \frac{5}{3}.$$

Ամեն անգամ «աշտարակը» մեկ հարկով բարձրացրու, և կստանաս $1, 2, \tfrac{3}{2}, \tfrac{5}{3}, \tfrac{8}{5}, \tfrac{13}{8}, \dots$։ Համարիչներն ու հայտարարները **Ֆիբոնաչիի թվերն** են՝ $1, 1, 2, 3, 5, 8, 13, \dots$, որտեղ յուրաքանչյուրը նախորդ երկուսի գումարն է։ Կոտորակներն ավելի ու ավելի են մոտենում **ոսկե հատմանը**՝ $\varphi \approx 1{,}618$։ Ինչո՞ւ։ Եթե աշտարակն անվերջ շարունակվեր, և նրա արժեքը լիներ $x$, ապա առաջին կոտորակի գծի տակ եղած մասը նույն աշտարակն է, ուստի $x = 1 + \dfrac{1}{x}$, այսինքն՝ $x^2 = x + 1$։ Այս հավասարումը կլուծես այս տարի ավելի ուշ։

### Ինչու է պլանն ավելի լավ, քան հնարամտությունը

Երկար արտահայտությունը սխալվելու շատ տեղեր ունի։ Ֆիքսված կարգը պաշտպանում է քեզ.

1. վերլուծիր յուրաքանչյուր համարիչ և հայտարար.
2. գրի առ բոլոր արգելված արժեքները.
3. կատարիր փակագծերը, հետո բազմապատկումն ու բաժանումը, հետո գումարումն ու հանումը.
4. կրճատիր յուրաքանչյուր քայլում։

Փորձառու լուծողները նրանք չեն, ովքեր երբեք չեն սխալվում. նրանք են, ում եղանակը սխալները հեշտ տեսանելի է դարձնում։

### Նույնության ապացուցումը իր որոշման տիրույթում

$\left(\dfrac{1}{x - 1} - \dfrac{1}{x + 1}\right) \cdot \dfrac{x^2 - 1}{2} = 1$-ն ապացուցելու համար ձևափոխիր ձախ մասը, մինչև այն դառնա աջ մասը, և նշիր, թե որ $x$-երի համար է այն ճիշտ. $x \ne \pm 1$։ $x = \pm 1$-ի դեպքում ձախ մասը գոյություն չունի, ուստի նույնությունն այնտեղ ոչինչ չի ասում, թեև աջ մասը ցանկացած $x$-ի դեպքում $1$ է։

### Ամենաարագ ստուգումը

Սկզբնական արտահայտության մեջ և քո պատասխանի մեջ տեղադրիր մեկ պարզ թույլատրելի թիվ, օրինակ՝ $x = 2$ կամ $x = 3$։ Եթե դրանք տարբեր են, սխալ կա։ Սա մեկ րոպե է տևում և փրկում է քննության կորած միավորը։`,
    r`### Дроби внутри дробей: цепные дроби

Упростим шаг за шагом снизу вверх:

$$1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1}}} = 1 + \cfrac{1}{1 + \cfrac{1}{2}} = 1 + \cfrac{1}{\tfrac{3}{2}} = 1 + \frac{2}{3} = \frac{5}{3}.$$

Если каждый раз надстраивать «башню» на один этаж, получится $1, 2, \tfrac{3}{2}, \tfrac{5}{3}, \tfrac{8}{5}, \tfrac{13}{8}, \dots$ Числители и знаменатели — **числа Фибоначчи** $1, 1, 2, 3, 5, 8, 13, \dots$, где каждое равно сумме двух предыдущих. Дроби всё ближе подходят к **золотому сечению** $\varphi \approx 1{,}618$. Почему? Если бы башня продолжалась бесконечно и её значение было $x$, то часть под первой чертой — та же самая башня, поэтому $x = 1 + \dfrac{1}{x}$, то есть $x^2 = x + 1$. Это уравнение ты решишь позже в этом году.

### Почему план лучше смекалки

В длинном выражении много мест, где можно ошибиться. Твёрдый порядок защищает:

1. разложи на множители каждый числитель и знаменатель;
2. выпиши все запрещённые значения;
3. выполни действия в скобках, потом умножение и деление, потом сложение и вычитание;
4. сокращай на каждом шаге.

Опытный решатель — не тот, кто никогда не ошибается, а тот, чей метод делает ошибки заметными.

### Доказательство тождества на области определения

Чтобы доказать $\left(\dfrac{1}{x - 1} - \dfrac{1}{x + 1}\right) \cdot \dfrac{x^2 - 1}{2} = 1$, преобразуй левую часть, пока она не станет правой, и укажи, при каких $x$ это верно: $x \ne \pm 1$. При $x = \pm 1$ левая часть не существует, и тождество там ничего не утверждает, хотя правая часть равна $1$ при любом $x$.

### Самая быстрая проверка

Подставь одно простое допустимое число, например $x = 2$ или $x = 3$, в исходное выражение и в свой ответ. Если результаты различаются, ошибка есть. Это минута работы, которая спасает потерянный на экзамене балл.`,
  ),

  "inverse-proportionality": th(
    r`### Why the graph never touches the axes

For $y = \dfrac{k}{x}$ with $k \ne 0$:

- $x = 0$ is forbidden, so the graph has no point on the $y$-axis;
- $y = 0$ would need $\dfrac{k}{x} = 0$, that is $k = 0$, so the graph has no point on the $x$-axis either.

But it comes **as close as you like**. For $y = \dfrac{6}{x}$: at $x = 600$, $y = 0.01$; at $x = 6\,000\,000$, $y = 0.000001$. Lines that a graph approaches without reaching are called **asymptotes**; here they are the two axes.

### Two symmetries

$xy = k$ does not change if you replace $x$ by $-x$ **and** $y$ by $-y$: so the hyperbola is symmetric about the **origin**. It also does not change if you swap $x$ and $y$: so it is symmetric about the line $y = x$. That is why the two branches look like mirror images in the diagonal.

### Inverse proportion in nature

The **product** of two quantities stays the same:

- the time and the speed for a fixed distance;
- the number of workers and the days to finish a fixed job (3 workers in 12 days, 6 workers in 6 days, assuming they do not get in each other's way);
- the pressure and the volume of a gas at constant temperature (Boyle's law, 1662): squeeze the air in a pump to half its volume and its pressure doubles.

### Why the average speed is not the average of the speeds

You drive 120 km to a village at 60 km/h and back at 40 km/h. The average speed is **not** 50. The trips take $2$ h and $3$ h: 240 km in 5 h, so $48$ km/h. Speed and time are inversely proportional, so the slower half of the trip lasts **longer** and counts more. The correct average of two speeds over equal distances is

$$\frac{2v_1v_2}{v_1 + v_2} = \frac{2 \cdot 60 \cdot 40}{100} = 48,$$

called the **harmonic mean**.`,
    r`### Ինչու գրաֆիկը երբեք չի հպվում առանցքներին

$y = \dfrac{k}{x}$-ի համար, երբ $k \ne 0$.

- $x = 0$-ն արգելված է, ուստի գրաֆիկը $y$-երի առանցքի վրա կետ չունի.
- $y = 0$-ի համար պետք կլիներ $\dfrac{k}{x} = 0$, այսինքն՝ $k = 0$, ուստի գրաֆիկը $x$-երի առանցքի վրա էլ կետ չունի։

Բայց այն մոտենում է **որքան ուզես**։ $y = \dfrac{6}{x}$-ի դեպքում $x = 600$-ի համար $y = 0{,}01$, $x = 6\,000\,000$-ի համար $y = 0{,}000001$։ Այն ուղիղները, որոնց գրաֆիկը մոտենում է՝ առանց հասնելու, կոչվում են **ասիմպտոտներ**. այստեղ դրանք երկու առանցքներն են։

### Երկու համաչափություն

$xy = k$-ն չի փոխվում, եթե $x$-ը փոխարինես $-x$-ով **և** $y$-ը՝ $-y$-ով. ուստի հիպերբոլը համաչափ է **սկզբնակետի** նկատմամբ։ Այն չի փոխվում նաև, եթե $x$-ը և $y$-ը տեղերով փոխես. ուստի այն համաչափ է $y = x$ ուղղի նկատմամբ։ Ահա թե ինչու են երկու ճյուղերը կարծես իրար հայելային պատկերներ անկյունագծի նկատմամբ։

### Հակադարձ համեմատականությունը բնության մեջ

Երկու մեծությունների **արտադրյալը** մնում է նույնը.

- ֆիքսված ճանապարհի դեպքում ժամանակն ու արագությունը.
- ֆիքսված աշխատանքն ավարտելու համար աշխատողների թիվը և օրերը (3 աշխատող՝ 12 օրում, 6 աշխատող՝ 6 օրում, եթե նրանք իրար չեն խանգարում).
- հաստատուն ջերմաստիճանում գազի ճնշումն ու ծավալը (Բոյլի օրենք, 1662 թ.). պոմպի օդը սեղմիր մինչև կես ծավալ, և ճնշումը կկրկնապատկվի։

### Ինչու միջին արագությունը արագությունների միջինը չէ

Գյուղ 120 կմ գնում ես 60 կմ/ժ արագությամբ, ետ՝ 40 կմ/ժ։ Միջին արագությունը 50 **չէ**։ Ճանապարհները տևում են $2$ ժ և $3$ ժ. 240 կմ 5 ժամում, ուրեմն $48$ կմ/ժ։ Արագությունն ու ժամանակը հակադարձ համեմատական են, ուստի ճանապարհի ավելի դանդաղ կեսը տևում է **ավելի երկար** և ավելի շատ է կշռում։ Հավասար ճանապարհների դեպքում երկու արագությունների ճիշտ միջինն է

$$\frac{2v_1v_2}{v_1 + v_2} = \frac{2 \cdot 60 \cdot 40}{100} = 48,$$

որը կոչվում է **ներդաշնակ միջին**։`,
    r`### Почему график никогда не касается осей

Для $y = \dfrac{k}{x}$ при $k \ne 0$:

- $x = 0$ запрещено, поэтому у графика нет точек на оси $y$;
- $y = 0$ потребовало бы $\dfrac{k}{x} = 0$, то есть $k = 0$, поэтому и на оси $x$ точек нет.

Но график подходит к осям **сколь угодно близко**. Для $y = \dfrac{6}{x}$: при $x = 600$ получаем $y = 0{,}01$; при $x = 6\,000\,000$ — $y = 0{,}000001$. Прямые, к которым график приближается, не достигая их, называют **асимптотами**; здесь это обе оси.

### Две симметрии

$xy = k$ не меняется, если заменить $x$ на $-x$ **и** $y$ на $-y$: значит, гипербола симметрична относительно **начала координат**. Оно не меняется и если поменять $x$ и $y$ местами: значит, гипербола симметрична относительно прямой $y = x$. Поэтому две ветви выглядят зеркальными отражениями друг друга относительно диагонали.

### Обратная пропорциональность в природе

Постоянно **произведение** двух величин:

- время и скорость при постоянном пути;
- число рабочих и число дней на одну и ту же работу (3 рабочих за 12 дней, 6 рабочих за 6 дней, если они не мешают друг другу);
- давление и объём газа при постоянной температуре (закон Бойля, 1662): сожми воздух в насосе вдвое — и давление вырастет вдвое.

### Почему средняя скорость — не среднее скоростей

Ты едешь 120 км до деревни со скоростью 60 км/ч и обратно со скоростью 40 км/ч. Средняя скорость **не** 50. Поездки занимают $2$ ч и $3$ ч: 240 км за 5 ч, то есть $48$ км/ч. Скорость и время обратно пропорциональны, поэтому медленная половина пути длится **дольше** и весит больше. Правильное среднее двух скоростей на равных участках

$$\frac{2v_1v_2}{v_1 + v_2} = \frac{2 \cdot 60 \cdot 40}{100} = 48$$

называют **средним гармоническим**.`,
  ),
};
