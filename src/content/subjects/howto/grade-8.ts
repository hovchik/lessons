import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const cprLesson = howto({
  slug: "cpr",
  title: ["How to restart a heart: CPR", "Ինչպես վերագործարկել սիրտը՝ սրտի մերսում", "Как запустить сердце: сердечно-лёгочная реанимация"],
  goals: {
    en: ["Check whether a collapsed person is breathing", "Call 112 and get a defibrillator", "Give chest compressions at the right place, depth and speed"],
    hy: ["Ստուգել, թե ընկած մարդը շնչո՞ւմ է", "Զանգել 112 և դեֆիբրիլյատոր բերել տալ", "Կատարել կրծքավանդակի սեղմումներ ճիշտ տեղում, խորությամբ և արագությամբ"],
    ru: ["Проверить, дышит ли упавший человек", "Вызвать 112 и найти дефибриллятор", "Делать компрессии грудной клетки в правильном месте, с нужной глубиной и частотой"],
  },
  body: {
    en: `When the heart suddenly stops (doctors call it **cardiac arrest**), the brain starts to die after just a few minutes without blood. An ambulance usually takes longer than that. So the person who is standing nearby, maybe you, is the one who can keep them alive. Doctors in Europe now recommend that every child learns this from the age of 12. It is one of the most important things you will ever learn.

~~~sim
safety level=care
- Practise only on a training dummy or a firm cushion. Never press on the chest of someone who is breathing.
- Make sure the place is safe for you first: traffic, fire, electricity.
- Always call 112 (or get someone to call) before you start. Doing CPR does not replace the ambulance.
- If you can, take a real first-aid course with an instructor.
~~~

## Step by step

~~~sim
mechanism cpr
~~~

## Why pushing helps

When you press the chest down, you squeeze the heart between the breastbone and the spine, and blood is pushed out to the brain. When you let go, the heart fills again. You are **pumping by hand** for the heart until a defibrillator or doctors can make it beat on its own.

**Keep the beat**: 100–120 pushes a minute is about the speed of the song "Stayin' Alive". Doing CPR is tiring, so if there is another person, swap every 2 minutes without stopping.

## The defibrillator (AED)

An **AED** is a box that can restart a heart with an electric shock. You find them in airports, metro stations, shopping centres and many schools. You don't need any training: it **talks** to you, tells you where to stick the pads, checks the heart by itself and gives a shock only if it is needed.

> 💡 **Did you know?** Almost every first-aid course in the world uses a training dummy called **Resusci Anne**, first made in Norway in 1960. Her face was copied from a famous old mask of a young woman from Paris. Because millions of people have practised rescue breaths on her, she is sometimes called "the most kissed face in the world".

~~~sim
sort
About CPR: fact or myth?
# Fact | Myth
- Hands-only CPR can save a life = 1
- An AED tells you what to do = 1
- Ribs may crack, and that is still OK = 1
- Only doctors are allowed to do CPR = 2
- An AED can shock someone who doesn't need it = 2
- If you're not sure, it's better to do nothing = 2
> Anyone can help, an AED only shocks when it's needed, and doing something is always better than doing nothing.
~~~

## Practice

1. Find the nearest AED to your school and home. Look for a green sign with a heart and a lightning bolt.
2. On a firm cushion, practise 30 pushes in time to "Stayin' Alive". Ask someone to time you.
3. Ask your school or a Red Cross centre about a first-aid course for young people.`,
    hy: `Երբ սիրտը հանկարծ կանգ է առնում (բժիշկներն այն անվանում են **սրտի կանգ**), ուղեղը սկսում է մահանալ ընդամենը մի քանի րոպե առանց արյան մնալուց հետո։ Շտապօգնությունը սովորաբար ավելի երկար է գալիս։ Ուստի կողքին կանգնած մարդը, գուցե հենց դու, կարող է նրան կենդանի պահել։ Եվրոպայում բժիշկներն այժմ խորհուրդ են տալիս, որ յուրաքանչյուր երեխա սա սովորի 12 տարեկանից։ Սա ամենակարևոր բաներից է, որ երբևէ կսովորես։

~~~sim
safety level=care
- Վարժվի՛ր միայն ուսումնական մանեկենի կամ ամուր բարձի վրա։ Երբեք մի՛ սեղմիր շնչող մարդու կրծքավանդակը։
- Նախ համոզվի՛ր, որ տեղը քեզ համար անվտանգ է՝ երթևեկություն, կրակ, էլեկտրականություն։
- Սկսելուց առաջ միշտ զանգի՛ր 112 (կամ խնդրի՛ր, որ մեկը զանգի)։ Սրտի մերսումը չի փոխարինում շտապօգնությանը։
- Եթե կարող ես, անցի՛ր առաջին օգնության իսկական դասընթաց հրահանգչի հետ։
~~~

## Քայլ առ քայլ

~~~sim
mechanism cpr
~~~

## Ինչու է սեղմելն օգնում

Երբ սեղմում ես կրծքավանդակը, սիրտը ճզմվում է կրծոսկրի և ողնաշարի միջև, և արյունը մղվում է դեպի ուղեղ։ Երբ բաց ես թողնում, սիրտը նորից լցվում է։ Դու **ձեռքով պոմպում ես** սրտի փոխարեն, մինչև դեֆիբրիլյատորը կամ բժիշկները կկարողանան այն ինքնուրույն աշխատեցնել։

**Պահի՛ր ռիթմը**․ րոպեում 100–120 սեղմումը մոտավորապես «Stayin' Alive» երգի արագությունն է։ Սրտի մերսումը հոգնեցնող է, ուստի եթե կողքին մեկ ուրիշն էլ կա, ամեն 2 րոպեն մեկ փոխարինե՛ք իրար՝ առանց դադարի։

## Դեֆիբրիլյատոր

**Ավտոմատ դեֆիբրիլյատորն** արկղ է, որը կարող է էլեկտրական հարվածով վերագործարկել սիրտը։ Դրանք կան օդանավակայաններում, մետրոյի կայարաններում, առևտրի կենտրոններում և շատ դպրոցներում։ Որևէ պատրաստվածություն պետք չէ․ այն **խոսում** է քեզ հետ, ասում է, թե որտեղ կպցնես էլեկտրոդները, ինքն է ստուգում սիրտը և հարված է տալիս միայն այն դեպքում, երբ դա անհրաժեշտ է։

> 💡 **Հետաքրքիր է իմանալ։** Աշխարհում առաջին օգնության գրեթե բոլոր դասընթացներում օգտագործում են **Ռեսուսի Աննա** կոչվող մանեկեն, որն առաջին անգամ պատրաստվել է Նորվեգիայում 1960 թվականին։ Նրա դեմքը պատճենված է Փարիզից մի երիտասարդ կնոջ հայտնի հին դիմակից։ Քանի որ միլիոնավոր մարդիկ նրա վրա արհեստական շնչառություն են վարժվել, նրան երբեմն անվանում են «աշխարհի ամենահամբուրված դեմքը»։

~~~sim
sort
Սրտի մերսման մասին․ փաստ է, թե՞ առասպել։
# Փաստ | Առասպել
- Միայն ձեռքերով մերսումը կարող է կյանք փրկել = 1
- Դեֆիբրիլյատորն ասում է, թե ինչ անել = 1
- Կողոսկրերը կարող են ճաքել, և դա նորմալ է = 1
- Սրտի մերսում կարող են անել միայն բժիշկները = 2
- Դեֆիբրիլյատորը կարող է հարվածել նրան, ում դա պետք չէ = 2
- Եթե վստահ չես, ավելի լավ է ոչինչ չանել = 2
> Ցանկացածը կարող է օգնել, դեֆիբրիլյատորը հարված է տալիս միայն անհրաժեշտության դեպքում, և ինչ-որ բան անելը միշտ ավելի լավ է, քան ոչինչ չանելը։
~~~

## Առաջադրանքներ

1. Գտի՛ր դպրոցիդ և տանդ ամենամոտ դեֆիբրիլյատորը։ Փնտրի՛ր սրտով և կայծակով կանաչ նշանը։
2. Ամուր բարձի վրա վարժվի՛ր 30 սեղմում «Stayin' Alive» երգի ռիթմով։ Խնդրի՛ր, որ մեկը ժամանակը չափի։
3. Դպրոցում կամ Կարմիր խաչի կենտրոնում հետաքրքրվի՛ր երիտասարդների համար առաջին օգնության դասընթացով։`,
    ru: `Когда сердце внезапно останавливается (врачи называют это **остановкой сердца**), мозг начинает погибать уже через несколько минут без крови. Скорая обычно едет дольше. Поэтому сохранить человеку жизнь может тот, кто оказался рядом, — возможно, ты. Врачи в Европе рекомендуют, чтобы каждый ребёнок учился этому с 12 лет. Это одно из самых важных умений в жизни.

~~~sim
safety level=care
- Тренируйся только на манекене или плотной подушке. Никогда не дави на грудь дышащему человеку.
- Сначала убедись, что место безопасно для тебя: машины, огонь, электричество.
- Перед началом всегда звони 112 (или попроси кого-то позвонить). Реанимация не заменяет скорую.
- Если можешь, пройди настоящие курсы первой помощи с инструктором.
~~~

## Шаг за шагом

~~~sim
mechanism cpr
~~~

## Почему нажатия помогают

Когда ты давишь на грудь, сердце сжимается между грудиной и позвоночником, и кровь выталкивается к мозгу. Когда отпускаешь, сердце снова наполняется. Ты **качаешь кровь руками** вместо сердца, пока дефибриллятор или врачи не заставят его биться самостоятельно.

**Держи ритм**: 100–120 нажатий в минуту — примерно темп песни «Stayin' Alive». Реанимация утомляет, поэтому, если рядом есть ещё кто-то, меняйтесь каждые 2 минуты без перерыва.

## Дефибриллятор (АНД)

**Автоматический наружный дефибриллятор (АНД)** — это коробка, которая может перезапустить сердце электрическим разрядом. Их ставят в аэропортах, метро, торговых центрах и многих школах. Учиться не нужно: он **говорит** с тобой, подсказывает, куда приклеить электроды, сам проверяет сердце и даёт разряд, только если он нужен.

> 💡 **Интересно знать.** Почти на всех курсах первой помощи в мире используют манекен **Resusci Anne** («Спасите Анну»), который впервые сделали в Норвегии в 1960 году. Её лицо скопировали со знаменитой старинной маски молодой парижанки. Поскольку на ней тренировали искусственное дыхание миллионы людей, её иногда называют «самым целуемым лицом в мире».

~~~sim
sort
О реанимации: факт или миф?
# Факт | Миф
- Реанимация только руками может спасти жизнь = 1
- АНД сам подсказывает, что делать = 1
- Рёбра могут треснуть, и это допустимо = 1
- Реанимацию могут делать только врачи = 2
- АНД может ударить током того, кому это не нужно = 2
- Если не уверен, лучше ничего не делать = 2
> Помочь может любой, АНД даёт разряд только когда нужно, а сделать что-то всегда лучше, чем ничего.
~~~

## Задания

1. Найди ближайший дефибриллятор к школе и дому. Ищи зелёный знак с сердцем и молнией.
2. На плотной подушке потренируйся сделать 30 нажатий в ритме «Stayin' Alive». Попроси кого-нибудь засечь время.
3. Узнай в школе или в Красном Кресте о курсах первой помощи для подростков.`,
  },
  quiz: [
    q(t("A person collapses and doesn't answer. What do you check next?", "Մարդն ընկել է և չի պատասխանում։ Ի՞նչ ես ստուգում հետո։", "Человек упал и не отвечает. Что ты проверяешь дальше?"), [t("Whether they are breathing normally", "Արդյոք նորմալ է շնչում", "Дышит ли он нормально"), t("Their shoe size", "Կոշիկի չափսը", "Размер обуви"), t("Whether they have a phone", "Արդյոք հեռախոս ունի", "Есть ли у него телефон")], 0),
    q(t("Where do you push during CPR?", "Որտե՞ղ ես սեղմում սրտի մերսման ժամանակ։", "Куда нажимать при реанимации?"), [t("On the belly", "Փորին", "На живот"), t("In the centre of the chest", "Կրծքավանդակի կենտրոնում", "На центр грудной клетки"), t("On the left shoulder", "Ձախ ուսին", "На левое плечо")], 1),
    q(t("How fast should you push?", "Որքա՞ն արագ պետք է սեղմել։", "С какой частотой нажимать?"), [t("10–20 times a minute", "Րոպեում 10–20 անգամ", "10–20 раз в минуту"), t("100–120 times a minute", "Րոպեում 100–120 անգամ", "100–120 раз в минуту"), t("300 times a minute", "Րոպեում 300 անգամ", "300 раз в минуту")], 1),
    order(t("Put the steps in order.", "Դասավորի՛ր քայլերը ճիշտ հերթականությամբ։", "Расставь шаги по порядку."), [
      t("Check it is safe", "Ստուգել, որ անվտանգ է", "Убедиться, что безопасно"),
      t("Tap and shout to check for a response", "Թփթփացնել և բարձր հարցնել՝ ստուգելու արձագանքը", "Похлопать и окликнуть"),
      t("Check breathing for up to 10 seconds", "Մինչև 10 վայրկյան ստուգել շնչառությունը", "До 10 секунд проверять дыхание"),
      t("Call 112 and send for an AED", "Զանգել 112 և դեֆիբրիլյատոր բերել տալ", "Позвонить 112 и послать за АНД"),
      t("Start chest compressions", "Սկսել կրծքավանդակի սեղմումները", "Начать компрессии грудной клетки"),
    ]),
    q(t("The AED arrives. What do you do?", "Դեֆիբրիլյատորը բերեցին։ Ի՞նչ ես անում։", "Принесли АНД. Что ты делаешь?"), [t("Switch it on and follow its voice", "Միացնում եմ և հետևում նրա ձայնին", "Включаю и выполняю его голосовые команды"), t("Wait for a doctor to open it", "Սպասում եմ, որ բժիշկը բացի", "Жду врача, чтобы он его открыл"), t("Read the manual first", "Նախ կարդում եմ ձեռնարկը", "Сначала читаю инструкцию")], 0),
    match(t("Match the CPR number to its meaning.", "Միացրո՛ւ սրտի մերսման թիվն իր իմաստի հետ։", "Соедини число с его значением в реанимации."), [
      [t("112", "112", "112"), t("The emergency number", "Արտակարգ իրավիճակների համարը", "Номер экстренной службы")],
      [t("5–6 cm", "5–6 սմ", "5–6 см"), t("How deep to push", "Որքան խորը սեղմել", "Глубина нажатия")],
      [t("100–120", "100–120", "100–120"), t("Pushes per minute", "Սեղմումներ րոպեում", "Нажатий в минуту")],
      [t("10 seconds", "10 վայրկյան", "10 секунд"), t("Longest time to check breathing", "Շնչառությունը ստուգելու առավելագույն ժամանակը", "Самое долгое время проверки дыхания")],
    ]),
  ],
});

const chokingLesson = howto({
  slug: "choking-first-aid",
  title: ["How to help someone who is choking", "Ինչպես օգնել շնչահեղձ եղող մարդուն", "Как помочь подавившемуся человеку"],
  goals: {
    en: ["Recognise the signs of choking", "Give back blows and abdominal thrusts in the right order", "Know which foods and toys are choking risks for small children"],
    hy: ["Ճանաչել շնչահեղձ լինելու նշանները", "Ճիշտ հերթականությամբ կատարել հարվածներ մեջքին և հրումներ որովայնին", "Իմանալ, թե որ սնունդն ու խաղալիքներն են վտանգավոր փոքր երեխաների համար"],
    ru: ["Узнавать признаки удушья", "Правильно чередовать удары по спине и толчки в живот", "Знать, какая еда и игрушки опасны для малышей"],
  },
  body: {
    en: `A piece of food goes "down the wrong way", into the windpipe instead of the food pipe. Usually a strong cough throws it out. But if the windpipe is completely blocked, the person can't breathe, speak or cough, and they need help **within minutes**. It can happen at a family dinner, in the school canteen or to your little brother with a toy. Knowing what to do takes just five minutes to learn.

~~~sim
safety level=care
- Practise only where your hands go. Never really hit or squeeze a friend who is not choking.
- After abdominal thrusts, the person must see a doctor: the thrusts can hurt inside.
- For a baby under 1 year, the method is different: hold them face down along your arm and use back blows and chest thrusts. Ask an adult to show you on a doll.
~~~

## Mild or serious?

| Mild: they can still... | Serious: they can't... |
|---|---|
| cough loudly | cough, or only make weak sounds |
| speak or cry | speak |
| breathe | breathe, and the lips may turn blue |
| **Help:** tell them to keep coughing | **Help:** back blows and thrusts, call 112 |

## Step by step

~~~sim
mechanism choking
~~~

**Why lean forward?** When the person leans forward, gravity helps the object fall out of the mouth, instead of sliding further down.

**Why upward thrusts?** Your fist pushes the belly in and up against the lungs from below. The air trapped in the lungs is squeezed out in one big puff, like a cork popping from a bottle.

> 💡 **Did you know?** The abdominal thrust was described in 1974 by an American doctor, Henry Heimlich, and is often called the Heimlich manoeuvre. In 2016, at the age of 96, he used it himself to save a woman choking on her dinner in his care home.

~~~sim
sort
For a toddler: safe to eat or play with, or a choking risk?
# Safe | Choking risk
- Grapes cut into quarters = 1
- Mashed potato = 1
- Yoghurt = 1
- Whole grapes = 2
- Whole peanuts = 2
- Small toy parts and coins = 2
> Small, round and hard things fit exactly into a toddler's windpipe. Cut, mash, or keep them out of reach.
~~~

## Practice

1. Learn the choking sign (both hands at the throat) and teach it to someone in your family.
2. With a friend, practise only the positions: where to stand, where the back blows go, where the fist goes. No real blows!
3. Walk around your home and find things that are choking risks for small children. Put them up high.`,
    hy: `Սննդի կտորը «սխալ ճանապարհով» է գնում՝ կերակրափողի փոխարեն շնչափող։ Սովորաբար ուժեղ հազը դուրս է նետում այն։ Բայց եթե շնչափողն ամբողջությամբ փակված է, մարդը չի կարողանում շնչել, խոսել կամ հազալ, և նրան օգնություն է պետք **մի քանի րոպեի ընթացքում**։ Դա կարող է պատահել ընտանեկան ընթրիքին, դպրոցի ճաշարանում կամ փոքր եղբորդ հետ՝ խաղալիքի պատճառով։ Սովորելու համար բավական է ընդամենը հինգ րոպե։

~~~sim
safety level=care
- Վարժվի՛ր միայն ձեռքերի դիրքերը։ Երբեք իսկապես մի՛ հարվածիր և մի՛ սեղմիր ընկերոջդ, որը շնչահեղձ չի լինում։
- Որովայնին հրումներից հետո մարդը պետք է բժշկի դիմի․ հրումները կարող են ներսից վնասել։
- Մինչև 1 տարեկան երեխայի դեպքում եղանակն այլ է․ նրան պահում են երեսնիվայր ձեռքի վրա և հարվածում մեջքին ու սեղմում կրծքին։ Խնդրի՛ր մեծահասակին ցույց տալ տիկնիկի վրա։
~~~

## Թեթև՞, թե՞ ծանր

| Թեթև․ նա դեռ կարող է… | Ծանր․ նա չի կարող… |
|---|---|
| բարձր հազալ | հազալ կամ միայն թույլ ձայներ է հանում |
| խոսել կամ լաց լինել | խոսել |
| շնչել | շնչել, շուրթերը կարող են կապտել |
| **Օգնություն**․ ասա՛, որ շարունակի հազալ | **Օգնություն**․ հարվածներ և հրումներ, զանգի՛ր 112 |

## Քայլ առ քայլ

~~~sim
mechanism choking
~~~

**Ինչո՞ւ թեքել առաջ։** Երբ մարդը թեքվում է առաջ, ծանրության ուժն օգնում է, որ առարկան բերանից դուրս ընկնի և ավելի խորը չսահի։

**Ինչո՞ւ հրել վերև։** Բռունցքդ ներքևից որովայնը ներս և վեր է սեղմում դեպի թոքերը։ Թոքերում փակված օդը դուրս է մղվում մեկ մեծ հոսքով, ինչպես շշից թռչող խցանը։

> 💡 **Հետաքրքիր է իմանալ։** Որովայնի հրումը 1974 թվականին նկարագրել է ամերիկացի բժիշկ Հենրի Հայմլիխը, և այն հաճախ անվանում են Հայմլիխի հնարք։ 2016 թվականին՝ 96 տարեկանում, նա ինքն այն կիրառեց՝ փրկելով ծերանոցում ընթրիքի ժամանակ շնչահեղձ եղող մի կնոջ։

~~~sim
sort
Փոքր երեխայի համար․ անվտա՞նգ է, թե՞ շնչահեղձության վտանգ կա։
# Անվտանգ է | Վտանգավոր է
- Չորս մասի կտրած խաղող = 1
- Կարտոֆիլի պյուրե = 1
- Մածուն = 1
- Ամբողջական խաղող = 2
- Ամբողջական գետնանուշ = 2
- Խաղալիքների մանր մասեր և մետաղադրամներ = 2
> Փոքր, կլոր և կարծր բաները ճիշտ տեղավորվում են փոքրիկի շնչափողում։ Կտրի՛ր, տրորի՛ր կամ պահի՛ր հեռու։
~~~

## Առաջադրանքներ

1. Սովորի՛ր շնչահեղձության նշանը (երկու ձեռքը կոկորդին) և սովորեցրո՛ւ ընտանիքիդ անդամներից մեկին։
2. Ընկերոջ հետ վարժվի՛ր միայն դիրքերը՝ որտեղ կանգնել, որտեղ են հարվածները մեջքին, որտեղ է բռունցքը։ Ոչ մի իսկական հարված։
3. Շրջի՛ր տանդ և գտի՛ր այն բաները, որոնք վտանգավոր են փոքր երեխաների համար։ Դրանք դի՛ր բարձր տեղում։`,
    ru: `Кусочек еды попадает «не в то горло» — в дыхательное, а не в пищевод. Обычно сильный кашель выбрасывает его. Но если дыхательные пути перекрыты полностью, человек не может дышать, говорить или кашлять, и помощь нужна **в течение нескольких минут**. Это может случиться за семейным ужином, в школьной столовой или с младшим братом из-за игрушки. Научиться помогать можно за пять минут.

~~~sim
safety level=care
- Тренируй только положение рук. Никогда по-настоящему не бей и не сжимай друга, который не подавился.
- После толчков в живот человеку нужно показаться врачу: толчки могут повредить что-то внутри.
- Для младенца до 1 года способ другой: его кладут лицом вниз на руку и делают удары по спине и толчки в грудь. Попроси взрослого показать на кукле.
~~~

## Лёгкое или тяжёлое?

| Лёгкое: человек ещё может… | Тяжёлое: человек не может… |
|---|---|
| громко кашлять | кашлять или издаёт только слабые звуки |
| говорить или плакать | говорить |
| дышать | дышать, губы могут синеть |
| **Помощь:** пусть продолжает кашлять | **Помощь:** удары по спине и толчки, звонок 112 |

## Шаг за шагом

~~~sim
mechanism choking
~~~

**Зачем наклонять вперёд?** Когда человек наклонён, сила тяжести помогает предмету выпасть изо рта, а не провалиться глубже.

**Зачем толкать вверх?** Кулак вдавливает живот внутрь и вверх, к лёгким. Воздух из лёгких выталкивается одним сильным толчком, как пробка из бутылки.

> 💡 **Интересно знать.** Толчки в живот описал в 1974 году американский врач Генри Геймлих, поэтому их часто называют приёмом Геймлиха. В 2016 году, в 96 лет, он сам применил его и спас женщину, подавившуюся за ужином в его доме престарелых.

~~~sim
sort
Для малыша: безопасно или можно подавиться?
# Безопасно | Можно подавиться
- Виноград, разрезанный на четвертинки = 1
- Картофельное пюре = 1
- Йогурт = 1
- Целые виноградины = 2
- Целые орешки арахиса = 2
- Мелкие детали игрушек и монеты = 2
> Маленькое, круглое и твёрдое как раз застревает в горле малыша. Режь, разминай или убирай подальше.
~~~

## Задания

1. Выучи знак удушья (обе руки у горла) и научи ему кого-нибудь из семьи.
2. С другом потренируй только положения: где встать, куда приходятся удары по спине, где кулак. Никаких настоящих ударов!
3. Пройдись по дому и найди вещи, которыми могут подавиться малыши. Убери их повыше.`,
  },
  quiz: [
    q(t("Someone is coughing hard after swallowing. What do you do?", "Մեկն ուժեղ հազում է կուլ տալուց հետո։ Ի՞նչ ես անում։", "Человек сильно кашляет, подавившись. Что ты делаешь?"), [t("Hit their back at once", "Անմիջապես հարվածում եմ մեջքին", "Сразу бью по спине"), t("Encourage them to keep coughing", "Խրախուսում եմ, որ շարունակի հազալ", "Поддерживаю, чтобы продолжал кашлять"), t("Give them water to drink", "Ջուր եմ տալիս խմելու", "Даю попить воды")], 1, t("A strong cough is the best way to clear the airway. Step in only if they can't cough.", "Ուժեղ հազը շնչուղին մաքրելու լավագույն միջոցն է։ Միջամտի՛ր միայն եթե չի կարողանում հազալ։", "Сильный кашель — лучший способ очистить дыхательные пути. Вмешивайся, только если человек не может кашлять.")),
    q(t("What is the sign for choking?", "Ո՞րն է շնչահեղձ լինելու նշանը։", "Какой знак означает удушье?"), [t("Both hands at the throat", "Երկու ձեռքը կոկորդին", "Обе руки у горла"), t("Thumbs up", "Բթամատը վեր", "Большой палец вверх"), t("Waving", "Ձեռքով թափահարել", "Махание рукой")], 0),
    q(t("Where do the back blows go?", "Որտե՞ղ են արվում հարվածները մեջքին։", "Куда наносят удары по спине?"), [t("Between the shoulder blades", "Թիակների միջև", "Между лопатками"), t("On the lower back", "Գոտկատեղին", "По пояснице"), t("On the head", "Գլխին", "По голове")], 0),
    order(t("Put the steps in order for someone who can't cough.", "Դասավորի՛ր քայլերը նրա համար, ով չի կարողանում հազալ։", "Расставь шаги по порядку для того, кто не может кашлять."), [
      t("Ask: \"Are you choking?\"", "Հարցնել․ «Շնչահեղձ ե՞ք լինում»", "Спросить: «Вы подавились?»"),
      t("Lean them forward", "Թեքել առաջ", "Наклонить вперёд"),
      t("Give up to 5 back blows", "Մինչև 5 հարված մեջքին", "До 5 ударов по спине"),
      t("Give up to 5 abdominal thrusts", "Մինչև 5 հրում որովայնին", "До 5 толчков в живот"),
      t("Repeat and call 112", "Կրկնել և զանգել 112", "Повторять и звонить 112"),
    ]),
    q(t("Where do you put your fist for an abdominal thrust?", "Որտե՞ղ ես դնում բռունցքդ որովայնի հրման համար։", "Куда ставить кулак для толчка в живот?"), [t("Just above the belly button", "Պորտից քիչ վերև", "Чуть выше пупка"), t("On the chest", "Կրծքին", "На грудь"), t("On the neck", "Պարանոցին", "На шею")], 0),
    match(t("Match the person to the right help.", "Միացրո՛ւ մարդուն ճիշտ օգնության հետ։", "Соедини человека с правильной помощью."), [
      [t("Coughing loudly", "Բարձր հազում է", "Громко кашляет"), t("Encourage coughing", "Խրախուսել հազը", "Поддерживать кашель")],
      [t("Can't cough or speak", "Չի կարողանում հազալ կամ խոսել", "Не может кашлять и говорить"), t("Back blows and abdominal thrusts", "Հարվածներ մեջքին և հրումներ որովայնին", "Удары по спине и толчки в живот")],
      [t("Collapses, not breathing", "Ընկնում է, չի շնչում", "Падает, не дышит"), t("Call 112 and start CPR", "Զանգել 112 և սկսել սրտի մերսում", "Звонить 112 и начинать СЛР")],
    ]),
  ],
});

const thunderLesson = howto({
  slug: "thunderstorm-safety",
  title: ["How to read the sky and stay safe in a thunderstorm", "Ինչպես կարդալ երկինքը և անվտանգ մնալ ամպրոպի ժամանակ", "Как читать небо и не пострадать в грозу"],
  goals: {
    en: ["Spot clouds that warn of a thunderstorm", "Work out how far away lightning is", "Choose a safe place in a storm"],
    hy: ["Նկատել ամպրոպի մասին զգուշացնող ամպերը", "Հաշվել, թե որքան հեռու է կայծակը", "Ամպրոպի ժամանակ ընտրել անվտանգ տեղ"],
    ru: ["Замечать облака, предупреждающие о грозе", "Вычислять, как далеко молния", "Выбирать безопасное место в грозу"],
  },
  body: {
    en: `Summer storms in the mountains of Armenia can build up in less than an hour: a sunny morning, puffy clouds at lunchtime, thunder in the afternoon. Lightning is beautiful, but it is also one of nature's most dangerous forces. The good news: you can see a storm coming, measure how far away it is, and know exactly where to hide.

~~~sim
safety level=care
- When thunder roars, go indoors. If you can hear thunder, you can be struck.
- Never shelter under a lone tree, near metal fences or on hilltops. Get out of water.
- Stay off corded phones and away from taps and showers during a storm.
- If someone is struck by lightning, call 112. It is safe to touch them: their body does not hold electricity. Start CPR if they are not breathing.
~~~

## Reading the clouds

| What you see | What it means |
|---|---|
| small, flat-bottomed puffy clouds | fair weather |
| puffy clouds growing taller and taller by midday | a storm may build in the afternoon |
| a huge, dark tower with a flat, spreading top like an anvil | a thunderstorm cloud: take shelter soon |
| a sudden cold gust of wind and a dark grey wall | the storm is arriving now |

## Step by step

~~~sim
mechanism thunder
~~~

**Why divide by 3?** Light from the flash reaches you almost instantly. Sound is much slower: it travels about 343 metres a second, so it needs about 3 seconds for every kilometre. Counting the seconds is like measuring with sound.

**Caught outside with no shelter?** Get off peaks and ridges, keep away from tall single trees and metal, and don't lie flat on the ground. If you are in a group, spread out a few metres apart.

> 💡 **Did you know?** A lightning bolt is about 30,000 °C, around five times hotter than the surface of the Sun. It heats the air so fast that the air bursts outwards with a bang, and that bang is the thunder. Around the whole Earth, lightning strikes about 40 to 50 times every second.

~~~sim
sort
In a thunderstorm: safe place or not?
# Safe | Not safe
- Inside a house = 1
- Inside a car with a metal roof = 1
- Inside a big shopping centre = 1
- Under a lone tree = 2
- Swimming in a lake = 2
- On top of a hill = 2
> Buildings and metal-roofed cars are safe. Tall, lonely, high or wet places are where lightning strikes.
~~~

## Practice

1. Next time there is a storm, count the seconds between flash and thunder several times. Is the storm coming closer or moving away?
2. Take photos of clouds for a week and match them to the weather a few hours later.
3. Plan where your family would shelter during a storm on your favourite walk or picnic spot.`,
    hy: `Հայաստանի լեռներում ամառային ամպրոպները կարող են ձևավորվել մեկ ժամից էլ քիչ ժամանակում․ արևոտ առավոտ, ճաշին՝ փափուկ ամպեր, կեսօրից հետո՝ որոտ։ Կայծակը գեղեցիկ է, բայց նաև բնության ամենավտանգավոր ուժերից է։ Լավ լուրն այն է, որ կարող ես տեսնել մոտեցող ամպրոպը, չափել, թե որքան հեռու է, և ճշգրիտ իմանալ, թե որտեղ թաքնվել։

~~~sim
safety level=care
- Երբ որոտում է, մտի՛ր ներս։ Եթե որոտ ես լսում, կայծակը կարող է քեզ խփել։
- Երբեք մի՛ թաքնվիր միայնակ ծառի տակ, մետաղե ցանկապատերի մոտ կամ բլուրների գագաթներին։ Դուրս եկի՛ր ջրից։
- Ամպրոպի ժամանակ մի՛ օգտագործիր լարով հեռախոսներ և հեռու մնա ծորակներից ու լոգախցիկից։
- Եթե մեկին կայծակ է խփել, զանգի՛ր 112։ Նրան դիպչելն անվտանգ է․ մարմինն էլեկտրականություն չի պահում։ Եթե չի շնչում, սկսի՛ր սրտի մերսումը։
~~~

## Ամպերը կարդալը

| Ինչ ես տեսնում | Ինչ է դա նշանակում |
|---|---|
| փոքր, հարթ հատակով փափուկ ամպեր | լավ եղանակ |
| փափուկ ամպեր, որոնք մինչև կեսօր ավելի ու ավելի են բարձրանում | կեսօրից հետո կարող է ամպրոպ լինել |
| հսկայական մութ աշտարակ՝ սալի պես հարթ, տարածվող գագաթով | ամպրոպային ամպ է․ շուտով ապաստան գտի՛ր |
| քամու հանկարծակի սառը պոռթկում և մուգ մոխրագույն պատ | ամպրոպն արդեն գալիս է |

## Քայլ առ քայլ

~~~sim
mechanism thunder
~~~

**Ինչո՞ւ բաժանել 3-ի։** Փայլատակման լույսը քեզ հասնում է գրեթե ակնթարթորեն։ Ձայնը շատ ավելի դանդաղ է․ այն վայրկյանում անցնում է մոտ 343 մետր, ուստի յուրաքանչյուր կիլոմետրի համար պետք է մոտ 3 վայրկյան։ Վայրկյանները հաշվելը նման է ձայնով չափելուն։

**Դրսում ես, և ապաստան չկա՞։** Իջի՛ր գագաթներից և լեռնաշղթաներից, հեռու մնա բարձր միայնակ ծառերից և մետաղից և մի՛ պառկիր գետնին։ Եթե խմբով եք, ցրվե՛ք իրարից մի քանի մետր հեռավորությամբ։

> 💡 **Հետաքրքիր է իմանալ։** Կայծակի ջերմաստիճանը մոտ 30 000 °C է՝ մոտավորապես հինգ անգամ ավելի տաք, քան Արևի մակերևույթը։ Այն օդն այնքան արագ է տաքացնում, որ օդը պայթյունով ընդարձակվում է, և այդ պայթյունն էլ որոտն է։ Ամբողջ Երկրի վրա կայծակը խփում է վայրկյանում մոտ 40–50 անգամ։

~~~sim
sort
Ամպրոպի ժամանակ․ անվտա՞նգ տեղ է, թե՞ ոչ։
# Անվտանգ է | Անվտանգ չէ
- Տան ներսում = 1
- Մետաղե տանիքով մեքենայի ներսում = 1
- Մեծ առևտրի կենտրոնի ներսում = 1
- Միայնակ ծառի տակ = 2
- Լճում լողալիս = 2
- Բլրի գագաթին = 2
> Շենքերն ու մետաղե տանիքով մեքենաներն անվտանգ են։ Կայծակը խփում է բարձր, միայնակ, վերևում գտնվող կամ թաց տեղերին։
~~~

## Առաջադրանքներ

1. Հաջորդ ամպրոպի ժամանակ մի քանի անգամ հաշվի՛ր վայրկյանները փայլատակման և որոտի միջև։ Ամպրոպը մոտենու՞մ է, թե՞ հեռանում։
2. Մեկ շաբաթ լուսանկարի՛ր ամպերը և համեմատի՛ր մի քանի ժամ անց եղած եղանակի հետ։
3. Պլանավորի՛ր, թե որտեղ կթաքնվի ընտանիքդ ամպրոպի ժամանակ՝ ձեր սիրելի զբոսանքի կամ պիկնիկի վայրում։`,
    ru: `Летние грозы в горах Армении могут собраться меньше чем за час: солнечное утро, кучевые облака в обед, гром после полудня. Молния красива, но это одна из самых опасных сил природы. Хорошая новость: грозу можно увидеть заранее, измерить, как далеко она, и точно знать, где укрыться.

~~~sim
safety level=care
- Гром гремит — иди в помещение. Если слышишь гром, молния может попасть в тебя.
- Никогда не прячься под одиноким деревом, у металлических заборов или на вершинах холмов. Выйди из воды.
- Во время грозы не пользуйся проводными телефонами и держись подальше от кранов и душа.
- Если в человека ударила молния, звони 112. Касаться его безопасно: тело не хранит электричество. Если он не дышит, начинай реанимацию.
~~~

## Как читать облака

| Что видишь | Что это значит |
|---|---|
| небольшие пушистые облака с плоским дном | хорошая погода |
| пушистые облака к полудню растут всё выше | после обеда может собраться гроза |
| огромная тёмная башня с плоской расползающейся вершиной, как наковальня | грозовое облако: скоро ищи укрытие |
| внезапный холодный порыв ветра и тёмно-серая стена | гроза уже идёт |

## Шаг за шагом

~~~sim
mechanism thunder
~~~

**Почему делить на 3?** Свет от вспышки доходит почти мгновенно. Звук гораздо медленнее: он проходит около 343 метров в секунду, то есть на каждый километр ему нужно примерно 3 секунды. Считать секунды — значит мерить расстояние звуком.

**Застала гроза на открытом месте?** Уйди с вершин и гребней, держись подальше от высоких одиноких деревьев и металла и не ложись на землю. Если вы группой, разойдитесь на несколько метров друг от друга.

> 💡 **Интересно знать.** Температура молнии около 30 000 °C — примерно в пять раз горячее поверхности Солнца. Она так быстро нагревает воздух, что тот взрывом расширяется, и этот взрыв — гром. На всей Земле молнии бьют примерно 40–50 раз каждую секунду.

~~~sim
sort
В грозу: безопасное место или нет?
# Безопасно | Опасно
- В доме = 1
- В машине с металлической крышей = 1
- В большом торговом центре = 1
- Под одиноким деревом = 2
- Купаться в озере = 2
- На вершине холма = 2
> Здания и машины с металлической крышей безопасны. Молния бьёт в высокие, одинокие, возвышенные или мокрые места.
~~~

## Задания

1. В следующую грозу несколько раз посчитай секунды между вспышкой и громом. Гроза приближается или уходит?
2. Неделю фотографируй облака и сравнивай их с погодой через несколько часов.
3. Продумай, где ваша семья укроется от грозы на любимом месте для прогулок или пикника.`,
  },
  quiz: [
    q(t("You count 12 seconds between the flash and the thunder. How far is the lightning?", "Փայլատակման և որոտի միջև հաշվում ես 12 վայրկյան։ Որքա՞ն հեռու է կայծակը։", "Между вспышкой и громом прошло 12 секунд. Как далеко молния?"), [t("About 1 km", "Մոտ 1 կմ", "Около 1 км"), t("About 4 km", "Մոտ 4 կմ", "Около 4 км"), t("About 12 km", "Մոտ 12 կմ", "Около 12 км")], 1, t("12 ÷ 3 = 4, so about 4 km.", "12 ÷ 3 = 4, ուրեմն մոտ 4 կմ։", "12 ÷ 3 = 4, значит около 4 км.")),
    q(t("Which is the safest place in a storm?", "Ո՞րն է ամենաանվտանգ տեղն ամպրոպի ժամանակ։", "Где безопаснее всего в грозу?"), [t("Under a big tree", "Մեծ ծառի տակ", "Под большим деревом"), t("Inside a building", "Շենքի ներսում", "В здании"), t("On an open football pitch", "Բաց ֆուտբոլի դաշտում", "На открытом футбольном поле")], 1),
    q(t("How long should you wait after the last thunder before going out?", "Վերջին որոտից հետո որքա՞ն պետք է սպասել, նախքան դուրս գալը։", "Сколько ждать после последнего грома, прежде чем выйти?"), [t("1 minute", "1 րոպե", "1 минуту"), t("30 minutes", "30 րոպե", "30 минут"), t("No need to wait", "Սպասել պետք չէ", "Можно не ждать")], 1),
    order(t("Put these clouds in the order a storm builds.", "Դասավորի՛ր ամպերն այն հերթականությամբ, ինչպես ձևավորվում է ամպրոպը։", "Расставь облака в порядке развития грозы."), [
      t("Small puffy clouds", "Փոքր փափուկ ամպեր", "Небольшие кучевые облака"),
      t("Puffy clouds growing taller", "Բարձրացող փափուկ ամպեր", "Растущие ввысь кучевые облака"),
      t("A dark tower with an anvil top", "Մութ աշտարակ՝ սալաձև գագաթով", "Тёмная башня с вершиной-наковальней"),
      t("Cold gust and heavy rain", "Սառը պոռթկում և հորդառատ անձրև", "Холодный порыв и ливень"),
    ]),
    q(t("Someone has been struck by lightning. Is it safe to touch them?", "Մեկին կայծակ է խփել։ Անվտա՞նգ է նրան դիպչել։", "В человека ударила молния. Можно ли его трогать?"), [t("Yes, the body holds no electricity: help and call 112", "Այո, մարմինն էլեկտրականություն չի պահում․ օգնի՛ր և զանգի՛ր 112", "Да, тело не хранит электричество: помогай и звони 112"), t("No, wait an hour", "Ոչ, մեկ ժամ սպասել", "Нет, подождать час"), t("Only with rubber gloves", "Միայն ռետինե ձեռնոցներով", "Только в резиновых перчатках")], 0),
    match(t("Match the fact to the number.", "Միացրո՛ւ փաստը թվի հետ։", "Соедини факт с числом."), [
      [t("Seconds sound needs for 1 km", "Վայրկյաններ, որ ձայնին պետք են 1 կմ-ի համար", "Секунд нужно звуку на 1 км"), t("3", "3", "3")],
      [t("Minutes to wait after the last thunder", "Րոպեներ սպասելու վերջին որոտից հետո", "Минут ждать после последнего грома"), t("30", "30", "30")],
      [t("Temperature of lightning, °C", "Կայծակի ջերմաստիճանը, °C", "Температура молнии, °C"), t("30,000", "30 000", "30 000")],
    ]),
  ],
});

export const howtoGrade8 = howtoCourse(
  8,
  {
    title: ["Saving lives and reading the sky", "Կյանք փրկել և կարդալ երկինքը", "Спасать жизни и читать небо"],
    summary: [
      "Give hands-only CPR, help someone who is choking, and stay safe when a thunderstorm comes.",
      "Կատարել սրտի մերսում ձեռքերով, օգնել շնչահեղձ եղողին և անվտանգ մնալ ամպրոպի ժամանակ։",
      "Делать реанимацию руками, помогать подавившемуся и не пострадать в грозу.",
    ],
  },
  [cprLesson, chokingLesson, thunderLesson],
);
