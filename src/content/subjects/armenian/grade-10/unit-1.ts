import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit1: UnitSeed = {
  title: t("History of the language", "Լեզվի պատմություն", "История языка"),
  summary: t("Indo-European origins, Grabar, Middle Armenian, Modern Armenian, the two standards, orthography.", "Հնդեվրոպական ծագում, գրաբար, միջին հայերեն, աշխարհաբար, երկու գրական տարբերակ, ուղղագրություն։", "Индоевропейское происхождение, грабар, среднеармянский, ашхарабар, два литературных стандарта, орфография."),
  lessons: [
    lesson(
      "indo-european",
      ["Armenian among the Indo-European languages", "Հայերենը հնդեվրոպական լեզուների շարքում", "Армянский среди индоевропейских языков"],
      {
        en: [
          "Explain what a language family is and how related languages are recognised.",
          "Place Armenian as an independent branch of the Indo-European family and name its neighbours in the tree.",
          "Give five Armenian words with regular correspondences in Latin, Greek or Sanskrit.",
          "State Hübschmann's 1875 discovery and why Armenian was earlier taken for an Iranian dialect.",
          "Tell inherited words from borrowed ones using sound correspondences.",
        ],
        hy: [
          "Բացատրել, թե ինչ է լեզվաընտանիքը և ինչպես են ճանաչվում ցեղակից լեզուները։",
          "Տեղադրել հայերենը որպես հնդեվրոպական ընտանիքի ինքնուրույն ճյուղ և անվանել նրա հարևանները ծառի վրա։",
          "Բերել հինգ հայերեն բառ, որոնք կանոնավոր համապատասխանություններ ունեն լատիներենում, հունարենում կամ սանսկրիտում։",
          "Շարադրել Հյուբշմանի 1875 թվականի հայտնագործությունը և բացատրել, թե ինչու էին հայերենն ավելի վաղ իրանական բարբառ համարում։",
          "Հնչյունական համապատասխանությունների օգնությամբ տարբերել բնիկ բառը փոխառյալից։",
        ],
        ru: [
          "Объяснить, что такое языковая семья и как распознаются родственные языки.",
          "Поместить армянский как самостоятельную ветвь индоевропейской семьи и назвать его соседей по древу.",
          "Привести пять армянских слов с регулярными соответствиями в латыни, греческом или санскрите.",
          "Изложить открытие Хюбшмана 1875 года и объяснить, почему армянский раньше считали иранским диалектом.",
          "Отличать исконное слово от заимствованного по звуковым соответствиям.",
        ],
      },
      {
        en: `## What makes languages related

Languages are **related** when they descend from one common ancestor, the way Italian, Spanish and French descend from Latin. The ancestor of Armenian is not written anywhere: it is **Proto-Indo-European**, a language spoken roughly five to six thousand years ago and reconstructed by comparing its daughters. The family it founded stretches from Iceland to Bengal and includes Latin and the Romance languages, Greek, the Germanic, Slavic, Baltic, Celtic, Iranian and Indic languages, Albanian, Hittite, Tocharian, and **Armenian**.

Relationship is not proved by a few similar-sounding words. Two unrelated languages can share a word by chance or by borrowing. Relationship is proved by **regular sound correspondences**: when the same sound of the ancestor turns into the same Armenian sound in word after word, and into the same Latin sound in word after word, the match cannot be chance.

> **Definition.** A **language family** is a group of languages descended from one proto-language. A **branch** is a sub-group inside it. Armenian forms a branch of its own: it has no sister language.

## Where Armenian stands

| Branch | Examples | Relation to Armenian |
| --- | --- | --- |
| Armenian | Grabar, Eastern and Western Armenian | the branch itself |
| Greek | Ancient and Modern Greek | closest in several shared innovations |
| Indo-Iranian | Sanskrit, Persian, Kurdish | neighbours; Persian is the source of many loans |
| Italic | Latin, Italian, French | distant cousins |
| Germanic | English, German | distant cousins |
| Slavic | Russian, Ukrainian | distant cousins |

Many scholars group Armenian with Greek and Phrygian in a loose **Balkan-type** cluster, since all three augment past tenses with a prefix (Armenian ե-, Greek ἐ-) and share some vocabulary. The question is still open; what is settled is that Armenian is not a dialect of any other branch.

## Regular correspondences

The table shows inherited words. Note that an Indo-European **p** disappears or becomes **հ** in Armenian, **d** becomes **տ**, **dw** becomes **երկ**, and the word-initial **s** before a vowel is lost.

| Proto-Indo-European | Armenian | Latin | Greek | Sanskrit | English |
| --- | --- | --- | --- | --- | --- |
| *ph₂tḗr | հայր | pater | patḗr | pitā | father |
| *méh₂tēr | մայր | mater | mḗtēr | mātā | mother |
| *bʰréh₂tēr | եղբայր | frater | phrā́tēr | bhrātā | brother |
| *dwóh₁ | երկու | duo | dýo | dvā | two |
| *déḱm̥ | տասն | decem | déka | daśa | ten |
| *h₁néwn̥ | ինն | novem | ennéa | nava | nine |
| *ḱm̥tóm | հարյուր (older) | centum | hekatón | śatam | hundred |
| *gʷʰer- | ջերմ | formus | thermós | gharma | warm |
| *h₂stḗr | աստղ | stella | astḗr | star | star |

The strangest of these is **երկու** from *dwóh₁. The change *dw → երկ looks impossible until you see that it recurs: *dweh₂-ró- «long» gives **երկար**, and *dwei- «fear» gives **երկ-իւղ** in Grabar. Three words with the same odd change make a rule.

## Hübschmann's discovery

Until 1875 Armenian was listed as an **Iranian** language. The reason was honest: the Armenian vocabulary is full of Persian words, since Armenia lived for centuries inside the Persian cultural world. The German scholar **Heinrich Hübschmann** separated two layers of words. One layer, the inherited one, obeyed the Armenian sound laws of the table above. The other, the borrowed one, obeyed Iranian sound laws and kept Iranian shapes. Once the loans were set aside, the remaining core was neither Iranian nor anything else: it was a branch of its own. His paper «Über die Stellung des Armenischen im Kreise der indogermanischen Sprachen» is the birth certificate of Armenian comparative linguistics.

| Word | Inherited or Iranian loan? | Evidence |
| --- | --- | --- |
| հայր | inherited | *p → հ, matches pater |
| աշխարհ | Iranian loan | Middle Persian šahr «land» with Iranian shape |
| ջուր | inherited | regular correspondence with Greek hýdōr |
| պատերազմ | Iranian loan | Iranian compound, keeps պ- |
| բարի | inherited | corresponds to Greek phérō, Latin fero (what is carried, good) |
| դպիր | Iranian loan | Old Persian dipi «writing» |

## Why it matters

Knowing the origin of a word tells you how to spell it, what family of words it belongs to, and sometimes what the ancient Armenians saw in it. **Հայր**, **մայր**, **եղբայր**, **դուստր**, **քույր** are inherited: the family was named before the Armenians were Armenians. **Աշխարհ**, **պատերազմ**, **դպիր**, **զինվոր** are Iranian loans: the state and its army were organised in a Persian-speaking world. The vocabulary is a map of history.

### Exercises

1. Define a language family and explain why similar-sounding words do not prove relationship.
2. Name four branches of the Indo-European family besides Armenian and give one language from each.
3. Which branch is usually considered the closest relative of Armenian, and on what grounds?
4. State the regular Armenian reflex of Indo-European *p and give two words that show it.
5. Explain why երկու, երկար and երկիւղ together prove a sound law rather than a coincidence.
6. What was Hübschmann's method, and what did it change?
7. Sort the words into inherited and Iranian loans: մայր, աշխարհ, տասն, դպիր, աստղ, պատերազմ.
8. In two or three sentences, explain what the inherited vocabulary tells us about Armenian prehistory.

### Answers

1. A group of languages descended from one proto-language. Chance and borrowing can produce isolated similar words; only regular sound correspondences across many words prove descent.
2. For example Italic (Latin), Germanic (English), Slavic (Russian), Indo-Iranian (Persian); also Greek, Celtic, Baltic, Albanian.
3. Greek, because of shared innovations such as the augment in past tenses and some common vocabulary; the grouping is still debated.
4. *p is lost or becomes հ: հայր (pater), հինգ (Latin quinque, Greek pénte), and the lost p in ոտն (Latin pes, pedis).
5. The same unusual change *dw → երկ appears in three different words with different meanings; a repeated change is a law, a single one could be chance.
6. He separated the vocabulary into words obeying Armenian sound laws and words obeying Iranian ones; once the Iranian loans were removed, Armenian proved to be an independent branch.
7. Inherited: մայր, տասն, աստղ. Iranian loans: աշխարհ, դպիր, պատերազմ.
8. The kinship terms, numerals, body parts and basic nature words are inherited, so the speakers already had this core before contact with Persians, Greeks or Semites; the words for state, writing and warfare came later from Iranian, which shows where those institutions were learned.
`,
        hy: `## Ինչն է լեզուները ցեղակից դարձնում

Լեզուները **ցեղակից** են, երբ սերում են մեկ ընդհանուր նախնուց, ինչպես իտալերենը, իսպաներենը և ֆրանսերենը սերում են լատիներենից։ Հայերենի նախնին ոչ մի տեղ գրված չէ․ դա **հնդեվրոպական նախալեզուն** է, որով խոսել են մոտ հինգ-վեց հազար տարի առաջ և որը վերականգնվել է նրա դուստր լեզուները համեմատելով։ Նրա հիմնած ընտանիքը ձգվում է Իսլանդիայից մինչև Բենգալիա և ընդգրկում է լատիներենն ու ռոմանական լեզուները, հունարենը, գերմանական, սլավոնական, բալթյան, կելտական, իրանական և հնդկական լեզուները, ալբաներենը, խեթերենը, թոխարերենը և **հայերենը**։

Ցեղակցությունը չի ապացուցվում մի քանի նման հնչող բառով։ Երկու անկապ լեզու կարող են բառ ունենալ ընդհանուր պատահաբար կամ փոխառությամբ։ Ցեղակցությունն ապացուցվում է **կանոնավոր հնչյունական համապատասխանություններով**․ երբ նախալեզվի նույն հնչյունը բառից բառ դառնում է նույն հայերեն հնչյունը, իսկ լատիներենում՝ բառից բառ նույն լատիներեն հնչյունը, համընկնումը պատահական լինել չի կարող։

> **Սահմանում։** **Լեզվաընտանիքը** մեկ նախալեզվից սերած լեզուների խումբ է։ **Ճյուղը** նրա ներսում գտնվող ենթախումբ է։ Հայերենն առանձին ճյուղ է կազմում․ այն քույր լեզու չունի։

## Որտեղ է կանգնած հայերենը

| Ճյուղ | Օրինակներ | Առնչությունը հայերենին |
| --- | --- | --- |
| Հայկական | գրաբար, արևելահայերեն և արևմտահայերեն | ինքը ճյուղն է |
| Հունական | հին և նոր հունարեն | ամենամոտն է մի քանի ընդհանուր նորամուծություններով |
| Հնդիրանական | սանսկրիտ, պարսկերեն, քրդերեն | հարևաններ, պարսկերենը բազում փոխառությունների աղբյուր է |
| Իտալիկյան | լատիներեն, իտալերեն, ֆրանսերեն | հեռավոր ազգականներ |
| Գերմանական | անգլերեն, գերմաներեն | հեռավոր ազգականներ |
| Սլավոնական | ռուսերեն, ուկրաիներեն | հեռավոր ազգականներ |

Շատ գիտնականներ հայերենը հունարենի և փռյուգերենի հետ միավորում են մեկ ազատ **բալկանյան տիպի** խմբում, քանի որ երեքն էլ անցյալ ժամանակները կազմում են նախամասնիկով (հայերեն ե-, հունարեն ἐ-) և ունեն ընդհանուր բառապաշար։ Հարցը դեռ բաց է, բայց հաստատ է, որ հայերենը ոչ մի այլ ճյուղի բարբառ չէ։

## Կանոնավոր համապատասխանություններ

Աղյուսակում բնիկ բառեր են։ Նկատենք, որ հնդեվրոպական **p**-ն հայերենում անհետանում է կամ դառնում **հ**, **d**-ն դառնում է **տ**, **dw**-ն՝ **երկ**, իսկ ձայնավորից առաջ բառասկզբի **s**-ն ընկնում է։

| Հնդեվրոպական | Հայերեն | Լատիներեն | Հունարեն | Սանսկրիտ | Անգլերեն |
| --- | --- | --- | --- | --- | --- |
| *ph₂tḗr | հայր | pater | patḗr | pitā | father |
| *méh₂tēr | մայր | mater | mḗtēr | mātā | mother |
| *bʰréh₂tēr | եղբայր | frater | phrā́tēr | bhrātā | brother |
| *dwóh₁ | երկու | duo | dýo | dvā | two |
| *déḱm̥ | տասն | decem | déka | daśa | ten |
| *h₁néwn̥ | ինն | novem | ennéa | nava | nine |
| *ḱm̥tóm | հարյուր (հին ձևով) | centum | hekatón | śatam | hundred |
| *gʷʰer- | ջերմ | formus | thermós | gharma | warm |
| *h₂stḗr | աստղ | stella | astḗr | star | star |

Ամենատարօրինակը **երկու**-ն է *dwóh₁-ից։ *dw → երկ փոփոխությունն անհնար է թվում, մինչև տեսնում ես, որ այն կրկնվում է․ *dweh₂-ró- «երկար» տալիս է **երկար**, *dwei- «վախ» գրաբարում՝ **երկիւղ**։ Երեք բառ նույն տարօրինակ փոփոխությամբ արդեն օրենք են։

## Հյուբշմանի հայտնագործությունը

Մինչև 1875 թվականը հայերենը **իրանական** լեզուների շարքում էր։ Պատճառն ազնիվ էր․ հայերենի բառապաշարը լի է պարսկերեն բառերով, քանի որ Հայաստանը դարեր շարունակ ապրել է պարսկական մշակութային աշխարհի ներսում։ Գերմանացի գիտնական **Հայնրիխ Հյուբշմանը** բառերի երկու շերտ առանձնացրեց։ Մեկը՝ բնիկը, ենթարկվում էր վերևի աղյուսակի հայերեն հնչյունական օրենքներին։ Մյուսը՝ փոխառյալը, ենթարկվում էր իրանական օրենքներին և պահում էր իրանական ձևերը։ Երբ փոխառությունները մի կողմ դրվեցին, մնացած միջուկը ոչ իրանական էր, ոչ էլ որևէ այլ բան․ այն առանձին ճյուղ էր։ Նրա «Հայերենի տեղը հնդգերմանական լեզուների շրջանակում» հոդվածը հայ համեմատական լեզվաբանության ծննդականն է։

| Բառ | Բնի՞կ է, թե՞ իրանական փոխառություն | Ապացույց |
| --- | --- | --- |
| հայր | բնիկ | *p → հ, համընկնում է pater-ի հետ |
| աշխարհ | իրանական փոխառություն | միջին պարսկերեն šahr «երկիր»՝ իրանական ձևով |
| ջուր | բնիկ | կանոնավոր համապատասխանություն հունարեն hýdōr-ի հետ |
| պատերազմ | իրանական փոխառություն | իրանական բարդ բառ, պահում է պ-ն |
| բարի | բնիկ | համապատասխանում է հունարեն phérō, լատիներեն fero-ին (այն, ինչ բերվում է՝ բարին) |
| դպիր | իրանական փոխառություն | հին պարսկերեն dipi «գիր» |

## Ինչու է սա կարևոր

Բառի ծագումն իմանալը հուշում է, թե ինչպես գրել այն, ո՛ր բառերի ընտանիքին է պատկանում և երբեմն՝ ինչ են տեսել նրա մեջ հին հայերը։ **Հայր**, **մայր**, **եղբայր**, **դուստր**, **քույր** բնիկ են․ ընտանիքն անվանվել է նախքան հայերը հայ դառնալը։ **Աշխարհ**, **պատերազմ**, **դպիր**, **զինվոր** իրանական փոխառություններ են․ պետությունն ու նրա բանակը կազմակերպվել են պարսկախոս աշխարհում։ Բառապաշարը պատմության քարտեզ է։

### Վարժություններ

1. Սահմանիր լեզվաընտանիքը և բացատրիր, թե ինչու նման հնչող բառերը ցեղակցություն չեն ապացուցում։
2. Հայերենից բացի անվանիր հնդեվրոպական ընտանիքի չորս ճյուղ և յուրաքանչյուրից՝ մեկ լեզու։
3. Ո՞ր ճյուղն է սովորաբար համարվում հայերենի ամենամոտ ազգականը և ի՞նչ հիմքով։
4. Նշիր հնդեվրոպական *p-ի կանոնավոր հայերեն արտացոլումը և բեր երկու բառ, որոնք այն ցույց են տալիս։
5. Բացատրիր, թե ինչու երկու, երկար և երկիւղ բառերը միասին հնչյունական օրենք են ապացուցում, ոչ թե պատահականություն։
6. Ո՞րն էր Հյուբշմանի մեթոդը և ի՞նչ փոխեց այն։
7. Բառերը բաժանիր բնիկների և իրանական փոխառությունների․ մայր, աշխարհ, տասն, դպիր, աստղ, պատերազմ։
8. Երկու-երեք նախադասությամբ բացատրիր, թե ինչ է պատմում բնիկ բառապաշարը հայերի նախապատմության մասին։

### Պատասխաններ

1. Մեկ նախալեզվից սերած լեզուների խումբ է։ Պատահականությունը և փոխառությունը կարող են առանձին նման բառեր ստեղծել․ միայն շատ բառերի միջով անցնող կանոնավոր հնչյունական համապատասխանություններն են ապացուցում ծագումը։
2. Օրինակ՝ իտալիկյան (լատիներեն), գերմանական (անգլերեն), սլավոնական (ռուսերեն), հնդիրանական (պարսկերեն), նաև հունական, կելտական, բալթյան, ալբաներեն։
3. Հունականը՝ ընդհանուր նորամուծությունների պատճառով, ինչպիսիք են անցյալի նախամասնիկը և որոշ ընդհանուր բառապաշարը․ միավորումը դեռ վիճարկվում է։
4. *p-ն ընկնում է կամ դառնում հ․ հայր (pater), հինգ (լատիներեն quinque, հունարեն pénte), ընկած p-ն ոտն-ում (լատիներեն pes, pedis)։
5. Նույն անսովոր *dw → երկ փոփոխությունը հանդիպում է տարբեր իմաստով երեք տարբեր բառում․ կրկնվող փոփոխությունն օրենք է, մեկը կարող էր պատահականություն լինել։
6. Նա բառապաշարը բաժանեց հայերեն հնչյունական օրենքներին ենթարկվող և իրանական օրենքներին ենթարկվող բառերի․ երբ իրանական փոխառությունները հեռացվեցին, հայերենն ինքնուրույն ճյուղ դուրս եկավ։
7. Բնիկ՝ մայր, տասն, աստղ։ Իրանական փոխառություններ՝ աշխարհ, դպիր, պատերազմ։
8. Ազգակցական տերմինները, թվականները, մարմնի մասերը և բնության հիմնական բառերը բնիկ են, ուրեմն խոսողներն այդ միջուկն ունեին դեռ պարսիկների, հույների կամ սեմականների հետ շփվելուց առաջ․ պետության, գրի և պատերազմի բառերը հետո եկան իրանականից, ինչը ցույց է տալիս, թե որտեղ են այդ հաստատությունները սովորել։
`,
        ru: `## Что делает языки родственными

Языки **родственны**, когда происходят от одного общего предка, как итальянский, испанский и французский происходят от латыни. Предок армянского нигде не записан: это **праиндоевропейский язык**, на котором говорили примерно пять-шесть тысяч лет назад и который восстановлен сравнением его потомков. Основанная им семья тянется от Исландии до Бенгалии и включает латынь и романские языки, греческий, германские, славянские, балтийские, кельтские, иранские и индийские языки, албанский, хеттский, тохарский и **армянский**.

Родство не доказывается несколькими похоже звучащими словами. Два неродственных языка могут иметь общее слово случайно или по заимствованию. Родство доказывается **регулярными звуковыми соответствиями**: когда один и тот же звук предка слово за словом превращается в один и тот же армянский звук, а в латыни слово за словом в один и тот же латинский звук, совпадение не может быть случайным.

> **Определение.** **Языковая семья** — группа языков, происходящих от одного праязыка. **Ветвь** — подгруппа внутри неё. Армянский образует собственную ветвь: у него нет языка-сестры.

## Где стоит армянский

| Ветвь | Примеры | Отношение к армянскому |
| --- | --- | --- |
| Армянская | грабар, восточно- и западноармянский | сама ветвь |
| Греческая | древнегреческий и новогреческий | ближайшая по ряду общих новшеств |
| Индоиранская | санскрит, персидский, курдский | соседи; персидский — источник многих заимствований |
| Италийская | латынь, итальянский, французский | дальние родственники |
| Германская | английский, немецкий | дальние родственники |
| Славянская | русский, украинский | дальние родственники |

Многие учёные объединяют армянский с греческим и фригийским в свободную **балканскую** группу, поскольку все три образуют прошедшие времена приставкой (армянское ե-, греческое ἐ-) и имеют общую лексику. Вопрос ещё открыт; твёрдо установлено лишь, что армянский не является диалектом никакой другой ветви.

## Регулярные соответствия

В таблице исконные слова. Заметьте: индоевропейское **p** в армянском исчезает или становится **հ**, **d** становится **տ**, **dw** становится **երկ**, а начальное **s** перед гласным утрачивается.

| Праиндоевропейский | Армянский | Латынь | Греческий | Санскрит | Английский |
| --- | --- | --- | --- | --- | --- |
| *ph₂tḗr | հայր | pater | patḗr | pitā | father |
| *méh₂tēr | մայր | mater | mḗtēr | mātā | mother |
| *bʰréh₂tēr | եղբայր | frater | phrā́tēr | bhrātā | brother |
| *dwóh₁ | երկու | duo | dýo | dvā | two |
| *déḱm̥ | տասն | decem | déka | daśa | ten |
| *h₁néwn̥ | ինն | novem | ennéa | nava | nine |
| *ḱm̥tóm | հարյուր (в древней форме) | centum | hekatón | śatam | hundred |
| *gʷʰer- | ջերմ | formus | thermós | gharma | warm |
| *h₂stḗr | աստղ | stella | astḗr | star | star |

Самое странное здесь — **երկու** из *dwóh₁. Переход *dw → երկ кажется невозможным, пока не увидишь, что он повторяется: *dweh₂-ró- «длинный» даёт **երկար**, а *dwei- «страх» в грабаре даёт **երկիւղ**. Три слова с одним и тем же странным переходом — уже закон.

## Открытие Хюбшмана

До 1875 года армянский числился среди **иранских** языков. Причина была честной: армянская лексика полна персидских слов, поскольку Армения веками жила внутри персидского культурного мира. Немецкий учёный **Генрих Хюбшман** разделил два слоя слов. Один, исконный, подчинялся армянским звуковым законам из таблицы выше. Другой, заимствованный, подчинялся иранским законам и сохранял иранский облик. Когда заимствования были отложены, оставшееся ядро оказалось ни иранским, ни каким-либо ещё: это была самостоятельная ветвь. Его статья «О положении армянского в кругу индогерманских языков» — свидетельство о рождении армянского сравнительного языкознания.

| Слово | Исконное или иранское заимствование? | Свидетельство |
| --- | --- | --- |
| հայր | исконное | *p → հ, совпадает с pater |
| աշխարհ | иранское заимствование | среднеперсидское šahr «страна» в иранском облике |
| ջուր | исконное | регулярное соответствие греческому hýdōr |
| պատերազմ | иранское заимствование | иранское сложное слово, сохраняет պ- |
| բարի | исконное | соответствует греческому phérō, латинскому fero (то, что приносят, — благо) |
| դպիր | иранское заимствование | древнеперсидское dipi «письмо» |

## Почему это важно

Знание происхождения слова подсказывает, как его писать, к какому гнезду слов оно принадлежит и иногда что видели в нём древние армяне. **Հայր**, **մայր**, **եղբայր**, **դուստր**, **քույր** исконны: семья была названа до того, как армяне стали армянами. **Աշխարհ**, **պատերազմ**, **դպիր**, **զինվոր** — иранские заимствования: государство и его войско были устроены в персоязычном мире. Лексика — карта истории.

### Упражнения

1. Дайте определение языковой семьи и объясните, почему похоже звучащие слова не доказывают родства.
2. Назовите четыре ветви индоевропейской семьи помимо армянской и по одному языку из каждой.
3. Какую ветвь обычно считают ближайшим родственником армянского и на каком основании?
4. Укажите регулярный армянский рефлекс индоевропейского *p и приведите два слова, которые его показывают.
5. Объясните, почему երկու, երկար и երկիւղ вместе доказывают звуковой закон, а не совпадение.
6. В чём состоял метод Хюбшмана и что он изменил?
7. Разделите слова на исконные и иранские заимствования: մայր, աշխարհ, տասն, դպիր, աստղ, պատերազմ.
8. В двух-трёх предложениях объясните, что исконная лексика говорит о предыстории армян.

### Ответы

1. Группа языков, происходящих от одного праязыка. Случайность и заимствование могут дать отдельные похожие слова; только регулярные звуковые соответствия во многих словах доказывают происхождение.
2. Например, италийская (латынь), германская (английский), славянская (русский), индоиранская (персидский); также греческая, кельтская, балтийская, албанский.
3. Греческую — из-за общих новшеств, таких как приставка прошедшего времени и часть общей лексики; объединение всё ещё обсуждается.
4. *p утрачивается или становится հ: հայր (pater), հինգ (латинское quinque, греческое pénte), утраченное p в ոտն (латинское pes, pedis).
5. Один и тот же необычный переход *dw → երկ встречается в трёх разных словах с разными значениями; повторяющийся переход — закон, единичный мог быть случайностью.
6. Он разделил лексику на слова, подчиняющиеся армянским звуковым законам, и слова, подчиняющиеся иранским; после удаления иранских заимствований армянский оказался самостоятельной ветвью.
7. Исконные: մայր, տասն, աստղ. Иранские заимствования: աշխարհ, դպիր, պատերազմ.
8. Термины родства, числительные, части тела и основные слова природы исконны, значит, носители имели это ядро ещё до контактов с персами, греками или семитами; слова для государства, письма и войны пришли позже из иранского, что показывает, где были усвоены эти институты.
`,
      },
      [
        q(t("Languages are proved related by", "Լեզուների ցեղակցությունն ապացուցվում է", "Родство языков доказывается"), [
          t("a few similar-sounding words", "մի քանի նման հնչող բառով", "несколькими похожими словами"),
          t("regular sound correspondences across many words", "շատ բառերի միջով անցնող կանոնավոր հնչյունական համապատասխանություններով", "регулярными звуковыми соответствиями во многих словах"),
          t("a shared alphabet", "ընդհանուր այբուբենով", "общим алфавитом"),
        ], 1),
        q(t("Within the Indo-European family, Armenian is", "Հնդեվրոպական ընտանիքում հայերենը", "В индоевропейской семье армянский"), [
          t("a branch of its own", "առանձին ճյուղ է", "самостоятельная ветвь"),
          t("an Iranian dialect", "իրանական բարբառ է", "иранский диалект"),
          t("a Slavic language", "սլավոնական լեզու է", "славянский язык"),
        ], 0),
        q(t("Indo-European *p in inherited Armenian words", "Հնդեվրոպական *p-ն հայերեն բնիկ բառերում", "Индоевропейское *p в исконных армянских словах"), [
          t("stays as պ", "մնում է պ", "остаётся պ"),
          t("becomes բ", "դառնում է բ", "становится բ"),
          t("is lost or becomes հ", "ընկնում է կամ դառնում հ", "утрачивается или становится հ"),
        ], 2),
        q(t("The word երկու comes from *dwóh₁, which is proved by", "Երկու բառը *dwóh₁-ից է, ինչն ապացուցվում է", "Слово երկու восходит к *dwóh₁, что доказывается"), [
          t("the same change in երկար and երկիւղ", "նույն փոփոխությամբ երկար և երկիւղ բառերում", "тем же переходом в երկար и երկիւղ"),
          t("its spelling in Grabar", "գրաբարյան ուղղագրությամբ", "его написанием в грабаре"),
          t("the Persian word for two", "պարսկերեն «երկու» բառով", "персидским словом «два»"),
        ], 0),
        q(t("Before Hübschmann, Armenian was classed as Iranian because", "Մինչև Հյուբշմանը հայերենն իրանական էին համարում, որովհետև", "До Хюбшмана армянский считали иранским, потому что"), [
          t("its alphabet came from Persia", "նրա այբուբենը Պարսկաստանից էր", "его алфавит пришёл из Персии"),
          t("it has a huge layer of Persian loanwords", "այն ունի պարսկերեն փոխառությունների հսկայական շերտ", "в нём огромный слой персидских заимствований"),
          t("it has no inherited words", "այն բնիկ բառեր չունի", "в нём нет исконных слов"),
        ], 1),
        q(t("Which word is an Iranian loan?", "Ո՞ր բառն է իրանական փոխառություն։", "Какое слово — иранское заимствование?"), [
          t("մայր", "մայր", "մայր"),
          t("տասն", "տասն", "տասն"),
          t("աշխարհ", "աշխարհ", "աշխարհ"),
        ], 2),
      ],
    ),
    lesson(
      "grabar",
      ["Grabar: Classical Armenian", "Գրաբար․ դասական հայերեն", "Грабар: классический армянский"],
      {
        en: [
          "Date Grabar and name its first monuments: the Bible translation and the 5th-century historians.",
          "Describe five features of Grabar grammar that Modern Armenian has lost or changed.",
          "Read a short Grabar sentence with a glossary and translate it into Modern Armenian.",
          "Recognise Grabar forms that survive in modern idioms, prayers and proverbs.",
          "Explain why Grabar remained the written language for fourteen centuries.",
        ],
        hy: [
          "Թվագրել գրաբարը և անվանել նրա առաջին հուշարձանները՝ Աստվածաշնչի թարգմանությունը և 5-րդ դարի պատմիչները։",
          "Նկարագրել գրաբարի քերականության հինգ հատկանիշ, որոնք աշխարհաբարը կորցրել կամ փոխել է։",
          "Բառարանի օգնությամբ կարդալ գրաբարյան կարճ նախադասություն և թարգմանել աշխարհաբար։",
          "Ճանաչել գրաբարյան ձևերը, որոնք պահպանվել են ժամանակակից դարձվածքներում, աղոթքներում և առածներում։",
          "Բացատրել, թե ինչու գրաբարը տասնչորս դար մնաց գրավոր լեզու։",
        ],
        ru: [
          "Датировать грабар и назвать его первые памятники: перевод Библии и историков V века.",
          "Описать пять черт грамматики грабара, которые современный армянский утратил или изменил.",
          "Прочитать короткое предложение на грабаре со словариком и перевести его на современный армянский.",
          "Узнавать формы грабара, сохранившиеся в современных идиомах, молитвах и пословицах.",
          "Объяснить, почему грабар оставался письменным языком четырнадцать веков.",
        ],
      },
      {
        en: `## The language of the first books

**Grabar** (գրաբար, «the written one») is the oldest recorded stage of Armenian. It became a written language in 405, when Mesrop Mashtots created the alphabet, and its first and greatest monument is the **translation of the Bible** finished by about 435, which later generations called «the queen of translations». The same generation wrote the first original books: Koriun's «Life of Mashtots», Agathangelos, Pavstos Buzand, Yeghishe, Movses Khorenatsi, Lazar Parpetsi, and the theological «Refutation of the Sects» by Yeznik Koghbatsi.

> **Definition.** **Grabar** is the literary language of the 5th century, fixed by the Bible translation and used as the standard written language of Armenians until the 19th century. The spoken language went on changing beneath it; Grabar did not.

Three periods are usually distinguished:

| Period | Dates | Character |
| --- | --- | --- |
| Classical (golden age) | 5th century | the purest form; Bible, Koriun, Yeghishe, Khorenatsi |
| Post-classical | 6th–8th centuries | Hellenising school: calques of Greek syntax and vocabulary |
| Late Grabar | 9th–19th centuries | increasingly mixed with the spoken language of each era |

## What Grabar grammar looked like

Grabar was a language with a rich inflection, much of which the modern language has simplified.

| Feature | Grabar | Modern Eastern Armenian |
| --- | --- | --- |
| Cases | 7, with a separate **accusative** marked by զ-: զգիրք «the book (object)» | 7 in name, but accusative = nominative; զ- survives only in idioms |
| Definite article | none; demonstratives -ս, -դ, -ն for near, middle, far | the article -ը/-ն |
| Plural | -ք in the nominative: գիրք «books», մարդիկ; oblique -ց: մարդկանց | -եր, -ներ; the old -ք survives in a few words (մարդիկ, կանայք) |
| Present tense | synthetic: գրեմ «I write», գրես, գրէ | periphrastic: գրում եմ |
| Infinitive | -ել, -ալ, -ուլ: գրել, կարդալ, թողուլ | -ել, -ալ; -ուլ is gone (թողնել) |
| Negation | ոչ before the verb: ոչ գիտեմ | prefix չ-: չգիտեմ |
| Word order | verb often first; the subject may follow | subject, object, verb |

The **demonstrative suffixes** are the most useful survival. In Grabar գիրքս means «this book of mine, near me», գիրքդ «that book near you», գիրքն «that book over there». Modern Armenian kept -ս and -դ as possessive articles (գիրքս «my book», գիրքդ «your book») and -ն as the definite article.

## Reading a sentence

From Koriun, on Mashtots after he had created the letters:

> **Եւ ապա ձեռն արկեալ՝ սկսաւ թարգմանել զգիրս Սողոմոնի։**

| Word | Analysis | Meaning |
| --- | --- | --- |
| Եւ | conjunction | and |
| ապա | adverb | then |
| ձեռն արկեալ | idiom, past participle of արկանել «to throw, to put» with ձեռն «hand» | having set his hand (to it) |
| սկսաւ | aorist 3 sg of սկսանիլ | he began |
| թարգմանել | infinitive | to translate |
| զգիրս | զ- + գիր + plural accusative -ս | the books (object) |
| Սողոմոնի | genitive | of Solomon |

Modern Armenian: Եվ ապա ձեռնամուխ լինելով՝ սկսեց թարգմանել Սողոմոնի գրքերը։ The sentence shows the accusative զ-, the plural in -ս, the aorist in -աւ, and the participle in -եալ, all of them changed today.

## Grabar in modern speech

Grabar never fully left. It lives in fixed phrases that every speaker uses without parsing them:

- **ի սրտէ** «from the heart», **ի դէպ** «by the way», **առ այժմ** «for now», **ի վերջոյ** «finally»: Grabar prepositions ի, առ with their cases.
- **յանուն** «in the name of», **ընդ առաջ** «towards», **հանուն** «for the sake of».
- **Հայր մեր որ յերկինս** «Our Father who art in heaven»: the prayer is still said in Grabar.
- **Մեռնիմ քեզ**, **ցաւդ տանեմ**: synthetic present forms in dialect idioms.
- The ending **-ք** in մարդիկ, կանայք, the old plural.

## Why it lasted so long

Grabar stayed the only written language from the 5th to the early 19th century for three reasons. It was the language of the **Bible and the liturgy**, so the Church defended it. It was a **common standard** for Armenians scattered from Poland to India while their dialects drifted apart. And writing was taught in monastic schools where Grabar was the subject. The price was a growing gap: by the 18th century a peasant could no longer understand a sermon. That gap is the story of the next lesson.

### Exercises

1. When and how did Grabar become a written language, and what is its first great monument?
2. Name four 5th-century authors who wrote in Grabar.
3. What did the prefix զ- mark in Grabar, and where does it survive today?
4. Explain the three demonstrative suffixes -ս, -դ, -ն and what each became in Modern Armenian.
5. Give the Grabar and modern forms of «I write» and «I do not know».
6. Translate into Modern Armenian: Ոչ գիտեմ զճանապարհն։
7. Find the Grabar element in each: ի սրտէ, առ այժմ, մարդիկ, Հայր մեր.
8. Give three reasons why Grabar remained the written language for fourteen centuries, and name the cost.

### Answers

1. In 405, when Mashtots created the alphabet; the Bible translation completed by about 435.
2. Koriun, Agathangelos, Yeghishe, Movses Khorenatsi (also Pavstos Buzand, Lazar Parpetsi, Yeznik Koghbatsi).
3. The accusative, the direct object: զգիրք «the book» as object. Today only in idioms and in words like զգալ, զանազան.
4. -ս near the speaker, -դ near the listener, -ն far from both; -ս and -դ became the possessive articles «my» and «your», -ն the definite article.
5. գրեմ → գրում եմ; ոչ գիտեմ → չգիտեմ.
6. Ես ճանապարհը չգիտեմ։ (ոչ → չ-, զ- accusative dropped, -ն kept as article)
7. ի սրտէ: preposition ի with ablative in -է; առ այժմ: preposition առ; մարդիկ: nominative plural in -ք; Հայր մեր: possessive մեր after the noun, Grabar word order.
8. It was the language of the Bible and liturgy; it was a common standard for a scattered people; schooling was monastic and taught it. The cost was that the written language became unintelligible to ordinary speakers.
`,
        hy: `## Առաջին գրքերի լեզուն

**Գրաբարը** («գրավորը») հայերենի ամենահին գրառված փուլն է։ Այն գրավոր լեզու դարձավ 405 թվականին, երբ Մեսրոպ Մաշտոցն ստեղծեց այբուբենը, և նրա առաջին ու մեծագույն հուշարձանը **Աստվածաշնչի թարգմանությունն** է, որն ավարտվեց մոտ 435 թվականին և որը հետագա սերունդներն անվանեցին «թարգմանությունների թագուհի»։ Նույն սերունդը գրեց առաջին ինքնուրույն գրքերը․ Կորյունի «Վարք Մաշտոցի», Ագաթանգեղոս, Փավստոս Բուզանդ, Եղիշե, Մովսես Խորենացի, Ղազար Փարպեցի և Եզնիկ Կողբացու աստվածաբանական «Եղծ աղանդոց»-ը։

> **Սահմանում։** **Գրաբարը** 5-րդ դարի գրական լեզուն է, որն ամրացվել է Աստվածաշնչի թարգմանությամբ և որպես հայերի գրավոր չափանիշ գործածվել է մինչև 19-րդ դար։ Խոսակցական լեզուն նրա տակ շարունակեց փոխվել․ գրաբարը՝ ոչ։

Սովորաբար տարբերվում է երեք շրջան․

| Շրջան | Թվականներ | Բնույթ |
| --- | --- | --- |
| Դասական (ոսկեդար) | 5-րդ դար | ամենամաքուր ձևը, Աստվածաշունչ, Կորյուն, Եղիշե, Խորենացի |
| Հետդասական | 6–8-րդ դարեր | հունաբան դպրոց․ հունարեն շարահյուսության և բառապաշարի պատճենումներ |
| Ուշ գրաբար | 9–19-րդ դարեր | ավելի ու ավելի խառնված յուրաքանչյուր դարաշրջանի խոսակցական լեզվի հետ |

## Ինչպիսին էր գրաբարի քերականությունը

Գրաբարը հարուստ թեքման լեզու էր, որի մեծ մասը ժամանակակից լեզուն պարզեցրել է։

| Հատկանիշ | Գրաբար | Ժամանակակից արևելահայերեն |
| --- | --- | --- |
| Հոլովներ | 7, առանձին **հայցականով**, որը նշվում է զ-ով․ զգիրք «գիրքը (խնդիր)» | անունով 7, բայց հայցականը = ուղղական․ զ-ն մնում է միայն դարձվածքներում |
| Որոշիչ հոդ | չկա․ ցուցական -ս, -դ, -ն՝ մոտիկ, միջին, հեռու | -ը/-ն հոդը |
| Հոգնակի | ուղղականում -ք․ գիրք «գրքեր», մարդիկ, թեք հոլովներում -ց․ մարդկանց | -եր, -ներ․ հին -ք-ն մնում է մի քանի բառում (մարդիկ, կանայք) |
| Ներկա ժամանակ | համադրական․ գրեմ «գրում եմ», գրես, գրէ | վերլուծական․ գրում եմ |
| Անորոշ դերբայ | -ել, -ալ, -ուլ․ գրել, կարդալ, թողուլ | -ել, -ալ․ -ուլ-ը վերացել է (թողնել) |
| Ժխտում | ոչ բայից առաջ․ ոչ գիտեմ | չ- նախածանց․ չգիտեմ |
| Բառերի կարգ | բայը հաճախ առաջին է, ենթական կարող է հետևել | ենթակա, խնդիր, բայ |

**Ցուցական վերջածանցներն** ամենաօգտակար մնացուկն են։ Գրաբարում գիրքս նշանակում է «իմ այս գիրքը, ինձ մոտ», գիրքդ՝ «քեզ մոտ գտնվող այն գիրքը», գիրքն՝ «այն գիրքը այնտեղ»։ Ժամանակակից հայերենը -ս և -դ պահեց որպես ստացական հոդեր (գիրքս «իմ գիրքը», գիրքդ «քո գիրքը»), իսկ -ն՝ որպես որոշիչ հոդ։

## Նախադասություն կարդալիս

Կորյունից, Մաշտոցի մասին՝ տառերն ստեղծելուց հետո․

> **Եւ ապա ձեռն արկեալ՝ սկսաւ թարգմանել զգիրս Սողոմոնի։**

| Բառ | Վերլուծություն | Իմաստ |
| --- | --- | --- |
| Եւ | շաղկապ | և |
| ապա | մակբայ | ապա |
| ձեռն արկեալ | դարձվածք, արկանել «նետել, դնել» բայի անցյալ դերբայը ձեռն «ձեռք» բառի հետ | ձեռնամուխ լինելով |
| սկսաւ | սկսանիլ բայի անցյալ կատարյալ, 3-րդ դեմք եզակի | սկսեց |
| թարգմանել | անորոշ դերբայ | թարգմանել |
| զգիրս | զ- + գիր + հոգնակի հայցական -ս | գրքերը (խնդիր) |
| Սողոմոնի | սեռական | Սողոմոնի |

Աշխարհաբար․ Եվ ապա ձեռնամուխ լինելով՝ սկսեց թարգմանել Սողոմոնի գրքերը։ Նախադասությունը ցույց է տալիս զ- հայցականը, -ս հոգնակին, -աւ անցյալ կատարյալը և -եալ դերբայը, որոնք այսօր բոլորը փոխված են։

## Գրաբարը ժամանակակից խոսքում

Գրաբարն երբեք լրիվ չհեռացավ։ Այն ապրում է կայուն արտահայտություններում, որոնք յուրաքանչյուր խոսող գործածում է առանց վերլուծելու․

- **ի սրտէ**, **ի դէպ**, **առ այժմ**, **ի վերջոյ**․ գրաբարյան ի, առ նախդիրներն իրենց հոլովներով։
- **յանուն**, **ընդ առաջ**, **հանուն**։
- **Հայր մեր որ յերկինս**․ աղոթքը դեռ գրաբար է ասվում։
- **Մեռնիմ քեզ**, **ցաւդ տանեմ**․ համադրական ներկայի ձևեր բարբառային դարձվածքներում։
- **-ք** վերջավորությունը մարդիկ, կանայք բառերում՝ հին հոգնակին։

## Ինչու այդքան երկար տևեց

Գրաբարը 5-րդ դարից մինչև 19-րդ դարի սկիզբը միակ գրավոր լեզուն մնաց երեք պատճառով։ Այն **Աստվածաշնչի և պատարագի** լեզուն էր, ուստի եկեղեցին պաշտպանում էր այն։ Այն **ընդհանուր չափանիշ** էր Լեհաստանից մինչև Հնդկաստան սփռված հայերի համար, մինչ նրանց բարբառները հեռանում էին իրարից։ Եվ գիրը սովորեցնում էին վանական դպրոցներում, որտեղ գրաբարն էր առարկան։ Գինը մեծացող անջրպետն էր․ 18-րդ դարում գյուղացին այլևս քարոզը չէր հասկանում։ Այդ անջրպետը հաջորդ դասի պատմությունն է։

### Վարժություններ

1. Ե՞րբ և ինչպե՞ս գրաբարը գրավոր լեզու դարձավ և ո՞րն է նրա առաջին մեծ հուշարձանը։
2. Անվանիր 5-րդ դարի չորս հեղինակ, որոնք գրաբար են գրել։
3. Ի՞նչ էր նշում զ- նախամասնիկը գրաբարում և որտե՞ղ է այն պահպանվել այսօր։
4. Բացատրիր -ս, -դ, -ն ցուցական վերջածանցները և թե ինչ դարձավ ամեն մեկն աշխարհաբարում։
5. Բեր «գրում եմ» և «չգիտեմ» բառերի գրաբարյան և ժամանակակից ձևերը։
6. Թարգմանիր աշխարհաբար․ Ոչ գիտեմ զճանապարհն։
7. Գտիր գրաբարյան տարրը յուրաքանչյուրում․ ի սրտէ, առ այժմ, մարդիկ, Հայր մեր։
8. Բեր երեք պատճառ, թե ինչու գրաբարը տասնչորս դար մնաց գրավոր լեզու, և անվանիր գինը։

### Պատասխաններ

1. 405 թվականին, երբ Մաշտոցն ստեղծեց այբուբենը․ Աստվածաշնչի թարգմանությունը, որն ավարտվեց մոտ 435 թվականին։
2. Կորյուն, Ագաթանգեղոս, Եղիշե, Մովսես Խորենացի (նաև Փավստոս Բուզանդ, Ղազար Փարպեցի, Եզնիկ Կողբացի)։
3. Հայցականը՝ ուղիղ խնդիրը․ զգիրք «գիրքը» որպես խնդիր։ Այսօր միայն դարձվածքներում և զգալ, զանազան բառերում։
4. -ս՝ խոսողին մոտ, -դ՝ լսողին մոտ, -ն՝ երկուսից հեռու․ -ս-ն և -դ-ն դարձան «իմ» և «քո» ստացական հոդեր, -ն՝ որոշիչ հոդ։
5. գրեմ → գրում եմ, ոչ գիտեմ → չգիտեմ։
6. Ես ճանապարհը չգիտեմ։ (ոչ → չ-, զ- հայցականն ընկել է, -ն-ը պահպանվել է որպես հոդ)
7. ի սրտէ․ ի նախդիր -է բացառականով, առ այժմ․ առ նախդիր, մարդիկ․ -ք ուղղական հոգնակի, Հայր մեր․ մեր ստացականը գոյականից հետո՝ գրաբարյան բառակարգ։
8. Աստվածաշնչի և պատարագի լեզուն էր, սփռված ժողովրդի ընդհանուր չափանիշն էր, դպրոցը վանական էր և այն էր սովորեցնում։ Գինն այն էր, որ գրավոր լեզուն անհասկանալի դարձավ սովորական խոսողների համար։
`,
        ru: `## Язык первых книг

**Грабар** (գրաբար, «письменный») — древнейшая записанная ступень армянского языка. Он стал письменным в 405 году, когда Месроп Маштоц создал алфавит, а его первый и величайший памятник — **перевод Библии**, завершённый около 435 года, который позднейшие поколения назвали «царицей переводов». То же поколение написало первые оригинальные книги: «Житие Маштоца» Корюна, Агатангелос, Фавстос Бузанд, Егише, Мовсес Хоренаци, Лазар Парпеци и богословское «Опровержение сект» Езника Кохбаци.

> **Определение.** **Грабар** — литературный язык V века, закреплённый переводом Библии и служивший стандартным письменным языком армян до XIX века. Разговорный язык продолжал меняться под ним; грабар — нет.

Обычно выделяют три периода:

| Период | Даты | Характер |
| --- | --- | --- |
| Классический (золотой век) | V век | чистейшая форма; Библия, Корюн, Егише, Хоренаци |
| Послеклассический | VI–VIII века | грекофильская школа: кальки греческого синтаксиса и лексики |
| Поздний грабар | IX–XIX века | всё сильнее смешан с разговорным языком каждой эпохи |

## Какой была грамматика грабара

Грабар был языком с богатым словоизменением, большую часть которого современный язык упростил.

| Черта | Грабар | Современный восточноармянский |
| --- | --- | --- |
| Падежи | 7, с отдельным **винительным**, отмеченным զ-: զգիրք «книгу» | 7 по названию, но винительный = именительному; զ- живёт лишь в идиомах |
| Определённый артикль | нет; указательные -ս, -դ, -ն для ближнего, среднего, дальнего | артикль -ը/-ն |
| Множественное число | -ք в именительном: գիրք «книги», մարդիկ; в косвенных -ց: մարդկանց | -եր, -ներ; старое -ք лишь в нескольких словах (մարդիկ, կանայք) |
| Настоящее время | синтетическое: գրեմ «пишу», գրես, գրէ | аналитическое: գրում եմ |
| Инфинитив | -ել, -ալ, -ուլ: գրել, կարդալ, թողուլ | -ել, -ալ; -ուլ исчез (թողնել) |
| Отрицание | ոչ перед глаголом: ոչ գիտեմ | приставка չ-: չգիտեմ |
| Порядок слов | глагол часто первый; подлежащее может следовать | подлежащее, дополнение, глагол |

**Указательные суффиксы** — самый полезный пережиток. В грабаре գիրքս значит «эта моя книга, рядом со мной», գիրքդ — «та книга рядом с тобой», գիրքն — «та книга там». Современный армянский сохранил -ս и -դ как притяжательные артикли (գիրքս «моя книга», գիրքդ «твоя книга»), а -ն — как определённый артикль.

## Читаем предложение

Из Корюна, о Маштоце после создания букв:

> **Եւ ապա ձեռն արկեալ՝ սկսաւ թարգմանել զգիրս Սողոմոնի։**

| Слово | Разбор | Значение |
| --- | --- | --- |
| Եւ | союз | и |
| ապա | наречие | затем |
| ձեռն արկեալ | идиома, причастие прошедшего времени от արկանել «бросать, класть» с ձեռն «рука» | приложив руку |
| սկսաւ | аорист 3 л. ед. ч. от սկսանիլ | он начал |
| թարգմանել | инфинитив | переводить |
| զգիրս | զ- + գիր + винительный множественного -ս | книги (дополнение) |
| Սողոմոնի | родительный | Соломона |

Современный армянский: Եվ ապա ձեռնամուխ լինելով՝ սկսեց թարգմանել Սողոմոնի գրքերը։ Предложение показывает винительный զ-, множественное на -ս, аорист на -աւ и причастие на -եալ — всё это сегодня изменилось.

## Грабар в современной речи

Грабар никогда не ушёл полностью. Он живёт в устойчивых выражениях, которые каждый говорящий употребляет, не разбирая их:

- **ի սրտէ** «от сердца», **ի դէպ** «кстати», **առ այժմ** «пока», **ի վերջոյ** «наконец»: предлоги грабара ի, առ со своими падежами.
- **յանուն** «во имя», **ընդ առաջ** «навстречу», **հանուն** «ради».
- **Հայր մեր որ յերկինս** «Отче наш, сущий на небесах»: молитва до сих пор читается на грабаре.
- **Մեռնիմ քեզ**, **ցաւդ տանեմ**: синтетические формы настоящего в диалектных идиомах.
- Окончание **-ք** в մարդիկ, կանայք — старое множественное число.

## Почему он продержался так долго

Грабар оставался единственным письменным языком с V до начала XIX века по трём причинам. Он был языком **Библии и литургии**, и Церковь его защищала. Он был **общим стандартом** для армян, рассеянных от Польши до Индии, пока их диалекты расходились. И письму учили в монастырских школах, где грабар был предметом. Ценой стал растущий разрыв: к XVIII веку крестьянин уже не понимал проповеди. Этот разрыв — история следующего урока.

### Упражнения

1. Когда и как грабар стал письменным языком и каков его первый великий памятник?
2. Назовите четырёх авторов V века, писавших на грабаре.
3. Что отмечала приставка զ- в грабаре и где она сохранилась сегодня?
4. Объясните три указательных суффикса -ս, -դ, -ն и во что каждый превратился в современном армянском.
5. Приведите формы грабара и современные формы для «пишу» и «не знаю».
6. Переведите на современный армянский: Ոչ գիտեմ զճանապարհն։
7. Найдите элемент грабара в каждом: ի սրտէ, առ այժմ, մարդիկ, Հայր մեր.
8. Назовите три причины, по которым грабар оставался письменным языком четырнадцать веков, и назовите цену.

### Ответы

1. В 405 году, когда Маштоц создал алфавит; перевод Библии, завершённый около 435 года.
2. Корюн, Агатангелос, Егише, Мовсес Хоренаци (также Фавстос Бузанд, Лазар Парпеци, Езник Кохбаци).
3. Винительный падеж, прямое дополнение: զգիրք «книгу». Сегодня только в идиомах и в словах вроде զգալ, զանազան.
4. -ս около говорящего, -դ около слушающего, -ն далеко от обоих; -ս и -դ стали притяжательными артиклями «мой» и «твой», -ն — определённым артиклем.
5. գրեմ → գրում եմ; ոչ գիտեմ → չգիտեմ.
6. Ես ճանապարհը չգիտեմ։ (ոչ → չ-, винительный զ- отброшен, -ն сохранён как артикль)
7. ի սրտէ: предлог ի с отложительным на -է; առ այժմ: предлог առ; մարդիկ: именительный множественного на -ք; Հայր մեր: притяжательное մեր после существительного, порядок слов грабара.
8. Он был языком Библии и литургии; общим стандартом рассеянного народа; школа была монастырской и учила ему. Цена — письменный язык стал непонятен обычным носителям.
`,
      },
      [
        q(t("Grabar became a written language in", "Գրաբարը գրավոր լեզու դարձավ", "Грабар стал письменным языком в"), [
          t("301, with the adoption of Christianity", "301 թվականին՝ քրիստոնեության ընդունմամբ", "301 году, с принятием христианства"),
          t("405, with the creation of the alphabet", "405 թվականին՝ այբուբենի ստեղծմամբ", "405 году, с созданием алфавита"),
          t("the 11th century", "11-րդ դարում", "XI веке"),
        ], 1),
        q(t("The prefix զ- in Grabar marked", "Գրաբարում զ- նախամասնիկը նշում էր", "Приставка զ- в грабаре отмечала"), [
          t("the accusative, the direct object", "հայցականը՝ ուղիղ խնդիրը", "винительный падеж, прямое дополнение"),
          t("the plural", "հոգնակին", "множественное число"),
          t("the past tense", "անցյալ ժամանակը", "прошедшее время"),
        ], 0),
        q(t("The modern possessive articles -ս and -դ come from", "Ժամանակակից -ս և -դ ստացական հոդերը ծագում են", "Современные притяжательные артикли -ս и -դ происходят от"), [
          t("Persian loanwords", "պարսկերեն փոխառություններից", "персидских заимствований"),
          t("the Grabar plural endings", "գրաբարի հոգնակիի վերջավորություններից", "окончаний множественного числа грабара"),
          t("the Grabar demonstrative suffixes", "գրաբարի ցուցական վերջածանցներից", "указательных суффиксов грабара"),
        ], 2),
        q(t("Grabar «գրեմ» corresponds to modern", "Գրաբարյան «գրեմ»-ին համապատասխանում է ժամանակակից", "Грабарскому «գրեմ» соответствует современное"), [
          t("գրում եմ", "գրում եմ", "գրում եմ"),
          t("գրեցի", "գրեցի", "գրեցի"),
          t("կգրեմ", "կգրեմ", "կգրեմ"),
        ], 0),
        q(t("Which phrase keeps a Grabar preposition with its case?", "Ո՞ր արտահայտությունն է պահում գրաբարյան նախդիրն իր հոլովով։", "Какое выражение сохраняет предлог грабара с его падежом?"), [
          t("գրում եմ", "գրում եմ", "գրում եմ"),
          t("ի սրտէ", "ի սրտէ", "ի սրտէ"),
          t("չգիտեմ", "չգիտեմ", "չգիտեմ"),
        ], 1),
        q(t("Grabar remained the written language for fourteen centuries mainly because", "Գրաբարը տասնչորս դար գրավոր լեզու մնաց գլխավորապես, որովհետև", "Грабар оставался письменным языком четырнадцать веков главным образом потому, что"), [
          t("the spoken language did not change", "խոսակցական լեզուն չէր փոխվում", "разговорный язык не менялся"),
          t("nobody wrote books", "ոչ ոք գրքեր չէր գրում", "никто не писал книг"),
          t("it was the language of the Bible, the liturgy and the schools", "այն Աստվածաշնչի, պատարագի և դպրոցների լեզուն էր", "он был языком Библии, литургии и школ"),
        ], 2),
      ],
    ),
    lesson(
      "middle-modern",
      ["Middle Armenian and the rise of Ashkharhabar", "Միջին հայերեն և աշխարհաբարի ձևավորում", "Среднеармянский и становление ашхарабара"],
      {
        en: [
          "Date Middle Armenian to the Cilician kingdom and name its main written monuments.",
          "List the grammatical changes that separate Middle Armenian from Grabar: the article, the periphrastic present, the new plural.",
          "Describe the 18th–19th-century debate between defenders of Grabar and supporters of Ashkharhabar.",
          "Explain the role of Abovyan's «Wounds of Armenia» and of the periodical press in making Ashkharhabar a literary language.",
          "Trace one word or form through the three stages: Grabar, Middle Armenian, Modern Armenian.",
        ],
        hy: [
          "Թվագրել միջին հայերենը Կիլիկյան թագավորությամբ և անվանել նրա գլխավոր գրավոր հուշարձանները։",
          "Թվարկել քերականական փոփոխությունները, որոնք միջին հայերենը տարբերում են գրաբարից․ հոդը, վերլուծական ներկան, նոր հոգնակին։",
          "Նկարագրել 18–19-րդ դարերի վեճը գրաբարի պաշտպանների և աշխարհաբարի կողմնակիցների միջև։",
          "Բացատրել Աբովյանի «Վերք Հայաստանի»-ի և պարբերական մամուլի դերն աշխարհաբարը գրական լեզու դարձնելու գործում։",
          "Հետևել մեկ բառի կամ ձևի երեք փուլով․ գրաբար, միջին հայերեն, աշխարհաբար։",
        ],
        ru: [
          "Датировать среднеармянский Киликийским царством и назвать его главные письменные памятники.",
          "Перечислить грамматические изменения, отделяющие среднеармянский от грабара: артикль, аналитическое настоящее, новое множественное число.",
          "Описать спор XVIII–XIX веков между защитниками грабара и сторонниками ашхарабара.",
          "Объяснить роль «Ран Армении» Абовяна и периодической печати в превращении ашхарабара в литературный язык.",
          "Проследить одно слово или форму через три ступени: грабар, среднеармянский, современный армянский.",
        ],
      },
      {
        en: `## The language of Cilicia

While Grabar stayed frozen in the books, the spoken language went on moving. From the **11th to the 16th century**, and above all in the **Armenian Kingdom of Cilicia** (1198–1375), the spoken language of the court, the law and the markets was written down for the first time. Linguists call this stage **Middle Armenian** (միջին հայերեն).

Its monuments are practical books rather than histories: the law code of **Mkhitar Gosh** and its Cilician revision by **Smbat Sparapet**, the medical works of **Mkhitar Heratsi** («Consolation in Fevers», 1184) and **Amirdovlat Amasiatsi**, the chronicle of Smbat, and the poetry of **Frik**, **Kostandin Yerznkatsi** and **Hovhannes Tlkurantsi**. A doctor writing for other doctors, a judge writing for litigants, had to be understood; that is why these authors left Grabar.

> **Definition.** **Middle Armenian** is the written language of the 11th–16th centuries, based on the spoken Armenian of Cilicia and later of other regions, standing between Grabar and the modern standards.

## What changed

| Feature | Grabar | Middle Armenian | Modern Armenian |
| --- | --- | --- | --- |
| Definite article | none | -ն/-ը appears: տունն, գիրքը | -ը/-ն |
| Present tense | գրեմ | կու գրեմ (with the particle կու) | Eastern գրում եմ; Western կը գրեմ |
| Plural | -ք: գիրք | -եր, -ներ spread: գրքեր, տներ | -եր, -ներ |
| Accusative | զ-: զգիրք | զ- fades; the object is unmarked | unmarked |
| Future | no separate form, subjunctive | պիտի + verb | Eastern կ- + verb; Western պիտի |
| Consonants | բ, գ, դ voiced | in Cilician speech voiced and voiceless swap places: բ sounds like պ | Western keeps the swap; Eastern does not |
| Loanwords | Greek, Iranian | French, Latin, Arabic, Turkish from the Crusader and Mamluk world: պարոն (baron), սիր (sire), ֆլուրի (florin) | the Cilician ones stay: պարոն, ֆլուրի is gone |

Here is Frik in the 13th century, complaining to God:

> Այլ դու չես լսեր զիմ խօսքս, / ու ես քեզ կու պաղատիմ։

Note **կու պաղատիմ** «I beseech», the new present with կու, and **չես լսեր**, the negative built with չ- and the participle in -եր. Both are the ancestors of Western Armenian forms still used today.

## The long argument

By the 18th century the gap between the written Grabar and the spoken dialects was so wide that a sermon in Grabar needed interpretation. The **Mkhitarist** fathers in Venice, the greatest philologists of the age, polished Grabar and wrote grammars and dictionaries for it; they also, from 1810 onward, began printing in a plain Ashkharhabar for ordinary readers. The spoken language of the educated classes, in two centres, Constantinople and Tiflis, was called **Ashkharhabar** (աշխարհաբար, «the worldly, secular language»).

The argument of the 1850s–1870s, the «grapaykar» or war of the written language, had two camps.

| Camp | Argument | Leaders |
| --- | --- | --- |
| For Grabar | Grabar is pure, ancient and common to all Armenians; the dialects are corrupt and divided | the Church hierarchy, conservative schoolmasters, the journal «Masis» at first |
| For Ashkharhabar | a language nobody speaks cannot educate a nation; a literature must speak to its readers | Khachatur Abovyan, Mikael Nalbandyan, Stepanos Nazaryan and his journal «Hyusisapayl», in the West the journal «Masis» later and Nikoghayos Zoraian |

Nalbandyan put it in one sentence: a language that lives only in books is a dead language, and a dead language cannot raise a living people.

## Abovyan and the press

**Khachatur Abovyan** wrote «Վերք Հայաստանի» («Wounds of Armenia») in 1841, in the dialect of Kanaker and Yerevan, and said in his preface that he had chosen the language the people spoke so that the people could read him. The novel was printed only in 1858, after his disappearance, but it became the founding book of Eastern Armenian literature. In Constantinople the same step was taken by the newspapers: a daily paper in Grabar sold nothing, so **«Masis»**, **«Meghu»** and the schoolbooks of the 1850s–60s went over to the spoken language of the capital. By the 1870s both Ashkharhabars had grammars (Arsen Aytenian's «Critical grammar of Ashkharhabar», 1866, for the Western; Stepan Palasanian's for the Eastern) and a literature. Grabar withdrew into the Church.

## One word through three stages

Take «I love».

| Stage | Form | Notes |
| --- | --- | --- |
| Grabar | սիրեմ | synthetic present |
| Middle Armenian | կու սիրեմ | the particle կու marks the present indicative |
| Western Armenian | կը սիրեմ | կու has shortened to կը |
| Eastern Armenian | սիրում եմ | a new construction: participle in -ում plus the auxiliary |

The two modern standards are therefore not two corruptions of one original but two different continuations of Middle Armenian, each choosing one of the options that the spoken language had developed.

### Exercises

1. Give the dates and the political setting of Middle Armenian.
2. Name three Middle Armenian authors and say what kind of books they wrote.
3. Why did doctors and lawgivers abandon Grabar earlier than historians?
4. Compare the present tense in Grabar, Middle Armenian, Western and Eastern Armenian using the verb գրել.
5. What is the meaning of the word աշխարհաբար, and what does it tell us about how the new language was seen?
6. Summarise the argument of each side in the dispute over Grabar.
7. What role did «Wounds of Armenia» play, and why does its preface matter?
8. Explain why Eastern and Western Armenian are better described as two continuations of Middle Armenian than as two corruptions of Grabar.

### Answers

1. The 11th–16th centuries, with its centre in the Armenian Kingdom of Cilicia (1198–1375).
2. Mkhitar Gosh and Smbat Sparapet (law codes), Mkhitar Heratsi and Amirdovlat Amasiatsi (medicine), Frik, Kostandin Yerznkatsi, Hovhannes Tlkurantsi (poetry).
3. Their readers had to understand and apply the text at once; a history could be read slowly by the learned.
4. գրեմ; կու գրեմ; կը գրեմ; գրում եմ.
5. «The worldly, secular language», as opposed to the language of the Church; the new language was seen first as the lay language, then as the national one.
6. For Grabar: purity, antiquity, unity of all Armenians. For Ashkharhabar: a language nobody speaks cannot educate a nation; literature must reach its readers.
7. It was the first major literary work in the spoken Eastern language and became the founding book of modern Eastern Armenian literature; the preface states the principle that the people must be able to read what is written for them.
8. Middle Armenian already had the article, the new plural, the particle կու and the պիտի future; Western kept կու as կը and պիտի, Eastern developed -ում եմ and կ-. Each standard selected and developed features that the spoken language already had.
`,
        hy: `## Կիլիկիայի լեզուն

Մինչ գրաբարը սառած էր գրքերում, խոսակցական լեզուն շարունակում էր շարժվել։ **11-րդից 16-րդ դարերում**, և ամենից առաջ **Կիլիկյան հայկական թագավորությունում** (1198–1375), արքունիքի, օրենքի և շուկաների խոսակցական լեզուն առաջին անգամ գրի առնվեց։ Լեզվաբաններն այդ փուլն անվանում են **միջին հայերեն**։

Նրա հուշարձանները ոչ թե պատմություններ են, այլ գործնական գրքեր․ **Մխիթար Գոշի** Դատաստանագիրքը և նրա կիլիկյան վերամշակումը **Սմբատ Սպարապետի** կողմից, **Մխիթար Հերացու** («Ջերմանց մխիթարություն», 1184) և **Ամիրդովլաթ Ամասիացու** բժշկական աշխատությունները, Սմբատի տարեգրությունը և **Ֆրիկի**, **Կոստանդին Երզնկացու** և **Հովհաննես Թլկուրանցու** բանաստեղծությունները։ Բժիշկը, որ գրում է բժիշկների համար, դատավորը, որ գրում է դատվողների համար, պետք է հասկանալի լիներ․ դրա համար այս հեղինակները թողեցին գրաբարը։

> **Սահմանում։** **Միջին հայերենը** 11–16-րդ դարերի գրավոր լեզուն է, որը հիմնված է Կիլիկիայի, հետո նաև այլ շրջանների խոսակցական հայերենի վրա և կանգնած է գրաբարի ու ժամանակակից գրական տարբերակների միջև։

## Ինչ փոխվեց

| Հատկանիշ | Գրաբար | Միջին հայերեն | Աշխարհաբար |
| --- | --- | --- | --- |
| Որոշիչ հոդ | չկա | հայտնվում է -ն/-ը․ տունն, գիրքը | -ը/-ն |
| Ներկա ժամանակ | գրեմ | կու գրեմ (կու մասնիկով) | արևելահայերեն գրում եմ, արևմտահայերեն կը գրեմ |
| Հոգնակի | -ք․ գիրք | տարածվում են -եր, -ներ․ գրքեր, տներ | -եր, -ներ |
| Հայցական | զ-․ զգիրք | զ-ն մարում է, խնդիրն աննշան է | աննշան |
| Ապառնի | առանձին ձև չկա, ըղձական | պիտի + բայ | արևելահայերեն կ- + բայ, արևմտահայերեն պիտի |
| Բաղաձայններ | բ, գ, դ ձայնեղ | կիլիկյան խոսքում ձայնեղներն ու խուլերը տեղ են փոխում․ բ-ն հնչում է պ | արևմտահայերենը պահում է փոխանակումը, արևելահայերենը՝ ոչ |
| Փոխառություններ | հունարեն, իրանական | ֆրանսերեն, լատիներեն, արաբերեն, թուրքերեն խաչակիրների և մամլուքների աշխարհից․ պարոն (baron), սիր (sire), ֆլուրի (florin) | կիլիկյանները մնում են․ պարոն, ֆլուրին անհետացել է |

Ահա Ֆրիկը 13-րդ դարում՝ Աստծուն գանգատվելիս․

> Այլ դու չես լսեր զիմ խօսքս, / ու ես քեզ կու պաղատիմ։

Նկատենք **կու պաղատիմ**-ը՝ նոր ներկան կու-ով, և **չես լսեր**-ը՝ չ-ով և -եր դերբայով կազմված ժխտականը։ Երկուսն էլ այսօր էլ գործածվող արևմտահայերեն ձևերի նախնիներն են։

## Երկար վեճը

18-րդ դարում գրավոր գրաբարի և խոսակցական բարբառների անջրպետն այնքան լայն էր, որ գրաբար քարոզը թարգմանիչ էր պահանջում։ Վենետիկի **Մխիթարյան** հայրերը՝ դարաշրջանի մեծագույն բանասերները, հղկեցին գրաբարը և նրա համար քերականություններ ու բառարաններ գրեցին, բայց նաև 1810 թվականից սկսեցին հասարակ ընթերցողի համար պարզ աշխարհաբարով տպագրել։ Կրթված խավի խոսակցական լեզուն երկու կենտրոնում՝ Կոստանդնուպոլսում և Թիֆլիսում, կոչվեց **աշխարհաբար**՝ «աշխարհիկ լեզու»։

1850–1870-ականների վեճը՝ գրապայքարը, երկու ճամբար ուներ։

| Ճամբար | Փաստարկ | Առաջնորդներ |
| --- | --- | --- |
| Գրաբարի կողմ | գրաբարը մաքուր է, հին և ընդհանուր բոլոր հայերի համար, բարբառներն աղավաղված են ու բաժանված | եկեղեցական վերնախավ, պահպանողական դպրոցավարներ, սկզբում «Մասիս» ամսագիրը |
| Աշխարհաբարի կողմ | լեզուն, որով ոչ ոք չի խոսում, ազգ չի կարող կրթել, գրականությունը պետք է խոսի իր ընթերցողի հետ | Խաչատուր Աբովյան, Միքայել Նալբանդյան, Ստեփանոս Նազարյան և նրա «Հյուսիսափայլ»-ը, արևմուտքում՝ ավելի ուշ «Մասիս»-ը և Նիկողայոս Զորայան |

Նալբանդյանը մեկ նախադասությամբ ասաց․ լեզուն, որն ապրում է միայն գրքերում, մեռած լեզու է, իսկ մեռած լեզուն կենդանի ժողովուրդ չի կարող դաստիարակել։

## Աբովյանը և մամուլը

**Խաչատուր Աբովյանը** «Վերք Հայաստանի»-ն գրեց 1841 թվականին Քանաքեռի և Երևանի բարբառով և առաջաբանում ասաց, որ ընտրել է ժողովրդի խոսած լեզուն, որպեսզի ժողովուրդը կարողանա իրեն կարդալ։ Վեպը տպագրվեց միայն 1858 թվականին՝ նրա անհետանալուց հետո, բայց դարձավ արևելահայ գրականության հիմնադիր գիրքը։ Կոստանդնուպոլսում նույն քայլն արեցին թերթերը․ գրաբար օրաթերթը չէր վաճառվում, ուստի **«Մասիս»**-ը, **«Մեղու»**-ն և 1850–60-ականների դասագրքերն անցան մայրաքաղաքի խոսակցական լեզվին։ 1870-ականներին երկու աշխարհաբարն էլ ունեին քերականություն (Արսեն Այտընյանի «Քննական քերականություն աշխարհաբար լեզվի», 1866, արևմտահայերենի համար, Ստեփան Պալասանյանինը՝ արևելահայերենի) և գրականություն։ Գրաբարը քաշվեց եկեղեցի։

## Մեկ բառն երեք փուլով

Վերցնենք «սիրում եմ»-ը։

| Փուլ | Ձև | Նշումներ |
| --- | --- | --- |
| Գրաբար | սիրեմ | համադրական ներկա |
| Միջին հայերեն | կու սիրեմ | կու մասնիկը նշում է սահմանական ներկան |
| Արևմտահայերեն | կը սիրեմ | կու-ն կարճացել է կը |
| Արևելահայերեն | սիրում եմ | նոր կառույց․ -ում դերբայ և օժանդակ բայ |

Ուրեմն երկու ժամանակակից տարբերակները մեկ բնագրի երկու աղավաղում չեն, այլ միջին հայերենի երկու տարբեր շարունակություն, որոնցից յուրաքանչյուրն ընտրել է խոսակցական լեզվի մշակած հնարավորություններից մեկը։

### Վարժություններ

1. Նշիր միջին հայերենի թվականները և քաղաքական միջավայրը։
2. Անվանիր միջին հայերենի երեք հեղինակ և ասա, թե ինչ տեսակի գրքեր են գրել։
3. Ինչու՞ բժիշկներն ու օրենսդիրները գրաբարը թողեցին ավելի վաղ, քան պատմիչները։
4. Համեմատիր ներկա ժամանակը գրաբարում, միջին հայերենում, արևմտահայերենում և արևելահայերենում՝ գրել բայով։
5. Ի՞նչ է նշանակում աշխարհաբար բառը և ի՞նչ է այն ասում նոր լեզվի ընկալման մասին։
6. Ամփոփիր գրաբարի շուրջ վեճի յուրաքանչյուր կողմի փաստարկը։
7. Ի՞նչ դեր խաղաց «Վերք Հայաստանի»-ն և ինչու՞ է կարևոր նրա առաջաբանը։
8. Բացատրիր, թե ինչու արևելահայերենն ու արևմտահայերենն ավելի ճիշտ է նկարագրել որպես միջին հայերենի երկու շարունակություն, քան գրաբարի երկու աղավաղում։

### Պատասխաններ

1. 11–16-րդ դարեր, կենտրոնով Կիլիկյան հայկական թագավորությունում (1198–1375)։
2. Մխիթար Գոշ և Սմբատ Սպարապետ (դատաստանագրքեր), Մխիթար Հերացի և Ամիրդովլաթ Ամասիացի (բժշկություն), Ֆրիկ, Կոստանդին Երզնկացի, Հովհաննես Թլկուրանցի (պոեզիա)։
3. Նրանց ընթերցողները պետք է անմիջապես հասկանային և կիրառեին տեքստը, իսկ պատմությունը կարող էին դանդաղ կարդալ ուսյալները։
4. գրեմ, կու գրեմ, կը գրեմ, գրում եմ։
5. «Աշխարհիկ լեզու»՝ ի հակադրություն եկեղեցու լեզվի․ նոր լեզուն սկզբում ընկալվում էր որպես աշխարհականների լեզու, ապա՝ ազգայինը։
6. Գրաբարի կողմ․ մաքրություն, հնություն, բոլոր հայերի միասնություն։ Աշխարհաբարի կողմ․ լեզուն, որով ոչ ոք չի խոսում, ազգ չի կարող կրթել, գրականությունը պետք է հասնի իր ընթերցողին։
7. Այն արևելահայ խոսակցական լեզվով առաջին խոշոր գրական երկն էր և դարձավ ժամանակակից արևելահայ գրականության հիմնադիր գիրքը․ առաջաբանը շարադրում է այն սկզբունքը, որ ժողովուրդը պետք է կարողանա կարդալ իր համար գրվածը։
8. Միջին հայերենն արդեն ուներ հոդը, նոր հոգնակին, կու մասնիկը և պիտի ապառնին․ արևմտահայերենը պահեց կու-ն որպես կը և պիտի-ն, արևելահայերենը մշակեց -ում եմ-ը և կ-ն։ Յուրաքանչյուր տարբերակ ընտրեց և զարգացրեց այն, ինչ խոսակցական լեզուն արդեն ուներ։
`,
        ru: `## Язык Киликии

Пока грабар застыл в книгах, разговорный язык продолжал двигаться. С **XI по XVI век**, и прежде всего в **Киликийском армянском царстве** (1198–1375), разговорный язык двора, закона и рынков впервые был записан. Лингвисты называют эту ступень **среднеармянским** (միջին հայերեն).

Его памятники — практические книги, а не истории: Судебник **Мхитара Гоша** и его киликийская переработка **Смбатом Спарапетом**, медицинские труды **Мхитара Гераци** («Утешение при лихорадках», 1184) и **Амирдовлата Амасиаци**, хроника Смбата и поэзия **Фрика**, **Костандина Ерзнкаци** и **Ованеса Тлкуранци**. Врач, пишущий для врачей, судья, пишущий для тяжущихся, должен был быть понят; поэтому эти авторы оставили грабар.

> **Определение.** **Среднеармянский** — письменный язык XI–XVI веков, основанный на разговорном армянском Киликии, а затем и других областей, стоящий между грабаром и современными стандартами.

## Что изменилось

| Черта | Грабар | Среднеармянский | Современный армянский |
| --- | --- | --- | --- |
| Определённый артикль | нет | появляется -ն/-ը: տունն, գիրքը | -ը/-ն |
| Настоящее время | գրեմ | կու գրեմ (с частицей կու) | восточный գրում եմ; западный կը գրեմ |
| Множественное число | -ք: գիրք | распространяются -եր, -ներ: գրքեր, տներ | -եր, -ներ |
| Винительный | զ-: զգիրք | զ- угасает; дополнение не маркировано | не маркировано |
| Будущее | отдельной формы нет, сослагательное | պիտի + глагол | восточный կ- + глагол; западный պիտի |
| Согласные | բ, գ, դ звонкие | в киликийской речи звонкие и глухие меняются местами: բ звучит как պ | западный сохраняет мену; восточный нет |
| Заимствования | греческие, иранские | французские, латинские, арабские, турецкие из мира крестоносцев и мамлюков: պարոն (baron), սիր (sire), ֆլուրի (florin) | киликийские остаются: պարոն; ֆլուրի исчезло |

Вот Фрик в XIII веке, жалующийся Богу:

> Այլ դու չես լսեր զիմ խօսքս, / ու ես քեզ կու պաղատիմ։

Заметьте **կու պաղատիմ** «умоляю», новое настоящее с կու, и **չես լսեր**, отрицание с չ- и причастием на -եր. Обе формы — предки западноармянских форм, живущих до сих пор.

## Долгий спор

К XVIII веку разрыв между письменным грабаром и разговорными диалектами стал так велик, что проповедь на грабаре требовала толкования. Отцы-**мхитаристы** в Венеции, величайшие филологи эпохи, отшлифовали грабар и написали для него грамматики и словари; но с 1810 года они же начали печатать для простого читателя на простом ашхарабаре. Разговорный язык образованных слоёв в двух центрах, Константинополе и Тифлисе, назвали **ашхарабаром** (աշխարհաբար, «мирской, светский язык»).

Спор 1850–1870-х годов, «грапайкар», война за письменный язык, имел два лагеря.

| Лагерь | Довод | Лидеры |
| --- | --- | --- |
| За грабар | грабар чист, древен и общ для всех армян; диалекты испорчены и разобщены | церковная иерархия, консервативные учителя, вначале журнал «Масис» |
| За ашхарабар | язык, на котором никто не говорит, не может воспитать народ; литература должна говорить с читателем | Хачатур Абовян, Микаэл Налбандян, Степанос Назарян и его журнал «Юсисапайл», на западе позднее «Масис» и Никогайос Зораян |

Налбандян выразил это одной фразой: язык, живущий только в книгах, — мёртвый язык, а мёртвый язык не может воспитать живой народ.

## Абовян и печать

**Хачатур Абовян** написал «Վերք Հայաստանի» («Раны Армении») в 1841 году на диалекте Канакера и Еревана и сказал в предисловии, что выбрал язык, на котором говорит народ, чтобы народ мог его читать. Роман был напечатан лишь в 1858 году, после его исчезновения, но стал основополагающей книгой восточноармянской литературы. В Константинополе тот же шаг сделали газеты: ежедневная газета на грабаре не продавалась, и **«Масис»**, **«Мегу»** и учебники 1850–60-х перешли на разговорный язык столицы. К 1870-м оба ашхарабара имели грамматики («Критическая грамматика ашхарабара» Арсена Айтыняна, 1866, для западного; грамматика Степана Паласаняна для восточного) и литературу. Грабар отступил в Церковь.

## Одно слово через три ступени

Возьмём «люблю».

| Ступень | Форма | Примечания |
| --- | --- | --- |
| Грабар | սիրեմ | синтетическое настоящее |
| Среднеармянский | կու սիրեմ | частица կու отмечает изъявительное настоящее |
| Западноармянский | կը սիրեմ | կու сократилось до կը |
| Восточноармянский | սիրում եմ | новая конструкция: причастие на -ում плюс вспомогательный глагол |

Два современных стандарта, таким образом, не два искажения одного оригинала, а два разных продолжения среднеармянского, каждое из которых выбрало одну из возможностей, развитых разговорным языком.

### Упражнения

1. Назовите даты и политическую обстановку среднеармянского.
2. Назовите трёх среднеармянских авторов и скажите, какие книги они писали.
3. Почему врачи и законодатели отказались от грабара раньше историков?
4. Сравните настоящее время в грабаре, среднеармянском, западном и восточном армянском на глаголе գրել.
5. Что означает слово աշխարհաբար и что оно говорит о восприятии нового языка?
6. Кратко изложите довод каждой стороны в споре о грабаре.
7. Какую роль сыграли «Раны Армении» и почему важно предисловие?
8. Объясните, почему восточный и западный армянский правильнее описывать как два продолжения среднеармянского, чем как два искажения грабара.

### Ответы

1. XI–XVI века, с центром в Киликийском армянском царстве (1198–1375).
2. Мхитар Гош и Смбат Спарапет (судебники), Мхитар Гераци и Амирдовлат Амасиаци (медицина), Фрик, Костандин Ерзнкаци, Ованес Тлкуранци (поэзия).
3. Их читатели должны были сразу понять и применить текст; историю учёные могли читать медленно.
4. գրեմ; կու գրեմ; կը գրեմ; գրում եմ.
5. «Мирской, светский язык», в противоположность языку Церкви; новый язык воспринимался сначала как язык мирян, затем как национальный.
6. За грабар: чистота, древность, единство всех армян. За ашхарабар: язык, на котором никто не говорит, не может воспитать народ; литература должна доходить до читателя.
7. Это было первое крупное литературное произведение на разговорном восточном языке, ставшее основополагающей книгой современной восточноармянской литературы; предисловие формулирует принцип: народ должен уметь читать то, что для него написано.
8. Среднеармянский уже имел артикль, новое множественное, частицу կու и будущее с պիտի; западный сохранил կու как կը и պիտի, восточный развил -ում եմ и կ-. Каждый стандарт отобрал и развил черты, которые разговорный язык уже имел.
`,
      },
      [
        q(t("Middle Armenian is the written language of", "Միջին հայերենը գրավոր լեզուն է", "Среднеармянский — письменный язык"), [
          t("the 5th century", "5-րդ դարի", "V века"),
          t("the 11th–16th centuries, above all Cilicia", "11–16-րդ դարերի, առաջին հերթին Կիլիկիայի", "XI–XVI веков, прежде всего Киликии"),
          t("the Soviet period", "խորհրդային շրջանի", "советского периода"),
        ], 1),
        q(t("Which authors wrote in Middle Armenian?", "Ո՞ր հեղինակներն են գրել միջին հայերենով։", "Какие авторы писали на среднеармянском?"), [
          t("Koriun and Yeghishe", "Կորյունը և Եղիշեն", "Корюн и Егише"),
          t("Mkhitar Gosh, Mkhitar Heratsi, Frik", "Մխիթար Գոշը, Մխիթար Հերացին, Ֆրիկը", "Мхитар Гош, Мхитар Гераци, Фрик"),
          t("Abovyan and Nalbandyan", "Աբովյանը և Նալբանդյանը", "Абовян и Налбандян"),
        ], 1),
        q(t("The Middle Armenian present «կու գրեմ» continues today as", "Միջին հայերենի «կու գրեմ» ներկան այսօր շարունակվում է որպես", "Среднеармянское настоящее «կու գրեմ» продолжается сегодня как"), [
          t("Western Armenian կը գրեմ", "արևմտահայերեն կը գրեմ", "западноармянское կը գրեմ"),
          t("Grabar գրեմ", "գրաբարյան գրեմ", "грабарское գրեմ"),
          t("Eastern Armenian գրեցի", "արևելահայերեն գրեցի", "восточноармянское գրեցի"),
        ], 0),
        q(t("The word աշխարհաբար means", "Աշխարհաբար բառը նշանակում է", "Слово աշխարհաբար означает"), [
          t("the ancient language", "հին լեզու", "древний язык"),
          t("the language of the Church", "եկեղեցու լեզու", "язык Церкви"),
          t("the worldly, secular language", "աշխարհիկ լեզու", "мирской, светский язык"),
        ], 2),
        q(t("«Wounds of Armenia» was written in", "«Վերք Հայաստանի»-ն գրվել է", "«Раны Армении» написаны на"), [
          t("Grabar", "գրաբար", "грабаре"),
          t("the spoken dialect of Yerevan and Kanaker", "Երևանի և Քանաքեռի խոսակցական բարբառով", "разговорном диалекте Еревана и Канакера"),
          t("Western Armenian", "արևմտահայերեն", "западноармянском"),
        ], 1),
        q(t("The supporters of Ashkharhabar argued that", "Աշխարհաբարի կողմնակիցները պնդում էին, որ", "Сторонники ашхарабара утверждали, что"), [
          t("a language nobody speaks cannot educate a nation", "լեզուն, որով ոչ ոք չի խոսում, ազգ չի կարող կրթել", "язык, на котором никто не говорит, не может воспитать народ"),
          t("Grabar should be taught in all schools", "գրաբարը պետք է դասավանդվի բոլոր դպրոցներում", "грабар следует преподавать во всех школах"),
          t("the dialects should be forbidden", "բարբառները պետք է արգելվեն", "диалекты следует запретить"),
        ], 0),
      ],
    ),
    lesson(
      "eastern-western",
      ["Eastern and Western Armenian", "Արևելահայերեն և արևմտահայերեն", "Восточноармянский и западноармянский"],
      {
        en: [
          "Explain how two literary standards arose from the political division of the Armenians in the 19th century.",
          "List the main phonetic differences: the consonant shift in Western Armenian and the three series of Eastern Armenian stops.",
          "Compare the verb systems: the present, the future and the negative in both standards.",
          "Recognise typical Western Armenian words and forms in a text and give their Eastern equivalents.",
          "Describe where each standard is used today and why Western Armenian is listed as endangered.",
        ],
        hy: [
          "Բացատրել, թե ինչպես 19-րդ դարում հայերի քաղաքական բաժանումից երկու գրական տարբերակ ծնվեց։",
          "Թվարկել հիմնական հնչյունական տարբերությունները․ բաղաձայնների տեղաշարժն արևմտահայերենում և արևելահայերենի պայթականների երեք շարքը։",
          "Համեմատել բայական համակարգերը․ ներկան, ապառնին և ժխտականն երկու տարբերակներում։",
          "Տեքստում ճանաչել տիպիկ արևմտահայերեն բառեր և ձևեր և բերել դրանց արևելահայերեն համարժեքները։",
          "Նկարագրել, թե որտեղ է այսօր գործածվում յուրաքանչյուր տարբերակը և ինչու է արևմտահայերենը վտանգված լեզուների ցանկում։",
        ],
        ru: [
          "Объяснить, как из политического разделения армян в XIX веке возникли два литературных стандарта.",
          "Перечислить главные фонетические различия: сдвиг согласных в западноармянском и три ряда смычных в восточноармянском.",
          "Сравнить глагольные системы: настоящее, будущее и отрицание в обоих стандартах.",
          "Узнавать в тексте типичные западноармянские слова и формы и давать их восточные эквиваленты.",
          "Описать, где сегодня используется каждый стандарт и почему западноармянский числится среди языков под угрозой.",
        ],
      },
      {
        en: `## One people, two capitals

In the 19th century the Armenians lived in two empires. The eastern part, from Yerevan to Tiflis and Baku, was Russian after 1828; the western part, from Constantinople to Van, was Ottoman. Each had its own cultural capital, its own schools, newspapers and printing houses, and each built its literary language on the dialect of its capital.

| | Eastern Armenian | Western Armenian |
| --- | --- | --- |
| Base dialect | Ararat plain (Yerevan) | Constantinople |
| Cultural centre in the 19th century | Tiflis, then Yerevan | Constantinople, then Paris and Beirut |
| First grammar | Stepan Palasanian, 1870 | Arsen Aytenian, 1866 |
| Founding writers | Abovyan, Nalbandyan, Raffi, Sundukyan | Durian, Paronyan, Zohrab, Varuzhan, Siamanto |
| Today | Republic of Armenia, Artsakh, Iran, Russia and the post-Soviet diaspora | Lebanon, Syria, USA, France, Argentina, Istanbul; the whole post-1915 diaspora |
| Orthography | reformed (1940) in Armenia; classical in Iran | classical |

> **Definition.** A **literary standard** is a codified variety with its own grammar, dictionary and schools. Eastern and Western Armenian are two standards of **one language**: speakers understand each other after a short adjustment, and the written forms differ mostly in spelling and verb morphology.

## Sounds

The largest difference is the consonants. Grabar had three series of stops: voiced (բ դ գ ձ ջ), voiceless (պ տ կ ծ ճ) and aspirated (փ թ ք ց չ). Eastern Armenian keeps all three. Western Armenian has merged two series and **shifted** them: the old voiced became voiceless aspirated, the old voiceless became voiced.

| Letter | Eastern pronunciation | Western pronunciation | Example |
| --- | --- | --- | --- |
| բ | b | pʰ | բարի: Eastern «bari», Western «pari» |
| պ | p | b | պատ: Eastern «pat», Western «bad» |
| փ | pʰ | pʰ | փայտ: both «pʰayt» |
| դ | d | tʰ | դուռ: Eastern «dur», Western «tʰur» |
| տ | t | d | տուն: Eastern «tun», Western «dun» |
| գ | g | kʰ | գիրք: Eastern «girkʰ», Western «kʰirkʰ» |
| կ | k | g | կատու: Eastern «katu», Western «gadu» |

So the name Պետրոս is «Petros» in Yerevan and «Bedros» in Beirut; Տիգրան is «Tigran» and «Dikran». The spelling is the same; only the voice has moved. Western Armenian also lost the distinction between ո and օ in some positions and pronounces the letter ը more often between consonants.

## The verb

| Form | Eastern | Western |
| --- | --- | --- |
| Present | գրում եմ | կը գրեմ |
| Imperfect | գրում էի | կը գրէի |
| Future | կգրեմ | պիտի գրեմ |
| Negative present | չեմ գրում | չեմ գրեր |
| Negative future | չեմ գրի | պիտի չգրեմ |
| Perfect | գրել եմ | գրած եմ |
| Infinitive with «to want» | ուզում եմ գրել | կ՚ուզեմ գրել |

The Western forms are the direct heirs of Middle Armenian (կու գրեմ → կը գրեմ, պիտի գրեմ), while the Eastern present with -ում is an innovation of the Ararat dialects. The Western perfect uses the participle in -ած, the Eastern the one in -ել.

## Words

Many everyday words differ, often because the East borrowed from Russian and the West from French and Turkish, or because each chose a different Armenian word.

| Eastern | Western | Meaning |
| --- | --- | --- |
| հիմա | հիմա, այժմ | now |
| այստեղ | հոս | here |
| այնտեղ | հոն | there |
| ինչպես | ինչպէս | how |
| սենյակ | սենեակ | room |
| մեքենա | ինքնաշարժ | car |
| թեյ | թէյ | tea |
| շատ լավ | շատ աղէկ | very good |
| ապրել | ապրիլ | to live |
| կարող եմ | կրնամ | I can |
| պատասխանել | պատասխանել | to answer |

Note that many «differences» are only spelling: սենյակ/սենեակ and թեյ/թէյ are the same word in reformed and classical orthography.

## Two standards today

Eastern Armenian is the state language of the Republic of Armenia, taught in every school, used by parliament, television and the courts, and spoken natively by about three million people in Armenia and millions more in Russia, Iran and Georgia. Western Armenian lost its homeland in 1915. It survived in the schools of Beirut, Aleppo, Istanbul, Paris and Los Angeles, and it produced a great literature in exile; but a language with no state, no television and no village children learning it in the street is fragile. In 2010 UNESCO listed Western Armenian as **definitely endangered**. Armenian schools in the diaspora, the Mkhitarist congregation, and newer programmes in Armenia itself are working to keep it alive. For a speaker of Eastern Armenian, reading Western Armenian is the easiest way to double one's literature.

### Exercises

1. Explain in two sentences why there are two literary standards of Armenian.
2. Name the base dialect and the first grammar of each standard.
3. How is the name Գևորգ pronounced in Yerevan and in Beirut? Explain the difference.
4. Give the Western Armenian equivalents of the Eastern forms գրում եմ, կգրեմ, չեմ գրում.
5. Which standard is closer to Middle Armenian in its present tense, and why?
6. Translate into Eastern Armenian: Հոս շատ աղէկ է, կրնամ ապրիլ հոս։
7. Which of these pairs differ only in spelling, and which are different words: սենյակ/սենեակ, այստեղ/հոս, թեյ/թէյ, մեքենա/ինքնաշարժ?
8. Why is Western Armenian classed as endangered, and what is being done about it?

### Answers

1. In the 19th century the Armenians lived in two empires, Russian and Ottoman, each with its own cultural capital; each capital's dialect, Yerevan's and Constantinople's, became the base of a written standard.
2. Eastern: Ararat dialect, Palasanian's grammar of 1870. Western: Constantinople dialect, Aytenian's grammar of 1866.
3. Yerevan «Gevorg», Beirut «Kevork»: in Western Armenian the old voiced գ has become voiceless aspirated.
4. կը գրեմ, պիտի գրեմ, չեմ գրեր.
5. Western: կը գրեմ continues Middle Armenian կու գրեմ, while the Eastern -ում եմ is a later innovation.
6. Այստեղ շատ լավ է, կարող եմ ապրել այստեղ։
7. Spelling only: սենյակ/սենեակ, թեյ/թէյ. Different words: այստեղ/հոս, մեքենա/ինքնաշարժ.
8. It has no state, no homeland population and few children learning it as a first language since 1915; diaspora schools, the Mkhitarists and programmes in Armenia teach it, and UNESCO's listing in 2010 drew attention to it.
`,
        hy: `## Մեկ ժողովուրդ, երկու մայրաքաղաք

19-րդ դարում հայերն ապրում էին երկու կայսրությունում։ Արևելյան մասը՝ Երևանից մինչև Թիֆլիս և Բաքու, 1828 թվականից ռուսական էր, արևմտյանը՝ Կոստանդնուպոլսից մինչև Վան, օսմանյան։ Յուրաքանչյուրն ուներ իր մշակութային մայրաքաղաքը, իր դպրոցները, թերթերը և տպարանները, և յուրաքանչյուրն իր գրական լեզուն կառուցեց իր մայրաքաղաքի բարբառի վրա։

| | Արևելահայերեն | Արևմտահայերեն |
| --- | --- | --- |
| Հիմք բարբառ | Արարատյան դաշտ (Երևան) | Կոստանդնուպոլիս |
| 19-րդ դարի մշակութային կենտրոն | Թիֆլիս, ապա Երևան | Կոստանդնուպոլիս, ապա Փարիզ և Բեյրութ |
| Առաջին քերականություն | Ստեփան Պալասանյան, 1870 | Արսեն Այտընյան, 1866 |
| Հիմնադիր գրողներ | Աբովյան, Նալբանդյան, Րաֆֆի, Սունդուկյան | Դուրյան, Պարոնյան, Զոհրապ, Վարուժան, Սիամանթո |
| Այսօր | Հայաստանի Հանրապետություն, Արցախ, Իրան, Ռուսաստան և հետխորհրդային սփյուռք | Լիբանան, Սիրիա, ԱՄՆ, Ֆրանսիա, Արգենտինա, Ստամբուլ, ամբողջ հետ-1915 սփյուռքը |
| Ուղղագրություն | բարեփոխված (1940) Հայաստանում, դասական՝ Իրանում | դասական |

> **Սահմանում։** **Գրական տարբերակը** կանոնարկված լեզվական տարբերակ է՝ իր քերականությամբ, բառարանով և դպրոցներով։ Արևելահայերենն ու արևմտահայերենը **մեկ լեզվի** երկու տարբերակ են․ խոսողները կարճ հարմարվելուց հետո հասկանում են միմյանց, իսկ գրավոր ձևերը տարբերվում են հիմնականում ուղղագրությամբ և բայի ձևաբանությամբ։

## Հնչյուններ

Ամենամեծ տարբերությունը բաղաձայններն են։ Գրաբարն ուներ պայթականների երեք շարք․ ձայնեղ (բ դ գ ձ ջ), խուլ (պ տ կ ծ ճ) և շնչեղ խուլ (փ թ ք ց չ)։ Արևելահայերենը պահում է բոլոր երեքը։ Արևմտահայերենն երկու շարք միաձուլել և **տեղաշարժել** է․ հին ձայնեղները դարձել են շնչեղ խուլ, հին խուլերը՝ ձայնեղ։

| Տառ | Արևելահայ արտասանություն | Արևմտահայ արտասանություն | Օրինակ |
| --- | --- | --- | --- |
| բ | b | pʰ | բարի․ արևելահայ «բարի», արևմտահայ «փարի» |
| պ | p | b | պատ․ արևելահայ «պատ», արևմտահայ «բադ» |
| փ | pʰ | pʰ | փայտ․ երկուսում էլ «փայտ» |
| դ | d | tʰ | դուռ․ արևելահայ «դուռ», արևմտահայ «թուռ» |
| տ | t | d | տուն․ արևելահայ «տուն», արևմտահայ «դուն» |
| գ | g | kʰ | գիրք․ արևելահայ «գիրք», արևմտահայ «քիրք» |
| կ | k | g | կատու․ արևելահայ «կատու», արևմտահայ «գադու» |

Այսպես Պետրոս անունն Երևանում «Պետրոս» է, Բեյրութում՝ «Բեդրոս», Տիգրանը՝ «Տիգրան» և «Դիկրան»։ Գրությունը նույնն է, միայն ձայնն է տեղաշարժվել։ Արևմտահայերենը նաև որոշ դիրքերում կորցրել է ո-ի և օ-ի տարբերությունը և բաղաձայնների միջև ավելի հաճախ է արտասանում ը։

## Բայը

| Ձև | Արևելահայերեն | Արևմտահայերեն |
| --- | --- | --- |
| Ներկա | գրում եմ | կը գրեմ |
| Անցյալ անկատար | գրում էի | կը գրէի |
| Ապառնի | կգրեմ | պիտի գրեմ |
| Ժխտական ներկա | չեմ գրում | չեմ գրեր |
| Ժխտական ապառնի | չեմ գրի | պիտի չգրեմ |
| Վաղակատար | գրել եմ | գրած եմ |
| Անորոշ «ուզել»-ի հետ | ուզում եմ գրել | կ՚ուզեմ գրել |

Արևմտահայ ձևերը միջին հայերենի ուղիղ ժառանգներն են (կու գրեմ → կը գրեմ, պիտի գրեմ), մինչդեռ արևելահայ -ում ներկան Արարատյան բարբառների նորամուծություն է։ Արևմտահայ վաղակատարը -ած դերբայով է, արևելահայը՝ -ել։

## Բառեր

Շատ առօրյա բառեր տարբեր են, հաճախ որովհետև արևելքը փոխառել է ռուսերենից, իսկ արևմուտքը՝ ֆրանսերենից և թուրքերենից, կամ որովհետև յուրաքանչյուրն ընտրել է հայերեն այլ բառ։

| Արևելահայերեն | Արևմտահայերեն | Իմաստ |
| --- | --- | --- |
| հիմա | հիմա, այժմ | այժմ |
| այստեղ | հոս | այստեղ |
| այնտեղ | հոն | այնտեղ |
| ինչպես | ինչպէս | ինչպես |
| սենյակ | սենեակ | սենյակ |
| մեքենա | ինքնաշարժ | ավտոմեքենա |
| թեյ | թէյ | թեյ |
| շատ լավ | շատ աղէկ | շատ լավ |
| ապրել | ապրիլ | ապրել |
| կարող եմ | կրնամ | կարող եմ |
| պատասխանել | պատասխանել | պատասխանել |

Նկատենք, որ շատ «տարբերություններ» միայն ուղղագրական են․ սենյակ/սենեակ և թեյ/թէյ նույն բառն են բարեփոխված և դասական ուղղագրությամբ։

## Երկու տարբերակն այսօր

Արևելահայերենը Հայաստանի Հանրապետության պետական լեզուն է, դասավանդվում է ամեն դպրոցում, գործածվում է խորհրդարանում, հեռուստատեսությունում և դատարաններում, մայրենի է մոտ երեք միլիոն մարդու համար Հայաստանում և ևս միլիոնների համար Ռուսաստանում, Իրանում և Վրաստանում։ Արևմտահայերենը 1915 թվականին կորցրեց իր հայրենիքը։ Այն ապրեց Բեյրութի, Հալեպի, Ստամբուլի, Փարիզի և Լոս Անջելեսի դպրոցներում և աքսորում մեծ գրականություն ստեղծեց, բայց լեզուն, որը չունի պետություն, հեռուստատեսություն և փողոցում այն սովորող գյուղական երեխաներ, փխրուն է։ 2010 թվականին ՅՈՒՆԵՍԿՕ-ն արևմտահայերենը ներառեց **անկասկած վտանգված** լեզուների ցանկում։ Սփյուռքի հայկական դպրոցները, Մխիթարյան միաբանությունը և նոր ծրագրերը հենց Հայաստանում աշխատում են այն կենդանի պահել։ Արևելահայերենի խոսողի համար արևմտահայերեն կարդալն իր գրականությունը կրկնապատկելու ամենահեշտ ճանապարհն է։

### Վարժություններ

1. Երկու նախադասությամբ բացատրիր, թե ինչու հայերենն ունի երկու գրական տարբերակ։
2. Անվանիր յուրաքանչյուր տարբերակի հիմք բարբառը և առաջին քերականությունը։
3. Ինչպե՞ս է արտասանվում Գևորգ անունն Երևանում և Բեյրութում։ Բացատրիր տարբերությունը։
4. Բեր գրում եմ, կգրեմ, չեմ գրում արևելահայ ձևերի արևմտահայ համարժեքները։
5. Ո՞ր տարբերակն է ներկա ժամանակով ավելի մոտ միջին հայերենին և ինչու՞։
6. Թարգմանիր արևելահայերեն․ Հոս շատ աղէկ է, կրնամ ապրիլ հոս։
7. Այս զույգերից որո՞նք են տարբերվում միայն ուղղագրությամբ և որո՞նք են տարբեր բառեր․ սենյակ/սենեակ, այստեղ/հոս, թեյ/թէյ, մեքենա/ինքնաշարժ։
8. Ինչու՞ է արևմտահայերենը համարվում վտանգված և ի՞նչ է արվում դրա դեմ։

### Պատասխաններ

1. 19-րդ դարում հայերն ապրում էին երկու կայսրությունում՝ ռուսական և օսմանյան, յուրաքանչյուրն իր մշակութային մայրաքաղաքով․ յուրաքանչյուր մայրաքաղաքի բարբառը՝ Երևանինը և Կոստանդնուպոլսինը, գրական տարբերակի հիմք դարձավ։
2. Արևելահայերեն․ Արարատյան բարբառ, Պալասանյանի 1870 թվականի քերականություն։ Արևմտահայերեն․ Կոստանդնուպոլսի բարբառ, Այտընյանի 1866 թվականի քերականություն։
3. Երևան՝ «Գևորգ», Բեյրութ՝ «Քևորք»․ արևմտահայերենում հին ձայնեղ գ-ն դարձել է շնչեղ խուլ։
4. կը գրեմ, պիտի գրեմ, չեմ գրեր։
5. Արևմտահայերենը․ կը գրեմ-ը շարունակում է միջին հայերենի կու գրեմ-ը, մինչդեռ արևելահայ -ում եմ-ն ավելի ուշ նորամուծություն է։
6. Այստեղ շատ լավ է, կարող եմ ապրել այստեղ։
7. Միայն ուղղագրությամբ․ սենյակ/սենեակ, թեյ/թէյ։ Տարբեր բառեր․ այստեղ/հոս, մեքենա/ինքնաշարժ։
8. 1915 թվականից այն չունի պետություն, հայրենի բնակչություն և քիչ երեխաներ են այն սովորում որպես առաջին լեզու․ սփյուռքի դպրոցները, Մխիթարյանները և Հայաստանի ծրագրերը դասավանդում են այն, իսկ ՅՈՒՆԵՍԿՕ-ի 2010 թվականի ցանկն ուշադրություն հրավիրեց դրա վրա։
`,
        ru: `## Один народ, две столицы

В XIX веке армяне жили в двух империях. Восточная часть, от Еревана до Тифлиса и Баку, с 1828 года была российской; западная, от Константинополя до Вана, — османской. У каждой была своя культурная столица, свои школы, газеты и типографии, и каждая строила литературный язык на диалекте своей столицы.

| | Восточноармянский | Западноармянский |
| --- | --- | --- |
| Базовый диалект | Араратская долина (Ереван) | Константинополь |
| Культурный центр в XIX веке | Тифлис, затем Ереван | Константинополь, затем Париж и Бейрут |
| Первая грамматика | Степан Паласанян, 1870 | Арсен Айтынян, 1866 |
| Писатели-основатели | Абовян, Налбандян, Раффи, Сундукян | Дурян, Паронян, Зограб, Варужан, Сиаманто |
| Сегодня | Республика Армения, Арцах, Иран, Россия и постсоветская диаспора | Ливан, Сирия, США, Франция, Аргентина, Стамбул; вся диаспора после 1915 года |
| Орфография | реформированная (1940) в Армении; классическая в Иране | классическая |

> **Определение.** **Литературный стандарт** — кодифицированная разновидность со своей грамматикой, словарём и школами. Восточный и западный армянский — два стандарта **одного языка**: носители понимают друг друга после короткой адаптации, а письменные формы различаются в основном орфографией и морфологией глагола.

## Звуки

Самое большое различие — согласные. В грабаре было три ряда смычных: звонкие (բ դ գ ձ ջ), глухие (պ տ կ ծ ճ) и придыхательные (փ թ ք ց չ). Восточноармянский сохраняет все три. Западноармянский слил два ряда и **сдвинул** их: старые звонкие стали глухими придыхательными, старые глухие — звонкими.

| Буква | Восточное произношение | Западное произношение | Пример |
| --- | --- | --- | --- |
| բ | b | pʰ | բարի: восточное «бари», западное «пари» |
| պ | p | b | պատ: восточное «пат», западное «бад» |
| փ | pʰ | pʰ | փայտ: в обоих «пʰайт» |
| դ | d | tʰ | դուռ: восточное «дур», западное «тʰур» |
| տ | t | d | տուն: восточное «тун», западное «дун» |
| գ | g | kʰ | գիրք: восточное «гиркʰ», западное «кʰиркʰ» |
| կ | k | g | կատու: восточное «кату», западное «гаду» |

Так имя Պետրոս в Ереване — «Петрос», в Бейруте — «Бедрос»; Տիգրան — «Тигран» и «Дикран». Написание одно; переместился только голос. Западноармянский также утратил различие ո и օ в некоторых позициях и чаще произносит ը между согласными.

## Глагол

| Форма | Восточный | Западный |
| --- | --- | --- |
| Настоящее | գրում եմ | կը գրեմ |
| Имперфект | գրում էի | կը գրէի |
| Будущее | կգրեմ | պիտի գրեմ |
| Отрицание настоящего | չեմ գրում | չեմ գրեր |
| Отрицание будущего | չեմ գրի | պիտի չգրեմ |
| Перфект | գրել եմ | գրած եմ |
| Инфинитив с «хотеть» | ուզում եմ գրել | կ՚ուզեմ գրել |

Западные формы — прямые наследники среднеармянского (կու գրեմ → կը գրեմ, պիտի գրեմ), тогда как восточное настоящее на -ում — новшество араратских диалектов. Западный перфект использует причастие на -ած, восточный — на -ել.

## Слова

Многие повседневные слова различаются, часто потому, что восток заимствовал из русского, а запад из французского и турецкого, или потому, что каждый выбрал другое армянское слово.

| Восточный | Западный | Значение |
| --- | --- | --- |
| հիմա | հիմա, այժմ | сейчас |
| այստեղ | հոս | здесь |
| այնտեղ | հոն | там |
| ինչպես | ինչպէս | как |
| սենյակ | սենեակ | комната |
| մեքենա | ինքնաշարժ | автомобиль |
| թեյ | թէյ | чай |
| շատ լավ | շատ աղէկ | очень хорошо |
| ապրել | ապրիլ | жить |
| կարող եմ | կրնամ | могу |
| պատասխանել | պատասխանել | отвечать |

Заметьте, что многие «различия» — лишь орфография: սենյակ/սենեակ и թեյ/թէյ — одно слово в реформированной и классической орфографии.

## Два стандарта сегодня

Восточноармянский — государственный язык Республики Армения, преподаётся в каждой школе, используется парламентом, телевидением и судами, родной примерно для трёх миллионов человек в Армении и ещё миллионов в России, Иране и Грузии. Западноармянский потерял родину в 1915 году. Он выжил в школах Бейрута, Алеппо, Стамбула, Парижа и Лос-Анджелеса и создал в изгнании большую литературу; но язык без государства, без телевидения и без деревенских детей, усваивающих его на улице, хрупок. В 2010 году ЮНЕСКО внесла западноармянский в список языков, **определённо находящихся под угрозой**. Армянские школы диаспоры, конгрегация мхитаристов и новые программы в самой Армении работают над тем, чтобы сохранить его. Для носителя восточноармянского чтение на западноармянском — самый лёгкий способ удвоить свою литературу.

### Упражнения

1. Объясните в двух предложениях, почему у армянского языка два литературных стандарта.
2. Назовите базовый диалект и первую грамматику каждого стандарта.
3. Как произносится имя Գևորգ в Ереване и в Бейруте? Объясните различие.
4. Дайте западноармянские эквиваленты восточных форм գրում եմ, կգրեմ, չեմ գրում.
5. Какой стандарт ближе к среднеармянскому в настоящем времени и почему?
6. Переведите на восточноармянский: Հոս շատ աղէկ է, կրնամ ապրիլ հոս։
7. Какие из этих пар различаются только орфографией, а какие — разные слова: սենյակ/սենեակ, այստեղ/հոս, թեյ/թէյ, մեքենա/ինքնաշարժ?
8. Почему западноармянский считается находящимся под угрозой и что для него делается?

### Ответы

1. В XIX веке армяне жили в двух империях, Российской и Османской, у каждой была своя культурная столица; диалект каждой столицы, Еревана и Константинополя, стал основой письменного стандарта.
2. Восточный: араратский диалект, грамматика Паласаняна 1870 года. Западный: константинопольский диалект, грамматика Айтыняна 1866 года.
3. Ереван «Геворг», Бейрут «Кеворк»: в западноармянском старое звонкое գ стало глухим придыхательным.
4. կը գրեմ, պիտի գրեմ, չեմ գրեր.
5. Западный: կը գրեմ продолжает среднеармянское կու գրեմ, тогда как восточное -ում եմ — более позднее новшество.
6. Այստեղ շատ լավ է, կարող եմ ապրել այստեղ։
7. Только орфография: սենյակ/սենեակ, թեյ/թէյ. Разные слова: այստեղ/հոս, մեքենա/ինքնաշարժ.
8. С 1915 года у него нет государства, населения на родине и мало детей, усваивающих его как первый язык; школы диаспоры, мхитаристы и программы в Армении преподают его, а список ЮНЕСКО 2010 года привлёк к нему внимание.
`,
      },
      [
        q(t("The two Armenian literary standards arose because", "Հայերենի երկու գրական տարբերակները ծագեցին, որովհետև", "Два армянских литературных стандарта возникли потому, что"), [
          t("the alphabet was changed", "այբուբենը փոխվեց", "алфавит был изменён"),
          t("Armenians lived in two empires with two cultural capitals", "հայերն ապրում էին երկու կայսրությունում՝ երկու մշակութային մայրաքաղաքով", "армяне жили в двух империях с двумя культурными столицами"),
          t("the Church ordered it", "եկեղեցին այդպես հրամայեց", "так велела Церковь"),
        ], 1),
        q(t("In Western Armenian the letter բ is pronounced", "Արևմտահայերենում բ տառն արտասանվում է", "В западноармянском буква բ произносится"), [
          t("as a voiceless aspirated pʰ", "որպես շնչեղ խուլ փ", "как глухое придыхательное пʰ"),
          t("as a voiced b", "որպես ձայնեղ բ", "как звонкое б"),
          t("it is silent", "չի արտասանվում", "она не произносится"),
        ], 0),
        q(t("The Western Armenian present «կը գրեմ» corresponds to Eastern", "Արևմտահայ «կը գրեմ» ներկային համապատասխանում է արևելահայ", "Западноармянскому настоящему «կը գրեմ» соответствует восточное"), [
          t("կգրեմ", "կգրեմ", "կգրեմ"),
          t("գրել եմ", "գրել եմ", "գրել եմ"),
          t("գրում եմ", "գրում եմ", "գրում եմ"),
        ], 2),
        q(t("Which standard's present tense continues Middle Armenian «կու գրեմ»?", "Ո՞ր տարբերակի ներկան է շարունակում միջին հայերենի «կու գրեմ»-ը։", "Настоящее время какого стандарта продолжает среднеармянское «կու գրեմ»?"), [
          t("Western Armenian", "արևմտահայերենի", "западноармянского"),
          t("Eastern Armenian", "արևելահայերենի", "восточноармянского"),
          t("neither", "ոչ մեկի", "ни одного"),
        ], 0),
        q(t("The pair սենյակ / սենեակ differs", "Սենյակ / սենեակ զույգը տարբերվում է", "Пара սենյակ / սենեակ различается"), [
          t("in meaning", "իմաստով", "значением"),
          t("only in orthography", "միայն ուղղագրությամբ", "только орфографией"),
          t("in the root", "արմատով", "корнем"),
        ], 1),
        q(t("UNESCO lists Western Armenian as endangered because", "ՅՈՒՆԵՍԿՕ-ն արևմտահայերենը վտանգված է համարում, որովհետև", "ЮНЕСКО относит западноармянский к языкам под угрозой, потому что"), [
          t("it has no written form", "այն գրավոր ձև չունի", "у него нет письменной формы"),
          t("it is identical to Eastern Armenian", "այն նույնական է արևելահայերենին", "он тождествен восточноармянскому"),
          t("it has no state and few children learn it as a first language", "այն չունի պետություն, և քիչ երեխաներ են այն սովորում որպես առաջին լեզու", "у него нет государства и мало детей усваивают его как первый язык"),
        ], 2),
      ],
    ),
    lesson(
      "orthography-reforms",
      ["Orthography: classical and reformed (1922, 1940)", "Ուղղագրություն․ դասական և բարեփոխված (1922, 1940)", "Орфография: классическая и реформированная (1922, 1940)"],
      {
        en: [
          "Explain why the classical orthography no longer matched pronunciation by the 19th century.",
          "List the changes of the 1922 reform and the partial restoration of 1940.",
          "Convert a short text from classical to reformed orthography and back using the main rules.",
          "Name the letters and digraphs affected: է/ե, օ/ո, ւ/վ, ու, յ at the end of words, the ligature և.",
          "State who uses each orthography today and summarise the arguments in the debate about returning to the classical one.",
        ],
        hy: [
          "Բացատրել, թե ինչու 19-րդ դարում դասական ուղղագրությունն այլևս չէր համապատասխանում արտասանությանը։",
          "Թվարկել 1922 թվականի բարեփոխման փոփոխությունները և 1940 թվականի մասնակի վերականգնումը։",
          "Հիմնական կանոններով կարճ տեքստ փոխադրել դասականից բարեփոխված ուղղագրության և հակառակը։",
          "Անվանել փոփոխության ենթարկված տառերն ու տառակապակցությունները․ է/ե, օ/ո, ւ/վ, ու, բառավերջի յ, և կապը։",
          "Նշել, թե այսօր ով է գործածում յուրաքանչյուր ուղղագրությունը, և ամփոփել դասականին վերադառնալու վեճի փաստարկները։",
        ],
        ru: [
          "Объяснить, почему к XIX веку классическая орфография перестала соответствовать произношению.",
          "Перечислить изменения реформы 1922 года и частичное восстановление 1940 года.",
          "Перевести короткий текст из классической орфографии в реформированную и обратно по основным правилам.",
          "Назвать затронутые буквы и диграфы: է/ե, օ/ո, ւ/վ, ու, յ в конце слова, лигатура և.",
          "Сказать, кто сегодня пользуется каждой орфографией, и изложить доводы спора о возвращении к классической.",
        ],
      },
      {
        en: `## When spelling and speech part company

Mashtots designed the alphabet in 405 so that every letter stood for one sound and every sound had one letter. For the Armenian of the 5th century this was true. But sounds change and spellings do not. By the 19th century a pupil had to learn by heart things the ear no longer told him:

- **է** and **ե** had both come to sound «e» in most positions, but a word was spelled with one or the other by tradition: էր «was», but երբ «when».
- **օ** and **ո** both sounded «o» inside a word: օր «day», but ոսկի «gold».
- **ւ** (the old «w») had become «v» and was written in many places where **վ** was also possible: հաւ «hen» but վարդ «rose».
- Final **յ** was silent in the classical spelling of words like ծառայ, տղայ.
- The diphthong **եա** sounded «ya» and **իւ** sounded «yu»: սենեակ, իւղ.

> **Definition.** **Orthography** is the agreed set of rules for writing a language. The **classical orthography** (դասական or մեսրոպյան) is the spelling of Grabar as fixed in the manuscripts; the **reformed orthography** (բարեփոխված or նոր) is the system adopted in Soviet Armenia in 1922 and corrected in 1940.

## 1922: Abeghyan's reform

In 1922 the government of Soviet Armenia adopted a reform drafted by the linguist **Manuk Abeghyan**. Its principle was «write as you speak». The main changes:

| Rule | Classical | 1922 |
| --- | --- | --- |
| Spell the sound «e» with ե everywhere: է is abolished | էր, բարէ | եր, բարե |
| Spell «o» with ո everywhere: օ is abolished | օր, օգուտ | որ, ոգուտ |
| Replace ւ by վ; ու as a letter for «u» | հաւ, Երեւան | հավ, Երևան |
| Drop the silent final յ | ծառայ, տղայ | ծառա, տղա |
| Write եա as յա, եօ as յո, իւ as յու | սենեակ, իւղ | սենյակ, յուղ |
| The ligature և for «ev» becomes a full letter | եւ | և |

The reform was radical. Spelling օր as որ made «day» and the conjunction «that» identical; many readers of the older generation rebelled, and the diaspora refused to follow at all.

## 1940: the correction

In 1940 a second decree, prepared by **Gurgen Sevak**, restored the letters **է** and **օ** at the beginning of a word and at the beginning of a root inside compounds (օր, էջ, հանրօգուտ), and kept the rest; it also made **և** a letter again. The result is the orthography used in Armenia today.

| Word | Classical | 1922 | 1940 (current) |
| --- | --- | --- | --- |
| day | օր | որ | օր |
| was | էր | եր | էր |
| Yerevan | Երեւան | Երևան | Երևան |
| room | սենեակ | սենյակ | սենյակ |
| oil | իւղ | յուղ | յուղ |
| hen | հաւ | հավ | հավ |
| Armenia (genitive) | Հայաստանի | Հայաստանի | Հայաստանի |
| light | լոյս | լույս | լույս |
| to be | լինել | լինել | լինել |

The letters և and ու count as letters of the alphabet in the reformed system, bringing it to 39 letters; the classical alphabet has 38, with ու a digraph.

## Converting

To read a classical text, remember the pairs. To write one, you have to know the etymology, which is why the classical spelling takes years to master and the reformed one takes weeks.

| Classical to reformed | Reformed to classical |
| --- | --- |
| ւ after a vowel → վ: թիւ → թիվ | վ in a native word after a vowel → ւ: թիվ → թիւ |
| եա → յա, եօ → յո, իւ → յու | յա → եա, յու → իւ in old words |
| ոյ inside a word → ույ: լոյս → լույս | ույ → ոյ |
| final silent յ → dropped: ծառայ → ծառա | know which words had it |
| աւ before a consonant → ավ, or → օ: աւազ → ավազ, աւր → օր | know which |

Example, from the Lord's Prayer in classical spelling: **Հայր մեր որ յերկինս ես, սուրբ եղիցի անուն քո։** In reformed spelling: **Հայր մեր, որ երկնքում ես, սուրբ լինի անունդ։** The spelling change here is small (յերկինս → երկինս); the larger change is the grammar, since the modern version is also a translation into Ashkharhabar.

## Two spellings today

| Orthography | Used by |
| --- | --- |
| Reformed (1940) | Republic of Armenia, Artsakh, Russia and the post-Soviet diaspora; all Eastern Armenian publishing in Armenia |
| Classical | Western Armenian everywhere; Eastern Armenian in Iran; the Armenian Apostolic Church; the Mkhitarists; some scholarly editions |

The debate about returning to the classical orthography has run since 1991. The arguments for return: unity with the diaspora and the Church, direct access to the whole written heritage, the etymology visible in the spelling. The arguments against: a whole population literate in one system, the cost and confusion of a switch, and the fact that the classical spelling fits Western Armenian pronunciation no better than the reformed fits Eastern. The present compromise is to teach the classical rules in school so that every graduate can read both, and to keep the reformed spelling for daily use.

### Exercises

1. Give three examples of a letter pair that had come to sound the same before the reform.
2. State the principle of the 1922 reform and name its author.
3. Why did the 1922 spelling of օր as որ cause trouble, and how did 1940 solve it?
4. Convert to reformed orthography: սենեակ, իւղ, լոյս, հաւ, Երեւան.
5. Convert to classical orthography: թիվ, սենյակ, լույս, յուղ.
6. How many letters are in the classical alphabet and in the reformed one, and what accounts for the difference?
7. Who uses the classical orthography today?
8. Give two arguments for and two against returning to the classical orthography.

### Answers

1. է/ե both «e»; օ/ո both «o»; ւ/վ both «v»; also final silent յ against nothing.
2. «Write as you speak»; Manuk Abeghyan.
3. It made «day» and the conjunction «that» look identical and offended readers; 1940 restored է and օ where pronunciation and tradition agreed.
4. սենյակ, յուղ, լույս, հավ, Երևան.
5. թիւ, սենեակ, լոյս, իւղ.
6. 38 and 39: the reformed alphabet counts և and ու as letters, while ու is a digraph in the classical system (which also lacks և as a separate letter).
7. Western Armenians everywhere, Eastern Armenians in Iran, the Armenian Church, the Mkhitarists, some scholarly editions.
8. For: unity with the diaspora and the Church, direct access to the written heritage, visible etymology. Against: a whole population literate in the reformed system, the cost and confusion of a change, and the classical spelling does not match any modern pronunciation either.
`,
        hy: `## Երբ գրությունն ու խոսքն իրարից հեռանում են

Մաշտոցը 405 թվականին այբուբենն այնպես ստեղծեց, որ ամեն տառ մեկ հնչյուն նշանակեր և ամեն հնչյուն մեկ տառ ունենար։ 5-րդ դարի հայերենի համար սա ճիշտ էր։ Բայց հնչյունները փոխվում են, իսկ գրությունը՝ ոչ։ 19-րդ դարում աշակերտը ստիպված էր անգիր սովորել այն, ինչ ականջն այլևս չէր հուշում․

- **է**-ն և **ե**-ն շատ դիրքերում երկուսն էլ հնչում էին «է», բայց բառը գրվում էր մեկով կամ մյուսով ավանդույթի ուժով․ էր, բայց երբ։
- **օ**-ն և **ո**-ն բառի մեջ երկուսն էլ հնչում էին «օ»․ օր, բայց ոսկի։
- **ւ**-ն (հին «ւ») դարձել էր «վ» և գրվում էր շատ տեղերում, որտեղ **վ**-ն էլ էր հնարավոր․ հաւ, բայց վարդ։
- Բառավերջի **յ**-ն լուռ էր ծառայ, տղայ նման բառերի դասական գրության մեջ։
- **եա** երկբարբառը հնչում էր «յա», **իւ**-ն՝ «յու»․ սենեակ, իւղ։

> **Սահմանում։** **Ուղղագրությունը** լեզուն գրելու համաձայնեցված կանոնների ամբողջությունն է։ **Դասական** (մեսրոպյան) **ուղղագրությունը** գրաբարի գրությունն է, ինչպես ամրացված է ձեռագրերում, **բարեփոխված** (նոր) **ուղղագրությունը**՝ Խորհրդային Հայաստանում 1922 թվականին ընդունված և 1940 թվականին ուղղված համակարգը։

## 1922․ Աբեղյանի բարեփոխումը

1922 թվականին Խորհրդային Հայաստանի կառավարությունն ընդունեց լեզվաբան **Մանուկ Աբեղյանի** մշակած բարեփոխումը։ Նրա սկզբունքն էր «գրել այնպես, ինչպես խոսում ես»։ Հիմնական փոփոխությունները․

| Կանոն | Դասական | 1922 |
| --- | --- | --- |
| «Է» հնչյունը գրել ե-ով ամենուր․ է-ն վերացվում է | էր, բարէ | եր, բարե |
| «Օ»-ն գրել ո-ով ամենուր․ օ-ն վերացվում է | օր, օգուտ | որ, ոգուտ |
| ւ-ն փոխարինել վ-ով, ու-ն որպես «ու» հնչյունի տառ | հաւ, Երեւան | հավ, Երևան |
| Հանել լուռ բառավերջի յ-ն | ծառայ, տղայ | ծառա, տղա |
| եա գրել յա, եօ՝ յո, իւ՝ յու | սենեակ, իւղ | սենյակ, յուղ |
| «Եվ»-ի և կապը դառնում է լիարժեք տառ | եւ | և |

Բարեփոխումն արմատական էր։ Օր-ը որ գրելը «օր»-ն ու «որ» շաղկապը նույնացնում էր․ ավագ սերնդի շատ ընթերցողներ ընդվզեցին, իսկ սփյուռքն ընդհանրապես հրաժարվեց հետևել։

## 1940․ ուղղումը

1940 թվականին **Գուրգեն Սևակի** պատրաստած երկրորդ որոշումը վերականգնեց **է** և **օ** տառերը բառասկզբում և բարդ բառերում արմատի սկզբում (օր, էջ, հանրօգուտ), պահեց մնացածը և **և**-ը կրկին դարձրեց տառ։ Արդյունքն այսօր Հայաստանում գործածվող ուղղագրությունն է։

| Բառ | Դասական | 1922 | 1940 (ներկա) |
| --- | --- | --- | --- |
| օր | օր | որ | օր |
| էր | էր | եր | էր |
| Երևան | Երեւան | Երևան | Երևան |
| սենյակ | սենեակ | սենյակ | սենյակ |
| յուղ | իւղ | յուղ | յուղ |
| հավ | հաւ | հավ | հավ |
| Հայաստանի | Հայաստանի | Հայաստանի | Հայաստանի |
| լույս | լոյս | լույս | լույս |
| լինել | լինել | լինել | լինել |

Բարեփոխված համակարգում և-ն ու ու-ն այբուբենի տառ են համարվում, և այբուբենը դառնում է 39 տառ․ դասական այբուբենն ունի 38 տառ, որտեղ ու-ն տառակապակցություն է։

## Փոխադրում

Դասական տեքստ կարդալու համար հիշիր զույգերը։ Դասական գրելու համար պետք է իմանալ ստուգաբանությունը․ դրա համար դասական ուղղագրությանը տիրապետելը տարիներ է պահանջում, բարեփոխվածին՝ շաբաթներ։

| Դասականից բարեփոխված | Բարեփոխվածից դասական |
| --- | --- |
| ձայնավորից հետո ւ → վ․ թիւ → թիվ | բնիկ բառում ձայնավորից հետո վ → ւ․ թիվ → թիւ |
| եա → յա, եօ → յո, իւ → յու | յա → եա, յու → իւ հին բառերում |
| բառամիջի ոյ → ույ․ լոյս → լույս | ույ → ոյ |
| լուռ բառավերջի յ → հանվում է․ ծառայ → ծառա | իմանալ, թե որ բառերն են ունեցել |
| բաղաձայնից առաջ աւ → ավ կամ → օ․ աւազ → ավազ, աւր → օր | իմանալ, թե որը |

Օրինակ՝ Տերունական աղոթքից դասական գրությամբ․ **Հայր մեր որ յերկինս ես, սուրբ եղիցի անուն քո։** Բարեփոխված գրությամբ․ **Հայր մեր, որ երկնքում ես, սուրբ լինի անունդ։** Ուղղագրական փոփոխությունն այստեղ փոքր է (յերկինս → երկինս), ավելի մեծն՝ քերականությունը, քանի որ ժամանակակից տարբերակը նաև աշխարհաբար թարգմանություն է։

## Երկու ուղղագրություն այսօր

| Ուղղագրություն | Գործածողներ |
| --- | --- |
| Բարեփոխված (1940) | Հայաստանի Հանրապետություն, Արցախ, Ռուսաստան և հետխորհրդային սփյուռք, Հայաստանի ամբողջ արևելահայ հրատարակչություն |
| Դասական | արևմտահայերենն ամենուր, արևելահայերենն Իրանում, Հայ Առաքելական Եկեղեցի, Մխիթարյաններ, որոշ գիտական հրատարակություններ |

Դասական ուղղագրությանը վերադառնալու վեճն ընթանում է 1991 թվականից։ Վերադարձի փաստարկները․ միասնություն սփյուռքի և եկեղեցու հետ, անմիջական մուտք ամբողջ գրավոր ժառանգությանը, գրության մեջ տեսանելի ստուգաբանություն։ Դեմ փաստարկները․ մեկ համակարգով գրագետ ամբողջ բնակչություն, անցման ծախսն ու շփոթը և այն, որ դասական գրությունն արևմտահայ արտասանությանը ոչ ավելի լավ է համապատասխանում, քան բարեփոխվածը՝ արևելահային։ Ներկա փոխզիջումը դպրոցում դասական կանոնները սովորեցնելն է, որ ամեն շրջանավարտ կարողանա կարդալ երկուսն էլ, և բարեփոխվածն առօրյա գործածության համար պահելը։

### Վարժություններ

1. Բեր տառազույգի երեք օրինակ, որոնք բարեփոխումից առաջ նույնը հնչելու էին եկել։
2. Շարադրիր 1922 թվականի բարեփոխման սկզբունքը և անվանիր հեղինակին։
3. Ինչու՞ 1922 թվականին օր-ը որ գրելը դժվարություն ստեղծեց և ինչպե՞ս լուծեց այն 1940-ը։
4. Փոխադրիր բարեփոխված ուղղագրության․ սենեակ, իւղ, լոյս, հաւ, Երեւան։
5. Փոխադրիր դասական ուղղագրության․ թիվ, սենյակ, լույս, յուղ։
6. Քանի՞ տառ կա դասական և բարեփոխված այբուբեններում և ինչո՞վ է բացատրվում տարբերությունը։
7. Ո՞վ է այսօր գործածում դասական ուղղագրությունը։
8. Բեր երկու փաստարկ դասական ուղղագրությանը վերադառնալու օգտին և երկուսը՝ դեմ։

### Պատասխաններ

1. է/ե՝ երկուսն էլ «է», օ/ո՝ երկուսն էլ «օ», ւ/վ՝ երկուսն էլ «վ», նաև լուռ բառավերջի յ-ն՝ ոչնչի դիմաց։
2. «Գրել այնպես, ինչպես խոսում ես», Մանուկ Աբեղյան։
3. Այն «օր»-ն ու «որ» շաղկապը նույնատեսք դարձրեց և վրդովեցրեց ընթերցողներին․ 1940-ը վերականգնեց է-ն և օ-ն այնտեղ, որտեղ արտասանությունն ու ավանդույթը համընկնում էին։
4. սենյակ, յուղ, լույս, հավ, Երևան։
5. թիւ, սենեակ, լոյս, իւղ։
6. 38 և 39․ բարեփոխված այբուբենը և-ն ու ու-ն տառ է համարում, մինչդեռ դասական համակարգում ու-ն տառակապակցություն է (և և-ն էլ առանձին տառ չէ)։
7. Արևմտահայերն ամենուր, արևելահայերն Իրանում, Հայ եկեղեցին, Մխիթարյանները, որոշ գիտական հրատարակություններ։
8. Կողմ․ միասնություն սփյուռքի և եկեղեցու հետ, անմիջական մուտք գրավոր ժառանգությանը, տեսանելի ստուգաբանություն։ Դեմ․ բարեփոխված համակարգով գրագետ ամբողջ բնակչություն, փոփոխության ծախսն ու շփոթը, և դասական գրությունն էլ ոչ մի ժամանակակից արտասանությանը չի համապատասխանում։
`,
        ru: `## Когда письмо и речь расходятся

Маштоц в 405 году построил алфавит так, чтобы каждая буква обозначала один звук, а каждый звук имел одну букву. Для армянского V века это было верно. Но звуки меняются, а написания нет. К XIX веку ученику приходилось заучивать то, чего ухо уже не подсказывало:

- **է** и **ե** в большинстве позиций стали звучать одинаково «э», но слово писалось той или другой буквой по традиции: էր «был», но երբ «когда».
- **օ** и **ո** внутри слова оба звучали «о»: օր «день», но ոսկի «золото».
- **ւ** (старое «w») стало «в» и писалось во многих местах, где возможно было и **վ**: հաւ «курица», но վարդ «роза».
- Конечное **յ** было немым в классическом написании слов вроде ծառայ, տղայ.
- Дифтонг **եա** звучал «я», а **իւ** — «ю»: սենեակ, իւղ.

> **Определение.** **Орфография** — согласованный свод правил письма на языке. **Классическая орфография** (դասական, месроповская) — написание грабара, закреплённое в рукописях; **реформированная орфография** (բարեփոխված, новая) — система, принятая в Советской Армении в 1922 году и исправленная в 1940-м.

## 1922: реформа Абегяна

В 1922 году правительство Советской Армении приняло реформу, разработанную лингвистом **Мануком Абегяном**. Её принцип — «пиши, как говоришь». Главные изменения:

| Правило | Классическое | 1922 |
| --- | --- | --- |
| Звук «э» писать через ե везде: է упраздняется | էր, բարէ | եր, բարե |
| «О» писать через ո везде: օ упраздняется | օր, օգուտ | որ, ոգուտ |
| Заменить ւ на վ; ու как буква для «у» | հաւ, Երեւան | հավ, Երևան |
| Отбросить немое конечное յ | ծառայ, տղայ | ծառա, տղա |
| Писать եա как յա, եօ как յո, իւ как յու | սենեակ, իւղ | սենյակ, յուղ |
| Лигатура և для «ев» становится полноценной буквой | եւ | և |

Реформа была радикальной. Написание օր как որ сделало «день» и союз «что» одинаковыми; многие читатели старшего поколения возмутились, а диаспора отказалась следовать вовсе.

## 1940: исправление

В 1940 году второй декрет, подготовленный **Гургеном Севаком**, вернул буквы **է** и **օ** в начале слова и в начале корня внутри сложных слов (օր, էջ, հանրօգուտ), сохранил остальное и снова сделал **և** буквой. Результат — орфография, которой пользуются в Армении сегодня.

| Слово | Классическое | 1922 | 1940 (текущее) |
| --- | --- | --- | --- |
| день | օր | որ | օր |
| был | էր | եր | էր |
| Ереван | Երեւան | Երևան | Երևան |
| комната | սենեակ | սենյակ | սենյակ |
| масло | իւղ | յուղ | յուղ |
| курица | հաւ | հավ | հավ |
| Армении (род. п.) | Հայաստանի | Հայաստանի | Հայաստանի |
| свет | լոյս | լույս | լույս |
| быть | լինել | լինել | լինել |

Буквы և и ու в реформированной системе считаются буквами алфавита, и он насчитывает 39 букв; классический алфавит имеет 38 букв, где ու — диграф.

## Преобразование

Чтобы читать классический текст, помните пары. Чтобы писать на нём, нужно знать этимологию, поэтому классическая орфография осваивается годами, а реформированная — неделями.

| Из классической в реформированную | Из реформированной в классическую |
| --- | --- |
| ւ после гласного → վ: թիւ → թիվ | վ в исконном слове после гласного → ւ: թիվ → թիւ |
| եա → յա, եօ → յո, իւ → յու | յա → եա, յու → իւ в старых словах |
| ոյ внутри слова → ույ: լոյս → լույս | ույ → ոյ |
| немое конечное յ → отбрасывается: ծառայ → ծառա | знать, в каких словах оно было |
| աւ перед согласным → ավ или → օ: աւազ → ավազ, աւր → օր | знать, где какое |

Пример из молитвы «Отче наш» в классическом написании: **Հայր մեր որ յերկինս ես, սուրբ եղիցի անուն քո։** В реформированном: **Հայր մեր, որ երկնքում ես, սուրբ լինի անունդ։** Орфографическое изменение здесь невелико (յերկինս → երկինս); большее изменение — грамматика, поскольку современный вариант ещё и перевод на ашхарабар.

## Две орфографии сегодня

| Орфография | Кто пользуется |
| --- | --- |
| Реформированная (1940) | Республика Армения, Арцах, Россия и постсоветская диаспора; всё восточноармянское книгоиздание в Армении |
| Классическая | западноармянский повсюду; восточноармянский в Иране; Армянская Апостольская Церковь; мхитаристы; некоторые научные издания |

Спор о возвращении к классической орфографии идёт с 1991 года. Доводы за возвращение: единство с диаспорой и Церковью, прямой доступ ко всему письменному наследию, видимая в написании этимология. Доводы против: целое население, грамотное в одной системе, стоимость и путаница перехода, и то, что классическое написание соответствует западноармянскому произношению не лучше, чем реформированное — восточному. Нынешний компромисс — преподавать классические правила в школе, чтобы каждый выпускник мог читать обе, и сохранять реформированную для повседневного употребления.

### Упражнения

1. Приведите три примера пар букв, которые перед реформой стали звучать одинаково.
2. Сформулируйте принцип реформы 1922 года и назовите её автора.
3. Почему написание օր как որ в 1922 году вызвало трудности и как это решил 1940 год?
4. Переведите в реформированную орфографию: սենեակ, իւղ, լոյս, հաւ, Երեւան.
5. Переведите в классическую орфографию: թիվ, սենյակ, լույս, յուղ.
6. Сколько букв в классическом и реформированном алфавитах и чем объясняется разница?
7. Кто сегодня пользуется классической орфографией?
8. Приведите два довода за возвращение к классической орфографии и два против.

### Ответы

1. է/ե обе «э»; օ/ո обе «о»; ւ/վ обе «в»; также немое конечное յ против ничего.
2. «Пиши, как говоришь»; Манук Абегян.
3. Оно сделало «день» и союз «что» одинаковыми на вид и обидело читателей; 1940 год вернул է и օ там, где произношение и традиция совпадали.
4. սենյակ, յուղ, լույս, հավ, Երևան.
5. թիւ, սենեակ, լոյս, իւղ.
6. 38 и 39: реформированный алфавит считает և и ու буквами, тогда как в классической системе ու — диграф (и և не является отдельной буквой).
7. Западные армяне повсюду, восточные армяне в Иране, Армянская Церковь, мхитаристы, некоторые научные издания.
8. За: единство с диаспорой и Церковью, прямой доступ к письменному наследию, видимая этимология. Против: целое население, грамотное в реформированной системе, стоимость и путаница перехода, и классическое написание тоже не соответствует никакому современному произношению.
`,
      },
      [
        q(t("By the 19th century the letters է and ե", "19-րդ դարում է և ե տառերը", "К XIX веку буквы է и ե"), [
          t("had come to sound the same in most positions", "շատ դիրքերում նույնը հնչելու էին եկել", "стали звучать одинаково в большинстве позиций"),
          t("were pronounced as «a» and «o»", "արտասանվում էին «ա» և «օ»", "произносились как «а» и «о»"),
          t("had been removed from the alphabet", "հանվել էին այբուբենից", "были исключены из алфавита"),
        ], 0),
        q(t("The principle of the 1922 reform was", "1922 թվականի բարեփոխման սկզբունքն էր", "Принцип реформы 1922 года —"), [
          t("write as in Grabar", "գրել ինչպես գրաբարում", "писать как в грабаре"),
          t("write as you speak", "գրել այնպես, ինչպես խոսում ես", "писать, как говоришь"),
          t("use the Latin alphabet", "գործածել լատինատառ", "использовать латиницу"),
        ], 1),
        q(t("The 1940 correction restored", "1940 թվականի ուղղումը վերականգնեց", "Исправление 1940 года вернуло"), [
          t("the silent final յ", "լուռ բառավերջի յ-ն", "немое конечное յ"),
          t("the letter ւ", "ւ տառը", "букву ւ"),
          t("the letters է and օ where pronunciation and tradition agreed", "է և օ տառերն այնտեղ, որտեղ արտասանությունն ու ավանդույթը համընկնում էին", "буквы է и օ там, где произношение и традиция совпадали"),
        ], 2),
        q(t("Classical սենեակ is written in reformed orthography as", "Դասական սենեակ-ը բարեփոխված ուղղագրությամբ գրվում է", "Классическое սենեակ в реформированной орфографии пишется"), [
          t("սենյակ", "սենյակ", "սենյակ"),
          t("սենեակ", "սենեակ", "սենեակ"),
          t("սենիակ", "սենիակ", "սենիակ"),
        ], 0),
        q(t("The reformed alphabet has 39 letters because", "Բարեփոխված այբուբենն ունի 39 տառ, որովհետև", "В реформированном алфавите 39 букв, потому что"), [
          t("new sounds appeared", "նոր հնչյուններ առաջացան", "появились новые звуки"),
          t("և and ու count as letters", "և-ն ու ու-ն տառ են համարվում", "և и ու считаются буквами"),
          t("ւ was added", "ւ-ն ավելացվեց", "была добавлена ւ"),
        ], 1),
        q(t("The classical orthography is used today by", "Դասական ուղղագրությունն այսօր գործածում են", "Классической орфографией сегодня пользуются"), [
          t("the Republic of Armenia", "Հայաստանի Հանրապետությունը", "Республика Армения"),
          t("Russia's Armenian schools", "Ռուսաստանի հայկական դպրոցները", "армянские школы России"),
          t("Western Armenians, Iranian Armenians and the Church", "արևմտահայերը, իրանահայերը և եկեղեցին", "западные армяне, иранские армяне и Церковь"),
        ], 2),
      ],
    ),
  ],
};
