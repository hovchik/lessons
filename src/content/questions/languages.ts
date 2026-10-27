import type { I18nText } from "../types";
import { gap, match, t } from "../types";
import type { QuestionMap } from "./index";

/** Text that is the same in every language (the English or Russian being learnt). */
const same = (s: string): I18nText => t(s, s, s);

const verbForm = t("Put the verb in the right form.", "Գրի՛ր բայը ճիշտ ձևով։", "Поставь глагол в нужную форму.");
const fillIn = t("Fill in the gaps.", "Լրացրո՛ւ բաց թողած բառերը։", "Заполни пропуски.");

export const englishQuestions: QuestionMap = {
  5: {
    "present-simple-review": [gap(verbForm, same("Tom ___ football every Saturday. (play)"), [same("plays")])],
    "articles-a-an-the": [gap(t("Write a or an.", "Գրի՛ր a կամ an։", "Впиши a или an."), same("I have ___ apple and ___ banana."), [same("an"), same("a")])],
    "irregular-verbs-1": [
      gap(verbForm, same("Yesterday I ___ to the park and ___ a big dog. (go, see)"), [same("went"), same("saw")]),
      match(t("Match each verb to its past form.", "Համապատասխանեցրո՛ւ բայը և նրա անցյալի ձևը։", "Соедини глагол с его формой прошедшего времени."), [
        [same("go"), same("went")],
        [same("see"), same("saw")],
        [same("have"), same("had")],
        [same("take"), same("took")],
      ]),
    ],
    comparatives: [gap(verbForm, same("An elephant is ___ than a horse. (big)"), [same("bigger")])],
    superlatives: [gap(verbForm, same("Aragats is the ___ mountain in Armenia. (high)"), [same("highest")])],
  },
  7: {
    "passive-past": [gap(verbForm, same("The temple of Garni ___ in the 1st century AD. (build)"), [same("was built")])],
    "first-conditional": [gap(verbForm, same("If it ___ tomorrow, we ___ at home. (rain, stay)"), [same("rains"), same("will stay|'ll stay")])],
    "relative-clauses": [
      gap(t("Write who or where.", "Գրի՛ր who կամ where։", "Впиши who или where."), same("The woman ___ lives next door is a doctor. This is the town ___ I was born."), [
        same("who|that"),
        same("where"),
      ]),
    ],
    "used-to": [gap(fillIn, same("I ___ to play with dolls when I was little, but now I don't."), [same("used")])],
    "ing-ed-adjectives": [
      gap(
        t("Write the -ing or the -ed adjective.", "Գրի՛ր -ing կամ -ed վերջավորությամբ ածականը։", "Впиши прилагательное на -ing или на -ed."),
        same("The film was ___, so we were ___. (bore)"),
        [same("boring"), same("bored")],
      ),
    ],
  },
};

const letters = (a: string, b: string) => t(`Write ${a} or ${b}.`, `Գրի՛ր ${a} կամ ${b}։`, `Вставь ${a} или ${b}.`);

export const russianQuestions: QuestionMap = {
  5: {
    "ru5-verb-spelling": [
      gap(
        letters("-тся", "-ться"),
        same("Он хорошо учи___ в школе. Он хочет хорошо учи___."),
        [same("тся|-тся"), same("ться|-ться")],
        t(
          "Ask the question: (what does he do?) учится has no ь; (what to do?) учиться has ь.",
          "Հարց տուր՝ (что делает?) учится՝ առանց ь-ի, (что делать?) учиться՝ ь-ով։",
          "Задай вопрос: (что делает?) учится — без ь; (что делать?) учиться — с ь.",
        ),
      ),
    ],
    "ru5-i-y-after-ts": [
      gap(
        letters("и", "ы"),
        same("ц___рк, огурц___, станц___я"),
        [same("и"), same("ы"), same("и")],
        t(
          "In roots and in words in -ция write и (цирк, станция); in endings write ы (огурцы).",
          "Արմատում և -ция-ով բառերում գրվում է и (цирк, станция), վերջավորություններում՝ ы (огурцы)։",
          "В корне и в словах на -ция пишется и (цирк, станция), в окончаниях — ы (огурцы).",
        ),
      ),
    ],
    "ru5-o-yo-sibilants": [
      gap(
        letters("о", "ё"),
        same("ж___лтый, ш___рох, ч___рный"),
        [same("ё"), same("о"), same("ё")],
        t(
          "Under stress write ё when a related word has е (жёлтый — желтеть, чёрный — чернеть); шорох has to be learnt.",
          "Շեշտի տակ գրվում է ё, եթե ազգակից բառում կա е (жёлтый — желтеть, чёрный — чернеть)․ шорох բառը պետք է հիշել։",
          "Под ударением пишется ё, если есть родственное слово с е (жёлтый — желтеть, чёрный — чернеть); шорох — слово-исключение.",
        ),
      ),
    ],
    "ru5-prefixes-z-s": [
      gap(
        letters("з", "с"),
        same("ра___бить, ра___писать, бе___шумный"),
        [same("з"), same("с"), same("с")],
        t(
          "Before a voiced consonant write з (разбить), before a voiceless one с (расписать, бесшумный).",
          "Ձայնեղ բաղաձայնից առաջ գրվում է з (разбить), խուլից առաջ՝ с (расписать, бесшумный)։",
          "Перед звонкой согласной пишется з (разбить), перед глухой — с (расписать, бесшумный).",
        ),
      ),
    ],
  },
  6: {
    "ru6-pre-pri": [
      gap(
        letters("е", "и"),
        same("пр___морский, пр___красный, пр___лететь"),
        [same("и"), same("е"), same("и")],
        t(
          "при- means near or joining (приморский, прилететь); пре- means very (прекрасный = очень красивый).",
          "при-ն նշանակում է մոտ լինել կամ միանալ (приморский, прилететь), пре-ն՝ «շատ» (прекрасный = очень красивый)։",
          "При- значит близость или присоединение (приморский, прилететь), пре- — «очень» (прекрасный = очень красивый).",
        ),
      ),
    ],
    "ru6-n-nn-adjectives": [
      gap(
        letters("н", "нн"),
        same("кожа___ый, лу___ый, деревя___ый"),
        [same("н"), same("нн"), same("нн")],
        t(
          "The suffix -ан- has one н (кожаный); a root ending in н plus the suffix -н- gives нн (лунный); деревянный is one of the three exceptions with -янн-.",
          "-ан- վերջածանցն ունի մեկ н (кожаный), н-ով վերջացող արմատը՝ -н- վերջածանցով, տալիս է нн (лунный), իսկ деревянный-ը -янн- ունեցող երեք բացառություններից է։",
          "В суффиксе -ан- одна н (кожаный); корень на н и суффикс -н- дают нн (лунный); деревянный — одно из трёх слов-исключений с -янн-.",
        ),
      ),
    ],
  },
};
