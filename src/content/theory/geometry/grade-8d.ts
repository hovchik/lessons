import { th } from "../kit";

const r = String.raw;

/** Geometry 8, unit 4: the circle. */
export const geometry8d = {
  "tangent-line": th(
    r`### Proof of the property: a tangent is perpendicular to the radius

Let line $l$ touch the circle (centre $O$, radius $r$) at $A$. Suppose $OA$ were **not** perpendicular to $l$. Drop the perpendicular $OH$ from $O$ to $l$; then $H \ne A$ and $OH < OA = r$ (a perpendicular is shorter than an oblique). The distance from the centre to the line is less than $r$, so the line is a secant with **two** common points. But a tangent has only one. Contradiction, so $OA \perp l$. ∎

### Proof of the test

Let $l$ pass through $A$ on the circle with $l \perp OA$. For any other point $M$ of $l$, $OM$ is an oblique and $OA$ the perpendicular, so $OM > OA = r$: $M$ lies **outside** the circle. So $A$ is the only common point, and $l$ is a tangent. ∎

### Constructing the tangents from an outside point

Given point $P$ outside the circle. Draw the circle with diameter $OP$; it meets the given circle at $A$ and $B$. The angle $OAP$ is inscribed on the diameter $OP$, so it is $90°$: $PA \perp OA$, and $PA$ is a tangent by the test. Likewise $PB$. This exact construction uses only the compass and straightedge.

### Tangent length and belts

From $PA \perp OA$, Pythagoras gives the length of the tangent segment:
$$PA = \sqrt{PO^2 - r^2}.$$
For two pulleys with radii $R$ and $r$ and centres $d$ apart, the straight part of a belt (a common tangent not crossing between them) has length
$$\sqrt{d^2 - (R - r)^2}.$$
*Why:* shift the tangent parallel to itself by $r$ towards the centres; it becomes a tangent from the small centre to a circle of radius $R - r$. A bicycle chain and a car's timing belt are designed with this formula.

### The horizon

Standing at height $h$ above the sea, you see as far as the point where your line of sight touches the Earth (radius $R \approx 6400$ km). The distance is $\sqrt{(R + h)^2 - R^2} = \sqrt{2Rh + h^2} \approx \sqrt{2Rh}$. For $h = 2$ m that is about $5$ km; from a $100$ m cliff, about $36$ km.`,
    r`### Հատկության ապացույցը. շոշափողն ուղղահայաց է շառավղին

Թող $l$ ուղիղը շոշափի շրջանագիծը ($O$ կենտրոն, $r$ շառավիղ) $A$ կետում։ Ենթադրենք՝ $OA$-ն ուղղահայաց **չէ** $l$-ին։ $O$-ից $l$-ին իջեցնենք $OH$ ուղղահայացը. այդ դեպքում $H \ne A$ և $OH < OA = r$ (ուղղահայացը թեքից կարճ է)։ Կենտրոնից ուղիղ եղած հեռավորությունը $r$-ից փոքր է, ուստի ուղիղը հատող է՝ **երկու** ընդհանուր կետով։ Բայց շոշափողն ունի միայն մեկը։ Հակասություն, ուստի $OA \perp l$։ ∎

### Հայտանիշի ապացույցը

Թող $l$-ն անցնի շրջանագծի $A$ կետով, և $l \perp OA$։ $l$-ի ցանկացած այլ $M$ կետի համար $OM$-ը թեք է, իսկ $OA$-ն՝ ուղղահայաց, ուստի $OM > OA = r$. $M$-ը շրջանագծից **դուրս** է։ Ուրեմն $A$-ն միակ ընդհանուր կետն է, և $l$-ը շոշափող է։ ∎

### Արտաքին կետից շոշափողների կառուցումը

Տրված է շրջանագծից դուրս գտնվող $P$ կետը։ Գծենք $OP$ տրամագծով շրջանագիծ. այն տրված շրջանագիծը հատում է $A$ և $B$ կետերում։ $OAP$ անկյունը ներգծված է $OP$ տրամագծին հենված, ուստի $90°$ է. $PA \perp OA$, և ըստ հայտանիշի՝ $PA$-ն շոշափող է։ Նույն կերպ՝ $PB$-ն։ Այս ճշգրիտ կառուցումն օգտագործում է միայն կարկին և քանոն։

### Շոշափողի երկարությունը և փոկերը

$PA \perp OA$-ից Պյութագորասի թեորեմը տալիս է շոշափողի հատվածի երկարությունը.
$$PA = \sqrt{PO^2 - r^2}$$
$R$ և $r$ շառավիղներով և $d$ հեռավորությամբ կենտրոններով երկու ճախարակի համար փոկի ուղիղ մասը (ընդհանուր շոշափող, որը չի անցնում նրանց միջով) ունի
$$\sqrt{d^2 - (R - r)^2}$$
երկարություն։ *Ինչու.* շոշափողը տեղափոխենք իրեն զուգահեռ $r$-ով դեպի կենտրոնները. այն կդառնա փոքր կենտրոնից $R - r$ շառավղով շրջանագծին տարված շոշափող։ Հեծանիվի շղթան և մեքենայի բաշխիչ փոկը նախագծվում են այս բանաձևով։

### Հորիզոնը

Ծովից $h$ բարձրության վրա կանգնած՝ տեսնում եք մինչև այն կետը, որտեղ տեսողության գիծը շոշափում է Երկիրը ($R \approx 6400$ կմ շառավիղ)։ Հեռավորությունը $\sqrt{(R + h)^2 - R^2} = \sqrt{2Rh + h^2} \approx \sqrt{2Rh}$ է։ $h = 2$ մ դեպքում դա մոտ $5$ կմ է, $100$ մ բարձր ժայռից՝ մոտ $36$ կմ։`,
    r`### Доказательство свойства: касательная перпендикулярна радиусу

Пусть прямая $l$ касается окружности (центр $O$, радиус $r$) в точке $A$. Предположим, что $OA$ **не** перпендикулярен $l$. Опустим перпендикуляр $OH$ из $O$ на $l$; тогда $H \ne A$ и $OH < OA = r$ (перпендикуляр короче наклонной). Расстояние от центра до прямой меньше $r$, значит, прямая — секущая с **двумя** общими точками. А у касательной она одна. Противоречие, значит, $OA \perp l$. ∎

### Доказательство признака

Пусть $l$ проходит через точку $A$ окружности и $l \perp OA$. Для любой другой точки $M$ прямой $l$ отрезок $OM$ — наклонная, а $OA$ — перпендикуляр, поэтому $OM > OA = r$: $M$ лежит **вне** окружности. Значит, $A$ — единственная общая точка, и $l$ — касательная. ∎

### Построение касательных из внешней точки

Дана точка $P$ вне окружности. Проведём окружность с диаметром $OP$; она пересекает данную окружность в точках $A$ и $B$. Угол $OAP$ вписанный и опирается на диаметр $OP$, значит, равен $90°$: $PA \perp OA$, и $PA$ — касательная по признаку. Так же $PB$. Это точное построение только циркулем и линейкой.

### Длина касательной и ремни

Из $PA \perp OA$ по теореме Пифагора длина отрезка касательной
$$PA = \sqrt{PO^2 - r^2}.$$
Для двух шкивов с радиусами $R$ и $r$ и расстоянием между центрами $d$ прямой участок ремня (общая касательная, не проходящая между ними) имеет длину
$$\sqrt{d^2 - (R - r)^2}.$$
*Почему:* сдвинем касательную параллельно на $r$ к центрам; она станет касательной из малого центра к окружности радиуса $R - r$. По этой формуле проектируют велосипедную цепь и ремень ГРМ автомобиля.

### Горизонт

Стоя на высоте $h$ над морем, вы видите до точки, где луч зрения касается Земли (радиус $R \approx 6400$ км). Расстояние $\sqrt{(R + h)^2 - R^2} = \sqrt{2Rh + h^2} \approx \sqrt{2Rh}$. При $h = 2$ м это около $5$ км, с $100$-метрового обрыва — около $36$ км.`,
  ),

  "central-inscribed-angles": th(
    r`### Proof of the inscribed angle theorem, three cases

Let $\angle ABC$ be inscribed, with central angle $\angle AOC$ on the same arc.

**Case 1: the centre lies on a side**, say on $BC$. Then $OA = OB$, so $\triangle AOB$ is isosceles and $\angle OAB = \angle OBA = x$. The angle $AOC$ is exterior to $\triangle AOB$, so $\angle AOC = x + x = 2x$. Hence $\angle ABC = x = \frac{1}{2}\angle AOC$.

**Case 2: the centre lies inside the angle.** Draw the diameter $BD$. It splits $\angle ABC$ into $\angle ABD$ and $\angle DBC$, each covered by case 1:
$$\angle ABC = \frac{1}{2}\angle AOD + \frac{1}{2}\angle DOC = \frac{1}{2}\angle AOC.$$

**Case 3: the centre lies outside the angle.** Draw the diameter $BD$ again; now $\angle ABC = \angle ABD - \angle CBD$, and the same subtraction works for the central angles. ∎

Splitting into cases is a normal part of proofs: each case is easy, and together they cover everything.

### Three more angles measured by arcs

| Angle | Measure |
|---|---|
| between a tangent and a chord, at the point of contact | half the arc inside it |
| between two chords meeting **inside** the circle | half the **sum** of the two arcs it and its vertical angle cut off |
| between two secants meeting **outside** | half the **difference** of the two arcs |

*Proof of the second row.* Chords $AC$ and $BD$ meet at $P$. The angle $APB$ is exterior to $\triangle APD$: $\angle APB = \angle PAD + \angle PDA = \frac{1}{2}\smile DC + \frac{1}{2}\smile AB$. The third row is proved the same way with a subtraction.

### Why a photographer likes the circle

All points from which a segment $AB$ is seen at the same angle lie on an arc through $A$ and $B$. A football player wanting the widest shooting angle at the goal moves along such arcs; a photographer who wants a building to fill the frame the same way can stand anywhere on one arc.`,
    r`### Ներգծյալ անկյան թեորեմի ապացույցը՝ երեք դեպք

Թող $\angle ABC$-ն ներգծյալ լինի, իսկ $\angle AOC$-ն նույն աղեղին հենված կենտրոնային անկյունը։

**1-ին դեպք. կենտրոնը կողմի վրա է**, օրինակ՝ $BC$-ի։ Այդ դեպքում $OA = OB$, ուստի $\triangle AOB$-ն հավասարասրուն է, և $\angle OAB = \angle OBA = x$։ $AOC$ անկյունը $\triangle AOB$-ի արտաքին անկյունն է, ուստի $\angle AOC = x + x = 2x$։ Հետևաբար $\angle ABC = x = \frac{1}{2}\angle AOC$։

**2-րդ դեպք. կենտրոնն անկյան ներսում է։** Տանենք $BD$ տրամագիծը։ Այն $\angle ABC$-ն բաժանում է $\angle ABD$-ի և $\angle DBC$-ի, որոնցից յուրաքանչյուրն ընդգրկվում է 1-ին դեպքով.
$$\angle ABC = \frac{1}{2}\angle AOD + \frac{1}{2}\angle DOC = \frac{1}{2}\angle AOC$$

**3-րդ դեպք. կենտրոնն անկյունից դուրս է։** Դարձյալ տանենք $BD$ տրամագիծը. այժմ $\angle ABC = \angle ABD - \angle CBD$, և նույն հանումն աշխատում է կենտրոնային անկյունների համար։ ∎

Դեպքերի բաժանելը ապացույցների սովորական մաս է. յուրաքանչյուր դեպք հեշտ է, իսկ միասին ընդգրկում են ամեն ինչ։

### Աղեղներով չափվող ևս երեք անկյուն

| Անկյուն | Չափը |
|---|---|
| շոշափողի և լարի միջև՝ շոշափման կետում | նրա ներսի աղեղի կեսը |
| շրջանի **ներսում** հատվող երկու լարի միջև | նրա և հակադիր անկյան կտրած երկու աղեղների **գումարի** կեսը |
| շրջանից **դուրս** հատվող երկու հատողի միջև | երկու աղեղների **տարբերության** կեսը |

*Երկրորդ տողի ապացույցը։* $AC$ և $BD$ լարերը հատվում են $P$ կետում։ $APB$ անկյունը $\triangle APD$-ի արտաքին անկյունն է. $\angle APB = \angle PAD + \angle PDA = \frac{1}{2}\smile DC + \frac{1}{2}\smile AB$։ Երրորդ տողն ապացուցվում է նույն կերպ՝ հանումով։

### Ինչու է լուսանկարիչը սիրում շրջանագիծը

Բոլոր կետերը, որոնցից $AB$ հատվածը երևում է նույն անկյան տակ, գտնվում են $A$-ով և $B$-ով անցնող աղեղի վրա։ Ֆուտբոլիստը, որ ուզում է դարպասին հարվածելու ամենալայն անկյունը, շարժվում է այդպիսի աղեղներով. լուսանկարիչը, որ ուզում է, որ շենքը նույն կերպ լցնի կադրը, կարող է կանգնել մեկ աղեղի ցանկացած կետում։`,
    r`### Доказательство теоремы о вписанном угле, три случая

Пусть $\angle ABC$ вписанный, а $\angle AOC$ — центральный угол на ту же дугу.

**Случай 1: центр лежит на стороне**, скажем на $BC$. Тогда $OA = OB$, значит, $\triangle AOB$ равнобедренный и $\angle OAB = \angle OBA = x$. Угол $AOC$ — внешний для $\triangle AOB$, поэтому $\angle AOC = x + x = 2x$. Значит, $\angle ABC = x = \frac{1}{2}\angle AOC$.

**Случай 2: центр внутри угла.** Проведём диаметр $BD$. Он делит $\angle ABC$ на $\angle ABD$ и $\angle DBC$, каждый из которых — случай 1:
$$\angle ABC = \frac{1}{2}\angle AOD + \frac{1}{2}\angle DOC = \frac{1}{2}\angle AOC.$$

**Случай 3: центр вне угла.** Снова проведём диаметр $BD$; теперь $\angle ABC = \angle ABD - \angle CBD$, и то же вычитание работает для центральных углов. ∎

Разбор случаев — обычная часть доказательств: каждый случай прост, а вместе они охватывают всё.

### Ещё три угла, измеряемые дугами

| Угол | Мера |
|---|---|
| между касательной и хордой в точке касания | половина дуги внутри него |
| между двумя хордами, пересекающимися **внутри** круга | половина **суммы** двух дуг, высекаемых им и вертикальным ему углом |
| между двумя секущими, пересекающимися **вне** круга | половина **разности** двух дуг |

*Доказательство второй строки.* Хорды $AC$ и $BD$ пересекаются в точке $P$. Угол $APB$ — внешний для $\triangle APD$: $\angle APB = \angle PAD + \angle PDA = \frac{1}{2}\smile DC + \frac{1}{2}\smile AB$. Третья строка доказывается так же, с вычитанием.

### Почему фотограф любит окружность

Все точки, из которых отрезок $AB$ виден под одним углом, лежат на дуге, проходящей через $A$ и $B$. Футболист, ищущий наибольший угол обстрела ворот, движется по таким дугам; фотограф, которому нужно, чтобы здание одинаково заполняло кадр, может стоять в любой точке одной дуги.`,
  ),

  "chords-theorem": th(
    r`### Proof: equal chords are equally far from the centre

Let chords $AB = CD$, with midpoints $M$ and $N$. Then $OM \perp AB$ and $ON \perp CD$ (the diameter through the midpoint is perpendicular). The right triangles $OMA$ and $ONC$ have equal hypotenuses $OA = OC = r$ and equal legs $AM = CN = \frac{AB}{2}$. By hypotenuse and leg they are congruent, so $OM = ON$. ∎ From $r^2 = d^2 + \left(\frac{a}{2}\right)^2$: a smaller distance $d$ means a longer chord.

### Two secants from an outside point

**Theorem.** If two secants from point $P$ meet the circle at $A, B$ and at $C, D$, then
$$PA \cdot PB = PC \cdot PD.$$
*Proof.* $\triangle PAD \sim \triangle PCB$: the angle at $P$ is common, and $\angle PDA = \angle PBC$ as inscribed angles on the same arc $AC$. So $\frac{PA}{PC} = \frac{PD}{PB}$. ∎

**Tangent and secant.** Let one secant turn until it becomes a tangent $PT$: both points $C$ and $D$ merge into $T$, and the theorem becomes
$$PT^2 = PA \cdot PB.$$

### One number for each point: the power of a point

All three theorems (crossing chords, two secants, tangent and secant) say the same thing. Through point $P$ draw **any** line meeting the circle at $X$ and $Y$. Then $PX \cdot PY$ does not depend on the line. To find this number, take the line through the centre: if $OP = d$, the two segments are $r - d$ and $r + d$ (inside) or $d - r$ and $d + r$ (outside), so
$$PX \cdot PY = |r^2 - d^2|.$$
This number is called the **power** of $P$ with respect to the circle. It is $0$ exactly on the circle.

*Example.* A point $3$ units from the centre of a circle of radius $5$: every chord through it is split into parts with product $25 - 9 = 16$, for instance $2$ and $8$, or $4$ and $4$.`,
    r`### Ապացույց. հավասար լարերը կենտրոնից հավասարահեռ են

Թող $AB = CD$ լարերի միջնակետերը լինեն $M$ և $N$։ Այդ դեպքում $OM \perp AB$ և $ON \perp CD$ (միջնակետով անցնող տրամագիծն ուղղահայաց է)։ $OMA$ և $ONC$ ուղղանկյուն եռանկյուններն ունեն հավասար ներքնաձիգներ՝ $OA = OC = r$, և հավասար էջեր՝ $AM = CN = \frac{AB}{2}$։ Ըստ ներքնաձիգի և էջի՝ նրանք հավասար են, ուստի $OM = ON$։ ∎ $r^2 = d^2 + \left(\frac{a}{2}\right)^2$-ից. ավելի փոքր $d$ հեռավորությունը նշանակում է ավելի երկար լար։

### Երկու հատող արտաքին կետից

**Թեորեմ։** Եթե $P$ կետից տարված երկու հատողները շրջանագիծը հատում են $A, B$ և $C, D$ կետերում, ապա
$$PA \cdot PB = PC \cdot PD$$
*Ապացույց։* $\triangle PAD \sim \triangle PCB$. $P$-ում անկյունն ընդհանուր է, իսկ $\angle PDA = \angle PBC$՝ որպես նույն $AC$ աղեղին հենված ներգծյալ անկյուններ։ Ուստի $\frac{PA}{PC} = \frac{PD}{PB}$։ ∎

**Շոշափող և հատող։** Թող հատողներից մեկը պտտվի, մինչև դառնա $PT$ շոշափող. $C$ և $D$ կետերը միաձուլվում են $T$-ում, և թեորեմը դառնում է
$$PT^2 = PA \cdot PB$$

### Մեկ թիվ յուրաքանչյուր կետի համար. կետի աստիճանը

Երեք թեորեմներն էլ (հատվող լարեր, երկու հատող, շոշափող և հատող) նույն բանն են ասում։ $P$ կետով տանենք շրջանագիծը $X$ և $Y$ կետերում հատող **ցանկացած** ուղիղ։ Այդ դեպքում $PX \cdot PY$-ը կախված չէ ուղղից։ Այդ թիվը գտնելու համար վերցնենք կենտրոնով անցնող ուղիղը. եթե $OP = d$, երկու հատվածներն են $r - d$ և $r + d$ (ներսում) կամ $d - r$ և $d + r$ (դրսում), ուստի
$$PX \cdot PY = |r^2 - d^2|$$
Այս թիվը կոչվում է $P$ կետի **աստիճան** շրջանագծի նկատմամբ։ Այն $0$ է ճիշտ շրջանագծի վրա։

*Օրինակ։* $5$ շառավղով շրջանագծի կենտրոնից $3$ հեռավորությամբ կետ. նրանով անցնող յուրաքանչյուր լար բաժանվում է մասերի, որոնց արտադրյալը $25 - 9 = 16$ է, օրինակ՝ $2$ և $8$, կամ $4$ և $4$։`,
    r`### Доказательство: равные хорды равноудалены от центра

Пусть хорды $AB = CD$, их середины $M$ и $N$. Тогда $OM \perp AB$ и $ON \perp CD$ (диаметр через середину хорды перпендикулярен ей). Прямоугольные треугольники $OMA$ и $ONC$ имеют равные гипотенузы $OA = OC = r$ и равные катеты $AM = CN = \frac{AB}{2}$. По гипотенузе и катету они равны, значит, $OM = ON$. ∎ Из $r^2 = d^2 + \left(\frac{a}{2}\right)^2$: меньшее расстояние $d$ означает более длинную хорду.

### Две секущие из внешней точки

**Теорема.** Если две секущие из точки $P$ пересекают окружность в точках $A, B$ и $C, D$, то
$$PA \cdot PB = PC \cdot PD.$$
*Доказательство.* $\triangle PAD \sim \triangle PCB$: угол при $P$ общий, а $\angle PDA = \angle PBC$ как вписанные углы на одну дугу $AC$. Значит, $\frac{PA}{PC} = \frac{PD}{PB}$. ∎

**Касательная и секущая.** Будем поворачивать одну секущую, пока она не станет касательной $PT$: точки $C$ и $D$ сольются в $T$, и теорема превратится в
$$PT^2 = PA \cdot PB.$$

### Одно число для каждой точки: степень точки

Все три теоремы (пересекающиеся хорды, две секущие, касательная и секущая) говорят одно и то же. Через точку $P$ проведём **любую** прямую, пересекающую окружность в точках $X$ и $Y$. Тогда $PX \cdot PY$ не зависит от прямой. Чтобы найти это число, возьмём прямую через центр: если $OP = d$, отрезки равны $r - d$ и $r + d$ (внутри) или $d - r$ и $d + r$ (снаружи), поэтому
$$PX \cdot PY = |r^2 - d^2|.$$
Это число называют **степенью точки** $P$ относительно окружности. Оно равно $0$ ровно на окружности.

*Пример.* Точка на расстоянии $3$ от центра окружности радиуса $5$: каждая хорда через неё делится на части с произведением $25 - 9 = 16$, например $2$ и $8$ или $4$ и $4$.`,
  ),

  "remarkable-points": th(
    r`### Proof: the perpendicular bisectors meet at one point

Let the perpendicular bisectors of $AB$ and $BC$ meet at $O$ (they are not parallel, since $AB$ and $BC$ are not). $O$ is on the first, so $OA = OB$; on the second, so $OB = OC$. Then $OA = OC$, so $O$ lies on the perpendicular bisector of $AC$ too. ∎ The same "two loci, then the third for free" argument proves the angle bisectors meet: the meeting point of two of them is equally far from all three sides, so it lies on the third bisector.

### Proof: the altitudes meet at one point

Through each vertex of $\triangle ABC$ draw the line parallel to the opposite side. These three lines form a bigger triangle $A_1B_1C_1$. The quadrilaterals $ABCB_1$ and $ABA_1C$ are parallelograms, so $B_1C = AB = CA_1$: $C$ is the **midpoint** of $A_1B_1$. Likewise $A$ and $B$ are midpoints of the other sides.

The altitude from $C$ is perpendicular to $AB$, hence to $A_1B_1$, and passes through its midpoint $C$. So the altitudes of $\triangle ABC$ are the **perpendicular bisectors** of $\triangle A_1B_1C_1$, and those meet at one point, as just proved. ∎

### The Euler line

In 1765 Leonhard Euler discovered that in every triangle the centroid $G$, the circumcentre $O$ and the orthocentre $H$ lie on **one line**, with
$$HG = 2\,GO.$$
Only the incentre is usually off this line. In an equilateral triangle all the points merge, and the line is not defined.

### The nine-point circle

One circle passes through nine special points of every triangle: the three midpoints of the sides, the three feet of the altitudes, and the three midpoints of the segments from the orthocentre to the vertices. Its radius is half the circumradius, and its centre is the midpoint of $OH$. It was found in the early 19th century and is one of the most beautiful facts of school-level geometry.

### Where this is used

The circumcentre answers "where to put a well equally far from three houses"; the incentre, "where to put a lamp equally far from three walls". The centroid is where a triangular plate balances.`,
    r`### Ապացույց. միջնուղղահայացները հատվում են մեկ կետում

Թող $AB$-ի և $BC$-ի միջնուղղահայացները հատվեն $O$ կետում (նրանք զուգահեռ չեն, քանի որ $AB$-ն և $BC$-ն զուգահեռ չեն)։ $O$-ն առաջինի վրա է, ուստի $OA = OB$, երկրորդի վրա է, ուստի $OB = OC$։ Այդ դեպքում $OA = OC$, ուստի $O$-ն $AC$-ի միջնուղղահայացի վրա էլ է։ ∎ Նույն «երկու երկրաչափական տեղ, իսկ երրորդն՝ անվճար» դատողությունն ապացուցում է, որ կիսորդները հատվում են. նրանցից երկուսի հատման կետը երեք կողմերից հավասարահեռ է, ուստի երրորդ կիսորդի վրա է։

### Ապացույց. բարձրությունները հատվում են մեկ կետում

$\triangle ABC$-ի յուրաքանչյուր գագաթով տանենք դիմացի կողմին զուգահեռ ուղիղ։ Այս երեք ուղիղները կազմում են ավելի մեծ $A_1B_1C_1$ եռանկյուն։ $ABCB_1$ և $ABA_1C$ քառանկյունները զուգահեռագծեր են, ուստի $B_1C = AB = CA_1$. $C$-ն $A_1B_1$-ի **միջնակետն** է։ Նույն կերպ $A$-ն և $B$-ն մյուս կողմերի միջնակետերն են։

$C$-ից տարված բարձրությունն ուղղահայաց է $AB$-ին, հետևաբար $A_1B_1$-ին, և անցնում է նրա $C$ միջնակետով։ Ուստի $\triangle ABC$-ի բարձրությունները $\triangle A_1B_1C_1$-ի **միջնուղղահայացներն** են, իսկ դրանք, ինչպես նոր ապացուցեցինք, հատվում են մեկ կետում։ ∎

### Էյլերի ուղիղը

1765 թվականին Լեոնարդ Էյլերը հայտնաբերեց, որ յուրաքանչյուր եռանկյան մեջ $G$ ծանրության կենտրոնը, $O$ արտագծյալ շրջանագծի կենտրոնը և $H$ բարձրությունների հատման կետը գտնվում են **մեկ ուղղի** վրա, ընդ որում
$$HG = 2\,GO$$
Սովորաբար այս ուղղից դուրս է միայն ներգծյալ շրջանագծի կենտրոնը։ Հավասարակողմ եռանկյան մեջ բոլոր կետերը համընկնում են, և ուղիղը որոշված չէ։

### Ինը կետի շրջանագիծը

Մեկ շրջանագիծ անցնում է յուրաքանչյուր եռանկյան ինը հատուկ կետով. կողմերի երեք միջնակետերով, բարձրությունների երեք հիմքերով և բարձրությունների հատման կետից գագաթներ տարված հատվածների երեք միջնակետերով։ Նրա շառավիղն արտագծյալ շրջանագծի շառավղի կեսն է, իսկ կենտրոնը՝ $OH$-ի միջնակետը։ Այն հայտնաբերվել է XIX դարի սկզբին և դպրոցական երկրաչափության ամենագեղեցիկ փաստերից է։

### Որտեղ է սա կիրառվում

Արտագծյալ շրջանագծի կենտրոնը պատասխանում է «որտեղ փորել ջրհորը երեք տնից հավասար հեռավորությամբ» հարցին, ներգծյալինը՝ «որտեղ կախել լամպը երեք պատից հավասար հեռավորությամբ» հարցին։ Ծանրության կենտրոնն այն կետն է, որտեղ եռանկյուն թիթեղը հավասարակշռվում է։`,
    r`### Доказательство: серединные перпендикуляры пересекаются в одной точке

Пусть серединные перпендикуляры к $AB$ и $BC$ пересекаются в точке $O$ (они не параллельны, так как $AB$ и $BC$ не параллельны). $O$ лежит на первом, поэтому $OA = OB$; на втором, поэтому $OB = OC$. Тогда $OA = OC$, значит, $O$ лежит и на серединном перпендикуляре к $AC$. ∎ То же рассуждение «два ГМТ, а третье даром» доказывает, что биссектрисы пересекаются: точка пересечения двух из них равноудалена от всех трёх сторон, значит, лежит на третьей биссектрисе.

### Доказательство: высоты пересекаются в одной точке

Через каждую вершину $\triangle ABC$ проведём прямую, параллельную противоположной стороне. Эти три прямые образуют больший треугольник $A_1B_1C_1$. Четырёхугольники $ABCB_1$ и $ABA_1C$ — параллелограммы, поэтому $B_1C = AB = CA_1$: $C$ — **середина** $A_1B_1$. Так же $A$ и $B$ — середины других сторон.

Высота из $C$ перпендикулярна $AB$, значит, и $A_1B_1$, и проходит через её середину $C$. Итак, высоты $\triangle ABC$ — **серединные перпендикуляры** $\triangle A_1B_1C_1$, а они, как только что доказано, пересекаются в одной точке. ∎

### Прямая Эйлера

В 1765 году Леонард Эйлер обнаружил, что в любом треугольнике центроид $G$, центр описанной окружности $O$ и ортоцентр $H$ лежат на **одной прямой**, причём
$$HG = 2\,GO.$$
Обычно вне этой прямой лежит только центр вписанной окружности. В равностороннем треугольнике все точки сливаются, и прямая не определена.

### Окружность девяти точек

Одна окружность проходит через девять особых точек любого треугольника: три середины сторон, три основания высот и три середины отрезков от ортоцентра до вершин. Её радиус — половина радиуса описанной окружности, а центр — середина $OH$. Её открыли в начале XIX века, и это один из красивейших фактов школьной геометрии.

### Где это применяют

Центр описанной окружности отвечает на вопрос «где выкопать колодец на равном расстоянии от трёх домов», центр вписанной — «где повесить лампу на равном расстоянии от трёх стен». Центроид — точка, где треугольная пластина балансирует.`,
  ),

  "inscribed-circumscribed": th(
    r`### Proof of $S = pr$

Join the incentre $I$ to the three vertices. This cuts the triangle into three triangles $IBC$, $ICA$, $IAB$ with bases $a$, $b$, $c$ and the **same** height $r$ (the radius to each point of contact is perpendicular to the side). So
$$S = \frac{1}{2}ar + \frac{1}{2}br + \frac{1}{2}cr = \frac{a + b + c}{2} \cdot r = pr.$$
The same proof works for **any** polygon with an inscribed circle: area equals semi-perimeter times radius. For a circle itself, thought of as a polygon with very many sides, this gives $S = \frac{1}{2} \cdot 2\pi r \cdot r = \pi r^2$.

### Tangent segments and the right-triangle formula

From each vertex the two tangent segments to the incircle are equal. If they are $x$, $y$, $z$ at $A$, $B$, $C$, then $y + z = a$, $x + z = b$, $x + y = c$, so $x = p - a$, $y = p - b$, $z = p - c$. In a right triangle with $\angle C = 90°$, the radii to the legs and the two tangent segments at $C$ form a square, so $z = r$ and
$$r = p - c = \frac{a + b - c}{2}.$$

### Proof: a quadrilateral inscribed in a circle has opposite angles adding up to $180°$

$\angle A$ and $\angle C$ are inscribed angles on the two arcs into which $B$ and $D$ split the circle. These arcs add up to $360°$, so the angles add up to $\frac{1}{2} \cdot 360° = 180°$. ∎

### Proof of Pitot's theorem: $a + c = b + d$ for a tangential quadrilateral

Each side is made of two tangent segments from its ends. Each vertex contributes the same tangent length to its two sides. Going round, $AB + CD$ and $BC + DA$ each contain every one of the four tangent lengths exactly once, so they are equal. ∎

### A formula for the circumradius

Draw the diameter $AD$ of the circumcircle and the altitude $AH$ to $BC$. $\angle ABD = 90°$ (on a diameter) and $\angle ADB = \angle ACB$ (same arc), so $\triangle ABD \sim \triangle AHC$. Then $\frac{AB}{AD} = \frac{AH}{AC}$, that is $bc = 2R \cdot h_a$. With $h_a = \frac{2S}{a}$:
$$R = \frac{abc}{4S}.$$`,
    r`### $S = pr$-ի ապացույցը

$I$ ներգծյալ կենտրոնը միացնենք երեք գագաթներին։ Եռանկյունը բաժանվում է $IBC$, $ICA$, $IAB$ երեք եռանկյան՝ $a$, $b$, $c$ հիմքերով և **նույն** $r$ բարձրությամբ (շոշափման յուրաքանչյուր կետ տարված շառավիղն ուղղահայաց է կողմին)։ Ուստի
$$S = \frac{1}{2}ar + \frac{1}{2}br + \frac{1}{2}cr = \frac{a + b + c}{2} \cdot r = pr$$
Նույն ապացույցն աշխատում է ներգծյալ շրջանագիծ ունեցող **ցանկացած** բազմանկյան համար. մակերեսը հավասար է կիսապարագիծ անգամ շառավիղ։ Շրջանի համար, որը կարելի է պատկերացնել որպես շատ կողմերով բազմանկյուն, սա տալիս է $S = \frac{1}{2} \cdot 2\pi r \cdot r = \pi r^2$։

### Շոշափողի հատվածները և ուղղանկյուն եռանկյան բանաձևը

Յուրաքանչյուր գագաթից ներգծյալ շրջանագծին տարված երկու շոշափող հատվածները հավասար են։ Եթե $A$, $B$, $C$ գագաթներում դրանք $x$, $y$, $z$ են, ապա $y + z = a$, $x + z = b$, $x + y = c$, ուստի $x = p - a$, $y = p - b$, $z = p - c$։ $\angle C = 90°$ ուղղանկյուն եռանկյան մեջ էջերին տարված շառավիղները և $C$-ի երկու շոշափող հատվածները կազմում են քառակուսի, ուստի $z = r$ և
$$r = p - c = \frac{a + b - c}{2}$$

### Ապացույց. շրջանագծին ներգծված քառանկյան հանդիպակաց անկյունների գումարը $180°$ է

$\angle A$-ն և $\angle C$-ն ներգծյալ անկյուններ են՝ հենված այն երկու աղեղներին, որոնց $B$-ն և $D$-ն բաժանում են շրջանագիծը։ Այդ աղեղների գումարը $360°$ է, ուստի անկյունների գումարը $\frac{1}{2} \cdot 360° = 180°$ է։ ∎

### Պիտոյի թեորեմի ապացույցը. արտագծյալ քառանկյան համար $a + c = b + d$

Յուրաքանչյուր կողմ կազմված է իր ծայրերից տարված երկու շոշափող հատվածից։ Յուրաքանչյուր գագաթ իր երկու կողմերին տալիս է նույն շոշափողի երկարությունը։ Շրջանցելով՝ $AB + CD$-ն և $BC + DA$-ն յուրաքանչյուրը պարունակում են չորս շոշափող երկարություններից յուրաքանչյուրը ճիշտ մեկ անգամ, ուստի հավասար են։ ∎

### Արտագծյալ շրջանագծի շառավղի բանաձևը

Տանենք արտագծյալ շրջանագծի $AD$ տրամագիծը և $BC$-ին տարված $AH$ բարձրությունը։ $\angle ABD = 90°$ (տրամագծին հենված), իսկ $\angle ADB = \angle ACB$ (նույն աղեղը), ուստի $\triangle ABD \sim \triangle AHC$։ Այդ դեպքում $\frac{AB}{AD} = \frac{AH}{AC}$, այսինքն՝ $bc = 2R \cdot h_a$։ $h_a = \frac{2S}{a}$-ով.
$$R = \frac{abc}{4S}$$`,
    r`### Доказательство $S = pr$

Соединим центр вписанной окружности $I$ с тремя вершинами. Треугольник разобьётся на три треугольника $IBC$, $ICA$, $IAB$ с основаниями $a$, $b$, $c$ и **одной** высотой $r$ (радиус в точку касания перпендикулярен стороне). Поэтому
$$S = \frac{1}{2}ar + \frac{1}{2}br + \frac{1}{2}cr = \frac{a + b + c}{2} \cdot r = pr.$$
То же доказательство годится для **любого** многоугольника со вписанной окружностью: площадь равна полупериметру, умноженному на радиус. Для самого круга, представленного как многоугольник с очень многими сторонами, это даёт $S = \frac{1}{2} \cdot 2\pi r \cdot r = \pi r^2$.

### Отрезки касательных и формула для прямоугольного треугольника

Из каждой вершины два отрезка касательных к вписанной окружности равны. Если при $A$, $B$, $C$ они равны $x$, $y$, $z$, то $y + z = a$, $x + z = b$, $x + y = c$, откуда $x = p - a$, $y = p - b$, $z = p - c$. В прямоугольном треугольнике с $\angle C = 90°$ радиусы к катетам и два отрезка касательных из $C$ образуют квадрат, поэтому $z = r$ и
$$r = p - c = \frac{a + b - c}{2}.$$

### Доказательство: у вписанного четырёхугольника сумма противоположных углов $180°$

$\angle A$ и $\angle C$ — вписанные углы, опирающиеся на две дуги, на которые $B$ и $D$ делят окружность. Эти дуги в сумме $360°$, значит, углы в сумме $\frac{1}{2} \cdot 360° = 180°$. ∎

### Доказательство теоремы Пито: $a + c = b + d$ для описанного четырёхугольника

Каждая сторона составлена из двух отрезков касательных из её концов. Каждая вершина даёт одинаковый отрезок касательной двум своим сторонам. Обходя четырёхугольник, видим, что $AB + CD$ и $BC + DA$ содержат каждый из четырёх отрезков касательных ровно по одному разу, значит, равны. ∎

### Формула радиуса описанной окружности

Проведём диаметр $AD$ описанной окружности и высоту $AH$ к $BC$. $\angle ABD = 90°$ (опирается на диаметр), а $\angle ADB = \angle ACB$ (одна дуга), поэтому $\triangle ABD \sim \triangle AHC$. Тогда $\frac{AB}{AD} = \frac{AH}{AC}$, то есть $bc = 2R \cdot h_a$. Подставив $h_a = \frac{2S}{a}$:
$$R = \frac{abc}{4S}.$$`,
  ),

  "circle-problems": th(
    r`### Two circles

Let circles with radii $R \ge r$ have centres $d$ apart.

| Position | Condition |
|---|---|
| one outside the other | $d > R + r$ |
| touching from outside | $d = R + r$ |
| crossing at two points | $R - r < d < R + r$ |
| touching from inside | $d = R - r$ |
| one inside the other | $d < R - r$ |

*Why:* the circles cross exactly when a triangle with sides $R$, $r$, $d$ exists (its third vertex is a common point), which is the triangle inequality. When the circles touch, the triangle is flat, so **the point of contact lies on the line of centres**.

### The common chord

If two circles cross at $A$ and $B$, both centres are equally far from $A$ and $B$, so both lie on the perpendicular bisector of $AB$. Hence **the line of centres is perpendicular to the common chord and bisects it.** This turns many two-circle problems into right triangles.

*Example.* Radii $13$ and $15$, centres $14$ apart. Let the common chord be $2h$ and let its midpoint be $x$ from the first centre. Then $h^2 = 169 - x^2 = 225 - (14 - x)^2$, so $28x = 140$, $x = 5$, $h = 12$: the common chord is $24$. (The triangle $13$–$14$–$15$ again.)

### A plan that works for most circle problems

1. Draw radii to every point of contact and to the ends of chords.
2. Mark every right angle these give (tangent, diameter, chord midpoint).
3. Mark equal inscribed angles on the same arc.
4. Look for isosceles triangles with two radii as sides.
5. If two chords or secants meet, write the power of the point.

### Common mistakes

- Taking the tangent segment from $P$ as $PO - r$. That is the distance from $P$ to the circle along the line of centres; the tangent is $\sqrt{PO^2 - r^2}$, which is longer.
- Forgetting that an inscribed angle can lie on either arc: an angle on the larger arc is $180°$ minus the one on the smaller arc.`,
    r`### Երկու շրջանագիծ

Թող $R \ge r$ շառավիղներով շրջանագծերի կենտրոնների հեռավորությունը լինի $d$։

| Դիրք | Պայման |
|---|---|
| մեկը մյուսից դուրս | $d > R + r$ |
| արտաքին շոշափում | $d = R + r$ |
| հատվում են երկու կետում | $R - r < d < R + r$ |
| ներքին շոշափում | $d = R - r$ |
| մեկը մյուսի ներսում | $d < R - r$ |

*Ինչու.* շրջանագծերը հատվում են ճիշտ այն դեպքում, երբ գոյություն ունի $R$, $r$, $d$ կողմերով եռանկյուն (նրա երրորդ գագաթն ընդհանուր կետն է), այսինքն՝ եռանկյան անհավասարությունը։ Երբ շրջանագծերը շոշափվում են, եռանկյունը հարթված է, ուստի **շոշափման կետը կենտրոնների ուղղի վրա է**։

### Ընդհանուր լարը

Եթե երկու շրջանագծերը հատվում են $A$ և $B$ կետերում, երկու կենտրոններն էլ $A$-ից և $B$-ից հավասարահեռ են, ուստի երկուսն էլ $AB$-ի միջնուղղահայացի վրա են։ Հետևաբար **կենտրոնների ուղիղն ուղղահայաց է ընդհանուր լարին և կիսում է այն**։ Սա երկու շրջանագծով շատ խնդիրներ վերածում է ուղղանկյուն եռանկյունների։

*Օրինակ։* Շառավիղները $13$ և $15$, կենտրոնների հեռավորությունը $14$։ Թող ընդհանուր լարը լինի $2h$, իսկ նրա միջնակետը առաջին կենտրոնից լինի $x$ հեռավորության վրա։ Այդ դեպքում $h^2 = 169 - x^2 = 225 - (14 - x)^2$, ուստի $28x = 140$, $x = 5$, $h = 12$. ընդհանուր լարը $24$ է։ (Դարձյալ $13$–$14$–$15$ եռանկյունը։)

### Պլան, որն աշխատում է շրջանագծի խնդիրների մեծ մասում

1. Տարեք շառավիղներ շոշափման յուրաքանչյուր կետին և լարերի ծայրերին։
2. Նշեք դրանցից ստացվող յուրաքանչյուր ուղիղ անկյուն (շոշափող, տրամագիծ, լարի միջնակետ)։
3. Նշեք նույն աղեղին հենված հավասար ներգծյալ անկյունները։
4. Փնտրեք հավասարասրուն եռանկյուններ, որոնց կողմերը երկու շառավիղ են։
5. Եթե երկու լար կամ հատող հատվում են, գրեք կետի աստիճանը։

### Տարածված սխալներ

- $P$-ից տարված շոշափողի հատվածը համարել $PO - r$։ Դա $P$-ից շրջանագիծ հեռավորությունն է կենտրոնների ուղղով. շոշափողը $\sqrt{PO^2 - r^2}$ է, որն ավելի երկար է։
- Մոռանալ, որ ներգծյալ անկյունը կարող է հենվել ցանկացած աղեղին. մեծ աղեղին հենված անկյունը $180°$ հանած փոքր աղեղին հենվածն է։`,
    r`### Две окружности

Пусть у окружностей радиусы $R \ge r$ и расстояние между центрами $d$.

| Положение | Условие |
|---|---|
| одна вне другой | $d > R + r$ |
| внешнее касание | $d = R + r$ |
| пересекаются в двух точках | $R - r < d < R + r$ |
| внутреннее касание | $d = R - r$ |
| одна внутри другой | $d < R - r$ |

*Почему:* окружности пересекаются ровно тогда, когда существует треугольник со сторонами $R$, $r$, $d$ (его третья вершина — общая точка), то есть по неравенству треугольника. При касании треугольник вырождается, поэтому **точка касания лежит на линии центров**.

### Общая хорда

Если две окружности пересекаются в точках $A$ и $B$, оба центра равноудалены от $A$ и $B$, значит, оба лежат на серединном перпендикуляре к $AB$. Поэтому **линия центров перпендикулярна общей хорде и делит её пополам.** Это сводит многие задачи о двух окружностях к прямоугольным треугольникам.

*Пример.* Радиусы $13$ и $15$, расстояние между центрами $14$. Пусть общая хорда $2h$, а её середина на расстоянии $x$ от первого центра. Тогда $h^2 = 169 - x^2 = 225 - (14 - x)^2$, откуда $28x = 140$, $x = 5$, $h = 12$: общая хорда равна $24$. (Снова треугольник $13$–$14$–$15$.)

### План, который работает в большинстве задач об окружности

1. Проведите радиусы во все точки касания и к концам хорд.
2. Отметьте все прямые углы, которые они дают (касательная, диаметр, середина хорды).
3. Отметьте равные вписанные углы на одну дугу.
4. Ищите равнобедренные треугольники с двумя радиусами в качестве сторон.
5. Если пересекаются две хорды или секущие, запишите степень точки.

### Частые ошибки

- Считать отрезок касательной из $P$ равным $PO - r$. Это расстояние от $P$ до окружности по линии центров; касательная равна $\sqrt{PO^2 - r^2}$ и длиннее.
- Забывать, что вписанный угол может опираться на любую из двух дуг: угол на большую дугу равен $180°$ минус угол на меньшую.`,
  ),
};
