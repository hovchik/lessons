import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Perpendicularity in space", "Ուղղահայացություն տարածության մեջ", "Перпендикулярность прямых и плоскостей"),
  summary: t("Line perpendicular to a plane, perpendicular and oblique, three perpendiculars theorem, dihedral angle, perpendicular planes.", "Հարթությանն ուղղահայաց ուղիղ, ուղղահայաց և թեք, երեք ուղղահայացների թեորեմ, երկնիստ անկյուն, ուղղահայաց հարթություններ։", "Прямая, перпендикулярная плоскости, перпендикуляр и наклонная, теорема о трёх перпендикулярах, двугранный угол, перпендикулярные плоскости."),
  lessons: [
    lesson(
      "line-perpendicular-plane",
      ["Line perpendicular to a plane", "Հարթությանն ուղղահայաց ուղիղ", "Перпендикулярность прямой и плоскости"],
      {
        en: ["Define a line perpendicular to a plane and state the criterion with two intersecting lines", "Prove the criterion and the theorems on parallel lines and perpendicular lines to a plane", "Prove perpendicularity of lines and planes in cubes, pyramids and prisms"],
        hy: ["Սահմանել հարթությանն ուղղահայաց ուղիղը և ձևակերպել հայտանիշն երկու հատվող ուղիղներով", "Ապացուցել հայտանիշը և զուգահեռ ուղիղների ու հարթությանն ուղղահայաց ուղիղների մասին թեորեմները", "Ապացուցել ուղիղների և հարթությունների ուղղահայացությունը խորանարդներում, բուրգերում և պրիզմաներում"],
        ru: ["Определять прямую, перпендикулярную плоскости, и формулировать признак через две пересекающиеся прямые", "Доказывать признак и теоремы о параллельных прямых и прямых, перпендикулярных плоскости", "Доказывать перпендикулярность прямых и плоскостей в кубах, пирамидах и призмах"],
      },
      {
        en: `## Definition

A line is **perpendicular to a plane** ($a \\perp \\alpha$) if it is perpendicular to **every** line lying in the plane. A flagpole on a flat square, the edge $AA_1$ of a cube with respect to the base, a pencil standing on its tip on a table are models.

Recall that two lines in space are perpendicular if the angle between them is $90^\\circ$; this includes skew lines.

## Lemma on parallel lines

**Lemma.** If one of two parallel lines is perpendicular to a third line, then the other is perpendicular to it too.

*Proof.* The angle between lines is defined through parallel translation, so $a \\parallel b$ gives the same angle of $a$ and of $b$ with any line $c$. $\\blacksquare$

**Theorem 1.** If one of two parallel lines is perpendicular to a plane, the other one is too.

**Theorem 2 (converse).** Two lines perpendicular to the same plane are parallel.

## The criterion

Checking every line of the plane is impossible, so we need a finite test.

**Theorem 3 (criterion).** If a line is perpendicular to two intersecting lines lying in a plane, then it is perpendicular to the plane.

*Idea of the proof.* Let $a \\perp p$, $a \\perp q$, $p \\cap q = O$, $p, q \\subset \\alpha$; by the lemma we may assume $a$ passes through $O$. Take any line $m \\subset \\alpha$ through $O$ and a line in $\\alpha$ meeting $p, q, m$ at $P, Q, M$. Mark $A, B \\in a$ with $OA = OB$. Since $p$ and $q$ are perpendicular bisectors of $AB$, $PA = PB$ and $QA = QB$, so the triangles $APQ$ and $BPQ$ are equal; hence $\\angle APM = \\angle BPM$, the triangles $APM$ and $BPM$ are equal, $MA = MB$, and $MO$ is a median of the isosceles triangle $AMB$, that is, $m \\perp a$. $\\blacksquare$

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$, $AA_1 \\perp AB$ and $AA_1 \\perp AD$ (the faces are squares), so $AA_1 \\perp (ABCD)$ by the criterion. Consequently $AA_1$ is perpendicular to the diagonal $AC$ and to any other line of the base.

**Example 2.** In the cube, $BD \\perp (ACC_1A_1)$: $BD \\perp AC$ (diagonals of a square) and $BD \\perp AA_1$ (Example 1). Hence $BD$ is perpendicular to every line of this plane, in particular $BD \\perp AC_1$ and $BD \\perp A_1C$.

**Example 3.** In the regular pyramid $SABCD$ (square base, apex above the centre $O$) the height $SO$ is perpendicular to the base. Then $SO \\perp AC$ and $SO \\perp BD$. Also $AC \\perp (SBD)$: $AC \\perp BD$ and $AC \\perp SO$.

**Example 4.** The point $S$ is equidistant from the vertices of the triangle $ABC$, and $O$ is the centre of its circumscribed circle. Prove $SO \\perp (ABC)$. Let $M$ be the midpoint of $AB$. Since $SA = SB$, $SM \\perp AB$; since $OA = OB$, $OM \\perp AB$. So $AB \\perp (SOM)$ and therefore $AB \\perp SO$. In the same way $BC \\perp SO$. Two intersecting lines of the base are perpendicular to $SO$, so $SO \\perp (ABC)$.

**Example 5.** Through the point $O$ where the diagonals of the rhombus $ABCD$ meet, a line $OM \\perp (ABCD)$ is drawn. Prove that $MA = MC$ and $MB = MD$. $OM \\perp OA$, $OM \\perp OC$ and $OA = OC$, so the right triangles $MOA$ and $MOC$ are equal; likewise for $B$ and $D$.

**Example 6.** $MA \\perp (ABC)$ and the triangle $ABC$ is right-angled at $B$. Which faces of the tetrahedron $MABC$ are right triangles? $MAB$ and $MAC$ (right angle at $A$, since $MA \\perp AB$, $MA \\perp AC$), $ABC$ (given), and $MBC$: $BC \\perp AB$ and $BC \\perp MA$, so $BC \\perp (MAB)$ and $BC \\perp MB$, right angle at $B$. All four faces are right triangles.

## Existence and uniqueness

Through any point there passes exactly one plane perpendicular to a given line, and exactly one line perpendicular to a given plane. The second fact is used to define the distance from a point to a plane in the next lesson.

### Exercises

1. In the cube, name all edges perpendicular to the plane $ABCD$ and all edges perpendicular to the plane $ABB_1A_1$.
2. $AB \\perp \\alpha$ and $CD \\parallel AB$. Is $CD \\perp \\alpha$?
3. The line $a$ is perpendicular to the sides $AB$ and $AC$ of the triangle $ABC$. Prove $a \\perp BC$.
4. In the cube, prove that $AC \\perp (BB_1D_1D)$.
5. In the cube, prove that $BD_1 \\perp AC$.
6. In the regular pyramid $SABC$ let $M$ be the midpoint of $BC$. Prove that $BC \\perp (SAM)$.
7. $MA \\perp (ABC)$ and $AB \\perp BC$. Prove that $BC \\perp (MAB)$.
8. The line $a$ is perpendicular to the plane $\\alpha$ and meets it at $O$; the points $A, B \\in a$ are symmetric with respect to $O$. Prove that every point of $\\alpha$ is equidistant from $A$ and $B$.

### Answers

1. $AA_1, BB_1, CC_1, DD_1$; $AD, BC, A_1D_1, B_1C_1$. 2. Yes, by Theorem 1. 3. $a \\perp (ABC)$ by the criterion, hence $a \\perp BC$. 4. $AC \\perp BD$ and $AC \\perp BB_1$ (since $BB_1 \\perp$ base). 5. $AC \\perp (BB_1D_1D)$ by Exercise 4, and $BD_1$ lies in that plane. 6. $AM \\perp BC$ (median of the equilateral base) and $SM \\perp BC$ (median of the isosceles triangle $SBC$), so $BC \\perp (SAM)$. 7. $BC \\perp AB$ (given) and $BC \\perp MA$ (as $MA \\perp$ base): two intersecting lines of the plane $MAB$. 8. For $P \\in \\alpha$: $OP \\perp a$, so the right triangles $AOP$ and $BOP$ are equal ($OA = OB$, common leg $OP$), and $PA = PB$.`,
        hy: `## Սահմանում

Ուղիղը **ուղղահայաց է հարթությանը** ($a \\perp \\alpha$), եթե ուղղահայաց է հարթության մեջ գտնվող **յուրաքանչյուր** ուղղի։ Հարթ հրապարակի վրա դրոշի ձողը, խորանարդի $AA_1$ կողը հիմքի նկատմամբ, սեղանի վրա ծայրով կանգնած մատիտը մոդելներ են։

Հիշենք, որ տարածության երկու ուղիղներն ուղղահայաց են, եթե դրանց անկյունը $90^\\circ$ է, սա ներառում է նաև խաչվող ուղիղները։

## Զուգահեռ ուղիղների լեմմա

**Լեմմա։** Եթե երկու զուգահեռ ուղիղներից մեկն ուղղահայաց է երրորդ ուղղին, ապա մյուսն էլ ուղղահայաց է նրան։

*Ապացույց։* Ուղիղների անկյունը սահմանվում է զուգահեռ տեղափոխությամբ, ուստի $a \\parallel b$-ից $a$-ի և $b$-ի անկյունը ցանկացած $c$ ուղղի հետ նույնն է։ $\\blacksquare$

**Թեորեմ 1։** Եթե երկու զուգահեռ ուղիղներից մեկն ուղղահայաց է հարթությանը, ապա մյուսն էլ ուղղահայաց է։

**Թեորեմ 2 (հակադարձ)։** Նույն հարթությանն ուղղահայաց երկու ուղիղները զուգահեռ են։

## Հայտանիշը

Հարթության յուրաքանչյուր ուղիղը ստուգելն անհնար է, ուստի պետք է վերջավոր ստուգում։

**Թեորեմ 3 (հայտանիշ)։** Եթե ուղիղն ուղղահայաց է հարթության մեջ գտնվող երկու հատվող ուղիղների, ապա այն ուղղահայաց է հարթությանը։

*Ապացույցի գաղափարը։* Դիցուք $a \\perp p$, $a \\perp q$, $p \\cap q = O$, $p, q \\subset \\alpha$, լեմմայով կարող ենք համարել, որ $a$-ն անցնում է $O$-ով։ Վերցնենք $O$-ով անցնող ցանկացած $m \\subset \\alpha$ ուղիղ և $\\alpha$-ում ուղիղ, որը $p, q, m$-ը հատում է $P, Q, M$ կետերում։ Նշենք $A, B \\in a$, որտեղ $OA = OB$։ Քանի որ $p$-ն և $q$-ն $AB$-ի միջնուղղահայացներ են, $PA = PB$ և $QA = QB$, ուստի $APQ$ և $BPQ$ եռանկյունները հավասար են, հետևաբար $\\angle APM = \\angle BPM$, $APM$ և $BPM$ եռանկյունները հավասար են, $MA = MB$, և $MO$-ն $AMB$ հավասարասրուն եռանկյան միջնագիծ է, այսինքն $m \\perp a$։ $\\blacksquare$

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $AA_1 \\perp AB$ և $AA_1 \\perp AD$ (նիստերը քառակուսիներ են), ուստի հայտանիշով $AA_1 \\perp (ABCD)$։ Հետևաբար $AA_1$-ն ուղղահայաց է $AC$ անկյունագծին և հիմքի ցանկացած այլ ուղղի։

**Օրինակ 2։** Խորանարդում $BD \\perp (ACC_1A_1)$․ $BD \\perp AC$ (քառակուսու անկյունագծեր) և $BD \\perp AA_1$ (օրինակ 1)։ Հետևաբար $BD$-ն ուղղահայաց է այս հարթության յուրաքանչյուր ուղղի, մասնավորապես $BD \\perp AC_1$ և $BD \\perp A_1C$։

**Օրինակ 3։** $SABCD$ կանոնավոր բուրգում (քառակուսի հիմք, գագաթը $O$ կենտրոնի վերևում) $SO$ բարձրությունն ուղղահայաց է հիմքին։ Այդ դեպքում $SO \\perp AC$ և $SO \\perp BD$։ Նաև $AC \\perp (SBD)$․ $AC \\perp BD$ և $AC \\perp SO$։

**Օրինակ 4։** $S$ կետը հավասարահեռ է $ABC$ եռանկյան գագաթներից, $O$-ն նրա արտագծյալ շրջանագծի կենտրոնն է։ Ապացուցենք $SO \\perp (ABC)$։ Դիցուք $M$-ը $AB$-ի միջնակետն է։ Քանի որ $SA = SB$, $SM \\perp AB$, քանի որ $OA = OB$, $OM \\perp AB$։ Ուստի $AB \\perp (SOM)$ և հետևաբար $AB \\perp SO$։ Նույն կերպ $BC \\perp SO$։ Հիմքի երկու հատվող ուղիղներն ուղղահայաց են $SO$-ին, ուստի $SO \\perp (ABC)$։

**Օրինակ 5։** $ABCD$ շեղանկյան անկյունագծերի հատման $O$ կետով տարված է $OM \\perp (ABCD)$ ուղիղ։ Ապացուցենք, որ $MA = MC$ և $MB = MD$։ $OM \\perp OA$, $OM \\perp OC$ և $OA = OC$, ուստի $MOA$ և $MOC$ ուղղանկյուն եռանկյունները հավասար են, նույն կերպ $B$-ի և $D$-ի համար։

**Օրինակ 6։** $MA \\perp (ABC)$, և $ABC$ եռանկյունն ուղղանկյուն է $B$ գագաթում։ $MABC$ քառանիստի ո՞ր նիստերն են ուղղանկյուն եռանկյուններ։ $MAB$ և $MAC$ (ուղիղ անկյունը $A$-ում, քանի որ $MA \\perp AB$, $MA \\perp AC$), $ABC$ (տրված է) և $MBC$․ $BC \\perp AB$ և $BC \\perp MA$, ուստի $BC \\perp (MAB)$ և $BC \\perp MB$, ուղիղ անկյունը $B$-ում։ Բոլոր չորս նիստերն ուղղանկյուն եռանկյուններ են։

## Գոյություն և միակություն

Ցանկացած կետով անցնում է տրված ուղղին ուղղահայաց ճիշտ մեկ հարթություն և տրված հարթությանն ուղղահայաց ճիշտ մեկ ուղիղ։ Երկրորդ փաստն օգտագործվում է հաջորդ դասում կետից հարթություն հեռավորությունը սահմանելու համար։

### Վարժություններ

1. Խորանարդում անվանեք $ABCD$ հարթությանն ուղղահայաց բոլոր կողերը և $ABB_1A_1$ հարթությանն ուղղահայաց բոլոր կողերը։
2. $AB \\perp \\alpha$ և $CD \\parallel AB$։ $CD \\perp \\alpha$ է՞։
3. $a$ ուղիղն ուղղահայաց է $ABC$ եռանկյան $AB$ և $AC$ կողմերին։ Ապացուցեք $a \\perp BC$։
4. Խորանարդում ապացուցեք, որ $AC \\perp (BB_1D_1D)$։
5. Խորանարդում ապացուցեք, որ $BD_1 \\perp AC$։
6. $SABC$ կանոնավոր բուրգում $M$-ը $BC$-ի միջնակետն է։ Ապացուցեք, որ $BC \\perp (SAM)$։
7. $MA \\perp (ABC)$ և $AB \\perp BC$։ Ապացուցեք, որ $BC \\perp (MAB)$։
8. $a$ ուղիղն ուղղահայաց է $\\alpha$ հարթությանը և հատում է այն $O$-ում, $A, B \\in a$ կետերը սիմետրիկ են $O$-ի նկատմամբ։ Ապացուցեք, որ $\\alpha$-ի յուրաքանչյուր կետը հավասարահեռ է $A$-ից և $B$-ից։

### Պատասխաններ

1. $AA_1, BB_1, CC_1, DD_1$, $AD, BC, A_1D_1, B_1C_1$։ 2. Այո, թեորեմ 1-ով։ 3. Հայտանիշով $a \\perp (ABC)$, հետևաբար $a \\perp BC$։ 4. $AC \\perp BD$ և $AC \\perp BB_1$ (քանի որ $BB_1 \\perp$ հիմք)։ 5. Վարժություն 4-ով $AC \\perp (BB_1D_1D)$, և $BD_1$-ը գտնվում է այդ հարթության մեջ։ 6. $AM \\perp BC$ (հավասարակողմ հիմքի միջնագիծ) և $SM \\perp BC$ ($SBC$ հավասարասրուն եռանկյան միջնագիծ), ուստի $BC \\perp (SAM)$։ 7. $BC \\perp AB$ (տրված է) և $BC \\perp MA$ (քանի որ $MA \\perp$ հիմք)․ $MAB$ հարթության երկու հատվող ուղիղ։ 8. $P \\in \\alpha$ կետի համար $OP \\perp a$, ուստի $AOP$ և $BOP$ ուղղանկյուն եռանկյունները հավասար են ($OA = OB$, ընդհանուր $OP$ էջ), և $PA = PB$։`,
        ru: `## Определение

Прямая **перпендикулярна плоскости** ($a \\perp \\alpha$), если она перпендикулярна **каждой** прямой, лежащей в плоскости. Флагшток на ровной площади, ребро $AA_1$ куба относительно основания, карандаш, стоящий остриём на столе, — модели.

Напомним, что две прямые в пространстве перпендикулярны, если угол между ними равен $90^\\circ$; это относится и к скрещивающимся прямым.

## Лемма о параллельных прямых

**Лемма.** Если одна из двух параллельных прямых перпендикулярна третьей прямой, то и другая перпендикулярна ей.

*Доказательство.* Угол между прямыми определяется через параллельный перенос, поэтому при $a \\parallel b$ углы $a$ и $b$ с любой прямой $c$ одинаковы. $\\blacksquare$

**Теорема 1.** Если одна из двух параллельных прямых перпендикулярна плоскости, то и другая перпендикулярна ей.

**Теорема 2 (обратная).** Две прямые, перпендикулярные одной плоскости, параллельны.

## Признак

Проверить каждую прямую плоскости невозможно, нужен конечный критерий.

**Теорема 3 (признак).** Если прямая перпендикулярна двум пересекающимся прямым, лежащим в плоскости, то она перпендикулярна плоскости.

*Идея доказательства.* Пусть $a \\perp p$, $a \\perp q$, $p \\cap q = O$, $p, q \\subset \\alpha$; по лемме можно считать, что $a$ проходит через $O$. Возьмём любую прямую $m \\subset \\alpha$ через $O$ и прямую в $\\alpha$, пересекающую $p, q, m$ в точках $P, Q, M$. Отметим $A, B \\in a$ с $OA = OB$. Так как $p$ и $q$ — серединные перпендикуляры к $AB$, то $PA = PB$ и $QA = QB$, поэтому треугольники $APQ$ и $BPQ$ равны; значит, $\\angle APM = \\angle BPM$, треугольники $APM$ и $BPM$ равны, $MA = MB$, и $MO$ — медиана равнобедренного треугольника $AMB$, то есть $m \\perp a$. $\\blacksquare$

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ $AA_1 \\perp AB$ и $AA_1 \\perp AD$ (грани — квадраты), значит, $AA_1 \\perp (ABCD)$ по признаку. Следовательно, $AA_1$ перпендикулярно диагонали $AC$ и любой другой прямой основания.

**Пример 2.** В кубе $BD \\perp (ACC_1A_1)$: $BD \\perp AC$ (диагонали квадрата) и $BD \\perp AA_1$ (пример 1). Значит, $BD$ перпендикулярна каждой прямой этой плоскости, в частности $BD \\perp AC_1$ и $BD \\perp A_1C$.

**Пример 3.** В правильной пирамиде $SABCD$ (квадратное основание, вершина над центром $O$) высота $SO$ перпендикулярна основанию. Тогда $SO \\perp AC$ и $SO \\perp BD$. Также $AC \\perp (SBD)$: $AC \\perp BD$ и $AC \\perp SO$.

**Пример 4.** Точка $S$ равноудалена от вершин треугольника $ABC$, $O$ — центр его описанной окружности. Докажем $SO \\perp (ABC)$. Пусть $M$ — середина $AB$. Так как $SA = SB$, то $SM \\perp AB$; так как $OA = OB$, то $OM \\perp AB$. Значит, $AB \\perp (SOM)$ и потому $AB \\perp SO$. Аналогично $BC \\perp SO$. Две пересекающиеся прямые основания перпендикулярны $SO$, значит, $SO \\perp (ABC)$.

**Пример 5.** Через точку $O$ пересечения диагоналей ромба $ABCD$ проведена прямая $OM \\perp (ABCD)$. Докажем, что $MA = MC$ и $MB = MD$. $OM \\perp OA$, $OM \\perp OC$ и $OA = OC$, значит, прямоугольные треугольники $MOA$ и $MOC$ равны; аналогично для $B$ и $D$.

**Пример 6.** $MA \\perp (ABC)$, треугольник $ABC$ прямоугольный с прямым углом $B$. Какие грани тетраэдра $MABC$ — прямоугольные треугольники? $MAB$ и $MAC$ (прямой угол при $A$, так как $MA \\perp AB$, $MA \\perp AC$), $ABC$ (дано) и $MBC$: $BC \\perp AB$ и $BC \\perp MA$, значит, $BC \\perp (MAB)$ и $BC \\perp MB$, прямой угол при $B$. Все четыре грани — прямоугольные треугольники.

## Существование и единственность

Через любую точку проходит ровно одна плоскость, перпендикулярная данной прямой, и ровно одна прямая, перпендикулярная данной плоскости. Второй факт используется в следующем уроке для определения расстояния от точки до плоскости.

### Упражнения

1. В кубе назовите все рёбра, перпендикулярные плоскости $ABCD$, и все рёбра, перпендикулярные плоскости $ABB_1A_1$.
2. $AB \\perp \\alpha$ и $CD \\parallel AB$. Верно ли, что $CD \\perp \\alpha$?
3. Прямая $a$ перпендикулярна сторонам $AB$ и $AC$ треугольника $ABC$. Докажите, что $a \\perp BC$.
4. В кубе докажите, что $AC \\perp (BB_1D_1D)$.
5. В кубе докажите, что $BD_1 \\perp AC$.
6. В правильной пирамиде $SABC$ точка $M$ — середина $BC$. Докажите, что $BC \\perp (SAM)$.
7. $MA \\perp (ABC)$ и $AB \\perp BC$. Докажите, что $BC \\perp (MAB)$.
8. Прямая $a$ перпендикулярна плоскости $\\alpha$ и пересекает её в $O$; точки $A, B \\in a$ симметричны относительно $O$. Докажите, что каждая точка $\\alpha$ равноудалена от $A$ и $B$.

### Ответы

1. $AA_1, BB_1, CC_1, DD_1$; $AD, BC, A_1D_1, B_1C_1$. 2. Да, по теореме 1. 3. $a \\perp (ABC)$ по признаку, значит, $a \\perp BC$. 4. $AC \\perp BD$ и $AC \\perp BB_1$ (так как $BB_1 \\perp$ основанию). 5. $AC \\perp (BB_1D_1D)$ по упражнению 4, а $BD_1$ лежит в этой плоскости. 6. $AM \\perp BC$ (медиана равностороннего основания) и $SM \\perp BC$ (медиана равнобедренного треугольника $SBC$), значит, $BC \\perp (SAM)$. 7. $BC \\perp AB$ (дано) и $BC \\perp MA$ (так как $MA \\perp$ основанию): две пересекающиеся прямые плоскости $MAB$. 8. Для $P \\in \\alpha$: $OP \\perp a$, значит, прямоугольные треугольники $AOP$ и $BOP$ равны ($OA = OB$, общий катет $OP$), и $PA = PB$.`,
      },
      [
        q(t("A line is perpendicular to a plane if it is perpendicular to…", "Ուղիղն ուղղահայաց է հարթությանը, եթե ուղղահայաց է…", "Прямая перпендикулярна плоскости, если она перпендикулярна…"), [t("one line of the plane", "հարթության մեկ ուղղի", "одной прямой плоскости"), t("every line of the plane", "հարթության յուրաքանչյուր ուղղի", "каждой прямой плоскости"), t("two parallel lines of the plane", "հարթության երկու զուգահեռ ուղղի", "двум параллельным прямым плоскости")], 1),
        q(t("The criterion: a line is perpendicular to a plane if it is perpendicular to…", "Հայտանիշ․ ուղիղն ուղղահայաց է հարթությանը, եթե ուղղահայաց է…", "Признак: прямая перпендикулярна плоскости, если она перпендикулярна…"), [t("two intersecting lines of the plane", "հարթության երկու հատվող ուղղի", "двум пересекающимся прямым плоскости"), t("two parallel lines of the plane", "հարթության երկու զուգահեռ ուղղի", "двум параллельным прямым плоскости"), t("one line of the plane", "հարթության մեկ ուղղի", "одной прямой плоскости")], 0),
        q(t("Two lines perpendicular to the same plane are…", "Նույն հարթությանն ուղղահայաց երկու ուղիղները…", "Две прямые, перпендикулярные одной плоскости, …"), [t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("parallel", "զուգահեռ են", "параллельны"), t("skew", "խաչվող են", "скрещиваются")], 1),
        q(t("In the cube, BD is perpendicular to the plane…", "Խորանարդում BD-ն ուղղահայաց է հարթությանը…", "В кубе BD перпендикулярна плоскости…"), [t("ABCD", "ABCD", "ABCD"), t("ACC₁A₁", "ACC₁A₁", "ACC₁A₁"), t("ABB₁A₁", "ABB₁A₁", "ABB₁A₁")], 1),
        q(t("If a ∥ b and a ⊥ α, then…", "Եթե a ∥ b և a ⊥ α, ապա…", "Если a ∥ b и a ⊥ α, то…"), [t("b ⊥ α", "b ⊥ α", "b ⊥ α"), t("b ∥ α", "b ∥ α", "b ∥ α"), t("b ⊂ α", "b ⊂ α", "b ⊂ α")], 0),
        q(t("The height of a regular pyramid is perpendicular to…", "Կանոնավոր բուրգի բարձրությունն ուղղահայաց է…", "Высота правильной пирамиды перпендикулярна…"), [t("every line of the base plane", "հիմքի հարթության յուրաքանչյուր ուղղի", "каждой прямой плоскости основания"), t("only the base edges", "միայն հիմքի կողերին", "только рёбрам основания"), t("the lateral edges", "կողմնային կողերին", "боковым рёбрам")], 0),
      ],
    ),
    lesson(
      "perpendicular-oblique",
      ["Perpendicular and oblique; distance", "Ուղղահայաց և թեք, հեռավորություն", "Перпендикуляр и наклонная; расстояние"],
      {
        en: ["Define the perpendicular, the oblique and its projection from a point to a plane and compare their lengths", "Define the distance from a point to a plane, between parallel planes, from a line to a parallel plane and between skew lines", "Compute distances in cubes and pyramids with the Pythagorean theorem"],
        hy: ["Սահմանել կետից հարթություն տարված ուղղահայացը, թեքը և նրա պրոյեկցիան ու համեմատել դրանց երկարությունները", "Սահմանել կետից հարթություն, զուգահեռ հարթությունների միջև, ուղղից զուգահեռ հարթություն և խաչվող ուղիղների միջև հեռավորությունը", "Հաշվել հեռավորություններ խորանարդներում և բուրգերում Պյութագորասի թեորեմով"],
        ru: ["Определять перпендикуляр, наклонную и её проекцию из точки на плоскость и сравнивать их длины", "Определять расстояние от точки до плоскости, между параллельными плоскостями, от прямой до параллельной плоскости и между скрещивающимися прямыми", "Вычислять расстояния в кубах и пирамидах по теореме Пифагора"],
      },
      {
        en: `## Perpendicular, oblique, projection

Let $A \\notin \\alpha$. The segment $AH$ with $H \\in \\alpha$ and $AH \\perp \\alpha$ is the **perpendicular** from $A$ to $\\alpha$; $H$ is its foot. Any other segment $AM$ with $M \\in \\alpha$ is an **oblique**, and $HM$ is the **projection** of the oblique.

The triangle $AHM$ is right-angled at $H$, so $AM^2 = AH^2 + HM^2$. From this:

- the perpendicular is shorter than every oblique;
- equal obliques have equal projections, and conversely;
- of two obliques the longer one has the longer projection.

**Example 1.** From a point $A$ at distance $AH = 12$ from the plane, obliques $AM$ and $AN$ are drawn with $AM = 13$, $AN = 20$. Their projections: $HM = \\sqrt{169 - 144} = 5$, $HN = \\sqrt{400 - 144} = 16$.

**Example 2.** The point $S$ is at equal distances from all vertices of the triangle $ABC$ in the plane $\\alpha$. Then the obliques $SA, SB, SC$ are equal, so their projections $HA, HB, HC$ are equal: the foot $H$ of the perpendicular is the circumcentre of $ABC$. If $ABC$ is right-angled, $H$ is the midpoint of the hypotenuse.

**Example 3.** Obliques $AM$ and $AN$ from a point $A$ form angles $30^\\circ$ and $60^\\circ$ with the plane (angle between an oblique and its projection). Which is longer? $AM = \\dfrac{AH}{\\sin 30^\\circ} = 2AH$, $AN = \\dfrac{AH}{\\sin 60^\\circ} = \\dfrac{2AH}{\\sqrt3}$, so $AM$ is longer. The smaller the angle with the plane, the longer the oblique.

## Distances

- **Point to plane:** the length of the perpendicular. All points of a line parallel to a plane are equidistant from it, so this is also the **distance from the line to the plane**.
- **Between parallel planes:** the distance from any point of one plane to the other; the same for all points.
- **Between skew lines:** the length of their **common perpendicular**, which equals the distance from one line to the plane through the other line parallel to the first.

**Example 4.** In the cube with edge $a$, the distance from $A_1$ to the plane $ABCD$ is $a$; from the line $A_1B_1$ to the plane $ABCD$ is $a$; between the planes $ABB_1A_1$ and $DCC_1D_1$ is $a$.

**Example 5.** The distance between the skew lines $AA_1$ and $BC$ in the cube: $AB \\perp AA_1$ and $AB \\perp BC$, so $AB$ is a common perpendicular and the distance is $a$. The distance between $AB$ and $C_1D_1$: $BC_1 \\perp AB$ because $AB \\perp (BB_1C_1C)$, and $BC_1 \\perp C_1D_1$ because $C_1D_1 \\perp (BB_1C_1C)$. So $BC_1$ is a common perpendicular and the distance is $a\\sqrt2$.

**Example 6.** The distance from the vertex $A$ to the diagonal plane $BB_1D_1D$ of the cube: $AC \\perp (BB_1D_1D)$ and $AC$ meets it at the centre $O$ of the base, so the distance is $AO = \\dfrac{a\\sqrt2}{2}$.

**Example 7.** In the regular pyramid $SABCD$ with base side $6$ and lateral edge $5$, find the height. $SO \\perp$ base, $O$ is the centre, $AO = \\dfrac{6\\sqrt2}{2} = 3\\sqrt2$, $SO = \\sqrt{25 - 18} = \\sqrt7$.

**Example 8.** The distance from a point $M$ to the plane $\\alpha$ is $8$. Two obliques $MP$ and $MQ$ have projections $6$ and $15$, and the angle between the projections is $90^\\circ$. Find $PQ$. $PQ$ lies in $\\alpha$: $PQ = \\sqrt{36 + 225} = \\sqrt{261} = 3\\sqrt{29}$. The obliques themselves: $MP = 10$, $MQ = 17$.

### Exercises

1. From a point $7$ cm away from a plane, obliques of $25$ cm and $\\sqrt{65}$ cm are drawn. Find their projections.
2. The projections of two obliques from one point are $9$ and $12$, the shorter oblique is $15$. Find the longer oblique and the distance from the point to the plane.
3. The point $M$ is equidistant from the vertices of a rectangle with sides $6$ and $8$, and $MA = 13$. Find the distance from $M$ to the plane of the rectangle.
4. In the cube with edge $4$, find the distance from $B$ to the plane $ACC_1A_1$ and from $A$ to the line $B_1C_1$.
5. In the cube with edge $a$, find the distance between the skew lines $AB$ and $CC_1$; $AA_1$ and $B_1C_1$; $AB$ and $A_1D_1$.
6. The lines $a$ and $b$ are parallel to the plane $\\alpha$ at distances $3$ and $5$ from it, on the same side. Find the distance between the planes through $a$ and $b$ parallel to $\\alpha$.
7. The regular triangular pyramid $SABC$ has base side $6$ and height $4$. Find the lateral edge (the circumradius of an equilateral triangle with side $6$ is $2\\sqrt3$).
8. The oblique $AM$ makes an angle of $45^\\circ$ with the plane and $AM = 10$. Find the perpendicular and the projection.

### Answers

1. $\\sqrt{625 - 49} = 24$; $\\sqrt{65 - 49} = 4$. 2. $AH = \\sqrt{225 - 81} = 12$; longer oblique $\\sqrt{144 + 144} = 12\\sqrt2$. 3. The foot is the centre of the rectangle, $OA = 5$, distance $\\sqrt{169 - 25} = 12$. 4. $BO = 2\\sqrt2$ ($O$ the centre of the base); $AB_1 = 4\\sqrt2$ since $AB_1 \\perp B_1C_1$ (as $B_1C_1 \\perp (ABB_1A_1)$). 5. $BC = a$; $A_1B_1 = a$; $AA_1 = a$. 6. $2$. 7. $\\sqrt{16 + 12} = 2\\sqrt7$. 8. Both equal $10 \\cdot \\dfrac{\\sqrt2}{2} = 5\\sqrt2$.`,
        hy: `## Ուղղահայաց, թեք, պրոյեկցիա

Դիցուք $A \\notin \\alpha$։ $AH$ հատվածը, որտեղ $H \\in \\alpha$ և $AH \\perp \\alpha$, $A$-ից $\\alpha$ տարված **ուղղահայացն** է, $H$-ը նրա հիմքն է։ Ցանկացած այլ $AM$ հատված, որտեղ $M \\in \\alpha$, **թեք** է, իսկ $HM$-ը թեքի **պրոյեկցիան** է։

$AHM$ եռանկյունն ուղղանկյուն է $H$-ում, ուստի $AM^2 = AH^2 + HM^2$։ Սրանից․

- ուղղահայացը կարճ է յուրաքանչյուր թեքից,
- հավասար թեքերն ունեն հավասար պրոյեկցիաներ, և հակառակը,
- երկու թեքերից ավելի երկարն ունի ավելի երկար պրոյեկցիա։

**Օրինակ 1։** Հարթությունից $AH = 12$ հեռավորության վրա գտնվող $A$ կետից տարված են $AM = 13$, $AN = 20$ թեքեր։ Դրանց պրոյեկցիաները․ $HM = \\sqrt{169 - 144} = 5$, $HN = \\sqrt{400 - 144} = 16$։

**Օրինակ 2։** $S$ կետը հավասար հեռավորությունների վրա է $\\alpha$ հարթության $ABC$ եռանկյան բոլոր գագաթներից։ Այդ դեպքում $SA, SB, SC$ թեքերը հավասար են, ուստի դրանց $HA, HB, HC$ պրոյեկցիաները հավասար են․ ուղղահայացի $H$ հիմքը $ABC$-ի արտագծյալ շրջանագծի կենտրոնն է։ Եթե $ABC$-ն ուղղանկյուն է, $H$-ը ներքնաձիգի միջնակետն է։

**Օրինակ 3։** $A$ կետից տարված $AM$ և $AN$ թեքերը հարթության հետ կազմում են $30^\\circ$ և $60^\\circ$ անկյուններ (թեքի և նրա պրոյեկցիայի անկյուն)։ Ո՞րն է ավելի երկար։ $AM = \\dfrac{AH}{\\sin 30^\\circ} = 2AH$, $AN = \\dfrac{AH}{\\sin 60^\\circ} = \\dfrac{2AH}{\\sqrt3}$, ուստի $AM$-ն է ավելի երկար։ Որքան փոքր է անկյունը հարթության հետ, այնքան երկար է թեքը։

## Հեռավորություններ

- **Կետից հարթություն․** ուղղահայացի երկարությունը։ Հարթությանը զուգահեռ ուղղի բոլոր կետերը հավասարահեռ են նրանից, ուստի սա նաև **ուղղից հարթություն հեռավորությունն** է։
- **Զուգահեռ հարթությունների միջև․** մի հարթության ցանկացած կետից մյուսին հեռավորությունը, բոլոր կետերի համար նույնն է։
- **Խաչվող ուղիղների միջև․** դրանց **ընդհանուր ուղղահայացի** երկարությունը, որը հավասար է մի ուղղից մյուս ուղղով անցնող և առաջինին զուգահեռ հարթություն հեռավորությանը։

**Օրինակ 4։** $a$ կողով խորանարդում $A_1$-ից $ABCD$ հարթություն հեռավորությունը $a$ է, $A_1B_1$ ուղղից $ABCD$ հարթություն՝ $a$, $ABB_1A_1$ և $DCC_1D_1$ հարթությունների միջև՝ $a$։

**Օրինակ 5։** Խորանարդում $AA_1$ և $BC$ խաչվող ուղիղների հեռավորությունը․ $AB \\perp AA_1$ և $AB \\perp BC$, ուստի $AB$-ն ընդհանուր ուղղահայաց է, և հեռավորությունը $a$ է։ $AB$-ի և $C_1D_1$-ի հեռավորությունը․ $BC_1 \\perp AB$, քանի որ $AB \\perp (BB_1C_1C)$, և $BC_1 \\perp C_1D_1$, քանի որ $C_1D_1 \\perp (BB_1C_1C)$։ Ուստի $BC_1$-ն ընդհանուր ուղղահայաց է, և հեռավորությունը $a\\sqrt2$ է։

**Օրինակ 6։** Խորանարդի $A$ գագաթից $BB_1D_1D$ անկյունագծային հարթություն հեռավորությունը․ $AC \\perp (BB_1D_1D)$, և $AC$-ն այն հատում է հիմքի $O$ կենտրոնում, ուստի հեռավորությունը $AO = \\dfrac{a\\sqrt2}{2}$ է։

**Օրինակ 7։** $6$ հիմքի կողով և $5$ կողմնային կողով $SABCD$ կանոնավոր բուրգում գտնենք բարձրությունը։ $SO \\perp$ հիմք, $O$-ն կենտրոնն է, $AO = \\dfrac{6\\sqrt2}{2} = 3\\sqrt2$, $SO = \\sqrt{25 - 18} = \\sqrt7$։

**Օրինակ 8։** $M$ կետից $\\alpha$ հարթություն հեռավորությունը $8$ է։ $MP$ և $MQ$ թեքերի պրոյեկցիաները $6$ և $15$ են, պրոյեկցիաների անկյունը $90^\\circ$ է։ Գտնենք $PQ$-ն։ $PQ$-ն գտնվում է $\\alpha$-ում․ $PQ = \\sqrt{36 + 225} = \\sqrt{261} = 3\\sqrt{29}$։ Թեքերն իրենք՝ $MP = 10$, $MQ = 17$։

### Վարժություններ

1. Հարթությունից $7$ սմ հեռավորության վրա գտնվող կետից տարված են $25$ սմ և $\\sqrt{65}$ սմ թեքեր։ Գտեք դրանց պրոյեկցիաները։
2. Մեկ կետից տարված երկու թեքերի պրոյեկցիաները $9$ և $12$ են, կարճ թեքը $15$ է։ Գտեք երկար թեքը և կետից հարթություն հեռավորությունը։
3. $M$ կետը հավասարահեռ է $6$ և $8$ կողմերով ուղղանկյան գագաթներից, $MA = 13$։ Գտեք $M$-ից ուղղանկյան հարթություն հեռավորությունը։
4. $4$ կողով խորանարդում գտեք $B$-ից $ACC_1A_1$ հարթություն և $A$-ից $B_1C_1$ ուղիղ հեռավորությունը։
5. $a$ կողով խորանարդում գտեք $AB$ և $CC_1$, $AA_1$ և $B_1C_1$, $AB$ և $A_1D_1$ խաչվող ուղիղների հեռավորությունը։
6. $a$ և $b$ ուղիղները զուգահեռ են $\\alpha$ հարթությանը և նրանից $3$ և $5$ հեռավորության վրա են, նույն կողմում։ Գտեք $a$-ով և $b$-ով անցնող $\\alpha$-ին զուգահեռ հարթությունների հեռավորությունը։
7. $SABC$ կանոնավոր եռանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $4$։ Գտեք կողմնային կողը ($6$ կողմով հավասարակողմ եռանկյան արտագծյալ շրջանագծի շառավիղը $2\\sqrt3$ է)։
8. $AM$ թեքը հարթության հետ կազմում է $45^\\circ$ անկյուն, $AM = 10$։ Գտեք ուղղահայացը և պրոյեկցիան։

### Պատասխաններ

1. $\\sqrt{625 - 49} = 24$, $\\sqrt{65 - 49} = 4$։ 2. $AH = \\sqrt{225 - 81} = 12$, երկար թեքը $\\sqrt{144 + 144} = 12\\sqrt2$։ 3. Հիմքն ուղղանկյան կենտրոնն է, $OA = 5$, հեռավորությունը $\\sqrt{169 - 25} = 12$։ 4. $BO = 2\\sqrt2$ ($O$-ն հիմքի կենտրոնն է), $AB_1 = 4\\sqrt2$, քանի որ $AB_1 \\perp B_1C_1$ ($B_1C_1 \\perp (ABB_1A_1)$)։ 5. $BC = a$, $A_1B_1 = a$, $AA_1 = a$։ 6. $2$։ 7. $\\sqrt{16 + 12} = 2\\sqrt7$։ 8. Երկուսն էլ $10 \\cdot \\dfrac{\\sqrt2}{2} = 5\\sqrt2$։`,
        ru: `## Перпендикуляр, наклонная, проекция

Пусть $A \\notin \\alpha$. Отрезок $AH$, где $H \\in \\alpha$ и $AH \\perp \\alpha$, — **перпендикуляр** из $A$ к $\\alpha$; $H$ — его основание. Любой другой отрезок $AM$ с $M \\in \\alpha$ — **наклонная**, а $HM$ — **проекция** наклонной.

Треугольник $AHM$ прямоугольный с прямым углом $H$, поэтому $AM^2 = AH^2 + HM^2$. Отсюда:

- перпендикуляр короче любой наклонной;
- равные наклонные имеют равные проекции, и наоборот;
- из двух наклонных большая имеет большую проекцию.

**Пример 1.** Из точки $A$, удалённой от плоскости на $AH = 12$, проведены наклонные $AM = 13$ и $AN = 20$. Их проекции: $HM = \\sqrt{169 - 144} = 5$, $HN = \\sqrt{400 - 144} = 16$.

**Пример 2.** Точка $S$ равноудалена от всех вершин треугольника $ABC$ в плоскости $\\alpha$. Тогда наклонные $SA, SB, SC$ равны, значит, равны их проекции $HA, HB, HC$: основание $H$ перпендикуляра — центр описанной окружности $ABC$. Если $ABC$ прямоугольный, $H$ — середина гипотенузы.

**Пример 3.** Наклонные $AM$ и $AN$ из точки $A$ образуют с плоскостью углы $30^\\circ$ и $60^\\circ$ (угол между наклонной и её проекцией). Какая длиннее? $AM = \\dfrac{AH}{\\sin 30^\\circ} = 2AH$, $AN = \\dfrac{AH}{\\sin 60^\\circ} = \\dfrac{2AH}{\\sqrt3}$, значит, $AM$ длиннее. Чем меньше угол с плоскостью, тем длиннее наклонная.

## Расстояния

- **От точки до плоскости:** длина перпендикуляра. Все точки прямой, параллельной плоскости, равноудалены от неё, поэтому это также **расстояние от прямой до плоскости**.
- **Между параллельными плоскостями:** расстояние от любой точки одной плоскости до другой; оно одинаково для всех точек.
- **Между скрещивающимися прямыми:** длина их **общего перпендикуляра**, равная расстоянию от одной прямой до плоскости, проходящей через другую прямую параллельно первой.

**Пример 4.** В кубе с ребром $a$ расстояние от $A_1$ до плоскости $ABCD$ равно $a$; от прямой $A_1B_1$ до плоскости $ABCD$ — $a$; между плоскостями $ABB_1A_1$ и $DCC_1D_1$ — $a$.

**Пример 5.** Расстояние между скрещивающимися прямыми $AA_1$ и $BC$ в кубе: $AB \\perp AA_1$ и $AB \\perp BC$, значит, $AB$ — общий перпендикуляр, и расстояние равно $a$. Расстояние между $AB$ и $C_1D_1$: $BC_1 \\perp AB$, так как $AB \\perp (BB_1C_1C)$, и $BC_1 \\perp C_1D_1$, так как $C_1D_1 \\perp (BB_1C_1C)$. Значит, $BC_1$ — общий перпендикуляр, и расстояние равно $a\\sqrt2$.

**Пример 6.** Расстояние от вершины $A$ до диагональной плоскости $BB_1D_1D$ куба: $AC \\perp (BB_1D_1D)$, и $AC$ пересекает её в центре $O$ основания, поэтому расстояние равно $AO = \\dfrac{a\\sqrt2}{2}$.

**Пример 7.** В правильной пирамиде $SABCD$ со стороной основания $6$ и боковым ребром $5$ найдём высоту. $SO \\perp$ основанию, $O$ — центр, $AO = \\dfrac{6\\sqrt2}{2} = 3\\sqrt2$, $SO = \\sqrt{25 - 18} = \\sqrt7$.

**Пример 8.** Расстояние от точки $M$ до плоскости $\\alpha$ равно $8$. Две наклонные $MP$ и $MQ$ имеют проекции $6$ и $15$, угол между проекциями $90^\\circ$. Найдём $PQ$. $PQ$ лежит в $\\alpha$: $PQ = \\sqrt{36 + 225} = \\sqrt{261} = 3\\sqrt{29}$. Сами наклонные: $MP = 10$, $MQ = 17$.

### Упражнения

1. Из точки, удалённой от плоскости на $7$ см, проведены наклонные $25$ см и $\\sqrt{65}$ см. Найдите их проекции.
2. Проекции двух наклонных из одной точки равны $9$ и $12$, меньшая наклонная равна $15$. Найдите большую наклонную и расстояние от точки до плоскости.
3. Точка $M$ равноудалена от вершин прямоугольника со сторонами $6$ и $8$, $MA = 13$. Найдите расстояние от $M$ до плоскости прямоугольника.
4. В кубе с ребром $4$ найдите расстояние от $B$ до плоскости $ACC_1A_1$ и от $A$ до прямой $B_1C_1$.
5. В кубе с ребром $a$ найдите расстояние между скрещивающимися прямыми $AB$ и $CC_1$; $AA_1$ и $B_1C_1$; $AB$ и $A_1D_1$.
6. Прямые $a$ и $b$ параллельны плоскости $\\alpha$ и удалены от неё на $3$ и $5$, по одну сторону. Найдите расстояние между плоскостями, проходящими через $a$ и $b$ параллельно $\\alpha$.
7. Правильная треугольная пирамида $SABC$ имеет сторону основания $6$ и высоту $4$. Найдите боковое ребро (радиус описанной окружности равностороннего треугольника со стороной $6$ равен $2\\sqrt3$).
8. Наклонная $AM$ образует с плоскостью угол $45^\\circ$, $AM = 10$. Найдите перпендикуляр и проекцию.

### Ответы

1. $\\sqrt{625 - 49} = 24$; $\\sqrt{65 - 49} = 4$. 2. $AH = \\sqrt{225 - 81} = 12$; большая наклонная $\\sqrt{144 + 144} = 12\\sqrt2$. 3. Основание — центр прямоугольника, $OA = 5$, расстояние $\\sqrt{169 - 25} = 12$. 4. $BO = 2\\sqrt2$ ($O$ — центр основания); $AB_1 = 4\\sqrt2$, так как $AB_1 \\perp B_1C_1$ ($B_1C_1 \\perp (ABB_1A_1)$). 5. $BC = a$; $A_1B_1 = a$; $AA_1 = a$. 6. $2$. 7. $\\sqrt{16 + 12} = 2\\sqrt7$. 8. Оба равны $10 \\cdot \\dfrac{\\sqrt2}{2} = 5\\sqrt2$.`,
      },
      [
        q(t("Compared with any oblique from the same point, the perpendicular is…", "Նույն կետից տարված ցանկացած թեքի համեմատ ուղղահայացը…", "По сравнению с любой наклонной из той же точки перпендикуляр…"), [t("shorter", "ավելի կարճ է", "короче"), t("longer", "ավելի երկար է", "длиннее"), t("equal", "հավասար է", "равен")], 0),
        q(t("Equal obliques from one point have…", "Մեկ կետից տարված հավասար թեքերն ունեն…", "Равные наклонные из одной точки имеют…"), [t("equal projections", "հավասար պրոյեկցիաներ", "равные проекции"), t("different projections", "տարբեր պրոյեկցիաներ", "разные проекции"), t("no projections", "պրոյեկցիաներ չունեն", "не имеют проекций")], 0),
        q(t("An oblique of 13 from a point 12 away from the plane has projection…", "Հարթությունից 12 հեռավորությամբ կետից 13 թեքի պրոյեկցիան…", "Наклонная 13 из точки на расстоянии 12 от плоскости имеет проекцию…"), [t("1", "1", "1"), t("5", "5", "5"), t("25", "25", "25")], 1),
        q(t("The distance between skew lines is the length of…", "Խաչվող ուղիղների հեռավորությունն երկարությունն է…", "Расстояние между скрещивающимися прямыми — это длина…"), [t("any segment joining them", "դրանք միացնող ցանկացած հատվածի", "любого отрезка между ними"), t("their common perpendicular", "դրանց ընդհանուր ուղղահայացի", "их общего перпендикуляра"), t("the shorter line", "կարճ ուղղի", "более короткой прямой")], 1),
        q(t("If a point is equidistant from the vertices of a triangle, the foot of the perpendicular is…", "Եթե կետը հավասարահեռ է եռանկյան գագաթներից, ուղղահայացի հիմքը…", "Если точка равноудалена от вершин треугольника, основание перпендикуляра —"), [t("the centroid", "ծանրության կենտրոնն է", "центр тяжести"), t("the circumcentre", "արտագծյալ շրջանագծի կենտրոնն է", "центр описанной окружности"), t("the incentre", "ներգծյալ շրջանագծի կենտրոնն է", "центр вписанной окружности")], 1),
        q(t("In a cube with edge a, the distance between AA₁ and BC is…", "a կողով խորանարդում AA₁-ի և BC-ի հեռավորությունը…", "В кубе с ребром a расстояние между AA₁ и BC равно…"), [t("a", "a", "a"), t("a√2", "a√2", "a√2"), t("a√3", "a√3", "a√3")], 0),
      ],
    ),
    lesson(
      "three-perpendiculars",
      ["Theorem of three perpendiculars", "Երեք ուղղահայացների թեորեմ", "Теорема о трёх перпендикулярах"],
      {
        en: ["State and prove the theorem of three perpendiculars and its converse", "Define the angle between a line and a plane as the angle with the projection", "Apply the theorem to find right angles and compute angles between lines and planes in cubes and pyramids"],
        hy: ["Ձևակերպել և ապացուցել երեք ուղղահայացների թեորեմը և նրա հակադարձը", "Սահմանել ուղղի և հարթության անկյունը որպես պրոյեկցիայի հետ անկյուն", "Կիրառել թեորեմն ուղիղ անկյուններ գտնելու և խորանարդներում ու բուրգերում ուղղի և հարթության անկյուններ հաշվելու համար"],
        ru: ["Формулировать и доказывать теорему о трёх перпендикулярах и обратную к ней", "Определять угол между прямой и плоскостью как угол с проекцией", "Применять теорему для нахождения прямых углов и вычисления углов между прямыми и плоскостями в кубах и пирамидах"],
      },
      {
        en: `## The theorem

Let $AH$ be the perpendicular from $A$ to the plane $\\alpha$, $AM$ an oblique with projection $HM$, and $a$ a line in $\\alpha$ passing through $M$.

**Theorem (three perpendiculars).** If the line $a \\subset \\alpha$ is perpendicular to the projection $HM$ of an oblique, then it is perpendicular to the oblique $AM$ itself.

*Proof.* $a \\perp HM$ (given) and $a \\perp AH$ (since $AH \\perp \\alpha$). So $a$ is perpendicular to two intersecting lines of the plane $AHM$, hence $a \\perp (AHM)$ and $a \\perp AM$. $\\blacksquare$

**Converse.** If a line in the plane is perpendicular to an oblique, it is perpendicular to its projection. The proof is the same with the roles of $AM$ and $HM$ exchanged.

The name refers to the three right angles: $AH \\perp a$, $HM \\perp a$, $AM \\perp a$. The theorem says that the first two imply the third, and the converse that the first and third imply the second.

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$, is $A_1C \\perp BD$? The oblique $A_1C$ has projection $AC$ on the base ($A_1A \\perp$ base). $BD \\perp AC$ (square diagonals), so by the theorem $BD \\perp A_1C$. This is the result of the previous lesson, now in one line.

**Example 2.** In the cube, prove $AC_1 \\perp A_1B$. Project onto the face $ABB_1A_1$: $C_1$ projects to $B_1$ (since $C_1B_1 \\perp$ this face), so the projection of the oblique $AC_1$ is $AB_1$. The diagonals of the square $ABB_1A_1$ are perpendicular, $A_1B \\perp AB_1$, hence $A_1B \\perp AC_1$. In the same way, using the face $BB_1C_1C$ ($A$ projects to $B$, projection $BC_1 \\perp B_1C$) we get $AC_1 \\perp B_1C$, and using the base, $AC_1 \\perp BD$. So the space diagonal $AC_1$ is perpendicular to the two sides $A_1B$ and $BD$ of the triangle $A_1BD$, hence $AC_1 \\perp (A_1BD)$.

**Example 3.** In the regular pyramid $SABCD$, $M$ is the midpoint of $BC$. Prove $SM \\perp BC$: the oblique $SM$ has projection $OM$ (where $O$ is the centre), and $OM \\perp BC$ in the square. Hence $SM \\perp BC$: the apothem is perpendicular to the base edge.

**Example 4.** From a vertex $A$ of the rectangle $ABCD$ a perpendicular $AK$ to its plane is drawn. Prove that the triangles $KBC$ and $KDC$ are right-angled. The oblique $KB$ has projection $AB$; $BC \\perp AB$, so $BC \\perp KB$: a right angle at $B$. Similarly $CD \\perp AD$ gives $CD \\perp KD$.

**Example 5.** $AK \\perp (ABC)$, where $ABC$ is a triangle with $\\angle C = 90^\\circ$. Then $KC \\perp BC$ (the projection $AC \\perp BC$), so the distance from $K$ to the line $BC$ is $KC$. With $AK = 6$, $AC = 8$: $KC = 10$.

## Angle between a line and a plane

The **angle between an oblique and a plane** is the angle between the oblique and its projection. It is the smallest angle the line forms with lines of the plane. For a line perpendicular to the plane the angle is $90^\\circ$, for a parallel line $0^\\circ$.

**Example 6.** In the cube with edge $a$, the angle between the face diagonal $AB_1$ and the base is $\\angle B_1AB = 45^\\circ$. The angle between the space diagonal $AC_1$ and the base: the projection is $AC = a\\sqrt2$, $\\tan\\varphi = \\dfrac{CC_1}{AC} = \\dfrac{a}{a\\sqrt2} = \\dfrac{\\sqrt2}{2}$, $\\varphi = \\arctan\\dfrac{\\sqrt2}{2} \\approx 35{,}3^\\circ$.

**Example 7.** In the regular pyramid $SABCD$ with base side $6$ and height $3\\sqrt2$, the angle between a lateral edge and the base: $AO = 3\\sqrt2$, $\\tan\\angle SAO = \\dfrac{SO}{AO} = 1$, so $45^\\circ$.

**Example 8.** The angle between the space diagonal $AC_1$ of the cube and the lateral face $BB_1C_1C$: the perpendicular from $A$ to this face is $AB$, so $\\sin\\varphi = \\dfrac{AB}{AC_1} = \\dfrac{a}{a\\sqrt3} = \\dfrac{1}{\\sqrt3}$, the same angle as with the base, by symmetry.

### Exercises

1. State the theorem of three perpendiculars in your own words and name the three perpendicular relations in it.
2. In the cube, prove that $AC_1 \\perp BD$ and $AC_1 \\perp B_1D_1$.
3. $AK \\perp (ABCD)$, where $ABCD$ is a square. Prove that $KC \\perp BD$.
4. $AK \\perp (ABC)$ and $AD$ is the height of the triangle $ABC$. Prove that $KD \\perp BC$. (This is the standard way to find the distance from $K$ to the line $BC$.)
5. In Exercise 4, $AK = 12$, $AB = AC = 10$, $BC = 12$. Find the distance from $K$ to $BC$.
6. In the cube with edge $a$, find the angle between $BD_1$ and the base.
7. In the regular pyramid $SABC$ with base side $6$ and lateral edge $4$, find the angle between a lateral edge and the base.
8. The oblique $AM$ is $2\\sqrt3$ long and makes $60^\\circ$ with the plane. Find the perpendicular $AH$ and the projection $HM$.

### Answers

1. If a line in the plane is perpendicular to the projection of an oblique, it is perpendicular to the oblique; the relations are $AH \\perp a$, $HM \\perp a$, $AM \\perp a$. 2. The projection of $AC_1$ on the base is $AC \\perp BD$, so $AC_1 \\perp BD$; the projection of $AC_1$ on the top face is $A_1C_1 \\perp B_1D_1$, so $AC_1 \\perp B_1D_1$. 3. The projection of $KC$ is $AC \\perp BD$. 4. The projection of $KD$ is $AD \\perp BC$. 5. $AD = \\sqrt{100 - 36} = 8$, $KD = \\sqrt{144 + 64} = \\sqrt{208} = 4\\sqrt{13}$. 6. Projection $BD = a\\sqrt2$, $\\tan\\varphi = \\dfrac{1}{\\sqrt2}$, $\\varphi \\approx 35{,}3^\\circ$. 7. $AO = 2\\sqrt3$, $\\cos\\varphi = \\dfrac{2\\sqrt3}{4} = \\dfrac{\\sqrt3}{2}$, $\\varphi = 30^\\circ$. 8. $AH = 2\\sqrt3 \\sin 60^\\circ = 3$, $HM = 2\\sqrt3 \\cos 60^\\circ = \\sqrt3$.`,
        hy: `## Թեորեմը

Դիցուք $AH$-ը $A$-ից $\\alpha$ հարթություն տարված ուղղահայացն է, $AM$-ը՝ թեք $HM$ պրոյեկցիայով, իսկ $a$-ն $\\alpha$-ում $M$-ով անցնող ուղիղ է։

**Թեորեմ (երեք ուղղահայացների)։** Եթե $a \\subset \\alpha$ ուղիղն ուղղահայաց է թեքի $HM$ պրոյեկցիային, ապա այն ուղղահայաց է նաև $AM$ թեքին։

*Ապացույց։* $a \\perp HM$ (տրված է) և $a \\perp AH$ (քանի որ $AH \\perp \\alpha$)։ Ուստի $a$-ն ուղղահայաց է $AHM$ հարթության երկու հատվող ուղիղների, հետևաբար $a \\perp (AHM)$ և $a \\perp AM$։ $\\blacksquare$

**Հակադարձ։** Եթե հարթության ուղիղն ուղղահայաց է թեքին, ապա ուղղահայաց է նրա պրոյեկցիային։ Ապացույցը նույնն է՝ $AM$-ի և $HM$-ի դերերը փոխելով։

Անվանումը վերաբերում է երեք ուղիղ անկյուններին․ $AH \\perp a$, $HM \\perp a$, $AM \\perp a$։ Թեորեմն ասում է, որ առաջին երկուսից հետևում է երրորդը, իսկ հակադարձը՝ որ առաջինից և երրորդից հետևում է երկրորդը։

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $A_1C \\perp BD$ է՞։ $A_1C$ թեքի պրոյեկցիան հիմքի վրա $AC$-ն է ($A_1A \\perp$ հիմք)։ $BD \\perp AC$ (քառակուսու անկյունագծեր), ուստի թեորեմով $BD \\perp A_1C$։ Սա նախորդ դասի արդյունքն է, այժմ մեկ տողով։

**Օրինակ 2։** Խորանարդում ապացուցենք $AC_1 \\perp A_1B$։ Պրոյեկտենք $ABB_1A_1$ նիստի վրա․ $C_1$-ը պրոյեկտվում է $B_1$-ի (քանի որ $C_1B_1 \\perp$ այս նիստ), ուստի $AC_1$ թեքի պրոյեկցիան $AB_1$-ն է։ $ABB_1A_1$ քառակուսու անկյունագծերն ուղղահայաց են՝ $A_1B \\perp AB_1$, հետևաբար $A_1B \\perp AC_1$։ Նույն կերպ $BB_1C_1C$ նիստով ($A$-ն պրոյեկտվում է $B$-ի, պրոյեկցիան $BC_1 \\perp B_1C$) ստանում ենք $AC_1 \\perp B_1C$։ Հիմքով՝ $AC_1 \\perp BD$։ Այսպիսով տարածական $AC_1$ անկյունագիծն ուղղահայաց է $A_1BD$ եռանկյան երկու կողմերին՝ $A_1B$ և $BD$, ուստի $AC_1 \\perp (A_1BD)$։

**Օրինակ 3։** $SABCD$ կանոնավոր բուրգում $M$-ը $BC$-ի միջնակետն է։ Ապացուցենք $SM \\perp BC$․ $SM$ թեքի պրոյեկցիան $OM$-ն է ($O$-ն կենտրոնն է), և քառակուսում $OM \\perp BC$։ Հետևաբար $SM \\perp BC$․ ապոթեմն ուղղահայաց է հիմքի կողին։

**Օրինակ 4։** $ABCD$ ուղղանկյան $A$ գագաթից նրա հարթությանը տարված է $AK$ ուղղահայաց։ Ապացուցենք, որ $KBC$ և $KDC$ եռանկյուններն ուղղանկյուն են։ $KB$ թեքի պրոյեկցիան $AB$-ն է, $BC \\perp AB$, ուստի $BC \\perp KB$․ ուղիղ անկյուն $B$-ում։ Նույն կերպ $CD \\perp AD$-ից $CD \\perp KD$։

**Օրինակ 5։** $AK \\perp (ABC)$, որտեղ $ABC$-ն եռանկյուն է $\\angle C = 90^\\circ$-ով։ Այդ դեպքում $KC \\perp BC$ ($AC \\perp BC$ պրոյեկցիան), ուստի $K$-ից $BC$ ուղիղ հեռավորությունը $KC$-ն է։ $AK = 6$, $AC = 8$ դեպքում՝ $KC = 10$։

## Ուղղի և հարթության անկյուն

**Թեքի և հարթության անկյունը** թեքի և նրա պրոյեկցիայի անկյունն է։ Դա ամենափոքր անկյունն է, որն ուղիղը կազմում է հարթության ուղիղների հետ։ Հարթությանն ուղղահայաց ուղղի համար անկյունը $90^\\circ$ է, զուգահեռի համար՝ $0^\\circ$։

**Օրինակ 6։** $a$ կողով խորանարդում $AB_1$ նիստի անկյունագծի և հիմքի անկյունը $\\angle B_1AB = 45^\\circ$ է։ $AC_1$ տարածական անկյունագծի և հիմքի անկյունը․ պրոյեկցիան $AC = a\\sqrt2$, $\\tan\\varphi = \\dfrac{CC_1}{AC} = \\dfrac{a}{a\\sqrt2} = \\dfrac{\\sqrt2}{2}$, $\\varphi = \\arctan\\dfrac{\\sqrt2}{2} \\approx 35{,}3^\\circ$։

**Օրինակ 7։** $6$ հիմքի կողով և $3\\sqrt2$ բարձրությամբ $SABCD$ կանոնավոր բուրգում կողմնային կողի և հիմքի անկյունը․ $AO = 3\\sqrt2$, $\\tan\\angle SAO = \\dfrac{SO}{AO} = 1$, ուստի $45^\\circ$։

**Օրինակ 8։** Խորանարդի $AC_1$ տարածական անկյունագծի և $BB_1C_1C$ կողմնային նիստի անկյունը․ $A$-ից այս նիստին տարված ուղղահայացը $AB$-ն է, ուստի $\\sin\\varphi = \\dfrac{AB}{AC_1} = \\dfrac{a}{a\\sqrt3} = \\dfrac{1}{\\sqrt3}$, նույն անկյունը, ինչ հիմքի հետ, սիմետրիայի պատճառով։

### Վարժություններ

1. Ձևակերպեք երեք ուղղահայացների թեորեմը ձեր բառերով և անվանեք նրա երեք ուղղահայացության առնչությունները։
2. Խորանարդում ապացուցեք, որ $AC_1 \\perp BD$ և $AC_1 \\perp B_1D_1$։
3. $AK \\perp (ABCD)$, որտեղ $ABCD$-ն քառակուսի է։ Ապացուցեք, որ $KC \\perp BD$։
4. $AK \\perp (ABC)$, և $AD$-ն $ABC$ եռանկյան բարձրությունն է։ Ապացուցեք, որ $KD \\perp BC$։ (Սա $K$-ից $BC$ ուղիղ հեռավորությունը գտնելու ստանդարտ եղանակն է։)
5. 4-րդ վարժությունում $AK = 12$, $AB = AC = 10$, $BC = 12$։ Գտեք $K$-ից $BC$ հեռավորությունը։
6. $a$ կողով խորանարդում գտեք $BD_1$-ի և հիմքի անկյունը։
7. $6$ հիմքի կողով և $4$ կողմնային կողով $SABC$ կանոնավոր բուրգում գտեք կողմնային կողի և հիմքի անկյունը։
8. $AM$ թեքը $2\\sqrt3$ երկարություն ունի և հարթության հետ կազմում է $60^\\circ$։ Գտեք $AH$ ուղղահայացը և $HM$ պրոյեկցիան։

### Պատասխաններ

1. Եթե հարթության ուղիղն ուղղահայաց է թեքի պրոյեկցիային, ապա ուղղահայաց է թեքին, առնչությունները՝ $AH \\perp a$, $HM \\perp a$, $AM \\perp a$։ 2. $AC_1$-ի պրոյեկցիան հիմքի վրա $AC \\perp BD$ է, ուստի $AC_1 \\perp BD$, $AC_1$-ի պրոյեկցիան վերին նիստի վրա $A_1C_1 \\perp B_1D_1$ է, ուստի $AC_1 \\perp B_1D_1$։ 3. $KC$-ի պրոյեկցիան $AC \\perp BD$ է։ 4. $KD$-ի պրոյեկցիան $AD \\perp BC$ է։ 5. $AD = \\sqrt{100 - 36} = 8$, $KD = \\sqrt{144 + 64} = \\sqrt{208} = 4\\sqrt{13}$։ 6. Պրոյեկցիան $BD = a\\sqrt2$, $\\tan\\varphi = \\dfrac{1}{\\sqrt2}$, $\\varphi \\approx 35{,}3^\\circ$։ 7. $AO = 2\\sqrt3$, $\\cos\\varphi = \\dfrac{2\\sqrt3}{4} = \\dfrac{\\sqrt3}{2}$, $\\varphi = 30^\\circ$։ 8. $AH = 2\\sqrt3 \\sin 60^\\circ = 3$, $HM = 2\\sqrt3 \\cos 60^\\circ = \\sqrt3$։`,
        ru: `## Теорема

Пусть $AH$ — перпендикуляр из $A$ к плоскости $\\alpha$, $AM$ — наклонная с проекцией $HM$, а $a$ — прямая в $\\alpha$, проходящая через $M$.

**Теорема (о трёх перпендикулярах).** Если прямая $a \\subset \\alpha$ перпендикулярна проекции $HM$ наклонной, то она перпендикулярна и самой наклонной $AM$.

*Доказательство.* $a \\perp HM$ (дано) и $a \\perp AH$ (так как $AH \\perp \\alpha$). Значит, $a$ перпендикулярна двум пересекающимся прямым плоскости $AHM$, поэтому $a \\perp (AHM)$ и $a \\perp AM$. $\\blacksquare$

**Обратная теорема.** Если прямая в плоскости перпендикулярна наклонной, то она перпендикулярна её проекции. Доказательство такое же, с заменой ролей $AM$ и $HM$.

Название связано с тремя прямыми углами: $AH \\perp a$, $HM \\perp a$, $AM \\perp a$. Теорема утверждает, что из первых двух следует третий, а обратная — что из первого и третьего следует второй.

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ верно ли $A_1C \\perp BD$? Наклонная $A_1C$ имеет проекцию $AC$ на основание ($A_1A \\perp$ основанию). $BD \\perp AC$ (диагонали квадрата), значит, по теореме $BD \\perp A_1C$. Это результат предыдущего урока, теперь в одну строку.

**Пример 2.** В кубе докажем $AC_1 \\perp A_1B$. Проектируем на грань $ABB_1A_1$: $C_1$ проектируется в $B_1$ (так как $C_1B_1 \\perp$ этой грани), поэтому проекция наклонной $AC_1$ — это $AB_1$. Диагонали квадрата $ABB_1A_1$ перпендикулярны, $A_1B \\perp AB_1$, значит, $A_1B \\perp AC_1$. Аналогично через грань $BB_1C_1C$ ($A$ проектируется в $B$, проекция $BC_1 \\perp B_1C$) получаем $AC_1 \\perp B_1C$, а через основание — $AC_1 \\perp BD$. Итак, пространственная диагональ $AC_1$ перпендикулярна двум сторонам $A_1B$ и $BD$ треугольника $A_1BD$, значит, $AC_1 \\perp (A_1BD)$.

**Пример 3.** В правильной пирамиде $SABCD$ точка $M$ — середина $BC$. Докажем $SM \\perp BC$: наклонная $SM$ имеет проекцию $OM$ ($O$ — центр), и в квадрате $OM \\perp BC$. Значит, $SM \\perp BC$: апофема перпендикулярна ребру основания.

**Пример 4.** Из вершины $A$ прямоугольника $ABCD$ проведён перпендикуляр $AK$ к его плоскости. Докажем, что треугольники $KBC$ и $KDC$ прямоугольные. Наклонная $KB$ имеет проекцию $AB$; $BC \\perp AB$, значит, $BC \\perp KB$: прямой угол при $B$. Аналогично из $CD \\perp AD$ следует $CD \\perp KD$.

**Пример 5.** $AK \\perp (ABC)$, где $ABC$ — треугольник с $\\angle C = 90^\\circ$. Тогда $KC \\perp BC$ (проекция $AC \\perp BC$), поэтому расстояние от $K$ до прямой $BC$ равно $KC$. При $AK = 6$, $AC = 8$: $KC = 10$.

## Угол между прямой и плоскостью

**Угол между наклонной и плоскостью** — угол между наклонной и её проекцией. Это наименьший из углов, которые прямая образует с прямыми плоскости. Для прямой, перпендикулярной плоскости, угол равен $90^\\circ$, для параллельной — $0^\\circ$.

**Пример 6.** В кубе с ребром $a$ угол между диагональю грани $AB_1$ и основанием равен $\\angle B_1AB = 45^\\circ$. Угол между пространственной диагональю $AC_1$ и основанием: проекция $AC = a\\sqrt2$, $\\tan\\varphi = \\dfrac{CC_1}{AC} = \\dfrac{a}{a\\sqrt2} = \\dfrac{\\sqrt2}{2}$, $\\varphi = \\arctan\\dfrac{\\sqrt2}{2} \\approx 35{,}3^\\circ$.

**Пример 7.** В правильной пирамиде $SABCD$ со стороной основания $6$ и высотой $3\\sqrt2$ угол между боковым ребром и основанием: $AO = 3\\sqrt2$, $\\tan\\angle SAO = \\dfrac{SO}{AO} = 1$, то есть $45^\\circ$.

**Пример 8.** Угол между пространственной диагональю $AC_1$ куба и боковой гранью $BB_1C_1C$: перпендикуляр из $A$ к этой грани — $AB$, поэтому $\\sin\\varphi = \\dfrac{AB}{AC_1} = \\dfrac{a}{a\\sqrt3} = \\dfrac{1}{\\sqrt3}$, тот же угол, что и с основанием, по симметрии.

### Упражнения

1. Сформулируйте теорему о трёх перпендикулярах своими словами и назовите три отношения перпендикулярности в ней.
2. В кубе докажите, что $AC_1 \\perp BD$ и $AC_1 \\perp B_1D_1$.
3. $AK \\perp (ABCD)$, где $ABCD$ — квадрат. Докажите, что $KC \\perp BD$.
4. $AK \\perp (ABC)$, $AD$ — высота треугольника $ABC$. Докажите, что $KD \\perp BC$. (Это стандартный способ найти расстояние от $K$ до прямой $BC$.)
5. В упражнении 4 $AK = 12$, $AB = AC = 10$, $BC = 12$. Найдите расстояние от $K$ до $BC$.
6. В кубе с ребром $a$ найдите угол между $BD_1$ и основанием.
7. В правильной пирамиде $SABC$ со стороной основания $6$ и боковым ребром $4$ найдите угол между боковым ребром и основанием.
8. Наклонная $AM$ имеет длину $2\\sqrt3$ и образует с плоскостью угол $60^\\circ$. Найдите перпендикуляр $AH$ и проекцию $HM$.

### Ответы

1. Если прямая в плоскости перпендикулярна проекции наклонной, то она перпендикулярна наклонной; отношения: $AH \\perp a$, $HM \\perp a$, $AM \\perp a$. 2. Проекция $AC_1$ на основание — $AC \\perp BD$, значит, $AC_1 \\perp BD$; проекция $AC_1$ на верхнюю грань — $A_1C_1 \\perp B_1D_1$, значит, $AC_1 \\perp B_1D_1$. 3. Проекция $KC$ — это $AC \\perp BD$. 4. Проекция $KD$ — это $AD \\perp BC$. 5. $AD = \\sqrt{100 - 36} = 8$, $KD = \\sqrt{144 + 64} = \\sqrt{208} = 4\\sqrt{13}$. 6. Проекция $BD = a\\sqrt2$, $\\tan\\varphi = \\dfrac{1}{\\sqrt2}$, $\\varphi \\approx 35{,}3^\\circ$. 7. $AO = 2\\sqrt3$, $\\cos\\varphi = \\dfrac{2\\sqrt3}{4} = \\dfrac{\\sqrt3}{2}$, $\\varphi = 30^\\circ$. 8. $AH = 2\\sqrt3 \\sin 60^\\circ = 3$, $HM = 2\\sqrt3 \\cos 60^\\circ = \\sqrt3$.`,
      },
      [
        q(t("If a line in a plane is perpendicular to the projection of an oblique, it is…", "Եթե հարթության ուղիղն ուղղահայաց է թեքի պրոյեկցիային, այն…", "Если прямая в плоскости перпендикулярна проекции наклонной, то она…"), [t("perpendicular to the oblique", "ուղղահայաց է թեքին", "перпендикулярна наклонной"), t("parallel to the oblique", "զուգահեռ է թեքին", "параллельна наклонной"), t("perpendicular to the plane", "ուղղահայաց է հարթությանը", "перпендикулярна плоскости")], 0),
        q(t("The angle between an oblique and a plane is the angle between the oblique and…", "Թեքի և հարթության անկյունը թեքի և … անկյունն է։", "Угол между наклонной и плоскостью — это угол между наклонной и…"), [t("the perpendicular", "ուղղահայացի", "перпендикуляром"), t("its projection", "նրա պրոյեկցիայի", "её проекцией"), t("any line of the plane", "հարթության ցանկացած ուղղի", "любой прямой плоскости")], 1),
        q(t("The angle between the space diagonal of a cube and its base has tangent…", "Խորանարդի տարածական անկյունագծի և հիմքի անկյան տանգենսը…", "Тангенс угла между пространственной диагональю куба и основанием равен…"), [t("1", "1", "1"), t("√2/2", "√2/2", "√2/2"), t("√2", "√2", "√2")], 1),
        q(t("The apothem of a regular pyramid is perpendicular to the base edge because…", "Կանոնավոր բուրգի ապոթեմն ուղղահայաց է հիմքի կողին, քանի որ…", "Апофема правильной пирамиды перпендикулярна ребру основания, потому что…"), [t("its projection is perpendicular to the edge", "նրա պրոյեկցիան ուղղահայաց է կողին", "её проекция перпендикулярна ребру"), t("all edges are equal", "բոլոր կողերը հավասար են", "все рёбра равны"), t("it is a height", "այն բարձրություն է", "это высота")], 0),
        q(t("The angle between a face diagonal of a cube and the base is…", "Խորանարդի նիստի անկյունագծի և հիմքի անկյունը…", "Угол между диагональю грани куба и основанием равен…"), [t("30°", "30°", "30°"), t("45°", "45°", "45°"), t("60°", "60°", "60°")], 1),
        q(t("An oblique of length 2√3 at 60° to the plane has perpendicular…", "Հարթության հետ 60° կազմող 2√3 թեքի ուղղահայացը…", "Наклонная длины 2√3 под углом 60° к плоскости имеет перпендикуляр…"), [t("3", "3", "3"), t("√3", "√3", "√3"), t("6", "6", "6")], 0),
      ],
    ),
    lesson(
      "dihedral-angle",
      ["Dihedral angle; perpendicular planes", "Երկնիստ անկյուն, ուղղահայաց հարթություններ", "Двугранный угол; перпендикулярность плоскостей"],
      {
        en: ["Define a dihedral angle and its linear angle and explain why the linear angle does not depend on the chosen point", "Define perpendicular planes and prove the criterion: a plane through a perpendicular to another plane is perpendicular to it", "Compute dihedral angles in cubes and regular pyramids through their linear angles"],
        hy: ["Սահմանել երկնիստ անկյունը և նրա գծային անկյունը և բացատրել, թե ինչու գծային անկյունը կախված չէ ընտրված կետից", "Սահմանել ուղղահայաց հարթությունները և ապացուցել հայտանիշը․ մյուս հարթությանն ուղղահայաց ուղղով անցնող հարթությունն ուղղահայաց է նրան", "Հաշվել երկնիստ անկյուններ խորանարդներում և կանոնավոր բուրգերում դրանց գծային անկյունների միջոցով"],
        ru: ["Определять двугранный угол и его линейный угол и объяснять, почему линейный угол не зависит от выбора точки", "Определять перпендикулярные плоскости и доказывать признак: плоскость, проходящая через перпендикуляр к другой плоскости, перпендикулярна ей", "Вычислять двугранные углы в кубах и правильных пирамидах через их линейные углы"],
      },
      {
        en: `## Dihedral angle

A line $a$ divides a plane into two half-planes. Two half-planes with a common boundary line $a$ that do not lie in one plane form a **dihedral angle**; the half-planes are its **faces**, the line $a$ is its **edge**. An open book, two walls meeting in a corner, the roof slopes along the ridge are dihedral angles.

To measure it, take a point $O$ on the edge and draw in each face the ray perpendicular to the edge at $O$. The angle between these two rays is the **linear angle** of the dihedral angle. All linear angles of a dihedral angle are equal (their sides are respectively parallel), so the measure does not depend on $O$. Dihedral angles are measured from $0^\\circ$ to $180^\\circ$; a dihedral angle of $90^\\circ$ is **right**.

**Recipe for the linear angle.** Choose a convenient point $O$ on the edge, often the midpoint of an edge of the solid or a vertex, and find in each face the perpendicular to the edge at $O$. In a regular pyramid the perpendiculars to a base edge at its midpoint are the apothem and the segment to the centre of the base.

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$ the dihedral angle at the edge $AB$ between the faces $ABCD$ and $ABB_1A_1$ has linear angle $\\angle DAA_1 = 90^\\circ$ (both $AD$ and $AA_1$ are perpendicular to $AB$ at $A$).

**Example 2.** The dihedral angle between the plane $ABC_1D_1$ and the base $ABCD$ of the cube: the edge is $AB$; $BC \\perp AB$ in the base and $BC_1 \\perp AB$ in the section (since $AB \\perp (BB_1C_1C)$). The linear angle is $\\angle C_1BC = 45^\\circ$.

**Example 3.** The dihedral angle at the edge $BD$ between the plane $BDC_1$ and the base of the cube with edge $a$. Let $M$ be the midpoint of $BD$. $CM \\perp BD$ (diagonals of a square), and $C_1M \\perp BD$ by the theorem of three perpendiculars (projection $CM$). Linear angle $\\angle C_1MC$: $\\tan\\varphi = \\dfrac{CC_1}{CM} = \\dfrac{a}{a\\sqrt2 / 2} = \\sqrt2$, $\\varphi = \\arctan\\sqrt2 \\approx 54{,}7^\\circ$.

**Example 4.** In the regular pyramid $SABCD$ with base side $6$ and height $4$, the dihedral angle at a base edge: $M$ the midpoint of $BC$, $OM = 3$ ($O$ the centre), $SM \\perp BC$ (apothem), $OM \\perp BC$; $\\tan\\angle SMO = \\dfrac{SO}{OM} = \\dfrac43$, $\\varphi \\approx 53{,}1^\\circ$. The apothem itself is $SM = \\sqrt{16 + 9} = 5$.

## Perpendicular planes

Two intersecting planes are **perpendicular** if the dihedral angle between them is right. Then all four dihedral angles they form are right.

**Theorem (criterion).** If a plane passes through a line perpendicular to another plane, then the planes are perpendicular.

*Proof.* Let $a \\perp \\alpha$, $a \\subset \\beta$, $a \\cap \\alpha = O$, and $c = \\alpha \\cap \\beta$. In $\\alpha$ draw $b \\perp c$ at $O$. Then $a \\perp c$ (since $a \\perp \\alpha$) and $b \\perp c$, so $\\angle(a, b)$ is a linear angle of the dihedral angle between $\\alpha$ and $\\beta$; and $a \\perp b$ because $a \\perp \\alpha$. So the linear angle is $90^\\circ$. $\\blacksquare$

**Consequence.** If two planes are perpendicular and a line in one of them is perpendicular to their intersection line, then it is perpendicular to the other plane.

**Example 5.** In the cube every lateral face is perpendicular to the base, because it contains a lateral edge perpendicular to the base. Also the diagonal plane $ACC_1A_1$ is perpendicular to the base and to the plane $BDD_1B_1$ (it contains $AA_1 \\perp$ base; and $BD \\perp (ACC_1A_1)$).

**Example 6.** The planes $\\alpha \\perp \\beta$ meet along $c$. The point $A \\in \\alpha$ is at distance $5$ from $c$ and the point $B \\in \\beta$ is at distance $12$ from $c$; the feet of the perpendiculars from $A$ and $B$ to $c$ coincide at $O$. Find $AB$. By the consequence, $AO \\perp \\beta$, so $AO \\perp OB$ and $AB = \\sqrt{25 + 144} = 13$.

**Example 7.** In the regular pyramid $SABCD$ the planes $SAC$ and $SBD$ are perpendicular: $SAC$ contains $SO \\perp$ base, hence $SAC \\perp (ABCD)$; and $BD \\perp AC$, $BD \\perp SO$ give $BD \\perp (SAC)$, so $(SBD) \\perp (SAC)$ by the criterion.

**Example 8.** If $\\alpha \\perp \\gamma$ and $\\beta \\perp \\gamma$ and $\\alpha \\cap \\beta = a$, then $a \\perp \\gamma$. Indeed, the perpendicular from a point of $a$ to $\\gamma$ lies in $\\alpha$ and in $\\beta$ (by the consequence applied to each), hence coincides with $a$. Two walls perpendicular to the floor meet along a vertical line.

### Exercises

1. Find the linear angle of the dihedral angle between the faces $ABB_1A_1$ and $ADD_1A_1$ of the cube.
2. In the cube, find the dihedral angle between the plane $ADC_1B_1$ and the base.
3. In the cube with edge $a$, find the tangent of the dihedral angle between the plane $A_1BD$ and the base.
4. In the regular pyramid $SABCD$ with base side $8$ and height $3$, find the apothem and the dihedral angle at a base edge (give its tangent).
5. In the regular triangular pyramid $SABC$ with base side $6$ and height $\\sqrt3$, find the dihedral angle at a base edge (the inradius of the base is $\\sqrt3$).
6. Prove that the plane $BDD_1B_1$ of the cube is perpendicular to the plane $ABCD$ and to the plane $ACC_1A_1$.
7. $\\alpha \\perp \\beta$, $\\alpha \\cap \\beta = c$; $A \\in \\alpha$, $AO \\perp c$ with $O \\in c$, $AO = 6$; $B \\in \\beta$, $BO = 8$. Find $AB$ if $BO \\perp c$, and if $BO$ makes $60^\\circ$ with $c$.
8. The dihedral angle is $60^\\circ$. A point $M$ in one face is at distance $6$ from the edge. Find its distance from the other face.

### Answers

1. $\\angle BAD = 90^\\circ$. 2. Edge $AD$; $AB \\perp AD$, $AB_1 \\perp AD$; $\\angle B_1AB = 45^\\circ$. 3. $M$ the midpoint of $BD$, $AM = \\dfrac{a\\sqrt2}{2}$, $\\tan\\varphi = \\dfrac{AA_1}{AM} = \\sqrt2$. 4. $OM = 4$, apothem $5$, $\\tan\\varphi = \\dfrac34$. 5. $\\tan\\varphi = \\dfrac{\\sqrt3}{\\sqrt3} = 1$, $\\varphi = 45^\\circ$. 6. It contains $BB_1 \\perp (ABCD)$; it contains $BD \\perp (ACC_1A_1)$. 7. If $BO \\perp c$: $AO \\perp \\beta$ so $AB = 10$. In general $AO \\perp \\beta$ gives $AO \\perp OB$ regardless of the angle of $BO$ with $c$, so again $AB = 10$. 8. $MH = 6\\sin 60^\\circ = 3\\sqrt3$, where $MH$ is the perpendicular to the other face: it lies in the plane of the linear angle through $M$.`,
        hy: `## Երկնիստ անկյուն

$a$ ուղիղը հարթությունը բաժանում է երկու կիսահարթության։ Ընդհանուր $a$ սահմանային ուղղով երկու կիսահարթություններ, որոնք մեկ հարթության մեջ չեն, կազմում են **երկնիստ անկյուն**, կիսահարթությունները նրա **նիստերն** են, $a$ ուղիղը՝ **կողը**։ Բաց գիրքը, անկյունում հանդիպող երկու պատերը, տանիքի լանջերը կատարի երկայնքով երկնիստ անկյուններ են։

Այն չափելու համար կողի վրա վերցնենք $O$ կետ և յուրաքանչյուր նիստում տանենք $O$-ում կողին ուղղահայաց ճառագայթ։ Այս երկու ճառագայթների անկյունն երկնիստ անկյան **գծային անկյունն** է։ Երկնիստ անկյան բոլոր գծային անկյունները հավասար են (դրանց կողմերը համապատասխանաբար զուգահեռ են), ուստի չափը կախված չէ $O$-ից։ Երկնիստ անկյունները չափվում են $0^\\circ$-ից $180^\\circ$, $90^\\circ$ երկնիստ անկյունը **ուղիղ** է։

**Գծային անկյան բաղադրատոմս։** Կողի վրա ընտրեք հարմար $O$ կետ, հաճախ մարմնի կողի միջնակետը կամ գագաթը, և յուրաքանչյուր նիստում գտեք $O$-ում կողին ուղղահայացը։ Կանոնավոր բուրգում հիմքի կողին նրա միջնակետում ուղղահայացներն ապոթեմն են և հիմքի կենտրոն տարված հատվածը։

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $AB$ կողի մոտ $ABCD$ և $ABB_1A_1$ նիստերի երկնիստ անկյան գծային անկյունը $\\angle DAA_1 = 90^\\circ$ է (թե՛ $AD$-ն, թե՛ $AA_1$-ն ուղղահայաց են $AB$-ին $A$-ում)։

**Օրինակ 2։** Խորանարդի $ABC_1D_1$ հարթության և $ABCD$ հիմքի երկնիստ անկյունը․ կողը $AB$-ն է, հիմքում $BC \\perp AB$, հատույթում $BC_1 \\perp AB$ (քանի որ $AB \\perp (BB_1C_1C)$)։ Գծային անկյունը $\\angle C_1BC = 45^\\circ$ է։

**Օրինակ 3։** $a$ կողով խորանարդի $BD$ կողի մոտ $BDC_1$ հարթության և հիմքի երկնիստ անկյունը։ Դիցուք $M$-ը $BD$-ի միջնակետն է։ $CM \\perp BD$ (քառակուսու անկյունագծեր), և $C_1M \\perp BD$ երեք ուղղահայացների թեորեմով (պրոյեկցիան $CM$)։ Գծային անկյունը $\\angle C_1MC$․ $\\tan\\varphi = \\dfrac{CC_1}{CM} = \\dfrac{a}{a\\sqrt2 / 2} = \\sqrt2$, $\\varphi = \\arctan\\sqrt2 \\approx 54{,}7^\\circ$։

**Օրինակ 4։** $6$ հիմքի կողով և $4$ բարձրությամբ $SABCD$ կանոնավոր բուրգում հիմքի կողի մոտ երկնիստ անկյունը․ $M$-ը $BC$-ի միջնակետն է, $OM = 3$ ($O$-ն կենտրոնն է), $SM \\perp BC$ (ապոթեմ), $OM \\perp BC$, $\\tan\\angle SMO = \\dfrac{SO}{OM} = \\dfrac43$, $\\varphi \\approx 53{,}1^\\circ$։ Ապոթեմն ինքը $SM = \\sqrt{16 + 9} = 5$ է։

## Ուղղահայաց հարթություններ

Երկու հատվող հարթություններ **ուղղահայաց** են, եթե դրանց երկնիստ անկյունն ուղիղ է։ Այդ դեպքում դրանց կազմած բոլոր չորս երկնիստ անկյուններն ուղիղ են։

**Թեորեմ (հայտանիշ)։** Եթե հարթությունն անցնում է մյուս հարթությանն ուղղահայաց ուղղով, ապա հարթություններն ուղղահայաց են։

*Ապացույց։* Դիցուք $a \\perp \\alpha$, $a \\subset \\beta$, $a \\cap \\alpha = O$ և $c = \\alpha \\cap \\beta$։ $\\alpha$-ում $O$-ում տանենք $b \\perp c$։ Այդ դեպքում $a \\perp c$ (քանի որ $a \\perp \\alpha$) և $b \\perp c$, ուստի $\\angle(a, b)$-ն $\\alpha$-ի և $\\beta$-ի երկնիստ անկյան գծային անկյուն է, իսկ $a \\perp b$, քանի որ $a \\perp \\alpha$։ Ուստի գծային անկյունը $90^\\circ$ է։ $\\blacksquare$

**Հետևանք։** Եթե երկու հարթություններ ուղղահայաց են և դրանցից մեկի ուղիղն ուղղահայաց է հատման գծին, ապա այն ուղղահայաց է մյուս հարթությանը։

**Օրինակ 5։** Խորանարդում յուրաքանչյուր կողմնային նիստ ուղղահայաց է հիմքին, քանի որ պարունակում է հիմքին ուղղահայաց կողմնային կող։ Նաև $ACC_1A_1$ անկյունագծային հարթությունն ուղղահայաց է հիմքին և $BDD_1B_1$ հարթությանը (այն պարունակում է $AA_1 \\perp$ հիմք, իսկ $BD \\perp (ACC_1A_1)$)։

**Օրինակ 6։** $\\alpha \\perp \\beta$ հարթությունները հատվում են $c$-ով։ $A \\in \\alpha$ կետը $c$-ից $5$ հեռավորության վրա է, $B \\in \\beta$ կետը՝ $12$, $A$-ից և $B$-ից $c$-ին տարված ուղղահայացների հիմքերը համընկնում են $O$-ում։ Գտնենք $AB$-ն։ Հետևանքով $AO \\perp \\beta$, ուստի $AO \\perp OB$ և $AB = \\sqrt{25 + 144} = 13$։

**Օրինակ 7։** $SABCD$ կանոնավոր բուրգում $SAC$ և $SBD$ հարթություններն ուղղահայաց են․ $SAC$-ը պարունակում է $SO \\perp$ հիմք, հետևաբար $SAC \\perp (ABCD)$, իսկ $BD \\perp AC$, $BD \\perp SO$-ից $BD \\perp (SAC)$, ուստի հայտանիշով $(SBD) \\perp (SAC)$։

**Օրինակ 8։** Եթե $\\alpha \\perp \\gamma$, $\\beta \\perp \\gamma$ և $\\alpha \\cap \\beta = a$, ապա $a \\perp \\gamma$։ Իրոք, $a$-ի կետից $\\gamma$-ին տարված ուղղահայացը գտնվում է և՛ $\\alpha$-ում, և՛ $\\beta$-ում (հետևանքը կիրառելով յուրաքանչյուրին), հետևաբար համընկնում է $a$-ի հետ։ Հատակին ուղղահայաց երկու պատերը հանդիպում են ուղղաձիգ գծով։

### Վարժություններ

1. Գտեք խորանարդի $ABB_1A_1$ և $ADD_1A_1$ նիստերի երկնիստ անկյան գծային անկյունը։
2. Խորանարդում գտեք $ADC_1B_1$ հարթության և հիմքի երկնիստ անկյունը։
3. $a$ կողով խորանարդում գտեք $A_1BD$ հարթության և հիմքի երկնիստ անկյան տանգենսը։
4. $8$ հիմքի կողով և $3$ բարձրությամբ $SABCD$ կանոնավոր բուրգում գտեք ապոթեմը և հիմքի կողի մոտ երկնիստ անկյունը (տվեք տանգենսը)։
5. $6$ հիմքի կողով և $\\sqrt3$ բարձրությամբ $SABC$ կանոնավոր եռանկյուն բուրգում գտեք հիմքի կողի մոտ երկնիստ անկյունը (հիմքի ներգծյալ շրջանագծի շառավիղը $\\sqrt3$ է)։
6. Ապացուցեք, որ խորանարդի $BDD_1B_1$ հարթությունն ուղղահայաց է $ABCD$ հարթությանը և $ACC_1A_1$ հարթությանը։
7. $\\alpha \\perp \\beta$, $\\alpha \\cap \\beta = c$, $A \\in \\alpha$, $AO \\perp c$, $O \\in c$, $AO = 6$, $B \\in \\beta$, $BO = 8$։ Գտեք $AB$-ն, եթե $BO \\perp c$, և եթե $BO$-ն $c$-ի հետ կազմում է $60^\\circ$։
8. Երկնիստ անկյունը $60^\\circ$ է։ Մի նիստի $M$ կետը կողից $6$ հեռավորության վրա է։ Գտեք նրա հեռավորությունը մյուս նիստից։

### Պատասխաններ

1. $\\angle BAD = 90^\\circ$։ 2. Կողը $AD$, $AB \\perp AD$, $AB_1 \\perp AD$, $\\angle B_1AB = 45^\\circ$։ 3. $M$-ը $BD$-ի միջնակետն է, $AM = \\dfrac{a\\sqrt2}{2}$, $\\tan\\varphi = \\dfrac{AA_1}{AM} = \\sqrt2$։ 4. $OM = 4$, ապոթեմը $5$, $\\tan\\varphi = \\dfrac34$։ 5. $\\tan\\varphi = \\dfrac{\\sqrt3}{\\sqrt3} = 1$, $\\varphi = 45^\\circ$։ 6. Այն պարունակում է $BB_1 \\perp (ABCD)$, այն պարունակում է $BD \\perp (ACC_1A_1)$։ 7. Եթե $BO \\perp c$․ $AO \\perp \\beta$, ուստի $AB = 10$։ Ընդհանուր դեպքում $AO \\perp \\beta$-ից $AO \\perp OB$՝ անկախ $BO$-ի և $c$-ի անկյունից, ուստի նորից $AB = 10$։ 8. $MH = 6\\sin 60^\\circ = 3\\sqrt3$, որտեղ $MH$-ը մյուս նիստին տարված ուղղահայացն է․ այն գտնվում է $M$-ով անցնող գծային անկյան հարթության մեջ։`,
        ru: `## Двугранный угол

Прямая $a$ делит плоскость на две полуплоскости. Две полуплоскости с общей граничной прямой $a$, не лежащие в одной плоскости, образуют **двугранный угол**; полуплоскости — его **грани**, прямая $a$ — **ребро**. Раскрытая книга, две стены, сходящиеся в углу, скаты крыши вдоль конька — двугранные углы.

Чтобы измерить его, возьмём точку $O$ на ребре и проведём в каждой грани луч, перпендикулярный ребру в $O$. Угол между этими лучами — **линейный угол** двугранного угла. Все линейные углы двугранного угла равны (их стороны соответственно параллельны), поэтому мера не зависит от $O$. Двугранные углы измеряют от $0^\\circ$ до $180^\\circ$; двугранный угол в $90^\\circ$ называется **прямым**.

**Рецепт для линейного угла.** Выберите удобную точку $O$ на ребре, часто середину ребра тела или вершину, и найдите в каждой грани перпендикуляр к ребру в $O$. В правильной пирамиде перпендикуляры к ребру основания в его середине — это апофема и отрезок до центра основания.

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ двугранный угол при ребре $AB$ между гранями $ABCD$ и $ABB_1A_1$ имеет линейный угол $\\angle DAA_1 = 90^\\circ$ (и $AD$, и $AA_1$ перпендикулярны $AB$ в точке $A$).

**Пример 2.** Двугранный угол между плоскостью $ABC_1D_1$ и основанием $ABCD$ куба: ребро — $AB$; $BC \\perp AB$ в основании и $BC_1 \\perp AB$ в сечении (так как $AB \\perp (BB_1C_1C)$). Линейный угол $\\angle C_1BC = 45^\\circ$.

**Пример 3.** Двугранный угол при ребре $BD$ между плоскостью $BDC_1$ и основанием куба с ребром $a$. Пусть $M$ — середина $BD$. $CM \\perp BD$ (диагонали квадрата), и $C_1M \\perp BD$ по теореме о трёх перпендикулярах (проекция $CM$). Линейный угол $\\angle C_1MC$: $\\tan\\varphi = \\dfrac{CC_1}{CM} = \\dfrac{a}{a\\sqrt2 / 2} = \\sqrt2$, $\\varphi = \\arctan\\sqrt2 \\approx 54{,}7^\\circ$.

**Пример 4.** В правильной пирамиде $SABCD$ со стороной основания $6$ и высотой $4$ двугранный угол при ребре основания: $M$ — середина $BC$, $OM = 3$ ($O$ — центр), $SM \\perp BC$ (апофема), $OM \\perp BC$; $\\tan\\angle SMO = \\dfrac{SO}{OM} = \\dfrac43$, $\\varphi \\approx 53{,}1^\\circ$. Сама апофема $SM = \\sqrt{16 + 9} = 5$.

## Перпендикулярные плоскости

Две пересекающиеся плоскости **перпендикулярны**, если двугранный угол между ними прямой. Тогда все четыре образованных ими двугранных угла прямые.

**Теорема (признак).** Если плоскость проходит через прямую, перпендикулярную другой плоскости, то плоскости перпендикулярны.

*Доказательство.* Пусть $a \\perp \\alpha$, $a \\subset \\beta$, $a \\cap \\alpha = O$ и $c = \\alpha \\cap \\beta$. В $\\alpha$ проведём $b \\perp c$ в точке $O$. Тогда $a \\perp c$ (так как $a \\perp \\alpha$) и $b \\perp c$, значит, $\\angle(a, b)$ — линейный угол двугранного угла между $\\alpha$ и $\\beta$; а $a \\perp b$, поскольку $a \\perp \\alpha$. Значит, линейный угол равен $90^\\circ$. $\\blacksquare$

**Следствие.** Если две плоскости перпендикулярны и прямая в одной из них перпендикулярна линии пересечения, то она перпендикулярна другой плоскости.

**Пример 5.** В кубе каждая боковая грань перпендикулярна основанию, так как содержит боковое ребро, перпендикулярное основанию. Также диагональная плоскость $ACC_1A_1$ перпендикулярна основанию и плоскости $BDD_1B_1$ (она содержит $AA_1 \\perp$ основанию; и $BD \\perp (ACC_1A_1)$).

**Пример 6.** Плоскости $\\alpha \\perp \\beta$ пересекаются по $c$. Точка $A \\in \\alpha$ удалена от $c$ на $5$, точка $B \\in \\beta$ — на $12$; основания перпендикуляров из $A$ и $B$ к $c$ совпадают в $O$. Найдём $AB$. По следствию $AO \\perp \\beta$, значит, $AO \\perp OB$ и $AB = \\sqrt{25 + 144} = 13$.

**Пример 7.** В правильной пирамиде $SABCD$ плоскости $SAC$ и $SBD$ перпендикулярны: $SAC$ содержит $SO \\perp$ основанию, значит, $SAC \\perp (ABCD)$; а из $BD \\perp AC$, $BD \\perp SO$ следует $BD \\perp (SAC)$, значит, $(SBD) \\perp (SAC)$ по признаку.

**Пример 8.** Если $\\alpha \\perp \\gamma$, $\\beta \\perp \\gamma$ и $\\alpha \\cap \\beta = a$, то $a \\perp \\gamma$. Действительно, перпендикуляр из точки $a$ к $\\gamma$ лежит и в $\\alpha$, и в $\\beta$ (по следствию для каждой), значит, совпадает с $a$. Две стены, перпендикулярные полу, сходятся по вертикальной прямой.

### Упражнения

1. Найдите линейный угол двугранного угла между гранями $ABB_1A_1$ и $ADD_1A_1$ куба.
2. В кубе найдите двугранный угол между плоскостью $ADC_1B_1$ и основанием.
3. В кубе с ребром $a$ найдите тангенс двугранного угла между плоскостью $A_1BD$ и основанием.
4. В правильной пирамиде $SABCD$ со стороной основания $8$ и высотой $3$ найдите апофему и двугранный угол при ребре основания (укажите тангенс).
5. В правильной треугольной пирамиде $SABC$ со стороной основания $6$ и высотой $\\sqrt3$ найдите двугранный угол при ребре основания (радиус вписанной окружности основания равен $\\sqrt3$).
6. Докажите, что плоскость $BDD_1B_1$ куба перпендикулярна плоскости $ABCD$ и плоскости $ACC_1A_1$.
7. $\\alpha \\perp \\beta$, $\\alpha \\cap \\beta = c$; $A \\in \\alpha$, $AO \\perp c$, $O \\in c$, $AO = 6$; $B \\in \\beta$, $BO = 8$. Найдите $AB$, если $BO \\perp c$, и если $BO$ образует с $c$ угол $60^\\circ$.
8. Двугранный угол равен $60^\\circ$. Точка $M$ одной грани удалена от ребра на $6$. Найдите её расстояние до другой грани.

### Ответы

1. $\\angle BAD = 90^\\circ$. 2. Ребро $AD$; $AB \\perp AD$, $AB_1 \\perp AD$; $\\angle B_1AB = 45^\\circ$. 3. $M$ — середина $BD$, $AM = \\dfrac{a\\sqrt2}{2}$, $\\tan\\varphi = \\dfrac{AA_1}{AM} = \\sqrt2$. 4. $OM = 4$, апофема $5$, $\\tan\\varphi = \\dfrac34$. 5. $\\tan\\varphi = \\dfrac{\\sqrt3}{\\sqrt3} = 1$, $\\varphi = 45^\\circ$. 6. Она содержит $BB_1 \\perp (ABCD)$; она содержит $BD \\perp (ACC_1A_1)$. 7. Если $BO \\perp c$: $AO \\perp \\beta$, значит, $AB = 10$. В общем случае из $AO \\perp \\beta$ следует $AO \\perp OB$ независимо от угла $BO$ с $c$, поэтому снова $AB = 10$. 8. $MH = 6\\sin 60^\\circ = 3\\sqrt3$, где $MH$ — перпендикуляр к другой грани: он лежит в плоскости линейного угла, проходящей через $M$.`,
      },
      [
        q(t("The linear angle of a dihedral angle is formed by rays that are…", "Երկնիստ անկյան գծային անկյունը կազմում են ճառագայթներ, որոնք…", "Линейный угол двугранного угла образуют лучи, которые…"), [t("perpendicular to the edge at one point", "մեկ կետում ուղղահայաց են կողին", "перпендикулярны ребру в одной точке"), t("parallel to the edge", "զուգահեռ են կողին", "параллельны ребру"), t("any rays in the faces", "նիստերի ցանկացած ճառագայթներ", "любые лучи в гранях")], 0),
        q(t("The linear angle of a dihedral angle…", "Երկնիստ անկյան գծային անկյունը…", "Линейный угол двугранного угла…"), [t("depends on the point on the edge", "կախված է կողի կետից", "зависит от точки на ребре"), t("is the same for every point on the edge", "նույնն է կողի յուրաքանչյուր կետի համար", "одинаков для всех точек ребра"), t("is always acute", "միշտ սուր է", "всегда острый")], 1),
        q(t("Two planes are perpendicular if a plane contains…", "Երկու հարթություններ ուղղահայաց են, եթե հարթությունը պարունակում է…", "Две плоскости перпендикулярны, если плоскость содержит…"), [t("a line parallel to the other plane", "մյուս հարթությանը զուգահեռ ուղիղ", "прямую, параллельную другой плоскости"), t("a line perpendicular to the other plane", "մյուս հարթությանն ուղղահայաց ուղիղ", "прямую, перпендикулярную другой плоскости"), t("a point of the other plane", "մյուս հարթության կետ", "точку другой плоскости")], 1),
        q(t("The dihedral angle between the plane ABC₁D₁ and the base of a cube is…", "Խորանարդի ABC₁D₁ հարթության և հիմքի երկնիստ անկյունը…", "Двугранный угол между плоскостью ABC₁D₁ и основанием куба равен…"), [t("30°", "30°", "30°"), t("45°", "45°", "45°"), t("60°", "60°", "60°")], 1),
        q(t("The dihedral angle at a base edge of a regular pyramid is measured by the angle between…", "Կանոնավոր բուրգի հիմքի կողի մոտ երկնիստ անկյունը չափվում է անկյունով…", "Двугранный угол при ребре основания правильной пирамиды измеряется углом между…"), [t("the apothem and the segment to the base centre", "ապոթեմի և հիմքի կենտրոն տարված հատվածի միջև", "апофемой и отрезком до центра основания"), t("the lateral edge and the base", "կողմնային կողի և հիմքի միջև", "боковым ребром и основанием"), t("two lateral edges", "երկու կողմնային կողերի միջև", "двумя боковыми рёбрами")], 0),
        q(t("If α ⊥ β and a line of α is perpendicular to their intersection line, then the line is…", "Եթե α ⊥ β և α-ի ուղիղն ուղղահայաց է հատման գծին, ապա ուղիղը…", "Если α ⊥ β и прямая плоскости α перпендикулярна линии пересечения, то прямая…"), [t("parallel to β", "զուգահեռ է β-ին", "параллельна β"), t("perpendicular to β", "ուղղահայաց է β-ին", "перпендикулярна β"), t("in β", "β-ում է", "лежит в β")], 1),
      ],
    ),
    lesson(
      "rectangular-parallelepiped",
      ["Rectangular parallelepiped", "Ուղղանկյուն զուգահեռանիստ", "Прямоугольный параллелепипед"],
      {
        en: ["Define a rectangular parallelepiped and its dimensions and prove that all its faces are rectangles", "Prove and apply the formula d² = a² + b² + c² for the diagonal", "Compute diagonals, angles between diagonals and faces, and surface areas of rectangular parallelepipeds and cubes"],
        hy: ["Սահմանել ուղղանկյուն զուգահեռանիստը և նրա չափումները և ապացուցել, որ նրա բոլոր նիստերն ուղղանկյուններ են", "Ապացուցել և կիրառել անկյունագծի d² = a² + b² + c² բանաձևը", "Հաշվել ուղղանկյուն զուգահեռանիստների և խորանարդների անկյունագծերը, անկյունագծերի և նիստերի անկյունները և մակերևույթի մակերեսները"],
        ru: ["Определять прямоугольный параллелепипед и его измерения и доказывать, что все его грани — прямоугольники", "Доказывать и применять формулу d² = a² + b² + c² для диагонали", "Вычислять диагонали, углы между диагоналями и гранями и площади поверхности прямоугольных параллелепипедов и кубов"],
      },
      {
        en: `## Definition and properties

A parallelepiped is **rectangular** if its lateral edges are perpendicular to the base and the base is a rectangle. A brick, a matchbox, a room are models. The lengths of the three edges from one vertex, $a$, $b$, $c$, are its **dimensions** (length, width, height). A cube is a rectangular parallelepiped with $a = b = c$.

**Property 1.** All six faces of a rectangular parallelepiped are rectangles.

*Proof.* The bases are rectangles by definition. A lateral face, say $AA_1B_1B$, is a parallelogram with $AA_1 \\perp AB$ (the lateral edge is perpendicular to the base, hence to every line of it), so it is a rectangle. $\\blacksquare$

**Property 2.** All dihedral angles of a rectangular parallelepiped are right: each face contains an edge perpendicular to the adjacent face.

## The diagonal

**Theorem.** The square of the diagonal of a rectangular parallelepiped equals the sum of the squares of its three dimensions:
$$d^2 = a^2 + b^2 + c^2.$$

*Proof.* In $ABCDA_1B_1C_1D_1$ with $AB = a$, $AD = b$, $AA_1 = c$: the triangle $ACC_1$ is right-angled at $C$ (since $CC_1 \\perp$ base), so $AC_1^2 = AC^2 + CC_1^2 = (a^2 + b^2) + c^2$. $\\blacksquare$

**Consequence.** All four diagonals of a rectangular parallelepiped are equal. For a cube with edge $a$, $d = a\\sqrt3$.

**Example 1.** Dimensions $3$, $4$, $12$: $d = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.

**Example 2.** A cube has diagonal $6$. Its edge: $a\\sqrt3 = 6$, $a = 2\\sqrt3$; face diagonal $a\\sqrt2 = 2\\sqrt6$.

**Example 3.** Can a rod of length $1{,}5$ m fit in a box $1 \\times 1 \\times 0{,}8$ m? The diagonal is $\\sqrt{1 + 1 + 0{,}64} = \\sqrt{2{,}64} \\approx 1{,}62$ m, so yes.

**Example 4.** The dimensions are in the ratio $1 : 2 : 2$ and the diagonal is $9$. With $a = x$, $b = c = 2x$: $x^2 + 4x^2 + 4x^2 = 81$, $x = 3$; the dimensions are $3, 6, 6$.

## Angles with the faces

The angle between the diagonal $AC_1$ and the base is $\\angle C_1AC$ with $\\tan\\angle C_1AC = \\dfrac{c}{\\sqrt{a^2 + b^2}}$. The angle with the face $AA_1B_1B$: the projection of $AC_1$ is $AB_1$ ($C_1$ projects to $B_1$), $\\sin\\varphi = \\dfrac{B_1C_1}{AC_1} = \\dfrac{b}{d}$.

**Example 5.** Dimensions $a = 6$, $b = 8$, $c = 24$: $d = \\sqrt{36 + 64 + 576} = 26$; the angle between the diagonal and the base has $\\tan\\varphi = \\dfrac{24}{10}$, $\\cos\\varphi = \\dfrac{10}{26} = \\dfrac{5}{13}$.

**Example 6.** In the cube, the angle between the diagonal and a face: $\\sin\\varphi = \\dfrac{a}{a\\sqrt3} = \\dfrac{1}{\\sqrt3}$, $\\varphi \\approx 35{,}3^\\circ$, the same for all three faces at a vertex.

## Surface area

The total surface area is the sum of the areas of the six faces:
$$S = 2(ab + bc + ca),$$
and the lateral surface area is $S_{\\text{lat}} = 2c(a + b) = P_{\\text{base}} \\cdot c$. For a cube $S = 6a^2$.

**Example 7.** A box $20 \\times 30 \\times 15$ cm: $S = 2(600 + 450 + 300) = 2700$ cm$^2$.

**Example 8.** The diagonal of a rectangular parallelepiped is $7$ and the sum of the three dimensions is $11$. Find the surface area. $(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$, so $121 = 49 + S$, $S = 72$.

### Exercises

1. Find the diagonal of a rectangular parallelepiped with dimensions $2$, $3$, $6$, and of a cube with edge $5$.
2. The diagonal of a cube is $\\sqrt{27}$. Find its edge and surface area.
3. The dimensions are $8$, $9$ and $12$. Find the diagonals of the three faces meeting at a vertex and the diagonal of the parallelepiped.
4. The diagonal of a rectangular parallelepiped is $\\sqrt{50}$, two dimensions are $3$ and $4$. Find the third and the surface area.
5. The diagonal makes an angle of $30^\\circ$ with the base; the base is a square with side $\\sqrt2$. Find the height.
6. The dimensions are in the ratio $2 : 3 : 6$, the diagonal is $14$. Find the dimensions and the lateral surface area if $6$ corresponds to the height.
7. In the cube with edge $a$, find the angle between the diagonal $AC_1$ and the edge $AB$ (give the cosine).
8. The sum of the dimensions is $12$ and the surface area is $94$. Find the diagonal.

### Answers

1. $\\sqrt{4 + 9 + 36} = 7$; $5\\sqrt3$. 2. $a = 3$, $S = 54$. 3. $\\sqrt{145}$, $15$, $\\sqrt{208} = 4\\sqrt{13}$; $d = \\sqrt{64 + 81 + 144} = 17$. 4. $c = \\sqrt{50 - 25} = 5$; $S = 2(12 + 20 + 15) = 94$. 5. $AC = 2$, $h = AC\\tan 30^\\circ = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$. 6. $x\\sqrt{4 + 9 + 36} = 7x = 14$, $x = 2$: $4, 6, 12$; $S_{\\text{lat}} = 2 \\cdot 12 \\cdot (4 + 6) = 240$. 7. $\\cos\\varphi = \\dfrac{AB}{AC_1} = \\dfrac{1}{\\sqrt3}$ (the triangle $ABC_1$ is right-angled at $B$). 8. $d^2 = 144 - 94 = 50$, $d = 5\\sqrt2$.`,
        hy: `## Սահմանում և հատկություններ

Զուգահեռանիստը **ուղղանկյուն** է, եթե նրա կողմնային կողերն ուղղահայաց են հիմքին, իսկ հիմքն ուղղանկյուն է։ Աղյուսը, լուցկու տուփը, սենյակը մոդելներ են։ Մեկ գագաթից ելնող երեք կողերի երկարությունները՝ $a$, $b$, $c$, նրա **չափումներն** են (երկարություն, լայնություն, բարձրություն)։ Խորանարդն ուղղանկյուն զուգահեռանիստ է, որտեղ $a = b = c$։

**Հատկություն 1։** Ուղղանկյուն զուգահեռանիստի բոլոր վեց նիստերն ուղղանկյուններ են։

*Ապացույց։* Հիմքերը սահմանմամբ ուղղանկյուններ են։ Կողմնային նիստը, ասենք $AA_1B_1B$, զուգահեռագիծ է, որտեղ $AA_1 \\perp AB$ (կողմնային կողն ուղղահայաց է հիմքին, հետևաբար նրա յուրաքանչյուր ուղղի), ուստի ուղղանկյուն է։ $\\blacksquare$

**Հատկություն 2։** Ուղղանկյուն զուգահեռանիստի բոլոր երկնիստ անկյուններն ուղիղ են․ յուրաքանչյուր նիստ պարունակում է հարևան նիստին ուղղահայաց կող։

## Անկյունագիծը

**Թեորեմ։** Ուղղանկյուն զուգահեռանիստի անկյունագծի քառակուսին հավասար է նրա երեք չափումների քառակուսիների գումարին․
$$d^2 = a^2 + b^2 + c^2.$$

*Ապացույց։* $ABCDA_1B_1C_1D_1$-ում, որտեղ $AB = a$, $AD = b$, $AA_1 = c$․ $ACC_1$ եռանկյունն ուղղանկյուն է $C$-ում (քանի որ $CC_1 \\perp$ հիմք), ուստի $AC_1^2 = AC^2 + CC_1^2 = (a^2 + b^2) + c^2$։ $\\blacksquare$

**Հետևանք։** Ուղղանկյուն զուգահեռանիստի բոլոր չորս անկյունագծերը հավասար են։ $a$ կողով խորանարդի համար $d = a\\sqrt3$։

**Օրինակ 1։** Չափումները $3$, $4$, $12$․ $d = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$։

**Օրինակ 2։** Խորանարդի անկյունագիծը $6$ է։ Նրա կողը․ $a\\sqrt3 = 6$, $a = 2\\sqrt3$, նիստի անկյունագիծը $a\\sqrt2 = 2\\sqrt6$։

**Օրինակ 3։** Կարո՞ղ է $1{,}5$ մ երկարությամբ ձողը տեղավորվել $1 \\times 1 \\times 0{,}8$ մ արկղում։ Անկյունագիծը $\\sqrt{1 + 1 + 0{,}64} = \\sqrt{2{,}64} \\approx 1{,}62$ մ է, ուստի այո։

**Օրինակ 4։** Չափումները $1 : 2 : 2$ հարաբերությամբ են, անկյունագիծը $9$ է։ $a = x$, $b = c = 2x$ դեպքում․ $x^2 + 4x^2 + 4x^2 = 81$, $x = 3$, չափումները $3, 6, 6$ են։

## Անկյուններ նիստերի հետ

$AC_1$ անկյունագծի և հիմքի անկյունը $\\angle C_1AC$ է, որտեղ $\\tan\\angle C_1AC = \\dfrac{c}{\\sqrt{a^2 + b^2}}$։ $AA_1B_1B$ նիստի հետ անկյունը․ $AC_1$-ի պրոյեկցիան $AB_1$-ն է ($C_1$-ը պրոյեկտվում է $B_1$-ի), $\\sin\\varphi = \\dfrac{B_1C_1}{AC_1} = \\dfrac{b}{d}$։

**Օրինակ 5։** Չափումները $a = 6$, $b = 8$, $c = 24$․ $d = \\sqrt{36 + 64 + 576} = 26$, անկյունագծի և հիմքի անկյան համար $\\tan\\varphi = \\dfrac{24}{10}$, $\\cos\\varphi = \\dfrac{10}{26} = \\dfrac{5}{13}$։

**Օրինակ 6։** Խորանարդում անկյունագծի և նիստի անկյունը․ $\\sin\\varphi = \\dfrac{a}{a\\sqrt3} = \\dfrac{1}{\\sqrt3}$, $\\varphi \\approx 35{,}3^\\circ$, նույնը գագաթի բոլոր երեք նիստերի համար։

## Մակերևույթի մակերես

Լրիվ մակերևույթի մակերեսը վեց նիստերի մակերեսների գումարն է․
$$S = 2(ab + bc + ca),$$
իսկ կողմնային մակերևույթի մակերեսը $S_{\\text{կողմ}} = 2c(a + b) = P_{\\text{հիմք}} \\cdot c$։ Խորանարդի համար $S = 6a^2$։

**Օրինակ 7։** $20 \\times 30 \\times 15$ սմ արկղ․ $S = 2(600 + 450 + 300) = 2700$ սմ$^2$։

**Օրինակ 8։** Ուղղանկյուն զուգահեռանիստի անկյունագիծը $7$ է, երեք չափումների գումարը՝ $11$։ Գտնենք մակերևույթի մակերեսը։ $(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$, ուստի $121 = 49 + S$, $S = 72$։

### Վարժություններ

1. Գտեք $2$, $3$, $6$ չափումներով ուղղանկյուն զուգահեռանիստի և $5$ կողով խորանարդի անկյունագիծը։
2. Խորանարդի անկյունագիծը $\\sqrt{27}$ է։ Գտեք նրա կողը և մակերևույթի մակերեսը։
3. Չափումները $8$, $9$ և $12$ են։ Գտեք մեկ գագաթում հանդիպող երեք նիստերի անկյունագծերը և զուգահեռանիստի անկյունագիծը։
4. Ուղղանկյուն զուգահեռանիստի անկյունագիծը $\\sqrt{50}$ է, երկու չափումները՝ $3$ և $4$։ Գտեք երրորդը և մակերևույթի մակերեսը։
5. Անկյունագիծը հիմքի հետ կազմում է $30^\\circ$, հիմքը $\\sqrt2$ կողմով քառակուսի է։ Գտեք բարձրությունը։
6. Չափումները $2 : 3 : 6$ հարաբերությամբ են, անկյունագիծը $14$ է։ Գտեք չափումները և կողմնային մակերևույթի մակերեսը, եթե $6$-ը համապատասխանում է բարձրությանը։
7. $a$ կողով խորանարդում գտեք $AC_1$ անկյունագծի և $AB$ կողի անկյունը (տվեք կոսինուսը)։
8. Չափումների գումարը $12$ է, մակերևույթի մակերեսը՝ $94$։ Գտեք անկյունագիծը։

### Պատասխաններ

1. $\\sqrt{4 + 9 + 36} = 7$, $5\\sqrt3$։ 2. $a = 3$, $S = 54$։ 3. $\\sqrt{145}$, $15$, $\\sqrt{208} = 4\\sqrt{13}$, $d = \\sqrt{64 + 81 + 144} = 17$։ 4. $c = \\sqrt{50 - 25} = 5$, $S = 2(12 + 20 + 15) = 94$։ 5. $AC = 2$, $h = AC\\tan 30^\\circ = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$։ 6. $x\\sqrt{4 + 9 + 36} = 7x = 14$, $x = 2$․ $4, 6, 12$, $S_{\\text{կողմ}} = 2 \\cdot 12 \\cdot (4 + 6) = 240$։ 7. $\\cos\\varphi = \\dfrac{AB}{AC_1} = \\dfrac{1}{\\sqrt3}$ ($ABC_1$ եռանկյունն ուղղանկյուն է $B$-ում)։ 8. $d^2 = 144 - 94 = 50$, $d = 5\\sqrt2$։`,
        ru: `## Определение и свойства

Параллелепипед называется **прямоугольным**, если его боковые рёбра перпендикулярны основанию, а основание — прямоугольник. Кирпич, спичечный коробок, комната — модели. Длины трёх рёбер, выходящих из одной вершины, $a$, $b$, $c$, — его **измерения** (длина, ширина, высота). Куб — прямоугольный параллелепипед с $a = b = c$.

**Свойство 1.** Все шесть граней прямоугольного параллелепипеда — прямоугольники.

*Доказательство.* Основания — прямоугольники по определению. Боковая грань, например $AA_1B_1B$, — параллелограмм с $AA_1 \\perp AB$ (боковое ребро перпендикулярно основанию, а значит, каждой его прямой), то есть прямоугольник. $\\blacksquare$

**Свойство 2.** Все двугранные углы прямоугольного параллелепипеда прямые: каждая грань содержит ребро, перпендикулярное соседней грани.

## Диагональ

**Теорема.** Квадрат диагонали прямоугольного параллелепипеда равен сумме квадратов трёх его измерений:
$$d^2 = a^2 + b^2 + c^2.$$

*Доказательство.* В $ABCDA_1B_1C_1D_1$ с $AB = a$, $AD = b$, $AA_1 = c$: треугольник $ACC_1$ прямоугольный с прямым углом $C$ (так как $CC_1 \\perp$ основанию), поэтому $AC_1^2 = AC^2 + CC_1^2 = (a^2 + b^2) + c^2$. $\\blacksquare$

**Следствие.** Все четыре диагонали прямоугольного параллелепипеда равны. Для куба с ребром $a$: $d = a\\sqrt3$.

**Пример 1.** Измерения $3$, $4$, $12$: $d = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.

**Пример 2.** Диагональ куба равна $6$. Его ребро: $a\\sqrt3 = 6$, $a = 2\\sqrt3$; диагональ грани $a\\sqrt2 = 2\\sqrt6$.

**Пример 3.** Поместится ли стержень длиной $1{,}5$ м в коробку $1 \\times 1 \\times 0{,}8$ м? Диагональ равна $\\sqrt{1 + 1 + 0{,}64} = \\sqrt{2{,}64} \\approx 1{,}62$ м, значит, да.

**Пример 4.** Измерения относятся как $1 : 2 : 2$, диагональ равна $9$. При $a = x$, $b = c = 2x$: $x^2 + 4x^2 + 4x^2 = 81$, $x = 3$; измерения $3, 6, 6$.

## Углы с гранями

Угол между диагональю $AC_1$ и основанием — это $\\angle C_1AC$, где $\\tan\\angle C_1AC = \\dfrac{c}{\\sqrt{a^2 + b^2}}$. Угол с гранью $AA_1B_1B$: проекция $AC_1$ — это $AB_1$ ($C_1$ проектируется в $B_1$), $\\sin\\varphi = \\dfrac{B_1C_1}{AC_1} = \\dfrac{b}{d}$.

**Пример 5.** Измерения $a = 6$, $b = 8$, $c = 24$: $d = \\sqrt{36 + 64 + 576} = 26$; для угла между диагональю и основанием $\\tan\\varphi = \\dfrac{24}{10}$, $\\cos\\varphi = \\dfrac{10}{26} = \\dfrac{5}{13}$.

**Пример 6.** В кубе угол между диагональю и гранью: $\\sin\\varphi = \\dfrac{a}{a\\sqrt3} = \\dfrac{1}{\\sqrt3}$, $\\varphi \\approx 35{,}3^\\circ$, одинаково для всех трёх граней при вершине.

## Площадь поверхности

Площадь полной поверхности — сумма площадей шести граней:
$$S = 2(ab + bc + ca),$$
а площадь боковой поверхности $S_{\\text{бок}} = 2c(a + b) = P_{\\text{осн}} \\cdot c$. Для куба $S = 6a^2$.

**Пример 7.** Коробка $20 \\times 30 \\times 15$ см: $S = 2(600 + 450 + 300) = 2700$ см$^2$.

**Пример 8.** Диагональ прямоугольного параллелепипеда равна $7$, сумма трёх измерений — $11$. Найдём площадь поверхности. $(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$, значит, $121 = 49 + S$, $S = 72$.

### Упражнения

1. Найдите диагональ прямоугольного параллелепипеда с измерениями $2$, $3$, $6$ и куба с ребром $5$.
2. Диагональ куба равна $\\sqrt{27}$. Найдите его ребро и площадь поверхности.
3. Измерения равны $8$, $9$ и $12$. Найдите диагонали трёх граней, сходящихся в вершине, и диагональ параллелепипеда.
4. Диагональ прямоугольного параллелепипеда равна $\\sqrt{50}$, два измерения — $3$ и $4$. Найдите третье и площадь поверхности.
5. Диагональ образует с основанием угол $30^\\circ$; основание — квадрат со стороной $\\sqrt2$. Найдите высоту.
6. Измерения относятся как $2 : 3 : 6$, диагональ равна $14$. Найдите измерения и площадь боковой поверхности, если $6$ соответствует высоте.
7. В кубе с ребром $a$ найдите угол между диагональю $AC_1$ и ребром $AB$ (укажите косинус).
8. Сумма измерений равна $12$, площадь поверхности — $94$. Найдите диагональ.

### Ответы

1. $\\sqrt{4 + 9 + 36} = 7$; $5\\sqrt3$. 2. $a = 3$, $S = 54$. 3. $\\sqrt{145}$, $15$, $\\sqrt{208} = 4\\sqrt{13}$; $d = \\sqrt{64 + 81 + 144} = 17$. 4. $c = \\sqrt{50 - 25} = 5$; $S = 2(12 + 20 + 15) = 94$. 5. $AC = 2$, $h = AC\\tan 30^\\circ = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$. 6. $x\\sqrt{4 + 9 + 36} = 7x = 14$, $x = 2$: $4, 6, 12$; $S_{\\text{бок}} = 2 \\cdot 12 \\cdot (4 + 6) = 240$. 7. $\\cos\\varphi = \\dfrac{AB}{AC_1} = \\dfrac{1}{\\sqrt3}$ (треугольник $ABC_1$ прямоугольный с прямым углом $B$). 8. $d^2 = 144 - 94 = 50$, $d = 5\\sqrt2$.`,
      },
      [
        q(t("The diagonal of a rectangular parallelepiped with dimensions a, b, c satisfies…", "a, b, c չափումներով ուղղանկյուն զուգահեռանիստի անկյունագծի համար…", "Диагональ прямоугольного параллелепипеда с измерениями a, b, c удовлетворяет…"), [t("d = a + b + c", "d = a + b + c", "d = a + b + c"), t("d² = a² + b² + c²", "d² = a² + b² + c²", "d² = a² + b² + c²"), t("d² = ab + bc + ca", "d² = ab + bc + ca", "d² = ab + bc + ca")], 1),
        q(t("The diagonal of a cube with edge a is…", "a կողով խորանարդի անկյունագիծը…", "Диагональ куба с ребром a равна…"), [t("a√2", "a√2", "a√2"), t("a√3", "a√3", "a√3"), t("3a", "3a", "3a")], 1),
        q(t("The faces of a rectangular parallelepiped are…", "Ուղղանկյուն զուգահեռանիստի նիստերը…", "Грани прямоугольного параллелепипеда —"), [t("rectangles", "ուղղանկյուններ են", "прямоугольники"), t("rhombi", "շեղանկյուններ են", "ромбы"), t("arbitrary parallelograms", "կամայական զուգահեռագծեր են", "произвольные параллелограммы")], 0),
        q(t("With dimensions 3, 4, 12 the diagonal is…", "3, 4, 12 չափումների դեպքում անկյունագիծը…", "При измерениях 3, 4, 12 диагональ равна…"), [t("13", "13", "13"), t("19", "19", "19"), t("√19", "√19", "√19")], 0),
        q(t("The total surface area of a rectangular parallelepiped is…", "Ուղղանկյուն զուգահեռանիստի լրիվ մակերևույթի մակերեսը…", "Площадь полной поверхности прямоугольного параллелепипеда равна…"), [t("abc", "abc", "abc"), t("2(ab + bc + ca)", "2(ab + bc + ca)", "2(ab + bc + ca)"), t("4(a + b + c)", "4(a + b + c)", "4(a + b + c)")], 1),
        q(t("All dihedral angles of a rectangular parallelepiped are…", "Ուղղանկյուն զուգահեռանիստի բոլոր երկնիստ անկյունները…", "Все двугранные углы прямоугольного параллелепипеда…"), [t("acute", "սուր են", "острые"), t("right", "ուղիղ են", "прямые"), t("obtuse", "բութ են", "тупые")], 1),
      ],
    ),
  ],
};
