import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade9: VisualMap[number] = {
  "eastern-armenia-19th-century": [
    "timeline set=east19",
    closer(
      `**A cathedral paid for by oil.** **Alexander Mantashev** (Mantashyants) was one of the richest oilmen of Baku at the end of the 19th century. He spent much of his fortune on Armenian schools, students and churches. In **Paris** he paid for the Armenian **Cathedral of St John the Baptist** on rue Jean-Goujon, which was consecrated in 1904. More than a hundred years later it is still the main church of the Armenians of France.

**An embassy in a school.** The **Lazarev Institute** was founded in Moscow in 1815 by the Armenian Lazarev family. It taught Armenian and other Oriental languages and trained translators, scholars and writers. Its building in **Armyansky Lane** (Armenian Lane) in the centre of Moscow still stands, and today it houses the **Embassy of Armenia** in Russia. So the old school still serves Armenians, in a new way.`,
      `**Նավթով կառուցված տաճար։** **Ալեքսանդր Մանթաշյանցը** 19-րդ դարի վերջին Բաքվի ամենահարուստ նավթարդյունաբերողներից էր։ Նա իր հարստության մեծ մասը ծախսեց հայկական դպրոցների, ուսանողների և եկեղեցիների վրա։ **Փարիզում** նրա միջոցներով կառուցվեց Ժան Գուժոն փողոցի հայկական **Սուրբ Հովհաննես Մկրտիչ մայր տաճարը**, որն օծվեց 1904 թվականին։ Ավելի քան հարյուր տարի անց այն դեռ Ֆրանսիայի հայերի գլխավոր եկեղեցին է։

**Դեսպանատուն՝ դպրոցում։** **Լազարյան ճեմարանը** Մոսկվայում 1815 թվականին հիմնեց հայ Լազարյանների ընտանիքը։ Այնտեղ դասավանդում էին հայերեն և արևելյան այլ լեզուներ, պատրաստում էին թարգմանիչներ, գիտնականներ և գրողներ։ Նրա շենքը Մոսկվայի կենտրոնում՝ **Հայկական նրբանցքում**, մինչ օրս կանգուն է, և այսօր այնտեղ է գտնվում Ռուսաստանում **Հայաստանի դեսպանատունը**։ Այսպես հին դպրոցը դեռ ծառայում է հայերին, բայց նոր ձևով։`,
      `**Собор, построенный на нефти.** **Александр Манташев** (Манташянц) в конце XIX века был одним из богатейших нефтепромышленников Баку. Большую часть состояния он тратил на армянские школы, студентов и церкви. В **Париже** на его средства построили армянский **собор Святого Иоанна Крестителя** на улице Жан-Гужон, освящённый в 1904 году. Спустя больше ста лет это по-прежнему главная церковь армян Франции.

**Посольство в школе.** **Лазаревский институт** основала в Москве в 1815 году армянская семья Лазаревых. Там преподавали армянский и другие восточные языки, готовили переводчиков, учёных и писателей. Его здание в **Армянском переулке** в центре Москвы стоит до сих пор, и сегодня в нём находится **посольство Армении** в России. Так старая школа всё ещё служит армянам, только по-новому.`,
    ),
    ask(3, {
      en: ["Which building in Moscow now houses the Embassy of Armenia?", ["The Bolshoi Theatre", "The Kremlin", "The old Lazarev Institute", "Moscow University"], "The Lazarev Institute, founded in 1815, stands in Armyansky Lane."],
      hy: ["Մոսկվայի ո՞ր շենքում է այժմ գտնվում Հայաստանի դեսպանատունը։", ["Մեծ թատրոնում", "Կրեմլում", "Նախկին Լազարյան ճեմարանում", "Մոսկվայի համալսարանում"], "1815 թվականին հիմնված Լազարյան ճեմարանը գտնվում է Հայկական նրբանցքում։"],
      ru: ["В каком здании Москвы сейчас находится посольство Армении?", ["В Большом театре", "В Кремле", "В бывшем Лазаревском институте", "В Московском университете"], "Лазаревский институт, основанный в 1815 году, стоит в Армянском переулке."],
    }),
  ],
  "armenian-question": [
    "timeline set=question",
    closer(
      `**A printing press in a monastery.** Long before Berlin, **Mkrtich Khrimian** wanted ordinary villagers to know their history and their rights. He began a journal called **"The Eagle of Vaspurakan"** in Constantinople, and in 1857 he moved his printing press to the **Varagavank** monastery near Van. It was one of the first printing presses in Western Armenia itself. Khrimian also opened a school at the monastery, and people began to call him **Hayrik**, "little father".

**A plan signed on the last morning.** General **Mikhail Loris-Melikov**, who commanded the Russian forces that took Kars in 1877, later became Russia's **Minister of the Interior**. He prepared a plan to let elected representatives take part in preparing laws, which people called "Loris-Melikov's constitution". **Alexander II** approved it on the morning of **1 March 1881**, and that same afternoon the tsar was killed by a bomb in St Petersburg. The new tsar dropped the plan, and Loris-Melikov resigned.`,
      `**Տպարան՝ վանքում։** Բեռլինից շատ առաջ **Մկրտիչ Խրիմյանն** ուզում էր, որ հասարակ գյուղացիներն իմանան իրենց պատմությունն ու իրավունքները։ Նա Կոստանդնուպոլսում սկսեց հրատարակել **«Արծվի Վասպուրականի»** ամսագիրը, իսկ 1857 թվականին իր տպարանը տեղափոխեց Վանի մոտ գտնվող **Վարագավանք**։ Դա բուն Արևմտյան Հայաստանի առաջին տպարաններից էր։ Խրիմյանը վանքում բացեց նաև դպրոց, և ժողովուրդը սկսեց նրան անվանել **Հայրիկ**։

**Վերջին առավոտը ստորագրված ծրագիր։** Գեներալ **Միքայել Լորիս-Մելիքովը**, որը հրամանատարում էր 1877 թվականին Կարսը գրաված ռուսական զորքերին, հետագայում դարձավ Ռուսաստանի **ներքին գործերի նախարար**։ Նա ծրագիր պատրաստեց, որով ընտրված ներկայացուցիչները պետք է մասնակցեին օրենքների նախապատրաստմանը։ Մարդիկ այն անվանեցին «Լորիս-Մելիքովի սահմանադրություն»։ **Ալեքսանդր II-ը** հավանություն տվեց դրան **1881 թվականի մարտի 1-ի** առավոտյան, իսկ նույն օրը կեսօրից հետո ցարը սպանվեց ռումբից Պետերբուրգում։ Նոր ցարը հրաժարվեց ծրագրից, և Լորիս-Մելիքովը հրաժարական տվեց։`,
      `**Типография в монастыре.** Задолго до Берлина **Мкртич Хримян** хотел, чтобы простые крестьяне знали свою историю и свои права. Он начал издавать в Константинополе журнал **«Орёл Васпуракана»**, а в 1857 году перевёз свою типографию в монастырь **Варагаванк** под Ваном. Это была одна из первых типографий в самой Западной Армении. Хримян открыл при монастыре и школу, и народ стал называть его **Айрик** — «отец».

**План, подписанный в последнее утро.** Генерал **Михаил Лорис-Меликов**, командовавший русскими войсками, которые в 1877 году взяли Карс, позже стал **министром внутренних дел** России. Он подготовил план, по которому выборные представители участвовали бы в подготовке законов; его называли «конституцией Лорис-Меликова». **Александр II** одобрил его утром **1 марта 1881 года**, а днём того же дня царь был убит бомбой в Петербурге. Новый царь отказался от плана, и Лорис-Меликов ушёл в отставку.`,
    ),
    ask(2, {
      en: ["What happened on the day Alexander II approved Loris-Melikov's plan?", ["Kars was taken", "The tsar was assassinated", "The Congress of Berlin opened", "The Hnchak party was founded"], "He approved it on the morning of 1 March 1881 and was killed by a bomb that afternoon."],
      hy: ["Ի՞նչ տեղի ունեցավ այն օրը, երբ Ալեքսանդր II-ը հավանություն տվեց Լորիս-Մելիքովի ծրագրին։", ["Գրավվեց Կարսը", "Ցարը սպանվեց", "Բացվեց Բեռլինի վեհաժողովը", "Հիմնվեց Հնչակյան կուսակցությունը"], "Նա հավանություն տվեց 1881 թվականի մարտի 1-ի առավոտյան, իսկ կեսօրից հետո սպանվեց ռումբից։"],
      ru: ["Что произошло в день, когда Александр II одобрил план Лорис-Меликова?", ["Был взят Карс", "Царь был убит", "Открылся Берлинский конгресс", "Была основана партия Гнчак"], "Он одобрил план утром 1 марта 1881 года, а днём был убит бомбой."],
    }),
  ],
  "armenian-genocide": [
    "timeline set=genocide",
    closer(
      `**The mountain in a novel.** The defence of **Musa Dagh** in 1915 became known all over the world through a book. In 1933 the Austrian writer **Franz Werfel** published the novel **"The Forty Days of Musa Dagh"**, based on what survivors told. The book was banned in Nazi Germany, but it was translated into many languages. The real people of Musa Dagh, rescued by French ships and taken to Port Said in Egypt, later settled in **Anjar** in Lebanon in 1939, where their descendants still live.

**A rug for the White House.** The American charity **Near East Relief** collected money across the United States and cared for more than 130,000 orphans of the genocide. In 1925 orphan girls in **Ghazir**, Lebanon, wove a carpet with more than four million knots and sent it to President **Calvin Coolidge** as a thank-you. The "Armenian Orphan Rug" was kept by the White House and was shown to the public in Washington in 2014.`,
      `**Լեռը՝ վեպում։** 1915 թվականի **Մուսա լեռան** ինքնապաշտպանությունն ամբողջ աշխարհում հայտնի դարձավ մի գրքի շնորհիվ։ 1933 թվականին ավստրիացի գրող **Ֆրանց Վերֆելը** հրատարակեց **«Մուսա լեռան քառասուն օրը»** վեպը՝ հիմնված վերապրածների պատմածների վրա։ Գիրքն արգելվեց նացիստական Գերմանիայում, բայց թարգմանվեց բազմաթիվ լեզուներով։ Մուսա լեռան իրական բնակիչները, որոնց փրկեցին ֆրանսիական նավերը և տարան Եգիպտոսի Պորտ Սաիդ, հետագայում՝ 1939 թվականին, հաստատվեցին Լիբանանի **Այնճարում**, որտեղ մինչ օրս ապրում են նրանց ժառանգները։

**Գորգ՝ Սպիտակ տան համար։** Ամերիկյան **«Նիր Իսթ Ռիլիֆ»** (Մերձավոր Արևելքի նպաստ) բարեգործական կազմակերպությունը գումար էր հավաքում ամբողջ Միացյալ Նահանգներում և խնամում էր ցեղասպանության ավելի քան 130 000 որբի։ 1925 թվականին Լիբանանի **Ղազիրում** որբ աղջիկներն ավելի քան չորս միլիոն հանգույցով գորգ գործեցին և որպես շնորհակալություն ուղարկեցին նախագահ **Քալվին Քուլիջին**։ «Հայ որբերի գորգը» պահվում էր Սպիտակ տանը և 2014 թվականին ցուցադրվեց հանրությանը Վաշինգտոնում։`,
      `**Гора в романе.** Оборона **Муса-дага** в 1915 году стала известна всему миру благодаря книге. В 1933 году австрийский писатель **Франц Верфель** издал роман **«Сорок дней Муса-дага»**, основанный на рассказах выживших. В нацистской Германии книгу запретили, но её перевели на многие языки. Настоящие жители Муса-дага, спасённые французскими кораблями и доставленные в египетский Порт-Саид, позже, в 1939 году, поселились в **Анджаре** в Ливане, где до сих пор живут их потомки.

**Ковёр для Белого дома.** Американская благотворительная организация **«Ближневосточная помощь»** (Near East Relief) собирала деньги по всем Соединённым Штатам и заботилась о более чем 130 000 сирот геноцида. В 1925 году девочки-сироты в ливанском **Газире** соткали ковёр больше чем из четырёх миллионов узелков и в знак благодарности отправили его президенту **Калвину Кулиджу**. «Ковёр армянских сирот» хранился в Белом доме и в 2014 году был показан публике в Вашингтоне.`,
    ),
    ask(4, {
      en: ["Who wove the carpet sent to President Coolidge in 1925?", ["Franz Werfel", "French sailors", "Weavers of the Ottoman court", "Armenian orphan girls in Lebanon"], "Orphans cared for by Near East Relief in Ghazir wove it as a thank-you."],
      hy: ["Ո՞վ գործեց 1925 թվականին նախագահ Քուլիջին ուղարկված գորգը։", ["Ֆրանց Վերֆելը", "Ֆրանսիացի նավաստիները", "Օսմանյան արքունիքի գործվածքագործները", "Հայ որբ աղջիկները Լիբանանում"], "Ղազիրում «Նիր Իսթ Ռիլիֆի» խնամքի տակ գտնվող որբերն այն գործեցին որպես շնորհակալություն։"],
      ru: ["Кто соткал ковёр, отправленный президенту Кулиджу в 1925 году?", ["Франц Верфель", "Французские моряки", "Ткачи османского двора", "Армянские девочки-сироты в Ливане"], "Его соткали в знак благодарности сироты, о которых заботилась «Ближневосточная помощь» в Газире."],
    }),
  ],
  "first-republic": [
    "timeline set=rep1918",
    closer(
      `**Three women in parliament.** The First Republic gave women the right to vote and to be elected. In the elections of **1919** three women became members of parliament: **Perchuhi Partizpanyan-Barseghyan**, **Katarine Zalyan-Manukyan** and **Varvara Sahakyan**. At that time women still could not vote in France (until 1944) or in Switzerland (until 1971), so the young, poor and hungry republic was ahead of many rich European countries.

**A diplomat in Japan.** **Diana Apcar** (Abgar) was an Armenian writer who lived in **Yokohama**, Japan. For years she helped refugees of the genocide who reached Japan to travel on to America, and she wrote articles and books about the Armenian tragedy. In 1920 the Republic of Armenia made her its **honorary consul** in Japan. She is considered one of the first women in the world to hold a diplomatic post.`,
      `**Երեք կին՝ խորհրդարանում։** Առաջին հանրապետությունը կանանց տվեց ընտրելու և ընտրվելու իրավունք։ **1919 թվականի** ընտրություններում երեք կին դարձավ խորհրդարանի անդամ՝ **Փերճուհի Պարտիզպանյան-Բարսեղյանը**, **Կատարինե Զալյան-Մանուկյանը** և **Վարվարա Սահակյանը**։ Այն ժամանակ կանայք դեռ չէին կարող քվեարկել Ֆրանսիայում (մինչև 1944 թվականը) և Շվեյցարիայում (մինչև 1971 թվականը), ուստի երիտասարդ, աղքատ և սոված հանրապետությունն առաջ էր անցել եվրոպական շատ հարուստ երկրներից։

**Դիվանագետ՝ Ճապոնիայում։** **Դիանա Աբգարը** հայ գրող էր, որն ապրում էր Ճապոնիայի **Յոկոհամա** քաղաքում։ Տարիներ շարունակ նա օգնում էր Ճապոնիա հասած ցեղասպանության փախստականներին մեկնել Ամերիկա և հոդվածներ ու գրքեր էր գրում հայոց ողբերգության մասին։ 1920 թվականին Հայաստանի Հանրապետությունը նրան նշանակեց Ճապոնիայում իր **պատվավոր հյուպատոս**։ Նա համարվում է աշխարհում դիվանագիտական պաշտոն զբաղեցրած առաջին կանանցից մեկը։`,
      `**Три женщины в парламенте.** Первая республика дала женщинам право избирать и быть избранными. На выборах **1919 года** членами парламента стали три женщины: **Перчуи Партизпанян-Барсегян**, **Катарине Залян-Манукян** и **Варвара Саакян**. Тогда женщины ещё не могли голосовать во Франции (до 1944 года) и в Швейцарии (до 1971 года), так что молодая, бедная и голодная республика опередила многие богатые европейские страны.

**Дипломат в Японии.** **Диана Абгар** (Апкар) — армянская писательница, жившая в японской **Иокогаме**. Годами она помогала добравшимся до Японии беженцам геноцида уехать в Америку и писала статьи и книги об армянской трагедии. В 1920 году Республика Армения назначила её своим **почётным консулом** в Японии. Её считают одной из первых в мире женщин на дипломатическом посту.`,
    ),
    ask(1, {
      en: ["How many women were elected to the parliament of the First Republic in 1919?", ["Three", "None", "Thirty", "One hundred"], "Perchuhi Partizpanyan-Barseghyan, Katarine Zalyan-Manukyan and Varvara Sahakyan."],
      hy: ["Քանի՞ կին ընտրվեց Առաջին հանրապետության խորհրդարանում 1919 թվականին։", ["Երեք", "Ոչ մեկը", "Երեսուն", "Հարյուր"], "Փերճուհի Պարտիզպանյան-Բարսեղյանը, Կատարինե Զալյան-Մանուկյանը և Վարվարա Սահակյանը։"],
      ru: ["Сколько женщин избрали в парламент Первой республики в 1919 году?", ["Трёх", "Ни одной", "Тридцать", "Сто"], "Перчуи Партизпанян-Барсегян, Катарине Залян-Манукян и Варвару Саакян."],
    }),
  ],
  "soviet-armenia": [
    "timeline set=soviet",
    closer(
      `**A city drawn on paper.** When **Alexander Tamanian** drew up the master plan of Yerevan in 1924, it was a small dusty town. He planned a city for about 150,000 people, with a ring of parks around the centre and buildings of coloured **tuff** stone that give Yerevan its pink and orange look. His design of the **Opera House** won the Grand Prix at the World Exhibition in Paris in 1937. Tamanian died in 1936, and today his statue near the Cascade bends over his plan.

**From Stalin to Mother Armenia.** In 1950 a huge statue of **Stalin** was put up on a tall pedestal in Victory Park above Yerevan. After Stalin's crimes were condemned, it was taken down one night in 1962. In 1967 the statue **Mother Armenia** by **Ara Harutyunyan**, a woman holding a sword, took its place. Inside the pedestal there is now a **museum** of the war.`,
      `**Թղթի վրա գծված քաղաք։** Երբ **Ալեքսանդր Թամանյանը** 1924 թվականին կազմեց Երևանի գլխավոր հատակագիծը, այն փոքր, փոշոտ քաղաք էր։ Նա նախագծեց մոտ 150 000 բնակչի համար քաղաք՝ կենտրոնի շուրջը զբոսայգիների օղակով և գունավոր **տուֆից** շենքերով, որոնք Երևանին տալիս են վարդագույն ու նարնջագույն տեսք։ Նրա **Օպերային թատրոնի** նախագիծը 1937 թվականին Փարիզի համաշխարհային ցուցահանդեսում արժանացավ Գրան պրիի։ Թամանյանը մահացավ 1936 թվականին, և այսօր Կասկադի մոտ նրա արձանը կռացել է իր հատակագծի վրա։

**Ստալինից մինչև Մայր Հայաստան։** 1950 թվականին Երևանի վերևում՝ Հաղթանակի այգում, բարձր պատվանդանի վրա դրվեց **Ստալինի** հսկայական արձանը։ Երբ Ստալինի հանցագործությունները դատապարտվեցին, 1962 թվականին այն մի գիշեր հանեցին։ 1967 թվականին նրա տեղը զբաղեցրեց **Արա Հարությունյանի** **«Մայր Հայաստան»** արձանը՝ սուրը ձեռքին կին։ Պատվանդանի ներսում այժմ պատերազմի **թանգարան** է։`,
      `**Город, нарисованный на бумаге.** Когда **Александр Таманян** в 1924 году составил генеральный план Еревана, это был маленький пыльный город. Он спроектировал город примерно на 150 000 жителей, с кольцом парков вокруг центра и зданиями из цветного **туфа**, которые придают Еревану розовый и оранжевый вид. Его проект **Оперного театра** получил Гран-при на Всемирной выставке в Париже в 1937 году. Таманян умер в 1936 году, и сегодня его статуя у Каскада склонилась над своим планом.

**От Сталина к Матери Армении.** В 1950 году в парке Победы над Ереваном на высоком постаменте поставили огромную статую **Сталина**. После осуждения сталинских преступлений её однажды ночью в 1962 году сняли. В 1967 году её место заняла статуя **«Мать Армения»** работы **Ары Арутюняна** — женщина с мечом. Внутри постамента теперь **музей** войны.`,
    ),
    ask(3, {
      en: ["What stands today on the pedestal that once carried Stalin's statue in Yerevan?", ["Lenin", "David of Sasun", "Mother Armenia", "Vardan Mamikonian"], "Ara Harutyunyan's Mother Armenia took its place in 1967."],
      hy: ["Ի՞նչ է կանգնած այսօր Երևանում այն պատվանդանին, որի վրա ժամանակին Ստալինի արձանն էր։", ["Լենինը", "Սասունցի Դավիթը", "Մայր Հայաստանը", "Վարդան Մամիկոնյանը"], "1967 թվականին նրա տեղը զբաղեցրեց Արա Հարությունյանի «Մայր Հայաստանը»։"],
      ru: ["Что стоит сегодня в Ереване на постаменте, где когда-то была статуя Сталина?", ["Ленин", "Давид Сасунский", "Мать Армения", "Вардан Мамиконян"], "В 1967 году её место заняла «Мать Армения» Ары Арутюняна."],
    }),
  ],
  "culture-19-20-centuries": [
    "timeline set=culture19",
    closer(
      `**A dance written in a hurry.** In 1942, during the war, the Kirov Theatre of Leningrad was evacuated to the city of Perm, where it prepared **Aram Khachaturian**'s ballet **"Gayane"**. Shortly before the premiere the ballet master asked for one more dance for the last act. By the composer's own account, he wrote the **"Sabre Dance"** in a few hours. It became one of the most played pieces of the 20th century, heard in concerts, cartoons, circuses and on ice rinks, and Khachaturian sometimes joked that it overshadowed the rest of his music.

**A painting from a photograph.** **Arshile Gorky** was born Vosdanig Adoian in the village of Khorgom near Lake Van. He survived the genocide, but his mother died of hunger in Yerevan in 1919. In America he took a new name and became one of the forerunners of Abstract Expressionism. For about ten years he worked on **"The Artist and His Mother"**, painted from a photograph taken in Van in 1912. Today it hangs in the Whitney Museum in New York.`,
      `**Շտապ գրված պար։** 1942 թվականին՝ պատերազմի տարիներին, Լենինգրադի Կիրովի անվան թատրոնը տարհանվել էր Պերմ քաղաք, որտեղ պատրաստում էր **Արամ Խաչատրյանի** **«Գայանե»** բալետը։ Պրեմիերայից քիչ առաջ բալետմայստերը խնդրեց ևս մեկ պար վերջին գործողության համար։ Կոմպոզիտորի խոսքով՝ նա **«Սուսերով պարը»** գրեց մի քանի ժամում։ Այն դարձավ 20-րդ դարի ամենաշատ կատարվող ստեղծագործություններից մեկը, հնչում է համերգներում, մուլտֆիլմերում, կրկեսում և սառցադաշտերում, և Խաչատրյանն երբեմն կատակում էր, որ այն ստվերում է իր մնացած երաժշտությունը։

**Նկար՝ լուսանկարից։** **Արշիլ Գորկին** ծնվել է Վանա լճի մոտ գտնվող Խորգոմ գյուղում՝ Ոստանիկ Ադոյան անունով։ Նա վերապրեց ցեղասպանությունը, բայց նրա մայրը մահացավ սովից Երևանում 1919 թվականին։ Ամերիկայում նա նոր անուն վերցրեց և դարձավ աբստրակտ էքսպրեսիոնիզմի նախակարապետներից մեկը։ Մոտ տասը տարի նա աշխատեց **«Նկարիչը և իր մայրը»** կտավի վրա, որը նկարված է 1912 թվականին Վանում արված լուսանկարից։ Այսօր այն գտնվում է Նյու Յորքի Ուիթնի թանգարանում։`,
      `**Танец, написанный в спешке.** В 1942 году, во время войны, ленинградский Кировский театр был эвакуирован в Пермь, где готовил балет **Арама Хачатуряна** **«Гаянэ»**. Незадолго до премьеры балетмейстер попросил ещё один танец для последнего акта. По словам самого композитора, **«Танец с саблями»** он написал за несколько часов. Он стал одним из самых исполняемых произведений XX века: звучит в концертах, мультфильмах, цирке и на катках, и Хачатурян иногда шутил, что он заслонил всю остальную его музыку.

**Картина по фотографии.** **Аршил Горки** родился в селе Хорком у озера Ван под именем Востаник Адоян. Он пережил геноцид, но его мать умерла от голода в Ереване в 1919 году. В Америке он взял новое имя и стал одним из предшественников абстрактного экспрессионизма. Около десяти лет он работал над картиной **«Художник и его мать»**, написанной по фотографии, сделанной в Ване в 1912 году. Сегодня она висит в музее Уитни в Нью-Йорке.`,
    ),
    ask(2, {
      en: ["What did Arshile Gorky paint \"The Artist and His Mother\" from?", ["A sketch by Saryan", "A photograph taken in Van in 1912", "A dream he had in Paris", "A statue by Kochar"], "He worked for about ten years from an old family photograph."],
      hy: ["Ինչի՞ց է Արշիլ Գորկին նկարել «Նկարիչը և իր մայրը» կտավը։", ["Սարյանի էսքիզից", "1912 թվականին Վանում արված լուսանկարից", "Փարիզում տեսած երազից", "Քոչարի արձանից"], "Նա մոտ տասը տարի աշխատեց ընտանեկան հին լուսանկարի հիման վրա։"],
      ru: ["По чему Аршил Горки написал картину «Художник и его мать»?", ["По эскизу Сарьяна", "По фотографии, сделанной в Ване в 1912 году", "По сну, увиденному в Париже", "По статуе Кочара"], "Он около десяти лет работал по старой семейной фотографии."],
    }),
  ],
  "independence-1991": [
    "timeline set=independ",
    closer(
      `**A new money.** On **22 November 1993** Armenia introduced its own currency, the **dram**, in place of the rouble. One dram was worth **200 roubles**. The word is old: in Armenian "dram" has long meant money, and it is related to the Greek *drachma*. A dram is divided into 100 luma, though luma coins are no longer used. Having its own money was one more sign that the country was really independent.

**A song for Armenia.** After the Spitak earthquake the French singer **Charles Aznavour**, the son of Armenian immigrants, recorded the song **"Pour toi Arménie"** ("For you, Armenia") in 1989 together with about ninety French singers and actors. The money from it went to help the victims. Aznavour also founded the charity "Aznavour for Armenia", and today a square and a monument in **Gyumri** carry his name.`,
      `**Նոր դրամ։** **1993 թվականի նոյեմբերի 22-ին** Հայաստանը ռուբլու փոխարեն շրջանառության մեջ դրեց իր սեփական արժույթը՝ **դրամը**։ Մեկ դրամն արժեր **200 ռուբլի**։ Բառը հին է. հայերենում «դրամ» վաղուց նշանակում է փող, և այն ազգակից է հունական *դրախմային*։ Դրամը բաժանվում է 100 լումայի, թեև լումա մետաղադրամներն այլևս չեն օգտագործվում։ Սեփական փողն ունենալը ևս մեկ նշան էր, որ երկիրն իսկապես անկախ է։

**Երգ՝ Հայաստանի համար։** Սպիտակի երկրաշարժից հետո ֆրանսիացի երգիչ **Շառլ Ազնավուրը**՝ հայ ներգաղթյալների որդին, 1989 թվականին մոտ իննսուն ֆրանսիացի երգիչների և դերասանների հետ ձայնագրեց **«Pour toi Arménie»** («Քեզ համար, Հայաստան») երգը։ Դրանից ստացված գումարն ուղղվեց տուժածներին օգնելուն։ Ազնավուրը հիմնեց նաև «Ազնավուրը՝ Հայաստանին» բարեգործական կազմակերպությունը, և այսօր **Գյումրիում** նրա անունն են կրում հրապարակ և հուշարձան։`,
      `**Новые деньги.** **22 ноября 1993 года** Армения ввела вместо рубля собственную валюту — **драм**. Один драм стоил **200 рублей**. Слово старое: по-армянски «драм» издавна значит «деньги», и оно родственно греческой *драхме*. Драм делится на 100 лум, хотя монеты в лумах уже не используются. Собственные деньги стали ещё одним знаком того, что страна действительно независима.

**Песня для Армении.** После Спитакского землетрясения французский певец **Шарль Азнавур**, сын армянских эмигрантов, в 1989 году записал песню **«Pour toi Arménie»** («Для тебя, Армения») вместе с примерно девяноста французскими певцами и актёрами. Деньги от неё пошли на помощь пострадавшим. Азнавур также основал благотворительную организацию «Азнавур для Армении», и сегодня его имя носят площадь и памятник в **Гюмри**.`,
    ),
    ask(4, {
      en: ["How much was one dram worth when it was introduced in 1993?", ["1 rouble", "10 roubles", "100 dollars", "200 roubles"], "The dram replaced the rouble on 22 November 1993 at 200 roubles for 1 dram."],
      hy: ["Որքա՞ն արժեր մեկ դրամը, երբ այն շրջանառության մեջ դրվեց 1993 թվականին։", ["1 ռուբլի", "10 ռուբլի", "100 դոլար", "200 ռուբլի"], "Դրամը ռուբլուն փոխարինեց 1993 թվականի նոյեմբերի 22-ին՝ 1 դրամը 200 ռուբլու դիմաց։"],
      ru: ["Сколько стоил один драм, когда его ввели в 1993 году?", ["1 рубль", "10 рублей", "100 долларов", "200 рублей"], "Драм заменил рубль 22 ноября 1993 года по курсу 200 рублей за 1 драм."],
    }),
  ],
};
