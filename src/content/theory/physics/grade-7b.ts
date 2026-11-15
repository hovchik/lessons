import { th } from "../kit";

const r = String.raw;

/** Physics 7, unit 3: motion, mass, density, forces. */
export const physics7b = {
  "mechanical-motion": th(
    r`### Galileo's ship

In 1632 Galileo asked the reader to shut themselves in the cabin below deck of a large ship, with flies, a bowl of fish and a dripping bottle. While the ship stands still, the flies fly equally in all directions, the drops fall straight down, and a jump forward is as long as a jump backward. Now let the ship move **uniformly** on calm water, at any speed. Nothing changes. No experiment inside the cabin can tell whether the ship is moving.

This is the **principle of relativity**: the laws of motion are the same for all bodies of reference that move uniformly in a straight line relative to each other. "Absolute rest" cannot be detected. Only motion **relative** to something has meaning.

### We are all moving fast

| Motion of a person in Yerevan | Speed |
|---|---|
| with the Earth's rotation | about $350$ m/s |
| with the Earth around the Sun | about $30\,000$ m/s |
| with the Sun around the centre of the Galaxy | about $230\,000$ m/s |

We feel none of it, because these motions are almost uniform. We feel only **changes** of speed: a bus braking, a lift starting.

### Path and displacement

The **path** is the length of the trajectory. The **displacement** is the arrow from the start to the end. After a lap of a stadium the path is $400$ m and the displacement is zero. For motion along a straight line in one direction, the two are equal; otherwise the path is longer. This difference will matter when you study speed as a vector.

### The material point

A body can be treated as a **point** when its size is much smaller than the distances it moves. A plane flying from Yerevan to Moscow is a point; the same plane parking at a gate is not. Choosing this model is the first step in solving any motion problem.`,
    r`### Գալիլեյի նավը

1632 թվականին Գալիլեյն առաջարկեց ընթերցողին փակվել մեծ նավի տախտակամածի տակ գտնվող խցիկում՝ ճանճերի, ձկներով ամանի և կաթկթող շշի հետ։ Քանի դեռ նավը կանգնած է, ճանճերը թռչում են բոլոր ուղղություններով հավասարապես, կաթիլներն ընկնում են ուղիղ ներքև, իսկ ցատկը առաջ նույնքան երկար է, որքան հետ։ Հիմա թող նավը **հավասարաչափ** շարժվի հանդարտ ջրով՝ ցանկացած արագությամբ։ Ոչինչ չի փոխվում։ Խցիկի ներսում ոչ մի փորձ չի կարող ասել, թե արդյոք նավը շարժվում է։

Սա **հարաբերականության սկզբունքն** է. շարժման օրենքները նույնն են հաշվարկման բոլոր մարմինների համար, որոնք իրար նկատմամբ շարժվում են հավասարաչափ և ուղղագիծ։ «Բացարձակ դադարը» հնարավոր չէ հայտնաբերել։ Իմաստ ունի միայն ինչ-որ բանի **նկատմամբ** շարժումը։

### Բոլորս արագ ենք շարժվում

| Երևանում գտնվող մարդու շարժումը | Արագություն |
|---|---|
| Երկրի պտույտի հետ | մոտ $350$ մ/վ |
| Երկրի հետ Արեգակի շուրջ | մոտ $30\,000$ մ/վ |
| Արեգակի հետ Գալակտիկայի կենտրոնի շուրջ | մոտ $230\,000$ մ/վ |

Դրանցից ոչ մեկը չենք զգում, քանի որ այս շարժումները գրեթե հավասարաչափ են։ Զգում ենք միայն արագության **փոփոխությունները**. ավտոբուսի արգելակումը, վերելակի շարժվելը։

### Ճանապարհ և տեղափոխություն

**Ճանապարհը** հետագծի երկարությունն է։ **Տեղափոխությունը** սկզբից վերջ տարված սլաքն է։ Մարզադաշտի մեկ շրջանից հետո ճանապարհը $400$ մ է, իսկ տեղափոխությունը՝ զրո։ Ուղղի վրա մեկ ուղղությամբ շարժման դեպքում դրանք հավասար են, մյուս դեպքերում ճանապարհն ավելի երկար է։ Այս տարբերությունը կարևոր կլինի, երբ արագությունն ուսումնասիրեք որպես վեկտոր։

### Նյութական կետ

Մարմինը կարելի է դիտարկել որպես **կետ**, երբ նրա չափերը շատ փոքր են նրա անցած հեռավորություններից։ Երևանից Մոսկվա թռչող ինքնաթիռը կետ է, իսկ նույն ինքնաթիռը կայանատեղիում՝ ոչ։ Այս մոդելի ընտրությունը շարժման ցանկացած խնդրի լուծման առաջին քայլն է։`,
    r`### Корабль Галилея

В 1632 году Галилей предложил читателю запереться в каюте под палубой большого корабля, с мухами, чашей с рыбками и капающей бутылью. Пока корабль стоит, мухи летают одинаково во все стороны, капли падают отвесно, а прыжок вперёд так же длинен, как прыжок назад. Теперь пусть корабль движется **равномерно** по спокойной воде с любой скоростью. Ничего не меняется. Никакой опыт внутри каюты не покажет, движется ли корабль.

Это **принцип относительности**: законы движения одинаковы для всех тел отсчёта, движущихся друг относительно друга равномерно и прямолинейно. «Абсолютный покой» обнаружить нельзя. Смысл имеет только движение **относительно** чего-то.

### Все мы движемся быстро

| Движение человека в Ереване | Скорость |
|---|---|
| вместе с вращением Земли | около $350$ м/с |
| вместе с Землёй вокруг Солнца | около $30\,000$ м/с |
| вместе с Солнцем вокруг центра Галактики | около $230\,000$ м/с |

Мы не чувствуем ничего из этого, потому что эти движения почти равномерные. Чувствуются только **изменения** скорости: торможение автобуса, разгон лифта.

### Путь и перемещение

**Путь** — длина траектории. **Перемещение** — стрелка от начала к концу. После круга по стадиону путь $400$ м, а перемещение равно нулю. При движении по прямой в одну сторону они равны, в остальных случаях путь больше. Эта разница станет важной, когда вы будете изучать скорость как вектор.

### Материальная точка

Тело можно считать **точкой**, когда его размеры много меньше проходимых им расстояний. Самолёт, летящий из Еревана в Москву, — точка; тот же самолёт у выхода на посадку — нет. Выбор этой модели — первый шаг в решении любой задачи о движении.`,
  ),

  speed: th(
    r`### The average-speed trap, solved in general

A car goes from $A$ to $B$ at $v_1$ and comes back at $v_2$. What is the average speed for the round trip? Let the distance one way be $s$.
$$t_1 = \frac{s}{v_1},\quad t_2 = \frac{s}{v_2},\qquad v_{\text{av}} = \frac{2s}{\frac{s}{v_1} + \frac{s}{v_2}} = \frac{2 v_1 v_2}{v_1 + v_2}.$$
The distance $s$ cancels. For $60$ km/h there and $40$ km/h back: $v_{\text{av}} = \frac{2 \cdot 60 \cdot 40}{100} = 48$ km/h, **not** $50$. The car spends more **time** at the lower speed, so the lower speed counts more.

A classic puzzle: you drive $1$ km at $30$ km/h. How fast must you drive the second kilometre to average $60$ km/h for both? To average $60$ km/h over $2$ km you have $2$ minutes in total, and the first kilometre already took $2$ minutes. It is impossible at any speed.

### When the arithmetic mean is right

If the car drives **equal times** (not equal distances) at $v_1$ and $v_2$, then
$$v_{\text{av}} = \frac{v_1 t + v_2 t}{2t} = \frac{v_1 + v_2}{2}.$$
So the answer depends on what is equal: times or distances.

### Relative speed

Two trains move towards each other at $60$ km/h and $90$ km/h. Relative to one train, the other approaches at $60 + 90 = 150$ km/h. If they move in the same direction, the faster one gains at $90 - 60 = 30$ km/h. Choosing a moving train as the body of reference often turns a two-body problem into a one-body problem.

*Example.* Trains $300$ km apart, moving towards each other at $60$ and $90$ km/h, meet after $\frac{300}{150} = 2$ h.`,
    r`### Միջին արագության թակարդը՝ ընդհանուր լուծմամբ

Մեքենան $A$-ից $B$ գնում է $v_1$ արագությամբ և վերադառնում $v_2$-ով։ Որքա՞ն է միջին արագությունը գնալ-գալու համար։ Թող մեկ ուղղությամբ հեռավորությունը լինի $s$.
$$t_1 = \frac{s}{v_1},\quad t_2 = \frac{s}{v_2},\qquad v_{\text{միջ}} = \frac{2s}{\frac{s}{v_1} + \frac{s}{v_2}} = \frac{2 v_1 v_2}{v_1 + v_2}$$
$s$ հեռավորությունը կրճատվում է։ Գնալիս $60$ կմ/ժ և վերադառնալիս $40$ կմ/ժ դեպքում. $v_{\text{միջ}} = \frac{2 \cdot 60 \cdot 40}{100} = 48$ կմ/ժ, **ոչ թե** $50$։ Մեքենան ավելի շատ **ժամանակ** է անցկացնում փոքր արագությամբ, ուստի փոքր արագությունն ավելի մեծ կշիռ ունի։

Դասական գլուխկոտրուկ. $1$ կմ անցնում եք $30$ կմ/ժ արագությամբ։ Ինչ արագությամբ պետք է անցնեք երկրորդ կիլոմետրը, որ երկուսի միջինը լինի $60$ կմ/ժ։ $2$ կմ-ի վրա $60$ կմ/ժ միջինի համար ընդամենը $2$ րոպե ունեք, իսկ առաջին կիլոմետրն արդեն տևել է $2$ րոպե։ Դա անհնար է ցանկացած արագությամբ։

### Երբ է միջին թվաբանականը ճիշտ

Եթե մեքենան $v_1$ և $v_2$ արագություններով շարժվում է **հավասար ժամանակներ** (ոչ թե հավասար ճանապարհներ), ապա
$$v_{\text{միջ}} = \frac{v_1 t + v_2 t}{2t} = \frac{v_1 + v_2}{2}$$
Ուստի պատասխանը կախված է նրանից, թե ինչն է հավասար՝ ժամանակնե՞րը, թե՞ ճանապարհները։

### Հարաբերական արագություն

Երկու գնացք շարժվում են իրար ընդառաջ $60$ կմ/ժ և $90$ կմ/ժ արագություններով։ Մի գնացքի նկատմամբ մյուսը մոտենում է $60 + 90 = 150$ կմ/ժ արագությամբ։ Եթե նրանք շարժվում են նույն ուղղությամբ, արագը հասնում է $90 - 60 = 30$ կմ/ժ արագությամբ։ Շարժվող գնացքը որպես հաշվարկման մարմին ընտրելը հաճախ երկու մարմնի խնդիրը վերածում է մեկ մարմնի խնդրի։

*Օրինակ։* Իրարից $300$ կմ հեռու գնացքները, որոնք շարժվում են իրար ընդառաջ $60$ և $90$ կմ/ժ արագություններով, հանդիպում են $\frac{300}{150} = 2$ ժ հետո։`,
    r`### Ловушка средней скорости, решённая в общем виде

Машина едет из $A$ в $B$ со скоростью $v_1$ и возвращается со скоростью $v_2$. Какова средняя скорость на всём пути? Пусть расстояние в одну сторону $s$.
$$t_1 = \frac{s}{v_1},\quad t_2 = \frac{s}{v_2},\qquad v_{\text{ср}} = \frac{2s}{\frac{s}{v_1} + \frac{s}{v_2}} = \frac{2 v_1 v_2}{v_1 + v_2}.$$
Расстояние $s$ сокращается. Для $60$ км/ч туда и $40$ км/ч обратно: $v_{\text{ср}} = \frac{2 \cdot 60 \cdot 40}{100} = 48$ км/ч, **а не** $50$. Машина проводит больше **времени** на меньшей скорости, поэтому меньшая скорость весит больше.

Классическая головоломка: вы проехали $1$ км со скоростью $30$ км/ч. С какой скоростью нужно проехать второй километр, чтобы средняя на двух была $60$ км/ч? Для средней $60$ км/ч на $2$ км у вас всего $2$ минуты, а первый километр уже занял $2$ минуты. Это невозможно ни при какой скорости.

### Когда среднее арифметическое верно

Если машина едет **равное время** (а не равные расстояния) со скоростями $v_1$ и $v_2$, то
$$v_{\text{ср}} = \frac{v_1 t + v_2 t}{2t} = \frac{v_1 + v_2}{2}.$$
Так что ответ зависит от того, что равно: время или расстояния.

### Относительная скорость

Два поезда идут навстречу друг другу со скоростями $60$ км/ч и $90$ км/ч. Относительно одного поезда другой приближается со скоростью $60 + 90 = 150$ км/ч. Если они идут в одну сторону, быстрый догоняет со скоростью $90 - 60 = 30$ км/ч. Выбор движущегося поезда телом отсчёта часто превращает задачу о двух телах в задачу об одном.

*Пример.* Поезда на расстоянии $300$ км, идущие навстречу со скоростями $60$ и $90$ км/ч, встретятся через $\frac{300}{150} = 2$ ч.`,
  ),

  "distance-time-graphs": th(
    r`### Why the slope of the graph is the speed

On a distance–time graph take two points: at time $t_1$ the distance is $s_1$, at $t_2$ it is $s_2$. The rise of the line is $s_2 - s_1$ and the run is $t_2 - t_1$, so its **slope** is
$$\frac{s_2 - s_1}{t_2 - t_1} = \frac{\Delta s}{\Delta t} = v.$$
For uniform motion this ratio is the same for any two points, which is exactly why the graph is a straight line. For non-uniform motion the graph curves, and the steepness at each moment is the speed at that moment.

### Why the area under the speed graph is the distance, always

For uniform motion the area is a rectangle $v \cdot t$. If the speed changes, cut the time into many short intervals. In each one the speed is almost constant, so the distance in it is almost the area of a thin strip. Adding the strips gives the area under the graph. Making the strips thinner makes the answer exact.

*Example.* A car speeds up evenly from $0$ to $20$ m/s in $10$ s. The graph is a sloping line, the area under it a triangle:
$$s = \frac{1}{2} \cdot 10\ \text{s} \cdot 20\ \frac{\text{m}}{\text{s}} = 100\ \text{m}.$$
That is the same as driving the whole time at the **average** speed $10$ m/s. This idea, the area under a graph, is the beginning of integral calculus.

### Meeting problems by graphs

Draw the distance–time graphs of two bodies on the same axes (distances measured from the same point). They **meet** where the graphs cross. A cyclist leaves at 9:00 at $15$ km/h; a car leaves the same place at 10:00 at $60$ km/h. The lines $s = 15t$ and $s = 60(t - 1)$ cross where $15t = 60t - 60$, $t = \frac{4}{3}$ h after 9:00, at 10:20, $20$ km from the start. A graph shows at once whether a meeting happens at all.`,
    r`### Ինչու է գրաֆիկի թեքությունն արագությունը

Ճանապարհ–ժամանակ գրաֆիկի վրա վերցնենք երկու կետ. $t_1$ պահին ճանապարհը $s_1$ է, $t_2$ պահին՝ $s_2$։ Գծի բարձրացումը $s_2 - s_1$ է, իսկ հորիզոնական տեղաշարժը՝ $t_2 - t_1$, ուստի նրա **թեքությունը**
$$\frac{s_2 - s_1}{t_2 - t_1} = \frac{\Delta s}{\Delta t} = v$$
Հավասարաչափ շարժման դեպքում այս հարաբերությունը նույնն է ցանկացած երկու կետի համար, ահա թե ինչու է գրաֆիկը ուղիղ գիծ։ Անհավասարաչափ շարժման դեպքում գրաֆիկը կորանում է, և յուրաքանչյուր պահին թեքությունն այդ պահի արագությունն է։

### Ինչու է արագության գրաֆիկի տակ մակերեսը միշտ ճանապարհը

Հավասարաչափ շարժման դեպքում մակերեսը $v \cdot t$ ուղղանկյուն է։ Եթե արագությունը փոխվում է, ժամանակը բաժանենք շատ կարճ միջակայքերի։ Յուրաքանչյուրում արագությունը գրեթե հաստատուն է, ուստի նրանում անցած ճանապարհը գրեթե բարակ շերտի մակերեսն է։ Շերտերը գումարելով՝ ստանում ենք գրաֆիկի տակ մակերեսը։ Շերտերը բարակեցնելով՝ պատասխանը դառնում է ճշգրիտ։

*Օրինակ։* Մեքենան $10$ վ-ում հավասարաչափ արագանում է $0$-ից $20$ մ/վ։ Գրաֆիկը թեք գիծ է, նրա տակ մակերեսը՝ եռանկյուն.
$$s = \frac{1}{2} \cdot 10 \cdot 20 = 100$$
մ։ Դա նույնն է, ինչ ամբողջ ժամանակ շարժվել $10$ մ/վ **միջին** արագությամբ։ Այս գաղափարը՝ գրաֆիկի տակ մակերեսը, ինտեգրալ հաշվի սկիզբն է։

### Հանդիպման խնդիրները գրաֆիկներով

Երկու մարմինների ճանապարհ–ժամանակ գրաֆիկները գծեք նույն առանցքների վրա (հեռավորությունները՝ նույն կետից)։ Նրանք **հանդիպում են** այնտեղ, որտեղ գրաֆիկները հատվում են։ Հեծանվորդը ճանապարհ է ընկնում ժամը 9:00-ին $15$ կմ/ժ արագությամբ, մեքենան նույն տեղից՝ 10:00-ին $60$ կմ/ժ արագությամբ։ $s = 15t$ և $s = 60(t - 1)$ գծերը հատվում են, երբ $15t = 60t - 60$, $t = \frac{4}{3}$ ժ 9:00-ից հետո, այսինքն՝ 10:20-ին, սկզբից $20$ կմ հեռավորության վրա։ Գրաֆիկն անմիջապես ցույց է տալիս, թե արդյոք հանդիպում ընդհանրապես կլինի։`,
    r`### Почему наклон графика — это скорость

На графике путь–время возьмём две точки: в момент $t_1$ путь $s_1$, в момент $t_2$ — $s_2$. Подъём линии $s_2 - s_1$, сдвиг по горизонтали $t_2 - t_1$, поэтому её **наклон**
$$\frac{s_2 - s_1}{t_2 - t_1} = \frac{\Delta s}{\Delta t} = v.$$
При равномерном движении это отношение одинаково для любых двух точек — именно поэтому график прямой. При неравномерном движении график изгибается, и крутизна в каждый момент — скорость в этот момент.

### Почему площадь под графиком скорости — всегда путь

При равномерном движении площадь — прямоугольник $v \cdot t$. Если скорость меняется, разрежем время на много коротких промежутков. В каждом скорость почти постоянна, так что путь за него — почти площадь тонкой полоски. Сложив полоски, получаем площадь под графиком. Делая полоски тоньше, получаем точный ответ.

*Пример.* Машина равномерно разгоняется от $0$ до $20$ м/с за $10$ с. График — наклонная прямая, площадь под ней — треугольник:
$$s = \frac{1}{2} \cdot 10\ \text{с} \cdot 20\ \frac{\text{м}}{\text{с}} = 100\ \text{м}.$$
Это то же, что ехать всё время со **средней** скоростью $10$ м/с. Эта идея — площадь под графиком — начало интегрального исчисления.

### Задачи на встречу через графики

Нарисуйте графики путь–время двух тел на одних осях (расстояния от одной точки). Они **встречаются** там, где графики пересекаются. Велосипедист выезжает в 9:00 со скоростью $15$ км/ч; машина выезжает из того же места в 10:00 со скоростью $60$ км/ч. Прямые $s = 15t$ и $s = 60(t - 1)$ пересекаются при $15t = 60t - 60$, $t = \frac{4}{3}$ ч после 9:00, то есть в 10:20, в $20$ км от старта. График сразу показывает, будет ли встреча вообще.`,
  ),

  inertia: th(
    r`### Galileo's two ramps

Galileo's argument for inertia is a thought experiment you can almost do. Let a ball roll down one smooth ramp and up a second ramp facing it. It rises to (almost) the **same height** it started from, whatever the slope of the second ramp. Make the second ramp less and less steep: the ball must roll farther and farther to reach that height. Now make the second ramp **horizontal**. The ball can never reach the starting height, so it should roll **for ever**. Nothing is needed to keep a body moving; something is needed to **stop** it: friction and air.

### Why Aristotle's view lasted so long

On Earth, every moving thing we see stops by itself: a cart, a ball, a boat. Friction is everywhere and invisible, so it is natural to think motion needs a constant push. The step Galileo and later Newton made was to see friction as **just another force**, and to imagine the world without it.

### The law of inertia is not true in every frame

In a bus that brakes, an unfastened bag on the seat slides forward although **nothing pushes it**. The law of inertia seems to fail. It holds only in **inertial** frames of reference: ones that are at rest or move uniformly in a straight line (the road, but not the braking bus). Relative to the road the bag simply keeps its speed while the bus slows down under it.

### Tricks of inertia

- **The tablecloth trick.** Pull a smooth tablecloth very quickly and the dishes stay. The friction acts for so short a time that it cannot speed the dishes up noticeably.
- **The coin on a card.** A card on a glass with a coin on top: flick the card, and the coin drops into the glass.
- **Fresh or boiled egg?** Spin it and stop it with a finger for a moment. The liquid inside a raw egg keeps turning by inertia, so when you let go it starts spinning again; a boiled egg stays still.`,
    r`### Գալիլեյի երկու թեք հարթությունը

Իներցիայի օգտին Գալիլեյի փաստարկը մտային փորձ է, որը գրեթե կարելի է կատարել։ Թող գնդակը գլորվի մի հարթ թեք հարթությամբ ներքև և վեր բարձրանա նրան նայող երկրորդ թեք հարթությամբ։ Այն բարձրանում է (գրեթե) **նույն բարձրության**, որտեղից սկսել էր՝ անկախ երկրորդ հարթության թեքությունից։ Երկրորդ հարթությունն ավելի ու ավելի քիչ թեք դարձրեք. գնդակը պետք է ավելի ու ավելի հեռու գլորվի՝ այդ բարձրությանը հասնելու համար։ Հիմա երկրորդ հարթությունը դարձրեք **հորիզոնական**։ Գնդակը երբեք չի կարող հասնել սկզբնական բարձրությանը, ուստի պետք է գլորվի **հավերժ**։ Մարմնի շարժումը պահպանելու համար ոչինչ պետք չէ, պետք է ինչ-որ բան այն **կանգնեցնելու** համար. շփումը և օդը։

### Ինչու էր Արիստոտելի տեսակետն այդքան երկար պահպանվում

Երկրի վրա մեր տեսած յուրաքանչյուր շարժվող բան ինքն իրեն կանգնում է. սայլը, գնդակը, նավակը։ Շփումն ամենուր է և անտեսանելի, ուստի բնական է կարծել, որ շարժումը մշտական հրում է պահանջում։ Գալիլեյի, իսկ հետո Նյուտոնի քայլը շփումը որպես **ևս մեկ ուժ** տեսնելն էր և աշխարհը առանց դրա պատկերացնելը։

### Իներցիայի օրենքը ճիշտ չէ ամեն հաշվարկման համակարգում

Արգելակող ավտոբուսում նստատեղին դրված չամրացված պայուսակը սահում է առաջ, թեև **ոչինչ այն չի հրում**։ Թվում է, թե իներցիայի օրենքը չի գործում։ Այն գործում է միայն **իներցիալ** հաշվարկման համակարգերում, որոնք դադարի վիճակում են կամ շարժվում են հավասարաչափ և ուղղագիծ (ճանապարհը, բայց ոչ արգելակող ավտոբուսը)։ Ճանապարհի նկատմամբ պայուսակը պարզապես պահպանում է իր արագությունը, մինչդեռ ավտոբուսը նրա տակ դանդաղում է։

### Իներցիայի հնարքներ

- **Սփռոցի հնարքը։** Ողորկ սփռոցը շատ արագ քաշեք, և ամանները կմնան տեղում։ Շփումը գործում է այնքան կարճ ժամանակ, որ չի կարողանում նկատելիորեն արագացնել ամանները։
- **Մետաղադրամը քարտի վրա։** Բաժակի վրա քարտ, նրա վրա մետաղադրամ. մատով հարվածեք քարտին, և մետաղադրամը կընկնի բաժակի մեջ։
- **Հում թե՞ խաշած ձու։** Պտտեք և մի պահ մատով կանգնեցրեք։ Հում ձվի ներսի հեղուկը իներցիայով շարունակում է պտտվել, ուստի բաց թողնելիս այն նորից սկսում է պտտվել, իսկ խաշած ձուն մնում է անշարժ։`,
    r`### Два наклонных желоба Галилея

Довод Галилея в пользу инерции — мысленный опыт, который почти можно поставить. Пусть шар скатывается по гладкому желобу и вкатывается на второй желоб напротив. Он поднимается (почти) на **ту же высоту**, с которой начал, каков бы ни был наклон второго желоба. Делайте второй желоб всё более пологим: шару придётся катиться всё дальше, чтобы достичь этой высоты. Теперь сделайте второй желоб **горизонтальным**. Шар никогда не достигнет начальной высоты, значит, должен катиться **вечно**. Для поддержания движения ничего не нужно; нужно что-то, чтобы его **остановить**: трение и воздух.

### Почему взгляд Аристотеля держался так долго

На Земле всё движущееся само останавливается: телега, мяч, лодка. Трение повсюду и невидимо, поэтому естественно думать, что движению нужен постоянный толчок. Шаг Галилея, а потом Ньютона — увидеть в трении **просто ещё одну силу** и представить мир без неё.

### Закон инерции выполняется не в любой системе отсчёта

В тормозящем автобусе незакреплённая сумка на сиденье скользит вперёд, хотя **её никто не толкает**. Кажется, закон инерции нарушен. Он выполняется только в **инерциальных** системах отсчёта — покоящихся или движущихся равномерно и прямолинейно (дорога, но не тормозящий автобус). Относительно дороги сумка просто сохраняет скорость, а автобус под ней замедляется.

### Фокусы инерции

- **Фокус со скатертью.** Очень быстро выдерните гладкую скатерть — посуда останется на месте. Трение действует так недолго, что не успевает заметно разогнать посуду.
- **Монета на карточке.** Карточка на стакане, сверху монета: щёлкните по карточке — монета упадёт в стакан.
- **Сырое или варёное яйцо?** Раскрутите и на миг остановите пальцем. Жидкость внутри сырого яйца по инерции продолжает вращаться, и, когда отпустите, оно снова закрутится; варёное останется неподвижным.`,
  ),

  mass: th(
    r`### Where $\frac{m_1}{m_2} = \frac{v_2}{v_1}$ comes from

Two carts at rest are pushed apart by a spring. Experiments with many pairs of carts show that the products of mass and speed are always equal:
$$m_1 v_1 = m_2 v_2.$$
The product $mv$ is called **momentum**. Before the push the total momentum is zero; after it, the two carts have equal momenta in **opposite** directions, so the total is still zero. This is the **law of conservation of momentum**, one of the deepest laws of physics, which you will study in grade 9. A rifle recoils, a jet engine throws gas backward to go forward, a rocket works in empty space, all for this reason.

*Example.* A $50$ kg skater pushes off from a $75$ kg skater and moves at $3$ m/s. The other moves back at $\frac{50 \cdot 3}{75} = 2$ m/s.

### Two masses that turn out to be one

Mass appears in physics in two different ways:

- **inertial mass**: how hard it is to change a body's speed;
- **gravitational mass**: how strongly the Earth pulls the body.

There is no obvious reason why these should be the same. But if they are proportional, all bodies fall with the same acceleration: a body twice as heavy is pulled twice as hard and is twice as hard to speed up. Experiments since Galileo and Newton, and modern ones to an accuracy of $10^{-15}$, show that the two masses are equal. Einstein built his theory of gravity on this fact.

### A kilogram defined by nature

Until 2019 the kilogram was a platinum–iridium cylinder near Paris, and its copies around the world slowly drifted apart by tens of micrograms. Now the kilogram is fixed by the **Planck constant**, and a Kibble balance compares a mass with an electromagnetic force measured very precisely. Any well-equipped laboratory can now realise the kilogram itself.`,
    r`### Որտեղից է գալիս $\frac{m_1}{m_2} = \frac{v_2}{v_1}$-ը

Դադարի վիճակում գտնվող երկու սայլակ զսպանակով հրվում են իրարից։ Սայլակների բազմաթիվ զույգերով փորձերը ցույց են տալիս, որ զանգվածի և արագության արտադրյալները միշտ հավասար են.
$$m_1 v_1 = m_2 v_2$$
$mv$ արտադրյալը կոչվում է **իմպուլս**։ Հրումից առաջ ընդհանուր իմպուլսը զրո է, հետո երկու սայլակներն ունեն հավասար իմպուլսներ **հակառակ** ուղղություններով, ուստի գումարը դարձյալ զրո է։ Սա **իմպուլսի պահպանման օրենքն** է՝ ֆիզիկայի ամենախոր օրենքներից մեկը, որը կուսումնասիրեք 9-րդ դասարանում։ Հրացանը հետ է հրում, ռեակտիվ շարժիչը գազը նետում է հետ՝ առաջ գնալու համար, հրթիռն աշխատում է դատարկ տարածության մեջ, և այս ամենը նույն պատճառով։

*Օրինակ։* $50$ կգ չմշկորդը հրվում է $75$ կգ չմշկորդից և շարժվում $3$ մ/վ արագությամբ։ Մյուսը հետ է շարժվում $\frac{50 \cdot 3}{75} = 2$ մ/վ արագությամբ։

### Երկու զանգված, որոնք պարզվում է՝ մեկն են

Զանգվածը ֆիզիկայում հայտնվում է երկու տարբեր ձևով.

- **իներտ զանգված**. որքան դժվար է փոխել մարմնի արագությունը.
- **գրավիտացիոն զանգված**. որքան ուժեղ է Երկիրը ձգում մարմինը։

Չկա ակնհայտ պատճառ, որ դրանք նույնը լինեն։ Բայց եթե դրանք համեմատական են, բոլոր մարմիններն ընկնում են նույն արագացմամբ. կրկնակի ծանր մարմինը ձգվում է կրկնակի ուժով և կրկնակի դժվար է արագացվում։ Գալիլեյից և Նյուտոնից ի վեր փորձերը, և ժամանակակիցները՝ $10^{-15}$ ճշտությամբ, ցույց են տալիս, որ երկու զանգվածները հավասար են։ Էյնշտեյնն իր ձգողության տեսությունը կառուցել է այս փաստի վրա։

### Բնությամբ սահմանված կիլոգրամ

Մինչև 2019 թվականը կիլոգրամը Փարիզի մոտ պահվող պլատին–իրիդիումե գլան էր, և նրա պատճենները աշխարհով մեկ դանդաղ տարբերվում էին տասնյակ միկրոգրամներով։ Այժմ կիլոգրամը ֆիքսված է **Պլանկի հաստատունով**, և Կիբլի կշեռքը զանգվածը համեմատում է շատ ճշգրիտ չափված էլեկտրամագնիսական ուժի հետ։ Ցանկացած լավ սարքավորված լաբորատորիա այժմ կարող է ինքը վերարտադրել կիլոգրամը։`,
    r`### Откуда берётся $\frac{m_1}{m_2} = \frac{v_2}{v_1}$

Две покоящиеся тележки расталкивает пружина. Опыты с множеством пар тележек показывают, что произведения массы на скорость всегда равны:
$$m_1 v_1 = m_2 v_2.$$
Произведение $mv$ называют **импульсом**. До толчка суммарный импульс равен нулю; после него у тележек равные импульсы в **противоположные** стороны, так что сумма по-прежнему ноль. Это **закон сохранения импульса**, один из глубочайших законов физики, который вы изучите в 9 классе. Отдача ружья, реактивный двигатель, отбрасывающий газ назад, чтобы лететь вперёд, ракета в пустоте — всё по этой причине.

*Пример.* Конькобежец массой $50$ кг отталкивается от конькобежца массой $75$ кг и едет со скоростью $3$ м/с. Второй откатывается назад со скоростью $\frac{50 \cdot 3}{75} = 2$ м/с.

### Две массы, оказавшиеся одной

Масса входит в физику двумя разными путями:

- **инертная масса** — насколько трудно изменить скорость тела;
- **гравитационная масса** — насколько сильно Земля притягивает тело.

Нет очевидной причины, почему они должны совпадать. Но если они пропорциональны, все тела падают с одинаковым ускорением: вдвое более тяжёлое тело притягивается вдвое сильнее и вдвое труднее разгоняется. Опыты со времён Галилея и Ньютона, а современные — с точностью $10^{-15}$, показывают, что две массы равны. Эйнштейн построил на этом факте свою теорию тяготения.

### Килограмм, заданный природой

До 2019 года килограммом был платино-иридиевый цилиндр под Парижем, и его копии по всему миру медленно расходились на десятки микрограммов. Теперь килограмм зафиксирован через **постоянную Планка**, а весы Киббла сравнивают массу с очень точно измеренной электромагнитной силой. Любая хорошо оснащённая лаборатория теперь может сама воспроизвести килограмм.`,
  ),

  density: th(
    r`### Was the crown pure gold? The numbers

The legend of Archimedes can be turned into a real calculation. Suppose the crown has a mass of $1000$ g and, by measuring the water it displaces, a volume of $64$ cm³. Its density is
$$\rho = \frac{1000}{64} \approx 15{.}6\ \frac{\text{g}}{\text{cm}^3}.$$
Pure gold is $19{.}3$ g/cm³, so the crown is **not** pure. Suppose the goldsmith mixed in silver ($10{.}5$ g/cm³). Let $x$ grams be gold and $1000 - x$ grams silver. The volumes add:
$$\frac{x}{19{.}3} + \frac{1000 - x}{10{.}5} = 64.$$
Solving gives $x \approx 620$ g: about $380$ g of the "gold" was silver.

### The density of a mixture is not the average of densities

Mix equal **masses** $m$ of two substances. The mixture has mass $2m$ and volume $\frac{m}{\rho_1} + \frac{m}{\rho_2}$, so
$$\rho = \frac{2\rho_1 \rho_2}{\rho_1 + \rho_2}.$$
This is the same "harmonic mean" as for the average speed over equal distances. Only for equal **volumes** is the density of the mixture the ordinary average $\frac{\rho_1 + \rho_2}{2}$ (and even then only if the volumes simply add, which is not quite true for water and alcohol).

### Density tells what is inside the Earth

The Earth's mass and volume give an average density of about $5{.}5$ g/cm³. Surface rocks are only about $2{.}7$–$3$ g/cm³. So the inside must be much denser than the surface: the Earth has a heavy **iron core**. This conclusion was reached in the 18th century, long before seismology confirmed it.

### Why density, and not mass, describes a substance

Mass and volume depend on how big a piece is; their ratio does not. Cut a block of iron in half: mass and volume both halve, density stays $7800$ kg/m³. Quantities like this, which do not depend on the amount, describe the **substance**, not the body.`,
    r`### Մաքուր ոսկի՞ էր արդյոք թագը. թվերը

Արքիմեդի ավանդությունը կարելի է իրական հաշվարկի վերածել։ Ենթադրենք՝ թագի զանգվածը $1000$ գ է, իսկ դուրս մղած ջուրը չափելով ստացված ծավալը՝ $64$ սմ³։ Նրա խտությունը
$$\rho = \frac{1000}{64} \approx 15{,}6$$
գ/սմ³ է։ Մաքուր ոսկին $19{,}3$ գ/սմ³ է, ուստի թագը մաքուր **չէ**։ Ենթադրենք՝ ոսկերիչը խառնել է արծաթ ($10{,}5$ գ/սմ³)։ Թող $x$ գրամը լինի ոսկի, իսկ $1000 - x$ գրամը՝ արծաթ։ Ծավալները գումարվում են.
$$\frac{x}{19{,}3} + \frac{1000 - x}{10{,}5} = 64$$
Լուծելով՝ $x \approx 620$ գ. «ոսկու» մոտ $380$ գ-ն արծաթ էր։

### Խառնուրդի խտությունը խտությունների միջինը չէ

Երկու նյութի հավասար $m$ **զանգվածներ** խառնենք։ Խառնուրդի զանգվածը $2m$ է, ծավալը՝ $\frac{m}{\rho_1} + \frac{m}{\rho_2}$, ուստի
$$\rho = \frac{2\rho_1 \rho_2}{\rho_1 + \rho_2}$$
Սա նույն «միջին հարմոնիկն» է, ինչ հավասար ճանապարհներով միջին արագության դեպքում։ Միայն հավասար **ծավալների** դեպքում է խառնուրդի խտությունը սովորական միջինը՝ $\frac{\rho_1 + \rho_2}{2}$ (և նույնիսկ այդ դեպքում, եթե ծավալները պարզապես գումարվում են, ինչը ջրի և սպիրտի համար լրիվ ճիշտ չէ)։

### Խտությունն ասում է, թե ինչ կա Երկրի ներսում

Երկրի զանգվածն ու ծավալը տալիս են մոտ $5{,}5$ գ/սմ³ միջին խտություն։ Մակերևույթի ապարները ընդամենը մոտ $2{,}7$–$3$ գ/սմ³ են։ Ուստի ներսը պետք է շատ ավելի խիտ լինի, քան մակերևույթը. Երկիրն ունի ծանր **երկաթե միջուկ**։ Այս եզրակացությանը հանգել են XVIII դարում՝ սեյսմաբանության կողմից հաստատվելուց շատ առաջ։

### Ինչու է նյութը բնութագրում խտությունը, ոչ թե զանգվածը

Զանգվածն ու ծավալը կախված են կտորի մեծությունից, նրանց հարաբերությունը՝ ոչ։ Երկաթե չորսուն կիսեք. զանգվածն ու ծավալը երկուսն էլ կիսվում են, խտությունը մնում է $7800$ կգ/մ³։ Այսպիսի մեծությունները, որոնք կախված չեն քանակից, բնութագրում են **նյութը**, ոչ թե մարմինը։`,
    r`### Была ли корона из чистого золота? Числа

Легенду об Архимеде можно превратить в настоящий расчёт. Пусть масса короны $1000$ г, а объём, найденный по вытесненной воде, $64$ см³. Её плотность
$$\rho = \frac{1000}{64} \approx 15{,}6\ \frac{\text{г}}{\text{см}^3}.$$
Чистое золото — $19{,}3$ г/см³, значит, корона **не** чистая. Пусть ювелир подмешал серебро ($10{,}5$ г/см³). Пусть золота $x$ граммов, серебра $1000 - x$. Объёмы складываются:
$$\frac{x}{19{,}3} + \frac{1000 - x}{10{,}5} = 64.$$
Решение даёт $x \approx 620$ г: около $380$ г «золота» было серебром.

### Плотность смеси — не среднее плотностей

Смешаем равные **массы** $m$ двух веществ. Масса смеси $2m$, объём $\frac{m}{\rho_1} + \frac{m}{\rho_2}$, поэтому
$$\rho = \frac{2\rho_1 \rho_2}{\rho_1 + \rho_2}.$$
Это то же «среднее гармоническое», что и для средней скорости на равных участках пути. Только при равных **объёмах** плотность смеси равна обычному среднему $\frac{\rho_1 + \rho_2}{2}$ (и то лишь если объёмы просто складываются, что для воды и спирта не совсем так).

### Плотность говорит, что внутри Земли

Масса и объём Земли дают среднюю плотность около $5{,}5$ г/см³. Поверхностные породы — всего около $2{,}7$–$3$ г/см³. Значит, внутри Земля гораздо плотнее, чем на поверхности: у неё тяжёлое **железное ядро**. Этот вывод сделали в XVIII веке, задолго до того, как его подтвердила сейсмология.

### Почему вещество описывает плотность, а не масса

Масса и объём зависят от величины куска, их отношение — нет. Разрежьте железный брусок пополам: масса и объём уменьшатся вдвое, плотность останется $7800$ кг/м³. Такие величины, не зависящие от количества, описывают **вещество**, а не тело.`,
  ),

  "mass-volume-calculation": th(
    r`### Scaling: why a giant statue is so heavy

Enlarge a body $k$ times in every direction. Its volume, and so its mass, grows $k^3$ times.

| Scale | Mass |
|---|---|
| $2$ times taller | $8$ times heavier |
| $3$ times taller | $27$ times heavier |
| $10$ times taller | $1000$ times heavier |

A bronze figure $20$ cm tall with a mass of $2$ kg, enlarged to a $2$ m statue ($k = 10$), has a mass of about $2000$ kg. Engineers make large statues **hollow** for exactly this reason. The Statue of Liberty is a thin copper skin on an iron frame.

### Finding a hidden cavity

A metal ball has a volume of $100$ cm³ and a mass of $540$ g. If it were solid aluminium ($2{.}7$ g/cm³), its mass would be $270$ g; if solid iron ($7{.}8$ g/cm³), $780$ g. Suppose we know it is iron. Then the metal takes only
$$V_{\text{metal}} = \frac{540}{7{.}8} \approx 69\ \text{cm}^3,$$
and there is a cavity of about $31$ cm³ inside. Comparing the mass with the volume is how inspectors detect hollow or faked metal objects without cutting them.

### Densities to remember, with a reason

- Water: $1$ g/cm³, $1$ kg per litre, $1$ tonne per cubic metre. This was not luck: the kilogram was originally **defined** as the mass of one litre of water.
- Air: about $1{.}3$ kg per cubic metre, almost $800$ times lighter than water.
- Most rocks: $2{.}5$–$3$ times water; most metals in daily use: $3$–$9$ times.

### A standard mistake with units

$\rho$ in g/cm³ combined with $V$ in m³ gives nonsense. Convert first: $1$ m³ $= 1\,000\,000$ cm³, so $1$ g/cm³ $= 1000$ kg/m³ (the "$1000$" comes from $\frac{1\,000\,000}{1000}$: a million cubic centimetres, a thousand grams per kilogram).`,
    r`### Մասշտաբավորում. ինչու է հսկա արձանն այդքան ծանր

Մարմինը բոլոր ուղղություններով $k$ անգամ մեծացնենք։ Նրա ծավալը, հետևաբար և զանգվածը, աճում է $k^3$ անգամ։

| Մասշտաբ | Զանգված |
|---|---|
| $2$ անգամ բարձր | $8$ անգամ ծանր |
| $3$ անգամ բարձր | $27$ անգամ ծանր |
| $10$ անգամ բարձր | $1000$ անգամ ծանր |

$20$ սմ բարձրությամբ և $2$ կգ զանգվածով բրոնզե արձանիկը, մեծացված մինչև $2$ մ արձան ($k = 10$), ունի մոտ $2000$ կգ զանգված։ Ինժեներները մեծ արձանները **սնամեջ** են պատրաստում հենց այս պատճառով։ Ազատության արձանը բարակ պղնձե թաղանթ է երկաթե կմախքի վրա։

### Թաքնված խոռոչի հայտնաբերումը

Մետաղե գնդի ծավալը $100$ սմ³ է, զանգվածը՝ $540$ գ։ Եթե այն լիներ ամբողջովին ալյումինե ($2{,}7$ գ/սմ³), զանգվածը կլիներ $270$ գ, եթե երկաթե ($7{,}8$ գ/սմ³)՝ $780$ գ։ Ենթադրենք՝ գիտենք, որ այն երկաթե է։ Այդ դեպքում մետաղը զբաղեցնում է ընդամենը
$$V_{\text{մետ}} = \frac{540}{7{,}8} \approx 69$$
սմ³, և ներսում կա մոտ $31$ սմ³ խոռոչ։ Զանգվածը ծավալի հետ համեմատելով՝ տեսուչները հայտնաբերում են սնամեջ կամ կեղծ մետաղե առարկաները՝ առանց դրանք կտրելու։

### Հիշելու արժանի խտություններ՝ պատճառով

- Ջուր. $1$ գ/սմ³, լիտրում $1$ կգ, խորանարդ մետրում $1$ տոննա։ Սա պատահականություն չէր. կիլոգրամն ի սկզբանե **սահմանվել է** որպես մեկ լիտր ջրի զանգված։
- Օդ. խորանարդ մետրում մոտ $1{,}3$ կգ, ջրից գրեթե $800$ անգամ թեթև։
- Ապարների մեծ մասը. ջրից $2{,}5$–$3$ անգամ ծանր, առօրյայում օգտագործվող մետաղների մեծ մասը՝ $3$–$9$ անգամ։

### Միավորների հետ ստանդարտ սխալ

Գ/սմ³-ով $\rho$-ն մ³-ով $V$-ի հետ միասին անհեթեթություն է տալիս։ Նախ փոխարկեք. $1$ մ³ $= 1\,000\,000$ սմ³, ուստի $1$ գ/սմ³ $= 1000$ կգ/մ³ («$1000$»-ը գալիս է $\frac{1\,000\,000}{1000}$-ից. միլիոն խորանարդ սանտիմետր, կիլոգրամում հազար գրամ)։`,
    r`### Масштаб: почему огромная статуя так тяжела

Увеличим тело в $k$ раз во всех направлениях. Его объём, а значит, и масса вырастут в $k^3$ раз.

| Масштаб | Масса |
|---|---|
| в $2$ раза выше | в $8$ раз тяжелее |
| в $3$ раза выше | в $27$ раз тяжелее |
| в $10$ раз выше | в $1000$ раз тяжелее |

Бронзовая фигурка высотой $20$ см и массой $2$ кг, увеличенная до статуи в $2$ м ($k = 10$), имеет массу около $2000$ кг. Именно поэтому большие статуи делают **полыми**. Статуя Свободы — тонкая медная оболочка на железном каркасе.

### Как найти скрытую полость

Металлический шар объёмом $100$ см³ имеет массу $540$ г. Будь он сплошным алюминиевым ($2{,}7$ г/см³), масса была бы $270$ г; сплошным железным ($7{,}8$ г/см³) — $780$ г. Пусть известно, что он железный. Тогда металл занимает лишь
$$V_{\text{мет}} = \frac{540}{7{,}8} \approx 69\ \text{см}^3,$$
и внутри полость около $31$ см³. Сравнивая массу с объёмом, контролёры находят полые или поддельные металлические предметы, не разрезая их.

### Плотности, которые стоит помнить, с причиной

- Вода: $1$ г/см³, $1$ кг в литре, $1$ тонна в кубометре. Это не случайно: килограмм изначально **определили** как массу литра воды.
- Воздух: около $1{,}3$ кг в кубометре, почти в $800$ раз легче воды.
- Большинство горных пород: в $2{,}5$–$3$ раза тяжелее воды; большинство металлов в быту — в $3$–$9$ раз.

### Стандартная ошибка с единицами

$\rho$ в г/см³ вместе с $V$ в м³ даёт бессмыслицу. Сначала переведите: $1$ м³ $= 1\,000\,000$ см³, поэтому $1$ г/см³ $= 1000$ кг/м³ («$1000$» получается из $\frac{1\,000\,000}{1000}$: миллион кубических сантиметров, тысяча граммов в килограмме).`,
  ),

  force: th(
    r`### Why $g$ is about $9{.}8$ N/kg, and why it varies

Newton's law of universal gravitation (1687) says that two bodies attract each other with a force
$$F = G\,\frac{m_1 m_2}{r^2},$$
where $r$ is the distance between their centres and $G \approx 6{.}67 \cdot 10^{-11}\ \text{N·m}^2/\text{kg}^2$ is a tiny constant. For a body of mass $m$ on the Earth's surface ($M \approx 6 \cdot 10^{24}$ kg, $R \approx 6{.}4 \cdot 10^{6}$ m) this gives $F = mg$ with
$$g = \frac{GM}{R^2} \approx 9{.}8\ \frac{\text{N}}{\text{kg}}.$$
So $g$ is not a fundamental number; it depends on the planet. It also varies on Earth: about $9{.}78$ at the equator and $9{.}83$ at the poles, because the Earth is slightly flattened and spinning. On the Moon (smaller mass, smaller radius) $g \approx 1{.}6$; on Jupiter about $25$.

### Why we don't feel the pull of a mountain

$G$ is so small that gravity between ordinary objects is undetectable in daily life. Two people of $70$ kg standing $1$ m apart attract each other with about $3 \cdot 10^{-7}$ N, the weight of a speck of dust. Gravity matters only when at least one of the bodies is enormous. In 1798 Henry Cavendish measured the attraction between lead balls in a quiet room, the first measurement of $G$, and from it computed the mass of the Earth: he "weighed the world".

### The force of gravity on a body and on the Earth

The Earth pulls an apple with $1$ N, and the apple pulls the Earth with exactly $1$ N too. Forces always come in such equal and opposite pairs (Newton's third law). The apple visibly falls and the Earth does not move noticeably, because the Earth's mass is enormously larger.

### Mass and weight: what changes on the Moon

A $60$ kg astronaut keeps a mass of $60$ kg everywhere. On the Moon the force of gravity on them is $96$ N instead of about $590$ N. They can jump six times higher, but a heavy box is just as hard to **push sideways** and set moving, because that depends on mass, not gravity.`,
    r`### Ինչու է $g$-ն մոտ $9{,}8$ Ն/կգ, և ինչու է այն փոփոխվում

Նյուտոնի տիեզերական ձգողության օրենքը (1687) ասում է, որ երկու մարմիններ իրար ձգում են
$$F = G\,\frac{m_1 m_2}{r^2}$$
ուժով, որտեղ $r$-ը նրանց կենտրոնների հեռավորությունն է, իսկ $G \approx 6{,}67 \cdot 10^{-11}$ Ն·մ²/կգ² չնչին հաստատուն է։ Երկրի մակերևույթին գտնվող $m$ զանգվածով մարմնի համար ($M \approx 6 \cdot 10^{24}$ կգ, $R \approx 6{,}4 \cdot 10^{6}$ մ) սա տալիս է $F = mg$, որտեղ
$$g = \frac{GM}{R^2} \approx 9{,}8$$
Ն/կգ։ Ուստի $g$-ն հիմնարար թիվ չէ. այն կախված է մոլորակից։ Այն փոփոխվում է նաև Երկրի վրա. հասարակածում մոտ $9{,}78$, բևեռներում՝ $9{,}83$, քանի որ Երկիրը մի փոքր սեղմված է և պտտվում է։ Լուսնի վրա (ավելի փոքր զանգված, ավելի փոքր շառավիղ) $g \approx 1{,}6$, Յուպիտերի վրա՝ մոտ $25$։

### Ինչու չենք զգում լեռան ձգողությունը

$G$-ն այնքան փոքր է, որ սովորական առարկաների միջև ձգողությունը առօրյայում աննկատելի է։ Իրարից $1$ մ հեռավորության վրա կանգնած $70$ կգ զանգվածով երկու մարդ իրար ձգում են մոտ $3 \cdot 10^{-7}$ Ն ուժով՝ փոշեհատիկի կշռով։ Ձգողությունը կարևոր է միայն այն դեպքում, երբ գոնե մի մարմինը հսկայական է։ 1798 թվականին Հենրի Քավենդիշը հանգիստ սենյակում չափեց կապարե գնդերի ձգողությունը՝ $G$-ի առաջին չափումը, և դրանից հաշվեց Երկրի զանգվածը. նա «կշռեց աշխարհը»։

### Ծանրության ուժը մարմնի և Երկրի վրա

Երկիրը խնձորը ձգում է $1$ Ն ուժով, և խնձորն էլ Երկիրը ձգում է ճիշտ $1$ Ն ուժով։ Ուժերը միշտ հանդես են գալիս այդպիսի հավասար և հակադիր զույգերով (Նյուտոնի երրորդ օրենքը)։ Խնձորը տեսանելիորեն ընկնում է, իսկ Երկիրը նկատելիորեն չի շարժվում, քանի որ Երկրի զանգվածն անհամեմատ մեծ է։

### Զանգված և կշիռ. ինչ է փոխվում Լուսնի վրա

$60$ կգ տիեզերագնացն ամենուր պահպանում է $60$ կգ զանգվածը։ Լուսնի վրա նրա վրա ազդող ծանրության ուժը $96$ Ն է՝ մոտ $590$ Ն-ի փոխարեն։ Նա կարող է վեց անգամ բարձր ցատկել, բայց ծանր արկղը **կողքի հրելը** և շարժման մեջ դնելը նույնքան դժվար է, քանի որ դա կախված է զանգվածից, ոչ թե ձգողությունից։`,
    r`### Почему $g$ около $9{,}8$ Н/кг и почему оно меняется

Закон всемирного тяготения Ньютона (1687) гласит, что два тела притягиваются с силой
$$F = G\,\frac{m_1 m_2}{r^2},$$
где $r$ — расстояние между их центрами, а $G \approx 6{,}67 \cdot 10^{-11}\ \text{Н·м}^2/\text{кг}^2$ — крошечная постоянная. Для тела массой $m$ на поверхности Земли ($M \approx 6 \cdot 10^{24}$ кг, $R \approx 6{,}4 \cdot 10^{6}$ м) это даёт $F = mg$, где
$$g = \frac{GM}{R^2} \approx 9{,}8\ \frac{\text{Н}}{\text{кг}}.$$
Так что $g$ — не фундаментальное число, оно зависит от планеты. Оно меняется и на Земле: около $9{,}78$ на экваторе и $9{,}83$ на полюсах, потому что Земля слегка сплюснута и вращается. На Луне (меньше масса, меньше радиус) $g \approx 1{,}6$, на Юпитере около $25$.

### Почему мы не чувствуем притяжения горы

$G$ так мала, что тяготение между обычными предметами в жизни незаметно. Два человека по $70$ кг на расстоянии $1$ м притягиваются с силой около $3 \cdot 10^{-7}$ Н — вес пылинки. Тяготение важно, только когда хотя бы одно из тел огромно. В 1798 году Генри Кавендиш в тихой комнате измерил притяжение свинцовых шаров — первое измерение $G$ — и вычислил по нему массу Земли: он «взвесил мир».

### Сила тяжести на тело и на Землю

Земля притягивает яблоко с силой $1$ Н, и яблоко притягивает Землю ровно с силой $1$ Н. Силы всегда появляются такими равными и противоположными парами (третий закон Ньютона). Яблоко заметно падает, а Земля заметно не сдвигается, потому что масса Земли несравнимо больше.

### Масса и вес: что меняется на Луне

Космонавт массой $60$ кг везде сохраняет массу $60$ кг. На Луне сила тяжести на него $96$ Н вместо примерно $590$ Н. Он может прыгнуть в шесть раз выше, но тяжёлый ящик так же трудно **сдвинуть вбок** и разогнать, потому что это зависит от массы, а не от тяготения.`,
  ),

  "elastic-force": th(
    r`### Springs in series and in parallel

**Two springs side by side** (parallel), pulled by a load: each stretches by the same $\Delta l$, and the forces add:
$$F = k_1 \Delta l + k_2 \Delta l = (k_1 + k_2)\Delta l, \qquad k = k_1 + k_2.$$
Two equal springs side by side are **twice** as stiff.

**Two springs end to end** (series): each spring carries the **whole** force $F$, and the extensions add:
$$\Delta l = \frac{F}{k_1} + \frac{F}{k_2}, \qquad \frac{1}{k} = \frac{1}{k_1} + \frac{1}{k_2}.$$
Two equal springs end to end are **half** as stiff. Turned around: cut a spring in half, and each half is twice as stiff as the whole spring. That is why short springs are hard to stretch.

### Why Hooke's law holds, and where it stops

Each bond between neighbouring molecules acts like a tiny spring near its equilibrium distance: a small stretch gives a proportional pull back. A long wire is millions of such springs in series, a thick wire many in parallel. That is why stiffness grows with thickness and falls with length.

Beyond the **limit of proportionality** the force is no longer proportional to the extension; beyond the **elastic limit** the deformation stays (the spring is overstretched); and at the **breaking point** the bonds tear. A good dynamometer is used only well below its limit.

### Hooke's anagram

In 1676 Robert Hooke published his law as a puzzle: "ceiiinosssttuv". Two years later he revealed the solution, Latin *ut tensio, sic vis*: "as the extension, so the force". Scientists then often hid a discovery in an anagram to claim it first without giving it away.

### Weight is an elastic force

When you stand on bathroom scales, they show the force with which you **compress their spring**, not your mass directly. In a lift that speeds up upward, you press harder, and the scales show more; in one speeding up downward, less. Your mass has not changed.`,
    r`### Զսպանակները հաջորդաբար և զուգահեռ

**Կողք կողքի երկու զսպանակ** (զուգահեռ), որոնք ձգվում են բեռով. յուրաքանչյուրը ձգվում է նույն $\Delta l$-ով, և ուժերը գումարվում են.
$$F = k_1 \Delta l + k_2 \Delta l = (k_1 + k_2)\Delta l, \qquad k = k_1 + k_2$$
Կողք կողքի երկու միանման զսպանակը **կրկնակի** կոշտ է։

**Իրար հետևից երկու զսպանակ** (հաջորդաբար). յուրաքանչյուր զսպանակ կրում է **ամբողջ** $F$ ուժը, և երկարացումները գումարվում են.
$$\Delta l = \frac{F}{k_1} + \frac{F}{k_2}, \qquad \frac{1}{k} = \frac{1}{k_1} + \frac{1}{k_2}$$
Իրար հետևից երկու միանման զսպանակը **կիսով չափ** կոշտ է։ Հակառակը. զսպանակը կիսեք, և յուրաքանչյուր կեսը կրկնակի կոշտ կլինի ամբողջ զսպանակից։ Ահա թե ինչու է կարճ զսպանակը դժվար ձգվում։

### Ինչու է Հուկի օրենքը ճիշտ, և որտեղ է այն ավարտվում

Հարևան մոլեկուլների միջև յուրաքանչյուր կապ իր հավասարակշռության հեռավորության մոտ իրեն պահում է փոքրիկ զսպանակի պես. փոքր ձգումը տալիս է համեմատական հետ քաշող ուժ։ Երկար լարը միլիոնավոր այդպիսի զսպանակներ են հաջորդաբար, հաստ լարը՝ շատերը զուգահեռ։ Ահա թե ինչու է կոշտությունն աճում հաստության հետ և նվազում երկարության հետ։

**Համեմատականության սահմանից** այն կողմ ուժն այլևս համեմատական չէ երկարացմանը, **առաձգականության սահմանից** այն կողմ դեֆորմացիան մնում է (զսպանակը գերձգված է), իսկ **կտրման կետում** կապերը պատռվում են։ Լավ դինամոմետրն օգտագործվում է միայն իր սահմանից շատ ցածր։

### Հուկի անագրամը

1676 թվականին Ռոբերտ Հուկը իր օրենքը հրապարակեց հանելուկի տեսքով. «ceiiinosssttuv»։ Երկու տարի անց նա բացահայտեց լուծումը՝ լատիներեն *ut tensio, sic vis*. «ինչպիսին երկարացումն է, այնպիսին էլ ուժը»։ Այն ժամանակ գիտնականները հաճախ իրենց հայտնագործությունը թաքցնում էին անագրամում, որպեսզի այն առաջինը հայտարարեն՝ առանց բացահայտելու։

### Կշիռն առաձգականության ուժ է

Երբ կանգնում եք լոգարանի կշեռքին, այն ցույց է տալիս այն ուժը, որով **սեղմում եք նրա զսպանակը**, ոչ թե ուղղակիորեն ձեր զանգվածը։ Վեր արագացող վերելակում ավելի ուժեղ եք սեղմում, և կշեռքն ավելին է ցույց տալիս, ներքև արագացողում՝ պակաս։ Ձեր զանգվածը չի փոխվել։`,
    r`### Пружины последовательно и параллельно

**Две пружины рядом** (параллельно), растягиваемые грузом: каждая удлиняется на одно и то же $\Delta l$, а силы складываются:
$$F = k_1 \Delta l + k_2 \Delta l = (k_1 + k_2)\Delta l, \qquad k = k_1 + k_2.$$
Две одинаковые пружины рядом **вдвое** жёстче.

**Две пружины одна за другой** (последовательно): каждая несёт **всю** силу $F$, а удлинения складываются:
$$\Delta l = \frac{F}{k_1} + \frac{F}{k_2}, \qquad \frac{1}{k} = \frac{1}{k_1} + \frac{1}{k_2}.$$
Две одинаковые пружины друг за другом **вдвое** мягче. Наоборот: разрежьте пружину пополам — каждая половина вдвое жёстче целой. Поэтому короткую пружину трудно растянуть.

### Почему выполняется закон Гука и где он кончается

Каждая связь между соседними молекулами вблизи равновесного расстояния ведёт себя как крошечная пружинка: малое растяжение даёт пропорциональную возвращающую силу. Длинная проволока — миллионы таких пружинок последовательно, толстая — множество параллельно. Поэтому жёсткость растёт с толщиной и падает с длиной.

За **пределом пропорциональности** сила уже не пропорциональна удлинению; за **пределом упругости** деформация остаётся (пружина перерастянута); в **точке разрыва** связи рвутся. Хорошим динамометром пользуются только намного ниже его предела.

### Анаграмма Гука

В 1676 году Роберт Гук опубликовал свой закон в виде загадки: «ceiiinosssttuv». Через два года он открыл разгадку, латинское *ut tensio, sic vis*: «каково растяжение, такова сила». Учёные тогда часто прятали открытие в анаграмме, чтобы заявить приоритет, не раскрывая его.

### Вес — это сила упругости

Когда вы встаёте на напольные весы, они показывают силу, с которой вы **сжимаете их пружину**, а не прямо вашу массу. В лифте, разгоняющемся вверх, вы давите сильнее и весы показывают больше; в разгоняющемся вниз — меньше. Ваша масса не изменилась.`,
  ),

  "dynamometer-resultant": th(
    r`### Forces at an angle add like arrows

When two forces act along different lines, their resultant is found by the **parallelogram rule**: draw the two force arrows from one point, complete the parallelogram, and its diagonal is the resultant. Two forces of $3$ N and $4$ N at a right angle give a resultant of
$$\sqrt{3^2 + 4^2} = 5\ \text{N},$$
not $7$ N. The resultant is largest ($F_1 + F_2$) when the forces point the same way, smallest ($|F_1 - F_2|$) when they are opposite, and anything in between for other angles.

### Why you cannot pull a rope perfectly straight

Hang a weight $P$ from the middle of a horizontal rope and pull the ends. The two halves of the rope pull slightly upward, and together their **vertical parts** must hold $P$. The flatter the rope, the smaller each upward part, so the larger the tension needed.

*Example.* A rope $2$ m long sags only $1$ cm in the middle. Each half rises $1$ cm over $1$ m, so only about $\frac{1}{100}$ of its tension pulls upward. Two halves together: $\frac{2}{100}T = P$, so $T = 50P$. A $1$ kg bag would need a pull of about $500$ N. To make the rope perfectly straight would need an infinite force. That is why washing lines and power lines always sag.

### Balanced forces do not mean "no forces"

A book lying on a table is acted on by gravity (down) and by the elastic force of the table (up). They balance, and the resultant is zero. A car moving at a steady $90$ km/h on a motorway also has a zero resultant: the engine's pull balances air resistance and friction. Zero resultant means **unchanged speed**, which includes standing still and moving uniformly.

### How a dynamometer measures any force

The dynamometer's spring is first calibrated with known weights: $1$ N, $2$ N, and so on. Because the extension is proportional to the force (Hooke's law), the marks are evenly spaced, and the scale can then measure forces of any origin, such as a pull, friction or a magnet, not only weights.`,
    r`### Անկյան տակ ուժերը գումարվում են սլաքների պես

Երբ երկու ուժեր գործում են տարբեր ուղիղներով, նրանց համազորը գտնում են **զուգահեռագծի կանոնով**. երկու ուժերի սլաքները տարեք մեկ կետից, լրացրեք զուգահեռագիծը, և նրա անկյունագիծը համազորն է։ Ուղիղ անկյան տակ գործող $3$ Ն և $4$ Ն ուժերը տալիս են
$$\sqrt{3^2 + 4^2} = 5$$
Ն համազոր, ոչ թե $7$ Ն։ Համազորն ամենամեծն է ($F_1 + F_2$), երբ ուժերն ուղղված են նույն կողմ, ամենափոքրը ($|F_1 - F_2|$)՝ երբ հակադիր են, իսկ մյուս անկյունների դեպքում՝ միջանկյալ։

### Ինչու չեք կարող պարանը կատարելապես ուղիղ ձգել

$P$ բեռը կախեք հորիզոնական պարանի մեջտեղից և քաշեք ծայրերը։ Պարանի երկու կեսերը քաշում են մի փոքր դեպի վեր, և միասին նրանց **ուղղաձիգ մասերը** պետք է պահեն $P$-ն։ Որքան հարթ է պարանը, այնքան փոքր է յուրաքանչյուր դեպի վեր մասը, ուստի այնքան մեծ լարում է պետք։

*Օրինակ։* $2$ մ երկարությամբ պարանը մեջտեղում իջնում է ընդամենը $1$ սմ։ Յուրաքանչյուր կես $1$ մ-ի վրա բարձրանում է $1$ սմ, ուստի նրա լարման միայն մոտ $\frac{1}{100}$ մասն է քաշում դեպի վեր։ Երկու կեսը միասին. $\frac{2}{100}T = P$, ուստի $T = 50P$։ $1$ կգ պայուսակի համար կպահանջվեր մոտ $500$ Ն ձգում։ Պարանը կատարելապես ուղիղ դարձնելու համար անվերջ ուժ կպահանջվեր։ Ահա թե ինչու են լվացքի պարաններն ու էլեկտրահաղորդման գծերը միշտ կախված։

### Հավասարակշռված ուժերը չեն նշանակում «ուժեր չկան»

Սեղանին դրված գրքի վրա ազդում են ծանրության ուժը (ներքև) և սեղանի առաձգականության ուժը (վեր)։ Դրանք հավասարակշռում են իրար, և համազորը զրո է։ Մայրուղով հաստատուն $90$ կմ/ժ արագությամբ շարժվող մեքենայի համազորը նույնպես զրո է. շարժիչի քարշը հավասարակշռում է օդի դիմադրությունն ու շփումը։ Զրոյական համազորը նշանակում է **անփոփոխ արագություն**, որը ներառում է և՛ դադարը, և՛ հավասարաչափ շարժումը։

### Ինչպես է դինամոմետրը չափում ցանկացած ուժ

Դինամոմետրի զսպանակը նախ աստիճանավորվում է հայտնի կշռաքարերով. $1$ Ն, $2$ Ն և այլն։ Քանի որ երկարացումը համեմատական է ուժին (Հուկի օրենք), նշումները հավասարաչափ են, և սանդղակը կարող է չափել ցանկացած ծագման ուժեր՝ քաշ, շփում կամ մագնիսի ուժ, ոչ միայն կշիռներ։`,
    r`### Силы под углом складываются как стрелки

Когда две силы действуют по разным прямым, их равнодействующую находят по **правилу параллелограмма**: проведите стрелки двух сил из одной точки, достройте параллелограмм, и его диагональ — равнодействующая. Две силы $3$ Н и $4$ Н под прямым углом дают равнодействующую
$$\sqrt{3^2 + 4^2} = 5\ \text{Н},$$
а не $7$ Н. Равнодействующая наибольшая ($F_1 + F_2$), когда силы направлены одинаково, наименьшая ($|F_1 - F_2|$) — когда противоположно, а при других углах — промежуточная.

### Почему нельзя натянуть верёвку идеально прямо

Подвесьте груз $P$ к середине горизонтальной верёвки и тяните за концы. Две половины верёвки тянут слегка вверх, и вместе их **вертикальные части** должны удержать $P$. Чем площе верёвка, тем меньше каждая вертикальная часть, значит, тем больше нужное натяжение.

*Пример.* Верёвка длиной $2$ м провисает посередине всего на $1$ см. Каждая половина поднимается на $1$ см на $1$ м, так что вверх тянет лишь около $\frac{1}{100}$ её натяжения. Две половины вместе: $\frac{2}{100}T = P$, значит, $T = 50P$. Для сумки в $1$ кг понадобилось бы натяжение около $500$ Н. Чтобы натянуть верёвку идеально прямо, нужна бесконечная сила. Поэтому бельевые верёвки и провода всегда провисают.

### Уравновешенные силы — не «нет сил»

На книгу на столе действуют сила тяжести (вниз) и сила упругости стола (вверх). Они уравновешены, равнодействующая равна нулю. У машины, едущей по трассе с постоянной скоростью $90$ км/ч, равнодействующая тоже ноль: тяга двигателя уравновешивает сопротивление воздуха и трение. Нулевая равнодействующая означает **неизменную скорость**, включая покой и равномерное движение.

### Как динамометр измеряет любую силу

Пружину динамометра сначала градуируют известными грузами: $1$ Н, $2$ Н и так далее. Поскольку удлинение пропорционально силе (закон Гука), деления равномерные, и шкала измеряет силы любого происхождения — тягу, трение, силу магнита, а не только вес.`,
  ),

  friction: th(
    r`### Amontons' laws and a puzzle

In 1699 Guillaume Amontons stated two laws of sliding friction (Leonardo da Vinci had noticed them two centuries earlier):

1. Friction is proportional to the force pressing the surfaces together: $F_{\text{fr}} = \mu N$.
2. Friction does **not** depend on the area of contact.

The second law is surprising: a brick slides with the same friction on its wide face and on its narrow edge. The explanation was found in the 20th century. Real surfaces touch only at the tips of microscopic bumps, and the **true** contact area is thousands of times smaller than it looks. Press harder and the bumps flatten, so the true area grows in proportion to the load, whatever the visible area.

### The coefficient of friction

$\mu$ is a number without units that depends on the pair of surfaces:

| Surfaces | $\mu$ (about) |
|---|---|
| rubber on dry asphalt | $0{.}7$ |
| rubber on wet asphalt | $0{.}5$ |
| steel on steel, lubricated | $0{.}1$ |
| skate on ice | $0{.}02$ |
| rubber on ice | $0{.}15$ |

*Example.* To slide a $50$ kg wooden box on a floor with $\mu = 0{.}3$ you need a push of about $0{.}3 \cdot 500 = 150$ N.

### Static friction is larger than sliding friction

To start a heavy wardrobe moving takes more force than to keep it sliding. This is why a car must not skid. A rolling tyre does not slide on the road: its contact patch is momentarily at rest, so **static** friction acts, which is larger. A skidding tyre slides, and the smaller sliding friction acts, so the car takes longer to stop and cannot be steered. Anti-lock brakes (ABS) release and reapply the brakes many times a second to keep the wheels just short of skidding.

### Why we could not live without friction

Without friction you could not walk (your foot would slip back), knots would untie, nails would slide out, and a car could neither start nor stop. On ice, where friction is $30$ times smaller, all of these problems appear at once.`,
    r`### Ամոնտոնի օրենքները և մի գլուխկոտրուկ

1699 թվականին Գիյոմ Ամոնտոնը ձևակերպեց սահքի շփման երկու օրենք (Լեոնարդո դա Վինչին դրանք նկատել էր երկու դար առաջ).

1. Շփումը համեմատական է մակերևույթները իրար սեղմող ուժին. $F_{\text{շփ}} = \mu N$։
2. Շփումը **կախված չէ** հպման մակերեսից։

Երկրորդ օրենքը զարմանալի է. աղյուսը նույն շփմամբ է սահում իր լայն նիստով և նեղ կողով։ Բացատրությունը գտնվեց XX դարում։ Իրական մակերևույթները հպվում են միայն մանրադիտակային ելուստների ծայրերով, և **իրական** հպման մակերեսը հազարավոր անգամ փոքր է, քան թվում է։ Ավելի ուժեղ սեղմեք, և ելուստները կտափակվեն, ուստի իրական մակերեսն աճում է բեռին համեմատական՝ անկախ տեսանելի մակերեսից։

### Շփման գործակիցը

$\mu$-ն առանց միավորի թիվ է, որը կախված է մակերևույթների զույգից.

| Մակերևույթներ | $\mu$ (մոտավորապես) |
|---|---|
| ռետին չոր ասֆալտի վրա | $0{,}7$ |
| ռետին թաց ասֆալտի վրա | $0{,}5$ |
| պողպատ պողպատի վրա, յուղված | $0{,}1$ |
| չմուշկ սառույցի վրա | $0{,}02$ |
| ռետին սառույցի վրա | $0{,}15$ |

*Օրինակ։* $\mu = 0{,}3$ հատակի վրա $50$ կգ փայտե արկղը սահեցնելու համար պետք է մոտ $0{,}3 \cdot 500 = 150$ Ն հրում։

### Դադարի շփումն ավելի մեծ է, քան սահքի շփումը

Ծանր պահարանը տեղից շարժելը ավելի մեծ ուժ է պահանջում, քան այն սահեցնելը։ Ահա թե ինչու մեքենան չպետք է սահի։ Գլորվող անվադողը ճանապարհի վրա չի սահում. նրա հպման մասը պահ առ պահ դադարի վիճակում է, ուստի գործում է **դադարի** շփումը, որն ավելի մեծ է։ Սահող անվադողը սահում է, և գործում է ավելի փոքր սահքի շփումը, ուստի մեքենան ավելի երկար է կանգնում և չի ղեկավարվում։ Հակաարգելափակման համակարգը (ABS) վայրկյանում բազմաթիվ անգամ թուլացնում և նորից սեղմում է արգելակները՝ անիվները սահքի սահմանին պահելու համար։

### Ինչու չէինք կարող ապրել առանց շփման

Առանց շփման չէիք կարող քայլել (ոտքը հետ կսահեր), հանգույցները կքանդվեին, մեխերը դուրս կսահեին, իսկ մեքենան ոչ տեղից կշարժվեր, ոչ էլ կկանգներ։ Սառույցի վրա, որտեղ շփումը $30$ անգամ փոքր է, այս բոլոր խնդիրները միանգամից են հայտնվում։`,
    r`### Законы Амонтона и загадка

В 1699 году Гийом Амонтон сформулировал два закона трения скольжения (Леонардо да Винчи заметил их на два века раньше):

1. Трение пропорционально силе, прижимающей поверхности: $F_{\text{тр}} = \mu N$.
2. Трение **не** зависит от площади соприкосновения.

Второй закон удивителен: кирпич скользит с одинаковым трением на широкой грани и на узком ребре. Объяснение нашли в XX веке. Реальные поверхности соприкасаются только вершинами микроскопических выступов, и **настоящая** площадь контакта в тысячи раз меньше видимой. Прижмите сильнее — выступы сплющатся, и настоящая площадь вырастет пропорционально нагрузке, какова бы ни была видимая площадь.

### Коэффициент трения

$\mu$ — безразмерное число, зависящее от пары поверхностей:

| Поверхности | $\mu$ (примерно) |
|---|---|
| резина по сухому асфальту | $0{,}7$ |
| резина по мокрому асфальту | $0{,}5$ |
| сталь по стали со смазкой | $0{,}1$ |
| конёк по льду | $0{,}02$ |
| резина по льду | $0{,}15$ |

*Пример.* Чтобы сдвинуть деревянный ящик массой $50$ кг по полу с $\mu = 0{,}3$, нужно толкать с силой около $0{,}3 \cdot 500 = 150$ Н.

### Трение покоя больше трения скольжения

Сдвинуть тяжёлый шкаф труднее, чем потом тащить его. Поэтому машину нельзя пускать юзом. Катящаяся шина не скользит по дороге: её пятно контакта в каждый момент покоится, и действует трение **покоя**, которое больше. Шина в юзе скользит, действует меньшее трение скольжения, машина дольше тормозит и не слушается руля. Антиблокировочная система (ABS) много раз в секунду отпускает и снова зажимает тормоза, удерживая колёса на грани юза.

### Почему без трения нельзя жить

Без трения нельзя было бы ходить (нога соскальзывала бы назад), узлы развязывались бы, гвозди выскальзывали бы, а машина не могла бы ни тронуться, ни остановиться. На льду, где трение в $30$ раз меньше, все эти беды появляются разом.`,
  ),
};
