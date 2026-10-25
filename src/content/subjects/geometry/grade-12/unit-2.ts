import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Distances and angles in space", "Հեռավորություններ և անկյուններ տարածության մեջ", "Расстояния и углы в пространстве"),
  summary: t("Distance between skew lines, from a point to a plane, angles between planes, by coordinates and by construction.", "Խաչվող ուղիղների միջև, կետից հարթություն հեռավորություն, հարթությունների միջև անկյուն՝ կոորդինատներով և կառուցմամբ։", "Расстояние между скрещивающимися прямыми, от точки до плоскости, углы между плоскостями — координатами и построением."),
  lessons: [
    lesson(
      "distance-point-plane",
      ["Distance from a point to a plane", "Կետից հարթություն հեռավորություն", "Расстояние от точки до плоскости"],
      {
        en: ["Find the distance from a point to a plane by constructing the perpendicular, by the volume method d = 3V/S and by the coordinate formula", "Reduce the distance from a line or a plane parallel to a plane to the distance from one point", "Choose the quickest of the three methods for cubes, pyramids and tetrahedra and check one method against another"],
        hy: ["Գտնել կետից հարթություն հեռավորությունն ուղղահայացի կառուցմամբ, ծավալի եղանակով d = 3V/S և կոորդինատային բանաձևով", "Հարթությանը զուգահեռ ուղղից կամ հարթությունից հեռավորությունը բերել մեկ կետից հեռավորության", "Խորանարդների, բուրգերի և քառանիստների համար ընտրել երեք եղանակներից ամենաարագը և մի եղանակը ստուգել մյուսով"],
        ru: ["Находить расстояние от точки до плоскости построением перпендикуляра, методом объёмов d = 3V/S и по координатной формуле", "Сводить расстояние от прямой или плоскости, параллельной данной плоскости, к расстоянию от одной точки", "Выбирать самый быстрый из трёх методов для кубов, пирамид и тетраэдров и проверять один метод другим"],
      },
      {
        en: `## Three methods

The distance from a point $M$ to a plane $\\alpha$ is the length of the perpendicular $MH$ dropped from $M$ to $\\alpha$. There are three ways to find it.

**1. Construction.** Find a plane $\\beta$ through $M$ perpendicular to $\\alpha$ (for example, a plane containing a known perpendicular to $\\alpha$); the perpendicular from $M$ to the line $\\alpha \\cap \\beta$ is the required one, and its length is computed in the triangle inside $\\beta$. Often the distance is an altitude of a right triangle: $d = \\dfrac{\\text{leg}_1 \\cdot \\text{leg}_2}{\\text{hypotenuse}}$.

**2. Volumes.** If $M$ and three points $A$, $B$, $C$ of the plane form a tetrahedron, then $V_{MABC} = \\dfrac13 S_{ABC} \\cdot d$, so
$$d = \\dfrac{3V}{S_{ABC}}.$$
This works when the volume is easy to find from another face.

**3. Coordinates.** If $\\alpha$ is $Ax + By + Cz + D = 0$ and $M(x_0; y_0; z_0)$, then
$$d = \\dfrac{\\lvert Ax_0 + By_0 + Cz_0 + D\\rvert}{\\sqrt{A^2 + B^2 + C^2}}.$$

**Reductions.** If a line is parallel to the plane, all its points are at the same distance, so take any point. The same holds for two parallel planes. If the segment $MN$ meets the plane at a point $P$, then $d(M) : d(N) = MP : NP$ (similar triangles), which lets us move the point to a more convenient one.

Throughout, the unit cube $ABCDA_1B_1C_1D_1$ is placed with $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$.

**Example 1 (coordinates).** $M(1; 2; 3)$ and the plane $2x - y + 2z - 3 = 0$: $d = \\dfrac{\\lvert 2 - 2 + 6 - 3\\rvert}{3} = 1$.

**Example 2 (construction).** The distance from $A$ to the diagonal plane $BB_1D_1D$ of a cube with edge $a$. The plane $ABCD$ is perpendicular to $BB_1D_1D$ (it contains $BB_1$), so the perpendicular from $A$ to the line $BD$ is the required one: $d = \\dfrac{a\\sqrt2}{2}$, half the diagonal of the face.

**Example 3 (coordinates in the unit cube).** The plane $A_1BD$ is $x + y + z = 1$. Distances from $A$, $C$, $B_1$ and $C_1$: $\\dfrac{1}{\\sqrt3}$, $\\dfrac{\\lvert 1 + 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$, $\\dfrac{\\lvert 1 + 0 + 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$ and $\\dfrac{\\lvert 3 - 1\\rvert}{\\sqrt3} = \\dfrac{2}{\\sqrt3}$. Indeed the plane $A_1BD$ cuts the diagonal $AC_1 = \\sqrt3$ at a third of its length.

**Example 4 (volumes).** In the pyramid $DABC$ the edge $DA$ is perpendicular to the base, $\\angle A = 90°$, $AB = 3$, $AC = 4$, $DA = \\dfrac95$. Find the distance from $A$ to the plane $DBC$. The altitude $AH$ of the base is $\\dfrac{12}{5}$ and $DH = \\sqrt{\\dfrac{81}{25} + \\dfrac{144}{25}} = 3$, so $S_{DBC} = \\dfrac12 \\cdot 5 \\cdot 3 = \\dfrac{15}{2}$ and $V = \\dfrac13 \\cdot 6 \\cdot \\dfrac95 = \\dfrac{18}{5}$; $d = \\dfrac{3V}{S} = \\dfrac{54}{5} \\cdot \\dfrac{2}{15} = \\dfrac{36}{25}$. By construction: the plane $DAH$ is perpendicular to $BC$, hence to $DBC$, and $d = \\dfrac{AD \\cdot AH}{DH} = \\dfrac{9}{5} \\cdot \\dfrac{12}{5} : 3 = \\dfrac{36}{25}$. The two methods agree.

**Example 5.** The distance from the centre $O$ of the base of a regular quadrilateral pyramid $SABCD$ with base side $6$ and height $4$ to the face $SBC$. Let $M$ be the midpoint of $BC$; the plane $SOM$ is perpendicular to $BC$, so to the face. In the right triangle $SOM$ with legs $SO = 4$, $OM = 3$ and hypotenuse $SM = 5$ the altitude is $d = \\dfrac{4 \\cdot 3}{5} = \\dfrac{12}{5}$. The distance from $A$ to the same face is twice as large (the segment $AC$ passes through $O$, and $d(A) : d(O) = AC : OC = 2$), that is $\\dfrac{24}{5}$.

**Example 6.** Regular tetrahedron with edge $a$: the distance from a vertex to the opposite face is the height $a\\sqrt{\\dfrac23}$; via volumes, $V = \\dfrac{a^3\\sqrt2}{12}$, $S = \\dfrac{a^2\\sqrt3}{4}$, $d = \\dfrac{3V}{S} = \\dfrac{a\\sqrt2}{\\sqrt3}$, the same.

**Example 7 (parallel line).** In the unit cube, the distance from the line $B_1D_1$ to the plane $BDC_1$. The plane through $B$, $D$, $C_1$ is $x + y - z = 1$, and $B_1D_1$ has direction $\\{-1; 1; 0\\}$, perpendicular to the normal $\\{1; 1; -1\\}$, so the line is parallel to the plane. Take $B_1(1; 0; 1)$: $d = \\dfrac{\\lvert 1 - 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$.

**Example 8 (parallel planes).** The planes $A_1BD$ ($x + y + z = 1$) and $CB_1D_1$ ($x + y + z = 2$) are parallel; their distance is the distance from any point of one to the other: $\\dfrac{1}{\\sqrt3}$.

### Exercises

1. Find the distance from $(3; -1; 2)$ to the plane $x - 2y + 2z + 4 = 0$.
2. In the unit cube find the distance from $B$ to the plane $A_1C_1D$.
3. A cube has edge $2$. Find the distance from $A$ to the plane $BB_1D_1D$.
4. Find the distance from a vertex of a regular tetrahedron with edge $6$ to the opposite face.
5. A regular quadrilateral pyramid has base side $8$ and height $3$. Find the distance from the centre of the base to a lateral face.
6. In the pyramid $DABC$, $DA \\perp ABC$, $\\angle A = 90°$, $AB = 6$, $AC = 8$, $DA = \\dfrac{18}{5}$. Find the distance from $A$ to the plane $DBC$.
7. Find the distance between the planes $2x + 2y - z = 3$ and $2x + 2y - z = 9$.
8. A cube has edge $3$. Find the distance from the line $B_1D_1$ to the plane $BDC_1$.

### Answers

1. $\\dfrac{13}{3}$. 2. Plane $-x + y + z = 1$: $d = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$. 3. $\\sqrt2$. 4. $2\\sqrt6$. 5. $\\dfrac{4 \\cdot 3}{5} = \\dfrac{12}{5}$. 6. $AH = \\dfrac{24}{5}$, $DH = 6$, $d = \\dfrac{72}{25}$. 7. $\\dfrac{6}{3} = 2$. 8. $\\dfrac{3}{\\sqrt3} = \\sqrt3$.`,
        hy: `## Երեք եղանակ

$M$ կետից $\\alpha$ հարթություն հեռավորությունը $M$-ից $\\alpha$-ին տարված $MH$ ուղղահայացի երկարությունն է։ Այն գտնելու երեք եղանակ կա։

**1. Կառուցում։** Գտնենք $M$-ով անցնող և $\\alpha$-ին ուղղահայաց $\\beta$ հարթություն (օրինակ՝ $\\alpha$-ին հայտնի ուղղահայաց պարունակող հարթություն)․ $M$-ից $\\alpha \\cap \\beta$ ուղղին տարված ուղղահայացը որոնելին է, և նրա երկարությունը հաշվվում է $\\beta$-ի ներսի եռանկյունում։ Հաճախ հեռավորությունն ուղղանկյուն եռանկյան բարձրություն է․ $d = \\dfrac{\\text{էջ}_1 \\cdot \\text{էջ}_2}{\\text{ներքնաձիգ}}$։

**2. Ծավալներ։** Եթե $M$-ը և հարթության երեք $A$, $B$, $C$ կետերը քառանիստ են կազմում, ապա $V_{MABC} = \\dfrac13 S_{ABC} \\cdot d$, ուստի
$$d = \\dfrac{3V}{S_{ABC}}$$
Սա աշխատում է, երբ ծավալը հեշտ է գտնել այլ նիստից։

**3. Կոորդինատներ։** Եթե $\\alpha$-ն $Ax + By + Cz + D = 0$ է, իսկ $M(x_0; y_0; z_0)$, ապա
$$d = \\dfrac{\\lvert Ax_0 + By_0 + Cz_0 + D\\rvert}{\\sqrt{A^2 + B^2 + C^2}}$$

**Բերումներ։** Եթե ուղիղը զուգահեռ է հարթությանը, նրա բոլոր կետերը նույն հեռավորության վրա են, ուստի վերցնում ենք ցանկացած կետ։ Նույնը՝ երկու զուգահեռ հարթությունների համար։ Եթե $MN$ հատվածը հարթությունը հատում է $P$ կետում, ապա $d(M) : d(N) = MP : NP$ (նման եռանկյուններ), ինչը թույլ է տալիս կետը տեղափոխել ավելի հարմար կետի։

Ամենուր $ABCDA_1B_1C_1D_1$ միավոր խորանարդը տեղադրված է $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$ կետերով։

**Օրինակ 1 (կոորդինատներ)։** $M(1; 2; 3)$ և $2x - y + 2z - 3 = 0$ հարթություն․ $d = \\dfrac{\\lvert 2 - 2 + 6 - 3\\rvert}{3} = 1$։

**Օրինակ 2 (կառուցում)։** $a$ կողով խորանարդի $A$ գագաթից $BB_1D_1D$ անկյունագծային հարթություն հեռավորությունը։ $ABCD$ հարթությունն ուղղահայաց է $BB_1D_1D$-ին (պարունակում է $BB_1$-ը), ուստի $A$-ից $BD$ ուղղին տարված ուղղահայացը որոնելին է․ $d = \\dfrac{a\\sqrt2}{2}$՝ նիստի անկյունագծի կեսը։

**Օրինակ 3 (կոորդինատներ միավոր խորանարդում)։** $A_1BD$ հարթությունը $x + y + z = 1$ է։ Հեռավորությունները $A$-ից, $C$-ից, $B_1$-ից և $C_1$-ից․ $\\dfrac{1}{\\sqrt3}$, $\\dfrac{\\lvert 1 + 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$, $\\dfrac{\\lvert 1 + 0 + 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$ և $\\dfrac{\\lvert 3 - 1\\rvert}{\\sqrt3} = \\dfrac{2}{\\sqrt3}$։ Իրոք, $A_1BD$ հարթությունը $AC_1 = \\sqrt3$ անկյունագիծը հատում է նրա երկարության մեկ երրորդի վրա։

**Օրինակ 4 (ծավալներ)։** $DABC$ բուրգում $DA$ կողն ուղղահայաց է հիմքին, $\\angle A = 90°$, $AB = 3$, $AC = 4$, $DA = \\dfrac95$։ Գտնենք $A$-ից $DBC$ հարթություն հեռավորությունը։ Հիմքի $AH$ բարձրությունը $\\dfrac{12}{5}$ է և $DH = \\sqrt{\\dfrac{81}{25} + \\dfrac{144}{25}} = 3$, ուստի $S_{DBC} = \\dfrac12 \\cdot 5 \\cdot 3 = \\dfrac{15}{2}$ և $V = \\dfrac13 \\cdot 6 \\cdot \\dfrac95 = \\dfrac{18}{5}$, $d = \\dfrac{3V}{S} = \\dfrac{54}{5} \\cdot \\dfrac{2}{15} = \\dfrac{36}{25}$։ Կառուցմամբ․ $DAH$ հարթությունն ուղղահայաց է $BC$-ին, հետևաբար՝ $DBC$-ին, և $d = \\dfrac{AD \\cdot AH}{DH} = \\dfrac{9}{5} \\cdot \\dfrac{12}{5} : 3 = \\dfrac{36}{25}$։ Երկու եղանակները համընկնում են։

**Օրինակ 5։** $6$ հիմքի կողմով և $4$ բարձրությամբ $SABCD$ կանոնավոր քառանկյուն բուրգի հիմքի $O$ կենտրոնից $SBC$ նիստ հեռավորությունը։ Թող $M$-ը $BC$-ի միջնակետն է․ $SOM$ հարթությունն ուղղահայաց է $BC$-ին, ուրեմն՝ նիստին։ $SO = 4$, $OM = 3$ էջերով և $SM = 5$ ներքնաձիգով $SOM$ ուղղանկյուն եռանկյան բարձրությունը $d = \\dfrac{4 \\cdot 3}{5} = \\dfrac{12}{5}$ է։ $A$-ից նույն նիստ հեռավորությունն երկու անգամ մեծ է ($AC$ հատվածն անցնում է $O$-ով, և $d(A) : d(O) = AC : OC = 2$), այսինքն $\\dfrac{24}{5}$։

**Օրինակ 6։** $a$ կողով կանոնավոր քառանիստ․ գագաթից հանդիպակաց նիստ հեռավորությունը $a\\sqrt{\\dfrac23}$ բարձրությունն է․ ծավալներով՝ $V = \\dfrac{a^3\\sqrt2}{12}$, $S = \\dfrac{a^2\\sqrt3}{4}$, $d = \\dfrac{3V}{S} = \\dfrac{a\\sqrt2}{\\sqrt3}$՝ նույնը։

**Օրինակ 7 (զուգահեռ ուղիղ)։** Միավոր խորանարդում $B_1D_1$ ուղղից $BDC_1$ հարթություն հեռավորությունը։ $B$, $D$, $C_1$ կետերով հարթությունը $x + y - z = 1$ է, իսկ $B_1D_1$-ի ուղղությունը $\\{-1; 1; 0\\}$ է՝ ուղղահայաց $\\{1; 1; -1\\}$ նորմալին, ուստի ուղիղը զուգահեռ է հարթությանը։ Վերցնենք $B_1(1; 0; 1)$․ $d = \\dfrac{\\lvert 1 - 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$։

**Օրինակ 8 (զուգահեռ հարթություններ)։** $A_1BD$ ($x + y + z = 1$) և $CB_1D_1$ ($x + y + z = 2$) հարթությունները զուգահեռ են․ դրանց հեռավորությունը մեկի ցանկացած կետից մյուսի հեռավորությունն է․ $\\dfrac{1}{\\sqrt3}$։

### Վարժություններ

1. Գտեք $(3; -1; 2)$ կետից $x - 2y + 2z + 4 = 0$ հարթություն հեռավորությունը։
2. Միավոր խորանարդում գտեք $B$-ից $A_1C_1D$ հարթություն հեռավորությունը։
3. Խորանարդի կողը $2$ է։ Գտեք $A$-ից $BB_1D_1D$ հարթություն հեռավորությունը։
4. Գտեք $6$ կողով կանոնավոր քառանիստի գագաթից հանդիպակաց նիստ հեռավորությունը։
5. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $8$ է, բարձրությունը՝ $3$։ Գտեք հիմքի կենտրոնից կողմնային նիստ հեռավորությունը։
6. $DABC$ բուրգում $DA \\perp ABC$, $\\angle A = 90°$, $AB = 6$, $AC = 8$, $DA = \\dfrac{18}{5}$։ Գտեք $A$-ից $DBC$ հարթություն հեռավորությունը։
7. Գտեք $2x + 2y - z = 3$ և $2x + 2y - z = 9$ հարթությունների հեռավորությունը։
8. Խորանարդի կողը $3$ է։ Գտեք $B_1D_1$ ուղղից $BDC_1$ հարթություն հեռավորությունը։

### Պատասխաններ

1. $\\dfrac{13}{3}$։ 2. Հարթությունը $-x + y + z = 1$․ $d = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$։ 3. $\\sqrt2$։ 4. $2\\sqrt6$։ 5. $\\dfrac{4 \\cdot 3}{5} = \\dfrac{12}{5}$։ 6. $AH = \\dfrac{24}{5}$, $DH = 6$, $d = \\dfrac{72}{25}$։ 7. $\\dfrac{6}{3} = 2$։ 8. $\\dfrac{3}{\\sqrt3} = \\sqrt3$։`,
        ru: `## Три метода

Расстояние от точки $M$ до плоскости $\\alpha$ — длина перпендикуляра $MH$, опущенного из $M$ на $\\alpha$. Найти его можно тремя способами.

**1. Построение.** Найдём плоскость $\\beta$ через $M$, перпендикулярную $\\alpha$ (например, плоскость, содержащую известный перпендикуляр к $\\alpha$); перпендикуляр из $M$ к прямой $\\alpha \\cap \\beta$ и есть искомый, а его длина вычисляется в треугольнике внутри $\\beta$. Часто расстояние — высота прямоугольного треугольника: $d = \\dfrac{\\text{катет}_1 \\cdot \\text{катет}_2}{\\text{гипотенуза}}$.

**2. Объёмы.** Если $M$ и три точки $A$, $B$, $C$ плоскости образуют тетраэдр, то $V_{MABC} = \\dfrac13 S_{ABC} \\cdot d$, поэтому
$$d = \\dfrac{3V}{S_{ABC}}.$$
Это работает, когда объём легко найти через другую грань.

**3. Координаты.** Если $\\alpha$ задана уравнением $Ax + By + Cz + D = 0$ и $M(x_0; y_0; z_0)$, то
$$d = \\dfrac{\\lvert Ax_0 + By_0 + Cz_0 + D\\rvert}{\\sqrt{A^2 + B^2 + C^2}}.$$

**Сведения.** Если прямая параллельна плоскости, все её точки находятся на одном расстоянии, поэтому берём любую точку. То же верно для двух параллельных плоскостей. Если отрезок $MN$ пересекает плоскость в точке $P$, то $d(M) : d(N) = MP : NP$ (подобные треугольники), что позволяет перенести точку в более удобную.

Всюду единичный куб $ABCDA_1B_1C_1D_1$ расположен так, что $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$.

**Пример 1 (координаты).** $M(1; 2; 3)$ и плоскость $2x - y + 2z - 3 = 0$: $d = \\dfrac{\\lvert 2 - 2 + 6 - 3\\rvert}{3} = 1$.

**Пример 2 (построение).** Расстояние от $A$ до диагональной плоскости $BB_1D_1D$ куба с ребром $a$. Плоскость $ABCD$ перпендикулярна $BB_1D_1D$ (она содержит $BB_1$), поэтому перпендикуляр из $A$ к прямой $BD$ — искомый: $d = \\dfrac{a\\sqrt2}{2}$, половина диагонали грани.

**Пример 3 (координаты в единичном кубе).** Плоскость $A_1BD$: $x + y + z = 1$. Расстояния от $A$, $C$, $B_1$ и $C_1$: $\\dfrac{1}{\\sqrt3}$, $\\dfrac{\\lvert 1 + 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$, $\\dfrac{\\lvert 1 + 0 + 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$ и $\\dfrac{\\lvert 3 - 1\\rvert}{\\sqrt3} = \\dfrac{2}{\\sqrt3}$. Действительно, плоскость $A_1BD$ пересекает диагональ $AC_1 = \\sqrt3$ на трети её длины.

**Пример 4 (объёмы).** В пирамиде $DABC$ ребро $DA$ перпендикулярно основанию, $\\angle A = 90°$, $AB = 3$, $AC = 4$, $DA = \\dfrac95$. Найдём расстояние от $A$ до плоскости $DBC$. Высота $AH$ основания равна $\\dfrac{12}{5}$, $DH = \\sqrt{\\dfrac{81}{25} + \\dfrac{144}{25}} = 3$, поэтому $S_{DBC} = \\dfrac12 \\cdot 5 \\cdot 3 = \\dfrac{15}{2}$ и $V = \\dfrac13 \\cdot 6 \\cdot \\dfrac95 = \\dfrac{18}{5}$; $d = \\dfrac{3V}{S} = \\dfrac{54}{5} \\cdot \\dfrac{2}{15} = \\dfrac{36}{25}$. Построением: плоскость $DAH$ перпендикулярна $BC$, а значит, и $DBC$, и $d = \\dfrac{AD \\cdot AH}{DH} = \\dfrac{9}{5} \\cdot \\dfrac{12}{5} : 3 = \\dfrac{36}{25}$. Методы согласуются.

**Пример 5.** Расстояние от центра $O$ основания правильной четырёхугольной пирамиды $SABCD$ со стороной основания $6$ и высотой $4$ до грани $SBC$. Пусть $M$ — середина $BC$; плоскость $SOM$ перпендикулярна $BC$, а значит, и грани. В прямоугольном треугольнике $SOM$ с катетами $SO = 4$, $OM = 3$ и гипотенузой $SM = 5$ высота $d = \\dfrac{4 \\cdot 3}{5} = \\dfrac{12}{5}$. Расстояние от $A$ до той же грани вдвое больше (отрезок $AC$ проходит через $O$, и $d(A) : d(O) = AC : OC = 2$), то есть $\\dfrac{24}{5}$.

**Пример 6.** Правильный тетраэдр с ребром $a$: расстояние от вершины до противоположной грани — высота $a\\sqrt{\\dfrac23}$; через объёмы $V = \\dfrac{a^3\\sqrt2}{12}$, $S = \\dfrac{a^2\\sqrt3}{4}$, $d = \\dfrac{3V}{S} = \\dfrac{a\\sqrt2}{\\sqrt3}$, то же самое.

**Пример 7 (параллельная прямая).** В единичном кубе расстояние от прямой $B_1D_1$ до плоскости $BDC_1$. Плоскость через $B$, $D$, $C_1$: $x + y - z = 1$, а $B_1D_1$ имеет направление $\\{-1; 1; 0\\}$, перпендикулярное нормали $\\{1; 1; -1\\}$, так что прямая параллельна плоскости. Возьмём $B_1(1; 0; 1)$: $d = \\dfrac{\\lvert 1 - 1 - 1\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$.

**Пример 8 (параллельные плоскости).** Плоскости $A_1BD$ ($x + y + z = 1$) и $CB_1D_1$ ($x + y + z = 2$) параллельны; расстояние между ними — расстояние от любой точки одной до другой: $\\dfrac{1}{\\sqrt3}$.

### Упражнения

1. Найдите расстояние от точки $(3; -1; 2)$ до плоскости $x - 2y + 2z + 4 = 0$.
2. В единичном кубе найдите расстояние от $B$ до плоскости $A_1C_1D$.
3. Ребро куба равно $2$. Найдите расстояние от $A$ до плоскости $BB_1D_1D$.
4. Найдите расстояние от вершины правильного тетраэдра с ребром $6$ до противоположной грани.
5. Правильная четырёхугольная пирамида имеет сторону основания $8$ и высоту $3$. Найдите расстояние от центра основания до боковой грани.
6. В пирамиде $DABC$: $DA \\perp ABC$, $\\angle A = 90°$, $AB = 6$, $AC = 8$, $DA = \\dfrac{18}{5}$. Найдите расстояние от $A$ до плоскости $DBC$.
7. Найдите расстояние между плоскостями $2x + 2y - z = 3$ и $2x + 2y - z = 9$.
8. Ребро куба равно $3$. Найдите расстояние от прямой $B_1D_1$ до плоскости $BDC_1$.

### Ответы

1. $\\dfrac{13}{3}$. 2. Плоскость $-x + y + z = 1$: $d = \\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$. 3. $\\sqrt2$. 4. $2\\sqrt6$. 5. $\\dfrac{4 \\cdot 3}{5} = \\dfrac{12}{5}$. 6. $AH = \\dfrac{24}{5}$, $DH = 6$, $d = \\dfrac{72}{25}$. 7. $\\dfrac{6}{3} = 2$. 8. $\\dfrac{3}{\\sqrt3} = \\sqrt3$.`,
      },
      [
        q(t("The distance from (1; 2; 2) to the plane z = 0 is…", "(1; 2; 2) կետից z = 0 հարթություն հեռավորությունը…", "Расстояние от точки (1; 2; 2) до плоскости z = 0 равно…"), [t("1", "1", "1"), t("2", "2", "2"), t("3", "3", "3")], 1),
        q(t("The distance from a point to the plane Ax + By + Cz + D = 0 equals…", "Կետից Ax + By + Cz + D = 0 հարթություն հեռավորությունը հավասար է…", "Расстояние от точки до плоскости Ax + By + Cz + D = 0 равно…"), [t("|Ax₀ + By₀ + Cz₀ + D|", "|Ax₀ + By₀ + Cz₀ + D|", "|Ax₀ + By₀ + Cz₀ + D|"), t("|Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)", "|Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)", "|Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)"), t("√(A² + B² + C²)", "√(A² + B² + C²)", "√(A² + B² + C²)")], 1),
        q(t("The volume method gives the distance from M to the plane ABC as…", "Ծավալի եղանակը M-ից ABC հարթություն հեռավորությունը տալիս է որպես…", "Метод объёмов даёт расстояние от M до плоскости ABC как…"), [t("V/S", "V/S", "V/S"), t("3V/S", "3V/S", "3V/S"), t("S/V", "S/V", "S/V")], 1),
        q(t("In the unit cube the distance from A to the plane A₁BD is…", "Միավոր խորանարդում A-ից A₁BD հարթություն հեռավորությունը…", "В единичном кубе расстояние от A до плоскости A₁BD равно…"), [t("1/√3", "1/√3", "1/√3"), t("1/√2", "1/√2", "1/√2"), t("1/2", "1/2", "1/2")], 0),
        q(t("A line is parallel to a plane. The distance from the line to the plane…", "Ուղիղը զուգահեռ է հարթությանը։ Ուղղից հարթություն հեռավորությունը…", "Прямая параллельна плоскости. Расстояние от прямой до плоскости…"), [t("is the same for every point of the line", "նույնն է ուղղի ամեն կետի համար", "одинаково для каждой точки прямой"), t("depends on the point chosen", "կախված է ընտրված կետից", "зависит от выбранной точки"), t("is zero", "զրո է", "равно нулю")], 0),
        q(t("The distance from A to the diagonal plane BB₁D₁D of a cube with edge a is…", "a կողով խորանարդի A գագաթից BB₁D₁D անկյունագծային հարթություն հեռավորությունը…", "Расстояние от A до диагональной плоскости BB₁D₁D куба с ребром a равно…"), [t("a/2", "a/2", "a/2"), t("a√2/2", "a√2/2", "a√2/2"), t("a√3/2", "a√3/2", "a√3/2")], 1),
      ],
    ),
    lesson(
      "distance-skew-lines",
      ["Distance between skew lines", "Խաչվող ուղիղների միջև հեռավորություն", "Расстояние между скрещивающимися прямыми"],
      {
        en: ["Define the distance between skew lines as the length of their common perpendicular and prove it equals the distance from one line to the parallel plane through the other", "Find this distance by a common perpendicular, by a parallel plane, by projection onto a perpendicular plane, and by coordinates", "Compute the classical distances in the cube (a/√3 between skew face diagonals, a/√6 between the diagonal and a skew face diagonal), the tetrahedron and the pyramid"],
        hy: ["Սահմանել խաչվող ուղիղների միջև հեռավորությունը որպես դրանց ընդհանուր ուղղահայացի երկարություն և ապացուցել, որ այն հավասար է մի ուղղից մյուսով անցնող զուգահեռ հարթություն հեռավորությանը", "Գտնել այդ հեռավորությունն ընդհանուր ուղղահայացով, զուգահեռ հարթությամբ, ուղղահայաց հարթության վրա պրոյեկտմամբ և կոորդինատներով", "Հաշվել խորանարդի դասական հեռավորությունները (a/√3 խաչվող նիստային անկյունագծերի միջև, a/√6 անկյունագծի և խաչվող նիստային անկյունագծի միջև), քառանիստի և բուրգի"],
        ru: ["Определять расстояние между скрещивающимися прямыми как длину их общего перпендикуляра и доказывать, что оно равно расстоянию от одной прямой до параллельной плоскости, проходящей через другую", "Находить это расстояние через общий перпендикуляр, параллельную плоскость, проектирование на перпендикулярную плоскость и координаты", "Вычислять классические расстояния в кубе (a/√3 между скрещивающимися диагоналями граней, a/√6 между диагональю и скрещивающейся с ней диагональю грани), в тетраэдре и пирамиде"],
      },
      {
        en: `## Common perpendicular

Two skew lines $a$ and $b$ have exactly one **common perpendicular**: a segment $PQ$ with $P \\in a$, $Q \\in b$, perpendicular to both. Its length is the **distance between the skew lines**; it is the shortest segment joining a point of $a$ to a point of $b$.

**Theorem.** Through $b$ passes exactly one plane $\\beta$ parallel to $a$, and the distance between $a$ and $b$ equals the distance from $a$ (from any of its points) to $\\beta$. Also, if $\\alpha \\parallel \\beta$ are two parallel planes with $a \\subset \\alpha$, $b \\subset \\beta$, the distance equals the distance between the planes.

*Proof.* Draw through a point of $b$ the line $a' \\parallel a$; it and $b$ span $\\beta$. The common perpendicular $PQ$ is perpendicular to $a'$ and $b$, hence to $\\beta$, so $PQ$ is the distance from $P \\in a$ to $\\beta$; and since $a \\parallel \\beta$, this is the same for every point of $a$. $\\blacksquare$

## Four methods

1. **Common perpendicular** found directly, when one line is perpendicular to a plane containing the other (then the perpendicular from the foot to the second line is the answer).
2. **Parallel plane:** build $\\beta \\supset b$, $\\beta \\parallel a$, and find the distance from a point of $a$ to $\\beta$ (previous lesson).
3. **Projection:** project everything onto a plane perpendicular to $a$; $a$ becomes a point $A'$, $b$ a line $b'$, and the distance is the distance from $A'$ to $b'$.
4. **Coordinates:** find the normal $\\vec n$ of $\\beta$ as a vector perpendicular to both direction vectors, write the equation of $\\beta$ and apply the distance formula.

Unit cube: $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$.

**Example 1.** $AB$ and $CC_1$ in a cube with edge $a$. $BC \\perp AB$ and $BC \\perp CC_1$, so $BC$ is the common perpendicular: $d = a$. Similarly $d(AA_1, BD) = AO = \\dfrac{a\\sqrt2}{2}$, since $AA_1 \\perp ABCD$ and $AO \\perp BD$.

**Example 2 (skew face diagonals).** $AB_1$ and $BC_1$. The plane through $BC_1$ parallel to $AB_1$ is $BDC_1$ (since $AB_1 \\parallel DC_1$). Its equation: normal $\\vec n$ with $\\vec n \\cdot \\{0; 1; 1\\} = 0$ and $\\vec n \\cdot \\{1; 0; 1\\} = 0$, for instance $\\vec n = \\{1; 1; -1\\}$; through $B$: $x + y - z = 1$. Distance from $A$: $\\dfrac{1}{\\sqrt3}$. For edge $a$: $d = \\dfrac{a}{\\sqrt3} = \\dfrac{a\\sqrt3}{3}$.

**Example 3 (diagonal and a face diagonal).** $AC_1$ and $BD$. Since $BD \\perp AC_1$ (the diagonal is perpendicular to $BD$: $BD \\perp AC$ and $BD \\perp CC_1$), the common perpendicular lies in the plane $ACC_1$ through $O$, the centre of the base, perpendicular to $AC_1$. In the right triangle $ACC_1$ with legs $AC = \\sqrt2$, $CC_1 = 1$, the distance from the midpoint $O$ of $AC$ to the hypotenuse is half the altitude: $\\dfrac12 \\cdot \\dfrac{\\sqrt2 \\cdot 1}{\\sqrt3} = \\dfrac{1}{\\sqrt6}$. For edge $a$: $d = \\dfrac{a}{\\sqrt6} = \\dfrac{a\\sqrt6}{6}$.

**Example 4.** $AC$ and $B_1D_1$: these perpendicular skew lines lie in the parallel planes $ABCD$ and $A_1B_1C_1D_1$, so $d = a$; the common perpendicular joins the centres of the two faces.

**Example 5 (regular tetrahedron).** Opposite edges $AB$ and $CD$ of a regular tetrahedron with edge $a$. The midpoints $M$ of $AB$ and $N$ of $CD$ give the common perpendicular (by symmetry $MC = MD$, so $MN \\perp CD$, and similarly $MN \\perp AB$). $MC = \\dfrac{a\\sqrt3}{2}$, $NC = \\dfrac a2$, $MN = \\sqrt{\\dfrac{3a^2}{4} - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt2}{2}$.

**Example 6 (pyramid).** Regular quadrilateral pyramid $SABCD$, base side $6$, height $4$ (apothem $5$). Distance between $SA$ and $BC$: $BC \\parallel AD$, so $BC \\parallel$ plane $SAD$, and $d$ is the distance from the midpoint $M$ of $BC$ to this plane. In the section $SMN$ ($N$ the midpoint of $AD$) the triangle has $SM = SN = 5$, $MN = 6$, height $4$; the distance from $M$ to $SN$ is $\\dfrac{MN \\cdot 4}{SN} = \\dfrac{24}{5}$.

**Example 7 (coordinates).** $\\ell_1$ passes through $(1; 0; 0)$ with direction $\\{1; 1; 0\\}$, $\\ell_2$ through $(0; 0; 2)$ with direction $\\{0; 1; 1\\}$. A normal to both: $\\vec n = \\{1; -1; 1\\}$ (check: $1 - 1 + 0 = 0$, $0 - 1 + 1 = 0$). Plane through $\\ell_2$ parallel to $\\ell_1$: $x - y + z = 2$. Distance from $(1; 0; 0)$: $\\dfrac{\\lvert 1 - 2\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$.

**Example 8 (projection).** Regular triangular prism $ABCA_1B_1C_1$ with all edges $2$: distance between $AA_1$ and $BC$. Project onto the base plane (perpendicular to $AA_1$): $AA_1$ becomes the point $A$, $BC$ stays, and the distance is the altitude of the equilateral triangle, $\\sqrt3$. For the lines $AB_1$ and $BC$ project onto the plane through $A$, $A_1$ and the midpoints $M$, $K$ of $BC$ and $B_1C_1$, which is perpendicular to $BC$: $BC$ becomes the point $M$, $AB_1$ becomes the line $AK$, and $d$ is the altitude of the right triangle $AMK$: $d = \\dfrac{AM \\cdot MK}{AK} = \\dfrac{\\sqrt3 \\cdot 2}{\\sqrt7} = \\dfrac{2\\sqrt{21}}{7}$.

### Exercises

1. A cube has edge $4$. Find the distance between $AB$ and $DD_1$.
2. A cube has edge $2$. Find the distance between $AB_1$ and $BC_1$.
3. A cube has edge $3$. Find the distance between $AC_1$ and $BD$.
4. A cube has edge $a$. Find the distance between $AA_1$ and $B_1D_1$.
5. Find the distance between opposite edges of a regular tetrahedron with edge $4$.
6. A regular quadrilateral pyramid has base side $8$ and height $3$. Find the distance between $SA$ and $BC$.
7. $\\ell_1$ is the axis $Ox$, $\\ell_2$ passes through $(1; 2; 5)$ with direction $\\{0; 1; 1\\}$. Find the distance between them.
8. A regular triangular prism has all edges $2$. Find the distance between $AA_1$ and $B_1C_1$.

### Answers

1. $4$ ($AD$ is the common perpendicular). 2. $\\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$. 3. $\\dfrac{3}{\\sqrt6} = \\dfrac{\\sqrt6}{2}$. 4. $\\dfrac{a\\sqrt2}{2}$. 5. $2\\sqrt2$. 6. Apothem $5$: $\\dfrac{8 \\cdot 3}{5} = \\dfrac{24}{5}$. 7. Plane $y - z + 3 = 0$: $\\dfrac{3}{\\sqrt2} = \\dfrac{3\\sqrt2}{2}$. 8. $\\sqrt3$.`,
        hy: `## Ընդհանուր ուղղահայաց

Երկու խաչվող $a$ և $b$ ուղիղներ ունեն ճիշտ մեկ **ընդհանուր ուղղահայաց**․ $PQ$ հատված, որտեղ $P \\in a$, $Q \\in b$, ուղղահայաց երկուսին էլ։ Նրա երկարությունը **խաչվող ուղիղների միջև հեռավորությունն** է․ այն $a$-ի կետը $b$-ի կետին միացնող ամենակարճ հատվածն է։

**Թեորեմ։** $b$-ով անցնում է $a$-ին զուգահեռ ճիշտ մեկ $\\beta$ հարթություն, և $a$-ի ու $b$-ի միջև հեռավորությունը հավասար է $a$-ից (նրա ցանկացած կետից) $\\beta$ հեռավորությանը։ Նաև, եթե $\\alpha \\parallel \\beta$ երկու զուգահեռ հարթություններ են, որտեղ $a \\subset \\alpha$, $b \\subset \\beta$, հեռավորությունը հավասար է հարթությունների հեռավորությանը։

*Ապացույց։* $b$-ի մի կետով տանենք $a' \\parallel a$ ուղիղը․ այն և $b$-ն որոշում են $\\beta$-ն։ $PQ$ ընդհանուր ուղղահայացն ուղղահայաց է $a'$-ին և $b$-ին, հետևաբար՝ $\\beta$-ին, ուստի $PQ$-ն $P \\in a$-ից $\\beta$ հեռավորությունն է, իսկ քանի որ $a \\parallel \\beta$, այն նույնն է $a$-ի ամեն կետի համար։ $\\blacksquare$

## Չորս եղանակ

1. **Ընդհանուր ուղղահայաց**, որն անմիջապես գտնվում է, երբ մի ուղիղն ուղղահայաց է մյուսը պարունակող հարթությանը (այդ դեպքում հիմքից երկրորդ ուղղին տարված ուղղահայացը պատասխանն է)։
2. **Զուգահեռ հարթություն․** կառուցենք $\\beta \\supset b$, $\\beta \\parallel a$, և գտնենք $a$-ի կետից $\\beta$ հեռավորությունը (նախորդ դաս)։
3. **Պրոյեկտում․** ամեն ինչ պրոյեկտենք $a$-ին ուղղահայաց հարթության վրա․ $a$-ն դառնում է $A'$ կետ, $b$-ն՝ $b'$ ուղիղ, իսկ հեռավորությունը $A'$-ից $b'$ հեռավորությունն է։
4. **Կոորդինատներ․** գտնենք $\\beta$-ի $\\vec n$ նորմալը որպես երկու ուղղորդող վեկտորներին ուղղահայաց վեկտոր, գրենք $\\beta$-ի հավասարումը և կիրառենք հեռավորության բանաձևը։

Միավոր խորանարդ․ $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$։

**Օրինակ 1։** $a$ կողով խորանարդի $AB$ և $CC_1$։ $BC \\perp AB$ և $BC \\perp CC_1$, ուստի $BC$-ն ընդհանուր ուղղահայացն է․ $d = a$։ Նմանապես $d(AA_1, BD) = AO = \\dfrac{a\\sqrt2}{2}$, քանի որ $AA_1 \\perp ABCD$ և $AO \\perp BD$։

**Օրինակ 2 (խաչվող նիստային անկյունագծեր)։** $AB_1$ և $BC_1$։ $BC_1$-ով անցնող և $AB_1$-ին զուգահեռ հարթությունը $BDC_1$-ն է (քանի որ $AB_1 \\parallel DC_1$)։ Նրա հավասարումը․ $\\vec n$ նորմալ, որի համար $\\vec n \\cdot \\{0; 1; 1\\} = 0$ և $\\vec n \\cdot \\{1; 0; 1\\} = 0$, օրինակ $\\vec n = \\{1; 1; -1\\}$, $B$-ով՝ $x + y - z = 1$։ Հեռավորությունը $A$-ից՝ $\\dfrac{1}{\\sqrt3}$։ $a$ կողի դեպքում՝ $d = \\dfrac{a}{\\sqrt3} = \\dfrac{a\\sqrt3}{3}$։

**Օրինակ 3 (անկյունագիծ և նիստային անկյունագիծ)։** $AC_1$ և $BD$։ Քանի որ $BD \\perp AC_1$ (անկյունագիծն ուղղահայաց է $BD$-ին․ $BD \\perp AC$ և $BD \\perp CC_1$), ընդհանուր ուղղահայացը գտնվում է հիմքի $O$ կենտրոնով անցնող $ACC_1$ հարթությունում՝ ուղղահայաց $AC_1$-ին։ $AC = \\sqrt2$, $CC_1 = 1$ էջերով $ACC_1$ ուղղանկյուն եռանկյունում $AC$-ի $O$ միջնակետից ներքնաձիգ հեռավորությունը բարձրության կեսն է․ $\\dfrac12 \\cdot \\dfrac{\\sqrt2 \\cdot 1}{\\sqrt3} = \\dfrac{1}{\\sqrt6}$։ $a$ կողի դեպքում՝ $d = \\dfrac{a}{\\sqrt6} = \\dfrac{a\\sqrt6}{6}$։

**Օրինակ 4։** $AC$ և $B_1D_1$․ այս ուղղահայաց խաչվող ուղիղները գտնվում են $ABCD$ և $A_1B_1C_1D_1$ զուգահեռ հարթություններում, ուստի $d = a$, ընդհանուր ուղղահայացը միացնում է երկու նիստերի կենտրոնները։

**Օրինակ 5 (կանոնավոր քառանիստ)։** $a$ կողով կանոնավոր քառանիստի $AB$ և $CD$ հանդիպակաց կողերը։ $AB$-ի $M$ և $CD$-ի $N$ միջնակետերը տալիս են ընդհանուր ուղղահայացը (համաչափությամբ $MC = MD$, ուստի $MN \\perp CD$, նմանապես $MN \\perp AB$)։ $MC = \\dfrac{a\\sqrt3}{2}$, $NC = \\dfrac a2$, $MN = \\sqrt{\\dfrac{3a^2}{4} - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt2}{2}$։

**Օրինակ 6 (բուրգ)։** $SABCD$ կանոնավոր քառանկյուն բուրգ, հիմքի կողմը $6$, բարձրությունը $4$ (ապոթեմը $5$)։ $SA$-ի և $BC$-ի հեռավորությունը․ $BC \\parallel AD$, ուստի $BC \\parallel$ $SAD$ հարթությանը, և $d$-ն $BC$-ի $M$ միջնակետից այդ հարթություն հեռավորությունն է։ $SMN$ հատույթում ($N$-ը $AD$-ի միջնակետն է) եռանկյան $SM = SN = 5$, $MN = 6$, բարձրությունը $4$․ $M$-ից $SN$ հեռավորությունը $\\dfrac{MN \\cdot 4}{SN} = \\dfrac{24}{5}$ է։

**Օրինակ 7 (կոորդինատներ)։** $\\ell_1$-ն անցնում է $(1; 0; 0)$-ով $\\{1; 1; 0\\}$ ուղղությամբ, $\\ell_2$-ը՝ $(0; 0; 2)$-ով $\\{0; 1; 1\\}$ ուղղությամբ։ Երկուսին ուղղահայաց նորմալ․ $\\vec n = \\{1; -1; 1\\}$ (ստուգում․ $1 - 1 + 0 = 0$, $0 - 1 + 1 = 0$)։ $\\ell_2$-ով անցնող, $\\ell_1$-ին զուգահեռ հարթություն․ $x - y + z = 2$։ Հեռավորությունը $(1; 0; 0)$-ից․ $\\dfrac{\\lvert 1 - 2\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$։

**Օրինակ 8 (պրոյեկտում)։** $ABCA_1B_1C_1$ կանոնավոր եռանկյուն պրիզմա, բոլոր կողերը $2$․ $AA_1$-ի և $BC$-ի հեռավորությունը։ Պրոյեկտենք հիմքի հարթության վրա ($AA_1$-ին ուղղահայաց)․ $AA_1$-ը դառնում է $A$ կետ, $BC$-ն մնում է, իսկ հեռավորությունը հավասարակողմ եռանկյան բարձրությունն է՝ $\\sqrt3$։ $AB_1$ և $BC$ ուղիղների համար պրոյեկտենք $A$-ով, $A_1$-ով և $BC$-ի ու $B_1C_1$-ի $M$, $K$ միջնակետերով անցնող հարթության վրա, որն ուղղահայաց է $BC$-ին․ $BC$-ն դառնում է $M$ կետը, $AB_1$-ը՝ $AK$ ուղիղը, և $d$-ն $AMK$ ուղղանկյուն եռանկյան բարձրությունն է․ $d = \\dfrac{AM \\cdot MK}{AK} = \\dfrac{\\sqrt3 \\cdot 2}{\\sqrt7} = \\dfrac{2\\sqrt{21}}{7}$։

### Վարժություններ

1. Խորանարդի կողը $4$ է։ Գտեք $AB$-ի և $DD_1$-ի հեռավորությունը։
2. Խորանարդի կողը $2$ է։ Գտեք $AB_1$-ի և $BC_1$-ի հեռավորությունը։
3. Խորանարդի կողը $3$ է։ Գտեք $AC_1$-ի և $BD$-ի հեռավորությունը։
4. Խորանարդի կողը $a$ է։ Գտեք $AA_1$-ի և $B_1D_1$-ի հեռավորությունը։
5. Գտեք $4$ կողով կանոնավոր քառանիստի հանդիպակաց կողերի հեռավորությունը։
6. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $8$ է, բարձրությունը՝ $3$։ Գտեք $SA$-ի և $BC$-ի հեռավորությունը։
7. $\\ell_1$-ը $Ox$ առանցքն է, $\\ell_2$-ն անցնում է $(1; 2; 5)$-ով $\\{0; 1; 1\\}$ ուղղությամբ։ Գտեք դրանց հեռավորությունը։
8. Կանոնավոր եռանկյուն պրիզմայի բոլոր կողերը $2$ են։ Գտեք $AA_1$-ի և $B_1C_1$-ի հեռավորությունը։

### Պատասխաններ

1. $4$ ($AD$-ն ընդհանուր ուղղահայացն է)։ 2. $\\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$։ 3. $\\dfrac{3}{\\sqrt6} = \\dfrac{\\sqrt6}{2}$։ 4. $\\dfrac{a\\sqrt2}{2}$։ 5. $2\\sqrt2$։ 6. Ապոթեմը $5$․ $\\dfrac{8 \\cdot 3}{5} = \\dfrac{24}{5}$։ 7. Հարթությունը $y - z + 3 = 0$․ $\\dfrac{3}{\\sqrt2} = \\dfrac{3\\sqrt2}{2}$։ 8. $\\sqrt3$։`,
        ru: `## Общий перпендикуляр

Две скрещивающиеся прямые $a$ и $b$ имеют ровно один **общий перпендикуляр**: отрезок $PQ$ с $P \\in a$, $Q \\in b$, перпендикулярный обеим. Его длина — **расстояние между скрещивающимися прямыми**; это кратчайший отрезок, соединяющий точку $a$ с точкой $b$.

**Теорема.** Через $b$ проходит ровно одна плоскость $\\beta$, параллельная $a$, и расстояние между $a$ и $b$ равно расстоянию от $a$ (от любой её точки) до $\\beta$. Также, если $\\alpha \\parallel \\beta$ — две параллельные плоскости с $a \\subset \\alpha$, $b \\subset \\beta$, расстояние равно расстоянию между плоскостями.

*Доказательство.* Проведём через точку $b$ прямую $a' \\parallel a$; она и $b$ задают $\\beta$. Общий перпендикуляр $PQ$ перпендикулярен $a'$ и $b$, а значит, и $\\beta$, поэтому $PQ$ — расстояние от $P \\in a$ до $\\beta$; а так как $a \\parallel \\beta$, оно одно и то же для всех точек $a$. $\\blacksquare$

## Четыре метода

1. **Общий перпендикуляр**, найденный напрямую, когда одна прямая перпендикулярна плоскости, содержащей другую (тогда перпендикуляр из основания ко второй прямой — ответ).
2. **Параллельная плоскость:** строим $\\beta \\supset b$, $\\beta \\parallel a$, и находим расстояние от точки $a$ до $\\beta$ (предыдущий урок).
3. **Проектирование:** проектируем всё на плоскость, перпендикулярную $a$; $a$ становится точкой $A'$, $b$ — прямой $b'$, и расстояние равно расстоянию от $A'$ до $b'$.
4. **Координаты:** находим нормаль $\\vec n$ плоскости $\\beta$ как вектор, перпендикулярный обоим направляющим векторам, пишем уравнение $\\beta$ и применяем формулу расстояния.

Единичный куб: $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$.

**Пример 1.** $AB$ и $CC_1$ в кубе с ребром $a$. $BC \\perp AB$ и $BC \\perp CC_1$, поэтому $BC$ — общий перпендикуляр: $d = a$. Аналогично $d(AA_1, BD) = AO = \\dfrac{a\\sqrt2}{2}$, так как $AA_1 \\perp ABCD$ и $AO \\perp BD$.

**Пример 2 (скрещивающиеся диагонали граней).** $AB_1$ и $BC_1$. Плоскость через $BC_1$, параллельная $AB_1$, — это $BDC_1$ (так как $AB_1 \\parallel DC_1$). Её уравнение: нормаль $\\vec n$ с $\\vec n \\cdot \\{0; 1; 1\\} = 0$ и $\\vec n \\cdot \\{1; 0; 1\\} = 0$, например $\\vec n = \\{1; 1; -1\\}$; через $B$: $x + y - z = 1$. Расстояние от $A$: $\\dfrac{1}{\\sqrt3}$. Для ребра $a$: $d = \\dfrac{a}{\\sqrt3} = \\dfrac{a\\sqrt3}{3}$.

**Пример 3 (диагональ и диагональ грани).** $AC_1$ и $BD$. Так как $BD \\perp AC_1$ (диагональ перпендикулярна $BD$: $BD \\perp AC$ и $BD \\perp CC_1$), общий перпендикуляр лежит в плоскости $ACC_1$, проходящей через центр $O$ основания перпендикулярно $AC_1$. В прямоугольном треугольнике $ACC_1$ с катетами $AC = \\sqrt2$, $CC_1 = 1$ расстояние от середины $O$ катета $AC$ до гипотенузы — половина высоты: $\\dfrac12 \\cdot \\dfrac{\\sqrt2 \\cdot 1}{\\sqrt3} = \\dfrac{1}{\\sqrt6}$. Для ребра $a$: $d = \\dfrac{a}{\\sqrt6} = \\dfrac{a\\sqrt6}{6}$.

**Пример 4.** $AC$ и $B_1D_1$: эти перпендикулярные скрещивающиеся прямые лежат в параллельных плоскостях $ABCD$ и $A_1B_1C_1D_1$, поэтому $d = a$; общий перпендикуляр соединяет центры двух граней.

**Пример 5 (правильный тетраэдр).** Противоположные рёбра $AB$ и $CD$ правильного тетраэдра с ребром $a$. Середины $M$ ребра $AB$ и $N$ ребра $CD$ дают общий перпендикуляр (по симметрии $MC = MD$, поэтому $MN \\perp CD$, и аналогично $MN \\perp AB$). $MC = \\dfrac{a\\sqrt3}{2}$, $NC = \\dfrac a2$, $MN = \\sqrt{\\dfrac{3a^2}{4} - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt2}{2}$.

**Пример 6 (пирамида).** Правильная четырёхугольная пирамида $SABCD$, сторона основания $6$, высота $4$ (апофема $5$). Расстояние между $SA$ и $BC$: $BC \\parallel AD$, поэтому $BC \\parallel$ плоскости $SAD$, и $d$ — расстояние от середины $M$ ребра $BC$ до этой плоскости. В сечении $SMN$ ($N$ — середина $AD$) треугольник имеет $SM = SN = 5$, $MN = 6$, высоту $4$; расстояние от $M$ до $SN$ равно $\\dfrac{MN \\cdot 4}{SN} = \\dfrac{24}{5}$.

**Пример 7 (координаты).** $\\ell_1$ проходит через $(1; 0; 0)$ с направлением $\\{1; 1; 0\\}$, $\\ell_2$ — через $(0; 0; 2)$ с направлением $\\{0; 1; 1\\}$. Нормаль к обоим: $\\vec n = \\{1; -1; 1\\}$ (проверка: $1 - 1 + 0 = 0$, $0 - 1 + 1 = 0$). Плоскость через $\\ell_2$, параллельная $\\ell_1$: $x - y + z = 2$. Расстояние от $(1; 0; 0)$: $\\dfrac{\\lvert 1 - 2\\rvert}{\\sqrt3} = \\dfrac{1}{\\sqrt3}$.

**Пример 8 (проектирование).** Правильная треугольная призма $ABCA_1B_1C_1$ со всеми рёбрами $2$: расстояние между $AA_1$ и $BC$. Проектируем на плоскость основания (перпендикулярную $AA_1$): $AA_1$ становится точкой $A$, $BC$ остаётся, и расстояние — высота равностороннего треугольника, $\\sqrt3$. Для прямых $AB_1$ и $BC$ проектируем на плоскость через $A$, $A_1$ и середины $M$, $K$ рёбер $BC$ и $B_1C_1$, перпендикулярную $BC$: $BC$ становится точкой $M$, $AB_1$ — прямой $AK$, и $d$ — высота прямоугольного треугольника $AMK$: $d = \\dfrac{AM \\cdot MK}{AK} = \\dfrac{\\sqrt3 \\cdot 2}{\\sqrt7} = \\dfrac{2\\sqrt{21}}{7}$.

### Упражнения

1. Ребро куба равно $4$. Найдите расстояние между $AB$ и $DD_1$.
2. Ребро куба равно $2$. Найдите расстояние между $AB_1$ и $BC_1$.
3. Ребро куба равно $3$. Найдите расстояние между $AC_1$ и $BD$.
4. Ребро куба равно $a$. Найдите расстояние между $AA_1$ и $B_1D_1$.
5. Найдите расстояние между противоположными рёбрами правильного тетраэдра с ребром $4$.
6. Правильная четырёхугольная пирамида имеет сторону основания $8$ и высоту $3$. Найдите расстояние между $SA$ и $BC$.
7. $\\ell_1$ — ось $Ox$, $\\ell_2$ проходит через $(1; 2; 5)$ с направлением $\\{0; 1; 1\\}$. Найдите расстояние между ними.
8. Все рёбра правильной треугольной призмы равны $2$. Найдите расстояние между $AA_1$ и $B_1C_1$.

### Ответы

1. $4$ ($AD$ — общий перпендикуляр). 2. $\\dfrac{2}{\\sqrt3} = \\dfrac{2\\sqrt3}{3}$. 3. $\\dfrac{3}{\\sqrt6} = \\dfrac{\\sqrt6}{2}$. 4. $\\dfrac{a\\sqrt2}{2}$. 5. $2\\sqrt2$. 6. Апофема $5$: $\\dfrac{8 \\cdot 3}{5} = \\dfrac{24}{5}$. 7. Плоскость $y - z + 3 = 0$: $\\dfrac{3}{\\sqrt2} = \\dfrac{3\\sqrt2}{2}$. 8. $\\sqrt3$.`,
      },
      [
        q(t("The distance between skew lines is the length of…", "Խաչվող ուղիղների միջև հեռավորությունը … երկարությունն է։", "Расстояние между скрещивающимися прямыми — это длина…"), [t("their common perpendicular", "դրանց ընդհանուր ուղղահայացի", "их общего перпендикуляра"), t("any segment joining them", "դրանք միացնող ցանկացած հատվածի", "любого соединяющего их отрезка"), t("the longest segment joining them", "դրանք միացնող ամենաերկար հատվածի", "самого длинного соединяющего их отрезка")], 0),
        q(t("The distance between skew lines a and b equals the distance from a to…", "a և b խաչվող ուղիղների հեռավորությունը հավասար է a-ից … հեռավորությանը։", "Расстояние между скрещивающимися прямыми a и b равно расстоянию от a до…"), [t("any plane through b", "b-ով անցնող ցանկացած հարթություն", "любой плоскости через b"), t("the plane through b parallel to a", "b-ով անցնող, a-ին զուգահեռ հարթություն", "плоскости через b, параллельной a"), t("the plane through b perpendicular to a", "b-ով անցնող, a-ին ուղղահայաց հարթություն", "плоскости через b, перпендикулярной a")], 1),
        q(t("In a cube with edge a, the distance between AB and CC₁ is…", "a կողով խորանարդում AB-ի և CC₁-ի հեռավորությունը…", "В кубе с ребром a расстояние между AB и CC₁ равно…"), [t("a", "a", "a"), t("a√2", "a√2", "a√2"), t("a/2", "a/2", "a/2")], 0),
        q(t("In a cube with edge a, the distance between the skew face diagonals AB₁ and BC₁ is…", "a կողով խորանարդում AB₁ և BC₁ խաչվող նիստային անկյունագծերի հեռավորությունը…", "В кубе с ребром a расстояние между скрещивающимися диагоналями граней AB₁ и BC₁ равно…"), [t("a/√2", "a/√2", "a/√2"), t("a/√3", "a/√3", "a/√3"), t("a/2", "a/2", "a/2")], 1),
        q(t("The distance between opposite edges of a regular tetrahedron with edge a is…", "a կողով կանոնավոր քառանիստի հանդիպակաց կողերի հեռավորությունը…", "Расстояние между противоположными рёбрами правильного тетраэдра с ребром a равно…"), [t("a/2", "a/2", "a/2"), t("a√2/2", "a√2/2", "a√2/2"), t("a√3/2", "a√3/2", "a√3/2")], 1),
        q(t("Projecting onto a plane perpendicular to line a turns a into…", "a ուղղին ուղղահայաց հարթության վրա պրոյեկտելիս a-ն դառնում է…", "При проектировании на плоскость, перпендикулярную прямой a, прямая a становится…"), [t("a point", "կետ", "точкой"), t("a parallel line", "զուգահեռ ուղիղ", "параллельной прямой"), t("a circle", "շրջանագիծ", "окружностью")], 0),
      ],
    ),
    lesson(
      "angle-planes",
      ["Angle between planes; normal vector", "Հարթությունների միջև անկյուն, նորմալ վեկտոր", "Угол между плоскостями; вектор нормали"],
      {
        en: ["Define the angle between planes through the linear angle of a dihedral angle and construct it with the theorem of three perpendiculars", "Compute the angle between planes from their normal vectors: cos φ = |n₁·n₂| / (|n₁||n₂|)", "Apply the projection-area formula S′ = S·cos φ and find dihedral angles in cubes, pyramids and the regular tetrahedron"],
        hy: ["Սահմանել հարթությունների միջև անկյունն երկնիստ անկյան գծային անկյան միջոցով և կառուցել այն երեք ուղղահայացների թեորեմով", "Հաշվել հարթությունների միջև անկյունը նորմալ վեկտորներով․ cos φ = |n₁·n₂| / (|n₁||n₂|)", "Կիրառել պրոյեկցիայի մակերեսի S′ = S·cos φ բանաձևը և գտնել երկնիստ անկյուններ խորանարդում, բուրգերում և կանոնավոր քառանիստում"],
        ru: ["Определять угол между плоскостями через линейный угол двугранного угла и строить его по теореме о трёх перпендикулярах", "Вычислять угол между плоскостями по векторам нормали: cos φ = |n₁·n₂| / (|n₁||n₂|)", "Применять формулу площади проекции S′ = S·cos φ и находить двугранные углы в кубе, пирамидах и правильном тетраэдре"],
      },
      {
        en: `## Dihedral angle and angle between planes

Two intersecting planes form four **dihedral angles**. The **linear angle** of a dihedral angle is formed by two rays drawn in its faces from one point of the edge perpendicular to the edge; all linear angles of a dihedral angle are equal. The **angle between the planes** is the smaller of the dihedral angles, so $0° \\le \\varphi \\le 90°$.

**Constructing a linear angle.** Drop a perpendicular $MH$ from a point $M$ of one face to the other face, then a perpendicular $HK$ from $H$ to the edge. By the theorem of three perpendiculars $MK \\perp$ edge, so $\\angle MKH$ is the linear angle and
$$\\tan \\varphi = \\dfrac{MH}{HK}.$$

## Normal vectors

A plane $Ax + By + Cz + D = 0$ has normal $\\vec n = \\{A; B; C\\}$. The angle between two planes equals the angle between their normals or its supplement, hence
$$\\cos \\varphi = \\dfrac{\\lvert \\vec n_1 \\cdot \\vec n_2 \\rvert}{\\lvert \\vec n_1 \\rvert \\cdot \\lvert \\vec n_2 \\rvert} = \\dfrac{\\lvert A_1A_2 + B_1B_2 + C_1C_2 \\rvert}{\\sqrt{A_1^2 + B_1^2 + C_1^2}\\sqrt{A_2^2 + B_2^2 + C_2^2}}.$$
The planes are perpendicular if $\\vec n_1 \\cdot \\vec n_2 = 0$ and parallel if the normals are proportional.

## Area of a projection

If a polygon of area $S$ lies in a plane making angle $\\varphi$ with the plane $\\alpha$, the area of its orthogonal projection onto $\\alpha$ is
$$S' = S \\cos \\varphi.$$
(Proof for a triangle with a side parallel to the edge: the base is preserved and the height is multiplied by $\\cos\\varphi$; a general polygon is cut into such triangles.) This gives a third way to find the angle: $\\cos\\varphi = \\dfrac{S'}{S}$.

Unit cube: $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$.

**Example 1.** The angle between the plane $A_1BD$ ($x + y + z = 1$) and the base ($z = 0$): $\\cos\\varphi = \\dfrac{1}{\\sqrt3 \\cdot 1} = \\dfrac{1}{\\sqrt3}$, $\\varphi \\approx 54{,}7°$. By construction: the linear angle is $\\angle A_1OA$ where $O$ is the midpoint of $BD$, $\\tan\\varphi = \\dfrac{AA_1}{AO} = \\dfrac{1}{\\sqrt2 / 2} = \\sqrt2$, and indeed $\\cos\\varphi = \\dfrac{1}{\\sqrt{1 + 2}}$. By projection: the triangle $A_1BD$ is equilateral with side $\\sqrt2$ and area $\\dfrac{\\sqrt3}{2}$; its projection $ABD$ has area $\\dfrac12$; $\\cos\\varphi = \\dfrac{1/2}{\\sqrt3/2} = \\dfrac{1}{\\sqrt3}$.

**Example 2.** The angle between $A_1BD$ (normal $\\{1; 1; 1\\}$) and $AB_1D_1$ ($x + y - z = 0$, normal $\\{1; 1; -1\\}$): $\\cos\\varphi = \\dfrac{\\lvert 1 + 1 - 1\\rvert}{3} = \\dfrac13$.

**Example 3.** The planes $A_1BD$ and $ACC_1A_1$ ($x = y$, normal $\\{1; -1; 0\\}$): $\\vec n_1 \\cdot \\vec n_2 = 1 - 1 + 0 = 0$, so they are perpendicular. Geometrically, $BD \\perp ACC_1$ and $BD$ lies in $A_1BD$.

**Example 4 (regular tetrahedron).** The dihedral angle at an edge $AB$ of a regular tetrahedron with edge $a$: the linear angle is $\\angle CMD$, where $M$ is the midpoint of $AB$ and $CM = DM = \\dfrac{a\\sqrt3}{2}$, $CD = a$. By the law of cosines $\\cos\\varphi = \\dfrac{\\frac{3a^2}{4} + \\frac{3a^2}{4} - a^2}{2 \\cdot \\frac{3a^2}{4}} = \\dfrac13$, $\\varphi \\approx 70{,}5°$.

**Example 5 (pyramid).** Regular quadrilateral pyramid $SABCD$ with base side $6$ and height $4$. Dihedral angle at a base edge: $\\tan\\varphi = \\dfrac{SO}{OM} = \\dfrac43$, $\\cos\\varphi = \\dfrac35$ (the ratio of the base area to the lateral area: $\\dfrac{36}{60} = \\dfrac35$, by the projection formula). Angle between adjacent lateral faces: put $O$ at the origin, $S(0; 0; 4)$, $B(3; -3; 0)$, $C(3; 3; 0)$, $D(-3; 3; 0)$. The face $SBC$ contains the directions $\\{0; 1; 0\\}$ and $\\{3; -3; -4\\}$, so its normal is $\\{4; 0; 3\\}$; the face $SCD$ contains $\\{1; 0; 0\\}$ and $\\{3; 3; -4\\}$, so its normal is $\\{0; 4; 3\\}$. Hence $\\cos\\varphi = \\dfrac{9}{25}$ for the angle between the planes; the dihedral angle inside the pyramid is obtuse, $180° - \\arccos\\dfrac{9}{25}$.

**Example 6.** The angle between $2x - y + 2z = 1$ and $x + y = 3$: $\\cos\\varphi = \\dfrac{\\lvert 2 - 1 + 0\\rvert}{3\\sqrt2} = \\dfrac{\\sqrt2}{6}$.

**Example 7.** A triangle of area $10$ lies in a plane making $60°$ with $\\alpha$; its projection onto $\\alpha$ has area $10 \\cos 60° = 5$. Conversely, if a hexagon of area $9$ projects to a hexagon of area $6$, the angle satisfies $\\cos\\varphi = \\dfrac23$.

**Example 8.** Regular triangular pyramid with base side $6\\sqrt3$ (base inradius $3$) and height $3\\sqrt3$: the dihedral angle at the base has $\\tan\\varphi = \\dfrac{3\\sqrt3}{3} = \\sqrt3$, $\\varphi = 60°$. The lateral area is $\\dfrac{S_{\\text{base}}}{\\cos 60°} = 2 \\cdot 27\\sqrt3 = 54\\sqrt3$.

### Exercises

1. Find the angle between the planes $x + y = 1$ and $y + z = 2$.
2. Find the cosine of the angle between $2x + 2y + z = 0$ and $x + 2y + 2z = 3$.
3. In the unit cube find the angle between the plane $ABC_1D_1$ and the base.
4. Are the planes $x + 2y + 2z = 1$ and $2x - y = 3$ perpendicular?
5. A regular quadrilateral pyramid has base side $8$ and height $3$. Find the tangent and cosine of the dihedral angle at a base edge.
6. Find the cosine of the angle between two faces of a regular tetrahedron.
7. A polygon of area $12$ lies in a plane whose angle with $\\alpha$ has cosine $\\dfrac23$. Find the area of its projection onto $\\alpha$.
8. A regular triangular pyramid has base side $6\\sqrt3$ and height $4$. Find the cosine of the dihedral angle at the base and the lateral area.

### Answers

1. $\\cos\\varphi = \\dfrac{1}{2}$, $60°$. 2. $\\dfrac{8}{9}$. 3. Normal $\\{0; 1; -1\\}$: $45°$. 4. $2 - 2 + 0 = 0$: yes. 5. $\\tan\\varphi = \\dfrac34$, $\\cos\\varphi = \\dfrac45$. 6. $\\dfrac13$. 7. $8$. 8. $\\tan\\varphi = \\dfrac43$, $\\cos\\varphi = \\dfrac35$; $S_{\\text{lat}} = \\dfrac{27\\sqrt3}{3/5} = 45\\sqrt3$.`,
        hy: `## Երկնիստ անկյուն և հարթությունների միջև անկյուն

Երկու հատվող հարթություններ կազմում են չորս **երկնիստ անկյուն**։ Երկնիստ անկյան **գծային անկյունը** կազմված է նրա նիստերում կողի մի կետից կողին ուղղահայաց տարված երկու ճառագայթով․ երկնիստ անկյան բոլոր գծային անկյունները հավասար են։ **Հարթությունների միջև անկյունը** երկնիստ անկյուններից փոքրն է, ուստի $0° \\le \\varphi \\le 90°$։

**Գծային անկյան կառուցում։** Մի նիստի $M$ կետից մյուս նիստին տանենք $MH$ ուղղահայացը, ապա $H$-ից կողին՝ $HK$ ուղղահայացը։ Երեք ուղղահայացների թեորեմով $MK \\perp$ կողին, ուստի $\\angle MKH$-ն գծային անկյունն է և
$$\\operatorname{tg} \\varphi = \\dfrac{MH}{HK}$$

## Նորմալ վեկտորներ

$Ax + By + Cz + D = 0$ հարթության նորմալը $\\vec n = \\{A; B; C\\}$ է։ Երկու հարթությունների միջև անկյունը հավասար է նորմալների միջև անկյանը կամ նրան լրացնողին, հետևաբար
$$\\cos \\varphi = \\dfrac{\\lvert \\vec n_1 \\cdot \\vec n_2 \\rvert}{\\lvert \\vec n_1 \\rvert \\cdot \\lvert \\vec n_2 \\rvert} = \\dfrac{\\lvert A_1A_2 + B_1B_2 + C_1C_2 \\rvert}{\\sqrt{A_1^2 + B_1^2 + C_1^2}\\sqrt{A_2^2 + B_2^2 + C_2^2}}$$
Հարթություններն ուղղահայաց են, եթե $\\vec n_1 \\cdot \\vec n_2 = 0$, և զուգահեռ, եթե նորմալները համեմատական են։

## Պրոյեկցիայի մակերեսը

Եթե $S$ մակերեսով բազմանկյունը գտնվում է $\\alpha$ հարթության հետ $\\varphi$ անկյուն կազմող հարթությունում, նրա $\\alpha$-ի վրա ուղղանկյուն պրոյեկցիայի մակերեսը
$$S' = S \\cos \\varphi$$
(Ապացույցը կողին զուգահեռ կողմով եռանկյան համար․ հիմքը պահպանվում է, բարձրությունը բազմապատկվում է $\\cos\\varphi$-ով․ կամայական բազմանկյունը տրոհվում է այդպիսի եռանկյունների։) Սա անկյունը գտնելու երրորդ եղանակ է տալիս․ $\\cos\\varphi = \\dfrac{S'}{S}$։

Միավոր խորանարդ․ $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$։

**Օրինակ 1։** $A_1BD$ ($x + y + z = 1$) հարթության և հիմքի ($z = 0$) միջև անկյունը․ $\\cos\\varphi = \\dfrac{1}{\\sqrt3 \\cdot 1} = \\dfrac{1}{\\sqrt3}$, $\\varphi \\approx 54{,}7°$։ Կառուցմամբ․ գծային անկյունը $\\angle A_1OA$-ն է, որտեղ $O$-ն $BD$-ի միջնակետն է, $\\operatorname{tg}\\varphi = \\dfrac{AA_1}{AO} = \\dfrac{1}{\\sqrt2 / 2} = \\sqrt2$, և իրոք $\\cos\\varphi = \\dfrac{1}{\\sqrt{1 + 2}}$։ Պրոյեկցիայով․ $A_1BD$ եռանկյունը հավասարակողմ է $\\sqrt2$ կողմով և $\\dfrac{\\sqrt3}{2}$ մակերեսով, նրա $ABD$ պրոյեկցիայի մակերեսը $\\dfrac12$ է, $\\cos\\varphi = \\dfrac{1/2}{\\sqrt3/2} = \\dfrac{1}{\\sqrt3}$։

**Օրինակ 2։** $A_1BD$ ($\\{1; 1; 1\\}$ նորմալ) և $AB_1D_1$ ($x + y - z = 0$, $\\{1; 1; -1\\}$ նորմալ) հարթությունների միջև անկյունը․ $\\cos\\varphi = \\dfrac{\\lvert 1 + 1 - 1\\rvert}{3} = \\dfrac13$։

**Օրինակ 3։** $A_1BD$ և $ACC_1A_1$ ($x = y$, $\\{1; -1; 0\\}$ նորմալ) հարթությունները․ $\\vec n_1 \\cdot \\vec n_2 = 1 - 1 + 0 = 0$, ուստի դրանք ուղղահայաց են։ Երկրաչափորեն՝ $BD \\perp ACC_1$ և $BD$-ն գտնվում է $A_1BD$-ում։

**Օրինակ 4 (կանոնավոր քառանիստ)։** $a$ կողով կանոնավոր քառանիստի $AB$ կողի երկնիստ անկյունը․ գծային անկյունը $\\angle CMD$-ն է, որտեղ $M$-ը $AB$-ի միջնակետն է և $CM = DM = \\dfrac{a\\sqrt3}{2}$, $CD = a$։ Կոսինուսների թեորեմով $\\cos\\varphi = \\dfrac{\\frac{3a^2}{4} + \\frac{3a^2}{4} - a^2}{2 \\cdot \\frac{3a^2}{4}} = \\dfrac13$, $\\varphi \\approx 70{,}5°$։

**Օրինակ 5 (բուրգ)։** $SABCD$ կանոնավոր քառանկյուն բուրգ, հիմքի կողմը $6$, բարձրությունը $4$։ Հիմքի կողի երկնիստ անկյունը․ $\\operatorname{tg}\\varphi = \\dfrac{SO}{OM} = \\dfrac43$, $\\cos\\varphi = \\dfrac35$ (հիմքի և կողմնային մակերեսների հարաբերությունը․ $\\dfrac{36}{60} = \\dfrac35$՝ պրոյեկցիայի բանաձևով)։ Հարակից կողմնային նիստերի միջև անկյունը․ $O$-ն դնենք սկզբնակետում, $S(0; 0; 4)$, $B(3; -3; 0)$, $C(3; 3; 0)$, $D(-3; 3; 0)$։ $SBC$ նիստը պարունակում է $\\{0; 1; 0\\}$ և $\\{3; -3; -4\\}$ ուղղությունները, ուստի նրա նորմալը $\\{4; 0; 3\\}$ է, $SCD$ նիստը պարունակում է $\\{1; 0; 0\\}$ և $\\{3; 3; -4\\}$ ուղղությունները, նորմալը՝ $\\{0; 4; 3\\}$։ Հետևաբար հարթությունների միջև անկյան $\\cos\\varphi = \\dfrac{9}{25}$, իսկ բուրգի ներսի երկնիստ անկյունը բութ է՝ $180° - \\arccos\\dfrac{9}{25}$։

**Օրինակ 6։** $2x - y + 2z = 1$ և $x + y = 3$ հարթությունների միջև անկյունը․ $\\cos\\varphi = \\dfrac{\\lvert 2 - 1 + 0\\rvert}{3\\sqrt2} = \\dfrac{\\sqrt2}{6}$։

**Օրինակ 7։** $10$ մակերեսով եռանկյունը գտնվում է $\\alpha$-ի հետ $60°$ կազմող հարթությունում․ նրա պրոյեկցիայի մակերեսը $10 \\cos 60° = 5$ է։ Հակառակը՝ եթե $9$ մակերեսով վեցանկյունը պրոյեկտվում է $6$ մակերեսով վեցանկյան, ապա $\\cos\\varphi = \\dfrac23$։

**Օրինակ 8։** Կանոնավոր եռանկյուն բուրգ, հիմքի կողմը $6\\sqrt3$ (հիմքի ներգծյալ շառավիղը $3$), բարձրությունը $3\\sqrt3$․ հիմքի երկնիստ անկյան $\\operatorname{tg}\\varphi = \\dfrac{3\\sqrt3}{3} = \\sqrt3$, $\\varphi = 60°$։ Կողմնային մակերեսը $\\dfrac{S_{\\text{հիմք}}}{\\cos 60°} = 2 \\cdot 27\\sqrt3 = 54\\sqrt3$ է։

### Վարժություններ

1. Գտեք $x + y = 1$ և $y + z = 2$ հարթությունների միջև անկյունը։
2. Գտեք $2x + 2y + z = 0$ և $x + 2y + 2z = 3$ հարթությունների միջև անկյան կոսինուսը։
3. Միավոր խորանարդում գտեք $ABC_1D_1$ հարթության և հիմքի միջև անկյունը։
4. Ուղղահայա՞ց են $x + 2y + 2z = 1$ և $2x - y = 3$ հարթությունները։
5. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $8$ է, բարձրությունը՝ $3$։ Գտեք հիմքի կողի երկնիստ անկյան տանգենսը և կոսինուսը։
6. Գտեք կանոնավոր քառանիստի երկու նիստերի միջև անկյան կոսինուսը։
7. $12$ մակերեսով բազմանկյունը գտնվում է հարթությունում, որի $\\alpha$-ի հետ անկյան կոսինուսը $\\dfrac23$ է։ Գտեք նրա $\\alpha$-ի վրա պրոյեկցիայի մակերեսը։
8. Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $6\\sqrt3$ է, բարձրությունը՝ $4$։ Գտեք հիմքի երկնիստ անկյան կոսինուսը և կողմնային մակերեսը։

### Պատասխաններ

1. $\\cos\\varphi = \\dfrac{1}{2}$, $60°$։ 2. $\\dfrac{8}{9}$։ 3. Նորմալը $\\{0; 1; -1\\}$․ $45°$։ 4. $2 - 2 + 0 = 0$․ այո։ 5. $\\operatorname{tg}\\varphi = \\dfrac34$, $\\cos\\varphi = \\dfrac45$։ 6. $\\dfrac13$։ 7. $8$։ 8. $\\operatorname{tg}\\varphi = \\dfrac43$, $\\cos\\varphi = \\dfrac35$, $S_{\\text{կողմ}} = \\dfrac{27\\sqrt3}{3/5} = 45\\sqrt3$։`,
        ru: `## Двугранный угол и угол между плоскостями

Две пересекающиеся плоскости образуют четыре **двугранных угла**. **Линейный угол** двугранного угла образован двумя лучами, проведёнными в его гранях из одной точки ребра перпендикулярно ребру; все линейные углы двугранного угла равны. **Угол между плоскостями** — меньший из двугранных углов, поэтому $0° \\le \\varphi \\le 90°$.

**Построение линейного угла.** Опустим из точки $M$ одной грани перпендикуляр $MH$ на другую грань, затем из $H$ перпендикуляр $HK$ на ребро. По теореме о трёх перпендикулярах $MK \\perp$ ребру, поэтому $\\angle MKH$ — линейный угол и
$$\\operatorname{tg} \\varphi = \\dfrac{MH}{HK}.$$

## Векторы нормали

Плоскость $Ax + By + Cz + D = 0$ имеет нормаль $\\vec n = \\{A; B; C\\}$. Угол между двумя плоскостями равен углу между их нормалями или дополняет его до $180°$, поэтому
$$\\cos \\varphi = \\dfrac{\\lvert \\vec n_1 \\cdot \\vec n_2 \\rvert}{\\lvert \\vec n_1 \\rvert \\cdot \\lvert \\vec n_2 \\rvert} = \\dfrac{\\lvert A_1A_2 + B_1B_2 + C_1C_2 \\rvert}{\\sqrt{A_1^2 + B_1^2 + C_1^2}\\sqrt{A_2^2 + B_2^2 + C_2^2}}.$$
Плоскости перпендикулярны, если $\\vec n_1 \\cdot \\vec n_2 = 0$, и параллельны, если нормали пропорциональны.

## Площадь проекции

Если многоугольник площади $S$ лежит в плоскости, образующей угол $\\varphi$ с плоскостью $\\alpha$, то площадь его ортогональной проекции на $\\alpha$ равна
$$S' = S \\cos \\varphi.$$
(Доказательство для треугольника со стороной, параллельной ребру: основание сохраняется, высота умножается на $\\cos\\varphi$; произвольный многоугольник разрезается на такие треугольники.) Это даёт третий способ найти угол: $\\cos\\varphi = \\dfrac{S'}{S}$.

Единичный куб: $A(0; 0; 0)$, $B(1; 0; 0)$, $D(0; 1; 0)$, $A_1(0; 0; 1)$.

**Пример 1.** Угол между плоскостью $A_1BD$ ($x + y + z = 1$) и основанием ($z = 0$): $\\cos\\varphi = \\dfrac{1}{\\sqrt3 \\cdot 1} = \\dfrac{1}{\\sqrt3}$, $\\varphi \\approx 54{,}7°$. Построением: линейный угол — $\\angle A_1OA$, где $O$ — середина $BD$, $\\operatorname{tg}\\varphi = \\dfrac{AA_1}{AO} = \\dfrac{1}{\\sqrt2 / 2} = \\sqrt2$, и действительно $\\cos\\varphi = \\dfrac{1}{\\sqrt{1 + 2}}$. Через проекцию: треугольник $A_1BD$ равносторонний со стороной $\\sqrt2$ и площадью $\\dfrac{\\sqrt3}{2}$; его проекция $ABD$ имеет площадь $\\dfrac12$; $\\cos\\varphi = \\dfrac{1/2}{\\sqrt3/2} = \\dfrac{1}{\\sqrt3}$.

**Пример 2.** Угол между $A_1BD$ (нормаль $\\{1; 1; 1\\}$) и $AB_1D_1$ ($x + y - z = 0$, нормаль $\\{1; 1; -1\\}$): $\\cos\\varphi = \\dfrac{\\lvert 1 + 1 - 1\\rvert}{3} = \\dfrac13$.

**Пример 3.** Плоскости $A_1BD$ и $ACC_1A_1$ ($x = y$, нормаль $\\{1; -1; 0\\}$): $\\vec n_1 \\cdot \\vec n_2 = 1 - 1 + 0 = 0$, значит, они перпендикулярны. Геометрически: $BD \\perp ACC_1$, а $BD$ лежит в $A_1BD$.

**Пример 4 (правильный тетраэдр).** Двугранный угол при ребре $AB$ правильного тетраэдра с ребром $a$: линейный угол — $\\angle CMD$, где $M$ — середина $AB$ и $CM = DM = \\dfrac{a\\sqrt3}{2}$, $CD = a$. По теореме косинусов $\\cos\\varphi = \\dfrac{\\frac{3a^2}{4} + \\frac{3a^2}{4} - a^2}{2 \\cdot \\frac{3a^2}{4}} = \\dfrac13$, $\\varphi \\approx 70{,}5°$.

**Пример 5 (пирамида).** Правильная четырёхугольная пирамида $SABCD$ со стороной основания $6$ и высотой $4$. Двугранный угол при ребре основания: $\\operatorname{tg}\\varphi = \\dfrac{SO}{OM} = \\dfrac43$, $\\cos\\varphi = \\dfrac35$ (отношение площади основания к боковой: $\\dfrac{36}{60} = \\dfrac35$, по формуле проекции). Угол между соседними боковыми гранями: поместим $O$ в начало координат, $S(0; 0; 4)$, $B(3; -3; 0)$, $C(3; 3; 0)$, $D(-3; 3; 0)$. Грань $SBC$ содержит направления $\\{0; 1; 0\\}$ и $\\{3; -3; -4\\}$, поэтому её нормаль $\\{4; 0; 3\\}$; грань $SCD$ содержит $\\{1; 0; 0\\}$ и $\\{3; 3; -4\\}$, её нормаль $\\{0; 4; 3\\}$. Следовательно, для угла между плоскостями $\\cos\\varphi = \\dfrac{9}{25}$; двугранный угол внутри пирамиды тупой, $180° - \\arccos\\dfrac{9}{25}$.

**Пример 6.** Угол между $2x - y + 2z = 1$ и $x + y = 3$: $\\cos\\varphi = \\dfrac{\\lvert 2 - 1 + 0\\rvert}{3\\sqrt2} = \\dfrac{\\sqrt2}{6}$.

**Пример 7.** Треугольник площади $10$ лежит в плоскости, образующей $60°$ с $\\alpha$; площадь его проекции на $\\alpha$ равна $10 \\cos 60° = 5$. Обратно, если шестиугольник площади $9$ проектируется в шестиугольник площади $6$, то $\\cos\\varphi = \\dfrac23$.

**Пример 8.** Правильная треугольная пирамида со стороной основания $6\\sqrt3$ (радиус вписанной окружности основания $3$) и высотой $3\\sqrt3$: двугранный угол при основании имеет $\\operatorname{tg}\\varphi = \\dfrac{3\\sqrt3}{3} = \\sqrt3$, $\\varphi = 60°$. Боковая поверхность равна $\\dfrac{S_{\\text{осн}}}{\\cos 60°} = 2 \\cdot 27\\sqrt3 = 54\\sqrt3$.

### Упражнения

1. Найдите угол между плоскостями $x + y = 1$ и $y + z = 2$.
2. Найдите косинус угла между $2x + 2y + z = 0$ и $x + 2y + 2z = 3$.
3. В единичном кубе найдите угол между плоскостью $ABC_1D_1$ и основанием.
4. Перпендикулярны ли плоскости $x + 2y + 2z = 1$ и $2x - y = 3$?
5. Правильная четырёхугольная пирамида имеет сторону основания $8$ и высоту $3$. Найдите тангенс и косинус двугранного угла при ребре основания.
6. Найдите косинус угла между двумя гранями правильного тетраэдра.
7. Многоугольник площади $12$ лежит в плоскости, косинус угла которой с $\\alpha$ равен $\\dfrac23$. Найдите площадь его проекции на $\\alpha$.
8. Правильная треугольная пирамида имеет сторону основания $6\\sqrt3$ и высоту $4$. Найдите косинус двугранного угла при основании и боковую поверхность.

### Ответы

1. $\\cos\\varphi = \\dfrac{1}{2}$, $60°$. 2. $\\dfrac{8}{9}$. 3. Нормаль $\\{0; 1; -1\\}$: $45°$. 4. $2 - 2 + 0 = 0$: да. 5. $\\operatorname{tg}\\varphi = \\dfrac34$, $\\cos\\varphi = \\dfrac45$. 6. $\\dfrac13$. 7. $8$. 8. $\\operatorname{tg}\\varphi = \\dfrac43$, $\\cos\\varphi = \\dfrac35$; $S_{\\text{бок}} = \\dfrac{27\\sqrt3}{3/5} = 45\\sqrt3$.`,
      },
      [
        q(t("The angle between two planes is…", "Երկու հարթությունների միջև անկյունը…", "Угол между двумя плоскостями — это…"), [t("the larger of their dihedral angles", "դրանց երկնիստ անկյուններից մեծը", "больший из их двугранных углов"), t("the smaller of their dihedral angles", "դրանց երկնիստ անկյուններից փոքրը", "меньший из их двугранных углов"), t("always 90°", "միշտ 90°", "всегда 90°")], 1),
        q(t("The cosine of the angle between planes with normals n₁ and n₂ equals…", "n₁ և n₂ նորմալներով հարթությունների միջև անկյան կոսինուսը հավասար է…", "Косинус угла между плоскостями с нормалями n₁ и n₂ равен…"), [t("|n₁·n₂| / (|n₁||n₂|)", "|n₁·n₂| / (|n₁||n₂|)", "|n₁·n₂| / (|n₁||n₂|)"), t("n₁·n₂", "n₁·n₂", "n₁·n₂"), t("|n₁||n₂| / (n₁·n₂)", "|n₁||n₂| / (n₁·n₂)", "|n₁||n₂| / (n₁·n₂)")], 0),
        q(t("The planes x + y = 0 and x − y = 0 are…", "x + y = 0 և x − y = 0 հարթությունները…", "Плоскости x + y = 0 и x − y = 0…"), [t("parallel", "զուգահեռ են", "параллельны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("at 45°", "45° անկյան տակ են", "образуют 45°")], 1),
        q(t("A polygon of area S lies in a plane at angle φ to α. Its projection onto α has area…", "S մակերեսով բազմանկյունը գտնվում է α-ի հետ φ անկյուն կազմող հարթությունում։ Նրա պրոյեկցիայի մակերեսը…", "Многоугольник площади S лежит в плоскости под углом φ к α. Площадь его проекции на α равна…"), [t("S·sin φ", "S·sin φ", "S·sin φ"), t("S·cos φ", "S·cos φ", "S·cos φ"), t("S / cos φ", "S / cos φ", "S / cos φ")], 1),
        q(t("The cosine of the dihedral angle of a regular tetrahedron is…", "Կանոնավոր քառանիստի երկնիստ անկյան կոսինուսը…", "Косинус двугранного угла правильного тетраэдра равен…"), [t("1/2", "1/2", "1/2"), t("1/3", "1/3", "1/3"), t("1/√3", "1/√3", "1/√3")], 1),
        q(t("In the unit cube the plane A₁BD makes with the base an angle whose cosine is…", "Միավոր խորանարդում A₁BD հարթությունը հիմքի հետ կազմում է անկյուն, որի կոսինուսը…", "В единичном кубе плоскость A₁BD образует с основанием угол, косинус которого равен…"), [t("1/√2", "1/√2", "1/√2"), t("1/√3", "1/√3", "1/√3"), t("1/2", "1/2", "1/2")], 1),
      ],
    ),
    lesson(
      "section-areas",
      ["Areas of sections", "Հատույթների մակերեսներ", "Площади сечений"],
      {
        en: ["Compute the area of a section of a polyhedron directly, by the projection formula S = S′ / cos φ, or by coordinates", "Know the classical sections of a cube: the triangle A₁BD, the rectangle ABC₁D₁ and the regular hexagon through the midpoints of six edges", "Find areas of sections of a pyramid (diagonal, through the apex, parallel to the base), a cylinder, a cone through its apex, and a sphere"],
        hy: ["Հաշվել բազմանիստի հատույթի մակերեսն անմիջապես, պրոյեկցիայի S = S′ / cos φ բանաձևով կամ կոորդինատներով", "Իմանալ խորանարդի դասական հատույթները․ A₁BD եռանկյունը, ABC₁D₁ ուղղանկյունը և վեց կողերի միջնակետերով անցնող կանոնավոր վեցանկյունը", "Գտնել բուրգի (անկյունագծային, գագաթով անցնող, հիմքին զուգահեռ), գլանի, գագաթով անցնող կոնի և սֆերայի հատույթների մակերեսներ"],
        ru: ["Вычислять площадь сечения многогранника непосредственно, по формуле проекции S = S′ / cos φ или координатами", "Знать классические сечения куба: треугольник A₁BD, прямоугольник ABC₁D₁ и правильный шестиугольник через середины шести рёбер", "Находить площади сечений пирамиды (диагонального, через вершину, параллельного основанию), цилиндра, конуса через вершину и сферы"],
      },
      {
        en: `## How to find the area of a section

A section of a polyhedron by a plane is a polygon. Its area can be found in three ways.

1. **Directly:** determine the shape of the polygon (triangle, rectangle, trapezoid, regular hexagon) and compute its sides from the solid.
2. **By projection:** if the section makes the angle $\\varphi$ with a face (usually the base) and its projection onto that face has area $S'$, then
$$S = \\dfrac{S'}{\\cos\\varphi}.$$
3. **By coordinates:** find the vertices and split the polygon into triangles.

For round bodies the sections are known figures: a cylinder cut parallel to its axis gives a rectangle, a cone cut through its apex gives an isosceles triangle, a sphere gives a circle of radius $\\sqrt{R^2 - d^2}$.

## Classical sections of a cube (edge $a$)

| Section | Shape | Area |
|---|---|---|
| $A_1BD$ | equilateral triangle, side $a\\sqrt2$ | $\\dfrac{\\sqrt3}{2}a^2$ |
| $ABC_1D_1$ | rectangle $a \\times a\\sqrt2$ | $a^2\\sqrt2$ |
| through the midpoints of six edges, perpendicular to $AC_1$ | regular hexagon, side $\\dfrac{a\\sqrt2}{2}$ | $\\dfrac{3\\sqrt3}{4}a^2$ |
| $ACC_1A_1$ | rectangle $a\\sqrt2 \\times a$ | $a^2\\sqrt2$ |

**Example 1.** Cube with edge $2$, section $A_1BD$: side $2\\sqrt2$, $S = \\dfrac{\\sqrt3}{4} \\cdot 8 = 2\\sqrt3$. By projection: the projection is $ABD$ with $S' = 2$, and $\\cos\\varphi = \\dfrac{1}{\\sqrt3}$ (previous lesson), so $S = 2\\sqrt3$.

**Example 2.** Cube with edge $2$, section $ABC_1D_1$: a rectangle with sides $AB = 2$ and $BC_1 = 2\\sqrt2$, $S = 4\\sqrt2$. Projection onto the base: the whole face, $S' = 4$, $\\cos 45° = \\dfrac{\\sqrt2}{2}$, $S = \\dfrac{4}{\\sqrt2 / 2} = 4\\sqrt2$.

**Example 3.** Cube with edge $2$, the plane through the midpoints of the edges $AB$, $BC$, $CC_1$, $C_1D_1$, $D_1A_1$, $A_1A$: a regular hexagon with side $\\sqrt2$ (half of a face diagonal), $S = \\dfrac{3\\sqrt3}{2} \\cdot 2 = 3\\sqrt3$. This is the largest section of the cube perpendicular to its diagonal.

**Example 4.** Cube with edge $2$, the plane through $A$, $B$ and the midpoint $M$ of $CC_1$. It meets $DD_1$ at its midpoint $N$ (the section is parallel to $AB$), and $ABMN$ is a rectangle with $AB = 2$, $BM = \\sqrt{4 + 1} = \\sqrt5$: $S = 2\\sqrt5$. Check by projection: $S' = 4$, $\\cos\\varphi = \\dfrac{BC}{BM} = \\dfrac{2}{\\sqrt5}$, $S = 4 \\cdot \\dfrac{\\sqrt5}{2} = 2\\sqrt5$.

**Example 5 (pyramid).** Regular quadrilateral pyramid with base side $6$ and height $4$. The diagonal section $SAC$ is a triangle with base $6\\sqrt2$ and height $4$: $S = 12\\sqrt2$. The section through the apex and the midpoints of $BC$ and $AD$ is a triangle with base $6$ and height $4$: $S = 12$. The section parallel to the base at half the height is a square with side $3$ and area $9$, one quarter of the base (areas scale as the square of the ratio $\\dfrac{t}{h}$).

**Example 6 (cylinder).** A cylinder with $r = 5$ and $h = 4$ is cut by a plane parallel to the axis at distance $3$ from it. The section is a rectangle: its width is the chord $2\\sqrt{25 - 9} = 8$, its height is $4$; $S = 32$.

**Example 7 (cone).** A section through the apex of a cone is an isosceles triangle with sides $l$, $l$ and angle $\\theta$ between them: $S = \\dfrac12 l^2 \\sin\\theta$. As the plane turns, $\\theta$ grows from $0$ to the apex angle $\\theta_0$ of the axial section. If $\\theta_0 \\le 90°$ the largest section is the axial one; if $\\theta_0 > 90°$ the largest is at $\\theta = 90°$ with area $\\dfrac12 l^2$. For $r = 3$, $h = 4$: $l = 5$, $\\cos\\theta_0 = 1 - 2 \\cdot \\dfrac{9}{25} = \\dfrac{7}{25} > 0$, the largest section is the axial one, $S = 12$. For $r = 4$, $h = 3$: $\\cos\\theta_0 = 1 - \\dfrac{32}{25} < 0$, so the largest section has area $\\dfrac{25}{2} = 12{,}5$, more than the axial $12$.

**Example 8 (sphere).** A sphere of radius $5$ is cut by a plane at distance $3$ from the centre: the section is a disc of radius $4$ and area $16\\pi$. The great circle has area $25\\pi$.

### Exercises

1. Find the area of the section $A_1BD$ of a cube with edge $4$.
2. Find the area of the section $ABC_1D_1$ of a cube with edge $3$.
3. Find the area of the regular hexagonal section of a cube with edge $4$.
4. A cube has edge $4$. Find the area of the section through $A$, $B$ and the midpoint of $CC_1$.
5. A regular quadrilateral pyramid has base side $8$ and height $3$. Find the area of the diagonal section and of the section parallel to the base at distance $1$ from the apex.
6. A cylinder has $r = 13$, $h = 5$. Find the area of the section parallel to the axis at distance $12$ from it.
7. A cone has $r = 4$ and $h = 3$. Find the area of the axial section and of the largest section through the apex.
8. A sphere of radius $10$ is cut by a plane at distance $6$ from the centre. Find the area of the section.

### Answers

1. $\\dfrac{\\sqrt3}{2} \\cdot 16 = 8\\sqrt3$. 2. $9\\sqrt2$. 3. $\\dfrac{3\\sqrt3}{4} \\cdot 16 = 12\\sqrt3$. 4. $4 \\cdot \\sqrt{16 + 4} = 8\\sqrt5$. 5. $\\dfrac12 \\cdot 8\\sqrt2 \\cdot 3 = 12\\sqrt2$; $64 \\cdot \\dfrac19 = \\dfrac{64}{9}$. 6. Chord $10$: $50$. 7. $12$; $\\dfrac{25}{2}$. 8. $64\\pi$.`,
        hy: `## Ինչպես գտնել հատույթի մակերեսը

Բազմանիստի հարթությամբ հատույթը բազմանկյուն է։ Նրա մակերեսը կարելի է գտնել երեք եղանակով։

1. **Անմիջապես․** որոշել բազմանկյան տեսքը (եռանկյուն, ուղղանկյուն, սեղան, կանոնավոր վեցանկյուն) և հաշվել նրա կողմերը մարմնից։
2. **Պրոյեկցիայով․** եթե հատույթը նիստի (սովորաբար հիմքի) հետ կազմում է $\\varphi$ անկյուն, իսկ նրա պրոյեկցիան այդ նիստի վրա ունի $S'$ մակերես, ապա
$$S = \\dfrac{S'}{\\cos\\varphi}$$
3. **Կոորդինատներով․** գտնել գագաթները և բազմանկյունը տրոհել եռանկյունների։

Պտտման մարմինների հատույթները հայտնի պատկերներ են․ առանցքին զուգահեռ հատված գլանը տալիս է ուղղանկյուն, գագաթով հատված կոնը՝ հավասարասրուն եռանկյուն, սֆերան՝ $\\sqrt{R^2 - d^2}$ շառավղով շրջան։

## Խորանարդի դասական հատույթները ($a$ կող)

| Հատույթ | Տեսք | Մակերես |
|---|---|---|
| $A_1BD$ | հավասարակողմ եռանկյուն, կողմը $a\\sqrt2$ | $\\dfrac{\\sqrt3}{2}a^2$ |
| $ABC_1D_1$ | ուղղանկյուն $a \\times a\\sqrt2$ | $a^2\\sqrt2$ |
| վեց կողերի միջնակետերով, $AC_1$-ին ուղղահայաց | կանոնավոր վեցանկյուն, կողմը $\\dfrac{a\\sqrt2}{2}$ | $\\dfrac{3\\sqrt3}{4}a^2$ |
| $ACC_1A_1$ | ուղղանկյուն $a\\sqrt2 \\times a$ | $a^2\\sqrt2$ |

**Օրինակ 1։** $2$ կողով խորանարդ, $A_1BD$ հատույթ․ կողմը $2\\sqrt2$, $S = \\dfrac{\\sqrt3}{4} \\cdot 8 = 2\\sqrt3$։ Պրոյեկցիայով․ պրոյեկցիան $ABD$-ն է $S' = 2$ մակերեսով, իսկ $\\cos\\varphi = \\dfrac{1}{\\sqrt3}$ (նախորդ դաս), ուստի $S = 2\\sqrt3$։

**Օրինակ 2։** $2$ կողով խորանարդ, $ABC_1D_1$ հատույթ․ ուղղանկյուն $AB = 2$ և $BC_1 = 2\\sqrt2$ կողմերով, $S = 4\\sqrt2$։ Պրոյեկցիան հիմքի վրա ամբողջ նիստն է, $S' = 4$, $\\cos 45° = \\dfrac{\\sqrt2}{2}$, $S = \\dfrac{4}{\\sqrt2 / 2} = 4\\sqrt2$։

**Օրինակ 3։** $2$ կողով խորանարդ, $AB$, $BC$, $CC_1$, $C_1D_1$, $D_1A_1$, $A_1A$ կողերի միջնակետերով անցնող հարթություն․ կանոնավոր վեցանկյուն $\\sqrt2$ կողմով (նիստի անկյունագծի կեսը), $S = \\dfrac{3\\sqrt3}{2} \\cdot 2 = 3\\sqrt3$։ Սա խորանարդի անկյունագծին ուղղահայաց ամենամեծ հատույթն է։

**Օրինակ 4։** $2$ կողով խորանարդ, $A$-ով, $B$-ով և $CC_1$-ի $M$ միջնակետով անցնող հարթություն։ Այն $DD_1$-ը հատում է նրա $N$ միջնակետում (հատույթը զուգահեռ է $AB$-ին), և $ABMN$-ն ուղղանկյուն է $AB = 2$, $BM = \\sqrt{4 + 1} = \\sqrt5$ կողմերով․ $S = 2\\sqrt5$։ Ստուգում պրոյեկցիայով․ $S' = 4$, $\\cos\\varphi = \\dfrac{BC}{BM} = \\dfrac{2}{\\sqrt5}$, $S = 4 \\cdot \\dfrac{\\sqrt5}{2} = 2\\sqrt5$։

**Օրինակ 5 (բուրգ)։** Կանոնավոր քառանկյուն բուրգ, հիմքի կողմը $6$, բարձրությունը $4$։ $SAC$ անկյունագծային հատույթն եռանկյուն է $6\\sqrt2$ հիմքով և $4$ բարձրությամբ․ $S = 12\\sqrt2$։ Գագաթով և $BC$-ի ու $AD$-ի միջնակետերով անցնող հատույթն եռանկյուն է $6$ հիմքով և $4$ բարձրությամբ․ $S = 12$։ Բարձրության կեսին հիմքին զուգահեռ հատույթը $3$ կողմով քառակուսի է $9$ մակերեսով՝ հիմքի մեկ քառորդը (մակերեսները փոխվում են $\\dfrac{t}{h}$ հարաբերության քառակուսով)։

**Օրինակ 6 (գլան)։** $r = 5$, $h = 4$ գլանը հատված է առանցքին զուգահեռ, նրանից $3$ հեռավորության վրա գտնվող հարթությամբ։ Հատույթն ուղղանկյուն է․ լայնությունը $2\\sqrt{25 - 9} = 8$ լարն է, բարձրությունը՝ $4$․ $S = 32$։

**Օրինակ 7 (կոն)։** Կոնի գագաթով անցնող հատույթը հավասարասրուն եռանկյուն է $l$, $l$ կողմերով և դրանց միջև $\\theta$ անկյունով․ $S = \\dfrac12 l^2 \\sin\\theta$։ Հարթությունը պտտելիս $\\theta$-ն աճում է $0$-ից մինչև առանցքային հատույթի $\\theta_0$ գագաթային անկյունը։ Եթե $\\theta_0 \\le 90°$, ամենամեծ հատույթն առանցքայինն է, եթե $\\theta_0 > 90°$՝ $\\theta = 90°$ դեպքում $\\dfrac12 l^2$ մակերեսով հատույթը։ $r = 3$, $h = 4$ դեպքում․ $l = 5$, $\\cos\\theta_0 = 1 - 2 \\cdot \\dfrac{9}{25} = \\dfrac{7}{25} > 0$, ամենամեծ հատույթն առանցքայինն է, $S = 12$։ $r = 4$, $h = 3$ դեպքում․ $\\cos\\theta_0 = 1 - \\dfrac{32}{25} < 0$, ուստի ամենամեծ հատույթի մակերեսը $\\dfrac{25}{2} = 12{,}5$ է՝ ավելի, քան առանցքային $12$-ը։

**Օրինակ 8 (սֆերա)։** $5$ շառավղով սֆերան հատված է կենտրոնից $3$ հեռավորության վրա հարթությամբ․ հատույթը $4$ շառավղով և $16\\pi$ մակերեսով շրջան է։ Մեծ շրջանի մակերեսը $25\\pi$ է։

### Վարժություններ

1. Գտեք $4$ կողով խորանարդի $A_1BD$ հատույթի մակերեսը։
2. Գտեք $3$ կողով խորանարդի $ABC_1D_1$ հատույթի մակերեսը։
3. Գտեք $4$ կողով խորանարդի կանոնավոր վեցանկյուն հատույթի մակերեսը։
4. Խորանարդի կողը $4$ է։ Գտեք $A$-ով, $B$-ով և $CC_1$-ի միջնակետով անցնող հատույթի մակերեսը։
5. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $8$ է, բարձրությունը՝ $3$։ Գտեք անկյունագծային հատույթի և գագաթից $1$ հեռավորության վրա հիմքին զուգահեռ հատույթի մակերեսները։
6. Գլանի $r = 13$, $h = 5$։ Գտեք առանցքին զուգահեռ, նրանից $12$ հեռավորության վրա հատույթի մակերեսը։
7. Կոնի $r = 4$, $h = 3$։ Գտեք առանցքային հատույթի և գագաթով անցնող ամենամեծ հատույթի մակերեսները։
8. $10$ շառավղով սֆերան հատված է կենտրոնից $6$ հեռավորության վրա հարթությամբ։ Գտեք հատույթի մակերեսը։

### Պատասխաններ

1. $\\dfrac{\\sqrt3}{2} \\cdot 16 = 8\\sqrt3$։ 2. $9\\sqrt2$։ 3. $\\dfrac{3\\sqrt3}{4} \\cdot 16 = 12\\sqrt3$։ 4. $4 \\cdot \\sqrt{16 + 4} = 8\\sqrt5$։ 5. $\\dfrac12 \\cdot 8\\sqrt2 \\cdot 3 = 12\\sqrt2$, $64 \\cdot \\dfrac19 = \\dfrac{64}{9}$։ 6. Լարը $10$․ $50$։ 7. $12$, $\\dfrac{25}{2}$։ 8. $64\\pi$։`,
        ru: `## Как найти площадь сечения

Сечение многогранника плоскостью — многоугольник. Его площадь можно найти тремя способами.

1. **Непосредственно:** определить форму многоугольника (треугольник, прямоугольник, трапеция, правильный шестиугольник) и вычислить его стороны по телу.
2. **Через проекцию:** если сечение образует угол $\\varphi$ с гранью (обычно с основанием), а его проекция на эту грань имеет площадь $S'$, то
$$S = \\dfrac{S'}{\\cos\\varphi}.$$
3. **Координатами:** найти вершины и разбить многоугольник на треугольники.

Для тел вращения сечения — известные фигуры: цилиндр, рассечённый параллельно оси, даёт прямоугольник, конус через вершину — равнобедренный треугольник, сфера — круг радиуса $\\sqrt{R^2 - d^2}$.

## Классические сечения куба (ребро $a$)

| Сечение | Форма | Площадь |
|---|---|---|
| $A_1BD$ | равносторонний треугольник, сторона $a\\sqrt2$ | $\\dfrac{\\sqrt3}{2}a^2$ |
| $ABC_1D_1$ | прямоугольник $a \\times a\\sqrt2$ | $a^2\\sqrt2$ |
| через середины шести рёбер, перпендикулярно $AC_1$ | правильный шестиугольник, сторона $\\dfrac{a\\sqrt2}{2}$ | $\\dfrac{3\\sqrt3}{4}a^2$ |
| $ACC_1A_1$ | прямоугольник $a\\sqrt2 \\times a$ | $a^2\\sqrt2$ |

**Пример 1.** Куб с ребром $2$, сечение $A_1BD$: сторона $2\\sqrt2$, $S = \\dfrac{\\sqrt3}{4} \\cdot 8 = 2\\sqrt3$. Через проекцию: проекция — $ABD$ с $S' = 2$, а $\\cos\\varphi = \\dfrac{1}{\\sqrt3}$ (предыдущий урок), поэтому $S = 2\\sqrt3$.

**Пример 2.** Куб с ребром $2$, сечение $ABC_1D_1$: прямоугольник со сторонами $AB = 2$ и $BC_1 = 2\\sqrt2$, $S = 4\\sqrt2$. Проекция на основание — вся грань, $S' = 4$, $\\cos 45° = \\dfrac{\\sqrt2}{2}$, $S = \\dfrac{4}{\\sqrt2 / 2} = 4\\sqrt2$.

**Пример 3.** Куб с ребром $2$, плоскость через середины рёбер $AB$, $BC$, $CC_1$, $C_1D_1$, $D_1A_1$, $A_1A$: правильный шестиугольник со стороной $\\sqrt2$ (половина диагонали грани), $S = \\dfrac{3\\sqrt3}{2} \\cdot 2 = 3\\sqrt3$. Это наибольшее сечение куба, перпендикулярное его диагонали.

**Пример 4.** Куб с ребром $2$, плоскость через $A$, $B$ и середину $M$ ребра $CC_1$. Она пересекает $DD_1$ в его середине $N$ (сечение параллельно $AB$), и $ABMN$ — прямоугольник с $AB = 2$, $BM = \\sqrt{4 + 1} = \\sqrt5$: $S = 2\\sqrt5$. Проверка через проекцию: $S' = 4$, $\\cos\\varphi = \\dfrac{BC}{BM} = \\dfrac{2}{\\sqrt5}$, $S = 4 \\cdot \\dfrac{\\sqrt5}{2} = 2\\sqrt5$.

**Пример 5 (пирамида).** Правильная четырёхугольная пирамида со стороной основания $6$ и высотой $4$. Диагональное сечение $SAC$ — треугольник с основанием $6\\sqrt2$ и высотой $4$: $S = 12\\sqrt2$. Сечение через вершину и середины $BC$ и $AD$ — треугольник с основанием $6$ и высотой $4$: $S = 12$. Сечение, параллельное основанию на половине высоты, — квадрат со стороной $3$ и площадью $9$, четверть основания (площади меняются как квадрат отношения $\\dfrac{t}{h}$).

**Пример 6 (цилиндр).** Цилиндр с $r = 5$ и $h = 4$ рассечён плоскостью, параллельной оси, на расстоянии $3$ от неё. Сечение — прямоугольник: его ширина — хорда $2\\sqrt{25 - 9} = 8$, высота $4$; $S = 32$.

**Пример 7 (конус).** Сечение конуса через вершину — равнобедренный треугольник со сторонами $l$, $l$ и углом $\\theta$ между ними: $S = \\dfrac12 l^2 \\sin\\theta$. При повороте плоскости $\\theta$ растёт от $0$ до угла при вершине $\\theta_0$ осевого сечения. Если $\\theta_0 \\le 90°$, наибольшее сечение — осевое; если $\\theta_0 > 90°$, наибольшее — при $\\theta = 90°$ с площадью $\\dfrac12 l^2$. Для $r = 3$, $h = 4$: $l = 5$, $\\cos\\theta_0 = 1 - 2 \\cdot \\dfrac{9}{25} = \\dfrac{7}{25} > 0$, наибольшее сечение — осевое, $S = 12$. Для $r = 4$, $h = 3$: $\\cos\\theta_0 = 1 - \\dfrac{32}{25} < 0$, поэтому наибольшее сечение имеет площадь $\\dfrac{25}{2} = 12{,}5$, больше осевого $12$.

**Пример 8 (сфера).** Сфера радиуса $5$ рассечена плоскостью на расстоянии $3$ от центра: сечение — круг радиуса $4$ и площади $16\\pi$. Большой круг имеет площадь $25\\pi$.

### Упражнения

1. Найдите площадь сечения $A_1BD$ куба с ребром $4$.
2. Найдите площадь сечения $ABC_1D_1$ куба с ребром $3$.
3. Найдите площадь правильного шестиугольного сечения куба с ребром $4$.
4. Ребро куба равно $4$. Найдите площадь сечения через $A$, $B$ и середину $CC_1$.
5. Правильная четырёхугольная пирамида имеет сторону основания $8$ и высоту $3$. Найдите площадь диагонального сечения и сечения, параллельного основанию, на расстоянии $1$ от вершины.
6. Цилиндр имеет $r = 13$, $h = 5$. Найдите площадь сечения, параллельного оси, на расстоянии $12$ от неё.
7. Конус имеет $r = 4$ и $h = 3$. Найдите площадь осевого сечения и наибольшего сечения через вершину.
8. Сфера радиуса $10$ рассечена плоскостью на расстоянии $6$ от центра. Найдите площадь сечения.

### Ответы

1. $\\dfrac{\\sqrt3}{2} \\cdot 16 = 8\\sqrt3$. 2. $9\\sqrt2$. 3. $\\dfrac{3\\sqrt3}{4} \\cdot 16 = 12\\sqrt3$. 4. $4 \\cdot \\sqrt{16 + 4} = 8\\sqrt5$. 5. $\\dfrac12 \\cdot 8\\sqrt2 \\cdot 3 = 12\\sqrt2$; $64 \\cdot \\dfrac19 = \\dfrac{64}{9}$. 6. Хорда $10$: $50$. 7. $12$; $\\dfrac{25}{2}$. 8. $64\\pi$.`,
      },
      [
        q(t("If a section makes angle φ with the base and projects onto it with area S′, the section's area is…", "Եթե հատույթը հիմքի հետ կազմում է φ անկյուն և նրա վրա պրոյեկտվում է S′ մակերեսով, հատույթի մակերեսը…", "Если сечение образует с основанием угол φ и проектируется на него с площадью S′, площадь сечения равна…"), [t("S′·cos φ", "S′·cos φ", "S′·cos φ"), t("S′ / cos φ", "S′ / cos φ", "S′ / cos φ"), t("S′·sin φ", "S′·sin φ", "S′·sin φ")], 1),
        q(t("The section A₁BD of a cube with edge a is…", "a կողով խորանարդի A₁BD հատույթը…", "Сечение A₁BD куба с ребром a — это…"), [t("a right triangle", "ուղղանկյուն եռանկյուն է", "прямоугольный треугольник"), t("an equilateral triangle with side a√2", "a√2 կողմով հավասարակողմ եռանկյուն է", "равносторонний треугольник со стороной a√2"), t("a square", "քառակուսի է", "квадрат")], 1),
        q(t("The section of a cube with edge a perpendicular to its diagonal through the centre is…", "a կողով խորանարդի կենտրոնով անցնող, անկյունագծին ուղղահայաց հատույթը…", "Сечение куба с ребром a через центр, перпендикулярное диагонали, — это…"), [t("a square", "քառակուսի է", "квадрат"), t("a regular hexagon", "կանոնավոր վեցանկյուն է", "правильный шестиугольник"), t("a circle", "շրջան է", "круг")], 1),
        q(t("A section of a pyramid parallel to the base at half the height has area equal to … of the base.", "Բուրգի՝ բարձրության կեսին հիմքին զուգահեռ հատույթի մակերեսը հիմքի … է։", "Сечение пирамиды, параллельное основанию на половине высоты, имеет площадь, равную … основания."), [t("a half", "կեսը", "половине"), t("a quarter", "քառորդը", "четверти"), t("an eighth", "ութերորդը", "восьмой части")], 1),
        q(t("A cylinder with r = 5 is cut parallel to its axis at distance 3. The width of the section is…", "r = 5 գլանը հատված է առանցքին զուգահեռ՝ 3 հեռավորության վրա։ Հատույթի լայնությունը…", "Цилиндр с r = 5 рассечён параллельно оси на расстоянии 3. Ширина сечения равна…"), [t("4", "4", "4"), t("8", "8", "8"), t("6", "6", "6")], 1),
        q(t("A section of a cone through its apex is…", "Կոնի գագաթով անցնող հատույթը…", "Сечение конуса через вершину — это…"), [t("an isosceles triangle", "հավասարասրուն եռանկյուն է", "равнобедренный треугольник"), t("a circle", "շրջան է", "круг"), t("a rectangle", "ուղղանկյուն է", "прямоугольник")], 0),
      ],
    ),
  ],
};
