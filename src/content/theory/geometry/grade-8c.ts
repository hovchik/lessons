import { th } from "../kit";

const r = String.raw;

/** Geometry 8, unit 3: similarity and the trigonometry of acute angles. */
export const geometry8c = {
  "similarity-definition": th(
    r`### Proof: the areas of similar triangles are in the ratio $k^2$

Let $\triangle ABC \sim \triangle A_1B_1C_1$ with coefficient $k$, and let $BH$ and $B_1H_1$ be the heights to $AC$ and $A_1C_1$. The right triangles $ABH$ and $A_1B_1H_1$ have equal angles $\angle A = \angle A_1$, so they are similar too, and
$$\frac{BH}{B_1H_1} = \frac{AB}{A_1B_1} = k.$$
Both the base and the height grow $k$ times, so
$$\frac{S}{S_1} = \frac{\frac{1}{2} AC \cdot BH}{\frac{1}{2} A_1C_1 \cdot B_1H_1} = k \cdot k = k^2.$$
**Every** linear element (heights, medians, bisectors, perimeters, radii) is multiplied by $k$, and every area by $k^2$.

### The square–cube law

For solid bodies, volumes and weights grow as $k^3$. Galileo noticed in 1638 what this means. Make an animal $2$ times taller in every direction: its weight grows $8$ times, but the strength of a bone depends on its cross-section, which grows only $4$ times. So each square centimetre of bone carries **twice** the load. This is why an elephant has thick legs while a deer has thin ones, why an ant can carry many times its weight, and why giants from fairy tales could not stand up.

| Enlarge $k$ times | Grows |
|---|---|
| height, perimeter | $k$ times |
| area, skin, cross-section of a bone | $k^2$ times |
| volume, weight | $k^3$ times |

### Similarity is a two-way, chain relation

- If $F \sim G$ with coefficient $k$, then $G \sim F$ with $\frac{1}{k}$.
- If $F \sim G$ and $G \sim H$, then $F \sim H$, and the coefficients multiply.

So a photograph of a map is similar to the land, with the two scales multiplied.

### Common mistake

When a problem gives the ratio of **areas** $9 : 4$, the ratio of the sides is $3 : 2$, not $9 : 4$. Take the square root first.`,
    r`### Ապացույց. նման եռանկյունների մակերեսները հարաբերում են ինչպես $k^2$

Թող $\triangle ABC \sim \triangle A_1B_1C_1$՝ $k$ գործակցով, իսկ $BH$-ը և $B_1H_1$-ը լինեն $AC$-ին և $A_1C_1$-ին տարված բարձրությունները։ $ABH$ և $A_1B_1H_1$ ուղղանկյուն եռանկյուններն ունեն հավասար անկյուններ՝ $\angle A = \angle A_1$, ուստի նրանք էլ են նման, և
$$\frac{BH}{B_1H_1} = \frac{AB}{A_1B_1} = k$$
Թե՛ հիմքը, թե՛ բարձրությունն աճում են $k$ անգամ, ուստի
$$\frac{S}{S_1} = \frac{\frac{1}{2} AC \cdot BH}{\frac{1}{2} A_1C_1 \cdot B_1H_1} = k \cdot k = k^2$$
**Յուրաքանչյուր** գծային տարր (բարձրություններ, միջնագծեր, կիսորդներ, պարագծեր, շառավիղներ) բազմապատկվում է $k$-ով, իսկ յուրաքանչյուր մակերես՝ $k^2$-ով։

### Քառակուսի–խորանարդ օրենքը

Մարմինների ծավալներն ու կշիռները աճում են $k^3$ անգամ։ Գալիլեյը 1638 թվականին նկատեց, թե դա ինչ է նշանակում։ Կենդանուն բոլոր ուղղություններով $2$ անգամ մեծացրեք. նրա կշիռն աճում է $8$ անգամ, իսկ ոսկորի ամրությունը կախված է նրա լայնական հատույթից, որն աճում է ընդամենը $4$ անգամ։ Ուստի ոսկորի յուրաքանչյուր քառակուսի սանտիմետր կրում է **կրկնակի** բեռ։ Ահա թե ինչու է փղի ոտքերը հաստ, իսկ եղնիկինը՝ բարակ, ինչու է մրջյունը կարողանում իր քաշից բազմաթիվ անգամ ծանր բեռ տանել, և ինչու հեքիաթների հսկաները չէին կարող ոտքի կանգնել։

| Մեծացնել $k$ անգամ | Աճում է |
|---|---|
| բարձրություն, պարագիծ | $k$ անգամ |
| մակերես, մաշկ, ոսկորի հատույթ | $k^2$ անգամ |
| ծավալ, կշիռ | $k^3$ անգամ |

### Նմանությունը երկկողմանի է և շղթայական

- Եթե $F \sim G$՝ $k$ գործակցով, ապա $G \sim F$՝ $\frac{1}{k}$-ով։
- Եթե $F \sim G$ և $G \sim H$, ապա $F \sim H$, և գործակիցները բազմապատկվում են։

Ուստի քարտեզի լուսանկարը նման է տեղանքին, իսկ երկու մասշտաբները բազմապատկվում են։

### Տարածված սխալ

Երբ խնդրում տրված է **մակերեսների** $9 : 4$ հարաբերությունը, կողմերի հարաբերությունը $3 : 2$ է, ոչ թե $9 : 4$։ Նախ քառակուսի արմատ հանեք։`,
    r`### Доказательство: площади подобных треугольников относятся как $k^2$

Пусть $\triangle ABC \sim \triangle A_1B_1C_1$ с коэффициентом $k$, и $BH$, $B_1H_1$ — высоты к $AC$ и $A_1C_1$. Прямоугольные треугольники $ABH$ и $A_1B_1H_1$ имеют равные углы $\angle A = \angle A_1$, поэтому тоже подобны, и
$$\frac{BH}{B_1H_1} = \frac{AB}{A_1B_1} = k.$$
И основание, и высота увеличиваются в $k$ раз, поэтому
$$\frac{S}{S_1} = \frac{\frac{1}{2} AC \cdot BH}{\frac{1}{2} A_1C_1 \cdot B_1H_1} = k \cdot k = k^2.$$
**Каждый** линейный элемент (высоты, медианы, биссектрисы, периметры, радиусы) умножается на $k$, а каждая площадь — на $k^2$.

### Закон квадрата и куба

У тел объёмы и веса растут как $k^3$. Галилей в 1638 году заметил, что из этого следует. Увеличим животное в $2$ раза во всех направлениях: вес вырастет в $8$ раз, а прочность кости зависит от её сечения, которое вырастет лишь в $4$ раза. Значит, каждый квадратный сантиметр кости несёт **вдвое** большую нагрузку. Поэтому у слона толстые ноги, а у оленя тонкие, муравей несёт груз во много раз тяжелее себя, а сказочные великаны не смогли бы встать.

| Увеличить в $k$ раз | Растёт |
|---|---|
| высота, периметр | в $k$ раз |
| площадь, кожа, сечение кости | в $k^2$ раз |
| объём, вес | в $k^3$ раз |

### Подобие взаимно и транзитивно

- Если $F \sim G$ с коэффициентом $k$, то $G \sim F$ с $\frac{1}{k}$.
- Если $F \sim G$ и $G \sim H$, то $F \sim H$, и коэффициенты перемножаются.

Так фотография карты подобна местности, а два масштаба перемножаются.

### Частая ошибка

Если в задаче дано отношение **площадей** $9 : 4$, отношение сторон $3 : 2$, а не $9 : 4$. Сначала извлеките корень.`,
  ),

  "similarity-tests": th(
    r`### The key lemma: a parallel line cuts sides proportionally

**Lemma.** If $B'C' \parallel BC$ with $B'$ on $AB$ and $C'$ on $AC$, then $\frac{AB'}{AB} = \frac{AC'}{AC}$.

*Proof by areas (Euclid, Book VI).* Triangles $B'C'B$ and $B'C'C$ have the common base $B'C'$, and their vertices $B$ and $C$ are equally far from it (since $BC \parallel B'C'$). So $S_{B'C'B} = S_{B'C'C}$. Now compare with $\triangle AB'C'$:

- $\triangle AB'C'$ and $\triangle B'BC'$ have the same height from $C'$, so $\frac{S_{AB'C'}}{S_{B'BC'}} = \frac{AB'}{B'B}$.
- $\triangle AB'C'$ and $\triangle C'CB'$ have the same height from $B'$, so $\frac{S_{AB'C'}}{S_{C'CB'}} = \frac{AC'}{C'C}$.

The denominators are equal, so $\frac{AB'}{B'B} = \frac{AC'}{C'C}$, and adding $1$ to both sides of the reciprocals gives $\frac{AB}{AB'} = \frac{AC}{AC'}$. ∎

### Proof of the first test (two angles)

Let $\angle A = \angle A_1$, $\angle B = \angle B_1$. Place $\triangle A_1B_1C_1$ on $\triangle ABC$ so that $A_1$ falls on $A$ and the sides go along $AB$ and $AC$; call the new vertices $B'$ and $C'$. Since $\angle AB'C' = \angle B_1 = \angle B$, these are corresponding angles, so $B'C' \parallel BC$. By the lemma, $\frac{A_1B_1}{AB} = \frac{A_1C_1}{AC}$. Doing the same at vertex $B$ gives the third ratio. All angles are equal (the third by the angle sum) and all sides are proportional: the triangles are similar. ∎

### Proof of the other two tests

Both use the same trick: **build** a triangle similar to the first one and congruent to the second.

*SAS-similarity.* Let $\frac{A_1B_1}{AB} = \frac{A_1C_1}{AC} = k$ and $\angle A = \angle A_1$. On $AB$ mark $AB' = A_1B_1$ and draw $B'C' \parallel BC$. Then $\triangle AB'C' \sim \triangle ABC$ by two angles, with coefficient $k$, so $AC' = k \cdot AC = A_1C_1$. Now $\triangle AB'C' = \triangle A_1B_1C_1$ by SAS. ∎ The three-sides test is proved the same way, ending with SSS.

### Similarity tests mirror congruence tests

| Congruence | Similarity |
|---|---|
| ASA (side, two angles) | two angles: **no side needed** |
| SAS | two sides **proportional**, angle between them equal |
| SSS | three sides **proportional** |`,
    r`### Գլխավոր լեմման. զուգահեռ ուղիղը կողմերը համեմատական է հատում

**Լեմմա։** Եթե $B'C' \parallel BC$, ընդ որում $B'$-ը $AB$-ի վրա է, իսկ $C'$-ը՝ $AC$-ի, ապա $\frac{AB'}{AB} = \frac{AC'}{AC}$։

*Ապացույց մակերեսներով (Էվկլիդես, VI գիրք)։* $B'C'B$ և $B'C'C$ եռանկյուններն ունեն ընդհանուր $B'C'$ հիմք, և նրանց $B$ ու $C$ գագաթները դրանից հավասարահեռ են (քանի որ $BC \parallel B'C'$)։ Ուստի $S_{B'C'B} = S_{B'C'C}$։ Այժմ համեմատենք $\triangle AB'C'$-ի հետ.

- $\triangle AB'C'$-ն և $\triangle B'BC'$-ն ունեն $C'$-ից տարված նույն բարձրությունը, ուստի $\frac{S_{AB'C'}}{S_{B'BC'}} = \frac{AB'}{B'B}$։
- $\triangle AB'C'$-ն և $\triangle C'CB'$-ն ունեն $B'$-ից տարված նույն բարձրությունը, ուստի $\frac{S_{AB'C'}}{S_{C'CB'}} = \frac{AC'}{C'C}$։

Հայտարարները հավասար են, ուստի $\frac{AB'}{B'B} = \frac{AC'}{C'C}$, և հակադարձների երկու կողմին $1$ գումարելով՝ ստանում ենք $\frac{AB}{AB'} = \frac{AC}{AC'}$։ ∎

### Առաջին հայտանիշի ապացույցը (երկու անկյուն)

Թող $\angle A = \angle A_1$, $\angle B = \angle B_1$։ $\triangle A_1B_1C_1$-ը դնենք $\triangle ABC$-ի վրա այնպես, որ $A_1$-ն ընկնի $A$-ի վրա, իսկ կողմերը գնան $AB$-ի և $AC$-ի երկայնքով. նոր գագաթները նշանակենք $B'$ և $C'$։ Քանի որ $\angle AB'C' = \angle B_1 = \angle B$, դրանք համապատասխան անկյուններ են, ուստի $B'C' \parallel BC$։ Ըստ լեմմայի՝ $\frac{A_1B_1}{AB} = \frac{A_1C_1}{AC}$։ Նույնն անելով $B$ գագաթում՝ ստանում ենք երրորդ հարաբերությունը։ Բոլոր անկյունները հավասար են (երրորդը՝ անկյունների գումարից), և բոլոր կողմերը համեմատական են. եռանկյունները նման են։ ∎

### Մյուս երկու հայտանիշների ապացույցը

Երկուսն էլ օգտագործում են նույն հնարքը. **կառուցել** առաջինին նման և երկրորդին հավասար եռանկյուն։

*Երկրորդ հայտանիշ։* Թող $\frac{A_1B_1}{AB} = \frac{A_1C_1}{AC} = k$ և $\angle A = \angle A_1$։ $AB$-ի վրա նշենք $AB' = A_1B_1$ և տանենք $B'C' \parallel BC$։ Այդ դեպքում $\triangle AB'C' \sim \triangle ABC$՝ ըստ երկու անկյան, $k$ գործակցով, ուստի $AC' = k \cdot AC = A_1C_1$։ Այժմ $\triangle AB'C' = \triangle A_1B_1C_1$՝ ըստ հավասարության առաջին հայտանիշի։ ∎ Երեք կողմերով հայտանիշն ապացուցվում է նույն կերպ՝ վերջում հավասարության երրորդ հայտանիշով։

### Նմանության հայտանիշները արտացոլում են հավասարության հայտանիշները

| Հավասարություն | Նմանություն |
|---|---|
| կողմ և երկու անկյուն | երկու անկյուն. **կողմ պետք չէ** |
| երկու կողմ և նրանց կազմած անկյուն | երկու կողմ **համեմատական**, նրանց կազմած անկյունը հավասար |
| երեք կողմ | երեք կողմ **համեմատական** |`,
    r`### Ключевая лемма: параллельная прямая делит стороны пропорционально

**Лемма.** Если $B'C' \parallel BC$, где $B'$ на $AB$, а $C'$ на $AC$, то $\frac{AB'}{AB} = \frac{AC'}{AC}$.

*Доказательство через площади (Евклид, книга VI).* У треугольников $B'C'B$ и $B'C'C$ общее основание $B'C'$, а вершины $B$ и $C$ равноудалены от него (ведь $BC \parallel B'C'$). Значит, $S_{B'C'B} = S_{B'C'C}$. Сравним с $\triangle AB'C'$:

- у $\triangle AB'C'$ и $\triangle B'BC'$ общая высота из $C'$, поэтому $\frac{S_{AB'C'}}{S_{B'BC'}} = \frac{AB'}{B'B}$;
- у $\triangle AB'C'$ и $\triangle C'CB'$ общая высота из $B'$, поэтому $\frac{S_{AB'C'}}{S_{C'CB'}} = \frac{AC'}{C'C}$.

Знаменатели равны, значит, $\frac{AB'}{B'B} = \frac{AC'}{C'C}$; перевернув дроби и прибавив $1$, получаем $\frac{AB}{AB'} = \frac{AC}{AC'}$. ∎

### Доказательство первого признака (по двум углам)

Пусть $\angle A = \angle A_1$, $\angle B = \angle B_1$. Наложим $\triangle A_1B_1C_1$ на $\triangle ABC$ так, чтобы $A_1$ совпала с $A$, а стороны пошли по $AB$ и $AC$; новые вершины назовём $B'$ и $C'$. Так как $\angle AB'C' = \angle B_1 = \angle B$, это соответственные углы, и $B'C' \parallel BC$. По лемме $\frac{A_1B_1}{AB} = \frac{A_1C_1}{AC}$. То же у вершины $B$ даёт третье отношение. Все углы равны (третий — по сумме углов), все стороны пропорциональны: треугольники подобны. ∎

### Доказательство двух других признаков

Оба используют один приём: **построить** треугольник, подобный первому и равный второму.

*Второй признак.* Пусть $\frac{A_1B_1}{AB} = \frac{A_1C_1}{AC} = k$ и $\angle A = \angle A_1$. На $AB$ отложим $AB' = A_1B_1$ и проведём $B'C' \parallel BC$. Тогда $\triangle AB'C' \sim \triangle ABC$ по двум углам с коэффициентом $k$, значит, $AC' = k \cdot AC = A_1C_1$. Теперь $\triangle AB'C' = \triangle A_1B_1C_1$ по первому признаку равенства. ∎ Признак по трём сторонам доказывается так же, в конце — по третьему признаку равенства.

### Признаки подобия повторяют признаки равенства

| Равенство | Подобие |
|---|---|
| сторона и два угла | два угла: **сторона не нужна** |
| две стороны и угол между ними | две стороны **пропорциональны**, угол между ними равен |
| три стороны | три стороны **пропорциональны** |`,
  ),

  midline: th(
    r`### Proof that the medians meet at one point and divide each other $2 : 1$

Let medians $AA_1$ and $BB_1$ of $\triangle ABC$ meet at $O$. Let $K$ and $L$ be the midpoints of $AO$ and $BO$.

1. $A_1B_1$ is a midline of $\triangle ABC$: $A_1B_1 \parallel AB$ and $A_1B_1 = \frac{1}{2} AB$.
2. $KL$ is a midline of $\triangle ABO$: $KL \parallel AB$ and $KL = \frac{1}{2} AB$.
3. So $KL$ and $B_1A_1$ are equal and parallel, and $KLA_1B_1$ is a parallelogram. Its diagonals $KA_1$ and $LB_1$ bisect each other at $O$.
4. Hence $AK = KO = OA_1$, so $AO : OA_1 = 2 : 1$. Likewise $BO : OB_1 = 2 : 1$.

So **any** two medians cut each other at the point $\frac{2}{3}$ of the way from the vertex. The third median $CC_1$ must also pass through the point dividing $AA_1$ as $2 : 1$, which is $O$. All three meet at $O$. ∎

### Six triangles of equal area

The three medians cut a triangle into six small triangles, and they all have the **same** area. *Why:* a median halves the area; then $O$ splits each median $2 : 1$, and triangles with a common vertex and bases on one line have areas in the ratio of the bases. Working through the pieces, each is $\frac{1}{6}$ of the whole. That is why $O$ is the balance point: equal masses on all sides.

### Why the midline of a triangle and of a trapezium are the same idea

Shrink the top base of a trapezium to a point: it becomes a triangle, and the trapezium midline $\frac{a + b}{2}$ becomes $\frac{a}{2}$, the triangle midline. Both are proved by the same lemma about a parallel line through a midpoint.

### Check your intuition

The four small triangles made by the three midlines are congruent. So the **medial triangle** (with vertices at the midpoints) has area $\frac{1}{4}$ of the original, perimeter $\frac{1}{2}$, and the same centroid.`,
    r`### Ապացույց, որ միջնագծերը հատվում են մեկ կետում և բաժանվում են $2 : 1$ հարաբերությամբ

Թող $\triangle ABC$-ի $AA_1$ և $BB_1$ միջնագծերը հատվեն $O$ կետում։ Թող $K$-ն և $L$-ը լինեն $AO$-ի և $BO$-ի միջնակետերը։

1. $A_1B_1$-ը $\triangle ABC$-ի միջին գիծն է. $A_1B_1 \parallel AB$ և $A_1B_1 = \frac{1}{2} AB$։
2. $KL$-ը $\triangle ABO$-ի միջին գիծն է. $KL \parallel AB$ և $KL = \frac{1}{2} AB$։
3. Ուստի $KL$-ը և $B_1A_1$-ը հավասար են և զուգահեռ, և $KLA_1B_1$-ը զուգահեռագիծ է։ Նրա $KA_1$ և $LB_1$ անկյունագծերը $O$-ում կիսվում են։
4. Հետևաբար $AK = KO = OA_1$, ուստի $AO : OA_1 = 2 : 1$։ Նույն կերպ $BO : OB_1 = 2 : 1$։

Ուրեմն **ցանկացած** երկու միջնագիծ հատվում են գագաթից $\frac{2}{3}$ հեռավորության կետում։ Երրորդ $CC_1$ միջնագիծը նույնպես պետք է անցնի $AA_1$-ը $2 : 1$ հարաբերությամբ բաժանող կետով, որը $O$-ն է։ Երեքն էլ հատվում են $O$-ում։ ∎

### Հավասարամեծ վեց եռանկյուն

Երեք միջնագծերը եռանկյունը բաժանում են վեց փոքր եռանկյան, և բոլորն ունեն **նույն** մակերեսը։ *Ինչու.* միջնագիծը կիսում է մակերեսը, $O$-ն յուրաքանչյուր միջնագիծ բաժանում է $2 : 1$, իսկ ընդհանուր գագաթ և մեկ ուղղի վրա հիմքեր ունեցող եռանկյունների մակերեսները հարաբերում են ինչպես հիմքերը։ Կտորները հերթով հաշվելով՝ յուրաքանչյուրը ամբողջի $\frac{1}{6}$-ն է։ Ահա թե ինչու է $O$-ն հավասարակշռության կետ. բոլոր կողմերում հավասար զանգվածներ են։

### Ինչու են եռանկյան և սեղանի միջին գծերը նույն գաղափարը

Սեղանի վերին հիմքը սեղմեք մինչև կետ. այն դառնում է եռանկյուն, և սեղանի $\frac{a + b}{2}$ միջին գիծը դառնում է $\frac{a}{2}$՝ եռանկյան միջին գիծը։ Երկուսն էլ ապացուցվում են միջնակետով անցնող զուգահեռ ուղղի մասին նույն լեմմայով։

### Ստուգեք ձեր ինտուիցիան

Երեք միջին գծերով կազմված չորս փոքր եռանկյունները հավասար են։ Ուստի **միջնակետային եռանկյունն** (գագաթները՝ միջնակետերում) ունի սկզբնականի $\frac{1}{4}$ մակերեսը, $\frac{1}{2}$ պարագիծը և նույն ծանրության կենտրոնը։`,
    r`### Доказательство: медианы пересекаются в одной точке и делятся в отношении $2 : 1$

Пусть медианы $AA_1$ и $BB_1$ треугольника $ABC$ пересекаются в точке $O$. Пусть $K$ и $L$ — середины $AO$ и $BO$.

1. $A_1B_1$ — средняя линия $\triangle ABC$: $A_1B_1 \parallel AB$ и $A_1B_1 = \frac{1}{2} AB$.
2. $KL$ — средняя линия $\triangle ABO$: $KL \parallel AB$ и $KL = \frac{1}{2} AB$.
3. Значит, $KL$ и $B_1A_1$ равны и параллельны, и $KLA_1B_1$ — параллелограмм. Его диагонали $KA_1$ и $LB_1$ делятся точкой $O$ пополам.
4. Поэтому $AK = KO = OA_1$, то есть $AO : OA_1 = 2 : 1$. Так же $BO : OB_1 = 2 : 1$.

Итак, **любые** две медианы пересекаются в точке на $\frac{2}{3}$ пути от вершины. Третья медиана $CC_1$ тоже должна пройти через точку, делящую $AA_1$ в отношении $2 : 1$, а это $O$. Все три пересекаются в $O$. ∎

### Шесть равновеликих треугольников

Три медианы делят треугольник на шесть маленьких треугольников, и у всех **одинаковая** площадь. *Почему:* медиана делит площадь пополам, $O$ делит каждую медиану в отношении $2 : 1$, а площади треугольников с общей вершиной и основаниями на одной прямой относятся как основания. Перебирая части, получаем, что каждая — $\frac{1}{6}$ целого. Поэтому $O$ — точка равновесия: со всех сторон равные массы.

### Почему средние линии треугольника и трапеции — одна идея

Сожмите верхнее основание трапеции в точку: получится треугольник, и средняя линия трапеции $\frac{a + b}{2}$ станет $\frac{a}{2}$ — средней линией треугольника. Обе доказываются одной леммой о параллельной прямой через середину.

### Проверьте интуицию

Четыре маленьких треугольника, образованные тремя средними линиями, равны. Значит, **серединный треугольник** (с вершинами в серединах сторон) имеет $\frac{1}{4}$ площади исходного, $\frac{1}{2}$ периметра и тот же центр тяжести.`,
  ),

  "proportional-in-right-triangle": th(
    r`### Deriving the three formulas

The triangles $ACH$, $ABC$, $CBH$ are similar. Write the proportions with care for the order of vertices.

- $\triangle ACH \sim \triangle ABC$ (common $\angle A$, right angles at $H$ and $C$): $\frac{AH}{AC} = \frac{AC}{AB}$, so $AC^2 = AH \cdot AB$.
- $\triangle CBH \sim \triangle ABC$ (common $\angle B$): $\frac{HB}{BC} = \frac{BC}{AB}$, so $BC^2 = HB \cdot AB$.
- $\triangle ACH \sim \triangle CBH$ ($\angle ACH = 90° - \angle A = \angle B$): $\frac{AH}{CH} = \frac{CH}{HB}$, so $CH^2 = AH \cdot HB$.

Adding the first two: $AC^2 + BC^2 = AB(AH + HB) = AB^2$, the Pythagorean theorem once more.

### Building a square root with compass and straightedge

To construct $\sqrt{mn}$ for given segments $m$ and $n$: put them end to end on a line, $AH = m$, $HB = n$, draw a semicircle on $AB$ as diameter, and raise a perpendicular at $H$ to meet the semicircle at $C$. The angle $ACB$ is inscribed on a diameter, so it is right, and $CH^2 = mn$. With $n = 1$ this gives $\sqrt{m}$ for any length $m$.

### The mean inequality, seen in a picture

In the same picture the radius is $\frac{m + n}{2}$ and the half-chord $CH$ is $\sqrt{mn}$. A half-chord is never longer than the radius, so
$$\sqrt{mn} \le \frac{m + n}{2},$$
with equality only when $m = n$ ($H$ at the centre). The **geometric mean** never exceeds the **arithmetic mean**. This inequality is used in algebra, economics and physics, and here it is just "a perpendicular inside a semicircle is at most the radius".

### Mean proportional in music

The Greek word for the mean proportional is the same as for a "middle" note. If two strings have lengths $m$ and $n$, a string of length $\sqrt{mn}$ divides the musical interval between them into two equal steps. Equal temperament on a piano is built from repeated mean proportionals.`,
    r`### Երեք բանաձևերի արտածումը

$ACH$, $ABC$, $CBH$ եռանկյունները նման են։ Համեմատությունները գրենք՝ զգույշ լինելով գագաթների հերթականության հետ։

- $\triangle ACH \sim \triangle ABC$ (ընդհանուր $\angle A$, ուղիղ անկյուններ $H$-ում և $C$-ում). $\frac{AH}{AC} = \frac{AC}{AB}$, ուստի $AC^2 = AH \cdot AB$։
- $\triangle CBH \sim \triangle ABC$ (ընդհանուր $\angle B$). $\frac{HB}{BC} = \frac{BC}{AB}$, ուստի $BC^2 = HB \cdot AB$։
- $\triangle ACH \sim \triangle CBH$ ($\angle ACH = 90° - \angle A = \angle B$). $\frac{AH}{CH} = \frac{CH}{HB}$, ուստի $CH^2 = AH \cdot HB$։

Գումարելով առաջին երկուսը՝ $AC^2 + BC^2 = AB(AH + HB) = AB^2$. ևս մեկ անգամ Պյութագորասի թեորեմը։

### Քառակուսի արմատի կառուցումը կարկինով և քանոնով

Տրված $m$ և $n$ հատվածներով $\sqrt{mn}$ կառուցելու համար դրանք ուղղի վրա դրեք իրար հետևից՝ $AH = m$, $HB = n$, $AB$-ի վրա որպես տրամագծի կառուցեք կիսաշրջանագիծ, և $H$-ում կանգնեցրեք ուղղահայաց մինչև կիսաշրջանագծի հետ հատումը՝ $C$ կետը։ $ACB$ անկյունը ներգծված է տրամագծին հենված, ուստի ուղիղ է, և $CH^2 = mn$։ $n = 1$ դեպքում սա տալիս է $\sqrt{m}$ ցանկացած $m$ երկարության համար։

### Միջինների անհավասարությունը՝ նկարում

Նույն նկարում շառավիղը $\frac{m + n}{2}$ է, իսկ $CH$ կես լարը՝ $\sqrt{mn}$։ Կես լարը երբեք շառավղից երկար չէ, ուստի
$$\sqrt{mn} \le \frac{m + n}{2},$$
և հավասարությունը միայն $m = n$ դեպքում է ($H$-ը կենտրոնում է)։ **Միջին երկրաչափականը** երբեք չի գերազանցում **միջին թվաբանականին**։ Այս անհավասարությունն օգտագործվում է հանրահաշվում, տնտեսագիտությունում և ֆիզիկայում, իսկ այստեղ այն պարզապես «կիսաշրջանագծի ներսում ուղղահայացը շառավղից երկար չէ» պնդումն է։

### Միջին համեմատականը երաժշտության մեջ

Եթե երկու լարի երկարությունները $m$ և $n$ են, ապա $\sqrt{mn}$ երկարությամբ լարը նրանց միջև եղած երաժշտական ինտերվալը բաժանում է երկու հավասար քայլի։ Դաշնամուրի հավասարաչափ լարվածքը կառուցված է կրկնվող միջին համեմատականներից։`,
    r`### Вывод трёх формул

Треугольники $ACH$, $ABC$, $CBH$ подобны. Запишем пропорции, следя за порядком вершин.

- $\triangle ACH \sim \triangle ABC$ (общий $\angle A$, прямые углы при $H$ и $C$): $\frac{AH}{AC} = \frac{AC}{AB}$, значит, $AC^2 = AH \cdot AB$.
- $\triangle CBH \sim \triangle ABC$ (общий $\angle B$): $\frac{HB}{BC} = \frac{BC}{AB}$, значит, $BC^2 = HB \cdot AB$.
- $\triangle ACH \sim \triangle CBH$ ($\angle ACH = 90° - \angle A = \angle B$): $\frac{AH}{CH} = \frac{CH}{HB}$, значит, $CH^2 = AH \cdot HB$.

Сложив первые два: $AC^2 + BC^2 = AB(AH + HB) = AB^2$ — ещё раз теорема Пифагора.

### Построение квадратного корня циркулем и линейкой

Чтобы построить $\sqrt{mn}$ по данным отрезкам $m$ и $n$, отложите их подряд на прямой, $AH = m$, $HB = n$, постройте полуокружность на $AB$ как на диаметре и восставьте перпендикуляр в точке $H$ до пересечения с полуокружностью в точке $C$. Угол $ACB$ опирается на диаметр, значит, прямой, и $CH^2 = mn$. При $n = 1$ это даёт $\sqrt{m}$ для любой длины $m$.

### Неравенство о средних — на рисунке

На том же рисунке радиус равен $\frac{m + n}{2}$, а полухорда $CH$ равна $\sqrt{mn}$. Полухорда никогда не длиннее радиуса, поэтому
$$\sqrt{mn} \le \frac{m + n}{2},$$
и равенство только при $m = n$ ($H$ в центре). **Среднее геометрическое** никогда не превосходит **среднего арифметического**. Это неравенство используют в алгебре, экономике и физике, а здесь оно просто «перпендикуляр внутри полукруга не длиннее радиуса».

### Среднее пропорциональное в музыке

Если длины двух струн $m$ и $n$, то струна длиной $\sqrt{mn}$ делит музыкальный интервал между ними на два равных шага. Равномерная темперация фортепиано построена из повторяющихся средних пропорциональных.`,
  ),

  "similarity-applications": th(
    r`### How Eratosthenes measured the Earth

About 240 BC Eratosthenes of Cyrene, librarian in Alexandria, learned that at noon on midsummer day the Sun shone straight down a deep well in Syene (today's Aswan), so it was exactly overhead there. At the same moment in Alexandria, further north, a vertical stick cast a shadow: the Sun was $\frac{1}{50}$ of a full circle (about $7{,}2°$) away from overhead.

The Sun is so far away that its rays are **parallel**. A vertical stick points to the centre of the Earth. By alternate angles, the angle between the verticals at the two cities, measured at the Earth's centre, is also $\frac{1}{50}$ of a circle. So the distance between the cities is $\frac{1}{50}$ of the circumference. The distance was about $5000$ stadia, so
$$\text{circumference} \approx 50 \cdot 5000 = 250\,000 \text{ stadia},$$
roughly $40\,000$ km, very close to the true value. A stick, a shadow and two parallel lines.

### Why distant things look small

The eye (and a camera) works like a **pinhole**: rays from the top and bottom of an object cross at the pupil and land on the back of the eye. The object and its image form two similar triangles with a common vertex, so
$$\frac{\text{image size}}{\text{object size}} = \frac{\text{eye depth}}{\text{distance}}.$$
Double the distance and the image is half as tall. The Moon and the Sun look the same size because the Sun is about $400$ times larger **and** about $400$ times farther away. That coincidence makes total solar eclipses possible.

### The pantograph

A pantograph is four bars forming a parallelogram with one extended arm. A pen at one point copies a drawing traced at another point, enlarged $k$ times. The parallelogram keeps the bars parallel, so the traced point, the pivot and the pen always form similar triangles with a fixed ratio. Draughtsmen used it to copy maps at another scale before photocopiers existed.`,
    r`### Ինչպես Էրատոսթենեսը չափեց Երկիրը

Մոտ մ.թ.ա. 240 թվականին Ալեքսանդրիայի գրադարանապետ Էրատոսթենես Կյուրենացին իմացավ, որ ամառային արևադարձի կեսօրին Սիենայում (այժմ՝ Ասուան) Արեգակը լուսավորում էր խոր ջրհորի հատակը, այսինքն՝ այնտեղ ճիշտ գլխավերևում էր։ Նույն պահին, ավելի հյուսիս՝ Ալեքսանդրիայում, ուղղաձիգ ձողը ստվեր էր գցում. Արեգակը գլխավերևից հեռու էր լրիվ շրջանի $\frac{1}{50}$ մասով (մոտ $7{,}2°$)։

Արեգակն այնքան հեռու է, որ նրա ճառագայթները **զուգահեռ** են։ Ուղղաձիգ ձողը ցույց է տալիս Երկրի կենտրոնը։ Խաչադիր անկյուններով՝ երկու քաղաքների ուղղաձիգների միջև անկյունը, չափված Երկրի կենտրոնում, նույնպես շրջանի $\frac{1}{50}$-ն է։ Ուստի քաղաքների հեռավորությունը շրջագծի $\frac{1}{50}$-ն է։ Հեռավորությունը մոտ $5000$ ստադիոն էր, ուստի
$$50 \cdot 5000 = 250\,000$$
ստադիոն, այսինքն՝ մոտ $40\,000$ կմ, շատ մոտ իրական արժեքին։ Ձող, ստվեր և երկու զուգահեռ ուղիղ։

### Ինչու են հեռավոր առարկաները փոքր երևում

Աչքը (և լուսանկարչական խցիկը) աշխատում է **անցքի** պես. առարկայի վերևից և ներքևից եկող ճառագայթները հատվում են բիբում և ընկնում աչքի հետևի պատին։ Առարկան և նրա պատկերը կազմում են ընդհանուր գագաթով երկու նման եռանկյուն, ուստի պատկերի չափը առարկայի չափին հարաբերում է ինչպես աչքի խորությունը՝ հեռավորությանը։ Կրկնապատկեք հեռավորությունը, և պատկերը կիսով չափ ցածր կլինի։ Լուսինն ու Արեգակը նույն չափի են երևում, քանի որ Արեգակը մոտ $400$ անգամ մեծ է **և** մոտ $400$ անգամ հեռու։ Այդ զուգադիպությունը հնարավոր է դարձնում արեգակի լրիվ խավարումները։

### Պանտոգրաֆը

Պանտոգրաֆը չորս ձող է, որոնք կազմում են զուգահեռագիծ՝ մեկ երկարացված թևով։ Մի կետում ամրացված գրիչը կրկնում է մեկ այլ կետով անցկացված գծագիրը՝ $k$ անգամ մեծացված։ Զուգահեռագիծը ձողերը պահում է զուգահեռ, ուստի անցկացվող կետը, առանցքը և գրիչը միշտ կազմում են հաստատուն հարաբերությամբ նման եռանկյուններ։ Մինչև պատճենահանող սարքերը գծագրողներն այն օգտագործում էին քարտեզներն այլ մասշտաբով պատճենելու համար։`,
    r`### Как Эратосфен измерил Землю

Около 240 г. до н. э. Эратосфен Киренский, хранитель Александрийской библиотеки, узнал, что в полдень летнего солнцестояния в Сиене (ныне Асуан) Солнце освещает дно глубокого колодца, то есть стоит точно в зените. В тот же момент в Александрии, севернее, вертикальный шест отбрасывал тень: Солнце отстояло от зенита на $\frac{1}{50}$ полного круга (около $7{,}2°$).

Солнце так далеко, что его лучи **параллельны**. Вертикальный шест направлен к центру Земли. По накрест лежащим углам угол между вертикалями двух городов в центре Земли тоже равен $\frac{1}{50}$ круга. Значит, расстояние между городами — $\frac{1}{50}$ окружности Земли. Расстояние было около $5000$ стадиев, поэтому
$$\text{окружность} \approx 50 \cdot 5000 = 250\,000 \text{ стадиев},$$
примерно $40\,000$ км, очень близко к истинному значению. Шест, тень и две параллельные прямые.

### Почему далёкое кажется маленьким

Глаз (и фотоаппарат) работает как **камера-обскура**: лучи от верха и низа предмета пересекаются в зрачке и попадают на заднюю стенку глаза. Предмет и его изображение образуют два подобных треугольника с общей вершиной, поэтому
$$\frac{\text{размер изображения}}{\text{размер предмета}} = \frac{\text{глубина глаза}}{\text{расстояние}}.$$
Удвойте расстояние, и изображение станет вдвое ниже. Луна и Солнце кажутся одного размера, потому что Солнце примерно в $400$ раз больше **и** примерно в $400$ раз дальше. Это совпадение делает возможными полные солнечные затмения.

### Пантограф

Пантограф — четыре стержня, образующие параллелограмм с одним удлинённым плечом. Перо в одной точке повторяет рисунок, который обводят в другой точке, увеличенный в $k$ раз. Параллелограмм держит стержни параллельными, поэтому обводимая точка, ось и перо всегда образуют подобные треугольники с постоянным отношением. До копировальных аппаратов чертёжники так переносили карты в другой масштаб.`,
  ),

  "sin-cos-tan-acute": th(
    r`### Where the names come from

Indian astronomers (around 500 AD) tabulated half-chords of a circle and called them *jya*, "bowstring". Arab scholars wrote this as *jiba*, and since Arabic is written without vowels, Latin translators in the 12th century read it as *jaib*, "fold, bay", and translated it as Latin **sinus**, "bay". So "sine" is a translation of a misreading. **Cosine** is short for *complementi sinus*, the sine of the complement: $\cos A = \sin(90° - A)$. **Tangent** (Latin *tangens*, "touching") is the length of a tangent segment, as the next picture shows.

### The unit-circle picture

Put the angle $A$ at the centre of a circle of radius $1$, one side along a horizontal radius. The other side meets the circle at point $P$. Drop a perpendicular from $P$ to the horizontal radius.

- The vertical leg has length $\sin A$, the horizontal leg $\cos A$ (hypotenuse $= 1$).
- The tangent line at the end of the horizontal radius meets the extended side at height $\tan A$.

From this picture you can **see** that as $A$ grows from $0°$ to $90°$, the sine grows from $0$ to $1$, the cosine falls from $1$ to $0$, and the tangent grows without limit. So an acute angle is determined by its sine (or cosine, or tangent): two different acute angles never have the same sine.

### Proofs of the identities

In a right triangle with legs $a$, $b$ and hypotenuse $c$: $\sin A = \frac{a}{c}$, $\cos A = \frac{b}{c}$.
$$\sin^2 A + \cos^2 A = \frac{a^2 + b^2}{c^2} = \frac{c^2}{c^2} = 1, \qquad \frac{\sin A}{\cos A} = \frac{a/c}{b/c} = \frac{a}{b} = \tan A.$$
And for the other acute angle $B = 90° - A$ the legs swap roles, so $\sin B = \frac{b}{c} = \cos A$.

### Why tables were so valuable

Before calculators, navigators and astronomers used printed tables of sines. Ptolemy (2nd century AD) made a table of chords in steps of half a degree; Ulugh Beg in Samarkand (15th century) computed sines to about eight decimal places. A ship's position at sea was found with such tables until the 20th century.`,
    r`### Որտեղից են անունները

Հնդիկ աստղագետները (մոտ մ.թ. 500 թվական) կազմում էին շրջանագծի կես լարերի աղյուսակներ և դրանք անվանում *ջյա*՝ «աղեղնալար»։ Արաբ գիտնականներն այն գրում էին *ջիբա*, և քանի որ արաբերենը գրվում է առանց ձայնավորների, XII դարի լատին թարգմանիչներն այն կարդացին *ջայբ*՝ «ծալք, ծոց», և թարգմանեցին լատիներեն **sinus**՝ «ծոց»։ Ուստի «սինուսը» սխալ ընթերցման թարգմանություն է։ **Կոսինուսը** *complementi sinus*-ի կրճատումն է՝ լրացուցիչ անկյան սինուս. $\cos A = \sin(90° - A)$։ **Տանգենսը** (լատիներեն *tangens*՝ «շոշափող») շոշափողի հատվածի երկարությունն է, ինչպես ցույց է տալիս հաջորդ նկարը։

### Միավոր շրջանագծի նկարը

$A$ անկյունը դնենք $1$ շառավղով շրջանագծի կենտրոնում, մի կողմը՝ հորիզոնական շառավղի երկայնքով։ Մյուս կողմը շրջանագիծը հատում է $P$ կետում։ $P$-ից իջեցնենք ուղղահայաց հորիզոնական շառավղին։

- Ուղղաձիգ էջի երկարությունը $\sin A$ է, հորիզոնականինը՝ $\cos A$ (ներքնաձիգը $= 1$)։
- Հորիզոնական շառավղի ծայրում տարված շոշափողը շարունակված կողմը հատում է $\tan A$ բարձրության վրա։

Այս նկարից կարելի է **տեսնել**, որ երբ $A$-ն $0°$-ից աճում է մինչև $90°$, սինուսն աճում է $0$-ից $1$, կոսինուսը նվազում է $1$-ից $0$, իսկ տանգենսն աճում է անսահմանափակ։ Ուստի սուր անկյունը որոշվում է իր սինուսով (կամ կոսինուսով, կամ տանգենսով). երկու տարբեր սուր անկյուններ երբեք նույն սինուսը չունեն։

### Նույնությունների ապացույցները

$a$, $b$ էջերով և $c$ ներքնաձիգով ուղղանկյուն եռանկյան մեջ $\sin A = \frac{a}{c}$, $\cos A = \frac{b}{c}$։
$$\sin^2 A + \cos^2 A = \frac{a^2 + b^2}{c^2} = \frac{c^2}{c^2} = 1, \qquad \frac{\sin A}{\cos A} = \frac{a/c}{b/c} = \frac{a}{b} = \tan A$$
Իսկ մյուս սուր անկյան՝ $B = 90° - A$-ի համար էջերը փոխում են դերերը, ուստի $\sin B = \frac{b}{c} = \cos A$։

### Ինչու էին աղյուսակներն այդքան արժեքավոր

Մինչև հաշվիչները նավարկողներն ու աստղագետներն օգտագործում էին սինուսների տպագիր աղյուսակներ։ Պտղոմեոսը (մ.թ. II դար) կազմեց լարերի աղյուսակ՝ կես աստիճան քայլով, Ուլուղբեկը Սամարղանդում (XV դար) հաշվեց սինուսները մոտ ութ տասնորդական նիշի ճշտությամբ։ Ծովում նավի դիրքը մինչև XX դարը գտնում էին այդպիսի աղյուսակներով։`,
    r`### Откуда названия

Индийские астрономы (около 500 г. н. э.) составляли таблицы полухорд окружности и называли их *джья* — «тетива». Арабские учёные записали это как *джиба*, а так как арабское письмо обходится без гласных, латинские переводчики XII века прочли слово как *джайб* — «складка, пазуха, залив» — и перевели латинским **sinus**, «залив». Так что «синус» — перевод ошибочного прочтения. **Косинус** — сокращение от *complementi sinus*, синус дополнения: $\cos A = \sin(90° - A)$. **Тангенс** (лат. *tangens*, «касающийся») — длина отрезка касательной, как показывает следующий рисунок.

### Рисунок с единичной окружностью

Поместим угол $A$ в центр окружности радиуса $1$, одну сторону вдоль горизонтального радиуса. Другая сторона пересекает окружность в точке $P$. Опустим из $P$ перпендикуляр на горизонтальный радиус.

- Вертикальный катет равен $\sin A$, горизонтальный — $\cos A$ (гипотенуза $= 1$).
- Касательная в конце горизонтального радиуса пересекает продолжение стороны на высоте $\tan A$.

По этому рисунку **видно**, что когда $A$ растёт от $0°$ до $90°$, синус растёт от $0$ до $1$, косинус убывает от $1$ до $0$, а тангенс растёт неограниченно. Поэтому острый угол определяется своим синусом (или косинусом, или тангенсом): у двух разных острых углов синусы никогда не совпадают.

### Доказательства тождеств

В прямоугольном треугольнике с катетами $a$, $b$ и гипотенузой $c$: $\sin A = \frac{a}{c}$, $\cos A = \frac{b}{c}$.
$$\sin^2 A + \cos^2 A = \frac{a^2 + b^2}{c^2} = \frac{c^2}{c^2} = 1, \qquad \frac{\sin A}{\cos A} = \frac{a/c}{b/c} = \frac{a}{b} = \tan A.$$
А для другого острого угла $B = 90° - A$ катеты меняются ролями, поэтому $\sin B = \frac{b}{c} = \cos A$.

### Почему таблицы так ценились

До калькуляторов мореплаватели и астрономы пользовались печатными таблицами синусов. Птолемей (II в. н. э.) составил таблицу хорд с шагом в полградуса; Улугбек в Самарканде (XV в.) вычислил синусы примерно с восемью знаками после запятой. Положение корабля в море находили по таким таблицам вплоть до XX века.`,
  ),

  "trig-values-30-45-60": th(
    r`### Two more exact values, by the same idea

**$\tan 15°$.** Take the right triangle with $\angle A = 30°$, $BC = 1$, $AC = \sqrt{3}$, $AB = 2$. Extend $CA$ beyond $A$ to a point $D$ with $AD = AB = 2$. Triangle $ABD$ is isosceles, and its exterior angle at $A$ is $30°$, so each base angle is $15°$: $\angle D = 15°$. In the right triangle $BCD$,
$$\tan 15° = \frac{BC}{CD} = \frac{1}{2 + \sqrt{3}} = \frac{2 - \sqrt{3}}{(2 + \sqrt{3})(2 - \sqrt{3})} = 2 - \sqrt{3} \approx 0{,}268.$$

**$\tan 22{,}5°$.** Do the same with the isosceles right triangle: legs $1$, hypotenuse $\sqrt{2}$. Extending a leg by $\sqrt{2}$ halves the $45°$ angle:
$$\tan 22{,}5° = \frac{1}{1 + \sqrt{2}} = \sqrt{2} - 1 \approx 0{,}414.$$

The general rule hidden here is the half-angle formula you will meet in grade 10.

### Why $\tan 30° = \frac{\sqrt{3}}{3}$, not $\frac{1}{\sqrt{3}}$

They are the same number: $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{\sqrt{3}}{3}$. Getting rid of a root in the denominator is a tradition from the days of hand calculation: $\frac{1{,}732}{3}$ is much easier to compute by hand than $\frac{1}{1{,}732}$.

### A memory trick that is also a pattern

$$\sin 0° = \frac{\sqrt{0}}{2},\quad \sin 30° = \frac{\sqrt{1}}{2},\quad \sin 45° = \frac{\sqrt{2}}{2},\quad \sin 60° = \frac{\sqrt{3}}{2},\quad \sin 90° = \frac{\sqrt{4}}{2}.$$
The cosine row is the same, read backwards. It is a convenient pattern, not a law: $\sin 15°$ is not $\frac{\sqrt{0{,}5}}{2}$.

### Checking the table with $\sin^2 + \cos^2 = 1$

For $30°$: $\frac{1}{4} + \frac{3}{4} = 1$. For $45°$: $\frac{2}{4} + \frac{2}{4} = 1$. If a value you remember fails this test, it is wrong.`,
    r`### Եվս երկու ճշգրիտ արժեք՝ նույն գաղափարով

**$\tan 15°$։** Վերցնենք $\angle A = 30°$, $BC = 1$, $AC = \sqrt{3}$, $AB = 2$ ուղղանկյուն եռանկյունը։ $CA$-ն շարունակենք $A$-ից այն կողմ մինչև $D$ կետը՝ $AD = AB = 2$ պայմանով։ $ABD$ եռանկյունը հավասարասրուն է, և նրա արտաքին անկյունը $A$-ում $30°$ է, ուստի հիմքի յուրաքանչյուր անկյուն $15°$ է. $\angle D = 15°$։ $BCD$ ուղղանկյուն եռանկյան մեջ
$$\tan 15° = \frac{BC}{CD} = \frac{1}{2 + \sqrt{3}} = \frac{2 - \sqrt{3}}{(2 + \sqrt{3})(2 - \sqrt{3})} = 2 - \sqrt{3} \approx 0{,}268$$

**$\tan 22{,}5°$։** Նույնն անենք հավասարասրուն ուղղանկյուն եռանկյան հետ. էջերը $1$, ներքնաձիգը $\sqrt{2}$։ Էջը $\sqrt{2}$-ով երկարացնելը կիսում է $45°$ անկյունը.
$$\tan 22{,}5° = \frac{1}{1 + \sqrt{2}} = \sqrt{2} - 1 \approx 0{,}414$$

Այստեղ թաքնված ընդհանուր կանոնը կես անկյան բանաձևն է, որին կծանոթանաք 10-րդ դասարանում։

### Ինչու $\tan 30° = \frac{\sqrt{3}}{3}$, ոչ թե $\frac{1}{\sqrt{3}}$

Դրանք նույն թիվն են. $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{\sqrt{3}}{3}$։ Հայտարարում արմատից ազատվելը ձեռքով հաշվարկի ժամանակներից եկած ավանդույթ է. $\frac{1{,}732}{3}$-ը ձեռքով հաշվելը շատ ավելի հեշտ է, քան $\frac{1}{1{,}732}$-ը։

### Հիշելու հնարք, որը նաև օրինաչափություն է

$$\sin 0° = \frac{\sqrt{0}}{2},\quad \sin 30° = \frac{\sqrt{1}}{2},\quad \sin 45° = \frac{\sqrt{2}}{2},\quad \sin 60° = \frac{\sqrt{3}}{2},\quad \sin 90° = \frac{\sqrt{4}}{2}$$
Կոսինուսների տողը նույնն է՝ կարդացված հակառակ ուղղությամբ։ Սա հարմար օրինաչափություն է, ոչ թե օրենք. $\sin 15°$-ը $\frac{\sqrt{0{,}5}}{2}$ չէ։

### Աղյուսակի ստուգումը $\sin^2 + \cos^2 = 1$-ով

$30°$-ի համար. $\frac{1}{4} + \frac{3}{4} = 1$։ $45°$-ի համար. $\frac{2}{4} + \frac{2}{4} = 1$։ Եթե ձեր հիշած արժեքը չի անցնում այս ստուգումը, այն սխալ է։`,
    r`### Ещё два точных значения той же идеей

**$\tan 15°$.** Возьмём прямоугольный треугольник с $\angle A = 30°$, $BC = 1$, $AC = \sqrt{3}$, $AB = 2$. Продолжим $CA$ за точку $A$ до точки $D$ так, что $AD = AB = 2$. Треугольник $ABD$ равнобедренный, его внешний угол при $A$ равен $30°$, значит, каждый угол при основании $15°$: $\angle D = 15°$. В прямоугольном треугольнике $BCD$
$$\tan 15° = \frac{BC}{CD} = \frac{1}{2 + \sqrt{3}} = \frac{2 - \sqrt{3}}{(2 + \sqrt{3})(2 - \sqrt{3})} = 2 - \sqrt{3} \approx 0{,}268.$$

**$\tan 22{,}5°$.** То же с равнобедренным прямоугольным треугольником: катеты $1$, гипотенуза $\sqrt{2}$. Продолжение катета на $\sqrt{2}$ делит угол $45°$ пополам:
$$\tan 22{,}5° = \frac{1}{1 + \sqrt{2}} = \sqrt{2} - 1 \approx 0{,}414.$$

Общее правило, скрытое здесь, — формула половинного угла, которую вы встретите в 10 классе.

### Почему $\tan 30° = \frac{\sqrt{3}}{3}$, а не $\frac{1}{\sqrt{3}}$

Это одно и то же число: $\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \frac{\sqrt{3}}{3}$. Избавляться от корня в знаменателе — традиция времён ручного счёта: $\frac{1{,}732}{3}$ вручную считать гораздо проще, чем $\frac{1}{1{,}732}$.

### Приём для памяти, который ещё и закономерность

$$\sin 0° = \frac{\sqrt{0}}{2},\quad \sin 30° = \frac{\sqrt{1}}{2},\quad \sin 45° = \frac{\sqrt{2}}{2},\quad \sin 60° = \frac{\sqrt{3}}{2},\quad \sin 90° = \frac{\sqrt{4}}{2}.$$
Строка косинусов та же, прочитанная справа налево. Это удобная закономерность, а не закон: $\sin 15°$ не равен $\frac{\sqrt{0{,}5}}{2}$.

### Проверка таблицы через $\sin^2 + \cos^2 = 1$

Для $30°$: $\frac{1}{4} + \frac{3}{4} = 1$. Для $45°$: $\frac{2}{4} + \frac{2}{4} = 1$. Если запомненное значение не проходит проверку, оно неверно.`,
  ),

  "trig-problems": th(
    r`### Height of a tower you cannot walk up to

Often the foot of a tower (or a mountain) cannot be reached, so the distance $x$ to it is unknown. Measure the angle of elevation $\alpha$ from one point, walk $d$ metres straight towards the tower, and measure the larger angle $\beta$. With height $h$:
$$h = x \tan \beta = (x + d) \tan \alpha.$$
From the first equality $x = \frac{h}{\tan \beta}$; put it into the second:
$$h = \frac{h}{\tan \beta}\tan \alpha + d \tan \alpha \quad\Longrightarrow\quad h = \frac{d \tan \alpha \tan \beta}{\tan \beta - \tan \alpha}.$$
*Example.* $\alpha = 30°$, $\beta = 45°$, $d = 100$ m: $h = \frac{100 \cdot \frac{\sqrt{3}}{3} \cdot 1}{1 - \frac{\sqrt{3}}{3}} = \frac{100\sqrt{3}}{3 - \sqrt{3}} \approx 137$ m. This is how the heights of mountains were measured long before GPS.

### Area of a parallelogram through an angle

The height of a parallelogram with sides $a$, $b$ and angle $\alpha$ between them is $b \sin \alpha$, so
$$S = ab \sin \alpha.$$
With fixed sides the area is largest at $\alpha = 90°$ (the rectangle), and it tends to $0$ as the frame is pushed flat. A parallelogram of rods "loses area" as it leans, even though its perimeter does not change.

### Small angles: sine, tangent and the angle almost agree

For small angles the opposite leg, the arc and the tangent segment are almost the same length. Road engineers use this: a $5\%$ slope means $\tan \alpha = 0{,}05$, and also $\sin \alpha \approx 0{,}05$, so going $1$ km along the road raises you about $50$ m. Up to about $10°$ the error is less than $1{,}5\%$.

### A common mistake with elevation

The angle of elevation is measured from the **horizontal** at the observer's eye, not from the ground or from the vertical. Add the eye height at the end, not at the start.`,
    r`### Աշտարակի բարձրությունը, որին չես կարող մոտենալ

Հաճախ աշտարակի (կամ լեռան) ստորոտին հնարավոր չէ հասնել, ուստի մինչև այն $x$ հեռավորությունն անհայտ է։ Մի կետից չափեք բարձրացման $\alpha$ անկյունը, քայլեք $d$ մետր ուղիղ դեպի աշտարակը և չափեք ավելի մեծ $\beta$ անկյունը։ $h$ բարձրության դեպքում
$$h = x \tan \beta = (x + d) \tan \alpha$$
Առաջին հավասարությունից $x = \frac{h}{\tan \beta}$. տեղադրենք երկրորդում.
$$h = \frac{h}{\tan \beta}\tan \alpha + d \tan \alpha \quad\Longrightarrow\quad h = \frac{d \tan \alpha \tan \beta}{\tan \beta - \tan \alpha}$$
*Օրինակ։* $\alpha = 30°$, $\beta = 45°$, $d = 100$ մ. $h = \frac{100 \cdot \frac{\sqrt{3}}{3} \cdot 1}{1 - \frac{\sqrt{3}}{3}} = \frac{100\sqrt{3}}{3 - \sqrt{3}} \approx 137$ մ։ Այդպես են չափել լեռների բարձրությունները GPS-ից շատ առաջ։

### Զուգահեռագծի մակերեսը անկյան միջոցով

$a$, $b$ կողմերով և նրանց միջև $\alpha$ անկյունով զուգահեռագծի բարձրությունը $b \sin \alpha$ է, ուստի
$$S = ab \sin \alpha$$
Ֆիքսված կողմերի դեպքում մակերեսն ամենամեծն է $\alpha = 90°$-ի դեպքում (ուղղանկյուն) և ձգտում է $0$-ի, երբ շրջանակը հարթեցնում ենք։ Ձողերից զուգահեռագիծը թեքվելիս «կորցնում է մակերես», թեև նրա պարագիծը չի փոխվում։

### Փոքր անկյուններ. սինուսը, տանգենսը և անկյունը գրեթե համընկնում են

Փոքր անկյունների դեպքում դիմացի էջը, աղեղը և շոշափողի հատվածը գրեթե նույն երկարությունն ունեն։ Ճանապարհաշինարարներն օգտագործում են դա. $5\%$ թեքությունը նշանակում է $\tan \alpha = 0{,}05$, ինչպես նաև $\sin \alpha \approx 0{,}05$, ուստի ճանապարհով $1$ կմ անցնելիս բարձրանում եք մոտ $50$ մ։ Մինչև մոտ $10°$ սխալը $1{,}5\%$-ից փոքր է։

### Տարածված սխալ բարձրացման անկյան հետ

Բարձրացման անկյունը չափվում է դիտորդի աչքի **հորիզոնականից**, ոչ թե գետնից կամ ուղղաձիգից։ Աչքի բարձրությունը գումարեք վերջում, ոչ թե սկզբում։`,
    r`### Высота башни, к которой не подойти

Часто к подножию башни (или горы) не подойти, и расстояние $x$ до неё неизвестно. Измерьте угол подъёма $\alpha$ из одной точки, пройдите $d$ метров прямо к башне и измерьте больший угол $\beta$. При высоте $h$:
$$h = x \tan \beta = (x + d) \tan \alpha.$$
Из первого равенства $x = \frac{h}{\tan \beta}$; подставим во второе:
$$h = \frac{h}{\tan \beta}\tan \alpha + d \tan \alpha \quad\Longrightarrow\quad h = \frac{d \tan \alpha \tan \beta}{\tan \beta - \tan \alpha}.$$
*Пример.* $\alpha = 30°$, $\beta = 45°$, $d = 100$ м: $h = \frac{100 \cdot \frac{\sqrt{3}}{3} \cdot 1}{1 - \frac{\sqrt{3}}{3}} = \frac{100\sqrt{3}}{3 - \sqrt{3}} \approx 137$ м. Так измеряли высоты гор задолго до GPS.

### Площадь параллелограмма через угол

Высота параллелограмма со сторонами $a$, $b$ и углом $\alpha$ между ними равна $b \sin \alpha$, поэтому
$$S = ab \sin \alpha.$$
При фиксированных сторонах площадь наибольшая при $\alpha = 90°$ (прямоугольник) и стремится к $0$, когда рамку сплющивают. Параллелограмм из стержней, наклоняясь, «теряет площадь», хотя периметр не меняется.

### Малые углы: синус, тангенс и угол почти совпадают

Для малых углов противолежащий катет, дуга и отрезок касательной почти одной длины. Дорожники этим пользуются: уклон $5\%$ означает $\tan \alpha = 0{,}05$, а также $\sin \alpha \approx 0{,}05$, поэтому, проехав $1$ км по дороге, вы поднимаетесь примерно на $50$ м. До $10°$ ошибка меньше $1{,}5\%$.

### Частая ошибка с углом подъёма

Угол подъёма отсчитывают от **горизонтали** на уровне глаз наблюдателя, а не от земли и не от вертикали. Рост наблюдателя прибавляют в конце, а не в начале.`,
  ),
};
