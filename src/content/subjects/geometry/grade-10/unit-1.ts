import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Axioms of stereometry", "Տարածաչափության աքսիոմներ", "Аксиомы стереометрии"),
  summary: t("Planes in space, consequences of the axioms, first problems.", "Հարթություններ տարածության մեջ, աքսիոմների հետևանքներ, առաջին խնդիրներ։", "Плоскости в пространстве, следствия из аксиом, первые задачи."),
  lessons: [
    lesson(
      "stereometry-subject",
      ["The subject of stereometry; axioms", "Տարածաչափության առարկան, աքսիոմներ", "Предмет стереометрии; аксиомы"],
      {
        en: ["Name the basic objects of stereometry (point, line, plane) and the notation for them", "State the three axioms of stereometry and explain what each one guarantees", "Use the axioms to decide when points or lines lie in one plane"],
        hy: ["Անվանել տարածաչափության հիմնական օբյեկտները (կետ, ուղիղ, հարթություն) և դրանց նշանակումները", "Ձևակերպել տարածաչափության երեք աքսիոմները և բացատրել, թե ինչ է ապահովում յուրաքանչյուրը", "Աքսիոմներով որոշել, թե երբ են կետերը կամ ուղիղները մեկ հարթության մեջ"],
        ru: ["Называть основные объекты стереометрии (точка, прямая, плоскость) и их обозначения", "Формулировать три аксиомы стереометрии и объяснять, что гарантирует каждая", "С помощью аксиом определять, когда точки или прямые лежат в одной плоскости"],
      },
      {
        en: `## From the plane to space

Planimetry studied figures lying in one plane. **Stereometry** studies figures in space: cubes, pyramids, balls, but also the simplest ones, lines and planes placed in space in different ways.

The basic objects are **points** ($A, B, C, \\dots$), **lines** ($a, b, c, \\dots$) and **planes** ($\\alpha, \\beta, \\gamma, \\dots$). A plane is imagined as an unbounded flat surface, like a table top extended in all directions. In drawings a plane is shown as a parallelogram.

Notation: $A \\in \\alpha$ means the point $A$ lies in the plane $\\alpha$; $a \\subset \\alpha$ means the line $a$ lies in $\\alpha$; $a \\cap \\alpha = M$ means the line meets the plane at the point $M$.

## The axioms

All planimetry axioms still hold inside every plane. Three new axioms describe how planes behave in space.

**Axiom A1.** Through any three points not on one line there passes a plane, and only one.

**Axiom A2.** If two points of a line lie in a plane, then every point of the line lies in that plane.

**Axiom A3.** If two distinct planes have a common point, then they have a common line that contains all their common points.

**Example 1.** A tripod stands steadily on any floor, while a four-legged chair may wobble. Three leg ends (not on one line) determine a plane by A1; a fourth point need not lie in it.

**Example 2.** If a ruler touches a flat board at two points, the whole edge of the ruler lies against the board. That is A2: a line with two points in a plane lies in the plane.

**Example 3.** Two walls of a room meet along a vertical line (the corner). This is A3: two planes with a common point intersect in a line.

## First consequences in action

**Example 4.** Can a line and a plane have exactly two common points? No. If they have two common points, by A2 the whole line lies in the plane, so they have infinitely many common points. So a line either lies in a plane, meets it at one point, or has no common point with it.

**Example 5.** Points $A, B, C, D$ are such that $A, B, C$ are not collinear and $D \\notin (ABC)$. How many planes pass through at least three of them? Any three of the four points are non-collinear (if, say, $B, C, D$ were on one line, that line would lie in $(ABC)$ by A2 and so would $D$). By A1 each triple gives exactly one plane: $4$ planes.

**Example 6.** Lines $a$ and $b$ meet at $O$. Point $M \\in a$, $N \\in b$, $M, N \\ne O$. Show that the line $MN$ lies in the plane of $a$ and $b$. The points $O, M, N$ are non-collinear, so they fix a plane $\\alpha$ (A1). The line $a$ has points $O, M \\in \\alpha$, so $a \\subset \\alpha$ (A2); likewise $b \\subset \\alpha$. And $MN$ has two points in $\\alpha$, hence $MN \\subset \\alpha$.

**Example 7.** Three planes pairwise intersect. Must they have a common point? Not necessarily: the three side faces of a triangular prism intersect pairwise along three parallel lines and have no common point. But if two of the intersection lines meet at a point $P$, then $P$ lies in all three planes.

## Why axioms

Axioms are the statements we accept without proof; everything else in stereometry is derived from them and from planimetry. A1 says planes exist and are determined by three points; A2 says planes are "flat" (they contain whole lines); A3 says two planes cannot touch at an isolated point.

### Exercises

1. Write in symbols: the point $K$ lies in the plane $\\beta$; the line $m$ lies in $\\beta$; the line $n$ meets $\\beta$ at the point $T$.
2. How many planes pass through: (a) one point; (b) two points; (c) three non-collinear points?
3. Can two distinct planes have exactly one common point? Exactly three common points not on one line?
4. Points $A$ and $B$ lie in the plane $\\alpha$, and the point $C$ of the line $AB$ does not. Is this possible? Why?
5. Lines $a$ and $b$ meet at $O$. Prove that there is exactly one plane containing both lines.
6. Four points are given, no three collinear and not all in one plane. How many lines do they determine? How many planes?
7. The vertices $A, B, C$ of a triangle lie in the plane $\\alpha$. Prove that every point of the triangle, including the interior points, lies in $\\alpha$.
8. Planes $\\alpha$ and $\\beta$ intersect along the line $c$. The line $a \\subset \\alpha$ meets $\\beta$ at $M$. Prove that $M \\in c$.

### Answers

1. $K \\in \\beta$; $m \\subset \\beta$; $n \\cap \\beta = T$. 2. (a) infinitely many; (b) infinitely many (all planes through the line $AB$); (c) exactly one. 3. No: by A3 a common point implies a common line, so infinitely many common points. No: three non-collinear common points would make the planes coincide by A1. 4. No. $A, B \\in \\alpha$, so by A2 the whole line $AB$, including $C$, lies in $\\alpha$. 5. Take $M \\in a$, $N \\in b$ distinct from $O$; $O, M, N$ determine a plane by A1 and both lines lie in it by A2. Any plane containing $a$ and $b$ contains $O, M, N$, so it is the same plane. 6. $\\binom42 = 6$ lines, $\\binom43 = 4$ planes. 7. Each side has two vertices in $\\alpha$, so lies in $\\alpha$ (A2). An interior point $P$ lies on a segment from $A$ to a point $Q$ of side $BC$; $A, Q \\in \\alpha$, so the line $AQ$ and thus $P$ lie in $\\alpha$. 8. $M \\in a \\subset \\alpha$ and $M \\in \\beta$, so $M$ is a common point of $\\alpha$ and $\\beta$. By A3 all common points lie on $c$, so $M \\in c$.`,
        hy: `## Հարթությունից դեպի տարածություն

Հարթաչափությունն ուսումնասիրում էր մեկ հարթության մեջ գտնվող պատկերները։ **Տարածաչափությունն** ուսումնասիրում է պատկերները տարածության մեջ․ խորանարդներ, բուրգեր, գնդեր, բայց նաև ամենապարզները՝ տարածության մեջ տարբեր կերպ դասավորված ուղիղներ և հարթություններ։

Հիմնական օբյեկտներն են **կետերը** ($A, B, C, \\dots$), **ուղիղները** ($a, b, c, \\dots$) և **հարթությունները** ($\\alpha, \\beta, \\gamma, \\dots$)։ Հարթությունը պատկերացվում է որպես անսահման հարթ մակերևույթ, ինչպես բոլոր ուղղություններով շարունակված սեղանի երեսը։ Գծագրերում հարթությունը պատկերվում է զուգահեռագծի տեսքով։

Նշանակումներ․ $A \\in \\alpha$ նշանակում է $A$ կետը գտնվում է $\\alpha$ հարթության մեջ, $a \\subset \\alpha$՝ $a$ ուղիղը գտնվում է $\\alpha$-ում, $a \\cap \\alpha = M$՝ ուղիղը հարթությունը հատում է $M$ կետում։

## Աքսիոմները

Հարթաչափության բոլոր աքսիոմները շարունակում են գործել յուրաքանչյուր հարթության մեջ։ Երեք նոր աքսիոմ նկարագրում են, թե ինչպես են հարթություններն իրենց պահում տարածության մեջ։

**Աքսիոմ A1։** Մեկ ուղղի վրա չգտնվող ցանկացած երեք կետով անցնում է հարթություն, և միայն մեկը։

**Աքսիոմ A2։** Եթե ուղղի երկու կետ գտնվում են հարթության մեջ, ապա ուղղի բոլոր կետերը գտնվում են այդ հարթության մեջ։

**Աքսիոմ A3։** Եթե երկու տարբեր հարթություններ ունեն ընդհանուր կետ, ապա դրանք ունեն ընդհանուր ուղիղ, որը պարունակում է դրանց բոլոր ընդհանուր կետերը։

**Օրինակ 1։** Եռոտանին կայուն կանգնում է ցանկացած հատակի վրա, իսկ չորս ոտքով աթոռը կարող է երերալ։ Ոտքերի երեք ծայրերը (ոչ մեկ ուղղի վրա) A1-ով որոշում են հարթություն, չորրորդ կետը պարտադիր չէ, որ դրա մեջ լինի։

**Օրինակ 2։** Եթե քանոնը հարթ տախտակին հպվում է երկու կետով, քանոնի ամբողջ եզրը հպվում է տախտակին։ Դա A2-ն է․ հարթության մեջ երկու կետ ունեցող ուղիղը գտնվում է հարթության մեջ։

**Օրինակ 3։** Սենյակի երկու պատերը հանդիպում են ուղղաձիգ գծով (անկյունում)։ Դա A3-ն է․ ընդհանուր կետ ունեցող երկու հարթություններ հատվում են ուղղով։

## Առաջին հետևանքները գործողության մեջ

**Օրինակ 4։** Կարո՞ղ են ուղիղը և հարթությունն ունենալ ճիշտ երկու ընդհանուր կետ։ Ոչ։ Եթե դրանք ունեն երկու ընդհանուր կետ, A2-ով ամբողջ ուղիղը գտնվում է հարթության մեջ, ուստի ընդհանուր կետերն անվերջ շատ են։ Այսպիսով ուղիղը կամ գտնվում է հարթության մեջ, կամ հատում է այն մեկ կետում, կամ չունի ընդհանուր կետ նրա հետ։

**Օրինակ 5։** $A, B, C, D$ կետերն այնպիսին են, որ $A, B, C$-ը մեկ ուղղի վրա չեն և $D \\notin (ABC)$։ Քանի՞ հարթություն է անցնում դրանցից առնվազն երեքով։ Չորս կետերից ցանկացած երեքը մեկ ուղղի վրա չեն (եթե, ասենք, $B, C, D$-ը մեկ ուղղի վրա լինեին, այդ ուղիղը A2-ով կգտնվեր $(ABC)$-ում, և $D$-ն էլ նրա հետ)։ A1-ով յուրաքանչյուր եռյակ տալիս է ճիշտ մեկ հարթություն․ $4$ հարթություն։

**Օրինակ 6։** $a$ և $b$ ուղիղները հատվում են $O$-ում։ $M \\in a$, $N \\in b$, $M, N \\ne O$։ Ցույց տանք, որ $MN$ ուղիղը գտնվում է $a$-ի և $b$-ի հարթության մեջ։ $O, M, N$ կետերը մեկ ուղղի վրա չեն, ուստի որոշում են $\\alpha$ հարթություն (A1)։ $a$ ուղիղն ունի $O, M \\in \\alpha$ կետեր, ուստի $a \\subset \\alpha$ (A2), նույն կերպ $b \\subset \\alpha$։ Իսկ $MN$-ն ունի երկու կետ $\\alpha$-ում, հետևաբար $MN \\subset \\alpha$։

**Օրինակ 7։** Երեք հարթություններ զույգ-զույգ հատվում են։ Պարտադի՞ր է, որ ունենան ընդհանուր կետ։ Ոչ պարտադիր․ եռանկյուն պրիզմայի երեք կողմնային նիստերը զույգ-զույգ հատվում են երեք զուգահեռ ուղիղներով և ընդհանուր կետ չունեն։ Բայց եթե հատման ուղիղներից երկուսը հատվում են $P$ կետում, ապա $P$-ն գտնվում է բոլոր երեք հարթություններում։

## Ինչու աքսիոմներ

Աքսիոմներն այն պնդումներն են, որոնք ընդունում ենք առանց ապացույցի, տարածաչափության մնացած ամեն ինչ արտածվում է դրանցից և հարթաչափությունից։ A1-ն ասում է, որ հարթություններ գոյություն ունեն և որոշվում են երեք կետով, A2-ն՝ որ հարթությունները «հարթ» են (պարունակում են ամբողջ ուղիղներ), A3-ն՝ որ երկու հարթություններ չեն կարող հպվել մեկուսացված կետում։

### Վարժություններ

1. Գրեք նշաններով․ $K$ կետը գտնվում է $\\beta$ հարթության մեջ, $m$ ուղիղը գտնվում է $\\beta$-ում, $n$ ուղիղը $\\beta$-ն հատում է $T$ կետում։
2. Քանի՞ հարթություն է անցնում․ (ա) մեկ կետով, (բ) երկու կետով, (գ) մեկ ուղղի վրա չգտնվող երեք կետով։
3. Կարո՞ղ են երկու տարբեր հարթություններ ունենալ ճիշտ մեկ ընդհանուր կետ։ Մեկ ուղղի վրա չգտնվող ճիշտ երեք ընդհանուր կետ։
4. $A$ և $B$ կետերը գտնվում են $\\alpha$ հարթության մեջ, իսկ $AB$ ուղղի $C$ կետը՝ ոչ։ Հնարավո՞ր է դա։ Ինչու։
5. $a$ և $b$ ուղիղները հատվում են $O$-ում։ Ապացուցեք, որ երկու ուղիղները պարունակող ճիշտ մեկ հարթություն կա։
6. Տրված են չորս կետ, որոնցից ոչ մի երեքը մեկ ուղղի վրա չեն և ոչ բոլորը մեկ հարթության մեջ են։ Քանի՞ ուղիղ են դրանք որոշում։ Քանի՞ հարթություն։
7. Եռանկյան $A, B, C$ գագաթները գտնվում են $\\alpha$ հարթության մեջ։ Ապացուցեք, որ եռանկյան յուրաքանչյուր կետը, ներառյալ ներքին կետերը, գտնվում է $\\alpha$-ում։
8. $\\alpha$ և $\\beta$ հարթությունները հատվում են $c$ ուղղով։ $a \\subset \\alpha$ ուղիղը $\\beta$-ն հատում է $M$-ում։ Ապացուցեք, որ $M \\in c$։

### Պատասխաններ

1. $K \\in \\beta$, $m \\subset \\beta$, $n \\cap \\beta = T$։ 2. (ա) անվերջ շատ, (բ) անվերջ շատ ($AB$ ուղղով անցնող բոլոր հարթությունները), (գ) ճիշտ մեկ։ 3. Ոչ․ A3-ով ընդհանուր կետից հետևում է ընդհանուր ուղիղ, ուստի անվերջ շատ ընդհանուր կետեր։ Ոչ․ երեք ոչ համագիծ ընդհանուր կետերը A1-ով հարթությունները կհամընկնեցնեին։ 4. Ոչ։ $A, B \\in \\alpha$, ուստի A2-ով ամբողջ $AB$ ուղիղը, այդ թվում $C$-ն, գտնվում է $\\alpha$-ում։ 5. Վերցնենք $O$-ից տարբեր $M \\in a$, $N \\in b$, $O, M, N$-ը A1-ով որոշում են հարթություն, և երկու ուղիղները A2-ով գտնվում են նրա մեջ։ $a$-ն և $b$-ն պարունակող ցանկացած հարթություն պարունակում է $O, M, N$, ուստի նույն հարթությունն է։ 6. $\\binom42 = 6$ ուղիղ, $\\binom43 = 4$ հարթություն։ 7. Յուրաքանչյուր կողմ երկու գագաթ ունի $\\alpha$-ում, ուստի գտնվում է $\\alpha$-ում (A2)։ Ներքին $P$ կետը գտնվում է $A$-ից $BC$ կողմի $Q$ կետին տարված հատվածի վրա, $A, Q \\in \\alpha$, ուստի $AQ$ ուղիղը և դրա հետ $P$-ն գտնվում են $\\alpha$-ում։ 8. $M \\in a \\subset \\alpha$ և $M \\in \\beta$, ուստի $M$-ը $\\alpha$-ի և $\\beta$-ի ընդհանուր կետ է։ A3-ով բոլոր ընդհանուր կետերը գտնվում են $c$-ի վրա, ուստի $M \\in c$։`,
        ru: `## От плоскости к пространству

Планиметрия изучала фигуры, лежащие в одной плоскости. **Стереометрия** изучает фигуры в пространстве: кубы, пирамиды, шары, а также самые простые — прямые и плоскости, по-разному расположенные в пространстве.

Основные объекты — **точки** ($A, B, C, \\dots$), **прямые** ($a, b, c, \\dots$) и **плоскости** ($\\alpha, \\beta, \\gamma, \\dots$). Плоскость представляют как неограниченную ровную поверхность, подобную столу, продолженному во все стороны. На чертежах плоскость изображают параллелограммом.

Обозначения: $A \\in \\alpha$ — точка $A$ лежит в плоскости $\\alpha$; $a \\subset \\alpha$ — прямая $a$ лежит в $\\alpha$; $a \\cap \\alpha = M$ — прямая пересекает плоскость в точке $M$.

## Аксиомы

Все аксиомы планиметрии по-прежнему выполняются в каждой плоскости. Три новые аксиомы описывают, как плоскости ведут себя в пространстве.

**Аксиома A1.** Через любые три точки, не лежащие на одной прямой, проходит плоскость, и только одна.

**Аксиома A2.** Если две точки прямой лежат в плоскости, то все точки прямой лежат в этой плоскости.

**Аксиома A3.** Если две различные плоскости имеют общую точку, то они имеют общую прямую, на которой лежат все их общие точки.

**Пример 1.** Штатив на трёх ногах устойчиво стоит на любом полу, а стул на четырёх может качаться. Концы трёх ног (не на одной прямой) задают плоскость по A1; четвёртая точка не обязана в ней лежать.

**Пример 2.** Если линейка касается ровной доски в двух точках, то весь край линейки прилегает к доске. Это A2: прямая с двумя точками в плоскости лежит в плоскости.

**Пример 3.** Две стены комнаты встречаются по вертикальной линии (в углу). Это A3: две плоскости с общей точкой пересекаются по прямой.

## Первые следствия в действии

**Пример 4.** Могут ли прямая и плоскость иметь ровно две общие точки? Нет. Если общих точек две, то по A2 вся прямая лежит в плоскости, и общих точек бесконечно много. Значит, прямая либо лежит в плоскости, либо пересекает её в одной точке, либо не имеет с ней общих точек.

**Пример 5.** Точки $A, B, C, D$ таковы, что $A, B, C$ не лежат на одной прямой и $D \\notin (ABC)$. Сколько плоскостей проходит хотя бы через три из них? Любые три из четырёх точек не коллинеарны (если бы, скажем, $B, C, D$ лежали на одной прямой, эта прямая по A2 лежала бы в $(ABC)$, а с ней и $D$). По A1 каждая тройка даёт ровно одну плоскость: $4$ плоскости.

**Пример 6.** Прямые $a$ и $b$ пересекаются в $O$. Точка $M \\in a$, $N \\in b$, $M, N \\ne O$. Покажем, что прямая $MN$ лежит в плоскости прямых $a$ и $b$. Точки $O, M, N$ не коллинеарны, значит, задают плоскость $\\alpha$ (A1). Прямая $a$ имеет точки $O, M \\in \\alpha$, поэтому $a \\subset \\alpha$ (A2); аналогично $b \\subset \\alpha$. А у $MN$ две точки в $\\alpha$, значит, $MN \\subset \\alpha$.

**Пример 7.** Три плоскости попарно пересекаются. Обязательно ли у них есть общая точка? Не обязательно: три боковые грани треугольной призмы попарно пересекаются по трём параллельным прямым и общей точки не имеют. Но если две из прямых пересечения встречаются в точке $P$, то $P$ лежит во всех трёх плоскостях.

## Зачем аксиомы

Аксиомы — утверждения, которые принимают без доказательства; всё остальное в стереометрии выводится из них и из планиметрии. A1 говорит, что плоскости существуют и задаются тремя точками; A2 — что плоскости «ровные» (содержат целые прямые); A3 — что две плоскости не могут касаться в отдельной точке.

### Упражнения

1. Запишите символами: точка $K$ лежит в плоскости $\\beta$; прямая $m$ лежит в $\\beta$; прямая $n$ пересекает $\\beta$ в точке $T$.
2. Сколько плоскостей проходит через: (а) одну точку; (б) две точки; (в) три точки, не лежащие на одной прямой?
3. Могут ли две различные плоскости иметь ровно одну общую точку? Ровно три общие точки, не лежащие на одной прямой?
4. Точки $A$ и $B$ лежат в плоскости $\\alpha$, а точка $C$ прямой $AB$ — нет. Возможно ли это? Почему?
5. Прямые $a$ и $b$ пересекаются в $O$. Докажите, что существует ровно одна плоскость, содержащая обе прямые.
6. Даны четыре точки, никакие три не лежат на одной прямой и не все лежат в одной плоскости. Сколько прямых они задают? Сколько плоскостей?
7. Вершины $A, B, C$ треугольника лежат в плоскости $\\alpha$. Докажите, что каждая точка треугольника, включая внутренние, лежит в $\\alpha$.
8. Плоскости $\\alpha$ и $\\beta$ пересекаются по прямой $c$. Прямая $a \\subset \\alpha$ пересекает $\\beta$ в точке $M$. Докажите, что $M \\in c$.

### Ответы

1. $K \\in \\beta$; $m \\subset \\beta$; $n \\cap \\beta = T$. 2. (а) бесконечно много; (б) бесконечно много (все плоскости через прямую $AB$); (в) ровно одна. 3. Нет: по A3 из общей точки следует общая прямая, то есть бесконечно много общих точек. Нет: три неколлинеарные общие точки по A1 заставили бы плоскости совпасть. 4. Нет. $A, B \\in \\alpha$, значит, по A2 вся прямая $AB$, включая $C$, лежит в $\\alpha$. 5. Возьмём $M \\in a$, $N \\in b$, отличные от $O$; $O, M, N$ задают плоскость по A1, и обе прямые лежат в ней по A2. Любая плоскость, содержащая $a$ и $b$, содержит $O, M, N$, значит, это та же плоскость. 6. $\\binom42 = 6$ прямых, $\\binom43 = 4$ плоскости. 7. Каждая сторона имеет две вершины в $\\alpha$, значит, лежит в $\\alpha$ (A2). Внутренняя точка $P$ лежит на отрезке от $A$ до точки $Q$ стороны $BC$; $A, Q \\in \\alpha$, поэтому прямая $AQ$, а с ней и $P$, лежат в $\\alpha$. 8. $M \\in a \\subset \\alpha$ и $M \\in \\beta$, значит, $M$ — общая точка $\\alpha$ и $\\beta$. По A3 все общие точки лежат на $c$, поэтому $M \\in c$.`,
      },
      [
        q(t("Through three non-collinear points pass…", "Մեկ ուղղի վրա չգտնվող երեք կետով անցնում է…", "Через три точки, не лежащие на одной прямой, проходит…"), [t("exactly one plane", "ճիշտ մեկ հարթություն", "ровно одна плоскость"), t("infinitely many planes", "անվերջ շատ հարթություններ", "бесконечно много плоскостей"), t("no plane in general", "ընդհանուր դեպքում ոչ մի հարթություն", "в общем случае ни одной")], 0),
        q(t("If two points of a line lie in a plane, then…", "Եթե ուղղի երկու կետ գտնվում են հարթության մեջ, ապա…", "Если две точки прямой лежат в плоскости, то…"), [t("the line meets the plane only there", "ուղիղը հարթությունը հատում է միայն այնտեղ", "прямая пересекает плоскость только там"), t("the whole line lies in the plane", "ամբողջ ուղիղը գտնվում է հարթության մեջ", "вся прямая лежит в плоскости"), t("nothing follows", "ոչինչ չի հետևում", "ничего не следует")], 1),
        q(t("Two distinct planes with a common point…", "Ընդհանուր կետ ունեցող երկու տարբեր հարթություններ…", "Две различные плоскости с общей точкой…"), [t("have only that point in common", "ունեն միայն այդ ընդհանուր կետը", "имеют только эту общую точку"), t("intersect along a line", "հատվում են ուղղով", "пересекаются по прямой"), t("coincide", "համընկնում են", "совпадают")], 1),
        q(t("A line and a plane can have exactly…", "Ուղիղը և հարթությունը կարող են ունենալ ճիշտ…", "Прямая и плоскость могут иметь ровно…"), [t("two common points", "երկու ընդհանուր կետ", "две общие точки"), t("0, 1 or infinitely many common points", "0, 1 կամ անվերջ շատ ընդհանուր կետ", "0, 1 или бесконечно много общих точек"), t("three common points", "երեք ընդհանուր կետ", "три общие точки")], 1),
        q(t("Four points, no three collinear and not coplanar, determine…", "Չորս ոչ համահարթ կետեր, ոչ մի երեքը մեկ ուղղի վրա, որոշում են…", "Четыре точки, никакие три не коллинеарны и не компланарны, задают…"), [t("4 planes", "4 հարթություն", "4 плоскости"), t("6 planes", "6 հարթություն", "6 плоскостей"), t("1 plane", "1 հարթություն", "1 плоскость")], 0),
        q(t("The notation a ⊂ α means…", "a ⊂ α նշանակումը նշանակում է…", "Запись a ⊂ α означает…"), [t("line a meets plane α", "a ուղիղը հատում է α հարթությունը", "прямая a пересекает плоскость α"), t("line a lies in plane α", "a ուղիղը գտնվում է α հարթության մեջ", "прямая a лежит в плоскости α"), t("point a lies in α", "a կետը գտնվում է α-ում", "точка a лежит в α")], 1),
      ],
    ),
    lesson(
      "axiom-consequences",
      ["Consequences of the axioms", "Աքսիոմների հետևանքները", "Следствия из аксиом"],
      {
        en: ["State and prove the two theorems on planes through a line and a point and through two intersecting lines", "List the four ways to determine a plane uniquely", "Apply the consequences to prove that given points or lines are coplanar"],
        hy: ["Ձևակերպել և ապացուցել ուղղով ու կետով և երկու հատվող ուղիղներով անցնող հարթությունների մասին երկու թեորեմները", "Թվարկել հարթությունը միարժեք որոշելու չորս եղանակները", "Կիրառել հետևանքները՝ ապացուցելու, որ տրված կետերը կամ ուղիղները համահարթ են"],
        ru: ["Формулировать и доказывать две теоремы о плоскости через прямую и точку и через две пересекающиеся прямые", "Перечислять четыре способа однозначно задать плоскость", "Применять следствия для доказательства компланарности точек или прямых"],
      },
      {
        en: `## Theorem 1: a line and a point

**Theorem.** Through a line and a point not on it there passes a plane, and only one.

*Proof.* Let $M \\notin a$. Choose two points $P, Q$ on $a$. The points $M, P, Q$ are not collinear (otherwise $M$ would lie on $a$), so by A1 there is a unique plane $\\alpha$ through them. By A2 the line $a$ lies in $\\alpha$, because $P, Q \\in \\alpha$. Any plane through $a$ and $M$ contains $P, Q, M$ and so coincides with $\\alpha$ by A1. $\\blacksquare$

## Theorem 2: two intersecting lines

**Theorem.** Through two intersecting lines there passes a plane, and only one.

*Proof.* Let $a \\cap b = O$. Take $N \\in b$, $N \\ne O$. Then $N \\notin a$, so by Theorem 1 there is a unique plane $\\alpha$ through $a$ and $N$. The line $b$ has two points $O, N$ in $\\alpha$, so $b \\subset \\alpha$. Uniqueness: any plane containing $a$ and $b$ contains $a$ and $N$. $\\blacksquare$

## Four ways to fix a plane

A plane is uniquely determined by:
1. three non-collinear points (A1);
2. a line and a point not on it (Theorem 1);
3. two intersecting lines (Theorem 2);
4. two parallel lines (proved in the next unit).

**Example 1.** How many planes pass through two intersecting lines $a$ and $b$ and a point $M$ not in their plane? None: a plane containing $a$ and $b$ is their unique plane, and $M$ is not in it.

**Example 2.** The lines $AB$ and $CD$ intersect. Prove that $A, B, C, D$ lie in one plane. By Theorem 2 the lines lie in a unique plane $\\alpha$; all four points are on these lines, so they are in $\\alpha$.

**Example 3.** Three lines pass through one point $O$ and do not lie in one plane. How many planes do they determine pairwise? Each pair of intersecting lines gives one plane (Theorem 2), and the three planes are distinct, since the three lines are not coplanar: $3$ planes.

**Example 4.** Points $A, B, C, D$ are not coplanar. Can the lines $AB$ and $CD$ intersect? No: if they met, by Example 2 all four points would be coplanar. The lines $AB$ and $CD$ do not meet and are not parallel (parallel lines are coplanar). Such lines are called **skew**; they are studied in the next unit.

**Example 5.** In the triangle $ABC$ the point $M$ is the midpoint of $AB$ and $N$ the midpoint of $BC$. Prove that the line $MN$ lies in the plane $(ABC)$. $M \\in AB \\subset (ABC)$ and $N \\in BC \\subset (ABC)$, so $MN$ has two points in the plane and lies in it (A2).

**Example 6.** Given a plane $\\alpha$ and a line $a$ meeting it at $O$. The point $M \\in a$, $M \\ne O$, and $K \\in \\alpha$, $K \\ne O$. Does the line $MK$ lie in $\\alpha$? No: if it did, then $M \\in \\alpha$, and then $a$ would have two points $O, M$ in $\\alpha$ and lie in $\\alpha$, contradicting $a \\cap \\alpha = O$. So $MK$ meets $\\alpha$ only at $K$.

## Reasoning pattern

Most proofs in this unit repeat one move: find two points of a line in a plane and conclude with A2 that the whole line is there; or find three non-collinear points and conclude with A1 that there is only one plane. Write the axiom or theorem used at every step.

### Exercises

1. Prove that through a line there pass infinitely many planes.
2. The lines $a$ and $b$ intersect at $O$, the point $M \\in a$, $M \\ne O$. Prove that the plane $(b, M)$ coincides with the plane $(a, b)$.
3. Points $A, B, C, D$ lie in one plane. Must the lines $AB$ and $CD$ intersect?
4. The lines $AB$, $AC$ and $AD$ are not coplanar. Prove that no three of the points $B, C, D$ and $A$ are collinear.
5. Two lines $a$ and $b$ meet at $O$; points $A_1, A_2 \\in a$, $B_1, B_2 \\in b$, all different from $O$. Prove that the lines $A_1B_1$ and $A_2B_2$ lie in one plane.
6. How many planes are determined by five lines through one point, no three of which are coplanar?
7. Point $M$ does not lie in the plane of the triangle $ABC$. Prove that the lines $MA$, $MB$, $MC$ are pairwise different and not coplanar.
8. The line $a$ lies in the plane $\\alpha$ and the point $M \\in \\alpha$, $M \\notin a$. Prove that the plane through $a$ and $M$ is $\\alpha$ itself.

### Answers

1. For every point $M$ not on the line there is a plane through the line and $M$ (Theorem 1); different points not in one such plane give different planes. 2. $(b, M)$ contains $b$ and $M$; it also contains $O \\in b$, so it contains two points $O, M$ of $a$, hence $a$. It is a plane through $a$ and $b$, unique by Theorem 2. 3. No: they may be parallel or intersect; both are possible in a plane. 4. If, say, $B, C, A$ were collinear, the lines $AB$ and $AC$ would coincide; if $B, C, D$ were collinear, the plane $(A, BD)$ would contain all three lines. 5. All four points lie in the plane $(a, b)$, so both lines do (A2). 6. $\\binom52 = 10$ planes. 7. If $MA = MB$ then $A, B, M$ would be collinear, so $M \\in AB \\subset (ABC)$, contradiction; if the three lines were coplanar, their plane would contain $A, B, C$ and hence be $(ABC)$, so $M \\in (ABC)$, contradiction. 8. $\\alpha$ contains $a$ and $M$, and by Theorem 1 such a plane is unique.`,
        hy: `## Թեորեմ 1․ ուղիղ և կետ

**Թեորեմ։** Ուղղով և նրա վրա չգտնվող կետով անցնում է հարթություն, և միայն մեկը։

*Ապացույց։* Դիցուք $M \\notin a$։ Ընտրենք $a$-ի վրա երկու կետ՝ $P, Q$։ $M, P, Q$ կետերը մեկ ուղղի վրա չեն (այլապես $M$-ը կլիներ $a$-ի վրա), ուստի A1-ով դրանցով անցնում է միակ $\\alpha$ հարթությունը։ A2-ով $a$ ուղիղը գտնվում է $\\alpha$-ում, քանի որ $P, Q \\in \\alpha$։ $a$-ով և $M$-ով անցնող ցանկացած հարթություն պարունակում է $P, Q, M$ և A1-ով համընկնում է $\\alpha$-ի հետ։ $\\blacksquare$

## Թեորեմ 2․ երկու հատվող ուղիղ

**Թեորեմ։** Երկու հատվող ուղիղներով անցնում է հարթություն, և միայն մեկը։

*Ապացույց։* Դիցուք $a \\cap b = O$։ Վերցնենք $N \\in b$, $N \\ne O$։ Այդ դեպքում $N \\notin a$, ուստի թեորեմ 1-ով $a$-ով և $N$-ով անցնում է միակ $\\alpha$ հարթությունը։ $b$ ուղիղն ունի երկու կետ՝ $O, N$, $\\alpha$-ում, ուստի $b \\subset \\alpha$։ Միակություն․ $a$-ն և $b$-ն պարունակող ցանկացած հարթություն պարունակում է $a$-ն և $N$-ը։ $\\blacksquare$

## Հարթությունը որոշելու չորս եղանակ

Հարթությունը միարժեք որոշվում է․
1. մեկ ուղղի վրա չգտնվող երեք կետով (A1),
2. ուղղով և նրա վրա չգտնվող կետով (թեորեմ 1),
3. երկու հատվող ուղիղներով (թեորեմ 2),
4. երկու զուգահեռ ուղիղներով (ապացուցվում է հաջորդ բաժնում)։

**Օրինակ 1։** Քանի՞ հարթություն է անցնում $a$ և $b$ հատվող ուղիղներով և դրանց հարթության մեջ չգտնվող $M$ կետով։ Ոչ մեկը․ $a$-ն և $b$-ն պարունակող հարթությունը դրանց միակ հարթությունն է, իսկ $M$-ը նրա մեջ չէ։

**Օրինակ 2։** $AB$ և $CD$ ուղիղները հատվում են։ Ապացուցենք, որ $A, B, C, D$-ը մեկ հարթության մեջ են։ Թեորեմ 2-ով ուղիղները գտնվում են միակ $\\alpha$ հարթության մեջ, բոլոր չորս կետերն այդ ուղիղների վրա են, ուստի $\\alpha$-ում են։

**Օրինակ 3։** Երեք ուղիղ անցնում են մեկ $O$ կետով և մեկ հարթության մեջ չեն։ Քանի՞ հարթություն են դրանք զույգ-զույգ որոշում։ Հատվող ուղիղների յուրաքանչյուր զույգ տալիս է մեկ հարթություն (թեորեմ 2), և երեք հարթությունները տարբեր են, քանի որ երեք ուղիղները համահարթ չեն․ $3$ հարթություն։

**Օրինակ 4։** $A, B, C, D$ կետերը համահարթ չեն։ Կարո՞ղ են $AB$ և $CD$ ուղիղները հատվել։ Ոչ․ եթե հատվեին, օրինակ 2-ով բոլոր չորս կետերը համահարթ կլինեին։ $AB$ և $CD$ ուղիղները չեն հատվում և զուգահեռ չեն (զուգահեռ ուղիղները համահարթ են)։ Այդպիսի ուղիղները կոչվում են **խաչվող**, դրանք ուսումնասիրվում են հաջորդ բաժնում։

**Օրինակ 5։** $ABC$ եռանկյան մեջ $M$-ը $AB$-ի միջնակետն է, $N$-ը՝ $BC$-ի։ Ապացուցենք, որ $MN$ ուղիղը գտնվում է $(ABC)$ հարթության մեջ։ $M \\in AB \\subset (ABC)$ և $N \\in BC \\subset (ABC)$, ուստի $MN$-ն ունի երկու կետ հարթության մեջ և գտնվում է նրա մեջ (A2)։

**Օրինակ 6։** Տրված են $\\alpha$ հարթությունը և այն $O$-ում հատող $a$ ուղիղը։ $M \\in a$, $M \\ne O$, և $K \\in \\alpha$, $K \\ne O$։ Գտնվո՞ւմ է $MK$ ուղիղը $\\alpha$-ում։ Ոչ․ եթե գտնվեր, ապա $M \\in \\alpha$, և $a$-ն կունենար երկու կետ՝ $O, M$, $\\alpha$-ում ու կգտնվեր $\\alpha$-ում, ինչը հակասում է $a \\cap \\alpha = O$-ին։ Ուստի $MK$-ն $\\alpha$-ն հատում է միայն $K$-ում։

## Դատողության օրինաչափություն

Այս բաժնի ապացույցների մեծ մասը կրկնում է մեկ քայլ․ գտնել ուղղի երկու կետ հարթության մեջ և A2-ով եզրակացնել, որ ամբողջ ուղիղն այնտեղ է, կամ գտնել երեք ոչ համագիծ կետ և A1-ով եզրակացնել, որ հարթությունը միակն է։ Յուրաքանչյուր քայլում գրեք օգտագործված աքսիոմը կամ թեորեմը։

### Վարժություններ

1. Ապացուցեք, որ ուղղով անցնում են անվերջ շատ հարթություններ։
2. $a$ և $b$ ուղիղները հատվում են $O$-ում, $M \\in a$, $M \\ne O$։ Ապացուցեք, որ $(b, M)$ հարթությունը համընկնում է $(a, b)$ հարթության հետ։
3. $A, B, C, D$ կետերը մեկ հարթության մեջ են։ Պարտադի՞ր է, որ $AB$ և $CD$ ուղիղները հատվեն։
4. $AB$, $AC$ և $AD$ ուղիղները համահարթ չեն։ Ապացուցեք, որ $B, C, D$ և $A$ կետերից ոչ մի երեքը մեկ ուղղի վրա չեն։
5. $a$ և $b$ ուղիղները հատվում են $O$-ում, $A_1, A_2 \\in a$, $B_1, B_2 \\in b$, բոլորը տարբեր են $O$-ից։ Ապացուցեք, որ $A_1B_1$ և $A_2B_2$ ուղիղները մեկ հարթության մեջ են։
6. Քանի՞ հարթություն են որոշում մեկ կետով անցնող հինգ ուղիղները, որոնցից ոչ մի երեքը համահարթ չեն։
7. $M$ կետը չի գտնվում $ABC$ եռանկյան հարթության մեջ։ Ապացուցեք, որ $MA$, $MB$, $MC$ ուղիղները զույգ-զույգ տարբեր են և համահարթ չեն։
8. $a$ ուղիղը գտնվում է $\\alpha$ հարթության մեջ, $M \\in \\alpha$, $M \\notin a$։ Ապացուցեք, որ $a$-ով և $M$-ով անցնող հարթությունը հենց $\\alpha$-ն է։

### Պատասխաններ

1. Ուղղի վրա չգտնվող յուրաքանչյուր $M$ կետի համար կա ուղղով և $M$-ով անցնող հարթություն (թեորեմ 1), այդպիսի մեկ հարթության մեջ չգտնվող տարբեր կետերը տալիս են տարբեր հարթություններ։ 2. $(b, M)$-ը պարունակում է $b$-ն և $M$-ը, պարունակում է նաև $O \\in b$, ուստի պարունակում է $a$-ի երկու կետ՝ $O, M$, հետևաբար $a$-ն։ Այն $a$-ով և $b$-ով անցնող հարթություն է, որը թեորեմ 2-ով միակն է։ 3. Ոչ․ դրանք կարող են զուգահեռ լինել կամ հատվել, հարթության մեջ երկուսն էլ հնարավոր են։ 4. Եթե, ասենք, $B, C, A$-ը մեկ ուղղի վրա լինեին, $AB$ և $AC$ ուղիղները կհամընկնեին, եթե $B, C, D$-ը մեկ ուղղի վրա լինեին, $(A, BD)$ հարթությունը կպարունակեր բոլոր երեք ուղիղները։ 5. Բոլոր չորս կետերը գտնվում են $(a, b)$ հարթության մեջ, ուստի երկու ուղիղներն էլ (A2)։ 6. $\\binom52 = 10$ հարթություն։ 7. Եթե $MA = MB$, ապա $A, B, M$-ը մեկ ուղղի վրա կլինեին, ուստի $M \\in AB \\subset (ABC)$՝ հակասություն, եթե երեք ուղիղները համահարթ լինեին, դրանց հարթությունը կպարունակեր $A, B, C$ և կլիներ $(ABC)$, ուստի $M \\in (ABC)$՝ հակասություն։ 8. $\\alpha$-ն պարունակում է $a$-ն և $M$-ը, իսկ թեորեմ 1-ով այդպիսի հարթությունը միակն է։`,
        ru: `## Теорема 1: прямая и точка

**Теорема.** Через прямую и не лежащую на ней точку проходит плоскость, и только одна.

*Доказательство.* Пусть $M \\notin a$. Выберем на $a$ две точки $P, Q$. Точки $M, P, Q$ не коллинеарны (иначе $M$ лежала бы на $a$), поэтому по A1 через них проходит единственная плоскость $\\alpha$. По A2 прямая $a$ лежит в $\\alpha$, так как $P, Q \\in \\alpha$. Любая плоскость через $a$ и $M$ содержит $P, Q, M$ и по A1 совпадает с $\\alpha$. $\\blacksquare$

## Теорема 2: две пересекающиеся прямые

**Теорема.** Через две пересекающиеся прямые проходит плоскость, и только одна.

*Доказательство.* Пусть $a \\cap b = O$. Возьмём $N \\in b$, $N \\ne O$. Тогда $N \\notin a$, и по теореме 1 через $a$ и $N$ проходит единственная плоскость $\\alpha$. Прямая $b$ имеет две точки $O, N$ в $\\alpha$, значит, $b \\subset \\alpha$. Единственность: любая плоскость, содержащая $a$ и $b$, содержит $a$ и $N$. $\\blacksquare$

## Четыре способа задать плоскость

Плоскость однозначно задаётся:
1. тремя точками, не лежащими на одной прямой (A1);
2. прямой и не лежащей на ней точкой (теорема 1);
3. двумя пересекающимися прямыми (теорема 2);
4. двумя параллельными прямыми (доказывается в следующем разделе).

**Пример 1.** Сколько плоскостей проходит через пересекающиеся прямые $a$ и $b$ и точку $M$, не лежащую в их плоскости? Ни одной: плоскость, содержащая $a$ и $b$, — их единственная плоскость, а $M$ в ней не лежит.

**Пример 2.** Прямые $AB$ и $CD$ пересекаются. Докажем, что $A, B, C, D$ лежат в одной плоскости. По теореме 2 прямые лежат в единственной плоскости $\\alpha$; все четыре точки лежат на этих прямых, значит, в $\\alpha$.

**Пример 3.** Три прямые проходят через одну точку $O$ и не лежат в одной плоскости. Сколько плоскостей они задают попарно? Каждая пара пересекающихся прямых даёт одну плоскость (теорема 2), и три плоскости различны, так как прямые не компланарны: $3$ плоскости.

**Пример 4.** Точки $A, B, C, D$ не компланарны. Могут ли прямые $AB$ и $CD$ пересекаться? Нет: если бы они пересекались, по примеру 2 все четыре точки были бы компланарны. Прямые $AB$ и $CD$ не пересекаются и не параллельны (параллельные прямые компланарны). Такие прямые называют **скрещивающимися**; их изучают в следующем разделе.

**Пример 5.** В треугольнике $ABC$ точка $M$ — середина $AB$, $N$ — середина $BC$. Докажем, что прямая $MN$ лежит в плоскости $(ABC)$. $M \\in AB \\subset (ABC)$ и $N \\in BC \\subset (ABC)$, значит, у $MN$ две точки в плоскости, и она лежит в ней (A2).

**Пример 6.** Даны плоскость $\\alpha$ и прямая $a$, пересекающая её в $O$. Точка $M \\in a$, $M \\ne O$, и $K \\in \\alpha$, $K \\ne O$. Лежит ли прямая $MK$ в $\\alpha$? Нет: иначе $M \\in \\alpha$, и тогда $a$ имела бы две точки $O, M$ в $\\alpha$ и лежала бы в $\\alpha$, что противоречит $a \\cap \\alpha = O$. Значит, $MK$ пересекает $\\alpha$ только в $K$.

## Схема рассуждений

Большинство доказательств в этом разделе повторяют один ход: найти две точки прямой в плоскости и по A2 заключить, что вся прямая там; или найти три неколлинеарные точки и по A1 заключить, что плоскость единственна. На каждом шаге записывайте использованную аксиому или теорему.

### Упражнения

1. Докажите, что через прямую проходит бесконечно много плоскостей.
2. Прямые $a$ и $b$ пересекаются в $O$, точка $M \\in a$, $M \\ne O$. Докажите, что плоскость $(b, M)$ совпадает с плоскостью $(a, b)$.
3. Точки $A, B, C, D$ лежат в одной плоскости. Обязательно ли прямые $AB$ и $CD$ пересекаются?
4. Прямые $AB$, $AC$ и $AD$ не компланарны. Докажите, что никакие три из точек $B, C, D$ и $A$ не коллинеарны.
5. Прямые $a$ и $b$ пересекаются в $O$; точки $A_1, A_2 \\in a$, $B_1, B_2 \\in b$, все отличны от $O$. Докажите, что прямые $A_1B_1$ и $A_2B_2$ лежат в одной плоскости.
6. Сколько плоскостей задают пять прямых, проходящих через одну точку, никакие три из которых не компланарны?
7. Точка $M$ не лежит в плоскости треугольника $ABC$. Докажите, что прямые $MA$, $MB$, $MC$ попарно различны и не компланарны.
8. Прямая $a$ лежит в плоскости $\\alpha$, точка $M \\in \\alpha$, $M \\notin a$. Докажите, что плоскость через $a$ и $M$ — это сама $\\alpha$.

### Ответы

1. Для каждой точки $M$ вне прямой есть плоскость через прямую и $M$ (теорема 1); разные точки, не лежащие в одной такой плоскости, дают разные плоскости. 2. $(b, M)$ содержит $b$ и $M$; она содержит и $O \\in b$, то есть две точки $O, M$ прямой $a$, значит, и $a$. Это плоскость через $a$ и $b$, единственная по теореме 2. 3. Нет: они могут быть параллельны или пересекаться; в плоскости возможно и то и другое. 4. Если бы, скажем, $B, C, A$ были коллинеарны, прямые $AB$ и $AC$ совпали бы; если бы $B, C, D$ были коллинеарны, плоскость $(A, BD)$ содержала бы все три прямые. 5. Все четыре точки лежат в плоскости $(a, b)$, значит, и обе прямые (A2). 6. $\\binom52 = 10$ плоскостей. 7. Если $MA = MB$, то $A, B, M$ коллинеарны, и $M \\in AB \\subset (ABC)$ — противоречие; если бы три прямые были компланарны, их плоскость содержала бы $A, B, C$ и была бы $(ABC)$, тогда $M \\in (ABC)$ — противоречие. 8. $\\alpha$ содержит $a$ и $M$, а по теореме 1 такая плоскость единственна.`,
      },
      [
        q(t("Through a line and a point not on it pass…", "Ուղղով և նրա վրա չգտնվող կետով անցնում է…", "Через прямую и не лежащую на ней точку проходит…"), [t("exactly one plane", "ճիշտ մեկ հարթություն", "ровно одна плоскость"), t("two planes", "երկու հարթություն", "две плоскости"), t("infinitely many planes", "անվերջ շատ հարթություններ", "бесконечно много плоскостей")], 0),
        q(t("Two intersecting lines…", "Երկու հատվող ուղիղներ…", "Две пересекающиеся прямые…"), [t("lie in exactly one plane", "գտնվում են ճիշտ մեկ հարթության մեջ", "лежат ровно в одной плоскости"), t("may not be coplanar", "կարող են համահարթ չլինել", "могут быть не компланарны"), t("lie in infinitely many planes", "գտնվում են անվերջ շատ հարթություններում", "лежат в бесконечно многих плоскостях")], 0),
        q(t("If lines AB and CD intersect, the points A, B, C, D are…", "Եթե AB և CD ուղիղները հատվում են, A, B, C, D կետերը…", "Если прямые AB и CD пересекаются, точки A, B, C, D…"), [t("collinear", "մեկ ուղղի վրա են", "коллинеарны"), t("coplanar", "համահարթ են", "компланарны"), t("not coplanar", "համահարթ չեն", "не компланарны")], 1),
        q(t("Three lines through one point, not coplanar, determine…", "Մեկ կետով անցնող երեք ոչ համահարթ ուղիղները որոշում են…", "Три прямые через одну точку, не компланарные, задают…"), [t("1 plane", "1 հարթություն", "1 плоскость"), t("3 planes", "3 հարթություն", "3 плоскости"), t("6 planes", "6 հարթություն", "6 плоскостей")], 1),
        q(t("Through a single line pass…", "Մեկ ուղղով անցնում են…", "Через одну прямую проходит…"), [t("exactly one plane", "ճիշտ մեկ հարթություն", "ровно одна плоскость"), t("infinitely many planes", "անվերջ շատ հարթություններ", "бесконечно много плоскостей"), t("no plane", "ոչ մի հարթություն", "ни одной плоскости")], 1),
        q(t("If A, B, C, D are not coplanar, lines AB and CD…", "Եթե A, B, C, D-ը համահարթ չեն, AB և CD ուղիղները…", "Если A, B, C, D не компланарны, прямые AB и CD…"), [t("intersect", "հատվում են", "пересекаются"), t("are parallel", "զուգահեռ են", "параллельны"), t("neither intersect nor are parallel", "ոչ հատվում են, ոչ զուգահեռ են", "не пересекаются и не параллельны")], 2),
      ],
    ),
    lesson(
      "drawing-solids",
      ["Drawing spatial figures", "Տարածական պատկերների գծագրում", "Изображение пространственных фигур"],
      {
        en: ["Explain parallel projection and the properties it preserves and does not preserve", "Draw a cube, a parallelepiped, a prism, a pyramid and a plane in the standard way with hidden edges dashed", "Read a three-dimensional drawing: recognise which points are in which plane and which lines really intersect"],
        hy: ["Բացատրել զուգահեռ պրոյեկտումը և այն հատկությունները, որոնք այն պահպանում է և չի պահպանում", "Ստանդարտ եղանակով գծել խորանարդ, զուգահեռանիստ, պրիզմա, բուրգ և հարթություն՝ անտեսանելի կողերը կետագծով", "Կարդալ տարածական գծագիրը․ ճանաչել, թե որ կետերն են որ հարթության մեջ և որ ուղիղներն են իրոք հատվում"],
        ru: ["Объяснять параллельное проектирование и свойства, которые оно сохраняет и не сохраняет", "Стандартно изображать куб, параллелепипед, призму, пирамиду и плоскость, невидимые рёбра — штриховой линией", "Читать пространственный чертёж: определять, какие точки лежат в какой плоскости и какие прямые действительно пересекаются"],
      },
      {
        en: `## Parallel projection

A spatial figure is drawn on a flat sheet by **parallel projection**: through every point of the figure we draw a line parallel to a fixed direction and mark where it meets the drawing plane. The shadow of an object in sunlight is a parallel projection.

Properties of parallel projection (for lines not parallel to the projection direction):

- a segment is projected to a segment, a line to a line;
- parallel segments are projected to parallel (or collinear) segments;
- the ratio of lengths of parallel segments is preserved, in particular a midpoint goes to a midpoint;
- lengths and angles in general are **not** preserved: a right angle may look acute or obtuse, a circle looks like an ellipse.

**Example 1.** A square face of a cube seen at an angle is drawn as a parallelogram. Its diagonals are still drawn as diagonals of the parallelogram and still bisect each other, because midpoints are preserved.

**Example 2.** An equilateral triangle may be drawn as any triangle. The medians, however, still meet at a point dividing each in the ratio $2 : 1$, since ratios on a line are preserved.

**Example 3.** A circle is drawn as an ellipse; a diameter and the tangents at its ends remain parallel, because parallelism is preserved.

## Standard drawings

- **Cube and rectangular parallelepiped:** draw the front face as a square or rectangle, the back face as an equal figure shifted up and to the right by about half the side, then join corresponding vertices. The three edges hidden behind the body are dashed.
- **Prism:** draw the lower base as a parallelogram or a flattened polygon, lift every vertex by the same vertical segment, join the tops.
- **Pyramid:** draw the base as a flattened polygon, choose the apex above, join it to every base vertex. For a regular pyramid the apex is above the centre of the base.
- **Plane:** a parallelogram; a line in the plane is drawn inside it, a line meeting the plane is drawn with its visible part solid and the part behind the plane dashed.
- **Tetrahedron:** a triangle with a fourth point above or inside it, joined to all three vertices; one edge is dashed.

## Reading a drawing

The rules of the axioms, not the picture, decide what intersects what. Two lines drawn crossing each other actually intersect only if they lie in one plane.

**Example 4.** In the cube $ABCDA_1B_1C_1D_1$ the diagonals $AC_1$ and $BD_1$ cross in the drawing. Do they intersect? Yes: $A, C_1, B, D_1$ lie in the plane $ABC_1D_1$ (a rectangle, since $AB \\parallel D_1C_1$ and $AB = D_1C_1$), so the lines are coplanar and meet at the centre of the cube.

**Example 5.** In the same cube the edges $AB$ and $C_1D_1$ look parallel; they are, because $AB \\parallel DC$ (base) and $DC \\parallel D_1C_1$ (face). The edges $AB$ and $CC_1$ do not meet and are not parallel: they are skew, although in some drawings they seem to cross.

**Example 6.** The point $M$ lies on the edge $SA$ of the pyramid $SABC$ and $N$ on the edge $SB$. The line $MN$ lies in the face $SAB$. If the drawing shows it crossing the edge $SC$, that is an illusion: $SC$ meets the plane $SAB$ only at $S$.

**Example 7.** Which points of the cube lie in the plane $BDD_1$? Exactly the vertices $B, D, D_1, B_1$: the plane contains the parallel edges $BB_1$ and $DD_1$. The vertex $A$ is not in it, so the diagonal $AC$ meets this plane at one point, the centre $O$ of the base.

## Common drawing mistakes

- Making the back face of a cube smaller (that is central, not parallel projection).
- Forgetting to dash hidden edges, so the figure cannot be read.
- Drawing the apex of a regular pyramid off the centre of the base.
- Marking a point of intersection of two skew lines.

### Exercises

1. Which of the following are preserved by parallel projection: length of a segment, parallelism, ratio of segments on one line, size of an angle, midpoint of a segment?
2. Draw a cube $ABCDA_1B_1C_1D_1$ and mark with dashes the hidden edges when the front face is $ABB_1A_1$.
3. Draw a regular quadrilateral pyramid $SABCD$ with its height $SO$. Where is $O$?
4. Draw a triangular prism $ABCA_1B_1C_1$ and its section by the plane $AB_1C$. What figure is the section?
5. In the cube $ABCDA_1B_1C_1D_1$, do the lines $AB_1$ and $DC_1$ intersect? Are they parallel?
6. In the cube, do the lines $AB_1$ and $BC_1$ intersect? Justify.
7. $M$ is the midpoint of $SA$ and $N$ the midpoint of $SB$ in the pyramid $SABC$. Prove that $MN \\parallel AB$ and find $MN$ if $AB = 8$.
8. The parallel projection of a triangle $ABC$ is the triangle $A'B'C'$. Where is the projection of the centroid of $ABC$?

### Answers

1. Preserved: parallelism, ratio of segments on one line, midpoint. Not preserved: length, angle. 2. Dashed: $DC$, $DA$, $DD_1$ (the three edges at the back vertex $D$). 3. $O$ is the intersection of the diagonals $AC$ and $BD$ of the base. 4. A triangle $AB_1C$ with $AB_1$, $B_1C$ face diagonals and $AC$ a base edge. 5. They are parallel: $AB_1C_1D$ is a parallelogram since $AD \\parallel B_1C_1$ and $AD = B_1C_1$, hence $AB_1 \\parallel DC_1$. 6. No: $A, B_1, B, C_1$ are not coplanar (the plane $ABB_1$ is the front face, and $C_1$ is not in it), so the lines are skew. 7. $MN$ is a midline of the triangle $SAB$, so $MN \\parallel AB$ and $MN = 4$. 8. At the centroid of $A'B'C'$: medians go to medians (midpoints are preserved) and the $2 : 1$ ratio is preserved.`,
        hy: `## Զուգահեռ պրոյեկտում

Տարածական պատկերը հարթ թերթի վրա գծվում է **զուգահեռ պրոյեկտումով**․ պատկերի յուրաքանչյուր կետով տանում ենք ֆիքսված ուղղությանը զուգահեռ ուղիղ և նշում, որտեղ է այն հատում գծագրի հարթությունը։ Առարկայի ստվերն արևի լույսի ներքո զուգահեռ պրոյեկցիա է։

Զուգահեռ պրոյեկտման հատկությունները (պրոյեկտման ուղղությանը զուգահեռ չլինող ուղիղների համար)․

- հատվածը պրոյեկտվում է հատվածի, ուղիղը՝ ուղղի,
- զուգահեռ հատվածները պրոյեկտվում են զուգահեռ (կամ մեկ ուղղի վրա գտնվող) հատվածների,
- զուգահեռ հատվածների երկարությունների հարաբերությունը պահպանվում է, մասնավորապես միջնակետն անցնում է միջնակետի,
- երկարությունները և անկյուններն ընդհանուր դեպքում **չեն** պահպանվում․ ուղիղ անկյունը կարող է երևալ սուր կամ բութ, շրջանագիծն երևում է էլիպսի տեսքով։

**Օրինակ 1։** Խորանարդի քառակուսի նիստն անկյան տակ նայելիս գծվում է զուգահեռագծի տեսքով։ Նրա անկյունագծերը դեռ գծվում են զուգահեռագծի անկյունագծեր և դեռ կիսում են միմյանց, քանի որ միջնակետերը պահպանվում են։

**Օրինակ 2։** Հավասարակողմ եռանկյունը կարելի է գծել որպես ցանկացած եռանկյուն։ Սակայն միջնագծերը դեռ հատվում են մի կետում, որը յուրաքանչյուրը բաժանում է $2 : 1$ հարաբերությամբ, քանի որ ուղղի վրա հարաբերությունները պահպանվում են։

**Օրինակ 3։** Շրջանագիծը գծվում է էլիպսի տեսքով, տրամագիծը և նրա ծայրակետերում շոշափողները մնում են զուգահեռ, քանի որ զուգահեռությունը պահպանվում է։

## Ստանդարտ գծագրեր

- **Խորանարդ և ուղղանկյուն զուգահեռանիստ․** գծեք առջևի նիստը որպես քառակուսի կամ ուղղանկյուն, հետևի նիստը՝ հավասար պատկեր, տեղաշարժված վերև և աջ կողմի մոտ կեսի չափով, ապա միացրեք համապատասխան գագաթները։ Մարմնի հետևում թաքնված երեք կողերը կետագծվում են։
- **Պրիզմա․** գծեք ներքևի հիմքը որպես զուգահեռագիծ կամ տափակեցված բազմանկյուն, յուրաքանչյուր գագաթը բարձրացրեք միևնույն ուղղաձիգ հատվածով, միացրեք վերևի կետերը։
- **Բուրգ․** գծեք հիմքը որպես տափակեցված բազմանկյուն, ընտրեք գագաթը վերևում, միացրեք այն հիմքի յուրաքանչյուր գագաթին։ Կանոնավոր բուրգի գագաթը հիմքի կենտրոնի վերևում է։
- **Հարթություն․** զուգահեռագիծ, հարթության մեջ ուղիղը գծվում է նրա ներսում, հարթությունը հատող ուղղի տեսանելի մասը գծվում է անընդհատ, հարթության հետևի մասը՝ կետագծով։
- **Քառանիստ․** եռանկյուն, որի վերևում կամ ներսում չորրորդ կետն է, միացված բոլոր երեք գագաթներին, մեկ կողը կետագծվում է։

## Գծագրի ընթերցում

Թե ինչն ինչի հետ է հատվում, որոշում են աքսիոմների կանոնները, ոչ թե պատկերը։ Գծագրում խաչվող երկու ուղիղ իրականում հատվում են միայն այն դեպքում, եթե մեկ հարթության մեջ են։

**Օրինակ 4։** $ABCDA_1B_1C_1D_1$ խորանարդում $AC_1$ և $BD_1$ անկյունագծերը գծագրում խաչվում են։ Հատվո՞ւմ են դրանք։ Այո․ $A, C_1, B, D_1$ կետերը գտնվում են $ABC_1D_1$ հարթության մեջ (ուղղանկյուն է, քանի որ $AB \\parallel D_1C_1$ և $AB = D_1C_1$), ուստի ուղիղները համահարթ են և հատվում են խորանարդի կենտրոնում։

**Օրինակ 5։** Նույն խորանարդում $AB$ և $C_1D_1$ կողերը զուգահեռ են երևում, դրանք իրոք զուգահեռ են, քանի որ $AB \\parallel DC$ (հիմք) և $DC \\parallel D_1C_1$ (նիստ)։ $AB$ և $CC_1$ կողերը չեն հատվում և զուգահեռ չեն․ դրանք խաչվող են, թեև որոշ գծագրերում թվում է, թե խաչվում են։

**Օրինակ 6։** $M$ կետը գտնվում է $SABC$ բուրգի $SA$ կողի վրա, $N$-ը՝ $SB$ կողի վրա։ $MN$ ուղիղը գտնվում է $SAB$ նիստում։ Եթե գծագրում այն խաչվում է $SC$ կողի հետ, դա պատրանք է․ $SC$-ն $SAB$ հարթությունը հատում է միայն $S$-ում։

**Օրինակ 7։** Խորանարդի ո՞ր կետերն են գտնվում $BDD_1$ հարթության մեջ։ Ճիշտ $B, D, D_1, B_1$ գագաթները․ հարթությունը պարունակում է զուգահեռ $BB_1$ և $DD_1$ կողերը։ $A$ գագաթը նրա մեջ չէ, ուստի $AC$ անկյունագիծն այս հարթությունը հատում է մեկ կետում՝ հիմքի $O$ կենտրոնում։

## Գծագրման տարածված սխալներ

- Խորանարդի հետևի նիստն ավելի փոքր գծելը (դա կենտրոնական պրոյեկտում է, ոչ զուգահեռ)։
- Թաքնված կողերը կետագծել մոռանալը, որի պատճառով պատկերը չի ընթերցվում։
- Կանոնավոր բուրգի գագաթը հիմքի կենտրոնից դուրս գծելը։
- Երկու խաչվող ուղիղների հատման կետ նշելը։

### Վարժություններ

1. Հետևյալներից որո՞նք են պահպանվում զուգահեռ պրոյեկտումով․ հատվածի երկարությունը, զուգահեռությունը, մեկ ուղղի վրա հատվածների հարաբերությունը, անկյան մեծությունը, հատվածի միջնակետը։
2. Գծեք $ABCDA_1B_1C_1D_1$ խորանարդ և կետագծով նշեք թաքնված կողերը, եթե առջևի նիստը $ABB_1A_1$ է։
3. Գծեք $SABCD$ կանոնավոր քառանկյուն բուրգ՝ $SO$ բարձրությամբ։ Որտե՞ղ է $O$-ն։
4. Գծեք $ABCA_1B_1C_1$ եռանկյուն պրիզմա և նրա հատույթը $AB_1C$ հարթությամբ։ Ի՞նչ պատկեր է հատույթը։
5. $ABCDA_1B_1C_1D_1$ խորանարդում հատվո՞ւմ են $AB_1$ և $DC_1$ ուղիղները։ Զուգահե՞ռ են։
6. Խորանարդում հատվո՞ւմ են $AB_1$ և $BC_1$ ուղիղները։ Հիմնավորեք։
7. $SABC$ բուրգում $M$-ը $SA$-ի միջնակետն է, $N$-ը՝ $SB$-ի։ Ապացուցեք, որ $MN \\parallel AB$, և գտեք $MN$-ը, եթե $AB = 8$։
8. $ABC$ եռանկյան զուգահեռ պրոյեկցիան $A'B'C'$ եռանկյունն է։ Որտե՞ղ է $ABC$-ի միջնագծերի հատման կետի պրոյեկցիան։

### Պատասխաններ

1. Պահպանվում են․ զուգահեռությունը, մեկ ուղղի վրա հատվածների հարաբերությունը, միջնակետը։ Չեն պահպանվում․ երկարությունը, անկյունը։ 2. Կետագծով․ $DC$, $DA$, $DD_1$ (հետևի $D$ գագաթի երեք կողերը)։ 3. $O$-ն հիմքի $AC$ և $BD$ անկյունագծերի հատման կետն է։ 4. $AB_1C$ եռանկյուն, որտեղ $AB_1$-ը, $B_1C$-ն նիստերի անկյունագծեր են, $AC$-ն՝ հիմքի կող։ 5. Զուգահեռ են․ $AB_1C_1D$-ը զուգահեռագիծ է, քանի որ $AD \\parallel B_1C_1$ և $AD = B_1C_1$, ուստի $AB_1 \\parallel DC_1$։ 6. Ոչ․ $A, B_1, B, C_1$-ը համահարթ չեն ($ABB_1$ հարթությունն առջևի նիստն է, և $C_1$-ը նրա մեջ չէ), ուստի ուղիղները խաչվող են։ 7. $MN$-ը $SAB$ եռանկյան միջին գիծ է, ուստի $MN \\parallel AB$ և $MN = 4$։ 8. $A'B'C'$-ի միջնագծերի հատման կետում․ միջնագծերն անցնում են միջնագծերի (միջնակետերը պահպանվում են), և $2 : 1$ հարաբերությունը պահպանվում է։`,
        ru: `## Параллельное проектирование

Пространственную фигуру изображают на плоском листе с помощью **параллельного проектирования**: через каждую точку фигуры проводят прямую, параллельную заданному направлению, и отмечают, где она пересекает плоскость чертежа. Тень предмета в солнечном свете — параллельная проекция.

Свойства параллельного проектирования (для прямых, не параллельных направлению проектирования):

- отрезок проектируется в отрезок, прямая — в прямую;
- параллельные отрезки проектируются в параллельные (или лежащие на одной прямой) отрезки;
- отношение длин параллельных отрезков сохраняется, в частности середина переходит в середину;
- длины и углы в общем случае **не** сохраняются: прямой угол может выглядеть острым или тупым, окружность выглядит эллипсом.

**Пример 1.** Квадратная грань куба, видимая под углом, изображается параллелограммом. Её диагонали по-прежнему изображаются диагоналями параллелограмма и по-прежнему делятся пополам, так как середины сохраняются.

**Пример 2.** Равносторонний треугольник можно изобразить любым треугольником. Однако медианы всё равно пересекаются в точке, делящей каждую в отношении $2 : 1$, поскольку отношения на прямой сохраняются.

**Пример 3.** Окружность изображается эллипсом; диаметр и касательные в его концах остаются параллельными, так как параллельность сохраняется.

## Стандартные изображения

- **Куб и прямоугольный параллелепипед:** переднюю грань рисуют квадратом или прямоугольником, заднюю — такой же фигурой, сдвинутой вверх и вправо примерно на половину стороны, затем соединяют соответствующие вершины. Три ребра, скрытые за телом, — штриховые.
- **Призма:** нижнее основание рисуют параллелограммом или сплющенным многоугольником, каждую вершину поднимают на один и тот же вертикальный отрезок, соединяют верхние точки.
- **Пирамида:** основание — сплющенный многоугольник, вершину выбирают сверху и соединяют со всеми вершинами основания. У правильной пирамиды вершина над центром основания.
- **Плоскость:** параллелограмм; прямая в плоскости рисуется внутри него, у прямой, пересекающей плоскость, видимая часть сплошная, часть за плоскостью штриховая.
- **Тетраэдр:** треугольник с четвёртой точкой над ним или внутри, соединённой со всеми тремя вершинами; одно ребро штриховое.

## Чтение чертежа

Что с чем пересекается, решают аксиомы, а не картинка. Две прямые, нарисованные пересекающимися, пересекаются в действительности, только если лежат в одной плоскости.

**Пример 4.** В кубе $ABCDA_1B_1C_1D_1$ диагонали $AC_1$ и $BD_1$ на чертеже пересекаются. Пересекаются ли они на самом деле? Да: $A, C_1, B, D_1$ лежат в плоскости $ABC_1D_1$ (это прямоугольник, так как $AB \\parallel D_1C_1$ и $AB = D_1C_1$), значит, прямые компланарны и пересекаются в центре куба.

**Пример 5.** В том же кубе рёбра $AB$ и $C_1D_1$ выглядят параллельными; так и есть, потому что $AB \\parallel DC$ (основание) и $DC \\parallel D_1C_1$ (грань). Рёбра $AB$ и $CC_1$ не пересекаются и не параллельны: они скрещивающиеся, хотя на некоторых чертежах кажется, что они пересекаются.

**Пример 6.** Точка $M$ лежит на ребре $SA$ пирамиды $SABC$, $N$ — на ребре $SB$. Прямая $MN$ лежит в грани $SAB$. Если на чертеже она пересекает ребро $SC$, это иллюзия: $SC$ пересекает плоскость $SAB$ только в $S$.

**Пример 7.** Какие точки куба лежат в плоскости $BDD_1$? Ровно вершины $B, D, D_1, B_1$: плоскость содержит параллельные рёбра $BB_1$ и $DD_1$. Вершина $A$ в ней не лежит, поэтому диагональ $AC$ пересекает эту плоскость в одной точке — центре $O$ основания.

## Типичные ошибки при изображении

- Задняя грань куба нарисована меньше (это центральное, а не параллельное проектирование).
- Невидимые рёбра не выделены штрихами, и фигуру нельзя прочитать.
- Вершина правильной пирамиды не над центром основания.
- Отмечена точка пересечения двух скрещивающихся прямых.

### Упражнения

1. Что из перечисленного сохраняется при параллельном проектировании: длина отрезка, параллельность, отношение отрезков на одной прямой, величина угла, середина отрезка?
2. Изобразите куб $ABCDA_1B_1C_1D_1$ и отметьте штрихами невидимые рёбра, если передняя грань — $ABB_1A_1$.
3. Изобразите правильную четырёхугольную пирамиду $SABCD$ с высотой $SO$. Где находится $O$?
4. Изобразите треугольную призму $ABCA_1B_1C_1$ и её сечение плоскостью $AB_1C$. Какая фигура получилась?
5. В кубе $ABCDA_1B_1C_1D_1$ пересекаются ли прямые $AB_1$ и $DC_1$? Параллельны ли они?
6. В кубе пересекаются ли прямые $AB_1$ и $BC_1$? Обоснуйте.
7. $M$ — середина $SA$, $N$ — середина $SB$ в пирамиде $SABC$. Докажите, что $MN \\parallel AB$, и найдите $MN$, если $AB = 8$.
8. Параллельная проекция треугольника $ABC$ — треугольник $A'B'C'$. Где находится проекция точки пересечения медиан $ABC$?

### Ответы

1. Сохраняются: параллельность, отношение отрезков на одной прямой, середина. Не сохраняются: длина, угол. 2. Штриховые: $DC$, $DA$, $DD_1$ (три ребра при задней вершине $D$). 3. $O$ — точка пересечения диагоналей $AC$ и $BD$ основания. 4. Треугольник $AB_1C$, где $AB_1$, $B_1C$ — диагонали граней, $AC$ — ребро основания. 5. Параллельны: $AB_1C_1D$ — параллелограмм, так как $AD \\parallel B_1C_1$ и $AD = B_1C_1$, значит, $AB_1 \\parallel DC_1$. 6. Нет: $A, B_1, B, C_1$ не компланарны (плоскость $ABB_1$ — передняя грань, и $C_1$ в ней не лежит), значит, прямые скрещивающиеся. 7. $MN$ — средняя линия треугольника $SAB$, поэтому $MN \\parallel AB$ и $MN = 4$. 8. В точке пересечения медиан $A'B'C'$: медианы переходят в медианы (середины сохраняются), и отношение $2 : 1$ сохраняется.`,
      },
      [
        q(t("Parallel projection preserves…", "Զուգահեռ պրոյեկտումը պահպանում է…", "Параллельное проектирование сохраняет…"), [t("lengths", "երկարությունները", "длины"), t("angles", "անկյունները", "углы"), t("parallelism and midpoints", "զուգահեռությունը և միջնակետերը", "параллельность и середины")], 2),
        q(t("A circle is drawn in parallel projection as…", "Շրջանագիծը զուգահեռ պրոյեկցիայում գծվում է որպես…", "Окружность в параллельной проекции изображается как…"), [t("a circle", "շրջանագիծ", "окружность"), t("an ellipse", "էլիպս", "эллипс"), t("a segment always", "միշտ հատված", "всегда отрезок")], 1),
        q(t("Hidden edges of a solid are drawn…", "Մարմնի թաքնված կողերը գծվում են…", "Невидимые рёбра тела изображают…"), [t("dashed", "կետագծով", "штриховой линией"), t("thicker", "ավելի հաստ", "жирнее"), t("not at all", "ընդհանրապես չեն գծվում", "не изображают")], 0),
        q(t("Two lines that cross in a drawing really intersect only if…", "Գծագրում խաչվող երկու ուղիղ իրոք հատվում են միայն, եթե…", "Две прямые, пересекающиеся на чертеже, пересекаются на самом деле, только если…"), [t("they are coplanar", "համահարթ են", "они компланарны"), t("they are drawn solid", "անընդհատ են գծված", "нарисованы сплошными"), t("always", "միշտ", "всегда")], 0),
        q(t("In the cube ABCDA₁B₁C₁D₁ the lines AB₁ and BC₁ are…", "ABCDA₁B₁C₁D₁ խորանարդում AB₁ և BC₁ ուղիղները…", "В кубе ABCDA₁B₁C₁D₁ прямые AB₁ и BC₁…"), [t("intersecting", "հատվող են", "пересекаются"), t("parallel", "զուգահեռ են", "параллельны"), t("skew", "խաչվող են", "скрещивающиеся")], 2),
        q(t("The apex of a regular pyramid is drawn…", "Կանոնավոր բուրգի գագաթը գծվում է…", "Вершину правильной пирамиды изображают…"), [t("above the centre of the base", "հիմքի կենտրոնի վերևում", "над центром основания"), t("above a vertex of the base", "հիմքի գագաթի վերևում", "над вершиной основания"), t("anywhere", "ցանկացած տեղ", "где угодно")], 0),
      ],
    ),
  ],
};
