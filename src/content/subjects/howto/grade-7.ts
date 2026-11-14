import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const fireSteel = howto({
  slug: "fire-without-matches",
  title: ["How to light a fire without matches", "Ինչպես կրակ վառել առանց լուցկու", "Как развести огонь без спичек"],
  goals: {
    en: ["Explain how sparks, sunlight and friction can light tinder", "Light a tinder nest with a ferro rod, together with an adult", "Choose tinder that catches a spark"],
    hy: ["Բացատրել, թե ինչպես կարող են կայծերը, արևի լույսը և շփումը վառել կրակավառելիքը", "Մեծահասակի հետ ֆեռո ձողով վառել կրակավառելիքի բույնը", "Ընտրել կայծից բռնկվող կրակավառելիք"],
    ru: ["Объяснить, как искры, солнечный свет и трение поджигают растопку", "Вместе со взрослым разжечь гнездо из растопки огнивом", "Выбрать растопку, которая загорается от искры"],
  },
  body: {
    en: `Matches were invented only about 200 years ago. For hundreds of thousands of years before that, people made fire from stones, sticks and sunlight, and hikers still carry those tools today, because matches get wet and lighters run out. This lesson shows the most reliable way: the **ferro rod**.

~~~sim
safety level=adult
- Only with an adult, only where fires are allowed, and with water ready, exactly as in the campfire lesson.
- Sparks fly further than you think: clear away dry grass in a big circle.
- Never practise indoors, near tents or in dry, windy weather.
- Never use a magnifying glass to burn insects, plants or anything except tinder in a fire pit.
~~~

## Three ways to make fire without matches

| Method | How it works |
|---|---|
| **Sparks** (ferro rod, flint and steel) | scraping shaves off tiny bits of metal so hot that they burn in the air |
| **Sunlight** (lens) | a magnifying glass gathers sunlight into one tiny, very hot dot |
| **Friction** (bow drill) | a spinning stick rubs on a board until the wood dust starts to glow |

A **ferro rod** is a rod of a special metal mix. When you scrape it hard, it throws a shower of very hot sparks. It works even when wet, in the wind and high in the mountains.

## Step by step

~~~sim
mechanism firesteel
~~~

**The secret is the tinder**, not the sparks. A spark is tiny and lasts less than a second, so it needs something very fine, very dry and fluffy to land on. Cotton wool, dry grass rubbed between your palms and thin birch bark shavings are all great. If nothing catches after 10 strikes, your tinder is too thick or too damp.

> 💡 **Did you know?** Ötzi, a man who lived about 5,300 years ago and whose body was found frozen in the Alps in 1991, carried a fire-making kit in a small pouch: a piece of tinder fungus and flint tools. People in the Stone Age struck sparks from flint and certain stones and caught them on that fungus.

~~~sim
sort
Will it catch a spark?
# Catches a spark | Won't catch
- Fluffy cotton wool = 1
- Dry grass rubbed into fibres = 1
- Thin birch bark shavings = 1
- Green leaves = 2
- Wet moss = 2
- A stick as thick as your thumb = 2
> A spark needs tinder that is very fine, very dry and full of air.
~~~

## Practice

1. Collect five kinds of possible tinder on a walk and sort them from the finest to the thickest.
2. With an adult and a ferro rod, see how many strikes each kind of tinder needs to catch.
3. Find out how a bow drill works and draw its parts: bow, spindle, fireboard and handhold.`,
    hy: `Լուցկին հորինվել է ընդամենը մոտ 200 տարի առաջ։ Դրանից առաջ հարյուր հազարավոր տարիներ մարդիկ կրակ էին ստանում քարերից, փայտերից և արևի լույսից, և արշավականները մինչև այսօր իրենց հետ վերցնում են այդ գործիքները, որովհետև լուցկին թրջվում է, իսկ կրակայրիչը վերջանում է։ Այս դասը ցույց է տալիս ամենավստահելի եղանակը՝ **ֆեռո ձողը**։

~~~sim
safety level=adult
- Միայն մեծահասակի հետ, միայն այնտեղ, որտեղ կրակ վառելը թույլատրված է, և ջուրը պատրաստ, ճիշտ ինչպես խարույկի դասում։
- Կայծերն ավելի հեռու են թռչում, քան կարծում ես․ չոր խոտը մաքրի՛ր մեծ շրջանով։
- Երբեք մի՛ վարժվիր տանը, վրանների մոտ կամ չոր, քամոտ եղանակին։
- Երբեք խոշորացույցով մի՛ այրիր միջատներ, բույսեր կամ որևէ այլ բան, բացի կրակավառելիքից՝ խարույկի տեղում։
~~~

## Առանց լուցկու կրակ վառելու երեք եղանակ

| Եղանակ | Ինչպես է աշխատում |
|---|---|
| **Կայծեր** (ֆեռո ձող, կայծքար և պողպատ) | քերելիս պոկվում են մետաղի մանրագույն կտորներ, որոնք այնքան տաք են, որ օդում այրվում են |
| **Արևի լույս** (ոսպնյակ) | խոշորացույցն արևի լույսը հավաքում է մի փոքրիկ, շատ տաք կետում |
| **Շփում** (աղեղնավոր շաղափ) | պտտվող փայտը շփվում է տախտակին, մինչև փայտի փոշին սկսում է շիկանալ |

**Ֆեռո ձողը** հատուկ մետաղների խառնուրդից ձող է։ Երբ ուժեղ քերում ես այն, շատ տաք կայծերի հեղեղ է արձակում։ Այն աշխատում է նույնիսկ թաց վիճակում, քամուն և բարձր լեռներում։

## Քայլ առ քայլ

~~~sim
mechanism firesteel
~~~

**Գաղտնիքը կրակավառելիքի մեջ է**, ոչ թե կայծերի։ Կայծը փոքրիկ է և տևում է մեկ վայրկյանից էլ քիչ, ուստի նրան պետք է շատ բարակ, շատ չոր և փափուկ բան, որի վրա ընկնի։ Բամբակը, ափերի միջև տրորված չոր խոտը և կեչու կեղևի բարակ տաշեղները հիանալի են։ Եթե 10 հարվածից հետո ոչինչ չի բռնկվում, կրակավառելիքդ չափազանց հաստ է կամ խոնավ։

> 💡 **Հետաքրքիր է իմանալ։** Էցին՝ մոտ 5300 տարի առաջ ապրած մի մարդ, որի մարմինը 1991 թվականին գտել են Ալպերում սառած վիճակում, փոքրիկ քսակում կրակ վառելու պարագաներ էր կրում՝ մի կտոր աբեթասունկ և կայծքարե գործիքներ։ Քարի դարի մարդիկ կայծքարից և որոշ քարերից կայծ էին ստանում և այն որսում այդ սնկի վրա։

~~~sim
sort
Կայծից կբռնկվի՞։
# Բռնկվում է | Չի բռնկվում
- Փափուկ բամբակ = 1
- Թելերի վերածված չոր խոտ = 1
- Կեչու կեղևի բարակ տաշեղներ = 1
- Կանաչ տերևներ = 2
- Թաց մամուռ = 2
- Բթամատի հաստությամբ փայտ = 2
> Կայծին պետք է շատ բարակ, շատ չոր և օդով լի կրակավառելիք։
~~~

## Առաջադրանքներ

1. Զբոսանքի ժամանակ հավաքի՛ր հինգ տեսակի հնարավոր կրակավառելիք և դասավորի՛ր ամենաբարակից մինչև ամենահաստը։
2. Մեծահասակի հետ ֆեռո ձողով ստուգի՛ր, թե յուրաքանչյուր տեսակին քանի հարված է պետք բռնկվելու համար։
3. Պարզի՛ր, թե ինչպես է աշխատում աղեղնավոր շաղափը, և նկարի՛ր նրա մասերը՝ աղեղ, առանցք, հիմքի տախտակ և բռնակ։`,
    ru: `Спички изобрели всего около 200 лет назад. До этого сотни тысяч лет люди добывали огонь камнями, палками и солнечным светом, и туристы до сих пор носят такие инструменты, потому что спички намокают, а зажигалки кончаются. Этот урок о самом надёжном способе — **огниве** (ферроцериевом стержне).

~~~sim
safety level=adult
- Только со взрослым, только там, где можно жечь костры, и с водой наготове — как в уроке про костёр.
- Искры летят дальше, чем кажется: расчисти от сухой травы большой круг.
- Никогда не тренируйся в помещении, рядом с палатками или в сухую ветреную погоду.
- Никогда не используй лупу, чтобы жечь насекомых, растения или что-то кроме растопки в кострище.
~~~

## Три способа добыть огонь без спичек

| Способ | Как работает |
|---|---|
| **Искры** (огниво, кремень и кресало) | при ударе с металла срезаются крошечные частицы, такие горячие, что сгорают в воздухе |
| **Солнце** (линза) | лупа собирает солнечный свет в одну крошечную очень горячую точку |
| **Трение** (лучковое сверло) | вращающаяся палочка трётся о дощечку, пока древесная пыль не начнёт тлеть |

**Огниво** — стержень из особого сплава металлов. Если сильно провести по нему, он выбрасывает сноп очень горячих искр. Работает даже мокрым, на ветру и высоко в горах.

## Шаг за шагом

~~~sim
mechanism firesteel
~~~

**Секрет — в растопке**, а не в искрах. Искра крошечная и живёт меньше секунды, поэтому ей нужно что-то очень тонкое, очень сухое и пушистое. Отлично подходят вата, сухая трава, растёртая между ладонями, и тонкая стружка бересты. Если после 10 ударов ничего не загорается, растопка слишком толстая или влажная.

> 💡 **Интересно знать.** Эци — человек, живший около 5300 лет назад, чьё тело нашли замёрзшим в Альпах в 1991 году, — носил в маленьком мешочке набор для добычи огня: кусок трутового гриба и кремнёвые орудия. Люди каменного века высекали искры из кремня и некоторых камней и ловили их на этот гриб.

~~~sim
sort
Загорится ли от искры?
# Загорится | Не загорится
- Пушистая вата = 1
- Сухая трава, растёртая в волокна = 1
- Тонкая стружка бересты = 1
- Зелёные листья = 2
- Мокрый мох = 2
- Палка толщиной с большой палец = 2
> Искре нужна растопка очень тонкая, очень сухая и полная воздуха.
~~~

## Задания

1. Собери на прогулке пять видов возможной растопки и разложи их от самой тонкой к самой толстой.
2. Вместе со взрослым проверь огнивом, сколько ударов нужно каждому виду растопки, чтобы загореться.
3. Узнай, как работает лучковое сверло, и нарисуй его части: лук, веретено, дощечку и упор.`,
  },
  quiz: [
    q(t("What makes a ferro rod better than matches on a hike?", "Արշավի ժամանակ ինչո՞վ է ֆեռո ձողն ավելի լավ, քան լուցկին։", "Чем огниво в походе лучше спичек?"), [t("It works when wet and lasts thousands of strikes", "Աշխատում է թաց վիճակում և դիմանում է հազարավոր հարվածների", "Работает мокрым и выдерживает тысячи ударов"), t("It makes a bigger flame", "Ավելի մեծ բոց է տալիս", "Даёт больше пламени"), t("It needs no tinder", "Կրակավառելիք պետք չէ", "Ему не нужна растопка")], 0),
    q(t("Why pull the rod back instead of pushing the striker forward?", "Ինչո՞ւ ետ քաշել ձողը, այլ ոչ թե առաջ հրել հարվածիչը։", "Почему тянуть стержень назад, а не толкать кресало вперёд?"), [t("So you don't knock the tinder nest apart", "Որպեսզի չքանդես կրակավառելիքի բույնը", "Чтобы не разбить гнездо растопки"), t("It is the rule of the factory", "Գործարանի կանոնն է", "Таково правило завода"), t("Sparks only fly backwards", "Կայծերը միայն ետ են թռչում", "Искры летят только назад")], 0),
    q(t("After 10 strikes nothing catches. What is the most likely problem?", "10 հարվածից հետո ոչինչ չի բռնկվում։ Ո՞րն է ամենահավանական պատճառը։", "После 10 ударов ничего не загорается. В чём вероятнее всего дело?"), [t("The tinder is too thick or damp", "Կրակավառելիքը չափազանց հաստ է կամ խոնավ", "Растопка слишком толстая или влажная"), t("The Sun is too low", "Արևը շատ ցածր է", "Солнце слишком низко"), t("The rod is too new", "Ձողը շատ նոր է", "Огниво слишком новое")], 0),
    order(t("Put the steps in order.", "Դասավորի՛ր քայլերը ճիշտ հերթականությամբ։", "Расставь шаги по порядку."), [
      t("Make a nest of fine, dry tinder", "Բարակ, չոր կրակավառելիքից բույն սարքել", "Сделать гнездо из тонкой сухой растопки"),
      t("Rest the rod tip in the tinder", "Ձողի ծայրը դնել կրակավառելիքի մեջ", "Упереть конец стержня в растопку"),
      t("Pull the rod back hard to throw sparks", "Ձողն ուժգին ետ քաշել՝ կայծեր ստանալու համար", "Резко потянуть стержень назад, высекая искры"),
      t("Blow gently on the glow", "Թեթև փչել շիկացման վրա", "Мягко подуть на тление"),
      t("Add kindling to the flame", "Բոցին մանրափայտ ավելացնել", "Добавить хворост к пламени"),
    ]),
    q(t("How does a magnifying glass light tinder?", "Ինչպե՞ս է խոշորացույցը վառում կրակավառելիքը։", "Как лупа поджигает растопку?"), [t("It gathers sunlight into one hot dot", "Արևի լույսը հավաքում է մեկ տաք կետում", "Собирает солнечный свет в одну горячую точку"), t("The glass itself is hot", "Ապակին ինքն է տաք", "Само стекло горячее"), t("It makes sparks", "Կայծեր է արձակում", "Высекает искры")], 0),
    match(t("Match the fire method to how it works.", "Միացրո՛ւ կրակ վառելու եղանակն իր աշխատելու ձևի հետ։", "Соедини способ добычи огня с тем, как он работает."), [
      [t("Ferro rod", "Ֆեռո ձող", "Огниво"), t("Hot sparks", "Տաք կայծեր", "Горячие искры")],
      [t("Lens", "Ոսպնյակ", "Линза"), t("Focused sunlight", "Կենտրոնացված արևի լույս", "Собранный солнечный свет")],
      [t("Bow drill", "Աղեղնավոր շաղափ", "Лучковое сверло"), t("Friction", "Շփում", "Трение")],
    ]),
  ],
});

const pocketKnife = howto({
  slug: "pocket-knife",
  title: ["How to use a pocket knife safely", "Ինչպես անվտանգ օգտագործել գրպանի դանակը", "Как безопасно пользоваться перочинным ножом"],
  goals: {
    en: ["Check your safety circle before opening a knife", "Open, use and close a folding knife without cutting yourself", "Hand a knife to someone the safe way"],
    hy: ["Դանակը բացելուց առաջ ստուգել անվտանգության շրջանը", "Բացել, օգտագործել և փակել ծալովի դանակը՝ առանց կտրվելու", "Դանակն ուրիշին փոխանցել անվտանգ եղանակով"],
    ru: ["Проверять круг безопасности, прежде чем открыть нож", "Открывать, использовать и закрывать складной нож, не порезавшись", "Безопасно передавать нож другому человеку"],
  },
  body: {
    en: `A small folding knife is one of the oldest and most useful tools: you can whittle a tent peg, cut a rope, slice an apple or make shavings for tinder. Scouts in many countries earn the right to carry one only after they learn the rules in this lesson. The rules are simple, but they must become a habit.

~~~sim
safety level=adult
- Use a knife only when an adult has said yes and is close by.
- Knives never go to school, and never come out in a crowd. Many countries have laws about carrying knives in public.
- A knife is a tool, never a toy or a weapon. Never wave, throw or point it.
- If you cut yourself, press on the wound with a clean cloth and tell an adult (see the lesson on cuts).
~~~

## Parts of a pocket knife

- **Blade**: the metal part. Its **edge** is sharp; its **back** (spine) is blunt and safe to press on.
- **Handle**: the part you hold. The blade folds into it.
- **Lock**: many knives click when they open fully, so the blade can't fold on your fingers.

## Step by step

~~~sim
mechanism knife
~~~

## Whittling: your first project

Try making a tent peg from a dry stick as thick as your thumb. Sit down, rest your forearms on your knees, and push the knife **away** from you in short strokes to make a point. Keep the hand holding the stick **behind** the blade. Turn the stick a little after every cut.

> 💡 **Did you know?** The famous red Swiss Army knife was first made in 1891 for the soldiers of Switzerland. It had a blade, a screwdriver, a can opener and a punch. Today some versions have more than 30 tools, and astronauts have taken them into space.

~~~sim
sort
Safe or not safe?
# Safe | Not safe
- Cutting away from your body = 1
- Checking that nobody is in your circle = 1
- Closing the knife before you walk = 1
- Cutting towards your thumb = 2
- Carrying an open knife in your pocket = 2
- Trying to catch a falling knife = 2
> Away from you, nobody nearby, closed when you move. And if a knife falls, let it fall!
~~~

## Practice

1. Before you touch a real knife, practise the blood circle, the "away from you" stroke and the handle-first hand-over with a wooden spoon.
2. With an adult, whittle a tent peg or a spoon blank from a dry stick.
3. Learn how to clean and oil your knife, and keep it in a safe place at home.`,
    hy: `Փոքր ծալովի դանակն ամենահին և ամենաօգտակար գործիքներից է․ դրանով կարող ես վրանի ցից տաշել, պարան կտրել, խնձոր կտրատել կամ կրակավառելիքի համար տաշեղ պատրաստել։ Շատ երկրներում սկաուտները դանակ կրելու իրավունք ստանում են միայն այն բանից հետո, երբ սովորում են այս դասի կանոնները։ Կանոնները պարզ են, բայց պետք է սովորություն դառնան։

~~~sim
safety level=adult
- Դանակ օգտագործի՛ր միայն այն ժամանակ, երբ մեծահասակը թույլ է տվել և կողքին է։
- Դանակն երբեք դպրոց չի գնում և երբեք դուրս չի հանվում մարդաշատ տեղում։ Շատ երկրներում օրենքներ կան հասարակական վայրերում դանակ կրելու մասին։
- Դանակը գործիք է, երբեք՝ խաղալիք կամ զենք։ Երբեք մի՛ թափահարիր, մի՛ նետիր և մի՛ ուղղիր որևէ մեկի վրա։
- Եթե կտրվել ես, վերքը սեղմի՛ր մաքուր կտորով և ասա՛ մեծահասակին (տե՛ս կտրվածքների մասին դասը)։
~~~

## Գրպանի դանակի մասերը

- **Շեղբ**․ մետաղե մասը։ Նրա **եզրը** սուր է, իսկ **մեջքը** բութ է, և դրա վրա կարելի է սեղմել։
- **Բռնակ**․ այն մասը, որից բռնում ես։ Շեղբը ծալվում է դրա մեջ։
- **Փական**․ շատ դանակներ ամբողջովին բացվելիս չխկում են, որպեսզի շեղբը չծալվի մատներիդ վրա։

## Քայլ առ քայլ

~~~sim
mechanism knife
~~~

## Տաշել․ քո առաջին նախագիծը

Փորձի՛ր բթամատի հաստությամբ չոր փայտից վրանի ցից պատրաստել։ Նստի՛ր, նախաբազուկներդ հենի՛ր ծնկներիդ և կարճ շարժումներով դանակը հրի՛ր **քեզնից հեռու**՝ սուր ծայր ստանալու համար։ Փայտը բռնող ձեռքդ պահի՛ր շեղբի **ետևում**։ Ամեն կտրելուց հետո փայտը մի քիչ պտտի՛ր։

> 💡 **Հետաքրքիր է իմանալ։** Կարմիր շվեյցարական բանակային հայտնի դանակն առաջին անգամ պատրաստվել է 1891 թվականին Շվեյցարիայի զինվորների համար։ Այն ուներ շեղբ, պտուտակահան, պահածոյի բացիչ և ծակիչ։ Այսօր որոշ տարբերակներ ունեն ավելի քան 30 գործիք, իսկ տիեզերագնացները դրանք տիեզերք են տարել։

~~~sim
sort
Անվտա՞նգ է, թե՞ ոչ։
# Անվտանգ է | Անվտանգ չէ
- Կտրել քո մարմնից դեպի դուրս = 1
- Ստուգել, որ շրջանիդ մեջ ոչ ոք չկա = 1
- Դանակը փակել նախքան քայլելը = 1
- Կտրել դեպի բթամատդ = 2
- Գրպանում բաց դանակ կրել = 2
- Փորձել բռնել ընկնող դանակը = 2
> Քեզնից հեռու, մոտակայքում ոչ ոք, շարժվելիս՝ փակ։ Իսկ եթե դանակն ընկնում է, թող ընկնի։
~~~

## Առաջադրանքներ

1. Մինչև իսկական դանակին դիպչելը փայտե գդալով վարժվի՛ր անվտանգության շրջանը, «քեզնից հեռու» շարժումը և բռնակով փոխանցելը։
2. Մեծահասակի հետ չոր փայտից տաշի՛ր վրանի ցից կամ գդալի նախապատրաստուկ։
3. Սովորի՛ր դանակը մաքրել և յուղել և պահի՛ր այն տանն անվտանգ տեղում։`,
    ru: `Маленький складной нож — один из самых древних и полезных инструментов: им можно выстрогать колышек для палатки, перерезать верёвку, нарезать яблоко или настрогать стружку для растопки. Во многих странах скауты получают право носить нож только после того, как выучат правила из этого урока. Правила простые, но они должны стать привычкой.

~~~sim
safety level=adult
- Пользуйся ножом, только когда взрослый разрешил и находится рядом.
- Нож никогда не берут в школу и не достают в толпе. Во многих странах есть законы о ношении ножей в общественных местах.
- Нож — инструмент, а не игрушка и не оружие. Никогда не размахивай им, не бросай и не направляй на людей.
- Если порезался, прижми рану чистой тканью и скажи взрослому (см. урок о порезах).
~~~

## Части перочинного ножа

- **Лезвие** — металлическая часть. Его **режущая кромка** острая, а **обух** тупой, на него можно нажимать.
- **Рукоятка** — то, за что держат. Лезвие складывается в неё.
- **Фиксатор** — у многих ножей лезвие при полном открытии щёлкает, чтобы оно не сложилось на пальцы.

## Шаг за шагом

~~~sim
mechanism knife
~~~

## Строгание: первый проект

Попробуй выстрогать колышек для палатки из сухой палки толщиной с большой палец. Сядь, упри предплечья в колени и короткими движениями веди нож **от себя**, чтобы заострить конец. Руку, которая держит палку, держи **позади** лезвия. После каждого среза немного поворачивай палку.

> 💡 **Интересно знать.** Знаменитый красный швейцарский армейский нож впервые сделали в 1891 году для солдат Швейцарии. В нём были лезвие, отвёртка, консервный нож и шило. Сегодня у некоторых моделей больше 30 инструментов, а астронавты брали такие ножи в космос.

~~~sim
sort
Безопасно или нет?
# Безопасно | Опасно
- Резать от себя = 1
- Проверить, что в твоём круге никого нет = 1
- Закрыть нож, прежде чем идти = 1
- Резать в сторону большого пальца = 2
- Носить открытый нож в кармане = 2
- Пытаться поймать падающий нож = 2
> От себя, никого рядом, закрыт при движении. А если нож падает — пусть падает!
~~~

## Задания

1. Прежде чем взять настоящий нож, потренируйся с деревянной ложкой: круг безопасности, движение «от себя» и передачу рукояткой вперёд.
2. Вместе со взрослым выстрогай из сухой палки колышек или заготовку для ложки.
3. Научись чистить и смазывать нож и храни его дома в безопасном месте.`,
  },
  quiz: [
    q(t("What is the \"blood circle\"?", "Ի՞նչ է «անվտանգության շրջանը»։", "Что такое «круг безопасности»?"), [t("The space your arm and knife can reach, which must be empty of people", "Այն տարածքը, որին հասնում են ձեռքդ և դանակը, և որտեղ մարդ չպետք է լինի", "Пространство, куда достаёт рука с ножом; в нём не должно быть людей"), t("A red mark on the handle", "Կարմիր նշան բռնակի վրա", "Красная метка на рукоятке"), t("A game for scouts", "Սկաուտների խաղ", "Игра для скаутов")], 0),
    q(t("Which way should you cut?", "Ո՞ր ուղղությամբ պետք է կտրել։", "В какую сторону нужно резать?"), [t("Towards your body", "Դեպի մարմինդ", "К себе"), t("Away from your body", "Մարմնիցդ դեպի դուրս", "От себя"), t("Towards a friend", "Դեպի ընկերդ", "К другу")], 1),
    q(t("Your knife slips from your hand. What do you do?", "Դանակը սահում է ձեռքիցդ։ Ի՞նչ ես անում։", "Нож выскальзывает из руки. Что ты делаешь?"), [t("Try to catch it fast", "Փորձում եմ արագ բռնել", "Стараюсь быстро поймать"), t("Step back and let it fall", "Ետ եմ քաշվում և թողնում, որ ընկնի", "Отступаю и даю ему упасть"), t("Kick it away", "Ոտքով հեռացնում եմ", "Отбрасываю ногой")], 1),
    order(t("Put the steps in order.", "Դասավորի՛ր քայլերը ճիշտ հերթականությամբ։", "Расставь шаги по порядку."), [
      t("Check your safety circle", "Ստուգել անվտանգության շրջանը", "Проверить круг безопасности"),
      t("Open the blade until it clicks", "Բացել շեղբը, մինչև չխկա", "Открыть лезвие до щелчка"),
      t("Cut away from yourself", "Կտրել քեզնից հեռու", "Резать от себя"),
      t("Close it with your palm", "Փակել ափով", "Закрыть ладонью"),
      t("Put it away before you walk", "Հավաքել նախքան քայլելը", "Убрать, прежде чем идти"),
    ]),
    q(t("Why is a sharp knife safer than a blunt one?", "Ինչո՞ւ է սուր դանակն ավելի անվտանգ, քան բութը։", "Почему острый нож безопаснее тупого?"), [t("It needs less force, so it slips less", "Քիչ ուժ է պետք, ուստի ավելի քիչ է սահում", "Нужно меньше усилия, поэтому он реже соскальзывает"), t("It is lighter", "Ավելի թեթև է", "Он легче"), t("It is not safer", "Ավելի անվտանգ չէ", "Он не безопаснее")], 0),
    match(t("Match the knife part to what it is.", "Միացրո՛ւ դանակի մասն իր նկարագրության հետ։", "Соедини часть ножа с её описанием."), [
      [t("Edge", "Եզր", "Режущая кромка"), t("The sharp side of the blade", "Շեղբի սուր կողմը", "Острая сторона лезвия")],
      [t("Spine", "Մեջք", "Обух"), t("The blunt back of the blade", "Շեղբի բութ մեջքը", "Тупая спинка лезвия")],
      [t("Lock", "Փական", "Фиксатор"), t("Stops the blade folding on your fingers", "Թույլ չի տալիս շեղբին ծալվել մատներիդ վրա", "Не даёт лезвию сложиться на пальцы")],
    ]),
  ],
});

const solarOven = howto({
  slug: "solar-oven",
  title: ["How to make a solar oven", "Ինչպես պատրաստել արևային վառարան", "Как сделать солнечную печь"],
  goals: {
    en: ["Build a solar oven from a pizza box", "Explain reflecting, absorbing and trapping heat", "Measure how hot your oven gets"],
    hy: ["Պիցցայի տուփից արևային վառարան պատրաստել", "Բացատրել ջերմության անդրադարձումը, կլանումը և պահումը", "Չափել, թե որքան է տաքանում վառարանդ"],
    ru: ["Сделать солнечную печь из коробки от пиццы", "Объяснить отражение, поглощение и удержание тепла", "Измерить, насколько нагревается печь"],
  },
  body: {
    en: `Armenia has more than 2,500 hours of sunshine a year, much more than most of Europe. That sunlight is free energy, and you can cook with it! A solar oven made from an old pizza box can melt chocolate, toast a sandwich or warm up a snack, using no fire and no electricity at all.

~~~sim
safety level=ask
- Ask an adult to cut the box with a craft knife or scissors.
- The inside gets hot: use an oven glove and open it carefully.
- Never look straight at the Sun or at the sunlight reflected by the foil.
- Only "cook" food that is safe to eat anyway, like bread, cheese, chocolate or fruit. A pizza-box oven is not hot enough for raw meat or eggs.
~~~

## What you need

A clean pizza box, kitchen foil, cling film, black paper, sticky tape, a ruler, a stick or a skewer, and a thermometer if you have one.

## Step by step

~~~sim
mechanism solaroven
~~~

## Three tricks against the cold

Your oven uses three bits of physics at once:

- **Reflecting**: the shiny foil bounces extra sunlight into the box, like a mirror.
- **Absorbing**: black paper soaks up light and turns it into heat. White and shiny things bounce it away.
- **Trapping**: the cling film window lets sunlight in but stops warm air from escaping, just like a greenhouse or a car parked in the sun. Rolled newspaper around the inside walls traps even more heat.

> 💡 **Did you know?** In 1767 the Swiss scientist Horace-Bénédict de Saussure built a box of wood and glass that got hot enough to cook fruit using only sunlight. It is thought to be the first solar oven. Today millions of families in sunny countries cook on solar cookers to save firewood and keep their homes free of smoke.

~~~sim
sort
What does each part of the oven do?
# Reflects light | Absorbs light | Traps heat
- Kitchen foil on the flap = 1
- A shiny card mirror = 1
- Black paper on the bottom = 2
- A dark pot = 2
- The cling film window = 3
- Rolled newspaper around the sides = 3
> Shiny parts send light in, dark parts turn it into heat, and the window and newspaper keep that heat inside.
~~~

## Practice

1. Build the oven and measure the temperature inside every 10 minutes for an hour. Draw a graph.
2. Try changing one thing: no foil, no black paper or no cling film. Which change makes the biggest difference?
3. Make a "solar s'more": a biscuit, a piece of chocolate and a marshmallow. How long does it take to melt?`,
    hy: `Հայաստանում տարեկան ավելի քան 2500 արևոտ ժամ կա՝ շատ ավելի, քան Եվրոպայի մեծ մասում։ Այդ արևի լույսն անվճար էներգիա է, և դրանով կարելի է եփել։ Հին պիցցայի տուփից պատրաստված արևային վառարանը կարող է հալեցնել շոկոլադը, տապակել սենդվիչը կամ տաքացնել նախուտեստը՝ առանց կրակի և առանց էլեկտրականության։

~~~sim
safety level=ask
- Խնդրի՛ր մեծահասակին տուփը կտրել դանակով կամ մկրատով։
- Ներսը տաքանում է․ օգտագործի՛ր խոհանոցային ձեռնոց և զգույշ բացի՛ր։
- Երբեք ուղիղ մի՛ նայիր Արևին կամ փայլաթիթեղից անդրադարձած արևի լույսին։
- «Եփի՛ր» միայն այն սնունդը, որն առանց այդ էլ անվտանգ է ուտել, օրինակ՝ հաց, պանիր, շոկոլադ կամ մրգեր։ Պիցցայի տուփից վառարանը բավական տաք չէ հում մսի կամ ձվի համար։
~~~

## Ինչ է պետք

Մաքուր պիցցայի տուփ, խոհանոցային փայլաթիթեղ, սննդային թաղանթ, սև թուղթ, կպչուն ժապավեն, քանոն, փայտիկ կամ շամփուր և ջերմաչափ, եթե ունես։

## Քայլ առ քայլ

~~~sim
mechanism solaroven
~~~

## Երեք հնարք ցրտի դեմ

Վառարանդ միանգամից օգտագործում է ֆիզիկայի երեք երևույթ․

- **Անդրադարձում**․ փայլուն փայլաթիթեղը հայելու պես լրացուցիչ արևի լույս է ուղարկում տուփի մեջ։
- **Կլանում**․ սև թուղթը կլանում է լույսը և վերածում ջերմության։ Սպիտակ և փայլուն բաներն այն անդրադարձնում են։
- **Պահում**․ թաղանթե պատուհանը ներս է թողնում արևի լույսը, բայց դուրս չի թողնում տաք օդը, ինչպես ջերմոցը կամ արևի տակ կայանված մեքենան։ Ներսի պատերի երկայնքով դրված ոլորած թերթերն էլ ավելի շատ ջերմություն են պահում։

> 💡 **Հետաքրքիր է իմանալ։** 1767 թվականին շվեյցարացի գիտնական Օրաս Բենեդիկտ դը Սոսյուրը փայտից և ապակուց արկղ պատրաստեց, որն այնքան տաքանում էր, որ միայն արևի լույսով մրգեր էր եփում։ Այն համարվում է առաջին արևային վառարանը։ Այսօր արևոտ երկրներում միլիոնավոր ընտանիքներ եփում են արևային վառարաններում, որպեսզի վառելափայտ խնայեն և տները ծխից զերծ պահեն։

~~~sim
sort
Ի՞նչ է անում վառարանի յուրաքանչյուր մասը։
# Անդրադարձնում է լույսը | Կլանում է լույսը | Պահում է ջերմությունը
- Փեղկի փայլաթիթեղը = 1
- Փայլուն ստվարաթղթե հայելի = 1
- Հատակի սև թուղթը = 2
- Մուգ կաթսա = 2
- Թաղանթե պատուհանը = 3
- Պատերի երկայնքով ոլորած թերթեր = 3
> Փայլուն մասերը լույսը ներս են ուղարկում, մուգ մասերն այն վերածում են ջերմության, իսկ պատուհանն ու թերթերն այդ ջերմությունը պահում են ներսում։
~~~

## Առաջադրանքներ

1. Պատրաստի՛ր վառարանը և մեկ ժամվա ընթացքում ամեն 10 րոպեն մեկ չափի՛ր ներսի ջերմաստիճանը։ Գծապատկեր կառուցի՛ր։
2. Փորձի՛ր մեկ բան փոխել՝ առանց փայլաթիթեղի, առանց սև թղթի կամ առանց թաղանթի։ Ո՞ր փոփոխությունն է ամենաշատն ազդում։
3. Պատրաստի՛ր «արևային թխվածք»՝ թխվածքաբլիթ, մի կտոր շոկոլադ և մարշմելոու։ Որքա՞ն ժամանակում է այն հալվում։`,
    ru: `В Армении больше 2500 солнечных часов в год — гораздо больше, чем в большей части Европы. Этот солнечный свет — бесплатная энергия, и на нём можно готовить! Солнечная печь из старой коробки от пиццы может растопить шоколад, подрумянить бутерброд или разогреть перекус — без огня и электричества.

~~~sim
safety level=ask
- Попроси взрослого прорезать коробку макетным ножом или ножницами.
- Внутри становится горячо: бери прихватку и открывай осторожно.
- Никогда не смотри прямо на Солнце или на свет, отражённый фольгой.
- «Готовь» только то, что и так можно есть: хлеб, сыр, шоколад или фрукты. Печь из коробки недостаточно горячая для сырого мяса или яиц.
~~~

## Что понадобится

Чистая коробка от пиццы, пищевая фольга, пищевая плёнка, чёрная бумага, скотч, линейка, палочка или шпажка и термометр, если есть.

## Шаг за шагом

~~~sim
mechanism solaroven
~~~

## Три хитрости против холода

Твоя печь использует сразу три физических явления:

- **Отражение**: блестящая фольга, как зеркало, направляет в коробку дополнительный солнечный свет.
- **Поглощение**: чёрная бумага поглощает свет и превращает его в тепло. Белое и блестящее его отражает.
- **Удержание**: окошко из плёнки пропускает солнечный свет, но не выпускает тёплый воздух — как теплица или машина, стоящая на солнце. Свёрнутые газеты вдоль стенок удерживают ещё больше тепла.

> 💡 **Интересно знать.** В 1767 году швейцарский учёный Орас Бенедикт де Соссюр построил ящик из дерева и стекла, который нагревался так сильно, что в нём можно было сварить фрукты одним солнечным светом. Его считают первой солнечной печью. Сегодня миллионы семей в солнечных странах готовят на солнечных плитах, чтобы экономить дрова и не дымить в доме.

~~~sim
sort
Что делает каждая часть печи?
# Отражает свет | Поглощает свет | Удерживает тепло
- Фольга на створке = 1
- Блестящее зеркало из картона = 1
- Чёрная бумага на дне = 2
- Тёмная кастрюлька = 2
- Окошко из плёнки = 3
- Свёрнутые газеты вдоль стенок = 3
> Блестящие части направляют свет внутрь, тёмные превращают его в тепло, а окошко и газеты держат это тепло внутри.
~~~

## Задания

1. Сделай печь и в течение часа каждые 10 минут измеряй температуру внутри. Построй график.
2. Попробуй изменить что-то одно: без фольги, без чёрной бумаги или без плёнки. Какое изменение влияет сильнее всего?
3. Сделай «солнечный смор»: печенье, кусочек шоколада и маршмеллоу. За сколько времени он растает?`,
  },
  quiz: [
    q(t("Why is the bottom of the oven lined with black paper?", "Ինչո՞ւ է վառարանի հատակը պատված սև թղթով։", "Зачем дно печи выстилают чёрной бумагой?"), [t("Black absorbs light and turns it into heat", "Սևը կլանում է լույսը և վերածում ջերմության", "Чёрное поглощает свет и превращает его в тепло"), t("It looks nicer", "Ավելի գեղեցիկ է", "Так красивее"), t("It keeps insects away", "Միջատներին հեռու է պահում", "Отпугивает насекомых")], 0),
    q(t("What does the foil on the flap do?", "Ի՞նչ է անում փեղկի փայլաթիթեղը։", "Что делает фольга на створке?"), [t("Reflects extra sunlight into the box", "Լրացուցիչ արևի լույս է անդրադարձնում տուփի մեջ", "Отражает дополнительный свет в коробку"), t("Keeps the box dry", "Չոր է պահում տուփը", "Держит коробку сухой"), t("Makes the box heavier", "Տուփն ավելի ծանր է դարձնում", "Делает коробку тяжелее")], 0),
    q(t("Which food is NOT safe to cook in a pizza-box oven?", "Ո՞ր սնունդը չի կարելի եփել պիցցայի տուփից վառարանում։", "Что НЕЛЬЗЯ готовить в печи из коробки от пиццы?"), [t("Chocolate", "Շոկոլադ", "Шоколад"), t("Raw chicken", "Հում հավ", "Сырую курицу"), t("Bread with cheese", "Հաց պանրով", "Хлеб с сыром")], 1, t("The oven isn't hot enough to kill germs in raw meat or eggs.", "Վառարանը բավական տաք չէ հում մսի կամ ձվի մանրէները սպանելու համար։", "Печь недостаточно горячая, чтобы убить микробов в сыром мясе или яйцах.")),
    order(t("Put the building steps in order.", "Դասավորի՛ր պատրաստելու քայլերը։", "Расставь шаги изготовления по порядку."), [
      t("Cut a flap in the lid", "Կափարիչին փեղկ կտրել", "Прорезать створку в крышке"),
      t("Cover the flap with foil", "Փեղկը ծածկել փայլաթիթեղով", "Обклеить створку фольгой"),
      t("Tape cling film over the hole", "Անցքի վրա թաղանթ կպցնել", "Заклеить отверстие плёнкой"),
      t("Line the bottom with black paper", "Հատակը պատել սև թղթով", "Выстелить дно чёрной бумагой"),
      t("Face it to the Sun and prop the flap", "Շրջել դեպի Արևը և հենել փեղկը", "Повернуть к Солнцу и подпереть створку"),
    ]),
    q(t("The cling film window works like...", "Թաղանթե պատուհանն աշխատում է ինչպես…", "Окошко из плёнки работает как…"), [t("A greenhouse roof", "Ջերմոցի տանիքը", "Крыша теплицы"), t("A fan", "Օդափոխիչը", "Вентилятор"), t("A fridge door", "Սառնարանի դուռը", "Дверца холодильника")], 0),
    match(t("Match the word to its meaning.", "Միացրո՛ւ բառն իր իմաստի հետ։", "Соедини слово с его значением."), [
      [t("Reflect", "Անդրադարձնել", "Отражать"), t("Bounce light back", "Լույսն ետ ուղարկել", "Отправлять свет обратно")],
      [t("Absorb", "Կլանել", "Поглощать"), t("Soak up light", "Ներծծել լույսը", "Впитывать свет")],
      [t("Insulate", "Մեկուսացնել", "Утеплять"), t("Stop heat escaping", "Թույլ չտալ ջերմությանը դուրս գալ", "Не выпускать тепло")],
    ]),
  ],
});

export const howtoGrade7 = howtoCourse(
  7,
  {
    title: ["Sparks, blades and sunshine", "Կայծեր, շեղբեր և արև", "Искры, лезвия и солнце"],
    summary: [
      "Light a fire without matches, handle a pocket knife safely, and cook with the Sun in a pizza-box oven.",
      "Առանց լուցկու կրակ վառել, անվտանգ օգտագործել գրպանի դանակը և պիցցայի տուփից վառարանում արևով եփել։",
      "Развести огонь без спичек, безопасно обращаться с перочинным ножом и готовить на солнце в печи из коробки от пиццы.",
    ],
  },
  [fireSteel, pocketKnife, solarOven],
);
