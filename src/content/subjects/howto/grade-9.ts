import { match, order, q, t } from "../../types";
import { howto, howtoCourse } from "./kit";

const puncture = howto({
  slug: "fix-a-puncture",
  title: ["How to fix a bike puncture", "Ինչպես նորոգել հեծանիվի ծակված անվադողը", "Как заклеить проколотое колесо велосипеда"],
  goals: {
    en: ["Take the tyre off and the inner tube out", "Find the hole and patch it", "Find what caused the puncture so it doesn't happen again"],
    hy: ["Հանել անվադողը և դուրս բերել խցիկը", "Գտնել անցքը և կարկատել", "Գտնել ծակվելու պատճառը, որ նորից չկրկնվի"],
    ru: ["Снять покрышку и вынуть камеру", "Найти дырку и заклеить её", "Найти причину прокола, чтобы он не повторился"],
  },
  body: {
    en: `You are halfway home and the back wheel goes soft and wobbly: a puncture. You can walk the bike home, or you can fix it yourself in 20 minutes with a kit that fits in your pocket. Once you've done it twice, it's easy, and you'll be the friend everyone calls when it happens to them.

~~~sim
safety level=ask
- Ask an adult to help the first time, especially with taking the wheel off and putting it back.
- Work off the road, on a pavement or in a yard, away from traffic.
- Glue fumes are strong: work outside and wash your hands afterwards.
- Before you ride again, check the wheel is firmly fixed and the brakes work.
~~~

## What you need

A repair kit (tyre levers, sandpaper, glue and patches, or self-adhesive patches), a pump that fits your valve, a bowl of water and a pen or chalk.

## Step by step

~~~sim
mechanism puncture
~~~

**Most punctures come back** because the thorn or bit of glass is still stuck in the tyre. Always run your fingers slowly round the inside of the tyre before putting the tube back. Feel carefully, it may be sharp.

**Two holes side by side, like a snake bite?** That's a "pinch flat": the tube was squeezed against the rim when you hit a kerb with too little air. The cure is to pump your tyres to the right pressure.

> 💡 **Did you know?** The air-filled tyre was invented in 1888 by John Boyd Dunlop, a vet in Belfast, to make his son's tricycle ride more smoothly on bumpy streets. Before that, bicycles had solid rubber or even iron tyres and were nicknamed "boneshakers".

~~~sim
sort
Finding the hole: does it help?
# Helps | Doesn't help
- Pumping a little air into the tube first = 1
- Dipping the tube in water and looking for bubbles = 1
- Listening for a hiss = 1
- Letting all the air out = 2
- Shaking the wheel = 2
- Painting the tube = 2
> A little air plus water or a careful ear will always find the hole.
~~~

## Practice

1. Find the tyre pressure written on the side of your bike tyres. Check your tyres with a pump gauge.
2. With an adult, take the inner tube out of an old wheel and put it back, without a puncture, just for practice.
3. Make a tiny repair kit for your bike: levers, patches, and a list of the steps on a card.`,
    hy: `Կես ճանապարհ ես անցել տուն, և հետևի անիվը փափկում և օրորվում է․ անվադողը ծակվել է։ Կարող ես հեծանիվը տուն քարշ տալ, կամ ինքդ նորոգել 20 րոպեում՝ գրպանում տեղավորվող հավաքածուով։ Երկու անգամ անելուց հետո դա հեշտ է, և դու կլինես այն ընկերը, ում բոլորը կզանգեն, երբ նրանց հետ էլ դա պատահի։

~~~sim
safety level=ask
- Առաջին անգամ խնդրի՛ր մեծահասակին օգնել, հատկապես անիվը հանելու և տեղադրելու հարցում։
- Աշխատի՛ր ճանապարհից դուրս՝ մայթին կամ բակում, երթևեկությունից հեռու։
- Սոսնձի հոտն ուժեղ է․ աշխատի՛ր դրսում և հետո լվա՛ ձեռքերդ։
- Նորից քշելուց առաջ ստուգի՛ր, որ անիվն ամուր է ամրացված, և արգելակներն աշխատում են։
~~~

## Ինչ է պետք

Նորոգման հավաքածու (անվադողի լծակներ, հղկաթուղթ, սոսինձ և կարկատաններ կամ ինքնակպչուն կարկատաններ), քո փականին համապատասխանող պոմպ, մի աման ջուր և գրիչ կամ կավիճ։

## Քայլ առ քայլ

~~~sim
mechanism puncture
~~~

**Ծակվածքների մեծ մասը կրկնվում է**, որովհետև փուշը կամ ապակու կտորը դեռ խրված է անվադողում։ Խցիկը նորից տեղադրելուց առաջ միշտ մատներդ դանդաղ անցկացրու անվադողի ներսով։ Զգույշ զննի՛ր, այն կարող է սուր լինել։

**Երկու անցք կողք կողքի, օձի խայթոցի պես՞։** Սա «ճզմված ծակվածք» է․ խցիկը սեղմվել է անվահեցին, երբ քիչ օդով մայթեզրին ես հարվածել։ Միջոցը՝ անվադողերում ճիշտ ճնշմամբ օդ լցնելն է։

> 💡 **Հետաքրքիր է իմանալ։** Օդով լցված անվադողը 1888 թվականին հորինել է Բելֆաստի անասնաբույժ Ջոն Բոյդ Դանլոպը, որպեսզի որդու եռանիվ հեծանիվն ավելի սահուն գնա խորդուբորդ փողոցներով։ Դրանից առաջ հեծանիվներն ունեին ամբողջական ռետինե կամ նույնիսկ երկաթե անվադողեր և կոչվում էին «ոսկրաթափահարիչներ»։

~~~sim
sort
Անցքը գտնելը․ օգնու՞մ է։
# Օգնում է | Չի օգնում
- Նախ խցիկի մեջ մի քիչ օդ լցնել = 1
- Խցիկը ջրի մեջ ընկղմել և պղպջակներ փնտրել = 1
- Ականջ դնել՝ արդյոք ֆշշում է = 1
- Ամբողջ օդը բաց թողնել = 2
- Անիվը թափահարել = 2
- Խցիկը ներկել = 2
> Մի քիչ օդը, ջուրը կամ ուշադիր ականջը միշտ կգտնեն անցքը։
~~~

## Առաջադրանքներ

1. Գտի՛ր հեծանիվիդ անվադողերի կողքին գրված ճնշումը։ Ստուգի՛ր անվադողերը մանոմետրով պոմպով։
2. Մեծահասակի հետ հին անիվից հանի՛ր խցիկը և նորից տեղադրի՛ր՝ առանց ծակվածքի, պարզապես վարժվելու համար։
3. Հեծանիվիդ համար պատրաստի՛ր փոքրիկ նորոգման հավաքածու՝ լծակներ, կարկատաններ և քայլերի ցուցակը քարտի վրա։`,
    ru: `Ты на полпути домой, и заднее колесо становится мягким и вихляет: прокол. Можно довести велосипед до дома пешком, а можно починить его самому за 20 минут набором, который помещается в кармане. Сделаешь так пару раз — и это станет легко, а ты станешь тем другом, которому звонят, когда такое случается.

~~~sim
safety level=ask
- В первый раз попроси взрослого помочь, особенно снять и поставить колесо.
- Работай не на дороге, а на тротуаре или во дворе, подальше от машин.
- У клея резкий запах: работай на улице и потом вымой руки.
- Прежде чем снова ехать, проверь, что колесо крепко закреплено и тормоза работают.
~~~

## Что понадобится

Ремнабор (монтажки, наждачка, клей и заплатки или самоклеящиеся заплатки), насос под твой ниппель, миска с водой и ручка или мел.

## Шаг за шагом

~~~sim
mechanism puncture
~~~

**Большинство проколов повторяется**, потому что шип или осколок стекла всё ещё торчит в покрышке. Прежде чем вставить камеру, всегда медленно проведи пальцами по внутренней стороне покрышки. Осторожно, может быть острое.

**Две дырки рядом, как укус змеи?** Это «пробой»: камеру зажало ободом, когда ты наехал на бордюр с недостаточным давлением. Лекарство — накачивать шины до нужного давления.

> 💡 **Интересно знать.** Надувную шину изобрёл в 1888 году Джон Бойд Данлоп, ветеринар из Белфаста, чтобы трёхколёсный велосипед его сына мягче ехал по ухабистым улицам. До этого у велосипедов были сплошные резиновые или даже железные шины, и их прозвали «костотрясами».

~~~sim
sort
Поиск дырки: помогает ли?
# Помогает | Не помогает
- Сначала немного накачать камеру = 1
- Опустить камеру в воду и искать пузырьки = 1
- Прислушаться к шипению = 1
- Выпустить весь воздух = 2
- Потрясти колесо = 2
- Покрасить камеру = 2
> Немного воздуха плюс вода или внимательное ухо всегда найдут дырку.
~~~

## Задания

1. Найди давление, написанное на боковине шин твоего велосипеда. Проверь шины насосом с манометром.
2. Вместе со взрослым вынь камеру из старого колеса и вставь обратно — без прокола, просто для тренировки.
3. Собери маленький ремнабор для своего велосипеда: монтажки, заплатки и карточку со списком шагов.`,
  },
  quiz: [
    q(t("What are tyre levers for?", "Ինչի՞ համար են անվադողի լծակները։", "Для чего нужны монтажки?"), [t("To lift the tyre edge off the rim", "Անվադողի եզրն անվահեցից հանելու համար", "Чтобы снять край покрышки с обода"), t("To pump air", "Օդ լցնելու համար", "Чтобы накачивать воздух"), t("To tighten the brakes", "Արգելակները ձգելու համար", "Чтобы подтянуть тормоза")], 0),
    q(t("What is the easiest way to find a tiny hole?", "Ո՞րն է փոքրիկ անցքը գտնելու ամենահեշտ ձևը։", "Как проще всего найти крошечную дырку?"), [t("Pump a little air and put the tube in water", "Մի քիչ օդ լցնել և խցիկը դնել ջրի մեջ", "Немного накачать и опустить камеру в воду"), t("Look at it in the dark", "Նայել մթության մեջ", "Рассмотреть в темноте"), t("Smell it", "Հոտոտել", "Понюхать")], 0),
    q(t("Why must you feel inside the tyre before refitting the tube?", "Ինչո՞ւ պետք է խցիկը տեղադրելուց առաջ զննել անվադողի ներսը։", "Зачем ощупывать покрышку изнутри, прежде чем ставить камеру?"), [t("To remove the thorn or glass that caused the puncture", "Հանելու ծակվածքի պատճառ դարձած փուշը կամ ապակին", "Чтобы убрать шип или стекло, из-за которого был прокол"), t("To warm it up", "Տաքացնելու համար", "Чтобы её согреть"), t("To clean the dust", "Փոշին մաքրելու համար", "Чтобы стереть пыль")], 0),
    order(t("Put the repair in order.", "Դասավորի՛ր նորոգման քայլերը։", "Расставь шаги ремонта по порядку."), [
      t("Lever the tyre off", "Լծակներով հանել անվադողը", "Снять покрышку монтажками"),
      t("Pull out the tube", "Դուրս բերել խցիկը", "Вынуть камеру"),
      t("Find and mark the hole", "Գտնել և նշել անցքը", "Найти и отметить дырку"),
      t("Sand, glue and wait", "Հղկել, սոսինձ քսել և սպասել", "Зашкурить, нанести клей и подождать"),
      t("Press the patch on", "Սեղմել կարկատանը", "Прижать заплатку"),
      t("Refit and pump up", "Տեղադրել և օդ լցնել", "Собрать и накачать"),
    ]),
    q(t("You find two small holes side by side. What probably caused them?", "Գտնում ես երկու փոքր անցք կողք կողքի։ Ինչի՞ց են, հավանաբար։", "Ты нашёл две маленькие дырки рядом. Что, скорее всего, случилось?"), [t("A pinch flat from too little air", "Քիչ օդի պատճառով ճզմվածք", "Пробой из-за слишком низкого давления"), t("A bee sting", "Մեղվի խայթոց", "Укус пчелы"), t("Old glue", "Հին սոսինձ", "Старый клей")], 0),
    match(t("Match the tool to its job.", "Միացրո՛ւ գործիքն իր գործի հետ։", "Соедини инструмент с его работой."), [
      [t("Sandpaper", "Հղկաթուղթ", "Наждачка"), t("Roughens the rubber so glue sticks", "Կոպտացնում է ռետինը, որ սոսինձը կպչի", "Делает резину шершавой, чтобы клей держался")],
      [t("Patch", "Կարկատան", "Заплатка"), t("Covers the hole", "Ծածկում է անցքը", "Закрывает дырку")],
      [t("Pump", "Պոմպ", "Насос"), t("Fills the tube with air", "Խցիկը լցնում է օդով", "Наполняет камеру воздухом")],
      [t("Tyre levers", "Լծակներ", "Монтажки"), t("Get the tyre off the rim", "Անվադողը հանում են անվահեցից", "Снимают покрышку с обода")],
    ]),
  ],
});

const fakeNews = howto({
  slug: "spot-fake-news",
  title: ["How to check a story before you share it", "Ինչպես ստուգել լուրը, նախքան կիսվելը", "Как проверить новость, прежде чем делиться"],
  goals: {
    en: ["Use the four SIFT moves on any post", "Spot fake web addresses and old photos", "Explain why false stories spread faster than true ones"],
    hy: ["Ցանկացած գրառման վրա կիրառել ստուգման չորս քայլը", "Նկատել կեղծ կայքերի հասցեները և հին լուսանկարները", "Բացատրել, թե ինչու են կեղծ լուրերն ավելի արագ տարածվում, քան ճշմարիտները"],
    ru: ["Применять четыре шага SIFT к любому посту", "Замечать поддельные адреса сайтов и старые фото", "Объяснить, почему ложь распространяется быстрее правды"],
  },
  body: {
    en: `Every day you see dozens of posts, videos and headlines. Some are true, some are mistakes, and some are made up on purpose to make you angry, scared or to make someone money. Professional fact-checkers have a quick method that anyone can use in under a minute. It is called **SIFT**: Stop, Investigate the source, Find better coverage, Trace claims to the original.

## Step by step

~~~sim
mechanism factcheck
~~~

## Why do fakes spread so fast?

Fake stories are designed to be **surprising** and **emotional**, because surprise and strong feelings make us click and share before we think. The platforms then show the most-shared posts to even more people. Each time you stop to check, you break that chain.

**Read sideways, not down.** It's tempting to read a suspicious page to the end to judge it. Fact-checkers do the opposite: they leave the page after a few seconds and open new tabs to see what others say about the site and the claim. This is called **lateral reading**.

~~~sim
diagram fakenews
~~~

> 💡 **Did you know?** In 2018 scientists at MIT studied about 126,000 stories shared on Twitter over ten years. They found that false stories spread "farther, faster, deeper" than true ones: true stories took about six times longer to reach 1,500 people. And it wasn't robots doing it: it was people.

~~~sim
sort
Red flag or good sign?
# Red flag | Good sign
- LOTS OF CAPITALS AND !!! = 1
- "Share before they delete it!" = 1
- No author and no date = 1
- Several trusted news sites report it = 2
- It links to the original study or document = 2
- The author's name and the date are given = 2
> Red flags tell you to check more carefully. Good signs make a story more likely to be true, but still check if it surprises you.
~~~

## Practice

1. Take a viral post or headline from this week and run SIFT on it. Write down what you found at each step.
2. Learn to do a reverse image search on your phone and try it on three photos from the news.
3. Make a list of three news sources you trust and explain to a friend why.`,
    hy: `Ամեն օր տեսնում ես տասնյակ գրառումներ, տեսանյութեր և վերնագրեր։ Մի մասը ճշմարիտ է, մի մասը՝ սխալ, իսկ մի մասը միտումնավոր հորինված է՝ քեզ բարկացնելու, վախեցնելու կամ ինչ-որ մեկին գումար բերելու համար։ Փաստերը ստուգող մասնագետներն ունեն արագ մեթոդ, որը յուրաքանչյուրը կարող է կիրառել մեկ րոպեից էլ քիչ ժամանակում։ Այն կոչվում է **SIFT**․ կանգ առ (Stop), ուսումնասիրի՛ր աղբյուրը (Investigate), գտի՛ր ավելի լավ լուսաբանում (Find), հետևի՛ր պնդումներին մինչև սկզբնաղբյուրը (Trace)։

## Քայլ առ քայլ

~~~sim
mechanism factcheck
~~~

## Ինչո՞ւ են կեղծիքներն այդքան արագ տարածվում

Կեղծ լուրերը ստեղծվում են **զարմանալի** և **հուզական**, որովհետև զարմանքն ու ուժեղ զգացմունքները ստիպում են մեզ սեղմել և կիսվել նախքան մտածելը։ Հետո հարթակներն ամենաշատ տարածված գրառումները ցույց են տալիս էլ ավելի շատ մարդկանց։ Ամեն անգամ, երբ կանգ ես առնում ստուգելու, կոտրում ես այդ շղթան։

**Կարդա՛ կողքից, ոչ թե ներքև։** Գայթակղիչ է կասկածելի էջը կարդալ մինչև վերջ՝ այն գնահատելու համար։ Փաստեր ստուգողներն անում են հակառակը․ մի քանի վայրկյան անց դուրս են գալիս էջից և բացում նոր ներդիրներ՝ տեսնելու, թե ինչ են ասում ուրիշները կայքի և պնդման մասին։ Սա կոչվում է **կողային ընթերցում**։

~~~sim
diagram fakenews
~~~

> 💡 **Հետաքրքիր է իմանալ։** 2018 թվականին MIT-ի գիտնականներն ուսումնասիրեցին Twitter-ում տասը տարվա ընթացքում տարածված մոտ 126 000 լուր։ Պարզվեց, որ կեղծ լուրերը տարածվում են «ավելի հեռու, ավելի արագ և ավելի խորը», քան ճշմարիտները․ ճշմարիտ լուրերին մոտ վեց անգամ ավելի երկար ժամանակ էր պետք 1500 մարդու հասնելու համար։ Եվ դա անում էին ոչ թե ռոբոտները, այլ մարդիկ։

~~~sim
sort
Վտանգի՞ նշան է, թե՞ լավ նշան։
# Վտանգի նշան | Լավ նշան
- ՇԱՏ ՄԵԾԱՏԱՌԵՐ ԵՎ !!! = 1
- «Կիսվի՛ր, մինչև ջնջեն» = 1
- Հեղինակ և ամսաթիվ չկա = 1
- Մի քանի վստահելի լրատվական կայք հաղորդում են այդ մասին = 2
- Հղում կա սկզբնական հետազոտությանը կամ փաստաթղթին = 2
- Նշված են հեղինակի անունը և ամսաթիվը = 2
> Վտանգի նշաններն ասում են, որ պետք է ավելի ուշադիր ստուգել։ Լավ նշանները լուրն ավելի հավանական են դարձնում, բայց եթե զարմացնում է, միևնույն է ստուգի՛ր։
~~~

## Առաջադրանքներ

1. Վերցրու այս շաբաթվա տարածված գրառումներից կամ վերնագրերից մեկը և կիրառի՛ր SIFT։ Գրի՛ր, թե ինչ գտար յուրաքանչյուր քայլում։
2. Սովորի՛ր հեռախոսով պատկերի հակառակ որոնում անել և փորձի՛ր լուրերից երեք լուսանկարի վրա։
3. Կազմի՛ր երեք լրատվական աղբյուրի ցուցակ, որոնց վստահում ես, և ընկերոջդ բացատրի՛ր՝ ինչու։`,
    ru: `Каждый день ты видишь десятки постов, видео и заголовков. Что-то правда, что-то ошибка, а что-то придумано нарочно — чтобы разозлить, напугать или заработать денег. У профессиональных фактчекеров есть быстрый метод, которым любой может воспользоваться меньше чем за минуту. Он называется **SIFT**: остановись (Stop), изучи источник (Investigate), найди другие источники (Find), проследи до первоисточника (Trace).

## Шаг за шагом

~~~sim
mechanism factcheck
~~~

## Почему фейки так быстро распространяются?

Фейки делают **неожиданными** и **эмоциональными**, потому что удивление и сильные чувства заставляют нажать и поделиться раньше, чем подумать. А платформы показывают самые расшаренные посты ещё большему числу людей. Каждый раз, когда ты останавливаешься проверить, ты рвёшь эту цепочку.

**Читай вбок, а не вниз.** Хочется дочитать подозрительную страницу до конца, чтобы оценить её. Фактчекеры делают наоборот: через несколько секунд уходят со страницы и открывают новые вкладки, чтобы узнать, что другие пишут о сайте и об утверждении. Это называется **латеральным чтением**.

~~~sim
diagram fakenews
~~~

> 💡 **Интересно знать.** В 2018 году учёные MIT изучили около 126 000 историй, которыми делились в Twitter за десять лет. Оказалось, что ложь распространяется «дальше, быстрее и глубже» правды: правдивым новостям требовалось примерно в шесть раз больше времени, чтобы дойти до 1500 человек. И делали это не роботы, а люди.

~~~sim
sort
Тревожный признак или хороший знак?
# Тревожный признак | Хороший знак
- МНОГО ЗАГЛАВНЫХ БУКВ И !!! = 1
- «Распространи, пока не удалили!» = 1
- Нет ни автора, ни даты = 1
- Об этом пишут несколько надёжных новостных сайтов = 2
- Есть ссылка на исходное исследование или документ = 2
- Указаны имя автора и дата = 2
> Тревожные признаки говорят: проверь внимательнее. Хорошие знаки делают новость вероятнее, но если она удивляет — всё равно проверь.
~~~

## Задания

1. Возьми популярный пост или заголовок этой недели и пройди по SIFT. Запиши, что ты нашёл на каждом шаге.
2. Научись делать обратный поиск по картинке на телефоне и попробуй на трёх фото из новостей.
3. Составь список из трёх источников новостей, которым доверяешь, и объясни другу почему.`,
  },
  quiz: [
    q(t("A post makes you really angry. What is the first SIFT move?", "Գրառումը քեզ շատ է բարկացնում։ Ո՞րն է SIFT-ի առաջին քայլը։", "Пост тебя сильно разозлил. Какой первый шаг SIFT?"), [t("Share it quickly", "Արագ կիսվել", "Быстро поделиться"), t("Stop", "Կանգ առնել", "Остановиться"), t("Write an angry comment", "Բարկացած մեկնաբանություն գրել", "Написать гневный комментарий")], 1),
    q(t("What is \"lateral reading\"?", "Ի՞նչ է «կողային ընթերցումը»։", "Что такое «латеральное чтение»?"), [t("Leaving the page to see what other sources say about it", "Դուրս գալ էջից և տեսնել, թե ինչ են ասում դրա մասին այլ աղբյուրներ", "Уйти со страницы и посмотреть, что о ней пишут другие источники"), t("Reading the page very slowly", "Էջը շատ դանդաղ կարդալ", "Читать страницу очень медленно"), t("Reading only the headlines", "Կարդալ միայն վերնագրերը", "Читать только заголовки")], 0),
    q(t("How can you check whether a photo is really new?", "Ինչպե՞ս ստուգել, որ լուսանկարն իսկապես նոր է։", "Как проверить, что фото действительно новое?"), [t("Do a reverse image search", "Կատարել պատկերի հակառակ որոնում", "Сделать обратный поиск по картинке"), t("Zoom in a lot", "Շատ մեծացնել", "Сильно увеличить"), t("Count the likes", "Հաշվել հավանումները", "Посчитать лайки")], 0),
    order(t("Put the SIFT moves in order.", "Դասավորի՛ր SIFT-ի քայլերը։", "Расставь шаги SIFT по порядку."), [
      t("Stop", "Կանգ առ", "Остановись"),
      t("Investigate the source", "Ուսումնասիրի՛ր աղբյուրը", "Изучи источник"),
      t("Find better coverage", "Գտի՛ր ավելի լավ աղբյուրներ", "Найди другие источники"),
      t("Trace to the original", "Հետևի՛ր մինչև սկզբնաղբյուրը", "Проследи до первоисточника"),
    ]),
    q(t("Why do false stories often spread faster than true ones?", "Ինչո՞ւ են կեղծ լուրերը հաճախ ավելի արագ տարածվում, քան ճշմարիտները։", "Почему ложь часто распространяется быстрее правды?"), [t("They are surprising and emotional, so people share before thinking", "Դրանք զարմանալի և հուզական են, և մարդիկ կիսվում են նախքան մտածելը", "Она неожиданная и эмоциональная, и люди делятся, не подумав"), t("They are always shorter", "Դրանք միշտ ավելի կարճ են", "Она всегда короче"), t("Only robots share them", "Դրանցով կիսվում են միայն ռոբոտները", "Ею делятся только роботы")], 0),
    match(t("Match the warning sign to what it suggests.", "Միացրո՛ւ նախազգուշական նշանն այն բանի հետ, ինչի մասին է այն վկայում։", "Соедини тревожный признак с тем, что он означает."), [
      [t("A strange web address", "Տարօրինակ կայքի հասցե", "Странный адрес сайта"), t("The site may copy a real one", "Կայքը կարող է իրականի կրկնօրինակը լինել", "Сайт может подделываться под настоящий")],
      [t("An old photo", "Հին լուսանկար", "Старое фото"), t("The picture is from another event", "Նկարն այլ դեպքից է", "Снимок с другого события")],
      [t("No other news sites report it", "Այլ լրատվական կայքերը չեն հաղորդում", "Другие сайты об этом не пишут"), t("The story may be made up", "Լուրը կարող է հորինված լինել", "История может быть выдумана")],
    ]),
  ],
});

const breadLesson = howto({
  slug: "bake-bread",
  title: ["How to bake your own bread", "Ինչպես թխել քո սեփական հացը", "Как испечь свой хлеб"],
  goals: {
    en: ["Make, knead and shape a simple bread dough", "Explain what yeast, gluten and salt do", "Bake bread safely and tell when it is done"],
    hy: ["Պատրաստել, հունցել և ձևավորել պարզ հացի խմոր", "Բացատրել, թե ինչ են անում խմորիչը, սնձանը և աղը", "Անվտանգ թխել հացը և իմանալ, թե երբ է պատրաստ"],
    ru: ["Замесить, вымесить и сформовать простое тесто", "Объяснить, что делают дрожжи, клейковина и соль", "Безопасно испечь хлеб и понять, когда он готов"],
  },
  body: {
    en: `Flour, water, yeast and salt: four simple things that, with a bit of time and your hands, turn into a warm, crusty loaf. Baking bread is part kitchen, part science lab: you are working with living yeast, stretchy proteins and a chemical reaction that browns the crust. And nothing smells better.

~~~sim
safety level=ask
- Use the oven only with an adult. Oven trays and the inside of the oven are much hotter than boiling water.
- Always use oven gloves, and open the oven door away from your face: hot steam comes out.
- Wash your hands before you start, and tie back long hair.
~~~

## What you need

500 g strong white flour, 300 ml warm water (pleasant to the touch, not hot), 7 g dried yeast (one sachet), 10 g salt (two teaspoons), a big bowl, a clean tea towel and a baking tray.

## Step by step

~~~sim
mechanism bread
~~~

## The science inside the loaf

- **Yeast** is a tiny living fungus. It eats the sugars in flour and breathes out **carbon dioxide** gas. The gas makes thousands of bubbles that make the dough rise. Too hot water (over about 50 °C) kills it.
- **Gluten** forms when two proteins in flour meet water. Kneading lines them up into a stretchy net, like a balloon that traps the gas.
- **Salt** adds taste and slows the yeast down a little, so the bubbles stay small and even.
- In the oven, the outside turns brown through the **Maillard reaction**, the same reaction that browns toast and grilled meat.

> 💡 **Did you know?** The oldest bread ever found was baked about 14,400 years ago by hunter-gatherers in what is now Jordan, before farming began. In Armenia, the thin flatbread **lavash** is baked by slapping dough onto the hot wall of a clay oven called a tonir. In 2014 UNESCO added Armenian lavash to its list of the world's intangible cultural heritage.

~~~sim
sort
What does each ingredient do?
# Flour | Yeast | Salt
- Gives the proteins that form gluten = 1
- Gives the starch that becomes the soft crumb = 1
- Eats sugars = 2
- Makes carbon dioxide gas = 2
- Slows the yeast a little = 3
- Makes the bread tasty = 3
> Flour builds the loaf, yeast lifts it, and salt keeps it tasty and under control.
~~~

## Practice

1. Bake the loaf with an adult. Take a photo of the dough before and after rising: how much bigger did it get?
2. Try an experiment: make two tiny dough balls, one with yeast and one without. Compare them after an hour.
3. Ask an older relative how bread or lavash was baked in their childhood, and write down one recipe.`,
    hy: `Ալյուր, ջուր, խմորիչ և աղ․ չորս պարզ բան, որոնք մի քիչ ժամանակով և քո ձեռքերով դառնում են տաք, խրթխրթան հաց։ Հաց թխելը մասամբ խոհանոց է, մասամբ՝ գիտական լաբորատորիա․ աշխատում ես կենդանի խմորիչի, առաձգական սպիտակուցների և քիմիական ռեակցիայի հետ, որը կեղևը շագանակագույն է դարձնում։ Եվ ոչինչ ավելի լավ հոտ չունի։

~~~sim
safety level=ask
- Ջեռոցն օգտագործի՛ր միայն մեծահասակի հետ։ Ջեռոցի թիթեղներն ու ներսը շատ ավելի տաք են, քան եռացող ջուրը։
- Միշտ օգտագործի՛ր խոհանոցային ձեռնոցներ և ջեռոցի դուռը բացի՛ր դեմքիցդ հեռու․ տաք գոլորշի է դուրս գալիս։
- Սկսելուց առաջ լվա՛ ձեռքերդ և հավաքի՛ր երկար մազերդ։
~~~

## Ինչ է պետք

500 գ բարձր տեսակի ալյուր, 300 մլ գոլ ջուր (հաճելի ձեռքի համար, ոչ տաք), 7 գ չոր խմորիչ (մեկ փաթեթ), 10 գ աղ (երկու թեյի գդալ), մեծ աման, մաքուր սրբիչ և թխելու թիթեղ։

## Քայլ առ քայլ

~~~sim
mechanism bread
~~~

## Գիտությունը հացի ներսում

- **Խմորիչը** փոքրիկ կենդանի սունկ է։ Այն սնվում է ալյուրի շաքարներով և արտաշնչում **ածխաթթու գազ**։ Գազը հազարավոր պղպջակներ է առաջացնում, որոնք բարձրացնում են խմորը։ Չափազանց տաք ջուրը (մոտ 50 °C-ից բարձր) սպանում է այն։
- **Սնձանն** առաջանում է, երբ ալյուրի երկու սպիտակուց հանդիպում են ջրին։ Հունցելը դրանք դասավորում է առաձգական ցանցի մեջ, որը փուչիկի պես պահում է գազը։
- **Աղը** համ է տալիս և մի քիչ դանդաղեցնում խմորիչը, որ պղպջակները մնան փոքր և հավասար։
- Ջեռոցում արտաքին մասը շագանակագույն է դառնում **Մայարի ռեակցիայի** շնորհիվ, նույն ռեակցիայի, որը կարմրացնում է տոստը և խորոված միսը։

> 💡 **Հետաքրքիր է իմանալ։** Երբևէ գտնված ամենահին հացը թխել են մոտ 14 400 տարի առաջ որսորդ-հավաքողները ներկայիս Հորդանանի տարածքում՝ նախքան երկրագործության սկիզբը։ Հայաստանում բարակ **լավաշը** թխում են՝ խմորը կպցնելով տոնիր կոչվող կավե թոնրի տաք պատին։ 2014 թվականին ՅՈՒՆԵՍԿՕ-ն հայկական լավաշն ընդգրկեց աշխարհի ոչ նյութական մշակութային ժառանգության ցանկում։

~~~sim
sort
Ի՞նչ է անում յուրաքանչյուր բաղադրիչը։
# Ալյուր | Խմորիչ | Աղ
- Տալիս է սնձան առաջացնող սպիտակուցները = 1
- Տալիս է օսլան, որը դառնում է փափուկ միջուկ = 1
- Սնվում է շաքարներով = 2
- Արտադրում է ածխաթթու գազ = 2
- Մի քիչ դանդաղեցնում է խմորիչը = 3
- Հացը համեղ է դարձնում = 3
> Ալյուրը կառուցում է հացը, խմորիչը բարձրացնում է, իսկ աղը համեղ և վերահսկելի է պահում։
~~~

## Առաջադրանքներ

1. Մեծահասակի հետ թխի՛ր հացը։ Լուսանկարի՛ր խմորը բարձրանալուց առաջ և հետո․ որքա՞ն է մեծացել։
2. Փորձ արա՛․ պատրաստի՛ր խմորի երկու փոքրիկ գնդիկ՝ մեկը խմորիչով, մյուսը՝ առանց։ Մեկ ժամ անց համեմատի՛ր։
3. Հարցրո՛ւ տարեց ազգականիդ, թե ինչպես էին թխում հացը կամ լավաշը նրա մանկության տարիներին, և գրի՛ր մեկ բաղադրատոմս։`,
    ru: `Мука, вода, дрожжи и соль — четыре простые вещи, которые с небольшим количеством времени и твоими руками превращаются в тёплую хрустящую буханку. Печь хлеб — это наполовину кухня, наполовину научная лаборатория: ты работаешь с живыми дрожжами, тянущимися белками и химической реакцией, от которой румянится корочка. И ничто не пахнет лучше.

~~~sim
safety level=ask
- Пользуйся духовкой только со взрослым. Противни и стенки духовки гораздо горячее кипятка.
- Всегда бери прихватки и открывай дверцу духовки, отвернув лицо: выходит горячий пар.
- Перед началом вымой руки и убери длинные волосы.
~~~

## Что понадобится

500 г хлебопекарной муки, 300 мл тёплой воды (приятной на ощупь, не горячей), 7 г сухих дрожжей (один пакетик), 10 г соли (две чайные ложки), большая миска, чистое полотенце и противень.

## Шаг за шагом

~~~sim
mechanism bread
~~~

## Наука внутри буханки

- **Дрожжи** — крошечные живые грибки. Они едят сахара из муки и выдыхают **углекислый газ**. Газ образует тысячи пузырьков, и тесто поднимается. Слишком горячая вода (выше примерно 50 °C) их убивает.
- **Клейковина** образуется, когда два белка муки встречаются с водой. Замес выстраивает их в тянущуюся сетку, которая, как воздушный шарик, удерживает газ.
- **Соль** добавляет вкус и немного замедляет дрожжи, чтобы пузырьки оставались мелкими и ровными.
- В духовке корочка темнеет благодаря **реакции Майяра** — той же, от которой румянятся тосты и жареное мясо.

> 💡 **Интересно знать.** Самому древнему найденному хлебу около 14 400 лет: его испекли охотники-собиратели на территории нынешней Иордании ещё до появления земледелия. В Армении тонкий **лаваш** пекут, прилепляя тесто к горячей стенке глиняной печи — тонира. В 2014 году ЮНЕСКО внесло армянский лаваш в список нематериального культурного наследия человечества.

~~~sim
sort
Что делает каждый ингредиент?
# Мука | Дрожжи | Соль
- Даёт белки, из которых образуется клейковина = 1
- Даёт крахмал, который становится мякишем = 1
- Едят сахара = 2
- Выделяют углекислый газ = 2
- Немного замедляет дрожжи = 3
- Делает хлеб вкусным = 3
> Мука строит буханку, дрожжи её поднимают, а соль делает вкусной и держит под контролем.
~~~

## Задания

1. Испеки хлеб со взрослым. Сфотографируй тесто до и после подъёма: во сколько раз оно выросло?
2. Проведи опыт: сделай два маленьких шарика теста — с дрожжами и без. Сравни их через час.
3. Спроси кого-то из старших родственников, как пекли хлеб или лаваш в их детстве, и запиши один рецепт.`,
  },
  quiz: [
    q(t("What makes bread dough rise?", "Ինչի՞ց է հացի խմորը բարձրանում։", "Отчего поднимается тесто?"), [t("Carbon dioxide gas made by yeast", "Խմորիչի արտադրած ածխաթթու գազից", "От углекислого газа, который выделяют дрожжи"), t("The salt", "Աղից", "От соли"), t("Cold water", "Սառը ջրից", "От холодной воды")], 0),
    q(t("Why do you knead the dough?", "Ինչո՞ւ են խմորը հունցում։", "Зачем месить тесто?"), [t("To build a stretchy gluten net that traps gas", "Ստեղծելու համար առաձգական սնձանային ցանց, որը պահում է գազը", "Чтобы создать тянущуюся сетку клейковины, удерживающую газ"), t("To make it colder", "Ավելի սառը դարձնելու համար", "Чтобы оно стало холоднее"), t("To remove the salt", "Աղը հեռացնելու համար", "Чтобы убрать соль")], 0),
    q(t("The water was boiling hot when you added the yeast. What happens?", "Երբ խմորիչն ավելացրիր, ջուրն եռման աստիճանի տաք էր։ Ի՞նչ կլինի։", "Ты добавил дрожжи в кипяток. Что будет?"), [t("The yeast dies and the dough won't rise", "Խմորիչը կմահանա, և խմորը չի բարձրանա", "Дрожжи погибнут, и тесто не поднимется"), t("It rises twice as fast", "Երկու անգամ ավելի արագ կբարձրանա", "Оно поднимется вдвое быстрее"), t("Nothing changes", "Ոչինչ չի փոխվի", "Ничего не изменится")], 0),
    order(t("Put the baking steps in order.", "Դասավորի՛ր թխելու քայլերը։", "Расставь шаги выпечки по порядку."), [
      t("Mix the ingredients", "Խառնել բաղադրիչները", "Смешать ингредиенты"),
      t("Knead for 10 minutes", "Հունցել 10 րոպե", "Месить 10 минут"),
      t("Let it rise until doubled", "Թողնել, որ կրկնապատկվի", "Дать подняться вдвое"),
      t("Shape and rise again", "Ձևավորել և նորից թողնել բարձրանա", "Сформовать и снова дать подняться"),
      t("Bake at 220 °C", "Թխել 220 °C-ում", "Выпекать при 220 °C"),
      t("Tap the bottom and cool", "Թխթխացնել հատակին և սառեցնել", "Постучать по донышку и остудить"),
    ]),
    q(t("How can you tell the loaf is baked through?", "Ինչպե՞ս իմանալ, որ հացը լրիվ թխվել է։", "Как понять, что хлеб пропёкся?"), [t("Tapping the bottom sounds hollow", "Հատակին թխթխացնելիս դատարկ ձայն է հանում", "При постукивании по донышку звук глухой и «пустой»"), t("It smells of yeast", "Խմորիչի հոտ ունի", "Он пахнет дрожжами"), t("It is still soft on top", "Վերևից դեռ փափուկ է", "Сверху он ещё мягкий")], 0),
    match(t("Match the word to its meaning.", "Միացրո՛ւ բառն իր իմաստի հետ։", "Соедини слово с его значением."), [
      [t("Gluten", "Սնձան", "Клейковина"), t("Stretchy protein net", "Առաձգական սպիտակուցային ցանց", "Тянущаяся белковая сетка")],
      [t("Yeast", "Խմորիչ", "Дрожжи"), t("Living fungus that makes gas", "Կենդանի սունկ, որը գազ է արտադրում", "Живой грибок, выделяющий газ")],
      [t("Maillard reaction", "Մայարի ռեակցիա", "Реакция Майяра"), t("Browns the crust", "Շագանակագույն է դարձնում կեղևը", "Подрумянивает корочку")],
      [t("Tonir", "Թոնիր", "Тонир"), t("Clay oven for lavash", "Կավե վառարան լավաշի համար", "Глиняная печь для лаваша")],
    ]),
  ],
});

export const howtoGrade9 = howtoCourse(
  9,
  {
    title: ["Fix it, check it, bake it", "Նորոգի՛ր, ստուգի՛ր, թխի՛ր", "Почини, проверь, испеки"],
    summary: [
      "Patch a bike puncture, check a story before you share it, and bake a loaf of bread from scratch.",
      "Կարկատել հեծանիվի ծակված անվադողը, ստուգել լուրը նախքան կիսվելը և զրոյից հաց թխել։",
      "Заклеить прокол на велосипеде, проверить новость, прежде чем делиться, и испечь хлеб с нуля.",
    ],
  },
  [puncture, fakeNews, breadLesson],
);
