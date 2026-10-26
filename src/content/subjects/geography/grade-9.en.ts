import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The size, make-up and distribution of Armenia's population, migration, the diaspora, cities and Yerevan.",
    "The structure of the economy, energy, industry, agriculture, transport, trade and tourism.",
    "The nature, population and economy of the northern, central and southern provinces.",
  ],
  lessons: {
    "population-armenia": {
      objectives: ["State the population of the Republic of Armenia and how it has changed", "Analyse natural increase and migration", "Describe the distribution and make-up of the population", "Explain how the diaspora arose and its role"],
      content: `## Size

According to the 2022 census, about **2.93 million** people lived in the Republic of Armenia. Until the 1990s the population grew, but after independence it fell because of emigration and a falling birth rate.

## Natural increase and migration

**Natural increase** is the difference between the number of births and deaths. **Net migration** is the difference between the number of people arriving and leaving.

**Example.** In a year there were 36,000 births and 28,000 deaths, 15,000 people arrived and 20,000 left.

- natural increase: 36,000 − 28,000 = **+8,000**,
- net migration: 15,000 − 20,000 = **−5,000**,
- total change: 8,000 − 5,000 = **+3,000**.

## Distribution

The average density is about **100 people/km²**, but the population is spread unevenly. About **1/3** live in Yerevan, and density is highest on the Ararat plain. In the high mountains (Vayots Dzor, the mountains of Syunik) density is low.

The **urban** population is about **64%**.

## Make-up

More than **98%** of Armenia's population are Armenians. The largest national minority are the **Yazidis**; Russians, Assyrians, Kurds, Ukrainians and Greeks also live there. The state language is **Armenian**.

## The diaspora

About 7–10 million Armenians live in the world, most of them outside the Republic of Armenia. The diaspora formed over centuries, especially after the **Armenian Genocide of 1915**, and later because of economic emigration.

| Country | Community |
|---|---|
| Russia | the largest |
| USA | Los Angeles, Boston |
| France | Paris, Marseille, Lyon |
| Lebanon, Syria, Iran | old communities |
| Argentina, Canada, Georgia, Ukraine | |

The diaspora helps Armenia with **money transfers**, investment, charity and lobbying.

## Exercises

1. Roughly what is the population of the Republic of Armenia?
2. What is natural increase?
3. Calculate the change: 30,000 births, 27,000 deaths, 10,000 left, 4,000 arrived.
4. Why is the Ararat plain the most densely populated area?
5. List three countries with large Armenian communities.

## Answers

1. About 2.9–3 million.
2. The difference between the number of births and deaths.
3. (30,000 − 27,000) + (4,000 − 10,000) = 3,000 − 6,000 = −3,000.
4. It is flat, warm and fertile, and Yerevan and many towns are there.
5. For example, Russia, the USA, France.`,
      quiz: [
        ["Roughly what percentage of Armenia's population are Armenians?", ["70%", "85%", "98%", "100%"]],
        ["Which national minority in the Republic of Armenia is the largest?", ["Russians", "Yazidis", "Greeks", "Assyrians"]],
        ["Roughly what part of Armenia's population lives in Yerevan?", ["1/10", "1/3", "1/2", "3/4"]],
        ["There were 20,000 births and 25,000 deaths. What is the natural increase?", ["+5,000", "−5,000", "45,000", "0"]],
        ["Which country has the largest Armenian community?", ["France", "Russia", "Argentina", "Iran"]],
      ],
    },
    "cities-yerevan": {
      objectives: ["List the large cities of the Republic of Armenia", "Describe the position, history and functions of Yerevan", "Explain the problems of urbanisation", "Distinguish urban and rural settlements"],
      content: `## Settlements

The Republic of Armenia has **49 towns** and about **950 villages**. Most towns are small, with up to 20 thousand inhabitants.

| City | Population (approx.) | Province |
|---|---|---|
| **Yerevan** | 1.09 million | capital |
| **Gyumri** | 110 thousand | Shirak |
| **Vanadzor** | 75 thousand | Lori |
| **Vagharshapat** (Etchmiadzin) | 47 thousand | Armavir |
| **Abovyan**, **Hrazdan** | about 40 thousand | Kotayk |
| **Kapan** | 36 thousand | Syunik |

## Yerevan

**Yerevan** is one of the oldest cities in the world. It was founded in **782 BC**, when the Urartian king Argishti I built the fortress of **Erebuni**. Yerevan has been the **capital of Armenia** since 1918 (the First Republic), and since 1991 the capital of independent Armenia.

The city lies on the northern edge of the **Ararat plain**, on the banks of the **Hrazdan** River, at a height of 900–1,300 m. In clear weather Masis can be seen from Yerevan.

The master plan of modern Yerevan (1924) was drawn up by the architect **Alexander Tamanyan**.

**Functions**:

- **administrative**: the government, the National Assembly,
- **economic**: a centre of industry, IT and banking,
- **cultural and educational**: the Matenadaran, the Opera House, universities,
- **transport**: Zvartnots airport, the railway station, the metro.

## Problems of urbanisation

Yerevan's growth leads to **traffic jams**, air **pollution** (cars, dust) and shrinking green spaces. At the same time people from small towns and villages in the provinces move to Yerevan or abroad. The government aims to develop the provinces so that the population is spread more evenly.

## Exercises

1. Which city in the Republic of Armenia is the second largest?
2. When and by whom was Erebuni founded?
3. Who drew up the master plan of Yerevan?
4. List four functions of Yerevan.
5. What problems does Yerevan's fast growth create?

## Answers

1. Gyumri.
2. In 782 BC, by Argishti I.
3. Alexander Tamanyan.
4. Administrative, economic, cultural and educational, transport.
5. Traffic jams, air pollution, shrinking green spaces, the emptying of the provinces.`,
      quiz: [
        ["When was Erebuni founded?", ["782 BC", "AD 301", "1918", "1991"]],
        ["On the bank of which river does Yerevan stand?", ["The Araks", "The Hrazdan", "The Kasakh", "The Azat"]],
        ["Which city is the centre of Lori province?", ["Gyumri", "Vanadzor", "Ijevan", "Alaverdi"]],
        ["Roughly how many towns are there in the Republic of Armenia?", ["10", "49", "150", "950"]],
        ["Who drew up Yerevan's 1924 master plan?", ["A. Tamanyan", "M. Saryan", "R. Israelyan", "A. Spendiaryan"]],
      ],
    },
    "economy-energy": {
      objectives: ["Distinguish the primary, secondary and tertiary sectors of the economy", "Describe Armenia's energy system", "Compare sources of electricity", "Assess the problems of energy security"],
      content: `## Sectors of the economy

| Sector | What it includes |
|---|---|
| **primary** | agriculture, forestry, mining |
| **secondary** | manufacturing, energy, construction |
| **tertiary** (services) | trade, transport, IT, education, health care, tourism |

In modern Armenia **services** have the largest share. The **information technology** (IT) sector is growing fast.

## Energy

Armenia has no large reserves of oil, gas or coal, so gas is imported from **Russia** (through Georgia) and **Iran**.

| Source | Stations | Share (approx.) |
|---|---|---|
| **nuclear** | the **Armenian nuclear power plant** (Metsamor) | about 1/3 |
| **thermal** (gas-fired) | the Hrazdan thermal plant, the Yerevan combined heat and power plant | about 1/3 |
| **hydro** | the **Sevan-Hrazdan** cascade, the **Vorotan** cascade, small hydro stations | about 1/4 |
| **solar** and other renewables | Masrik, rooftop stations | growing |

The Armenian nuclear power plant has worked since 1976. After the Spitak earthquake it was shut down, but in 1995 its second unit was restarted.

## Energy security

Energy security is a country's ability to supply itself with energy without interruptions. For Armenia it is important:

- to have **different sources** (nuclear, water, gas, sun),
- to develop **renewable** energy,
- to save energy: insulation, LED lamps,
- to have power links with its neighbours (Iran, Georgia).

## Exercises

1. Which sector does IT belong to?
2. Where does the Republic of Armenia get natural gas from?
3. List three sources of electricity in the Republic of Armenia.
4. Why is it important to develop renewable energy?
5. How can your family save energy?

## Answers

1. The tertiary sector (services).
2. From Russia and Iran.
3. Nuclear, thermal, hydro (and also solar).
4. It reduces dependence on imported gas and does not pollute the air.
5. For example, LED lamps, insulation, switching off devices that are not needed.`,
      quiz: [
        ["Where is the Armenian nuclear power plant?", ["In Hrazdan", "In Metsamor", "In Gyumri", "In Kapan"]],
        ["Which sector does mining belong to?", ["Primary", "Secondary", "Tertiary", "Quaternary"]],
        ["Which rivers are Armenia's hydroelectric cascades on?", ["The Hrazdan and Vorotan", "The Araks and Kura", "The Debed and Aghstev", "The Kasakh and Akhuryan"]],
        ["In which year was the second unit of the nuclear plant restarted?", ["1976", "1988", "1995", "2005"]],
        ["Which energy is renewable?", ["Gas", "Solar", "Coal", "Oil"]],
      ],
    },
    "industry-armenia": {
      objectives: ["List the leading industries of the Republic of Armenia", "Link the location of industries to raw materials and labour", "Describe the development of IT and high technology", "Assess the environmental impact of industry"],
      content: `## Main industries

| Industry | Centres | Products |
|---|---|---|
| **mining** and **metallurgy** | Kajaran, Agarak, Alaverdi, Sotk | copper and molybdenum concentrate, gold |
| **food** | Yerevan, Ararat, Armavir, Etchmiadzin | **brandy**, wine, tinned food, cheese |
| **mineral waters** | Jermuk, Bjni, Arzni, Dilijan | bottled water |
| **building materials** | Artik, Ararat | tuff, cement, basalt |
| **light industry** | Yerevan, Gyumri | clothing, shoes, carpets |
| **jewellery** and **diamond cutting** | Yerevan | jewellery |
| **chemicals** and **pharmaceuticals** | Yerevan, Vanadzor | medicines, rubber |
| **engineering** and **electronics** | Yerevan | equipment, robotics |

Armenian brandy (cognac) has been known around the world since the late 19th century, and winemaking has a history of thousands of years (the **Areni-1** cave).

## Location factors

1. **Raw materials**: processing plants are built next to mines (Kajaran).
2. **Water and energy**: chemical plants need a lot of water.
3. **Labour**: high technology develops in Yerevan, where the universities are.
4. **Consumers**: the food industry is close to the population and orchards.

## The IT sector

Even in Soviet times Armenia was known for its scientific centres of computer engineering. Today **technology parks** and many software companies work in Yerevan, Gyumri and Vanadzor. IT has become an important source of exports and high salaries.

## Environment

Mining creates **tailings dams** and **dust**, and metallurgy pollutes the air (Alaverdi). The state requires an **environmental impact assessment** (EIA) for new projects.

## Exercises

1. Where are copper and molybdenum mined?
2. Why are processing plants built next to mines?
3. List three products of the food industry.
4. Why is the IT sector concentrated in Yerevan?
5. What is an EIA and why is it needed?

## Answers

1. In Kajaran and Agarak (Syunik).
2. Ore is heavy, and it is cheaper to process it nearby.
3. For example, brandy, wine, tinned food.
4. The universities and qualified specialists are there.
5. An environmental impact assessment, which finds out the harm a project may do before it starts.`,
      quiz: [
        ["Where is the Zangezur copper-molybdenum plant?", ["Alaverdi", "Kajaran", "Gyumri", "Hrazdan"]],
        ["Which town is known for its mineral water?", ["Jermuk", "Artik", "Kapan", "Masis"]],
        ["Which factor matters most for locating the IT sector?", ["Ore", "Qualified labour", "Water", "Land"]],
        ["What is Artik known for?", ["Tuff", "Gold", "Salt", "Oil"]],
        ["In which town does metallurgy pollute the air?", ["Alaverdi", "Tsaghkadzor", "Dilijan", "Jermuk"]],
      ],
    },
    "agriculture-armenia": {
      objectives: ["Describe the branches of crop and livestock farming", "Link the location of crops to climate and height", "Explain the importance of irrigation", "Name the current problems of agriculture"],
      content: `## Conditions

Armenia has little **arable land** because of its mountainous relief. Most farmland is **pasture** and **hayfields**. **Irrigation** plays a big role; without it a good harvest is impossible on the Ararat plain.

## Crop farming

| Crop | Main areas |
|---|---|
| **grapes** | Ararat, Armavir, Vayots Dzor (Areni), Tavush |
| **apricots**, peaches, pomegranates, figs | the Ararat plain, Meghri |
| **apples**, pears, plums | Kotayk, Aragatsotn, Gegharkunik |
| **vegetables** (tomatoes, cucumbers, peppers), **greenhouses** | the Ararat plain, around Yerevan |
| **cereals** (wheat, barley) | Shirak, Gegharkunik, Lori |
| **potatoes**, cabbage | Gegharkunik, Shirak, Lori |
| **tobacco** | Tavush, Armavir |

The **apricot** (*Prunus armeniaca*) is considered one of the symbols of Armenia.

## Livestock farming

| Branch | Areas |
|---|---|
| cattle (milk, meat) | Shirak, Lori, Gegharkunik, Syunik |
| sheep farming | mountain pastures |
| poultry, pig farming | the Ararat plain, Kotayk |
| fish farming (trout, sturgeon) | the Ararat plain (groundwater), Sevan |
| beekeeping | Tavush, Syunik, Vayots Dzor |

In summer livestock are driven up to high **alpine pastures**, the "yayla".

## Irrigation

The Ararat plain is irrigated by the **Arzni-Shamiram** and **Artashat** canals and by water from the Araks and Hrazdan. Fish farms on the Ararat plain use underground artesian water, which has lowered the water table. That is why **drip irrigation**, which saves water, is important.

## Problems

- Small plots of land, old machinery.
- Hail, frost and drought, against which **anti-hail nets** and insurance help.
- Problems with processing and export.

## Exercises

1. Why does Armenia have little arable land?
2. Where are grapes grown? Name two provinces.
3. Why is grain grown in Shirak and apricots on the Ararat plain?
4. What are "yayla"?
5. How does drip irrigation help save water?

## Answers

1. The relief is mountainous and there is little flat land.
2. For example, Ararat and Armavir (and also Vayots Dzor).
3. The high Shirak plateau is colder, while the Ararat plain is warm and irrigated.
4. High-mountain summer pastures.
5. Water goes straight to the roots and little of it evaporates.`,
      quiz: [
        ["Which province is known for Areni wine?", ["Shirak", "Vayots Dzor", "Lori", "Kotayk"]],
        ["Where are cereals mainly grown?", ["In Meghri", "In Shirak", "In Yerevan", "Only in Armavir"]],
        ["Which fruit is one of the symbols of Armenia?", ["The banana", "The apricot", "The orange", "The mango"]],
        ["What protects orchards from hail?", ["A greenhouse", "Anti-hail nets", "Irrigation", "Fertilisers"]],
        ["Which method of irrigation saves the most water?", ["Flooding", "Furrows", "Drip", "Sprinklers by day"]],
      ],
    },
    "transport-trade-tourism": {
      objectives: ["Describe the transport system of the Republic of Armenia", "Explain how being landlocked affects trade", "List the main exports and imports", "Name the main tourist sites"],
      content: `## Transport

| Type | Main routes and sites |
|---|---|
| **road** | Yerevan–Gyumri–Bavra, Yerevan–Sevan–Dilijan–Ijevan, the **North–South** highway (Bavra–Yerevan–Meghri) |
| **rail** | Yerevan–Gyumri–Georgia, Yerevan–Yeraskh, Yerevan–Hrazdan–Sevan |
| **air** | **Zvartnots** (Yerevan), **Shirak** (Gyumri) |
| **pipeline** | gas pipelines from Georgia and Iran |
| **urban** | the Yerevan metro (1981), buses |

Tunnels and hairpin roads have been built on mountain routes. A bridge over the Araks near Meghri links Armenia with Iran.

## Trade

Armenia is **landlocked**, so goods are carried through the ports of Georgia (**Poti**, **Batumi**), by lorry through **Upper Lars** to Russia, and through Iran. This makes transport more expensive.

| Exports | Imports |
|---|---|
| copper and molybdenum concentrate, gold | natural gas, oil products |
| brandy, wine, tobacco | machinery and equipment |
| mineral water, fruit | food |
| IT services, diamonds | medicines, chemicals |

Armenia has been a member of the **Eurasian Economic Union** since 2015 and also trades with the European Union, China and the USA.

## Tourism

| Type | Places |
|---|---|
| historical and cultural | **Garni** temple, **Geghard**, **Etchmiadzin**, **Zvartnots**, **Khor Virap**, **Noravank**, **Haghpat** and **Sanahin** |
| nature | **Sevan**, **Dilijan**, **Jermuk**, **Tatev** (the "Wings of Tatev" cable car, 5.7 km) |
| spa | Jermuk, Arzni, Hankavan |
| winter | the **Tsaghkadzor** ski resort |
| wine and food | Areni, Armavir |

The UNESCO World Heritage List includes Haghpat and Sanahin, Etchmiadzin Cathedral and Zvartnots, and Geghard with the upper Azat valley.

## Exercises

1. Why is the North–South highway important?
2. Through which ports does Armenia trade?
3. List three exports.
4. What are the "Wings of Tatev"?
5. Which Armenian monuments are on the UNESCO list? Name two.

## Answers

1. It links the border with Georgia to the border with Iran through Yerevan.
2. Through the Georgian ports of Poti and Batumi.
3. For example, copper concentrate, brandy, gold.
4. A cable car that links the village of Halidzor with Tatev Monastery over the Vorotan gorge.
5. For example, Haghpat and Geghard.`,
      quiz: [
        ["Through the ports of which country does Armenia carry out sea trade?", ["Turkey", "Georgia", "Azerbaijan", "Russia"]],
        ["When did the Yerevan metro open?", ["1961", "1981", "1991", "2001"]],
        ["Which place is known for its ski resort?", ["Meghri", "Tsaghkadzor", "Armavir", "Ararat"]],
        ["Which product is one of Armenia's main exports?", ["Oil", "Copper concentrate", "Natural gas", "Machinery"]],
        ["Which economic union has Armenia been a member of since 2015?", ["The European Union", "The Eurasian Economic Union", "OPEC", "ASEAN"]],
      ],
    },
    "northern-regions": {
      objectives: ["Show the position of Shirak, Lori, Tavush and Aragatsotn", "Compare the natural conditions of the provinces", "Describe the economic specialisation of the provinces", "Name the sights of the provinces"],
      content: `## Shirak

- **Centre**: **Gyumri**, the second largest city.
- **Nature**: a high plateau (1,500–2,000 m), cold winters, chernozems, the Akhuryan River, Lake Arpi.
- **Economy**: grain, potatoes, livestock, Artik tuff, light industry.
- **Culture**: Gyumri is known for its crafts, folk humour and old quarter (Kumayri). Since the 1988 earthquake the city has been rebuilding.

## Lori

- **Centre**: **Vanadzor**. Other towns: Alaverdi, Spitak, Stepanavan.
- **Nature**: mountains and forests, the Debed River, a humid climate.
- **Economy**: copper smelting (Alaverdi), the Teghout mine, chemical industry, livestock, cheese-making.
- **Sights**: the monasteries of **Haghpat** and **Sanahin** (UNESCO), **Odzun**, the house-museum of Hovhannes Tumanyan in Dsegh.

## Tavush

- **Centre**: **Ijevan**. Other towns: Dilijan, Berd, Noyemberyan.
- **Nature**: the most forested province, a mild climate, the Aghstev River, the **Dilijan** national park, Lake **Parz**.
- **Economy**: grape growing, winemaking, tobacco, forestry, tourism, educational centres in Dilijan.
- **Sights**: the monasteries of Haghartsin and Goshavank, the old quarter of Dilijan.

## Aragatsotn

- **Centre**: **Ashtarak**.
- **Nature**: Mount Aragats, the Kasakh River, alpine meadows.
- **Economy**: fruit, grapes, livestock, the Byurakan Observatory (V. Ambartsumian).
- **Sights**: **Amberd** fortress, **Saghmosavank**, Hovhannavank, the Armenian Alphabet Park (2005).

## Exercises

1. Which city is the centre of Shirak province?
2. Why is Tavush the most forested province?
3. Which industry is in Alaverdi?
4. Where is the Byurakan Observatory?
5. Compare the farming of Shirak and Tavush.

## Answers

1. Gyumri.
2. It has a humid, mild climate, and its mountain slopes are open to moist winds.
3. Copper smelting.
4. In Aragatsotn province, on the slope of Aragats.
5. Shirak has grain, potatoes and livestock; Tavush has grapes, tobacco and fruit.`,
      quiz: [
        ["Which city is the centre of Tavush province?", ["Dilijan", "Ijevan", "Berd", "Noyemberyan"]],
        ["In which province are the monasteries of Haghpat and Sanahin?", ["Lori", "Tavush", "Shirak", "Aragatsotn"]],
        ["Which town is the centre of Aragatsotn province?", ["Ashtarak", "Aparan", "Talin", "Byurakan"]],
        ["Where is Lake Arpi?", ["In Shirak", "In Lori", "In Tavush", "In Syunik"]],
        ["Which province is the most forested?", ["Shirak", "Tavush", "Ararat", "Armavir"]],
      ],
    },
    "central-southern-regions": {
      objectives: ["Show the position of Ararat, Armavir, Kotayk, Gegharkunik, Vayots Dzor and Syunik", "Compare the natural conditions of the provinces", "Describe the economic specialisation of the provinces", "Assess the strategic importance of Syunik"],
      content: `## Provinces of the Ararat plain

| Province | Centre | Specialisation | Sights |
|---|---|---|---|
| **Ararat** | Artashat | grapes, apricots, vegetables, fish farming, cement | **Khor Virap** (with a view of Masis), Dvin |
| **Armavir** | Armavir | grapes, fruit, greenhouses, winemaking | **Etchmiadzin**, **Zvartnots**, the Sardarapat memorial, the Metsamor nuclear plant |

Armavir and Ararat are the most densely populated rural areas.

## Kotayk

- **Centre**: **Hrazdan**. Other towns: Abovyan, Charentsavan, Tsaghkadzor, Yeghvard.
- **Economy**: the Hrazdan thermal plant, the Sevan-Hrazdan cascade, food industry and building materials, the Arzni and Bjni mineral waters.
- **Sights**: **Garni**, **Geghard**, **Tsaghkadzor**, Kecharis.

## Gegharkunik

- **Centre**: **Gavar**. Other towns: Sevan, Martuni, Vardenis.
- **Nature**: Lake **Sevan**, the Geghama and Vardenis Mountains.
- **Economy**: fishing, potatoes, cabbage, livestock, the Sotk gold mine, solar stations.
- **Sights**: **Sevanavank**, the **Noratus** field of khachkars, Hayravank.

## Vayots Dzor

- **Centre**: **Yeghegnadzor**. Another town: **Jermuk**.
- **Nature**: the least populated province, mountains, the Arpa River.
- **Economy**: grapes and wine (Areni), mineral water and spas (Jermuk), beekeeping.
- **Sights**: **Noravank**, the Areni-1 cave, the Jermuk waterfall, the Selim caravanserai.

## Syunik

- **Centre**: **Kapan**. Other towns: Goris, Sisian, Kajaran, Meghri, Agarak.
- **Nature**: one of the largest and most mountainous provinces, the Zangezur Mountains, the Vorotan, the protected areas of Shikahogh and Arevik. Meghri has a mild subtropical climate where pomegranates, figs and persimmons grow.
- **Economy**: copper and molybdenum (Kajaran, Agarak), the Vorotan hydro stations, livestock.
- **Sights**: **Tatev** and the "Wings of Tatev", the Devil's Bridge, **Zorats Karer** (Karahunj), the cave village of Khndzoresk.

Syunik is the only province that borders **Iran**, so it has strategic importance.

## Exercises

1. In which province are Etchmiadzin and Zvartnots?
2. Which town is the centre of Gegharkunik province?
3. Why is Syunik a strategic province?
4. Which fruits grow in Meghri?
5. In which province is Noravank?

## Answers

1. In Armavir province.
2. Gavar.
3. It borders Iran, and the road to Iran passes through it.
4. Pomegranates, figs, persimmons.
5. In Vayots Dzor.`,
      quiz: [
        ["Which town is the centre of Syunik province?", ["Goris", "Kapan", "Sisian", "Meghri"]],
        ["In which province is Khor Virap?", ["Ararat", "Armavir", "Kotayk", "Vayots Dzor"]],
        ["Which province borders Iran?", ["Vayots Dzor", "Syunik", "Ararat", "Gegharkunik"]],
        ["Where is the Noratus field of khachkars?", ["In Gegharkunik", "In Lori", "In Shirak", "In Syunik"]],
        ["Which town is the centre of Vayots Dzor?", ["Jermuk", "Yeghegnadzor", "Areni", "Vayk"]],
      ],
    },
  },
};
