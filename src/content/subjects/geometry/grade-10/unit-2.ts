import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Parallelism in space", "Զուգահեռություն տարածության մեջ", "Параллельность прямых и плоскостей"),
  summary: t("Parallel lines, line and plane, skew lines, parallel planes, tetrahedron and parallelepiped, sections.", "Զուգահեռ ուղիղներ, ուղիղ և հարթություն, խաչվող ուղիղներ, զուգահեռ հարթություններ, քառանիստ և զուգահեռանիստ, հատույթներ։", "Параллельные прямые, прямая и плоскость, скрещивающиеся прямые, параллельные плоскости, тетраэдр и параллелепипед, сечения."),
  lessons: [
    lesson(
      "parallel-lines-space",
      ["Parallel lines and planes in space", "Զուգահեռ ուղիղներ և հարթություններ տարածության մեջ", "Параллельность прямых, прямой и плоскости"],
      {
        en: ["Define parallel lines in space and prove the uniqueness and transitivity theorems", "Define a line parallel to a plane and apply the criterion of parallelism", "Prove that a line parallel to a plane is parallel to the intersection line of any plane through it with the given plane"],
        hy: ["Սահմանել զուգահեռ ուղիղները տարածության մեջ և ապացուցել միակության ու տրանզիտիվության թեորեմները", "Սահմանել հարթությանը զուգահեռ ուղիղը և կիրառել զուգահեռության հայտանիշը", "Ապացուցել, որ հարթությանը զուգահեռ ուղիղը զուգահեռ է նրանով անցնող ցանկացած հարթության և տրված հարթության հատման գծին"],
        ru: ["Определять параллельные прямые в пространстве и доказывать теоремы о единственности и транзитивности", "Определять прямую, параллельную плоскости, и применять признак параллельности", "Доказывать, что прямая, параллельная плоскости, параллельна линии пересечения любой плоскости через неё с данной плоскостью"],
      },
      {
        en: `## Parallel lines in space

Two lines in space are **parallel** if they lie in one plane and do not intersect. The condition "in one plane" is essential: in space there are also lines that do not meet but are not parallel (skew lines, next lesson).

**Theorem 1.** Through any point not on a given line there passes exactly one line parallel to it.

*Proof.* The line $a$ and the point $M \\notin a$ fix a plane $\\alpha$. In $\\alpha$ there is exactly one line through $M$ parallel to $a$ (planimetry). Any other parallel through $M$ would lie in a plane with $a$, hence in $\\alpha$, and so coincide with it. $\\blacksquare$

**Lemma.** If one of two parallel lines meets a plane, the other meets it too.

**Theorem 2 (transitivity).** If $a \\parallel b$ and $b \\parallel c$, then $a \\parallel c$.

*Proof sketch.* Take $M \\in c$; the plane $\\gamma = (a, M)$ exists. Show $c \\subset \\gamma$: otherwise $c$ would meet $\\gamma$ at $M$ only, and by the lemma $b$ and then $a$ would meet $\\gamma$, impossible as $a \\subset \\gamma$. Then $a$ and $c$ are coplanar and cannot meet (a common point would give two parallels to $b$ through one point). $\\blacksquare$

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$: $AB \\parallel DC$ and $DC \\parallel D_1C_1$, so $AB \\parallel D_1C_1$ by transitivity. Thus $ABC_1D_1$ is a plane figure (a rectangle).

**Example 2.** $M, N, P, Q$ are the midpoints of $AB, BC, CD, DA$ of a spatial quadrilateral $ABCD$ (the points are not coplanar). Then $MN \\parallel AC$ and $PQ \\parallel AC$ (midlines of triangles $ABC$ and $ADC$), so $MN \\parallel PQ$, and similarly $NP \\parallel MQ$. Hence $MNPQ$ is a parallelogram, in particular a plane figure.

## A line parallel to a plane

A line and a plane are **parallel** ($a \\parallel \\alpha$) if they have no common points.

**Theorem 3 (criterion).** If a line not lying in a plane is parallel to some line in the plane, then it is parallel to the plane.

*Proof.* Let $a \\parallel b$, $b \\subset \\alpha$, $a \\not\\subset \\alpha$. The lines $a$ and $b$ lie in a plane $\\beta$; $\\beta \\cap \\alpha = b$ (A3). A common point $M$ of $a$ and $\\alpha$ lies in $\\beta$ too, so $M \\in b$, contradicting $a \\parallel b$. $\\blacksquare$

**Theorem 4.** If $a \\parallel \\alpha$ and a plane $\\beta$ through $a$ meets $\\alpha$ along a line $b$, then $a \\parallel b$.

*Proof.* $a, b \\subset \\beta$; they do not meet since $a$ has no point in $\\alpha$. $\\blacksquare$

**Example 3.** In the cube, is $A_1B_1 \\parallel (ABCD)$? Yes: $A_1B_1 \\parallel AB \\subset (ABCD)$ and $A_1B_1$ is not in the base.

**Example 4.** The midline $MN$ of the face $SAB$ of the pyramid $SABC$ ($M \\in SA$, $N \\in SB$) is parallel to the base: $MN \\parallel AB \\subset (ABC)$.

**Example 5.** The line $a \\parallel \\alpha$, and the plane $\\beta \\supset a$ meets $\\alpha$ along $b$. A point $K \\in a$ is $3$ cm from $b$. How far is every other point of $a$ from $b$? Also $3$ cm: $a \\parallel b$ in the plane $\\beta$, and parallel lines are equidistant.

**Example 6.** Through a point $M$ outside a plane $\\alpha$, how many lines parallel to $\\alpha$ pass? Infinitely many: every line through $M$ in the plane through $M$ parallel to $\\alpha$ (its existence is shown in the lesson on parallel planes), and in fact exactly those.

**Example 7.** In the cube, the plane $\\beta$ through $A_1B_1$ and the midpoint $K$ of $DD_1$ meets the base plane. Along which line? $A_1B_1 \\parallel (ABCD)$, so by Theorem 4 the intersection line is parallel to $A_1B_1$, hence to $AB$, and passes through the point $P$ on the extension of $DA$ beyond $A$ with $AP = AD$ (that is where the line $A_1K$ meets the line $AD$). In exercises we usually need only the direction: parallel to $AB$.

### Exercises

1. In the cube $ABCDA_1B_1C_1D_1$ name all edges parallel to $AA_1$.
2. Prove that the midpoints of the sides of any spatial quadrilateral are coplanar.
3. Is the edge $CC_1$ of the cube parallel to the plane $ABB_1A_1$? To the plane $ABC_1D_1$?
4. The line $a$ is parallel to the plane $\\alpha$. Does it follow that $a$ is parallel to every line in $\\alpha$?
5. $M$ and $N$ are the midpoints of $AD$ and $BD$ in the tetrahedron $ABCD$. Prove that $MN \\parallel (ABC)$.
6. The plane $\\alpha$ passes through the midpoints of the edges $SA$ and $SB$ of the pyramid $SABC$ and meets the base plane. Prove that the intersection line is parallel to $AB$.
7. The lines $a$ and $b$ are parallel, $a \\parallel \\alpha$. Can $b$ intersect $\\alpha$? Can $b$ lie in $\\alpha$?
8. In the parallelepiped $ABCDA_1B_1C_1D_1$ prove that $A_1C_1 \\parallel (ABCD)$ and $B_1D \\not\\parallel (ABCD)$.

### Answers

1. $BB_1$, $CC_1$, $DD_1$. 2. Example 2: they form a parallelogram. 3. Yes: $CC_1 \\parallel BB_1 \\subset (ABB_1A_1)$, and $CC_1$ is not in that face. No: $C_1$ lies in $ABC_1D_1$, so the line meets the plane. 4. No: only to lines in $\\alpha$ coplanar with it; most lines of $\\alpha$ are skew to $a$. 5. $MN$ is a midline of the triangle $ABD$, so $MN \\parallel AB \\subset (ABC)$, and $MN$ is not in $(ABC)$. 6. The midline $MN \\parallel AB$, so $MN \\parallel (ABC)$ by Theorem 3; by Theorem 4 the intersection of $\\alpha$ with $(ABC)$ is parallel to $MN$, hence to $AB$. 7. $b$ cannot intersect $\\alpha$ (lemma: then $a$ would too); $b$ can lie in $\\alpha$. 8. $A_1C_1 \\parallel AC \\subset (ABCD)$ (the face $AA_1C_1C$ is a parallelogram), and $A_1C_1 \\not\\subset (ABCD)$. $B_1D$ contains the point $D$ of the base, so it meets the base plane.`,
        hy: `## Զուգահեռ ուղիղներ տարածության մեջ

Տարածության երկու ուղիղները **զուգահեռ** են, եթե գտնվում են մեկ հարթության մեջ և չեն հատվում։ «Մեկ հարթության մեջ» պայմանն էական է․ տարածության մեջ կան նաև ուղիղներ, որոնք չեն հատվում, բայց զուգահեռ չեն (խաչվող ուղիղներ, հաջորդ դաս)։

**Թեորեմ 1։** Տրված ուղղի վրա չգտնվող ցանկացած կետով անցնում է նրան զուգահեռ ճիշտ մեկ ուղիղ։

*Ապացույց։* $a$ ուղիղը և $M \\notin a$ կետը որոշում են $\\alpha$ հարթություն։ $\\alpha$-ում $M$-ով անցնում է $a$-ին զուգահեռ ճիշտ մեկ ուղիղ (հարթաչափություն)։ $M$-ով անցնող ցանկացած այլ զուգահեռ $a$-ի հետ մեկ հարթության մեջ կլիներ, հետևաբար $\\alpha$-ում, և կհամընկներ նրա հետ։ $\\blacksquare$

**Լեմմա։** Եթե երկու զուգահեռ ուղիղներից մեկը հատում է հարթությունը, ապա մյուսն էլ հատում է այն։

**Թեորեմ 2 (տրանզիտիվություն)։** Եթե $a \\parallel b$ և $b \\parallel c$, ապա $a \\parallel c$։

*Ապացույցի ուրվագիծ։* Վերցնենք $M \\in c$, $\\gamma = (a, M)$ հարթությունը գոյություն ունի։ Ցույց տանք, որ $c \\subset \\gamma$․ այլապես $c$-ն $\\gamma$-ն կհատեր միայն $M$-ում, և լեմմայով $b$-ն, ապա $a$-ն կհատեին $\\gamma$-ն, ինչն անհնար է, քանի որ $a \\subset \\gamma$։ Այդ դեպքում $a$-ն և $c$-ն համահարթ են և չեն կարող հատվել (ընդհանուր կետը կտար մեկ կետով $b$-ին երկու զուգահեռ)։ $\\blacksquare$

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում․ $AB \\parallel DC$ և $DC \\parallel D_1C_1$, ուստի տրանզիտիվությամբ $AB \\parallel D_1C_1$։ Այսպիսով $ABC_1D_1$-ը հարթ պատկեր է (ուղղանկյուն)։

**Օրինակ 2։** $M, N, P, Q$-ը $ABCD$ տարածական քառանկյան (կետերը համահարթ չեն) $AB, BC, CD, DA$ կողմերի միջնակետերն են։ Այդ դեպքում $MN \\parallel AC$ և $PQ \\parallel AC$ ($ABC$ և $ADC$ եռանկյունների միջին գծեր), ուստի $MN \\parallel PQ$, նույն կերպ $NP \\parallel MQ$։ Հետևաբար $MNPQ$-ը զուգահեռագիծ է, մասնավորապես հարթ պատկեր։

## Հարթությանը զուգահեռ ուղիղ

Ուղիղը և հարթությունը **զուգահեռ** են ($a \\parallel \\alpha$), եթե ընդհանուր կետեր չունեն։

**Թեորեմ 3 (հայտանիշ)։** Եթե հարթության մեջ չգտնվող ուղիղը զուգահեռ է հարթության որևէ ուղղի, ապա այն զուգահեռ է հարթությանը։

*Ապացույց։* Դիցուք $a \\parallel b$, $b \\subset \\alpha$, $a \\not\\subset \\alpha$։ $a$-ն և $b$-ն գտնվում են $\\beta$ հարթության մեջ, $\\beta \\cap \\alpha = b$ (A3)։ $a$-ի և $\\alpha$-ի ընդհանուր $M$ կետը գտնվում է նաև $\\beta$-ում, ուստի $M \\in b$, ինչը հակասում է $a \\parallel b$-ին։ $\\blacksquare$

**Թեորեմ 4։** Եթե $a \\parallel \\alpha$ և $a$-ով անցնող $\\beta$ հարթությունը $\\alpha$-ն հատում է $b$ ուղղով, ապա $a \\parallel b$։

*Ապացույց։* $a, b \\subset \\beta$, դրանք չեն հատվում, քանի որ $a$-ն $\\alpha$-ում կետ չունի։ $\\blacksquare$

**Օրինակ 3։** Խորանարդում $A_1B_1 \\parallel (ABCD)$ է՞։ Այո․ $A_1B_1 \\parallel AB \\subset (ABCD)$ և $A_1B_1$-ը հիմքում չէ։

**Օրինակ 4։** $SABC$ բուրգի $SAB$ նիստի $MN$ միջին գիծը ($M \\in SA$, $N \\in SB$) զուգահեռ է հիմքին․ $MN \\parallel AB \\subset (ABC)$։

**Օրինակ 5։** $a \\parallel \\alpha$, և $\\beta \\supset a$ հարթությունը $\\alpha$-ն հատում է $b$-ով։ $K \\in a$ կետը $b$-ից $3$ սմ հեռավորության վրա է։ Որքա՞ն է $a$-ի մյուս կետերի հեռավորությունը $b$-ից։ Նույնպես $3$ սմ․ $a \\parallel b$ $\\beta$ հարթության մեջ, և զուգահեռ ուղիղները հավասարահեռ են։

**Օրինակ 6։** $\\alpha$ հարթությունից դուրս $M$ կետով քանի՞ $\\alpha$-ին զուգահեռ ուղիղ է անցնում։ Անվերջ շատ․ $M$-ով անցնող և $\\alpha$-ին զուգահեռ հարթության յուրաքանչյուր ուղիղ, որն անցնում է $M$-ով (այդ հարթության գոյությունը ցույց է տրվում զուգահեռ հարթությունների դասում), և միայն դրանք։

**Օրինակ 7։** Խորանարդում $A_1B_1$-ով և $DD_1$-ի $K$ միջնակետով անցնող $\\beta$ հարթությունը հատում է հիմքի հարթությունը։ Ո՞ր ուղղով։ $A_1B_1 \\parallel (ABCD)$, ուստի թեորեմ 4-ով հատման գիծը զուգահեռ է $A_1B_1$-ին, հետևաբար $AB$-ին։ Այն անցնում է $DA$-ի շարունակության վրա $A$-ից այն կողմ գտնվող $P$ կետով, որտեղ $AP = AD$ (քանի որ $A_1K$ ուղիղը $AD$ ուղիղը հատում է հենց այնտեղ)։ Վարժություններում մեզ սովորաբար պետք է միայն ուղղությունը․ զուգահեռ $AB$-ին։

### Վարժություններ

1. $ABCDA_1B_1C_1D_1$ խորանարդում անվանեք $AA_1$-ին զուգահեռ բոլոր կողերը։
2. Ապացուցեք, որ ցանկացած տարածական քառանկյան կողմերի միջնակետերը համահարթ են։
3. Խորանարդի $CC_1$ կողը զուգահե՞ռ է $ABB_1A_1$ հարթությանը։ $ABC_1D_1$ հարթությանը։
4. $a$ ուղիղը զուգահեռ է $\\alpha$ հարթությանը։ Հետևո՞ւմ է դրանից, որ $a$-ն զուգահեռ է $\\alpha$-ի յուրաքանչյուր ուղղի։
5. $M$-ը և $N$-ը $ABCD$ քառանիստի $AD$ և $BD$ կողերի միջնակետերն են։ Ապացուցեք, որ $MN \\parallel (ABC)$։
6. $\\alpha$ հարթությունն անցնում է $SABC$ բուրգի $SA$ և $SB$ կողերի միջնակետերով և հատում է հիմքի հարթությունը։ Ապացուցեք, որ հատման գիծը զուգահեռ է $AB$-ին։
7. $a$ և $b$ ուղիղները զուգահեռ են, $a \\parallel \\alpha$։ Կարո՞ղ է $b$-ն հատել $\\alpha$-ն։ Կարո՞ղ է $b$-ն գտնվել $\\alpha$-ում։
8. $ABCDA_1B_1C_1D_1$ զուգահեռանիստում ապացուցեք, որ $A_1C_1 \\parallel (ABCD)$ և $B_1D \\not\\parallel (ABCD)$։

### Պատասխաններ

1. $BB_1$, $CC_1$, $DD_1$։ 2. Օրինակ 2․ դրանք կազմում են զուգահեռագիծ։ 3. Այո․ $CC_1 \\parallel BB_1 \\subset (ABB_1A_1)$, և $CC_1$-ն այդ նիստում չէ։ Ոչ․ $C_1$-ը գտնվում է $ABC_1D_1$-ում, ուստի ուղիղը հատում է հարթությունը։ 4. Ոչ․ միայն $\\alpha$-ի այն ուղիղներին, որոնք նրա հետ համահարթ են, $\\alpha$-ի ուղիղների մեծ մասը $a$-ի հետ խաչվող է։ 5. $MN$-ը $ABD$ եռանկյան միջին գիծ է, ուստի $MN \\parallel AB \\subset (ABC)$, և $MN$-ը $(ABC)$-ում չէ։ 6. $MN \\parallel AB$ միջին գիծը, ուստի թեորեմ 3-ով $MN \\parallel (ABC)$, թեորեմ 4-ով $\\alpha$-ի և $(ABC)$-ի հատման գիծը զուգահեռ է $MN$-ին, հետևաբար $AB$-ին։ 7. $b$-ն չի կարող հատել $\\alpha$-ն (լեմմա․ այդ դեպքում $a$-ն էլ կհատեր), $b$-ն կարող է գտնվել $\\alpha$-ում։ 8. $A_1C_1 \\parallel AC \\subset (ABCD)$ ($AA_1C_1C$ նիստը զուգահեռագիծ է), և $A_1C_1 \\not\\subset (ABCD)$։ $B_1D$-ն պարունակում է հիմքի $D$ կետը, ուստի հատում է հիմքի հարթությունը։`,
        ru: `## Параллельные прямые в пространстве

Две прямые в пространстве **параллельны**, если они лежат в одной плоскости и не пересекаются. Условие «в одной плоскости» существенно: в пространстве есть и прямые, которые не пересекаются, но не параллельны (скрещивающиеся, следующий урок).

**Теорема 1.** Через любую точку, не лежащую на данной прямой, проходит ровно одна прямая, параллельная ей.

*Доказательство.* Прямая $a$ и точка $M \\notin a$ задают плоскость $\\alpha$. В $\\alpha$ через $M$ проходит ровно одна прямая, параллельная $a$ (планиметрия). Любая другая параллельная через $M$ лежала бы в одной плоскости с $a$, то есть в $\\alpha$, и совпала бы с ней. $\\blacksquare$

**Лемма.** Если одна из двух параллельных прямых пересекает плоскость, то и другая пересекает её.

**Теорема 2 (транзитивность).** Если $a \\parallel b$ и $b \\parallel c$, то $a \\parallel c$.

*Набросок доказательства.* Возьмём $M \\in c$; плоскость $\\gamma = (a, M)$ существует. Покажем, что $c \\subset \\gamma$: иначе $c$ пересекала бы $\\gamma$ только в $M$, и по лемме $b$, а затем $a$ пересекали бы $\\gamma$, что невозможно, так как $a \\subset \\gamma$. Тогда $a$ и $c$ компланарны и не могут пересекаться (общая точка дала бы две параллельные к $b$ через одну точку). $\\blacksquare$

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$: $AB \\parallel DC$ и $DC \\parallel D_1C_1$, значит, $AB \\parallel D_1C_1$ по транзитивности. Поэтому $ABC_1D_1$ — плоская фигура (прямоугольник).

**Пример 2.** $M, N, P, Q$ — середины $AB, BC, CD, DA$ пространственного четырёхугольника $ABCD$ (точки не компланарны). Тогда $MN \\parallel AC$ и $PQ \\parallel AC$ (средние линии треугольников $ABC$ и $ADC$), значит, $MN \\parallel PQ$, и аналогично $NP \\parallel MQ$. Следовательно, $MNPQ$ — параллелограмм, в частности плоская фигура.

## Прямая, параллельная плоскости

Прямая и плоскость **параллельны** ($a \\parallel \\alpha$), если у них нет общих точек.

**Теорема 3 (признак).** Если прямая, не лежащая в плоскости, параллельна некоторой прямой этой плоскости, то она параллельна плоскости.

*Доказательство.* Пусть $a \\parallel b$, $b \\subset \\alpha$, $a \\not\\subset \\alpha$. Прямые $a$ и $b$ лежат в плоскости $\\beta$; $\\beta \\cap \\alpha = b$ (A3). Общая точка $M$ прямой $a$ и плоскости $\\alpha$ лежит и в $\\beta$, значит, $M \\in b$, что противоречит $a \\parallel b$. $\\blacksquare$

**Теорема 4.** Если $a \\parallel \\alpha$ и плоскость $\\beta$, проходящая через $a$, пересекает $\\alpha$ по прямой $b$, то $a \\parallel b$.

*Доказательство.* $a, b \\subset \\beta$; они не пересекаются, так как у $a$ нет точек в $\\alpha$. $\\blacksquare$

**Пример 3.** В кубе верно ли $A_1B_1 \\parallel (ABCD)$? Да: $A_1B_1 \\parallel AB \\subset (ABCD)$, и $A_1B_1$ не лежит в основании.

**Пример 4.** Средняя линия $MN$ грани $SAB$ пирамиды $SABC$ ($M \\in SA$, $N \\in SB$) параллельна основанию: $MN \\parallel AB \\subset (ABC)$.

**Пример 5.** Прямая $a \\parallel \\alpha$, плоскость $\\beta \\supset a$ пересекает $\\alpha$ по $b$. Точка $K \\in a$ удалена от $b$ на $3$ см. Как далеко от $b$ любая другая точка $a$? Тоже $3$ см: $a \\parallel b$ в плоскости $\\beta$, а параллельные прямые равноудалены.

**Пример 6.** Сколько прямых, параллельных плоскости $\\alpha$, проходит через точку $M$ вне $\\alpha$? Бесконечно много: все прямые через $M$ в плоскости, проходящей через $M$ параллельно $\\alpha$ (её существование доказывается в уроке о параллельных плоскостях), и только они.

**Пример 7.** В кубе плоскость $\\beta$ через $A_1B_1$ и середину $K$ ребра $DD_1$ пересекает плоскость основания. По какой прямой? $A_1B_1 \\parallel (ABCD)$, поэтому по теореме 4 линия пересечения параллельна $A_1B_1$, а значит, $AB$. Она проходит через точку $P$ на продолжении $DA$ за точку $A$, где $AP = AD$ (именно там прямая $A_1K$ пересекает прямую $AD$). В упражнениях обычно нужно лишь направление: параллельно $AB$.

### Упражнения

1. В кубе $ABCDA_1B_1C_1D_1$ назовите все рёбра, параллельные $AA_1$.
2. Докажите, что середины сторон любого пространственного четырёхугольника компланарны.
3. Параллельно ли ребро $CC_1$ куба плоскости $ABB_1A_1$? Плоскости $ABC_1D_1$?
4. Прямая $a$ параллельна плоскости $\\alpha$. Следует ли отсюда, что $a$ параллельна каждой прямой в $\\alpha$?
5. $M$ и $N$ — середины $AD$ и $BD$ тетраэдра $ABCD$. Докажите, что $MN \\parallel (ABC)$.
6. Плоскость $\\alpha$ проходит через середины рёбер $SA$ и $SB$ пирамиды $SABC$ и пересекает плоскость основания. Докажите, что линия пересечения параллельна $AB$.
7. Прямые $a$ и $b$ параллельны, $a \\parallel \\alpha$. Может ли $b$ пересекать $\\alpha$? Может ли $b$ лежать в $\\alpha$?
8. В параллелепипеде $ABCDA_1B_1C_1D_1$ докажите, что $A_1C_1 \\parallel (ABCD)$ и $B_1D \\not\\parallel (ABCD)$.

### Ответы

1. $BB_1$, $CC_1$, $DD_1$. 2. Пример 2: они образуют параллелограмм. 3. Да: $CC_1 \\parallel BB_1 \\subset (ABB_1A_1)$, и $CC_1$ не лежит в этой грани. Нет: $C_1$ лежит в $ABC_1D_1$, значит, прямая пересекает плоскость. 4. Нет: только прямым в $\\alpha$, компланарным с ней; большинство прямых в $\\alpha$ скрещиваются с $a$. 5. $MN$ — средняя линия треугольника $ABD$, значит, $MN \\parallel AB \\subset (ABC)$, и $MN$ не лежит в $(ABC)$. 6. Средняя линия $MN \\parallel AB$, значит, $MN \\parallel (ABC)$ по теореме 3; по теореме 4 пересечение $\\alpha$ с $(ABC)$ параллельно $MN$, а значит, $AB$. 7. $b$ не может пересекать $\\alpha$ (лемма: тогда и $a$ пересекала бы); $b$ может лежать в $\\alpha$. 8. $A_1C_1 \\parallel AC \\subset (ABCD)$ (грань $AA_1C_1C$ — параллелограмм), и $A_1C_1 \\not\\subset (ABCD)$. $B_1D$ содержит точку $D$ основания, значит, пересекает плоскость основания.`,
      },
      [
        q(t("Two lines in space are parallel if they…", "Տարածության երկու ուղիղները զուգահեռ են, եթե…", "Две прямые в пространстве параллельны, если они…"), [t("do not intersect", "չեն հատվում", "не пересекаются"), t("lie in one plane and do not intersect", "մեկ հարթության մեջ են և չեն հատվում", "лежат в одной плоскости и не пересекаются"), t("are equidistant from a plane", "հավասարահեռ են հարթությունից", "равноудалены от плоскости")], 1),
        q(t("If a ∥ b and b ∥ c, then…", "Եթե a ∥ b և b ∥ c, ապա…", "Если a ∥ b и b ∥ c, то…"), [t("a ∥ c", "a ∥ c", "a ∥ c"), t("a and c may be skew", "a-ն և c-ն կարող են խաչվող լինել", "a и c могут быть скрещивающимися"), t("a and c intersect", "a-ն և c-ն հատվում են", "a и c пересекаются")], 0),
        q(t("A line not in a plane and parallel to a line of that plane is…", "Հարթության մեջ չգտնվող և նրա ուղղին զուգահեռ ուղիղը…", "Прямая, не лежащая в плоскости и параллельная прямой этой плоскости, …"), [t("parallel to the plane", "զուգահեռ է հարթությանը", "параллельна плоскости"), t("intersecting the plane", "հատում է հարթությունը", "пересекает плоскость"), t("perpendicular to the plane", "ուղղահայաց է հարթությանը", "перпендикулярна плоскости")], 0),
        q(t("If a ∥ α and a plane through a meets α along b, then…", "Եթե a ∥ α և a-ով անցնող հարթությունը α-ն հատում է b-ով, ապա…", "Если a ∥ α и плоскость через a пересекает α по b, то…"), [t("a ∥ b", "a ∥ b", "a ∥ b"), t("a and b intersect", "a-ն և b-ն հատվում են", "a и b пересекаются"), t("a ⊥ b", "a ⊥ b", "a ⊥ b")], 0),
        q(t("The midpoints of the sides of a spatial quadrilateral form…", "Տարածական քառանկյան կողմերի միջնակետերը կազմում են…", "Середины сторон пространственного четырёхугольника образуют…"), [t("a spatial quadrilateral", "տարածական քառանկյուն", "пространственный четырёхугольник"), t("a parallelogram", "զուգահեռագիծ", "параллелограмм"), t("a rectangle always", "միշտ ուղղանկյուն", "всегда прямоугольник")], 1),
        q(t("If a ∥ α, then a is parallel to…", "Եթե a ∥ α, ապա a-ն զուգահեռ է…", "Если a ∥ α, то a параллельна…"), [t("every line in α", "α-ի յուրաքանչյուր ուղղին", "каждой прямой в α"), t("only the lines of α coplanar with a", "միայն α-ի a-ի հետ համահարթ ուղիղներին", "только прямым α, компланарным с a"), t("no line in α", "α-ի ոչ մի ուղղին", "ни одной прямой в α")], 1),
      ],
    ),
    lesson(
      "skew-lines",
      ["Skew lines; angle between lines", "Խաչվող ուղիղներ, ուղիղների միջև անկյուն", "Скрещивающиеся прямые; угол между прямыми"],
      {
        en: ["Define skew lines and apply the criterion for two lines to be skew", "Know the three possible positions of two lines in space and classify pairs of edges of a cube or pyramid", "Define the angle between skew lines and compute it in cubes and prisms"],
        hy: ["Սահմանել խաչվող ուղիղները և կիրառել երկու ուղիղների խաչվող լինելու հայտանիշը", "Իմանալ տարածության երկու ուղիղների երեք հնարավոր դասավորությունները և դասակարգել խորանարդի կամ բուրգի կողերի զույգերը", "Սահմանել խաչվող ուղիղների միջև անկյունը և հաշվել այն խորանարդներում և պրիզմաներում"],
        ru: ["Определять скрещивающиеся прямые и применять признак скрещивающихся прямых", "Знать три возможных случая взаимного расположения двух прямых в пространстве и классифицировать пары рёбер куба или пирамиды", "Определять угол между скрещивающимися прямыми и вычислять его в кубах и призмах"],
      },
      {
        en: `## Three positions of two lines

Two distinct lines in space either **intersect** (one common point, coplanar), or are **parallel** (no common points, coplanar), or are **skew**: they do not lie in any one plane. Skew lines have no common points and are not parallel.

**Criterion.** If one line lies in a plane and another line meets this plane at a point not on the first line, then the lines are skew.

*Proof.* Let $a \\subset \\alpha$, $b \\cap \\alpha = M$, $M \\notin a$. If $a$ and $b$ were coplanar, their plane would contain $a$ and $M$, hence be $\\alpha$ (Theorem 1 of the previous unit), and $b \\subset \\alpha$, contradicting $b \\cap \\alpha = M$. $\\blacksquare$

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$: $AB$ and $CC_1$ are skew. Indeed $AB \\subset (ABCD)$, $CC_1$ meets the base at $C \\notin AB$.

**Example 2.** Classify the pairs of edges of the cube with respect to $AB$: intersecting $AD, BC, AA_1, BB_1$; parallel $DC, A_1B_1, D_1C_1$; skew $CC_1, DD_1, A_1D_1, B_1C_1$.

**Example 3.** In the tetrahedron $ABCD$ every pair of opposite edges ($AB$ and $CD$, $AC$ and $BD$, $AD$ and $BC$) is skew, because the four vertices are not coplanar.

**Theorem.** Through each of two skew lines there passes exactly one plane parallel to the other line.

*Proof.* Through a point $M \\in a$ draw $b' \\parallel b$; the plane $(a, b')$ is parallel to $b$ by the criterion of the previous lesson. Uniqueness: the plane must contain $a$ and the parallel to $b$ through $M$. $\\blacksquare$

## Angle between lines

For intersecting lines the angle is the smaller of the angles they form, so $0^\\circ < \\varphi \\le 90^\\circ$. For **skew** lines $a$ and $b$ the angle is defined as the angle between intersecting lines $a_1 \\parallel a$ and $b_1 \\parallel b$ drawn through any point. It does not depend on the point: angles with respectively parallel sides are equal (a theorem of space, proved via parallelograms).

Parallel lines form the angle $0^\\circ$; lines forming $90^\\circ$ are **perpendicular**, whether they intersect or are skew.

**Example 4.** In the cube, the angle between $AB$ and $B_1C_1$: translate $B_1C_1$ to $BC$ ($BC \\parallel B_1C_1$); $\\angle ABC = 90^\\circ$. So $AB \\perp B_1C_1$.

**Example 5.** The angle between $AB_1$ and $DC_1$ in the cube is $0^\\circ$ (they are parallel, Example 5 of the drawing lesson). The angle between $AB_1$ and $BC_1$: $BC_1 \\parallel AD_1$, and the triangle $AB_1D_1$ has all sides equal to face diagonals, so it is equilateral and the angle is $60^\\circ$.

**Example 6.** The angle between $AC$ and $B_1D_1$: $B_1D_1 \\parallel BD$, and the diagonals of the square $ABCD$ are perpendicular, so $90^\\circ$.

**Example 7.** In the regular triangular prism $ABCA_1B_1C_1$ with all edges equal to $1$, find the angle between $AB_1$ and $BC$. Since $BC \\parallel B_1C_1$, we need $\\angle AB_1C_1$. $AB_1 = \\sqrt2$ (diagonal of a unit square), $B_1C_1 = 1$, $AC_1 = \\sqrt2$. By the cosine law, $\\cos\\angle AB_1C_1 = \\dfrac{2 + 1 - 2}{2\\sqrt2 \\cdot 1} = \\dfrac{1}{2\\sqrt2} = \\dfrac{\\sqrt2}{4}$, so $\\varphi = \\arccos\\dfrac{\\sqrt2}{4} \\approx 69^\\circ$.

**Example 8.** In the rectangular parallelepiped with $AB = 3$, $AD = 4$, $AA_1 = 12$, find the angle between $A_1C_1$ and $BD$. $A_1C_1 \\parallel AC$ and the angle between the diagonals $AC$ and $BD$ of the rectangle $3 \\times 4$: in the triangle $AOB$ ($O$ centre) $AO = BO = \\dfrac52$, $AB = 3$, $\\cos\\angle AOB = \\dfrac{\\frac{25}{4} + \\frac{25}{4} - 9}{2 \\cdot \\frac{25}{4}} = \\dfrac{\\frac{14}{4}}{\\frac{50}{4}} = \\dfrac{7}{25}$. The angle between the lines is $\\arccos\\dfrac{7}{25} \\approx 73{,}7^\\circ$.

## Strategy

To find the angle between skew lines: move one line parallel to itself until it meets the other (usually to a vertex of the solid), then compute the angle in a triangle with the cosine law or right-triangle ratios. If the result is obtuse, take its supplement.

### Exercises

1. In the cube $ABCDA_1B_1C_1D_1$ list all edges skew to $AA_1$.
2. In the pyramid $SABCD$ with a parallelogram base, which pairs of the lines $SA$, $BC$, $CD$, $AB$ are skew?
3. Prove that if $a$ and $b$ are skew and $c \\parallel a$, then $c$ and $b$ are skew or intersecting, but not parallel.
4. Find the angle between $AD_1$ and $BC$ in the cube.
5. Find the angle between $A_1C_1$ and $AB$ in the cube.
6. Find the angle between $AB_1$ and $A_1D$ in the cube.
7. In the regular triangular prism with all edges $1$, find the angle between $AC_1$ and $BB_1$.
8. In the rectangular parallelepiped with $AB = AD = 1$, $AA_1 = \\sqrt2$, find the angle between $BD_1$ and $AC$.

### Answers

1. $BC, CD, B_1C_1, C_1D_1$. 2. $SA$ and $BC$, $SA$ and $CD$ are skew; $BC$ and $CD$ intersect; $AB$ and $CD$ are parallel; $SA$ and $AB$ intersect. 3. If $c \\parallel b$, then $a \\parallel b$ by transitivity, contradiction. 4. $BC \\parallel AD$, $\\angle DAD_1 = 45^\\circ$. 5. $AB \\parallel A_1B_1$, $\\angle B_1A_1C_1 = 45^\\circ$. 6. $A_1D \\parallel B_1C$; the triangle $AB_1C$ is equilateral (face diagonals), so $60^\\circ$. 7. $BB_1 \\parallel CC_1$, $\\angle AC_1C$ with $CC_1 = 1$, $AC = 1$, right angle at $C$: $45^\\circ$. 8. $AC \\perp BD$ (square base) and $AC \\perp DD_1$, so $AC$ is perpendicular to the plane $BDD_1$ and hence to $BD_1$: $90^\\circ$.`,
        hy: `## Երկու ուղիղների երեք դասավորություն

Տարածության երկու տարբեր ուղիղներ կամ **հատվում են** (մեկ ընդհանուր կետ, համահարթ), կամ **զուգահեռ են** (ընդհանուր կետ չկա, համահարթ), կամ **խաչվող են**․ չեն գտնվում ոչ մի ընդհանուր հարթության մեջ։ Խաչվող ուղիղներն ընդհանուր կետ չունեն և զուգահեռ չեն։

**Հայտանիշ։** Եթե մի ուղիղը գտնվում է հարթության մեջ, իսկ մյուսն այդ հարթությունը հատում է առաջին ուղղի վրա չգտնվող կետում, ապա ուղիղները խաչվող են։

*Ապացույց։* Դիցուք $a \\subset \\alpha$, $b \\cap \\alpha = M$, $M \\notin a$։ Եթե $a$-ն և $b$-ն համահարթ լինեին, դրանց հարթությունը կպարունակեր $a$-ն և $M$-ը, հետևաբար կլիներ $\\alpha$-ն (նախորդ բաժնի թեորեմ 1), և $b \\subset \\alpha$, ինչը հակասում է $b \\cap \\alpha = M$-ին։ $\\blacksquare$

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $AB$-ն և $CC_1$-ը խաչվող են։ Իրոք, $AB \\subset (ABCD)$, $CC_1$-ը հիմքը հատում է $C \\notin AB$ կետում։

**Օրինակ 2։** Դասակարգենք խորանարդի կողերի զույգերը $AB$-ի նկատմամբ․ հատվող՝ $AD, BC, AA_1, BB_1$, զուգահեռ՝ $DC, A_1B_1, D_1C_1$, խաչվող՝ $CC_1, DD_1, A_1D_1, B_1C_1$։

**Օրինակ 3։** $ABCD$ քառանիստում հանդիպակաց կողերի յուրաքանչյուր զույգ ($AB$ և $CD$, $AC$ և $BD$, $AD$ և $BC$) խաչվող է, քանի որ չորս գագաթները համահարթ չեն։

**Թեորեմ։** Երկու խաչվող ուղիղներից յուրաքանչյուրով անցնում է մյուս ուղղին զուգահեռ ճիշտ մեկ հարթություն։

*Ապացույց։* $M \\in a$ կետով տանենք $b' \\parallel b$, $(a, b')$ հարթությունը զուգահեռ է $b$-ին նախորդ դասի հայտանիշով։ Միակություն․ հարթությունը պետք է պարունակի $a$-ն և $M$-ով անցնող $b$-ի զուգահեռը։ $\\blacksquare$

## Ուղիղների միջև անկյուն

Հատվող ուղիղների անկյունը դրանց կազմած անկյուններից փոքրն է, ուստի $0^\\circ < \\varphi \\le 90^\\circ$։ **Խաչվող** $a$ և $b$ ուղիղների անկյունը սահմանվում է որպես ցանկացած կետով տարված $a_1 \\parallel a$ և $b_1 \\parallel b$ հատվող ուղիղների անկյուն։ Այն կախված չէ կետից․ համապատասխանաբար զուգահեռ կողմերով անկյունները հավասար են (տարածության թեորեմ, ապացուցվում է զուգահեռագծերով)։

Զուգահեռ ուղիղները կազմում են $0^\\circ$ անկյուն, $90^\\circ$ կազմող ուղիղները **ուղղահայաց** են՝ անկախ նրանից՝ հատվում են, թե խաչվող են։

**Օրինակ 4։** Խորանարդում $AB$-ի և $B_1C_1$-ի անկյունը․ տեղափոխենք $B_1C_1$-ը $BC$-ի ($BC \\parallel B_1C_1$), $\\angle ABC = 90^\\circ$։ Ուստի $AB \\perp B_1C_1$։

**Օրինակ 5։** Խորանարդում $AB_1$-ի և $DC_1$-ի անկյունը $0^\\circ$ է (զուգահեռ են, գծագրման դասի օրինակ 5)։ $AB_1$-ի և $BC_1$-ի անկյունը․ $BC_1 \\parallel AD_1$, իսկ $AB_1D_1$ եռանկյան բոլոր կողմերը նիստերի անկյունագծեր են, ուստի այն հավասարակողմ է, անկյունը $60^\\circ$ է։

**Օրինակ 6։** $AC$-ի և $B_1D_1$-ի անկյունը․ $B_1D_1 \\parallel BD$, իսկ $ABCD$ քառակուսու անկյունագծերն ուղղահայաց են, ուստի $90^\\circ$։

**Օրինակ 7։** Բոլոր կողերը $1$ ունեցող $ABCA_1B_1C_1$ կանոնավոր եռանկյուն պրիզմայում գտնենք $AB_1$-ի և $BC$-ի անկյունը։ Քանի որ $BC \\parallel B_1C_1$, պետք է $\\angle AB_1C_1$-ը։ $AB_1 = \\sqrt2$ (միավոր քառակուսու անկյունագիծ), $B_1C_1 = 1$, $AC_1 = \\sqrt2$։ Կոսինուսների թեորեմով $\\cos\\angle AB_1C_1 = \\dfrac{2 + 1 - 2}{2\\sqrt2 \\cdot 1} = \\dfrac{1}{2\\sqrt2} = \\dfrac{\\sqrt2}{4}$, ուստի $\\varphi = \\arccos\\dfrac{\\sqrt2}{4} \\approx 69^\\circ$։

**Օրինակ 8։** $AB = 3$, $AD = 4$, $AA_1 = 12$ ուղղանկյուն զուգահեռանիստում գտնենք $A_1C_1$-ի և $BD$-ի անկյունը։ $A_1C_1 \\parallel AC$, իսկ $3 \\times 4$ ուղղանկյան $AC$ և $BD$ անկյունագծերի անկյունը․ $AOB$ եռանկյան մեջ ($O$-ն կենտրոնն է) $AO = BO = \\dfrac52$, $AB = 3$, $\\cos\\angle AOB = \\dfrac{\\frac{25}{4} + \\frac{25}{4} - 9}{2 \\cdot \\frac{25}{4}} = \\dfrac{\\frac{14}{4}}{\\frac{50}{4}} = \\dfrac{7}{25}$։ Ուղիղների անկյունը $\\arccos\\dfrac{7}{25} \\approx 73{,}7^\\circ$ է։

## Ռազմավարություն

Խաչվող ուղիղների անկյունը գտնելու համար․ ուղիղներից մեկը զուգահեռ տեղափոխեք այնպես, որ հատի մյուսին (սովորաբար մարմնի գագաթում), ապա անկյունը հաշվեք եռանկյան մեջ կոսինուսների թեորեմով կամ ուղղանկյուն եռանկյան հարաբերություններով։ Եթե ստացվում է բութ անկյուն, վերցրեք նրա լրացումը մինչև $180^\\circ$։

### Վարժություններ

1. $ABCDA_1B_1C_1D_1$ խորանարդում թվարկեք $AA_1$-ի հետ խաչվող բոլոր կողերը։
2. Զուգահեռագիծ հիմքով $SABCD$ բուրգում $SA$, $BC$, $CD$, $AB$ ուղիղների ո՞ր զույգերն են խաչվող։
3. Ապացուցեք, որ եթե $a$-ն և $b$-ն խաչվող են և $c \\parallel a$, ապա $c$-ն և $b$-ն խաչվող են կամ հատվող, բայց ոչ զուգահեռ։
4. Գտեք խորանարդում $AD_1$-ի և $BC$-ի անկյունը։
5. Գտեք խորանարդում $A_1C_1$-ի և $AB$-ի անկյունը։
6. Գտեք խորանարդում $AB_1$-ի և $A_1D$-ի անկյունը։
7. Բոլոր կողերը $1$ ունեցող կանոնավոր եռանկյուն պրիզմայում գտեք $AC_1$-ի և $BB_1$-ի անկյունը։
8. $AB = AD = 1$, $AA_1 = \\sqrt2$ ուղղանկյուն զուգահեռանիստում գտեք $BD_1$-ի և $AC$-ի անկյունը։

### Պատասխաններ

1. $BC, CD, B_1C_1, C_1D_1$։ 2. $SA$ և $BC$, $SA$ և $CD$՝ խաչվող, $BC$ և $CD$՝ հատվող, $AB$ և $CD$՝ զուգահեռ, $SA$ և $AB$՝ հատվող։ 3. Եթե $c \\parallel b$, ապա տրանզիտիվությամբ $a \\parallel b$՝ հակասություն։ 4. $BC \\parallel AD$, $\\angle DAD_1 = 45^\\circ$։ 5. $AB \\parallel A_1B_1$, $\\angle B_1A_1C_1 = 45^\\circ$։ 6. $A_1D \\parallel B_1C$, $AB_1C$ եռանկյունը հավասարակողմ է (նիստերի անկյունագծեր), ուստի $60^\\circ$։ 7. $BB_1 \\parallel CC_1$, $\\angle AC_1C$, որտեղ $CC_1 = 1$, $AC = 1$, ուղիղ անկյունը $C$-ում․ $45^\\circ$։ 8. $AC \\perp BD$ (քառակուսի հիմք) և $AC \\perp DD_1$, ուստի $AC$-ն ուղղահայաց է $BDD_1$ հարթությանը, հետևաբար $BD_1$-ին․ $90^\\circ$։`,
        ru: `## Три случая расположения двух прямых

Две различные прямые в пространстве либо **пересекаются** (одна общая точка, компланарны), либо **параллельны** (нет общих точек, компланарны), либо **скрещиваются**: не лежат ни в одной плоскости. Скрещивающиеся прямые не имеют общих точек и не параллельны.

**Признак.** Если одна прямая лежит в плоскости, а другая пересекает эту плоскость в точке, не лежащей на первой прямой, то прямые скрещивающиеся.

*Доказательство.* Пусть $a \\subset \\alpha$, $b \\cap \\alpha = M$, $M \\notin a$. Если бы $a$ и $b$ были компланарны, их плоскость содержала бы $a$ и $M$, то есть совпадала бы с $\\alpha$ (теорема 1 предыдущего раздела), и $b \\subset \\alpha$, что противоречит $b \\cap \\alpha = M$. $\\blacksquare$

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ прямые $AB$ и $CC_1$ скрещиваются. Действительно, $AB \\subset (ABCD)$, $CC_1$ пересекает основание в точке $C \\notin AB$.

**Пример 2.** Классифицируем пары рёбер куба по отношению к $AB$: пересекающиеся $AD, BC, AA_1, BB_1$; параллельные $DC, A_1B_1, D_1C_1$; скрещивающиеся $CC_1, DD_1, A_1D_1, B_1C_1$.

**Пример 3.** В тетраэдре $ABCD$ каждая пара противоположных рёбер ($AB$ и $CD$, $AC$ и $BD$, $AD$ и $BC$) скрещивается, так как четыре вершины не компланарны.

**Теорема.** Через каждую из двух скрещивающихся прямых проходит ровно одна плоскость, параллельная другой прямой.

*Доказательство.* Через точку $M \\in a$ проведём $b' \\parallel b$; плоскость $(a, b')$ параллельна $b$ по признаку из предыдущего урока. Единственность: плоскость должна содержать $a$ и параллельную к $b$ через $M$. $\\blacksquare$

## Угол между прямыми

Для пересекающихся прямых угол — меньший из образованных ими углов, поэтому $0^\\circ < \\varphi \\le 90^\\circ$. Для **скрещивающихся** прямых $a$ и $b$ угол определяется как угол между пересекающимися прямыми $a_1 \\parallel a$ и $b_1 \\parallel b$, проведёнными через любую точку. Он не зависит от точки: углы с соответственно параллельными сторонами равны (теорема пространства, доказывается через параллелограммы).

Параллельные прямые образуют угол $0^\\circ$; прямые, образующие $90^\\circ$, называются **перпендикулярными**, независимо от того, пересекаются они или скрещиваются.

**Пример 4.** В кубе угол между $AB$ и $B_1C_1$: перенесём $B_1C_1$ в $BC$ ($BC \\parallel B_1C_1$); $\\angle ABC = 90^\\circ$. Значит, $AB \\perp B_1C_1$.

**Пример 5.** Угол между $AB_1$ и $DC_1$ в кубе равен $0^\\circ$ (они параллельны, пример 5 урока об изображениях). Угол между $AB_1$ и $BC_1$: $BC_1 \\parallel AD_1$, а у треугольника $AB_1D_1$ все стороны — диагонали граней, значит, он равносторонний и угол равен $60^\\circ$.

**Пример 6.** Угол между $AC$ и $B_1D_1$: $B_1D_1 \\parallel BD$, а диагонали квадрата $ABCD$ перпендикулярны, значит, $90^\\circ$.

**Пример 7.** В правильной треугольной призме $ABCA_1B_1C_1$ со всеми рёбрами $1$ найдём угол между $AB_1$ и $BC$. Так как $BC \\parallel B_1C_1$, нужен $\\angle AB_1C_1$. $AB_1 = \\sqrt2$ (диагональ единичного квадрата), $B_1C_1 = 1$, $AC_1 = \\sqrt2$. По теореме косинусов $\\cos\\angle AB_1C_1 = \\dfrac{2 + 1 - 2}{2\\sqrt2 \\cdot 1} = \\dfrac{1}{2\\sqrt2} = \\dfrac{\\sqrt2}{4}$, значит, $\\varphi = \\arccos\\dfrac{\\sqrt2}{4} \\approx 69^\\circ$.

**Пример 8.** В прямоугольном параллелепипеде с $AB = 3$, $AD = 4$, $AA_1 = 12$ найдём угол между $A_1C_1$ и $BD$. $A_1C_1 \\parallel AC$, а угол между диагоналями $AC$ и $BD$ прямоугольника $3 \\times 4$: в треугольнике $AOB$ ($O$ — центр) $AO = BO = \\dfrac52$, $AB = 3$, $\\cos\\angle AOB = \\dfrac{\\frac{25}{4} + \\frac{25}{4} - 9}{2 \\cdot \\frac{25}{4}} = \\dfrac{\\frac{14}{4}}{\\frac{50}{4}} = \\dfrac{7}{25}$. Угол между прямыми равен $\\arccos\\dfrac{7}{25} \\approx 73{,}7^\\circ$.

## Стратегия

Чтобы найти угол между скрещивающимися прямыми: перенесите одну прямую параллельно так, чтобы она пересекла другую (обычно в вершину тела), затем вычислите угол в треугольнике по теореме косинусов или через отношения в прямоугольном треугольнике. Если получился тупой угол, возьмите смежный с ним.

### Упражнения

1. В кубе $ABCDA_1B_1C_1D_1$ перечислите все рёбра, скрещивающиеся с $AA_1$.
2. В пирамиде $SABCD$ с основанием-параллелограммом какие пары прямых $SA$, $BC$, $CD$, $AB$ скрещиваются?
3. Докажите: если $a$ и $b$ скрещиваются и $c \\parallel a$, то $c$ и $b$ скрещиваются или пересекаются, но не параллельны.
4. Найдите угол между $AD_1$ и $BC$ в кубе.
5. Найдите угол между $A_1C_1$ и $AB$ в кубе.
6. Найдите угол между $AB_1$ и $A_1D$ в кубе.
7. В правильной треугольной призме со всеми рёбрами $1$ найдите угол между $AC_1$ и $BB_1$.
8. В прямоугольном параллелепипеде с $AB = AD = 1$, $AA_1 = \\sqrt2$ найдите угол между $BD_1$ и $AC$.

### Ответы

1. $BC, CD, B_1C_1, C_1D_1$. 2. $SA$ и $BC$, $SA$ и $CD$ скрещиваются; $BC$ и $CD$ пересекаются; $AB$ и $CD$ параллельны; $SA$ и $AB$ пересекаются. 3. Если $c \\parallel b$, то $a \\parallel b$ по транзитивности — противоречие. 4. $BC \\parallel AD$, $\\angle DAD_1 = 45^\\circ$. 5. $AB \\parallel A_1B_1$, $\\angle B_1A_1C_1 = 45^\\circ$. 6. $A_1D \\parallel B_1C$; треугольник $AB_1C$ равносторонний (диагонали граней), значит, $60^\\circ$. 7. $BB_1 \\parallel CC_1$, $\\angle AC_1C$ при $CC_1 = 1$, $AC = 1$, прямой угол при $C$: $45^\\circ$. 8. $AC \\perp BD$ (квадрат в основании) и $AC \\perp DD_1$, значит, $AC$ перпендикулярна плоскости $BDD_1$, а потому и $BD_1$: $90^\\circ$.`,
      },
      [
        q(t("Skew lines are lines that…", "Խաչվող ուղիղներն այն ուղիղներն են, որոնք…", "Скрещивающиеся прямые — это прямые, которые…"), [t("do not lie in any one plane", "չեն գտնվում ոչ մի ընդհանուր հարթության մեջ", "не лежат ни в одной плоскости"), t("are parallel", "զուգահեռ են", "параллельны"), t("intersect at a right angle", "հատվում են ուղիղ անկյան տակ", "пересекаются под прямым углом")], 0),
        q(t("In the cube ABCDA₁B₁C₁D₁ the edges AB and CC₁ are…", "ABCDA₁B₁C₁D₁ խորանարդում AB և CC₁ կողերը…", "В кубе ABCDA₁B₁C₁D₁ рёбра AB и CC₁…"), [t("parallel", "զուգահեռ են", "параллельны"), t("intersecting", "հատվող են", "пересекаются"), t("skew", "խաչվող են", "скрещиваются")], 2),
        q(t("The angle between skew lines is…", "Խաչվող ուղիղների անկյունը…", "Угол между скрещивающимися прямыми —"), [t("undefined", "սահմանված չէ", "не определён"), t("the angle between parallel lines through one point", "մեկ կետով անցնող զուգահեռ ուղիղների անկյունն է", "угол между параллельными им прямыми через одну точку"), t("always 90°", "միշտ 90°", "всегда 90°")], 1),
        q(t("The angle between AB₁ and BC₁ in a cube is…", "Խորանարդում AB₁-ի և BC₁-ի անկյունը…", "Угол между AB₁ и BC₁ в кубе равен…"), [t("45°", "45°", "45°"), t("60°", "60°", "60°"), t("90°", "90°", "90°")], 1),
        q(t("Opposite edges of a tetrahedron are…", "Քառանիստի հանդիպակաց կողերը…", "Противоположные рёбра тетраэдра…"), [t("parallel", "զուգահեռ են", "параллельны"), t("skew", "խաչվող են", "скрещиваются"), t("intersecting", "հատվող են", "пересекаются")], 1),
        q(t("The angle between lines is always in the range…", "Ուղիղների անկյունը միշտ միջակայքում է…", "Угол между прямыми всегда лежит в пределах…"), [t("0° to 180°", "0°-ից 180°", "от 0° до 180°"), t("0° to 90°", "0°-ից 90°", "от 0° до 90°"), t("0° to 360°", "0°-ից 360°", "от 0° до 360°")], 1),
      ],
    ),
    lesson(
      "parallel-planes",
      ["Parallel planes", "Զուգահեռ հարթություններ", "Параллельность плоскостей"],
      {
        en: ["Define parallel planes and prove the criterion with two intersecting lines", "Prove that through a point outside a plane passes exactly one parallel plane", "Use the properties of parallel planes: intersection lines are parallel and segments of parallel lines between them are equal"],
        hy: ["Սահմանել զուգահեռ հարթությունները և ապացուցել հայտանիշն երկու հատվող ուղիղներով", "Ապացուցել, որ հարթությունից դուրս կետով անցնում է ճիշտ մեկ զուգահեռ հարթություն", "Օգտվել զուգահեռ հարթությունների հատկություններից․ հատման գծերը զուգահեռ են և դրանց միջև զուգահեռ ուղիղների հատվածները հավասար են"],
        ru: ["Определять параллельные плоскости и доказывать признак через две пересекающиеся прямые", "Доказывать, что через точку вне плоскости проходит ровно одна параллельная плоскость", "Использовать свойства параллельных плоскостей: линии пересечения параллельны, отрезки параллельных прямых между ними равны"],
      },
      {
        en: `## Definition

Two planes are **parallel** ($\\alpha \\parallel \\beta$) if they have no common points. By A3, two distinct planes either intersect along a line or are parallel; there is no third case.

Floor and ceiling, opposite faces of a box, the pages of a closed book are models of parallel planes.

## The criterion

**Theorem 1.** If two intersecting lines of one plane are respectively parallel to two lines of another plane, then the planes are parallel.

*Proof.* Let $a, b \\subset \\alpha$ meet at $M$, $a \\parallel a_1$, $b \\parallel b_1$, $a_1, b_1 \\subset \\beta$. Then $a \\parallel \\beta$ and $b \\parallel \\beta$ (criterion for a line and a plane). Suppose $\\alpha$ and $\\beta$ met along a line $c$. Then $a \\parallel c$ and $b \\parallel c$ (a line parallel to a plane is parallel to the intersection line of a plane through it). So through $M$ pass two lines parallel to $c$, impossible. Hence $\\alpha \\parallel \\beta$. $\\blacksquare$

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$ the faces $ABCD$ and $A_1B_1C_1D_1$ are parallel: $AB \\parallel A_1B_1$ and $AD \\parallel A_1D_1$ are two intersecting lines of the base parallel to lines of the top face.

**Example 2.** In the cube, the planes $AB_1D_1$ and $BDC_1$ are parallel: $AB_1 \\parallel DC_1$ and $AD_1 \\parallel BC_1$ (face diagonals forming the parallelograms $AB_1C_1D$ and $ABC_1D_1$).

**Example 3.** The plane through the midpoints $M, N, K$ of the edges $SA, SB, SC$ of the pyramid $SABC$ is parallel to the base: $MN \\parallel AB$ and $NK \\parallel BC$ (midlines).

## Existence and uniqueness

**Theorem 2.** Through a point not in a given plane there passes exactly one plane parallel to it.

*Existence.* Through the point $M \\notin \\alpha$ draw lines $a \\parallel a_1$ and $b \\parallel b_1$, where $a_1, b_1$ are two intersecting lines in $\\alpha$. The plane $(a, b)$ is parallel to $\\alpha$ by Theorem 1. *Uniqueness.* If two different planes through $M$ were parallel to $\\alpha$, they would meet along a line $c$ through $M$; a plane $\\gamma$ through $c$ cutting $\\alpha$ would give in $\\gamma$ two lines through $M$ parallel to $\\gamma \\cap \\alpha$, impossible. $\\blacksquare$

## Properties

**Property 1.** If two parallel planes are cut by a third plane, the intersection lines are parallel.

*Proof.* The lines $a = \\alpha \\cap \\gamma$ and $b = \\beta \\cap \\gamma$ lie in $\\gamma$ and have no common points, since $\\alpha \\cap \\beta = \\varnothing$. $\\blacksquare$

**Property 2.** Segments of parallel lines contained between parallel planes are equal.

*Proof.* Two such parallel lines fix a plane $\\gamma$ cutting $\\alpha$ and $\\beta$ along parallel lines (Property 1); the four points form a parallelogram, so the opposite sides are equal. $\\blacksquare$

**Property 3.** If $\\alpha \\parallel \\beta$ and $\\beta \\parallel \\gamma$, then $\\alpha \\parallel \\gamma$ (or $\\alpha = \\gamma$).

**Example 4.** The plane $\\gamma$ cuts the parallel planes $\\alpha$ and $\\beta$ along the lines $a$ and $b$. If $a$ is at distance $5$ cm from a point $P \\in b$, every point of $b$ is $5$ cm from $a$ (parallel lines in $\\gamma$).

**Example 5.** Two parallel planes $\\alpha$ and $\\beta$ are cut by two lines through a point $O$ between them: the first meets them at $A_1 \\in \\alpha$, $A_2 \\in \\beta$, the second at $B_1 \\in \\alpha$, $B_2 \\in \\beta$. Then $A_1B_1 \\parallel A_2B_2$ (Property 1 for the plane of the two lines) and the triangles $OA_1B_1$ and $OA_2B_2$ are similar: $\\dfrac{A_1B_1}{A_2B_2} = \\dfrac{OA_1}{OA_2}$. With $OA_1 = 4$, $OA_2 = 6$, $A_1B_1 = 10$: $A_2B_2 = 15$.

**Example 6.** The segments $AA_1$ and $BB_1$ of two parallel lines between the parallel planes $\\alpha$ and $\\beta$ are equal (Property 2), so $ABB_1A_1$ is a parallelogram.

**Example 7.** Through the midpoint $K$ of the edge $AA_1$ of the cube a plane parallel to the base is drawn. It cuts $BB_1, CC_1, DD_1$ at their midpoints (Property 2 applied to the segments of the vertical edges between the base and the section plane) and the section is a square equal to the base.

## Position of a line relative to parallel planes

If $a \\parallel \\alpha$ and $\\alpha \\parallel \\beta$, then $a \\parallel \\beta$ or $a \\subset \\beta$. If a line meets one of two parallel planes, it meets the other too.

### Exercises

1. Prove that the planes $AA_1B_1$ and $DD_1C_1$ of the cube are parallel.
2. The plane $\\alpha$ passes through the midpoints of two sides of a triangle and does not contain the third side. Prove that the third side is parallel to $\\alpha$.
3. Can two planes parallel to one line be non-parallel? Can two planes parallel to one plane be non-parallel?
4. The parallel planes $\\alpha$ and $\\beta$ are cut by the lines $AB$ and $CD$ meeting at $O$, with $A, C \\in \\alpha$, $B, D \\in \\beta$, $O$ between the planes. $OA = 6$, $OB = 9$, $AC = 8$. Find $BD$.
5. Same configuration with $O$ outside the planes (both planes on one side of $O$): $OA = 3$, $AB = 6$, $AC = 4$. Find $BD$.
6. $AB \\parallel \\alpha$; through $A$ and $B$ two parallel lines meet $\\alpha$ at $A_1$ and $B_1$. Prove that $AA_1 = BB_1$.
7. Prove that if a plane meets one of two parallel planes, it meets the other too.
8. In the cube with edge $1$, prove that the plane through the midpoints of $AB$, $AD$, $AA_1$ is parallel to the plane $A_1BD$, and find the perimeter of the section of the cube by this plane.

### Answers

1. $AA_1 \\parallel DD_1$ and $AB \\parallel DC$ are intersecting lines of the first plane parallel to lines of the second. 2. The midline $MN \\subset \\alpha$ is parallel to the third side $BC$, and $BC \\not\\subset \\alpha$, so $BC \\parallel \\alpha$. 3. Yes: two faces of a cube meeting along an edge are both parallel to the opposite edge. No: planes parallel to one plane are parallel to each other (Property 3). 4. Triangles $OAC$ and $OBD$ are similar: $BD = 8 \\cdot \\dfrac{9}{6} = 12$. 5. $OB = 9$, $BD = 4 \\cdot \\dfrac{9}{3} = 12$. 6. The lines $AA_1 \\parallel BB_1$ fix a plane cutting $\\alpha$ along $A_1B_1$; $AB \\parallel A_1B_1$ since $AB \\parallel \\alpha$, so $ABB_1A_1$ is a parallelogram and $AA_1 = BB_1$. 7. If $\\gamma$ meets $\\alpha$ along $c$ but not $\\beta$, then $\\gamma \\parallel \\beta$ and $\\alpha \\parallel \\beta$ are two planes through a point of $c$ parallel to $\\beta$, contradicting Theorem 2. 8. With $M, N, K$ the midpoints of $AB, AD, AA_1$: $MN \\parallel BD$ and $MK \\parallel BA_1$ (midlines of the triangles $ABD$ and $ABA_1$), so the planes are parallel by Theorem 1. The section is the triangle $MNK$ with sides $\\dfrac{\\sqrt2}{2}$, perimeter $\\dfrac{3\\sqrt2}{2}$.`,
        hy: `## Սահմանում

Երկու հարթություններ **զուգահեռ** են ($\\alpha \\parallel \\beta$), եթե ընդհանուր կետեր չունեն։ A3-ով երկու տարբեր հարթություններ կամ հատվում են ուղղով, կամ զուգահեռ են, երրորդ դեպք չկա։

Հատակը և առաստաղը, տուփի հանդիպակաց նիստերը, փակ գրքի թերթերը զուգահեռ հարթությունների մոդելներ են։

## Հայտանիշը

**Թեորեմ 1։** Եթե մի հարթության երկու հատվող ուղիղները համապատասխանաբար զուգահեռ են մյուս հարթության երկու ուղիղների, ապա հարթությունները զուգահեռ են։

*Ապացույց։* Դիցուք $a, b \\subset \\alpha$ հատվում են $M$-ում, $a \\parallel a_1$, $b \\parallel b_1$, $a_1, b_1 \\subset \\beta$։ Այդ դեպքում $a \\parallel \\beta$ և $b \\parallel \\beta$ (ուղղի և հարթության զուգահեռության հայտանիշ)։ Ենթադրենք $\\alpha$-ն և $\\beta$-ն հատվում են $c$ ուղղով։ Այդ դեպքում $a \\parallel c$ և $b \\parallel c$ (հարթությանը զուգահեռ ուղիղը զուգահեռ է նրանով անցնող հարթության հատման գծին)։ Ուստի $M$-ով անցնում են $c$-ին զուգահեռ երկու ուղիղ, ինչն անհնար է։ Հետևաբար $\\alpha \\parallel \\beta$։ $\\blacksquare$

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $ABCD$ և $A_1B_1C_1D_1$ նիստերը զուգահեռ են․ $AB \\parallel A_1B_1$ և $AD \\parallel A_1D_1$ հիմքի երկու հատվող ուղիղներ են, զուգահեռ վերին նիստի ուղիղներին։

**Օրինակ 2։** Խորանարդում $AB_1D_1$ և $BDC_1$ հարթությունները զուգահեռ են․ $AB_1 \\parallel DC_1$ և $AD_1 \\parallel BC_1$ (նիստերի անկյունագծեր, որոնք կազմում են $AB_1C_1D$ և $ABC_1D_1$ զուգահեռագծերը)։

**Օրինակ 3։** $SABC$ բուրգի $SA, SB, SC$ կողերի $M, N, K$ միջնակետերով անցնող հարթությունը զուգահեռ է հիմքին․ $MN \\parallel AB$ և $NK \\parallel BC$ (միջին գծեր)։

## Գոյություն և միակություն

**Թեորեմ 2։** Տրված հարթության մեջ չգտնվող կետով անցնում է նրան զուգահեռ ճիշտ մեկ հարթություն։

*Գոյություն։* $M \\notin \\alpha$ կետով տանենք $a \\parallel a_1$ և $b \\parallel b_1$ ուղիղներ, որտեղ $a_1, b_1$-ը $\\alpha$-ի երկու հատվող ուղիղներ են։ $(a, b)$ հարթությունը թեորեմ 1-ով զուգահեռ է $\\alpha$-ին։ *Միակություն։* Եթե $M$-ով անցնող երկու տարբեր հարթություններ զուգահեռ լինեին $\\alpha$-ին, դրանք կհատվեին $M$-ով անցնող $c$ ուղղով, $c$-ով անցնող և $\\alpha$-ն հատող $\\gamma$ հարթությունը $\\gamma$-ում կտար $M$-ով անցնող և $\\gamma \\cap \\alpha$-ին զուգահեռ երկու ուղիղ, ինչն անհնար է։ $\\blacksquare$

## Հատկություններ

**Հատկություն 1։** Եթե երկու զուգահեռ հարթություններ հատվում են երրորդով, հատման գծերը զուգահեռ են։

*Ապացույց։* $a = \\alpha \\cap \\gamma$ և $b = \\beta \\cap \\gamma$ ուղիղները գտնվում են $\\gamma$-ում և ընդհանուր կետեր չունեն, քանի որ $\\alpha \\cap \\beta = \\varnothing$։ $\\blacksquare$

**Հատկություն 2։** Զուգահեռ հարթությունների միջև պարփակված զուգահեռ ուղիղների հատվածները հավասար են։

*Ապացույց։* Երկու այդպիսի զուգահեռ ուղիղները որոշում են $\\gamma$ հարթություն, որը $\\alpha$-ն և $\\beta$-ն հատում է զուգահեռ ուղիղներով (հատկություն 1), չորս կետերը կազմում են զուգահեռագիծ, ուստի հանդիպակաց կողմերը հավասար են։ $\\blacksquare$

**Հատկություն 3։** Եթե $\\alpha \\parallel \\beta$ և $\\beta \\parallel \\gamma$, ապա $\\alpha \\parallel \\gamma$ (կամ $\\alpha = \\gamma$)։

**Օրինակ 4։** $\\gamma$ հարթությունը զուգահեռ $\\alpha$ և $\\beta$ հարթությունները հատում է $a$ և $b$ ուղիղներով։ Եթե $a$-ն $P \\in b$ կետից $5$ սմ հեռավորության վրա է, $b$-ի յուրաքանչյուր կետը $a$-ից $5$ սմ հեռավորության վրա է ($\\gamma$-ում զուգահեռ ուղիղներ)։

**Օրինակ 5։** Զուգահեռ $\\alpha$ և $\\beta$ հարթությունները հատվում են դրանց միջև գտնվող $O$ կետով անցնող երկու ուղիղներով․ առաջինը դրանք հատում է $A_1 \\in \\alpha$, $A_2 \\in \\beta$ կետերում, երկրորդը՝ $B_1 \\in \\alpha$, $B_2 \\in \\beta$։ Այդ դեպքում $A_1B_1 \\parallel A_2B_2$ (հատկություն 1 երկու ուղիղների հարթության համար), և $OA_1B_1$ ու $OA_2B_2$ եռանկյունները նման են․ $\\dfrac{A_1B_1}{A_2B_2} = \\dfrac{OA_1}{OA_2}$։ $OA_1 = 4$, $OA_2 = 6$, $A_1B_1 = 10$ դեպքում՝ $A_2B_2 = 15$։

**Օրինակ 6։** Զուգահեռ $\\alpha$ և $\\beta$ հարթությունների միջև երկու զուգահեռ ուղիղների $AA_1$ և $BB_1$ հատվածները հավասար են (հատկություն 2), ուստի $ABB_1A_1$-ը զուգահեռագիծ է։

**Օրինակ 7։** Խորանարդի $AA_1$ կողի $K$ միջնակետով տարված է հիմքին զուգահեռ հարթություն։ Այն $BB_1, CC_1, DD_1$-ը հատում է դրանց միջնակետերում (հատկություն 2 հիմքի և հատող հարթության միջև ուղղաձիգ կողերի հատվածների համար), և հատույթը հիմքին հավասար քառակուսի է։

## Ուղղի դիրքը զուգահեռ հարթությունների նկատմամբ

Եթե $a \\parallel \\alpha$ և $\\alpha \\parallel \\beta$, ապա $a \\parallel \\beta$ կամ $a \\subset \\beta$։ Եթե ուղիղը հատում է երկու զուգահեռ հարթություններից մեկը, ապա հատում է նաև մյուսը։

### Վարժություններ

1. Ապացուցեք, որ խորանարդի $AA_1B_1$ և $DD_1C_1$ հարթությունները զուգահեռ են։
2. $\\alpha$ հարթությունն անցնում է եռանկյան երկու կողմերի միջնակետերով և չի պարունակում երրորդ կողմը։ Ապացուցեք, որ երրորդ կողմը զուգահեռ է $\\alpha$-ին։
3. Կարո՞ղ են մեկ ուղղին զուգահեռ երկու հարթություններ զուգահեռ չլինել։ Մեկ հարթությանը զուգահեռ երկու հարթություններ։
4. Զուգահեռ $\\alpha$ և $\\beta$ հարթությունները հատվում են $O$-ում հատվող $AB$ և $CD$ ուղիղներով, $A, C \\in \\alpha$, $B, D \\in \\beta$, $O$-ն հարթությունների միջև է։ $OA = 6$, $OB = 9$, $AC = 8$։ Գտեք $BD$-ը։
5. Նույն դասավորությունը, բայց $O$-ն հարթություններից դուրս է (երկու հարթություններն էլ $O$-ի մի կողմում)․ $OA = 3$, $AB = 6$, $AC = 4$։ Գտեք $BD$-ը։
6. $AB \\parallel \\alpha$, $A$-ով և $B$-ով անցնող երկու զուգահեռ ուղիղներ $\\alpha$-ն հատում են $A_1$ և $B_1$ կետերում։ Ապացուցեք, որ $AA_1 = BB_1$։
7. Ապացուցեք, որ եթե հարթությունը հատում է երկու զուգահեռ հարթություններից մեկը, ապա հատում է նաև մյուսը։
8. $1$ կողով խորանարդում ապացուցեք, որ $AB$, $AD$, $AA_1$-ի միջնակետերով անցնող հարթությունը զուգահեռ է $A_1BD$ հարթությանը, և գտեք խորանարդի այդ հարթությամբ հատույթի պարագիծը։

### Պատասխաններ

1. $AA_1 \\parallel DD_1$ և $AB \\parallel DC$ առաջին հարթության հատվող ուղիղներ են, զուգահեռ երկրորդի ուղիղներին։ 2. $MN \\subset \\alpha$ միջին գիծը զուգահեռ է երրորդ $BC$ կողմին, և $BC \\not\\subset \\alpha$, ուստի $BC \\parallel \\alpha$։ 3. Այո․ խորանարդի մեկ կողով հատվող երկու նիստերն երկուսն էլ զուգահեռ են հանդիպակաց կողին։ Ոչ․ մեկ հարթությանը զուգահեռ հարթությունները զուգահեռ են միմյանց (հատկություն 3)։ 4. $OAC$ և $OBD$ եռանկյունները նման են․ $BD = 8 \\cdot \\dfrac{9}{6} = 12$։ 5. $OB = 9$, $BD = 4 \\cdot \\dfrac{9}{3} = 12$։ 6. $AA_1 \\parallel BB_1$ ուղիղները որոշում են հարթություն, որը $\\alpha$-ն հատում է $A_1B_1$-ով, $AB \\parallel A_1B_1$, քանի որ $AB \\parallel \\alpha$, ուստի $ABB_1A_1$-ը զուգահեռագիծ է և $AA_1 = BB_1$։ 7. Եթե $\\gamma$-ն $\\alpha$-ն հատում է $c$-ով, բայց $\\beta$-ն ոչ, ապա $\\gamma \\parallel \\beta$ և $\\alpha \\parallel \\beta$ երկու հարթություններ են $c$-ի կետով, զուգահեռ $\\beta$-ին, ինչը հակասում է թեորեմ 2-ին։ 8. $M, N, K$-ը $AB, AD, AA_1$-ի միջնակետերն են․ $MN \\parallel BD$ և $MK \\parallel BA_1$ ($ABD$ և $ABA_1$ եռանկյունների միջին գծեր), ուստի հարթությունները զուգահեռ են թեորեմ 1-ով։ Հատույթը $MNK$ եռանկյունն է $\\dfrac{\\sqrt2}{2}$ կողմերով, պարագիծը $\\dfrac{3\\sqrt2}{2}$։`,
        ru: `## Определение

Две плоскости **параллельны** ($\\alpha \\parallel \\beta$), если у них нет общих точек. По A3 две различные плоскости либо пересекаются по прямой, либо параллельны; третьего случая нет.

Пол и потолок, противоположные грани коробки, страницы закрытой книги — модели параллельных плоскостей.

## Признак

**Теорема 1.** Если две пересекающиеся прямые одной плоскости соответственно параллельны двум прямым другой плоскости, то плоскости параллельны.

*Доказательство.* Пусть $a, b \\subset \\alpha$ пересекаются в $M$, $a \\parallel a_1$, $b \\parallel b_1$, $a_1, b_1 \\subset \\beta$. Тогда $a \\parallel \\beta$ и $b \\parallel \\beta$ (признак параллельности прямой и плоскости). Допустим, $\\alpha$ и $\\beta$ пересекаются по прямой $c$. Тогда $a \\parallel c$ и $b \\parallel c$ (прямая, параллельная плоскости, параллельна линии пересечения проходящей через неё плоскости). Значит, через $M$ проходят две прямые, параллельные $c$, что невозможно. Следовательно, $\\alpha \\parallel \\beta$. $\\blacksquare$

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ грани $ABCD$ и $A_1B_1C_1D_1$ параллельны: $AB \\parallel A_1B_1$ и $AD \\parallel A_1D_1$ — две пересекающиеся прямые основания, параллельные прямым верхней грани.

**Пример 2.** В кубе плоскости $AB_1D_1$ и $BDC_1$ параллельны: $AB_1 \\parallel DC_1$ и $AD_1 \\parallel BC_1$ (диагонали граней, образующие параллелограммы $AB_1C_1D$ и $ABC_1D_1$).

**Пример 3.** Плоскость через середины $M, N, K$ рёбер $SA, SB, SC$ пирамиды $SABC$ параллельна основанию: $MN \\parallel AB$ и $NK \\parallel BC$ (средние линии).

## Существование и единственность

**Теорема 2.** Через точку, не лежащую в данной плоскости, проходит ровно одна плоскость, параллельная ей.

*Существование.* Через точку $M \\notin \\alpha$ проведём прямые $a \\parallel a_1$ и $b \\parallel b_1$, где $a_1, b_1$ — две пересекающиеся прямые в $\\alpha$. Плоскость $(a, b)$ параллельна $\\alpha$ по теореме 1. *Единственность.* Если бы две различные плоскости через $M$ были параллельны $\\alpha$, они пересекались бы по прямой $c$ через $M$; плоскость $\\gamma$ через $c$, пересекающая $\\alpha$, дала бы в $\\gamma$ две прямые через $M$, параллельные $\\gamma \\cap \\alpha$, что невозможно. $\\blacksquare$

## Свойства

**Свойство 1.** Если две параллельные плоскости пересечены третьей, то линии пересечения параллельны.

*Доказательство.* Прямые $a = \\alpha \\cap \\gamma$ и $b = \\beta \\cap \\gamma$ лежат в $\\gamma$ и не имеют общих точек, так как $\\alpha \\cap \\beta = \\varnothing$. $\\blacksquare$

**Свойство 2.** Отрезки параллельных прямых, заключённые между параллельными плоскостями, равны.

*Доказательство.* Две такие параллельные прямые задают плоскость $\\gamma$, пересекающую $\\alpha$ и $\\beta$ по параллельным прямым (свойство 1); четыре точки образуют параллелограмм, значит, противоположные стороны равны. $\\blacksquare$

**Свойство 3.** Если $\\alpha \\parallel \\beta$ и $\\beta \\parallel \\gamma$, то $\\alpha \\parallel \\gamma$ (или $\\alpha = \\gamma$).

**Пример 4.** Плоскость $\\gamma$ пересекает параллельные плоскости $\\alpha$ и $\\beta$ по прямым $a$ и $b$. Если $a$ удалена от точки $P \\in b$ на $5$ см, то каждая точка $b$ удалена от $a$ на $5$ см (параллельные прямые в $\\gamma$).

**Пример 5.** Две параллельные плоскости $\\alpha$ и $\\beta$ пересечены двумя прямыми, проходящими через точку $O$ между ними: первая пересекает их в $A_1 \\in \\alpha$, $A_2 \\in \\beta$, вторая — в $B_1 \\in \\alpha$, $B_2 \\in \\beta$. Тогда $A_1B_1 \\parallel A_2B_2$ (свойство 1 для плоскости двух прямых), и треугольники $OA_1B_1$ и $OA_2B_2$ подобны: $\\dfrac{A_1B_1}{A_2B_2} = \\dfrac{OA_1}{OA_2}$. При $OA_1 = 4$, $OA_2 = 6$, $A_1B_1 = 10$: $A_2B_2 = 15$.

**Пример 6.** Отрезки $AA_1$ и $BB_1$ двух параллельных прямых между параллельными плоскостями $\\alpha$ и $\\beta$ равны (свойство 2), значит, $ABB_1A_1$ — параллелограмм.

**Пример 7.** Через середину $K$ ребра $AA_1$ куба проведена плоскость, параллельная основанию. Она пересекает $BB_1, CC_1, DD_1$ в их серединах (свойство 2 для отрезков вертикальных рёбер между основанием и секущей плоскостью), и сечение — квадрат, равный основанию.

## Расположение прямой относительно параллельных плоскостей

Если $a \\parallel \\alpha$ и $\\alpha \\parallel \\beta$, то $a \\parallel \\beta$ или $a \\subset \\beta$. Если прямая пересекает одну из двух параллельных плоскостей, то она пересекает и другую.

### Упражнения

1. Докажите, что плоскости $AA_1B_1$ и $DD_1C_1$ куба параллельны.
2. Плоскость $\\alpha$ проходит через середины двух сторон треугольника и не содержит третью сторону. Докажите, что третья сторона параллельна $\\alpha$.
3. Могут ли две плоскости, параллельные одной прямой, быть непараллельными? Две плоскости, параллельные одной плоскости?
4. Параллельные плоскости $\\alpha$ и $\\beta$ пересечены прямыми $AB$ и $CD$, пересекающимися в $O$, причём $A, C \\in \\alpha$, $B, D \\in \\beta$, $O$ между плоскостями. $OA = 6$, $OB = 9$, $AC = 8$. Найдите $BD$.
5. Та же конфигурация, но $O$ вне плоскостей (обе плоскости по одну сторону от $O$): $OA = 3$, $AB = 6$, $AC = 4$. Найдите $BD$.
6. $AB \\parallel \\alpha$; через $A$ и $B$ проведены две параллельные прямые, пересекающие $\\alpha$ в $A_1$ и $B_1$. Докажите, что $AA_1 = BB_1$.
7. Докажите, что если плоскость пересекает одну из двух параллельных плоскостей, то она пересекает и другую.
8. В кубе с ребром $1$ докажите, что плоскость через середины $AB$, $AD$, $AA_1$ параллельна плоскости $A_1BD$, и найдите периметр сечения куба этой плоскостью.

### Ответы

1. $AA_1 \\parallel DD_1$ и $AB \\parallel DC$ — пересекающиеся прямые первой плоскости, параллельные прямым второй. 2. Средняя линия $MN \\subset \\alpha$ параллельна третьей стороне $BC$, и $BC \\not\\subset \\alpha$, значит, $BC \\parallel \\alpha$. 3. Да: две грани куба, пересекающиеся по ребру, обе параллельны противоположному ребру. Нет: плоскости, параллельные одной плоскости, параллельны между собой (свойство 3). 4. Треугольники $OAC$ и $OBD$ подобны: $BD = 8 \\cdot \\dfrac{9}{6} = 12$. 5. $OB = 9$, $BD = 4 \\cdot \\dfrac{9}{3} = 12$. 6. Прямые $AA_1 \\parallel BB_1$ задают плоскость, пересекающую $\\alpha$ по $A_1B_1$; $AB \\parallel A_1B_1$, так как $AB \\parallel \\alpha$, значит, $ABB_1A_1$ — параллелограмм и $AA_1 = BB_1$. 7. Если $\\gamma$ пересекает $\\alpha$ по $c$, но не $\\beta$, то $\\gamma \\parallel \\beta$ и $\\alpha \\parallel \\beta$ — две плоскости через точку прямой $c$, параллельные $\\beta$, что противоречит теореме 2. 8. Пусть $M, N, K$ — середины $AB, AD, AA_1$: $MN \\parallel BD$ и $MK \\parallel BA_1$ (средние линии треугольников $ABD$ и $ABA_1$), значит, плоскости параллельны по теореме 1. Сечение — треугольник $MNK$ со сторонами $\\dfrac{\\sqrt2}{2}$, периметр $\\dfrac{3\\sqrt2}{2}$.`,
      },
      [
        q(t("Two planes are parallel if they…", "Երկու հարթություններ զուգահեռ են, եթե…", "Две плоскости параллельны, если они…"), [t("have exactly one common point", "ունեն ճիշտ մեկ ընդհանուր կետ", "имеют ровно одну общую точку"), t("have no common points", "ընդհանուր կետեր չունեն", "не имеют общих точек"), t("have a common line", "ունեն ընդհանուր ուղիղ", "имеют общую прямую")], 1),
        q(t("Planes are parallel if two intersecting lines of one are parallel to…", "Հարթությունները զուգահեռ են, եթե մեկի երկու հատվող ուղիղները զուգահեռ են…", "Плоскости параллельны, если две пересекающиеся прямые одной параллельны…"), [t("one line of the other", "մյուսի մեկ ուղղին", "одной прямой другой"), t("two lines of the other", "մյուսի երկու ուղիղների", "двум прямым другой"), t("the other plane's normal", "մյուսի նորմալին", "нормали другой")], 1),
        q(t("A third plane cuts two parallel planes along lines that are…", "Երրորդ հարթությունն երկու զուգահեռ հարթություններ հատում է ուղիղներով, որոնք…", "Третья плоскость пересекает две параллельные плоскости по прямым, которые…"), [t("parallel", "զուգահեռ են", "параллельны"), t("intersecting", "հատվող են", "пересекаются"), t("skew", "խաչվող են", "скрещиваются")], 0),
        q(t("Segments of parallel lines between parallel planes are…", "Զուգահեռ հարթությունների միջև զուգահեռ ուղիղների հատվածները…", "Отрезки параллельных прямых между параллельными плоскостями…"), [t("equal", "հավասար են", "равны"), t("proportional to the distance", "համեմատական են հեռավորությանը", "пропорциональны расстоянию"), t("different in general", "ընդհանուր դեպքում տարբեր են", "в общем случае различны")], 0),
        q(t("Through a point outside a plane pass how many planes parallel to it?", "Հարթությունից դուրս կետով քանի՞ զուգահեռ հարթություն է անցնում։", "Сколько плоскостей, параллельных данной, проходит через точку вне неё?"), [t("none", "ոչ մեկը", "ни одной"), t("exactly one", "ճիշտ մեկ", "ровно одна"), t("infinitely many", "անվերջ շատ", "бесконечно много")], 1),
        q(t("In the cube, the planes AB₁D₁ and BDC₁ are…", "Խորանարդում AB₁D₁ և BDC₁ հարթությունները…", "В кубе плоскости AB₁D₁ и BDC₁…"), [t("parallel", "զուգահեռ են", "параллельны"), t("intersecting", "հատվող են", "пересекаются"), t("perpendicular", "ուղղահայաց են", "перпендикулярны")], 0),
      ],
    ),
    lesson(
      "tetrahedron-parallelepiped",
      ["Tetrahedron and parallelepiped", "Քառանիստ և զուգահեռանիստ", "Тетраэдр и параллелепипед"],
      {
        en: ["Describe the elements of a tetrahedron and a parallelepiped: faces, edges, vertices, diagonals", "Prove the two basic properties of a parallelepiped: opposite faces are parallel and equal, diagonals bisect each other", "Compute lengths in tetrahedra and parallelepipeds using midlines, parallelograms and the properties proved"],
        hy: ["Նկարագրել քառանիստի և զուգահեռանիստի տարրերը․ նիստեր, կողեր, գագաթներ, անկյունագծեր", "Ապացուցել զուգահեռանիստի երկու հիմնական հատկությունները․ հանդիպակաց նիստերը զուգահեռ և հավասար են, անկյունագծերը հատման կետում կիսվում են", "Հաշվել երկարություններ քառանիստներում և զուգահեռանիստներում՝ միջին գծերով, զուգահեռագծերով և ապացուցված հատկություններով"],
        ru: ["Описывать элементы тетраэдра и параллелепипеда: грани, рёбра, вершины, диагонали", "Доказывать два основных свойства параллелепипеда: противоположные грани параллельны и равны, диагонали точкой пересечения делятся пополам", "Вычислять длины в тетраэдрах и параллелепипедах, используя средние линии, параллелограммы и доказанные свойства"],
      },
      {
        en: `## Tetrahedron

Take a triangle $ABC$ and a point $D$ not in its plane. The four triangles $ABC$, $DAB$, $DBC$, $DCA$ form a **tetrahedron** $DABC$: $4$ faces, $6$ edges, $4$ vertices. Any face can be called the base; then the other three are lateral faces. Edges without a common vertex ($AB$ and $CD$, $AC$ and $BD$, $AD$ and $BC$) are **opposite**; they are skew.

A **regular tetrahedron** has all six edges equal; all faces are equilateral triangles.

**Example 1.** In a tetrahedron the midpoints of the edges $AB, BC, CD, DA$ form a parallelogram: the midlines of the faces $ABC$ and $ACD$ are parallel to $AC$, the midlines of $ABD$ and $BCD$ are parallel to $BD$. In a regular tetrahedron with edge $a$ it is a rhombus with side $\\dfrac a2$, and since $AC \\perp BD$ in a regular tetrahedron, it is a square.

**Example 2.** In the tetrahedron $DABC$, $M$ is the midpoint of $DA$ and $N$ of $DB$. The segment $MN$ is parallel to the base plane $ABC$ and $MN = \\dfrac{AB}{2}$. If $AB = 10$, then $MN = 5$.

**Example 3.** The three segments joining the midpoints of opposite edges of a tetrahedron meet at one point and bisect each other. Each is a diagonal of a parallelogram of the type in Example 1: for example, the parallelogram with vertices at the midpoints of $AB, BC, CD, DA$ has diagonals joining the midpoints of $AB$ and $CD$ and the midpoints of $BC$ and $DA$. The common point is the centroid of the tetrahedron.

## Parallelepiped

Take two equal parallelograms $ABCD$ and $A_1B_1C_1D_1$ in parallel planes so that $AA_1, BB_1, CC_1, DD_1$ are parallel equal segments. The six parallelograms form a **parallelepiped** $ABCDA_1B_1C_1D_1$: $6$ faces, $12$ edges, $8$ vertices, $4$ diagonals ($AC_1, BD_1, CA_1, DB_1$). Faces without common vertices are **opposite**.

**Property 1.** Opposite faces of a parallelepiped are parallel and equal.

*Proof* for $ABB_1A_1$ and $DCC_1D_1$: $AB \\parallel DC$ and $AA_1 \\parallel DD_1$, so the planes are parallel (criterion with two intersecting lines). Both faces are parallelograms with $AB = DC$, $AA_1 = DD_1$ and equal angles between these sides (angles with parallel sides), hence they are equal. $\\blacksquare$

**Property 2.** The diagonals of a parallelepiped meet at one point and bisect each other.

*Proof.* $AA_1 \\parallel CC_1$ and $AA_1 = CC_1$, so $AA_1C_1C$ is a parallelogram and its diagonals $AC_1$ and $A_1C$ bisect each other at the midpoint $O$ of $AC_1$. Similarly $AC_1$ and $BD_1$ bisect each other at the centre of the parallelogram $ABC_1D_1$, which is again the midpoint of $AC_1$, and $AC_1$ and $B_1D$ at the centre of $AB_1C_1D$. All four diagonals pass through $O$ and are bisected there. $\\blacksquare$

The point $O$ is the **centre of symmetry** of the parallelepiped.

**Example 4.** In the parallelepiped $ABCDA_1B_1C_1D_1$ with a rectangular base $AB = 4$, $AD = 6$, the section by the plane $ACC_1A_1$ is a parallelogram whose side $AC$ is a diagonal of the base: $AC = \\sqrt{16 + 36} = 2\\sqrt{13}$.

**Example 5.** Prove that the plane $A_1BD$ cuts the diagonal $AC_1$ at a point $K$ with $AK = \\dfrac13 AC_1$. Let $O_1$ be the centre of the base. The plane $AA_1C_1C$ contains $AC_1$ and $A_1O_1$ (since $O_1 \\in AC$), and $A_1O_1 \\subset (A_1BD)$. So $K = AC_1 \\cap A_1O_1$. In the parallelogram $AA_1C_1C$, the triangles $AKO_1$ and $C_1KA_1$ are similar with ratio $\\dfrac{AO_1}{A_1C_1} = \\dfrac12$, so $AK : KC_1 = 1 : 2$ and $AK = \\dfrac13 AC_1$.

**Example 6.** Which edges of the parallelepiped are parallel to the plane $AA_1C_1C$? Every edge except $BB_1$ and $DD_1$ has a vertex among $A, C, A_1, C_1$, so it meets the plane. $BB_1 \\parallel AA_1$ and $BB_1$ is not in the plane, so $BB_1 \\parallel (AA_1C_1C)$; likewise $DD_1$. Exactly two edges.

**Example 7.** In the tetrahedron $DABC$ the points $M \\in DA$, $N \\in DB$, $K \\in DC$ divide the edges in the ratio $DM : MA = DN : NB = DK : KC = 2 : 1$. The plane $MNK$ is parallel to the base: $MN \\parallel AB$ and $NK \\parallel BC$ by the converse of Thales' theorem. The triangle $MNK$ is similar to $ABC$ with ratio $\\dfrac23$, so its perimeter is $\\dfrac23$ of the base perimeter.

### Exercises

1. How many pairs of skew edges does a tetrahedron have? A parallelepiped?
2. In the regular tetrahedron with edge $6$, find the perimeter of the quadrilateral formed by the midpoints of $AB, BC, CD, DA$ and name its type.
3. $M, N, K$ are the midpoints of $DA, DB, DC$ in the tetrahedron $DABC$. Find the ratio of the perimeters of the triangles $MNK$ and $ABC$.
4. Prove that the midpoints of the edges $AB$, $AC$, $CD$ and $BD$ of a tetrahedron are coplanar.
5. In a parallelepiped, prove that the plane $ACC_1A_1$ contains the centre $O$ of the parallelepiped.
6. The diagonal $AC_1$ of a parallelepiped is $18$. Find the distance from the centre of the parallelepiped to the vertex $A$.
7. In the parallelepiped $ABCDA_1B_1C_1D_1$ all faces are squares with side $2$ and $K$ is the midpoint of $BB_1$. Find the perimeter of the section $AKC$.
8. In a parallelepiped, prove that the diagonal $A_1C$ is parallel to no face, while $A_1C_1 \\parallel (ABCD)$.

### Answers

1. $3$ pairs; in a parallelepiped each of the $12$ edges is skew to $4$ others, giving $\\dfrac{12 \\cdot 4}{2} = 24$ pairs. 2. A square with side $3$, perimeter $12$. 3. $1 : 2$, since $MN = \\dfrac{AB}{2}$, $NK = \\dfrac{BC}{2}$, $MK = \\dfrac{AC}{2}$. 4. The midpoints of $AB$ and $AC$ and the midpoints of $DB$ and $DC$ give midlines parallel to $BC$; the midpoints of $AB$ and $DB$ and of $AC$ and $DC$ give midlines parallel to $AD$. The four midpoints form a parallelogram, hence are coplanar. 5. $O$ is the midpoint of $AC_1$, and $AC_1 \\subset (ACC_1A_1)$. 6. $OA = \\dfrac{AC_1}{2} = 9$. 7. $AK = KC = \\sqrt{2^2 + 1^2} = \\sqrt5$ (right angles at $B$), $AC = 2\\sqrt2$; perimeter $2\\sqrt5 + 2\\sqrt2$. 8. $A_1C$ has the vertex $A_1$ in the faces $A_1B_1C_1D_1$, $AA_1B_1B$, $AA_1D_1D$ and the vertex $C$ in the other three faces, so it meets every face; $A_1C_1 \\parallel AC \\subset (ABCD)$ and $A_1C_1 \\not\\subset (ABCD)$.`,
        hy: `## Քառանիստ

Վերցնենք $ABC$ եռանկյուն և նրա հարթության մեջ չգտնվող $D$ կետ։ $ABC$, $DAB$, $DBC$, $DCA$ չորս եռանկյունները կազմում են $DABC$ **քառանիստ**․ $4$ նիստ, $6$ կող, $4$ գագաթ։ Ցանկացած նիստ կարելի է անվանել հիմք, այդ դեպքում մյուս երեքը կողմնային նիստեր են։ Ընդհանուր գագաթ չունեցող կողերը ($AB$ և $CD$, $AC$ և $BD$, $AD$ և $BC$) **հանդիպակաց** են, դրանք խաչվող են։

**Կանոնավոր քառանիստի** բոլոր վեց կողերը հավասար են, բոլոր նիստերը հավասարակողմ եռանկյուններ են։

**Օրինակ 1։** Քառանիստում $AB, BC, CD, DA$ կողերի միջնակետերը կազմում են զուգահեռագիծ․ $ABC$ և $ACD$ նիստերի միջին գծերը զուգահեռ են $AC$-ին, $ABD$ և $BCD$ նիստերի միջին գծերը՝ $BD$-ին։ $a$ կողով կանոնավոր քառանիստում այն $\\dfrac a2$ կողմով շեղանկյուն է, և քանի որ կանոնավոր քառանիստում $AC \\perp BD$, այն քառակուսի է։

**Օրինակ 2։** $DABC$ քառանիստում $M$-ը $DA$-ի միջնակետն է, $N$-ը՝ $DB$-ի։ $MN$ հատվածը զուգահեռ է $ABC$ հիմքի հարթությանը և $MN = \\dfrac{AB}{2}$։ Եթե $AB = 10$, ապա $MN = 5$։

**Օրինակ 3։** Քառանիստի հանդիպակաց կողերի միջնակետերը միացնող երեք հատվածները հատվում են մեկ կետում և այդ կետում կիսվում են։ Յուրաքանչյուրն օրինակ 1-ի տեսակի զուգահեռագծի անկյունագիծ է․ օրինակ, $AB, BC, CD, DA$-ի միջնակետերը գագաթներ ունեցող զուգահեռագծի անկյունագծերը միացնում են $AB$-ի և $CD$-ի միջնակետերը և $BC$-ի և $DA$-ի միջնակետերը։ Ընդհանուր կետը քառանիստի ծանրության կենտրոնն է։

## Զուգահեռանիստ

Վերցնենք զուգահեռ հարթություններում երկու հավասար զուգահեռագիծ՝ $ABCD$ և $A_1B_1C_1D_1$, այնպես, որ $AA_1, BB_1, CC_1, DD_1$-ը զուգահեռ հավասար հատվածներ լինեն։ Վեց զուգահեռագծերը կազմում են $ABCDA_1B_1C_1D_1$ **զուգահեռանիստ**․ $6$ նիստ, $12$ կող, $8$ գագաթ, $4$ անկյունագիծ ($AC_1, BD_1, CA_1, DB_1$)։ Ընդհանուր գագաթ չունեցող նիստերը **հանդիպակաց** են։

**Հատկություն 1։** Զուգահեռանիստի հանդիպակաց նիստերը զուգահեռ և հավասար են։

*Ապացույց* $ABB_1A_1$-ի և $DCC_1D_1$-ի համար․ $AB \\parallel DC$ և $AA_1 \\parallel DD_1$, ուստի հարթությունները զուգահեռ են (երկու հատվող ուղիղներով հայտանիշ)։ Երկու նիստերը զուգահեռագծեր են, որտեղ $AB = DC$, $AA_1 = DD_1$ և այդ կողմերի միջև անկյունները հավասար են (զուգահեռ կողմերով անկյուններ), հետևաբար նիստերը հավասար են։ $\\blacksquare$

**Հատկություն 2։** Զուգահեռանիստի անկյունագծերը հատվում են մեկ կետում և այդ կետում կիսվում են։

*Ապացույց։* $AA_1 \\parallel CC_1$ և $AA_1 = CC_1$, ուստի $AA_1C_1C$-ը զուգահեռագիծ է, և նրա $AC_1$ ու $A_1C$ անկյունագծերը կիսվում են $AC_1$-ի $O$ միջնակետում։ Նույն կերպ $AC_1$-ը և $BD_1$-ը կիսվում են $ABC_1D_1$ զուգահեռագծի կենտրոնում, որը նորից $AC_1$-ի միջնակետն է, իսկ $AC_1$-ը և $B_1D$-ը՝ $AB_1C_1D$-ի կենտրոնում։ Բոլոր չորս անկյունագծերն անցնում են $O$-ով և այնտեղ կիսվում են։ $\\blacksquare$

$O$ կետը զուգահեռանիստի **սիմետրիայի կենտրոնն** է։

**Օրինակ 4։** $AB = 4$, $AD = 6$ ուղղանկյուն հիմքով $ABCDA_1B_1C_1D_1$ զուգահեռանիստում $ACC_1A_1$ հարթությամբ հատույթը զուգահեռագիծ է, որի $AC$ կողմը հիմքի անկյունագիծն է․ $AC = \\sqrt{16 + 36} = 2\\sqrt{13}$։

**Օրինակ 5։** Ապացուցենք, որ $A_1BD$ հարթությունը $AC_1$ անկյունագիծը հատում է $K$ կետում, որտեղ $AK = \\dfrac13 AC_1$։ Դիցուք $O_1$-ը հիմքի կենտրոնն է։ $AA_1C_1C$ հարթությունը պարունակում է $AC_1$-ը և $A_1O_1$-ը (քանի որ $O_1 \\in AC$), և $A_1O_1 \\subset (A_1BD)$։ Ուստի $K = AC_1 \\cap A_1O_1$։ $AA_1C_1C$ զուգահեռագծում $AKO_1$ և $C_1KA_1$ եռանկյունները նման են $\\dfrac{AO_1}{A_1C_1} = \\dfrac12$ հարաբերությամբ, ուստի $AK : KC_1 = 1 : 2$ և $AK = \\dfrac13 AC_1$։

**Օրինակ 6։** Զուգահեռանիստի ո՞ր կողերն են զուգահեռ $AA_1C_1C$ հարթությանը։ $BB_1$-ից և $DD_1$-ից բացի յուրաքանչյուր կող ունի գագաթ $A, C, A_1, C_1$-ի մեջ, ուստի հատում է հարթությունը։ $BB_1 \\parallel AA_1$ և $BB_1$-ը հարթության մեջ չէ, ուստի $BB_1 \\parallel (AA_1C_1C)$, նույն կերպ $DD_1$։ Ճիշտ երկու կող։

**Օրինակ 7։** $DABC$ քառանիստում $M \\in DA$, $N \\in DB$, $K \\in DC$ կետերը կողերը բաժանում են $DM : MA = DN : NB = DK : KC = 2 : 1$ հարաբերությամբ։ $MNK$ հարթությունը զուգահեռ է հիմքին․ $MN \\parallel AB$ և $NK \\parallel BC$ Թալեսի թեորեմի հակադարձով։ $MNK$ եռանկյունը նման է $ABC$-ին $\\dfrac23$ հարաբերությամբ, ուստի նրա պարագիծը հիմքի պարագծի $\\dfrac23$-ն է։

### Վարժություններ

1. Քանի՞ զույգ խաչվող կող ունի քառանիստը։ Զուգահեռանիստը։
2. $6$ կողով կանոնավոր քառանիստում գտեք $AB, BC, CD, DA$-ի միջնակետերով կազմված քառանկյան պարագիծը և նշեք նրա տեսակը։
3. $M, N, K$-ը $DABC$ քառանիստի $DA, DB, DC$ կողերի միջնակետերն են։ Գտեք $MNK$ և $ABC$ եռանկյունների պարագծերի հարաբերությունը։
4. Ապացուցեք, որ քառանիստի $AB$, $AC$, $CD$ և $BD$ կողերի միջնակետերը համահարթ են։
5. Զուգահեռանիստում ապացուցեք, որ $ACC_1A_1$ հարթությունը պարունակում է զուգահեռանիստի $O$ կենտրոնը։
6. Զուգահեռանիստի $AC_1$ անկյունագիծը $18$ է։ Գտեք զուգահեռանիստի կենտրոնից $A$ գագաթի հեռավորությունը։
7. $ABCDA_1B_1C_1D_1$ զուգահեռանիստի բոլոր նիստերը $2$ կողմով քառակուսիներ են, $K$-ը $BB_1$-ի միջնակետն է։ Գտեք $AKC$ հատույթի պարագիծը։
8. Զուգահեռանիստում ապացուցեք, որ $A_1C$ անկյունագիծը ոչ մի նիստի զուգահեռ չէ, իսկ $A_1C_1 \\parallel (ABCD)$։

### Պատասխաններ

1. $3$ զույգ, զուգահեռանիստում $12$ կողերից յուրաքանչյուրը խաչվող է $4$-ի հետ, ուստի $\\dfrac{12 \\cdot 4}{2} = 24$ զույգ։ 2. $3$ կողմով քառակուսի, պարագիծը $12$։ 3. $1 : 2$, քանի որ $MN = \\dfrac{AB}{2}$, $NK = \\dfrac{BC}{2}$, $MK = \\dfrac{AC}{2}$։ 4. $AB$-ի և $AC$-ի միջնակետերը և $DB$-ի և $DC$-ի միջնակետերը տալիս են $BC$-ին զուգահեռ միջին գծեր, $AB$-ի և $DB$-ի ու $AC$-ի և $DC$-ի միջնակետերը՝ $AD$-ին զուգահեռ միջին գծեր։ Չորս միջնակետերը կազմում են զուգահեռագիծ, հետևաբար համահարթ են։ 5. $O$-ն $AC_1$-ի միջնակետն է, և $AC_1 \\subset (ACC_1A_1)$։ 6. $OA = \\dfrac{AC_1}{2} = 9$։ 7. $AK = KC = \\sqrt{2^2 + 1^2} = \\sqrt5$ (ուղիղ անկյուններ $B$-ում), $AC = 2\\sqrt2$, պարագիծը $2\\sqrt5 + 2\\sqrt2$։ 8. $A_1C$-ն ունի $A_1$ գագաթը $A_1B_1C_1D_1$, $AA_1B_1B$, $AA_1D_1D$ նիստերում և $C$ գագաթը մյուս երեք նիստերում, ուստի հատում է յուրաքանչյուր նիստ, $A_1C_1 \\parallel AC \\subset (ABCD)$ և $A_1C_1 \\not\\subset (ABCD)$։`,
        ru: `## Тетраэдр

Возьмём треугольник $ABC$ и точку $D$, не лежащую в его плоскости. Четыре треугольника $ABC$, $DAB$, $DBC$, $DCA$ образуют **тетраэдр** $DABC$: $4$ грани, $6$ рёбер, $4$ вершины. Любую грань можно назвать основанием; тогда остальные три — боковые грани. Рёбра без общей вершины ($AB$ и $CD$, $AC$ и $BD$, $AD$ и $BC$) называются **противоположными**; они скрещиваются.

У **правильного тетраэдра** все шесть рёбер равны; все грани — равносторонние треугольники.

**Пример 1.** В тетраэдре середины рёбер $AB, BC, CD, DA$ образуют параллелограмм: средние линии граней $ABC$ и $ACD$ параллельны $AC$, средние линии $ABD$ и $BCD$ параллельны $BD$. В правильном тетраэдре с ребром $a$ это ромб со стороной $\\dfrac a2$, а так как в правильном тетраэдре $AC \\perp BD$, это квадрат.

**Пример 2.** В тетраэдре $DABC$ точка $M$ — середина $DA$, $N$ — середина $DB$. Отрезок $MN$ параллелен плоскости основания $ABC$ и $MN = \\dfrac{AB}{2}$. Если $AB = 10$, то $MN = 5$.

**Пример 3.** Три отрезка, соединяющие середины противоположных рёбер тетраэдра, пересекаются в одной точке и делятся ею пополам. Каждый из них — диагональ параллелограмма вида из примера 1: например, у параллелограмма с вершинами в серединах $AB, BC, CD, DA$ диагонали соединяют середины $AB$ и $CD$ и середины $BC$ и $DA$. Общая точка — центр тяжести тетраэдра.

## Параллелепипед

Возьмём два равных параллелограмма $ABCD$ и $A_1B_1C_1D_1$ в параллельных плоскостях так, что $AA_1, BB_1, CC_1, DD_1$ — параллельные равные отрезки. Шесть параллелограммов образуют **параллелепипед** $ABCDA_1B_1C_1D_1$: $6$ граней, $12$ рёбер, $8$ вершин, $4$ диагонали ($AC_1, BD_1, CA_1, DB_1$). Грани без общих вершин называются **противоположными**.

**Свойство 1.** Противоположные грани параллелепипеда параллельны и равны.

*Доказательство* для $ABB_1A_1$ и $DCC_1D_1$: $AB \\parallel DC$ и $AA_1 \\parallel DD_1$, значит, плоскости параллельны (признак через две пересекающиеся прямые). Обе грани — параллелограммы с $AB = DC$, $AA_1 = DD_1$ и равными углами между этими сторонами (углы с параллельными сторонами), следовательно, они равны. $\\blacksquare$

**Свойство 2.** Диагонали параллелепипеда пересекаются в одной точке и делятся ею пополам.

*Доказательство.* $AA_1 \\parallel CC_1$ и $AA_1 = CC_1$, значит, $AA_1C_1C$ — параллелограмм, и его диагонали $AC_1$ и $A_1C$ делятся пополам в середине $O$ отрезка $AC_1$. Аналогично $AC_1$ и $BD_1$ делятся пополам в центре параллелограмма $ABC_1D_1$, который снова является серединой $AC_1$, а $AC_1$ и $B_1D$ — в центре $AB_1C_1D$. Все четыре диагонали проходят через $O$ и делятся в ней пополам. $\\blacksquare$

Точка $O$ — **центр симметрии** параллелепипеда.

**Пример 4.** В параллелепипеде $ABCDA_1B_1C_1D_1$ с прямоугольным основанием $AB = 4$, $AD = 6$ сечение плоскостью $ACC_1A_1$ — параллелограмм, сторона $AC$ которого является диагональю основания: $AC = \\sqrt{16 + 36} = 2\\sqrt{13}$.

**Пример 5.** Докажем, что плоскость $A_1BD$ пересекает диагональ $AC_1$ в точке $K$, причём $AK = \\dfrac13 AC_1$. Пусть $O_1$ — центр основания. Плоскость $AA_1C_1C$ содержит $AC_1$ и $A_1O_1$ (так как $O_1 \\in AC$), а $A_1O_1 \\subset (A_1BD)$. Значит, $K = AC_1 \\cap A_1O_1$. В параллелограмме $AA_1C_1C$ треугольники $AKO_1$ и $C_1KA_1$ подобны с коэффициентом $\\dfrac{AO_1}{A_1C_1} = \\dfrac12$, поэтому $AK : KC_1 = 1 : 2$ и $AK = \\dfrac13 AC_1$.

**Пример 6.** Какие рёбра параллелепипеда параллельны плоскости $AA_1C_1C$? Каждое ребро, кроме $BB_1$ и $DD_1$, имеет вершину среди $A, C, A_1, C_1$, значит, пересекает плоскость. $BB_1 \\parallel AA_1$, и $BB_1$ не лежит в плоскости, значит, $BB_1 \\parallel (AA_1C_1C)$; аналогично $DD_1$. Ровно два ребра.

**Пример 7.** В тетраэдре $DABC$ точки $M \\in DA$, $N \\in DB$, $K \\in DC$ делят рёбра в отношении $DM : MA = DN : NB = DK : KC = 2 : 1$. Плоскость $MNK$ параллельна основанию: $MN \\parallel AB$ и $NK \\parallel BC$ по обратной теореме Фалеса. Треугольник $MNK$ подобен $ABC$ с коэффициентом $\\dfrac23$, значит, его периметр равен $\\dfrac23$ периметра основания.

### Упражнения

1. Сколько пар скрещивающихся рёбер у тетраэдра? У параллелепипеда?
2. В правильном тетраэдре с ребром $6$ найдите периметр четырёхугольника с вершинами в серединах $AB, BC, CD, DA$ и назовите его вид.
3. $M, N, K$ — середины $DA, DB, DC$ тетраэдра $DABC$. Найдите отношение периметров треугольников $MNK$ и $ABC$.
4. Докажите, что середины рёбер $AB$, $AC$, $CD$ и $BD$ тетраэдра компланарны.
5. В параллелепипеде докажите, что плоскость $ACC_1A_1$ содержит центр $O$ параллелепипеда.
6. Диагональ $AC_1$ параллелепипеда равна $18$. Найдите расстояние от центра параллелепипеда до вершины $A$.
7. В параллелепипеде $ABCDA_1B_1C_1D_1$ все грани — квадраты со стороной $2$, $K$ — середина $BB_1$. Найдите периметр сечения $AKC$.
8. В параллелепипеде докажите, что диагональ $A_1C$ не параллельна ни одной грани, а $A_1C_1 \\parallel (ABCD)$.

### Ответы

1. $3$ пары; в параллелепипеде каждое из $12$ рёбер скрещивается с $4$ другими, итого $\\dfrac{12 \\cdot 4}{2} = 24$ пары. 2. Квадрат со стороной $3$, периметр $12$. 3. $1 : 2$, так как $MN = \\dfrac{AB}{2}$, $NK = \\dfrac{BC}{2}$, $MK = \\dfrac{AC}{2}$. 4. Середины $AB$ и $AC$ и середины $DB$ и $DC$ дают средние линии, параллельные $BC$; середины $AB$ и $DB$ и середины $AC$ и $DC$ — средние линии, параллельные $AD$. Четыре середины образуют параллелограмм, значит, компланарны. 5. $O$ — середина $AC_1$, а $AC_1 \\subset (ACC_1A_1)$. 6. $OA = \\dfrac{AC_1}{2} = 9$. 7. $AK = KC = \\sqrt{2^2 + 1^2} = \\sqrt5$ (прямые углы при $B$), $AC = 2\\sqrt2$; периметр $2\\sqrt5 + 2\\sqrt2$. 8. У $A_1C$ вершина $A_1$ лежит в гранях $A_1B_1C_1D_1$, $AA_1B_1B$, $AA_1D_1D$, а вершина $C$ — в остальных трёх гранях, значит, она пересекает каждую грань; $A_1C_1 \\parallel AC \\subset (ABCD)$ и $A_1C_1 \\not\\subset (ABCD)$.`,
      },
      [
        q(t("A tetrahedron has…", "Քառանիստն ունի…", "У тетраэдра…"), [t("4 faces, 6 edges, 4 vertices", "4 նիստ, 6 կող, 4 գագաթ", "4 грани, 6 рёбер, 4 вершины"), t("6 faces, 12 edges, 8 vertices", "6 նիստ, 12 կող, 8 գագաթ", "6 граней, 12 рёбер, 8 вершин"), t("4 faces, 4 edges, 4 vertices", "4 նիստ, 4 կող, 4 գագաթ", "4 грани, 4 ребра, 4 вершины")], 0),
        q(t("Opposite edges of a tetrahedron are…", "Քառանիստի հանդիպակաց կողերը…", "Противоположные рёбра тетраэдра…"), [t("parallel", "զուգահեռ են", "параллельны"), t("skew", "խաչվող են", "скрещиваются"), t("intersecting", "հատվող են", "пересекаются")], 1),
        q(t("The midpoints of AB, BC, CD, DA of a tetrahedron form…", "Քառանիստի AB, BC, CD, DA կողերի միջնակետերը կազմում են…", "Середины AB, BC, CD, DA тетраэдра образуют…"), [t("a parallelogram", "զուգահեռագիծ", "параллелограмм"), t("a non-planar quadrilateral", "ոչ հարթ քառանկյուն", "неплоский четырёхугольник"), t("a trapezoid", "սեղան", "трапецию")], 0),
        q(t("Opposite faces of a parallelepiped are…", "Զուգահեռանիստի հանդիպակաց նիստերը…", "Противоположные грани параллелепипеда…"), [t("parallel and equal", "զուգահեռ և հավասար են", "параллельны и равны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("equal but not parallel", "հավասար են, բայց ոչ զուգահեռ", "равны, но не параллельны")], 0),
        q(t("The diagonals of a parallelepiped…", "Զուգահեռանիստի անկյունագծերը…", "Диагонали параллелепипеда…"), [t("are pairwise skew", "զույգ-զույգ խաչվող են", "попарно скрещиваются"), t("meet at one point and bisect each other", "հատվում են մեկ կետում և կիսվում են", "пересекаются в одной точке и делятся пополам"), t("are all equal", "բոլորը հավասար են", "все равны")], 1),
        q(t("A parallelepiped has how many diagonals?", "Զուգահեռանիստը քանի՞ անկյունագիծ ունի։", "Сколько диагоналей у параллелепипеда?"), [t("2", "2", "2"), t("4", "4", "4"), t("8", "8", "8")], 1),
      ],
    ),
    lesson(
      "sections",
      ["Constructing sections", "Հատույթների կառուցում", "Построение сечений"],
      {
        en: ["Explain what a section of a polyhedron by a plane is and which polygons can be sections of a tetrahedron and a parallelepiped", "Construct sections using the axioms: the trace method and the method of parallel lines", "Compute perimeters and side lengths of sections in cubes and tetrahedra"],
        hy: ["Բացատրել, թե ինչ է բազմանիստի հատույթը հարթությամբ և որ բազմանկյունները կարող են լինել քառանիստի և զուգահեռանիստի հատույթներ", "Կառուցել հատույթներ աքսիոմներով․ հետքի եղանակ և զուգահեռ ուղիղների եղանակ", "Հաշվել հատույթների պարագծերը և կողմերի երկարությունները խորանարդներում և քառանիստներում"],
        ru: ["Объяснять, что такое сечение многогранника плоскостью и какие многоугольники могут быть сечениями тетраэдра и параллелепипеда", "Строить сечения с помощью аксиом: метод следов и метод параллельных прямых", "Вычислять периметры и длины сторон сечений в кубах и тетраэдрах"],
      },
      {
        en: `## What a section is

A **secant plane** of a polyhedron is a plane with points of the polyhedron on both sides of it. The polygon whose sides are the segments along which the plane cuts the faces is the **section**. Each side of the section lies in one face, so to build a section we find, face by face, two points of the plane in that face and join them (A2).

A tetrahedron has $4$ faces, so its sections are triangles or quadrilaterals. A parallelepiped has $6$ faces: its sections can be triangles, quadrilaterals, pentagons or hexagons, never more.

## Two working rules

1. **Two points in one face** give the side of the section in that face.
2. **Parallel faces** are cut along parallel lines (property of parallel planes). In a parallelepiped: if the section meets two opposite faces, the two sides are parallel.

A third tool is the **trace**: the line along which the secant plane meets the plane of a chosen face, extended beyond the face if needed. Points of the trace are intersections of lines of the section with lines of that face.

## Worked constructions

**Example 1 (three points on edges from one vertex).** In the tetrahedron $DABC$ the points $M \\in DA$, $N \\in DB$, $K \\in DC$. Each pair lies in a face: $MN \\subset DAB$, $NK \\subset DBC$, $KM \\subset DCA$. The section is the triangle $MNK$.

**Example 2 (trace method, quadrilateral).** Tetrahedron $DABC$, $M \\in AB$, $N \\in BC$, $K \\in AD$. $MN \\subset ABC$ and $MK \\subset ABD$ are two sides. For the face $DBC$ we have only the point $N$. The lines $MN$ and $AC$ lie in the base plane; extend them to meet at $P$. The point $P$ belongs to the secant plane (it is on $MN$) and to the plane $ACD$ (it is on $AC$), so $PK$ is the trace in the plane $ACD$; it meets $DC$ at $L$. The section is the quadrilateral $MNLK$.

**Example 3 (parallel faces).** Cube $ABCDA_1B_1C_1D_1$; $M$, $N$, $K$ are the midpoints of $AA_1$, $BB_1$, $CC_1$. $MN \\subset AA_1B_1B$, $NK \\subset BB_1C_1C$. The face $DD_1C_1C$ is opposite to $AA_1B_1B$, so the side in it is parallel to $MN$ and passes through $K$: it is $KL$ with $L$ the midpoint of $DD_1$. Then $LM$ closes the section: the square $MNKL$, equal to the base.

**Example 4 (diagonal section).** The plane through $A$, $C$ and $C_1$ of the cube. Since $AA_1 \\parallel CC_1$, the parallel lines are coplanar, so the plane contains $AA_1$ too. The section is the rectangle $ACC_1A_1$ with sides $a$ and $a\\sqrt2$ for a cube with edge $a$.

**Example 5 (hexagonal section).** In the cube with edge $a$, the plane through the midpoints of the edges $AB$, $BC$ and $CC_1$ also passes through the midpoints of $C_1D_1$, $D_1A_1$ and $A_1A$ (check with the parallel-faces rule: each new side is parallel to the side in the opposite face). The section is a regular hexagon; each side joins the midpoints of two adjacent edges of one face and equals $\\dfrac{a\\sqrt2}{2}$, so the perimeter is $3a\\sqrt2$.

**Example 6 (computing a side).** Cube with edge $4$; the section by the plane $BDC_1$ is an equilateral triangle with sides equal to the face diagonal $4\\sqrt2$; perimeter $12\\sqrt2$.

**Example 7 (pentagon by the trace method).** Cube with edge $6$; $M$ and $N$ are the midpoints of $AB$ and $AD$, and the section passes through $M$, $N$ and $C_1$. The trace in the base is the line $MN$; it meets the lines $BC$ and $DC$ at $P$ and $Q$ outside the square, with $BP = DQ = 3$. The line $PC_1$ lies in the plane of the face $BB_1C_1C$ and cuts $BB_1$ at $E$; from the similar triangles $PBE$ and $PCC_1$, $BE = CC_1 \\cdot \\dfrac{PB}{PC} = 6 \\cdot \\dfrac{3}{9} = 2$. Similarly $QC_1$ cuts $DD_1$ at $F$ with $DF = 2$. The section is the pentagon $MEC_1FN$.

## Checklist for a correct section

- Every vertex of the section lies on an edge of the solid.
- Every side lies in a face, and no face contains two sides.
- Sides in opposite faces of a parallelepiped are parallel.
- The number of sides does not exceed the number of faces.

### Exercises

1. Which polygons can be sections of a triangular pyramid? Of a cube?
2. In the tetrahedron $DABC$ construct the section through the midpoints of $DA$, $DB$ and $AC$ and name its type.
3. In the cube with edge $2$, construct the section through the midpoints of $AB$, $AD$ and $AA_1$ and find its perimeter.
4. In the cube with edge $a$, construct the section by the plane through $A_1$, $B$ and the midpoint $K$ of $CC_1$. Name the fourth vertex and the type of the quadrilateral.
5. Cube with edge $2$: find the perimeter of the section $ACC_1A_1$.
6. Cube with edge $6$: find the perimeter of the section through the midpoints of the edges $AB$, $BC$, $CC_1$.
7. Regular tetrahedron with edge $4$: the section through the midpoints of $AB$, $BC$, $CD$, $DA$ is a square. Find its perimeter.
8. Cube $ABCDA_1B_1C_1D_1$ with edge $3$; $M \\in AA_1$ with $AM = 1$, $N \\in CC_1$ with $CN = 1$. Construct the section through $B$, $M$, $N$, find its fourth vertex and its type.

### Answers

1. Triangles and quadrilaterals; triangles, quadrilaterals, pentagons and hexagons. 2. With $M \\in DA$, $N \\in DB$, $K \\in AC$: $MN \\parallel AB$, so the face $ABC$ is cut along the line through $K$ parallel to $AB$, which meets $BC$ at its midpoint $L$. $MNLK$ is a parallelogram: $MN = KL = \\dfrac{AB}{2}$ and $MK = NL = \\dfrac{DC}{2}$ (midlines). 3. Each side joins the midpoints of two edges from $A$, so equals $\\sqrt{1 + 1} = \\sqrt2$; the section is an equilateral triangle with perimeter $3\\sqrt2$. 4. The side through $K$ in the face $DD_1C_1C$ is parallel to $A_1B$ and ends at the midpoint $L$ of $D_1C_1$. The section $A_1BKL$ is an isosceles trapezoid: $A_1B = a\\sqrt2$, $KL = \\dfrac{a\\sqrt2}{2}$, $BK = A_1L = \\dfrac{a\\sqrt5}{2}$. 5. $2 \\cdot 2 + 2 \\cdot 2\\sqrt2 = 4 + 4\\sqrt2$. 6. Regular hexagon with side $3\\sqrt2$: $18\\sqrt2$. 7. Side $2$, perimeter $8$. 8. Through $N$ draw the parallel to $BM$ in the face $DD_1C_1C$: it meets $DD_1$ at $P$ with $DP = 2$; the parallel to $BN$ through $M$ meets $DD_1$ at the same point. $BMPN$ is a rhombus: $BM = BN = MP = NP = \\sqrt{9 + 1} = \\sqrt{10}$.`,
        hy: `## Ի՞նչ է հատույթը

Բազմանիստի **հատող հարթությունն** այն հարթությունն է, որի երկու կողմերում էլ կան բազմանիստի կետեր։ Բազմանկյունը, որի կողմերն այն հատվածներն են, որոնցով հարթությունը հատում է նիստերը, **հատույթն** է։ Հատույթի յուրաքանչյուր կողմ գտնվում է մեկ նիստում, ուստի հատույթ կառուցելու համար նիստ առ նիստ գտնում ենք հարթության երկու կետ այդ նիստում և միացնում դրանք (A2)։

Քառանիստն ունի $4$ նիստ, ուստի նրա հատույթներն եռանկյուններ կամ քառանկյուններ են։ Զուգահեռանիստն ունի $6$ նիստ․ նրա հատույթները կարող են լինել եռանկյուններ, քառանկյուններ, հնգանկյուններ կամ վեցանկյուններ, ավելին՝ երբեք։

## Երկու աշխատանքային կանոն

1. **Մեկ նիստում երկու կետ** տալիս են հատույթի կողմն այդ նիստում։
2. **Զուգահեռ նիստերը** հատվում են զուգահեռ ուղիղներով (զուգահեռ հարթությունների հատկություն)։ Զուգահեռանիստում․ եթե հատույթը հատում է երկու հանդիպակաց նիստ, այդ երկու կողմերը զուգահեռ են։

Երրորդ գործիքը **հետքն** է․ ուղիղը, որով հատող հարթությունը հատում է ընտրված նիստի հարթությունը, անհրաժեշտության դեպքում նիստից դուրս շարունակված։ Հետքի կետերը հատույթի ուղիղների և այդ նիստի ուղիղների հատման կետերն են։

## Կառուցման օրինակներ

**Օրինակ 1 (մեկ գագաթից ելնող կողերի երեք կետ)։** $DABC$ քառանիստում $M \\in DA$, $N \\in DB$, $K \\in DC$։ Յուրաքանչյուր զույգը մեկ նիստում է․ $MN \\subset DAB$, $NK \\subset DBC$, $KM \\subset DCA$։ Հատույթը $MNK$ եռանկյունն է։

**Օրինակ 2 (հետքի եղանակ, քառանկյուն)։** $DABC$ քառանիստ, $M \\in AB$, $N \\in BC$, $K \\in AD$։ $MN \\subset ABC$ և $MK \\subset ABD$ երկու կողմեր են։ $DBC$ նիստում ունենք միայն $N$ կետը։ $MN$ և $AC$ ուղիղները գտնվում են հիմքի հարթության մեջ, շարունակենք դրանք մինչև $P$ հատման կետը։ $P$ կետը պատկանում է հատող հարթությանը ($MN$-ի վրա է) և $ACD$ հարթությանը ($AC$-ի վրա է), ուստի $PK$-ն հետքն է $ACD$ հարթության մեջ, այն $DC$-ն հատում է $L$-ում։ Հատույթը $MNLK$ քառանկյունն է։

**Օրինակ 3 (զուգահեռ նիստեր)։** $ABCDA_1B_1C_1D_1$ խորանարդ, $M$, $N$, $K$-ը $AA_1$, $BB_1$, $CC_1$-ի միջնակետերն են։ $MN \\subset AA_1B_1B$, $NK \\subset BB_1C_1C$։ $DD_1C_1C$ նիստը հանդիպակաց է $AA_1B_1B$-ին, ուստի նրա մեջ կողմը զուգահեռ է $MN$-ին և անցնում է $K$-ով․ դա $KL$-ն է, որտեղ $L$-ը $DD_1$-ի միջնակետն է։ Ապա $LM$-ը փակում է հատույթը․ $MNKL$ քառակուսին, հավասար հիմքին։

**Օրինակ 4 (անկյունագծային հատույթ)։** Խորանարդի $A$, $C$ և $C_1$ կետերով անցնող հարթությունը։ Քանի որ $AA_1 \\parallel CC_1$, զուգահեռ ուղիղները համահարթ են, ուստի հարթությունը պարունակում է նաև $AA_1$-ը։ Հատույթը $ACC_1A_1$ ուղղանկյունն է $a$ և $a\\sqrt2$ կողմերով $a$ կողով խորանարդի դեպքում։

**Օրինակ 5 (վեցանկյուն հատույթ)։** $a$ կողով խորանարդում $AB$, $BC$ և $CC_1$ կողերի միջնակետերով անցնող հարթությունն անցնում է նաև $C_1D_1$, $D_1A_1$ և $A_1A$-ի միջնակետերով (ստուգեք զուգահեռ նիստերի կանոնով․ յուրաքանչյուր նոր կողմը զուգահեռ է հանդիպակաց նիստի կողմին)։ Հատույթը կանոնավոր վեցանկյուն է, յուրաքանչյուր կողմը միացնում է մեկ նիստի երկու հարևան կողերի միջնակետերը և հավասար է $\\dfrac{a\\sqrt2}{2}$, ուստի պարագիծը $3a\\sqrt2$ է։

**Օրինակ 6 (կողմի հաշվում)։** $4$ կողով խորանարդ, $BDC_1$ հարթությամբ հատույթը հավասարակողմ եռանկյուն է, որի կողմերը հավասար են նիստի անկյունագծին՝ $4\\sqrt2$, պարագիծը $12\\sqrt2$։

**Օրինակ 7 (հնգանկյուն հետքի եղանակով)։** $6$ կողով խորանարդ, $M$-ը և $N$-ը $AB$-ի և $AD$-ի միջնակետերն են, հատույթն անցնում է $M$, $N$ և $C_1$-ով։ Հիմքում հետքը $MN$ ուղիղն է, այն $BC$ և $DC$ ուղիղները հատում է քառակուսուց դուրս $P$ և $Q$ կետերում, որտեղ $BP = DQ = 3$։ $PC_1$ ուղիղը գտնվում է $BB_1C_1C$ նիստի հարթության մեջ և $BB_1$-ը հատում է $E$-ում, $PBE$ և $PCC_1$ նման եռանկյուններից $BE = CC_1 \\cdot \\dfrac{PB}{PC} = 6 \\cdot \\dfrac{3}{9} = 2$։ Նույն կերպ $QC_1$-ը $DD_1$-ը հատում է $F$-ում, $DF = 2$։ Հատույթը $MEC_1FN$ հնգանկյունն է։

## Ճիշտ հատույթի ստուգացանկ

- Հատույթի յուրաքանչյուր գագաթը մարմնի կողի վրա է։
- Յուրաքանչյուր կողմ գտնվում է նիստում, և ոչ մի նիստ երկու կողմ չի պարունակում։
- Զուգահեռանիստի հանդիպակաց նիստերում կողմերը զուգահեռ են։
- Կողմերի թիվը չի գերազանցում նիստերի թիվը։

### Վարժություններ

1. Ո՞ր բազմանկյունները կարող են լինել եռանկյուն բուրգի հատույթներ։ Խորանարդի։
2. $DABC$ քառանիստում կառուցեք $DA$, $DB$ և $AC$-ի միջնակետերով անցնող հատույթը և նշեք նրա տեսակը։
3. $2$ կողով խորանարդում կառուցեք $AB$, $AD$ և $AA_1$-ի միջնակետերով անցնող հատույթը և գտեք նրա պարագիծը։
4. $a$ կողով խորանարդում կառուցեք $A_1$, $B$ և $CC_1$-ի $K$ միջնակետով անցնող հարթությամբ հատույթը։ Նշեք չորրորդ գագաթը և քառանկյան տեսակը։
5. $2$ կողով խորանարդ․ գտեք $ACC_1A_1$ հատույթի պարագիծը։
6. $6$ կողով խորանարդ․ գտեք $AB$, $BC$, $CC_1$ կողերի միջնակետերով անցնող հատույթի պարագիծը։
7. $4$ կողով կանոնավոր քառանիստ․ $AB$, $BC$, $CD$, $DA$-ի միջնակետերով անցնող հատույթը քառակուսի է։ Գտեք նրա պարագիծը։
8. $3$ կողով $ABCDA_1B_1C_1D_1$ խորանարդ, $M \\in AA_1$, $AM = 1$, $N \\in CC_1$, $CN = 1$։ Կառուցեք $B$, $M$, $N$-ով անցնող հատույթը, գտեք նրա չորրորդ գագաթը և տեսակը։

### Պատասխաններ

1. Եռանկյուններ և քառանկյուններ, եռանկյուններ, քառանկյուններ, հնգանկյուններ և վեցանկյուններ։ 2. $M \\in DA$, $N \\in DB$, $K \\in AC$․ $MN \\parallel AB$, ուստի $ABC$ նիստը հատվում է $K$-ով անցնող $AB$-ին զուգահեռ ուղղով, որը $BC$-ն հատում է նրա $L$ միջնակետում։ $MNLK$-ը զուգահեռագիծ է․ $MN = KL = \\dfrac{AB}{2}$ և $MK = NL = \\dfrac{DC}{2}$ (միջին գծեր)։ 3. Յուրաքանչյուր կողմը միացնում է $A$-ից ելնող երկու կողերի միջնակետերը, ուստի հավասար է $\\sqrt{1 + 1} = \\sqrt2$, հատույթը հավասարակողմ եռանկյուն է $3\\sqrt2$ պարագծով։ 4. $DD_1C_1C$ նիստում $K$-ով անցնող կողմը զուգահեռ է $A_1B$-ին և վերջանում է $D_1C_1$-ի $L$ միջնակետում։ $A_1BKL$ հատույթը հավասարասրուն սեղան է․ $A_1B = a\\sqrt2$, $KL = \\dfrac{a\\sqrt2}{2}$, $BK = A_1L = \\dfrac{a\\sqrt5}{2}$։ 5. $2 \\cdot 2 + 2 \\cdot 2\\sqrt2 = 4 + 4\\sqrt2$։ 6. Կանոնավոր վեցանկյուն $3\\sqrt2$ կողմով․ $18\\sqrt2$։ 7. Կողմը $2$, պարագիծը $8$։ 8. $N$-ով $DD_1C_1C$ նիստում տանենք $BM$-ի զուգահեռը․ այն $DD_1$-ը հատում է $P$-ում, $DP = 2$, $M$-ով $BN$-ի զուգահեռը $DD_1$-ը հատում է նույն կետում։ $BMPN$-ը շեղանկյուն է․ $BM = BN = MP = NP = \\sqrt{9 + 1} = \\sqrt{10}$։`,
        ru: `## Что такое сечение

**Секущая плоскость** многогранника — плоскость, по обе стороны от которой есть точки многогранника. Многоугольник, стороны которого — отрезки, по которым плоскость пересекает грани, называется **сечением**. Каждая сторона сечения лежит в одной грани, поэтому для построения сечения мы грань за гранью находим две точки плоскости в этой грани и соединяем их (A2).

У тетраэдра $4$ грани, поэтому его сечения — треугольники или четырёхугольники. У параллелепипеда $6$ граней: его сечения могут быть треугольниками, четырёхугольниками, пятиугольниками или шестиугольниками, но не более.

## Два рабочих правила

1. **Две точки в одной грани** дают сторону сечения в этой грани.
2. **Параллельные грани** пересекаются по параллельным прямым (свойство параллельных плоскостей). В параллелепипеде: если сечение пересекает две противоположные грани, эти две стороны параллельны.

Третий инструмент — **след**: прямая, по которой секущая плоскость пересекает плоскость выбранной грани, при необходимости продолженная за грань. Точки следа — пересечения прямых сечения с прямыми этой грани.

## Разобранные построения

**Пример 1 (три точки на рёбрах из одной вершины).** В тетраэдре $DABC$ точки $M \\in DA$, $N \\in DB$, $K \\in DC$. Каждая пара лежит в грани: $MN \\subset DAB$, $NK \\subset DBC$, $KM \\subset DCA$. Сечение — треугольник $MNK$.

**Пример 2 (метод следов, четырёхугольник).** Тетраэдр $DABC$, $M \\in AB$, $N \\in BC$, $K \\in AD$. $MN \\subset ABC$ и $MK \\subset ABD$ — две стороны. В грани $DBC$ у нас только точка $N$. Прямые $MN$ и $AC$ лежат в плоскости основания; продолжим их до пересечения в точке $P$. Точка $P$ принадлежит секущей плоскости (лежит на $MN$) и плоскости $ACD$ (лежит на $AC$), значит, $PK$ — след в плоскости $ACD$; он пересекает $DC$ в $L$. Сечение — четырёхугольник $MNLK$.

**Пример 3 (параллельные грани).** Куб $ABCDA_1B_1C_1D_1$; $M$, $N$, $K$ — середины $AA_1$, $BB_1$, $CC_1$. $MN \\subset AA_1B_1B$, $NK \\subset BB_1C_1C$. Грань $DD_1C_1C$ противоположна $AA_1B_1B$, значит, сторона в ней параллельна $MN$ и проходит через $K$: это $KL$, где $L$ — середина $DD_1$. Затем $LM$ замыкает сечение: квадрат $MNKL$, равный основанию.

**Пример 4 (диагональное сечение).** Плоскость через $A$, $C$ и $C_1$ куба. Так как $AA_1 \\parallel CC_1$, параллельные прямые компланарны, и плоскость содержит также $AA_1$. Сечение — прямоугольник $ACC_1A_1$ со сторонами $a$ и $a\\sqrt2$ для куба с ребром $a$.

**Пример 5 (шестиугольное сечение).** В кубе с ребром $a$ плоскость через середины рёбер $AB$, $BC$ и $CC_1$ проходит также через середины $C_1D_1$, $D_1A_1$ и $A_1A$ (проверьте по правилу параллельных граней: каждая новая сторона параллельна стороне в противоположной грани). Сечение — правильный шестиугольник; каждая сторона соединяет середины двух соседних рёбер одной грани и равна $\\dfrac{a\\sqrt2}{2}$, поэтому периметр равен $3a\\sqrt2$.

**Пример 6 (вычисление стороны).** Куб с ребром $4$; сечение плоскостью $BDC_1$ — равносторонний треугольник со сторонами, равными диагонали грани $4\\sqrt2$; периметр $12\\sqrt2$.

**Пример 7 (пятиугольник методом следов).** Куб с ребром $6$; $M$ и $N$ — середины $AB$ и $AD$, сечение проходит через $M$, $N$ и $C_1$. След в основании — прямая $MN$; она пересекает прямые $BC$ и $DC$ в точках $P$ и $Q$ вне квадрата, причём $BP = DQ = 3$. Прямая $PC_1$ лежит в плоскости грани $BB_1C_1C$ и пересекает $BB_1$ в $E$; из подобия треугольников $PBE$ и $PCC_1$: $BE = CC_1 \\cdot \\dfrac{PB}{PC} = 6 \\cdot \\dfrac{3}{9} = 2$. Аналогично $QC_1$ пересекает $DD_1$ в $F$, $DF = 2$. Сечение — пятиугольник $MEC_1FN$.

## Проверка правильности сечения

- Каждая вершина сечения лежит на ребре тела.
- Каждая сторона лежит в грани, и ни одна грань не содержит двух сторон.
- Стороны в противоположных гранях параллелепипеда параллельны.
- Число сторон не превышает числа граней.

### Упражнения

1. Какие многоугольники могут быть сечениями треугольной пирамиды? Куба?
2. В тетраэдре $DABC$ постройте сечение через середины $DA$, $DB$ и $AC$ и назовите его вид.
3. В кубе с ребром $2$ постройте сечение через середины $AB$, $AD$ и $AA_1$ и найдите его периметр.
4. В кубе с ребром $a$ постройте сечение плоскостью через $A_1$, $B$ и середину $K$ ребра $CC_1$. Назовите четвёртую вершину и вид четырёхугольника.
5. Куб с ребром $2$: найдите периметр сечения $ACC_1A_1$.
6. Куб с ребром $6$: найдите периметр сечения через середины рёбер $AB$, $BC$, $CC_1$.
7. Правильный тетраэдр с ребром $4$: сечение через середины $AB$, $BC$, $CD$, $DA$ — квадрат. Найдите его периметр.
8. Куб $ABCDA_1B_1C_1D_1$ с ребром $3$; $M \\in AA_1$, $AM = 1$, $N \\in CC_1$, $CN = 1$. Постройте сечение через $B$, $M$, $N$, найдите его четвёртую вершину и вид.

### Ответы

1. Треугольники и четырёхугольники; треугольники, четырёхугольники, пятиугольники и шестиугольники. 2. При $M \\in DA$, $N \\in DB$, $K \\in AC$: $MN \\parallel AB$, значит, грань $ABC$ пересекается по прямой через $K$, параллельной $AB$, которая пересекает $BC$ в его середине $L$. $MNLK$ — параллелограмм: $MN = KL = \\dfrac{AB}{2}$ и $MK = NL = \\dfrac{DC}{2}$ (средние линии). 3. Каждая сторона соединяет середины двух рёбер из вершины $A$ и равна $\\sqrt{1 + 1} = \\sqrt2$; сечение — равносторонний треугольник с периметром $3\\sqrt2$. 4. Сторона через $K$ в грани $DD_1C_1C$ параллельна $A_1B$ и заканчивается в середине $L$ ребра $D_1C_1$. Сечение $A_1BKL$ — равнобедренная трапеция: $A_1B = a\\sqrt2$, $KL = \\dfrac{a\\sqrt2}{2}$, $BK = A_1L = \\dfrac{a\\sqrt5}{2}$. 5. $2 \\cdot 2 + 2 \\cdot 2\\sqrt2 = 4 + 4\\sqrt2$. 6. Правильный шестиугольник со стороной $3\\sqrt2$: $18\\sqrt2$. 7. Сторона $2$, периметр $8$. 8. Через $N$ в грани $DD_1C_1C$ проведём параллельную к $BM$: она пересекает $DD_1$ в $P$, $DP = 2$; параллельная к $BN$ через $M$ пересекает $DD_1$ в той же точке. $BMPN$ — ромб: $BM = BN = MP = NP = \\sqrt{9 + 1} = \\sqrt{10}$.`,
      },
      [
        q(t("A section of a tetrahedron can be…", "Քառանիստի հատույթը կարող է լինել…", "Сечение тетраэдра может быть…"), [t("only a triangle", "միայն եռանկյուն", "только треугольником"), t("a triangle or a quadrilateral", "եռանկյուն կամ քառանկյուն", "треугольником или четырёхугольником"), t("any polygon", "ցանկացած բազմանկյուն", "любым многоугольником")], 1),
        q(t("The largest number of sides of a section of a cube is…", "Խորանարդի հատույթի կողմերի առավելագույն թիվը…", "Наибольшее число сторон сечения куба —"), [t("4", "4", "4"), t("6", "6", "6"), t("8", "8", "8")], 1),
        q(t("Sides of a section lying in opposite faces of a parallelepiped are…", "Զուգահեռանիստի հանդիպակաց նիստերում գտնվող հատույթի կողմերը…", "Стороны сечения, лежащие в противоположных гранях параллелепипеда, …"), [t("parallel", "զուգահեռ են", "параллельны"), t("equal", "հավասար են", "равны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны")], 0),
        q(t("The trace of a secant plane on a face plane is…", "Հատող հարթության հետքը նիստի հարթության վրա…", "След секущей плоскости на плоскости грани —"), [t("a point", "կետ է", "точка"), t("their intersection line", "դրանց հատման ուղիղն է", "их линия пересечения"), t("the whole face", "ամբողջ նիստն է", "вся грань")], 1),
        q(t("The section of a cube by the plane BDC₁ is…", "Խորանարդի BDC₁ հարթությամբ հատույթը…", "Сечение куба плоскостью BDC₁ —"), [t("a square", "քառակուսի է", "квадрат"), t("an equilateral triangle", "հավասարակողմ եռանկյուն է", "равносторонний треугольник"), t("a rectangle", "ուղղանկյուն է", "прямоугольник")], 1),
        q(t("The section ACC₁A₁ of a cube with edge a has sides…", "a կողով խորանարդի ACC₁A₁ հատույթի կողմերը…", "Стороны сечения ACC₁A₁ куба с ребром a —"), [t("a and a√2", "a և a√2", "a и a√2"), t("a and a", "a և a", "a и a"), t("a√2 and a√3", "a√2 և a√3", "a√2 и a√3")], 0),
      ],
    ),
  ],
};
