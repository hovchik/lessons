import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Similar triangles", "Նման եռանկյուններ", "Подобные треугольники"),
  summary: t(
    "Proportional segments and similarity, the three similarity tests, the midline, proportional segments in a right triangle, measuring with similarity, and the sine, cosine and tangent of an acute angle.",
    "Համեմատական հատվածներ և նմանություն, նմանության երեք հայտանիշները, միջին գիծ, համեմատական հատվածներ ուղղանկյուն եռանկյունում, չափումներ նմանությամբ, սուր անկյան սինուս, կոսինուս և տանգենս։",
    "Пропорциональные отрезки и подобие, три признака подобия, средняя линия, пропорциональные отрезки в прямоугольном треугольнике, измерения с помощью подобия, синус, косинус и тангенс острого угла.",
  ),
  lessons: [
    lesson(
      "similarity-definition",
      ["Proportional segments and similar triangles", "Համեմատական հատվածներ և նման եռանկյուններ", "Пропорциональные отрезки и подобные треугольники"],
      {
        en: ["Write the ratio of two segments", "Define similar triangles", "Use the similarity coefficient for sides and perimeters"],
        hy: ["Գրել երկու հատվածի հարաբերությունը", "Սահմանել նման եռանկյունները", "Կիրառել նմանության գործակիցը կողմերի և պարագծերի համար"],
        ru: ["Записывать отношение двух отрезков", "Определять подобные треугольники", "Применять коэффициент подобия для сторон и периметров"],
      },
      {
        en: `## The ratio of segments

The **ratio** of segments $AB$ and $CD$ is the number $\\dfrac{AB}{CD}$, measured in the same units. Segments $AB$, $CD$ and $A_1B_1$, $C_1D_1$ are **proportional** if

$$\\frac{AB}{CD} = \\frac{A_1B_1}{C_1D_1}.$$

## Similar triangles

Triangles $ABC$ and $A_1B_1C_1$ are **similar** if

* their angles are equal: $\\angle A = \\angle A_1$, $\\angle B = \\angle B_1$, $\\angle C = \\angle C_1$, and
* their corresponding sides are proportional:

$$\\frac{AB}{A_1B_1} = \\frac{BC}{B_1C_1} = \\frac{CA}{C_1A_1} = k.$$

The number $k$ is the **similarity coefficient**. The notation is $\\triangle ABC \\sim \\triangle A_1B_1C_1$, and the order of the letters shows which vertex matches which.

Similar triangles have the same shape and, in general, different sizes. Congruent triangles are the special case $k = 1$.

## Perimeters and areas

From $a = ka_1$, $b = kb_1$, $c = kc_1$,

$$\\frac{P}{P_1} = k.$$

The ratio of the perimeters equals the coefficient. The ratio of the **areas** equals $k^2$, which the last lessons of this unit will use.

## Worked example

$\\triangle ABC \\sim \\triangle MNK$ with $AB = 6$, $MN = 9$. Then $k = \\dfrac{6}{9} = \\dfrac{2}{3}$. If $BC = 8$, then $NK = 8 : \\dfrac{2}{3} = 12$. If the perimeter of $ABC$ is $20$, the perimeter of $MNK$ is $30$.

### Exercises

1. Find the ratio of segments $12$ cm and $18$ cm.
2. $\\triangle ABC \\sim \\triangle A_1B_1C_1$ with $k = 2$ and $AB = 10$. Find $A_1B_1$.
3. The sides of one triangle are $3$, $4$, $5$ and of a similar one $9$, $12$, $15$. Find $k$.
4. Two similar triangles have perimeters $24$ and $36$. Find $k$.
5. Are all equilateral triangles similar?
6. Are all isosceles triangles similar?
7. $k = 1$ means the triangles are…?
8. If $k = 3$, how do the areas compare?

### Answers

1. $\\dfrac{2}{3}$. 2. $5$. 3. $\\dfrac{1}{3}$ or $3$, depending on the order. 4. $\\dfrac{2}{3}$. 5. Yes. 6. No. 7. Congruent. 8. The area is $9$ times larger.`,
        hy: `## Հատվածների հարաբերությունը

$AB$ և $CD$ հատվածների **հարաբերությունը** $\\dfrac{AB}{CD}$ թիվն է՝ նույն միավորներով չափված։ $AB$, $CD$ և $A_1B_1$, $C_1D_1$ հատվածները **համեմատական** են, եթե

$$\\frac{AB}{CD} = \\frac{A_1B_1}{C_1D_1}.$$

## Նման եռանկյուններ

$ABC$ և $A_1B_1C_1$ եռանկյունները **նման** են, եթե

* նրանց անկյունները հավասար են․ $\\angle A = \\angle A_1$, $\\angle B = \\angle B_1$, $\\angle C = \\angle C_1$, և
* համապատասխան կողմերը համեմատական են․

$$\\frac{AB}{A_1B_1} = \\frac{BC}{B_1C_1} = \\frac{CA}{C_1A_1} = k.$$

$k$ թիվը **նմանության գործակիցն** է։ Գրառումն է $\\triangle ABC \\sim \\triangle A_1B_1C_1$, և տառերի հերթականությունը ցույց է տալիս, թե որ գագաթին որն է համապատասխանում։

Նման եռանկյուններն ունեն նույն տեսքը և, ընդհանուր դեպքում, տարբեր չափեր։ Հավասար եռանկյունները $k = 1$ հատուկ դեպքն են։

## Պարագծեր և մակերեսներ

$a = ka_1$, $b = kb_1$, $c = kc_1$ հավասարություններից՝

$$\\frac{P}{P_1} = k.$$

Պարագծերի հարաբերությունը հավասար է գործակցին։ **Մակերեսների** հարաբերությունը հավասար է $k^2$-ի, ինչը կկիրառվի այս բաժնի վերջին դասերում։

## Լուծված օրինակ

$\\triangle ABC \\sim \\triangle MNK$, որտեղ $AB = 6$, $MN = 9$. Այդ դեպքում $k = \\dfrac{6}{9} = \\dfrac{2}{3}$. Եթե $BC = 8$, ապա $NK = 8 : \\dfrac{2}{3} = 12$. Եթե $ABC$-ի պարագիծը $20$ է, $MNK$-ինը՝ $30$.

### Վարժություններ

1. Գտիր $12$ սմ և $18$ սմ հատվածների հարաբերությունը։
2. $\\triangle ABC \\sim \\triangle A_1B_1C_1$, $k = 2$ և $AB = 10$. Գտիր $A_1B_1$-ը։
3. Մի եռանկյան կողմերն են $3$, $4$, $5$, նման եռանկյանը՝ $9$, $12$, $15$. Գտիր $k$-ն։
4. Երկու նման եռանկյունների պարագծերն են $24$ և $36$. Գտիր $k$-ն։
5. Բոլոր հավասարակողմ եռանկյունները նմա՞ն են։
6. Բոլոր հավասարասրուն եռանկյունները նմա՞ն են։
7. $k = 1$-ը նշանակում է, որ եռանկյունները…
8. Եթե $k = 3$, ինչպե՞ս են հարաբերում մակերեսները։

### Պատասխաններ

1. $\\dfrac{2}{3}$. 2. $5$. 3. $\\dfrac{1}{3}$ կամ $3$՝ կախված հերթականությունից։ 4. $\\dfrac{2}{3}$. 5. Այո։ 6. Ոչ։ 7. Հավասար են։ 8. Մակերեսը $9$ անգամ մեծ է։`,
        ru: `## Отношение отрезков

**Отношением** отрезков $AB$ и $CD$ называют число $\\dfrac{AB}{CD}$, измеренных в одних единицах. Отрезки $AB$, $CD$ и $A_1B_1$, $C_1D_1$ **пропорциональны**, если

$$\\frac{AB}{CD} = \\frac{A_1B_1}{C_1D_1}.$$

## Подобные треугольники

Треугольники $ABC$ и $A_1B_1C_1$ **подобны**, если

* их углы равны: $\\angle A = \\angle A_1$, $\\angle B = \\angle B_1$, $\\angle C = \\angle C_1$, и
* соответственные стороны пропорциональны:

$$\\frac{AB}{A_1B_1} = \\frac{BC}{B_1C_1} = \\frac{CA}{C_1A_1} = k.$$

Число $k$ — **коэффициент подобия**. Запись: $\\triangle ABC \\sim \\triangle A_1B_1C_1$, и порядок букв показывает, какая вершина какой соответствует.

Подобные треугольники имеют одинаковую форму и, вообще говоря, разные размеры. Равные треугольники — частный случай $k = 1$.

## Периметры и площади

Из $a = ka_1$, $b = kb_1$, $c = kc_1$ следует

$$\\frac{P}{P_1} = k.$$

Отношение периметров равно коэффициенту. Отношение **площадей** равно $k^2$, и это понадобится в последних уроках главы.

## Разобранный пример

$\\triangle ABC \\sim \\triangle MNK$, где $AB = 6$, $MN = 9$. Тогда $k = \\dfrac{6}{9} = \\dfrac{2}{3}$. Если $BC = 8$, то $NK = 8 : \\dfrac{2}{3} = 12$. Если периметр $ABC$ равен $20$, то периметр $MNK$ равен $30$.

### Упражнения

1. Найди отношение отрезков $12$ см и $18$ см.
2. $\\triangle ABC \\sim \\triangle A_1B_1C_1$, $k = 2$ и $AB = 10$. Найди $A_1B_1$.
3. Стороны одного треугольника равны $3$, $4$, $5$, подобного ему — $9$, $12$, $15$. Найди $k$.
4. Периметры двух подобных треугольников равны $24$ и $36$. Найди $k$.
5. Все ли равносторонние треугольники подобны?
6. Все ли равнобедренные треугольники подобны?
7. $k = 1$ означает, что треугольники…?
8. Если $k = 3$, как соотносятся площади?

### Ответы

1. $\\dfrac{2}{3}$. 2. $5$. 3. $\\dfrac{1}{3}$ или $3$ в зависимости от порядка. 4. $\\dfrac{2}{3}$. 5. Да. 6. Нет. 7. Равны. 8. Площадь больше в $9$ раз.`,
      },
      [
        q(t("Similar triangles have…", "Նման եռանկյուններն ունեն…", "Подобные треугольники имеют…"), [t("equal angles and proportional sides", "հավասար անկյուններ և համեմատական կողմեր", "равные углы и пропорциональные стороны"), t("equal sides", "հավասար կողմեր", "равные стороны"), t("equal areas", "հավասար մակերեսներ", "равные площади")], 0),
        q(t("The similarity coefficient k is…", "Նմանության k գործակիցը…", "Коэффициент подобия k — это…"), [t("the difference of the sides", "կողմերի տարբերությունն է", "разность сторон"), t("the ratio of corresponding sides", "համապատասխան կողմերի հարաբերությունն է", "отношение соответственных сторон"), t("the sum of the angles", "անկյունների գումարն է", "сумма углов")], 1),
        q(t("The ratio of the perimeters of similar triangles equals…", "Նման եռանկյունների պարագծերի հարաբերությունը հավասար է…", "Отношение периметров подобных треугольников равно…"), [t("k²", "k²", "k²"), t("2k", "2k", "2k"), t("k", "k", "k")], 2),
        q(t("k = 1 means the triangles are…", "k = 1 նշանակում է, որ եռանկյունները…", "k = 1 означает, что треугольники…"), [t("congruent", "հավասար են", "равны"), t("not similar", "նման չեն", "не подобны"), t("right", "ուղղանկյուն են", "прямоугольные")], 0),
        q(t("All equilateral triangles are…", "Բոլոր հավասարակողմ եռանկյունները…", "Все равносторонние треугольники…"), [t("congruent", "հավասար են", "равны"), t("similar", "նման են", "подобны"), t("right", "ուղղանկյուն են", "прямоугольные")], 1),
        q(t("If k = 3, the areas differ by a factor of…", "Եթե k = 3, մակերեսները տարբերվում են…", "Если k = 3, площади отличаются в…"), [t("3", "3 անգամ", "3 раза"), t("6", "6 անգամ", "6 раз"), t("9", "9 անգամ", "9 раз")], 2),
      ],
    ),
    lesson(
      "similarity-tests",
      ["Three similarity tests", "Նմանության երեք հայտանիշները", "Три признака подобия треугольников"],
      {
        en: ["State the three tests for similar triangles", "Choose the test that fits the given data", "Find an unknown side with a proportion"],
        hy: ["Ձևակերպել նման եռանկյունների երեք հայտանիշները", "Ընտրել տրված տվյալներին համապատասխան հայտանիշը", "Համեմատությամբ գտնել անհայտ կողմը"],
        ru: ["Формулировать три признака подобия треугольников", "Выбирать признак по данным задачи", "Находить неизвестную сторону через пропорцию"],
      },
      {
        en: `## The three tests

**1. Two angles.** If two angles of one triangle are equal to two angles of another, the triangles are similar. This is the test used most often, because the third pair of angles is then equal automatically.

**2. Two sides and the angle between them.** If two sides of one triangle are proportional to two sides of another and the angles between those sides are equal, the triangles are similar.

**3. Three sides.** If the three sides of one triangle are proportional to the three sides of another, the triangles are similar.

## Where equal angles come from

* a common angle of two triangles;
* vertical angles;
* alternate or corresponding angles at parallel lines;
* a right angle in both triangles.

A line parallel to one side of a triangle cuts off a triangle similar to the whole one, because the angles are corresponding and one angle is common.

## Worked example

In $\\triangle ABC$ the line $MN \\parallel AC$ meets $AB$ at $M$ and $BC$ at $N$, with $BM = 4$, $MA = 6$, $BN = 5$. Then $\\triangle BMN \\sim \\triangle BAC$ by two angles, with

$$\\frac{BM}{BA} = \\frac{BN}{BC}, \\qquad \\frac{4}{10} = \\frac{5}{BC}, \\qquad BC = 12{,}5,$$

so $NC = 12{,}5 - 5 = 7{,}5$.

## How to write a solution

1. Name the two triangles in the right order of vertices.
2. Say which test and why the data fit it.
3. Write the proportion and solve for the unknown.

### Exercises

1. Two angles of one triangle are $40°$ and $70°$; of another $70°$ and $40°$. Are they similar?
2. Which test needs no side at all?
3. Sides $3$, $4$, $5$ and $6$, $8$, $10$: are the triangles similar, and by which test?
4. In $\\triangle ABC$, $MN \\parallel AC$. Which test shows $\\triangle BMN \\sim \\triangle BAC$?
5. $BM = 3$, $MA = 6$, $BN = 4$. Find $NC$.
6. Two right triangles have an acute angle of $35°$ each. Are they similar?
7. Sides $2$, $3$ and $4$, $6$ with equal angles between them: similar?
8. Name a source of equal angles in a figure with two parallel lines.

### Answers

1. Yes, by the first test. 2. The first. 3. Yes, by the third. 4. The first, two angles. 5. $8$. 6. Yes, two angles. 7. Yes, by the second test. 8. Alternate or corresponding angles.`,
        hy: `## Երեք հայտանիշը

**1. Երկու անկյուն։** Եթե մի եռանկյան երկու անկյունը հավասար են մյուսի երկու անկյանը, եռանկյունները նման են։ Սա ամենից հաճախ կիրառվող հայտանիշն է, քանի որ երրորդ զույգ անկյուններն այդ դեպքում ինքնաբերաբար հավասար են։

**2. Երկու կողմ և դրանց միջև անկյունը։** Եթե մի եռանկյան երկու կողմը համեմատական են մյուսի երկու կողմին, և այդ կողմերի միջև անկյունները հավասար են, եռանկյունները նման են։

**3. Երեք կողմ։** Եթե մի եռանկյան երեք կողմը համեմատական են մյուսի երեք կողմին, եռանկյունները նման են։

## Որտեղից են գալիս հավասար անկյունները

* երկու եռանկյան ընդհանուր անկյուն,
* հակադիր անկյուններ,
* խաչադիր կամ համապատասխան անկյուններ զուգահեռ ուղիղների դեպքում,
* ուղիղ անկյուն երկու եռանկյունում։

Եռանկյան մի կողմին զուգահեռ ուղիղն անջատում է ամբողջին նման եռանկյուն, քանի որ անկյունները համապատասխան են, իսկ մեկ անկյունն ընդհանուր։

## Լուծված օրինակ

$\\triangle ABC$-ում $MN \\parallel AC$ ուղիղը $AB$-ն հատում է $M$-ում, $BC$-ն՝ $N$-ում, ընդ որում $BM = 4$, $MA = 6$, $BN = 5$. Այդ դեպքում $\\triangle BMN \\sim \\triangle BAC$՝ ըստ երկու անկյան, և

$$\\frac{BM}{BA} = \\frac{BN}{BC}, \\qquad \\frac{4}{10} = \\frac{5}{BC}, \\qquad BC = 12{,}5,$$

ուրեմն $NC = 12{,}5 - 5 = 7{,}5$.

## Ինչպես գրել լուծումը

1. Անվանիր երկու եռանկյունը՝ գագաթների ճիշտ հերթականությամբ։
2. Ասա, թե որ հայտանիշն է և ինչու են տվյալները համապատասխանում։
3. Գրիր համեմատությունը և լուծիր անհայտի նկատմամբ։

### Վարժություններ

1. Մի եռանկյան երկու անկյունն են $40°$ և $70°$, մյուսինը՝ $70°$ և $40°$. Նմա՞ն են։
2. Որ հայտանիշին ոչ մի կողմ պետք չէ։
3. $3$, $4$, $5$ և $6$, $8$, $10$ կողմերը․ եռանկյունները նմա՞ն են և ո՞ր հայտանիշով։
4. $\\triangle ABC$-ում $MN \\parallel AC$. Որ հայտանիշն է ցույց տալիս $\\triangle BMN \\sim \\triangle BAC$-ը։
5. $BM = 3$, $MA = 6$, $BN = 4$. Գտիր $NC$-ն։
6. Երկու ուղղանկյուն եռանկյուն ունեն $35°$-անոց սուր անկյուն։ Նմա՞ն են։
7. $2$, $3$ և $4$, $6$ կողմերը՝ դրանց միջև հավասար անկյուններով․ նմա՞ն են։
8. Անվանիր հավասար անկյունների աղբյուր երկու զուգահեռ ուղիղ ունեցող պատկերում։

### Պատասխաններ

1. Այո՝ ըստ առաջին հայտանիշի։ 2. Առաջինին։ 3. Այո՝ ըստ երրորդի։ 4. Առաջինը՝ երկու անկյուն։ 5. $8$. 6. Այո՝ երկու անկյուն։ 7. Այո՝ ըստ երկրորդի։ 8. Խաչադիր կամ համապատասխան անկյունները։`,
        ru: `## Три признака

**1. По двум углам.** Если два угла одного треугольника равны двум углам другого, треугольники подобны. Это самый частый признак, ведь третья пара углов тогда равна автоматически.

**2. По двум сторонам и углу между ними.** Если две стороны одного треугольника пропорциональны двум сторонам другого и углы между этими сторонами равны, треугольники подобны.

**3. По трём сторонам.** Если три стороны одного треугольника пропорциональны трём сторонам другого, треугольники подобны.

## Откуда берутся равные углы

* общий угол двух треугольников;
* вертикальные углы;
* накрест лежащие или соответственные углы при параллельных прямых;
* прямой угол в обоих треугольниках.

Прямая, параллельная стороне треугольника, отсекает треугольник, подобный исходному: углы соответственные, а один угол общий.

## Разобранный пример

В $\\triangle ABC$ прямая $MN \\parallel AC$ пересекает $AB$ в точке $M$, а $BC$ в точке $N$, причём $BM = 4$, $MA = 6$, $BN = 5$. Тогда $\\triangle BMN \\sim \\triangle BAC$ по двум углам, и

$$\\frac{BM}{BA} = \\frac{BN}{BC}, \\qquad \\frac{4}{10} = \\frac{5}{BC}, \\qquad BC = 12{,}5,$$

значит $NC = 12{,}5 - 5 = 7{,}5$.

## Как записывать решение

1. Назови два треугольника в правильном порядке вершин.
2. Скажи, какой это признак и почему данные ему подходят.
3. Запиши пропорцию и найди неизвестное.

### Упражнения

1. Два угла одного треугольника равны $40°$ и $70°$, другого — $70°$ и $40°$. Подобны ли они?
2. Какому признаку не нужна ни одна сторона?
3. Стороны $3$, $4$, $5$ и $6$, $8$, $10$: подобны ли треугольники и по какому признаку?
4. В $\\triangle ABC$ выполнено $MN \\parallel AC$. Какой признак показывает $\\triangle BMN \\sim \\triangle BAC$?
5. $BM = 3$, $MA = 6$, $BN = 4$. Найди $NC$.
6. У двух прямоугольных треугольников есть острый угол по $35°$. Подобны ли они?
7. Стороны $2$, $3$ и $4$, $6$ с равными углами между ними: подобны?
8. Назови источник равных углов в фигуре с двумя параллельными прямыми.

### Ответы

1. Да, по первому признаку. 2. Первому. 3. Да, по третьему. 4. Первый, по двум углам. 5. $8$. 6. Да, по двум углам. 7. Да, по второму признаку. 8. Накрест лежащие или соответственные углы.`,
      },
      [
        q(t("The most used similarity test is…", "Ամենահաճախ կիրառվող նմանության հայտանիշն է…", "Самый употребительный признак подобия — это…"), [t("two angles", "երկու անկյունը", "по двум углам"), t("three sides", "երեք կողմը", "по трём сторонам"), t("two sides and the angle", "երկու կողմը և անկյունը", "по двум сторонам и углу")], 0),
        q(t("A line parallel to a side of a triangle cuts off…", "Եռանկյան կողմին զուգահեռ ուղիղն անջատում է…", "Прямая, параллельная стороне треугольника, отсекает…"), [t("a congruent triangle", "հավասար եռանկյուն", "равный треугольник"), t("a similar triangle", "նման եռանկյուն", "подобный треугольник"), t("a right triangle", "ուղղանկյուն եռանկյուն", "прямоугольный треугольник")], 1),
        q(t("Triangles with sides 3, 4, 5 and 6, 8, 10 are similar by…", "3, 4, 5 և 6, 8, 10 կողմերով եռանկյունները նման են ըստ…", "Треугольники со сторонами 3, 4, 5 и 6, 8, 10 подобны по…"), [t("two angles", "երկու անկյան", "двум углам"), t("two sides and the angle", "երկու կողմի և անկյան", "двум сторонам и углу"), t("three sides", "երեք կողմի", "трём сторонам")], 2),
        q(t("Two right triangles with an equal acute angle are…", "Հավասար սուր անկյուն ունեցող երկու ուղղանկյուն եռանկյուն…", "Два прямоугольных треугольника с равным острым углом…"), [t("similar", "նման են", "подобны"), t("congruent", "հավասար են", "равны"), t("not comparable", "համեմատելի չեն", "несравнимы")], 0),
        q(t("The second test needs…", "Երկրորդ հայտանիշին պետք են…", "Второму признаку нужны…"), [t("three angles", "երեք անկյուն", "три угла"), t("two sides and the angle between them", "երկու կողմ և դրանց միջև անկյունը", "две стороны и угол между ними"), t("the perimeter", "պարագիծը", "периметр")], 1),
        q(t("Vertical angles in a figure give…", "Պատկերում հակադիր անկյունները տալիս են…", "Вертикальные углы в фигуре дают…"), [t("equal sides", "հավասար կողմեր", "равные стороны"), t("parallel lines", "զուգահեռ ուղիղներ", "параллельные прямые"), t("a pair of equal angles", "հավասար անկյունների զույգ", "пару равных углов")], 2),
      ],
    ),
    lesson(
      "midline",
      ["Midline of a triangle and the medians", "Եռանկյան միջին գիծը և միջնագծերը", "Средняя линия треугольника и медианы"],
      {
        en: ["State the property of the midline of a triangle", "Prove it with similar triangles", "Use the point where the medians meet"],
        hy: ["Ձևակերպել եռանկյան միջին գծի հատկությունը", "Ապացուցել այն նման եռանկյուններով", "Կիրառել միջնագծերի հատման կետը"],
        ru: ["Формулировать свойство средней линии треугольника", "Доказывать его через подобные треугольники", "Использовать точку пересечения медиан"],
      },
      {
        en: `## The midline

The **midline** of a triangle is the segment joining the midpoints of two sides.

**Theorem.** The midline is parallel to the third side and equal to half of it:

$$MN \\parallel AC, \\qquad MN = \\frac{1}{2}AC.$$

**Proof.** Let $M$ and $N$ be the midpoints of $AB$ and $BC$. In triangles $BMN$ and $BAC$ the angle $B$ is common and $\\dfrac{BM}{BA} = \\dfrac{BN}{BC} = \\dfrac{1}{2}$, so they are similar with $k = \\dfrac{1}{2}$ by the second test. Hence $MN = \\dfrac{1}{2}AC$ and $\\angle BMN = \\angle BAC$, which makes $MN \\parallel AC$.

Each triangle has three midlines; together they cut it into four congruent small triangles, each similar to the whole one with $k = \\frac{1}{2}$.

## The medians

A **median** joins a vertex with the midpoint of the opposite side.

**Theorem.** The three medians of a triangle meet at one point, and that point divides each median in the ratio $2 : 1$ counting from the vertex.

The meeting point is called the **centroid**. A cardboard triangle balances on a pin placed at this point.

## Worked example

$AC = 14$, so the midline parallel to it is $7$.

A median is $9$ long; from the vertex to the centroid it is $6$, and from the centroid to the side $3$.

### Exercises

1. The third side is $18$. Find the midline parallel to it.
2. The midline is $6{,}5$. Find the side parallel to it.
3. Into how many congruent triangles do the three midlines cut a triangle?
4. A median is $12$. Find its part from the vertex to the centroid.
5. From the centroid to the side a median measures $4$. Find the whole median.
6. The sides of a triangle are $8$, $10$, $12$. Find the perimeter of the triangle made by its midlines.
7. What is the similarity coefficient of the small triangle cut off by a midline?
8. In what ratio does the centroid divide a median?

### Answers

1. $9$. 2. $13$. 3. Four. 4. $8$. 5. $12$. 6. $15$. 7. $\\dfrac{1}{2}$. 8. $2 : 1$ from the vertex.`,
        hy: `## Միջին գիծը

Եռանկյան **միջին գիծը** երկու կողմերի միջնակետերը միացնող հատվածն է։

**Թեորեմ։** Միջին գիծը զուգահեռ է երրորդ կողմին և հավասար է նրա կեսին․

$$MN \\parallel AC, \\qquad MN = \\frac{1}{2}AC.$$

**Ապացույց։** Թող $M$-ը և $N$-ը լինեն $AB$-ի և $BC$-ի միջնակետերը։ $BMN$ և $BAC$ եռանկյուններում $B$ անկյունն ընդհանուր է, և $\\dfrac{BM}{BA} = \\dfrac{BN}{BC} = \\dfrac{1}{2}$, ուրեմն դրանք նման են $k = \\dfrac{1}{2}$ գործակցով՝ ըստ երկրորդ հայտանիշի։ Հետևաբար $MN = \\dfrac{1}{2}AC$ և $\\angle BMN = \\angle BAC$, ինչը տալիս է $MN \\parallel AC$.

Ամեն եռանկյուն ունի երեք միջին գիծ․ միասին դրանք այն բաժանում են չորս հավասար փոքր եռանկյան, որոնցից ամեն մեկը նման է ամբողջին $k = \\frac{1}{2}$ գործակցով։

## Միջնագծերը

**Միջնագիծը** միացնում է գագաթը հանդիպակաց կողմի միջնակետին։

**Թեորեմ։** Եռանկյան երեք միջնագծերը հատվում են մեկ կետում, և այդ կետն ամեն միջնագիծ բաժանում է $2 : 1$ հարաբերությամբ՝ գագաթից հաշված։

Հատման կետը կոչվում է եռանկյան **ծանրության կենտրոն**։ Ստվարաթղթե եռանկյունը հավասարակշռվում է այդ կետում դրված քորոցի վրա։

## Լուծված օրինակ

$AC = 14$, ուրեմն նրան զուգահեռ միջին գիծը $7$ է։

Միջնագիծը $9$ է․ գագաթից մինչև ծանրության կենտրոն՝ $6$, կենտրոնից մինչև կողմ՝ $3$.

### Վարժություններ

1. Երրորդ կողմը $18$ է։ Գտիր նրան զուգահեռ միջին գիծը։
2. Միջին գիծը $6{,}5$ է։ Գտիր նրան զուգահեռ կողմը։
3. Երեք միջին գծերն եռանկյունը քանի՞ հավասար եռանկյան են բաժանում։
4. Միջնագիծը $12$ է։ Գտիր նրա մասը գագաթից մինչև ծանրության կենտրոն։
5. Կենտրոնից մինչև կողմ միջնագիծը $4$ է։ Գտիր ամբողջ միջնագիծը։
6. Եռանկյան կողմերն են $8$, $10$, $12$. Գտիր նրա միջին գծերով կազմված եռանկյան պարագիծը։
7. Որքա՞ն է միջին գծով անջատված փոքր եռանկյան նմանության գործակիցը։
8. Ի՞նչ հարաբերությամբ է ծանրության կենտրոնը բաժանում միջնագիծը։

### Պատասխաններ

1. $9$. 2. $13$. 3. Չորս։ 4. $8$. 5. $12$. 6. $15$. 7. $\\dfrac{1}{2}$. 8. $2 : 1$՝ գագաթից։`,
        ru: `## Средняя линия

**Средней линией** треугольника называют отрезок, соединяющий середины двух сторон.

**Теорема.** Средняя линия параллельна третьей стороне и равна её половине:

$$MN \\parallel AC, \\qquad MN = \\frac{1}{2}AC.$$

**Доказательство.** Пусть $M$ и $N$ — середины $AB$ и $BC$. В треугольниках $BMN$ и $BAC$ угол $B$ общий и $\\dfrac{BM}{BA} = \\dfrac{BN}{BC} = \\dfrac{1}{2}$, значит они подобны с $k = \\dfrac{1}{2}$ по второму признаку. Отсюда $MN = \\dfrac{1}{2}AC$ и $\\angle BMN = \\angle BAC$, что даёт $MN \\parallel AC$.

У каждого треугольника три средние линии; вместе они разрезают его на четыре равных маленьких треугольника, каждый из которых подобен исходному с $k = \\frac{1}{2}$.

## Медианы

**Медиана** соединяет вершину с серединой противоположной стороны.

**Теорема.** Три медианы треугольника пересекаются в одной точке, и эта точка делит каждую медиану в отношении $2 : 1$, считая от вершины.

Точку пересечения называют **центром тяжести** треугольника. Картонный треугольник уравновешивается на булавке, поставленной в эту точку.

## Разобранный пример

$AC = 14$, значит параллельная ему средняя линия равна $7$.

Медиана равна $9$: от вершины до центра тяжести $6$, от центра до стороны $3$.

### Упражнения

1. Третья сторона равна $18$. Найди параллельную ей среднюю линию.
2. Средняя линия равна $6{,}5$. Найди параллельную ей сторону.
3. На сколько равных треугольников три средние линии делят треугольник?
4. Медиана равна $12$. Найди её часть от вершины до центра тяжести.
5. От центра тяжести до стороны медиана равна $4$. Найди всю медиану.
6. Стороны треугольника равны $8$, $10$, $12$. Найди периметр треугольника из его средних линий.
7. Чему равен коэффициент подобия маленького треугольника, отсечённого средней линией?
8. В каком отношении центр тяжести делит медиану?

### Ответы

1. $9$. 2. $13$. 3. На четыре. 4. $8$. 5. $12$. 6. $15$. 7. $\\dfrac{1}{2}$. 8. $2 : 1$ от вершины.`,
      },
      [
        q(t("The midline of a triangle is…", "Եռանկյան միջին գիծը…", "Средняя линия треугольника…"), [t("parallel to the third side and half of it", "զուգահեռ է երրորդ կողմին և հավասար նրա կեսին", "параллельна третьей стороне и равна её половине"), t("equal to the third side", "հավասար է երրորդ կողմին", "равна третьей стороне"), t("perpendicular to a side", "ուղղահայաց է կողմին", "перпендикулярна стороне")], 0),
        q(t("If the third side is 18, the midline is…", "Եթե երրորդ կողմը 18 է, միջին գիծն է…", "Если третья сторона равна 18, средняя линия равна…"), [t("18", "18", "18"), t("9", "9", "9"), t("36", "36", "36")], 1),
        q(t("The three midlines cut a triangle into…", "Երեք միջին գծերն եռանկյունը բաժանում են…", "Три средние линии делят треугольник на…"), [t("two triangles", "երկու եռանկյան", "два треугольника"), t("three triangles", "երեք եռանկյան", "три треугольника"), t("four congruent triangles", "չորս հավասար եռանկյան", "четыре равных треугольника")], 2),
        q(t("The medians of a triangle…", "Եռանկյան միջնագծերը…", "Медианы треугольника…"), [t("meet at one point", "հատվում են մեկ կետում", "пересекаются в одной точке"), t("are parallel", "զուգահեռ են", "параллельны"), t("never meet", "երբեք չեն հատվում", "не пересекаются")], 0),
        q(t("The centroid divides a median in the ratio…", "Ծանրության կենտրոնը միջնագիծը բաժանում է հարաբերությամբ…", "Центр тяжести делит медиану в отношении…"), [t("1 : 1", "1 : 1", "1 : 1"), t("2 : 1 from the vertex", "2 : 1՝ գագաթից", "2 : 1 от вершины"), t("3 : 1", "3 : 1", "3 : 1")], 1),
        q(t("A median of length 12 has a part from the vertex of…", "12 երկարությամբ միջնագծի գագաթից հատվածն է…", "У медианы длиной 12 часть от вершины равна…"), [t("4", "4", "4"), t("6", "6", "6"), t("8", "8", "8")], 2),
      ],
    ),
    lesson(
      "proportional-in-right-triangle",
      ["Proportional segments in a right triangle", "Համեմատական հատվածներ ուղղանկյուն եռանկյունում", "Пропорциональные отрезки в прямоугольном треугольнике"],
      {
        en: ["See the three similar triangles made by the altitude to the hypotenuse", "Use the mean proportional for the altitude and the legs", "Solve problems on the parts of the hypotenuse"],
        hy: ["Տեսնել ներքնաձիգին տարված բարձրության ստեղծած երեք նման եռանկյունները", "Կիրառել միջին համեմատականը բարձրության և էջերի համար", "Լուծել ներքնաձիգի մասերի խնդիրներ"],
        ru: ["Видеть три подобных треугольника, которые даёт высота к гипотенузе", "Применять среднее пропорциональное для высоты и катетов", "Решать задачи о частях гипотенузы"],
      },
      {
        en: `## Three similar triangles

Let $CH$ be the altitude to the hypotenuse $AB$ of the right triangle $ABC$. It cuts the triangle into two smaller ones, and

$$\\triangle ACH \\sim \\triangle ABC \\sim \\triangle CBH.$$

Each pair shares an acute angle and has a right angle, so the first similarity test applies.

## The formulas

Write $AH$ and $HB$ for the two parts of the hypotenuse. Then

$$CH^2 = AH \\cdot HB, \\qquad AC^2 = AH \\cdot AB, \\qquad BC^2 = HB \\cdot AB.$$

In words: the altitude is the mean proportional between the parts of the hypotenuse, and each leg is the mean proportional between the whole hypotenuse and the part next to it.

The number $x = \\sqrt{mn}$ is called the **mean proportional** (or geometric mean) of $m$ and $n$.

## Worked example

$AH = 4$, $HB = 9$. Then

$$AB = 13, \\quad CH = \\sqrt{36} = 6, \\quad AC = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}, \\quad BC = \\sqrt{9 \\cdot 13} = 3\\sqrt{13}.$$

Check with Pythagoras: $4 \\cdot 13 + 9 \\cdot 13 = 13^2$. Correct.

## Another check

From the same three triangles, $AC \\cdot BC = AB \\cdot CH$, since both sides equal twice the area.

### Exercises

1. $AH = 3$, $HB = 12$. Find $CH$.
2. $AH = 2$, $HB = 8$. Find $CH$.
3. $AH = 4$, $AB = 16$. Find the leg $AC$.
4. $CH = 6$ and $AH = 4$. Find $HB$.
5. The legs are $6$ and $8$. Find the altitude to the hypotenuse.
6. Find the mean proportional of $5$ and $20$.
7. Which three triangles are similar in this picture?
8. Why is each leg the mean proportional between the hypotenuse and a part of it?

### Answers

1. $6$. 2. $4$. 3. $8$. 4. $9$. 5. $4{,}8$, since $6 \\cdot 8 = 10 \\cdot h$. 6. $10$. 7. $ACH$, $CBH$ and $ABC$. 8. Because $\\triangle ACH \\sim \\triangle ABC$ gives $\\dfrac{AC}{AB} = \\dfrac{AH}{AC}$.`,
        hy: `## Երեք նման եռանկյուն

Թող $CH$-ը լինի $ABC$ ուղղանկյուն եռանկյան $AB$ ներքնաձիգին տարված բարձրությունը։ Այն եռանկյունը բաժանում է երկու փոքրի, ընդ որում

$$\\triangle ACH \\sim \\triangle ABC \\sim \\triangle CBH.$$

Ամեն զույգ ունի ընդհանուր սուր անկյուն և ուղիղ անկյուն, ուստի գործում է առաջին հայտանիշը։

## Բանաձևերը

$AH$-ով և $HB$-ով նշանակենք ներքնաձիգի երկու մասերը։ Այդ դեպքում

$$CH^2 = AH \\cdot HB, \\qquad AC^2 = AH \\cdot AB, \\qquad BC^2 = HB \\cdot AB.$$

Խոսքերով․ բարձրությունը ներքնաձիգի մասերի միջին համեմատականն է, իսկ ամեն էջ՝ ամբողջ ներքնաձիգի և իրեն կից մասի միջին համեմատականը։

$x = \\sqrt{mn}$ թիվը կոչվում է $m$-ի և $n$-ի **միջին համեմատական** (կամ երկրաչափական միջին)։

## Լուծված օրինակ

$AH = 4$, $HB = 9$. Այդ դեպքում

$$AB = 13, \\quad CH = \\sqrt{36} = 6, \\quad AC = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}, \\quad BC = \\sqrt{9 \\cdot 13} = 3\\sqrt{13}.$$

Ստուգում Պյութագորասով․ $4 \\cdot 13 + 9 \\cdot 13 = 13^2$. Ճիշտ է։

## Եվս մեկ ստուգում

Նույն երեք եռանկյուններից հետևում է $AC \\cdot BC = AB \\cdot CH$, քանի որ երկու կողմն էլ հավասար են մակերեսի կրկնապատիկին։

### Վարժություններ

1. $AH = 3$, $HB = 12$. Գտիր $CH$-ը։
2. $AH = 2$, $HB = 8$. Գտիր $CH$-ը։
3. $AH = 4$, $AB = 16$. Գտիր $AC$ էջը։
4. $CH = 6$ և $AH = 4$. Գտիր $HB$-ն։
5. Էջերն են $6$ և $8$. Գտիր ներքնաձիգին տարված բարձրությունը։
6. Գտիր $5$-ի և $20$-ի միջին համեմատականը։
7. Այս նկարում որ երեք եռանկյունն են նման։
8. Ինչու՞ է ամեն էջը ներքնաձիգի և նրա մասի միջին համեմատականը։

### Պատասխաններ

1. $6$. 2. $4$. 3. $8$. 4. $9$. 5. $4{,}8$, քանի որ $6 \\cdot 8 = 10 \\cdot h$. 6. $10$. 7. $ACH$-ը, $CBH$-ը և $ABC$-ն։ 8. Որովհետև $\\triangle ACH \\sim \\triangle ABC$-ից հետևում է $\\dfrac{AC}{AB} = \\dfrac{AH}{AC}$.`,
        ru: `## Три подобных треугольника

Пусть $CH$ — высота к гипотенузе $AB$ прямоугольного треугольника $ABC$. Она разбивает треугольник на два меньших, причём

$$\\triangle ACH \\sim \\triangle ABC \\sim \\triangle CBH.$$

У каждой пары есть общий острый угол и прямой угол, поэтому работает первый признак подобия.

## Формулы

Обозначим через $AH$ и $HB$ две части гипотенузы. Тогда

$$CH^2 = AH \\cdot HB, \\qquad AC^2 = AH \\cdot AB, \\qquad BC^2 = HB \\cdot AB.$$

Словами: высота есть среднее пропорциональное частей гипотенузы, а каждый катет — среднее пропорциональное всей гипотенузы и прилежащей к нему части.

Число $x = \\sqrt{mn}$ называют **средним пропорциональным** (или средним геометрическим) чисел $m$ и $n$.

## Разобранный пример

$AH = 4$, $HB = 9$. Тогда

$$AB = 13, \\quad CH = \\sqrt{36} = 6, \\quad AC = \\sqrt{4 \\cdot 13} = 2\\sqrt{13}, \\quad BC = \\sqrt{9 \\cdot 13} = 3\\sqrt{13}.$$

Проверка по Пифагору: $4 \\cdot 13 + 9 \\cdot 13 = 13^2$. Верно.

## Ещё одна проверка

Из тех же трёх треугольников следует $AC \\cdot BC = AB \\cdot CH$, так как обе части равны удвоенной площади.

### Упражнения

1. $AH = 3$, $HB = 12$. Найди $CH$.
2. $AH = 2$, $HB = 8$. Найди $CH$.
3. $AH = 4$, $AB = 16$. Найди катет $AC$.
4. $CH = 6$ и $AH = 4$. Найди $HB$.
5. Катеты равны $6$ и $8$. Найди высоту к гипотенузе.
6. Найди среднее пропорциональное чисел $5$ и $20$.
7. Какие три треугольника подобны на этом чертеже?
8. Почему каждый катет — среднее пропорциональное гипотенузы и её части?

### Ответы

1. $6$. 2. $4$. 3. $8$. 4. $9$. 5. $4{,}8$, так как $6 \\cdot 8 = 10 \\cdot h$. 6. $10$. 7. $ACH$, $CBH$ и $ABC$. 8. Потому что из $\\triangle ACH \\sim \\triangle ABC$ следует $\\dfrac{AC}{AB} = \\dfrac{AH}{AC}$.`,
      },
      [
        q(t("The altitude to the hypotenuse makes how many similar triangles in all?", "Ներքնաձիգին տարված բարձրությունն ընդամենը քանի՞ նման եռանկյուն է տալիս։", "Сколько всего подобных треугольников даёт высота к гипотенузе?"), [t("three", "երեք", "три"), t("two", "երկու", "два"), t("four", "չորս", "четыре")], 0),
        q(t("CH² equals…", "CH² հավասար է…", "CH² равно…"), [t("AH + HB", "AH + HB", "AH + HB"), t("AH · HB", "AH · HB", "AH · HB"), t("AH · AB", "AH · AB", "AH · AB")], 1),
        q(t("AC² equals…", "AC² հավասար է…", "AC² равно…"), [t("AH · HB", "AH · HB", "AH · HB"), t("HB · AB", "HB · AB", "HB · AB"), t("AH · AB", "AH · AB", "AH · AB")], 2),
        q(t("If AH = 4 and HB = 9, then CH is…", "Եթե AH = 4 և HB = 9, ապա CH-ը…", "Если AH = 4 и HB = 9, то CH равно…"), [t("6", "6", "6"), t("13", "13", "13"), t("36", "36", "36")], 0),
        q(t("The mean proportional of 5 and 20 is…", "5-ի և 20-ի միջին համեմատականն է…", "Среднее пропорциональное 5 и 20 равно…"), [t("12.5", "12,5", "12,5"), t("10", "10", "10"), t("25", "25", "25")], 1),
        q(t("For legs 6 and 8 the altitude to the hypotenuse is…", "6 և 8 էջերի դեպքում ներքնաձիգին տարված բարձրությունն է…", "При катетах 6 и 8 высота к гипотенузе равна…"), [t("7", "7", "7"), t("5", "5", "5"), t("4.8", "4,8", "4,8")], 2),
      ],
    ),
    lesson(
      "similarity-applications",
      ["Measuring with similar triangles", "Չափումներ նման եռանկյուններով", "Измерения с помощью подобных треугольников"],
      {
        en: ["Measure the height of a tall object by its shadow", "Use a mirror or a staff to measure a height", "Work with scale on a map or a plan"],
        hy: ["Չափել բարձր առարկայի բարձրությունը ստվերով", "Հայելու կամ ձողի միջոցով չափել բարձրությունը", "Աշխատել քարտեզի կամ հատակագծի մասշտաբով"],
        ru: ["Измерять высоту высокого предмета по тени", "Измерять высоту с помощью зеркала или шеста", "Работать с масштабом на карте или плане"],
      },
      {
        en: `## By the shadow

At the same moment the sun's rays make the same angle with the ground everywhere nearby. So the triangle of a tree and its shadow is similar to the triangle of a staff and its shadow:

$$\\frac{H}{h} = \\frac{L}{l}.$$

**Example.** A staff $1{,}5$ m tall throws a shadow of $2$ m; a tree's shadow is $14$ m. Then

$$H = \\frac{1{,}5 \\cdot 14}{2} = 10{,}5 \\ \\text{m}.$$

## With a mirror

Put a mirror flat on the ground between you and a tower and step back until you see the top of the tower in the mirror. The light bounces at equal angles, so two similar right triangles appear:

$$\\frac{H}{\\text{your eye height}} = \\frac{\\text{mirror to tower}}{\\text{mirror to you}}.$$

With an eye height of $1{,}6$ m, $1$ m to the mirror and $12$ m from the mirror to the tower, the tower is $19{,}2$ m.

## Across a river

To find the width of a river without crossing it, mark points on the bank so that two triangles with a common angle appear, measure the three accessible sides and use the proportion. This is how Thales is said to have measured distances to ships at sea.

## Scale

The **scale** of a map is the ratio of a length on the map to the real length: $1 : 25\\,000$ means $1$ cm on the map is $250$ m on the ground. A plan is a similarity with a very small coefficient.

### Exercises

1. A staff $2$ m tall has a shadow $3$ m; a pole's shadow is $12$ m. Find the pole.
2. A tree is $9$ m tall and its shadow is $6$ m. Find the shadow of a $1{,}5$ m child.
3. Eye height $1{,}5$ m, $2$ m to the mirror, $16$ m from the mirror to a tower. Find the tower.
4. On a map of scale $1 : 50\\,000$ two towns are $7$ cm apart. Find the real distance.
5. A plan of scale $1 : 100$ shows a room $4$ cm by $3$ cm. Find the real size.
6. Why are the two shadow triangles similar?
7. A $1 : 200$ model of a building is $9$ cm tall. Find the real height.
8. Which similarity test is used in the shadow method?

### Answers

1. $8$ m. 2. $1$ m. 3. $12$ m. 4. $3{,}5$ km. 5. $4$ m by $3$ m. 6. The sun's rays make equal angles and both have a right angle. 7. $18$ m. 8. The first, two angles.`,
        hy: `## Ստվերով

Միևնույն պահին արևի ճառագայթները մոտակայքում ամենուր գետնի հետ կազմում են նույն անկյունը։ Ուրեմն ծառի և նրա ստվերի եռանկյունը նման է ձողի և նրա ստվերի եռանկյանը․

$$\\frac{H}{h} = \\frac{L}{l}.$$

**Օրինակ։** $1{,}5$ մ ձողը գցում է $2$ մ ստվեր, ծառի ստվերը $14$ մ է։ Այդ դեպքում

$$H = \\frac{1{,}5 \\cdot 14}{2} = 10{,}5 \\ \\text{մ}.$$

## Հայելիով

Հայելին հարթ դիր գետնին՝ քո և աշտարակի միջև, և հետ գնա այնքան, մինչև հայելու մեջ տեսնես աշտարակի գագաթը։ Լույսն անդրադառնում է հավասար անկյուններով, ուստի առաջանում են երկու նման ուղղանկյուն եռանկյուն․

$$\\frac{H}{\\text{քո աչքի բարձրությունը}} = \\frac{\\text{հայելուց մինչև աշտարակ}}{\\text{հայելուց մինչև քեզ}}.$$

$1{,}6$ մ աչքի բարձրության, հայելուց $1$ մ և հայելուց մինչև աշտարակ $12$ մ հեռավորության դեպքում աշտարակը $19{,}2$ մ է։

## Գետի վրայով

Գետի լայնությունն առանց անցնելու գտնելու համար ափին նշիր կետեր այնպես, որ առաջանան ընդհանուր անկյունով երկու եռանկյուն, չափիր հասանելի երեք կողմը և կիրառիր համեմատությունը։ Ասում են, որ Թալեսն այդպես է չափել հեռավորությունը ծովի նավերից։

## Մասշտաբ

Քարտեզի **մասշտաբը** քարտեզի երկարության հարաբերությունն է իրական երկարությանը․ $1 : 25\\,000$ նշանակում է, որ քարտեզի $1$ սմ-ը գետնին $250$ մ է։ Հատակագիծը շատ փոքր գործակցով նմանություն է։

### Վարժություններ

1. $2$ մ ձողն ունի $3$ մ ստվեր, սյան ստվերը $12$ մ է։ Գտիր սյունը։
2. Ծառը $9$ մ է, ստվերը՝ $6$ մ։ Գտիր $1{,}5$ մ երեխայի ստվերը։
3. Աչքի բարձրությունը $1{,}5$ մ, մինչև հայելի $2$ մ, հայելուց մինչև աշտարակ $16$ մ։ Գտիր աշտարակը։
4. $1 : 50\\,000$ մասշտաբով քարտեզին երկու քաղաք $7$ սմ հեռու են։ Գտիր իրական հեռավորությունը։
5. $1 : 100$ մասշտաբով հատակագծում սենյակը $4$ սմ x $3$ սմ է։ Գտիր իրական չափսերը։
6. Ինչու՞ են ստվերի երկու եռանկյունները նման։
7. Շենքի $1 : 200$ մակետը $9$ սմ է։ Գտիր իրական բարձրությունը։
8. Ստվերի եղանակում նմանության որ հայտանիշն է կիրառվում։

### Պատասխաններ

1. $8$ մ։ 2. $1$ մ։ 3. $12$ մ։ 4. $3{,}5$ կմ։ 5. $4$ մ x $3$ մ։ 6. Արևի ճառագայթները կազմում են հավասար անկյուններ, և երկուսն էլ ունեն ուղիղ անկյուն։ 7. $18$ մ։ 8. Առաջինը՝ երկու անկյուն։`,
        ru: `## По тени

В один и тот же момент солнечные лучи поблизости всюду составляют с землёй одинаковый угол. Поэтому треугольник дерева и его тени подобен треугольнику шеста и его тени:

$$\\frac{H}{h} = \\frac{L}{l}.$$

**Пример.** Шест высотой $1{,}5$ м даёт тень $2$ м, тень дерева равна $14$ м. Тогда

$$H = \\frac{1{,}5 \\cdot 14}{2} = 10{,}5 \\ \\text{м}.$$

## С помощью зеркала

Положи зеркало плашмя на землю между собой и башней и отойди так, чтобы увидеть в зеркале её вершину. Свет отражается под равными углами, поэтому появляются два подобных прямоугольных треугольника:

$$\\frac{H}{\\text{высота твоих глаз}} = \\frac{\\text{от зеркала до башни}}{\\text{от зеркала до тебя}}.$$

При высоте глаз $1{,}6$ м, $1$ м до зеркала и $12$ м от зеркала до башни башня равна $19{,}2$ м.

## Через реку

Чтобы найти ширину реки, не переходя её, отметь на берегу точки так, чтобы получились два треугольника с общим углом, измерь три доступные стороны и примени пропорцию. Говорят, именно так Фалес измерял расстояние до кораблей в море.

## Масштаб

**Масштаб** карты — отношение длины на карте к настоящей длине: $1 : 25\\,000$ значит, что $1$ см на карте — это $250$ м на местности. План — это подобие с очень маленьким коэффициентом.

### Упражнения

1. Шест высотой $2$ м даёт тень $3$ м, тень столба равна $12$ м. Найди столб.
2. Дерево высотой $9$ м даёт тень $6$ м. Найди тень ребёнка ростом $1{,}5$ м.
3. Высота глаз $1{,}5$ м, до зеркала $2$ м, от зеркала до башни $16$ м. Найди башню.
4. На карте масштаба $1 : 50\\,000$ два города удалены на $7$ см. Найди настоящее расстояние.
5. На плане масштаба $1 : 100$ комната $4$ см на $3$ см. Найди настоящие размеры.
6. Почему два теневых треугольника подобны?
7. Макет здания в масштабе $1 : 200$ имеет высоту $9$ см. Найди настоящую высоту.
8. Какой признак подобия используется в способе с тенью?

### Ответы

1. $8$ м. 2. $1$ м. 3. $12$ м. 4. $3{,}5$ км. 5. $4$ м на $3$ м. 6. Солнечные лучи дают равные углы, и у обоих есть прямой угол. 7. $18$ м. 8. Первый, по двум углам.`,
      },
      [
        q(t("The shadow method compares…", "Ստվերի եղանակը համեմատում է…", "Способ с тенью сравнивает…"), [t("two similar triangles", "երկու նման եռանկյուն", "два подобных треугольника"), t("two circles", "երկու շրջանագիծ", "две окружности"), t("two equal triangles", "երկու հավասար եռանկյուն", "два равных треугольника")], 0),
        q(t("A 2 m staff with a 3 m shadow next to a 12 m shadow gives a height of…", "3 մ ստվերով 2 մ ձողը 12 մ ստվերի կողքին տալիս է բարձրություն…", "Шест 2 м с тенью 3 м рядом с тенью 12 м даёт высоту…"), [t("18 m", "18 մ", "18 м"), t("8 m", "8 մ", "8 м"), t("6 m", "6 մ", "6 м")], 1),
        q(t("On a 1 : 50 000 map, 7 cm is…", "1 : 50 000 քարտեզին 7 սմ-ը…", "На карте 1 : 50 000 7 см — это…"), [t("350 m", "350 մ", "350 м"), t("35 km", "35 կմ", "35 км"), t("3.5 km", "3,5 կմ", "3,5 км")], 2),
        q(t("The mirror method works because light…", "Հայելու եղանակն աշխատում է, որովհետև լույսը…", "Способ с зеркалом работает, потому что свет…"), [t("reflects at equal angles", "անդրադառնում է հավասար անկյուններով", "отражается под равными углами"), t("travels slowly", "դանդաղ է շարժվում", "движется медленно"), t("bends in the mirror", "հայելում թեքվում է", "преломляется в зеркале")], 0),
        q(t("A scale of 1 : 100 on a plan means 4 cm is…", "Հատակագծի 1 : 100 մասշտաբը նշանակում է, որ 4 սմ-ը…", "Масштаб 1 : 100 на плане означает, что 4 см — это…"), [t("40 cm", "40 սմ", "40 см"), t("4 m", "4 մ", "4 м"), t("400 m", "400 մ", "400 м")], 1),
        q(t("The test used in all these methods is…", "Այս բոլոր եղանակներում կիրառվող հայտանիշն է…", "Признак, используемый во всех этих способах, —"), [t("three sides", "երեք կողմը", "по трём сторонам"), t("two sides and an angle", "երկու կողմը և անկյունը", "по двум сторонам и углу"), t("two angles", "երկու անկյունը", "по двум углам")], 2),
      ],
    ),
    lesson(
      "sin-cos-tan-acute",
      ["Sine, cosine and tangent of an acute angle", "Սուր անկյան սինուս, կոսինուս և տանգենս", "Синус, косинус и тангенс острого угла"],
      {
        en: ["Define sine, cosine and tangent in a right triangle", "Explain why they depend only on the angle", "Find a side of a right triangle from an angle"],
        hy: ["Ուղղանկյուն եռանկյունում սահմանել սինուսը, կոսինուսը և տանգենսը", "Բացատրել, թե ինչու են դրանք կախված միայն անկյունից", "Անկյունով գտնել ուղղանկյուն եռանկյան կողմը"],
        ru: ["Определять синус, косинус и тангенс в прямоугольном треугольнике", "Объяснять, почему они зависят только от угла", "Находить сторону прямоугольного треугольника по углу"],
      },
      {
        en: `## The definitions

In a right triangle with acute angle $A$, the leg $BC$ is **opposite** $A$ and the leg $AC$ is **adjacent** to it; $AB$ is the hypotenuse.

$$\\sin A = \\frac{\\text{opposite}}{\\text{hypotenuse}}, \\qquad \\cos A = \\frac{\\text{adjacent}}{\\text{hypotenuse}}, \\qquad \\tan A = \\frac{\\text{opposite}}{\\text{adjacent}}.$$

## Why only the angle matters

Two right triangles with the same acute angle are similar, by the test on two angles. In similar triangles the ratios of corresponding sides are equal, so $\\sin A$, $\\cos A$ and $\\tan A$ do not depend on the size of the triangle. They are numbers attached to the angle itself, and that is why they can be put in a table.

Since a leg is shorter than the hypotenuse, $0 < \\sin A < 1$ and $0 < \\cos A < 1$. The tangent can be any positive number.

## Three identities

$$\\sin^2 A + \\cos^2 A = 1, \\qquad \\tan A = \\frac{\\sin A}{\\cos A}, \\qquad \\sin(90° - A) = \\cos A.$$

The first is the Pythagorean theorem divided by $c^2$. The last says the sine of an angle equals the cosine of its complement, which is why the two columns of a table are read in opposite directions.

## Finding a side

$$a = c \\sin A, \\qquad b = c \\cos A, \\qquad a = b \\tan A.$$

**Example.** The hypotenuse is $10$ and $\\angle A = 30°$, so $\\sin 30° = 0{,}5$ gives the opposite leg $5$.

**Example.** A ladder leans at $60°$ and its foot is $2$ m from the wall. Then $\\cos 60° = 0{,}5 = \\dfrac{2}{L}$, so the ladder is $4$ m long.

### Exercises

1. In a right triangle the opposite leg is $3$ and the hypotenuse $5$. Find $\\sin A$.
2. With the same triangle find $\\cos A$ and $\\tan A$.
3. $\\sin A = 0{,}6$. Find $\\cos A$.
4. The hypotenuse is $20$ and $\\sin A = 0{,}3$. Find the opposite leg.
5. The adjacent leg is $8$ and $\\tan A = 1{,}5$. Find the opposite leg.
6. Why is $\\sin A$ always less than $1$?
7. Express $\\sin 70°$ through a cosine.
8. Two right triangles have an acute angle of $40°$. Compare their sines of $40°$.

### Answers

1. $0{,}6$. 2. $0{,}8$ and $0{,}75$. 3. $0{,}8$. 4. $6$. 5. $12$. 6. Because a leg is shorter than the hypotenuse. 7. $\\cos 20°$. 8. They are equal.`,
        hy: `## Սահմանումները

$A$ սուր անկյունով ուղղանկյուն եռանկյունում $BC$ էջը $A$-ի **դիմացն** է, $AC$ էջը՝ նրան **կից**, իսկ $AB$-ն ներքնաձիգն է։

$$\\sin A = \\frac{\\text{դիմացի էջ}}{\\text{ներքնաձիգ}}, \\qquad \\cos A = \\frac{\\text{կից էջ}}{\\text{ներքնաձիգ}}, \\qquad \\tan A = \\frac{\\text{դիմացի էջ}}{\\text{կից էջ}}.$$

## Ինչու է կարևոր միայն անկյունը

Միևնույն սուր անկյունն ունեցող երկու ուղղանկյուն եռանկյուն նման են՝ ըստ երկու անկյան հայտանիշի։ Նման եռանկյուններում համապատասխան կողմերի հարաբերությունները հավասար են, ուրեմն $\\sin A$-ն, $\\cos A$-ն և $\\tan A$-ն կախված չեն եռանկյան չափերից։ Դրանք հենց անկյանը կապված թվեր են, և հենց դրա համար կարելի է դրանք աղյուսակագրել։

Քանի որ էջը ներքնաձիգից կարճ է, $0 < \\sin A < 1$ և $0 < \\cos A < 1$. Տանգենսը կարող է լինել ցանկացած դրական թիվ։

## Երեք նույնություն

$$\\sin^2 A + \\cos^2 A = 1, \\qquad \\tan A = \\frac{\\sin A}{\\cos A}, \\qquad \\sin(90° - A) = \\cos A.$$

Առաջինը Պյութագորասի թեորեմն է՝ բաժանած $c^2$-ի։ Վերջինն ասում է, որ անկյան սինուսը հավասար է իր լրացույցի կոսինուսին, և հենց դրա համար աղյուսակի երկու սյունակը կարդացվում են հակառակ ուղղություններով։

## Կողմի գտնելը

$$a = c \\sin A, \\qquad b = c \\cos A, \\qquad a = b \\tan A.$$

**Օրինակ։** Ներքնաձիգը $10$ է, $\\angle A = 30°$, ուրեմն $\\sin 30° = 0{,}5$-ը տալիս է դիմացի էջը՝ $5$.

**Օրինակ։** Սանդուղքը հենված է $60°$ անկյան տակ, և նրա ոտքը պատից $2$ մ հեռու է։ Այդ դեպքում $\\cos 60° = 0{,}5 = \\dfrac{2}{L}$, ուրեմն սանդուղքը $4$ մ է։

### Վարժություններ

1. Ուղղանկյուն եռանկյունում դիմացի էջը $3$ է, ներքնաձիգը՝ $5$. Գտիր $\\sin A$-ն։
2. Նույն եռանկյունում գտիր $\\cos A$-ն և $\\tan A$-ն։
3. $\\sin A = 0{,}6$. Գտիր $\\cos A$-ն։
4. Ներքնաձիգը $20$ է, $\\sin A = 0{,}3$. Գտիր դիմացի էջը։
5. Կից էջը $8$ է, $\\tan A = 1{,}5$. Գտիր դիմացի էջը։
6. Ինչու՞ է $\\sin A$-ն միշտ $1$-ից փոքր։
7. Արտահայտիր $\\sin 70°$-ը կոսինուսով։
8. Երկու ուղղանկյուն եռանկյուն ունեն $40°$ սուր անկյուն։ Համեմատիր նրանց $40°$-ի սինուսները։

### Պատասխաններ

1. $0{,}6$. 2. $0{,}8$ և $0{,}75$. 3. $0{,}8$. 4. $6$. 5. $12$. 6. Որովհետև էջը ներքնաձիգից կարճ է։ 7. $\\cos 20°$. 8. Հավասար են։`,
        ru: `## Определения

В прямоугольном треугольнике с острым углом $A$ катет $BC$ **противолежащий** углу $A$, катет $AC$ **прилежащий** к нему, а $AB$ — гипотенуза.

$$\\sin A = \\frac{\\text{противолежащий}}{\\text{гипотенуза}}, \\qquad \\cos A = \\frac{\\text{прилежащий}}{\\text{гипотенуза}}, \\qquad \\tan A = \\frac{\\text{противолежащий}}{\\text{прилежащий}}.$$

## Почему важен только угол

Два прямоугольных треугольника с одинаковым острым углом подобны по признаку о двух углах. У подобных треугольников отношения соответственных сторон равны, поэтому $\\sin A$, $\\cos A$ и $\\tan A$ не зависят от размеров треугольника. Это числа, привязанные к самому углу, — потому их и можно свести в таблицу.

Так как катет короче гипотенузы, $0 < \\sin A < 1$ и $0 < \\cos A < 1$. Тангенс может быть любым положительным числом.

## Три тождества

$$\\sin^2 A + \\cos^2 A = 1, \\qquad \\tan A = \\frac{\\sin A}{\\cos A}, \\qquad \\sin(90° - A) = \\cos A.$$

Первое — это теорема Пифагора, делённая на $c^2$. Последнее говорит, что синус угла равен косинусу дополняющего его до $90°$, поэтому два столбца таблицы читают в противоположных направлениях.

## Поиск стороны

$$a = c \\sin A, \\qquad b = c \\cos A, \\qquad a = b \\tan A.$$

**Пример.** Гипотенуза равна $10$, $\\angle A = 30°$, значит $\\sin 30° = 0{,}5$ даёт противолежащий катет $5$.

**Пример.** Лестница прислонена под углом $60°$, её основание в $2$ м от стены. Тогда $\\cos 60° = 0{,}5 = \\dfrac{2}{L}$, значит лестница длиной $4$ м.

### Упражнения

1. В прямоугольном треугольнике противолежащий катет равен $3$, гипотенуза $5$. Найди $\\sin A$.
2. В том же треугольнике найди $\\cos A$ и $\\tan A$.
3. $\\sin A = 0{,}6$. Найди $\\cos A$.
4. Гипотенуза равна $20$, $\\sin A = 0{,}3$. Найди противолежащий катет.
5. Прилежащий катет равен $8$, $\\tan A = 1{,}5$. Найди противолежащий катет.
6. Почему $\\sin A$ всегда меньше $1$?
7. Вырази $\\sin 70°$ через косинус.
8. У двух прямоугольных треугольников есть острый угол $40°$. Сравни их синусы $40°$.

### Ответы

1. $0{,}6$. 2. $0{,}8$ и $0{,}75$. 3. $0{,}8$. 4. $6$. 5. $12$. 6. Потому что катет короче гипотенузы. 7. $\\cos 20°$. 8. Они равны.`,
      },
      [
        q(t("The sine of an acute angle is…", "Սուր անկյան սինուսն է…", "Синус острого угла — это…"), [t("opposite over hypotenuse", "դիմացի էջը բաժանած ներքնաձիգին", "противолежащий катет к гипотенузе"), t("adjacent over hypotenuse", "կից էջը բաժանած ներքնաձիգին", "прилежащий катет к гипотенузе"), t("opposite over adjacent", "դիմացի էջը բաժանած կից էջին", "противолежащий к прилежащему")], 0),
        q(t("The tangent of an acute angle is…", "Սուր անկյան տանգենսն է…", "Тангенс острого угла — это…"), [t("adjacent over opposite", "կից էջը բաժանած դիմացի էջին", "прилежащий к противолежащему"), t("opposite over adjacent", "դիմացի էջը բաժանած կից էջին", "противолежащий к прилежащему"), t("hypotenuse over leg", "ներքնաձիգը բաժանած էջին", "гипотенуза к катету")], 1),
        q(t("sin²A + cos²A equals…", "sin²A + cos²A հավասար է…", "sin²A + cos²A равно…"), [t("0", "0", "0"), t("2", "2", "2"), t("1", "1", "1")], 2),
        q(t("The ratios depend on…", "Հարաբերությունները կախված են…", "Отношения зависят от…"), [t("the angle only", "միայն անկյունից", "только от угла"), t("the size of the triangle", "եռանկյան չափերից", "размеров треугольника"), t("the hypotenuse", "ներքնաձիգից", "гипотенузы")], 0),
        q(t("If sin A = 0.6, then cos A equals…", "Եթե sin A = 0,6, ապա cos A հավասար է…", "Если sin A = 0,6, то cos A равен…"), [t("0.4", "0,4", "0,4"), t("0.8", "0,8", "0,8"), t("0.6", "0,6", "0,6")], 1),
        q(t("sin(90° - A) equals…", "sin(90° - A) հավասար է…", "sin(90° - A) равно…"), [t("sin A", "sin A", "sin A"), t("tan A", "tan A", "tan A"), t("cos A", "cos A", "cos A")], 2),
      ],
    ),
    lesson(
      "trig-values-30-45-60",
      ["Values for 30°, 45° and 60°", "30°, 45° և 60° անկյունների արժեքները", "Значения для 30°, 45° и 60°"],
      {
        en: ["Derive the values from the square and the equilateral triangle", "Know the table by heart", "Use the values in exact calculations"],
        hy: ["Արժեքները ստանալ քառակուսուց և հավասարակողմ եռանկյունից", "Աղյուսակն իմանալ անգիր", "Կիրառել արժեքները ճշգրիտ հաշվումներում"],
        ru: ["Выводить значения из квадрата и равностороннего треугольника", "Знать таблицу наизусть", "Применять значения в точных вычислениях"],
      },
      {
        en: `## The table

| | $30°$ | $45°$ | $60°$ |
|---|---|---|---|
| $\\sin$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ |
| $\\cos$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{1}{2}$ |
| $\\tan$ | $\\dfrac{\\sqrt{3}}{3}$ | $1$ | $\\sqrt{3}$ |

Read the sine row left to right and the cosine row right to left: they are the same numbers reversed, because $\\sin(90° - A) = \\cos A$.

## Where $45°$ comes from

Half of a square cut by a diagonal is a right triangle with legs $1$, $1$ and hypotenuse $\\sqrt{2}$. Its acute angles are $45°$, so

$$\\sin 45° = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\tan 45° = 1.$$

## Where $30°$ and $60°$ come from

Cut an equilateral triangle of side $2$ in half by a height. The result is a right triangle with hypotenuse $2$, short leg $1$ and, by Pythagoras, long leg $\\sqrt{3}$. Its angles are $30°$ and $60°$, so

$$\\sin 30° = \\frac{1}{2}, \\qquad \\cos 30° = \\frac{\\sqrt{3}}{2}, \\qquad \\tan 60° = \\sqrt{3}.$$

Note the special fact: **the leg opposite a $30°$ angle is half the hypotenuse.**

## Worked example

A right triangle has hypotenuse $12$ and an angle of $30°$. The opposite leg is $6$ and the other leg is $12 \\cos 30° = 6\\sqrt{3}$.

A ramp rises at $30°$ over a length of $10$ m, so its height is $5$ m.

### Exercises

1. Compute $\\sin 30° + \\cos 60°$.
2. Compute $\\tan 45°$.
3. Compute $\\sin 60°$.
4. A hypotenuse of $8$ with a $30°$ angle: find the opposite leg.
5. A hypotenuse of $10$ with a $45°$ angle: find a leg.
6. A leg of $5$ with an adjacent angle of $60°$: find the opposite leg.
7. The leg opposite $30°$ is $7$. Find the hypotenuse.
8. Compute $\\cos 45° \\cdot \\sqrt{2}$.

### Answers

1. $1$. 2. $1$. 3. $\\dfrac{\\sqrt{3}}{2}$. 4. $4$. 5. $5\\sqrt{2}$. 6. $5\\sqrt{3}$. 7. $14$. 8. $1$.`,
        hy: `## Աղյուսակը

| | $30°$ | $45°$ | $60°$ |
|---|---|---|---|
| $\\sin$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ |
| $\\cos$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{1}{2}$ |
| $\\tan$ | $\\dfrac{\\sqrt{3}}{3}$ | $1$ | $\\sqrt{3}$ |

Սինուսի տողը կարդա ձախից աջ, կոսինուսինը՝ աջից ձախ․ դրանք նույն թվերն են հակառակ կարգով, քանի որ $\\sin(90° - A) = \\cos A$.

## Որտեղից է $45°$-ը

Անկյունագծով կիսված քառակուսու կեսն ուղղանկյուն եռանկյուն է՝ $1$, $1$ էջերով և $\\sqrt{2}$ ներքնաձիգով։ Նրա սուր անկյունները $45°$ են, ուրեմն

$$\\sin 45° = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\tan 45° = 1.$$

## Որտեղից են $30°$-ը և $60°$-ը

$2$ կողմով հավասարակողմ եռանկյունը բարձրությամբ կիսիր։ Ստացվում է ուղղանկյուն եռանկյուն՝ $2$ ներքնաձիգով, $1$ փոքր էջով և, ըստ Պյութագորասի, $\\sqrt{3}$ մեծ էջով։ Նրա անկյուններն են $30°$ և $60°$, ուրեմն

$$\\sin 30° = \\frac{1}{2}, \\qquad \\cos 30° = \\frac{\\sqrt{3}}{2}, \\qquad \\tan 60° = \\sqrt{3}.$$

Նշիր հատուկ փաստը․ **$30°$ անկյան դիմացի էջը ներքնաձիգի կեսն է։**

## Լուծված օրինակ

Ուղղանկյուն եռանկյան ներքնաձիգը $12$ է, անկյունը՝ $30°$. Դիմացի էջը $6$ է, մյուսը՝ $12 \\cos 30° = 6\\sqrt{3}$.

Թեքահարթակը $10$ մ երկարությամբ բարձրանում է $30°$ անկյան տակ, ուրեմն նրա բարձրությունը $5$ մ է։

### Վարժություններ

1. Հաշվիր $\\sin 30° + \\cos 60°$.
2. Հաշվիր $\\tan 45°$.
3. Հաշվիր $\\sin 60°$.
4. $8$ ներքնաձիգ և $30°$ անկյուն․ գտիր դիմացի էջը։
5. $10$ ներքնաձիգ և $45°$ անկյուն․ գտիր էջը։
6. $5$ էջ և նրան կից $60°$ անկյուն․ գտիր դիմացի էջը։
7. $30°$-ի դիմացի էջը $7$ է։ Գտիր ներքնաձիգը։
8. Հաշվիր $\\cos 45° \\cdot \\sqrt{2}$.

### Պատասխաններ

1. $1$. 2. $1$. 3. $\\dfrac{\\sqrt{3}}{2}$. 4. $4$. 5. $5\\sqrt{2}$. 6. $5\\sqrt{3}$. 7. $14$. 8. $1$.`,
        ru: `## Таблица

| | $30°$ | $45°$ | $60°$ |
|---|---|---|---|
| $\\sin$ | $\\dfrac{1}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{\\sqrt{3}}{2}$ |
| $\\cos$ | $\\dfrac{\\sqrt{3}}{2}$ | $\\dfrac{\\sqrt{2}}{2}$ | $\\dfrac{1}{2}$ |
| $\\tan$ | $\\dfrac{\\sqrt{3}}{3}$ | $1$ | $\\sqrt{3}$ |

Строку синуса читай слева направо, строку косинуса — справа налево: это одни и те же числа в обратном порядке, ведь $\\sin(90° - A) = \\cos A$.

## Откуда берётся $45°$

Половина квадрата, разрезанного диагональю, — прямоугольный треугольник с катетами $1$, $1$ и гипотенузой $\\sqrt{2}$. Его острые углы равны $45°$, поэтому

$$\\sin 45° = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}, \\qquad \\tan 45° = 1.$$

## Откуда берутся $30°$ и $60°$

Раздели высотой пополам равносторонний треугольник со стороной $2$. Получится прямоугольный треугольник с гипотенузой $2$, меньшим катетом $1$ и, по теореме Пифагора, большим катетом $\\sqrt{3}$. Его углы равны $30°$ и $60°$, поэтому

$$\\sin 30° = \\frac{1}{2}, \\qquad \\cos 30° = \\frac{\\sqrt{3}}{2}, \\qquad \\tan 60° = \\sqrt{3}.$$

Запомни особый факт: **катет против угла $30°$ равен половине гипотенузы.**

## Разобранный пример

У прямоугольного треугольника гипотенуза $12$ и угол $30°$. Противолежащий катет равен $6$, другой катет равен $12 \\cos 30° = 6\\sqrt{3}$.

Пандус длиной $10$ м поднимается под углом $30°$, значит его высота равна $5$ м.

### Упражнения

1. Вычисли $\\sin 30° + \\cos 60°$.
2. Вычисли $\\tan 45°$.
3. Вычисли $\\sin 60°$.
4. Гипотенуза $8$ и угол $30°$: найди противолежащий катет.
5. Гипотенуза $10$ и угол $45°$: найди катет.
6. Катет $5$ и прилежащий угол $60°$: найди противолежащий катет.
7. Катет против угла $30°$ равен $7$. Найди гипотенузу.
8. Вычисли $\\cos 45° \\cdot \\sqrt{2}$.

### Ответы

1. $1$. 2. $1$. 3. $\\dfrac{\\sqrt{3}}{2}$. 4. $4$. 5. $5\\sqrt{2}$. 6. $5\\sqrt{3}$. 7. $14$. 8. $1$.`,
      },
      [
        q(t("sin 30° equals…", "sin 30° հավասար է…", "sin 30° равно…"), [t("1/2", "1/2", "1/2"), t("√3/2", "√3/2", "√3/2"), t("√2/2", "√2/2", "√2/2")], 0),
        q(t("tan 45° equals…", "tan 45° հավասար է…", "tan 45° равно…"), [t("0", "0", "0"), t("1", "1", "1"), t("√3", "√3", "√3")], 1),
        q(t("cos 30° equals…", "cos 30° հավասար է…", "cos 30° равно…"), [t("1/2", "1/2", "1/2"), t("√2/2", "√2/2", "√2/2"), t("√3/2", "√3/2", "√3/2")], 2),
        q(t("The leg opposite a 30° angle equals…", "30° անկյան դիմացի էջը հավասար է…", "Катет против угла 30° равен…"), [t("half the hypotenuse", "ներքնաձիգի կեսին", "половине гипотенузы"), t("the hypotenuse", "ներքնաձիգին", "гипотенузе"), t("the other leg", "մյուս էջին", "другому катету")], 0),
        q(t("The values for 45° come from…", "45°-ի արժեքները գալիս են…", "Значения для 45° получают из…"), [t("an equilateral triangle", "հավասարակողմ եռանկյունից", "равностороннего треугольника"), t("half a square", "քառակուսու կեսից", "половины квадрата"), t("a circle", "շրջանագծից", "окружности")], 1),
        q(t("sin 30° + cos 60° equals…", "sin 30° + cos 60° հավասար է…", "sin 30° + cos 60° равно…"), [t("0.5", "0,5", "0,5"), t("1.5", "1,5", "1,5"), t("1", "1", "1")], 2),
      ],
    ),
    lesson(
      "trig-problems",
      ["Problems with trigonometry", "Եռանկյունաչափության խնդիրներ", "Задачи с тригонометрией"],
      {
        en: ["Solve a right triangle from two given elements", "Use the angle of elevation in practical problems", "Find the area of a triangle through an angle"],
        hy: ["Երկու տրված տարրով լուծել ուղղանկյուն եռանկյունը", "Գործնական խնդիրներում կիրառել բարձրացման անկյունը", "Անկյան միջոցով գտնել եռանկյան մակերեսը"],
        ru: ["Решать прямоугольный треугольник по двум данным элементам", "Применять угол возвышения в практических задачах", "Находить площадь треугольника через угол"],
      },
      {
        en: `## Solving a right triangle

To **solve** a triangle is to find all its sides and angles. In a right triangle two elements are enough, if at least one is a side.

| given | how to go on |
|---|---|
| hypotenuse and an angle | $a = c\\sin A$, $b = c\\cos A$ |
| a leg and an angle | $a = b\\tan A$ or $c = \\dfrac{a}{\\sin A}$ |
| two legs | Pythagoras, then $\\tan A = \\dfrac{a}{b}$ |

The second acute angle is always $90°$ minus the first.

## The angle of elevation

The angle between the horizontal and the line of sight to a high point is the **angle of elevation**; looking down, it is the angle of depression.

**Example.** From $30$ m away a tower is seen at an elevation of $60°$, and the eye is $1{,}6$ m above the ground. The height above eye level is $30 \\tan 60° = 30\\sqrt{3} \\approx 52$ m, so the tower is about $53{,}6$ m tall.

## Area through an angle

If two sides of a triangle are $a$ and $b$ and the angle between them is $C$, the height to $a$ is $b \\sin C$, so

$$S = \\frac{1}{2}ab\\sin C.$$

For $a = 6$, $b = 10$, $C = 30°$ this gives $S = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot 0{,}5 = 15$.

## A slope

A road rising $1$ m for every $20$ m of horizontal distance has $\\tan \\alpha = 0{,}05$, an angle of about $3°$. Road signs give such a slope as a percentage: $5\\%$.

### Exercises

1. The hypotenuse is $14$ and $\\angle A = 30°$. Find both legs.
2. The legs are $5$ and $5$. Find the acute angles.
3. A leg is $9$ and the adjacent angle is $45°$. Find the other leg.
4. From $20$ m away a tree is seen at $45°$ from eye level $1{,}5$ m. Find its height.
5. Find the area of a triangle with sides $8$ and $12$ and an angle of $30°$ between them.
6. A ramp is $13$ m long and rises $5$ m. Find $\\sin$ of its angle.
7. A slope of $5\\%$ means which tangent?
8. In a right triangle one acute angle is $40°$. Find the other.

### Answers

1. $7$ and $7\\sqrt{3}$. 2. $45°$ and $45°$. 3. $9$. 4. $21{,}5$ m. 5. $24$. 6. $\\dfrac{5}{13}$. 7. $0{,}05$. 8. $50°$.`,
        hy: `## Ուղղանկյուն եռանկյան լուծումը

Եռանկյունը **լուծել** նշանակում է գտնել նրա բոլոր կողմերն ու անկյունները։ Ուղղանկյուն եռանկյունում բավական է երկու տարր, եթե դրանցից գոնե մեկը կողմ է։

| տրված է | ինչպես շարունակել |
|---|---|
| ներքնաձիգը և անկյունը | $a = c\\sin A$, $b = c\\cos A$ |
| էջը և անկյունը | $a = b\\tan A$ կամ $c = \\dfrac{a}{\\sin A}$ |
| երկու էջ | Պյութագորաս, հետո $\\tan A = \\dfrac{a}{b}$ |

Երկրորդ սուր անկյունը միշտ $90°$ հանած առաջինն է։

## Բարձրացման անկյուն

Հորիզոնականի և բարձր կետին ուղղված հայացքի գծի միջև անկյունը **բարձրացման անկյունն** է, իսկ ներքև նայելիս՝ իջեցման անկյունը։

**Օրինակ։** $30$ մ հեռավորությունից աշտարակն երևում է $60°$ բարձրացման անկյան տակ, իսկ աչքը գետնից $1{,}6$ մ բարձր է։ Աչքի մակարդակից վեր բարձրությունը $30 \\tan 60° = 30\\sqrt{3} \\approx 52$ մ է, ուրեմն աշտարակը մոտ $53{,}6$ մ է։

## Մակերեսն անկյան միջոցով

Եթե եռանկյան երկու կողմերն են $a$-ն և $b$-ն, իսկ դրանց միջև անկյունը՝ $C$, ապա $a$-ին տարված բարձրությունը $b \\sin C$ է, ուստի

$$S = \\frac{1}{2}ab\\sin C.$$

$a = 6$, $b = 10$, $C = 30°$ դեպքում սա տալիս է $S = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot 0{,}5 = 15$.

## Թեքություն

Ճանապարհը, որն ամեն $20$ մ հորիզոնական հեռավորության վրա բարձրանում է $1$ մ, ունի $\\tan \\alpha = 0{,}05$՝ մոտ $3°$ անկյուն։ Ճանապարհային նշաններն այդպիսի թեքությունը տալիս են տոկոսով՝ $5\\%$.

### Վարժություններ

1. Ներքնաձիգը $14$ է, $\\angle A = 30°$. Գտիր երկու էջերը։
2. Էջերն են $5$ և $5$. Գտիր սուր անկյունները։
3. Էջը $9$ է, նրան կից անկյունը՝ $45°$. Գտիր մյուս էջը։
4. $20$ մ հեռավորությունից ծառն երևում է $45°$ անկյան տակ՝ $1{,}5$ մ աչքի մակարդակից։ Գտիր բարձրությունը։
5. Գտիր $8$ և $12$ կողմերով ու դրանց միջև $30°$ անկյունով եռանկյան մակերեսը։
6. Թեքահարթակը $13$ մ է և բարձրանում է $5$ մ։ Գտիր նրա անկյան սինուսը։
7. $5\\%$ թեքությունն ո՞ր տանգենսն է նշանակում։
8. Ուղղանկյուն եռանկյան մի սուր անկյունը $40°$ է։ Գտիր մյուսը։

### Պատասխաններ

1. $7$ և $7\\sqrt{3}$. 2. $45°$ և $45°$. 3. $9$. 4. $21{,}5$ մ։ 5. $24$. 6. $\\dfrac{5}{13}$. 7. $0{,}05$. 8. $50°$.`,
        ru: `## Решение прямоугольного треугольника

**Решить** треугольник — значит найти все его стороны и углы. В прямоугольном треугольнике достаточно двух элементов, если хотя бы один из них — сторона.

| дано | как продолжать |
|---|---|
| гипотенуза и угол | $a = c\\sin A$, $b = c\\cos A$ |
| катет и угол | $a = b\\tan A$ или $c = \\dfrac{a}{\\sin A}$ |
| два катета | Пифагор, затем $\\tan A = \\dfrac{a}{b}$ |

Второй острый угол всегда равен $90°$ минус первый.

## Угол возвышения

Угол между горизонталью и лучом зрения на высокую точку называют **углом возвышения**; при взгляде вниз это угол понижения.

**Пример.** С расстояния $30$ м башня видна под углом возвышения $60°$, а глаз находится на $1{,}6$ м над землёй. Высота над уровнем глаз равна $30 \\tan 60° = 30\\sqrt{3} \\approx 52$ м, значит башня высотой около $53{,}6$ м.

## Площадь через угол

Если две стороны треугольника равны $a$ и $b$, а угол между ними равен $C$, то высота к $a$ равна $b \\sin C$, поэтому

$$S = \\frac{1}{2}ab\\sin C.$$

При $a = 6$, $b = 10$, $C = 30°$ получаем $S = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot 0{,}5 = 15$.

## Уклон

Дорога, поднимающаяся на $1$ м каждые $20$ м по горизонтали, имеет $\\tan \\alpha = 0{,}05$, то есть угол около $3°$. На дорожных знаках такой уклон указывают в процентах: $5\\%$.

### Упражнения

1. Гипотенуза равна $14$, $\\angle A = 30°$. Найди оба катета.
2. Катеты равны $5$ и $5$. Найди острые углы.
3. Катет равен $9$, прилежащий угол $45°$. Найди второй катет.
4. С расстояния $20$ м дерево видно под углом $45°$ с уровня глаз $1{,}5$ м. Найди его высоту.
5. Найди площадь треугольника со сторонами $8$ и $12$ и углом $30°$ между ними.
6. Пандус длиной $13$ м поднимается на $5$ м. Найди синус его угла.
7. Какому тангенсу отвечает уклон $5\\%$?
8. В прямоугольном треугольнике один острый угол равен $40°$. Найди второй.

### Ответы

1. $7$ и $7\\sqrt{3}$. 2. $45°$ и $45°$. 3. $9$. 4. $21{,}5$ м. 5. $24$. 6. $\\dfrac{5}{13}$. 7. $0{,}05$. 8. $50°$.`,
      },
      [
        q(t("To solve a right triangle you need…", "Ուղղանկյուն եռանկյունը լուծելու համար պետք է…", "Чтобы решить прямоугольный треугольник, нужно…"), [t("two elements, at least one a side", "երկու տարր, որոնցից գոնե մեկը կողմ է", "два элемента, хотя бы один — сторона"), t("three angles", "երեք անկյուն", "три угла"), t("the perimeter only", "միայն պարագիծը", "только периметр")], 0),
        q(t("With hypotenuse c and angle A, the opposite leg is…", "c ներքնաձիգի և A անկյան դեպքում դիմացի էջն է…", "При гипотенузе c и угле A противолежащий катет равен…"), [t("c cos A", "c cos A", "c cos A"), t("c sin A", "c sin A", "c sin A"), t("c tan A", "c tan A", "c tan A")], 1),
        q(t("The area of a triangle through an angle is…", "Անկյան միջոցով եռանկյան մակերեսն է…", "Площадь треугольника через угол равна…"), [t("ab sin C", "ab sin C", "ab sin C"), t("ab cos C", "ab cos C", "ab cos C"), t("½ ab sin C", "½ ab sin C", "½ ab sin C")], 2),
        q(t("A slope of 5% means a tangent of…", "5% թեքությունը նշանակում է տանգենս…", "Уклон 5% означает тангенс…"), [t("0.05", "0,05", "0,05"), t("5", "5", "5"), t("0.5", "0,5", "0,5")], 0),
        q(t("A 13 m ramp rising 5 m has sine…", "5 մ բարձրացող 13 մ թեքահարթակի սինուսն է…", "У пандуса 13 м с подъёмом 5 м синус равен…"), [t("13/5", "13/5", "13/5"), t("5/13", "5/13", "5/13"), t("12/13", "12/13", "12/13")], 1),
        q(t("If one acute angle is 40°, the other is…", "Եթե մի սուր անկյունը 40° է, մյուսն է…", "Если один острый угол равен 40°, другой равен…"), [t("40°", "40°", "40°"), t("140°", "140°", "140°"), t("50°", "50°", "50°")], 2),
      ],
    ),
  ],
};
