import { t } from "../labels";
import type { BarSet } from "./bars";

const M = t("m", "մ", "м");
const CH = t("chapters", "գլուխ", "глав");

/* Church history data sets: the size of Noah's ark, the length of the prophets' books, world religions. */
export const CH_BARS: Record<string, BarSet> = {
  /* ---------------- grade 5 ---------------- */
  arksize: {
    title: t("How big was Noah's ark? (length, m)", "Որքա՞ն մեծ էր Նոյյան տապանը (երկարություն, մ)", "Насколько велик был Ноев ковчег? (длина, м)"),
    unit: M,
    source: t("Genesis 6:15 gives 300 × 50 × 30 cubits. A cubit, the length from elbow to fingertip, was about 45 cm, so the numbers are approximate.", "Ծննդոց 6։15-ը տալիս է 300 × 50 × 30 կանգուն։ Կանգունը՝ արմունկից մինչև մատների ծայրը եղած երկարությունը, մոտ 45 սմ էր, ուստի թվերը մոտավոր են։", "Бытие 6:15 даёт 300 × 50 × 30 локтей. Локоть — длина от локтя до кончиков пальцев — составлял около 45 см, поэтому числа приблизительны."),
    rows: [
      [t("Blue whale", "Կապույտ կետ", "Синий кит"), 30, t("The largest animal that has ever lived, up to about 30 m.", "Երբևէ ապրած ամենամեծ կենդանին՝ մինչև մոտ 30 մ։", "Самое большое животное из когда-либо живших, до 30 м.")],
      [t("Jumbo jet", "Ջամբո ինքնաթիռ", "Аэробус «Джамбо»"), 71, t("A Boeing 747 airliner is about 70 m long.", "Boeing 747 ինքնաթիռի երկարությունը մոտ 70 մ է։", "Длина самолёта Boeing 747 — около 70 м.")],
      [t("Football pitch", "Ֆուտբոլի դաշտ", "Футбольное поле"), 105, t("A standard pitch for international matches.", "Միջազգային խաղերի ստանդարտ դաշտ։", "Стандартное поле для международных матчей.")],
      [t("Noah's ark", "Նոյյան տապան", "Ноев ковчег"), 135, t("300 cubits: longer than a football pitch, about 22 m wide and 13 m high, with three decks.", "300 կանգուն․ ավելի երկար, քան ֆուտբոլի դաշտը, մոտ 22 մ լայնությամբ և 13 մ բարձրությամբ, երեք հարկով։", "300 локтей: длиннее футбольного поля, около 22 м в ширину и 13 м в высоту, с тремя палубами.")],
      [t("Titanic", "Տիտանիկ", "Титаник"), 269, t("The famous liner of 1912 was twice as long.", "1912 թվականի հայտնի շոգենավն երկու անգամ ավելի երկար էր։", "Знаменитый лайнер 1912 года был вдвое длиннее.")],
    ],
  },
  prophets: {
    title: t("Major and minor prophets: length of the book", "Մեծ և փոքր մարգարեներ՝ գրքի ծավալը", "Великие и малые пророки: объём книги"),
    unit: CH,
    source: t("Chapter counts as in most Bibles. \"Major\" and \"minor\" refer to the length of the books, not to how important the prophets were.", "Գլուխների թիվը՝ ինչպես Աստվածաշնչերի մեծ մասում։ «Մեծ» և «փոքր» բառերը վերաբերում են գրքերի ծավալին, այլ ոչ թե մարգարեների կարևորությանը։", "Число глав — как в большинстве Библий. «Великие» и «малые» относится к объёму книг, а не к важности пророков."),
    colors: ["#be123c", "#be123c", "#be123c", "#be123c", "#0369a1", "#0369a1", "#0369a1", "#0369a1", "#0369a1"],
    rows: [
      [t("Isaiah", "Եսայի", "Исаия"), 66, t("The longest. Since St Jerome, Christian writers have called Isaiah the \"fifth evangelist\" because he speaks so much about the Saviour.", "Ամենածավալունը։ Սուրբ Հերոնիմոսից ի վեր քրիստոնյա հեղինակներն Եսայուն անվանում են «հինգերորդ ավետարանիչ», որովհետև նա այդքան շատ է խոսում Փրկչի մասին։", "Самая длинная. Со времён блаженного Иеронима христианские авторы называют Исаию «пятым евангелистом», потому что он так много говорит о Спасителе.")],
      [t("Jeremiah", "Երեմիա", "Иеремия"), 52, t("He lived through the fall of Jerusalem to Babylon; the book of Lamentations is also attributed to him.", "Նա ապրեց Երուսաղեմի անկումը Բաբելոնի կողմից․ նրան է վերագրվում նաև Ողբերի գիրքը։", "Он пережил падение Иерусалима перед Вавилоном; ему приписывают и Плач Иеремии.")],
      [t("Ezekiel", "Եզեկիել", "Иезекииль"), 48, t("A priest in exile in Babylon, famous for his vision of a valley of dry bones coming to life.", "Աքսորյալ քահանա Բաբելոնում, հայտնի իր տեսիլքով, որում չոր ոսկորների հովիտը կենդանանում է։", "Священник в вавилонском плену, известный видением долины сухих костей, которые оживают.")],
      [t("Daniel", "Դանիել", "Даниил"), 14, t("14 chapters in the Greek and Armenian Bibles, 12 in the Hebrew one. It is counted among the major prophets by tradition, though it is about as long as Hosea.", "Հունական և հայկական Աստվածաշնչերում՝ 14 գլուխ, եբրայականում՝ 12։ Ավանդաբար այն դասվում է մեծ մարգարեների շարքին, թեև մոտավորապես Ովսեի չափ է։", "14 глав в греческой и армянской Библиях, 12 в еврейской. По традиции его относят к великим пророкам, хотя книга примерно такой же длины, как Осия.")],
      [t("Hosea", "Ովսե", "Осия"), 14, t("The first of the twelve minor prophets.", "Տասներկու փոքր մարգարեներից առաջինը։", "Первый из двенадцати малых пророков.")],
      [t("Amos", "Ամովս", "Амос"), 9, t("A shepherd who spoke out against the rich who cheated the poor.", "Հովիվ, որը բարձրաձայնեց աղքատներին խաբող հարուստների դեմ։", "Пастух, обличавший богачей, обманывавших бедных.")],
      [t("Micah", "Միքիա", "Михей"), 7, t("He named Bethlehem as the town of the coming ruler (Micah 5:2).", "Նա Բեթղեհեմը նշեց որպես գալիք առաջնորդի քաղաք (Միքիա 5։2)։", "Он назвал Вифлеем городом грядущего владыки (Михей 5:2).")],
      [t("Jonah", "Հովնան", "Иона"), 4, t("Only four chapters, yet one of the best-known stories in the Bible.", "Ընդամենը չորս գլուխ, բայց Աստվածաշնչի ամենահայտնի պատմություններից մեկը։", "Всего четыре главы, но одна из самых известных историй Библии.")],
      [t("Obadiah", "Աբդիու", "Авдий"), 1, t("The shortest book of the Old Testament: 21 verses.", "Հին Կտակարանի ամենակարճ գիրքը՝ 21 համար։", "Самая короткая книга Ветхого Завета: 21 стих.")],
    ],
  },
};
