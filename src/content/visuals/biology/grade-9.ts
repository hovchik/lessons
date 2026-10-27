import type { VisualMap } from "..";
import { ask } from "../ask";
import { closer } from "../more";

export const grade9: VisualMap[number] = {
  "tissues-organs": [
    "bars set=bodycells",
    closer(
      `**A body that keeps renewing itself.** Different tissues are replaced at very different speeds. The cells lining the small intestine live only **3 to 5 days** before they are shed, the outer layer of the skin is renewed in about a month, and red blood cells last about 120 days. Most nerve cells of the brain and the cells of the eye's lens, on the other hand, stay with us for life.

**Cells that outlived their owner.** In 1951 doctors in Baltimore, USA, took a sample of a tumour from a young woman, **Henrietta Lacks**, without asking her. Her cells, named **HeLa**, turned out to divide in a dish again and again without dying. They are still grown in laboratories all over the world and helped to create the polio vaccine. Her story also changed the rules: today patients must give consent before their cells are used in research.`,
      `**Մարմին, որը շարունակ նորանում է։** Տարբեր հյուսվածքներ փոխարինվում են շատ տարբեր արագությամբ։ Բարակ աղիքի պատը պատող բջիջներն ապրում են ընդամենը **3-ից 5 օր**, ապա թափվում են, մաշկի արտաքին շերտը նորանում է մոտ մեկ ամսում, իսկ կարմիր գնդիկներն ապրում են մոտ 120 օր։ Մինչդեռ գլխուղեղի նյարդային բջիջների մեծ մասը և աչքի ոսպնյակի բջիջները մեզ հետ են մնում ամբողջ կյանքում։

**Բջիջներ, որոնք ապրեցին իրենց տիրոջից երկար։** 1951 թվականին ԱՄՆ-ի Բալթիմոր քաղաքում բժիշկներն առանց հարցնելու ուռուցքի նմուշ վերցրին երիտասարդ կնոջից՝ **Հենրիետա Լաքսից**։ Նրա բջիջները, որոնք անվանվեցին **HeLa**, պարզվեց, որ թասում նորից ու նորից բաժանվում են առանց մահանալու։ Դրանք մինչ օրս աճեցվում են ամբողջ աշխարհի լաբորատորիաներում և օգնեցին ստեղծել պոլիոմիելիտի դեմ պատվաստանյութը։ Նրա պատմությունը փոխեց նաև կանոնները․ այսօր հիվանդները պետք է համաձայնություն տան, նախքան իրենց բջիջները կօգտագործվեն հետազոտություններում։`,
      `**Тело, которое постоянно обновляется.** Разные ткани заменяются с очень разной скоростью. Клетки, выстилающие тонкую кишку, живут всего **3–5 дней**, затем слущиваются; наружный слой кожи обновляется примерно за месяц, а эритроциты живут около 120 дней. А вот большинство нервных клеток головного мозга и клетки хрусталика глаза остаются с нами на всю жизнь.

**Клетки, пережившие хозяйку.** В 1951 году врачи в Балтиморе (США), не спросив разрешения, взяли образец опухоли у молодой женщины — **Генриетты Лакс**. Её клетки, названные **HeLa**, оказались способны делиться в чашке снова и снова, не умирая. Их до сих пор выращивают в лабораториях всего мира, и они помогли создать вакцину от полиомиелита. Её история изменила и правила: сегодня пациенты должны дать согласие, прежде чем их клетки используют в исследованиях.`,
    ),
    ask(3, {
      en: ["Which tissue makes up blood, bone and cartilage?", ["Epithelial", "Muscle", "Connective", "Nervous"], "Connective tissue has a lot of intercellular substance: liquid plasma in blood, hard salts in bone."],
      hy: ["Ո՞ր հյուսվածքն է կազմում արյունը, ոսկորը և աճառը։", ["Էպիթելայինը", "Մկանայինը", "Շարակցականը", "Նյարդայինը"], "Շարակցական հյուսվածքում շատ միջբջջային նյութ կա․ արյան մեջ՝ հեղուկ պլազմա, ոսկորում՝ կարծր աղեր։"],
      ru: ["Какая ткань образует кровь, кость и хрящ?", ["Эпителиальная", "Мышечная", "Соединительная", "Нервная"], "В соединительной ткани много межклеточного вещества: жидкая плазма в крови, твёрдые соли в кости."],
    }),
  ],
  "skeleton-muscles": [
    "diagram bone",
    closer(
      `**Born with 300 bones.** A newborn baby has about 300 bones and pieces of cartilage, but an adult has **206**. Many of them fuse as we grow: the plates of the skull, the bones of the pelvis, the lower vertebrae that form the sacrum. The soft spots on a baby's head, where the skull has not yet joined, let the head squeeze through at birth. The smallest bone is the **stirrup** in the middle ear, about 3 mm long; the longest is the thigh bone, about a quarter of a person's height.

**Bone needs work.** Bone is living tissue: cells constantly dissolve old bone and lay down new, following the load. In weightlessness the skeleton carries almost no weight, and astronauts lose about **1 to 1.5% of the mass** of their leg and hip bones each month. That is why they train on a treadmill and an exercise bike for about two hours every day on the space station. Running, jumping and ball games in childhood build strong bones for life.`,
      `**Ծնվում ենք 300 ոսկորով։** Նորածինն ունի մոտ 300 ոսկոր և աճառային մաս, իսկ մեծահասակը՝ **206**։ Դրանցից շատերը միաձուլվում են մեր աճի ընթացքում․ գանգի թիթեղները, կոնքի ոսկորները, ստորին ողերը, որոնք կազմում են սրբոսկրը։ Նորածնի գլխի փափուկ տեղերը, որտեղ գանգը դեռ չի միացել, թույլ են տալիս գլխին սեղմվել ծննդյան ժամանակ։ Ամենափոքր ոսկորը միջին ականջի **ասպանդակն** է՝ մոտ 3 մմ երկարությամբ, իսկ ամենաերկարը՝ ազդրոսկրը, մարդու հասակի մոտ քառորդը։

**Ոսկորին աշխատանք է պետք։** Ոսկորը կենդանի հյուսվածք է․ բջիջներն անընդհատ լուծում են հին ոսկրանյութը և նորն են դնում՝ համապատասխան բեռին։ Անկշռության պայմաններում կմախքը գրեթե ոչ մի քաշ չի կրում, և տիեզերագնացներն ամեն ամիս կորցնում են ոտքերի և կոնքազդրային ոսկորների **զանգվածի մոտ 1–1,5%-ը**։ Ահա թե ինչու տիեզերակայանում նրանք ամեն օր մոտ երկու ժամ մարզվում են վազքուղու և հեծանվային մարզասարքի վրա։ Մանկության տարիներին վազքը, ցատկը և գնդակով խաղերն ամբողջ կյանքի համար ամուր ոսկորներ են կառուցում։`,
      `**Рождаемся с 300 костями.** У новорождённого около 300 костей и хрящевых частей, а у взрослого — **206**. Многие срастаются по мере роста: пластинки черепа, кости таза, нижние позвонки, образующие крестец. Мягкие места на голове младенца, где череп ещё не сросся, позволяют голове пройти при рождении. Самая маленькая кость — **стремечко** в среднем ухе, около 3 мм; самая длинная — бедренная, около четверти роста человека.

**Кости нужна работа.** Кость — живая ткань: клетки постоянно растворяют старую костную ткань и откладывают новую, следуя нагрузке. В невесомости скелет почти ничего не держит, и космонавты теряют около **1–1,5% массы** костей ног и таза каждый месяц. Поэтому на космической станции они около двух часов в день занимаются на беговой дорожке и велотренажёре. Бег, прыжки и игры с мячом в детстве строят крепкие кости на всю жизнь.`,
    ),
    ask(2, {
      en: ["Why do muscles work in pairs, such as the biceps and triceps?", ["One muscle rests while the other works", "A muscle can only pull, not push", "Two muscles are stronger than one", "They are attached to the same bone"], "To straighten an arm that the biceps has bent, another muscle, the triceps, must pull the other way."],
      hy: ["Ինչո՞ւ են մկաններն աշխատում զույգերով, օրինակ՝ երկգլուխ և եռագլուխ մկանները։", ["Մեկը հանգստանում է, մինչ մյուսն աշխատում է", "Մկանը կարող է միայն քաշել, ոչ թե հրել", "Երկու մկանն ավելի ուժեղ է, քան մեկը", "Դրանք ամրացված են նույն ոսկորին"], "Երկգլուխ մկանի ծալած ձեռքն ուղղելու համար մեկ այլ մկան՝ եռագլուխը, պետք է քաշի հակառակ կողմ։"],
      ru: ["Почему мышцы работают парами, как бицепс и трицепс?", ["Одна отдыхает, пока другая работает", "Мышца может только тянуть, а не толкать", "Две мышцы сильнее одной", "Они прикреплены к одной кости"], "Чтобы разогнуть руку, согнутую бицепсом, другая мышца — трицепс — должна тянуть в обратную сторону."],
    }),
  ],
  "blood-immunity": [
    "mechanism immune",
    "bars set=blood",
    closer(
      `**Why some transfusions killed.** For centuries doctors tried giving blood from one person to another, and sometimes the patient died. In 1901 the Austrian doctor **K. Landsteiner** mixed blood samples from his colleagues and saw that some mixtures clumped and others did not. He discovered the **ABO blood groups** and received the Nobel Prize in 1930. Group O can be given to people of any group in an emergency, which is why its donors are especially valued.

**A disease wiped from the Earth.** In 1796 the English doctor **E. Jenner** noticed that milkmaids who had caught mild cowpox did not get smallpox. He put cowpox material into a cut on a boy's arm and then showed the boy was protected: the first vaccine, from the Latin *vacca*, "cow". After a worldwide vaccination campaign, in 1980 the World Health Organization declared **smallpox eradicated**, the first human disease ever defeated.`,
      `**Ինչու էին որոշ փոխներարկումներ սպանում։** Դարեր շարունակ բժիշկները փորձում էին մի մարդու արյունը տալ մյուսին, և երբեմն հիվանդը մահանում էր։ 1901 թվականին ավստրիացի բժիշկ **Կ. Լանդշտայները** խառնեց իր գործընկերների արյան նմուշները և տեսավ, որ որոշ խառնուրդներում արյունը կպչում էր, իսկ մյուսներում՝ ոչ։ Նա հայտնաբերեց **ABO արյան խմբերը** և 1930 թվականին Նոբելյան մրցանակ ստացավ։ O խմբի արյունը շտապ դեպքում կարելի է տալ ցանկացած խմբի մարդու, ուստի դրա դոնորները հատկապես արժեքավոր են։

**Հիվանդություն, որը ջնջվեց Երկրի երեսից։** 1796 թվականին անգլիացի բժիշկ **Է. Ջեններն** նկատեց, որ թեթև կովային ծաղիկ տարած կթվորուհիները բնական ծաղիկով չէին հիվանդանում։ Նա կովային ծաղկի նյութը մտցրեց մի տղայի թևի կտրվածքի մեջ, ապա ցույց տվեց, որ տղան պաշտպանված է․ սա առաջին պատվաստանյութն էր՝ լատիներեն *vacca*՝ «կով» բառից։ Համաշխարհային պատվաստումների արշավից հետո 1980 թվականին Առողջապահության համաշխարհային կազմակերպությունը հայտարարեց, որ **բնական ծաղիկը վերացված է**․ սա մարդու առաջին հիվանդությունն էր, որ երբևէ հաղթահարվեց։`,
      `**Почему переливания убивали.** Веками врачи пытались переливать кровь от одного человека другому, и иногда пациент умирал. В 1901 году австрийский врач **К. Ландштейнер** смешал образцы крови своих коллег и увидел, что одни смеси склеиваются, а другие нет. Он открыл **группы крови системы AB0** и в 1930 году получил Нобелевскую премию. Кровь группы 0 в экстренном случае можно перелить человеку любой группы, поэтому её доноры особенно ценны.

**Болезнь, стёртая с лица Земли.** В 1796 году английский врач **Э. Дженнер** заметил, что доярки, переболевшие лёгкой коровьей оспой, не заражались натуральной. Он ввёл материал коровьей оспы в царапину на руке мальчика и затем показал, что тот защищён: это была первая вакцина, от латинского *vacca* — «корова». После всемирной кампании вакцинации в 1980 году Всемирная организация здравоохранения объявила **натуральную оспу искоренённой** — первая побеждённая болезнь человека.`,
    ),
    ask(1, {
      en: ["What does a vaccine contain?", ["Weakened or killed germs, or parts of them", "Ready-made antibodies", "Red blood cells", "Antibiotics"], "A vaccine trains the body to make its own antibodies; ready-made antibodies are given in a serum."],
      hy: ["Ի՞նչ է պարունակում պատվաստանյութը։", ["Թուլացված կամ սպանված մանրէներ կամ դրանց մասեր", "Պատրաստի հակամարմիններ", "Կարմիր գնդիկներ", "Հակաբիոտիկներ"], "Պատվաստանյութը մարզում է օրգանիզմին՝ արտադրելու սեփական հակամարմիններ, իսկ պատրաստի հակամարմինները տրվում են շիճուկով։"],
      ru: ["Что содержит вакцина?", ["Ослабленные или убитые микробы либо их части", "Готовые антитела", "Эритроциты", "Антибиотики"], "Вакцина учит организм делать свои антитела; готовые антитела вводят в сыворотке."],
    }),
  ],
  "heart-circulation": [
    "diagram heart",
    "mechanism heartcycle",
    closer(
      `**Harvey's arithmetic.** People once believed that blood was made in the liver from food and soaked away into the body. In 1628 the English doctor **W. Harvey** did a simple calculation: if the heart pushes out even a small cup of blood with every beat, in one hour it pumps more blood than the weight of the whole person. No meal could make that much, so the same blood must go **round and round**. Harvey could not see capillaries; they were found with a microscope by **M. Malpighi** in 1661.

**A lifetime of beats.** At about 70 beats a minute the heart beats around 100,000 times a day and some **2.5 to 3 billion times** in a lifetime, without ever stopping to rest for more than a fraction of a second. If all the blood vessels of an adult were laid end to end, they would stretch for roughly **100,000 km**, more than twice round the Earth; nearly all of that length is capillaries.`,
      `**Հարվեյի թվաբանությունը։** Ժամանակին մարդիկ կարծում էին, որ արյունը սննդից առաջանում է լյարդում և ներծծվում մարմնի մեջ։ 1628 թվականին անգլիացի բժիշկ **Ու. Հարվեյը** մի պարզ հաշվարկ արեց․ եթե սիրտը յուրաքանչյուր զարկի ժամանակ դուրս է մղում թեկուզ մի փոքր բաժակ արյուն, ապա մեկ ժամում այն մղում է ավելի շատ արյուն, քան ամբողջ մարդու քաշն է։ Ոչ մի ճաշ այդքան արյուն չէր կարող տալ, ուստի նույն արյունը պետք է **պտտվի շրջանով**։ Հարվեյը չէր կարող տեսնել մազանոթները․ դրանք մանրադիտակով հայտնաբերեց **Մ. Մալպիգին** 1661 թվականին։

**Մի ամբողջ կյանքի զարկերը։** Րոպեում մոտ 70 զարկի դեպքում սիրտն օրական զարկում է մոտ 100 000 անգամ, իսկ կյանքի ընթացքում՝ մոտ **2,5–3 միլիարդ անգամ**՝ երբեք վայրկյանի մի մասից ավելի չդադարելով հանգստանալու։ Եթե մեծահասակի բոլոր արյունատար անոթները դասավորեին իրար հետևից, դրանք կձգվեին մոտ **100 000 կմ**՝ Երկրի շրջագծից ավելի քան երկու անգամ․ այդ երկարության գրեթե ամբողջը մազանոթներն են։`,
      `**Арифметика Гарвея.** Когда-то считали, что кровь образуется в печени из пищи и впитывается в тело. В 1628 году английский врач **У. Гарвей** сделал простой расчёт: если сердце при каждом ударе выталкивает хотя бы маленькую чашечку крови, то за час оно перекачивает больше, чем весит весь человек. Никакая еда не даст столько крови, значит, одна и та же кровь должна идти **по кругу**. Капилляров Гарвей видеть не мог; их нашёл с помощью микроскопа **М. Мальпиги** в 1661 году.

**Удары длиною в жизнь.** При 70 ударах в минуту сердце бьётся около 100 000 раз в сутки и примерно **2,5–3 миллиарда раз** за жизнь, ни разу не останавливаясь на отдых дольше доли секунды. Если сложить все сосуды взрослого человека в одну линию, они протянутся примерно на **100 000 км** — больше двух окружностей Земли; почти вся эта длина приходится на капилляры.`,
    ),
    ask(4, {
      en: ["Which vessel carries oxygen-poor blood away from the heart?", ["The aorta", "The pulmonary veins", "The vena cava", "The pulmonary artery"], "Arteries carry blood away from the heart; the pulmonary artery takes venous blood to the lungs."],
      hy: ["Ո՞ր անոթն է թթվածնով աղքատ արյունը տանում սրտից։", ["Աորտան", "Թոքային երակները", "Սիներակը", "Թոքային զարկերակը"], "Զարկերակներն արյունը տանում են սրտից․ թոքային զարկերակն երակային արյունը տանում է թոքեր։"],
      ru: ["Какой сосуд уносит от сердца бедную кислородом кровь?", ["Аорта", "Лёгочные вены", "Полая вена", "Лёгочная артерия"], "Артерии несут кровь от сердца; лёгочная артерия несёт венозную кровь в лёгкие."],
    }),
  ],
  respiration: [
    "diagram lungs",
    "mechanism breathing",
    closer(
      `**A huge surface in a small chest.** The lungs hold about **300 to 500 million** alveoli, tiny air sacs wrapped in capillaries. Their walls are thinner than a soap bubble, and spread flat they would cover about **50 to 75 square metres**, roughly the area of a small flat. This huge, thin surface is what lets oxygen pass into the blood in less than a second.

**Breathing in the mountains.** At the top of Mount Aragats, at about 4,090 m, every breath holds only about 60% of the oxygen it would at sea level. People who climb fast can get **mountain sickness**: headache, breathlessness, nausea. Over a few weeks the body adapts: the kidneys release a hormone that makes the bone marrow produce more red blood cells. That is why athletes sometimes train in the mountains before competitions.`,
      `**Հսկայական մակերես փոքր կրծքավանդակում։** Թոքերում կա մոտ **300-ից 500 միլիոն** ալվեոլ՝ մազանոթներով պատված փոքրիկ օդապարկեր։ Նրանց պատերն ավելի բարակ են, քան օճառի պղպջակը, և տարածված վիճակում դրանք կծածկեին մոտ **50–75 քառակուսի մետր**՝ մոտավորապես փոքր բնակարանի մակերեսը։ Հենց այս հսկայական, բարակ մակերեսն է թույլ տալիս թթվածնին վայրկյանից պակաս ժամանակում անցնել արյան մեջ։

**Շնչառություն լեռներում։** Արագածի գագաթին՝ մոտ 4090 մ բարձրության վրա, յուրաքանչյուր շունչ պարունակում է թթվածնի մոտ 60%-ը այն քանակի, որը կլիներ ծովի մակարդակում։ Արագ բարձրացող մարդիկ կարող են ունենալ **լեռնային հիվանդություն**՝ գլխացավ, շնչարգելություն, սրտխառնոց։ Մի քանի շաբաթում օրգանիզմը հարմարվում է․ երիկամներն արտազատում են հորմոն, որը ստիպում է ոսկրածուծին ավելի շատ կարմիր գնդիկներ արտադրել։ Ահա թե ինչու են մարզիկներն երբեմն մրցումներից առաջ մարզվում լեռներում։`,
      `**Огромная поверхность в небольшой груди.** В лёгких около **300–500 миллионов** альвеол — крошечных воздушных мешочков, оплетённых капиллярами. Их стенки тоньше мыльного пузыря, а в расправленном виде они заняли бы около **50–75 квадратных метров** — примерно площадь небольшой квартиры. Именно эта огромная тонкая поверхность позволяет кислороду переходить в кровь меньше чем за секунду.

**Дыхание в горах.** На вершине Арагаца, на высоте около 4090 м, в каждом вдохе лишь около 60% того кислорода, что был бы на уровне моря. У тех, кто поднимается быстро, бывает **горная болезнь**: головная боль, одышка, тошнота. За несколько недель организм приспосабливается: почки выделяют гормон, заставляющий костный мозг делать больше эритроцитов. Поэтому спортсмены иногда тренируются в горах перед соревнованиями.`,
    ),
    ask(2, {
      en: ["What happens when we breathe in?", ["The diaphragm relaxes and rises", "The diaphragm contracts and flattens", "The lungs contract by themselves", "The ribs move down"], "The chest gets bigger, the pressure in the lungs falls and air flows in."],
      hy: ["Ի՞նչ է տեղի ունենում ներշնչելիս։", ["Ստոծանին թուլանում և բարձրանում է", "Ստոծանին կծկվում և հարթվում է", "Թոքերն իրենք են կծկվում", "Կողերն իջնում են"], "Կրծքավանդակը մեծանում է, թոքերում ճնշումն ընկնում է, և օդը ներս է հոսում։"],
      ru: ["Что происходит при вдохе?", ["Диафрагма расслабляется и поднимается", "Диафрагма сокращается и уплощается", "Лёгкие сокращаются сами", "Рёбра опускаются"], "Грудная клетка увеличивается, давление в лёгких падает, и воздух входит."],
    }),
  ],
  digestion: [
    "diagram digestive",
    closer(
      `**A window into the stomach.** In 1822 a young trapper, **Alexis St. Martin**, was shot in the stomach by accident in Michigan. The army doctor **W. Beaumont** saved him, but the wound healed into a permanent opening into the stomach. For years Beaumont lowered pieces of food on a silk thread into it and pulled them out to see how fast they were digested. He showed that digestion in the stomach is chemical, done by an acidic juice, not just grinding.

**The surface that feeds you.** The small intestine is about 6 m long when stretched out, and its inner wall is folded and covered with millions of finger-like **villi**, which are themselves covered with microvilli. A 2014 study measured the whole inner surface of the gut at about **30 square metres**, the floor of a large room. The stomach protects itself from its own acid with a layer of mucus, and its lining is renewed every few days.`,
      `**Պատուհան դեպի ստամոքս։** 1822 թվականին Միչիգանում երիտասարդ որսորդ **Ալեքսիս Սեն-Մարտենը** պատահաբար կրակոց ստացավ ստամոքսին։ Զինվորական բժիշկ **Ու. Բոմոնտը** փրկեց նրան, բայց վերքը սպիացավ՝ թողնելով ստամոքսի մեջ բացվող մշտական անցք։ Տարիներ շարունակ Բոմոնտը մետաքսե թելով սննդի կտորներ էր իջեցնում ստամոքս և հանում՝ տեսնելու, թե որքան արագ են դրանք մարսվում։ Նա ցույց տվեց, որ ստամոքսում մարսողությունը քիմիական է, այն կատարում է թթվային հյութը, և ոչ միայն մանրացումը։

**Մակերես, որը սնում է քեզ։** Բարակ աղիքը ձգված վիճակում մոտ 6 մ երկարություն ունի, իսկ նրա ներքին պատը ծալքավոր է և ծածկված միլիոնավոր մատնանման **թավիկներով**, որոնք իրենք էլ ծածկված են միկրոթավիկներով։ 2014 թվականի հետազոտությունն աղիքի ամբողջ ներքին մակերեսը չափեց մոտ **30 քառակուսի մետր**՝ մեծ սենյակի հատակի չափ։ Ստամոքսն իր սեփական թթվից պաշտպանվում է լորձի շերտով, և նրա լորձաթաղանթը նորանում է մի քանի օրը մեկ։`,
      `**Окно в желудок.** В 1822 году в Мичигане молодого охотника **Алексиса Сен-Мартена** случайно ранили выстрелом в живот. Армейский врач **У. Бомонт** спас его, но рана зажила, оставив постоянное отверстие в желудок. Годами Бомонт опускал туда кусочки пищи на шёлковой нити и вытаскивал, чтобы увидеть, как быстро они перевариваются. Он показал, что пищеварение в желудке химическое — его ведёт кислый сок, а не одно только перетирание.

**Поверхность, которая тебя кормит.** Тонкая кишка в растянутом виде около 6 м длиной, а её внутренняя стенка складчатая и покрыта миллионами пальцевидных **ворсинок**, которые сами покрыты микроворсинками. Исследование 2014 года оценило всю внутреннюю поверхность кишечника примерно в **30 квадратных метров** — как пол большой комнаты. Желудок защищается от собственной кислоты слоем слизи, а его слизистая обновляется каждые несколько дней.`,
    ),
    ask(3, {
      en: ["Where are most nutrients absorbed into the blood?", ["In the stomach", "In the oesophagus", "In the small intestine", "In the large intestine"], "Its villi give a huge surface for absorption; the large intestine absorbs mainly water."],
      hy: ["Որտե՞ղ է սննդանյութերի մեծ մասը ներծծվում արյան մեջ։", ["Ստամոքսում", "Կերակրափողում", "Բարակ աղիքում", "Հաստ աղիքում"], "Նրա թավիկները ներծծման համար հսկայական մակերես են տալիս, իսկ հաստ աղիքը ներծծում է հիմնականում ջուր։"],
      ru: ["Где большая часть питательных веществ всасывается в кровь?", ["В желудке", "В пищеводе", "В тонкой кишке", "В толстой кишке"], "Ворсинки дают огромную поверхность для всасывания; толстая кишка всасывает в основном воду."],
    }),
  ],
  "metabolism-excretion": [
    "diagram kidney",
    closer(
      `**The first controlled experiment in medicine.** On long voyages sailors died of **scurvy**: their gums bled, wounds would not heal. In 1747 the Scottish naval doctor **J. Lind** took twelve sick sailors on the ship *Salisbury* and gave pairs of them different extra foods: cider, vinegar, sea water, oranges and lemons, and others. Only the pair that ate citrus fruit recovered quickly. Nearly two centuries later, in the 1930s, the substance in them was isolated: **vitamin C**.

**Filtering the whole blood many times a day.** The kidneys weigh only about 150 g each, yet they receive about a fifth of all the blood the heart pumps. They filter about 150 litres of fluid a day, so the whole volume of blood plasma passes through them about **50 times** daily. Almost all of it returns to the blood, and only about 1.5 litres leave as urine. A person can live a normal life with one healthy kidney, which is why a living relative can donate one.`,
      `**Բժշկության առաջին վերահսկվող փորձը։** Երկար նավարկությունների ժամանակ նավաստիները մահանում էին **լնդախտից**․ նրանց լնդերն արյունահոսում էին, վերքերը չէին լավանում։ 1747 թվականին շոտլանդացի ռազմածովային բժիշկ **Ջ. Լինդը** *Սոլսբերի* նավի տասներկու հիվանդ նավաստիների բաժանեց զույգերի և նրանց տվեց տարբեր լրացուցիչ սնունդ՝ խնձորօղի, քացախ, ծովի ջուր, նարինջ և կիտրոն և այլն։ Միայն ցիտրուսներ կերած զույգն արագ ապաքինվեց։ Գրեթե երկու դար անց՝ 1930-ականներին, դրանցում եղած նյութն առանձնացվեց․ դա **C վիտամինն** էր։

**Ամբողջ արյունն օրական շատ անգամ զտելը։** Երիկամներից յուրաքանչյուրը կշռում է ընդամենը մոտ 150 գ, բայց դրանք ստանում են սրտի մղած ամբողջ արյան մոտ հինգերորդ մասը։ Նրանք օրական զտում են մոտ 150 լիտր հեղուկ, ուստի արյան պլազմայի ամբողջ ծավալն օրական նրանց միջով անցնում է մոտ **50 անգամ**։ Գրեթե ամբողջը վերադառնում է արյան մեջ, և միայն մոտ 1,5 լիտրն է դուրս գալիս որպես մեզ։ Մարդը կարող է նորմալ ապրել մեկ առողջ երիկամով, ուստի կենդանի ազգականը կարող է նվիրաբերել մեկը։`,
      `**Первый контролируемый опыт в медицине.** В долгих плаваниях моряки умирали от **цинги**: кровоточили дёсны, не заживали раны. В 1747 году шотландский флотский врач **Дж. Линд** взял на корабле «Солсбери» двенадцать больных матросов и давал парам разную добавочную пищу: сидр, уксус, морскую воду, апельсины и лимоны и другое. Быстро поправилась только пара, евшая цитрусовые. Почти через два века, в 1930-х годах, вещество из них выделили — **витамин C**.

**Фильтровать всю кровь много раз в день.** Каждая почка весит всего около 150 г, но они получают около пятой части всей крови, которую качает сердце. За сутки они фильтруют около 150 литров жидкости, так что весь объём плазмы проходит через них примерно **50 раз** в день. Почти всё возвращается в кровь, и лишь около 1,5 литра уходит с мочой. С одной здоровой почкой можно жить нормально, поэтому живой родственник может отдать почку.`,
    ),
    ask(3, {
      en: ["Which vitamin can the skin make in sunlight?", ["A", "B₁", "D", "C"], "Vitamin D is made in the skin under ultraviolet light; without it children's bones bend (rickets)."],
      hy: ["Ո՞ր վիտամինը կարող է մաշկն առաջացնել արևի լույսի տակ։", ["A", "B₁", "D", "C"], "D վիտամինն առաջանում է մաշկում ուլտրամանուշակագույն լույսի ազդեցությամբ․ առանց դրա երեխաների ոսկորները ծռվում են (ռախիտ)։"],
      ru: ["Какой витамин может образовываться в коже на солнце?", ["A", "B₁", "D", "C"], "Витамин D образуется в коже под ультрафиолетом; без него у детей искривляются кости (рахит)."],
    }),
  ],
  "nervous-system": [
    "diagram neuron",
    "mechanism reflex",
    closer(
      `**Faster than a racing car.** A nerve impulse is an electrical wave that runs along the axon. In thin fibres without a myelin sheath it crawls at about 1 metre per second, but in thick myelinated fibres it jumps from gap to gap at up to about **120 metres per second**, more than 400 km/h. That is why a reflex through the spinal cord takes only a few hundredths of a second.

**An expensive organ.** The human brain holds about **86 billion neurons**, each linked to thousands of others. It makes up only about 2% of the body's mass but uses about **20% of its energy**, even during sleep. The cortex is folded so that a large surface fits inside the skull: spread out, it would be about the size of a large pillowcase.`,
      `**Մրցարշավային մեքենայից արագ։** Նյարդային ազդակն էլեկտրական ալիք է, որը վազում է աքսոնի երկայնքով։ Առանց միելինային թաղանթի բարակ թելերում այն սողում է վայրկյանում մոտ 1 մետր արագությամբ, իսկ հաստ միելինապատ թելերում ցատկում է մի ճեղքից մյուսը՝ մինչև վայրկյանում մոտ **120 մետր**, ժամում ավելի քան 400 կմ։ Ահա թե ինչու ողնուղեղի միջոցով ռեֆլեքսը տևում է ընդամենը վայրկյանի մի քանի հարյուրերորդականը։

**Թանկ օրգան։** Մարդու գլխուղեղն ունի մոտ **86 միլիարդ նեյրոն**, որոնցից յուրաքանչյուրը կապված է հազարավոր այլ նեյրոնների հետ։ Այն կազմում է մարմնի զանգվածի ընդամենը մոտ 2%-ը, բայց օգտագործում է օրգանիզմի **էներգիայի մոտ 20%-ը**՝ նույնիսկ քնի ժամանակ։ Կեղևը ծալքավոր է, որպեսզի մեծ մակերեսը տեղավորվի գանգի մեջ․ տարածված վիճակում այն կլիներ մեծ բարձի երեսի չափ։`,
      `**Быстрее гоночной машины.** Нервный импульс — электрическая волна, бегущая по аксону. В тонких волокнах без миелиновой оболочки он ползёт со скоростью около 1 метра в секунду, а в толстых миелиновых перескакивает от перехвата к перехвату со скоростью до **120 метров в секунду** — больше 400 км/ч. Поэтому рефлекс через спинной мозг занимает лишь несколько сотых секунды.

**Дорогой орган.** В головном мозге человека около **86 миллиардов нейронов**, и каждый связан с тысячами других. Мозг составляет лишь около 2% массы тела, но тратит около **20% энергии** — даже во сне. Кора собрана в складки, чтобы большая поверхность уместилась в черепе: в расправленном виде она была бы размером с большую наволочку.`,
    ),
    ask(2, {
      en: ["In the reflex arc, which neuron carries the impulse from the receptor to the spinal cord?", ["Motor neuron", "Sensory neuron", "Relay neuron", "Effector"], "Receptor → sensory neuron → relay neuron → motor neuron → muscle."],
      hy: ["Ռեֆլեքսային աղեղում ո՞ր նեյրոնն է ազդակը տանում ընկալիչից ողնուղեղ։", ["Շարժիչ նեյրոնը", "Զգացող նեյրոնը", "Միջանկյալ նեյրոնը", "Գործադիր օրգանը"], "Ընկալիչ → զգացող նեյրոն → միջանկյալ նեյրոն → շարժիչ նեյրոն → մկան։"],
      ru: ["Какой нейрон рефлекторной дуги несёт импульс от рецептора в спинной мозг?", ["Двигательный", "Чувствительный", "Вставочный", "Рабочий орган"], "Рецептор → чувствительный нейрон → вставочный нейрон → двигательный нейрон → мышца."],
    }),
  ],
  "sense-organs": [
    "diagram eye",
    "diagram ear",
    closer(
      `**Find your blind spot.** Draw a cross and, 8 cm to the right of it, a dot. Close your left eye, look at the cross with your right eye and slowly bring the page closer. At about 25–30 cm the dot **disappears**: its image has fallen on the place where the optic nerve leaves the eye and there are no rods or cones. We never notice this hole because the brain fills it in with what is around it.

**Colour and sound.** The retina has three kinds of cones, sensitive to red, green and blue light; all other colours are mixtures. If one kind works badly, a person is **colour-blind**: about 8% of men but less than 1% of women, because the genes are on the X chromosome. The ear hears sounds from about **20 to 20,000 vibrations a second**, and the upper limit drops with age. Sound louder than about 85 decibels, such as headphones at full volume, damages the hair cells of the cochlea, and they do not grow back.`,
      `**Գտի՛ր քո կույր բիծը։** Նկարի՛ր խաչ, իսկ դրանից 8 սմ աջ՝ կետ։ Փակի՛ր ձախ աչքդ, աջ աչքով նայի՛ր խաչին և դանդաղ մոտեցրո՛ւ էջը։ Մոտ 25–30 սմ հեռավորության վրա կետը **անհետանում է**․ նրա պատկերն ընկել է այն տեղը, որտեղից տեսողական նյարդը դուրս է գալիս աչքից, և որտեղ ձողիկներ ու շշիկներ չկան։ Մենք երբեք չենք նկատում այս անցքը, որովհետև ուղեղը լրացնում է այն շրջապատի պատկերով։

**Գույն և ձայն։** Ցանցաթաղանթն ունի երեք տեսակի շշիկներ, որոնք զգայուն են կարմիր, կանաչ և կապույտ լույսի նկատմամբ, իսկ մնացած բոլոր գույները դրանց խառնուրդներն են։ Եթե մի տեսակը վատ է աշխատում, մարդը **դալտոնիկ** է․ տղամարդկանց մոտ 8%-ը, բայց կանանց 1%-ից պակասը, որովհետև գեները գտնվում են X քրոմոսոմում։ Ականջը լսում է վայրկյանում մոտ **20-ից 20 000 տատանում** ունեցող ձայներ, և վերին սահմանը տարիքի հետ իջնում է։ Մոտ 85 դեցիբելից բարձր ձայնը, օրինակ՝ առավելագույն ձայնով ականջակալները, վնասում է խխունջի մազիկավոր բջիջները, և դրանք նորից չեն աճում։`,
      `**Найди своё слепое пятно.** Нарисуй крестик, а в 8 см справа от него — точку. Закрой левый глаз, смотри правым на крестик и медленно приближай страницу. Примерно на 25–30 см точка **исчезнет**: её изображение попало туда, где из глаза выходит зрительный нерв и нет ни палочек, ни колбочек. Мы не замечаем этой дыры, потому что мозг заполняет её тем, что вокруг.

**Цвет и звук.** В сетчатке три вида колбочек, чувствительных к красному, зелёному и синему свету; все остальные цвета — их смеси. Если один вид работает плохо, человек — **дальтоник**: около 8% мужчин, но меньше 1% женщин, потому что гены лежат в X-хромосоме. Ухо слышит звуки примерно от **20 до 20 000 колебаний в секунду**, и верхняя граница с возрастом снижается. Звук громче примерно 85 децибел, например наушники на полной громкости, повреждает волосковые клетки улитки, а они не восстанавливаются.`,
    ),
    ask(4, {
      en: ["A short-sighted person sees far things blurred. Where does the image form?", ["On the retina", "Behind the retina", "On the blind spot", "In front of the retina"], "Diverging lenses move the image back onto the retina."],
      hy: ["Կարճատես մարդը հեռավոր առարկաները տեսնում է աղոտ։ Որտե՞ղ է առաջանում պատկերը։", ["Ցանցաթաղանթի վրա", "Ցանցաթաղանթի հետևում", "Կույր բծի վրա", "Ցանցաթաղանթի առջևում"], "Ցրող ոսպնյակները պատկերը տեղափոխում են ցանցաթաղանթի վրա։"],
      ru: ["Близорукий человек видит дальние предметы размытыми. Где образуется изображение?", ["На сетчатке", "За сетчаткой", "На слепом пятне", "Перед сетчаткой"], "Рассеивающие линзы отодвигают изображение назад на сетчатку."],
    }),
  ],
  "endocrine-system": [
    "diagram glands",
    closer(
      `**The discovery that saved a boy.** Before 1922 a child with type 1 diabetes usually died within a year or two. In 1921 in Toronto, **F. Banting** and his student **C. Best** extracted insulin from the pancreas of dogs. In January 1922 it was injected into **Leonard Thompson**, a 14-year-old boy who was dying of diabetes, and his blood sugar fell. Banting shared the Nobel Prize in 1923 and sold the patent for one dollar, saying insulin belonged to the world.

**The hormone of fear.** When you get a fright, the adrenal glands release **adrenaline** within seconds. The heart beats faster, the airways widen, the pupils grow, the liver releases glucose and blood rushes to the muscles: the body is ready to fight or run. This is why your heart pounds and your hands shake before an exam. Nerves act in milliseconds, hormones in seconds to days, but hormones reach every cell the blood touches.`,
      `**Հայտնագործություն, որը փրկեց մի տղայի։** Մինչև 1922 թվականը 1-ին տիպի շաքարախտով երեխան սովորաբար մահանում էր մեկ-երկու տարում։ 1921 թվականին Տորոնտոյում **Ֆ. Բանտինգը** և նրա ուսանող **Չ. Բեստը** շների ենթաստամոքսային գեղձից ինսուլին ստացան։ 1922 թվականի հունվարին այն ներարկվեց **Լեոնարդ Թոմփսոնին**՝ 14-ամյա տղայի, որը մահանում էր շաքարախտից, և նրա արյան շաքարն իջավ։ Բանտինգը 1923 թվականին Նոբելյան մրցանակի արժանացավ և արտոնագիրը վաճառեց մեկ դոլարով՝ ասելով, որ ինսուլինը պատկանում է աշխարհին։

**Վախի հորմոնը։** Երբ վախենում ես, մակերիկամները վայրկյանների ընթացքում արտազատում են **ադրենալին**։ Սիրտն արագ է զարկում, շնչուղիները լայնանում են, բիբերը մեծանում են, լյարդը գլյուկոզ է ազատում, և արյունը հոսում է դեպի մկանները․ օրգանիզմը պատրաստ է կռվելու կամ փախչելու։ Ահա թե ինչու է սիրտդ թպրտում և ձեռքերդ դողում քննությունից առաջ։ Նյարդերը գործում են միլիվայրկյաններում, հորմոնները՝ վայրկյաններից մինչև օրեր, բայց հորմոնները հասնում են յուրաքանչյուր բջջի, որին դիպչում է արյունը։`,
      `**Открытие, которое спасло мальчика.** До 1922 года ребёнок с диабетом 1-го типа обычно умирал за год-два. В 1921 году в Торонто **Ф. Бантинг** и его студент **Ч. Бест** получили инсулин из поджелудочной железы собак. В январе 1922 года его ввели **Леонарду Томпсону**, 14-летнему мальчику, умиравшему от диабета, и сахар в его крови снизился. Бантинг получил Нобелевскую премию в 1923 году и продал патент за один доллар, сказав, что инсулин принадлежит миру.

**Гормон страха.** Когда ты пугаешься, надпочечники за секунды выбрасывают **адреналин**. Сердце бьётся чаще, бронхи расширяются, зрачки увеличиваются, печень выпускает глюкозу, и кровь приливает к мышцам: тело готово драться или бежать. Вот почему сердце колотится, а руки дрожат перед экзаменом. Нервы действуют за миллисекунды, гормоны — от секунд до дней, зато гормоны доходят до каждой клетки, куда попадает кровь.`,
    ),
    ask(2, {
      en: ["Which hormone lowers the amount of glucose in the blood?", ["Adrenaline", "Insulin", "Thyroxine", "Growth hormone"], "Insulin from the pancreas helps cells take up glucose; adrenaline does the opposite."],
      hy: ["Ո՞ր հորմոնն է իջեցնում արյան մեջ գլյուկոզի քանակը։", ["Ադրենալինը", "Ինսուլինը", "Թիրօքսինը", "Աճի հորմոնը"], "Ենթաստամոքսային գեղձի ինսուլինն օգնում է բջիջներին կլանել գլյուկոզը, իսկ ադրենալինն անում է հակառակը։"],
      ru: ["Какой гормон снижает количество глюкозы в крови?", ["Адреналин", "Инсулин", "Тироксин", "Гормон роста"], "Инсулин поджелудочной железы помогает клеткам усваивать глюкозу, адреналин действует наоборот."],
    }),
  ],
  "development-healthy-life": [
    "bars set=sleep",
    closer(
      `**Why teenagers want to stay up late.** In adolescence the body clock really shifts: the brain starts releasing the sleep hormone **melatonin** about two hours later in the evening than in childhood. So a teenager is not lazy when it is hard to fall asleep at ten and hard to wake at seven. Bright screens in the evening push the clock even later, because blue light holds back melatonin. Putting the phone away an hour before bed and getting daylight in the morning help the clock back.

**Habits that last.** Smoking kills about **8 million people** a year worldwide, according to the World Health Organization, and most smokers started before the age of 18, when the developing brain becomes addicted to nicotine fastest. Regular movement works the other way: an hour of activity a day strengthens the heart, bones and mood, and also improves memory and attention at school.`,
      `**Ինչու են դեռահասներն ուզում ուշ քնել։** Դեռահասության տարիքում ներքին ժամացույցն իրոք տեղաշարժվում է․ ուղեղը քնի հորմոնը՝ **մելատոնինը**, սկսում է արտազատել երեկոյան մոտ երկու ժամ ավելի ուշ, քան մանկության տարիներին։ Ուստի դեռահասը ծույլ չէ, երբ նրա համար դժվար է քնել ժամը տասին և արթնանալ յոթին։ Երեկոյան պայծառ էկրանները ժամացույցն ավելի ուշ են տեղաշարժում, որովհետև կապույտ լույսը ճնշում է մելատոնինը։ Քնելուց մեկ ժամ առաջ հեռախոսը մի կողմ դնելը և առավոտյան ցերեկային լույս ստանալն օգնում են ժամացույցը վերադարձնել տեղը։

**Սովորություններ, որոնք երկար են տևում։** Առողջապահության համաշխարհային կազմակերպության տվյալներով՝ ծխելն աշխարհում տարեկան սպանում է մոտ **8 միլիոն մարդ**, և ծխողների մեծ մասը սկսել է մինչև 18 տարեկանը, երբ զարգացող ուղեղն ամենաարագն է կախվածություն ձեռք բերում նիկոտինից։ Կանոնավոր շարժումը գործում է հակառակ ուղղությամբ․ օրական մեկ ժամ ակտիվությունն ամրացնում է սիրտը, ոսկորները և տրամադրությունը, ինչպես նաև բարելավում է հիշողությունը և ուշադրությունը դպրոցում։`,
      `**Почему подросткам хочется лечь попозже.** В подростковом возрасте внутренние часы действительно сдвигаются: мозг начинает выделять гормон сна **мелатонин** вечером примерно на два часа позже, чем в детстве. Так что подросток не ленится, когда ему трудно уснуть в десять и проснуться в семь. Яркие экраны вечером сдвигают часы ещё позже, потому что синий свет подавляет мелатонин. Отложить телефон за час до сна и побыть утром на дневном свету — это помогает вернуть часы на место.

**Привычки надолго.** По данным Всемирной организации здравоохранения, курение убивает около **8 миллионов человек** в год, и большинство курильщиков начали до 18 лет, когда развивающийся мозг быстрее всего привыкает к никотину. Регулярное движение действует наоборот: час активности в день укрепляет сердце, кости и настроение, а ещё улучшает память и внимание на уроках.`,
    ),
    ask(3, {
      en: ["How much sleep does a teenager of 14–17 need?", ["5–6 hours", "6–7 hours", "8–10 hours", "11–14 hours"], "8–10 hours; 11–14 hours is what a toddler needs."],
      hy: ["Որքա՞ն քուն է պետք 14–17 տարեկան դեռահասին։", ["5–6 ժամ", "6–7 ժամ", "8–10 ժամ", "11–14 ժամ"], "8–10 ժամ, իսկ 11–14 ժամը մանուկի կարիքն է։"],
      ru: ["Сколько сна нужно подростку 14–17 лет?", ["5–6 часов", "6–7 часов", "8–10 часов", "11–14 часов"], "8–10 часов; 11–14 часов нужно малышу."],
    }),
  ],
};
