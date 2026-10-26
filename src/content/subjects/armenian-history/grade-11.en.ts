import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Migrations and the diaspora, liberation ideologies, the Western Armenian awakening, Eastern Armenians in Russia.",
    "The Armenian Question in diplomacy, analysing the Armenian Genocide, the Caucasus Front and 1918.",
  ],
  lessons: {
    "migrations-and-diaspora": {
      objectives: ["Classify the causes of migration", "Compare the waves of migration in different centuries", "Explain how diaspora communities preserved identity", "Analyse the role of the diaspora in national life"],
      content: `## Why did Armenians migrate?

| Cause | Example |
|---|---|
| **wars and invasions** | the Seljuks (11th century), Tamerlane (late 14th century) |
| **forced deportation** | Shah Abbas's Great Surgun (1604–1605) |
| **economic** | heavy taxes, trading opportunities |
| **massacres** | 1894–1896, 1909, 1915–1923 |
| **state policy** | resettlement to Eastern Armenia in 1828–1829 |

## Waves of migration

1. **11th–14th centuries**: to Cilicia, Crimea, Poland, Moldova, Romania.
2. **16th–18th centuries**: to Persia (New Julfa), India, Russia (Astrakhan, Nor Nakhichevan in 1779), Europe (Amsterdam, Venice).
3. **19th century**: from Western Armenia to the Russian Empire, and also to Constantinople and Smyrna.
4. **Early 20th century**: survivors of the genocide to Syria, Lebanon, France, the USA, Argentina.

## How identity was preserved

- **The Church**: the centre of every community; it preserved the language and the feasts.
- **The school**: teaching the mother tongue.
- **The press and printing**: "Azdarar" (Madras), the Mekhitarist publications.
- **Self-government**: community councils and courts (the Armenians of Lviv had their own court and law code).
- **Charitable unions**: the **AGBU** (Armenian General Benevolent Union) was founded in 1906 in Cairo on the initiative of **Boghos Nubar**.

## The role of the diaspora

The diaspora gave **printing**, **enlightenment ideas** and **financial support** for schools and the liberation movement. At the same time migration weakened the Armenian population in the homeland and created a threat of assimilation.

## Exercises

1. List three causes of migration with examples.
2. In which directions did Armenians migrate in the 11th–14th centuries?
3. When was Nor Nakhichevan founded?
4. How did diaspora communities preserve identity?
5. Name one positive and one negative consequence of the diaspora.

## Answers

1. For example, wars (the Seljuks), forced deportation (the Great Surgun), massacres (1915).
2. Cilicia, Crimea, Poland, Moldova, Romania.
3. In 1779.
4. Through the Church, schools, the press and self-government.
5. Positive: printing and enlightenment; negative: a smaller population in the homeland.`,
      quiz: [
        ["When was the AGBU founded?", ["1863", "1906", "1918", "1946"]],
        ["Who founded the AGBU?", ["Boghos Nubar", "Alexander Mantashev", "Calouste Gulbenkian", "Mikayel Nalbandian"]],
        ["Which city did Armenians resettled from Crimea found in 1779?", ["Nor Nakhichevan", "New Julfa", "Nor Bayazet", "Nor Aresh"]],
        ["Which migration was forced?", ["The Great Surgun", "Moving to India for trade", "Going to Venice to study", "Moving to Tiflis for work"]],
        ["Where did survivors of the genocide go?", ["Syria, Lebanon, France, the USA", "Japan, China", "Australia, New Zealand", "Scandinavia"]],
      ],
    },
    "liberation-ideologies": {
      objectives: ["Compare the liberation programmes of the 17th–19th centuries", "Analyse Shahamirian's constitutional project", "Compare the programmes of the Armenian political parties", "Assess the strategy of relying on outside help"],
      content: `## Stages of development

| Stage | Whom they relied on | Model of state |
|---|---|---|
| late 17th to early 18th century (Israel Ori) | the European Christian powers, then Russia | monarchy |
| second half of the 18th century (the Madras group) | their own forces, Russia | a **republic** with an elected parliament |
| first half of the 19th century | Russia | autonomy within Russia |
| late 19th century (the parties) | self-organisation, European diplomacy | autonomy or independence |

## "Snare of Glory"

**Shahamir Shahamirian**'s project (1773) is one of the oldest constitutional projects. It provided for:

- a **republican** system,
- **equality before the law**,
- an elected **parliament** (the House of Armenia),
- freedoms close to the ideas of the Enlightenment.

It was published 3 years before the US Declaration of Independence.

## Parties

| Party | Main aim | Methods |
|---|---|---|
| **Armenakan** (1885) | liberation of Western Armenia | self-defence, secret groups |
| **Hnchak** (1887) | an independent socialist Armenia | demonstrations, uprising |
| **Dashnaktsutyun** (1890) | political and economic freedom for Western Armenia | the fedayi movement, self-defence |

**Fedayis**: **Aghbyur Serob** and his wife **Sose Mayrik**, **Gevorg Chavush**, **Andranik Ozanian**.

## Analysis

Most liberation programmes depended on the support of **outside** powers. The powers often used the Armenian Question for their own interests but gave no real help (Berlin, 1878). Historians debate whether the parties could have acted differently given such a balance of forces.

## Exercises

1. Which powers did Israel Ori rely on?
2. What was innovative about Shahamirian's project?
3. Compare the aims of the Hnchak and Dashnaktsutyun parties.
4. Who were the fedayis? Name two.
5. Assess the strategy of relying on outside help in 3–4 sentences.

## Answers

1. The European powers, then Russia.
2. It proposed a republic, an elected parliament and equality before the law.
3. The Hnchaks wanted an independent socialist Armenia; Dashnaktsutyun wanted freedom for Western Armenia.
4. Members of armed liberation units. For example, Aghbyur Serob, Andranik.
5. Open answer. For example: the powers made promises but did not keep them (Berlin), so it was also necessary to build up their own forces.`,
      quiz: [
        ["In which year was \"Snare of Glory\" published?", ["1773", "1789", "1828", "1863"]],
        ["Which party sought a socialist Armenia?", ["Armenakan", "Hnchak", "Ramkavar", "Dashnaktsutyun"]],
        ["Who was a fedayi?", ["Gevorg Chavush", "Shahamir Shahamirian", "Khrimian Hayrik", "Hovsep Emin"]],
        ["Which system of government did Shahamirian propose?", ["Absolute monarchy", "A republic", "Theocracy", "An empire"]],
        ["Where was the Armenakan party founded?", ["In Van", "In Geneva", "In Tiflis", "In Madras"]],
      ],
    },
    "western-armenians-zartonk": {
      objectives: ["Explain the essence of the Tanzimat reforms", "Analyse the structure of the National Constitution", "Describe the Western Armenian awakening", "Compare the situation of Armenians in Constantinople and in the provinces"],
      content: `## The Tanzimat

The **Tanzimat** (1839–1876) was a period of Ottoman reforms. The **Gülhane** Edict of **1839** and the **Hatt-i Humayun** of **1856** promised **equality for all subjects** regardless of religion. But in practice little changed in the provinces.

## The National Constitution

In **1860** the Armenian community drafted the **Armenian National Constitution**, and in **1863** the sultan approved it.

| Body | Function |
|---|---|
| **National Assembly** (140 deputies) | elected the patriarch, approved the budget |
| **Religious Assembly** | church affairs |
| **Political Assembly** | schools, hospitals, legal disputes |

Most of the deputies of the assembly were elected from Constantinople, which the provinces considered unfair.

## The awakening (Zartonk)

In the middle of the 19th century **Western Armenian literature** and the **press** flourished in Constantinople and Smyrna. The **Western Armenian literary language** took shape.

- **Mikayel Nalbandian** and **Stepanos Nazariants** fought for ashkharhabar in Russia, while among the Western Armenians the same cause was taken up by **Nahapet Rusinian** and **Grigor Odian**.
- Writers: **Petros Durian**, **Hakob Paronian** (a satirist), **Srbuhi Dussap** (the first Armenian woman novelist).
- Intellectuals: **Grigor Zohrab** (a lawyer and deputy of the Ottoman parliament).

## Constantinople and the provinces

| Constantinople | The provinces (Van, Mush, Erzurum) |
|---|---|
| rich amiras and craftsmen | peasants |
| schools, theatres, newspapers | oppression by Kurdish chiefs, double taxes |
| relatively safe | lawlessness, loss of land |

**Khrimian Hayrik** published the journal **"Artsvi Vaspurakan"** ("Eagle of Vaspurakan") in Van and raised the problems of the provinces.

## Exercises

1. What did the Hatt-i Humayun promise?
2. When was the National Constitution approved?
3. What did the National Assembly do?
4. Name three Western Armenian writers.
5. How did the situation of Armenians in Constantinople differ from that in the provinces?

## Answers

1. Equality for all subjects.
2. In 1863.
3. It elected the patriarch and approved the budget.
4. Petros Durian, Hakob Paronian, Srbuhi Dussap.
5. In the capital Armenians were safer and better educated; in the provinces they suffered oppression and double taxes.`,
      quiz: [
        ["When was the Hatt-i Humayun issued?", ["1839", "1856", "1863", "1876"]],
        ["Who was the first Armenian woman novelist?", ["Srbuhi Dussap", "Zabel Yesayan", "Silva Kaputikyan", "Shushanik Kurghinian"]],
        ["Who published \"Artsvi Vaspurakan\"?", ["Khrimian Hayrik", "Nalbandian", "Paronian", "Odian"]],
        ["How many deputies were in the National Assembly?", ["40", "140", "300", "1,000"]],
        ["Who was a satirist?", ["Hakob Paronian", "Petros Durian", "Grigor Zohrab", "Nahapet Rusinian"]],
      ],
    },
    "eastern-armenians-russian-policy": {
      objectives: ["Analyse the changes in the Russian government's policy towards Armenians", "Explain the 1903 law confiscating church property and its consequences", "Describe the Armenian-Tatar clashes of 1905–1906", "Assess the role of the Armenian bourgeoisie"],
      content: `## A change of policy

| Time | Policy |
|---|---|
| 1828 to the 1870s | Armenians were seen as allies; resettlement was encouraged |
| 1880s (Alexander III) | **Russification**: Armenian schools closed (1885, 1896) |
| 1903 | **confiscation of church property** |
| 1905 | the law was cancelled after mass Armenian resistance |

## 1903

By the law of **12 June 1903** the **property** of the Armenian Church and the funds of its schools were handed to the state. Catholicos **Khrimian Hayrik** refused to carry out the law. Armenians organised demonstrations all over the South Caucasus. There were clashes in Gandzak and other cities. In **1905**, during the Russian Revolution, Nicholas II returned the property.

## Armenian-Tatar clashes

In **1905–1906** bloody clashes between Armenians and Caucasian Tatars (Azerbaijanis) took place in Baku, Nakhichevan, Shushi, Gandzak and elsewhere. Historians note that the tsarist authorities allowed or even encouraged the clashes in order to weaken the revolutionary movement.

## The Armenian bourgeoisie

- **Alexander Mantashev**: an oil industrialist in Baku and a great patron; he funded the Armenian Church of Saint John the Baptist in Paris and the Tiflis Commercial School.
- **Calouste Gulbenkian**: an oil businessman, later the foundation in Lisbon.
- In Tiflis, Armenians made up an important part of the city government and trade.

## Analysis

Russian rule brought **security** and **economic growth**, but the policy of Russification threatened **national identity**. The resistance of 1903 showed how well organised Armenian society was.

## Exercises

1. How did Russian policy change in the 1880s?
2. What did the law of 1903 provide for?
3. Who refused to carry out this law?
4. When was the church property returned?
5. What is Alexander Mantashev known for?

## Answers

1. Russification began, and Armenian schools were closed.
2. The confiscation of church property and school funds.
3. Khrimian Hayrik.
4. In 1905.
5. He was an oil industrialist and a great patron.`,
      quiz: [
        ["When was the law confiscating church property passed?", ["1885", "1896", "1903", "1905"]],
        ["Which catholicos resisted the law of 1903?", ["Khrimian Hayrik", "Nerses Ashtaraketsi", "Gevorg IV", "Vazgen I"]],
        ["Under which tsar did the policy of Russification begin?", ["Alexander III", "Peter I", "Catherine II", "Alexander I"]],
        ["In which city was Mantashev's oil business?", ["Baku", "Yerevan", "Moscow", "Tabriz"]],
        ["When were the Armenian-Tatar clashes?", ["1877–1878", "1905–1906", "1918–1920", "1988"]],
      ],
    },
    "armenian-question-diplomacy": {
      objectives: ["Trace the development of the Armenian Question in 1878–1914", "Analyse the interests of the Great Powers", "Explain the reform programme of 1914", "Assess the results of diplomacy"],
      content: `## Timeline

| Year | Document | Essence |
|---|---|---|
| 1878 | San Stefano, Article 16 | Russian troops were the guarantee of reforms |
| 1878 | Berlin, Article 61 | reforms supervised by the Great Powers, without guarantees |
| 1895 | the **May Programme** (Britain, France, Russia) | reforms in six vilayets; the sultan signed but did not carry it out |
| 8 February 1914 | the **Russo-Turkish Agreement** | Western Armenia was divided into two districts with European **inspectors-general** (Westenenk and Hoff) |

The 1914 programme was never carried out: at the start of the First World War Turkey cancelled it.

## Interests of the Great Powers

| Power | Interest |
|---|---|
| **Russia** | influence in eastern Anatolia, the Straits |
| **Britain** | to stop Russia growing stronger, to keep the Ottoman Empire intact (until the 1890s) |
| **Germany** | economic influence (the Berlin to Baghdad railway), alliance with Turkey |
| **France** | financial interests (Ottoman debts), influence in Cilicia and Syria |

## Analysis

The Armenian Question became a **tool of rivalry** between the Great Powers. Every attempt at reform increased the Ottoman government's **suspicion** that the Armenians threatened the unity of the empire. In the end diplomacy not only failed to protect the Armenians but made them **vulnerable**.

## Exercises

1. Which powers drew up the May Programme of 1895?
2. What did the 1914 agreement provide for?
3. Why did Britain defend the unity of the Ottoman Empire for so long?
4. What interest did Germany have in Turkey?
5. Analyse how diplomacy made the Armenians vulnerable.

## Answers

1. Britain, France, Russia.
2. Two districts of Western Armenia with European inspectors-general.
3. It did not want Russia to grow stronger.
4. Economic influence, the Berlin to Baghdad railway.
5. Attempts at reform increased the government's suspicion, while the powers gave no real protection.`,
      quiz: [
        ["When was the Russo-Turkish agreement on reforms in Western Armenia signed?", ["1878", "1895", "1914", "1920"]],
        ["Which railway was a symbol of Germany's interests?", ["Berlin to Baghdad", "The Trans-Siberian", "Tiflis to Kars", "Paris to Istanbul"]],
        ["Who were the inspectors-general under the 1914 programme?", ["Westenenk and Hoff", "Morgenthau and Lepsius", "Wilson and Nansen", "Paskevich and Lazarev"]],
        ["The programme of which year was called the May Programme?", ["1878", "1895", "1903", "1914"]],
        ["What happened to the 1914 programme?", ["Turkey cancelled it at the start of the war", "It was fully carried out", "It became the Treaty of Sèvres", "It was adopted by the UN"]],
      ],
    },
    "genocide-analysis": {
      objectives: ["Analyse the causes of the genocide", "Present the main kinds of evidence of the genocide", "Explain the legal definition of genocide (the 1948 Convention)", "Assess the questions of recognition and denial"],
      content: `## Causes

| Kind | Content |
|---|---|
| **ideological** | Pan-Turkism: the idea of a uniform Turkish state and the union of the Turkic peoples |
| **political** | the wish to remove the Armenian Question and get rid of interference by the Great Powers |
| **military** | the First World War, when outside control was weak |
| **economic** | seizing the property and land of the Armenians |

## Evidence

1. **Eyewitness accounts**: US Ambassador **Henry Morgenthau**, the German medic **Armin Wegner** (photographs), Danish women missionaries, survivors.
2. **Diplomatic documents**: German and Austrian (Turkey's allies) and American archives. The German **Johannes Lepsius** published a collection of German documents (1919).
3. **Ottoman courts martial** (1919–1920): the court sentenced **Talaat**, **Enver** and **Djemal** to death in absentia.
4. **The joint declaration** (24 May 1915): Britain, France and Russia declared that members of the Turkish government were responsible for "crimes against humanity and civilisation".

## The legal definition

**Raphael Lemkin** created the term "genocide" in 1944. In **1948** the UN adopted the **Convention on the Prevention and Punishment of the Crime of Genocide**. According to the Convention, genocide means acts committed **with intent to destroy, in whole or in part, a national, ethnical, racial or religious group**:

- killing members of the group,
- causing serious bodily or mental harm,
- inflicting conditions of life calculated to bring about its destruction,
- preventing births,
- forcibly transferring children to another group.

The acts committed against the Armenians match all of these points.

## Consequences and recognition

- Survivors of the genocide received **Nansen passports** (on the initiative of Fridtjof Nansen).
- In 1921 in Berlin **Soghomon Tehlirian** killed Talaat; a German court **acquitted** him.
- A policy of **denial** continues in Turkey. Dozens of states and the European Parliament have recognised the genocide, including the USA (Congress in 2019, the president in 2021).

## Exercises

1. What is Pan-Turkism?
2. List three kinds of evidence of the genocide.
3. What did the Ottoman courts martial decide in 1919–1920?
4. In which year was the UN Genocide Convention adopted?
5. What is the main element of the definition of genocide?

## Answers

1. The ideology of a uniform Turkish state and the union of the Turkic peoples.
2. Eyewitness accounts, diplomatic documents, the decisions of the courts martial.
3. They sentenced Talaat, Enver and Djemal to death in absentia.
4. In 1948.
5. The intent to destroy a group in whole or in part.`,
      quiz: [
        ["In which year was the UN Genocide Convention adopted?", ["1915", "1944", "1948", "1965"]],
        ["Who was the US ambassador to the Ottoman Empire in 1915?", ["Henry Morgenthau", "Woodrow Wilson", "Armin Wegner", "Johannes Lepsius"]],
        ["Which three states issued the declaration of 24 May 1915?", ["Britain, France, Russia", "The USA, Germany, Italy", "Germany, Austria, Turkey", "Japan, China, India"]],
        ["How did the trial of Soghomon Tehlirian end?", ["With acquittal", "With a death sentence", "With life imprisonment", "With deportation"]],
        ["Who photographed deported Armenians and published the pictures?", ["Armin Wegner", "Henry Morgenthau", "Fridtjof Nansen", "Raphael Lemkin"]],
      ],
    },
    "caucasus-front-1918": {
      objectives: ["Describe the main events on the Caucasus Front", "Explain the role of the Armenian volunteer units", "Analyse the consequences of the 1917 revolution and the Treaty of Brest-Litovsk for Armenia", "Assess the importance of the heroic battles of May 1918 and the Treaty of Batum"],
      content: `## The Caucasus Front

In November 1914 the Ottoman Empire went to war against Russia. In December 1914 to January 1915, at **Sarikamish**, the Russian army crushed Enver's forces. Enver then blamed the Armenians for the defeat, which became one of the pretexts for the genocide.

In **1916** the Russian army took **Erzurum**, **Trebizond** and **Erzincan**. Most of Western Armenia came under Russian control, but the Armenian population had already been destroyed or deported.

## Volunteer units

**Armenian volunteer units** fought in the Russian army, commanded by **Andranik**, **Dro**, **Hamazasp**, **Keri** and **Vardan**. The units took part in the liberation of Van (1915).

## 1917–1918

- In **1917** the monarchy in Russia was overthrown, and in October the **Bolsheviks** came to power. The Russian army left the front.
- The **Transcaucasian Seim** was created in the South Caucasus.
- On **3 March 1918**, under the Treaty of **Brest-Litovsk**, Bolshevik Russia gave **Kars**, **Ardahan** and **Batum** to Turkey.
- The Turkish army went on the offensive and took Kars (April) and Alexandropol (15 May).
- The Transcaucasian Democratic Federative Republic, proclaimed in April, broke up on 26 May when Georgia declared independence.

## The heroic battles of May

| Battle | Commander |
|---|---|
| **Sardarapat** (21–29 May) | **Movses Silikian**, **Daniel Bek-Pirumian** |
| **Bash-Aparan** (23–29 May) | **Dro** |
| **Karakilisa** (25–28 May) | **Tovmas Nazarbekian** |

Armenian volunteers, soldiers, peasants and clergy stopped the Turkish army. On **28 May** the Armenian National Council declared independence.

## The Treaty of Batum

On **4 June 1918** the **Treaty of Batum** was signed with Turkey. Armenia was left with only about **12,000 km²** of territory, with Yerevan and Sevan. It was a harsh treaty, but it gave a chance to survive. In October 1918, after the Armistice of Mudros, Turkey withdrew its troops, and Armenia's territory grew.

## Exercises

1. What happened at Sarikamish in 1914–1915?
2. Name three commanders of the volunteer units.
3. What did Russia give up under the Treaty of Brest-Litovsk?
4. Who was the commander at Karakilisa?
5. Why was the Treaty of Batum harsh?

## Answers

1. The Russian army crushed Enver's forces.
2. Andranik, Dro, Hamazasp (and also Keri, Vardan).
3. Kars, Ardahan, Batum.
4. Tovmas Nazarbekian.
5. Armenia was left with only about 12,000 km² of territory.`,
      quiz: [
        ["When was the Treaty of Batum signed?", ["3 March 1918", "4 June 1918", "10 August 1920", "16 March 1921"]],
        ["Under which treaty did Russia give Kars to Turkey in 1918?", ["Brest-Litovsk", "Sèvres", "Turkmenchay", "Mudros"]],
        ["Who was one of the commanders at the Battle of Sardarapat?", ["Movses Silikian", "Dro", "Andranik", "Nzhdeh"]],
        ["Which city did the Russian army take in 1916?", ["Erzurum", "Ankara", "Izmir", "Adana"]],
        ["About how much territory was Armenia left with under the Treaty of Batum?", ["12,000 km²", "30,000 km²", "60,000 km²", "400,000 km²"]],
      ],
    },
  },
};
