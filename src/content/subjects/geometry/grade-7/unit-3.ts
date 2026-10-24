import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit3: UnitSeed = {
  title: t("Parallel lines", "Զուգահեռ ուղիղներ", "Параллельные прямые"),
  summary: t(
    "Tests for parallel lines, the parallel axiom, angles at parallel lines and problems that combine them.",
    "Զուգահեռության հայտանիշներ, զուգահեռների աքսիոմը, զուգահեռ ուղիղների անկյունները և դրանք համատեղող խնդիրներ։",
    "Признаки параллельности, аксиома параллельных, углы при параллельных прямых и задачи на их сочетание.",
  ),
  lessons: [
    lesson(
      "parallel-definition",
      ["Definition and tests for parallel lines", "Սահմանում և զուգահեռության հայտանիշներ", "Определение и признаки параллельности"],
      {
        en: ["Name the angles formed by two lines and a transversal", "State the tests for parallel lines", "Use the tests to prove lines parallel"],
        hy: ["Անվանել երկու ուղղի և հատողի կազմած անկյունները", "Ձևակերպել զուգահեռության հայտանիշները", "Հայտանիշներով ապացուցել ուղիղների զուգահեռությունը"],
        ru: ["Называть углы, образованные двумя прямыми и секущей", "Формулировать признаки параллельности", "Доказывать параллельность прямых с помощью признаков"],
      },
      {
        en: `## Parallel lines

Two lines in a plane that do **not** meet are **parallel**: $a \\parallel b$. Segments and rays are parallel if they lie on parallel lines.

## Angles at a transversal

A line $c$ crossing lines $a$ and $b$ is a **transversal**. It forms eight angles, which come in named pairs:

| Pair | Where the angles are |
|---|---|
| **alternate** (interior) | between $a$ and $b$, on opposite sides of $c$ |
| **corresponding** | in the same position at the two crossing points |
| **co-interior** (same-side) | between $a$ and $b$, on the same side of $c$ |

## Tests for parallel lines

Lines $a$ and $b$ are parallel if, for a transversal:

1. a pair of **alternate** angles is equal; or
2. a pair of **corresponding** angles is equal; or
3. a pair of **co-interior** angles adds up to $180°$.

Also: two lines perpendicular to the same line are parallel.

*Idea of proof of test 1.* If the lines met at a point $C$, a triangle would appear, and the equal alternate angles would let us build a congruent triangle on the other side, giving a second common point. Two lines cannot share two points, so they do not meet.

### Example

Segments $AB$ and $CD$ cross at their common midpoint $O$. Then $\\triangle AOC = \\triangle BOD$ (SAS), so $\\angle CAO = \\angle DBO$. These are alternate angles for lines $AC$, $BD$ and transversal $AB$, so $AC \\parallel BD$.

### Exercises

1. Alternate angles are $47°$ and $47°$. Are the lines parallel?
2. Corresponding angles are $72°$ and $72°$. Are the lines parallel?
3. Co-interior angles are $115°$ and $65°$. Are the lines parallel?
4. Co-interior angles are $110°$ and $80°$. Are the lines parallel?
5. $a \\perp c$ and $b \\perp c$. How are $a$ and $b$ placed?
6. Alternate angles are $3x$ and $2x + 20°$, and the lines are parallel by test 1. Find the angles.
7. In quadrilateral $ABCD$, $\\angle A + \\angle B = 180°$. Which sides are parallel?
8. Segments $AB$ and $CD$ cross at their common midpoint $O$. Prove that $AC \\parallel BD$.

### Answers

1. Yes. 2. Yes. 3. Yes. 4. No. 5. Parallel. 6. $60°$ each. 7. $AD \\parallel BC$. 8. See the example.`,
        hy: `## Զուգահեռ ուղիղներ

Հարթության երկու ուղիղ, որոնք **չեն** հատվում, **զուգահեռ** են. $a \\parallel b$։ Հատվածները և ճառագայթները զուգահեռ են, եթե գտնվում են զուգահեռ ուղիղների վրա։

## Անկյուններ հատողի մոտ

$a$ և $b$ ուղիղները հատող $c$ ուղիղը **հատող** է։ Այն կազմում է ութ անկյուն, որոնք զույգերով ունեն անուններ.

| Զույգ | Որտեղ են անկյունները |
|---|---|
| **խաչադիր** (ներքին) | $a$-ի և $b$-ի միջև, $c$-ի տարբեր կողմերում |
| **համապատասխան** | հատման երկու կետերում նույն դիրքում |
| **միակողմանի** (ներքին) | $a$-ի և $b$-ի միջև, $c$-ի նույն կողմում |

## Զուգահեռության հայտանիշներ

$a$ և $b$ ուղիղները զուգահեռ են, եթե հատողի դեպքում.

1. **խաչադիր** անկյունների զույգը հավասար է, կամ
2. **համապատասխան** անկյունների զույգը հավասար է, կամ
3. **միակողմանի** անկյունների զույգի գումարը $180°$ է։

Նաև. միևնույն ուղղին ուղղահայաց երկու ուղիղ զուգահեռ են։

*Հայտանիշ 1-ի ապացույցի գաղափարը.* Եթե ուղիղները հատվեին $C$ կետում, կառաջանար եռանկյուն, և հավասար խաչադիր անկյունները թույլ կտային մյուս կողմում կառուցել հավասար եռանկյուն՝ ստանալով երկրորդ ընդհանուր կետ։ Երկու ուղիղ չեն կարող ունենալ երկու ընդհանուր կետ, ուրեմն չեն հատվում։

### Օրինակ

$AB$ և $CD$ հատվածները հատվում են իրենց ընդհանուր $O$ միջնակետում։ Ապա $\\triangle AOC = \\triangle BOD$ (առաջին հայտանիշ), ուրեմն $\\angle CAO = \\angle DBO$։ Սրանք խաչադիր անկյուններ են $AC$, $BD$ ուղիղների և $AB$ հատողի համար, ուրեմն $AC \\parallel BD$։

### Վարժություններ

1. Խաչադիր անկյունները $47°$ և $47°$ են։ Ուղիղները զուգահե՞ռ են։
2. Համապատասխան անկյունները $72°$ և $72°$ են։ Ուղիղները զուգահե՞ռ են։
3. Միակողմանի անկյունները $115°$ և $65°$ են։ Ուղիղները զուգահե՞ռ են։
4. Միակողմանի անկյունները $110°$ և $80°$ են։ Ուղիղները զուգահե՞ռ են։
5. $a \\perp c$ և $b \\perp c$։ Ինչպե՞ս են դասավորված $a$-ն և $b$-ն։
6. Խաչադիր անկյուններն են $3x$ և $2x + 20°$, և ուղիղները զուգահեռ են ըստ հայտանիշ 1-ի։ Գտիր անկյունները։
7. $ABCD$ քառանկյունում $\\angle A + \\angle B = 180°$։ Ո՞ր կողմերն են զուգահեռ։
8. $AB$ և $CD$ հատվածները հատվում են ընդհանուր $O$ միջնակետում։ Ապացուցիր, որ $AC \\parallel BD$։

### Պատասխաններ

1. Այո։ 2. Այո։ 3. Այո։ 4. Ոչ։ 5. Զուգահեռ են։ 6. $60°$-ական։ 7. $AD \\parallel BC$։ 8. Տես օրինակը։`,
        ru: `## Параллельные прямые

Две прямые на плоскости, которые **не** пересекаются, называются **параллельными**: $a \\parallel b$. Отрезки и лучи параллельны, если лежат на параллельных прямых.

## Углы при секущей

Прямая $c$, пересекающая прямые $a$ и $b$, — **секущая**. Она образует восемь углов, пары которых имеют названия:

| Пара | Где лежат углы |
|---|---|
| **накрест лежащие** | между $a$ и $b$, по разные стороны от $c$ |
| **соответственные** | в одинаковом положении в двух точках пересечения |
| **односторонние** | между $a$ и $b$, по одну сторону от $c$ |

## Признаки параллельности

Прямые $a$ и $b$ параллельны, если при секущей:

1. **накрест лежащие** углы равны; или
2. **соответственные** углы равны; или
3. сумма **односторонних** углов равна $180°$.

Также: две прямые, перпендикулярные третьей, параллельны.

*Идея доказательства признака 1.* Если бы прямые пересекались в точке $C$, получился бы треугольник, а равенство накрест лежащих углов позволило бы построить равный треугольник с другой стороны и получить вторую общую точку. Две прямые не могут иметь двух общих точек, значит они не пересекаются.

### Пример

Отрезки $AB$ и $CD$ пересекаются в общей середине $O$. Тогда $\\triangle AOC = \\triangle BOD$ (первый признак), значит $\\angle CAO = \\angle DBO$. Это накрест лежащие углы при прямых $AC$, $BD$ и секущей $AB$, поэтому $AC \\parallel BD$.

### Упражнения

1. Накрест лежащие углы $47°$ и $47°$. Параллельны ли прямые?
2. Соответственные углы $72°$ и $72°$. Параллельны ли прямые?
3. Односторонние углы $115°$ и $65°$. Параллельны ли прямые?
4. Односторонние углы $110°$ и $80°$. Параллельны ли прямые?
5. $a \\perp c$ и $b \\perp c$. Как расположены $a$ и $b$?
6. Накрест лежащие углы равны $3x$ и $2x + 20°$, и прямые параллельны по признаку 1. Найди углы.
7. В четырёхугольнике $ABCD$ $\\angle A + \\angle B = 180°$. Какие стороны параллельны?
8. Отрезки $AB$ и $CD$ пересекаются в общей середине $O$. Докажи, что $AC \\parallel BD$.

### Ответы

1. Да. 2. Да. 3. Да. 4. Нет. 5. Параллельны. 6. По $60°$. 7. $AD \\parallel BC$. 8. См. пример.`,
      },
      [
        q(t("Parallel lines in a plane…", "Հարթության զուգահեռ ուղիղները…", "Параллельные прямые на плоскости…"), [t("never meet", "երբեք չեն հատվում", "не пересекаются"), t("meet at a right angle", "հատվում են ուղիղ անկյան տակ", "пересекаются под прямым углом"), t("meet once", "հատվում են մեկ անգամ", "пересекаются один раз")], 0),
        q(t("If alternate angles are equal, the lines are…", "Եթե խաչադիր անկյունները հավասար են, ուղիղները…", "Если накрест лежащие углы равны, прямые…"), [t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("parallel", "զուգահեռ են", "параллельны"), t("nothing can be said", "ոչինչ ասել հնարավոր չէ", "ничего сказать нельзя")], 1),
        q(t("Co-interior angles are 115° and 65°. The lines are…", "Միակողմանի անկյունները 115° և 65° են։ Ուղիղները…", "Односторонние углы 115° и 65°. Прямые…"), [t("not parallel", "զուգահեռ չեն", "не параллельны"), t("perpendicular", "ուղղահայաց են", "перпендикулярны"), t("parallel", "զուգահեռ են", "параллельны")], 2),
        q(t("Two lines perpendicular to the same line…", "Միևնույն ուղղին ուղղահայաց երկու ուղիղ…", "Две прямые, перпендикулярные одной прямой,…"), [t("are parallel", "զուգահեռ են", "параллельны"), t("intersect", "հատվում են", "пересекаются"), t("are perpendicular", "ուղղահայաց են", "перпендикулярны")], 0),
        q(t("Co-interior angles are 110° and 80°. The lines are…", "Միակողմանի անկյունները 110° և 80° են։ Ուղիղները…", "Односторонние углы 110° и 80°. Прямые…"), [t("parallel", "զուգահեռ են", "параллельны"), t("not parallel", "զուգահեռ չեն", "не параллельны"), t("the same line", "նույն ուղիղն են", "совпадают")], 1),
        q(t("Equal alternate angles 3x and 2x + 20°. Each is…", "Հավասար խաչադիր անկյուններ՝ 3x և 2x + 20°։ Յուրաքանչյուրը…", "Равные накрест лежащие углы 3x и 2x + 20°. Каждый равен…"), [t("20°", "20° է", "20°"), t("40°", "40° է", "40°"), t("60°", "60° է", "60°")], 2),
      ],
    ),
    lesson(
      "parallel-axiom",
      ["The parallel axiom", "Զուգահեռների աքսիոմը", "Аксиома параллельных прямых"],
      {
        en: ["State the parallel axiom", "Derive its consequences", "Know the history of the fifth postulate"],
        hy: ["Ձևակերպել զուգահեռների աքսիոմը", "Դուրս բերել նրա հետևանքները", "Իմանալ հինգերորդ պոստուլատի պատմությունը"],
        ru: ["Формулировать аксиому параллельных", "Выводить её следствия", "Знать историю пятого постулата"],
      },
      {
        en: `## The axiom

Through a point not on a given line there is **exactly one** line parallel to it.

That a parallel exists can be proved (draw two perpendiculars). That there is **only one** cannot be proved from the other axioms, so it is taken as an axiom.

## Consequences

1. If a line meets one of two parallel lines, it meets the other too. *Otherwise there would be two parallels to the first line through the meeting point.*
2. Two lines parallel to a third line are parallel to each other. *If they met, there would be two parallels to the third line through the meeting point.*

## A little history

In Euclid's *Elements* (about 300 BC) this statement was the **fifth postulate**. For two thousand years mathematicians tried to prove it from the others. In the 1820s Nikolai Lobachevsky, and independently János Bolyai, showed that a consistent geometry exists in which **many** parallels pass through a point. This **non-Euclidean** geometry is used today in physics.

### Exercises

1. How many lines parallel to $a$ pass through a point $M$ not on $a$?
2. $a \\parallel b$ and line $c$ meets $a$. Does $c$ meet $b$?
3. $a \\parallel c$ and $b \\parallel c$. How are $a$ and $b$ placed?
4. Lines $b$ and $c$ pass through $M$ and are both parallel to $a$. What can you say about $b$ and $c$?
5. $M$ lies on line $a$. How many lines through $M$ are parallel to $a$, other than $a$ itself?
6. $a \\parallel b$ and $c$ is not parallel to $b$. Is $c$ parallel to $a$?
7. Who first built a geometry without this axiom?
8. Can three lines in a plane be pairwise parallel?

### Answers

1. One. 2. Yes. 3. Parallel. 4. They coincide. 5. None. 6. No: $c$ meets $b$, so it meets $a$. 7. Lobachevsky (and Bolyai). 8. Yes.`,
        hy: `## Աքսիոմը

Տրված ուղղի վրա չգտնվող կետով անցնում է նրան զուգահեռ **ճիշտ մեկ** ուղիղ։

Որ զուգահեռը գոյություն ունի, կարելի է ապացուցել (տանել երկու ուղղահայաց)։ Որ այն **միակն** է, հնարավոր չէ ապացուցել մյուս աքսիոմներից, ուստի այն ընդունվում է որպես աքսիոմ։

## Հետևանքներ

1. Եթե ուղիղը հատում է երկու զուգահեռ ուղիղներից մեկը, այն հատում է նաև մյուսը։ *Հակառակ դեպքում հատման կետով կանցնեին առաջին ուղղին զուգահեռ երկու ուղիղ։*
2. Երրորդ ուղղին զուգահեռ երկու ուղիղ զուգահեռ են իրար։ *Եթե նրանք հատվեին, հատման կետով կանցնեին երրորդ ուղղին զուգահեռ երկու ուղիղ։*

## Մի փոքր պատմություն

Էվկլիդեսի «Սկզբունքներում» (մոտ մ.թ.ա. 300 թ.) այս պնդումը **հինգերորդ պոստուլատն** էր։ Երկու հազար տարի մաթեմատիկոսները փորձում էին այն ապացուցել մյուսներից։ 1820-ական թվականներին Նիկոլայ Լոբաչևսկին, և նրանից անկախ Յանոշ Բոլյայը, ցույց տվեցին, որ գոյություն ունի հակասություն չպարունակող երկրաչափություն, որտեղ կետով անցնում են **շատ** զուգահեռներ։ Այդ **ոչ էվկլիդեսյան** երկրաչափությունն այսօր կիրառվում է ֆիզիկայում։

### Վարժություններ

1. $a$-ի վրա չգտնվող $M$ կետով քանի՞ ուղիղ է անցնում $a$-ին զուգահեռ։
2. $a \\parallel b$, և $c$ ուղիղը հատում է $a$-ն։ $c$-ն հատո՞ւմ է $b$-ն։
3. $a \\parallel c$ և $b \\parallel c$։ Ինչպե՞ս են դասավորված $a$-ն և $b$-ն։
4. $b$ և $c$ ուղիղներն անցնում են $M$-ով և երկուսն էլ զուգահեռ են $a$-ին։ Ի՞նչ կարելի է ասել $b$-ի և $c$-ի մասին։
5. $M$-ը $a$ ուղղի վրա է։ $M$-ով քանի՞ ուղիղ է անցնում $a$-ին զուգահեռ՝ բացի հենց $a$-ից։
6. $a \\parallel b$, և $c$-ն զուգահեռ չէ $b$-ին։ $c$-ն զուգահե՞ռ է $a$-ին։
7. Ո՞վ առաջինը կառուցեց երկրաչափություն առանց այս աքսիոմի։
8. Կարո՞ղ են հարթության երեք ուղիղ լինել զույգ առ զույգ զուգահեռ։

### Պատասխաններ

1. Մեկ։ 2. Այո։ 3. Զուգահեռ են։ 4. Համընկնում են։ 5. Ոչ մի։ 6. Ոչ. $c$-ն հատում է $b$-ն, ուրեմն հատում է նաև $a$-ն։ 7. Լոբաչևսկին (և Բոլյայը)։ 8. Այո։`,
        ru: `## Аксиома

Через точку, не лежащую на данной прямой, проходит **только одна** прямая, параллельная данной.

То, что параллельная существует, можно доказать (провести два перпендикуляра). То, что она **единственная**, из остальных аксиом не доказывается, поэтому принимается как аксиома.

## Следствия

1. Если прямая пересекает одну из двух параллельных прямых, то она пересекает и другую. *Иначе через точку пересечения проходили бы две прямые, параллельные первой.*
2. Две прямые, параллельные третьей, параллельны. *Если бы они пересекались, через точку пересечения проходили бы две прямые, параллельные третьей.*

## Немного истории

В «Началах» Евклида (около 300 г. до н. э.) это утверждение было **пятым постулатом**. Две тысячи лет математики пытались вывести его из остальных. В 1820-х годах Николай Лобачевский и независимо от него Янош Бойяи показали, что существует непротиворечивая геометрия, в которой через точку проходит **много** параллельных. Эта **неевклидова** геометрия применяется сегодня в физике.

### Упражнения

1. Сколько прямых, параллельных $a$, проходит через точку $M$, не лежащую на $a$?
2. $a \\parallel b$, прямая $c$ пересекает $a$. Пересекает ли $c$ прямую $b$?
3. $a \\parallel c$ и $b \\parallel c$. Как расположены $a$ и $b$?
4. Прямые $b$ и $c$ проходят через $M$ и обе параллельны $a$. Что можно сказать о $b$ и $c$?
5. $M$ лежит на прямой $a$. Сколько прямых через $M$, кроме самой $a$, параллельны $a$?
6. $a \\parallel b$, а $c$ не параллельна $b$. Параллельна ли $c$ прямой $a$?
7. Кто первым построил геометрию без этой аксиомы?
8. Могут ли три прямые на плоскости быть попарно параллельными?

### Ответы

1. Одна. 2. Да. 3. Параллельны. 4. Они совпадают. 5. Ни одной. 6. Нет: $c$ пересекает $b$, значит пересекает и $a$. 7. Лобачевский (и Бойяи). 8. Да.`,
      },
      [
        q(t("Through a point not on a line there is … parallel to it.", "Ուղղի վրա չգտնվող կետով անցնում է նրան զուգահեռ …", "Через точку вне прямой проходит … параллельная ей."), [t("exactly one", "ճիշտ մեկ ուղիղ", "ровно одна прямая"), t("no line", "ոչ մի ուղիղ", "ни одной прямой"), t("two lines", "երկու ուղիղ", "две прямые")], 0),
        q(t("a ∥ c and b ∥ c. Then…", "a ∥ c և b ∥ c։ Ապա…", "a ∥ c и b ∥ c. Тогда…"), [t("a meets b", "a-ն հատում է b-ն", "a пересекает b"), t("a ∥ b", "a ∥ b", "a ∥ b"), t("a ⊥ b", "a ⊥ b", "a ⊥ b")], 1),
        q(t("a ∥ b and c meets a. Then c…", "a ∥ b, և c-ն հատում է a-ն։ Ապա c-ն…", "a ∥ b и c пересекает a. Тогда c…"), [t("is parallel to b", "զուգահեռ է b-ին", "параллельна b"), t("coincides with b", "համընկնում է b-ի հետ", "совпадает с b"), t("meets b", "հատում է b-ն", "пересекает b")], 2),
        q(t("A statement accepted without proof is…", "Առանց ապացուցման ընդունվող պնդումը…", "Утверждение, принимаемое без доказательства, —"), [t("a theorem", "թեորեմ է", "теорема"), t("an axiom", "աքսիոմ է", "аксиома"), t("a definition", "սահմանում է", "определение")], 1),
        q(t("Two lines through M both parallel to a…", "M-ով անցնող և a-ին զուգահեռ երկու ուղիղ…", "Две прямые через M, параллельные a,…"), [t("coincide", "համընկնում են", "совпадают"), t("are perpendicular", "ուղղահայաց են", "перпендикулярны"), t("meet a", "հատում են a-ն", "пересекают a")], 0),
        q(t("Non-Euclidean geometry was created by…", "Ոչ էվկլիդեսյան երկրաչափությունը ստեղծել է…", "Неевклидову геометрию создал…"), [t("Pythagoras", "Պյութագորասը", "Пифагор"), t("Euclid", "Էվկլիդեսը", "Евклид"), t("Lobachevsky", "Լոբաչևսկին", "Лобачевский")], 2),
      ],
    ),
    lesson(
      "parallel-properties",
      ["Properties of parallel lines", "Զուգահեռ ուղիղների հատկությունները", "Свойства параллельных прямых"],
      {
        en: ["State the converse theorems about angles at parallel lines", "Find all eight angles from one", "Solve problems with co-interior angles"],
        hy: ["Ձևակերպել զուգահեռ ուղիղներով կազմված անկյունների մասին հակադարձ թեորեմները", "Մեկ անկյունով գտնել բոլոր ութը", "Լուծել միակողմանի անկյուններով խնդիրներ"],
        ru: ["Формулировать обратные теоремы об углах при параллельных прямых", "Находить все восемь углов по одному", "Решать задачи с односторонними углами"],
      },
      {
        en: `## The theorems

The tests from the previous lessons said: *if* the angles are equal, *then* the lines are parallel. Now the converse statements, proved with the parallel axiom:

If two **parallel** lines are cut by a transversal, then

| Pair of angles | Property |
|---|---|
| alternate interior angles | equal |
| corresponding angles | equal |
| co-interior angles (same side) | sum $= 180°$ |

*Proof idea for alternate angles.* Suppose $\\angle 1 \\ne \\angle 2$. Through the point on $a$ draw the line $a_1$ making $\\angle 1 = \\angle 2$. By the test, $a_1 \\parallel b$. Then two different lines $a$ and $a_1$ pass through one point parallel to $b$, which contradicts the axiom.

## All eight angles from one

At two parallel lines the eight angles take only **two values**: an acute $\\alpha$ and the obtuse $180° - \\alpha$ (or all eight are $90°$).

*Example.* One angle is $65°$. Then four angles equal $65°$ and four equal $180° - 65° = 115°$.

## Corollary

If a line is perpendicular to one of two parallel lines, it is perpendicular to the other: the corresponding angle is also $90°$.

## Worked example

Co-interior angles differ by $40°$. Let the smaller be $x$:
$$x + (x + 40°) = 180°,\\quad 2x = 140°,\\quad x = 70°.$$
The angles are $70°$ and $110°$.

### Exercises

1. Parallel lines $a$ and $b$ are cut by $c$. One angle is $65°$. Find the other seven.
2. Co-interior angles differ by $40°$. Find them.
3. Co-interior angles are in the ratio $2 : 7$. Find them.
4. $c \\perp a$ and $a \\parallel b$. Find the angle between $c$ and $b$.
5. In quadrilateral $ABCD$, $AB \\parallel DC$ and $\\angle BAD = 50°$. Find $\\angle ADC$.
6. Two alternate angles at parallel lines add up to $150°$. Find each.
7. Prove that the bisectors of two co-interior angles at parallel lines are perpendicular.
8. Through vertex $B$ of triangle $ABC$ a line $m \\parallel AC$ is drawn. $\\angle A = 50°$, $\\angle C = 70°$. Find the angles that $m$ makes with $BA$ and $BC$, and find $\\angle B$.

### Answers

1. Three more angles of $65°$ and four of $115°$. 2. $70°$ and $110°$. 3. $40°$ and $140°$. 4. $90°$, so $c \\perp b$. 5. $130°$ (co-interior). 6. $75°$ each. 7. The halves add up to $180° : 2 = 90°$, so the third angle of the triangle they form is $90°$. 8. $50°$ and $70°$ (alternate angles), $\\angle B = 180° - 50° - 70° = 60°$.`,
        hy: `## Թեորեմները

Նախորդ դասերի հայտանիշներն ասում էին. *եթե* անկյունները հավասար են, *ապա* ուղիղները զուգահեռ են։ Այժմ հակադարձ պնդումները, որոնք ապացուցվում են զուգահեռության աքսիոմով։

Եթե երկու **զուգահեռ** ուղիղներ հատված են հատողով, ապա

| Անկյունների զույգ | Հատկություն |
|---|---|
| խաչադիր անկյուններ | հավասար են |
| համապատասխան անկյուններ | հավասար են |
| միակողմանի անկյուններ | գումարը $= 180°$ |

*Խաչադիր անկյունների ապացույցի գաղափարը։* Ենթադրենք $\\angle 1 \\ne \\angle 2$։ $a$-ի կետով տանենք $a_1$ ուղիղն այնպես, որ $\\angle 1 = \\angle 2$։ Ըստ հայտանիշի $a_1 \\parallel b$։ Ստացվում է, որ մեկ կետով անցնում են $b$-ին զուգահեռ երկու տարբեր ուղիղներ՝ $a$-ն և $a_1$-ը, ինչը հակասում է աքսիոմին։

## Ութ անկյուն՝ մեկով

Զուգահեռ ուղիղների մոտ ութ անկյունները ընդունում են միայն **երկու արժեք**՝ սուր $\\alpha$ և բութ $180° - \\alpha$ (կամ բոլոր ութը $90°$ են)։

*Օրինակ։* Անկյուններից մեկը $65°$ է։ Ապա չորս անկյուն հավասար է $65°$-ի, իսկ չորսը՝ $180° - 65° = 115°$-ի։

## Հետևանք

Եթե ուղիղն ուղղահայաց է երկու զուգահեռ ուղիղներից մեկին, ապա ուղղահայաց է նաև մյուսին. համապատասխան անկյունը նույնպես $90°$ է։

## Լուծված օրինակ

Միակողմանի անկյունների տարբերությունը $40°$ է։ Փոքրը նշանակենք $x$՝
$$x + (x + 40°) = 180°,\\quad 2x = 140°,\\quad x = 70°.$$
Անկյուններն են $70°$ և $110°$։

### Վարժություններ

1. $a$ և $b$ զուգահեռ ուղիղները հատված են $c$-ով։ Անկյուններից մեկը $65°$ է։ Գտե՛ք մյուս յոթը։
2. Միակողմանի անկյունների տարբերությունը $40°$ է։ Գտե՛ք դրանք։
3. Միակողմանի անկյունները հարաբերում են ինչպես $2 : 7$։ Գտե՛ք դրանք։
4. $c \\perp a$ և $a \\parallel b$։ Գտե՛ք $c$-ի և $b$-ի կազմած անկյունը։
5. $ABCD$ քառանկյունում $AB \\parallel DC$ և $\\angle BAD = 50°$։ Գտե՛ք $\\angle ADC$-ն։
6. Զուգահեռ ուղիղների մոտ երկու խաչադիր անկյունների գումարը $150°$ է։ Գտե՛ք յուրաքանչյուրը։
7. Ապացուցե՛ք, որ զուգահեռ ուղիղների մոտ երկու միակողմանի անկյունների կիսորդներն ուղղահայաց են։
8. $ABC$ եռանկյան $B$ գագաթով տարված է $m \\parallel AC$ ուղիղը։ $\\angle A = 50°$, $\\angle C = 70°$։ Գտե՛ք $m$-ի և $BA$-ի, $m$-ի և $BC$-ի կազմած անկյունները, ինչպես նաև $\\angle B$-ն։

### Պատասխաններ

1. Եվս երեք անկյուն $65°$ է, չորսը՝ $115°$։ 2. $70°$ և $110°$։ 3. $40°$ և $140°$։ 4. $90°$, այսինքն $c \\perp b$։ 5. $130°$ (միակողմանի)։ 6. Յուրաքանչյուրը $75°$։ 7. Կեսերի գումարը $180° : 2 = 90°$ է, ուստի առաջացած եռանկյան երրորդ անկյունը $90°$ է։ 8. $50°$ և $70°$ (խաչադիր), $\\angle B = 180° - 50° - 70° = 60°$։`,
        ru: `## Теоремы

Признаки из прошлых уроков говорили: *если* углы равны, *то* прямые параллельны. Теперь обратные утверждения, которые доказываются с помощью аксиомы параллельных.

Если две **параллельные** прямые пересечены секущей, то

| Пара углов | Свойство |
|---|---|
| накрест лежащие углы | равны |
| соответственные углы | равны |
| односторонние углы | сумма $= 180°$ |

*Идея доказательства для накрест лежащих углов.* Пусть $\\angle 1 \\ne \\angle 2$. Через точку на $a$ проведём прямую $a_1$ так, чтобы $\\angle 1 = \\angle 2$. По признаку $a_1 \\parallel b$. Тогда через одну точку проходят две различные прямые $a$ и $a_1$, параллельные $b$, что противоречит аксиоме.

## Все восемь углов по одному

При параллельных прямых восемь углов принимают только **два значения**: острый $\\alpha$ и тупой $180° - \\alpha$ (или все восемь равны $90°$).

*Пример.* Один угол равен $65°$. Тогда четыре угла равны $65°$, а четыре равны $180° - 65° = 115°$.

## Следствие

Если прямая перпендикулярна одной из двух параллельных прямых, то она перпендикулярна и другой: соответственный угол тоже равен $90°$.

## Разобранный пример

Односторонние углы отличаются на $40°$. Обозначим меньший через $x$:
$$x + (x + 40°) = 180°,\\quad 2x = 140°,\\quad x = 70°.$$
Углы равны $70°$ и $110°$.

### Упражнения

1. Параллельные прямые $a$ и $b$ пересечены прямой $c$. Один из углов равен $65°$. Найдите остальные семь.
2. Односторонние углы отличаются на $40°$. Найдите их.
3. Односторонние углы относятся как $2 : 7$. Найдите их.
4. $c \\perp a$ и $a \\parallel b$. Найдите угол между $c$ и $b$.
5. В четырёхугольнике $ABCD$ $AB \\parallel DC$ и $\\angle BAD = 50°$. Найдите $\\angle ADC$.
6. Сумма двух накрест лежащих углов при параллельных прямых равна $150°$. Найдите каждый.
7. Докажите, что биссектрисы двух односторонних углов при параллельных прямых перпендикулярны.
8. Через вершину $B$ треугольника $ABC$ проведена прямая $m \\parallel AC$. $\\angle A = 50°$, $\\angle C = 70°$. Найдите углы, которые $m$ образует с $BA$ и $BC$, и найдите $\\angle B$.

### Ответы

1. Ещё три угла по $65°$ и четыре по $115°$. 2. $70°$ и $110°$. 3. $40°$ и $140°$. 4. $90°$, то есть $c \\perp b$. 5. $130°$ (односторонние). 6. По $75°$. 7. Половинки в сумме дают $180° : 2 = 90°$, поэтому третий угол образовавшегося треугольника равен $90°$. 8. $50°$ и $70°$ (накрест лежащие), $\\angle B = 180° - 50° - 70° = 60°$.`,
      },
      [
        q(t("If a ∥ b, corresponding angles are…", "Եթե a ∥ b, համապատասխան անկյունները…", "Если a ∥ b, соответственные углы…"), [t("equal", "հավասար են", "равны"), t("add up to 180°", "գումարում տալիս են 180°", "в сумме дают 180°"), t("add up to 90°", "գումարում տալիս են 90°", "в сумме дают 90°")], 0),
        q(t("At parallel lines one angle is 65°. Each of the other angles is…", "Զուգահեռ ուղիղների մոտ մի անկյունը 65° է։ Մյուս անկյուններից յուրաքանչյուրը…", "При параллельных прямых один угол 65°. Каждый из остальных углов равен…"), [t("65°", "65° է", "65°"), t("115°", "115° է", "115°"), t("65° or 115°", "65° կամ 115° է", "65° или 115°")], 2),
        q(t("One co-interior angle is 70°. The other is…", "Միակողմանի անկյուններից մեկը 70° է։ Մյուսը…", "Один из односторонних углов 70°. Другой равен…"), [t("70°", "70° է", "70°"), t("110°", "110° է", "110°"), t("20°", "20° է", "20°")], 1),
        q(t("c ⊥ a and a ∥ b. Then…", "c ⊥ a և a ∥ b։ Ապա…", "c ⊥ a и a ∥ b. Тогда…"), [t("c ⊥ b", "c ⊥ b", "c ⊥ b"), t("c ∥ b", "c ∥ b", "c ∥ b"), t("c does not meet b", "c-ն չի հատում b-ն", "c не пересекает b")], 0),
        q(t("Bisectors of two co-interior angles at parallel lines meet at…", "Զուգահեռ ուղիղների մոտ միակողմանի անկյունների կիսորդները հատվում են…", "Биссектрисы односторонних углов при параллельных прямых пересекаются под углом…"), [t("45°", "45° անկյան տակ", "45°"), t("90°", "90° անկյան տակ", "90°"), t("180°", "180° անկյան տակ", "180°")], 1),
        q(t("Co-interior angles are in the ratio 2 : 7. The smaller is…", "Միակողմանի անկյունները հարաբերում են ինչպես 2 : 7։ Փոքրը…", "Односторонние углы относятся как 2 : 7. Меньший равен…"), [t("20°", "20° է", "20°"), t("70°", "70° է", "70°"), t("40°", "40° է", "40°")], 2),
      ],
    ),
    lesson(
      "parallel-problems",
      ["Problems on parallel lines", "Խնդիրներ զուգահեռ ուղիղների վերաբերյալ", "Задачи на параллельные прямые"],
      {
        en: ["Use an auxiliary parallel line", "Combine angle properties with congruent triangles", "Set up equations for angles"],
        hy: ["Օգտագործել օժանդակ զուգահեռ ուղիղ", "Համատեղել անկյունների հատկությունները հավասար եռանկյունների հետ", "Կազմել հավասարումներ անկյունների համար"],
        ru: ["Использовать вспомогательную параллельную прямую", "Сочетать свойства углов с равенством треугольников", "Составлять уравнения для углов"],
      },
      {
        en: `## Plan for a problem

1. Mark every pair of parallel lines and the transversals.
2. Mark equal angles (alternate, corresponding, vertical) with the same arc.
3. If the lines are "far apart", draw an **auxiliary line** parallel to them.
4. Denote an unknown angle by $x$ and write an equation.

## The "zigzag" (broken line)

$AB \\parallel CD$, point $E$ lies between the lines. $\\angle BAE = \\alpha$, $\\angle DCE = \\beta$. Then
$$\\angle AEC = \\alpha + \\beta.$$
*Why:* through $E$ draw $EF \\parallel AB$. Then also $EF \\parallel CD$. The angle $AEC$ splits into two parts equal to $\\alpha$ and $\\beta$ as alternate angles.

*Example.* $\\alpha = 30°$, $\\beta = 45°$, so $\\angle AEC = 75°$.

## Parallel lines and congruent triangles

Alternate angles give equal angles for the congruence tests.

*Example.* $AB \\parallel CD$ and $AB = CD$. Segments $AD$ and $BC$ meet at $O$. Triangles $AOB$ and $DOC$ have $AB = CD$, $\\angle OAB = \\angle ODC$ and $\\angle OBA = \\angle OCD$ (alternate). By the second test they are congruent, so $AO = OD$ and $BO = OC$: $O$ is the midpoint of both segments.

### Exercises

1. In a zigzag, $\\angle BAE = 30°$ and $\\angle DCE = 45°$. Find $\\angle AEC$.
2. In a zigzag, $\\angle AEC = 100°$ and $\\angle BAE = 40°$. Find $\\angle DCE$.
3. $AB \\parallel CD$, $AB = CD$, and $AD$ meets $BC$ at $O$. Prove that $O$ is the midpoint of $AD$.
4. In triangle $ABC$, $D$ lies on $AB$ and $E$ on $BC$, with $DE \\parallel AC$. $\\angle BDE = 70°$ and $\\angle BED = 50°$. Find $\\angle A$, $\\angle C$ and $\\angle B$.
5. Corresponding angles at parallel lines are $3x$ and $x + 40°$. Find the angle.
6. Prove that a line parallel to the base of an isosceles triangle cuts off an isosceles triangle.
7. Co-interior angles satisfy $\\angle 1 = 4 \\cdot \\angle 2$. Find them.
8. One of the angles at two parallel lines and a transversal is $120°$. Find the acute angles.

### Answers

1. $75°$. 2. $60°$. 3. Triangles $AOB$ and $DOC$ are congruent by side and two angles, so $AO = OD$. 4. $\\angle A = 70°$, $\\angle C = 50°$ (corresponding), $\\angle B = 60°$. 5. $3x = x + 40°$, $x = 20°$, the angle is $60°$. 6. The new base angles equal the old ones as corresponding angles, and those are equal. 7. $144°$ and $36°$. 8. $60°$.`,
        hy: `## Խնդրի լուծման պլան

1. Նշե՛ք զուգահեռ ուղիղների բոլոր զույգերը և հատողները։
2. Հավասար անկյունները (խաչադիր, համապատասխան, հակադիր) նշե՛ք միևնույն աղեղով։
3. Եթե ուղիղները «հեռու» են, տարե՛ք նրանց զուգահեռ **օժանդակ ուղիղ**։
4. Անհայտ անկյունը նշանակե՛ք $x$-ով և կազմե՛ք հավասարում։

## «Զիգզագ» (բեկյալ)

$AB \\parallel CD$, $E$ կետը գտնվում է ուղիղների միջև։ $\\angle BAE = \\alpha$, $\\angle DCE = \\beta$։ Ապա
$$\\angle AEC = \\alpha + \\beta.$$
*Ինչու։* $E$-ով տանենք $EF \\parallel AB$։ Ապա նաև $EF \\parallel CD$։ $AEC$ անկյունը բաժանվում է երկու մասի, որոնք որպես խաչադիր անկյուններ հավասար են $\\alpha$-ին և $\\beta$-ին։

*Օրինակ։* $\\alpha = 30°$, $\\beta = 45°$, ուստի $\\angle AEC = 75°$։

## Զուգահեռ ուղիղներ և հավասար եռանկյուններ

Խաչադիր անկյունները տալիս են հավասարության հայտանիշների համար անհրաժեշտ հավասար անկյունները։

*Օրինակ։* $AB \\parallel CD$ և $AB = CD$։ $AD$ և $BC$ հատվածները հատվում են $O$ կետում։ $AOB$ և $DOC$ եռանկյուններում $AB = CD$, $\\angle OAB = \\angle ODC$ և $\\angle OBA = \\angle OCD$ (խաչադիր)։ Ըստ երկրորդ հայտանիշի դրանք հավասար են, ուստի $AO = OD$ և $BO = OC$. $O$-ն երկու հատվածների միջնակետն է։

### Վարժություններ

1. Զիգզագում $\\angle BAE = 30°$ և $\\angle DCE = 45°$։ Գտե՛ք $\\angle AEC$-ն։
2. Զիգզագում $\\angle AEC = 100°$ և $\\angle BAE = 40°$։ Գտե՛ք $\\angle DCE$-ն։
3. $AB \\parallel CD$, $AB = CD$, $AD$-ն հատում է $BC$-ն $O$ կետում։ Ապացուցե՛ք, որ $O$-ն $AD$-ի միջնակետն է։
4. $ABC$ եռանկյունում $D$-ն $AB$-ի վրա է, $E$-ն՝ $BC$-ի, և $DE \\parallel AC$։ $\\angle BDE = 70°$, $\\angle BED = 50°$։ Գտե՛ք $\\angle A$-ն, $\\angle C$-ն և $\\angle B$-ն։
5. Զուգահեռ ուղիղների մոտ համապատասխան անկյուններն են $3x$ և $x + 40°$։ Գտե՛ք անկյունը։
6. Ապացուցե՛ք, որ հավասարասրուն եռանկյան հիմքին զուգահեռ ուղիղն անջատում է հավասարասրուն եռանկյուն։
7. Միակողմանի անկյունների համար $\\angle 1 = 4 \\cdot \\angle 2$։ Գտե՛ք դրանք։
8. Երկու զուգահեռ ուղիղների և հատողի կազմած անկյուններից մեկը $120°$ է։ Գտե՛ք սուր անկյունները։

### Պատասխաններ

1. $75°$։ 2. $60°$։ 3. $AOB$ և $DOC$ եռանկյունները հավասար են ըստ կողմի և երկու անկյան, ուստի $AO = OD$։ 4. $\\angle A = 70°$, $\\angle C = 50°$ (համապատասխան), $\\angle B = 60°$։ 5. $3x = x + 40°$, $x = 20°$, անկյունը $60°$ է։ 6. Նոր հիմքին առընթեր անկյունները որպես համապատասխան անկյուններ հավասար են հին անկյուններին, իսկ դրանք իրար հավասար են։ 7. $144°$ և $36°$։ 8. $60°$։`,
        ru: `## План решения задачи

1. Отметьте все пары параллельных прямых и секущие.
2. Равные углы (накрест лежащие, соответственные, вертикальные) отметьте одинаковыми дугами.
3. Если прямые «далеко», проведите параллельную им **вспомогательную прямую**.
4. Обозначьте неизвестный угол через $x$ и составьте уравнение.

## «Зигзаг» (ломаная)

$AB \\parallel CD$, точка $E$ лежит между прямыми. $\\angle BAE = \\alpha$, $\\angle DCE = \\beta$. Тогда
$$\\angle AEC = \\alpha + \\beta.$$
*Почему:* через $E$ проведём $EF \\parallel AB$. Тогда и $EF \\parallel CD$. Угол $AEC$ делится на две части, равные $\\alpha$ и $\\beta$ как накрест лежащие углы.

*Пример.* $\\alpha = 30°$, $\\beta = 45°$, значит $\\angle AEC = 75°$.

## Параллельные прямые и равные треугольники

Накрест лежащие углы дают равные углы для признаков равенства.

*Пример.* $AB \\parallel CD$ и $AB = CD$. Отрезки $AD$ и $BC$ пересекаются в точке $O$. В треугольниках $AOB$ и $DOC$: $AB = CD$, $\\angle OAB = \\angle ODC$ и $\\angle OBA = \\angle OCD$ (накрест лежащие). По второму признаку они равны, поэтому $AO = OD$ и $BO = OC$: $O$ — середина обоих отрезков.

### Упражнения

1. В зигзаге $\\angle BAE = 30°$ и $\\angle DCE = 45°$. Найдите $\\angle AEC$.
2. В зигзаге $\\angle AEC = 100°$ и $\\angle BAE = 40°$. Найдите $\\angle DCE$.
3. $AB \\parallel CD$, $AB = CD$, $AD$ пересекает $BC$ в точке $O$. Докажите, что $O$ — середина $AD$.
4. В треугольнике $ABC$ точка $D$ лежит на $AB$, точка $E$ на $BC$, причём $DE \\parallel AC$. $\\angle BDE = 70°$, $\\angle BED = 50°$. Найдите $\\angle A$, $\\angle C$ и $\\angle B$.
5. Соответственные углы при параллельных прямых равны $3x$ и $x + 40°$. Найдите угол.
6. Докажите, что прямая, параллельная основанию равнобедренного треугольника, отсекает равнобедренный треугольник.
7. Для односторонних углов $\\angle 1 = 4 \\cdot \\angle 2$. Найдите их.
8. Один из углов, образованных двумя параллельными прямыми и секущей, равен $120°$. Найдите острые углы.

### Ответы

1. $75°$. 2. $60°$. 3. Треугольники $AOB$ и $DOC$ равны по стороне и двум углам, значит $AO = OD$. 4. $\\angle A = 70°$, $\\angle C = 50°$ (соответственные), $\\angle B = 60°$. 5. $3x = x + 40°$, $x = 20°$, угол равен $60°$. 6. Новые углы при основании равны старым как соответственные, а те равны между собой. 7. $144°$ и $36°$. 8. $60°$.`,
      },
      [
        q(t("Zigzag: the angles at A and C are 30° and 45°. ∠AEC = ?", "Զիգզագ. A-ի և C-ի մոտ անկյուններն են 30° և 45°։ ∠AEC = ?", "Зигзаг: углы при A и C равны 30° и 45°. ∠AEC = ?"), [t("75°", "75°", "75°"), t("15°", "15°", "15°"), t("105°", "105°", "105°")], 0),
        q(t("Zigzag: ∠AEC = 100°, the angle at A is 40°. The angle at C is…", "Զիգզագ. ∠AEC = 100°, A-ի մոտ անկյունը 40° է։ C-ի մոտ անկյունը…", "Зигзаг: ∠AEC = 100°, угол при A равен 40°. Угол при C равен…"), [t("140°", "140° է", "140°"), t("60°", "60° է", "60°"), t("40°", "40° է", "40°")], 1),
        q(t("A line parallel to the base of an isosceles triangle cuts off a triangle that is…", "Հավասարասրուն եռանկյան հիմքին զուգահեռ ուղիղն անջատում է եռանկյուն, որը…", "Прямая, параллельная основанию равнобедренного треугольника, отсекает треугольник, который…"), [t("right", "ուղղանկյուն է", "прямоугольный"), t("scalene", "անհավասարակողմ է", "разносторонний"), t("isosceles", "հավասարասրուն է", "равнобедренный")], 2),
        q(t("Corresponding angles are 3x and x + 40°. The angle is…", "Համապատասխան անկյուններն են 3x և x + 40°։ Անկյունը…", "Соответственные углы равны 3x и x + 40°. Угол равен…"), [t("60°", "60° է", "60°"), t("20°", "20° է", "20°"), t("80°", "80° է", "80°")], 0),
        q(t("Co-interior angles with ∠1 = 4·∠2. ∠1 = ?", "Միակողմանի անկյուններ, ∠1 = 4·∠2։ ∠1 = ?", "Односторонние углы, ∠1 = 4·∠2. ∠1 = ?"), [t("120°", "120°", "120°"), t("144°", "144°", "144°"), t("36°", "36°", "36°")], 1),
        q(t("One angle at parallel lines is 120°. The acute angles are…", "Զուգահեռ ուղիղների մոտ մի անկյունը 120° է։ Սուր անկյունները…", "Один угол при параллельных прямых 120°. Острые углы равны…"), [t("120°", "120° են", "120°"), t("70°", "70° են", "70°"), t("60°", "60° են", "60°")], 2),
      ],
    ),
  ],
};
