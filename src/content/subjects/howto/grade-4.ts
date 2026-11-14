import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const campfire = howto({
  slug: "campfire",
  title: ["How to build and put out a campfire", "Ինչպես խարույկ վառել և հանգցնել", "Как развести и потушить костёр"],
  goals: {
    en: ["Name the three things every fire needs", "Build a fire with tinder, kindling and fuel, together with an adult", "Put a fire out completely: drown, stir, feel"],
    hy: ["Անվանել երեք բանը, որ պետք է ամեն կրակի", "Մեծահասակի հետ խարույկ սարքել կրակավառելիքով, մանրափայտով և վառելափայտով", "Կրակն ամբողջությամբ հանգցնել՝ ջրել, խառնել, ստուգել"],
    ru: ["Назвать три вещи, которые нужны любому огню", "Вместе со взрослым сложить костёр из растопки, хвороста и дров", "Полностью потушить костёр: залить, перемешать, проверить"],
  },
  body: {
    en: `Sitting round a campfire with your family is one of the best feelings there is: warm hands, crackling wood, potatoes baking in the ashes. People have been doing it for about a million years. But fire is also the most dangerous thing you will ever play with, so it has strict rules. This lesson is about doing it **together with an adult**, the right way.

~~~sim
safety level=adult
- An adult lights the fire and stays next to it the whole time.
- Only in a fire pit or a place where fires are allowed. Never in a forest in dry, windy weather.
- Water and a spade are ready **before** the first match.
- Never use petrol or other liquids to start or speed up a fire.
- Tie back long hair, and keep a big step away from the flames.
~~~

## The fire triangle

Every fire needs three things at once:

| | What it is | Take it away and... |
|---|---|---|
| **Heat** | a match, a spark, the Sun | cold water cools the fire |
| **Fuel** | wood, grass, paper | no more wood, the fire dies |
| **Air** | the oxygen in it | sand or a lid smothers it |

Take away **any one** of the three and the fire goes out. Lighting a fire and putting it out are both just playing with this triangle.

## Three kinds of wood

- **Tinder**: very thin, very dry things that catch from a single flame: dry grass, birch bark, wood shavings.
- **Kindling**: twigs from pencil-thick to finger-thick. They catch from the tinder.
- **Fuel**: thick sticks and logs, as thick as your wrist or more. They burn for a long time, but only when the kindling is already hot.

Wood must be **dry**: wet wood hisses and smokes. Collect fallen dead sticks, never break live branches.

## Step by step

~~~sim
mechanism campfire
~~~

**Don't use stones from a river** for the ring. They can hold water inside, and in the heat that water turns to steam and can make the stone crack or even burst.

> 💡 **Did you know?** In a cave in South Africa called Wonderwerk, scientists found burnt bones and ash about **a million years old**. They are some of the oldest signs of people using fire. Fire gave our ancestors warmth, light, cooked food and safety from animals.

~~~sim
sort
Is it tinder, kindling or fuel?
# Tinder | Kindling | Fuel
- Dry grass = 1
- Birch bark = 1
- Twigs as thick as a pencil = 2
- Sticks as thick as a finger = 2
- A log as thick as your arm = 3
- A thick branch = 3
> Small catches first: tinder lights the kindling, and hot kindling lights the fuel.
~~~

## Practice

1. Collect a handful of tinder, a bundle of kindling and a few pieces of fuel, and sort them on the ground in three rows. (You don't need to light them!)
2. Explain the fire triangle to someone at home, and show how a glass placed over a candle puts it out (with a grown-up).
3. On your next picnic, ask the adult to let you help: choose the place, build the teepee, and put the fire out at the end.`,
    hy: `Ընտանիքով խարույկի շուրջ նստելն ամենահաճելի զգացումներից է՝ տաք ձեռքեր, ճտճտացող փայտ, մոխրի մեջ թխվող կարտոֆիլ։ Մարդիկ դա անում են մոտ մեկ միլիոն տարի։ Բայց կրակը նաև ամենավտանգավոր բանն է, որի հետ երբևէ գործ կունենաս, այդ պատճառով այն խիստ կանոններ ունի։ Այս դասը սովորեցնում է, թե ինչպես դա անել **մեծահասակի հետ**՝ ճիշտ ձևով։

~~~sim
safety level=adult
- Կրակը վառում է մեծահասակը և ամբողջ ժամանակ մնում կողքին։
- Միայն խարույկի համար նախատեսված տեղում կամ այնտեղ, որտեղ կրակ վառելը թույլատրված է։ Երբեք անտառում՝ չոր և քամոտ եղանակին։
- Ջուրն ու բահը պատրաստ են **մինչև** առաջին լուցկին։
- Երբեք բենզին կամ այլ հեղուկներ մի՛ օգտագործիր կրակը վառելու կամ ուժեղացնելու համար։
- Երկար մազերը հավաքի՛ր և կրակից մի մեծ քայլ հեռու մնա։
~~~

## Կրակի եռանկյունին

Ամեն կրակի միաժամանակ երեք բան է պետք․

| | Ինչ է | Վերացրու այն, և… |
|---|---|---|
| **Ջերմություն** | լուցկի, կայծ, Արև | սառը ջուրը սառեցնում է կրակը |
| **Վառելիք** | փայտ, խոտ, թուղթ | փայտ չկա՝ կրակը մարում է |
| **Օդ** | նրա թթվածինը | ավազը կամ կափարիչը խեղդում են այն |

Վերացրու երեքից **ցանկացած մեկը**, և կրակը կհանգչի։ Կրակ վառելն էլ, հանգցնելն էլ այս եռանկյունու հետ խաղ են։

## Երեք տեսակի փայտ

- **Կրակավառելիք**․ շատ բարակ, շատ չոր բաներ, որոնք բռնկվում են մեկ բոցից՝ չոր խոտ, կեչու կեղև, տաշեղ։
- **Մանրափայտ**․ մատիտի հաստությունից մինչև մատի հաստությամբ ճյուղիկներ։ Դրանք բռնկվում են կրակավառելիքից։
- **Վառելափայտ**․ հաստ ճյուղեր և կոճղեր՝ դաստակիդ հաստությամբ կամ ավելի։ Դրանք երկար են այրվում, բայց միայն երբ մանրափայտն արդեն տաք է։

Փայտը պետք է **չոր** լինի․ թաց փայտը ֆշշում և ծխում է։ Հավաքի՛ր ընկած չոր ճյուղեր, երբեք մի՛ կոտրիր կենդանի ճյուղեր։

## Քայլ առ քայլ

~~~sim
mechanism campfire
~~~

**Շրջանի համար գետի քարեր մի՛ վերցրու։** Դրանց ներսում կարող է ջուր լինել, և տաքից այդ ջուրը գոլորշի է դառնում ու կարող է քարը ճաքեցնել կամ նույնիսկ պայթեցնել։

> 💡 **Հետաքրքիր է իմանալ։** Հարավային Աֆրիկայում՝ Վոնդերվերկ կոչվող քարանձավում, գիտնականները գտել են մոտ **մեկ միլիոն տարեկան** այրված ոսկորներ և մոխիր։ Դրանք մարդկանց կողմից կրակ օգտագործելու ամենահին նշաններից են։ Կրակը մեր նախնիներին տվեց ջերմություն, լույս, եփած սնունդ և պաշտպանություն գազաններից։

~~~sim
sort
Սա կրակավառելի՞ք է, մանրափա՞յտ, թե՞ վառելափայտ։
# Կրակավառելիք | Մանրափայտ | Վառելափայտ
- Չոր խոտ = 1
- Կեչու կեղև = 1
- Մատիտի հաստությամբ ճյուղիկներ = 2
- Մատի հաստությամբ ճյուղեր = 2
- Ձեռքիդ հաստությամբ կոճղ = 3
- Հաստ ճյուղ = 3
> Նախ փոքրն է բռնկվում․ կրակավառելիքը վառում է մանրափայտը, իսկ տաք մանրափայտը՝ վառելափայտը։
~~~

## Առաջադրանքներ

1. Հավաքի՛ր մի բուռ կրակավառելիք, մի խուրձ մանրափայտ և մի քանի կտոր վառելափայտ և գետնին դասավորի՛ր երեք շարքով (վառել պետք չէ)։
2. Տանը մեկին բացատրի՛ր կրակի եռանկյունին և մեծահասակի հետ ցույց տուր, թե ինչպես է մոմի վրա դրված բաժակը հանգցնում այն։
3. Հաջորդ պիկնիկին խնդրի՛ր մեծահասակին թույլ տալ, որ օգնես՝ տեղն ընտրել, վրանաձև դարսել փայտերը և վերջում հանգցնել կրակը։`,
    ru: `Сидеть всей семьёй у костра — одно из лучших ощущений: тёплые руки, треск дров, картошка в золе. Люди делают это около миллиона лет. Но огонь — самая опасная вещь, с которой тебе придётся иметь дело, поэтому у него строгие правила. Этот урок о том, как делать это **вместе со взрослым** и правильно.

~~~sim
safety level=adult
- Огонь разжигает взрослый и всё время остаётся рядом.
- Только в кострище или там, где костры разрешены. Никогда в лесу в сухую ветреную погоду.
- Вода и лопата готовы **до** первой спички.
- Никогда не используй бензин и другие жидкости, чтобы разжечь или раздуть огонь.
- Убери длинные волосы и держись на большой шаг от пламени.
~~~

## Огненный треугольник

Любому огню нужны сразу три вещи:

| | Что это | Убери это, и… |
|---|---|---|
| **Тепло** | спичка, искра, Солнце | холодная вода охлаждает огонь |
| **Топливо** | дерево, трава, бумага | нет дров — огонь гаснет |
| **Воздух** | кислород в нём | песок или крышка его душат |

Убери **любую одну** из трёх вещей, и огонь погаснет. И разжечь костёр, и потушить его — это игра с этим треугольником.

## Три вида дров

- **Растопка**: очень тонкие и очень сухие вещи, которые загораются от одного огонька: сухая трава, береста, стружка.
- **Хворост**: веточки толщиной от карандаша до пальца. Они загораются от растопки.
- **Дрова**: толстые палки и поленья, толщиной с запястье и больше. Они горят долго, но только когда хворост уже раскалён.

Дрова должны быть **сухими**: сырые шипят и дымят. Собирай упавшие сухие ветки, никогда не ломай живые.

## Шаг за шагом

~~~sim
mechanism campfire
~~~

**Не бери для круга камни из реки.** В них может быть вода, которая от жара превращается в пар, и камень может треснуть или даже лопнуть.

> 💡 **Интересно знать.** В пещере Вондерверк в Южной Африке учёные нашли обгоревшие кости и золу возрастом около **миллиона лет**. Это одни из самых древних следов того, что люди пользовались огнём. Огонь дал нашим предкам тепло, свет, приготовленную еду и защиту от зверей.

~~~sim
sort
Это растопка, хворост или дрова?
# Растопка | Хворост | Дрова
- Сухая трава = 1
- Береста = 1
- Веточки толщиной с карандаш = 2
- Ветки толщиной с палец = 2
- Полено толщиной с руку = 3
- Толстая ветка = 3
> Первым загорается мелкое: растопка поджигает хворост, а раскалённый хворост — дрова.
~~~

## Задания

1. Собери горсть растопки, пучок хвороста и несколько дров и разложи их на земле в три ряда. (Поджигать не надо!)
2. Объясни кому-нибудь дома огненный треугольник и вместе со взрослым покажи, как стакан, поставленный на свечу, её гасит.
3. На следующем пикнике попроси взрослого разрешить тебе помочь: выбрать место, сложить шалаш и потушить костёр в конце.`,
  },
  quiz: [
    q(t("Which three things does every fire need?", "Ո՞ր երեք բանն է պետք յուրաքանչյուր կրակի։", "Какие три вещи нужны любому огню?"), [t("Heat, fuel and air", "Ջերմություն, վառելիք և օդ", "Тепло, топливо и воздух"), t("Water, sand and wind", "Ջուր, ավազ և քամի", "Вода, песок и ветер"), t("Stones, sun and grass", "Քարեր, արև և խոտ", "Камни, солнце и трава")], 0),
    order(t("Put the pieces in the order they catch fire.", "Դասավորի՛ր փայտերն այն հերթականությամբ, որով բռնկվում են։", "Расставь в том порядке, в каком они загораются."), [
      t("Tinder", "Կրակավառելիք", "Растопка"),
      t("Kindling", "Մանրափայտ", "Хворост"),
      t("Fuel logs", "Վառելափայտ", "Дрова"),
    ]),
    q(t("When must the bucket of water be ready?", "Ե՞րբ պետք է ջրով դույլը պատրաստ լինի։", "Когда должно быть готово ведро с водой?"), [t("Before the fire is lit", "Մինչև կրակը վառելը", "До того, как зажгут огонь"), t("When the fire gets big", "Երբ կրակը մեծանա", "Когда огонь станет большим"), t("When everyone goes home", "Երբ բոլորը տուն գնան", "Когда все пойдут домой")], 0),
    order(t("Put the steps for putting out a fire in order.", "Դասավորի՛ր կրակը հանգցնելու քայլերը ճիշտ հերթականությամբ։", "Расставь шаги тушения костра по порядку."), [
      t("Pour water on the fire", "Ջուր լցնել կրակի վրա", "Залить огонь водой"),
      t("Stir the ashes", "Խառնել մոխիրը", "Перемешать золу"),
      t("Pour water again", "Նորից ջուր լցնել", "Снова залить водой"),
      t("Feel for heat with the back of your hand", "Ձեռքի մեջքով ստուգել տաքությունը", "Проверить тепло тыльной стороной ладони"),
    ]),
    q(t("Why not use stones from a river around a fire?", "Ինչո՞ւ խարույկի շուրջ գետի քարեր չդնել։", "Почему нельзя класть вокруг костра камни из реки?"), [t("They are too heavy", "Դրանք շատ ծանր են", "Они слишком тяжёлые"), t("Water inside can turn to steam and crack them", "Ներսի ջուրը կարող է գոլորշի դառնալ և ճաքեցնել դրանք", "Вода внутри может превратиться в пар и расколоть их"), t("They are too pretty", "Դրանք շատ գեղեցիկ են", "Они слишком красивые")], 1),
    match(t("Match how you put a fire out to the side of the triangle it removes.", "Միացրո՛ւ կրակը հանգցնելու եղանակն եռանկյունու այն կողմի հետ, որը վերացնում է։", "Соедини способ тушения со стороной треугольника, которую он убирает."), [
      [t("Pouring cold water", "Սառը ջուր լցնել", "Залить холодной водой"), t("Heat", "Ջերմություն", "Тепло")],
      [t("Covering with sand or a lid", "Ծածկել ավազով կամ կափարիչով", "Засыпать песком или накрыть крышкой"), t("Air", "Օդ", "Воздух")],
      [t("Not adding more wood", "Այլևս փայտ չավելացնել", "Не подкладывать дрова"), t("Fuel", "Վառելիք", "Топливо")],
    ]),
  ],
});

const knots = howto({
  slug: "useful-knots",
  title: ["How to tie two useful knots", "Ինչպես կապել երկու օգտակար հանգույց", "Как завязать два полезных узла"],
  goals: {
    en: ["Tie a reef knot and check that it is right", "Tie a figure-eight knot at the end of a rope", "Choose the right knot for a job, and know what knots are not for"],
    hy: ["Կապել ծովային հանգույց և ստուգել, որ ճիշտ է", "Պարանի ծայրին կապել «ութ» հանգույց", "Ընտրել ճիշտ հանգույցը գործի համար և իմանալ, թե ինչի համար չեն հանգույցները"],
    ru: ["Завязать прямой узел и проверить, что он правильный", "Завязать узел «восьмёрка» на конце верёвки", "Выбрать нужный узел для дела и знать, для чего узлы не годятся"],
  },
  body: {
    en: `Sailors, climbers, fishermen and scouts all have their favourite knots, and there are thousands of them. You need only a few to tie a parcel, fix a bandage, hang a hammock or stop a rope from slipping out of a hole. Here are two of the most useful ones.

~~~sim
safety level=care
- Never put a rope or a loop around anyone's neck, even as a joke.
- Don't tie up people or animals.
- These knots are not for climbing or hanging people: that is learned only with a trained instructor.
~~~

## The reef knot

The **reef knot** (also called a square knot) joins two ends of the same rope or of two ropes of the same thickness. Sailors used it to tie up rolled sails (the "reef"), and nurses use it to tie bandages because it lies flat. The secret is in six words: **right over left, left over right**.

~~~sim
mechanism reefknot
~~~

If you do "right over left" twice, you get a **granny knot**. It looks almost the same but it slips or jams. A real reef knot is neat and symmetrical: each end lies next to its own partner.

## The figure-eight knot

The **figure-eight** is a stopper knot. You tie it at the end of a rope so that it can't slip through a hole, a pulley or your hand.

1. Make a loop near the end of the rope.
2. Take the end round **behind** the standing part of the rope.
3. Push the end down **through** the loop from the front.
4. Pull tight. It looks like the number 8!

It is easy to untie even after it has been pulled hard, which is why sailors love it.

> 💡 **Did you know?** A ship's speed is measured in **knots** because of real knots! Sailors threw a wooden board on a long rope into the sea. The rope had knots tied at equal distances, and they counted how many knots ran out through their hands while a small sand glass emptied. One knot is about 1.85 km per hour.

~~~sim
sort
Which knot does the job?
# Reef knot | Figure-eight
- Tying a bandage = 1
- Tying up a parcel = 1
- Joining two ends of a scarf = 1
- Stopping a rope slipping through a pulley = 2
- A stopper at the end of a skipping rope = 2
- Keeping a cord in a bag's hole = 2
> A reef knot joins two ends; a figure-eight stops an end from slipping.
~~~

## Practice

1. Tie a reef knot with two different coloured shoelaces. Check: does each colour lie beside itself?
2. Tie a figure-eight at the end of a skipping rope. Untie it after a hard pull: is it easy?
3. Tie a parcel for someone with string and a reef knot.`,
    hy: `Նավաստիները, լեռնագնացները, ձկնորսներն ու սկաուտները բոլորն էլ ունեն իրենց սիրելի հանգույցները, և դրանք հազարավոր են։ Քեզ պետք են ընդամենը մի քանիսը՝ ծանրոց կապելու, վիրակապ ամրացնելու, ճոճաթոռ կախելու կամ պարանն անցքից դուրս սահելուց պահելու համար։ Ահա ամենաօգտակարներից երկուսը։

~~~sim
safety level=care
- Երբեք ոչ մեկի պարանոցին պարան կամ օղակ մի՛ գցիր, նույնիսկ կատակով։
- Մի՛ կապիր մարդկանց կամ կենդանիներին։
- Այս հանգույցները մագլցելու կամ մարդ կախելու համար չեն․ դա սովորում են միայն փորձառու հրահանգչի հետ։
~~~

## Ծովային հանգույցը

**Ծովային հանգույցը** (ուղիղ հանգույց) միացնում է նույն պարանի երկու ծայրերը կամ միևնույն հաստության երկու պարան։ Նավաստիները դրանով կապում էին ծալված առագաստները, իսկ բուժքույրերն օգտագործում են վիրակապի համար, որովհետև այն հարթ է նստում։ Գաղտնիքը վեց բառում է․ **աջը ձախի վրայով, ձախն աջի վրայով**։

~~~sim
mechanism reefknot
~~~

Եթե երկու անգամ անես «աջը ձախի վրայով», կստանաս **սխալ հանգույց**։ Այն գրեթե նույնն է թվում, բայց սահում կամ խճճվում է։ Իսկական ծովային հանգույցը կոկիկ է և համաչափ․ յուրաքանչյուր ծայր իր զույգի կողքին է։

## «Ութ» հանգույցը

**«Ութը»** կանգնեցնող հանգույց է։ Այն կապում են պարանի ծայրին, որ պարանը չսահի անցքից, ճախարակից կամ ձեռքիցդ։

1. Պարանի ծայրի մոտ օղակ սարքի՛ր։
2. Ծայրը տար պարանի **հետևով**։
3. Ծայրն առջևից խոթի՛ր օղակի **միջով**։
4. Ամուր քաշի՛ր։ Այն նման է 8 թվին։

Այն հեշտ է քանդվում նույնիսկ ուժեղ քաշելուց հետո, ահա թե ինչու է նավաստիների սիրելին։

> 💡 **Հետաքրքիր է իմանալ։** Նավի արագությունը չափում են **հանգույցներով**՝ իսկական հանգույցների պատճառով։ Նավաստիներն երկար պարանով փայտե տախտակ էին գցում ծովը։ Պարանի վրա հավասար հեռավորություններով հանգույցներ էին կապված, և նրանք հաշվում էին, թե քանի հանգույց է անցնում ձեռքերի միջով, մինչ փոքրիկ ավազի ժամացույցը դատարկվում էր։ Մեկ հանգույցը ժամում մոտ 1,85 կմ է։

~~~sim
sort
Ո՞ր հանգույցն է պետք այս գործի համար։
# Ծովային | «Ութ»
- Վիրակապ կապել = 1
- Ծանրոց կապել = 1
- Շարֆի երկու ծայրերը միացնել = 1
- Պահել, որ պարանը ճախարակից չսահի = 2
- Ցատկապարանի ծայրի կանգնեցնող հանգույց = 2
- Պահել քուղը պայուսակի անցքում = 2
> Ծովային հանգույցը միացնում է երկու ծայր, իսկ «ութը» թույլ չի տալիս, որ ծայրը սահի։
~~~

## Առաջադրանքներ

1. Տարբեր գույնի երկու կապերով ծովային հանգույց կապի՛ր։ Ստուգի՛ր․ յուրաքանչյուր գույն իր կողքի՞ն է։
2. Ցատկապարանի ծայրին «ութ» կապի՛ր։ Ուժեղ քաշելուց հետո քանդի՛ր այն․ հե՞շտ է։
3. Մեկի համար ծանրոց կապի՛ր թելով և ծովային հանգույցով։`,
    ru: `У моряков, альпинистов, рыбаков и скаутов есть свои любимые узлы, и их тысячи. Тебе хватит нескольких, чтобы перевязать посылку, закрепить бинт, повесить гамак или не дать верёвке выскользнуть из дырки. Вот два самых полезных.

~~~sim
safety level=care
- Никогда не набрасывай верёвку или петлю никому на шею, даже в шутку.
- Не связывай людей и животных.
- Эти узлы не для лазания и не для подвешивания людей: этому учатся только с опытным инструктором.
~~~

## Прямой узел

**Прямой узел** (его ещё называют рифовым) соединяет два конца одной верёвки или две верёвки одной толщины. Моряки завязывали им свёрнутые паруса, а медсёстры — бинты, потому что он лежит плоско. Секрет в шести словах: **правый на левый, левый на правый**.

~~~sim
mechanism reefknot
~~~

Если дважды сделать «правый на левый», получится **бабий узел**. Он выглядит почти так же, но скользит или затягивается намертво. Настоящий прямой узел аккуратный и симметричный: каждый конец лежит рядом со своим партнёром.

## Узел «восьмёрка»

**Восьмёрка** — стопорный узел. Его вяжут на конце верёвки, чтобы она не проскочила в дырку, блок или из рук.

1. Сделай петлю у конца верёвки.
2. Проведи конец **за** основной частью верёвки.
3. Просунь конец спереди **сквозь** петлю.
4. Затяни. Похоже на цифру 8!

Его легко развязать даже после сильного рывка, поэтому моряки его очень любят.

> 💡 **Интересно знать.** Скорость судна измеряют в **узлах** из-за настоящих узлов! Моряки бросали в море деревянную дощечку на длинной верёвке. На верёвке на равных расстояниях были завязаны узлы, и моряки считали, сколько узлов пробежало через их руки, пока высыпались маленькие песочные часы. Один узел — это около 1,85 км в час.

~~~sim
sort
Какой узел подходит для дела?
# Прямой | Восьмёрка
- Завязать бинт = 1
- Перевязать посылку = 1
- Связать два конца шарфа = 1
- Не дать верёвке выскочить из блока = 2
- Стопор на конце скакалки = 2
- Удержать шнурок в дырочке сумки = 2
> Прямой узел соединяет два конца, а восьмёрка не даёт концу выскользнуть.
~~~

## Задания

1. Завяжи прямой узел двумя шнурками разного цвета. Проверь: каждый цвет лежит рядом с самим собой?
2. Завяжи восьмёрку на конце скакалки. Развяжи после сильного рывка: легко?
3. Перевяжи кому-нибудь посылку бечёвкой и прямым узлом.`,
  },
  quiz: [
    q(t("What are the six magic words of the reef knot?", "Որո՞նք են ծովային հանգույցի վեց կախարդական բառերը։", "Какие шесть волшебных слов у прямого узла?"), [t("Right over left, left over right", "Աջը ձախի վրայով, ձախն աջի վրայով", "Правый на левый, левый на правый"), t("Right over left, right over left", "Աջը ձախի վրայով, աջը ձախի վրայով", "Правый на левый, правый на левый"), t("Under, under, over, over", "Տակով, տակով, վրայով, վրայով", "Под, под, над, над")], 0),
    q(t("You did \"right over left\" twice. What did you tie?", "Երկու անգամ արեցիր «աջը ձախի վրայով»։ Ի՞նչ կապեցիր։", "Ты дважды сделал «правый на левый». Что получилось?"), [t("A perfect reef knot", "Կատարյալ ծովային հանգույց", "Идеальный прямой узел"), t("A granny knot", "Սխալ հանգույց", "Бабий узел"), t("A figure-eight", "«Ութ» հանգույց", "Восьмёрка")], 1),
    q(t("What is the figure-eight knot for?", "Ինչի՞ համար է «ութ» հանգույցը։", "Для чего узел «восьмёрка»?"), [t("Joining two ropes", "Երկու պարան միացնելու", "Соединять две верёвки"), t("Stopping a rope end slipping through a hole", "Որ պարանի ծայրն անցքից չսահի", "Чтобы конец верёвки не проскочил в дырку"), t("Tying shoes", "Կոշիկ կապելու", "Завязывать обувь")], 1),
    order(t("Put the figure-eight steps in order.", "Դասավորի՛ր «ութ» հանգույցի քայլերը ճիշտ հերթականությամբ։", "Расставь шаги восьмёрки по порядку."), [
      t("Make a loop near the end", "Ծայրի մոտ օղակ սարքել", "Сделать петлю у конца"),
      t("Take the end behind the rope", "Ծայրը տանել պարանի հետևով", "Провести конец за верёвкой"),
      t("Push the end through the loop", "Ծայրը խոթել օղակի միջով", "Просунуть конец сквозь петлю"),
      t("Pull tight", "Ամուր քաշել", "Затянуть"),
    ]),
    q(t("Why do nurses like the reef knot for bandages?", "Ինչո՞ւ են բուժքույրերը սիրում ծովային հանգույցը վիրակապերի համար։", "Почему медсёстры любят прямой узел для бинтов?"), [t("It lies flat", "Այն հարթ է նստում", "Он лежит плоско"), t("It is colourful", "Այն գունավոր է", "Он разноцветный"), t("It can never be untied", "Այն երբեք չի քանդվում", "Его невозможно развязать")], 0),
    q(t("What is a knot as a unit of speed?", "Ի՞նչ է հանգույցը՝ որպես արագության միավոր։", "Что такое узел как единица скорости?"), [t("About 1.85 km per hour", "Ժամում մոտ 1,85 կմ", "Около 1,85 км в час"), t("100 km per hour", "Ժամում 100 կմ", "100 км в час"), t("One metre per day", "Օրական մեկ մետր", "Один метр в сутки")], 0),
  ],
});

const needleCompass = howto({
  slug: "needle-compass",
  title: ["How to make a compass from a needle", "Ինչպես կողմնացույց պատրաստել ասեղից", "Как сделать компас из иголки"],
  goals: {
    en: ["Magnetise a needle and float it to make a compass", "Explain why a compass needle points north", "Keep a homemade compass working: away from metal and phones"],
    hy: ["Մագնիսացնել ասեղը և լողացնելով կողմնացույց պատրաստել", "Բացատրել, թե ինչու է կողմնացույցի սլաքը ցույց տալիս հյուսիսը", "Տնական կողմնացույցը պահել մետաղից և հեռախոսներից հեռու"],
    ru: ["Намагнитить иголку и сделать плавающий компас", "Объяснить, почему стрелка компаса показывает на север", "Знать, что мешает самодельному компасу: металл и телефоны"],
  },
  body: {
    en: `A compass looks like a clever machine, but inside it is just a small magnet that is free to turn. You can make one in ten minutes from a sewing needle, a fridge magnet and a bowl of water, and it will work just like the compasses explorers used.

~~~sim
safety level=ask
- Needles are sharp: hold them by the middle and put them back in a pincushion after.
- Small, strong magnets must never go in the mouth: if two are swallowed they can stick together inside the body.
- Ask before you borrow a needle and a magnet.
~~~

## What you need

- a sewing needle (steel);
- a magnet: a fridge magnet works, a stronger one works faster;
- a slice of cork, a bottle cap or a flat leaf;
- a bowl of water.

## Step by step

~~~sim
mechanism needlecompass
~~~

## Why it works

The **Earth is a giant magnet**. Deep inside, its core of hot liquid iron is always moving, and this makes a magnetic field around the whole planet. Any small magnet that can turn freely lines up with this field, pointing north and south. Stroking the needle with a magnet lines up billions of tiny magnetic bits inside the steel so they all point the same way, and the needle becomes a magnet itself.

The water and the cork are there so the needle can turn with almost no friction. Keep **iron, steel and phones** away: they have their own magnetism and will pull the needle the wrong way.

The north end of a compass points to the Earth's **magnetic north pole**, which is in the Arctic, near northern Canada, and not exactly at the real North Pole. It even moves a little every year!

> 💡 **Did you know?** More than 2,000 years ago in China, people made a spoon from **lodestone**, a natural magnetic rock. Placed on a smooth bronze plate, the spoon turned until its handle pointed south. At first it was used for fortune telling. Much later, around a thousand years ago, Chinese sailors began using magnetic needles to find their way at sea.

~~~sim
sort
Will it help your compass or spoil it?
# Helps | Spoils it
- Still water in a bowl = 1
- A strongly magnetised needle = 1
- A phone right next to the bowl = 2
- A metal spoon in the bowl = 2
- A light slice of cork = 1
- A windy table outside = 2
> A compass needs a free, light magnet and no other magnets or iron nearby.
~~~

## Practice

1. Make the compass. Check which end points north with the Sun or with a compass app.
2. Bring a fridge magnet close to the bowl. What does the needle do? Why?
3. Stroke the needle the other way. Does the north end change?`,
    hy: `Կողմնացույցը խելացի սարք է թվում, բայց ներսում այն ընդամենը փոքր մագնիս է, որը կարող է ազատ պտտվել։ Կարող ես տասը րոպեում այն պատրաստել կարի ասեղից, սառնարանի մագնիսից և ջրով ամանից, և այն կաշխատի ճիշտ այնպես, ինչպես հետազոտողների կողմնացույցները։

~~~sim
safety level=ask
- Ասեղները սուր են․ բռնի՛ր դրանք մեջտեղից և հետո նորից խրի՛ր ասեղնոցի մեջ։
- Փոքր, ուժեղ մագնիսներն երբեք չպետք է բերանդ տանես․ եթե երկուսը կուլ տրվեն, մարմնի ներսում կարող են իրար կպչել։
- Հարցրու, նախքան ասեղ և մագնիս վերցնելը։
~~~

## Ինչ է պետք

- կարի ասեղ (պողպատե),
- մագնիս․ սառնարանի մագնիսն էլ կաշխատի, ավելի ուժեղը՝ ավելի արագ,
- խցանի շերտ, շշի կափարիչ կամ հարթ տերև,
- ջրով աման։

## Քայլ առ քայլ

~~~sim
mechanism needlecompass
~~~

## Ինչու է աշխատում

**Երկիրը հսկայական մագնիս է**։ Խորքում նրա տաք, հեղուկ երկաթե միջուկը մշտապես շարժվում է, և դա մագնիսական դաշտ է ստեղծում ամբողջ մոլորակի շուրջը։ Ցանկացած փոքր մագնիս, որը կարող է ազատ պտտվել, դասավորվում է այդ դաշտի երկայնքով՝ ցույց տալով հյուսիսն ու հարավը։ Ասեղը մագնիսով շոյելիս պողպատի ներսի միլիարդավոր փոքրիկ մագնիսական մասնիկները դասավորվում են նույն ուղղությամբ, և ասեղն ինքն է մագնիս դառնում։

Ջուրն ու խցանը պետք են, որ ասեղը պտտվի գրեթե առանց շփման։ **Երկաթը, պողպատը և հեռախոսները** հեռու պահի՛ր․ դրանք ունեն իրենց մագնիսականությունը և սլաքը սխալ կողմ կքաշեն։

Կողմնացույցի հյուսիսային ծայրը ցույց է տալիս Երկրի **մագնիսական հյուսիսային բևեռը**, որը գտնվում է Արկտիկայում՝ Կանադայի հյուսիսի մոտ, և ոչ թե ճիշտ իսկական Հյուսիսային բևեռում։ Այն նույնիսկ ամեն տարի մի քիչ տեղաշարժվում է։

> 💡 **Հետաքրքիր է իմանալ։** Ավելի քան 2000 տարի առաջ Չինաստանում մարդիկ գդալ էին պատրաստում **մագնիսաքարից**՝ բնական մագնիսական ապարից։ Հարթ բրոնզե սալիկի վրա դրված գդալը պտտվում էր, մինչև բռնակը ցույց տար հարավը։ Սկզբում այն գուշակության համար էր։ Շատ ավելի ուշ՝ մոտ հազար տարի առաջ, չինացի նավաստիները սկսեցին մագնիսական ասեղներով ճանապարհ գտնել ծովում։

~~~sim
sort
Սա կօգնի՞ կողմնացույցիդ, թե՞ կփչացնի։
# Օգնում է | Փչացնում է
- Ամանի մեջ հանգիստ ջուր = 1
- Լավ մագնիսացված ասեղ = 1
- Ամանի հենց կողքին դրված հեռախոս = 2
- Մետաղե գդալ ամանի մեջ = 2
- Խցանի թեթև շերտ = 1
- Քամոտ սեղան դրսում = 2
> Կողմնացույցին պետք է ազատ, թեթև մագնիս, և կողքին ոչ մի ուրիշ մագնիս կամ երկաթ։
~~~

## Առաջադրանքներ

1. Պատրաստի՛ր կողմնացույցը։ Արևով կամ հեռախոսի կողմնացույցով ստուգի՛ր, թե որ ծայրն է ցույց տալիս հյուսիսը։
2. Սառնարանի մագնիսը մոտեցրու ամանին։ Ի՞նչ է անում ասեղը։ Ինչո՞ւ։
3. Ասեղը շոյի՛ր հակառակ ուղղությամբ։ Հյուսիսային ծայրը փոխվո՞ւմ է։`,
    ru: `Компас кажется хитрым прибором, но внутри это просто маленький магнит, который может свободно поворачиваться. Его можно сделать за десять минут из швейной иголки, магнита с холодильника и миски с водой, и он будет работать так же, как компасы путешественников.

~~~sim
safety level=ask
- Иголки острые: держи их за середину и потом верни в игольницу.
- Маленькие сильные магниты нельзя брать в рот: если проглотить два, они могут слипнуться внутри тела.
- Спроси разрешения, прежде чем взять иголку и магнит.
~~~

## Что понадобится

- швейная иголка (стальная);
- магнит: подойдёт магнит с холодильника, а сильный сработает быстрее;
- кружок пробки, крышка от бутылки или плоский листик;
- миска с водой.

## Шаг за шагом

~~~sim
mechanism needlecompass
~~~

## Почему это работает

**Земля — огромный магнит**. Глубоко внутри её ядро из горячего жидкого железа постоянно движется, и это создаёт магнитное поле вокруг всей планеты. Любой маленький магнит, который может свободно поворачиваться, выстраивается вдоль этого поля и показывает на север и юг. Когда ты гладишь иголку магнитом, миллиарды крошечных магнитных частичек в стали выстраиваются в одну сторону, и иголка сама становится магнитом.

Вода и пробка нужны, чтобы иголка поворачивалась почти без трения. Держи подальше **железо, сталь и телефоны**: у них свой магнетизм, и они потянут стрелку не туда.

Северный конец компаса показывает на **северный магнитный полюс** Земли, который находится в Арктике, недалеко от севера Канады, а не точно на настоящем Северном полюсе. Он даже немного сдвигается каждый год!

> 💡 **Интересно знать.** Больше 2000 лет назад в Китае делали ложку из **магнетита** — природного магнитного камня. Положенная на гладкую бронзовую пластину, ложка поворачивалась, пока её ручка не указывала на юг. Сначала её использовали для гаданий. Гораздо позже, около тысячи лет назад, китайские моряки стали находить путь в море с помощью магнитных иголок.

~~~sim
sort
Это поможет компасу или испортит его?
# Помогает | Портит
- Спокойная вода в миске = 1
- Хорошо намагниченная иголка = 1
- Телефон прямо рядом с миской = 2
- Металлическая ложка в миске = 2
- Лёгкий кружок пробки = 1
- Ветреный стол на улице = 2
> Компасу нужен свободный лёгкий магнит и никаких других магнитов и железа рядом.
~~~

## Задания

1. Сделай компас. Проверь по Солнцу или по компасу в телефоне, какой конец показывает на север.
2. Поднеси к миске магнит с холодильника. Что делает иголка? Почему?
3. Проведи магнитом по иголке в другую сторону. Поменялся ли северный конец?`,
  },
  quiz: [
    q(t("What is inside every compass?", "Ի՞նչ կա յուրաքանչյուր կողմնացույցի ներսում։", "Что внутри любого компаса?"), [t("A battery", "Մարտկոց", "Батарейка"), t("A small magnet that can turn", "Փոքր մագնիս, որը կարող է պտտվել", "Маленький магнит, который может поворачиваться"), t("A tiny map", "Փոքրիկ քարտեզ", "Крошечная карта")], 1),
    q(t("How do you magnetise the needle?", "Ինչպե՞ս ես մագնիսացնում ասեղը։", "Как намагнитить иголку?"), [t("Stroke it with a magnet many times in one direction", "Մագնիսով շատ անգամ շոյում եմ նույն ուղղությամբ", "Много раз провести по ней магнитом в одну сторону"), t("Rub it back and forth on your jumper", "Հետ ու առաջ շփում եմ սվիտերիս", "Потереть туда-сюда о свитер"), t("Put it in the fridge", "Դնում եմ սառնարան", "Положить в холодильник")], 0),
    q(t("Why does the needle point north and south?", "Ինչո՞ւ է ասեղը ցույց տալիս հյուսիսն ու հարավը։", "Почему иголка показывает на север и юг?"), [t("The Earth is a giant magnet", "Երկիրը հսկայական մագնիս է", "Земля — огромный магнит"), t("The water flows north", "Ջուրը հոսում է դեպի հյուսիս", "Вода течёт на север"), t("The Sun pulls it", "Արևն է այն քաշում", "Её тянет Солнце")], 0),
    order(t("Put the steps in order.", "Դասավորի՛ր քայլերը ճիշտ հերթականությամբ։", "Расставь шаги по порядку."), [
      t("Stroke the needle with a magnet", "Ասեղը շոյել մագնիսով", "Провести по иголке магнитом"),
      t("Lay it on a slice of cork", "Դնել խցանի շերտի վրա", "Положить на кружок пробки"),
      t("Float it on water", "Լողացնել ջրի վրա", "Пустить плавать в воде"),
      t("Wait for it to turn north–south", "Սպասել, մինչև պտտվի հյուսիս-հարավ", "Подождать, пока она повернётся на север–юг"),
    ]),
    q(t("Your needle points the wrong way. What could be the reason?", "Ասեղդ սխալ կողմ է ցույց տալիս։ Ո՞րը կարող է պատճառը լինել։", "Иголка показывает не туда. В чём может быть причина?"), [t("A phone is lying next to the bowl", "Ամանի կողքին հեռախոս է դրված", "Рядом с миской лежит телефон"), t("The water is too clean", "Ջուրը շատ մաքուր է", "Вода слишком чистая"), t("It is Tuesday", "Երեքշաբթի է", "Сегодня вторник")], 0),
    match(t("Match the word to its meaning.", "Միացրո՛ւ բառն իր իմաստի հետ։", "Соедини слово с его значением."), [
      [t("Lodestone", "Մագնիսաքար", "Магнетит"), t("A natural magnetic rock", "Բնական մագնիսական ապար", "Природный магнитный камень")],
      [t("Magnetic north pole", "Մագնիսական հյուսիսային բևեռ", "Северный магнитный полюс"), t("The place a compass points to", "Տեղը, որ ցույց է տալիս կողմնացույցը", "Место, куда показывает компас")],
      [t("Cork", "Խցան", "Пробка"), t("Lets the needle float and turn", "Թույլ է տալիս ասեղին լողալ և պտտվել", "Даёт иголке плавать и поворачиваться")],
    ]),
  ],
});

export const howtoGrade4 = howtoCourse(
  4,
  {
    title: ["Fire, rope and magnets", "Կրակ, պարան և մագնիսներ", "Огонь, верёвка и магниты"],
    summary: [
      "Build and put out a campfire with an adult, tie two useful knots, and make a compass from a needle.",
      "Մեծահասակի հետ խարույկ վառել և հանգցնել, երկու օգտակար հանգույց կապել և ասեղից կողմնացույց պատրաստել։",
      "Развести и потушить костёр со взрослым, завязать два полезных узла и сделать компас из иголки.",
    ],
  },
  [campfire, knots, needleCompass],
);
