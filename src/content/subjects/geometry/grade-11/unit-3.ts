import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Volumes", "Ծավալներ", "Объёмы тел"),
  summary: t("Volume of parallelepiped, prism, cylinder, pyramid, cone, ball and its parts.", "Զուգահեռանիստի, պրիզմայի, գլանի, բուրգի, կոնի, գնդի և նրա մասերի ծավալ։", "Объём параллелепипеда, призмы, цилиндра, пирамиды, конуса, шара и его частей."),
  lessons: [
    lesson(
      "volume-concept",
      ["Volume: concept and rectangular parallelepiped", "Ծավալ․ հասկացությունը և ուղղանկյուն զուգահեռանիստ", "Понятие объёма; объём прямоугольного параллелепипеда"],
      {
        en: ["State the basic properties of volume: equal bodies have equal volumes and the volume of a body is the sum of the volumes of its parts", "Prove and apply the formula V = abc for a rectangular parallelepiped and V = a³ for a cube", "Solve problems on volumes of bodies composed of rectangular parallelepipeds and on the diagonal and surface of a parallelepiped"],
        hy: ["Ձևակերպել ծավալի հիմնական հատկությունները․ հավասար մարմինները հավասար ծավալներ ունեն, մարմնի ծավալը հավասար է նրա մասերի ծավալների գումարին", "Ապացուցել և կիրառել ուղղանկյուն զուգահեռանիստի V = abc և խորանարդի V = a³ բանաձևերը", "Լուծել ուղղանկյուն զուգահեռանիստներից կազմված մարմինների ծավալների, զուգահեռանիստի անկյունագծի և մակերևույթի խնդիրներ"],
        ru: ["Формулировать основные свойства объёма: равные тела имеют равные объёмы, объём тела равен сумме объёмов его частей", "Доказывать и применять формулы V = abc для прямоугольного параллелепипеда и V = a³ для куба", "Решать задачи об объёмах тел, составленных из прямоугольных параллелепипедов, о диагонали и поверхности параллелепипеда"],
      },
      {
        en: `## What volume is

Every body we study in this unit is assigned a positive number, its **volume**, measured in cubic units (cm³, m³, litres: $1$ litre $= 1$ dm³ $= 1000$ cm³). Volume has two basic properties.

1. **Equal bodies have equal volumes.** (Bodies are equal if one can be moved onto the other by a motion.)
2. **Additivity.** If a body is composed of several bodies that do not overlap, its volume is the sum of their volumes.

The unit of volume is the cube with edge $1$. Together with the properties above this determines the volume of every body met in school geometry. A consequence of additivity: if one body is contained in another, its volume is not greater.

## Volume of a rectangular parallelepiped

**Theorem.** The volume of a rectangular parallelepiped with dimensions $a$, $b$, $c$ is
$$V = abc.$$

**Proof (sketch).** For integer $a$, $b$, $c$ the parallelepiped splits into $abc$ unit cubes, so $V = abc$ by additivity. For rational dimensions, say $a = \\dfrac{p}{n}$, $b = \\dfrac{q}{n}$, $c = \\dfrac{r}{n}$, a cube with edge $\\dfrac1n$ has volume $\\dfrac{1}{n^3}$ (the unit cube is made of $n^3$ such cubes), and the parallelepiped is made of $pqr$ of them: $V = \\dfrac{pqr}{n^3} = abc$. For irrational dimensions, approximate the parallelepiped from inside and outside by parallelepipeds with rational edges; both volumes tend to $abc$, and $V$ is squeezed between them. $\\blacksquare$

**Corollaries.**
- A cube with edge $a$: $V = a^3$.
- $V = S_{\\text{base}} \\cdot h$, since $ab$ is the area of the base and $c$ is the height.
- The volume of a rectangular parallelepiped equals the product of the area of a face and the edge perpendicular to it (any face may be taken as the base).

Recall the other formulas for the same body: diagonal $d^2 = a^2 + b^2 + c^2$ and total surface $S = 2(ab + bc + ca)$.

**Example 1.** A box has dimensions $3 \\times 4 \\times 5$: $V = 60$, $d = \\sqrt{9 + 16 + 25} = 5\\sqrt2$, $S = 2(12 + 20 + 15) = 94$.

**Example 2.** A cube has volume $64$: the edge is $4$, the surface is $6 \\cdot 16 = 96$, the diagonal is $4\\sqrt3$.

**Example 3.** The base of a rectangular parallelepiped is a square with side $6$ and the diagonal of the parallelepiped is $9$. Then $c^2 = 81 - 36 - 36 = 9$, $c = 3$, $V = 6 \\cdot 6 \\cdot 3 = 108$.

**Example 4.** The three faces meeting at a vertex have areas $6$, $10$, $15$. Then $ab = 6$, $bc = 10$, $ca = 15$, so $(abc)^2 = 6 \\cdot 10 \\cdot 15 = 900$ and $V = 30$. The edges are $a = \\dfrac{30}{10} = 3$, $b = 2$, $c = 5$.

**Example 5.** The diagonal of a rectangular parallelepiped is $d$ and it makes angles of $60°$ and $45°$ with two edges from the same vertex. These edges are $d\\cos 60° = \\dfrac d2$ and $d\\cos 45° = \\dfrac{d\\sqrt2}{2}$, and the third edge satisfies $c^2 = d^2 - \\dfrac{d^2}{4} - \\dfrac{d^2}{2} = \\dfrac{d^2}{4}$, so $c = \\dfrac d2$ and $V = \\dfrac d2 \\cdot \\dfrac{d\\sqrt2}{2} \\cdot \\dfrac d2 = \\dfrac{d^3\\sqrt2}{8}$.

**Example 6.** An L-shaped body is made of two rectangular parallelepipeds $2 \\times 2 \\times 6$ and $2 \\times 2 \\times 4$ glued along a $2 \\times 2$ face. By additivity $V = 24 + 16 = 40$.

**Example 7.** A rectangular pool $25 \\times 10$ m is filled to the depth $1{,}8$ m. The water volume is $25 \\cdot 10 \\cdot 1{,}8 = 450$ m³ $= 450\\,000$ litres.

**Example 8.** A cube with edge $a$ has volume $a^3$ and surface $6a^2$; they are numerically equal when $a^3 = 6a^2$, that is $a = 6$. If the edge is doubled, the surface becomes $4$ times and the volume $8$ times larger.

### Exercises

1. Find the volume, diagonal and surface of a rectangular parallelepiped $2 \\times 3 \\times 6$.
2. The volume of a cube is $125$. Find its edge, its diagonal and its surface.
3. The base of a rectangular parallelepiped is a square with side $4$, the diagonal of the parallelepiped is $6$. Find the volume.
4. The faces at one vertex have areas $12$, $18$, $24$. Find the volume and the edges.
5. The diagonal of a cube is $6$. Find its volume.
6. A rectangular parallelepiped has edges $a = 5$, $b = 12$ and the diagonal of the base makes an angle $45°$ with the diagonal of the parallelepiped. Find the volume.
7. A body is made of a cube with edge $3$ and a $3 \\times 3 \\times 1$ parallelepiped placed on top of it. Find its volume and its total surface.
8. How many litres are in a tank $0{,}5 \\times 0{,}4 \\times 0{,}3$ m? How long does it take to fill it at $2$ litres per minute?

### Answers

1. $V = 36$, $d = 7$, $S = 72$. 2. $a = 5$, $d = 5\\sqrt3$, $S = 150$. 3. $c = 2$, $V = 32$. 4. $V = \\sqrt{12 \\cdot 18 \\cdot 24} = 72$; edges $3$, $4$, $6$. 5. $a = 2\\sqrt3$, $V = 24\\sqrt3$. 6. Base diagonal $13$, height $c = 13$, $V = 780$. 7. $V = 27 + 9 = 36$; $S = 54 + 12 = 66$. 8. $60$ litres; $30$ minutes.`,
        hy: `## Ի՞նչ է ծավալը

Այս բաժնում ուսումնասիրվող ամեն մարմնին համապատասխանեցվում է դրական թիվ՝ նրա **ծավալը**, որը չափվում է խորանարդ միավորներով (սմ³, մ³, լիտր․ $1$ լիտրը $= 1$ դմ³ $= 1000$ սմ³)։ Ծավալն երկու հիմնական հատկություն ունի։

1. **Հավասար մարմինները հավասար ծավալներ ունեն։** (Մարմինները հավասար են, եթե մեկը շարժմամբ կարելի է տեղափոխել մյուսի վրա։)
2. **Ադիտիվություն։** Եթե մարմինը կազմված է մի քանի չհատվող մարմիններից, նրա ծավալը հավասար է դրանց ծավալների գումարին։

Ծավալի միավորը $1$ կողով խորանարդն է։ Վերոնշյալ հատկությունների հետ միասին դա որոշում է դպրոցական երկրաչափության ամեն մարմնի ծավալը։ Ադիտիվության հետևանք․ եթե մի մարմինը պարունակվում է մյուսի մեջ, նրա ծավալը մեծ չէ։

## Ուղղանկյուն զուգահեռանիստի ծավալը

**Թեորեմ։** $a$, $b$, $c$ չափումներով ուղղանկյուն զուգահեռանիստի ծավալը
$$V = abc$$

**Ապացույց (ուրվագիծ)։** Ամբողջ $a$, $b$, $c$ դեպքում զուգահեռանիստը տրոհվում է $abc$ միավոր խորանարդի, ուստի ադիտիվությամբ $V = abc$։ Ռացիոնալ չափումների դեպքում, ասենք $a = \\dfrac{p}{n}$, $b = \\dfrac{q}{n}$, $c = \\dfrac{r}{n}$, $\\dfrac1n$ կողով խորանարդի ծավալը $\\dfrac{1}{n^3}$ է (միավոր խորանարդը կազմված է $n^3$ այդպիսի խորանարդից), իսկ զուգահեռանիստը կազմված է դրանցից $pqr$ հատից․ $V = \\dfrac{pqr}{n^3} = abc$։ Իռացիոնալ չափումների դեպքում զուգահեռանիստը ներսից և դրսից մոտարկում ենք ռացիոնալ կողերով զուգահեռանիստներով․ երկուսի ծավալներն էլ ձգտում են $abc$-ի, իսկ $V$-ն սեղմված է դրանց միջև։ $\\blacksquare$

**Հետևանքներ։**
- $a$ կողով խորանարդ․ $V = a^3$։
- $V = S_{\\text{հիմք}} \\cdot h$, քանի որ $ab$-ն հիմքի մակերեսն է, իսկ $c$-ն՝ բարձրությունը։
- Ուղղանկյուն զուգահեռանիստի ծավալը հավասար է նիստի մակերեսի և նրան ուղղահայաց կողի արտադրյալին (հիմք կարելի է վերցնել ցանկացած նիստ)։

Հիշենք նույն մարմնի մյուս բանաձևերը․ անկյունագիծ $d^2 = a^2 + b^2 + c^2$ և լրիվ մակերևույթ $S = 2(ab + bc + ca)$։

**Օրինակ 1։** Արկղի չափումներն են $3 \\times 4 \\times 5$․ $V = 60$, $d = \\sqrt{9 + 16 + 25} = 5\\sqrt2$, $S = 2(12 + 20 + 15) = 94$։

**Օրինակ 2։** Խորանարդի ծավալը $64$ է․ կողը $4$ է, մակերևույթը՝ $6 \\cdot 16 = 96$, անկյունագիծը՝ $4\\sqrt3$։

**Օրինակ 3։** Ուղղանկյուն զուգահեռանիստի հիմքը $6$ կողմով քառակուսի է, զուգահեռանիստի անկյունագիծը՝ $9$։ Այդ դեպքում $c^2 = 81 - 36 - 36 = 9$, $c = 3$, $V = 6 \\cdot 6 \\cdot 3 = 108$։

**Օրինակ 4։** Մի գագաթում հանդիպող երեք նիստերի մակերեսներն են $6$, $10$, $15$։ Ուրեմն $ab = 6$, $bc = 10$, $ca = 15$, հետևաբար $(abc)^2 = 6 \\cdot 10 \\cdot 15 = 900$ և $V = 30$։ Կողերն են $a = \\dfrac{30}{10} = 3$, $b = 2$, $c = 5$։

**Օրինակ 5։** Ուղղանկյուն զուգահեռանիստի անկյունագիծը $d$ է և նույն գագաթից դուրս եկող երկու կողերի հետ կազմում է $60°$ և $45°$ անկյուններ։ Այդ կողերն են $d\\cos 60° = \\dfrac d2$ և $d\\cos 45° = \\dfrac{d\\sqrt2}{2}$, իսկ երրորդ կողի համար $c^2 = d^2 - \\dfrac{d^2}{4} - \\dfrac{d^2}{2} = \\dfrac{d^2}{4}$, ուստի $c = \\dfrac d2$ և $V = \\dfrac d2 \\cdot \\dfrac{d\\sqrt2}{2} \\cdot \\dfrac d2 = \\dfrac{d^3\\sqrt2}{8}$։

**Օրինակ 6։** Г-աձև մարմինը կազմված է $2 \\times 2 \\times 6$ և $2 \\times 2 \\times 4$ երկու ուղղանկյուն զուգահեռանիստից, որոնք կպցված են $2 \\times 2$ նիստով։ Ադիտիվությամբ $V = 24 + 16 = 40$։

**Օրինակ 7։** $25 \\times 10$ մ ուղղանկյուն ավազանը լցված է $1{,}8$ մ խորությամբ։ Ջրի ծավալը $25 \\cdot 10 \\cdot 1{,}8 = 450$ մ³ $= 450\\,000$ լիտր է։

**Օրինակ 8։** $a$ կողով խորանարդի ծավալը $a^3$ է, մակերևույթը՝ $6a^2$․ դրանք թվապես հավասար են, երբ $a^3 = 6a^2$, այսինքն $a = 6$։ Եթե կողը կրկնապատկվի, մակերևույթը մեծանում է $4$, իսկ ծավալը՝ $8$ անգամ։

### Վարժություններ

1. Գտեք $2 \\times 3 \\times 6$ ուղղանկյուն զուգահեռանիստի ծավալը, անկյունագիծը և մակերևույթը։
2. Խորանարդի ծավալը $125$ է։ Գտեք նրա կողը, անկյունագիծը և մակերևույթը։
3. Ուղղանկյուն զուգահեռանիստի հիմքը $4$ կողմով քառակուսի է, զուգահեռանիստի անկյունագիծը՝ $6$։ Գտեք ծավալը։
4. Մի գագաթի նիստերի մակերեսներն են $12$, $18$, $24$։ Գտեք ծավալը և կողերը։
5. Խորանարդի անկյունագիծը $6$ է։ Գտեք ծավալը։
6. Ուղղանկյուն զուգահեռանիստի կողերն են $a = 5$, $b = 12$, իսկ հիմքի անկյունագիծը զուգահեռանիստի անկյունագծի հետ կազմում է $45°$ անկյուն։ Գտեք ծավալը։
7. Մարմինը կազմված է $3$ կողով խորանարդից և նրա վրա դրված $3 \\times 3 \\times 1$ զուգահեռանիստից։ Գտեք նրա ծավալը և լրիվ մակերևույթը։
8. Քանի՞ լիտր է $0{,}5 \\times 0{,}4 \\times 0{,}3$ մ բաքը։ Որքա՞ն ժամանակում է այն լցվում րոպեում $2$ լիտր արագությամբ։

### Պատասխաններ

1. $V = 36$, $d = 7$, $S = 72$։ 2. $a = 5$, $d = 5\\sqrt3$, $S = 150$։ 3. $c = 2$, $V = 32$։ 4. $V = \\sqrt{12 \\cdot 18 \\cdot 24} = 72$, կողերը՝ $3$, $4$, $6$։ 5. $a = 2\\sqrt3$, $V = 24\\sqrt3$։ 6. Հիմքի անկյունագիծը $13$ է, բարձրությունը՝ $c = 13$, $V = 780$։ 7. $V = 27 + 9 = 36$, $S = 54 + 12 = 66$։ 8. $60$ լիտր, $30$ րոպե։`,
        ru: `## Что такое объём

Каждому телу, изучаемому в этой главе, сопоставляется положительное число, его **объём**, измеряемый в кубических единицах (см³, м³, литры: $1$ литр $= 1$ дм³ $= 1000$ см³). Объём имеет два основных свойства.

1. **Равные тела имеют равные объёмы.** (Тела равны, если одно можно совместить с другим движением.)
2. **Аддитивность.** Если тело составлено из нескольких неперекрывающихся тел, его объём равен сумме их объёмов.

Единица объёма: куб с ребром $1$. Вместе со свойствами выше это определяет объём любого тела школьной геометрии. Следствие аддитивности: если одно тело содержится в другом, его объём не больше.

## Объём прямоугольного параллелепипеда

**Теорема.** Объём прямоугольного параллелепипеда с измерениями $a$, $b$, $c$ равен
$$V = abc.$$

**Доказательство (набросок).** При целых $a$, $b$, $c$ параллелепипед разбивается на $abc$ единичных кубов, поэтому по аддитивности $V = abc$. При рациональных измерениях, скажем $a = \\dfrac{p}{n}$, $b = \\dfrac{q}{n}$, $c = \\dfrac{r}{n}$, куб с ребром $\\dfrac1n$ имеет объём $\\dfrac{1}{n^3}$ (единичный куб составлен из $n^3$ таких кубов), а параллелепипед составлен из $pqr$ таких кубов: $V = \\dfrac{pqr}{n^3} = abc$. При иррациональных измерениях приближаем параллелепипед изнутри и снаружи параллелепипедами с рациональными рёбрами; оба объёма стремятся к $abc$, а $V$ зажат между ними. $\\blacksquare$

**Следствия.**
- Куб с ребром $a$: $V = a^3$.
- $V = S_{\\text{осн}} \\cdot h$, так как $ab$ есть площадь основания, а $c$ — высота.
- Объём прямоугольного параллелепипеда равен произведению площади грани на перпендикулярное ей ребро (за основание можно взять любую грань).

Напомним другие формулы для того же тела: диагональ $d^2 = a^2 + b^2 + c^2$ и полная поверхность $S = 2(ab + bc + ca)$.

**Пример 1.** Коробка имеет измерения $3 \\times 4 \\times 5$: $V = 60$, $d = \\sqrt{9 + 16 + 25} = 5\\sqrt2$, $S = 2(12 + 20 + 15) = 94$.

**Пример 2.** Объём куба равен $64$: ребро $4$, поверхность $6 \\cdot 16 = 96$, диагональ $4\\sqrt3$.

**Пример 3.** Основание прямоугольного параллелепипеда — квадрат со стороной $6$, диагональ параллелепипеда равна $9$. Тогда $c^2 = 81 - 36 - 36 = 9$, $c = 3$, $V = 6 \\cdot 6 \\cdot 3 = 108$.

**Пример 4.** Три грани, сходящиеся в вершине, имеют площади $6$, $10$, $15$. Тогда $ab = 6$, $bc = 10$, $ca = 15$, откуда $(abc)^2 = 6 \\cdot 10 \\cdot 15 = 900$ и $V = 30$. Рёбра: $a = \\dfrac{30}{10} = 3$, $b = 2$, $c = 5$.

**Пример 5.** Диагональ прямоугольного параллелепипеда равна $d$ и образует с двумя рёбрами из одной вершины углы $60°$ и $45°$. Эти рёбра равны $d\\cos 60° = \\dfrac d2$ и $d\\cos 45° = \\dfrac{d\\sqrt2}{2}$, а для третьего ребра $c^2 = d^2 - \\dfrac{d^2}{4} - \\dfrac{d^2}{2} = \\dfrac{d^2}{4}$, так что $c = \\dfrac d2$ и $V = \\dfrac d2 \\cdot \\dfrac{d\\sqrt2}{2} \\cdot \\dfrac d2 = \\dfrac{d^3\\sqrt2}{8}$.

**Пример 6.** Г-образное тело составлено из двух прямоугольных параллелепипедов $2 \\times 2 \\times 6$ и $2 \\times 2 \\times 4$, склеенных по грани $2 \\times 2$. По аддитивности $V = 24 + 16 = 40$.

**Пример 7.** Прямоугольный бассейн $25 \\times 10$ м заполнен до глубины $1{,}8$ м. Объём воды $25 \\cdot 10 \\cdot 1{,}8 = 450$ м³ $= 450\\,000$ литров.

**Пример 8.** Куб с ребром $a$ имеет объём $a^3$ и поверхность $6a^2$; они численно равны, когда $a^3 = 6a^2$, то есть $a = 6$. Если ребро удвоить, поверхность увеличится в $4$ раза, а объём — в $8$ раз.

### Упражнения

1. Найдите объём, диагональ и поверхность прямоугольного параллелепипеда $2 \\times 3 \\times 6$.
2. Объём куба равен $125$. Найдите его ребро, диагональ и поверхность.
3. Основание прямоугольного параллелепипеда — квадрат со стороной $4$, диагональ параллелепипеда равна $6$. Найдите объём.
4. Грани при одной вершине имеют площади $12$, $18$, $24$. Найдите объём и рёбра.
5. Диагональ куба равна $6$. Найдите его объём.
6. Рёбра прямоугольного параллелепипеда $a = 5$, $b = 12$, а диагональ основания образует с диагональю параллелепипеда угол $45°$. Найдите объём.
7. Тело составлено из куба с ребром $3$ и поставленного на него параллелепипеда $3 \\times 3 \\times 1$. Найдите его объём и полную поверхность.
8. Сколько литров вмещает бак $0{,}5 \\times 0{,}4 \\times 0{,}3$ м? За сколько минут он наполнится при скорости $2$ литра в минуту?

### Ответы

1. $V = 36$, $d = 7$, $S = 72$. 2. $a = 5$, $d = 5\\sqrt3$, $S = 150$. 3. $c = 2$, $V = 32$. 4. $V = \\sqrt{12 \\cdot 18 \\cdot 24} = 72$; рёбра $3$, $4$, $6$. 5. $a = 2\\sqrt3$, $V = 24\\sqrt3$. 6. Диагональ основания $13$, высота $c = 13$, $V = 780$. 7. $V = 27 + 9 = 36$; $S = 54 + 12 = 66$. 8. $60$ литров; $30$ минут.`,
      },
      [
        q(t("The volume of a rectangular parallelepiped with dimensions a, b, c is…", "a, b, c չափումներով ուղղանկյուն զուգահեռանիստի ծավալը…", "Объём прямоугольного параллелепипеда с измерениями a, b, c равен…"), [t("abc", "abc", "abc"), t("2(ab + bc + ca)", "2(ab + bc + ca)", "2(ab + bc + ca)"), t("a + b + c", "a + b + c", "a + b + c")], 0),
        q(t("A cube has volume 27. Its edge is…", "Խորանարդի ծավալը 27 է։ Նրա կողը…", "Объём куба равен 27. Его ребро…"), [t("9", "9", "9"), t("3", "3", "3"), t("4,5", "4,5", "4,5")], 1),
        q(t("A body is composed of two non-overlapping bodies with volumes 5 and 7. Its volume is…", "Մարմինը կազմված է 5 և 7 ծավալներով երկու չհատվող մարմնից։ Նրա ծավալը…", "Тело составлено из двух неперекрывающихся тел объёмами 5 и 7. Его объём…"), [t("12", "12", "12"), t("35", "35", "35"), t("cannot be determined", "անհնար է որոշել", "нельзя определить")], 0),
        q(t("The faces at one vertex of a rectangular parallelepiped have areas 2, 3, 6. Its volume is…", "Ուղղանկյուն զուգահեռանիստի մի գագաթի նիստերի մակերեսներն են 2, 3, 6։ Ծավալը…", "Грани при одной вершине прямоугольного параллелепипеда имеют площади 2, 3, 6. Объём равен…"), [t("11", "11", "11"), t("36", "36", "36"), t("6", "6", "6")], 2),
        q(t("If every edge of a cube is doubled, its volume is multiplied by…", "Եթե խորանարդի ամեն կողը կրկնապատկվի, ծավալը բազմապատկվում է…", "Если каждое ребро куба удвоить, объём умножится на…"), [t("2", "2", "2"), t("4", "4", "4"), t("8", "8", "8")], 2),
        q(t("1 litre equals…", "1 լիտրը հավասար է…", "1 литр равен…"), [t("100 cm³", "100 սմ³", "100 см³"), t("1000 cm³", "1000 սմ³", "1000 см³"), t("1 m³", "1 մ³", "1 м³")], 1),
      ],
    ),
    lesson(
      "volume-prism-cylinder",
      ["Volume of a prism and a cylinder", "Պրիզմայի և գլանի ծավալ", "Объём призмы и цилиндра"],
      {
        en: ["Prove the formula V = S·h for a right prism, starting from a right triangular prism", "Explain why a cylinder has volume V = πr²h by comparing it with inscribed and circumscribed prisms", "Solve problems on volumes of prisms, cylinders and bodies composed of them"],
        hy: ["Ապացուցել ուղիղ պրիզմայի V = S·h բանաձևը՝ սկսելով ուղիղ եռանկյուն պրիզմայից", "Բացատրել, թե ինչու գլանի ծավալը V = πr²h է՝ համեմատելով այն ներգծած և արտագծած պրիզմաների հետ", "Լուծել պրիզմաների, գլանների և դրանցից կազմված մարմինների ծավալների խնդիրներ"],
        ru: ["Доказывать формулу V = S·h для прямой призмы, начиная с прямой треугольной призмы", "Объяснять, почему объём цилиндра равен V = πr²h, сравнивая его со вписанными и описанными призмами", "Решать задачи об объёмах призм, цилиндров и составленных из них тел"],
      },
      {
        en: `## Volume of a right prism

**Theorem.** The volume of a right prism equals the product of the area of its base and its height:
$$V = S_{\\text{base}} \\cdot h.$$

**Proof.** *Step 1: a right triangular prism.* Let the base be a triangle $ABC$ and let the height be $h$. Complete the triangle to a parallelogram $ABDC$ by adding the vertex $D$; the right prism over the parallelogram consists of two right prisms over the triangles $ABC$ and $BDC$. These triangles are equal (they are symmetric about the midpoint of $BC$), so the prisms over them are equal and have equal volumes. If $ABC$ is a right triangle (legs $a$, $b$), the parallelogram is a rectangle and the big prism is a rectangular parallelepiped with volume $abh$, so $V = \\dfrac12 abh = S_{ABC} \\cdot h$. For an arbitrary triangle, drop the altitude from a vertex: the triangle is the sum or difference of two right triangles, and so is the prism.

*Step 2: any right prism.* Cut the base polygon into triangles by diagonals from one vertex. The prism splits into right triangular prisms with the same height $h$; by additivity $V = (S_1 + S_2 + \\dots) \\, h = S_{\\text{base}} \\cdot h$. $\\blacksquare$

The same formula holds for an **oblique** prism (proved in the next lesson with the integral), where $h$ is the distance between the planes of the bases.

## Volume of a cylinder

**Theorem.** The volume of a cylinder with base radius $r$ and height $h$ is
$$V = \\pi r^2 h.$$

**Idea of the proof.** Inscribe in the base circle a regular $n$-gon and circumscribe another one; build right prisms with height $h$ over them. The cylinder lies between the two prisms, so $S_n h \\le V \\le S_n' h$, where $S_n$ and $S_n'$ are the areas of the polygons. As $n \\to \\infty$ both areas tend to $\\pi r^2$, hence $V = \\pi r^2 h$. $\\blacksquare$

Both results are cases of one principle: for a right prism and a cylinder, **volume = base area × height**.

**Example 1.** A regular triangular prism has base side $4$ and height $5$: $S = \\dfrac{\\sqrt3}{4} \\cdot 16 = 4\\sqrt3$, $V = 20\\sqrt3$.

**Example 2.** A regular hexagonal prism has base side $2$ and height $3$: $S = \\dfrac{3\\sqrt3}{2} \\cdot 4 = 6\\sqrt3$, $V = 18\\sqrt3$.

**Example 3.** The base of a right prism is a rhombus with diagonals $6$ and $8$, and the height is $10$. $S = \\dfrac12 \\cdot 6 \\cdot 8 = 24$, $V = 240$. The side of the rhombus is $5$, so the lateral surface is $4 \\cdot 5 \\cdot 10 = 200$.

**Example 4.** A cylinder has $r = 3$, $h = 7$: $V = 63\\pi$. If the axial section is a square with side $6$, then $r = 3$, $h = 6$, $V = 54\\pi$.

**Example 5.** The lateral surface of a cylinder is $20\\pi$ and its height is $5$. Then $2\\pi r \\cdot 5 = 20\\pi$, $r = 2$, $V = 20\\pi$.

**Example 6.** A cylinder is inscribed in a cube with edge $a$ (bases inscribed in opposite faces): $r = \\dfrac a2$, $h = a$, $V = \\dfrac{\\pi a^3}{4}$, which is $\\dfrac{\\pi}{4} \\approx 0{,}785$ of the cube. A cylinder circumscribed about the cube has $r = \\dfrac{a\\sqrt2}{2}$, $V = \\dfrac{\\pi a^3}{2}$.

**Example 7.** A metal pipe has outer radius $5$ cm, inner radius $4$ cm and length $100$ cm. The metal volume is the difference of two cylinders: $\\pi(25 - 16) \\cdot 100 = 900\\pi \\approx 2827$ cm³.

**Example 8.** The base of a right prism is a right triangle with hypotenuse $10$ and a leg $6$; the lateral edge is $4$. The other leg is $8$, $S = 24$, $V = 96$. The largest lateral face is the rectangle $10 \\times 4$ of area $40$.

### Exercises

1. Find the volume of a regular quadrilateral prism with base side $3$ and height $7$.
2. The base of a right prism is a triangle with sides $5$, $5$, $6$; the height is $4$. Find the volume.
3. A regular hexagonal prism has base side $1$ and lateral edge $\\sqrt3$. Find the volume.
4. Find the volume of a cylinder with diameter $10$ and height $4$.
5. The axial section of a cylinder is a square of area $36$. Find the volume.
6. The lateral surface of a cylinder is $12\\pi$ and the radius is $2$. Find the volume.
7. A right prism has a rhombus base with side $5$ and one diagonal $6$; its volume is $240$. Find the height.
8. A cylinder with $r = 2$, $h = 6$ has a cylindrical hole of radius $1$ drilled along its axis. Find the volume of the remaining body.

### Answers

1. $63$. 2. $S = 12$, $V = 48$. 3. $S = \\dfrac{3\\sqrt3}{2}$, $V = \\dfrac92$. 4. $100\\pi$. 5. $r = 3$, $h = 6$, $V = 54\\pi$. 6. $h = 3$, $V = 12\\pi$. 7. Second diagonal $8$, $S = 24$, $h = 10$. 8. $\\pi(4 - 1) \\cdot 6 = 18\\pi$.`,
        hy: `## Ուղիղ պրիզմայի ծավալը

**Թեորեմ։** Ուղիղ պրիզմայի ծավալը հավասար է հիմքի մակերեսի և բարձրության արտադրյալին․
$$V = S_{\\text{հիմք}} \\cdot h$$

**Ապացույց։** *Քայլ 1․ ուղիղ եռանկյուն պրիզմա։* Թող հիմքը $ABC$ եռանկյունն է, բարձրությունը՝ $h$։ Եռանկյունը լրացնենք $ABDC$ զուգահեռագծի՝ ավելացնելով $D$ գագաթը․ զուգահեռագծի վրա կառուցված ուղիղ պրիզման կազմված է $ABC$ և $BDC$ եռանկյունների վրա կառուցված երկու ուղիղ պրիզմայից։ Այդ եռանկյունները հավասար են (դրանք համաչափ են $BC$-ի միջնակետի նկատմամբ), ուստի դրանց վրա կառուցված պրիզմաները հավասար են և ունեն հավասար ծավալներ։ Եթե $ABC$-ն ուղղանկյուն եռանկյուն է ($a$, $b$ էջերով), զուգահեռագիծն ուղղանկյուն է, իսկ մեծ պրիզման՝ ուղղանկյուն զուգահեռանիստ $abh$ ծավալով, ուստի $V = \\dfrac12 abh = S_{ABC} \\cdot h$։ Կամայական եռանկյան դեպքում գագաթից տանենք բարձրությունը․ եռանկյունն երկու ուղղանկյուն եռանկյան գումար կամ տարբերություն է, նույնը՝ պրիզման։

*Քայլ 2․ կամայական ուղիղ պրիզմա։* Հիմքի բազմանկյունը մի գագաթից տարված անկյունագծերով տրոհենք եռանկյունների։ Պրիզման տրոհվում է նույն $h$ բարձրությամբ ուղիղ եռանկյուն պրիզմաների․ ադիտիվությամբ $V = (S_1 + S_2 + \\dots) \\, h = S_{\\text{հիմք}} \\cdot h$։ $\\blacksquare$

Նույն բանաձևը ճիշտ է **թեք** պրիզմայի համար (ապացուցվում է հաջորդ դասին ինտեգրալով), որտեղ $h$-ը հիմքերի հարթությունների հեռավորությունն է։

## Գլանի ծավալը

**Թեորեմ։** $r$ հիմքի շառավղով և $h$ բարձրությամբ գլանի ծավալը
$$V = \\pi r^2 h$$

**Ապացույցի գաղափարը։** Հիմքի շրջանում ներգծենք կանոնավոր $n$-անկյուն և արտագծենք ևս մեկը․ դրանց վրա կառուցենք $h$ բարձրությամբ ուղիղ պրիզմաներ։ Գլանը գտնվում է երկու պրիզմաների միջև, ուստի $S_n h \\le V \\le S_n' h$, որտեղ $S_n$-ն ու $S_n'$-ը բազմանկյունների մակերեսներն են։ Երբ $n \\to \\infty$, երկու մակերեսներն էլ ձգտում են $\\pi r^2$-ի, հետևաբար $V = \\pi r^2 h$։ $\\blacksquare$

Երկու արդյունքներն էլ մեկ սկզբունքի դեպքեր են․ ուղիղ պրիզմայի և գլանի համար **ծավալ = հիմքի մակերես × բարձրություն**։

**Օրինակ 1։** Կանոնավոր եռանկյուն պրիզմայի հիմքի կողմը $4$ է, բարձրությունը՝ $5$․ $S = \\dfrac{\\sqrt3}{4} \\cdot 16 = 4\\sqrt3$, $V = 20\\sqrt3$։

**Օրինակ 2։** Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողմը $2$ է, բարձրությունը՝ $3$․ $S = \\dfrac{3\\sqrt3}{2} \\cdot 4 = 6\\sqrt3$, $V = 18\\sqrt3$։

**Օրինակ 3։** Ուղիղ պրիզմայի հիմքը $6$ և $8$ անկյունագծերով շեղանկյուն է, բարձրությունը՝ $10$։ $S = \\dfrac12 \\cdot 6 \\cdot 8 = 24$, $V = 240$։ Շեղանկյան կողմը $5$ է, ուստի կողմնային մակերևույթը $4 \\cdot 5 \\cdot 10 = 200$ է։

**Օրինակ 4։** Գլանի $r = 3$, $h = 7$․ $V = 63\\pi$։ Եթե առանցքային հատույթը $6$ կողմով քառակուսի է, ապա $r = 3$, $h = 6$, $V = 54\\pi$։

**Օրինակ 5։** Գլանի կողմնային մակերևույթը $20\\pi$ է, բարձրությունը՝ $5$։ Այդ դեպքում $2\\pi r \\cdot 5 = 20\\pi$, $r = 2$, $V = 20\\pi$։

**Օրինակ 6։** Գլանը ներգծված է $a$ կողով խորանարդում (հիմքերը ներգծված են հանդիպակաց նիստերում)․ $r = \\dfrac a2$, $h = a$, $V = \\dfrac{\\pi a^3}{4}$, որը խորանարդի $\\dfrac{\\pi}{4} \\approx 0{,}785$ մասն է։ Խորանարդին արտագծած գլանի $r = \\dfrac{a\\sqrt2}{2}$, $V = \\dfrac{\\pi a^3}{2}$։

**Օրինակ 7։** Մետաղյա խողովակի արտաքին շառավիղը $5$ սմ է, ներքինը՝ $4$ սմ, երկարությունը՝ $100$ սմ։ Մետաղի ծավալն երկու գլանի տարբերությունն է․ $\\pi(25 - 16) \\cdot 100 = 900\\pi \\approx 2827$ սմ³։

**Օրինակ 8։** Ուղիղ պրիզմայի հիմքը $10$ ներքնաձիգով և $6$ էջով ուղղանկյուն եռանկյուն է, կողմնային կողը՝ $4$։ Մյուս էջը $8$ է, $S = 24$, $V = 96$։ Ամենամեծ կողմնային նիստը $10 \\times 4$ ուղղանկյունն է՝ $40$ մակերեսով։

### Վարժություններ

1. Գտեք $3$ հիմքի կողմով և $7$ բարձրությամբ կանոնավոր քառանկյուն պրիզմայի ծավալը։
2. Ուղիղ պրիզմայի հիմքը $5$, $5$, $6$ կողմերով եռանկյուն է, բարձրությունը՝ $4$։ Գտեք ծավալը։
3. Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողմը $1$ է, կողմնային կողը՝ $\\sqrt3$։ Գտեք ծավալը։
4. Գտեք $10$ տրամագծով և $4$ բարձրությամբ գլանի ծավալը։
5. Գլանի առանցքային հատույթը $36$ մակերեսով քառակուսի է։ Գտեք ծավալը։
6. Գլանի կողմնային մակերևույթը $12\\pi$ է, շառավիղը՝ $2$։ Գտեք ծավալը։
7. Ուղիղ պրիզմայի հիմքը $5$ կողմով և $6$ անկյունագծով շեղանկյուն է, ծավալը՝ $240$։ Գտեք բարձրությունը։
8. $r = 2$, $h = 6$ գլանի առանցքի երկայնքով գայլիկոնված է $1$ շառավղով գլանաձև անցք։ Գտեք մնացած մարմնի ծավալը։

### Պատասխաններ

1. $63$։ 2. $S = 12$, $V = 48$։ 3. $S = \\dfrac{3\\sqrt3}{2}$, $V = \\dfrac92$։ 4. $100\\pi$։ 5. $r = 3$, $h = 6$, $V = 54\\pi$։ 6. $h = 3$, $V = 12\\pi$։ 7. Երկրորդ անկյունագիծը $8$ է, $S = 24$, $h = 10$։ 8. $\\pi(4 - 1) \\cdot 6 = 18\\pi$։`,
        ru: `## Объём прямой призмы

**Теорема.** Объём прямой призмы равен произведению площади основания на высоту:
$$V = S_{\\text{осн}} \\cdot h.$$

**Доказательство.** *Шаг 1: прямая треугольная призма.* Пусть основание — треугольник $ABC$, высота равна $h$. Достроим треугольник до параллелограмма $ABDC$, добавив вершину $D$; прямая призма над параллелограммом состоит из двух прямых призм над треугольниками $ABC$ и $BDC$. Эти треугольники равны (они симметричны относительно середины $BC$), поэтому призмы над ними равны и имеют равные объёмы. Если $ABC$ — прямоугольный треугольник (катеты $a$, $b$), параллелограмм является прямоугольником, а большая призма — прямоугольным параллелепипедом объёма $abh$, так что $V = \\dfrac12 abh = S_{ABC} \\cdot h$. Для произвольного треугольника опустим высоту из вершины: треугольник есть сумма или разность двух прямоугольных треугольников, и то же верно для призмы.

*Шаг 2: любая прямая призма.* Разрежем многоугольник основания диагоналями из одной вершины на треугольники. Призма разбивается на прямые треугольные призмы с той же высотой $h$; по аддитивности $V = (S_1 + S_2 + \\dots) \\, h = S_{\\text{осн}} \\cdot h$. $\\blacksquare$

Та же формула верна для **наклонной** призмы (доказывается на следующем уроке с помощью интеграла), где $h$ — расстояние между плоскостями оснований.

## Объём цилиндра

**Теорема.** Объём цилиндра с радиусом основания $r$ и высотой $h$ равен
$$V = \\pi r^2 h.$$

**Идея доказательства.** Впишем в окружность основания правильный $n$-угольник и опишем другой; построим над ними прямые призмы высоты $h$. Цилиндр лежит между двумя призмами, поэтому $S_n h \\le V \\le S_n' h$, где $S_n$ и $S_n'$ — площади многоугольников. При $n \\to \\infty$ обе площади стремятся к $\\pi r^2$, следовательно $V = \\pi r^2 h$. $\\blacksquare$

Оба результата — случаи одного принципа: для прямой призмы и цилиндра **объём = площадь основания × высота**.

**Пример 1.** Правильная треугольная призма имеет сторону основания $4$ и высоту $5$: $S = \\dfrac{\\sqrt3}{4} \\cdot 16 = 4\\sqrt3$, $V = 20\\sqrt3$.

**Пример 2.** Правильная шестиугольная призма имеет сторону основания $2$ и высоту $3$: $S = \\dfrac{3\\sqrt3}{2} \\cdot 4 = 6\\sqrt3$, $V = 18\\sqrt3$.

**Пример 3.** Основание прямой призмы — ромб с диагоналями $6$ и $8$, высота $10$. $S = \\dfrac12 \\cdot 6 \\cdot 8 = 24$, $V = 240$. Сторона ромба равна $5$, поэтому боковая поверхность $4 \\cdot 5 \\cdot 10 = 200$.

**Пример 4.** Цилиндр с $r = 3$, $h = 7$: $V = 63\\pi$. Если осевое сечение — квадрат со стороной $6$, то $r = 3$, $h = 6$, $V = 54\\pi$.

**Пример 5.** Боковая поверхность цилиндра равна $20\\pi$, высота $5$. Тогда $2\\pi r \\cdot 5 = 20\\pi$, $r = 2$, $V = 20\\pi$.

**Пример 6.** Цилиндр вписан в куб с ребром $a$ (основания вписаны в противоположные грани): $r = \\dfrac a2$, $h = a$, $V = \\dfrac{\\pi a^3}{4}$, то есть $\\dfrac{\\pi}{4} \\approx 0{,}785$ объёма куба. Цилиндр, описанный около куба, имеет $r = \\dfrac{a\\sqrt2}{2}$, $V = \\dfrac{\\pi a^3}{2}$.

**Пример 7.** Металлическая труба имеет внешний радиус $5$ см, внутренний $4$ см и длину $100$ см. Объём металла — разность двух цилиндров: $\\pi(25 - 16) \\cdot 100 = 900\\pi \\approx 2827$ см³.

**Пример 8.** Основание прямой призмы — прямоугольный треугольник с гипотенузой $10$ и катетом $6$; боковое ребро $4$. Второй катет $8$, $S = 24$, $V = 96$. Наибольшая боковая грань — прямоугольник $10 \\times 4$ площади $40$.

### Упражнения

1. Найдите объём правильной четырёхугольной призмы со стороной основания $3$ и высотой $7$.
2. Основание прямой призмы — треугольник со сторонами $5$, $5$, $6$; высота $4$. Найдите объём.
3. Правильная шестиугольная призма имеет сторону основания $1$ и боковое ребро $\\sqrt3$. Найдите объём.
4. Найдите объём цилиндра с диаметром $10$ и высотой $4$.
5. Осевое сечение цилиндра — квадрат площади $36$. Найдите объём.
6. Боковая поверхность цилиндра равна $12\\pi$, радиус $2$. Найдите объём.
7. Основание прямой призмы — ромб со стороной $5$ и одной диагональю $6$; объём равен $240$. Найдите высоту.
8. В цилиндре с $r = 2$, $h = 6$ вдоль оси просверлено цилиндрическое отверстие радиуса $1$. Найдите объём оставшегося тела.

### Ответы

1. $63$. 2. $S = 12$, $V = 48$. 3. $S = \\dfrac{3\\sqrt3}{2}$, $V = \\dfrac92$. 4. $100\\pi$. 5. $r = 3$, $h = 6$, $V = 54\\pi$. 6. $h = 3$, $V = 12\\pi$. 7. Вторая диагональ $8$, $S = 24$, $h = 10$. 8. $\\pi(4 - 1) \\cdot 6 = 18\\pi$.`,
      },
      [
        q(t("The volume of a right prism equals…", "Ուղիղ պրիզմայի ծավալը հավասար է…", "Объём прямой призмы равен…"), [t("base area × height", "հիմքի մակերես × բարձրություն", "площадь основания × высота"), t("base perimeter × height", "հիմքի պարագիծ × բարձրություն", "периметр основания × высота"), t("1/3 of base area × height", "հիմքի մակերես × բարձրության 1/3-ը", "1/3 площади основания × высота")], 0),
        q(t("A cylinder has r = 2 and h = 5. Its volume is…", "Գլանի r = 2, h = 5։ Ծավալը…", "Цилиндр с r = 2 и h = 5 имеет объём…"), [t("10π", "10π", "10π"), t("20π", "20π", "20π"), t("40π", "40π", "40π")], 1),
        q(t("A regular quadrilateral prism has base side 2 and height 5. Its volume is…", "Կանոնավոր քառանկյուն պրիզմայի հիմքի կողմը 2 է, բարձրությունը՝ 5։ Ծավալը…", "Правильная четырёхугольная призма со стороной основания 2 и высотой 5 имеет объём…"), [t("10", "10", "10"), t("20", "20", "20"), t("40", "40", "40")], 1),
        q(t("The axial section of a cylinder is a square with side 4. Its volume is…", "Գլանի առանցքային հատույթը 4 կողմով քառակուսի է։ Ծավալը…", "Осевое сечение цилиндра — квадрат со стороной 4. Его объём…"), [t("16π", "16π", "16π"), t("64π", "64π", "64π"), t("32π", "32π", "32π")], 0),
        q(t("If the radius of a cylinder is doubled and the height is kept, the volume…", "Եթե գլանի շառավիղը կրկնապատկվի, իսկ բարձրությունը պահպանվի, ծավալը…", "Если радиус цилиндра удвоить, а высоту сохранить, объём…"), [t("doubles", "կկրկնապատկվի", "удвоится"), t("is multiplied by 4", "կբազմապատկվի 4-ով", "увеличится в 4 раза"), t("is multiplied by 8", "կբազմապատկվի 8-ով", "увеличится в 8 раз")], 1),
        q(t("The volume of a cylinder is proved by comparing it with…", "Գլանի ծավալն ապացուցվում է՝ համեմատելով այն…", "Объём цилиндра доказывается сравнением его с…"), [t("inscribed and circumscribed prisms", "ներգծած և արտագծած պրիզմաների հետ", "вписанными и описанными призмами"), t("a ball of the same radius", "նույն շառավղով գնդի հետ", "шаром того же радиуса"), t("a cone of the same height", "նույն բարձրությամբ կոնի հետ", "конусом той же высоты")], 0),
      ],
    ),
    lesson(
      "volume-integral",
      ["Volume via the integral; oblique prism", "Ծավալ ինտեգրալով, թեք պրիզմա", "Вычисление объёмов с помощью интеграла; наклонная призма"],
      {
        en: ["Explain the basic integral formula V = ∫S(x)dx through cross-sections perpendicular to an axis", "Prove that the volume of an oblique prism equals the base area times the height, and also the area of a perpendicular section times the lateral edge", "Compute volumes of simple bodies with known cross-sections, including bodies of revolution with V = π∫f²(x)dx"],
        hy: ["Բացատրել V = ∫S(x)dx հիմնական ինտեգրալային բանաձևն առանցքին ուղղահայաց հատույթների միջոցով", "Ապացուցել, որ թեք պրիզմայի ծավալը հավասար է հիմքի մակերեսի և բարձրության արտադրյալին, ինչպես և ուղղահայաց հատույթի մակերեսի և կողմնային կողի արտադրյալին", "Հաշվել հայտնի հատույթներով պարզ մարմինների ծավալներ, այդ թվում պտտման մարմինների՝ V = π∫f²(x)dx բանաձևով"],
        ru: ["Объяснять основную формулу объёма V = ∫S(x)dx через сечения, перпендикулярные оси", "Доказывать, что объём наклонной призмы равен произведению площади основания на высоту, а также произведению площади перпендикулярного сечения на боковое ребро", "Вычислять объёмы простых тел с известными сечениями, в том числе тел вращения по формуле V = π∫f²(x)dx"],
      },
      {
        en: `## The basic integral formula

Place a body between the planes $x = a$ and $x = b$ perpendicular to the axis $Ox$, and let $S(x)$ be the area of the cross-section by the plane through the point $x$ perpendicular to the axis. Cut the segment $[a; b]$ into $n$ small pieces of length $\\Delta x$. Over each piece the body is approximately a thin cylinder-like slab of volume $S(x_i)\\,\\Delta x$, so
$$V \\approx \\sum S(x_i)\\,\\Delta x, \\qquad V = \\int_a^b S(x)\\,dx.$$

This is the **basic formula for volumes**. For a right prism or a cylinder $S(x) = S$ is constant and $V = S(b - a) = Sh$, which agrees with the previous lesson.

**Consequence (Cavalieri's principle).** Two bodies between the same two parallel planes whose sections by every plane parallel to them have equal areas have equal volumes.

## Volume of an oblique prism

**Theorem.** The volume of an oblique prism equals the product of the area of its base and its height (the distance between the planes of the bases): $V = S_{\\text{base}} \\cdot h$.

**Proof.** Direct the axis $Ox$ perpendicular to the bases, with the base planes at $x = 0$ and $x = h$. Every section by a plane $x = \\text{const}$ is a polygon obtained from the base by a parallel translation along the lateral edge, so $S(x) = S_{\\text{base}}$ for all $x$, and $V = \\int_0^h S_{\\text{base}}\\,dx = S_{\\text{base}} \\cdot h$. $\\blacksquare$

**Second formula.** Cut the prism by a plane perpendicular to the lateral edge; the section has area $S_\\perp$, and the lateral edge is $\\ell$. Then
$$V = S_\\perp \\cdot \\ell.$$
Indeed, the part of the prism cut off below the perpendicular section can be moved up by the translation along the lateral edge by $\\ell$; the result is a right prism with base $S_\\perp$ and height $\\ell$. (Equivalently, take $Ox$ along the lateral edge.)

## Bodies of revolution

If the region under the graph of $y = f(x) \\ge 0$, $a \\le x \\le b$, is rotated about $Ox$, every cross-section is a disc of radius $f(x)$, so $S(x) = \\pi f^2(x)$ and
$$V = \\pi \\int_a^b f^2(x)\\,dx.$$

**Example 1.** A cone with height $h$ and base radius $r$ is obtained by rotating the segment $y = \\dfrac rh x$, $0 \\le x \\le h$. $V = \\pi \\displaystyle\\int_0^h \\dfrac{r^2}{h^2}x^2\\,dx = \\pi \\dfrac{r^2}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13 \\pi r^2 h$.

**Example 2.** The region under $y = \\sqrt x$ on $[0; 4]$ is rotated about $Ox$. $V = \\pi \\displaystyle\\int_0^4 x\\,dx = \\pi \\cdot \\dfrac{16}{2} = 8\\pi$.

**Example 3.** A ball of radius $R$ is the rotation of the half-disc $y = \\sqrt{R^2 - x^2}$, $-R \\le x \\le R$: $V = \\pi \\displaystyle\\int_{-R}^{R} (R^2 - x^2)\\,dx = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3$. (Details in the last lesson.)

**Example 4.** An oblique prism has a base of area $12$ and lateral edge $10$ inclined at $30°$ to the base plane. The height is $10 \\sin 30° = 5$ and $V = 60$. If instead the perpendicular section has area $6$, then $V = 6 \\cdot 10 = 60$ as well.

**Example 5.** The lateral edge of an oblique triangular prism is $8$, and the perpendicular section is a triangle with sides $3$, $4$, $5$: $S_\\perp = 6$, $V = 48$.

**Example 6.** In an oblique parallelepiped the base is a $4 \\times 5$ rectangle and the lateral edge $6$ makes a $60°$ angle with the base: $h = 6 \\cdot \\dfrac{\\sqrt3}{2} = 3\\sqrt3$, $V = 20 \\cdot 3\\sqrt3 = 60\\sqrt3$.

**Example 7.** A body between $x = 0$ and $x = 3$ has square cross-sections with side $x$: $S(x) = x^2$ and $V = \\displaystyle\\int_0^3 x^2\\,dx = 9$. This is a pyramid with a $3 \\times 3$ square base and height $3$: $\\dfrac13 \\cdot 9 \\cdot 3 = 9$, as it should be.

**Example 8.** The region between $y = x^2$ and the axis on $[0; 1]$ is rotated about $Ox$: $V = \\pi \\displaystyle\\int_0^1 x^4\\,dx = \\dfrac{\\pi}{5}$.

### Exercises

1. The cross-sections of a body perpendicular to $Ox$ on $[0; 2]$ are squares with side $2x$. Find the volume.
2. Find the volume of the body obtained by rotating the region under $y = x$ on $[0; 3]$ about $Ox$. Compare it with the cone formula.
3. The region under $y = 2\\sqrt x$ on $[0; 1]$ is rotated about $Ox$. Find the volume.
4. An oblique prism has base area $15$ and lateral edge $8$ inclined at $45°$ to the base. Find the volume.
5. The perpendicular section of an oblique prism is a square with side $3$ and the lateral edge is $7$. Find the volume.
6. The base of an oblique parallelepiped is a rhombus with diagonals $6$ and $10$; the lateral edge $4$ makes a $60°$ angle with the base plane. Find the volume.
7. The cross-sections of a body on $[0; 4]$ are discs of radius $\\sqrt x$. Find the volume.
8. The region under $y = \\cos x$ on $[0; \\pi/2]$ is rotated about $Ox$. Find the volume. (Use $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$.)

### Answers

1. $\\displaystyle\\int_0^2 4x^2\\,dx = \\dfrac{32}{3}$. 2. $\\pi \\displaystyle\\int_0^3 x^2\\,dx = 9\\pi$; a cone with $r = h = 3$: $\\dfrac13\\pi \\cdot 9 \\cdot 3 = 9\\pi$. 3. $\\pi \\displaystyle\\int_0^1 4x\\,dx = 2\\pi$. 4. $h = 4\\sqrt2$, $V = 60\\sqrt2$. 5. $63$. 6. $S = 30$, $h = 2\\sqrt3$, $V = 60\\sqrt3$. 7. $\\pi \\displaystyle\\int_0^4 x\\,dx = 8\\pi$. 8. $\\pi \\displaystyle\\int_0^{\\pi/2} \\dfrac{1 + \\cos 2x}{2}\\,dx = \\dfrac{\\pi^2}{4}$.`,
        hy: `## Հիմնական ինտեգրալային բանաձևը

Մարմինը տեղադրենք $Ox$ առանցքին ուղղահայաց $x = a$ և $x = b$ հարթությունների միջև, և թող $S(x)$-ը $x$ կետով անցնող, առանցքին ուղղահայաց հարթությամբ հատույթի մակերեսն է։ $[a; b]$ հատվածը տրոհենք $\\Delta x$ երկարությամբ $n$ փոքր մասի։ Ամեն մասի վրա մարմինը մոտավորապես $S(x_i)\\,\\Delta x$ ծավալով բարակ գլանանման շերտ է, ուստի
$$V \\approx \\sum S(x_i)\\,\\Delta x, \\qquad V = \\int_a^b S(x)\\,dx$$

Սա **ծավալների հիմնական բանաձևն** է։ Ուղիղ պրիզմայի կամ գլանի համար $S(x) = S$ հաստատուն է և $V = S(b - a) = Sh$, ինչը համընկնում է նախորդ դասի արդյունքին։

**Հետևանք (Կավալիերիի սկզբունք)։** Նույն երկու զուգահեռ հարթությունների միջև գտնվող երկու մարմիններ, որոնց հատույթները դրանց զուգահեռ ամեն հարթությամբ ունեն հավասար մակերեսներ, հավասար ծավալներ ունեն։

## Թեք պրիզմայի ծավալը

**Թեորեմ։** Թեք պրիզմայի ծավալը հավասար է հիմքի մակերեսի և բարձրության (հիմքերի հարթությունների հեռավորության) արտադրյալին․ $V = S_{\\text{հիմք}} \\cdot h$։

**Ապացույց։** $Ox$ առանցքն ուղղենք հիմքերին ուղղահայաց, հիմքերի հարթությունները՝ $x = 0$ և $x = h$։ $x = \\text{const}$ հարթությամբ ամեն հատույթ բազմանկյուն է, որը հիմքից ստացվում է կողմնային կողի երկայնքով զուգահեռ տեղափոխությամբ, ուստի $S(x) = S_{\\text{հիմք}}$ բոլոր $x$-երի համար, և $V = \\int_0^h S_{\\text{հիմք}}\\,dx = S_{\\text{հիմք}} \\cdot h$։ $\\blacksquare$

**Երկրորդ բանաձև։** Պրիզման հատենք կողմնային կողին ուղղահայաց հարթությամբ․ հատույթի մակերեսը $S_\\perp$ է, կողմնային կողը՝ $\\ell$։ Այդ դեպքում
$$V = S_\\perp \\cdot \\ell$$
Իրոք, ուղղահայաց հատույթից ներքև կտրված պրիզմայի մասը կարելի է վեր տեղափոխել կողմնային կողի երկայնքով $\\ell$-ով․ ստացվում է ուղիղ պրիզմա $S_\\perp$ հիմքով և $\\ell$ բարձրությամբ։ (Համարժեք ձևով՝ $Ox$-ը վերցնենք կողմնային կողի երկայնքով։)

## Պտտման մարմիններ

Եթե $y = f(x) \\ge 0$, $a \\le x \\le b$ գրաֆիկի տակի տիրույթը պտտվում է $Ox$-ի շուրջ, ամեն հատույթ $f(x)$ շառավղով շրջան է, ուստի $S(x) = \\pi f^2(x)$ և
$$V = \\pi \\int_a^b f^2(x)\\,dx$$

**Օրինակ 1։** $h$ բարձրությամբ և $r$ հիմքի շառավղով կոնը ստացվում է $y = \\dfrac rh x$, $0 \\le x \\le h$ հատվածի պտտումով։ $V = \\pi \\displaystyle\\int_0^h \\dfrac{r^2}{h^2}x^2\\,dx = \\pi \\dfrac{r^2}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13 \\pi r^2 h$։

**Օրինակ 2։** $[0; 4]$-ում $y = \\sqrt x$-ի տակի տիրույթը պտտվում է $Ox$-ի շուրջ։ $V = \\pi \\displaystyle\\int_0^4 x\\,dx = \\pi \\cdot \\dfrac{16}{2} = 8\\pi$։

**Օրինակ 3։** $R$ շառավղով գունդը $y = \\sqrt{R^2 - x^2}$, $-R \\le x \\le R$ կիսաշրջանի պտտումն է․ $V = \\pi \\displaystyle\\int_{-R}^{R} (R^2 - x^2)\\,dx = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3$։ (Մանրամասները՝ վերջին դասին։)

**Օրինակ 4։** Թեք պրիզմայի հիմքի մակերեսը $12$ է, կողմնային կողը՝ $10$, որը հիմքի հարթության հետ կազմում է $30°$։ Բարձրությունը $10 \\sin 30° = 5$ է և $V = 60$։ Եթե փոխարենն ուղղահայաց հատույթի մակերեսը $6$ է, ապա նույնպես $V = 6 \\cdot 10 = 60$։

**Օրինակ 5։** Թեք եռանկյուն պրիզմայի կողմնային կողը $8$ է, ուղղահայաց հատույթը՝ $3$, $4$, $5$ կողմերով եռանկյուն․ $S_\\perp = 6$, $V = 48$։

**Օրինակ 6։** Թեք զուգահեռանիստի հիմքը $4 \\times 5$ ուղղանկյուն է, $6$ կողմնային կողը հիմքի հետ կազմում է $60°$․ $h = 6 \\cdot \\dfrac{\\sqrt3}{2} = 3\\sqrt3$, $V = 20 \\cdot 3\\sqrt3 = 60\\sqrt3$։

**Օրինակ 7։** $x = 0$ և $x = 3$ միջև մարմնի հատույթները $x$ կողմով քառակուսիներ են․ $S(x) = x^2$ և $V = \\displaystyle\\int_0^3 x^2\\,dx = 9$։ Սա $3 \\times 3$ քառակուսի հիմքով և $3$ բարձրությամբ բուրգ է․ $\\dfrac13 \\cdot 9 \\cdot 3 = 9$, ինչպես և պետք է։

**Օրինակ 8։** $[0; 1]$-ում $y = x^2$-ի և առանցքի միջև տիրույթը պտտվում է $Ox$-ի շուրջ․ $V = \\pi \\displaystyle\\int_0^1 x^4\\,dx = \\dfrac{\\pi}{5}$։

### Վարժություններ

1. $[0; 2]$-ում մարմնի $Ox$-ին ուղղահայաց հատույթները $2x$ կողմով քառակուսիներ են։ Գտեք ծավալը։
2. Գտեք $[0; 3]$-ում $y = x$-ի տակի տիրույթի $Ox$-ի շուրջ պտտումով ստացված մարմնի ծավալը։ Համեմատեք կոնի բանաձևի հետ։
3. $[0; 1]$-ում $y = 2\\sqrt x$-ի տակի տիրույթը պտտվում է $Ox$-ի շուրջ։ Գտեք ծավալը։
4. Թեք պրիզմայի հիմքի մակերեսը $15$ է, $8$ կողմնային կողը հիմքի հետ կազմում է $45°$։ Գտեք ծավալը։
5. Թեք պրիզմայի ուղղահայաց հատույթը $3$ կողմով քառակուսի է, կողմնային կողը՝ $7$։ Գտեք ծավալը։
6. Թեք զուգահեռանիստի հիմքը $6$ և $10$ անկյունագծերով շեղանկյուն է, $4$ կողմնային կողը հիմքի հարթության հետ կազմում է $60°$։ Գտեք ծավալը։
7. $[0; 4]$-ում մարմնի հատույթները $\\sqrt x$ շառավղով շրջաններ են։ Գտեք ծավալը։
8. $[0; \\pi/2]$-ում $y = \\cos x$-ի տակի տիրույթը պտտվում է $Ox$-ի շուրջ։ Գտեք ծավալը։ (Օգտվեք $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$ բանաձևից։)

### Պատասխաններ

1. $\\displaystyle\\int_0^2 4x^2\\,dx = \\dfrac{32}{3}$։ 2. $\\pi \\displaystyle\\int_0^3 x^2\\,dx = 9\\pi$, կոն $r = h = 3$․ $\\dfrac13\\pi \\cdot 9 \\cdot 3 = 9\\pi$։ 3. $\\pi \\displaystyle\\int_0^1 4x\\,dx = 2\\pi$։ 4. $h = 4\\sqrt2$, $V = 60\\sqrt2$։ 5. $63$։ 6. $S = 30$, $h = 2\\sqrt3$, $V = 60\\sqrt3$։ 7. $\\pi \\displaystyle\\int_0^4 x\\,dx = 8\\pi$։ 8. $\\pi \\displaystyle\\int_0^{\\pi/2} \\dfrac{1 + \\cos 2x}{2}\\,dx = \\dfrac{\\pi^2}{4}$։`,
        ru: `## Основная формула объёма

Поместим тело между плоскостями $x = a$ и $x = b$, перпендикулярными оси $Ox$, и пусть $S(x)$ — площадь сечения плоскостью, проходящей через точку $x$ перпендикулярно оси. Разобьём отрезок $[a; b]$ на $n$ малых частей длины $\\Delta x$. Над каждой частью тело приближённо является тонким цилиндроподобным слоем объёма $S(x_i)\\,\\Delta x$, поэтому
$$V \\approx \\sum S(x_i)\\,\\Delta x, \\qquad V = \\int_a^b S(x)\\,dx.$$

Это **основная формула объёмов**. Для прямой призмы или цилиндра $S(x) = S$ постоянна и $V = S(b - a) = Sh$, что согласуется с предыдущим уроком.

**Следствие (принцип Кавальери).** Два тела, заключённые между одними и теми же параллельными плоскостями, сечения которых любой параллельной им плоскостью имеют равные площади, имеют равные объёмы.

## Объём наклонной призмы

**Теорема.** Объём наклонной призмы равен произведению площади основания на высоту (расстояние между плоскостями оснований): $V = S_{\\text{осн}} \\cdot h$.

**Доказательство.** Направим ось $Ox$ перпендикулярно основаниям, плоскости оснований: $x = 0$ и $x = h$. Каждое сечение плоскостью $x = \\text{const}$ — многоугольник, полученный из основания параллельным переносом вдоль бокового ребра, поэтому $S(x) = S_{\\text{осн}}$ при всех $x$, и $V = \\int_0^h S_{\\text{осн}}\\,dx = S_{\\text{осн}} \\cdot h$. $\\blacksquare$

**Вторая формула.** Рассечём призму плоскостью, перпендикулярной боковому ребру; площадь сечения $S_\\perp$, боковое ребро $\\ell$. Тогда
$$V = S_\\perp \\cdot \\ell.$$
Действительно, часть призмы, отсечённую ниже перпендикулярного сечения, можно перенести вверх вдоль бокового ребра на $\\ell$; получится прямая призма с основанием $S_\\perp$ и высотой $\\ell$. (Равносильно: направить $Ox$ вдоль бокового ребра.)

## Тела вращения

Если область под графиком $y = f(x) \\ge 0$, $a \\le x \\le b$, вращается вокруг $Ox$, каждое сечение — круг радиуса $f(x)$, поэтому $S(x) = \\pi f^2(x)$ и
$$V = \\pi \\int_a^b f^2(x)\\,dx.$$

**Пример 1.** Конус с высотой $h$ и радиусом основания $r$ получается вращением отрезка $y = \\dfrac rh x$, $0 \\le x \\le h$. $V = \\pi \\displaystyle\\int_0^h \\dfrac{r^2}{h^2}x^2\\,dx = \\pi \\dfrac{r^2}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13 \\pi r^2 h$.

**Пример 2.** Область под $y = \\sqrt x$ на $[0; 4]$ вращается вокруг $Ox$. $V = \\pi \\displaystyle\\int_0^4 x\\,dx = \\pi \\cdot \\dfrac{16}{2} = 8\\pi$.

**Пример 3.** Шар радиуса $R$ — вращение полукруга $y = \\sqrt{R^2 - x^2}$, $-R \\le x \\le R$: $V = \\pi \\displaystyle\\int_{-R}^{R} (R^2 - x^2)\\,dx = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3$. (Подробности на последнем уроке.)

**Пример 4.** Наклонная призма имеет основание площади $12$ и боковое ребро $10$, наклонённое к плоскости основания под углом $30°$. Высота $10 \\sin 30° = 5$ и $V = 60$. Если же известно, что перпендикулярное сечение имеет площадь $6$, то также $V = 6 \\cdot 10 = 60$.

**Пример 5.** Боковое ребро наклонной треугольной призмы равно $8$, а перпендикулярное сечение — треугольник со сторонами $3$, $4$, $5$: $S_\\perp = 6$, $V = 48$.

**Пример 6.** В наклонном параллелепипеде основание — прямоугольник $4 \\times 5$, боковое ребро $6$ образует с основанием угол $60°$: $h = 6 \\cdot \\dfrac{\\sqrt3}{2} = 3\\sqrt3$, $V = 20 \\cdot 3\\sqrt3 = 60\\sqrt3$.

**Пример 7.** Тело между $x = 0$ и $x = 3$ имеет квадратные сечения со стороной $x$: $S(x) = x^2$ и $V = \\displaystyle\\int_0^3 x^2\\,dx = 9$. Это пирамида с квадратным основанием $3 \\times 3$ и высотой $3$: $\\dfrac13 \\cdot 9 \\cdot 3 = 9$, как и должно быть.

**Пример 8.** Область между $y = x^2$ и осью на $[0; 1]$ вращается вокруг $Ox$: $V = \\pi \\displaystyle\\int_0^1 x^4\\,dx = \\dfrac{\\pi}{5}$.

### Упражнения

1. Сечения тела, перпендикулярные $Ox$, на $[0; 2]$ — квадраты со стороной $2x$. Найдите объём.
2. Найдите объём тела, полученного вращением области под $y = x$ на $[0; 3]$ вокруг $Ox$. Сравните с формулой конуса.
3. Область под $y = 2\\sqrt x$ на $[0; 1]$ вращается вокруг $Ox$. Найдите объём.
4. Наклонная призма имеет площадь основания $15$ и боковое ребро $8$, наклонённое к основанию под углом $45°$. Найдите объём.
5. Перпендикулярное сечение наклонной призмы — квадрат со стороной $3$, боковое ребро $7$. Найдите объём.
6. Основание наклонного параллелепипеда — ромб с диагоналями $6$ и $10$; боковое ребро $4$ образует с плоскостью основания угол $60°$. Найдите объём.
7. Сечения тела на $[0; 4]$ — круги радиуса $\\sqrt x$. Найдите объём.
8. Область под $y = \\cos x$ на $[0; \\pi/2]$ вращается вокруг $Ox$. Найдите объём. (Используйте $\\cos^2 x = \\dfrac{1 + \\cos 2x}{2}$.)

### Ответы

1. $\\displaystyle\\int_0^2 4x^2\\,dx = \\dfrac{32}{3}$. 2. $\\pi \\displaystyle\\int_0^3 x^2\\,dx = 9\\pi$; конус с $r = h = 3$: $\\dfrac13\\pi \\cdot 9 \\cdot 3 = 9\\pi$. 3. $\\pi \\displaystyle\\int_0^1 4x\\,dx = 2\\pi$. 4. $h = 4\\sqrt2$, $V = 60\\sqrt2$. 5. $63$. 6. $S = 30$, $h = 2\\sqrt3$, $V = 60\\sqrt3$. 7. $\\pi \\displaystyle\\int_0^4 x\\,dx = 8\\pi$. 8. $\\pi \\displaystyle\\int_0^{\\pi/2} \\dfrac{1 + \\cos 2x}{2}\\,dx = \\dfrac{\\pi^2}{4}$.`,
      },
      [
        q(t("If S(x) is the area of the cross-section at x, the volume of the body between x = a and x = b is…", "Եթե S(x)-ը x կետում հատույթի մակերեսն է, x = a-ի և x = b-ի միջև մարմնի ծավալը…", "Если S(x) — площадь сечения в точке x, объём тела между x = a и x = b равен…"), [t("∫S(x)dx from a to b", "∫S(x)dx a-ից b", "∫S(x)dx от a до b"), t("S(b) − S(a)", "S(b) − S(a)", "S(b) − S(a)"), t("(b − a)·S(a)", "(b − a)·S(a)", "(b − a)·S(a)")], 0),
        q(t("The volume of an oblique prism equals…", "Թեք պրիզմայի ծավալը հավասար է…", "Объём наклонной призмы равен…"), [t("base area × lateral edge", "հիմքի մակերես × կողմնային կող", "площадь основания × боковое ребро"), t("base area × height", "հիմքի մակերես × բարձրություն", "площадь основания × высота"), t("perpendicular section area × height", "ուղղահայաց հատույթի մակերես × բարձրություն", "площадь перпендикулярного сечения × высота")], 1),
        q(t("The perpendicular section of an oblique prism has area 5 and the lateral edge is 4. The volume is…", "Թեք պրիզմայի ուղղահայաց հատույթի մակերեսը 5 է, կողմնային կողը՝ 4։ Ծավալը…", "Перпендикулярное сечение наклонной призмы имеет площадь 5, боковое ребро 4. Объём равен…"), [t("20", "20", "20"), t("9", "9", "9"), t("10", "10", "10")], 0),
        q(t("Rotating the region under y = f(x) on [a; b] about Ox gives the volume…", "[a; b]-ում y = f(x)-ի տակի տիրույթի Ox-ի շուրջ պտտումը տալիս է ծավալ…", "Вращение области под y = f(x) на [a; b] вокруг Ox даёт объём…"), [t("π∫f(x)dx", "π∫f(x)dx", "π∫f(x)dx"), t("π∫f²(x)dx", "π∫f²(x)dx", "π∫f²(x)dx"), t("2π∫f(x)dx", "2π∫f(x)dx", "2π∫f(x)dx")], 1),
        q(t("The cross-sections of a body on [0; 1] are squares with side x. Its volume is…", "[0; 1]-ում մարմնի հատույթները x կողմով քառակուսիներ են։ Ծավալը…", "Сечения тела на [0; 1] — квадраты со стороной x. Его объём…"), [t("1/2", "1/2", "1/2"), t("1/3", "1/3", "1/3"), t("1", "1", "1")], 1),
        q(t("Cavalieri's principle says that two bodies with equal-area sections by every plane parallel to the bases have…", "Կավալիերիի սկզբունքն ասում է, որ հիմքերին զուգահեռ ամեն հարթությամբ հավասար մակերեսի հատույթներ ունեցող երկու մարմիններ ունեն…", "Принцип Кавальери утверждает, что два тела с равными по площади сечениями любой плоскостью, параллельной основаниям, имеют…"), [t("equal volumes", "հավասար ծավալներ", "равные объёмы"), t("equal surfaces", "հավասար մակերևույթներ", "равные поверхности"), t("equal heights", "հավասար բարձրություններ", "равные высоты")], 0),
      ],
    ),
    lesson(
      "volume-pyramid-cone",
      ["Volume of a pyramid and a cone", "Բուրգի և կոնի ծավալ", "Объём пирамиды и конуса"],
      {
        en: ["Prove the formula V = ⅓Sh for a triangular pyramid using the integral and extend it to every pyramid and to the cone", "Derive the volume of a truncated pyramid and a truncated cone V = ⅓h(S₁ + √(S₁S₂) + S₂)", "Solve problems on volumes of regular pyramids, cones and bodies inscribed in or circumscribed about them"],
        hy: ["Ապացուցել եռանկյուն բուրգի V = ⅓Sh բանաձևն ինտեգրալով և տարածել այն ամեն բուրգի և կոնի վրա", "Արտածել հատած բուրգի և հատած կոնի V = ⅓h(S₁ + √(S₁S₂) + S₂) ծավալը", "Լուծել կանոնավոր բուրգերի, կոնների և դրանցում ներգծած կամ արտագծած մարմինների ծավալների խնդիրներ"],
        ru: ["Доказывать формулу V = ⅓Sh для треугольной пирамиды с помощью интеграла и распространять её на любую пирамиду и на конус", "Выводить объём усечённой пирамиды и усечённого конуса V = ⅓h(S₁ + √(S₁S₂) + S₂)", "Решать задачи об объёмах правильных пирамид, конусов и тел, вписанных в них или описанных около них"],
      },
      {
        en: `## Volume of a pyramid

**Theorem.** The volume of a pyramid equals one third of the product of the base area and the height:
$$V = \\dfrac13 S_{\\text{base}} \\cdot h.$$

**Proof.** Take the axis $Ox$ through the apex $O$ perpendicular to the base, so that the base lies in the plane $x = h$. The plane $x = t$ ($0 < t \\le h$) cuts the pyramid in a polygon similar to the base with ratio $\\dfrac th$ (a homothety with centre $O$), so its area is $S(t) = S \\cdot \\dfrac{t^2}{h^2}$. By the basic formula
$$V = \\int_0^h S\\dfrac{t^2}{h^2}\\,dt = \\dfrac{S}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13 Sh. \;\\blacksquare$$

The proof did not use the shape of the base, so it works for every pyramid; for a triangular pyramid it can also be done without the integral by cutting a triangular prism into three pyramids of equal volume.

**Corollaries.**
- Pyramids with equal bases and equal heights have equal volumes, wherever the apex is.
- Any face of a triangular pyramid can serve as the base: $S_1 h_1 = S_2 h_2$ for two faces and the heights dropped to them.

## Volume of a cone

**Theorem.** $V = \\dfrac13 \\pi r^2 h$ for a cone with base radius $r$ and height $h$.

The proof is the same: the section at distance $t$ from the apex is a disc of radius $\\dfrac rh t$, so $S(t) = \\pi r^2 \\dfrac{t^2}{h^2}$ and the integral gives $\\dfrac13 \\pi r^2 h$. (Alternatively, squeeze the cone between inscribed and circumscribed pyramids.)

## Truncated pyramid and cone

A truncated pyramid with bases $S_1$, $S_2$ and height $h$ is the difference of two pyramids. Writing the height of the small pyramid as $x$, similarity gives $\\dfrac{x}{x + h} = \\sqrt{\\dfrac{S_2}{S_1}}$, and after simplification
$$V = \\dfrac13 h\\left(S_1 + \\sqrt{S_1 S_2} + S_2\\right).$$
For a truncated cone with radii $R$ and $r$: $V = \\dfrac13 \\pi h\\left(R^2 + Rr + r^2\\right)$.

**Example 1.** A regular quadrilateral pyramid has base side $6$ and height $4$: $V = \\dfrac13 \\cdot 36 \\cdot 4 = 48$. Its lateral edge is $\\sqrt{16 + 18} = \\sqrt{34}$.

**Example 2.** A regular triangular pyramid has base side $6$ and lateral edge $5$. The circumradius of the base is $\\dfrac{6}{\\sqrt3} = 2\\sqrt3$, so $h = \\sqrt{25 - 12} = \\sqrt{13}$ and $V = \\dfrac13 \\cdot 9\\sqrt3 \\cdot \\sqrt{13} = 3\\sqrt{39}$.

**Example 3.** The pyramid $DABC$ has $DA \\perp$ the base, $DA = 6$, and the base is a right triangle with legs $3$ and $4$: $V = \\dfrac13 \\cdot 6 \\cdot 6 = 12$. Taking the face $DAB$ (legs $6$ and $3$, area $9$) as base, the height from $C$ is $\\dfrac{3V}{9} = 4$, the leg $BC$ indeed.

**Example 4.** A cone has $r = 3$ and generator $l = 5$: $h = 4$, $V = 12\\pi$. If the axial section is an equilateral triangle with side $4$: $r = 2$, $h = 2\\sqrt3$, $V = \\dfrac{8\\sqrt3}{3}\\pi$.

**Example 5.** A cone and a cylinder have the same base and the same height; the volume of the cone is one third of the cylinder's. If a cone and a cylinder of equal volumes have the same radius, the cone is three times as high.

**Example 6.** A truncated pyramid has square bases with sides $4$ and $2$ and height $3$: $V = \\dfrac13 \\cdot 3 \\cdot (16 + 8 + 4) = 28$. Check: the full pyramid has height $6$ and volume $\\dfrac13 \\cdot 16 \\cdot 6 = 32$, the cut-off top has volume $\\dfrac13 \\cdot 4 \\cdot 3 = 4$, $32 - 4 = 28$.

**Example 7.** A truncated cone has $R = 4$, $r = 1$, $h = 4$: $V = \\dfrac13 \\pi \\cdot 4 \\cdot (16 + 4 + 1) = 28\\pi$; the generator is $\\sqrt{16 + 9} = 5$.

**Example 8.** A cube with edge $a$ is cut by the plane through the ends of the three edges from one vertex; the corner pyramid has three mutually perpendicular edges $a$ and volume $\\dfrac13 \\cdot \\dfrac{a^2}{2} \\cdot a = \\dfrac{a^3}{6}$. Cutting off all $8$ corners through the midpoints of the edges removes $8 \\cdot \\dfrac{(a/2)^3}{6} = \\dfrac{a^3}{6}$, leaving $\\dfrac56 a^3$ (a cuboctahedron).

### Exercises

1. Find the volume of a regular quadrilateral pyramid with base side $4$ and height $6$.
2. A regular triangular pyramid has base side $2\\sqrt3$ and height $5$. Find the volume.
3. The lateral edge of a regular quadrilateral pyramid is $5$ and the base side is $\\sqrt{18}$. Find the volume.
4. Find the volume of a cone with $r = 6$ and $l = 10$.
5. The axial section of a cone is a right isosceles triangle with hypotenuse $8$. Find the volume.
6. A truncated pyramid has bases of areas $9$ and $4$ and height $6$. Find the volume.
7. A truncated cone has radii $5$ and $2$ and generator $5$. Find the volume.
8. The volume of a cone is $100\\pi$ and its height is $12$. Find the radius and the lateral area.

### Answers

1. $32$. 2. $S = 3\\sqrt3$, $V = 5\\sqrt3$. 3. Half-diagonal $3$, $h = 4$, $V = 24$. 4. $h = 8$, $V = 96\\pi$. 5. $r = h = 4$, $V = \\dfrac{64\\pi}{3}$. 6. $\\dfrac13 \\cdot 6 \\cdot (9 + 6 + 4) = 38$. 7. $h = 4$, $V = \\dfrac13 \\pi \\cdot 4 \\cdot (25 + 10 + 4) = 52\\pi$. 8. $r = 5$, $l = 13$, $S_{\\text{lat}} = 65\\pi$.`,
        hy: `## Բուրգի ծավալը

**Թեորեմ։** Բուրգի ծավալը հավասար է հիմքի մակերեսի և բարձրության արտադրյալի մեկ երրորդին․
$$V = \\dfrac13 S_{\\text{հիմք}} \\cdot h$$

**Ապացույց։** $Ox$ առանցքը տանենք $O$ գագաթով հիմքին ուղղահայաց, այնպես որ հիմքը գտնվի $x = h$ հարթությունում։ $x = t$ ($0 < t \\le h$) հարթությունը բուրգը հատում է հիմքին նման բազմանկյունով $\\dfrac th$ գործակցով ($O$ կենտրոնով հոմոթետիա), ուստի նրա մակերեսը $S(t) = S \\cdot \\dfrac{t^2}{h^2}$ է։ Հիմնական բանաձևով
$$V = \\int_0^h S\\dfrac{t^2}{h^2}\\,dt = \\dfrac{S}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13 Sh \;\\blacksquare$$

Ապացույցում հիմքի տեսքը չի օգտագործվել, ուստի այն աշխատում է ամեն բուրգի համար․ եռանկյուն բուրգի համար կարելի է անել նաև առանց ինտեգրալի՝ եռանկյուն պրիզման տրոհելով երեք հավասար ծավալի բուրգի։

**Հետևանքներ։**
- Հավասար հիմքերով և հավասար բարձրություններով բուրգերը հավասար ծավալներ ունեն, որտեղ էլ լինի գագաթը։
- Եռանկյուն բուրգի ցանկացած նիստ կարող է հիմք ծառայել․ $S_1 h_1 = S_2 h_2$ երկու նիստերի և դրանց տարված բարձրությունների համար։

## Կոնի ծավալը

**Թեորեմ։** $r$ հիմքի շառավղով և $h$ բարձրությամբ կոնի համար $V = \\dfrac13 \\pi r^2 h$։

Ապացույցը նույնն է․ գագաթից $t$ հեռավորության վրա հատույթը $\\dfrac rh t$ շառավղով շրջան է, ուստի $S(t) = \\pi r^2 \\dfrac{t^2}{h^2}$ և ինտեգրալը տալիս է $\\dfrac13 \\pi r^2 h$։ (Այլ կերպ՝ կոնը սեղմել ներգծած և արտագծած բուրգերի միջև։)

## Հատած բուրգ և կոն

$S_1$, $S_2$ հիմքերով և $h$ բարձրությամբ հատած բուրգն երկու բուրգի տարբերություն է։ Փոքր բուրգի բարձրությունը $x$ նշանակելով, նմանությունից $\\dfrac{x}{x + h} = \\sqrt{\\dfrac{S_2}{S_1}}$, և պարզեցնելուց հետո
$$V = \\dfrac13 h\\left(S_1 + \\sqrt{S_1 S_2} + S_2\\right)$$
$R$ և $r$ շառավիղներով հատած կոնի համար՝ $V = \\dfrac13 \\pi h\\left(R^2 + Rr + r^2\\right)$։

**Օրինակ 1։** Կանոնավոր քառանկյուն բուրգի հիմքի կողմը $6$ է, բարձրությունը՝ $4$․ $V = \\dfrac13 \\cdot 36 \\cdot 4 = 48$։ Կողմնային կողը $\\sqrt{16 + 18} = \\sqrt{34}$ է։

**Օրինակ 2։** Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $6$ է, կողմնային կողը՝ $5$։ Հիմքի արտագծած շրջանագծի շառավիղը $\\dfrac{6}{\\sqrt3} = 2\\sqrt3$ է, ուստի $h = \\sqrt{25 - 12} = \\sqrt{13}$ և $V = \\dfrac13 \\cdot 9\\sqrt3 \\cdot \\sqrt{13} = 3\\sqrt{39}$։

**Օրինակ 3։** $DABC$ բուրգում $DA \\perp$ հիմքին, $DA = 6$, հիմքը $3$ և $4$ էջերով ուղղանկյուն եռանկյուն է․ $V = \\dfrac13 \\cdot 6 \\cdot 6 = 12$։ Հիմք վերցնելով $DAB$ նիստը ($6$ և $3$ էջեր, մակերեսը $9$), $C$-ից բարձրությունը $\\dfrac{3V}{9} = 4$ է՝ իրոք $BC$ էջը։

**Օրինակ 4։** Կոնի $r = 3$, ծնորդը՝ $l = 5$․ $h = 4$, $V = 12\\pi$։ Եթե առանցքային հատույթը $4$ կողմով հավասարակողմ եռանկյուն է․ $r = 2$, $h = 2\\sqrt3$, $V = \\dfrac{8\\sqrt3}{3}\\pi$։

**Օրինակ 5։** Կոնն ու գլանը նույն հիմքն ու նույն բարձրությունն ունեն․ կոնի ծավալը գլանի ծավալի մեկ երրորդն է։ Եթե հավասար ծավալների կոնն ու գլանը նույն շառավիղն ունեն, կոնն երեք անգամ բարձր է։

**Օրինակ 6։** Հատած բուրգի հիմքերը $4$ և $2$ կողմերով քառակուսիներ են, բարձրությունը՝ $3$․ $V = \\dfrac13 \\cdot 3 \\cdot (16 + 8 + 4) = 28$։ Ստուգում․ լրիվ բուրգի բարձրությունը $6$ է, ծավալը՝ $\\dfrac13 \\cdot 16 \\cdot 6 = 32$, կտրված գագաթի ծավալը՝ $\\dfrac13 \\cdot 4 \\cdot 3 = 4$, $32 - 4 = 28$։

**Օրինակ 7։** Հատած կոնի $R = 4$, $r = 1$, $h = 4$․ $V = \\dfrac13 \\pi \\cdot 4 \\cdot (16 + 4 + 1) = 28\\pi$, ծնորդը՝ $\\sqrt{16 + 9} = 5$։

**Օրինակ 8։** $a$ կողով խորանարդը հատված է մի գագաթից դուրս եկող երեք կողերի ծայրերով անցնող հարթությամբ․ անկյունային բուրգն ունի երեք փոխուղղահայաց $a$ կողեր և $\\dfrac13 \\cdot \\dfrac{a^2}{2} \\cdot a = \\dfrac{a^3}{6}$ ծավալ։ Բոլոր $8$ անկյունները կողերի միջնակետերով կտրելը հեռացնում է $8 \\cdot \\dfrac{(a/2)^3}{6} = \\dfrac{a^3}{6}$, մնում է $\\dfrac56 a^3$ (խորանարդ-ութանիստ)։

### Վարժություններ

1. Գտեք $4$ հիմքի կողմով և $6$ բարձրությամբ կանոնավոր քառանկյուն բուրգի ծավալը։
2. Կանոնավոր եռանկյուն բուրգի հիմքի կողմը $2\\sqrt3$ է, բարձրությունը՝ $5$։ Գտեք ծավալը։
3. Կանոնավոր քառանկյուն բուրգի կողմնային կողը $5$ է, հիմքի կողմը՝ $\\sqrt{18}$։ Գտեք ծավալը։
4. Գտեք $r = 6$, $l = 10$ կոնի ծավալը։
5. Կոնի առանցքային հատույթը $8$ ներքնաձիգով ուղղանկյուն հավասարասրուն եռանկյուն է։ Գտեք ծավալը։
6. Հատած բուրգի հիմքերի մակերեսներն են $9$ և $4$, բարձրությունը՝ $6$։ Գտեք ծավալը։
7. Հատած կոնի շառավիղներն են $5$ և $2$, ծնորդը՝ $5$։ Գտեք ծավալը։
8. Կոնի ծավալը $100\\pi$ է, բարձրությունը՝ $12$։ Գտեք շառավիղը և կողմնային մակերեսը։

### Պատասխաններ

1. $32$։ 2. $S = 3\\sqrt3$, $V = 5\\sqrt3$։ 3. Կես անկյունագիծը $3$ է, $h = 4$, $V = 24$։ 4. $h = 8$, $V = 96\\pi$։ 5. $r = h = 4$, $V = \\dfrac{64\\pi}{3}$։ 6. $\\dfrac13 \\cdot 6 \\cdot (9 + 6 + 4) = 38$։ 7. $h = 4$, $V = \\dfrac13 \\pi \\cdot 4 \\cdot (25 + 10 + 4) = 52\\pi$։ 8. $r = 5$, $l = 13$, $S_{\\text{կողմ}} = 65\\pi$։`,
        ru: `## Объём пирамиды

**Теорема.** Объём пирамиды равен одной трети произведения площади основания на высоту:
$$V = \\dfrac13 S_{\\text{осн}} \\cdot h.$$

**Доказательство.** Проведём ось $Ox$ через вершину $O$ перпендикулярно основанию так, что основание лежит в плоскости $x = h$. Плоскость $x = t$ ($0 < t \\le h$) пересекает пирамиду по многоугольнику, подобному основанию с коэффициентом $\\dfrac th$ (гомотетия с центром $O$), поэтому его площадь $S(t) = S \\cdot \\dfrac{t^2}{h^2}$. По основной формуле
$$V = \\int_0^h S\\dfrac{t^2}{h^2}\\,dt = \\dfrac{S}{h^2} \\cdot \\dfrac{h^3}{3} = \\dfrac13 Sh. \;\\blacksquare$$

В доказательстве форма основания не использовалась, поэтому оно годится для любой пирамиды; для треугольной пирамиды можно обойтись и без интеграла, разрезав треугольную призму на три пирамиды равного объёма.

**Следствия.**
- Пирамиды с равными основаниями и равными высотами имеют равные объёмы, где бы ни находилась вершина.
- Любая грань треугольной пирамиды может служить основанием: $S_1 h_1 = S_2 h_2$ для двух граней и опущенных на них высот.

## Объём конуса

**Теорема.** $V = \\dfrac13 \\pi r^2 h$ для конуса с радиусом основания $r$ и высотой $h$.

Доказательство то же: сечение на расстоянии $t$ от вершины — круг радиуса $\\dfrac rh t$, поэтому $S(t) = \\pi r^2 \\dfrac{t^2}{h^2}$ и интеграл даёт $\\dfrac13 \\pi r^2 h$. (Иначе: зажать конус между вписанными и описанными пирамидами.)

## Усечённая пирамида и усечённый конус

Усечённая пирамида с основаниями $S_1$, $S_2$ и высотой $h$ — разность двух пирамид. Обозначив высоту малой пирамиды $x$, из подобия получаем $\\dfrac{x}{x + h} = \\sqrt{\\dfrac{S_2}{S_1}}$, и после упрощения
$$V = \\dfrac13 h\\left(S_1 + \\sqrt{S_1 S_2} + S_2\\right).$$
Для усечённого конуса с радиусами $R$ и $r$: $V = \\dfrac13 \\pi h\\left(R^2 + Rr + r^2\\right)$.

**Пример 1.** Правильная четырёхугольная пирамида имеет сторону основания $6$ и высоту $4$: $V = \\dfrac13 \\cdot 36 \\cdot 4 = 48$. Её боковое ребро $\\sqrt{16 + 18} = \\sqrt{34}$.

**Пример 2.** Правильная треугольная пирамида имеет сторону основания $6$ и боковое ребро $5$. Радиус описанной окружности основания $\\dfrac{6}{\\sqrt3} = 2\\sqrt3$, поэтому $h = \\sqrt{25 - 12} = \\sqrt{13}$ и $V = \\dfrac13 \\cdot 9\\sqrt3 \\cdot \\sqrt{13} = 3\\sqrt{39}$.

**Пример 3.** В пирамиде $DABC$ ребро $DA \\perp$ основанию, $DA = 6$, основание — прямоугольный треугольник с катетами $3$ и $4$: $V = \\dfrac13 \\cdot 6 \\cdot 6 = 12$. Приняв за основание грань $DAB$ (катеты $6$ и $3$, площадь $9$), получаем высоту из $C$: $\\dfrac{3V}{9} = 4$, действительно катет $BC$.

**Пример 4.** Конус с $r = 3$ и образующей $l = 5$: $h = 4$, $V = 12\\pi$. Если осевое сечение — равносторонний треугольник со стороной $4$: $r = 2$, $h = 2\\sqrt3$, $V = \\dfrac{8\\sqrt3}{3}\\pi$.

**Пример 5.** Конус и цилиндр имеют одно основание и одну высоту; объём конуса — треть объёма цилиндра. Если конус и цилиндр равных объёмов имеют одинаковый радиус, конус втрое выше.

**Пример 6.** Усечённая пирамида имеет квадратные основания со сторонами $4$ и $2$ и высоту $3$: $V = \\dfrac13 \\cdot 3 \\cdot (16 + 8 + 4) = 28$. Проверка: полная пирамида имеет высоту $6$ и объём $\\dfrac13 \\cdot 16 \\cdot 6 = 32$, отсечённая вершина — объём $\\dfrac13 \\cdot 4 \\cdot 3 = 4$, $32 - 4 = 28$.

**Пример 7.** Усечённый конус с $R = 4$, $r = 1$, $h = 4$: $V = \\dfrac13 \\pi \\cdot 4 \\cdot (16 + 4 + 1) = 28\\pi$; образующая $\\sqrt{16 + 9} = 5$.

**Пример 8.** Куб с ребром $a$ рассечён плоскостью через концы трёх рёбер, выходящих из одной вершины; угловая пирамида имеет три взаимно перпендикулярных ребра $a$ и объём $\\dfrac13 \\cdot \\dfrac{a^2}{2} \\cdot a = \\dfrac{a^3}{6}$. Срезание всех $8$ углов через середины рёбер удаляет $8 \\cdot \\dfrac{(a/2)^3}{6} = \\dfrac{a^3}{6}$, остаётся $\\dfrac56 a^3$ (кубооктаэдр).

### Упражнения

1. Найдите объём правильной четырёхугольной пирамиды со стороной основания $4$ и высотой $6$.
2. Правильная треугольная пирамида имеет сторону основания $2\\sqrt3$ и высоту $5$. Найдите объём.
3. Боковое ребро правильной четырёхугольной пирамиды равно $5$, сторона основания $\\sqrt{18}$. Найдите объём.
4. Найдите объём конуса с $r = 6$ и $l = 10$.
5. Осевое сечение конуса — прямоугольный равнобедренный треугольник с гипотенузой $8$. Найдите объём.
6. Усечённая пирамида имеет основания площадей $9$ и $4$ и высоту $6$. Найдите объём.
7. Усечённый конус имеет радиусы $5$ и $2$ и образующую $5$. Найдите объём.
8. Объём конуса равен $100\\pi$, высота $12$. Найдите радиус и площадь боковой поверхности.

### Ответы

1. $32$. 2. $S = 3\\sqrt3$, $V = 5\\sqrt3$. 3. Половина диагонали $3$, $h = 4$, $V = 24$. 4. $h = 8$, $V = 96\\pi$. 5. $r = h = 4$, $V = \\dfrac{64\\pi}{3}$. 6. $\\dfrac13 \\cdot 6 \\cdot (9 + 6 + 4) = 38$. 7. $h = 4$, $V = \\dfrac13 \\pi \\cdot 4 \\cdot (25 + 10 + 4) = 52\\pi$. 8. $r = 5$, $l = 13$, $S_{\\text{бок}} = 65\\pi$.`,
      },
      [
        q(t("The volume of a pyramid with base area S and height h is…", "S հիմքի մակերեսով և h բարձրությամբ բուրգի ծավալը…", "Объём пирамиды с площадью основания S и высотой h равен…"), [t("Sh", "Sh", "Sh"), t("Sh/2", "Sh/2", "Sh/2"), t("Sh/3", "Sh/3", "Sh/3")], 2),
        q(t("A cone has r = 3 and h = 4. Its volume is…", "Կոնի r = 3, h = 4։ Ծավալը…", "Конус с r = 3 и h = 4 имеет объём…"), [t("12π", "12π", "12π"), t("36π", "36π", "36π"), t("15π", "15π", "15π")], 0),
        q(t("A cone and a cylinder have equal bases and heights. The cone's volume is … of the cylinder's.", "Կոնն ու գլանը հավասար հիմքեր և բարձրություններ ունեն։ Կոնի ծավալը գլանի ծավալի … է։", "Конус и цилиндр имеют равные основания и высоты. Объём конуса составляет … объёма цилиндра."), [t("a half", "կեսը", "половину"), t("a third", "մեկ երրորդը", "треть"), t("two thirds", "երկու երրորդը", "две трети")], 1),
        q(t("A regular quadrilateral pyramid has base side 3 and height 5. Its volume is…", "Կանոնավոր քառանկյուն բուրգի հիմքի կողմը 3 է, բարձրությունը՝ 5։ Ծավալը…", "Правильная четырёхугольная пирамида со стороной основания 3 и высотой 5 имеет объём…"), [t("45", "45", "45"), t("15", "15", "15"), t("30", "30", "30")], 1),
        q(t("The volume of a truncated pyramid with bases S₁, S₂ and height h is…", "S₁, S₂ հիմքերով և h բարձրությամբ հատած բուրգի ծավալը…", "Объём усечённой пирамиды с основаниями S₁, S₂ и высотой h равен…"), [t("h(S₁ + S₂)/2", "h(S₁ + S₂)/2", "h(S₁ + S₂)/2"), t("h(S₁ + √(S₁S₂) + S₂)/3", "h(S₁ + √(S₁S₂) + S₂)/3", "h(S₁ + √(S₁S₂) + S₂)/3"), t("h√(S₁S₂)", "h√(S₁S₂)", "h√(S₁S₂)")], 1),
        q(t("The section of a pyramid by a plane parallel to the base at distance t from the apex has area…", "Հիմքին զուգահեռ, գագաթից t հեռավորության վրա հարթությամբ բուրգի հատույթի մակերեսը…", "Сечение пирамиды плоскостью, параллельной основанию, на расстоянии t от вершины имеет площадь…"), [t("S·t/h", "S·t/h", "S·t/h"), t("S·t²/h²", "S·t²/h²", "S·t²/h²"), t("S·h/t", "S·h/t", "S·h/t")], 1),
      ],
    ),
    lesson(
      "volume-ball",
      ["Volume of a ball and its parts", "Գնդի և նրա մասերի ծավալ", "Объём шара и его частей"],
      {
        en: ["Prove the formula V = 4/3·πR³ for a ball using the integral of the areas of circular sections", "Derive the volumes of a spherical segment V = πh²(R − h/3), a spherical sector V = 2/3·πR²h and a spherical layer", "Solve problems on balls inscribed in or circumscribed about cubes, cylinders and cones, and finish the proof of S = 4πR²"],
        hy: ["Ապացուցել գնդի V = 4/3·πR³ բանաձևը շրջանային հատույթների մակերեսների ինտեգրալով", "Արտածել գնդային սեգմենտի V = πh²(R − h/3), գնդային սեկտորի V = 2/3·πR²h և գնդային շերտի ծավալները", "Լուծել խորանարդում, գլանում և կոնում ներգծած կամ արտագծած գնդերի խնդիրներ և ավարտել S = 4πR² բանաձևի ապացույցը"],
        ru: ["Доказывать формулу V = 4/3·πR³ для шара с помощью интеграла площадей круговых сечений", "Выводить объёмы шарового сегмента V = πh²(R − h/3), шарового сектора V = 2/3·πR²h и шарового слоя", "Решать задачи о шарах, вписанных в куб, цилиндр и конус или описанных около них, и завершать доказательство формулы S = 4πR²"],
      },
      {
        en: `## Volume of a ball

**Theorem.** The volume of a ball of radius $R$ is
$$V = \\dfrac43 \\pi R^3.$$

**Proof.** Take the axis $Ox$ through the centre $O$. The plane $x = t$ ($-R \\le t \\le R$) cuts the ball in a disc of radius $\\sqrt{R^2 - t^2}$, so $S(t) = \\pi(R^2 - t^2)$ and
$$V = \\int_{-R}^{R} \\pi(R^2 - t^2)\\,dt = \\pi\\left(R^2 t - \\dfrac{t^3}{3}\\right)\\Big|_{-R}^{R} = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3. \;\\blacksquare$$

**Archimedes' comparison.** The circumscribed cylinder has volume $\\pi R^2 \\cdot 2R = 2\\pi R^3$, so $V_{\\text{ball}} : V_{\\text{cyl}} = \\dfrac43 : 2 = 2 : 3$. A cone with the same base and height as the cylinder has volume $\\dfrac23\\pi R^3$, so cone, ball and cylinder are in the ratio $1 : 2 : 3$.

## Parts of a ball

**Spherical segment** (cut off by one plane, height $h$): integrate from $R - h$ to $R$:
$$V = \\int_{R-h}^{R} \\pi(R^2 - t^2)\\,dt = \\pi h^2\\left(R - \\dfrac h3\\right).$$
For $h = R$ this gives the half-ball $\\dfrac23\\pi R^3$, for $h = 2R$ the whole ball.

**Spherical layer** (between two parallel planes): the difference of two segments, or directly the integral between the two planes.

**Spherical sector** (a segment of height $h < R$ together with the cone from the centre to its base circle):
$$V = \\dfrac23 \\pi R^2 h.$$
This follows from the segment formula and the cone volume $\\dfrac13\\pi r^2 (R - h)$ with $r^2 = h(2R - h)$.

## Area of the sphere, completed

A circumscribed polyhedron splits into pyramids with apex at the centre and height $R$, so $V_{\\text{poly}} = \\dfrac13 R \\cdot S_{\\text{poly}}$. In the limit $V_{\\text{ball}} = \\dfrac13 R \\cdot S$, hence $S = \\dfrac{3V}{R} = 4\\pi R^2$, as promised in the previous unit. Similarly the spherical sector gives the cap area $2\\pi Rh$.

**Example 1.** $R = 3$: $V = 36\\pi$. A ball with $V = \\dfrac{32}{3}\\pi$ has $R^3 = 8$, $R = 2$.

**Example 2.** A ball inscribed in a cube with edge $a$ has $R = \\dfrac a2$ and $V = \\dfrac{\\pi a^3}{6} \\approx 0{,}52 a^3$. A ball circumscribed about the cube has $R = \\dfrac{a\\sqrt3}{2}$ and $V = \\dfrac{\\sqrt3}{2}\\pi a^3$; the two volumes are in the ratio $1 : 3\\sqrt3$.

**Example 3.** A ball of radius $5$ is cut by a plane at distance $3$ from the centre. The smaller segment has $h = 2$ and $V = \\pi \\cdot 4 \\cdot \\left(5 - \\dfrac23\\right) = \\dfrac{52}{3}\\pi$; the larger has $h = 8$ and $V = \\pi \\cdot 64 \\cdot \\left(5 - \\dfrac83\\right) = \\dfrac{448}{3}\\pi$. The sum is $\\dfrac{500}{3}\\pi = \\dfrac43\\pi \\cdot 125$.

**Example 4.** A spherical sector of a ball with $R = 6$ has height $h = 2$: $V = \\dfrac23\\pi \\cdot 36 \\cdot 2 = 48\\pi$.

**Example 5.** A ball is inscribed in a cylinder (touches both bases and the lateral surface): the cylinder has $r = R$, $h = 2R$, and the empty part has volume $2\\pi R^3 - \\dfrac43\\pi R^3 = \\dfrac23\\pi R^3$, one third of the cylinder.

**Example 6.** A ball is inscribed in a cone with $r = 3$ and $h = 4$ (generator $5$). In the axial section the inscribed circle of the triangle with sides $6$, $5$, $5$ has radius $\\rho = \\dfrac{S}{p} = \\dfrac{12}{8} = \\dfrac32$, so $V_{\\text{ball}} = \\dfrac43\\pi \\cdot \\dfrac{27}{8} = \\dfrac92\\pi$, while $V_{\\text{cone}} = 12\\pi$.

**Example 7.** Three balls with radii $3$, $4$, $5$ are melted into one. $R^3 = 27 + 64 + 125 = 216$, $R = 6$. The volume is additive, the radius is not.

**Example 8.** A hemispherical bowl of radius $10$ cm is filled with water to depth $5$ cm. The water is a segment with $h = 5$: $V = \\pi \\cdot 25 \\cdot \\left(10 - \\dfrac53\\right) = \\dfrac{625}{3}\\pi \\approx 654$ cm³, which is $\\dfrac{5}{16}$ of the bowl's volume $\\dfrac{2000}{3}\\pi$.

### Exercises

1. Find the volume of a ball with $R = 6$ and of a ball with diameter $3$.
2. The volume of a ball is $288\\pi$. Find its radius and surface area.
3. Find the volumes of the balls inscribed in and circumscribed about a cube with edge $2$.
4. A ball of radius $10$ is cut by a plane at distance $6$ from the centre. Find the volume of the smaller segment.
5. Find the volume of a spherical sector with $R = 3$ and $h = 1$.
6. A ball is inscribed in a cylinder of volume $54\\pi$. Find the volume of the ball.
7. Two balls with radii $1$ and $2$ are melted into one. Find its radius.
8. A ball is inscribed in a cone whose axial section is an equilateral triangle with side $6$. Find the volume of the ball.

### Answers

1. $288\\pi$; $\\dfrac92\\pi$. 2. $R = 6$, $S = 144\\pi$. 3. $R = 1$: $\\dfrac43\\pi$; $R = \\sqrt3$: $4\\sqrt3\\pi$. 4. $h = 4$: $\\pi \\cdot 16 \\cdot \\dfrac{26}{3} = \\dfrac{416}{3}\\pi$. 5. $\\dfrac23\\pi \\cdot 9 \\cdot 1 = 6\\pi$. 6. $2\\pi R^3 = 54\\pi$, $R = 3$, $V = 36\\pi$. 7. $R = \\sqrt[3]{9}$. 8. $\\rho = \\dfrac{6}{2\\sqrt3} = \\sqrt3$, $V = 4\\sqrt3\\pi$.`,
        hy: `## Գնդի ծավալը

**Թեորեմ։** $R$ շառավղով գնդի ծավալը
$$V = \\dfrac43 \\pi R^3$$

**Ապացույց։** $Ox$ առանցքը տանենք $O$ կենտրոնով։ $x = t$ ($-R \\le t \\le R$) հարթությունը գունդը հատում է $\\sqrt{R^2 - t^2}$ շառավղով շրջանով, ուստի $S(t) = \\pi(R^2 - t^2)$ և
$$V = \\int_{-R}^{R} \\pi(R^2 - t^2)\\,dt = \\pi\\left(R^2 t - \\dfrac{t^3}{3}\\right)\\Big|_{-R}^{R} = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3 \;\\blacksquare$$

**Արքիմեդի համեմատությունը։** Արտագծած գլանի ծավալը $\\pi R^2 \\cdot 2R = 2\\pi R^3$ է, ուստի $V_{\\text{գունդ}} : V_{\\text{գլան}} = \\dfrac43 : 2 = 2 : 3$։ Գլանի հետ նույն հիմքն ու բարձրությունն ունեցող կոնի ծավալը $\\dfrac23\\pi R^3$ է, ուստի կոնը, գունդը և գլանը հարաբերում են $1 : 2 : 3$։

## Գնդի մասերը

**Գնդային սեգմենտ** (մեկ հարթությամբ կտրված, $h$ բարձրությամբ)․ ինտեգրենք $R - h$-ից $R$․
$$V = \\int_{R-h}^{R} \\pi(R^2 - t^2)\\,dt = \\pi h^2\\left(R - \\dfrac h3\\right)$$
$h = R$ դեպքում սա տալիս է կիսագունդը՝ $\\dfrac23\\pi R^3$, $h = 2R$ դեպքում՝ ամբողջ գունդը։

**Գնդային շերտ** (երկու զուգահեռ հարթությունների միջև)․ երկու սեգմենտի տարբերություն կամ անմիջապես ինտեգրալ երկու հարթությունների միջև։

**Գնդային սեկտոր** ($h < R$ բարձրությամբ սեգմենտ՝ կենտրոնից նրա հիմքի շրջանագծին տարված կոնի հետ միասին)․
$$V = \\dfrac23 \\pi R^2 h$$
Սա հետևում է սեգմենտի բանաձևից և կոնի $\\dfrac13\\pi r^2 (R - h)$ ծավալից, որտեղ $r^2 = h(2R - h)$։

## Սֆերայի մակերեսը՝ ավարտված

Արտագծած բազմանիստը տրոհվում է կենտրոնում գագաթով և $R$ բարձրությամբ բուրգերի, ուստի $V_{\\text{բազմ}} = \\dfrac13 R \\cdot S_{\\text{բազմ}}$։ Սահմանում $V_{\\text{գունդ}} = \\dfrac13 R \\cdot S$, հետևաբար $S = \\dfrac{3V}{R} = 4\\pi R^2$, ինչպես խոստացվել էր նախորդ բաժնում։ Նմանապես գնդային սեկտորը տալիս է սեգմենտի մակերեսը՝ $2\\pi Rh$։

**Օրինակ 1։** $R = 3$․ $V = 36\\pi$։ $V = \\dfrac{32}{3}\\pi$ գնդի համար $R^3 = 8$, $R = 2$։

**Օրինակ 2։** $a$ կողով խորանարդում ներգծած գնդի $R = \\dfrac a2$ և $V = \\dfrac{\\pi a^3}{6} \\approx 0{,}52 a^3$։ Խորանարդին արտագծած գնդի $R = \\dfrac{a\\sqrt3}{2}$ և $V = \\dfrac{\\sqrt3}{2}\\pi a^3$․ երկու ծավալները հարաբերում են $1 : 3\\sqrt3$։

**Օրինակ 3։** $5$ շառավղով գունդը հատված է կենտրոնից $3$ հեռավորության վրա գտնվող հարթությամբ։ Փոքր սեգմենտի $h = 2$ և $V = \\pi \\cdot 4 \\cdot \\left(5 - \\dfrac23\\right) = \\dfrac{52}{3}\\pi$, մեծի $h = 8$ և $V = \\pi \\cdot 64 \\cdot \\left(5 - \\dfrac83\\right) = \\dfrac{448}{3}\\pi$։ Գումարը $\\dfrac{500}{3}\\pi = \\dfrac43\\pi \\cdot 125$ է։

**Օրինակ 4։** $R = 6$ գնդի գնդային սեկտորի բարձրությունը $h = 2$ է․ $V = \\dfrac23\\pi \\cdot 36 \\cdot 2 = 48\\pi$։

**Օրինակ 5։** Գունդը ներգծված է գլանում (շոշափում է երկու հիմքերն ու կողմնային մակերևույթը)․ գլանի $r = R$, $h = 2R$, իսկ դատարկ մասի ծավալը $2\\pi R^3 - \\dfrac43\\pi R^3 = \\dfrac23\\pi R^3$ է՝ գլանի մեկ երրորդը։

**Օրինակ 6։** Գունդը ներգծված է $r = 3$ և $h = 4$ (ծնորդը $5$) կոնում։ Առանցքային հատույթում $6$, $5$, $5$ կողմերով եռանկյան ներգծած շրջանագծի շառավիղը $\\rho = \\dfrac{S}{p} = \\dfrac{12}{8} = \\dfrac32$ է, ուստի $V_{\\text{գունդ}} = \\dfrac43\\pi \\cdot \\dfrac{27}{8} = \\dfrac92\\pi$, մինչդեռ $V_{\\text{կոն}} = 12\\pi$։

**Օրինակ 7։** $3$, $4$, $5$ շառավիղներով երեք գունդ հալեցվում են մեկի մեջ։ $R^3 = 27 + 64 + 125 = 216$, $R = 6$։ Ծավալը գումարվում է, շառավիղը՝ ոչ։

**Օրինակ 8։** $10$ սմ շառավղով կիսագնդաձև ամանը լցված է ջրով $5$ սմ խորությամբ։ Ջուրը $h = 5$ սեգմենտ է․ $V = \\pi \\cdot 25 \\cdot \\left(10 - \\dfrac53\\right) = \\dfrac{625}{3}\\pi \\approx 654$ սմ³, որն ամանի $\\dfrac{2000}{3}\\pi$ ծավալի $\\dfrac{5}{16}$ մասն է։

### Վարժություններ

1. Գտեք $R = 6$ գնդի և $3$ տրամագծով գնդի ծավալները։
2. Գնդի ծավալը $288\\pi$ է։ Գտեք նրա շառավիղը և մակերևույթի մակերեսը։
3. Գտեք $2$ կողով խորանարդում ներգծած և նրան արտագծած գնդերի ծավալները։
4. $10$ շառավղով գունդը հատված է կենտրոնից $6$ հեռավորության վրա հարթությամբ։ Գտեք փոքր սեգմենտի ծավալը։
5. Գտեք $R = 3$, $h = 1$ գնդային սեկտորի ծավալը։
6. Գունդը ներգծված է $54\\pi$ ծավալով գլանում։ Գտեք գնդի ծավալը։
7. $1$ և $2$ շառավիղներով երկու գունդ հալեցվում են մեկի մեջ։ Գտեք նրա շառավիղը։
8. Գունդը ներգծված է կոնում, որի առանցքային հատույթը $6$ կողմով հավասարակողմ եռանկյուն է։ Գտեք գնդի ծավալը։

### Պատասխաններ

1. $288\\pi$, $\\dfrac92\\pi$։ 2. $R = 6$, $S = 144\\pi$։ 3. $R = 1$․ $\\dfrac43\\pi$, $R = \\sqrt3$․ $4\\sqrt3\\pi$։ 4. $h = 4$․ $\\pi \\cdot 16 \\cdot \\dfrac{26}{3} = \\dfrac{416}{3}\\pi$։ 5. $\\dfrac23\\pi \\cdot 9 \\cdot 1 = 6\\pi$։ 6. $2\\pi R^3 = 54\\pi$, $R = 3$, $V = 36\\pi$։ 7. $R = \\sqrt[3]{9}$։ 8. $\\rho = \\dfrac{6}{2\\sqrt3} = \\sqrt3$, $V = 4\\sqrt3\\pi$։`,
        ru: `## Объём шара

**Теорема.** Объём шара радиуса $R$ равен
$$V = \\dfrac43 \\pi R^3.$$

**Доказательство.** Проведём ось $Ox$ через центр $O$. Плоскость $x = t$ ($-R \\le t \\le R$) пересекает шар по кругу радиуса $\\sqrt{R^2 - t^2}$, поэтому $S(t) = \\pi(R^2 - t^2)$ и
$$V = \\int_{-R}^{R} \\pi(R^2 - t^2)\\,dt = \\pi\\left(R^2 t - \\dfrac{t^3}{3}\\right)\\Big|_{-R}^{R} = \\pi\\left(2R^3 - \\dfrac{2R^3}{3}\\right) = \\dfrac43\\pi R^3. \;\\blacksquare$$

**Сравнение Архимеда.** Описанный цилиндр имеет объём $\\pi R^2 \\cdot 2R = 2\\pi R^3$, поэтому $V_{\\text{шара}} : V_{\\text{цил}} = \\dfrac43 : 2 = 2 : 3$. Конус с тем же основанием и высотой, что и цилиндр, имеет объём $\\dfrac23\\pi R^3$, так что конус, шар и цилиндр относятся как $1 : 2 : 3$.

## Части шара

**Шаровой сегмент** (отсечён одной плоскостью, высота $h$): интегрируем от $R - h$ до $R$:
$$V = \\int_{R-h}^{R} \\pi(R^2 - t^2)\\,dt = \\pi h^2\\left(R - \\dfrac h3\\right).$$
При $h = R$ получаем полушар $\\dfrac23\\pi R^3$, при $h = 2R$ — весь шар.

**Шаровой слой** (между двумя параллельными плоскостями): разность двух сегментов или непосредственно интеграл между двумя плоскостями.

**Шаровой сектор** (сегмент высоты $h < R$ вместе с конусом от центра к окружности его основания):
$$V = \\dfrac23 \\pi R^2 h.$$
Это следует из формулы сегмента и объёма конуса $\\dfrac13\\pi r^2 (R - h)$, где $r^2 = h(2R - h)$.

## Площадь сферы: завершение

Описанный многогранник разбивается на пирамиды с вершиной в центре и высотой $R$, поэтому $V_{\\text{мн}} = \\dfrac13 R \\cdot S_{\\text{мн}}$. В пределе $V_{\\text{шара}} = \\dfrac13 R \\cdot S$, откуда $S = \\dfrac{3V}{R} = 4\\pi R^2$, как было обещано в предыдущей главе. Аналогично шаровой сектор даёт площадь сегмента $2\\pi Rh$.

**Пример 1.** $R = 3$: $V = 36\\pi$. Шар с $V = \\dfrac{32}{3}\\pi$ имеет $R^3 = 8$, $R = 2$.

**Пример 2.** Шар, вписанный в куб с ребром $a$, имеет $R = \\dfrac a2$ и $V = \\dfrac{\\pi a^3}{6} \\approx 0{,}52 a^3$. Шар, описанный около куба, имеет $R = \\dfrac{a\\sqrt3}{2}$ и $V = \\dfrac{\\sqrt3}{2}\\pi a^3$; объёмы относятся как $1 : 3\\sqrt3$.

**Пример 3.** Шар радиуса $5$ рассечён плоскостью на расстоянии $3$ от центра. Меньший сегмент имеет $h = 2$ и $V = \\pi \\cdot 4 \\cdot \\left(5 - \\dfrac23\\right) = \\dfrac{52}{3}\\pi$; больший имеет $h = 8$ и $V = \\pi \\cdot 64 \\cdot \\left(5 - \\dfrac83\\right) = \\dfrac{448}{3}\\pi$. Сумма $\\dfrac{500}{3}\\pi = \\dfrac43\\pi \\cdot 125$.

**Пример 4.** Шаровой сектор шара с $R = 6$ имеет высоту $h = 2$: $V = \\dfrac23\\pi \\cdot 36 \\cdot 2 = 48\\pi$.

**Пример 5.** Шар вписан в цилиндр (касается обоих оснований и боковой поверхности): цилиндр имеет $r = R$, $h = 2R$, а пустая часть имеет объём $2\\pi R^3 - \\dfrac43\\pi R^3 = \\dfrac23\\pi R^3$, треть цилиндра.

**Пример 6.** Шар вписан в конус с $r = 3$ и $h = 4$ (образующая $5$). В осевом сечении вписанная окружность треугольника со сторонами $6$, $5$, $5$ имеет радиус $\\rho = \\dfrac{S}{p} = \\dfrac{12}{8} = \\dfrac32$, поэтому $V_{\\text{шара}} = \\dfrac43\\pi \\cdot \\dfrac{27}{8} = \\dfrac92\\pi$, тогда как $V_{\\text{конуса}} = 12\\pi$.

**Пример 7.** Три шара с радиусами $3$, $4$, $5$ переплавлены в один. $R^3 = 27 + 64 + 125 = 216$, $R = 6$. Объём складывается, радиус — нет.

**Пример 8.** Полусферическая чаша радиуса $10$ см наполнена водой до глубины $5$ см. Вода — сегмент с $h = 5$: $V = \\pi \\cdot 25 \\cdot \\left(10 - \\dfrac53\\right) = \\dfrac{625}{3}\\pi \\approx 654$ см³, то есть $\\dfrac{5}{16}$ объёма чаши $\\dfrac{2000}{3}\\pi$.

### Упражнения

1. Найдите объём шара с $R = 6$ и шара с диаметром $3$.
2. Объём шара равен $288\\pi$. Найдите его радиус и площадь поверхности.
3. Найдите объёмы шаров, вписанного в куб с ребром $2$ и описанного около него.
4. Шар радиуса $10$ рассечён плоскостью на расстоянии $6$ от центра. Найдите объём меньшего сегмента.
5. Найдите объём шарового сектора с $R = 3$ и $h = 1$.
6. Шар вписан в цилиндр объёма $54\\pi$. Найдите объём шара.
7. Два шара с радиусами $1$ и $2$ переплавлены в один. Найдите его радиус.
8. Шар вписан в конус, осевое сечение которого — равносторонний треугольник со стороной $6$. Найдите объём шара.

### Ответы

1. $288\\pi$; $\\dfrac92\\pi$. 2. $R = 6$, $S = 144\\pi$. 3. $R = 1$: $\\dfrac43\\pi$; $R = \\sqrt3$: $4\\sqrt3\\pi$. 4. $h = 4$: $\\pi \\cdot 16 \\cdot \\dfrac{26}{3} = \\dfrac{416}{3}\\pi$. 5. $\\dfrac23\\pi \\cdot 9 \\cdot 1 = 6\\pi$. 6. $2\\pi R^3 = 54\\pi$, $R = 3$, $V = 36\\pi$. 7. $R = \\sqrt[3]{9}$. 8. $\\rho = \\dfrac{6}{2\\sqrt3} = \\sqrt3$, $V = 4\\sqrt3\\pi$.`,
      },
      [
        q(t("The volume of a ball of radius R is…", "R շառավղով գնդի ծավալը…", "Объём шара радиуса R равен…"), [t("4πR²", "4πR²", "4πR²"), t("4/3·πR³", "4/3·πR³", "4/3·πR³"), t("2πR³", "2πR³", "2πR³")], 1),
        q(t("A ball has R = 3. Its volume is…", "Գնդի R = 3։ Ծավալը…", "Шар с R = 3 имеет объём…"), [t("36π", "36π", "36π"), t("12π", "12π", "12π"), t("108π", "108π", "108π")], 0),
        q(t("The volumes of a ball and its circumscribed cylinder are in the ratio…", "Գնդի և նրան արտագծած գլանի ծավալները հարաբերում են…", "Объёмы шара и описанного около него цилиндра относятся как…"), [t("1 : 2", "1 : 2", "1 : 2"), t("2 : 3", "2 : 3", "2 : 3"), t("3 : 4", "3 : 4", "3 : 4")], 1),
        q(t("The volume of a spherical segment of height h is…", "h բարձրությամբ գնդային սեգմենտի ծավալը…", "Объём шарового сегмента высоты h равен…"), [t("πh²(R − h/3)", "πh²(R − h/3)", "πh²(R − h/3)"), t("2πRh", "2πRh", "2πRh"), t("πRh²", "πRh²", "πRh²")], 0),
        q(t("If the radius of a ball is doubled, its volume is multiplied by…", "Եթե գնդի շառավիղը կրկնապատկվի, ծավալը բազմապատկվում է…", "Если радиус шара удвоить, объём умножится на…"), [t("2", "2", "2"), t("4", "4", "4"), t("8", "8", "8")], 2),
        q(t("A ball is inscribed in a cube with edge 2. The volume of the ball is…", "Գունդը ներգծված է 2 կողով խորանարդում։ Գնդի ծավալը…", "Шар вписан в куб с ребром 2. Объём шара равен…"), [t("4π/3", "4π/3", "4π/3"), t("8π/3", "8π/3", "8π/3"), t("4π", "4π", "4π")], 0),
      ],
    ),
  ],
};
