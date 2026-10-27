import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade8: VisualMap[number] = {
  "armenian-highland": [
    "bars set=hlpeaks",
    closer(
      `**The first climb of Masis.** For centuries people believed that nobody could reach the top of Masis. In October 1829 the German professor **Friedrich Parrot** set out from the monastery of St Hakob at Akori, and his guide was a young deacon from Echmiadzin, **Khachatur Abovyan**, later the author of the novel *Wounds of Armenia*. After two failed attempts they climbed the snow and ice on the north-western side and reached the summit. Abovyan set up a cross there and brought down a piece of the summit ice, which he kept as something sacred.

**A lake where soap is not needed.** Lake **Van**, the largest lake of the Highlands, has no outflow, and its water is so rich in soda that for centuries people washed clothes in it without soap. Almost no fish can live in such water. The only exception is the **tarekh**, a small fish of the carp family, which every spring swims up the fresh rivers to spawn, in such huge shoals that it is caught by the basketful.`,
      `**Մասիսի առաջին վերելքը։** Դարեր շարունակ մարդիկ հավատում էին, որ ոչ ոք չի կարող հասնել Մասիսի գագաթին։ 1829 թվականի հոկտեմբերին գերմանացի պրոֆեսոր **Ֆրիդրիխ Պարրոտը** ճանապարհ ընկավ Ակոռիի Սուրբ Հակոբ վանքից, և նրա ուղեկցողն Էջմիածնի երիտասարդ սարկավագ **Խաչատուր Աբովյանն** էր՝ հետագայում «Վերք Հայաստանի» վեպի հեղինակը։ Երկու անհաջող փորձից հետո նրանք բարձրացան հյուսիս-արևմտյան լանջի ձյան ու սառույցի վրայով և հասան գագաթին։ Աբովյանն այնտեղ խաչ կանգնեցրեց և գագաթից սառույցի կտոր իջեցրեց, որը պահում էր որպես սրբություն։

**Լիճ, որտեղ օճառ պետք չէ։** Լեռնաշխարհի ամենամեծ լիճը՝ **Վանա լիճը**, անհոսք է, և նրա ջուրն այնքան հարուստ է սոդայով, որ դարեր շարունակ մարդիկ նրանում հագուստ էին լվանում առանց օճառի։ Այդպիսի ջրում գրեթե ոչ մի ձուկ չի կարող ապրել։ Միակ բացառությունը **տառեխն** է՝ ծածանազգիների ընտանիքի փոքր ձուկ, որն ամեն գարուն ձվադրելու համար բարձրանում է քաղցրահամ գետերով այնքան հսկայական երամներով, որ այն որսում են զամբյուղներով։`,
      `**Первое восхождение на Масис.** Веками люди верили, что никто не может подняться на вершину Масиса. В октябре 1829 года немецкий профессор **Фридрих Паррот** вышел из монастыря Святого Акопа в Акори, а его проводником был молодой эчмиадзинский дьякон **Хачатур Абовян**, впоследствии автор романа «Раны Армении». После двух неудачных попыток они поднялись по снегу и льду северо-западного склона и достигли вершины. Абовян установил там крест и принёс вниз кусок льда с вершины, который хранил как святыню.

**Озеро, где не нужно мыло.** У озера **Ван**, крупнейшего на нагорье, нет стока, а его вода так богата содой, что веками люди стирали в ней одежду без мыла. В такой воде почти не живут рыбы. Единственное исключение — **тарех**, небольшая рыба семейства карповых, которая каждую весну поднимается на нерест по пресным рекам такими огромными косяками, что её ловят корзинами.`,
    ),
    ask(1, {
      en: ["Who climbed Masis together with Friedrich Parrot in 1829?", ["Khachatur Abovyan", "Anania Shirakatsi", "Hovhannes Tumanyan", "Martiros Yerznkatsi"], "The young deacon Khachatur Abovyan guided Parrot to the summit and later wrote the novel Wounds of Armenia."],
      hy: ["Ո՞վ բարձրացավ Մասիս Ֆրիդրիխ Պարրոտի հետ 1829 թվականին։", ["Խաչատուր Աբովյանը", "Անանիա Շիրակացին", "Հովհաննես Թումանյանը", "Մարտիրոս Երզնկացին"], "Երիտասարդ սարկավագ Խաչատուր Աբովյանը Պարրոտին ուղեկցեց մինչև գագաթ, իսկ հետագայում գրեց «Վերք Հայաստանի» վեպը։"],
      ru: ["Кто поднялся на Масис вместе с Фридрихом Парротом в 1829 году?", ["Хачатур Абовян", "Анания Ширакаци", "Ованес Туманян", "Мартирос Ерзнкаци"], "Молодой дьякон Хачатур Абовян провёл Паррота на вершину, а позже написал роман «Раны Армении»."],
    }),
  ],
  "position-borders": [
    "bars set=marzes",
    "geocalc mode=time",
    closer(
      `**How big is Armenia?** With 29.7 thousand km², Armenia is about the size of Belgium and a little larger than Albania. You can drive from Bavra in the north-west to Meghri in the far south in about seven or eight hours, but the road climbs over several mountain passes on the way. The short border with Iran, only about 44 km along the Araks, is one of the country's most important gateways: the road through Meghri and the Agarak crossing links Armenia with Iran and the Persian Gulf.

**When is noon in Yerevan?** Armenia keeps UTC+4 all year; it stopped moving its clocks to summer time in 2012. But the Sun does not follow the clock exactly. Yerevan lies at about 44.5° E, and every 15° of longitude is one hour, so the Sun is highest over Yerevan at about **13:00** by the clock, not at 12:00. And in summer, when Britain moves its clocks forward, the difference between London and Yerevan becomes three hours instead of four.`,
      `**Որքա՞ն մեծ է Հայաստանը։** 29,7 հազար կմ² տարածքով Հայաստանը մոտավորապես Բելգիայի չափ է և մի փոքր մեծ է Ալբանիայից։ Հյուսիս-արևմուտքում գտնվող Բավրայից մինչև ծայր հարավի Մեղրի կարելի է մեքենայով հասնել մոտ յոթ-ութ ժամում, բայց ճանապարհն անցնում է մի քանի լեռնանցքներով։ Իրանի հետ կարճ սահմանը՝ Արաքսի երկայնքով ընդամենը մոտ 44 կմ, երկրի ամենակարևոր դարպասներից է․ Մեղրիով և Ագարակի անցակետով անցնող ճանապարհը Հայաստանը կապում է Իրանի և Պարսից ծոցի հետ։

**Ե՞րբ է կեսօրն Երևանում։** Հայաստանն ամբողջ տարին ապրում է UTC+4 ժամանակով․ 2012 թվականից նա դադարեցրել է ժամացույցներն ամառային ժամանակի փոխադրելը։ Բայց Արեգակը ճշգրիտ չի հետևում ժամացույցին։ Երևանը գտնվում է մոտ 44,5° ա. ե.-ի վրա, իսկ երկայնության յուրաքանչյուր 15°-ը մեկ ժամ է, ուստի Արեգակն Երևանի վրա ամենաբարձր կետում է ժամացույցով մոտ **13:00**-ին, ոչ թե 12:00-ին։ Իսկ ամռանը, երբ Բրիտանիան ժամացույցներն առաջ է տալիս, Լոնդոնի և Երևանի տարբերությունը չորսի փոխարեն դառնում է երեք ժամ։`,
      `**Насколько велика Армения?** Площадью 29,7 тыс. км² Армения примерно с Бельгию и чуть больше Албании. Из Бавры на северо-западе до Мегри на крайнем юге можно доехать примерно за семь-восемь часов, но дорога переваливает через несколько горных перевалов. Короткая граница с Ираном, всего около 44 км по Араксу, — одни из важнейших ворот страны: дорога через Мегри и пункт пропуска Агарак связывает Армению с Ираном и Персидским заливом.

**Когда в Ереване полдень?** Армения круглый год живёт по UTC+4: в 2012 году она перестала переводить часы на летнее время. Но Солнце не следует за часами точно. Ереван лежит примерно на 44,5° в. д., а каждые 15° долготы — это час, поэтому выше всего Солнце стоит над Ереваном примерно в **13:00** по часам, а не в 12:00. А летом, когда Британия переводит часы вперёд, разница между Лондоном и Ереваном становится три часа вместо четырёх.`,
    ),
    ask(1, {
      en: ["It is 9:00 in London in winter. What time is it in Yerevan?", ["13:00", "5:00", "12:00", "11:00"], "Yerevan is on UTC+4, four hours ahead of London in winter: 9 + 4 = 13:00."],
      hy: ["Ձմռանը Լոնդոնում ժամը 9:00 է։ Ժամը քանի՞սն է Երևանում։", ["13:00", "5:00", "12:00", "11:00"], "Երևանը UTC+4 գոտում է, ձմռանը Լոնդոնից չորս ժամ առաջ․ 9 + 4 = 13:00։"],
      ru: ["Зимой в Лондоне 9:00. Сколько времени в Ереване?", ["13:00", "5:00", "12:00", "11:00"], "Ереван живёт по UTC+4, зимой на четыре часа впереди Лондона: 9 + 4 = 13:00."],
    }),
  ],
  "geology-minerals": [
    "mechanism collision",
    closer(
      `**The Symphony of Stones.** In the Garni gorge the walls are made of tall, neat columns of basalt, mostly six-sided, that look like the pipes of a giant organ. They formed when a thick flow of lava filled the old valley and cooled very slowly. As rock cools it shrinks, and the shrinking lava cracked into columns, just as mud cracks into polygons when it dries in the sun. Later the Azat river cut down through the lava and revealed the columns in its walls.

**Mountains of rock for a little metal.** The ore of Kajaran contains only a fraction of a percent of copper and much less molybdenum. So for every tonne of copper, hundreds of tonnes of rock must be blasted, carried, crushed and processed. That is why the open pit is so huge and why the waste, ground to fine sand and mixed with water, fills big **tailings dams**. Molybdenum from Syunik is used to make very strong, heat-resistant steel for tools, pipes and engines.`,
      `**Քարերի սիմֆոնիան։** Գառնու կիրճում պատերը կազմված են բազալտի բարձր, կանոնավոր, հիմնականում վեցանիստ սյուներից, որոնք հսկա երգեհոնի խողովակների են նման։ Դրանք առաջացել են, երբ լավայի հաստ հոսքը լցրեց հին հովիտը և շատ դանդաղ սառեց։ Սառչելիս ապարը կծկվում է, և կծկվող լավան ճաքեց սյուների, ինչպես ցեխն է ճաքում բազմանկյունների՝ արևի տակ չորանալիս։ Հետագայում Ազատ գետը կտրեց լավան և սյուները բացեց իր ափերին։

**Ապարների սարեր՝ մի քիչ մետաղի համար։** Քաջարանի հանքաքարը պարունակում է պղնձի տոկոսի ընդամենը մի մասը, իսկ մոլիբդենի՝ շատ ավելի քիչ։ Ուստի յուրաքանչյուր տոննա պղնձի համար պետք է պայթեցնել, տեղափոխել, մանրացնել և վերամշակել հարյուրավոր տոննա ապար։ Ահա թե ինչու է բաց հանքափորվածքն այդքան հսկայական, և ինչու են թափոնները, մանր ավազի վերածված և ջրի հետ խառնված, լցնում մեծ **պոչամբարները**։ Սյունիքի մոլիբդենից պատրաստում են շատ ամուր և ջերմակայուն պողպատ գործիքների, խողովակների և շարժիչների համար։`,
      `**Симфония камней.** В ущелье Гарни стены сложены высокими ровными базальтовыми столбами, в основном шестигранными, похожими на трубы гигантского органа. Они образовались, когда толстый поток лавы заполнил старую долину и остывал очень медленно. Остывая, порода сжимается, и сжимающаяся лава растрескалась на столбы — так грязь трескается на многоугольники, высыхая на солнце. Позже река Азат прорезала лаву и открыла столбы в своих склонах.

**Горы породы ради немного металла.** Руда Каджарана содержит лишь доли процента меди и ещё меньше молибдена. Поэтому на каждую тонну меди нужно взорвать, перевезти, раздробить и переработать сотни тонн породы. Вот почему карьер так огромен и почему отходы, размолотые в мелкий песок и смешанные с водой, заполняют большие **хвостохранилища**. Из сюникского молибдена делают очень прочную жаропрочную сталь для инструментов, труб и двигателей.`,
    ),
    ask(1, {
      en: ["How did the basalt columns of the Symphony of Stones form?", ["Thick lava shrank and cracked as it cooled slowly", "Ancient builders carved them", "Wind blew sand that cut the rock", "Salt crystals grew in a dry lake"], "Cooling rock shrinks; a thick lava flow cracked into mostly six-sided columns, like drying mud."],
      hy: ["Ինչպե՞ս են առաջացել Քարերի սիմֆոնիայի բազալտե սյուները։", ["Հաստ լավան դանդաղ սառչելիս կծկվեց և ճաքեց", "Դրանք քանդակել են հին շինարարները", "Քամու բերած ավազը կտրել է ապարը", "Չոր լճում աղի բյուրեղներ են աճել"], "Սառչող ապարը կծկվում է․ լավայի հաստ հոսքը ճաքեց հիմնականում վեցանիստ սյուների, ինչպես չորացող ցեխը։"],
      ru: ["Как образовались базальтовые столбы «Симфонии камней»?", ["Толстая лава сжималась и трескалась, медленно остывая", "Их высекли древние строители", "Ветер с песком прорезал скалу", "В сухом озере выросли кристаллы соли"], "Остывающая порода сжимается; толстый лавовый поток растрескался на столбы, в основном шестигранные, как высыхающая грязь."],
    }),
  ],
  "relief-armenia": [
    "bars set=armheights",
    closer(
      `**A bridge nobody built.** Near Tatev the Vorotan river runs under a natural stone arch, the **Devil's Bridge**. Warm mineral springs, full of dissolved lime, once flowed down into the gorge and left layer after layer of **travertine**, which grew across the narrow canyon like a roof. The river kept cutting under it, and a bridge was left on which an old road crosses the gorge. Under the arch warm mineral water still bubbles into small pools.

**Over the gorge on a wire.** The mountains make travel slow, so Armenians are good at crossing gorges. The **Wings of Tatev** cable car, opened in 2010, carries passengers 5.7 km across the Vorotan gorge to the Tatev monastery, at places more than 300 m above the river. It was entered in the Guinness Book of Records as the longest non-stop reversible cable car in the world. The journey takes about 12 minutes instead of a long drive down into the gorge and up again.`,
      `**Կամուրջ, որ ոչ ոք չի կառուցել։** Տաթևի մոտ Որոտան գետը հոսում է բնական քարե կամարի՝ **Սատանի կամրջի** տակով։ Կրով հարուստ տաք հանքային աղբյուրները ժամանակին հոսում էին կիրճ և թողնում **տրավերտինի** շերտը շերտի վրա, որը նեղ կիրճի վրայով տանիքի պես աճեց։ Գետը շարունակում էր կտրել նրա տակից, և մնաց կամուրջ, որով հին ճանապարհն անցնում է կիրճը։ Կամարի տակ տաք հանքային ջուրը մինչ օրս պղպջակներով լցվում է փոքր ավազանների մեջ։

**Կիրճի վրայով՝ ճոպանով։** Լեռները դանդաղեցնում են երթևեկությունը, ուստի հայերը վարպետ են կիրճեր անցնելու մեջ։ 2010 թվականին բացված **«Տաթևի թևեր»** ճոպանուղին ուղևորներին 5,7 կմ տանում է Որոտանի կիրճի վրայով մինչև Տաթևի վանք՝ տեղ-տեղ գետից ավելի քան 300 մ բարձրությամբ։ Այն գրանցվել է Գինեսի ռեկորդների գրքում որպես աշխարհի ամենաերկար անընդհատ հետադարձ ճոպանուղի։ Ճանապարհը տևում է մոտ 12 րոպե՝ կիրճ իջնելու և նորից բարձրանալու երկար ճանապարհի փոխարեն։`,
      `**Мост, который никто не строил.** У Татева река Воротан течёт под природной каменной аркой — **Сатанинским мостом**. Тёплые минеральные источники, богатые растворённой известью, когда-то стекали в ущелье и оставляли слой за слоем **травертина**, который нарос над узким каньоном, как крыша. Река продолжала пропиливать русло под ним, и остался мост, по которому старая дорога пересекает ущелье. Под аркой тёплая минеральная вода и сейчас пузырится в маленьких бассейнах.

**Над ущельем по канату.** Горы замедляют дорогу, поэтому армяне умеют пересекать ущелья. Канатная дорога **«Крылья Татева»**, открытая в 2010 году, везёт пассажиров 5,7 км над ущельем Воротана к монастырю Татев, местами больше чем в 300 м над рекой. Она внесена в Книгу рекордов Гиннесса как самая длинная безостановочная реверсивная канатная дорога в мире. Поездка занимает около 12 минут вместо долгого спуска в ущелье и подъёма обратно.`,
    ),
    ask(1, {
      en: ["Aragats is 4,090 m and the Debed gorge about 380 m. What is the difference?", ["3,710 m", "4,090 m", "3,320 m", "4,470 m"], "4,090 − 380 = 3,710 m: more than 3,700 m between the highest and lowest points of Armenia."],
      hy: ["Արագածը 4090 մ է, Դեբեդի կիրճը՝ մոտ 380 մ։ Որքա՞ն է տարբերությունը։", ["3710 մ", "4090 մ", "3320 մ", "4470 մ"], "4090 − 380 = 3710 մ․ Հայաստանի ամենաբարձր և ամենացածր կետերի միջև ավելի քան 3700 մ է։"],
      ru: ["Арагац — 4090 м, ущелье Дебеда — около 380 м. Какова разница?", ["3710 м", "4090 м", "3320 м", "4470 м"], "4090 − 380 = 3710 м: между высшей и низшей точками Армении больше 3700 м."],
    }),
  ],
  "climate-armenia": [
    "climate city=yerevan,gyumri",
    closer(
      `**Two towns, two climates.** Compare the graphs. Gyumri lies about 550 m higher than Yerevan, and every month it is 4–6 °C colder; in January its average falls to about −8 °C. Yerevan's driest month is August, with less than 10 mm of rain, while Gyumri gets most of its rain in May and June, just when the grain in the Shirak fields needs it. On calm winter nights cold, heavy air flows down the slopes and collects in the Shirak basin like water in a bowl, which is why the lowest temperatures in the country are measured there.

**The Armenian plum.** The scientific name of the apricot is *Prunus armeniaca*, the "Armenian plum", because Europeans learned about it from Armenia. Apricots love the long, sunny summers of the Ararat plain, which gets 2,500–2,700 hours of sunshine a year, against about 1,500 in London. Their weak spot is spring: apricot trees flower early, in late March and April, and one frosty night can destroy the blossom and the whole year's harvest.`,
      `**Երկու քաղաք՝ երկու կլիմա։** Համեմատիր գրաֆիկները։ Գյումրին Երևանից մոտ 550 մ բարձր է, և ամեն ամիս այնտեղ 4–6 °C ավելի ցուրտ է․ հունվարին միջինն իջնում է մինչև մոտ −8 °C։ Երևանի ամենաչոր ամիսն օգոստոսն է՝ 10 մմ-ից պակաս անձրևով, իսկ Գյումրիում անձրևների մեծ մասը տեղում է մայիսին և հունիսին՝ հենց այն ժամանակ, երբ Շիրակի դաշտերի հացահատիկին ջուր է պետք։ Ձմռան խաղաղ գիշերներին ցուրտ, ծանր օդը լանջերով իջնում է և կուտակվում Շիրակի գոգավորությունում, ինչպես ջուրը՝ ամանում, ուստի երկրի ամենացածր ջերմաստիճանները չափվում են այնտեղ։

**Հայկական սալոր։** Ծիրանի գիտական անունը *Prunus armeniaca* է՝ «հայկական սալոր», որովհետև եվրոպացիներն այն ճանաչել են Հայաստանից։ Ծիրանը սիրում է Արարատյան դաշտի երկար, արևոտ ամառը, որտեղ տարեկան լինում է 2500–2700 արևային ժամ՝ Լոնդոնի մոտ 1500-ի դիմաց։ Նրա թույլ կողմը գարունն է․ ծիրանենիները շուտ են ծաղկում՝ մարտի վերջին և ապրիլին, և մեկ ցրտաշունչ գիշերը կարող է ոչնչացնել ծաղիկները և ամբողջ տարվա բերքը։`,
      `**Два города — два климата.** Сравни графики. Гюмри лежит примерно на 550 м выше Еревана, и каждый месяц там на 4–6 °C холоднее; в январе средняя опускается до −8 °C. Самый сухой месяц Еревана — август, меньше 10 мм дождя, а в Гюмри больше всего осадков выпадает в мае и июне — как раз когда они нужны зерну на ширакских полях. Тихими зимними ночами холодный тяжёлый воздух стекает по склонам и собирается в Ширакской котловине, как вода в чаше, поэтому самые низкие температуры в стране измеряют там.

**Армянская слива.** Научное название абрикоса — *Prunus armeniaca*, «армянская слива»: европейцы узнали о нём из Армении. Абрикос любит долгое солнечное лето Араратской равнины, где бывает 2500–2700 солнечных часов в год против примерно 1500 в Лондоне. Его слабое место — весна: абрикосы цветут рано, в конце марта и в апреле, и одна морозная ночь может погубить цветы и урожай целого года.`,
    ),
    ask(1, {
      en: ["Look at the graph. In which month does Gyumri get the most precipitation?", ["May", "January", "August", "October"], "Gyumri's wettest months are May and June; in winter and late summer it is much drier."],
      hy: ["Նայի՛ր գրաֆիկին։ Ո՞ր ամսին է Գյումրիում ամենաշատ տեղումները։", ["Մայիսին", "Հունվարին", "Օգոստոսին", "Հոկտեմբերին"], "Գյումրիի ամենախոնավ ամիսները մայիսն ու հունիսն են, իսկ ձմռանը և ամռան վերջին շատ ավելի չոր է։"],
      ru: ["Посмотри на график. В каком месяце в Гюмри больше всего осадков?", ["В мае", "В январе", "В августе", "В октябре"], "Самые влажные месяцы в Гюмри — май и июнь; зимой и в конце лета гораздо суше."],
    }),
  ],
  "rivers-armenia": [
    "bars set=armrivers",
    closer(
      `**A staircase of power stations.** A river's energy depends on how much water it carries and how far it falls. On its way from Sevan (about 1,900 m) to the Ararat plain the Hrazdan drops roughly 1,000 m, so engineers built a "staircase" of seven hydro stations along it, the **Sevan–Hrazdan cascade**: the water that turns one turbine flows on to the next. In Syunik the Vorotan, falling steeply through its gorge, drives the three stations of the **Vorotan cascade**.

**Water from the lava.** Yerevan's drinking water comes not from rivers but from springs. Rain and snowmelt soak into the thick, porous lava of the Kotayk plateau and the Geghama mountains, are filtered as they slowly flow underground, and come out as the cold, clean springs of **Arzni–Shamiram** and **Garni**. That is why Yerevan's streets have many small drinking fountains, **pulpulaks**, where anyone can drink cool spring water on a hot day.`,
      `**Էլեկտրակայանների աստիճանաշար։** Գետի էներգիան կախված է նրանից, թե որքան ջուր է տանում և որքան բարձրությունից է ընկնում։ Սևանից (մոտ 1900 մ) մինչև Արարատյան դաշտ Հրազդանն իջնում է մոտ 1000 մ, ուստի ինժեներները նրա երկայնքով կառուցեցին յոթ հիդրոկայաններից բաղկացած «աստիճանաշար»՝ **Սևան–Հրազդան կասկադը**․ մի տուրբինը պտտած ջուրը հոսում է հաջորդին։ Սյունիքում իր կիրճով զառիթափ իջնող Որոտանը պտտում է **Որոտանի կասկադի** երեք կայանները։

**Ջուր՝ լավայից։** Երևանի խմելու ջուրը գալիս է ոչ թե գետերից, այլ աղբյուրներից։ Անձրևաջուրը և ձնհալը ներծծվում են Կոտայքի սարահարթի և Գեղամա լեռների հաստ, ծակոտկեն լավայի մեջ, զտվում են գետնի տակ դանդաղ հոսելիս և դուրս են գալիս **Արզնի–Շամիրամի** և **Գառնու** սառը, մաքուր աղբյուրների տեսքով։ Ահա թե ինչու Երևանի փողոցներում կան շատ փոքր խմելու ջրի աղբյուրներ՝ **պուլպուլակներ**, որտեղ շոգ օրը յուրաքանչյուրը կարող է զով աղբյուրաջուր խմել։`,
      `**Лестница электростанций.** Энергия реки зависит от того, сколько воды она несёт и с какой высоты падает. На пути от Севана (около 1900 м) до Араратской равнины Раздан опускается примерно на 1000 м, поэтому инженеры построили вдоль него «лестницу» из семи ГЭС — **Севано-Разданский каскад**: вода, повернувшая одну турбину, течёт к следующей. В Сюнике Воротан, круто падающий по своему ущелью, вращает три станции **Воротанского каскада**.

**Вода из лавы.** Питьевая вода Еревана берётся не из рек, а из родников. Дождевая и талая вода просачивается в толстую пористую лаву Котайкского плато и Гегамских гор, фильтруется, медленно двигаясь под землёй, и выходит холодными чистыми родниками **Арзни — Шамирам** и **Гарни**. Поэтому на улицах Еревана много маленьких питьевых фонтанчиков — **пулпулаков**, где любой может выпить прохладной родниковой воды в жаркий день.`,
    ),
    ask(1, {
      en: ["Why do most Armenian rivers carry the most water in April–June?", ["The snow in the mountains melts", "Most rain falls in winter", "Sevan releases its water in spring", "Glaciers freeze in spring"], "Rivers are fed mainly by meltwater, so the spring flood comes when the mountain snow melts."],
      hy: ["Ինչո՞ւ են Հայաստանի գետերի մեծ մասն ամենաջրառատ ապրիլ–հունիսին։", ["Լեռներում ձյունը հալչում է", "Անձրևների մեծ մասը տեղում է ձմռանը", "Սևանը գարնանը բաց է թողնում իր ջուրը", "Գարնանը սառցադաշտերը սառչում են"], "Գետերը սնվում են հիմնականում ձնհալով, ուստի գարնանային վարարումը լինում է լեռներում ձյան հալվելու ժամանակ։"],
      ru: ["Почему большинство рек Армении полноводнее всего в апреле — июне?", ["В горах тает снег", "Больше всего дождей выпадает зимой", "Севан весной сбрасывает воду", "Весной ледники замерзают"], "Реки питаются в основном талыми водами, поэтому весеннее половодье приходится на таяние снега в горах."],
    }),
  ],
  "lake-sevan": [
    closer(
      `**Fish of Sevan.** The famous fish of the lake is the **ishkhan**, the Sevan trout, whose name means "prince"; it lives nowhere else in the world. When the level fell, many of its spawning places in shallow water and river mouths were lost, and today it is protected and raised in fish farms. In the 1920s–30s whitefish, called **sig**, were brought from lakes in the north-west of Russia; they settled so well that they became the main fish caught in Sevan, and crayfish were added later.

**The island that became a peninsula.** On a small rocky island in the north-west of the lake stood the monastery of **Sevanavank**, founded in 874 by Princess Mariam, daughter of Ashot I Bagratuni. For more than a thousand years it could be reached only by boat. When the lake's level fell by about 19 m in the 20th century, a strip of land appeared and the island turned into a peninsula; today a road leads up to the churches. The old shoreline can still be seen on the hills as a line of pale terraces.`,
      `**Սևանի ձկները։** Լճի հայտնի ձուկը **իշխանն** է՝ Սևանի կարմրախայտը, որն աշխարհում ուրիշ ոչ մի տեղ չի ապրում։ Երբ մակարդակն իջավ, ծանծաղ ջրերում և գետաբերաններում նրա ձվադրման շատ վայրեր կորան, և այսօր այն պաշտպանվում է և բազմացվում ձկնաբուծարաններում։ 1920–30-ական թվականներին Ռուսաստանի հյուսիս-արևմուտքի լճերից բերվեց **սիգը**․ այն այնքան լավ հարմարվեց, որ դարձավ Սևանի գլխավոր որսվող ձուկը, իսկ ավելի ուշ ավելացվեց խեցգետինը։

**Կղզին, որը դարձավ թերակղզի։** Լճի հյուսիս-արևմուտքում փոքր ժայռոտ կղզու վրա կանգնած էր **Սևանավանքը**, որը 874 թվականին հիմնել էր Աշոտ Ա Բագրատունու դուստր Մարիամ իշխանուհին։ Հազար տարուց ավելի այնտեղ կարելի էր հասնել միայն նավակով։ Երբ 20-րդ դարում լճի մակարդակն իջավ մոտ 19 մ-ով, ցամաքի շերտ երևաց, և կղզին դարձավ թերակղզի․ այսօր ճանապարհը բարձրանում է մինչև եկեղեցիները։ Հին ափագիծը մինչ օրս երևում է բլուրների վրա՝ որպես գունատ դարավանդների գիծ։`,
      `**Рыбы Севана.** Знаменитая рыба озера — **ишхан**, севанская форель, чьё имя значит «князь»; больше нигде в мире она не живёт. Когда уровень упал, многие места её нереста на мелководье и в устьях рек исчезли, и сегодня её охраняют и разводят на рыбозаводах. В 1920–30-х годах из озёр северо-запада России завезли **сига**; он так прижился, что стал главной промысловой рыбой Севана, а позже добавили раков.

**Остров, ставший полуостровом.** На маленьком скалистом острове на северо-западе озера стоял монастырь **Севанаванк**, основанный в 874 году княжной Мариам, дочерью Ашота I Багратуни. Больше тысячи лет туда можно было добраться только на лодке. Когда в XX веке уровень озера упал примерно на 19 м, появилась полоса суши, и остров превратился в полуостров; сегодня к церквям ведёт дорога. Старая береговая линия до сих пор видна на холмах полосой светлых террас.`,
    ),
    ask(1, {
      en: ["Why did Sevan Island, with the Sevanavank monastery, become a peninsula?", ["The level of the lake fell by about 19 m", "An earthquake lifted the island", "People filled the strait with stones", "Rivers brought sand that joined it to the shore"], "Water was let out for hydro stations and irrigation, and as the lake sank a strip of land joined the island to the shore."],
      hy: ["Ինչո՞ւ Սևանավանքով Սևան կղզին դարձավ թերակղզի։", ["Լճի մակարդակն իջավ մոտ 19 մ-ով", "Երկրաշարժը բարձրացրեց կղզին", "Մարդիկ նեղուցը լցրին քարերով", "Գետերն ավազ բերեցին, որն այն միացրեց ափին"], "Ջուրը բաց էր թողնվում հիդրոկայանների և ոռոգման համար, և լճի իջնելուն պես ցամաքի շերտը կղզին միացրեց ափին։"],
      ru: ["Почему остров Севан с монастырём Севанаванк стал полуостровом?", ["Уровень озера упал примерно на 19 м", "Землетрясение подняло остров", "Люди засыпали пролив камнями", "Реки нанесли песок, соединивший его с берегом"], "Воду спускали для ГЭС и орошения, и по мере понижения озера полоса суши соединила остров с берегом."],
    }),
  ],
  "nature-armenia": [
    "diagram altzones",
    closer(
      `**The homeland of wild wheat.** On the dry hills near Yerevan grow wild relatives of wheat, and the **Erebuni** reserve was created in 1981 to protect them. One of them is named *Triticum urartu*, after the ancient kingdom of Urartu. Geneticists have found that it is one of the ancestors of the bread wheat we eat today, which carries a whole set of its chromosomes. Scientists come to such places to look for genes that could help wheat resist drought and disease.

**The leopard comes back.** The Persian leopard, the largest cat of the Caucasus, almost vanished from Armenia in the 20th century. Today rangers and scientists use camera traps in the **Khosrov Forest** and **Shikahogh** reserves and the mountains of Syunik, and they have photographed leopards there again. A leopard needs a huge territory with many bezoar goats and mouflons to hunt, so protecting it means protecting the whole mountain landscape.`,
      `**Վայրի ցորենի հայրենիքը։** Երևանի մոտ չոր բլուրներին աճում են ցորենի վայրի ազգակիցներ, և 1981 թվականին նրանց պաշտպանելու համար ստեղծվեց **Էրեբունի** արգելոցը։ Դրանցից մեկը կոչվում է *Triticum urartu*՝ ուրարտական ցորեն, հին Ուրարտու թագավորության անունով։ Գենետիկները պարզել են, որ այն այսօր մեր ուտած հացահատիկային ցորենի նախնիներից մեկն է, որի մեջ կա նրա քրոմոսոմների մի ամբողջ հավաքակազմ։ Գիտնականները գալիս են այսպիսի վայրեր՝ փնտրելու գեներ, որոնք կարող են օգնել ցորենին դիմակայել երաշտին և հիվանդություններին։

**Ընձառյուծը վերադառնում է։** Առաջավորասիական ընձառյուծը՝ Կովկասի ամենամեծ կատվազգին, 20-րդ դարում Հայաստանից գրեթե անհետացավ։ Այսօր անտառապահներն ու գիտնականները **Խոսրովի անտառ** և **Շիկահող** արգելոցներում և Սյունիքի լեռներում օգտագործում են տեսախցիկ-թակարդներ, և այնտեղ կրկին լուսանկարել են ընձառյուծներ։ Ընձառյուծին պետք է հսկայական տարածք՝ որսի համար շատ բեզոարյան այծերով և մուֆլոններով, ուստի նրան պաշտպանելը նշանակում է պաշտպանել ամբողջ լեռնային բնապատկերը։`,
      `**Родина дикой пшеницы.** На сухих холмах у Еревана растут дикие родичи пшеницы, и в 1981 году для их охраны создали заповедник **Эребуни**. Одна из них называется *Triticum urartu* — по имени древнего царства Урарту. Генетики выяснили, что это один из предков мягкой пшеницы, которую мы едим сегодня: в ней есть целый набор её хромосом. Учёные приезжают в такие места искать гены, которые помогут пшенице противостоять засухе и болезням.

**Леопард возвращается.** Переднеазиатский леопард, крупнейшая кошка Кавказа, в XX веке почти исчез из Армении. Сегодня егеря и учёные ставят фотоловушки в заповедниках **Хосровский лес** и **Шикаох** и в горах Сюника, и там снова сфотографировали леопардов. Леопарду нужна огромная территория с множеством безоаровых козлов и муфлонов для охоты, поэтому охранять его — значит охранять весь горный ландшафт.`,
    ),
    ask(1, {
      en: ["Climbing from the Ararat plain towards the summit of Aragats, which zone comes right after the semi-desert?", ["Steppe", "Alpine meadows", "Rocks and snow", "Tundra"], "Semi-desert (800–1,300 m) gives way to steppe on chernozems (1,300–2,000 m), then meadows and finally rocks and snow."],
      hy: ["Արարատյան դաշտից դեպի Արագածի գագաթ բարձրանալիս ո՞ր գոտին է գալիս կիսաանապատից անմիջապես հետո։", ["Տափաստանը", "Ալպյան մարգագետինները", "Ժայռերն ու ձյունը", "Տունդրան"], "Կիսաանապատին (800–1300 մ) հաջորդում է սևահողերի վրա տափաստանը (1300–2000 մ), հետո մարգագետինները և վերջում՝ ժայռերն ու ձյունը։"],
      ru: ["Если подниматься с Араратской равнины к вершине Арагаца, какой пояс идёт сразу после полупустыни?", ["Степь", "Альпийские луга", "Скалы и снег", "Тундра"], "Полупустыня (800–1300 м) сменяется степью на чернозёмах (1300–2000 м), затем лугами и, наконец, скалами и снегом."],
    }),
  ],
};
