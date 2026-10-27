import { match, num, order, t } from "../types";
import type { QuestionMap } from "./index";

export const physicsQuestions: QuestionMap = {
  7: {
    speed: [
      num(
        t(
          "A car covers 150 km in 2 h. What is its speed?",
          "Ավտոմեքենան 2 ժ-ում անցնում է 150 կմ։ Որքա՞ն է նրա արագությունը։",
          "Автомобиль проезжает 150 км за 2 ч. Какова его скорость?",
        ),
        75,
        {
          unit: t("km/h", "կմ/ժ", "км/ч"),
          explanation: t("v = s / t = 150 km / 2 h = 75 km/h.", "v = s / t = 150 կմ / 2 ժ = 75 կմ/ժ։", "v = s / t = 150 км / 2 ч = 75 км/ч."),
        },
      ),
    ],
    density: [
      num(
        t(
          "An aluminium block of 54 g has a volume of 20 cm³. What is its density?",
          "54 գ զանգվածով ալյումինե չորսուի ծավալը 20 սմ³ է։ Որքա՞ն է նրա խտությունը։",
          "Алюминиевый брусок массой 54 г имеет объём 20 см³. Какова его плотность?",
        ),
        2.7,
        {
          unit: t("g/cm³", "գ/սմ³", "г/см³"),
          explanation: t("ρ = m / V = 54 g / 20 cm³ = 2.7 g/cm³.", "ρ = m / V = 54 գ / 20 սմ³ = 2,7 գ/սմ³։", "ρ = m / V = 54 г / 20 см³ = 2,7 г/см³."),
        },
      ),
    ],
    "pressure-solids": [
      num(
        t(
          "A box weighing 800 N stands on an area of 0.4 m². What pressure does it make?",
          "800 Ն կշռով արկղը հենված է 0,4 մ² մակերեսի վրա։ Ի՞նչ ճնշում է այն գործադրում։",
          "Ящик весом 800 Н стоит на площади 0,4 м². Какое давление он оказывает?",
        ),
        2000,
        {
          unit: t("Pa", "Պա", "Па"),
          explanation: t("p = F / S = 800 N / 0.4 m² = 2000 Pa.", "p = F / S = 800 Ն / 0,4 մ² = 2000 Պա։", "p = F / S = 800 Н / 0,4 м² = 2000 Па."),
        },
      ),
    ],
    "mechanical-work": [
      num(
        t(
          "A force of 40 N moves a box 5 m. How much work is done?",
          "40 Ն ուժն արկղը տեղափոխում է 5 մ։ Որքա՞ն աշխատանք է կատարվում։",
          "Сила 40 Н перемещает ящик на 5 м. Какая работа совершается?",
        ),
        200,
        {
          unit: t("J", "Ջ", "Дж"),
          explanation: t("A = F · s = 40 N · 5 m = 200 J.", "A = F · s = 40 Ն · 5 մ = 200 Ջ։", "A = F · s = 40 Н · 5 м = 200 Дж."),
        },
      ),
    ],
    power: [
      num(
        t(
          "A motor does 1200 J of work in 60 s. What is its power?",
          "Շարժիչը 60 վ-ում կատարում է 1200 Ջ աշխատանք։ Որքա՞ն է նրա հզորությունը։",
          "Двигатель за 60 с совершает работу 1200 Дж. Какова его мощность?",
        ),
        20,
        {
          unit: t("W", "Վտ", "Вт"),
          explanation: t("N = A / t = 1200 J / 60 s = 20 W.", "N = A / t = 1200 Ջ / 60 վ = 20 Վտ։", "N = A / t = 1200 Дж / 60 с = 20 Вт."),
        },
      ),
    ],
    "states-of-matter": [
      match(t("Match each property to the state of matter.", "Համապատասխանեցրո՛ւ հատկությունը և նյութի վիճակը։", "Соедини свойство с агрегатным состоянием."), [
        [t("Keeps its shape and volume", "Պահպանում է ձևը և ծավալը", "Сохраняет форму и объём"), t("solid", "պինդ", "твёрдое")],
        [
          t("Keeps its volume, takes the shape of the vessel", "Պահպանում է ծավալը, ընդունում է անոթի ձևը", "Сохраняет объём, принимает форму сосуда"),
          t("liquid", "հեղուկ", "жидкое"),
        ],
        [t("Fills the whole vessel", "Զբաղեցնում է ամբողջ անոթը", "Занимает весь сосуд"), t("gas", "գազային", "газообразное")],
      ]),
    ],
    archimedes: [
      num(
        t(
          "A body of 0.002 m³ is fully under water (ρ = 1000 kg/m³, g = 10 N/kg). What is Archimedes' force on it?",
          "0,002 մ³ ծավալով մարմինն ամբողջությամբ ընկղմված է ջրում (ρ = 1000 կգ/մ³, g = 10 Ն/կգ)։ Որքա՞ն է նրա վրա ազդող Արքիմեդի ուժը։",
          "Тело объёмом 0,002 м³ полностью погружено в воду (ρ = 1000 кг/м³, g = 10 Н/кг). Чему равна архимедова сила?",
        ),
        20,
        {
          unit: t("N", "Ն", "Н"),
          explanation: t("F = ρ · g · V = 1000 · 10 · 0.002 = 20 N.", "F = ρ · g · V = 1000 · 10 · 0,002 = 20 Ն։", "F = ρ · g · V = 1000 · 10 · 0,002 = 20 Н."),
        },
      ),
    ],
  },
};

export const chemistryQuestions: QuestionMap = {
  8: {
    "amount-of-substance": [
      num(t("What is the molar mass of water, H₂O?", "Որքա՞ն է ջրի (H₂O) մոլային զանգվածը։", "Чему равна молярная масса воды H₂O?"), 18, {
        unit: t("g/mol", "գ/մոլ", "г/моль"),
        explanation: t("M = 2 · 1 + 16 = 18 g/mol.", "M = 2 · 1 + 16 = 18 գ/մոլ։", "M = 2 · 1 + 16 = 18 г/моль."),
      }),
    ],
    "molar-volume-of-gases": [
      num(t("What volume do 3 mol of oxygen take up at STP?", "Ի՞նչ ծավալ է զբաղեցնում 3 մոլ թթվածինը (ն․ պ․)։", "Какой объём занимают 3 моль кислорода (н. у.)?"), 67.2, {
        unit: t("L", "լ", "л"),
        explanation: t("V = n · 22.4 L/mol = 3 · 22.4 = 67.2 L.", "V = n · 22,4 լ/մոլ = 3 · 22,4 = 67,2 լ։", "V = n · 22,4 л/моль = 3 · 22,4 = 67,2 л."),
      }),
    ],
    "solutions-mass-fraction": [
      num(
        t(
          "20 g of salt is dissolved in 180 g of water. What is the mass fraction of salt?",
          "20 գ աղը լուծել են 180 գ ջրում։ Որքա՞ն է աղի զանգվածային բաժինը։",
          "20 г соли растворили в 180 г воды. Какова массовая доля соли?",
        ),
        10,
        {
          unit: t("%", "%", "%"),
          explanation: t(
            "The solution weighs 20 + 180 = 200 g, so w = 20 / 200 = 0.1 = 10%.",
            "Լուծույթի զանգվածը 20 + 180 = 200 գ է, ուրեմն w = 20 / 200 = 0,1 = 10 %։",
            "Масса раствора 20 + 180 = 200 г, значит w = 20 / 200 = 0,1 = 10 %.",
          ),
        },
      ),
    ],
    "genetic-relationships": [
      match(t("Match each substance to its class.", "Համապատասխանեցրո՛ւ նյութը և դրա դասը։", "Соедини вещество с его классом."), [
        [t("CaO", "CaO", "CaO"), t("oxide", "օքսիդ", "оксид")],
        [t("H₂SO₄", "H₂SO₄", "H₂SO₄"), t("acid", "թթու", "кислота")],
        [t("NaOH", "NaOH", "NaOH"), t("base", "հիմք", "основание")],
        [t("NaCl", "NaCl", "NaCl"), t("salt", "աղ", "соль")],
      ]),
    ],
    "atomic-structure": [
      num(
        t(
          "How many electrons are in the outer shell of a sodium atom (Na, No. 11)?",
          "Քանի՞ էլեկտրոն կա նատրիումի (Na, № 11) ատոմի արտաքին շերտում։",
          "Сколько электронов во внешнем слое атома натрия (Na, № 11)?",
        ),
        1,
        {
          explanation: t(
            "11 electrons are arranged 2, 8, 1, so the outer shell has 1.",
            "11 էլեկտրոնը բաշխված է 2, 8, 1, ուստի արտաքին շերտում 1 էլեկտրոն է։",
            "11 электронов распределены 2, 8, 1, значит во внешнем слое 1 электрон.",
          ),
        },
      ),
    ],
  },
};

export const biologyQuestions: QuestionMap = {
  8: {
    "animal-evolution": [
      order(
        t(
          "Put these groups in the order they appeared on Earth.",
          "Դասավորի՛ր այս խմբերն ըստ Երկրի վրա նրանց հայտնվելու հերթականության։",
          "Расположи группы в том порядке, в каком они появились на Земле.",
        ),
        [t("fish", "ձկներ", "рыбы"), t("amphibians", "երկկենցաղներ", "земноводные"), t("reptiles", "սողուններ", "пресмыкающиеся"), t("mammals", "կաթնասուններ", "млекопитающие")],
        t(
          "Life moved from water to land: fish gave rise to amphibians, amphibians to reptiles, and reptiles to mammals.",
          "Կյանքը ջրից դուրս եկավ ցամաք՝ ձկներից առաջացան երկկենցաղները, դրանցից՝ սողունները, իսկ սողուններից՝ կաթնասունները։",
          "Жизнь вышла из воды на сушу: от рыб произошли земноводные, от них пресмыкающиеся, а от пресмыкающихся млекопитающие.",
        ),
      ),
    ],
    "arthropods-crustaceans-arachnids": [
      match(t("Match each animal to its number of walking legs.", "Համապատասխանեցրո՛ւ կենդանին և նրա քայլող ոտքերի թիվը։", "Соедини животное с числом его ходильных ног."), [
        [t("crayfish", "գետային խեցգետին", "речной рак"), t("10", "10", "10")],
        [t("spider", "սարդ", "паук"), t("8", "8", "8")],
        [t("bee", "մեղու", "пчела"), t("6", "6", "6")],
      ]),
    ],
    insects: [
      order(
        t("Put the stages of a butterfly's life in order.", "Դասավորի՛ր թիթեռի զարգացման փուլերը ճիշտ հերթականությամբ։", "Расставь по порядку стадии развития бабочки."),
        [t("egg", "ձու", "яйцо"), t("caterpillar", "թրթուր", "гусеница"), t("pupa", "հարսնյակ", "куколка"), t("adult butterfly", "հասուն թիթեռ", "взрослая бабочка")],
        t(
          "This is complete metamorphosis: the caterpillar does not look like the adult.",
          "Սա լրիվ կերպարանափոխություն է՝ թրթուրը նման չէ հասուն միջատին։",
          "Это развитие с полным превращением: гусеница не похожа на взрослое насекомое.",
        ),
      ),
    ],
  },
};

export const geographyQuestions: QuestionMap = {
  7: {
    "continents-discoveries": [
      order(
        t(
          "Put the continents in order from largest to smallest.",
          "Դասավորի՛ր մայրցամաքներն ըստ մակերեսի՝ մեծից փոքր։",
          "Расположи материки по площади от самого большого к самому маленькому.",
        ),
        [
          t("Eurasia", "Եվրասիա", "Евразия"),
          t("Africa", "Աֆրիկա", "Африка"),
          t("North America", "Հյուսիսային Ամերիկա", "Северная Америка"),
          t("South America", "Հարավային Ամերիկա", "Южная Америка"),
          t("Antarctica", "Անտարկտիդա", "Антарктида"),
          t("Australia", "Ավստրալիա", "Австралия"),
        ],
        t("About 54, 30, 24, 18, 14 and 8 million km².", "Մոտ 54, 30, 24, 18, 14 և 8 միլիոն կմ²։", "Примерно 54, 30, 24, 18, 14 и 8 млн км²."),
      ),
    ],
    "peoples-countries": [
      match(t("Match each country to its capital.", "Համապատասխանեցրո՛ւ երկիրը և նրա մայրաքաղաքը։", "Соедини страну с её столицей."), [
        [t("Australia", "Ավստրալիա", "Австралия"), t("Canberra", "Կանբեռա", "Канберра")],
        [t("Canada", "Կանադա", "Канада"), t("Ottawa", "Օտտավա", "Оттава")],
        [t("Egypt", "Եգիպտոս", "Египет"), t("Cairo", "Կահիրե", "Каир")],
        [t("Japan", "Ճապոնիա", "Япония"), t("Tokyo", "Տոկիո", "Токио")],
      ]),
    ],
  },
};
