import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade5: VisualMap[number] = {
  "woodworking-tools": [
    "diagram workbench",
    closer(
      `**Saws that cut when you pull.** A European saw cuts when you push it. A Japanese saw does the opposite: its teeth point back towards the handle, so it cuts on the **pull**. Pulling keeps the blade stretched straight, like a rope, so it does not bend and can be made very **thin**. A thin blade cuts a narrow slot, needs less effort and wastes less wood, which is why many carpenters around the world now use Japanese saws.

**A plane from Roman times.** People have been smoothing wood for thousands of years, but the **plane**, a blade held at an angle in a block, was spread across Europe by the **Romans** about 2,000 years ago. Roman planes have been found buried by the eruption of Vesuvius and in Roman forts in Britain. They have an iron sole and a wooden body, and they look very much like the planes in your school workshop today.`,
      `**Սղոցներ, որոնք կտրում են քաշելիս։** Եվրոպական սղոցը կտրում է, երբ այն հրում ես։ Ճապոնական սղոցը հակառակն է անում․ նրա ատամներն ուղղված են դեպի բռնակը, և այն կտրում է **քաշելիս**։ Քաշելիս սայրը ձգվում և ուղիղ է մնում, ինչպես պարանը, ուստի չի ծռվում և կարող է շատ **բարակ** լինել։ Բարակ սայրը նեղ ճեղք է բացում, քիչ ուժ է պահանջում և քիչ փայտ է վատնում․ ահա թե ինչու աշխարհի շատ հյուսներ այժմ օգտագործում են ճապոնական սղոցներ։

**Ռանդա հռոմեական ժամանակներից։** Մարդիկ հազարավոր տարիներ փայտ են հարթել, բայց **ռանդան**՝ թեք դրված դանակը կոճղի մեջ, Եվրոպայում տարածեցին **հռոմեացիները** մոտ 2000 տարի առաջ։ Հռոմեական ռանդաներ են գտնվել Վեզուվի ժայթքումից թաղված քաղաքներում և Բրիտանիայի հռոմեական ամրոցներում։ Դրանք ունեն երկաթե ներբան և փայտե իրան և շատ նման են այսօրվա քո դպրոցական արհեստանոցի ռանդաներին։`,
      `**Пилы, которые режут, когда тянешь.** Европейская пила режет, когда её толкаешь. Японская пила — наоборот: её зубья смотрят назад, к ручке, и она режет, когда её **тянешь**. При этом полотно натягивается и остаётся прямым, как верёвка, поэтому не гнётся и может быть очень **тонким**. Тонкое полотно оставляет узкий пропил, требует меньше сил и меньше тратит дерева, поэтому многие столяры мира теперь пользуются японскими пилами.

**Рубанок римских времён.** Люди выравнивают дерево тысячи лет, но **рубанок** — нож, наклонно закреплённый в колодке, — по Европе распространили **римляне** около 2000 лет назад. Римские рубанки находили в городах, засыпанных при извержении Везувия, и в римских крепостях в Британии. У них железная подошва и деревянная колодка, и они очень похожи на рубанки в твоей школьной мастерской.`,
    ),
    ask(2, {
      en: ["Why can a Japanese saw blade be made so thin?", ["It is made of gold", "It cuts on the pull, which keeps the blade stretched straight", "It is only used on soft wood", "Its teeth are on both sides"], "Pulling stretches the blade like a rope, so it does not bend even when it is very thin."],
      hy: ["Ինչո՞ւ կարող է ճապոնական սղոցի սայրն այդքան բարակ լինել։", ["Այն ոսկուց է", "Այն կտրում է քաշելիս, և սայրը ձգված ու ուղիղ է մնում", "Այն օգտագործվում է միայն փափուկ փայտի համար", "Ատամներն երկու կողմից են"], "Քաշելիս սայրը ձգվում է պարանի պես, ուստի չի ծռվում, նույնիսկ եթե շատ բարակ է։"],
      ru: ["Почему полотно японской пилы может быть таким тонким?", ["Оно сделано из золота", "Пила режет на себя, и полотно остаётся натянутым и прямым", "Ею пилят только мягкое дерево", "Зубья у неё с двух сторон"], "Когда тянешь, полотно натягивается, как верёвка, и не гнётся, даже если оно очень тонкое."],
    }),
  ],
  "cutting-board-project": [
    "mechanism board",
    closer(
      `**Wood or plastic?** For years people thought plastic chopping boards were cleaner than wooden ones. In the 1990s the American food scientist **Dean Cliver** decided to test it. He put bacteria on both kinds of board. On wood, most of the bacteria soon disappeared: the wood soaked up the moisture into its pores, where they dried out and died. On old plastic boards covered in knife cuts, bacteria hid in the scratches and survived. The lesson: any board must be washed well, and a deeply scratched plastic board should be replaced.

**A board that heals itself.** The best boards are made of **end grain**: short blocks glued together so that you cut into the ends of the fibres, like the bristles of a brush. The knife slips **between** the fibres instead of cutting them, and they close up again afterwards. Such a board keeps knives sharp for longer and hardly shows cuts, though it takes much more work to make.`,
      `**Փա՞յտ, թե՞ պլաստմասա։** Տարիներ շարունակ մարդիկ կարծում էին, որ պլաստմասե տախտակներն ավելի մաքուր են, քան փայտեները։ 1990-ական թվականներին ամերիկացի սննդագետ **Դին Քլայվերը** որոշեց դա ստուգել։ Նա բակտերիաներ դրեց երկու տեսակի տախտակների վրա։ Փայտի վրա բակտերիաների մեծ մասը շուտով անհետացավ․ փայտը խոնավությունը ներծծեց իր ծակոտիների մեջ, որտեղ նրանք չորացան և մահացան։ Դանակի կտրվածքներով ծածկված հին պլաստմասե տախտակների վրա բակտերիաները թաքնվեցին ճեղքերում և ողջ մնացին։ Դասը հետևյալն է․ ցանկացած տախտակ պետք է լավ լվանալ, իսկ խորը քերծված պլաստմասե տախտակը պետք է փոխարինել։

**Տախտակ, որն ինքն իրեն բուժում է։** Լավագույն տախտակները պատրաստվում են **ճակատային կտրվածքից**․ կարճ կտորներ են սոսնձում այնպես, որ դանակը կտրի թելիկների ծայրերը, ինչպես խոզանակի մազիկները։ Դանակը սահում է թելիկների **արանքով**՝ առանց դրանք կտրելու, և հետո դրանք նորից փակվում են։ Այդպիսի տախտակը դանակները երկար է սուր պահում, և դրա վրա կտրվածքները գրեթե չեն երևում, թեև դրա պատրաստումը շատ ավելի աշխատատար է։`,
      `**Дерево или пластик?** Долгие годы считалось, что пластиковые разделочные доски чище деревянных. В 1990-х американский специалист по пищевой безопасности **Дин Клайвер** решил это проверить. Он нанёс бактерии на доски обоих видов. На дереве большинство бактерий вскоре исчезло: древесина впитывала влагу в свои поры, где бактерии высыхали и погибали. На старых пластиковых досках, покрытых порезами, бактерии прятались в царапинах и выживали. Вывод: любую доску нужно хорошо мыть, а сильно исцарапанную пластиковую — заменить.

**Доска, которая сама заживает.** Лучшие доски делают **торцевыми**: короткие бруски склеивают так, чтобы нож попадал в концы волокон, как в щетину щётки. Нож проходит **между** волокнами, не перерезая их, и потом они снова смыкаются. Такая доска дольше сохраняет ножи острыми и почти не показывает порезов, хотя сделать её гораздо труднее.`,
    ),
    ask(3, {
      en: ["What did Dean Cliver find when he tested chopping boards?", ["Plastic boards are always cleaner", "Bacteria live longest on wood", "On wood most bacteria dried out, but scratched plastic let them hide", "Boards do not need washing"], "Wood soaks up moisture into its pores, where bacteria dry out; deep scratches in plastic give them a hiding place."],
      hy: ["Ի՞նչ պարզեց Դին Քլայվերը, երբ փորձարկեց կտրատելու տախտակները։", ["Պլաստմասե տախտակները միշտ ավելի մաքուր են", "Բակտերիաներն ամենաերկարն ապրում են փայտի վրա", "Փայտի վրա բակտերիաների մեծ մասը չորանում էր, իսկ քերծված պլաստմասայի մեջ նրանք թաքնվում էին", "Տախտակները լվանալու կարիք չունեն"], "Փայտը խոնավությունը ներծծում է ծակոտիների մեջ, որտեղ բակտերիաները չորանում են, իսկ պլաստմասայի խորը քերծվածքները նրանց համար թաքստոց են։"],
      ru: ["Что выяснил Дин Клайвер, испытав разделочные доски?", ["Пластиковые доски всегда чище", "Дольше всего бактерии живут на дереве", "На дереве большинство бактерий высыхало, а в царапинах пластика они прятались", "Доски не нужно мыть"], "Древесина впитывает влагу в поры, где бактерии высыхают; глубокие царапины на пластике дают им укрытие."],
    }),
  ],
  "sheet-metal-and-wire": [
    "diagram wiretools",
    closer(
      `**A giant made of thin copper.** The **Statue of Liberty** in New York is 46 metres tall, but its copper skin is only about **2.4 mm** thick, about the thickness of two coins. Craftsmen in Paris hammered about 300 copper sheets into shape over wooden moulds and fixed them to an iron skeleton designed by **Gustave Eiffel**. At first the statue was the colour of a new coin. Within about 30 years the air turned the copper **green**. This green layer, called **patina**, protects the metal underneath, so nobody has ever painted it.

**More precious than gold.** About 170 years ago **aluminium** was so hard to get out of its ore that it cost more than gold. The French emperor **Napoleon III** is said to have given his most honoured guests aluminium forks and spoons, while the others ate with gold ones. In 1884 a small aluminium pyramid was placed on top of the Washington Monument as a show of wealth. Just two years later a new way of making aluminium with electricity was found, and soon it became cheap enough for cans and foil.`,
      `**Բարակ պղնձից պատրաստված հսկա։** Նյու Յորքի **Ազատության արձանը** 46 մետր բարձրություն ունի, բայց նրա պղնձե «մաշկը» ընդամենը մոտ **2,4 մմ** հաստություն ունի՝ մոտավորապես երկու մետաղադրամի չափ։ Փարիզի վարպետները փայտե կաղապարների վրա մուրճով ձևավորեցին մոտ 300 պղնձե թիթեղ և ամրացրին դրանք երկաթե կմախքին, որը նախագծել էր **Գյուստավ Էյֆելը**։ Սկզբում արձանը նոր մետաղադրամի գույն ուներ։ Մոտ 30 տարում օդը պղինձը **կանաչեցրեց**։ Այդ կանաչ շերտը՝ **պատինան**, պաշտպանում է տակի մետաղը, ուստի արձանն երբեք չեն ներկել։

**Ոսկուց թանկ։** Մոտ 170 տարի առաջ **ալյումինը** հանքաքարից այնքան դժվար էր ստանալ, որ այն ոսկուց թանկ արժեր։ Պատմում են, որ ֆրանսիական կայսր **Նապոլեոն III-ը** ամենապատվավոր հյուրերին ալյումինե պատառաքաղներ և գդալներ էր տալիս, իսկ մնացածն ուտում էին ոսկեղեններով։ 1884 թվականին Վաշինգտոնի հուշարձանի գագաթին դրեցին փոքրիկ ալյումինե բուրգ՝ որպես հարստության նշան։ Ընդամենը երկու տարի անց հայտնաբերվեց ալյումինն էլեկտրականությամբ ստանալու նոր եղանակ, և շուտով այն այնքան էժանացավ, որ դրանից պահածոյի տուփեր և փայլաթիթեղ սկսեցին պատրաստել։`,
      `**Великан из тонкой меди.** **Статуя Свободы** в Нью-Йорке высотой 46 метров, но её медная «кожа» толщиной всего около **2,4 мм** — примерно как две монетки. Мастера в Париже выколотили молотками по деревянным формам около 300 медных листов и закрепили их на железном каркасе, который спроектировал **Гюстав Эйфель**. Сначала статуя была цвета новой монеты. Примерно за 30 лет воздух сделал медь **зелёной**. Этот зелёный слой, **патина**, защищает металл под ним, поэтому статую никогда не красили.

**Дороже золота.** Около 170 лет назад **алюминий** было так трудно получить из руды, что он стоил дороже золота. Говорят, что французский император **Наполеон III** давал самым почётным гостям алюминиевые вилки и ложки, а остальные ели золотыми. В 1884 году на вершину монумента Вашингтона поставили маленькую алюминиевую пирамидку как знак богатства. Всего через два года нашли новый способ получать алюминий с помощью электричества, и вскоре он стал таким дешёвым, что из него начали делать банки и фольгу.`,
    ),
    ask(4, {
      en: ["Why has nobody painted the green Statue of Liberty?", ["Paint does not stick to statues", "It is too tall to reach", "Green is the colour of the flag", "The green patina protects the copper underneath"], "Air turned the copper green; this patina layer shields the metal from further damage."],
      hy: ["Ինչո՞ւ ոչ ոք չի ներկել կանաչ Ազատության արձանը։", ["Ներկը չի կպչում արձաններին", "Այն չափազանց բարձր է", "Կանաչը դրոշի գույնն է", "Կանաչ պատինան պաշտպանում է տակի պղինձը"], "Օդը պղինձը կանաչեցրեց, և այդ պատինայի շերտը պաշտպանում է մետաղը հետագա վնասից։"],
      ru: ["Почему зелёную Статую Свободы никто не красит?", ["Краска не держится на статуях", "Она слишком высокая", "Зелёный — цвет флага", "Зелёная патина защищает медь под ней"], "Воздух сделал медь зелёной, и этот слой патины защищает металл от дальнейшего разрушения."],
    }),
  ],
  "technical-views": [
    "diagram views",
    closer(
      `**A triangle that cannot exist.** In 1934 an 18-year-old Swedish student, **Oscar Reutersvärd**, was doodling in a Latin lesson. He drew a row of cubes and found he had made a **triangle** in which every corner looked like a right angle. Such a shape cannot be built in real life: each corner on its own makes sense, but together they do not. Years later scientists rediscovered it, and the artist M. C. Escher used such tricks in his pictures. Impossible objects show why engineers need **several views**: one picture alone can fool the eye.

**A president's invention.** **Abraham Lincoln** is the only American president who held a **patent**. As a young man he worked on river boats that kept getting stuck on sandbanks. In 1849 he patented a way to lift a boat over shallow water with air-filled bags on its sides. To get the patent he had to send precise **drawings** and even carved a wooden model. The device was never built, but the drawings still survive.`,
      `**Եռանկյուն, որը չի կարող գոյություն ունենալ։** 1934 թվականին 18-ամյա շվեդ աշակերտ **Օսկար Ռոյտերսվարդը** լատիներենի դասին խզբզում էր։ Նա խորանարդների շարք գծեց և հայտնաբերեց, որ ստացել է **եռանկյուն**, որի ամեն անկյունը ուղիղ անկյան տեսք ունի։ Այդպիսի ձևն իրական կյանքում հնարավոր չէ կառուցել․ ամեն անկյուն առանձին իմաստ ունի, բայց միասին՝ ոչ։ Տարիներ անց գիտնականները նորից հայտնաբերեցին այն, իսկ նկարիչ Մ. Կ. Էշերն այդպիսի հնարքներ օգտագործեց իր նկարներում։ Անհնար առարկաները ցույց են տալիս, թե ինչու են ինժեներներին պետք **մի քանի տեսք**․ մեկ նկարը կարող է խաբել աչքին։

**Նախագահի գյուտը։** **Աբրահամ Լինքոլնը** ամերիկյան միակ նախագահն է, որն **արտոնագիր** է ունեցել։ Երիտասարդ տարիներին նա աշխատում էր գետային նավակներում, որոնք անընդհատ խրվում էին ծանծաղուտներում։ 1849 թվականին նա արտոնագրեց նավակը ծանծաղ ջրի վրայով բարձրացնելու եղանակ՝ կողքերին ամրացված օդով լցված պարկերով։ Արտոնագիր ստանալու համար նա պետք է ճշգրիտ **գծագրեր** ուղարկեր և նույնիսկ փայտե մոդել փորագրեց։ Սարքն երբեք չկառուցվեց, բայց գծագրերը պահպանվել են։`,
      `**Треугольник, которого не может быть.** В 1934 году 18-летний шведский школьник **Оскар Реутерсвярд** рисовал на уроке латыни. Он начертил ряд кубиков и обнаружил, что получился **треугольник**, у которого каждый угол выглядит прямым. Такую фигуру нельзя построить в жизни: каждый угол по отдельности понятен, а вместе — нет. Годы спустя учёные открыли её заново, а художник М. К. Эшер использовал такие трюки в своих картинах. Невозможные фигуры показывают, зачем инженерам **несколько видов**: одна картинка может обмануть глаз.

**Изобретение президента.** **Авраам Линкольн** — единственный американский президент, у которого был **патент**. В молодости он работал на речных судах, которые постоянно садились на мели. В 1849 году он запатентовал способ приподнимать судно над мелководьем надутыми воздухом мешками по бокам. Чтобы получить патент, нужно было прислать точные **чертежи**, и он даже вырезал деревянную модель. Устройство так и не построили, но чертежи сохранились.`,
    ),
    ask(1, {
      en: ["What does Reutersvärd's impossible triangle show about drawings?", ["One picture alone can fool the eye, so engineers use several views", "Triangles cannot be drawn with a ruler", "Cubes always look like triangles", "Latin lessons are boring"], "Each corner makes sense on its own but the whole cannot exist; several exact views remove the doubt."],
      hy: ["Ի՞նչ է ցույց տալիս Ռոյտերսվարդի անհնար եռանկյունը գծագրերի մասին։", ["Մեկ նկարը կարող է խաբել աչքին, ուստի ինժեներներն օգտագործում են մի քանի տեսք", "Եռանկյունները չի կարելի քանոնով գծել", "Խորանարդները միշտ եռանկյան տեսք ունեն", "Լատիներենի դասերը ձանձրալի են"], "Ամեն անկյուն առանձին իմաստ ունի, բայց ամբողջը չի կարող գոյություն ունենալ․ մի քանի ճշգրիտ տեսքը վերացնում է կասկածը։"],
      ru: ["Что невозможный треугольник Реутерсвярда показывает о чертежах?", ["Одна картинка может обмануть глаз, поэтому инженеры используют несколько видов", "Треугольник нельзя начертить линейкой", "Кубики всегда похожи на треугольники", "Уроки латыни скучные"], "Каждый угол по отдельности понятен, а целое существовать не может; несколько точных видов снимают сомнения."],
    }),
  ],
  "fibres-and-fabrics": [
    "diagram weaves3",
    closer(
      `**Jeans with metal rivets.** In 1870 a woman in the American town of Reno asked the tailor **Jacob Davis** for strong trousers for her husband, a woodcutter whose pockets kept tearing. Davis hammered small **copper rivets** into the corners of the pockets, just as he did on horse blankets. The trousers sold so well that he wrote to the cloth merchant **Levi Strauss**, who sold him the fabric. In **1873** they took out a patent together. Look at your jeans: the little rivets are still there.

**Silk from trees.** Silk was always expensive, so chemists tried to make it themselves. In **1892** three British chemists found how to dissolve **cellulose** from wood pulp and squeeze it through tiny holes into long shiny threads. People called it "artificial silk"; today it is **viscose**. So a viscose dress really is made from a tree, but it is neither natural like cotton nor made from oil like polyester. That is why it has its own group.`,
      `**Ջինսեր մետաղե գամերով։** 1870 թվականին ամերիկյան Ռինո քաղաքում մի կին դերձակ **Ջեյքոբ Դևիսին** խնդրեց ամուր տաբատ կարել իր ամուսնու՝ փայտահատի համար, որի գրպաններն անընդհատ պատռվում էին։ Դևիսը գրպանների անկյուններին փոքրիկ **պղնձե գամեր** խփեց, ինչպես անում էր ձիերի ծածկոցների վրա։ Տաբատներն այնքան լավ էին վաճառվում, որ նա նամակ գրեց կտորի վաճառական **Լևի Ստրաուսին**, որից գնում էր կտորը։ **1873** թվականին նրանք միասին արտոնագիր ստացան։ Նայի՛ր ջինսերիդ․ փոքրիկ գամերը մինչ օրս այնտեղ են։

**Մետաքս ծառերից։** Մետաքսը միշտ թանկ է եղել, ուստի քիմիկոսները փորձում էին այն ինքնուրույն ստանալ։ **1892** թվականին երեք բրիտանացի քիմիկոս գտան, թե ինչպես լուծել փայտի զանգվածից ստացված **թաղանթանյութը** և այն մանրագույն անցքերով սեղմել՝ ստանալով երկար փայլուն թելեր։ Մարդիկ այն անվանեցին «արհեստական մետաքս», այսօր դա **վիսկոզն** է։ Այնպես որ վիսկոզե զգեստն իսկապես ծառից է, բայց այն ոչ բնական է, ինչպես բամբակը, ոչ էլ նավթից է, ինչպես պոլիեսթերը։ Ահա թե ինչու այն առանձին խումբ ունի։`,
      `**Джинсы с металлическими заклёпками.** В 1870 году женщина из американского городка Рино попросила портного **Джейкоба Дэвиса** сшить прочные брюки для мужа-лесоруба, у которого постоянно рвались карманы. Дэвис вбил в углы карманов маленькие **медные заклёпки**, как делал на попонах для лошадей. Брюки так хорошо продавались, что он написал торговцу тканями **Леви Страуссу**, у которого покупал материал. В **1873** году они вместе получили патент. Посмотри на свои джинсы: маленькие заклёпки до сих пор на месте.

**Шёлк из деревьев.** Шёлк всегда был дорогим, и химики пытались получить его сами. В **1892** году три британских химика нашли способ растворить **целлюлозу** из древесной массы и продавить её через крошечные отверстия в длинные блестящие нити. Её назвали «искусственным шёлком», сегодня это **вискоза**. Так что вискозное платье действительно сделано из дерева, но оно не природное, как хлопок, и не из нефти, как полиэстер. Поэтому у вискозы своя группа.`,
    ),
    ask(2, {
      en: ["What is viscose made from?", ["Oil", "Cellulose from wood", "Silkworm cocoons", "Sheep's wool"], "Chemists dissolve wood cellulose and squeeze it into threads, so viscose is neither natural nor synthetic but regenerated."],
      hy: ["Ինչի՞ց է պատրաստվում վիսկոզը։", ["Նավթից", "Փայտի թաղանթանյութից", "Շերամի բոժոժներից", "Ոչխարի բրդից"], "Քիմիկոսները լուծում են փայտի թաղանթանյութը և սեղմելով թելեր ստանում, ուստի վիսկոզն ո՛չ բնական է, ո՛չ սինթետիկ, այլ վերականգնված։"],
      ru: ["Из чего делают вискозу?", ["Из нефти", "Из древесной целлюлозы", "Из коконов шелкопряда", "Из овечьей шерсти"], "Химики растворяют древесную целлюлозу и продавливают её в нити, поэтому вискоза не природная и не синтетическая, а искусственная."],
    }),
  ],
  "sewing-machine": [
    "mechanism lockstitch",
    "diagram sewmachine",
    closer(
      `**The tailors who smashed the machines.** In **1830** the French tailor **Barthélemy Thimonnier** patented one of the first sewing machines that really worked. It made a simple chain stitch with one thread. Soon he had a workshop in Paris with about 80 machines sewing army uniforms. Hand tailors were afraid of losing their work, and an angry crowd broke in and **smashed** the machines. Thimonnier kept improving his machine, but he died poor, and others grew rich from the idea.

**An eye at the wrong end.** For a long time inventors tried to copy hand sewing, with the eye at the top of the needle. The American **Elias Howe** put the eye **near the point** instead. It lets the needle push a loop of thread through the fabric for the lower thread to lock with, as in the animation. The story goes that the idea came to him in a nightmare about warriors whose spears had holes near their tips. True or not, Howe's patent of **1846** helped give us the machine we use today.`,
      `**Դերձակները, որոնք ջարդեցին մեքենաները։** **1830** թվականին ֆրանսիացի դերձակ **Բարտելեմի Թիմոնյեն** արտոնագրեց առաջին իսկապես աշխատող կարի մեքենաներից մեկը։ Այն մեկ թելով պարզ շղթայաձև կար էր անում։ Շուտով Փարիզում նա արհեստանոց ունեցավ մոտ 80 մեքենայով, որոնք զինվորական համազգեստներ էին կարում։ Ձեռքով աշխատող դերձակները վախենում էին կորցնել իրենց աշխատանքը, և զայրացած ամբոխը ներխուժեց ու **ջարդեց** մեքենաները։ Թիմոնյեն շարունակեց կատարելագործել իր մեքենան, բայց մահացավ աղքատության մեջ, իսկ ուրիշները հարստացան այդ գաղափարով։

**Անցքը ոչ այն ծայրում։** Երկար ժամանակ գյուտարարները փորձում էին կրկնօրինակել ձեռքի կարը՝ ասեղի վերևում գտնվող անցքով։ Ամերիկացի **Իլայաս Հոուն** անցքը դրեց **սուր ծայրի մոտ**։ Դրա շնորհիվ ասեղը գործվածքի միջով թելի օղակ է անցկացնում, որի հետ կապվում է ստորին թելը, ինչպես անիմացիայում։ Պատմում են, որ միտքը նրան եկավ մղձավանջում, որտեղ մարտիկների նիզակների ծայրերի մոտ անցքեր կային։ Ճիշտ է դա, թե ոչ, Հոուի **1846** թվականի արտոնագիրն օգնեց ստեղծել այն մեքենան, որն օգտագործում ենք այսօր։`,
      `**Портные, которые разбили машины.** В **1830** году французский портной **Бартелеми Тимонье** запатентовал одну из первых по-настоящему работающих швейных машин. Она делала простой цепной стежок одной ниткой. Вскоре у него была мастерская в Париже примерно с 80 машинами, которые шили армейскую форму. Портные, шившие вручную, боялись остаться без работы, и разгневанная толпа ворвалась туда и **разбила** машины. Тимонье продолжал улучшать свою машину, но умер в бедности, а разбогатели на этой идее другие.

**Ушко не на том конце.** Долгое время изобретатели пытались повторить ручное шитьё, с ушком в верхней части иглы. Американец **Элайас Хоу** поместил ушко **у острия**. Так игла протаскивает сквозь ткань петлю нитки, с которой переплетается нижняя нить, как в анимации. Рассказывают, что идея пришла ему в кошмарном сне о воинах, у чьих копий были отверстия у самых наконечников. Правда это или нет, патент Хоу **1846** года помог создать машину, которой мы пользуемся сегодня.`,
    ),
    ask(3, {
      en: ["Where is the eye of a sewing-machine needle?", ["At the top, like a hand needle", "In the middle", "Near the point", "It has no eye"], "With the eye near the point the needle can push a loop of thread through the fabric for the lower thread to lock with."],
      hy: ["Որտե՞ղ է կարի մեքենայի ասեղի անցքը։", ["Վերևում, ինչպես ձեռքի ասեղինը", "Մեջտեղում", "Սուր ծայրի մոտ", "Այն անցք չունի"], "Երբ անցքը սուր ծայրի մոտ է, ասեղը կարող է թելի օղակ անցկացնել գործվածքի միջով, որ դրա հետ կապվի ստորին թելը։"],
      ru: ["Где ушко у иглы швейной машины?", ["Наверху, как у ручной иглы", "Посередине", "У острия", "Ушка у неё нет"], "Когда ушко у острия, игла может протащить сквозь ткань петлю нитки, с которой переплетётся нижняя нить."],
    }),
  ],
  "nutrition-and-breakfast": [
    "diagram plate",
    closer(
      `**Why it is called breakfast.** The English word **breakfast** means "breaking the fast". If you have supper at 8 in the evening and get up at 7, your body has gone about **11 hours** without food. During the night it uses up its quick store of energy, so in the morning the brain and muscles need refuelling. Children who eat a good breakfast usually find it easier to concentrate in the first lessons.

**Nine spoons in a can.** A normal 330 ml can of cola contains about **35 g** of sugar: almost **9 teaspoons**. The World Health Organization advises that, for good health, an adult should have no more than about **25 g** of added sugar a day, and children even less. So one can is already more than a whole day's amount. Try putting 9 teaspoons of sugar into a glass of water: few people would drink it, yet in a fizzy drink we do not notice.`,
      `**Ինչու է կոչվում նախաճաշ։** Անգլերեն **breakfast** բառը նշանակում է «ծոմը բեկանել»։ Եթե ընթրում ես երեկոյան ժամը 8-ին և արթնանում 7-ին, օրգանիզմդ մոտ **11 ժամ** մնացել է առանց սննդի։ Գիշերն այն ծախսում է իր արագ էներգիայի պաշարը, ուստի առավոտյան ուղեղին և մկաններին լիցքավորում է պետք։ Լավ նախաճաշող երեխաները սովորաբար առաջին դասերին ավելի հեշտ են կենտրոնանում։

**Ինը գդալ մեկ տուփում։** Սովորական 330 մլ կոլայի տուփը մոտ **35 գ** շաքար է պարունակում՝ գրեթե **9 թեյի գդալ**։ Առողջապահության համաշխարհային կազմակերպությունը խորհուրդ է տալիս, որ առողջության համար մեծահասակն օրական ստանա ոչ ավելի, քան մոտ **25 գ** ավելացված շաքար, իսկ երեխաները՝ ավելի քիչ։ Այնպես որ մեկ տուփն արդեն ավելին է, քան ամբողջ օրվա չափաբաժինը։ Փորձի՛ր 9 թեյի գդալ շաքար լցնել մեկ բաժակ ջրի մեջ․ քչերը կխմեին այն, իսկ գազավորված ըմպելիքում մենք դա չենք նկատում։`,
      `**Почему завтрак так называется.** Английское слово **breakfast** значит «прервать пост». Если ты ужинаешь в 8 вечера, а встаёшь в 7, твой организм провёл без еды около **11 часов**. За ночь он расходует быстрый запас энергии, поэтому утром мозгу и мышцам нужна заправка. Дети, которые хорошо позавтракали, обычно легче сосредотачиваются на первых уроках.

**Девять ложек в банке.** Обычная банка колы объёмом 330 мл содержит около **35 г** сахара — почти **9 чайных ложек**. Всемирная организация здравоохранения советует взрослым для здоровья съедать не больше примерно **25 г** добавленного сахара в день, а детям ещё меньше. Значит, одна банка — это уже больше дневной нормы. Попробуй насыпать 9 чайных ложек сахара в стакан воды: мало кто стал бы это пить, а в газировке мы этого не замечаем.`,
    ),
    ask(4, {
      en: ["About how many teaspoons of sugar are in a 330 ml can of cola?", ["1", "3", "5", "9"], "About 35 g of sugar, almost 9 teaspoons: more than the whole day's amount the WHO suggests for an adult."],
      hy: ["Մոտավորապես քանի՞ թեյի գդալ շաքար կա 330 մլ կոլայի տուփում։", ["1", "3", "5", "9"], "Մոտ 35 գ շաքար՝ գրեթե 9 թեյի գդալ, ավելին, քան ԱՀԿ-ի առաջարկած օրական ամբողջ չափաբաժինը մեծահասակի համար։"],
      ru: ["Примерно сколько чайных ложек сахара в банке колы 330 мл?", ["1", "3", "5", "9"], "Около 35 г сахара, почти 9 чайных ложек: больше, чем ВОЗ советует взрослому за весь день."],
    }),
  ],
  "caring-for-clothes-and-home": [
    "diagram carelabel",
    closer(
      `**One language for every label.** A T-shirt may be made in one country, sold in another and washed in a third. So in **1963** a group of countries agreed on a set of simple **pictures** that anyone can understand without words: a washtub, a triangle, a square, an iron and a circle. The organisation that looks after them is called **GINETEX**, and its symbols are now used across Europe and much of the world. The washtub was chosen because at the time many people really did wash clothes in a tub.

**Enzymes that eat stains.** In **1913** the German chemist **Otto Röhm** had an idea: stains such as egg, blood and gravy are made of the same things as food, so why not remove them with **enzymes**, the substances that digest food in our stomach? His washing powder was the first with enzymes. Today almost every detergent has them. Enzymes work best in warm, not hot, water, so modern powders clean well at 30 or 40 degrees and save a lot of electricity.`,
      `**Մեկ լեզու բոլոր պիտակների համար։** Շապիկը կարող է կարվել մի երկրում, վաճառվել մեկ ուրիշում և լվացվել երրորդում։ Ուստի **1963** թվականին մի խումբ երկրներ համաձայնեցին պարզ **նկարների** մի շարքի շուրջ, որ ցանկացած մարդ կհասկանա առանց բառերի․ տաշտ, եռանկյուն, քառակուսի, արդուկ և շրջան։ Կազմակերպությունը, որը հոգ է տանում դրանց մասին, կոչվում է **GINETEX**, և նրա նշաններն այժմ օգտագործվում են ամբողջ Եվրոպայում և աշխարհի մեծ մասում։ Տաշտն ընտրեցին, քանի որ այն ժամանակ շատերն իսկապես տաշտում էին լվանում հագուստը։

**Ֆերմենտներ, որոնք «ուտում» են բծերը։** **1913** թվականին գերմանացի քիմիկոս **Օտտո Ռյոմը** մի միտք ունեցավ․ ձվի, արյան և սոուսի բծերը կազմված են նույն նյութերից, ինչ սնունդը, ուրեմն ինչու՞ դրանք չհեռացնել **ֆերմենտներով**՝ այն նյութերով, որոնք մեր ստամոքսում մարսում են սնունդը։ Նրա լվացքի փոշին առաջինն էր ֆերմենտներով։ Այսօր դրանք կան գրեթե բոլոր լվացող միջոցներում։ Ֆերմենտները լավագույնս աշխատում են գաղջ, ոչ թե տաք ջրում, ուստի ժամանակակից փոշիները լավ են լվանում 30 կամ 40 աստիճանում և շատ էլեկտրաէներգիա են խնայում։`,
      `**Один язык для всех ярлыков.** Футболку могут сшить в одной стране, продать в другой и стирать в третьей. Поэтому в **1963** году группа стран договорилась о наборе простых **картинок**, понятных любому без слов: тазик, треугольник, квадрат, утюг и круг. Организация, которая за ними следит, называется **GINETEX**, и её значки сейчас используют по всей Европе и в большей части мира. Тазик выбрали потому, что тогда многие и правда стирали в тазу.

**Ферменты, которые «едят» пятна.** В **1913** году немецкий химик **Отто Рём** подумал: пятна от яйца, крови и соуса состоят из того же, что и еда, так почему бы не удалять их **ферментами** — веществами, которые переваривают пищу в нашем желудке? Его стиральный порошок стал первым с ферментами. Сегодня они есть почти во всех моющих средствах. Ферменты лучше всего работают в тёплой, а не горячей воде, поэтому современные порошки хорошо отстирывают при 30 или 40 градусах и экономят много электричества.`,
    ),
    ask(1, {
      en: ["Why do modern washing powders clean well at only 30 or 40 degrees?", ["They contain enzymes that work best in warm water", "Hot water makes clothes dirtier", "The machines cannot heat water", "The symbols forbid hot water"], "Enzymes break down stains made of food-like substances and work best in warm, not hot, water, saving electricity."],
      hy: ["Ինչո՞ւ են ժամանակակից լվացքի փոշիները լավ լվանում ընդամենը 30 կամ 40 աստիճանում։", ["Դրանցում ֆերմենտներ կան, որոնք լավագույնս աշխատում են գաղջ ջրում", "Տաք ջուրը հագուստն ավելի է կեղտոտում", "Մեքենաները չեն կարող ջուր տաքացնել", "Նշաններն արգելում են տաք ջուրը"], "Ֆերմենտները քայքայում են սննդանման նյութերից կազմված բծերը և լավագույնս աշխատում են գաղջ, ոչ թե տաք ջրում՝ էլեկտրաէներգիա խնայելով։"],
      ru: ["Почему современные порошки хорошо стирают уже при 30 или 40 градусах?", ["В них есть ферменты, которые лучше всего работают в тёплой воде", "Горячая вода пачкает одежду", "Машины не умеют греть воду", "Значки запрещают горячую воду"], "Ферменты расщепляют пятна из веществ, похожих на еду, и лучше работают в тёплой, а не горячей воде, экономя электричество."],
    }),
  ],
};
