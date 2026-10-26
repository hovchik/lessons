import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Eastern Armenia in Russia, education and culture, the Armenian Question, parties, the Armenian Genocide.",
    "The First Republic, Soviet Armenia, culture, independence restored.",
  ],
  lessons: {
    "eastern-armenia-19th-century": {
      objectives: ["Describe the administrative division of Eastern Armenia in the Russian Empire", "Name Armenian centres of education", "Explain why Tiflis became a centre of Armenian culture", "Tell about Khachatur Abovyan and Mikayel Nalbandian"],
      content: `## Administrative division

In 1840 the Armenian Oblast was abolished. In **1849** the **Erivan Governorate** was created. Areas with an Armenian population were also part of the **Tiflis** and **Elizavetpol** (Ganja) governorates. From 1878 the **Kars** Oblast also passed to Russia.

With the **"Regulation"** of 1836 the Russian government recognised the rights of the Armenian Apostolic Church, but also controlled it.

## Centres of education

| Institution | Place, year |
|---|---|
| **Lazarev Institute** | Moscow, 1815 |
| **Nersisian School** | Tiflis, 1824 |
| **Gevorgian Seminary** | Etchmiadzin, 1874 |

In the 19th century Tiflis became an important centre of Armenian **culture**, **press** and **theatre**: a large Armenian community lived in the city, Armenians made up a large share of its population, and Armenian newspapers were published there (for example, "Mshak", 1872).

## Figures

- **Khachatur Abovyan** (1809–1848): founder of modern Armenian literature. His novel "Wounds of Armenia" is written in **ashkharhabar**, the spoken language of the people, not in grabar (Classical Armenian).
- **Mikayel Nalbandian** (1829–1866): writer and journalist, author of the poem "Our Fatherland", which became the anthem of the Republic of Armenia.
- **Stepanos Nazariants**: editor of the journal "Hyusisapayl" ("Northern Lights", Moscow).

## Economy

At the end of the 19th century the production of **brandy**, **wine** and **copper** (Alaverdi, Kapan) developed. In 1899 the railway reached Alexandropol (Gyumri), and in 1902 Yerevan. Armenian businessmen played a large role in the **Baku oil industry** (Mantashev).

## Exercises

1. When was the Erivan Governorate created?
2. List three Armenian centres of education.
3. Why is the novel "Wounds of Armenia" important for Armenian literature?
4. Which poem became the anthem of the Republic of Armenia, and who wrote it?
5. When did the railway reach Yerevan?

## Answers

1. In 1849.
2. The Lazarev Institute, the Nersisian School, the Gevorgian Seminary.
3. It is written in ashkharhabar, the language of the people.
4. "Our Fatherland", by Mikayel Nalbandian.
5. In 1902.`,
      quiz: [
        ["In which city was the Nersisian School?", ["Yerevan", "Tiflis", "Moscow", "Etchmiadzin"]],
        ["Who wrote the novel \"Wounds of Armenia\"?", ["Raffi", "Khachatur Abovyan", "Nalbandian", "Tumanyan"]],
        ["What is ashkharhabar?", ["An ancient literary language", "A literary language based on the spoken language of the people", "A church chant", "A dialect"]],
        ["When did the Gevorgian Seminary open?", ["1815", "1824", "1874", "1899"]],
        ["In which year was the Erivan Governorate created?", ["1828", "1840", "1849", "1878"]],
      ],
    },
    "armenian-question": {
      objectives: ["Explain what the Armenian Question was", "Compare Article 16 of the Treaty of San Stefano with Article 61 of the Treaty of Berlin", "Name the Armenian national parties", "Tell about the massacres of 1894–1896"],
      content: `## The situation of the Western Armenians

In the Ottoman Empire, Armenians suffered from heavy taxes, legal inequality and attacks by Kurdish tribes. In **1863** the government approved the **National Constitution**, which regulated the internal life of the Armenian community but did not protect Armenians from violence.

The **Armenian Question** is the question of reforms in Western Armenia and of the safety of Armenians, which became a problem of international diplomacy.

## The war of 1877–1878

In the Russo-Turkish War the Russian army, in which the Armenian generals **Mikhail Loris-Melikov**, **Arshak Ter-Gukasov** and **Ivan Lazarev** fought, took **Kars**.

| Treaty | Year | What it said |
|---|---|---|
| **San Stefano**, Article **16** | March 1878 | Russian troops stay in Armenia until Turkey carries out reforms |
| **Berlin**, Article **61** | July 1878 | Turkey promises reforms, supervised by the Great Powers, but without troops |

At the Congress of Berlin the Armenian delegation was led by **Mkrtich Khrimian** (Khrimian Hayrik). On his return he told the parable of the **"iron ladle"**: other peoples took their share with an iron ladle, but the Armenians had only a paper one.

## Parties

| Party | Year, place |
|---|---|
| **Armenakan** | 1885, Van |
| **Hnchak** | 1887, Geneva |
| **Armenian Revolutionary Federation** (Dashnaktsutyun) | 1890, Tiflis |

## The Hamidian massacres

Instead of reforms, Sultan **Abdul Hamid II** organised massacres in **1894–1896**, which killed about **300,000** Armenians. There was self-defence in **Sasun** (1894) and **Zeytun** (1895–1896). In 1896 Armenian fedayis seized the **Ottoman Bank** in Constantinople to draw the attention of Europe.

## Exercises

1. What is the Armenian Question?
2. Why was Article 16 of the Treaty of San Stefano better for the Armenians than Article 61 of the Treaty of Berlin?
3. What does Khrimian Hayrik's "iron ladle" mean?
4. When and where was the Armenian Revolutionary Federation founded?
5. Who organised the massacres of 1894–1896?

## Answers

1. The international question of reforms in Western Armenia and the safety of Armenians.
2. It provided that Russian troops would stay in Armenia until the reforms were carried out.
3. Rights must be defended by force; they are not given in answer to requests.
4. In 1890, in Tiflis.
5. Sultan Abdul Hamid II.`,
      quiz: [
        ["Which article of the Treaty of Berlin concerned the Armenians?", ["16", "61", "10", "28"]],
        ["Who led the Armenian delegation in Berlin?", ["Khrimian Hayrik", "Nalbandian", "Loris-Melikov", "Raffi"]],
        ["Which party was founded in 1887 in Geneva?", ["Armenakan", "Hnchak", "Dashnaktsutyun", "Ramkavar"]],
        ["When were the Hamidian massacres?", ["1877–1878", "1894–1896", "1909", "1915–1923"]],
        ["Which fortress did the Russian army take in 1877?", ["Kars", "Van", "Erzurum", "Adana"]],
      ],
    },
    "armenian-genocide": {
      objectives: ["Give the time and the organisers of the Armenian Genocide", "Describe the stages of the genocide", "Name the centres of self-defence", "Explain the importance of recognising and remembering the genocide"],
      content: `## Background

In 1908 the **Committee of Union and Progress** (the Young Turks) came to power in the Ottoman Empire. Many Armenians at first hoped for reforms, but in **1909** about 20,000–30,000 Armenians were killed in **Adana**. The Young Turk leaders **Talaat**, **Enver** and **Djemal** sought to create a uniform Turkish state.

## The genocide

During the First World War the Young Turk government carried out the **genocide** of the Armenians.

- At the beginning of 1915 Armenian soldiers serving in the army were disarmed and killed.
- On **24 April 1915** hundreds of Armenian intellectuals, writers and deputies were arrested in Constantinople (Grigor Zohrab, Daniel Varoujan, Siamanto, Ruben Sevak); most of them were killed. **Komitas** survived, but suffered severe mental trauma.
- The Armenians of Western Armenia and Anatolia were **deported** to the deserts of Syria (**Deir ez-Zor**). They were killed on the way, and many died of hunger and disease.

About **1.5 million** Armenians died. Thousands of children were orphaned, and churches and monasteries were destroyed. The Armenian people lost most of their historic homeland.

## Self-defence

| Place | What happened |
|---|---|
| **Van** | after a month of defence (April–May 1915) the city was freed as the Russian army and Armenian volunteers approached |
| **Musa Dagh** | about 50 days of defence; French ships rescued about 4,000 people |
| **Shabin-Karahisar**, **Urfa** | heroic defence, but defeat |

## Recognition and memory

- The term "genocide" was created by the lawyer **Raphael Lemkin**, who had in mind, among others, the fate of the Armenians.
- On **24 April 1965** a large demonstration took place in Yerevan, after which the **Tsitsernakaberd** memorial complex was built (1967).
- Dozens of states and international organisations have recognised the genocide.
- Every year on **24 April** Armenians all over the world honour the memory of the victims.

## Exercises

1. Who were the leaders of the Young Turk government?
2. What happened on 24 April 1915?
3. Where were the Armenians deported to?
4. How did the defence of Musa Dagh end?
5. When was the Tsitsernakaberd memorial complex built?

## Answers

1. Talaat, Enver, Djemal.
2. Armenian intellectuals were arrested in Constantinople.
3. To the deserts of Syria, to Deir ez-Zor.
4. French ships rescued about 4,000 people.
5. In 1967.`,
      quiz: [
        ["When is the day of remembrance for the victims of the Armenian Genocide?", ["28 May", "24 April", "21 September", "7 December"]],
        ["About how many Armenians died in the genocide?", ["150,000", "500,000", "1.5 million", "5 million"]],
        ["Who created the term \"genocide\"?", ["Raphael Lemkin", "Fridtjof Nansen", "Woodrow Wilson", "Henry Morgenthau"]],
        ["Where did French ships rescue about 4,000 Armenians?", ["At Van", "At Musa Dagh", "At Urfa", "At Sasun"]],
        ["To which desert were the Armenians deported?", ["Deir ez-Zor", "The Sahara", "The Gobi", "The Karakum"]],
      ],
    },
    "first-republic": {
      objectives: ["Give the dates of the creation and fall of the First Republic", "Name the leaders of the Republic", "Explain the content of the treaties of Sèvres and Alexandropol", "Describe the results of the Treaty of Kars of 1921"],
      content: `## Creation

In May 1918 the Turkish army invaded Eastern Armenia. In heroic battles at **Sardarapat**, **Bash-Aparan** and **Karakilisa** the Armenians stopped the enemy. On **28 May 1918** the **Republic of Armenia** was proclaimed, with its capital in **Yerevan**.

## Leaders and problems

- **Aram Manukian**: leader of the self-defence of Yerevan, minister of the interior, considered the founder of the Republic.
- **Hovhannes Kajaznuni**: the first prime minister.
- Later prime ministers: **Alexander Khatisian**, **Hamazasp Ohanjanian**, **Simon Vratsian**.

The country faced huge problems of **famine**, **epidemics** and **refugees**. Despite this, **Yerevan State University** opened in 1919, and an army, schools and a parliament were created. Women got the right to vote.

## Sèvres and Alexandropol

| Treaty | Year | Content |
|---|---|---|
| **Sèvres** | 10 August 1920 | Turkey recognised Armenia; the border in Western Armenia was to be set by US President **Woodrow Wilson** |
| **Alexandropol** | 2 December 1920 | after the Turkish-Armenian war, Armenia lost Kars and other territories |

The Treaty of Sèvres was never carried out. In autumn 1920 the Turkish army under **Kazim Karabekir** attacked Armenia.

## Sovietisation

On **2 December 1920**, with the help of the Red Army, **Soviet power** was established in Armenia. In February 1921 there was an uprising, and **Garegin Nzhdeh** proclaimed **Mountainous Armenia** in **Syunik**, which kept Zangezur within Armenia.

Under the **Treaty of Kars** of 1921, Kars and Ardahan remained with Turkey, and Nakhichevan became an autonomous region within Azerbaijan. In the same year the Caucasian Bureau left Nagorno-Karabakh within Azerbaijan.

## Exercises

1. When was the First Republic of Armenia proclaimed?
2. Who was the first prime minister?
3. Who was to set the Armenian-Turkish border under the Treaty of Sèvres?
4. Who proclaimed Mountainous Armenia?
5. What was decided by the Treaty of Kars?

## Answers

1. On 28 May 1918.
2. Hovhannes Kajaznuni.
3. US President Woodrow Wilson.
4. Garegin Nzhdeh.
5. Kars and Ardahan remained with Turkey, and Nakhichevan within Azerbaijan.`,
      quiz: [
        ["Who is considered the founder of the First Republic?", ["Aram Manukian", "Stepan Shahumyan", "Alexander Miasnikian", "Levon Ter-Petrosyan"]],
        ["When did Yerevan State University open?", ["1918", "1919", "1921", "1945"]],
        ["When was the Treaty of Sèvres concluded?", ["1918", "1920", "1921", "1923"]],
        ["Which region was the centre of Mountainous Armenia?", ["Syunik", "Shirak", "Lori", "Artsakh"]],
        ["Under which treaty did Kars remain with Turkey in 1921?", ["Sèvres", "Kars", "Berlin", "Turkmenchay"]],
      ],
    },
    "soviet-armenia": {
      objectives: ["Describe the development of Soviet Armenia", "Explain the consequences of the repressions of the 1930s", "Assess the part Armenians played in the Second World War", "Tell about the post-war repatriation and the events of 1965"],
      content: `## Soviet Armenia

In 1922 Armenia, together with Georgia and Azerbaijan, joined the **Transcaucasian Federation** (TSFSR), and through it the **USSR**. From 1936 the **Armenian SSR** was a separate republic of the USSR.

## Industrialisation and construction

- Factories, the **Dzoraget hydropower station** and the **Sevan-Hrazdan** cascade were built.
- The architect **Alexander Tamanian** drew up the **master plan** of Yerevan (1924). Government House and the Opera House were built.
- Illiteracy was wiped out, and universities were opened.
- In **1943** the **Academy of Sciences** was founded. The astrophysicist **Viktor Ambartsumian** founded the **Byurakan Observatory** in 1946.

## Repressions

In the 1920s–1930s **collectivisation** was carried out: peasants were forced to join collective farms. In **1937–1938** thousands of people became victims of Stalin's **repressions**, including the poet **Yeghishe Charents** and the writer **Aksel Bakunts**.

## The Great Patriotic War (1941–1945)

**More than 500,000** Armenians took part in the war, and about half of them did not return.

- **Marshal Hovhannes Bagramyan**, Admiral **Ivan Isakov**, Marshal **Hamazasp Babadzhanian**.
- **Nelson Stepanyan**: a pilot, twice Hero of the Soviet Union.
- The Armenian **89th Tamanyan Division** reached **Berlin**.

## Repatriation and 1965

In 1946–1949 about **100,000** diaspora Armenians repatriated to Soviet Armenia.

On **24 April 1965**, the 50th anniversary of the genocide, hundreds of thousands of people demonstrated in Yerevan. After this the Tsitsernakaberd memorial complex was built.

## Exercises

1. When did Armenia become a separate republic of the USSR?
2. Who drew up the master plan of Yerevan?
3. Which writers died in the repressions of 1937?
4. Which Armenian division reached Berlin?
5. What happened on 24 April 1965?

## Answers

1. In 1936.
2. Alexander Tamanian.
3. Yeghishe Charents, Aksel Bakunts.
4. The 89th Tamanyan Division.
5. A large demonstration in Yerevan on the 50th anniversary of the genocide.`,
      quiz: [
        ["Who founded the Byurakan Observatory?", ["Viktor Ambartsumian", "Alexander Tamanian", "Artem Mikoyan", "Sergey Mergelyan"]],
        ["Who was a pilot and twice Hero of the Soviet Union?", ["Nelson Stepanyan", "Hovhannes Bagramyan", "Hamazasp Babadzhanian", "Ivan Isakov"]],
        ["When was the Armenian Academy of Sciences founded?", ["1924", "1936", "1943", "1965"]],
        ["How many diaspora Armenians repatriated in 1946–1949?", ["About 10,000", "About 100,000", "About 1 million", "About 500,000"]],
        ["Which poet died in 1937?", ["Charents", "Tumanyan", "Isahakyan", "Sevak"]],
      ],
    },
    "culture-19-20-centuries": {
      objectives: ["Name Armenian writers of the 19th–20th centuries", "Tell about the contribution of Komitas", "Name Armenian artists and composers", "Name the achievements of Armenian scientists"],
      content: `## Literature

| Writer | Famous works |
|---|---|
| **Raffi** | "Samvel", "The Fool", "Davit Bek" |
| **Hovhannes Tumanyan** | "Anoush", "Gikor", "The Capture of Tmkaberd", fairy tales |
| **Avetik Isahakyan** | "Abu Lala Mahari", poems |
| **Yeghishe Charents** | "I Love the Sun-Sweet Name of My Armenia...", "Land of Nairi" |
| **Paruyr Sevak** | "The Unsilenced Belfry" (about Komitas) |
| **Hovhannes Shiraz** | "The Armenian Danteiad" |
| **Grigor Zohrab**, **Daniel Varoujan**, **Siamanto** | Western Armenian literature; killed in 1915 |

## Music

- **Komitas** (1869–1935): collected and arranged thousands of folk songs and created the Armenian national school of composition. "Krunk" ("The Crane"), "Ali Luk", "The Ploughman's Song".
- **Alexander Spendiaryan**: the opera "Almast". The Yerevan Opera and Ballet Theatre bears his name.
- **Aram Khachaturian**: the ballets "Gayane" and "Spartacus", the "Sabre Dance".
- **Arno Babajanyan**, **Alan Hovhaness**.

## Visual art

- **Ivan Aivazovsky**: a marine painter, "The Ninth Wave".
- **Martiros Saryan**: colourful landscapes of Armenian nature.
- **Yervand Kochar**: the statue "David of Sasun" (1959).
- **Arshile Gorky**: one of the forerunners of American Abstract Expressionism.

## Science

- **Viktor Ambartsumian**: astrophysics.
- **Artem Mikoyan**: co-designer of the MiG aircraft.
- **Sergey Mergelyan**: the first Armenian computers (Yerevan Research Institute of Mathematical Machines).
- **Hovhannes Adamian**: one of the pioneers of colour television.

## Exercises

1. Who wrote the poem "Anoush"?
2. Why is the work of Komitas important?
3. Which ballets did Aram Khachaturian write?
4. Who painted "The Ninth Wave"?
5. Who created the statue "David of Sasun"?

## Answers

1. Hovhannes Tumanyan.
2. He preserved folk songs and created a national school of composition.
3. "Gayane" and "Spartacus".
4. Ivan Aivazovsky.
5. Yervand Kochar.`,
      quiz: [
        ["Who wrote the novel \"Samvel\"?", ["Raffi", "Tumanyan", "Abovyan", "Charents"]],
        ["Who arranged the song \"Krunk\"?", ["Komitas", "Khachaturian", "Spendiaryan", "Babajanyan"]],
        ["Which artist was a marine painter?", ["Saryan", "Aivazovsky", "Gorky", "Kochar"]],
        ["Which scientist is linked with the MiG aircraft?", ["Artem Mikoyan", "Viktor Ambartsumian", "Sergey Mergelyan", "Hovhannes Adamian"]],
        ["Who is Paruyr Sevak's poem \"The Unsilenced Belfry\" about?", ["Komitas", "Tumanyan", "Mashtots", "Narekatsi"]],
      ],
    },
    "independence-1991": {
      objectives: ["Tell about the Karabakh movement of 1988", "Describe the Spitak earthquake and its consequences", "Give the dates of the declaration of independence and the referendum", "Describe the course and outcome of the First Artsakh War"],
      content: `## The Karabakh movement

In **February 1988** the council of the Nagorno-Karabakh Autonomous Oblast decided to leave Azerbaijan and join Armenia. Rallies of hundreds of thousands of people began in Yerevan. In the same month pogroms of Armenians were organised in **Sumgait**. The movement was led by the **"Karabakh" Committee**.

## The Spitak earthquake

On **7 December 1988** a destructive earthquake wiped out **Spitak** and caused great damage to **Leninakan** (Gyumri) and **Kirovakan** (Vanadzor). **More than 25,000** people died, and hundreds of thousands were left homeless. Dozens of countries sent help.

## Independence

| Date | Event |
|---|---|
| 23 August 1990 | the Supreme Council adopted the **Declaration of Independence** |
| 21 September 1991 | **referendum**: 99% of those taking part voted for independence |
| 16 October 1991 | **Levon Ter-Petrosyan** was elected the first president |
| December 1991 | the collapse of the USSR |
| 2 March 1992 | Armenia became a member of the **UN** |

## The First Artsakh War

In 1991 Nagorno-Karabakh declared independence, and war with Azerbaijan began. In May 1992 **Shushi** was freed and the **Lachin** corridor opened, linking Artsakh with Armenia. In **May 1994** a **ceasefire** agreement was concluded. Talks on settling the conflict were led by the OSCE **Minsk Group**.

The years of war and blockade were very hard: there was no electricity, heating or fuel. Many people emigrated.

## The present day

In 1995 the **Constitution** of Armenia was adopted. In autumn 2020 a new war began, after which Azerbaijan took control of most of Artsakh, and in 2023 the Armenian population of Artsakh moved to Armenia. These events are studied in more detail in high school.

## Exercises

1. When did the Karabakh movement begin?
2. Which cities were destroyed by the earthquake of 1988?
3. When was the Declaration of Independence adopted?
4. Who was the first president of the Republic of Armenia?
5. When was the ceasefire agreement concluded?

## Answers

1. In February 1988.
2. Spitak, Leninakan (Gyumri), Kirovakan (Vanadzor).
3. On 23 August 1990.
4. Levon Ter-Petrosyan.
5. In May 1994.`,
      quiz: [
        ["When did the Spitak earthquake happen?", ["7 December 1988", "21 September 1991", "23 August 1990", "12 May 1994"]],
        ["When was the independence referendum held?", ["1988", "1990", "1991", "1995"]],
        ["Who was the first president of Armenia?", ["Robert Kocharyan", "Levon Ter-Petrosyan", "Serzh Sargsyan", "Vazgen Sargsyan"]],
        ["When did Armenia become a member of the UN?", ["1991", "1992", "1995", "2001"]],
        ["Which city was freed in May 1992?", ["Shushi", "Gyumri", "Vanadzor", "Kapan"]],
      ],
    },
  },
};
