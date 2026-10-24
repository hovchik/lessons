import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit2: UnitSeed = {
  title: t("Triangles", "Եռանկյուններ", "Треугольники"),
  summary: t(
    "Congruence tests, the isosceles triangle, medians, bisectors, altitudes, the circle and constructions.",
    "Հավասարության հայտանիշներ, հավասարասրուն եռանկյուն, միջնագծեր, կիսորդներ, բարձրություններ, շրջանագիծ և կառուցումներ։",
    "Признаки равенства, равнобедренный треугольник, медианы, биссектрисы, высоты, окружность и построения.",
  ),
  lessons: [
    lesson(
      "triangle-elements",
      ["Triangle and its elements", "Եռանկյունը և նրա տարրերը", "Треугольник и его элементы"],
      {
        en: ["Name the vertices, sides and angles of a triangle", "Classify triangles by sides and by angles", "Understand what congruent triangles are"],
        hy: ["Անվանել եռանկյան գագաթները, կողմերը և անկյունները", "Դասակարգել եռանկյունները ըստ կողմերի և անկյունների", "Հասկանալ, թե որ եռանկյուններն են հավասար"],
        ru: ["Называть вершины, стороны и углы треугольника", "Классифицировать треугольники по сторонам и углам", "Понимать, какие треугольники называются равными"],
      },
      {
        en: `## Elements

Three points $A$, $B$, $C$ not on one line, joined by segments, form **triangle** $ABC$. The points are the **vertices**, the segments $AB$, $BC$, $CA$ are the **sides**, and $\\angle A$, $\\angle B$, $\\angle C$ are the **angles**. The **perimeter** is the sum of the sides.

Side $BC$ is **opposite** angle $A$; angle $A$ lies **between** sides $AB$ and $AC$.

### Kinds of triangles

| By sides | | By angles | |
|---|---|---|---|
| scalene | all sides different | acute | all angles acute |
| isosceles | two sides equal | right | one right angle |
| equilateral | all sides equal | obtuse | one obtuse angle |

### Congruent triangles

Two triangles are **congruent** if one can be placed exactly on the other. Then their **corresponding** sides and angles are equal. In $\\triangle ABC = \\triangle MNK$ the order of letters shows the matching: $A \\leftrightarrow M$, $B \\leftrightarrow N$, $C \\leftrightarrow K$. So $AB = MN$ and $\\angle B = \\angle N$.

### Example

The sides are in the ratio $2 : 3 : 4$ and the perimeter is 45 cm. Then $2x + 3x + 4x = 45$, $x = 5$: the sides are 10, 15 and 20 cm.

### Exercises

1. Find the perimeter of a triangle with sides 5, 7 and 9 cm.
2. An isosceles triangle has base 6 cm and equal sides 8 cm. Find its perimeter.
3. An equilateral triangle has perimeter 27 cm. Find its side.
4. The perimeter is 32 cm, one side is 10 cm and the other two are equal. Find them.
5. $\\triangle ABC = \\triangle MNK$, $AB = 5$ cm, $\\angle B = 40°$. Find $MN$ and $\\angle N$.
6. The sides are in the ratio $2 : 3 : 4$, perimeter 45 cm. Find the sides.
7. Classify triangles with angles $30°, 60°, 90°$ and $100°, 40°, 40°$.
8. An isosceles triangle has perimeter 40 cm and its base is 4 cm longer than each equal side. Find the sides.

### Answers

1. 21 cm. 2. 22 cm. 3. 9 cm. 4. 11 cm and 11 cm. 5. 5 cm and $40°$. 6. 10, 15, 20 cm. 7. Right; obtuse and isosceles. 8. 12, 12 and 16 cm.`,
        hy: `## Տարրեր

Մեկ ուղղի վրա չգտնվող $A$, $B$, $C$ կետերը, միացված հատվածներով, կազմում են $ABC$ **եռանկյունը**։ Կետերը **գագաթներն** են, $AB$, $BC$, $CA$ հատվածները՝ **կողմերը**, իսկ $\\angle A$, $\\angle B$, $\\angle C$-ն՝ **անկյունները**։ **Պարագիծը** կողմերի գումարն է։

$BC$ կողմը $A$ անկյան **դիմացն** է, $A$ անկյունը գտնվում է $AB$ և $AC$ կողմերի **միջև**։

### Եռանկյունների տեսակները

| Ըստ կողմերի | | Ըստ անկյունների | |
|---|---|---|---|
| անհավասարակողմ | բոլոր կողմերը տարբեր են | սուրանկյուն | բոլոր անկյունները սուր են |
| հավասարասրուն | երկու կողմ հավասար են | ուղղանկյուն | մեկ ուղիղ անկյուն |
| հավասարակողմ | բոլոր կողմերը հավասար են | բութանկյուն | մեկ բութ անկյուն |

### Հավասար եռանկյուններ

Երկու եռանկյուն **հավասար** են, եթե մեկը կարելի է ճշգրիտ դնել մյուսի վրա։ Այդ դեպքում նրանց **համապատասխան** կողմերը և անկյունները հավասար են։ $\\triangle ABC = \\triangle MNK$ գրառման մեջ տառերի հերթականությունը ցույց է տալիս համապատասխանությունը. $A \\leftrightarrow M$, $B \\leftrightarrow N$, $C \\leftrightarrow K$։ Ուրեմն $AB = MN$ և $\\angle B = \\angle N$։

### Օրինակ

Կողմերը հարաբերում են ինչպես $2 : 3 : 4$, պարագիծը 45 սմ է։ Ապա $2x + 3x + 4x = 45$, $x = 5$. կողմերն են 10, 15 և 20 սմ։

### Վարժություններ

1. Գտիր 5, 7 և 9 սմ կողմերով եռանկյան պարագիծը։
2. Հավասարասրուն եռանկյան հիմքը 6 սմ է, սրունքները՝ 8 սմ։ Գտիր պարագիծը։
3. Հավասարակողմ եռանկյան պարագիծը 27 սմ է։ Գտիր կողմը։
4. Պարագիծը 32 սմ է, մի կողմը՝ 10 սմ, մյուս երկուսը հավասար են։ Գտիր դրանք։
5. $\\triangle ABC = \\triangle MNK$, $AB = 5$ սմ, $\\angle B = 40°$։ Գտիր $MN$-ը և $\\angle N$-ը։
6. Կողմերը հարաբերում են ինչպես $2 : 3 : 4$, պարագիծը 45 սմ է։ Գտիր կողմերը։
7. Դասակարգիր $30°, 60°, 90°$ և $100°, 40°, 40°$ անկյուններով եռանկյունները։
8. Հավասարասրուն եռանկյան պարագիծը 40 սմ է, հիմքը յուրաքանչյուր սրունքից 4 սմ-ով երկար է։ Գտիր կողմերը։

### Պատասխաններ

1. 21 սմ։ 2. 22 սմ։ 3. 9 սմ։ 4. 11 սմ և 11 սմ։ 5. 5 սմ և $40°$։ 6. 10, 15, 20 սմ։ 7. Ուղղանկյուն, բութանկյուն և հավասարասրուն։ 8. 12, 12 և 16 սմ։`,
        ru: `## Элементы

Три точки $A$, $B$, $C$, не лежащие на одной прямой, соединённые отрезками, образуют **треугольник** $ABC$. Точки — **вершины**, отрезки $AB$, $BC$, $CA$ — **стороны**, $\\angle A$, $\\angle B$, $\\angle C$ — **углы**. **Периметр** — сумма сторон.

Сторона $BC$ **противолежит** углу $A$; угол $A$ лежит **между** сторонами $AB$ и $AC$.

### Виды треугольников

| По сторонам | | По углам | |
|---|---|---|---|
| разносторонний | все стороны разные | остроугольный | все углы острые |
| равнобедренный | две стороны равны | прямоугольный | один угол прямой |
| равносторонний | все стороны равны | тупоугольный | один угол тупой |

### Равные треугольники

Два треугольника **равны**, если их можно совместить наложением. Тогда их **соответственные** стороны и углы равны. В записи $\\triangle ABC = \\triangle MNK$ порядок букв показывает соответствие: $A \\leftrightarrow M$, $B \\leftrightarrow N$, $C \\leftrightarrow K$. Значит $AB = MN$ и $\\angle B = \\angle N$.

### Пример

Стороны относятся как $2 : 3 : 4$, периметр 45 см. Тогда $2x + 3x + 4x = 45$, $x = 5$: стороны 10, 15 и 20 см.

### Упражнения

1. Найди периметр треугольника со сторонами 5, 7 и 9 см.
2. У равнобедренного треугольника основание 6 см, боковые стороны по 8 см. Найди периметр.
3. Периметр равностороннего треугольника 27 см. Найди сторону.
4. Периметр 32 см, одна сторона 10 см, две другие равны. Найди их.
5. $\\triangle ABC = \\triangle MNK$, $AB = 5$ см, $\\angle B = 40°$. Найди $MN$ и $\\angle N$.
6. Стороны относятся как $2 : 3 : 4$, периметр 45 см. Найди стороны.
7. Определи вид треугольников с углами $30°, 60°, 90°$ и $100°, 40°, 40°$.
8. Периметр равнобедренного треугольника 40 см, основание на 4 см длиннее боковой стороны. Найди стороны.

### Ответы

1. 21 см. 2. 22 см. 3. 9 см. 4. 11 см и 11 см. 5. 5 см и $40°$. 6. 10, 15, 20 см. 7. Прямоугольный; тупоугольный и равнобедренный. 8. 12, 12 и 16 см.`,
      },
      [
        q(t("Perimeter of a triangle with sides 5, 7, 9:", "5, 7, 9 կողմերով եռանկյան պարագիծը՝", "Периметр треугольника со сторонами 5, 7, 9:"), [t("21", "21", "21"), t("315", "315", "315"), t("16", "16", "16")], 0),
        q(t("An equilateral triangle with perimeter 27 has side…", "27 պարագծով հավասարակողմ եռանկյան կողմը…", "Сторона равностороннего треугольника с периметром 27:"), [t("13.5", "13,5", "13,5"), t("9", "9", "9"), t("27", "27", "27")], 1),
        q(t("In △ABC = △MNK, angle B corresponds to…", "△ABC = △MNK-ում B անկյանը համապատասխանում է…", "В △ABC = △MNK углу B соответствует…"), [t("∠M", "∠M-ը", "∠M"), t("∠K", "∠K-ն", "∠K"), t("∠N", "∠N-ը", "∠N")], 2),
        q(t("An isosceles triangle has…", "Հավասարասրուն եռանկյունն ունի…", "У равнобедренного треугольника…"), [t("two equal sides", "երկու հավասար կողմ", "две равные стороны"), t("all sides different", "բոլոր կողմերը տարբեր", "все стороны разные"), t("three right angles", "երեք ուղիղ անկյուն", "три прямых угла")], 0),
        q(t("A triangle with a 100° angle is…", "100° անկյուն ունեցող եռանկյունը…", "Треугольник с углом 100° —"), [t("acute", "սուրանկյուն է", "остроугольный"), t("right", "ուղղանկյուն է", "прямоугольный"), t("obtuse", "բութանկյուն է", "тупоугольный")], 2),
        q(t("Sides 2 : 3 : 4, perimeter 45. The longest side is…", "Կողմերը՝ 2 : 3 : 4, պարագիծը՝ 45։ Ամենամեծ կողմը…", "Стороны 2 : 3 : 4, периметр 45. Наибольшая сторона:"), [t("15", "15", "15"), t("20", "20", "20"), t("18", "18", "18")], 1),
      ],
    ),
    lesson(
      "first-congruence-test",
      ["First congruence test (SAS)", "Հավասարության առաջին հայտանիշ", "Первый признак равенства треугольников"],
      {
        en: ["State the side-angle-side test", "Find the equal elements needed in a problem", "Write a short proof using the test"],
        hy: ["Ձևակերպել կողմ-անկյուն-կողմ հայտանիշը", "Խնդրում գտնել անհրաժեշտ հավասար տարրերը", "Հայտանիշով գրել կարճ ապացույց"],
        ru: ["Формулировать признак по двум сторонам и углу между ними", "Находить в задаче нужные равные элементы", "Записывать короткое доказательство с помощью признака"],
      },
      {
        en: `## The test

**Theorem (SAS).** If two sides and the angle **between them** of one triangle are equal to two sides and the angle between them of another triangle, the triangles are congruent.

The idea of the proof: place $\\triangle ABC$ on $\\triangle A_1B_1C_1$ so that the equal angles $A$ and $A_1$ coincide. The equal sides then lie along the same rays, so $B$ falls on $B_1$ and $C$ on $C_1$. All three vertices coincide.

The angle **must** be between the two sides. "Two sides and some angle" is not enough.

### How to write a proof

Segments $AB$ and $CD$ cross at $O$, the midpoint of each. Prove that $AC = BD$.

1. $AO = OB$ and $CO = OD$, because $O$ is the midpoint.
2. $\\angle AOC = \\angle BOD$ as vertical angles.
3. So $\\triangle AOC = \\triangle BOD$ by SAS, and $AC = BD$ as corresponding sides.

### Another example

Ray $AC$ is the bisector of $\\angle BAD$, and $AB = AD$. Then $\\triangle ABC = \\triangle ADC$: $AB = AD$, $\\angle BAC = \\angle DAC$, and $AC$ is common. So $BC = DC$ and $\\angle B = \\angle D$.

### Exercises

1. Segments $AB$ and $CD$ cross at $O$, the midpoint of each. Prove that $\\triangle AOC = \\triangle BOD$.
2. In exercise 1, $AC = 7$ cm. Find $BD$.
3. $AB = MN$, $BC = NK$, $\\angle B = \\angle N$. Are $\\triangle ABC$ and $\\triangle MNK$ congruent?
4. $AB = MN$, $AC = MK$, $\\angle B = \\angle M$. Is this enough for congruence?
5. $AC$ is the bisector of $\\angle BAD$ and $AB = AD$. Prove that $BC = DC$.
6. In exercise 5, $\\angle B = 70°$. Find $\\angle D$.
7. Which three elements does the SAS test use?
8. Two right triangles have legs 3 cm and 4 cm. Are they congruent?

### Answers

1. $AO = OB$, $CO = OD$, vertical angles are equal. 2. 7 cm. 3. Yes, by SAS. 4. No: the angle is not between the sides. 5. $\\triangle ABC = \\triangle ADC$ by SAS. 6. $70°$. 7. Two sides and the angle between them. 8. Yes: two legs and the right angle between them.`,
        hy: `## Հայտանիշը

**Թեորեմ (կողմ-անկյուն-կողմ).** Եթե մի եռանկյան երկու կողմը և դրանց **միջև ընկած** անկյունը համապատասխանաբար հավասար են մյուս եռանկյան երկու կողմին և դրանց միջև ընկած անկյանը, ապա եռանկյունները հավասար են։

Ապացույցի գաղափարը. $\\triangle ABC$-ն դնում ենք $\\triangle A_1B_1C_1$-ի վրա այնպես, որ $A$ և $A_1$ հավասար անկյունները համընկնեն։ Հավասար կողմերը տեղադրվում են նույն ճառագայթների վրա, ուրեմն $B$-ն համընկնում է $B_1$-ի, $C$-ն՝ $C_1$-ի հետ։ Երեք գագաթներն էլ համընկնում են։

Անկյունը **պետք է** լինի երկու կողմերի միջև։ «Երկու կողմ և ինչ-որ անկյուն»-ը բավական չէ։

### Ինչպես գրել ապացույցը

$AB$ և $CD$ հատվածները հատվում են $O$ կետում, որը նրանցից յուրաքանչյուրի միջնակետն է։ Ապացուցել, որ $AC = BD$։

1. $AO = OB$ և $CO = OD$, քանի որ $O$-ն միջնակետ է։
2. $\\angle AOC = \\angle BOD$՝ որպես հակադիր անկյուններ։
3. Ուրեմն $\\triangle AOC = \\triangle BOD$ ըստ առաջին հայտանիշի, և $AC = BD$՝ որպես համապատասխան կողմեր։

### Եվս մեկ օրինակ

$AC$ ճառագայթը $\\angle BAD$-ի կիսորդն է, և $AB = AD$։ Ապա $\\triangle ABC = \\triangle ADC$. $AB = AD$, $\\angle BAC = \\angle DAC$, իսկ $AC$-ն ընդհանուր է։ Ուրեմն $BC = DC$ և $\\angle B = \\angle D$։

### Վարժություններ

1. $AB$ և $CD$ հատվածները հատվում են $O$-ում, որը նրանցից յուրաքանչյուրի միջնակետն է։ Ապացուցիր, որ $\\triangle AOC = \\triangle BOD$։
2. Վարժություն 1-ում $AC = 7$ սմ։ Գտիր $BD$-ն։
3. $AB = MN$, $BC = NK$, $\\angle B = \\angle N$։ $\\triangle ABC$-ն և $\\triangle MNK$-ն հավասա՞ր են։
4. $AB = MN$, $AC = MK$, $\\angle B = \\angle M$։ Սա բավակա՞ն է հավասարության համար։
5. $AC$-ն $\\angle BAD$-ի կիսորդն է, և $AB = AD$։ Ապացուցիր, որ $BC = DC$։
6. Վարժություն 5-ում $\\angle B = 70°$։ Գտիր $\\angle D$-ն։
7. Ո՞ր երեք տարրերն է օգտագործում առաջին հայտանիշը։
8. Երկու ուղղանկյուն եռանկյան էջերն են 3 սմ և 4 սմ։ Նրանք հավասա՞ր են։

### Պատասխաններ

1. $AO = OB$, $CO = OD$, հակադիր անկյունները հավասար են։ 2. 7 սմ։ 3. Այո, ըստ առաջին հայտանիշի։ 4. Ոչ. անկյունը կողմերի միջև չէ։ 5. $\\triangle ABC = \\triangle ADC$ ըստ առաջին հայտանիշի։ 6. $70°$։ 7. Երկու կողմ և դրանց միջև ընկած անկյունը։ 8. Այո. երկու էջ և նրանց միջև ընկած ուղիղ անկյունը։`,
        ru: `## Признак

**Теорема (первый признак).** Если две стороны и угол **между ними** одного треугольника соответственно равны двум сторонам и углу между ними другого треугольника, то такие треугольники равны.

Идея доказательства: наложим $\\triangle ABC$ на $\\triangle A_1B_1C_1$ так, чтобы совпали равные углы $A$ и $A_1$. Равные стороны отложатся на одних и тех же лучах, поэтому $B$ совпадёт с $B_1$, а $C$ — с $C_1$. Совпадут все три вершины.

Угол **обязательно** должен лежать между сторонами. «Две стороны и какой-то угол» — недостаточно.

### Как записать доказательство

Отрезки $AB$ и $CD$ пересекаются в точке $O$, которая является серединой каждого из них. Докажем, что $AC = BD$.

1. $AO = OB$ и $CO = OD$, так как $O$ — середина.
2. $\\angle AOC = \\angle BOD$ как вертикальные.
3. Значит $\\triangle AOC = \\triangle BOD$ по первому признаку, и $AC = BD$ как соответственные стороны.

### Ещё пример

Луч $AC$ — биссектриса $\\angle BAD$, и $AB = AD$. Тогда $\\triangle ABC = \\triangle ADC$: $AB = AD$, $\\angle BAC = \\angle DAC$, сторона $AC$ общая. Значит $BC = DC$ и $\\angle B = \\angle D$.

### Упражнения

1. Отрезки $AB$ и $CD$ пересекаются в точке $O$ — середине каждого. Докажи, что $\\triangle AOC = \\triangle BOD$.
2. В упражнении 1 $AC = 7$ см. Найди $BD$.
3. $AB = MN$, $BC = NK$, $\\angle B = \\angle N$. Равны ли $\\triangle ABC$ и $\\triangle MNK$?
4. $AB = MN$, $AC = MK$, $\\angle B = \\angle M$. Достаточно ли этого для равенства?
5. $AC$ — биссектриса $\\angle BAD$, $AB = AD$. Докажи, что $BC = DC$.
6. В упражнении 5 $\\angle B = 70°$. Найди $\\angle D$.
7. Какие три элемента использует первый признак?
8. У двух прямоугольных треугольников катеты 3 см и 4 см. Равны ли они?

### Ответы

1. $AO = OB$, $CO = OD$, вертикальные углы равны. 2. 7 см. 3. Да, по первому признаку. 4. Нет: угол не между сторонами. 5. $\\triangle ABC = \\triangle ADC$ по первому признаку. 6. $70°$. 7. Две стороны и угол между ними. 8. Да: два катета и прямой угол между ними.`,
      },
      [
        q(t("The SAS test uses…", "Առաջին հայտանիշն օգտագործում է…", "Первый признак использует…"), [t("two sides and the angle between them", "երկու կողմ և դրանց միջև ընկած անկյունը", "две стороны и угол между ними"), t("three angles", "երեք անկյուն", "три угла"), t("two sides and any angle", "երկու կողմ և ցանկացած անկյուն", "две стороны и любой угол")], 0),
        q(t("AB = MN, BC = NK, ∠B = ∠N. The triangles are…", "AB = MN, BC = NK, ∠B = ∠N։ Եռանկյունները…", "AB = MN, BC = NK, ∠B = ∠N. Треугольники…"), [t("not necessarily congruent", "պարտադիր չէ, որ հավասար լինեն", "не обязательно равны"), t("congruent", "հավասար են", "равны"), t("never congruent", "երբեք հավասար չեն", "никогда не равны")], 1),
        q(t("O is the midpoint of AB and CD, AC = 7. BD =", "O-ն AB-ի և CD-ի միջնակետն է, AC = 7։ BD =", "O — середина AB и CD, AC = 7. BD ="), [t("3.5", "3,5", "3,5"), t("14", "14", "14"), t("7", "7", "7")], 2),
        q(t("AB = MN, AC = MK, ∠B = ∠M. Congruence…", "AB = MN, AC = MK, ∠B = ∠M։ Հավասարությունը…", "AB = MN, AC = MK, ∠B = ∠M. Равенство…"), [t("follows from SAS", "հետևում է առաջին հայտանիշից", "следует из первого признака"), t("does not follow", "չի հետևում", "не следует"), t("follows from SSS", "հետևում է երրորդ հայտանիշից", "следует из третьего признака")], 1),
        q(t("In congruent triangles corresponding angles are…", "Հավասար եռանկյուններում համապատասխան անկյունները…", "В равных треугольниках соответственные углы…"), [t("equal", "հավասար են", "равны"), t("supplementary", "գումարում 180° են", "в сумме 180°"), t("different", "տարբեր են", "различны")], 0),
        q(t("Two right triangles both have legs 3 and 4. They are…", "Երկու ուղղանկյուն եռանկյան էջերն են 3 և 4։ Նրանք…", "У двух прямоугольных треугольников катеты 3 и 4. Они…"), [t("impossible to compare", "հնարավոր չէ համեմատել", "несравнимы"), t("not congruent", "հավասար չեն", "не равны"), t("congruent", "հավասար են", "равны")], 2),
      ],
    ),
    lesson(
      "median-bisector-altitude",
      ["Median, bisector and altitude", "Միջնագիծ, կիսորդ և բարձրություն", "Медиана, биссектриса и высота"],
      {
        en: ["Define the median, bisector and altitude of a triangle", "Draw them in acute, right and obtuse triangles", "Use their definitions in calculations"],
        hy: ["Սահմանել եռանկյան միջնագիծը, կիսորդը և բարձրությունը", "Գծել դրանք սուրանկյուն, ուղղանկյուն և բութանկյուն եռանկյուններում", "Կիրառել սահմանումները հաշվումներում"],
        ru: ["Давать определения медианы, биссектрисы и высоты", "Строить их в остроугольном, прямоугольном и тупоугольном треугольниках", "Применять определения в вычислениях"],
      },
      {
        en: `## Three special segments

| Segment from vertex $B$ | Ends at | Property |
|---|---|---|
| **median** $BM$ | the midpoint $M$ of $AC$ | $AM = MC$ |
| **bisector** $BD$ | a point $D$ on $AC$ | $\\angle ABD = \\angle DBC$ |
| **altitude** $BH$ | the foot $H$ on line $AC$ | $BH \\perp AC$ |

Every triangle has **three** medians, three bisectors and three altitudes.

### Where the altitudes lie

- In an **acute** triangle all altitudes lie inside.
- In a **right** triangle two altitudes are the legs themselves.
- In an **obtuse** triangle the altitudes from the two acute angles lie **outside**: the foot is on the extension of the opposite side.

### Medians and perimeters

$BM$ is a median of $\\triangle ABC$. Triangles $ABM$ and $CBM$ share $BM$ and have $AM = MC$, so the difference of their perimeters equals $BC - AB$. If their perimeters are 24 cm and 30 cm, then $BC$ is 6 cm longer than $AB$.

### Exercises

1. $BM$ is a median of $\\triangle ABC$, $AC = 14$ cm. Find $AM$.
2. $AD$ is the bisector of $\\angle A = 76°$. Find $\\angle BAD$.
3. $CH$ is an altitude of $\\triangle ABC$. What is $\\angle CHA$?
4. Where do the altitudes from the acute angles of an obtuse triangle lie?
5. In $\\triangle ABC$ with $\\angle C = 90°$, name the three altitudes.
6. $BM$ is a median; the perimeters of $\\triangle ABM$ and $\\triangle CBM$ are 24 cm and 30 cm. How much longer is $BC$ than $AB$?
7. How many medians does a triangle have?
8. $\\angle ABC = 80°$ and $BD$ is its bisector. Find $\\angle ABD$.

### Answers

1. 7 cm. 2. $38°$. 3. $90°$. 4. Outside the triangle. 5. $AC$, $BC$ and the altitude from $C$ to $AB$. 6. 6 cm. 7. Three. 8. $40°$.`,
        hy: `## Երեք հատուկ հատված

| Հատված $B$ գագաթից | Վերջանում է | Հատկություն |
|---|---|---|
| **միջնագիծ** $BM$ | $AC$-ի $M$ միջնակետում | $AM = MC$ |
| **կիսորդ** $BD$ | $AC$-ի $D$ կետում | $\\angle ABD = \\angle DBC$ |
| **բարձրություն** $BH$ | $AC$ ուղղի $H$ հիմքում | $BH \\perp AC$ |

Յուրաքանչյուր եռանկյուն ունի **երեք** միջնագիծ, երեք կիսորդ և երեք բարձրություն։

### Որտեղ են բարձրությունները

- **Սուրանկյուն** եռանկյան բոլոր բարձրությունները ներսում են։
- **Ուղղանկյուն** եռանկյան երկու բարձրությունները հենց էջերն են։
- **Բութանկյուն** եռանկյան սուր անկյունների գագաթներից տարված բարձրությունները **դրսում** են. հիմքը դիմացի կողմի շարունակության վրա է։

### Միջնագծեր և պարագծեր

$BM$-ը $\\triangle ABC$-ի միջնագիծն է։ $ABM$ և $CBM$ եռանկյուններն ունեն ընդհանուր $BM$ և $AM = MC$, ուրեմն նրանց պարագծերի տարբերությունը հավասար է $BC - AB$-ին։ Եթե պարագծերը 24 սմ և 30 սմ են, ապա $BC$-ն 6 սմ-ով երկար է $AB$-ից։

### Վարժություններ

1. $BM$-ը $\\triangle ABC$-ի միջնագիծն է, $AC = 14$ սմ։ Գտիր $AM$-ը։
2. $AD$-ն $\\angle A = 76°$-ի կիսորդն է։ Գտիր $\\angle BAD$-ն։
3. $CH$-ը $\\triangle ABC$-ի բարձրությունն է։ Որքա՞ն է $\\angle CHA$-ն։
4. Որտե՞ղ են բութանկյուն եռանկյան սուր անկյուններից տարված բարձրությունները։
5. $\\angle C = 90°$ ունեցող $\\triangle ABC$-ում անվանիր երեք բարձրությունները։
6. $BM$-ը միջնագիծ է, $\\triangle ABM$-ի և $\\triangle CBM$-ի պարագծերը 24 սմ և 30 սմ են։ Որքանո՞վ է $BC$-ն երկար $AB$-ից։
7. Քանի՞ միջնագիծ ունի եռանկյունը։
8. $\\angle ABC = 80°$, $BD$-ն նրա կիսորդն է։ Գտիր $\\angle ABD$-ն։

### Պատասխաններ

1. 7 սմ։ 2. $38°$։ 3. $90°$։ 4. Եռանկյունից դուրս։ 5. $AC$-ն, $BC$-ն և $C$-ից $AB$-ին տարված բարձրությունը։ 6. 6 սմ-ով։ 7. Երեք։ 8. $40°$։`,
        ru: `## Три особых отрезка

| Отрезок из вершины $B$ | Конец | Свойство |
|---|---|---|
| **медиана** $BM$ | середина $M$ стороны $AC$ | $AM = MC$ |
| **биссектриса** $BD$ | точка $D$ на $AC$ | $\\angle ABD = \\angle DBC$ |
| **высота** $BH$ | основание $H$ на прямой $AC$ | $BH \\perp AC$ |

У каждого треугольника **три** медианы, три биссектрисы и три высоты.

### Где лежат высоты

- В **остроугольном** треугольнике все высоты внутри.
- В **прямоугольном** две высоты совпадают с катетами.
- В **тупоугольном** высоты из вершин острых углов лежат **вне** треугольника: основание — на продолжении противоположной стороны.

### Медиана и периметры

$BM$ — медиана $\\triangle ABC$. У треугольников $ABM$ и $CBM$ общая сторона $BM$ и $AM = MC$, поэтому разность их периметров равна $BC - AB$. Если периметры 24 см и 30 см, то $BC$ на 6 см длиннее $AB$.

### Упражнения

1. $BM$ — медиана $\\triangle ABC$, $AC = 14$ см. Найди $AM$.
2. $AD$ — биссектриса $\\angle A = 76°$. Найди $\\angle BAD$.
3. $CH$ — высота $\\triangle ABC$. Чему равен $\\angle CHA$?
4. Где лежат высоты тупоугольного треугольника, проведённые из вершин острых углов?
5. В $\\triangle ABC$ с $\\angle C = 90°$ назови три высоты.
6. $BM$ — медиана; периметры $\\triangle ABM$ и $\\triangle CBM$ равны 24 см и 30 см. На сколько $BC$ длиннее $AB$?
7. Сколько медиан у треугольника?
8. $\\angle ABC = 80°$, $BD$ — его биссектриса. Найди $\\angle ABD$.

### Ответы

1. 7 см. 2. $38°$. 3. $90°$. 4. Вне треугольника. 5. $AC$, $BC$ и высота из $C$ на $AB$. 6. На 6 см. 7. Три. 8. $40°$.`,
      },
      [
        q(t("A median joins a vertex to…", "Միջնագիծը գագաթը միացնում է…", "Медиана соединяет вершину с…"), [t("the midpoint of the opposite side", "դիմացի կողմի միջնակետին", "серединой противоположной стороны"), t("the foot of a perpendicular", "ուղղահայացի հիմքին", "основанием перпендикуляра"), t("any point of the opposite side", "դիմացի կողմի ցանկացած կետին", "любой точкой противоположной стороны")], 0),
        q(t("An altitude makes with the line of the side an angle of…", "Բարձրությունը կողմի ուղղի հետ կազմում է…", "Высота образует с прямой стороны угол…"), [t("45°", "45°", "45°"), t("90°", "90°", "90°"), t("60°", "60°", "60°")], 1),
        q(t("The bisector of a 76° angle splits it into two angles of…", "76° անկյան կիսորդը այն բաժանում է … անկյունների", "Биссектриса угла 76° делит его на углы по…"), [t("152°", "152°-ի", "152°"), t("76°", "76°-ի", "76°"), t("38°", "38°-ի", "38°")], 2),
        q(t("How many medians does a triangle have?", "Քանի՞ միջնագիծ ունի եռանկյունը", "Сколько медиан у треугольника?"), [t("3", "3", "3"), t("1", "1", "1"), t("2", "2", "2")], 0),
        q(t("In an obtuse triangle two altitudes lie…", "Բութանկյուն եռանկյան երկու բարձրությունը գտնվում են…", "В тупоугольном треугольнике две высоты лежат…"), [t("inside", "ներսում", "внутри"), t("outside", "դրսում", "вне треугольника"), t("on the sides", "կողմերի վրա", "на сторонах")], 1),
        q(t("In △ABC with ∠C = 90°, the altitude from A is…", "∠C = 90° ունեցող △ABC-ում A-ից տարված բարձրությունը…", "В △ABC с ∠C = 90° высота из A —"), [t("the hypotenuse", "ներքնաձիգն է", "гипотенуза"), t("the median", "միջնագիծն է", "медиана"), t("the leg AC", "AC էջն է", "катет AC")], 2),
      ],
    ),
    lesson(
      "isosceles-triangle",
      ["Properties of the isosceles triangle", "Հավասարասրուն եռանկյան հատկությունները", "Свойства равнобедренного треугольника"],
      {
        en: ["Prove that the base angles are equal", "Use that the bisector to the base is also a median and an altitude", "Solve problems about isosceles and equilateral triangles"],
        hy: ["Ապացուցել, որ հիմքին առընթեր անկյունները հավասար են", "Կիրառել, որ հիմքին տարված կիսորդը նաև միջնագիծ է և բարձրություն", "Լուծել խնդիրներ հավասարասրուն և հավասարակողմ եռանկյունների մասին"],
        ru: ["Доказывать равенство углов при основании", "Использовать, что биссектриса к основанию — также медиана и высота", "Решать задачи о равнобедренном и равностороннем треугольниках"],
      },
      {
        en: `## Names

In isosceles $\\triangle ABC$ with $AB = BC$, the equal sides are the **legs**, $AC$ is the **base**, and $\\angle A$, $\\angle C$ are the **base angles**.

## Theorem 1. The base angles are equal

Draw the bisector $BD$. In $\\triangle ABD$ and $\\triangle CBD$: $AB = CB$, $\\angle ABD = \\angle CBD$, and $BD$ is common. By SAS the triangles are congruent, so $\\angle A = \\angle C$.

## Theorem 2. The bisector to the base is a median and an altitude

From the same congruence: $AD = DC$, so $BD$ is a **median**; and $\\angle BDA = \\angle BDC$, which are adjacent, so each is $90°$ and $BD$ is an **altitude**.

The same is true the other way: in an isosceles triangle the median to the base is also the bisector and the altitude.

### Equilateral triangle

Every side can be taken as the base, so **all three angles are equal**.

### Example

Isosceles $\\triangle ABC$ with base $AC$: $BD$ is a median, $\\angle ABC = 80°$. Then $BD$ is also the bisector, so $\\angle ABD = 40°$, and the altitude, so $\\angle BDA = 90°$.

### Exercises

1. A base angle of an isosceles triangle is $50°$. Find the other base angle.
2. Base $AC$, $BD$ is a median, $\\angle ABC = 80°$. Find $\\angle ABD$ and $\\angle BDA$.
3. $BD$ is the altitude to the base $AC = 12$ cm. Find $AD$.
4. Perimeter 36 cm, base 10 cm. Find the legs.
5. Which triangles have all three angles equal?
6. $BD$ is the bisector to the base, $AB = 10$ cm, $AD = 4$ cm. Find the perimeter.
7. Compare the exterior angles at the base of an isosceles triangle.
8. Prove that in an isosceles triangle the medians drawn to the legs are equal.

### Answers

1. $50°$. 2. $40°$ and $90°$. 3. 6 cm. 4. 13 cm. 5. Equilateral ones. 6. 28 cm. 7. They are equal, as adjacent to equal angles. 8. The triangles formed with the base are congruent by SAS.`,
        hy: `## Անվանումներ

$AB = BC$ հավասարասրուն $\\triangle ABC$-ում հավասար կողմերը **սրունքներն** են, $AC$-ն **հիմքն** է, իսկ $\\angle A$-ն և $\\angle C$-ն **հիմքին առընթեր անկյուններն** են։

## Թեորեմ 1. Հիմքին առընթեր անկյունները հավասար են

Տանենք $BD$ կիսորդը։ $\\triangle ABD$-ում և $\\triangle CBD$-ում. $AB = CB$, $\\angle ABD = \\angle CBD$, իսկ $BD$-ն ընդհանուր է։ Ըստ առաջին հայտանիշի եռանկյունները հավասար են, ուրեմն $\\angle A = \\angle C$։

## Թեորեմ 2. Հիմքին տարված կիսորդը միջնագիծ է և բարձրություն

Նույն հավասարությունից. $AD = DC$, ուրեմն $BD$-ն **միջնագիծ** է, և $\\angle BDA = \\angle BDC$, որոնք կից են, ուրեմն յուրաքանչյուրը $90°$ է, և $BD$-ն **բարձրություն** է։

Ճիշտ է նաև հակառակը. հավասարասրուն եռանկյան հիմքին տարված միջնագիծը նաև կիսորդ է և բարձրություն։

### Հավասարակողմ եռանկյուն

Ցանկացած կողմ կարելի է համարել հիմք, ուրեմն **երեք անկյուններն էլ հավասար են**։

### Օրինակ

$AC$ հիմքով հավասարասրուն $\\triangle ABC$. $BD$-ն միջնագիծ է, $\\angle ABC = 80°$։ Ապա $BD$-ն նաև կիսորդ է, ուրեմն $\\angle ABD = 40°$, և բարձրություն է, ուրեմն $\\angle BDA = 90°$։

### Վարժություններ

1. Հավասարասրուն եռանկյան հիմքին առընթեր անկյունը $50°$ է։ Գտիր հիմքին առընթեր մյուս անկյունը։
2. Հիմքը՝ $AC$, $BD$-ն միջնագիծ է, $\\angle ABC = 80°$։ Գտիր $\\angle ABD$-ն և $\\angle BDA$-ն։
3. $BD$-ն $AC = 12$ սմ հիմքին տարված բարձրությունն է։ Գտիր $AD$-ն։
4. Պարագիծը 36 սմ է, հիմքը՝ 10 սմ։ Գտիր սրունքները։
5. Ո՞ր եռանկյուններն ունեն երեք հավասար անկյուն։
6. $BD$-ն հիմքին տարված կիսորդն է, $AB = 10$ սմ, $AD = 4$ սմ։ Գտիր պարագիծը։
7. Համեմատիր հավասարասրուն եռանկյան հիմքին առընթեր արտաքին անկյունները։
8. Ապացուցիր, որ հավասարասրուն եռանկյան սրունքներին տարված միջնագծերը հավասար են։

### Պատասխաններ

1. $50°$։ 2. $40°$ և $90°$։ 3. 6 սմ։ 4. 13 սմ։ 5. Հավասարակողմ եռանկյունները։ 6. 28 սմ։ 7. Հավասար են՝ որպես հավասար անկյուններին կից։ 8. Հիմքի հետ կազմված եռանկյունները հավասար են ըստ առաջին հայտանիշի։`,
        ru: `## Названия

В равнобедренном $\\triangle ABC$ с $AB = BC$ равные стороны — **боковые**, $AC$ — **основание**, $\\angle A$ и $\\angle C$ — **углы при основании**.

## Теорема 1. Углы при основании равны

Проведём биссектрису $BD$. В $\\triangle ABD$ и $\\triangle CBD$: $AB = CB$, $\\angle ABD = \\angle CBD$, $BD$ — общая. По первому признаку треугольники равны, значит $\\angle A = \\angle C$.

## Теорема 2. Биссектриса к основанию — медиана и высота

Из того же равенства: $AD = DC$, значит $BD$ — **медиана**; $\\angle BDA = \\angle BDC$, а они смежные, значит каждый равен $90°$, и $BD$ — **высота**.

Верно и обратное: в равнобедренном треугольнике медиана к основанию является биссектрисой и высотой.

### Равносторонний треугольник

Любую сторону можно считать основанием, поэтому **все три угла равны**.

### Пример

Равнобедренный $\\triangle ABC$ с основанием $AC$: $BD$ — медиана, $\\angle ABC = 80°$. Тогда $BD$ — и биссектриса, значит $\\angle ABD = 40°$, и высота, значит $\\angle BDA = 90°$.

### Упражнения

1. Угол при основании равнобедренного треугольника $50°$. Найди другой угол при основании.
2. Основание $AC$, $BD$ — медиана, $\\angle ABC = 80°$. Найди $\\angle ABD$ и $\\angle BDA$.
3. $BD$ — высота к основанию $AC = 12$ см. Найди $AD$.
4. Периметр 36 см, основание 10 см. Найди боковые стороны.
5. У каких треугольников все три угла равны?
6. $BD$ — биссектриса к основанию, $AB = 10$ см, $AD = 4$ см. Найди периметр.
7. Сравни внешние углы при основании равнобедренного треугольника.
8. Докажи, что в равнобедренном треугольнике медианы, проведённые к боковым сторонам, равны.

### Ответы

1. $50°$. 2. $40°$ и $90°$. 3. 6 см. 4. 13 см. 5. У равносторонних. 6. 28 см. 7. Равны, как смежные с равными углами. 8. Треугольники, образованные с основанием, равны по первому признаку.`,
      },
      [
        q(t("The base angles of an isosceles triangle are…", "Հավասարասրուն եռանկյան հիմքին առընթեր անկյունները…", "Углы при основании равнобедренного треугольника…"), [t("equal", "հավասար են", "равны"), t("add up to 90°", "գումարում 90° են", "в сумме 90°"), t("differ by 90°", "տարբերվում են 90°-ով", "отличаются на 90°")], 0),
        q(t("The bisector to the base of an isosceles triangle is also…", "Հավասարասրուն եռանկյան հիմքին տարված կիսորդը նաև…", "Биссектриса к основанию равнобедренного треугольника — также…"), [t("neither median nor altitude", "ոչ միջնագիծ է, ոչ բարձրություն", "ни медиана, ни высота"), t("the median and the altitude", "միջնագիծն է և բարձրությունը", "медиана и высота"), t("only the median", "միայն միջնագիծն է", "только медиана")], 1),
        q(t("Perimeter 36, base 10. Each leg is…", "Պարագիծը 36, հիմքը 10։ Յուրաքանչյուր սրունքը…", "Периметр 36, основание 10. Боковая сторона —"), [t("26", "26", "26"), t("10", "10", "10"), t("13", "13", "13")], 2),
        q(t("BD is the altitude to base AC = 12. AD =", "BD-ն AC = 12 հիմքին տարված բարձրությունն է։ AD =", "BD — высота к основанию AC = 12. AD ="), [t("12", "12", "12"), t("6", "6", "6"), t("24", "24", "24")], 1),
        q(t("∠ABC = 80°, BD is the median to base AC. ∠ABD =", "∠ABC = 80°, BD-ն AC հիմքին տարված միջնագիծն է։ ∠ABD =", "∠ABC = 80°, BD — медиана к основанию AC. ∠ABD ="), [t("40°", "40°", "40°"), t("80°", "80°", "80°"), t("50°", "50°", "50°")], 0),
        q(t("All three angles are equal in…", "Երեք անկյուններն էլ հավասար են…", "Все три угла равны у…"), [t("every isosceles triangle", "ցանկացած հավասարասրուն եռանկյան մեջ", "любого равнобедренного треугольника"), t("every right triangle", "ցանկացած ուղղանկյուն եռանկյան մեջ", "любого прямоугольного треугольника"), t("an equilateral triangle", "հավասարակողմ եռանկյան մեջ", "равностороннего треугольника")], 2),
      ],
    ),
    lesson(
      "second-third-tests",
      ["Second (ASA) and third (SSS) congruence tests", "Երկրորդ և երրորդ հայտանիշները", "Второй и третий признаки равенства"],
      {
        en: ["State the angle-side-angle and side-side-side tests", "Choose the right test in a problem", "Explain why triangular frames are rigid"],
        hy: ["Ձևակերպել անկյուն-կողմ-անկյուն և կողմ-կողմ-կողմ հայտանիշները", "Խնդրում ընտրել ճիշտ հայտանիշը", "Բացատրել, թե ինչու են եռանկյուն կառուցվածքները կոշտ"],
        ru: ["Формулировать признаки по стороне и двум углам и по трём сторонам", "Выбирать нужный признак в задаче", "Объяснять, почему треугольные конструкции жёсткие"],
      },
      {
        en: `## Second test (ASA)

**Theorem.** If a side and the two angles **adjacent to it** of one triangle are equal to a side and the two adjacent angles of another, the triangles are congruent.

## Third test (SSS)

**Theorem.** If three sides of one triangle are equal to three sides of another, the triangles are congruent.

### Which test?

| Given equal | Test |
|---|---|
| two sides and the angle between them | SAS (first) |
| a side and the two angles at its ends | ASA (second) |
| three sides | SSS (third) |
| three angles | **not enough**: a small and a large triangle can have the same angles |

### Rigidity

By SSS, three sides fix a triangle completely. That is why bridges, roofs and cranes are built from triangles, while a four-bar frame can be pushed out of shape.

### Example 1 (SSS)

In quadrilateral $ABCD$, $AB = CD$ and $BC = AD$. Draw diagonal $AC$. In $\\triangle ABC$ and $\\triangle CDA$: $AB = CD$, $BC = DA$, $AC$ is common. So the triangles are congruent and $\\angle B = \\angle D$.

### Example 2 (ASA)

$O$ is the midpoint of $AB$. Through $A$ and $B$ lines are drawn with $\\angle OAC = \\angle OBD$, meeting a line through $O$ at $C$ and $D$ (on opposite sides). Then $AO = OB$, $\\angle OAC = \\angle OBD$, $\\angle AOC = \\angle BOD$ (vertical), so $\\triangle AOC = \\triangle BOD$ and $OC = OD$.

### Exercises

1. $AB = MN$, $\\angle A = \\angle M$, $\\angle B = \\angle N$. Are $\\triangle ABC$ and $\\triangle MNK$ congruent? By which test?
2. $AB = MN$, $BC = NK$, $AC = MK$. Are the triangles congruent?
3. Prove Example 1 and find $\\angle D$ if $\\angle B = 110°$.
4. In Example 2, $OC = 5$ cm. Find $OD$.
5. Why is a triangular frame rigid but a square frame is not?
6. Do three equal angles guarantee congruent triangles?
7. Which test uses a side and the two angles at its ends?
8. Triangles with sides 5, 6, 7 cm and 7, 5, 6 cm. Are they congruent?

### Answers

1. Yes, ASA. 2. Yes, SSS. 3. $110°$. 4. 5 cm. 5. Three sides fix a triangle (SSS); four sides do not fix a quadrilateral. 6. No. 7. ASA. 8. Yes, SSS.`,
        hy: `## Երկրորդ հայտանիշ (անկյուն-կողմ-անկյուն)

**Թեորեմ.** Եթե մի եռանկյան կողմը և նրան **առընթեր** երկու անկյունները համապատասխանաբար հավասար են մյուս եռանկյան կողմին և նրան առընթեր երկու անկյուններին, ապա եռանկյունները հավասար են։

## Երրորդ հայտանիշ (կողմ-կողմ-կողմ)

**Թեորեմ.** Եթե մի եռանկյան երեք կողմը համապատասխանաբար հավասար են մյուս եռանկյան երեք կողմին, ապա եռանկյունները հավասար են։

### Ո՞ր հայտանիշը

| Տրված հավասար տարրեր | Հայտանիշ |
|---|---|
| երկու կողմ և նրանց միջև ընկած անկյունը | առաջին |
| կողմ և նրա ծայրերի երկու անկյունները | երկրորդ |
| երեք կողմ | երրորդ |
| երեք անկյուն | **բավական չէ**. փոքր և մեծ եռանկյունները կարող են ունենալ նույն անկյունները |

### Կոշտություն

Ըստ երրորդ հայտանիշի՝ երեք կողմը լիովին որոշում են եռանկյունը։ Դրա համար կամուրջները, տանիքները և ամբարձիչները կառուցում են եռանկյուններից, իսկ քառակող շրջանակը կարելի է ծռել։

### Օրինակ 1 (երրորդ հայտանիշ)

$ABCD$ քառանկյունում $AB = CD$ և $BC = AD$։ Տանենք $AC$ անկյունագիծը։ $\\triangle ABC$-ում և $\\triangle CDA$-ում. $AB = CD$, $BC = DA$, $AC$-ն ընդհանուր է։ Ուրեմն եռանկյունները հավասար են, և $\\angle B = \\angle D$։

### Օրինակ 2 (երկրորդ հայտանիշ)

$O$-ն $AB$-ի միջնակետն է։ $A$-ով և $B$-ով տարված են ուղիղներ, որոնց համար $\\angle OAC = \\angle OBD$, և դրանք $O$-ով անցնող ուղիղը հատում են $C$ և $D$ կետերում (տարբեր կողմերում)։ Ապա $AO = OB$, $\\angle OAC = \\angle OBD$, $\\angle AOC = \\angle BOD$ (հակադիր), ուրեմն $\\triangle AOC = \\triangle BOD$, և $OC = OD$։

### Վարժություններ

1. $AB = MN$, $\\angle A = \\angle M$, $\\angle B = \\angle N$։ $\\triangle ABC$-ն և $\\triangle MNK$-ն հավասա՞ր են։ Ո՞ր հայտանիշով։
2. $AB = MN$, $BC = NK$, $AC = MK$։ Եռանկյունները հավասա՞ր են։
3. Ապացուցիր Օրինակ 1-ը և գտիր $\\angle D$-ն, եթե $\\angle B = 110°$։
4. Օրինակ 2-ում $OC = 5$ սմ։ Գտիր $OD$-ն։
5. Ինչո՞ւ է եռանկյուն շրջանակը կոշտ, իսկ քառակուսի շրջանակը՝ ոչ։
6. Երեք հավասար անկյունները երաշխավորո՞ւմ են եռանկյունների հավասարությունը։
7. Ո՞ր հայտանիշն է օգտագործում կողմը և նրա ծայրերի երկու անկյունները։
8. 5, 6, 7 սմ և 7, 5, 6 սմ կողմերով եռանկյուններ։ Նրանք հավասա՞ր են։

### Պատասխաններ

1. Այո, երկրորդ հայտանիշով։ 2. Այո, երրորդ հայտանիշով։ 3. $110°$։ 4. 5 սմ։ 5. Երեք կողմը որոշում են եռանկյունը, իսկ չորս կողմը քառանկյունը չեն որոշում։ 6. Ոչ։ 7. Երկրորդը։ 8. Այո, երրորդ հայտանիշով։`,
        ru: `## Второй признак

**Теорема.** Если сторона и два **прилежащих** к ней угла одного треугольника соответственно равны стороне и двум прилежащим к ней углам другого треугольника, то такие треугольники равны.

## Третий признак

**Теорема.** Если три стороны одного треугольника соответственно равны трём сторонам другого треугольника, то такие треугольники равны.

### Какой признак?

| Дано равенство | Признак |
|---|---|
| двух сторон и угла между ними | первый |
| стороны и двух прилежащих углов | второй |
| трёх сторон | третий |
| трёх углов | **недостаточно**: маленький и большой треугольники могут иметь одинаковые углы |

### Жёсткость

По третьему признаку три стороны полностью задают треугольник. Поэтому мосты, крыши и краны собирают из треугольников, а четырёхзвенную раму можно перекосить.

### Пример 1 (третий признак)

В четырёхугольнике $ABCD$ $AB = CD$ и $BC = AD$. Проведём диагональ $AC$. В $\\triangle ABC$ и $\\triangle CDA$: $AB = CD$, $BC = DA$, $AC$ — общая. Значит треугольники равны и $\\angle B = \\angle D$.

### Пример 2 (второй признак)

$O$ — середина $AB$. Через $A$ и $B$ проведены прямые так, что $\\angle OAC = \\angle OBD$, и они пересекают прямую через $O$ в точках $C$ и $D$ (по разные стороны). Тогда $AO = OB$, $\\angle OAC = \\angle OBD$, $\\angle AOC = \\angle BOD$ (вертикальные), значит $\\triangle AOC = \\triangle BOD$ и $OC = OD$.

### Упражнения

1. $AB = MN$, $\\angle A = \\angle M$, $\\angle B = \\angle N$. Равны ли $\\triangle ABC$ и $\\triangle MNK$? По какому признаку?
2. $AB = MN$, $BC = NK$, $AC = MK$. Равны ли треугольники?
3. Докажи утверждение примера 1 и найди $\\angle D$, если $\\angle B = 110°$.
4. В примере 2 $OC = 5$ см. Найди $OD$.
5. Почему треугольная рама жёсткая, а квадратная — нет?
6. Гарантирует ли равенство трёх углов равенство треугольников?
7. Какой признак использует сторону и два угла при её концах?
8. Треугольники со сторонами 5, 6, 7 см и 7, 5, 6 см. Равны ли они?

### Ответы

1. Да, по второму признаку. 2. Да, по третьему. 3. $110°$. 4. 5 см. 5. Три стороны задают треугольник, а четыре стороны четырёхугольник не задают. 6. Нет. 7. Второй. 8. Да, по третьему признаку.`,
      },
      [
        q(t("The ASA test uses…", "Երկրորդ հայտանիշն օգտագործում է…", "Второй признак использует…"), [t("a side and the two angles at its ends", "կողմը և նրա ծայրերի երկու անկյունները", "сторону и два прилежащих угла"), t("three angles", "երեք անկյուն", "три угла"), t("two sides and an angle", "երկու կողմ և անկյուն", "две стороны и угол")], 0),
        q(t("The SSS test needs equal…", "Երրորդ հայտանիշի համար պետք է հավասար լինեն…", "Для третьего признака нужны равные…"), [t("three angles", "երեք անկյունները", "три угла"), t("three sides", "երեք կողմերը", "три стороны"), t("two sides", "երկու կողմերը", "две стороны")], 1),
        q(t("Do three equal angles guarantee congruence?", "Երեք հավասար անկյունները երաշխավորո՞ւմ են հավասարությունը", "Гарантирует ли равенство трёх углов равенство треугольников?"), [t("yes", "այո", "да"), t("only for acute triangles", "միայն սուրանկյուն եռանկյունների համար", "только для остроугольных"), t("no", "ոչ", "нет")], 2),
        q(t("Triangles with sides 5, 6, 7 and 7, 5, 6 are…", "5, 6, 7 և 7, 5, 6 կողմերով եռանկյունները…", "Треугольники со сторонами 5, 6, 7 и 7, 5, 6…"), [t("congruent", "հավասար են", "равны"), t("not congruent", "հավասար չեն", "не равны"), t("impossible", "գոյություն չունեն", "не существуют")], 0),
        q(t("A triangular frame is rigid because of the…", "Եռանկյուն շրջանակը կոշտ է շնորհիվ…", "Треугольная рама жёсткая благодаря…"), [t("SAS test", "առաջին հայտանիշի", "первому признаку"), t("ASA test", "երկրորդ հայտանիշի", "второму признаку"), t("SSS test", "երրորդ հայտանիշի", "третьему признаку")], 2),
        q(t("ABCD with AB = CD, BC = AD: △ABC = △CDA by…", "ABCD, AB = CD, BC = AD. △ABC = △CDA ըստ…", "ABCD, AB = CD, BC = AD: △ABC = △CDA по…"), [t("ASA", "երկրորդ հայտանիշի", "второму признаку"), t("SSS", "երրորդ հայտանիշի", "третьему признаку"), t("they are not congruent", "հավասար չեն", "они не равны")], 1),
      ],
    ),
    lesson(
      "circle-basics",
      ["Circle: centre, radius, chord, diameter", "Շրջանագիծ․ կենտրոն, շառավիղ, լար, տրամագիծ", "Окружность: центр, радиус, хорда, диаметр"],
      {
        en: ["Define a circle and its elements", "Use d = 2r and the fact that all radii are equal", "Decide where a point lies relative to a circle"],
        hy: ["Սահմանել շրջանագիծը և նրա տարրերը", "Կիրառել d = 2r-ը և այն, որ բոլոր շառավիղները հավասար են", "Որոշել կետի դիրքը շրջանագծի նկատմամբ"],
        ru: ["Давать определение окружности и её элементов", "Использовать d = 2r и равенство всех радиусов", "Определять положение точки относительно окружности"],
      },
      {
        en: `## Definition

A **circle** is the set of all points of the plane at a given distance from a given point. The point $O$ is the **centre**; the distance is the **radius** $r$. The part of the plane inside the circle, together with the circle, is a **disc**.

### Elements

| Element | Definition |
|---|---|
| radius $OA$ | segment from the centre to a point of the circle |
| chord $AB$ | segment joining two points of the circle |
| diameter | chord through the centre; $d = 2r$ |
| arc | part of the circle between two of its points |

The diameter is the **longest** chord.

### All radii are equal

That simple fact gives isosceles triangles. If $AB$ is a chord, then $OA = OB$, so $\\triangle OAB$ is isosceles and $\\angle OAB = \\angle OBA$. If the chord equals the radius, $\\triangle OAB$ is equilateral.

### Point and circle

Let $d$ be the distance from point $M$ to the centre.

| Distance | Position |
|---|---|
| $d < r$ | inside |
| $d = r$ | on the circle |
| $d > r$ | outside |

### Exercises

1. $r = 4.5$ cm. Find the diameter.
2. $d = 13$ cm. Find the radius.
3. $AB$ is a chord, $O$ the centre, $\\angle OAB = 35°$. Find $\\angle OBA$.
4. A chord equals the radius. What kind of triangle do its ends form with the centre?
5. Which chord is the longest?
6. A circle has $r = 3$ cm. Where are points at distance 5 cm, 2 cm and 3 cm from the centre?
7. $AB$ is a diameter and $C$ is on the circle. Compare $OA$, $OB$ and $OC$.
8. How many diameters does a circle have?

### Answers

1. 9 cm. 2. 6.5 cm. 3. $35°$. 4. Equilateral. 5. The diameter. 6. Outside, inside, on the circle. 7. They are equal radii. 8. Infinitely many.`,
        hy: `## Սահմանում

**Շրջանագիծը** հարթության այն բոլոր կետերի բազմությունն է, որոնք տրված կետից գտնվում են տրված հեռավորության վրա։ $O$ կետը **կենտրոնն** է, հեռավորությունը՝ $r$ **շառավիղը**։ Շրջանագծի ներսում գտնվող հարթության մասը՝ շրջանագծի հետ միասին, **շրջան** է։

### Տարրեր

| Տարր | Սահմանում |
|---|---|
| $OA$ շառավիղ | կենտրոնը շրջանագծի կետին միացնող հատված |
| $AB$ լար | շրջանագծի երկու կետ միացնող հատված |
| տրամագիծ | կենտրոնով անցնող լար, $d = 2r$ |
| աղեղ | շրջանագծի մասը նրա երկու կետերի միջև |

Տրամագիծը **ամենամեծ** լարն է։

### Բոլոր շառավիղները հավասար են

Այս պարզ փաստը տալիս է հավասարասրուն եռանկյուններ։ Եթե $AB$-ն լար է, ապա $OA = OB$, ուրեմն $\\triangle OAB$-ն հավասարասրուն է, և $\\angle OAB = \\angle OBA$։ Եթե լարը հավասար է շառավղին, $\\triangle OAB$-ն հավասարակողմ է։

### Կետ և շրջանագիծ

Դիցուք $d$-ն $M$ կետի հեռավորությունն է կենտրոնից։

| Հեռավորություն | Դիրք |
|---|---|
| $d < r$ | ներսում |
| $d = r$ | շրջանագծի վրա |
| $d > r$ | դրսում |

### Վարժություններ

1. $r = 4{,}5$ սմ։ Գտիր տրամագիծը։
2. $d = 13$ սմ։ Գտիր շառավիղը։
3. $AB$-ն լար է, $O$-ն՝ կենտրոն, $\\angle OAB = 35°$։ Գտիր $\\angle OBA$-ն։
4. Լարը հավասար է շառավղին։ Ինչպիսի՞ եռանկյուն են կազմում նրա ծայրերը կենտրոնի հետ։
5. Ո՞ր լարն է ամենամեծը։
6. Շրջանագծի $r = 3$ սմ։ Որտե՞ղ են կենտրոնից 5 սմ, 2 սմ և 3 սմ հեռավորության վրա գտնվող կետերը։
7. $AB$-ն տրամագիծ է, $C$-ն շրջանագծի վրա է։ Համեմատիր $OA$-ն, $OB$-ն և $OC$-ն։
8. Քանի՞ տրամագիծ ունի շրջանագիծը։

### Պատասխաններ

1. 9 սմ։ 2. 6,5 սմ։ 3. $35°$։ 4. Հավասարակողմ։ 5. Տրամագիծը։ 6. Դրսում, ներսում, շրջանագծի վրա։ 7. Հավասար են՝ որպես շառավիղներ։ 8. Անվերջ շատ։`,
        ru: `## Определение

**Окружность** — множество всех точек плоскости, находящихся на данном расстоянии от данной точки. Точка $O$ — **центр**, расстояние — **радиус** $r$. Часть плоскости внутри окружности вместе с самой окружностью — **круг**.

### Элементы

| Элемент | Определение |
|---|---|
| радиус $OA$ | отрезок от центра до точки окружности |
| хорда $AB$ | отрезок, соединяющий две точки окружности |
| диаметр | хорда через центр; $d = 2r$ |
| дуга | часть окружности между двумя её точками |

Диаметр — **наибольшая** хорда.

### Все радиусы равны

Этот простой факт даёт равнобедренные треугольники. Если $AB$ — хорда, то $OA = OB$, значит $\\triangle OAB$ равнобедренный и $\\angle OAB = \\angle OBA$. Если хорда равна радиусу, $\\triangle OAB$ равносторонний.

### Точка и окружность

Пусть $d$ — расстояние от точки $M$ до центра.

| Расстояние | Положение |
|---|---|
| $d < r$ | внутри |
| $d = r$ | на окружности |
| $d > r$ | вне |

### Упражнения

1. $r = 4{,}5$ см. Найди диаметр.
2. $d = 13$ см. Найди радиус.
3. $AB$ — хорда, $O$ — центр, $\\angle OAB = 35°$. Найди $\\angle OBA$.
4. Хорда равна радиусу. Какой треугольник образуют её концы с центром?
5. Какая хорда наибольшая?
6. Радиус окружности 3 см. Где лежат точки на расстоянии 5 см, 2 см и 3 см от центра?
7. $AB$ — диаметр, $C$ — точка окружности. Сравни $OA$, $OB$ и $OC$.
8. Сколько диаметров у окружности?

### Ответы

1. 9 см. 2. 6,5 см. 3. $35°$. 4. Равносторонний. 5. Диаметр. 6. Вне, внутри, на окружности. 7. Равны как радиусы. 8. Бесконечно много.`,
      },
      [
        q(t("d = 13. r =", "d = 13։ r =", "d = 13. r ="), [t("26", "26", "26"), t("6.5", "6,5", "6,5"), t("13", "13", "13")], 1),
        q(t("The longest chord of a circle is…", "Շրջանագծի ամենամեծ լարը…", "Наибольшая хорда окружности —"), [t("the diameter", "տրամագիծն է", "диаметр"), t("a radius", "շառավիղն է", "радиус"), t("any chord", "ցանկացած լար", "любая хорда")], 0),
        q(t("r = 3. A point 5 from the centre is…", "r = 3։ Կենտրոնից 5 հեռավորությամբ կետը…", "r = 3. Точка на расстоянии 5 от центра лежит…"), [t("inside", "ներսում է", "внутри"), t("on the circle", "շրջանագծի վրա է", "на окружности"), t("outside", "դրսում է", "вне окружности")], 2),
        q(t("A chord equal to the radius forms with the centre a triangle that is…", "Շառավղին հավասար լարը կենտրոնի հետ կազմում է եռանկյուն, որը…", "Хорда, равная радиусу, образует с центром треугольник…"), [t("equilateral", "հավասարակողմ է", "равносторонний"), t("right", "ուղղանկյուն է", "прямоугольный"), t("obtuse", "բութանկյուն է", "тупоугольный")], 0),
        q(t("All points of a circle are equally far from…", "Շրջանագծի բոլոր կետերը հավասարապես հեռու են…", "Все точки окружности одинаково удалены от…"), [t("any chord", "ցանկացած լարից", "любой хорды"), t("the centre", "կենտրոնից", "центра"), t("the diameter", "տրամագծից", "диаметра")], 1),
        q(t("r = 4.5. d =", "r = 4,5։ d =", "r = 4,5. d ="), [t("2.25", "2,25", "2,25"), t("4.5", "4,5", "4,5"), t("9", "9", "9")], 2),
      ],
    ),
    lesson(
      "constructions",
      ["Constructions with compass and straightedge", "Կառուցումներ կարկինով և քանոնով", "Задачи на построение"],
      {
        en: ["Copy a segment and an angle", "Bisect an angle and find the midpoint of a segment", "Construct a perpendicular and a triangle from three sides"],
        hy: ["Տեղադրել տրված հատվածին և անկյանը հավասար հատված և անկյուն", "Կառուցել անկյան կիսորդը և հատվածի միջնակետը", "Կառուցել ուղղահայաց և եռանկյուն ըստ երեք կողմերի"],
        ru: ["Откладывать отрезок и угол, равные данным", "Строить биссектрису угла и середину отрезка", "Строить перпендикуляр и треугольник по трём сторонам"],
      },
      {
        en: `## The rules

Only two tools are allowed: a **compass** (draws circles) and a **straightedge** (draws lines; it has no marks). Each construction is justified by a congruence test.

### 1. Copy a segment on a ray

Open the compass to $AB$, put the point at the start $O$ of the ray and mark $C$. Then $OC = AB$.

### 2. Bisect an angle

1. Draw a circle centred at the vertex $A$; it meets the sides at $B$ and $C$.
2. Draw equal circles centred at $B$ and $C$; they meet at $E$.
3. Ray $AE$ is the bisector: $\\triangle ABE = \\triangle ACE$ by SSS.

### 3. Midpoint and perpendicular bisector

Draw two equal circles centred at $A$ and $B$ with radius larger than half of $AB$. Join their two intersection points. This line is perpendicular to $AB$ and passes through its midpoint.

### 4. Perpendicular through a point of a line

Mark equal segments $MA = MB$ on both sides of $M$, then construct the perpendicular bisector of $AB$.

### 5. Triangle from three sides

Draw side $a$. From its ends draw circles with radii $b$ and $c$; their intersection is the third vertex. If the circles do not meet, such a triangle does not exist: with sides 2, 3 and 6 the arcs never cross.

### Special angles

- $90°$: perpendicular. $45°$: bisect $90°$.
- $60°$: angle of an equilateral triangle. $30°$: bisect $60°$. $15°$: bisect $30°$.

### Exercises

1. Describe how to copy a segment onto a ray.
2. Describe how to bisect an angle and why it works.
3. How can you construct a $45°$ angle?
4. How can you construct a $60°$ angle?
5. How can you construct a $30°$ angle?
6. How do you find the midpoint of a segment?
7. How can you construct a $15°$ angle?
8. Can you construct a triangle with sides 2, 3 and 6 cm? With 3, 4 and 5 cm?

### Answers

1. Measure $AB$ with the compass and mark it from the start of the ray. 2. See construction 2; SSS. 3. Bisect a right angle. 4. Construct an equilateral triangle. 5. Bisect $60°$. 6. With the perpendicular bisector. 7. Bisect $30°$. 8. No; yes.`,
        hy: `## Կանոնները

Թույլատրվում է միայն երկու գործիք. **կարկին** (գծում է շրջանագծեր) և **քանոն** (գծում է ուղիղներ, բաժանումներ չունի)։ Յուրաքանչյուր կառուցում հիմնավորվում է հավասարության հայտանիշով։

### 1. Ճառագայթի վրա տեղադրել հատված

Կարկինը բացիր $AB$-ի չափով, սուր ծայրը դիր ճառագայթի $O$ սկզբնակետին և նշիր $C$-ն։ Ապա $OC = AB$։

### 2. Անկյան կիսորդ

1. Գծիր շրջանագիծ $A$ գագաթով որպես կենտրոն. այն հատում է կողմերը $B$ և $C$ կետերում։
2. Գծիր հավասար շրջանագծեր $B$ և $C$ կենտրոններով. դրանք հատվում են $E$-ում։
3. $AE$ ճառագայթը կիսորդն է. $\\triangle ABE = \\triangle ACE$ ըստ երրորդ հայտանիշի։

### 3. Միջնակետ և միջնուղղահայաց

Գծիր $A$ և $B$ կենտրոններով երկու հավասար շրջանագիծ՝ $AB$-ի կեսից մեծ շառավղով։ Միացրու դրանց հատման երկու կետերը։ Այս ուղիղն ուղղահայաց է $AB$-ին և անցնում է նրա միջնակետով։

### 4. Ուղղահայաց ուղղի կետով

$M$-ի երկու կողմերում տեղադրիր հավասար հատվածներ՝ $MA = MB$, ապա կառուցիր $AB$-ի միջնուղղահայացը։

### 5. Եռանկյուն ըստ երեք կողմերի

Գծիր $a$ կողմը։ Նրա ծայրերից գծիր $b$ և $c$ շառավղերով շրջանագծեր. նրանց հատման կետը երրորդ գագաթն է։ Եթե շրջանագծերը չեն հատվում, այդպիսի եռանկյուն գոյություն չունի. 2, 3 և 6 կողմերի դեպքում աղեղները չեն հատվում։

### Հատուկ անկյուններ

- $90°$. ուղղահայաց։ $45°$. $90°$-ի կիսում։
- $60°$. հավասարակողմ եռանկյան անկյուն։ $30°$. $60°$-ի կիսում։ $15°$. $30°$-ի կիսում։

### Վարժություններ

1. Նկարագրիր, թե ինչպես տեղադրել հատվածը ճառագայթի վրա։
2. Նկարագրիր, թե ինչպես կառուցել անկյան կիսորդը, և ինչու է դա ճիշտ։
3. Ինչպե՞ս կառուցել $45°$ անկյուն։
4. Ինչպե՞ս կառուցել $60°$ անկյուն։
5. Ինչպե՞ս կառուցել $30°$ անկյուն։
6. Ինչպե՞ս գտնել հատվածի միջնակետը։
7. Ինչպե՞ս կառուցել $15°$ անկյուն։
8. Կարելի՞ է կառուցել 2, 3 և 6 սմ կողմերով եռանկյուն։ Իսկ 3, 4 և 5 սմ-ով։

### Պատասխաններ

1. Կարկինով չափիր $AB$-ն և տեղադրիր ճառագայթի սկզբից։ 2. Տես կառուցում 2-ը, երրորդ հայտանիշ։ 3. Կիսել ուղիղ անկյունը։ 4. Կառուցել հավասարակողմ եռանկյուն։ 5. Կիսել $60°$-ը։ 6. Միջնուղղահայացի օգնությամբ։ 7. Կիսել $30°$-ը։ 8. Ոչ, այո։`,
        ru: `## Правила

Разрешены только два инструмента: **циркуль** (проводит окружности) и **линейка** (проводит прямые; делений на ней нет). Каждое построение обосновывается признаком равенства.

### 1. Отложить отрезок на луче

Раствором циркуля возьми $AB$, поставь иглу в начало луча $O$ и отметь $C$. Тогда $OC = AB$.

### 2. Биссектриса угла

1. Проведи окружность с центром в вершине $A$; она пересекает стороны в $B$ и $C$.
2. Проведи равные окружности с центрами $B$ и $C$; они пересекаются в $E$.
3. Луч $AE$ — биссектриса: $\\triangle ABE = \\triangle ACE$ по третьему признаку.

### 3. Середина отрезка и серединный перпендикуляр

Проведи две равные окружности с центрами $A$ и $B$ радиусом больше половины $AB$. Соедини две точки их пересечения. Эта прямая перпендикулярна $AB$ и проходит через его середину.

### 4. Перпендикуляр через точку прямой

Отложи равные отрезки $MA = MB$ по обе стороны от $M$, затем построй серединный перпендикуляр к $AB$.

### 5. Треугольник по трём сторонам

Начерти сторону $a$. Из её концов проведи окружности радиусами $b$ и $c$; точка их пересечения — третья вершина. Если окружности не пересекаются, такого треугольника нет: при сторонах 2, 3 и 6 дуги не пересекутся.

### Особые углы

- $90°$: перпендикуляр. $45°$: биссектриса прямого угла.
- $60°$: угол равностороннего треугольника. $30°$: биссектриса $60°$. $15°$: биссектриса $30°$.

### Упражнения

1. Опиши, как отложить отрезок на луче.
2. Опиши построение биссектрисы угла и объясни, почему оно верно.
3. Как построить угол $45°$?
4. Как построить угол $60°$?
5. Как построить угол $30°$?
6. Как найти середину отрезка?
7. Как построить угол $15°$?
8. Можно ли построить треугольник со сторонами 2, 3 и 6 см? А 3, 4 и 5 см?

### Ответы

1. Взять $AB$ раствором циркуля и отложить от начала луча. 2. См. построение 2; третий признак. 3. Разделить прямой угол пополам. 4. Построить равносторонний треугольник. 5. Разделить $60°$ пополам. 6. С помощью серединного перпендикуляра. 7. Разделить $30°$ пополам. 8. Нет; да.`,
      },
      [
        q(t("Classical constructions use…", "Դասական կառուցումներում օգտագործում են…", "В классических построениях используют…"), [t("a compass and a straightedge", "կարկին և քանոն", "циркуль и линейку"), t("a protractor", "անկյունաչափ", "транспортир"), t("a marked ruler", "բաժանումներով քանոն", "линейку с делениями")], 0),
        q(t("A 45° angle is obtained by…", "45° անկյունը ստացվում է…", "Угол 45° получают, если…"), [t("doubling 30°", "30°-ը կրկնապատկելով", "удвоить 30°"), t("bisecting a right angle", "ուղիղ անկյունը կիսելով", "разделить пополам прямой угол"), t("bisecting 60°", "60°-ը կիսելով", "разделить пополам 60°")], 1),
        q(t("A 60° angle comes from…", "60° անկյունը ստացվում է…", "Угол 60° даёт…"), [t("a square", "քառակուսուց", "квадрат"), t("a circle alone", "միայն շրջանագծից", "одна окружность"), t("an equilateral triangle", "հավասարակողմ եռանկյունից", "равносторонний треугольник")], 2),
        q(t("The midpoint of a segment is found with…", "Հատվածի միջնակետը գտնում են…", "Середину отрезка находят с помощью…"), [t("the perpendicular bisector", "միջնուղղահայացով", "серединного перпендикуляра"), t("a protractor", "անկյունաչափով", "транспортира"), t("guessing", "աչքաչափով", "на глаз")], 0),
        q(t("A 15° angle is obtained by bisecting…", "15° անկյունը ստացվում է կիսելով…", "Угол 15° получают делением пополам угла…"), [t("45°", "45°-ը", "45°"), t("30°", "30°-ը", "30°"), t("60°", "60°-ը", "60°")], 1),
        q(t("Can you construct a triangle with sides 2, 3, 6?", "Կարելի՞ է կառուցել 2, 3, 6 կողմերով եռանկյուն", "Можно ли построить треугольник со сторонами 2, 3, 6?"), [t("yes", "այո", "да"), t("only a right one", "միայն ուղղանկյուն", "только прямоугольный"), t("no", "ոչ", "нет")], 2),
      ],
    ),
  ],
};
