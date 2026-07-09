import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ExamPassage {
  title: string;
  text: string;
  unitId: number;
  questions: Array<{
    question: string;
    answer: string;
    options?: string[];
    isTrueFalse?: boolean;
    correctTF?: "True" | "False";
  }>;
}

export interface SpellingQuestion {
  word: string;
  clue: string;
  gapped: string; // e.g. "c h _ m _ s t r y"
  unitId: number;
}

export interface GrammarQuestion {
  question: string;
  options: string[];
  correct: string;
  unitId: number;
}

export interface WritingQuestion {
  jumbled: string;
  ordered: string;
  unitId: number;
}

export interface ExamPaper {
  id: string;
  passage: ExamPassage;
  spelling: SpellingQuestion[];
  vocabMatching: Array<{ word: string; definitionOrSentence: string }>;
  grammar: GrammarQuestion[];
  writing: WritingQuestion[];
}

// Pre-defined exam passages based on Grade 10 1st Secondary curriculum (SMILE Book 6)
const PASSAGES: ExamPassage[] = [
  {
    title: "Osman Digna: A Sudanese National Hero",
    text: "Osman Digna was a celebrated merchant and military commander, born in Suakin in 1840. He was a close friend and supporter of Al Mahdi. In 1883, Osman Digna attacked the Egyptian army near Tokar and successfully gained control of the region. He was famous for his strategy and bravery. In 1900, he was captured by combined British and Egyptian forces and imprisoned. After being released in 1908, he lived peacefully until his death in 1926. He remains buried near Khartoum as a symbol of national pride.",
    unitId: 1,
    questions: [
      { question: "Where and when was Osman Digna born?", answer: "He was born in Suakin in 1840." },
      { question: "Why was he nicknamed 'Digna' according to history?", answer: "Because of his long beard." },
      { question: "Osman Digna was a close friend and supporter of Al Mahdi.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "He died in prison in 1900.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "The Spirit of Nafeer in Sudan",
    text: "During the autumn season, heavy rains often cause significant damage to traditional mud brick houses across Sudanese villages. To cope with this, local citizens organize a 'Nafeer', which is an ancient voluntary community initiative. Volunteers work together day and night to rebuild collapsed walls, repair leaking roofs, and clear blocked drainage channels. This voluntary work demonstrates the strong social relationships and unity of the Sudanese people, showing how collaboration can solve major environmental challenges.",
    unitId: 2,
    questions: [
      { question: "What is a 'Nafeer'?", answer: "An ancient voluntary community initiative where people work together." },
      { question: "What causes damage to mud brick houses in Sudanese villages?", answer: "Heavy rains during the autumn season." },
      { question: "Nafeer is a paid government service.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "Volunteers repair leaking roofs and rebuild walls during a Nafeer.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "The Incredible Journeys of Ibn Battuta",
    text: "Ibn Battuta was a legendary Moroccan explorer who covered over 121,000 kilometers in his life. He left his home in 1325 at the age of twenty to perform Hajj in Makkah. However, his journey turned into a 29-year-long exploration of Africa, Asia, and the Middle East. He faced extreme hardships, including severe sea sickness and pirate attacks on the Red Sea. He eventually married in India, visited China, and returned home to write his famous travel book, the Rihla.",
    unitId: 3,
    questions: [
      { question: "At what age and for what purpose did Ibn Battuta leave his home?", answer: "At the age of twenty to perform Hajj in Makkah." },
      { question: "What was the name of his famous travel book?", answer: "The Rihla." },
      { question: "Ibn Battuta traveled more than 120,000 kilometers in his life.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "He never faced any hardships or sickness on the Red Sea.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "Oliver Twist Wants More",
    text: "In 1833, the famous English novelist Charles Dickens wrote 'Oliver Twist', a story about a poor orphan boy. Oliver lived in a parish workhouse where children were starving and given only small bowls of thin gruel. One day, the boys held a meeting and chose Oliver to ask for more food. Oliver walked up to the master after dinner and said, 'Please, sir, I want some more.' The master was shocked, hit Oliver on the head with a spoon, and locked him up.",
    unitId: 4,
    questions: [
      { question: "Who wrote the famous story of 'Oliver Twist'?", answer: "Charles Dickens." },
      { question: "What did Oliver ask the master for after dinner?", answer: "He asked for some more food." },
      { question: "Oliver Twist was a wealthy boy living with his parents.", answer: "", isTrueFalse: true, correctTF: "False" },
      { question: "The master punished Oliver Twist for asking for more food.", answer: "", isTrueFalse: true, correctTF: "True" }
    ]
  },
  {
    title: "Solar Energy in Wonderful Sudan",
    text: "Sudan is one of the most suitable countries in the world for solar power because it receives bright sunlight all year round. Solar panels are now being used to generate clean electricity for homes, schools, and farm irrigation pumps. Unlike fossil fuels, solar energy is renewable, silent, and does not produce air pollution. Using solar power helps combat desertification and global warming, making it a crucial science-based solution for Sudan's clean future.",
    unitId: 5,
    questions: [
      { question: "Why is Sudan suitable for solar power?", answer: "Because it receives bright sunlight all year round." },
      { question: "Give two advantages of solar energy over fossil fuels.", answer: "It is renewable, quiet, and does not produce air pollution." },
      { question: "Solar panels can be used to power irrigation pumps on Sudanese farms.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "Solar power produces harmful smoke that increases air pollution.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  },
  {
    title: "King Piankhi and the Kingdom of Kush",
    text: "Three thousand years ago, the ancient Nubian Kingdom of Kush flourished in northern Sudan, enriched by gold mines and international trade. In the 8th century BC, Kush became highly powerful. King Piankhi marched north with his army, took control of Egypt, and declared himself Pharaoh. He ruled both Kush and Egypt, establishing the 25th Dynasty. When he died, he was buried under a steep stone pyramid at El Kurru, representing Sudan's glorious history.",
    unitId: 9,
    questions: [
      { question: "Which ancient kingdom flourished in Sudan 3,000 years ago?", answer: "The Kingdom of Kush." },
      { question: "Where was King Piankhi buried after his death?", answer: "Under a steep stone pyramid at El Kurru." },
      { question: "King Piankhi was a Pharaoh who ruled both Kush and Egypt.", answer: "", isTrueFalse: true, correctTF: "True" },
      { question: "The Kingdom of Kush was poor and had no gold or trade.", answer: "", isTrueFalse: true, correctTF: "False" }
    ]
  }
];

const SPELLING_POOL: SpellingQuestion[] = [
  { word: "JOURNEY", clue: "An act of traveling from one place to another", gapped: "j o u r _ e y", unitId: 1 },
  { word: "PRINCESS", clue: "A female member of a royal family", gapped: "p r i n _ e s s", unitId: 1 },
  { word: "VOLUNTEER", clue: "A person who works for a community without being paid", gapped: "v o l _ n t e e r", unitId: 2 },
  { word: "STRESSED", clue: "Feeling worried or nervous because of exams or work", gapped: "s t r _ s s e d", unitId: 2 },
  { word: "CAPITAL", clue: "The city where the government of a country is located", gapped: "c a p _ t a l", unitId: 3 },
  { word: "CARAVAN", clue: "A group of merchants and camels traveling together", gapped: "c a r _ v a n", unitId: 3 },
  { word: "CONDITION", clue: "A rule or demand that must be agreed to", gapped: "c o n d _ t i o n", unitId: 4 },
  { word: "RENEWABLE", clue: "Energy from natural sources that is never exhausted", gapped: "r e n _ w a b l e", unitId: 5 },
  { word: "POLLINATION", clue: "The transfer of pollen between flowers by bees", gapped: "p o l _ i n a t i o n", unitId: 5 },
  { word: "HANDICRAFT", clue: "Vessels or objects made skillfully by hand", gapped: "h a n d _ c r a f t", unitId: 6 },
  { word: "CURRENCY", clue: "The official system of money used in a country", gapped: "c u r _ e n c y", unitId: 7 },
  { word: "CONSUMER", clue: "A person who purchases goods or services", gapped: "c o n s _ m e r", unitId: 7 },
  { word: "DEHYDRATED", clue: "Lacking water in the body due to heat or illness", gapped: "d e h y d _ a t e d", unitId: 8 },
  { word: "CONFLUENCE", clue: "The point where two rivers, like Blue and White Niles, meet", gapped: "c o n f _ u e n c e", unitId: 9 },
  { word: "ECOSYSTEM", clue: "A biological community of interacting organisms", gapped: "e c o s _ s t e m", unitId: 10 },
  { word: "EPIDEMIC", clue: "A widespread infectious disease in a community", gapped: "e p i d _ m i c", unitId: 10 },
  { word: "PASTORALIST", clue: "A sheep or cattle farmer who moves with herds", gapped: "p a s t _ r a l i s t", unitId: 11 },
  { word: "GARDENING", clue: "The activity of tending and cultivating a garden", gapped: "g a r d _ n i n g", unitId: 12 }
];

const GRAMMAR_POOL: GrammarQuestion[] = [
  { question: "While Tariq ________ his Rubik's cube, the bus arrived.", options: ["was playing", "played", "plays"], correct: "was playing", unitId: 1 },
  { question: "A princess is a royal person ________ lives in a palace.", options: ["who", "which", "whose"], correct: "who", unitId: 1 },
  { question: "This is the child ________ mother organized the Nafeer campaign.", options: ["whose", "who", "which"], correct: "whose", unitId: 2 },
  { question: "We ________ help our neighbors when heavy autumn rains collapse their walls.", options: ["should", "could not", "must not"], correct: "should", unitId: 2 },
  { question: "Ibn Battuta is the traveler ________ book is called the Rihla.", options: ["whose", "who", "which"], correct: "whose", unitId: 3 },
  { question: "Nada hopes ________ Shanghai and ride the fast Maglev train next year.", options: ["to visit", "visiting", "visited"], correct: "to visit", unitId: 3 },
  { question: "Oliver Twist walked up to the master ________ ask for more food.", options: ["to", "for", "so that"], correct: "to", unitId: 4 },
  { question: "If the soil ________ enough water, the seeds will grow quickly.", options: ["gets", "get", "getting"], correct: "gets", unitId: 5 },
  { question: "Salty water is ________ than fresh water, making the egg float.", options: ["denser", "densest", "dense"], correct: "denser", unitId: 5 },
  { question: "El Obeid Hilal celebrated a ________ victory in the second half.", options: ["spectacular", "spectacularly", "spectaculars"], correct: "spectacular", unitId: 6 },
  { question: "Sudan exports gum Arabic ________ other international markets.", options: ["to", "from", "at"], correct: "to", unitId: 7 },
  { question: "We must ________ sweet fizzy sodas to protect our teeth and heart.", options: ["avoid", "avoids", "avoided"], correct: "avoid", unitId: 8 },
  { question: "Al Neelain Mosque was constructed ________ the 1970s near the Nile.", options: ["in", "on", "at"], correct: "in", unitId: 9 },
  { question: "Clean water is essential ________ prevent dangerous epidemics.", options: ["to", "for", "with"], correct: "to", unitId: 10 },
  { question: "The Maasai move constantly ________ find green grass for their cattle.", options: ["to", "for", "so"], correct: "to", unitId: 11 },
  { question: "Doha enjoys ________ with her grandmother in the backyard.", options: ["gardening", "to garden", "garden"], correct: "gardening", unitId: 12 }
];

const WRITING_POOL: WritingQuestion[] = [
  { jumbled: "Osman / hero / was / Digna / Sudanese / a / brave / .", ordered: "Osman Digna was a brave Sudanese hero.", unitId: 1 },
  { jumbled: "Volunteers / Nafeer / worked / together / in / the / .", ordered: "Volunteers worked together in the Nafeer.", unitId: 2 },
  { jumbled: "Ibn / Battuta / traveled / across / many / countries / .", ordered: "Ibn Battuta traveled across many countries.", unitId: 3 },
  { jumbled: "Oliver / Twist / asked / more / food / for / .", ordered: "Oliver Twist asked for more food.", unitId: 4 },
  { jumbled: "Solar / energy / is / renewable / and / clean / .", ordered: "Solar energy is renewable and clean.", unitId: 5 },
  { jumbled: "Markoub / is / a / traditional / Sudanese / sandal / .", ordered: "Markoub is a traditional Sudanese sandal.", unitId: 6 },
  { jumbled: "Sudan / exports / gum / Arabic / and / livestock / .", ordered: "Sudan exports gum Arabic and livestock.", unitId: 7 },
  { jumbled: "The / skull / protects / your / brain / from / damage / .", ordered: "The skull protects your brain from damage.", unitId: 8 },
  { jumbled: "Al / Neelain / Mosque / is / in / Omdurman / .", ordered: "Al Neelain Mosque is in Omdurman.", unitId: 9 },
  { jumbled: "We / must / wash / hands / with / soap / .", ordered: "We must wash hands with soap.", unitId: 10 },
  { jumbled: "Parrots / can / mimic / human / speech / beautifully / .", ordered: "Parrots can mimic human speech beautifully.", unitId: 11 },
  { jumbled: "Lungs / bring / oxygen / into / our / bodies / .", ordered: "Lungs bring oxygen into our bodies.", unitId: 12 }
];

/**
 * Generic helper to select a list of unique items from a pool,
 * ensuring no duplicate keys within the same selection,
 * and preferring items that have not been globally used.
 */
function getUniqueSelection<T>(
  pool: T[],
  countNeeded: number,
  getKey: (item: T) => string,
  globalUsedKeys: Set<string>
): T[] {
  // Filter pool for items not used globally
  let available = pool.filter(item => !globalUsedKeys.has(getKey(item)));
  
  // If we don't have enough globally unused items, fall back to the whole pool
  // but we still MUST NOT introduce duplicate items inside this single selection!
  if (available.length < countNeeded) {
    available = [...pool];
  }
  
  // Shuffle available items
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  
  const selection: T[] = [];
  const selectionKeys = new Set<string>();
  
  for (const item of shuffled) {
    const key = getKey(item);
    if (!selectionKeys.has(key)) {
      selectionKeys.add(key);
      selection.push(item);
      if (selection.length === countNeeded) {
        break;
      }
    }
  }
  
  // Add newly chosen items to the global tracking set
  selection.forEach(item => globalUsedKeys.add(getKey(item)));
  
  return selection;
}

/**
 * Generates an array of non-overlapping A4 exam papers
 */
export function generateSudanExams(
  count: number,
  scope: "all" | "unit" | "lesson",
  targetUnitId?: number,
  targetLessonId?: number
): ExamPaper[] {
  const papers: ExamPaper[] = [];

  const usedPassageTitles = new Set<string>();
  const usedSpellingWords = new Set<string>();
  const usedVocabWords = new Set<string>();
  const usedGrammarQuestions = new Set<string>();
  const usedWritingJumbled = new Set<string>();

  for (let i = 0; i < count; i++) {
    // 1. FILTER PASSAGES
    let passagePool = [...PASSAGES];
    if (scope === "unit" && targetUnitId !== undefined) {
      passagePool = passagePool.filter((p) => p.unitId === targetUnitId);
    }
    if (passagePool.length === 0) {
      passagePool = [...PASSAGES];
    }
    const selectedPassages = getUniqueSelection(
      passagePool,
      1,
      (p) => p.title,
      usedPassageTitles
    );
    const passage = selectedPassages[0] || PASSAGES[0];

    // 2. FILTER SPELLING
    let spellingPool = [...SPELLING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      spellingPool = spellingPool.filter((s) => s.unitId === targetUnitId);
    }
    if (spellingPool.length === 0) {
      spellingPool = [...SPELLING_POOL];
    }
    const spellingShuffled = getUniqueSelection(
      spellingPool,
      4,
      (s) => s.word,
      usedSpellingWords
    );

    // 3. FILTER VOCABULARY MATCHING
    let vocabWordsPool: WordItem[] = [];
    if (scope === "unit" && targetUnitId !== undefined) {
      const selectedUnit = SMILE_UNITS.find((u) => u.id === targetUnitId);
      if (selectedUnit) {
        vocabWordsPool = [...selectedUnit.words];
      }
    } else {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    if (vocabWordsPool.length === 0) {
      SMILE_UNITS.forEach((unit) => {
        vocabWordsPool.push(...unit.words);
      });
    }

    const vocabSelection = getUniqueSelection(
      vocabWordsPool,
      5,
      (v) => v.word.toLowerCase().trim(),
      usedVocabWords
    );

    const vocabMatching = vocabSelection.map((item) => {
      const regex = new RegExp(`\\b${item.word}\\b`, "gi");
      let sentence = item.example;
      if (regex.test(sentence)) {
        sentence = sentence.replace(regex, "________");
      } else {
        sentence = sentence.replace(item.word, "________");
        sentence = sentence.replace(item.word.toLowerCase(), "________");
      }
      return {
        word: item.word.toUpperCase(),
        definitionOrSentence: sentence
      };
    });

    // 4. FILTER GRAMMAR
    let grammarPool = [...GRAMMAR_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      grammarPool = grammarPool.filter((g) => g.unitId === targetUnitId);
    }
    if (grammarPool.length === 0) {
      grammarPool = [...GRAMMAR_POOL];
    }
    const grammarShuffled = getUniqueSelection(
      grammarPool,
      5,
      (g) => g.question.trim().toLowerCase(),
      usedGrammarQuestions
    );

    // 5. FILTER WRITING
    let writingPool = [...WRITING_POOL];
    if (scope === "unit" && targetUnitId !== undefined) {
      writingPool = writingPool.filter((w) => w.unitId === targetUnitId);
    }
    if (writingPool.length === 0) {
      writingPool = [...WRITING_POOL];
    }
    const writingShuffled = getUniqueSelection(
      writingPool,
      2,
      (w) => w.jumbled.trim().toLowerCase(),
      usedWritingJumbled
    );

    papers.push({
      id: `paper-${i}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      passage,
      spelling: spellingShuffled,
      vocabMatching,
      grammar: grammarShuffled,
      writing: writingShuffled
    });
  }

  return papers;
}
