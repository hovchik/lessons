import { th } from "../kit";

const r = String.raw;

/** Geometry 8, unit 2: area and the Pythagorean theorem. */
export const geometry8b = {
  "area-concept": th(
    r`### Why $S = ab$ also for fractions

For whole numbers the formula just counts unit squares. What about a rectangle $\frac{2}{3}$ by $\frac{5}{7}$?

Cut the unit square into $3 \cdot 7 = 21$ equal small rectangles of size $\frac{1}{3} \times \frac{1}{7}$. They are congruent, so each has area $\frac{1}{21}$. Our rectangle is made of $2 \cdot 5 = 10$ of them, so its area is
$$\frac{10}{21} = \frac{2}{3} \cdot \frac{5}{7}.$$
The same argument works for any fractions. For sides like $\sqrt{2}$, squeeze: a rectangle $1{,}41 \times 3$ fits inside, a rectangle $1{,}42 \times 3$ covers it, and the area is trapped between $4{,}23$ and $4{,}26$. Taking more decimals squeezes it to exactly $3\sqrt{2}$.

### Why the area grows as $k^2$

Enlarge a figure $k$ times in every direction. Every unit square inside it becomes a square of side $k$, that is $k^2$ unit squares. So the area grows $k^2$ times: double the side of a square tile and you need four times as much glaze. This $k^2$ rule holds for **any** shape, not only squares.

### An ancient wrong formula

Egyptian temple records at Edfu computed the area of a four-sided field with sides $a, b, c, d$ (in order) as
$$\frac{a + c}{2} \cdot \frac{b + d}{2}.$$
It is exact for a rectangle but too large for every other quadrilateral. A rhombus of side $1$ squashed almost flat has area near $0$, yet the formula gives $1$. A good reason to prove formulas, not just trust them.

### Area is not the same as "the number of cells"

On squared paper, a slanted figure's cells are cut. Pick's theorem (for polygons with corners on grid points) gives the exact area: $S = I + \frac{B}{2} - 1$, where $I$ is the number of grid points inside and $B$ the number on the boundary.`,
    r`### Ինչու է $S = ab$-ն ճիշտ նաև կոտորակների համար

Ամբողջ թվերի դեպքում բանաձևը պարզապես հաշվում է միավոր քառակուսիները։ Իսկ $\frac{2}{3}$-ը $\frac{5}{7}$-ի վրա ուղղանկյան դեպքում։

Միավոր քառակուսին բաժանենք $3 \cdot 7 = 21$ հավասար փոքր ուղղանկյունների՝ $\frac{1}{3} \times \frac{1}{7}$ չափսով։ Նրանք հավասար են, ուստի յուրաքանչյուրի մակերեսը $\frac{1}{21}$ է։ Մեր ուղղանկյունը կազմված է դրանցից $2 \cdot 5 = 10$-ից, ուստի նրա մակերեսը
$$\frac{10}{21} = \frac{2}{3} \cdot \frac{5}{7}$$
Նույն դատողությունն աշխատում է ցանկացած կոտորակի համար։ $\sqrt{2}$-ի նման կողմերի դեպքում «սեղմում» ենք. $1{,}41 \times 3$ ուղղանկյունը տեղավորվում է ներսում, $1{,}42 \times 3$-ը ծածկում է այն, և մակերեսը փակված է $4{,}23$-ի և $4{,}26$-ի միջև։ Ավելի շատ տասնորդական նիշեր վերցնելով՝ այն սեղմվում է ճիշտ $3\sqrt{2}$-ի։

### Ինչու է մակերեսն աճում $k^2$ անգամ

Պատկերը մեծացնենք $k$ անգամ բոլոր ուղղություններով։ Նրա ներսի յուրաքանչյուր միավոր քառակուսի դառնում է $k$ կողմով քառակուսի, այսինքն՝ $k^2$ միավոր քառակուսի։ Ուստի մակերեսն աճում է $k^2$ անգամ. քառակուսի սալիկի կողմը կրկնապատկեք, և ջնարակ կպահանջվի չորս անգամ ավելի։ Այս $k^2$ կանոնը ճիշտ է **ցանկացած** ձևի համար, ոչ միայն քառակուսիների։

### Հին սխալ բանաձև

Էդֆուի եգիպտական տաճարի արձանագրությունները $a, b, c, d$ (հերթականությամբ) կողմերով քառանկյուն դաշտի մակերեսը հաշվում էին այսպես.
$$\frac{a + c}{2} \cdot \frac{b + d}{2}$$
Այն ճշգրիտ է ուղղանկյան համար, բայց մյուս բոլոր քառանկյունների համար չափազանց մեծ է։ Գրեթե հարթված $1$ կողմով շեղանկյան մակերեսը մոտ է $0$-ի, իսկ բանաձևը տալիս է $1$։ Լավ պատճառ է բանաձևերն ապացուցելու, ոչ թե պարզապես վստահելու համար։

### Մակերեսը նույնը չէ, ինչ «վանդակների թիվը»

Վանդակավոր թղթի վրա թեք պատկերի վանդակները կտրված են։ Պիկի թեորեմը (ցանցի հանգույցներում գագաթներ ունեցող բազմանկյունների համար) տալիս է ճշգրիտ մակերեսը. $S = I + \frac{B}{2} - 1$, որտեղ $I$-ն ներսի հանգույցների թիվն է, իսկ $B$-ն՝ եզրագծի վրա գտնվողներինը։`,
    r`### Почему $S = ab$ верно и для дробей

Для целых чисел формула просто считает единичные квадраты. А для прямоугольника $\frac{2}{3}$ на $\frac{5}{7}$?

Разрежем единичный квадрат на $3 \cdot 7 = 21$ равный маленький прямоугольник размером $\frac{1}{3} \times \frac{1}{7}$. Они равны, значит, площадь каждого $\frac{1}{21}$. Наш прямоугольник состоит из $2 \cdot 5 = 10$ таких, поэтому его площадь
$$\frac{10}{21} = \frac{2}{3} \cdot \frac{5}{7}.$$
То же рассуждение годится для любых дробей. Для сторон вроде $\sqrt{2}$ «зажимаем»: прямоугольник $1{,}41 \times 3$ помещается внутри, прямоугольник $1{,}42 \times 3$ накрывает, и площадь зажата между $4{,}23$ и $4{,}26$. Беря больше знаков, сжимаем её ровно к $3\sqrt{2}$.

### Почему площадь растёт в $k^2$ раз

Увеличим фигуру в $k$ раз во всех направлениях. Каждый единичный квадрат внутри неё станет квадратом со стороной $k$, то есть $k^2$ единичных квадратов. Значит, площадь растёт в $k^2$ раз: удвойте сторону квадратной плитки, и глазури понадобится вчетверо больше. Правило $k^2$ верно для **любой** формы, не только для квадратов.

### Древняя неверная формула

В надписях египетского храма в Эдфу площадь четырёхугольного поля со сторонами $a, b, c, d$ (по порядку) вычисляли как
$$\frac{a + c}{2} \cdot \frac{b + d}{2}.$$
Для прямоугольника это точно, но для любого другого четырёхугольника слишком много. У ромба со стороной $1$, сплющенного почти в отрезок, площадь близка к $0$, а формула даёт $1$. Хороший повод доказывать формулы, а не просто верить им.

### Площадь — не то же, что «число клеток»

На клетчатой бумаге клетки наклонной фигуры разрезаны. Формула Пика (для многоугольников с вершинами в узлах сетки) даёт точную площадь: $S = I + \frac{B}{2} - 1$, где $I$ — число узлов внутри, $B$ — на границе.`,
  ),

  "area-parallelogram-triangle": th(
    r`### A proof that always works

The "cut and move" argument fails when the parallelogram leans so much that the foot of the height falls **outside** the base. Here is a proof for every case.

Let $ABCD$ have base $AD = a$, and drop perpendiculars $BH$ and $CK$ to line $AD$, so $HBCK$ is a rectangle $a$ by $h$. Look at the figure $ABCK$ (a trapezium).

- Cutting off $\triangle DCK$ from it leaves the parallelogram $ABCD$.
- Cutting off $\triangle ABH$ from it leaves the rectangle $HBCK$.

The right triangles $ABH$ and $DCK$ are congruent (hypotenuses $AB = DC$, legs $BH = CK$). Equal pieces removed from the same figure leave equal areas, so
$$S_{ABCD} = S_{HBCK} = a h.$$

### The most useful consequence

**Triangles with the same height have areas in the ratio of their bases.** If point $D$ lies on side $AC$ of $\triangle ABC$, then
$$\frac{S_{ABD}}{S_{CBD}} = \frac{AD}{DC},$$
because both triangles have the same height from $B$. This simple fact proves a lot. For example, it gives the **bisector theorem**: if $BD$ bisects $\angle B$, then $D$ is equally far from $BA$ and $BC$, so the same areas computed with bases $AB$ and $BC$ give
$$\frac{AD}{DC} = \frac{AB}{BC}.$$
The bisector divides the opposite side in the ratio of the adjacent sides.

### Why the two heights of a parallelogram are linked

$S = a_1 h_1 = a_2 h_2$, so $\frac{h_1}{h_2} = \frac{a_2}{a_1}$: the height to the **longer** side is the **shorter** one. A typical mistake is to multiply a side by the height drawn to the other side.

### Shearing

Slide the top side of a parallelogram along its line: the base and height stay, so the area stays. A deck of cards pushed sideways keeps its volume for the same reason. This idea, keeping area while changing shape, goes back to Euclid and is used in many proofs of Pythagoras' theorem.`,
    r`### Ապացույց, որը միշտ աշխատում է

«Կտրել և տեղափոխել» դատողությունը չի աշխատում, երբ զուգահեռագիծն այնքան է թեքված, որ բարձրության հիմքն ընկնում է հիմքից **դուրս**։ Ահա ապացույց բոլոր դեպքերի համար։

Թող $ABCD$-ի հիմքը լինի $AD = a$, և $AD$ ուղղին իջեցնենք $BH$ և $CK$ ուղղահայացները, այնպես որ $HBCK$-ն $a$-ի վրա $h$ ուղղանկյուն է։ Դիտարկենք $ABCK$ պատկերը (սեղան)։

- Դրանից $\triangle DCK$-ն կտրելիս մնում է $ABCD$ զուգահեռագիծը։
- Դրանից $\triangle ABH$-ն կտրելիս մնում է $HBCK$ ուղղանկյունը։

$ABH$ և $DCK$ ուղղանկյուն եռանկյունները հավասար են (ներքնաձիգներ՝ $AB = DC$, էջեր՝ $BH = CK$)։ Նույն պատկերից հավասար մասեր հանելիս մնում են հավասար մակերեսներ, ուստի
$$S_{ABCD} = S_{HBCK} = a h$$

### Ամենաօգտակար հետևանքը

**Նույն բարձրությունն ունեցող եռանկյունների մակերեսները հարաբերում են ինչպես նրանց հիմքերը։** Եթե $D$ կետը $\triangle ABC$-ի $AC$ կողմի վրա է, ապա
$$\frac{S_{ABD}}{S_{CBD}} = \frac{AD}{DC},$$
քանի որ երկու եռանկյուններն էլ ունեն $B$-ից տարված նույն բարձրությունը։ Այս պարզ փաստը շատ բան է ապացուցում։ Օրինակ՝ այն տալիս է **կիսորդի թեորեմը**. եթե $BD$-ն կիսում է $\angle B$-ն, ապա $D$-ն $BA$-ից և $BC$-ից հավասարահեռ է, ուստի նույն մակերեսները՝ հաշված $AB$ և $BC$ հիմքերով, տալիս են
$$\frac{AD}{DC} = \frac{AB}{BC}$$
Կիսորդը դիմացի կողմը բաժանում է առընթեր կողմերի հարաբերությամբ։

### Ինչու են զուգահեռագծի երկու բարձրությունները կապված

$S = a_1 h_1 = a_2 h_2$, ուստի $\frac{h_1}{h_2} = \frac{a_2}{a_1}$. **մեծ** կողմին տարված բարձրությունը **փոքրն** է։ Տիպիկ սխալ է կողմը բազմապատկել մյուս կողմին տարված բարձրությամբ։

### Սահք

Զուգահեռագծի վերին կողմը սահեցրեք իր ուղղի երկայնքով. հիմքն ու բարձրությունը մնում են, ուստի մակերեսը մնում է։ Կողքից հրված խաղաթղթերի կապուկը նույն պատճառով պահպանում է իր ծավալը։ Այս գաղափարը՝ ձևը փոխել, մակերեսը պահպանել, գալիս է Էվկլիդեսից և օգտագործվում է Պյութագորասի թեորեմի շատ ապացույցներում։`,
    r`### Доказательство, которое работает всегда

Рассуждение «отрезать и перенести» не работает, когда параллелограмм наклонён так сильно, что основание высоты падает **вне** основания. Вот доказательство для всех случаев.

Пусть у $ABCD$ основание $AD = a$; опустим перпендикуляры $BH$ и $CK$ на прямую $AD$, так что $HBCK$ — прямоугольник $a$ на $h$. Рассмотрим фигуру $ABCK$ (трапецию).

- Отрезав от неё $\triangle DCK$, получим параллелограмм $ABCD$.
- Отрезав от неё $\triangle ABH$, получим прямоугольник $HBCK$.

Прямоугольные треугольники $ABH$ и $DCK$ равны (гипотенузы $AB = DC$, катеты $BH = CK$). Отняв от одной фигуры равные части, получаем равные площади, поэтому
$$S_{ABCD} = S_{HBCK} = a h.$$

### Самое полезное следствие

**Площади треугольников с общей высотой относятся как их основания.** Если точка $D$ лежит на стороне $AC$ треугольника $ABC$, то
$$\frac{S_{ABD}}{S_{CBD}} = \frac{AD}{DC},$$
так как у обоих треугольников одна высота из $B$. Этот простой факт доказывает многое. Например, он даёт **свойство биссектрисы**: если $BD$ — биссектриса угла $B$, то $D$ равноудалена от $BA$ и $BC$, и те же площади, вычисленные через основания $AB$ и $BC$, дают
$$\frac{AD}{DC} = \frac{AB}{BC}.$$
Биссектриса делит противоположную сторону в отношении прилежащих сторон.

### Почему две высоты параллелограмма связаны

$S = a_1 h_1 = a_2 h_2$, значит, $\frac{h_1}{h_2} = \frac{a_2}{a_1}$: высота к **большей** стороне — **меньшая**. Типичная ошибка — умножить сторону на высоту, проведённую к другой стороне.

### Сдвиг

Сдвиньте верхнюю сторону параллелограмма вдоль её прямой: основание и высота сохраняются, значит, сохраняется и площадь. Колода карт, сдвинутая вбок, по той же причине сохраняет объём. Эта идея — менять форму, сохраняя площадь, — восходит к Евклиду и используется во многих доказательствах теоремы Пифагора.`,
  ),

  "area-trapezium": th(
    r`### A second proof: two trapeziums make a parallelogram

Take two copies of the trapezium and turn one upside down. Put them side by side along a leg. The bases now line up: the top is $b + a$ and the bottom is $a + b$, and the figure is a parallelogram with base $a + b$ and height $h$. So
$$2S = (a + b)h, \qquad S = \frac{a + b}{2} h.$$

### The "butterfly" in a trapezium

The diagonals of trapezium $ABCD$ ($BC \parallel AD$) meet at $O$ and cut it into four triangles. The two triangles at the legs, $\triangle AOB$ and $\triangle DOC$, always have **equal areas**.

*Proof.* $\triangle ABD$ and $\triangle ACD$ have the same base $AD$ and the same height (the distance between the bases), so their areas are equal. Both contain $\triangle AOD$. Removing it leaves $S_{AOB} = S_{DOC}$. ∎

The triangles at the bases are similar (with ratio $\frac{BC}{AD}$), and one can show that $S_{AOB}^2 = S_{BOC} \cdot S_{AOD}$, a beautiful relation used in olympiad problems.

### Every area formula is a trapezium formula

| Put into $S = \frac{a + b}{2}h$ | Result |
|---|---|
| $a = b$ (parallelogram) | $S = ah$ |
| $b = 0$ (triangle) | $S = \frac{1}{2}ah$ |
| $a = b$, height a side (rectangle) | $S = ab$ |

This is a useful check: a new formula must agree with the old ones in the special cases.

### Surveyors' trapeziums

To find the area of a field with one curved edge, surveyors cut it by parallel lines into narrow strips, treat each strip as a trapezium and add the areas. With strips of width $h$ and lengths $y_0, y_1, \ldots, y_n$ along the cuts, the total is
$$h\left(\frac{y_0 + y_n}{2} + y_1 + \ldots + y_{n-1}\right),$$
the **trapezium rule**. Computers still use it to calculate areas under curves.`,
    r`### Երկրորդ ապացույց. երկու սեղանը կազմում են զուգահեռագիծ

Վերցնենք սեղանի երկու օրինակ և մեկը շրջենք գլխիվայր։ Դրանք դնենք կողք կողքի՝ սրունքով։ Հիմքերն այժմ շարվում են մեկ գծով. վերևում $b + a$, ներքևում $a + b$, և պատկերը զուգահեռագիծ է՝ $a + b$ հիմքով և $h$ բարձրությամբ։ Ուստի
$$2S = (a + b)h, \qquad S = \frac{a + b}{2} h$$

### «Թիթեռը» սեղանում

$ABCD$ սեղանի ($BC \parallel AD$) անկյունագծերը հատվում են $O$ կետում և այն բաժանում չորս եռանկյան։ Սրունքների մոտի երկու եռանկյունները՝ $\triangle AOB$-ն և $\triangle DOC$-ն, միշտ **հավասարամեծ** են։

*Ապացույց։* $\triangle ABD$-ն և $\triangle ACD$-ն ունեն նույն $AD$ հիմքը և նույն բարձրությունը (հիմքերի հեռավորությունը), ուստի նրանց մակերեսները հավասար են։ Երկուսն էլ պարունակում են $\triangle AOD$-ն։ Այն հանելով՝ մնում է $S_{AOB} = S_{DOC}$։ ∎

Հիմքերի մոտի եռանկյունները նման են ($\frac{BC}{AD}$ գործակցով), և կարելի է ցույց տալ, որ $S_{AOB}^2 = S_{BOC} \cdot S_{AOD}$. գեղեցիկ առնչություն է, որն օգտագործվում է օլիմպիադային խնդիրներում։

### Մակերեսի յուրաքանչյուր բանաձև սեղանի բանաձև է

| Տեղադրենք $S = \frac{a + b}{2}h$-ում | Արդյունք |
|---|---|
| $a = b$ (զուգահեռագիծ) | $S = ah$ |
| $b = 0$ (եռանկյուն) | $S = \frac{1}{2}ah$ |
| $a = b$, բարձրությունը կողմ է (ուղղանկյուն) | $S = ab$ |

Սա օգտակար ստուգում է. նոր բանաձևը մասնավոր դեպքերում պետք է համընկնի հիններին։

### Հողաչափերի սեղանները

Մի կողմից կոր եզր ունեցող դաշտի մակերեսը գտնելու համար հողաչափերն այն զուգահեռ ուղիղներով բաժանում են նեղ շերտերի, յուրաքանչյուր շերտը համարում են սեղան և գումարում մակերեսները։ $h$ լայնությամբ շերտերի և կտրվածքների երկայնքով $y_0, y_1, \ldots, y_n$ երկարությունների դեպքում ընդհանուր մակերեսը
$$h\left(\frac{y_0 + y_n}{2} + y_1 + \ldots + y_{n-1}\right)$$
է. **սեղանների կանոնը**։ Համակարգիչներն այսօր էլ դրանով են հաշվում կորերի տակ մակերեսները։`,
    r`### Второе доказательство: две трапеции дают параллелограмм

Возьмём две копии трапеции и одну перевернём. Приложим их боковыми сторонами. Основания выстроятся в линию: сверху $b + a$, снизу $a + b$, и получится параллелограмм с основанием $a + b$ и высотой $h$. Поэтому
$$2S = (a + b)h, \qquad S = \frac{a + b}{2} h.$$

### «Бабочка» в трапеции

Диагонали трапеции $ABCD$ ($BC \parallel AD$) пересекаются в точке $O$ и делят её на четыре треугольника. Два треугольника у боковых сторон, $\triangle AOB$ и $\triangle DOC$, всегда **равновелики**.

*Доказательство.* У $\triangle ABD$ и $\triangle ACD$ общее основание $AD$ и одинаковая высота (расстояние между основаниями), поэтому их площади равны. Оба содержат $\triangle AOD$. Отняв его, получаем $S_{AOB} = S_{DOC}$. ∎

Треугольники у оснований подобны (с коэффициентом $\frac{BC}{AD}$), и можно показать, что $S_{AOB}^2 = S_{BOC} \cdot S_{AOD}$ — красивое соотношение из олимпиадных задач.

### Каждая формула площади — формула трапеции

| Подставим в $S = \frac{a + b}{2}h$ | Результат |
|---|---|
| $a = b$ (параллелограмм) | $S = ah$ |
| $b = 0$ (треугольник) | $S = \frac{1}{2}ah$ |
| $a = b$, высота — сторона (прямоугольник) | $S = ab$ |

Это полезная проверка: новая формула в частных случаях должна совпадать со старыми.

### Трапеции землемеров

Чтобы найти площадь поля с одним кривым краем, землемеры режут его параллельными прямыми на узкие полосы, считают каждую полосу трапецией и складывают площади. При ширине полос $h$ и длинах разрезов $y_0, y_1, \ldots, y_n$ общая площадь
$$h\left(\frac{y_0 + y_n}{2} + y_1 + \ldots + y_{n-1}\right),$$
это **формула трапеций**. Компьютеры до сих пор считают по ней площади под кривыми.`,
  ),

  pythagoras: th(
    r`### A president's proof

In 1876 James Garfield, later President of the United States, found this proof. Put two copies of the right triangle (legs $a$, $b$, hypotenuse $c$) so that they form, together with a third triangle, a **trapezium** with parallel sides $a$ and $b$ and height $a + b$. The third triangle has two sides $c$ and a right angle between them (the two acute angles beside it add up to $90°$).

Count the trapezium's area in two ways:
$$\frac{a + b}{2}(a + b) = 2 \cdot \frac{ab}{2} + \frac{c^2}{2}.$$
Multiply by $2$: $a^2 + 2ab + b^2 = 2ab + c^2$, so $a^2 + b^2 = c^2$. ∎ It is exactly half of the square proof from the lesson.

### A proof by similarity (preview of unit 3)

Drop the altitude $CH$ to the hypotenuse. In unit 3 we show $AC^2 = AH \cdot AB$ and $BC^2 = HB \cdot AB$. Adding,
$$AC^2 + BC^2 = AB(AH + HB) = AB^2.$$
This proof uses no area at all, only the shape of triangles.

### A long history

- A Babylonian clay tablet (Plimpton 322, about 1800 BC) lists triples like $(119, 120, 169)$: the rule was known over a thousand years before Pythagoras.
- The Chinese book *Zhoubi Suanjing* shows a square picture proof for the $3$–$4$–$5$ triangle.
- Pythagoras (6th century BC) or his school is credited with the first general proof.
- In 1927 Elisha Loomis collected more than 300 different proofs in one book.

### Common mistakes

- Using the theorem in a triangle that is **not** right. In a $5$–$6$–$7$ triangle, $5^2 + 6^2 \ne 7^2$.
- Adding the sides instead of the squares: $c \ne a + b$. By the triangle inequality $c < a + b$ always.
- Forgetting which side is the hypotenuse: it is opposite the right angle and the longest.`,
    r`### Նախագահի ապացույցը

1876 թվականին Ջեյմս Գարֆիլդը, հետագայում ԱՄՆ նախագահ, գտավ այս ապացույցը։ Ուղղանկյուն եռանկյան երկու օրինակ ($a$, $b$ էջեր, $c$ ներքնաձիգ) դնենք այնպես, որ երրորդ եռանկյան հետ կազմեն **սեղան**՝ $a$ և $b$ զուգահեռ կողմերով և $a + b$ բարձրությամբ։ Երրորդ եռանկյունն ունի երկու $c$ կողմ և նրանց միջև ուղիղ անկյուն (նրա կողքի երկու սուր անկյունների գումարը $90°$ է)։

Սեղանի մակերեսը հաշվենք երկու եղանակով.
$$\frac{a + b}{2}(a + b) = 2 \cdot \frac{ab}{2} + \frac{c^2}{2}$$
Բազմապատկենք $2$-ով. $a^2 + 2ab + b^2 = 2ab + c^2$, ուստի $a^2 + b^2 = c^2$։ ∎ Սա դասի քառակուսիով ապացույցի ճիշտ կեսն է։

### Ապացույց նմանությամբ (3-րդ բաժնի նախադիտում)

Ներքնաձիգին իջեցնենք $CH$ բարձրությունը։ 3-րդ բաժնում ցույց կտանք, որ $AC^2 = AH \cdot AB$ և $BC^2 = HB \cdot AB$։ Գումարելով՝
$$AC^2 + BC^2 = AB(AH + HB) = AB^2$$
Այս ապացույցն ընդհանրապես մակերես չի օգտագործում, միայն եռանկյունների ձևը։

### Երկար պատմություն

- Բաբելոնյան կավե սալիկը (Plimpton 322, մոտ մ.թ.ա. 1800) թվարկում է $(119, 120, 169)$-ի նման եռյակներ. կանոնը հայտնի էր Պյութագորասից հազար տարի առաջ։
- Չինական *Չժոուբի սուանցզին* գիրքը ցույց է տալիս $3$–$4$–$5$ եռանկյան քառակուսի նկարով ապացույց։
- Առաջին ընդհանուր ապացույցը վերագրվում է Պյութագորասին (մ.թ.ա. VI դար) կամ նրա դպրոցին։
- 1927 թվականին Էլիշա Լումիսը մեկ գրքում հավաքեց ավելի քան 300 տարբեր ապացույց։

### Տարածված սխալներ

- Թեորեմը կիրառել **ոչ** ուղղանկյուն եռանկյան մեջ։ $5$–$6$–$7$ եռանկյան մեջ $5^2 + 6^2 \ne 7^2$։
- Գումարել կողմերը, ոչ թե քառակուսիները. $c \ne a + b$։ Եռանկյան անհավասարությունից միշտ $c < a + b$։
- Մոռանալ, թե որ կողմն է ներքնաձիգը. այն ուղիղ անկյան դիմաց է և ամենամեծն է։`,
    r`### Доказательство президента

В 1876 году Джеймс Гарфилд, впоследствии президент США, нашёл такое доказательство. Положим две копии прямоугольного треугольника (катеты $a$, $b$, гипотенуза $c$) так, чтобы вместе с третьим треугольником они образовали **трапецию** с параллельными сторонами $a$ и $b$ и высотой $a + b$. У третьего треугольника две стороны $c$ и прямой угол между ними (два острых угла рядом с ним дают в сумме $90°$).

Посчитаем площадь трапеции двумя способами:
$$\frac{a + b}{2}(a + b) = 2 \cdot \frac{ab}{2} + \frac{c^2}{2}.$$
Умножим на $2$: $a^2 + 2ab + b^2 = 2ab + c^2$, значит, $a^2 + b^2 = c^2$. ∎ Это ровно половина доказательства с квадратом из урока.

### Доказательство через подобие (заглядываем в 3 главу)

Опустим высоту $CH$ на гипотенузу. В 3 главе мы покажем, что $AC^2 = AH \cdot AB$ и $BC^2 = HB \cdot AB$. Складывая,
$$AC^2 + BC^2 = AB(AH + HB) = AB^2.$$
Это доказательство вообще не использует площадь, только форму треугольников.

### Долгая история

- Вавилонская глиняная табличка (Plimpton 322, около 1800 г. до н. э.) перечисляет тройки вроде $(119, 120, 169)$: правило знали за тысячу лет до Пифагора.
- Китайская книга «Чжоуби суаньцзин» показывает доказательство-рисунок с квадратом для треугольника $3$–$4$–$5$.
- Первое общее доказательство приписывают Пифагору (VI в. до н. э.) или его школе.
- В 1927 году Элиша Лумис собрал в одной книге более 300 разных доказательств.

### Частые ошибки

- Применять теорему в **непрямоугольном** треугольнике. В треугольнике $5$–$6$–$7$ $5^2 + 6^2 \ne 7^2$.
- Складывать стороны вместо квадратов: $c \ne a + b$. По неравенству треугольника всегда $c < a + b$.
- Путать гипотенузу: она лежит против прямого угла и самая длинная.`,
  ),

  "pythagoras-converse": th(
    r`### Proof of the converse

Let $\triangle ABC$ have sides $a$, $b$, $c$ with $c^2 = a^2 + b^2$. Build a **right** triangle $A_1B_1C_1$ with legs $a$ and $b$. By Pythagoras its hypotenuse $c_1$ satisfies
$$c_1^2 = a^2 + b^2 = c^2, \quad \text{so} \quad c_1 = c.$$
Now the two triangles have three equal sides, so they are congruent by SSS, and $\angle C = \angle C_1 = 90°$. ∎

The trick, "build the triangle you want and compare", is the standard way to prove converses.

### Why $c^2 > a^2 + b^2$ means an obtuse angle

Let $\angle C$ be obtuse. Drop the altitude from $B$; its foot $H$ falls on the extension of $AC$ beyond $C$. Let $CH = x$ and $BH = h$. Then $a^2 = x^2 + h^2$ and
$$c^2 = (b + x)^2 + h^2 = b^2 + 2bx + x^2 + h^2 = a^2 + b^2 + 2bx > a^2 + b^2.$$
For an acute angle the foot lies on $AC$ and the same computation gives $a^2 + b^2 - 2bx$. In grade 9 this becomes the **law of cosines**.

### A recipe for all triples

For whole numbers $m > n > 0$,
$$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = (m^2 + n^2)^2.$$
So $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$ is always a Pythagorean triple:

| $m$, $n$ | triple |
|---|---|
| $2, 1$ | $3, 4, 5$ |
| $3, 2$ | $5, 12, 13$ |
| $4, 1$ | $15, 8, 17$ |
| $4, 3$ | $7, 24, 25$ |
| $5, 2$ | $21, 20, 29$ |

Every primitive triple (no common factor) is obtained this way, which Euclid already knew.

### A famous "no"

Are there whole numbers with $a^3 + b^3 = c^3$, or any higher power? Pierre de Fermat wrote in 1637 that he had a proof that there are none, "but the margin is too small to contain it". The statement was finally proved by Andrew Wiles in 1994, after 357 years.`,
    r`### Հակադարձ թեորեմի ապացույցը

Թող $\triangle ABC$-ն ունենա $a$, $b$, $c$ կողմեր, ընդ որում $c^2 = a^2 + b^2$։ Կառուցենք $a$ և $b$ էջերով **ուղղանկյուն** $A_1B_1C_1$ եռանկյուն։ Ըստ Պյութագորասի՝ նրա $c_1$ ներքնաձիգի համար
$$c_1^2 = a^2 + b^2 = c^2, \quad c_1 = c$$
Այժմ երկու եռանկյուններն ունեն երեք հավասար կողմ, ուստի հավասար են ըստ երրորդ հայտանիշի, և $\angle C = \angle C_1 = 90°$։ ∎

Հնարքը՝ «կառուցիր քեզ պետք եղած եռանկյունը և համեմատիր», հակադարձ թեորեմներ ապացուցելու ստանդարտ եղանակն է։

### Ինչու է $c^2 > a^2 + b^2$-ը նշանակում բութ անկյուն

Թող $\angle C$-ն բութ լինի։ $B$-ից իջեցնենք բարձրությունը. նրա $H$ հիմքն ընկնում է $AC$-ի շարունակության վրա՝ $C$-ից այն կողմ։ Թող $CH = x$ և $BH = h$։ Այդ դեպքում $a^2 = x^2 + h^2$ և
$$c^2 = (b + x)^2 + h^2 = b^2 + 2bx + x^2 + h^2 = a^2 + b^2 + 2bx > a^2 + b^2$$
Սուր անկյան դեպքում հիմքը $AC$-ի վրա է, և նույն հաշվարկը տալիս է $a^2 + b^2 - 2bx$։ 9-րդ դասարանում սա կդառնա **կոսինուսների թեորեմը**։

### Բոլոր եռյակների բաղադրատոմսը

$m > n > 0$ ամբողջ թվերի համար
$$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = (m^2 + n^2)^2$$
Ուստի $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$-ը միշտ պյութագորասյան եռյակ է.

| $m$, $n$ | եռյակ |
|---|---|
| $2, 1$ | $3, 4, 5$ |
| $3, 2$ | $5, 12, 13$ |
| $4, 1$ | $15, 8, 17$ |
| $4, 3$ | $7, 24, 25$ |
| $5, 2$ | $21, 20, 29$ |

Յուրաքանչյուր պարզ եռյակ (առանց ընդհանուր բաժանարարի) ստացվում է այս եղանակով, ինչը գիտեր դեռ Էվկլիդեսը։

### Հայտնի «ոչ»

Կա՞ն արդյոք ամբողջ թվեր, որոնց համար $a^3 + b^3 = c^3$, կամ ավելի բարձր աստիճանով։ Պիեռ Ֆերման 1637 թվականին գրել է, որ ունի ապացույց, որ այդպիսիք չկան, «բայց լուսանցքը չափազանց նեղ է այն տեղավորելու համար»։ Պնդումը վերջնականապես ապացուցեց Էնդրյու Ուայլսը 1994 թվականին՝ 357 տարի անց։`,
    r`### Доказательство обратной теоремы

Пусть у $\triangle ABC$ стороны $a$, $b$, $c$ и $c^2 = a^2 + b^2$. Построим **прямоугольный** треугольник $A_1B_1C_1$ с катетами $a$ и $b$. По теореме Пифагора его гипотенуза $c_1$ удовлетворяет
$$c_1^2 = a^2 + b^2 = c^2, \quad \text{значит} \quad c_1 = c.$$
Теперь у треугольников три равные стороны, они равны по третьему признаку, и $\angle C = \angle C_1 = 90°$. ∎

Приём «построй нужный треугольник и сравни» — стандартный способ доказывать обратные теоремы.

### Почему $c^2 > a^2 + b^2$ означает тупой угол

Пусть $\angle C$ тупой. Опустим высоту из $B$; её основание $H$ попадает на продолжение $AC$ за точку $C$. Пусть $CH = x$, $BH = h$. Тогда $a^2 = x^2 + h^2$ и
$$c^2 = (b + x)^2 + h^2 = b^2 + 2bx + x^2 + h^2 = a^2 + b^2 + 2bx > a^2 + b^2.$$
Для острого угла основание лежит на $AC$, и то же вычисление даёт $a^2 + b^2 - 2bx$. В 9 классе это станет **теоремой косинусов**.

### Рецепт всех троек

Для целых $m > n > 0$
$$(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2n^2 + n^4 + 4m^2n^2 = (m^2 + n^2)^2.$$
Значит, $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$ — всегда пифагорова тройка:

| $m$, $n$ | тройка |
|---|---|
| $2, 1$ | $3, 4, 5$ |
| $3, 2$ | $5, 12, 13$ |
| $4, 1$ | $15, 8, 17$ |
| $4, 3$ | $7, 24, 25$ |
| $5, 2$ | $21, 20, 29$ |

Каждая примитивная тройка (без общего множителя) получается так, это знал ещё Евклид.

### Знаменитое «нет»

Есть ли целые числа с $a^3 + b^3 = c^3$ или с большей степенью? Пьер Ферма написал в 1637 году, что у него есть доказательство, что таких нет, «но поля слишком узки, чтобы его вместить». Утверждение окончательно доказал Эндрю Уайлс в 1994 году, через 357 лет.`,
  ),

  "herons-formula": th(
    r`### Where Heron's formula comes from

Let the height $h$ to side $c$ split it into $x$ and $c - x$ (an acute triangle; the other case is the same with signs). By Pythagoras in both right triangles,
$$h^2 = b^2 - x^2 = a^2 - (c - x)^2.$$
Opening the bracket, $b^2 - x^2 = a^2 - c^2 + 2cx - x^2$, so
$$x = \frac{b^2 + c^2 - a^2}{2c}.$$
Now $h^2 = b^2 - x^2 = (b - x)(b + x)$. Compute each factor:
$$b + x = \frac{2bc + b^2 + c^2 - a^2}{2c} = \frac{(b + c)^2 - a^2}{2c} = \frac{(b + c - a)(b + c + a)}{2c},$$
$$b - x = \frac{a^2 - (b - c)^2}{2c} = \frac{(a - b + c)(a + b - c)}{2c}.$$
Then
$$S^2 = \frac{c^2 h^2}{4} = \frac{(a + b + c)(b + c - a)(a - b + c)(a + b - c)}{16}.$$
With $a + b + c = 2p$ the four factors are $2p$, $2(p - a)$, $2(p - b)$, $2(p - c)$, and the $16$ cancels:
$$S^2 = p(p - a)(p - b)(p - c).$$

### Built-in checks

- If one side equals the sum of the other two, for instance $c = a + b$, then $p - c = 0$ and $S = 0$: the triangle is flat. The formula "knows" the triangle inequality.
- If any factor $p - a$ is negative, no triangle exists.
- For an equilateral triangle of side $a$: $p = \frac{3a}{2}$, $S = \sqrt{\frac{3a}{2} \cdot \frac{a}{2} \cdot \frac{a}{2} \cdot \frac{a}{2}} = \frac{\sqrt{3}}{4}a^2$.

### Heron of Alexandria

Heron (1st century AD) was an engineer: he described a steam-driven spinning ball, automatic temple doors and a vending machine for holy water. The formula appears in his book *Metrica* on measuring fields, with a proof. Archimedes probably knew it earlier.`,
    r`### Որտեղից է գալիս Հերոնի բանաձևը

Թող $c$ կողմին տարված $h$ բարձրությունն այն բաժանի $x$ և $c - x$ մասերի (սուրանկյուն եռանկյուն. մյուս դեպքը նույնն է՝ նշանների փոփոխությամբ)։ Ըստ Պյութագորասի՝ երկու ուղղանկյուն եռանկյուններում
$$h^2 = b^2 - x^2 = a^2 - (c - x)^2$$
Բացելով փակագիծը՝ $b^2 - x^2 = a^2 - c^2 + 2cx - x^2$, ուստի
$$x = \frac{b^2 + c^2 - a^2}{2c}$$
Այժմ $h^2 = b^2 - x^2 = (b - x)(b + x)$։ Հաշվենք յուրաքանչյուր արտադրիչը.
$$b + x = \frac{2bc + b^2 + c^2 - a^2}{2c} = \frac{(b + c)^2 - a^2}{2c} = \frac{(b + c - a)(b + c + a)}{2c},$$
$$b - x = \frac{a^2 - (b - c)^2}{2c} = \frac{(a - b + c)(a + b - c)}{2c}$$
Այդ դեպքում
$$S^2 = \frac{c^2 h^2}{4} = \frac{(a + b + c)(b + c - a)(a - b + c)(a + b - c)}{16}$$
$a + b + c = 2p$ դեպքում չորս արտադրիչներն են $2p$, $2(p - a)$, $2(p - b)$, $2(p - c)$, և $16$-ը կրճատվում է.
$$S^2 = p(p - a)(p - b)(p - c)$$

### Ներկառուցված ստուգումներ

- Եթե մի կողմը հավասար է մյուս երկուսի գումարին, օրինակ՝ $c = a + b$, ապա $p - c = 0$ և $S = 0$. եռանկյունը հարթված է։ Բանաձևը «գիտի» եռանկյան անհավասարությունը։
- Եթե որևէ $p - a$ արտադրիչ բացասական է, եռանկյուն գոյություն չունի։
- $a$ կողմով հավասարակողմ եռանկյան համար. $p = \frac{3a}{2}$, $S = \sqrt{\frac{3a}{2} \cdot \frac{a}{2} \cdot \frac{a}{2} \cdot \frac{a}{2}} = \frac{\sqrt{3}}{4}a^2$։

### Հերոն Ալեքսանդրացին

Հերոնը (մ.թ. I դար) ինժեներ էր. նա նկարագրել է գոլորշով պտտվող գունդ, տաճարի ինքնաբաց դռներ և սուրբ ջրի վաճառքի ավտոմատ։ Բանաձևը, ապացույցով հանդերձ, կա դաշտերի չափման մասին նրա «Մետրիկա» գրքում։ Արքիմեդը, հավանաբար, այն ավելի վաղ գիտեր։`,
    r`### Откуда берётся формула Герона

Пусть высота $h$ к стороне $c$ делит её на $x$ и $c - x$ (остроугольный треугольник; другой случай такой же с другими знаками). По теореме Пифагора в двух прямоугольных треугольниках
$$h^2 = b^2 - x^2 = a^2 - (c - x)^2.$$
Раскрыв скобку, $b^2 - x^2 = a^2 - c^2 + 2cx - x^2$, значит,
$$x = \frac{b^2 + c^2 - a^2}{2c}.$$
Теперь $h^2 = b^2 - x^2 = (b - x)(b + x)$. Вычислим каждый множитель:
$$b + x = \frac{2bc + b^2 + c^2 - a^2}{2c} = \frac{(b + c)^2 - a^2}{2c} = \frac{(b + c - a)(b + c + a)}{2c},$$
$$b - x = \frac{a^2 - (b - c)^2}{2c} = \frac{(a - b + c)(a + b - c)}{2c}.$$
Тогда
$$S^2 = \frac{c^2 h^2}{4} = \frac{(a + b + c)(b + c - a)(a - b + c)(a + b - c)}{16}.$$
При $a + b + c = 2p$ четыре множителя равны $2p$, $2(p - a)$, $2(p - b)$, $2(p - c)$, и $16$ сокращается:
$$S^2 = p(p - a)(p - b)(p - c).$$

### Встроенные проверки

- Если одна сторона равна сумме двух других, например $c = a + b$, то $p - c = 0$ и $S = 0$: треугольник вырожден. Формула «знает» неравенство треугольника.
- Если какой-то множитель $p - a$ отрицателен, треугольника не существует.
- Для равностороннего треугольника со стороной $a$: $p = \frac{3a}{2}$, $S = \sqrt{\frac{3a}{2} \cdot \frac{a}{2} \cdot \frac{a}{2} \cdot \frac{a}{2}} = \frac{\sqrt{3}}{4}a^2$.

### Герон Александрийский

Герон (I в. н. э.) был инженером: он описал вращающийся паровой шар, автоматические двери храма и автомат для продажи святой воды. Формула с доказательством есть в его книге «Метрика» об измерении полей. Архимед, вероятно, знал её раньше.`,
  ),

  "area-problems": th(
    r`### Proof: of all rectangles with a given perimeter, the square has the largest area

Let the sides be $x$ and $y$ with $x + y = s$ fixed (half the perimeter). Use the identity
$$xy = \frac{(x + y)^2 - (x - y)^2}{4} = \frac{s^2 - (x - y)^2}{4}.$$
The first term is fixed, and $(x - y)^2 \ge 0$ is subtracted. So $xy$ is largest when $(x - y)^2 = 0$, that is $x = y$: the square. Its area is $\frac{s^2}{4}$. ∎

The same identity shows how fast the area drops: a $7 \times 9$ rectangle has $(x - y)^2 = 4$, so it loses exactly $1$ compared with the $8 \times 8$ square ($63$ against $64$).

### Proof: with two sides fixed, the right triangle has the largest area

Take a triangle with sides $a$ and $b$ and a free angle between them. Its height to $a$ is at most $b$, since a perpendicular is never longer than an oblique. So
$$S = \frac{1}{2} a h \le \frac{1}{2} a b,$$
with equality only when $b$ **is** the height, that is when the angle is $90°$. ∎

### The isoperimetric problem

Of **all** figures with a given perimeter, the circle has the largest area. A legend tells that Queen Dido, founding Carthage, was offered as much land as an ox-hide could enclose. She cut the hide into a thin strip and laid it out in a circular arc against the sea coast. This is why soap bubbles are round and why animals curl up in the cold: the least surface for the given volume loses the least heat.

| Figure with perimeter $4$ | Area |
|---|---|
| triangle (equilateral) | $\approx 0{,}77$ |
| square | $1$ |
| regular hexagon | $\approx 1{,}15$ |
| circle | $\approx 1{,}27$ |

### Solving strategy

When a figure is complicated, look for a **difference of simple figures** before a sum: an outer rectangle minus corners is often quicker than many pieces. And always check the units: m² for areas, and $1$ ha $= 100 \times 100$ m.`,
    r`### Ապացույց. տրված պարագծով բոլոր ուղղանկյուններից քառակուսին ունի ամենամեծ մակերեսը

Թող կողմերը լինեն $x$ և $y$, ընդ որում $x + y = s$ հաստատուն է (կիսապարագիծը)։ Օգտագործենք նույնությունը.
$$xy = \frac{(x + y)^2 - (x - y)^2}{4} = \frac{s^2 - (x - y)^2}{4}$$
Առաջին անդամը հաստատուն է, իսկ $(x - y)^2 \ge 0$-ն հանվում է։ Ուստի $xy$-ն ամենամեծն է, երբ $(x - y)^2 = 0$, այսինքն՝ $x = y$. քառակուսին։ Նրա մակերեսը $\frac{s^2}{4}$ է։ ∎

Նույն նույնությունը ցույց է տալիս, թե որքան արագ է մակերեսը նվազում. $7 \times 9$ ուղղանկյան համար $(x - y)^2 = 4$, ուստի $8 \times 8$ քառակուսու համեմատ այն կորցնում է ճիշտ $1$ ($63$՝ $64$-ի դիմաց)։

### Ապացույց. երկու ֆիքսված կողմի դեպքում ուղղանկյուն եռանկյունն ունի ամենամեծ մակերեսը

Վերցնենք $a$ և $b$ կողմերով եռանկյուն՝ նրանց միջև ազատ անկյունով։ $a$-ին տարված նրա բարձրությունը առավելագույնը $b$ է, քանի որ ուղղահայացը երբեք թեքից երկար չէ։ Ուստի
$$S = \frac{1}{2} a h \le \frac{1}{2} a b,$$
և հավասարությունը միայն այն դեպքում է, երբ $b$-ն **հենց** բարձրությունն է, այսինքն՝ անկյունը $90°$ է։ ∎

### Իզոպարագծային խնդիրը

Տրված պարագծով **բոլոր** պատկերներից շրջանն ունի ամենամեծ մակերեսը։ Ավանդությունը պատմում է, որ Կարթագենը հիմնադրող Դիդոն թագուհուն առաջարկեցին այնքան հող, որքան կպարփակեր եզան կաշին։ Նա կաշին կտրեց բարակ շերտի և այն փռեց աղեղով՝ ծովափին հենելով։ Ահա թե ինչու են օճառի պղպջակները կլոր և ինչու են կենդանիները ցրտին կծկվում. տրված ծավալի դեպքում ամենափոքր մակերևույթը ամենաքիչ ջերմությունն է կորցնում։

| $4$ պարագծով պատկեր | Մակերես |
|---|---|
| եռանկյուն (հավասարակողմ) | $\approx 0{,}77$ |
| քառակուսի | $1$ |
| կանոնավոր վեցանկյուն | $\approx 1{,}15$ |
| շրջան | $\approx 1{,}27$ |

### Լուծման ռազմավարություն

Երբ պատկերը բարդ է, գումարից առաջ փնտրեք **պարզ պատկերների տարբերություն**. արտաքին ուղղանկյունը հանած անկյունները հաճախ ավելի արագ է, քան շատ կտորները։ Եվ միշտ ստուգեք միավորները. մակերեսի համար մ², իսկ $1$ հա $= 100 \times 100$ մ։`,
    r`### Доказательство: из всех прямоугольников данного периметра наибольшую площадь имеет квадрат

Пусть стороны $x$ и $y$, $x + y = s$ фиксировано (полупериметр). Воспользуемся тождеством
$$xy = \frac{(x + y)^2 - (x - y)^2}{4} = \frac{s^2 - (x - y)^2}{4}.$$
Первое слагаемое фиксировано, а $(x - y)^2 \ge 0$ вычитается. Значит, $xy$ наибольшее при $(x - y)^2 = 0$, то есть $x = y$: квадрат. Его площадь $\frac{s^2}{4}$. ∎

То же тождество показывает, как быстро падает площадь: у прямоугольника $7 \times 9$ $(x - y)^2 = 4$, поэтому он проигрывает квадрату $8 \times 8$ ровно $1$ ($63$ против $64$).

### Доказательство: при двух данных сторонах наибольшую площадь имеет прямоугольный треугольник

Возьмём треугольник со сторонами $a$ и $b$ и свободным углом между ними. Его высота к $a$ не больше $b$, ведь перпендикуляр не длиннее наклонной. Поэтому
$$S = \frac{1}{2} a h \le \frac{1}{2} a b,$$
и равенство только тогда, когда $b$ **и есть** высота, то есть угол равен $90°$. ∎

### Изопериметрическая задача

Из **всех** фигур данного периметра наибольшую площадь имеет круг. Легенда рассказывает, что царице Дидоне, основавшей Карфаген, предложили столько земли, сколько охватит бычья шкура. Она разрезала шкуру на тонкий ремень и выложила его дугой, упираясь в морской берег. Поэтому мыльные пузыри круглые, а животные в холод сворачиваются клубком: наименьшая поверхность при данном объёме теряет меньше всего тепла.

| Фигура с периметром $4$ | Площадь |
|---|---|
| равносторонний треугольник | $\approx 0{,}77$ |
| квадрат | $1$ |
| правильный шестиугольник | $\approx 1{,}15$ |
| круг | $\approx 1{,}27$ |

### Стратегия решения

Когда фигура сложная, прежде суммы поищите **разность простых фигур**: внешний прямоугольник минус углы часто быстрее, чем много кусков. И всегда проверяйте единицы: м² для площадей, $1$ га $= 100 \times 100$ м.`,
  ),
};
