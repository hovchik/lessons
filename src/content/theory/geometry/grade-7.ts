import { th } from "../kit";

const r = String.raw;

/** Geometry 7: full proofs and the reasons behind the rules. */
export const geometry7 = {
  "points-lines-planes": th(
    r`### Why some words are not defined

Try to define "point" honestly. "A point is a place" needs "place"; "a place is a position" needs "position", and so on. Every definition uses other words, so a chain of definitions either goes on forever or comes back in a circle, like a dictionary. Geometry stops the chain on purpose: **point**, **line** and **plane** are left undefined, and the **axioms** say how they behave. That is all we ever use about them.

### From axioms to the first theorem

**Theorem.** Two different lines have at most one common point.

*Proof.* Suppose lines $a$ and $b$ had two common points $A$ and $B$. Then two different lines would pass through $A$ and $B$. Axiom 1 says there is only one such line. This is a **contradiction**, so the supposition was false. ∎

This kind of reasoning, "suppose the opposite and reach an impossibility", is called **proof by contradiction**. We will use it all year.

### Counting lines through $n$ points

Take $n$ points, no three on one line. Each point can be joined with the other $n - 1$ points, which gives $n(n-1)$ joinings. But every line was counted twice (once from each end), so the number of lines is
$$\frac{n(n-1)}{2}.$$
For $n = 4$ it is $6$, for $n = 10$ it is $45$.

### A little history

Euclid wrote the *Elements* in Alexandria about 300 BC: 13 books built from a handful of postulates. Two thousand years later, in 1899, David Hilbert noticed that Euclid silently used facts such as "betweenness" and wrote a complete list of 20 axioms. Our school axioms are a short version of Hilbert's list.`,
    r`### Ինչու որոշ բառեր չեն սահմանվում

Փորձենք ազնվորեն սահմանել «կետը»։ «Կետը տեղ է» սահմանման համար պետք է «տեղ» բառը, «տեղը դիրք է»՝ «դիրք» բառը և այդպես շարունակ։ Յուրաքանչյուր սահմանում օգտագործում է այլ բառեր, ուստի սահմանումների շղթան կա՛մ անվերջ է, կա՛մ բառարանի պես շրջան է կազմում։ Երկրաչափությունը շղթան դիտավորյալ կանգնեցնում է. **կետը**, **ուղիղը** և **հարթությունը** մնում են անսահմանելի, իսկ **աքսիոմներն** ասում են, թե ինչպես են նրանք «վարվում»։ Մենք նրանց մասին միայն դա ենք օգտագործում։

### Աքսիոմներից առաջին թեորեմ

**Թեորեմ։** Երկու տարբեր ուղիղներ ունեն առավելագույնը մեկ ընդհանուր կետ։

*Ապացույց։* Ենթադրենք՝ $a$ և $b$ ուղիղներն ունեն երկու ընդհանուր կետ՝ $A$ և $B$։ Այդ դեպքում $A$ և $B$ կետերով կանցնեն երկու տարբեր ուղիղներ։ Առաջին աքսիոմն ասում է, որ այդպիսի ուղիղը միայն մեկն է։ Ստացանք **հակասություն**, ուստի ենթադրությունը սխալ էր։ ∎

Այսպիսի դատողությունը՝ «ենթադրենք հակառակը և հանգենք անհնարինի», կոչվում է **հակասող ենթադրությամբ ապացույց**։ Այն կօգտագործենք ամբողջ տարին։

### Քանի՞ ուղիղ է անցնում $n$ կետով

Վերցնենք $n$ կետ, որոնցից ոչ մի երեքը մեկ ուղղի վրա չեն։ Յուրաքանչյուր կետ կարելի է միացնել մյուս $n - 1$ կետերին, ստացվում է $n(n-1)$ միացում։ Բայց յուրաքանչյուր ուղիղ հաշվվեց երկու անգամ (երկու ծայրից), ուստի ուղիղների թիվը
$$\frac{n(n-1)}{2}$$
է։ $n = 4$ դեպքում այն $6$ է, $n = 10$ դեպքում՝ $45$։

### Մի քիչ պատմություն

Էվկլիդեսը «Սկզբունքները» գրել է Ալեքսանդրիայում մոտ մ.թ.ա. 300 թվականին. 13 գիրք, որոնք կառուցված են մի քանի պոստուլատից։ Երկու հազար տարի անց՝ 1899 թվականին, Դավիդ Հիլբերտը նկատեց, որ Էվկլիդեսը լուռ օգտագործում էր «միջև գտնվելու» նման փաստեր, և կազմեց 20 աքսիոմների ամբողջական ցուցակ։ Դպրոցական աքսիոմները Հիլբերտի ցուցակի կարճ տարբերակն են։`,
    r`### Почему некоторые слова не определяют

Попробуйте честно определить «точку». «Точка — это место» требует слова «место»; «место — это положение» требует слова «положение», и так далее. Каждое определение опирается на другие слова, поэтому цепочка определений либо бесконечна, либо замыкается в круг, как в словаре. Геометрия обрывает цепочку сознательно: **точка**, **прямая** и **плоскость** остаются неопределяемыми, а **аксиомы** говорят, как они себя ведут. Только это мы о них и используем.

### От аксиом к первой теореме

**Теорема.** Две различные прямые имеют не более одной общей точки.

*Доказательство.* Пусть прямые $a$ и $b$ имеют две общие точки $A$ и $B$. Тогда через $A$ и $B$ проходят две различные прямые. Аксиома 1 говорит, что такая прямая только одна. Получили **противоречие**, значит, предположение неверно. ∎

Такое рассуждение — «предположим противное и придём к невозможному» — называется **доказательством от противного**. Мы будем пользоваться им весь год.

### Сколько прямых через $n$ точек

Возьмём $n$ точек, никакие три из которых не лежат на одной прямой. Каждую точку можно соединить с остальными $n - 1$ точками, это $n(n-1)$ соединений. Но каждая прямая посчитана дважды (с обоих концов), поэтому прямых
$$\frac{n(n-1)}{2}.$$
При $n = 4$ их $6$, при $n = 10$ — $45$.

### Немного истории

Евклид написал «Начала» в Александрии около 300 г. до н. э.: 13 книг, выстроенных из нескольких постулатов. Через две тысячи лет, в 1899 году, Давид Гильберт заметил, что Евклид молча пользовался фактами вроде «лежать между» и составил полный список из 20 аксиом. Школьные аксиомы — сокращённый вариант списка Гильберта.`,
  ),

  "measuring-segments": th(
    r`### Length as a number on a ruler

A ruler is a line on which every point has a number, its **coordinate**. If $A$ has coordinate $a$ and $B$ has coordinate $b$, then
$$AB = |b - a|.$$
This is why "$AC = AB + BC$ when $B$ is between $A$ and $C$" is true: with $a < b < c$ we get $(b - a) + (c - b) = c - a$. The measuring axiom of geometry says exactly that every line can be turned into such a ruler.

### The midpoint is unique

*Proof.* Suppose $M$ and $N$ are both midpoints of $AB$, so $AM = AN = \frac{AB}{2}$. Both lie on ray $AB$ at the same distance from $A$. On a ray there is only one point at a given distance from its start, so $M = N$. ∎

In coordinates the midpoint is the **average**: $m = \frac{a + b}{2}$.

### A classic: the distance between two midpoints

$B$ lies on segment $AC$, $M$ is the midpoint of $AB$, $N$ the midpoint of $BC$. Then
$$MN = MB + BN = \frac{AB}{2} + \frac{BC}{2} = \frac{AC}{2}.$$
The answer does **not** depend on where $B$ is. If $AC = 18$ cm, then $MN = 9$ cm for every position of $B$.

### Why the converse needs care

If $AB + BC = AC$, then $B$ lies between $A$ and $C$. If instead $AB + BC > AC$, the three points cannot lie on one line in that order; we will prove in this course that then they form a triangle. A common mistake is to write $AC = AB + BC$ without checking that $B$ is **between** the other two: with $AB = 5$, $BC = 3$ the answer can be $8$ **or** $2$.`,
    r`### Երկարությունը որպես թիվ քանոնի վրա

Քանոնն ուղիղ է, որի յուրաքանչյուր կետ ունի թիվ՝ իր **կոորդինատը**։ Եթե $A$-ի կոորդինատը $a$ է, իսկ $B$-ինը՝ $b$, ապա
$$AB = |b - a|$$
Ահա թե ինչու է ճիշտ «$AC = AB + BC$, երբ $B$-ն $A$-ի և $C$-ի միջև է» պնդումը. $a < b < c$ դեպքում $(b - a) + (c - b) = c - a$։ Չափման աքսիոմը հենց դա է ասում. յուրաքանչյուր ուղիղ կարելի է այդպիսի քանոնի վերածել։

### Միջնակետը միակն է

*Ապացույց։* Ենթադրենք՝ $M$-ը և $N$-ը երկուսն էլ $AB$-ի միջնակետեր են, այսինքն՝ $AM = AN = \frac{AB}{2}$։ Երկուսն էլ $AB$ ճառագայթի վրա են և $A$-ից նույն հեռավորության վրա։ Ճառագայթի վրա սկզբնակետից տրված հեռավորությամբ միայն մեկ կետ կա, ուստի $M = N$։ ∎

Կոորդինատներով միջնակետը **միջին թվաբանականն** է. $m = \frac{a + b}{2}$։

### Դասական խնդիր. երկու միջնակետերի հեռավորությունը

$B$-ն $AC$ հատվածի վրա է, $M$-ը $AB$-ի միջնակետն է, $N$-ը՝ $BC$-ինը։ Այդ դեպքում
$$MN = MB + BN = \frac{AB}{2} + \frac{BC}{2} = \frac{AC}{2}$$
Պատասխանը **կախված չէ** $B$-ի դիրքից։ Եթե $AC = 18$ սմ, ապա $MN = 9$ սմ $B$-ի ցանկացած դիրքի դեպքում։

### Ինչու հակադարձ պնդման հետ զգույշ լինել

Եթե $AB + BC = AC$, ապա $B$-ն $A$-ի և $C$-ի միջև է։ Իսկ եթե $AB + BC > AC$, կետերն այդ կարգով չեն կարող լինել մեկ ուղղի վրա. այս դասընթացում կապացուցենք, որ այդ դեպքում նրանք եռանկյուն են կազմում։ Տարածված սխալ է $AC = AB + BC$ գրելը՝ առանց ստուգելու, որ $B$-ն մյուս երկուսի **միջև** է. $AB = 5$, $BC = 3$ դեպքում պատասխանը կարող է լինել $8$ **կամ** $2$։`,
    r`### Длина как число на линейке

Линейка — это прямая, у каждой точки которой есть число, её **координата**. Если у $A$ координата $a$, а у $B$ — $b$, то
$$AB = |b - a|.$$
Вот почему верно «$AC = AB + BC$, если $B$ лежит между $A$ и $C$»: при $a < b < c$ получаем $(b - a) + (c - b) = c - a$. Аксиома измерения как раз и говорит, что любую прямую можно превратить в такую линейку.

### Середина единственна

*Доказательство.* Пусть $M$ и $N$ — обе середины $AB$, то есть $AM = AN = \frac{AB}{2}$. Обе лежат на луче $AB$ на одном расстоянии от $A$. На луче есть только одна точка на данном расстоянии от начала, значит, $M = N$. ∎

В координатах середина — это **среднее арифметическое**: $m = \frac{a + b}{2}$.

### Классика: расстояние между двумя серединами

$B$ лежит на отрезке $AC$, $M$ — середина $AB$, $N$ — середина $BC$. Тогда
$$MN = MB + BN = \frac{AB}{2} + \frac{BC}{2} = \frac{AC}{2}.$$
Ответ **не зависит** от положения $B$. Если $AC = 18$ см, то $MN = 9$ см при любом положении $B$.

### Почему с обратным утверждением нужна осторожность

Если $AB + BC = AC$, то $B$ лежит между $A$ и $C$. Если же $AB + BC > AC$, точки в таком порядке не могут лежать на одной прямой; в этом курсе мы докажем, что тогда они образуют треугольник. Частая ошибка — писать $AC = AB + BC$, не проверив, что $B$ лежит **между** двумя другими: при $AB = 5$, $BC = 3$ ответ может быть $8$ **или** $2$.`,
  ),

  "angles-measurement": th(
    r`### Why a full turn is $360°$

The degree comes from Babylon, about 4000 years ago. Babylonian astronomers counted in sixties, and the year has about 360 days, so the Sun moves about one degree a day along its path among the stars. The number $360$ is also very convenient: it divides by $2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120$ and $180$. So halves, thirds, quarters and sixths of a turn are all whole numbers of degrees. The minute ($1° = 60'$) and second ($1' = 60''$) are also Babylonian.

Later you will meet a second unit, the **radian**, which measures an angle by the length of an arc. Nothing in the geometry changes, only the unit.

### The clock formula, derived

The minute hand turns $360°$ in 60 minutes: $6°$ per minute. The hour hand turns $30°$ per hour: $0.5°$ per minute. At $h$ hours $m$ minutes, measured from 12:
$$\text{hour hand} = 30h + 0.5m, \qquad \text{minute hand} = 6m.$$
The angle between them is the difference:
$$|30h - 5.5m|,$$
and if it is more than $180°$, take $360°$ minus it.

*Example.* 3:40: $|90 - 220| = 130°$. A common mistake is to say "at 3:30 the angle is $0°$ because both point at 6". The hour hand has moved halfway from 3 to 4: $|90 - 165| = 75°$.

### Why bisectors of a straight angle split it into $90°$

If $OC$ is the bisector of a straight angle, the two parts are equal and add up to $180°$, so each is $90°$. This simple step is the origin of every right angle you construct.`,
    r`### Ինչու է լրիվ պտույտը $360°$

Աստիճանը եկել է Բաբելոնից՝ մոտ 4000 տարի առաջ։ Բաբելոնյան աստղագետները հաշվում էին վաթսունյակներով, իսկ տարին մոտ 360 օր է, ուստի Արեգակն աստղերի միջով իր ճանապարհին օրական մոտ մեկ աստիճան է անցնում։ $360$ թիվը նաև շատ հարմար է. այն բաժանվում է $2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120$ և $180$ թվերի։ Ուստի պտույտի կեսը, երրորդը, քառորդը և վեցերորդը աստիճանների ամբողջ թվեր են։ Րոպեն ($1° = 60'$) և վայրկյանը ($1' = 60''$) նույնպես բաբելոնյան են։

Ավելի ուշ կծանոթանաք երկրորդ միավորին՝ **ռադիանին**, որն անկյունը չափում է աղեղի երկարությամբ։ Երկրաչափության մեջ ոչինչ չի փոխվում, միայն միավորը։

### Ժամացույցի բանաձևի արտածումը

Րոպեի սլաքը 60 րոպեում պտտվում է $360°$, այսինքն՝ րոպեում $6°$։ Ժամի սլաքը ժամում պտտվում է $30°$, այսինքն՝ րոպեում $0{,}5°$։ $h$ ժամ $m$ րոպեին, 12-ից հաշված.
$$\varphi_1 = 30h + 0{,}5m, \qquad \varphi_2 = 6m,$$
որտեղ $\varphi_1$-ն ժամի սլաքի անկյունն է, իսկ $\varphi_2$-ն՝ րոպեի սլաքինը։
Նրանց միջև անկյունը տարբերությունն է.
$$|30h - 5{,}5m|,$$
իսկ եթե այն $180°$-ից մեծ է, վերցնում ենք $360°$ հանած այդ թիվը։

*Օրինակ։* 3:40-ին. $|90 - 220| = 130°$։ Տարածված սխալ է ասել, թե «3:30-ին անկյունը $0°$ է, որովհետև երկու սլաքն էլ 6-ին են ցույց տալիս»։ Ժամի սլաքն անցել է 3-ից 4 ճանապարհի կեսը. $|90 - 165| = 75°$։

### Ինչու է փռված անկյան կիսորդը տալիս $90°$

Եթե $OC$-ն փռված անկյան կիսորդն է, ապա երկու մասերը հավասար են և գումարում տալիս են $180°$, ուստի յուրաքանչյուրը $90°$ է։ Այս պարզ քայլից է սկսվում ձեր կառուցած յուրաքանչյուր ուղիղ անկյուն։`,
    r`### Почему полный оборот — $360°$

Градус пришёл из Вавилона, около 4000 лет назад. Вавилонские астрономы считали шестидесятками, а в году около 360 дней, так что Солнце за день смещается среди звёзд примерно на один градус. Число $360$ ещё и очень удобно: оно делится на $2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120$ и $180$. Поэтому половина, треть, четверть и шестая часть оборота — целые числа градусов. Минута ($1° = 60'$) и секунда ($1' = 60''$) тоже вавилонские.

Позже вы встретите вторую единицу — **радиан**, который измеряет угол длиной дуги. В геометрии ничего не меняется, меняется только единица.

### Формула часов, выведенная

Минутная стрелка за 60 минут поворачивается на $360°$: на $6°$ в минуту. Часовая — на $30°$ в час: на $0{,}5°$ в минуту. В $h$ часов $m$ минут, считая от 12:
$$\text{часовая} = 30h + 0{,}5m, \qquad \text{минутная} = 6m.$$
Угол между ними — разность:
$$|30h - 5{,}5m|,$$
а если он больше $180°$, берём $360°$ минус он.

*Пример.* 3:40: $|90 - 220| = 130°$. Частая ошибка — сказать, что «в 3:30 угол $0°$, ведь обе стрелки на 6». Часовая стрелка прошла половину пути от 3 к 4: $|90 - 165| = 75°$.

### Почему биссектриса развёрнутого угла даёт $90°$

Если $OC$ — биссектриса развёрнутого угла, две части равны и в сумме дают $180°$, значит, каждая по $90°$. С этого простого шага начинается любой прямой угол, который вы строите.`,
  ),

  "adjacent-vertical-angles": th(
    r`### How a proof is written

A theorem has a **condition** (what is given) and a **conclusion** (what must be shown). A proof is a chain of steps, each justified by an axiom, a definition or an earlier theorem. The vertical angle theorem is the first real example:

| Step | Reason |
|---|---|
| $\angle 1 + \angle 2 = 180°$ | adjacent angles |
| $\angle 3 + \angle 2 = 180°$ | adjacent angles |
| $\angle 1 = \angle 3$ | both equal $180° - \angle 2$ |

### Theorem: bisectors of adjacent angles are perpendicular

Let adjacent angles be $\alpha$ and $\beta$, so $\alpha + \beta = 180°$. Their bisectors make angles $\frac{\alpha}{2}$ and $\frac{\beta}{2}$ with the common side. The angle between the bisectors is
$$\frac{\alpha}{2} + \frac{\beta}{2} = \frac{\alpha + \beta}{2} = \frac{180°}{2} = 90°.$$
It does not matter what $\alpha$ is: the answer is always $90°$.

### Theorem: bisectors of vertical angles lie on one line

Let vertical angles be $\alpha$ and $\alpha$, with adjacent angles $\beta$ between them, $\alpha + \beta = 180°$. Going from one bisector to the other we pass $\frac{\alpha}{2} + \beta + \frac{\alpha}{2} = \alpha + \beta = 180°$. A $180°$ angle is straight, so the two bisectors are complementary rays of one line. ∎

### Common mistakes

- Two angles with a common side are **not always** adjacent: their other sides must form a straight line.
- Equal angles are **not always** vertical: vertical angles must be formed by two crossing lines.
- The converse of "vertical angles are equal" is false. Two equal angles can sit anywhere.`,
    r`### Ինչպես է գրվում ապացույցը

Թեորեմն ունի **պայման** (ինչ է տրված) և **եզրակացություն** (ինչ պետք է ցույց տալ)։ Ապացույցը քայլերի շղթա է, որոնցից յուրաքանչյուրը հիմնավորվում է աքսիոմով, սահմանմամբ կամ ավելի վաղ ապացուցված թեորեմով։ Հակադիր անկյունների թեորեմն առաջին իսկական օրինակն է.

| Քայլ | Հիմնավորում |
|---|---|
| $\angle 1 + \angle 2 = 180°$ | կից անկյուններ |
| $\angle 3 + \angle 2 = 180°$ | կից անկյուններ |
| $\angle 1 = \angle 3$ | երկուսն էլ հավասար են $180° - \angle 2$-ի |

### Թեորեմ. կից անկյունների կիսորդներն ուղղահայաց են

Կից անկյունները լինեն $\alpha$ և $\beta$, այսինքն՝ $\alpha + \beta = 180°$։ Նրանց կիսորդներն ընդհանուր կողմի հետ կազմում են $\frac{\alpha}{2}$ և $\frac{\beta}{2}$ անկյուններ։ Կիսորդների միջև անկյունը
$$\frac{\alpha}{2} + \frac{\beta}{2} = \frac{\alpha + \beta}{2} = \frac{180°}{2} = 90°$$
Կարևոր չէ, թե ինչի է հավասար $\alpha$-ն. պատասխանը միշտ $90°$ է։

### Թեորեմ. հակադիր անկյունների կիսորդները մեկ ուղղի վրա են

Հակադիր անկյունները լինեն $\alpha$ և $\alpha$, նրանց միջև կից անկյունները՝ $\beta$, $\alpha + \beta = 180°$։ Մի կիսորդից մյուսին անցնելիս անցնում ենք $\frac{\alpha}{2} + \beta + \frac{\alpha}{2} = \alpha + \beta = 180°$։ $180°$ անկյունը փռված է, ուստի երկու կիսորդները մեկ ուղղի լրացուցիչ ճառագայթներ են։ ∎

### Տարածված սխալներ

- Ընդհանուր կողմ ունեցող երկու անկյունները **միշտ չէ**, որ կից են. նրանց մյուս կողմերը պետք է ուղիղ կազմեն։
- Հավասար անկյունները **միշտ չէ**, որ հակադիր են. հակադիր անկյունները պետք է առաջանան երկու հատվող ուղիղներից։
- «Հակադիր անկյունները հավասար են» պնդման հակադարձը սխալ է. երկու հավասար անկյուն կարող են գտնվել ցանկացած տեղում։`,
    r`### Как записывают доказательство

У теоремы есть **условие** (что дано) и **заключение** (что нужно показать). Доказательство — цепочка шагов, каждый из которых обоснован аксиомой, определением или ранее доказанной теоремой. Теорема о вертикальных углах — первый настоящий пример:

| Шаг | Обоснование |
|---|---|
| $\angle 1 + \angle 2 = 180°$ | смежные углы |
| $\angle 3 + \angle 2 = 180°$ | смежные углы |
| $\angle 1 = \angle 3$ | оба равны $180° - \angle 2$ |

### Теорема: биссектрисы смежных углов перпендикулярны

Пусть смежные углы равны $\alpha$ и $\beta$, то есть $\alpha + \beta = 180°$. Их биссектрисы образуют с общей стороной углы $\frac{\alpha}{2}$ и $\frac{\beta}{2}$. Угол между биссектрисами
$$\frac{\alpha}{2} + \frac{\beta}{2} = \frac{\alpha + \beta}{2} = \frac{180°}{2} = 90°.$$
Неважно, чему равно $\alpha$: ответ всегда $90°$.

### Теорема: биссектрисы вертикальных углов лежат на одной прямой

Пусть вертикальные углы равны $\alpha$ и $\alpha$, а смежные с ними углы между ними — $\beta$, $\alpha + \beta = 180°$. Переходя от одной биссектрисы к другой, проходим $\frac{\alpha}{2} + \beta + \frac{\alpha}{2} = \alpha + \beta = 180°$. Угол в $180°$ развёрнутый, значит, биссектрисы — дополнительные лучи одной прямой. ∎

### Частые ошибки

- Два угла с общей стороной **не всегда** смежные: их другие стороны должны образовать прямую.
- Равные углы **не всегда** вертикальные: вертикальные углы образуются двумя пересекающимися прямыми.
- Утверждение, обратное «вертикальные углы равны», неверно: два равных угла могут располагаться где угодно.`,
  ),

  "perpendicular-lines": th(
    r`### Proof: only one perpendicular through a point of a line

Let $M$ lie on line $a$. Suppose two different lines $b$ and $c$ through $M$ were both perpendicular to $a$. On one side of $a$ they give two rays $MB$ and $MC$, and both make $90°$ with the same ray of $a$. But the angle-measuring axiom says: from a given ray, on a given side, there is **exactly one** ray making a given angle. So $MB$ and $MC$ coincide, and $b = c$. ∎

### Proof: a perpendicular from a point outside the line exists

Let $M$ not lie on $a$. Fold the plane along $a$ (mathematically: **reflect** in $a$). $M$ goes to a point $M_1$ on the other side, and $\angle MHA$ and $\angle M_1HA$ become equal for the point $H$ where segment $MM_1$ crosses $a$. These two angles are adjacent and equal, so each is $90°$. So $MH \perp a$. ∎

It is also the **only** perpendicular from $M$: if there were two, $MH$ and $MK$, triangle $MHK$ would have two right angles, and we will prove that the angles of a triangle add up to only $180°$.

### Why "perpendicular" matters in practice

- A plumb line hangs perpendicular to the water level: builders check walls this way.
- The shortest way from a point to a road is along the perpendicular (proved in the lesson on distance).
- Paper folding gives perpendiculars for free: fold a sheet, then fold the crease onto itself. The new crease is perpendicular to the first one.

### A common mistake

Lines that look perpendicular on a sketch are not perpendicular until it is given or proved. In a proof, "it looks like $90°$" is never a reason.`,
    r`### Ապացույց. ուղղի կետով անցնում է միայն մեկ ուղղահայաց

$M$-ը լինի $a$ ուղղի վրա։ Ենթադրենք՝ $M$-ով անցնող երկու տարբեր $b$ և $c$ ուղիղներ երկուսն էլ ուղղահայաց են $a$-ին։ $a$-ի մի կողմում նրանք տալիս են $MB$ և $MC$ ճառագայթներ, և երկուսն էլ $a$-ի նույն ճառագայթի հետ կազմում են $90°$։ Բայց անկյունների չափման աքսիոմն ասում է. տրված ճառագայթից, տրված կողմում տրված անկյուն կազմող **ճիշտ մեկ** ճառագայթ կա։ Ուստի $MB$-ն և $MC$-ն համընկնում են, և $b = c$։ ∎

### Ապացույց. ուղղից դուրս գտնվող կետից ուղղահայաց գոյություն ունի

$M$-ը չլինի $a$-ի վրա։ Ծալենք հարթությունը $a$-ով (մաթեմատիկորեն՝ **արտապատկերենք** $a$-ի նկատմամբ)։ $M$-ն անցնում է մյուս կողմի $M_1$ կետին, և $MM_1$ հատվածի ու $a$-ի հատման $H$ կետի համար $\angle MHA$-ն և $\angle M_1HA$-ն հավասարվում են։ Այս երկու անկյունները կից են և հավասար, ուստի յուրաքանչյուրը $90°$ է։ Այսպիսով՝ $MH \perp a$։ ∎

Սա $M$-ից տարված **միակ** ուղղահայացն է. եթե լինեին երկուսը՝ $MH$ և $MK$, ապա $MHK$ եռանկյունն ունենար երկու ուղիղ անկյուն, իսկ մենք կապացուցենք, որ եռանկյան անկյունների գումարը ընդամենը $180°$ է։

### Ինչու է ուղղահայացը կարևոր գործնականում

- Ուղղալարը կախվում է ջրի մակարդակին ուղղահայաց. շինարարներն այդպես են ստուգում պատերը։
- Կետից ճանապարհ ամենակարճ ուղին ուղղահայացով է (կապացուցենք հեռավորության դասում)։
- Թղթի ծալումն ուղղահայացներ է տալիս անվճար. ծալեք թերթը, ապա ծալքը ծալեք ինքն իր վրա։ Նոր ծալքն ուղղահայաց է առաջինին։

### Տարածված սխալ

Գծագրում ուղղահայաց թվացող ուղիղներն ուղղահայաց չեն, քանի դեռ դա տրված կամ ապացուցված չէ։ Ապացույցում «կարծես $90°$ է» երբեք հիմնավորում չէ։`,
    r`### Доказательство: через точку прямой проходит только один перпендикуляр

Пусть $M$ лежит на прямой $a$. Предположим, что две различные прямые $b$ и $c$ через $M$ обе перпендикулярны $a$. По одну сторону от $a$ они дают лучи $MB$ и $MC$, и оба образуют $90°$ с одним и тем же лучом прямой $a$. Но аксиома измерения углов говорит: от данного луча в данную сторону можно отложить **ровно один** луч под данным углом. Значит, $MB$ и $MC$ совпадают, и $b = c$. ∎

### Доказательство: перпендикуляр из точки вне прямой существует

Пусть $M$ не лежит на $a$. Перегнём плоскость по $a$ (математически — **отразим** относительно $a$). $M$ перейдёт в точку $M_1$ по другую сторону, и для точки $H$, где отрезок $MM_1$ пересекает $a$, углы $\angle MHA$ и $\angle M_1HA$ совпадут. Эти углы смежные и равные, значит, каждый $90°$. Итак, $MH \perp a$. ∎

Это и **единственный** перпендикуляр из $M$: если бы их было два, $MH$ и $MK$, в треугольнике $MHK$ было бы два прямых угла, а мы докажем, что сумма углов треугольника всего $180°$.

### Почему перпендикуляр важен на практике

- Отвес висит перпендикулярно уровню воды: так строители проверяют стены.
- Кратчайший путь от точки до дороги идёт по перпендикуляру (докажем в уроке о расстоянии).
- Сгибание бумаги даёт перпендикуляр даром: согните лист, затем совместите линию сгиба саму с собой. Новый сгиб перпендикулярен первому.

### Частая ошибка

Прямые, которые на рисунке выглядят перпендикулярными, не перпендикулярны, пока это не дано или не доказано. В доказательстве «похоже на $90°$» никогда не является обоснованием.`,
  ),

  "triangle-elements": th(
    r`### What "congruent" really means

Two figures are **congruent** if one can be moved onto the other by a **rigid motion**: a slide, a turn or a flip, which keeps all distances. Cutting, stretching or bending is not allowed. So congruent triangles have all six elements equal: three sides and three angles.

### Six elements, but three are enough

A triangle has six elements. Do we need to check all six to know two triangles are congruent? The congruence tests say no: **three** well-chosen elements fix the triangle. Not every three work:

| Three elements | Fix the triangle? |
|---|---|
| three sides | yes (SSS) |
| two sides and the angle between them | yes (SAS) |
| a side and the two angles at its ends | yes (ASA) |
| three angles | **no**: the size is free |
| two sides and an angle **not** between them | **not always** |

### Why the order of letters matters

$\triangle ABC = \triangle MNK$ is a short way of writing six equalities: $AB = MN$, $BC = NK$, $CA = KM$, $\angle A = \angle M$, $\angle B = \angle N$, $\angle C = \angle K$. Writing $\triangle ABC = \triangle NMK$ for the same pair is a **different**, usually false, statement. A good habit: before writing, match vertices by the equal angles.

### How many triangles in a figure?

To count triangles with vertices among $n$ points, no three on a line: each triangle is a choice of 3 points. Choosing in order gives $n(n-1)(n-2)$ ways, and each triangle was counted $3 \cdot 2 \cdot 1 = 6$ times, so there are
$$\frac{n(n-1)(n-2)}{6}$$
triangles. Five points give $10$.`,
    r`### Ինչ է իրականում նշանակում «հավասար»

Երկու պատկեր **հավասար** են, եթե մեկը կարելի է տեղափոխել մյուսի վրա **շարժումով**՝ սահեցնելով, պտտելով կամ շրջելով, որը պահպանում է բոլոր հեռավորությունները։ Կտրել, ձգել կամ ծռել չի թույլատրվում։ Ուստի հավասար եռանկյունների բոլոր վեց տարրերը հավասար են՝ երեք կողմ և երեք անկյուն։

### Վեց տարր, բայց երեքը բավական են

Եռանկյունն ունի վեց տարր։ Արդյո՞ք պետք է ստուգել բոլոր վեցը՝ իմանալու համար, որ երկու եռանկյունները հավասար են։ Հավասարության հայտանիշներն ասում են՝ ոչ. **երեք** լավ ընտրված տարրը որոշում է եռանկյունը։ Ոչ բոլոր եռյակներն են աշխատում.

| Երեք տարր | Որոշո՞ւմ են եռանկյունը |
|---|---|
| երեք կողմ | այո (երրորդ հայտանիշ) |
| երկու կողմ և նրանց կազմած անկյունը | այո (առաջին հայտանիշ) |
| կողմ և նրան առընթեր երկու անկյուն | այո (երկրորդ հայտանիշ) |
| երեք անկյուն | **ոչ**. չափը ազատ է |
| երկու կողմ և **ոչ** նրանց կազմած անկյուն | **ոչ միշտ** |

### Ինչու է տառերի հերթականությունը կարևոր

$\triangle ABC = \triangle MNK$-ն վեց հավասարության կարճ գրառումն է. $AB = MN$, $BC = NK$, $CA = KM$, $\angle A = \angle M$, $\angle B = \angle N$, $\angle C = \angle K$։ Նույն զույգի համար $\triangle ABC = \triangle NMK$ գրելը **այլ**, սովորաբար սխալ պնդում է։ Լավ սովորություն է գրելուց առաջ գագաթները համապատասխանեցնել հավասար անկյուններով։

### Քանի՞ եռանկյուն կա պատկերում

$n$ կետերից, որոնցից ոչ մի երեքը մեկ ուղղի վրա չեն, գագաթներով եռանկյունները հաշվելու համար նկատենք՝ յուրաքանչյուր եռանկյուն 3 կետի ընտրություն է։ Հերթականությամբ ընտրելիս ստացվում է $n(n-1)(n-2)$ եղանակ, և յուրաքանչյուր եռանկյուն հաշվվել է $3 \cdot 2 \cdot 1 = 6$ անգամ, ուստի եռանկյունների թիվը
$$\frac{n(n-1)(n-2)}{6}$$
է։ Հինգ կետը տալիս է $10$ եռանկյուն։`,
    r`### Что на самом деле значит «равны»

Две фигуры **равны**, если одну можно совместить с другой **движением**: сдвигом, поворотом или переворотом, при котором сохраняются все расстояния. Резать, растягивать или сгибать нельзя. Поэтому у равных треугольников равны все шесть элементов: три стороны и три угла.

### Шесть элементов, но хватает трёх

У треугольника шесть элементов. Нужно ли проверять все шесть, чтобы знать, что треугольники равны? Признаки равенства говорят: нет, **три** удачно выбранных элемента задают треугольник. Подходит не любая тройка:

| Три элемента | Задают треугольник? |
|---|---|
| три стороны | да (третий признак) |
| две стороны и угол между ними | да (первый признак) |
| сторона и два прилежащих угла | да (второй признак) |
| три угла | **нет**: размер свободен |
| две стороны и угол **не** между ними | **не всегда** |

### Почему важен порядок букв

$\triangle ABC = \triangle MNK$ — краткая запись шести равенств: $AB = MN$, $BC = NK$, $CA = KM$, $\angle A = \angle M$, $\angle B = \angle N$, $\angle C = \angle K$. Записать $\triangle ABC = \triangle NMK$ для той же пары — **другое**, обычно неверное утверждение. Полезная привычка: перед записью сопоставить вершины по равным углам.

### Сколько треугольников на рисунке?

Чтобы сосчитать треугольники с вершинами в $n$ точках, никакие три из которых не на одной прямой, заметим: каждый треугольник — выбор 3 точек. Выбор по порядку даёт $n(n-1)(n-2)$ способов, и каждый треугольник посчитан $3 \cdot 2 \cdot 1 = 6$ раз, поэтому треугольников
$$\frac{n(n-1)(n-2)}{6}.$$
Пять точек дают $10$ треугольников.`,
  ),

  "first-congruence-test": th(
    r`### The full proof of SAS

Given: $AB = A_1B_1$, $AC = A_1C_1$, $\angle A = \angle A_1$.

1. Move $\triangle ABC$ so that vertex $A$ lands on $A_1$, and ray $AB$ lands on ray $A_1B_1$, with $C$ on the same side of $A_1B_1$ as $C_1$.
2. Since $\angle A = \angle A_1$, ray $AC$ lands on ray $A_1C_1$ (only one ray makes this angle on this side).
3. Since $AB = A_1B_1$, point $B$ lands on $B_1$ (only one point of a ray at this distance). In the same way $C$ lands on $C_1$.
4. Two points fix a line, so side $BC$ lands on $B_1C_1$. All three vertices coincide, and the triangles are congruent. ∎

### Why some books take SAS as an axiom

Step 1 uses "moving" a triangle without changing it. Euclid did this freely, but "moving" is not one of his postulates. Hilbert solved the problem by making (a weak form of) SAS an **axiom**. The other tests are then proved from it. Both ways give the same geometry.

### Why the angle must be between the sides

Take angle $A = 30°$, side $AB = 10$ and side $BC = 6$, where $BC$ is **opposite** the angle. Draw the ray from $A$ at $30°$ and a circle with centre $B$ and radius 6. The circle crosses the ray at **two** points $C_1$ and $C_2$. Triangles $ABC_1$ and $ABC_2$ share $AB$, $BC$ and $\angle A$, but one is clearly larger than the other. So "SSA" is not a congruence test.

### Writing proofs well

State the three equal pairs, give each a reason, name the test, and only then the conclusion. The conclusion must be about **corresponding** elements: in $\triangle AOC = \triangle BOD$ side $AC$ corresponds to $BD$, not to $OD$.`,
    r`### Հավասարության առաջին հայտանիշի լրիվ ապացույցը

Տրված է. $AB = A_1B_1$, $AC = A_1C_1$, $\angle A = \angle A_1$։

1. Տեղափոխենք $\triangle ABC$-ն այնպես, որ $A$ գագաթն ընկնի $A_1$-ի վրա, $AB$ ճառագայթը՝ $A_1B_1$ ճառագայթի վրա, իսկ $C$-ն լինի $A_1B_1$-ի այն կողմում, որտեղ $C_1$-ն է։
2. Քանի որ $\angle A = \angle A_1$, $AC$ ճառագայթն ընկնում է $A_1C_1$-ի վրա (այդ կողմում այդ անկյունը կազմող ճառագայթը միակն է)։
3. Քանի որ $AB = A_1B_1$, $B$ կետն ընկնում է $B_1$-ի վրա (ճառագայթի վրա այդ հեռավորությամբ կետը միակն է)։ Նույն ձևով $C$-ն ընկնում է $C_1$-ի վրա։
4. Երկու կետը որոշում է ուղիղը, ուստի $BC$ կողմն ընկնում է $B_1C_1$-ի վրա։ Երեք գագաթներն էլ համընկնում են, և եռանկյունները հավասար են։ ∎

### Ինչու են որոշ գրքեր առաջին հայտանիշն աքսիոմ համարում

1-ին քայլում եռանկյունը «տեղափոխում» ենք՝ առանց փոխելու։ Էվկլիդեսն այդպես ազատ էր վարվում, բայց «տեղափոխումը» նրա պոստուլատներից չէ։ Հիլբերտը խնդիրը լուծեց՝ առաջին հայտանիշը (նրա թույլ տարբերակը) **աքսիոմ** դարձնելով։ Մյուս հայտանիշներն ապացուցվում են դրանից։ Երկու ճանապարհն էլ տալիս են նույն երկրաչափությունը։

### Ինչու անկյունը պետք է լինի կողմերի կազմածը

Վերցնենք $A = 30°$ անկյուն, $AB = 10$ կողմ և $BC = 6$ կողմ, ընդ որում $BC$-ն անկյան **դիմաց** է։ $A$-ից տանենք $30°$ անկյան տակ ճառագայթ և $B$ կենտրոնով, 6 շառավղով շրջանագիծ։ Շրջանագիծը ճառագայթը հատում է **երկու** կետում՝ $C_1$ և $C_2$։ $ABC_1$ և $ABC_2$ եռանկյուններն ունեն ընդհանուր $AB$, $BC$ և $\angle A$, բայց մեկն ակնհայտորեն մեծ է մյուսից։ Ուստի «երկու կողմ և ոչ նրանց կազմած անկյուն» հայտանիշ չէ։

### Ինչպես լավ գրել ապացույցը

Թվարկեք երեք հավասար զույգերը, յուրաքանչյուրի համար տվեք հիմնավորում, անվանեք հայտանիշը և միայն դրանից հետո՝ եզրակացությունը։ Եզրակացությունը պետք է վերաբերի **համապատասխան** տարրերին. $\triangle AOC = \triangle BOD$-ում $AC$ կողմին համապատասխանում է $BD$-ն, ոչ թե $OD$-ն։`,
    r`### Полное доказательство первого признака

Дано: $AB = A_1B_1$, $AC = A_1C_1$, $\angle A = \angle A_1$.

1. Переместим $\triangle ABC$ так, чтобы вершина $A$ совпала с $A_1$, луч $AB$ лёг на луч $A_1B_1$, а $C$ оказалась по ту же сторону от $A_1B_1$, что и $C_1$.
2. Так как $\angle A = \angle A_1$, луч $AC$ ляжет на луч $A_1C_1$ (в эту сторону такой угол образует только один луч).
3. Так как $AB = A_1B_1$, точка $B$ совпадёт с $B_1$ (на луче только одна точка на таком расстоянии). Так же $C$ совпадёт с $C_1$.
4. Две точки задают прямую, поэтому сторона $BC$ совпадёт с $B_1C_1$. Все три вершины совпали, треугольники равны. ∎

### Почему в некоторых книгах первый признак — аксиома

В шаге 1 мы «перемещаем» треугольник, не меняя его. Евклид делал это свободно, но «перемещения» нет среди его постулатов. Гильберт решил проблему, сделав (ослабленный) первый признак **аксиомой**. Остальные признаки выводятся из неё. Оба пути дают одну и ту же геометрию.

### Почему угол должен быть между сторонами

Возьмём угол $A = 30°$, сторону $AB = 10$ и сторону $BC = 6$, лежащую **против** угла. Проведём из $A$ луч под $30°$ и окружность с центром $B$ радиуса 6. Окружность пересекает луч в **двух** точках $C_1$ и $C_2$. У треугольников $ABC_1$ и $ABC_2$ общие $AB$, $BC$ и $\angle A$, но один явно больше другого. Значит, «две стороны и угол не между ними» — не признак равенства.

### Как хорошо записать доказательство

Назовите три пары равных элементов, обоснуйте каждую, назовите признак и только потом — вывод. Вывод должен касаться **соответственных** элементов: в $\triangle AOC = \triangle BOD$ стороне $AC$ соответствует $BD$, а не $OD$.`,
  ),
};
