import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Motions and an introduction to solids", "Շարժումներ և մարմինների ներածություն", "Движения и введение в тела"),
  summary: t("The idea of a motion, axial and central symmetry, translation and rotation, then a first look at prisms, pyramids, cylinders, cones and spheres, and a review of the course.", "Շարժման գաղափարը, առանցքային և կենտրոնային համաչափություն, զուգահեռ տեղափոխություն և պտույտ, ապա առաջին ծանոթությունը պրիզմաների, բուրգերի, գլանների, կոնների և գնդերի հետ, և դասընթացի ամփոփում։", "Понятие движения, осевая и центральная симметрия, параллельный перенос и поворот, затем первое знакомство с призмами, пирамидами, цилиндрами, конусами и шарами и повторение курса."),
  lessons: [
    lesson(
      "motions",
      ["The idea of a motion", "Շարժման գաղափարը", "Понятие движения"],
      {
        en: ["Define a mapping of the plane onto itself and a motion", "Know that a motion takes a segment to a segment and preserves angles", "Recognise equal figures as figures joined by a motion"],
        hy: ["Սահմանել հարթության արտապատկերումն ինքն իր վրա և շարժումը", "Իմանալ, որ շարժումը հատվածը տանում է հատվածի և պահպանում անկյունները", "Հավասար պատկերները ճանաչել որպես շարժումով միացված պատկերներ"],
        ru: ["Определять отображение плоскости на себя и движение", "Знать, что движение переводит отрезок в отрезок и сохраняет углы", "Распознавать равные фигуры как фигуры, соединённые движением"],
      },
      {
        en: `## Mapping the plane onto itself

Suppose a rule sends every point of the plane to a point of the plane, and every point is the image of exactly one point. Such a rule is a **mapping of the plane onto itself**.

> A mapping of the plane onto itself is called a **motion** if it preserves distances: if $A$ goes to $A'$ and $B$ to $B'$, then $A'B' = AB$.

The word is well chosen. Sliding a sheet of tracing paper over the plane without stretching it is exactly a motion, and the figures drawn on it keep their shape and size.

## What a motion preserves

> A motion takes a segment to an equal segment, a ray to a ray, a line to a line, an angle to an equal angle, and a triangle to an equal triangle.

**Why a segment goes to a segment.** A point $C$ lies on the segment $AB$ exactly when $AC + CB = AB$. A motion keeps all three distances, so the image $C'$ satisfies $A'C' + C'B' = A'B'$, which means $C'$ lies on the segment $A'B'$. Nothing but the triangle inequality is needed.

From that, angles are preserved too, because an angle is determined by three distances in a triangle, and areas are preserved because a figure and its image are equal.

| Preserved by a motion | Not preserved |
|---|---|
| distances | the position of a figure |
| angles | the direction of its sides |
| areas | which way round the vertices are listed, for some motions |
| being a line, a circle, a polygon | nothing of the shape |

## Equal figures

> Two figures are **equal** if some motion takes one onto the other.

This replaces the earlier definition by superposition and makes it exact. Everything proved about equal triangles in grades 7 and 8 fits into this single idea.

**Example 1.** The mapping that leaves every point where it is is a motion, the **identity**. It is a motion because every distance is unchanged.

**Example 2.** The mapping that sends $M(x; y)$ to $M'(2x; 2y)$ is not a motion: the distance from the origin doubles. It is a similarity, which belongs to a later course.

**Example 3.** The mapping that sends $M(x; y)$ to $M'(x + 3; y - 1)$ is a motion. For two points the differences of the coordinates are unchanged, so the distance computed from them is unchanged too.

**Example 4.** The mapping that sends $M(x; y)$ to $M'(x; -y)$ is a motion, the reflection in the axis $Ox$. Here
$$A'B'^2 = (x_2 - x_1)^2 + (-y_2 + y_1)^2 = A B^2.$$

**Example 5.** A motion applied twice is again a motion, since distances are kept at each step. A motion also has an inverse, which undoes it and is a motion as well. The four motions named in the next lessons, together with the identity, build all the others.

### Exercises

1. What does a mapping of the plane onto itself have to satisfy to be a motion?
2. Is the identity mapping a motion?
3. Is the mapping that sends $(x; y)$ to $(3x; 3y)$ a motion? Explain.
4. Is the mapping that sends $(x; y)$ to $(x - 5; y + 2)$ a motion?
5. Why does a motion take a segment to a segment of the same length?
6. Does a motion preserve the area of a figure?
7. Give the definition of equal figures through motions.
8. Is the mapping that sends $(x; y)$ to $(-x; y)$ a motion? What is it geometrically?

### Answers

1. It must preserve distances between any two points.
2. Yes, because no distance changes.
3. No. The distance between two points is tripled, so distances are not preserved.
4. Yes. The differences of the coordinates of two points do not change.
5. Because a point of the segment is the only kind of point whose distances to the ends add up to the whole, and a motion keeps those distances.
6. Yes. A figure and its image are equal, so their areas are equal.
7. Two figures are equal if some motion takes one onto the other.
8. Yes, it is a motion: the reflection in the axis $Oy$.`,
        hy: `## Հարթության արտապատկերումն ինքն իր վրա

Ենթադրենք կանոնը հարթության ամեն կետ տանում է հարթության կետի, և ամեն կետ ճիշտ մեկ կետի պատկերն է։ Այդպիսի կանոնը **հարթության արտապատկերում է ինքն իր վրա**։

> Հարթության արտապատկերումն ինքն իր վրա կոչվում է **շարժում**, եթե պահպանում է հեռավորությունները. եթե $A$-ն անցնում է $A'$, իսկ $B$-ն՝ $B'$, ապա $A'B' = AB$։

Բառն ընտրված է հաջող։ Թափանցիկ թաղանթը հարթության վրայով առանց ձգելու սահեցնելը հենց շարժում է, իսկ նրա վրա գծված պատկերները պահում են իրենց ձևը և չափը։

## Ինչ է պահպանում շարժումը

> Շարժումը հատվածը տանում է հավասար հատվածի, ճառագայթը՝ ճառագայթի, ուղիղը՝ ուղղի, անկյունը՝ հավասար անկյան, եռանկյունը՝ հավասար եռանկյան։

**Ինչու է հատվածն անցնում հատվածի։** $C$ կետը գտնվում է $AB$ հատվածի վրա հենց այն դեպքում, երբ $AC + CB = AB$։ Շարժումը պահում է բոլոր երեք հեռավորությունները, ուստի $C'$ պատկերը բավարարում է $A'C' + C'B' = A'B'$, ինչը նշանակում է, որ $C'$-ն գտնվում է $A'B'$ հատվածի վրա։ Եռանկյան անհավասարությունից բացի ոչինչ պետք չէ։

Այստեղից պահպանվում են նաև անկյունները, քանի որ անկյունն որոշվում է եռանկյան երեք հեռավորությամբ, և պահպանվում են մակերեսները, քանի որ պատկերը և նրա պատկերը հավասար են։

| Շարժումը պահպանում է | Չի պահպանում |
|---|---|
| հեռավորությունները | պատկերի դիրքը |
| անկյունները | նրա կողմերի ուղղությունը |
| մակերեսները | որոշ շարժումների դեպքում գագաթների շրջանցման ուղղությունը |
| ուղիղ, շրջանագիծ, բազմանկյուն լինելը | ձևից՝ ոչինչ |

## Հավասար պատկերներ

> Երկու պատկեր **հավասար** են, եթե ինչ-որ շարժում մեկը տանում է մյուսի վրա։

Սա փոխարինում է վերադրումով նախկին սահմանումը և դարձնում նրան ճշգրիտ։ 7-րդ և 8-րդ դասարաններում հավասար եռանկյունների մասին ապացուցված ամեն բան տեղավորվում է այս մեկ գաղափարում։

**Օրինակ 1.** Արտապատկերումը, որն ամեն կետ թողնում է իր տեղում, շարժում է՝ **նույնական** արտապատկերումը։ Նա շարժում է, քանի որ ամեն հեռավորություն մնում է անփոփոխ։

**Օրինակ 2.** Արտապատկերումը, որը $M(x; y)$-ը տանում է $M'(2x; 2y)$, շարժում չէ. սկզբնակետից հեռավորությունը կրկնապատկվում է։ Նա նմանություն է, որը հետագա դասընթացին է պատկանում։

**Օրինակ 3.** Արտապատկերումը, որը $M(x; y)$-ը տանում է $M'(x + 3; y - 1)$, շարժում է։ Երկու կետի համար կոորդինատների տարբերությունները չեն փոխվում, ուստի նրանցով հաշվված հեռավորությունն էլ չի փոխվում։

**Օրինակ 4.** Արտապատկերումը, որը $M(x; y)$-ը տանում է $M'(x; -y)$, շարժում է՝ $Ox$ առանցքի նկատմամբ համաչափությունը։ Այստեղ
$$A'B'^2 = (x_2 - x_1)^2 + (-y_2 + y_1)^2 = A B^2.$$

**Օրինակ 5.** Երկու անգամ կիրառված շարժումը նորից շարժում է, քանի որ ամեն քայլում հեռավորությունները պահպանվում են։ Շարժումն ունի նաև հակադարձ, որը չեղարկում է նրան և նույնպես շարժում է։ Հաջորդ դասերին անվանված չորս շարժումները նույնականի հետ միասին կառուցում են մնացած բոլորը։

### Վարժություններ

1. Ի՞նչ պետք է բավարարի հարթության արտապատկերումն ինքն իր վրա, որ շարժում լինի։
2. Նույնական արտապատկերումը շարժո՞ւմ է։
3. Արտապատկերումը, որը $(x; y)$-ը տանում է $(3x; 3y)$, շարժո՞ւմ է։ Բացատրեք։
4. Արտապատկերումը, որը $(x; y)$-ը տանում է $(x - 5; y + 2)$, շարժո՞ւմ է։
5. Ինչո՞ւ է շարժումը հատվածը տանում նույն երկարության հատվածի։
6. Շարժումը պահպանո՞ւմ է պատկերի մակերեսը։
7. Տվեք հավասար պատկերների սահմանումը շարժումներով։
8. Արտապատկերումը, որը $(x; y)$-ը տանում է $(-x; y)$, շարժո՞ւմ է։ Երկրաչափորեն ի՞նչ է նա։

### Պատասխաններ

1. Նա պետք է պահպանի ցանկացած երկու կետի հեռավորությունը։
2. Այո, քանի որ ոչ մի հեռավորություն չի փոխվում։
3. Ոչ։ Երկու կետի հեռավորությունն եռապատկվում է, ուստի հեռավորությունները չեն պահպանվում։
4. Այո։ Երկու կետի կոորդինատների տարբերությունները չեն փոխվում։
5. Քանի որ հատվածի կետն այն միակ տեսակի կետն է, որի հեռավորությունները ծայրակետերից գումարվում են ամբողջին, իսկ շարժումը պահում է այդ հեռավորությունները։
6. Այո։ Պատկերը և նրա պատկերը հավասար են, ուստի նրանց մակերեսները հավասար են։
7. Երկու պատկեր հավասար են, եթե ինչ-որ շարժում մեկը տանում է մյուսի վրա։
8. Այո, շարժում է՝ $Oy$ առանցքի նկատմամբ համաչափությունը։`,
        ru: `## Отображение плоскости на себя

Пусть правило переводит каждую точку плоскости в точку плоскости, и каждая точка является образом ровно одной точки. Такое правило называется **отображением плоскости на себя**.

> Отображение плоскости на себя называется **движением**, если оно сохраняет расстояния: если $A$ переходит в $A'$, а $B$ в $B'$, то $A'B' = AB$.

Слово выбрано удачно. Скольжение листа кальки по плоскости без растяжения — это в точности движение, и нарисованные на нём фигуры сохраняют форму и размер.

## Что сохраняет движение

> Движение переводит отрезок в равный отрезок, луч в луч, прямую в прямую, угол в равный угол, треугольник в равный треугольник.

**Почему отрезок переходит в отрезок.** Точка $C$ лежит на отрезке $AB$ в точности тогда, когда $AC + CB = AB$. Движение сохраняет все три расстояния, поэтому образ $C'$ удовлетворяет условию $A'C' + C'B' = A'B'$, а это значит, что $C'$ лежит на отрезке $A'B'$. Ничего, кроме неравенства треугольника, не нужно.

Отсюда сохраняются и углы, так как угол определяется тремя расстояниями в треугольнике, и сохраняются площади, так как фигура и её образ равны.

| Движение сохраняет | Не сохраняет |
|---|---|
| расстояния | положение фигуры |
| углы | направление её сторон |
| площади | при некоторых движениях направление обхода вершин |
| свойство быть прямой, окружностью, многоугольником | ничего из формы |

## Равные фигуры

> Две фигуры **равны**, если какое-то движение переводит одну в другую.

Это заменяет прежнее определение наложением и делает его точным. Всё, что доказано о равных треугольниках в 7 и 8 классах, укладывается в эту одну идею.

**Пример 1.** Отображение, оставляющее каждую точку на месте, является движением — это **тождественное** отображение. Оно движение, потому что ни одно расстояние не меняется.

**Пример 2.** Отображение, переводящее $M(x; y)$ в $M'(2x; 2y)$, не является движением: расстояние от начала координат удваивается. Это подобие, которое относится к более позднему курсу.

**Пример 3.** Отображение, переводящее $M(x; y)$ в $M'(x + 3; y - 1)$, является движением. Для двух точек разности координат не меняются, поэтому и вычисленное по ним расстояние не меняется.

**Пример 4.** Отображение, переводящее $M(x; y)$ в $M'(x; -y)$, является движением — это симметрия относительно оси $Ox$. Здесь
$$A'B'^2 = (x_2 - x_1)^2 + (-y_2 + y_1)^2 = A B^2.$$

**Пример 5.** Движение, применённое дважды, снова является движением, так как на каждом шаге расстояния сохраняются. У движения есть и обратное, которое его отменяет и тоже является движением. Четыре движения, названные в следующих уроках, вместе с тождественным строят все остальные.

### Упражнения

1. Чему должно удовлетворять отображение плоскости на себя, чтобы быть движением?
2. Является ли тождественное отображение движением?
3. Является ли движением отображение, переводящее $(x; y)$ в $(3x; 3y)$? Объясните.
4. Является ли движением отображение, переводящее $(x; y)$ в $(x - 5; y + 2)$?
5. Почему движение переводит отрезок в отрезок той же длины?
6. Сохраняет ли движение площадь фигуры?
7. Дайте определение равных фигур через движения.
8. Является ли движением отображение, переводящее $(x; y)$ в $(-x; y)$? Что это геометрически?

### Ответы

1. Оно должно сохранять расстояние между любыми двумя точками.
2. Да, потому что ни одно расстояние не меняется.
3. Нет. Расстояние между двумя точками увеличивается втрое, поэтому расстояния не сохраняются.
4. Да. Разности координат двух точек не меняются.
5. Потому что точка отрезка — единственный вид точки, расстояния которой до концов складываются в целое, а движение сохраняет эти расстояния.
6. Да. Фигура и её образ равны, поэтому их площади равны.
7. Две фигуры равны, если какое-то движение переводит одну в другую.
8. Да, это движение: симметрия относительно оси $Oy$.`,
      },
      [
        q(t("A mapping of the plane onto itself is a motion if it preserves", "Հարթության արտապատկերումն ինքն իր վրա շարժում է, եթե պահպանում է", "Отображение плоскости на себя является движением, если оно сохраняет"), [
          t("distances between points", "կետերի հեռավորությունները", "расстояния между точками"),
          t("the position of every point", "ամեն կետի դիրքը", "положение каждой точки"),
          t("only the areas of figures", "միայն պատկերների մակերեսները", "только площади фигур"),
        ], 0),
        q(t("A motion takes a segment to", "Շարժումը հատվածը տանում է", "Движение переводит отрезок в"), [
          t("a ray", "ճառագայթի", "луч"),
          t("an equal segment", "հավասար հատվածի", "равный отрезок"),
          t("an arc", "աղեղի", "дугу"),
        ], 1),
        q(t("Two figures are called equal when", "Երկու պատկեր կոչվում են հավասար, երբ", "Две фигуры называются равными, когда"), [
          t("they have equal areas", "նրանք ունեն հավասար մակերեսներ", "у них равные площади"),
          t("they have equal perimeters", "նրանք ունեն հավասար պարագծեր", "у них равные периметры"),
          t("some motion takes one onto the other", "ինչ-որ շարժում մեկը տանում է մյուսի վրա", "какое-то движение переводит одну в другую"),
        ], 2),
        q(t("The mapping sending (x; y) to (2x; 2y) is", "Արտապատկերումը, որը (x; y)-ը տանում է (2x; 2y), ", "Отображение, переводящее (x; y) в (2x; 2y), —"), [
          t("not a motion, because distances double", "շարժում չէ, քանի որ հեռավորությունները կրկնապատկվում են", "не движение, так как расстояния удваиваются"),
          t("a motion", "շարժում է", "движение"),
          t("not a mapping of the plane at all", "ընդհանրապես հարթության արտապատկերում չէ", "вообще не отображение плоскости"),
        ], 0),
        q(t("The identity mapping, which leaves every point in place, is", "Նույնական արտապատկերումը, որն ամեն կետ թողնում է իր տեղում,", "Тождественное отображение, оставляющее каждую точку на месте, —"), [
          t("not a motion", "շարժում չէ", "не движение"),
          t("a motion", "շարժում է", "движение"),
          t("a similarity but not a motion", "նմանություն է, բայց ոչ շարժում", "подобие, но не движение"),
        ], 1),
        q(t("The proof that a motion takes a segment to a segment rests on", "Ապացույցը, որ շարժումը հատվածը տանում է հատվածի, հիմնվում է", "Доказательство того, что движение переводит отрезок в отрезок, опирается на"), [
          t("the Pythagorean theorem", "Պյութագորասի թեորեմի վրա", "теорему Пифагора"),
          t("the law of cosines", "կոսինուսների թեորեմի վրա", "теорему косинусов"),
          t("the fact that a point of a segment is the only point whose distances to the ends add up to the whole", "այն փաստի վրա, որ հատվածի կետը միակ կետն է, որի հեռավորությունները ծայրակետերից գումարվում են ամբողջին", "то, что точка отрезка — единственная точка, расстояния которой до концов складываются в целое"),
        ], 2),
      ],
    ),
    lesson(
      "axial-central-symmetry",
      ["Axial and central symmetry", "Առանցքային և կենտրոնային համաչափություն", "Осевая и центральная симметрия"],
      {
        en: ["Construct the image of a point and a figure under a reflection in a line and in a point", "Prove that both symmetries are motions", "Find the axes and the centre of symmetry of a figure"],
        hy: ["Կառուցել կետի և պատկերի պատկերն ուղղի և կետի նկատմամբ համաչափության դեպքում", "Ապացուցել, որ երկու համաչափություններն էլ շարժումներ են", "Գտնել պատկերի համաչափության առանցքները և կենտրոնը"],
        ru: ["Строить образ точки и фигуры при симметрии относительно прямой и точки", "Доказывать, что обе симметрии являются движениями", "Находить оси и центр симметрии фигуры"],
      },
      {
        en: `## Symmetry in a line

> The points $A$ and $A'$ are **symmetric in the line $a$** if $a$ is the perpendicular bisector of the segment $AA'$. A point of the line itself is symmetric to itself.

The mapping that sends every point to the point symmetric to it in $a$ is the **axial symmetry** with axis $a$. If a figure goes onto itself under it, the figure is **symmetric about $a$**, and $a$ is an **axis of symmetry**.

## Symmetry in a point

> The points $A$ and $A'$ are **symmetric in the point $O$** if $O$ is the midpoint of $AA'$. The point $O$ is symmetric to itself.

The mapping that sends every point to the point symmetric to it in $O$ is the **central symmetry** with centre $O$. A figure that goes onto itself has $O$ as a **centre of symmetry**.

## Both are motions

In coordinates the proof is immediate. Put the axis along $Ox$: the symmetry sends $(x; y)$ to $(x; -y)$, and
$$A'B'^2 = (x_2 - x_1)^2 + (y_1 - y_2)^2 = AB^2.$$
Put the centre at the origin: the symmetry sends $(x; y)$ to $(-x; -y)$, and again
$$A'B'^2 = (x_1 - x_2)^2 + (y_1 - y_2)^2 = AB^2.$$

So both preserve distances and are motions. The central symmetry is also the rotation through $180^\\circ$ about $O$, which the next lesson makes clear.

## Symmetries of familiar figures

| Figure | Axes of symmetry | Centre of symmetry |
|---|---|---|
| segment | $2$: its own line and its perpendicular bisector | its midpoint |
| angle | $1$: its bisector | none |
| isosceles triangle | $1$ | none |
| equilateral triangle | $3$ | none |
| rectangle | $2$ | the point where the diagonals meet |
| rhombus | $2$, its diagonals | the same point |
| square | $4$ | the same point |
| regular hexagon | $6$ | its centre |
| circle | infinitely many, every diameter | its centre |

Notice the pattern: a regular $n$-gon has $n$ axes of symmetry, and it has a centre of symmetry exactly when $n$ is even.

**Example 1.** Construct the image of the triangle $A(1; 2)$, $B(4; 3)$, $C(2; 6)$ under the symmetry in the axis $Ox$. The images are $A'(1; -2)$, $B'(4; -3)$, $C'(2; -6)$.

**Example 2.** The same triangle under the central symmetry in the origin gives $A'(-1; -2)$, $B'(-4; -3)$, $C'(-2; -6)$.

**Example 3.** A parallelogram that is not a rectangle or a rhombus has no axis of symmetry, but it does have a centre: the point where the diagonals meet. Central symmetry alone can hold.

**Example 4.** The letters of the Latin alphabet divide up neatly: A, M, T have a vertical axis; B, C, D, E have a horizontal one; H, I, O, X have both and a centre; N, S, Z have a centre only; F, G, J, L, P, Q, R have neither.

**Example 5.** To fold a shortest path from $A$ to a line $a$ and then to $B$, with both points on the same side, reflect $B$ in $a$ to get $B'$ and join $AB'$. The reflection turns a bent path into a straight one, and that is the standard use of axial symmetry in problems.

### Exercises

1. Find the point symmetric to $(3; 5)$ in the axis $Ox$.
2. Find the point symmetric to $(3; 5)$ in the axis $Oy$.
3. Find the point symmetric to $(3; 5)$ in the origin.
4. Find the point symmetric to $(1; 4)$ in the point $(3; 3)$.
5. How many axes of symmetry has a rhombus that is not a square?
6. Has a parallelogram that is not a rectangle an axis of symmetry? A centre?
7. How many axes of symmetry has a regular pentagon? Has it a centre of symmetry?
8. Prove in coordinates that the central symmetry in the origin is a motion.

### Answers

1. $(3; -5)$.
2. $(-3; 5)$.
3. $(-3; -5)$.
4. $(5; 2)$, since the centre must be the midpoint.
5. Two, its diagonals.
6. No axis, but yes, a centre at the intersection of the diagonals.
7. Five axes, and no centre of symmetry, because five is odd.
8. It sends $(x; y)$ to $(-x; -y)$, and the differences of coordinates only change sign, so the distance is unchanged.`,
        hy: `## Համաչափություն ուղղի նկատմամբ

> $A$ և $A'$ կետերը **համաչափ են $a$ ուղղի նկատմամբ**, եթե $a$-ն $AA'$ հատվածի միջնուղղահայացն է։ Ուղղի վրա գտնվող կետը համաչափ է ինքն իրեն։

Արտապատկերումը, որն ամեն կետ տանում է $a$-ի նկատմամբ իրեն համաչափ կետի, **առանցքային համաչափություն** է $a$ առանցքով։ Եթե պատկերն այդ արտապատկերման դեպքում անցնում է ինքն իր վրա, պատկերը **համաչափ է $a$-ի նկատմամբ**, իսկ $a$-ն **համաչափության առանցք** է։

## Համաչափություն կետի նկատմամբ

> $A$ և $A'$ կետերը **համաչափ են $O$ կետի նկատմամբ**, եթե $O$-ն $AA'$-ի միջնակետն է։ $O$ կետը համաչափ է ինքն իրեն։

Արտապատկերումը, որն ամեն կետ տանում է $O$-ի նկատմամբ իրեն համաչափ կետի, **կենտրոնային համաչափություն** է $O$ կենտրոնով։ Ինքն իր վրա անցնող պատկերի համար $O$-ն **համաչափության կենտրոն** է։

## Երկուսն էլ շարժումներ են

Կոորդինատներով ապացույցն անմիջական է։ Առանցքը դնենք $Ox$-ի երկայնքով. համաչափությունը $(x; y)$-ը տանում է $(x; -y)$, և
$$A'B'^2 = (x_2 - x_1)^2 + (y_1 - y_2)^2 = AB^2.$$
Կենտրոնը դնենք սկզբնակետում. համաչափությունը $(x; y)$-ը տանում է $(-x; -y)$, և նորից
$$A'B'^2 = (x_1 - x_2)^2 + (y_1 - y_2)^2 = AB^2.$$

Ուրեմն երկուսն էլ պահպանում են հեռավորությունները և շարժումներ են։ Կենտրոնային համաչափությունը նաև $O$-ի շուրջը $180^\\circ$ պտույտն է, ինչը հաջորդ դասը պարզ կդարձնի։

## Ծանոթ պատկերների համաչափությունները

| Պատկերը | Համաչափության առանցքները | Համաչափության կենտրոնը |
|---|---|---|
| հատված | $2$՝ իր ուղիղը և իր միջնուղղահայացը | իր միջնակետը |
| անկյուն | $1$՝ իր կիսորդը | չունի |
| հավասարասրուն եռանկյուն | $1$ | չունի |
| հավասարակողմ եռանկյուն | $3$ | չունի |
| ուղղանկյուն | $2$ | անկյունագծերի հատման կետը |
| շեղանկյուն | $2$՝ իր անկյունագծերը | նույն կետը |
| քառակուսի | $4$ | նույն կետը |
| կանոնավոր վեցանկյուն | $6$ | իր կենտրոնը |
| շրջանագիծ | անվերջ շատ՝ ամեն տրամագիծ | իր կենտրոնը |

Նկատեք օրինաչափությունը. կանոնավոր $n$-անկյունն ունի $n$ համաչափության առանցք, և ունի համաչափության կենտրոն հենց այն դեպքում, երբ $n$-ը զույգ է։

**Օրինակ 1.** Կառուցենք $A(1; 2)$, $B(4; 3)$, $C(2; 6)$ եռանկյան պատկերը $Ox$ առանցքի նկատմամբ համաչափության դեպքում։ Պատկերներն են $A'(1; -2)$, $B'(4; -3)$, $C'(2; -6)$։

**Օրինակ 2.** Նույն եռանկյունը սկզբնակետի նկատմամբ կենտրոնային համաչափության դեպքում տալիս է $A'(-1; -2)$, $B'(-4; -3)$, $C'(-2; -6)$։

**Օրինակ 3.** Զուգահեռագիծը, որն ոչ ուղղանկյուն է, ոչ շեղանկյուն, համաչափության առանցք չունի, բայց ունի կենտրոն՝ անկյունագծերի հատման կետը։ Միայն կենտրոնային համաչափությունը կարող է պահպանվել։

**Օրինակ 4.** Լատինական այբուբենի տառերը բաժանվում են մաքուր. A, M, T ունեն ուղղաձիգ առանցք, B, C, D, E՝ հորիզոնական, H, I, O, X ունեն երկուսն էլ և կենտրոն, N, S, Z ունեն միայն կենտրոն, F, G, J, L, P, Q, R չունեն ոչ մեկը։

**Օրինակ 5.** $A$-ից $a$ ուղղին և ապա $B$-ին տանող ամենակարճ ճանապարհը գտնելու համար, երբ երկու կետերը նույն կողմում են, $B$-ն համաչափորեն արտապատկերենք $a$-ի նկատմամբ՝ ստանալով $B'$, և միացնենք $AB'$։ Համաչափությունը կոտրված ճանապարհը դարձնում է ուղիղ, և սա խնդիրներում առանցքային համաչափության սովորական կիրառումն է։

### Վարժություններ

1. Գտեք $(3; 5)$ կետին $Ox$ առանցքի նկատմամբ համաչափ կետը։
2. Գտեք $(3; 5)$ կետին $Oy$ առանցքի նկատմամբ համաչափ կետը։
3. Գտեք $(3; 5)$ կետին սկզբնակետի նկատմամբ համաչափ կետը։
4. Գտեք $(1; 4)$ կետին $(3; 3)$ կետի նկատմամբ համաչափ կետը։
5. Քանի՞ համաչափության առանցք ունի շեղանկյունը, որը քառակուսի չէ։
6. Ունի՞ համաչափության առանցք զուգահեռագիծը, որն ուղղանկյուն չէ։ Իսկ կենտրոն։
7. Քանի՞ համաչափության առանցք ունի կանոնավոր հնգանկյունը։ Ունի՞ համաչափության կենտրոն։
8. Կոորդինատներով ապացուցեք, որ սկզբնակետի նկատմամբ կենտրոնային համաչափությունը շարժում է։

### Պատասխաններ

1. $(3; -5)$։
2. $(-3; 5)$։
3. $(-3; -5)$։
4. $(5; 2)$, քանի որ կենտրոնը պետք է միջնակետը լինի։
5. Երկու՝ իր անկյունագծերը։
6. Առանցք չունի, բայց այո, ունի կենտրոն՝ անկյունագծերի հատման կետում։
7. Հինգ առանցք, և համաչափության կենտրոն չունի, քանի որ հինգը կենտ է։
8. Նա $(x; y)$-ը տանում է $(-x; -y)$, և կոորդինատների տարբերությունները միայն փոխում են նշանը, ուստի հեռավորությունը չի փոխվում։`,
        ru: `## Симметрия относительно прямой

> Точки $A$ и $A'$ называются **симметричными относительно прямой $a$**, если $a$ — серединный перпендикуляр к отрезку $AA'$. Точка самой прямой симметрична самой себе.

Отображение, переводящее каждую точку в симметричную ей относительно $a$, называется **осевой симметрией** с осью $a$. Если фигура при этом переходит в себя, она **симметрична относительно $a$**, а $a$ — её **ось симметрии**.

## Симметрия относительно точки

> Точки $A$ и $A'$ называются **симметричными относительно точки $O$**, если $O$ — середина $AA'$. Точка $O$ симметрична самой себе.

Отображение, переводящее каждую точку в симметричную ей относительно $O$, называется **центральной симметрией** с центром $O$. У фигуры, переходящей в себя, $O$ является **центром симметрии**.

## Обе являются движениями

В координатах доказательство получается сразу. Поместим ось вдоль $Ox$: симметрия переводит $(x; y)$ в $(x; -y)$, и
$$A'B'^2 = (x_2 - x_1)^2 + (y_1 - y_2)^2 = AB^2.$$
Поместим центр в начало координат: симметрия переводит $(x; y)$ в $(-x; -y)$, и снова
$$A'B'^2 = (x_1 - x_2)^2 + (y_1 - y_2)^2 = AB^2.$$

Значит, обе сохраняют расстояния и являются движениями. Центральная симметрия — это также поворот на $180^\\circ$ вокруг $O$, что станет ясно в следующем уроке.

## Симметрии знакомых фигур

| Фигура | Оси симметрии | Центр симметрии |
|---|---|---|
| отрезок | $2$: своя прямая и серединный перпендикуляр | его середина |
| угол | $1$: его биссектриса | нет |
| равнобедренный треугольник | $1$ | нет |
| равносторонний треугольник | $3$ | нет |
| прямоугольник | $2$ | точка пересечения диагоналей |
| ромб | $2$, его диагонали | та же точка |
| квадрат | $4$ | та же точка |
| правильный шестиугольник | $6$ | его центр |
| окружность | бесконечно много, каждый диаметр | её центр |

Заметьте закономерность: у правильного $n$-угольника $n$ осей симметрии, а центр симметрии есть в точности тогда, когда $n$ чётно.

**Пример 1.** Построим образ треугольника $A(1; 2)$, $B(4; 3)$, $C(2; 6)$ при симметрии относительно оси $Ox$. Образы: $A'(1; -2)$, $B'(4; -3)$, $C'(2; -6)$.

**Пример 2.** Тот же треугольник при центральной симметрии относительно начала координат даёт $A'(-1; -2)$, $B'(-4; -3)$, $C'(-2; -6)$.

**Пример 3.** У параллелограмма, который не является ни прямоугольником, ни ромбом, нет оси симметрии, но есть центр — точка пересечения диагоналей. Центральная симметрия может сохраняться и сама по себе.

**Пример 4.** Буквы латинского алфавита делятся аккуратно: A, M, T имеют вертикальную ось, B, C, D, E — горизонтальную, H, I, O, X имеют обе и центр, N, S, Z имеют только центр, F, G, J, L, P, Q, R не имеют ни того, ни другого.

**Пример 5.** Чтобы найти кратчайший путь из $A$ к прямой $a$ и затем к $B$, когда обе точки по одну сторону, отразим $B$ относительно $a$, получив $B'$, и соединим $AB'$. Отражение превращает ломаный путь в прямой, и это обычное применение осевой симметрии в задачах.

### Упражнения

1. Найдите точку, симметричную $(3; 5)$ относительно оси $Ox$.
2. Найдите точку, симметричную $(3; 5)$ относительно оси $Oy$.
3. Найдите точку, симметричную $(3; 5)$ относительно начала координат.
4. Найдите точку, симметричную $(1; 4)$ относительно точки $(3; 3)$.
5. Сколько осей симметрии у ромба, не являющегося квадратом?
6. Есть ли ось симметрии у параллелограмма, не являющегося прямоугольником? А центр?
7. Сколько осей симметрии у правильного пятиугольника? Есть ли у него центр симметрии?
8. Докажите в координатах, что центральная симметрия относительно начала координат является движением.

### Ответы

1. $(3; -5)$.
2. $(-3; 5)$.
3. $(-3; -5)$.
4. $(5; 2)$, так как центр должен быть серединой.
5. Две, его диагонали.
6. Оси нет, но центр есть — в точке пересечения диагоналей.
7. Пять осей, а центра симметрии нет, потому что пять — нечётное число.
8. Она переводит $(x; y)$ в $(-x; -y)$, и разности координат лишь меняют знак, поэтому расстояние не меняется.`,
      },
      [
        q(t("Two points are symmetric in a line when that line is", "Երկու կետ համաչափ են ուղղի նկատմամբ, երբ այդ ուղիղը", "Две точки симметричны относительно прямой, когда эта прямая —"), [
          t("the perpendicular bisector of the segment joining them", "նրանց միացնող հատվածի միջնուղղահայացն է", "серединный перпендикуляр к соединяющему их отрезку"),
          t("parallel to the segment joining them", "նրանց միացնող հատվածին զուգահեռ է", "параллельна соединяющему их отрезку"),
          t("the bisector of the angle between them", "նրանց միջև անկյան կիսորդն է", "биссектриса угла между ними"),
        ], 0),
        q(t("Two points are symmetric in a point when that point is", "Երկու կետ համաչափ են կետի նկատմամբ, երբ այդ կետը", "Две точки симметричны относительно точки, когда эта точка —"), [
          t("one of the two points", "երկու կետերից մեկն է", "одна из двух точек"),
          t("the midpoint of the segment joining them", "նրանց միացնող հատվածի միջնակետն է", "середина соединяющего их отрезка"),
          t("at distance one from each of them", "նրանցից ամեն մեկից մեկ հեռավորության վրա է", "на расстоянии один от каждой из них"),
        ], 1),
        q(t("A square has", "Քառակուսին ունի", "У квадрата"), [
          t("two axes of symmetry", "երկու համաչափության առանցք", "две оси симметрии"),
          t("three axes of symmetry", "երեք համաչափության առանցք", "три оси симметрии"),
          t("four axes of symmetry", "չորս համաչափության առանցք", "четыре оси симметрии"),
        ], 2),
        q(t("A regular n-gon has a centre of symmetry exactly when", "Կանոնավոր n-անկյունն ունի համաչափության կենտրոն հենց այն դեպքում, երբ", "У правильного n-угольника есть центр симметрии в точности тогда, когда"), [
          t("n is even", "n-ը զույգ է", "n чётно"),
          t("n is odd", "n-ը կենտ է", "n нечётно"),
          t("n is greater than six", "n-ը վեցից մեծ է", "n больше шести"),
        ], 0),
        q(t("A parallelogram that is neither a rectangle nor a rhombus has", "Զուգահեռագիծը, որն ոչ ուղղանկյուն է, ոչ շեղանկյուն, ունի", "У параллелограмма, который не является ни прямоугольником, ни ромбом, есть"), [
          t("two axes of symmetry", "երկու համաչափության առանցք", "две оси симметрии"),
          t("a centre of symmetry but no axis", "համաչափության կենտրոն, բայց առանցք՝ ոչ", "центр симметрии, но нет оси"),
          t("neither a centre nor an axis", "ոչ կենտրոն, ոչ առանցք", "ни центра, ни оси"),
        ], 1),
        q(t("The central symmetry with centre O is the same as", "O կենտրոնով կենտրոնային համաչափությունը նույնն է, ինչ", "Центральная симметрия с центром O — это то же, что"), [
          t("the reflection in a line through O", "O-ով անցնող ուղղի նկատմամբ համաչափությունը", "симметрия относительно прямой, проходящей через O"),
          t("a translation", "զուգահեռ տեղափոխությունը", "параллельный перенос"),
          t("the rotation through 180 degrees about O", "O-ի շուրջը 180 աստիճան պտույտը", "поворот на 180 градусов вокруг O"),
        ], 2),
      ],
    ),
    lesson(
      "translation-rotation",
      ["Parallel translation and rotation", "Զուգահեռ տեղափոխություն և պտույտ", "Параллельный перенос и поворот"],
      {
        en: ["Define a parallel translation by a vector and prove it is a motion", "Define a rotation about a centre through an angle and prove it is a motion", "Use translations and rotations in construction problems"],
        hy: ["Սահմանել վեկտորով զուգահեռ տեղափոխությունը և ապացուցել, որ նա շարժում է", "Սահմանել կենտրոնի շուրջն անկյունով պտույտը և ապացուցել, որ նա շարժում է", "Կիրառել տեղափոխությունը և պտույտը կառուցման խնդիրներում"],
        ru: ["Определять параллельный перенос на вектор и доказывать, что он является движением", "Определять поворот вокруг центра на угол и доказывать, что он является движением", "Применять перенос и поворот в задачах на построение"],
      },
      {
        en: `## Parallel translation

> The **parallel translation** by the vector $\\vec{p}\\{a; b\\}$ sends each point $M(x; y)$ to the point
> $$M'(x + a;\\ y + b).$$

Equivalently, $\\overrightarrow{MM'} = \\vec{p}$ for every point: the whole plane slides by the same vector.

**It is a motion.** For two points the differences of the coordinates are
$$(x_2 + a) - (x_1 + a) = x_2 - x_1, \\qquad (y_2 + b) - (y_1 + b) = y_2 - y_1,$$
so the distance is unchanged.

A translation takes every line to a parallel line, or to itself when the line is parallel to $\\vec{p}$. Unless $\\vec{p} = \\vec{0}$ it has no fixed point, which makes it different from the two symmetries.

**Example 1.** Under the translation by $\\{3; -2\\}$ the point $(1; 5)$ goes to $(4; 3)$, and the circle $(x - 1)^2 + (y - 5)^2 = 9$ goes to $(x - 4)^2 + (y - 3)^2 = 9$.

**Example 2.** Two villages lie on opposite sides of a straight canal of constant width, and a bridge must be built across the canal perpendicular to its banks so that the path from $A$ to $B$ is shortest. Translate $A$ by the vector across the canal to get $A'$, join $A'B$, and build the bridge where that segment crosses the far bank. The translation removes the width of the canal from the problem.

## Rotation

> The **rotation** about the centre $O$ through the angle $\\alpha$ in a chosen direction sends each point $M$ to the point $M'$ such that $OM' = OM$ and the angle $MOM'$ equals $\\alpha$. The centre goes to itself.

**It is a motion.** For two points $A$ and $B$ the triangles $AOB$ and $A'OB'$ have $OA' = OA$, $OB' = OB$, and the angles $AOB$ and $A'OB'$ are equal, because each is the angle $A'OB$ increased or decreased by $\\alpha$. So the triangles are equal by two sides and the angle between them, and $A'B' = AB$.

| Motion | Fixed points | Takes a line to |
|---|---|---|
| axial symmetry | the axis | a line, parallel only if parallel to the axis |
| central symmetry | the centre | a parallel line |
| translation | none, unless it is the identity | a parallel line |
| rotation | the centre | a line making the angle $\\alpha$ with it |

**Example 3.** The rotation about the origin through $90^\\circ$ anticlockwise sends $(x; y)$ to $(-y; x)$. So $(3; 1)$ goes to $(-1; 3)$, and indeed both are at distance $\\sqrt{10}$ from the centre and the scalar product $-3 + 3 = 0$ confirms the right angle.

**Example 4.** The rotation through $180^\\circ$ is the central symmetry, since the point $M'$ then lies on the ray opposite $OM$ at the same distance.

**Example 5.** A regular hexagon goes onto itself under the rotation about its centre through $60^\\circ$, and so under rotations through $120^\\circ$, $180^\\circ$, $240^\\circ$, $300^\\circ$ and $360^\\circ$: six rotations in all. A regular $n$-gon admits $n$ such rotations, through multiples of $\\frac{360^\\circ}{n}$.

**Example 6.** On the sides of a triangle, equilateral triangles are built outwards. A rotation through $60^\\circ$ about a vertex carries one of them onto another and is the key to proving that the three new outer vertices form an equilateral triangle. Rotations are the natural tool whenever a figure has a $60^\\circ$ or $90^\\circ$ angle to exploit.

### Exercises

1. Find the image of $(2; 7)$ under the translation by $\\{4; -3\\}$.
2. Find the vector of the translation that sends $(1; 1)$ to $(6; -2)$.
3. Write the equation of the image of the circle $x^2 + y^2 = 4$ under the translation by $\\{5; 0\\}$.
4. Has a parallel translation by a non-zero vector any fixed point?
5. Find the image of $(4; 0)$ under the rotation about the origin through $90^\\circ$ anticlockwise.
6. Which rotation is the same as the central symmetry?
7. How many rotations carry a square onto itself?
8. Prove that a parallel translation takes a line to a parallel line or to itself.

### Answers

1. $(6; 4)$.
2. $\\{5; -3\\}$.
3. $(x - 5)^2 + y^2 = 4$.
4. No, because every point moves by the same non-zero vector.
5. $(0; 4)$.
6. The rotation through $180^\\circ$.
7. Four, through $90^\\circ$, $180^\\circ$, $270^\\circ$ and $360^\\circ$.
8. All points of the line move by the same vector, so the image is the set of points at that vector from the line, which is a line parallel to it, and it is the line itself when the vector is parallel to the line.`,
        hy: `## Զուգահեռ տեղափոխություն

> $\\vec{p}\\{a; b\\}$ վեկտորով **զուգահեռ տեղափոխությունը** ամեն $M(x; y)$ կետ տանում է
> $$M'(x + a;\\ y + b)$$
> կետի։

Համարժեք ձևակերպմամբ՝ ամեն կետի համար $\\overrightarrow{MM'} = \\vec{p}$. ամբողջ հարթությունը սահում է նույն վեկտորով։

**Նա շարժում է։** Երկու կետի համար կոորդինատների տարբերություններն են
$$(x_2 + a) - (x_1 + a) = x_2 - x_1, \\qquad (y_2 + b) - (y_1 + b) = y_2 - y_1,$$
ուստի հեռավորությունը չի փոխվում։

Տեղափոխությունն ամեն ուղիղ տանում է զուգահեռ ուղղի, կամ ինքն իր վրա, երբ ուղիղը զուգահեռ է $\\vec{p}$-ին։ Եթե $\\vec{p} \\ne \\vec{0}$, նա անշարժ կետ չունի, ինչով տարբերվում է երկու համաչափություններից։

**Օրինակ 1.** $\\{3; -2\\}$ վեկտորով տեղափոխության դեպքում $(1; 5)$ կետն անցնում է $(4; 3)$, իսկ $(x - 1)^2 + (y - 5)^2 = 9$ շրջանագիծը՝ $(x - 4)^2 + (y - 3)^2 = 9$։

**Օրինակ 2.** Երկու գյուղ գտնվում են հաստատուն լայնությամբ ուղիղ ջրանցքի հակառակ կողմերում, և ջրանցքի վրայով պետք է կառուցել կամուրջ՝ ափերին ուղղահայաց, այնպես որ $A$-ից $B$ ճանապարհն ամենակարճը լինի։ $A$-ն տեղափոխենք ջրանցքը կտրող վեկտորով՝ ստանալով $A'$, միացնենք $A'B$, և կամուրջը կառուցենք այնտեղ, որտեղ այդ հատվածը հատում է հակառակ ափը։ Տեղափոխությունը խնդրից հանում է ջրանցքի լայնությունը։

## Պտույտ

> $O$ կենտրոնի շուրջը $\\alpha$ անկյունով ընտրված ուղղությամբ **պտույտը** ամեն $M$ կետ տանում է այն $M'$ կետի, որի համար $OM' = OM$ և $MOM'$ անկյունը հավասար է $\\alpha$-ի։ Կենտրոնն անցնում է ինքն իր վրա։

**Նա շարժում է։** $A$ և $B$ երկու կետի համար $AOB$ և $A'OB'$ եռանկյուններում $OA' = OA$, $OB' = OB$, իսկ $AOB$ և $A'OB'$ անկյունները հավասար են, քանի որ ամեն մեկը $A'OB$ անկյունն է՝ $\\alpha$-ով մեծացված կամ փոքրացված։ Ուստի եռանկյունները հավասար են երկու կողմով և նրանց միջև անկյունով, և $A'B' = AB$։

| Շարժումը | Անշարժ կետերը | Ուղիղը տանում է |
|---|---|---|
| առանցքային համաչափություն | առանցքը | ուղղի, զուգահեռ միայն երբ առանցքին զուգահեռ է |
| կենտրոնային համաչափություն | կենտրոնը | զուգահեռ ուղղի |
| տեղափոխություն | չկա, եթե նույնականը չէ | զուգահեռ ուղղի |
| պտույտ | կենտրոնը | ուղղի, որը նրա հետ կազմում է $\\alpha$ անկյուն |

**Օրինակ 3.** Սկզբնակետի շուրջը $90^\\circ$ ժամսլաքի հակառակ ուղղությամբ պտույտը $(x; y)$-ը տանում է $(-y; x)$։ Ուրեմն $(3; 1)$-ն անցնում է $(-1; 3)$, և իրոք երկուսն էլ կենտրոնից $\\sqrt{10}$ հեռավորության վրա են, իսկ $-3 + 3 = 0$ սկալյար արտադրյալը հաստատում է ուղիղ անկյունը։

**Օրինակ 4.** $180^\\circ$ պտույտը կենտրոնային համաչափությունն է, քանի որ $M'$ կետն այդ դեպքում գտնվում է $OM$-ին հակադիր ճառագայթի վրա՝ նույն հեռավորության վրա։

**Օրինակ 5.** Կանոնավոր վեցանկյունն անցնում է ինքն իր վրա իր կենտրոնի շուրջը $60^\\circ$ պտույտի դեպքում, և նույնպես $120^\\circ$, $180^\\circ$, $240^\\circ$, $300^\\circ$ և $360^\\circ$ պտույտների դեպքում՝ ընդամենը վեց պտույտ։ Կանոնավոր $n$-անկյունը թույլ է տալիս $n$ այդպիսի պտույտ՝ $\\frac{360^\\circ}{n}$-ի բազմապատիկներով։

**Օրինակ 6.** Եռանկյան կողմերի վրա դուրս կողմ կառուցված են հավասարակողմ եռանկյուններ։ Գագաթի շուրջը $60^\\circ$ պտույտը նրանցից մեկը տանում է մյուսի վրա և բանալին է այն ապացուցելու, որ երեք նոր արտաքին գագաթները կազմում են հավասարակողմ եռանկյուն։ Պտույտը բնական գործիք է, երբ պատկերն ունի օգտագործելու $60^\\circ$ կամ $90^\\circ$ անկյուն։

### Վարժություններ

1. Գտեք $(2; 7)$ կետի պատկերը $\\{4; -3\\}$ վեկտորով տեղափոխության դեպքում։
2. Գտեք այն տեղափոխության վեկտորը, որը $(1; 1)$-ը տանում է $(6; -2)$։
3. Գրեք $x^2 + y^2 = 4$ շրջանագծի պատկերի հավասարումը $\\{5; 0\\}$ վեկտորով տեղափոխության դեպքում։
4. Ոչ զրոյական վեկտորով զուգահեռ տեղափոխությունն անշարժ կետ ունի՞։
5. Գտեք $(4; 0)$ կետի պատկերը սկզբնակետի շուրջը $90^\\circ$ ժամսլաքի հակառակ պտույտի դեպքում։
6. Ո՞ր պտույտն է նույնը, ինչ կենտրոնային համաչափությունը։
7. Քանի՞ պտույտ քառակուսին տանում է ինքն իր վրա։
8. Ապացուցեք, որ զուգահեռ տեղափոխությունն ուղիղը տանում է զուգահեռ ուղղի կամ ինքն իր վրա։

### Պատասխաններ

1. $(6; 4)$։
2. $\\{5; -3\\}$։
3. $(x - 5)^2 + y^2 = 4$։
4. Ոչ, քանի որ ամեն կետ շարժվում է նույն ոչ զրոյական վեկտորով։
5. $(0; 4)$։
6. $180^\\circ$ պտույտը։
7. Չորս՝ $90^\\circ$, $180^\\circ$, $270^\\circ$ և $360^\\circ$։
8. Ուղղի բոլոր կետերը շարժվում են նույն վեկտորով, ուստի պատկերն ուղղից այդ վեկտորի վրա գտնվող կետերի բազմությունն է, որը նրան զուգահեռ ուղիղ է, և դա հենց նույն ուղիղն է, երբ վեկտորը զուգահեռ է ուղղին։`,
        ru: `## Параллельный перенос

> **Параллельный перенос** на вектор $\\vec{p}\\{a; b\\}$ переводит каждую точку $M(x; y)$ в точку
> $$M'(x + a;\\ y + b).$$

Равносильно: для каждой точки $\\overrightarrow{MM'} = \\vec{p}$, то есть вся плоскость сдвигается на один и тот же вектор.

**Это движение.** Для двух точек разности координат равны
$$(x_2 + a) - (x_1 + a) = x_2 - x_1, \\qquad (y_2 + b) - (y_1 + b) = y_2 - y_1,$$
поэтому расстояние не меняется.

Перенос переводит каждую прямую в параллельную ей прямую или в себя, когда прямая параллельна $\\vec{p}$. Если $\\vec{p} \\ne \\vec{0}$, у него нет неподвижных точек, и этим он отличается от двух симметрий.

**Пример 1.** При переносе на $\\{3; -2\\}$ точка $(1; 5)$ переходит в $(4; 3)$, а окружность $(x - 1)^2 + (y - 5)^2 = 9$ переходит в $(x - 4)^2 + (y - 3)^2 = 9$.

**Пример 2.** Две деревни лежат по разные стороны прямого канала постоянной ширины, и через канал надо построить мост перпендикулярно берегам так, чтобы путь из $A$ в $B$ был кратчайшим. Перенесём $A$ на вектор через канал, получив $A'$, соединим $A'B$, и построим мост там, где этот отрезок пересекает дальний берег. Перенос убирает из задачи ширину канала.

## Поворот

> **Поворот** вокруг центра $O$ на угол $\\alpha$ в выбранном направлении переводит каждую точку $M$ в такую точку $M'$, что $OM' = OM$ и угол $MOM'$ равен $\\alpha$. Центр переходит в себя.

**Это движение.** Для двух точек $A$ и $B$ в треугольниках $AOB$ и $A'OB'$ выполнено $OA' = OA$, $OB' = OB$, а углы $AOB$ и $A'OB'$ равны, так как каждый из них — угол $A'OB$, увеличенный или уменьшенный на $\\alpha$. Поэтому треугольники равны по двум сторонам и углу между ними, и $A'B' = AB$.

| Движение | Неподвижные точки | Прямую переводит в |
|---|---|---|
| осевая симметрия | ось | прямую, параллельную лишь если она параллельна оси |
| центральная симметрия | центр | параллельную прямую |
| перенос | нет, если это не тождественное | параллельную прямую |
| поворот | центр | прямую, образующую с ней угол $\\alpha$ |

**Пример 3.** Поворот вокруг начала координат на $90^\\circ$ против часовой стрелки переводит $(x; y)$ в $(-y; x)$. Значит, $(3; 1)$ переходит в $(-1; 3)$, и действительно обе точки находятся на расстоянии $\\sqrt{10}$ от центра, а скалярное произведение $-3 + 3 = 0$ подтверждает прямой угол.

**Пример 4.** Поворот на $180^\\circ$ — это центральная симметрия, так как точка $M'$ тогда лежит на луче, противоположном $OM$, на том же расстоянии.

**Пример 5.** Правильный шестиугольник переходит в себя при повороте вокруг своего центра на $60^\\circ$, а также при поворотах на $120^\\circ$, $180^\\circ$, $240^\\circ$, $300^\\circ$ и $360^\\circ$ — всего шесть поворотов. Правильный $n$-угольник допускает $n$ таких поворотов, на углы, кратные $\\frac{360^\\circ}{n}$.

**Пример 6.** На сторонах треугольника наружу построены равносторонние треугольники. Поворот на $60^\\circ$ вокруг вершины переводит один из них в другой и является ключом к доказательству того, что три новые внешние вершины образуют равносторонний треугольник. Поворот — естественный инструмент всюду, где у фигуры есть угол $60^\\circ$ или $90^\\circ$.

### Упражнения

1. Найдите образ $(2; 7)$ при переносе на $\\{4; -3\\}$.
2. Найдите вектор переноса, переводящего $(1; 1)$ в $(6; -2)$.
3. Запишите уравнение образа окружности $x^2 + y^2 = 4$ при переносе на $\\{5; 0\\}$.
4. Есть ли у параллельного переноса на ненулевой вектор неподвижные точки?
5. Найдите образ $(4; 0)$ при повороте вокруг начала координат на $90^\\circ$ против часовой стрелки.
6. Какой поворот совпадает с центральной симметрией?
7. Сколько поворотов переводят квадрат в себя?
8. Докажите, что параллельный перенос переводит прямую в параллельную ей прямую или в себя.

### Ответы

1. $(6; 4)$.
2. $\\{5; -3\\}$.
3. $(x - 5)^2 + y^2 = 4$.
4. Нет, потому что каждая точка смещается на один и тот же ненулевой вектор.
5. $(0; 4)$.
6. Поворот на $180^\\circ$.
7. Четыре: на $90^\\circ$, $180^\\circ$, $270^\\circ$ и $360^\\circ$.
8. Все точки прямой сдвигаются на один вектор, поэтому образ — множество точек, отстоящих от прямой на этот вектор, то есть параллельная ей прямая, а при векторе, параллельном прямой, это сама прямая.`,
      },
      [
        q(t("The parallel translation by the vector {a; b} sends the point (x; y) to", "{a; b} վեկտորով զուգահեռ տեղափոխությունը (x; y) կետը տանում է", "Параллельный перенос на вектор {a; b} переводит точку (x; y) в"), [
          t("(x + a; y + b)", "(x + a; y + b)", "(x + a; y + b)"),
          t("(ax; by)", "(ax; by)", "(ax; by)"),
          t("(a - x; b - y)", "(a - x; b - y)", "(a - x; b - y)"),
        ], 0),
        q(t("A parallel translation by a non-zero vector has", "Ոչ զրոյական վեկտորով զուգահեռ տեղափոխությունն ունի", "Параллельный перенос на ненулевой вектор имеет"), [
          t("exactly one fixed point", "ճիշտ մեկ անշարժ կետ", "ровно одну неподвижную точку"),
          t("no fixed point", "անշարժ կետ չունի", "ни одной неподвижной точки"),
          t("a whole line of fixed points", "անշարժ կետերի ամբողջ ուղիղ", "целую прямую неподвижных точек"),
        ], 1),
        q(t("The rotation about O through an angle leaves fixed", "O-ի շուրջն անկյունով պտույտն անշարժ է թողնում", "Поворот вокруг O на угол оставляет неподвижным"), [
          t("every point of a line", "ուղղի ամեն կետ", "каждую точку прямой"),
          t("no point at all", "ոչ մի կետ", "ни одной точки"),
          t("the centre O", "O կենտրոնը", "центр O"),
        ], 2),
        q(t("The rotation about the origin through 90 degrees anticlockwise sends (x; y) to", "Սկզբնակետի շուրջը 90 աստիճան ժամսլաքի հակառակ պտույտը (x; y)-ը տանում է", "Поворот вокруг начала координат на 90 градусов против часовой стрелки переводит (x; y) в"), [
          t("(-y; x)", "(-y; x)", "(-y; x)"),
          t("(y; x)", "(y; x)", "(y; x)"),
          t("(-x; -y)", "(-x; -y)", "(-x; -y)"),
        ], 0),
        q(t("The number of rotations carrying a regular n-gon onto itself is", "Կանոնավոր n-անկյունն ինքն իր վրա տանող պտույտների թիվը", "Число поворотов, переводящих правильный n-угольник в себя, равно"), [
          t("two", "երկու է", "двум"),
          t("n", "n է", "n"),
          t("n - 2", "n - 2 է", "n - 2"),
        ], 1),
        q(t("The proof that a rotation is a motion uses the test for equal triangles by", "Ապացույցը, որ պտույտը շարժում է, օգտագործում է եռանկյունների հավասարության հայտանիշը", "Доказательство того, что поворот является движением, использует признак равенства треугольников по"), [
          t("three sides", "երեք կողմով", "трём сторонам"),
          t("a side and two angles", "կողմով և երկու անկյունով", "стороне и двум углам"),
          t("two sides and the angle between them", "երկու կողմով և նրանց միջև անկյունով", "двум сторонам и углу между ними"),
        ], 2),
      ],
    ),
    lesson(
      "polyhedra-prism",
      ["Polyhedra and the prism", "Բազմանիստեր և պրիզմա", "Многогранники и призма"],
      {
        en: ["Name the faces, edges and vertices of a polyhedron", "Describe a prism and its right and regular cases", "Compute the surface area and the volume of a prism"],
        hy: ["Անվանել բազմանիստի նիստերը, կողերը և գագաթները", "Նկարագրել պրիզման և նրա ուղիղ ու կանոնավոր դեպքերը", "Հաշվել պրիզմայի մակերևույթի մակերեսը և ծավալը"],
        ru: ["Называть грани, рёбра и вершины многогранника", "Описывать призму и её прямой и правильный случаи", "Вычислять площадь поверхности и объём призмы"],
      },
      {
        en: `## From the plane to space

Everything so far has happened in one plane. A **solid** occupies space. The simplest solids are bounded by flat pieces.

> A **polyhedron** is a solid whose surface consists of polygons. Those polygons are its **faces**, their sides are its **edges**, and their vertices are its **vertices**.

A cube has $6$ faces, $12$ edges and $8$ vertices. Euler noticed that for every convex polyhedron
$$V - E + F = 2,$$
and the cube gives $8 - 12 + 6 = 2$.

## The prism

> A **prism** has two equal parallel faces, the **bases**, and the other faces are parallelograms joining corresponding sides of the bases.

The parallelogram faces form the **lateral surface**. The distance between the planes of the bases is the **height**. A prism is **right** if its lateral edges are perpendicular to the bases, in which case the lateral faces are rectangles and the lateral edge equals the height. A right prism with a regular polygon as base is called **regular**.

| Prism | Base | Lateral faces |
|---|---|---|
| cuboid | rectangle | rectangles |
| cube | square | equal squares |
| regular triangular prism | equilateral triangle | equal rectangles |
| oblique prism | any polygon | parallelograms |

## Surface and volume

> For a right prism
> $$S_{\\text{lat}} = P h, \\qquad S_{\\text{full}} = P h + 2S_{\\text{base}}, \\qquad V = S_{\\text{base}}\\, h,$$
> where $P$ is the perimeter of the base.

The lateral surface of a right prism unrolls into a rectangle of width $P$ and height $h$, which is why the first formula holds. The volume formula holds for an oblique prism too.

**Example 1.** A cuboid measures $3$ by $4$ by $5$. Its volume is $60$, and its surface is $2(12 + 15 + 20) = 94$.

**Example 2.** A cube has edge $a$. Its surface is $6a^2$ and its volume $a^3$. For $a = 5$ these are $150$ and $125$.

**Example 3.** A regular triangular prism has base edge $6$ and height $10$. The base area is $\\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$, so
$$V = 90\\sqrt{3} \\approx 156, \\qquad S_{\\text{lat}} = 18\\cdot 10 = 180, \\qquad S_{\\text{full}} = 180 + 18\\sqrt{3} \\approx 211.$$

**Example 4.** A regular hexagonal prism has base edge $4$ and height $7$. The base area is $\\frac{3\\cdot 16\\sqrt{3}}{2} = 24\\sqrt{3}$, the volume is $168\\sqrt{3} \\approx 291$, and the lateral surface is $24\\cdot 7 = 168$.

**Example 5.** The diagonal of a cuboid with edges $a$, $b$, $c$ satisfies
$$d^2 = a^2 + b^2 + c^2,$$
which is the Pythagorean theorem applied twice. For $3$, $4$, $12$ the diagonal is $13$.

**Example 6.** A swimming pool is a cuboid $25$ m long, $10$ m wide and $2$ m deep. It holds $500$ cubic metres, that is $500\\,000$ litres, and tiling its bottom and four walls takes $250 + 2(50 + 20) = 390$ square metres of tile.

### Exercises

1. How many faces, edges and vertices has a cube?
2. Check Euler's formula for a triangular prism.
3. Find the volume of a cuboid with edges $2$, $6$ and $9$.
4. Find the full surface of a cube with edge $4$.
5. Find the diagonal of a cuboid with edges $6$, $8$ and $10$.
6. A regular triangular prism has base edge $4$ and height $5$. Find its volume.
7. A regular hexagonal prism has base edge $2$ and height $3$. Find its lateral surface.
8. A prism has base area $14$ and height $6$. Find its volume.

### Answers

1. Six faces, twelve edges, eight vertices.
2. It has $6$ vertices, $9$ edges and $5$ faces, and $6 - 9 + 5 = 2$.
3. $108$.
4. $6\\cdot 16 = 96$.
5. $\\sqrt{36 + 64 + 100} = \\sqrt{200} = 10\\sqrt{2}$.
6. The base area is $4\\sqrt{3}$, so $V = 20\\sqrt{3} \\approx 34{.}6$.
7. $P = 12$, so the lateral surface is $36$.
8. $84$.`,
        hy: `## Հարթությունից դեպի տարածություն

Մինչ այժմ ամեն ինչ կատարվում էր մեկ հարթությունում։ **Մարմինը** զբաղեցնում է տարածություն։ Ամենապարզ մարմինները սահմանափակված են հարթ կտորներով։

> **Բազմանիստը** մարմին է, որի մակերևույթը կազմված է բազմանկյուններից։ Այդ բազմանկյունները նրա **նիստերն** են, նրանց կողմերը՝ **կողերը**, իսկ նրանց գագաթները՝ **գագաթները**։

Խորանարդն ունի $6$ նիստ, $12$ կող և $8$ գագաթ։ Էյլերը նկատել է, որ ամեն ուռուցիկ բազմանիստի համար
$$V - E + F = 2,$$
և խորանարդը տալիս է $8 - 12 + 6 = 2$։

## Պրիզմա

> **Պրիզման** ունի երկու հավասար զուգահեռ նիստ՝ **հիմքերը**, իսկ մյուս նիստերը զուգահեռագծեր են, որոնք միացնում են հիմքերի համապատասխան կողմերը։

Զուգահեռագիծ նիստերը կազմում են **կողմնային մակերևույթը**։ Հիմքերի հարթությունների միջև հեռավորությունը **բարձրությունն** է։ Պրիզման **ուղիղ** է, եթե նրա կողմնային կողերն ուղղահայաց են հիմքերին, որի դեպքում կողմնային նիստերն ուղղանկյուններ են, և կողմնային կողը հավասար է բարձրությանը։ Հիմքում կանոնավոր բազմանկյուն ունեցող ուղիղ պրիզման կոչվում է **կանոնավոր**։

| Պրիզման | Հիմքը | Կողմնային նիստերը |
|---|---|---|
| ուղղանկյունանիստ | ուղղանկյուն | ուղղանկյուններ |
| խորանարդ | քառակուսի | հավասար քառակուսիներ |
| կանոնավոր եռանկյուն պրիզմա | հավասարակողմ եռանկյուն | հավասար ուղղանկյուններ |
| թեք պրիզմա | ցանկացած բազմանկյուն | զուգահեռագծեր |

## Մակերևույթ և ծավալ

> Ուղիղ պրիզմայի համար
> $$S_{\\text{lat}} = P h, \\qquad S = P h + 2S_0, \\qquad V = S_0\\, h,$$
> որտեղ $P$-ն հիմքի պարագիծն է, $S_0$-ն՝ հիմքի մակերեսը։

Ուղիղ պրիզմայի կողմնային մակերևույթը փռվում է $P$ լայնությամբ և $h$ բարձրությամբ ուղղանկյան, ահա թե ինչու է ճիշտ առաջին բանաձևը։ Ծավալի բանաձևը ճիշտ է նաև թեք պրիզմայի համար։

**Օրինակ 1.** Ուղղանկյունանիստի չափերն են $3$, $4$ և $5$։ Նրա ծավալը $60$ է, մակերևույթը՝ $2(12 + 15 + 20) = 94$։

**Օրինակ 2.** Խորանարդի կողը $a$ է։ Նրա մակերևույթը $6a^2$ է, ծավալը՝ $a^3$։ $a = 5$ դեպքում սրանք $150$ և $125$ են։

**Օրինակ 3.** Կանոնավոր եռանկյուն պրիզմայի հիմքի կողը $6$ է, բարձրությունը՝ $10$։ Հիմքի մակերեսն է $\\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$, ուստի
$$V = 90\\sqrt{3} \\approx 156, \\qquad S_{\\text{lat}} = 18\\cdot 10 = 180, \\qquad S = 180 + 18\\sqrt{3} \\approx 211.$$

**Օրինակ 4.** Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողը $4$ է, բարձրությունը՝ $7$։ Հիմքի մակերեսն է $\\frac{3\\cdot 16\\sqrt{3}}{2} = 24\\sqrt{3}$, ծավալը՝ $168\\sqrt{3} \\approx 291$, իսկ կողմնային մակերևույթը՝ $24\\cdot 7 = 168$։

**Օրինակ 5.** $a$, $b$, $c$ կողերով ուղղանկյունանիստի անկյունագիծը բավարարում է
$$d^2 = a^2 + b^2 + c^2,$$
ինչն երկու անգամ կիրառված Պյութագորասի թեորեմն է։ $3$, $4$, $12$ դեպքում անկյունագիծը $13$ է։

**Օրինակ 6.** Լողավազանն ուղղանկյունանիստ է՝ $25$ մ երկարությամբ, $10$ մ լայնությամբ և $2$ մ խորությամբ։ Նա պարունակում է $500$ խորանարդ մետր, այսինքն $500\\,000$ լիտր, իսկ հատակը և չորս պատերը սալիկապատելու համար պետք է $250 + 2(50 + 20) = 390$ քառակուսի մետր սալիկ։

### Վարժություններ

1. Քանի՞ նիստ, կող և գագաթ ունի խորանարդը։
2. Ստուգեք Էյլերի բանաձևն եռանկյուն պրիզմայի համար։
3. Գտեք $2$, $6$ և $9$ կողերով ուղղանկյունանիստի ծավալը։
4. Գտեք $4$ կողով խորանարդի լրիվ մակերևույթը։
5. Գտեք $6$, $8$ և $10$ կողերով ուղղանկյունանիստի անկյունագիծը։
6. Կանոնավոր եռանկյուն պրիզմայի հիմքի կողը $4$ է, բարձրությունը՝ $5$։ Գտեք նրա ծավալը։
7. Կանոնավոր վեցանկյուն պրիզմայի հիմքի կողը $2$ է, բարձրությունը՝ $3$։ Գտեք նրա կողմնային մակերևույթը։
8. Պրիզմայի հիմքի մակերեսը $14$ է, բարձրությունը՝ $6$։ Գտեք նրա ծավալը։

### Պատասխաններ

1. Վեց նիստ, տասներկու կող, ութ գագաթ։
2. Նա ունի $6$ գագաթ, $9$ կող և $5$ նիստ, և $6 - 9 + 5 = 2$։
3. $108$։
4. $6\\cdot 16 = 96$։
5. $\\sqrt{36 + 64 + 100} = \\sqrt{200} = 10\\sqrt{2}$։
6. Հիմքի մակերեսն է $4\\sqrt{3}$, ուստի $V = 20\\sqrt{3} \\approx 34{,}6$։
7. $P = 12$, ուստի կողմնային մակերևույթն է $36$։
8. $84$։`,
        ru: `## От плоскости к пространству

До сих пор всё происходило в одной плоскости. **Тело** занимает пространство. Простейшие тела ограничены плоскими кусками.

> **Многогранник** — это тело, поверхность которого состоит из многоугольников. Эти многоугольники — его **грани**, их стороны — **рёбра**, а их вершины — **вершины**.

У куба $6$ граней, $12$ рёбер и $8$ вершин. Эйлер заметил, что для каждого выпуклого многогранника
$$V - E + F = 2,$$
и куб даёт $8 - 12 + 6 = 2$.

## Призма

> У **призмы** есть две равные параллельные грани — **основания**, а остальные грани суть параллелограммы, соединяющие соответственные стороны оснований.

Грани-параллелограммы образуют **боковую поверхность**. Расстояние между плоскостями оснований — **высота**. Призма называется **прямой**, если её боковые рёбра перпендикулярны основаниям; тогда боковые грани — прямоугольники, а боковое ребро равно высоте. Прямая призма с правильным многоугольником в основании называется **правильной**.

| Призма | Основание | Боковые грани |
|---|---|---|
| прямоугольный параллелепипед | прямоугольник | прямоугольники |
| куб | квадрат | равные квадраты |
| правильная треугольная призма | равносторонний треугольник | равные прямоугольники |
| наклонная призма | любой многоугольник | параллелограммы |

## Поверхность и объём

> Для прямой призмы
> $$S_{\\text{lat}} = P h, \\qquad S = P h + 2S_0, \\qquad V = S_0\\, h,$$
> где $P$ — периметр основания, а $S_0$ — его площадь.

Боковая поверхность прямой призмы развёртывается в прямоугольник шириной $P$ и высотой $h$, поэтому первая формула верна. Формула объёма верна и для наклонной призмы.

**Пример 1.** Прямоугольный параллелепипед имеет измерения $3$, $4$ и $5$. Его объём равен $60$, а поверхность $2(12 + 15 + 20) = 94$.

**Пример 2.** У куба ребро $a$. Его поверхность равна $6a^2$, объём $a^3$. При $a = 5$ это $150$ и $125$.

**Пример 3.** У правильной треугольной призмы ребро основания $6$, высота $10$. Площадь основания равна $\\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$, поэтому
$$V = 90\\sqrt{3} \\approx 156, \\qquad S_{\\text{lat}} = 18\\cdot 10 = 180, \\qquad S = 180 + 18\\sqrt{3} \\approx 211.$$

**Пример 4.** У правильной шестиугольной призмы ребро основания $4$, высота $7$. Площадь основания равна $\\frac{3\\cdot 16\\sqrt{3}}{2} = 24\\sqrt{3}$, объём $168\\sqrt{3} \\approx 291$, а боковая поверхность $24\\cdot 7 = 168$.

**Пример 5.** Диагональ прямоугольного параллелепипеда с рёбрами $a$, $b$, $c$ удовлетворяет
$$d^2 = a^2 + b^2 + c^2,$$
а это дважды применённая теорема Пифагора. При $3$, $4$, $12$ диагональ равна $13$.

**Пример 6.** Бассейн — прямоугольный параллелепипед длиной $25$ м, шириной $10$ м и глубиной $2$ м. Он вмещает $500$ кубических метров, то есть $500\\,000$ литров, а на облицовку дна и четырёх стен нужно $250 + 2(50 + 20) = 390$ квадратных метров плитки.

### Упражнения

1. Сколько граней, рёбер и вершин у куба?
2. Проверьте формулу Эйлера для треугольной призмы.
3. Найдите объём прямоугольного параллелепипеда с рёбрами $2$, $6$ и $9$.
4. Найдите полную поверхность куба с ребром $4$.
5. Найдите диагональ прямоугольного параллелепипеда с рёбрами $6$, $8$ и $10$.
6. У правильной треугольной призмы ребро основания $4$, высота $5$. Найдите её объём.
7. У правильной шестиугольной призмы ребро основания $2$, высота $3$. Найдите её боковую поверхность.
8. У призмы площадь основания $14$, высота $6$. Найдите её объём.

### Ответы

1. Шесть граней, двенадцать рёбер, восемь вершин.
2. У неё $6$ вершин, $9$ рёбер и $5$ граней, и $6 - 9 + 5 = 2$.
3. $108$.
4. $6\\cdot 16 = 96$.
5. $\\sqrt{36 + 64 + 100} = \\sqrt{200} = 10\\sqrt{2}$.
6. Площадь основания равна $4\\sqrt{3}$, поэтому $V = 20\\sqrt{3} \\approx 34{,}6$.
7. $P = 12$, поэтому боковая поверхность равна $36$.
8. $84$.`,
      },
      [
        q(t("The faces of a polyhedron are", "Բազմանիստի նիստերը", "Грани многогранника —"), [
          t("the polygons that make up its surface", "նրա մակերևույթը կազմող բազմանկյունները", "многоугольники, составляющие его поверхность"),
          t("the sides of those polygons", "այդ բազմանկյունների կողմերը", "стороны этих многоугольников"),
          t("the vertices of those polygons", "այդ բազմանկյունների գագաթները", "вершины этих многоугольников"),
        ], 0),
        q(t("A cube has", "Խորանարդն ունի", "У куба"), [
          t("8 faces and 6 vertices", "8 նիստ և 6 գագաթ", "8 граней и 6 вершин"),
          t("6 faces, 12 edges and 8 vertices", "6 նիստ, 12 կող և 8 գագաթ", "6 граней, 12 рёбер и 8 вершин"),
          t("12 faces and 8 edges", "12 նիստ և 8 կող", "12 граней и 8 рёбер"),
        ], 1),
        q(t("A prism is called right when its lateral edges are", "Պրիզման կոչվում է ուղիղ, երբ նրա կողմնային կողերը", "Призма называется прямой, когда её боковые рёбра"), [
          t("equal to the base edges", "հավասար են հիմքի կողերին", "равны рёбрам основания"),
          t("parallel to the bases", "զուգահեռ են հիմքերին", "параллельны основаниям"),
          t("perpendicular to the bases", "ուղղահայաց են հիմքերին", "перпендикулярны основаниям"),
        ], 2),
        q(t("The volume of a prism equals", "Պրիզմայի ծավալը հավասար է", "Объём призмы равен"), [
          t("the area of the base times the height", "հիմքի մակերեսը բազմապատկած բարձրությամբ", "площади основания, умноженной на высоту"),
          t("the perimeter of the base times the height", "հիմքի պարագիծը բազմապատկած բարձրությամբ", "периметру основания, умноженному на высоту"),
          t("one third of the area of the base times the height", "հիմքի մակերեսի մեկ երրորդը բազմապատկած բարձրությամբ", "одной третьей площади основания, умноженной на высоту"),
        ], 0),
        q(t("The diagonal of a cuboid with edges a, b, c equals the square root of", "a, b, c կողերով ուղղանկյունանիստի անկյունագիծը հավասար է քառակուսի արմատին", "Диагональ прямоугольного параллелепипеда с рёбрами a, b, c равна квадратному корню из"), [
          t("a + b + c", "a + b + c-ի", "a + b + c"),
          t("a² + b² + c²", "a² + b² + c²-ի", "a² + b² + c²"),
          t("a² + b² - c²", "a² + b² - c²-ի", "a² + b² - c²"),
        ], 1),
        q(t("Euler's formula for a convex polyhedron says that vertices minus edges plus faces equals", "Ուռուցիկ բազմանիստի համար Էյլերի բանաձևն ասում է, որ գագաթներ հանած կողեր գումարած նիստեր հավասար է", "Формула Эйлера для выпуклого многогранника говорит, что вершины минус рёбра плюс грани равно"), [
          t("zero", "զրոյի", "нулю"),
          t("one", "մեկի", "единице"),
          t("two", "երկուսի", "двум"),
        ], 2),
      ],
    ),
    lesson(
      "pyramid",
      ["The pyramid", "Բուրգը", "Пирамида"],
      {
        en: ["Describe a pyramid, its apex, lateral edges and apothem", "Compute the lateral and full surface of a regular pyramid", "Compute the volume of a pyramid"],
        hy: ["Նկարագրել բուրգը, նրա գագաթը, կողմնային կողերը և ապոթեմը", "Հաշվել կանոնավոր բուրգի կողմնային և լրիվ մակերևույթը", "Հաշվել բուրգի ծավալը"],
        ru: ["Описывать пирамиду, её вершину, боковые рёбра и апофему", "Вычислять боковую и полную поверхность правильной пирамиды", "Вычислять объём пирамиды"],
      },
      {
        en: `## What a pyramid is

> A **pyramid** is a polyhedron with one face a polygon, the **base**, and the other faces triangles with a common vertex, the **apex**.

The triangles are the **lateral faces**, their common sides are the **lateral edges**, and the perpendicular from the apex to the plane of the base is the **height**. A pyramid with an $n$-gon as base has $n + 1$ faces, $2n$ edges and $n + 1$ vertices.

> A pyramid is **regular** if its base is a regular polygon and its apex lies above the centre of the base.

In a regular pyramid all lateral edges are equal and all lateral faces are equal isosceles triangles. The height of such a face, drawn from the apex, is the **apothem of the pyramid**, written $l$.

## Surface

Each of the $n$ lateral faces has base $a$ and height $l$, so their total area is $\\frac{1}{2}nal$:

> $$S_{\\text{lat}} = \\tfrac{1}{2}P l, \\qquad S = \\tfrac{1}{2}P l + S_0,$$
> where $P$ is the perimeter and $S_0$ the area of the base.

Compare with the right prism, where the lateral surface was $Ph$ with no one half. The pyramid gains the half because each face is a triangle rather than a rectangle.

## Volume

> $$V = \\tfrac{1}{3}S_0 h.$$

Three equal pyramids fill a prism of the same base and height, which is why the third appears. A cube cut from its centre into six pyramids on its six faces shows the same factor in another way.

| Solid | Volume |
|---|---|
| prism | $S_0 h$ |
| pyramid | $\\tfrac{1}{3}S_0 h$ |

**Example 1.** A regular quadrilateral pyramid has base edge $6$ and height $4$. The apothem of the base is $3$, so by the Pythagorean theorem the apothem of the pyramid is $l = \\sqrt{16 + 9} = 5$. Then
$$S_{\\text{lat}} = \\tfrac{1}{2}\\cdot 24\\cdot 5 = 60, \\qquad S = 60 + 36 = 96, \\qquad V = \\tfrac{1}{3}\\cdot 36\\cdot 4 = 48.$$

**Example 2.** The lateral edge of the same pyramid is found from the half diagonal of the base, $3\\sqrt{2}$:
$$b = \\sqrt{16 + 18} = \\sqrt{34} \\approx 5{.}83.$$
The lateral edge is always longer than the apothem, since it reaches a vertex rather than the midpoint of a side.

**Example 3.** A regular triangular pyramid has base edge $6$ and apothem $4$. The base apothem is $\\sqrt{3}$, so the height is $\\sqrt{16 - 3} = \\sqrt{13}$. The lateral surface is $\\tfrac{1}{2}\\cdot 18\\cdot 4 = 36$ and the base area is $9\\sqrt{3}$.

**Example 4.** A pyramid has base area $15$ and height $8$. Its volume is $40$, a third of the prism on the same base.

**Example 5.** The Great Pyramid of Giza is a regular quadrilateral pyramid with base edge about $230$ m and height about $147$ m. Its volume is about
$$\\tfrac{1}{3}\\cdot 230^2\\cdot 147 \\approx 2{.}6 \\text{ million cubic metres}.$$

**Example 6.** If the height of a pyramid is doubled, the volume doubles. If instead all its linear sizes are doubled, the base area grows four times and the volume eight times, because volume scales as the cube of the size.

### Exercises

1. How many faces has a pyramid with a hexagon as base?
2. Find the volume of a pyramid with base area $21$ and height $5$.
3. A regular quadrilateral pyramid has base edge $8$ and height $3$. Find its apothem.
4. For the same pyramid find the lateral surface.
5. For the same pyramid find the volume.
6. A regular quadrilateral pyramid has base edge $10$ and apothem $13$. Find its height.
7. Which is longer in a regular pyramid, the lateral edge or the apothem?
8. All the linear sizes of a pyramid are tripled. How many times does the volume grow?

### Answers

1. Seven, the base and six lateral faces.
2. $35$.
3. The base apothem is $4$, so $l = \\sqrt{9 + 16} = 5$.
4. $\\tfrac{1}{2}\\cdot 32\\cdot 5 = 80$.
5. $\\tfrac{1}{3}\\cdot 64\\cdot 3 = 64$.
6. $h = \\sqrt{169 - 25} = 12$.
7. The lateral edge, because it reaches a vertex of the base.
8. Twenty-seven times.`,
        hy: `## Ինչ է բուրգը

> **Բուրգը** բազմանիստ է, որի մի նիստը բազմանկյուն է՝ **հիմքը**, իսկ մյուս նիստերն եռանկյուններ են ընդհանուր գագաթով՝ **գագաթը**։

Եռանկյունները **կողմնային նիստերն** են, նրանց ընդհանուր կողմերը՝ **կողմնային կողերը**, իսկ գագաթից հիմքի հարթությանը տարված ուղղահայացը՝ **բարձրությունը**։ Հիմքում $n$-անկյուն ունեցող բուրգն ունի $n + 1$ նիստ, $2n$ կող և $n + 1$ գագաթ։

> Բուրգը **կանոնավոր** է, եթե նրա հիմքը կանոնավոր բազմանկյուն է, և գագաթը գտնվում է հիմքի կենտրոնի վերևում։

Կանոնավոր բուրգում բոլոր կողմնային կողերը հավասար են, և բոլոր կողմնային նիստերը հավասար հավասարասրուն եռանկյուններ են։ Այդպիսի նիստի բարձրությունը, տարված գագաթից, **բուրգի ապոթեմն** է՝ $l$։

## Մակերևույթ

$n$ կողմնային նիստերից ամեն մեկն ունի $a$ հիմք և $l$ բարձրություն, ուստի նրանց ընդհանուր մակերեսն է $\\frac{1}{2}nal$՝

> $$S_{\\text{lat}} = \\tfrac{1}{2}P l, \\qquad S = \\tfrac{1}{2}P l + S_0,$$
> որտեղ $P$-ն պարագիծն է, $S_0$-ն՝ հիմքի մակերեսը։

Համեմատեք ուղիղ պրիզմայի հետ, որտեղ կողմնային մակերևույթը $Ph$ էր՝ առանց կեսի։ Բուրգը ստանում է կեսը, քանի որ ամեն նիստ եռանկյուն է, ոչ թե ուղղանկյուն։

## Ծավալ

> $$V = \\tfrac{1}{3}S_0 h.$$

Երեք հավասար բուրգ լցնում են նույն հիմքով և բարձրությամբ պրիզման, ահա թե ինչու է հայտնվում երրորդը։ Խորանարդն իր կենտրոնից վեց նիստերի վրա վեց բուրգի բաժանելը ցույց է տալիս նույն գործակիցն այլ ձևով։

| Մարմինը | Ծավալը |
|---|---|
| պրիզմա | $S_0 h$ |
| բուրգ | $\\tfrac{1}{3}S_0 h$ |

**Օրինակ 1.** Կանոնավոր քառանկյուն բուրգի հիմքի կողը $6$ է, բարձրությունը՝ $4$։ Հիմքի ապոթեմն է $3$, ուստի Պյութագորասի թեորեմով բուրգի ապոթեմն է $l = \\sqrt{16 + 9} = 5$։ Այդ դեպքում
$$S_{\\text{lat}} = \\tfrac{1}{2}\\cdot 24\\cdot 5 = 60, \\qquad S = 60 + 36 = 96, \\qquad V = \\tfrac{1}{3}\\cdot 36\\cdot 4 = 48.$$

**Օրինակ 2.** Նույն բուրգի կողմնային կողը գտնվում է հիմքի անկյունագծի կեսից՝ $3\\sqrt{2}$՝
$$b = \\sqrt{16 + 18} = \\sqrt{34} \\approx 5{,}83.$$
Կողմնային կողը միշտ ավելի երկար է, քան ապոթեմը, քանի որ նա հասնում է գագաթին, ոչ թե կողմի միջնակետին։

**Օրինակ 3.** Կանոնավոր եռանկյուն բուրգի հիմքի կողը $6$ է, ապոթեմը՝ $4$։ Հիմքի ապոթեմն է $\\sqrt{3}$, ուստի բարձրությունն է $\\sqrt{16 - 3} = \\sqrt{13}$։ Կողմնային մակերևույթն է $\\tfrac{1}{2}\\cdot 18\\cdot 4 = 36$, հիմքի մակերեսը՝ $9\\sqrt{3}$։

**Օրինակ 4.** Բուրգի հիմքի մակերեսը $15$ է, բարձրությունը՝ $8$։ Նրա ծավալը $40$ է՝ նույն հիմքի վրա պրիզմայի մեկ երրորդը։

**Օրինակ 5.** Գիզայի Մեծ բուրգը կանոնավոր քառանկյուն բուրգ է՝ մոտ $230$ մ հիմքի կողով և մոտ $147$ մ բարձրությամբ։ Նրա ծավալը մոտ
$$\\tfrac{1}{3}\\cdot 230^2\\cdot 147 \\approx 2{,}6$$
միլիոն խորանարդ մետր է։

**Օրինակ 6.** Եթե բուրգի բարձրությունը կրկնապատկվի, ծավալը կրկնապատկվում է։ Եթե փոխարենը նրա բոլոր գծային չափերը կրկնապատկվեն, հիմքի մակերեսն աճում է չորս անգամ, իսկ ծավալը՝ ութ, քանի որ ծավալն աճում է չափի խորանարդի պես։

### Վարժություններ

1. Քանի՞ նիստ ունի հիմքում վեցանկյուն ունեցող բուրգը։
2. Գտեք $21$ հիմքի մակերեսով և $5$ բարձրությամբ բուրգի ծավալը։
3. Կանոնավոր քառանկյուն բուրգի հիմքի կողը $8$ է, բարձրությունը՝ $3$։ Գտեք նրա ապոթեմը։
4. Նույն բուրգի համար գտեք կողմնային մակերևույթը։
5. Նույն բուրգի համար գտեք ծավալը։
6. Կանոնավոր քառանկյուն բուրգի հիմքի կողը $10$ է, ապոթեմը՝ $13$։ Գտեք նրա բարձրությունը։
7. Կանոնավոր բուրգում ո՞րն է ավելի երկար՝ կողմնային կողը, թե ապոթեմը։
8. Բուրգի բոլոր գծային չափերն եռապատկվում են։ Քանի՞ անգամ աճում է ծավալը։

### Պատասխաններ

1. Յոթ՝ հիմքը և վեց կողմնային նիստ։
2. $35$։
3. Հիմքի ապոթեմն է $4$, ուստի $l = \\sqrt{9 + 16} = 5$։
4. $\\tfrac{1}{2}\\cdot 32\\cdot 5 = 80$։
5. $\\tfrac{1}{3}\\cdot 64\\cdot 3 = 64$։
6. $h = \\sqrt{169 - 25} = 12$։
7. Կողմնային կողը, քանի որ նա հասնում է հիմքի գագաթին։
8. Քսանյոթ անգամ։`,
        ru: `## Что такое пирамида

> **Пирамида** — это многогранник, у которого одна грань — многоугольник, **основание**, а остальные грани — треугольники с общей вершиной, которая называется **вершиной пирамиды**.

Треугольники — это **боковые грани**, их общие стороны — **боковые рёбра**, а перпендикуляр из вершины к плоскости основания — **высота**. Пирамида с $n$-угольником в основании имеет $n + 1$ грань, $2n$ рёбер и $n + 1$ вершину.

> Пирамида называется **правильной**, если её основание — правильный многоугольник, а вершина лежит над центром основания.

В правильной пирамиде все боковые рёбра равны, и все боковые грани — равные равнобедренные треугольники. Высота такой грани, проведённая из вершины, называется **апофемой пирамиды** и обозначается $l$.

## Поверхность

Каждая из $n$ боковых граней имеет основание $a$ и высоту $l$, поэтому их общая площадь равна $\\frac{1}{2}nal$:

> $$S_{\\text{lat}} = \\tfrac{1}{2}P l, \\qquad S = \\tfrac{1}{2}P l + S_0,$$
> где $P$ — периметр, а $S_0$ — площадь основания.

Сравните с прямой призмой, где боковая поверхность равнялась $Ph$ без одной второй. У пирамиды появляется половина, потому что каждая грань — треугольник, а не прямоугольник.

## Объём

> $$V = \\tfrac{1}{3}S_0 h.$$

Три равные пирамиды заполняют призму с тем же основанием и высотой, поэтому и возникает третья часть. Куб, разрезанный из своего центра на шесть пирамид по шести граням, показывает тот же множитель иначе.

| Тело | Объём |
|---|---|
| призма | $S_0 h$ |
| пирамида | $\\tfrac{1}{3}S_0 h$ |

**Пример 1.** У правильной четырёхугольной пирамиды ребро основания $6$, высота $4$. Апофема основания равна $3$, поэтому по теореме Пифагора апофема пирамиды равна $l = \\sqrt{16 + 9} = 5$. Тогда
$$S_{\\text{lat}} = \\tfrac{1}{2}\\cdot 24\\cdot 5 = 60, \\qquad S = 60 + 36 = 96, \\qquad V = \\tfrac{1}{3}\\cdot 36\\cdot 4 = 48.$$

**Пример 2.** Боковое ребро той же пирамиды находится из половины диагонали основания, равной $3\\sqrt{2}$:
$$b = \\sqrt{16 + 18} = \\sqrt{34} \\approx 5{,}83.$$
Боковое ребро всегда длиннее апофемы, так как оно доходит до вершины, а не до середины стороны.

**Пример 3.** У правильной треугольной пирамиды ребро основания $6$, апофема $4$. Апофема основания равна $\\sqrt{3}$, поэтому высота равна $\\sqrt{16 - 3} = \\sqrt{13}$. Боковая поверхность равна $\\tfrac{1}{2}\\cdot 18\\cdot 4 = 36$, а площадь основания $9\\sqrt{3}$.

**Пример 4.** У пирамиды площадь основания $15$, высота $8$. Её объём равен $40$ — треть призмы на том же основании.

**Пример 5.** Великая пирамида в Гизе — правильная четырёхугольная пирамида с ребром основания около $230$ м и высотой около $147$ м. Её объём составляет около
$$\\tfrac{1}{3}\\cdot 230^2\\cdot 147 \\approx 2{,}6$$
миллиона кубических метров.

**Пример 6.** Если высоту пирамиды удвоить, объём удвоится. Если же удвоить все её линейные размеры, площадь основания вырастет в четыре раза, а объём в восемь, потому что объём растёт как куб размера.

### Упражнения

1. Сколько граней у пирамиды с шестиугольником в основании?
2. Найдите объём пирамиды с площадью основания $21$ и высотой $5$.
3. У правильной четырёхугольной пирамиды ребро основания $8$, высота $3$. Найдите её апофему.
4. Для той же пирамиды найдите боковую поверхность.
5. Для той же пирамиды найдите объём.
6. У правильной четырёхугольной пирамиды ребро основания $10$, апофема $13$. Найдите её высоту.
7. Что длиннее в правильной пирамиде: боковое ребро или апофема?
8. Все линейные размеры пирамиды увеличили втрое. Во сколько раз вырос объём?

### Ответы

1. Семь: основание и шесть боковых граней.
2. $35$.
3. Апофема основания равна $4$, поэтому $l = \\sqrt{9 + 16} = 5$.
4. $\\tfrac{1}{2}\\cdot 32\\cdot 5 = 80$.
5. $\\tfrac{1}{3}\\cdot 64\\cdot 3 = 64$.
6. $h = \\sqrt{169 - 25} = 12$.
7. Боковое ребро, потому что оно доходит до вершины основания.
8. В двадцать семь раз.`,
      },
      [
        q(t("The lateral faces of a pyramid are", "Բուրգի կողմնային նիստերը", "Боковые грани пирамиды —"), [
          t("triangles with a common vertex", "ընդհանուր գագաթով եռանկյուններ են", "треугольники с общей вершиной"),
          t("parallelograms", "զուգահեռագծեր են", "параллелограммы"),
          t("equal polygons", "հավասար բազմանկյուններ են", "равные многоугольники"),
        ], 0),
        q(t("A pyramid is regular when its base is regular and its apex lies", "Բուրգը կանոնավոր է, երբ նրա հիմքը կանոնավոր է, և գագաթը գտնվում է", "Пирамида правильная, когда её основание правильное, а вершина лежит"), [
          t("above a vertex of the base", "հիմքի գագաթի վերևում", "над вершиной основания"),
          t("above the centre of the base", "հիմքի կենտրոնի վերևում", "над центром основания"),
          t("above the midpoint of a side of the base", "հիմքի կողմի միջնակետի վերևում", "над серединой стороны основания"),
        ], 1),
        q(t("The volume of a pyramid equals", "Բուրգի ծավալը հավասար է", "Объём пирамиды равен"), [
          t("the area of the base times the height", "հիմքի մակերեսը բազմապատկած բարձրությամբ", "площади основания, умноженной на высоту"),
          t("half the area of the base times the height", "հիմքի մակերեսի կեսը բազմապատկած բարձրությամբ", "половине площади основания, умноженной на высоту"),
          t("one third of the area of the base times the height", "հիմքի մակերեսի մեկ երրորդը բազմապատկած բարձրությամբ", "одной третьей площади основания, умноженной на высоту"),
        ], 2),
        q(t("The apothem of a regular pyramid is", "Կանոնավոր բուրգի ապոթեմը", "Апофема правильной пирамиды —"), [
          t("the height of a lateral face drawn from the apex", "գագաթից տարված կողմնային նիստի բարձրությունը", "высота боковой грани, проведённая из вершины"),
          t("a lateral edge", "կողմնային կողը", "боковое ребро"),
          t("the height of the pyramid", "բուրգի բարձրությունը", "высота пирамиды"),
        ], 0),
        q(t("The lateral surface of a regular pyramid equals", "Կանոնավոր բուրգի կողմնային մակերևույթը հավասար է", "Боковая поверхность правильной пирамиды равна"), [
          t("the perimeter of the base times the apothem", "հիմքի պարագիծը բազմապատկած ապոթեմով", "периметру основания, умноженному на апофему"),
          t("half the perimeter of the base times the apothem", "հիմքի պարագծի կեսը բազմապատկած ապոթեմով", "половине периметра основания, умноженной на апофему"),
          t("the area of the base times the apothem", "հիմքի մակերեսը բազմապատկած ապոթեմով", "площади основания, умноженной на апофему"),
        ], 1),
        q(t("If all the linear sizes of a pyramid are doubled, its volume grows", "Եթե բուրգի բոլոր գծային չափերը կրկնապատկվեն, նրա ծավալն աճում է", "Если все линейные размеры пирамиды удвоить, её объём вырастет"), [
          t("two times", "երկու անգամ", "в два раза"),
          t("four times", "չորս անգամ", "в четыре раза"),
          t("eight times", "ութ անգամ", "в восемь раз"),
        ], 2),
      ],
    ),
    lesson(
      "cylinder-cone",
      ["The cylinder and the cone", "Գլանը և կոնը", "Цилиндр и конус"],
      {
        en: ["Describe a cylinder and a cone as solids of revolution", "Compute the lateral and full surface of each", "Compute the volume of each"],
        hy: ["Նկարագրել գլանը և կոնն որպես պտտման մարմիններ", "Հաշվել նրանցից ամեն մեկի կողմնային և լրիվ մակերևույթը", "Հաշվել նրանցից ամեն մեկի ծավալը"],
        ru: ["Описывать цилиндр и конус как тела вращения", "Вычислять боковую и полную поверхность каждого", "Вычислять объём каждого"],
      },
      {
        en: `## Solids of revolution

Spin a flat figure about a line in its plane and it sweeps out a solid. Such a solid is a **solid of revolution**, and its horizontal cross sections are discs.

| Spinning figure | Axis | Solid |
|---|---|---|
| rectangle | one of its sides | cylinder |
| right triangle | one of its legs | cone |
| half disc | its diameter | ball |

## The cylinder

A rectangle with sides $R$ and $h$ spun about the side $h$ gives a **cylinder** of base radius $R$ and height $h$. Its two bases are equal discs, and the curved part is the **lateral surface**.

Cut the lateral surface along a vertical line and unroll it: you get a rectangle of width $2\\pi R$ and height $h$. Hence

> $$S_{\\text{lat}} = 2\\pi R h, \\qquad S = 2\\pi R h + 2\\pi R^2 = 2\\pi R(h + R), \\qquad V = \\pi R^2 h.$$

The volume formula is the prism formula $S_0 h$ with a disc as base, which is no accident: a cylinder is the limit of prisms whose bases are regular polygons.

**Example 1.** A cylinder has $R = 3$ and $h = 10$. Then
$$V = 90\\pi \\approx 283, \\qquad S_{\\text{lat}} = 60\\pi, \\qquad S = 60\\pi + 18\\pi = 78\\pi \\approx 245.$$

**Example 2.** A tin of radius $4$ cm and height $12$ cm holds $192\\pi \\approx 603$ cubic centimetres, about $0{.}6$ litres.

## The cone

A right triangle with legs $R$ and $h$ spun about the leg $h$ gives a **cone** of base radius $R$, height $h$ and **slant height** $l$, where

> $$l^2 = R^2 + h^2.$$

Unrolling the lateral surface gives a circular sector of radius $l$ whose arc is the base circle, of length $2\\pi R$. The sector's area is half its radius times its arc, so

> $$S_{\\text{lat}} = \\pi R l, \\qquad S = \\pi R l + \\pi R^2 = \\pi R(l + R), \\qquad V = \\tfrac{1}{3}\\pi R^2 h.$$

Again the volume is the pyramid formula with a disc as base, with the same one third.

**Example 3.** A cone has $R = 6$ and $h = 8$. Then $l = 10$, and
$$V = \\tfrac{1}{3}\\cdot 36\\pi\\cdot 8 = 96\\pi \\approx 302, \\qquad S_{\\text{lat}} = 60\\pi, \\qquad S = 60\\pi + 36\\pi = 96\\pi.$$
The numbers for the volume and the surface agree here by coincidence, in different units.

**Example 4.** A cone has $R = 5$ and $l = 13$. Then $h = \\sqrt{169 - 25} = 12$ and $V = \\tfrac{1}{3}\\cdot 25\\pi\\cdot 12 = 100\\pi$.

**Example 5.** A cylinder and a cone have the same base and the same height. The cone holds a third as much, so filling the cone three times fills the cylinder. A sand timer and a paper cup both rely on that fact.

**Example 6.** A conical heap of sand has base diameter $4$ m and height $1{.}5$ m. Its volume is $\\tfrac{1}{3}\\pi\\cdot 4\\cdot 1{.}5 = 2\\pi \\approx 6{.}3$ cubic metres, so about ten tonnes of dry sand.

### Exercises

1. Which figure spun about which line gives a cylinder?
2. Find the volume of a cylinder with $R = 2$ and $h = 7$.
3. Find the lateral surface of a cylinder with $R = 5$ and $h = 4$.
4. Find the full surface of a cylinder with $R = 3$ and $h = 3$.
5. Find the slant height of a cone with $R = 9$ and $h = 12$.
6. Find the volume of a cone with $R = 3$ and $h = 10$.
7. Find the lateral surface of a cone with $R = 7$ and $l = 10$.
8. A cylinder and a cone have the same base and height. What is the ratio of their volumes?

### Answers

1. A rectangle spun about one of its sides.
2. $28\\pi$.
3. $40\\pi$.
4. $18\\pi + 18\\pi = 36\\pi$.
5. $l = \\sqrt{81 + 144} = 15$.
6. $30\\pi$.
7. $70\\pi$.
8. Three to one.`,
        hy: `## Պտտման մարմիններ

Պտտեցրեք հարթ պատկերն իր հարթությունում գտնվող ուղղի շուրջը, և նա կգծի մարմին։ Այդպիսի մարմինը **պտտման մարմին** է, և նրա հորիզոնական հատույթները շրջաններ են։

| Պտտվող պատկերը | Առանցքը | Մարմինը |
|---|---|---|
| ուղղանկյուն | նրա կողմերից մեկը | գլան |
| ուղղանկյուն եռանկյուն | նրա էջերից մեկը | կոն |
| կիսաշրջան | նրա տրամագիծը | գունդ |

## Գլանը

$R$ և $h$ կողմերով ուղղանկյունը $h$ կողմի շուրջը պտտելով ստանում ենք **գլան** $R$ հիմքի շառավղով և $h$ բարձրությամբ։ Նրա երկու հիմքերը հավասար շրջաններ են, իսկ կոր մասը **կողմնային մակերևույթն** է։

Կողմնային մակերևույթը կտրեք ուղղաձիգ գծով և փռեք. ստանում եք $2\\pi R$ լայնությամբ և $h$ բարձրությամբ ուղղանկյուն։ Հետևաբար

> $$S_{\\text{lat}} = 2\\pi R h, \\qquad S = 2\\pi R h + 2\\pi R^2 = 2\\pi R(h + R), \\qquad V = \\pi R^2 h.$$

Ծավալի բանաձևը պրիզմայի $S_0 h$ բանաձևն է՝ հիմքում շրջան, և սա պատահական չէ. գլանը կանոնավոր բազմանկյուն հիմքերով պրիզմաների սահմանն է։

**Օրինակ 1.** Գլանն ունի $R = 3$ և $h = 10$։ Այդ դեպքում
$$V = 90\\pi \\approx 283, \\qquad S_{\\text{lat}} = 60\\pi, \\qquad S = 60\\pi + 18\\pi = 78\\pi \\approx 245.$$

**Օրինակ 2.** $4$ սմ շառավղով և $12$ սմ բարձրությամբ տարան պարունակում է $192\\pi \\approx 603$ խորանարդ սանտիմետր՝ մոտ $0{,}6$ լիտր։

## Կոնը

$R$ և $h$ էջերով ուղղանկյուն եռանկյունը $h$ էջի շուրջը պտտելով ստանում ենք **կոն** $R$ հիմքի շառավղով, $h$ բարձրությամբ և $l$ **կազմողով**, որտեղ

> $$l^2 = R^2 + h^2.$$

Կողմնային մակերևույթը փռելով ստանում ենք $l$ շառավղով շրջանային սեկտոր, որի աղեղը հիմքի շրջանագիծն է՝ $2\\pi R$ երկարությամբ։ Սեկտորի մակերեսը նրա շառավղի կեսն է բազմապատկած աղեղով, ուստի

> $$S_{\\text{lat}} = \\pi R l, \\qquad S = \\pi R l + \\pi R^2 = \\pi R(l + R), \\qquad V = \\tfrac{1}{3}\\pi R^2 h.$$

Նորից ծավալը բուրգի բանաձևն է՝ հիմքում շրջան, նույն մեկ երրորդով։

**Օրինակ 3.** Կոնն ունի $R = 6$ և $h = 8$։ Այդ դեպքում $l = 10$, և
$$V = \\tfrac{1}{3}\\cdot 36\\pi\\cdot 8 = 96\\pi \\approx 302, \\qquad S_{\\text{lat}} = 60\\pi, \\qquad S = 60\\pi + 36\\pi = 96\\pi.$$
Ծավալի և մակերևույթի թվերն այստեղ համընկնում են պատահականորեն՝ տարբեր միավորներով։

**Օրինակ 4.** Կոնն ունի $R = 5$ և $l = 13$։ Այդ դեպքում $h = \\sqrt{169 - 25} = 12$ և $V = \\tfrac{1}{3}\\cdot 25\\pi\\cdot 12 = 100\\pi$։

**Օրինակ 5.** Գլանը և կոնն ունեն նույն հիմքը և նույն բարձրությունը։ Կոնը պարունակում է երեք անգամ քիչ, ուստի կոնն երեք անգամ լցնելով լցվում է գլանը։ Ավազի ժամացույցը և թղթե բաժակն երկուսն էլ հենվում են այս փաստի վրա։

**Օրինակ 6.** Կոնաձև ավազակույտի հիմքի տրամագիծը $4$ մ է, բարձրությունը՝ $1{,}5$ մ։ Նրա ծավալն է $\\tfrac{1}{3}\\pi\\cdot 4\\cdot 1{,}5 = 2\\pi \\approx 6{,}3$ խորանարդ մետր, այսինքն մոտ տասը տոննա չոր ավազ։

### Վարժություններ

1. Ո՞ր պատկերն ո՞ր ուղղի շուրջը պտտելով տալիս է գլան։
2. Գտեք $R = 2$ և $h = 7$ գլանի ծավալը։
3. Գտեք $R = 5$ և $h = 4$ գլանի կողմնային մակերևույթը։
4. Գտեք $R = 3$ և $h = 3$ գլանի լրիվ մակերևույթը։
5. Գտեք $R = 9$ և $h = 12$ կոնի կազմողը։
6. Գտեք $R = 3$ և $h = 10$ կոնի ծավալը։
7. Գտեք $R = 7$ և $l = 10$ կոնի կողմնային մակերևույթը։
8. Գլանը և կոնն ունեն նույն հիմքը և բարձրությունը։ Ո՞րն է նրանց ծավալների հարաբերությունը։

### Պատասխաններ

1. Ուղղանկյունը՝ իր կողմերից մեկի շուրջը պտտելով։
2. $28\\pi$։
3. $40\\pi$։
4. $18\\pi + 18\\pi = 36\\pi$։
5. $l = \\sqrt{81 + 144} = 15$։
6. $30\\pi$։
7. $70\\pi$։
8. Երեք մեկի։`,
        ru: `## Тела вращения

Повращайте плоскую фигуру вокруг прямой в её плоскости, и она опишет тело. Такое тело называется **телом вращения**, а его горизонтальные сечения — круги.

| Вращаемая фигура | Ось | Тело |
|---|---|---|
| прямоугольник | одна из его сторон | цилиндр |
| прямоугольный треугольник | один из его катетов | конус |
| полукруг | его диаметр | шар |

## Цилиндр

Прямоугольник со сторонами $R$ и $h$, повёрнутый вокруг стороны $h$, даёт **цилиндр** с радиусом основания $R$ и высотой $h$. Два его основания — равные круги, а кривая часть — **боковая поверхность**.

Разрежьте боковую поверхность по вертикальной линии и разверните: получится прямоугольник шириной $2\\pi R$ и высотой $h$. Отсюда

> $$S_{\\text{lat}} = 2\\pi R h, \\qquad S = 2\\pi R h + 2\\pi R^2 = 2\\pi R(h + R), \\qquad V = \\pi R^2 h.$$

Формула объёма — это формула призмы $S_0 h$ с кругом в основании, и это не случайно: цилиндр есть предел призм, основания которых — правильные многоугольники.

**Пример 1.** У цилиндра $R = 3$ и $h = 10$. Тогда
$$V = 90\\pi \\approx 283, \\qquad S_{\\text{lat}} = 60\\pi, \\qquad S = 60\\pi + 18\\pi = 78\\pi \\approx 245.$$

**Пример 2.** Банка радиуса $4$ см и высоты $12$ см вмещает $192\\pi \\approx 603$ кубического сантиметра, около $0{,}6$ литра.

## Конус

Прямоугольный треугольник с катетами $R$ и $h$, повёрнутый вокруг катета $h$, даёт **конус** с радиусом основания $R$, высотой $h$ и **образующей** $l$, где

> $$l^2 = R^2 + h^2.$$

Развёртка боковой поверхности — круговой сектор радиуса $l$, дуга которого есть окружность основания длиной $2\\pi R$. Площадь сектора равна половине его радиуса, умноженной на дугу, поэтому

> $$S_{\\text{lat}} = \\pi R l, \\qquad S = \\pi R l + \\pi R^2 = \\pi R(l + R), \\qquad V = \\tfrac{1}{3}\\pi R^2 h.$$

Снова объём — формула пирамиды с кругом в основании, с той же одной третью.

**Пример 3.** У конуса $R = 6$ и $h = 8$. Тогда $l = 10$, и
$$V = \\tfrac{1}{3}\\cdot 36\\pi\\cdot 8 = 96\\pi \\approx 302, \\qquad S_{\\text{lat}} = 60\\pi, \\qquad S = 60\\pi + 36\\pi = 96\\pi.$$
Числа для объёма и поверхности здесь совпали случайно, в разных единицах.

**Пример 4.** У конуса $R = 5$ и $l = 13$. Тогда $h = \\sqrt{169 - 25} = 12$ и $V = \\tfrac{1}{3}\\cdot 25\\pi\\cdot 12 = 100\\pi$.

**Пример 5.** У цилиндра и конуса одно основание и одна высота. Конус вмещает втрое меньше, поэтому, наполнив конус трижды, наполняем цилиндр. И песочные часы, и бумажный стакан опираются на этот факт.

**Пример 6.** Конусообразная куча песка имеет диаметр основания $4$ м и высоту $1{,}5$ м. Её объём равен $\\tfrac{1}{3}\\pi\\cdot 4\\cdot 1{,}5 = 2\\pi \\approx 6{,}3$ кубического метра, то есть около десяти тонн сухого песка.

### Упражнения

1. Какая фигура и вокруг какой прямой даёт цилиндр?
2. Найдите объём цилиндра с $R = 2$ и $h = 7$.
3. Найдите боковую поверхность цилиндра с $R = 5$ и $h = 4$.
4. Найдите полную поверхность цилиндра с $R = 3$ и $h = 3$.
5. Найдите образующую конуса с $R = 9$ и $h = 12$.
6. Найдите объём конуса с $R = 3$ и $h = 10$.
7. Найдите боковую поверхность конуса с $R = 7$ и $l = 10$.
8. У цилиндра и конуса одно основание и одна высота. Каково отношение их объёмов?

### Ответы

1. Прямоугольник, повёрнутый вокруг одной из своих сторон.
2. $28\\pi$.
3. $40\\pi$.
4. $18\\pi + 18\\pi = 36\\pi$.
5. $l = \\sqrt{81 + 144} = 15$.
6. $30\\pi$.
7. $70\\pi$.
8. Три к одному.`,
      },
      [
        q(t("A cylinder is obtained by spinning", "Գլանը ստացվում է պտտելով", "Цилиндр получается вращением"), [
          t("a rectangle about one of its sides", "ուղղանկյունն իր կողմերից մեկի շուրջը", "прямоугольника вокруг одной из его сторон"),
          t("a right triangle about one of its legs", "ուղղանկյուն եռանկյունն իր էջերից մեկի շուրջը", "прямоугольного треугольника вокруг одного из катетов"),
          t("a half disc about its diameter", "կիսաշրջանն իր տրամագծի շուրջը", "полукруга вокруг его диаметра"),
        ], 0),
        q(t("The lateral surface of a cylinder unrolls into", "Գլանի կողմնային մակերևույթը փռվում է", "Боковая поверхность цилиндра развёртывается в"), [
          t("a circular sector", "շրջանային սեկտորի", "круговой сектор"),
          t("a rectangle", "ուղղանկյան", "прямоугольник"),
          t("a triangle", "եռանկյան", "треугольник"),
        ], 1),
        q(t("The volume of a cylinder equals", "Գլանի ծավալը հավասար է", "Объём цилиндра равен"), [
          t("2 pi R h", "2 պի R h", "2 пи R h"),
          t("one third of pi R squared h", "պի R քառակուսի h-ի մեկ երրորդին", "одной третьей пи R в квадрате h"),
          t("pi R squared h", "պի R քառակուսի h", "пи R в квадрате h"),
        ], 2),
        q(t("The slant height of a cone is connected with R and h by", "Կոնի կազմողը R-ի և h-ի հետ կապված է", "Образующая конуса связана с R и h соотношением"), [
          t("l² = R² + h²", "l² = R² + h²", "l² = R² + h²"),
          t("l = R + h", "l = R + h", "l = R + h"),
          t("l² = R² - h²", "l² = R² - h²", "l² = R² - h²"),
        ], 0),
        q(t("The lateral surface of a cone equals", "Կոնի կողմնային մակերևույթը հավասար է", "Боковая поверхность конуса равна"), [
          t("pi R h", "պի R h", "пи R h"),
          t("pi R l", "պի R l", "пи R l"),
          t("2 pi R l", "2 պի R l", "2 пи R l"),
        ], 1),
        q(t("A cone and a cylinder with the same base and height have volumes in the ratio", "Նույն հիմքով և բարձրությամբ կոնի և գլանի ծավալները հարաբերվում են", "Объёмы конуса и цилиндра с одним основанием и высотой относятся как"), [
          t("1 to 1", "1-ը 1-ի", "1 к 1"),
          t("1 to 2", "1-ը 2-ի", "1 к 2"),
          t("1 to 3", "1-ը 3-ի", "1 к 3"),
        ], 2),
      ],
    ),
    lesson(
      "sphere-ball",
      ["The sphere and the ball", "Գունդը և սֆերան", "Сфера и шар"],
      {
        en: ["Define a sphere and a ball and write the equation of a sphere", "Compute the surface area of a sphere and the volume of a ball", "Describe the sections of a ball by planes"],
        hy: ["Սահմանել սֆերան և գունդը և գրել սֆերայի հավասարումը", "Հաշվել սֆերայի մակերեսը և գնդի ծավալը", "Նկարագրել գնդի հարթ հատույթները"],
        ru: ["Определять сферу и шар и записывать уравнение сферы", "Вычислять площадь сферы и объём шара", "Описывать сечения шара плоскостями"],
      },
      {
        en: `## Two words, one picture

> A **sphere** is the set of points of space at a given distance $R$ from a given point $O$. A **ball** is the sphere together with the part of space inside it.

So the sphere is the surface and the ball is the solid, exactly as a circle is a curve and a disc is a figure. A ball is also the solid of revolution obtained by spinning a half disc about its diameter.

In space a point is given by three coordinates, and the distance formula gains a third square. So the sphere with centre $C(a; b; c)$ and radius $R$ has equation

> $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2.$$

With the centre at the origin this is $x^2 + y^2 + z^2 = R^2$, the exact analogue of the circle.

## Surface and volume

> $$S = 4\\pi R^2, \\qquad V = \\tfrac{4}{3}\\pi R^3.$$

Both were found by Archimedes, who also proved that a ball fills two thirds of the smallest cylinder containing it. Indeed that cylinder has radius $R$ and height $2R$, so its volume is $2\\pi R^3$ and its full surface is $2\\pi R\\cdot 2R + 2\\pi R^2 = 6\\pi R^2$. The ratio is $\\frac{2}{3}$ for the volumes and also $\\frac{2}{3}$ for the surfaces, a result Archimedes asked to have carved on his tomb.

| Quantity | Formula | Grows as |
|---|---|---|
| length of a circle | $2\\pi R$ | the first power of $R$ |
| area of a disc | $\\pi R^2$ | the square of $R$ |
| surface of a sphere | $4\\pi R^2$ | the square of $R$ |
| volume of a ball | $\\frac{4}{3}\\pi R^3$ | the cube of $R$ |

**Example 1.** A ball of radius $3$ has surface $36\\pi \\approx 113$ and volume $36\\pi \\approx 113$ in the matching units. The two numbers agree only for $R = 3$.

**Example 2.** A ball has volume $288\\pi$. From $\\tfrac{4}{3}\\pi R^3 = 288\\pi$ we get $R^3 = 216$, so $R = 6$ and the surface is $144\\pi$.

**Example 3.** If the radius of a ball is doubled, its surface grows four times and its volume eight times. That is why a small animal loses heat quickly: its surface is large compared with its volume.

## Sections

A plane at distance $d$ from the centre of a ball, with $d < R$, cuts it in a disc of radius
$$r = \\sqrt{R^2 - d^2}.$$
A plane through the centre gives the largest section, a **great disc** of radius $R$. A plane at distance exactly $R$ touches the sphere at one point, and further away misses it.

**Example 4.** A plane cuts a ball of radius $10$ at distance $6$ from the centre. The section is a disc of radius $8$ and area $64\\pi$.

**Example 5.** A section of a ball of radius $13$ is a disc of area $25\\pi$. Then $r = 5$ and $d = \\sqrt{169 - 25} = 12$.

**Example 6.** The Earth is nearly a ball of radius about $6370$ km. Its surface is about
$$4\\pi\\cdot 6370^2 \\approx 5{.}1\\cdot 10^8 \\text{ square kilometres},$$
of which the oceans cover about $71$ per cent. A circle of latitude is a section parallel to the equator, and its radius shrinks as $\\sqrt{R^2 - d^2}$ as you move towards a pole.

### Exercises

1. What is the difference between a sphere and a ball?
2. Write the equation of the sphere with centre $(0; 0; 0)$ and radius $5$.
3. Write the equation of the sphere with centre $(1; -2; 3)$ and radius $4$.
4. Find the surface of a sphere of radius $7$.
5. Find the volume of a ball of radius $3$.
6. A ball has volume $\\frac{32\\pi}{3}$. Find its radius.
7. A plane cuts a ball of radius $5$ at distance $3$ from the centre. Find the radius of the section.
8. The radius of a ball is tripled. How many times do its surface and its volume grow?

### Answers

1. The sphere is the surface, the ball is the solid bounded by it.
2. $x^2 + y^2 + z^2 = 25$.
3. $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$.
4. $4\\pi\\cdot 49 = 196\\pi$.
5. $\\tfrac{4}{3}\\pi\\cdot 27 = 36\\pi$.
6. $R^3 = 8$, so $R = 2$.
7. $\\sqrt{25 - 9} = 4$.
8. The surface nine times, the volume twenty-seven times.`,
        hy: `## Երկու բառ, մեկ պատկեր

> **Սֆերան** տարածության այն կետերի բազմությունն է, որոնք տրված $O$ կետից գտնվում են տրված $R$ հեռավորության վրա։ **Գունդը** սֆերան է նրա ներսի տարածության մասի հետ միասին։

Ուրեմն սֆերան մակերևույթն է, իսկ գունդը՝ մարմինը, հենց ինչպես շրջանագիծը կոր է, իսկ շրջանը՝ պատկեր։ Գունդը նաև պտտման մարմին է, որը ստացվում է կիսաշրջանն իր տրամագծի շուրջը պտտելով։

Տարածությունում կետը տրվում է երեք կոորդինատով, և հեռավորության բանաձևը ստանում է երրորդ քառակուսին։ Ուստի $C(a; b; c)$ կենտրոնով և $R$ շառավղով սֆերան ունի հավասարում

> $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2.$$

Երբ կենտրոնը սկզբնակետում է, սա $x^2 + y^2 + z^2 = R^2$ է՝ շրջանագծի ճշգրիտ նմանակը։

## Մակերես և ծավալ

> $$S = 4\\pi R^2, \\qquad V = \\tfrac{4}{3}\\pi R^3.$$

Երկուսն էլ գտել է Արքիմեդը, որը նաև ապացուցել է, որ գունդը լցնում է իրեն պարունակող ամենափոքր գլանի երկու երրորդը։ Իրոք, այդ գլանն ունի $R$ շառավիղ և $2R$ բարձրություն, ուստի նրա ծավալը $2\\pi R^3$ է, իսկ լրիվ մակերևույթը՝ $2\\pi R\\cdot 2R + 2\\pi R^2 = 6\\pi R^2$։ Հարաբերությունը $\\frac{2}{3}$ է ծավալների և նույնպես $\\frac{2}{3}$ մակերևույթների համար. արդյունք, որն Արքիմեդը խնդրել է փորագրել իր տապանաքարին։

| Մեծությունը | Բանաձևը | Աճում է |
|---|---|---|
| շրջանագծի երկարությունը | $2\\pi R$ | $R$-ի առաջին աստիճանի պես |
| շրջանի մակերեսը | $\\pi R^2$ | $R$-ի քառակուսու պես |
| սֆերայի մակերեսը | $4\\pi R^2$ | $R$-ի քառակուսու պես |
| գնդի ծավալը | $\\frac{4}{3}\\pi R^3$ | $R$-ի խորանարդի պես |

**Օրինակ 1.** $3$ շառավղով գնդի մակերեսն է $36\\pi \\approx 113$, իսկ ծավալը՝ $36\\pi \\approx 113$ համապատասխան միավորներով։ Երկու թվերը համընկնում են միայն $R = 3$ դեպքում։

**Օրինակ 2.** Գնդի ծավալը $288\\pi$ է։ $\\tfrac{4}{3}\\pi R^3 = 288\\pi$-ից ստանում ենք $R^3 = 216$, ուստի $R = 6$ և մակերեսն է $144\\pi$։

**Օրինակ 3.** Եթե գնդի շառավիղը կրկնապատկվի, նրա մակերեսն աճում է չորս անգամ, իսկ ծավալը՝ ութ։ Ահա թե ինչու փոքր կենդանին արագ կորցնում է ջերմությունը. նրա մակերեսը մեծ է ծավալի համեմատ։

## Հատույթներ

Գնդի կենտրոնից $d$ հեռավորության վրա գտնվող հարթությունը, երբ $d < R$, կտրում է նրան
$$r = \\sqrt{R^2 - d^2}$$
շառավղով շրջանով։ Կենտրոնով անցնող հարթությունը տալիս է ամենամեծ հատույթը՝ $R$ շառավղով **մեծ շրջան**։ Ճիշտ $R$ հեռավորության վրա հարթությունը շոշափում է սֆերան մեկ կետում, իսկ ավելի հեռու՝ չի հատում։

**Օրինակ 4.** Հարթությունը կտրում է $10$ շառավղով գունդը կենտրոնից $6$ հեռավորության վրա։ Հատույթը $8$ շառավղով և $64\\pi$ մակերեսով շրջան է։

**Օրինակ 5.** $13$ շառավղով գնդի հատույթը $25\\pi$ մակերեսով շրջան է։ Այդ դեպքում $r = 5$ և $d = \\sqrt{169 - 25} = 12$։

**Օրինակ 6.** Երկիրը գրեթե գունդ է՝ մոտ $6370$ կմ շառավղով։ Նրա մակերեսը մոտ
$$4\\pi\\cdot 6370^2 \\approx 5{,}1\\cdot 10^8$$
քառակուսի կիլոմետր է, որից օվկիանոսները ծածկում են մոտ $71$ տոկոսը։ Լայնության զուգահեռականը հասարակածին զուգահեռ հատույթ է, և նրա շառավիղը նվազում է $\\sqrt{R^2 - d^2}$-ի պես, երբ շարժվում եք դեպի բևեռ։

### Վարժություններ

1. Ո՞րն է տարբերությունը սֆերայի և գնդի միջև։
2. Գրեք $(0; 0; 0)$ կենտրոնով և $5$ շառավղով սֆերայի հավասարումը։
3. Գրեք $(1; -2; 3)$ կենտրոնով և $4$ շառավղով սֆերայի հավասարումը։
4. Գտեք $7$ շառավղով սֆերայի մակերեսը։
5. Գտեք $3$ շառավղով գնդի ծավալը։
6. Գնդի ծավալը $\\frac{32\\pi}{3}$ է։ Գտեք նրա շառավիղը։
7. Հարթությունը կտրում է $5$ շառավղով գունդը կենտրոնից $3$ հեռավորության վրա։ Գտեք հատույթի շառավիղը։
8. Գնդի շառավիղն եռապատկվում է։ Քանի՞ անգամ աճում են նրա մակերեսը և ծավալը։

### Պատասխաններ

1. Սֆերան մակերևույթն է, գունդը՝ նրանով սահմանափակված մարմինը։
2. $x^2 + y^2 + z^2 = 25$։
3. $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$։
4. $4\\pi\\cdot 49 = 196\\pi$։
5. $\\tfrac{4}{3}\\pi\\cdot 27 = 36\\pi$։
6. $R^3 = 8$, ուստի $R = 2$։
7. $\\sqrt{25 - 9} = 4$։
8. Մակերեսը՝ ինն անգամ, ծավալը՝ քսանյոթ անգամ։`,
        ru: `## Два слова, одна картина

> **Сфера** — множество точек пространства, находящихся на данном расстоянии $R$ от данной точки $O$. **Шар** — сфера вместе с частью пространства внутри неё.

Значит, сфера — это поверхность, а шар — тело, в точности как окружность — кривая, а круг — фигура. Шар также является телом вращения, получаемым вращением полукруга вокруг его диаметра.

В пространстве точка задаётся тремя координатами, и формула расстояния получает третий квадрат. Поэтому сфера с центром $C(a; b; c)$ и радиусом $R$ имеет уравнение

> $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2.$$

При центре в начале координат это $x^2 + y^2 + z^2 = R^2$ — точный аналог окружности.

## Площадь и объём

> $$S = 4\\pi R^2, \\qquad V = \\tfrac{4}{3}\\pi R^3.$$

Обе формулы нашёл Архимед, который также доказал, что шар занимает две трети наименьшего содержащего его цилиндра. Действительно, у этого цилиндра радиус $R$ и высота $2R$, поэтому его объём равен $2\\pi R^3$, а полная поверхность $2\\pi R\\cdot 2R + 2\\pi R^2 = 6\\pi R^2$. Отношение равно $\\frac{2}{3}$ и для объёмов, и для поверхностей — результат, который Архимед просил вырезать на своём надгробии.

| Величина | Формула | Растёт как |
|---|---|---|
| длина окружности | $2\\pi R$ | первая степень $R$ |
| площадь круга | $\\pi R^2$ | квадрат $R$ |
| площадь сферы | $4\\pi R^2$ | квадрат $R$ |
| объём шара | $\\frac{4}{3}\\pi R^3$ | куб $R$ |

**Пример 1.** У шара радиуса $3$ площадь поверхности равна $36\\pi \\approx 113$, а объём $36\\pi \\approx 113$ в соответствующих единицах. Эти два числа совпадают только при $R = 3$.

**Пример 2.** Объём шара равен $288\\pi$. Из $\\tfrac{4}{3}\\pi R^3 = 288\\pi$ получаем $R^3 = 216$, поэтому $R = 6$, а площадь равна $144\\pi$.

**Пример 3.** Если радиус шара удвоить, его поверхность вырастет в четыре раза, а объём в восемь. Поэтому маленькое животное быстро теряет тепло: его поверхность велика по сравнению с объёмом.

## Сечения

Плоскость на расстоянии $d$ от центра шара, при $d < R$, пересекает его по кругу радиуса
$$r = \\sqrt{R^2 - d^2}.$$
Плоскость через центр даёт наибольшее сечение — **большой круг** радиуса $R$. Плоскость на расстоянии ровно $R$ касается сферы в одной точке, а дальше её не пересекает.

**Пример 4.** Плоскость пересекает шар радиуса $10$ на расстоянии $6$ от центра. Сечение — круг радиуса $8$ и площади $64\\pi$.

**Пример 5.** Сечение шара радиуса $13$ — круг площади $25\\pi$. Тогда $r = 5$ и $d = \\sqrt{169 - 25} = 12$.

**Пример 6.** Земля почти шар радиуса около $6370$ км. Её поверхность составляет около
$$4\\pi\\cdot 6370^2 \\approx 5{,}1\\cdot 10^8$$
квадратного километра, из которых океаны покрывают около $71$ процента. Параллель — это сечение, параллельное экватору, и её радиус убывает как $\\sqrt{R^2 - d^2}$ по мере движения к полюсу.

### Упражнения

1. В чём разница между сферой и шаром?
2. Запишите уравнение сферы с центром $(0; 0; 0)$ и радиусом $5$.
3. Запишите уравнение сферы с центром $(1; -2; 3)$ и радиусом $4$.
4. Найдите площадь сферы радиуса $7$.
5. Найдите объём шара радиуса $3$.
6. Объём шара равен $\\frac{32\\pi}{3}$. Найдите его радиус.
7. Плоскость пересекает шар радиуса $5$ на расстоянии $3$ от центра. Найдите радиус сечения.
8. Радиус шара увеличили втрое. Во сколько раз выросли его поверхность и объём?

### Ответы

1. Сфера — поверхность, шар — ограниченное ею тело.
2. $x^2 + y^2 + z^2 = 25$.
3. $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$.
4. $4\\pi\\cdot 49 = 196\\pi$.
5. $\\tfrac{4}{3}\\pi\\cdot 27 = 36\\pi$.
6. $R^3 = 8$, поэтому $R = 2$.
7. $\\sqrt{25 - 9} = 4$.
8. Поверхность в девять раз, объём в двадцать семь раз.`,
      },
      [
        q(t("A sphere is", "Սֆերան", "Сфера —"), [
          t("the surface made of the points at a given distance from a point", "կետից տրված հեռավորության վրա գտնվող կետերից կազմված մակերևույթն է", "поверхность из точек, находящихся на данном расстоянии от точки"),
          t("the solid bounded by that surface", "այդ մակերևույթով սահմանափակված մարմինն է", "тело, ограниченное этой поверхностью"),
          t("a flat figure", "հարթ պատկեր է", "плоская фигура"),
        ], 0),
        q(t("The equation of the sphere of radius R centred at the origin is", "Սկզբնակետում կենտրոնով R շառավղով սֆերայի հավասարումն է", "Уравнение сферы радиуса R с центром в начале координат —"), [
          t("x² + y² = R²", "x² + y² = R²", "x² + y² = R²"),
          t("x² + y² + z² = R²", "x² + y² + z² = R²", "x² + y² + z² = R²"),
          t("x + y + z = R", "x + y + z = R", "x + y + z = R"),
        ], 1),
        q(t("The surface area of a sphere of radius R equals", "R շառավղով սֆերայի մակերեսը հավասար է", "Площадь сферы радиуса R равна"), [
          t("pi R squared", "պի R քառակուսի", "пи R в квадрате"),
          t("2 pi R squared", "2 պի R քառակուսի", "2 пи R в квадрате"),
          t("4 pi R squared", "4 պի R քառակուսի", "4 пи R в квадрате"),
        ], 2),
        q(t("The volume of a ball of radius R equals", "R շառավղով գնդի ծավալը հավասար է", "Объём шара радиуса R равен"), [
          t("four thirds of pi R cubed", "պի R խորանարդի չորս երրորդին", "четырём третьим пи R в кубе"),
          t("pi R cubed", "պի R խորանարդ", "пи R в кубе"),
          t("one third of pi R cubed", "պի R խորանարդի մեկ երրորդին", "одной третьей пи R в кубе"),
        ], 0),
        q(t("A ball fills what part of the smallest cylinder containing it?", "Գունդը լցնում է իրեն պարունակող ամենափոքր գլանի ո՞ր մասը", "Какую часть наименьшего содержащего его цилиндра занимает шар?"), [
          t("one half", "կեսը", "половину"),
          t("two thirds", "երկու երրորդը", "две трети"),
          t("three quarters", "երեք քառորդը", "три четверти"),
        ], 1),
        q(t("A plane at distance d from the centre of a ball of radius R cuts a disc of radius", "R շառավղով գնդի կենտրոնից d հեռավորության վրա հարթությունը կտրում է շրջան, որի շառավիղը", "Плоскость на расстоянии d от центра шара радиуса R даёт круг радиуса"), [
          t("R - d", "R - d", "R - d"),
          t("R + d", "R + d", "R + d"),
          t("the square root of R² - d²", "R² - d²-ի քառակուսի արմատն է", "квадратный корень из R² - d²"),
        ], 2),
      ],
    ),
    lesson(
      "geometry-9-review",
      ["Review of the grade 9 course", "9-րդ դասարանի դասընթացի ամփոփում", "Повторение курса 9 класса"],
      {
        en: ["Recall the main formulas of the year in one place", "Choose the right tool for a given problem", "Solve mixed problems on vectors, coordinates, triangles and circles"],
        hy: ["Հիշել տարվա հիմնական բանաձևերը մեկ տեղում", "Տրված խնդրի համար ընտրել ճիշտ գործիքը", "Լուծել խառը խնդիրներ վեկտորների, կոորդինատների, եռանկյունների և շրջանագծերի վերաբերյալ"],
        ru: ["Вспомнить основные формулы года в одном месте", "Выбирать подходящий инструмент для данной задачи", "Решать смешанные задачи о векторах, координатах, треугольниках и окружностях"],
      },
      {
        en: `## The formulas of the year

| Topic | Formula |
|---|---|
| vector from $A$ to $B$ | $\\overrightarrow{AB}\\{x_2 - x_1;\\ y_2 - y_1\\}$ |
| length of a vector | $\\sqrt{x^2 + y^2}$ |
| midpoint of a segment | averages of the coordinates |
| distance between points | $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| circle | $(x - a)^2 + (y - b)^2 = R^2$ |
| line | $ax + by + c = 0$ |
| scalar product | $x_1x_2 + y_1y_2 = \\lvert\\vec{a}\\rvert\\lvert\\vec{b}\\rvert\\cos\\varphi$ |
| area of a triangle | $\\tfrac{1}{2}ab\\sin C$ |
| law of sines | $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ |
| law of cosines | $a^2 = b^2 + c^2 - 2bc\\cos A$ |
| median | $m_a = \\tfrac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}$ |
| angle of a regular $n$-gon | $\\frac{(n - 2)180^\\circ}{n}$ |
| side and apothem of a regular $n$-gon | $2R\\sin\\frac{180^\\circ}{n}$ and $R\\cos\\frac{180^\\circ}{n}$ |
| length of a circle and an arc | $2\\pi R$ and $\\frac{\\pi R\\alpha}{180^\\circ}$ |
| area of a disc and a sector | $\\pi R^2$ and $\\frac{\\pi R^2\\alpha}{360^\\circ}$ |
| prism and pyramid | $V = S_0 h$ and $V = \\tfrac{1}{3}S_0 h$ |
| cylinder and cone | $V = \\pi R^2 h$ and $V = \\tfrac{1}{3}\\pi R^2 h$ |
| sphere and ball | $S = 4\\pi R^2$ and $V = \\tfrac{4}{3}\\pi R^3$ |

## Choosing the tool

| The problem gives | Use |
|---|---|
| coordinates of points | distance, midpoint, scalar product |
| two sides and the angle between them | law of cosines, or the area formula |
| two angles and a side | law of sines |
| three sides | law of cosines for the largest angle first |
| a figure with no numbers to prove something | vectors, or a well chosen coordinate system |
| a circle and a line | substitute and count the roots |
| a regular polygon | the triangle formed by the centre, a vertex and the midpoint of a side |

## Worked problems

**Example 1.** In the triangle $A(0; 0)$, $B(8; 0)$, $C(5; 4)$ find all three sides, the largest angle and the area.
$$AB = 8, \\quad AC = \\sqrt{41} \\approx 6{.}40, \\quad BC = \\sqrt{9 + 16} = 5.$$
The largest side is $AB$, so the largest angle is at $C$:
$$\\cos C = \\frac{41 + 25 - 64}{2\\cdot 5\\sqrt{41}} = \\frac{2}{10\\sqrt{41}} \\approx 0{.}031, \\quad C \\approx 88^\\circ.$$
The area is easiest from the height: $S = \\tfrac{1}{2}\\cdot 8\\cdot 4 = 16$.

**Example 2.** A chord of length $12$ lies in a circle of radius $10$. Find the distance from the centre to the chord and the area of the smaller segment. Half the chord is $6$, so $d = \\sqrt{100 - 36} = 8$. The central angle $\\alpha$ satisfies $\\sin\\frac{\\alpha}{2} = 0{.}6$, so $\\frac{\\alpha}{2} \\approx 37^\\circ$ and $\\alpha \\approx 74^\\circ$. The segment is
$$\\frac{100\\pi\\cdot 74}{360} - \\tfrac{1}{2}\\cdot 100\\sin 74^\\circ \\approx 64{.}6 - 48{.}1 = 16{.}5.$$

**Example 3.** A regular hexagon is inscribed in a circle of length $12\\pi$. Find its area. From $2\\pi R = 12\\pi$ we get $R = 6$, so the side is $6$ and the area is $\\frac{3\\cdot 36\\sqrt{3}}{2} = 54\\sqrt{3} \\approx 93{.}5$.

**Example 4.** Prove that the quadrilateral $A(0; 0)$, $B(5; 1)$, $C(6; 6)$, $D(1; 5)$ is a square. All four sides have length $\\sqrt{26}$, and $\\overrightarrow{AB}\\{5; 1\\}$ with $\\overrightarrow{AD}\\{1; 5\\}$ gives the scalar product $5 + 5 = 10 \\ne 0$, so the angle is not right and the figure is a rhombus but not a square. The check saves us from a wrong answer: never trust a picture without the computation.

**Example 5.** A cone of radius $6$ and height $8$ is filled with water, which is then poured into a cylinder of the same radius. How deep is the water? The cone holds $96\\pi$, and the cylinder of radius $6$ has base area $36\\pi$, so the depth is $\\frac{96\\pi}{36\\pi} = \\frac{8}{3} \\approx 2{.}67$, which is a third of the height, as expected.

### Exercises

1. Find the distance between $(-2; 1)$ and $(4; 9)$.
2. Write the equation of the circle with centre $(2; -3)$ and radius $6$.
3. In a triangle $b = 7$, $c = 8$, $A = 60^\\circ$. Find $a$ and the area.
4. In a triangle $a = 12$, $A = 30^\\circ$, $B = 45^\\circ$. Find $b$ and the radius of the circumscribed circle.
5. Find the angle between the vectors $\\{2; 1\\}$ and $\\{1; 3\\}$ to the nearest degree, using $\\cos\\varphi \\approx 0{.}707$ for $45^\\circ$.
6. A regular octagon has side $5$. Find its angle and its perimeter.
7. Find the area of the sector of $72^\\circ$ in a disc of radius $10$.
8. A ball of radius $6$ is melted and recast into a cylinder of radius $6$. Find the height of the cylinder.

### Answers

1. $\\sqrt{36 + 64} = 10$.
2. $(x - 2)^2 + (y + 3)^2 = 36$.
3. $a^2 = 49 + 64 - 56 = 57$, so $a = \\sqrt{57} \\approx 7{.}55$, and $S = \\tfrac{1}{2}\\cdot 56\\cdot\\frac{\\sqrt{3}}{2} = 14\\sqrt{3}$.
4. $b = \\frac{12\\sin 45^\\circ}{\\sin 30^\\circ} = 12\\sqrt{2}$, and $2R = \\frac{12}{0{.}5} = 24$, so $R = 12$.
5. The product is $5$, the lengths are $\\sqrt{5}$ and $\\sqrt{10}$, so $\\cos\\varphi = \\frac{5}{\\sqrt{50}} = 0{.}707$ and $\\varphi = 45^\\circ$.
6. The angle is $135^\\circ$ and the perimeter is $40$.
7. $\\frac{100\\pi\\cdot 72}{360} = 20\\pi$.
8. The ball has volume $288\\pi$, the cylinder has base area $36\\pi$, so $h = 8$.`,
        hy: `## Տարվա բանաձևերը

| Թեման | Բանաձևը |
|---|---|
| $A$-ից $B$ վեկտորը | $\\overrightarrow{AB}\\{x_2 - x_1;\\ y_2 - y_1\\}$ |
| վեկտորի երկարությունը | $\\sqrt{x^2 + y^2}$ |
| հատվածի միջնակետը | կոորդինատների միջին թվաբանականները |
| կետերի հեռավորությունը | $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| շրջանագիծը | $(x - a)^2 + (y - b)^2 = R^2$ |
| ուղիղը | $ax + by + c = 0$ |
| սկալյար արտադրյալը | $x_1x_2 + y_1y_2 = \\lvert\\vec{a}\\rvert\\lvert\\vec{b}\\rvert\\cos\\varphi$ |
| եռանկյան մակերեսը | $\\tfrac{1}{2}ab\\sin C$ |
| սինուսների թեորեմը | $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ |
| կոսինուսների թեորեմը | $a^2 = b^2 + c^2 - 2bc\\cos A$ |
| միջնագիծը | $m_a = \\tfrac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}$ |
| կանոնավոր $n$-անկյան անկյունը | $\\frac{(n - 2)180^\\circ}{n}$ |
| կանոնավոր $n$-անկյան կողմը և ապոթեմը | $2R\\sin\\frac{180^\\circ}{n}$ և $R\\cos\\frac{180^\\circ}{n}$ |
| շրջանագծի և աղեղի երկարությունը | $2\\pi R$ և $\\frac{\\pi R\\alpha}{180^\\circ}$ |
| շրջանի և սեկտորի մակերեսը | $\\pi R^2$ և $\\frac{\\pi R^2\\alpha}{360^\\circ}$ |
| պրիզմա և բուրգ | $V = S_0 h$ և $V = \\tfrac{1}{3}S_0 h$ |
| գլան և կոն | $V = \\pi R^2 h$ և $V = \\tfrac{1}{3}\\pi R^2 h$ |
| սֆերա և գունդ | $S = 4\\pi R^2$ և $V = \\tfrac{4}{3}\\pi R^3$ |

## Գործիքի ընտրությունը

| Խնդիրը տալիս է | Օգտագործեք |
|---|---|
| կետերի կոորդինատները | հեռավորություն, միջնակետ, սկալյար արտադրյալ |
| երկու կողմ և նրանց միջև անկյունը | կոսինուսների թեորեմ կամ մակերեսի բանաձև |
| երկու անկյուն և կողմ | սինուսների թեորեմ |
| երեք կողմ | կոսինուսների թեորեմ՝ սկզբում ամենամեծ անկյան համար |
| պատկեր առանց թվերի՝ ինչ-որ բան ապացուցելու | վեկտորներ կամ հաջող ընտրված կոորդինատային համակարգ |
| շրջանագիծ և ուղիղ | տեղադրել և հաշվել արմատների թիվը |
| կանոնավոր բազմանկյուն | կենտրոնով, գագաթով և կողմի միջնակետով կազմված եռանկյունը |

## Լուծված խնդիրներ

**Օրինակ 1.** $A(0; 0)$, $B(8; 0)$, $C(5; 4)$ եռանկյունում գտնենք բոլոր երեք կողմերը, ամենամեծ անկյունը և մակերեսը։
$$AB = 8, \\quad AC = \\sqrt{41} \\approx 6{,}40, \\quad BC = \\sqrt{9 + 16} = 5.$$
Ամենամեծ կողմը $AB$-ն է, ուստի ամենամեծ անկյունը $C$-ում է՝
$$\\cos C = \\frac{41 + 25 - 64}{2\\cdot 5\\sqrt{41}} = \\frac{2}{10\\sqrt{41}} \\approx 0{,}031, \\quad C \\approx 88^\\circ.$$
Մակերեսն ամենահեշտ է բարձրությունից՝ $S = \\tfrac{1}{2}\\cdot 8\\cdot 4 = 16$։

**Օրինակ 2.** $12$ երկարությամբ լարը գտնվում է $10$ շառավղով շրջանագծում։ Գտնենք կենտրոնից լարի հեռավորությունը և փոքր սեգմենտի մակերեսը։ Լարի կեսն է $6$, ուստի $d = \\sqrt{100 - 36} = 8$։ $\\alpha$ կենտրոնային անկյունը բավարարում է $\\sin\\frac{\\alpha}{2} = 0{,}6$, ուստի $\\frac{\\alpha}{2} \\approx 37^\\circ$ և $\\alpha \\approx 74^\\circ$։ Սեգմենտն է
$$\\frac{100\\pi\\cdot 74}{360} - \\tfrac{1}{2}\\cdot 100\\sin 74^\\circ \\approx 64{,}6 - 48{,}1 = 16{,}5.$$

**Օրինակ 3.** Կանոնավոր վեցանկյունը ներգծված է $12\\pi$ երկարությամբ շրջանագծին։ Գտնենք նրա մակերեսը։ $2\\pi R = 12\\pi$-ից ստանում ենք $R = 6$, ուստի կողմը $6$ է, իսկ մակերեսը՝ $\\frac{3\\cdot 36\\sqrt{3}}{2} = 54\\sqrt{3} \\approx 93{,}5$։

**Օրինակ 4.** Ապացուցենք, որ $A(0; 0)$, $B(5; 1)$, $C(6; 6)$, $D(1; 5)$ քառանկյունը քառակուսի է։ Բոլոր չորս կողմերն ունեն $\\sqrt{26}$ երկարություն, իսկ $\\overrightarrow{AB}\\{5; 1\\}$ և $\\overrightarrow{AD}\\{1; 5\\}$ տալիս են $5 + 5 = 10 \\ne 0$ սկալյար արտադրյալ, ուստի անկյունն ուղիղ չէ, և պատկերը շեղանկյուն է, բայց ոչ քառակուսի։ Ստուգումը մեզ փրկում է սխալ պատասխանից. երբեք չվստահեք գծագրին առանց հաշվարկի։

**Օրինակ 5.** $6$ շառավղով և $8$ բարձրությամբ կոնը լցված է ջրով, որն ապա լցվում է նույն շառավղով գլանի մեջ։ Ի՞նչ խորություն ունի ջուրը։ Կոնը պարունակում է $96\\pi$, իսկ $6$ շառավղով գլանի հիմքի մակերեսն է $36\\pi$, ուստի խորությունն է $\\frac{96\\pi}{36\\pi} = \\frac{8}{3} \\approx 2{,}67$, ինչը բարձրության մեկ երրորդն է, ինչպես և սպասվում էր։

### Վարժություններ

1. Գտեք $(-2; 1)$ և $(4; 9)$ կետերի հեռավորությունը։
2. Գրեք $(2; -3)$ կենտրոնով և $6$ շառավղով շրջանագծի հավասարումը։
3. Եռանկյունում $b = 7$, $c = 8$, $A = 60^\\circ$։ Գտեք $a$-ն և մակերեսը։
4. Եռանկյունում $a = 12$, $A = 30^\\circ$, $B = 45^\\circ$։ Գտեք $b$-ն և արտագծած շրջանագծի շառավիղը։
5. Գտեք $\\{2; 1\\}$ և $\\{1; 3\\}$ վեկտորների միջև անկյունը մոտակա աստիճանով, օգտագործելով $\\cos\\varphi \\approx 0{,}707$-ը $45^\\circ$-ի համար։
6. Կանոնավոր ութանկյան կողմը $5$ է։ Գտեք նրա անկյունը և պարագիծը։
7. Գտեք $10$ շառավղով շրջանի $72^\\circ$ սեկտորի մակերեսը։
8. $6$ շառավղով գունդը հալեցվում և վերաձուլվում է $6$ շառավղով գլանի։ Գտեք գլանի բարձրությունը։

### Պատասխաններ

1. $\\sqrt{36 + 64} = 10$։
2. $(x - 2)^2 + (y + 3)^2 = 36$։
3. $a^2 = 49 + 64 - 56 = 57$, ուստի $a = \\sqrt{57} \\approx 7{,}55$, իսկ $S = \\tfrac{1}{2}\\cdot 56\\cdot\\frac{\\sqrt{3}}{2} = 14\\sqrt{3}$։
4. $b = \\frac{12\\sin 45^\\circ}{\\sin 30^\\circ} = 12\\sqrt{2}$, իսկ $2R = \\frac{12}{0{,}5} = 24$, ուստի $R = 12$։
5. Արտադրյալը $5$ է, երկարությունները՝ $\\sqrt{5}$ և $\\sqrt{10}$, ուստի $\\cos\\varphi = \\frac{5}{\\sqrt{50}} = 0{,}707$ և $\\varphi = 45^\\circ$։
6. Անկյունը $135^\\circ$ է, պարագիծը՝ $40$։
7. $\\frac{100\\pi\\cdot 72}{360} = 20\\pi$։
8. Գնդի ծավալը $288\\pi$ է, գլանի հիմքի մակերեսը՝ $36\\pi$, ուստի $h = 8$։`,
        ru: `## Формулы года

| Тема | Формула |
|---|---|
| вектор от $A$ к $B$ | $\\overrightarrow{AB}\\{x_2 - x_1;\\ y_2 - y_1\\}$ |
| длина вектора | $\\sqrt{x^2 + y^2}$ |
| середина отрезка | средние арифметические координат |
| расстояние между точками | $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| окружность | $(x - a)^2 + (y - b)^2 = R^2$ |
| прямая | $ax + by + c = 0$ |
| скалярное произведение | $x_1x_2 + y_1y_2 = \\lvert\\vec{a}\\rvert\\lvert\\vec{b}\\rvert\\cos\\varphi$ |
| площадь треугольника | $\\tfrac{1}{2}ab\\sin C$ |
| теорема синусов | $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ |
| теорема косинусов | $a^2 = b^2 + c^2 - 2bc\\cos A$ |
| медиана | $m_a = \\tfrac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}$ |
| угол правильного $n$-угольника | $\\frac{(n - 2)180^\\circ}{n}$ |
| сторона и апофема правильного $n$-угольника | $2R\\sin\\frac{180^\\circ}{n}$ и $R\\cos\\frac{180^\\circ}{n}$ |
| длина окружности и дуги | $2\\pi R$ и $\\frac{\\pi R\\alpha}{180^\\circ}$ |
| площадь круга и сектора | $\\pi R^2$ и $\\frac{\\pi R^2\\alpha}{360^\\circ}$ |
| призма и пирамида | $V = S_0 h$ и $V = \\tfrac{1}{3}S_0 h$ |
| цилиндр и конус | $V = \\pi R^2 h$ и $V = \\tfrac{1}{3}\\pi R^2 h$ |
| сфера и шар | $S = 4\\pi R^2$ и $V = \\tfrac{4}{3}\\pi R^3$ |

## Выбор инструмента

| В задаче дано | Применяйте |
|---|---|
| координаты точек | расстояние, середину, скалярное произведение |
| две стороны и угол между ними | теорему косинусов или формулу площади |
| два угла и сторону | теорему синусов |
| три стороны | теорему косинусов, сначала для наибольшего угла |
| фигуру без чисел, надо что-то доказать | векторы или удачно выбранную систему координат |
| окружность и прямую | подставить и посчитать число корней |
| правильный многоугольник | треугольник из центра, вершины и середины стороны |

## Разобранные задачи

**Пример 1.** В треугольнике $A(0; 0)$, $B(8; 0)$, $C(5; 4)$ найдём все три стороны, наибольший угол и площадь.
$$AB = 8, \\quad AC = \\sqrt{41} \\approx 6{,}40, \\quad BC = \\sqrt{9 + 16} = 5.$$
Наибольшая сторона — $AB$, поэтому наибольший угол при $C$:
$$\\cos C = \\frac{41 + 25 - 64}{2\\cdot 5\\sqrt{41}} = \\frac{2}{10\\sqrt{41}} \\approx 0{,}031, \\quad C \\approx 88^\\circ.$$
Площадь проще найти через высоту: $S = \\tfrac{1}{2}\\cdot 8\\cdot 4 = 16$.

**Пример 2.** Хорда длины $12$ лежит в окружности радиуса $10$. Найдём расстояние от центра до хорды и площадь меньшего сегмента. Половина хорды равна $6$, поэтому $d = \\sqrt{100 - 36} = 8$. Центральный угол $\\alpha$ удовлетворяет условию $\\sin\\frac{\\alpha}{2} = 0{,}6$, поэтому $\\frac{\\alpha}{2} \\approx 37^\\circ$ и $\\alpha \\approx 74^\\circ$. Сегмент равен
$$\\frac{100\\pi\\cdot 74}{360} - \\tfrac{1}{2}\\cdot 100\\sin 74^\\circ \\approx 64{,}6 - 48{,}1 = 16{,}5.$$

**Пример 3.** Правильный шестиугольник вписан в окружность длины $12\\pi$. Найдём его площадь. Из $2\\pi R = 12\\pi$ получаем $R = 6$, поэтому сторона равна $6$, а площадь $\\frac{3\\cdot 36\\sqrt{3}}{2} = 54\\sqrt{3} \\approx 93{,}5$.

**Пример 4.** Докажем, что четырёхугольник $A(0; 0)$, $B(5; 1)$, $C(6; 6)$, $D(1; 5)$ — квадрат. Все четыре стороны имеют длину $\\sqrt{26}$, а $\\overrightarrow{AB}\\{5; 1\\}$ и $\\overrightarrow{AD}\\{1; 5\\}$ дают скалярное произведение $5 + 5 = 10 \\ne 0$, поэтому угол не прямой, и фигура — ромб, но не квадрат. Проверка спасает нас от неверного ответа: никогда не доверяйте чертежу без вычисления.

**Пример 5.** Конус радиуса $6$ и высоты $8$ наполнен водой, которую затем переливают в цилиндр того же радиуса. Какова глубина воды? Конус вмещает $96\\pi$, а у цилиндра радиуса $6$ площадь основания равна $36\\pi$, поэтому глубина равна $\\frac{96\\pi}{36\\pi} = \\frac{8}{3} \\approx 2{,}67$, то есть треть высоты, как и ожидалось.

### Упражнения

1. Найдите расстояние между $(-2; 1)$ и $(4; 9)$.
2. Запишите уравнение окружности с центром $(2; -3)$ и радиусом $6$.
3. В треугольнике $b = 7$, $c = 8$, $A = 60^\\circ$. Найдите $a$ и площадь.
4. В треугольнике $a = 12$, $A = 30^\\circ$, $B = 45^\\circ$. Найдите $b$ и радиус описанной окружности.
5. Найдите угол между векторами $\\{2; 1\\}$ и $\\{1; 3\\}$ с точностью до градуса, используя $\\cos\\varphi \\approx 0{,}707$ для $45^\\circ$.
6. У правильного восьмиугольника сторона $5$. Найдите его угол и периметр.
7. Найдите площадь сектора $72^\\circ$ в круге радиуса $10$.
8. Шар радиуса $6$ переплавили в цилиндр радиуса $6$. Найдите высоту цилиндра.

### Ответы

1. $\\sqrt{36 + 64} = 10$.
2. $(x - 2)^2 + (y + 3)^2 = 36$.
3. $a^2 = 49 + 64 - 56 = 57$, поэтому $a = \\sqrt{57} \\approx 7{,}55$, а $S = \\tfrac{1}{2}\\cdot 56\\cdot\\frac{\\sqrt{3}}{2} = 14\\sqrt{3}$.
4. $b = \\frac{12\\sin 45^\\circ}{\\sin 30^\\circ} = 12\\sqrt{2}$, а $2R = \\frac{12}{0{,}5} = 24$, поэтому $R = 12$.
5. Произведение равно $5$, длины равны $\\sqrt{5}$ и $\\sqrt{10}$, поэтому $\\cos\\varphi = \\frac{5}{\\sqrt{50}} = 0{,}707$ и $\\varphi = 45^\\circ$.
6. Угол равен $135^\\circ$, периметр $40$.
7. $\\frac{100\\pi\\cdot 72}{360} = 20\\pi$.
8. Объём шара равен $288\\pi$, площадь основания цилиндра $36\\pi$, поэтому $h = 8$.`,
      },
      [
        q(t("The common value in the law of sines equals twice", "Սինուսների թեորեմի ընդհանուր արժեքը հավասար է կրկնապատիկին", "Общее значение в теореме синусов равно удвоенному"), [
          t("the radius of the circumscribed circle", "արտագծած շրջանագծի շառավղի", "радиусу описанной окружности"),
          t("the radius of the inscribed circle", "ներգծած շրջանագծի շառավղի", "радиусу вписанной окружности"),
          t("the longest side", "ամենաերկար կողմի", "самой длинной стороне"),
        ], 0),
        q(t("When three sides of a triangle are given, the right first step is", "Երբ տրված են եռանկյան երեք կողմերը, ճիշտ առաջին քայլն է", "Когда даны три стороны треугольника, верный первый шаг —"), [
          t("the law of sines for the smallest angle", "սինուսների թեորեմն ամենափոքր անկյան համար", "теорема синусов для наименьшего угла"),
          t("the law of cosines for the largest angle", "կոսինուսների թեորեմն ամենամեծ անկյան համար", "теорема косинусов для наибольшего угла"),
          t("the area formula with a sine", "սինուսով մակերեսի բանաձևը", "формула площади через синус"),
        ], 1),
        q(t("A regular hexagon inscribed in a circle of length 12 pi has side", "12 պի երկարությամբ շրջանագծին ներգծած կանոնավոր վեցանկյան կողմն է", "Сторона правильного шестиугольника, вписанного в окружность длины 12 пи, равна"), [
          t("12", "12", "12"),
          t("3", "3", "3"),
          t("6", "6", "6"),
        ], 2),
        q(t("A rhombus whose diagonals are not perpendicular", "Շեղանկյունը, որի անկյունագծերն ուղղահայաց չեն,", "Ромб, диагонали которого не перпендикулярны,"), [
          t("does not exist, so a computation showing it means an error somewhere", "գոյություն չունի, ուստի դա ցույց տվող հաշվարկը նշանակում է, որ ինչ-որ տեղ սխալ կա", "не существует, поэтому вычисление, показывающее это, означает ошибку"),
          t("is a square", "քառակուսի է", "является квадратом"),
          t("has equal diagonals", "ունի հավասար անկյունագծեր", "имеет равные диагонали"),
        ], 0),
        q(t("The volume of a cone equals the volume of a cylinder of the same base and height", "Կոնի ծավալը նույն հիմքով և բարձրությամբ գլանի ծավալի", "Объём конуса составляет от объёма цилиндра с тем же основанием и высотой"), [
          t("divided by two", "կեսն է", "половину"),
          t("divided by three", "մեկ երրորդն է", "одну третью"),
          t("multiplied by three", "եռապատիկն է", "три раза больше"),
        ], 1),
        q(t("To prove a statement about a figure given without numbers, a good approach is", "Առանց թվերի տրված պատկերի մասին պնդում ապացուցելու լավ մոտեցումն է", "Чтобы доказать утверждение о фигуре, заданной без чисел, хороший подход —"), [
          t("to measure a careful drawing", "չափել ճշգրիտ գծագիրը", "измерить аккуратный чертёж"),
          t("to test it on one example", "ստուգել մեկ օրինակի վրա", "проверить его на одном примере"),
          t("to use vectors or a well chosen coordinate system", "օգտագործել վեկտորներ կամ հաջող ընտրված կոորդինատային համակարգ", "использовать векторы или удачно выбранную систему координат"),
        ], 2),
      ],
    ),
  ],
};
