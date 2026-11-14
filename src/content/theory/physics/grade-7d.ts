import { th } from "../kit";

const r = String.raw;

/** Physics 7, unit 5: work, power, simple machines, energy. */
export const physics7d = {
  "mechanical-work": th(
    r`### What a joule feels like

Lift a $100$ g apple from the floor onto a $1$ m table: $A = 0{.}1 \cdot 10 \cdot 1 = 1$ J. One heartbeat does about $1$ J of work pushing blood. Climbing to the fifth floor, a $50$ kg pupil does about $50 \cdot 10 \cdot 15 = 7500$ J.

### Work is an area

Draw a graph with the distance $s$ along the horizontal axis and the force $F$ up the vertical one. For a constant force the graph is a horizontal line, and the work $F \cdot s$ is the **area of the rectangle** under it.

This idea works even when the force changes. Stretch a spring with stiffness $k$ from zero extension to extension $x$. The force grows evenly from $0$ to $kx$, so the graph is a straight line and the area under it is a **triangle**:
$$A = \frac{1}{2} \cdot x \cdot kx = \frac{k x^2}{2}.$$
*Example.* $k = 200$ N/m, $x = 0{.}1$ m: $A = 200 \cdot 0{.}01 : 2 = 1$ J. Stretching it twice as far takes **four** times the work.

### The path does not matter for lifting

Carry a box up a staircase or push it up a smooth ramp to the same height $h$. Split the stairs into small steps: on the horizontal parts the vertical force $mg$ does no work, and on the vertical parts the rises add up to $h$. Either way, the work against gravity is $mgh$. Only the height counts, not the route.

### Negative work

When a force acts **against** the motion, its work is negative. When you lower a box slowly, your hands push up while the box moves down: your work is $-mgh$, and gravity's work is $+mgh$. Friction on a sliding sledge always does negative work: it takes energy away from the motion.`,
    r`### Ինչպիսի՞ն է մեկ ջոուլը

$100$ գ խնձորը հատակից բարձրացրեք $1$ մ բարձրությամբ սեղանին. $A = 0{,}1 \cdot 10 \cdot 1 = 1$ Ջ։ Սրտի մեկ զարկը արյունը մղելիս կատարում է մոտ $1$ Ջ աշխատանք։ Հինգերորդ հարկ բարձրանալիս $50$ կգ աշակերտը կատարում է մոտ $50 \cdot 10 \cdot 15 = 7500$ Ջ աշխատանք։

### Աշխատանքը մակերես է

Գծենք գրաֆիկ, որի հորիզոնական առանցքով տեղադրված է $s$ ճանապարհը, իսկ ուղղաձիգով՝ $F$ ուժը։ Հաստատուն ուժի դեպքում գրաֆիկը հորիզոնական գիծ է, իսկ $F \cdot s$ աշխատանքը դրա տակ գտնվող **ուղղանկյան մակերեսն** է։

Այս գաղափարն աշխատում է նաև այն ժամանակ, երբ ուժը փոխվում է։ $k$ կոշտությամբ զսպանակը ձգենք զրոյական երկարացումից մինչև $x$ երկարացում։ Ուժը հավասարաչափ աճում է $0$-ից մինչև $kx$, ուստի գրաֆիկն ուղիղ գիծ է, իսկ դրա տակ գտնվող մակերեսը **եռանկյուն** է.
$$A = \frac{1}{2} \cdot x \cdot kx = \frac{k x^2}{2}$$
*Օրինակ։* $k = 200$ Ն/մ, $x = 0{,}1$ մ. $A = 200 \cdot 0{,}01 : 2 = 1$ Ջ։ Երկու անգամ ավելի ձգելու համար պահանջվում է **չորս** անգամ մեծ աշխատանք։

### Բարձրացնելիս ճանապարհը նշանակություն չունի

Արկղը նույն $h$ բարձրությանը հասցրեք աստիճաններով կամ ողորկ թեքահարթակով։ Աստիճանները բաժանենք փոքր քայլերի. հորիզոնական մասերում $mg$ ուղղաձիգ ուժը աշխատանք չի կատարում, իսկ ուղղաձիգ մասերի բարձրացումները գումարվում են և տալիս $h$։ Երկու դեպքում էլ ծանրության ուժի դեմ աշխատանքը $mgh$ է։ Կարևոր է միայն բարձրությունը, ոչ թե ճանապարհը։

### Բացասական աշխատանք

Երբ ուժն ազդում է շարժմանը **հակառակ**, նրա աշխատանքը բացասական է։ Երբ արկղը դանդաղ իջեցնում եք, ձեռքերը հրում են վերև, իսկ արկղը շարժվում է ներքև. ձեր աշխատանքը $-mgh$ է, իսկ ծանրության ուժինը՝ $+mgh$։ Սահնակին ազդող շփման ուժը միշտ բացասական աշխատանք է կատարում. այն էներգիա է խլում շարժումից։`,
    r`### Каков джоуль на ощупь

Поднимите яблоко массой $100$ г с пола на стол высотой $1$ м: $A = 0{,}1 \cdot 10 \cdot 1 = 1$ Дж. Одно сокращение сердца совершает около $1$ Дж работы, проталкивая кровь. Поднимаясь на пятый этаж, школьник массой $50$ кг совершает около $50 \cdot 10 \cdot 15 = 7500$ Дж.

### Работа — это площадь

Построим график: по горизонтали путь $s$, по вертикали сила $F$. Для постоянной силы график — горизонтальная линия, а работа $F \cdot s$ равна **площади прямоугольника** под ней.

Эта идея работает и тогда, когда сила меняется. Растянем пружину жёсткостью $k$ от нулевого удлинения до удлинения $x$. Сила равномерно растёт от $0$ до $kx$, график — прямая, а площадь под ней — **треугольник**:
$$A = \frac{1}{2} \cdot x \cdot kx = \frac{k x^2}{2}.$$
*Пример.* $k = 200$ Н/м, $x = 0{,}1$ м: $A = 200 \cdot 0{,}01 : 2 = 1$ Дж. Чтобы растянуть вдвое дальше, нужна **вчетверо** большая работа.

### При подъёме путь не важен

Поднимите ящик на высоту $h$ по лестнице или по гладкому пандусу. Разобьём лестницу на маленькие ступеньки: на горизонтальных участках вертикальная сила $mg$ работы не совершает, а вертикальные подъёмы в сумме дают $h$. В обоих случаях работа против силы тяжести равна $mgh$. Важна только высота, а не маршрут.

### Отрицательная работа

Когда сила действует **против** движения, её работа отрицательна. Когда вы медленно опускаете ящик, руки толкают вверх, а ящик движется вниз: ваша работа равна $-mgh$, а работа силы тяжести $+mgh$. Сила трения, действующая на санки, всегда совершает отрицательную работу: она отнимает энергию у движения.`,
  ),

  power: th(
    r`### Measure your own power

A $60$ kg pupil runs up three floors, $9$ m, in $15$ s:
$$N = \frac{mgh}{t} = \frac{60 \cdot 10 \cdot 9}{15} = 360\ \text{W}.$$
A trained athlete can briefly give over $1000$ W, but for an hour a fit person keeps up only about $100$–$200$ W.

### Where the horsepower came from

James Watt sold steam engines to mine owners who used horses to drive pumps. To compare, he estimated what a mill horse could do and fixed the horsepower at $33\,000$ foot-pounds per minute, about $746$ W. The **metric** horsepower, used in Europe and Russia, is lifting $75$ kg by $1$ m in $1$ s:
$$75 \cdot 9{.}81 \cdot 1 : 1 \approx 735{.}5\ \text{W}.$$
A real horse can give much more for a few seconds, but much less all day long.

### Why a car changes gear on a hill

An engine has a certain greatest power $N$. From $N = F v$:
$$F = \frac{N}{v}.$$
At the same power, a **lower** speed gives a **greater** pulling force. A low gear makes the wheels turn slower, so the car can climb a steep hill. A cyclist does the same on a bicycle with gears.

The same formula explains top speed. Air resistance grows quickly with speed. When it becomes equal to $N/v$, the engine cannot pull harder, and the car stops speeding up. With $N = 40$ kW and a resisting force of $1000$ N, the top speed is $40\,000 : 1000 = 40$ m/s.

### The kilowatt-hour

Electricity bills count energy in **kilowatt-hours**: the work done in one hour at a power of $1$ kW.
$$1\ \text{kW} \cdot \text{h} = 1000\ \text{W} \cdot 3600\ \text{s} = 3\,600\,000\ \text{J}.$$
A $2$ kW kettle running for $3$ minutes uses $2 \cdot \frac{3}{60} = 0{.}1$ kW·h.`,
    r`### Չափեք ձեր սեփական հզորությունը

$60$ կգ աշակերտը $15$ վայրկյանում վազելով բարձրանում է երեք հարկ՝ $9$ մ.
$$N = \frac{mgh}{t} = \frac{60 \cdot 10 \cdot 9}{15} = 360\ \text{Վտ}$$
Մարզված մարզիկը կարճ ժամանակով կարող է տալ ավելի քան $1000$ Վտ, բայց մեկ ժամ շարունակ առողջ մարդը պահում է ընդամենը մոտ $100$–$200$ Վտ։

### Որտեղի՞ց է ձիաուժը

Ջեյմս Ուատը շոգեմեքենաներ էր վաճառում հանքատերերին, որոնք պոմպերը շարժում էին ձիերով։ Համեմատելու համար նա գնահատեց, թե ինչ կարող է անել ջրաղացի ձին, և ձիաուժը սահմանեց րոպեում $33\,000$ ֆուտ-ֆունտ, մոտ $746$ Վտ։ Եվրոպայում և Ռուսաստանում օգտագործվող **մետրական** ձիաուժը $75$ կգ բեռը $1$ վայրկյանում $1$ մ բարձրացնելն է.
$$75 \cdot 9{,}81 \cdot 1 : 1 \approx 735{,}5\ \text{Վտ}$$
Իրական ձին մի քանի վայրկյան կարող է շատ ավելին տալ, բայց ամբողջ օրվա ընթացքում՝ շատ ավելի քիչ։

### Ինչո՞ւ է մեքենան բլրի վրա փոխանցումը փոխում

Շարժիչն ունի որոշակի առավելագույն $N$ հզորություն։ $N = F v$-ից՝
$$F = \frac{N}{v}$$
Նույն հզորության դեպքում **փոքր** արագությունը տալիս է **մեծ** քարշի ուժ։ Ցածր փոխանցումն անիվներն ավելի դանդաղ է պտտում, և մեքենան կարողանում է բարձրանալ զառիթափ բլուրը։ Հեծանվորդը նույնն է անում փոխանցումներով հեծանիվի վրա։

Նույն բանաձևը բացատրում է առավելագույն արագությունը։ Օդի դիմադրությունն արագության հետ արագ աճում է։ Երբ այն հավասարվում է $N/v$-ին, շարժիչն այլևս չի կարող ավելի ուժեղ քաշել, և մեքենան դադարում է արագանալ։ $N = 40$ կՎտ և $1000$ Ն դիմադրության ուժի դեպքում առավելագույն արագությունը $40\,000 : 1000 = 40$ մ/վ է։

### Կիլովատ-ժամ

Էլեկտրաէներգիայի հաշիվներում էներգիան հաշվում են **կիլովատ-ժամերով**՝ $1$ կՎտ հզորությամբ մեկ ժամում կատարված աշխատանքով։
$$1\ \text{կՎտ} \cdot \text{ժ} = 1000\ \text{Վտ} \cdot 3600\ \text{վ} = 3\,600\,000\ \text{Ջ}$$
$3$ րոպե աշխատող $2$ կՎտ թեյնիկը ծախսում է $2 \cdot \frac{3}{60} = 0{,}1$ կՎտ·ժ։`,
    r`### Измерьте свою мощность

Школьник массой $60$ кг взбегает на три этажа, $9$ м, за $15$ с:
$$N = \frac{mgh}{t} = \frac{60 \cdot 10 \cdot 9}{15} = 360\ \text{Вт}.$$
Тренированный спортсмен может кратко развить больше $1000$ Вт, но в течение часа здоровый человек выдерживает лишь около $100$–$200$ Вт.

### Откуда взялась лошадиная сила

Джеймс Уатт продавал паровые машины владельцам шахт, у которых насосы приводили в движение лошади. Чтобы сравнивать, он оценил, на что способна лошадь на мельнице, и принял лошадиную силу равной $33\,000$ футо-фунтов в минуту, около $746$ Вт. **Метрическая** лошадиная сила, принятая в Европе и России, — это подъём $75$ кг на $1$ м за $1$ с:
$$75 \cdot 9{,}81 \cdot 1 : 1 \approx 735{,}5\ \text{Вт}.$$
Настоящая лошадь на несколько секунд может дать гораздо больше, а за целый день гораздо меньше.

### Почему машина на подъёме переключает передачу

Двигатель имеет определённую наибольшую мощность $N$. Из $N = F v$:
$$F = \frac{N}{v}.$$
При той же мощности **меньшая** скорость даёт **большую** силу тяги. Низкая передача заставляет колёса вращаться медленнее, и машина может взобраться на крутой склон. Так же поступает велосипедист на велосипеде с передачами.

Та же формула объясняет наибольшую скорость. Сопротивление воздуха быстро растёт со скоростью. Когда оно сравняется с $N/v$, двигатель не может тянуть сильнее, и машина перестаёт разгоняться. При $N = 40$ кВт и силе сопротивления $1000$ Н наибольшая скорость $40\,000 : 1000 = 40$ м/с.

### Киловатт-час

В счетах за электричество энергию считают в **киловатт-часах**: это работа за один час при мощности $1$ кВт.
$$1\ \text{кВт} \cdot \text{ч} = 1000\ \text{Вт} \cdot 3600\ \text{с} = 3\,600\,000\ \text{Дж}.$$
Чайник мощностью $2$ кВт, работающий $3$ минуты, расходует $2 \cdot \frac{3}{60} = 0{,}1$ кВт·ч.`,
  ),

  levers: th(
    r`### Deriving the rule of the lever

Turn a balanced lever by a tiny angle. Both ends move along arcs of circles centred at the fulcrum, and the length of an arc is proportional to its radius. So the end on the arm $l_1$ moves a distance $s_1$, the end on $l_2$ moves $s_2$, and
$$\frac{s_1}{s_2} = \frac{l_1}{l_2}.$$
A lever, like every machine, does not create work (the golden rule, next lesson): $F_1 s_1 = F_2 s_2$. Substituting,
$$F_1 l_1 = F_2 l_2.$$
The rule of the lever is the golden rule of mechanics in disguise.

### Why the arm is a perpendicular distance

Push a door right at its hinge, or pull it straight along its surface toward the hinge: it does not turn, however hard you try. What matters is how far the **line of action** of the force passes from the axis. That shortest distance is the arm. A door handle is placed far from the hinges for a reason.

### Many forces: balance of moments

If several forces act on a lever, it is in balance when the moments turning it one way equal the moments turning it the other way.

*Example.* On a seesaw, Ani ($300$ N) sits $2$ m left of the middle. On the right, Aram ($400$ N) sits $1$ m from the middle. Where must Lilit ($200$ N) sit on the right?
$$300 \cdot 2 = 400 \cdot 1 + 200 \cdot x \;\Rightarrow\; x = 1\ \text{m}.$$

### Could Archimedes move the Earth?

Suppose Archimedes pushes with $600$ N and the Earth "weighs" $6 \cdot 10^{24} \cdot 10 = 6 \cdot 10^{25}$ N. The arms must be in the ratio $10^{23} : 1$. To lift the Earth by just $1$ cm, his end of the lever would move $10^{23}$ cm $= 10^{21}$ m, about the width of our whole Galaxy. Pushing at $1$ m/s, it would take about $30\,000$ billion years. The physics is right, but the golden rule makes it hopeless.`,
    r`### Լծակի կանոնի արտածումը

Հավասարակշռված լծակը պտտենք շատ փոքր անկյունով։ Երկու ծայրերն էլ շարժվում են հենման կետում կենտրոն ունեցող շրջանագծերի աղեղներով, իսկ աղեղի երկարությունը համեմատական է շառավղին։ Ուրեմն $l_1$ բազուկի ծայրն անցնում է $s_1$ ճանապարհ, $l_2$-ինը՝ $s_2$, և
$$\frac{s_1}{s_2} = \frac{l_1}{l_2}$$
Լծակը, ինչպես ցանկացած մեքենա, աշխատանք չի ստեղծում (ոսկե կանոնը՝ հաջորդ դասում). $F_1 s_1 = F_2 s_2$։ Տեղադրելով՝
$$F_1 l_1 = F_2 l_2$$
Լծակի կանոնը մեխանիկայի ոսկե կանոնն է՝ այլ տեսքով։

### Ինչո՞ւ է բազուկը ուղղահայաց հեռավորություն

Դուռը հրեք հենց ծխնիի մոտ կամ քաշեք ուղիղ նրա մակերևույթով դեպի ծխնին. այն չի պտտվում, որքան էլ ջանաք։ Կարևոր է, թե որքան հեռու է անցնում ուժի **ազդման գիծը** առանցքից։ Այդ ամենակարճ հեռավորությունն էլ բազուկն է։ Դռան բռնակը պատահական չէ, որ ծխնիներից հեռու է։

### Շատ ուժեր. մոմենտների հավասարակշռություն

Եթե լծակին ազդում են մի քանի ուժեր, այն հավասարակշռված է, երբ այն մի ուղղությամբ պտտող մոմենտների գումարը հավասար է մյուս ուղղությամբ պտտողների գումարին։

*Օրինակ։* Ճոճաթիակի վրա Անին ($300$ Ն) նստած է մեջտեղից $2$ մ ձախ։ Աջում Արամը ($400$ Ն) նստած է մեջտեղից $1$ մ հեռու։ Աջում որտե՞ղ պետք է նստի Լիլիթը ($200$ Ն).
$$300 \cdot 2 = 400 \cdot 1 + 200 \cdot x \;\Rightarrow\; x = 1\ \text{մ}$$

### Կարո՞ղ էր Արքիմեդը շարժել Երկիրը

Ենթադրենք Արքիմեդը հրում է $600$ Ն ուժով, իսկ Երկիրը «կշռում» է $6 \cdot 10^{24} \cdot 10 = 6 \cdot 10^{25}$ Ն։ Բազուկները պետք է հարաբերեն $10^{23} : 1$։ Երկիրն ընդամենը $1$ սմ բարձրացնելու համար լծակի նրա ծայրը պետք է անցներ $10^{23}$ սմ $= 10^{21}$ մ՝ մոտավորապես մեր ամբողջ Գալակտիկայի լայնությունը։ $1$ մ/վ արագությամբ հրելիս դա կտևեր մոտ $30\,000$ միլիարդ տարի։ Ֆիզիկան ճիշտ է, բայց ոսկե կանոնը գործն անհույս է դարձնում։`,
    r`### Вывод правила рычага

Повернём уравновешенный рычаг на очень малый угол. Оба конца движутся по дугам окружностей с центром в точке опоры, а длина дуги пропорциональна радиусу. Значит, конец на плече $l_1$ проходит путь $s_1$, на плече $l_2$ путь $s_2$, и
$$\frac{s_1}{s_2} = \frac{l_1}{l_2}.$$
Рычаг, как и любой механизм, не создаёт работы (золотое правило, следующий урок): $F_1 s_1 = F_2 s_2$. Подставляя, получаем
$$F_1 l_1 = F_2 l_2.$$
Правило рычага — это золотое правило механики в другом обличье.

### Почему плечо — перпендикулярное расстояние

Толкните дверь у самой петли или тяните её вдоль полотна к петле: она не повернётся, как ни старайтесь. Важно, насколько далеко от оси проходит **линия действия** силы. Это кратчайшее расстояние и есть плечо. Ручку двери не случайно делают далеко от петель.

### Много сил: равновесие моментов

Если на рычаг действуют несколько сил, он в равновесии, когда сумма моментов, вращающих его в одну сторону, равна сумме моментов, вращающих в другую.

*Пример.* На качелях Аня ($300$ Н) сидит в $2$ м слева от середины. Справа Арам ($400$ Н) сидит в $1$ м от середины. Где справа должна сесть Лилит ($200$ Н)?
$$300 \cdot 2 = 400 \cdot 1 + 200 \cdot x \;\Rightarrow\; x = 1\ \text{м}.$$

### Мог ли Архимед сдвинуть Землю?

Пусть Архимед давит с силой $600$ Н, а Земля «весит» $6 \cdot 10^{24} \cdot 10 = 6 \cdot 10^{25}$ Н. Плечи должны относиться как $10^{23} : 1$. Чтобы поднять Землю всего на $1$ см, его конец рычага прошёл бы $10^{23}$ см $= 10^{21}$ м, примерно поперечник всей нашей Галактики. Толкая со скоростью $1$ м/с, он потратил бы около $30\,000$ миллиардов лет. Физика верна, но золотое правило делает затею безнадёжной.`,
  ),

  "pulleys-golden-rule": th(
    r`### A block with many ropes

Join several movable pulleys into one block and pass a single rope over them. If $n$ rope segments hold up the movable block, each segment carries the same tension $T$ (it is one rope), and together they hold the load:
$$n T = P \;\Rightarrow\; F = T = \frac{P}{n}.$$
To lift the load by $h$, each of the $n$ segments must get shorter by $h$, so you pull out $n h$ of rope. Again: $F \cdot nh = P \cdot h$. Count the segments that go **to the movable block**, not the pulleys.

*Example.* A builder's block with $4$ segments lifts $800$ N with a pull of $200$ N, but the rope must be pulled $4$ m for each metre of rise.

### The inclined plane from the golden rule

Pushing a load up a smooth ramp of length $l$ to a height $h$ ends in the same place as lifting it straight up. If no work is lost,
$$F l = P h \;\Rightarrow\; F = P \cdot \frac{h}{l}.$$
A gentle ramp ($h/l$ small) needs a small force over a long path. Mountain roads wind in serpentines for exactly this reason.

### The screw: a ramp wrapped round a rod

Unwrap the thread of a screw, and it becomes a long thin ramp. One full turn of a handle of radius $R$ moves your hand $2\pi R$, while the load rises by the **pitch** $p$, the distance between neighbouring threads:
$$F \cdot 2\pi R = P \cdot p.$$
*Example.* A car jack with $R = 0{.}3$ m and $p = 5$ mm $= 0{.}005$ m: the gain in force is $2 \cdot 3{.}14 \cdot 0{.}3 : 0{.}005 \approx 377$ times, before friction. A wedge and an axe are ramps too: a thin blade turns a blow into a large sideways force.

### An old rule

Already in the 1st century, Heron of Alexandria noticed that what a machine gains in force, it loses in time. Galileo stated the rule in terms of distance. Today we say: **no machine gives a gain in work**. In the next units you will see that this is a part of the law of conservation of energy.`,
    r`### Բազմաթել ճախարակակարգ

Մի քանի շարժական ճախարակ միացնենք մեկ համակարգում և դրանց վրայով անցկացնենք մեկ պարան։ Եթե շարժական մասը պահում են պարանի $n$ հատված, յուրաքանչյուր հատվածի լարումը նույն $T$-ն է (դա մեկ պարան է), և միասին դրանք պահում են բեռը.
$$n T = P \;\Rightarrow\; F = T = \frac{P}{n}$$
Բեռը $h$-ով բարձրացնելու համար $n$ հատվածներից յուրաքանչյուրը պետք է կարճանա $h$-ով, ուստի դուք դուրս եք քաշում $n h$ պարան։ Կրկին՝ $F \cdot nh = P \cdot h$։ Հաշվեք **դեպի շարժական մաս** գնացող հատվածները, ոչ թե ճախարակները։

*Օրինակ։* $4$ հատվածով շինարարական ճախարակակարգը $800$ Ն բեռը բարձրացնում է $200$ Ն ուժով, բայց բարձրացման յուրաքանչյուր մետրի համար պարանը պետք է քաշել $4$ մ։

### Թեք հարթությունը՝ ոսկե կանոնից

$l$ երկարությամբ ողորկ թեքահարթակով բեռը $h$ բարձրությանը հասցնելը նույն տեղում է ավարտվում, ինչ այն ուղիղ վեր բարձրացնելը։ Եթե աշխատանք չի կորչում՝
$$F l = P h \;\Rightarrow\; F = P \cdot \frac{h}{l}$$
Մեղմ թեքահարթակը ($h/l$ փոքր է) պահանջում է փոքր ուժ երկար ճանապարհի վրա։ Լեռնային ճանապարհները հենց այդ պատճառով են օձապտույտ։

### Պտուտակը՝ ձողին փաթաթված թեքահարթակ

Պտուտակի պարույրը բացենք, և այն կդառնա երկար ու նեղ թեքահարթակ։ $R$ շառավղով բռնակի մեկ լրիվ պտույտի ժամանակ ձեռքն անցնում է $2\pi R$, իսկ բեռը բարձրանում է **քայլի** չափով՝ $p$, որը հարևան պարույրների միջև հեռավորությունն է.
$$F \cdot 2\pi R = P \cdot p$$
*Օրինակ։* $R = 0{,}3$ մ և $p = 5$ մմ $= 0{,}005$ մ ունեցող ամբարձիչը ուժում շահում է $2 \cdot 3{,}14 \cdot 0{,}3 : 0{,}005 \approx 377$ անգամ՝ առանց շփումը հաշվի առնելու։ Սեպը և կացինը նույնպես թեքահարթակներ են. բարակ շեղբը հարվածը վերածում է մեծ կողային ուժի։

### Հին կանոն

Դեռ 1-ին դարում Հերոն Ալեքսանդրացին նկատեց, որ ինչ մեքենան շահում է ուժում, կորցնում է ժամանակում։ Գալիլեյը կանոնը ձևակերպեց ճանապարհի միջոցով։ Այսօր ասում ենք. **ոչ մի մեքենա աշխատանքում շահում չի տալիս**։ Հաջորդ թեմաներում կտեսնեք, որ սա էներգիայի պահպանման օրենքի մի մասն է։`,
    r`### Блок со многими верёвками

Соединим несколько подвижных блоков в одну обойму и пропустим через них одну верёвку. Если подвижную обойму держат $n$ участков верёвки, в каждом из них одно и то же натяжение $T$ (это одна верёвка), и вместе они держат груз:
$$n T = P \;\Rightarrow\; F = T = \frac{P}{n}.$$
Чтобы поднять груз на $h$, каждый из $n$ участков должен укоротиться на $h$, поэтому вытягивать приходится $n h$ верёвки. Снова: $F \cdot nh = P \cdot h$. Считайте участки, идущие **к подвижной обойме**, а не блоки.

*Пример.* Строительный полиспаст с $4$ участками поднимает $800$ Н силой $200$ Н, но на каждый метр подъёма верёвку надо вытянуть на $4$ м.

### Наклонная плоскость из золотого правила

Втащить груз по гладкому пандусу длиной $l$ на высоту $h$ — значит прийти туда же, куда приводит подъём по вертикали. Если работа не теряется,
$$F l = P h \;\Rightarrow\; F = P \cdot \frac{h}{l}.$$
Пологий пандус ($h/l$ мало) требует малой силы на длинном пути. Именно поэтому горные дороги вьются серпантином.

### Винт: пандус, намотанный на стержень

Развернём резьбу винта, и она превратится в длинный узкий пандус. За один полный оборот рукоятки радиусом $R$ рука проходит $2\pi R$, а груз поднимается на **шаг** резьбы $p$, расстояние между соседними витками:
$$F \cdot 2\pi R = P \cdot p.$$
*Пример.* Домкрат с $R = 0{,}3$ м и $p = 5$ мм $= 0{,}005$ м даёт выигрыш в силе $2 \cdot 3{,}14 \cdot 0{,}3 : 0{,}005 \approx 377$ раз без учёта трения. Клин и топор тоже наклонные плоскости: тонкое лезвие превращает удар в большую боковую силу.

### Древнее правило

Ещё в I веке Герон Александрийский заметил, что выигрывая в силе, механизм проигрывает во времени. Галилей сформулировал правило через расстояние. Сегодня мы говорим: **ни один механизм не даёт выигрыша в работе**. Дальше вы увидите, что это часть закона сохранения энергии.`,
  ),

  efficiency: th(
    r`### Where the lost work goes

In the lesson's example a $600$ N load was pulled up a $4$ m ramp to $1{.}5$ m with $300$ N. The lost work is
$$A_{\text{t}} - A_{\text{u}} = 1200 - 900 = 300\ \text{J}.$$
It went into overcoming friction along the $4$ m, so the friction force was $300 : 4 = 75$ N. The lost work is not destroyed: the ramp and the load warm up a little.

### Even without friction, a pulley loses something

A movable pulley weighs $20$ N and lifts a $400$ N load. Even with no friction you must lift the pulley too:
$$F = \frac{400 + 20}{2} = 210\ \text{N},\qquad \eta = \frac{400 \cdot h}{210 \cdot 2h} = \frac{400}{420} \approx 95\%.$$
Lighter pulleys and smoother axles bring $\eta$ closer to $100\%$, but never to it.

### Efficiencies multiply

When energy passes through a chain of machines, each one keeps only its share. If a power plant turns $40\%$ of the fuel's energy into electricity, the power lines deliver $90\%$ of it, and a motor turns $85\%$ of that into work, then
$$\eta = 0{.}40 \cdot 0{.}90 \cdot 0{.}85 \approx 0{.}31 = 31\%.$$
Long chains lose a lot even when every link looks good.

### A useful kind of "bad" machine

A jack or a screw with a lot of friction has a low efficiency, but that friction also stops the load from sliding back down when you let go. For screws, this **self-locking** usually appears when the efficiency is below about $50\%$. A car jack is designed this way on purpose: it holds the car without anyone holding the handle.

### Why $\eta$ cannot exceed 100%

A machine with $\eta > 100\%$ would give out more work than it receives. Connect its output to its input, and it would run forever and still have work to spare. No such machine has ever been built, and the law of conservation of energy (later in this unit) says none ever will be.`,
    r`### Ու՞ր է գնում կորած աշխատանքը

Դասի օրինակում $600$ Ն բեռը $300$ Ն ուժով քաշվել էր $4$ մ թեքահարթակով մինչև $1{,}5$ մ բարձրություն։ Կորած աշխատանքը՝
$$A_{\text{լ}} - A_{\text{օ}} = 1200 - 900 = 300\ \text{Ջ}$$
Այն ծախսվել է $4$ մ-ի երկայնքով շփումը հաղթահարելու վրա, ուստի շփման ուժը $300 : 4 = 75$ Ն էր։ Կորած աշխատանքը չի ոչնչանում. թեքահարթակը և բեռը մի փոքր տաքանում են։

### Նույնիսկ առանց շփման ճախարակը ինչ-որ բան կորցնում է

$20$ Ն կշռով շարժական ճախարակը բարձրացնում է $400$ Ն բեռ։ Նույնիսկ առանց շփման պետք է բարձրացնել նաև ճախարակը.
$$F = \frac{400 + 20}{2} = 210\ \text{Ն},\qquad \eta = \frac{400 \cdot h}{210 \cdot 2h} = \frac{400}{420} \approx 95\%$$
Ավելի թեթև ճախարակները և ավելի ողորկ առանցքները $\eta$-ն մոտեցնում են $100\%$-ին, բայց երբեք չեն հասցնում։

### ՕԳԳ-ները բազմապատկվում են

Երբ էներգիան անցնում է մեքենաների շղթայով, յուրաքանչյուրը պահում է միայն իր բաժինը։ Եթե էլեկտրակայանը վառելիքի էներգիայի $40\%$-ը վերածում է էլեկտրականության, էլեկտրագծերը հասցնում են դրա $90\%$-ը, իսկ շարժիչը դրա $85\%$-ը վերածում է աշխատանքի, ապա
$$\eta = 0{,}40 \cdot 0{,}90 \cdot 0{,}85 \approx 0{,}31 = 31\%$$
Երկար շղթաները շատ են կորցնում, նույնիսկ եթե ամեն օղակ լավն է թվում։

### «Վատ» մեքենայի օգտակար տեսակ

Մեծ շփումով ամբարձիչը կամ պտուտակը ցածր ՕԳԳ ունի, բայց այդ շփումն էլ թույլ չի տալիս բեռին հետ սահել, երբ բաց եք թողնում։ Պտուտակների դեպքում այս **ինքնարգելակումը** սովորաբար ի հայտ է գալիս, երբ ՕԳԳ-ն մոտ $50\%$-ից ցածր է։ Ավտոմեքենայի ամբարձիչը դիտավորյալ է այդպես նախագծված. այն պահում է մեքենան՝ առանց որևէ մեկի բռնակը պահելու։

### Ինչո՞ւ $\eta$-ն չի կարող գերազանցել 100%-ը

$\eta > 100\%$ ունեցող մեքենան ավելի շատ աշխատանք կտար, քան ստանում է։ Միացրեք նրա ելքը մուտքին, և այն հավերժ կաշխատեր՝ դեռ ավելորդ աշխատանք էլ տալով։ Նման մեքենա երբեք չի կառուցվել, և էներգիայի պահպանման օրենքը (այս բաժնի վերջում) ասում է, որ երբեք էլ չի կառուցվի։`,
    r`### Куда уходит потерянная работа

В примере урока груз $600$ Н втащили по пандусу длиной $4$ м на высоту $1{,}5$ м силой $300$ Н. Потерянная работа:
$$A_{\text{з}} - A_{\text{п}} = 1200 - 900 = 300\ \text{Дж}.$$
Она ушла на преодоление трения на пути $4$ м, значит, сила трения была $300 : 4 = 75$ Н. Потерянная работа не исчезает: пандус и груз немного нагреваются.

### Даже без трения блок что-то теряет

Подвижный блок весом $20$ Н поднимает груз $400$ Н. Даже без трения приходится поднимать и сам блок:
$$F = \frac{400 + 20}{2} = 210\ \text{Н},\qquad \eta = \frac{400 \cdot h}{210 \cdot 2h} = \frac{400}{420} \approx 95\%.$$
Более лёгкие блоки и гладкие оси приближают $\eta$ к $100\%$, но никогда не достигают его.

### КПД перемножаются

Когда энергия проходит через цепочку механизмов, каждый сохраняет лишь свою долю. Если электростанция превращает $40\%$ энергии топлива в электричество, линии передач доставляют $90\%$ от этого, а двигатель превращает $85\%$ полученного в работу, то
$$\eta = 0{,}40 \cdot 0{,}90 \cdot 0{,}85 \approx 0{,}31 = 31\%.$$
Длинные цепочки теряют много, даже если каждое звено выглядит хорошим.

### Полезный «плохой» механизм

Домкрат или винт с большим трением имеет низкий КПД, но то же трение не даёт грузу соскользнуть обратно, когда вы отпускаете рукоятку. У винтов такое **самоторможение** обычно появляется, когда КПД ниже примерно $50\%$. Автомобильный домкрат специально так устроен: он держит машину, хотя рукоятку никто не держит.

### Почему $\eta$ не может превысить 100%

Механизм с $\eta > 100\%$ отдавал бы больше работы, чем получает. Соедините его выход со входом, и он работал бы вечно, да ещё с запасом. Такой механизм никогда не был построен, и закон сохранения энергии (в конце этого раздела) говорит, что и не будет.`,
  ),

  energy: th(
    r`### Why $E_p = mgh$

To lift a body evenly by $h$ you do work $mgh$. When the body comes back down, it can give back exactly this work: turn a wheel, drive a pile, wind a clock. So the energy "stored" by lifting is
$$E_p = A = m g h.$$
Only **differences** of height matter. A book on a shelf has $10$ J relative to the floor and $40$ J relative to the street $6$ m below. Both are correct; choose the level that makes the problem easy and keep it.

### Deriving $E_k = \frac{mv^2}{2}$

Let a body fall from rest from height $h$. Its speed grows evenly: $v = g t$. On a speed–time graph that is a straight line, and the distance fallen is the **area** of the triangle under it:
$$h = \frac{1}{2} \cdot t \cdot v = \frac{1}{2} \cdot \frac{v}{g} \cdot v = \frac{v^2}{2g}.$$
The body lost potential energy $mgh$ and gained speed $v$. Substituting $h$:
$$mgh = mg \cdot \frac{v^2}{2g} = \frac{m v^2}{2}.$$
This is exactly the energy of motion it now has. Any body moving at speed $v$ could rise back to height $v^2/(2g)$, so it carries $\frac{mv^2}{2}$.

### Why speed is so dangerous on the road

To stop a car, the brakes must do work equal to its kinetic energy. With a braking force $F$ over a distance $s$:
$$F s = \frac{m v^2}{2} \;\Rightarrow\; s = \frac{m v^2}{2F}.$$
*Example.* A $1000$ kg car, braking force $7000$ N:

| Speed | Braking distance |
|---|---|
| $10$ m/s ($36$ km/h) | about $7$ m |
| $20$ m/s ($72$ km/h) | about $29$ m |
| $40$ m/s ($144$ km/h) | about $114$ m |

Twice the speed, **four** times the distance. Add the distance driven during the driver's reaction time, and the difference grows even more.

### Energy of a spring

The work to stretch a spring is $\frac{kx^2}{2}$ (see the lesson on work). A stretched spring can give that work back, so its potential energy is $E_p = \frac{k x^2}{2}$. A bow, a trampoline and a wind-up toy all store energy this way.`,
    r`### Ինչո՞ւ $E_p = mgh$

Մարմինը հավասարաչափ $h$-ով բարձրացնելու համար կատարում եք $mgh$ աշխատանք։ Երբ մարմինը հետ է իջնում, այն կարող է վերադարձնել ճիշտ այդ աշխատանքը. պտտել անիվը, խրել ցիցը, լարել ժամացույցը։ Ուրեմն բարձրացնելով «կուտակված» էներգիան՝
$$E_p = A = m g h$$
Կարևոր են միայն բարձրությունների **տարբերությունները**։ Դարակի գիրքն ունի $10$ Ջ հատակի նկատմամբ և $40$ Ջ՝ $6$ մ ներքևում գտնվող փողոցի նկատմամբ։ Երկուսն էլ ճիշտ են. ընտրեք այն մակարդակը, որը խնդիրը հեշտացնում է, և պահեք այն։

### $E_k = \frac{mv^2}{2}$ բանաձևի արտածումը

Մարմինը թող դադարի վիճակից ընկնի $h$ բարձրությունից։ Նրա արագությունը հավասարաչափ աճում է. $v = g t$։ Արագություն–ժամանակ գրաֆիկի վրա դա ուղիղ գիծ է, իսկ ընկնելու ճանապարհը դրա տակ գտնվող եռանկյան **մակերեսն** է.
$$h = \frac{1}{2} \cdot t \cdot v = \frac{1}{2} \cdot \frac{v}{g} \cdot v = \frac{v^2}{2g}$$
Մարմինը կորցրեց $mgh$ պոտենցիալ էներգիա և ձեռք բերեց $v$ արագություն։ Տեղադրելով $h$-ը՝
$$mgh = mg \cdot \frac{v^2}{2g} = \frac{m v^2}{2}$$
Սա հենց շարժման այն էներգիան է, որն այժմ ունի մարմինը։ $v$ արագությամբ շարժվող ցանկացած մարմին կարող էր հետ բարձրանալ $v^2/(2g)$ բարձրության, ուստի այն կրում է $\frac{mv^2}{2}$։

### Ինչո՞ւ է արագությունը ճանապարհին այդքան վտանգավոր

Մեքենան կանգնեցնելու համար արգելակները պետք է կատարեն նրա կինետիկ էներգիային հավասար աշխատանք։ $F$ արգելակման ուժի և $s$ ճանապարհի դեպքում՝
$$F s = \frac{m v^2}{2} \;\Rightarrow\; s = \frac{m v^2}{2F}$$
*Օրինակ։* $1000$ կգ մեքենա, արգելակման ուժը՝ $7000$ Ն.

| Արագություն | Արգելակման ճանապարհ |
|---|---|
| $10$ մ/վ ($36$ կմ/ժ) | մոտ $7$ մ |
| $20$ մ/վ ($72$ կմ/ժ) | մոտ $29$ մ |
| $40$ մ/վ ($144$ կմ/ժ) | մոտ $114$ մ |

Երկու անգամ մեծ արագություն՝ **չորս** անգամ երկար ճանապարհ։ Ավելացրեք վարորդի արձագանքման ժամանակ անցած ճանապարհը, և տարբերությունն էլ ավելի կմեծանա։

### Զսպանակի էներգիան

Զսպանակը ձգելու աշխատանքը $\frac{kx^2}{2}$ է (տե՛ս աշխատանքի դասը)։ Ձգված զսպանակը կարող է այդ աշխատանքը վերադարձնել, ուստի նրա պոտենցիալ էներգիան $E_p = \frac{k x^2}{2}$ է։ Աղեղը, բատուտը և լարովի խաղալիքը էներգիան կուտակում են հենց այսպես։`,
    r`### Почему $E_p = mgh$

Чтобы равномерно поднять тело на $h$, вы совершаете работу $mgh$. Опускаясь обратно, тело может отдать ровно эту работу: повернуть колесо, забить сваю, завести часы. Значит, энергия, «запасённая» подъёмом,
$$E_p = A = m g h.$$
Важны только **разности** высот. Книга на полке имеет $10$ Дж относительно пола и $40$ Дж относительно улицы, лежащей на $6$ м ниже. Оба ответа верны; выберите уровень, удобный для задачи, и не меняйте его.

### Вывод $E_k = \frac{mv^2}{2}$

Пусть тело падает без начальной скорости с высоты $h$. Его скорость растёт равномерно: $v = g t$. На графике скорости от времени это прямая, а пройденный путь равен **площади** треугольника под ней:
$$h = \frac{1}{2} \cdot t \cdot v = \frac{1}{2} \cdot \frac{v}{g} \cdot v = \frac{v^2}{2g}.$$
Тело потеряло потенциальную энергию $mgh$ и приобрело скорость $v$. Подставляя $h$:
$$mgh = mg \cdot \frac{v^2}{2g} = \frac{m v^2}{2}.$$
Это и есть энергия движения, которой оно теперь обладает. Любое тело со скоростью $v$ могло бы подняться обратно на высоту $v^2/(2g)$, значит, оно несёт $\frac{mv^2}{2}$.

### Почему скорость так опасна на дороге

Чтобы остановить машину, тормоза должны совершить работу, равную её кинетической энергии. При тормозящей силе $F$ на пути $s$:
$$F s = \frac{m v^2}{2} \;\Rightarrow\; s = \frac{m v^2}{2F}.$$
*Пример.* Машина массой $1000$ кг, тормозящая сила $7000$ Н:

| Скорость | Тормозной путь |
|---|---|
| $10$ м/с ($36$ км/ч) | около $7$ м |
| $20$ м/с ($72$ км/ч) | около $29$ м |
| $40$ м/с ($144$ км/ч) | около $114$ м |

Вдвое большая скорость — **вчетверо** больший путь. Добавьте путь, пройденный за время реакции водителя, и разница станет ещё больше.

### Энергия пружины

Работа по растяжению пружины равна $\frac{kx^2}{2}$ (см. урок о работе). Растянутая пружина может отдать эту работу обратно, поэтому её потенциальная энергия $E_p = \frac{k x^2}{2}$. Лук, батут и заводная игрушка запасают энергию именно так.`,
  ),

  "energy-conservation": th(
    r`### Speed at the bottom: $v = \sqrt{2gh}$

A body starts from rest at height $h$ and slides without friction to the bottom. All its potential energy becomes kinetic:
$$m g h = \frac{m v^2}{2} \;\Rightarrow\; v = \sqrt{2 g h}.$$
Two surprises hide in this formula. The mass **cancels**: a heavy and a light sledge reach the same speed. And the **shape** of the slope does not appear: a steep slide and a gentle one of the same height give the same final speed (the gentle one just takes longer).

| Height | Speed at the bottom ($g = 10$ N/kg) |
|---|---|
| $5$ m | $10$ m/s |
| $20$ m | $20$ m/s |
| $45$ m | $30$ m/s |

To double the speed you need **four** times the height.

### Galileo's pendulum with a nail

Galileo let a pendulum swing, then hammered a nail below the point of suspension. When the string caught on the nail, the ball swung up along a smaller circle, but it still rose to **the same height** it started from. The path changed; the energy did not. This was one of the first experiments that pointed to conservation of energy.

### Roller coasters

A roller coaster car is pulled up the first hill and then left to itself. With little friction, it can never rise above the height it started from. That is why the first hill is always the highest, and every later hill is a little lower to make up for the energy lost to friction and air.

### Where the "lost" energy goes: Joule's experiment

In the 1840s James Joule let falling weights turn a paddle wheel inside a tank of water. The paddles stirred the water, and its temperature rose very slightly. Joule found that the same amount of mechanical work always gave the same warming: about $4{.}2$ J warms $1$ g of water by $1\ ^\circ\text{C}$. Mechanical energy is not lost; it becomes internal energy. In his honour the unit of work and energy is named the joule.

### No perpetual motion

For centuries inventors designed wheels with rolling balls or swinging weights that were supposed to turn forever. All of them stop. In 1775 the Paris Academy of Sciences decided to stop examining proposals for perpetual motion machines. Conservation of energy explains why: friction takes a little energy at every turn, and no arrangement of parts can create more.`,
    r`### Արագությունը ներքևում. $v = \sqrt{2gh}$

Մարմինը դադարի վիճակից $h$ բարձրությունից առանց շփման սահում է ներքև։ Նրա ամբողջ պոտենցիալ էներգիան դառնում է կինետիկ.
$$m g h = \frac{m v^2}{2} \;\Rightarrow\; v = \sqrt{2 g h}$$
Այս բանաձևում երկու անակնկալ է թաքնված։ Զանգվածը **կրճատվում է**. ծանր և թեթև սահնակները հասնում են նույն արագության։ Եվ լանջի **ձևը** չի երևում. նույն բարձրությամբ զառիթափ և մեղմ սահարանները տալիս են նույն վերջնական արագությունը (մեղմն ուղղակի ավելի երկար է տևում)։

| Բարձրություն | Արագությունը ներքևում ($g = 10$ Ն/կգ) |
|---|---|
| $5$ մ | $10$ մ/վ |
| $20$ մ | $20$ մ/վ |
| $45$ մ | $30$ մ/վ |

Արագությունը կրկնապատկելու համար պետք է **չորս** անգամ մեծ բարձրություն։

### Գալիլեյի ճոճանակը մեխով

Գալիլեյը ճոճանակը ճոճեց, իսկ հետո կախման կետից ներքև մեխ խփեց։ Երբ թելը կպչում էր մեխին, գնդիկը բարձրանում էր ավելի փոքր շրջանագծով, բայց և այնպես հասնում էր **նույն բարձրությանը**, որտեղից սկսել էր։ Ճանապարհը փոխվեց, էներգիան՝ ոչ։ Սա առաջին փորձերից էր, որոնք մատնանշում էին էներգիայի պահպանումը։

### Ամերիկյան բլուրներ

Ամերիկյան բլուրների վագոնիկը քարշ են տալիս առաջին բլրի վրա, իսկ հետո թողնում են ինքն իրեն։ Փոքր շփման դեպքում այն երբեք չի կարող բարձրանալ սկզբնական բարձրությունից վեր։ Այդ պատճառով առաջին բլուրը միշտ ամենաբարձրն է, իսկ հաջորդ բլուրներից յուրաքանչյուրը մի փոքր ցածր է, որպեսզի փոխհատուցվի շփման և օդի պատճառով կորած էներգիան։

### Ու՞ր է գնում «կորած» էներգիան. Ջոուլի փորձը

1840-ական թվականներին Ջեյմս Ջոուլը թողեց, որ ընկնող բեռները պտտեն ջրով բաքի ներսում գտնվող թիականի անիվը։ Թիակները խառնում էին ջուրը, և նրա ջերմաստիճանը շատ քիչ բարձրանում էր։ Ջոուլը պարզեց, որ նույն մեխանիկական աշխատանքը միշտ նույն տաքացումն է տալիս. մոտ $4{,}2$ Ջ-ը $1$ գ ջուրը տաքացնում է $1\ ^\circ\text{C}$-ով։ Մեխանիկական էներգիան չի կորչում, այն դառնում է ներքին էներգիա։ Նրա պատվին աշխատանքի և էներգիայի միավորը կոչվում է ջոուլ։

### Հավերժական շարժիչ չկա

Դարեր շարունակ գյուտարարները նախագծում էին գլորվող գնդիկներով կամ ճոճվող ծանրոցներով անիվներ, որոնք իբր պետք է պտտվեին հավերժ։ Բոլորը կանգ են առնում։ 1775 թվականին Փարիզի գիտությունների ակադեմիան որոշեց այլևս չքննարկել հավերժական շարժիչների նախագծերը։ Էներգիայի պահպանումը բացատրում է պատճառը. շփումը յուրաքանչյուր պտույտի ժամանակ մի քիչ էներգիա է խլում, և մասերի ոչ մի դասավորություն չի կարող ավելին ստեղծել։`,
    r`### Скорость внизу: $v = \sqrt{2gh}$

Тело без начальной скорости соскальзывает без трения с высоты $h$. Вся его потенциальная энергия переходит в кинетическую:
$$m g h = \frac{m v^2}{2} \;\Rightarrow\; v = \sqrt{2 g h}.$$
В этой формуле спрятаны два сюрприза. Масса **сокращается**: тяжёлые и лёгкие санки разгоняются до одной скорости. И **форма** склона в неё не входит: крутая и пологая горки одинаковой высоты дают одну и ту же конечную скорость (по пологой просто дольше ехать).

| Высота | Скорость внизу ($g = 10$ Н/кг) |
|---|---|
| $5$ м | $10$ м/с |
| $20$ м | $20$ м/с |
| $45$ м | $30$ м/с |

Чтобы удвоить скорость, нужна **вчетверо** большая высота.

### Маятник Галилея с гвоздём

Галилей раскачивал маятник, а затем вбил гвоздь ниже точки подвеса. Когда нить цеплялась за гвоздь, шарик поднимался по меньшей окружности, но всё равно доходил до **той же высоты**, с которой начал. Путь изменился, энергия — нет. Это был один из первых опытов, указавших на сохранение энергии.

### Американские горки

Вагончик американских горок втягивают на первую горку, а потом отпускают. При малом трении он никогда не поднимется выше начальной высоты. Поэтому первая горка всегда самая высокая, а каждая следующая немного ниже, чтобы возместить энергию, потерянную на трение и сопротивление воздуха.

### Куда уходит «потерянная» энергия: опыт Джоуля

В 1840-х годах Джеймс Джоуль заставил падающие грузы вращать лопастное колесо в баке с водой. Лопасти перемешивали воду, и её температура чуть-чуть повышалась. Джоуль обнаружил, что одна и та же механическая работа всегда даёт одинаковое нагревание: около $4{,}2$ Дж нагревают $1$ г воды на $1\ ^\circ\text{C}$. Механическая энергия не теряется, она становится внутренней. В его честь единица работы и энергии называется джоулем.

### Вечного двигателя нет

Веками изобретатели придумывали колёса с катящимися шарами или качающимися грузами, которые якобы должны вращаться вечно. Все они останавливаются. В 1775 году Парижская академия наук решила больше не рассматривать проекты вечных двигателей. Закон сохранения энергии объясняет почему: трение на каждом обороте отнимает немного энергии, и никакое расположение деталей не может создать больше.`,
  ),
};
