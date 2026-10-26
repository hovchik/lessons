import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Planimetry review", "Հարթաչափության ամփոփում", "Повторение планиметрии"),
  summary: t("Triangles, circles, quadrilaterals, areas: exam-level problems.", "Եռանկյուններ, շրջանագծեր, քառանկյուններ, մակերեսներ՝ քննական մակարդակի խնդիրներ։", "Треугольники, окружности, четырёхугольники, площади — задачи экзаменационного уровня."),
  lessons: [
    lesson(
      "review-triangles",
      ["Review: triangles and their points", "Ամփոփում․ եռանկյուններ և դրանց կետերը", "Повторение: треугольники и их точки"],
      {
        en: ["Recall the four remarkable points of a triangle and the key facts about medians (2 : 1), bisectors (ratio of adjacent sides) and altitudes", "Use the law of sines with 2R, the law of cosines, Heron's formula and the area formulas S = ½ab·sin C, S = pr, S = abc/(4R) together", "Solve exam-level problems on the 13-14-15 triangle, right triangles with the altitude to the hypotenuse, and similarity"],
        hy: ["Հիշել եռանկյան չորս ուշագրավ կետերը և միջնագծերի (2 : 1), կիսորդների (կից կողմերի հարաբերություն) և բարձրությունների հիմնական փաստերը", "Միասին կիրառել սինուսների թեորեմը 2R-ով, կոսինուսների թեորեմը, Հերոնի բանաձևը և S = ½ab·sin C, S = pr, S = abc/(4R) մակերեսի բանաձևերը", "Լուծել քննական մակարդակի խնդիրներ 13-14-15 եռանկյան, ներքնաձիգին տարված բարձրությամբ ուղղանկյուն եռանկյունների և նմանության վերաբերյալ"],
        ru: ["Вспомнить четыре замечательные точки треугольника и ключевые факты о медианах (2 : 1), биссектрисах (отношение прилежащих сторон) и высотах", "Совместно применять теорему синусов с 2R, теорему косинусов, формулу Герона и формулы площади S = ½ab·sin C, S = pr, S = abc/(4R)", "Решать задачи экзаменационного уровня о треугольнике 13-14-15, прямоугольных треугольниках с высотой к гипотенузе и подобии"],
      },
      {
        en: `## The four remarkable points

| Lines | Point | Key fact |
|---|---|---|
| medians | centroid $G$ | divides each median $2 : 1$ from the vertex |
| angle bisectors | incentre $I$ | centre of the inscribed circle, $r = \\dfrac{S}{p}$ |
| perpendicular bisectors | circumcentre $O$ | centre of the circumscribed circle, $R = \\dfrac{abc}{4S}$ |
| altitudes | orthocentre $H$ | in a right triangle it is the right-angle vertex |

The circumcentre lies inside an acute triangle, on the hypotenuse (its midpoint) of a right triangle, outside an obtuse one.

## Formulas to keep together

- **Law of sines:** $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$.
- **Law of cosines:** $a^2 = b^2 + c^2 - 2bc\\cos A$.
- **Area:** $S = \\dfrac12 ah_a = \\dfrac12 bc\\sin A = pr = \\dfrac{abc}{4R} = \\sqrt{p(p-a)(p-b)(p-c)}$, where $p = \\dfrac{a + b + c}{2}$.
- **Median:** $m_a^2 = \\dfrac{2b^2 + 2c^2 - a^2}{4}$.
- **Bisector:** divides the opposite side in the ratio of the adjacent sides, $\\dfrac{a_1}{a_2} = \\dfrac{b}{c}$, and $l_a^2 = bc - a_1 a_2$.
- **Right triangle** with legs $a$, $b$, hypotenuse $c$ and altitude $h$ to the hypotenuse that cuts it into $a'$, $b'$: $h^2 = a'b'$, $a^2 = ca'$, $b^2 = cb'$, $R = \\dfrac c2$, $r = \\dfrac{a + b - c}{2}$.
- **Similar triangles:** ratio of areas $= k^2$; a line parallel to a side cuts off a similar triangle.

**Example 1 (the 13-14-15 triangle).** $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$. Altitude to the side $14$: $h = \\dfrac{2 \\cdot 84}{14} = 12$ (it cuts the side into $5$ and $9$). $r = \\dfrac{84}{21} = 4$, $R = \\dfrac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\dfrac{65}{8}$. Median to the side $14$: $m^2 = \\dfrac{2 \\cdot 169 + 2 \\cdot 225 - 196}{4} = 148$, $m = 2\\sqrt{37}$. Bisector to the side $14$: it divides $14$ into $6{,}5$ and $7{,}5$ (ratio $13 : 15$), $l^2 = 13 \\cdot 15 - 6{,}5 \\cdot 7{,}5 = 146{,}25$, $l = \\dfrac{3\\sqrt{65}}{2}$.

**Example 2.** In a triangle $a = 7$, $b = 8$, $C = 60°$. By the law of cosines $c^2 = 49 + 64 - 56 = 57$, $c = \\sqrt{57}$. $S = \\dfrac12 \\cdot 7 \\cdot 8 \\cdot \\dfrac{\\sqrt3}{2} = 14\\sqrt3$, $R = \\dfrac{c}{2\\sin C} = \\dfrac{\\sqrt{57}}{\\sqrt3} = \\sqrt{19}$.

**Example 3.** A triangle has $A = 30°$, $B = 45°$ and $a = 6$. Then $2R = \\dfrac{6}{\\sin 30°} = 12$, $R = 6$, $b = 12\\sin 45° = 6\\sqrt2$, $C = 105°$, $c = 12 \\sin 105° = 12 \\cdot \\dfrac{\\sqrt6 + \\sqrt2}{4} = 3(\\sqrt6 + \\sqrt2)$.

**Example 4 (right triangle).** The altitude to the hypotenuse divides it into $4$ and $9$. Then $h = \\sqrt{36} = 6$, $c = 13$, the legs are $\\sqrt{13 \\cdot 4} = 2\\sqrt{13}$ and $\\sqrt{13 \\cdot 9} = 3\\sqrt{13}$, $S = \\dfrac12 \\cdot 13 \\cdot 6 = 39$, $R = 6{,}5$, $r = \\dfrac{5\\sqrt{13} - 13}{2}$.

**Example 5 (medians).** The medians of a triangle are $9$, $12$ and $15$. Since $9^2 + 12^2 = 15^2$, the triangle formed by the medians is right-angled, and its area is $54$. The area of a triangle is $\\dfrac43$ of the area of the triangle formed by its medians: $S = 72$.

**Example 6 (bisector).** In the triangle with sides $AB = 6$, $AC = 9$, $BC = 10$ the bisector from $A$ meets $BC$ at $D$. $BD : DC = 6 : 9 = 2 : 3$, so $BD = 4$, $DC = 6$, and $AD^2 = 6 \\cdot 9 - 4 \\cdot 6 = 30$, $AD = \\sqrt{30}$. The incentre $I$ divides $AD$ in the ratio $AI : ID = (b + c) : a = 15 : 10 = 3 : 2$.

**Example 7 (similarity).** A line parallel to the base $BC$ of a triangle $ABC$ cuts the sides at $M \\in AB$ and $N \\in AC$ so that $S_{AMN} = \\dfrac14 S_{ABC}$. Then $k = \\dfrac12$: $M$ and $N$ are the midpoints, $MN = \\dfrac12 BC$ is the midline. If instead $S_{AMN} : S_{MNCB} = 4 : 5$, then $S_{AMN} : S_{ABC} = 4 : 9$, $k = \\dfrac23$, $AM : MB = 2 : 1$.

**Example 8 (centroid).** In the triangle with vertices $A(0; 0)$, $B(6; 0)$, $C(0; 9)$ the centroid is $G\\left(\\dfrac{0 + 6 + 0}{3}; \\dfrac{0 + 0 + 9}{3}\\right) = (2; 3)$; the circumcentre is the midpoint of the hypotenuse $BC$, $(3; 4{,}5)$; the orthocentre is $A$; the incentre is $(r; r)$ with $r = \\dfrac{6 + 9 - \\sqrt{117}}{2}$.

### Exercises

1. A triangle has sides $5$, $5$, $6$. Find its area, $r$ and $R$.
2. In the triangle with sides $13$, $14$, $15$ find the altitude to the side $15$ and the median to the side $13$.
3. $a = 5$, $b = 8$, $C = 60°$. Find $c$ and $S$.
4. $A = 45°$, $a = 4\\sqrt2$. Find the radius of the circumscribed circle.
5. The altitude to the hypotenuse of a right triangle is $12$ and cuts it into segments $9$ and $x$. Find $x$ and the legs.
6. In the triangle $ABC$: $AB = 4$, $AC = 6$, $BC = 5$. The bisector from $A$ meets $BC$ at $D$. Find $BD$ and $AD$.
7. The medians of a triangle are $3$, $4$ and $5$. Find the area of the triangle.
8. A line parallel to $BC$ cuts off from the triangle $ABC$ a triangle whose area is $\\dfrac{9}{16}$ of $S_{ABC}$. In what ratio does the line divide $AB$?

### Answers

1. $S = 12$, $r = \\dfrac{12}{8} = \\dfrac32$, $R = \\dfrac{150}{48} = \\dfrac{25}{8}$. 2. $h = \\dfrac{168}{15} = \\dfrac{56}{5}$; $m^2 = \\dfrac{2 \\cdot 196 + 2 \\cdot 225 - 169}{4} = \\dfrac{673}{4}$, $m = \\dfrac{\\sqrt{673}}{2}$. 3. $c^2 = 25 + 64 - 40 = 49$, $c = 7$, $S = 10\\sqrt3$. 4. $R = \\dfrac{4\\sqrt2}{2 \\sin 45°} = 4$. 5. $x = 16$; legs $\\sqrt{25 \\cdot 9} = 15$ and $\\sqrt{25 \\cdot 16} = 20$. 6. $BD = 2$, $DC = 3$, $AD^2 = 24 - 6 = 18$, $AD = 3\\sqrt2$. 7. $\\dfrac43 \\cdot 6 = 8$. 8. $k = \\dfrac34$, $AM : MB = 3 : 1$.`,
        hy: `## Չորս ուշագրավ կետերը

| Գծեր | Կետ | Հիմնական փաստ |
|---|---|---|
| միջնագծեր | ծանրության կենտրոն $G$ | ամեն միջնագիծ բաժանում է $2 : 1$ գագաթից |
| կիսորդներ | ներգծյալ շրջանագծի կենտրոն $I$ | $r = \\dfrac{S}{p}$ |
| միջնուղղահայացներ | արտագծյալ շրջանագծի կենտրոն $O$ | $R = \\dfrac{abc}{4S}$ |
| բարձրություններ | օրթոկենտրոն $H$ | ուղղանկյուն եռանկյունում ուղիղ անկյան գագաթն է |

Արտագծյալ շրջանագծի կենտրոնը սուրանկյուն եռանկյան ներսում է, ուղղանկյան դեպքում՝ ներքնաձիգի վրա (նրա միջնակետը), բութանկյան դեպքում՝ դրսում։

## Բանաձևեր, որոնք պետք է միասին հիշել

- **Սինուսների թեորեմ․** $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$։
- **Կոսինուսների թեորեմ․** $a^2 = b^2 + c^2 - 2bc\\cos A$։
- **Մակերես․** $S = \\dfrac12 ah_a = \\dfrac12 bc\\sin A = pr = \\dfrac{abc}{4R} = \\sqrt{p(p-a)(p-b)(p-c)}$, որտեղ $p = \\dfrac{a + b + c}{2}$։
- **Միջնագիծ․** $m_a^2 = \\dfrac{2b^2 + 2c^2 - a^2}{4}$։
- **Կիսորդ․** հանդիպակաց կողմը բաժանում է կից կողմերի հարաբերությամբ, $\\dfrac{a_1}{a_2} = \\dfrac{b}{c}$, և $l_a^2 = bc - a_1 a_2$։
- **Ուղղանկյուն եռանկյուն** $a$, $b$ էջերով, $c$ ներքնաձիգով և ներքնաձիգին տարված $h$ բարձրությամբ, որն այն բաժանում է $a'$, $b'$ մասերի․ $h^2 = a'b'$, $a^2 = ca'$, $b^2 = cb'$, $R = \\dfrac c2$, $r = \\dfrac{a + b - c}{2}$։
- **Նման եռանկյուններ․** մակերեսների հարաբերությունը $= k^2$, կողմին զուգահեռ ուղիղն անջատում է նման եռանկյուն։

**Օրինակ 1 (13-14-15 եռանկյուն)։** $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$։ $14$ կողմին տարված բարձրությունը․ $h = \\dfrac{2 \\cdot 84}{14} = 12$ (այն կողմը բաժանում է $5$-ի և $9$-ի)։ $r = \\dfrac{84}{21} = 4$, $R = \\dfrac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\dfrac{65}{8}$։ $14$ կողմին տարված միջնագիծը․ $m^2 = \\dfrac{2 \\cdot 169 + 2 \\cdot 225 - 196}{4} = 148$, $m = 2\\sqrt{37}$։ $14$ կողմին տարված կիսորդը․ այն $14$-ը բաժանում է $6{,}5$-ի և $7{,}5$-ի ($13 : 15$ հարաբերություն), $l^2 = 13 \\cdot 15 - 6{,}5 \\cdot 7{,}5 = 146{,}25$, $l = \\dfrac{3\\sqrt{65}}{2}$։

**Օրինակ 2։** Եռանկյունում $a = 7$, $b = 8$, $C = 60°$։ Կոսինուսների թեորեմով $c^2 = 49 + 64 - 56 = 57$, $c = \\sqrt{57}$։ $S = \\dfrac12 \\cdot 7 \\cdot 8 \\cdot \\dfrac{\\sqrt3}{2} = 14\\sqrt3$, $R = \\dfrac{c}{2\\sin C} = \\dfrac{\\sqrt{57}}{\\sqrt3} = \\sqrt{19}$։

**Օրինակ 3։** Եռանկյան $A = 30°$, $B = 45°$ և $a = 6$։ Այդ դեպքում $2R = \\dfrac{6}{\\sin 30°} = 12$, $R = 6$, $b = 12\\sin 45° = 6\\sqrt2$, $C = 105°$, $c = 12 \\sin 105° = 12 \\cdot \\dfrac{\\sqrt6 + \\sqrt2}{4} = 3(\\sqrt6 + \\sqrt2)$։

**Օրինակ 4 (ուղղանկյուն եռանկյուն)։** Ներքնաձիգին տարված բարձրությունն այն բաժանում է $4$-ի և $9$-ի։ Այդ դեպքում $h = \\sqrt{36} = 6$, $c = 13$, էջերը $\\sqrt{13 \\cdot 4} = 2\\sqrt{13}$ և $\\sqrt{13 \\cdot 9} = 3\\sqrt{13}$ են, $S = \\dfrac12 \\cdot 13 \\cdot 6 = 39$, $R = 6{,}5$, $r = \\dfrac{5\\sqrt{13} - 13}{2}$։

**Օրինակ 5 (միջնագծեր)։** Եռանկյան միջնագծերն են $9$, $12$ և $15$։ Քանի որ $9^2 + 12^2 = 15^2$, միջնագծերից կազմված եռանկյունն ուղղանկյուն է, նրա մակերեսը $54$ է։ Եռանկյան մակերեսը նրա միջնագծերից կազմված եռանկյան մակերեսի $\\dfrac43$-ն է․ $S = 72$։

**Օրինակ 6 (կիսորդ)։** $AB = 6$, $AC = 9$, $BC = 10$ կողմերով եռանկյունում $A$-ից տարված կիսորդը $BC$-ն հատում է $D$-ում։ $BD : DC = 6 : 9 = 2 : 3$, ուստի $BD = 4$, $DC = 6$, և $AD^2 = 6 \\cdot 9 - 4 \\cdot 6 = 30$, $AD = \\sqrt{30}$։ Ներգծյալ շրջանագծի $I$ կենտրոնը $AD$-ն բաժանում է $AI : ID = (b + c) : a = 15 : 10 = 3 : 2$ հարաբերությամբ։

**Օրինակ 7 (նմանություն)։** $ABC$ եռանկյան $BC$ հիմքին զուգահեռ ուղիղը կողմերը հատում է $M \\in AB$ և $N \\in AC$ կետերում այնպես, որ $S_{AMN} = \\dfrac14 S_{ABC}$։ Այդ դեպքում $k = \\dfrac12$․ $M$-ը և $N$-ը միջնակետեր են, $MN = \\dfrac12 BC$-ն միջին գիծն է։ Եթե փոխարենը $S_{AMN} : S_{MNCB} = 4 : 5$, ապա $S_{AMN} : S_{ABC} = 4 : 9$, $k = \\dfrac23$, $AM : MB = 2 : 1$։

**Օրինակ 8 (ծանրության կենտրոն)։** $A(0; 0)$, $B(6; 0)$, $C(0; 9)$ գագաթներով եռանկյան ծանրության կենտրոնը $G\\left(\\dfrac{0 + 6 + 0}{3}; \\dfrac{0 + 0 + 9}{3}\\right) = (2; 3)$ է, արտագծյալ շրջանագծի կենտրոնը $BC$ ներքնաձիգի միջնակետն է՝ $(3; 4{,}5)$, օրթոկենտրոնը $A$-ն է, ներգծյալ շրջանագծի կենտրոնը $(r; r)$ է, որտեղ $r = \\dfrac{6 + 9 - \\sqrt{117}}{2}$։

### Վարժություններ

1. Եռանկյան կողմերն են $5$, $5$, $6$։ Գտեք մակերեսը, $r$-ը և $R$-ը։
2. $13$, $14$, $15$ կողմերով եռանկյունում գտեք $15$ կողմին տարված բարձրությունը և $13$ կողմին տարված միջնագիծը։
3. $a = 5$, $b = 8$, $C = 60°$։ Գտեք $c$-ն և $S$-ը։
4. $A = 45°$, $a = 4\\sqrt2$։ Գտեք արտագծյալ շրջանագծի շառավիղը։
5. Ուղղանկյուն եռանկյան ներքնաձիգին տարված բարձրությունը $12$ է և այն բաժանում է $9$ և $x$ հատվածների։ Գտեք $x$-ը և էջերը։
6. $ABC$ եռանկյունում $AB = 4$, $AC = 6$, $BC = 5$։ $A$-ից տարված կիսորդը $BC$-ն հատում է $D$-ում։ Գտեք $BD$-ն և $AD$-ն։
7. Եռանկյան միջնագծերն են $3$, $4$ և $5$։ Գտեք եռանկյան մակերեսը։
8. $BC$-ին զուգահեռ ուղիղը $ABC$ եռանկյունից անջատում է եռանկյուն, որի մակերեսը $S_{ABC}$-ի $\\dfrac{9}{16}$-ն է։ Ի՞նչ հարաբերությամբ է ուղիղը բաժանում $AB$-ն։

### Պատասխաններ

1. $S = 12$, $r = \\dfrac{12}{8} = \\dfrac32$, $R = \\dfrac{150}{48} = \\dfrac{25}{8}$։ 2. $h = \\dfrac{168}{15} = \\dfrac{56}{5}$, $m^2 = \\dfrac{2 \\cdot 196 + 2 \\cdot 225 - 169}{4} = \\dfrac{673}{4}$, $m = \\dfrac{\\sqrt{673}}{2}$։ 3. $c^2 = 25 + 64 - 40 = 49$, $c = 7$, $S = 10\\sqrt3$։ 4. $R = \\dfrac{4\\sqrt2}{2 \\sin 45°} = 4$։ 5. $x = 16$, էջերը $\\sqrt{25 \\cdot 9} = 15$ և $\\sqrt{25 \\cdot 16} = 20$։ 6. $BD = 2$, $DC = 3$, $AD^2 = 24 - 6 = 18$, $AD = 3\\sqrt2$։ 7. $\\dfrac43 \\cdot 6 = 8$։ 8. $k = \\dfrac34$, $AM : MB = 3 : 1$։`,
        ru: `## Четыре замечательные точки

| Линии | Точка | Ключевой факт |
|---|---|---|
| медианы | центроид $G$ | делит каждую медиану $2 : 1$, считая от вершины |
| биссектрисы | центр вписанной окружности $I$ | $r = \\dfrac{S}{p}$ |
| серединные перпендикуляры | центр описанной окружности $O$ | $R = \\dfrac{abc}{4S}$ |
| высоты | ортоцентр $H$ | в прямоугольном треугольнике это вершина прямого угла |

Центр описанной окружности лежит внутри остроугольного треугольника, на гипотенузе (в её середине) прямоугольного, вне тупоугольного.

## Формулы, которые надо помнить вместе

- **Теорема синусов:** $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$.
- **Теорема косинусов:** $a^2 = b^2 + c^2 - 2bc\\cos A$.
- **Площадь:** $S = \\dfrac12 ah_a = \\dfrac12 bc\\sin A = pr = \\dfrac{abc}{4R} = \\sqrt{p(p-a)(p-b)(p-c)}$, где $p = \\dfrac{a + b + c}{2}$.
- **Медиана:** $m_a^2 = \\dfrac{2b^2 + 2c^2 - a^2}{4}$.
- **Биссектриса:** делит противоположную сторону в отношении прилежащих сторон, $\\dfrac{a_1}{a_2} = \\dfrac{b}{c}$, и $l_a^2 = bc - a_1 a_2$.
- **Прямоугольный треугольник** с катетами $a$, $b$, гипотенузой $c$ и высотой $h$ к гипотенузе, делящей её на $a'$, $b'$: $h^2 = a'b'$, $a^2 = ca'$, $b^2 = cb'$, $R = \\dfrac c2$, $r = \\dfrac{a + b - c}{2}$.
- **Подобные треугольники:** отношение площадей $= k^2$; прямая, параллельная стороне, отсекает подобный треугольник.

**Пример 1 (треугольник 13-14-15).** $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$. Высота к стороне $14$: $h = \\dfrac{2 \\cdot 84}{14} = 12$ (она делит сторону на $5$ и $9$). $r = \\dfrac{84}{21} = 4$, $R = \\dfrac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\dfrac{65}{8}$. Медиана к стороне $14$: $m^2 = \\dfrac{2 \\cdot 169 + 2 \\cdot 225 - 196}{4} = 148$, $m = 2\\sqrt{37}$. Биссектриса к стороне $14$: она делит $14$ на $6{,}5$ и $7{,}5$ (отношение $13 : 15$), $l^2 = 13 \\cdot 15 - 6{,}5 \\cdot 7{,}5 = 146{,}25$, $l = \\dfrac{3\\sqrt{65}}{2}$.

**Пример 2.** В треугольнике $a = 7$, $b = 8$, $C = 60°$. По теореме косинусов $c^2 = 49 + 64 - 56 = 57$, $c = \\sqrt{57}$. $S = \\dfrac12 \\cdot 7 \\cdot 8 \\cdot \\dfrac{\\sqrt3}{2} = 14\\sqrt3$, $R = \\dfrac{c}{2\\sin C} = \\dfrac{\\sqrt{57}}{\\sqrt3} = \\sqrt{19}$.

**Пример 3.** В треугольнике $A = 30°$, $B = 45°$ и $a = 6$. Тогда $2R = \\dfrac{6}{\\sin 30°} = 12$, $R = 6$, $b = 12\\sin 45° = 6\\sqrt2$, $C = 105°$, $c = 12 \\sin 105° = 12 \\cdot \\dfrac{\\sqrt6 + \\sqrt2}{4} = 3(\\sqrt6 + \\sqrt2)$.

**Пример 4 (прямоугольный треугольник).** Высота к гипотенузе делит её на $4$ и $9$. Тогда $h = \\sqrt{36} = 6$, $c = 13$, катеты равны $\\sqrt{13 \\cdot 4} = 2\\sqrt{13}$ и $\\sqrt{13 \\cdot 9} = 3\\sqrt{13}$, $S = \\dfrac12 \\cdot 13 \\cdot 6 = 39$, $R = 6{,}5$, $r = \\dfrac{5\\sqrt{13} - 13}{2}$.

**Пример 5 (медианы).** Медианы треугольника равны $9$, $12$ и $15$. Так как $9^2 + 12^2 = 15^2$, треугольник из медиан прямоугольный, его площадь $54$. Площадь треугольника составляет $\\dfrac43$ площади треугольника из его медиан: $S = 72$.

**Пример 6 (биссектриса).** В треугольнике со сторонами $AB = 6$, $AC = 9$, $BC = 10$ биссектриса из $A$ пересекает $BC$ в точке $D$. $BD : DC = 6 : 9 = 2 : 3$, поэтому $BD = 4$, $DC = 6$, и $AD^2 = 6 \\cdot 9 - 4 \\cdot 6 = 30$, $AD = \\sqrt{30}$. Центр вписанной окружности $I$ делит $AD$ в отношении $AI : ID = (b + c) : a = 15 : 10 = 3 : 2$.

**Пример 7 (подобие).** Прямая, параллельная основанию $BC$ треугольника $ABC$, пересекает стороны в точках $M \\in AB$ и $N \\in AC$ так, что $S_{AMN} = \\dfrac14 S_{ABC}$. Тогда $k = \\dfrac12$: $M$ и $N$ — середины, $MN = \\dfrac12 BC$ — средняя линия. Если же $S_{AMN} : S_{MNCB} = 4 : 5$, то $S_{AMN} : S_{ABC} = 4 : 9$, $k = \\dfrac23$, $AM : MB = 2 : 1$.

**Пример 8 (центроид).** В треугольнике с вершинами $A(0; 0)$, $B(6; 0)$, $C(0; 9)$ центроид $G\\left(\\dfrac{0 + 6 + 0}{3}; \\dfrac{0 + 0 + 9}{3}\\right) = (2; 3)$; центр описанной окружности — середина гипотенузы $BC$, $(3; 4{,}5)$; ортоцентр — $A$; центр вписанной окружности — $(r; r)$, где $r = \\dfrac{6 + 9 - \\sqrt{117}}{2}$.

### Упражнения

1. Треугольник имеет стороны $5$, $5$, $6$. Найдите его площадь, $r$ и $R$.
2. В треугольнике со сторонами $13$, $14$, $15$ найдите высоту к стороне $15$ и медиану к стороне $13$.
3. $a = 5$, $b = 8$, $C = 60°$. Найдите $c$ и $S$.
4. $A = 45°$, $a = 4\\sqrt2$. Найдите радиус описанной окружности.
5. Высота к гипотенузе прямоугольного треугольника равна $12$ и делит её на отрезки $9$ и $x$. Найдите $x$ и катеты.
6. В треугольнике $ABC$: $AB = 4$, $AC = 6$, $BC = 5$. Биссектриса из $A$ пересекает $BC$ в точке $D$. Найдите $BD$ и $AD$.
7. Медианы треугольника равны $3$, $4$ и $5$. Найдите площадь треугольника.
8. Прямая, параллельная $BC$, отсекает от треугольника $ABC$ треугольник, площадь которого составляет $\\dfrac{9}{16}$ от $S_{ABC}$. В каком отношении прямая делит $AB$?

### Ответы

1. $S = 12$, $r = \\dfrac{12}{8} = \\dfrac32$, $R = \\dfrac{150}{48} = \\dfrac{25}{8}$. 2. $h = \\dfrac{168}{15} = \\dfrac{56}{5}$; $m^2 = \\dfrac{2 \\cdot 196 + 2 \\cdot 225 - 169}{4} = \\dfrac{673}{4}$, $m = \\dfrac{\\sqrt{673}}{2}$. 3. $c^2 = 25 + 64 - 40 = 49$, $c = 7$, $S = 10\\sqrt3$. 4. $R = \\dfrac{4\\sqrt2}{2 \\sin 45°} = 4$. 5. $x = 16$; катеты $\\sqrt{25 \\cdot 9} = 15$ и $\\sqrt{25 \\cdot 16} = 20$. 6. $BD = 2$, $DC = 3$, $AD^2 = 24 - 6 = 18$, $AD = 3\\sqrt2$. 7. $\\dfrac43 \\cdot 6 = 8$. 8. $k = \\dfrac34$, $AM : MB = 3 : 1$.`,
      },
      [
        q(t("The centroid divides each median in the ratio … from the vertex.", "Ծանրության կենտրոնն ամեն միջնագիծ գագաթից բաժանում է … հարաբերությամբ։", "Центроид делит каждую медиану, считая от вершины, в отношении…"), [t("1 : 1", "1 : 1", "1 : 1"), t("2 : 1", "2 : 1", "2 : 1"), t("3 : 1", "3 : 1", "3 : 1")], 1),
        q(t("The law of sines says a / sin A equals…", "Սինուսների թեորեմով a / sin A հավասար է…", "По теореме синусов a / sin A равно…"), [t("R", "R", "R"), t("2R", "2R", "2R"), t("R/2", "R/2", "R/2")], 1),
        q(t("The area of the triangle with sides 13, 14, 15 is…", "13, 14, 15 կողմերով եռանկյան մակերեսը…", "Площадь треугольника со сторонами 13, 14, 15 равна…"), [t("84", "84", "84"), t("91", "91", "91"), t("42", "42", "42")], 0),
        q(t("The bisector from A divides BC in the ratio…", "A-ից տարված կիսորդը BC-ն բաժանում է … հարաբերությամբ։", "Биссектриса из A делит BC в отношении…"), [t("AB : AC", "AB : AC", "AB : AC"), t("1 : 1", "1 : 1", "1 : 1"), t("AB² : AC²", "AB² : AC²", "AB² : AC²")], 0),
        q(t("The altitude to the hypotenuse cuts it into 4 and 9. The altitude is…", "Ներքնաձիգին տարված բարձրությունն այն բաժանում է 4-ի և 9-ի։ Բարձրությունը…", "Высота к гипотенузе делит её на 4 и 9. Высота равна…"), [t("6", "6", "6"), t("6,5", "6,5", "6,5"), t("13", "13", "13")], 0),
        q(t("Two similar triangles have ratio k = 1/3. Their areas are in the ratio…", "Երկու նման եռանկյունների k = 1/3։ Մակերեսները հարաբերում են…", "Два подобных треугольника имеют k = 1/3. Их площади относятся как…"), [t("1 : 3", "1 : 3", "1 : 3"), t("1 : 6", "1 : 6", "1 : 6"), t("1 : 9", "1 : 9", "1 : 9")], 2),
      ],
    ),
    lesson(
      "review-circles",
      ["Review: circles, tangents, inscribed angles", "Ամփոփում․ շրջանագծեր, շոշափողներ, ներգծյալ անկյուններ", "Повторение: окружности, касательные, вписанные углы"],
      {
        en: ["Recall the angle theorems: an inscribed angle is half the arc, angles between chords and between secants are half the sum and half the difference of the arcs", "Apply the tangent properties and the power of a point: AM·MB = CM·MD for chords and MT² = MA·MB for a tangent and a secant", "Use the criteria for cyclic and tangential quadrilaterals and solve problems on two circles with common tangents"],
        hy: ["Հիշել անկյունների թեորեմները․ ներգծյալ անկյունն աղեղի կեսն է, լարերի և հատողների միջև անկյուններն աղեղների կիսագումարն ու կիսատարբերությունն են", "Կիրառել շոշափողի հատկությունները և կետի աստիճանը․ AM·MB = CM·MD լարերի և MT² = MA·MB շոշափողի ու հատողի համար", "Օգտագործել ներգծյալ և արտագծյալ քառանկյունների հայտանիշները և լուծել ընդհանուր շոշափողներով երկու շրջանագծերի խնդիրներ"],
        ru: ["Вспомнить теоремы об углах: вписанный угол равен половине дуги, углы между хордами и между секущими равны полусумме и полуразности дуг", "Применять свойства касательной и степень точки: AM·MB = CM·MD для хорд и MT² = MA·MB для касательной и секущей", "Использовать признаки вписанного и описанного четырёхугольников и решать задачи о двух окружностях с общими касательными"],
      },
      {
        en: `## Angles in a circle

- A **central angle** equals its arc; an **inscribed angle** equals half the arc it subtends. Inscribed angles on the same arc are equal; an angle subtending a diameter is right.
- The angle between two **chords** meeting inside the circle is half the **sum** of the two arcs they cut off; the angle between two **secants** meeting outside is half the **difference** of the arcs.
- The angle between a **tangent and a chord** from the point of tangency is half the arc inside the angle.
- A chord of length $c$ subtends an inscribed angle $\\alpha$ with $c = 2R\\sin\\alpha$ (the law of sines again).

## Tangents and the power of a point

- A tangent is perpendicular to the radius at the point of tangency; the two tangent segments from an external point are equal, and the line to the centre bisects the angle between them.
- **Chords** $AB$ and $CD$ meeting at $M$: $AM \\cdot MB = CM \\cdot MD$.
- **Secant and tangent** from an external point $M$: $MT^2 = MA \\cdot MB$; for two secants $MA \\cdot MB = MC \\cdot MD$.

## Quadrilaterals and circles

- A quadrilateral is **cyclic** (inscribed in a circle) if and only if its opposite angles sum to $180°$. A cyclic trapezoid is isosceles, a cyclic parallelogram is a rectangle.
- A quadrilateral is **tangential** (circumscribed about a circle) if and only if the sums of its opposite sides are equal: $a + c = b + d$. A tangential parallelogram is a rhombus.

## Two circles

With radii $R$, $r$ and distance $d$ between the centres: external tangency means $d = R + r$, internal tangency $d = \\lvert R - r\\rvert$. The common external tangent has length $\\sqrt{d^2 - (R - r)^2}$, the common internal tangent $\\sqrt{d^2 - (R + r)^2}$.

**Example 1.** An inscribed angle is $40°$: its arc is $80°$ and the central angle is $80°$. A chord cuts off an arc of $120°$ on a circle of radius $6$: the chord is $2 \\cdot 6 \\sin 60° = 6\\sqrt3$, and the inscribed angles on it are $60°$ or $120°$.

**Example 2.** Chords $AB$ and $CD$ meet at $M$ with $AM = 4$, $MB = 9$, $CM = 6$. Then $MD = \\dfrac{36}{6} = 6$. If also the arcs $AC$ and $BD$ are $50°$ and $70°$, the angle $AMC = \\dfrac{50° + 70°}{2} = 60°$.

**Example 3.** From a point $M$ at distance $13$ from the centre of a circle of radius $5$ the tangent segment is $\\sqrt{169 - 25} = 12$. A secant from $M$ through the centre meets the circle at distances $8$ and $18$: $8 \\cdot 18 = 144 = 12^2$, as the power of the point requires.

**Example 4.** A tangent $MT = 6$ and a secant $MAB$ with $MA = 4$: $MB = \\dfrac{36}{4} = 9$, so the chord $AB = 5$.

**Example 5.** A chord of length $8$ is at distance $3$ from the centre: $R = \\sqrt{16 + 9} = 5$. The arc it cuts off is $2\\arcsin\\dfrac45 \\approx 106°$, and the inscribed angle on the larger arc is $\\arcsin\\dfrac45 \\approx 53°$.

**Example 6.** In the cyclic quadrilateral $ABCD$, $\\angle A = 70°$ and $\\angle B = 100°$: then $\\angle C = 110°$, $\\angle D = 80°$. The diagonal $AC$ subtends $\\angle ABC = 100°$ and $\\angle ADC = 80°$, so by the law of sines $AC = 2R\\sin 80°$.

**Example 7.** A tangential quadrilateral has three consecutive sides $3$, $5$, $7$; the fourth is $3 + 7 - 5 = 5$. A right trapezoid is circumscribed about a circle of radius $2$ and its larger base is $6$: the height is $4$, and if the legs are $4$ and $l$ with the smaller base $b$, then $6 + b = 4 + l$ and $l^2 = 16 + (6 - b)^2$; from $l = b + 2$ we get $b^2 + 4b + 4 = 16 + 36 - 12b + b^2$, $16b = 48$, $b = 3$, $l = 5$.

**Example 8.** Two circles with radii $5$ and $2$ touch externally, $d = 7$: the common external tangent has length $\\sqrt{49 - 9} = 2\\sqrt{10}$. If instead $d = 9$, the external tangent is $\\sqrt{81 - 9} = 6\\sqrt2$ and the internal one $\\sqrt{81 - 49} = 4\\sqrt2$.

### Exercises

1. An inscribed angle subtends a chord of length $7$ in a circle of radius $7$. Find the angle.
2. Chords $AB$ and $CD$ meet at $M$: $AM = 3$, $MB = 8$, $CM = 4$. Find $MD$.
3. The tangent from $M$ is $8$ and the secant from $M$ meets the circle at $A$ and $B$ with $MA = 4$. Find $AB$.
4. A point is at distance $10$ from the centre of a circle of radius $6$. Find the length of the tangent segment.
5. In a cyclic quadrilateral $\\angle A = 65°$ and $\\angle B = 95°$. Find the other two angles.
6. A tangential quadrilateral has sides $4$, $6$, $9$, $x$ in order. Find $x$.
7. Two circles with radii $8$ and $3$ touch externally. Find the length of the common external tangent.
8. The angle between a tangent and a chord drawn from the point of tangency is $35°$. Find the inscribed angle on the other side of the chord.

### Answers

1. $\\sin\\alpha = \\dfrac{7}{14}$, $\\alpha = 30°$ (or $150°$). 2. $MD = 6$. 3. $MB = 16$, $AB = 12$. 4. $8$. 5. $\\angle C = 115°$, $\\angle D = 85°$. 6. $4 + 9 = 6 + x$, $x = 7$. 7. $\\sqrt{121 - 25} = 4\\sqrt6$. 8. $35°$ (the inscribed angle subtending the arc inside the given angle); the inscribed angle on the other arc is $145°$.`,
        hy: `## Անկյուններ շրջանագծում

- **Կենտրոնային անկյունը** հավասար է իր աղեղին, **ներգծյալ անկյունը**՝ իր հենած աղեղի կեսին։ Նույն աղեղին հենված ներգծյալ անկյունները հավասար են, տրամագծին հենված անկյունն ուղիղ է։
- Շրջանագծի ներսում հատվող երկու **լարերի** միջև անկյունը դրանց անջատած երկու աղեղների **կիսագումարն** է, դրսում հատվող երկու **հատողների** միջև անկյունը՝ աղեղների **կիսատարբերությունը**։
- Շոշափման կետից տարված **շոշափողի և լարի** միջև անկյունն անկյան ներսի աղեղի կեսն է։
- $c$ երկարությամբ լարը հենում է $\\alpha$ ներգծյալ անկյուն, որտեղ $c = 2R\\sin\\alpha$ (կրկին սինուսների թեորեմը)։

## Շոշափողներ և կետի աստիճան

- Շոշափողն ուղղահայաց է շոշափման կետի շառավղին, արտաքին կետից տարված երկու շոշափող հատվածները հավասար են, իսկ կենտրոն տանող ուղիղը կիսում է դրանց միջև անկյունը։
- $M$-ում հատվող $AB$ և $CD$ **լարեր․** $AM \\cdot MB = CM \\cdot MD$։
- Արտաքին $M$ կետից **հատող և շոշափող․** $MT^2 = MA \\cdot MB$, երկու հատողների համար՝ $MA \\cdot MB = MC \\cdot MD$։

## Քառանկյուններ և շրջանագծեր

- Քառանկյունը **ներգծյալ** է (շրջանագծում ներգծված) այն և միայն այն դեպքում, երբ նրա հանդիպակաց անկյունների գումարը $180°$ է։ Ներգծյալ սեղանը հավասարասրուն է, ներգծյալ զուգահեռագիծը՝ ուղղանկյուն։
- Քառանկյունը **արտագծյալ** է (շրջանագծի շուրջ արտագծված) այն և միայն այն դեպքում, երբ նրա հանդիպակաց կողմերի գումարները հավասար են․ $a + c = b + d$։ Արտագծյալ զուգահեռագիծը շեղանկյուն է։

## Երկու շրջանագիծ

$R$, $r$ շառավիղներով և կենտրոնների $d$ հեռավորությամբ․ արտաքին շոշափում՝ $d = R + r$, ներքին շոշափում՝ $d = \\lvert R - r\\rvert$։ Ընդհանուր արտաքին շոշափողի երկարությունը $\\sqrt{d^2 - (R - r)^2}$ է, ընդհանուր ներքինինը՝ $\\sqrt{d^2 - (R + r)^2}$։

**Օրինակ 1։** Ներգծյալ անկյունը $40°$ է․ նրա աղեղը $80°$ է, կենտրոնային անկյունը՝ $80°$։ $6$ շառավղով շրջանագծի լարն անջատում է $120°$ աղեղ․ լարը $2 \\cdot 6 \\sin 60° = 6\\sqrt3$ է, նրան հենված ներգծյալ անկյունները՝ $60°$ կամ $120°$։

**Օրինակ 2։** $AB$ և $CD$ լարերը հատվում են $M$-ում, $AM = 4$, $MB = 9$, $CM = 6$։ Այդ դեպքում $MD = \\dfrac{36}{6} = 6$։ Եթե նաև $AC$ և $BD$ աղեղները $50°$ և $70°$ են, ապա $AMC$ անկյունը $\\dfrac{50° + 70°}{2} = 60°$ է։

**Օրինակ 3։** $5$ շառավղով շրջանագծի կենտրոնից $13$ հեռավորության վրա գտնվող $M$ կետից շոշափող հատվածը $\\sqrt{169 - 25} = 12$ է։ $M$-ից կենտրոնով անցնող հատողը շրջանագիծը հատում է $8$ և $18$ հեռավորությունների վրա․ $8 \\cdot 18 = 144 = 12^2$, ինչպես պահանջում է կետի աստիճանը։

**Օրինակ 4։** $MT = 6$ շոշափող և $MAB$ հատող, $MA = 4$․ $MB = \\dfrac{36}{4} = 9$, ուստի $AB = 5$ լար։

**Օրինակ 5։** $8$ երկարությամբ լարը կենտրոնից $3$ հեռավորության վրա է․ $R = \\sqrt{16 + 9} = 5$։ Նրա անջատած աղեղը $2\\arcsin\\dfrac45 \\approx 106°$ է, իսկ մեծ աղեղին հենված ներգծյալ անկյունը՝ $\\arcsin\\dfrac45 \\approx 53°$։

**Օրինակ 6։** $ABCD$ ներգծյալ քառանկյունում $\\angle A = 70°$ և $\\angle B = 100°$․ ուրեմն $\\angle C = 110°$, $\\angle D = 80°$։ $AC$ անկյունագիծը հենում է $\\angle ABC = 100°$ և $\\angle ADC = 80°$ անկյունները, ուստի սինուսների թեորեմով $AC = 2R\\sin 80°$։

**Օրինակ 7։** Արտագծյալ քառանկյան երեք հաջորդական կողմերն են $3$, $5$, $7$, չորրորդը $3 + 7 - 5 = 5$ է։ Ուղղանկյուն սեղանն արտագծված է $2$ շառավղով շրջանագծի շուրջ, նրա մեծ հիմքը $6$ է․ բարձրությունը $4$ է, և եթե սրունքները $4$ և $l$ են, փոքր հիմքը՝ $b$, ապա $6 + b = 4 + l$ և $l^2 = 16 + (6 - b)^2$, $l = b + 2$-ից ստանում ենք $b^2 + 4b + 4 = 16 + 36 - 12b + b^2$, $16b = 48$, $b = 3$, $l = 5$։

**Օրինակ 8։** $5$ և $2$ շառավիղներով երկու շրջանագծեր շոշափվում են արտաքուստ, $d = 7$․ ընդհանուր արտաքին շոշափողի երկարությունը $\\sqrt{49 - 9} = 2\\sqrt{10}$ է։ Եթե փոխարենը $d = 9$, արտաքին շոշափողը $\\sqrt{81 - 9} = 6\\sqrt2$ է, ներքինը՝ $\\sqrt{81 - 49} = 4\\sqrt2$։

### Վարժություններ

1. Ներգծյալ անկյունը հենված է $7$ շառավղով շրջանագծի $7$ երկարությամբ լարին։ Գտեք անկյունը։
2. $AB$ և $CD$ լարերը հատվում են $M$-ում․ $AM = 3$, $MB = 8$, $CM = 4$։ Գտեք $MD$-ն։
3. $M$-ից շոշափողը $8$ է, իսկ $M$-ից հատողը շրջանագիծը հատում է $A$ և $B$ կետերում, $MA = 4$։ Գտեք $AB$-ն։
4. Կետը $6$ շառավղով շրջանագծի կենտրոնից $10$ հեռավորության վրա է։ Գտեք շոշափող հատվածի երկարությունը։
5. Ներգծյալ քառանկյունում $\\angle A = 65°$ և $\\angle B = 95°$։ Գտեք մյուս երկու անկյունները։
6. Արտագծյալ քառանկյան կողմերը հերթով $4$, $6$, $9$, $x$ են։ Գտեք $x$-ը։
7. $8$ և $3$ շառավիղներով երկու շրջանագծեր շոշափվում են արտաքուստ։ Գտեք ընդհանուր արտաքին շոշափողի երկարությունը։
8. Շոշափման կետից տարված շոշափողի և լարի միջև անկյունը $35°$ է։ Գտեք լարի մյուս կողմում հենված ներգծյալ անկյունը։

### Պատասխաններ

1. $\\sin\\alpha = \\dfrac{7}{14}$, $\\alpha = 30°$ (կամ $150°$)։ 2. $MD = 6$։ 3. $MB = 16$, $AB = 12$։ 4. $8$։ 5. $\\angle C = 115°$, $\\angle D = 85°$։ 6. $4 + 9 = 6 + x$, $x = 7$։ 7. $\\sqrt{121 - 25} = 4\\sqrt6$։ 8. $35°$ (տրված անկյան ներսի աղեղին հենված ներգծյալ անկյունը), մյուս աղեղին հենված ներգծյալ անկյունը $145°$ է։`,
        ru: `## Углы в окружности

- **Центральный угол** равен своей дуге; **вписанный угол** равен половине дуги, на которую опирается. Вписанные углы, опирающиеся на одну дугу, равны; угол, опирающийся на диаметр, прямой.
- Угол между двумя **хордами**, пересекающимися внутри окружности, равен **полусумме** двух отсекаемых ими дуг; угол между двумя **секущими**, пересекающимися снаружи, равен **полуразности** дуг.
- Угол между **касательной и хордой**, проведённой из точки касания, равен половине дуги внутри угла.
- Хорда длины $c$ стягивает вписанный угол $\\alpha$, причём $c = 2R\\sin\\alpha$ (снова теорема синусов).

## Касательные и степень точки

- Касательная перпендикулярна радиусу в точке касания; два отрезка касательных из внешней точки равны, а прямая к центру делит угол между ними пополам.
- **Хорды** $AB$ и $CD$, пересекающиеся в $M$: $AM \\cdot MB = CM \\cdot MD$.
- **Секущая и касательная** из внешней точки $M$: $MT^2 = MA \\cdot MB$; для двух секущих $MA \\cdot MB = MC \\cdot MD$.

## Четырёхугольники и окружности

- Четырёхугольник **вписанный** тогда и только тогда, когда суммы его противоположных углов равны $180°$. Вписанная трапеция равнобедренная, вписанный параллелограмм — прямоугольник.
- Четырёхугольник **описанный** тогда и только тогда, когда суммы его противоположных сторон равны: $a + c = b + d$. Описанный параллелограмм — ромб.

## Две окружности

При радиусах $R$, $r$ и расстоянии $d$ между центрами: внешнее касание означает $d = R + r$, внутреннее — $d = \\lvert R - r\\rvert$. Общая внешняя касательная имеет длину $\\sqrt{d^2 - (R - r)^2}$, общая внутренняя — $\\sqrt{d^2 - (R + r)^2}$.

**Пример 1.** Вписанный угол равен $40°$: его дуга $80°$, центральный угол $80°$. Хорда отсекает дугу $120°$ на окружности радиуса $6$: хорда равна $2 \\cdot 6 \\sin 60° = 6\\sqrt3$, а вписанные углы, опирающиеся на неё, равны $60°$ или $120°$.

**Пример 2.** Хорды $AB$ и $CD$ пересекаются в $M$, $AM = 4$, $MB = 9$, $CM = 6$. Тогда $MD = \\dfrac{36}{6} = 6$. Если ещё дуги $AC$ и $BD$ равны $50°$ и $70°$, то угол $AMC = \\dfrac{50° + 70°}{2} = 60°$.

**Пример 3.** Из точки $M$ на расстоянии $13$ от центра окружности радиуса $5$ отрезок касательной равен $\\sqrt{169 - 25} = 12$. Секущая из $M$ через центр пересекает окружность на расстояниях $8$ и $18$: $8 \\cdot 18 = 144 = 12^2$, как и требует степень точки.

**Пример 4.** Касательная $MT = 6$ и секущая $MAB$ с $MA = 4$: $MB = \\dfrac{36}{4} = 9$, поэтому хорда $AB = 5$.

**Пример 5.** Хорда длины $8$ удалена от центра на $3$: $R = \\sqrt{16 + 9} = 5$. Отсекаемая ею дуга равна $2\\arcsin\\dfrac45 \\approx 106°$, а вписанный угол, опирающийся на большую дугу, равен $\\arcsin\\dfrac45 \\approx 53°$.

**Пример 6.** Во вписанном четырёхугольнике $ABCD$ $\\angle A = 70°$ и $\\angle B = 100°$: тогда $\\angle C = 110°$, $\\angle D = 80°$. Диагональ $AC$ стягивает углы $\\angle ABC = 100°$ и $\\angle ADC = 80°$, поэтому по теореме синусов $AC = 2R\\sin 80°$.

**Пример 7.** Описанный четырёхугольник имеет три последовательные стороны $3$, $5$, $7$; четвёртая равна $3 + 7 - 5 = 5$. Прямоугольная трапеция описана около окружности радиуса $2$, её большее основание $6$: высота $4$, и если боковые стороны $4$ и $l$, а меньшее основание $b$, то $6 + b = 4 + l$ и $l^2 = 16 + (6 - b)^2$; из $l = b + 2$ получаем $b^2 + 4b + 4 = 16 + 36 - 12b + b^2$, $16b = 48$, $b = 3$, $l = 5$.

**Пример 8.** Две окружности радиусов $5$ и $2$ касаются внешним образом, $d = 7$: общая внешняя касательная имеет длину $\\sqrt{49 - 9} = 2\\sqrt{10}$. Если же $d = 9$, внешняя касательная равна $\\sqrt{81 - 9} = 6\\sqrt2$, а внутренняя $\\sqrt{81 - 49} = 4\\sqrt2$.

### Упражнения

1. Вписанный угол опирается на хорду длины $7$ в окружности радиуса $7$. Найдите угол.
2. Хорды $AB$ и $CD$ пересекаются в $M$: $AM = 3$, $MB = 8$, $CM = 4$. Найдите $MD$.
3. Касательная из $M$ равна $8$, а секущая из $M$ пересекает окружность в точках $A$ и $B$, $MA = 4$. Найдите $AB$.
4. Точка удалена от центра окружности радиуса $6$ на $10$. Найдите длину отрезка касательной.
5. Во вписанном четырёхугольнике $\\angle A = 65°$ и $\\angle B = 95°$. Найдите два других угла.
6. Описанный четырёхугольник имеет стороны $4$, $6$, $9$, $x$ по порядку. Найдите $x$.
7. Две окружности радиусов $8$ и $3$ касаются внешним образом. Найдите длину общей внешней касательной.
8. Угол между касательной и хордой, проведённой из точки касания, равен $35°$. Найдите вписанный угол, опирающийся на хорду с другой стороны.

### Ответы

1. $\\sin\\alpha = \\dfrac{7}{14}$, $\\alpha = 30°$ (или $150°$). 2. $MD = 6$. 3. $MB = 16$, $AB = 12$. 4. $8$. 5. $\\angle C = 115°$, $\\angle D = 85°$. 6. $4 + 9 = 6 + x$, $x = 7$. 7. $\\sqrt{121 - 25} = 4\\sqrt6$. 8. $35°$ (вписанный угол, опирающийся на дугу внутри данного угла); вписанный угол, опирающийся на другую дугу, равен $145°$.`,
      },
      [
        q(t("An inscribed angle equals…", "Ներգծյալ անկյունը հավասար է…", "Вписанный угол равен…"), [t("its arc", "իր աղեղին", "своей дуге"), t("half its arc", "իր աղեղի կեսին", "половине своей дуги"), t("twice its arc", "իր աղեղի կրկնակիին", "удвоенной дуге")], 1),
        q(t("Chords AB and CD meet at M with AM = 2, MB = 6, CM = 3. Then MD equals…", "AB և CD լարերը հատվում են M-ում, AM = 2, MB = 6, CM = 3։ Այդ դեպքում MD-ն հավասար է…", "Хорды AB и CD пересекаются в M, AM = 2, MB = 6, CM = 3. Тогда MD равно…"), [t("4", "4", "4"), t("5", "5", "5"), t("9", "9", "9")], 0),
        q(t("The tangent from M is 6 and the secant from M has MA = 3. Then MB equals…", "M-ից շոշափողը 6 է, M-ից հատողի MA = 3։ Այդ դեպքում MB-ն հավասար է…", "Касательная из M равна 6, у секущей из M отрезок MA = 3. Тогда MB равно…"), [t("9", "9", "9"), t("12", "12", "12"), t("18", "18", "18")], 1),
        q(t("A quadrilateral is cyclic if and only if…", "Քառանկյունը ներգծյալ է այն և միայն այն դեպքում, երբ…", "Четырёхугольник вписанный тогда и только тогда, когда…"), [t("its opposite sides are equal", "հանդիպակաց կողմերը հավասար են", "противоположные стороны равны"), t("its opposite angles sum to 180°", "հանդիպակաց անկյունների գումարը 180° է", "суммы противоположных углов равны 180°"), t("its diagonals are equal", "անկյունագծերը հավասար են", "диагонали равны")], 1),
        q(t("A quadrilateral is tangential if and only if…", "Քառանկյունն արտագծյալ է այն և միայն այն դեպքում, երբ…", "Четырёхугольник описанный тогда и только тогда, когда…"), [t("a + c = b + d", "a + c = b + d", "a + c = b + d"), t("a + b = c + d", "a + b = c + d", "a + b = c + d"), t("all sides are equal", "բոլոր կողմերը հավասար են", "все стороны равны")], 0),
        q(t("Two circles with radii 5 and 3 touch externally. The distance between the centres is…", "5 և 3 շառավիղներով երկու շրջանագծեր շոշափվում են արտաքուստ։ Կենտրոնների հեռավորությունը…", "Две окружности радиусов 5 и 3 касаются внешним образом. Расстояние между центрами равно…"), [t("2", "2", "2"), t("8", "8", "8"), t("15", "15", "15")], 1),
      ],
    ),
    lesson(
      "review-quadrilaterals",
      ["Review: quadrilaterals and areas", "Ամփոփում․ քառանկյուններ և մակերեսներ", "Повторение: четырёхугольники и площади"],
      {
        en: ["Recall the properties of the parallelogram, rectangle, rhombus, square and trapezoid, including the diagonal identity d₁² + d₂² = 2(a² + b²) and the midline", "Use the area formulas S = ab·sin α, S = ½d₁d₂·sin φ, S = ½(a + b)h and the triangle areas cut off by the diagonals of a trapezoid", "Solve exam problems on trapezoids with perpendicular diagonals, inscribed rhombi and regular polygons"],
        hy: ["Հիշել զուգահեռագծի, ուղղանկյան, շեղանկյան, քառակուսու և սեղանի հատկությունները, այդ թվում d₁² + d₂² = 2(a² + b²) անկյունագծային նույնությունը և միջին գիծը", "Կիրառել S = ab·sin α, S = ½d₁d₂·sin φ, S = ½(a + b)h մակերեսի բանաձևերը և սեղանի անկյունագծերով անջատված եռանկյունների մակերեսները", "Լուծել քննական խնդիրներ ուղղահայաց անկյունագծերով սեղանների, ներգծյալ շեղանկյունների և կանոնավոր բազմանկյունների վերաբերյալ"],
        ru: ["Вспомнить свойства параллелограмма, прямоугольника, ромба, квадрата и трапеции, включая тождество диагоналей d₁² + d₂² = 2(a² + b²) и среднюю линию", "Использовать формулы площади S = ab·sin α, S = ½d₁d₂·sin φ, S = ½(a + b)h и площади треугольников, отсекаемых диагоналями трапеции", "Решать экзаменационные задачи о трапециях с перпендикулярными диагоналями, вписанных ромбах и правильных многоугольниках"],
      },
      {
        en: `## Parallelograms

A **parallelogram** has equal opposite sides and angles; its diagonals bisect each other and satisfy
$$d_1^2 + d_2^2 = 2(a^2 + b^2), \\qquad S = ab\\sin\\alpha = ah_a.$$
A **rectangle** has equal diagonals, $d^2 = a^2 + b^2$. A **rhombus** has perpendicular diagonals that bisect its angles, $S = \\dfrac{d_1 d_2}{2} = a^2\\sin\\alpha$, and the inscribed circle has $r = \\dfrac{h}{2} = \\dfrac{S}{2a}$. A **square** is both.

## Trapezoids

For a trapezoid with bases $a$, $b$ and height $h$: the **midline** is $\\dfrac{a + b}{2}$ and $S = \\dfrac{a + b}{2} \\cdot h$. In an **isosceles** trapezoid the base angles and the diagonals are equal, and the foot of the altitude from a vertex of the smaller base cuts off $\\dfrac{a - b}{2}$ on the larger base. The segment joining the midpoints of the diagonals is $\\dfrac{a - b}{2}$.

**Diagonals of a trapezoid** $ABCD$ ($AD \\parallel BC$) meeting at $O$: the triangles $BOC$ and $AOD$ are similar with $k = \\dfrac{BC}{AD}$, so $S_{BOC} : S_{AOD} = k^2$, and $S_{AOB} = S_{COD}$ (both equal $k \\cdot S_{AOD}$).

**Perpendicular diagonals.** For any quadrilateral $S = \\dfrac12 d_1 d_2 \\sin\\varphi$; with perpendicular diagonals $S = \\dfrac{d_1 d_2}{2}$. In a trapezoid with perpendicular diagonals $d_1$, $d_2$, translating one diagonal to the end of the other gives a right triangle with legs $d_1$, $d_2$ and hypotenuse $a + b$, so $a + b = \\sqrt{d_1^2 + d_2^2}$ and $h = \\dfrac{d_1 d_2}{a + b}$.

## Polygons

The angles of an $n$-gon sum to $(n - 2) \\cdot 180°$; a regular $n$-gon has angle $\\dfrac{(n - 2) \\cdot 180°}{n}$, $R = \\dfrac{a}{2\\sin(180°/n)}$, $r = \\dfrac{a}{2\\tan(180°/n)}$ and $S = \\dfrac12 P r$. Regular hexagon with side $a$: $R = a$, $r = \\dfrac{a\\sqrt3}{2}$, $S = \\dfrac{3\\sqrt3}{2}a^2$.

**Example 1.** A parallelogram has sides $5$, $8$ and angle $60°$. $S = 40 \\cdot \\dfrac{\\sqrt3}{2} = 20\\sqrt3$. Diagonals: $d^2 = 25 + 64 \\mp 2 \\cdot 40 \\cdot \\dfrac12$, so $d_1 = 7$, $d_2 = \\sqrt{129}$; check: $49 + 129 = 178 = 2 \\cdot 89$.

**Example 2.** A rhombus has diagonals $12$ and $16$: the side is $\\sqrt{36 + 64} = 10$, $S = 96$, the height is $\\dfrac{96}{10} = 9{,}6$, the inscribed circle has $r = 4{,}8$.

**Example 3.** A rectangle has diagonal $10$ making $30°$ with a side: the sides are $10\\cos 30° = 5\\sqrt3$ and $5$, $S = 25\\sqrt3$; the angle between the diagonals is $60°$ and $S = \\dfrac12 \\cdot 10 \\cdot 10 \\cdot \\sin 60°$ agrees.

**Example 4.** An isosceles trapezoid has bases $10$ and $4$ and legs $5$. The altitude cuts off $3$ on the larger base, so $h = 4$ and $S = 7 \\cdot 4 = 28$. The diagonal is $\\sqrt{4^2 + 7^2} = \\sqrt{65}$.

**Example 5.** A trapezoid has perpendicular diagonals $6$ and $8$: $S = 24$, $a + b = 10$, the midline is $5$ and $h = \\dfrac{48}{10} = 4{,}8$.

**Example 6.** A quadrilateral has diagonals $10$ and $12$ at an angle of $30°$: $S = \\dfrac12 \\cdot 10 \\cdot 12 \\cdot \\dfrac12 = 30$.

**Example 7.** In the trapezoid $ABCD$ with $AD = 12$, $BC = 4$ the diagonals meet at $O$ and $S_{BOC} = 2$. Then $k = \\dfrac13$, $S_{AOD} = 18$, $S_{AOB} = S_{COD} = \\dfrac13 \\cdot 18 = 6$, and $S_{ABCD} = 2 + 18 + 6 + 6 = 32$.

**Example 8.** A regular hexagon with side $4$: $S = \\dfrac{3\\sqrt3}{2} \\cdot 16 = 24\\sqrt3$, $R = 4$, $r = 2\\sqrt3$. The angles of a regular octagon are $\\dfrac{6 \\cdot 180°}{8} = 135°$.

### Exercises

1. A parallelogram has sides $3$, $4$ and angle $60°$. Find its area and diagonals.
2. A rhombus has side $13$ and one diagonal $10$. Find the other diagonal and the area.
3. An isosceles trapezoid has bases $14$ and $4$ and legs $13$. Find the height and the area.
4. A trapezoid has perpendicular diagonals $5$ and $12$. Find its area, the sum of the bases and the height.
5. The diagonals of a quadrilateral are $7$ and $8$ and meet at $45°$. Find the area.
6. In the trapezoid $ABCD$ ($AD \\parallel BC$) $AD = 9$, $BC = 3$ and $S_{BOC} = 1$. Find the area of the trapezoid.
7. A regular hexagon is inscribed in a circle of radius $6$. Find its perimeter and area.
8. A rectangle has perimeter $28$ and diagonal $10$. Find its sides and area.

### Answers

1. $S = 6\\sqrt3$; $d_1 = \\sqrt{13}$, $d_2 = \\sqrt{37}$. 2. $24$; $S = 120$. 3. $h = \\sqrt{169 - 25} = 12$; $S = 108$. 4. $S = 30$; $a + b = 13$; $h = \\dfrac{60}{13}$. 5. $14\\sqrt2$. 6. $S_{AOD} = 9$, $S_{AOB} = S_{COD} = 3$; $16$. 7. $36$; $54\\sqrt3$. 8. $a + b = 14$, $a^2 + b^2 = 100$, $ab = 48$: sides $6$ and $8$, $S = 48$.`,
        hy: `## Զուգահեռագծեր

**Զուգահեռագծի** հանդիպակաց կողմերն ու անկյունները հավասար են, անկյունագծերը հատման կետում կիսվում են և բավարարում են
$$d_1^2 + d_2^2 = 2(a^2 + b^2), \\qquad S = ab\\sin\\alpha = ah_a$$
**Ուղղանկյան** անկյունագծերը հավասար են, $d^2 = a^2 + b^2$։ **Շեղանկյան** անկյունագծերն ուղղահայաց են և կիսում են նրա անկյունները, $S = \\dfrac{d_1 d_2}{2} = a^2\\sin\\alpha$, իսկ ներգծյալ շրջանագծի $r = \\dfrac{h}{2} = \\dfrac{S}{2a}$։ **Քառակուսին** երկուսն էլ է։

## Սեղաններ

$a$, $b$ հիմքերով և $h$ բարձրությամբ սեղանի **միջին գիծը** $\\dfrac{a + b}{2}$ է և $S = \\dfrac{a + b}{2} \\cdot h$։ **Հավասարասրուն** սեղանում հիմքի անկյունները և անկյունագծերը հավասար են, իսկ փոքր հիմքի գագաթից տարված բարձրության հիմքը մեծ հիմքի վրա անջատում է $\\dfrac{a - b}{2}$։ Անկյունագծերի միջնակետերը միացնող հատվածը $\\dfrac{a - b}{2}$ է։

**Սեղանի անկյունագծեր․** $ABCD$ ($AD \\parallel BC$), հատվում են $O$-ում․ $BOC$ և $AOD$ եռանկյունները նման են $k = \\dfrac{BC}{AD}$ գործակցով, ուստի $S_{BOC} : S_{AOD} = k^2$, և $S_{AOB} = S_{COD}$ (երկուսն էլ հավասար են $k \\cdot S_{AOD}$)։

**Ուղղահայաց անկյունագծեր։** Ցանկացած քառանկյան համար $S = \\dfrac12 d_1 d_2 \\sin\\varphi$, ուղղահայաց անկյունագծերի դեպքում՝ $S = \\dfrac{d_1 d_2}{2}$։ $d_1$, $d_2$ ուղղահայաց անկյունագծերով սեղանում մի անկյունագիծը մյուսի ծայրին զուգահեռ տեղափոխելով ստանում ենք $d_1$, $d_2$ էջերով և $a + b$ ներքնաձիգով ուղղանկյուն եռանկյուն, ուստի $a + b = \\sqrt{d_1^2 + d_2^2}$ և $h = \\dfrac{d_1 d_2}{a + b}$։

## Բազմանկյուններ

$n$-անկյան անկյունների գումարը $(n - 2) \\cdot 180°$ է, կանոնավոր $n$-անկյան անկյունը $\\dfrac{(n - 2) \\cdot 180°}{n}$ է, $R = \\dfrac{a}{2\\sin(180°/n)}$, $r = \\dfrac{a}{2\\operatorname{tg}(180°/n)}$ և $S = \\dfrac12 P r$։ $a$ կողմով կանոնավոր վեցանկյուն․ $R = a$, $r = \\dfrac{a\\sqrt3}{2}$, $S = \\dfrac{3\\sqrt3}{2}a^2$։

**Օրինակ 1։** Զուգահեռագծի կողմերն են $5$, $8$, անկյունը՝ $60°$։ $S = 40 \\cdot \\dfrac{\\sqrt3}{2} = 20\\sqrt3$։ Անկյունագծերը․ $d^2 = 25 + 64 \\mp 2 \\cdot 40 \\cdot \\dfrac12$, ուստի $d_1 = 7$, $d_2 = \\sqrt{129}$, ստուգում․ $49 + 129 = 178 = 2 \\cdot 89$։

**Օրինակ 2։** Շեղանկյան անկյունագծերն են $12$ և $16$․ կողմը $\\sqrt{36 + 64} = 10$ է, $S = 96$, բարձրությունը $\\dfrac{96}{10} = 9{,}6$, ներգծյալ շրջանագծի $r = 4{,}8$։

**Օրինակ 3։** Ուղղանկյան անկյունագիծը $10$ է և կողմի հետ կազմում է $30°$․ կողմերը $10\\cos 30° = 5\\sqrt3$ և $5$ են, $S = 25\\sqrt3$, անկյունագծերի միջև անկյունը $60°$ է, և $S = \\dfrac12 \\cdot 10 \\cdot 10 \\cdot \\sin 60°$ համընկնում է։

**Օրինակ 4։** Հավասարասրուն սեղանի հիմքերն են $10$ և $4$, սրունքները՝ $5$։ Բարձրությունը մեծ հիմքի վրա անջատում է $3$, ուստի $h = 4$ և $S = 7 \\cdot 4 = 28$։ Անկյունագիծը $\\sqrt{4^2 + 7^2} = \\sqrt{65}$ է։

**Օրինակ 5։** Սեղանի անկյունագծերն ուղղահայաց են՝ $6$ և $8$․ $S = 24$, $a + b = 10$, միջին գիծը $5$ է և $h = \\dfrac{48}{10} = 4{,}8$։

**Օրինակ 6։** Քառանկյան անկյունագծերը $10$ և $12$ են, անկյունը՝ $30°$․ $S = \\dfrac12 \\cdot 10 \\cdot 12 \\cdot \\dfrac12 = 30$։

**Օրինակ 7։** $AD = 12$, $BC = 4$ $ABCD$ սեղանի անկյունագծերը հատվում են $O$-ում, $S_{BOC} = 2$։ Այդ դեպքում $k = \\dfrac13$, $S_{AOD} = 18$, $S_{AOB} = S_{COD} = \\dfrac13 \\cdot 18 = 6$, և $S_{ABCD} = 2 + 18 + 6 + 6 = 32$։

**Օրինակ 8։** $4$ կողմով կանոնավոր վեցանկյուն․ $S = \\dfrac{3\\sqrt3}{2} \\cdot 16 = 24\\sqrt3$, $R = 4$, $r = 2\\sqrt3$։ Կանոնավոր ութանկյան անկյունները $\\dfrac{6 \\cdot 180°}{8} = 135°$ են։

### Վարժություններ

1. Զուգահեռագծի կողմերն են $3$, $4$, անկյունը՝ $60°$։ Գտեք մակերեսը և անկյունագծերը։
2. Շեղանկյան կողմը $13$ է, մի անկյունագիծը՝ $10$։ Գտեք մյուս անկյունագիծը և մակերեսը։
3. Հավասարասրուն սեղանի հիմքերն են $14$ և $4$, սրունքները՝ $13$։ Գտեք բարձրությունը և մակերեսը։
4. Սեղանի անկյունագծերն ուղղահայաց են՝ $5$ և $12$։ Գտեք մակերեսը, հիմքերի գումարը և բարձրությունը։
5. Քառանկյան անկյունագծերը $7$ և $8$ են և հատվում են $45°$ անկյան տակ։ Գտեք մակերեսը։
6. $ABCD$ ($AD \\parallel BC$) սեղանում $AD = 9$, $BC = 3$ և $S_{BOC} = 1$։ Գտեք սեղանի մակերեսը։
7. Կանոնավոր վեցանկյունը ներգծված է $6$ շառավղով շրջանագծում։ Գտեք պարագիծը և մակերեսը։
8. Ուղղանկյան պարագիծը $28$ է, անկյունագիծը՝ $10$։ Գտեք կողմերը և մակերեսը։

### Պատասխաններ

1. $S = 6\\sqrt3$, $d_1 = \\sqrt{13}$, $d_2 = \\sqrt{37}$։ 2. $24$, $S = 120$։ 3. $h = \\sqrt{169 - 25} = 12$, $S = 108$։ 4. $S = 30$, $a + b = 13$, $h = \\dfrac{60}{13}$։ 5. $14\\sqrt2$։ 6. $S_{AOD} = 9$, $S_{AOB} = S_{COD} = 3$, $16$։ 7. $36$, $54\\sqrt3$։ 8. $a + b = 14$, $a^2 + b^2 = 100$, $ab = 48$․ կողմերը $6$ և $8$, $S = 48$։`,
        ru: `## Параллелограммы

У **параллелограмма** противоположные стороны и углы равны; диагонали делятся точкой пересечения пополам и удовлетворяют
$$d_1^2 + d_2^2 = 2(a^2 + b^2), \\qquad S = ab\\sin\\alpha = ah_a.$$
У **прямоугольника** диагонали равны, $d^2 = a^2 + b^2$. У **ромба** диагонали перпендикулярны и делят его углы пополам, $S = \\dfrac{d_1 d_2}{2} = a^2\\sin\\alpha$, а вписанная окружность имеет $r = \\dfrac{h}{2} = \\dfrac{S}{2a}$. **Квадрат** — и то и другое.

## Трапеции

Для трапеции с основаниями $a$, $b$ и высотой $h$: **средняя линия** равна $\\dfrac{a + b}{2}$ и $S = \\dfrac{a + b}{2} \\cdot h$. В **равнобедренной** трапеции углы при основании и диагонали равны, а основание высоты из вершины меньшего основания отсекает на большем основании $\\dfrac{a - b}{2}$. Отрезок, соединяющий середины диагоналей, равен $\\dfrac{a - b}{2}$.

**Диагонали трапеции** $ABCD$ ($AD \\parallel BC$), пересекающиеся в $O$: треугольники $BOC$ и $AOD$ подобны с $k = \\dfrac{BC}{AD}$, поэтому $S_{BOC} : S_{AOD} = k^2$, и $S_{AOB} = S_{COD}$ (оба равны $k \\cdot S_{AOD}$).

**Перпендикулярные диагонали.** Для любого четырёхугольника $S = \\dfrac12 d_1 d_2 \\sin\\varphi$; при перпендикулярных диагоналях $S = \\dfrac{d_1 d_2}{2}$. В трапеции с перпендикулярными диагоналями $d_1$, $d_2$ перенос одной диагонали к концу другой даёт прямоугольный треугольник с катетами $d_1$, $d_2$ и гипотенузой $a + b$, поэтому $a + b = \\sqrt{d_1^2 + d_2^2}$ и $h = \\dfrac{d_1 d_2}{a + b}$.

## Многоугольники

Сумма углов $n$-угольника равна $(n - 2) \\cdot 180°$; правильный $n$-угольник имеет угол $\\dfrac{(n - 2) \\cdot 180°}{n}$, $R = \\dfrac{a}{2\\sin(180°/n)}$, $r = \\dfrac{a}{2\\operatorname{tg}(180°/n)}$ и $S = \\dfrac12 P r$. Правильный шестиугольник со стороной $a$: $R = a$, $r = \\dfrac{a\\sqrt3}{2}$, $S = \\dfrac{3\\sqrt3}{2}a^2$.

**Пример 1.** Параллелограмм имеет стороны $5$, $8$ и угол $60°$. $S = 40 \\cdot \\dfrac{\\sqrt3}{2} = 20\\sqrt3$. Диагонали: $d^2 = 25 + 64 \\mp 2 \\cdot 40 \\cdot \\dfrac12$, так что $d_1 = 7$, $d_2 = \\sqrt{129}$; проверка: $49 + 129 = 178 = 2 \\cdot 89$.

**Пример 2.** Ромб имеет диагонали $12$ и $16$: сторона $\\sqrt{36 + 64} = 10$, $S = 96$, высота $\\dfrac{96}{10} = 9{,}6$, вписанная окружность имеет $r = 4{,}8$.

**Пример 3.** Диагональ прямоугольника равна $10$ и образует $30°$ со стороной: стороны $10\\cos 30° = 5\\sqrt3$ и $5$, $S = 25\\sqrt3$; угол между диагоналями $60°$, и $S = \\dfrac12 \\cdot 10 \\cdot 10 \\cdot \\sin 60°$ совпадает.

**Пример 4.** Равнобедренная трапеция имеет основания $10$ и $4$ и боковые стороны $5$. Высота отсекает на большем основании $3$, поэтому $h = 4$ и $S = 7 \\cdot 4 = 28$. Диагональ равна $\\sqrt{4^2 + 7^2} = \\sqrt{65}$.

**Пример 5.** Трапеция имеет перпендикулярные диагонали $6$ и $8$: $S = 24$, $a + b = 10$, средняя линия $5$ и $h = \\dfrac{48}{10} = 4{,}8$.

**Пример 6.** Диагонали четырёхугольника равны $10$ и $12$ и образуют угол $30°$: $S = \\dfrac12 \\cdot 10 \\cdot 12 \\cdot \\dfrac12 = 30$.

**Пример 7.** В трапеции $ABCD$ с $AD = 12$, $BC = 4$ диагонали пересекаются в $O$ и $S_{BOC} = 2$. Тогда $k = \\dfrac13$, $S_{AOD} = 18$, $S_{AOB} = S_{COD} = \\dfrac13 \\cdot 18 = 6$, и $S_{ABCD} = 2 + 18 + 6 + 6 = 32$.

**Пример 8.** Правильный шестиугольник со стороной $4$: $S = \\dfrac{3\\sqrt3}{2} \\cdot 16 = 24\\sqrt3$, $R = 4$, $r = 2\\sqrt3$. Углы правильного восьмиугольника равны $\\dfrac{6 \\cdot 180°}{8} = 135°$.

### Упражнения

1. Параллелограмм имеет стороны $3$, $4$ и угол $60°$. Найдите его площадь и диагонали.
2. Ромб имеет сторону $13$ и одну диагональ $10$. Найдите другую диагональ и площадь.
3. Равнобедренная трапеция имеет основания $14$ и $4$ и боковые стороны $13$. Найдите высоту и площадь.
4. Трапеция имеет перпендикулярные диагонали $5$ и $12$. Найдите её площадь, сумму оснований и высоту.
5. Диагонали четырёхугольника равны $7$ и $8$ и пересекаются под углом $45°$. Найдите площадь.
6. В трапеции $ABCD$ ($AD \\parallel BC$) $AD = 9$, $BC = 3$ и $S_{BOC} = 1$. Найдите площадь трапеции.
7. Правильный шестиугольник вписан в окружность радиуса $6$. Найдите его периметр и площадь.
8. Прямоугольник имеет периметр $28$ и диагональ $10$. Найдите его стороны и площадь.

### Ответы

1. $S = 6\\sqrt3$; $d_1 = \\sqrt{13}$, $d_2 = \\sqrt{37}$. 2. $24$; $S = 120$. 3. $h = \\sqrt{169 - 25} = 12$; $S = 108$. 4. $S = 30$; $a + b = 13$; $h = \\dfrac{60}{13}$. 5. $14\\sqrt2$. 6. $S_{AOD} = 9$, $S_{AOB} = S_{COD} = 3$; $16$. 7. $36$; $54\\sqrt3$. 8. $a + b = 14$, $a^2 + b^2 = 100$, $ab = 48$: стороны $6$ и $8$, $S = 48$.`,
      },
      [
        q(t("In a parallelogram with sides a, b and diagonals d₁, d₂…", "a, b կողմերով և d₁, d₂ անկյունագծերով զուգահեռագծում…", "В параллелограмме со сторонами a, b и диагоналями d₁, d₂…"), [t("d₁² + d₂² = a² + b²", "d₁² + d₂² = a² + b²", "d₁² + d₂² = a² + b²"), t("d₁² + d₂² = 2(a² + b²)", "d₁² + d₂² = 2(a² + b²)", "d₁² + d₂² = 2(a² + b²)"), t("d₁·d₂ = a·b", "d₁·d₂ = a·b", "d₁·d₂ = a·b")], 1),
        q(t("A rhombus has diagonals 6 and 8. Its area is…", "Շեղանկյան անկյունագծերը 6 և 8 են։ Մակերեսը…", "Ромб имеет диагонали 6 и 8. Его площадь…"), [t("48", "48", "48"), t("24", "24", "24"), t("14", "14", "14")], 1),
        q(t("The midline of a trapezoid with bases 7 and 11 is…", "7 և 11 հիմքերով սեղանի միջին գիծը…", "Средняя линия трапеции с основаниями 7 и 11 равна…"), [t("9", "9", "9"), t("18", "18", "18"), t("4", "4", "4")], 0),
        q(t("The area of a quadrilateral with diagonals d₁, d₂ at angle φ is…", "d₁, d₂ անկյունագծերով և դրանց միջև φ անկյունով քառանկյան մակերեսը…", "Площадь четырёхугольника с диагоналями d₁, d₂ под углом φ равна…"), [t("d₁d₂·sin φ", "d₁d₂·sin φ", "d₁d₂·sin φ"), t("½d₁d₂·sin φ", "½d₁d₂·sin φ", "½d₁d₂·sin φ"), t("½d₁d₂·cos φ", "½d₁d₂·cos φ", "½d₁d₂·cos φ")], 1),
        q(t("The diagonals of the trapezoid ABCD (AD ∥ BC) meet at O. Then S(AOB) and S(COD) are…", "ABCD (AD ∥ BC) սեղանի անկյունագծերը հատվում են O-ում։ Այդ դեպքում S(AOB)-ն և S(COD)-ն…", "Диагонали трапеции ABCD (AD ∥ BC) пересекаются в O. Тогда S(AOB) и S(COD)…"), [t("equal", "հավասար են", "равны"), t("in the ratio AD : BC", "հարաբերում են AD : BC", "относятся как AD : BC"), t("in the ratio AD² : BC²", "հարաբերում են AD² : BC²", "относятся как AD² : BC²")], 0),
        q(t("Each angle of a regular hexagon is…", "Կանոնավոր վեցանկյան ամեն անկյունը…", "Каждый угол правильного шестиугольника равен…"), [t("108°", "108°", "108°"), t("120°", "120°", "120°"), t("135°", "135°", "135°")], 1),
      ],
    ),
    lesson(
      "review-stereometry",
      ["Review: stereometry", "Ամփոփում․ տարածաչափություն", "Повторение: стереометрия"],
      {
        en: ["Recall all volume and surface formulas for prisms, pyramids, cylinders, cones, truncated bodies and the ball in one table", "Recall the key relations of the cube and the regular tetrahedron and the standard angles and distances in them", "Solve mixed exam problems that combine volumes, surfaces, sections and combinations of solids"],
        hy: ["Մեկ աղյուսակում հիշել պրիզմաների, բուրգերի, գլանների, կոնների, հատած մարմինների և գնդի բոլոր ծավալի ու մակերևույթի բանաձևերը", "Հիշել խորանարդի և կանոնավոր քառանիստի հիմնական առնչությունները և դրանց ստանդարտ անկյուններն ու հեռավորությունները", "Լուծել խառը քննական խնդիրներ, որոնք համակցում են ծավալներ, մակերևույթներ, հատույթներ և մարմինների համակցություններ"],
        ru: ["Вспомнить в одной таблице все формулы объёмов и поверхностей призм, пирамид, цилиндров, конусов, усечённых тел и шара", "Вспомнить ключевые соотношения куба и правильного тетраэдра и стандартные углы и расстояния в них", "Решать смешанные экзаменационные задачи, сочетающие объёмы, поверхности, сечения и комбинации тел"],
      },
      {
        en: `## Formulas in one table

| Body | Volume | Lateral / total surface |
|---|---|---|
| prism (also oblique) | $S_{\\text{base}} h$ | right prism: $S_{\\text{lat}} = P h$ |
| pyramid | $\\dfrac13 S_{\\text{base}} h$ | regular: $S_{\\text{lat}} = \\dfrac12 P l$ |
| truncated pyramid | $\\dfrac13 h (S_1 + \\sqrt{S_1S_2} + S_2)$ | regular: $\\dfrac12 (P_1 + P_2) l$ |
| cylinder | $\\pi r^2 h$ | $2\\pi r h$; total $2\\pi r(r + h)$ |
| cone | $\\dfrac13 \\pi r^2 h$ | $\\pi r l$; total $\\pi r(r + l)$ |
| truncated cone | $\\dfrac13 \\pi h (R^2 + Rr + r^2)$ | $\\pi (R + r) l$ |
| ball / sphere | $\\dfrac43 \\pi R^3$ | $4\\pi R^2$; cap $2\\pi R h$ |

Segment of a ball: $V = \\pi h^2\\left(R - \\dfrac h3\\right)$; sector: $V = \\dfrac23\\pi R^2 h$.

## Standard solids

- **Cube** with edge $a$: diagonal $a\\sqrt3$, face diagonal $a\\sqrt2$, $V = a^3$, $S = 6a^2$, $R = \\dfrac{a\\sqrt3}{2}$, $r = \\dfrac a2$. The diagonal makes with the base an angle with $\\tan = \\dfrac{1}{\\sqrt2}$, with an edge an angle with $\\cos = \\dfrac{1}{\\sqrt3}$. The plane $A_1BD$ makes with the base an angle with $\\cos = \\dfrac{1}{\\sqrt3}$.
- **Regular tetrahedron** with edge $a$: $h = a\\sqrt{\\dfrac23}$, $V = \\dfrac{a^3\\sqrt2}{12}$, $S = a^2\\sqrt3$, $R = \\dfrac{a\\sqrt6}{4}$, $r = \\dfrac{a\\sqrt6}{12}$, dihedral angle with $\\cos = \\dfrac13$, distance between opposite edges $\\dfrac{a\\sqrt2}{2}$.
- **Regular pyramid:** $h$, apothem $l$, lateral edge $b$, base inradius $r_1$ and circumradius $\\rho$ are linked by $l^2 = h^2 + r_1^2$, $b^2 = h^2 + \\rho^2$.
- **Cone:** $l^2 = h^2 + r^2$; the development is a sector of angle $360° \\cdot \\dfrac rl$.

**Example 1.** A cube has diagonal $6$: $a = 2\\sqrt3$, $V = 24\\sqrt3$, $S = 72$, the circumscribed ball has $R = 3$ and volume $36\\pi$.

**Example 2.** A regular quadrilateral pyramid has all edges $4$: $\\rho = 2\\sqrt2$, $h = \\sqrt{16 - 8} = 2\\sqrt2$, $V = \\dfrac13 \\cdot 16 \\cdot 2\\sqrt2 = \\dfrac{32\\sqrt2}{3}$; the lateral faces are equilateral, $S_{\\text{lat}} = 4 \\cdot 4\\sqrt3 = 16\\sqrt3$.

**Example 3.** The axial section of a cylinder has area $24$ and the base has area $9\\pi$: $r = 3$, $2r \\cdot h = 24$, $h = 4$, $V = 36\\pi$, $S = 2\\pi \\cdot 3 \\cdot 4 + 2 \\cdot 9\\pi = 42\\pi$.

**Example 4.** A cone is made from a sector of angle $120°$ cut from a disc of radius $9$: $l = 9$, $r = 9 \\cdot \\dfrac{120}{360} = 3$, $h = \\sqrt{81 - 9} = 6\\sqrt2$, $V = \\dfrac13\\pi \\cdot 9 \\cdot 6\\sqrt2 = 18\\sqrt2\\,\\pi$, $S_{\\text{lat}} = 27\\pi$.

**Example 5.** A ball has volume $36\\pi$: $R = 3$ and $S = 36\\pi$, numerically equal to the volume; this happens only for $R = 3$. The cylinder circumscribed about it has volume $54\\pi$.

**Example 6.** A regular triangular prism has all edges $2$: $V = \\sqrt3 \\cdot 2 = 2\\sqrt3$, $S = 2\\sqrt3 + 12$, and the circumscribed ball has $R^2 = \\dfrac{4}{3} + 1 = \\dfrac73$.

**Example 7.** A regular truncated quadrilateral pyramid has bases with sides $4$ and $2$ and height $3$: $V = \\dfrac13 \\cdot 3 \\cdot (16 + 8 + 4) = 28$; the apothem is $\\sqrt{9 + 1} = \\sqrt{10}$ (the bases' inradii differ by $1$), $S_{\\text{lat}} = \\dfrac12 (16 + 8)\\sqrt{10} = 12\\sqrt{10}$.

**Example 8.** A rectangular parallelepiped $3 \\times 4 \\times 12$: $d = 13$; the diagonal makes with the base an angle with $\\sin = \\dfrac{12}{13}$ and with the edge $12$ an angle with $\\cos = \\dfrac{12}{13}$; $V = 144$, $S = 2(12 + 36 + 48) = 192$, $R = 6{,}5$.

### Exercises

1. A cube has surface $54$. Find its edge, diagonal and volume.
2. A regular quadrilateral pyramid has all edges $6$. Find its height and volume.
3. A cone has $r = 5$ and $l = 13$. Find its volume and total surface.
4. The axial section of a cylinder is a square of area $16$. Find the volume.
5. A sphere has area $100\\pi$. Find the volume of the ball.
6. Find the volume of a regular tetrahedron with edge $3$.
7. Find the diagonal of a rectangular parallelepiped $3 \\times 4 \\times 12$ and the sine of its angle with the base.
8. A truncated cone has $R = 5$, $r = 2$, $h = 4$. Find its volume and lateral surface.

### Answers

1. $a = 3$, $d = 3\\sqrt3$, $V = 27$. 2. $h = 3\\sqrt2$, $V = 36\\sqrt2$. 3. $h = 12$, $V = 100\\pi$, $S = \\pi \\cdot 5 \\cdot (5 + 13) = 90\\pi$. 4. $r = 2$, $h = 4$, $V = 16\\pi$. 5. $R = 5$, $V = \\dfrac{500}{3}\\pi$. 6. $\\dfrac{27\\sqrt2}{12} = \\dfrac{9\\sqrt2}{4}$. 7. $13$; $\\dfrac{12}{13}$. 8. $l = 5$, $V = \\dfrac13\\pi \\cdot 4 \\cdot 39 = 52\\pi$, $S_{\\text{lat}} = 35\\pi$.`,
        hy: `## Բանաձևերը մեկ աղյուսակում

| Մարմին | Ծավալ | Կողմնային / լրիվ մակերևույթ |
|---|---|---|
| պրիզմա (նաև թեք) | $S_{\\text{հիմք}} h$ | ուղիղ պրիզմա․ $S_{\\text{կողմ}} = P h$ |
| բուրգ | $\\dfrac13 S_{\\text{հիմք}} h$ | կանոնավոր․ $S_{\\text{կողմ}} = \\dfrac12 P l$ |
| հատած բուրգ | $\\dfrac13 h (S_1 + \\sqrt{S_1S_2} + S_2)$ | կանոնավոր․ $\\dfrac12 (P_1 + P_2) l$ |
| գլան | $\\pi r^2 h$ | $2\\pi r h$, լրիվ $2\\pi r(r + h)$ |
| կոն | $\\dfrac13 \\pi r^2 h$ | $\\pi r l$, լրիվ $\\pi r(r + l)$ |
| հատած կոն | $\\dfrac13 \\pi h (R^2 + Rr + r^2)$ | $\\pi (R + r) l$ |
| գունդ / սֆերա | $\\dfrac43 \\pi R^3$ | $4\\pi R^2$, սեգմենտ $2\\pi R h$ |

Գնդային սեգմենտ․ $V = \\pi h^2\\left(R - \\dfrac h3\\right)$, սեկտոր․ $V = \\dfrac23\\pi R^2 h$։

## Ստանդարտ մարմիններ

- **Խորանարդ** $a$ կողով․ անկյունագիծը $a\\sqrt3$, նիստի անկյունագիծը $a\\sqrt2$, $V = a^3$, $S = 6a^2$, $R = \\dfrac{a\\sqrt3}{2}$, $r = \\dfrac a2$։ Անկյունագիծը հիմքի հետ կազմում է անկյուն, որի $\\operatorname{tg} = \\dfrac{1}{\\sqrt2}$, կողի հետ՝ անկյուն, որի $\\cos = \\dfrac{1}{\\sqrt3}$։ $A_1BD$ հարթությունը հիմքի հետ կազմում է անկյուն, որի $\\cos = \\dfrac{1}{\\sqrt3}$։
- **Կանոնավոր քառանիստ** $a$ կողով․ $h = a\\sqrt{\\dfrac23}$, $V = \\dfrac{a^3\\sqrt2}{12}$, $S = a^2\\sqrt3$, $R = \\dfrac{a\\sqrt6}{4}$, $r = \\dfrac{a\\sqrt6}{12}$, երկնիստ անկյան $\\cos = \\dfrac13$, հանդիպակաց կողերի հեռավորությունը $\\dfrac{a\\sqrt2}{2}$։
- **Կանոնավոր բուրգ․** $h$-ը, $l$ ապոթեմը, $b$ կողմնային կողը, հիմքի $r_1$ ներգծյալ և $\\rho$ արտագծյալ շառավիղները կապված են $l^2 = h^2 + r_1^2$, $b^2 = h^2 + \\rho^2$ առնչություններով։
- **Կոն․** $l^2 = h^2 + r^2$, փռվածքը $360° \\cdot \\dfrac rl$ անկյունով սեկտոր է։

**Օրինակ 1։** Խորանարդի անկյունագիծը $6$ է․ $a = 2\\sqrt3$, $V = 24\\sqrt3$, $S = 72$, արտագծյալ գնդի $R = 3$, ծավալը՝ $36\\pi$։

**Օրինակ 2։** Կանոնավոր քառանկյուն բուրգի բոլոր կողերը $4$ են․ $\\rho = 2\\sqrt2$, $h = \\sqrt{16 - 8} = 2\\sqrt2$, $V = \\dfrac13 \\cdot 16 \\cdot 2\\sqrt2 = \\dfrac{32\\sqrt2}{3}$, կողմնային նիստերը հավասարակողմ են, $S_{\\text{կողմ}} = 4 \\cdot 4\\sqrt3 = 16\\sqrt3$։

**Օրինակ 3։** Գլանի առանցքային հատույթի մակերեսը $24$ է, հիմքինը՝ $9\\pi$․ $r = 3$, $2r \\cdot h = 24$, $h = 4$, $V = 36\\pi$, $S = 2\\pi \\cdot 3 \\cdot 4 + 2 \\cdot 9\\pi = 42\\pi$։

**Օրինակ 4։** Կոնը պատրաստված է $9$ շառավղով շրջանից կտրված $120°$ սեկտորից․ $l = 9$, $r = 9 \\cdot \\dfrac{120}{360} = 3$, $h = \\sqrt{81 - 9} = 6\\sqrt2$, $V = \\dfrac13\\pi \\cdot 9 \\cdot 6\\sqrt2 = 18\\sqrt2\\,\\pi$, $S_{\\text{կողմ}} = 27\\pi$։

**Օրինակ 5։** Գնդի ծավալը $36\\pi$ է․ $R = 3$ և $S = 36\\pi$՝ թվապես հավասար ծավալին, դա լինում է միայն $R = 3$ դեպքում։ Նրան արտագծյալ գլանի ծավալը $54\\pi$ է։

**Օրինակ 6։** Կանոնավոր եռանկյուն պրիզմայի բոլոր կողերը $2$ են․ $V = \\sqrt3 \\cdot 2 = 2\\sqrt3$, $S = 2\\sqrt3 + 12$, արտագծյալ գնդի $R^2 = \\dfrac{4}{3} + 1 = \\dfrac73$։

**Օրինակ 7։** Կանոնավոր հատած քառանկյուն բուրգի հիմքերի կողմերն են $4$ և $2$, բարձրությունը՝ $3$․ $V = \\dfrac13 \\cdot 3 \\cdot (16 + 8 + 4) = 28$, ապոթեմը $\\sqrt{9 + 1} = \\sqrt{10}$ է (հիմքերի ներգծյալ շառավիղները տարբերվում են $1$-ով), $S_{\\text{կողմ}} = \\dfrac12 (16 + 8)\\sqrt{10} = 12\\sqrt{10}$։

**Օրինակ 8։** $3 \\times 4 \\times 12$ ուղղանկյուն զուգահեռանիստ․ $d = 13$, անկյունագիծը հիմքի հետ կազմում է անկյուն, որի $\\sin = \\dfrac{12}{13}$, իսկ $12$ կողի հետ՝ անկյուն, որի $\\cos = \\dfrac{12}{13}$, $V = 144$, $S = 2(12 + 36 + 48) = 192$, $R = 6{,}5$։

### Վարժություններ

1. Խորանարդի մակերևույթը $54$ է։ Գտեք կողը, անկյունագիծը և ծավալը։
2. Կանոնավոր քառանկյուն բուրգի բոլոր կողերը $6$ են։ Գտեք բարձրությունը և ծավալը։
3. Կոնի $r = 5$, $l = 13$։ Գտեք ծավալը և լրիվ մակերևույթը։
4. Գլանի առանցքային հատույթը $16$ մակերեսով քառակուսի է։ Գտեք ծավալը։
5. Սֆերայի մակերեսը $100\\pi$ է։ Գտեք գնդի ծավալը։
6. Գտեք $3$ կողով կանոնավոր քառանիստի ծավալը։
7. Գտեք $3 \\times 4 \\times 12$ ուղղանկյուն զուգահեռանիստի անկյունագիծը և նրա՝ հիմքի հետ անկյան սինուսը։
8. Հատած կոնի $R = 5$, $r = 2$, $h = 4$։ Գտեք ծավալը և կողմնային մակերևույթը։

### Պատասխաններ

1. $a = 3$, $d = 3\\sqrt3$, $V = 27$։ 2. $h = 3\\sqrt2$, $V = 36\\sqrt2$։ 3. $h = 12$, $V = 100\\pi$, $S = \\pi \\cdot 5 \\cdot (5 + 13) = 90\\pi$։ 4. $r = 2$, $h = 4$, $V = 16\\pi$։ 5. $R = 5$, $V = \\dfrac{500}{3}\\pi$։ 6. $\\dfrac{27\\sqrt2}{12} = \\dfrac{9\\sqrt2}{4}$։ 7. $13$, $\\dfrac{12}{13}$։ 8. $l = 5$, $V = \\dfrac13\\pi \\cdot 4 \\cdot 39 = 52\\pi$, $S_{\\text{կողմ}} = 35\\pi$։`,
        ru: `## Формулы в одной таблице

| Тело | Объём | Боковая / полная поверхность |
|---|---|---|
| призма (и наклонная) | $S_{\\text{осн}} h$ | прямая призма: $S_{\\text{бок}} = P h$ |
| пирамида | $\\dfrac13 S_{\\text{осн}} h$ | правильная: $S_{\\text{бок}} = \\dfrac12 P l$ |
| усечённая пирамида | $\\dfrac13 h (S_1 + \\sqrt{S_1S_2} + S_2)$ | правильная: $\\dfrac12 (P_1 + P_2) l$ |
| цилиндр | $\\pi r^2 h$ | $2\\pi r h$; полная $2\\pi r(r + h)$ |
| конус | $\\dfrac13 \\pi r^2 h$ | $\\pi r l$; полная $\\pi r(r + l)$ |
| усечённый конус | $\\dfrac13 \\pi h (R^2 + Rr + r^2)$ | $\\pi (R + r) l$ |
| шар / сфера | $\\dfrac43 \\pi R^3$ | $4\\pi R^2$; сегмент $2\\pi R h$ |

Шаровой сегмент: $V = \\pi h^2\\left(R - \\dfrac h3\\right)$; сектор: $V = \\dfrac23\\pi R^2 h$.

## Стандартные тела

- **Куб** с ребром $a$: диагональ $a\\sqrt3$, диагональ грани $a\\sqrt2$, $V = a^3$, $S = 6a^2$, $R = \\dfrac{a\\sqrt3}{2}$, $r = \\dfrac a2$. Диагональ образует с основанием угол с $\\operatorname{tg} = \\dfrac{1}{\\sqrt2}$, с ребром — угол с $\\cos = \\dfrac{1}{\\sqrt3}$. Плоскость $A_1BD$ образует с основанием угол с $\\cos = \\dfrac{1}{\\sqrt3}$.
- **Правильный тетраэдр** с ребром $a$: $h = a\\sqrt{\\dfrac23}$, $V = \\dfrac{a^3\\sqrt2}{12}$, $S = a^2\\sqrt3$, $R = \\dfrac{a\\sqrt6}{4}$, $r = \\dfrac{a\\sqrt6}{12}$, двугранный угол с $\\cos = \\dfrac13$, расстояние между противоположными рёбрами $\\dfrac{a\\sqrt2}{2}$.
- **Правильная пирамида:** $h$, апофема $l$, боковое ребро $b$, радиусы вписанной $r_1$ и описанной $\\rho$ окружностей основания связаны соотношениями $l^2 = h^2 + r_1^2$, $b^2 = h^2 + \\rho^2$.
- **Конус:** $l^2 = h^2 + r^2$; развёртка — сектор с углом $360° \\cdot \\dfrac rl$.

**Пример 1.** Диагональ куба равна $6$: $a = 2\\sqrt3$, $V = 24\\sqrt3$, $S = 72$, описанный шар имеет $R = 3$ и объём $36\\pi$.

**Пример 2.** Все рёбра правильной четырёхугольной пирамиды равны $4$: $\\rho = 2\\sqrt2$, $h = \\sqrt{16 - 8} = 2\\sqrt2$, $V = \\dfrac13 \\cdot 16 \\cdot 2\\sqrt2 = \\dfrac{32\\sqrt2}{3}$; боковые грани равносторонние, $S_{\\text{бок}} = 4 \\cdot 4\\sqrt3 = 16\\sqrt3$.

**Пример 3.** Осевое сечение цилиндра имеет площадь $24$, основание — площадь $9\\pi$: $r = 3$, $2r \\cdot h = 24$, $h = 4$, $V = 36\\pi$, $S = 2\\pi \\cdot 3 \\cdot 4 + 2 \\cdot 9\\pi = 42\\pi$.

**Пример 4.** Конус сделан из сектора с углом $120°$, вырезанного из круга радиуса $9$: $l = 9$, $r = 9 \\cdot \\dfrac{120}{360} = 3$, $h = \\sqrt{81 - 9} = 6\\sqrt2$, $V = \\dfrac13\\pi \\cdot 9 \\cdot 6\\sqrt2 = 18\\sqrt2\\,\\pi$, $S_{\\text{бок}} = 27\\pi$.

**Пример 5.** Объём шара равен $36\\pi$: $R = 3$ и $S = 36\\pi$, численно равна объёму; так бывает только при $R = 3$. Описанный около него цилиндр имеет объём $54\\pi$.

**Пример 6.** Все рёбра правильной треугольной призмы равны $2$: $V = \\sqrt3 \\cdot 2 = 2\\sqrt3$, $S = 2\\sqrt3 + 12$, а описанный шар имеет $R^2 = \\dfrac{4}{3} + 1 = \\dfrac73$.

**Пример 7.** Правильная усечённая четырёхугольная пирамида имеет основания со сторонами $4$ и $2$ и высоту $3$: $V = \\dfrac13 \\cdot 3 \\cdot (16 + 8 + 4) = 28$; апофема $\\sqrt{9 + 1} = \\sqrt{10}$ (радиусы вписанных окружностей оснований отличаются на $1$), $S_{\\text{бок}} = \\dfrac12 (16 + 8)\\sqrt{10} = 12\\sqrt{10}$.

**Пример 8.** Прямоугольный параллелепипед $3 \\times 4 \\times 12$: $d = 13$; диагональ образует с основанием угол с $\\sin = \\dfrac{12}{13}$, с ребром $12$ — угол с $\\cos = \\dfrac{12}{13}$; $V = 144$, $S = 2(12 + 36 + 48) = 192$, $R = 6{,}5$.

### Упражнения

1. Поверхность куба равна $54$. Найдите его ребро, диагональ и объём.
2. Все рёбра правильной четырёхугольной пирамиды равны $6$. Найдите её высоту и объём.
3. Конус имеет $r = 5$ и $l = 13$. Найдите его объём и полную поверхность.
4. Осевое сечение цилиндра — квадрат площади $16$. Найдите объём.
5. Площадь сферы равна $100\\pi$. Найдите объём шара.
6. Найдите объём правильного тетраэдра с ребром $3$.
7. Найдите диагональ прямоугольного параллелепипеда $3 \\times 4 \\times 12$ и синус её угла с основанием.
8. Усечённый конус имеет $R = 5$, $r = 2$, $h = 4$. Найдите его объём и боковую поверхность.

### Ответы

1. $a = 3$, $d = 3\\sqrt3$, $V = 27$. 2. $h = 3\\sqrt2$, $V = 36\\sqrt2$. 3. $h = 12$, $V = 100\\pi$, $S = \\pi \\cdot 5 \\cdot (5 + 13) = 90\\pi$. 4. $r = 2$, $h = 4$, $V = 16\\pi$. 5. $R = 5$, $V = \\dfrac{500}{3}\\pi$. 6. $\\dfrac{27\\sqrt2}{12} = \\dfrac{9\\sqrt2}{4}$. 7. $13$; $\\dfrac{12}{13}$. 8. $l = 5$, $V = \\dfrac13\\pi \\cdot 4 \\cdot 39 = 52\\pi$, $S_{\\text{бок}} = 35\\pi$.`,
      },
      [
        q(t("The volume of a pyramid is…", "Բուրգի ծավալը…", "Объём пирамиды равен…"), [t("S·h", "S·h", "S·h"), t("S·h/3", "S·h/3", "S·h/3"), t("S·h/2", "S·h/2", "S·h/2")], 1),
        q(t("The lateral area of a cone with radius r and generator l is…", "r շառավղով և l ծնորդով կոնի կողմնային մակերեսը…", "Боковая поверхность конуса с радиусом r и образующей l равна…"), [t("πrl", "πrl", "πrl"), t("2πrl", "2πrl", "2πrl"), t("πr²l", "πr²l", "πr²l")], 0),
        q(t("The diagonal of a cube with edge a is…", "a կողով խորանարդի անկյունագիծը…", "Диагональ куба с ребром a равна…"), [t("a√2", "a√2", "a√2"), t("a√3", "a√3", "a√3"), t("2a", "2a", "2a")], 1),
        q(t("The volume of a regular tetrahedron with edge a is…", "a կողով կանոնավոր քառանիստի ծավալը…", "Объём правильного тетраэдра с ребром a равен…"), [t("a³√2/12", "a³√2/12", "a³√2/12"), t("a³√3/4", "a³√3/4", "a³√3/4"), t("a³/3", "a³/3", "a³/3")], 0),
        q(t("A cone's development is a sector of angle…", "Կոնի փռվածքը սեկտոր է, որի անկյունը…", "Развёртка конуса — сектор с углом…"), [t("360°·l/r", "360°·l/r", "360°·l/r"), t("360°·r/l", "360°·r/l", "360°·r/l"), t("180°·r/l", "180°·r/l", "180°·r/l")], 1),
        q(t("The ball and the sphere of radius 3 have…", "3 շառավղով գունդն ու սֆերան ունեն…", "Шар и сфера радиуса 3 имеют…"), [t("numerically equal volume and area", "թվապես հավասար ծավալ և մակերես", "численно равные объём и площадь"), t("volume twice the area", "մակերեսի կրկնակի ծավալ", "объём вдвое больше площади"), t("area twice the volume", "ծավալի կրկնակի մակերես", "площадь вдвое больше объёма")], 0),
      ],
    ),
    lesson(
      "geometry-mock-exam",
      ["Mock exam", "Փորձնական քննություն", "Пробный экзамен"],
      {
        en: ["Work through a complete timed geometry paper covering planimetry, coordinates and stereometry", "Manage time: short computations first, then full solutions, then the multi-step problems", "Check every answer against a second method (formula versus construction, coordinates versus synthetic)"],
        hy: ["Լուծել հարթաչափություն, կոորդինատներ և տարածաչափություն ընդգրկող ամբողջական ժամանակավորված երկրաչափության աշխատանք", "Կառավարել ժամանակը․ նախ կարճ հաշվարկներ, ապա լրիվ լուծումներ, ապա բազմաքայլ խնդիրներ", "Ամեն պատասխան ստուգել երկրորդ եղանակով (բանաձև ընդդեմ կառուցման, կոորդինատներ ընդդեմ սինթետիկ լուծման)"],
        ru: ["Решить полную работу по геометрии на время, охватывающую планиметрию, координаты и стереометрию", "Распределять время: сначала короткие вычисления, затем полные решения, затем многошаговые задачи", "Проверять каждый ответ вторым способом (формула против построения, координаты против синтетического решения)"],
      },
      {
        en: `Set a timer for $120$ minutes and solve Part A (short answers, $1$ point each), Part B (full solutions, $2$ points each) and Part C ($3$ points each) without looking at the solutions. Then mark yourself: $20$ points is the maximum. Only after that read the worked solutions below.

## Part A (short answer)

**A1.** Find the area of the triangle with sides $13$, $14$, $15$.
**A2.** The diagonal of a cube is $6$. Find its volume.
**A3.** Find the lateral area of a cylinder with $r = 3$ and $h = 5$.
**A4.** A chord of length $6$ is at distance $4$ from the centre. Find the radius.
**A5.** Find the distance from $(1; 2; 3)$ to the plane $2x - 2y + z = 4$.
**A6.** The area of a sphere is $144\\pi$. Find the volume of the ball.

## Part B (full solution)

**B1.** A regular quadrilateral pyramid has base side $6$ and lateral edge $5$. Find its volume and the cosine of the angle between a lateral edge and the base.
**B2.** An isosceles trapezoid has bases $10$ and $4$ and legs $5$. Find its area, its diagonal and the radius of the circumscribed circle.
**B3.** A sphere is inscribed in a cone with $r = 6$ and $h = 8$. Find the radius of the sphere and the ratio of the volumes of the ball and the cone.
**B4.** In a cube with edge $2$ find the cosine of the angle between the plane $A_1BD$ and the base, and the area of the section $A_1BD$.

## Part C (multi-step)

**C1.** In a cube with edge $3$ find the distance between the lines $AB_1$ and $BC_1$ and the angle between them.
**C2.** In the triangle $ABC$, $AB = 6$, $AC = 9$, $\\angle A = 60°$. Find $BC$, the bisector $AD$ and the radius of the circumscribed circle.

## Solutions

**A1.** $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$.
**A2.** $a\\sqrt3 = 6$, $a = 2\\sqrt3$, $V = 24\\sqrt3$.
**A3.** $2\\pi \\cdot 3 \\cdot 5 = 30\\pi$.
**A4.** $R = \\sqrt{3^2 + 4^2} = 5$.
**A5.** $\\dfrac{\\lvert 2 - 4 + 3 - 4\\rvert}{\\sqrt{4 + 4 + 1}} = \\dfrac{3}{3} = 1$.
**A6.** $4\\pi R^2 = 144\\pi$, $R = 6$, $V = \\dfrac43\\pi \\cdot 216 = 288\\pi$.

**B1.** $\\rho = 3\\sqrt2$, $h = \\sqrt{25 - 18} = \\sqrt7$, $V = \\dfrac13 \\cdot 36 \\cdot \\sqrt7 = 12\\sqrt7$. The lateral edge, its projection $\\rho$ and $h$ form a right triangle: $\\cos\\varphi = \\dfrac{\\rho}{b} = \\dfrac{3\\sqrt2}{5}$.

**B2.** The altitude cuts off $\\dfrac{10 - 4}{2} = 3$ on the larger base, so $h = 4$, $S = \\dfrac{10 + 4}{2} \\cdot 4 = 28$. The diagonal: $\\sqrt{4^2 + 7^2} = \\sqrt{65}$. The circumscribed circle of the trapezoid is that of the triangle with sides $10$, $5$, $\\sqrt{65}$ and area $\\dfrac12 \\cdot 10 \\cdot 4 = 20$: $R = \\dfrac{10 \\cdot 5 \\cdot \\sqrt{65}}{4 \\cdot 20} = \\dfrac{5\\sqrt{65}}{8}$.

**B3.** $l = 10$; in the axial section the inscribed circle has $\\rho = \\dfrac{rh}{r + l} = \\dfrac{48}{16} = 3$. $V_{\\text{ball}} = 36\\pi$, $V_{\\text{cone}} = \\dfrac13\\pi \\cdot 36 \\cdot 8 = 96\\pi$, ratio $\\dfrac{36}{96} = \\dfrac38$.

**B4.** With $A(0; 0; 0)$, $B(2; 0; 0)$, $D(0; 2; 0)$, $A_1(0; 0; 2)$ the plane $A_1BD$ is $x + y + z = 2$ with normal $\\{1; 1; 1\\}$; the base has normal $\\{0; 0; 1\\}$; $\\cos\\varphi = \\dfrac{1}{\\sqrt3}$. The section is an equilateral triangle with side $2\\sqrt2$: $S = \\dfrac{\\sqrt3}{4} \\cdot 8 = 2\\sqrt3$. Check: the projection $ABD$ has area $2$ and $2 = 2\\sqrt3 \\cdot \\dfrac{1}{\\sqrt3}$.

**C1.** Place $A(0; 0; 0)$, $B(3; 0; 0)$, $D(0; 3; 0)$, $A_1(0; 0; 3)$. Directions: $\\overrightarrow{AB_1} = \\{3; 0; 3\\}$, $\\overrightarrow{BC_1} = \\{0; 3; 3\\}$. Angle: $\\cos\\theta = \\dfrac{0 + 0 + 9}{\\sqrt{18}\\sqrt{18}} = \\dfrac12$, $\\theta = 60°$. Distance: the plane through $BC_1$ parallel to $AB_1$ has normal perpendicular to both directions, $\\vec n = \\{1; 1; -1\\}$, and passes through $B$: $x + y - z = 3$. Distance from $A$: $\\dfrac{3}{\\sqrt3} = \\sqrt3$. (General formula: $\\dfrac{a}{\\sqrt3}$.)

**C2.** Law of cosines: $BC^2 = 36 + 81 - 2 \\cdot 54 \\cdot \\dfrac12 = 63$, $BC = 3\\sqrt7$. Bisector: $AD = \\dfrac{2 \\cdot 6 \\cdot 9 \\cos 30°}{6 + 9} = \\dfrac{108 \\cdot \\sqrt3 / 2}{15} = \\dfrac{18\\sqrt3}{5}$. (Check with $AD^2 = bc - BD \\cdot DC$: $BD = \\dfrac{2}{5} \\cdot 3\\sqrt7$, $DC = \\dfrac35 \\cdot 3\\sqrt7$, $BD \\cdot DC = \\dfrac{378}{25}$, $AD^2 = 54 - \\dfrac{378}{25} = \\dfrac{972}{25}$, $AD = \\dfrac{18\\sqrt3}{5}$.) Circumradius: $R = \\dfrac{BC}{2\\sin 60°} = \\dfrac{3\\sqrt7}{\\sqrt3} = \\sqrt{21}$.

## Marking scheme and common slips

- Part A: $1$ point for the correct answer. Part B: $1$ point for a correct method with an arithmetic slip, $2$ for a complete solution. Part C: $3$ points for a complete solution, $2$ if one of the two parts is missing, $1$ for a correct setup.
- $17$ to $20$ points: excellent; $13$ to $16$: good; $9$ to $12$: pass; below $9$: repeat the review lessons.
- Typical slips: using $\\dfrac12$ in the volume of a pyramid instead of $\\dfrac13$; confusing the apothem with the lateral edge; forgetting the absolute value in the distance formula; taking the obtuse dihedral angle instead of the angle between planes; forgetting that the circumscribed circle of a trapezoid is that of any three of its vertices.

### Exercises

A second short paper for self-check.

1. Find the area of the triangle with sides $5$, $5$, $8$.
2. Find the volume of a regular tetrahedron with edge $2$.
3. A cone has $r = 3$ and $l = 5$. Find its volume.
4. A point is at distance $10$ from the centre of a circle of radius $8$. Find the tangent segment.
5. Find the distance between the planes $x + 2y + 2z = 1$ and $x + 2y + 2z = 7$.
6. A rhombus has diagonals $10$ and $24$. Find its side and area.
7. A ball is inscribed in a cube with edge $4$. Find its volume.
8. Find the tangent of the angle between the diagonal of a cube and its base.

### Answers

1. $h = 3$, $S = 12$. 2. $\\dfrac{8\\sqrt2}{12} = \\dfrac{2\\sqrt2}{3}$. 3. $h = 4$, $V = 12\\pi$. 4. $6$. 5. $\\dfrac{6}{3} = 2$. 6. $13$; $120$. 7. $R = 2$, $V = \\dfrac{32}{3}\\pi$. 8. $\\dfrac{a}{a\\sqrt2} = \\dfrac{1}{\\sqrt2}$.`,
        hy: `Դրեք ժամանակաչափ $120$ րոպեով և լուծեք A մասը (կարճ պատասխաններ, $1$ միավոր յուրաքանչյուրը), B մասը (լրիվ լուծումներ, $2$ միավոր) և C մասը ($3$ միավոր)՝ առանց լուծումներին նայելու։ Ապա գնահատեք ինքներդ ձեզ․ առավելագույնը $20$ միավոր է։ Միայն դրանից հետո կարդացեք ստորև բերված լուծումները։

## A մաս (կարճ պատասխան)

**A1.** Գտեք $13$, $14$, $15$ կողմերով եռանկյան մակերեսը։
**A2.** Խորանարդի անկյունագիծը $6$ է։ Գտեք ծավալը։
**A3.** Գտեք $r = 3$, $h = 5$ գլանի կողմնային մակերեսը։
**A4.** $6$ երկարությամբ լարը կենտրոնից $4$ հեռավորության վրա է։ Գտեք շառավիղը։
**A5.** Գտեք $(1; 2; 3)$ կետից $2x - 2y + z = 4$ հարթություն հեռավորությունը։
**A6.** Սֆերայի մակերեսը $144\\pi$ է։ Գտեք գնդի ծավալը։

## B մաս (լրիվ լուծում)

**B1.** Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $6$ է, կողմնային կողը՝ $5$։ Գտեք ծավալը և կողմնային կողի ու հիմքի միջև անկյան կոսինուսը։
**B2.** Հավասարասրուն սեղանի հիմքերն են $10$ և $4$, սրունքները՝ $5$։ Գտեք մակերեսը, անկյունագիծը և արտագծյալ շրջանագծի շառավիղը։
**B3.** Սֆերան ներգծված է $r = 6$, $h = 8$ կոնում։ Գտեք սֆերայի շառավիղը և գնդի ու կոնի ծավալների հարաբերությունը։
**B4.** $2$ կողով խորանարդում գտեք $A_1BD$ հարթության և հիմքի միջև անկյան կոսինուսը և $A_1BD$ հատույթի մակերեսը։

## C մաս (բազմաքայլ)

**C1.** $3$ կողով խորանարդում գտեք $AB_1$ և $BC_1$ ուղիղների հեռավորությունը և դրանց միջև անկյունը։
**C2.** $ABC$ եռանկյունում $AB = 6$, $AC = 9$, $\\angle A = 60°$։ Գտեք $BC$-ն, $AD$ կիսորդը և արտագծյալ շրջանագծի շառավիղը։

## Լուծումներ

**A1.** $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$։
**A2.** $a\\sqrt3 = 6$, $a = 2\\sqrt3$, $V = 24\\sqrt3$։
**A3.** $2\\pi \\cdot 3 \\cdot 5 = 30\\pi$։
**A4.** $R = \\sqrt{3^2 + 4^2} = 5$։
**A5.** $\\dfrac{\\lvert 2 - 4 + 3 - 4\\rvert}{\\sqrt{4 + 4 + 1}} = \\dfrac{3}{3} = 1$։
**A6.** $4\\pi R^2 = 144\\pi$, $R = 6$, $V = \\dfrac43\\pi \\cdot 216 = 288\\pi$։

**B1.** $\\rho = 3\\sqrt2$, $h = \\sqrt{25 - 18} = \\sqrt7$, $V = \\dfrac13 \\cdot 36 \\cdot \\sqrt7 = 12\\sqrt7$։ Կողմնային կողը, նրա $\\rho$ պրոյեկցիան և $h$-ը կազմում են ուղղանկյուն եռանկյուն․ $\\cos\\varphi = \\dfrac{\\rho}{b} = \\dfrac{3\\sqrt2}{5}$։

**B2.** Բարձրությունը մեծ հիմքի վրա անջատում է $\\dfrac{10 - 4}{2} = 3$, ուստի $h = 4$, $S = \\dfrac{10 + 4}{2} \\cdot 4 = 28$։ Անկյունագիծը․ $\\sqrt{4^2 + 7^2} = \\sqrt{65}$։ Սեղանի արտագծյալ շրջանագիծը $10$, $5$, $\\sqrt{65}$ կողմերով և $\\dfrac12 \\cdot 10 \\cdot 4 = 20$ մակերեսով եռանկյան արտագծյալ շրջանագիծն է․ $R = \\dfrac{10 \\cdot 5 \\cdot \\sqrt{65}}{4 \\cdot 20} = \\dfrac{5\\sqrt{65}}{8}$։

**B3.** $l = 10$, առանցքային հատույթում ներգծյալ շրջանագծի $\\rho = \\dfrac{rh}{r + l} = \\dfrac{48}{16} = 3$։ $V_{\\text{գունդ}} = 36\\pi$, $V_{\\text{կոն}} = \\dfrac13\\pi \\cdot 36 \\cdot 8 = 96\\pi$, հարաբերությունը $\\dfrac{36}{96} = \\dfrac38$։

**B4.** $A(0; 0; 0)$, $B(2; 0; 0)$, $D(0; 2; 0)$, $A_1(0; 0; 2)$ դեպքում $A_1BD$ հարթությունը $x + y + z = 2$ է $\\{1; 1; 1\\}$ նորմալով, հիմքի նորմալը $\\{0; 0; 1\\}$ է, $\\cos\\varphi = \\dfrac{1}{\\sqrt3}$։ Հատույթը $2\\sqrt2$ կողմով հավասարակողմ եռանկյուն է․ $S = \\dfrac{\\sqrt3}{4} \\cdot 8 = 2\\sqrt3$։ Ստուգում․ $ABD$ պրոյեկցիայի մակերեսը $2$ է և $2 = 2\\sqrt3 \\cdot \\dfrac{1}{\\sqrt3}$։

**C1.** Տեղադրենք $A(0; 0; 0)$, $B(3; 0; 0)$, $D(0; 3; 0)$, $A_1(0; 0; 3)$։ Ուղղություններ․ $\\overrightarrow{AB_1} = \\{3; 0; 3\\}$, $\\overrightarrow{BC_1} = \\{0; 3; 3\\}$։ Անկյուն․ $\\cos\\theta = \\dfrac{0 + 0 + 9}{\\sqrt{18}\\sqrt{18}} = \\dfrac12$, $\\theta = 60°$։ Հեռավորություն․ $BC_1$-ով անցնող, $AB_1$-ին զուգահեռ հարթության նորմալն ուղղահայաց է երկու ուղղություններին, $\\vec n = \\{1; 1; -1\\}$, և անցնում է $B$-ով․ $x + y - z = 3$։ Հեռավորությունը $A$-ից․ $\\dfrac{3}{\\sqrt3} = \\sqrt3$։ (Ընդհանուր բանաձև․ $\\dfrac{a}{\\sqrt3}$։)

**C2.** Կոսինուսների թեորեմ․ $BC^2 = 36 + 81 - 2 \\cdot 54 \\cdot \\dfrac12 = 63$, $BC = 3\\sqrt7$։ Կիսորդ․ $AD = \\dfrac{2 \\cdot 6 \\cdot 9 \\cos 30°}{6 + 9} = \\dfrac{108 \\cdot \\sqrt3 / 2}{15} = \\dfrac{18\\sqrt3}{5}$։ (Ստուգում $AD^2 = bc - BD \\cdot DC$-ով․ $BD = \\dfrac{2}{5} \\cdot 3\\sqrt7$, $DC = \\dfrac35 \\cdot 3\\sqrt7$, $BD \\cdot DC = \\dfrac{378}{25}$, $AD^2 = 54 - \\dfrac{378}{25} = \\dfrac{972}{25}$, $AD = \\dfrac{18\\sqrt3}{5}$։) Արտագծյալ շառավիղ․ $R = \\dfrac{BC}{2\\sin 60°} = \\dfrac{3\\sqrt7}{\\sqrt3} = \\sqrt{21}$։

## Գնահատման սխեմա և տարածված սխալներ

- A մաս․ $1$ միավոր ճիշտ պատասխանի համար։ B մաս․ $1$ միավոր ճիշտ եղանակի և թվաբանական սխալի դեպքում, $2$՝ լրիվ լուծման համար։ C մաս․ $3$ միավոր լրիվ լուծման համար, $2$, եթե երկու մասերից մեկը բացակայում է, $1$՝ ճիշտ սկզբի համար։
- $17$-ից $20$ միավոր․ գերազանց, $13$-ից $16$՝ լավ, $9$-ից $12$՝ բավարար, $9$-ից ցածր՝ կրկնեք ամփոփիչ դասերը։
- Տիպիկ սխալներ․ բուրգի ծավալում $\\dfrac13$-ի փոխարեն $\\dfrac12$ օգտագործելը, ապոթեմը կողմնային կողի հետ շփոթելը, հեռավորության բանաձևում մոդուլը մոռանալը, հարթությունների միջև անկյան փոխարեն բութ երկնիստ անկյունը վերցնելը, մոռանալը, որ սեղանի արտագծյալ շրջանագիծը նրա ցանկացած երեք գագաթի արտագծյալ շրջանագիծն է։

### Վարժություններ

Երկրորդ կարճ աշխատանք ինքնաստուգման համար։

1. Գտեք $5$, $5$, $8$ կողմերով եռանկյան մակերեսը։
2. Գտեք $2$ կողով կանոնավոր քառանիստի ծավալը։
3. Կոնի $r = 3$, $l = 5$։ Գտեք ծավալը։
4. Կետը $8$ շառավղով շրջանագծի կենտրոնից $10$ հեռավորության վրա է։ Գտեք շոշափող հատվածը։
5. Գտեք $x + 2y + 2z = 1$ և $x + 2y + 2z = 7$ հարթությունների հեռավորությունը։
6. Շեղանկյան անկյունագծերն են $10$ և $24$։ Գտեք կողմը և մակերեսը։
7. Գունդը ներգծված է $4$ կողով խորանարդում։ Գտեք ծավալը։
8. Գտեք խորանարդի անկյունագծի և հիմքի միջև անկյան տանգենսը։

### Պատասխաններ

1. $h = 3$, $S = 12$։ 2. $\\dfrac{8\\sqrt2}{12} = \\dfrac{2\\sqrt2}{3}$։ 3. $h = 4$, $V = 12\\pi$։ 4. $6$։ 5. $\\dfrac{6}{3} = 2$։ 6. $13$, $120$։ 7. $R = 2$, $V = \\dfrac{32}{3}\\pi$։ 8. $\\dfrac{a}{a\\sqrt2} = \\dfrac{1}{\\sqrt2}$։`,
        ru: `Поставьте таймер на $120$ минут и решите часть A (краткие ответы, по $1$ баллу), часть B (полные решения, по $2$ балла) и часть C (по $3$ балла), не заглядывая в решения. Затем оцените себя: максимум $20$ баллов. Только после этого читайте решения ниже.

## Часть A (краткий ответ)

**A1.** Найдите площадь треугольника со сторонами $13$, $14$, $15$.
**A2.** Диагональ куба равна $6$. Найдите его объём.
**A3.** Найдите боковую поверхность цилиндра с $r = 3$ и $h = 5$.
**A4.** Хорда длины $6$ удалена от центра на $4$. Найдите радиус.
**A5.** Найдите расстояние от точки $(1; 2; 3)$ до плоскости $2x - 2y + z = 4$.
**A6.** Площадь сферы равна $144\\pi$. Найдите объём шара.

## Часть B (полное решение)

**B1.** Правильная четырёхугольная пирамида имеет сторону основания $6$ и боковое ребро $5$. Найдите её объём и косинус угла между боковым ребром и основанием.
**B2.** Равнобедренная трапеция имеет основания $10$ и $4$ и боковые стороны $5$. Найдите её площадь, диагональ и радиус описанной окружности.
**B3.** Сфера вписана в конус с $r = 6$ и $h = 8$. Найдите радиус сферы и отношение объёмов шара и конуса.
**B4.** В кубе с ребром $2$ найдите косинус угла между плоскостью $A_1BD$ и основанием и площадь сечения $A_1BD$.

## Часть C (многошаговые)

**C1.** В кубе с ребром $3$ найдите расстояние между прямыми $AB_1$ и $BC_1$ и угол между ними.
**C2.** В треугольнике $ABC$: $AB = 6$, $AC = 9$, $\\angle A = 60°$. Найдите $BC$, биссектрису $AD$ и радиус описанной окружности.

## Решения

**A1.** $p = 21$, $S = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$.
**A2.** $a\\sqrt3 = 6$, $a = 2\\sqrt3$, $V = 24\\sqrt3$.
**A3.** $2\\pi \\cdot 3 \\cdot 5 = 30\\pi$.
**A4.** $R = \\sqrt{3^2 + 4^2} = 5$.
**A5.** $\\dfrac{\\lvert 2 - 4 + 3 - 4\\rvert}{\\sqrt{4 + 4 + 1}} = \\dfrac{3}{3} = 1$.
**A6.** $4\\pi R^2 = 144\\pi$, $R = 6$, $V = \\dfrac43\\pi \\cdot 216 = 288\\pi$.

**B1.** $\\rho = 3\\sqrt2$, $h = \\sqrt{25 - 18} = \\sqrt7$, $V = \\dfrac13 \\cdot 36 \\cdot \\sqrt7 = 12\\sqrt7$. Боковое ребро, его проекция $\\rho$ и $h$ образуют прямоугольный треугольник: $\\cos\\varphi = \\dfrac{\\rho}{b} = \\dfrac{3\\sqrt2}{5}$.

**B2.** Высота отсекает на большем основании $\\dfrac{10 - 4}{2} = 3$, поэтому $h = 4$, $S = \\dfrac{10 + 4}{2} \\cdot 4 = 28$. Диагональ: $\\sqrt{4^2 + 7^2} = \\sqrt{65}$. Описанная окружность трапеции — это описанная окружность треугольника со сторонами $10$, $5$, $\\sqrt{65}$ и площадью $\\dfrac12 \\cdot 10 \\cdot 4 = 20$: $R = \\dfrac{10 \\cdot 5 \\cdot \\sqrt{65}}{4 \\cdot 20} = \\dfrac{5\\sqrt{65}}{8}$.

**B3.** $l = 10$; в осевом сечении вписанная окружность имеет $\\rho = \\dfrac{rh}{r + l} = \\dfrac{48}{16} = 3$. $V_{\\text{шара}} = 36\\pi$, $V_{\\text{кон}} = \\dfrac13\\pi \\cdot 36 \\cdot 8 = 96\\pi$, отношение $\\dfrac{36}{96} = \\dfrac38$.

**B4.** При $A(0; 0; 0)$, $B(2; 0; 0)$, $D(0; 2; 0)$, $A_1(0; 0; 2)$ плоскость $A_1BD$: $x + y + z = 2$ с нормалью $\\{1; 1; 1\\}$; нормаль основания $\\{0; 0; 1\\}$; $\\cos\\varphi = \\dfrac{1}{\\sqrt3}$. Сечение — равносторонний треугольник со стороной $2\\sqrt2$: $S = \\dfrac{\\sqrt3}{4} \\cdot 8 = 2\\sqrt3$. Проверка: проекция $ABD$ имеет площадь $2$, и $2 = 2\\sqrt3 \\cdot \\dfrac{1}{\\sqrt3}$.

**C1.** Поместим $A(0; 0; 0)$, $B(3; 0; 0)$, $D(0; 3; 0)$, $A_1(0; 0; 3)$. Направления: $\\overrightarrow{AB_1} = \\{3; 0; 3\\}$, $\\overrightarrow{BC_1} = \\{0; 3; 3\\}$. Угол: $\\cos\\theta = \\dfrac{0 + 0 + 9}{\\sqrt{18}\\sqrt{18}} = \\dfrac12$, $\\theta = 60°$. Расстояние: плоскость через $BC_1$, параллельная $AB_1$, имеет нормаль, перпендикулярную обоим направлениям, $\\vec n = \\{1; 1; -1\\}$, и проходит через $B$: $x + y - z = 3$. Расстояние от $A$: $\\dfrac{3}{\\sqrt3} = \\sqrt3$. (Общая формула: $\\dfrac{a}{\\sqrt3}$.)

**C2.** Теорема косинусов: $BC^2 = 36 + 81 - 2 \\cdot 54 \\cdot \\dfrac12 = 63$, $BC = 3\\sqrt7$. Биссектриса: $AD = \\dfrac{2 \\cdot 6 \\cdot 9 \\cos 30°}{6 + 9} = \\dfrac{108 \\cdot \\sqrt3 / 2}{15} = \\dfrac{18\\sqrt3}{5}$. (Проверка по $AD^2 = bc - BD \\cdot DC$: $BD = \\dfrac{2}{5} \\cdot 3\\sqrt7$, $DC = \\dfrac35 \\cdot 3\\sqrt7$, $BD \\cdot DC = \\dfrac{378}{25}$, $AD^2 = 54 - \\dfrac{378}{25} = \\dfrac{972}{25}$, $AD = \\dfrac{18\\sqrt3}{5}$.) Радиус описанной окружности: $R = \\dfrac{BC}{2\\sin 60°} = \\dfrac{3\\sqrt7}{\\sqrt3} = \\sqrt{21}$.

## Критерии и типичные ошибки

- Часть A: $1$ балл за верный ответ. Часть B: $1$ балл за верный метод с арифметической ошибкой, $2$ за полное решение. Часть C: $3$ балла за полное решение, $2$, если одна из двух частей отсутствует, $1$ за верное начало.
- $17$–$20$ баллов: отлично; $13$–$16$: хорошо; $9$–$12$: зачёт; ниже $9$: повторите уроки повторения.
- Типичные ошибки: $\\dfrac12$ вместо $\\dfrac13$ в объёме пирамиды; путаница апофемы с боковым ребром; забытый модуль в формуле расстояния; тупой двугранный угол вместо угла между плоскостями; забывают, что описанная окружность трапеции — это описанная окружность любых трёх её вершин.

### Упражнения

Вторая короткая работа для самопроверки.

1. Найдите площадь треугольника со сторонами $5$, $5$, $8$.
2. Найдите объём правильного тетраэдра с ребром $2$.
3. Конус имеет $r = 3$ и $l = 5$. Найдите его объём.
4. Точка удалена от центра окружности радиуса $8$ на $10$. Найдите отрезок касательной.
5. Найдите расстояние между плоскостями $x + 2y + 2z = 1$ и $x + 2y + 2z = 7$.
6. Ромб имеет диагонали $10$ и $24$. Найдите его сторону и площадь.
7. Шар вписан в куб с ребром $4$. Найдите его объём.
8. Найдите тангенс угла между диагональю куба и его основанием.

### Ответы

1. $h = 3$, $S = 12$. 2. $\\dfrac{8\\sqrt2}{12} = \\dfrac{2\\sqrt2}{3}$. 3. $h = 4$, $V = 12\\pi$. 4. $6$. 5. $\\dfrac{6}{3} = 2$. 6. $13$; $120$. 7. $R = 2$, $V = \\dfrac{32}{3}\\pi$. 8. $\\dfrac{a}{a\\sqrt2} = \\dfrac{1}{\\sqrt2}$.`,
      },
      [
        q(t("The area of the triangle with sides 13, 14, 15 is…", "13, 14, 15 կողմերով եռանկյան մակերեսը…", "Площадь треугольника со сторонами 13, 14, 15 равна…"), [t("84", "84", "84"), t("90", "90", "90"), t("78", "78", "78")], 0),
        q(t("The distance from (1; 2; 3) to the plane 2x − 2y + z = 4 is…", "(1; 2; 3) կետից 2x − 2y + z = 4 հարթություն հեռավորությունը…", "Расстояние от точки (1; 2; 3) до плоскости 2x − 2y + z = 4 равно…"), [t("0", "0", "0"), t("1", "1", "1"), t("3", "3", "3")], 1),
        q(t("A sphere is inscribed in a cone with r = 6, h = 8. Its radius is…", "Սֆերան ներգծված է r = 6, h = 8 կոնում։ Նրա շառավիղը…", "Сфера вписана в конус с r = 6, h = 8. Её радиус…"), [t("2", "2", "2"), t("3", "3", "3"), t("4", "4", "4")], 1),
        q(t("The distance between AB₁ and BC₁ in a cube with edge 3 is…", "3 կողով խորանարդում AB₁-ի և BC₁-ի հեռավորությունը…", "Расстояние между AB₁ и BC₁ в кубе с ребром 3 равно…"), [t("√3", "√3", "√3"), t("3", "3", "3"), t("3√2/2", "3√2/2", "3√2/2")], 0),
        q(t("In the triangle with AB = 6, AC = 9, ∠A = 60°, BC equals…", "AB = 6, AC = 9, ∠A = 60° եռանկյունում BC-ն հավասար է…", "В треугольнике с AB = 6, AC = 9, ∠A = 60° сторона BC равна…"), [t("3√7", "3√7", "3√7"), t("√117", "√117", "√117"), t("7", "7", "7")], 0),
        q(t("In a mock exam, the best order of work is…", "Փորձնական քննությունում աշխատանքի լավագույն հերթականությունը…", "На пробном экзамене лучший порядок работы…"), [t("hardest problems first", "նախ ամենադժվար խնդիրները", "сначала самые трудные задачи"), t("short tasks first, then full solutions, then multi-step problems", "նախ կարճ առաջադրանքները, ապա լրիվ լուծումները, ապա բազմաքայլ խնդիրները", "сначала короткие задания, затем полные решения, затем многошаговые задачи"), t("in random order", "պատահական հերթականությամբ", "в случайном порядке")], 1),
      ],
    ),
  ],
};
