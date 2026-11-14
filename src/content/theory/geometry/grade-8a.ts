import { th } from "../kit";

const r = String.raw;

/** Geometry 8, unit 1: quadrilaterals. */
export const geometry8a = {
  polygons: th(
    r`### Why the exterior angles always add up to $360°$

At each vertex the interior and exterior angles are adjacent, so together they give $180°$. Over all $n$ vertices that is $n \cdot 180°$. The interior angles take $(n - 2) \cdot 180°$ of it, so the exterior angles take
$$n \cdot 180° - (n - 2) \cdot 180° = 360°.$$
The number $n$ cancels. A walker going round a convex polygon turns by each exterior angle in turn and ends facing the starting direction: one full turn.

### Which regular polygons tile a floor

Regular tiles meeting at a point must fill $360°$ around it, so the angle of one tile must divide $360°$ exactly. The angle is $180° - \frac{360°}{n}$.

| $n$ | angle | $360°$ : angle |
|---|---|---|
| $3$ | $60°$ | $6$ |
| $4$ | $90°$ | $4$ |
| $5$ | $108°$ | $3{,}33\ldots$ (no) |
| $6$ | $120°$ | $3$ |
| $n \ge 7$ | between $120°$ and $180°$ | between $2$ and $3$ (no) |

So only triangles, squares and hexagons work. This is why floors use squares and why bees build hexagons: of the three, the hexagon encloses the most area for a given wall length.

### When the formula needs care

For a **non-convex** polygon, the diagonals from one vertex may go outside. The formula $(n - 2) \cdot 180°$ is still true (cut the polygon into $n - 2$ triangles in another way), but an interior angle can now be larger than $180°$, and "exterior angle" no longer makes sense at such a vertex.

### Common mistake

The number of diagonals is $\frac{n(n-3)}{2}$, not $n(n - 3)$: each diagonal has two ends and is counted from both.`,
    r`### Ինչու է արտաքին անկյունների գումարը միշտ $360°$

Յուրաքանչյուր գագաթում ներքին և արտաքին անկյունները կից են, ուստի միասին տալիս են $180°$։ Բոլոր $n$ գագաթներում դա $n \cdot 180°$ է։ Ներքին անկյունները դրանից վերցնում են $(n - 2) \cdot 180°$, ուստի արտաքին անկյուններին մնում է
$$n \cdot 180° - (n - 2) \cdot 180° = 360°$$
$n$ թիվը կրճատվում է։ Ուռուցիկ բազմանկյան շուրջը քայլողը հերթով թեքվում է յուրաքանչյուր արտաքին անկյունով և վերջում նայում է սկզբնական ուղղությամբ. մեկ լրիվ պտույտ։

### Ո՞ր կանոնավոր բազմանկյուններով կարելի է հատակը ծածկել

Մեկ կետում հանդիպող կանոնավոր սալիկները պետք է նրա շուրջ լրացնեն $360°$, ուստի մեկ սալիկի անկյունը պետք է առանց մնացորդի բաժանի $360°$-ը։ Անկյունը $180° - \frac{360°}{n}$ է։

| $n$ | անկյուն | $360°$ : անկյուն |
|---|---|---|
| $3$ | $60°$ | $6$ |
| $4$ | $90°$ | $4$ |
| $5$ | $108°$ | $3{,}33\ldots$ (ոչ) |
| $6$ | $120°$ | $3$ |
| $n \ge 7$ | $120°$-ի և $180°$-ի միջև | $2$-ի և $3$-ի միջև (ոչ) |

Ուստի հարմար են միայն եռանկյունները, քառակուսիները և վեցանկյունները։ Ահա թե ինչու են հատակները քառակուսի սալիկներով, իսկ մեղուները վեցանկյուններ են կառուցում. երեքից վեցանկյունը տրված պատի երկարության դեպքում ամենամեծ մակերեսն է պարփակում։

### Երբ բանաձևի հետ պետք է զգույշ լինել

**Ոչ ուռուցիկ** բազմանկյան դեպքում մեկ գագաթից տարված անկյունագծերը կարող են դուրս գալ։ $(n - 2) \cdot 180°$ բանաձևը դարձյալ ճիշտ է (բազմանկյունն այլ կերպ բաժանեք $n - 2$ եռանկյան), բայց ներքին անկյունն այժմ կարող է $180°$-ից մեծ լինել, և այդպիսի գագաթում «արտաքին անկյուն» հասկացությունն իմաստ չունի։

### Տարածված սխալ

Անկյունագծերի թիվը $\frac{n(n-3)}{2}$ է, ոչ թե $n(n - 3)$. յուրաքանչյուր անկյունագիծ ունի երկու ծայր և հաշվվում է երկուսից։`,
    r`### Почему внешние углы всегда дают $360°$

В каждой вершине внутренний и внешний углы смежные, вместе $180°$. По всем $n$ вершинам это $n \cdot 180°$. Внутренние углы забирают $(n - 2) \cdot 180°$, поэтому на внешние остаётся
$$n \cdot 180° - (n - 2) \cdot 180° = 360°.$$
Число $n$ сокращается. Идущий вокруг выпуклого многоугольника поворачивает по очереди на каждый внешний угол и в конце смотрит в исходном направлении: один полный оборот.

### Какими правильными многоугольниками можно замостить пол

Правильные плитки, сходящиеся в точке, должны заполнить вокруг неё $360°$, поэтому угол плитки должен нацело делить $360°$. Угол равен $180° - \frac{360°}{n}$.

| $n$ | угол | $360°$ : угол |
|---|---|---|
| $3$ | $60°$ | $6$ |
| $4$ | $90°$ | $4$ |
| $5$ | $108°$ | $3{,}33\ldots$ (нет) |
| $6$ | $120°$ | $3$ |
| $n \ge 7$ | между $120°$ и $180°$ | между $2$ и $3$ (нет) |

Подходят только треугольники, квадраты и шестиугольники. Поэтому полы кладут квадратами, а пчёлы строят шестиугольники: из трёх вариантов шестиугольник при данной длине стенок охватывает наибольшую площадь.

### Когда с формулой нужна осторожность

У **невыпуклого** многоугольника диагонали из одной вершины могут выходить наружу. Формула $(n - 2) \cdot 180°$ всё равно верна (разрежьте многоугольник на $n - 2$ треугольника иначе), но внутренний угол теперь может быть больше $180°$, и «внешний угол» в такой вершине теряет смысл.

### Частая ошибка

Число диагоналей равно $\frac{n(n-3)}{2}$, а не $n(n - 3)$: у каждой диагонали два конца, и её считают с обоих.`,
  ),

  parallelogram: th(
    r`### Proof that the diagonals bisect each other

Let the diagonals of parallelogram $ABCD$ meet at $O$. Compare $\triangle AOB$ and $\triangle COD$:

- $AB = CD$ (opposite sides, already proved);
- $\angle OAB = \angle OCD$ (alternate angles, $AB \parallel CD$, transversal $AC$);
- $\angle OBA = \angle ODC$ (alternate angles, transversal $BD$).

By ASA the triangles are congruent, so $AO = OC$ and $BO = OD$. ∎

### A useful lemma: parallel segments between parallel lines

**Segments of parallel lines enclosed between two parallel lines are equal.** Indeed, the four lines form a parallelogram, and these segments are its opposite sides. This explains, for example, why all the rungs of a ladder with parallel rails have the same length when they are parallel to each other.

### Why a parallelogram is not rigid

Opposite sides are equal, but the angle is free: four rods with hinges can lean into any parallelogram. Engineers use this on purpose. A desk lamp arm, a car's windscreen wiper linkage and some lifting tables are parallelogram mechanisms: one side stays parallel to the opposite side however the angle changes, so a lamp head or a table top keeps its direction.

### The parallelogram as a centre of symmetry

Because $AO = OC$ and $BO = OD$, a half turn about $O$ swaps $A$ with $C$ and $B$ with $D$. Every parallelogram is symmetric about the meeting point of its diagonals. Any line through $O$ cuts it into two congruent halves of equal area, which is a quick way to halve a parallelogram-shaped field.

### Common mistake

The diagonals of a parallelogram bisect each other but are **not** equal in general, and they do **not** bisect the angles. Those are extra properties of the rectangle and the rhombus.`,
    r`### Ապացույց, որ անկյունագծերը հատման կետում կիսվում են

$ABCD$ զուգահեռագծի անկյունագծերը թող հատվեն $O$ կետում։ Համեմատենք $\triangle AOB$-ն և $\triangle COD$-ն.

- $AB = CD$ (հանդիպակաց կողմեր, արդեն ապացուցված է).
- $\angle OAB = \angle OCD$ (խաչադիր անկյուններ, $AB \parallel CD$, $AC$ հատող).
- $\angle OBA = \angle ODC$ (խաչադիր անկյուններ, $BD$ հատող)։

Ըստ երկրորդ հայտանիշի՝ եռանկյունները հավասար են, ուստի $AO = OC$ և $BO = OD$։ ∎

### Օգտակար լեմմա. զուգահեռ հատվածներ զուգահեռ ուղիղների միջև

**Երկու զուգահեռ ուղիղների միջև պարփակված զուգահեռ ուղիղների հատվածները հավասար են։** Իսկապես, չորս ուղիղները կազմում են զուգահեռագիծ, իսկ այդ հատվածները նրա հանդիպակաց կողմերն են։ Սա բացատրում է, օրինակ, թե ինչու զուգահեռ կողային ձողերով սանդուղքի բոլոր աստիճաններն ունեն նույն երկարությունը, երբ իրար զուգահեռ են։

### Ինչու զուգահեռագիծը կոշտ չէ

Հանդիպակաց կողմերը հավասար են, բայց անկյունն ազատ է. հոդակապերով չորս ձողը կարող է թեքվել ցանկացած զուգահեռագծի։ Ինժեներներն օգտագործում են դա դիտավորյալ։ Սեղանի լամպի թևը, մեքենայի ապակեմաքրիչի լծակները և որոշ բարձրացվող սեղաններ զուգահեռագծային մեխանիզմներ են. մի կողմը մնում է հանդիպակաց կողմին զուգահեռ, ինչպես էլ փոխվի անկյունը, ուստի լամպի գլուխը կամ սեղանի մակերեսը պահպանում է իր ուղղությունը։

### Զուգահեռագիծը և համաչափության կենտրոնը

Քանի որ $AO = OC$ և $BO = OD$, $O$-ի շուրջ կես պտույտը $A$-ն տեղափոխում է $C$-ի տեղը, իսկ $B$-ն՝ $D$-ի։ Յուրաքանչյուր զուգահեռագիծ համաչափ է իր անկյունագծերի հատման կետի նկատմամբ։ $O$-ով անցնող ցանկացած ուղիղ այն բաժանում է երկու հավասար և հավասարամեծ կեսերի. զուգահեռագծի ձև ունեցող դաշտը կիսելու արագ եղանակ է։

### Տարածված սխալ

Զուգահեռագծի անկյունագծերը կիսվում են, բայց ընդհանուր դեպքում **հավասար չեն** և անկյունները **չեն** կիսում։ Դրանք ուղղանկյան և շեղանկյան լրացուցիչ հատկություններն են։`,
    r`### Доказательство: диагонали делятся точкой пересечения пополам

Пусть диагонали параллелограмма $ABCD$ пересекаются в точке $O$. Сравним $\triangle AOB$ и $\triangle COD$:

- $AB = CD$ (противоположные стороны, уже доказано);
- $\angle OAB = \angle OCD$ (накрест лежащие, $AB \parallel CD$, секущая $AC$);
- $\angle OBA = \angle ODC$ (накрест лежащие, секущая $BD$).

По второму признаку треугольники равны, значит, $AO = OC$ и $BO = OD$. ∎

### Полезная лемма: отрезки параллельных прямых между параллельными

**Отрезки параллельных прямых, заключённые между двумя параллельными прямыми, равны.** Действительно, четыре прямые образуют параллелограмм, а эти отрезки — его противоположные стороны. Это объясняет, например, почему все перекладины лестницы с параллельными тетивами одной длины, если они параллельны друг другу.

### Почему параллелограмм не жёсткий

Противоположные стороны равны, но угол свободен: четыре стержня на шарнирах можно наклонить в любой параллелограмм. Инженеры используют это нарочно. Рычаг настольной лампы, тяги автомобильного стеклоочистителя, некоторые подъёмные столы — параллелограммные механизмы: одна сторона остаётся параллельной противоположной при любом угле, поэтому плафон лампы или крышка стола сохраняет направление.

### Параллелограмм и центр симметрии

Так как $AO = OC$ и $BO = OD$, поворот на $180°$ вокруг $O$ меняет местами $A$ и $C$, $B$ и $D$. Любой параллелограмм симметричен относительно точки пересечения диагоналей. Любая прямая через $O$ делит его на две равные половины равной площади — быстрый способ разделить поле в форме параллелограмма пополам.

### Частая ошибка

Диагонали параллелограмма делятся пополам, но в общем случае **не равны** и **не** делят углы пополам. Это дополнительные свойства прямоугольника и ромба.`,
  ),

  "parallelogram-tests": th(
    r`### Proof of the first test: opposite sides equal

Let $AB = CD$ and $BC = AD$ in quadrilateral $ABCD$. Draw diagonal $AC$. Then $\triangle ABC = \triangle CDA$ by SSS ($AC$ is common). From the congruence, $\angle BAC = \angle DCA$, which are alternate angles for lines $AB$ and $CD$, so $AB \parallel CD$. Likewise $\angle BCA = \angle DAC$ gives $BC \parallel AD$. ∎

### Proof of the third test: diagonals bisect each other

Let $AO = OC$ and $BO = OD$. Then $\triangle AOB = \triangle COD$ by SAS (vertical angles at $O$). So $\angle OAB = \angle OCD$: alternate angles, hence $AB \parallel CD$. In the same way $\triangle AOD = \triangle COB$ gives $AD \parallel BC$. ∎

### A fourth test: opposite angles equal

If $\angle A = \angle C = \alpha$ and $\angle B = \angle D = \beta$, the angle sum of the quadrilateral gives $2\alpha + 2\beta = 360°$, so $\alpha + \beta = 180°$. Then $\angle A + \angle B = 180°$ are co-interior angles for $AD$ and $BC$, so $AD \parallel BC$; similarly $AB \parallel CD$. ∎

### "Necessary" and "sufficient"

A **property** is a **necessary** condition: every parallelogram has it. A **test** is a **sufficient** condition: having it is enough. When a statement is both, we say "if and only if". All the properties in this unit happen to be both. That is not automatic. "One pair of parallel sides" is necessary for a parallelogram but not sufficient (a trapezium has it too).

### A typical trap

"$AB \parallel CD$ and $BC = AD$" does **not** make a parallelogram: an isosceles trapezium has exactly this. The equal sides and the parallel sides must be the **same** pair.`,
    r`### Առաջին հայտանիշի ապացույցը. հանդիպակաց կողմերը հավասար են

Թող $ABCD$ քառանկյան մեջ $AB = CD$ և $BC = AD$։ Տանենք $AC$ անկյունագիծը։ Այդ դեպքում $\triangle ABC = \triangle CDA$՝ ըստ երրորդ հայտանիշի ($AC$-ն ընդհանուր է)։ Հավասարությունից $\angle BAC = \angle DCA$, որոնք $AB$ և $CD$ ուղիղների համար խաչադիր անկյուններ են, ուստի $AB \parallel CD$։ Նույն կերպ $\angle BCA = \angle DAC$-ից $BC \parallel AD$։ ∎

### Երրորդ հայտանիշի ապացույցը. անկյունագծերը կիսվում են

Թող $AO = OC$ և $BO = OD$։ Այդ դեպքում $\triangle AOB = \triangle COD$՝ ըստ առաջին հայտանիշի ($O$-ում հակադիր անկյուններ)։ Ուստի $\angle OAB = \angle OCD$. խաչադիր անկյուններ են, հետևաբար $AB \parallel CD$։ Նույն կերպ $\triangle AOD = \triangle COB$-ից $AD \parallel BC$։ ∎

### Չորրորդ հայտանիշ. հանդիպակաց անկյունները հավասար են

Եթե $\angle A = \angle C = \alpha$ և $\angle B = \angle D = \beta$, ապա քառանկյան անկյունների գումարից $2\alpha + 2\beta = 360°$, այսինքն՝ $\alpha + \beta = 180°$։ Այդ դեպքում $\angle A + \angle B = 180°$-ը $AD$ և $BC$ ուղիղների համար միակողմանի անկյուններ են, ուստի $AD \parallel BC$. նույն կերպ $AB \parallel CD$։ ∎

### «Անհրաժեշտ» և «բավարար»

**Հատկությունը** **անհրաժեշտ** պայման է. այն ունի յուրաքանչյուր զուգահեռագիծ։ **Հայտանիշը** **բավարար** պայման է. դա ունենալը բավական է։ Երբ պնդումը երկուսն էլ է, ասում ենք «այն և միայն այն դեպքում, երբ»։ Այս բաժնի բոլոր հատկությունները պատահաբար երկուսն էլ են։ Դա ինքնաբերաբար չէ։ «Զուգահեռ կողմերի մեկ զույգը» զուգահեռագծի համար անհրաժեշտ է, բայց բավարար չէ (սեղանն էլ ունի)։

### Տիպիկ թակարդ

«$AB \parallel CD$ և $BC = AD$» պայմանը զուգահեռագիծ **չի** տալիս. հավասարասրուն սեղանը հենց այդպիսին է։ Հավասար կողմերը և զուգահեռ կողմերը պետք է լինեն **նույն** զույգը։`,
    r`### Доказательство первого признака: противоположные стороны равны

Пусть в четырёхугольнике $ABCD$ $AB = CD$ и $BC = AD$. Проведём диагональ $AC$. Тогда $\triangle ABC = \triangle CDA$ по третьему признаку ($AC$ — общая). Из равенства $\angle BAC = \angle DCA$, а это накрест лежащие углы при прямых $AB$ и $CD$, значит, $AB \parallel CD$. Так же $\angle BCA = \angle DAC$ даёт $BC \parallel AD$. ∎

### Доказательство третьего признака: диагонали делятся пополам

Пусть $AO = OC$ и $BO = OD$. Тогда $\triangle AOB = \triangle COD$ по первому признаку (вертикальные углы при $O$). Значит, $\angle OAB = \angle OCD$ — накрест лежащие, поэтому $AB \parallel CD$. Так же $\triangle AOD = \triangle COB$ даёт $AD \parallel BC$. ∎

### Четвёртый признак: противоположные углы равны

Если $\angle A = \angle C = \alpha$ и $\angle B = \angle D = \beta$, из суммы углов четырёхугольника $2\alpha + 2\beta = 360°$, то есть $\alpha + \beta = 180°$. Тогда $\angle A + \angle B = 180°$ — односторонние углы при $AD$ и $BC$, значит, $AD \parallel BC$; аналогично $AB \parallel CD$. ∎

### «Необходимо» и «достаточно»

**Свойство** — **необходимое** условие: оно есть у каждого параллелограмма. **Признак** — **достаточное** условие: его наличия хватает. Когда утверждение и то и другое, говорят «тогда и только тогда». Все свойства этой главы оказываются и признаками. Это не автоматически: «одна пара параллельных сторон» для параллелограмма необходима, но не достаточна (у трапеции она тоже есть).

### Типичная ловушка

«$AB \parallel CD$ и $BC = AD$» **не** даёт параллелограмма: равнобокая трапеция именно такая. Равные и параллельные стороны должны быть **одной и той же** парой.`,
  ),

  trapezium: th(
    r`### Proof: an isosceles trapezium has equal base angles

In trapezium $ABCD$ with $BC \parallel AD$ and $AB = CD$, drop heights $BH$ and $CK$ to $AD$. Then $BH = CK$ (distance between parallel lines). The right triangles $ABH$ and $DCK$ have equal hypotenuses $AB = DC$ and equal legs $BH = CK$, so they are congruent by hypotenuse and leg. Hence $\angle A = \angle D$, and then $\angle B = 180° - \angle A = 180° - \angle D = \angle C$. ∎

### Proof: its diagonals are equal

$\triangle ABD$ and $\triangle DCA$ have $AB = DC$, the common side $AD$, and $\angle A = \angle D$. By SAS they are congruent, so $BD = CA$. ∎

Both converses are true: a trapezium with equal base angles, or with equal diagonals, is isosceles.

### Proof of the midline theorem

Let $M$ and $N$ be the midpoints of legs $AB$ and $CD$. Draw line $BN$ and let it meet line $AD$ at $E$.

1. $\triangle BCN = \triangle EDN$ by ASA: $CN = DN$, vertical angles at $N$, alternate angles at $C$ and $D$ ($BC \parallel AD$). So $BN = NE$ and $BC = DE$.
2. In $\triangle ABE$, $M$ and $N$ are midpoints of $AB$ and $BE$, so $MN$ is a midline of this triangle: $MN \parallel AE$ and $MN = \frac{1}{2} AE$.
3. $AE = AD + DE = AD + BC$.

So $MN \parallel AD$ and $MN = \frac{AD + BC}{2}$. ∎

The trick in step 1, "extend to turn a trapezium into a triangle", is one of the most useful in quadrilateral problems.

### Why "half-sum" makes sense

If the shorter base shrinks to a point, the trapezium becomes a triangle, and the formula gives $\frac{a + 0}{2}$: exactly the triangle's midline. If the bases become equal, it is a parallelogram and the midline equals each base. The formula joins both cases.`,
    r`### Ապացույց. հավասարասրուն սեղանի հիմքին առընթեր անկյունները հավասար են

$BC \parallel AD$ և $AB = CD$ ունեցող $ABCD$ սեղանում իջեցնենք $BH$ և $CK$ բարձրությունները $AD$-ին։ $BH = CK$ (զուգահեռ ուղիղների հեռավորություն)։ $ABH$ և $DCK$ ուղղանկյուն եռանկյուններն ունեն հավասար ներքնաձիգներ՝ $AB = DC$, և հավասար էջեր՝ $BH = CK$, ուստի հավասար են ըստ ներքնաձիգի և էջի։ Հետևաբար $\angle A = \angle D$, ապա $\angle B = 180° - \angle A = 180° - \angle D = \angle C$։ ∎

### Ապացույց. նրա անկյունագծերը հավասար են

$\triangle ABD$-ն և $\triangle DCA$-ն ունեն $AB = DC$, ընդհանուր $AD$ կողմ և $\angle A = \angle D$։ Ըստ առաջին հայտանիշի՝ նրանք հավասար են, ուստի $BD = CA$։ ∎

Երկու հակադարձներն էլ ճիշտ են. հիմքին առընթեր հավասար անկյուններով կամ հավասար անկյունագծերով սեղանը հավասարասրուն է։

### Միջին գծի թեորեմի ապացույցը

Թող $M$-ը և $N$-ը լինեն $AB$ և $CD$ սրունքների միջնակետերը։ Տանենք $BN$ ուղիղը, և թող այն $AD$ ուղիղը հատի $E$ կետում։

1. $\triangle BCN = \triangle EDN$՝ ըստ երկրորդ հայտանիշի. $CN = DN$, $N$-ում հակադիր անկյուններ, $C$-ում և $D$-ում խաչադիր անկյուններ ($BC \parallel AD$)։ Ուստի $BN = NE$ և $BC = DE$։
2. $\triangle ABE$-ում $M$-ը և $N$-ը $AB$-ի և $BE$-ի միջնակետերն են, ուստի $MN$-ը այդ եռանկյան միջին գիծն է. $MN \parallel AE$ և $MN = \frac{1}{2} AE$։
3. $AE = AD + DE = AD + BC$։

Ուստի $MN \parallel AD$ և $MN = \frac{AD + BC}{2}$։ ∎

1-ին քայլի հնարքը՝ «շարունակել և սեղանը եռանկյան վերածել», քառանկյունների խնդիրներում ամենաօգտակարներից է։

### Ինչու է «կիսագումարը» տրամաբանական

Եթե փոքր հիմքը սեղմվի մինչև կետ, սեղանը կդառնա եռանկյուն, և բանաձևը կտա $\frac{a + 0}{2}$. ճիշտ եռանկյան միջին գիծը։ Եթե հիմքերը հավասարվեն, կստացվի զուգահեռագիծ, և միջին գիծը հավասար կլինի յուրաքանչյուր հիմքին։ Բանաձևը միավորում է երկու դեպքերը։`,
    r`### Доказательство: углы при основании равнобокой трапеции равны

В трапеции $ABCD$ с $BC \parallel AD$ и $AB = CD$ опустим высоты $BH$ и $CK$ на $AD$. Тогда $BH = CK$ (расстояние между параллельными). Прямоугольные треугольники $ABH$ и $DCK$ имеют равные гипотенузы $AB = DC$ и равные катеты $BH = CK$, значит, равны по гипотенузе и катету. Следовательно, $\angle A = \angle D$, а тогда $\angle B = 180° - \angle A = 180° - \angle D = \angle C$. ∎

### Доказательство: её диагонали равны

У $\triangle ABD$ и $\triangle DCA$: $AB = DC$, общая сторона $AD$ и $\angle A = \angle D$. По первому признаку они равны, значит, $BD = CA$. ∎

Обе обратные теоремы верны: трапеция с равными углами при основании или с равными диагоналями равнобокая.

### Доказательство теоремы о средней линии

Пусть $M$ и $N$ — середины боковых сторон $AB$ и $CD$. Проведём прямую $BN$; пусть она пересекает прямую $AD$ в точке $E$.

1. $\triangle BCN = \triangle EDN$ по второму признаку: $CN = DN$, вертикальные углы при $N$, накрест лежащие углы при $C$ и $D$ ($BC \parallel AD$). Значит, $BN = NE$ и $BC = DE$.
2. В $\triangle ABE$ точки $M$ и $N$ — середины $AB$ и $BE$, поэтому $MN$ — средняя линия этого треугольника: $MN \parallel AE$ и $MN = \frac{1}{2} AE$.
3. $AE = AD + DE = AD + BC$.

Итак, $MN \parallel AD$ и $MN = \frac{AD + BC}{2}$. ∎

Приём шага 1 — «продолжить и превратить трапецию в треугольник» — один из самых полезных в задачах о четырёхугольниках.

### Почему «полусумма» разумна

Если меньшее основание сжать в точку, трапеция станет треугольником, и формула даст $\frac{a + 0}{2}$ — ровно среднюю линию треугольника. Если основания станут равными, получится параллелограмм, и средняя линия равна каждому основанию. Формула объединяет оба случая.`,
  ),

  "thales-theorem": th(
    r`### Proof of Thales' theorem

Let parallel lines through $A_1, A_2, A_3$ cut equal segments $A_1A_2 = A_2A_3$ on line $a$ and meet line $b$ at $B_1, B_2, B_3$. We prove $B_1B_2 = B_2B_3$.

1. Through $B_1$ and $B_2$ draw lines parallel to $a$. Let them meet the next parallels at $C_1$ (on line $A_2B_2$) and $C_2$ (on line $A_3B_3$).
2. $A_1B_1C_1A_2$ and $A_2B_2C_2A_3$ are parallelograms, so $B_1C_1 = A_1A_2$ and $B_2C_2 = A_2A_3$. Hence $B_1C_1 = B_2C_2$.
3. $\angle B_2B_1C_1 = \angle B_3B_2C_2$ (corresponding, $B_1C_1 \parallel B_2C_2$) and $\angle B_1C_1B_2 = \angle B_2C_2B_3$ (sides parallel and in the same direction).
4. By ASA $\triangle B_1C_1B_2 = \triangle B_2C_2B_3$, so $B_1B_2 = B_2B_3$. ∎

If $a \parallel b$, the statement is simply "opposite sides of a parallelogram are equal".

### The generalised theorem

Thales' theorem is the first step to a stronger one: **parallel lines cut proportional segments on any two lines**. If on one line the segments are in the ratio $2 : 3$, then on the other line they are also $2 : 3$. For ratios of whole numbers this follows from Thales directly: split each segment into equal pieces. This proportional version is the foundation of similar triangles in the next unit.

### Thales of Miletus

Thales (about 624–546 BC) is often called the first mathematician: he is said to be the first to **prove** geometric statements rather than just use them. Legend says he measured the height of an Egyptian pyramid by its shadow, at the moment when his own shadow equalled his height.

### Practical use

Dividing a segment into $n$ equal parts with the theorem is exact, while measuring with a ruler and dividing (say $10$ cm into $3$ parts) is not even possible exactly.`,
    r`### Թալեսի թեորեմի ապացույցը

Թող $A_1, A_2, A_3$ կետերով անցնող զուգահեռ ուղիղները $a$ ուղղի վրա անջատեն հավասար հատվածներ՝ $A_1A_2 = A_2A_3$, և $b$ ուղիղը հատեն $B_1, B_2, B_3$ կետերում։ Ապացուցենք, որ $B_1B_2 = B_2B_3$։

1. $B_1$-ով և $B_2$-ով տանենք $a$-ին զուգահեռ ուղիղներ. թող նրանք հաջորդ զուգահեռները հատեն $C_1$ և $C_2$ կետերում ($C_1$-ը $A_2B_2$ ուղղի վրա է, $C_2$-ը՝ $A_3B_3$-ի)։
2. $A_1B_1C_1A_2$-ը և $A_2B_2C_2A_3$-ը զուգահեռագծեր են, ուստի $B_1C_1 = A_1A_2$ և $B_2C_2 = A_2A_3$։ Հետևաբար $B_1C_1 = B_2C_2$։
3. $\angle B_2B_1C_1 = \angle B_3B_2C_2$ (համապատասխան, $B_1C_1 \parallel B_2C_2$) և $\angle B_1C_1B_2 = \angle B_2C_2B_3$ (կողմերը զուգահեռ են և նույն ուղղությամբ)։
4. Ըստ երկրորդ հայտանիշի՝ $\triangle B_1C_1B_2 = \triangle B_2C_2B_3$, ուստի $B_1B_2 = B_2B_3$։ ∎

Եթե $a \parallel b$, պնդումը պարզապես «զուգահեռագծի հանդիպակաց կողմերը հավասար են» է։

### Ընդհանրացված թեորեմը

Թալեսի թեորեմն ավելի ուժեղ թեորեմի առաջին քայլն է. **զուգահեռ ուղիղները ցանկացած երկու ուղղի վրա անջատում են համեմատական հատվածներ**։ Եթե մի ուղղի վրա հատվածները $2 : 3$ հարաբերությամբ են, մյուսի վրա էլ են $2 : 3$։ Ամբողջ թվերի հարաբերությունների համար սա անմիջապես հետևում է Թալեսից. յուրաքանչյուր հատված բաժանեք հավասար մասերի։ Այս համեմատական տարբերակը հաջորդ բաժնի նման եռանկյունների հիմքն է։

### Թալես Միլեթացին

Թալեսին (մոտ մ.թ.ա. 624–546) հաճախ անվանում են առաջին մաթեմատիկոս. ասում են՝ նա առաջինն էր, որ երկրաչափական պնդումները **ապացուցում** էր, ոչ թե պարզապես օգտագործում։ Ըստ ավանդության՝ նա չափել է եգիպտական բուրգի բարձրությունն իր ստվերով, այն պահին, երբ իր ստվերը հավասար էր իր հասակին։

### Գործնական կիրառություն

Թեորեմով հատվածը $n$ հավասար մասի բաժանելը ճշգրիտ է, իսկ քանոնով չափելն ու բաժանելը (օրինակ՝ $10$ սմ-ը $3$ մասի) նույնիսկ ճշգրիտ հնարավոր չէ։`,
    r`### Доказательство теоремы Фалеса

Пусть параллельные прямые через $A_1, A_2, A_3$ отсекают на прямой $a$ равные отрезки $A_1A_2 = A_2A_3$ и пересекают прямую $b$ в точках $B_1, B_2, B_3$. Докажем, что $B_1B_2 = B_2B_3$.

1. Через $B_1$ и $B_2$ проведём прямые, параллельные $a$; пусть они пересекают следующие параллельные в точках $C_1$ и $C_2$ ($C_1$ на прямой $A_2B_2$, $C_2$ на прямой $A_3B_3$).
2. $A_1B_1C_1A_2$ и $A_2B_2C_2A_3$ — параллелограммы, поэтому $B_1C_1 = A_1A_2$ и $B_2C_2 = A_2A_3$. Значит, $B_1C_1 = B_2C_2$.
3. $\angle B_2B_1C_1 = \angle B_3B_2C_2$ (соответственные, $B_1C_1 \parallel B_2C_2$) и $\angle B_1C_1B_2 = \angle B_2C_2B_3$ (углы с параллельными и одинаково направленными сторонами).
4. По второму признаку $\triangle B_1C_1B_2 = \triangle B_2C_2B_3$, значит, $B_1B_2 = B_2B_3$. ∎

Если $a \parallel b$, утверждение просто означает «противоположные стороны параллелограмма равны».

### Обобщённая теорема

Теорема Фалеса — первый шаг к более сильной: **параллельные прямые отсекают на любых двух прямых пропорциональные отрезки**. Если на одной прямой отрезки относятся как $2 : 3$, то и на другой как $2 : 3$. Для отношений целых чисел это прямо следует из Фалеса: разбейте каждый отрезок на равные части. Эта теорема о пропорциональных отрезках — основа подобия треугольников в следующей главе.

### Фалес Милетский

Фалеса (около 624–546 гг. до н. э.) часто называют первым математиком: считается, что он первым стал **доказывать** геометрические утверждения, а не только пользоваться ими. По преданию, он измерил высоту египетской пирамиды по её тени в момент, когда его собственная тень равнялась его росту.

### Практическое значение

Деление отрезка на $n$ равных частей по теореме точное, а измерить линейкой и поделить (скажем, $10$ см на $3$ части) точно даже невозможно.`,
  ),

  "rectangle-rhombus-square": th(
    r`### Proof: the diagonals of a rectangle are equal

In rectangle $ABCD$, triangles $ABD$ and $DCA$ are right ($\angle A = \angle D = 90°$), have $AB = DC$ (opposite sides) and the common leg $AD$. By SAS (two legs) they are congruent, so $BD = CA$. ∎

**Converse.** If a parallelogram has $AC = BD$, then $\triangle ABD = \triangle DCA$ by SSS, so $\angle A = \angle D$. But $\angle A + \angle D = 180°$ (neighbouring angles), so each is $90°$: it is a rectangle. ∎

### Proof: the diagonals of a rhombus are perpendicular and bisect its angles

In rhombus $ABCD$ the diagonals meet at $O$, and $AO = OC$ (parallelogram). $\triangle ABC$ is isosceles ($AB = BC$), and $BO$ is its median to the base. In an isosceles triangle the median to the base is also the altitude and the bisector, so $BD \perp AC$ and $BD$ bisects $\angle B$. ∎

**Converse.** If a parallelogram has $AC \perp BD$, then in $\triangle ABC$ the segment $BO$ is both a median and an altitude, so $\triangle ABC$ is isosceles: $AB = BC$. Opposite sides are equal too, so all four sides are equal. ∎

### A rectangle hides a circle

Since the diagonals of a rectangle are equal and bisect each other, $OA = OB = OC = OD$: the four vertices lie on a circle centred at $O$. That is a second proof that the median to the hypotenuse of a right triangle is half the hypotenuse: cut the rectangle along a diagonal.

### How a carpenter checks a rectangle

To check that a door frame or a foundation is rectangular, builders measure the **two diagonals**. Opposite sides equal makes it a parallelogram; equal diagonals then make it a rectangle. Measuring two lengths is far more accurate than measuring four angles.

### The square in one line

A square is a rectangle **and** a rhombus, so it has all their properties: equal, perpendicular diagonals that bisect the right angles into $45°$ each.`,
    r`### Ապացույց. ուղղանկյան անկյունագծերը հավասար են

$ABCD$ ուղղանկյան մեջ $ABD$ և $DCA$ եռանկյուններն ուղղանկյուն են ($\angle A = \angle D = 90°$), ունեն $AB = DC$ (հանդիպակաց կողմեր) և ընդհանուր $AD$ էջ։ Ըստ երկու էջի՝ նրանք հավասար են, ուստի $BD = CA$։ ∎

**Հակադարձը։** Եթե զուգահեռագծում $AC = BD$, ապա $\triangle ABD = \triangle DCA$՝ ըստ երրորդ հայտանիշի, ուստի $\angle A = \angle D$։ Բայց $\angle A + \angle D = 180°$ (հարևան անկյուններ), ուստի յուրաքանչյուրը $90°$ է. ուղղանկյուն է։ ∎

### Ապացույց. շեղանկյան անկյունագծերն ուղղահայաց են և կիսում են նրա անկյունները

$ABCD$ շեղանկյան անկյունագծերը հատվում են $O$ կետում, և $AO = OC$ (զուգահեռագիծ)։ $\triangle ABC$-ն հավասարասրուն է ($AB = BC$), իսկ $BO$-ն նրա միջնագիծն է՝ տարված հիմքին։ Հավասարասրուն եռանկյան մեջ հիմքին տարված միջնագիծը նաև բարձրություն է և կիսորդ, ուստի $BD \perp AC$, և $BD$-ն կիսում է $\angle B$-ն։ ∎

**Հակադարձը։** Եթե զուգահեռագծում $AC \perp BD$, ապա $\triangle ABC$-ում $BO$ հատվածը և՛ միջնագիծ է, և՛ բարձրություն, ուստի $\triangle ABC$-ն հավասարասրուն է. $AB = BC$։ Հանդիպակաց կողմերն էլ հավասար են, ուստի բոլոր չորս կողմերը հավասար են։ ∎

### Ուղղանկյան մեջ շրջանագիծ է թաքնված

Քանի որ ուղղանկյան անկյունագծերը հավասար են և կիսվում են, $OA = OB = OC = OD$. չորս գագաթները $O$ կենտրոնով շրջանագծի վրա են։ Սա երկրորդ ապացույցն է, որ ուղղանկյուն եռանկյան ներքնաձիգին տարված միջնագիծը ներքնաձիգի կեսն է. ուղղանկյունը կտրեք անկյունագծով։

### Ինչպես է ատաղձագործը ստուգում ուղղանկյունը

Դռան շրջանակի կամ հիմքի ուղղանկյուն լինելը ստուգելու համար շինարարները չափում են **երկու անկյունագծերը**։ Հանդիպակաց կողմերի հավասարությունը զուգահեռագիծ է տալիս, իսկ հավասար անկյունագծերն այն ուղղանկյուն են դարձնում։ Երկու երկարություն չափելը շատ ավելի ճշգրիտ է, քան չորս անկյունը։

### Քառակուսին մեկ տողով

Քառակուսին ուղղանկյուն է **և** շեղանկյուն, ուստի ունի նրանց բոլոր հատկությունները. հավասար, ուղղահայաց անկյունագծեր, որոնք ուղիղ անկյունները կիսում են $45°$-ական։`,
    r`### Доказательство: диагонали прямоугольника равны

В прямоугольнике $ABCD$ треугольники $ABD$ и $DCA$ прямоугольные ($\angle A = \angle D = 90°$), у них $AB = DC$ (противоположные стороны) и общий катет $AD$. По двум катетам они равны, значит, $BD = CA$. ∎

**Обратное.** Если в параллелограмме $AC = BD$, то $\triangle ABD = \triangle DCA$ по третьему признаку, значит, $\angle A = \angle D$. Но $\angle A + \angle D = 180°$ (соседние углы), поэтому каждый равен $90°$: это прямоугольник. ∎

### Доказательство: диагонали ромба перпендикулярны и делят его углы пополам

В ромбе $ABCD$ диагонали пересекаются в точке $O$, и $AO = OC$ (параллелограмм). $\triangle ABC$ равнобедренный ($AB = BC$), $BO$ — его медиана к основанию. В равнобедренном треугольнике медиана к основанию — также высота и биссектриса, значит, $BD \perp AC$ и $BD$ делит $\angle B$ пополам. ∎

**Обратное.** Если в параллелограмме $AC \perp BD$, то в $\triangle ABC$ отрезок $BO$ — и медиана, и высота, значит, $\triangle ABC$ равнобедренный: $AB = BC$. Противоположные стороны тоже равны, поэтому все четыре стороны равны. ∎

### В прямоугольнике спрятана окружность

Диагонали прямоугольника равны и делятся пополам, поэтому $OA = OB = OC = OD$: четыре вершины лежат на окружности с центром $O$. Это второе доказательство того, что медиана к гипотенузе прямоугольного треугольника равна половине гипотенузы: разрежьте прямоугольник по диагонали.

### Как столяр проверяет прямоугольник

Чтобы проверить, что дверная коробка или фундамент прямоугольные, строители измеряют **две диагонали**. Равенство противоположных сторон делает фигуру параллелограммом, а равные диагонали — прямоугольником. Измерить две длины гораздо точнее, чем четыре угла.

### Квадрат в одну строку

Квадрат — это прямоугольник **и** ромб, поэтому у него все их свойства: равные перпендикулярные диагонали, делящие прямые углы на $45°$.`,
  ),

  "axial-central-symmetry": th(
    r`### Why symmetries keep distances

**Central symmetry.** Let $A \to A_1$ and $B \to B_1$ under the symmetry in $O$. Then $OA = OA_1$, $OB = OB_1$, and $\angle AOB = \angle A_1OB_1$ (vertical). By SAS $\triangle AOB = \triangle A_1OB_1$, so $A_1B_1 = AB$. ∎ Also $\angle OAB = \angle OA_1B_1$, alternate angles, so $A_1B_1 \parallel AB$: a central symmetry turns every segment into a **parallel**, equal segment pointing the other way.

**Axial symmetry.** A similar argument with two right trapeziums (or triangles, if $A$ and $B$ are on opposite sides of the axis) shows $A_1B_1 = AB$. So both symmetries are **motions**: figures go to congruent figures.

### Combining two reflections

Reflect a figure in line $l_1$, then the result in line $l_2$.

| Axes | Result of the two reflections |
|---|---|
| $l_1 \parallel l_2$, distance $d$ | a **translation** by $2d$, perpendicular to the axes |
| $l_1$ and $l_2$ meet at $O$ at angle $\varphi$ | a **rotation** about $O$ by $2\varphi$ |
| $l_1 \perp l_2$ | a rotation by $180°$: the central symmetry in $O$ |

The last row explains why a figure with two perpendicular axes (rectangle, rhombus) **must** have a centre of symmetry.

### Shortest path with a reflection

*A village $A$ and a village $B$ are on the same side of a straight river. Where should a pier $P$ on the bank be built so that $AP + PB$ is as short as possible?* Reflect $B$ in the bank to $B_1$. For every $P$ on the bank $PB = PB_1$, so $AP + PB = AP + PB_1 \ge AB_1$. The minimum is reached where segment $AB_1$ crosses the bank. At that point the two paths make equal angles with the bank, which is the **law of reflection** of light: light takes the shortest path.

### A note on letters

Symmetry depends on the font: in some fonts Ж has a vertical axis and a horizontal one, in others not. The figures, not the letters, are what geometry studies.`,
    r`### Ինչու են համաչափությունները պահպանում հեռավորությունները

**Կենտրոնային համաչափություն։** Թող $O$-ի նկատմամբ համաչափությամբ $A \to A_1$ և $B \to B_1$։ Այդ դեպքում $OA = OA_1$, $OB = OB_1$, և $\angle AOB = \angle A_1OB_1$ (հակադիր)։ Ըստ առաջին հայտանիշի՝ $\triangle AOB = \triangle A_1OB_1$, ուստի $A_1B_1 = AB$։ ∎ Նաև $\angle OAB = \angle OA_1B_1$, խաչադիր անկյուններ, ուստի $A_1B_1 \parallel AB$. կենտրոնային համաչափությունը յուրաքանչյուր հատված վերածում է **զուգահեռ**, հավասար, հակառակ ուղղված հատվածի։

**Առանցքային համաչափություն։** Նման դատողությունը երկու ուղղանկյուն սեղանով (կամ եռանկյուններով, եթե $A$-ն և $B$-ն առանցքի տարբեր կողմերում են) ցույց է տալիս, որ $A_1B_1 = AB$։ Ուստի երկու համաչափություններն էլ **շարժումներ** են. պատկերները վերածվում են հավասար պատկերների։

### Երկու արտապատկերման համադրություն

Պատկերն արտապատկերենք $l_1$ ուղղի նկատմամբ, ապա արդյունքը՝ $l_2$ ուղղի նկատմամբ։

| Առանցքներ | Երկու արտապատկերման արդյունքը |
|---|---|
| $l_1 \parallel l_2$, հեռավորությունը $d$ | **զուգահեռ տեղափոխություն** $2d$-ով՝ առանցքներին ուղղահայաց |
| $l_1$-ը և $l_2$-ը հատվում են $O$-ում $\varphi$ անկյան տակ | **պտույտ** $O$-ի շուրջ $2\varphi$-ով |
| $l_1 \perp l_2$ | պտույտ $180°$-ով. կենտրոնային համաչափություն $O$-ի նկատմամբ |

Վերջին տողը բացատրում է, թե ինչու երկու ուղղահայաց առանցք ունեցող պատկերը (ուղղանկյուն, շեղանկյուն) **պետք է** ունենա համաչափության կենտրոն։

### Ամենակարճ ճանապարհն արտապատկերմամբ

*$A$ և $B$ գյուղերը ուղիղ գետի նույն կողմում են։ Ափի որ $P$ կետում կառուցել նավամատույցը, որպեսզի $AP + PB$-ն լինի հնարավորինս կարճ։* $B$-ն ափի նկատմամբ արտապատկերենք $B_1$-ի։ Ափի ցանկացած $P$-ի համար $PB = PB_1$, ուստի $AP + PB = AP + PB_1 \ge AB_1$։ Նվազագույնը ստացվում է այնտեղ, որտեղ $AB_1$ հատվածը հատում է ափը։ Այդ կետում երկու ճանապարհներն ափի հետ կազմում են հավասար անկյուններ. սա լույսի **անդրադարձման օրենքն** է. լույսն ընտրում է ամենակարճ ճանապարհը։

### Դիտողություն տառերի մասին

Համաչափությունը կախված է տառատեսակից. որոշ տառատեսակներում Ж-ն ունի ուղղաձիգ և հորիզոնական առանցք, մյուսներում՝ ոչ։ Երկրաչափությունն ուսումնասիրում է պատկերները, ոչ թե տառերը։`,
    r`### Почему симметрии сохраняют расстояния

**Центральная симметрия.** Пусть при симметрии относительно $O$ $A \to A_1$ и $B \to B_1$. Тогда $OA = OA_1$, $OB = OB_1$ и $\angle AOB = \angle A_1OB_1$ (вертикальные). По первому признаку $\triangle AOB = \triangle A_1OB_1$, значит, $A_1B_1 = AB$. ∎ Кроме того, $\angle OAB = \angle OA_1B_1$ — накрест лежащие, поэтому $A_1B_1 \parallel AB$: центральная симметрия переводит каждый отрезок в **параллельный** равный отрезок, направленный в другую сторону.

**Осевая симметрия.** Похожее рассуждение с двумя прямоугольными трапециями (или треугольниками, если $A$ и $B$ по разные стороны оси) даёт $A_1B_1 = AB$. Значит, обе симметрии — **движения**: фигуры переходят в равные фигуры.

### Композиция двух отражений

Отразим фигуру относительно прямой $l_1$, а результат — относительно прямой $l_2$.

| Оси | Результат двух отражений |
|---|---|
| $l_1 \parallel l_2$, расстояние $d$ | **параллельный перенос** на $2d$ перпендикулярно осям |
| $l_1$ и $l_2$ пересекаются в $O$ под углом $\varphi$ | **поворот** вокруг $O$ на $2\varphi$ |
| $l_1 \perp l_2$ | поворот на $180°$: центральная симметрия относительно $O$ |

Последняя строка объясняет, почему фигура с двумя перпендикулярными осями (прямоугольник, ромб) **обязана** иметь центр симметрии.

### Кратчайший путь через отражение

*Деревни $A$ и $B$ по одну сторону от прямой реки. Где на берегу построить пристань $P$, чтобы $AP + PB$ был наименьшим?* Отразим $B$ относительно берега в $B_1$. Для любой $P$ на берегу $PB = PB_1$, поэтому $AP + PB = AP + PB_1 \ge AB_1$. Минимум достигается там, где отрезок $AB_1$ пересекает берег. В этой точке два пути образуют с берегом равные углы — это **закон отражения** света: свет выбирает кратчайший путь.

### Замечание о буквах

Симметрия зависит от шрифта: в одних шрифтах у Ж есть вертикальная и горизонтальная оси, в других нет. Геометрия изучает фигуры, а не буквы.`,
  ),

  "quadrilateral-problems": th(
    r`### Varignon's theorem

**Theorem.** The midpoints of the sides of **any** quadrilateral are the vertices of a parallelogram.

*Proof.* Let $K, L, M, N$ be the midpoints of $AB, BC, CD, DA$. Draw diagonal $AC$.

- In $\triangle ABC$, $KL$ is a midline: $KL \parallel AC$ and $KL = \frac{1}{2} AC$.
- In $\triangle ADC$, $NM$ is a midline: $NM \parallel AC$ and $NM = \frac{1}{2} AC$.

So $KL$ and $NM$ are equal and parallel, and $KLMN$ is a parallelogram by the second test. ∎

It works for every quadrilateral, even a non-convex one. Its consequences:

| Original quadrilateral | Varignon parallelogram |
|---|---|
| diagonals equal | rhombus |
| diagonals perpendicular | rectangle |
| diagonals equal and perpendicular | square |

The perimeter of $KLMN$ equals $AC + BD$, the sum of the diagonals, and its area is half the area of $ABCD$.

### A classic: the bisectors of a parallelogram

*The bisectors of the four angles of a parallelogram form a rectangle.* Two neighbouring angles add up to $180°$, so their halves add up to $90°$. In the triangle made by the side and the two bisectors, the third angle is $180° - 90° = 90°$. All four angles of the inner figure are right. ∎

### How to look for an auxiliary line

| Situation | Line to draw |
|---|---|
| midpoints of two sides | a diagonal (then midlines appear) |
| a trapezium with a leg condition | a line through a vertex parallel to the other leg |
| a trapezium with a diagonal condition | a line through a vertex parallel to a diagonal |
| a bisector meeting a side | look for an isosceles triangle |

The second trick turns a trapezium into a parallelogram plus a triangle whose sides are the two legs and the **difference** of the bases.`,
    r`### Վարինյոնի թեորեմը

**Թեորեմ։** **Ցանկացած** քառանկյան կողմերի միջնակետերը զուգահեռագծի գագաթներ են։

*Ապացույց։* Թող $K, L, M, N$-ը լինեն $AB, BC, CD, DA$ կողմերի միջնակետերը։ Տանենք $AC$ անկյունագիծը։

- $\triangle ABC$-ում $KL$-ը միջին գիծ է. $KL \parallel AC$ և $KL = \frac{1}{2} AC$։
- $\triangle ADC$-ում $NM$-ը միջին գիծ է. $NM \parallel AC$ և $NM = \frac{1}{2} AC$։

Ուստի $KL$-ը և $NM$-ը հավասար են և զուգահեռ, և $KLMN$-ը զուգահեռագիծ է՝ ըստ երկրորդ հայտանիշի։ ∎

Սա ճիշտ է յուրաքանչյուր քառանկյան, նույնիսկ ոչ ուռուցիկի համար։ Հետևանքները.

| Սկզբնական քառանկյուն | Վարինյոնի զուգահեռագիծ |
|---|---|
| անկյունագծերը հավասար են | շեղանկյուն |
| անկյունագծերն ուղղահայաց են | ուղղանկյուն |
| անկյունագծերը հավասար են և ուղղահայաց | քառակուսի |

$KLMN$-ի պարագիծը հավասար է $AC + BD$-ի՝ անկյունագծերի գումարին, իսկ մակերեսը $ABCD$-ի մակերեսի կեսն է։

### Դասական խնդիր. զուգահեռագծի կիսորդները

*Զուգահեռագծի չորս անկյունների կիսորդները կազմում են ուղղանկյուն։* Երկու հարևան անկյունների գումարը $180°$ է, ուստի նրանց կեսերի գումարը $90°$ է։ Կողմով և երկու կիսորդով կազմված եռանկյան երրորդ անկյունը $180° - 90° = 90°$ է։ Ներքին պատկերի բոլոր չորս անկյուններն ուղիղ են։ ∎

### Ինչպես փնտրել օժանդակ գիծ

| Իրավիճակ | Ինչ գիծ տանել |
|---|---|
| երկու կողմի միջնակետեր | անկյունագիծ (հայտնվում են միջին գծեր) |
| սեղան՝ սրունքի պայմանով | գագաթով ուղիղ՝ մյուս սրունքին զուգահեռ |
| սեղան՝ անկյունագծի պայմանով | գագաթով ուղիղ՝ անկյունագծին զուգահեռ |
| կողմը հատող կիսորդ | փնտրել հավասարասրուն եռանկյուն |

Երկրորդ հնարքը սեղանը վերածում է զուգահեռագծի և եռանկյան, որի կողմերը երկու սրունքներն են և հիմքերի **տարբերությունը**։`,
    r`### Теорема Вариньона

**Теорема.** Середины сторон **любого** четырёхугольника — вершины параллелограмма.

*Доказательство.* Пусть $K, L, M, N$ — середины $AB, BC, CD, DA$. Проведём диагональ $AC$.

- В $\triangle ABC$ $KL$ — средняя линия: $KL \parallel AC$ и $KL = \frac{1}{2} AC$.
- В $\triangle ADC$ $NM$ — средняя линия: $NM \parallel AC$ и $NM = \frac{1}{2} AC$.

Значит, $KL$ и $NM$ равны и параллельны, и $KLMN$ — параллелограмм по второму признаку. ∎

Это верно для любого четырёхугольника, даже невыпуклого. Следствия:

| Исходный четырёхугольник | Параллелограмм Вариньона |
|---|---|
| диагонали равны | ромб |
| диагонали перпендикулярны | прямоугольник |
| диагонали равны и перпендикулярны | квадрат |

Периметр $KLMN$ равен $AC + BD$, сумме диагоналей, а площадь — половине площади $ABCD$.

### Классика: биссектрисы параллелограмма

*Биссектрисы четырёх углов параллелограмма образуют прямоугольник.* Два соседних угла в сумме дают $180°$, значит, их половины — $90°$. В треугольнике, образованном стороной и двумя биссектрисами, третий угол равен $180° - 90° = 90°$. Все четыре угла внутренней фигуры прямые. ∎

### Как искать дополнительное построение

| Ситуация | Что провести |
|---|---|
| середины двух сторон | диагональ (появятся средние линии) |
| трапеция с условием на боковые стороны | прямую через вершину параллельно другой боковой стороне |
| трапеция с условием на диагонали | прямую через вершину параллельно диагонали |
| биссектриса пересекает сторону | искать равнобедренный треугольник |

Второй приём превращает трапецию в параллелограмм и треугольник, стороны которого — две боковые стороны и **разность** оснований.`,
  ),
};
