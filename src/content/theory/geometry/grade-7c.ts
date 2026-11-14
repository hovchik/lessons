import { th } from "../kit";

const r = String.raw;

/** Geometry 7, unit 4: angle sum, sides and angles, right triangles, distance, constructions. */
export const geometry7c = {
  "angle-sum": th(
    r`### A second proof, Euclid's own

Extend side $AC$ beyond $C$ to a point $D$, and through $C$ draw ray $CE \parallel AB$ (on the same side as $B$).

- $\angle ECD = \angle A$ as **corresponding** angles ($AB \parallel CE$, transversal $AD$).
- $\angle BCE = \angle B$ as **alternate** angles ($AB \parallel CE$, transversal $BC$).

The three angles $\angle ACB$, $\angle BCE$, $\angle ECD$ fill the straight angle $ACD$:
$$\angle C + \angle B + \angle A = 180°.$$
The same figure proves the exterior angle theorem at the same time: $\angle BCD = \angle A + \angle B$.

### Polygons: why $(n - 2) \cdot 180°$

From one vertex of a convex $n$-gon draw all the diagonals. They cut it into $n - 2$ triangles, whose angles together make exactly the angles of the polygon. So the angle sum is $(n - 2) \cdot 180°$: $360°$ for a quadrilateral, $540°$ for a pentagon, $720°$ for a hexagon. This is studied in grade 8.

### The theorem depends on the parallel axiom

The proof used a parallel through $B$ and the property of alternate angles, which needs the axiom. On a sphere, where there are no parallels, a triangle's angles add up to **more** than $180°$; in Lobachevsky's geometry, to **less**. Carl Friedrich Gauss is said to have measured the triangle formed by three mountain tops (about 100 km across) to check whether space is flat. Within his instruments' accuracy, the sum was $180°$.

### Using the theorem to check work

If a problem gives angles of $95°$ and $90°$ in one triangle, something is wrong: they already exceed $180°$. Always check the angle sum at the end of a solution.`,
    r`### Երկրորդ ապացույց՝ Էվկլիդեսինը

$AC$ կողմը շարունակենք $C$-ից այն կողմ մինչև $D$ կետը, և $C$-ով տանենք $CE \parallel AB$ ճառագայթը ($B$-ի կողմում)։

- $\angle ECD = \angle A$՝ որպես **համապատասխան** անկյուններ ($AB \parallel CE$, $AD$ հատող)։
- $\angle BCE = \angle B$՝ որպես **խաչադիր** անկյուններ ($AB \parallel CE$, $BC$ հատող)։

$\angle ACB$, $\angle BCE$, $\angle ECD$ երեք անկյունները լրացնում են $ACD$ փռված անկյունը.
$$\angle C + \angle B + \angle A = 180°$$
Նույն գծագիրը միաժամանակ ապացուցում է արտաքին անկյան թեորեմը. $\angle BCD = \angle A + \angle B$։

### Բազմանկյուններ. ինչու $(n - 2) \cdot 180°$

Ուռուցիկ $n$-անկյան մի գագաթից տանենք բոլոր անկյունագծերը։ Նրանք այն բաժանում են $n - 2$ եռանկյան, որոնց անկյունները միասին կազմում են ճիշտ բազմանկյան անկյունները։ Ուստի անկյունների գումարը $(n - 2) \cdot 180°$ է. քառանկյան համար՝ $360°$, հնգանկյան՝ $540°$, վեցանկյան՝ $720°$։ Սա ուսումնասիրվում է 8-րդ դասարանում։

### Թեորեմը կախված է զուգահեռության աքսիոմից

Ապացույցում օգտագործվեց $B$-ով անցնող զուգահեռ և խաչադիր անկյունների հատկությունը, որի համար աքսիոմ է պետք։ Գնդի վրա, որտեղ զուգահեռներ չկան, եռանկյան անկյունների գումարը $180°$-ից **մեծ** է, Լոբաչևսկու երկրաչափության մեջ՝ **փոքր**։ Ասում են՝ Կարլ Ֆրիդրիխ Գաուսը չափել է երեք լեռնագագաթներից կազմված եռանկյունը (մոտ 100 կմ լայնությամբ)՝ ստուգելու, թե արդյոք տարածությունը հարթ է։ Նրա գործիքների ճշգրտությամբ գումարը $180°$ էր։

### Թեորեմով ստուգել լուծումը

Եթե խնդրում մեկ եռանկյան մեջ տրված են $95°$ և $90°$ անկյուններ, ինչ-որ բան սխալ է. դրանք արդեն գերազանցում են $180°$-ը։ Լուծման վերջում միշտ ստուգեք անկյունների գումարը։`,
    r`### Второе доказательство — евклидово

Продолжим сторону $AC$ за точку $C$ до точки $D$ и проведём через $C$ луч $CE \parallel AB$ (с той же стороны, что и $B$).

- $\angle ECD = \angle A$ как **соответственные** ($AB \parallel CE$, секущая $AD$).
- $\angle BCE = \angle B$ как **накрест лежащие** ($AB \parallel CE$, секущая $BC$).

Три угла $\angle ACB$, $\angle BCE$, $\angle ECD$ заполняют развёрнутый угол $ACD$:
$$\angle C + \angle B + \angle A = 180°.$$
Тот же чертёж сразу доказывает теорему о внешнем угле: $\angle BCD = \angle A + \angle B$.

### Многоугольники: почему $(n - 2) \cdot 180°$

Из одной вершины выпуклого $n$-угольника проведём все диагонали. Они разрежут его на $n - 2$ треугольника, углы которых вместе составляют ровно углы многоугольника. Значит, сумма углов равна $(n - 2) \cdot 180°$: $360°$ у четырёхугольника, $540°$ у пятиугольника, $720°$ у шестиугольника. Это изучают в 8 классе.

### Теорема зависит от аксиомы параллельных

В доказательстве использовалась параллельная через $B$ и свойство накрест лежащих углов, для которого нужна аксиома. На сфере, где параллельных нет, сумма углов треугольника **больше** $180°$, в геометрии Лобачевского — **меньше**. Говорят, Карл Фридрих Гаусс измерял треугольник из трёх горных вершин (около 100 км в поперечнике), чтобы проверить, плоское ли пространство. С точностью его приборов сумма оказалась $180°$.

### Проверка решения

Если в задаче в одном треугольнике даны углы $95°$ и $90°$, что-то не так: они уже больше $180°$. В конце решения всегда проверяйте сумму углов.`,
  ),

  "exterior-angle": th(
    r`### A proof that does not use parallels

The corollary "an exterior angle is greater than each non-adjacent interior angle" can be proved **without** the parallel axiom. Euclid did this (Book I, proposition 16) before he ever mentioned parallels.

Let the exterior angle be $\angle BCD$ (side $AC$ extended to $D$). We show $\angle BCD > \angle B$.

1. Let $M$ be the midpoint of $BC$. Draw $AM$ and extend it beyond $M$ to $E$ with $ME = AM$.
2. $\triangle ABM = \triangle ECM$ by SAS: $BM = CM$, $AM = EM$, and the vertical angles at $M$ are equal.
3. So $\angle MCE = \angle B$.
4. Ray $CE$ lies **inside** angle $BCD$, so $\angle BCD > \angle BCE = \angle B$. ∎

The same argument with the midpoint of $AC$ gives $\angle BCD > \angle A$.

### Why this matters

From this corollary Euclid proved the **existence** of parallels and the facts that a triangle has at most one right or obtuse angle, all without the fifth postulate. It shows how much of geometry is "neutral", true in every geometry, and what exactly needs the parallel axiom.

### Sum of exterior angles

Take one exterior angle at each vertex. Each one is $180°$ minus its interior angle, so the sum is
$$3 \cdot 180° - (\angle A + \angle B + \angle C) = 540° - 180° = 360°.$$
Walk around a triangle and turn at each corner: you have turned a full circle. The same is true for every convex polygon: the exterior angles always add up to $360°$, no matter how many sides.`,
    r`### Ապացույց՝ առանց զուգահեռների

«Արտաքին անկյունը մեծ է իրեն ոչ կից յուրաքանչյուր ներքին անկյունից» հետևանքը կարելի է ապացուցել **առանց** զուգահեռության աքսիոմի։ Էվկլիդեսն այդպես էլ արել է (I գիրք, 16-րդ դրույթ)՝ դեռ զուգահեռներ չհիշատակած։

Թող արտաքին անկյունը լինի $\angle BCD$-ն ($AC$ կողմը շարունակված է մինչև $D$)։ Ցույց տանք, որ $\angle BCD > \angle B$։

1. Թող $M$-ը լինի $BC$-ի միջնակետը։ Տանենք $AM$-ը և շարունակենք $M$-ից այն կողմ մինչև $E$ այնպես, որ $ME = AM$։
2. $\triangle ABM = \triangle ECM$՝ ըստ առաջին հայտանիշի. $BM = CM$, $AM = EM$, իսկ $M$-ում հակադիր անկյունները հավասար են։
3. Ուստի $\angle MCE = \angle B$։
4. $CE$ ճառագայթը $BCD$ անկյան **ներսում** է, ուստի $\angle BCD > \angle BCE = \angle B$։ ∎

Նույն դատողությունը $AC$-ի միջնակետով տալիս է $\angle BCD > \angle A$։

### Ինչու է սա կարևոր

Այս հետևանքից Էվկլիդեսն ապացուցեց զուգահեռների **գոյությունը** և այն, որ եռանկյունն ունի առավելագույնը մեկ ուղիղ կամ բութ անկյուն՝ առանց հինգերորդ պոստուլատի։ Սա ցույց է տալիս, թե երկրաչափության որքան մասն է «չեզոք», այսինքն՝ ճիշտ ցանկացած երկրաչափության մեջ, և թե կոնկրետ ինչի համար է պետք զուգահեռության աքսիոմը։

### Արտաքին անկյունների գումարը

Յուրաքանչյուր գագաթում վերցնենք մեկ արտաքին անկյուն։ Յուրաքանչյուրը հավասար է $180°$ հանած իր ներքին անկյունը, ուստի գումարը
$$3 \cdot 180° - (\angle A + \angle B + \angle C) = 540° - 180° = 360°$$
Քայլեք եռանկյան շուրջը և յուրաքանչյուր անկյունում թեքվեք. դուք լրիվ պտույտ եք կատարել։ Նույնը ճիշտ է յուրաքանչյուր ուռուցիկ բազմանկյան համար. արտաքին անկյունների գումարը միշտ $360°$ է՝ անկախ կողմերի թվից։`,
    r`### Доказательство без параллельных

Следствие «внешний угол больше каждого внутреннего, не смежного с ним» можно доказать **без** аксиомы параллельных. Так и сделал Евклид (книга I, предложение 16), ещё не упомянув параллельные.

Пусть внешний угол — $\angle BCD$ (сторона $AC$ продолжена до $D$). Покажем, что $\angle BCD > \angle B$.

1. Пусть $M$ — середина $BC$. Проведём $AM$ и продолжим за $M$ до точки $E$ так, что $ME = AM$.
2. $\triangle ABM = \triangle ECM$ по первому признаку: $BM = CM$, $AM = EM$, вертикальные углы при $M$ равны.
3. Значит, $\angle MCE = \angle B$.
4. Луч $CE$ лежит **внутри** угла $BCD$, поэтому $\angle BCD > \angle BCE = \angle B$. ∎

То же рассуждение с серединой $AC$ даёт $\angle BCD > \angle A$.

### Почему это важно

Из этого следствия Евклид вывел **существование** параллельных и то, что в треугольнике не больше одного прямого или тупого угла, — без пятого постулата. Это показывает, какая часть геометрии «абсолютна», то есть верна в любой геометрии, и для чего именно нужна аксиома параллельных.

### Сумма внешних углов

Возьмём по одному внешнему углу при каждой вершине. Каждый равен $180°$ минус его внутренний угол, поэтому сумма
$$3 \cdot 180° - (\angle A + \angle B + \angle C) = 540° - 180° = 360°.$$
Обойдите треугольник, поворачивая в каждой вершине: вы повернулись на полный оборот. То же верно для любого выпуклого многоугольника: сумма внешних углов всегда $360°$, сколько бы ни было сторон.`,
  ),

  "sides-angles-relation": th(
    r`### Proof of the converse

**Theorem.** If $\angle C > \angle B$ in $\triangle ABC$, then $AB > AC$.

*Proof.* There are only three possibilities: $AB < AC$, $AB = AC$ or $AB > AC$.

- If $AB = AC$, the triangle is isosceles and $\angle C = \angle B$. Not our case.
- If $AB < AC$, then by the direct theorem the angle opposite $AC$ is larger: $\angle B > \angle C$. Not our case either.

Only $AB > AC$ is left. ∎

This "rule out the other cases" method works whenever a direct theorem covers all the alternatives.

### Proof of the triangle inequality

We show $AB < AC + CB$.

1. Extend $AC$ beyond $C$ to a point $D$ with $CD = CB$. Then $AD = AC + CB$.
2. $\triangle BCD$ is isosceles, so $\angle CDB = \angle CBD$.
3. Ray $BC$ lies inside angle $ABD$, so $\angle ABD > \angle CBD = \angle ADB$.
4. In $\triangle ABD$ the larger angle $\angle ABD$ lies opposite the larger side: $AD > AB$.

So $AB < AC + CB$. ∎

### Consequences

- **A straight line is the shortest path.** Any broken line $A \to C \to B$ is longer than $AB$; a broken line with more pieces is longer still (apply the inequality piece by piece).
- **The difference bound.** From $b < a + c$ we get $b - a < c$. So every side is **greater** than the difference of the other two.
- **Degenerate case.** If $c = a + b$ exactly, the "triangle" is flat: the three points lie on one line.

### Common mistake

Checking only one inequality with a **short** side. For $2$, $3$, $10$: $2 < 3 + 10$ is true, but $10 < 2 + 3$ is false. Always test the **longest** side.`,
    r`### Հակադարձ թեորեմի ապացույցը

**Թեորեմ։** Եթե $\triangle ABC$-ում $\angle C > \angle B$, ապա $AB > AC$։

*Ապացույց։* Կա ընդամենը երեք հնարավորություն. $AB < AC$, $AB = AC$ կամ $AB > AC$։

- Եթե $AB = AC$, եռանկյունը հավասարասրուն է, և $\angle C = \angle B$։ Մեր դեպքը չէ։
- Եթե $AB < AC$, ապա ըստ ուղիղ թեորեմի՝ $AC$-ի դիմացի անկյունն ավելի մեծ է. $\angle B > \angle C$։ Սա էլ մեր դեպքը չէ։

Մնում է միայն $AB > AC$։ ∎

«Բացառել մյուս դեպքերը» այս մեթոդն աշխատում է, երբ ուղիղ թեորեմը ներառում է բոլոր այլընտրանքները։

### Եռանկյան անհավասարության ապացույցը

Ցույց տանք, որ $AB < AC + CB$։

1. $AC$-ն շարունակենք $C$-ից այն կողմ մինչև $D$ կետը այնպես, որ $CD = CB$։ Այդ դեպքում $AD = AC + CB$։
2. $\triangle BCD$-ն հավասարասրուն է, ուստի $\angle CDB = \angle CBD$։
3. $BC$ ճառագայթը $ABD$ անկյան ներսում է, ուստի $\angle ABD > \angle CBD = \angle ADB$։
4. $\triangle ABD$-ում մեծ $\angle ABD$ անկյան դիմաց մեծ կողմն է. $AD > AB$։

Ուստի $AB < AC + CB$։ ∎

### Հետևանքներ

- **Ուղիղն ամենակարճ ճանապարհն է։** Ցանկացած $A \to C \to B$ բեկյալ ավելի երկար է, քան $AB$-ն. ավելի շատ մասերով բեկյալն էլ ավելի երկար է (անհավասարությունը կիրառեք մաս առ մաս)։
- **Տարբերության սահմանը։** $b < a + c$-ից ստանում ենք $b - a < c$։ Ուստի յուրաքանչյուր կողմ **մեծ** է մյուս երկուսի տարբերությունից։
- **Այլասերված դեպք։** Եթե ճիշտ $c = a + b$, «եռանկյունը» հարթված է. երեք կետերը մեկ ուղղի վրա են։

### Տարածված սխալ

Ստուգել միայն մեկ անհավասարություն՝ **կարճ** կողմով։ $2$, $3$, $10$ դեպքում $2 < 3 + 10$-ը ճիշտ է, բայց $10 < 2 + 3$-ը սխալ է։ Միշտ ստուգեք **ամենամեծ** կողմը։`,
    r`### Доказательство обратной теоремы

**Теорема.** Если в $\triangle ABC$ $\angle C > \angle B$, то $AB > AC$.

*Доказательство.* Возможны только три случая: $AB < AC$, $AB = AC$ или $AB > AC$.

- Если $AB = AC$, треугольник равнобедренный и $\angle C = \angle B$. Не наш случай.
- Если $AB < AC$, то по прямой теореме угол против $AC$ больше: $\angle B > \angle C$. Тоже не наш случай.

Остаётся только $AB > AC$. ∎

Метод «исключить остальные случаи» работает всякий раз, когда прямая теорема охватывает все варианты.

### Доказательство неравенства треугольника

Покажем, что $AB < AC + CB$.

1. Продолжим $AC$ за точку $C$ до точки $D$ так, что $CD = CB$. Тогда $AD = AC + CB$.
2. $\triangle BCD$ равнобедренный, значит, $\angle CDB = \angle CBD$.
3. Луч $BC$ лежит внутри угла $ABD$, поэтому $\angle ABD > \angle CBD = \angle ADB$.
4. В $\triangle ABD$ против большего угла $\angle ABD$ лежит большая сторона: $AD > AB$.

Итак, $AB < AC + CB$. ∎

### Следствия

- **Прямая — кратчайший путь.** Любая ломаная $A \to C \to B$ длиннее $AB$; ломаная из большего числа звеньев ещё длиннее (применяйте неравенство звено за звеном).
- **Оценка разности.** Из $b < a + c$ получаем $b - a < c$. Значит, каждая сторона **больше** разности двух других.
- **Вырожденный случай.** Если ровно $c = a + b$, «треугольник» сплющен: три точки лежат на одной прямой.

### Частая ошибка

Проверять одно неравенство с **короткой** стороной. Для $2$, $3$, $10$: $2 < 3 + 10$ верно, но $10 < 2 + 3$ неверно. Всегда проверяйте **наибольшую** сторону.`,
  ),

  "right-triangle-properties": th(
    r`### Theorem: the median to the hypotenuse is half of it

In $\triangle ABC$ with $\angle C = 90°$, let $M$ be the midpoint of hypotenuse $AB$. Then $CM = \frac{AB}{2}$.

*Proof.* Inside the right angle draw ray $CM'$ with $\angle BCM' = \angle B$; let it meet $AB$ at $M'$.

1. In $\triangle BCM'$ the angles at $B$ and $C$ are equal, so it is isosceles: $M'B = M'C$.
2. $\angle ACM' = 90° - \angle B = \angle A$ (acute angles of a right triangle add up to $90°$).
3. So $\triangle ACM'$ is isosceles too: $M'A = M'C$.

Then $M'A = M'B$, so $M'$ is the midpoint $M$, and $CM = MA = MB = \frac{AB}{2}$. ∎

So the vertices of a right triangle lie on a circle with centre at the midpoint of the hypotenuse. This is the start of the theorem "an angle inscribed in a semicircle is a right angle".

### The converse of the $30°$ property, proved

Let $\angle C = 90°$ and $BC = \frac{1}{2} AB$. Draw the median $CM$. By the theorem above, $CM = MB = \frac{AB}{2} = BC$. So $\triangle BCM$ has three equal sides; it is equilateral, and $\angle B = 60°$. Then $\angle A = 90° - 60° = 30°$. ∎

### Why $30°$ is special

Two copies of a $30°$–$60°$–$90°$ triangle, put together along the longer leg, make an equilateral triangle. This is why such a triangle appears everywhere: in set squares, in the honeycomb, in the hexagonal nut. Later you will find that its longer leg is $\frac{\sqrt{3}}{2}$ of the hypotenuse.

### Common mistake

The "half the hypotenuse" rule is about the leg **opposite** the $30°$ angle. The leg next to the $30°$ angle is the longer one, not half.`,
    r`### Թեորեմ. ներքնաձիգին տարված միջնագիծը նրա կեսն է

$\angle C = 90°$ ունեցող $\triangle ABC$-ում թող $M$-ը լինի $AB$ ներքնաձիգի միջնակետը։ Այդ դեպքում $CM = \frac{AB}{2}$։

*Ապացույց։* Ուղիղ անկյան ներսում տանենք $CM'$ ճառագայթն այնպես, որ $\angle BCM' = \angle B$. թող այն $AB$-ն հատի $M'$ կետում։

1. $\triangle BCM'$-ում $B$ և $C$ գագաթների անկյունները հավասար են, ուստի այն հավասարասրուն է. $M'B = M'C$։
2. $\angle ACM' = 90° - \angle B = \angle A$ (ուղղանկյուն եռանկյան սուր անկյունների գումարը $90°$ է)։
3. Ուստի $\triangle ACM'$-ը նույնպես հավասարասրուն է. $M'A = M'C$։

Ուրեմն $M'A = M'B$, այսինքն՝ $M'$-ը $M$ միջնակետն է, և $CM = MA = MB = \frac{AB}{2}$։ ∎

Ուստի ուղղանկյուն եռանկյան գագաթները գտնվում են ներքնաձիգի միջնակետում կենտրոն ունեցող շրջանագծի վրա։ Սրանից է սկսվում «կիսաշրջանագծին ներգծած անկյունն ուղիղ է» թեորեմը։

### $30°$-ի հատկության հակադարձի ապացույցը

Թող $\angle C = 90°$ և $BC = \frac{1}{2} AB$։ Տանենք $CM$ միջնագիծը։ Վերևի թեորեմով $CM = MB = \frac{AB}{2} = BC$։ Ուստի $\triangle BCM$-ն ունի երեք հավասար կողմ. այն հավասարակողմ է, և $\angle B = 60°$։ Այդ դեպքում $\angle A = 90° - 60° = 30°$։ ∎

### Ինչու է $30°$-ը առանձնահատուկ

$30°$–$60°$–$90°$ եռանկյան երկու օրինակ, միացված մեծ էջով, կազմում են հավասարակողմ եռանկյուն։ Ահա թե ինչու է այդպիսի եռանկյունը հանդիպում ամենուր. անկյունակներում, մեղրախորսխում, վեցանկյուն մանեկում։ Ավելի ուշ կիմանաք, որ նրա մեծ էջը ներքնաձիգի $\frac{\sqrt{3}}{2}$ մասն է։

### Տարածված սխալ

«Ներքնաձիգի կեսը» կանոնը վերաբերում է $30°$ անկյան **դիմացի** էջին։ $30°$ անկյանը կից էջը մեծն է, ոչ թե կեսը։`,
    r`### Теорема: медиана к гипотенузе равна её половине

В $\triangle ABC$ с $\angle C = 90°$ пусть $M$ — середина гипотенузы $AB$. Тогда $CM = \frac{AB}{2}$.

*Доказательство.* Внутри прямого угла проведём луч $CM'$ так, что $\angle BCM' = \angle B$; пусть он пересекает $AB$ в точке $M'$.

1. В $\triangle BCM'$ углы при $B$ и $C$ равны, значит, он равнобедренный: $M'B = M'C$.
2. $\angle ACM' = 90° - \angle B = \angle A$ (острые углы прямоугольного треугольника в сумме $90°$).
3. Значит, $\triangle ACM'$ тоже равнобедренный: $M'A = M'C$.

Тогда $M'A = M'B$, то есть $M'$ — середина $M$, и $CM = MA = MB = \frac{AB}{2}$. ∎

Итак, вершины прямоугольного треугольника лежат на окружности с центром в середине гипотенузы. С этого начинается теорема «вписанный угол, опирающийся на диаметр, прямой».

### Доказательство обратного свойства угла $30°$

Пусть $\angle C = 90°$ и $BC = \frac{1}{2} AB$. Проведём медиану $CM$. По теореме выше $CM = MB = \frac{AB}{2} = BC$. Значит, у $\triangle BCM$ три равные стороны; он равносторонний, и $\angle B = 60°$. Тогда $\angle A = 90° - 60° = 30°$. ∎

### Почему $30°$ особенный

Два треугольника $30°$–$60°$–$90°$, приложенные большим катетом, дают равносторонний треугольник. Поэтому такой треугольник встречается везде: в угольниках, в пчелиных сотах, в шестигранной гайке. Позже вы узнаете, что его больший катет составляет $\frac{\sqrt{3}}{2}$ гипотенузы.

### Частая ошибка

Правило «половина гипотенузы» — о катете **против** угла $30°$. Катет, прилежащий к углу $30°$, больший, а не половина.`,
  ),

  "right-triangle-congruence": th(
    r`### Full proof of the hypotenuse–leg test

Given right triangles $ABC$ and $A_1B_1C_1$ ($\angle C = \angle C_1 = 90°$) with $AB = A_1B_1$ and $AC = A_1C_1$.

1. Place $\triangle A_1B_1C_1$ so that $A_1$ falls on $A$, $C_1$ on $C$, and $B_1$ lands on the **other** side of line $AC$, at a point $D$.
2. The angles at $C$ are $90°$ and $90°$; together they make $180°$, so $B$, $C$, $D$ lie on one line.
3. $AB = AD$ (equal hypotenuses), so $\triangle ABD$ is isosceles and $\angle B = \angle D$.
4. Now the right triangles $ABC$ and $ADC$ have equal hypotenuses and equal acute angles $\angle B = \angle D$, so they are congruent by "hypotenuse and acute angle". ∎

### Why this is not "SSA in disguise"

In general two sides and an angle not between them do not fix a triangle. Here the given angle is $90°$, the **largest** angle, and it lies opposite the **largest** side. The construction circle (centre $A$, radius $AB$) crosses the other side of the right angle only once on each side, so there is no second triangle.

### The bisector as a set of points

The two facts in the lesson combine into one statement: **the bisector of an angle is the set of all points inside the angle that are equidistant from its sides.** In the same way, the perpendicular bisector of a segment is the set of all points equidistant from its ends. Such a "set of points with a property" is called a **locus**. These two loci will give the centres of the inscribed and circumscribed circles in grade 8.

### Practical use

To find a point equidistant from three roads forming a triangle (a place for a fire station, say), draw two angle bisectors of the triangle: their meeting point works for all three roads.`,
    r`### Ներքնաձիգով և էջով հայտանիշի լրիվ ապացույցը

Տրված են $ABC$ և $A_1B_1C_1$ ուղղանկյուն եռանկյունները ($\angle C = \angle C_1 = 90°$), որոնցում $AB = A_1B_1$ և $AC = A_1C_1$։

1. Տեղադրենք $\triangle A_1B_1C_1$-ն այնպես, որ $A_1$-ն ընկնի $A$-ի վրա, $C_1$-ը՝ $C$-ի վրա, իսկ $B_1$-ը լինի $AC$ ուղղի **մյուս** կողմում՝ $D$ կետում։
2. $C$-ում անկյունները $90°$ և $90°$ են, միասին $180°$, ուստի $B$, $C$, $D$ կետերը մեկ ուղղի վրա են։
3. $AB = AD$ (հավասար ներքնաձիգներ), ուստի $\triangle ABD$-ն հավասարասրուն է, և $\angle B = \angle D$։
4. Այժմ $ABC$ և $ADC$ ուղղանկյուն եռանկյուններն ունեն հավասար ներքնաձիգներ և հավասար սուր անկյուններ՝ $\angle B = \angle D$, ուստի հավասար են ըստ «ներքնաձիգ և սուր անկյուն» հայտանիշի։ ∎

### Ինչու սա «քողարկված» սխալ հայտանիշ չէ

Ընդհանուր դեպքում երկու կողմը և ոչ նրանց կազմած անկյունը եռանկյունը չեն որոշում։ Այստեղ տրված անկյունը $90°$ է՝ **ամենամեծ** անկյունը, և այն **ամենամեծ** կողմի դիմաց է։ Կառուցման շրջանագիծը ($A$ կենտրոն, $AB$ շառավիղ) ուղիղ անկյան մյուս կողմը յուրաքանչյուր կողմում հատում է միայն մեկ անգամ, ուստի երկրորդ եռանկյուն չկա։

### Կիսորդը որպես կետերի բազմություն

Դասի երկու փաստը միանում են մեկ պնդման մեջ. **անկյան կիսորդը անկյան ներսում գտնվող և նրա կողմերից հավասարահեռ բոլոր կետերի բազմությունն է**։ Նույն ձևով հատվածի միջնուղղահայացը նրա ծայրերից հավասարահեռ բոլոր կետերի բազմությունն է։ «Որոշակի հատկությամբ կետերի բազմությունը» կոչվում է **երկրաչափական տեղ**։ Այս երկու երկրաչափական տեղերը 8-րդ դասարանում կտան ներգծյալ և արտագծյալ շրջանագծերի կենտրոնները։

### Գործնական կիրառություն

Եռանկյուն կազմող երեք ճանապարհներից հավասարահեռ կետ գտնելու համար (օրինակ՝ հրշեջ կայանի տեղ) տարեք եռանկյան երկու կիսորդ. նրանց հատման կետը հարմար է երեք ճանապարհների համար։`,
    r`### Полное доказательство признака по гипотенузе и катету

Даны прямоугольные треугольники $ABC$ и $A_1B_1C_1$ ($\angle C = \angle C_1 = 90°$), у которых $AB = A_1B_1$ и $AC = A_1C_1$.

1. Приложим $\triangle A_1B_1C_1$ так, чтобы $A_1$ совпала с $A$, $C_1$ — с $C$, а $B_1$ оказалась по **другую** сторону от прямой $AC$, в точке $D$.
2. Углы при $C$ равны $90°$ и $90°$, вместе $180°$, поэтому $B$, $C$, $D$ лежат на одной прямой.
3. $AB = AD$ (равные гипотенузы), значит, $\triangle ABD$ равнобедренный и $\angle B = \angle D$.
4. Теперь прямоугольные треугольники $ABC$ и $ADC$ имеют равные гипотенузы и равные острые углы $\angle B = \angle D$, значит, равны по признаку «гипотенуза и острый угол». ∎

### Почему это не замаскированный неверный признак

В общем случае две стороны и угол не между ними треугольник не задают. Здесь данный угол — $90°$, **наибольший**, и он лежит против **наибольшей** стороны. Окружность построения (центр $A$, радиус $AB$) пересекает другую сторону прямого угла с каждой стороны только один раз, поэтому второго треугольника нет.

### Биссектриса как множество точек

Два факта урока объединяются в одно утверждение: **биссектриса угла — множество всех точек внутри угла, равноудалённых от его сторон.** Так же серединный перпендикуляр к отрезку — множество всех точек, равноудалённых от его концов. Такое «множество точек с данным свойством» называют **геометрическим местом точек**. Эти два ГМТ в 8 классе дадут центры вписанной и описанной окружностей.

### Практическое применение

Чтобы найти точку, равноудалённую от трёх дорог, образующих треугольник (например, место для пожарной части), проведите две биссектрисы треугольника: точка их пересечения подходит для всех трёх дорог.`,
  ),

  "distance-point-line": th(
    r`### Proof: points of a parallel line are equidistant

Let $a \parallel b$, and let $A$ and $B$ be any two points of $a$. Drop perpendiculars $AH$ and $BK$ to $b$. We prove $AH = BK$.

1. $AH \perp b$ and $BK \perp b$, so $AH \parallel BK$.
2. Draw segment $AK$. With $a \parallel b$ and transversal $AK$: $\angle BAK = \angle HKA$ (alternate).
3. With $AH \parallel BK$ and transversal $AK$: $\angle HAK = \angle BKA$ (alternate).
4. $\triangle AHK = \triangle KBA$ by ASA (common side $AK$). So $AH = KB$. ∎

### The locus of points at a given distance

The points at distance $d$ from line $a$ form **two lines** parallel to $a$. And the points **equidistant from two parallel lines** form one line midway between them. These are two more loci, like the bisector and the perpendicular bisector.

### Why the perpendicular is the shortest

For any oblique $MK$, triangle $MHK$ has a right angle at $H$. The right angle is the largest angle of the triangle, and the larger side lies opposite the larger angle. So the hypotenuse $MK$ is longer than the leg $MH$. Moreover, **the farther** the foot $K$ is from $H$, the longer the oblique: with $HK_1 < HK_2$, the angle $MK_1K_2$ is obtuse (exterior to the right triangle $MHK_1$), so $MK_2 > MK_1$.

### Everyday meaning

- The height of a person is measured along the **perpendicular** to the floor.
- The distance between rails is checked at many points: if the rails are parallel, it is the same everywhere.
- A swimmer who wants to reach the opposite bank as quickly as possible (in still water) swims perpendicular to it.`,
    r`### Ապացույց. զուգահեռ ուղղի կետերը հավասարահեռ են

Թող $a \parallel b$, և $A$-ն ու $B$-ն լինեն $a$-ի կամայական երկու կետեր։ Իջեցնենք $AH$ և $BK$ ուղղահայացները $b$-ին։ Ապացուցենք, որ $AH = BK$։

1. $AH \perp b$ և $BK \perp b$, ուստի $AH \parallel BK$։
2. Տանենք $AK$ հատվածը։ $a \parallel b$ և $AK$ հատող. $\angle BAK = \angle HKA$ (խաչադիր)։
3. $AH \parallel BK$ և $AK$ հատող. $\angle HAK = \angle BKA$ (խաչադիր)։
4. $\triangle AHK = \triangle KBA$՝ ըստ երկրորդ հայտանիշի ($AK$-ն ընդհանուր կողմ է)։ Ուստի $AH = KB$։ ∎

### Տրված հեռավորությամբ կետերի երկրաչափական տեղը

$a$ ուղղից $d$ հեռավորությամբ կետերը կազմում են $a$-ին զուգահեռ **երկու ուղիղ**։ Իսկ **երկու զուգահեռ ուղիղներից հավասարահեռ** կետերը կազմում են մեկ ուղիղ՝ նրանց մեջտեղում։ Սրանք ևս երկու երկրաչափական տեղ են՝ կիսորդի և միջնուղղահայացի նման։

### Ինչու է ուղղահայացն ամենակարճը

Ցանկացած $MK$ թեքի համար $MHK$ եռանկյունն $H$-ում ուղիղ անկյուն ունի։ Ուղիղ անկյունը եռանկյան ամենամեծ անկյունն է, իսկ մեծ անկյան դիմաց մեծ կողմն է։ Ուստի $MK$ ներքնաձիգը երկար է $MH$ էջից։ Ավելին՝ **որքան հեռու** է $K$ հիմքը $H$-ից, այնքան երկար է թեքը. $HK_1 < HK_2$ դեպքում $MK_1K_2$ անկյունը բութ է (արտաքին $MHK_1$ ուղղանկյուն եռանկյան համար), ուստի $MK_2 > MK_1$։

### Առօրյա իմաստը

- Մարդու հասակը չափվում է հատակին **ուղղահայացով**։
- Ռելսերի միջև հեռավորությունը ստուգում են շատ կետերում. եթե ռելսերը զուգահեռ են, այն ամենուր նույնն է։
- Լողորդը, որ ուզում է հնարավորինս արագ հասնել դիմացի ափին (կանգնած ջրում), լողում է ափին ուղղահայաց։`,
    r`### Доказательство: точки параллельной прямой равноудалены

Пусть $a \parallel b$, и $A$, $B$ — любые две точки прямой $a$. Опустим перпендикуляры $AH$ и $BK$ на $b$. Докажем, что $AH = BK$.

1. $AH \perp b$ и $BK \perp b$, поэтому $AH \parallel BK$.
2. Проведём отрезок $AK$. При $a \parallel b$ и секущей $AK$: $\angle BAK = \angle HKA$ (накрест лежащие).
3. При $AH \parallel BK$ и секущей $AK$: $\angle HAK = \angle BKA$ (накрест лежащие).
4. $\triangle AHK = \triangle KBA$ по второму признаку (общая сторона $AK$). Значит, $AH = KB$. ∎

### ГМТ на данном расстоянии

Точки на расстоянии $d$ от прямой $a$ образуют **две прямые**, параллельные $a$. А точки, **равноудалённые от двух параллельных прямых**, образуют одну прямую посередине между ними. Это ещё два геометрических места точек, как биссектриса и серединный перпендикуляр.

### Почему перпендикуляр кратчайший

Для любой наклонной $MK$ в треугольнике $MHK$ угол при $H$ прямой. Прямой угол — наибольший угол треугольника, а против большего угла лежит большая сторона. Значит, гипотенуза $MK$ длиннее катета $MH$. Более того, **чем дальше** основание $K$ от $H$, тем длиннее наклонная: при $HK_1 < HK_2$ угол $MK_1K_2$ тупой (внешний для прямоугольного треугольника $MHK_1$), поэтому $MK_2 > MK_1$.

### В повседневной жизни

- Рост человека измеряют по **перпендикуляру** к полу.
- Расстояние между рельсами проверяют во многих точках: если рельсы параллельны, оно везде одинаково.
- Пловец, который хочет как можно быстрее добраться до другого берега (в стоячей воде), плывёт перпендикулярно берегу.`,
  ),

  "constructions-2": th(
    r`### The four stages of a construction problem

Serious construction problems are solved in four stages:

1. **Analysis.** Imagine the figure is already drawn. Find which of its parts can be built first from the data.
2. **Construction.** List the steps, using only the compass and straightedge operations.
3. **Proof.** Show that the figure built has all the required properties (usually by a congruence test).
4. **Investigation.** Decide when a solution exists and how many there are.

### Investigation: two sides and an angle not between them

Given angle $A$, side $AB = c$ and side $BC = a$ opposite the angle. Build angle $A$, mark $AB = c$ on one side, and draw a circle with centre $B$ and radius $a$. Let $h$ be the distance from $B$ to the other side of the angle.

| Case | Number of triangles |
|---|---|
| $a < h$ | 0: the circle does not reach the side |
| $a = h$ | 1: a right triangle, the circle just touches |
| $h < a < c$ | 2: the circle crosses the side twice |
| $a \ge c$ | 1: the second crossing is on the wrong side of $A$ |

This table explains exactly why "SSA" is not a congruence test, and why it **is** one when the angle lies opposite the larger side ($a \ge c$).

### A construction with analysis

*Build a triangle from side $a$, the angle $B$ next to it and the sum $b + c$ of the other two sides.*

**Analysis.** Extend $BA$ beyond $A$ to $D$ with $AD = AC$. Then $BD = c + b$, and $\triangle ADC$ is isosceles, so $A$ lies on the perpendicular bisector of $DC$.

**Construction.** Build $\angle B$, mark $BC = a$ and $BD = b + c$ on its sides. Draw $DC$ and its perpendicular bisector; it meets $BD$ at $A$.

**Proof.** $AD = AC$, so $AB + AC = AB + AD = BD = b + c$. ∎`,
    r`### Կառուցման խնդրի չորս փուլերը

Լուրջ կառուցման խնդիրները լուծվում են չորս փուլով.

1. **Վերլուծություն։** Պատկերացրեք, որ պատկերն արդեն գծված է։ Գտեք, թե նրա որ մասերը կարելի է կառուցել առաջինը՝ տվյալներից։
2. **Կառուցում։** Թվարկեք քայլերը՝ օգտագործելով միայն կարկինի և քանոնի գործողությունները։
3. **Ապացույց։** Ցույց տվեք, որ կառուցված պատկերն ունի բոլոր պահանջվող հատկությունները (սովորաբար՝ հավասարության հայտանիշով)։
4. **Հետազոտում։** Որոշեք, թե երբ է լուծումը գոյություն ունենում և քանի լուծում կա։

### Հետազոտում. երկու կողմ և ոչ նրանց կազմած անկյուն

Տրված են $A$ անկյունը, $AB = c$ կողմը և անկյան դիմացի $BC = a$ կողմը։ Կառուցենք $A$ անկյունը, մի կողմի վրա նշենք $AB = c$, և գծենք $B$ կենտրոնով, $a$ շառավղով շրջանագիծ։ Թող $h$-ը լինի $B$-ից անկյան մյուս կողմ եղած հեռավորությունը։

| Դեպք | Եռանկյունների թիվը |
|---|---|
| $a < h$ | 0. շրջանագիծը կողմին չի հասնում |
| $a = h$ | 1. ուղղանկյուն եռանկյուն, շրջանագիծը շոշափում է |
| $h < a < c$ | 2. շրջանագիծը կողմը հատում է երկու անգամ |
| $a \ge c$ | 1. երկրորդ հատումը $A$-ի սխալ կողմում է |

Այս աղյուսակը ճշգրիտ բացատրում է, թե ինչու «երկու կողմ և ոչ նրանց կազմած անկյուն» պայմանը հավասարության հայտանիշ չէ, և ինչու **է** հայտանիշ, երբ անկյունը մեծ կողմի դիմաց է ($a \ge c$)։

### Կառուցում՝ վերլուծությամբ

*Կառուցել եռանկյուն ըստ $a$ կողմի, նրան կից $B$ անկյան և մյուս երկու կողմերի $b + c$ գումարի։*

**Վերլուծություն։** $BA$-ն շարունակենք $A$-ից այն կողմ մինչև $D$՝ $AD = AC$ պայմանով։ Այդ դեպքում $BD = c + b$, իսկ $\triangle ADC$-ն հավասարասրուն է, ուստի $A$-ն $DC$-ի միջնուղղահայացի վրա է։

**Կառուցում։** Կառուցենք $\angle B$-ն, նրա կողմերի վրա նշենք $BC = a$ և $BD = b + c$։ Տանենք $DC$-ն և նրա միջնուղղահայացը. այն $BD$-ն հատում է $A$ կետում։

**Ապացույց։** $AD = AC$, ուստի $AB + AC = AB + AD = BD = b + c$։ ∎`,
    r`### Четыре этапа задачи на построение

Серьёзные задачи на построение решают в четыре этапа:

1. **Анализ.** Представьте, что фигура уже построена. Найдите, какие её части можно построить первыми по данным.
2. **Построение.** Перечислите шаги, используя только операции циркуля и линейки.
3. **Доказательство.** Покажите, что построенная фигура обладает всеми нужными свойствами (обычно по признаку равенства).
4. **Исследование.** Выясните, когда решение существует и сколько их.

### Исследование: две стороны и угол не между ними

Даны угол $A$, сторона $AB = c$ и сторона $BC = a$ против угла. Построим угол $A$, отложим на одной стороне $AB = c$ и проведём окружность с центром $B$ радиуса $a$. Пусть $h$ — расстояние от $B$ до другой стороны угла.

| Случай | Число треугольников |
|---|---|
| $a < h$ | 0: окружность не достаёт до стороны |
| $a = h$ | 1: прямоугольный треугольник, окружность касается |
| $h < a < c$ | 2: окружность пересекает сторону дважды |
| $a \ge c$ | 1: второе пересечение по другую сторону от $A$ |

Эта таблица точно объясняет, почему «две стороны и угол не между ними» — не признак равенства, и почему это **признак**, когда угол лежит против большей стороны ($a \ge c$).

### Построение с анализом

*Построить треугольник по стороне $a$, прилежащему углу $B$ и сумме $b + c$ двух других сторон.*

**Анализ.** Продолжим $BA$ за точку $A$ до точки $D$ так, что $AD = AC$. Тогда $BD = c + b$, а $\triangle ADC$ равнобедренный, значит, $A$ лежит на серединном перпендикуляре к $DC$.

**Построение.** Построим $\angle B$, отложим на его сторонах $BC = a$ и $BD = b + c$. Проведём $DC$ и серединный перпендикуляр к нему; он пересечёт $BD$ в точке $A$.

**Доказательство.** $AD = AC$, поэтому $AB + AC = AB + AD = BD = b + c$. ∎`,
  ),
};
