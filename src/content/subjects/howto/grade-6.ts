import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const earthquake = howto({
  slug: "earthquake-safety",
  title: ["What to do in an earthquake", "Ինչ անել երկրաշարժի ժամանակ", "Что делать при землетрясении"],
  goals: {
    en: ["Do drop, cover and hold on without thinking", "Leave a building safely after the shaking stops", "Pack a go-bag and make a family plan"],
    hy: ["Առանց մտածելու անել՝ պառկի՛ր, ծածկվի՛ր, բռնվի՛ր", "Ցնցումը դադարելուց հետո անվտանգ դուրս գալ շենքից", "Պատրաստել արտակարգ պայուսակ և ընտանեկան պլան"],
    ru: ["Не раздумывая выполнять «пригнись, укройся, держись»", "Безопасно выйти из здания после толчков", "Собрать тревожный рюкзак и составить семейный план"],
  },
  body: {
    en: `Armenia lies where two huge pieces of the Earth's crust, the Arabian and the Eurasian plates, push against each other. That is why the country has mountains, hot springs and earthquakes. Most quakes are so small that nobody feels them, but a strong one can come any day, so every family here needs a plan, and every pupil needs to know what to do **in the first seconds**.

~~~sim
safety level=care
- When it shakes, don't run: most injuries come from falling things and from people rushing to the stairs.
- Never use a lift during or after an earthquake.
- If you smell gas or see sparks after the quake, tell an adult and leave the building.
- Follow your school's drill and your teacher's instructions.
~~~

## Step by step

~~~sim
mechanism earthquake
~~~

**What about doorways?** In old mud-brick houses a doorway was the strongest part of the wall. In modern buildings it isn't, and a swinging door can hurt you. A strong table is better.

**If you are outside**, move away from buildings, trees, walls and power lines, then drop to the ground and cover your head. **If you are in bed**, stay there and cover your head with a pillow.

## The go-bag

A **go-bag** (emergency bag) is a backpack packed in advance that you can grab in seconds:

- water (2 litres per person) and food that doesn't spoil;
- a torch, a power bank and spare batteries;
- a first-aid kit and any medicines you take every day;
- warm clothes, a raincoat, sturdy shoes;
- a whistle, copies of documents and family phone numbers on paper.

Agree with your family on a **meeting place** outside, in case you are not together when it happens.

> 💡 **Did you know?** On 7 December 1988 a strong earthquake hit northern Armenia. The towns of Spitak, Gyumri and Vanadzor were badly damaged, and about 25,000 people lost their lives. People from more than a hundred countries came to help. After it, Armenia and the world changed how they build houses and how they teach children to act in an earthquake.

~~~sim
sort
During the shaking: do it or don't?
# Do it | Don't do it
- Crawl under a strong table = 1
- Cover your head and neck with your arms = 1
- Stay away from windows = 1
- Run down the stairs while it shakes = 2
- Take the lift = 2
- Stand next to a tall bookcase = 2
> Drop, cover, hold on, and stay where you are until the shaking stops.
~~~

## Practice

1. Find the safest place in each room of your home: a strong table, an inside wall away from windows. Practise getting there in 3 seconds.
2. Make a go-bag list for your family and check what you already have at home.
3. Agree on a meeting place with your family, and learn the phone number of a relative who lives in another town.`,
    hy: `Հայաստանը գտնվում է այնտեղ, որտեղ Երկրի կեղևի երկու հսկայական մաս՝ Արաբական և Եվրասիական սալերը, սեղմվում են միմյանց։ Դրա համար էլ երկրում կան լեռներ, տաք աղբյուրներ և երկրաշարժեր։ Ցնցումների մեծ մասն այնքան թույլ է, որ ոչ ոք չի զգում, բայց ուժեղը կարող է լինել ցանկացած օր, ուստի այստեղ ամեն ընտանիք պլանի կարիք ունի, և ամեն աշակերտ պետք է իմանա, թե ինչ անել **առաջին վայրկյաններին**։

~~~sim
safety level=care
- Երբ ցնցում է, մի՛ վազիր․ վնասվածքների մեծ մասն ընկնող առարկաներից և դեպի աստիճանները շտապող մարդկանցից է։
- Երբեք վերելակ մի՛ նստիր երկրաշարժի ժամանակ կամ դրանից հետո։
- Եթե երկրաշարժից հետո գազի հոտ ես զգում կամ կայծեր ես տեսնում, ասա՛ մեծահասակին և դուրս եկի՛ր շենքից։
- Հետևի՛ր դպրոցի վարժանքին և ուսուցչիդ ցուցումներին։
~~~

## Քայլ առ քայլ

~~~sim
mechanism earthquake
~~~

**Իսկ դռան շրջանակի տա՞կ։** Հին կավաշեն տներում դռան շրջանակը պատի ամենաամուր մասն էր։ Ժամանակակից շենքերում այդպես չէ, իսկ ճոճվող դուռը կարող է վնասել քեզ։ Ամուր սեղանն ավելի լավ է։

**Եթե դրսում ես**, հեռացի՛ր շենքերից, ծառերից, պատերից և էլեկտրալարերից, հետո պառկի՛ր գետնին և ծածկի՛ր գլուխդ։ **Եթե անկողնում ես**, մնա՛ այնտեղ և բարձով ծածկի՛ր գլուխդ։

## Արտակարգ պայուսակ

**Արտակարգ պայուսակը** նախապես հավաքված ուսապարկ է, որը կարող ես վերցնել մի քանի վայրկյանում․

- ջուր (յուրաքանչյուր մարդու համար 2 լիտր) և չփչացող սնունդ,
- լապտեր, լիցքավորման մարտկոց և պահեստային մարտկոցներ,
- առաջին օգնության դեղատուփ և ամեն օր ընդունվող դեղերը,
- տաք հագուստ, անձրևանոց, ամուր կոշիկ,
- սուլիչ, փաստաթղթերի պատճեններ և ընտանիքի հեռախոսահամարները թղթի վրա։

Ընտանիքիդ հետ պայմանավորվի՛ր դրսում **հանդիպման վայրի** մասին, եթե երկրաշարժի պահին միասին չլինեք։

> 💡 **Հետաքրքիր է իմանալ։** 1988 թվականի դեկտեմբերի 7-ին ուժեղ երկրաշարժ տեղի ունեցավ Հայաստանի հյուսիսում։ Սպիտակը, Գյումրին և Վանաձորը մեծ ավերածություններ կրեցին, և զոհվեց մոտ 25 000 մարդ։ Օգնության եկան հարյուրից ավելի երկրների մարդիկ։ Դրանից հետո Հայաստանն ու աշխարհը փոխեցին տներ կառուցելու և երեխաներին երկրաշարժի ժամանակ գործել սովորեցնելու ձևերը։

~~~sim
sort
Ցնցման ժամանակ․ անե՞լ, թե՞ ոչ։
# Արա՛ | Մի՛ արա
- Սողալ ամուր սեղանի տակ = 1
- Ձեռքերով ծածկել գլուխն ու պարանոցը = 1
- Հեռու մնալ պատուհաններից = 1
- Վազել աստիճաններով, քանի դեռ ցնցում է = 2
- Նստել վերելակ = 2
- Կանգնել բարձր գրապահարանի կողքին = 2
> Պառկի՛ր, ծածկվի՛ր, բռնվի՛ր և մնա՛ տեղում, մինչև ցնցումը դադարի։
~~~

## Առաջադրանքներ

1. Տանդ ամեն սենյակում գտի՛ր ամենաանվտանգ տեղը՝ ամուր սեղան, ներքին պատ՝ պատուհաններից հեռու։ Վարժվի՛ր այնտեղ հասնել 3 վայրկյանում։
2. Ընտանիքիդ համար կազմի՛ր արտակարգ պայուսակի ցուցակը և ստուգի՛ր, թե տանն արդեն ինչ ունեք։
3. Ընտանիքիդ հետ պայմանավորվի՛ր հանդիպման վայրի մասին և սովորի՛ր այլ քաղաքում ապրող ազգականի հեռախոսահամարը։`,
    ru: `Армения находится там, где две огромные части земной коры — Аравийская и Евразийская плиты — давят друг на друга. Поэтому здесь есть горы, горячие источники и землетрясения. Большинство толчков такие слабые, что их никто не чувствует, но сильный может случиться в любой день, поэтому каждой семье нужен план, а каждому ученику — знать, что делать **в первые секунды**.

~~~sim
safety level=care
- Когда трясёт, не беги: большинство травм — от падающих предметов и от людей, которые бросаются к лестнице.
- Никогда не пользуйся лифтом во время и после землетрясения.
- Если после толчков пахнет газом или видны искры, скажи взрослому и выходи из здания.
- Следуй школьным учениям и указаниям учителя.
~~~

## Шаг за шагом

~~~sim
mechanism earthquake
~~~

**А как же дверной проём?** В старых домах из сырцового кирпича дверной проём был самой прочной частью стены. В современных домах это не так, а распахнувшаяся дверь может ударить. Прочный стол лучше.

**Если ты на улице**, отойди от зданий, деревьев, стен и проводов, потом пригнись к земле и закрой голову. **Если ты в кровати**, оставайся в ней и закрой голову подушкой.

## Тревожный рюкзак

**Тревожный рюкзак** — заранее собранный рюкзак, который можно схватить за секунды:

- вода (2 литра на человека) и непортящаяся еда;
- фонарик, пауэрбанк и запасные батарейки;
- аптечка и лекарства, которые кто-то принимает каждый день;
- тёплая одежда, дождевик, крепкая обувь;
- свисток, копии документов и номера телефонов семьи на бумаге.

Договорись с семьёй о **месте встречи** на улице на случай, если в момент землетрясения вы будете не вместе.

> 💡 **Интересно знать.** 7 декабря 1988 года на севере Армении произошло сильное землетрясение. Спитак, Гюмри и Ванадзор были сильно разрушены, погибли около 25 000 человек. На помощь приехали люди из более чем ста стран. После этого Армения и весь мир изменили то, как строят дома и как учат детей действовать при землетрясении.

~~~sim
sort
Во время толчков: делать или нет?
# Делай | Не делай
- Залезть под прочный стол = 1
- Закрыть руками голову и шею = 1
- Держаться подальше от окон = 1
- Бежать по лестнице, пока трясёт = 2
- Поехать на лифте = 2
- Встать рядом с высоким книжным шкафом = 2
> Пригнись, укройся, держись — и оставайся на месте, пока толчки не прекратятся.
~~~

## Задания

1. Найди самое безопасное место в каждой комнате дома: прочный стол, внутренняя стена подальше от окон. Потренируйся добираться туда за 3 секунды.
2. Составь для семьи список вещей для тревожного рюкзака и проверь, что уже есть дома.
3. Договорись с семьёй о месте встречи и выучи номер телефона родственника, который живёт в другом городе.`,
  },
  quiz: [
    q(t("The floor starts to shake in class. What do you do first?", "Դասարանում հատակը սկսում է ցնցվել։ Ի՞նչ ես անում առաջինը։", "В классе начинает трястись пол. Что ты делаешь первым делом?"), [t("Run to the door", "Վազում եմ դեպի դուռը", "Бегу к двери"), t("Drop, get under the desk and hold on", "Պառկում եմ, մտնում գրասեղանի տակ և բռնվում", "Пригибаюсь, залезаю под парту и держусь"), t("Stand by the window to look", "Կանգնում եմ պատուհանի մոտ նայելու", "Встаю у окна посмотреть")], 1),
    q(t("Why shouldn't you use the lift after an earthquake?", "Ինչո՞ւ չի կարելի երկրաշարժից հետո վերելակ նստել։", "Почему нельзя ехать на лифте после землетрясения?"), [t("It may stop or be damaged, and you could get stuck", "Այն կարող է կանգնել կամ վնասված լինել, և կարող ես փակվել", "Он может остановиться или быть повреждён, и ты застрянешь"), t("Lifts are only for adults", "Վերելակները միայն մեծերի համար են", "Лифты только для взрослых"), t("It is too slow", "Այն շատ դանդաղ է", "Он слишком медленный")], 0),
    q(t("You are in the park when it starts to shake. Where should you go?", "Այգում ես, երբ սկսում է ցնցել։ Ո՞ւր պետք է գնաս։", "Ты в парке, и начинает трясти. Куда идти?"), [t("Into the nearest building", "Մոտակա շենքը", "В ближайшее здание"), t("Under a big tree", "Մեծ ծառի տակ", "Под большое дерево"), t("To an open place away from buildings and wires", "Բաց տեղ՝ շենքերից և լարերից հեռու", "На открытое место подальше от зданий и проводов")], 2),
    order(t("Put the actions in order.", "Դասավորի՛ր գործողությունները ճիշտ հերթականությամբ։", "Расставь действия по порядку."), [
      t("Drop to your hands and knees", "Պառկել ձեռքերի և ծնկների վրա", "Встать на руки и колени"),
      t("Cover under a strong table", "Ծածկվել ամուր սեղանի տակ", "Укрыться под прочным столом"),
      t("Hold on until the shaking stops", "Բռնվել, մինչև ցնցումը դադարի", "Держаться, пока не стихнет"),
      t("Wait a minute for aftershocks", "Մեկ րոպե սպասել հետցնցումներին", "Подождать минуту на случай повторных толчков"),
      t("Leave calmly by the stairs", "Հանգիստ դուրս գալ աստիճաններով", "Спокойно выйти по лестнице"),
    ]),
    q(t("Which of these does NOT belong in a go-bag?", "Սրանցից ո՞րն արտակարգ պայուսակի մեջ չի մտնում։", "Что из этого НЕ нужно в тревожном рюкзаке?"), [t("A torch", "Լապտեր", "Фонарик"), t("Water", "Ջուր", "Вода"), t("A heavy games console", "Ծանր խաղային կոնսոլ", "Тяжёлая игровая приставка")], 2),
    match(t("Match the place to what you do there when it shakes.", "Միացրո՛ւ վայրը նրա հետ, թե ինչ ես անում այնտեղ ցնցման ժամանակ։", "Соедини место с тем, что делать там при толчках."), [
      [t("In class", "Դասարանում", "В классе"), t("Get under your desk and hold on", "Մտնել գրասեղանի տակ և բռնվել", "Залезть под парту и держаться")],
      [t("In bed", "Անկողնում", "В кровати"), t("Stay and cover your head with a pillow", "Մնալ և բարձով ծածկել գլուխը", "Остаться и закрыть голову подушкой")],
      [t("Outside", "Դրսում", "На улице"), t("Move away from buildings and wires", "Հեռանալ շենքերից և լարերից", "Отойти от зданий и проводов")],
    ]),
  ],
});

const burns = howto({
  slug: "burn-first-aid",
  title: ["First aid for a burn", "Առաջին օգնություն այրվածքի դեպքում", "Первая помощь при ожоге"],
  goals: {
    en: ["Cool a small burn the right way, for 20 minutes", "Know which home \"remedies\" make burns worse", "Recognise when a burn needs a doctor"],
    hy: ["Փոքր այրվածքը ճիշտ սառեցնել՝ 20 րոպե", "Իմանալ, թե տնային ո՞ր «միջոցներն» են վատացնում այրվածքը", "Ճանաչել, թե երբ է այրվածքին բժիշկ պետք"],
    ru: ["Правильно охлаждать небольшой ожог — 20 минут", "Знать, какие «домашние средства» делают ожог хуже", "Понимать, когда с ожогом нужно к врачу"],
  },
  body: {
    en: `A hot pan, a splash of boiling water, the steam from a kettle: burns are one of the most common accidents at home, and children get them more often than adults. The good news is that the right first aid is simple, and it makes a huge difference to how fast the skin heals.

~~~sim
safety level=ask
- Always tell an adult about a burn, even a small one.
- Call 112 at once if the burn is large, on the face, or from electricity or chemicals, or if someone's clothes are on fire.
- Clothes on fire: **stop, drop and roll** on the ground to smother the flames.
~~~

## Step by step

~~~sim
mechanism burn
~~~

## Why cool water, and why so long?

Hot skin keeps "cooking" inside for several minutes after you touch something hot. Cool running water takes that heat away and stops the damage going deeper. Ice is too cold: it can damage skin even more. Butter and oil hold the heat in, and they can bring germs into the wound.

## When does a burn need a doctor?

| Small burn: first aid at home | Go to a doctor or call 112 |
|---|---|
| red skin, stings | bigger than the palm of the hurt person's hand |
| one small blister | on the face, hands, feet or joints |
| | from electricity or chemicals |
| | white, grey or black skin, even if it doesn't hurt |

> 💡 **Did you know?** Scientists in Australia tested different ways of cooling burns and found that 20 minutes of cool running water worked best. It still helped even when it was started up to 3 hours after the burn. So it's never too late to cool!

~~~sim
sort
For a burn: does it help or harm?
# Helps | Harms
- Cool running water for 20 minutes = 1
- Loosely laid cling film = 1
- Taking off a ring near the burn = 1
- Ice cubes = 2
- Butter or oil = 2
- Popping the blisters = 2
> Cool it, uncover it, cover it loosely. Ice, butter and popping blisters all make burns worse.
~~~

## Practice

1. Walk around your kitchen with an adult. Turn all pan handles inwards and move the kettle cord out of reach.
2. Find cling film and a clean cloth at home and put them in a place everyone knows.
3. Practise "stop, drop and roll" on a soft carpet, covering your face with your hands.`,
    hy: `Տաք թավա, եռման ջրի ցայտ, թեյնիկի գոլորշի․ այրվածքները տանն ամենահաճախ պատահող դժբախտ դեպքերից են, և երեխաներն ավելի հաճախ են այրվում, քան մեծերը։ Լավ լուրն այն է, որ ճիշտ առաջին օգնությունը պարզ է և շատ է ազդում այն բանի վրա, թե որքան արագ կլավանա մաշկը։

~~~sim
safety level=ask
- Միշտ ասա՛ մեծահասակին այրվածքի մասին, նույնիսկ փոքրի։
- Անմիջապես զանգի՛ր 112, եթե այրվածքը մեծ է, դեմքին է, էլեկտրականությունից կամ քիմիական նյութից է, կամ եթե մեկի հագուստը վառվում է։
- Հագուստը վառվում է․ **կանգնի՛ր, պառկի՛ր և գլորվի՛ր** գետնին, որ բոցը հանգչի։
~~~

## Քայլ առ քայլ

~~~sim
mechanism burn
~~~

## Ինչո՞ւ սառը ջուր և ինչո՞ւ այդքան երկար

Տաք մաշկը տաք բանին դիպչելուց հետո դեռ մի քանի րոպե ներսից «եփվում» է։ Սառը հոսող ջուրը տանում է այդ ջերմությունը և թույլ չի տալիս, որ վնասը խորանա։ Սառույցը չափազանց սառն է և կարող է մաշկն ավելի վնասել։ Կարագն ու յուղը պահում են տաքությունը և կարող են մանրէներ մտցնել վերքի մեջ։

## Ե՞րբ է այրվածքին բժիշկ պետք

| Փոքր այրվածք․ առաջին օգնություն տանը | Գնա՛ բժշկի կամ զանգի՛ր 112 |
|---|---|
| կարմիր մաշկ, այրոց | ավելի մեծ է, քան տուժածի ափը |
| մեկ փոքր բշտիկ | դեմքին, ձեռքերին, ոտքերին կամ հոդերին է |
| | էլեկտրականությունից կամ քիմիական նյութից է |
| | մաշկը սպիտակ է, մոխրագույն կամ սև, նույնիսկ եթե չի ցավում |

> 💡 **Հետաքրքիր է իմանալ։** Ավստրալիացի գիտնականները փորձարկեցին այրվածքները սառեցնելու տարբեր եղանակներ և պարզեցին, որ լավագույնը 20 րոպե սառը հոսող ջուրն է։ Այն օգնում էր նույնիսկ այն դեպքում, երբ սկսում էին այրվածքից 3 ժամ հետո։ Ուրեմն սառեցնելն երբեք ուշ չէ։

~~~sim
sort
Այրվածքի դեպքում․ օգնու՞մ է, թե՞ վնասում։
# Օգնում է | Վնասում է
- 20 րոպե սառը հոսող ջուր = 1
- Թեթևակի դրված սննդային թաղանթ = 1
- Այրվածքի մոտ մատանին հանելը = 1
- Սառույցի կտորներ = 2
- Կարագ կամ յուղ = 2
- Բշտիկները պայթեցնելը = 2
> Սառեցրու, բաց արա, թեթևակի ծածկի՛ր։ Սառույցը, կարագը և բշտիկները պայթեցնելը վատացնում են այրվածքը։
~~~

## Առաջադրանքներ

1. Մեծահասակի հետ շրջի՛ր խոհանոցում։ Բոլոր թավաների բռնակները շրջի՛ր դեպի ներս, իսկ թեյնիկի լարը հեռացրո՛ւ ձեռքի տակից։
2. Տանը գտի՛ր սննդային թաղանթ և մաքուր կտոր և դրանք դի՛ր այնպիսի տեղ, որ բոլորն իմանան։
3. Փափուկ գորգի վրա վարժվի՛ր «կանգնի՛ր, պառկի՛ր, գլորվի՛ր»՝ ձեռքերով ծածկելով դեմքդ։`,
    ru: `Горячая сковородка, брызги кипятка, пар из чайника — ожоги одни из самых частых травм дома, и дети обжигаются чаще взрослых. Хорошая новость: правильная первая помощь простая, и от неё очень зависит, как быстро заживёт кожа.

~~~sim
safety level=ask
- Всегда говори взрослому об ожоге, даже о маленьком.
- Сразу звони 112, если ожог большой, на лице, от электричества или химии, или если на ком-то горит одежда.
- Горит одежда: **остановись, упади и катайся** по земле, чтобы сбить пламя.
~~~

## Шаг за шагом

~~~sim
mechanism burn
~~~

## Почему прохладная вода и почему так долго?

Горячая кожа ещё несколько минут продолжает «вариться» изнутри после прикосновения к горячему. Прохладная проточная вода забирает это тепло и не даёт повреждению уйти глубже. Лёд слишком холодный: он может повредить кожу ещё сильнее. Масло удерживает тепло и может занести в рану микробов.

## Когда с ожогом нужно к врачу?

| Небольшой ожог: помощь дома | К врачу или звонить 112 |
|---|---|
| кожа красная, щиплет | больше ладони пострадавшего |
| один небольшой пузырь | на лице, кистях, стопах или суставах |
| | от электричества или химии |
| | кожа белая, серая или чёрная, даже если не болит |

> 💡 **Интересно знать.** Учёные в Австралии сравнили разные способы охлаждения ожогов и выяснили, что лучше всего работают 20 минут прохладной проточной воды. Это помогало, даже если начинали через 3 часа после ожога. Так что охлаждать никогда не поздно!

~~~sim
sort
При ожоге: это помогает или вредит?
# Помогает | Вредит
- Прохладная проточная вода 20 минут = 1
- Неплотно наложенная пищевая плёнка = 1
- Снять кольцо рядом с ожогом = 1
- Кубики льда = 2
- Сливочное или растительное масло = 2
- Проколоть пузыри = 2
> Охлади, освободи, неплотно накрой. Лёд, масло и проколотые пузыри делают ожог хуже.
~~~

## Задания

1. Пройдись со взрослым по кухне. Поверни все ручки кастрюль и сковородок внутрь и убери шнур чайника подальше.
2. Найди дома пищевую плёнку и чистую ткань и положи их в место, которое знают все.
3. Потренируйся на мягком ковре «остановись, упади, катайся», закрыв лицо руками.`,
  },
  quiz: [
    q(t("What is the best first aid for a small burn?", "Ո՞րն է լավագույն առաջին օգնությունը փոքր այրվածքի դեպքում։", "Какая лучшая первая помощь при небольшом ожоге?"), [t("Cool running water for 20 minutes", "20 րոպե սառը հոսող ջուր", "Прохладная проточная вода 20 минут"), t("A lump of ice", "Սառույցի կտոր", "Кусок льда"), t("A layer of butter", "Կարագի շերտ", "Слой масла")], 0),
    q(t("Why take off a ring near the burn?", "Ինչո՞ւ հանել այրվածքի մոտ եղած մատանին։", "Зачем снимать кольцо рядом с ожогом?"), [t("The skin may swell and the ring get stuck", "Մաշկը կարող է ուռչել, և մատանին կխրվի", "Кожа может отечь, и кольцо застрянет"), t("Metal makes the burn spread", "Մետաղը տարածում է այրվածքը", "Металл распространяет ожог"), t("It looks nicer", "Այդպես ավելի գեղեցիկ է", "Так красивее")], 0),
    q(t("A burn is bigger than the hurt person's palm. What should you do?", "Այրվածքն ավելի մեծ է, քան տուժածի ափը։ Ի՞նչ պետք է անես։", "Ожог больше ладони пострадавшего. Что делать?"), [t("Just wait for it to heal", "Պարզապես սպասել, որ լավանա", "Просто ждать, пока заживёт"), t("Cool it and get a doctor or call 112", "Սառեցնել և դիմել բժշկի կամ զանգել 112", "Охладить и обратиться к врачу или позвонить 112"), t("Cover it with toothpaste", "Ծածկել ատամի մածուկով", "Намазать зубной пастой")], 1),
    order(t("Put the first-aid steps in order.", "Դասավորի՛ր առաջին օգնության քայլերը։", "Расставь шаги первой помощи по порядку."), [
      t("Move away from the heat", "Հեռանալ տաքից", "Отойти от жара"),
      t("Hold the burn under cool running water", "Այրվածքը պահել սառը հոսող ջրի տակ", "Подставить ожог под прохладную воду"),
      t("Take off rings and watches nearby", "Հանել մոտակա մատանիներն ու ժամացույցը", "Снять кольца и часы рядом"),
      t("Cover loosely with cling film", "Թեթևակի ծածկել սննդային թաղանթով", "Неплотно накрыть пищевой плёнкой"),
    ]),
    q(t("Someone's clothes catch fire. What should they do?", "Մեկի հագուստը բռնկվել է։ Ի՞նչ պետք է անի։", "У человека загорелась одежда. Что ему делать?"), [t("Run fast to put it out", "Արագ վազել, որ հանգչի", "Быстро бежать, чтобы потушить"), t("Stop, drop and roll", "Կանգնել, պառկել և գլորվել", "Остановиться, упасть и кататься"), t("Wave their arms", "Թափահարել ձեռքերը", "Махать руками")], 1, t("Running fans the flames with air. Rolling on the ground smothers them.", "Վազելիս օդը բորբոքում է բոցը։ Գետնին գլորվելը խեղդում է այն։", "При беге воздух раздувает пламя. Катание по земле сбивает его.")),
    match(t("Match the wrong remedy to why it is wrong.", "Միացրո՛ւ սխալ միջոցն այն պատճառի հետ, թե ինչու է սխալ։", "Соедини неправильное средство с тем, почему оно вредно."), [
      [t("Ice", "Սառույց", "Лёд"), t("Too cold, damages the skin more", "Չափազանց սառն է, ավելի է վնասում մաշկը", "Слишком холодный, ещё сильнее повреждает кожу")],
      [t("Butter", "Կարագ", "Масло"), t("Holds the heat in", "Պահում է տաքությունը", "Удерживает жар")],
      [t("Popping blisters", "Բշտիկները պայթեցնել", "Прокалывать пузыри"), t("Lets germs in", "Ներս է թողնում մանրէներին", "Пускает микробов внутрь")],
    ]),
  ],
});

const shelter = howto({
  slug: "lean-to-shelter",
  title: ["How to build a lean-to shelter", "Ինչպես սարքել թեք ապաստարան", "Как построить шалаш-навес"],
  goals: {
    en: ["Choose a safe place for a shelter", "Build a lean-to from fallen sticks and leaves", "Explain how a shelter keeps you warm and dry"],
    hy: ["Ընտրել անվտանգ տեղ ապաստարանի համար", "Ընկած ճյուղերից և տերևներից թեք ապաստարան սարքել", "Բացատրել, թե ինչպես է ապաստարանը քեզ տաք և չոր պահում"],
    ru: ["Выбрать безопасное место для укрытия", "Построить навес из упавших веток и листьев", "Объяснить, как укрытие сохраняет тепло и сухость"],
  },
  body: {
    en: `Building a den in the woods is great fun, and it is also a real survival skill. If you are ever caught outside by rain, wind or night, a simple shelter keeps you warm and dry until help comes. The easiest one is the **lean-to**: a sloping roof of sticks and leaves, leaning on a pole between two trees.

~~~sim
safety level=ask
- Practise in daylight, near home or a camp, with an adult nearby.
- Use only fallen, dead sticks and leaves. Don't cut or break living trees.
- Look up before you start: never build under dead branches or a leaning dead tree.
- Take your shelter apart when you leave, and scatter the sticks and leaves again.
~~~

## Step by step

~~~sim
mechanism leanto
~~~

## How a shelter keeps you warm

Your body loses heat in three main ways outside:

- **Wind** blows the warm air away from your body. The roof and walls stop it.
- **Wet** clothes chill you fast, because water carries heat away about 25 times faster than air. The leaf roof sheds the rain.
- **The cold ground** sucks heat out of anything touching it. A thick bed of dry leaves keeps you off it.

That is why the shelter should be **small**: just big enough for you, so your body can warm the air inside.

> 💡 **Did you know?** Survival teachers use the "rule of threes": a person can live about 3 minutes without air, about 3 hours without shelter in very bad weather, about 3 days without water and about 3 weeks without food. It is only a rough rule, but it shows why shelter comes even before water and food.

~~~sim
sort
Is it a good place for a shelter?
# Good spot | Bad spot
- Flat, dry ground = 1
- Behind a big rock that blocks the wind = 1
- Among healthy trees with no dead branches = 1
- In a dry stream bed = 2
- Under a dead tree = 2
- On a bare, windy hilltop = 2
> A good spot is flat, dry and sheltered. Stream beds can flood suddenly, and dead trees can drop branches.
~~~

## Practice

1. On a walk, look for two places that would be good for a shelter and two that would be bad, and explain why.
2. Build a mini lean-to for a toy on the balcony or in the garden from twigs and leaves, then pour a cup of water over it. Does the toy stay dry?
3. With an adult, build a real lean-to on a camping trip and lie inside it for 10 minutes. How does it feel?`,
    hy: `Անտառում թաքստոց սարքելը շատ հետաքրքիր է, և դա նաև գոյատևման իրական հմտություն է։ Եթե երբևէ անձրևը, քամին կամ գիշերը քեզ դրսում բռնեն, պարզ ապաստարանը քեզ տաք և չոր կպահի, մինչև օգնություն գա։ Ամենահեշտը **թեք ապաստարանն** է՝ ճյուղերից և տերևներից թեք տանիք, որը հենված է երկու ծառի միջև դրված ձողին։

~~~sim
safety level=ask
- Վարժվի՛ր ցերեկը՝ տան կամ ճամբարի մոտ, մեծահասակի ներկայությամբ։
- Օգտագործի՛ր միայն ընկած, չոր ճյուղեր և տերևներ։ Կենդանի ծառեր մի՛ կտրիր և մի՛ կոտրիր։
- Սկսելուց առաջ նայի՛ր վերև․ երբեք մի՛ սարքիր չոր ճյուղերի կամ թեքված չոր ծառի տակ։
- Գնալիս քանդի՛ր ապաստարանդ և ճյուղերն ու տերևները նորից ցրի՛ր։
~~~

## Քայլ առ քայլ

~~~sim
mechanism leanto
~~~

## Ինչպես է ապաստարանը քեզ տաք պահում

Դրսում մարմինդ ջերմություն է կորցնում երեք հիմնական ձևով․

- **Քամին** տանում է տաք օդը մարմնիցդ։ Տանիքն ու պատերը կանգնեցնում են այն։
- **Թաց** հագուստն արագ սառեցնում է, որովհետև ջուրը ջերմությունը տանում է մոտ 25 անգամ ավելի արագ, քան օդը։ Տերևե տանիքը հեռացնում է անձրևաջուրը։
- **Սառը գետինը** ծծում է ջերմությունն ամեն ինչից, որ դիպչում է իրեն։ Չոր տերևների հաստ անկողինը քեզ հեռու է պահում նրանից։

Դրա համար էլ ապաստարանը պետք է **փոքր** լինի՝ հենց քո չափով, որ մարմինդ կարողանա տաքացնել ներսի օդը։

> 💡 **Հետաքրքիր է իմանալ։** Գոյատևման ուսուցիչներն օգտագործում են «երեքի կանոնը»․ մարդը կարող է ապրել մոտ 3 րոպե առանց օդի, մոտ 3 ժամ առանց ապաստարանի շատ վատ եղանակին, մոտ 3 օր առանց ջրի և մոտ 3 շաբաթ առանց սննդի։ Սա միայն մոտավոր կանոն է, բայց ցույց է տալիս, թե ինչու է ապաստարանն ավելի կարևոր, քան նույնիսկ ջուրն ու սնունդը։

~~~sim
sort
Սա լա՞վ տեղ է ապաստարանի համար։
# Լավ տեղ | Վատ տեղ
- Հարթ, չոր հող = 1
- Քամին փակող մեծ քարի ետևում = 1
- Առողջ ծառերի մեջ՝ առանց չոր ճյուղերի = 1
- Չորացած առվի հունում = 2
- Չոր ծառի տակ = 2
- Մերկ, քամոտ բլրի գագաթին = 2
> Լավ տեղը հարթ է, չոր և պաշտպանված։ Առվի հունը կարող է հանկարծ ողողվել, իսկ չոր ծառերից ճյուղեր կարող են ընկնել։
~~~

## Առաջադրանքներ

1. Զբոսանքի ժամանակ գտի՛ր երկու տեղ, որոնք լավ կլինեն ապաստարանի համար, և երկու տեղ, որոնք վատ կլինեն, և բացատրի՛ր ինչու։
2. Պատշգամբում կամ այգում ճյուղիկներից և տերևներից խաղալիքի համար փոքրիկ թեք ապաստարան սարքի՛ր, հետո վրան մի բաժակ ջուր լցրու։ Խաղալիքը չո՞ր է մնում։
3. Մեծահասակի հետ արշավի ժամանակ իսկական թեք ապաստարան սարքի՛ր և 10 րոպե պառկի՛ր ներսում։ Ի՞նչ ես զգում։`,
    ru: `Строить шалаш в лесу очень интересно, и это ещё и настоящий навык выживания. Если тебя когда-нибудь застанет на улице дождь, ветер или ночь, простое укрытие сохранит тебя в тепле и сухости, пока не придёт помощь. Самое простое — **навес**: наклонная крыша из палок и листьев, опирающаяся на жердь между двумя деревьями.

~~~sim
safety level=ask
- Тренируйся днём, рядом с домом или лагерем, со взрослым поблизости.
- Используй только упавшие сухие ветки и листья. Не руби и не ломай живые деревья.
- Перед началом посмотри вверх: никогда не строй под сухими ветками или наклонившимся сухим деревом.
- Уходя, разбери укрытие и снова разбросай ветки и листья.
~~~

## Шаг за шагом

~~~sim
mechanism leanto
~~~

## Как укрытие сохраняет тепло

На улице тело теряет тепло тремя главными способами:

- **Ветер** уносит тёплый воздух от тела. Крыша и стенки его останавливают.
- **Мокрая** одежда быстро охлаждает, потому что вода отводит тепло примерно в 25 раз быстрее воздуха. Лиственная крыша отводит дождь.
- **Холодная земля** вытягивает тепло из всего, что к ней прикасается. Толстая подстилка из сухих листьев отделяет тебя от неё.

Поэтому укрытие должно быть **маленьким**: ровно на тебя, чтобы тело могло согреть воздух внутри.

> 💡 **Интересно знать.** Инструкторы по выживанию используют «правило троек»: человек может прожить около 3 минут без воздуха, около 3 часов без укрытия в очень плохую погоду, около 3 дней без воды и около 3 недель без еды. Это лишь примерное правило, но оно показывает, почему укрытие важнее даже воды и еды.

~~~sim
sort
Это хорошее место для укрытия?
# Хорошее место | Плохое место
- Ровная сухая земля = 1
- За большим камнем, который закрывает от ветра = 1
- Среди здоровых деревьев без сухих веток = 1
- В русле пересохшего ручья = 2
- Под сухим деревом = 2
- На голой ветреной вершине холма = 2
> Хорошее место — ровное, сухое и защищённое. Русло может внезапно затопить, а с сухих деревьев падают ветки.
~~~

## Задания

1. На прогулке найди два места, которые подошли бы для укрытия, и два неподходящих, и объясни почему.
2. Построй на балконе или во дворе маленький навес для игрушки из прутиков и листьев, потом вылей на него стакан воды. Игрушка осталась сухой?
3. Вместе со взрослым построй настоящий навес в походе и полежи в нём 10 минут. Какие ощущения?`,
  },
  quiz: [
    q(t("Why is a dry stream bed a bad place for a shelter?", "Ինչո՞ւ է չորացած առվի հունը վատ տեղ ապաստարանի համար։", "Почему русло пересохшего ручья — плохое место для укрытия?"), [t("Rain can suddenly fill it with water", "Անձրևը կարող է հանկարծ այն ջրով լցնել", "Дождь может внезапно наполнить его водой"), t("It is too soft", "Այնտեղ շատ փափուկ է", "Там слишком мягко"), t("There are no leaves", "Այնտեղ տերևներ չկան", "Там нет листьев")], 0),
    q(t("Why put a thick bed of dry leaves inside?", "Ինչո՞ւ ներսում փռել չոր տերևների հաստ շերտ։", "Зачем внутри толстая подстилка из сухих листьев?"), [t("It smells nice", "Լավ հոտ ունի", "Приятно пахнет"), t("The cold ground steals body heat", "Սառը գետինը խլում է մարմնի ջերմությունը", "Холодная земля отнимает тепло тела"), t("To hide from animals", "Կենդանիներից թաքնվելու համար", "Чтобы спрятаться от зверей")], 1),
    q(t("On which side do you lean the sticks?", "Ո՞ր կողմից ես հենում ճյուղերը։", "С какой стороны прислонять палки?"), [t("The side the wind comes from", "Այն կողմից, որտեղից քամին է փչում", "С той, откуда дует ветер"), t("The side away from the wind", "Քամուն հակառակ կողմից", "С подветренной стороны"), t("It doesn't matter", "Միևնույն է", "Неважно")], 0),
    order(t("Put the building steps in order.", "Դասավորի՛ր կառուցելու քայլերը։", "Расставь шаги постройки по порядку."), [
      t("Choose a safe, dry spot", "Ընտրել անվտանգ, չոր տեղ", "Выбрать безопасное сухое место"),
      t("Place the ridgepole between two trees", "Դնել հիմնական ձողն երկու ծառի միջև", "Положить жердь между двумя деревьями"),
      t("Lean sticks against it", "Նրան հենել ճյուղեր", "Прислонить к ней палки"),
      t("Cover them with leaves from the bottom up", "Ծածկել տերևներով՝ ներքևից վերև", "Укрыть листьями снизу вверх"),
      t("Make a bed of dry leaves inside", "Ներսում չոր տերևներից անկողին սարքել", "Сделать внутри подстилку из сухих листьев"),
    ]),
    q(t("Why should a shelter be small?", "Ինչո՞ւ պետք է ապաստարանը փոքր լինի։", "Почему укрытие должно быть маленьким?"), [t("Your body can warm the air inside", "Մարմինդ կարող է տաքացնել ներսի օդը", "Тело сможет согреть воздух внутри"), t("Small ones are prettier", "Փոքրերն ավելի գեղեցիկ են", "Маленькие красивее"), t("Big ones are forbidden", "Մեծերն արգելված են", "Большие запрещены")], 0),
    match(t("Match the danger to what protects you.", "Միացրո՛ւ վտանգն այն բանի հետ, ինչը պաշտպանում է քեզ։", "Соедини опасность с тем, что от неё защищает."), [
      [t("Wind", "Քամի", "Ветер"), t("The roof and walls", "Տանիքն ու պատերը", "Крыша и стенки")],
      [t("Rain", "Անձրև", "Дождь"), t("Leaves laid like roof tiles", "Կղմինդրի պես դարսված տերևներ", "Листья, уложенные как черепица")],
      [t("Cold ground", "Սառը գետին", "Холодная земля"), t("A thick bed of dry leaves", "Չոր տերևների հաստ անկողին", "Толстая подстилка из сухих листьев")],
    ]),
  ],
});

export const howtoGrade6 = howtoCourse(
  6,
  {
    title: ["Quakes, burns and shelter", "Երկրաշարժ, այրվածք և ապաստարան", "Землетрясения, ожоги и укрытие"],
    summary: [
      "Act fast in an earthquake, give first aid for a burn, and build a lean-to shelter from sticks and leaves.",
      "Արագ գործել երկրաշարժի ժամանակ, առաջին օգնություն ցույց տալ այրվածքի դեպքում և ճյուղերից ու տերևներից թեք ապաստարան սարքել։",
      "Быстро действовать при землетрясении, оказать первую помощь при ожоге и построить навес из веток и листьев.",
    ],
  },
  [earthquake, burns, shelter],
);
