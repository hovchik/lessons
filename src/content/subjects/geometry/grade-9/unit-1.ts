import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("Vectors", "Վեկտորներ", "Векторы"),
  summary: t("The idea of a vector, equal and collinear vectors, addition and subtraction, multiplication by a number, decomposition and applications.", "Վեկտորի գաղափարը, հավասար և կոլինեար վեկտորներ, գումարում և հանում, թվով բազմապատկում, վերլուծում և կիրառություններ։", "Понятие вектора, равные и коллинеарные векторы, сложение и вычитание, умножение на число, разложение и применения."),
  lessons: [
    lesson(
      "vector-concept",
      ["Vectors: equality and collinearity", "Վեկտորներ․ հավասարություն և կոլինեարություն", "Понятие вектора, равенство и коллинеарность"],
      {
        en: ["Tell a vector from a segment and use the notation", "Find the length of a vector and recognise the zero vector", "Decide when two vectors are equal, collinear or opposite"],
        hy: ["Տարբերել վեկտորը հատվածից և օգտվել նշանակումից", "Գտնել վեկտորի երկարությունը և ճանաչել զրոյական վեկտորը", "Որոշել՝ երբ են երկու վեկտոր հավասար, կոլինեար կամ հակադիր"],
        ru: ["Отличать вектор от отрезка и пользоваться обозначением", "Находить длину вектора и узнавать нулевой вектор", "Определять, когда два вектора равны, коллинеарны или противоположны"],
      },
      {
        en: `## A segment with a direction

Some quantities need only a number: length, mass, temperature. Others need a direction as well: displacement, velocity, force. For those, geometry uses vectors.

> A **vector** is a segment on which one end point is chosen as the beginning and the other as the end.

A vector from $A$ to $B$ is written $\\overrightarrow{AB}$, and drawn as an arrow from $A$ to $B$. A single small letter is also used: $\\vec{a}$, $\\vec{b}$.

> The **length**, or **modulus**, of a vector is the length of the segment, written $|\\overrightarrow{AB}|$.

If the beginning and the end are the same point, the vector is the **zero vector** $\\vec{0}$; its length is $0$ and it has no direction.

## Equal vectors

> Two non-zero vectors are **collinear** if they lie on the same line or on parallel lines. Collinear vectors are **co-directed** when they point the same way and **oppositely directed** when they point opposite ways.
>
> Two vectors are **equal** if they are co-directed and have the same length.

So a vector does not have a fixed place: it can be moved parallel to itself, and it stays the same vector. From any point exactly one vector equal to a given one can be drawn.

**Example 1.** In a parallelogram $ABCD$, $\\overrightarrow{AB} = \\overrightarrow{DC}$, because $AB \\parallel DC$ and $AB = DC$ and both point the same way. But $\\overrightarrow{AB} \\ne \\overrightarrow{CD}$: these two are opposite.

**Example 2.** The vectors $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ have equal lengths but opposite directions, so they are not equal. The second is written $-\\overrightarrow{AB}$.

**Example 3.** In a square with side $6$ cm the diagonal vector has length $6\\sqrt{2} \\approx 8{.}5$ cm, by the Pythagorean theorem.

## Where vectors are used

| Quantity | Needs a direction? |
|---|---|
| mass, time, area | no |
| displacement, velocity | yes |
| force, acceleration | yes |

A boat crossing a river and the current acting on it are both described by vectors, and the result of the two is found by adding them, as the next lesson shows.

### Exercises

1. Which of these need a direction: temperature, force, volume, velocity?
2. In a parallelogram $ABCD$ name a vector equal to $\\overrightarrow{BC}$.
3. In the same parallelogram name the vector opposite to $\\overrightarrow{AB}$.
4. Find the length of $\\overrightarrow{AB}$ if $A$ and $B$ are the ends of a diagonal of a rectangle with sides $3$ cm and $4$ cm.
5. Are the vectors $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ collinear? Are they equal?
6. How many vectors with different directions can be drawn along one line?
7. In a regular hexagon $ABCDEF$ name a vector equal to $\\overrightarrow{AB}$.
8. What is the length of the zero vector?

### Answers

1. Force and velocity.
2. $\\overrightarrow{AD}$.
3. $\\overrightarrow{BA}$, which equals $\\overrightarrow{CD}$.
4. $5$ cm.
5. Collinear, but not equal: they are opposite.
6. Two.
7. $\\overrightarrow{FE}$.
8. Zero.`,
        hy: `## Ուղղություն ունեցող հատված

Որոշ մեծությունների պետք է միայն թիվ՝ երկարություն, զանգված, ջերմաստիճան։ Ուրիշներին պետք է նաև ուղղություն՝ տեղափոխություն, արագություն, ուժ։ Նրանց համար երկրաչափությունն օգտագործում է վեկտորներ։

> **Վեկտոր** է կոչվում այն հատվածը, որի ծայրակետերից մեկն ընտրված է որպես սկիզբ, իսկ մյուսը՝ որպես վերջ։

$A$-ից $B$ վեկտորը գրվում է $\\overrightarrow{AB}$ և գծվում որպես $A$-ից $B$ սլաք։ Օգտագործվում է նաև մեկ փոքր տառ՝ $\\vec{a}$, $\\vec{b}$։

> Վեկտորի **երկարություն**, կամ **մոդուլ**, է կոչվում հատվածի երկարությունը, որը գրվում է $|\\overrightarrow{AB}|$։

Եթե սկիզբն ու վերջը նույն կետն են, վեկտորը **զրոյական վեկտորն** է՝ $\\vec{0}$; նրա երկարությունը $0$ է, և ուղղություն չունի։

## Հավասար վեկտորներ

> Երկու ոչ զրոյական վեկտոր **կոլինեար** են, եթե ընկած են նույն ուղղի վրա կամ զուգահեռ ուղիղների վրա։ Կոլինեար վեկտորները **համուղղված** են, երբ նույն կողմն են ցույց տալիս, և **հակուղղված**՝ երբ հակառակ կողմերը։
>
> Երկու վեկտոր **հավասար** են, եթե համուղղված են և ունեն նույն երկարությունը։

Ուստի վեկտորը ֆիքսված տեղ չունի. այն կարելի է տեղափոխել ինքն իրեն զուգահեռ, և այն մնում է նույն վեկտորը։ Ցանկացած կետից կարելի է տանել տրվածին հավասար ուղիղ մեկ վեկտոր։

**Օրինակ 1։** $ABCD$ զուգահեռագծում $\\overrightarrow{AB} = \\overrightarrow{DC}$, քանի որ $AB \\parallel DC$, $AB = DC$, և երկուսն էլ նույն կողմն են ցույց տալիս։ Բայց $\\overrightarrow{AB} \\ne \\overrightarrow{CD}$. սրանք հակադիր են։

**Օրինակ 2։** $\\overrightarrow{AB}$ և $\\overrightarrow{BA}$ վեկտորներն ունեն հավասար երկարություններ, բայց հակառակ ուղղություններ, ուստի հավասար չեն։ Երկրորդը գրվում է $-\\overrightarrow{AB}$։

**Օրինակ 3։** $6$ սմ կողմով քառակուսում անկյունագծի վեկտորի երկարությունը $6\\sqrt{2} \\approx 8{,}5$ սմ է՝ ըստ Պյութագորասի թեորեմի։

## Որտեղ են կիրառվում վեկտորները

| Մեծություն | Ուղղություն պե՞տք է |
|---|---|
| զանգված, ժամանակ, մակերես | ոչ |
| տեղափոխություն, արագություն | այո |
| ուժ, արագացում | այո |

Գետն անցնող նավակը և նրա վրա ազդող հոսանքն երկուսն էլ նկարագրվում են վեկտորներով, իսկ երկուսի արդյունքը գտնվում է նրանց գումարելով, ինչպես ցույց է տալիս հաջորդ դասը։

### Վարժություններ

1. Նրանցից որո՞նց է ուղղություն պետք՝ ջերմաստիճան, ուժ, ծավալ, արագություն։
2. $ABCD$ զուգահեռագծում նշե՛ք $\\overrightarrow{BC}$-ին հավասար վեկտոր։
3. Նույն զուգահեռագծում նշե՛ք $\\overrightarrow{AB}$-ին հակադիր վեկտորը։
4. Գտե՛ք $\\overrightarrow{AB}$-ի երկարությունը, եթե $A$-ն և $B$-ն $3$ սմ և $4$ սմ կողմերով ուղղանկյան անկյունագծի ծայրերն են։
5. $\\overrightarrow{AB}$ և $\\overrightarrow{BA}$ վեկտորները կոլինեա՞ր են։ Հավասա՞ր են։
6. Մեկ ուղղի երկայնքով քանի՞ տարբեր ուղղությամբ վեկտոր կարելի է տանել։
7. $ABCDEF$ կանոնավոր վեցանկյունում նշե՛ք $\\overrightarrow{AB}$-ին հավասար վեկտոր։
8. Որքա՞ն է զրոյական վեկտորի երկարությունը։

### Պատասխաններ

1. Ուժին և արագությանը։
2. $\\overrightarrow{AD}$։
3. $\\overrightarrow{BA}$, որը հավասար է $\\overrightarrow{CD}$-ին։
4. $5$ սմ։
5. Կոլինեար են, բայց հավասար չեն. նրանք հակադիր են։
6. Երկու։
7. $\\overrightarrow{FE}$։
8. Զրո։`,
        ru: `## Отрезок с направлением

Некоторым величинам нужно только число: длина, масса, температура. Другим нужно ещё и направление: перемещение, скорость, сила. Для них геометрия использует векторы.

> **Вектором** называют отрезок, у которого один из концов выбран началом, а другой — концом.

Вектор из $A$ в $B$ записывают $\\overrightarrow{AB}$ и изображают стрелкой из $A$ в $B$. Используют и одну малую букву: $\\vec{a}$, $\\vec{b}$.

> **Длиной**, или **модулем**, вектора называют длину отрезка; её записывают $|\\overrightarrow{AB}|$.

Если начало и конец совпадают, вектор называют **нулевым** и обозначают $\\vec{0}$; его длина равна $0$, а направления у него нет.

## Равные векторы

> Два ненулевых вектора **коллинеарны**, если они лежат на одной прямой или на параллельных прямых. Коллинеарные векторы **сонаправлены**, когда указывают в одну сторону, и **противоположно направлены**, когда в разные.
>
> Два вектора **равны**, если они сонаправлены и имеют одинаковую длину.

Поэтому у вектора нет закреплённого места: его можно переносить параллельно самому себе, и он остаётся тем же вектором. От любой точки можно отложить ровно один вектор, равный данному.

**Пример 1.** В параллелограмме $ABCD$ выполняется $\\overrightarrow{AB} = \\overrightarrow{DC}$, так как $AB \\parallel DC$, $AB = DC$ и оба указывают в одну сторону. Но $\\overrightarrow{AB} \\ne \\overrightarrow{CD}$: эти два противоположны.

**Пример 2.** Векторы $\\overrightarrow{AB}$ и $\\overrightarrow{BA}$ имеют равные длины, но противоположные направления, поэтому они не равны. Второй записывают $-\\overrightarrow{AB}$.

**Пример 3.** В квадрате со стороной $6$ см длина вектора диагонали равна $6\\sqrt{2} \\approx 8{,}5$ см по теореме Пифагора.

## Где применяют векторы

| Величина | Нужно ли направление? |
|---|---|
| масса, время, площадь | нет |
| перемещение, скорость | да |
| сила, ускорение | да |

Лодку, пересекающую реку, и действующее на неё течение описывают векторами, а результат двух находят их сложением, как показывает следующий урок.

### Упражнения

1. Каким из этих величин нужно направление: температура, сила, объём, скорость?
2. В параллелограмме $ABCD$ назовите вектор, равный $\\overrightarrow{BC}$.
3. В том же параллелограмме назовите вектор, противоположный $\\overrightarrow{AB}$.
4. Найдите длину $\\overrightarrow{AB}$, если $A$ и $B$ — концы диагонали прямоугольника со сторонами $3$ см и $4$ см.
5. Коллинеарны ли векторы $\\overrightarrow{AB}$ и $\\overrightarrow{BA}$? Равны ли они?
6. Сколько различных по направлению векторов можно отложить вдоль одной прямой?
7. В правильном шестиугольнике $ABCDEF$ назовите вектор, равный $\\overrightarrow{AB}$.
8. Чему равна длина нулевого вектора?

### Ответы

1. Силе и скорости.
2. $\\overrightarrow{AD}$.
3. $\\overrightarrow{BA}$, который равен $\\overrightarrow{CD}$.
4. $5$ см.
5. Коллинеарны, но не равны: они противоположны.
6. Два.
7. $\\overrightarrow{FE}$.
8. Нулю.`,
      },
      [
        q(t("A vector is", "Վեկտորը", "Вектор — это"), [
          t("a segment with a chosen beginning and end", "հատված՝ ընտրված սկզբով և վերջով", "отрезок с выбранными началом и концом"),
          t("any segment", "ցանկացած հատված", "любой отрезок"),
          t("a straight line", "ուղիղ", "прямая"),
        ], 0),
        q(t("The length of the zero vector equals", "Զրոյական վեկտորի երկարությունը հավասար է", "Длина нулевого вектора равна"), [
          t("one", "մեկի", "единице"),
          t("zero", "զրոյի", "нулю"),
          t("it has no length", "երկարություն չունի", "у него нет длины"),
        ], 1),
        q(t("Two vectors are equal when they", "Երկու վեկտոր հավասար են, երբ նրանք", "Два вектора равны, когда они"), [
          t("have the same length", "ունեն նույն երկարությունը", "имеют одинаковую длину"),
          t("lie on one line", "ընկած են մեկ ուղղի վրա", "лежат на одной прямой"),
          t("are co-directed and have the same length", "համուղղված են և ունեն նույն երկարությունը", "сонаправлены и имеют одинаковую длину"),
        ], 2),
        q(t("In the parallelogram ABCD the vector AB equals", "ABCD զուգահեռագծում AB վեկտորը հավասար է", "В параллелограмме ABCD вектор AB равен"), [
          t("the vector DC", "DC վեկտորին", "вектору DC"),
          t("the vector CD", "CD վեկտորին", "вектору CD"),
          t("the vector BC", "BC վեկտորին", "вектору BC"),
        ], 0),
        q(t("Vectors AB and BA are", "AB և BA վեկտորները", "Векторы AB и BA"), [
          t("equal", "հավասար են", "равны"),
          t("collinear but not equal", "կոլինեար են, բայց հավասար չեն", "коллинеарны, но не равны"),
          t("not collinear", "կոլինեար չեն", "не коллинеарны"),
        ], 1),
        q(t("Which quantity does not need a direction?", "Ո՞ր մեծությանն ուղղություն պետք չէ", "Какой величине не нужно направление?"), [
          t("velocity", "արագությանը", "скорости"),
          t("force", "ուժին", "силе"),
          t("mass", "զանգվածին", "массе"),
        ], 2),
      ],
    ),
    lesson(
      "vector-addition",
      ["Adding and subtracting vectors", "Վեկտորների գումարում և հանում", "Сложение и вычитание векторов"],
      {
        en: ["Add two vectors by the triangle rule and the parallelogram rule", "Add several vectors by the polygon rule", "Subtract vectors and use the laws of addition"],
        hy: ["Գումարել երկու վեկտոր եռանկյան և զուգահեռագծի կանոններով", "Գումարել մի քանի վեկտոր բազմանկյան կանոնով", "Հանել վեկտորները և օգտվել գումարման օրենքներից"],
        ru: ["Складывать два вектора по правилу треугольника и параллелограмма", "Складывать несколько векторов по правилу многоугольника", "Вычитать векторы и пользоваться законами сложения"],
      },
      {
        en: `## The triangle rule

> **Triangle rule.** To add $\\vec{a}$ and $\\vec{b}$, draw $\\vec{a}$ from a point $A$ to a point $B$, then draw $\\vec{b}$ from $B$ to a point $C$. The vector $\\overrightarrow{AC}$ is the sum:
> $$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}.$$

The rule works for any two vectors, even collinear ones, and the sum does not depend on the starting point.

**Example 1.** A tourist walks $3$ km east and then $4$ km north. The two displacement vectors add to one displacement of length $\\sqrt{9 + 16} = 5$ km.

## The parallelogram rule

> **Parallelogram rule.** Draw $\\vec{a}$ and $\\vec{b}$ from the **same** point and complete the parallelogram. Its diagonal from that point is $\\vec{a} + \\vec{b}$.

The two rules always give the same answer; the parallelogram rule is handier for forces, the triangle rule for a chain of moves.

## The polygon rule

For several vectors, lay them end to beginning one after another; the sum is the vector from the first beginning to the last end.

**Example 2.** $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = \\overrightarrow{AD}$.

If the chain closes, that is the last end meets the first beginning, the sum is $\\vec{0}$. So in any triangle $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\vec{0}$.

## Laws of addition

$$\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}, \\qquad (\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c}), \\qquad \\vec{a} + \\vec{0} = \\vec{a}.$$

Vectors add exactly as numbers do, so brackets can be moved freely.

## Subtraction

> The **difference** $\\vec{a} - \\vec{b}$ is the vector that must be added to $\\vec{b}$ to give $\\vec{a}$. Equivalently $\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$.

Drawn from one point, $\\vec{a}$ and $\\vec{b}$ give the difference as the vector from the end of $\\vec{b}$ to the end of $\\vec{a}$.

A rule worth remembering: for any point $O$,
$$\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}.$$

**Example 3.** In a parallelogram $ABCD$ with $\\overrightarrow{AB} = \\vec{a}$ and $\\overrightarrow{AD} = \\vec{b}$, the diagonals are $\\overrightarrow{AC} = \\vec{a} + \\vec{b}$ and $\\overrightarrow{DB} = \\vec{a} - \\vec{b}$.

**Example 4.** Two forces of $6$ N and $8$ N act on a body at a right angle. Their resultant has length $\\sqrt{36 + 64} = 10$ N. If they acted along one line in the same direction the resultant would be $14$ N, and in opposite directions $2$ N.

### Exercises

1. Simplify $\\overrightarrow{MN} + \\overrightarrow{NK}$.
2. Simplify $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA}$.
3. Simplify $\\overrightarrow{OB} - \\overrightarrow{OA}$.
4. In a parallelogram $ABCD$ express $\\overrightarrow{AC}$ through $\\overrightarrow{AB}$ and $\\overrightarrow{AD}$.
5. In the same parallelogram express $\\overrightarrow{BD}$.
6. Two perpendicular displacements of $5$ m and $12$ m follow one another. Find the length of the sum.
7. Two forces of $7$ N and $9$ N act along one line in the same direction. Find the resultant.
8. The same two forces act in opposite directions. Find the resultant.

### Answers

1. $\\overrightarrow{MK}$.
2. $\\vec{0}$.
3. $\\overrightarrow{AB}$.
4. $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$.
5. $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB}$.
6. $13$ m.
7. $16$ N.
8. $2$ N, directed along the larger force.`,
        hy: `## Եռանկյան կանոնը

> **Եռանկյան կանոն։** $\\vec{a}$-ն և $\\vec{b}$-ն գումարելու համար $\\vec{a}$-ն տանենք $A$ կետից $B$ կետ, ապա $\\vec{b}$-ն՝ $B$-ից $C$ կետ։ $\\overrightarrow{AC}$ վեկտորը գումարն է.
> $$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}.$$

Կանոնը գործում է ցանկացած երկու վեկտորի համար, նույնիսկ կոլինեարների, և գումարը կախված չէ սկզբնակետից։

**Օրինակ 1։** Զբոսաշրջիկը քայլում է $3$ կմ դեպի արևելք, ապա $4$ կմ դեպի հյուսիս։ Երկու տեղափոխության վեկտորները գումարվում են մեկ տեղափոխության, որի երկարությունը $\\sqrt{9 + 16} = 5$ կմ է։

## Զուգահեռագծի կանոնը

> **Զուգահեռագծի կանոն։** $\\vec{a}$-ն և $\\vec{b}$-ն տանենք **նույն** կետից և լրացնենք զուգահեռագիծը։ Այդ կետից տարված նրա անկյունագիծը $\\vec{a} + \\vec{b}$-ն է։

Երկու կանոնները միշտ տալիս են նույն պատասխանը; զուգահեռագծի կանոնն ավելի հարմար է ուժերի համար, եռանկյանը՝ շարժումների շղթայի։

## Բազմանկյան կանոնը

Մի քանի վեկտորի համար դրանք դասավորենք մեկը մյուսի հետևից՝ վերջից սկիզբ; գումարն առաջին սկզբից մինչև վերջին վերջ տարված վեկտորն է։

**Օրինակ 2։** $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = \\overrightarrow{AD}$։

Եթե շղթան փակվում է, այսինքն՝ վերջին վերջը հանդիպում է առաջին սկզբին, գումարը $\\vec{0}$ է։ Ուստի ցանկացած եռանկյունում $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\vec{0}$։

## Գումարման օրենքները

$$\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}, \\qquad (\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c}), \\qquad \\vec{a} + \\vec{0} = \\vec{a}.$$

Վեկտորները գումարվում են ուղիղ այնպես, ինչպես թվերը, ուստի փակագծերը կարելի է ազատ տեղափոխել։

## Հանում

> $\\vec{a} - \\vec{b}$ **տարբերությունն** այն վեկտորն է, որը պետք է գումարել $\\vec{b}$-ին՝ $\\vec{a}$ ստանալու համար։ Համարժեք է՝ $\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$։

Մեկ կետից տարված $\\vec{a}$-ն և $\\vec{b}$-ն տալիս են տարբերությունն որպես $\\vec{b}$-ի վերջից $\\vec{a}$-ի վերջ տարված վեկտոր։

Հիշարժան կանոն. ցանկացած $O$ կետի համար
$$\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}.$$

**Օրինակ 3։** $ABCD$ զուգահեռագծում, որտեղ $\\overrightarrow{AB} = \\vec{a}$ և $\\overrightarrow{AD} = \\vec{b}$, անկյունագծերն են $\\overrightarrow{AC} = \\vec{a} + \\vec{b}$ և $\\overrightarrow{DB} = \\vec{a} - \\vec{b}$։

**Օրինակ 4։** Մարմնի վրա ուղիղ անկյան տակ ազդում են $6$ Ն և $8$ Ն ուժեր։ Նրանց համազորի երկարությունը $\\sqrt{36 + 64} = 10$ Ն է։ Եթե նրանք ազդեին մեկ ուղղի երկայնքով նույն ուղղությամբ, համազորը կլիներ $14$ Ն, իսկ հակառակ ուղղություններով՝ $2$ Ն։

### Վարժություններ

1. Պարզեցրե՛ք $\\overrightarrow{MN} + \\overrightarrow{NK}$։
2. Պարզեցրե՛ք $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA}$։
3. Պարզեցրե՛ք $\\overrightarrow{OB} - \\overrightarrow{OA}$։
4. $ABCD$ զուգահեռագծում $\\overrightarrow{AC}$-ն արտահայտե՛ք $\\overrightarrow{AB}$-ով և $\\overrightarrow{AD}$-ով։
5. Նույն զուգահեռագծում արտահայտե՛ք $\\overrightarrow{BD}$-ն։
6. Իրար հետևից կատարվում են $5$ մ և $12$ մ փոխուղղահայաց տեղափոխություններ։ Գտե՛ք գումարի երկարությունը։
7. $7$ Ն և $9$ Ն ուժերն ազդում են մեկ ուղղի երկայնքով նույն ուղղությամբ։ Գտե՛ք համազորը։
8. Նույն երկու ուժերն ազդում են հակառակ ուղղություններով։ Գտե՛ք համազորը։

### Պատասխաններ

1. $\\overrightarrow{MK}$։
2. $\\vec{0}$։
3. $\\overrightarrow{AB}$։
4. $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$։
5. $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB}$։
6. $13$ մ։
7. $16$ Ն։
8. $2$ Ն՝ ուղղված մեծ ուժի երկայնքով։`,
        ru: `## Правило треугольника

> **Правило треугольника.** Чтобы сложить $\\vec{a}$ и $\\vec{b}$, отложим $\\vec{a}$ от точки $A$ до точки $B$, а затем $\\vec{b}$ от $B$ до точки $C$. Вектор $\\overrightarrow{AC}$ и есть сумма:
> $$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}.$$

Правило работает для любых двух векторов, даже коллинеарных, и сумма не зависит от выбора начальной точки.

**Пример 1.** Турист проходит $3$ км на восток, затем $4$ км на север. Два вектора перемещения складываются в одно перемещение длиной $\\sqrt{9 + 16} = 5$ км.

## Правило параллелограмма

> **Правило параллелограмма.** Отложим $\\vec{a}$ и $\\vec{b}$ от **одной** точки и достроим параллелограмм. Его диагональ, выходящая из этой точки, равна $\\vec{a} + \\vec{b}$.

Оба правила всегда дают один ответ; правило параллелограмма удобнее для сил, правило треугольника — для цепочки перемещений.

## Правило многоугольника

Для нескольких векторов откладывают их один за другим, конец к началу; сумма — вектор от первого начала до последнего конца.

**Пример 2.** $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CD} = \\overrightarrow{AD}$.

Если цепочка замыкается, то есть последний конец совпадает с первым началом, сумма равна $\\vec{0}$. Поэтому в любом треугольнике $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\vec{0}$.

## Законы сложения

$$\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}, \\qquad (\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c}), \\qquad \\vec{a} + \\vec{0} = \\vec{a}.$$

Векторы складываются в точности как числа, поэтому скобки можно свободно переставлять.

## Вычитание

> **Разностью** $\\vec{a} - \\vec{b}$ называют вектор, который нужно прибавить к $\\vec{b}$, чтобы получить $\\vec{a}$. Равносильно: $\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$.

Отложенные от одной точки $\\vec{a}$ и $\\vec{b}$ дают разность как вектор от конца $\\vec{b}$ к концу $\\vec{a}$.

Правило, которое стоит запомнить: для любой точки $O$
$$\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA}.$$

**Пример 3.** В параллелограмме $ABCD$, где $\\overrightarrow{AB} = \\vec{a}$ и $\\overrightarrow{AD} = \\vec{b}$, диагонали равны $\\overrightarrow{AC} = \\vec{a} + \\vec{b}$ и $\\overrightarrow{DB} = \\vec{a} - \\vec{b}$.

**Пример 4.** На тело под прямым углом действуют силы $6$ Н и $8$ Н. Длина их равнодействующей равна $\\sqrt{36 + 64} = 10$ Н. Если бы они действовали вдоль одной прямой в одну сторону, равнодействующая была бы $14$ Н, а в противоположные стороны — $2$ Н.

### Упражнения

1. Упростите $\\overrightarrow{MN} + \\overrightarrow{NK}$.
2. Упростите $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA}$.
3. Упростите $\\overrightarrow{OB} - \\overrightarrow{OA}$.
4. В параллелограмме $ABCD$ выразите $\\overrightarrow{AC}$ через $\\overrightarrow{AB}$ и $\\overrightarrow{AD}$.
5. В том же параллелограмме выразите $\\overrightarrow{BD}$.
6. Друг за другом выполнены два перпендикулярных перемещения $5$ м и $12$ м. Найдите длину суммы.
7. Силы $7$ Н и $9$ Н действуют вдоль одной прямой в одну сторону. Найдите равнодействующую.
8. Те же две силы действуют в противоположные стороны. Найдите равнодействующую.

### Ответы

1. $\\overrightarrow{MK}$.
2. $\\vec{0}$.
3. $\\overrightarrow{AB}$.
4. $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$.
5. $\\overrightarrow{BD} = \\overrightarrow{AD} - \\overrightarrow{AB}$.
6. $13$ м.
7. $16$ Н.
8. $2$ Н, направлена вдоль большей силы.`,
      },
      [
        q(t("By the triangle rule, the sum of vectors AB and BC equals", "Եռանկյան կանոնով AB և BC վեկտորների գումարը հավասար է", "По правилу треугольника сумма векторов AB и BC равна"), [
          t("the vector AC", "AC վեկտորին", "вектору AC"),
          t("the vector CA", "CA վեկտորին", "вектору CA"),
          t("the zero vector", "զրոյական վեկտորին", "нулевому вектору"),
        ], 0),
        q(t("In the parallelogram rule the sum is", "Զուգահեռագծի կանոնում գումարն է", "В правиле параллелограмма суммой является"), [
          t("a side of the parallelogram", "զուգահեռագծի կողմը", "сторона параллелограмма"),
          t("the diagonal drawn from the common point", "ընդհանուր կետից տարված անկյունագիծը", "диагональ, выходящая из общей точки"),
          t("the other diagonal", "մյուս անկյունագիծը", "другая диагональ"),
        ], 1),
        q(t("The sum of vectors AB, BC and CA equals", "AB, BC և CA վեկտորների գումարը հավասար է", "Сумма векторов AB, BC и CA равна"), [
          t("the vector AC", "AC վեկտորին", "вектору AC"),
          t("twice the vector AB", "կրկնակի AB վեկտորին", "удвоенному вектору AB"),
          t("the zero vector", "զրոյական վեկտորին", "нулевому вектору"),
        ], 2),
        q(t("The difference of vectors OB and OA equals", "OB և OA վեկտորների տարբերությունը հավասար է", "Разность векторов OB и OA равна"), [
          t("the vector AB", "AB վեկտորին", "вектору AB"),
          t("the vector BA", "BA վեկտորին", "вектору BA"),
          t("the vector OA", "OA վեկտորին", "вектору OA"),
        ], 0),
        q(t("Two perpendicular displacements of 5 m and 12 m give a sum of length", "5 մ և 12 մ փոխուղղահայաց տեղափոխությունները տալիս են գումար, որի երկարությունն է", "Два перпендикулярных перемещения 5 м и 12 м дают сумму длиной"), [
          t("17 m", "17 մ", "17 м"),
          t("13 m", "13 մ", "13 м"),
          t("7 m", "7 մ", "7 м"),
        ], 1),
        q(t("Forces of 7 N and 9 N along one line in opposite directions give", "Մեկ ուղղի երկայնքով հակառակ ուղղություններով 7 Ն և 9 Ն ուժերը տալիս են", "Силы 7 Н и 9 Н вдоль одной прямой в противоположные стороны дают"), [
          t("16 N", "16 Ն", "16 Н"),
          t("63 N", "63 Ն", "63 Н"),
          t("2 N", "2 Ն", "2 Н"),
        ], 2),
      ],
    ),
    lesson(
      "vector-scalar",
      ["Multiplying a vector by a number", "Վեկտորի բազմապատկում թվով", "Умножение вектора на число"],
      {
        en: ["Build the vector k·a for a positive and a negative k", "Use the laws of multiplication by a number", "Decide whether two vectors are collinear"],
        hy: ["Կառուցել k·a վեկտորը դրական և բացասական k-ի դեպքում", "Օգտվել թվով բազմապատկման օրենքներից", "Որոշել՝ երկու վեկտոր կոլինեար են, թե ոչ"],
        ru: ["Строить вектор k·a при положительном и отрицательном k", "Пользоваться законами умножения на число", "Определять, коллинеарны ли два вектора"],
      },
      {
        en: `## The definition

> The **product of a vector $\\vec{a}$ by a number $k$** is the vector $k\\vec{a}$ whose length is $|k| \\cdot |\\vec{a}|$ and which is co-directed with $\\vec{a}$ if $k > 0$ and oppositely directed if $k < 0$.

If $k = 0$ or $\\vec{a} = \\vec{0}$, the product is the zero vector.

| $k$ | Direction | Length |
|---|---|---|
| $k > 1$ | the same | longer |
| $0 < k < 1$ | the same | shorter |
| $k = -1$ | opposite | the same |
| $k < -1$ | opposite | longer |

**Example 1.** If $|\\vec{a}| = 6$ cm, then $|3\\vec{a}| = 18$ cm, $|0{.}5\\vec{a}| = 3$ cm, and $|-2\\vec{a}| = 12$ cm.

## Laws

$$k(m\\vec{a}) = (km)\\vec{a}, \\qquad (k + m)\\vec{a} = k\\vec{a} + m\\vec{a}, \\qquad k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}.$$

These are the familiar laws of numbers, so expressions with vectors are simplified exactly as algebraic ones.

**Example 2.** $3(\\vec{a} - 2\\vec{b}) + 2(\\vec{b} + \\vec{a}) = 3\\vec{a} - 6\\vec{b} + 2\\vec{b} + 2\\vec{a} = 5\\vec{a} - 4\\vec{b}$.

## The test for collinearity

> Two non-zero vectors $\\vec{a}$ and $\\vec{b}$ are collinear **if and only if** there is a number $k$ with $\\vec{b} = k\\vec{a}$.

This is the quickest way to prove that two lines are parallel or that three points lie on one line.

**Example 3.** If $\\overrightarrow{AB} = 3\\vec{m}$ and $\\overrightarrow{CD} = -\\dfrac{3}{2}\\vec{m}$, the vectors are collinear, because $\\overrightarrow{CD} = -\\dfrac{1}{2}\\overrightarrow{AB}$. The lines $AB$ and $CD$ are parallel or the same line.

**Example 4.** Prove that the points $A$, $B$ and $C$ lie on one line if $\\overrightarrow{AB} = 2\\vec{p}$ and $\\overrightarrow{BC} = 5\\vec{p}$.

Both vectors are collinear with $\\vec{p}$, and they have the common point $B$, so all three points lie on one line.

## A unit vector

A vector of length $1$ is called a **unit vector**. For any non-zero $\\vec{a}$ the vector $\\dfrac{1}{|\\vec{a}|}\\vec{a}$ is a unit vector with the same direction.

**Example 5.** If $|\\vec{a}| = 4$, then $\\dfrac{1}{4}\\vec{a}$ has length $1$.

### Exercises

1. $|\\vec{a}| = 8$ cm. Find $|2\\vec{a}|$, $|-3\\vec{a}|$ and $|0{.}25\\vec{a}|$.
2. How is $-\\vec{a}$ directed with respect to $\\vec{a}$?
3. Simplify $2(\\vec{a} + \\vec{b}) - 3\\vec{b}$.
4. Simplify $4(\\vec{m} - \\vec{n}) + 2(\\vec{n} + 2\\vec{m})$.
5. Are $\\vec{a}$ and $-5\\vec{a}$ collinear?
6. $\\overrightarrow{AB} = 6\\vec{p}$ and $\\overrightarrow{CD} = 2\\vec{p}$. What can be said about the lines $AB$ and $CD$?
7. $|\\vec{b}| = 10$. Write a unit vector with the direction of $\\vec{b}$.
8. For which $k$ is $k\\vec{a}$ oppositely directed to $\\vec{a}$ and twice as long?

### Answers

1. $16$ cm, $24$ cm, $2$ cm.
2. Opposite to it, same length.
3. $2\\vec{a} - \\vec{b}$.
4. $8\\vec{m} - 2\\vec{n}$.
5. Yes, oppositely directed.
6. They are parallel or coincide.
7. $\\dfrac{1}{10}\\vec{b}$.
8. $k = -2$.`,
        hy: `## Սահմանումը

> **$\\vec{a}$ վեկտորի և $k$ թվի արտադրյալ** է կոչվում $k\\vec{a}$ վեկտորը, որի երկարությունը $|k| \\cdot |\\vec{a}|$ է և որը $\\vec{a}$-ի հետ համուղղված է, եթե $k > 0$, և հակուղղված՝ եթե $k < 0$։

Եթե $k = 0$ կամ $\\vec{a} = \\vec{0}$, արտադրյալը զրոյական վեկտորն է։

| $k$ | Ուղղությունը | Երկարությունը |
|---|---|---|
| $k > 1$ | նույնը | ավելի մեծ |
| $0 < k < 1$ | նույնը | ավելի փոքր |
| $k = -1$ | հակառակը | նույնը |
| $k < -1$ | հակառակը | ավելի մեծ |

**Օրինակ 1։** Եթե $|\\vec{a}| = 6$ սմ, ապա $|3\\vec{a}| = 18$ սմ, $|0{,}5\\vec{a}| = 3$ սմ, և $|-2\\vec{a}| = 12$ սմ։

## Օրենքներ

$$k(m\\vec{a}) = (km)\\vec{a}, \\qquad (k + m)\\vec{a} = k\\vec{a} + m\\vec{a}, \\qquad k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}.$$

Սրանք թվերի ծանոթ օրենքներն են, ուստի վեկտորներով արտահայտությունները պարզեցվում են ուղիղ այնպես, ինչպես հանրահաշվականները։

**Օրինակ 2։** $3(\\vec{a} - 2\\vec{b}) + 2(\\vec{b} + \\vec{a}) = 3\\vec{a} - 6\\vec{b} + 2\\vec{b} + 2\\vec{a} = 5\\vec{a} - 4\\vec{b}$։

## Կոլինեարության հայտանիշը

> Երկու ոչ զրոյական $\\vec{a}$ և $\\vec{b}$ վեկտորները կոլինեար են **այն և միայն այն դեպքում**, երբ գոյություն ունի $k$ թիվ, որի դեպքում $\\vec{b} = k\\vec{a}$։

Սա ամենաարագ եղանակն է ապացուցելու, որ երկու ուղիղ զուգահեռ են կամ որ երեք կետ ընկած են մեկ ուղղի վրա։

**Օրինակ 3։** Եթե $\\overrightarrow{AB} = 3\\vec{m}$ և $\\overrightarrow{CD} = -\\dfrac{3}{2}\\vec{m}$, ապա վեկտորները կոլինեար են, քանի որ $\\overrightarrow{CD} = -\\dfrac{1}{2}\\overrightarrow{AB}$։ $AB$ և $CD$ ուղիղները զուգահեռ են կամ համընկնում են։

**Օրինակ 4։** Ապացուցենք, որ $A$, $B$ և $C$ կետերն ընկած են մեկ ուղղի վրա, եթե $\\overrightarrow{AB} = 2\\vec{p}$ և $\\overrightarrow{BC} = 5\\vec{p}$։

Երկու վեկտորներն էլ կոլինեար են $\\vec{p}$-ին և ունեն ընդհանուր $B$ կետը, ուստի երեք կետերն էլ ընկած են մեկ ուղղի վրա։

## Միավոր վեկտոր

$1$ երկարություն ունեցող վեկտորը կոչվում է **միավոր վեկտոր**։ Ցանկացած ոչ զրոյական $\\vec{a}$-ի համար $\\dfrac{1}{|\\vec{a}|}\\vec{a}$ վեկտորը նույն ուղղությամբ միավոր վեկտոր է։

**Օրինակ 5։** Եթե $|\\vec{a}| = 4$, ապա $\\dfrac{1}{4}\\vec{a}$-ի երկարությունը $1$ է։

### Վարժություններ

1. $|\\vec{a}| = 8$ սմ։ Գտե՛ք $|2\\vec{a}|$, $|-3\\vec{a}|$ և $|0{,}25\\vec{a}|$։
2. Ինչպե՞ս է $-\\vec{a}$-ն ուղղված $\\vec{a}$-ի նկատմամբ։
3. Պարզեցրե՛ք $2(\\vec{a} + \\vec{b}) - 3\\vec{b}$։
4. Պարզեցրե՛ք $4(\\vec{m} - \\vec{n}) + 2(\\vec{n} + 2\\vec{m})$։
5. $\\vec{a}$-ն և $-5\\vec{a}$-ն կոլինեա՞ր են։
6. $\\overrightarrow{AB} = 6\\vec{p}$ և $\\overrightarrow{CD} = 2\\vec{p}$։ Ի՞նչ կարելի է ասել $AB$ և $CD$ ուղիղների մասին։
7. $|\\vec{b}| = 10$։ Գրե՛ք $\\vec{b}$-ի ուղղությամբ միավոր վեկտոր։
8. Ո՞ր $k$-ի դեպքում է $k\\vec{a}$-ն $\\vec{a}$-ին հակուղղված և երկու անգամ ավելի երկար։

### Պատասխաններ

1. $16$ սմ, $24$ սմ, $2$ սմ։
2. Հակառակ ուղղությամբ, նույն երկարությամբ։
3. $2\\vec{a} - \\vec{b}$։
4. $8\\vec{m} - 2\\vec{n}$։
5. Այո, հակուղղված։
6. Զուգահեռ են կամ համընկնում են։
7. $\\dfrac{1}{10}\\vec{b}$։
8. $k = -2$։`,
        ru: `## Определение

> **Произведением вектора $\\vec{a}$ на число $k$** называют вектор $k\\vec{a}$, длина которого равна $|k| \\cdot |\\vec{a}|$ и который сонаправлен с $\\vec{a}$ при $k > 0$ и противоположно направлен при $k < 0$.

Если $k = 0$ или $\\vec{a} = \\vec{0}$, произведение равно нулевому вектору.

| $k$ | Направление | Длина |
|---|---|---|
| $k > 1$ | то же | больше |
| $0 < k < 1$ | то же | меньше |
| $k = -1$ | противоположное | та же |
| $k < -1$ | противоположное | больше |

**Пример 1.** Если $|\\vec{a}| = 6$ см, то $|3\\vec{a}| = 18$ см, $|0{,}5\\vec{a}| = 3$ см и $|-2\\vec{a}| = 12$ см.

## Законы

$$k(m\\vec{a}) = (km)\\vec{a}, \\qquad (k + m)\\vec{a} = k\\vec{a} + m\\vec{a}, \\qquad k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}.$$

Это знакомые законы чисел, поэтому выражения с векторами упрощают в точности как алгебраические.

**Пример 2.** $3(\\vec{a} - 2\\vec{b}) + 2(\\vec{b} + \\vec{a}) = 3\\vec{a} - 6\\vec{b} + 2\\vec{b} + 2\\vec{a} = 5\\vec{a} - 4\\vec{b}$.

## Признак коллинеарности

> Два ненулевых вектора $\\vec{a}$ и $\\vec{b}$ коллинеарны **тогда и только тогда**, когда существует число $k$, при котором $\\vec{b} = k\\vec{a}$.

Это самый быстрый способ доказать, что две прямые параллельны или что три точки лежат на одной прямой.

**Пример 3.** Если $\\overrightarrow{AB} = 3\\vec{m}$ и $\\overrightarrow{CD} = -\\dfrac{3}{2}\\vec{m}$, то векторы коллинеарны, так как $\\overrightarrow{CD} = -\\dfrac{1}{2}\\overrightarrow{AB}$. Прямые $AB$ и $CD$ параллельны или совпадают.

**Пример 4.** Докажем, что точки $A$, $B$ и $C$ лежат на одной прямой, если $\\overrightarrow{AB} = 2\\vec{p}$ и $\\overrightarrow{BC} = 5\\vec{p}$.

Оба вектора коллинеарны $\\vec{p}$ и имеют общую точку $B$, поэтому все три точки лежат на одной прямой.

## Единичный вектор

Вектор длины $1$ называют **единичным**. Для любого ненулевого $\\vec{a}$ вектор $\\dfrac{1}{|\\vec{a}|}\\vec{a}$ единичный и имеет то же направление.

**Пример 5.** Если $|\\vec{a}| = 4$, то длина $\\dfrac{1}{4}\\vec{a}$ равна $1$.

### Упражнения

1. $|\\vec{a}| = 8$ см. Найдите $|2\\vec{a}|$, $|-3\\vec{a}|$ и $|0{,}25\\vec{a}|$.
2. Как направлен $-\\vec{a}$ относительно $\\vec{a}$?
3. Упростите $2(\\vec{a} + \\vec{b}) - 3\\vec{b}$.
4. Упростите $4(\\vec{m} - \\vec{n}) + 2(\\vec{n} + 2\\vec{m})$.
5. Коллинеарны ли $\\vec{a}$ и $-5\\vec{a}$?
6. $\\overrightarrow{AB} = 6\\vec{p}$ и $\\overrightarrow{CD} = 2\\vec{p}$. Что можно сказать о прямых $AB$ и $CD$?
7. $|\\vec{b}| = 10$. Запишите единичный вектор направления $\\vec{b}$.
8. При каком $k$ вектор $k\\vec{a}$ противоположно направлен $\\vec{a}$ и вдвое длиннее?

### Ответы

1. $16$ см, $24$ см, $2$ см.
2. Противоположно, той же длины.
3. $2\\vec{a} - \\vec{b}$.
4. $8\\vec{m} - 2\\vec{n}$.
5. Да, противоположно направлены.
6. Они параллельны или совпадают.
7. $\\dfrac{1}{10}\\vec{b}$.
8. $k = -2$.`,
      },
      [
        q(t("The length of the vector k·a equals", "k·a վեկտորի երկարությունը հավասար է", "Длина вектора k·a равна"), [
          t("the absolute value of k times the length of a", "k-ի բացարձակ արժեքը բազմապատկած a-ի երկարությամբ", "модулю k, умноженному на длину a"),
          t("k plus the length of a", "k գումարած a-ի երկարությունը", "k плюс длина a"),
          t("the length of a", "a-ի երկարությանը", "длине a"),
        ], 0),
        q(t("If k is negative, the vector k·a is", "Եթե k-ն բացասական է, k·a վեկտորը", "Если k отрицательно, вектор k·a"), [
          t("co-directed with a", "համուղղված է a-ին", "сонаправлен с a"),
          t("oppositely directed to a", "հակուղղված է a-ին", "противоположно направлен a"),
          t("the zero vector", "զրոյական վեկտորն է", "нулевой"),
        ], 1),
        q(t("If the length of a equals 8 cm, the length of -3a equals", "Եթե a-ի երկարությունը 8 սմ է, -3a-ի երկարությունը հավասար է", "Если длина a равна 8 см, длина -3a равна"), [
          t("5 cm", "5 սմ", "5 см"),
          t("11 cm", "11 սմ", "11 см"),
          t("24 cm", "24 սմ", "24 см"),
        ], 2),
        q(t("Two non-zero vectors are collinear exactly when", "Երկու ոչ զրոյական վեկտոր կոլինեար են ուղիղ այն դեպքում, երբ", "Два ненулевых вектора коллинеарны в точности тогда, когда"), [
          t("one of them is the other multiplied by a number", "նրանցից մեկը մյուսն է՝ բազմապատկած թվով", "один из них равен другому, умноженному на число"),
          t("they have the same length", "նրանք ունեն նույն երկարությունը", "у них одинаковая длина"),
          t("their sum is zero", "նրանց գումարը զրո է", "их сумма равна нулю"),
        ], 0),
        q(t("The expression 2(a + b) - 3b simplifies to", "2(a + b) - 3b արտահայտությունը պարզեցվում է", "Выражение 2(a + b) - 3b упрощается до"), [
          t("2a + b", "2a + b", "2a + b"),
          t("2a - b", "2a - b", "2a - b"),
          t("2a - 3b", "2a - 3b", "2a - 3b"),
        ], 1),
        q(t("A unit vector with the direction of b, where the length of b is 10, equals", "b-ի ուղղությամբ միավոր վեկտորը, երբ b-ի երկարությունը 10 է, հավասար է", "Единичный вектор направления b, где длина b равна 10, равен"), [
          t("10b", "10b", "10b"),
          t("-b", "-b", "-b"),
          t("one tenth of b", "b-ի մեկ տասներորդին", "одной десятой b"),
        ], 2),
      ],
    ),
    lesson(
      "vector-decomposition",
      ["Decomposing a vector into two given vectors", "Վեկտորի վերլուծումն երկու տրված վեկտորով", "Разложение вектора по двум данным векторам"],
      {
        en: ["Decompose a vector into two non-collinear vectors", "Prove that the decomposition is unique", "Use decomposition in a triangle and a parallelogram"],
        hy: ["Վեկտորը վերլուծել երկու ոչ կոլինեար վեկտորով", "Ապացուցել, որ վերլուծումը միակն է", "Կիրառել վերլուծումն եռանկյունում և զուգահեռագծում"],
        ru: ["Раскладывать вектор по двум неколлинеарным векторам", "Доказывать единственность разложения", "Применять разложение в треугольнике и параллелограмме"],
      },
      {
        en: `## The main theorem

> **Theorem.** If $\\vec{p}$ and $\\vec{q}$ are non-collinear, then every vector $\\vec{a}$ of the plane can be written as
> $$\\vec{a} = x\\vec{p} + y\\vec{q},$$
> and the numbers $x$ and $y$ are determined uniquely.

Such a pair $\\vec{p}$, $\\vec{q}$ is called a **basis**, and the equality is the **decomposition** of $\\vec{a}$ in that basis.

Why it works: draw all three vectors from one point $O$ and complete a parallelogram whose sides lie on the lines of $\\vec{p}$ and $\\vec{q}$ and whose diagonal is $\\vec{a}$. The two sides are collinear with $\\vec{p}$ and $\\vec{q}$, so they equal $x\\vec{p}$ and $y\\vec{q}$.

Why it is unique: if $x\\vec{p} + y\\vec{q} = x_1\\vec{p} + y_1\\vec{q}$ with $x \\ne x_1$, then
$$(x - x_1)\\vec{p} = (y_1 - y)\\vec{q}, \\qquad \\vec{p} = \\frac{y_1 - y}{x - x_1}\\vec{q},$$
which would make $\\vec{p}$ and $\\vec{q}$ collinear, against the condition.

## In a parallelogram

**Example 1.** In a parallelogram $ABCD$ let $\\overrightarrow{AB} = \\vec{p}$ and $\\overrightarrow{AD} = \\vec{q}$. Then
$$\\overrightarrow{AC} = \\vec{p} + \\vec{q}, \\qquad \\overrightarrow{BD} = \\vec{q} - \\vec{p}, \\qquad \\overrightarrow{CA} = -\\vec{p} - \\vec{q}.$$
If $O$ is the point where the diagonals meet, then $\\overrightarrow{AO} = \\dfrac{1}{2}(\\vec{p} + \\vec{q})$, because the diagonals of a parallelogram bisect each other.

## In a triangle

**Example 2.** In a triangle $ABC$ let $\\overrightarrow{AB} = \\vec{p}$ and $\\overrightarrow{AC} = \\vec{q}$, and let $M$ be the midpoint of $BC$. Decompose the median $\\overrightarrow{AM}$.

Since $M$ is the midpoint, $\\overrightarrow{BM} = \\dfrac{1}{2}\\overrightarrow{BC} = \\dfrac{1}{2}(\\vec{q} - \\vec{p})$, so
$$\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\vec{p} + \\frac{1}{2}(\\vec{q} - \\vec{p}) = \\frac{1}{2}(\\vec{p} + \\vec{q}).$$

So the median to a side is half the sum of the two other sides, taken as vectors from the same vertex.

**Example 3.** With the same notation, the midline $MN$ joining the midpoints of $AB$ and $AC$ satisfies $\\overrightarrow{MN} = \\dfrac{1}{2}\\vec{q} - \\dfrac{1}{2}\\vec{p} = \\dfrac{1}{2}\\overrightarrow{BC}$. That is the midline theorem proved in one line: it is parallel to the third side and half as long.

**Example 4.** Decompose $\\vec{a} = 3\\vec{p} - \\vec{q}$ and $\\vec{b} = -\\vec{p} + 4\\vec{q}$ into the sum $\\vec{a} + \\vec{b} = 2\\vec{p} + 3\\vec{q}$: in a basis the coefficients simply add.

### Exercises

1. What is a basis of the plane?
2. In a parallelogram $ABCD$ with $\\overrightarrow{AB} = \\vec{p}$, $\\overrightarrow{AD} = \\vec{q}$ decompose $\\overrightarrow{AC}$.
3. In the same parallelogram decompose $\\overrightarrow{DB}$.
4. In the same parallelogram decompose $\\overrightarrow{AO}$, where $O$ is the centre.
5. In a triangle $ABC$ with $\\overrightarrow{AB} = \\vec{p}$ and $\\overrightarrow{AC} = \\vec{q}$ decompose $\\overrightarrow{BC}$.
6. In the same triangle decompose the median from $A$.
7. Add $\\vec{a} = 2\\vec{p} + 5\\vec{q}$ and $\\vec{b} = 3\\vec{p} - 2\\vec{q}$.
8. Can a vector have two different decompositions in one basis?

### Answers

1. A pair of non-collinear vectors.
2. $\\vec{p} + \\vec{q}$.
3. $\\vec{p} - \\vec{q}$.
4. $\\dfrac{1}{2}(\\vec{p} + \\vec{q})$.
5. $\\vec{q} - \\vec{p}$.
6. $\\dfrac{1}{2}(\\vec{p} + \\vec{q})$.
7. $5\\vec{p} + 3\\vec{q}$.
8. No, the decomposition is unique.`,
        hy: `## Հիմնական թեորեմը

> **Թեորեմ։** Եթե $\\vec{p}$-ն և $\\vec{q}$-ն կոլինեար չեն, ապա հարթության ամեն $\\vec{a}$ վեկտոր կարելի է գրել
> $$\\vec{a} = x\\vec{p} + y\\vec{q}$$
> տեսքով, և $x$, $y$ թվերն որոշվում են միակերպ։

Այդպիսի $\\vec{p}$, $\\vec{q}$ զույգը կոչվում է **բազիս**, իսկ հավասարությունը՝ $\\vec{a}$-ի **վերլուծում** այդ բազիսով։

Ինչու է դա աշխատում. երեք վեկտորներն էլ տանենք մեկ $O$ կետից և լրացնենք զուգահեռագիծը, որի կողմերն ընկած են $\\vec{p}$-ի և $\\vec{q}$-ի ուղիղների վրա, իսկ անկյունագիծը $\\vec{a}$-ն է։ Երկու կողմերը կոլինեար են $\\vec{p}$-ին և $\\vec{q}$-ին, ուստի հավասար են $x\\vec{p}$-ի և $y\\vec{q}$-ի։

Ինչու է միակը. եթե $x\\vec{p} + y\\vec{q} = x_1\\vec{p} + y_1\\vec{q}$ և $x \\ne x_1$, ապա
$$(x - x_1)\\vec{p} = (y_1 - y)\\vec{q}, \\qquad \\vec{p} = \\frac{y_1 - y}{x - x_1}\\vec{q},$$
ինչը $\\vec{p}$-ն և $\\vec{q}$-ն կդարձներ կոլինեար՝ պայմանին հակառակ։

## Զուգահեռագծում

**Օրինակ 1։** $ABCD$ զուգահեռագծում թող $\\overrightarrow{AB} = \\vec{p}$ և $\\overrightarrow{AD} = \\vec{q}$։ Ապա
$$\\overrightarrow{AC} = \\vec{p} + \\vec{q}, \\qquad \\overrightarrow{BD} = \\vec{q} - \\vec{p}, \\qquad \\overrightarrow{CA} = -\\vec{p} - \\vec{q}.$$
Եթե $O$-ն անկյունագծերի հատման կետն է, ապա $\\overrightarrow{AO} = \\dfrac{1}{2}(\\vec{p} + \\vec{q})$, քանի որ զուգահեռագծի անկյունագծերը հատման կետում կիսվում են։

## Եռանկյունում

**Օրինակ 2։** $ABC$ եռանկյունում թող $\\overrightarrow{AB} = \\vec{p}$ և $\\overrightarrow{AC} = \\vec{q}$, իսկ $M$-ը $BC$-ի միջնակետն է։ Վերլուծենք $\\overrightarrow{AM}$ միջնագիծը։

Քանի որ $M$-ը միջնակետն է, $\\overrightarrow{BM} = \\dfrac{1}{2}\\overrightarrow{BC} = \\dfrac{1}{2}(\\vec{q} - \\vec{p})$, ուստի
$$\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\vec{p} + \\frac{1}{2}(\\vec{q} - \\vec{p}) = \\frac{1}{2}(\\vec{p} + \\vec{q}).$$

Ուրեմն կողմին տարված միջնագիծը մյուս երկու կողմերի գումարի կեսն է՝ վերցված որպես վեկտորներ նույն գագաթից։

**Օրինակ 3։** Նույն նշանակումներով $AB$-ի և $AC$-ի միջնակետերը միացնող $MN$ միջին գիծը բավարարում է $\\overrightarrow{MN} = \\dfrac{1}{2}\\vec{q} - \\dfrac{1}{2}\\vec{p} = \\dfrac{1}{2}\\overrightarrow{BC}$։ Սա միջին գծի թեորեմն է՝ ապացուցված մեկ տողով. այն զուգահեռ է երրորդ կողմին և երկու անգամ կարճ։

**Օրինակ 4։** $\\vec{a} = 3\\vec{p} - \\vec{q}$ և $\\vec{b} = -\\vec{p} + 4\\vec{q}$ վեկտորների գումարն է $\\vec{a} + \\vec{b} = 2\\vec{p} + 3\\vec{q}$. բազիսում գործակիցները պարզապես գումարվում են։

### Վարժություններ

1. Ի՞նչ է հարթության բազիսը։
2. $ABCD$ զուգահեռագծում, որտեղ $\\overrightarrow{AB} = \\vec{p}$, $\\overrightarrow{AD} = \\vec{q}$, վերլուծե՛ք $\\overrightarrow{AC}$-ն։
3. Նույն զուգահեռագծում վերլուծե՛ք $\\overrightarrow{DB}$-ն։
4. Նույն զուգահեռագծում վերլուծե՛ք $\\overrightarrow{AO}$-ն, որտեղ $O$-ն կենտրոնն է։
5. $ABC$ եռանկյունում, որտեղ $\\overrightarrow{AB} = \\vec{p}$ և $\\overrightarrow{AC} = \\vec{q}$, վերլուծե՛ք $\\overrightarrow{BC}$-ն։
6. Նույն եռանկյունում վերլուծե՛ք $A$-ից տարված միջնագիծը։
7. Գումարե՛ք $\\vec{a} = 2\\vec{p} + 5\\vec{q}$-ն և $\\vec{b} = 3\\vec{p} - 2\\vec{q}$-ն։
8. Կարո՞ղ է վեկտորը մեկ բազիսում ունենալ երկու տարբեր վերլուծում։

### Պատասխաններ

1. Ոչ կոլինեար վեկտորների զույգը։
2. $\\vec{p} + \\vec{q}$։
3. $\\vec{p} - \\vec{q}$։
4. $\\dfrac{1}{2}(\\vec{p} + \\vec{q})$։
5. $\\vec{q} - \\vec{p}$։
6. $\\dfrac{1}{2}(\\vec{p} + \\vec{q})$։
7. $5\\vec{p} + 3\\vec{q}$։
8. Ոչ, վերլուծումը միակն է։`,
        ru: `## Основная теорема

> **Теорема.** Если $\\vec{p}$ и $\\vec{q}$ неколлинеарны, то любой вектор $\\vec{a}$ плоскости можно записать в виде
> $$\\vec{a} = x\\vec{p} + y\\vec{q},$$
> причём числа $x$ и $y$ определяются однозначно.

Такую пару $\\vec{p}$, $\\vec{q}$ называют **базисом**, а равенство — **разложением** $\\vec{a}$ по этому базису.

Почему это работает: отложим все три вектора от одной точки $O$ и достроим параллелограмм, стороны которого лежат на прямых $\\vec{p}$ и $\\vec{q}$, а диагональ равна $\\vec{a}$. Две стороны коллинеарны $\\vec{p}$ и $\\vec{q}$, поэтому равны $x\\vec{p}$ и $y\\vec{q}$.

Почему разложение единственно: если $x\\vec{p} + y\\vec{q} = x_1\\vec{p} + y_1\\vec{q}$ при $x \\ne x_1$, то
$$(x - x_1)\\vec{p} = (y_1 - y)\\vec{q}, \\qquad \\vec{p} = \\frac{y_1 - y}{x - x_1}\\vec{q},$$
а это сделало бы $\\vec{p}$ и $\\vec{q}$ коллинеарными вопреки условию.

## В параллелограмме

**Пример 1.** В параллелограмме $ABCD$ пусть $\\overrightarrow{AB} = \\vec{p}$ и $\\overrightarrow{AD} = \\vec{q}$. Тогда
$$\\overrightarrow{AC} = \\vec{p} + \\vec{q}, \\qquad \\overrightarrow{BD} = \\vec{q} - \\vec{p}, \\qquad \\overrightarrow{CA} = -\\vec{p} - \\vec{q}.$$
Если $O$ — точка пересечения диагоналей, то $\\overrightarrow{AO} = \\dfrac{1}{2}(\\vec{p} + \\vec{q})$, так как диагонали параллелограмма делятся точкой пересечения пополам.

## В треугольнике

**Пример 2.** В треугольнике $ABC$ пусть $\\overrightarrow{AB} = \\vec{p}$ и $\\overrightarrow{AC} = \\vec{q}$, а $M$ — середина $BC$. Разложим медиану $\\overrightarrow{AM}$.

Так как $M$ — середина, $\\overrightarrow{BM} = \\dfrac{1}{2}\\overrightarrow{BC} = \\dfrac{1}{2}(\\vec{q} - \\vec{p})$, поэтому
$$\\overrightarrow{AM} = \\overrightarrow{AB} + \\overrightarrow{BM} = \\vec{p} + \\frac{1}{2}(\\vec{q} - \\vec{p}) = \\frac{1}{2}(\\vec{p} + \\vec{q}).$$

Значит, медиана к стороне равна половине суммы двух других сторон, взятых как векторы из той же вершины.

**Пример 3.** В тех же обозначениях средняя линия $MN$, соединяющая середины $AB$ и $AC$, удовлетворяет $\\overrightarrow{MN} = \\dfrac{1}{2}\\vec{q} - \\dfrac{1}{2}\\vec{p} = \\dfrac{1}{2}\\overrightarrow{BC}$. Это теорема о средней линии, доказанная в одну строку: она параллельна третьей стороне и вдвое короче.

**Пример 4.** Сумма векторов $\\vec{a} = 3\\vec{p} - \\vec{q}$ и $\\vec{b} = -\\vec{p} + 4\\vec{q}$ равна $\\vec{a} + \\vec{b} = 2\\vec{p} + 3\\vec{q}$: в базисе коэффициенты просто складываются.

### Упражнения

1. Что такое базис плоскости?
2. В параллелограмме $ABCD$, где $\\overrightarrow{AB} = \\vec{p}$, $\\overrightarrow{AD} = \\vec{q}$, разложите $\\overrightarrow{AC}$.
3. В том же параллелограмме разложите $\\overrightarrow{DB}$.
4. В том же параллелограмме разложите $\\overrightarrow{AO}$, где $O$ — центр.
5. В треугольнике $ABC$, где $\\overrightarrow{AB} = \\vec{p}$ и $\\overrightarrow{AC} = \\vec{q}$, разложите $\\overrightarrow{BC}$.
6. В том же треугольнике разложите медиану из $A$.
7. Сложите $\\vec{a} = 2\\vec{p} + 5\\vec{q}$ и $\\vec{b} = 3\\vec{p} - 2\\vec{q}$.
8. Может ли вектор иметь два разных разложения в одном базисе?

### Ответы

1. Пара неколлинеарных векторов.
2. $\\vec{p} + \\vec{q}$.
3. $\\vec{p} - \\vec{q}$.
4. $\\dfrac{1}{2}(\\vec{p} + \\vec{q})$.
5. $\\vec{q} - \\vec{p}$.
6. $\\dfrac{1}{2}(\\vec{p} + \\vec{q})$.
7. $5\\vec{p} + 3\\vec{q}$.
8. Нет, разложение единственно.`,
      },
      [
        q(t("A basis of the plane is", "Հարթության բազիսն է", "Базис плоскости — это"), [
          t("a pair of non-collinear vectors", "ոչ կոլինեար վեկտորների զույգը", "пара неколлинеарных векторов"),
          t("a pair of collinear vectors", "կոլինեար վեկտորների զույգը", "пара коллинеарных векторов"),
          t("any three vectors", "ցանկացած երեք վեկտոր", "любые три вектора"),
        ], 0),
        q(t("The decomposition of a vector in a given basis is", "Վեկտորի վերլուծումը տրված բազիսում", "Разложение вектора по данному базису"), [
          t("possible in many ways", "հնարավոր է շատ եղանակով", "возможно многими способами"),
          t("unique", "միակն է", "единственно"),
          t("possible only for long vectors", "հնարավոր է միայն երկար վեկտորների համար", "возможно только для длинных векторов"),
        ], 1),
        q(t("In the parallelogram ABCD with AB = p and AD = q, the vector DB equals", "ABCD զուգահեռագծում, որտեղ AB = p և AD = q, DB վեկտորը հավասար է", "В параллелограмме ABCD, где AB = p и AD = q, вектор DB равен"), [
          t("p + q", "p + q", "p + q"),
          t("q - p", "q - p", "q - p"),
          t("p - q", "p - q", "p - q"),
        ], 2),
        q(t("In the triangle ABC with AB = p and AC = q, the median from A equals", "ABC եռանկյունում, որտեղ AB = p և AC = q, A-ից տարված միջնագիծը հավասար է", "В треугольнике ABC, где AB = p и AC = q, медиана из A равна"), [
          t("half of p + q", "p + q-ի կեսին", "половине p + q"),
          t("p + q", "p + q", "p + q"),
          t("q - p", "q - p", "q - p"),
        ], 0),
        q(t("The vector MN joining the midpoints of AB and AC equals", "AB-ի և AC-ի միջնակետերը միացնող MN վեկտորը հավասար է", "Вектор MN, соединяющий середины AB и AC, равен"), [
          t("the vector BC", "BC վեկտորին", "вектору BC"),
          t("half of the vector BC", "BC վեկտորի կեսին", "половине вектора BC"),
          t("twice the vector BC", "կրկնակի BC վեկտորին", "удвоенному вектору BC"),
        ], 1),
        q(t("The sum of 2p + 5q and 3p - 2q equals", "2p + 5q-ի և 3p - 2q-ի գումարը հավասար է", "Сумма 2p + 5q и 3p - 2q равна"), [
          t("5p + 7q", "5p + 7q", "5p + 7q"),
          t("6p - 10q", "6p - 10q", "6p - 10q"),
          t("5p + 3q", "5p + 3q", "5p + 3q"),
        ], 2),
      ],
    ),
    lesson(
      "vectors-applications",
      ["Midline of a trapezium and other applications", "Սեղանի միջին գիծ և այլ կիրառություններ", "Средняя линия трапеции и другие применения"],
      {
        en: ["Prove the midline theorem for a triangle and a trapezium with vectors", "Prove that the medians of a triangle meet in one point", "Solve geometry problems by the vector method"],
        hy: ["Վեկտորներով ապացուցել միջին գծի թեորեմն եռանկյան և սեղանի համար", "Ապացուցել, որ եռանկյան միջնագծերը հատվում են մեկ կետում", "Լուծել երկրաչափական խնդիրներ վեկտորական եղանակով"],
        ru: ["Доказывать теорему о средней линии треугольника и трапеции с помощью векторов", "Доказывать, что медианы треугольника пересекаются в одной точке", "Решать геометрические задачи векторным методом"],
      },
      {
        en: `## The vector method

A geometric statement is proved with vectors in three steps:

1. choose a basis, usually two sides from one vertex;
2. express every vector of the drawing in that basis;
3. read the answer off the result: equal vectors mean equal and parallel segments, and $\\vec{b} = k\\vec{a}$ means parallel lines.

## Midline of a triangle

> The **midline** of a triangle joins the midpoints of two sides. It is parallel to the third side and equal to half of it.

**Proof.** Let $M$ and $N$ be the midpoints of $AB$ and $AC$, with $\\overrightarrow{AB} = \\vec{p}$ and $\\overrightarrow{AC} = \\vec{q}$. Then
$$\\overrightarrow{MN} = \\overrightarrow{AN} - \\overrightarrow{AM} = \\frac{1}{2}\\vec{q} - \\frac{1}{2}\\vec{p} = \\frac{1}{2}\\overrightarrow{BC}.$$
The vectors are collinear, so $MN \\parallel BC$, and the length is half.

## Midline of a trapezium

> The **midline** of a trapezium joins the midpoints of its legs. It is parallel to the bases and equal to half of their sum:
> $$m = \\frac{a + b}{2}.$$

**Proof.** Let $ABCD$ be a trapezium with $BC \\parallel AD$, and let $M$ and $N$ be the midpoints of $AB$ and $CD$. Going along two different paths from $M$ to $N$:
$$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}, \\qquad \\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}.$$
Adding them and using $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$ and $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$ gives
$$2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}, \\qquad \\overrightarrow{MN} = \\frac{1}{2}\\left(\\overrightarrow{AD} + \\overrightarrow{BC}\\right).$$
Both bases are co-directed, so the lengths simply add, and $m = \\dfrac{a + b}{2}$.

**Example 1.** A trapezium has bases $8$ cm and $14$ cm. Its midline is $\\dfrac{8 + 14}{2} = 11$ cm.

**Example 2.** The midline of a trapezium is $9$ cm and one base is $5$ cm. Then the other base is $2 \\cdot 9 - 5 = 13$ cm.

## The medians of a triangle

> The three medians of a triangle meet in one point, which divides each of them in the ratio $2 : 1$ from the vertex.

That point is the **centroid**, and it is the centre of mass of a triangular plate.

**Example 3.** In a triangle the median $AM$ is $12$ cm. The centroid cuts it into pieces of $8$ cm from $A$ and $4$ cm from $M$.

## More problems

**Example 4.** Prove that the midpoints of the sides of any quadrilateral are the vertices of a parallelogram.

Let $ABCD$ be the quadrilateral and $M$, $N$, $P$, $Q$ the midpoints of $AB$, $BC$, $CD$, $DA$. By the triangle midline, $\\overrightarrow{MN} = \\dfrac{1}{2}\\overrightarrow{AC}$ and $\\overrightarrow{QP} = \\dfrac{1}{2}\\overrightarrow{AC}$. The two vectors are equal, so $MNPQ$ is a parallelogram.

### Exercises

1. Find the midline of a trapezium with bases $6$ cm and $10$ cm.
2. Find the midline of a trapezium with bases $7$ m and $12$ m.
3. The midline is $15$ cm and one base is $11$ cm. Find the other base.
4. A triangle has a side of $18$ cm. Find the midline parallel to it.
5. A midline of a triangle is $7$ cm. Find the side parallel to it.
6. The median $BK$ is $9$ cm. Find the distance from $B$ to the centroid.
7. Prove with vectors that $MN \\parallel BC$ if $M$ and $N$ are the midpoints of $AB$ and $AC$.
8. A trapezium has bases $a$ and $3a$. By how much is the midline longer than the shorter base?

### Answers

1. $8$ cm.
2. $9{.}5$ m.
3. $19$ cm.
4. $9$ cm.
5. $14$ cm.
6. $6$ cm.
7. $\\overrightarrow{MN} = \\dfrac{1}{2}\\overrightarrow{BC}$, so the vectors are collinear.
8. The midline is $2a$, which is $a$ longer.`,
        hy: `## Վեկտորական եղանակը

Երկրաչափական պնդումը վեկտորներով ապացուցվում է երեք քայլով.

1. ընտրել բազիս, սովորաբար մեկ գագաթից երկու կողմ;
2. գծագրի ամեն վեկտոր արտահայտել այդ բազիսով;
3. արդյունքից կարդալ պատասխանը. հավասար վեկտորները նշանակում են հավասար և զուգահեռ հատվածներ, իսկ $\\vec{b} = k\\vec{a}$-ն՝ զուգահեռ ուղիղներ։

## Եռանկյան միջին գիծը

> Եռանկյան **միջին գիծը** միացնում է երկու կողմերի միջնակետերը։ Այն զուգահեռ է երրորդ կողմին և հավասար նրա կեսին։

**Ապացույց։** Թող $M$-ը և $N$-ը $AB$-ի և $AC$-ի միջնակետերն են, $\\overrightarrow{AB} = \\vec{p}$ և $\\overrightarrow{AC} = \\vec{q}$։ Ապա
$$\\overrightarrow{MN} = \\overrightarrow{AN} - \\overrightarrow{AM} = \\frac{1}{2}\\vec{q} - \\frac{1}{2}\\vec{p} = \\frac{1}{2}\\overrightarrow{BC}.$$
Վեկտորները կոլինեար են, ուստի $MN \\parallel BC$, իսկ երկարությունը կեսն է։

## Սեղանի միջին գիծը

> Սեղանի **միջին գիծը** միացնում է կողմնային կողմերի միջնակետերը։ Այն զուգահեռ է հիմքերին և հավասար նրանց գումարի կեսին.
> $$m = \\frac{a + b}{2}.$$

**Ապացույց։** Թող $ABCD$-ն սեղան է, որտեղ $BC \\parallel AD$, իսկ $M$-ը և $N$-ը $AB$-ի և $CD$-ի միջնակետերն են։ $M$-ից $N$ գնալով երկու տարբեր ճանապարհով.
$$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}, \\qquad \\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}.$$
Նրանց գումարելը և $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$, $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$ օգտագործելը տալիս է
$$2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}, \\qquad \\overrightarrow{MN} = \\frac{1}{2}\\left(\\overrightarrow{AD} + \\overrightarrow{BC}\\right).$$
Երկու հիմքերն էլ համուղղված են, ուստի երկարությունները պարզապես գումարվում են, և $m = \\dfrac{a + b}{2}$։

**Օրինակ 1։** Սեղանի հիմքերը $8$ սմ և $14$ սմ են։ Նրա միջին գիծը $\\dfrac{8 + 14}{2} = 11$ սմ է։

**Օրինակ 2։** Սեղանի միջին գիծը $9$ սմ է, իսկ մի հիմքը՝ $5$ սմ։ Ապա մյուս հիմքը $2 \\cdot 9 - 5 = 13$ սմ է։

## Եռանկյան միջնագծերը

> Եռանկյան երեք միջնագծերը հատվում են մեկ կետում, որը նրանցից ամենը գագաթից բաժանում է $2 : 1$ հարաբերությամբ։

Այդ կետը **ծանրության կենտրոնն** է, և այն եռանկյունաձև թիթեղի զանգվածի կենտրոնն է։

**Օրինակ 3։** Եռանկյունում $AM$ միջնագիծը $12$ սմ է։ Ծանրության կենտրոնն այն բաժանում է $A$-ից $8$ սմ և $M$-ից $4$ սմ կտորների։

## Ավելի շատ խնդիրներ

**Օրինակ 4։** Ապացուցենք, որ ցանկացած քառանկյան կողմերի միջնակետերը զուգահեռագծի գագաթներ են։

Թող $ABCD$-ն քառանկյունն է, իսկ $M$, $N$, $P$, $Q$-ն՝ $AB$-ի, $BC$-ի, $CD$-ի, $DA$-ի միջնակետերը։ Եռանկյան միջին գծով՝ $\\overrightarrow{MN} = \\dfrac{1}{2}\\overrightarrow{AC}$ և $\\overrightarrow{QP} = \\dfrac{1}{2}\\overrightarrow{AC}$։ Երկու վեկտորները հավասար են, ուստի $MNPQ$-ն զուգահեռագիծ է։

### Վարժություններ

1. Գտե՛ք $6$ սմ և $10$ սմ հիմքերով սեղանի միջին գիծը։
2. Գտե՛ք $7$ մ և $12$ մ հիմքերով սեղանի միջին գիծը։
3. Միջին գիծը $15$ սմ է, մի հիմքը՝ $11$ սմ։ Գտե՛ք մյուս հիմքը։
4. Եռանկյան կողմը $18$ սմ է։ Գտե՛ք նրան զուգահեռ միջին գիծը։
5. Եռանկյան միջին գիծը $7$ սմ է։ Գտե՛ք նրան զուգահեռ կողմը։
6. $BK$ միջնագիծը $9$ սմ է։ Գտե՛ք $B$-ից ծանրության կենտրոն հեռավորությունը։
7. Վեկտորներով ապացուցե՛ք, որ $MN \\parallel BC$, եթե $M$-ը և $N$-ը $AB$-ի և $AC$-ի միջնակետերն են։
8. Սեղանի հիմքերն են $a$ և $3a$։ Որքանո՞վ է միջին գիծը մեծ փոքր հիմքից։

### Պատասխաններ

1. $8$ սմ։
2. $9{,}5$ մ։
3. $19$ սմ։
4. $9$ սմ։
5. $14$ սմ։
6. $6$ սմ։
7. $\\overrightarrow{MN} = \\dfrac{1}{2}\\overrightarrow{BC}$, ուստի վեկտորները կոլինեար են։
8. Միջին գիծը $2a$ է, որը $a$-ով ավելի մեծ է։`,
        ru: `## Векторный метод

Геометрическое утверждение доказывают векторами в три шага:

1. выбрать базис, обычно две стороны из одной вершины;
2. выразить каждый вектор чертежа в этом базисе;
3. прочитать ответ по результату: равные векторы означают равные и параллельные отрезки, а $\\vec{b} = k\\vec{a}$ — параллельные прямые.

## Средняя линия треугольника

> **Средняя линия** треугольника соединяет середины двух сторон. Она параллельна третьей стороне и равна её половине.

**Доказательство.** Пусть $M$ и $N$ — середины $AB$ и $AC$, причём $\\overrightarrow{AB} = \\vec{p}$ и $\\overrightarrow{AC} = \\vec{q}$. Тогда
$$\\overrightarrow{MN} = \\overrightarrow{AN} - \\overrightarrow{AM} = \\frac{1}{2}\\vec{q} - \\frac{1}{2}\\vec{p} = \\frac{1}{2}\\overrightarrow{BC}.$$
Векторы коллинеарны, поэтому $MN \\parallel BC$, а длина вдвое меньше.

## Средняя линия трапеции

> **Средняя линия** трапеции соединяет середины боковых сторон. Она параллельна основаниям и равна полусумме их длин:
> $$m = \\frac{a + b}{2}.$$

**Доказательство.** Пусть $ABCD$ — трапеция с $BC \\parallel AD$, а $M$ и $N$ — середины $AB$ и $CD$. Пройдём от $M$ к $N$ двумя разными путями:
$$\\overrightarrow{MN} = \\overrightarrow{MA} + \\overrightarrow{AD} + \\overrightarrow{DN}, \\qquad \\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BC} + \\overrightarrow{CN}.$$
Сложив их и воспользовавшись тем, что $\\overrightarrow{MA} + \\overrightarrow{MB} = \\vec{0}$ и $\\overrightarrow{DN} + \\overrightarrow{CN} = \\vec{0}$, получим
$$2\\overrightarrow{MN} = \\overrightarrow{AD} + \\overrightarrow{BC}, \\qquad \\overrightarrow{MN} = \\frac{1}{2}\\left(\\overrightarrow{AD} + \\overrightarrow{BC}\\right).$$
Оба основания сонаправлены, поэтому длины просто складываются, и $m = \\dfrac{a + b}{2}$.

**Пример 1.** У трапеции основания $8$ см и $14$ см. Её средняя линия равна $\\dfrac{8 + 14}{2} = 11$ см.

**Пример 2.** Средняя линия трапеции равна $9$ см, одно основание $5$ см. Тогда другое основание равно $2 \\cdot 9 - 5 = 13$ см.

## Медианы треугольника

> Три медианы треугольника пересекаются в одной точке, которая делит каждую из них в отношении $2 : 1$, считая от вершины.

Эту точку называют **центром тяжести**; она является центром масс треугольной пластины.

**Пример 3.** В треугольнике медиана $AM$ равна $12$ см. Центр тяжести делит её на части $8$ см от $A$ и $4$ см от $M$.

## Ещё задачи

**Пример 4.** Докажем, что середины сторон любого четырёхугольника являются вершинами параллелограмма.

Пусть $ABCD$ — четырёхугольник, а $M$, $N$, $P$, $Q$ — середины $AB$, $BC$, $CD$, $DA$. По средней линии треугольника $\\overrightarrow{MN} = \\dfrac{1}{2}\\overrightarrow{AC}$ и $\\overrightarrow{QP} = \\dfrac{1}{2}\\overrightarrow{AC}$. Эти векторы равны, поэтому $MNPQ$ — параллелограмм.

### Упражнения

1. Найдите среднюю линию трапеции с основаниями $6$ см и $10$ см.
2. Найдите среднюю линию трапеции с основаниями $7$ м и $12$ м.
3. Средняя линия равна $15$ см, одно основание $11$ см. Найдите другое основание.
4. Сторона треугольника равна $18$ см. Найдите параллельную ей среднюю линию.
5. Средняя линия треугольника равна $7$ см. Найдите параллельную ей сторону.
6. Медиана $BK$ равна $9$ см. Найдите расстояние от $B$ до центра тяжести.
7. Докажите векторами, что $MN \\parallel BC$, если $M$ и $N$ — середины $AB$ и $AC$.
8. Основания трапеции равны $a$ и $3a$. На сколько средняя линия длиннее меньшего основания?

### Ответы

1. $8$ см.
2. $9{,}5$ м.
3. $19$ см.
4. $9$ см.
5. $14$ см.
6. $6$ см.
7. $\\overrightarrow{MN} = \\dfrac{1}{2}\\overrightarrow{BC}$, поэтому векторы коллинеарны.
8. Средняя линия равна $2a$, то есть длиннее на $a$.`,
      },
      [
        q(t("The midline of a triangle equals", "Եռանկյան միջին գիծը հավասար է", "Средняя линия треугольника равна"), [
          t("half of the third side", "երրորդ կողմի կեսին", "половине третьей стороны"),
          t("the third side", "երրորդ կողմին", "третьей стороне"),
          t("twice the third side", "կրկնակի երրորդ կողմին", "удвоенной третьей стороне"),
        ], 0),
        q(t("The midline of a trapezium equals", "Սեղանի միջին գիծը հավասար է", "Средняя линия трапеции равна"), [
          t("the difference of the bases", "հիմքերի տարբերությանը", "разности оснований"),
          t("half the sum of the bases", "հիմքերի գումարի կեսին", "полусумме оснований"),
          t("the sum of the bases", "հիմքերի գումարին", "сумме оснований"),
        ], 1),
        q(t("A trapezium with bases 6 cm and 10 cm has a midline of", "6 սմ և 10 սմ հիմքերով սեղանի միջին գիծն է", "У трапеции с основаниями 6 см и 10 см средняя линия равна"), [
          t("4 cm", "4 սմ", "4 см"),
          t("16 cm", "16 սմ", "16 см"),
          t("8 cm", "8 սմ", "8 см"),
        ], 2),
        q(t("The medians of a triangle meet in one point and are divided there in the ratio", "Եռանկյան միջնագծերը հատվում են մեկ կետում և այնտեղ բաժանվում են հարաբերությամբ", "Медианы треугольника пересекаются в одной точке и делятся в ней в отношении"), [
          t("2 : 1 from the vertex", "2 : 1 գագաթից", "2 : 1, считая от вершины"),
          t("1 : 1", "1 : 1", "1 : 1"),
          t("3 : 1 from the vertex", "3 : 1 գագաթից", "3 : 1, считая от вершины"),
        ], 0),
        q(t("If a median is 9 cm, the distance from the vertex to the centroid equals", "Եթե միջնագիծը 9 սմ է, գագաթից ծանրության կենտրոն հեռավորությունը հավասար է", "Если медиана равна 9 см, расстояние от вершины до центра тяжести равно"), [
          t("3 cm", "3 սմ", "3 см"),
          t("6 cm", "6 սմ", "6 см"),
          t("4,5 cm", "4,5 սմ", "4,5 см"),
        ], 1),
        q(t("The midpoints of the sides of any quadrilateral are the vertices of", "Ցանկացած քառանկյան կողմերի միջնակետերը գագաթներն են", "Середины сторон любого четырёхугольника являются вершинами"), [
          t("a square", "քառակուսու", "квадрата"),
          t("a trapezium", "սեղանի", "трапеции"),
          t("a parallelogram", "զուգահեռագծի", "параллелограмма"),
        ], 2),
      ],
    ),
  ],
};
