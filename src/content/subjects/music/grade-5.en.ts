import type { EnCourse } from "../../ru-overlay";

export const en: EnCourse = {
  units: [
    "Intervals, scales, chords, dynamics and articulation.",
    "Bach, Mozart, Beethoven, Tchaikovsky.",
  ],
  lessons: {
    intervals: {
      objectives: ["Know what an interval is", "Name the intervals from a unison to an octave", "Build intervals from C", "Tell consonances from dissonances"],
      content: `## What an interval is

An **interval** is the **distance** between two notes. We count intervals in **steps**: the lower note is number one, and we count up to and including the upper note.

## Names of intervals

| Steps | Name | Example from C |
|---|---|---|
| 1 | Unison | C-C |
| 2 | Second | C-D |
| 3 | Third | C-E |
| 4 | Fourth | C-F |
| 5 | Fifth | C-G |
| 6 | Sixth | C-A |
| 7 | Seventh | C-B |
| 8 | Octave | C-C (the higher one) |

In many languages the names come from **Latin** numbers: "tertia" means third, "quinta" fifth and "octava" eighth. That is where the word **octave** comes from.

## Melodic and harmonic

- A **melodic** interval: the notes sound **one after the other**,
- A **harmonic** interval: the notes sound **together**.

## Consonances and dissonances

Some intervals sound **calm** and **agreeable** together: these are **consonances**: the unison, third, fourth, fifth, sixth and octave.

Others sound **tense** and "sharp": these are **dissonances**: the second and the seventh. A dissonance is not bad: it gives music **tension** and **movement**.

## Intervals in familiar songs

- A **fourth** often opens anthems and marches: it sounds like a **call**,
- A **third** is gentle and is often found in folk songs,
- An **octave** is the same note, only **higher**.

## Exercises

1. What is an interval?
2. What is the interval C-G called?
3. What interval is D-F?
4. How are melodic and harmonic intervals different?
5. Name two dissonances.

## Answers

1. The distance between two notes.
2. A fifth.
3. A third.
4. In a melodic interval the notes sound one after the other; in a harmonic one they sound together.
5. The second and the seventh.`,
      quiz: [
        ["What is the interval C-E called?", ["A third", "A fifth", "A second", "An octave"]],
        ["How many steps are there in an octave?", ["8", "5", "7", "3"]],
        ["Which interval is a dissonance?", ["A second", "A third", "A fifth", "An octave"]],
        ["What interval is C-F?", ["A fourth", "A fifth", "A third", "A sixth"]],
        ["How do the notes of a harmonic interval sound?", ["Together", "One after the other", "They do not sound", "Only fast"]],
      ],
    },
    "scales-and-keys": {
      objectives: ["Tell a tone from a semitone", "Build the scales of C major and A minor", "Know what a sharp, a flat and a natural do", "Explain what a key is"],
      content: `## Tones and semitones

A piano has **white** and **black** keys. The distance between two **neighbouring** keys (including the black ones) is called a **semitone**. Two semitones make a **tone**.

- C-D is a **tone** (there is a black key between them),
- E-F is a **semitone** (there is no black key between them),
- B-C is a **semitone**.

## Accidentals

| Sign | Name | What it does |
|---|---|---|
| ♯ | Sharp | Raises a note by a semitone |
| ♭ | Flat | Lowers a note by a semitone |
| ♮ | Natural | Cancels a sharp or a flat |

For example, **F sharp** is the black key between F and G.

## The major scale

The **C major** scale is played only on the **white** keys: C-D-E-F-G-A-B-C. The pattern of a major scale is:

**tone-tone-semitone-tone-tone-tone-semitone**

## The minor scale

The **A minor** scale is also played only on the white keys, but it starts on **A**: A-B-C-D-E-F-G-A. The pattern of the natural minor is:

**tone-semitone-tone-tone-semitone-tone-tone**

C major and A minor are called **relative** keys, because they use the same notes.

## Key

A **key** is a mode with a particular tonic. For example, "**D minor**" means the minor mode with D as its tonic. The sharps or flats written after the clef are called the **key signature**, and they show the key.

## Exercises

1. What is a semitone?
2. Is E-F a tone or a semitone?
3. What does a flat do?
4. Write down the pattern of a major scale.
5. Which key is the relative of C major?

## Answers

1. The distance between two neighbouring keys.
2. A semitone.
3. Lowers a note by a semitone.
4. Tone-tone-semitone-tone-tone-tone-semitone.
5. A minor.`,
      quiz: [
        ["What does a sharp do?", ["Raises a note by a semitone", "Lowers a note by a semitone", "Cancels a sign", "Repeats a note"]],
        ["Which of these is a semitone?", ["B-C", "C-D", "F-G", "G-A"]],
        ["Which key is played only on the white keys and starts on C?", ["C major", "A minor", "D minor", "G major"]],
        ["What is a natural?", ["A sign that cancels a sharp or a flat", "A long note", "A rest", "A clef"]],
        ["How many semitones are there in one tone?", ["Two", "One", "Three", "Four"]],
      ],
    },
    "chords-and-harmony": {
      objectives: ["Build major and minor triads", "Know the functions of the tonic, subdominant and dominant", "Accompany a simple melody with three chords", "Explain what harmony is"],
      content: `## Chords

A **chord** is three or more notes sounding **at the same time**. The simplest chord is a **triad**, which is built in **thirds**: for example, C-E-G.

## Major and minor triads

| Triad | Structure | Example | Sound |
|---|---|---|---|
| Major | Major third + minor third | C-E-G | Bright |
| Minor | Minor third + major third | A-C-E | Sad |

A **major third** has **two** tones (C-E), and a **minor third** has **one and a half** tones (E-G).

## The main chords

Every key has three **main** chords:

| Function | Degree | In C major | Role |
|---|---|---|---|
| Tonic (T) | I | C-E-G | Rest, "home" |
| Subdominant (S) | IV | F-A-C | Moves away from home |
| Dominant (D) | V | G-B-D | Tense, wants to return to the tonic |

Many songs can be accompanied with just **three chords**. The most common progression is **T-S-D-T**.

## Harmony

**Harmony** is the **combination** and **progression** of chords. If the melody is the "line" of music, harmony is its "**colour**". The same melody sounds different with different chords.

## Let's try

Sing a song you know. The teacher accompanies it with the chords T, S and D. Put your hand up when you hear the **dominant**, the moment when the music "waits" to return home.

## Exercises

1. What is a chord?
2. How is a triad built?
3. How are major and minor triads different?
4. Name the three main chords of C major.
5. Why is the dominant "tense"?

## Answers

1. Three or more notes sounding at the same time.
2. In thirds.
3. A major triad has a major third at the bottom; a minor triad has a minor third.
4. C-E-G, F-A-C and G-B-D.
5. Because it "wants" to return to the tonic.`,
      quiz: [
        ["What is a triad built from?", ["Thirds", "Seconds", "Octaves", "Sevenths"]],
        ["Which chord is the dominant in C major?", ["G-B-D", "C-E-G", "F-A-C", "A-C-E"]],
        ["On which degree is the subdominant?", ["IV", "I", "V", "VII"]],
        ["How many tones are there in a major third?", ["Two", "One", "One and a half", "Three"]],
        ["What is harmony?", ["The combination and progression of chords", "Only the melody", "Only the rhythm", "Silence"]],
      ],
    },
    "dynamics-and-articulation": {
      objectives: ["Recognise dynamic markings from pp to ff", "Know the signs for crescendo and diminuendo", "Tell legato from staccato", "Perform a melody with different dynamics"],
      content: `## Dynamics

**Dynamics** is the **loudness** of sound. The composer writes **markings** under the notes to show how loudly or quietly to play.

| Marking | Full name | Meaning |
|---|---|---|
| pp | Pianissimo | Very quietly |
| p | Piano | Quietly |
| mp | Mezzo piano | Fairly quietly |
| mf | Mezzo forte | Fairly loudly |
| f | Forte | Loudly |
| ff | Fortissimo | Very loudly |

## Gradual change

- **Crescendo** (cresc. or the widening sign "<") means **gradually get louder**,
- **Diminuendo** (dim. or the narrowing sign ">") means **gradually get quieter**.

"**Boléro**" by the French composer **Maurice Ravel** is one long **crescendo**: it starts very quietly and ends with the whole orchestra playing powerfully.

## Articulation

**Articulation** markings show **how** to play the notes: smoothly or separately.

| Articulation | Sign | How it sounds |
|---|---|---|
| Legato | A curved line over the notes | Smooth and joined, like singing |
| Staccato | A dot above or below the note | Short and detached, like little jumps |
| Accent | The sign ">" above the note | This note is louder |
| Fermata (pause) | A curve with a dot | Hold the note as long as the performer wishes |

## Why it matters

Dynamics and articulation make music **alive**. Without them music would be **monotonous**, like speech without **expression**. Think about how you read a poem: some words are louder, some quieter.

## Let's try

Sing one song three times: **pp**, **mf** and **ff**. Then sing it **legato** and **staccato**. How does the character of the song change?

## Exercises

1. What are dynamics?
2. What does mf mean?
3. What is a crescendo?
4. How are legato and staccato different?
5. Which piece is one long crescendo from start to finish?

## Answers

1. The loudness of sound.
2. Fairly loudly.
3. Gradually getting louder.
4. Legato is smooth and joined; staccato is short and detached.
5. Ravel's "Boléro".`,
      quiz: [
        ["What does pp mean?", ["Very quietly", "Very loudly", "Fairly loudly", "Fast"]],
        ["What does diminuendo mean?", ["Gradually get quieter", "Gradually get louder", "Speed up", "Stop"]],
        ["How is staccato marked?", ["A dot above or below the note", "A curved line", "A double bar line", "A clef"]],
        ["Who wrote \"Boléro\"?", ["Ravel", "Bach", "Komitas", "Tchaikovsky"]],
        ["What is a fermata?", ["A sign to hold a note longer", "A kind of staccato", "A sharp", "The dynamic marking ff"]],
      ],
    },
    bach: {
      objectives: ["Tell of the life of Bach", "Explain what a fugue is", "Recognise the organ", "Name Bach's main works"],
      content: `## Life

**Johann Sebastian Bach** (1685-1750) was born in **Germany**, in the town of **Eisenach**, into a large family of musicians. He was orphaned young and grew up in the house of his elder brother, who taught him music. It is said that at night he secretly **copied** his brother's music by moonlight.

Bach worked as an **organist** and a **Kapellmeister** (director of music), and for the last 27 years of his life as **cantor**, the head of music, at St Thomas Church in **Leipzig**. He had **20** children, and some of them became composers too.

## The organ

The **organ** is one of the biggest instruments in the world. It has:

- Hundreds or thousands of **pipes**,
- Several **hand** keyboards (manuals),
- A **foot** keyboard (pedals).

An organ is usually found in a **church** or a **concert hall**. Bach was the most famous organist of his time. His **"Toccata and Fugue in D minor"** is one of the best-known pieces for organ.

## The fugue

A **fugue** is a piece in several parts in which a **theme** is heard in one voice and then **repeated** in the other voices, and they **interweave**. Fugue means "**flight**", because the voices seem to "**run**" after each other.

## Main works

- **"The Well-Tempered Clavier"**: 48 preludes and fugues in all the keys,
- **"The Brandenburg Concertos"**,
- **"St Matthew Passion"**,
- **Suites** for cello.

After Bach's death he was forgotten, but in **1829** the composer **Felix Mendelssohn** performed the "St Matthew Passion" again, and the world rediscovered Bach.

## Exercises

1. Where was Bach born?
2. In which city did Bach work for the last 27 years of his life?
3. What is an organ?
4. What is a fugue?
5. Who rediscovered Bach's music in 1829?

## Answers

1. In Germany, in Eisenach.
2. In Leipzig.
3. A big instrument with pipes, hand keyboards and a foot keyboard.
4. A piece in several parts in which a theme is repeated in different voices.
5. Felix Mendelssohn.`,
      quiz: [
        ["On which instrument was Bach the most famous performer?", ["The organ", "The violin", "The duduk", "The guitar"]],
        ["What does \"fugue\" mean?", ["Flight", "Song", "Dance", "Rest"]],
        ["How many preludes and fugues are there in \"The Well-Tempered Clavier\"?", ["48", "12", "24", "100"]],
        ["In which country was Bach born?", ["Germany", "Italy", "France", "Austria"]],
        ["Who rediscovered Bach in 1829?", ["Mendelssohn", "Mozart", "Beethoven", "Tchaikovsky"]],
      ],
    },
    mozart: {
      objectives: ["Tell of Mozart's childhood", "Name his main works", "Describe the character of his music", "Explain what a symphony and a concerto are"],
      content: `## A child prodigy

**Wolfgang Amadeus Mozart** (1756-1791) was born in **Austria**, in the city of **Salzburg**. His father, **Leopold**, was a violinist and teacher.

- At **three** Wolfgang was already playing the harpsichord,
- At **five** he wrote his first pieces,
- From the age of **six** he toured Europe with his father and his sister **Nannerl**, giving concerts for kings,
- He could play **blindfolded** and, after hearing a piece once, **write it all down**.

## Vienna

When he grew up, Mozart moved to **Vienna**. He worked hard but often lived in **poverty**. He died at only **35**, but left **more than 600** works.

## Main works

| Genre | Examples |
|---|---|
| Operas | "The Marriage of Figaro", "Don Giovanni", "The Magic Flute" |
| Symphonies | 41 symphonies, for example No. 40 in G minor |
| Concertos | For piano, violin, clarinet |
| Chamber music | "Eine kleine Nachtmusik" ("A Little Night Music") |
| Sacred music | "Requiem" (unfinished) |

## Symphony and concerto

- A **symphony** is a large work for **orchestra**, usually in **four** movements,
- A **concerto** is a work for a **soloist** and **orchestra**, in which the soloist (for example, a pianist) shows off their skill.

## The character of his music

Mozart's music is **bright** and **elegant**; it seems **simple** but is very **perfect**. His melodies are easy to remember. Listen to "**Eine kleine Nachtmusik**" and the "**Turkish March**".

## Exercises

1. Where was Mozart born?
2. At what age did he write his first pieces?
3. Name two operas by Mozart.
4. What is a symphony?
5. How is a concerto different from a symphony?

## Answers

1. In Salzburg, Austria.
2. At five.
3. For example, "The Magic Flute" and "The Marriage of Figaro".
4. A large work for orchestra, usually in four movements.
5. A concerto has a soloist who plays together with the orchestra.`,
      quiz: [
        ["In which city was Mozart born?", ["Salzburg", "Vienna", "Leipzig", "Bonn"]],
        ["How many symphonies did Mozart write?", ["41", "9", "6", "100"]],
        ["Which of these operas is by Mozart?", ["\"The Magic Flute\"", "\"Anoush\"", "\"Swan Lake\"", "\"Gayane\""]],
        ["What is a concerto?", ["A work for a soloist and orchestra", "A song only for choir", "A folk dance", "The text of an opera"]],
        ["At what age did Mozart die?", ["35", "57", "80", "21"]],
      ],
    },
    beethoven: {
      objectives: ["Tell of Beethoven's life and deafness", "Recognise the Fifth and Ninth Symphonies", "Explain the significance of the \"Ode to Joy\"", "Value Beethoven's strength of will"],
      content: `## Life

**Ludwig van Beethoven** (1770-1827) was born in **Germany**, in the city of **Bonn**. His father wanted to make him a "second Mozart" and made him practise for hours every day. At **22** Beethoven moved to **Vienna**, where he became a famous pianist and composer.

## Deafness

From about the age of **28** Beethoven began to **lose his hearing**. For a musician nothing could be worse. He wrote: "I will seize fate by the throat; it shall not wholly overcome me." In the last years of his life he was **completely deaf**, but he went on **composing**. He "heard" the music **in his head**.

## Main works

| Work | Feature |
|---|---|
| 9 symphonies | the Fifth begins with "fate knocking"; the Ninth has a choir |
| 32 piano sonatas | the "Moonlight Sonata", the "Pathétique Sonata" |
| "Für Elise" | a short piano piece |
| "Fidelio" | his only opera |

## The Fifth Symphony

The Fifth Symphony begins with **four notes**: "**da-da-da-daaa**". It is described as "**Fate knocking at the door**". The symphony begins in a **minor** key, with struggle, and ends in a **major** key, with victory.

## The "Ode to Joy"

In the last movement of the **Ninth** Symphony Beethoven was the first to bring a **choir** and **soloists** into a symphony. They sing the "**Ode to Joy**" by the German poet **Schiller**, about the **brotherhood** of all people. Today this melody is the **anthem** of the **European Union**.

When the Ninth Symphony was first performed (1824), Beethoven could not hear the **applause**. One of the singers turned him round to face the audience so that he could see the people clapping.

## Exercises

1. Where was Beethoven born?
2. What misfortune happened to Beethoven?
3. How many symphonies did Beethoven write?
4. What is the opening of the Fifth Symphony called?
5. What is special about the Ninth Symphony?

## Answers

1. In Bonn, Germany.
2. He lost his hearing.
3. Nine.
4. "Fate knocking at the door".
5. Its last movement has a choir that sings the "Ode to Joy".`,
      quiz: [
        ["How many symphonies did Beethoven write?", ["9", "41", "6", "104"]],
        ["In which symphony is the \"Ode to Joy\" heard?", ["The Ninth", "The Fifth", "The First", "The Third"]],
        ["Which union uses the \"Ode to Joy\" as its anthem today?", ["The European Union", "The CIS", "The UN", "The African Union"]],
        ["Whose poem is the \"Ode to Joy\"?", ["Schiller's", "Goethe's", "Tumanyan's", "Pushkin's"]],
        ["Which work is a Beethoven piano sonata?", ["The \"Moonlight Sonata\"", "\"Eine kleine Nachtmusik\"", "\"Boléro\"", "The \"Sabre Dance\""]],
      ],
    },
    tchaikovsky: {
      objectives: ["Tell of the life of Tchaikovsky", "Recognise his ballets", "Get to know the \"Children's Album\" and \"The Seasons\"", "Describe the character of his music"],
      content: `## Life

**Pyotr Ilyich Tchaikovsky** (1840-1893) is the greatest Russian composer. He was born in **Votkinsk** (in the Urals). At first he studied **law** and worked as a civil servant, but at **21** he decided to devote his life to music. He graduated from the **St Petersburg** Conservatory and then taught at the **Moscow** Conservatory, which bears his name today.

## Ballets

Tchaikovsky changed ballet: before him, ballet music was thought of as simply an **accompaniment** to the dancing, but he made it a **symphonic** art.

| Ballet | What it is about |
|---|---|
| "Swan Lake" | Princess Odette, who is put under a spell and turned into a swan |
| "The Sleeping Beauty" | the fairy tale of a princess who fell asleep for a hundred years |
| "The Nutcracker" | a Christmas tale about a girl, Masha (Clara), and a nutcracker toy |

In the **"Dance of the Sugar Plum Fairy"** from "The Nutcracker" Tchaikovsky used a new instrument, the **celesta**, whose sound is like **little bells**.

## For children

- **"Children's Album"**: 24 piano pieces for children, including "Morning Prayer", "The Sick Doll", "The Doll's Funeral", "The New Doll" and "March of the Wooden Soldiers",
- **"The Seasons"**: 12 pieces, one for each month, for example "June. Barcarolle" and "December. Christmas".

## Other works

- **Six** symphonies,
- **Piano Concerto No. 1**,
- The operas **"Eugene Onegin"** and **"The Queen of Spades"**, based on works by Pushkin.

## The character of his music

Tchaikovsky's music is **emotional** and full of **beautiful melodies**, sometimes **sad** and **dramatic**. He often used Russian **folk** songs.

## Exercises

1. What was Tchaikovsky's profession before music?
2. Name three ballets by Tchaikovsky.
3. Which instrument did he use in the "Dance of the Sugar Plum Fairy"?
4. How many pieces are there in "The Seasons"?
5. Which conservatory bears his name?

## Answers

1. A lawyer.
2. "Swan Lake", "The Sleeping Beauty" and "The Nutcracker".
3. The celesta.
4. 12.
5. The Moscow Conservatory.`,
      quiz: [
        ["Which of these ballets did Tchaikovsky write?", ["\"The Nutcracker\"", "\"Gayane\"", "\"Spartacus\"", "\"The Magic Flute\""]],
        ["How many pieces are there in \"The Seasons\"?", ["12", "4", "24", "7"]],
        ["Which instrument sounds like little bells?", ["The celesta", "The tuba", "The double bass", "The bassoon"]],
        ["How many symphonies did Tchaikovsky write?", ["Six", "Nine", "Forty-one", "Three"]],
        ["Whose work is the opera \"Eugene Onegin\" based on?", ["Pushkin's", "Tolstoy's", "Gogol's", "Chekhov's"]],
      ],
    },
  },
};
