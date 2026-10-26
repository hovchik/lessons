import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Vectors in space", "Վեկտորներ տարածության մեջ", "Векторы в пространстве"),
  summary: t("Operations with vectors, coplanar vectors, decomposition in three non-coplanar vectors.", "Վեկտորների գործողություններ, համահարթ վեկտորներ, վերլուծում երեք ոչ համահարթ վեկտորներով։", "Действия с векторами, компланарные векторы, разложение по трём некомпланарным векторам."),
  lessons: [
    lesson(
      "vectors-space-basics",
      ["Vectors in space: operations", "Վեկտորներ տարածության մեջ․ գործողություններ", "Векторы в пространстве: действия"],
      {
        en: ["Define a vector in space, its length, equal and collinear vectors", "Add and subtract vectors by the triangle, parallelogram and polygon rules and multiply a vector by a number", "Express vectors in a cube or parallelepiped through the three edge vectors and compute their lengths"],
        hy: ["Սահմանել վեկտորը տարածության մեջ, նրա երկարությունը, հավասար և համագիծ վեկտորները", "Գումարել և հանել վեկտորներ եռանկյան, զուգահեռագծի և բազմանկյան կանոններով, բազմապատկել վեկտորը թվով", "Խորանարդի կամ զուգահեռանիստի վեկտորներն արտահայտել կողերի երեք վեկտորներով և հաշվել դրանց երկարությունները"],
        ru: ["Определять вектор в пространстве, его длину, равные и коллинеарные векторы", "Складывать и вычитать векторы по правилам треугольника, параллелограмма и многоугольника, умножать вектор на число", "Выражать векторы куба или параллелепипеда через три вектора рёбер и вычислять их длины"],
      },
      {
        en: `## Vectors in space

A **vector** is a directed segment: $\\overrightarrow{AB}$ has the initial point $A$ and the terminal point $B$. Its **length** $\\lvert\\overrightarrow{AB}\\rvert$ is the length of the segment $AB$; the **zero vector** $\\vec 0$ has length $0$ and no direction. Two non-zero vectors are **collinear** if they lie on one line or on parallel lines; collinear vectors are **co-directed** or **oppositely directed**. Vectors are **equal** if they are co-directed and have equal lengths. From any point one can lay off exactly one vector equal to a given one. All these definitions are the same as in the plane; the only novelty is that vectors are no longer confined to one plane.

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$ the vectors $\\overrightarrow{AB}$, $\\overrightarrow{DC}$, $\\overrightarrow{A_1B_1}$, $\\overrightarrow{D_1C_1}$ are equal; $\\overrightarrow{C_1D_1} = -\\overrightarrow{AB}$. The vectors $\\overrightarrow{AC}$ and $\\overrightarrow{A_1C_1}$ are equal, while $\\overrightarrow{AC}$ and $\\overrightarrow{B_1D_1}$ are not collinear: they lie in parallel planes but are perpendicular.

## Addition and subtraction

**Triangle rule.** $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ for any three points. **Parallelogram rule.** If $\\vec a$ and $\\vec b$ are laid off from one point, their sum is the diagonal of the parallelogram built on them. **Polygon rule.** $\\overrightarrow{A_1A_2} + \\overrightarrow{A_2A_3} + \\dots + \\overrightarrow{A_{n-1}A_n} = \\overrightarrow{A_1A_n}$, even when the points are not in one plane.

Addition is commutative and associative, $\\vec a + \\vec 0 = \\vec a$, and the **difference** $\\vec a - \\vec b$ is the vector $\\vec c$ with $\\vec b + \\vec c = \\vec a$; for vectors from a common point $O$: $\\overrightarrow{OA} - \\overrightarrow{OB} = \\overrightarrow{BA}$. For any point $O$ we have $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$.

**Parallelepiped rule.** If $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$ are three edges of a parallelepiped from the vertex $A$, then $\\vec a + \\vec b + \\vec c = \\overrightarrow{AC_1}$ is the diagonal from $A$. Indeed $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$ and $\\overrightarrow{AC} + \\overrightarrow{CC_1} = \\overrightarrow{AC_1}$.

**Example 2.** In the cube with edge $a$: $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD}\\rvert = \\lvert\\overrightarrow{AC}\\rvert = a\\sqrt2$ and $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1}\\rvert = \\lvert\\overrightarrow{AC_1}\\rvert = a\\sqrt3$, while $\\lvert\\overrightarrow{AB}\\rvert + \\lvert\\overrightarrow{AD}\\rvert + \\lvert\\overrightarrow{AA_1}\\rvert = 3a$. In general $\\lvert\\vec a + \\vec b\\rvert \\le \\lvert\\vec a\\rvert + \\lvert\\vec b\\rvert$.

**Example 3.** By the polygon rule $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC_1} + \\overrightarrow{C_1D_1} = \\overrightarrow{AD_1}$.

**Example 4.** Simplify $\\overrightarrow{AB} + \\overrightarrow{B_1C_1} + \\overrightarrow{DD_1} + \\overrightarrow{C_1A_1}$ in the parallelepiped. Replace each vector by an equal one from $A$: $\\overrightarrow{B_1C_1} = \\overrightarrow{AD}$, $\\overrightarrow{DD_1} = \\overrightarrow{AA_1}$, $\\overrightarrow{C_1A_1} = -\\overrightarrow{A_1C_1} = -(\\overrightarrow{AB} + \\overrightarrow{AD})$. The sum is $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1} - \\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{AA_1}$.

**Example 5.** $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$ and $\\overrightarrow{AC_1} - \\overrightarrow{AC} = \\overrightarrow{CC_1}$.

## Multiplication by a number

The product $k\\vec a$ ($k \\ne 0$, $\\vec a \\ne \\vec 0$) is the vector of length $\\lvert k\\rvert \\cdot \\lvert\\vec a\\rvert$, co-directed with $\\vec a$ for $k > 0$ and oppositely directed for $k < 0$. Non-zero vectors $\\vec a$, $\\vec b$ are collinear exactly when $\\vec b = k\\vec a$ for some number $k$. The usual laws hold: $(kl)\\vec a = k(l\\vec a)$, $(k + l)\\vec a = k\\vec a + l\\vec a$, $k(\\vec a + \\vec b) = k\\vec a + k\\vec b$.

**Example 6.** If $M$ is the midpoint of $BC$, then $\\overrightarrow{AM} = \\dfrac12(\\overrightarrow{AB} + \\overrightarrow{AC})$ for any point $A$, in the plane or in space: $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\overrightarrow{AB} + \\dfrac12\\overrightarrow{BC} = \\overrightarrow{AB} + \\dfrac12(\\overrightarrow{AC} - \\overrightarrow{AB})$.

**Example 7.** In the cube let $M$ be the midpoint of $BC_1$. Then $\\overrightarrow{AM} = \\overrightarrow{AB} + \\dfrac12\\overrightarrow{BC_1} = \\overrightarrow{AB} + \\dfrac12(\\overrightarrow{AD} + \\overrightarrow{AA_1})$.

**Example 8.** Prove that in a tetrahedron $ABCD$ we have $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$. Indeed $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$ and $\\overrightarrow{CB} - \\overrightarrow{CD} = \\overrightarrow{DB}$, so the two differences agree. $\\blacksquare$

### Exercises

In exercises 1 to 6, $ABCDA_1B_1C_1D_1$ is a parallelepiped; in exercise 5 it is a cube with edge $2$.

1. Name all vectors with endpoints at vertices that are equal to $\\overrightarrow{AA_1}$, and all that are opposite to $\\overrightarrow{AB}$.
2. Simplify $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC_1}$ and $\\overrightarrow{AD} + \\overrightarrow{DD_1} - \\overrightarrow{AA_1}$.
3. Express $\\overrightarrow{AC_1}$, $\\overrightarrow{BD_1}$ and $\\overrightarrow{A_1C}$ through $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$.
4. $M$ is the midpoint of $A_1B_1$. Express $\\overrightarrow{DM}$ through $\\vec a, \\vec b, \\vec c$.
5. In the cube with edge $2$ find $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD}\\rvert$, $\\lvert\\overrightarrow{AB} - \\overrightarrow{AD}\\rvert$ and $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1}\\rvert$.
6. Are the vectors $\\overrightarrow{AB}$ and $\\overrightarrow{C_1D_1}$ collinear? And $\\overrightarrow{AC}$ and $\\overrightarrow{A_1C_1}$? And $\\overrightarrow{AB_1}$ and $\\overrightarrow{DC_1}$?
7. Prove that for any points $A$, $B$, $C$, $D$: $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$.
8. $M$ and $N$ are the midpoints of the edges $AB$ and $CD$ of a tetrahedron. Prove that $\\overrightarrow{MN} = \\dfrac12(\\overrightarrow{AD} + \\overrightarrow{BC})$.

### Answers

1. $\\overrightarrow{BB_1}, \\overrightarrow{CC_1}, \\overrightarrow{DD_1}$; $\\overrightarrow{BA}, \\overrightarrow{CD}, \\overrightarrow{B_1A_1}, \\overrightarrow{C_1D_1}$. 2. $\\overrightarrow{AC_1}$; $\\overrightarrow{AD_1} - \\overrightarrow{AA_1} = \\overrightarrow{A_1D_1} = \\overrightarrow{AD}$. 3. $\\vec a + \\vec b + \\vec c$; $-\\vec a + \\vec b + \\vec c$; $\\vec a + \\vec b - \\vec c$. 4. $\\overrightarrow{DM} = \\overrightarrow{DA} + \\overrightarrow{AA_1} + \\overrightarrow{A_1M} = -\\vec b + \\vec c + \\dfrac12\\vec a$. 5. $2\\sqrt2$, $2\\sqrt2$, $2\\sqrt3$. 6. Yes ($\\overrightarrow{C_1D_1} = -\\overrightarrow{AB}$); yes (equal); yes ($\\overrightarrow{AB_1} = \\overrightarrow{DC_1}$). 7. $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB} = \\overrightarrow{CB} - \\overrightarrow{CD}$. 8. $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ and $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$; adding, $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec 0$ and $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec 0$, so $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$.`,
        hy: `## Վեկտորներ տարածության մեջ

**Վեկտորն** ուղղորդված հատված է․ $\\overrightarrow{AB}$-ի սկիզբը $A$ կետն է, վերջը՝ $B$ կետը։ Նրա **երկարությունը** $\\lvert\\overrightarrow{AB}\\rvert$-ն $AB$ հատվածի երկարությունն է, **զրոյական վեկտորի** $\\vec 0$-ի երկարությունը $0$ է, և այն ուղղություն չունի։ Երկու ոչ զրոյական վեկտորներ **համագիծ** են, եթե ընկած են մեկ ուղղի կամ զուգահեռ ուղիղների վրա, համագիծ վեկտորները **համուղղված** են կամ **հակառակ ուղղված**։ Վեկտորները **հավասար** են, եթե համուղղված են և ունեն հավասար երկարություններ։ Ցանկացած կետից կարելի է տեղադրել տրվածին հավասար ճիշտ մեկ վեկտոր։ Այս բոլոր սահմանումները նույնն են, ինչ հարթության մեջ, միակ նորությունն այն է, որ վեկտորներն այլևս մեկ հարթությամբ սահմանափակված չեն։

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $\\overrightarrow{AB}$, $\\overrightarrow{DC}$, $\\overrightarrow{A_1B_1}$, $\\overrightarrow{D_1C_1}$ վեկտորները հավասար են, $\\overrightarrow{C_1D_1} = -\\overrightarrow{AB}$։ $\\overrightarrow{AC}$ և $\\overrightarrow{A_1C_1}$ վեկտորները հավասար են, իսկ $\\overrightarrow{AC}$-ն ու $\\overrightarrow{B_1D_1}$-ը համագիծ չեն․ դրանք ընկած են զուգահեռ հարթություններում, բայց ուղղահայաց են։

## Գումարում և հանում

**Եռանկյան կանոն։** $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ ցանկացած երեք կետի համար։ **Զուգահեռագծի կանոն։** Եթե $\\vec a$-ն և $\\vec b$-ն տեղադրված են մեկ կետից, դրանց գումարը դրանց վրա կառուցված զուգահեռագծի անկյունագիծն է։ **Բազմանկյան կանոն։** $\\overrightarrow{A_1A_2} + \\overrightarrow{A_2A_3} + \\dots + \\overrightarrow{A_{n-1}A_n} = \\overrightarrow{A_1A_n}$ նույնիսկ այն դեպքում, երբ կետերը մեկ հարթության մեջ չեն։

Գումարումը տեղափոխական և զուգորդական է, $\\vec a + \\vec 0 = \\vec a$, իսկ $\\vec a - \\vec b$ **տարբերությունն** այն $\\vec c$ վեկտորն է, որի համար $\\vec b + \\vec c = \\vec a$, ընդհանուր $O$ կետից տեղադրված վեկտորների համար՝ $\\overrightarrow{OA} - \\overrightarrow{OB} = \\overrightarrow{BA}$։ Ցանկացած $O$ կետի համար $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$։

**Զուգահեռանիստի կանոն։** Եթե $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$ զուգահեռանիստի երեք կողերն են $A$ գագաթից, ապա $\\vec a + \\vec b + \\vec c = \\overrightarrow{AC_1}$-ը $A$-ից տարված անկյունագիծն է։ Իրոք, $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$ և $\\overrightarrow{AC} + \\overrightarrow{CC_1} = \\overrightarrow{AC_1}$։

**Օրինակ 2։** $a$ կողով խորանարդում $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD}\\rvert = \\lvert\\overrightarrow{AC}\\rvert = a\\sqrt2$ և $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1}\\rvert = \\lvert\\overrightarrow{AC_1}\\rvert = a\\sqrt3$, մինչդեռ $\\lvert\\overrightarrow{AB}\\rvert + \\lvert\\overrightarrow{AD}\\rvert + \\lvert\\overrightarrow{AA_1}\\rvert = 3a$։ Ընդհանրապես $\\lvert\\vec a + \\vec b\\rvert \\le \\lvert\\vec a\\rvert + \\lvert\\vec b\\rvert$։

**Օրինակ 3։** Բազմանկյան կանոնով $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC_1} + \\overrightarrow{C_1D_1} = \\overrightarrow{AD_1}$։

**Օրինակ 4։** Պարզեցնենք $\\overrightarrow{AB} + \\overrightarrow{B_1C_1} + \\overrightarrow{DD_1} + \\overrightarrow{C_1A_1}$-ը զուգահեռանիստում։ Յուրաքանչյուր վեկտոր փոխարինենք $A$-ից տեղադրված հավասար վեկտորով․ $\\overrightarrow{B_1C_1} = \\overrightarrow{AD}$, $\\overrightarrow{DD_1} = \\overrightarrow{AA_1}$, $\\overrightarrow{C_1A_1} = -\\overrightarrow{A_1C_1} = -(\\overrightarrow{AB} + \\overrightarrow{AD})$։ Գումարը $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1} - \\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{AA_1}$ է։

**Օրինակ 5։** $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$ և $\\overrightarrow{AC_1} - \\overrightarrow{AC} = \\overrightarrow{CC_1}$։

## Բազմապատկում թվով

$k\\vec a$ արտադրյալը ($k \\ne 0$, $\\vec a \\ne \\vec 0$) $\\lvert k\\rvert \\cdot \\lvert\\vec a\\rvert$ երկարությամբ վեկտոր է՝ $\\vec a$-ին համուղղված $k > 0$-ի դեպքում և հակառակ ուղղված $k < 0$-ի դեպքում։ Ոչ զրոյական $\\vec a$, $\\vec b$ վեկտորները համագիծ են ճիշտ այն դեպքում, երբ $\\vec b = k\\vec a$ ինչ-որ $k$ թվի համար։ Գործում են սովորական օրենքները․ $(kl)\\vec a = k(l\\vec a)$, $(k + l)\\vec a = k\\vec a + l\\vec a$, $k(\\vec a + \\vec b) = k\\vec a + k\\vec b$։

**Օրինակ 6։** Եթե $M$-ը $BC$-ի միջնակետն է, ապա $\\overrightarrow{AM} = \\dfrac12(\\overrightarrow{AB} + \\overrightarrow{AC})$ ցանկացած $A$ կետի համար՝ հարթության մեջ կամ տարածության մեջ․ $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\overrightarrow{AB} + \\dfrac12\\overrightarrow{BC} = \\overrightarrow{AB} + \\dfrac12(\\overrightarrow{AC} - \\overrightarrow{AB})$։

**Օրինակ 7։** Խորանարդում $M$-ը լինի $BC_1$-ի միջնակետը։ Այդ դեպքում $\\overrightarrow{AM} = \\overrightarrow{AB} + \\dfrac12\\overrightarrow{BC_1} = \\overrightarrow{AB} + \\dfrac12(\\overrightarrow{AD} + \\overrightarrow{AA_1})$։

**Օրինակ 8։** Ապացուցենք, որ $ABCD$ քառանիստում $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$։ Իրոք, $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$ և $\\overrightarrow{CB} - \\overrightarrow{CD} = \\overrightarrow{DB}$, ուստի երկու տարբերությունները համընկնում են։ $\\blacksquare$

### Վարժություններ

1-6 վարժություններում $ABCDA_1B_1C_1D_1$-ը զուգահեռանիստ է, 5-րդ վարժությունում՝ $2$ կողով խորանարդ։

1. Անվանեք գագաթներում ծայրակետերով բոլոր վեկտորները, որոնք հավասար են $\\overrightarrow{AA_1}$-ին, և բոլոր վեկտորները, որոնք հակադիր են $\\overrightarrow{AB}$-ին։
2. Պարզեցրեք $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC_1}$-ը և $\\overrightarrow{AD} + \\overrightarrow{DD_1} - \\overrightarrow{AA_1}$-ը։
3. Արտահայտեք $\\overrightarrow{AC_1}$-ը, $\\overrightarrow{BD_1}$-ը և $\\overrightarrow{A_1C}$-ն $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$ վեկտորներով։
4. $M$-ը $A_1B_1$-ի միջնակետն է։ Արտահայտեք $\\overrightarrow{DM}$-ը $\\vec a, \\vec b, \\vec c$-ով։
5. $2$ կողով խորանարդում գտեք $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD}\\rvert$, $\\lvert\\overrightarrow{AB} - \\overrightarrow{AD}\\rvert$ և $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1}\\rvert$։
6. Համագի՞ծ են արդյոք $\\overrightarrow{AB}$ և $\\overrightarrow{C_1D_1}$ վեկտորները։ Իսկ $\\overrightarrow{AC}$-ն ու $\\overrightarrow{A_1C_1}$-ը։ Իսկ $\\overrightarrow{AB_1}$-ը և $\\overrightarrow{DC_1}$-ը։
7. Ապացուցեք, որ ցանկացած $A$, $B$, $C$, $D$ կետերի համար $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$։
8. $M$-ը և $N$-ը քառանիստի $AB$ և $CD$ կողերի միջնակետերն են։ Ապացուցեք, որ $\\overrightarrow{MN} = \\dfrac12(\\overrightarrow{AD} + \\overrightarrow{BC})$։

### Պատասխաններ

1. $\\overrightarrow{BB_1}, \\overrightarrow{CC_1}, \\overrightarrow{DD_1}$, $\\overrightarrow{BA}, \\overrightarrow{CD}, \\overrightarrow{B_1A_1}, \\overrightarrow{C_1D_1}$։ 2. $\\overrightarrow{AC_1}$, $\\overrightarrow{AD_1} - \\overrightarrow{AA_1} = \\overrightarrow{A_1D_1} = \\overrightarrow{AD}$։ 3. $\\vec a + \\vec b + \\vec c$, $-\\vec a + \\vec b + \\vec c$, $\\vec a + \\vec b - \\vec c$։ 4. $\\overrightarrow{DM} = \\overrightarrow{DA} + \\overrightarrow{AA_1} + \\overrightarrow{A_1M} = -\\vec b + \\vec c + \\dfrac12\\vec a$։ 5. $2\\sqrt2$, $2\\sqrt2$, $2\\sqrt3$։ 6. Այո ($\\overrightarrow{C_1D_1} = -\\overrightarrow{AB}$), այո (հավասար են), այո ($\\overrightarrow{AB_1} = \\overrightarrow{DC_1}$)։ 7. $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB} = \\overrightarrow{CB} - \\overrightarrow{CD}$։ 8. $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ և $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$, գումարելով՝ $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec 0$ և $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec 0$, ուստի $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$։`,
        ru: `## Векторы в пространстве

**Вектор** — направленный отрезок: у $\\overrightarrow{AB}$ начало $A$ и конец $B$. Его **длина** $\\lvert\\overrightarrow{AB}\\rvert$ — длина отрезка $AB$; **нулевой вектор** $\\vec 0$ имеет длину $0$ и не имеет направления. Два ненулевых вектора **коллинеарны**, если лежат на одной прямой или на параллельных прямых; коллинеарные векторы **сонаправлены** или **противоположно направлены**. Векторы **равны**, если они сонаправлены и имеют равные длины. От любой точки можно отложить ровно один вектор, равный данному. Все эти определения такие же, как на плоскости; новое лишь то, что векторы больше не ограничены одной плоскостью.

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ векторы $\\overrightarrow{AB}$, $\\overrightarrow{DC}$, $\\overrightarrow{A_1B_1}$, $\\overrightarrow{D_1C_1}$ равны; $\\overrightarrow{C_1D_1} = -\\overrightarrow{AB}$. Векторы $\\overrightarrow{AC}$ и $\\overrightarrow{A_1C_1}$ равны, а $\\overrightarrow{AC}$ и $\\overrightarrow{B_1D_1}$ не коллинеарны: они лежат в параллельных плоскостях, но перпендикулярны.

## Сложение и вычитание

**Правило треугольника.** $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ для любых трёх точек. **Правило параллелограмма.** Если $\\vec a$ и $\\vec b$ отложены от одной точки, их сумма — диагональ построенного на них параллелограмма. **Правило многоугольника.** $\\overrightarrow{A_1A_2} + \\overrightarrow{A_2A_3} + \\dots + \\overrightarrow{A_{n-1}A_n} = \\overrightarrow{A_1A_n}$, даже если точки не лежат в одной плоскости.

Сложение переместительно и сочетательно, $\\vec a + \\vec 0 = \\vec a$, а **разность** $\\vec a - \\vec b$ — это вектор $\\vec c$, для которого $\\vec b + \\vec c = \\vec a$; для векторов из общей точки $O$: $\\overrightarrow{OA} - \\overrightarrow{OB} = \\overrightarrow{BA}$. Для любой точки $O$ имеем $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}$.

**Правило параллелепипеда.** Если $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$ — три ребра параллелепипеда из вершины $A$, то $\\vec a + \\vec b + \\vec c = \\overrightarrow{AC_1}$ — диагональ из $A$. Действительно, $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$ и $\\overrightarrow{AC} + \\overrightarrow{CC_1} = \\overrightarrow{AC_1}$.

**Пример 2.** В кубе с ребром $a$: $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD}\\rvert = \\lvert\\overrightarrow{AC}\\rvert = a\\sqrt2$ и $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1}\\rvert = \\lvert\\overrightarrow{AC_1}\\rvert = a\\sqrt3$, тогда как $\\lvert\\overrightarrow{AB}\\rvert + \\lvert\\overrightarrow{AD}\\rvert + \\lvert\\overrightarrow{AA_1}\\rvert = 3a$. Вообще $\\lvert\\vec a + \\vec b\\rvert \\le \\lvert\\vec a\\rvert + \\lvert\\vec b\\rvert$.

**Пример 3.** По правилу многоугольника $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC_1} + \\overrightarrow{C_1D_1} = \\overrightarrow{AD_1}$.

**Пример 4.** Упростим $\\overrightarrow{AB} + \\overrightarrow{B_1C_1} + \\overrightarrow{DD_1} + \\overrightarrow{C_1A_1}$ в параллелепипеде. Заменим каждый вектор равным ему вектором из $A$: $\\overrightarrow{B_1C_1} = \\overrightarrow{AD}$, $\\overrightarrow{DD_1} = \\overrightarrow{AA_1}$, $\\overrightarrow{C_1A_1} = -\\overrightarrow{A_1C_1} = -(\\overrightarrow{AB} + \\overrightarrow{AD})$. Сумма равна $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1} - \\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{AA_1}$.

**Пример 5.** $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$ и $\\overrightarrow{AC_1} - \\overrightarrow{AC} = \\overrightarrow{CC_1}$.

## Умножение на число

Произведение $k\\vec a$ ($k \\ne 0$, $\\vec a \\ne \\vec 0$) — вектор длины $\\lvert k\\rvert \\cdot \\lvert\\vec a\\rvert$, сонаправленный с $\\vec a$ при $k > 0$ и противоположно направленный при $k < 0$. Ненулевые векторы $\\vec a$, $\\vec b$ коллинеарны ровно тогда, когда $\\vec b = k\\vec a$ для некоторого числа $k$. Выполняются обычные законы: $(kl)\\vec a = k(l\\vec a)$, $(k + l)\\vec a = k\\vec a + l\\vec a$, $k(\\vec a + \\vec b) = k\\vec a + k\\vec b$.

**Пример 6.** Если $M$ — середина $BC$, то $\\overrightarrow{AM} = \\dfrac12(\\overrightarrow{AB} + \\overrightarrow{AC})$ для любой точки $A$, на плоскости или в пространстве: $\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\overrightarrow{AB} + \\dfrac12\\overrightarrow{BC} = \\overrightarrow{AB} + \\dfrac12(\\overrightarrow{AC} - \\overrightarrow{AB})$.

**Пример 7.** В кубе пусть $M$ — середина $BC_1$. Тогда $\\overrightarrow{AM} = \\overrightarrow{AB} + \\dfrac12\\overrightarrow{BC_1} = \\overrightarrow{AB} + \\dfrac12(\\overrightarrow{AD} + \\overrightarrow{AA_1})$.

**Пример 8.** Докажем, что в тетраэдре $ABCD$ выполняется $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$. Действительно, $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB}$ и $\\overrightarrow{CB} - \\overrightarrow{CD} = \\overrightarrow{DB}$, значит, обе разности совпадают. $\\blacksquare$

### Упражнения

В упражнениях 1–6 $ABCDA_1B_1C_1D_1$ — параллелепипед; в упражнении 5 — куб с ребром $2$.

1. Назовите все векторы с концами в вершинах, равные $\\overrightarrow{AA_1}$, и все векторы, противоположные $\\overrightarrow{AB}$.
2. Упростите $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CC_1}$ и $\\overrightarrow{AD} + \\overrightarrow{DD_1} - \\overrightarrow{AA_1}$.
3. Выразите $\\overrightarrow{AC_1}$, $\\overrightarrow{BD_1}$ и $\\overrightarrow{A_1C}$ через $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$.
4. $M$ — середина $A_1B_1$. Выразите $\\overrightarrow{DM}$ через $\\vec a, \\vec b, \\vec c$.
5. В кубе с ребром $2$ найдите $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD}\\rvert$, $\\lvert\\overrightarrow{AB} - \\overrightarrow{AD}\\rvert$ и $\\lvert\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA_1}\\rvert$.
6. Коллинеарны ли векторы $\\overrightarrow{AB}$ и $\\overrightarrow{C_1D_1}$? А $\\overrightarrow{AC}$ и $\\overrightarrow{A_1C_1}$? А $\\overrightarrow{AB_1}$ и $\\overrightarrow{DC_1}$?
7. Докажите, что для любых точек $A$, $B$, $C$, $D$: $\\overrightarrow{AB} + \\overrightarrow{CD} = \\overrightarrow{AD} + \\overrightarrow{CB}$.
8. $M$ и $N$ — середины рёбер $AB$ и $CD$ тетраэдра. Докажите, что $\\overrightarrow{MN} = \\dfrac12(\\overrightarrow{AD} + \\overrightarrow{BC})$.

### Ответы

1. $\\overrightarrow{BB_1}, \\overrightarrow{CC_1}, \\overrightarrow{DD_1}$; $\\overrightarrow{BA}, \\overrightarrow{CD}, \\overrightarrow{B_1A_1}, \\overrightarrow{C_1D_1}$. 2. $\\overrightarrow{AC_1}$; $\\overrightarrow{AD_1} - \\overrightarrow{AA_1} = \\overrightarrow{A_1D_1} = \\overrightarrow{AD}$. 3. $\\vec a + \\vec b + \\vec c$; $-\\vec a + \\vec b + \\vec c$; $\\vec a + \\vec b - \\vec c$. 4. $\\overrightarrow{DM} = \\overrightarrow{DA} + \\overrightarrow{AA_1} + \\overrightarrow{A_1M} = -\\vec b + \\vec c + \\dfrac12\\vec a$. 5. $2\\sqrt2$, $2\\sqrt2$, $2\\sqrt3$. 6. Да ($\\overrightarrow{C_1D_1} = -\\overrightarrow{AB}$); да (равны); да ($\\overrightarrow{AB_1} = \\overrightarrow{DC_1}$). 7. $\\overrightarrow{AB} - \\overrightarrow{AD} = \\overrightarrow{DB} = \\overrightarrow{CB} - \\overrightarrow{CD}$. 8. $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}$ и $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}$; складывая, $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec 0$ и $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec 0$, поэтому $2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}$.`,
      },
      [
        q(t("In the parallelogram ABCD the vectors AB and DC are…", "ABCD զուգահեռագծում AB և DC վեկտորները…", "В параллелограмме ABCD векторы AB и DC…"), [t("equal", "հավասար են", "равны"), t("opposite", "հակադիր են", "противоположны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны")], 0),
        q(t("AB + BC + CD equals…", "AB + BC + CD-ն հավասար է…", "AB + BC + CD равно…"), [t("AD", "AD", "AD"), t("DA", "DA", "DA"), t("AC", "AC", "AC")], 0),
        q(t("In a cube with edge 1 the length of AB + AD + AA₁ is…", "1 կողով խորանարդում AB + AD + AA₁ վեկտորի երկարությունը…", "В кубе с ребром 1 длина вектора AB + AD + AA₁ равна…"), [t("3", "3", "3"), t("√2", "√2", "√2"), t("√3", "√3", "√3")], 2),
        q(t("Two non-zero vectors are collinear if they…", "Երկու ոչ զրոյական վեկտորներ համագիծ են, եթե…", "Два ненулевых вектора коллинеарны, если они…"), [t("have equal lengths", "ունեն հավասար երկարություններ", "имеют равные длины"), t("lie on one line or on parallel lines", "ընկած են մեկ ուղղի կամ զուգահեռ ուղիղների վրա", "лежат на одной прямой или на параллельных прямых"), t("lie in one plane", "ընկած են մեկ հարթության մեջ", "лежат в одной плоскости")], 1),
        q(t("AB − AC equals…", "AB − AC-ն հավասար է…", "AB − AC равно…"), [t("BC", "BC", "BC"), t("CB", "CB", "CB"), t("AC", "AC", "AC")], 1),
        q(t("In the cube ABCDA₁B₁C₁D₁ the vector A₁C₁ equals…", "ABCDA₁B₁C₁D₁ խորանարդում A₁C₁ վեկտորը հավասար է…", "В кубе ABCDA₁B₁C₁D₁ вектор A₁C₁ равен…"), [t("AC", "AC", "AC"), t("AC₁", "AC₁", "AC₁"), t("CA", "CA", "CA")], 0),
      ],
    ),
    lesson(
      "coplanar-vectors",
      ["Coplanar vectors", "Համահարթ վեկտորներ", "Компланарные векторы"],
      {
        en: ["Define coplanar vectors and recognise coplanar and non-coplanar triples in a cube or parallelepiped", "Prove the criterion: c is coplanar with non-collinear a and b exactly when c = xa + yb, and find x and y", "Use the criterion to decide whether four points lie in one plane and apply the parallelepiped rule to three non-coplanar vectors"],
        hy: ["Սահմանել համահարթ վեկտորները և խորանարդում կամ զուգահեռանիստում ճանաչել համահարթ և ոչ համահարթ եռյակները", "Ապացուցել հայտանիշը․ c-ն համահարթ է ոչ համագիծ a-ին և b-ին ճիշտ այն դեպքում, երբ c = xa + yb, և գտնել x-ը և y-ը", "Հայտանիշով որոշել, թե արդյոք չորս կետ ընկած են մեկ հարթության մեջ, և կիրառել զուգահեռանիստի կանոնն երեք ոչ համահարթ վեկտորների համար"],
        ru: ["Определять компланарные векторы и распознавать компланарные и некомпланарные тройки в кубе или параллелепипеде", "Доказывать признак: c компланарен неколлинеарным a и b ровно тогда, когда c = xa + yb, и находить x и y", "С помощью признака выяснять, лежат ли четыре точки в одной плоскости, и применять правило параллелепипеда к трём некомпланарным векторам"],
      },
      {
        en: `## Definition

Vectors are **coplanar** if, when laid off from one point, they lie in one plane. Equivalently, there is a plane parallel to all of them. Any two vectors are coplanar; three vectors two of which are collinear are coplanar. Three vectors that are not coplanar are called **non-coplanar**.

**Example 1.** In the cube $ABCDA_1B_1C_1D_1$ the vectors $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{A_1C_1}$ are coplanar: $\\overrightarrow{A_1C_1} = \\overrightarrow{AC}$ lies in the plane $ABD$ together with the other two. The vectors $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$ are non-coplanar: they lie along three edges from one vertex, which are not in one plane. The vectors $\\overrightarrow{AB}$, $\\overrightarrow{B_1C_1}$, $\\overrightarrow{DD_1}$ equal $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$, so they are non-coplanar too.

## Criterion of coplanarity

**Theorem.** Let $\\vec a$ and $\\vec b$ be non-collinear. A vector $\\vec c$ is coplanar with $\\vec a$ and $\\vec b$ if and only if $\\vec c = x\\vec a + y\\vec b$ for some numbers $x$, $y$; these numbers are unique.

*Proof.* Lay off $\\overrightarrow{OA} = \\vec a$, $\\overrightarrow{OB} = \\vec b$, $\\overrightarrow{OC} = \\vec c$. If $\\vec c = x\\vec a + y\\vec b$, then $\\overrightarrow{OC}$ is the diagonal of a parallelogram with sides $x\\vec a$ and $y\\vec b$ lying in the plane $OAB$, so $C$ is in that plane and the vectors are coplanar. Conversely, if the vectors are coplanar, $C$ lies in the plane $OAB$, and by the plane theorem on decomposition in two non-collinear vectors $\\overrightarrow{OC} = x\\overrightarrow{OA} + y\\overrightarrow{OB}$ with unique $x$, $y$. $\\blacksquare$

**Example 2.** Let $\\vec a$, $\\vec b$ be non-collinear and $\\vec p = \\vec a + 2\\vec b$, $\\vec q = 2\\vec a - \\vec b$, $\\vec r = 4\\vec a + 3\\vec b$. The three vectors are coplanar, since each is a combination of $\\vec a$ and $\\vec b$. Express $\\vec r$ through $\\vec p$ and $\\vec q$: from $\\vec r = x\\vec p + y\\vec q$ we get $x + 2y = 4$ and $2x - y = 3$, so $y = 2x - 3$, $5x - 6 = 4$, $x = 2$, $y = 1$. Check: $2\\vec p + \\vec q = 2\\vec a + 4\\vec b + 2\\vec a - \\vec b = 4\\vec a + 3\\vec b$.

**Example 3.** In the cube let $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$. Are $\\overrightarrow{AB_1}$, $\\overrightarrow{AD_1}$, $\\overrightarrow{BD}$ coplanar? $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{AD_1} = \\vec b + \\vec c$, $\\overrightarrow{BD} = \\vec b - \\vec a = \\overrightarrow{AD_1} - \\overrightarrow{AB_1}$. Yes: $\\overrightarrow{BD}$ is a combination of the other two. Geometrically, $BD \\parallel B_1D_1$, and $B_1D_1$ lies in the plane $AB_1D_1$.

**Example 4.** Are $\\overrightarrow{AC_1}$, $\\overrightarrow{AB}$, $\\overrightarrow{AD}$ coplanar? If $\\vec a + \\vec b + \\vec c = x\\vec a + y\\vec b$, then $\\vec c = (x - 1)\\vec a + (y - 1)\\vec b$ would be coplanar with $\\vec a$, $\\vec b$, which is false. So they are non-coplanar: the diagonal $AC_1$ does not lie in the base plane.

## Four points in one plane

Points $A$, $B$, $C$, $D$ (with $A$, $B$, $C$ not collinear) lie in one plane exactly when $\\overrightarrow{AD} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$.

**Example 5.** Do $A$, $B$, $C_1$, $D_1$ lie in one plane? $\\overrightarrow{AC_1} = \\vec a + \\vec b + \\vec c = \\overrightarrow{AB} + \\overrightarrow{AD_1}$, so yes: $ABC_1D_1$ is a plane figure (a rectangle, the diagonal section of the cube).

**Example 6.** Do $A$, $B_1$, $D_1$ and the midpoint $M$ of $CC_1$ lie in one plane? $\\overrightarrow{AM} = \\overrightarrow{AC} + \\dfrac12\\overrightarrow{CC_1} = \\vec a + \\vec b + \\dfrac12\\vec c$. If $\\overrightarrow{AM} = x\\overrightarrow{AB_1} + y\\overrightarrow{AD_1} = x(\\vec a + \\vec c) + y(\\vec b + \\vec c)$, comparing the coefficients of the non-coplanar $\\vec a$, $\\vec b$, $\\vec c$ (which is legitimate, see the next lesson) gives $x = 1$, $y = 1$, $x + y = \\dfrac12$: a contradiction. The four points are not coplanar.

## Parallelepiped rule

**Theorem.** If $\\vec a$, $\\vec b$, $\\vec c$ are non-coplanar and laid off from a point $O$, then $\\vec a + \\vec b + \\vec c$ is the diagonal from $O$ of the parallelepiped with edges $\\vec a$, $\\vec b$, $\\vec c$.

*Proof.* $\\vec a + \\vec b$ is the diagonal $\\overrightarrow{OC}$ of the base parallelogram, and $\\overrightarrow{OC} + \\vec c = \\overrightarrow{OC} + \\overrightarrow{CC_1} = \\overrightarrow{OC_1}$. $\\blacksquare$

**Example 7.** The vectors $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{BC_1} = \\vec b + \\vec c$, $\\overrightarrow{CA_1} = -\\vec a - \\vec b + \\vec c$ in the cube are non-coplanar: $\\overrightarrow{CA_1} = x\\overrightarrow{AB_1} + y\\overrightarrow{BC_1}$ would need $x = -1$, $y = -1$ and $x + y = 1$. Their sum is $3\\vec c = 3\\overrightarrow{AA_1}$.

**Example 8.** For non-coplanar $\\vec a$, $\\vec b$, $\\vec c$ the equality $x\\vec a + y\\vec b + z\\vec c = \\vec 0$ forces $x = y = z = 0$. Indeed, if, say, $z \\ne 0$, then $\\vec c = -\\dfrac xz\\vec a - \\dfrac yz\\vec b$ would be coplanar with $\\vec a$ and $\\vec b$; so $z = 0$, and then $x\\vec a + y\\vec b = \\vec 0$ with non-collinear $\\vec a$, $\\vec b$ gives $x = y = 0$.

### Exercises

In exercises 1, 3, 4, 5 and 6, $ABCDA_1B_1C_1D_1$ is a cube and $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$.

1. Which triples are coplanar: $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AC}$; $\\overrightarrow{AB}, \\overrightarrow{DC}, \\overrightarrow{AA_1}$; $\\overrightarrow{AC}, \\overrightarrow{BD}, \\overrightarrow{AA_1}$?
2. $\\vec a$, $\\vec b$ are non-collinear, $\\vec p = \\vec a - \\vec b$, $\\vec q = 2\\vec a + \\vec b$, $\\vec r = 3\\vec a$. Express $\\vec r$ through $\\vec p$ and $\\vec q$.
3. Are $\\overrightarrow{AB_1}$, $\\overrightarrow{DC_1}$, $\\overrightarrow{BC}$ coplanar?
4. Are $\\overrightarrow{AB}$, $\\overrightarrow{A_1C_1}$, $\\overrightarrow{BD}$ coplanar?
5. Do $A$, $B_1$, $C$ and the midpoint $M$ of $DD_1$ lie in one plane?
6. $M$ is the midpoint of $AB$, $N$ the midpoint of $A_1D_1$. Are $\\overrightarrow{MN}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$ coplanar?
7. $\\vec a$, $\\vec b$, $\\vec c$ are non-coplanar. Prove that $\\vec a + \\vec b$, $\\vec b + \\vec c$, $\\vec c + \\vec a$ are non-coplanar.
8. Prove that if $\\vec a$, $\\vec b$, $\\vec c$ are non-coplanar, then no two of them are collinear.

### Answers

1. Yes ($\\overrightarrow{AC} = \\vec a + \\vec b$); yes (two of them are collinear); no (if $\\vec c = x(\\vec a + \\vec b) + y(\\vec b - \\vec a)$, then $\\vec c$ would be coplanar with $\\vec a$, $\\vec b$). 2. $x + 2y = 3$, $-x + y = 0$, so $x = y = 1$: $\\vec r = \\vec p + \\vec q$. 3. Yes: $\\overrightarrow{AB_1} = \\overrightarrow{DC_1}$. 4. Yes: $\\overrightarrow{A_1C_1} = \\vec a + \\vec b$ and $\\overrightarrow{BD} = \\vec b - \\vec a$ both lie in the span of $\\vec a$, $\\vec b$. 5. $\\overrightarrow{AM} = \\vec b + \\dfrac12\\vec c$, $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{AC} = \\vec a + \\vec b$; $x + y = 0$, $y = 1$, $x = \\dfrac12$ is impossible, so no. 6. $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AA_1} + \\overrightarrow{A_1N} = -\\dfrac12\\vec a + \\vec c + \\dfrac12\\vec b$; it has a non-zero $\\vec a$-component, so it is not a combination of $\\vec b$ and $\\vec c$: not coplanar. 7. If $\\vec c + \\vec a = x(\\vec a + \\vec b) + y(\\vec b + \\vec c)$, then comparing with Example 8: $x = 1$, $x + y = 0$, $y = 1$, contradiction. 8. If two were collinear, the three would be coplanar.`,
        hy: `## Սահմանում

Վեկտորները **համահարթ** են, եթե մեկ կետից տեղադրելիս ընկած են մեկ հարթության մեջ։ Համարժեքորեն՝ գոյություն ունի բոլորին զուգահեռ հարթություն։ Ցանկացած երկու վեկտոր համահարթ են, երեք վեկտոր, որոնցից երկուսը համագիծ են, համահարթ են։ Երեք վեկտոր, որոնք համահարթ չեն, կոչվում են **ոչ համահարթ**։

**Օրինակ 1։** $ABCDA_1B_1C_1D_1$ խորանարդում $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{A_1C_1}$ վեկտորները համահարթ են․ $\\overrightarrow{A_1C_1} = \\overrightarrow{AC}$-ն ընկած է $ABD$ հարթության մեջ մյուս երկուսի հետ։ $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$ վեկտորները ոչ համահարթ են․ դրանք ընկած են մեկ գագաթից դուրս եկող երեք կողերի վրա, որոնք մեկ հարթության մեջ չեն։ $\\overrightarrow{AB}$, $\\overrightarrow{B_1C_1}$, $\\overrightarrow{DD_1}$ վեկտորները հավասար են $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$-ին, ուստի նույնպես ոչ համահարթ են։

## Համահարթության հայտանիշ

**Թեորեմ։** $\\vec a$-ն և $\\vec b$-ն լինեն ոչ համագիծ։ $\\vec c$ վեկտորը համահարթ է $\\vec a$-ին և $\\vec b$-ին այն և միայն այն դեպքում, երբ $\\vec c = x\\vec a + y\\vec b$ ինչ-որ $x$, $y$ թվերի համար, այդ թվերը միակն են։

*Ապացույց։* Տեղադրենք $\\overrightarrow{OA} = \\vec a$, $\\overrightarrow{OB} = \\vec b$, $\\overrightarrow{OC} = \\vec c$։ Եթե $\\vec c = x\\vec a + y\\vec b$, ապա $\\overrightarrow{OC}$-ն $x\\vec a$ և $y\\vec b$ կողմերով զուգահեռագծի անկյունագիծն է, որն ընկած է $OAB$ հարթության մեջ, ուստի $C$-ն այդ հարթության մեջ է, և վեկտորները համահարթ են։ Հակառակը, եթե վեկտորները համահարթ են, $C$-ն ընկած է $OAB$ հարթության մեջ, և երկու ոչ համագիծ վեկտորներով վերլուծման հարթաչափական թեորեմով $\\overrightarrow{OC} = x\\overrightarrow{OA} + y\\overrightarrow{OB}$ միակ $x$, $y$-ով։ $\\blacksquare$

**Օրինակ 2։** $\\vec a$, $\\vec b$-ն լինեն ոչ համագիծ, և $\\vec p = \\vec a + 2\\vec b$, $\\vec q = 2\\vec a - \\vec b$, $\\vec r = 4\\vec a + 3\\vec b$։ Երեք վեկտորները համահարթ են, քանի որ յուրաքանչյուրը $\\vec a$-ի և $\\vec b$-ի համակցություն է։ Արտահայտենք $\\vec r$-ը $\\vec p$-ով և $\\vec q$-ով․ $\\vec r = x\\vec p + y\\vec q$-ից ստանում ենք $x + 2y = 4$ և $2x - y = 3$, ուստի $y = 2x - 3$, $5x - 6 = 4$, $x = 2$, $y = 1$։ Ստուգում․ $2\\vec p + \\vec q = 2\\vec a + 4\\vec b + 2\\vec a - \\vec b = 4\\vec a + 3\\vec b$։

**Օրինակ 3։** Խորանարդում $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$։ Համահա՞րթ են արդյոք $\\overrightarrow{AB_1}$, $\\overrightarrow{AD_1}$, $\\overrightarrow{BD}$ վեկտորները։ $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{AD_1} = \\vec b + \\vec c$, $\\overrightarrow{BD} = \\vec b - \\vec a = \\overrightarrow{AD_1} - \\overrightarrow{AB_1}$։ Այո․ $\\overrightarrow{BD}$-ն մյուս երկուսի համակցությունն է։ Երկրաչափորեն՝ $BD \\parallel B_1D_1$, իսկ $B_1D_1$-ն ընկած է $AB_1D_1$ հարթության մեջ։

**Օրինակ 4։** Համահա՞րթ են արդյոք $\\overrightarrow{AC_1}$, $\\overrightarrow{AB}$, $\\overrightarrow{AD}$-ն։ Եթե $\\vec a + \\vec b + \\vec c = x\\vec a + y\\vec b$, ապա $\\vec c = (x - 1)\\vec a + (y - 1)\\vec b$-ն համահարթ կլիներ $\\vec a$-ին, $\\vec b$-ին, ինչը սխալ է։ Ուրեմն դրանք ոչ համահարթ են․ $AC_1$ անկյունագիծը հիմքի հարթության մեջ չէ։

## Չորս կետ մեկ հարթության մեջ

$A$, $B$, $C$, $D$ կետերը ($A$, $B$, $C$-ն ոչ համագիծ) ընկած են մեկ հարթության մեջ ճիշտ այն դեպքում, երբ $\\overrightarrow{AD} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$։

**Օրինակ 5։** Մեկ հարթությա՞ն մեջ են արդյոք $A$, $B$, $C_1$, $D_1$ կետերը։ $\\overrightarrow{AC_1} = \\vec a + \\vec b + \\vec c = \\overrightarrow{AB} + \\overrightarrow{AD_1}$, ուստի այո․ $ABC_1D_1$-ը հարթ պատկեր է (ուղղանկյուն, խորանարդի անկյունագծային հատույթը)։

**Օրինակ 6։** Մեկ հարթությա՞ն մեջ են արդյոք $A$, $B_1$, $D_1$ կետերը և $CC_1$-ի $M$ միջնակետը։ $\\overrightarrow{AM} = \\overrightarrow{AC} + \\dfrac12\\overrightarrow{CC_1} = \\vec a + \\vec b + \\dfrac12\\vec c$։ Եթե $\\overrightarrow{AM} = x\\overrightarrow{AB_1} + y\\overrightarrow{AD_1} = x(\\vec a + \\vec c) + y(\\vec b + \\vec c)$, ապա ոչ համահարթ $\\vec a$, $\\vec b$, $\\vec c$-ի գործակիցների համեմատումը (որն օրինական է, տես հաջորդ դասը) տալիս է $x = 1$, $y = 1$, $x + y = \\dfrac12$․ հակասություն։ Չորս կետերը համահարթ չեն։

## Զուգահեռանիստի կանոն

**Թեորեմ։** Եթե $\\vec a$, $\\vec b$, $\\vec c$-ն ոչ համահարթ են և տեղադրված են $O$ կետից, ապա $\\vec a + \\vec b + \\vec c$-ն $\\vec a$, $\\vec b$, $\\vec c$ կողերով զուգահեռանիստի՝ $O$-ից տարված անկյունագիծն է։

*Ապացույց։* $\\vec a + \\vec b$-ն հիմքի զուգահեռագծի $\\overrightarrow{OC}$ անկյունագիծն է, և $\\overrightarrow{OC} + \\vec c = \\overrightarrow{OC} + \\overrightarrow{CC_1} = \\overrightarrow{OC_1}$։ $\\blacksquare$

**Օրինակ 7։** Խորանարդի $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{BC_1} = \\vec b + \\vec c$, $\\overrightarrow{CA_1} = -\\vec a - \\vec b + \\vec c$ վեկտորները ոչ համահարթ են․ $\\overrightarrow{CA_1} = x\\overrightarrow{AB_1} + y\\overrightarrow{BC_1}$-ի համար կպահանջվեր $x = -1$, $y = -1$ և $x + y = 1$։ Դրանց գումարը $3\\vec c = 3\\overrightarrow{AA_1}$ է։

**Օրինակ 8։** Ոչ համահարթ $\\vec a$, $\\vec b$, $\\vec c$-ի համար $x\\vec a + y\\vec b + z\\vec c = \\vec 0$ հավասարությունից հետևում է $x = y = z = 0$։ Իրոք, եթե, ասենք, $z \\ne 0$, ապա $\\vec c = -\\dfrac xz\\vec a - \\dfrac yz\\vec b$-ն համահարթ կլիներ $\\vec a$-ին և $\\vec b$-ին, ուստի $z = 0$, իսկ այնուհետև $x\\vec a + y\\vec b = \\vec 0$-ն ոչ համագիծ $\\vec a$, $\\vec b$-ի դեպքում տալիս է $x = y = 0$։

### Վարժություններ

1, 3, 4, 5 և 6 վարժություններում $ABCDA_1B_1C_1D_1$-ը խորանարդ է, $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$։

1. Ո՞ր եռյակներն են համահարթ․ $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AC}$, $\\overrightarrow{AB}, \\overrightarrow{DC}, \\overrightarrow{AA_1}$, $\\overrightarrow{AC}, \\overrightarrow{BD}, \\overrightarrow{AA_1}$։
2. $\\vec a$, $\\vec b$-ն ոչ համագիծ են, $\\vec p = \\vec a - \\vec b$, $\\vec q = 2\\vec a + \\vec b$, $\\vec r = 3\\vec a$։ Արտահայտեք $\\vec r$-ը $\\vec p$-ով և $\\vec q$-ով։
3. Համահա՞րթ են արդյոք $\\overrightarrow{AB_1}$, $\\overrightarrow{DC_1}$, $\\overrightarrow{BC}$-ն։
4. Համահա՞րթ են արդյոք $\\overrightarrow{AB}$, $\\overrightarrow{A_1C_1}$, $\\overrightarrow{BD}$-ն։
5. Մեկ հարթությա՞ն մեջ են արդյոք $A$, $B_1$, $C$ կետերը և $DD_1$-ի $M$ միջնակետը։
6. $M$-ը $AB$-ի միջնակետն է, $N$-ը՝ $A_1D_1$-ի։ Համահա՞րթ են արդյոք $\\overrightarrow{MN}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$-ը։
7. $\\vec a$, $\\vec b$, $\\vec c$-ն ոչ համահարթ են։ Ապացուցեք, որ $\\vec a + \\vec b$, $\\vec b + \\vec c$, $\\vec c + \\vec a$-ն ոչ համահարթ են։
8. Ապացուցեք, որ եթե $\\vec a$, $\\vec b$, $\\vec c$-ն ոչ համահարթ են, ապա դրանցից ոչ մի երկուսը համագիծ չեն։

### Պատասխաններ

1. Այո ($\\overrightarrow{AC} = \\vec a + \\vec b$), այո (դրանցից երկուսը համագիծ են), ոչ (եթե $\\vec c = x(\\vec a + \\vec b) + y(\\vec b - \\vec a)$, ապա $\\vec c$-ն համահարթ կլիներ $\\vec a$-ին, $\\vec b$-ին)։ 2. $x + 2y = 3$, $-x + y = 0$, ուստի $x = y = 1$․ $\\vec r = \\vec p + \\vec q$։ 3. Այո․ $\\overrightarrow{AB_1} = \\overrightarrow{DC_1}$։ 4. Այո․ $\\overrightarrow{A_1C_1} = \\vec a + \\vec b$-ն և $\\overrightarrow{BD} = \\vec b - \\vec a$-ն երկուսն էլ $\\vec a$, $\\vec b$-ի համակցություններ են։ 5. $\\overrightarrow{AM} = \\vec b + \\dfrac12\\vec c$, $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{AC} = \\vec a + \\vec b$, $x + y = 0$, $y = 1$, $x = \\dfrac12$ անհնար է, ուստի ոչ։ 6. $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AA_1} + \\overrightarrow{A_1N} = -\\dfrac12\\vec a + \\vec c + \\dfrac12\\vec b$, այն ունի ոչ զրոյական $\\vec a$-բաղադրիչ, ուստի $\\vec b$-ի և $\\vec c$-ի համակցություն չէ․ ոչ համահարթ են։ 7. Եթե $\\vec c + \\vec a = x(\\vec a + \\vec b) + y(\\vec b + \\vec c)$, ապա օրինակ 8-ի համաձայն $x = 1$, $x + y = 0$, $y = 1$՝ հակասություն։ 8. Եթե երկուսը համագիծ լինեին, երեքը համահարթ կլինեին։`,
        ru: `## Определение

Векторы **компланарны**, если при откладывании от одной точки они лежат в одной плоскости. Равносильно: существует плоскость, параллельная всем им. Любые два вектора компланарны; три вектора, два из которых коллинеарны, компланарны. Три вектора, не являющиеся компланарными, называют **некомпланарными**.

**Пример 1.** В кубе $ABCDA_1B_1C_1D_1$ векторы $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{A_1C_1}$ компланарны: $\\overrightarrow{A_1C_1} = \\overrightarrow{AC}$ лежит в плоскости $ABD$ вместе с двумя другими. Векторы $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$ некомпланарны: они лежат на трёх рёбрах из одной вершины, которые не лежат в одной плоскости. Векторы $\\overrightarrow{AB}$, $\\overrightarrow{B_1C_1}$, $\\overrightarrow{DD_1}$ равны $\\overrightarrow{AB}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$, поэтому тоже некомпланарны.

## Признак компланарности

**Теорема.** Пусть $\\vec a$ и $\\vec b$ неколлинеарны. Вектор $\\vec c$ компланарен с $\\vec a$ и $\\vec b$ тогда и только тогда, когда $\\vec c = x\\vec a + y\\vec b$ для некоторых чисел $x$, $y$; эти числа единственны.

*Доказательство.* Отложим $\\overrightarrow{OA} = \\vec a$, $\\overrightarrow{OB} = \\vec b$, $\\overrightarrow{OC} = \\vec c$. Если $\\vec c = x\\vec a + y\\vec b$, то $\\overrightarrow{OC}$ — диагональ параллелограмма со сторонами $x\\vec a$ и $y\\vec b$, лежащего в плоскости $OAB$, поэтому $C$ лежит в этой плоскости и векторы компланарны. Обратно, если векторы компланарны, $C$ лежит в плоскости $OAB$, и по планиметрической теореме о разложении по двум неколлинеарным векторам $\\overrightarrow{OC} = x\\overrightarrow{OA} + y\\overrightarrow{OB}$ с единственными $x$, $y$. $\\blacksquare$

**Пример 2.** Пусть $\\vec a$, $\\vec b$ неколлинеарны и $\\vec p = \\vec a + 2\\vec b$, $\\vec q = 2\\vec a - \\vec b$, $\\vec r = 4\\vec a + 3\\vec b$. Три вектора компланарны, так как каждый из них — комбинация $\\vec a$ и $\\vec b$. Выразим $\\vec r$ через $\\vec p$ и $\\vec q$: из $\\vec r = x\\vec p + y\\vec q$ получаем $x + 2y = 4$ и $2x - y = 3$, поэтому $y = 2x - 3$, $5x - 6 = 4$, $x = 2$, $y = 1$. Проверка: $2\\vec p + \\vec q = 2\\vec a + 4\\vec b + 2\\vec a - \\vec b = 4\\vec a + 3\\vec b$.

**Пример 3.** В кубе пусть $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$. Компланарны ли $\\overrightarrow{AB_1}$, $\\overrightarrow{AD_1}$, $\\overrightarrow{BD}$? $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{AD_1} = \\vec b + \\vec c$, $\\overrightarrow{BD} = \\vec b - \\vec a = \\overrightarrow{AD_1} - \\overrightarrow{AB_1}$. Да: $\\overrightarrow{BD}$ — комбинация двух других. Геометрически $BD \\parallel B_1D_1$, а $B_1D_1$ лежит в плоскости $AB_1D_1$.

**Пример 4.** Компланарны ли $\\overrightarrow{AC_1}$, $\\overrightarrow{AB}$, $\\overrightarrow{AD}$? Если $\\vec a + \\vec b + \\vec c = x\\vec a + y\\vec b$, то $\\vec c = (x - 1)\\vec a + (y - 1)\\vec b$ был бы компланарен с $\\vec a$, $\\vec b$, что неверно. Значит, они некомпланарны: диагональ $AC_1$ не лежит в плоскости основания.

## Четыре точки в одной плоскости

Точки $A$, $B$, $C$, $D$ (где $A$, $B$, $C$ не лежат на одной прямой) лежат в одной плоскости ровно тогда, когда $\\overrightarrow{AD} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$.

**Пример 5.** Лежат ли $A$, $B$, $C_1$, $D_1$ в одной плоскости? $\\overrightarrow{AC_1} = \\vec a + \\vec b + \\vec c = \\overrightarrow{AB} + \\overrightarrow{AD_1}$, поэтому да: $ABC_1D_1$ — плоская фигура (прямоугольник, диагональное сечение куба).

**Пример 6.** Лежат ли $A$, $B_1$, $D_1$ и середина $M$ ребра $CC_1$ в одной плоскости? $\\overrightarrow{AM} = \\overrightarrow{AC} + \\dfrac12\\overrightarrow{CC_1} = \\vec a + \\vec b + \\dfrac12\\vec c$. Если $\\overrightarrow{AM} = x\\overrightarrow{AB_1} + y\\overrightarrow{AD_1} = x(\\vec a + \\vec c) + y(\\vec b + \\vec c)$, то сравнение коэффициентов при некомпланарных $\\vec a$, $\\vec b$, $\\vec c$ (что законно, см. следующий урок) даёт $x = 1$, $y = 1$, $x + y = \\dfrac12$ — противоречие. Четыре точки не лежат в одной плоскости.

## Правило параллелепипеда

**Теорема.** Если $\\vec a$, $\\vec b$, $\\vec c$ некомпланарны и отложены от точки $O$, то $\\vec a + \\vec b + \\vec c$ — диагональ из $O$ параллелепипеда с рёбрами $\\vec a$, $\\vec b$, $\\vec c$.

*Доказательство.* $\\vec a + \\vec b$ — диагональ $\\overrightarrow{OC}$ параллелограмма основания, и $\\overrightarrow{OC} + \\vec c = \\overrightarrow{OC} + \\overrightarrow{CC_1} = \\overrightarrow{OC_1}$. $\\blacksquare$

**Пример 7.** Векторы $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{BC_1} = \\vec b + \\vec c$, $\\overrightarrow{CA_1} = -\\vec a - \\vec b + \\vec c$ в кубе некомпланарны: для $\\overrightarrow{CA_1} = x\\overrightarrow{AB_1} + y\\overrightarrow{BC_1}$ потребовалось бы $x = -1$, $y = -1$ и $x + y = 1$. Их сумма равна $3\\vec c = 3\\overrightarrow{AA_1}$.

**Пример 8.** Для некомпланарных $\\vec a$, $\\vec b$, $\\vec c$ из равенства $x\\vec a + y\\vec b + z\\vec c = \\vec 0$ следует $x = y = z = 0$. Действительно, если, скажем, $z \\ne 0$, то $\\vec c = -\\dfrac xz\\vec a - \\dfrac yz\\vec b$ был бы компланарен с $\\vec a$ и $\\vec b$; значит, $z = 0$, а тогда $x\\vec a + y\\vec b = \\vec 0$ при неколлинеарных $\\vec a$, $\\vec b$ даёт $x = y = 0$.

### Упражнения

В упражнениях 1, 3, 4, 5 и 6 $ABCDA_1B_1C_1D_1$ — куб, $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$.

1. Какие тройки компланарны: $\\overrightarrow{AB}, \\overrightarrow{AD}, \\overrightarrow{AC}$; $\\overrightarrow{AB}, \\overrightarrow{DC}, \\overrightarrow{AA_1}$; $\\overrightarrow{AC}, \\overrightarrow{BD}, \\overrightarrow{AA_1}$?
2. $\\vec a$, $\\vec b$ неколлинеарны, $\\vec p = \\vec a - \\vec b$, $\\vec q = 2\\vec a + \\vec b$, $\\vec r = 3\\vec a$. Выразите $\\vec r$ через $\\vec p$ и $\\vec q$.
3. Компланарны ли $\\overrightarrow{AB_1}$, $\\overrightarrow{DC_1}$, $\\overrightarrow{BC}$?
4. Компланарны ли $\\overrightarrow{AB}$, $\\overrightarrow{A_1C_1}$, $\\overrightarrow{BD}$?
5. Лежат ли $A$, $B_1$, $C$ и середина $M$ ребра $DD_1$ в одной плоскости?
6. $M$ — середина $AB$, $N$ — середина $A_1D_1$. Компланарны ли $\\overrightarrow{MN}$, $\\overrightarrow{AD}$, $\\overrightarrow{AA_1}$?
7. $\\vec a$, $\\vec b$, $\\vec c$ некомпланарны. Докажите, что $\\vec a + \\vec b$, $\\vec b + \\vec c$, $\\vec c + \\vec a$ некомпланарны.
8. Докажите, что если $\\vec a$, $\\vec b$, $\\vec c$ некомпланарны, то никакие два из них не коллинеарны.

### Ответы

1. Да ($\\overrightarrow{AC} = \\vec a + \\vec b$); да (два из них коллинеарны); нет (если $\\vec c = x(\\vec a + \\vec b) + y(\\vec b - \\vec a)$, то $\\vec c$ был бы компланарен с $\\vec a$, $\\vec b$). 2. $x + 2y = 3$, $-x + y = 0$, поэтому $x = y = 1$: $\\vec r = \\vec p + \\vec q$. 3. Да: $\\overrightarrow{AB_1} = \\overrightarrow{DC_1}$. 4. Да: $\\overrightarrow{A_1C_1} = \\vec a + \\vec b$ и $\\overrightarrow{BD} = \\vec b - \\vec a$ — оба комбинации $\\vec a$, $\\vec b$. 5. $\\overrightarrow{AM} = \\vec b + \\dfrac12\\vec c$, $\\overrightarrow{AB_1} = \\vec a + \\vec c$, $\\overrightarrow{AC} = \\vec a + \\vec b$; $x + y = 0$, $y = 1$, $x = \\dfrac12$ невозможно, поэтому нет. 6. $\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AA_1} + \\overrightarrow{A_1N} = -\\dfrac12\\vec a + \\vec c + \\dfrac12\\vec b$; у него ненулевая компонента по $\\vec a$, поэтому он не является комбинацией $\\vec b$ и $\\vec c$: некомпланарны. 7. Если $\\vec c + \\vec a = x(\\vec a + \\vec b) + y(\\vec b + \\vec c)$, то по примеру 8 $x = 1$, $x + y = 0$, $y = 1$ — противоречие. 8. Если бы два были коллинеарны, три были бы компланарны.`,
      },
      [
        q(t("Three vectors are coplanar if, laid off from one point, they…", "Երեք վեկտոր համահարթ են, եթե մեկ կետից տեղադրելիս դրանք…", "Три вектора компланарны, если при откладывании от одной точки они…"), [t("lie on one line", "ընկած են մեկ ուղղի վրա", "лежат на одной прямой"), t("lie in one plane", "ընկած են մեկ հարթության մեջ", "лежат в одной плоскости"), t("have equal lengths", "ունեն հավասար երկարություններ", "имеют равные длины")], 1),
        q(t("Any two vectors are…", "Ցանկացած երկու վեկտոր…", "Любые два вектора…"), [t("always coplanar", "միշտ համահարթ են", "всегда компланарны"), t("always collinear", "միշտ համագիծ են", "всегда коллинеарны"), t("never coplanar", "երբեք համահարթ չեն", "никогда не компланарны")], 0),
        q(t("If c = 2a + 3b, then a, b, c are…", "Եթե c = 2a + 3b, ապա a, b, c-ն…", "Если c = 2a + 3b, то a, b, c…"), [t("coplanar", "համահարթ են", "компланарны"), t("non-coplanar", "ոչ համահարթ են", "некомпланарны"), t("collinear", "համագիծ են", "коллинеарны")], 0),
        q(t("In the cube ABCDA₁B₁C₁D₁ the vectors AB, AD, AA₁ are…", "ABCDA₁B₁C₁D₁ խորանարդում AB, AD, AA₁ վեկտորները…", "В кубе ABCDA₁B₁C₁D₁ векторы AB, AD, AA₁…"), [t("coplanar", "համահարթ են", "компланарны"), t("non-coplanar", "ոչ համահարթ են", "некомпланарны"), t("equal", "հավասար են", "равны")], 1),
        q(t("In the cube ABCDA₁B₁C₁D₁ the vectors AB, AD, A₁C₁ are…", "ABCDA₁B₁C₁D₁ խորանարդում AB, AD, A₁C₁ վեկտորները…", "В кубе ABCDA₁B₁C₁D₁ векторы AB, AD, A₁C₁…"), [t("coplanar", "համահարթ են", "компланарны"), t("non-coplanar", "ոչ համահարթ են", "некомпланарны"), t("collinear", "համագիծ են", "коллинеарны")], 0),
        q(t("For non-coplanar a, b, c laid off from O, the vector a + b + c is…", "O-ից տեղադրված ոչ համահարթ a, b, c-ի համար a + b + c վեկտորը…", "Для некомпланарных a, b, c, отложенных от O, вектор a + b + c —"), [t("the diagonal of the parallelepiped with edges a, b, c", "a, b, c կողերով զուգահեռանիստի անկյունագիծն է", "диагональ параллелепипеда с рёбрами a, b, c"), t("the zero vector", "զրոյական վեկտորն է", "нулевой вектор"), t("the diagonal of the parallelogram on a and b", "a-ի և b-ի վրա կառուցված զուգահեռագծի անկյունագիծն է", "диагональ параллелограмма на a и b")], 0),
      ],
    ),
    lesson(
      "vector-decomposition",
      ["Decomposition in three non-coplanar vectors", "Վերլուծում երեք ոչ համահարթ վեկտորով", "Разложение по трём некомпланарным векторам"],
      {
        en: ["Prove that every vector in space is uniquely decomposed as xa + yb + zc in three non-coplanar vectors", "Decompose vectors of a parallelepiped, cube or tetrahedron in the edge vectors and operate with decompositions coefficient by coefficient", "Use decompositions to prove that points are collinear, that segments bisect each other, and to compute lengths in a cube"],
        hy: ["Ապացուցել, որ տարածության ցանկացած վեկտոր միակ ձևով վերլուծվում է xa + yb + zc տեսքով երեք ոչ համահարթ վեկտորով", "Վերլուծել զուգահեռանիստի, խորանարդի կամ քառանիստի վեկտորները կողերի վեկտորներով և վերլուծությունների հետ գործել գործակից առ գործակից", "Վերլուծություններով ապացուցել կետերի համագիծ լինելը, հատվածների միմյանց կիսելը և հաշվել երկարություններ խորանարդում"],
        ru: ["Доказывать, что любой вектор пространства единственным образом разлагается в виде xa + yb + zc по трём некомпланарным векторам", "Разлагать векторы параллелепипеда, куба или тетраэдра по векторам рёбер и действовать с разложениями покоэффициентно", "С помощью разложений доказывать, что точки лежат на одной прямой, что отрезки делятся пополам, и вычислять длины в кубе"],
      },
      {
        en: `## The decomposition theorem

**Theorem.** Let $\\vec a$, $\\vec b$, $\\vec c$ be non-coplanar. Every vector $\\vec p$ can be written as
$$\\vec p = x\\vec a + y\\vec b + z\\vec c,$$
and the numbers $x$, $y$, $z$ (the **coefficients of the decomposition**) are unique.

*Proof.* Lay off $\\overrightarrow{OA} = \\vec a$, $\\overrightarrow{OB} = \\vec b$, $\\overrightarrow{OC} = \\vec c$, $\\overrightarrow{OP} = \\vec p$. The line $OC$ is not parallel to the plane $OAB$ (otherwise the three vectors would be coplanar), so the line through $P$ parallel to $OC$ meets the plane $OAB$ at a point $P_1$. Then $\\overrightarrow{OP_1} = x\\vec a + y\\vec b$ by the plane decomposition theorem, and $\\overrightarrow{P_1P}$ is collinear with $\\vec c$, so $\\overrightarrow{P_1P} = z\\vec c$. Hence $\\vec p = \\overrightarrow{OP_1} + \\overrightarrow{P_1P} = x\\vec a + y\\vec b + z\\vec c$. If also $\\vec p = x'\\vec a + y'\\vec b + z'\\vec c$, subtracting gives $(x - x')\\vec a + (y - y')\\vec b + (z - z')\\vec c = \\vec 0$, and for non-coplanar vectors this forces all three coefficients to be zero. $\\blacksquare$

Because of uniqueness, two decompositions can be **compared coefficient by coefficient**, and sums and multiples are computed coefficient by coefficient.

**Example 1.** $\\vec p = 2\\vec a - \\vec b + \\vec c$, $\\vec q = \\vec a + 3\\vec b - 2\\vec c$. Then $\\vec p + \\vec q = 3\\vec a + 2\\vec b - \\vec c$ and $2\\vec p - \\vec q = 3\\vec a - 5\\vec b + 4\\vec c$.

**Example 2.** Decompose $2\\vec a - 3\\vec b + \\vec c$ in $\\vec a + \\vec b$, $\\vec b + \\vec c$, $\\vec c + \\vec a$ (non-coplanar by the previous lesson). From $x(\\vec a + \\vec b) + y(\\vec b + \\vec c) + z(\\vec c + \\vec a)$ we compare coefficients: $x + z = 2$, $x + y = -3$, $y + z = 1$. Adding, $x + y + z = 0$, so $z = 3$, $x = -1$, $y = -2$.

## Vectors of a parallelepiped

Let $ABCDA_1B_1C_1D_1$ be a parallelepiped and $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$. Every vector between vertices is a combination of $\\vec a$, $\\vec b$, $\\vec c$ with coefficients $0$, $\\pm1$.

**Example 3.** The four diagonals: $\\overrightarrow{AC_1} = \\vec a + \\vec b + \\vec c$, $\\overrightarrow{BD_1} = -\\vec a + \\vec b + \\vec c$, $\\overrightarrow{CA_1} = -\\vec a - \\vec b + \\vec c$, $\\overrightarrow{DB_1} = \\vec a - \\vec b + \\vec c$.

**Example 4.** The diagonals of a parallelepiped meet at one point and bisect each other. Let $O$ be the midpoint of $AC_1$: $\\overrightarrow{AO} = \\dfrac12(\\vec a + \\vec b + \\vec c)$. The midpoint of $BD_1$: $\\overrightarrow{AB} + \\dfrac12\\overrightarrow{BD_1} = \\vec a + \\dfrac12(-\\vec a + \\vec b + \\vec c) = \\dfrac12(\\vec a + \\vec b + \\vec c)$, the same point. The midpoints of $CA_1$ and $DB_1$ are computed the same way: $\\vec a + \\vec b + \\dfrac12(-\\vec a - \\vec b + \\vec c)$ and $\\vec b + \\dfrac12(\\vec a - \\vec b + \\vec c)$ both equal $\\dfrac12(\\vec a + \\vec b + \\vec c)$. $\\blacksquare$ The point $O$ is the **centre** of the parallelepiped.

**Example 5.** Let $G$ be the centroid of the triangle $A_1BD$. Then $\\overrightarrow{AG} = \\dfrac13(\\overrightarrow{AA_1} + \\overrightarrow{AB} + \\overrightarrow{AD}) = \\dfrac13\\overrightarrow{AC_1}$, so $G$ lies on the diagonal $AC_1$ and $AG : GC_1 = 1 : 2$. In a cube this is exactly the point where $AC_1$ pierces the plane $A_1BD$ perpendicularly.

**Example 6.** $M$ lies on $AA_1$ with $AM : MA_1 = 1 : 2$ and $N$ lies on $CC_1$ with $C_1N : NC = 1 : 2$. Prove that $MN$ passes through the centre $O$. $\\overrightarrow{AM} = \\dfrac13\\vec c$, $\\overrightarrow{AN} = \\vec a + \\vec b + \\dfrac23\\vec c$, so $\\overrightarrow{MN} = \\vec a + \\vec b + \\dfrac13\\vec c$ and $\\overrightarrow{MO} = \\overrightarrow{AO} - \\overrightarrow{AM} = \\dfrac12\\vec a + \\dfrac12\\vec b + \\dfrac16\\vec c = \\dfrac12\\overrightarrow{MN}$. The vectors are collinear from the common point $M$, so $O$ is the midpoint of $MN$. $\\blacksquare$

**Example 7.** In the cube with edge $2$ find the distance from $A$ to the midpoint $M$ of $B_1C_1$. $\\overrightarrow{AM} = \\vec a + \\dfrac12\\vec b + \\vec c$: the vector is the diagonal of a rectangular box with edges $2$, $1$, $2$ along the three perpendicular edge directions, so $AM = \\sqrt{4 + 1 + 4} = 3$.

## The centroid of a tetrahedron

**Example 8.** Let $K$ be the centroid of the face $BCD$ of the tetrahedron $ABCD$ and $M$ the midpoint of $CD$. Then $\\overrightarrow{BK} = \\dfrac23\\overrightarrow{BM} = \\dfrac13(\\overrightarrow{BC} + \\overrightarrow{BD})$ and
$$\\overrightarrow{AK} = \\overrightarrow{AB} + \\dfrac13(\\overrightarrow{AC} - \\overrightarrow{AB} + \\overrightarrow{AD} - \\overrightarrow{AB}) = \\dfrac13(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}).$$
The point $G$ with $\\overrightarrow{AG} = \\dfrac14(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}) = \\dfrac34\\overrightarrow{AK}$ lies on $AK$. By symmetry of the formula $\\overrightarrow{OG} = \\dfrac14(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD})$ in the four vertices, the same point lies on the other three segments from a vertex to the centroid of the opposite face. So the four **medians** of a tetrahedron meet at one point, the **centroid**, which divides each in the ratio $3 : 1$ from the vertex.

### Exercises

In exercises 1, 3, 4 and 6, $ABCDA_1B_1C_1D_1$ is a parallelepiped (a cube with edge $2$ in exercise 3) and $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$.

1. Decompose $\\overrightarrow{DB_1}$, $\\overrightarrow{D_1B}$ and $\\overrightarrow{B_1D}$.
2. $\\vec p = \\vec a + \\vec b - 2\\vec c$, $\\vec q = 2\\vec a - \\vec b + \\vec c$. Find $\\vec p + \\vec q$, $\\vec p - \\vec q$ and $3\\vec p + 2\\vec q$.
3. $M$ is the midpoint of $C_1D_1$ in the cube with edge $2$. Decompose $\\overrightarrow{AM}$ and find $AM$.
4. $K$ and $L$ are the midpoints of $DD_1$ and $BB_1$. Prove that $KL$ passes through the centre of the parallelepiped.
5. Find $x$, $y$, $z$ with $\\vec a + 4\\vec b + \\vec c = x(\\vec a + \\vec b) + y(\\vec b + \\vec c) + z(\\vec c + \\vec a)$.
6. $P$ lies on $AC_1$ with $AP : PC_1 = 1 : 3$. Decompose $\\overrightarrow{BP}$.
7. $M$ and $N$ are the midpoints of $AB$ and $C_1D_1$ in a parallelepiped. Prove that the centre $O$ is the midpoint of $MN$.
8. In the tetrahedron $ABCD$ let $K$ and $L$ be the centroids of the faces $BCD$ and $ACD$. Prove that $KL \\parallel AB$ and $KL = \\dfrac13 AB$.

### Answers

1. $\\vec a - \\vec b + \\vec c$; $\\vec a - \\vec b - \\vec c$; $-\\vec a + \\vec b - \\vec c$. 2. $3\\vec a - \\vec c$; $-\\vec a + 2\\vec b - 3\\vec c$; $7\\vec a + \\vec b - 4\\vec c$. 3. $\\overrightarrow{AM} = \\dfrac12\\vec a + \\vec b + \\vec c$; box with edges $1$, $2$, $2$, $AM = 3$. 4. $\\overrightarrow{AK} = \\vec b + \\dfrac12\\vec c$, $\\overrightarrow{AL} = \\vec a + \\dfrac12\\vec c$; the midpoint of $KL$ is given by $\\dfrac12(\\overrightarrow{AK} + \\overrightarrow{AL}) = \\dfrac12(\\vec a + \\vec b + \\vec c) = \\overrightarrow{AO}$. 5. $x + z = 1$, $x + y = 4$, $y + z = 1$; $x + y + z = 3$, so $y = 2$, $z = -1$, $x = 2$. 6. $\\overrightarrow{AP} = \\dfrac14(\\vec a + \\vec b + \\vec c)$, $\\overrightarrow{BP} = \\overrightarrow{AP} - \\vec a = -\\dfrac34\\vec a + \\dfrac14\\vec b + \\dfrac14\\vec c$. 7. $\\overrightarrow{AM} = \\dfrac12\\vec a$, $\\overrightarrow{AN} = \\dfrac12\\vec a + \\vec b + \\vec c$, $\\dfrac12(\\overrightarrow{AM} + \\overrightarrow{AN}) = \\dfrac12(\\vec a + \\vec b + \\vec c) = \\overrightarrow{AO}$. 8. $\\overrightarrow{AK} = \\dfrac13(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD})$, $\\overrightarrow{AL} = \\dfrac13(\\overrightarrow{AC} + \\overrightarrow{AD})$, so $\\overrightarrow{LK} = \\overrightarrow{AK} - \\overrightarrow{AL} = \\dfrac13\\overrightarrow{AB}$.`,
        hy: `## Վերլուծման թեորեմը

**Թեորեմ։** $\\vec a$, $\\vec b$, $\\vec c$-ն լինեն ոչ համահարթ։ Ցանկացած $\\vec p$ վեկտոր կարելի է գրել
$$\\vec p = x\\vec a + y\\vec b + z\\vec c$$
տեսքով, և $x$, $y$, $z$ թվերը (**վերլուծության գործակիցները**) միակն են։

*Ապացույց։* Տեղադրենք $\\overrightarrow{OA} = \\vec a$, $\\overrightarrow{OB} = \\vec b$, $\\overrightarrow{OC} = \\vec c$, $\\overrightarrow{OP} = \\vec p$։ $OC$ ուղիղը զուգահեռ չէ $OAB$ հարթությանը (այլապես երեք վեկտորները համահարթ կլինեին), ուստի $P$-ով $OC$-ին զուգահեռ ուղիղը $OAB$ հարթությունը հատում է $P_1$ կետում։ Այդ դեպքում հարթաչափական վերլուծման թեորեմով $\\overrightarrow{OP_1} = x\\vec a + y\\vec b$, իսկ $\\overrightarrow{P_1P}$-ը համագիծ է $\\vec c$-ին, ուստի $\\overrightarrow{P_1P} = z\\vec c$։ Հետևաբար $\\vec p = \\overrightarrow{OP_1} + \\overrightarrow{P_1P} = x\\vec a + y\\vec b + z\\vec c$։ Եթե նաև $\\vec p = x'\\vec a + y'\\vec b + z'\\vec c$, հանելով ստանում ենք $(x - x')\\vec a + (y - y')\\vec b + (z - z')\\vec c = \\vec 0$, իսկ ոչ համահարթ վեկտորների համար սա պահանջում է, որ երեք գործակիցներն էլ զրո լինեն։ $\\blacksquare$

Միակության շնորհիվ երկու վերլուծություն կարելի է **համեմատել գործակից առ գործակից**, իսկ գումարներն ու արտադրյալները թվով հաշվվում են գործակից առ գործակից։

**Օրինակ 1։** $\\vec p = 2\\vec a - \\vec b + \\vec c$, $\\vec q = \\vec a + 3\\vec b - 2\\vec c$։ Այդ դեպքում $\\vec p + \\vec q = 3\\vec a + 2\\vec b - \\vec c$ և $2\\vec p - \\vec q = 3\\vec a - 5\\vec b + 4\\vec c$։

**Օրինակ 2։** Վերլուծենք $2\\vec a - 3\\vec b + \\vec c$-ն $\\vec a + \\vec b$, $\\vec b + \\vec c$, $\\vec c + \\vec a$ վեկտորներով (նախորդ դասի համաձայն ոչ համահարթ)։ $x(\\vec a + \\vec b) + y(\\vec b + \\vec c) + z(\\vec c + \\vec a)$-ից համեմատում ենք գործակիցները․ $x + z = 2$, $x + y = -3$, $y + z = 1$։ Գումարելով՝ $x + y + z = 0$, ուստի $z = 3$, $x = -1$, $y = -2$։

## Զուգահեռանիստի վեկտորները

$ABCDA_1B_1C_1D_1$-ը լինի զուգահեռանիստ, և $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$։ Գագաթների միջև ցանկացած վեկտոր $\\vec a$, $\\vec b$, $\\vec c$-ի համակցություն է $0$, $\\pm1$ գործակիցներով։

**Օրինակ 3։** Չորս անկյունագծերը․ $\\overrightarrow{AC_1} = \\vec a + \\vec b + \\vec c$, $\\overrightarrow{BD_1} = -\\vec a + \\vec b + \\vec c$, $\\overrightarrow{CA_1} = -\\vec a - \\vec b + \\vec c$, $\\overrightarrow{DB_1} = \\vec a - \\vec b + \\vec c$։

**Օրինակ 4։** Զուգահեռանիստի անկյունագծերը հատվում են մեկ կետում և այդ կետով կիսվում են։ $O$-ն լինի $AC_1$-ի միջնակետը․ $\\overrightarrow{AO} = \\dfrac12(\\vec a + \\vec b + \\vec c)$։ $BD_1$-ի միջնակետը․ $\\overrightarrow{AB} + \\dfrac12\\overrightarrow{BD_1} = \\vec a + \\dfrac12(-\\vec a + \\vec b + \\vec c) = \\dfrac12(\\vec a + \\vec b + \\vec c)$՝ նույն կետը։ $CA_1$-ի և $DB_1$-ի միջնակետերը հաշվվում են նույն կերպ․ $\\vec a + \\vec b + \\dfrac12(-\\vec a - \\vec b + \\vec c)$-ն և $\\vec b + \\dfrac12(\\vec a - \\vec b + \\vec c)$-ն երկուսն էլ հավասար են $\\dfrac12(\\vec a + \\vec b + \\vec c)$-ի։ $\\blacksquare$ $O$ կետը զուգահեռանիստի **կենտրոնն** է։

**Օրինակ 5։** $G$-ն լինի $A_1BD$ եռանկյան միջնագծերի հատման կետը։ Այդ դեպքում $\\overrightarrow{AG} = \\dfrac13(\\overrightarrow{AA_1} + \\overrightarrow{AB} + \\overrightarrow{AD}) = \\dfrac13\\overrightarrow{AC_1}$, ուստի $G$-ն ընկած է $AC_1$ անկյունագծի վրա, և $AG : GC_1 = 1 : 2$։ Խորանարդում սա հենց այն կետն է, որտեղ $AC_1$-ն ուղղահայաց հատում է $A_1BD$ հարթությունը։

**Օրինակ 6։** $M$-ը $AA_1$-ի վրա է, $AM : MA_1 = 1 : 2$, $N$-ը $CC_1$-ի վրա է, $C_1N : NC = 1 : 2$։ Ապացուցենք, որ $MN$-ն անցնում է $O$ կենտրոնով։ $\\overrightarrow{AM} = \\dfrac13\\vec c$, $\\overrightarrow{AN} = \\vec a + \\vec b + \\dfrac23\\vec c$, ուստի $\\overrightarrow{MN} = \\vec a + \\vec b + \\dfrac13\\vec c$ և $\\overrightarrow{MO} = \\overrightarrow{AO} - \\overrightarrow{AM} = \\dfrac12\\vec a + \\dfrac12\\vec b + \\dfrac16\\vec c = \\dfrac12\\overrightarrow{MN}$։ Վեկտորները համագիծ են և ունեն ընդհանուր $M$ սկիզբ, ուստի $O$-ն $MN$-ի միջնակետն է։ $\\blacksquare$

**Օրինակ 7։** $2$ կողով խորանարդում գտնենք $A$-ից $B_1C_1$-ի $M$ միջնակետի հեռավորությունը։ $\\overrightarrow{AM} = \\vec a + \\dfrac12\\vec b + \\vec c$․ վեկտորն երեք փոխուղղահայաց կողերի ուղղություններով $2$, $1$, $2$ կողերով ուղղանկյունանիստի անկյունագիծն է, ուստի $AM = \\sqrt{4 + 1 + 4} = 3$։

## Քառանիստի ծանրության կենտրոնը

**Օրինակ 8։** $K$-ն լինի $ABCD$ քառանիստի $BCD$ նիստի միջնագծերի հատման կետը, $M$-ը՝ $CD$-ի միջնակետը։ Այդ դեպքում $\\overrightarrow{BK} = \\dfrac23\\overrightarrow{BM} = \\dfrac13(\\overrightarrow{BC} + \\overrightarrow{BD})$ և
$$\\overrightarrow{AK} = \\overrightarrow{AB} + \\dfrac13(\\overrightarrow{AC} - \\overrightarrow{AB} + \\overrightarrow{AD} - \\overrightarrow{AB}) = \\dfrac13(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}).$$
$\\overrightarrow{AG} = \\dfrac14(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}) = \\dfrac34\\overrightarrow{AK}$ պայմանով $G$ կետն ընկած է $AK$-ի վրա։ $\\overrightarrow{OG} = \\dfrac14(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD})$ բանաձևի՝ չորս գագաթների նկատմամբ համաչափության շնորհիվ նույն կետն ընկած է գագաթից հանդիպակաց նիստի միջնագծերի հատման կետին տարված մյուս երեք հատվածների վրա։ Ուրեմն քառանիստի չորս **միջնագծերը** հատվում են մեկ կետում՝ **ծանրության կենտրոնում**, որը դրանցից յուրաքանչյուրը բաժանում է $3 : 1$ հարաբերությամբ՝ գագաթից հաշված։

### Վարժություններ

1, 3, 4 և 6 վարժություններում $ABCDA_1B_1C_1D_1$-ը զուգահեռանիստ է (3-րդ վարժությունում՝ $2$ կողով խորանարդ), $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$։

1. Վերլուծեք $\\overrightarrow{DB_1}$-ը, $\\overrightarrow{D_1B}$-ը և $\\overrightarrow{B_1D}$-ը։
2. $\\vec p = \\vec a + \\vec b - 2\\vec c$, $\\vec q = 2\\vec a - \\vec b + \\vec c$։ Գտեք $\\vec p + \\vec q$, $\\vec p - \\vec q$ և $3\\vec p + 2\\vec q$։
3. $M$-ը $2$ կողով խորանարդի $C_1D_1$-ի միջնակետն է։ Վերլուծեք $\\overrightarrow{AM}$-ը և գտեք $AM$-ը։
4. $K$-ն և $L$-ը $DD_1$-ի և $BB_1$-ի միջնակետերն են։ Ապացուցեք, որ $KL$-ն անցնում է զուգահեռանիստի կենտրոնով։
5. Գտեք $x$, $y$, $z$, որ $\\vec a + 4\\vec b + \\vec c = x(\\vec a + \\vec b) + y(\\vec b + \\vec c) + z(\\vec c + \\vec a)$։
6. $P$-ն $AC_1$-ի վրա է, $AP : PC_1 = 1 : 3$։ Վերլուծեք $\\overrightarrow{BP}$-ը։
7. $M$-ը և $N$-ը զուգահեռանիստի $AB$-ի և $C_1D_1$-ի միջնակետերն են։ Ապացուցեք, որ $O$ կենտրոնը $MN$-ի միջնակետն է։
8. $ABCD$ քառանիստում $K$-ն և $L$-ը $BCD$ և $ACD$ նիստերի միջնագծերի հատման կետերն են։ Ապացուցեք, որ $KL \\parallel AB$ և $KL = \\dfrac13 AB$։

### Պատասխաններ

1. $\\vec a - \\vec b + \\vec c$, $\\vec a - \\vec b - \\vec c$, $-\\vec a + \\vec b - \\vec c$։ 2. $3\\vec a - \\vec c$, $-\\vec a + 2\\vec b - 3\\vec c$, $7\\vec a + \\vec b - 4\\vec c$։ 3. $\\overrightarrow{AM} = \\dfrac12\\vec a + \\vec b + \\vec c$, $1$, $2$, $2$ կողերով ուղղանկյունանիստ, $AM = 3$։ 4. $\\overrightarrow{AK} = \\vec b + \\dfrac12\\vec c$, $\\overrightarrow{AL} = \\vec a + \\dfrac12\\vec c$, $KL$-ի միջնակետը տրվում է $\\dfrac12(\\overrightarrow{AK} + \\overrightarrow{AL}) = \\dfrac12(\\vec a + \\vec b + \\vec c) = \\overrightarrow{AO}$-ով։ 5. $x + z = 1$, $x + y = 4$, $y + z = 1$, $x + y + z = 3$, ուստի $y = 2$, $z = -1$, $x = 2$։ 6. $\\overrightarrow{AP} = \\dfrac14(\\vec a + \\vec b + \\vec c)$, $\\overrightarrow{BP} = \\overrightarrow{AP} - \\vec a = -\\dfrac34\\vec a + \\dfrac14\\vec b + \\dfrac14\\vec c$։ 7. $\\overrightarrow{AM} = \\dfrac12\\vec a$, $\\overrightarrow{AN} = \\dfrac12\\vec a + \\vec b + \\vec c$, $\\dfrac12(\\overrightarrow{AM} + \\overrightarrow{AN}) = \\dfrac12(\\vec a + \\vec b + \\vec c) = \\overrightarrow{AO}$։ 8. $\\overrightarrow{AK} = \\dfrac13(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD})$, $\\overrightarrow{AL} = \\dfrac13(\\overrightarrow{AC} + \\overrightarrow{AD})$, ուստի $\\overrightarrow{LK} = \\overrightarrow{AK} - \\overrightarrow{AL} = \\dfrac13\\overrightarrow{AB}$։`,
        ru: `## Теорема о разложении

**Теорема.** Пусть $\\vec a$, $\\vec b$, $\\vec c$ некомпланарны. Любой вектор $\\vec p$ можно записать в виде
$$\\vec p = x\\vec a + y\\vec b + z\\vec c,$$
и числа $x$, $y$, $z$ (**коэффициенты разложения**) единственны.

*Доказательство.* Отложим $\\overrightarrow{OA} = \\vec a$, $\\overrightarrow{OB} = \\vec b$, $\\overrightarrow{OC} = \\vec c$, $\\overrightarrow{OP} = \\vec p$. Прямая $OC$ не параллельна плоскости $OAB$ (иначе три вектора были бы компланарны), поэтому прямая через $P$, параллельная $OC$, пересекает плоскость $OAB$ в точке $P_1$. Тогда $\\overrightarrow{OP_1} = x\\vec a + y\\vec b$ по планиметрической теореме о разложении, а $\\overrightarrow{P_1P}$ коллинеарен $\\vec c$, поэтому $\\overrightarrow{P_1P} = z\\vec c$. Значит, $\\vec p = \\overrightarrow{OP_1} + \\overrightarrow{P_1P} = x\\vec a + y\\vec b + z\\vec c$. Если также $\\vec p = x'\\vec a + y'\\vec b + z'\\vec c$, то вычитание даёт $(x - x')\\vec a + (y - y')\\vec b + (z - z')\\vec c = \\vec 0$, а для некомпланарных векторов это требует равенства нулю всех трёх коэффициентов. $\\blacksquare$

Благодаря единственности два разложения можно **сравнивать покоэффициентно**, а суммы и произведения на число вычисляются покоэффициентно.

**Пример 1.** $\\vec p = 2\\vec a - \\vec b + \\vec c$, $\\vec q = \\vec a + 3\\vec b - 2\\vec c$. Тогда $\\vec p + \\vec q = 3\\vec a + 2\\vec b - \\vec c$ и $2\\vec p - \\vec q = 3\\vec a - 5\\vec b + 4\\vec c$.

**Пример 2.** Разложим $2\\vec a - 3\\vec b + \\vec c$ по $\\vec a + \\vec b$, $\\vec b + \\vec c$, $\\vec c + \\vec a$ (некомпланарны по предыдущему уроку). Из $x(\\vec a + \\vec b) + y(\\vec b + \\vec c) + z(\\vec c + \\vec a)$ сравниваем коэффициенты: $x + z = 2$, $x + y = -3$, $y + z = 1$. Складывая, $x + y + z = 0$, поэтому $z = 3$, $x = -1$, $y = -2$.

## Векторы параллелепипеда

Пусть $ABCDA_1B_1C_1D_1$ — параллелепипед и $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$. Любой вектор между вершинами — комбинация $\\vec a$, $\\vec b$, $\\vec c$ с коэффициентами $0$, $\\pm1$.

**Пример 3.** Четыре диагонали: $\\overrightarrow{AC_1} = \\vec a + \\vec b + \\vec c$, $\\overrightarrow{BD_1} = -\\vec a + \\vec b + \\vec c$, $\\overrightarrow{CA_1} = -\\vec a - \\vec b + \\vec c$, $\\overrightarrow{DB_1} = \\vec a - \\vec b + \\vec c$.

**Пример 4.** Диагонали параллелепипеда пересекаются в одной точке и делятся ею пополам. Пусть $O$ — середина $AC_1$: $\\overrightarrow{AO} = \\dfrac12(\\vec a + \\vec b + \\vec c)$. Середина $BD_1$: $\\overrightarrow{AB} + \\dfrac12\\overrightarrow{BD_1} = \\vec a + \\dfrac12(-\\vec a + \\vec b + \\vec c) = \\dfrac12(\\vec a + \\vec b + \\vec c)$ — та же точка. Середины $CA_1$ и $DB_1$ вычисляются так же: $\\vec a + \\vec b + \\dfrac12(-\\vec a - \\vec b + \\vec c)$ и $\\vec b + \\dfrac12(\\vec a - \\vec b + \\vec c)$ оба равны $\\dfrac12(\\vec a + \\vec b + \\vec c)$. $\\blacksquare$ Точка $O$ — **центр** параллелепипеда.

**Пример 5.** Пусть $G$ — точка пересечения медиан треугольника $A_1BD$. Тогда $\\overrightarrow{AG} = \\dfrac13(\\overrightarrow{AA_1} + \\overrightarrow{AB} + \\overrightarrow{AD}) = \\dfrac13\\overrightarrow{AC_1}$, поэтому $G$ лежит на диагонали $AC_1$ и $AG : GC_1 = 1 : 2$. В кубе это в точности точка, в которой $AC_1$ перпендикулярно пересекает плоскость $A_1BD$.

**Пример 6.** $M$ лежит на $AA_1$, причём $AM : MA_1 = 1 : 2$, а $N$ лежит на $CC_1$, причём $C_1N : NC = 1 : 2$. Докажем, что $MN$ проходит через центр $O$. $\\overrightarrow{AM} = \\dfrac13\\vec c$, $\\overrightarrow{AN} = \\vec a + \\vec b + \\dfrac23\\vec c$, поэтому $\\overrightarrow{MN} = \\vec a + \\vec b + \\dfrac13\\vec c$ и $\\overrightarrow{MO} = \\overrightarrow{AO} - \\overrightarrow{AM} = \\dfrac12\\vec a + \\dfrac12\\vec b + \\dfrac16\\vec c = \\dfrac12\\overrightarrow{MN}$. Векторы коллинеарны и имеют общее начало $M$, значит, $O$ — середина $MN$. $\\blacksquare$

**Пример 7.** В кубе с ребром $2$ найдём расстояние от $A$ до середины $M$ ребра $B_1C_1$. $\\overrightarrow{AM} = \\vec a + \\dfrac12\\vec b + \\vec c$: этот вектор — диагональ прямоугольного параллелепипеда с рёбрами $2$, $1$, $2$ вдоль трёх взаимно перпендикулярных направлений рёбер, поэтому $AM = \\sqrt{4 + 1 + 4} = 3$.

## Центр тяжести тетраэдра

**Пример 8.** Пусть $K$ — точка пересечения медиан грани $BCD$ тетраэдра $ABCD$, а $M$ — середина $CD$. Тогда $\\overrightarrow{BK} = \\dfrac23\\overrightarrow{BM} = \\dfrac13(\\overrightarrow{BC} + \\overrightarrow{BD})$ и
$$\\overrightarrow{AK} = \\overrightarrow{AB} + \\dfrac13(\\overrightarrow{AC} - \\overrightarrow{AB} + \\overrightarrow{AD} - \\overrightarrow{AB}) = \\dfrac13(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}).$$
Точка $G$ с $\\overrightarrow{AG} = \\dfrac14(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD}) = \\dfrac34\\overrightarrow{AK}$ лежит на $AK$. Из симметрии формулы $\\overrightarrow{OG} = \\dfrac14(\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD})$ относительно четырёх вершин та же точка лежит и на трёх других отрезках от вершины до точки пересечения медиан противоположной грани. Итак, четыре **медианы** тетраэдра пересекаются в одной точке — **центре тяжести**, который делит каждую из них в отношении $3 : 1$, считая от вершины.

### Упражнения

В упражнениях 1, 3, 4 и 6 $ABCDA_1B_1C_1D_1$ — параллелепипед (в упражнении 3 — куб с ребром $2$), $\\vec a = \\overrightarrow{AB}$, $\\vec b = \\overrightarrow{AD}$, $\\vec c = \\overrightarrow{AA_1}$.

1. Разложите $\\overrightarrow{DB_1}$, $\\overrightarrow{D_1B}$ и $\\overrightarrow{B_1D}$.
2. $\\vec p = \\vec a + \\vec b - 2\\vec c$, $\\vec q = 2\\vec a - \\vec b + \\vec c$. Найдите $\\vec p + \\vec q$, $\\vec p - \\vec q$ и $3\\vec p + 2\\vec q$.
3. $M$ — середина $C_1D_1$ в кубе с ребром $2$. Разложите $\\overrightarrow{AM}$ и найдите $AM$.
4. $K$ и $L$ — середины $DD_1$ и $BB_1$. Докажите, что $KL$ проходит через центр параллелепипеда.
5. Найдите $x$, $y$, $z$, для которых $\\vec a + 4\\vec b + \\vec c = x(\\vec a + \\vec b) + y(\\vec b + \\vec c) + z(\\vec c + \\vec a)$.
6. $P$ лежит на $AC_1$, причём $AP : PC_1 = 1 : 3$. Разложите $\\overrightarrow{BP}$.
7. $M$ и $N$ — середины $AB$ и $C_1D_1$ параллелепипеда. Докажите, что центр $O$ — середина $MN$.
8. В тетраэдре $ABCD$ пусть $K$ и $L$ — точки пересечения медиан граней $BCD$ и $ACD$. Докажите, что $KL \\parallel AB$ и $KL = \\dfrac13 AB$.

### Ответы

1. $\\vec a - \\vec b + \\vec c$; $\\vec a - \\vec b - \\vec c$; $-\\vec a + \\vec b - \\vec c$. 2. $3\\vec a - \\vec c$; $-\\vec a + 2\\vec b - 3\\vec c$; $7\\vec a + \\vec b - 4\\vec c$. 3. $\\overrightarrow{AM} = \\dfrac12\\vec a + \\vec b + \\vec c$; параллелепипед с рёбрами $1$, $2$, $2$, $AM = 3$. 4. $\\overrightarrow{AK} = \\vec b + \\dfrac12\\vec c$, $\\overrightarrow{AL} = \\vec a + \\dfrac12\\vec c$; середина $KL$ задаётся вектором $\\dfrac12(\\overrightarrow{AK} + \\overrightarrow{AL}) = \\dfrac12(\\vec a + \\vec b + \\vec c) = \\overrightarrow{AO}$. 5. $x + z = 1$, $x + y = 4$, $y + z = 1$; $x + y + z = 3$, поэтому $y = 2$, $z = -1$, $x = 2$. 6. $\\overrightarrow{AP} = \\dfrac14(\\vec a + \\vec b + \\vec c)$, $\\overrightarrow{BP} = \\overrightarrow{AP} - \\vec a = -\\dfrac34\\vec a + \\dfrac14\\vec b + \\dfrac14\\vec c$. 7. $\\overrightarrow{AM} = \\dfrac12\\vec a$, $\\overrightarrow{AN} = \\dfrac12\\vec a + \\vec b + \\vec c$, $\\dfrac12(\\overrightarrow{AM} + \\overrightarrow{AN}) = \\dfrac12(\\vec a + \\vec b + \\vec c) = \\overrightarrow{AO}$. 8. $\\overrightarrow{AK} = \\dfrac13(\\overrightarrow{AB} + \\overrightarrow{AC} + \\overrightarrow{AD})$, $\\overrightarrow{AL} = \\dfrac13(\\overrightarrow{AC} + \\overrightarrow{AD})$, поэтому $\\overrightarrow{LK} = \\overrightarrow{AK} - \\overrightarrow{AL} = \\dfrac13\\overrightarrow{AB}$.`,
      },
      [
        q(t("Every vector in space can be uniquely decomposed in three…", "Տարածության ցանկացած վեկտոր միակ ձևով վերլուծվում է երեք…", "Любой вектор пространства единственным образом разлагается по трём…"), [t("coplanar vectors", "համահարթ վեկտորով", "компланарным векторам"), t("non-coplanar vectors", "ոչ համահարթ վեկտորով", "некомпланарным векторам"), t("collinear vectors", "համագիծ վեկտորով", "коллинеарным векторам")], 1),
        q(t("In the parallelepiped ABCDA₁B₁C₁D₁ with a = AB, b = AD, c = AA₁ the diagonal AC₁ equals…", "ABCDA₁B₁C₁D₁ զուգահեռանիստում, որտեղ a = AB, b = AD, c = AA₁, AC₁ անկյունագիծը հավասար է…", "В параллелепипеде ABCDA₁B₁C₁D₁ с a = AB, b = AD, c = AA₁ диагональ AC₁ равна…"), [t("a + b + c", "a + b + c", "a + b + c"), t("a + b − c", "a + b − c", "a + b − c"), t("a − b + c", "a − b + c", "a − b + c")], 0),
        q(t("With the same notation, BD₁ equals…", "Նույն նշանակումներով BD₁-ը հավասար է…", "В тех же обозначениях BD₁ равен…"), [t("a + b + c", "a + b + c", "a + b + c"), t("−a + b + c", "−a + b + c", "−a + b + c"), t("a − b − c", "a − b − c", "a − b − c")], 1),
        q(t("If G is the centroid of the triangle A₁BD, then AG equals…", "Եթե G-ն A₁BD եռանկյան միջնագծերի հատման կետն է, ապա AG-ն հավասար է…", "Если G — точка пересечения медиан треугольника A₁BD, то AG равен…"), [t("½·AC₁", "½·AC₁", "½·AC₁"), t("⅓·AC₁", "⅓·AC₁", "⅓·AC₁"), t("⅔·AC₁", "⅔·AC₁", "⅔·AC₁")], 1),
        q(t("If p = 2a − b + c and q = a + b − c, then p + q equals…", "Եթե p = 2a − b + c և q = a + b − c, ապա p + q-ն հավասար է…", "Если p = 2a − b + c и q = a + b − c, то p + q равен…"), [t("3a", "3a", "3a"), t("3a + 2b", "3a + 2b", "3a + 2b"), t("a − 2b + 2c", "a − 2b + 2c", "a − 2b + 2c")], 0),
        q(t("The four diagonals of a parallelepiped…", "Զուգահեռանիստի չորս անկյունագծերը…", "Четыре диагонали параллелепипеда…"), [t("are pairwise skew", "զույգ առ զույգ խաչվող են", "попарно скрещиваются"), t("meet at one point and bisect each other", "հատվում են մեկ կետում և կիսվում են", "пересекаются в одной точке и делятся ею пополам"), t("are all parallel", "բոլորը զուգահեռ են", "все параллельны")], 1),
      ],
    ),
  ],
};
