import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Combinations of solids", "Մարմինների համակցություններ", "Комбинации тел"),
  summary: t("Spheres inscribed in and circumscribed about polyhedra, cylinders and cones; prisms in cylinders.", "Բազմանիստների, գլանների և կոնների ներգծյալ և արտագծյալ սֆերաներ, պրիզմաներ գլանների մեջ։", "Сферы, вписанные в многогранники, цилиндры и конусы и описанные около них; призмы в цилиндрах."),
  lessons: [
    lesson(
      "sphere-polyhedron",
      ["Sphere inscribed in and circumscribed about a polyhedron", "Բազմանիստի ներգծյալ և արտագծյալ սֆերա", "Сфера, вписанная в многогранник и описанная около него"],
      {
        en: ["Define inscribed and circumscribed spheres and state when they exist for pyramids and prisms", "Locate the centre of a circumscribed sphere on the perpendicular through the circumcentre of the base and compute R = (h² + ρ²)/(2h) for a regular pyramid", "Compute the radius of an inscribed sphere from the axial section or from r = 3V/S and solve problems on cubes, tetrahedra, pyramids and prisms"],
        hy: ["Սահմանել ներգծյալ և արտագծյալ սֆերաները և ձևակերպել, թե երբ են դրանք գոյություն ունենում բուրգերի և պրիզմաների համար", "Արտագծյալ սֆերայի կենտրոնը գտնել հիմքի արտագծյալ շրջանագծի կենտրոնով անցնող ուղղահայացի վրա և կանոնավոր բուրգի համար հաշվել R = (h² + ρ²)/(2h)", "Ներգծյալ սֆերայի շառավիղը հաշվել առանցքային հատույթից կամ r = 3V/S բանաձևով և լուծել խորանարդների, քառանիստների, բուրգերի և պրիզմաների խնդիրներ"],
        ru: ["Определять вписанную и описанную сферы и формулировать, когда они существуют для пирамид и призм", "Находить центр описанной сферы на перпендикуляре через центр описанной окружности основания и вычислять R = (h² + ρ²)/(2h) для правильной пирамиды", "Вычислять радиус вписанной сферы по осевому сечению или по формуле r = 3V/S и решать задачи о кубах, тетраэдрах, пирамидах и призмах"],
      },
      {
        en: `## Definitions

A sphere is **circumscribed** about a polyhedron if all vertices of the polyhedron lie on it; the polyhedron is then *inscribed* in the sphere. A sphere is **inscribed** in a polyhedron if it touches every face; the polyhedron is *circumscribed* about the sphere.

The centre of a circumscribed sphere is equidistant from all vertices; the centre of an inscribed sphere is equidistant from all face planes and lies inside the polyhedron.

## Circumscribed sphere

**Pyramid.** A sphere can be circumscribed about a pyramid **if and only if a circle can be circumscribed about its base**. The centre $O$ lies on the perpendicular to the base through the circumcentre $O_1$ of the base (every point of this line is equidistant from the base vertices) and on the perpendicular bisector plane of a lateral edge.

For a **regular pyramid** with height $h$, base circumradius $\\rho$ and lateral edge $b$, the axial section through a lateral edge gives a right triangle, and
$$R = \\dfrac{b^2}{2h} = \\dfrac{h^2 + \\rho^2}{2h}.$$
(The circumscribed circle of the isosceles triangle with sides $b$, $b$ and height $h$ has radius $\\dfrac{b^2}{2h}$.)

**Prism.** A sphere can be circumscribed about a prism **if and only if the prism is right and its base is cyclic**. The centre is the midpoint of the segment joining the circumcentres of the two bases, and
$$R^2 = \\rho^2 + \\dfrac{h^2}{4}.$$
In particular, for a rectangular parallelepiped $R = \\dfrac d2$, and for a cube $R = \\dfrac{a\\sqrt3}{2}$.

## Inscribed sphere

**Pyramid.** A sphere can be inscribed in every regular pyramid; its centre lies on the height, and in the section through the apex and two opposite apothems the sphere appears as the inscribed circle of an isosceles triangle with base $2r_1$ ($r_1$ is the inradius of the base) and legs equal to the apothem $l$:
$$r = \\dfrac{r_1 h}{r_1 + l}.$$
A universal formula for any polyhedron with an inscribed sphere: split it into pyramids with apex at the centre, each of height $r$, so $V = \\dfrac13 r S$ and
$$r = \\dfrac{3V}{S},$$
where $S$ is the total surface. Every tetrahedron has an inscribed sphere.

**Prism.** A sphere can be inscribed in a prism only if the prism is right, its base has an inscribed circle of radius $r_1$, and the height is $h = 2r_1$; then $r = r_1$.

**Example 1.** Cube with edge $a$: $R = \\dfrac{a\\sqrt3}{2}$ (half the diagonal), $r = \\dfrac a2$ (half the edge). For $a = 2$: $R = \\sqrt3$, $r = 1$.

**Example 2.** Regular tetrahedron with edge $a$. The height is $h = a\\sqrt{\\dfrac23}$ and $\\rho = \\dfrac{a}{\\sqrt3}$, so $R = \\dfrac{a^2}{2h} = \\dfrac{a\\sqrt6}{4}$. The centre of the inscribed sphere is the same point (by symmetry), and it divides the height in the ratio $3 : 1$ from the vertex, so $r = \\dfrac{h}{4} = \\dfrac{a\\sqrt6}{12}$ and $R = 3r$. Check with $r = \\dfrac{3V}{S}$: $V = \\dfrac{a^3\\sqrt2}{12}$, $S = a^2\\sqrt3$, $r = \\dfrac{a\\sqrt2}{4\\sqrt3} = \\dfrac{a\\sqrt6}{12}$.

**Example 3.** Regular quadrilateral pyramid with base side $6$ and height $4$. Apothem $l = \\sqrt{16 + 9} = 5$, lateral edge $b = \\sqrt{16 + 18} = \\sqrt{34}$. Circumscribed: $R = \\dfrac{34}{8} = \\dfrac{17}{4}$; the centre is $\\dfrac{17}{4} - 4 = \\dfrac14$ below the base, outside the pyramid. Inscribed: $r_1 = 3$, $r = \\dfrac{3 \\cdot 4}{3 + 5} = \\dfrac32$. Check: $V = 48$, $S = 36 + 4 \\cdot 15 = 96$, $\\dfrac{3V}{S} = \\dfrac32$.

**Example 4.** Regular triangular pyramid with base side $6\\sqrt3$ and height $4$. Base: $\\rho = 6$, $r_1 = 3$. Lateral edge $b = \\sqrt{16 + 36} = \\sqrt{52}$, $R = \\dfrac{52}{8} = \\dfrac{13}{2}$. Apothem $l = \\sqrt{16 + 9} = 5$, $r = \\dfrac{3 \\cdot 4}{3 + 5} = \\dfrac32$.

**Example 5.** Rectangular parallelepiped $3 \\times 4 \\times 12$: $d = 13$, $R = \\dfrac{13}{2}$. An inscribed sphere does not exist (the three dimensions are not equal).

**Example 6.** Regular triangular prism with base side $2\\sqrt3$ and height $2$. The base has $\\rho = 2$ and $r_1 = 1$. Circumscribed: $R^2 = 4 + 1 = 5$, $R = \\sqrt5$. Inscribed: $h = 2 = 2r_1$, so the sphere exists and $r = 1$.

**Example 7.** When can a sphere be inscribed in a regular hexagonal prism with base side $a$? The base inradius is $\\dfrac{a\\sqrt3}{2}$, so the height must be $a\\sqrt3$; then $r = \\dfrac{a\\sqrt3}{2}$ and the circumscribed sphere has $R^2 = a^2 + \\dfrac{3a^2}{4}$, $R = \\dfrac{a\\sqrt7}{2}$.

**Example 8.** The pyramid $DABC$ has $DA$, $DB$, $DC$ mutually perpendicular and equal to $1$, $2$, $2$. Complete it to a rectangular parallelepiped: $R = \\dfrac{\\sqrt{1 + 4 + 4}}{2} = \\dfrac32$. For the inscribed sphere, $V = \\dfrac16 \\cdot 1 \\cdot 2 \\cdot 2 = \\dfrac23$; the faces at $D$ have areas $1$, $1$, $2$, and $ABC$ has sides $\\sqrt5$, $\\sqrt5$, $2\\sqrt2$ with area $\\sqrt2 \\cdot \\sqrt3 = \\sqrt6$; $r = \\dfrac{2}{4 + \\sqrt6}$.

### Exercises

1. Find $R$ and $r$ for a cube with edge $4$.
2. Find $R$ and $r$ for a regular tetrahedron with edge $6$.
3. Find the radius of the sphere circumscribed about a rectangular parallelepiped $2 \\times 3 \\times 6$.
4. A regular quadrilateral pyramid has base side $8$ and height $3$. Find $R$ and $r$.
5. A regular triangular pyramid has base side $2\\sqrt3$ and height $\\sqrt3$. Find $R$ and $r$.
6. The base of a right prism is a right triangle with legs $6$ and $8$; the height is $10$. Find $R$. Can a sphere be inscribed in this prism?
7. A regular hexagonal prism has base side $2$. For which height can a sphere be inscribed? Find $r$ and, for that prism, $R$.
8. The radius of the sphere circumscribed about a regular quadrilateral pyramid is $5$ and the height is $8$. Find the base side.

### Answers

1. $R = 2\\sqrt3$, $r = 2$. 2. $R = \\dfrac{3\\sqrt6}{2}$, $r = \\dfrac{\\sqrt6}{2}$. 3. $R = \\dfrac72$. 4. $l = 5$, $b = \\sqrt{41}$, $R = \\dfrac{41}{6}$; $r = \\dfrac{4 \\cdot 3}{4 + 5} = \\dfrac43$. 5. $\\rho = 2$, $r_1 = 1$, $l = 2$, $b = \\sqrt7$: $R = \\dfrac{7}{2\\sqrt3} = \\dfrac{7\\sqrt3}{6}$, $r = \\dfrac{\\sqrt3}{3}$. 6. $\\rho = 5$, $R = \\sqrt{25 + 25} = 5\\sqrt2$; no, the base inradius is $2$ and $h \\ne 4$. 7. $h = 2\\sqrt3$, $r = \\sqrt3$, $R = \\sqrt7$. 8. $b^2 = 2Rh = 80$, $\\rho^2 = 80 - 64 = 16$, $\\rho = 4$, side $4\\sqrt2$.`,
        hy: `## Սահմանումներ

Սֆերան բազմանիստի **արտագծյալ** է, եթե բազմանիստի բոլոր գագաթները նրա վրա են․ բազմանիստն այդ դեպքում սֆերայում *ներգծյալ* է։ Սֆերան բազմանիստի **ներգծյալ** է, եթե շոշափում է ամեն նիստ․ բազմանիստը սֆերայի *արտագծյալ* է։

Արտագծյալ սֆերայի կենտրոնը հավասարահեռ է բոլոր գագաթներից․ ներգծյալ սֆերայի կենտրոնը հավասարահեռ է բոլոր նիստերի հարթություններից և գտնվում է բազմանիստի ներսում։

## Արտագծյալ սֆերա

**Բուրգ։** Բուրգի շուրջ սֆերա կարելի է արտագծել **այն և միայն այն դեպքում, երբ հիմքի շուրջ կարելի է շրջանագիծ արտագծել**։ $O$ կենտրոնը գտնվում է հիմքի արտագծյալ շրջանագծի $O_1$ կենտրոնով հիմքին տարված ուղղահայացի վրա (այդ ուղղի ամեն կետ հավասարահեռ է հիմքի գագաթներից) և կողմնային կողի միջնուղղահայաց հարթության վրա։

$h$ բարձրությամբ, հիմքի $\\rho$ արտագծյալ շառավղով և $b$ կողմնային կողով **կանոնավոր բուրգի** համար կողմնային կողով անցնող առանցքային հատույթը տալիս է ուղղանկյուն եռանկյուն, և
$$R = \\dfrac{b^2}{2h} = \\dfrac{h^2 + \\rho^2}{2h}$$
($b$, $b$ կողմերով և $h$ բարձրությամբ հավասարասրուն եռանկյան արտագծյալ շրջանագծի շառավիղը $\\dfrac{b^2}{2h}$ է։)

**Պրիզմա։** Պրիզմայի շուրջ սֆերա կարելի է արտագծել **այն և միայն այն դեպքում, երբ պրիզման ուղիղ է, իսկ հիմքը՝ շրջանագծում ներգծյալ**։ Կենտրոնն երկու հիմքերի արտագծյալ շրջանագծերի կենտրոնները միացնող հատվածի միջնակետն է, և
$$R^2 = \\rho^2 + \\dfrac{h^2}{4}$$
Մասնավորապես ուղղանկյուն զուգահեռանիստի համար $R = \\dfrac d2$, խորանարդի համար՝ $R = \\dfrac{a\\sqrt3}{2}$։

## Ներգծյալ սֆերա

**Բուրգ։** Ամեն կանոնավոր բուրգում կարելի է սֆերա ներգծել․ նրա կենտրոնը բարձրության վրա է, իսկ գագաթով և երկու հանդիպակաց ապոթեմներով անցնող հատույթում սֆերան երևում է որպես $2r_1$ հիմքով ($r_1$-ը հիմքի ներգծյալ շրջանագծի շառավիղն է) և $l$ ապոթեմին հավասար սրունքներով հավասարասրուն եռանկյան ներգծյալ շրջանագիծ․
$$r = \\dfrac{r_1 h}{r_1 + l}$$
Ներգծյալ սֆերա ունեցող ցանկացած բազմանիստի համար ընդհանուր բանաձև․ տրոհենք այն կենտրոնում գագաթով բուրգերի, որոնցից ամեն մեկի բարձրությունը $r$ է, ուստի $V = \\dfrac13 r S$ և
$$r = \\dfrac{3V}{S}$$
որտեղ $S$-ը լրիվ մակերևույթն է։ Ամեն քառանիստ ներգծյալ սֆերա ունի։

**Պրիզմա։** Պրիզմայում սֆերա կարելի է ներգծել միայն այն դեպքում, երբ պրիզման ուղիղ է, հիմքն ունի $r_1$ շառավղով ներգծյալ շրջանագիծ, իսկ բարձրությունը $h = 2r_1$ է․ այդ դեպքում $r = r_1$։

**Օրինակ 1։** $a$ կողով խորանարդ․ $R = \\dfrac{a\\sqrt3}{2}$ (անկյունագծի կեսը), $r = \\dfrac a2$ (կողի կեսը)։ $a = 2$ դեպքում՝ $R = \\sqrt3$, $r = 1$։

**Օրինակ 2։** $a$ կողով կանոնավոր քառանիստ։ Բարձրությունը $h = a\\sqrt{\\dfrac23}$ է, $\\rho = \\dfrac{a}{\\sqrt3}$, ուստի $R = \\dfrac{a^2}{2h} = \\dfrac{a\\sqrt6}{4}$։ Ներգծյալ սֆերայի կենտրոնը նույն կետն է (համաչափությամբ), և այն բարձրությունը գագաթից բաժանում է $3 : 1$ հարաբերությամբ, ուստի $r = \\dfrac{h}{4} = \\dfrac{a\\sqrt6}{12}$ և $R = 3r$։ Ստուգում $r = \\dfrac{3V}{S}$-ով․ $V = \\dfrac{a^3\\sqrt2}{12}$, $S = a^2\\sqrt3$, $r = \\dfrac{a\\sqrt2}{4\\sqrt3} = \\dfrac{a\\sqrt6}{12}$։

**Օրինակ 3։** Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $4$։ Ապոթեմը $l = \\sqrt{16 + 9} = 5$, կողմնային կողը՝ $b = \\sqrt{16 + 18} = \\sqrt{34}$։ Արտագծյալ․ $R = \\dfrac{34}{8} = \\dfrac{17}{4}$, կենտրոնը հիմքից $\\dfrac{17}{4} - 4 = \\dfrac14$ ներքև է՝ բուրգից դուրս։ Ներգծյալ․ $r_1 = 3$, $r = \\dfrac{3 \\cdot 4}{3 + 5} = \\dfrac32$։ Ստուգում․ $V = 48$, $S = 36 + 4 \\cdot 15 = 96$, $\\dfrac{3V}{S} = \\dfrac32$։

**Օրինակ 4։** Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $6\\sqrt3$ է, բարձրությունը՝ $4$։ Հիմք․ $\\rho = 6$, $r_1 = 3$։ Կողմնային կողը $b = \\sqrt{16 + 36} = \\sqrt{52}$, $R = \\dfrac{52}{8} = \\dfrac{13}{2}$։ Ապոթեմը $l = \\sqrt{16 + 9} = 5$, $r = \\dfrac{3 \\cdot 4}{3 + 5} = \\dfrac32$։

**Օրինակ 5։** $3 \\times 4 \\times 12$ ուղղանկյուն զուգահեռանիստ․ $d = 13$, $R = \\dfrac{13}{2}$։ Ներգծյալ սֆերա գոյություն չունի (երեք չափումները հավասար չեն)։

**Օրինակ 6։** Կանոնավոր եռանկյուն պրիզմայի հիմքի կողմը $2\\sqrt3$ է, բարձրությունը՝ $2$։ Հիմքի $\\rho = 2$ և $r_1 = 1$։ Արտագծյալ․ $R^2 = 4 + 1 = 5$, $R = \\sqrt5$։ Ներգծյալ․ $h = 2 = 2r_1$, ուստի սֆերան գոյություն ունի և $r = 1$։

**Օրինակ 7։** Ե՞րբ կարելի է սֆերա ներգծել $a$ հիմքի կողմով կանոնավոր վեցանկյուն պրիզմայում։ Հիմքի ներգծյալ շառավիղը $\\dfrac{a\\sqrt3}{2}$ է, ուստի բարձրությունը պետք է լինի $a\\sqrt3$․ այդ դեպքում $r = \\dfrac{a\\sqrt3}{2}$, իսկ արտագծյալ սֆերայի $R^2 = a^2 + \\dfrac{3a^2}{4}$, $R = \\dfrac{a\\sqrt7}{2}$։

**Օրինակ 8։** $DABC$ բուրգում $DA$, $DB$, $DC$ կողերը փոխուղղահայաց են և հավասար են $1$, $2$, $2$։ Լրացնենք այն ուղղանկյուն զուգահեռանիստի․ $R = \\dfrac{\\sqrt{1 + 4 + 4}}{2} = \\dfrac32$։ Ներգծյալ սֆերայի համար $V = \\dfrac16 \\cdot 1 \\cdot 2 \\cdot 2 = \\dfrac23$, $D$-ի մոտ նիստերի մակերեսներն են $1$, $1$, $2$, իսկ $ABC$-ի կողմերն են $\\sqrt5$, $\\sqrt5$, $2\\sqrt2$՝ $\\sqrt2 \\cdot \\sqrt3 = \\sqrt6$ մակերեսով․ $r = \\dfrac{2}{4 + \\sqrt6}$։

### Վարժություններ

1. Գտեք $4$ կողով խորանարդի $R$-ն ու $r$-ը։
2. Գտեք $6$ կողով կանոնավոր քառանիստի $R$-ն ու $r$-ը։
3. Գտեք $2 \\times 3 \\times 6$ ուղղանկյուն զուգահեռանիստի արտագծյալ սֆերայի շառավիղը։
4. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $8$ է, բարձրությունը՝ $3$։ Գտեք $R$-ն ու $r$-ը։
5. Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $2\\sqrt3$ է, բարձրությունը՝ $\\sqrt3$։ Գտեք $R$-ն ու $r$-ը։
6. Ուղիղ պրիզմայի հիմքը $6$ և $8$ էջերով ուղղանկյուն եռանկյուն է, բարձրությունը՝ $10$։ Գտեք $R$-ը։ Կարելի՞ է այս պրիզմայում սֆերա ներգծել։
7. Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողմը $2$ է։ Ո՞ր բարձրության դեպքում կարելի է սֆերա ներգծել։ Գտեք $r$-ը և այդ պրիզմայի $R$-ը։
8. Կանոնավոր քառանկյուն բուրգի արտագծյալ սֆերայի շառավիղը $5$ է, բարձրությունը՝ $8$։ Գտեք հիմքի կողմը։

### Պատասխաններ

1. $R = 2\\sqrt3$, $r = 2$։ 2. $R = \\dfrac{3\\sqrt6}{2}$, $r = \\dfrac{\\sqrt6}{2}$։ 3. $R = \\dfrac72$։ 4. $l = 5$, $b = \\sqrt{41}$, $R = \\dfrac{41}{6}$, $r = \\dfrac{4 \\cdot 3}{4 + 5} = \\dfrac43$։ 5. $\\rho = 2$, $r_1 = 1$, $l = 2$, $b = \\sqrt7$․ $R = \\dfrac{7}{2\\sqrt3} = \\dfrac{7\\sqrt3}{6}$, $r = \\dfrac{\\sqrt3}{3}$։ 6. $\\rho = 5$, $R = \\sqrt{25 + 25} = 5\\sqrt2$, ոչ, հիմքի ներգծյալ շառավիղը $2$ է և $h \\ne 4$։ 7. $h = 2\\sqrt3$, $r = \\sqrt3$, $R = \\sqrt7$։ 8. $b^2 = 2Rh = 80$, $\\rho^2 = 80 - 64 = 16$, $\\rho = 4$, կողմը $4\\sqrt2$։`,
        ru: `## Определения

Сфера **описана** около многогранника, если все вершины многогранника лежат на ней; многогранник при этом *вписан* в сферу. Сфера **вписана** в многогранник, если она касается каждой грани; многогранник *описан* около сферы.

Центр описанной сферы равноудалён от всех вершин; центр вписанной сферы равноудалён от плоскостей всех граней и лежит внутри многогранника.

## Описанная сфера

**Пирамида.** Около пирамиды можно описать сферу **тогда и только тогда, когда около её основания можно описать окружность**. Центр $O$ лежит на перпендикуляре к основанию, проведённом через центр $O_1$ описанной окружности основания (каждая точка этой прямой равноудалена от вершин основания), и в плоскости серединного перпендикуляра к боковому ребру.

Для **правильной пирамиды** с высотой $h$, радиусом описанной окружности основания $\\rho$ и боковым ребром $b$ осевое сечение через боковое ребро даёт прямоугольный треугольник, и
$$R = \\dfrac{b^2}{2h} = \\dfrac{h^2 + \\rho^2}{2h}.$$
(Описанная окружность равнобедренного треугольника со сторонами $b$, $b$ и высотой $h$ имеет радиус $\\dfrac{b^2}{2h}$.)

**Призма.** Около призмы можно описать сферу **тогда и только тогда, когда призма прямая и её основание вписано в окружность**. Центр — середина отрезка, соединяющего центры описанных окружностей оснований, и
$$R^2 = \\rho^2 + \\dfrac{h^2}{4}.$$
В частности, для прямоугольного параллелепипеда $R = \\dfrac d2$, для куба $R = \\dfrac{a\\sqrt3}{2}$.

## Вписанная сфера

**Пирамида.** В любую правильную пирамиду можно вписать сферу; её центр лежит на высоте, а в сечении через вершину и две противоположные апофемы сфера видна как вписанная окружность равнобедренного треугольника с основанием $2r_1$ ($r_1$ — радиус вписанной окружности основания) и боковыми сторонами, равными апофеме $l$:
$$r = \\dfrac{r_1 h}{r_1 + l}.$$
Универсальная формула для любого многогранника с вписанной сферой: разобьём его на пирамиды с вершиной в центре, каждая высоты $r$, поэтому $V = \\dfrac13 r S$ и
$$r = \\dfrac{3V}{S},$$
где $S$ — полная поверхность. В любой тетраэдр можно вписать сферу.

**Призма.** В призму можно вписать сферу, только если призма прямая, её основание имеет вписанную окружность радиуса $r_1$, а высота $h = 2r_1$; тогда $r = r_1$.

**Пример 1.** Куб с ребром $a$: $R = \\dfrac{a\\sqrt3}{2}$ (половина диагонали), $r = \\dfrac a2$ (половина ребра). При $a = 2$: $R = \\sqrt3$, $r = 1$.

**Пример 2.** Правильный тетраэдр с ребром $a$. Высота $h = a\\sqrt{\\dfrac23}$, $\\rho = \\dfrac{a}{\\sqrt3}$, поэтому $R = \\dfrac{a^2}{2h} = \\dfrac{a\\sqrt6}{4}$. Центр вписанной сферы — та же точка (по симметрии), и она делит высоту в отношении $3 : 1$, считая от вершины, так что $r = \\dfrac{h}{4} = \\dfrac{a\\sqrt6}{12}$ и $R = 3r$. Проверка по $r = \\dfrac{3V}{S}$: $V = \\dfrac{a^3\\sqrt2}{12}$, $S = a^2\\sqrt3$, $r = \\dfrac{a\\sqrt2}{4\\sqrt3} = \\dfrac{a\\sqrt6}{12}$.

**Пример 3.** Правильная четырёхугольная пирамида со стороной основания $6$ и высотой $4$. Апофема $l = \\sqrt{16 + 9} = 5$, боковое ребро $b = \\sqrt{16 + 18} = \\sqrt{34}$. Описанная: $R = \\dfrac{34}{8} = \\dfrac{17}{4}$; центр на $\\dfrac{17}{4} - 4 = \\dfrac14$ ниже основания, вне пирамиды. Вписанная: $r_1 = 3$, $r = \\dfrac{3 \\cdot 4}{3 + 5} = \\dfrac32$. Проверка: $V = 48$, $S = 36 + 4 \\cdot 15 = 96$, $\\dfrac{3V}{S} = \\dfrac32$.

**Пример 4.** Правильная треугольная пирамида со стороной основания $6\\sqrt3$ и высотой $4$. Основание: $\\rho = 6$, $r_1 = 3$. Боковое ребро $b = \\sqrt{16 + 36} = \\sqrt{52}$, $R = \\dfrac{52}{8} = \\dfrac{13}{2}$. Апофема $l = \\sqrt{16 + 9} = 5$, $r = \\dfrac{3 \\cdot 4}{3 + 5} = \\dfrac32$.

**Пример 5.** Прямоугольный параллелепипед $3 \\times 4 \\times 12$: $d = 13$, $R = \\dfrac{13}{2}$. Вписанной сферы нет (три измерения не равны).

**Пример 6.** Правильная треугольная призма со стороной основания $2\\sqrt3$ и высотой $2$. У основания $\\rho = 2$ и $r_1 = 1$. Описанная: $R^2 = 4 + 1 = 5$, $R = \\sqrt5$. Вписанная: $h = 2 = 2r_1$, поэтому сфера существует и $r = 1$.

**Пример 7.** Когда в правильную шестиугольную призму со стороной основания $a$ можно вписать сферу? Радиус вписанной окружности основания $\\dfrac{a\\sqrt3}{2}$, поэтому высота должна быть $a\\sqrt3$; тогда $r = \\dfrac{a\\sqrt3}{2}$, а описанная сфера имеет $R^2 = a^2 + \\dfrac{3a^2}{4}$, $R = \\dfrac{a\\sqrt7}{2}$.

**Пример 8.** В пирамиде $DABC$ рёбра $DA$, $DB$, $DC$ взаимно перпендикулярны и равны $1$, $2$, $2$. Достроим её до прямоугольного параллелепипеда: $R = \\dfrac{\\sqrt{1 + 4 + 4}}{2} = \\dfrac32$. Для вписанной сферы $V = \\dfrac16 \\cdot 1 \\cdot 2 \\cdot 2 = \\dfrac23$; грани при $D$ имеют площади $1$, $1$, $2$, а $ABC$ имеет стороны $\\sqrt5$, $\\sqrt5$, $2\\sqrt2$ и площадь $\\sqrt2 \\cdot \\sqrt3 = \\sqrt6$; $r = \\dfrac{2}{4 + \\sqrt6}$.

### Упражнения

1. Найдите $R$ и $r$ для куба с ребром $4$.
2. Найдите $R$ и $r$ для правильного тетраэдра с ребром $6$.
3. Найдите радиус сферы, описанной около прямоугольного параллелепипеда $2 \\times 3 \\times 6$.
4. Правильная четырёхугольная пирамида имеет сторону основания $8$ и высоту $3$. Найдите $R$ и $r$.
5. Правильная треугольная пирамида имеет сторону основания $2\\sqrt3$ и высоту $\\sqrt3$. Найдите $R$ и $r$.
6. Основание прямой призмы — прямоугольный треугольник с катетами $6$ и $8$; высота $10$. Найдите $R$. Можно ли вписать в эту призму сферу?
7. Правильная шестиугольная призма имеет сторону основания $2$. При какой высоте в неё можно вписать сферу? Найдите $r$ и для этой призмы $R$.
8. Радиус сферы, описанной около правильной четырёхугольной пирамиды, равен $5$, высота $8$. Найдите сторону основания.

### Ответы

1. $R = 2\\sqrt3$, $r = 2$. 2. $R = \\dfrac{3\\sqrt6}{2}$, $r = \\dfrac{\\sqrt6}{2}$. 3. $R = \\dfrac72$. 4. $l = 5$, $b = \\sqrt{41}$, $R = \\dfrac{41}{6}$; $r = \\dfrac{4 \\cdot 3}{4 + 5} = \\dfrac43$. 5. $\\rho = 2$, $r_1 = 1$, $l = 2$, $b = \\sqrt7$: $R = \\dfrac{7}{2\\sqrt3} = \\dfrac{7\\sqrt3}{6}$, $r = \\dfrac{\\sqrt3}{3}$. 6. $\\rho = 5$, $R = \\sqrt{25 + 25} = 5\\sqrt2$; нет, радиус вписанной окружности основания $2$ и $h \\ne 4$. 7. $h = 2\\sqrt3$, $r = \\sqrt3$, $R = \\sqrt7$. 8. $b^2 = 2Rh = 80$, $\\rho^2 = 80 - 64 = 16$, $\\rho = 4$, сторона $4\\sqrt2$.`,
      },
      [
        q(t("A sphere can be circumscribed about a pyramid if and only if…", "Բուրգի շուրջ սֆերա կարելի է արտագծել այն և միայն այն դեպքում, երբ…", "Около пирамиды можно описать сферу тогда и только тогда, когда…"), [t("the pyramid is regular", "բուրգը կանոնավոր է", "пирамида правильная"), t("a circle can be circumscribed about its base", "հիմքի շուրջ կարելի է շրջանագիծ արտագծել", "около основания можно описать окружность"), t("all lateral faces are equal", "բոլոր կողմնային նիստերը հավասար են", "все боковые грани равны")], 1),
        q(t("The radius of the sphere circumscribed about a cube with edge a is…", "a կողով խորանարդի արտագծյալ սֆերայի շառավիղը…", "Радиус сферы, описанной около куба с ребром a, равен…"), [t("a/2", "a/2", "a/2"), t("a√2/2", "a√2/2", "a√2/2"), t("a√3/2", "a√3/2", "a√3/2")], 2),
        q(t("For a polyhedron with an inscribed sphere, r equals…", "Ներգծյալ սֆերա ունեցող բազմանիստի համար r-ը հավասար է…", "Для многогранника с вписанной сферой r равен…"), [t("3V/S", "3V/S", "3V/S"), t("V/S", "V/S", "V/S"), t("S/(3V)", "S/(3V)", "S/(3V)")], 0),
        q(t("A sphere can be inscribed in a right prism only if the height equals…", "Ուղիղ պրիզմայում սֆերա կարելի է ներգծել միայն այն դեպքում, երբ բարձրությունը հավասար է…", "В прямую призму можно вписать сферу, только если высота равна…"), [t("the base inradius", "հիմքի ներգծյալ շառավղին", "радиусу вписанной окружности основания"), t("twice the base inradius", "հիմքի ներգծյալ շառավղի կրկնակիին", "удвоенному радиусу вписанной окружности основания"), t("the base circumradius", "հիմքի արտագծյալ շառավղին", "радиусу описанной окружности основания")], 1),
        q(t("A regular pyramid has height h and lateral edge b. The circumscribed sphere has radius…", "Կանոնավոր բուրգի բարձրությունը h է, կողմնային կողը՝ b է։ Արտագծյալ սֆերայի շառավիղը…", "Правильная пирамида имеет высоту h и боковое ребро b. Радиус описанной сферы…"), [t("b²/(2h)", "b²/(2h)", "b²/(2h)"), t("b/2", "b/2", "b/2"), t("h/2", "h/2", "h/2")], 0),
        q(t("In a regular tetrahedron the ratio R : r equals…", "Կանոնավոր քառանիստում R : r հարաբերությունը հավասար է…", "В правильном тетраэдре отношение R : r равно…"), [t("2", "2", "2"), t("3", "3", "3"), t("√3", "√3", "√3")], 1),
      ],
    ),
    lesson(
      "sphere-cylinder-cone",
      ["Sphere with cylinder and cone", "Սֆերա գլանի և կոնի հետ", "Сфера с цилиндром и конусом"],
      {
        en: ["Reduce every combination of a sphere with a cylinder, a cone or a truncated cone to its axial section: a circle with a rectangle, a triangle or a trapezoid", "Derive r = Rh/(R + l) for the sphere inscribed in a cone, R = l²/(2h) for the circumscribed sphere, and the condition l = R₁ + R₂ for a truncated cone", "Solve problems on cylinders and cones inscribed in a sphere and on a cylinder inscribed in a cone, including a maximum-volume problem"],
        hy: ["Սֆերայի և գլանի, կոնի կամ հատած կոնի ամեն համակցություն բերել առանցքային հատույթի․ շրջանագիծ՝ ուղղանկյան, եռանկյան կամ սեղանի հետ", "Արտածել կոնի ներգծյալ սֆերայի r = Rh/(R + l), արտագծյալ սֆերայի R = l²/(2h) բանաձևերը և հատած կոնի l = R₁ + R₂ պայմանը", "Լուծել սֆերայում ներգծյալ գլանների և կոնների և կոնում ներգծյալ գլանի խնդիրներ, այդ թվում առավելագույն ծավալի խնդիր"],
        ru: ["Сводить любую комбинацию сферы с цилиндром, конусом или усечённым конусом к осевому сечению: окружность с прямоугольником, треугольником или трапецией", "Выводить r = Rh/(R + l) для сферы, вписанной в конус, R = l²/(2h) для описанной сферы и условие l = R₁ + R₂ для усечённого конуса", "Решать задачи о цилиндрах и конусах, вписанных в сферу, и о цилиндре, вписанном в конус, включая задачу на наибольший объём"],
      },
      {
        en: `## The method: axial section

All these bodies are bodies of revolution with a common axis, so every combination is seen completely in the **axial section**: the sphere becomes a circle, the cylinder a rectangle, the cone an isosceles triangle, the truncated cone an isosceles trapezoid. Inscribed becomes inscribed and circumscribed becomes circumscribed. So each problem is a planimetry problem about a circle and a polygon.

## Sphere and cylinder

A sphere is **inscribed** in a cylinder (touches both bases and the lateral surface) only if the cylinder's height is $2r$ and its radius is $r$: the axial section is a square with an inscribed circle. Then $V_{\\text{ball}} : V_{\\text{cyl}} = 2 : 3$ and the surfaces are also in the ratio $2 : 3$.

A sphere is **circumscribed** about a cylinder with radius $r$ and height $h$ if both base circles lie on it; the centre is the midpoint of the axis and
$$R^2 = r^2 + \\dfrac{h^2}{4}.$$

## Sphere and cone

For a cone with radius $r$, height $h$ and generator $l$ the axial section is an isosceles triangle with base $2r$, legs $l$ and height $h$.

**Inscribed sphere:** the inscribed circle of this triangle, with radius $\\dfrac{S}{p}$:
$$\\rho = \\dfrac{rh}{r + l}.$$
**Circumscribed sphere:** the circumscribed circle, by $l^2 = 2Rh$ (the altitude theorem in the right triangle formed by the diameter):
$$R = \\dfrac{l^2}{2h} = \\dfrac{r^2 + h^2}{2h}.$$

**Truncated cone** with radii $R_1$, $R_2$, generator $l$ and height $h$. A sphere can be inscribed in it only if the trapezoid is tangential: $2R_1 + 2R_2 = 2l$, that is $l = R_1 + R_2$. Then $h^2 = l^2 - (R_1 - R_2)^2 = 4R_1R_2$, so $h = 2\\sqrt{R_1R_2}$ and the sphere's radius is $\\sqrt{R_1R_2}$. A sphere can always be circumscribed about a truncated cone; its centre on the axis is found from $R^2 = R_1^2 + x^2 = R_2^2 + (h - x)^2$.

**Example 1.** Cone with $r = 3$, $h = 4$, $l = 5$: inscribed sphere $\\rho = \\dfrac{12}{8} = \\dfrac32$, circumscribed sphere $R = \\dfrac{25}{8}$.

**Example 2.** Equilateral cone (axial section is an equilateral triangle with side $a$): $r = \\dfrac a2$, $h = \\dfrac{a\\sqrt3}{2}$. The inscribed and circumscribed circles of an equilateral triangle have radii $\\dfrac{h}{3}$ and $\\dfrac{2h}{3}$, so $\\rho = \\dfrac{a\\sqrt3}{6}$, $R = \\dfrac{a\\sqrt3}{3}$, $R = 2\\rho$.

**Example 3.** A cylinder with height $6$ is inscribed in a sphere of radius $5$: $r^2 = 25 - 9 = 16$, $r = 4$, $V = 96\\pi$.

**Example 4.** A cone with height $8$ is inscribed in a sphere of radius $5$. From $l^2 = 2Rh = 80$ and $r^2 = l^2 - h^2 = 16$: $r = 4$, $V = \\dfrac13\\pi \\cdot 16 \\cdot 8 = \\dfrac{128}{3}\\pi$.

**Example 5.** A sphere is inscribed in a truncated cone with radii $4$ and $1$. Then $l = 5$, $h = 2\\sqrt4 = 4$, the sphere has radius $2$. Check: $l^2 = 25 = 16 + 9 = h^2 + (4 - 1)^2$.

**Example 6.** A sphere of radius $3$ is inscribed in a cylinder; the cylinder has $r = 3$, $h = 6$, $V = 54\\pi$, while $V_{\\text{ball}} = 36\\pi$; the ratio is $\\dfrac23$.

**Example 7.** A cylinder is inscribed in a cone with $r = 3$ and $h = 6$ (its lower base lies in the cone's base, its upper circle on the lateral surface). If the cylinder's height is $x$, similar triangles in the axial section give $\\dfrac{r_c}{3} = \\dfrac{6 - x}{6}$, $r_c = 3 - \\dfrac x2$. Its volume $V(x) = \\pi\\left(3 - \\dfrac x2\\right)^2 x$ has derivative $\\pi\\left(3 - \\dfrac x2\\right)\\left(3 - \\dfrac{3x}{2}\\right)$, zero at $x = 2$: the largest cylinder has $h = 2$, $r_c = 2$, $V = 8\\pi$, which is $\\dfrac49$ of the cone's volume $18\\pi$. In general the best cylinder has height $\\dfrac h3$.

**Example 8.** A cone is inscribed in a sphere of radius $R$. With height $h$ its radius satisfies $r^2 = 2Rh - h^2$, so $V(h) = \\dfrac{\\pi}{3}(2Rh^2 - h^3)$, $V' = \\dfrac{\\pi}{3}(4Rh - 3h^2) = 0$ at $h = \\dfrac{4R}{3}$. The largest cone has height $\\dfrac43 R$, $r^2 = \\dfrac{8R^2}{9}$ and volume $\\dfrac{32}{81}\\pi R^3$, which is $\\dfrac{8}{27}$ of the ball.

### Exercises

1. A cone has $r = 6$ and $h = 8$. Find the radii of the inscribed and circumscribed spheres.
2. A cylinder of height $10$ is inscribed in a sphere of radius $13$. Find its volume.
3. A cone of height $12$ is inscribed in a sphere of radius $9$. Find its volume.
4. A sphere is inscribed in a truncated cone with radii $9$ and $4$. Find the height, the generator and the radius of the sphere.
5. A sphere of volume $36\\pi$ is inscribed in a cylinder. Find the volume of the cylinder.
6. The generator of an equilateral cone is $6$. Find the radii of the inscribed and circumscribed spheres.
7. A cylinder of height $2$ is inscribed in a cone with $r = 4$, $h = 8$. Find the volume of the cylinder.
8. A cone of height $\\dfrac32$ is inscribed in a sphere of radius $1$. Find its volume.

### Answers

1. $l = 10$: $\\rho = \\dfrac{48}{16} = 3$, $R = \\dfrac{100}{16} = \\dfrac{25}{4}$. 2. $r = 12$, $V = 1440\\pi$. 3. $r^2 = 216 - 144 = 72$, $V = 288\\pi$. 4. $l = 13$, $h = 12$, radius $6$. 5. $R = 3$, $V = 54\\pi$. 6. $\\rho = \\sqrt3$, $R = 2\\sqrt3$. 7. $r_c = 3$, $V = 18\\pi$. 8. $r^2 = 3 - \\dfrac94 = \\dfrac34$, $V = \\dfrac{3\\pi}{8}$.`,
        hy: `## Եղանակը․ առանցքային հատույթ

Այս բոլոր մարմիններն ընդհանուր առանցքով պտտման մարմիններ են, ուստի ամեն համակցություն ամբողջությամբ երևում է **առանցքային հատույթում**․ սֆերան դառնում է շրջանագիծ, գլանը՝ ուղղանկյուն, կոնը՝ հավասարասրուն եռանկյուն, հատած կոնը՝ հավասարասրուն սեղան։ Ներգծյալը դառնում է ներգծյալ, արտագծյալը՝ արտագծյալ։ Այսպիսով ամեն խնդիր հարթաչափական խնդիր է շրջանագծի և բազմանկյան մասին։

## Սֆերա և գլան

Սֆերան գլանի **ներգծյալ** է (շոշափում է երկու հիմքերն ու կողմնային մակերևույթը) միայն այն դեպքում, երբ գլանի բարձրությունը $2r$ է, իսկ շառավիղը՝ $r$․ առանցքային հատույթը ներգծյալ շրջանագծով քառակուսի է։ Այդ դեպքում $V_{\\text{գունդ}} : V_{\\text{գլան}} = 2 : 3$, և մակերևույթները նույնպես հարաբերում են $2 : 3$։

Սֆերան $r$ շառավղով և $h$ բարձրությամբ գլանի **արտագծյալ** է, եթե հիմքերի երկու շրջանագծերն էլ նրա վրա են․ կենտրոնն առանցքի միջնակետն է և
$$R^2 = r^2 + \\dfrac{h^2}{4}$$

## Սֆերա և կոն

$r$ շառավղով, $h$ բարձրությամբ և $l$ ծնորդով կոնի առանցքային հատույթը $2r$ հիմքով, $l$ սրունքներով և $h$ բարձրությամբ հավասարասրուն եռանկյուն է։

**Ներգծյալ սֆերա․** այդ եռանկյան ներգծյալ շրջանագիծը՝ $\\dfrac{S}{p}$ շառավղով․
$$\\rho = \\dfrac{rh}{r + l}$$
**Արտագծյալ սֆերա․** արտագծյալ շրջանագիծը, $l^2 = 2Rh$ առնչությամբ (տրամագծով կազմված ուղղանկյուն եռանկյան էջի հատկությունը)․
$$R = \\dfrac{l^2}{2h} = \\dfrac{r^2 + h^2}{2h}$$

**Հատած կոն** $R_1$, $R_2$ շառավիղներով, $l$ ծնորդով և $h$ բարձրությամբ։ Նրանում սֆերա կարելի է ներգծել միայն այն դեպքում, երբ սեղանն արտագծյալ է․ $2R_1 + 2R_2 = 2l$, այսինքն $l = R_1 + R_2$։ Այդ դեպքում $h^2 = l^2 - (R_1 - R_2)^2 = 4R_1R_2$, ուստի $h = 2\\sqrt{R_1R_2}$, իսկ սֆերայի շառավիղը $\\sqrt{R_1R_2}$ է։ Հատած կոնի շուրջ սֆերա միշտ կարելի է արտագծել․ առանցքի վրա նրա կենտրոնը գտնվում է $R^2 = R_1^2 + x^2 = R_2^2 + (h - x)^2$ հավասարումից։

**Օրինակ 1։** Կոն $r = 3$, $h = 4$, $l = 5$․ ներգծյալ սֆերա $\\rho = \\dfrac{12}{8} = \\dfrac32$, արտագծյալ սֆերա $R = \\dfrac{25}{8}$։

**Օրինակ 2։** Հավասարակողմ կոն (առանցքային հատույթը $a$ կողմով հավասարակողմ եռանկյուն է)․ $r = \\dfrac a2$, $h = \\dfrac{a\\sqrt3}{2}$։ Հավասարակողմ եռանկյան ներգծյալ և արտագծյալ շրջանագծերի շառավիղները $\\dfrac{h}{3}$ և $\\dfrac{2h}{3}$ են, ուստի $\\rho = \\dfrac{a\\sqrt3}{6}$, $R = \\dfrac{a\\sqrt3}{3}$, $R = 2\\rho$։

**Օրինակ 3։** $6$ բարձրությամբ գլանը ներգծված է $5$ շառավղով սֆերայում․ $r^2 = 25 - 9 = 16$, $r = 4$, $V = 96\\pi$։

**Օրինակ 4։** $8$ բարձրությամբ կոնը ներգծված է $5$ շառավղով սֆերայում։ $l^2 = 2Rh = 80$-ից և $r^2 = l^2 - h^2 = 16$-ից․ $r = 4$, $V = \\dfrac13\\pi \\cdot 16 \\cdot 8 = \\dfrac{128}{3}\\pi$։

**Օրինակ 5։** Սֆերան ներգծված է $4$ և $1$ շառավիղներով հատած կոնում։ Այդ դեպքում $l = 5$, $h = 2\\sqrt4 = 4$, սֆերայի շառավիղը $2$ է։ Ստուգում․ $l^2 = 25 = 16 + 9 = h^2 + (4 - 1)^2$։

**Օրինակ 6։** $3$ շառավղով սֆերան ներգծված է գլանում․ գլանի $r = 3$, $h = 6$, $V = 54\\pi$, մինչդեռ $V_{\\text{գունդ}} = 36\\pi$․ հարաբերությունը $\\dfrac23$ է։

**Օրինակ 7։** Գլանը ներգծված է $r = 3$, $h = 6$ կոնում (նրա ստորին հիմքը կոնի հիմքում է, վերին շրջանագիծը՝ կողմնային մակերևույթի վրա)։ Եթե գլանի բարձրությունը $x$ է, առանցքային հատույթի նման եռանկյուններից $\\dfrac{r_c}{3} = \\dfrac{6 - x}{6}$, $r_c = 3 - \\dfrac x2$։ Նրա $V(x) = \\pi\\left(3 - \\dfrac x2\\right)^2 x$ ծավալի ածանցյալը $\\pi\\left(3 - \\dfrac x2\\right)\\left(3 - \\dfrac{3x}{2}\\right)$ է, որը զրո է $x = 2$ դեպքում․ ամենամեծ գլանի $h = 2$, $r_c = 2$, $V = 8\\pi$, որը կոնի $18\\pi$ ծավալի $\\dfrac49$ մասն է։ Ընդհանուր դեպքում լավագույն գլանի բարձրությունը $\\dfrac h3$ է։

**Օրինակ 8։** Կոնը ներգծված է $R$ շառավղով սֆերայում։ $h$ բարձրության դեպքում նրա շառավիղը բավարարում է $r^2 = 2Rh - h^2$, ուստի $V(h) = \\dfrac{\\pi}{3}(2Rh^2 - h^3)$, $V' = \\dfrac{\\pi}{3}(4Rh - 3h^2) = 0$ $h = \\dfrac{4R}{3}$ դեպքում։ Ամենամեծ կոնի բարձրությունը $\\dfrac43 R$ է, $r^2 = \\dfrac{8R^2}{9}$, ծավալը՝ $\\dfrac{32}{81}\\pi R^3$, որը գնդի $\\dfrac{8}{27}$ մասն է։

### Վարժություններ

1. Կոնի $r = 6$, $h = 8$։ Գտեք ներգծյալ և արտագծյալ սֆերաների շառավիղները։
2. $10$ բարձրությամբ գլանը ներգծված է $13$ շառավղով սֆերայում։ Գտեք նրա ծավալը։
3. $12$ բարձրությամբ կոնը ներգծված է $9$ շառավղով սֆերայում։ Գտեք նրա ծավալը։
4. Սֆերան ներգծված է $9$ և $4$ շառավիղներով հատած կոնում։ Գտեք բարձրությունը, ծնորդը և սֆերայի շառավիղը։
5. $36\\pi$ ծավալով սֆերան ներգծված է գլանում։ Գտեք գլանի ծավալը։
6. Հավասարակողմ կոնի ծնորդը $6$ է։ Գտեք ներգծյալ և արտագծյալ սֆերաների շառավիղները։
7. $2$ բարձրությամբ գլանը ներգծված է $r = 4$, $h = 8$ կոնում։ Գտեք գլանի ծավալը։
8. $\\dfrac32$ բարձրությամբ կոնը ներգծված է $1$ շառավղով սֆերայում։ Գտեք նրա ծավալը։

### Պատասխաններ

1. $l = 10$․ $\\rho = \\dfrac{48}{16} = 3$, $R = \\dfrac{100}{16} = \\dfrac{25}{4}$։ 2. $r = 12$, $V = 1440\\pi$։ 3. $r^2 = 216 - 144 = 72$, $V = 288\\pi$։ 4. $l = 13$, $h = 12$, շառավիղը $6$։ 5. $R = 3$, $V = 54\\pi$։ 6. $\\rho = \\sqrt3$, $R = 2\\sqrt3$։ 7. $r_c = 3$, $V = 18\\pi$։ 8. $r^2 = 3 - \\dfrac94 = \\dfrac34$, $V = \\dfrac{3\\pi}{8}$։`,
        ru: `## Метод: осевое сечение

Все эти тела — тела вращения с общей осью, поэтому любая комбинация полностью видна в **осевом сечении**: сфера становится окружностью, цилиндр — прямоугольником, конус — равнобедренным треугольником, усечённый конус — равнобедренной трапецией. Вписанное остаётся вписанным, описанное — описанным. Так что каждая задача — задача планиметрии об окружности и многоугольнике.

## Сфера и цилиндр

Сфера **вписана** в цилиндр (касается обоих оснований и боковой поверхности) только если высота цилиндра равна $2r$, а радиус $r$: осевое сечение — квадрат с вписанной окружностью. Тогда $V_{\\text{шара}} : V_{\\text{цил}} = 2 : 3$, и поверхности тоже относятся как $2 : 3$.

Сфера **описана** около цилиндра с радиусом $r$ и высотой $h$, если обе окружности оснований лежат на ней; центр — середина оси и
$$R^2 = r^2 + \\dfrac{h^2}{4}.$$

## Сфера и конус

Для конуса с радиусом $r$, высотой $h$ и образующей $l$ осевое сечение — равнобедренный треугольник с основанием $2r$, боковыми сторонами $l$ и высотой $h$.

**Вписанная сфера:** вписанная окружность этого треугольника с радиусом $\\dfrac{S}{p}$:
$$\\rho = \\dfrac{rh}{r + l}.$$
**Описанная сфера:** описанная окружность, по $l^2 = 2Rh$ (свойство катета в прямоугольном треугольнике, построенном на диаметре):
$$R = \\dfrac{l^2}{2h} = \\dfrac{r^2 + h^2}{2h}.$$

**Усечённый конус** с радиусами $R_1$, $R_2$, образующей $l$ и высотой $h$. Сферу в него можно вписать, только если трапеция описанная: $2R_1 + 2R_2 = 2l$, то есть $l = R_1 + R_2$. Тогда $h^2 = l^2 - (R_1 - R_2)^2 = 4R_1R_2$, так что $h = 2\\sqrt{R_1R_2}$, а радиус сферы $\\sqrt{R_1R_2}$. Сферу около усечённого конуса можно описать всегда; её центр на оси находится из $R^2 = R_1^2 + x^2 = R_2^2 + (h - x)^2$.

**Пример 1.** Конус с $r = 3$, $h = 4$, $l = 5$: вписанная сфера $\\rho = \\dfrac{12}{8} = \\dfrac32$, описанная сфера $R = \\dfrac{25}{8}$.

**Пример 2.** Равносторонний конус (осевое сечение — равносторонний треугольник со стороной $a$): $r = \\dfrac a2$, $h = \\dfrac{a\\sqrt3}{2}$. Вписанная и описанная окружности равностороннего треугольника имеют радиусы $\\dfrac{h}{3}$ и $\\dfrac{2h}{3}$, поэтому $\\rho = \\dfrac{a\\sqrt3}{6}$, $R = \\dfrac{a\\sqrt3}{3}$, $R = 2\\rho$.

**Пример 3.** Цилиндр высоты $6$ вписан в сферу радиуса $5$: $r^2 = 25 - 9 = 16$, $r = 4$, $V = 96\\pi$.

**Пример 4.** Конус высоты $8$ вписан в сферу радиуса $5$. Из $l^2 = 2Rh = 80$ и $r^2 = l^2 - h^2 = 16$: $r = 4$, $V = \\dfrac13\\pi \\cdot 16 \\cdot 8 = \\dfrac{128}{3}\\pi$.

**Пример 5.** Сфера вписана в усечённый конус с радиусами $4$ и $1$. Тогда $l = 5$, $h = 2\\sqrt4 = 4$, радиус сферы $2$. Проверка: $l^2 = 25 = 16 + 9 = h^2 + (4 - 1)^2$.

**Пример 6.** Сфера радиуса $3$ вписана в цилиндр; цилиндр имеет $r = 3$, $h = 6$, $V = 54\\pi$, тогда как $V_{\\text{шара}} = 36\\pi$; отношение $\\dfrac23$.

**Пример 7.** Цилиндр вписан в конус с $r = 3$ и $h = 6$ (его нижнее основание лежит в основании конуса, верхняя окружность — на боковой поверхности). Если высота цилиндра $x$, подобные треугольники в осевом сечении дают $\\dfrac{r_c}{3} = \\dfrac{6 - x}{6}$, $r_c = 3 - \\dfrac x2$. Его объём $V(x) = \\pi\\left(3 - \\dfrac x2\\right)^2 x$ имеет производную $\\pi\\left(3 - \\dfrac x2\\right)\\left(3 - \\dfrac{3x}{2}\\right)$, равную нулю при $x = 2$: наибольший цилиндр имеет $h = 2$, $r_c = 2$, $V = 8\\pi$, то есть $\\dfrac49$ объёма конуса $18\\pi$. В общем случае лучший цилиндр имеет высоту $\\dfrac h3$.

**Пример 8.** Конус вписан в сферу радиуса $R$. При высоте $h$ его радиус удовлетворяет $r^2 = 2Rh - h^2$, поэтому $V(h) = \\dfrac{\\pi}{3}(2Rh^2 - h^3)$, $V' = \\dfrac{\\pi}{3}(4Rh - 3h^2) = 0$ при $h = \\dfrac{4R}{3}$. Наибольший конус имеет высоту $\\dfrac43 R$, $r^2 = \\dfrac{8R^2}{9}$ и объём $\\dfrac{32}{81}\\pi R^3$, то есть $\\dfrac{8}{27}$ шара.

### Упражнения

1. Конус имеет $r = 6$ и $h = 8$. Найдите радиусы вписанной и описанной сфер.
2. Цилиндр высоты $10$ вписан в сферу радиуса $13$. Найдите его объём.
3. Конус высоты $12$ вписан в сферу радиуса $9$. Найдите его объём.
4. Сфера вписана в усечённый конус с радиусами $9$ и $4$. Найдите высоту, образующую и радиус сферы.
5. Сфера объёма $36\\pi$ вписана в цилиндр. Найдите объём цилиндра.
6. Образующая равностороннего конуса равна $6$. Найдите радиусы вписанной и описанной сфер.
7. Цилиндр высоты $2$ вписан в конус с $r = 4$, $h = 8$. Найдите объём цилиндра.
8. Конус высоты $\\dfrac32$ вписан в сферу радиуса $1$. Найдите его объём.

### Ответы

1. $l = 10$: $\\rho = \\dfrac{48}{16} = 3$, $R = \\dfrac{100}{16} = \\dfrac{25}{4}$. 2. $r = 12$, $V = 1440\\pi$. 3. $r^2 = 216 - 144 = 72$, $V = 288\\pi$. 4. $l = 13$, $h = 12$, радиус $6$. 5. $R = 3$, $V = 54\\pi$. 6. $\\rho = \\sqrt3$, $R = 2\\sqrt3$. 7. $r_c = 3$, $V = 18\\pi$. 8. $r^2 = 3 - \\dfrac94 = \\dfrac34$, $V = \\dfrac{3\\pi}{8}$.`,
      },
      [
        q(t("A sphere is inscribed in a cylinder. Then the cylinder's height equals…", "Սֆերան ներգծված է գլանում։ Այդ դեպքում գլանի բարձրությունը հավասար է…", "Сфера вписана в цилиндр. Тогда высота цилиндра равна…"), [t("its radius", "նրա շառավղին", "его радиусу"), t("its diameter", "նրա տրամագծին", "его диаметру"), t("half its radius", "նրա շառավղի կեսին", "половине его радиуса")], 1),
        q(t("A cone has r = 3, h = 4, l = 5. The inscribed sphere has radius…", "Կոնի r = 3, h = 4, l = 5։ Ներգծյալ սֆերայի շառավիղը…", "Конус имеет r = 3, h = 4, l = 5. Радиус вписанной сферы…"), [t("1", "1", "1"), t("1,5", "1,5", "1,5"), t("2", "2", "2")], 1),
        q(t("The sphere circumscribed about a cone with generator l and height h has radius…", "l ծնորդով և h բարձրությամբ կոնի արտագծյալ սֆերայի շառավիղը…", "Сфера, описанная около конуса с образующей l и высотой h, имеет радиус…"), [t("l/2", "l/2", "l/2"), t("l²/(2h)", "l²/(2h)", "l²/(2h)"), t("h/2", "h/2", "h/2")], 1),
        q(t("A sphere can be inscribed in a truncated cone with radii R₁, R₂ and generator l only if…", "R₁, R₂ շառավիղներով և l ծնորդով հատած կոնում սֆերա կարելի է ներգծել միայն այն դեպքում, երբ…", "В усечённый конус с радиусами R₁, R₂ и образующей l можно вписать сферу, только если…"), [t("l = R₁ + R₂", "l = R₁ + R₂", "l = R₁ + R₂"), t("l = R₁ − R₂", "l = R₁ − R₂", "l = R₁ − R₂"), t("l = 2R₁", "l = 2R₁", "l = 2R₁")], 0),
        q(t("A cylinder with r = 3 and h = 8 is inscribed in a sphere. The sphere's radius is…", "r = 3, h = 8 գլանը ներգծված է սֆերայում։ Սֆերայի շառավիղը…", "Цилиндр с r = 3 и h = 8 вписан в сферу. Радиус сферы…"), [t("4", "4", "4"), t("5", "5", "5"), t("√73", "√73", "√73")], 1),
        q(t("The axial section of a cone with an inscribed sphere shows…", "Ներգծյալ սֆերայով կոնի առանցքային հատույթում երևում է…", "Осевое сечение конуса с вписанной сферой показывает…"), [t("a triangle with an inscribed circle", "ներգծյալ շրջանագծով եռանկյուն", "треугольник с вписанной окружностью"), t("a rectangle with an inscribed circle", "ներգծյալ շրջանագծով ուղղանկյուն", "прямоугольник с вписанной окружностью"), t("two concentric circles", "երկու համակենտրոն շրջանագիծ", "две концентрические окружности")], 0),
      ],
    ),
    lesson(
      "prism-cylinder",
      ["Prism and cylinder; pyramid and cone", "Պրիզմա և գլան, բուրգ և կոն", "Призма и цилиндр; пирамида и конус"],
      {
        en: ["Define a prism inscribed in and circumscribed about a cylinder and a pyramid inscribed in and circumscribed about a cone", "Use the circumradius ρ = a/(2 sin(180°/n)) and inradius r₁ = a/(2 tg(180°/n)) of a regular polygon to pass from the polyhedron to the round body", "Compare volumes and lateral areas of a regular pyramid with its inscribed and circumscribed cones, where the generator equals the apothem or the lateral edge"],
        hy: ["Սահմանել գլանում ներգծյալ և նրա արտագծյալ պրիզման, կոնում ներգծյալ և նրա արտագծյալ բուրգը", "Օգտագործել կանոնավոր բազմանկյան ρ = a/(2 sin(180°/n)) արտագծյալ և r₁ = a/(2 tg(180°/n)) ներգծյալ շառավիղները բազմանիստից պտտման մարմնին անցնելու համար", "Համեմատել կանոնավոր բուրգի և նրա ներգծյալ ու արտագծյալ կոնների ծավալներն ու կողմնային մակերեսները, որտեղ ծնորդը հավասար է ապոթեմին կամ կողմնային կողին"],
        ru: ["Определять призму, вписанную в цилиндр и описанную около него, и пирамиду, вписанную в конус и описанную около него", "Использовать радиусы описанной ρ = a/(2 sin(180°/n)) и вписанной r₁ = a/(2 tg(180°/n)) окружностей правильного многоугольника для перехода от многогранника к телу вращения", "Сравнивать объёмы и боковые поверхности правильной пирамиды с вписанным и описанным конусами, у которых образующая равна апофеме или боковому ребру"],
      },
      {
        en: `## Prism and cylinder

A prism is **inscribed in a cylinder** if its bases are polygons inscribed in the base circles of the cylinder and its lateral edges are generators. This is possible only for a *right* prism with a *cyclic* base. The cylinder is then *circumscribed about the prism*; its radius is the circumradius $\\rho$ of the base and its height is the prism's height.

A prism is **circumscribed about a cylinder** if its bases are polygons circumscribed about the base circles and its lateral faces touch the lateral surface. This needs a right prism whose base has an inscribed circle; the cylinder's radius is the inradius $r_1$ of the base.

For a regular $n$-gon with side $a$:
$$\\rho = \\dfrac{a}{2\\sin\\dfrac{180°}{n}}, \\qquad r_1 = \\dfrac{a}{2\\tan\\dfrac{180°}{n}}.$$

| $n$ | $\\rho$ | $r_1$ |
|---|---|---|
| $3$ | $\\dfrac{a}{\\sqrt3}$ | $\\dfrac{a}{2\\sqrt3}$ |
| $4$ | $\\dfrac{a}{\\sqrt2}$ | $\\dfrac a2$ |
| $6$ | $a$ | $\\dfrac{a\\sqrt3}{2}$ |

## Pyramid and cone

A pyramid is **inscribed in a cone** if its base is inscribed in the cone's base circle and its apex is the cone's apex; the lateral edges are generators. A pyramid is **circumscribed about a cone** if its base is circumscribed about the cone's base and the apex is common; the lateral faces touch the cone along generators. For a regular pyramid:

- circumscribed cone: radius $\\rho$, generator $=$ lateral edge $b$;
- inscribed cone: radius $r_1$, generator $=$ apothem $l$;
- all three bodies share the height $h$.

Hence $V_{\\text{cone}} : V_{\\text{pyr}} = \\pi r^2 : S_{\\text{base}}$ and $S_{\\text{lat, cone}} : S_{\\text{lat, pyr}} = \\pi r l_{\\text{cone}} : \\dfrac12 P l_{\\text{pyr}}$.

**Example 1.** Regular triangular prism with base side $6$ and height $5$. Circumscribed cylinder: $r = \\dfrac{6}{\\sqrt3} = 2\\sqrt3$, $V = \\pi \\cdot 12 \\cdot 5 = 60\\pi$. Inscribed cylinder: $r = \\sqrt3$, $V = 15\\pi$. The prism itself has $V = 9\\sqrt3 \\cdot 5 = 45\\sqrt3 \\approx 78$, between $15\\pi \\approx 47$ and $60\\pi \\approx 188$.

**Example 2.** A cube with edge $a$: the inscribed cylinder has $r = \\dfrac a2$, $V = \\dfrac{\\pi a^3}{4}$; the circumscribed cylinder has $r = \\dfrac{a\\sqrt2}{2}$, $V = \\dfrac{\\pi a^3}{2}$, exactly twice as much.

**Example 3.** Regular quadrilateral pyramid with base side $6$ and height $4$ (lateral edge $\\sqrt{34}$, apothem $5$). Circumscribed cone: $r = 3\\sqrt2$, $l = \\sqrt{34}$, $S_{\\text{lat}} = \\pi \\cdot 3\\sqrt2 \\cdot \\sqrt{34} = 6\\sqrt{17}\\,\\pi$, $V = \\dfrac13\\pi \\cdot 18 \\cdot 4 = 24\\pi$. Inscribed cone: $r = 3$, $l = 5$, $S_{\\text{lat}} = 15\\pi$, $V = 12\\pi$. The pyramid: $V = 48$, $S_{\\text{lat}} = 60$. So $V_{\\text{in}} : V_{\\text{pyr}} = \\dfrac{\\pi}{4}$ and $V_{\\text{out}} : V_{\\text{pyr}} = \\dfrac{\\pi}{2}$.

**Example 4.** Regular hexagonal pyramid with base side $4$ and height $3$. Circumscribed cone: $r = 4$, $l = 5$, $V = 16\\pi$. Inscribed cone: $r = 2\\sqrt3$, $l = \\sqrt{9 + 12} = \\sqrt{21}$, $V = 12\\pi$. Pyramid: $S_{\\text{base}} = \\dfrac{3\\sqrt3}{2} \\cdot 16 = 24\\sqrt3$, $V = 24\\sqrt3 \\approx 41{,}6$, between $12\\pi \\approx 37{,}7$ and $16\\pi \\approx 50{,}3$.

**Example 5.** A regular triangular pyramid is inscribed in a cone with $r = 2\\sqrt3$ and $h = 4$. Its base side is $a = \\rho\\sqrt3 = 6$, its lateral edge equals the generator $\\sqrt{12 + 16} = \\sqrt{28} = 2\\sqrt7$, and $V = \\dfrac13 \\cdot 9\\sqrt3 \\cdot 4 = 12\\sqrt3$, versus $V_{\\text{cone}} = 16\\pi$.

**Example 6.** The ratio of the volume of a regular $n$-gonal pyramid to the volume of its circumscribed cone is $\\dfrac{S_{\\text{base}}}{\\pi\\rho^2} = \\dfrac{n\\sin\\dfrac{360°}{n}}{2\\pi}$: for $n = 3$ it is $\\dfrac{3\\sqrt3}{4\\pi} \\approx 0{,}41$, for $n = 4$ it is $\\dfrac{2}{\\pi} \\approx 0{,}64$, for $n = 6$ it is $\\dfrac{3\\sqrt3}{2\\pi} \\approx 0{,}83$, and it tends to $1$ as $n$ grows: the pyramids fill the cone.

**Example 7.** A cone is inscribed in a regular triangular pyramid with base side $6\\sqrt3$ and height $4$: $r_1 = 3$, $l = 5$ (the apothem), $S_{\\text{lat, cone}} = 15\\pi$, while the pyramid's lateral surface is $3 \\cdot \\dfrac{6\\sqrt3 \\cdot 5}{2} = 45\\sqrt3$.

**Example 8.** A cylinder is inscribed in a regular hexagonal prism with base side $2$ and height $5$: $r = \\sqrt3$, $V = 15\\pi$; the prism has $V = 6\\sqrt3 \\cdot 5 = 30\\sqrt3$, and the ratio is $\\dfrac{\\pi}{2\\sqrt3} \\approx 0{,}91$.

### Exercises

1. A regular quadrilateral prism has base side $4$ and height $3$. Find the volumes of the inscribed and circumscribed cylinders.
2. A regular triangular prism has base side $2\\sqrt3$ and height $4$. Find the volumes of the circumscribed and inscribed cylinders.
3. A regular hexagonal prism has base side $2$ and height $3$. Find the volumes of the circumscribed and inscribed cylinders.
4. A regular quadrilateral pyramid has base side $2$ and height $1$. Find the lateral areas of the circumscribed and inscribed cones.
5. A regular triangular pyramid is inscribed in a cone with $r = 3$ and $h = 4$. Find the base side, the lateral edge and the volume of the pyramid.
6. A regular quadrilateral pyramid is circumscribed about a cone with $r = 6$ and $h = 8$. Find the volume and the lateral surface of the pyramid.
7. A regular hexagonal pyramid has base side $6$ and height $8$. Find the volumes of the inscribed and circumscribed cones.
8. The cylinder inscribed in a cube has volume $16\\pi$. Find the edge of the cube and the volume of the circumscribed cylinder.

### Answers

1. $r = 2$: $12\\pi$; $r = 2\\sqrt2$: $24\\pi$. 2. $\\rho = 2$: $16\\pi$; $r_1 = 1$: $4\\pi$. 3. $\\rho = 2$: $12\\pi$; $r_1 = \\sqrt3$: $9\\pi$. 4. $\\rho = \\sqrt2$, $b = \\sqrt3$: $\\sqrt6\\,\\pi$; $r_1 = 1$, $l = \\sqrt2$: $\\sqrt2\\,\\pi$. 5. $a = 3\\sqrt3$, $b = 5$, $V = \\dfrac13 \\cdot \\dfrac{27\\sqrt3}{4} \\cdot 4 = 9\\sqrt3$. 6. Side $12$, apothem $10$: $V = 384$, $S_{\\text{lat}} = 240$. 7. $r_1 = 3\\sqrt3$: $72\\pi$; $\\rho = 6$: $96\\pi$. 8. $\\dfrac{\\pi a^3}{4} = 16\\pi$, $a = 4$; $32\\pi$.`,
        hy: `## Պրիզմա և գլան

Պրիզման **գլանում ներգծյալ** է, եթե նրա հիմքերը գլանի հիմքերի շրջանագծերում ներգծյալ բազմանկյուններ են, իսկ կողմնային կողերը՝ ծնորդներ։ Դա հնարավոր է միայն *ուղիղ* պրիզմայի համար, որի հիմքը *շրջանագծում ներգծյալ* է։ Գլանն այդ դեպքում *պրիզմայի արտագծյալ* է․ նրա շառավիղը հիմքի արտագծյալ $\\rho$ շառավիղն է, բարձրությունը՝ պրիզմայի բարձրությունը։

Պրիզման **գլանի արտագծյալ** է, եթե նրա հիմքերը հիմքերի շրջանագծերի շուրջ արտագծյալ բազմանկյուններ են, իսկ կողմնային նիստերը շոշափում են կողմնային մակերևույթը։ Դրա համար անհրաժեշտ է ուղիղ պրիզմա, որի հիմքը ներգծյալ շրջանագիծ ունի․ գլանի շառավիղը հիմքի ներգծյալ $r_1$ շառավիղն է։

$a$ կողմով կանոնավոր $n$-անկյան համար․
$$\\rho = \\dfrac{a}{2\\sin\\dfrac{180°}{n}}, \\qquad r_1 = \\dfrac{a}{2\\operatorname{tg}\\dfrac{180°}{n}}$$

| $n$ | $\\rho$ | $r_1$ |
|---|---|---|
| $3$ | $\\dfrac{a}{\\sqrt3}$ | $\\dfrac{a}{2\\sqrt3}$ |
| $4$ | $\\dfrac{a}{\\sqrt2}$ | $\\dfrac a2$ |
| $6$ | $a$ | $\\dfrac{a\\sqrt3}{2}$ |

## Բուրգ և կոն

Բուրգը **կոնում ներգծյալ** է, եթե նրա հիմքը կոնի հիմքի շրջանագծում ներգծյալ է, իսկ գագաթը կոնի գագաթն է․ կողմնային կողերը ծնորդներ են։ Բուրգը **կոնի արտագծյալ** է, եթե նրա հիմքը կոնի հիմքի շուրջ արտագծյալ է, իսկ գագաթն ընդհանուր է․ կողմնային նիստերը շոշափում են կոնը ծնորդներով։ Կանոնավոր բուրգի համար․

- արտագծյալ կոն․ շառավիղը $\\rho$, ծնորդը $=$ կողմնային կող $b$,
- ներգծյալ կոն․ շառավիղը $r_1$, ծնորդը $=$ ապոթեմ $l$,
- երեք մարմիններն էլ ունեն նույն $h$ բարձրությունը։

Հետևաբար $V_{\\text{կոն}} : V_{\\text{բուրգ}} = \\pi r^2 : S_{\\text{հիմք}}$ և $S_{\\text{կողմ, կոն}} : S_{\\text{կողմ, բուրգ}} = \\pi r l_{\\text{կոն}} : \\dfrac12 P l_{\\text{բուրգ}}$։

**Օրինակ 1։** Կանոնավոր եռանկյուն պրիզմայի հիմքի կողմը $6$ է, բարձրությունը՝ $5$։ Արտագծյալ գլան․ $r = \\dfrac{6}{\\sqrt3} = 2\\sqrt3$, $V = \\pi \\cdot 12 \\cdot 5 = 60\\pi$։ Ներգծյալ գլան․ $r = \\sqrt3$, $V = 15\\pi$։ Պրիզմայի $V = 9\\sqrt3 \\cdot 5 = 45\\sqrt3 \\approx 78$՝ $15\\pi \\approx 47$-ի և $60\\pi \\approx 188$-ի միջև։

**Օրինակ 2։** $a$ կողով խորանարդ․ ներգծյալ գլանի $r = \\dfrac a2$, $V = \\dfrac{\\pi a^3}{4}$, արտագծյալ գլանի $r = \\dfrac{a\\sqrt2}{2}$, $V = \\dfrac{\\pi a^3}{2}$՝ ճիշտ երկու անգամ ավելի։

**Օրինակ 3։** Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $4$ (կողմնային կողը $\\sqrt{34}$, ապոթեմը $5$)։ Արտագծյալ կոն․ $r = 3\\sqrt2$, $l = \\sqrt{34}$, $S_{\\text{կողմ}} = \\pi \\cdot 3\\sqrt2 \\cdot \\sqrt{34} = 6\\sqrt{17}\\,\\pi$, $V = \\dfrac13\\pi \\cdot 18 \\cdot 4 = 24\\pi$։ Ներգծյալ կոն․ $r = 3$, $l = 5$, $S_{\\text{կողմ}} = 15\\pi$, $V = 12\\pi$։ Բուրգ․ $V = 48$, $S_{\\text{կողմ}} = 60$։ Ուրեմն $V_{\\text{ներ}} : V_{\\text{բուրգ}} = \\dfrac{\\pi}{4}$ և $V_{\\text{արտ}} : V_{\\text{բուրգ}} = \\dfrac{\\pi}{2}$։

**Օրինակ 4։** Կանոնավոր վեցանկյուն բուրգի հիմքի կողմը $4$ է, բարձրությունը՝ $3$։ Արտագծյալ կոն․ $r = 4$, $l = 5$, $V = 16\\pi$։ Ներգծյալ կոն․ $r = 2\\sqrt3$, $l = \\sqrt{9 + 12} = \\sqrt{21}$, $V = 12\\pi$։ Բուրգ․ $S_{\\text{հիմք}} = \\dfrac{3\\sqrt3}{2} \\cdot 16 = 24\\sqrt3$, $V = 24\\sqrt3 \\approx 41{,}6$՝ $12\\pi \\approx 37{,}7$-ի և $16\\pi \\approx 50{,}3$-ի միջև։

**Օրինակ 5։** Կանոնավոր եռանկյուն բուրգը ներգծված է $r = 2\\sqrt3$, $h = 4$ կոնում։ Նրա հիմքի կողմը $a = \\rho\\sqrt3 = 6$ է, կողմնային կողը հավասար է $\\sqrt{12 + 16} = \\sqrt{28} = 2\\sqrt7$ ծնորդին, և $V = \\dfrac13 \\cdot 9\\sqrt3 \\cdot 4 = 12\\sqrt3$, մինչդեռ $V_{\\text{կոն}} = 16\\pi$։

**Օրինակ 6։** Կանոնավոր $n$-անկյուն բուրգի և նրա արտագծյալ կոնի ծավալների հարաբերությունը $\\dfrac{S_{\\text{հիմք}}}{\\pi\\rho^2} = \\dfrac{n\\sin\\dfrac{360°}{n}}{2\\pi}$ է․ $n = 3$ դեպքում՝ $\\dfrac{3\\sqrt3}{4\\pi} \\approx 0{,}41$, $n = 4$ դեպքում՝ $\\dfrac{2}{\\pi} \\approx 0{,}64$, $n = 6$ դեպքում՝ $\\dfrac{3\\sqrt3}{2\\pi} \\approx 0{,}83$, և այն ձգտում է $1$-ի, երբ $n$-ը մեծանում է․ բուրգերը լցնում են կոնը։

**Օրինակ 7։** Կոնը ներգծված է $6\\sqrt3$ հիմքի կողմով և $4$ բարձրությամբ կանոնավոր եռանկյուն բուրգում․ $r_1 = 3$, $l = 5$ (ապոթեմը), $S_{\\text{կողմ, կոն}} = 15\\pi$, մինչդեռ բուրգի կողմնային մակերևույթը $3 \\cdot \\dfrac{6\\sqrt3 \\cdot 5}{2} = 45\\sqrt3$ է։

**Օրինակ 8։** Գլանը ներգծված է $2$ հիմքի կողմով և $5$ բարձրությամբ կանոնավոր վեցանկյուն պրիզմայում․ $r = \\sqrt3$, $V = 15\\pi$, պրիզմայի $V = 6\\sqrt3 \\cdot 5 = 30\\sqrt3$, հարաբերությունը՝ $\\dfrac{\\pi}{2\\sqrt3} \\approx 0{,}91$։

### Վարժություններ

1. Կանոնավոր քառանկյուն պրիզմայի հիմքի կողմը $4$ է, բարձրությունը՝ $3$։ Գտեք ներգծյալ և արտագծյալ գլանների ծավալները։
2. Կանոնավոր եռանկյուն պրիզմայի հիմքի կողմը $2\\sqrt3$ է, բարձրությունը՝ $4$։ Գտեք արտագծյալ և ներգծյալ գլանների ծավալները։
3. Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողմը $2$ է, բարձրությունը՝ $3$։ Գտեք արտագծյալ և ներգծյալ գլանների ծավալները։
4. Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $2$ է, բարձրությունը՝ $1$։ Գտեք արտագծյալ և ներգծյալ կոնների կողմնային մակերեսները։
5. Կանոնավոր եռանկյուն բուրգը ներգծված է $r = 3$, $h = 4$ կոնում։ Գտեք բուրգի հիմքի կողմը, կողմնային կողը և ծավալը։
6. Կանոնավոր քառանկյուն բուրգն արտագծված է $r = 6$, $h = 8$ կոնի շուրջ։ Գտեք բուրգի ծավալը և կողմնային մակերևույթը։
7. Կանոնավոր վեցանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $8$։ Գտեք ներգծյալ և արտագծյալ կոնների ծավալները։
8. Խորանարդում ներգծյալ գլանի ծավալը $16\\pi$ է։ Գտեք խորանարդի կողը և արտագծյալ գլանի ծավալը։

### Պատասխաններ

1. $r = 2$․ $12\\pi$, $r = 2\\sqrt2$․ $24\\pi$։ 2. $\\rho = 2$․ $16\\pi$, $r_1 = 1$․ $4\\pi$։ 3. $\\rho = 2$․ $12\\pi$, $r_1 = \\sqrt3$․ $9\\pi$։ 4. $\\rho = \\sqrt2$, $b = \\sqrt3$․ $\\sqrt6\\,\\pi$, $r_1 = 1$, $l = \\sqrt2$․ $\\sqrt2\\,\\pi$։ 5. $a = 3\\sqrt3$, $b = 5$, $V = \\dfrac13 \\cdot \\dfrac{27\\sqrt3}{4} \\cdot 4 = 9\\sqrt3$։ 6. Կողմը $12$, ապոթեմը $10$․ $V = 384$, $S_{\\text{կողմ}} = 240$։ 7. $r_1 = 3\\sqrt3$․ $72\\pi$, $\\rho = 6$․ $96\\pi$։ 8. $\\dfrac{\\pi a^3}{4} = 16\\pi$, $a = 4$, $32\\pi$։`,
        ru: `## Призма и цилиндр

Призма **вписана в цилиндр**, если её основания — многоугольники, вписанные в окружности оснований цилиндра, а боковые рёбра — образующие. Это возможно только для *прямой* призмы, основание которой *вписано в окружность*. Цилиндр тогда *описан около призмы*; его радиус — радиус описанной окружности основания $\\rho$, высота — высота призмы.

Призма **описана около цилиндра**, если её основания — многоугольники, описанные около окружностей оснований, а боковые грани касаются боковой поверхности. Для этого нужна прямая призма, основание которой имеет вписанную окружность; радиус цилиндра — радиус вписанной окружности основания $r_1$.

Для правильного $n$-угольника со стороной $a$:
$$\\rho = \\dfrac{a}{2\\sin\\dfrac{180°}{n}}, \\qquad r_1 = \\dfrac{a}{2\\operatorname{tg}\\dfrac{180°}{n}}.$$

| $n$ | $\\rho$ | $r_1$ |
|---|---|---|
| $3$ | $\\dfrac{a}{\\sqrt3}$ | $\\dfrac{a}{2\\sqrt3}$ |
| $4$ | $\\dfrac{a}{\\sqrt2}$ | $\\dfrac a2$ |
| $6$ | $a$ | $\\dfrac{a\\sqrt3}{2}$ |

## Пирамида и конус

Пирамида **вписана в конус**, если её основание вписано в окружность основания конуса, а вершина — вершина конуса; боковые рёбра — образующие. Пирамида **описана около конуса**, если её основание описано около основания конуса, а вершина общая; боковые грани касаются конуса по образующим. Для правильной пирамиды:

- описанный конус: радиус $\\rho$, образующая $=$ боковое ребро $b$;
- вписанный конус: радиус $r_1$, образующая $=$ апофема $l$;
- все три тела имеют общую высоту $h$.

Поэтому $V_{\\text{кон}} : V_{\\text{пир}} = \\pi r^2 : S_{\\text{осн}}$ и $S_{\\text{бок, кон}} : S_{\\text{бок, пир}} = \\pi r l_{\\text{кон}} : \\dfrac12 P l_{\\text{пир}}$.

**Пример 1.** Правильная треугольная призма со стороной основания $6$ и высотой $5$. Описанный цилиндр: $r = \\dfrac{6}{\\sqrt3} = 2\\sqrt3$, $V = \\pi \\cdot 12 \\cdot 5 = 60\\pi$. Вписанный цилиндр: $r = \\sqrt3$, $V = 15\\pi$. Сама призма имеет $V = 9\\sqrt3 \\cdot 5 = 45\\sqrt3 \\approx 78$, между $15\\pi \\approx 47$ и $60\\pi \\approx 188$.

**Пример 2.** Куб с ребром $a$: вписанный цилиндр имеет $r = \\dfrac a2$, $V = \\dfrac{\\pi a^3}{4}$; описанный цилиндр имеет $r = \\dfrac{a\\sqrt2}{2}$, $V = \\dfrac{\\pi a^3}{2}$, ровно вдвое больше.

**Пример 3.** Правильная четырёхугольная пирамида со стороной основания $6$ и высотой $4$ (боковое ребро $\\sqrt{34}$, апофема $5$). Описанный конус: $r = 3\\sqrt2$, $l = \\sqrt{34}$, $S_{\\text{бок}} = \\pi \\cdot 3\\sqrt2 \\cdot \\sqrt{34} = 6\\sqrt{17}\\,\\pi$, $V = \\dfrac13\\pi \\cdot 18 \\cdot 4 = 24\\pi$. Вписанный конус: $r = 3$, $l = 5$, $S_{\\text{бок}} = 15\\pi$, $V = 12\\pi$. Пирамида: $V = 48$, $S_{\\text{бок}} = 60$. Итак, $V_{\\text{вп}} : V_{\\text{пир}} = \\dfrac{\\pi}{4}$ и $V_{\\text{оп}} : V_{\\text{пир}} = \\dfrac{\\pi}{2}$.

**Пример 4.** Правильная шестиугольная пирамида со стороной основания $4$ и высотой $3$. Описанный конус: $r = 4$, $l = 5$, $V = 16\\pi$. Вписанный конус: $r = 2\\sqrt3$, $l = \\sqrt{9 + 12} = \\sqrt{21}$, $V = 12\\pi$. Пирамида: $S_{\\text{осн}} = \\dfrac{3\\sqrt3}{2} \\cdot 16 = 24\\sqrt3$, $V = 24\\sqrt3 \\approx 41{,}6$, между $12\\pi \\approx 37{,}7$ и $16\\pi \\approx 50{,}3$.

**Пример 5.** Правильная треугольная пирамида вписана в конус с $r = 2\\sqrt3$ и $h = 4$. Сторона её основания $a = \\rho\\sqrt3 = 6$, боковое ребро равно образующей $\\sqrt{12 + 16} = \\sqrt{28} = 2\\sqrt7$, и $V = \\dfrac13 \\cdot 9\\sqrt3 \\cdot 4 = 12\\sqrt3$, тогда как $V_{\\text{кон}} = 16\\pi$.

**Пример 6.** Отношение объёма правильной $n$-угольной пирамиды к объёму описанного конуса равно $\\dfrac{S_{\\text{осн}}}{\\pi\\rho^2} = \\dfrac{n\\sin\\dfrac{360°}{n}}{2\\pi}$: при $n = 3$ это $\\dfrac{3\\sqrt3}{4\\pi} \\approx 0{,}41$, при $n = 4$ — $\\dfrac{2}{\\pi} \\approx 0{,}64$, при $n = 6$ — $\\dfrac{3\\sqrt3}{2\\pi} \\approx 0{,}83$, и оно стремится к $1$ с ростом $n$: пирамиды заполняют конус.

**Пример 7.** Конус вписан в правильную треугольную пирамиду со стороной основания $6\\sqrt3$ и высотой $4$: $r_1 = 3$, $l = 5$ (апофема), $S_{\\text{бок, кон}} = 15\\pi$, тогда как боковая поверхность пирамиды $3 \\cdot \\dfrac{6\\sqrt3 \\cdot 5}{2} = 45\\sqrt3$.

**Пример 8.** Цилиндр вписан в правильную шестиугольную призму со стороной основания $2$ и высотой $5$: $r = \\sqrt3$, $V = 15\\pi$; призма имеет $V = 6\\sqrt3 \\cdot 5 = 30\\sqrt3$, отношение $\\dfrac{\\pi}{2\\sqrt3} \\approx 0{,}91$.

### Упражнения

1. Правильная четырёхугольная призма имеет сторону основания $4$ и высоту $3$. Найдите объёмы вписанного и описанного цилиндров.
2. Правильная треугольная призма имеет сторону основания $2\\sqrt3$ и высоту $4$. Найдите объёмы описанного и вписанного цилиндров.
3. Правильная шестиугольная призма имеет сторону основания $2$ и высоту $3$. Найдите объёмы описанного и вписанного цилиндров.
4. Правильная четырёхугольная пирамида имеет сторону основания $2$ и высоту $1$. Найдите боковые поверхности описанного и вписанного конусов.
5. Правильная треугольная пирамида вписана в конус с $r = 3$ и $h = 4$. Найдите сторону основания, боковое ребро и объём пирамиды.
6. Правильная четырёхугольная пирамида описана около конуса с $r = 6$ и $h = 8$. Найдите объём и боковую поверхность пирамиды.
7. Правильная шестиугольная пирамида имеет сторону основания $6$ и высоту $8$. Найдите объёмы вписанного и описанного конусов.
8. Цилиндр, вписанный в куб, имеет объём $16\\pi$. Найдите ребро куба и объём описанного цилиндра.

### Ответы

1. $r = 2$: $12\\pi$; $r = 2\\sqrt2$: $24\\pi$. 2. $\\rho = 2$: $16\\pi$; $r_1 = 1$: $4\\pi$. 3. $\\rho = 2$: $12\\pi$; $r_1 = \\sqrt3$: $9\\pi$. 4. $\\rho = \\sqrt2$, $b = \\sqrt3$: $\\sqrt6\\,\\pi$; $r_1 = 1$, $l = \\sqrt2$: $\\sqrt2\\,\\pi$. 5. $a = 3\\sqrt3$, $b = 5$, $V = \\dfrac13 \\cdot \\dfrac{27\\sqrt3}{4} \\cdot 4 = 9\\sqrt3$. 6. Сторона $12$, апофема $10$: $V = 384$, $S_{\\text{бок}} = 240$. 7. $r_1 = 3\\sqrt3$: $72\\pi$; $\\rho = 6$: $96\\pi$. 8. $\\dfrac{\\pi a^3}{4} = 16\\pi$, $a = 4$; $32\\pi$.`,
      },
      [
        q(t("A prism can be inscribed in a cylinder only if it is…", "Պրիզման գլանում կարելի է ներգծել միայն այն դեպքում, երբ այն…", "Призму можно вписать в цилиндр, только если она…"), [t("right with a cyclic base", "ուղիղ է՝ շրջանագծում ներգծյալ հիմքով", "прямая с основанием, вписанным в окружность"), t("oblique", "թեք է", "наклонная"), t("regular with any height", "կանոնավոր է՝ կամայական բարձրությամբ", "правильная с любой высотой")], 0),
        q(t("The radius of the cylinder circumscribed about a regular triangular prism with base side a is…", "a հիմքի կողմով կանոնավոր եռանկյուն պրիզմայի արտագծյալ գլանի շառավիղը…", "Радиус цилиндра, описанного около правильной треугольной призмы со стороной основания a, равен…"), [t("a/2", "a/2", "a/2"), t("a/√3", "a/√3", "a/√3"), t("a√3/2", "a√3/2", "a√3/2")], 1),
        q(t("The generator of the cone inscribed in a regular pyramid equals the pyramid's…", "Կանոնավոր բուրգում ներգծյալ կոնի ծնորդը հավասար է բուրգի…", "Образующая конуса, вписанного в правильную пирамиду, равна её…"), [t("lateral edge", "կողմնային կողին", "боковому ребру"), t("apothem", "ապոթեմին", "апофеме"), t("height", "բարձրությանը", "высоте")], 1),
        q(t("The generator of the cone circumscribed about a regular pyramid equals the pyramid's…", "Կանոնավոր բուրգի արտագծյալ կոնի ծնորդը հավասար է բուրգի…", "Образующая конуса, описанного около правильной пирамиды, равна её…"), [t("lateral edge", "կողմնային կողին", "боковому ребру"), t("apothem", "ապոթեմին", "апофеме"), t("base side", "հիմքի կողմին", "стороне основания")], 0),
        q(t("A cylinder is inscribed in a cube with edge 2. Its volume is…", "Գլանը ներգծված է 2 կողով խորանարդում։ Նրա ծավալը…", "Цилиндр вписан в куб с ребром 2. Его объём…"), [t("2π", "2π", "2π"), t("4π", "4π", "4π"), t("8π", "8π", "8π")], 0),
        q(t("The volume ratio of a regular quadrilateral pyramid to its inscribed cone is…", "Կանոնավոր քառանկյուն բուրգի և նրա ներգծյալ կոնի ծավալների հարաբերությունը…", "Отношение объёма правильной четырёхугольной пирамиды к объёму вписанного конуса равно…"), [t("π/4", "π/4", "π/4"), t("4/π", "4/π", "4/π"), t("2/π", "2/π", "2/π")], 1),
      ],
    ),
  ],
};
