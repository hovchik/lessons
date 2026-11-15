import { th } from "../kit";

const r = String.raw;

/** Math 3, unit 4: first fractions and area. */
export const math3d = {
  "fractions-of-a-whole": th(
    r`### Reading a fraction

In $\frac{1}{4}$ the bottom number, the **denominator**, says into how many equal parts the whole is cut. The top number, the **numerator**, says how many of those parts we take. The line between them can be read as "out of": one out of four equal parts.

### A fraction needs a whole

"Half" means nothing on its own: half of what? Half of a small pizza is less than a quarter of a giant one. You can only compare $\frac{1}{2}$ and $\frac{1}{4}$ when they are parts of the **same** whole, or of wholes of the same size.

### Equal does not mean the same shape

A square can be cut in half along a straight line, along a diagonal, or even with a zigzag through the middle. The halves look different each time, but if the two pieces of one cut are the same size, each piece is a half. What matters is the amount, not the shape.

### Where fractions come from

People needed fractions to share land, bread and harvests. About 4000 years ago the ancient Egyptians wrote a fraction by putting a small mouth-shaped sign over a number: it meant "one part of". They mostly used fractions with 1 on top, just like the ones you learn this year.`,
    r`### Ինչպես կարդալ կոտորակը

$\frac{1}{4}$-ում ներքևի թիվը՝ **հայտարարը**, ցույց է տալիս, թե քանի հավասար մասի է բաժանված ամբողջը։ Վերևի թիվը՝ **համարիչը**, ցույց է տալիս, թե այդ մասերից քանիսն ենք վերցնում։ Նրանց միջև գիծը կարելի է կարդալ «ից»՝ չորս հավասար մասից մեկը։

### Կոտորակին ամբողջ է պետք

«Կես» բառն ինքնին ոչինչ չի նշանակում. ինչի՞ կեսը։ Փոքր պիցցայի կեսը պակաս է հսկա պիցցայի քառորդից։ $\frac{1}{2}$-ը և $\frac{1}{4}$-ը կարելի է համեմատել միայն այն դեպքում, երբ դրանք **նույն** ամբողջի կամ նույն չափի ամբողջների մասեր են։

### Հավասարը չի նշանակում նույն ձևի

Քառակուսին կարելի է կիսել ուղիղ գծով, անկյունագծով կամ նույնիսկ մեջտեղով անցնող զիգզագով։ Կեսերն ամեն անգամ տարբեր տեսք ունեն, բայց եթե մեկ կտրվածքի երկու կտորները նույն չափի են, յուրաքանչյուրը կես է։ Կարևորը քանակն է, ոչ թե ձևը։

### Որտեղից են հայտնվել կոտորակները

Մարդկանց կոտորակներ էին պետք հող, հաց և բերք բաժանելու համար։ Մոտ 4000 տարի առաջ հին եգիպտացիները կոտորակը գրում էին՝ թվի վրա դնելով բերանի ձև ունեցող փոքրիկ նշան. այն նշանակում էր «մեկ մաս»։ Նրանք հիմնականում օգտագործում էին վերևում 1 ունեցող կոտորակներ, ճիշտ ինչպես նրանք, որոնք դու սովորում ես այս տարի։`,
    r`### Как читать дробь

В дроби $\frac{1}{4}$ нижнее число — **знаменатель** — говорит, на сколько равных частей разделили целое. Верхнее число — **числитель** — говорит, сколько таких частей взяли. Черту между ними можно читать как «из»: одна часть из четырёх равных.

### Дроби нужно целое

Слово «половина» само по себе ничего не значит: половина чего? Половина маленькой пиццы меньше четверти огромной. Сравнивать $\frac{1}{2}$ и $\frac{1}{4}$ можно, только если это части **одного и того же** целого или целых одинакового размера.

### Равные — не значит одинаковые по форме

Квадрат можно разделить пополам прямой линией, по диагонали или даже зигзагом через середину. Половинки каждый раз выглядят по-разному, но если два куска одного разреза одинаковы по размеру, каждый из них — половина. Важен размер, а не форма.

### Откуда взялись дроби

Дроби понадобились людям, чтобы делить землю, хлеб и урожай. Около 4000 лет назад древние египтяне записывали дробь, ставя над числом маленький знак в форме рта: он означал «одна часть». Чаще всего они пользовались дробями с 1 наверху — как раз такими, какие ты учишь в этом году.`,
  ),

  "fraction-of-a-number": th(
    r`### Why we divide

Finding $\frac{1}{4}$ of 12 means sharing 12 into 4 equal groups and taking one group. Sharing equally is exactly what division does. So "a quarter of" and "divided by 4" mean the same thing. In the same way "half of" means "divided by 2", and "a third of" means "divided by 3".

### Half of a half

Half of 12 is 6, and half of 6 is 3. And $\frac{1}{4}$ of 12 is also 3! Halving twice gives a quarter, because cutting each half in two makes four equal parts. This is a quick way to find a quarter in your head: $\frac{1}{4}$ of 60 is half of 30, which is 15.

### A part is smaller than the whole

One part out of several equal parts is always less than the whole: $\frac{1}{4}$ of 12 is smaller than 12. If you multiplied by mistake, you would get 48, bigger than the whole, so you would know it is wrong. Always ask: should my answer be smaller than the number I started with?

### When it does not divide evenly

$\frac{1}{4}$ of 10 apples: $10 \div 4$ is 2 with remainder 2. Each person gets 2 whole apples, and the last 2 apples have to be cut. With money it is easier: $\frac{1}{4}$ of 1000 drams is 250 drams, no cutting needed.`,
    r`### Ինչու ենք բաժանում

12-ի $\frac{1}{4}$-ը գտնելը նշանակում է 12-ը բաշխել 4 հավասար խմբի և վերցնել մեկ խումբ։ Հավասար բաշխելը հենց այն է, ինչ անում է բաժանումը։ Ուստի «քառորդը» և «4-ի բաժանած» նույն բանն են նշանակում։ Նույն կերպ «կեսը» նշանակում է «2-ի բաժանած», իսկ «մեկ երրորդը»՝ «3-ի բաժանած»։

### Կեսի կեսը

12-ի կեսը 6 է, իսկ 6-ի կեսը՝ 3։ Իսկ 12-ի $\frac{1}{4}$-ը նույնպես 3 է։ Երկու անգամ կիսելը տալիս է քառորդ, որովհետև յուրաքանչյուր կեսը երկու մասի կտրելով ստացվում է չորս հավասար մաս։ Սա քառորդը մտքում գտնելու արագ ձև է. 60-ի $\frac{1}{4}$-ը 30-ի կեսն է, այսինքն՝ 15։

### Մասը փոքր է ամբողջից

Մի քանի հավասար մասից մեկը միշտ փոքր է ամբողջից. 12-ի $\frac{1}{4}$-ը փոքր է 12-ից։ Եթե սխալմամբ բազմապատկեիր, կստանայիր 48, որն ամբողջից մեծ է, և կհասկանայիր, որ սխալ է։ Միշտ հարցրու քեզ. պատասխանս պե՞տք է փոքր լինի սկզբնական թվից։

### Երբ առանց մնացորդի չի բաժանվում

10 խնձորի $\frac{1}{4}$-ը. $10 \div 4$-ը 2 է, մնացորդը՝ 2։ Յուրաքանչյուրին հասնում է 2 ամբողջ խնձոր, իսկ վերջին 2 խնձորը պետք է կտրել։ Փողի դեպքում ավելի հեշտ է. 1000 դրամի $\frac{1}{4}$-ը 250 դրամ է, կտրել պետք չէ։`,
    r`### Почему мы делим

Найти $\frac{1}{4}$ от 12 — значит разделить 12 на 4 равные группы и взять одну группу. Делить поровну — это как раз то, что делает деление. Поэтому «четверть от» и «разделить на 4» — одно и то же. Так же «половина от» значит «разделить на 2», а «треть от» — «разделить на 3».

### Половина половины

Половина от 12 — это 6, а половина от 6 — это 3. И $\frac{1}{4}$ от 12 — тоже 3! Если дважды разделить пополам, получится четверть: каждую половину режем на две части, и выходит четыре равные части. Это быстрый способ найти четверть в уме: $\frac{1}{4}$ от 60 — это половина от 30, то есть 15.

### Часть меньше целого

Одна часть из нескольких равных всегда меньше целого: $\frac{1}{4}$ от 12 меньше 12. Если по ошибке умножить, получится 48 — больше целого, и сразу ясно, что это неверно. Всегда спрашивай себя: должен ли мой ответ быть меньше исходного числа?

### Когда не делится нацело

$\frac{1}{4}$ от 10 яблок: $10 \div 4$ — это 2 и 2 в остатке. Каждому достаётся 2 целых яблока, а последние 2 яблока придётся разрезать. С деньгами проще: $\frac{1}{4}$ от 1000 драмов — это 250 драмов, резать ничего не нужно.`,
  ),

  "number-from-fraction": th(
    r`### Forwards and backwards

Finding a fraction of a number and finding a number from its fraction are opposites, like × and ÷. Forwards: the whole is 15, and $\frac{1}{3}$ of it is $15 \div 3 = 5$. Backwards: $\frac{1}{3}$ is 5, so the whole is $5 \times 3 = 15$. Each problem is the check of the other.

### When you know more than one piece

$\frac{2}{5}$ of a number is 8. Two pieces together make 8, so one piece is $8 \div 2 = 4$, and all five pieces make $4 \times 5 = 20$. Check: $\frac{2}{5}$ of 20 is $20 \div 5 \times 2 = 8$. ✔️ The plan is always the same: first find **one** piece, then the whole.

### An old puzzle

An old riddle asks: "A brick weighs 1 kg plus half a brick. How much does the whole brick weigh?" Many people answer "one and a half kilograms". Draw a bar for the brick and cut it into two halves. The brick is "1 kg + one half", so the other half must be the 1 kg. Both halves are equal, so the brick weighs $1 + 1 = 2$ kg. A picture turns tricky words into an easy problem.`,
    r`### Առաջ և հետ

Թվի կոտորակը գտնելը և թիվն ըստ իր կոտորակի գտնելը հակադիր գործողություններ են, ինչպես × և ÷։ Առաջ. ամբողջը 15 է, նրա $\frac{1}{3}$-ը՝ $15 \div 3 = 5$։ Հետ. $\frac{1}{3}$-ը 5 է, ուրեմն ամբողջը $5 \times 3 = 15$ է։ Յուրաքանչյուր խնդիր մյուսի ստուգումն է։

### Երբ հայտնի է մեկից ավելի մաս

Թվի $\frac{2}{5}$-ը 8 է։ Երկու մասը միասին 8 է, ուստի մեկ մասը $8 \div 2 = 4$ է, իսկ բոլոր հինգ մասերը՝ $4 \times 5 = 20$։ Ստուգում. 20-ի $\frac{2}{5}$-ը $20 \div 5 \times 2 = 8$ է։ ✔️ Ծրագիրը միշտ նույնն է. նախ գտնում ես **մեկ** մասը, հետո՝ ամբողջը։

### Հին հանելուկ

Մի հին հանելուկ հարցնում է. «Աղյուսը կշռում է 1 կգ և կես աղյուս։ Որքա՞ն է կշռում ամբողջ աղյուսը»։ Շատերը պատասխանում են՝ մեկուկես կգ։ Աղյուսի համար գիծ նկարիր և կիսիր այն։ Աղյուսը «1 կգ + մեկ կես» է, ուրեմն մյուս կեսն էլ հենց այդ 1 կգ-ն է։ Երկու կեսերը հավասար են, ուստի աղյուսը կշռում է $1 + 1 = 2$ կգ։ Նկարը բարդ բառերը վերածում է հեշտ խնդրի։`,
    r`### Вперёд и назад

Найти дробь от числа и найти число по его дроби — противоположные действия, как × и ÷. Вперёд: целое 15, его $\frac{1}{3}$ — это $15 \div 3 = 5$. Назад: $\frac{1}{3}$ — это 5, значит, целое $5 \times 3 = 15$. Каждая задача — проверка другой.

### Когда известна не одна часть

$\frac{2}{5}$ числа равны 8. Две части вместе — 8, значит, одна часть — $8 \div 2 = 4$, а все пять частей — $4 \times 5 = 20$. Проверка: $\frac{2}{5}$ от 20 — это $20 \div 5 \times 2 = 8$. ✔️ План всегда один: сначала найди **одну** часть, потом целое.

### Старая задачка

Старая загадка спрашивает: «Кирпич весит 1 кг и ещё полкирпича. Сколько весит весь кирпич?» Многие отвечают: полтора килограмма. Нарисуй полоску-кирпич и раздели её пополам. Кирпич — это «1 кг + одна половина», значит, другая половина и есть этот 1 кг. Половинки равны, поэтому кирпич весит $1 + 1 = 2$ кг. Рисунок превращает хитрые слова в простую задачу.`,
  ),

  "area-units": th(
    r`### Area is about covering

Length tells how far; area tells how much surface: how much paint a wall needs, or how many tiles a floor needs. That is why length is measured with a **line** (a centimetre) and area with a **square** (a square centimetre).

### Why 1 dm² is 100 cm², not 10

A decimetre is 10 cm, so a square decimetre is a square 10 cm by 10 cm. Inside it fit 10 rows of 10 small squares: $10 \times 10 = 100$ cm². With metres it is the same: 1 m² holds 100 rows of 100 squares, which is 10,000 cm². Units of area grow much faster than units of length, because both sides grow.

### Cutting and moving keeps the area

Cut a shape into pieces and put them together differently: the area stays the same, because no squares were added or lost. This is how you find the area of an L-shaped room: cut it into two rectangles and add their areas.

### Units for land

Long ago farmers measured land by how much a team of oxen could plough in a day. Today land is measured in **ares** (100 m², a square 10 m by 10 m) and **hectares** (10,000 m², a square 100 m by 100 m). A football pitch is about 7000 m², a bit less than a hectare.`,
    r`### Մակերեսը ծածկելու մասին է

Երկարությունը ցույց է տալիս՝ որքան հեռու, մակերեսը՝ որքան մակերևույթ. որքան ներկ է պետք պատին կամ քանի սալիկ՝ հատակին։ Ահա թե ինչու երկարությունը չափում են **գծով** (սանտիմետրով), իսկ մակերեսը՝ **քառակուսիով** (քառակուսի սանտիմետրով)։

### Ինչու է 1 դմ²-ն 100 սմ², ոչ թե 10

Դեցիմետրը 10 սմ է, ուստի քառակուսի դեցիմետրը 10 սմ կողմով քառակուսի է։ Նրա մեջ տեղավորվում է 10 շարք՝ ամեն մեկում 10 փոքր քառակուսի. $10 \times 10 = 100$ սմ²։ Մետրերի դեպքում նույնն է. 1 մ²-ում տեղավորվում է 100 շարք՝ 100-ական քառակուսիով, այսինքն՝ 10 000 սմ²։ Մակերեսի միավորները շատ ավելի արագ են աճում, քան երկարության միավորները, որովհետև աճում են երկու կողմերն էլ։

### Կտրելիս և տեղափոխելիս մակերեսը չի փոխվում

Պատկերը կտրիր մասերի և դրանք այլ կերպ միացրու. մակերեսը նույնը կմնա, որովհետև ոչ մի քառակուսի չի ավելացել և չի կորել։ Այսպես են գտնում L-աձև սենյակի մակերեսը. այն կտրում են երկու ուղղանկյան և գումարում դրանց մակերեսները։

### Հողի միավորներ

Վաղուց հողագործները հողը չափում էին նրանով, թե եզների լուծը մեկ օրում որքան կարող է վարել։ Այսօր հողը չափում են **արերով** (100 մ²՝ 10 մ կողմով քառակուսի) և **հեկտարներով** (10 000 մ²՝ 100 մ կողմով քառակուսի)։ Ֆուտբոլի դաշտը մոտ 7000 մ² է՝ հեկտարից մի քիչ պակաս։`,
    r`### Площадь — это про покрытие

Длина говорит, как далеко; площадь — сколько поверхности: сколько краски нужно на стену или сколько плиток на пол. Поэтому длину измеряют **отрезком** (сантиметром), а площадь — **квадратом** (квадратным сантиметром).

### Почему 1 дм² — это 100 см², а не 10

Дециметр — это 10 см, значит, квадратный дециметр — квадрат со стороной 10 см. В нём помещается 10 рядов по 10 маленьких квадратиков: $10 \times 10 = 100$ см². С метрами так же: в 1 м² помещается 100 рядов по 100 квадратиков, то есть 10 000 см². Единицы площади растут гораздо быстрее единиц длины, потому что растут обе стороны.

### Разрезали и переложили — площадь та же

Разрежь фигуру на части и сложи их по-другому: площадь не изменится, ведь ни один квадратик не добавился и не потерялся. Так находят площадь Г-образной комнаты: её разрезают на два прямоугольника и складывают их площади.

### Единицы для земли

Когда-то землю мерили тем, сколько упряжка волов вспашет за день. Сегодня землю измеряют в **арах** (100 м², квадрат 10 м на 10 м; в быту — «сотка») и **гектарах** (10 000 м², квадрат 100 м на 100 м). Футбольное поле — около 7000 м², чуть меньше гектара.`,
  ),

  "area-rectangle": th(
    r`### Same fence, different fields

A farmer has 12 m of fence for a rectangular pen. With sides 1 m and 5 m, the area is $1 \times 5 = 5$ m². With 2 m and 4 m, it is $2 \times 4 = 8$ m². With 3 m and 3 m, it is $3 \times 3 = 9$ m². The perimeter is 12 m every time, but the area changes, and the **square** gives the most. That is why many pens and gardens are nearly square.

### Double the sides, four times the area

If you double both sides of a rectangle, its area becomes **four** times bigger, not two. A 2 by 3 rectangle has area 6; a 4 by 6 rectangle has area 24. Draw it: the big rectangle holds four copies of the small one, two along and two up.

### Area or perimeter?

To buy a carpet for a room 5 m by 4 m, you need its area: $5 \times 4 = 20$ m². To buy a skirting board to run around the walls, you need its perimeter: $2 \times (5 + 4) = 18$ m. Shops sell carpets by area and borders by length. Before calculating, ask: am I covering the inside, or going around the edge?`,
    r`### Նույն ցանկապատը, տարբեր դաշտեր

Ֆերմերն ունի 12 մ ցանկապատ ուղղանկյուն փարախի համար։ 1 մ և 5 մ կողմերի դեպքում մակերեսը $1 \times 5 = 5$ մ² է։ 2 մ և 4 մ կողմերի դեպքում՝ $2 \times 4 = 8$ մ²։ 3 մ և 3 մ կողմերի դեպքում՝ $3 \times 3 = 9$ մ²։ Պարագիծն ամեն անգամ 12 մ է, բայց մակերեսը փոխվում է, և ամենամեծը **քառակուսու** մոտ է։ Ահա թե ինչու շատ փարախներ և բանջարանոցներ համարյա քառակուսի են։

### Կողմերը կրկնապատկիր՝ մակերեսը կքառապատկվի

Եթե ուղղանկյան երկու կողմն էլ կրկնապատկես, մակերեսը կմեծանա **չորս** անգամ, ոչ թե երկու։ 2-ը 3-ի վրա ուղղանկյան մակերեսը 6 է, 4-ը 6-ի վրա ուղղանկյանը՝ 24։ Նկարիր. մեծ ուղղանկյան մեջ տեղավորվում է փոքրի չորս օրինակ՝ երկուսը երկայնքով և երկուսը՝ վերև։

### Մակերե՞ս, թե՞ պարագիծ

5 մ-ը 4 մ-ի վրա սենյակի համար գորգ գնելու համար պետք է մակերեսը. $5 \times 4 = 20$ մ²։ Պատերի երկայնքով շրիշակ գնելու համար պետք է պարագիծը. $2 \times (5 + 4) = 18$ մ։ Խանութները գորգերը վաճառում են ըստ մակերեսի, իսկ եզրաշերտերը՝ ըստ երկարության։ Հաշվելուց առաջ հարցրու. ծածկու՞մ եմ ներսը, թե՞ շրջանցում եզրը։`,
    r`### Тот же забор — разные загоны

У фермера 12 м забора для прямоугольного загона. Со сторонами 1 м и 5 м площадь $1 \times 5 = 5$ м². Со сторонами 2 м и 4 м — $2 \times 4 = 8$ м². Со сторонами 3 м и 3 м — $3 \times 3 = 9$ м². Периметр каждый раз 12 м, а площадь меняется, и больше всего она у **квадрата**. Поэтому многие загоны и огороды почти квадратные.

### Удвой стороны — площадь вырастет вчетверо

Если удвоить обе стороны прямоугольника, площадь станет больше в **четыре** раза, а не в два. У прямоугольника 2 на 3 площадь 6, у прямоугольника 4 на 6 — 24. Нарисуй: в большом прямоугольнике помещаются четыре маленьких — два в длину и два в высоту.

### Площадь или периметр?

Чтобы купить ковёр в комнату 5 м на 4 м, нужна площадь: $5 \times 4 = 20$ м². Чтобы купить плинтус вдоль стен, нужен периметр: $2 \times (5 + 4) = 18$ м. Ковры продают по площади, а плинтусы — по длине. Прежде чем считать, спроси себя: я покрываю то, что внутри, или обхожу край?`,
  ),
};
