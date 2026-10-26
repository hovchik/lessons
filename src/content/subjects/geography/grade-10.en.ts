import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The political map of the world, population growth and make-up, urbanisation and migration.",
    "Natural resources, the structure of the economy and globalisation, energy and industry, agriculture, transport and trade.",
  ],
  lessons: {
    "political-map": {
      objectives: ["Explain how the political map has changed", "Distinguish forms of government and state structure", "Classify countries by level of development", "Name international organisations"],
      content: `## Changes to the map

The political map changes because of **wars**, the **unification** and **break-up** of states, and countries gaining **independence**.

| Period | Events |
|---|---|
| 1918 | the Russian, Ottoman and Austro-Hungarian empires collapsed, the First Republic of Armenia was created |
| after 1945 | the UN was created, colonies in Asia and Africa gained independence |
| 1990–1991 | German reunification, break-up of the USSR and Yugoslavia, independence of Armenia (21 September 1991) |
| 1993 | Czechoslovakia split into the Czech Republic and Slovakia |
| 2011 | South Sudan gained independence |

## Forms of government

| Form | Essence | Examples |
|---|---|---|
| **republic** | power is elected | Armenia, France, USA |
| **constitutional monarchy** | the monarch reigns but does not rule | United Kingdom, Japan, Spain |
| **absolute monarchy** | all power belongs to the monarch | Saudi Arabia |

Republics can be **presidential** (USA) or **parliamentary** (Armenia since 2018, Germany).

## State structure

- **Unitary**: a single state whose regions have no constitution of their own (Armenia, France).
- **Federal**: the member units have wide autonomy (USA, Russia, Germany, India).

## Types of country

Countries are divided into **developed** (USA, EU countries, Japan), **developing** (India, Nigeria) and countries **with transition economies**. Level of development is measured by **GDP per capita** and the **Human Development Index** (HDI), which takes into account income, education and life expectancy.

## International organisations

| Organisation | Aim |
|---|---|
| **UN** (1945, 193 members) | peace and cooperation |
| **UNESCO** | education, science, culture |
| **European Union** (EU) | economic and political union of Europe |
| **NATO** | military alliance |
| **EAEU** | economic union (Armenia is a member) |
| **WTO** (World Trade Organization) | rules of international trade |
| **OPEC** | oil-exporting countries |

## Exercises

1. When did Armenia restore its independence?
2. How does a constitutional monarchy differ from an absolute one?
3. Is the Republic of Armenia a unitary or a federal state?
4. What does the HDI take into account?
5. Which international organisations does Armenia belong to? Name two.

## Answers

1. 21 September 1991.
2. In a constitutional monarchy the monarch does not rule; power belongs to parliament and the government.
3. Unitary.
4. Income, education and life expectancy.
5. For example, the UN and the EAEU.`,
      quiz: [
        ["What form of government does the United Kingdom have?", ["Republic", "Constitutional monarchy", "Absolute monarchy", "Federation"]],
        ["Which state is federal?", ["France", "Armenia", "Germany", "Japan"]],
        ["When was the UN created?", ["1918", "1945", "1991", "2001"]],
        ["What does the HDI measure?", ["Only area", "Income, education, life expectancy", "The size of the army", "Population density"]],
        ["Which organisation unites oil-exporting countries?", ["NATO", "UNESCO", "OPEC", "EAEU"]],
      ],
    },
    "world-population": {
      objectives: ["Describe the growth of the world's population", "Explain the stages of the demographic transition", "Read a population pyramid", "Compare the population policies of different countries"],
      content: `## Growth

| Year | Population (approx.) |
|---|---|
| 1800 | 1 billion |
| 1930 | 2 billion |
| 1960 | 3 billion |
| 1999 | 6 billion |
| 2022 | 8 billion |

The population grew fast in the 20th century, when medicine and food production sharply reduced the death rate. This fast growth is called the **population explosion**. Today growth is slowing down.

## Measures of reproduction

The **birth rate** and **death rate** are counted per 1,000 inhabitants (‰). The **rate of natural increase** is their difference.

**Example.** Birth rate 12‰, death rate 9‰. Natural increase is **3‰**, meaning that 3 people are added each year for every 1,000 inhabitants.

The **fertility rate** is the average number of children per woman. Simple replacement of the population needs about **2.1**.

## The demographic transition

1. High birth rate and high death rate: slow growth.
2. The death rate falls, the birth rate stays high: **fast growth** (many African countries today).
3. The birth rate also falls: growth slows (India, Latin America).
4. Low birth rate and low death rate: growth close to zero or negative (Europe, Japan, Armenia).

## The population pyramid

| Shape of the pyramid | Meaning | Example |
|---|---|---|
| wide base, narrow top | many children, a young population | Niger, Nigeria |
| wide in the middle, narrow base | few children, an **ageing** population | Japan, Italy |

Ageing increases **pension** costs and causes labour shortages.

## Population policy

- Some countries encourage births (payments when a child is born, maternity leave). Armenia has a one-off childbirth allowance and other programmes.
- From 1979 to 2015 China followed a "one family, one child" policy, which was later dropped because the population was ageing fast.

## Exercises

1. What is the population explosion?
2. Birth rate 25‰, death rate 8‰. Find the natural increase.
3. Why must fertility be about 2.1 and not 2?
4. What does a pyramid with a narrow base show?
5. Why did China drop its "one child" policy?

## Answers

1. Fast population growth caused by a sharp fall in the death rate.
2. 17‰.
3. Some children do not live to adulthood, and slightly more boys than girls are born.
4. Few children, an ageing population.
5. The population was ageing fast, and the workforce was shrinking.`,
      quiz: [
        ["Roughly when did the population reach 8 billion?", ["1960", "1999", "2022", "2050"]],
        ["Birth rate 10‰, death rate 12‰. What is the natural increase?", ["+2‰", "−2‰", "22‰", "0"]],
        ["What fertility rate is needed for simple replacement?", ["1.2", "2.1", "3.5", "5"]],
        ["A pyramid with a wide base shows", ["an ageing population", "a young population", "a stable population", "only the number of men"]],
        ["Which country followed a \"one family, one child\" policy?", ["India", "China", "Japan", "Russia"]],
      ],
    },
    "urbanization-migration": {
      objectives: ["Define urbanisation and its measures", "Name the world's largest urban areas", "Classify migrations", "Assess the impact of migration on countries"],
      content: `## Urbanisation

**Urbanisation** is the growth of cities and of the urban population and the spread of the urban way of life. In 2007, for the first time in the world, there were more city dwellers than rural ones. Today about **57%** of humanity lives in cities.

The **level of urbanisation** is the share of the urban population in the total population, in per cent.

**Example.** A country has 20 million people, of whom 15 million live in cities. Level: 15 / 20 · 100% = **75%**.

| Level | Countries |
|---|---|
| high (more than 80%) | United Kingdom, Australia, Japan, Argentina |
| medium | Armenia (about 64%), China |
| low (less than 40%) | India, Ethiopia, Niger |

## Urban areas and megalopolises

An **urban agglomeration** is a large city with its suburbs and neighbouring towns. Agglomerations that have merged form a **megalopolis** (for example, **BosWash** from Boston to Washington, **Tokaido** in Japan).

The world's largest urban areas: **Tokyo**, **Delhi**, **Shanghai**, **São Paulo**, **Mexico City**, **Cairo**.

**False urbanisation**: in developing countries people move from villages to cities but find no work and live in **slums** (shanty towns, favelas).

## Migration

| Type | Example |
|---|---|
| **internal** | from village to town, from the provinces to Yerevan |
| **external** | from Armenia to Russia, from Latin America to the USA |
| **labour** | seasonal work abroad |
| **forced** (refugees) | from wars, disasters |

The causes of migration are divided into **push** factors (no work, war, disasters) and **pull** factors (high wages, safety, education).

**Impact**: receiving countries gain workers, while sending countries receive **money transfers** but lose young people and specialists (the **"brain drain"**).

## Exercises

1. What is urbanisation?
2. A country has 8 million people, of whom 2 million live in cities. Find the level of urbanisation.
3. What is a megalopolis? Give an example.
4. List two push factors and two pull factors.
5. What is the "brain drain"?

## Answers

1. The growth of cities and of the urban population and the spread of the urban way of life.
2. 25%.
3. A belt of merged urban areas, for example BosWash.
4. Push: unemployment, war; pull: high wages, safety.
5. The emigration of highly qualified specialists.`,
      quiz: [
        ["Roughly what percentage of the world's people live in cities today?", ["20%", "40%", "57%", "90%"]],
        ["Which of these is one of the world's largest urban areas?", ["Yerevan", "Tokyo", "Geneva", "Vienna"]],
        ["What is BosWash?", ["A river", "A megalopolis", "A mountain", "A port"]],
        ["Which factor is a pull factor?", ["War", "Unemployment", "High wages", "Drought"]],
        ["In a country of 10 million people, 7 million live in cities. The level of urbanisation is:", ["30%", "70%", "17%", "700%"]],
      ],
    },
    "natural-resources": {
      objectives: ["Classify natural resources", "Calculate resource availability", "Name the leading countries for mineral resources", "Explain the principles of using resources wisely"],
      content: `## Classification

| By exhaustibility | Examples |
|---|---|
| **non-renewable** | oil, gas, coal, metal ores |
| **renewable** | forests, water, soil, animals (if used properly) |
| **inexhaustible** | the energy of the sun, wind and tides |

By origin, resources can be **mineral**, **land**, **water**, **biological**, **climatic** and **recreational** (for leisure).

## Resource availability

**Resource availability** shows how many years reserves will last at the current rate of extraction.

availability (years) = reserves / annual extraction

**Example.** A country's oil reserves are 2 billion t, and annual extraction is 50 million t. Availability: 2,000 / 50 = **40 years**.

## Mineral resources

| Resource | Leading countries |
|---|---|
| oil | Venezuela, Saudi Arabia, Iran, Canada, Iraq, Russia, USA |
| natural gas | Russia, Iran, Qatar, Turkmenistan, USA |
| coal | USA, Russia, Australia, China, India |
| iron ore | Australia, Brazil, Russia, China |
| copper | Chile, Peru, Australia, DR Congo |

The Persian Gulf region holds most of the world's oil reserves.

## Land and water resources

Arable land covers about **11%** of the land surface. Every year millions of hectares are lost to erosion, salinisation and desertification. The largest reserves of fresh water belong to **Brazil**, **Russia** and **Canada**. The Middle East and North Africa suffer from water shortages.

## Using resources wisely

- **Recycling**: metals, paper, plastic.
- **Integrated** extraction: getting all the useful components out of an ore.
- Developing **renewable** energy.
- **Reforestation** and soil protection.

## Exercises

1. How do renewable resources differ from inexhaustible ones?
2. Coal reserves are 600 million t, and annual extraction is 20 million t. Find the availability.
3. In which region are most oil reserves?
4. What is desertification?
5. List two ways of using resources wisely.

## Answers

1. Renewable resources can run out if overused, while inexhaustible ones do not run out.
2. 30 years.
3. In the Persian Gulf region.
4. The turning of land into desert because of overgrazing, deforestation and droughts.
5. Recycling and using renewable energy.`,
      quiz: [
        ["Which resource is non-renewable?", ["Forest", "Oil", "Solar energy", "Wind"]],
        ["Reserves 100 million t, extraction 5 million t a year. Availability:", ["5 years", "20 years", "500 years", "95 years"]],
        ["Which country leads in copper mining?", ["Chile", "Japan", "France", "Egypt"]],
        ["Roughly what part of the land surface is arable land?", ["1%", "11%", "40%", "70%"]],
        ["Which resource is inexhaustible?", ["Coal", "Solar energy", "Iron ore", "Natural gas"]],
      ],
    },
    "world-economy-structure": {
      objectives: ["Explain the international division of labour", "Name the largest economies", "Explain globalisation and the role of TNCs", "Assess the positive and negative sides of globalisation"],
      content: `## The international division of labour

Countries **specialise** in producing certain goods and trade them with each other. For example, Saudi Arabia in oil, Japan in cars and electronics, Brazil in coffee and soya, Armenia in copper concentrate, brandy and IT services. Specialisation depends on resources, labour, technology and location.

## Structure of the economy

In developed countries services make up most of GDP (more than 70%). In developing countries agriculture and mining play a big role. As it develops, an economy moves from **agrarian** → **industrial** → **post-industrial** (services, knowledge, technology).

## The largest economies

By GDP the leaders are the **USA**, **China**, **Germany**, **Japan** and **India**. Measured by purchasing power parity, China is first.

**GDP per capita** = GDP / population.

**Example.** A country's GDP is 30 billion dollars and its population is 3 million. Per capita: 30,000,000,000 / 3,000,000 = **10,000 dollars**.

## Globalisation

**Globalisation** is the deepening of economic, political and cultural links between the countries of the world. Its driving forces:

- **transnational corporations** (TNCs), which have production in many countries (Apple, Toyota, Samsung),
- the **internet** and cheap communication,
- **container** shipping,
- **trade liberalisation**.

For example, the parts of one smartphone may be made in dozens of countries and assembled in yet another.

## Two sides

| Positive | Negative |
|---|---|
| goods are available, prices are low | production moves to countries with cheap labour |
| technology and knowledge spread | inequality grows |
| new jobs in developing countries | local cultures become more alike |
| international cooperation | crises spread quickly around the world |

## Exercises

1. What is the international division of labour?
2. How does a post-industrial economy differ from an industrial one?
3. GDP is 600 billion dollars and the population is 50 million. Find GDP per capita.
4. What is a TNC? Give an example.
5. Name one positive and one negative side of globalisation.

## Answers

1. The specialisation of countries in producing certain goods and trading them.
2. In a post-industrial economy services and knowledge dominate.
3. 12,000 dollars.
4. A company with production in many countries, for example Toyota.
5. Positive: goods are available; negative: inequality grows.`,
      quiz: [
        ["Which country has the largest nominal GDP?", ["China", "USA", "Germany", "Japan"]],
        ["In developed countries most of GDP comes from", ["agriculture", "services", "mining", "fishing"]],
        ["GDP 20 billion dollars, population 4 million. Per capita:", ["500 dollars", "5,000 dollars", "80 dollars", "50,000 dollars"]],
        ["What is a TNC?", ["An international organisation", "A transnational corporation", "A bank", "A state"]],
        ["Which is a driving force of globalisation?", ["Closing borders", "The internet", "Trade bans", "Horse-drawn post"]],
      ],
    },
    "world-energy-industry": {
      objectives: ["Describe the world energy balance", "Name the leading countries in electricity generation", "List old and new branches of industry", "Explain the shift of industry to Asia"],
      content: `## The energy balance

About **80%** of the world's energy still comes from fossil fuels: **oil**, **coal** and **gas**. The share of **solar** and **wind** energy is growing fast.

| Type of station | Feature | Leaders |
|---|---|---|
| **thermal** | burn coal, gas, fuel oil, pollute the air | China, India, USA |
| **hydro** | cheap, clean energy, but reservoirs flood land | China (Three Gorges), Brazil, Canada, Norway |
| **nuclear** | high output, no CO₂ emissions, but radioactive waste and risk of accidents | USA, France, China |
| **solar** and **wind** | renewable, depend on the weather | China, USA, Germany, Spain |

**France** gets about 2/3 of its electricity from nuclear plants, and **Norway** gets almost all of it from hydro. The accidents at Chernobyl (1986) and Fukushima (2011) showed the dangers of nuclear power.

## Industry

| Branches | Examples |
|---|---|
| **old** | coal, metallurgy, shipbuilding, textiles |
| **new** | car making, chemicals, plastics |
| **newest** (high technology) | electronics, computers, pharmaceuticals, aerospace, biotechnology |

High-tech centres: **Silicon Valley** (USA), **Shenzhen** (China), Taiwan (semiconductors), South Korea.

## The shift to Asia

Since the late 20th century most industrial production has moved to **Asia**, especially to **China**, which is called the "workshop of the world". The reasons: cheap labour, a large domestic market, government support, good infrastructure. **Research** and **design** centres stay in developed countries.

## Exercises

1. Roughly what part of the world's energy comes from fossil fuels?
2. Which country gets most of its electricity from nuclear plants?
3. Name one advantage and one disadvantage of hydro stations.
4. Which branches are the newest? Name three.
5. Why is China called the "workshop of the world"?

## Answers

1. About 80%.
2. France.
3. Advantage: cheap and clean energy; disadvantage: reservoirs flood land and settlements.
4. For example, electronics, pharmaceuticals, aerospace.
5. Most of the world's industrial output is produced there.`,
      quiz: [
        ["Which country gets almost all its electricity from hydro?", ["France", "Norway", "Saudi Arabia", "Poland"]],
        ["When did the Chernobyl accident happen?", ["1976", "1986", "1996", "2011"]],
        ["Which branch is one of the newest?", ["Coal mining", "Textiles", "Biotechnology", "Shipbuilding"]],
        ["Where is Silicon Valley?", ["In Japan", "In the USA", "In Germany", "In India"]],
        ["Which country is called the \"workshop of the world\"?", ["Japan", "China", "Brazil", "Italy"]],
      ],
    },
    "world-agriculture-trade": {
      objectives: ["Distinguish commercial and subsistence farming", "Name the geography of the main crops", "Compare types of transport", "Describe the structure of world trade"],
      content: `## Types of farming

| Type | Feature | Where? |
|---|---|---|
| **commercial** (intensive) | machines, fertilisers, high yields, few workers | USA, Europe, Australia |
| **subsistence** (traditional) | manual labour, low yields, for the family | many countries of Africa and Asia |
| **plantation** | one crop for export | Brazil (coffee), Sri Lanka (tea), Ghana (cocoa) |

The **Green Revolution** (1960s–1970s) doubled the harvests of India and Mexico thanks to new varieties, irrigation and fertilisers.

## Crops

| Crop | Leading countries |
|---|---|
| wheat | China, India, Russia, USA |
| rice | China, India, Bangladesh, Indonesia |
| maize | USA, China, Brazil |
| coffee | Brazil, Vietnam, Colombia |
| tea | China, India, Kenya |

## Transport

| Type | Advantage | Disadvantage |
|---|---|---|
| **sea** | cheap, large loads, about 80% of international trade | slow |
| **rail** | large loads over land | expensive to build |
| **road** | "door to door" | pollution, traffic jams |
| **air** | the fastest | expensive, small loads |
| **pipeline** | oil and gas without interruption | only liquids and gases |

Important canals: the **Suez** (Mediterranean Sea to Red Sea) and the **Panama** (Atlantic to Pacific Ocean). Among the largest ports are **Shanghai**, **Singapore** and **Rotterdam**.

## Trade

The goods sold most in world trade are **machinery and equipment**, **fuel** and **chemical products**. The trade leaders are China, the USA and Germany.

The **balance of trade** is the difference between exports and imports.

**Example.** A country exported goods worth 5 billion and imported goods worth 8 billion dollars. Balance: 5 − 8 = **−3 billion** dollars (a trade deficit).

## Exercises

1. How does commercial farming differ from subsistence farming?
2. What was the Green Revolution?
3. Which transport carries most international trade?
4. Which oceans does the Panama Canal connect?
5. Exports 12 billion, imports 9 billion. Find the balance.

## Answers

1. Commercial farming uses machines and fertilisers and produces for sale; subsistence farming uses manual labour and produces for the family.
2. A sharp rise in harvests in the 1960s–1970s thanks to new varieties, irrigation and fertilisers.
3. Sea transport.
4. The Atlantic and the Pacific.
5. +3 billion dollars.`,
      quiz: [
        ["Which country leads in coffee production?", ["China", "Brazil", "Russia", "France"]],
        ["Which transport is the fastest?", ["Sea", "Rail", "Air", "Pipeline"]],
        ["Which canal connects the Mediterranean and Red Seas?", ["The Panama", "The Suez", "The Kiel", "The English Channel"]],
        ["Exports 4 billion, imports 6 billion. Balance:", ["+2 billion", "−2 billion", "10 billion", "0"]],
        ["What is a plantation?", ["A large farm growing one crop for export", "A family garden", "A forest", "A pasture"]],
      ],
    },
  },
};
