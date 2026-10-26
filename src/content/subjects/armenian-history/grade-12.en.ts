import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "The experience of state-building in 1918–1920, the Soviet model, the diaspora in the 20th century.",
    "The road to independence, state-building, the Karabakh conflict 1994–2023, Armenia in today's world.",
  ],
  lessons: {
    "first-republic-state-building": {
      objectives: ["Analyse the domestic policy of the First Republic", "Assess its foreign policy and the Paris Peace Conference", "Explain the reasons for the fall of the Republic", "Compare the starting conditions of the First and Third Republics"],
      content: `## Starting conditions

In summer 1918 the Republic of Armenia had:

- about **12,000 km²** of territory (in 1919 it grew considerably with the Kars region),
- hundreds of thousands of **refugees**,
- **famine** and a **typhus** epidemic: in the winter of 1918–1919 about 20% of the population died,
- a ruined economy and border disputes with its neighbours.

## Domestic policy

| Area | Achievement |
|---|---|
| **government** | a parliament (the **Council of Armenia**, then a **parliament** elected in 1919), a government, local self-government |
| **voting rights** | universal, including for **women**; there were women deputies in parliament |
| **education** | Yerevan University (1919), schools in Armenian |
| **army** | creation of a national army |
| **social welfare** | orphanages supported by **Near East Relief** (USA) |

## Foreign policy

At the **Paris Peace Conference of 1919** the Armenian delegations (**Avetis Aharonian** and **Boghos Nubar**) put forward the demand for a "**United Armenia**". Under the **Treaty of Sèvres of 10 August 1920** Turkey recognised Armenia, and in November US President **Wilson** drew the border. However, the treaty never came into force.

## Reasons for the fall

1. **External**: the rapprochement between Kemalist Turkey and Bolshevik Russia, and the lack of real help from the Entente powers.
2. **Military**: defeat in the Turkish-Armenian war of autumn 1920.
3. **Internal**: economic crisis, refugees, political division (the May Uprising of 1920).

## Comparison with the Third Republic

| Criterion | 1918 | 1991 |
|---|---|---|
| territory | shifting, disputed borders | borders inherited from the USSR (29,700 km²) |
| international recognition | limited | UN member since 1992 |
| crisis | famine, refugees | earthquake, war, blockade, energy crisis |

## Exercises

1. In what difficult conditions did the First Republic operate?
2. List three domestic achievements.
3. What was the demand for a "United Armenia"?
4. Name one external and one internal reason for the fall.
5. Compare the crises of 1918 and 1991.

## Answers

1. Famine, epidemics, refugees, a ruined economy.
2. Voting rights for women, the university, a national army.
3. Uniting Eastern and Western Armenia in one state.
4. External: the rapprochement of the Kemalists and Bolsheviks; internal: economic crisis.
5. In 1918, famine and refugees; in 1991, earthquake, war and blockade.`,
      quiz: [
        ["Who led the Armenian delegations in Paris?", ["Aharonian and Boghos Nubar", "Kajaznuni and Khatisian", "Andranik and Dro", "Miasnikian and Shahumyan"]],
        ["Which organisation helped the orphanages?", ["Near East Relief", "The UN", "UNESCO", "Only the Red Cross"]],
        ["What is an external reason for the fall of the First Republic?", ["The rapprochement of the Kemalists and Bolsheviks", "An earthquake", "The collapse of the USSR", "A world financial crisis"]],
        ["What is the territory of the Republic of Armenia today?", ["12,000 km²", "29,700 km²", "45,000 km²", "400,000 km²"]],
        ["When was the parliament of the First Republic elected?", ["1918", "1919", "1920", "1921"]],
      ],
    },
    "soviet-model": {
      objectives: ["Describe the political and economic features of the Soviet system", "Compare the stages of the Soviet period", "Analyse national problems in the Soviet period", "Assess the Soviet legacy"],
      content: `## Features of the system

- **One-party** rule (the Communist Party).
- A **planned economy**: the state decided what to produce and how much.
- State ownership of factories and land.
- Ideological control over the press, science and the arts.

## Stages

| Stage | Years | Main features in Armenia |
|---|---|---|
| **NEP** | 1921–1928 | small private trade allowed, recovery, **Alexander Miasnikian** |
| **Stalinist** | 1928–1953 | industrialisation, collectivisation, **repressions** (Aghasi Khanjian, Charents), the war, repatriation |
| **The Thaw** | 1953–1964 | the names of the repressed restored, a revival of culture |
| **Stagnation** | 1964–1985 | a stable but slowing economy, the Yerevan Metro (1981), Tsitsernakaberd (1967) |
| **Perestroika** | 1985–1991 | Gorbachev, **glasnost**, the Karabakh movement |

## National problems

- **Nagorno-Karabakh** and **Nakhichevan**: remained part of Azerbaijan, and the Armenian population of Nakhichevan shrank. From the 1960s the Armenians of Karabakh sent petitions to Moscow.
- **Memory of the genocide**: until 1965 the subject was not discussed openly.
- **Dissent**: in 1966 the underground **National United Party** was created; its members were arrested.
- **The environmental movement**: in 1987 there were demonstrations in Yerevan against the Nairit plant and the **Metsamor Nuclear Power Plant**.

## Legacy

| Positive | Negative |
|---|---|
| universal education, schools of science, industry | lack of political freedom, repressions |
| security, population growth (from about 0.9 million in 1926 to 3.3 million in 1989) | environmental problems, the inefficiency of the planned economy |
| the architectural look of Yerevan | unresolved national questions |

## Exercises

1. List three features of the Soviet system.
2. What was the NEP?
3. In which Soviet stage was the Yerevan Metro built?
4. What was the environmental movement of 1987 directed against?
5. Assess the Soviet legacy, naming two positive and two negative sides.

## Answers

1. One-party rule, a planned economy, ideological control.
2. The New Economic Policy, which allowed small private trade.
3. In the period of stagnation (1981).
4. Against the Nairit plant and the Metsamor Nuclear Power Plant.
5. Positive: education, industry; negative: repressions, lack of freedom.`,
      quiz: [
        ["Who led Soviet Armenia in the NEP years?", ["Alexander Miasnikian", "Aghasi Khanjian", "Karen Demirchyan", "Anastas Mikoyan"]],
        ["When did the Yerevan Metro open?", ["1967", "1975", "1981", "1991"]],
        ["What is glasnost?", ["Openness", "Collectivisation", "Industrialisation", "Repatriation"]],
        ["When was the National United Party created?", ["1956", "1966", "1988", "1991"]],
        ["Which period is called \"the Thaw\"?", ["1921–1928", "1953–1964", "1964–1985", "1985–1991"]],
      ],
    },
    "diaspora-20th-century": {
      objectives: ["Describe the formation of the diaspora after the genocide", "Name diaspora organisations and centres", "Analyse relations between the diaspora and Soviet Armenia", "Assess the diaspora's contribution to the development of Armenia"],
      content: `## The new diaspora

Survivors of the genocide settled in **Syria** (Aleppo), **Lebanon** (Beirut, Anjar), **France** (Marseille, Paris), the **USA** (Boston, Fresno, Los Angeles), **Argentina** and **Iran**. For many years **Lebanon** was the cultural centre of the diaspora. The **Catholicosate of Cilicia** has been based in **Antelias** since 1930.

## Organisations

| Organisation | Activity |
|---|---|
| **AGBU** (Armenian General Benevolent Union) | schools, cultural programmes, universities |
| **Parties** (Dashnaktsutyun, Hnchakian, Ramkavar Azatakan) | political life, the press |
| **Hamazkayin**, **Armenian Relief Society** | culture, education, social aid |
| **The Church** | parish communities, Sunday schools |

## The diaspora and Soviet Armenia

- **Repatriation in 1946–1949**: about 100,000 people, but many faced hardships and some were exiled.
- **The Cold War**: the diaspora was split into those who sympathised with Soviet Armenia and those who opposed it.
- In **1964** the **Committee for Cultural Relations with Compatriots Abroad** was created.
- After the 1988 earthquake the diaspora organised large-scale aid.

## Contribution

- The **Calouste Gulbenkian Foundation**: schools, libraries, publications.
- **Alex Manoogian**, **Kirk Kerkorian** (the Lincy Foundation): roads, schools and cultural programmes in the 1990s and later.
- The **"Hayastan" All-Armenian Fund** (1992).
- Scientists and artists: **Charles Aznavour**, **William Saroyan**, **Rouben Mamoulian**, **Aram Khachaturian** (in the Soviet Union), **Sergei Parajanov**.

## Exercises

1. In which countries did survivors of the genocide settle?
2. Where is the Catholicosate of Cilicia based?
3. Why was the diaspora split during the Cold War?
4. What is the "Hayastan" All-Armenian Fund?
5. Name three well-known figures of the diaspora.

## Answers

1. Syria, Lebanon, France, the USA, Argentina, Iran.
2. In Antelias (Lebanon).
3. One part sympathised with Soviet Armenia, the other opposed it.
4. An all-Armenian charitable fund created in 1992.
5. Charles Aznavour, William Saroyan, Kirk Kerkorian.`,
      quiz: [
        ["Which country was the cultural centre of the diaspora for many years?", ["Lebanon", "Japan", "Canada", "Australia"]],
        ["When was the \"Hayastan\" All-Armenian Fund created?", ["1964", "1988", "1992", "2001"]],
        ["Which foundation did Kirk Kerkorian create?", ["Lincy", "Gulbenkian", "Mantashiants", "Nansen"]],
        ["Where has the Catholicosate of Cilicia been based since 1930?", ["Antelias", "Sis", "Etchmiadzin", "Jerusalem"]],
        ["Who was an American Armenian writer?", ["William Saroyan", "Charles Aznavour", "Sergei Parajanov", "Rouben Mamoulian"]],
      ],
    },
    "road-to-independence": {
      objectives: ["Analyse the causes and stages of the Karabakh movement", "Explain the link between the movement and perestroika", "Present the main points of the Declaration of Independence", "Assess the experience of 1988–1991"],
      content: `## Causes

- **Historical**: in 1921 Nagorno-Karabakh, where most of the population was Armenian, was left within Azerbaijan.
- **Demographic**: the example of Nakhichevan, where the Armenian population had almost disappeared.
- **Political**: Gorbachev's **perestroika** and **glasnost** made it possible to speak openly.
- **Environmental and national** discontent.

## Stages

| Time | Event |
|---|---|
| 1988, 20 February | the regional council of the NKAO asked to join Armenia |
| 1988, February | pogroms in Sumgait |
| 1988 | the "Karabakh" Committee formed; rallies in Theatre Square (now Freedom Square) |
| 1988, 7 December | the Spitak earthquake; members of the "Karabakh" Committee arrested |
| 1990, January | pogroms of Armenians in Baku |
| 1990, May | elections to the Supreme Council; victory for the movement's candidates |
| 1990, 23 August | **Declaration of Independence** |
| 1991, April–May | Operation "Ring": Soviet troops and Azerbaijani OMON riot police expelled the people of Armenian villages |
| 1991, 21 September | **referendum** in favour of independence |

## The Declaration of Independence

The Declaration:

- proclaimed the start of the process of establishing independent statehood,
- renamed the country the **Republic of Armenia**,
- approved the flag, coat of arms and anthem,
- supported international recognition of the **Armenian Genocide**,
- relied on the 1989 decision on the reunification of the Armenian SSR and Nagorno-Karabakh.

## Analysis

The Karabakh movement began as a **national and territorial** demand but turned into a movement for **democracy** and **independence**. It showed the great unity of society, but it also brought the challenges of **war** and **blockade**.

## Exercises

1. List three causes of the Karabakh movement.
2. When did the regional council of the NKAO ask to join Armenia?
3. What was Operation "Ring"?
4. List three points of the Declaration of Independence.
5. How did the nature of the movement change in 1988–1991?

## Answers

1. Historical (the decision of 1921), demographic, political (perestroika).
2. On 20 February 1988.
3. An operation by Soviet troops and Azerbaijani OMON in 1991 to expel the people of Armenian villages.
4. The name "Republic of Armenia", the flag and coat of arms, support for recognition of the genocide.
5. It turned from a territorial demand into a movement for democracy and independence.`,
      quiz: [
        ["When was the Declaration of Independence adopted?", ["1988, 20 February", "1990, 23 August", "1991, 21 September", "1995, 5 July"]],
        ["Perestroika was the policy of which Soviet leader?", ["Gorbachev", "Brezhnev", "Khrushchev", "Stalin"]],
        ["What is Theatre Square called now?", ["Freedom Square", "Republic Square", "Shahumyan Square", "France Square"]],
        ["When was Operation \"Ring\" carried out?", ["1988", "1990", "1991", "1994"]],
        ["What renaming did the Declaration of Independence make?", ["The Armenian SSR became the Republic of Armenia", "Yerevan became Erebuni", "Leninakan became Gyumri", "Kirovakan became Vanadzor"]],
      ],
    },
    "third-republic": {
      objectives: ["Describe how the system of government of independent Armenia developed", "Explain the constitutional changes", "Analyse the economic transition and its difficulties", "Present Armenia's international ties"],
      content: `## The Constitution

| Year | Change |
|---|---|
| **1995**, 5 July | the first Constitution adopted: a **semi-presidential** system of government |
| **2005** | amendments, wider powers for parliament |
| **2015** | after a referendum, the move to a **parliamentary** system of government (in force since 2018) |

5 July is **Constitution Day**.

## The economic transition

At the beginning of the 1990s Armenia faced a **deep crisis**:

- war and **blockade**: in 1993 Turkey closed the border, and the border with Azerbaijan was closed,
- an **energy crisis** (the "dark and cold years" of 1992–1995); the Metsamor Nuclear Power Plant was restarted in 1995,
- the break-up of Soviet economic ties and the closure of factories,
- in 1993 the national currency, the **dram**, was introduced,
- **privatisation** (of land, housing and enterprises).

The 2000s saw rapid growth (construction, services), and in recent years the **information technology** sector has been developing. **Emigration** and poverty have remained serious problems.

## International ties

| Year | Event |
|---|---|
| 1992 | joined the **UN** and the **OSCE** |
| 2001 | joined the **Council of Europe** |
| 2003 | joined the **World Trade Organization** |
| 2015 | joined the **Eurasian Economic Union** |
| 2017 | the **Comprehensive and Enhanced Partnership Agreement** (CEPA) with the European Union |

## Political life

During the years of independence there were **election disputes** and **protests** (1996, 2003, 2008, 2018). On **27 October 1999** there was a terrorist attack in the National Assembly in which Prime Minister **Vazgen Sargsyan**, Speaker of Parliament **Karen Demirchyan** and others were killed. In spring **2018**, after mass protests, there was a change of power, and **Nikol Pashinyan** became prime minister.

## Exercises

1. When was the first Constitution adopted?
2. What did the constitutional referendum of 2015 change?
3. List three causes of the economic crisis of the 1990s.
4. When was the dram introduced?
5. Which international organisations is Armenia a member of?

## Answers

1. On 5 July 1995.
2. The move from a semi-presidential to a parliamentary system of government.
3. War and blockade, the energy crisis, the break-up of Soviet economic ties.
4. In 1993.
5. The UN, the OSCE, the Council of Europe, the WTO, the EAEU.`,
      quiz: [
        ["When is Constitution Day?", ["28 May", "5 July", "21 September", "23 August"]],
        ["When was the Armenian dram introduced?", ["1991", "1993", "1995", "2001"]],
        ["When did Armenia join the Council of Europe?", ["1992", "2001", "2003", "2015"]],
        ["Which economic union has Armenia been part of since 2015?", ["The European Union", "The Eurasian Economic Union", "NAFTA", "ASEAN"]],
        ["When was the terrorist attack in the National Assembly?", ["1996", "1999", "2003", "2008"]],
      ],
    },
    "artsakh-conflict-1994-2023": {
      objectives: ["Present the timeline of the conflict from 1994 to 2023", "Explain the formats of the negotiation process", "Analyse the consequences of the 2020 war and the events of 2023", "Tell apart facts and assessments in recent history"],
      content: `## After the ceasefire

After the ceasefire in **May 1994**, Armenian forces controlled Nagorno-Karabakh and the surrounding districts. The **Nagorno-Karabakh Republic** (Artsakh) existed as an unrecognised state. Talks were led by the OSCE **Minsk Group**, co-chaired by **Russia**, the **USA** and **France**.

## Timeline

| Time | Event |
|---|---|
| 2016, April | the **Four-Day War**, fighting along the line of contact |
| 2020, 27 September – 9 November | the **44-Day War**: Azerbaijan, backed by Turkey, took the surrounding districts and Shushi |
| 2020, 9–10 November | the **trilateral statement** (Armenia, Azerbaijan, Russia): an end to the fighting, Russian **peacekeepers** |
| 2022, September | an Azerbaijani offensive on border areas of **Armenia** |
| 2022, December – 2023, September | blockade of the **Lachin corridor**; shortages of food, medicine and fuel in Artsakh |
| 2023, 19–20 September | Azerbaijan's military operation in Artsakh |
| 2023, September–October | almost the whole Armenian population of Artsakh, **more than 100,000 people**, moved to Armenia |

Thousands of soldiers and civilians died in the wars. The authorities of Artsakh announced the dissolution of their institutions from 1 January 2024.

## The peace process

Since 2023 Armenia and Azerbaijan have been negotiating a **peace treaty** and the **delimitation** of the border. In **August 2025** in Washington the leaders of the two countries signed a joint declaration and initialled the text of an agreement. The process is continuing, and it should be followed through reliable sources.

## How to study recent events

- Tell apart a **fact** ("in September 2023 more than 100,000 people moved to Armenia") and an **assessment** ("this was ...").
- Compare sources from **different sides** and reports by international organisations (the UN, the International Court of Justice, the Red Cross).
- Remember that some documents about recent events are not yet available, and historians' assessments may change.

## Exercises

1. Which countries co-chaired the Minsk Group?
2. When was the 44-Day War?
3. What did the trilateral statement of 9–10 November 2020 provide for?
4. What were the consequences of the blockade of the Lachin corridor?
5. Formulate one fact and one assessment about the events of 2023.

## Answers

1. Russia, the USA, France.
2. From 27 September to 9 November 2020.
3. An end to the fighting and the deployment of Russian peacekeepers.
4. Shortages of food, medicine and fuel in Artsakh.
5. For example, fact: "more than 100,000 people moved to Armenia"; assessment: the student's own reasoned opinion.`,
      quiz: [
        ["The Minsk Group of which organisation mediated the talks?", ["The OSCE", "NATO", "The EU", "The CIS"]],
        ["When did the 44-Day War begin?", ["2016, 2 April", "2020, 27 September", "2022, 13 September", "2023, 19 September"]],
        ["Peacekeepers from which country were deployed after 2020?", ["Russia", "France", "The USA", "Iran"]],
        ["About how many people moved from Artsakh to Armenia in 2023?", ["10,000", "More than 100,000", "500,000", "1 million"]],
        ["Which is a fact rather than an assessment?", ["\"A trilateral statement was signed on 9–10 November 2020\"", "\"It was the right decision\"", "\"The talks were pointless\"", "\"The mediators did a good job\""]],
      ],
    },
    "armenia-today": {
      objectives: ["Analyse the challenges Armenia faces", "Explain the forms of relations between Armenia and the diaspora", "Present opportunities for economic development", "Design a civic project based on historical knowledge"],
      content: `## Challenges

| Area | Challenge |
|---|---|
| **security** | border security, a peace treaty, the choice of allies |
| **demography** | emigration, a falling birth rate, integrating displaced people |
| **economy** | closed borders, dependence on one or two markets, poverty in the provinces |
| **democracy** | strengthening institutions, independent courts, press freedom |
| **cultural heritage** | preserving monuments, including those outside Armenia |

## Armenia and the diaspora

More Armenians live in the diaspora than in Armenia. There are large communities in **Russia**, the **USA**, **France**, **Argentina**, **Lebanon** and **Iran**.

Forms of ties:

- **repatriation** and volunteer programmes (for example, "Birthright Armenia" (Depi Hayk)),
- **investment** and **charity**,
- **educational** programmes (the American University of Armenia, 1991; UWC Dilijan school; the Tumo Center for Creative Technologies),
- **lobbying** and the campaign for recognition of the genocide.

## Opportunities for development

- **Information technology**: a fast-growing sector with offices of international companies.
- **Tourism**: historic monuments (on the UNESCO list: Haghpat, Sanahin, Geghard, Etchmiadzin and Zvartnots), nature, food.
- **Agriculture and processing**: apricots, wine, brandy.
- **Transit**: if regional roads are opened.

## History and the citizen

Knowing history helps you to:

- understand the **roots** of today's problems,
- think **critically** about news and propaganda,
- respect **different** points of view,
- make responsible **civic** decisions.

## Exercises

1. List three challenges Armenia faces.
2. In which countries are there large Armenian communities?
3. Name two educational programmes created with the help of the diaspora.
4. Which sectors have great opportunities for development?
5. Propose a small civic project for your community (for example, researching the history of a local monument).

## Answers

1. Security, emigration, closed borders.
2. Russia, the USA, France, Argentina, Lebanon, Iran.
3. The American University of Armenia, the Tumo Center.
4. IT, tourism, agriculture.
5. Open answer. What is assessed is how realistic the project is and how it is linked with history.`,
      quiz: [
        ["When was the American University of Armenia founded?", ["1919", "1991", "2001", "2011"]],
        ["Which sector has been growing fast in Armenia in recent years?", ["Information technology", "The oil industry", "Fishing", "Coal mining"]],
        ["Which monument is on the UNESCO list?", ["Geghard", "The Yerevan Cascade", "Mother Armenia", "Komitas Park"]],
        ["Where do most Armenians live?", ["Outside Armenia", "Only in Yerevan", "Only in the provinces", "Only in Russia"]],
        ["How does knowing history help a citizen?", ["By thinking critically about propaganda", "With arithmetic calculations", "With sporting achievements", "With weather forecasts"]],
      ],
    },
  },
};
