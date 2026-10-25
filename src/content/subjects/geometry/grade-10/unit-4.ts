import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit4: UnitSeed = {
  title: t("Polyhedra", "Բազմանիստներ", "Многогранники"),
  summary: t("Prism, pyramid, truncated pyramid, regular polyhedra, surface area.", "Պրիզմա, բուրգ, հատած բուրգ, կանոնավոր բազմանիստներ, մակերևույթի մակերես։", "Призма, пирамида, усечённая пирамида, правильные многогранники, площадь поверхности."),
  lessons: [
    lesson(
      "prism",
      ["Prism and its surface", "Պրիզմա և նրա մակերևույթը", "Призма и её поверхность"],
      {
        en: ["Define a prism, its bases, lateral faces, height and diagonals; distinguish right, oblique and regular prisms", "Prove that the lateral surface area of a right prism equals the base perimeter times the height", "Compute lateral and total surface areas and diagonals of right prisms"],
        hy: ["Սահմանել պրիզման, նրա հիմքերը, կողմնային նիստերը, բարձրությունը և անկյունագծերը, տարբերել ուղիղ, թեք և կանոնավոր պրիզմաները", "Ապացուցել, որ ուղիղ պրիզմայի կողմնային մակերևույթի մակերեսը հավասար է հիմքի պարագծի և բարձրության արտադրյալին", "Հաշվել ուղիղ պրիզմաների կողմնային և լրիվ մակերևույթների մակերեսները և անկյունագծերը"],
        ru: ["Определять призму, её основания, боковые грани, высоту и диагонали; различать прямые, наклонные и правильные призмы", "Доказывать, что площадь боковой поверхности прямой призмы равна произведению периметра основания на высоту", "Вычислять площади боковой и полной поверхности и диагонали прямых призм"],
      },
      {
        en: `## Definition

Take a polygon $A_1A_2 \\dots A_n$ in a plane $\\alpha$ and an equal polygon $B_1B_2 \\dots B_n$ in a parallel plane $\\beta$ so that the segments $A_1B_1, \\dots, A_nB_n$ are parallel. The two polygons (the **bases**) together with the $n$ parallelograms $A_1A_2B_2B_1, \\dots$ (the **lateral faces**) form an $n$-gonal **prism**. The segments $A_iB_i$ are the **lateral edges**; they are all parallel and equal. The perpendicular between the base planes is the **height**. A **diagonal** joins two vertices not in one face.

A prism is **right** if its lateral edges are perpendicular to the bases; then the lateral faces are rectangles and the height equals the lateral edge. Otherwise the prism is **oblique**. A right prism with a regular polygon as base is **regular**. A parallelepiped is a quadrilateral prism with a parallelogram base.

**Example 1.** A triangular prism has $2$ bases, $3$ lateral faces, $9$ edges, $6$ vertices and no diagonals. A hexagonal prism has $8$ faces, $18$ edges, $12$ vertices; each top vertex shares a face with $3$ bottom vertices and is joined by a diagonal to the other $3$, so there are $6 \\cdot 3 = 18$ diagonals.

## Lateral surface area

The **lateral surface area** $S_{\\text{lat}}$ is the sum of the areas of the lateral faces; the **total surface area** is $S = S_{\\text{lat}} + 2S_{\\text{base}}$.

**Theorem.** The lateral surface area of a right prism equals the product of the base perimeter and the height:
$$S_{\\text{lat}} = P \\cdot h.$$

*Proof.* Each lateral face is a rectangle with one side a base edge $a_i$ and the other side the height $h$. So $S_{\\text{lat}} = a_1 h + a_2 h + \\dots + a_n h = (a_1 + \\dots + a_n)h = Ph$. $\\blacksquare$

For an oblique prism, $S_{\\text{lat}}$ equals the perimeter of a **perpendicular section** (a section by a plane perpendicular to the lateral edges) times the lateral edge.

**Example 2.** A regular triangular prism has base side $4$ and height $10$. $S_{\\text{lat}} = 12 \\cdot 10 = 120$, $S_{\\text{base}} = \\dfrac{\\sqrt3}{4} \\cdot 16 = 4\\sqrt3$, $S = 120 + 8\\sqrt3$.

**Example 3.** A right prism has a right triangle with legs $6$ and $8$ as base and lateral edge $5$. The hypotenuse is $10$, $P = 24$, $S_{\\text{lat}} = 120$, $S = 120 + 2 \\cdot 24 = 168$.

**Example 4.** A regular hexagonal prism has base side $a$ and height $h$. $S_{\\text{lat}} = 6ah$; the base area is $\\dfrac{3\\sqrt3}{2}a^2$, so $S = 6ah + 3\\sqrt3 a^2$. With $a = 2$, $h = 5$: $S = 60 + 12\\sqrt3$.

## Diagonals and sections

In a right prism a diagonal, a lateral edge and a base diagonal form a right triangle, so $d^2 = d_{\\text{base}}^2 + h^2$.

**Example 5.** In a regular quadrilateral prism (square base) with base side $3$ and height $4$, the diagonal is $\\sqrt{18 + 16} = \\sqrt{34}$. The diagonal section $ACC_1A_1$ is a rectangle $3\\sqrt2 \\times 4$ with area $12\\sqrt2$.

**Example 6.** In a regular hexagonal prism with base side $a$ and height $h$ there are two kinds of diagonals: the longer ones over the long base diagonal $2a$, $d_1 = \\sqrt{4a^2 + h^2}$, and the shorter ones over the short base diagonal $a\\sqrt3$, $d_2 = \\sqrt{3a^2 + h^2}$.

**Example 7.** The diagonal of a regular quadrilateral prism is $d = 2\\sqrt{11}$ and makes an angle of $30^\\circ$ with the base plane. Then $h = d\\sin 30^\\circ = \\sqrt{11}$, the base diagonal is $d\\cos 30^\\circ = \\sqrt{33}$, the base side is $\\dfrac{\\sqrt{66}}{2}$, and $S_{\\text{lat}} = 4 \\cdot \\dfrac{\\sqrt{66}}{2} \\cdot \\sqrt{11} = 2\\sqrt{726} = 22\\sqrt6$.

**Example 8.** In a regular triangular prism $ABCA_1B_1C_1$ with all edges $a$, the section $AB_1C$ is an isosceles triangle with $AB_1 = CB_1 = a\\sqrt2$ and $AC = a$. Its height to $AC$ is $\\sqrt{2a^2 - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt7}{2}$, so its area is $\\dfrac{a^2\\sqrt7}{4}$.

### Exercises

1. How many faces, edges, vertices and diagonals does a pentagonal prism have?
2. A regular quadrilateral prism has base side $5$ and height $12$. Find the lateral surface area, the total surface area and the diagonal.
3. A right prism has a rhombus with diagonals $6$ and $8$ as base and height $7$. Find the lateral surface area.
4. A regular triangular prism has lateral surface area $90$ and height $6$. Find the base side and the total surface area.
5. The base of a right prism is a triangle with sides $5$, $5$, $6$, the height is $4$. Find the total surface area.
6. A regular hexagonal prism has base side $2$ and height $3$. Find both kinds of diagonals.
7. The diagonal of a regular quadrilateral prism is $\\sqrt{41}$ and the base side is $2$. Find the height and the area of the diagonal section.
8. In a regular triangular prism with all edges $2$, find the area of the section $AB_1C$.

### Answers

1. $7$ faces, $15$ edges, $10$ vertices, $5 \\cdot 2 = 10$ diagonals. 2. $S_{\\text{lat}} = 20 \\cdot 12 = 240$, $S = 240 + 50 = 290$, $d = \\sqrt{25 + 25 + 144} = \\sqrt{194}$. 3. Side $5$, $P = 20$, $S_{\\text{lat}} = 140$. 4. $P = 15$, side $5$; $S = 90 + 2 \\cdot \\dfrac{25\\sqrt3}{4} = 90 + \\dfrac{25\\sqrt3}{2}$. 5. $P = 16$, $S_{\\text{lat}} = 64$; the base height to the side $6$ is $4$, $S_{\\text{base}} = 12$; $S = 88$. 6. $d_1 = \\sqrt{16 + 9} = 5$, $d_2 = \\sqrt{12 + 9} = \\sqrt{21}$. 7. $h = \\sqrt{41 - 8} = \\sqrt{33}$; section $2\\sqrt2 \\times \\sqrt{33}$, area $2\\sqrt{66}$. 8. $\\dfrac{4\\sqrt7}{4} = \\sqrt7$.`,
        hy: `## Սահմանում

Վերցնենք $\\alpha$ հարթության մեջ $A_1A_2 \\dots A_n$ բազմանկյուն և զուգահեռ $\\beta$ հարթության մեջ հավասար $B_1B_2 \\dots B_n$ բազմանկյուն այնպես, որ $A_1B_1, \\dots, A_nB_n$ հատվածները զուգահեռ լինեն։ Երկու բազմանկյունները (**հիմքերը**) $n$ զուգահեռագծերի՝ $A_1A_2B_2B_1, \\dots$ (**կողմնային նիստերի**) հետ միասին կազմում են $n$-անկյուն **պրիզմա**։ $A_iB_i$ հատվածները **կողմնային կողերն** են, դրանք բոլորը զուգահեռ և հավասար են։ Հիմքերի հարթությունների միջև ուղղահայացը **բարձրությունն** է։ **Անկյունագիծը** միացնում է մեկ նիստում չգտնվող երկու գագաթ։

Պրիզման **ուղիղ** է, եթե կողմնային կողերն ուղղահայաց են հիմքերին, այդ դեպքում կողմնային նիստերն ուղղանկյուններ են և բարձրությունը հավասար է կողմնային կողին։ Հակառակ դեպքում պրիզման **թեք** է։ Կանոնավոր բազմանկյուն հիմքով ուղիղ պրիզման **կանոնավոր** է։ Զուգահեռանիստը զուգահեռագիծ հիմքով քառանկյուն պրիզմա է։

**Օրինակ 1։** Եռանկյուն պրիզման ունի $2$ հիմք, $3$ կողմնային նիստ, $9$ կող, $6$ գագաթ և անկյունագծեր չունի։ Վեցանկյուն պրիզման ունի $8$ նիստ, $18$ կող, $12$ գագաթ, վերին յուրաքանչյուր գագաթ ընդհանուր նիստ ունի ներքևի $3$ գագաթի հետ և անկյունագծով միացված է մյուս $3$-ին, ուստի անկյունագծերը $6 \\cdot 3 = 18$ են։

## Կողմնային մակերևույթի մակերես

**Կողմնային մակերևույթի մակերեսը** $S_{\\text{կողմ}}$ կողմնային նիստերի մակերեսների գումարն է, **լրիվ մակերևույթի մակերեսը** $S = S_{\\text{կողմ}} + 2S_{\\text{հիմք}}$ է։

**Թեորեմ։** Ուղիղ պրիզմայի կողմնային մակերևույթի մակերեսը հավասար է հիմքի պարագծի և բարձրության արտադրյալին․
$$S_{\\text{կողմ}} = P \\cdot h.$$

*Ապացույց։* Յուրաքանչյուր կողմնային նիստ ուղղանկյուն է, որի մի կողմը հիմքի $a_i$ կողն է, մյուսը՝ $h$ բարձրությունը։ Ուստի $S_{\\text{կողմ}} = a_1 h + a_2 h + \\dots + a_n h = (a_1 + \\dots + a_n)h = Ph$։ $\\blacksquare$

Թեք պրիզմայի համար $S_{\\text{կողմ}}$-ը հավասար է **ուղղահայաց հատույթի** (կողմնային կողերին ուղղահայաց հարթությամբ հատույթ) պարագծի և կողմնային կողի արտադրյալին։

**Օրինակ 2։** Կանոնավոր եռանկյուն պրիզմայի հիմքի կողմը $4$ է, բարձրությունը՝ $10$։ $S_{\\text{կողմ}} = 12 \\cdot 10 = 120$, $S_{\\text{հիմք}} = \\dfrac{\\sqrt3}{4} \\cdot 16 = 4\\sqrt3$, $S = 120 + 8\\sqrt3$։

**Օրինակ 3։** Ուղիղ պրիզմայի հիմքը $6$ և $8$ էջերով ուղղանկյուն եռանկյուն է, կողմնային կողը՝ $5$։ Ներքնաձիգը $10$ է, $P = 24$, $S_{\\text{կողմ}} = 120$, $S = 120 + 2 \\cdot 24 = 168$։

**Օրինակ 4։** Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողմը $a$ է, բարձրությունը՝ $h$։ $S_{\\text{կողմ}} = 6ah$, հիմքի մակերեսը $\\dfrac{3\\sqrt3}{2}a^2$ է, ուստի $S = 6ah + 3\\sqrt3 a^2$։ $a = 2$, $h = 5$ դեպքում՝ $S = 60 + 12\\sqrt3$։

## Անկյունագծեր և հատույթներ

Ուղիղ պրիզմայում անկյունագիծը, կողմնային կողը և հիմքի անկյունագիծը կազմում են ուղղանկյուն եռանկյուն, ուստի $d^2 = d_{\\text{հիմք}}^2 + h^2$։

**Օրինակ 5։** $3$ հիմքի կողմով և $4$ բարձրությամբ կանոնավոր քառանկյուն պրիզմայում (քառակուսի հիմք) անկյունագիծը $\\sqrt{18 + 16} = \\sqrt{34}$ է։ $ACC_1A_1$ անկյունագծային հատույթը $3\\sqrt2 \\times 4$ ուղղանկյուն է $12\\sqrt2$ մակերեսով։

**Օրինակ 6։** $a$ հիմքի կողմով և $h$ բարձրությամբ կանոնավոր վեցանկյուն պրիզմայում երկու տեսակի անկյունագիծ կա․ երկարները՝ հիմքի $2a$ երկար անկյունագծի վրա, $d_1 = \\sqrt{4a^2 + h^2}$, և կարճերը՝ հիմքի $a\\sqrt3$ կարճ անկյունագծի վրա, $d_2 = \\sqrt{3a^2 + h^2}$։

**Օրինակ 7։** Կանոնավոր քառանկյուն պրիզմայի անկյունագիծը $d = 2\\sqrt{11}$ է և հիմքի հարթության հետ կազմում է $30^\\circ$ անկյուն։ Այդ դեպքում $h = d\\sin 30^\\circ = \\sqrt{11}$, հիմքի անկյունագիծը $d\\cos 30^\\circ = \\sqrt{33}$ է, հիմքի կողմը $\\dfrac{\\sqrt{66}}{2}$, և $S_{\\text{կողմ}} = 4 \\cdot \\dfrac{\\sqrt{66}}{2} \\cdot \\sqrt{11} = 2\\sqrt{726} = 22\\sqrt6$։

**Օրինակ 8։** Բոլոր կողերը $a$ ունեցող $ABCA_1B_1C_1$ կանոնավոր եռանկյուն պրիզմայում $AB_1C$ հատույթը հավասարասրուն եռանկյուն է, որտեղ $AB_1 = CB_1 = a\\sqrt2$ և $AC = a$։ $AC$-ին տարված բարձրությունը $\\sqrt{2a^2 - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt7}{2}$ է, ուստի մակերեսը $\\dfrac{a^2\\sqrt7}{4}$ է։

### Վարժություններ

1. Քանի՞ նիստ, կող, գագաթ և անկյունագիծ ունի հնգանկյուն պրիզման։
2. Կանոնավոր քառանկյուն պրիզմայի հիմքի կողմը $5$ է, բարձրությունը՝ $12$։ Գտեք կողմնային մակերևույթի մակերեսը, լրիվ մակերևույթի մակերեսը և անկյունագիծը։
3. Ուղիղ պրիզմայի հիմքը $6$ և $8$ անկյունագծերով շեղանկյուն է, բարձրությունը՝ $7$։ Գտեք կողմնային մակերևույթի մակերեսը։
4. Կանոնավոր եռանկյուն պրիզմայի կողմնային մակերևույթի մակերեսը $90$ է, բարձրությունը՝ $6$։ Գտեք հիմքի կողմը և լրիվ մակերևույթի մակերեսը։
5. Ուղիղ պրիզմայի հիմքը $5$, $5$, $6$ կողմերով եռանկյուն է, բարձրությունը՝ $4$։ Գտեք լրիվ մակերևույթի մակերեսը։
6. Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողմը $2$ է, բարձրությունը՝ $3$։ Գտեք երկու տեսակի անկյունագծերը։
7. Կանոնավոր քառանկյուն պրիզմայի անկյունագիծը $\\sqrt{41}$ է, հիմքի կողմը՝ $2$։ Գտեք բարձրությունը և անկյունագծային հատույթի մակերեսը։
8. Բոլոր կողերը $2$ ունեցող կանոնավոր եռանկյուն պրիզմայում գտեք $AB_1C$ հատույթի մակերեսը։

### Պատասխաններ

1. $7$ նիստ, $15$ կող, $10$ գագաթ, $5 \\cdot 2 = 10$ անկյունագիծ։ 2. $S_{\\text{կողմ}} = 20 \\cdot 12 = 240$, $S = 240 + 50 = 290$, $d = \\sqrt{25 + 25 + 144} = \\sqrt{194}$։ 3. Կողմը $5$, $P = 20$, $S_{\\text{կողմ}} = 140$։ 4. $P = 15$, կողմը $5$, $S = 90 + 2 \\cdot \\dfrac{25\\sqrt3}{4} = 90 + \\dfrac{25\\sqrt3}{2}$։ 5. $P = 16$, $S_{\\text{կողմ}} = 64$, հիմքի բարձրությունը $6$ կողմին $4$ է, $S_{\\text{հիմք}} = 12$, $S = 88$։ 6. $d_1 = \\sqrt{16 + 9} = 5$, $d_2 = \\sqrt{12 + 9} = \\sqrt{21}$։ 7. $h = \\sqrt{41 - 8} = \\sqrt{33}$, հատույթը $2\\sqrt2 \\times \\sqrt{33}$, մակերեսը $2\\sqrt{66}$։ 8. $\\dfrac{4\\sqrt7}{4} = \\sqrt7$։`,
        ru: `## Определение

Возьмём многоугольник $A_1A_2 \\dots A_n$ в плоскости $\\alpha$ и равный ему многоугольник $B_1B_2 \\dots B_n$ в параллельной плоскости $\\beta$ так, что отрезки $A_1B_1, \\dots, A_nB_n$ параллельны. Два многоугольника (**основания**) вместе с $n$ параллелограммами $A_1A_2B_2B_1, \\dots$ (**боковыми гранями**) образуют $n$-угольную **призму**. Отрезки $A_iB_i$ — **боковые рёбра**; все они параллельны и равны. Перпендикуляр между плоскостями оснований — **высота**. **Диагональ** соединяет две вершины, не лежащие в одной грани.

Призма **прямая**, если её боковые рёбра перпендикулярны основаниям; тогда боковые грани — прямоугольники, а высота равна боковому ребру. Иначе призма **наклонная**. Прямая призма с правильным многоугольником в основании называется **правильной**. Параллелепипед — четырёхугольная призма с параллелограммом в основании.

**Пример 1.** У треугольной призмы $2$ основания, $3$ боковые грани, $9$ рёбер, $6$ вершин и нет диагоналей. У шестиугольной призмы $8$ граней, $18$ рёбер, $12$ вершин; каждая верхняя вершина имеет общую грань с $3$ нижними вершинами и соединена диагональю с остальными $3$, значит, диагоналей $6 \\cdot 3 = 18$.

## Площадь боковой поверхности

**Площадь боковой поверхности** $S_{\\text{бок}}$ — сумма площадей боковых граней; **площадь полной поверхности** $S = S_{\\text{бок}} + 2S_{\\text{осн}}$.

**Теорема.** Площадь боковой поверхности прямой призмы равна произведению периметра основания на высоту:
$$S_{\\text{бок}} = P \\cdot h.$$

*Доказательство.* Каждая боковая грань — прямоугольник, одна сторона которого — ребро основания $a_i$, другая — высота $h$. Значит, $S_{\\text{бок}} = a_1 h + a_2 h + \\dots + a_n h = (a_1 + \\dots + a_n)h = Ph$. $\\blacksquare$

Для наклонной призмы $S_{\\text{бок}}$ равна периметру **перпендикулярного сечения** (сечения плоскостью, перпендикулярной боковым рёбрам), умноженному на боковое ребро.

**Пример 2.** Правильная треугольная призма имеет сторону основания $4$ и высоту $10$. $S_{\\text{бок}} = 12 \\cdot 10 = 120$, $S_{\\text{осн}} = \\dfrac{\\sqrt3}{4} \\cdot 16 = 4\\sqrt3$, $S = 120 + 8\\sqrt3$.

**Пример 3.** В основании прямой призмы — прямоугольный треугольник с катетами $6$ и $8$, боковое ребро $5$. Гипотенуза $10$, $P = 24$, $S_{\\text{бок}} = 120$, $S = 120 + 2 \\cdot 24 = 168$.

**Пример 4.** Правильная шестиугольная призма имеет сторону основания $a$ и высоту $h$. $S_{\\text{бок}} = 6ah$; площадь основания $\\dfrac{3\\sqrt3}{2}a^2$, значит, $S = 6ah + 3\\sqrt3 a^2$. При $a = 2$, $h = 5$: $S = 60 + 12\\sqrt3$.

## Диагонали и сечения

В прямой призме диагональ, боковое ребро и диагональ основания образуют прямоугольный треугольник, поэтому $d^2 = d_{\\text{осн}}^2 + h^2$.

**Пример 5.** В правильной четырёхугольной призме (квадрат в основании) со стороной основания $3$ и высотой $4$ диагональ равна $\\sqrt{18 + 16} = \\sqrt{34}$. Диагональное сечение $ACC_1A_1$ — прямоугольник $3\\sqrt2 \\times 4$ площадью $12\\sqrt2$.

**Пример 6.** В правильной шестиугольной призме со стороной основания $a$ и высотой $h$ два вида диагоналей: длинные над большой диагональю основания $2a$, $d_1 = \\sqrt{4a^2 + h^2}$, и короткие над малой диагональю основания $a\\sqrt3$, $d_2 = \\sqrt{3a^2 + h^2}$.

**Пример 7.** Диагональ правильной четырёхугольной призмы $d = 2\\sqrt{11}$ образует с плоскостью основания угол $30^\\circ$. Тогда $h = d\\sin 30^\\circ = \\sqrt{11}$, диагональ основания $d\\cos 30^\\circ = \\sqrt{33}$, сторона основания $\\dfrac{\\sqrt{66}}{2}$, и $S_{\\text{бок}} = 4 \\cdot \\dfrac{\\sqrt{66}}{2} \\cdot \\sqrt{11} = 2\\sqrt{726} = 22\\sqrt6$.

**Пример 8.** В правильной треугольной призме $ABCA_1B_1C_1$ со всеми рёбрами $a$ сечение $AB_1C$ — равнобедренный треугольник с $AB_1 = CB_1 = a\\sqrt2$ и $AC = a$. Его высота к $AC$ равна $\\sqrt{2a^2 - \\dfrac{a^2}{4}} = \\dfrac{a\\sqrt7}{2}$, значит, площадь равна $\\dfrac{a^2\\sqrt7}{4}$.

### Упражнения

1. Сколько граней, рёбер, вершин и диагоналей у пятиугольной призмы?
2. Правильная четырёхугольная призма имеет сторону основания $5$ и высоту $12$. Найдите площадь боковой поверхности, площадь полной поверхности и диагональ.
3. В основании прямой призмы — ромб с диагоналями $6$ и $8$, высота $7$. Найдите площадь боковой поверхности.
4. Площадь боковой поверхности правильной треугольной призмы равна $90$, высота $6$. Найдите сторону основания и площадь полной поверхности.
5. Основание прямой призмы — треугольник со сторонами $5$, $5$, $6$, высота $4$. Найдите площадь полной поверхности.
6. Правильная шестиугольная призма имеет сторону основания $2$ и высоту $3$. Найдите диагонали обоих видов.
7. Диагональ правильной четырёхугольной призмы равна $\\sqrt{41}$, сторона основания $2$. Найдите высоту и площадь диагонального сечения.
8. В правильной треугольной призме со всеми рёбрами $2$ найдите площадь сечения $AB_1C$.

### Ответы

1. $7$ граней, $15$ рёбер, $10$ вершин, $5 \\cdot 2 = 10$ диагоналей. 2. $S_{\\text{бок}} = 20 \\cdot 12 = 240$, $S = 240 + 50 = 290$, $d = \\sqrt{25 + 25 + 144} = \\sqrt{194}$. 3. Сторона $5$, $P = 20$, $S_{\\text{бок}} = 140$. 4. $P = 15$, сторона $5$; $S = 90 + 2 \\cdot \\dfrac{25\\sqrt3}{4} = 90 + \\dfrac{25\\sqrt3}{2}$. 5. $P = 16$, $S_{\\text{бок}} = 64$; высота основания к стороне $6$ равна $4$, $S_{\\text{осн}} = 12$; $S = 88$. 6. $d_1 = \\sqrt{16 + 9} = 5$, $d_2 = \\sqrt{12 + 9} = \\sqrt{21}$. 7. $h = \\sqrt{41 - 8} = \\sqrt{33}$; сечение $2\\sqrt2 \\times \\sqrt{33}$, площадь $2\\sqrt{66}$. 8. $\\dfrac{4\\sqrt7}{4} = \\sqrt7$.`,
      },
      [
        q(t("The lateral edges of a prism are…", "Պրիզմայի կողմնային կողերը…", "Боковые рёбра призмы…"), [t("parallel and equal", "զուգահեռ և հավասար են", "параллельны и равны"), t("perpendicular to each other", "միմյանց ուղղահայաց են", "перпендикулярны друг другу"), t("of different lengths", "տարբեր երկարության են", "разной длины")], 0),
        q(t("The lateral surface area of a right prism equals…", "Ուղիղ պրիզմայի կողմնային մակերևույթի մակերեսը հավասար է…", "Площадь боковой поверхности прямой призмы равна…"), [t("base area times height", "հիմքի մակերես անգամ բարձրություն", "площади основания на высоту"), t("base perimeter times height", "հիմքի պարագիծ անգամ բարձրություն", "периметру основания на высоту"), t("twice the base area", "հիմքի մակերեսի երկապատիկին", "удвоенной площади основания")], 1),
        q(t("A regular prism is…", "Կանոնավոր պրիզման…", "Правильная призма —"), [t("any prism with equal edges", "հավասար կողերով ցանկացած պրիզմա է", "любая призма с равными рёбрами"), t("a right prism with a regular polygon base", "կանոնավոր բազմանկյուն հիմքով ուղիղ պրիզմա է", "прямая призма с правильным многоугольником в основании"), t("an oblique prism", "թեք պրիզմա է", "наклонная призма")], 1),
        q(t("A triangular prism has how many diagonals?", "Եռանկյուն պրիզման քանի՞ անկյունագիծ ունի։", "Сколько диагоналей у треугольной призмы?"), [t("0", "0", "0"), t("3", "3", "3"), t("6", "6", "6")], 0),
        q(t("In a right prism the diagonal d, height h and base diagonal d₀ satisfy…", "Ուղիղ պրիզմայում d անկյունագիծը, h բարձրությունը և d₀ հիմքի անկյունագիծը բավարարում են…", "В прямой призме диагональ d, высота h и диагональ основания d₀ связаны…"), [t("d = d₀ + h", "d = d₀ + h", "d = d₀ + h"), t("d² = d₀² + h²", "d² = d₀² + h²", "d² = d₀² + h²"), t("d = d₀h", "d = d₀h", "d = d₀h")], 1),
        q(t("A regular triangular prism with base side 4 and height 10 has lateral area…", "4 հիմքի կողմով և 10 բարձրությամբ կանոնավոր եռանկյուն պրիզմայի կողմնային մակերեսը…", "Боковая поверхность правильной треугольной призмы со стороной основания 4 и высотой 10 равна…"), [t("40", "40", "40"), t("120", "120", "120"), t("160", "160", "160")], 1),
      ],
    ),
    lesson(
      "pyramid",
      ["Pyramid; regular pyramid", "Բուրգ, կանոնավոր բուրգ", "Пирамида; правильная пирамида"],
      {
        en: ["Define a pyramid, its apex, base, lateral faces, lateral edges and height; recognise a regular pyramid and its apothem", "Prove that the lateral surface area of a regular pyramid equals half the base perimeter times the apothem", "Locate the foot of the height when the lateral edges are equal or the lateral faces are equally inclined, and compute heights, apothems, edges and areas"],
        hy: ["Սահմանել բուրգը, նրա գագաթը, հիմքը, կողմնային նիստերը, կողմնային կողերը և բարձրությունը, ճանաչել կանոնավոր բուրգը և նրա ապոթեմը", "Ապացուցել, որ կանոնավոր բուրգի կողմնային մակերևույթի մակերեսը հավասար է հիմքի կիսապարագծի և ապոթեմի արտադրյալին", "Գտնել բարձրության հիմքի դիրքը, երբ կողմնային կողերը հավասար են կամ կողմնային նիստերը հավասարաչափ թեք են, հաշվել բարձրություններ, ապոթեմներ, կողեր և մակերեսներ"],
        ru: ["Определять пирамиду, её вершину, основание, боковые грани, боковые рёбра и высоту; узнавать правильную пирамиду и её апофему", "Доказывать, что площадь боковой поверхности правильной пирамиды равна половине произведения периметра основания на апофему", "Находить положение основания высоты, когда боковые рёбра равны или боковые грани одинаково наклонены, и вычислять высоты, апофемы, рёбра и площади"],
      },
      {
        en: `## Definition

Take a polygon $A_1A_2 \\dots A_n$ in a plane $\\alpha$ and a point $P$ outside $\\alpha$. The polygon (the **base**) together with the triangles $PA_1A_2, PA_2A_3, \\dots, PA_nA_1$ (the **lateral faces**) forms an $n$-gonal **pyramid** $PA_1A_2 \\dots A_n$. The point $P$ is the **apex**, the segments $PA_i$ are the **lateral edges**, and the perpendicular $PO$ from the apex to the base plane is the **height**. A triangular pyramid is a tetrahedron: any of its four faces can serve as the base.

An $n$-gonal pyramid has $n + 1$ faces, $2n$ edges and $n + 1$ vertices.

## Regular pyramid

A pyramid is **regular** if its base is a regular polygon and the foot of the height is the centre of the base. Then

- all lateral edges are equal (they are oblique segments with equal projections, the circumradius $R$ of the base);
- all lateral faces are congruent isosceles triangles;
- the height of a lateral face drawn from the apex is the **apothem** $l$; its foot is the midpoint of a base edge, and its projection is the inradius $r$ of the base.

Let the base edge be $a$, the height $h$, the lateral edge $b$. From the right triangles $POM$ and $POA_1$ ($M$ the midpoint of $A_1A_2$):
$$l^2 = h^2 + r^2, \\qquad b^2 = h^2 + R^2, \\qquad b^2 = l^2 + \\left(\\frac a2\\right)^2.$$

For a square base $r = \\dfrac a2$, $R = \\dfrac{a\\sqrt2}{2}$; for an equilateral base $r = \\dfrac{a\\sqrt3}{6}$, $R = \\dfrac{a\\sqrt3}{3}$; for a regular hexagon $r = \\dfrac{a\\sqrt3}{2}$, $R = a$.

**Theorem.** The lateral surface area of a regular pyramid equals half the product of the base perimeter and the apothem:
$$S_{\\text{lat}} = \\frac12 P \\cdot l.$$

*Proof.* Each of the $n$ lateral faces is a triangle with base $a$ and height $l$, so $S_{\\text{lat}} = n \\cdot \\dfrac12 al = \\dfrac12 (na) l = \\dfrac12 Pl$. $\\blacksquare$

The total surface area is $S = S_{\\text{lat}} + S_{\\text{base}}$. If every lateral face makes the angle $\\varphi$ with the base, then $S_{\\text{lat}} = \\dfrac{S_{\\text{base}}}{\\cos\\varphi}$, because each face is the base triangle $OA_iA_{i+1}$ stretched by the factor $\\dfrac{1}{\\cos\\varphi}$.

**Example 1.** A regular quadrilateral pyramid has base side $6$ and height $4$. Then $r = 3$, $l = \\sqrt{16 + 9} = 5$, $S_{\\text{lat}} = \\dfrac12 \\cdot 24 \\cdot 5 = 60$, $S = 60 + 36 = 96$. The lateral edge: $R = 3\\sqrt2$, $b = \\sqrt{16 + 18} = \\sqrt{34}$.

**Example 2.** A regular triangular pyramid has base side $6$ and height $4$. Here $r = \\sqrt3$, $R = 2\\sqrt3$, so $l = \\sqrt{16 + 3} = \\sqrt{19}$ and $b = \\sqrt{16 + 12} = 2\\sqrt7$. $S_{\\text{lat}} = \\dfrac12 \\cdot 18 \\cdot \\sqrt{19} = 9\\sqrt{19}$.

**Example 3.** All edges of a regular quadrilateral pyramid equal $2$. The lateral faces are equilateral, so $l = \\sqrt3$ and $S_{\\text{lat}} = 4\\sqrt3$, $S = 4\\sqrt3 + 4$. The height: $R = \\sqrt2$, $h = \\sqrt{4 - 2} = \\sqrt2$.

**Example 4.** In a regular quadrilateral pyramid with base side $6$ and height $4$ (Example 1), the lateral face makes the angle $\\varphi$ with the base, where $\\tan\\varphi = \\dfrac hr = \\dfrac43$, so $\\cos\\varphi = \\dfrac35$ and indeed $S_{\\text{lat}} = \\dfrac{36}{3/5} = 60$. The lateral edge makes the angle $\\psi$ with the base, $\\tan\\psi = \\dfrac hR = \\dfrac{4}{3\\sqrt2} = \\dfrac{2\\sqrt2}{3}$.

## Where is the foot of the height?

**Theorem.** If all lateral edges of a pyramid are equal, the foot of the height is the centre of the circle circumscribed about the base. If all lateral faces make equal angles with the base and the foot lies inside the base, the foot is the centre of the inscribed circle.

*Proof.* Equal oblique segments from $P$ have equal projections $OA_1 = OA_2 = \\dots = OA_n$, so $O$ is equidistant from the vertices. In the second case the distances from $O$ to the base edges are $h \\cot\\varphi$, all equal. $\\blacksquare$

**Example 5.** The base of a pyramid is a right triangle with legs $6$ and $8$, and all lateral edges equal $13$. The circumcentre is the midpoint of the hypotenuse, $R = 5$, so $h = \\sqrt{169 - 25} = 12$.

**Example 6.** In the pyramid $DABC$ the edge $DA$ is perpendicular to the base, $DA = 6$, the triangle $ABC$ is right-angled at $B$ with $AB = 3$, $BC = 4$. By the theorem of three perpendiculars $DB \\perp BC$, so the face $DBC$ is a right triangle: $DB = \\sqrt{36 + 9} = 3\\sqrt5$, $S_{DBC} = \\dfrac12 \\cdot 4 \\cdot 3\\sqrt5 = 6\\sqrt5$. The other lateral faces: $S_{DAB} = 9$, $S_{DAC} = \\dfrac12 \\cdot 6 \\cdot 5 = 15$.

**Example 7.** One lateral face $DAB$ of the pyramid $DABC$ is perpendicular to the base and is an equilateral triangle with side $4$. The height of the pyramid lies in the face $DAB$ (a perpendicular to the base drawn in a perpendicular plane stays in that plane), so it is the height of the triangle: $h = 2\\sqrt3$.

**Example 8.** A regular quadrilateral pyramid has lateral edge $6$ inclined at $45^\\circ$ to the base. Then $h = R = 6 \\sin 45^\\circ = 3\\sqrt2$, the base side is $a = R\\sqrt2 = 6$, $r = 3$, $l = \\sqrt{18 + 9} = 3\\sqrt3$, $S_{\\text{lat}} = \\dfrac12 \\cdot 24 \\cdot 3\\sqrt3 = 36\\sqrt3$.

### Exercises

1. A regular quadrilateral pyramid has base side $10$ and height $12$. Find the apothem, the lateral edge, $S_{\\text{lat}}$ and $S$.
2. A regular triangular pyramid has base side $6$ and lateral edge $5$. Find the height, the apothem and $S_{\\text{lat}}$.
3. A regular hexagonal pyramid has base side $2$ and height $3$. Find the lateral edge, the apothem and $S_{\\text{lat}}$.
4. The lateral faces of a regular quadrilateral pyramid with base side $4$ make $60^\\circ$ with the base. Find the height, the apothem and the total surface area.
5. The base of a pyramid is a rectangle $6 \\times 8$ and all lateral edges equal $13$. Find the height.
6. In the pyramid $DABC$ the edge $DA \\perp (ABC)$, $DA = 12$, $AB = AC = 10$, $BC = 12$. Find the area of the face $DBC$.
7. A regular triangular pyramid has height $4$, and the lateral face makes an angle $\\varphi$ with the base with $\\tan\\varphi = \\dfrac{4}{\\sqrt3}$. Find the base side and $S_{\\text{lat}}$.
8. Prove that in a regular pyramid the apothem is longer than the inradius of the base and shorter than the lateral edge.

### Answers

1. $l = 13$, $b = \\sqrt{194}$, $S_{\\text{lat}} = 260$, $S = 360$. 2. $R = 2\\sqrt3$, $h = \\sqrt{25 - 12} = \\sqrt{13}$; $l = \\sqrt{25 - 9} = 4$; $S_{\\text{lat}} = 36$. 3. $R = 2$, $b = \\sqrt{13}$; $r = \\sqrt3$, $l = 2\\sqrt3$; $S_{\\text{lat}} = 12\\sqrt3$. 4. $r = 2$, $h = 2\\sqrt3$, $l = 4$, $S_{\\text{lat}} = 32$, $S = 48$. 5. $R = 5$, $h = 12$. 6. The height $AM$ of the base to $BC$ is $8$; by three perpendiculars $DM \\perp BC$, $DM = \\sqrt{144 + 64} = 4\\sqrt{13}$, $S = 24\\sqrt{13}$. 7. $r = \\dfrac{h}{\\tan\\varphi} = \\sqrt3$, $a = \\dfrac{6r}{\\sqrt3} = 6$ since $r = \\dfrac{a\\sqrt3}{6}$; $l = \\sqrt{16 + 3} = \\sqrt{19}$, $S_{\\text{lat}} = 9\\sqrt{19}$. 8. $l^2 = h^2 + r^2 > r^2$ and $b^2 = l^2 + \\dfrac{a^2}{4} > l^2$.`,
        hy: `## Սահմանում

Վերցնենք $\\alpha$ հարթության մեջ $A_1A_2 \\dots A_n$ բազմանկյունը և $\\alpha$-ից դուրս $P$ կետը։ Բազմանկյունը (**հիմքը**) $PA_1A_2, PA_2A_3, \\dots, PA_nA_1$ եռանկյունների (**կողմնային նիստերի**) հետ միասին կազմում է $PA_1A_2 \\dots A_n$ $n$-անկյուն **բուրգը**։ $P$ կետը **գագաթն** է, $PA_i$ հատվածները՝ **կողմնային կողերը**, գագաթից հիմքի հարթությանը տարված $PO$ ուղղահայացը՝ **բարձրությունը**։ Եռանկյուն բուրգը քառանիստ է․ նրա չորս նիստերից ցանկացածը կարող է հիմք լինել։

$n$-անկյուն բուրգն ունի $n + 1$ նիստ, $2n$ կող և $n + 1$ գագաթ։

## Կանոնավոր բուրգ

Բուրգը **կանոնավոր** է, եթե նրա հիմքը կանոնավոր բազմանկյուն է, իսկ բարձրության հիմքը հիմքի կենտրոնն է։ Այդ դեպքում

- բոլոր կողմնային կողերը հավասար են (դրանք հավասար պրոյեկցիաներով թեքեր են, պրոյեկցիան հիմքի արտագծած շրջանագծի $R$ շառավիղն է),
- բոլոր կողմնային նիստերը հավասար հավասարասրուն եռանկյուններ են,
- գագաթից տարված կողմնային նիստի բարձրությունը **ապոթեմն** է՝ $l$, նրա հիմքը հիմքի կողի միջնակետն է, իսկ պրոյեկցիան՝ հիմքի ներգծած շրջանագծի $r$ շառավիղը։

Հիմքի կողը լինի $a$, բարձրությունը՝ $h$, կողմնային կողը՝ $b$։ $POM$ և $POA_1$ ուղղանկյուն եռանկյուններից ($M$-ը $A_1A_2$-ի միջնակետն է)․
$$l^2 = h^2 + r^2, \\qquad b^2 = h^2 + R^2, \\qquad b^2 = l^2 + \\left(\\frac a2\\right)^2.$$

Քառակուսի հիմքի դեպքում $r = \\dfrac a2$, $R = \\dfrac{a\\sqrt2}{2}$, հավասարակողմ հիմքի դեպքում $r = \\dfrac{a\\sqrt3}{6}$, $R = \\dfrac{a\\sqrt3}{3}$, կանոնավոր վեցանկյան դեպքում $r = \\dfrac{a\\sqrt3}{2}$, $R = a$։

**Թեորեմ։** Կանոնավոր բուրգի կողմնային մակերևույթի մակերեսը հավասար է հիմքի պարագծի և ապոթեմի արտադրյալի կեսին․
$$S_{\\text{կողմ}} = \\frac12 P \\cdot l.$$

*Ապացույց։* $n$ կողմնային նիստերից յուրաքանչյուրը $a$ հիմքով և $l$ բարձրությամբ եռանկյուն է, ուստի $S_{\\text{կողմ}} = n \\cdot \\dfrac12 al = \\dfrac12 (na) l = \\dfrac12 Pl$։ $\\blacksquare$

Լրիվ մակերևույթի մակերեսը $S = S_{\\text{կողմ}} + S_{\\text{հիմք}}$ է։ Եթե յուրաքանչյուր կողմնային նիստ հիմքի հետ կազմում է $\\varphi$ անկյուն, ապա $S_{\\text{կողմ}} = \\dfrac{S_{\\text{հիմք}}}{\\cos\\varphi}$, քանի որ յուրաքանչյուր նիստ հիմքի $OA_iA_{i+1}$ եռանկյունն է՝ $\\dfrac{1}{\\cos\\varphi}$ անգամ ձգված։

**Օրինակ 1։** Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $4$։ Այդ դեպքում $r = 3$, $l = \\sqrt{16 + 9} = 5$, $S_{\\text{կողմ}} = \\dfrac12 \\cdot 24 \\cdot 5 = 60$, $S = 60 + 36 = 96$։ Կողմնային կողը․ $R = 3\\sqrt2$, $b = \\sqrt{16 + 18} = \\sqrt{34}$։

**Օրինակ 2։** Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $4$։ Այստեղ $r = \\sqrt3$, $R = 2\\sqrt3$, ուստի $l = \\sqrt{16 + 3} = \\sqrt{19}$ և $b = \\sqrt{16 + 12} = 2\\sqrt7$։ $S_{\\text{կողմ}} = \\dfrac12 \\cdot 18 \\cdot \\sqrt{19} = 9\\sqrt{19}$։

**Օրինակ 3։** Կանոնավոր քառանկյուն բուրգի բոլոր կողերը $2$ են։ Կողմնային նիստերը հավասարակողմ են, ուստի $l = \\sqrt3$, $S_{\\text{կողմ}} = 4\\sqrt3$, $S = 4\\sqrt3 + 4$։ Բարձրությունը․ $R = \\sqrt2$, $h = \\sqrt{4 - 2} = \\sqrt2$։

**Օրինակ 4։** $6$ հիմքի կողմով և $4$ բարձրությամբ կանոնավոր քառանկյուն բուրգում (օրինակ 1) կողմնային նիստը հիմքի հետ կազմում է $\\varphi$ անկյուն, որտեղ $\\operatorname{tg}\\varphi = \\dfrac hr = \\dfrac43$, ուստի $\\cos\\varphi = \\dfrac35$, և իրոք $S_{\\text{կողմ}} = \\dfrac{36}{3/5} = 60$։ Կողմնային կողը հիմքի հետ կազմում է $\\psi$ անկյուն, $\\operatorname{tg}\\psi = \\dfrac hR = \\dfrac{4}{3\\sqrt2} = \\dfrac{2\\sqrt2}{3}$։

## Որտե՞ղ է բարձրության հիմքը

**Թեորեմ։** Եթե բուրգի բոլոր կողմնային կողերը հավասար են, բարձրության հիմքը հիմքին արտագծած շրջանագծի կենտրոնն է։ Եթե բոլոր կողմնային նիստերը հիմքի հետ հավասար անկյուններ են կազմում, և բարձրության հիմքը հիմքի ներսում է, ապա այն ներգծած շրջանագծի կենտրոնն է։

*Ապացույց։* $P$-ից տարված հավասար թեքերն ունեն հավասար պրոյեկցիաներ՝ $OA_1 = OA_2 = \\dots = OA_n$, ուստի $O$-ն հավասարահեռ է գագաթներից։ Երկրորդ դեպքում $O$-ից հիմքի կողերի հեռավորությունները $h \\operatorname{ctg}\\varphi$ են՝ բոլորը հավասար։ $\\blacksquare$

**Օրինակ 5։** Բուրգի հիմքը $6$ և $8$ էջերով ուղղանկյուն եռանկյուն է, բոլոր կողմնային կողերը $13$ են։ Արտագծած շրջանագծի կենտրոնը ներքնաձիգի միջնակետն է, $R = 5$, ուստի $h = \\sqrt{169 - 25} = 12$։

**Օրինակ 6։** $DABC$ բուրգում $DA$ կողն ուղղահայաց է հիմքին, $DA = 6$, $ABC$ եռանկյունն ուղղանկյուն է $B$ գագաթում, $AB = 3$, $BC = 4$։ Երեք ուղղահայացների թեորեմով $DB \\perp BC$, ուստի $DBC$ նիստն ուղղանկյուն եռանկյուն է․ $DB = \\sqrt{36 + 9} = 3\\sqrt5$, $S_{DBC} = \\dfrac12 \\cdot 4 \\cdot 3\\sqrt5 = 6\\sqrt5$։ Մյուս կողմնային նիստերը․ $S_{DAB} = 9$, $S_{DAC} = \\dfrac12 \\cdot 6 \\cdot 5 = 15$։

**Օրինակ 7։** $DABC$ բուրգի $DAB$ կողմնային նիստն ուղղահայաց է հիմքին և $4$ կողմով հավասարակողմ եռանկյուն է։ Բուրգի բարձրությունն ընկած է $DAB$ նիստում (ուղղահայաց հարթության մեջ հիմքին տարված ուղղահայացը մնում է այդ հարթության մեջ), ուստի այն եռանկյան բարձրությունն է․ $h = 2\\sqrt3$։

**Օրինակ 8։** Կանոնավոր քառանկյուն բուրգի կողմնային կողը $6$ է և հիմքի հետ կազմում է $45^\\circ$։ Այդ դեպքում $h = R = 6 \\sin 45^\\circ = 3\\sqrt2$, հիմքի կողմը $a = R\\sqrt2 = 6$ է, $r = 3$, $l = \\sqrt{18 + 9} = 3\\sqrt3$, $S_{\\text{կողմ}} = \\dfrac12 \\cdot 24 \\cdot 3\\sqrt3 = 36\\sqrt3$։

### Վարժություններ

1. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $10$ է, բարձրությունը՝ $12$։ Գտեք ապոթեմը, կողմնային կողը, $S_{\\text{կողմ}}$-ը և $S$-ը։
2. Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $6$ է, կողմնային կողը՝ $5$։ Գտեք բարձրությունը, ապոթեմը և $S_{\\text{կողմ}}$-ը։
3. Կանոնավոր վեցանկյուն բուրգի հիմքի կողմը $2$ է, բարձրությունը՝ $3$։ Գտեք կողմնային կողը, ապոթեմը և $S_{\\text{կողմ}}$-ը։
4. $4$ հիմքի կողմով կանոնավոր քառանկյուն բուրգի կողմնային նիստերը հիմքի հետ կազմում են $60^\\circ$։ Գտեք բարձրությունը, ապոթեմը և լրիվ մակերևույթի մակերեսը։
5. Բուրգի հիմքը $6 \\times 8$ ուղղանկյուն է, բոլոր կողմնային կողերը $13$ են։ Գտեք բարձրությունը։
6. $DABC$ բուրգում $DA \\perp (ABC)$, $DA = 12$, $AB = AC = 10$, $BC = 12$։ Գտեք $DBC$ նիստի մակերեսը։
7. Կանոնավոր եռանկյուն բուրգի բարձրությունը $4$ է, կողմնային նիստը հիմքի հետ կազմում է $\\varphi$ անկյուն, որտեղ $\\operatorname{tg}\\varphi = \\dfrac{4}{\\sqrt3}$։ Գտեք հիմքի կողմը և $S_{\\text{կողմ}}$-ը։
8. Ապացուցեք, որ կանոնավոր բուրգում ապոթեմը մեծ է հիմքի ներգծած շրջանագծի շառավղից և փոքր է կողմնային կողից։

### Պատասխաններ

1. $l = 13$, $b = \\sqrt{194}$, $S_{\\text{կողմ}} = 260$, $S = 360$։ 2. $R = 2\\sqrt3$, $h = \\sqrt{25 - 12} = \\sqrt{13}$, $l = \\sqrt{25 - 9} = 4$, $S_{\\text{կողմ}} = 36$։ 3. $R = 2$, $b = \\sqrt{13}$, $r = \\sqrt3$, $l = 2\\sqrt3$, $S_{\\text{կողմ}} = 12\\sqrt3$։ 4. $r = 2$, $h = 2\\sqrt3$, $l = 4$, $S_{\\text{կողմ}} = 32$, $S = 48$։ 5. $R = 5$, $h = 12$։ 6. Հիմքի $AM$ բարձրությունը $BC$-ին $8$ է, երեք ուղղահայացների թեորեմով $DM \\perp BC$, $DM = \\sqrt{144 + 64} = 4\\sqrt{13}$, $S = 24\\sqrt{13}$։ 7. $r = \\dfrac{h}{\\operatorname{tg}\\varphi} = \\sqrt3$, $a = \\dfrac{6r}{\\sqrt3} = 6$, քանի որ $r = \\dfrac{a\\sqrt3}{6}$, $l = \\sqrt{16 + 3} = \\sqrt{19}$, $S_{\\text{կողմ}} = 9\\sqrt{19}$։ 8. $l^2 = h^2 + r^2 > r^2$ և $b^2 = l^2 + \\dfrac{a^2}{4} > l^2$։`,
        ru: `## Определение

Возьмём многоугольник $A_1A_2 \\dots A_n$ в плоскости $\\alpha$ и точку $P$ вне $\\alpha$. Многоугольник (**основание**) вместе с треугольниками $PA_1A_2, PA_2A_3, \\dots, PA_nA_1$ (**боковыми гранями**) образует $n$-угольную **пирамиду** $PA_1A_2 \\dots A_n$. Точка $P$ — **вершина**, отрезки $PA_i$ — **боковые рёбра**, перпендикуляр $PO$ из вершины на плоскость основания — **высота**. Треугольная пирамида — это тетраэдр: любая из его четырёх граней может служить основанием.

У $n$-угольной пирамиды $n + 1$ грань, $2n$ рёбер и $n + 1$ вершина.

## Правильная пирамида

Пирамида **правильная**, если её основание — правильный многоугольник, а основание высоты — центр основания. Тогда

- все боковые рёбра равны (это наклонные с равными проекциями — радиусом $R$ описанной около основания окружности);
- все боковые грани — равные равнобедренные треугольники;
- высота боковой грани, проведённая из вершины, — **апофема** $l$; её основание — середина ребра основания, а проекция — радиус $r$ вписанной в основание окружности.

Пусть ребро основания $a$, высота $h$, боковое ребро $b$. Из прямоугольных треугольников $POM$ и $POA_1$ ($M$ — середина $A_1A_2$):
$$l^2 = h^2 + r^2, \\qquad b^2 = h^2 + R^2, \\qquad b^2 = l^2 + \\left(\\frac a2\\right)^2.$$

Для квадратного основания $r = \\dfrac a2$, $R = \\dfrac{a\\sqrt2}{2}$; для равностороннего $r = \\dfrac{a\\sqrt3}{6}$, $R = \\dfrac{a\\sqrt3}{3}$; для правильного шестиугольника $r = \\dfrac{a\\sqrt3}{2}$, $R = a$.

**Теорема.** Площадь боковой поверхности правильной пирамиды равна половине произведения периметра основания на апофему:
$$S_{\\text{бок}} = \\frac12 P \\cdot l.$$

*Доказательство.* Каждая из $n$ боковых граней — треугольник с основанием $a$ и высотой $l$, поэтому $S_{\\text{бок}} = n \\cdot \\dfrac12 al = \\dfrac12 (na) l = \\dfrac12 Pl$. $\\blacksquare$

Площадь полной поверхности $S = S_{\\text{бок}} + S_{\\text{осн}}$. Если каждая боковая грань образует с основанием угол $\\varphi$, то $S_{\\text{бок}} = \\dfrac{S_{\\text{осн}}}{\\cos\\varphi}$, так как каждая грань — это треугольник основания $OA_iA_{i+1}$, растянутый в $\\dfrac{1}{\\cos\\varphi}$ раз.

**Пример 1.** Правильная четырёхугольная пирамида имеет сторону основания $6$ и высоту $4$. Тогда $r = 3$, $l = \\sqrt{16 + 9} = 5$, $S_{\\text{бок}} = \\dfrac12 \\cdot 24 \\cdot 5 = 60$, $S = 60 + 36 = 96$. Боковое ребро: $R = 3\\sqrt2$, $b = \\sqrt{16 + 18} = \\sqrt{34}$.

**Пример 2.** Правильная треугольная пирамида имеет сторону основания $6$ и высоту $4$. Здесь $r = \\sqrt3$, $R = 2\\sqrt3$, поэтому $l = \\sqrt{16 + 3} = \\sqrt{19}$ и $b = \\sqrt{16 + 12} = 2\\sqrt7$. $S_{\\text{бок}} = \\dfrac12 \\cdot 18 \\cdot \\sqrt{19} = 9\\sqrt{19}$.

**Пример 3.** Все рёбра правильной четырёхугольной пирамиды равны $2$. Боковые грани равносторонние, поэтому $l = \\sqrt3$, $S_{\\text{бок}} = 4\\sqrt3$, $S = 4\\sqrt3 + 4$. Высота: $R = \\sqrt2$, $h = \\sqrt{4 - 2} = \\sqrt2$.

**Пример 4.** В правильной четырёхугольной пирамиде со стороной основания $6$ и высотой $4$ (пример 1) боковая грань образует с основанием угол $\\varphi$, где $\\operatorname{tg}\\varphi = \\dfrac hr = \\dfrac43$, поэтому $\\cos\\varphi = \\dfrac35$, и действительно $S_{\\text{бок}} = \\dfrac{36}{3/5} = 60$. Боковое ребро образует с основанием угол $\\psi$, $\\operatorname{tg}\\psi = \\dfrac hR = \\dfrac{4}{3\\sqrt2} = \\dfrac{2\\sqrt2}{3}$.

## Где основание высоты?

**Теорема.** Если все боковые рёбра пирамиды равны, основание высоты — центр окружности, описанной около основания. Если все боковые грани образуют с основанием равные углы и основание высоты лежит внутри основания, то это центр вписанной окружности.

*Доказательство.* Равные наклонные из $P$ имеют равные проекции $OA_1 = OA_2 = \\dots = OA_n$, значит, $O$ равноудалена от вершин. Во втором случае расстояния от $O$ до рёбер основания равны $h \\operatorname{ctg}\\varphi$ — все одинаковы. $\\blacksquare$

**Пример 5.** Основание пирамиды — прямоугольный треугольник с катетами $6$ и $8$, все боковые рёбра равны $13$. Центр описанной окружности — середина гипотенузы, $R = 5$, поэтому $h = \\sqrt{169 - 25} = 12$.

**Пример 6.** В пирамиде $DABC$ ребро $DA$ перпендикулярно основанию, $DA = 6$, треугольник $ABC$ прямоугольный с прямым углом $B$, $AB = 3$, $BC = 4$. По теореме о трёх перпендикулярах $DB \\perp BC$, поэтому грань $DBC$ — прямоугольный треугольник: $DB = \\sqrt{36 + 9} = 3\\sqrt5$, $S_{DBC} = \\dfrac12 \\cdot 4 \\cdot 3\\sqrt5 = 6\\sqrt5$. Остальные боковые грани: $S_{DAB} = 9$, $S_{DAC} = \\dfrac12 \\cdot 6 \\cdot 5 = 15$.

**Пример 7.** Боковая грань $DAB$ пирамиды $DABC$ перпендикулярна основанию и является равносторонним треугольником со стороной $4$. Высота пирамиды лежит в грани $DAB$ (перпендикуляр к основанию, проведённый в перпендикулярной плоскости, остаётся в этой плоскости), поэтому это высота треугольника: $h = 2\\sqrt3$.

**Пример 8.** Боковое ребро правильной четырёхугольной пирамиды равно $6$ и наклонено к основанию под углом $45^\\circ$. Тогда $h = R = 6 \\sin 45^\\circ = 3\\sqrt2$, сторона основания $a = R\\sqrt2 = 6$, $r = 3$, $l = \\sqrt{18 + 9} = 3\\sqrt3$, $S_{\\text{бок}} = \\dfrac12 \\cdot 24 \\cdot 3\\sqrt3 = 36\\sqrt3$.

### Упражнения

1. Правильная четырёхугольная пирамида имеет сторону основания $10$ и высоту $12$. Найдите апофему, боковое ребро, $S_{\\text{бок}}$ и $S$.
2. Правильная треугольная пирамида имеет сторону основания $6$ и боковое ребро $5$. Найдите высоту, апофему и $S_{\\text{бок}}$.
3. Правильная шестиугольная пирамида имеет сторону основания $2$ и высоту $3$. Найдите боковое ребро, апофему и $S_{\\text{бок}}$.
4. Боковые грани правильной четырёхугольной пирамиды со стороной основания $4$ образуют с основанием $60^\\circ$. Найдите высоту, апофему и площадь полной поверхности.
5. Основание пирамиды — прямоугольник $6 \\times 8$, все боковые рёбра равны $13$. Найдите высоту.
6. В пирамиде $DABC$ ребро $DA \\perp (ABC)$, $DA = 12$, $AB = AC = 10$, $BC = 12$. Найдите площадь грани $DBC$.
7. Высота правильной треугольной пирамиды равна $4$, боковая грань образует с основанием угол $\\varphi$, где $\\operatorname{tg}\\varphi = \\dfrac{4}{\\sqrt3}$. Найдите сторону основания и $S_{\\text{бок}}$.
8. Докажите, что в правильной пирамиде апофема больше радиуса вписанной в основание окружности и меньше бокового ребра.

### Ответы

1. $l = 13$, $b = \\sqrt{194}$, $S_{\\text{бок}} = 260$, $S = 360$. 2. $R = 2\\sqrt3$, $h = \\sqrt{25 - 12} = \\sqrt{13}$; $l = \\sqrt{25 - 9} = 4$; $S_{\\text{бок}} = 36$. 3. $R = 2$, $b = \\sqrt{13}$; $r = \\sqrt3$, $l = 2\\sqrt3$; $S_{\\text{бок}} = 12\\sqrt3$. 4. $r = 2$, $h = 2\\sqrt3$, $l = 4$, $S_{\\text{бок}} = 32$, $S = 48$. 5. $R = 5$, $h = 12$. 6. Высота $AM$ основания к $BC$ равна $8$; по теореме о трёх перпендикулярах $DM \\perp BC$, $DM = \\sqrt{144 + 64} = 4\\sqrt{13}$, $S = 24\\sqrt{13}$. 7. $r = \\dfrac{h}{\\operatorname{tg}\\varphi} = \\sqrt3$, $a = \\dfrac{6r}{\\sqrt3} = 6$, так как $r = \\dfrac{a\\sqrt3}{6}$; $l = \\sqrt{16 + 3} = \\sqrt{19}$, $S_{\\text{бок}} = 9\\sqrt{19}$. 8. $l^2 = h^2 + r^2 > r^2$ и $b^2 = l^2 + \\dfrac{a^2}{4} > l^2$.`,
      },
      [
        q(t("The lateral faces of a pyramid are…", "Բուրգի կողմնային նիստերը…", "Боковые грани пирамиды —"), [t("triangles with a common vertex", "ընդհանուր գագաթով եռանկյուններ են", "треугольники с общей вершиной"), t("parallelograms", "զուգահեռագծեր են", "параллелограммы"), t("rectangles", "ուղղանկյուններ են", "прямоугольники")], 0),
        q(t("In a regular pyramid the foot of the height is…", "Կանոնավոր բուրգում բարձրության հիմքը…", "В правильной пирамиде основание высоты —"), [t("a vertex of the base", "հիմքի գագաթ է", "вершина основания"), t("the centre of the base", "հիմքի կենտրոնն է", "центр основания"), t("the midpoint of a base edge", "հիմքի կողի միջնակետն է", "середина ребра основания")], 1),
        q(t("The apothem of a regular pyramid is…", "Կանոնավոր բուրգի ապոթեմը…", "Апофема правильной пирамиды —"), [t("the height of a lateral face from the apex", "գագաթից տարված կողմնային նիստի բարձրությունն է", "высота боковой грани из вершины"), t("the lateral edge", "կողմնային կողն է", "боковое ребро"), t("the height of the pyramid", "բուրգի բարձրությունն է", "высота пирамиды")], 0),
        q(t("The lateral surface area of a regular pyramid equals…", "Կանոնավոր բուրգի կողմնային մակերևույթի մակերեսը հավասար է…", "Площадь боковой поверхности правильной пирамиды равна…"), [t("P·l", "P·l", "P·l"), t("½·P·l", "½·P·l", "½·P·l"), t("P·h", "P·h", "P·h")], 1),
        q(t("A regular quadrilateral pyramid has base side 6 and height 4. Its apothem is…", "Կանոնավոր քառանկյուն բուրգի հիմքի կողմը 6 է, բարձրությունը՝ 4։ Ապոթեմը…", "Правильная четырёхугольная пирамида имеет сторону основания 6 и высоту 4. Апофема равна…"), [t("5", "5", "5"), t("√34", "√34", "√34"), t("10", "10", "10")], 0),
        q(t("If all lateral edges of a pyramid are equal, the foot of the height is…", "Եթե բուրգի բոլոր կողմնային կողերը հավասար են, բարձրության հիմքը…", "Если все боковые рёбра пирамиды равны, основание высоты —"), [t("the incentre of the base", "հիմքի ներգծած շրջանագծի կենտրոնն է", "центр вписанной в основание окружности"), t("the circumcentre of the base", "հիմքի արտագծած շրջանագծի կենտրոնն է", "центр описанной около основания окружности"), t("the centroid of the base", "հիմքի միջնագծերի հատման կետն է", "точка пересечения медиан основания")], 1),
      ],
    ),
    lesson(
      "truncated-pyramid",
      ["Truncated pyramid", "Հատած բուրգ", "Усечённая пирамида"],
      {
        en: ["Prove that a plane parallel to the base cuts a pyramid into a similar pyramid and a truncated pyramid, with areas in the ratio of the squares of distances", "Describe the bases, lateral faces, height and apothem of a truncated pyramid and of a regular truncated pyramid", "Compute the lateral surface area ½(P₁ + P₂)·l, heights, apothems, lateral edges and diagonals of regular truncated pyramids"],
        hy: ["Ապացուցել, որ հիմքին զուգահեռ հարթությունը բուրգը բաժանում է նման բուրգի և հատած բուրգի, իսկ մակերեսների հարաբերությունը հեռավորությունների քառակուսիների հարաբերությունն է", "Նկարագրել հատած բուրգի և կանոնավոր հատած բուրգի հիմքերը, կողմնային նիստերը, բարձրությունը և ապոթեմը", "Հաշվել կանոնավոր հատած բուրգերի կողմնային մակերևույթի մակերեսը ½(P₁ + P₂)·l, բարձրությունները, ապոթեմները, կողմնային կողերը և անկյունագծերը"],
        ru: ["Доказывать, что плоскость, параллельная основанию, делит пирамиду на подобную пирамиду и усечённую пирамиду, а площади относятся как квадраты расстояний", "Описывать основания, боковые грани, высоту и апофему усечённой пирамиды и правильной усечённой пирамиды", "Вычислять площадь боковой поверхности ½(P₁ + P₂)·l, высоты, апофемы, боковые рёбра и диагонали правильных усечённых пирамид"],
      },
      {
        en: `## A section parallel to the base

**Theorem.** A plane parallel to the base of a pyramid cuts the lateral edges and the height in the same ratio, cuts off a pyramid similar to the original one, and the areas of the section and of the base are in the ratio of the squares of their distances from the apex.

*Proof.* Let the plane $\\beta \\parallel \\alpha$ meet the height $PO$ at $O'$ and the edges $PA_i$ at $A_i'$. The plane $PA_iO$ meets the parallel planes along parallel lines $A_i'O' \\parallel A_iO$, so by the intercept theorem $\\dfrac{PA_i'}{PA_i} = \\dfrac{PO'}{PO} = k$ for every $i$. The homothety with centre $P$ and ratio $k$ maps the base onto the section, so the section is a polygon similar to the base with ratio $k$, and $\\dfrac{S'}{S} = k^2 = \\dfrac{PO'^2}{PO^2}$. $\\blacksquare$

**Example 1.** A pyramid has height $12$ and base area $36$. A plane parallel to the base at distance $4$ from the apex cuts a section of area $36 \\cdot \\left(\\dfrac{4}{12}\\right)^2 = 4$.

## Truncated pyramid

The part of the pyramid between the base and a parallel section is a **truncated pyramid**. Its **bases** are the two similar polygons, its **lateral faces** are trapezoids, and its **height** is the distance between the base planes. The lateral edges, extended, meet at the apex of the original pyramid.

A truncated pyramid cut from a regular pyramid is **regular**: its bases are regular polygons with a common centre line, and its lateral faces are congruent isosceles trapezoids. Their height is the **apothem** $l$.

Let the base edges be $a$ and $b$ ($a > b$), the inradii $r_1, r_2$, the circumradii $R_1, R_2$, the height $h$, the lateral edge $c$. Dropping perpendiculars from the upper base to the lower one gives right triangles with
$$l^2 = h^2 + (r_1 - r_2)^2, \\qquad c^2 = h^2 + (R_1 - R_2)^2.$$

**Theorem.** The lateral surface area of a regular truncated pyramid equals half the sum of the base perimeters times the apothem:
$$S_{\\text{lat}} = \\frac12 (P_1 + P_2)\\, l.$$

*Proof.* Each of the $n$ lateral faces is a trapezoid with bases $a$, $b$ and height $l$, so $S_{\\text{lat}} = n \\cdot \\dfrac{a + b}{2} l = \\dfrac{na + nb}{2} l = \\dfrac{P_1 + P_2}{2} l$. $\\blacksquare$

**Example 2.** A regular quadrilateral truncated pyramid has base sides $10$ and $4$ and height $4$. Then $r_1 - r_2 = 5 - 2 = 3$, $l = \\sqrt{16 + 9} = 5$, $S_{\\text{lat}} = \\dfrac12 (40 + 16) \\cdot 5 = 140$, $S = 140 + 100 + 16 = 256$. The lateral edge: $R_1 - R_2 = 5\\sqrt2 - 2\\sqrt2 = 3\\sqrt2$, $c = \\sqrt{16 + 18} = \\sqrt{34}$.

**Example 3.** A regular triangular truncated pyramid has base sides $6$ and $3$ and lateral edge $2$. $R_1 - R_2 = \\dfrac{\\sqrt3}{3}(6 - 3) = \\sqrt3$, so $h = \\sqrt{4 - 3} = 1$. $r_1 - r_2 = \\dfrac{\\sqrt3}{6}(6 - 3) = \\dfrac{\\sqrt3}{2}$, $l = \\sqrt{1 + \\dfrac34} = \\dfrac{\\sqrt7}{2}$, $S_{\\text{lat}} = \\dfrac12 (18 + 9) \\cdot \\dfrac{\\sqrt7}{2} = \\dfrac{27\\sqrt7}{4}$.

**Example 4.** Restore the full pyramid for the truncated pyramid of Example 2. The bases are in the ratio $\\dfrac{4}{10} = \\dfrac25$, so if $H$ is the height of the full pyramid, $\\dfrac{H - 4}{H} = \\dfrac25$, whence $H = \\dfrac{20}{3}$. The cut-off pyramid has height $\\dfrac{20}{3} - 4 = \\dfrac83$.

**Example 5.** The lateral faces of a regular quadrilateral truncated pyramid with base sides $8$ and $2$ make $45^\\circ$ with the lower base. In the right triangle with legs $h$ and $r_1 - r_2 = 3$ the angle at the base is $45^\\circ$, so $h = 3$, $l = 3\\sqrt2$, $S_{\\text{lat}} = \\dfrac12 (32 + 8) \\cdot 3\\sqrt2 = 60\\sqrt2$.

**Example 6.** The diagonal section of the truncated pyramid of Example 2 (through two opposite lateral edges) is an isosceles trapezoid with bases $10\\sqrt2$ and $4\\sqrt2$ and height $4$. Its diagonal is the diagonal of the solid: the horizontal span is $\\dfrac{10\\sqrt2 + 4\\sqrt2}{2} = 7\\sqrt2$, so $d = \\sqrt{98 + 16} = \\sqrt{114}$.

### Exercises

1. A pyramid has height $9$ and base area $54$. Find the area of the section by a plane parallel to the base at distance $3$ from the apex.
2. A regular quadrilateral truncated pyramid has base sides $8$ and $2$ and height $4$. Find the apothem, $S_{\\text{lat}}$ and $S$.
3. A regular triangular truncated pyramid has base sides $12$ and $6$ and lateral edge $4$. Find the height, the apothem and $S_{\\text{lat}}$.
4. A regular quadrilateral truncated pyramid has base sides $6$ and $2$ and lateral edge $3$. Find the height and the apothem.
5. A regular quadrilateral truncated pyramid has base sides $9$ and $3$ and height $8$. Find the height of the full pyramid it was cut from.
6. The lateral faces of a regular quadrilateral truncated pyramid with base sides $7$ and $1$ make $60^\\circ$ with the lower base. Find the height, the apothem and $S_{\\text{lat}}$.
7. Find the diagonal of a regular quadrilateral truncated pyramid with base sides $8$ and $2$ and height $4$.
8. Prove that the lateral faces of a truncated pyramid are trapezoids.

### Answers

1. $54 \\cdot \\dfrac19 = 6$. 2. $r_1 - r_2 = 3$, $l = 5$, $S_{\\text{lat}} = \\dfrac12 (32 + 8) \\cdot 5 = 100$, $S = 168$. 3. $R_1 - R_2 = 2\\sqrt3$, $h = \\sqrt{16 - 12} = 2$; $r_1 - r_2 = \\sqrt3$, $l = \\sqrt7$; $S_{\\text{lat}} = \\dfrac12 (36 + 18)\\sqrt7 = 27\\sqrt7$. 4. $R_1 - R_2 = 2\\sqrt2$, $h = \\sqrt{9 - 8} = 1$; $r_1 - r_2 = 2$, $l = \\sqrt5$. 5. $\\dfrac{H - 8}{H} = \\dfrac13$, $H = 12$. 6. $r_1 - r_2 = 3$, $h = 3\\sqrt3$, $l = 6$, $S_{\\text{lat}} = \\dfrac12 (28 + 4) \\cdot 6 = 96$. 7. Span $\\dfrac{8\\sqrt2 + 2\\sqrt2}{2} = 5\\sqrt2$, $d = \\sqrt{50 + 16} = \\sqrt{66}$. 8. The section plane is parallel to the base, so each lateral face $A_iA_{i+1}A_{i+1}'A_i'$ has $A_i'A_{i+1}' \\parallel A_iA_{i+1}$ (a plane meets two parallel planes along parallel lines), while the lateral edges meet at the apex and are not parallel.`,
        hy: `## Հիմքին զուգահեռ հատույթ

**Թեորեմ։** Բուրգի հիմքին զուգահեռ հարթությունը կողմնային կողերը և բարձրությունը բաժանում է նույն հարաբերությամբ, բուրգից անջատում է սկզբնականին նման բուրգ, իսկ հատույթի և հիմքի մակերեսների հարաբերությունը հավասար է գագաթից դրանց հեռավորությունների քառակուսիների հարաբերությանը։

*Ապացույց։* $\\beta \\parallel \\alpha$ հարթությունը $PO$ բարձրությունը հատի $O'$ կետում, $PA_i$ կողերը՝ $A_i'$ կետերում։ $PA_iO$ հարթությունը զուգահեռ հարթությունները հատում է զուգահեռ ուղիղներով՝ $A_i'O' \\parallel A_iO$, ուստի Թալեսի թեորեմով $\\dfrac{PA_i'}{PA_i} = \\dfrac{PO'}{PO} = k$ ցանկացած $i$-ի համար։ $P$ կենտրոնով և $k$ գործակցով հոմոթետիան հիմքն արտապատկերում է հատույթի վրա, ուստի հատույթը հիմքին նման բազմանկյուն է $k$ գործակցով, և $\\dfrac{S'}{S} = k^2 = \\dfrac{PO'^2}{PO^2}$։ $\\blacksquare$

**Օրինակ 1։** Բուրգի բարձրությունը $12$ է, հիմքի մակերեսը՝ $36$։ Գագաթից $4$ հեռավորության վրա հիմքին զուգահեռ հարթությունը հատում է $36 \\cdot \\left(\\dfrac{4}{12}\\right)^2 = 4$ մակերեսով հատույթ։

## Հատած բուրգ

Բուրգի՝ հիմքի և զուգահեռ հատույթի միջև ընկած մասը **հատած բուրգ** է։ Նրա **հիմքերը** երկու նման բազմանկյուններն են, **կողմնային նիստերը** սեղաններ են, **բարձրությունը** հիմքերի հարթությունների հեռավորությունն է։ Կողմնային կողերի շարունակությունները հատվում են սկզբնական բուրգի գագաթում։

Կանոնավոր բուրգից հատված բուրգը **կանոնավոր** է․ նրա հիմքերը կանոնավոր բազմանկյուններ են, որոնց կենտրոնները մի ուղղի վրա են, իսկ կողմնային նիստերը հավասար հավասարասրուն սեղաններ են։ Դրանց բարձրությունը **ապոթեմն** է՝ $l$։

Հիմքերի կողերը լինեն $a$ և $b$ ($a > b$), ներգծած շրջանագծերի շառավիղները՝ $r_1, r_2$, արտագծածների՝ $R_1, R_2$, բարձրությունը՝ $h$, կողմնային կողը՝ $c$։ Վերին հիմքից ներքևին ուղղահայացներ տանելով՝ ստանում ենք ուղղանկյուն եռանկյուններ, որտեղ
$$l^2 = h^2 + (r_1 - r_2)^2, \\qquad c^2 = h^2 + (R_1 - R_2)^2.$$

**Թեորեմ։** Կանոնավոր հատած բուրգի կողմնային մակերևույթի մակերեսը հավասար է հիմքերի պարագծերի գումարի կեսի և ապոթեմի արտադրյալին․
$$S_{\\text{կողմ}} = \\frac12 (P_1 + P_2)\\, l.$$

*Ապացույց։* $n$ կողմնային նիստերից յուրաքանչյուրը $a$, $b$ հիմքերով և $l$ բարձրությամբ սեղան է, ուստի $S_{\\text{կողմ}} = n \\cdot \\dfrac{a + b}{2} l = \\dfrac{na + nb}{2} l = \\dfrac{P_1 + P_2}{2} l$։ $\\blacksquare$

**Օրինակ 2։** Կանոնավոր քառանկյուն հատած բուրգի հիմքերի կողմերը $10$ և $4$ են, բարձրությունը՝ $4$։ Այդ դեպքում $r_1 - r_2 = 5 - 2 = 3$, $l = \\sqrt{16 + 9} = 5$, $S_{\\text{կողմ}} = \\dfrac12 (40 + 16) \\cdot 5 = 140$, $S = 140 + 100 + 16 = 256$։ Կողմնային կողը․ $R_1 - R_2 = 5\\sqrt2 - 2\\sqrt2 = 3\\sqrt2$, $c = \\sqrt{16 + 18} = \\sqrt{34}$։

**Օրինակ 3։** Կանոնավոր եռանկյուն հատած բուրգի հիմքերի կողմերը $6$ և $3$ են, կողմնային կողը՝ $2$։ $R_1 - R_2 = \\dfrac{\\sqrt3}{3}(6 - 3) = \\sqrt3$, ուստի $h = \\sqrt{4 - 3} = 1$։ $r_1 - r_2 = \\dfrac{\\sqrt3}{6}(6 - 3) = \\dfrac{\\sqrt3}{2}$, $l = \\sqrt{1 + \\dfrac34} = \\dfrac{\\sqrt7}{2}$, $S_{\\text{կողմ}} = \\dfrac12 (18 + 9) \\cdot \\dfrac{\\sqrt7}{2} = \\dfrac{27\\sqrt7}{4}$։

**Օրինակ 4։** Վերականգնենք օրինակ 2-ի հատած բուրգի լրիվ բուրգը։ Հիմքերի հարաբերությունը $\\dfrac{4}{10} = \\dfrac25$ է, ուստի եթե լրիվ բուրգի բարձրությունը $H$ է, ապա $\\dfrac{H - 4}{H} = \\dfrac25$, որտեղից $H = \\dfrac{20}{3}$։ Անջատված բուրգի բարձրությունը $\\dfrac{20}{3} - 4 = \\dfrac83$ է։

**Օրինակ 5։** $8$ և $2$ հիմքերի կողմերով կանոնավոր քառանկյուն հատած բուրգի կողմնային նիստերը ներքևի հիմքի հետ կազմում են $45^\\circ$։ $h$ և $r_1 - r_2 = 3$ էջերով ուղղանկյուն եռանկյունում հիմքի անկյունը $45^\\circ$ է, ուստի $h = 3$, $l = 3\\sqrt2$, $S_{\\text{կողմ}} = \\dfrac12 (32 + 8) \\cdot 3\\sqrt2 = 60\\sqrt2$։

**Օրինակ 6։** Օրինակ 2-ի հատած բուրգի անկյունագծային հատույթը (երկու հանդիպակաց կողմնային կողերով) հավասարասրուն սեղան է $10\\sqrt2$ և $4\\sqrt2$ հիմքերով և $4$ բարձրությամբ։ Նրա անկյունագիծը մարմնի անկյունագիծն է․ հորիզոնական բացվածքը $\\dfrac{10\\sqrt2 + 4\\sqrt2}{2} = 7\\sqrt2$ է, ուստի $d = \\sqrt{98 + 16} = \\sqrt{114}$։

### Վարժություններ

1. Բուրգի բարձրությունը $9$ է, հիմքի մակերեսը՝ $54$։ Գտեք գագաթից $3$ հեռավորության վրա հիմքին զուգահեռ հարթությամբ հատույթի մակերեսը։
2. Կանոնավոր քառանկյուն հատած բուրգի հիմքերի կողմերը $8$ և $2$ են, բարձրությունը՝ $4$։ Գտեք ապոթեմը, $S_{\\text{կողմ}}$-ը և $S$-ը։
3. Կանոնավոր եռանկյուն հատած բուրգի հիմքերի կողմերը $12$ և $6$ են, կողմնային կողը՝ $4$։ Գտեք բարձրությունը, ապոթեմը և $S_{\\text{կողմ}}$-ը։
4. Կանոնավոր քառանկյուն հատած բուրգի հիմքերի կողմերը $6$ և $2$ են, կողմնային կողը՝ $3$։ Գտեք բարձրությունը և ապոթեմը։
5. Կանոնավոր քառանկյուն հատած բուրգի հիմքերի կողմերը $9$ և $3$ են, բարձրությունը՝ $8$։ Գտեք այն լրիվ բուրգի բարձրությունը, որից այն հատված է։
6. $7$ և $1$ հիմքերի կողմերով կանոնավոր քառանկյուն հատած բուրգի կողմնային նիստերը ներքևի հիմքի հետ կազմում են $60^\\circ$։ Գտեք բարձրությունը, ապոթեմը և $S_{\\text{կողմ}}$-ը։
7. Գտեք $8$ և $2$ հիմքերի կողմերով և $4$ բարձրությամբ կանոնավոր քառանկյուն հատած բուրգի անկյունագիծը։
8. Ապացուցեք, որ հատած բուրգի կողմնային նիստերը սեղաններ են։

### Պատասխաններ

1. $54 \\cdot \\dfrac19 = 6$։ 2. $r_1 - r_2 = 3$, $l = 5$, $S_{\\text{կողմ}} = \\dfrac12 (32 + 8) \\cdot 5 = 100$, $S = 168$։ 3. $R_1 - R_2 = 2\\sqrt3$, $h = \\sqrt{16 - 12} = 2$, $r_1 - r_2 = \\sqrt3$, $l = \\sqrt7$, $S_{\\text{կողմ}} = \\dfrac12 (36 + 18)\\sqrt7 = 27\\sqrt7$։ 4. $R_1 - R_2 = 2\\sqrt2$, $h = \\sqrt{9 - 8} = 1$, $r_1 - r_2 = 2$, $l = \\sqrt5$։ 5. $\\dfrac{H - 8}{H} = \\dfrac13$, $H = 12$։ 6. $r_1 - r_2 = 3$, $h = 3\\sqrt3$, $l = 6$, $S_{\\text{կողմ}} = \\dfrac12 (28 + 4) \\cdot 6 = 96$։ 7. Բացվածքը $\\dfrac{8\\sqrt2 + 2\\sqrt2}{2} = 5\\sqrt2$, $d = \\sqrt{50 + 16} = \\sqrt{66}$։ 8. Հատող հարթությունը զուգահեռ է հիմքին, ուստի յուրաքանչյուր $A_iA_{i+1}A_{i+1}'A_i'$ կողմնային նիստում $A_i'A_{i+1}' \\parallel A_iA_{i+1}$ (հարթությունն երկու զուգահեռ հարթություններ հատում է զուգահեռ ուղիղներով), իսկ կողմնային կողերը հատվում են գագաթում և զուգահեռ չեն։`,
        ru: `## Сечение, параллельное основанию

**Теорема.** Плоскость, параллельная основанию пирамиды, делит боковые рёбра и высоту в одном и том же отношении, отсекает пирамиду, подобную данной, а площади сечения и основания относятся как квадраты их расстояний от вершины.

*Доказательство.* Пусть плоскость $\\beta \\parallel \\alpha$ пересекает высоту $PO$ в точке $O'$, а рёбра $PA_i$ — в точках $A_i'$. Плоскость $PA_iO$ пересекает параллельные плоскости по параллельным прямым $A_i'O' \\parallel A_iO$, поэтому по теореме о пропорциональных отрезках $\\dfrac{PA_i'}{PA_i} = \\dfrac{PO'}{PO} = k$ для каждого $i$. Гомотетия с центром $P$ и коэффициентом $k$ переводит основание в сечение, значит, сечение — многоугольник, подобный основанию с коэффициентом $k$, и $\\dfrac{S'}{S} = k^2 = \\dfrac{PO'^2}{PO^2}$. $\\blacksquare$

**Пример 1.** Пирамида имеет высоту $12$ и площадь основания $36$. Плоскость, параллельная основанию и отстоящая от вершины на $4$, даёт сечение площади $36 \\cdot \\left(\\dfrac{4}{12}\\right)^2 = 4$.

## Усечённая пирамида

Часть пирамиды между основанием и параллельным сечением — **усечённая пирамида**. Её **основания** — два подобных многоугольника, **боковые грани** — трапеции, **высота** — расстояние между плоскостями оснований. Продолжения боковых рёбер пересекаются в вершине исходной пирамиды.

Усечённая пирамида, отсечённая от правильной пирамиды, **правильная**: её основания — правильные многоугольники с центрами на одной прямой, а боковые грани — равные равнобедренные трапеции. Их высота — **апофема** $l$.

Пусть рёбра оснований $a$ и $b$ ($a > b$), радиусы вписанных окружностей $r_1, r_2$, описанных $R_1, R_2$, высота $h$, боковое ребро $c$. Опустив перпендикуляры из верхнего основания на нижнее, получаем прямоугольные треугольники, в которых
$$l^2 = h^2 + (r_1 - r_2)^2, \\qquad c^2 = h^2 + (R_1 - R_2)^2.$$

**Теорема.** Площадь боковой поверхности правильной усечённой пирамиды равна произведению полусуммы периметров оснований на апофему:
$$S_{\\text{бок}} = \\frac12 (P_1 + P_2)\\, l.$$

*Доказательство.* Каждая из $n$ боковых граней — трапеция с основаниями $a$, $b$ и высотой $l$, поэтому $S_{\\text{бок}} = n \\cdot \\dfrac{a + b}{2} l = \\dfrac{na + nb}{2} l = \\dfrac{P_1 + P_2}{2} l$. $\\blacksquare$

**Пример 2.** Правильная четырёхугольная усечённая пирамида имеет стороны оснований $10$ и $4$ и высоту $4$. Тогда $r_1 - r_2 = 5 - 2 = 3$, $l = \\sqrt{16 + 9} = 5$, $S_{\\text{бок}} = \\dfrac12 (40 + 16) \\cdot 5 = 140$, $S = 140 + 100 + 16 = 256$. Боковое ребро: $R_1 - R_2 = 5\\sqrt2 - 2\\sqrt2 = 3\\sqrt2$, $c = \\sqrt{16 + 18} = \\sqrt{34}$.

**Пример 3.** Правильная треугольная усечённая пирамида имеет стороны оснований $6$ и $3$ и боковое ребро $2$. $R_1 - R_2 = \\dfrac{\\sqrt3}{3}(6 - 3) = \\sqrt3$, поэтому $h = \\sqrt{4 - 3} = 1$. $r_1 - r_2 = \\dfrac{\\sqrt3}{6}(6 - 3) = \\dfrac{\\sqrt3}{2}$, $l = \\sqrt{1 + \\dfrac34} = \\dfrac{\\sqrt7}{2}$, $S_{\\text{бок}} = \\dfrac12 (18 + 9) \\cdot \\dfrac{\\sqrt7}{2} = \\dfrac{27\\sqrt7}{4}$.

**Пример 4.** Восстановим полную пирамиду для усечённой пирамиды из примера 2. Основания относятся как $\\dfrac{4}{10} = \\dfrac25$, поэтому если $H$ — высота полной пирамиды, то $\\dfrac{H - 4}{H} = \\dfrac25$, откуда $H = \\dfrac{20}{3}$. Отсечённая пирамида имеет высоту $\\dfrac{20}{3} - 4 = \\dfrac83$.

**Пример 5.** Боковые грани правильной четырёхугольной усечённой пирамиды со сторонами оснований $8$ и $2$ образуют с нижним основанием $45^\\circ$. В прямоугольном треугольнике с катетами $h$ и $r_1 - r_2 = 3$ угол при основании равен $45^\\circ$, поэтому $h = 3$, $l = 3\\sqrt2$, $S_{\\text{бок}} = \\dfrac12 (32 + 8) \\cdot 3\\sqrt2 = 60\\sqrt2$.

**Пример 6.** Диагональное сечение усечённой пирамиды из примера 2 (через два противоположных боковых ребра) — равнобедренная трапеция с основаниями $10\\sqrt2$ и $4\\sqrt2$ и высотой $4$. Её диагональ — диагональ тела: горизонтальный пролёт равен $\\dfrac{10\\sqrt2 + 4\\sqrt2}{2} = 7\\sqrt2$, поэтому $d = \\sqrt{98 + 16} = \\sqrt{114}$.

### Упражнения

1. Пирамида имеет высоту $9$ и площадь основания $54$. Найдите площадь сечения плоскостью, параллельной основанию и отстоящей от вершины на $3$.
2. Правильная четырёхугольная усечённая пирамида имеет стороны оснований $8$ и $2$ и высоту $4$. Найдите апофему, $S_{\\text{бок}}$ и $S$.
3. Правильная треугольная усечённая пирамида имеет стороны оснований $12$ и $6$ и боковое ребро $4$. Найдите высоту, апофему и $S_{\\text{бок}}$.
4. Правильная четырёхугольная усечённая пирамида имеет стороны оснований $6$ и $2$ и боковое ребро $3$. Найдите высоту и апофему.
5. Правильная четырёхугольная усечённая пирамида имеет стороны оснований $9$ и $3$ и высоту $8$. Найдите высоту полной пирамиды, от которой она отсечена.
6. Боковые грани правильной четырёхугольной усечённой пирамиды со сторонами оснований $7$ и $1$ образуют с нижним основанием $60^\\circ$. Найдите высоту, апофему и $S_{\\text{бок}}$.
7. Найдите диагональ правильной четырёхугольной усечённой пирамиды со сторонами оснований $8$ и $2$ и высотой $4$.
8. Докажите, что боковые грани усечённой пирамиды — трапеции.

### Ответы

1. $54 \\cdot \\dfrac19 = 6$. 2. $r_1 - r_2 = 3$, $l = 5$, $S_{\\text{бок}} = \\dfrac12 (32 + 8) \\cdot 5 = 100$, $S = 168$. 3. $R_1 - R_2 = 2\\sqrt3$, $h = \\sqrt{16 - 12} = 2$; $r_1 - r_2 = \\sqrt3$, $l = \\sqrt7$; $S_{\\text{бок}} = \\dfrac12 (36 + 18)\\sqrt7 = 27\\sqrt7$. 4. $R_1 - R_2 = 2\\sqrt2$, $h = \\sqrt{9 - 8} = 1$; $r_1 - r_2 = 2$, $l = \\sqrt5$. 5. $\\dfrac{H - 8}{H} = \\dfrac13$, $H = 12$. 6. $r_1 - r_2 = 3$, $h = 3\\sqrt3$, $l = 6$, $S_{\\text{бок}} = \\dfrac12 (28 + 4) \\cdot 6 = 96$. 7. Пролёт $\\dfrac{8\\sqrt2 + 2\\sqrt2}{2} = 5\\sqrt2$, $d = \\sqrt{50 + 16} = \\sqrt{66}$. 8. Секущая плоскость параллельна основанию, поэтому в каждой боковой грани $A_iA_{i+1}A_{i+1}'A_i'$ имеем $A_i'A_{i+1}' \\parallel A_iA_{i+1}$ (плоскость пересекает две параллельные плоскости по параллельным прямым), а боковые рёбра пересекаются в вершине и не параллельны.`,
      },
      [
        q(t("The lateral faces of a truncated pyramid are…", "Հատած բուրգի կողմնային նիստերը…", "Боковые грани усечённой пирамиды —"), [t("triangles", "եռանկյուններ են", "треугольники"), t("trapezoids", "սեղաններ են", "трапеции"), t("parallelograms", "զուգահեռագծեր են", "параллелограммы")], 1),
        q(t("The bases of a truncated pyramid are…", "Հատած բուրգի հիմքերը…", "Основания усечённой пирамиды —"), [t("equal polygons", "հավասար բազմանկյուններ են", "равные многоугольники"), t("similar polygons", "նման բազմանկյուններ են", "подобные многоугольники"), t("always squares", "միշտ քառակուսիներ են", "всегда квадраты")], 1),
        q(t("A plane parallel to the base cuts off a pyramid that is…", "Հիմքին զուգահեռ հարթությունն անջատում է բուրգ, որը…", "Плоскость, параллельная основанию, отсекает пирамиду, которая…"), [t("similar to the original one", "նման է սկզբնականին", "подобна исходной"), t("equal to the original one", "հավասար է սկզբնականին", "равна исходной"), t("regular", "կանոնավոր է", "правильная")], 0),
        q(t("A pyramid of height 12 is cut parallel to the base at distance 6 from the apex. Section area : base area =", "12 բարձրությամբ բուրգը հատված է հիմքին զուգահեռ՝ գագաթից 6 հեռավորության վրա։ Հատույթի և հիմքի մակերեսների հարաբերությունը՝", "Пирамиду высоты 12 рассекли параллельно основанию на расстоянии 6 от вершины. Площадь сечения : площадь основания ="), [t("1 : 2", "1 : 2", "1 : 2"), t("1 : 4", "1 : 4", "1 : 4"), t("1 : 8", "1 : 8", "1 : 8")], 1),
        q(t("The lateral surface area of a regular truncated pyramid equals…", "Կանոնավոր հատած բուրգի կողմնային մակերևույթի մակերեսը հավասար է…", "Площадь боковой поверхности правильной усечённой пирамиды равна…"), [t("(P₁ + P₂)·l", "(P₁ + P₂)·l", "(P₁ + P₂)·l"), t("½(P₁ + P₂)·l", "½(P₁ + P₂)·l", "½(P₁ + P₂)·l"), t("½(P₁ + P₂)·h", "½(P₁ + P₂)·h", "½(P₁ + P₂)·h")], 1),
        q(t("A regular quadrilateral truncated pyramid has base sides 10 and 4 and height 4. Its apothem is…", "Կանոնավոր քառանկյուն հատած բուրգի հիմքերի կողմերը 10 և 4 են, բարձրությունը՝ 4։ Ապոթեմը…", "Правильная четырёхугольная усечённая пирамида имеет стороны оснований 10 и 4 и высоту 4. Апофема равна…"), [t("5", "5", "5"), t("√34", "√34", "√34"), t("7", "7", "7")], 0),
      ],
    ),
    lesson(
      "regular-polyhedra",
      ["Regular polyhedra; Euler's formula", "Կանոնավոր բազմանիստներ, Էյլերի բանաձև", "Правильные многогранники; формула Эйлера"],
      {
        en: ["State Euler's formula V − E + F = 2 for convex polyhedra and use it to count vertices, edges and faces", "Explain why there are exactly five regular polyhedra and describe each of them", "Compute heights, surface areas and distances in the regular tetrahedron, cube and octahedron"],
        hy: ["Ձևակերպել Էյլերի V − E + F = 2 բանաձևն ուռուցիկ բազմանիստների համար և կիրառել այն գագաթների, կողերի և նիստերի հաշվման համար", "Բացատրել, թե ինչու կան ճիշտ հինգ կանոնավոր բազմանիստներ, և նկարագրել դրանցից յուրաքանչյուրը", "Հաշվել բարձրություններ, մակերևույթի մակերեսներ և հեռավորություններ կանոնավոր քառանիստում, խորանարդում և ութանիստում"],
        ru: ["Формулировать формулу Эйлера V − E + F = 2 для выпуклых многогранников и применять её для подсчёта вершин, рёбер и граней", "Объяснять, почему существует ровно пять правильных многогранников, и описывать каждый из них", "Вычислять высоты, площади поверхности и расстояния в правильном тетраэдре, кубе и октаэдре"],
      },
      {
        en: `## Convex polyhedra and Euler's formula

A **polyhedron** is a solid bounded by finitely many polygons (**faces**); the sides of the faces are the **edges**, their endpoints the **vertices**. A polyhedron is **convex** if it lies on one side of the plane of each of its faces. Prisms, pyramids and truncated pyramids with convex bases are convex.

**Euler's formula.** For every convex polyhedron with $V$ vertices, $E$ edges and $F$ faces
$$V - E + F = 2.$$

**Example 1.** Cube: $8 - 12 + 6 = 2$. Tetrahedron: $4 - 6 + 4 = 2$. Pentagonal prism: $10 - 15 + 7 = 2$. In general an $n$-gonal prism has $2n - 3n + (n + 2) = 2$ and an $n$-gonal pyramid has $(n + 1) - 2n + (n + 1) = 2$.

Two counting rules go with the formula. If every face is a $p$-gon, then $pF = 2E$ (each edge belongs to two faces). If $q$ edges meet at every vertex, then $qV = 2E$ (each edge has two endpoints).

**Example 2.** A convex polyhedron has $12$ vertices and $30$ edges. Then $F = 2 - 12 + 30 = 20$. If all faces are triangles, $3F = 60 = 2E$ is consistent: this is the icosahedron.

**Example 3.** Every face of a convex polyhedron is a pentagon and three edges meet at every vertex. Then $5F = 2E$ and $3V = 2E$, so $\\dfrac{2E}{3} - E + \\dfrac{2E}{5} = 2$, $\\dfrac{10E - 15E + 6E}{15} = 2$, $E = 30$, $F = 12$, $V = 20$: the dodecahedron.

## The five regular polyhedra

A convex polyhedron is **regular** if all its faces are congruent regular polygons and the same number of faces meets at every vertex.

**Theorem.** There are exactly five regular polyhedra.

*Proof of the bound.* The face angles at a vertex of a convex polyhedron add up to less than $360^\\circ$, and at least three faces meet there. With equilateral triangles ($60^\\circ$) we can have $3$, $4$ or $5$ faces at a vertex ($6 \\cdot 60^\\circ = 360^\\circ$ is too much); with squares ($90^\\circ$) only $3$; with regular pentagons ($108^\\circ$) only $3$; regular hexagons ($120^\\circ$) already give $3 \\cdot 120^\\circ = 360^\\circ$. That leaves five possibilities, and each is realised. $\\blacksquare$

| Polyhedron | Faces | V | E | F |
|---|---|---|---|---|
| Tetrahedron | 4 triangles | 4 | 6 | 4 |
| Cube (hexahedron) | 6 squares | 8 | 12 | 6 |
| Octahedron | 8 triangles | 6 | 12 | 8 |
| Dodecahedron | 12 pentagons | 20 | 30 | 12 |
| Icosahedron | 20 triangles | 12 | 30 | 20 |

At each vertex meet $3, 3, 4, 3, 5$ faces respectively. The centres of the faces of a cube are the vertices of an octahedron and vice versa; the same holds for the dodecahedron and the icosahedron; the tetrahedron is paired with itself.

Surface areas for edge $a$: tetrahedron $a^2\\sqrt3$, cube $6a^2$, octahedron $2a^2\\sqrt3$, icosahedron $5a^2\\sqrt3$.

**Example 4.** A regular tetrahedron $DABC$ has edge $a$. The foot of the height from $D$ is the centre of the equilateral base (all lateral edges are equal), so $R = \\dfrac{a\\sqrt3}{3}$ and
$$h^2 = a^2 - \\frac{a^2}{3} = \\frac{2a^2}{3}, \\qquad h = \\frac{a\\sqrt6}{3}.$$
For $a = 6$: $h = 2\\sqrt6$, $S = 36\\sqrt3$.

**Example 5.** The angle between two faces of a regular tetrahedron. The face $DBC$ and the base $ABC$ meet along $BC$; the apothem $DM = \\dfrac{a\\sqrt3}{2}$ and the inradius $OM = \\dfrac{a\\sqrt3}{6}$ form the linear angle at $M$, so $\\cos\\varphi = \\dfrac{OM}{DM} = \\dfrac13$, $\\varphi \\approx 70{,}5^\\circ$.

**Example 6.** A regular octahedron with edge $a$ is two regular quadrilateral pyramids glued along a square base. Each pyramid has height $\\sqrt{a^2 - \\dfrac{a^2}{2}} = \\dfrac{a\\sqrt2}{2}$, so opposite vertices are $a\\sqrt2$ apart. For $a = 4$: $S = 32\\sqrt3$, the distance is $4\\sqrt2$.

**Example 7.** A cube has edge $2$. The centres of its faces are $(\\pm1; 0; 0)$, $(0; \\pm1; 0)$, $(0; 0; \\pm1)$ relative to the centre; neighbouring centres are $\\sqrt2$ apart, so they form a regular octahedron with edge $\\sqrt2$ and surface area $2 \\cdot 2 \\cdot \\sqrt3 = 4\\sqrt3$.

**Example 8.** A regular tetrahedron can be inscribed in a cube: take four vertices of the cube no two of which are joined by an edge. The tetrahedron's edges are face diagonals, so a tetrahedron with edge $a$ sits in a cube with edge $\\dfrac{a}{\\sqrt2}$. The midpoints of two opposite edges of the tetrahedron are the centres of two opposite faces of the cube, so they are $\\dfrac{a}{\\sqrt2} = \\dfrac{a\\sqrt2}{2}$ apart.

### Exercises

1. Verify Euler's formula for a hexagonal pyramid and a hexagonal prism.
2. A convex polyhedron has $6$ vertices and $12$ edges. How many faces does it have? Can all of them be triangles?
3. Find the height and the surface area of a regular tetrahedron with edge $2$.
4. Find the surface area of a regular octahedron with edge $3$ and the distance between two opposite vertices.
5. The centres of the faces of a cube with edge $4$ are the vertices of an octahedron. Find its edge and surface area.
6. Every face of a convex polyhedron is a triangle and five edges meet at every vertex. Find $V$, $E$, $F$.
7. Find the distance between the midpoints of two opposite edges of a regular tetrahedron with edge $4$.
8. Prove that in a convex polyhedron with all faces triangular $E = 3V - 6$.

### Answers

1. Pyramid: $7 - 12 + 7 = 2$; prism: $12 - 18 + 8 = 2$. 2. $F = 2 - 6 + 12 = 8$; $3 \\cdot 8 = 24 = 2 \\cdot 12$, yes (the octahedron). 3. $h = \\dfrac{2\\sqrt6}{3}$, $S = 4\\sqrt3$. 4. $S = 18\\sqrt3$, distance $3\\sqrt2$. 5. Edge $2\\sqrt2$, $S = 2 \\cdot 8 \\cdot \\sqrt3 = 16\\sqrt3$. 6. $3F = 2E$, $5V = 2E$; $\\dfrac{2E}{5} - E + \\dfrac{2E}{3} = 2$ gives $E = 30$, $F = 20$, $V = 12$ (icosahedron). 7. $\\dfrac{4}{\\sqrt2} = 2\\sqrt2$. 8. $3F = 2E$, so $V - E + \\dfrac{2E}{3} = 2$, $V - \\dfrac E3 = 2$, $E = 3V - 6$.`,
        hy: `## Ուռուցիկ բազմանիստներ և Էյլերի բանաձևը

**Բազմանիստը** վերջավոր թվով բազմանկյուններով (**նիստերով**) սահմանափակված մարմին է, նիստերի կողմերը **կողերն** են, դրանց ծայրակետերը՝ **գագաթները**։ Բազմանիստն **ուռուցիկ** է, եթե այն գտնվում է իր յուրաքանչյուր նիստի հարթության մի կողմում։ Ուռուցիկ հիմքերով պրիզմաները, բուրգերը և հատած բուրգերն ուռուցիկ են։

**Էյլերի բանաձև։** $V$ գագաթ, $E$ կող և $F$ նիստ ունեցող ցանկացած ուռուցիկ բազմանիստի համար
$$V - E + F = 2.$$

**Օրինակ 1։** Խորանարդ․ $8 - 12 + 6 = 2$։ Քառանիստ․ $4 - 6 + 4 = 2$։ Հնգանկյուն պրիզմա․ $10 - 15 + 7 = 2$։ Ընդհանրապես $n$-անկյուն պրիզմայի համար $2n - 3n + (n + 2) = 2$, $n$-անկյուն բուրգի համար՝ $(n + 1) - 2n + (n + 1) = 2$։

Բանաձևին ուղեկցում են հաշվման երկու կանոն։ Եթե յուրաքանչյուր նիստ $p$-անկյուն է, ապա $pF = 2E$ (յուրաքանչյուր կող պատկանում է երկու նիստի)։ Եթե յուրաքանչյուր գագաթում հանդիպում են $q$ կող, ապա $qV = 2E$ (յուրաքանչյուր կող ունի երկու ծայրակետ)։

**Օրինակ 2։** Ուռուցիկ բազմանիստն ունի $12$ գագաթ և $30$ կող։ Այդ դեպքում $F = 2 - 12 + 30 = 20$։ Եթե բոլոր նիստերն եռանկյուններ են, $3F = 60 = 2E$-ն համաձայն է․ սա քսանանիստն է։

**Օրինակ 3։** Ուռուցիկ բազմանիստի յուրաքանչյուր նիստ հնգանկյուն է, և յուրաքանչյուր գագաթում հանդիպում են երեք կող։ Այդ դեպքում $5F = 2E$ և $3V = 2E$, ուստի $\\dfrac{2E}{3} - E + \\dfrac{2E}{5} = 2$, $\\dfrac{10E - 15E + 6E}{15} = 2$, $E = 30$, $F = 12$, $V = 20$․ տասներկուանիստը։

## Հինգ կանոնավոր բազմանիստները

Ուռուցիկ բազմանիստը **կանոնավոր** է, եթե նրա բոլոր նիստերը հավասար կանոնավոր բազմանկյուններ են, և յուրաքանչյուր գագաթում հանդիպում են հավասար թվով նիստեր։

**Թեորեմ։** Գոյություն ունեն ճիշտ հինգ կանոնավոր բազմանիստներ։

*Սահմանի ապացույցը։* Ուռուցիկ բազմանիստի գագաթում նիստերի անկյունների գումարը փոքր է $360^\\circ$-ից, և այնտեղ հանդիպում են առնվազն երեք նիստ։ Հավասարակողմ եռանկյուններով ($60^\\circ$) գագաթում կարող են լինել $3$, $4$ կամ $5$ նիստ ($6 \\cdot 60^\\circ = 360^\\circ$-ն արդեն շատ է), քառակուսիներով ($90^\\circ$)՝ միայն $3$, կանոնավոր հնգանկյուններով ($108^\\circ$)՝ միայն $3$, կանոնավոր վեցանկյուններն ($120^\\circ$) արդեն տալիս են $3 \\cdot 120^\\circ = 360^\\circ$։ Մնում են հինգ հնարավորություն, և յուրաքանչյուրն իրականանում է։ $\\blacksquare$

| Բազմանիստ | Նիստեր | V | E | F |
|---|---|---|---|---|
| Քառանիստ | 4 եռանկյուն | 4 | 6 | 4 |
| Խորանարդ (վեցանիստ) | 6 քառակուսի | 8 | 12 | 6 |
| Ութանիստ | 8 եռանկյուն | 6 | 12 | 8 |
| Տասներկուանիստ | 12 հնգանկյուն | 20 | 30 | 12 |
| Քսանանիստ | 20 եռանկյուն | 12 | 30 | 20 |

Յուրաքանչյուր գագաթում հանդիպում են համապատասխանաբար $3, 3, 4, 3, 5$ նիստ։ Խորանարդի նիստերի կենտրոններն ութանիստի գագաթներ են և հակառակը, նույնը ճիշտ է տասներկուանիստի և քսանանիստի համար, քառանիստը զուգորդվում է ինքն իր հետ։

Մակերևույթի մակերեսները $a$ կողի դեպքում․ քառանիստ՝ $a^2\\sqrt3$, խորանարդ՝ $6a^2$, ութանիստ՝ $2a^2\\sqrt3$, քսանանիստ՝ $5a^2\\sqrt3$։

**Օրինակ 4։** $DABC$ կանոնավոր քառանիստի կողը $a$ է։ $D$-ից տարված բարձրության հիմքը հավասարակողմ հիմքի կենտրոնն է (բոլոր կողմնային կողերը հավասար են), ուստի $R = \\dfrac{a\\sqrt3}{3}$ և
$$h^2 = a^2 - \\frac{a^2}{3} = \\frac{2a^2}{3}, \\qquad h = \\frac{a\\sqrt6}{3}.$$
$a = 6$-ի դեպքում $h = 2\\sqrt6$, $S = 36\\sqrt3$։

**Օրինակ 5։** Կանոնավոր քառանիստի երկու նիստերի միջև անկյունը։ $DBC$ նիստը և $ABC$ հիմքը հատվում են $BC$-ով, $DM = \\dfrac{a\\sqrt3}{2}$ ապոթեմը և $OM = \\dfrac{a\\sqrt3}{6}$ ներգծած շառավիղը կազմում են գծային անկյունը $M$-ում, ուստի $\\cos\\varphi = \\dfrac{OM}{DM} = \\dfrac13$, $\\varphi \\approx 70{,}5^\\circ$։

**Օրինակ 6։** $a$ կողով կանոնավոր ութանիստը քառակուսի հիմքով միացված երկու կանոնավոր քառանկյուն բուրգ է։ Յուրաքանչյուր բուրգի բարձրությունը $\\sqrt{a^2 - \\dfrac{a^2}{2}} = \\dfrac{a\\sqrt2}{2}$ է, ուստի հանդիպակաց գագաթների հեռավորությունը $a\\sqrt2$ է։ $a = 4$-ի դեպքում $S = 32\\sqrt3$, հեռավորությունը՝ $4\\sqrt2$։

**Օրինակ 7։** Խորանարդի կողը $2$ է։ Նրա նիստերի կենտրոնները կենտրոնի նկատմամբ $(\\pm1; 0; 0)$, $(0; \\pm1; 0)$, $(0; 0; \\pm1)$ են, հարևան կենտրոնների հեռավորությունը $\\sqrt2$ է, ուստի դրանք կազմում են $\\sqrt2$ կողով կանոնավոր ութանիստ, որի մակերևույթի մակերեսը $2 \\cdot 2 \\cdot \\sqrt3 = 4\\sqrt3$ է։

**Օրինակ 8։** Կանոնավոր քառանիստը կարելի է ներգծել խորանարդում․ վերցնենք խորանարդի չորս գագաթ, որոնցից ոչ մի երկուսը կողով միացված չեն։ Քառանիստի կողերը նիստերի անկյունագծեր են, ուստի $a$ կողով քառանիստը տեղավորվում է $\\dfrac{a}{\\sqrt2}$ կողով խորանարդում։ Քառանիստի երկու հանդիպակաց կողերի միջնակետերը խորանարդի երկու հանդիպակաց նիստերի կենտրոններն են, ուստի դրանց հեռավորությունը $\\dfrac{a}{\\sqrt2} = \\dfrac{a\\sqrt2}{2}$ է։

### Վարժություններ

1. Ստուգեք Էյլերի բանաձևը վեցանկյուն բուրգի և վեցանկյուն պրիզմայի համար։
2. Ուռուցիկ բազմանիստն ունի $6$ գագաթ և $12$ կող։ Քանի՞ նիստ ունի այն։ Կարո՞ղ են բոլորն եռանկյուններ լինել։
3. Գտեք $2$ կողով կանոնավոր քառանիստի բարձրությունը և մակերևույթի մակերեսը։
4. Գտեք $3$ կողով կանոնավոր ութանիստի մակերևույթի մակերեսը և երկու հանդիպակաց գագաթների հեռավորությունը։
5. $4$ կողով խորանարդի նիստերի կենտրոններն ութանիստի գագաթներ են։ Գտեք նրա կողը և մակերևույթի մակերեսը։
6. Ուռուցիկ բազմանիստի յուրաքանչյուր նիստ եռանկյուն է, և յուրաքանչյուր գագաթում հանդիպում են հինգ կող։ Գտեք $V$, $E$, $F$։
7. Գտեք $4$ կողով կանոնավոր քառանիստի երկու հանդիպակաց կողերի միջնակետերի հեռավորությունը։
8. Ապացուցեք, որ բոլոր նիստերն եռանկյուն ունեցող ուռուցիկ բազմանիստում $E = 3V - 6$։

### Պատասխաններ

1. Բուրգ․ $7 - 12 + 7 = 2$, պրիզմա․ $12 - 18 + 8 = 2$։ 2. $F = 2 - 6 + 12 = 8$, $3 \\cdot 8 = 24 = 2 \\cdot 12$, այո (ութանիստը)։ 3. $h = \\dfrac{2\\sqrt6}{3}$, $S = 4\\sqrt3$։ 4. $S = 18\\sqrt3$, հեռավորությունը $3\\sqrt2$։ 5. Կողը $2\\sqrt2$, $S = 2 \\cdot 8 \\cdot \\sqrt3 = 16\\sqrt3$։ 6. $3F = 2E$, $5V = 2E$, $\\dfrac{2E}{5} - E + \\dfrac{2E}{3} = 2$-ից $E = 30$, $F = 20$, $V = 12$ (քսանանիստ)։ 7. $\\dfrac{4}{\\sqrt2} = 2\\sqrt2$։ 8. $3F = 2E$, ուստի $V - E + \\dfrac{2E}{3} = 2$, $V - \\dfrac E3 = 2$, $E = 3V - 6$։`,
        ru: `## Выпуклые многогранники и формула Эйлера

**Многогранник** — тело, ограниченное конечным числом многоугольников (**граней**); стороны граней — **рёбра**, их концы — **вершины**. Многогранник **выпуклый**, если он лежит по одну сторону от плоскости каждой своей грани. Призмы, пирамиды и усечённые пирамиды с выпуклыми основаниями выпуклы.

**Формула Эйлера.** Для любого выпуклого многогранника с $V$ вершинами, $E$ рёбрами и $F$ гранями
$$V - E + F = 2.$$

**Пример 1.** Куб: $8 - 12 + 6 = 2$. Тетраэдр: $4 - 6 + 4 = 2$. Пятиугольная призма: $10 - 15 + 7 = 2$. Вообще у $n$-угольной призмы $2n - 3n + (n + 2) = 2$, а у $n$-угольной пирамиды $(n + 1) - 2n + (n + 1) = 2$.

С формулой связаны два правила подсчёта. Если каждая грань — $p$-угольник, то $pF = 2E$ (каждое ребро принадлежит двум граням). Если в каждой вершине сходятся $q$ рёбер, то $qV = 2E$ (у каждого ребра два конца).

**Пример 2.** Выпуклый многогранник имеет $12$ вершин и $30$ рёбер. Тогда $F = 2 - 12 + 30 = 20$. Если все грани — треугольники, $3F = 60 = 2E$ согласуется: это икосаэдр.

**Пример 3.** Каждая грань выпуклого многогранника — пятиугольник, и в каждой вершине сходятся три ребра. Тогда $5F = 2E$ и $3V = 2E$, поэтому $\\dfrac{2E}{3} - E + \\dfrac{2E}{5} = 2$, $\\dfrac{10E - 15E + 6E}{15} = 2$, $E = 30$, $F = 12$, $V = 20$: додекаэдр.

## Пять правильных многогранников

Выпуклый многогранник **правильный**, если все его грани — равные правильные многоугольники и в каждой вершине сходится одно и то же число граней.

**Теорема.** Существует ровно пять правильных многогранников.

*Доказательство оценки.* Сумма плоских углов при вершине выпуклого многогранника меньше $360^\\circ$, и в вершине сходятся не менее трёх граней. Из равносторонних треугольников ($60^\\circ$) при вершине могут сходиться $3$, $4$ или $5$ граней ($6 \\cdot 60^\\circ = 360^\\circ$ — уже слишком много); из квадратов ($90^\\circ$) — только $3$; из правильных пятиугольников ($108^\\circ$) — только $3$; правильные шестиугольники ($120^\\circ$) уже дают $3 \\cdot 120^\\circ = 360^\\circ$. Остаётся пять возможностей, и каждая реализуется. $\\blacksquare$

| Многогранник | Грани | V | E | F |
|---|---|---|---|---|
| Тетраэдр | 4 треугольника | 4 | 6 | 4 |
| Куб (гексаэдр) | 6 квадратов | 8 | 12 | 6 |
| Октаэдр | 8 треугольников | 6 | 12 | 8 |
| Додекаэдр | 12 пятиугольников | 20 | 30 | 12 |
| Икосаэдр | 20 треугольников | 12 | 30 | 20 |

В каждой вершине сходятся соответственно $3, 3, 4, 3, 5$ граней. Центры граней куба — вершины октаэдра и наоборот; то же верно для додекаэдра и икосаэдра; тетраэдр парен сам себе.

Площади поверхности при ребре $a$: тетраэдр $a^2\\sqrt3$, куб $6a^2$, октаэдр $2a^2\\sqrt3$, икосаэдр $5a^2\\sqrt3$.

**Пример 4.** Правильный тетраэдр $DABC$ имеет ребро $a$. Основание высоты из $D$ — центр равностороннего основания (все боковые рёбра равны), поэтому $R = \\dfrac{a\\sqrt3}{3}$ и
$$h^2 = a^2 - \\frac{a^2}{3} = \\frac{2a^2}{3}, \\qquad h = \\frac{a\\sqrt6}{3}.$$
При $a = 6$: $h = 2\\sqrt6$, $S = 36\\sqrt3$.

**Пример 5.** Угол между двумя гранями правильного тетраэдра. Грань $DBC$ и основание $ABC$ пересекаются по $BC$; апофема $DM = \\dfrac{a\\sqrt3}{2}$ и радиус вписанной окружности $OM = \\dfrac{a\\sqrt3}{6}$ образуют линейный угол при $M$, поэтому $\\cos\\varphi = \\dfrac{OM}{DM} = \\dfrac13$, $\\varphi \\approx 70{,}5^\\circ$.

**Пример 6.** Правильный октаэдр с ребром $a$ — это две правильные четырёхугольные пирамиды, склеенные по квадратному основанию. Высота каждой пирамиды $\\sqrt{a^2 - \\dfrac{a^2}{2}} = \\dfrac{a\\sqrt2}{2}$, поэтому противоположные вершины удалены на $a\\sqrt2$. При $a = 4$: $S = 32\\sqrt3$, расстояние $4\\sqrt2$.

**Пример 7.** Куб имеет ребро $2$. Центры его граней относительно центра — $(\\pm1; 0; 0)$, $(0; \\pm1; 0)$, $(0; 0; \\pm1)$; соседние центры удалены на $\\sqrt2$, поэтому они образуют правильный октаэдр с ребром $\\sqrt2$ и площадью поверхности $2 \\cdot 2 \\cdot \\sqrt3 = 4\\sqrt3$.

**Пример 8.** Правильный тетраэдр можно вписать в куб: возьмём четыре вершины куба, никакие две из которых не соединены ребром. Рёбра тетраэдра — диагонали граней, поэтому тетраэдр с ребром $a$ помещается в куб с ребром $\\dfrac{a}{\\sqrt2}$. Середины двух противоположных рёбер тетраэдра — центры двух противоположных граней куба, поэтому расстояние между ними $\\dfrac{a}{\\sqrt2} = \\dfrac{a\\sqrt2}{2}$.

### Упражнения

1. Проверьте формулу Эйлера для шестиугольной пирамиды и шестиугольной призмы.
2. Выпуклый многогранник имеет $6$ вершин и $12$ рёбер. Сколько у него граней? Могут ли все они быть треугольниками?
3. Найдите высоту и площадь поверхности правильного тетраэдра с ребром $2$.
4. Найдите площадь поверхности правильного октаэдра с ребром $3$ и расстояние между двумя противоположными вершинами.
5. Центры граней куба с ребром $4$ — вершины октаэдра. Найдите его ребро и площадь поверхности.
6. Каждая грань выпуклого многогранника — треугольник, и в каждой вершине сходятся пять рёбер. Найдите $V$, $E$, $F$.
7. Найдите расстояние между серединами двух противоположных рёбер правильного тетраэдра с ребром $4$.
8. Докажите, что в выпуклом многограннике, все грани которого треугольники, $E = 3V - 6$.

### Ответы

1. Пирамида: $7 - 12 + 7 = 2$; призма: $12 - 18 + 8 = 2$. 2. $F = 2 - 6 + 12 = 8$; $3 \\cdot 8 = 24 = 2 \\cdot 12$, да (октаэдр). 3. $h = \\dfrac{2\\sqrt6}{3}$, $S = 4\\sqrt3$. 4. $S = 18\\sqrt3$, расстояние $3\\sqrt2$. 5. Ребро $2\\sqrt2$, $S = 2 \\cdot 8 \\cdot \\sqrt3 = 16\\sqrt3$. 6. $3F = 2E$, $5V = 2E$; из $\\dfrac{2E}{5} - E + \\dfrac{2E}{3} = 2$ получаем $E = 30$, $F = 20$, $V = 12$ (икосаэдр). 7. $\\dfrac{4}{\\sqrt2} = 2\\sqrt2$. 8. $3F = 2E$, поэтому $V - E + \\dfrac{2E}{3} = 2$, $V - \\dfrac E3 = 2$, $E = 3V - 6$.`,
      },
      [
        q(t("Euler's formula for a convex polyhedron states…", "Էյլերի բանաձևն ուռուցիկ բազմանիստի համար․", "Формула Эйлера для выпуклого многогранника:"), [t("V + E + F = 2", "V + E + F = 2", "V + E + F = 2"), t("V − E + F = 2", "V − E + F = 2", "V − E + F = 2"), t("V − E − F = 2", "V − E − F = 2", "V − E − F = 2")], 1),
        q(t("How many regular polyhedra exist?", "Քանի՞ կանոնավոր բազմանիստ գոյություն ունի։", "Сколько существует правильных многогранников?"), [t("3", "3", "3"), t("5", "5", "5"), t("infinitely many", "անվերջ շատ", "бесконечно много")], 1),
        q(t("The faces of a regular octahedron are…", "Կանոնավոր ութանիստի նիստերը…", "Грани правильного октаэдра —"), [t("8 equilateral triangles", "8 հավասարակողմ եռանկյուն են", "8 равносторонних треугольников"), t("8 squares", "8 քառակուսի են", "8 квадратов"), t("6 equilateral triangles", "6 հավասարակողմ եռանկյուն են", "6 равносторонних треугольников")], 0),
        q(t("The faces of a regular dodecahedron are…", "Կանոնավոր տասներկուանիստի նիստերը…", "Грани правильного додекаэдра —"), [t("12 regular pentagons", "12 կանոնավոր հնգանկյուն են", "12 правильных пятиугольников"), t("20 triangles", "20 եռանկյուն են", "20 треугольников"), t("12 regular hexagons", "12 կանոնավոր վեցանկյուն են", "12 правильных шестиугольников")], 0),
        q(t("The height of a regular tetrahedron with edge a equals…", "a կողով կանոնավոր քառանիստի բարձրությունը հավասար է…", "Высота правильного тетраэдра с ребром a равна…"), [t("a√3/2", "a√3/2", "a√3/2"), t("a√6/3", "a√6/3", "a√6/3"), t("a√2/2", "a√2/2", "a√2/2")], 1),
        q(t("A convex polyhedron with 8 vertices and 12 edges has how many faces?", "8 գագաթ և 12 կող ունեցող ուռուցիկ բազմանիստը քանի՞ նիստ ունի։", "Сколько граней у выпуклого многогранника с 8 вершинами и 12 рёбрами?"), [t("4", "4", "4"), t("6", "6", "6"), t("8", "8", "8")], 1),
      ],
    ),
  ],
};
