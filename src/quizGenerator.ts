import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface ConfiguredQuestion {
  question: string;
  answers: string[];
  correctAnswer: string;
  unitId: number;
  lessonId: number | null; // null means general unit question
  type: "trivia" | "vocabulary" | "spelling" | "phonics";
}

const HANDCRAFTED_TRIVIA: ConfiguredQuestion[] = [
  // --- UNIT 1 ---
  {
    question: "Which Sudanese hero was born in Suakin in 1840, was a merchant and friend of Al Mahdi, and died in 1926?",
    answers: ["Osman Digna", "Ali Dinar", "Ismail Al-Azhari", "Muhammad Ahmad"],
    correctAnswer: "Osman Digna",
    unitId: 1,
    lessonId: 5,
    type: "trivia"
  },
  {
    question: "Who did Samira save from a tin can on the ground in the traditional folk story?",
    answers: ["Princess Saadia", "Queen Shanakdakhete", "Amanirenas", "Princess Fatma"],
    correctAnswer: "Princess Saadia",
    unitId: 1,
    lessonId: 2,
    type: "trivia"
  },

  // --- UNIT 2 ---
  {
    question: "What is the Sudanese word for community volunteering where people work together to repair rain damage?",
    answers: ["Nafeer", "Jebena", "Kissra", "Souq"],
    correctAnswer: "Nafeer",
    unitId: 2,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "What are the names of the twin brothers who look very similar and play football?",
    answers: ["Hassan and Hussain", "Ahmed and Ali", "Osman and Tariq", "Wail and Yasir"],
    correctAnswer: "Hassan and Hussain",
    unitId: 2,
    lessonId: 2,
    type: "trivia"
  },

  // --- UNIT 3 ---
  {
    question: "How many kilometers did the Moroccan explorer Ibn Battuta travel over 29 years?",
    answers: ["121,000 km", "50,000 km", "10,000 km", "250,000 km"],
    correctAnswer: "121,000 km",
    unitId: 3,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Which historic caravan route connected El Fashir in Darfur to Asyut in Egypt?",
    answers: ["Forty Days Road (Darb al-Arba'in)", "Sennar Highway", "Nile Valley Track", "Red Sea Road"],
    correctAnswer: "Forty Days Road (Darb al-Arba'in)",
    unitId: 3,
    lessonId: 5,
    type: "trivia"
  },

  // --- UNIT 4 ---
  {
    question: "In Charles Dickens' story, which boy walked up to the master in the workhouse and said, 'Please, sir, I want some more'?",
    answers: ["Oliver Twist", "David Copperfield", "Robinson Crusoe", "Nicholas Nickleby"],
    correctAnswer: "Oliver Twist",
    unitId: 4,
    lessonId: 6,
    type: "trivia"
  },
  {
    question: "With what condition did Juha sell his house in the traditional story?",
    answers: ["Keeping a nail in the wall", "Keeping the back door open", "Feeding his cat daily", "Using the kitchen on Fridays"],
    correctAnswer: "Keeping a nail in the wall",
    unitId: 4,
    lessonId: 1,
    type: "trivia"
  },

  // --- UNIT 5 ---
  {
    question: "Why is solar power highly suitable for generating clean electricity in Sudan?",
    answers: ["Sudan has bright sunlight all year", "Sudan has very high wind speeds", "Sudan has large coal mines", "Sudan has cold temperatures"],
    correctAnswer: "Sudan has bright sunlight all year",
    unitId: 5,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "In the density experiment, why does an egg float in salty water but sink in fresh water?",
    answers: ["Salty water is denser than fresh water", "Salty water is warmer than fresh water", "The egg absorbs salt and becomes lighter", "Salty water dissolves the eggshell"],
    correctAnswer: "Salty water is denser than fresh water",
    unitId: 5,
    lessonId: 7,
    type: "trivia"
  },

  // --- UNIT 6 ---
  {
    question: "Which team won the match between El Obeid Hilal and Khartoum Hilal after scoring 4 goals in the second half?",
    answers: ["El Obeid Hilal", "Khartoum Hilal", "Merrikh Al-Fashir", "Sennar United"],
    correctAnswer: "El Obeid Hilal",
    unitId: 6,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "What is the name of the traditional, hand-dyed Sudanese leather sandals?",
    answers: ["Markoub", "Jallabiya", "Thobe", "Emmama"],
    correctAnswer: "Markoub",
    unitId: 6,
    lessonId: 2,
    type: "trivia"
  },

  // --- UNIT 7 ---
  {
    question: "Which of the following currencies is shared and used across nineteen European countries?",
    answers: ["Euro", "Pound", "Yen", "Dollar"],
    correctAnswer: "Euro",
    unitId: 7,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "From which two western regions of Sudan do most camels in the camel market come?",
    answers: ["Darfur and Kordofan", "Gezira and Kassala", "Khartoum and Northern", "Red Sea and Blue Nile"],
    correctAnswer: "Darfur and Kordofan",
    unitId: 7,
    lessonId: 7,
    type: "trivia"
  },

  // --- UNIT 8 ---
  {
    question: "How long does it take for blood to travel from your heart to your toes and back?",
    answers: ["16 seconds", "5 minutes", "1 hour", "3 seconds"],
    correctAnswer: "16 seconds",
    unitId: 8,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "What protects your brain from being easily damaged?",
    answers: ["The skull", "The heart", "The skin", "The lungs"],
    correctAnswer: "The skull",
    unitId: 8,
    lessonId: 6,
    type: "trivia"
  },

  // --- UNIT 9 ---
  {
    question: "What does the Nubian name of 'Tuti Island' translate to?",
    answers: ["Cow's stomach", "Sultan's house", "Nile garden", "Meeting place"],
    correctAnswer: "Cow's stomach",
    unitId: 9,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Near which confluence is the famous Al Neelain Mosque in Omdurman built?",
    answers: ["Confluence of Blue and White Niles", "Confluence of Atbara and Nile", "Sabaloka Gorge rapids", "Dinder river mouth"],
    correctAnswer: "Confluence of Blue and White Niles",
    unitId: 9,
    lessonId: 4,
    type: "trivia"
  },

  // --- UNIT 10 ---
  {
    question: "Which dangerous epidemic is characterized by rapid water-borne spread and is controlled by handwashing and clean water?",
    answers: ["Cholera", "Malaria", "HIV/AIDS", "Ebola"],
    correctAnswer: "Cholera",
    unitId: 10,
    lessonId: 3,
    type: "trivia"
  },
  {
    question: "Which traditional Sudanese herb (Garad) is used as a disinfectant to treat colds and sore throats?",
    answers: ["Acacia Nilotica", "Moringa", "Hibiscus", "Sesame Oil"],
    correctAnswer: "Acacia Nilotica",
    unitId: 10,
    lessonId: 6,
    type: "trivia"
  },

  // --- UNIT 11 ---
  {
    question: "What traditional pastoralist group lives in Kenya and Tanzania, herding cattle and sheep?",
    answers: ["The Maasai", "The Nubians", "The Beja", "The Fur"],
    correctAnswer: "The Maasai",
    unitId: 11,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "Which of the Seven Wonders of the ancient world stood in Egypt and was destroyed by earthquakes?",
    answers: ["Lighthouse of Alexandria", "Stonehenge", "Great Wall of China", "Pyramids of Kush"],
    correctAnswer: "Lighthouse of Alexandria",
    unitId: 11,
    lessonId: 3,
    type: "trivia"
  },

  // --- UNIT 12 ---
  {
    question: "Which two hobbies do the 15-year-old twins Lina and Doha have respectively?",
    answers: ["Reading novels and gardening", "Playing football and music", "Collecting stamps and cooking", "Drawing and swimming"],
    correctAnswer: "Reading novels and gardening",
    unitId: 12,
    lessonId: 1,
    type: "trivia"
  },
  {
    question: "In the river crossing logic puzzle, which three items must the farmer safely transport across the Nile?",
    answers: ["Goat, straw, and fox", "Sheep, wheat, and wolf", "Cow, sorghum, and dog", "Camel, grass, and lion"],
    correctAnswer: "Goat, straw, and fox",
    unitId: 12,
    lessonId: 5,
    type: "trivia"
  }
];

export function generateQuiz(
  scope: "all" | "unit" | "lesson",
  targetUnitId: number,
  targetLessonId: number,
  limit: number
): { question: string; answers: string[]; correctAnswer: string; badge: string }[] {
  
  let pool: ConfiguredQuestion[] = [];

  if (scope === "all") {
    pool = HANDCRAFTED_TRIVIA.filter((t) => SMILE_UNITS.some(u => u.id === t.unitId));
  } else if (scope === "unit") {
    pool = HANDCRAFTED_TRIVIA.filter((t) => t.unitId === targetUnitId);
  } else if (scope === "lesson") {
    pool = HANDCRAFTED_TRIVIA.filter(
      (t) => t.unitId === targetUnitId && (t.lessonId === targetLessonId || t.lessonId === null)
    );
  }

  const finalQuestions: { question: string; answers: string[]; correctAnswer: string; badge: string }[] = pool.map((item) => ({
    question: item.question,
    answers: item.answers,
    correctAnswer: item.correctAnswer,
    badge: `UNIT ${item.unitId} • LESSON ${item.lessonId || "Book"}`
  }));

  const activeUnitIds = scope === "all" 
    ? SMILE_UNITS.map(u => u.id) 
    : [targetUnitId];

  const targetWords = SMILE_UNITS
    .filter(u => activeUnitIds.includes(u.id))
    .flatMap(u => u.words);

  // Dynamic Generator Type A: Image emoji matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 60) return;
    
    const allDistractors = targetWords
      .filter((w) => w.word !== wordObj.word)
      .map((w) => w.word);
    
    const uniqueDistractors = Array.from(new Set(allDistractors));
    const randomDistractors = uniqueDistractors.sort(() => Math.random() - 0.5).slice(0, 3);
    
    const answers = [wordObj.word, ...randomDistractors].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Which Grade 10 intermediate vocabulary word matches this emoji: ${wordObj.image}?`,
        answers,
        correctAnswer: wordObj.word,
        badge: `VOCAB • UNIT ${wordObj.unit}`
      });
    }
  });

  // Dynamic Generator Type B: First letter spelling match
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 100) return;

    const firstLetter = wordObj.word.charAt(0).toUpperCase();
    const otherWordsWithDifferentStarts = targetWords
      .filter((w) => w.word.charAt(0).toUpperCase() !== firstLetter)
      .map((w) => w.word);

    const uniqueOthers = Array.from(new Set(otherWordsWithDifferentStarts));
    const randomOthers = uniqueOthers.sort(() => Math.random() - 0.5).slice(0, 3);

    const answers = [wordObj.word, ...randomOthers].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Identify the textbook word starting with letter '${firstLetter}' (hint: ${wordObj.image}):`,
        answers,
        correctAnswer: wordObj.word,
        badge: `SPELLING • UNIT ${wordObj.unit}`
      });
    }
  });

  // Dynamic Generator Type C: Example sentence matching
  targetWords.forEach((wordObj) => {
    if (finalQuestions.length >= 140) return;

    const sentenceHint = wordObj.example;
    const allOtherExamples = targetWords
      .filter((w) => w.word !== wordObj.word)
      .map((w) => w.word);

    const uniqueOthers = Array.from(new Set(allOtherExamples));
    const randomOthers = uniqueOthers.sort(() => Math.random() - 0.5).slice(0, 3);

    const answers = [wordObj.word, ...randomOthers].sort(() => Math.random() - 0.5);

    if (answers.length === 4) {
      finalQuestions.push({
        question: `Which textbook term fits correctly in this context sentence: "${sentenceHint}"?`,
        answers,
        correctAnswer: wordObj.word,
        badge: `EXAMPLE • UNIT ${wordObj.unit}`
      });
    }
  });

  // De-duplicate final questions by question text to ensure no repetition
  const uniqueQuestionsMap = new Map<string, typeof finalQuestions[0]>();
  finalQuestions.forEach(q => {
    const key = q.question.trim().toLowerCase();
    if (!uniqueQuestionsMap.has(key)) {
      uniqueQuestionsMap.set(key, q);
    }
  });

  const randomizedSubset = Array.from(uniqueQuestionsMap.values())
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(limit, 30));

  return randomizedSubset;
}
