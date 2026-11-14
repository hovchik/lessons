import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const findNorth = howto({
  slug: "find-north",
  title: ["How to find north without a compass", "Ինչպես գտնել հյուսիսն առանց կողմնացույցի", "Как найти север без компаса"],
  goals: {
    en: ["Find north with a shadow stick", "Use the Sun at midday and the North Star at night", "Tell a real clue from a myth"],
    hy: ["Հյուսիսը գտնել ստվերի ձողով", "Կողմնորոշվել կեսօրվա Արևով և գիշերը Բևեռային աստղով", "Իսկական նշանը տարբերել առասպելից"],
    ru: ["Находить север с помощью палки и тени", "Ориентироваться по полуденному Солнцу и ночью по Полярной звезде", "Отличать настоящую примету от мифа"],
  },
  body: {
    en: `Phones have maps, but phones run out of battery. Long before compasses, sailors, shepherds and travellers found their way by the Sun and the stars. You can too, with nothing but a stick and two stones.

~~~sim
safety level=care
- **Never look straight at the Sun**, not even for a second: it can hurt your eyes for ever. Look at shadows instead.
- Practise in a park or a garden you know, not alone in the woods.
~~~

## The Sun's path

The Sun **rises in the east**, climbs highest **in the south at midday**, and **sets in the west**. This is true everywhere in Armenia and Russia (they are in the northern half of the Earth). So at midday your shadow points **north**.

## The shadow stick, step by step

~~~sim
mechanism shadowstick
~~~

This works at any time of day when there is a clear shadow. The longer you wait between the two marks, the more exact the line.

## At night: the North Star

Find the **Big Dipper** (also called the Plough), seven bright stars shaped like a saucepan. Take the two stars at the end of the pan, away from the handle, and follow the line they make upwards about five times their distance. You reach a star that is not especially bright, but it never moves: the **North Star**, Polaris. Face it, and you face north. All night the other stars turn slowly around it.

## Myths to forget

- "Moss grows only on the north side of trees." Not reliable: moss grows wherever it is damp and shady, on any side.
- "The North Star is the brightest star in the sky." No, dozens of stars are brighter. It is special because it stays still.

> 💡 **Did you know?** Old Armenian churches are a compass you can visit. Their altar is almost always at the **east** end, facing the sunrise, and the main door is usually in the west. Next time you visit Garni, Geghard or a church in your town, check with your shadow stick!

~~~sim
sort
A real way to find north, or a myth?
# Real | Myth
- The shadow at midday = 1
- The North Star = 1
- The shadow stick = 1
- Moss on one side of a tree = 2
- The brightest star in the sky = 2
> The Sun and the North Star move in ways we can predict; moss just likes shade.
~~~

## Practice

1. Make a shadow stick in the school yard or garden. Check your answer with a compass app.
2. At home, find which window faces south: it gets the Sun at midday.
3. On a clear evening, find the Big Dipper with a grown-up and follow the pointer stars to the North Star.`,
    hy: `Հեռախոսներում քարտեզներ կան, բայց հեռախոսի մարտկոցը նստում է։ Կողմնացույցից շատ առաջ նավաստիները, հովիվներն ու ճանապարհորդները ճանապարհը գտնում էին Արևով և աստղերով։ Դու էլ կարող ես՝ ընդամենը մի ձողով և երկու քարով։

~~~sim
safety level=care
- **Երբեք ուղիղ մի՛ նայիր Արևին**, նույնիսկ մեկ վայրկյան․ այն կարող է ընդմիշտ վնասել աչքերդ։ Փոխարենը նայի՛ր ստվերներին։
- Վարժվի՛ր քեզ ծանոթ այգում կամ բակում, ոչ թե մենակ անտառում։
~~~

## Արևի ճանապարհը

Արևը **ծագում է արևելքում**, կեսօրին ամենաբարձր բարձրանում է **հարավում** և **մայր է մտնում արևմուտքում**։ Սա ճիշտ է Հայաստանի և Ռուսաստանի ամբողջ տարածքում (դրանք գտնվում են Երկրի հյուսիսային կեսում)։ Այնպես որ կեսօրին քո ստվերը ցույց է տալիս **հյուսիսը**։

## Ստվերի ձողը՝ քայլ առ քայլ

~~~sim
mechanism shadowstick
~~~

Սա աշխատում է օրվա ցանկացած ժամի, երբ հստակ ստվեր կա։ Որքան երկար սպասես երկու նշանների միջև, այնքան ճշգրիտ կլինի գիծը։

## Գիշերը՝ Բևեռային աստղը

Գտի՛ր **Մեծ արջը**՝ յոթ պայծառ աստղ, որոնք կաթսայի նման են դասավորված։ Վերցրու կաթսայի ծայրի երկու աստղերը (բռնակից հեռու կողմում) և նրանց գծով բարձրացի՛ր վեր՝ մոտ հինգ անգամ նրանց միջև եղած հեռավորությամբ։ Կհասնես մի աստղի, որը շատ պայծառ չէ, բայց երբեք չի շարժվում․ դա **Բևեռային աստղն** է։ Դեմքով դարձի՛ր դեպի այն, և կնայես հյուսիս։ Ամբողջ գիշեր մյուս աստղերը դանդաղ պտտվում են նրա շուրջը։

## Առասպելներ, որոնք պետք է մոռանալ

- «Մամուռն աճում է միայն ծառի հյուսիսային կողմում»։ Վստահելի չէ․ մամուռն աճում է ամենուր, որտեղ խոնավ ու ստվերոտ է, ցանկացած կողմում։
- «Բևեռային աստղն երկնքի ամենապայծառ աստղն է»։ Ոչ, տասնյակ աստղեր ավելի պայծառ են։ Այն առանձնահատուկ է, որովհետև անշարժ է մնում։

> 💡 **Հետաքրքիր է իմանալ։** Հին հայկական եկեղեցիները կողմնացույց են, որը կարող ես այցելել։ Նրանց խորանը գրեթե միշտ **արևելյան** կողմում է՝ դեպի արևածագը, իսկ գլխավոր դուռը սովորաբար արևմուտքում է։ Հաջորդ անգամ Գառնիում, Գեղարդում կամ քո քաղաքի եկեղեցում ստուգի՛ր ստվերի ձողով։

~~~sim
sort
Սա հյուսիսը գտնելու իսկական միջո՞ց է, թե՞ առասպել։
# Իսկական | Առասպել
- Կեսօրվա ստվերը = 1
- Բևեռային աստղը = 1
- Ստվերի ձողը = 1
- Մամուռը ծառի մի կողմում = 2
- Երկնքի ամենապայծառ աստղը = 2
> Արևը և Բևեռային աստղը շարժվում են կանխատեսելի կերպով, իսկ մամուռը պարզապես ստվեր է սիրում։
~~~

## Առաջադրանքներ

1. Դպրոցի բակում կամ այգում ստվերի ձող պատրաստի՛ր։ Ստուգի՛ր պատասխանդ հեռախոսի կողմնացույցով։
2. Տանը պարզի՛ր, թե որ պատուհանն է նայում հարավ․ կեսօրին Արևն այնտեղ է լինում։
3. Պարզ երեկոյան մեծահասակի հետ գտի՛ր Մեծ արջը և ցուցիչ աստղերով հասի՛ր Բևեռային աստղին։`,
    ru: `В телефонах есть карты, но у телефона садится батарейка. Задолго до компаса моряки, пастухи и путешественники находили дорогу по Солнцу и звёздам. Ты тоже сможешь, с одной палкой и двумя камешками.

~~~sim
safety level=care
- **Никогда не смотри прямо на Солнце**, даже секунду: можно навсегда повредить глаза. Смотри на тени.
- Тренируйся в знакомом парке или во дворе, а не один в лесу.
~~~

## Путь Солнца

Солнце **встаёт на востоке**, выше всего поднимается **на юге в полдень** и **садится на западе**. Так везде в Армении и в России (они в северной половине Земли). Поэтому в полдень твоя тень показывает на **север**.

## Палка и тень, шаг за шагом

~~~sim
mechanism shadowstick
~~~

Это работает в любое время дня, когда есть чёткая тень. Чем дольше ждёшь между двумя метками, тем точнее линия.

## Ночью: Полярная звезда

Найди **Большую Медведицу** — семь ярких звёзд в форме ковша. Возьми две звезды на краю ковша, подальше от ручки, и проведи через них линию вверх примерно на пять расстояний между ними. Ты дойдёшь до звезды, которая не очень яркая, но никогда не движется: это **Полярная звезда**. Встань к ней лицом, и ты смотришь на север. Всю ночь остальные звёзды медленно кружатся вокруг неё.

## Мифы, о которых стоит забыть

- «Мох растёт только с северной стороны деревьев». Ненадёжно: мох растёт там, где сыро и тенисто, с любой стороны.
- «Полярная звезда — самая яркая на небе». Нет, десятки звёзд ярче. Она особенная, потому что стоит на месте.

> 💡 **Интересно знать.** Старые армянские церкви — это компас, который можно посетить. Их алтарь почти всегда на **восточной** стороне, к восходу, а главный вход обычно с запада. В следующий раз в Гарни, Гегарде или церкви своего города проверь это палкой и тенью!

~~~sim
sort
Это настоящий способ найти север или миф?
# Настоящий | Миф
- Тень в полдень = 1
- Полярная звезда = 1
- Палка и тень = 1
- Мох с одной стороны дерева = 2
- Самая яркая звезда на небе = 2
> Солнце и Полярная звезда движутся предсказуемо, а мох просто любит тень.
~~~

## Задания

1. Сделай палку для тени в школьном дворе или в саду. Проверь ответ по компасу в телефоне.
2. Дома найди, какое окно смотрит на юг: в полдень в нём Солнце.
3. Ясным вечером вместе со взрослым найди Большую Медведицу и по двум крайним звёздам дойди до Полярной.`,
  },
  quiz: [
    q(t("Where is the Sun at midday in Armenia and Russia?", "Որտե՞ղ է Արևը կեսօրին Հայաստանում և Ռուսաստանում։", "Где Солнце в полдень в Армении и России?"), [t("In the north", "Հյուսիսում", "На севере"), t("In the south", "Հարավում", "На юге"), t("Straight overhead every day", "Ամեն օր ուղիղ գլխավերևում", "Каждый день прямо над головой")], 1, t("So at midday your shadow points north.", "Այդ պատճառով կեսօրին ստվերդ ցույց է տալիս հյուսիսը։", "Поэтому в полдень твоя тень показывает на север.")),
    order(t("Put the shadow-stick steps in order.", "Դասավորի՛ր ստվերի ձողի քայլերը ճիշտ հերթականությամբ։", "Расставь шаги с палкой и тенью по порядку."), [
      t("Push the stick into the ground", "Ձողը խրել գետնի մեջ", "Воткнуть палку в землю"),
      t("Mark the tip of the shadow", "Նշել ստվերի ծայրը", "Отметить кончик тени"),
      t("Wait 15–20 minutes", "Սպասել 15–20 րոպե", "Подождать 15–20 минут"),
      t("Mark the new tip", "Նշել նոր ծայրը", "Отметить новый кончик"),
      t("Stand with the first mark on your left", "Կանգնել, որ առաջին նշանը ձախում լինի", "Встать так, чтобы первая метка была слева"),
    ]),
    q(t("The first stone of the shadow stick marks…", "Ստվերի ձողի առաջին քարը ցույց է տալիս…", "Первый камень у палки с тенью отмечает…"), [t("West", "Արևմուտքը", "Запад"), t("East", "Արևելքը", "Восток"), t("South", "Հարավը", "Юг")], 0),
    q(t("Why is the North Star useful?", "Ինչո՞ւ է Բևեռային աստղն օգտակար։", "Чем полезна Полярная звезда?"), [t("It is the brightest star", "Այն ամենապայծառ աստղն է", "Это самая яркая звезда"), t("It stays still in the north while other stars turn", "Այն անշարժ մնում է հյուսիսում, մինչ մյուս աստղերը պտտվում են", "Она стоит на месте на севере, а другие звёзды кружатся"), t("It is red", "Այն կարմիր է", "Она красная")], 1),
    q(t("Is moss a good way to find north?", "Մամուռը հյուսիսը գտնելու լավ միջո՞ց է։", "Мох — хороший способ найти север?"), [t("Yes, always", "Այո, միշտ", "Да, всегда"), t("No, it grows wherever it is damp and shady", "Ոչ, այն աճում է ամենուր, որտեղ խոնավ ու ստվերոտ է", "Нет, он растёт везде, где сыро и тенисто")], 1),
    match(t("Match the direction to the Sun.", "Միացրո՛ւ կողմն Արևի հետ։", "Соедини сторону света с Солнцем."), [
      [t("East", "Արևելք", "Восток"), t("Where the Sun rises", "Որտեղ Արևը ծագում է", "Где Солнце встаёт")],
      [t("South", "Հարավ", "Юг"), t("Where the Sun is at midday", "Որտեղ է Արևը կեսօրին", "Где Солнце в полдень")],
      [t("West", "Արևմուտք", "Запад"), t("Where the Sun sets", "Որտեղ Արևը մայր է մտնում", "Где Солнце садится")],
      [t("North", "Հյուսիս", "Север"), t("Where your shadow points at midday", "Ուր է ցույց տալիս ստվերդ կեսօրին", "Куда смотрит твоя тень в полдень")],
    ]),
  ],
});

const smallCuts = howto({
  slug: "cuts-and-nosebleeds",
  title: ["How to help with a small cut or a nosebleed", "Ինչպես օգնել փոքր կտրվածքի կամ քթից արյունահոսության դեպքում", "Как помочь при небольшом порезе или кровотечении из носа"],
  goals: {
    en: ["Clean and cover a small cut", "Stop a nosebleed the right way: lean forward and pinch", "Know when a grown-up or a doctor is needed"],
    hy: ["Մաքրել և ծածկել փոքր կտրվածքը", "Ճիշտ կանգնեցնել քթից արյունահոսությունը՝ թեքվել առաջ և սեղմել", "Իմանալ, թե երբ է պետք մեծահասակ կամ բժիշկ"],
    ru: ["Промыть и заклеить небольшой порез", "Правильно остановить кровь из носа: наклониться вперёд и зажать", "Знать, когда нужен взрослый или врач"],
  },
  body: {
    en: `Everybody gets small cuts and scrapes: from paper, from a fall in the park, from a sharp toy. And many children get nosebleeds, especially when the air is dry or after a bump. They look scary because blood is bright red, but most are small and easy to deal with if you stay calm.

~~~sim
safety level=ask
- Always tell a grown-up when you or a friend is bleeding.
- Try not to touch another person's blood with bare hands: let them press on their own cut, or use a clean cloth or gloves.
- Get a grown-up **at once** if the cut is deep or gaping, if blood spurts, if something is stuck in it, or after an animal bite.
~~~

## A small cut or scrape

1. **Wash your hands** (see the lesson on hand washing).
2. **Rinse the cut** under clean running water to wash out dirt. It may sting a little: that is fine.
3. If it bleeds, **press** on it with a clean cloth or tissue for a few minutes.
4. **Cover it** with a plaster to keep dirt out.
5. Change the plaster every day, and show it to a grown-up if it gets red, swollen, hot or full of yellow pus.

## A nosebleed, step by step

~~~sim
mechanism nosebleed
~~~

## Why lean forward?

Many people were taught to tip their head back. That is a **mistake**. The blood doesn't stop: it just runs down the back of the throat into the stomach, which can make you feel sick and throw up. Leaning forward lets you see the blood and spit it out. Pinching the soft part of the nose squeezes the tiny blood vessels just inside it, and the blood gets time to clot, like a plug.

Blood clots on its own: little cells called **platelets** stick together at the hole and make a net that traps the blood. That is why pressing and waiting works so well.

> 💡 **Did you know?** The sticky plaster was invented in 1920 by **Earle Dickson**, who worked at a company making cotton and gauze. His wife often cut herself in the kitchen, so he stuck small squares of gauze on sticky tape, ready to use. His company liked the idea, and soon it was sold all over the world.

~~~sim
sort
Do it or don't?
# Do | Don't
- Lean forward and pinch your nose = 1
- Tip your head back = 2
- Rinse a cut with clean water = 1
- Blow your nose hard after a nosebleed = 2
- Press on a bleeding cut with a clean cloth = 1
- Wipe dirt off a cut with your sleeve = 2
> Forward, pinch, clean and press; never backwards and never dirty.
~~~

## Practice

1. Find the first-aid box at home. What is inside? Ask a grown-up to show you plasters, bandages and gloves.
2. Practise the nosebleed position with a friend: sit, lean forward, pinch the soft part, count to 60 ten times (that's 10 minutes!).
3. Make a small card for your school bag: "Cut: rinse, press, cover. Nose: forward, pinch, 10 minutes."`,
    hy: `Բոլորն էլ ունենում են փոքր կտրվածքներ ու քերծվածքներ՝ թղթից, այգում ընկնելուց, սուր խաղալիքից։ Իսկ շատ երեխաների քթից արյուն է գալիս, հատկապես երբ օդը չոր է կամ հարվածից հետո։ Դրանք վախենալու տեսք ունեն, որովհետև արյունը վառ կարմիր է, բայց մեծ մասը փոքր է, և եթե հանգիստ մնաս, հեշտ է գլուխ հանել։

~~~sim
safety level=ask
- Միշտ ասա՛ մեծահասակին, երբ դու կամ ընկերդ արյունահոսում եք։
- Աշխատի՛ր մերկ ձեռքով չդիպչել ուրիշի արյանը․ թող նա ինքը սեղմի իր կտրվածքը, կամ օգտագործի՛ր մաքուր կտոր կամ ձեռնոցներ։
- **Անմիջապես** կանչի՛ր մեծահասակի, եթե կտրվածքը խոր է կամ բաց, արյունը շատրվանում է, ինչ-որ բան է խրված, կամ կենդանին է կծել։
~~~

## Փոքր կտրվածք կամ քերծվածք

1. **Լվա՛ ձեռքերդ** (տե՛ս ձեռքերը լվանալու դասը)։
2. **Ողողի՛ր կտրվածքը** մաքուր հոսող ջրով, որ կեղտը լվացվի։ Կարող է մի քիչ այրել․ դա նորմալ է։
3. Եթե արյուն է գալիս, մի քանի րոպե մաքուր կտորով կամ անձեռոցիկով **սեղմի՛ր**։
4. **Ծածկի՛ր** սպեղանիով, որ կեղտ չընկնի։
5. Ամեն օր փոխի՛ր սպեղանին և ցույց տուր մեծահասակին, եթե վերքը կարմրի, ուռչի, տաքանա կամ դեղին թարախ հայտնվի։

## Քթից արյունահոսությունը՝ քայլ առ քայլ

~~~sim
mechanism nosebleed
~~~

## Ինչու թեքվել առաջ

Շատերին սովորեցրել են գլուխը հետ գցել։ Դա **սխալ է**։ Արյունը չի կանգնում․ այն պարզապես հոսում է կոկորդի հետևով դեպի ստամոքս, ինչից կարող է սիրտդ խառնել և փսխել։ Առաջ թեքվելով տեսնում ես արյունը և կարող ես թքել այն։ Քթի փափուկ մասը սեղմելով սեղմում ես նրա ներսի փոքրիկ անոթները, և արյունը ժամանակ է ունենում մակարդվելու՝ խցանի պես։

Արյունն ինքն է մակարդվում․ **թրոմբոցիտներ** կոչվող փոքրիկ բջիջները կպչում են իրար անցքի մոտ և ցանց են կազմում, որը պահում է արյունը։ Ահա թե ինչու է սեղմելն ու սպասելն այդքան լավ օգնում։

> 💡 **Հետաքրքիր է իմանալ։** Կպչուն սպեղանին հնարել է **Էրլ Դիքսոնը** 1920 թվականին։ Նա աշխատում էր բամբակ և թանզիֆ արտադրող ընկերությունում։ Նրա կինը հաճախ էր խոհանոցում կտրում ձեռքը, և նա թանզիֆի փոքր քառակուսիներ կպցրեց կպչուն ժապավենին, որ միշտ պատրաստ լինեն։ Ընկերությանը գաղափարը դուր եկավ, և շուտով այն վաճառվում էր ամբողջ աշխարհում։

~~~sim
sort
Անե՞լ, թե՞ ոչ։
# Անել | Չանել
- Թեքվել առաջ և սեղմել քիթը = 1
- Գլուխը հետ գցել = 2
- Կտրվածքը ողողել մաքուր ջրով = 1
- Արյունահոսությունից հետո ուժեղ փչել քիթը = 2
- Արյունահոսող կտրվածքը սեղմել մաքուր կտորով = 1
- Կտրվածքի կեղտը մաքրել թևքով = 2
> Առաջ, սեղմել, մաքրել և ճնշել․ երբեք հետ և երբեք կեղտոտ։
~~~

## Առաջադրանքներ

1. Գտի՛ր տան դեղատուփը։ Ի՞նչ կա ներսում։ Խնդրի՛ր մեծահասակին ցույց տալ սպեղանիները, վիրակապերը և ձեռնոցները։
2. Ընկերոջդ հետ վարժվի՛ր քթի արյունահոսության դիրքում․ նստի՛ր, թեքվի՛ր առաջ, սեղմի՛ր փափուկ մասը, տասն անգամ հաշվի՛ր մինչև 60 (դա 10 րոպե է)։
3. Դպրոցական պայուսակիդ համար փոքր քարտ պատրաստի՛ր․ «Կտրվածք՝ ողողել, սեղմել, ծածկել։ Քիթ՝ առաջ, սեղմել, 10 րոպե»։`,
    ru: `У всех бывают небольшие порезы и ссадины: от бумаги, от падения в парке, от острой игрушки. А у многих детей идёт кровь из носа, особенно когда воздух сухой или после удара. Это выглядит страшно, потому что кровь ярко-красная, но чаще всего это мелочи, и если не паниковать, справиться легко.

~~~sim
safety level=ask
- Всегда говори взрослому, если у тебя или у друга идёт кровь.
- Старайся не трогать чужую кровь голыми руками: пусть человек сам прижмёт свой порез, или возьми чистую ткань или перчатки.
- **Сразу** зови взрослого, если порез глубокий или зияет, кровь бьёт струёй, в ране что-то застряло или укусило животное.
~~~

## Небольшой порез или ссадина

1. **Вымой руки** (см. урок про мытьё рук).
2. **Промой порез** чистой проточной водой, чтобы смыть грязь. Может немного щипать — это нормально.
3. Если идёт кровь, несколько минут **прижимай** порез чистой тканью или салфеткой.
4. **Заклей** пластырем, чтобы не попала грязь.
5. Меняй пластырь каждый день и покажи взрослому, если ранка покраснела, опухла, стала горячей или в ней появился жёлтый гной.

## Кровь из носа, шаг за шагом

~~~sim
mechanism nosebleed
~~~

## Почему наклоняться вперёд?

Многих учили запрокидывать голову назад. Это **ошибка**. Кровь не останавливается: она просто стекает по задней стенке горла в желудок, отчего может тошнить и вырвать. Наклонившись вперёд, ты видишь кровь и можешь её сплюнуть. Зажимая мягкую часть носа, ты пережимаешь крошечные сосуды внутри, и у крови есть время свернуться, как пробка.

Кровь сворачивается сама: маленькие клетки — **тромбоциты** — слипаются у ранки и делают сеточку, которая задерживает кровь. Вот почему так хорошо помогает прижать и подождать.

> 💡 **Интересно знать.** Лейкопластырь придумал в 1920 году **Эрл Диксон**, который работал в компании, выпускавшей вату и марлю. Его жена часто ранилась на кухне, и он наклеил маленькие квадратики марли на липкую ленту, чтобы они всегда были под рукой. Компании идея понравилась, и вскоре пластырь продавали по всему миру.

~~~sim
sort
Делать или нет?
# Делать | Не делать
- Наклониться вперёд и зажать нос = 1
- Запрокинуть голову = 2
- Промыть порез чистой водой = 1
- Сильно высморкаться после кровотечения = 2
- Прижать кровоточащий порез чистой тканью = 1
- Стереть грязь с пореза рукавом = 2
> Вперёд, зажать, промыть и прижать; никогда не назад и никогда не грязным.
~~~

## Задания

1. Найди дома аптечку. Что в ней? Попроси взрослого показать пластыри, бинты и перчатки.
2. Потренируйся с другом: сесть, наклониться вперёд, зажать мягкую часть носа, десять раз сосчитать до 60 (это 10 минут!).
3. Сделай маленькую карточку для рюкзака: «Порез: промыть, прижать, заклеить. Нос: вперёд, зажать, 10 минут».`,
  },
  quiz: [
    q(t("Your nose is bleeding. Which way do you lean?", "Քթիցդ արյուն է գալիս։ Ո՞ր կողմ ես թեքվում։", "У тебя кровь из носа. Куда наклоняться?"), [t("Back, with the head tipped up", "Հետ՝ գլուխը վեր գցած", "Назад, запрокинув голову"), t("Forward", "Առաջ", "Вперёд"), t("Lie flat on the floor", "Պառկում եմ հատակին", "Лечь на пол")], 1, t("Leaning back sends the blood down your throat.", "Հետ թեքվելիս արյունը հոսում է կոկորդդ։", "Если откинуться назад, кровь стечёт в горло.")),
    q(t("Which part of the nose do you pinch?", "Քթի ո՞ր մասն ես սեղմում։", "Какую часть носа нужно зажать?"), [t("The soft part, below the bony bump", "Փափուկ մասը՝ ոսկրային մասից ներքև", "Мягкую часть, ниже косточки"), t("The very top, between the eyes", "Ամենավերևը՝ աչքերի միջև", "Самый верх, между глаз"), t("Just the tip, for one second", "Միայն ծայրը՝ մեկ վայրկյան", "Только кончик, на одну секунду")], 0),
    q(t("How long should you keep pinching?", "Որքա՞ն պետք է սեղմած պահել։", "Сколько нужно держать нос зажатым?"), [t("10 seconds", "10 վայրկյան", "10 секунд"), t("10 minutes", "10 րոպե", "10 минут"), t("1 hour", "1 ժամ", "1 час")], 1),
    order(t("Put the steps for a small cut in order.", "Դասավորի՛ր փոքր կտրվածքի քայլերը ճիշտ հերթականությամբ։", "Расставь шаги при небольшом порезе по порядку."), [
      t("Wash your hands", "Լվանալ ձեռքերը", "Вымыть руки"),
      t("Rinse the cut with clean water", "Ողողել կտրվածքը մաքուր ջրով", "Промыть порез чистой водой"),
      t("Press with a clean cloth", "Սեղմել մաքուր կտորով", "Прижать чистой тканью"),
      t("Cover with a plaster", "Ծածկել սպեղանիով", "Заклеить пластырем"),
    ]),
    q(t("When must you get a grown-up at once?", "Ե՞րբ պետք է անմիջապես մեծահասակ կանչել։", "Когда нужно сразу звать взрослого?"), [t("After a paper cut", "Թղթից կտրվելուց հետո", "Порезался бумагой"), t("When a dog has bitten you", "Երբ շունը կծել է քեզ", "Тебя укусила собака"), t("When a plaster is a bit wet", "Երբ սպեղանին մի քիչ թաց է", "Пластырь немного намок")], 1),
    q(t("What makes blood clot and stop flowing?", "Ի՞նչն է ստիպում արյանը մակարդվել և կանգնել։", "Что заставляет кровь свернуться и остановиться?"), [t("Platelets that stick together", "Իրար կպչող թրոմբոցիտները", "Тромбоциты, которые слипаются"), t("Cold water", "Սառը ջուրը", "Холодная вода"), t("Talking loudly", "Բարձր խոսելը", "Громкий разговор")], 0),
  ],
});

const birdFeeder = howto({
  slug: "pine-cone-feeder",
  title: ["How to make a pine cone bird feeder", "Ինչպես կոնից թռչունների կերակրատաշտ պատրաստել", "Как сделать кормушку из шишки"],
  goals: {
    en: ["Make a pine cone feeder with fat and seeds", "Know which foods are good for birds and which harm them", "Choose a safe place to hang a feeder"],
    hy: ["Ճարպով և սերմերով կոնից կերակրատաշտ պատրաստել", "Իմանալ, թե որ կերերն են օգտակար թռչուններին, և որոնք՝ վնասակար", "Կերակրատաշտը կախելու ապահով տեղ ընտրել"],
    ru: ["Сделать кормушку из шишки с жиром и семечками", "Знать, какой корм полезен птицам, а какой вредит", "Выбрать безопасное место для кормушки"],
  },
  body: {
    en: `In winter, birds have a hard time. The days are short, insects are hiding and seeds are buried under snow, yet a tiny tit must eat a lot every day just to stay warm through a frosty night. A feeder you make in half an hour can keep a whole flock of birds visiting your window all winter.

~~~sim
safety level=ask
- Ask a grown-up to hang the feeder if it needs a ladder or a high branch.
- Use a spoon or a blunt knife to spread the fat.
- Wash your hands after working with fat and seeds.
~~~

## What you need

- a big, dry pine cone with open scales;
- string or wool, about 40 cm;
- soft **unsalted** fat: lard, suet or vegetable fat at room temperature;
- bird seed: sunflower seeds, millet, oats, crushed unsalted nuts.

## Step by step

~~~sim
mechanism pinecone
~~~

## Good food and bad food

Birds need **fat and seeds** in winter: they are full of energy. But some human food harms them:

- **Salt** is poison for small birds: no salted fat, crisps or salted nuts.
- **Bread** fills their stomach but gives almost no energy, and wet bread goes mouldy.
- **Mouldy or spoiled** food makes birds ill.

Once you start feeding in winter, **don't stop** until spring: the birds start to count on your feeder. And on frosty days a shallow dish of clean water helps a lot.

> 💡 **Did you know?** In England in the 1920s, milkmen left bottles of milk on doorsteps with thin foil tops. Blue tits learned to peck through the foil and drink the cream from the top. Soon tits all over the country were doing it: they learned the trick by watching each other!

~~~sim
sort
Good or bad for birds?
# Good | Bad
- Sunflower seeds = 1
- Unsalted lard = 1
- Salted crisps = 2
- White bread = 2
- Millet and oats = 1
- Mouldy cheese = 2
> Birds need fat and seeds; salt, bread and spoiled food harm them.
~~~

## Practice

1. Make a feeder and hang it where you can see it from a window.
2. Keep a bird diary for two weeks: which birds come, how many, at what time?
3. Make a second feeder with only one kind of seed. Which one do the birds like best?`,
    hy: `Ձմռանը թռչունների համար դժվար է։ Օրերը կարճ են, միջատները թաքնված են, սերմերը ձյան տակ են, իսկ փոքրիկ երաշտահավը պետք է ամեն օր շատ ուտի, որպեսզի ցրտաշունչ գիշերը տաք մնա։ Կես ժամում պատրաստած կերակրատաշտը կարող է ամբողջ ձմեռ թռչունների մի ամբողջ երամ բերել քո պատուհանի մոտ։

~~~sim
safety level=ask
- Խնդրի՛ր մեծահասակին կախել կերակրատաշտը, եթե սանդուղք կամ բարձր ճյուղ է պետք։
- Ճարպը քսելու համար օգտագործի՛ր գդալ կամ բութ դանակ։
- Ճարպի և սերմերի հետ աշխատելուց հետո լվա՛ ձեռքերդ։
~~~

## Ինչ է պետք

- մեծ, չոր սոճու կոն՝ բացված թեփուկներով,
- մոտ 40 սմ թել կամ բրդյա թել,
- փափուկ **առանց աղի** ճարպ՝ խոզի կամ տավարի ճարպ կամ բուսական ճարպ՝ սենյակային ջերմաստիճանի,
- թռչնի կեր՝ արևածաղկի սերմեր, կորեկ, վարսակ, մանրացված առանց աղի ընկույզ։

## Քայլ առ քայլ

~~~sim
mechanism pinecone
~~~

## Լավ կեր և վատ կեր

Ձմռանը թռչուններին պետք են **ճարպ և սերմեր**․ դրանք էներգիայով լի են։ Բայց մարդկային որոշ սնունդ վնասում է նրանց․

- **Աղը** թույն է փոքր թռչունների համար․ ոչ աղած ճարպ, ոչ չիպս, ոչ աղած ընկույզ։
- **Հացը** լցնում է նրանց ստամոքսը, բայց գրեթե էներգիա չի տալիս, իսկ թաց հացը բորբոսնում է։
- **Բորբոսնած կամ փչացած** սնունդը հիվանդացնում է թռչուններին։

Եթե ձմռանը սկսել ես կերակրել, **մի՛ դադարիր** մինչև գարուն․ թռչունները սկսում են հույս դնել քո կերակրատաշտի վրա։ Իսկ սառնամանիքին մաքուր ջրով ծանծաղ ամանը շատ է օգնում։

> 💡 **Հետաքրքիր է իմանալ։** 1920-ական թվականներին Անգլիայում կաթնավաճառները կաթի շշերը թողնում էին դռների մոտ՝ բարակ փայլաթիթեղե կափարիչներով։ Կապույտ երաշտահավերը սովորեցին կտցահարել փայլաթիթեղը և խմել կաթի վերևի սերուցքը։ Շուտով ամբողջ երկրի երաշտահավերն էին այդպես անում․ նրանք հնարքը սովորեցին՝ իրար նայելով։

~~~sim
sort
Լա՞վ է, թե՞ վատ թռչունների համար։
# Լավ է | Վատ է
- Արևածաղկի սերմեր = 1
- Առանց աղի ճարպ = 1
- Աղի չիպս = 2
- Սպիտակ հաց = 2
- Կորեկ և վարսակ = 1
- Բորբոսնած պանիր = 2
> Թռչուններին պետք են ճարպ և սերմեր, իսկ աղը, հացը և փչացած սնունդը վնասում են նրանց։
~~~

## Առաջադրանքներ

1. Պատրաստի՛ր կերակրատաշտ և կախի՛ր այնտեղ, որտեղ պատուհանից կտեսնես։
2. Երկու շաբաթ թռչունների օրագիր պահի՛ր․ ո՞ր թռչուններն են գալիս, քանի՞սը, ժամը քանիսի՞ն։
3. Պատրաստի՛ր երկրորդ կերակրատաշտ՝ միայն մեկ տեսակի սերմով։ Ո՞րն են թռչուններն ավելի շատ սիրում։`,
    ru: `Зимой птицам тяжело. Дни короткие, насекомые спрятались, семена под снегом, а крошечной синице нужно каждый день много есть, чтобы не замёрзнуть морозной ночью. Кормушка, которую ты сделаешь за полчаса, может всю зиму собирать у твоего окна целую стайку птиц.

~~~sim
safety level=ask
- Попроси взрослого повесить кормушку, если нужна лестница или высокая ветка.
- Намазывай жир ложкой или тупым ножом.
- Вымой руки после работы с жиром и семечками.
~~~

## Что понадобится

- большая сухая сосновая шишка с раскрытыми чешуйками;
- верёвочка или шерстяная нитка, около 40 см;
- мягкий **несолёный** жир: смалец, нутряной жир или растительный жир комнатной температуры;
- корм для птиц: семечки подсолнуха, просо, овсяные хлопья, дроблёные несолёные орехи.

## Шаг за шагом

~~~sim
mechanism pinecone
~~~

## Хороший корм и плохой

Зимой птицам нужны **жир и семена**: в них много энергии. Но некоторая еда людей им вредит:

- **Соль** — яд для маленьких птиц: никакого солёного сала, чипсов и солёных орешков.
- **Хлеб** набивает желудок, но почти не даёт энергии, а мокрый хлеб плесневеет.
- **Заплесневелая или испорченная** еда вызывает у птиц болезни.

Если начал кормить зимой, **не прекращай** до весны: птицы начинают рассчитывать на твою кормушку. А в мороз очень помогает неглубокая миска с чистой водой.

> 💡 **Интересно знать.** В Англии в 1920-х годах молочники оставляли у дверей бутылки с молоком под тонкими крышками из фольги. Лазоревки научились проклёвывать фольгу и пить сливки сверху. Скоро так делали синицы по всей стране: они научились этому, подглядывая друг за другом!

~~~sim
sort
Хорошо или плохо для птиц?
# Хорошо | Плохо
- Семечки подсолнуха = 1
- Несолёный смалец = 1
- Солёные чипсы = 2
- Белый хлеб = 2
- Просо и овсянка = 1
- Заплесневелый сыр = 2
> Птицам нужны жир и семена; соль, хлеб и испорченная еда им вредят.
~~~

## Задания

1. Сделай кормушку и повесь её так, чтобы было видно из окна.
2. Две недели веди птичий дневник: какие птицы прилетают, сколько, в какое время?
3. Сделай вторую кормушку только с одним видом семян. Какую птицы любят больше?`,
  },
  quiz: [
    order(t("Put the steps for the feeder in order.", "Դասավորի՛ր կերակրատաշտի քայլերը ճիշտ հերթականությամբ։", "Расставь шаги изготовления кормушки по порядку."), [
      t("Tie a string to the cone", "Թելը կապել կոնին", "Привязать верёвочку к шишке"),
      t("Spread fat into the scales", "Ճարպը քսել թեփուկների մեջ", "Вмазать жир в чешуйки"),
      t("Roll it in seeds", "Գլորել սերմերի մեջ", "Обвалять в семечках"),
      t("Chill it in the fridge", "Սառեցնել սառնարանում", "Охладить в холодильнике"),
      t("Hang it on a branch", "Կախել ճյուղից", "Повесить на ветку"),
    ]),
    q(t("Why is salted food bad for birds?", "Ինչո՞ւ է աղի սնունդը վատ թռչունների համար։", "Почему солёная еда вредна птицам?"), [t("Salt is poison for small birds", "Աղը թույն է փոքր թռչունների համար", "Соль — яд для маленьких птиц"), t("It is too expensive", "Այն շատ թանկ է", "Она слишком дорогая"), t("Birds don't like the colour", "Թռչուններին գույնը դուր չի գալիս", "Птицам не нравится цвет")], 0),
    q(t("Why is bread a poor food for birds?", "Ինչո՞ւ է հացը վատ կեր թռչունների համար։", "Почему хлеб — плохой корм для птиц?"), [t("It fills them up but gives little energy", "Լցնում է նրանց, բայց քիչ էներգիա է տալիս", "Он набивает желудок, но даёт мало энергии"), t("It is too hard to find", "Այն դժվար է գտնել", "Его трудно найти"), t("Birds can't see it", "Թռչունները չեն տեսնում այն", "Птицы его не видят")], 0),
    q(t("Where is the best place to hang the feeder?", "Որտե՞ղ է ավելի լավ կախել կերակրատաշտը։", "Где лучше всего повесить кормушку?"), [t("On the ground", "Գետնին", "На земле"), t("About 2 m up, near a bush, out of cats' reach", "Մոտ 2 մ բարձրությամբ, թփի մոտ, կատուներից հեռու", "На высоте около 2 м, рядом с кустом, где не достанут кошки"), t("Inside a dark cupboard", "Մութ պահարանի ներսում", "В тёмном шкафу")], 1),
    q(t("You started feeding birds in December. When should you stop?", "Թռչուններին սկսել ես կերակրել դեկտեմբերին։ Ե՞րբ պետք է դադարես։", "Ты начал кормить птиц в декабре. Когда можно перестать?"), [t("Next week", "Հաջորդ շաբաթ", "На следующей неделе"), t("Not before spring", "Ոչ շուտ, քան գարնանը", "Не раньше весны"), t("On the first snowy day", "Առաջին ձնառատ օրը", "В первый снежный день")], 1),
    match(t("Match the food to what it gives birds.", "Միացրո՛ւ կերը նրա հետ, ինչ այն տալիս է թռչուններին։", "Соедини корм с тем, что он даёт птицам."), [
      [t("Fat", "Ճարպ", "Жир"), t("Lots of energy to stay warm", "Շատ էներգիա՝ տաք մնալու համար", "Много энергии, чтобы не замёрзнуть")],
      [t("Clean water", "Մաքուր ջուր", "Чистая вода"), t("A drink when puddles freeze", "Խմելու ջուր, երբ ջրափոսերը սառչում են", "Питьё, когда лужи замёрзли")],
      [t("Salted crisps", "Աղի չիպս", "Солёные чипсы"), t("Harm: salt poisons them", "Վնաս․ աղը թունավորում է նրանց", "Вред: соль их отравляет")],
    ]),
  ],
});

export const howtoGrade3 = howtoCourse(
  3,
  {
    title: ["Find your way and help others", "Գտնել ճանապարհը և օգնել ուրիշներին", "Найти дорогу и помочь другим"],
    summary: [
      "Find north by the Sun and stars, help with a cut or a nosebleed, and feed the birds in winter.",
      "Հյուսիսը գտնել Արևով և աստղերով, օգնել կտրվածքի կամ քթից արյունահոսության դեպքում և ձմռանը կերակրել թռչուններին։",
      "Найти север по Солнцу и звёздам, помочь при порезе или кровотечении из носа и подкормить птиц зимой.",
    ],
  },
  [findNorth, smallCuts, birdFeeder],
);
