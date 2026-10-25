import { t, q, lesson, type UnitSeed } from "../../../types";

export const unit5: UnitSeed = {
  title: t("Exam practice", "Քննական պարապմունք", "Экзаменационная практика"),
  summary: t(
    "The six exam tasks of the year: grammar transformations, word formation under exam conditions, reading tasks, listening tasks, collocations, and a full year-11 review.",
    "Տարվա վեց քննական առաջադրանքը՝ քերականական փոխակերպումներ, բառակազմություն քննական պայմաններում, ընթերցանության առաջադրանքներ, լսողության առաջադրանքներ, բառակապակցություններ և 11-րդ դասարանի ամբողջական կրկնություն։",
    "Шесть экзаменационных заданий года: грамматические трансформации, словообразование в условиях экзамена, задания по чтению, задания по аудированию, коллокации и полное повторение 11 класса.",
  ),
  lessons: [
    lesson(
      "grammar-transformations",
      ["Grammar transformations", "Քերականական փոխակերպումներ", "Грамматические трансформации"],
      {
        en: ["Rewrite a sentence with a given word without changing the meaning", "Recognise the eight transformations that appear most often", "Check an answer in three steps: words, meaning, tense"],
        hy: ["Վերաշարադրել նախադասությունը տրված բառով՝ առանց իմաստը փոխելու", "Ճանաչել ամենահաճախ հանդիպող ութ փոխակերպումը", "Ստուգել պատասխանն երեք քայլով՝ բառեր, իմաստ, ժամանակ"],
        ru: ["Переписывать предложение с данным словом, не меняя смысла", "Узнавать восемь самых частых трансформаций", "Проверять ответ в три шага: слова, смысл, время"],
      },
      {
        en: `## What the task asks

You are given a sentence, a second sentence with a gap, and one word you must use. The meaning must stay the same, the given word must not change, and usually between two and five words go in the gap.

> *I have not been to Gyumri for three years.* \\
> **LAST** \\
> *The \_\_\_\_\_\_\_\_\_\_ to Gyumri was three years ago.* \\
> → *last time I went*

## The eight that come up most

| Transformation | Original | Answer |
|---|---|---|
| active → passive | *Someone stole my bag.* | *My bag **was stolen**.* |
| direct → reported | *"I will come," he said.* | *He said he **would come**.* |
| so → such | *The film was so long that…* | *It was **such a long** film that…* |
| too → enough | *He is too young to vote.* | *He is **not old enough** to vote.* |
| if → unless | *If you do not hurry, we will be late.* | ***Unless you hurry**, we will be late.* |
| must → have to | *You must finish today.* | *You **have to** finish today.* |
| since → for / ago | *I have not seen her since 2020.* | *It is four years **since I last saw** her.* |
| used to → no longer | *I used to smoke.* | *I **do not smoke any longer**.* |

## Three more worth drilling

| Pattern | Example |
|---|---|
| despite / although | *Although it rained, we went.* → ***Despite the rain**, we went.* |
| it is + since | *She left two hours ago.* → *It is two hours **since she left**.* |
| wish | *I am sorry I did not study.* → *I **wish I had studied**.* |

## The three-step check

1. **Words.** Count them. Two to five, and the given word is there, unchanged, in the right form of the phrase it belongs to.
2. **Meaning.** Read your sentence alone, without the original. Does it say the same thing, including who did what?
3. **Tense.** Does your verb keep the original's time? A reported sentence steps one tense back; a passive keeps the original tense.

Most lost marks come from step 1: a contraction counts as two words, and changing the given word, even to its plural, is an automatic zero.

### Exercises

1. *Someone stole my bag.* → **STOLEN** → *My bag \_\_\_\_.*
2. *"I will come," he said.* → **WOULD** → *He said he \_\_\_\_.*
3. *The film was so long that we left.* → **SUCH** → *It was \_\_\_\_ that we left.*
4. *He is too young to vote.* → **ENOUGH** → *He is \_\_\_\_ to vote.*
5. *If you do not hurry, we will be late.* → **UNLESS** → *\_\_\_\_, we will be late.*
6. *I am sorry I did not study.* → **WISH** → *I \_\_\_\_ harder.*
7. Write your own transformation pair for *although* and swap it with a classmate.

### Answers

1. was stolen. 2. would come. 3. such a long film. 4. not old enough. 5. Unless you hurry. 6. wish I had studied. 7. Your own answer.`,
        hy: `## Ինչ է պահանջում առաջադրանքը

Տրվում է նախադասություն, բացթողումով երկրորդ նախադասություն և մեկ բառ, որը պետք է գործածես։ Իմաստը պետք է նույնը մնա, տրված բառը չի փոխվում, և սովորաբար բացթողման մեջ գնում է երկուսից հինգ բառ։

> *I have not been to Gyumri for three years.* \\
> **LAST** \\
> *The \_\_\_\_\_\_\_\_\_\_ to Gyumri was three years ago.* \\
> → *last time I went*

## Ամենահաճախ հանդիպող ութը

| Փոխակերպում | Բնագիր | Պատասխան |
|---|---|---|
| ներգործական → կրավորական | *Someone stole my bag.* | *My bag **was stolen**.* |
| ուղիղ → անուղղակի խոսք | *"I will come," he said.* | *He said he **would come**.* |
| so → such | *The film was so long that…* | *It was **such a long** film that…* |
| too → enough | *He is too young to vote.* | *He is **not old enough** to vote.* |
| if → unless | *If you do not hurry, we will be late.* | ***Unless you hurry**, we will be late.* |
| must → have to | *You must finish today.* | *You **have to** finish today.* |
| since → for / ago | *I have not seen her since 2020.* | *It is four years **since I last saw** her.* |
| used to → no longer | *I used to smoke.* | *I **do not smoke any longer**.* |

## Երեք ուրիշ, որ արժե մարզել

| Կառույց | Օրինակ |
|---|---|
| despite / although | *Although it rained, we went.* → ***Despite the rain**, we went.* |
| it is + since | *She left two hours ago.* → *It is two hours **since she left**.* |
| wish | *I am sorry I did not study.* → *I **wish I had studied**.* |

## Երեք քայլի ստուգում

1. **Բառերը։** Հաշվիր նրանց։ Երկուսից հինգ, և տրված բառը տեղում է՝ անփոփոխ, իր պատկանող արտահայտության ճիշտ ձևով։
2. **Իմաստը։** Կարդա քո նախադասությունը մեկուսի, առանց բնագրի։ Նույնն ասո՞ւմ է, ներառյալ՝ ո՞վ ի՞նչ արեց։
3. **Ժամանակը։** Քո բայը պահո՞ւմ է բնագրի ժամանակը։ Անուղղակի խոսքը մեկ աստիճան հետ է գնում, կրավորականը պահում է բնագրի ժամանակը։

Կորցրած բալերի մեծ մասը 1-ին քայլից է․ կրճատ ձևը հաշվվում է երկու բառ, իսկ տրված բառը փոխելը, նույնիսկ հոգնակի դարձնելը, ավտոմատ զրո է։

### Վարժություններ

1. *Someone stole my bag.* → **STOLEN** → *My bag \_\_\_\_.*
2. *"I will come," he said.* → **WOULD** → *He said he \_\_\_\_.*
3. *The film was so long that we left.* → **SUCH** → *It was \_\_\_\_ that we left.*
4. *He is too young to vote.* → **ENOUGH** → *He is \_\_\_\_ to vote.*
5. *If you do not hurry, we will be late.* → **UNLESS** → *\_\_\_\_, we will be late.*
6. *I am sorry I did not study.* → **WISH** → *I \_\_\_\_ harder.*
7. Կազմիր քո սեփական փոխակերպման զույգը *although*-ի համար և փոխանակիր դասընկերոջ հետ։

### Պատասխաններ

1. was stolen։ 2. would come։ 3. such a long film։ 4. not old enough։ 5. Unless you hurry։ 6. wish I had studied։ 7. Քո պատասխանը։`,
        ru: `## Что требует задание

Даны предложение, второе предложение с пропуском и одно слово, которое нужно употребить. Смысл должен остаться тем же, данное слово не меняется, и в пропуск обычно идёт от двух до пяти слов.

> *I have not been to Gyumri for three years.* \\
> **LAST** \\
> *The \_\_\_\_\_\_\_\_\_\_ to Gyumri was three years ago.* \\
> → *last time I went*

## Восемь самых частых

| Трансформация | Оригинал | Ответ |
|---|---|---|
| актив → пассив | *Someone stole my bag.* | *My bag **was stolen**.* |
| прямая → косвенная речь | *"I will come," he said.* | *He said he **would come**.* |
| so → such | *The film was so long that…* | *It was **such a long** film that…* |
| too → enough | *He is too young to vote.* | *He is **not old enough** to vote.* |
| if → unless | *If you do not hurry, we will be late.* | ***Unless you hurry**, we will be late.* |
| must → have to | *You must finish today.* | *You **have to** finish today.* |
| since → for / ago | *I have not seen her since 2020.* | *It is four years **since I last saw** her.* |
| used to → no longer | *I used to smoke.* | *I **do not smoke any longer**.* |

## Ещё три, которые стоит отработать

| Конструкция | Пример |
|---|---|
| despite / although | *Although it rained, we went.* → ***Despite the rain**, we went.* |
| it is + since | *She left two hours ago.* → *It is two hours **since she left**.* |
| wish | *I am sorry I did not study.* → *I **wish I had studied**.* |

## Проверка в три шага

1. **Слова.** Посчитайте их. От двух до пяти, и данное слово на месте, без изменений, в правильной форме своей фразы.
2. **Смысл.** Прочитайте своё предложение отдельно, без оригинала. Говорит ли оно то же самое, включая кто что сделал?
3. **Время.** Сохраняет ли ваш глагол время оригинала? Косвенная речь отступает на шаг назад, пассив сохраняет время оригинала.

Большая часть потерянных баллов — с первого шага: сокращённая форма считается двумя словами, а изменение данного слова, даже во множественное число, — автоматический ноль.

### Упражнения

1. *Someone stole my bag.* → **STOLEN** → *My bag \_\_\_\_.*
2. *"I will come," he said.* → **WOULD** → *He said he \_\_\_\_.*
3. *The film was so long that we left.* → **SUCH** → *It was \_\_\_\_ that we left.*
4. *He is too young to vote.* → **ENOUGH** → *He is \_\_\_\_ to vote.*
5. *If you do not hurry, we will be late.* → **UNLESS** → *\_\_\_\_, we will be late.*
6. *I am sorry I did not study.* → **WISH** → *I \_\_\_\_ harder.*
7. Составь свою пару трансформации для *although* и обменяйся с одноклассником.

### Ответы

1. was stolen. 2. would come. 3. such a long film. 4. not old enough. 5. Unless you hurry. 6. wish I had studied. 7. Свой ответ.`,
      },
      [
        q(t("Someone stole my bag. → My bag ___.", "Someone stole my bag. → My bag ___.", "Someone stole my bag. → My bag ___."), [t("was stolen", "was stolen", "was stolen"), t("has stolen", "has stolen", "has stolen"), t("is stealing", "is stealing", "is stealing")], 0),
        q(t("He is too young to vote. → He is ___ to vote.", "He is too young to vote. → He is ___ to vote.", "He is too young to vote. → He is ___ to vote."), [t("enough young", "enough young", "enough young"), t("not old enough", "not old enough", "not old enough"), t("not enough old", "not enough old", "not enough old")], 1),
        q(t("The film was so long that… → It was ___ that…", "The film was so long that… → It was ___ that…", "The film was so long that… → It was ___ that…"), [t("such long film", "such long film", "such long film"), t("so a long film", "so a long film", "so a long film"), t("such a long film", "such a long film", "such a long film")], 2),
        q(t("How many words usually go in the gap?", "Սովորաբար քանի՞ բառ է գնում բացթողման մեջ", "Сколько слов обычно идёт в пропуск?"), [t("two to five", "երկուսից հինգ", "от двух до пяти"), t("exactly three", "ճիշտ երեք", "ровно три"), t("as many as you like", "որքան ուզես", "сколько угодно")], 0),
        q(t("What happens if you change the given word?", "Ի՞նչ է լինում, եթե փոխես տրված բառը", "Что будет, если изменить данное слово?"), [t("half a mark is taken off", "բալի կեսը հանվում է", "снимают полбалла"), t("the answer scores zero", "պատասխանը զրո է ստանում", "ответ получает ноль"), t("nothing, if the meaning is right", "ոչինչ, եթե իմաստը ճիշտ է", "ничего, если смысл верен")], 1),
        q(t("I am sorry I did not study. → I ___ harder.", "I am sorry I did not study. → I ___ harder.", "I am sorry I did not study. → I ___ harder."), [t("wish I studied", "wish I studied", "wish I studied"), t("wish I would study", "wish I would study", "wish I would study"), t("wish I had studied", "wish I had studied", "wish I had studied")], 2),
      ],
    ),
    lesson(
      "word-formation-exam-11",
      ["Word formation under exam conditions", "Բառակազմություն քննական պայմաններում", "Словообразование в условиях экзамена"],
      {
        en: ["Decide from the gap alone which part of speech is needed", "Add the right suffix for a noun, a verb, an adjective and an adverb", "Spot the three traps: the negative prefix, the plural and the spelling change"],
        hy: ["Միայն բացթողումից որոշել, թե խոսքի որ մասն է պետք", "Ավելացնել ճիշտ վերջածանցը գոյականի, բայի, ածականի և մակբայի համար", "Նկատել երեք թակարդը՝ ժխտական նախածանց, հոգնակի և ուղղագրության փոփոխություն"],
        ru: ["Определять по самому пропуску, какая часть речи нужна", "Добавлять верный суффикс для существительного, глагола, прилагательного и наречия", "Замечать три ловушки: отрицательная приставка, множественное число и смена написания"],
      },
      {
        en: `## Step one: read the gap, not the word

Before you look at the capitalised word, decide what the **gap** needs. The words around it tell you.

| What stands before the gap | What the gap needs |
|---|---|
| *a, an, the, this, his, two* | a noun |
| *is, was, seems, very, quite* + a noun after | an adjective |
| *is, was* with nothing after | an adjective or a past participle |
| a verb, or a whole clause | an adverb |
| *to, will, can, must* | a verb |
| *of, in, for, with* | a noun |

*The government must improve the \_\_\_\_ of rural schools (SAFE)* → after **the** and before **of**, a noun: **safety**.

## Step two: the suffix

| Needed | Common suffixes | Examples |
|---|---|---|
| noun, thing | *-ment, -ion, -ity, -ness, -ance, -th* | *development, decision, ability, darkness, importance, growth* |
| noun, person | *-er, -or, -ist, -ant, -ee* | *teacher, director, scientist, assistant, employee* |
| verb | *-ise, -ify, -en, en-* | *modernise, simplify, widen, enrich* |
| adjective | *-ful, -less, -able, -ive, -ous, -al, -y* | *useful, useless, readable, effective, dangerous, national, windy* |
| adverb | *-ly* | *carefully* |

## Step three: the three traps

**1. The negative prefix.** The sentence, not the word, tells you whether a prefix is needed. *The plan was \_\_\_\_ from the start (REALISTIC)* with *but it still passed* after it needs **unrealistic**.

| Prefix | With |
|---|---|
| un- | *unhappy, unable, unnecessary* |
| in- / im- / ir- / il- | *inability, impossible, irregular, illegal* |
| dis- | *disagree, dishonest, disappear* |
| mis- | *misunderstand, misuse* |
| non- | *non-smoker, non-existent* |

**2. The plural.** *There were three \_\_\_\_ (DIFFICULT)* needs **difficulties**, not *difficulty*. Count the signals: *three, several, many, a number of*.

**3. The spelling change.** Many suffixes change the stem.

| Word | Derived | Change |
|---|---|---|
| decide | decision | *-de* → *-sion* |
| able | ability | *-le* → *-ility* |
| happy | happiness | *y* → *i* |
| long | length | vowel change |
| high | height | vowel change |
| strong | strength | vowel change |

## A worked gap-fill

> *The \_\_\_\_(1) of the new railway was a major \_\_\_\_(2) for the region, although the \_\_\_\_(3) cost made some people \_\_\_\_(4) of it.* \\
> (1) BUILD (2) ACHIEVE (3) HIGH (4) SUSPECT

(1) *the …of* → noun: **building** (or **construction**). (2) *a major …* → noun: **achievement**. (3) before *cost* → adjective: **high** is already an adjective, so the gap wants the related noun-as-modifier or a different form: here **high** stays, which is the trap of a word that is already right. (4) *made some people … of it* → adjective: **suspicious**.

### Exercises

1. *The government must improve the \_\_\_\_ of rural schools.* (SAFE)
2. *There were three \_\_\_\_ with the plan.* (DIFFICULT)
3. *The plan was \_\_\_\_ from the start.* (REALISTIC, and the plan failed)
4. *She answered all the questions \_\_\_\_.* (CORRECT)
5. *His \_\_\_\_ to help surprised us.* (REFUSE)
6. Give the nouns from *decide*, *able*, *strong*.
7. Write four gap-fill items of your own and give them to a classmate.

### Answers

1. safety. 2. difficulties. 3. unrealistic. 4. correctly. 5. refusal. 6. decision, ability, strength. 7. Your own answer.`,
        hy: `## Առաջին քայլ՝ կարդա բացթողումը, ոչ բառը

Նախքան մեծատառ բառին նայելն որոշիր, թե ինչ է պետք **բացթողմանը**։ Շրջապատող բառերն ասում են։

| Ինչ կա բացթողումից առաջ | Ինչ է պետք բացթողմանը |
|---|---|
| *a, an, the, this, his, two* | գոյական |
| *is, was, seems, very, quite* և հետո գոյական | ածական |
| *is, was* և հետո ոչինչ | ածական կամ վաղակատար դերբայ |
| բայ կամ ամբողջ նախադասություն | մակբայ |
| *to, will, can, must* | բայ |
| *of, in, for, with* | գոյական |

*The government must improve the \_\_\_\_ of rural schools (SAFE)* → **the**-ից հետո և **of**-ից առաջ՝ գոյական․ **safety**։

## Երկրորդ քայլ՝ վերջածանցը

| Ինչ է պետք | Հաճախ հանդիպող վերջածանցներ | Օրինակներ |
|---|---|---|
| գոյական, առարկա | *-ment, -ion, -ity, -ness, -ance, -th* | *development, decision, ability, darkness, importance, growth* |
| գոյական, անձ | *-er, -or, -ist, -ant, -ee* | *teacher, director, scientist, assistant, employee* |
| բայ | *-ise, -ify, -en, en-* | *modernise, simplify, widen, enrich* |
| ածական | *-ful, -less, -able, -ive, -ous, -al, -y* | *useful, useless, readable, effective, dangerous, national, windy* |
| մակբայ | *-ly* | *carefully* |

## Երրորդ քայլ՝ երեք թակարդը

**1. Ժխտական նախածանցը։** Նախադասությունը, ոչ բառը, ասում է՝ նախածանց պե՞տք է։ *The plan was \_\_\_\_ from the start (REALISTIC)*, որից հետո գալիս է *but it still passed*, պահանջում է **unrealistic**։

| Նախածանց | Հետ |
|---|---|
| un- | *unhappy, unable, unnecessary* |
| in- / im- / ir- / il- | *inability, impossible, irregular, illegal* |
| dis- | *disagree, dishonest, disappear* |
| mis- | *misunderstand, misuse* |
| non- | *non-smoker, non-existent* |

**2. Հոգնակին։** *There were three \_\_\_\_ (DIFFICULT)* պահանջում է **difficulties**, ոչ *difficulty*։ Հաշվիր ազդանշանները՝ *three, several, many, a number of*։

**3. Ուղղագրության փոփոխությունը։** Շատ վերջածանցներ փոխում են արմատը։

| Բառ | Ածանցյալ | Փոփոխությունը |
|---|---|---|
| decide | decision | *-de* → *-sion* |
| able | ability | *-le* → *-ility* |
| happy | happiness | *y* → *i* |
| long | length | ձայնավորի փոփոխություն |
| high | height | ձայնավորի փոփոխություն |
| strong | strength | ձայնավորի փոփոխություն |

## Վերլուծված բացթողում

> *The \_\_\_\_(1) of the new railway was a major \_\_\_\_(2) for the region, although the \_\_\_\_(3) cost made some people \_\_\_\_(4) of it.* \\
> (1) BUILD (2) ACHIEVE (3) HIGH (4) SUSPECT

(1) *the …of* → գոյական․ **building** (կամ **construction**)։ (2) *a major …* → գոյական․ **achievement**։ (3) *cost*-ից առաջ → ածական․ **high**-ն արդեն ածական է, ուստի այստեղ բառը մնում է անփոփոխ, ինչն արդեն ճիշտ ձևով տրված բառի թակարդն է։ (4) *made some people … of it* → ածական․ **suspicious**։

### Վարժություններ

1. *The government must improve the \_\_\_\_ of rural schools.* (SAFE)
2. *There were three \_\_\_\_ with the plan.* (DIFFICULT)
3. *The plan was \_\_\_\_ from the start.* (REALISTIC, և պլանը ձախողվեց)
4. *She answered all the questions \_\_\_\_.* (CORRECT)
5. *His \_\_\_\_ to help surprised us.* (REFUSE)
6. Տուր *decide*, *able*, *strong* բառերի գոյականները։
7. Կազմիր քո չորս բացթողման առաջադրանքը և տուր դասընկերոջդ։

### Պատասխաններ

1. safety։ 2. difficulties։ 3. unrealistic։ 4. correctly։ 5. refusal։ 6. decision, ability, strength։ 7. Քո պատասխանը։`,
        ru: `## Первый шаг: читайте пропуск, а не слово

Прежде чем смотреть на слово заглавными буквами, решите, что нужно **пропуску**. Об этом говорят соседние слова.

| Что стоит перед пропуском | Что нужно пропуску |
|---|---|
| *a, an, the, this, his, two* | существительное |
| *is, was, seems, very, quite* и существительное после | прилагательное |
| *is, was* и ничего после | прилагательное или причастие |
| глагол или целое придаточное | наречие |
| *to, will, can, must* | глагол |
| *of, in, for, with* | существительное |

*The government must improve the \_\_\_\_ of rural schools (SAFE)* → после **the** и перед **of** нужно существительное: **safety**.

## Второй шаг: суффикс

| Что нужно | Частые суффиксы | Примеры |
|---|---|---|
| существительное, вещь | *-ment, -ion, -ity, -ness, -ance, -th* | *development, decision, ability, darkness, importance, growth* |
| существительное, человек | *-er, -or, -ist, -ant, -ee* | *teacher, director, scientist, assistant, employee* |
| глагол | *-ise, -ify, -en, en-* | *modernise, simplify, widen, enrich* |
| прилагательное | *-ful, -less, -able, -ive, -ous, -al, -y* | *useful, useless, readable, effective, dangerous, national, windy* |
| наречие | *-ly* | *carefully* |

## Третий шаг: три ловушки

**1. Отрицательная приставка.** О ней говорит предложение, а не слово. *The plan was \_\_\_\_ from the start (REALISTIC)*, за которым идёт *but it still passed*, требует **unrealistic**.

| Приставка | С чем |
|---|---|
| un- | *unhappy, unable, unnecessary* |
| in- / im- / ir- / il- | *inability, impossible, irregular, illegal* |
| dis- | *disagree, dishonest, disappear* |
| mis- | *misunderstand, misuse* |
| non- | *non-smoker, non-existent* |

**2. Множественное число.** *There were three \_\_\_\_ (DIFFICULT)* требует **difficulties**, а не *difficulty*. Считайте сигналы: *three, several, many, a number of*.

**3. Смена написания.** Многие суффиксы меняют корень.

| Слово | Производное | Изменение |
|---|---|---|
| decide | decision | *-de* → *-sion* |
| able | ability | *-le* → *-ility* |
| happy | happiness | *y* → *i* |
| long | length | смена гласной |
| high | height | смена гласной |
| strong | strength | смена гласной |

## Разобранное задание

> *The \_\_\_\_(1) of the new railway was a major \_\_\_\_(2) for the region, although the \_\_\_\_(3) cost made some people \_\_\_\_(4) of it.* \\
> (1) BUILD (2) ACHIEVE (3) HIGH (4) SUSPECT

(1) *the …of* → существительное: **building** (или **construction**). (2) *a major …* → существительное: **achievement**. (3) перед *cost* → прилагательное: **high** уже прилагательное, поэтому слово остаётся как есть — это ловушка уже верной формы. (4) *made some people … of it* → прилагательное: **suspicious**.

### Упражнения

1. *The government must improve the \_\_\_\_ of rural schools.* (SAFE)
2. *There were three \_\_\_\_ with the plan.* (DIFFICULT)
3. *The plan was \_\_\_\_ from the start.* (REALISTIC, и план провалился)
4. *She answered all the questions \_\_\_\_.* (CORRECT)
5. *His \_\_\_\_ to help surprised us.* (REFUSE)
6. Дай существительные от *decide*, *able*, *strong*.
7. Составь четыре своих задания на пропуски и дай однокласснику.

### Ответы

1. safety. 2. difficulties. 3. unrealistic. 4. correctly. 5. refusal. 6. decision, ability, strength. 7. Свой ответ.`,
      },
      [
        q(t("The government must improve the ___ of rural schools. (SAFE)", "The government must improve the ___ of rural schools. (SAFE)", "The government must improve the ___ of rural schools. (SAFE)"), [t("safely", "safely", "safely"), t("safety", "safety", "safety"), t("safe", "safe", "safe")], 1),
        q(t("There were three ___ with the plan. (DIFFICULT)", "There were three ___ with the plan. (DIFFICULT)", "There were three ___ with the plan. (DIFFICULT)"), [t("difficulties", "difficulties", "difficulties"), t("difficulty", "difficulty", "difficulty"), t("difficultly", "difficultly", "difficultly")], 0),
        q(t("She answered all the questions ___. (CORRECT)", "She answered all the questions ___. (CORRECT)", "She answered all the questions ___. (CORRECT)"), [t("correct", "correct", "correct"), t("correctness", "correctness", "correctness"), t("correctly", "correctly", "correctly")], 2),
        q(t("His ___ to help surprised us. (REFUSE)", "His ___ to help surprised us. (REFUSE)", "His ___ to help surprised us. (REFUSE)"), [t("refusal", "refusal", "refusal"), t("refusing", "refusing", "refusing"), t("refused", "refused", "refused")], 0),
        q(t("The noun from 'strong' is…", "«strong»-ի գոյականը", "Существительное от 'strong' —…"), [t("strongness", "strongness", "strongness"), t("strength", "strength", "strength"), t("strongth", "strongth", "strongth")], 1),
        q(t("What tells you a negative prefix is needed?", "Ի՞նչն է ասում, որ ժխտական նախածանց է պետք", "Что говорит, что нужна отрицательная приставка?"), [t("the capitalised word", "մեծատառ բառը", "слово заглавными буквами"), t("the meaning of the whole sentence", "ամբողջ նախադասության իմաստը", "смысл всего предложения"), t("the number of letters in the gap", "բացթողման տառերի թիվը", "число букв в пропуске")], 1),
      ],
    ),
    lesson(
      "reading-exam-tasks-11",
      ["Reading exam tasks", "Ընթերցանության քննական առաջադրանքներ", "Экзаменационные задания по чтению"],
      {
        en: ["Work through the four reading task types in the order that saves time", "Match a heading to a paragraph by its topic sentence", "Choose between true, false and not given without guessing"],
        hy: ["Անցնել ընթերցանության չորս տիպի առաջադրանքները ժամանակ խնայող հերթականությամբ", "Վերնագիրը համապատասխանեցնել պարբերությանը՝ ըստ նրա առաջատար նախադասության", "Ընտրել true, false և not given-ի միջև՝ առանց գուշակելու"],
        ru: ["Проходить четыре типа заданий по чтению в порядке, который экономит время", "Подбирать заголовок к абзацу по его тематическому предложению", "Выбирать между true, false и not given, не угадывая"],
      },
      {
        en: `## The four task types

| Task | What it tests | Time per item |
|---|---|---|
| matching headings | the point of each paragraph | 40 s |
| true / false / not given | careful comparison of two statements | 60 s |
| multiple choice | detail and inference | 60 s |
| gapped sentences | grammar plus the sense of the passage | 50 s |

Do them in this order: headings first, because they give you a map of the text; then true/false, because it follows the text in order; then multiple choice; then the gaps.

## Matching headings

Each paragraph has one sentence that carries its point, usually the first or the last. Underline it, then look for the heading that says the same thing in other words. Two traps:

1. A heading that repeats a word from the paragraph is often the wrong one. The right heading usually paraphrases.
2. A heading that fits one example inside the paragraph is wrong; it must fit the whole paragraph.

## True, false and not given

| Verdict | When |
|---|---|
| **true** | the text says it, in other words |
| **false** | the text says the **opposite** |
| **not given** | the text neither says nor contradicts it |

The commonest error is to mark **false** where the answer is **not given**. Ask yourself: *could both the text and the statement be right at once?* If yes, the answer is not given.

| Text | Statement | Answer |
|---|---|---|
| *The library opened in 1960.* | *The library opened before 1970.* | true |
| *The library opened in 1960.* | *The library opened in 1970.* | false |
| *The library opened in 1960.* | *The library was the first in the town.* | not given |

Watch the quantifiers: *all, every, only, never* make a statement easy to disprove, while *some, many, often* make it hard.

## Multiple choice

Read the question, then the text, then the options, in that order. Looking at the options first plants the wrong words in your head. Cross out the two that are clearly wrong, then decide between the remaining two by finding the exact line in the text that supports one of them.

## Gapped sentences

Here the grammar does half the work. If the gap follows *in order*, the next word is *to*; if it follows *a considerable*, a noun comes next. Read the sentence before and the sentence after, never the gap alone.

## Timing a 40-minute reading paper

| Minutes | What you do |
|---|---|
| 0–3 | skim the whole text, no pen |
| 3–10 | headings |
| 10–22 | true / false / not given |
| 22–33 | multiple choice |
| 33–38 | gaps |
| 38–40 | transfer answers and fill every blank, even by guess |

An empty answer scores nothing; a guess sometimes scores.

### Exercises

1. In which order should you do the four task types?
2. Text: *The library opened in 1960.* Statement: *It opened before 1970.* True, false or not given?
3. Text: *The library opened in 1960.* Statement: *It was the first in the town.* Which verdict?
4. Why is a heading that repeats a word from the paragraph often wrong?
5. In what order do you read a multiple-choice item?
6. What do you do in the last two minutes?
7. Take any 400-word article, write four headings for its paragraphs, and give it to a classmate to match.

### Answers

1. Headings, true/false, multiple choice, gaps. 2. True. 3. Not given. 4. Because the right heading usually paraphrases rather than repeats. 5. The question, then the text, then the options. 6. Transfer the answers and fill every blank, guessing if necessary. 7. Your own answer.`,
        hy: `## Չորս տիպի առաջադրանք

| Առաջադրանք | Ինչ է ստուգում | Ժամանակ՝ մեկ կետին |
|---|---|---|
| վերնագրերի համապատասխանեցում | ամեն պարբերության միտքը | 40 վրկ |
| true / false / not given | երկու դրույթի ուշադիր համեմատություն | 60 վրկ |
| բազմընտրանք | մանրամասն և ենթատեքստ | 60 վրկ |
| բացթողումով նախադասություններ | քերականություն և տեքստի իմաստ | 50 վրկ |

Արա այս հերթականությամբ՝ նախ վերնագրերը, քանի որ նրանք տեքստի քարտեզ են տալիս, հետո true/false-ը, քանի որ հետևում է տեքստի հերթականությանը, հետո բազմընտրանքը, հետո բացթողումները։

## Վերնագրերի համապատասխանեցում

Ամեն պարբերություն ունի մեկ նախադասություն, որ կրում է նրա միտքը՝ սովորաբար առաջինը կամ վերջինը։ Ընդգծիր այն, հետո փնտրիր վերնագիրը, որ նույնն ասում է այլ բառերով։ Երկու թակարդ․

1. Վերնագիրը, որ կրկնում է պարբերության բառը, հաճախ սխալն է։ Ճիշտ վերնագիրը սովորաբար վերաշարադրում է։
2. Վերնագիրը, որ համապատասխանում է պարբերության մեկ օրինակին, սխալ է․ պետք է համապատասխանի ամբողջ պարբերությանը։

## True, false և not given

| Վճիռ | Երբ |
|---|---|
| **true** | տեքստն ասում է այն՝ այլ բառերով |
| **false** | տեքստն ասում է **հակառակը** |
| **not given** | տեքստն ո՛չ ասում է, ո՛չ հակառակն է ասում |

Ամենահաճախ սխալը **false** նշելն է այնտեղ, որտեղ պատասխանը **not given** է։ Հարցրու քեզ․ *կարո՞ղ են և տեքստը, և դրույթը միաժամանակ ճիշտ լինել։* Եթե այո՝ պատասխանը not given է։

| Տեքստ | Դրույթ | Պատասխան |
|---|---|---|
| *The library opened in 1960.* | *The library opened before 1970.* | true |
| *The library opened in 1960.* | *The library opened in 1970.* | false |
| *The library opened in 1960.* | *The library was the first in the town.* | not given |

Հետևիր քանակականներին․ *all, every, only, never* բառերը դրույթը հեշտ են դարձնում ժխտելու, իսկ *some, many, often*՝ դժվար։

## Բազմընտրանք

Կարդա հարցը, հետո տեքստը, հետո տարբերակները՝ այս հերթականությամբ։ Նախ տարբերակներին նայելը սխալ բառերը դնում է գլխումդ։ Ջնջիր ակնհայտ սխալ երկուսը, հետո մնացած երկուսի միջև որոշիր՝ գտնելով տեքստի այն տողը, որ հաստատում է մեկը։

## Բացթողումով նախադասություններ

Այստեղ քերականությունն աշխատանքի կեսն անում է։ Եթե բացթողումից առաջ *in order* է, հաջորդ բառը *to* է․ եթե *a considerable* է, հետո գոյական է գալիս։ Կարդա նախորդ և հաջորդ նախադասությունը, երբեք միայն բացթողումը։

## 40-րոպեանոց ընթերցանության աշխատանքի ժամանակը

| Րոպե | Ինչ ես անում |
|---|---|
| 0–3 | արագ կարդում ամբողջ տեքստը՝ առանց գրիչի |
| 3–10 | վերնագրերը |
| 10–22 | true / false / not given |
| 22–33 | բազմընտրանքը |
| 33–38 | բացթողումները |
| 38–40 | տեղափոխում պատասխանները և լրացնում ամեն դատարկ տեղ, թեկուզ գուշակելով |

Դատարկ պատասխանն ոչինչ չի տալիս, գուշակությունն երբեմն տալիս է։

### Վարժություններ

1. Ո՞ր հերթականությամբ պետք է անես չորս տիպի առաջադրանքը։
2. Տեքստ՝ *The library opened in 1960.* Դրույթ՝ *It opened before 1970.* True, false, թե not given։
3. Տեքստ՝ *The library opened in 1960.* Դրույթ՝ *It was the first in the town.* Ո՞ր վճիռը։
4. Ինչո՞ւ է պարբերության բառը կրկնող վերնագիրը հաճախ սխալ։
5. Ո՞ր հերթականությամբ ես կարդում բազմընտրանքի կետը։
6. Ի՞նչ ես անում վերջին երկու րոպեում։
7. Վերցրու ցանկացած 400 բառանոց հոդված, գրիր չորս վերնագիր նրա պարբերությունների համար և տուր դասընկերոջդ՝ համապատասխանեցնելու։

### Պատասխաններ

1. Վերնագրերը, true/false-ը, բազմընտրանքը, բացթողումները։ 2. True։ 3. Not given։ 4. Որովհետև ճիշտ վերնագիրը սովորաբար վերաշարադրում է, ոչ թե կրկնում։ 5. Հարցը, հետո տեքստը, հետո տարբերակները։ 6. Տեղափոխում ես պատասխանները և լրացնում ամեն դատարկ տեղ, անհրաժեշտության դեպքում գուշակելով։ 7. Քո պատասխանը։`,
        ru: `## Четыре типа заданий

| Задание | Что проверяет | Время на пункт |
|---|---|---|
| подбор заголовков | мысль каждого абзаца | 40 с |
| true / false / not given | внимательное сравнение двух утверждений | 60 с |
| множественный выбор | деталь и вывод | 60 с |
| предложения с пропусками | грамматика плюс смысл текста | 50 с |

Делайте в таком порядке: сначала заголовки, они дают карту текста; затем true/false, оно идёт по порядку текста; затем множественный выбор; затем пропуски.

## Подбор заголовков

В каждом абзаце есть предложение, несущее его мысль, обычно первое или последнее. Подчеркните его, затем ищите заголовок, который говорит то же другими словами. Две ловушки:

1. Заголовок, повторяющий слово из абзаца, часто неверный. Верный обычно перефразирует.
2. Заголовок, подходящий одному примеру внутри абзаца, неверен: он должен подходить всему абзацу.

## True, false и not given

| Вердикт | Когда |
|---|---|
| **true** | текст говорит это другими словами |
| **false** | текст говорит **обратное** |
| **not given** | текст ни говорит, ни опровергает |

Самая частая ошибка — поставить **false** там, где ответ **not given**. Спросите себя: *могут ли текст и утверждение быть верны одновременно?* Если да, ответ not given.

| Текст | Утверждение | Ответ |
|---|---|---|
| *The library opened in 1960.* | *The library opened before 1970.* | true |
| *The library opened in 1960.* | *The library opened in 1970.* | false |
| *The library opened in 1960.* | *The library was the first in the town.* | not given |

Следите за количественными словами: *all, every, only, never* легко опровергнуть, а *some, many, often* — трудно.

## Множественный выбор

Читайте вопрос, затем текст, затем варианты — именно в этом порядке. Если смотреть варианты первыми, в голове останутся чужие слова. Вычеркните два явно неверных, затем между оставшимися выберите по той строке текста, которая подтверждает один из них.

## Предложения с пропусками

Здесь половину работы делает грамматика. Если перед пропуском *in order*, следующее слово *to*; если *a considerable*, дальше существительное. Читайте предложение до и после, никогда один пропуск.

## Хронометраж 40-минутной работы по чтению

| Минуты | Что делаете |
|---|---|
| 0–3 | беглый просмотр всего текста без ручки |
| 3–10 | заголовки |
| 10–22 | true / false / not given |
| 22–33 | множественный выбор |
| 33–38 | пропуски |
| 38–40 | переносите ответы и заполняете каждый пробел, пусть и наугад |

Пустой ответ не даёт ничего, догадка иногда даёт.

### Упражнения

1. В каком порядке делать четыре типа заданий?
2. Текст: *The library opened in 1960.* Утверждение: *It opened before 1970.* True, false или not given?
3. Текст: *The library opened in 1960.* Утверждение: *It was the first in the town.* Какой вердикт?
4. Почему заголовок, повторяющий слово из абзаца, часто неверен?
5. В каком порядке читают пункт множественного выбора?
6. Что делаете в последние две минуты?
7. Возьми любую статью в 400 слов, напиши четыре заголовка к её абзацам и дай однокласснику подобрать.

### Ответы

1. Заголовки, true/false, множественный выбор, пропуски. 2. True. 3. Not given. 4. Потому что верный заголовок обычно перефразирует, а не повторяет. 5. Вопрос, затем текст, затем варианты. 6. Переносите ответы и заполняете каждый пробел, при необходимости наугад. 7. Свой ответ.`,
      },
      [
        q(t("Which task do you do first?", "Ո՞ր առաջադրանքն ես անում առաջինը", "Какое задание делаете первым?"), [t("matching headings", "վերնագրերի համապատասխանեցումը", "подбор заголовков"), t("the gaps", "բացթողումները", "пропуски"), t("multiple choice", "բազմընտրանքը", "множественный выбор")], 0),
        q(t("Text: The library opened in 1960. Statement: It opened before 1970.", "Տեքստ․ The library opened in 1960. Դրույթ․ It opened before 1970.", "Текст: The library opened in 1960. Утверждение: It opened before 1970."), [t("false", "false", "false"), t("true", "true", "true"), t("not given", "not given", "not given")], 1),
        q(t("Text: The library opened in 1960. Statement: It was the first in the town.", "Տեքստ․ The library opened in 1960. Դրույթ․ It was the first in the town.", "Текст: The library opened in 1960. Утверждение: It was the first in the town."), [t("not given", "not given", "not given"), t("true", "true", "true"), t("false", "false", "false")], 0),
        q(t("In what order do you read a multiple-choice item?", "Ո՞ր հերթականությամբ ես կարդում բազմընտրանքի կետը", "В каком порядке читают пункт множественного выбора?"), [t("options, question, text", "տարբերակները, հարցը, տեքստը", "варианты, вопрос, текст"), t("question, text, options", "հարցը, տեքստը, տարբերակները", "вопрос, текст, варианты"), t("text, options, question", "տեքստը, տարբերակները, հարցը", "текст, варианты, вопрос")], 1),
        q(t("A heading that repeats a word from the paragraph is…", "Պարբերության բառը կրկնող վերնագիրը", "Заголовок, повторяющий слово из абзаца, —…"), [t("always correct", "միշտ ճիշտ է", "всегда верен"), t("often the wrong one", "հաճախ սխալն է", "часто неверный"), t("impossible to judge", "անհնար է գնահատել", "невозможно оценить")], 1),
        q(t("What do you do with an item you cannot answer?", "Ի՞նչ ես անում կետի հետ, որին չես կարող պատասխանել", "Что делаете с пунктом, на который не можете ответить?"), [t("leave it blank", "թողնում դատարկ", "оставляете пустым"), t("guess, since a blank scores nothing", "գուշակում, քանի որ դատարկն ոչինչ չի տալիս", "угадываете, пустой не даёт ничего"), t("write two answers", "գրում երկու պատասխան", "пишете два ответа")], 1),
      ],
    ),
    lesson(
      "listening-exam-tasks-11",
      ["Listening exam tasks", "Լսողության քննական առաջադրանքներ", "Экзаменационные задания по аудированию"],
      {
        en: ["Use the pause before each recording to predict what you will hear", "Catch a number, a name and a spelling at first hearing", "Recognise the three distractor tricks that make a wrong answer sound right"],
        hy: ["Գործածել ձայնագրությունից առաջ դադարը՝ կանխատեսելու, թե ինչ կլսես", "Առաջին լսելիս որսալ թիվը, անունը և ուղղագրությունը", "Ճանաչել երեք շեղող հնարքը, որ սխալ պատասխանը ճիշտ են հնչեցնում"],
        ru: ["Использовать паузу перед записью, чтобы предсказать, что услышите", "Схватывать число, имя и написание с первого прослушивания", "Узнавать три приёма-отвлечения, из-за которых неверный ответ звучит верно"],
      },
      {
        en: `## The pause is part of the task

Before each recording you get thirty to forty-five seconds. Do not stare at the page. Use them:

1. Read the questions and **underline the question word**: *how many, where, why, who*.
2. Write beside each gap what **kind** of answer it needs: a number, a time, a place, a name, a noun.
3. Guess two words that are likely to appear.

A pupil who has written *number?* beside a gap hears the number. A pupil who has read nothing hears a stream of English.

## Numbers, names and spellings

| Trap | Example | How to beat it |
|---|---|---|
| thirteen / thirty | *13 / 30* | listen for the stress: thirTEEN, THIRty |
| fifteen / fifty | *15 / 50* | the same |
| a spelled name | *H-O-V-H-A-N-N-E-S* | write the letters as you hear them, tidy up later |
| a changed number | *"Half past two… no, sorry, half past three."* | the **second** number is the answer |
| a phone number | *0-7-7… double four* | *double* means the digit twice |
| years | *nineteen eighty-eight* | write 1988 at once, not in words |

English says a year in two halves: *nineteen / eighty-eight*. A room number is often said digit by digit: *two-oh-four*.

## The three distractor tricks

**1. The correction.** The speaker says one thing and then changes it. The answer is always the corrected version. Listen for *actually, in fact, sorry, no, I mean, or rather*.

**2. The other speaker.** Two voices disagree; the question asks what **one** of them thinks. Note whose opinion each question wants before the recording starts.

**3. The word that is there but wrong.** All three options are mentioned in the recording. Only one answers the question. Hearing a word is not finding an answer.

> *Woman.* So that is Tuesday at six. \\
> *Man.* Actually, could we make it Wednesday? Tuesday is the concert. \\
> *Woman.* Wednesday at six, then.

The answer is Wednesday, though Tuesday was said twice.

## Rules for the answer sheet

| Rule | Why |
|---|---|
| never more words than the instruction allows | *two words maximum* means two |
| spelling counts | *recieve* scores zero |
| write the word you heard, not a synonym | the marker has a list |
| fill every gap before the end | a blank scores nothing |
| capital letters for names | *Yerevan*, not *yerevan* |

## Exercises

1. What three things do you do in the pause?
2. How do you tell *thirteen* from *thirty*?
3. *"Half past two… no, sorry, half past three."* What is the answer?
4. What does *double four* mean in a phone number?
5. Write this year in figures: *nineteen eighty-eight*.
6. Name the three distractor tricks.
7. Ask a classmate to read out five numbers, two names spelled aloud and one corrected time, and check what you wrote.

### Answers

1. Underline the question word, note the kind of answer each gap needs, guess two likely words. 2. By the stress: thirTEEN, THIRty. 3. Half past three. 4. The digit 4 twice, that is 44. 5. 1988. 6. The correction, the other speaker, the word that is mentioned but does not answer the question. 7. Your own answer.`,
        hy: `## Դադարն առաջադրանքի մասն է

Ամեն ձայնագրությունից առաջ ստանում ես երեսունից քառասունհինգ վայրկյան։ Չնայես էջին անշարժ։ Գործածիր նրանք․

1. Կարդա հարցերը և **ընդգծիր հարցական բառը**․ *how many, where, why, who*։
2. Ամեն բացթողման կողքին գրիր, թե ինչ **տիպի** պատասխան է պետք՝ թիվ, ժամ, տեղ, անուն, գոյական։
3. Գուշակիր երկու բառ, որ հավանաբար կհնչի։

Աշակերտը, որ բացթողման կողքին գրել է *number?*, լսում է թիվը։ Աշակերտը, որ ոչինչ չի կարդացել, լսում է անգլերենի հոսք։

## Թվեր, անուններ և ուղղագրություն

| Թակարդ | Օրինակ | Ինչպես հաղթել |
|---|---|---|
| thirteen / thirty | *13 / 30* | լսիր շեշտը՝ thirTEEN, THIRty |
| fifteen / fifty | *15 / 50* | նույնը |
| տառ առ տառ ասված անուն | *H-O-V-H-A-N-N-E-S* | գրիր տառերը լսելիս, հետո կարգի բեր |
| փոխված թիվ | *"Half past two… no, sorry, half past three."* | **երկրորդ** թիվն է պատասխանը |
| հեռախոսահամար | *0-7-7… double four* | *double* նշանակում է թվանշանն երկու անգամ |
| տարեթվեր | *nineteen eighty-eight* | անմիջապես գրիր 1988, ոչ բառերով |

Անգլերենը տարեթիվն ասում է երկու կիսով՝ *nineteen / eighty-eight*։ Սենյակի համարը հաճախ ասվում է թվանշան առ թվանշան՝ *two-oh-four*։

## Երեք շեղող հնարքը

**1. Ուղղումը։** Խոսողն ասում է մեկ բան, հետո փոխում։ Պատասխանը միշտ ուղղված տարբերակն է։ Լսիր *actually, in fact, sorry, no, I mean, or rather* բառերը։

**2. Մյուս խոսողը։** Երկու ձայն համաձայն չեն․ հարցն ուզում է իմանալ, թե **մեկը** ինչ է մտածում։ Մինչև ձայնագրությունը սկսվի, նշիր, թե ամեն հարցն ո՞ւմ կարծիքն է ուզում։

**3. Բառը, որ կա, բայց սխալ է։** Երեք տարբերակն էլ հնչում են ձայնագրության մեջ։ Միայն մեկն է պատասխանում հարցին։ Բառը լսելը պատասխան գտնել չէ։

> *Woman.* So that is Tuesday at six. \\
> *Man.* Actually, could we make it Wednesday? Tuesday is the concert. \\
> *Woman.* Wednesday at six, then.

*(Կինը․ Ուրեմն՝ երեքշաբթի, ժամը վեցին։ Տղամարդը․ Իրականում՝ չե՞նք կարող չորեքշաբթի դարձնել։ Երեքշաբթի համերգն է։ Կինը․ Ուրեմն՝ չորեքշաբթի, ժամը վեցին։)*

Պատասխանը չորեքշաբթին է, թեև երեքշաբթին հնչեց երկու անգամ։

## Պատասխանների թերթիկի կանոնները

| Կանոն | Ինչու |
|---|---|
| երբեք ավելի շատ բառ, քան հրահանգը թույլ է տալիս | *two words maximum* նշանակում է երկու |
| ուղղագրությունը հաշվվում է | *recieve*-ը զրո է |
| գրիր լսած բառը, ոչ հոմանիշը | գնահատողը ցուցակ ունի |
| մինչև ավարտը լրացրու ամեն բացթողում | դատարկն ոչինչ չի տալիս |
| անունները՝ մեծատառով | *Yerevan*, ոչ *yerevan* |

## Վարժություններ

1. Ի՞նչ երեք բան ես անում դադարի ընթացքում։
2. Ինչպե՞ս ես տարբերում *thirteen*-ը *thirty*-ից։
3. *"Half past two… no, sorry, half past three."* Ո՞րն է պատասխանը։
4. Ի՞նչ է նշանակում *double four*-ը հեռախոսահամարում։
5. Գրիր այս տարեթիվը թվերով․ *nineteen eighty-eight*։
6. Անվանիր երեք շեղող հնարքը։
7. Խնդրիր դասընկերոջդ բարձրաձայն կարդալ հինգ թիվ, երկու տառ առ տառ ասված անուն և մեկ ուղղված ժամ, և ստուգիր, թե ինչ ես գրել։

### Պատասխաններ

1. Ընդգծում ես հարցական բառը, նշում ես ամեն բացթողման պատասխանի տիպը, գուշակում ես երկու հավանական բառ։ 2. Շեշտով՝ thirTEEN, THIRty։ 3. Half past three։ 4. 4 թվանշանն երկու անգամ, այսինքն՝ 44։ 5. 1988։ 6. Ուղղումը, մյուս խոսողը, բառը, որ հնչում է, բայց հարցին չի պատասխանում։ 7. Քո պատասխանը։`,
        ru: `## Пауза — часть задания

Перед каждой записью дают тридцать-сорок пять секунд. Не смотрите в лист без дела. Используйте их:

1. Прочитайте вопросы и **подчеркните вопросительное слово**: *how many, where, why, who*.
2. Рядом с каждым пропуском напишите, какого **типа** ответ нужен: число, время, место, имя, существительное.
3. Угадайте два слова, которые, вероятно, прозвучат.

Ученик, написавший *number?* рядом с пропуском, слышит число. Ученик, не прочитавший ничего, слышит поток английского.

## Числа, имена и написание

| Ловушка | Пример | Как её обойти |
|---|---|---|
| thirteen / thirty | *13 / 30* | слушайте ударение: thirTEEN, THIRty |
| fifteen / fifty | *15 / 50* | то же |
| имя по буквам | *H-O-V-H-A-N-N-E-S* | записывайте буквы на слух, приводите в порядок потом |
| изменённое число | *"Half past two… no, sorry, half past three."* | ответ — **второе** число |
| телефонный номер | *0-7-7… double four* | *double* значит цифру дважды |
| годы | *nineteen eighty-eight* | сразу пишите 1988, а не словами |

Английский называет год двумя половинами: *nineteen / eighty-eight*. Номер комнаты часто говорят по цифрам: *two-oh-four*.

## Три приёма-отвлечения

**1. Поправка.** Говорящий сказал одно и тут же поменял. Ответ всегда исправленный вариант. Слушайте *actually, in fact, sorry, no, I mean, or rather*.

**2. Другой говорящий.** Два голоса не согласны; вопрос спрашивает, что думает **один** из них. До начала записи отметьте, чьё мнение нужно каждому вопросу.

**3. Слово, которое есть, но неверно.** В записи звучат все три варианта. Отвечает на вопрос только один. Услышать слово — не значит найти ответ.

> *Woman.* So that is Tuesday at six. \\
> *Man.* Actually, could we make it Wednesday? Tuesday is the concert. \\
> *Woman.* Wednesday at six, then.

*(Женщина: Итак, вторник в шесть. Мужчина: Вообще-то можно в среду? Во вторник концерт. Женщина: Тогда среда в шесть.)*

Ответ — среда, хотя вторник прозвучал дважды.

## Правила листа ответов

| Правило | Почему |
|---|---|
| никогда больше слов, чем позволяет инструкция | *two words maximum* значит два |
| написание считается | *recieve* даёт ноль |
| пишите услышанное слово, не синоним | у проверяющего список |
| до конца заполните каждый пропуск | пустое не даёт ничего |
| имена с большой буквы | *Yerevan*, не *yerevan* |

## Упражнения

1. Какие три вещи делаете в паузу?
2. Как отличить *thirteen* от *thirty*?
3. *"Half past two… no, sorry, half past three."* Какой ответ?
4. Что значит *double four* в телефонном номере?
5. Запиши этот год цифрами: *nineteen eighty-eight*.
6. Назови три приёма-отвлечения.
7. Попроси одноклассника прочитать пять чисел, два имени по буквам и одно исправленное время и проверь, что записал.

### Ответы

1. Подчёркиваете вопросительное слово, помечаете тип ответа у каждого пропуска, угадываете два вероятных слова. 2. По ударению: thirTEEN, THIRty. 3. Half past three. 4. Цифру 4 дважды, то есть 44. 5. 1988. 6. Поправка, другой говорящий, слово, которое звучит, но не отвечает на вопрос. 7. Свой ответ.`,
      },
      [
        q(t("What do you do in the pause before a recording?", "Ի՞նչ ես անում ձայնագրությունից առաջ դադարին", "Что делаете в паузу перед записью?"), [t("read the questions and note what kind of answer each gap needs", "կարդում հարցերը և նշում ամեն բացթողման պատասխանի տիպը", "читаете вопросы и помечаете тип ответа у каждого пропуска"), t("nothing, you save your attention", "ոչինչ, ուշադրությունը խնայում ես", "ничего, экономите внимание"), t("write your name", "գրում անունդ", "пишете своё имя")], 0),
        q(t("How do you tell thirteen from thirty?", "Ինչպե՞ս ես տարբերում thirteen-ը thirty-ից", "Как отличить thirteen от thirty?"), [t("by the length of the word", "բառի երկարությամբ", "по длине слова"), t("by the stress", "շեշտով", "по ударению"), t("you cannot", "հնարավոր չէ", "никак")], 1),
        q(t("'Half past two… no, sorry, half past three.' The answer is…", "«Half past two… no, sorry, half past three.» Պատասխանը", "'Half past two… no, sorry, half past three.' Ответ —…"), [t("half past two", "half past two", "half past two"), t("both", "երկուսն էլ", "оба"), t("half past three", "half past three", "half past three")], 2),
        q(t("What does 'double four' mean?", "Ի՞նչ է նշանակում «double four»-ը", "Что значит 'double four'?"), [t("44", "44", "44"), t("8", "8", "8"), t("4 then 2", "4 հետո 2", "4, затем 2")], 0),
        q(t("Write 'nineteen eighty-eight' in figures", "Գրիր «nineteen eighty-eight»-ը թվերով", "Запиши 'nineteen eighty-eight' цифрами"), [t("1908", "1908", "1908"), t("1988", "1988", "1988"), t("1888", "1888", "1888")], 1),
        q(t("All three options are mentioned in the recording. This means…", "Երեք տարբերակն էլ հնչում են ձայնագրության մեջ։ Սա նշանակում է", "Все три варианта звучат в записи. Это значит…"), [t("the task is faulty", "առաջադրանքը սխալ է", "задание с ошибкой"), t("any of them scores", "ցանկացածը բալ է տալիս", "любой даёт балл"), t("only one answers the question", "միայն մեկն է պատասխանում հարցին", "отвечает на вопрос только один")], 2),
      ],
    ),
    lesson(
      "collocations-exam-11",
      ["Collocations for the exam", "Բառակապակցություններ քննության համար", "Коллокации для экзамена"],
      {
        en: ["Learn eighty collocations in groups rather than one by one", "Choose the right verb for make, do, take, have, give and pay", "Correct the six collocation errors that Armenian and Russian speakers make most"],
        hy: ["Սովորել ութսուն բառակապակցություն խմբերով, ոչ մեկ առ մեկ", "Ընտրել ճիշտ բայը make, do, take, have, give և pay-ի միջև", "Ուղղել վեց սխալը, որ հայախոս և ռուսախոս սովորողներն ամենից հաճախ անում են"],
        ru: ["Учить восемьдесят коллокаций группами, а не по одной", "Выбирать верный глагол из make, do, take, have, give и pay", "Исправлять шесть ошибок, которые чаще всего делают говорящие по-армянски и по-русски"],
      },
      {
        en: `## make or do

| make | do |
|---|---|
| *a decision, a mistake, progress, an effort, a noise, a profit, friends, a difference, an appointment, sure* | *homework, the washing-up, business, research, damage, an exercise, your best, a favour, harm, a job* |

A rough rule: you **make** something that did not exist before, and you **do** an activity. It is only rough, so learn the lists.

## take, have, give, pay

| Verb | Collocations |
|---|---|
| take | *a decision, a photograph, a seat, part, place, an exam, advantage of, care of, a risk, your time* |
| have | *a go, a rest, a look, a bath, breakfast, an argument, an effect, an idea, a problem, fun* |
| give | *a hand, a speech, advice, permission, a lift, an example, birth, an opinion, a lecture* |
| pay | *attention, a visit, a compliment, a fine, respect, the bill, a price* |

Note that English allows both *make* and *take* with **a decision**, with *take* slightly more formal.

## Adjective + noun

*heavy rain, strong wind, a heavy smoker, a strong accent, a narrow escape, a slim chance, a hard frost, bitter cold, deep sleep, a close friend, a bright idea, a key factor, a major issue, high hopes, mixed feelings.*

Note the pairs that cannot swap: *heavy rain* but *strong wind*, never *strong rain*.

## Verb + adverb

*apologise sincerely, deny flatly, listen carefully, strongly disagree, deeply regret, fully understand, firmly believe, badly need, hardly know, fail completely.*

## The six errors to unlearn

| Wrong | Right | Why |
|---|---|---|
| *make a photo* | *take a photo* | from the Russian *сделать фото* |
| *make an exam* | *take an exam* | the same |
| *do a mistake* | *make a mistake* | from the Armenian *սխալ անել* |
| *say me the truth* | *tell me the truth* | *tell* takes a person; *say* does not |
| *strong rain* | *heavy rain* | fixed pair |
| *big attention* | *close attention* | fixed pair |

## Learning them in groups

Do not learn eighty single items. Learn them as answers to a question:

| Question | Group |
|---|---|
| What can be heavy? | *rain, traffic, a smoker, a meal, a loss* |
| What do you take? | *a photo, an exam, a seat, a risk, care* |
| What can be strong? | *wind, coffee, an accent, an argument, a feeling* |
| What do you pay? | *attention, a visit, a fine, the bill, a compliment* |

Four questions hold twenty items, and a question is what your memory can search.

### Exercises

1. make or do: *a mistake, your homework, progress, the washing-up*.
2. Choose the verb: *\_\_\_\_ a photograph.*
3. Choose the verb: *\_\_\_\_ attention.*
4. Correct: *Say me the truth.*
5. Correct: *There was strong rain all night.*
6. List four things that can be *heavy*.
7. Write eight sentences, one for each verb in the table, about your own week.

### Answers

1. make a mistake, do your homework, make progress, do the washing-up. 2. take. 3. pay. 4. *Tell me the truth.* 5. *There was heavy rain all night.* 6. For example: rain, traffic, a smoker, a meal. 7. Your own answer.`,
        hy: `## make թե do

| make | do |
|---|---|
| *a decision, a mistake, progress, an effort, a noise, a profit, friends, a difference, an appointment, sure* | *homework, the washing-up, business, research, damage, an exercise, your best, a favour, harm, a job* |

Կոպիտ կանոն՝ **make**-ով ստեղծում ես մի բան, որ նախկինում չկար, իսկ **do**-ով անում ես գործողություն։ Կանոնը միայն կոպիտ է, ուստի ցուցակները սովորիր։

## take, have, give, pay

| Բայ | Բառակապակցություններ |
|---|---|
| take | *a decision, a photograph, a seat, part, place, an exam, advantage of, care of, a risk, your time* |
| have | *a go, a rest, a look, a bath, breakfast, an argument, an effect, an idea, a problem, fun* |
| give | *a hand, a speech, advice, permission, a lift, an example, birth, an opinion, a lecture* |
| pay | *attention, a visit, a compliment, a fine, respect, the bill, a price* |

Ուշադրություն՝ **a decision**-ի հետ անգլերենը թույլ է տալիս և *make*, և *take*, և *take*-ը մի փոքր ավելի պաշտոնական է։

## Ածական + գոյական

*heavy rain, strong wind, a heavy smoker, a strong accent, a narrow escape, a slim chance, a hard frost, bitter cold, deep sleep, a close friend, a bright idea, a key factor, a major issue, high hopes, mixed feelings.*

Ուշադրություն՝ զույգերին, որ տեղերով չեն փոխվում․ *heavy rain*, բայց *strong wind*, երբեք *strong rain*։

## Բայ + մակբայ

*apologise sincerely, deny flatly, listen carefully, strongly disagree, deeply regret, fully understand, firmly believe, badly need, hardly know, fail completely.*

## Վեց սխալ, որ պետք է մոռանալ

| Սխալ | Ճիշտ | Ինչու |
|---|---|---|
| *make a photo* | *take a photo* | ռուսերենի *сделать фото*-ից |
| *make an exam* | *take an exam* | նույնը |
| *do a mistake* | *make a mistake* | հայերենի «սխալ անել»-ից |
| *say me the truth* | *tell me the truth* | *tell*-ը անձ է վերցնում, *say*-ը՝ ոչ |
| *strong rain* | *heavy rain* | կայուն զույգ |
| *big attention* | *close attention* | կայուն զույգ |

## Նրանց խմբերով սովորելը

Չսովորես ութսուն առանձին միավոր։ Սովորիր նրանք որպես հարցի պատասխան․

| Հարց | Խումբ |
|---|---|
| Ի՞նչը կարող է heavy լինել։ | *rain, traffic, a smoker, a meal, a loss* |
| Ի՞նչ ես take անում։ | *a photo, an exam, a seat, a risk, care* |
| Ի՞նչը կարող է strong լինել։ | *wind, coffee, an accent, an argument, a feeling* |
| Ի՞նչ ես pay անում։ | *attention, a visit, a fine, the bill, a compliment* |

Չորս հարցը պահում է քսան միավոր, իսկ հարցն այն է, ինչ քո հիշողությունը կարող է փնտրել։

### Վարժություններ

1. make թե do․ *a mistake, your homework, progress, the washing-up*։
2. Ընտրիր բայը․ *\_\_\_\_ a photograph.*
3. Ընտրիր բայը․ *\_\_\_\_ attention.*
4. Ուղղիր․ *Say me the truth.*
5. Ուղղիր․ *There was strong rain all night.*
6. Թվարկիր չորս բան, որ կարող է *heavy* լինել։
7. Գրիր ութ նախադասություն՝ աղյուսակի ամեն բայի համար մեկը, քո շաբաթվա մասին։

### Պատասխաններ

1. make a mistake, do your homework, make progress, do the washing-up։ 2. take։ 3. pay։ 4. *Tell me the truth.* 5. *There was heavy rain all night.* 6. Օրինակ՝ rain, traffic, a smoker, a meal։ 7. Քո պատասխանը։`,
        ru: `## make или do

| make | do |
|---|---|
| *a decision, a mistake, progress, an effort, a noise, a profit, friends, a difference, an appointment, sure* | *homework, the washing-up, business, research, damage, an exercise, your best, a favour, harm, a job* |

Грубое правило: **make** — создать то, чего раньше не было, **do** — выполнить действие. Правило грубое, поэтому списки учат наизусть.

## take, have, give, pay

| Глагол | Коллокации |
|---|---|
| take | *a decision, a photograph, a seat, part, place, an exam, advantage of, care of, a risk, your time* |
| have | *a go, a rest, a look, a bath, breakfast, an argument, an effect, an idea, a problem, fun* |
| give | *a hand, a speech, advice, permission, a lift, an example, birth, an opinion, a lecture* |
| pay | *attention, a visit, a compliment, a fine, respect, the bill, a price* |

Обратите внимание: с **a decision** английский допускает и *make*, и *take*, причём *take* чуть формальнее.

## Прилагательное + существительное

*heavy rain, strong wind, a heavy smoker, a strong accent, a narrow escape, a slim chance, a hard frost, bitter cold, deep sleep, a close friend, a bright idea, a key factor, a major issue, high hopes, mixed feelings.*

Берегитесь пар, которые нельзя переставить: *heavy rain*, но *strong wind*, никогда *strong rain*.

## Глагол + наречие

*apologise sincerely, deny flatly, listen carefully, strongly disagree, deeply regret, fully understand, firmly believe, badly need, hardly know, fail completely.*

## Шесть ошибок, от которых надо отучиться

| Неверно | Верно | Почему |
|---|---|---|
| *make a photo* | *take a photo* | от русского «сделать фото» |
| *make an exam* | *take an exam* | то же |
| *do a mistake* | *make a mistake* | от армянского «սխալ անել» |
| *say me the truth* | *tell me the truth* | *tell* берёт человека, *say* нет |
| *strong rain* | *heavy rain* | устойчивая пара |
| *big attention* | *close attention* | устойчивая пара |

## Как учить их группами

Не учите восемьдесят отдельных единиц. Учите их как ответы на вопрос:

| Вопрос | Группа |
|---|---|
| Что может быть heavy? | *rain, traffic, a smoker, a meal, a loss* |
| Что вы take? | *a photo, an exam, a seat, a risk, care* |
| Что может быть strong? | *wind, coffee, an accent, an argument, a feeling* |
| Что вы pay? | *attention, a visit, a fine, the bill, a compliment* |

Четыре вопроса держат двадцать единиц, а вопрос — это то, что память умеет искать.

### Упражнения

1. make или do: *a mistake, your homework, progress, the washing-up*.
2. Выбери глагол: *\_\_\_\_ a photograph.*
3. Выбери глагол: *\_\_\_\_ attention.*
4. Исправь: *Say me the truth.*
5. Исправь: *There was strong rain all night.*
6. Назови четыре вещи, которые могут быть *heavy*.
7. Напиши восемь предложений — по одному на каждый глагол таблицы — о своей неделе.

### Ответы

1. make a mistake, do your homework, make progress, do the washing-up. 2. take. 3. pay. 4. *Tell me the truth.* 5. *There was heavy rain all night.* 6. Например: rain, traffic, a smoker, a meal. 7. Свой ответ.`,
      },
      [
        q(t("___ a mistake", "___ a mistake", "___ a mistake"), [t("do", "do", "do"), t("make", "make", "make"), t("take", "take", "take")], 1),
        q(t("___ a photograph", "___ a photograph", "___ a photograph"), [t("take", "take", "take"), t("make", "make", "make"), t("do", "do", "do")], 0),
        q(t("___ attention", "___ attention", "___ attention"), [t("give", "give", "give"), t("make", "make", "make"), t("pay", "pay", "pay")], 2),
        q(t("Correct: Say me the truth.", "Ուղղիր․ Say me the truth.", "Исправь: Say me the truth."), [t("Tell me the truth.", "Tell me the truth.", "Tell me the truth."), t("Speak me the truth.", "Speak me the truth.", "Speak me the truth."), t("Say to me truth.", "Say to me truth.", "Say to me truth.")], 0),
        q(t("Which pair is correct?", "Ո՞ր զույգն է ճիշտ", "Какая пара верна?"), [t("strong rain", "strong rain", "strong rain"), t("heavy rain", "heavy rain", "heavy rain"), t("big rain", "big rain", "big rain")], 1),
        q(t("___ your homework", "___ your homework", "___ your homework"), [t("make", "make", "make"), t("take", "take", "take"), t("do", "do", "do")], 2),
      ],
    ),
    lesson(
      "year-11-exam-review",
      ["Year 11 review and mock exam", "11-րդ դասարանի կրկնություն և փորձնական քննություն", "Повторение 11 класса и пробный экзамен"],
      {
        en: ["Recall the grammar of the whole year from a single table", "Sit a short mock paper of five parts under timed conditions", "Mark your own paper and name the two things to work on next"],
        hy: ["Մեկ աղյուսակից վերհիշել ամբողջ տարվա քերականությունը", "Ժամանակի սահմանափակմամբ գրել հինգ մասից կարճ փորձնական աշխատանք", "Ինքդ գնահատել քո աշխատանքը և անվանել երկու բան, որոնց վրա պետք է հետո աշխատել"],
        ru: ["Восстановить грамматику всего года по одной таблице", "Написать короткую пробную работу из пяти частей на время", "Проверить свою работу и назвать две вещи для дальнейшей работы"],
      },
      {
        en: `## The year in one table

| Unit | Grammar | Writing or speaking |
|---|---|---|
| Society and the law | modal perfects, participle clauses | the discussion essay |
| Work and money | cleft sentences | the business email, the CV |
| Our planet | the subjunctive, cause and effect | describing data, the essay-project |
| Arts and leisure | advanced relative clauses, emphasis and fronting | the film review, comparing pictures |
| Exam practice | transformations, word formation | reading and listening tasks |

Five sentences that between them hold most of the year:

1. *He **must have left** before the storm.* (modal perfect)
2. ***Having finished** the report, she went home.* (participle clause)
3. ***It was** the silence **that** frightened us.* (cleft)
4. *It is essential that every member **be** present.* (subjunctive)
5. ***Never have I** seen such a crowd.* (inversion)

## The mock paper

Allow fifty minutes. Do not look back at the lessons until you have finished all five parts.

**Part 1. Transformations (6 marks).** Rewrite with the word given, using two to five words.

1. *Someone has repaired the roof.* **BEEN** → *The roof \_\_\_\_.*
2. *"I am leaving tomorrow," she said.* **WAS** → *She said she \_\_\_\_ the next day.*
3. *I regret not telling him.* **WISH** → *I \_\_\_\_ him.*
4. *Although it was raining, the match went on.* **DESPITE** → *\_\_\_\_, the match went on.*
5. *It is not necessary for you to come.* **HAVE** → *You \_\_\_\_ come.*
6. *The silence frightened us, not the noise.* **IT** → *\_\_\_\_ frightened us.*

**Part 2. Word formation (5 marks).** 7. *The \_\_\_\_ of the bridge took two years.* (CONSTRUCT) 8. *She spoke \_\_\_\_ about the plan.* (CRITIC) 9. *There were several \_\_\_\_ in the report.* (WEAK) 10. *The decision was completely \_\_\_\_.* (EXPECT, and it surprised everyone) 11. *His \_\_\_\_ to answer worried us.* (FAIL)

**Part 3. Collocations (4 marks).** Choose the verb: 12. *\_\_\_\_ a risk.* 13. *\_\_\_\_ progress.* 14. *\_\_\_\_ a compliment.* 15. *\_\_\_\_ the washing-up.*

**Part 4. Cause and effect (3 marks).** 16. Join with **because of**: *The road closed. There was snow.* 17. Join with **which**: *The road closed. This surprised nobody.* 18. Rewrite with **result from**: *Snow results in closures.*

**Part 5. Writing (12 marks).** Write 120 words on one of these, with a figure or an example in every paragraph:

- Should our town charge for plastic bags?
- A review of the last film you saw.
- An email asking a company for a two-week work placement.

## Marking your own paper

| Part | Answers |
|---|---|
| 1 | has been repaired; was leaving; wish I had told; Despite the rain; do not have to; It was the silence that |
| 2 | construction; critically; weaknesses; unexpected; failure |
| 3 | take; make; pay; do |
| 4 | *The road closed because of the snow.* / *The road closed, which surprised nobody.* / *Closures result from snow.* |
| 5 | see the checklist below |

For part 5, give yourself a mark out of 12: four for the task (did you answer the question, with examples), four for language (range of structures, few errors), four for organisation (paragraphs, linking words, an ending that does not repeat the opening).

Then write down **two** things to work on. Two, not ten: a list of ten is a list nobody uses.

### Exercises

1. Sit the whole mock paper in fifty minutes.
2. Mark parts 1 to 4 from the table.
3. Mark part 5 out of 12 using the three headings.
4. Which part did you lose most marks on?
5. Name the two things you will work on next.
6. Write out the five sentences of the year from memory.
7. Repeat the paper in a week and compare the two marks.

### Answers

1–3. Use the marking table. 4. Your own answer. 5. Your own answer, exactly two. 6. Compare with the list above; all five should be there. 7. Your own answer: the second mark should be higher on the parts you worked on.`,
        hy: `## Տարին մեկ աղյուսակում

| Բաժին | Քերականություն | Գիր կամ բանավոր |
|---|---|---|
| Հասարակություն և օրենք | մոդալ վաղակատար, դերբայական դարձվածներ | քննարկման էսսե |
| Աշխատանք և փող | անջատված կառույցներ | գործնական նամակ, ինքնակենսագրություն |
| Մեր մոլորակը | ըղձական, պատճառ և հետևանք | տվյալների նկարագրություն, էսսե-նախագիծ |
| Արվեստ և ժամանց | բարդ հարաբերական նախադասություններ, շեշտ և նախադասում | ֆիլմի գրախոսություն, նկարների համեմատություն |
| Քննական պարապմունք | փոխակերպումներ, բառակազմություն | ընթերցանության և լսողության առաջադրանքներ |

Հինգ նախադասություն, որ միասին պահում են տարվա մեծ մասը․

1. *He **must have left** before the storm.* (մոդալ վաղակատար)
2. ***Having finished** the report, she went home.* (դերբայական դարձված)
3. ***It was** the silence **that** frightened us.* (անջատված կառույց)
4. *It is essential that every member **be** present.* (ըղձական)
5. ***Never have I** seen such a crowd.* (շրջադասություն)

## Փորձնական աշխատանքը

Հատկացրու հիսուն րոպե։ Մինչև բոլոր հինգ մասը չավարտես, դասերին հետ չնայես։

**1-ին մաս․ Փոխակերպումներ (6 բալ)։** Վերաշարադրիր տրված բառով՝ երկուսից հինգ բառով։

1. *Someone has repaired the roof.* **BEEN** → *The roof \_\_\_\_.*
2. *"I am leaving tomorrow," she said.* **WAS** → *She said she \_\_\_\_ the next day.*
3. *I regret not telling him.* **WISH** → *I \_\_\_\_ him.*
4. *Although it was raining, the match went on.* **DESPITE** → *\_\_\_\_, the match went on.*
5. *It is not necessary for you to come.* **HAVE** → *You \_\_\_\_ come.*
6. *The silence frightened us, not the noise.* **IT** → *\_\_\_\_ frightened us.*

**2-րդ մաս․ Բառակազմություն (5 բալ)։** 7. *The \_\_\_\_ of the bridge took two years.* (CONSTRUCT) 8. *She spoke \_\_\_\_ about the plan.* (CRITIC) 9. *There were several \_\_\_\_ in the report.* (WEAK) 10. *The decision was completely \_\_\_\_.* (EXPECT, և դա բոլորին զարմացրեց) 11. *His \_\_\_\_ to answer worried us.* (FAIL)

**3-րդ մաս․ Բառակապակցություններ (4 բալ)։** Ընտրիր բայը․ 12. *\_\_\_\_ a risk.* 13. *\_\_\_\_ progress.* 14. *\_\_\_\_ a compliment.* 15. *\_\_\_\_ the washing-up.*

**4-րդ մաս․ Պատճառ և հետևանք (3 բալ)։** 16. Միացրու **because of**-ով․ *The road closed. There was snow.* 17. Միացրու **which**-ով․ *The road closed. This surprised nobody.* 18. Վերաշարադրիր **result from**-ով․ *Snow results in closures.*

**5-րդ մաս․ Գիր (12 բալ)։** Գրիր 120 բառ սրանցից մեկի մասին՝ ամեն պարբերությունում թիվ կամ օրինակ դնելով․

- Should our town charge for plastic bags?
- A review of the last film you saw.
- An email asking a company for a two-week work placement.

## Սեփական աշխատանքը գնահատելը

| Մաս | Պատասխաններ |
|---|---|
| 1 | has been repaired; was leaving; wish I had told; Despite the rain; do not have to; It was the silence that |
| 2 | construction; critically; weaknesses; unexpected; failure |
| 3 | take; make; pay; do |
| 4 | *The road closed because of the snow.* / *The road closed, which surprised nobody.* / *Closures result from snow.* |
| 5 | տես ներքևի ցանկը |

5-րդ մասի համար ինքդ դիր բալ տասներկուսից՝ չորս՝ առաջադրանքի համար (պատասխանե՞լ ես հարցին, օրինակներով), չորս՝ լեզվի համար (կառույցների բազմազանություն, քիչ սխալ), չորս՝ կազմակերպման համար (պարբերություններ, կապակցող բառեր, ավարտ, որ չի կրկնում սկիզբը)։

Հետո գրիր **երկու** բան, որոնց վրա պետք է աշխատել։ Երկու, ոչ տասը․ տասի ցուցակը ցուցակ է, որ ոչ ոք չի գործածում։

### Վարժություններ

1. Գրիր ամբողջ փորձնական աշխատանքը հիսուն րոպեում։
2. Գնահատիր 1-ից 4-րդ մասերն աղյուսակից։
3. Գնահատիր 5-րդ մասը տասներկուսից՝ երեք վերնագրով։
4. Ո՞ր մասում ես ամենաշատ բալ կորցրել։
5. Անվանիր երկու բան, որոնց վրա կաշխատես։
6. Գրիր տարվա հինգ նախադասությունն անգիր։
7. Կրկնիր աշխատանքը մեկ շաբաթ անց և համեմատիր երկու բալը։

### Պատասխաններ

1–3. Գործածիր գնահատման աղյուսակը։ 4. Քո պատասխանը։ 5. Քո պատասխանը՝ ուղիղ երկուսը։ 6. Համեմատիր վերևի ցանկի հետ․ հինգն էլ պետք է լինեն։ 7. Քո պատասխանը․ երկրորդ բալը պետք է բարձր լինի այն մասերում, որոնց վրա աշխատել ես։`,
        ru: `## Год в одной таблице

| Раздел | Грамматика | Письмо или говорение |
|---|---|---|
| Общество и закон | модальные перфектные формы, причастные обороты | дискуссионное эссе |
| Работа и деньги | расщеплённые предложения | деловое письмо, резюме |
| Наша планета | сослагательное, причина и следствие | описание данных, эссе-проект |
| Искусство и досуг | сложные относительные предложения, акцент и вынос | рецензия на фильм, сравнение картинок |
| Экзаменационная практика | трансформации, словообразование | задания по чтению и аудированию |

Пять предложений, в которых вместе держится большая часть года:

1. *He **must have left** before the storm.* (модальный перфект)
2. ***Having finished** the report, she went home.* (причастный оборот)
3. ***It was** the silence **that** frightened us.* (расщепление)
4. *It is essential that every member **be** present.* (сослагательное)
5. ***Never have I** seen such a crowd.* (инверсия)

## Пробная работа

Отведите пятьдесят минут. Не заглядывайте в уроки, пока не закончите все пять частей.

**Часть 1. Трансформации (6 баллов).** Перепишите с данным словом, используя от двух до пяти слов.

1. *Someone has repaired the roof.* **BEEN** → *The roof \_\_\_\_.*
2. *"I am leaving tomorrow," she said.* **WAS** → *She said she \_\_\_\_ the next day.*
3. *I regret not telling him.* **WISH** → *I \_\_\_\_ him.*
4. *Although it was raining, the match went on.* **DESPITE** → *\_\_\_\_, the match went on.*
5. *It is not necessary for you to come.* **HAVE** → *You \_\_\_\_ come.*
6. *The silence frightened us, not the noise.* **IT** → *\_\_\_\_ frightened us.*

**Часть 2. Словообразование (5 баллов).** 7. *The \_\_\_\_ of the bridge took two years.* (CONSTRUCT) 8. *She spoke \_\_\_\_ about the plan.* (CRITIC) 9. *There were several \_\_\_\_ in the report.* (WEAK) 10. *The decision was completely \_\_\_\_.* (EXPECT, и это всех удивило) 11. *His \_\_\_\_ to answer worried us.* (FAIL)

**Часть 3. Коллокации (4 балла).** Выберите глагол: 12. *\_\_\_\_ a risk.* 13. *\_\_\_\_ progress.* 14. *\_\_\_\_ a compliment.* 15. *\_\_\_\_ the washing-up.*

**Часть 4. Причина и следствие (3 балла).** 16. Соедините через **because of**: *The road closed. There was snow.* 17. Соедините через **which**: *The road closed. This surprised nobody.* 18. Перепишите через **result from**: *Snow results in closures.*

**Часть 5. Письмо (12 баллов).** Напишите 120 слов на одну из тем, поставив цифру или пример в каждый абзац:

- Should our town charge for plastic bags?
- A review of the last film you saw.
- An email asking a company for a two-week work placement.

## Как проверить свою работу

| Часть | Ответы |
|---|---|
| 1 | has been repaired; was leaving; wish I had told; Despite the rain; do not have to; It was the silence that |
| 2 | construction; critically; weaknesses; unexpected; failure |
| 3 | take; make; pay; do |
| 4 | *The road closed because of the snow.* / *The road closed, which surprised nobody.* / *Closures result from snow.* |
| 5 | см. список ниже |

За пятую часть поставьте себе балл из 12: четыре за задание (ответили ли на вопрос, с примерами), четыре за язык (разнообразие конструкций, мало ошибок), четыре за организацию (абзацы, связки, концовка, не повторяющая начало).

Затем выпишите **две** вещи для дальнейшей работы. Две, не десять: список из десяти — список, которым никто не пользуется.

### Упражнения

1. Напиши всю пробную работу за пятьдесят минут.
2. Проверь части с 1 по 4 по таблице.
3. Проверь пятую часть из 12 по трём заголовкам.
4. В какой части потерял больше всего баллов?
5. Назови две вещи, над которыми будешь работать.
6. Выпиши пять предложений года по памяти.
7. Повтори работу через неделю и сравни два балла.

### Ответы

1–3. Пользуйся таблицей проверки. 4. Свой ответ. 5. Свой ответ, ровно две. 6. Сравни со списком выше: все пять должны быть. 7. Свой ответ: второй балл должен быть выше в тех частях, над которыми работал.`,
      },
      [
        q(t("Someone has repaired the roof. → The roof ___.", "Someone has repaired the roof. → The roof ___.", "Someone has repaired the roof. → The roof ___."), [t("has been repaired", "has been repaired", "has been repaired"), t("was been repaired", "was been repaired", "was been repaired"), t("has repaired", "has repaired", "has repaired")], 0),
        q(t("It is not necessary for you to come. → You ___ come.", "It is not necessary for you to come. → You ___ come.", "It is not necessary for you to come. → You ___ come."), [t("must not", "must not", "must not"), t("do not have to", "do not have to", "do not have to"), t("have not to", "have not to", "have not to")], 1),
        q(t("The ___ of the bridge took two years. (CONSTRUCT)", "The ___ of the bridge took two years. (CONSTRUCT)", "The ___ of the bridge took two years. (CONSTRUCT)"), [t("constructive", "constructive", "constructive"), t("constructor", "constructor", "constructor"), t("construction", "construction", "construction")], 2),
        q(t("___ a compliment", "___ a compliment", "___ a compliment"), [t("pay", "pay", "pay"), t("make", "make", "make"), t("do", "do", "do")], 0),
        q(t("Which sentence shows a participle clause?", "Ո՞ր նախադասությունը ցույց է տալիս դերբայական դարձված", "В каком предложении причастный оборот?"), [t("It was the silence that frightened us.", "It was the silence that frightened us.", "It was the silence that frightened us."), t("Having finished the report, she went home.", "Having finished the report, she went home.", "Having finished the report, she went home."), t("Never have I seen such a crowd.", "Never have I seen such a crowd.", "Never have I seen such a crowd.")], 1),
        q(t("How many things should you list to work on next?", "Քանի՞ բան պետք է թվարկես հետագա աշխատանքի համար", "Сколько вещей стоит выписать для дальнейшей работы?"), [t("ten", "տասը", "десять"), t("as many as you found", "որքան գտել ես", "сколько нашёл"), t("two", "երկու", "две")], 2),
      ],
    ),
  ],
};
