import { th } from "../kit";

const r = String.raw;

/** Geometry 7, units 2–3: congruence, circle, constructions, parallel lines. */
export const geometry7b = {
  "median-bisector-altitude": th(
    r`### A powerful trick: doubling the median

Let $BM$ be the median of $\triangle ABC$. Extend it beyond $M$ to a point $D$ with $MD = BM$. Then in $\triangle AMD$ and $\triangle CMB$:

- $AM = MC$ ($M$ is the midpoint),
- $MD = MB$ (by construction),
- $\angle AMD = \angle CMB$ (vertical angles).

By SAS $\triangle AMD = \triangle CMB$, so $AD = BC$ and $\angle MAD = \angle MCB$.

### Theorem: a median is shorter than half the sum of the sides around it

In $\triangle ABD$ we have $BD = 2BM$ and $AD = BC$. The triangle inequality (proved later this year) gives $BD < AB + AD$, that is
$$2BM < AB + BC, \qquad BM < \frac{AB + BC}{2}.$$
For sides $AB = 7$ and $BC = 9$ the median from $B$ is shorter than $8$, whatever $AC$ is.

### Three points where the segments meet

Draw all three medians of a paper triangle: they always pass through **one point**. The same is true for the three bisectors and for the three lines containing the altitudes. These facts are proved in grade 8. The meeting point of the medians is the **centre of mass**: a cardboard triangle balances on a pencil tip placed there.

### Common mistakes

- An altitude can lie **outside** the triangle; its foot is then on the **extension** of the side, so always draw the side as a full line first.
- The median and bisector from the same vertex are different segments unless the two sides at that vertex are equal.
- "The bisector of a triangle" is a **segment** ending on the opposite side, while "the bisector of an angle" is a **ray**.`,
    r`### Հզոր հնարք. միջնագծի կրկնապատկումը

Թող $BM$-ը լինի $\triangle ABC$-ի միջնագիծը։ Շարունակենք այն $M$-ից այն կողմ մինչև $D$ կետը այնպես, որ $MD = BM$։ Այդ դեպքում $\triangle AMD$-ում և $\triangle CMB$-ում.

- $AM = MC$ ($M$-ը միջնակետ է),
- $MD = MB$ (կառուցմամբ),
- $\angle AMD = \angle CMB$ (հակադիր անկյուններ)։

Ըստ առաջին հայտանիշի՝ $\triangle AMD = \triangle CMB$, ուստի $AD = BC$ և $\angle MAD = \angle MCB$։

### Թեորեմ. միջնագիծը փոքր է իր շուրջ կողմերի գումարի կեսից

$\triangle ABD$-ում $BD = 2BM$, իսկ $AD = BC$։ Եռանկյան անհավասարությունից (կապացուցենք այս տարի) $BD < AB + AD$, այսինքն՝
$$2BM < AB + BC, \qquad BM < \frac{AB + BC}{2}$$
$AB = 7$ և $BC = 9$ կողմերի դեպքում $B$-ից տարված միջնագիծը $8$-ից փոքր է՝ անկախ $AC$-ից։

### Երեք կետ, որտեղ հատվածները հանդիպում են

Թղթե եռանկյան մեջ տարեք երեք միջնագծերը. նրանք միշտ անցնում են **մեկ կետով**։ Նույնը ճիշտ է երեք կիսորդների և բարձրությունները պարունակող երեք ուղիղների համար։ Այս փաստերն ապացուցվում են 8-րդ դասարանում։ Միջնագծերի հատման կետը **զանգվածների կենտրոնն** է. ստվարաթղթե եռանկյունը հավասարակշռվում է այդ կետում դրված մատիտի ծայրին։

### Տարածված սխալներ

- Բարձրությունը կարող է լինել եռանկյունից **դուրս**. այդ դեպքում նրա հիմքը կողմի **շարունակության** վրա է, ուստի կողմը նախ գծեք որպես ամբողջ ուղիղ։
- Նույն գագաթից տարված միջնագիծը և կիսորդը տարբեր հատվածներ են, եթե այդ գագաթի կողմերը հավասար չեն։
- «Եռանկյան կիսորդը» **հատված** է, որն ավարտվում է դիմացի կողմի վրա, իսկ «անկյան կիսորդը»՝ **ճառագայթ**։`,
    r`### Сильный приём: удвоение медианы

Пусть $BM$ — медиана $\triangle ABC$. Продолжим её за точку $M$ до точки $D$ так, что $MD = BM$. Тогда в $\triangle AMD$ и $\triangle CMB$:

- $AM = MC$ ($M$ — середина),
- $MD = MB$ (по построению),
- $\angle AMD = \angle CMB$ (вертикальные углы).

По первому признаку $\triangle AMD = \triangle CMB$, значит, $AD = BC$ и $\angle MAD = \angle MCB$.

### Теорема: медиана меньше полусуммы прилежащих сторон

В $\triangle ABD$ имеем $BD = 2BM$ и $AD = BC$. Неравенство треугольника (докажем в этом году) даёт $BD < AB + AD$, то есть
$$2BM < AB + BC, \qquad BM < \frac{AB + BC}{2}.$$
При сторонах $AB = 7$ и $BC = 9$ медиана из $B$ меньше $8$, каким бы ни было $AC$.

### Три точки пересечения

Проведите все три медианы бумажного треугольника: они всегда проходят через **одну точку**. То же верно для трёх биссектрис и для трёх прямых, содержащих высоты. Эти факты доказывают в 8 классе. Точка пересечения медиан — **центр масс**: картонный треугольник балансирует на острие карандаша, поставленном в эту точку.

### Частые ошибки

- Высота может лежать **вне** треугольника; её основание тогда на **продолжении** стороны, поэтому сначала проведите сторону целой прямой.
- Медиана и биссектриса из одной вершины — разные отрезки, если стороны при этой вершине не равны.
- «Биссектриса треугольника» — **отрезок** до противоположной стороны, а «биссектриса угла» — **луч**.`,
  ),

  "isosceles-triangle": th(
    r`### A shorter proof without extra lines

The ancient proof by Pappus of Alexandria compares the triangle **with itself**. In isosceles $\triangle ABC$ with $AB = CB$, look at $\triangle ABC$ and $\triangle CBA$ (the same triangle read in the other direction):

- $AB = CB$ and $CB = AB$ (given),
- $\angle B = \angle B$ (the same angle).

By SAS $\triangle ABC = \triangle CBA$. In this congruence $A$ corresponds to $C$, so $\angle A = \angle C$. ∎

No bisector is needed, and no question "does the bisector exist?" arises.

### The converse: two equal angles give an isosceles triangle

**Theorem.** If $\angle A = \angle C$ in $\triangle ABC$, then $AB = CB$.

*Proof.* Compare $\triangle ABC$ with $\triangle CBA$ again: $AC = CA$, $\angle A = \angle C$ and $\angle C = \angle A$. By ASA they are congruent, and $AB$ corresponds to $CB$. ∎

So "isosceles" can be checked by sides **or** by angles. This is used constantly: a triangle with angles $50°$, $50°$, $80°$ is isosceles without measuring anything.

### Why it was called "the bridge of asses"

In medieval universities the base-angle theorem (Euclid I.5) was nicknamed *pons asinorum*, the bridge of asses. Euclid's own proof had a complicated figure that looked like a bridge, and weak students "could not cross it". It was the first real test of understanding proofs.

### Watch out

The theorem about the bisector, median and altitude is only about the segment drawn **to the base**. The bisector from a base angle is generally not a median.`,
    r`### Ավելի կարճ ապացույց՝ առանց լրացուցիչ գծերի

Ալեքսանդրիացի Պապոսի հին ապացույցը եռանկյունը համեմատում է **ինքն իր հետ**։ $AB = CB$ հավասարասրուն $\triangle ABC$-ում դիտարկենք $\triangle ABC$-ն և $\triangle CBA$-ն (նույն եռանկյունը՝ կարդացված հակառակ ուղղությամբ).

- $AB = CB$ և $CB = AB$ (տրված է),
- $\angle B = \angle B$ (նույն անկյունն է)։

Ըստ առաջին հայտանիշի՝ $\triangle ABC = \triangle CBA$։ Այս հավասարության մեջ $A$-ին համապատասխանում է $C$-ն, ուստի $\angle A = \angle C$։ ∎

Կիսորդ պետք չէ, և «արդյո՞ք կիսորդը գոյություն ունի» հարցը չի ծագում։

### Հակադարձը. երկու հավասար անկյուն ունեցող եռանկյունը հավասարասրուն է

**Թեորեմ։** Եթե $\triangle ABC$-ում $\angle A = \angle C$, ապա $AB = CB$։

*Ապացույց։* Կրկին համեմատենք $\triangle ABC$-ն $\triangle CBA$-ի հետ. $AC = CA$, $\angle A = \angle C$ և $\angle C = \angle A$։ Ըստ երկրորդ հայտանիշի՝ նրանք հավասար են, և $AB$-ին համապատասխանում է $CB$-ն։ ∎

Ուստի «հավասարասրուն» լինելը կարելի է ստուգել կողմերով **կամ** անկյուններով։ Սա անընդհատ է օգտագործվում. $50°$, $50°$, $80°$ անկյուններով եռանկյունը հավասարասրուն է՝ առանց որևէ բան չափելու։

### Ինչու էին այն անվանում «էշերի կամուրջ»

Միջնադարյան համալսարաններում հիմքի անկյունների թեորեմը (Էվկլիդեսի I.5) կոչում էին *pons asinorum*՝ էշերի կամուրջ։ Էվկլիդեսի ապացույցն ուներ բարդ գծագիր, որը կամրջի էր նման, և թույլ ուսանողները «չէին կարողանում անցնել այն»։ Դա ապացույցները հասկանալու առաջին իսկական քննությունն էր։

### Ուշադրություն

Կիսորդի, միջնագծի և բարձրության մասին թեորեմը վերաբերում է միայն **հիմքին** տարված հատվածին։ Հիմքի անկյունից տարված կիսորդն ընդհանրապես միջնագիծ չէ։`,
    r`### Более короткое доказательство без дополнительных линий

Древнее доказательство Паппа Александрийского сравнивает треугольник **с самим собой**. В равнобедренном $\triangle ABC$ с $AB = CB$ рассмотрим $\triangle ABC$ и $\triangle CBA$ (тот же треугольник, прочитанный в обратную сторону):

- $AB = CB$ и $CB = AB$ (дано),
- $\angle B = \angle B$ (один и тот же угол).

По первому признаку $\triangle ABC = \triangle CBA$. В этом равенстве $A$ соответствует $C$, значит, $\angle A = \angle C$. ∎

Биссектриса не нужна, и вопрос «а существует ли биссектриса?» не возникает.

### Обратная теорема: два равных угла дают равнобедренный треугольник

**Теорема.** Если в $\triangle ABC$ $\angle A = \angle C$, то $AB = CB$.

*Доказательство.* Снова сравним $\triangle ABC$ с $\triangle CBA$: $AC = CA$, $\angle A = \angle C$ и $\angle C = \angle A$. По второму признаку они равны, и $AB$ соответствует $CB$. ∎

Значит, «равнобедренность» можно проверять по сторонам **или** по углам. Это используется постоянно: треугольник с углами $50°$, $50°$, $80°$ равнобедренный без всяких измерений.

### Почему её называли «ослиным мостом»

В средневековых университетах теорему об углах при основании (Евклид, I.5) прозвали *pons asinorum* — «ослиный мост». У Евклида был сложный чертёж, похожий на мост, и слабые студенты «не могли его перейти». Это была первая настоящая проверка понимания доказательств.

### Осторожно

Теорема о биссектрисе, медиане и высоте говорит только об отрезке, проведённом **к основанию**. Биссектриса из угла при основании, вообще говоря, не медиана.`,
  ),

  "second-third-tests": th(
    r`### Proof of ASA

Given $AB = A_1B_1$, $\angle A = \angle A_1$, $\angle B = \angle B_1$. Place $\triangle ABC$ so that $A$ falls on $A_1$, $B$ on $B_1$ (possible since $AB = A_1B_1$), and $C$ is on the same side as $C_1$. Since $\angle A = \angle A_1$, ray $AC$ falls on ray $A_1C_1$; since $\angle B = \angle B_1$, ray $BC$ falls on ray $B_1C_1$. Point $C$ lies on both rays, and so does $C_1$. Two different lines meet in at most one point, so $C = C_1$. ∎

### Proof of SSS

Given three pairs of equal sides. Put the triangles together along the equal sides $AC$ and $A_1C_1$ so that $B$ and $B_1$ lie on **opposite** sides of $AC$. Join $B$ and $B_1$.

- $AB = AB_1$, so $\triangle ABB_1$ is isosceles and $\angle ABB_1 = \angle AB_1B$.
- $CB = CB_1$, so $\triangle CBB_1$ is isosceles and $\angle CBB_1 = \angle CB_1B$.

Adding (or subtracting, if $BB_1$ passes outside), $\angle ABC = \angle AB_1C$. Now SAS gives $\triangle ABC = \triangle AB_1C$. ∎

The figure $ABCB_1$ is a **kite** ("deltoid"): its diagonal $AC$ is an axis of symmetry.

### When does "two sides and an angle not between them" work?

It works if the given angle lies opposite the **longer** of the two sides. Then the circle in the construction cuts the ray only once on the correct side. The hypotenuse-leg test for right triangles is the most important special case: the right angle is opposite the hypotenuse, the longest side.

### Engineering note

Because of SSS, a triangle made of three rods with hinges cannot change shape, while a square of four rods folds into a rhombus. A diagonal brace turns the square into two rigid triangles. Look at any crane, bridge truss or bicycle frame.`,
    r`### Երկրորդ հայտանիշի ապացույցը

Տրված է $AB = A_1B_1$, $\angle A = \angle A_1$, $\angle B = \angle B_1$։ Տեղադրենք $\triangle ABC$-ն այնպես, որ $A$-ն ընկնի $A_1$-ի վրա, $B$-ն՝ $B_1$-ի վրա (հնարավոր է, քանի որ $AB = A_1B_1$), իսկ $C$-ն լինի $C_1$-ի կողմում։ Քանի որ $\angle A = \angle A_1$, $AC$ ճառագայթն ընկնում է $A_1C_1$-ի վրա. քանի որ $\angle B = \angle B_1$, $BC$ ճառագայթն ընկնում է $B_1C_1$-ի վրա։ $C$ կետը երկու ճառագայթների վրա է, $C_1$-ը՝ նույնպես։ Երկու տարբեր ուղիղներ հատվում են առավելագույնը մեկ կետում, ուստի $C = C_1$։ ∎

### Երրորդ հայտանիշի ապացույցը

Տրված են երեք զույգ հավասար կողմեր։ Եռանկյունները միացնենք $AC$ և $A_1C_1$ հավասար կողմերով այնպես, որ $B$-ն և $B_1$-ը լինեն $AC$-ի **տարբեր** կողմերում։ Միացնենք $B$-ն և $B_1$-ը։

- $AB = AB_1$, ուստի $\triangle ABB_1$-ը հավասարասրուն է, և $\angle ABB_1 = \angle AB_1B$։
- $CB = CB_1$, ուստի $\triangle CBB_1$-ը հավասարասրուն է, և $\angle CBB_1 = \angle CB_1B$։

Գումարելով (կամ հանելով, եթե $BB_1$-ն անցնում է դրսով)՝ $\angle ABC = \angle AB_1C$։ Այժմ առաջին հայտանիշը տալիս է $\triangle ABC = \triangle AB_1C$։ ∎

$ABCB_1$ պատկերը **դելտոիդ** է. նրա $AC$ անկյունագիծը համաչափության առանցք է։

### Ե՞րբ է աշխատում «երկու կողմ և ոչ նրանց կազմած անկյուն» պայմանը

Այն աշխատում է, եթե տրված անկյունը **մեծ** կողմի դիմաց է։ Այդ դեպքում կառուցման շրջանագիծը ճիշտ կողմում ճառագայթը հատում է միայն մեկ անգամ։ Ուղղանկյուն եռանկյունների ներքնաձիգով և էջով հայտանիշն ամենակարևոր մասնավոր դեպքն է. ուղիղ անկյունը ներքնաձիգի՝ ամենամեծ կողմի դիմաց է։

### Ինժեներական դիտողություն

Երրորդ հայտանիշի շնորհիվ երեք ձողից հոդակապերով պատրաստված եռանկյունը չի կարող ձևը փոխել, իսկ չորս ձողից քառակուսին ծալվում է շեղանկյան։ Անկյունագծային ամրակը քառակուսին վերածում է երկու կոշտ եռանկյան։ Նայեք ցանկացած ամբարձիչի, կամրջի կամ հեծանիվի շրջանակին։`,
    r`### Доказательство второго признака

Дано $AB = A_1B_1$, $\angle A = \angle A_1$, $\angle B = \angle B_1$. Наложим $\triangle ABC$ так, чтобы $A$ совпала с $A_1$, $B$ — с $B_1$ (это возможно, так как $AB = A_1B_1$), а $C$ оказалась по ту же сторону, что и $C_1$. Так как $\angle A = \angle A_1$, луч $AC$ ляжет на луч $A_1C_1$; так как $\angle B = \angle B_1$, луч $BC$ ляжет на луч $B_1C_1$. Точка $C$ лежит на обоих лучах, и $C_1$ тоже. Две различные прямые имеют не более одной общей точки, значит, $C = C_1$. ∎

### Доказательство третьего признака

Даны три пары равных сторон. Приложим треугольники равными сторонами $AC$ и $A_1C_1$ так, чтобы $B$ и $B_1$ оказались по **разные** стороны от $AC$. Соединим $B$ и $B_1$.

- $AB = AB_1$, значит, $\triangle ABB_1$ равнобедренный и $\angle ABB_1 = \angle AB_1B$.
- $CB = CB_1$, значит, $\triangle CBB_1$ равнобедренный и $\angle CBB_1 = \angle CB_1B$.

Складывая (или вычитая, если $BB_1$ проходит снаружи), получаем $\angle ABC = \angle AB_1C$. Теперь первый признак даёт $\triangle ABC = \triangle AB_1C$. ∎

Фигура $ABCB_1$ — **дельтоид**: его диагональ $AC$ — ось симметрии.

### Когда работает «две стороны и угол не между ними»?

Работает, если данный угол лежит против **большей** из двух сторон. Тогда окружность в построении пересекает луч с нужной стороны только один раз. Признак равенства прямоугольных треугольников по гипотенузе и катету — важнейший частный случай: прямой угол лежит против гипотенузы, самой большой стороны.

### Инженерное замечание

Благодаря третьему признаку треугольник из трёх стержней на шарнирах не меняет формы, а квадрат из четырёх стержней складывается в ромб. Диагональная распорка превращает квадрат в два жёстких треугольника. Посмотрите на любой кран, мостовую ферму или раму велосипеда.`,
  ),

  "circle-basics": th(
    r`### Theorem: the diameter is the longest chord

Let $AB$ be any chord of a circle with centre $O$ and radius $r$. In $\triangle AOB$ (or on a line, if $AB$ passes through $O$),
$$AB \le AO + OB = r + r = 2r.$$
Equality holds only when $O$ lies on $AB$, that is when $AB$ is a diameter. ∎

### Theorem: the diameter perpendicular to a chord bisects it

Let diameter $CD$ be perpendicular to chord $AB$ at $H$. Then $OA = OB$, so $\triangle AOB$ is isosceles, and $OH$ is its altitude to the base. In an isosceles triangle the altitude to the base is also the median, so $AH = HB$. ∎

The converse is also true: the diameter through the midpoint of a chord (not a diameter) is perpendicular to it. That is how you find the centre of a round plate: draw two chords, their perpendicular bisectors meet at the centre.

### Theorem: equal chords have equal central angles

If $AB = CD$, then $\triangle AOB = \triangle COD$ by SSS (all four other sides are radii), so $\angle AOB = \angle COD$. Conversely, equal central angles give equal chords by SAS.

### Why a wheel is round

Every point of the rim is at distance $r$ from the axle, so the axle stays at the same height as the wheel rolls. A wheel shaped like a square would make the axle jump up and down by $r\sqrt{2} - r$. A circle is the only curve with this "constant distance from a centre" property.`,
    r`### Թեորեմ. տրամագիծն ամենամեծ լարն է

Թող $AB$-ն լինի $O$ կենտրոնով և $r$ շառավղով շրջանագծի կամայական լար։ $\triangle AOB$-ում (կամ ուղղի վրա, եթե $AB$-ն անցնում է $O$-ով)
$$AB \le AO + OB = r + r = 2r$$
Հավասարություն լինում է միայն այն դեպքում, երբ $O$-ն $AB$-ի վրա է, այսինքն՝ երբ $AB$-ն տրամագիծ է։ ∎

### Թեորեմ. լարին ուղղահայաց տրամագիծը կիսում է այն

Թող $CD$ տրամագիծն ուղղահայաց լինի $AB$ լարին՝ $H$ կետում։ $OA = OB$, ուստի $\triangle AOB$-ն հավասարասրուն է, իսկ $OH$-ը նրա բարձրությունն է՝ տարված հիմքին։ Հավասարասրուն եռանկյան մեջ հիմքին տարված բարձրությունը նաև միջնագիծ է, ուստի $AH = HB$։ ∎

Ճիշտ է նաև հակադարձը. լարի (ոչ տրամագծի) միջնակետով անցնող տրամագիծն ուղղահայաց է նրան։ Այդպես են գտնում կլոր ափսեի կենտրոնը. տարեք երկու լար, նրանց միջնուղղահայացները հատվում են կենտրոնում։

### Թեորեմ. հավասար լարերին համապատասխանում են հավասար կենտրոնային անկյուններ

Եթե $AB = CD$, ապա $\triangle AOB = \triangle COD$ ըստ երրորդ հայտանիշի (մնացած չորս կողմերը շառավիղներ են), ուստի $\angle AOB = \angle COD$։ Հակառակը՝ հավասար կենտրոնային անկյունները տալիս են հավասար լարեր՝ ըստ առաջին հայտանիշի։

### Ինչու է անիվը կլոր

Անվահեցի յուրաքանչյուր կետ առանցքից $r$ հեռավորության վրա է, ուստի անիվը գլորվելիս առանցքը մնում է նույն բարձրության վրա։ Քառակուսի անիվն առանցքը կցատկեցներ վեր ու վար $r\sqrt{2} - r$-ով։ Շրջանագիծը միակ կորն է, որն ունի «կենտրոնից հաստատուն հեռավորության» այս հատկությունը։`,
    r`### Теорема: диаметр — наибольшая хорда

Пусть $AB$ — любая хорда окружности с центром $O$ и радиусом $r$. В $\triangle AOB$ (или на прямой, если $AB$ проходит через $O$)
$$AB \le AO + OB = r + r = 2r.$$
Равенство только тогда, когда $O$ лежит на $AB$, то есть когда $AB$ — диаметр. ∎

### Теорема: диаметр, перпендикулярный хорде, делит её пополам

Пусть диаметр $CD$ перпендикулярен хорде $AB$ в точке $H$. $OA = OB$, значит, $\triangle AOB$ равнобедренный, а $OH$ — его высота к основанию. В равнобедренном треугольнике высота к основанию — также медиана, поэтому $AH = HB$. ∎

Верно и обратное: диаметр, проходящий через середину хорды (не диаметра), перпендикулярен ей. Так находят центр круглой тарелки: проведите две хорды, их серединные перпендикуляры пересекутся в центре.

### Теорема: равным хордам соответствуют равные центральные углы

Если $AB = CD$, то $\triangle AOB = \triangle COD$ по третьему признаку (остальные четыре стороны — радиусы), значит, $\angle AOB = \angle COD$. Обратно, равные центральные углы дают равные хорды по первому признаку.

### Почему колесо круглое

Каждая точка обода находится на расстоянии $r$ от оси, поэтому при качении ось остаётся на одной высоте. Квадратное колесо заставило бы ось прыгать вверх-вниз на $r\sqrt{2} - r$. Окружность — единственная кривая с таким свойством «постоянного расстояния до центра».`,
  ),

  "constructions": th(
    r`### Why every construction needs a proof

A drawing can look right and still be wrong by a hair. A construction is accepted only when we **prove** that it gives exactly what was asked. Here is the proof for the perpendicular bisector.

Circles of equal radius $R$ centred at $A$ and $B$ meet at $P$ and $Q$. Then $PA = PB = QA = QB = R$.

1. $\triangle APQ = \triangle BPQ$ by SSS ($PQ$ is common). So $\angle APQ = \angle BPQ$: $PQ$ is the bisector of angle $APB$.
2. Let $PQ$ cross $AB$ at $M$. In isosceles $\triangle APB$ the bisector $PM$ to the base is also the median and the altitude.

So $AM = MB$ and $PQ \perp AB$. ∎

### Why only a compass and a straightedge

Euclid's first three postulates say: you may draw a line through two points, extend it, and draw a circle with any centre and radius. These are the **only** operations, so every construction is an exact logical consequence of the axioms, not of a good eye or a fine ruler.

### Three famous impossible problems

The Greeks could not solve three problems with these tools:

1. **Trisect** any angle (divide it into three equal parts).
2. **Double the cube**: build the edge of a cube with twice the volume.
3. **Square the circle**: build a square with the area of a given circle.

For 2000 years people kept trying. In 1837 Pierre Wantzel proved that the first two are impossible, and in 1882 Ferdinand von Lindemann proved that $\pi$ is "transcendental", which makes the third impossible too. Some angles can be trisected (for example $90°$, since $30°$ is constructible), but not every angle.

In 1796 the 19-year-old Carl Friedrich Gauss found how to construct a regular **17-gon**, the first new regular polygon since antiquity. He asked for it to be carved on his tombstone.`,
    r`### Ինչու է յուրաքանչյուր կառուցում ապացույցի կարիք ունենում

Գծագիրը կարող է ճիշտ թվալ և, այնուամենայնիվ, մազաչափ սխալ լինել։ Կառուցումն ընդունվում է միայն այն դեպքում, երբ **ապացուցում** ենք, որ այն տալիս է հենց պահանջվածը։ Ահա միջնուղղահայացի ապացույցը։

$A$ և $B$ կենտրոններով, հավասար $R$ շառավղով շրջանագծերը հատվում են $P$ և $Q$ կետերում։ Այդ դեպքում $PA = PB = QA = QB = R$։

1. $\triangle APQ = \triangle BPQ$ ըստ երրորդ հայտանիշի ($PQ$-ն ընդհանուր է)։ Ուստի $\angle APQ = \angle BPQ$. $PQ$-ն $APB$ անկյան կիսորդն է։
2. Թող $PQ$-ն $AB$-ն հատի $M$ կետում։ Հավասարասրուն $\triangle APB$-ում հիմքին տարված $PM$ կիսորդը նաև միջնագիծ է և բարձրություն։

Ուստի $AM = MB$ և $PQ \perp AB$։ ∎

### Ինչու միայն կարկին և քանոն

Էվկլիդեսի առաջին երեք պոստուլատներն ասում են. կարելի է երկու կետով ուղիղ տանել, այն շարունակել և ցանկացած կենտրոնով ու շառավղով շրջանագիծ գծել։ Սրանք **միակ** գործողություններն են, ուստի յուրաքանչյուր կառուցում աքսիոմների ճշգրիտ տրամաբանական հետևանք է, ոչ թե լավ աչքի կամ բարակ քանոնի։

### Երեք հայտնի անլուծելի խնդիր

Հույները այս գործիքներով չկարողացան լուծել երեք խնդիր.

1. Ցանկացած անկյան **եռատում**. բաժանել այն երեք հավասար մասի։
2. **Խորանարդի կրկնապատկում**. կառուցել կրկնակի ծավալով խորանարդի կողը։
3. **Շրջանի քառակուսացում**. կառուցել տրված շրջանին հավասարամեծ քառակուսի։

2000 տարի մարդիկ փորձում էին։ 1837 թվականին Պիեռ Վանցելն ապացուցեց, որ առաջին երկուսն անհնար են, իսկ 1882 թվականին Ֆերդինանդ ֆոն Լինդեմանն ապացուցեց, որ $\pi$-ն «տրանսցենդենտ» է, ինչը երրորդն էլ է անհնար դարձնում։ Որոշ անկյուններ կարելի է եռատել (օրինակ՝ $90°$-ը, քանի որ $30°$-ը կառուցելի է), բայց ոչ բոլորը։

1796 թվականին 19-ամյա Կարլ Ֆրիդրիխ Գաուսը գտավ կանոնավոր **տասնյոթանկյան** կառուցումը՝ հնագույն ժամանակներից ի վեր առաջին նոր կանոնավոր բազմանկյունը։ Նա խնդրեց այն փորագրել իր տապանաքարին։`,
    r`### Почему каждое построение требует доказательства

Чертёж может выглядеть верным и всё же ошибаться на волосок. Построение принимают, только когда **доказано**, что оно даёт ровно то, что требовалось. Вот доказательство для серединного перпендикуляра.

Окружности равного радиуса $R$ с центрами $A$ и $B$ пересекаются в точках $P$ и $Q$. Тогда $PA = PB = QA = QB = R$.

1. $\triangle APQ = \triangle BPQ$ по третьему признаку ($PQ$ — общая). Значит, $\angle APQ = \angle BPQ$: $PQ$ — биссектриса угла $APB$.
2. Пусть $PQ$ пересекает $AB$ в точке $M$. В равнобедренном $\triangle APB$ биссектриса $PM$ к основанию — также медиана и высота.

Итак, $AM = MB$ и $PQ \perp AB$. ∎

### Почему только циркуль и линейка

Первые три постулата Евклида говорят: можно провести прямую через две точки, продолжить её и провести окружность с любым центром и радиусом. Это **единственные** операции, поэтому каждое построение — точное логическое следствие аксиом, а не хорошего глазомера или тонкой линейки.

### Три знаменитые неразрешимые задачи

Греки не смогли решить этими инструментами три задачи:

1. **Трисекция** любого угла (разделить его на три равные части).
2. **Удвоение куба**: построить ребро куба вдвое большего объёма.
3. **Квадратура круга**: построить квадрат, равновеликий данному кругу.

2000 лет люди пытались. В 1837 году Пьер Ванцель доказал, что первые две невозможны, а в 1882 году Фердинанд фон Линдеман доказал, что $\pi$ «трансцендентно», и третья тоже стала невозможной. Некоторые углы делятся на три (например, $90°$, ведь $30°$ строится), но не любой.

В 1796 году 19-летний Карл Фридрих Гаусс нашёл построение правильного **17-угольника** — первого нового правильного многоугольника со времён античности. Он просил высечь его на своём надгробии.`,
  ),

  "parallel-definition": th(
    r`### The full proof of the alternate-angle test

Let line $c$ cross lines $a$ and $b$ at $A$ and $B$, and let the alternate angles be equal: $\angle 1 = \angle 2$. Suppose $a$ and $b$ are **not** parallel; then they meet at some point $C$, say on the right of $c$.

1. On line $a$, on the **left** of $c$, mark point $C_1$ with $AC_1 = BC$.
2. Compare $\triangle ABC_1$ and $\triangle BAC$: $AB$ is common, $AC_1 = BC$, and the angles at $A$ and $B$ between these sides are $\angle 1$ and $\angle 2$, which are equal. By SAS the triangles are congruent.
3. So $\angle ABC_1 = \angle BAC$. But $\angle BAC$ is adjacent to $\angle 1$, so $\angle ABC_1$ together with $\angle 2$ gives $180°$. That means $C_1$ lies on line $b$.
4. Now lines $a$ and $b$ have **two** common points, $C$ and $C_1$. This is impossible. ∎

Notice: this proof does **not** use the parallel axiom. Parallel lines exist in any geometry built on our first axioms.

### The other two tests follow at once

- **Corresponding angles equal.** The angle vertical to one of them is an alternate angle to the other, so alternate angles are equal.
- **Co-interior angles add to $180°$.** The angle adjacent to one of them equals $180°$ minus it, which is the other angle; these two are alternate.

### Why "two perpendiculars to one line are parallel"

For lines $a \perp c$ and $b \perp c$, the corresponding angles are both $90°$, so the test applies. This is how carpenters draw parallel lines: with a set square sliding along a straight rail.`,
    r`### Խաչադիր անկյունների հայտանիշի լրիվ ապացույցը

Թող $c$ ուղիղը $a$ և $b$ ուղիղները հատի $A$ և $B$ կետերում, և խաչադիր անկյունները հավասար լինեն. $\angle 1 = \angle 2$։ Ենթադրենք՝ $a$-ն և $b$-ն զուգահեռ **չեն**. այդ դեպքում նրանք հատվում են ինչ-որ $C$ կետում, օրինակ՝ $c$-ից աջ։

1. $a$ ուղղի վրա, $c$-ից **ձախ**, նշենք $C_1$ կետն այնպես, որ $AC_1 = BC$։
2. Համեմատենք $\triangle ABC_1$-ը և $\triangle BAC$-ն. $AB$-ն ընդհանուր է, $AC_1 = BC$, իսկ այդ կողմերի միջև $A$ և $B$ գագաթների անկյունները $\angle 1$-ն ու $\angle 2$-ն են, որոնք հավասար են։ Ըստ առաջին հայտանիշի՝ եռանկյունները հավասար են։
3. Ուստի $\angle ABC_1 = \angle BAC$։ Բայց $\angle BAC$-ն կից է $\angle 1$-ին, ուստի $\angle ABC_1$-ը $\angle 2$-ի հետ միասին տալիս է $180°$։ Նշանակում է՝ $C_1$-ը $b$ ուղղի վրա է։
4. Այժմ $a$ և $b$ ուղիղներն ունեն **երկու** ընդհանուր կետ՝ $C$ և $C_1$։ Դա անհնար է։ ∎

Նկատեք. այս ապացույցը **չի** օգտագործում զուգահեռության աքսիոմը։ Զուգահեռ ուղիղներ գոյություն ունեն մեր առաջին աքսիոմների վրա կառուցված ցանկացած երկրաչափության մեջ։

### Մյուս երկու հայտանիշներն անմիջապես հետևում են

- **Համապատասխան անկյունները հավասար են։** Դրանցից մեկին հակադիր անկյունը մյուսի հետ խաչադիր է, ուստի խաչադիր անկյունները հավասար են։
- **Միակողմանի անկյունների գումարը $180°$ է։** Դրանցից մեկին կից անկյունը հավասար է $180°$ հանած այդ անկյունը, այսինքն՝ մյուսին. այս երկուսը խաչադիր են։

### Ինչու են «մեկ ուղղին ուղղահայաց երկու ուղիղները զուգահեռ»

$a \perp c$ և $b \perp c$ ուղիղների համար համապատասխան անկյունները երկուսն էլ $90°$ են, ուստի հայտանիշը կիրառելի է։ Այդպես են ատաղձագործները զուգահեռ գծեր գծում. ուղիղ ռելսի երկայնքով սահող անկյունակով։`,
    r`### Полное доказательство признака по накрест лежащим углам

Пусть прямая $c$ пересекает прямые $a$ и $b$ в точках $A$ и $B$, и накрест лежащие углы равны: $\angle 1 = \angle 2$. Предположим, что $a$ и $b$ **не** параллельны; тогда они пересекаются в некоторой точке $C$, скажем, справа от $c$.

1. На прямой $a$ **слева** от $c$ отметим точку $C_1$ так, что $AC_1 = BC$.
2. Сравним $\triangle ABC_1$ и $\triangle BAC$: $AB$ — общая, $AC_1 = BC$, а углы при $A$ и $B$ между этими сторонами — это $\angle 1$ и $\angle 2$, они равны. По первому признаку треугольники равны.
3. Значит, $\angle ABC_1 = \angle BAC$. Но $\angle BAC$ смежный с $\angle 1$, поэтому $\angle ABC_1$ вместе с $\angle 2$ даёт $180°$. Это значит, что $C_1$ лежит на прямой $b$.
4. Теперь у прямых $a$ и $b$ **две** общие точки, $C$ и $C_1$. Это невозможно. ∎

Заметьте: это доказательство **не** использует аксиому параллельных. Параллельные прямые существуют в любой геометрии, построенной на наших первых аксиомах.

### Два других признака следуют сразу

- **Соответственные углы равны.** Угол, вертикальный одному из них, накрест лежит с другим, значит, накрест лежащие углы равны.
- **Односторонние углы в сумме $180°$.** Угол, смежный с одним из них, равен $180°$ минус он, то есть другому углу; эти два угла накрест лежащие.

### Почему «две прямые, перпендикулярные третьей, параллельны»

Для $a \perp c$ и $b \perp c$ соответственные углы оба равны $90°$, и признак применим. Так столяры чертят параллельные линии: угольником, скользящим вдоль прямой рейки.`,
  ),

  "parallel-axiom": th(
    r`### Proof that a parallel exists

Let $M$ not lie on line $a$. Draw the perpendicular $MH$ to $a$, then through $M$ draw the line $b \perp MH$. Lines $a$ and $b$ are both perpendicular to $MH$, so they are parallel by the test. This used no parallel axiom: **existence** is a theorem; only **uniqueness** needs the axiom.

### Statements equivalent to the axiom

Each of these, added to the other axioms, can replace the parallel axiom and proves it back:

| Statement | Comment |
|---|---|
| The angles of every triangle add up to $180°$ | proved from the axiom in the next unit |
| A rectangle exists | a four-sided figure with four right angles |
| Two triangles can have equal angles but different sizes | similar triangles, grade 8 |
| Points at a fixed distance from a line form a line | "equidistant curve" is straight |

So whenever you use any of them, you are secretly using the fifth postulate.

### Geometries where the axiom fails

- **Lobachevsky geometry** (1829): through a point there are **infinitely many** lines not meeting a given line. The angle sum of a triangle is **less** than $180°$, and the bigger the triangle, the smaller the sum. There are no similar triangles of different sizes.
- **Spherical geometry**: "lines" are great circles, like the equator and the meridians. Any two of them meet, so there are **no** parallels. The triangle formed by the equator and two meridians $90°$ apart has three right angles: the angle sum is $270°$.

In a small region of a sphere (a school yard on the Earth) the geometry is almost Euclidean, which is why our flat geometry works so well in everyday life.`,
    r`### Ապացույց, որ զուգահեռ գոյություն ունի

Թող $M$-ը չլինի $a$ ուղղի վրա։ Տանենք $MH$ ուղղահայացը $a$-ին, ապա $M$-ով տանենք $b \perp MH$ ուղիղը։ $a$ և $b$ ուղիղները երկուսն էլ ուղղահայաց են $MH$-ին, ուստի ըստ հայտանիշի զուգահեռ են։ Սա զուգահեռության աքսիոմ չօգտագործեց. **գոյությունը** թեորեմ է, աքսիոմ պետք է միայն **միակության** համար։

### Աքսիոմին համարժեք պնդումներ

Սրանցից յուրաքանչյուրը, ավելացված մյուս աքսիոմներին, կարող է փոխարինել զուգահեռության աքսիոմին և ապացուցել այն.

| Պնդում | Մեկնաբանություն |
|---|---|
| Յուրաքանչյուր եռանկյան անկյունների գումարը $180°$ է | աքսիոմից կապացուցվի հաջորդ բաժնում |
| Ուղղանկյուն գոյություն ունի | չորս ուղիղ անկյունով քառանկյուն |
| Երկու եռանկյուն կարող են ունենալ հավասար անկյուններ, բայց տարբեր չափեր | նման եռանկյուններ, 8-րդ դասարան |
| Ուղղից հաստատուն հեռավորությամբ կետերն ուղիղ են կազմում | «հավասարահեռ կորը» ուղիղ է |

Ուստի, երբ օգտագործում եք դրանցից որևէ մեկը, թաքուն օգտագործում եք հինգերորդ պոստուլատը։

### Երկրաչափություններ, որտեղ աքսիոմը ճիշտ չէ

- **Լոբաչևսկու երկրաչափություն** (1829). կետով անցնում են տրված ուղղին չհատող **անվերջ շատ** ուղիղներ։ Եռանկյան անկյունների գումարը $180°$-ից **փոքր** է, և որքան մեծ է եռանկյունը, այնքան փոքր է գումարը։ Տարբեր չափերի նման եռանկյուններ չկան։
- **Գնդային երկրաչափություն**. «ուղիղները» մեծ շրջանագծերն են, ինչպես հասարակածն ու միջօրեականները։ Դրանցից ցանկացած երկուսը հատվում են, ուստի զուգահեռներ **չկան**։ Հասարակածից և իրարից $90°$ հեռու երկու միջօրեականից կազմված եռանկյունն ունի երեք ուղիղ անկյուն. անկյունների գումարը $270°$ է։

Գնդի փոքր տիրույթում (Երկրի վրա դպրոցի բակում) երկրաչափությունը գրեթե էվկլիդեսյան է, ահա թե ինչու է մեր հարթ երկրաչափությունն այդքան լավ աշխատում առօրյայում։`,
    r`### Доказательство существования параллельной

Пусть $M$ не лежит на прямой $a$. Проведём перпендикуляр $MH$ к $a$, затем через $M$ — прямую $b \perp MH$. Прямые $a$ и $b$ обе перпендикулярны $MH$, поэтому по признаку параллельны. Аксиома параллельных здесь не нужна: **существование** — теорема, аксиома нужна только для **единственности**.

### Утверждения, равносильные аксиоме

Каждое из них, добавленное к остальным аксиомам, может заменить аксиому параллельных и доказать её:

| Утверждение | Комментарий |
|---|---|
| Сумма углов любого треугольника равна $180°$ | выводится из аксиомы в следующей главе |
| Существует прямоугольник | четырёхугольник с четырьмя прямыми углами |
| Два треугольника могут иметь равные углы, но разные размеры | подобные треугольники, 8 класс |
| Точки на постоянном расстоянии от прямой образуют прямую | «эквидистанта» прямая |

Так что, пользуясь любым из них, вы тайно пользуетесь пятым постулатом.

### Геометрии, где аксиома неверна

- **Геометрия Лобачевского** (1829): через точку проходит **бесконечно много** прямых, не пересекающих данную. Сумма углов треугольника **меньше** $180°$, и чем больше треугольник, тем меньше сумма. Подобных треугольников разного размера нет.
- **Сферическая геометрия**: «прямые» — большие окружности, как экватор и меридианы. Любые две пересекаются, поэтому параллельных **нет**. Треугольник из экватора и двух меридианов под углом $90°$ имеет три прямых угла: сумма углов $270°$.

На маленьком участке сферы (школьный двор на Земле) геометрия почти евклидова — вот почему наша плоская геометрия так хорошо работает в жизни.`,
  ),

  "parallel-properties": th(
    r`### Theorem, converse, and why both need proof

A theorem "if $P$, then $Q$" has a **converse** "if $Q$, then $P$". They are different statements, and one can be true while the other is false:

| Statement | True? |
|---|---|
| If angles are vertical, they are equal | yes |
| If angles are equal, they are vertical | **no** |
| If alternate angles are equal, the lines are parallel | yes (test) |
| If the lines are parallel, alternate angles are equal | yes (property), but needs the axiom |

### The proof of the property, step by step

Let $a \parallel b$, transversal $c$ crosses them at $A$ and $B$. Suppose the alternate angles were different: $\angle 1 \ne \angle 2$.

1. At point $A$ build the ray making with $AB$ an angle equal to $\angle 2$, in the alternate position. It lies on a line $a_1$ through $A$.
2. For $a_1$ and $b$ the alternate angles are equal, so $a_1 \parallel b$ by the test.
3. $a_1 \ne a$, because they make different angles with $AB$.
4. Two different lines through $A$ are parallel to $b$. This contradicts the parallel axiom. ∎

Then corresponding and co-interior angles follow, as in the tests.

### The contrapositive is free

"If $P$, then $Q$" is always equivalent to "if not $Q$, then not $P$". So from the property: **if alternate angles are not equal, the lines meet.** This is exactly Euclid's fifth postulate: when co-interior angles add up to less than $180°$, the lines meet on that side.

### Common mistake

Using "alternate angles are equal" before you know the lines are parallel. Always check which direction you need: proving lines parallel uses a **test**; using parallel lines to find angles uses a **property**.`,
    r`### Թեորեմ, հակադարձ թեորեմ, և ինչու երկուսն էլ ապացույց են պահանջում

«Եթե $P$, ապա $Q$» թեորեմն ունի **հակադարձ**՝ «եթե $Q$, ապա $P$»։ Դրանք տարբեր պնդումներ են, և մեկը կարող է ճիշտ լինել, իսկ մյուսը՝ սխալ.

| Պնդում | Ճի՞շտ է |
|---|---|
| Եթե անկյունները հակադիր են, ապա հավասար են | այո |
| Եթե անկյունները հավասար են, ապա հակադիր են | **ոչ** |
| Եթե խաչադիր անկյունները հավասար են, ուղիղները զուգահեռ են | այո (հայտանիշ) |
| Եթե ուղիղները զուգահեռ են, խաչադիր անկյունները հավասար են | այո (հատկություն), բայց աքսիոմ է պետք |

### Հատկության ապացույցը՝ քայլ առ քայլ

Թող $a \parallel b$, և $c$ հատողը նրանց հատի $A$ և $B$ կետերում։ Ենթադրենք՝ խաչադիր անկյունները տարբեր են. $\angle 1 \ne \angle 2$։

1. $A$ կետում կառուցենք ճառագայթ, որը $AB$-ի հետ կազմում է $\angle 2$-ին հավասար անկյուն՝ խաչադիր դիրքում։ Այն ընկած է $A$-ով անցնող $a_1$ ուղղի վրա։
2. $a_1$-ի և $b$-ի համար խաչադիր անկյունները հավասար են, ուստի ըստ հայտանիշի $a_1 \parallel b$։
3. $a_1 \ne a$, քանի որ նրանք $AB$-ի հետ տարբեր անկյուններ են կազմում։
4. $A$-ով անցնում են $b$-ին զուգահեռ երկու տարբեր ուղիղներ։ Սա հակասում է զուգահեռության աքսիոմին։ ∎

Այնուհետև համապատասխան և միակողմանի անկյունների հատկությունները հետևում են այնպես, ինչպես հայտանիշներում։

### Հակադարձ-հակադիր պնդումն անվճար է

«Եթե $P$, ապա $Q$»-ն միշտ համարժեք է «եթե ոչ $Q$, ապա ոչ $P$»-ին։ Ուստի հատկությունից. **եթե խաչադիր անկյունները հավասար չեն, ուղիղները հատվում են**։ Սա հենց Էվկլիդեսի հինգերորդ պոստուլատն է. երբ միակողմանի անկյունների գումարը $180°$-ից փոքր է, ուղիղները հատվում են այդ կողմում։

### Տարածված սխալ

«Խաչադիր անկյունները հավասար են» օգտագործելը նախքան իմանալը, որ ուղիղները զուգահեռ են։ Միշտ ստուգեք, թե որ ուղղությունն է ձեզ պետք. ուղիղների զուգահեռությունն ապացուցելու համար օգտագործվում է **հայտանիշը**, զուգահեռ ուղիղներով անկյուններ գտնելու համար՝ **հատկությունը**։`,
    r`### Теорема, обратная теорема и почему обе нужно доказывать

У теоремы «если $P$, то $Q$» есть **обратная**: «если $Q$, то $P$». Это разные утверждения, и одно может быть верным, а другое нет:

| Утверждение | Верно? |
|---|---|
| Если углы вертикальные, то они равны | да |
| Если углы равны, то они вертикальные | **нет** |
| Если накрест лежащие углы равны, прямые параллельны | да (признак) |
| Если прямые параллельны, накрест лежащие углы равны | да (свойство), но нужна аксиома |

### Доказательство свойства по шагам

Пусть $a \parallel b$, секущая $c$ пересекает их в точках $A$ и $B$. Предположим, что накрест лежащие углы различны: $\angle 1 \ne \angle 2$.

1. В точке $A$ построим луч, образующий с $AB$ угол, равный $\angle 2$, в накрест лежащем положении. Он лежит на прямой $a_1$ через $A$.
2. Для $a_1$ и $b$ накрест лежащие углы равны, значит, $a_1 \parallel b$ по признаку.
3. $a_1 \ne a$, так как они образуют с $AB$ разные углы.
4. Через $A$ проходят две различные прямые, параллельные $b$. Это противоречит аксиоме параллельных. ∎

Свойства соответственных и односторонних углов следуют так же, как в признаках.

### Противоположное обратному — бесплатно

«Если $P$, то $Q$» всегда равносильно «если не $Q$, то не $P$». Поэтому из свойства: **если накрест лежащие углы не равны, прямые пересекаются**. Это и есть пятый постулат Евклида: если сумма односторонних углов меньше $180°$, прямые пересекаются с этой стороны.

### Частая ошибка

Пользоваться «накрест лежащие углы равны», ещё не зная, что прямые параллельны. Всегда проверяйте направление: чтобы доказать параллельность, нужен **признак**; чтобы по параллельным прямым найти углы, нужно **свойство**.`,
  ),

  "parallel-problems": th(
    r`### The zigzag when the point is outside

In the lesson, point $E$ was **between** the parallel lines and $\angle AEC = \alpha + \beta$. What if $E$ lies **outside**, beyond line $CD$?

Draw $EF$ through $E$ parallel to both lines. Now the angles at $E$ made with $EF$ are $\alpha$ (from line $AB$) and $\beta$ (from line $CD$), and both lie on the **same** side of $EF$. So
$$\angle AEC = \alpha - \beta \quad (\text{if } \alpha > \beta).$$
The same auxiliary line gives both answers. This is the main idea: the auxiliary parallel turns a "far" angle into a sum or difference of alternate angles.

### Many bends

If a broken line goes from line $AB$ to line $CD$ with several bends, all between the parallels, then
$$\text{(sum of angles bending one way)} = \text{(sum of angles bending the other way)}.$$
*Why:* draw a parallel through **each** bend. Each angle splits into two alternate parts, and each part appears once on each side of the equality.

In practice: list the angles opening to the left and those opening to the right, and set the two sums equal.

### Light and mirrors

Two parallel mirrors facing each other: a ray reflected by both comes back **parallel** to the incoming ray. The reason is the same alternate-angle argument. This is how periscopes work, and how road reflectors (with three perpendicular mirrors) send light back to the driver.

### Strategy checklist

When no idea comes, ask: where are the parallels? Which transversal joins them? Is there a point "between" them where an auxiliary parallel would help?`,
    r`### Բեկյալը, երբ կետը դրսում է

Դասում $E$ կետը զուգահեռ ուղիղների **միջև** էր, և $\angle AEC = \alpha + \beta$։ Իսկ եթե $E$-ն **դրսում** է՝ $CD$ ուղղից այն կողմ։

$E$-ով տանենք երկու ուղիղներին էլ զուգահեռ $EF$։ Այժմ $E$-ում $EF$-ի հետ կազմված անկյուններն են $\alpha$-ն ($AB$ ուղղից) և $\beta$-ն ($CD$ ուղղից), և երկուսն էլ $EF$-ի **նույն** կողմում են։ Ուստի
$$\angle AEC = \alpha - \beta \quad (\alpha > \beta)$$
Նույն օժանդակ ուղիղը տալիս է երկու պատասխանն էլ։ Գլխավոր գաղափարն այս է. օժանդակ զուգահեռը «հեռու» անկյունը վերածում է խաչադիր անկյունների գումարի կամ տարբերության։

### Շատ բեկումներ

Եթե բեկյալը $AB$ ուղղից գնում է $CD$ ուղիղ մի քանի բեկումով, որոնք բոլորը զուգահեռների միջև են, ապա մի կողմ բացվող անկյունների գումարը հավասար է մյուս կողմ բացվող անկյունների գումարին։

*Ինչու.* **յուրաքանչյուր** բեկման կետով տանենք զուգահեռ։ Յուրաքանչյուր անկյուն բաժանվում է երկու խաչադիր մասի, և յուրաքանչյուր մաս հայտնվում է հավասարության յուրաքանչյուր կողմում մեկ անգամ։

Գործնականում. թվարկեք ձախ բացվող և աջ բացվող անկյունները և դրանց գումարները հավասարեցրեք։

### Լույսը և հայելիները

Երկու զուգահեռ, իրար նայող հայելի. երկուսից անդրադարձած ճառագայթը վերադառնում է ընկնող ճառագայթին **զուգահեռ**։ Պատճառը նույն խաչադիր անկյունների դատողությունն է։ Այդպես են աշխատում պերիսկոպները։

### Ռազմավարության ցուցակ

Երբ գաղափար չկա, հարցրեք. որտե՞ղ են զուգահեռները, ո՞ր հատողն է նրանց միացնում, կա՞ արդյոք նրանց «միջև» կետ, որտեղ օժանդակ զուգահեռը կօգնի։`,
    r`### Ломаная, когда точка снаружи

В уроке точка $E$ была **между** параллельными прямыми, и $\angle AEC = \alpha + \beta$. А если $E$ лежит **снаружи**, за прямой $CD$?

Проведём через $E$ прямую $EF$, параллельную обеим прямым. Теперь углы при $E$ с $EF$ равны $\alpha$ (от прямой $AB$) и $\beta$ (от прямой $CD$), и оба лежат по **одну** сторону от $EF$. Поэтому
$$\angle AEC = \alpha - \beta \quad (\alpha > \beta).$$
Одна и та же вспомогательная прямая даёт оба ответа. Главная идея: вспомогательная параллельная превращает «далёкий» угол в сумму или разность накрест лежащих углов.

### Много изломов

Если ломаная идёт от прямой $AB$ к прямой $CD$ с несколькими изломами, лежащими между параллельными, то сумма углов, открытых в одну сторону, равна сумме углов, открытых в другую.

*Почему:* проведём параллельную через **каждый** излом. Каждый угол делится на две накрест лежащие части, и каждая часть входит в каждую сторону равенства по одному разу.

На практике: выпишите углы, открытые влево и вправо, и приравняйте суммы.

### Свет и зеркала

Два параллельных зеркала друг напротив друга: луч, отражённый от обоих, возвращается **параллельно** падающему. Причина — то же рассуждение с накрест лежащими углами. Так работает перископ.

### Список вопросов

Когда идей нет, спросите: где параллельные? Какая секущая их соединяет? Есть ли точка «между» ними, где поможет вспомогательная параллельная?`,
  ),
};
