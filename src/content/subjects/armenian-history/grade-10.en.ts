import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Theories of the formation of the Armenian people, institutions of statehood, the nakharar system, Armenia between empires.",
    "The role of the Church, social movements, the medieval economy, working with sources.",
  ],
  lessons: {
    "ethnogenesis": {
      objectives: ["Present the main theories of the origin of the Armenian people", "Explain the place of Armenian in the Indo-European family", "Tell apart the kinds of sources used in studying ethnogenesis", "Build a reasoned position"],
      content: `## What ethnogenesis is

**Ethnogenesis** is the process by which a people forms. It lasts for centuries and includes the formation of a language, a culture and a shared identity. Ethnogenesis is studied by **historians**, **linguists**, **archaeologists**, **anthropologists** and, in recent decades, **geneticists** as well.

## Armenian is an Indo-European language

The **Armenian language** is a **separate branch** of the Indo-European language family. It shares features with **Greek**, the **Indo-Iranian** languages and **Phrygian**. Examples:

| Armenian | Greek | Latin | Sanskrit |
|---|---|---|---|
| մայր (mayr) | μήτηρ (mētēr) | mater | mātṛ |
| հայր (hayr) | πατήρ (patēr) | pater | pitṛ |
| երեք (yerek) | τρεῖς (treis) | tres | trayas |
| դուռ (durr) | θύρα (thyra) | foris | dvār |

## Theories

| Theory | Main claim | Arguments |
|---|---|---|
| **Migration** (going back to Herodotus) | the proto-Armenians came from the Balkans together with the Phrygians around the 12th century BC | evidence of ancient Greek authors, the similarity of Armenian and Phrygian |
| **Autochthonous** (native) | the Armenians formed on the Armenian Highland from local tribes (Hayasa, Arme-Shupria) | Hittite and Assyrian sources, place names, archaeological continuity |
| The hypothesis of an **Indo-European homeland** on the Armenian Highland | according to T. Gamkrelidze and V. Ivanov (1984), the homeland of the Indo-Europeans was in Western Asia | linguistic reconstructions |

Today many scholars believe that the Armenian people formed on the **Armenian Highland** over a long period through the **merging** of Indo-European and local tribes. By the 6th century BC the Armenians are already mentioned as a distinct people (Behistun).

## Self-name

Armenians call themselves **hay** and their country **Hayk** (Hayq), while foreigners call it **Armenia**. The name "Armen" is probably linked with the land of **Arme** (Urme) or with the legend of **Aramenak**.

## Exercises

1. What is ethnogenesis?
2. Which sciences study ethnogenesis?
3. Which languages does Armenian share features with?
4. What is the main difference between the migration and autochthonous theories?
5. Write 3–4 sentences, supporting your position with two arguments.

## Answers

1. The process by which a people forms.
2. History, linguistics, archaeology, anthropology, genetics.
3. Greek, the Indo-Iranian languages, Phrygian.
4. The migration theory brings the proto-Armenians from outside; the autochthonous theory sees them as native inhabitants.
5. Open answer. What is assessed is the use of arguments (for example, Hittite sources, language similarities).`,
      quiz: [
        ["Which language family does Armenian belong to?", ["Semitic", "Indo-European", "Turkic", "Caucasian"]],
        ["Which ancient author does the migration theory go back to?", ["Herodotus", "Khorenatsi", "Agathangelos", "Yeghishe"]],
        ["Which Armenian word corresponds to Latin pater?", ["մայր (mayr)", "հայր (hayr)", "եղբայր (yeghbayr)", "դուռ (durr)"]],
        ["Who put forward the hypothesis of a Western Asian homeland of the Indo-Europeans?", ["Gamkrelidze and Ivanov", "Herodotus and Strabo", "Acharian and Abeghian", "Lemkin and Nansen"]],
        ["In which source is Armenia first mentioned as a separate country in the 6th century BC?", ["The Behistun inscription", "The Bible", "\"Narek\"", "\"Anabasis\""]],
      ],
    },
    "institutions-of-statehood": {
      objectives: ["Describe the nature of royal power", "Name the highest offices of state", "Compare the state structure of the Artashesids and the Arshakids", "Analyse the strengths and weaknesses of statehood"],
      content: `## Royal power

In Ancient Armenia power was a **hereditary monarchy**. The king was seen as chosen by the gods, and under the Arshakids also as the protector of the Christian Church. The king led the army and the courts, collected taxes and conducted foreign policy.

## The highest offices

Under the Arshakids state offices were **hereditary** and belonged to particular families:

| Office | Function | Family |
|---|---|---|
| **Tagadir aspet** | crowns the king | the Bagratids |
| **Sparapet** | commander-in-chief of the army | the Mamikonians |
| **Hazarapet** | economy and taxes | the Gnunis |
| **Mardpet** | manager of the royal palace and treasury | eunuchs |
| **Chief judge** | justice | the Catholicos of All Armenians (after the adoption of Christianity) |

## Comparison

| Criterion | Artashesids (189 BC to the 1st century AD) | Arshakids (66–428) |
|---|---|---|
| central power | strong; the king held power in his own hands | weakened as the nakharars grew stronger |
| outside powers | independent policy, an empire under Tigran | rivalry of Rome and Parthia (Persia), the Treaty of Rhandeia |
| culture | Hellenistic influence | Christianity, creation of the alphabet |

## Analysis

**Strengths**: natural mountain defences, a well-developed warrior class, religious and linguistic unity.

**Weaknesses**: the nakharars' desire for independence, and a position between two empires that forced constant manoeuvring. The partition of 387 and the fall of 428 showed that conflicts between the nakharars and the king weakened the state.

## Exercises

1. How was power passed on in Ancient Armenia?
2. Which family held the office of sparapet?
3. Who was the tagadir aspet?
4. Compare central power under the Artashesids and the Arshakids.
5. Why were conflicts between the nakharars and the king dangerous?

## Answers

1. By inheritance.
2. The Mamikonians.
3. A member of the Bagratid family who crowned the king.
4. Under the Artashesids it was strong; under the Arshakids it weakened.
5. They weakened the state, and outside powers took advantage of this.`,
      quiz: [
        ["Who was commander-in-chief of the army?", ["Hazarapet", "Sparapet", "Mardpet", "Aspet"]],
        ["Which family crowned the king?", ["The Mamikonians", "The Bagratids", "The Gnunis", "The Artsrunis"]],
        ["Who was responsible for the economy and taxes?", ["Hazarapet", "Sparapet", "Tagadir", "Chief judge"]],
        ["Under which dynasty was Hellenistic influence strong?", ["The Artashesids", "The Bagratids", "The Rubenids", "The Zakarids"]],
        ["What is one reason for the weakness of the Arshakid kingdom?", ["The nakharars' desire for independence", "Naval wars", "Lack of a written language", "Nomadic life"]],
      ],
    },
    "nakharar-system": {
      objectives: ["Explain what a nakharardom was", "Name the major nakharar families", "Describe the Gahnamak and the Zoranamak", "Assess the role of the nakharar system in preserving statehood"],
      content: `## The nakharardom

The **nakharars** were hereditary great landowners who ruled in their own **gavars** (districts). They had their own **armies**, **fortresses** and **churches**, and collected taxes. A nakharar's domain was called a **nakharardom**, and in inheritance a large role was played by the **tanuter**, the head of the family.

## Major families

| Family | Domain |
|---|---|
| **Mamikonians** | Taron, Tayk |
| **Bagratids** | Sper, later Shirak |
| **Artsrunis** | Vaspurakan |
| **Syunis** | Syunik |
| **Rshtunis** | Rshtunik (south of Lake Van) |
| **Kamsarakans** | Arsharunik, Shirak |

## The Gahnamak and the Zoranamak

- The **Gahnamak** set the **place** (seat) of the nakharars at court. The higher the seat, the more honoured the family.
- The **Zoranamak** showed how many **soldiers** each nakharar had to provide to the king. The whole Armenian army could reach about **120,000**.

## Nakharars without a kingdom

After 428, when there was no kingdom, the nakharars kept **internal self-rule**. They led the Vartanants and Vahanants Wars and made treaties with Persia (Nvarsak). During Arab rule the **Bagratids** rose from among the nakharars and restored the kingdom in 885.

## Assessment

| Positive | Negative |
|---|---|
| kept the army, culture and Church alive | internal struggles weakened the country |
| ensured self-rule without a kingdom | some nakharars went over to the enemy |

## Exercises

1. Who were the nakharars?
2. What did the Gahnamak set?
3. What did the Zoranamak show?
4. Which family held Vaspurakan?
5. Give one positive and one negative side of the nakharar system.

## Answers

1. Hereditary great landowners with their own armies and domains.
2. The place (rank) of the nakharars at court.
3. How many soldiers each nakharar had to provide.
4. The Artsrunis.
5. Positive: they kept self-rule without a kingdom; negative: internal struggles.`,
      quiz: [
        ["What is the Zoranamak?", ["A list of troop numbers", "A collection of laws", "A biography of a king", "A church canon"]],
        ["Which family held Taron?", ["The Mamikonians", "The Syunis", "The Rshtunis", "The Artsrunis"]],
        ["What was the head of a family called?", ["Tanuter", "Sparapet", "Marzpan", "Ostikan"]],
        ["Which nakharar family restored the kingdom in 885?", ["The Bagratids", "The Mamikonians", "The Artsrunis", "The Kamsarakans"]],
        ["What did the Gahnamak set?", ["The place of the nakharars at court", "The amount of taxes", "Borders", "Church feasts"]],
      ],
    },
    "between-empires": {
      objectives: ["Explain what was special about Armenia's geopolitical position", "Compare the rival empires of different eras", "Analyse the manoeuvring strategies of Armenian politicians", "Assess the consequences of a buffer position"],
      content: `## Geopolitical position

Armenia lay on the border between the great powers of the **West** and the **East**. This made it an important **strategic** territory, with mountain defences and trade routes.

## Rival empires

| Era | West | East | Armenia's position |
|---|---|---|---|
| 1st century BC to 3rd century AD | Rome | Parthia | Tigran II, Rhandeia (63) |
| 3rd–7th centuries | Rome/Byzantium | Sasanian Persia | partitions of 387 and 591 |
| 7th–9th centuries | Byzantium | the Arab Caliphate | self-rule, revolts |
| 10th–11th centuries | Byzantium | the caliphate, then the Seljuks | the Bagratid kingdom |
| 16th–18th centuries | the Ottoman Empire | Safavid Persia | partitions of 1555 and 1639 |

## Strategies

1. **Balance**: ask one power for help against the other (Artavazd II; Ashot I received a crown from both the caliph and Byzantium).
2. **Compromise**: accept supreme rule but keep internal self-rule (Rhandeia, Teodoros Rshtuni's treaty with the Arabs).
3. **Armed resistance**: when identity was under threat (Avarayr).
4. **Religious and cultural self-defence**: a Church and a script of their own, which set the Armenians apart from both empires.

## Consequences

- Frequent **wars** and devastation.
- **Partitions** of the country and movements of population.
- At the same time, **cultural exchange**: Hellenistic, Iranian and Byzantine influences, which the Armenians reshaped in their own way.

## Exercises

1. Why was Armenia important to the empires?
2. Which empires were rivals in the 3rd–7th centuries?
3. Give an example of the "balance" strategy.
4. Why were their own Church and script a means of self-defence?
5. List two negative consequences and one positive consequence of a buffer position.

## Answers

1. Its strategic position, mountain defences and trade routes.
2. Byzantium and Sasanian Persia.
3. Ashot I received a crown from both the caliph and Byzantium.
4. They set the Armenians apart from the empires and kept them from being assimilated.
5. Negative: wars, partitions; positive: cultural exchange.`,
      quiz: [
        ["Which empires were rivals for Armenia in the 16th–18th centuries?", ["Rome and Parthia", "The Ottoman Empire and Safavid Persia", "Byzantium and the Arabs", "Russia and England"]],
        ["In which year did the first partition of Armenia between Byzantium and Persia take place?", ["387", "591", "1555", "428"]],
        ["Which event is an example of the \"armed resistance\" strategy?", ["The Battle of Avarayr", "The Treaty of Rhandeia", "The treaty of Teodoros Rshtuni", "The Treaty of Amasya"]],
        ["What is a buffer state?", ["A state between two great powers", "A sea power", "The capital of an empire", "A union of nomadic tribes"]],
        ["Which powers were rivals in the 1st century BC?", ["Rome and Parthia", "The Arabs and Byzantium", "The Seljuks and the Mongols", "Assyria and Egypt"]],
      ],
    },
    "church-and-identity": {
      objectives: ["Analyse the political reasons for adopting Christianity", "Explain the position of the Armenian Church towards the Council of Chalcedon", "Describe the functions of the Church when there was no state", "Assess the role of the Church in preserving identity"],
      content: `## Adopting Christianity

The traditional date is **301**. Some historians suggest **314**. **Trdat III** and **Gregory the Illuminator** made Christianity the state religion.

**Political reasons**:

- to stand apart from **Zoroastrian** Sasanian Persia, which threatened Armenia,
- to strengthen the king's power through a single religion,
- to draw closer to Rome, where Christianity was growing stronger (the Edict of Milan, 313).

## A national Church

The Armenian Apostolic Church is **autocephalous** (self-governing). The Armenian Church **did not accept** the decisions of the Ecumenical Council of **Chalcedon** (**451**). The Councils of Dvin (**506**, **554**) confirmed this position. This set the Armenian Church apart from both Byzantium and Persia and became an expression of **political independence**. The **Armenian calendar** was also adopted in 554.

## Functions

When there was no state (428–885, 1375–1918), the Church carried out **state** functions:

| Function | Example |
|---|---|
| **education** | monastery schools, the universities of Gladzor and Tatev |
| **justice** | Mkhitar Gosh's "Code of Law", the catholicos as chief judge |
| **representation** | the Patriarch of Constantinople as head of the Armenian millet |
| **diplomacy** | Catholicos Hakob Jughayetsi's secret meeting, Khrimian Hayrik in Berlin |
| **preserving books** | manuscripts were created and kept in monasteries |

## Analysis

The Church became one of the main guardians of **national identity**. At the same time there were internal disputes (for example, in Cilicia over union with Rome) and sectarian movements that criticised the Church's wealth.

## Exercises

1. What is the traditional date of the adoption of Christianity, and which other date is suggested?
2. List two political reasons for adopting Christianity.
3. From a political point of view, why did the Armenian Church not accept the decisions of the Council of Chalcedon?
4. When was the Armenian calendar adopted?
5. Give three examples of how the Church took the place of the state.

## Answers

1. 301; some historians suggest 314.
2. To stand apart from Zoroastrian Persia, to strengthen the king's power.
3. To stand apart from Byzantium and keep its independence.
4. In 554.
5. Education, justice, representation (for example, head of the millet).`,
      quiz: [
        ["The decisions of which council did the Armenian Church not accept?", ["Nicaea", "Chalcedon", "Ephesus", "Constantinople"]],
        ["When was the Armenian calendar adopted?", ["301", "451", "554", "885"]],
        ["What does an \"autocephalous\" Church mean?", ["Self-governing", "Catholic", "Orthodox", "Protestant"]],
        ["From the religion of which empire did Armenia want to stand apart by adopting Christianity?", ["Sasanian Persia", "Rome", "Egypt", "Greece"]],
        ["Which date do some historians suggest instead of 301?", ["314", "405", "451", "387"]],
      ],
    },
    "economy-and-social-movements": {
      objectives: ["Describe the social classes of medieval Armenia", "Explain the growth of cities and crafts in the 10th–13th centuries", "Tell about the Paulician and Tondrakian movements", "Analyse the causes of social movements"],
      content: `## Social classes

| Class | Who they were |
|---|---|
| **azats** | nakharars and their warriors (the nobility) |
| **clergy** | the catholicos, bishops, monks |
| **shinakans** | peasants; paid taxes and owed labour duties (parhak) |
| **townspeople** | craftsmen, merchants |

## Cities and crafts

In the 10th–13th centuries **Ani**, **Dvin**, **Kars**, **Artsn** and **Van** flourished.

- Craftsmen joined together in **brotherhoods**, the medieval guilds.
- **Weaving** (silk, carpets), **metalworking**, **pottery** and **jewellery-making** were well developed.
- Ani lay on the **Trebizond to Tabriz** route and other trade routes. The city was famous for rich merchants who built churches (for example, Tigran Honents built the Church of Saint Gregory in 1215).

## Social and religious movements

| Movement | Time | Ideas |
|---|---|---|
| **Paulicians** | 7th–9th centuries | rejected the church hierarchy and the veneration of the cross and icons; created a fortified centre against Byzantium (Tephrike) |
| **Tondrakians** | 9th–11th centuries | founded by **Smbat Zarehavantsi**; rejected church landholding and demanded equality |

Both the Church and the nakharars fought these movements. In the 11th century **Grigor Magistros** suppressed the Tondrakians. Narekatsi was also accused of being close to the Tondrakians, but he was cleared.

## Causes

- The burden of taxes and the dependence of the **shinakans**.
- The great **wealth** of the Church and monasteries.
- Outside pressure and wars.

## Exercises

1. Who were the shinakans?
2. What were brotherhoods?
3. What did the Paulicians reject?
4. Who founded the Tondrakian movement?
5. Name two causes of the social movements.

## Answers

1. Peasants who paid taxes and owed labour duties.
2. Associations of craftsmen (guilds).
3. The church hierarchy and the veneration of the cross and icons.
4. Smbat Zarehavantsi.
5. Heavy taxes, the wealth of the Church.`,
      quiz: [
        ["Which movement was founded by Smbat Zarehavantsi?", ["The Paulician", "The Tondrakian", "The Mekhitarist", "The liberation movement"]],
        ["What were associations of craftsmen called?", ["Brotherhoods", "Nakharardoms", "Millets", "Melikdoms"]],
        ["Who suppressed the Tondrakians in the 11th century?", ["Grigor Magistros", "Ashot I", "Mkhitar Gosh", "Levon I"]],
        ["Which class did the nakharars belong to?", ["Azats", "Shinakans", "Townspeople", "Clergy"]],
        ["Who built the Church of Saint Gregory in Ani in 1215?", ["Tigran Honents", "Gagik I", "The architect Trdat", "Zakare Zakarian"]],
      ],
    },
    "working-with-sources": {
      objectives: ["Apply the steps of critical source analysis", "Compare different sources about one event", "Tell apart fact, interpretation and myth", "Write a short historical essay based on a source"],
      content: `## Steps of source analysis

1. **Who the author is**: what position they held and whom they wrote for.
2. **When it was written**: how long after the event.
3. **For what purpose**: to tell, to glorify, to teach, to justify.
4. **What it reports**: the main facts.
5. **How reliable it is**: compare with other sources and archaeological evidence.

## Example: two historians on Avarayr

| Criterion | Yeghishe | Ghazar Parpetsi |
|---|---|---|
| time | 5th century | late 5th century |
| purpose | to glorify the martyrs and show the victory of faith | also to tell of the Vahanants War and Nvarsak |
| image of Vasak Syuni | a traitor, wholly negative | also critical, but with more detailed political context |
| style | rhetorical, moralising | more narrative |

Both agree on the main facts: the year 451, Vardan's death, the continuation of the struggle.

## The question of Khorenatsi

Scholars disagree about when **Movses Khorenatsi**'s "History" was written: traditionally it is dated to the 5th century, but some researchers have proposed later dates (7th–9th centuries). The dispute shows that even a famous source must be **checked**.

## Fact, interpretation, myth

| Kind | Example |
|---|---|
| **fact** | "In 451 a battle took place at Avarayr" |
| **interpretation** | "Avarayr was a moral victory" |
| **myth/legend** | "Hayk killed Bel with an arrow" |

## Essay structure

- **Introduction**: a thesis (your main idea).
- **Main body**: 2–3 arguments with facts from the sources.
- **Conclusion**: a summary and an assessment.

## Exercises

1. List the five steps of source analysis.
2. Which facts do Yeghishe and Parpetsi both report?
3. Why is the date of Khorenatsi's "History" disputed?
4. "Tigran the Great was the best king": is this a fact or an interpretation?
5. Write a thesis on the topic "The importance of the Battle of Avarayr".

## Answers

1. Author, time, purpose, content, reliability.
2. The year 451, Vardan's death, the continuation of the struggle.
3. Some researchers find traces of a later time in the text.
4. An interpretation.
5. For example: "Avarayr was a military defeat, but it preserved the faith and identity of the Armenians."`,
      quiz: [
        ["Which of these is a fact?", ["\"Avarayr was a moral victory\"", "\"In 451 a battle took place at Avarayr\"", "\"Vardan was the best commander\"", "\"Hayk killed Bel\""]],
        ["Which historian also tells of the Treaty of Nvarsak?", ["Yeghishe", "Ghazar Parpetsi", "Koryun", "Agathangelos"]],
        ["What is the thesis of an essay?", ["The main idea", "The title", "The last sentence", "The list of sources"]],
        ["Why is comparing different sources important?", ["It checks reliability", "It makes the text longer", "It changes the facts", "It is not needed"]],
        ["The dating of which historian's work is disputed?", ["Movses Khorenatsi", "Yeghishe", "Koryun", "Pavstos Buzand"]],
      ],
    },
  },
};
