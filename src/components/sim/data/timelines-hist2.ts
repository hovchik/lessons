import type { Tr } from "@/lib/art/spec";
import { t } from "../labels";
import type { TimeEvent, TimeSet } from "./timelines";

const E = (y: number, l: Tr, n?: Tr, o: { to?: number; c?: boolean } = {}): TimeEvent => ({ y, l, n, ...o });

/** Timelines for the Armenian history lessons added in the "more lessons" batch. Dates follow the lessons. */
export const HIST2_TIMELINES: Record<string, TimeSet> = {
  /* ---------------- grade 6 ---------------- */
  hellenism: {
    title: t("Armenia in the Hellenistic age", "Հայաստանը հելլենիստական դարաշրջանում", "Армения в эпоху эллинизма"),
    events: [
      E(-331, t("Battle of Gaugamela", "Գավգամելայի ճակատամարտը", "Битва при Гавгамелах"), t("Armenian troops fought in the Persian army.", "Հայկական զորաբանակը կռվում էր պարսկական բանակում։", "Армянский отряд сражался в персидском войске.")),
      E(-323, t("Death of Alexander; the Seleucids", "Ալեքսանդրի մահը. Սելևկյանները", "Смерть Александра; Селевкиды")),
      E(-200, t("Antiochus III conquers Greater Armenia", "Անտիոքոս III-ը նվաճում է Մեծ Հայքը", "Антиох III завоёвывает Великую Армению"), t("Yervand IV, the last Yervanduni, was killed.", "Զոհվեց վերջին Երվանդունին՝ Երվանդ IV-ը։", "Погиб последний Ервандуни, Ерванд IV."), { c: true }),
      E(-190, t("Battle of Magnesia", "Մագնեսիայի ճակատամարտը", "Битва при Магнесии"), t("Rome crushed Antiochus III.", "Հռոմը ջախջախեց Անտիոքոս III-ին։", "Рим разгромил Антиоха III.")),
      E(-188, t("Treaty of Apamea: Artashes and Zareh are kings", "Ապամեայի պայմանագիրը. Արտաշեսը և Զարեհը թագավորներ են", "Апамейский мир: Арташес и Зарех — цари")),
      E(-70, t("Antiochus I of Commagene builds Nemrut", "Կոմմագենեի Անտիոքոս I-ը կառուցում է Նեմրութը", "Антиох I Коммагенский строит Немрут"), t("He reigned until 38 BC.", "Նա թագավորեց մինչև մ.թ.ա. 38 թվականը։", "Он правил до 38 г. до н. э."), { to: -38 }),
    ],
  },
  romeparthia: {
    title: t("Between Rome and Parthia", "Հռոմի և Պարթևստանի միջև", "Между Римом и Парфией"),
    events: [
      E(-34, t("Artavazd II is seized by Mark Antony", "Մարկոս Անտոնիոսը գերում է Արտավազդ II-ին", "Марк Антоний захватывает Артавазда II")),
      E(-20, t("Augustus puts Tigran III on the throne", "Օգոստոսը գահին է նստեցնում Տիգրան III-ին", "Август сажает на престол Тиграна III")),
      E(18, t("Artashes III (Zeno) is crowned in Artashat", "Արտաշատում թագադրվում է Արտաշես III-ը (Զենոն)", "В Арташате коронован Арташес III (Зенон)"), undefined, { to: 34 }),
      E(51, t("Radamist seizes the throne", "Հռադամիզդը զավթում է գահը", "Радамист захватывает престол")),
      E(58, t("Corbulo burns Artashat", "Կորբուլոնն այրում է Արտաշատը", "Корбулон сжигает Арташат")),
      E(62, t("Paetus surrenders at Rhandeia", "Պետոսը անձնատուր է լինում Հռանդեայի մոտ", "Пет сдаётся у Рандеи")),
      E(63, t("Treaty of Rhandeia", "Հռանդեայի պայմանագիրը", "Рандейский договор"), t("An Arshakid king, crowned by the Roman emperor.", "Արշակունի թագավոր՝ Հռոմի կայսեր ձեռքով թագադրված։", "Царь из Аршакидов, коронованный римским императором.")),
      E(66, t("Trdat I is crowned in Rome", "Տրդատ I-ը թագադրվում է Հռոմում", "Трдат I коронован в Риме")),
    ],
  },
  trdat3: {
    title: t("The conversion of Armenia", "Հայաստանի քրիստոնեացումը", "Крещение Армении"),
    events: [
      E(224, t("The Sasanians take power in Persia", "Սասանյանները իշխանության են գալիս Պարսկաստանում", "Сасаниды приходят к власти в Персии")),
      E(298, t("Peace of Nisibis secures Trdat III", "Մծբինի հաշտությունն ամրապնդում է Տրդատ III-ին", "Нисибисский мир укрепляет Трдата III")),
      E(301, t("Christianity becomes the state religion", "Քրիստոնեությունը դառնում է պետական կրոն", "Христианство становится государственной религией"), t("The traditional date; some scholars suggest about 314.", "Ավանդական թվականն է. որոշ գիտնականներ առաջարկում են մոտ 314-ը։", "Традиционная дата; некоторые учёные предлагают около 314 года.")),
      E(313, t("Christianity permitted in the Roman Empire", "Քրիստոնեությունը թույլատրվում է Հռոմեական կայսրությունում", "Христианство разрешено в Римской империи")),
      E(325, t("Aristakes at the Council of Nicaea", "Արիստակեսը Նիկիայի ժողովում", "Аристакес на Никейском соборе")),
      E(380, t("Christianity becomes Rome's state religion", "Քրիստոնեությունը դառնում է Հռոմի պետական կրոն", "Христианство становится государственной религией Рима")),
      E(405, t("Mesrop Mashtots creates the alphabet", "Մեսրոպ Մաշտոցը ստեղծում է այբուբենը", "Месроп Маштоц создаёт алфавит")),
    ],
  },
  arshak2: {
    title: t("Arshak II and Pap", "Արշակ II-ը և Պապը", "Аршак II и Пап"),
    events: [
      E(350, t("Arshak II reigns", "Թագավորում է Արշակ II-ը", "Правит Аршак II"), undefined, { to: 368, c: true }),
      E(354, t("Council of Ashtishat under Nerses the Great", "Աշտիշատի ժողովը Ներսես Մեծի օրոք", "Аштишатский собор при Нерсесе Великом")),
      E(363, t("Rome's peace with Persia leaves Armenia alone", "Հռոմի հաշտությունը Պարսկաստանի հետ Հայաստանը թողնում է մենակ", "Мир Рима с Персией оставляет Армению одну")),
      E(371, t("Battle of Dzirav", "Ձիրավի ճակատամարտը", "Битва при Дзираве"), t("Mushegh Mamikonyan and Roman troops crushed the Persians.", "Մուշեղ Մամիկոնյանը հռոմեական զորքի հետ ջախջախեց պարսիկներին։", "Мушег Мамиконян с римскими войсками разгромил персов.")),
      E(374, t("Pap is murdered on the orders of Valens", "Պապը սպանվում է Վաղեսի հրամանով", "Пап убит по приказу Валента")),
      E(387, t("Rome and Persia divide Armenia", "Հռոմը և Պարսկաստանը բաժանում են Հայաստանը", "Рим и Персия делят Армению")),
    ],
  },
};
