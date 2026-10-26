import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The Armenian Highlands, the position and borders of the Republic of Armenia, geological structure, mineral resources and relief.",
    "Armenia's climate, rivers, Sevan and other lakes, soils, plants and animals, natural hazards and protected areas.",
  ],
  lessons: {
    "armenian-highland": {
      objectives: ["Show the position of the Armenian Highlands on a map", "Name the main mountains, lakes and rivers of the Highlands", "Explain the importance of the Highlands for the region", "Distinguish the Armenian Highlands from the territory of the Republic of Armenia"],
      content: `## Position

The **Armenian Highlands** are in Southwest Asia, between Asia Minor, the Iranian Plateau and the Caucasus. Their area is about **400 thousand km²**, and their average height is 1,500–1,800 m. The Highlands are often called a "mountain island" because they rise above the surrounding plains.

The Republic of Armenia occupies the north-eastern part of the Highlands, roughly **1/10** of them.

## Mountains

| Peak | Height |
|---|---|
| **Masis** (Greater Ararat) | 5,165 m, the highest point of the Highlands |
| Lesser Masis (Sis) | 3,925 m |
| Sipan | 4,058 m |
| **Aragats** | 4,090 m, the highest point of the Republic of Armenia |

Most of the mountains of the Highlands are **volcanic**. Masis was last active in 1840, when an earthquake and landslide destroyed the village of Akori.

## Lakes

The three large lakes of the Highlands:

- **Van**: the largest (about 3,700 km²), salty and soda-rich,
- **Urmia**: salty, has shrunk greatly in recent decades,
- **Sevan**: fresh, in the Republic of Armenia.

## Rivers

The Armenian Highlands are a **watershed**. The **Euphrates** and **Tigris** (flowing into the Persian Gulf), the **Araks** and **Kura** (the Caspian Sea) and the **Chorokh** (the Black Sea) rise here. The world's first civilisations arose in the valleys of the Euphrates and Tigris.

## Climate

The climate of the Highlands is **continental**: hot summers and cold snowy winters. There is little precipitation on the plains and more in the mountains.

## Exercises

1. Roughly what is the area of the Armenian Highlands?
2. What is the highest point of the Highlands?
3. Why are the Highlands called a "mountain island"?
4. Which rivers rise in the Highlands and flow into the Caspian Sea?
5. Roughly what part of the Highlands does the Republic of Armenia occupy?

## Answers

1. About 400 thousand km².
2. Masis (5,165 m).
3. They rise above the surrounding plains.
4. The Araks and the Kura.
5. About 1/10.`,
      quiz: [
        ["How high is Masis?", ["4,090 m", "5,165 m", "3,925 m", "5,642 m"]],
        ["Which lake of the Armenian Highlands is the largest?", ["Sevan", "Van", "Urmia", "Arpi"]],
        ["Where do the Euphrates and Tigris flow?", ["The Caspian Sea", "The Black Sea", "The Persian Gulf", "The Mediterranean Sea"]],
        ["What is the origin of many mountains of the Highlands?", ["Glacial", "Volcanic", "Coral", "River"]],
        ["Which river flows into the Black Sea?", ["The Araks", "The Chorokh", "The Kura", "The Euphrates"]],
      ],
    },
    "position-borders": {
      objectives: ["Describe the geographical position of the Republic of Armenia", "List the neighbouring countries", "Name its extreme points and dimensions", "Assess the advantages and difficulties of its position"],
      content: `## Position

The Republic of Armenia is in the **South Caucasus**, in the north-eastern part of the Armenian Highlands. Its area is **29.7 thousand km²**. Armenia is **landlocked**; the nearest seas are the Black Sea and the Caspian.

The country stretches about **360 km** from north-west to south-east, and its greatest width from west to east is about **200 km**. The territory lies roughly between **38°50′–41°18′ N** and **43°27′–46°37′ E**.

## Neighbours

| Side | Country |
|---|---|
| north | Georgia |
| east | Azerbaijan |
| south | Iran |
| west and south-west | Turkey, Nakhichevan (an exclave of Azerbaijan) |

The shortest section of the border is with Iran, along the **Araks** River, about 44 km. The borders with Turkey and Azerbaijan have long been closed, so transport links run mainly through Georgia and Iran.

## Provinces (marzes)

The Republic of Armenia is divided into **10 provinces** and **Yerevan**: Aragatsotn, Ararat, Armavir, Gegharkunik, Kotayk, Lori, Shirak, Syunik, Vayots Dzor, Tavush. The largest is Gegharkunik (together with Sevan), and Yerevan has the largest population.

## Time

Armenia is in the **UTC+4** time zone. When it is noon (12:00) in London, it is 16:00 in Yerevan.

## Assessing the position

| Advantages | Difficulties |
|---|---|
| between Europe and Asia, historical trade routes | no access to the sea |
| mountains, mines, sunny climate | mountainous territory, little flat land |
| links with Iran and Georgia | closed borders with two neighbours |

## Exercises

1. What is the area of the Republic of Armenia?
2. List the four countries neighbouring the Republic of Armenia.
3. Along which river does the border with Iran run?
4. When it is 10:00 in Yerevan, what time is it in London (UTC+0)?
5. Name one advantage and one difficulty of Armenia's position.

## Answers

1. 29.7 thousand km².
2. Georgia, Azerbaijan, Iran, Turkey.
3. The Araks.
4. 6:00.
5. For example, advantage: it lies between Europe and Asia; difficulty: no access to the sea.`,
      quiz: [
        ["Which country is to the north of the Republic of Armenia?", ["Iran", "Georgia", "Turkey", "Azerbaijan"]],
        ["How many provinces does the Republic of Armenia have (not counting Yerevan)?", ["8", "10", "11", "12"]],
        ["Does the Republic of Armenia have access to the sea?", ["Yes, to the Black Sea", "Yes, to the Caspian Sea", "No, there is no sea", "Yes, to the Mediterranean Sea"]],
        ["Which time zone is Armenia in?", ["UTC+2", "UTC+3", "UTC+4", "UTC+5"]],
        ["Which province is the largest by area?", ["Syunik", "Gegharkunik", "Lori", "Shirak"]],
      ],
    },
    "geology-minerals": {
      objectives: ["Explain the geological development of Armenia's territory", "Name volcanic rocks and their uses", "List metallic and non-metallic mineral resources", "Assess the environmental impact of mining"],
      content: `## Geological development

Armenia's territory is part of the **Alpine-Himalayan** fold belt, where the **Arabian** and **Eurasian** plates collide. Millions of years ago the **Tethys** Ocean stretched here, as marine fossils and limestones show. When the plates collided, mountains rose, magma came up through cracks, and **volcanoes** and **lava plateaus** formed.

The plates are still moving, so Armenia is a **seismic** country.

## Volcanic rocks

| Rock | What it is | Use |
|---|---|---|
| **tuff** | a light rock made of volcanic ash, in different colours (Ani tuff, pink Artik tuff) | building material; Yerevan is called the "pink city" |
| **basalt** | a dark, strong rock | paving stones; at Garni the "Symphony of Stones" is columnar basalt |
| **obsidian** | volcanic glass | tools in ancient times, jewellery today |
| **pumice** and **perlite** | porous rocks | heat-insulating building materials |

## Metallic minerals

| Mineral | Deposits |
|---|---|
| copper and molybdenum | **Kajaran**, **Agarak** (Syunik), Teghout (Lori) |
| gold | **Sotk** (Gegharkunik), Ararat province |
| iron | Hrazdan, Abovyan |

The Kajaran copper-molybdenum deposit is one of the largest in the world.

## Non-metallic minerals

- **table salt**: the Avan deposit (Yerevan), near the border with Nakhichevan,
- **travertine**, **marble**, **limestone**, **clay**: building materials,
- **mineral waters**: Jermuk, Arzni, Bjni, Dilijan, Hankavan.

## Environment

Open-pit mines change the landscape, and waste from ore processing builds up in **tailings dams**. If tailings dams are poorly maintained, heavy metals can pollute rivers and soils. That is why modern technology and restoring the land (**reclamation**) are important.

## Exercises

1. Why does Armenia have so many volcanic rocks?
2. Why is Yerevan called the "pink city"?
3. Where is the Kajaran deposit and which metals are mined there?
4. Where can you see columnar basalts?
5. Why are tailings dams dangerous?

## Answers

1. In the zone where plates collide, magma came up through cracks and volcanoes formed.
2. Many buildings are made of pink tuff.
3. In Syunik; copper and molybdenum.
4. At Garni (the Azat gorge, the "Symphony of Stones").
5. Heavy metals can pollute rivers and soils.`,
      quiz: [
        ["Which rock are Yerevan's pink buildings made of?", ["Basalt", "Tuff", "Marble", "Granite"]],
        ["What is obsidian?", ["Volcanic glass", "Salt", "Limestone", "A metal"]],
        ["Where is the Sotk gold deposit?", ["In Syunik", "In Gegharkunik", "In Lori", "In Shirak"]],
        ["Where in Yerevan is table salt mined?", ["In Avan", "In Arabkir", "In Erebuni", "In Shengavit"]],
        ["Which plates collide in the zone where Armenia lies?", ["The African and American", "The Arabian and Eurasian", "The Pacific and Eurasian", "The Indian and Australian"]],
      ],
    },
    "relief-armenia": {
      objectives: ["Name the features of Armenia's heights", "List the main ranges and peaks", "Describe the Ararat plain and the plateaus", "Explain how relief affects people's lives"],
      content: `## A mountain country

Armenia is a **mountainous** country. Its average height is about **1,800 m**, and more than **90%** of its territory lies above 1,000 m. The highest point is the northern summit of **Aragats** (4,090 m), and the lowest is the **Debed** gorge near the border with Georgia (about 380 m). The difference is more than 3,700 m.

## Ranges

The ranges of the **Lesser Caucasus** run across the north and east.

| Range | Where | Peak |
|---|---|---|
| Javakhk, Bazum, Pambak | north | |
| Areguni, Sevan | north-east of Sevan | |
| Vardenis | south of Sevan | |
| **Zangezur** | south, on the border of Syunik and Nakhichevan | **Kaputjugh** (3,904 m) |
| Bargushat, Meghri | south | |

In the centre rise volcanic massifs: **Aragats**, the **Geghama** Mountains (Azhdahak, 3,597 m) and the **Vardenis** volcanic upland.

## Plains and plateaus

- The **Ararat plain** (800–1,000 m) lies on the left bank of the Araks. It is the flattest, hottest and most fertile area, where grapes, apricots and vegetables are grown.
- The **Shirak** plateau (1,500–1,800 m), the **Lori** plateau, the **Sevan** basin (about 1,900 m).
- **Gorges**: the Debed, the Vorotan, the Azat, the Arpa. In the Vorotan gorge is the natural **Devil's Bridge**.

## Relief and people

Relief decides where people live and what they do. Most of the population lives on the Ararat plain and the plateaus. In the mountains **livestock farming** is developed, and roads cross **passes** (Selim, Vorotan, Pushkin). **Tunnels** have been built, for example the Dilijan tunnel. **Landslides** and **mudflows** are frequent on mountain slopes.

## Exercises

1. What are the highest and lowest points of the Republic of Armenia?
2. Which range is Kaputjugh in?
3. Why is the Ararat plain important for farming?
4. Where is the Devil's Bridge?
5. What dangers arise on mountain slopes?

## Answers

1. Aragats (4,090 m), the Debed gorge (about 380 m).
2. The Zangezur range.
3. It is flat, warm and fertile, and easy to irrigate.
4. In the Vorotan gorge (near Tatev).
5. Landslides and mudflows.`,
      quiz: [
        ["Roughly what is the average height of the Republic of Armenia?", ["500 m", "1,000 m", "1,800 m", "3,000 m"]],
        ["Which peak of the Zangezur range is the highest?", ["Azhdahak", "Kaputjugh", "Aragats", "Artanish"]],
        ["What is the lowest point of the Republic of Armenia?", ["The Ararat plain", "The Debed gorge", "Meghri", "The shore of Sevan"]],
        ["Which mountains is Azhdahak in?", ["The Geghama", "The Bazum", "The Meghri", "The Javakhk"]],
        ["Which area of the Republic of Armenia is the hottest?", ["Shirak", "The Ararat plain", "The Sevan basin", "The Lori plateau"]],
      ],
    },
    "climate-armenia": {
      objectives: ["List the factors that shape Armenia's climate", "Compare the temperature and precipitation of different areas", "Explain how climate changes with height", "Name the effects of climate on the economy"],
      content: `## Factors

1. **Latitude**: the subtropical zone, the Sun is high, **2,500–2,700 hours of sunshine** a year (more than in many European countries).
2. **Distance from the sea**: a continental climate.
3. **Relief**: mountains hold back moist air, and height lowers the temperature.
4. **Air masses**: in winter cold air comes from the north, in summer warm dry air from the south.

## Temperature and precipitation

| Place | Height | January | July | Precipitation (mm/year) |
|---|---|---|---|---|
| Yerevan | about 1,000 m | about −3 °C | about +26 °C | about 300 |
| Gyumri | about 1,550 m | about −8 °C | about +20 °C | about 500 |
| Sevan | about 1,900 m | about −7 °C | about +16 °C | about 450 |
| Ijevan | about 750 m | about 0 °C | about +22 °C | about 550 |
| heights of Aragats | 3,200 m | about −13 °C | about +9 °C | about 1,000 |

On the Ararat plain the annual range is about **29 °C**, a sign of a sharply continental climate. The lowest temperatures are recorded in Shirak and near the Javakhk border (down to −40 °C), where cold air collects in basins in winter.

## Climate regions

| Height | Climate |
|---|---|
| 800–1,200 m | dry continental, hot summers (the Ararat plain) |
| 1,200–1,800 m | moderately continental (Lori and Tavush are wetter) |
| 1,800–2,500 m | cool summers, long snowy winters (Shirak, Sevan) |
| above 2,500 m | cold mountain climate, snow lies until summer |

## Climate and the economy

- Hot sunny summers allow **grapes**, **apricots** and **peaches** to be grown, but need **irrigation**.
- **Frosts** (dangerous for apricots, which flower in April), **hail** and **drought** are hazards.
- Plenty of sunshine helps **solar energy** develop.
- Mountain winters support **ski** tourism (Tsaghkadzor, Jermuk).

## Exercises

1. Why is Armenia's climate continental?
2. Calculate Yerevan's annual range from the table.
3. Why does Tavush get more precipitation than the Ararat plain?
4. Why are April frosts dangerous for orchards?
5. What economic advantage does plenty of sunshine give?

## Answers

1. Armenia is far from the seas and surrounded by mountains.
2. 26 − (−3) = 29 °C.
3. Tavush is open to moist air from the west and covered with forests, while the Ararat plain is shut in by mountains.
4. They kill the flowers, and there will be no harvest.
5. The development of solar energy and growing sweet fruit.`,
      quiz: [
        ["Roughly how many hours of sunshine does Armenia get a year?", ["800", "1,500", "2,500–2,700", "5,000"]],
        ["What is the climate of the Ararat plain?", ["Maritime", "Dry continental", "Humid subtropical", "Polar"]],
        ["Roughly how much precipitation falls in Yerevan a year?", ["100 mm", "300 mm", "1,000 mm", "2,000 mm"]],
        ["In which area are the lowest temperatures recorded?", ["Meghri", "The Ararat plain", "Shirak", "Ijevan"]],
        ["How does temperature change as you climb into the mountains?", ["It rises", "It falls", "It does not change", "It doubles"]],
      ],
    },
    "rivers-armenia": {
      objectives: ["List the large rivers and basins of the Republic of Armenia", "Explain how rivers are fed and how their flow changes", "Name the economic uses of rivers", "Assess the problems of protecting rivers"],
      content: `## General facts

The Republic of Armenia has about **9,500** small and large rivers; most of them are short mountain rivers. Almost all of them belong to the **Kura-Araks** basin and end up in the Caspian Sea. About 76% of Armenia's territory is in the **Araks** basin.

## Main rivers

| River | Length in Armenia | Feature |
|---|---|---|
| **Araks** | about 160 km along the border (1,072 km in total) | the main river, the border with Turkey and Iran |
| **Akhuryan** | 186 km | tributary of the Araks, the Akhuryan reservoir |
| **Hrazdan** | 141 km | flows out of Sevan, the Sevan-Hrazdan cascade, flows through Yerevan |
| **Kasakh** | 89 km | from the slopes of Aragats |
| **Arpa** | 126 km | Vayots Dzor, the Jermuk waterfall |
| **Vorotan** | 178 km | Syunik, the Vorotan cascade, below the Tatev cable car |
| **Debed** | 178 km | Lori, Kura basin |
| **Aghstev** | 133 km | Tavush, Dilijan, Ijevan |

## Feeding and flow

Rivers are fed by **meltwater from snow**, **rain** and **groundwater**. Most have a **spring flood** in April–June, when the snow melts. In summer and autumn there is little water, and after summer downpours **mudflows**, torrents of mud and stones, can occur.

## Uses

- **Energy**: the hydroelectric stations of the **Sevan-Hrazdan** and **Vorotan** cascades, small hydro stations.
- **Irrigation**: the Ararat plain is irrigated with water from the Araks, Hrazdan and Kasakh through canals and reservoirs.
- **Drinking water**: Yerevan gets clean groundwater from the **Arzni-Shamiram** and **Garni** springs.
- **Tourism**: rafting on the Debed, waterfalls (Shaki, Jermuk, Trchkan).

## Protection

The pipes of small hydro stations sometimes take almost all the water out of a riverbed, which harms fish and plants. Sewage and tailings dams pollute rivers. That is why the law requires an **environmental flow**, a minimum amount of water left in the river.

## Exercises

1. Which basin does most of Armenia's territory belong to?
2. Which river flows out of Sevan?
3. What is the spring flood?
4. Where does Yerevan get its drinking water from?
5. What is an environmental flow and why is it needed?

## Answers

1. The Araks basin.
2. The Hrazdan.
3. The rise of water in rivers from melting snow in April–June.
4. From the underground springs of Arzni-Shamiram and Garni.
5. The minimum amount of water left in a river to keep the fish and the river ecosystem alive.`,
      quiz: [
        ["Which river flows through Yerevan?", ["The Debed", "The Hrazdan", "The Vorotan", "The Aghstev"]],
        ["Where do Armenia's rivers end up?", ["The Black Sea", "The Caspian Sea", "The Mediterranean Sea", "The Persian Gulf"]],
        ["In which months is the flood?", ["December–February", "April–June", "August–September", "October–November"]],
        ["Which river flows through Lori and belongs to the Kura basin?", ["The Kasakh", "The Arpa", "The Debed", "The Akhuryan"]],
        ["What is a mudflow?", ["A torrent of mud and stones", "A kind of lake", "A reservoir", "A waterfall"]],
      ],
    },
    "lake-sevan": {
      objectives: ["Describe the physical geography of Lake Sevan", "Tell the history of the lowering of Sevan's level", "Explain Sevan's current environmental problems", "List the other lakes and reservoirs of the Republic of Armenia"],
      content: `## Sevan

**Sevan** is the largest lake in the Caucasus and one of the large high-mountain freshwater lakes of the world.

| Feature | Value (approximately) |
|---|---|
| height | about 1,900 m |
| area | about 1,280 km² |
| greatest depth | about 80 m |
| parts | **Greater Sevan** and **Lesser Sevan** |
| inflowing rivers | 28 (Masrik, Argichi, Gavaraget and others) |
| outflowing river | only the **Hrazdan** |

Most of the lake's water is lost to **evaporation**.

## History

From the 1930s Sevan's water began to be used for the hydroelectric stations of the **Sevan-Hrazdan** cascade and for irrigating the Ararat plain. The level fell by about **19 metres**, and the volume shrank by about 40%. Sevan Island became a **peninsula**.

To save the lake, the **Arpa–Sevan** (about 48 km, 1981) and **Vorotan–Arpa** tunnels were built to bring extra water into the lake. Since the 2000s the level has been rising gradually.

## Environmental problems

- **Algal blooms**: an excess of algae caused by sewage, fertilisers and rotting flooded trees.
- Shrinking stocks of **ishkhan** (Sevan trout), poaching.
- Building on the shores.

Sevan and its basin are part of the **Sevan** national park, and the protection of the lake is governed by a separate law.

## Other lakes and reservoirs

| Name | Feature |
|---|---|
| Lake **Arpi** | Shirak, high-mountain, waterbirds, national park |
| Lake **Kari** | on the slope of Aragats, about 3,200 m |
| **Sev** (Black) Lake | Syunik |
| **Akhuryan** reservoir | the largest reservoir, irrigation |
| **Azat**, **Spandaryan**, **Kechut** reservoirs | irrigation and energy |

## Exercises

1. Which river flows out of Sevan?
2. Why did Sevan's level fall?
3. What role do the Arpa–Sevan and Vorotan–Arpa tunnels play?
4. What is a lake "bloom" and what causes it?
5. Which reservoir in the Republic of Armenia is the largest?

## Answers

1. The Hrazdan.
2. The water was used for power stations and irrigation.
3. They bring extra water into the lake and raise its level.
4. An excess of algae caused by too many nutrients (sewage, fertilisers, rotting plants).
5. The Akhuryan reservoir.`,
      quiz: [
        ["How many rivers flow into Sevan?", ["5", "12", "28", "100"]],
        ["Roughly how many metres did Sevan's level fall?", ["2", "8", "19", "50"]],
        ["Which tunnel brings water into Sevan?", ["The Dilijan", "Arpa–Sevan", "The Jermuk", "The Meghri"]],
        ["Where is Lake Arpi?", ["In Shirak", "In Syunik", "In Tavush", "In Armavir"]],
        ["What happened to Sevan Island after the level fell?", ["It was covered by water", "It became a peninsula", "It stayed the same", "It disappeared"]],
      ],
    },
    "nature-armenia": {
      objectives: ["Describe the altitudinal zones of the Republic of Armenia", "Name the main soil types", "List natural hazards and safety rules", "Name the protected areas"],
      content: `## Altitudinal zones

In Armenia climate, soils and vegetation change with height.

| Zone | Height | Soils | Vegetation |
|---|---|---|---|
| **semi-desert** | 800–1,300 m | brown soils, salt marshes | wormwood, camelthorn |
| **steppe** | 1,300–2,000 m | **chernozems** | grasses, feather grass |
| **forest** | 500–2,200 m (north-east and south-east) | brown forest soils | oak, beech, hornbeam, lime |
| **subalpine** and **alpine meadows** | 2,200–3,500 m | mountain meadow soils | bright flowers, pastures |
| **snowfields and rocks** | above 3,500 m | none | lichens |

Forests cover about **10–11%** of the territory and are mainly in Tavush, Lori and Syunik.

## Plants and animals

More than **3,800** species of higher plants grow in Armenia, which is a great many for such a small territory. Several wild species of wheat come from Armenia. Among the animals are the leopard, mouflon, bezoar goat, brown bear and wolf, and more than 350 species of birds.

## Natural hazards

| Hazard | Where | What to do |
|---|---|---|
| **earthquake** | the whole territory | strong buildings, an emergency bag ready, keep away from windows |
| **landslide** | Dilijan, Vanadzor, some districts of Yerevan | do not build on unstable slopes, plant trees |
| **mudflow** | mountain gorges, after summer downpours | do not stay in a riverbed during a storm |
| **hail**, **drought**, **frost** | farming areas | anti-hail nets, irrigation |
| **avalanche** | high passes | follow the warnings |

## Protected areas

The Republic of Armenia has **reserves** (Khosrov Forest, Shikahogh, Erebuni), **national parks** (Sevan, Dilijan, Lake Arpi, Arevik) and **sanctuaries**. The Erebuni reserve was created to protect wild species of wheat.

## Exercises

1. Which zone are chernozems found in?
2. Where are Armenia's forests mainly found?
3. Why is it dangerous to stay in a riverbed during a storm?
4. What should you do inside a building during an earthquake?
5. Why was the Erebuni reserve created?

## Answers

1. The steppe zone.
2. In Tavush, Lori and Syunik.
3. A mudflow can come down suddenly.
4. Shelter under a sturdy table, keep away from windows, do not use the lift.
5. To protect wild species of wheat.`,
      quiz: [
        ["Which soils are typical of the steppe zone?", ["Salt marshes", "Chernozems", "Sands", "Bog soils"]],
        ["Roughly what part of Armenia's territory is covered by forest?", ["2%", "10–11%", "40%", "70%"]],
        ["Which reserve protects wild wheat?", ["Khosrov Forest", "Erebuni", "Shikahogh", "Dilijan"]],
        ["What is an avalanche?", ["A sudden fall of a mass of snow down a slope", "A summer rain", "A kind of lake", "A glacier"]],
        ["Roughly how many species of higher plants grow in Armenia?", ["300", "1,000", "3,800", "20,000"]],
      ],
    },
  },
};
