import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade11: VisualMap[number] = {
  "migrations-and-diaspora": [
    "timeline set=diaspora",
    closer(
      `**A town on the Don.** In 1778 Catherine II moved the Christians of the Crimea, among them many Armenians, into the Russian Empire. In 1779 the Armenians founded **Nor Nakhichevan** on the river Don. It grew into a busy town of merchants and craftsmen with its own schools and printing press, and in 1928 it was joined to the neighbouring city of **Rostov-on-Don**. The **Surb Khach** church, built in 1786–1792, still stands there on a hill.

**A flower for a nation.** Armenian merchants reached **Singapore** soon after it was founded, and in 1835 they built the **Church of St Gregory the Illuminator**, the oldest church on the island. **Agnes Joaquim** (Ashkhen Hovakimian), a member of that small community, was a keen gardener, and in the 1890s she produced a new orchid, the **Vanda Miss Joaquim**. In 1981 it was chosen as the **national flower** of Singapore.`,
      `**Քաղաք՝ Դոնի ափին։** 1778 թվականին Եկատերինա II-ը Ղրիմի քրիստոնյաներին, այդ թվում՝ շատ հայերի, տեղափոխեց Ռուսական կայսրություն։ 1779 թվականին հայերը Դոն գետի ափին հիմնեցին **Նոր Նախիջևանը**։ Այն դարձավ վաճառականների և արհեստավորների աշխույժ քաղաք՝ իր դպրոցներով և տպարանով, իսկ 1928 թվականին միացվեց հարևան **Դոնի Ռոստով** քաղաքին։ 1786–1792 թվականներին կառուցված **Սուրբ Խաչ** եկեղեցին մինչ օրս կանգուն է այնտեղ՝ բլրի վրա։

**Ծաղիկ՝ մի ամբողջ երկրի համար։** Հայ վաճառականները **Սինգապուր** հասան նրա հիմնադրումից անմիջապես հետո, և 1835 թվականին կառուցեցին **Սուրբ Գրիգոր Լուսավորիչ եկեղեցին**՝ կղզու ամենահին եկեղեցին։ Այդ փոքր համայնքի անդամ **Աշխեն Հովակիմյանը** (Ագնես Ժոակիմ) սիրում էր այգեգործությունը, և 1890-ական թվականներին նա ստացավ խոլորձի նոր տեսակ՝ **«Վանդա Միսս Ժոակիմ»**։ 1981 թվականին այն ընտրվեց Սինգապուրի **ազգային ծաղիկ**։`,
      `**Город на Дону.** В 1778 году Екатерина II переселила христиан Крыма, среди них много армян, в Российскую империю. В 1779 году армяне основали на Дону **Нор-Нахичевань**. Он вырос в оживлённый город купцов и ремесленников со своими школами и типографией, а в 1928 году был присоединён к соседнему **Ростову-на-Дону**. Церковь **Сурб Хач**, построенная в 1786–1792 годах, до сих пор стоит там на холме.

**Цветок для целой страны.** Армянские купцы появились в **Сингапуре** вскоре после его основания и в 1835 году построили **церковь Святого Григория Просветителя** — старейшую церковь острова. **Агнес Жоаким** (Ашхен Овакимян), член этой небольшой общины, увлекалась садоводством и в 1890-х годах вывела новую орхидею — **«Ванда мисс Жоаким»**. В 1981 году её выбрали **национальным цветком** Сингапура.`,
    ),
    ask(3, {
      en: ["What did Agnes Joaquim give Singapore?", ["Its first newspaper", "Its oldest bridge", "An orchid that became its national flower", "Its national anthem"], "Her hybrid, Vanda Miss Joaquim, became the national flower in 1981."],
      hy: ["Ի՞նչ տվեց Աշխեն Հովակիմյանը Սինգապուրին։", ["Նրա առաջին թերթը", "Նրա ամենահին կամուրջը", "Խոլորձ, որը դարձավ նրա ազգային ծաղիկը", "Նրա ազգային օրհներգը"], "Նրա ստացած «Վանդա Միսս Ժոակիմ» խոլորձը 1981 թվականին դարձավ ազգային ծաղիկ։"],
      ru: ["Что Агнес Жоаким подарила Сингапуру?", ["Первую газету", "Старейший мост", "Орхидею, ставшую его национальным цветком", "Национальный гимн"], "Выведенная ею «Ванда мисс Жоаким» в 1981 году стала национальным цветком."],
    }),
  ],
  "liberation-ideologies": [
    "timeline set=liberation",
    closer(
      `**A call printed in Madras.** A year before Shahamirian's "Snare of Glory", his friend **Movses Baghramian** published in Madras a book with a long title, **"A New Notebook Called Exhortation"** (1772). It called on Armenians to stop waiting for help from others, to study, unite and win back their homeland by their own strength. It is one of the first printed Armenian calls for national liberation, written by a man who had travelled with Hovsep Emin in the mountains of Armenia.

**A general buried three times.** **Andranik Ozanian**, the most famous fedayi commander, spent his last years in the United States and died in California in 1927. He was first buried in **Fresno**, but in 1928 his remains were taken to the **Père Lachaise** cemetery in Paris. In 2000 they were finally brought to Armenia and reburied at the **Yerablur** military pantheon in Yerevan, where many Armenians visit him today.`,
      `**Մադրասում տպված կոչ։** Շահամիրյանի «Որոգայթ փառաց» գրքից մեկ տարի առաջ նրա ընկեր **Մովսես Բաղրամյանը** Մադրասում հրատարակեց երկար վերնագրով մի գիրք՝ **«Նոր տետրակ, որ կոչի Յորդորակ»** (1772)։ Այն հայերին կոչ էր անում դադարել ուրիշների օգնությանը սպասելուց, սովորել, միավորվել և իրենց ուժերով ետ բերել հայրենիքը։ Դա ազգային ազատագրության առաջին տպագիր հայկական կոչերից է, որը գրել էր Հովսեփ Էմինի հետ Հայաստանի լեռներում ճամփորդած մարդը։

**Երեք անգամ թաղված զորավար։** Ֆիդայական ամենահայտնի հրամանատար **Անդրանիկ Օզանյանն** իր վերջին տարիներն անցկացրեց Միացյալ Նահանգներում և մահացավ Կալիֆոռնիայում 1927 թվականին։ Նրան սկզբում թաղեցին **Ֆրեզնոյում**, բայց 1928 թվականին նրա աճյունը տեղափոխեցին Փարիզի **Պեր Լաշեզ** գերեզմանատուն։ 2000 թվականին այն վերջապես բերվեց Հայաստան և վերաթաղվեց Երևանի **Եռաբլուր** զինվորական պանթեոնում, որտեղ այսօր շատ հայեր այցելում են նրան։`,
      `**Призыв, напечатанный в Мадрасе.** За год до «Западни честолюбия» Шаамиряна его друг **Мовсес Баграмян** издал в Мадрасе книгу с длинным названием — **«Новая тетрадь, именуемая Увещание»** (1772). Она призывала армян перестать ждать помощи от других, учиться, объединяться и вернуть родину собственными силами. Это один из первых печатных армянских призывов к национальному освобождению, написанный человеком, который путешествовал с Овсепом Эмином по горам Армении.

**Полководец, похороненный трижды.** **Андраник Озанян**, самый знаменитый командир фидаинов, провёл последние годы в США и умер в Калифорнии в 1927 году. Сначала его похоронили во **Фресно**, но в 1928 году прах перевезли на кладбище **Пер-Лашез** в Париже. В 2000 году его наконец привезли в Армению и перезахоронили в военном пантеоне **Ераблур** в Ереване, где его сегодня навещают многие армяне.`,
    ),
    ask(1, {
      en: ["Where is General Andranik buried today?", ["At Yerablur in Yerevan", "In Fresno", "At Père Lachaise in Paris", "In Sasun"], "After Fresno (1927) and Paris (1928), his remains were brought to Yerablur in 2000."],
      hy: ["Որտե՞ղ է այսօր թաղված Զորավար Անդրանիկը։", ["Երևանի Եռաբլուրում", "Ֆրեզնոյում", "Փարիզի Պեր Լաշեզում", "Սասունում"], "Ֆրեզնոյից (1927) և Փարիզից (1928) հետո նրա աճյունը 2000 թվականին բերվեց Եռաբլուր։"],
      ru: ["Где сегодня похоронен генерал Андраник?", ["На Ераблуре в Ереване", "Во Фресно", "На Пер-Лашез в Париже", "В Сасуне"], "После Фресно (1927) и Парижа (1928) его прах в 2000 году перенесли на Ераблур."],
    }),
  ],
  "western-armenians-zartonk": [
    "timeline set=zartonk",
    closer(
      `**A Turkish novel in Armenian letters.** Many Armenians of the Ottoman Empire spoke Turkish at home but read the Armenian alphabet, so books in Turkish were printed in Armenian letters. In 1851 **Hovsep Vartanian** published **"Akabi Hikayesi"** ("The Story of Akabi") in this way, a love story between young people of two different churches. Many scholars consider it the **first novel written in Turkish**, so Armenians stand at the beginning of Turkish prose as well.

**A woman who wrote about women.** **Srbuhi Dussap** of Constantinople became the first Armenian woman novelist. Her novel **"Mayda"** (1883), written as letters, was followed by "Siranush" and "Araksia, or the Governess". In all of them she argued that girls must be educated and that women should be able to work and earn their own living, ideas that many readers of her time found shocking.`,
      `**Թուրքերեն վեպ՝ հայերեն տառերով։** Օսմանյան կայսրության շատ հայեր տանը թուրքերեն էին խոսում, բայց կարդում էին հայերեն այբուբենով, ուստի թուրքերեն գրքերը տպվում էին հայերեն տառերով։ 1851 թվականին **Հովսեփ Վարդանյանը** այդպես հրատարակեց **«Ակաբի հիքայեսի»** («Ակաբիի պատմությունը») վեպը՝ երկու տարբեր եկեղեցիների պատկանող երիտասարդների սիրո պատմություն։ Շատ գիտնականներ այն համարում են **թուրքերեն գրված առաջին վեպը**, այնպես որ հայերը կանգնած են նաև թուրքական արձակի ակունքներում։

**Կին, որը գրում էր կանանց մասին։** Կոստանդնուպոլսեցի **Սրբուհի Տյուսաբը** դարձավ առաջին հայ կին վիպասանը։ Նրա նամակների ձևով գրված **«Մայտա»** (1883) վեպին հաջորդեցին «Սիրանույշը» և «Արաքսիա կամ վարժուհին»։ Բոլորում էլ նա պնդում էր, որ աղջիկները պետք է կրթություն ստանան, իսկ կանայք պետք է կարողանան աշխատել և ինքնուրույն վաստակել իրենց ապրուստը. այդ գաղափարներն իր ժամանակի շատ ընթերցողների ցնցում էին։`,
      `**Турецкий роман армянскими буквами.** Многие армяне Османской империи дома говорили по-турецки, но читали армянским алфавитом, поэтому книги на турецком печатались армянскими буквами. В 1851 году **Овсеп Вартанян** издал так роман **«Акаби хикяеси»** («История Акаби») — историю любви молодых людей из двух разных церквей. Многие учёные считают его **первым романом на турецком языке**, так что армяне стоят и у истоков турецкой прозы.

**Женщина, писавшая о женщинах.** **Србуи Дюсаб** из Константинополя стала первой армянской женщиной-романисткой. За её романом в письмах **«Майда»** (1883) последовали «Сирануйш» и «Аракся, или Гувернантка». Во всех них она доказывала, что девочки должны получать образование, а женщины — иметь возможность работать и самим зарабатывать на жизнь; многих читателей того времени эти мысли шокировали.`,
    ),
    ask(4, {
      en: ["What is special about \"Akabi Hikayesi\" (1851)?", ["It was the first Armenian newspaper", "It was written by Srbuhi Dussap", "It was banned by the patriarch", "It is often called the first novel written in Turkish"], "Hovsep Vartanian wrote it in Turkish, printed in Armenian letters."],
      hy: ["Ինչո՞վ է առանձնահատուկ «Ակաբի հիքայեսի» վեպը (1851)։", ["Այն առաջին հայկական թերթն էր", "Այն գրել է Սրբուհի Տյուսաբը", "Պատրիարքն այն արգելել էր", "Այն հաճախ անվանում են թուրքերեն գրված առաջին վեպ"], "Հովսեփ Վարդանյանն այն գրել է թուրքերեն՝ հայերեն տառերով։"],
      ru: ["Чем особенен роман «Акаби хикяеси» (1851)?", ["Это была первая армянская газета", "Его написала Србуи Дюсаб", "Его запретил патриарх", "Его часто называют первым романом на турецком языке"], "Овсеп Вартанян написал его по-турецки армянскими буквами."],
    }),
  ],
  "eastern-armenians-russian-policy": [
    "timeline set=rusp",
    closer(
      `**Mr Five Per Cent.** **Calouste Gulbenkian** was born in Constantinople in 1869 and became one of the richest men in the world by helping to bring together the companies that developed the oil of Iraq. For his work he kept **5 per cent** of the shares, which earned him the nickname "Mr Five Per Cent". He spent much of his fortune on art, including paintings bought from the Hermitage in 1928–1930, and left it all to the **Gulbenkian Foundation** in Lisbon, which still supports Armenian schools, books and students.

**A pantheon in Tbilisi.** In the 19th century Tiflis was a capital of Armenian culture, and many of its great figures rest there. In the cemetery of the **Khojivank** church, the Armenian Pantheon of Tbilisi, are the graves of the novelist **Raffi**, the playwright **Gabriel Sundukyan**, the writer **Ghazaros Aghayan** and the poet **Hovhannes Tumanyan**. Visitors from Armenia still come to lay flowers there.`,
      `**Պարոն հինգ տոկոս։** **Գալուստ Գյուլբենկյանը** ծնվել է Կոստանդնուպոլսում 1869 թվականին և դարձել աշխարհի ամենահարուստ մարդկանցից մեկը՝ օգնելով միավորել Իրաքի նավթը մշակող ընկերությունները։ Իր աշխատանքի դիմաց նա պահեց բաժնետոմսերի **5 տոկոսը**, ինչի համար ստացավ «Պարոն հինգ տոկոս» մականունը։ Իր հարստության մեծ մասը նա ծախսեց արվեստի վրա, այդ թվում՝ 1928–1930 թվականներին Էրմիտաժից գնված կտավների, և ամբողջը կտակեց Լիսաբոնի **Գյուլբենկյան հիմնադրամին**, որը մինչ օրս աջակցում է հայկական դպրոցներին, գրքերին և ուսանողներին։

**Պանթեոն՝ Թբիլիսիում։** 19-րդ դարում Թիֆլիսը հայ մշակույթի մայրաքաղաքներից էր, և նրա մեծ դեմքերից շատերը հանգչում են այնտեղ։ **Խոջիվանքի** եկեղեցու գերեզմանատանը՝ Թբիլիսիի հայկական պանթեոնում, են վիպասան **Րաֆֆու**, դրամատուրգ **Գաբրիել Սունդուկյանի**, գրող **Ղազարոս Աղայանի** և բանաստեղծ **Հովհաննես Թումանյանի** շիրիմները։ Հայաստանից այցելուները մինչ օրս գալիս են այնտեղ ծաղիկներ դնելու։`,
      `**Господин Пять Процентов.** **Галуст Гюльбенкян** родился в Константинополе в 1869 году и стал одним из богатейших людей мира, помогая объединить компании, разрабатывавшие нефть Ирака. За свою работу он сохранил за собой **5 процентов** акций, за что получил прозвище «Господин Пять Процентов». Большую часть состояния он тратил на искусство, в том числе на картины, купленные у Эрмитажа в 1928–1930 годах, и всё завещал **Фонду Гюльбенкяна** в Лиссабоне, который до сих пор поддерживает армянские школы, книги и студентов.

**Пантеон в Тбилиси.** В XIX веке Тифлис был одной из столиц армянской культуры, и многие её великие деятели покоятся там. На кладбище церкви **Ходживанк**, в Армянском пантеоне Тбилиси, находятся могилы романиста **Раффи**, драматурга **Габриела Сундукяна**, писателя **Газароса Агаяна** и поэта **Ованеса Туманяна**. Гости из Армении до сих пор приходят туда с цветами.`,
    ),
    ask(2, {
      en: ["Why was Calouste Gulbenkian called \"Mr Five Per Cent\"?", ["He gave 5% of his money to the Church", "He kept 5% of the shares of the Iraqi oil companies", "He charged 5% for loans", "He owned 5% of Tiflis"], "He kept 5 per cent of the shares for bringing the oil companies of Iraq together."],
      hy: ["Ինչո՞ւ էին Գալուստ Գյուլբենկյանին անվանում «Պարոն հինգ տոկոս»։", ["Իր փողի 5%-ը տալիս էր եկեղեցուն", "Պահել էր իրաքյան նավթային ընկերությունների բաժնետոմսերի 5%-ը", "Վարկերի համար 5% էր վերցնում", "Թիֆլիսի 5%-ը նրան էր պատկանում"], "Իրաքի նավթային ընկերությունները միավորելու համար նա պահել էր բաժնետոմսերի 5 տոկոսը։"],
      ru: ["Почему Галуста Гюльбенкяна называли «Господин Пять Процентов»?", ["Он отдавал 5% денег церкви", "Он сохранил 5% акций иракских нефтяных компаний", "Он брал 5% за займы", "Ему принадлежало 5% Тифлиса"], "За объединение нефтяных компаний Ирака он сохранил за собой 5 процентов акций."],
    }),
  ],
  "armenian-question-diplomacy": [
    "timeline set=diplomacy",
    closer(
      `**"The Great Assassin."** In Britain the massacres of 1894–1896 caused public anger. On 24 September 1896 the former prime minister **William Gladstone**, then 86 years old, gave his last great public speech in Liverpool. He called Sultan Abdul Hamid II "the Great Assassin" and demanded that Britain act, even alone. The government did not follow him, which shows the gap between public feeling and the cold calculations of the Great Powers.

**Inspectors who came too late.** Under the agreement of February 1914 two European **inspectors-general** were chosen for Western Armenia: the Dutch official **Louis Westenenk** and the Norwegian officer **Nicolai Hoff**. Hoff reached **Van** in the summer of 1914, but within weeks the First World War began, the Ottoman government cancelled the reforms, and he was sent away. Westenenk never even reached his post.`,
      `**«Մեծ մարդասպանը»։** Բրիտանիայում 1894–1896 թվականների ջարդերը հասարակական զայրույթ առաջացրին։ 1896 թվականի սեպտեմբերի 24-ին նախկին վարչապետ **Ուիլյամ Գլադստոնը**, որն այդ ժամանակ 86 տարեկան էր, Լիվերպուլում ունեցավ իր վերջին մեծ հրապարակային ելույթը։ Նա Աբդուլ Համիդ II սուլթանին անվանեց «Մեծ մարդասպան» և պահանջեց, որ Բրիտանիան գործի, թեկուզ միայնակ։ Կառավարությունը չհետևեց նրան, ինչը ցույց է տալիս հասարակական զգացմունքների և մեծ տերությունների սառը հաշվարկների միջև եղած անդունդը։

**Ուշացած տեսուչներ։** 1914 թվականի փետրվարի համաձայնագրով Արևմտյան Հայաստանի համար ընտրվեցին երկու եվրոպացի **գլխավոր տեսուչ**՝ հոլանդացի պաշտոնյա **Լուի Վեստենենկը** և նորվեգացի սպա **Նիկոլայ Հոֆը**։ Հոֆը **Վան** հասավ 1914 թվականի ամռանը, բայց մի քանի շաբաթ անց սկսվեց Առաջին համաշխարհային պատերազմը, օսմանյան կառավարությունը չեղարկեց բարենորոգումները, և նրան հեռացրին։ Վեստենենկն այդպես էլ չհասավ իր պաշտոնատեղին։`,
      `**«Великий убийца».** В Британии резня 1894–1896 годов вызвала общественный гнев. 24 сентября 1896 года бывший премьер-министр **Уильям Гладстон**, которому тогда было 86 лет, произнёс в Ливерпуле свою последнюю большую публичную речь. Он назвал султана Абдул-Хамида II «Великим убийцей» и потребовал, чтобы Британия действовала, пусть даже одна. Правительство за ним не пошло, что показывает пропасть между общественными чувствами и холодным расчётом великих держав.

**Инспекторы, опоздавшие навсегда.** По соглашению февраля 1914 года для Западной Армении выбрали двух европейских **генеральных инспекторов**: голландского чиновника **Луи Вестенека** и норвежского офицера **Николая Хоффа**. Хофф добрался до **Вана** летом 1914 года, но через несколько недель началась Первая мировая война, османское правительство отменило реформы, и его выслали. Вестенек так и не доехал до своего поста.`,
    ),
    ask(3, {
      en: ["What happened to the inspectors-general chosen in 1914?", ["They carried out the reforms for ten years", "They became Ottoman ministers", "The war began and the reforms were cancelled within weeks", "They founded a new party"], "Hoff reached Van in summer 1914 but was sent away when the war began; Westenenk never arrived."],
      hy: ["Ի՞նչ եղավ 1914 թվականին ընտրված գլխավոր տեսուչների հետ։", ["Նրանք տասը տարի իրականացրին բարենորոգումները", "Նրանք դարձան օսմանյան նախարարներ", "Սկսվեց պատերազմը, և մի քանի շաբաթում բարենորոգումները չեղարկվեցին", "Նրանք հիմնեցին նոր կուսակցություն"], "Հոֆը Վան հասավ 1914 թվականի ամռանը, բայց պատերազմի սկզբին նրան հեռացրին, իսկ Վեստենենկն այդպես էլ չհասավ։"],
      ru: ["Что случилось с генеральными инспекторами, выбранными в 1914 году?", ["Они десять лет проводили реформы", "Они стали османскими министрами", "Началась война, и через несколько недель реформы отменили", "Они основали новую партию"], "Хофф доехал до Вана летом 1914 года, но с началом войны его выслали; Вестенек так и не приехал."],
    }),
  ],
  "genocide-analysis": [
    "timeline set=evidence",
    closer(
      `**Photographs hidden in a belt.** **Armin T. Wegner** served as a German army medic in the Ottoman Empire in 1915–1916. Against orders he photographed the camps of Armenian deportees and hid the negatives in his belt to get them out of the country. In 1933 he wrote an open letter to Hitler protesting against the persecution of the Jews and was sent to concentration camps. Israel later honoured him as one of the **Righteous Among the Nations**, and in 1996 part of his ashes was laid at **Tsitsernakaberd**.

**A passport for people without a country.** Many survivors had no state and no documents. The Norwegian polar explorer **Fridtjof Nansen**, who worked for the League of Nations, created a special travel document, the **Nansen passport**, which from 1924 was also given to Armenian refugees. It let hundreds of thousands of stateless people cross borders and find work. Nansen received the Nobel Peace Prize in 1922 and also proposed a plan to settle refugees in Armenia by irrigating new land, though the money for it was never found.`,
      `**Գոտում թաքցված լուսանկարներ։** **Արմին Թ. Վեգները** 1915–1916 թվականներին Օսմանյան կայսրությունում ծառայում էր որպես գերմանական բանակի բուժակ։ Հրամանին հակառակ նա լուսանկարում էր հայ տարագիրների ճամբարները և նեգատիվները թաքցնում էր իր գոտում, որպեսզի դուրս բերի երկրից։ 1933 թվականին նա բաց նամակ գրեց Հիտլերին՝ բողոքելով հրեաների հալածանքների դեմ, և ուղարկվեց համակենտրոնացման ճամբարներ։ Հետագայում Իսրայելը նրան պատվեց որպես **Ազգերի արդար**, իսկ 1996 թվականին նրա աճյունի մի մասն ամփոփվեց **Ծիծեռնակաբերդում**։

**Անձնագիր՝ առանց երկրի մարդկանց համար։** Փրկվածներից շատերը չունեին ո՛չ պետություն, ո՛չ փաստաթղթեր։ Նորվեգացի բևեռախույզ **Ֆրիտյոֆ Նանսենը**, որն աշխատում էր Ազգերի լիգայում, ստեղծեց ճամփորդական հատուկ փաստաթուղթ՝ **նանսենյան անձնագիր**, որը 1924 թվականից տրվում էր նաև հայ փախստականներին։ Այն թույլ տվեց հարյուր հազարավոր քաղաքացիություն չունեցող մարդկանց անցնել սահմաններ և աշխատանք գտնել։ Նանսենը 1922 թվականին ստացավ Նոբելյան խաղաղության մրցանակ և առաջարկեց նաև նոր հողեր ոռոգելով փախստականներին Հայաստանում բնակեցնելու ծրագիր, բայց դրա համար գումար այդպես էլ չգտնվեց։`,
      `**Фотографии, спрятанные в поясе.** **Армин Т. Вегнер** в 1915–1916 годах служил санитаром германской армии в Османской империи. Вопреки приказам он фотографировал лагеря армянских депортированных и прятал негативы в поясе, чтобы вывезти их из страны. В 1933 году он написал Гитлеру открытое письмо против преследования евреев и был отправлен в концлагеря. Позже Израиль удостоил его звания **Праведника народов мира**, а в 1996 году часть его праха была захоронена в **Цицернакаберде**.

**Паспорт для людей без страны.** У многих выживших не было ни государства, ни документов. Норвежский полярный исследователь **Фритьоф Нансен**, работавший в Лиге Наций, создал особый проездной документ — **нансеновский паспорт**, который с 1924 года выдавали и армянским беженцам. Он позволил сотням тысяч людей без гражданства пересекать границы и находить работу. Нансен получил Нобелевскую премию мира в 1922 году и предложил также план поселить беженцев в Армении, оросив новые земли, но денег на это так и не нашли.`,
    ),
    ask(1, {
      en: ["How did Armin Wegner get his photographs of the deportations out of the Ottoman Empire?", ["He hid the negatives in his belt", "He sent them by telegraph", "He gave them to Talaat", "He printed them in Constantinople"], "He photographed the camps against orders and smuggled the negatives in his belt."],
      hy: ["Ինչպե՞ս Արմին Վեգները տարագրությունների լուսանկարները դուրս բերեց Օսմանյան կայսրությունից։", ["Նեգատիվները թաքցրեց իր գոտում", "Ուղարկեց հեռագրով", "Տվեց Թալեաթին", "Տպեց Կոստանդնուպոլսում"], "Նա հրամանին հակառակ լուսանկարում էր ճամբարները և նեգատիվները գաղտնի դուրս բերեց գոտու մեջ։"],
      ru: ["Как Армин Вегнер вывез фотографии депортаций из Османской империи?", ["Спрятал негативы в поясе", "Отправил по телеграфу", "Отдал их Талаату", "Напечатал их в Константинополе"], "Он фотографировал лагеря вопреки приказам и тайно вывез негативы в поясе."],
    }),
  ],
  "caucasus-front-1918": [
    "timeline set=front1918",
    closer(
      `**A scholar at the front.** Not only soldiers fought at Sardarapat. Among those who came to the front was the archimandrite **Garegin Hovsepian**, a learned churchman and scholar of Armenian art and manuscripts, who stood with the fighters and encouraged them in the decisive days of May 1918. Later he became **Catholicos of the Great House of Cilicia** (1943–1952) and is remembered both as a scholar and as a defender of his people.

**The Armenian Legion.** Armenians also fought on other fronts. In 1916 France formed the **Légion d'Orient**, later called the **Armenian Legion**, and many of its volunteers were the men of **Musa Dagh** who had been rescued by French ships. On 19 September 1918 the legion fought at **Arara** in Palestine, and the British commander, General Allenby, praised its courage.`,
      `**Գիտնական՝ ռազմաճակատում։** Սարդարապատում կռվում էին ոչ միայն զինվորները։ Ռազմաճակատ եկածների թվում էր **Գարեգին Հովսեփյան** վարդապետը՝ հայ արվեստի և ձեռագրերի գիտակ, որը 1918 թվականի մայիսի վճռական օրերին կանգնած էր մարտիկների կողքին և ոգևորում էր նրանց։ Հետագայում նա դարձավ **Մեծի Տանն Կիլիկիո կաթողիկոս** (1943–1952) և հիշվում է և՛ որպես գիտնական, և՛ որպես իր ժողովրդի պաշտպան։

**Հայկական լեգեոնը։** Հայերը կռվում էին նաև այլ ճակատներում։ 1916 թվականին Ֆրանսիան ստեղծեց **Արևելյան լեգեոնը**, որը հետագայում կոչվեց **Հայկական լեգեոն**, և նրա կամավորներից շատերը **Մուսա լեռան** տղամարդիկ էին, որոնց փրկել էին ֆրանսիական նավերը։ 1918 թվականի սեպտեմբերի 19-ին լեգեոնը կռվեց Պաղեստինի **Արարա** կոչվող վայրում, և բրիտանական հրամանատար գեներալ Ալենբին գովեց նրա քաջությունը։`,
      `**Учёный на фронте.** Под Сардарапатом сражались не только солдаты. Среди пришедших на фронт был архимандрит **Гарегин Овсепян** — учёный церковник, знаток армянского искусства и рукописей, который в решающие дни мая 1918 года стоял рядом с бойцами и воодушевлял их. Позже он стал **католикосом Великого Дома Киликийского** (1943–1952) и остался в памяти и как учёный, и как защитник своего народа.

**Армянский легион.** Армяне сражались и на других фронтах. В 1916 году Франция создала **Восточный легион**, позже названный **Армянским легионом**, и многие его добровольцы были мужчинами с **Муса-дага**, спасёнными французскими кораблями. 19 сентября 1918 года легион сражался при **Араре** в Палестине, и британский командующий генерал Алленби похвалил его храбрость.`,
    ),
    ask(4, {
      en: ["Where did many volunteers of the Armenian Legion come from?", ["From the Russian army", "From Nor Nakhichevan", "From Singapore", "From Musa Dagh, rescued by French ships"], "Many Musa Dagh men joined the legion, which fought at Arara in Palestine in 1918."],
      hy: ["Որտեղի՞ց էին Հայկական լեգեոնի կամավորներից շատերը։", ["Ռուսական բանակից", "Նոր Նախիջևանից", "Սինգապուրից", "Մուսա լեռից, որոնց փրկել էին ֆրանսիական նավերը"], "Մուսա լեռան շատ տղամարդիկ միացան լեգեոնին, որը 1918 թվականին կռվեց Պաղեստինի Արարայում։"],
      ru: ["Откуда были многие добровольцы Армянского легиона?", ["Из русской армии", "Из Нор-Нахичевани", "Из Сингапура", "С Муса-дага, спасённые французскими кораблями"], "Многие мужчины Муса-дага вступили в легион, который в 1918 году сражался при Араре в Палестине."],
    }),
  ],
};
