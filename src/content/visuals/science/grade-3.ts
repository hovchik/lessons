import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade3: VisualMap[number] = {
  "water-and-its-states": [
    "particles mode=states",
    "mechanism watercycle",
    closer(
      `**Why fish do not freeze in winter.** Almost every material gets smaller when it freezes, but water does the opposite: ice takes up more room than the water it came from, so it is lighter and **floats**. In winter a lake freezes from the top. The ice becomes a lid that keeps the cold air out, and the water at the bottom stays at about 4 °C. Fish, frogs and water plants spend the winter there safely. If ice sank, lakes would freeze solid from the bottom up.

**Tea on a mountain top.** At sea level water boils at 100 °C. The higher you go, the thinner the air pressing on the water, and the sooner it boils. In Yerevan water boils at about 97 °C, and on the top of Aragats at only about 86 °C. Boiling water there is not as hot, so potatoes and pasta take longer to cook. Climbers on the highest mountains use special pots with tight lids to cook faster.`,
      `**Ինչու ձկները ձմռանը չեն սառչում։** Գրեթե յուրաքանչյուր նյութ սառչելիս փոքրանում է, բայց ջուրն անում է հակառակը․ սառույցն ավելի շատ տեղ է զբաղեցնում, քան այն ջուրը, որից առաջացել է, ուստի ավելի թեթև է և **լողում է**։ Ձմռանը լիճը սառչում է վերևից։ Սառույցը դառնում է կափարիչ, որը ցուրտ օդը ներս չի թողնում, իսկ հատակի ջուրը մնում է մոտ 4 °C։ Ձկները, գորտերն ու ջրային բույսերն այնտեղ ապահով ձմեռում են։ Եթե սառույցը սուզվեր, լճերը ներքևից վեր ամբողջովին կսառչեին։

**Թեյ լեռան գագաթին։** Ծովի մակարդակում ջուրն եռում է 100 °C-ում։ Որքան բարձր ես բարձրանում, այնքան ավելի նոսր է ջրի վրա ճնշող օդը, և ջուրն այնքան շուտ է եռում։ Երևանում ջուրն եռում է մոտ 97 °C-ում, իսկ Արագածի գագաթին՝ ընդամենը մոտ 86 °C-ում։ Այնտեղ եռացող ջուրն այնքան տաք չէ, և կարտոֆիլն ու մակարոնն ավելի երկար են եփվում։ Ամենաբարձր լեռների լեռնագնացներն օգտագործում են ամուր կափարիչներով հատուկ կաթսաներ՝ ավելի արագ եփելու համար։`,
      `**Почему рыбы не замерзают зимой.** Почти любое вещество при замерзании уменьшается, а вода — наоборот: лёд занимает больше места, чем вода, из которой он получился, поэтому он легче и **плавает**. Зимой озеро замерзает сверху. Лёд становится крышкой, которая не пускает холодный воздух, а вода у дна остаётся около 4 °C. Рыбы, лягушки и водные растения спокойно зимуют там. Если бы лёд тонул, озёра промерзали бы целиком снизу вверх.

**Чай на вершине горы.** На уровне моря вода кипит при 100 °C. Чем выше, тем реже воздух, который давит на воду, и тем раньше она закипает. В Ереване вода кипит примерно при 97 °C, а на вершине Арагаца — всего около 86 °C. Кипяток там не такой горячий, и картошка с макаронами варятся дольше. Альпинисты на самых высоких горах пользуются особыми кастрюлями с плотными крышками, чтобы варить быстрее.`,
    ),
    ask(2, {
      en: ["Why does a lake freeze from the top and not from the bottom?", ["The bottom is warmed by the Sun", "Ice is lighter than water and floats", "Fish keep the bottom warm"], "Ice takes up more room than water, so it floats and makes a lid; the water at the bottom stays at about 4 °C."],
      hy: ["Ինչու՞ է լիճը սառչում վերևից, այլ ոչ թե ներքևից։", ["Հատակը տաքացնում է Արեգակը", "Սառույցն ավելի թեթև է, քան ջուրը, և լողում է", "Ձկներն են տաք պահում հատակը"], "Սառույցն ավելի շատ տեղ է զբաղեցնում, քան ջուրը, ուստի լողում է և կափարիչ է դառնում․ հատակի ջուրը մնում է մոտ 4 °C։"],
      ru: ["Почему озеро замерзает сверху, а не снизу?", ["Дно греет Солнце", "Лёд легче воды и плавает", "Рыбы греют дно"], "Лёд занимает больше места, чем вода, поэтому плавает и становится крышкой; вода у дна остаётся около 4 °C."],
    }),
  ],
  "air-and-soil": [
    "diagram soil",
    closer(
      `**The first passengers of a balloon.** In 1783 two French brothers, the **Montgolfier brothers**, made a huge balloon of cloth and paper and filled it with hot air from a fire. Nobody knew whether it was safe to fly so high, so the first passengers were a **sheep, a duck and a rooster**. In front of the king at Versailles, the balloon rose into the sky and landed a few kilometres away after about eight minutes. All three animals were fine! Two months later the first people flew in a hot-air balloon over Paris.

**A crowded teaspoon.** Soil looks like plain dirt, but it is full of life. A single teaspoon of good garden soil can hold more tiny living things, too small to see, than there are people on the whole Earth. Together with earthworms, beetles and fungi they turn fallen leaves and dead plants into **humus**, the dark food of the soil. That is why fertile soil is dark and smells of the forest after rain.`,
      `**Օդապարիկի առաջին ուղևորները։** 1783 թվականին ֆրանսիացի երկու եղբայր՝ **Մոնգոլֆիե եղբայրները**, կտորից ու թղթից հսկայական օդապարիկ պատրաստեցին և այն լցրին խարույկի տաք օդով։ Ոչ ոք չգիտեր՝ արդյոք անվտանգ է այդքան բարձր թռչելը, ուստի առաջին ուղևորներն եղան **մի ոչխար, մի բադ և մի աքաղաղ**։ Վերսալում՝ թագավորի ներկայությամբ, օդապարիկը բարձրացավ երկինք և մոտ ութ րոպե անց իջավ մի քանի կիլոմետր հեռու։ Երեք կենդանիներն էլ ողջ-առողջ էին։ Երկու ամիս անց առաջին մարդիկ օդապարիկով թռան Փարիզի վրայով։

**Մարդաշատ թեյի գդալ։** Հողը նման է սովորական կեղտի, բայց լի է կյանքով։ Լավ այգեհողի մեկ թեյի գդալում կարող են լինել ավելի շատ մանր, աչքով անտեսանելի կենդանի էակներ, քան մարդիկ ամբողջ Երկրի վրա։ Անձրևորդների, բզեզների ու սնկերի հետ միասին նրանք թափված տերևներն ու մեռած բույսերը վերածում են **հումուսի**՝ հողի մուգ սննդի։ Ահա թե ինչու է բերրի հողը մուգ և անձրևից հետո անտառի հոտ ունի։`,
      `**Первые пассажиры воздушного шара.** В 1783 году два француза, **братья Монгольфье**, сделали огромный шар из ткани и бумаги и наполнили его горячим воздухом от костра. Никто не знал, безопасно ли подниматься так высоко, поэтому первыми пассажирами стали **баран, утка и петух**. На глазах у короля в Версале шар поднялся в небо и примерно через восемь минут опустился в нескольких километрах. Все три животных были целы! Через два месяца первые люди пролетели на воздушном шаре над Парижем.

**Переполненная чайная ложка.** Почва похожа на обычную грязь, но она полна жизни. В одной чайной ложке хорошей садовой почвы может быть больше крошечных живых существ, невидимых глазу, чем людей на всей Земле. Вместе с дождевыми червями, жуками и грибами они превращают опавшие листья и мёртвые растения в **перегной** — тёмную пищу почвы. Поэтому плодородная почва тёмная и пахнет лесом после дождя.`,
    ),
    ask(3, {
      en: ["Who were the first passengers of a hot-air balloon in 1783?", ["Two French brothers", "A king and a queen", "A sheep, a duck and a rooster"], "Nobody knew if flying so high was safe, so animals went first; people flew two months later."],
      hy: ["Ովքե՞ր էին օդապարիկի առաջին ուղևորները 1783 թվականին։", ["Ֆրանսիացի երկու եղբայր", "Թագավորն ու թագուհին", "Մի ոչխար, մի բադ և մի աքաղաղ"], "Ոչ ոք չգիտեր՝ արդյոք անվտանգ է այդքան բարձր թռչելը, ուստի առաջինը կենդանիներն էին, իսկ մարդիկ թռան երկու ամիս անց։"],
      ru: ["Кто были первыми пассажирами воздушного шара в 1783 году?", ["Два брата-француза", "Король и королева", "Баран, утка и петух"], "Никто не знал, безопасно ли подниматься так высоко, поэтому первыми полетели животные, а люди — через два месяца."],
    }),
  ],
  "sun-earth-moon": [
    "mechanism moonphases",
    "diagram solarsystem",
    closer(
      `**Light from the past.** Light is the fastest thing there is, yet even light needs time to cross space. Sunlight takes about **8 minutes** to reach the Earth, so when you see the Sun, you see it as it was 8 minutes ago. Moonlight, which is sunlight bounced off the Moon, takes just over **1 second** to reach us. And the light of some stars you see at night set out before your grandparents were born.

**Footprints that stay for ever.** On 20 July 1969 **Neil Armstrong** stepped onto the Moon and said: "That's one small step for a man, one giant leap for mankind." Between 1969 and 1972 twelve astronauts walked on the Moon. Their footprints are still there today, because the Moon has no air, no wind and no rain to wash them away. Only the dust from tiny falling space rocks will slowly cover them, over millions of years.`,
      `**Լույս անցյալից։** Լույսն ամենաարագ բանն է, բայց նույնիսկ լույսին ժամանակ է պետք տիեզերքն անցնելու համար։ Արևի լույսն Երկիր է հասնում մոտ **8 րոպեում**, ուստի, երբ նայում ես Արեգակին, տեսնում ես այն այնպես, ինչպես էր 8 րոպե առաջ։ Լուսնի լույսը, որը Լուսնից անդրադարձած արևի լույսն է, մեզ է հասնում մեկ վայրկյանից մի փոքր ավելի ժամանակում։ Իսկ որոշ աստղերի լույսը, որ տեսնում ես գիշերը, ճամփա է ընկել դեռ քո պապիկների ու տատիկների ծնվելուց առաջ։

**Հետքեր, որոնք մնում են ընդմիշտ։** 1969 թվականի հուլիսի 20-ին **Նիլ Արմսթրոնգը** ոտք դրեց Լուսնի վրա և ասաց․ «Սա մեկ փոքրիկ քայլ է մարդու համար, բայց հսկայական թռիչք՝ մարդկության համար»։ 1969-ից 1972 թվականներին Լուսնի վրա քայլեցին տասներկու տիեզերագնաց։ Նրանց հետքերն այնտեղ են մինչև այսօր, որովհետև Լուսինը չունի օդ, քամի և անձրև, որոնք կջնջեին դրանք։ Միայն տիեզերքից ընկնող մանր քարերի փոշին կամաց-կամաց կծածկի դրանք միլիոնավոր տարիների ընթացքում։`,
      `**Свет из прошлого.** Свет — самое быстрое, что есть на свете, но даже ему нужно время, чтобы пересечь космос. Солнечный свет идёт до Земли около **8 минут**, так что, глядя на Солнце, ты видишь его таким, каким оно было 8 минут назад. Лунный свет — это солнечный свет, отражённый Луной, — доходит до нас чуть больше чем за **1 секунду**. А свет некоторых звёзд, которые ты видишь ночью, отправился в путь ещё до рождения твоих бабушек и дедушек.

**Следы, которые остаются навсегда.** 20 июля 1969 года **Нил Армстронг** ступил на Луну и сказал: «Это один маленький шаг для человека, но гигантский скачок для человечества». С 1969 по 1972 год по Луне прошли двенадцать астронавтов. Их следы там до сих пор, потому что на Луне нет воздуха, ветра и дождя, которые могли бы их стереть. Лишь пыль от крошечных падающих космических камешков будет медленно засыпать их миллионы лет.`,
    ),
    ask(1, {
      en: ["How long does sunlight take to reach the Earth?", ["About 8 minutes", "About 1 second", "About 1 day"], "Light is very fast, but the Sun is far away: about 8 minutes. Moonlight takes just over 1 second."],
      hy: ["Որքա՞ն ժամանակում է արևի լույսը հասնում Երկիր։", ["Մոտ 8 րոպեում", "Մոտ 1 վայրկյանում", "Մոտ 1 օրում"], "Լույսը շատ արագ է, բայց Արեգակը հեռու է․ մոտ 8 րոպե։ Լուսնի լույսը հասնում է մեկ վայրկյանից մի փոքր ավելի ժամանակում։"],
      ru: ["За сколько солнечный свет доходит до Земли?", ["Примерно за 8 минут", "Примерно за 1 секунду", "Примерно за 1 день"], "Свет очень быстрый, но Солнце далеко: около 8 минут. Лунный свет идёт чуть больше секунды."],
    }),
  ],
  "food-chains": [
    "pyramid 🌾 🐇 🦊 energy=10000",
    closer(
      `**The war on sparrows.** In 1958 the leaders of China decided that sparrows were pests, because they ate grain from the fields. Millions of people banged pots and drums so that the sparrows could not land, until the exhausted birds fell from the sky. But sparrows also eat **insects**. Without them, locusts and other insects multiplied and ate even more of the harvest than the sparrows ever had. Soon sparrows were taken off the list of pests. A broken food chain hurt the people most of all.

**Beetles to the rescue.** When farmers brought cows to Australia, a strange problem appeared: cow dung stayed lying in the fields for months. The Australian dung beetles were used to the small, dry droppings of kangaroos and did not touch it. Flies bred in the dung, and grass could not grow under it. From the 1960s scientists brought dozens of kinds of **dung beetles** from Africa and Europe. The beetles buried the dung, the soil got richer and the grass grew back. Decomposers are an important link too!`,
      `**Պատերազմ ճնճղուկների դեմ։** 1958 թվականին Չինաստանի ղեկավարները որոշեցին, որ ճնճղուկները վնասատուներ են, որովհետև դաշտերից հացահատիկ են ուտում։ Միլիոնավոր մարդիկ թմբկահարում էին կաթսաներ ու թմբուկներ, որպեսզի ճնճղուկները չկարողանան իջնել, մինչև որ ուժասպառ թռչուններն ընկնում էին երկնքից։ Բայց ճնճղուկներն ուտում են նաև **միջատներ**։ Առանց նրանց մորեխներն ու այլ միջատներ բազմացան և բերքից ավելին կերան, քան երբևէ ճնճղուկները։ Շուտով ճնճղուկներին հանեցին վնասատուների ցուցակից։ Խզված սննդային շղթան ամենից շատ վնասեց հենց մարդկանց։

**Բզեզներն օգնության են գալիս։** Երբ ֆերմերները կովեր բերեցին Ավստրալիա, տարօրինակ խնդիր առաջացավ․ կովի գոմաղբն ամիսներով մնում էր դաշտերում։ Ավստրալիայի գոմաղբաբզեզները սովոր էին ագեվազների փոքր ու չոր կղանքին և դրան չէին դիպչում։ Գոմաղբի մեջ ճանճեր էին բազմանում, և դրա տակ խոտ չէր աճում։ 1960-ական թվականներից գիտնականներն Աֆրիկայից և Եվրոպայից բերեցին տասնյակ տեսակի **գոմաղբաբզեզներ**։ Բզեզները թաղեցին գոմաղբը, հողը հարստացավ, և խոտը նորից աճեց։ Քայքայողներն էլ են կարևոր օղակ։`,
      `**Война с воробьями.** В 1958 году руководители Китая решили, что воробьи — вредители, потому что клюют зерно на полях. Миллионы людей стучали в кастрюли и барабаны, чтобы воробьи не могли сесть, пока обессиленные птицы не падали с неба. Но воробьи едят и **насекомых**. Без них саранча и другие насекомые размножились и съели больше урожая, чем воробьи когда-либо. Вскоре воробьёв вычеркнули из списка вредителей. Разорванная пищевая цепь больше всего навредила самим людям.

**Жуки спешат на помощь.** Когда фермеры привезли в Австралию коров, появилась странная проблема: коровий навоз месяцами лежал на полях. Австралийские навозные жуки привыкли к маленькому сухому помёту кенгуру и не трогали его. В навозе плодились мухи, а под ним не росла трава. С 1960-х годов учёные привезли из Африки и Европы десятки видов **навозных жуков**. Жуки закопали навоз, почва стала богаче, и трава снова выросла. Разрушители — тоже важное звено!`,
    ),
    ask(2, {
      en: ["What happened in China after most sparrows were killed?", ["The harvest grew much bigger", "Insects multiplied and ate even more of the harvest", "Foxes started eating grain"], "Sparrows also eat insects, so without them locusts and other insects multiplied."],
      hy: ["Ի՞նչ տեղի ունեցավ Չինաստանում, երբ ճնճղուկների մեծ մասը ոչնչացվեց։", ["Բերքը շատ ավելացավ", "Միջատները բազմացան և բերքից էլ ավելին կերան", "Աղվեսները սկսեցին հացահատիկ ուտել"], "Ճնճղուկներն ուտում են նաև միջատներ, ուստի առանց նրանց մորեխներն ու այլ միջատներ բազմացան։"],
      ru: ["Что случилось в Китае, когда уничтожили большинство воробьёв?", ["Урожай сильно вырос", "Насекомые размножились и съели ещё больше урожая", "Лисы начали есть зерно"], "Воробьи едят и насекомых, поэтому без них размножились саранча и другие насекомые."],
    }),
  ],
  "natural-communities": [
    "diagram forest",
    closer(
      `**Why snowdrops hurry.** A forest is like a block of flats: the tall trees on the top floor catch most of the sunlight, and on the forest floor in summer it can be quite dark. So many forest flowers, such as the **snowdrop**, bloom very early in spring, before the trees open their leaves. For a few weeks the sunlight reaches the ground, and the little plants use it to flower and store food in their bulbs for next year. When the trees turn green, the snowdrops have already finished.

**A drummer in the trees.** A **woodpecker** can hit a tree trunk about 20 times a second, looking for beetle grubs under the bark or making a hole for its nest. Why doesn't it get a headache? Its skull is thick and spongy, its brain is small and fits tightly, and its very long tongue wraps around the back of its skull like a safety belt. With the sticky tip of that tongue it pulls insects out of their tunnels. Old trees with holes are important: owls and squirrels later live in the woodpeckers' old nests.`,
      `**Ինչու են ձնծաղիկները շտապում։** Անտառը նման է բազմահարկ շենքի․ վերևի հարկի բարձր ծառերը որսում են արևի լույսի մեծ մասը, իսկ ամռանն անտառի հատակին կարող է բավական մութ լինել։ Այդ պատճառով անտառային շատ ծաղիկներ, ինչպես **ձնծաղիկը**, ծաղկում են շատ վաղ գարնանը՝ մինչև ծառերի տերևների բացվելը։ Մի քանի շաբաթ արևի լույսը հասնում է գետնին, և փոքրիկ բույսերն այն օգտագործում են ծաղկելու և հաջորդ տարվա համար իրենց սոխուկներում սնունդ պահելու համար։ Երբ ծառերը կանաչում են, ձնծաղիկներն արդեն ավարտել են։

**Թմբկահար ծառերի վրա։** **Փայտփորիկը** կարող է ծառի բնին զարկել վայրկյանում մոտ 20 անգամ՝ կեղևի տակ բզեզների թրթուրներ փնտրելով կամ բնի համար փչակ բացելով։ Ինչու՞ նրա գլուխը չի ցավում։ Նրա գանգը հաստ է ու սպունգանման, ուղեղը՝ փոքր և ամուր տեղավորված, իսկ շատ երկար լեզուն փաթաթվում է գանգի հետևի մասով, ինչպես ամրագոտի։ Այդ լեզվի կպչուն ծայրով նա միջատներին դուրս է քաշում իրենց անցուղիներից։ Փչակներով հին ծառերը կարևոր են․ փայտփորիկների հին բներում հետո ապրում են բուեր ու սկյուռներ։`,
      `**Почему подснежники спешат.** Лес похож на многоэтажный дом: высокие деревья на верхнем этаже ловят большую часть солнечного света, и летом внизу, на земле, бывает довольно темно. Поэтому многие лесные цветы, например **подснежник**, цветут очень рано весной, пока деревья ещё не раскрыли листья. Несколько недель солнце достаёт до земли, и маленькие растения успевают зацвести и запасти еду в луковицах на следующий год. Когда деревья зеленеют, подснежники уже отцвели.

**Барабанщик на деревьях.** **Дятел** может стучать по стволу около 20 раз в секунду, ища личинок жуков под корой или выдалбливая дупло для гнезда. Почему у него не болит голова? Его череп толстый и губчатый, мозг маленький и сидит плотно, а очень длинный язык обвивает заднюю часть черепа, как ремень безопасности. Липким кончиком языка он вытаскивает насекомых из их ходов. Старые деревья с дуплами важны: в старых гнёздах дятлов потом живут совы и белки.`,
    ),
    ask(3, {
      en: ["Why do snowdrops bloom so early in spring?", ["They like the cold", "Bees fly only in early spring", "The trees have no leaves yet, so sunlight reaches the ground"], "Later the tall trees shade the forest floor, so early flowers use the few weeks of light."],
      hy: ["Ինչու՞ են ձնծաղիկները ծաղկում այդքան վաղ գարնանը։", ["Նրանք սիրում են ցուրտը", "Մեղուները թռչում են միայն վաղ գարնանը", "Ծառերը դեռ տերևներ չունեն, և արևի լույսը հասնում է գետնին"], "Հետո բարձր ծառերը ստվերում են անտառի հատակը, ուստի վաղ ծաղիկներն օգտագործում են լույսի այդ մի քանի շաբաթը։"],
      ru: ["Почему подснежники цветут так рано весной?", ["Они любят холод", "Пчёлы летают только ранней весной", "На деревьях ещё нет листьев, и свет достаёт до земли"], "Позже высокие деревья затеняют землю, поэтому ранние цветы пользуются несколькими неделями света."],
    }),
  ],
  "skeleton-and-muscles": [
    "diagram skeleton",
    closer(
      `**Taller in the morning.** Measure your height in the morning and again before bed: in the evening you will probably be about **1 centimetre shorter**! Between the bones of the spine there are soft pads, a little like jelly sweets. During the day, while you stand, sit and run, your weight slowly squashes them. At night, lying down, the pads fill out again, and by morning you are back to your full height.

**Bones that mend themselves.** Bones are not dead sticks: they are alive, with blood vessels and growing cells. When a bone breaks, a doctor puts the pieces in the right place and holds them still with a **plaster cast**. Inside, the bone builds a bridge of new bone across the crack, and after a few weeks it is strong again. Children's bones are still growing, so they heal faster than grown-ups' bones.`,
      `**Առավոտյան՝ ավելի բարձրահասակ։** Չափիր քո հասակն առավոտյան և նորից քնելուց առաջ․ երեկոյան, հավանաբար, մոտ **1 սանտիմետր ավելի կարճ** կլինես։ Ողնաշարի ոսկորների միջև կան փափուկ բարձիկներ, մի քիչ նման դոնդողե կոնֆետների։ Օրվա ընթացքում, երբ կանգնում ես, նստում ու վազում, քո քաշը կամաց-կամաց սեղմում է դրանք։ Գիշերը, պառկած ժամանակ, բարձիկները նորից ուռչում են, և առավոտյան դու վերադառնում ես քո լրիվ հասակին։

**Ոսկորներ, որոնք իրենք են վերականգնվում։** Ոսկորները մեռած փայտիկներ չեն․ նրանք կենդանի են, ունեն արյունատար անոթներ և աճող բջիջներ։ Երբ ոսկորը կոտրվում է, բժիշկը կտորները դնում է ճիշտ տեղում և անշարժ պահում **գիպսե վիրակապով**։ Ներսում ոսկորը ճեղքի վրայով նոր ոսկրից կամուրջ է կառուցում, և մի քանի շաբաթ անց այն նորից ամուր է։ Երեխաների ոսկորները դեռ աճում են, ուստի ավելի արագ են լավանում, քան մեծահասակներինը։`,
      `**Утром — выше.** Измерь свой рост утром и ещё раз перед сном: вечером ты, скорее всего, будешь примерно на **1 сантиметр ниже**! Между костями позвоночника есть мягкие подушечки, немного похожие на мармелад. Днём, пока ты стоишь, сидишь и бегаешь, твой вес понемногу их сжимает. Ночью, лёжа, подушечки снова расправляются, и к утру ты возвращаешься к своему полному росту.

**Кости, которые чинят себя сами.** Кости — не мёртвые палки: они живые, в них есть кровеносные сосуды и растущие клетки. Когда кость ломается, врач ставит обломки на место и закрепляет их **гипсом**. Внутри кость строит мостик из новой кости через трещину, и через несколько недель она снова крепкая. Кости детей ещё растут, поэтому срастаются быстрее, чем у взрослых.`,
    ),
    ask(1, {
      en: ["Why are we a little shorter in the evening?", ["The pads between the bones of the spine get squashed", "The bones shrink when we are tired", "The muscles get longer"], "During the day our weight squashes the soft pads in the spine; at night they fill out again."],
      hy: ["Ինչու՞ ենք երեկոյան մի քիչ ավելի կարճ։", ["Ողնաշարի ոսկորների միջև բարձիկները սեղմվում են", "Ոսկորները փոքրանում են, երբ հոգնում ենք", "Մկաններն երկարում են"], "Օրվա ընթացքում մեր քաշը սեղմում է ողնաշարի փափուկ բարձիկները, իսկ գիշերը նրանք նորից ուռչում են։"],
      ru: ["Почему вечером мы немного ниже?", ["Сжимаются подушечки между костями позвоночника", "Кости уменьшаются от усталости", "Мышцы становятся длиннее"], "Днём наш вес сжимает мягкие подушечки позвоночника, а ночью они снова расправляются."],
    }),
  ],
  "protecting-nature": [
    "bars set=litter",
    closer(
      `**A soup of plastic in the ocean.** Ocean currents move in giant circles. In the middle of the Pacific Ocean they gather floating rubbish from many countries into one huge area, called the **Great Pacific Garbage Patch**. It is not an island you could walk on: it is mostly tiny bits of plastic, like a thin soup spread over an area about three times bigger than France. Sea turtles mistake plastic bags for jellyfish, and seabirds feed bits of plastic to their chicks. Every bag that goes in a bin instead of a river helps.

**Glass and cans can live again and again.** A glass bottle can be melted and made into a new bottle over and over, without getting worse. An aluminium can that you put in a recycling bin can be back in a shop as a new can in about two months, and making it from an old can needs only a small part of the energy needed to make it from new metal. Plastic is harder: it usually can be recycled only a few times, which is why it is best to use less of it.`,
      `**Պլաստիկե ապուր օվկիանոսում։** Օվկիանոսային հոսանքները շարժվում են հսկայական շրջաններով։ Խաղաղ օվկիանոսի մեջտեղում նրանք շատ երկրներից եկած լողացող աղբը հավաքում են մեկ հսկայական տարածքում, որը կոչվում է **Խաղաղ օվկիանոսի աղբի մեծ բիծ**։ Դա կղզի չէ, որի վրայով կարելի է քայլել․ այն հիմնականում պլաստիկի մանր կտորներ են, ինչպես նոսր ապուր՝ տարածված Ֆրանսիայից մոտ երեք անգամ մեծ տարածքի վրա։ Ծովային կրիաները պլաստիկե տոպրակները շփոթում են մեդուզաների հետ, իսկ ծովային թռչունները պլաստիկի կտորներով կերակրում են իրենց ձագերին։ Յուրաքանչյուր տոպրակ, որ գետի փոխարեն հայտնվում է աղբամանում, օգնում է։

**Ապակին ու պահածոյատուփերը կարող են նորից ու նորից ապրել։** Ապակե շիշը կարելի է հալել ու դարձնել նոր շիշ նորից ու նորից՝ առանց վատանալու։ Ալյումինե տուփը, որ գցում ես վերամշակման աղբարկղը, մոտ երկու ամսից կարող է նոր տուփի տեսքով վերադառնալ խանութ, և հին տուփից այն պատրաստելու համար պետք է էներգիայի միայն մի փոքր մասը, քան նոր մետաղից պատրաստելու համար։ Պլաստիկի հետ ավելի դժվար է․ այն սովորաբար կարելի է վերամշակել ընդամենը մի քանի անգամ, ուստի ավելի լավ է դրանից քիչ օգտագործել։`,
      `**Пластиковый суп в океане.** Океанские течения движутся огромными кругами. Посреди Тихого океана они собирают плавающий мусор из многих стран в одну огромную область — **Большое тихоокеанское мусорное пятно**. Это не остров, по которому можно ходить: это в основном крошечные кусочки пластика, как жидкий суп, разлитый по площади примерно в три раза больше Франции. Морские черепахи принимают пластиковые пакеты за медуз, а морские птицы кормят птенцов кусочками пластика. Каждый пакет, попавший в урну, а не в реку, помогает.

**Стекло и банки могут жить снова и снова.** Стеклянную бутылку можно переплавлять в новую бутылку снова и снова, и она не становится хуже. Алюминиевая банка, брошенная в контейнер для переработки, может примерно через два месяца вернуться в магазин новой банкой, а на её изготовление из старой банки уходит лишь малая часть энергии, нужной для нового металла. С пластиком сложнее: обычно его можно переработать всего несколько раз, поэтому лучше пользоваться им поменьше.`,
    ),
    ask(2, {
      en: ["Why do sea turtles swallow plastic bags?", ["They are very hungry in winter", "They mistake them for jellyfish", "Plastic tastes sweet"], "A floating bag looks like a jellyfish, one of the turtles' foods."],
      hy: ["Ինչու՞ են ծովային կրիաները կուլ տալիս պլաստիկե տոպրակներ։", ["Ձմռանը շատ քաղցած են", "Դրանք շփոթում են մեդուզաների հետ", "Պլաստիկը քաղցր համ ունի"], "Լողացող տոպրակը նման է մեդուզայի, որը կրիաների սնունդներից է։"],
      ru: ["Почему морские черепахи глотают пластиковые пакеты?", ["Зимой они очень голодны", "Они принимают их за медуз", "Пластик сладкий на вкус"], "Плавающий пакет похож на медузу — одну из еды черепах."],
    }),
  ],
};
