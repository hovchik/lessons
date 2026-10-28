import { gap, num, order, t } from "../types";
import type { QuestionMap } from "./index";

export const worldHistoryQuestions: QuestionMap = {
  6: {
    "legacy-of-antiquity": [
      order(
        t("Put these events in the order they happened.", "Դասավորի՛ր իրադարձություններն ըստ ժամանակագրության։", "Расположи события в хронологическом порядке."),
        [
          t("Cuneiform writing in Sumer", "Սեպագիրը Շումերում", "Клинопись в Шумере"),
          t("The pyramids of Giza", "Գիզայի բուրգերը", "Пирамиды в Гизе"),
          t("The laws of Hammurabi", "Համմուրապիի օրենքները", "Законы Хаммурапи"),
          t("The first Olympic Games", "Առաջին Օլիմպիական խաղերը", "Первые Олимпийские игры"),
          t("The founding of Rome", "Հռոմի հիմնադրումը", "Основание Рима"),
        ],
        t(
          "Cuneiform about 3200 BC, Giza about 2560 BC, Hammurabi about 1750 BC, the Olympics 776 BC, Rome 753 BC.",
          "Սեպագիրը՝ մ.թ.ա. մոտ 3200, Գիզան՝ մ.թ.ա. մոտ 2560, Համմուրապին՝ մ.թ.ա. մոտ 1750, Օլիմպիական խաղերը՝ մ.թ.ա. 776, Հռոմը՝ մ.թ.ա. 753։",
          "Клинопись — около 3200 г. до н. э., Гиза — около 2560 г. до н. э., Хаммурапи — около 1750 г. до н. э., Олимпийские игры — 776 г. до н. э., Рим — 753 г. до н. э.",
        ),
      ),
    ],
  },
};

export const armenianHistoryQuestions: QuestionMap = {
  6: {
    "kingdom-of-van": [
      num(
        t("In what year BC was the fortress of Erebuni founded?", "Մ.թ.ա. ո՞ր թվականին է հիմնադրվել Էրեբունի ամրոցը։", "В каком году до н. э. была основана крепость Эребуни?"),
        782,
        {
          explanation: t(
            "King Argishti I founded Erebuni in 782 BC; Yerevan counts its age from it.",
            "Արգիշտի I արքան Էրեբունին հիմնադրել է մ.թ.ա. 782 թվականին․ Երևանն իր տարիքը հաշվում է դրանից։",
            "Царь Аргишти I основал Эребуни в 782 г. до н. э.; от него Ереван отсчитывает свой возраст.",
          ),
        },
      ),
    ],
  },
};

export const informaticsQuestions: QuestionMap = {
  7: {
    "data-types-and-arithmetic": [
      gap(
        t("Fill in what Python gives.", "Լրացրո՛ւ, թե ինչ արդյունք կտա Python-ը։", "Впиши, что получит Python."),
        t("17 // 5 = ___   17 % 5 = ___", "17 // 5 = ___   17 % 5 = ___", "17 // 5 = ___   17 % 5 = ___"),
        [t("3", "3", "3"), t("2", "2", "2")],
        t(
          "// is whole division (17 = 5 · 3 + 2) and % is the remainder.",
          "//-ը ամբողջ բաժանումն է (17 = 5 · 3 + 2), իսկ %-ը՝ մնացորդը։",
          "// — деление нацело (17 = 5 · 3 + 2), а % — остаток.",
        ),
      ),
    ],
    "loops-python": [
      num(
        t(
          "s = 0, then for i in range(4): s = s + i. What is s at the end?",
          "s = 0, հետո for i in range(4): s = s + i։ Ինչի՞ է հավասար s-ը վերջում։",
          "s = 0, затем for i in range(4): s = s + i. Чему равно s в конце?",
        ),
        6,
        {
          explanation: t(
            "range(4) gives 0, 1, 2, 3, and 0 + 1 + 2 + 3 = 6.",
            "range(4)-ը տալիս է 0, 1, 2, 3, իսկ 0 + 1 + 2 + 3 = 6։",
            "range(4) даёт 0, 1, 2, 3, а 0 + 1 + 2 + 3 = 6.",
          ),
        },
      ),
    ],
  },
};
