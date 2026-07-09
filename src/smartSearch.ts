import { SMILE_UNITS } from "./smileData";
import { UnitItem, Lesson, WordItem } from "./types";

export interface SearchResult {
  reply: string;
  voiceText: string;
  matchedWords: WordItem[];
  matchedLessons: { lesson: Lesson; unitId: number; unitTitle: string }[];
  matchedUnits: UnitItem[];
  suggestions: string[];
}

// Normalizes Arabic text (for backwards compatibility if any Arabic queries occur)
function normalizeArabic(text: string): string {
  if (!text) return "";
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove harakat (tashkeel)
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase()
    .trim();
}

export function searchSMILECurriculum(query: string): SearchResult {
  const normQuery = query.toLowerCase().trim();
  const normQueryAr = normalizeArabic(query);
  
  const result: SearchResult = {
    reply: "",
    voiceText: "",
    matchedWords: [],
    matchedLessons: [],
    matchedUnits: [],
    suggestions: [
      "Who is Osman Digna? 🗡️",
      "Explain Nafeer 🌱",
      "Explain Conditionals 📝",
      "What is Unit 5 about? ☀️",
      "What does Markoub mean? 🥾"
    ]
  };

  if (!normQuery) {
    result.reply = "Hello there! Ask me any question about vocabulary, grammar rules, famous figures, or lessons in your Grade 10 Sudanese English syllabus (SMILE Book 6) and I will help you instantly! 🧠✨";
    result.voiceText = "Hello! Ask me any question about vocabulary, grammar rules, famous figures, or lessons in your Grade 10 Sudanese English syllabus.";
    return result;
  }

  // 1. UNIT MATCHING (e.g., "unit 1" to "unit 12")
  const unitKeywords = ["unit", "chapter", "module", "lesson", "وحده", "الوحده"];
  const isUnitQuery = unitKeywords.some(k => normQuery.includes(k) || normQueryAr.includes(k));
  
  let targetUnitNum = 0;
  if (normQuery.includes("first") || normQuery.includes("one") || normQuery.includes("1") || normQueryAr.includes("اول")) targetUnitNum = 1;
  else if (normQuery.includes("second") || normQuery.includes("two") || normQuery.includes("2") || normQueryAr.includes("ثان")) targetUnitNum = 2;
  else if (normQuery.includes("third") || normQuery.includes("three") || normQuery.includes("3") || normQueryAr.includes("ثالث")) targetUnitNum = 3;
  else if (normQuery.includes("fourth") || normQuery.includes("four") || normQuery.includes("4") || normQueryAr.includes("رابع")) targetUnitNum = 4;
  else if (normQuery.includes("fifth") || normQuery.includes("five") || normQuery.includes("5") || normQueryAr.includes("خامس")) targetUnitNum = 5;
  else if (normQuery.includes("sixth") || normQuery.includes("six") || normQuery.includes("6") || normQueryAr.includes("سادس")) targetUnitNum = 6;
  else if (normQuery.includes("seventh") || normQuery.includes("seven") || normQuery.includes("7") || normQueryAr.includes("سابع")) targetUnitNum = 7;
  else if (normQuery.includes("eighth") || normQuery.includes("eight") || normQuery.includes("8") || normQueryAr.includes("ثامن")) targetUnitNum = 8;
  else if (normQuery.includes("ninth") || normQuery.includes("nine") || normQuery.includes("9") || normQueryAr.includes("تاسع")) targetUnitNum = 9;
  else if (normQuery.includes("tenth") || normQuery.includes("ten") || normQuery.includes("10") || normQueryAr.includes("عاشر")) targetUnitNum = 10;
  else if (normQuery.includes("eleventh") || normQuery.includes("eleven") || normQuery.includes("11") || normQueryAr.includes("حادي")) targetUnitNum = 11;
  else if (normQuery.includes("twelfth") || normQuery.includes("twelve") || normQuery.includes("12") || normQueryAr.includes("ثاني عشر")) targetUnitNum = 12;

  if (isUnitQuery && targetUnitNum > 0) {
    const matchedUnit = SMILE_UNITS.find(u => u.id === targetUnitNum);
    if (matchedUnit) {
      result.matchedUnits.push(matchedUnit);
      result.reply = `✨ **Unit ${matchedUnit.id}: ${matchedUnit.title} (${matchedUnit.arabicTitle})**\n\nThis unit contains wonderful and useful lessons! Here are the lessons:\n` + 
        matchedUnit.lessons.map(l => `• **${l.title}**`).join("\n") + 
        `\n\n💡 You can click any of these lessons in the book view list on the left to read and learn!`;
      result.voiceText = `Unit ${matchedUnit.id} is about ${matchedUnit.title}. It has ${matchedUnit.lessons.length} lessons.`;
      
      result.suggestions = matchedUnit.lessons.slice(0, 3).map(l => l.title);
      return result;
    }
  }

  // 2. GRAMMAR MATCHING
  const grammarKeywords = ["rule", "grammar", "conditional", "pronoun", "relative", "clause", "who", "which", "whose", "simple", "continuous", "past", "gerund", "infinitive", "قواعد", "قاعده"];
  const isGrammarQuery = grammarKeywords.some(k => normQuery.includes(k) || normQueryAr.includes(normalizeArabic(k)));

  if (isGrammarQuery) {
    if (normQuery.includes("conditional") || normQuery.includes("zero") || normQuery.includes("first") || normQueryAr.includes("شرط")) {
      result.reply = `📝 **Conditional Clauses in SMILE Book 6:**\n\n**1. Zero Conditional (Scientific truths):**\n` +
        `\`If + Present Simple -> Present Simple\`\n` +
        `• *If the soil gets enough water, the seeds grow quickly.*\n` +
        `• *Salty water is denser than fresh water.*\n\n` +
        `**2. First Conditional (Future possibilities):**\n` +
        `\`If + Present Simple -> will + Verb\`\n` +
        `• *If you wash your hands, you will prevent cholera.*`;
      result.voiceText = "Zero conditional is used for scientific facts. First conditional is used for future possibilities.";
      result.suggestions = ["Relative Pronouns", "Past Continuous"];
      return result;
    }

    if (normQuery.includes("relative") || normQuery.includes("who") || normQuery.includes("which") || normQuery.includes("whose") || normQueryAr.includes("موصول")) {
      result.reply = `📝 **Relative Pronouns (who, which, whose) in SMILE Book 6:**\n\n` +
        `These pronouns connect ideas and give more description to nouns:\n\n` +
        `1. **Who**: Used for people.\n` +
        `   • *A princess is a royal person who lives in a palace.*\n` +
        `2. **Which / That**: Used for things and animals.\n` +
        `   • *Markoub is a traditional leather sandal which is dyed by hand.*\n` +
        `3. **Whose**: Used to show possession.\n` +
        `   • *This is the child whose mother organized the Nafeer.*`;
      result.voiceText = "Relative pronouns are who for people, which for things, and whose for possession.";
      result.suggestions = ["Explain Conditionals", "Past Continuous"];
      return result;
    }

    if (normQuery.includes("past") || normQuery.includes("simple") || normQuery.includes("continuous") || normQueryAr.includes("ماضي")) {
      result.reply = `📝 **Past Simple & Past Continuous:**\n\n` +
        `We use these together when a longer action in the past was interrupted by a shorter action.\n\n` +
        `**Structure:**\n` +
        `\`While / As + Past Continuous (was/were + verb-ing) -> Past Simple\`\n\n` +
        `**Examples from your book:**\n` +
        `• *While Tariq was playing with his Rubik's cube, the bus arrived.*\n` +
        `• *Osman Digna was working as a merchant when he supported Al Mahdi.*`;
      result.voiceText = "While Tariq was playing with his Rubik's cube, the bus arrived.";
      result.suggestions = ["Relative Pronouns", "Explain Conditionals"];
      return result;
    }

    if (normQuery.includes("gerund") || normQuery.includes("infinitive") || normQuery.includes("ing")) {
      result.reply = `📝 **Gerunds vs. Infinitives:**\n\n` +
        `Some verbs are followed by a gerund (verb-ing), while others are followed by a full infinitive (to + verb).\n\n` +
        `• **Enjoy + Gerund:** *Doha enjoys gardening with her grandmother.*\n` +
        `• **Hope / Intend + Infinitive:** *Nada hopes to visit Shanghai next year.*`;
      result.voiceText = "Doha enjoys gardening with her grandmother. Nada hopes to visit Shanghai.";
      result.suggestions = ["Explain Conditionals", "Relative Pronouns"];
      return result;
    }

    // General Grammar overview
    result.reply = `📚 **Grammar Guide for SMILE Grade 10 (1st Secondary):**\n\nI found these core grammar rules in your textbook:\n\n` +
      `1. **Past Simple & Past Continuous** (Unit 1 & 2 - While Tariq was playing...)\n` +
      `2. **Relative Pronouns (who, which, whose)** (Unit 1, 2 & 3 - Joining sentences)\n` +
      `3. **Zero & First Conditionals** (Unit 5 - If the soil gets enough water...)\n` +
      `4. **Gerunds & Infinitives** (Unit 3 & 12 - Doha enjoys gardening)\n\n` +
      `💡 Ask about any rule (e.g. "Explain Conditionals") to see explanations and examples!`;
    result.voiceText = "Your grade 10 syllabus includes Past Simple, Past Continuous, Relative Pronouns, Conditionals, and Gerunds. Ask me about any of them!";
    result.suggestions = ["Explain Conditionals", "Relative Pronouns", "Past Continuous"];
    return result;
  }

  // 3. FAMOUS FIGURES MATCHING
  const figures = [
    {
      names: ["osman", "digna", "عثمان", "دقنه", "hero"],
      title: "Osman Digna 🗡️",
      bioText: "Osman Digna was a celebrated merchant and military commander, born in Suakin in 1840. He was a close friend and supporter of Al Mahdi. In 1883, he attacked the Egyptian army near Tokar and gained control of the region. He lived peacefully from 1908 until his death in 1926.",
      englishText: "Osman Digna was a brave Sudanese hero and commander born in Suakin.",
      unit: 1, lessonId: 5
    },
    {
      names: ["saadia", "princess", "سعدية", "سعديه", "اميرة", "اميره"],
      title: "Princess Saadia 👑",
      bioText: "Princess Saadia is a character in a traditional Sudanese folk story. She was saved by a clever girl named Samira, who rescued her from a small tin can left on the ground.",
      englishText: "Samira saved Princess Saadia from a tin can on the ground in the traditional story.",
      unit: 1, lessonId: 2
    },
    {
      names: ["battuta", "ibn battuta", "ابن بطوطة", "ابن بطوطه", "explorer", "traveler"],
      title: "Ibn Battuta 🐫",
      bioText: "Ibn Battuta was the greatest Arab explorer. He left his home in Tangier in 1325 at the age of twenty to perform Hajj. His journey turned into a 29-year exploration, traveling over 121,000 kilometers across Africa and Asia.",
      englishText: "Ibn Battuta was a legendary Moroccan explorer who covered over 121,000 kilometers over 29 years.",
      unit: 3, lessonId: 3
    },
    {
      names: ["oliver", "twist", "dickens", "أوليفر", "اليتيم"],
      title: "Oliver Twist 👦",
      bioText: "Oliver Twist is the central character of Charles Dickens' famous 1833 novel. He was a poor orphan living in a harsh parish workhouse, who famously walked up to the master and said, 'Please, sir, I want some more' gruel.",
      englishText: "Oliver Twist walked up to the workhouse master and said: Please, sir, I want some more.",
      unit: 4, lessonId: 6
    },
    {
      names: ["piankhi", "pyramid", "بعانخي", "كوش", "pharaoh", "kush"],
      title: "King Piankhi of Kush 👑",
      bioText: "King Piankhi was a highly powerful monarch of the ancient Kingdom of Kush in northern Sudan. In the 8th century BC, he marched north to take control of Egypt and declare himself Pharaoh, establishing the 25th Dynasty. He was buried under a pyramid at El Kurru.",
      englishText: "King Piankhi was a powerful Kushite monarch who ruled both Sudan and Egypt as Pharaoh.",
      unit: 9, lessonId: 3
    },
    {
      names: ["lina", "doha", "twins", "لينا", "ضحى", "hobbies"],
      title: "Lina and Doha 👭",
      bioText: "Lina and Doha are 15-year-old twin sisters featured in the Unit 12 lessons. They look very similar but have different hobbies: Lina loves reading novels and writing, while Doha enjoys gardening with her grandmother in the backyard.",
      englishText: "Lina and Doha are twin sisters; Lina loves reading novels and Doha enjoys gardening.",
      unit: 12, lessonId: 1
    }
  ];

  for (const fig of figures) {
    if (fig.names.some(name => normQuery.includes(name) || normQueryAr.includes(normalizeArabic(name)))) {
      result.reply = `👤 **Famous Biography: ${fig.title}**\n\n` +
        `**Overview:**\n${fig.bioText}\n\n` +
        `**Key Quote from Textbook:**\n*"${fig.englishText}"*\n\n` +
        `💡 This figure is covered in **Unit ${fig.unit}, Lesson ${fig.lessonId}**!`;
      result.voiceText = fig.englishText;
      result.suggestions = ["Who is Osman Digna? 🗡️", "Where did Ibn Battuta travel? 🗺️", "What is Unit 12 about? 👭"];
      
      const unit = SMILE_UNITS.find(u => u.id === fig.unit);
      const lesson = unit?.lessons.find(l => l.id === fig.lessonId);
      if (lesson && unit) {
        result.matchedLessons.push({ lesson, unitId: unit.id, unitTitle: unit.title });
      }
      return result;
    }
  }

  // 4. NATURAL & CULTURAL FACTS MATCHING (e.g., Nafeer, Solar, Camel, Garad, Maasai)
  const facts = [
    {
      names: ["nafeer", "volunteer", "نفير", "تطوع"],
      title: "Nafeer (Voluntary Community Work) 🌱",
      description: "Nafeer is an ancient and noble Sudanese tradition of community volunteering. When mud houses collapse or roofs leak during the heavy autumn rains, community members join hands to rebuild and repair the damage together.",
      englishText: "Nafeer is a voluntary work initiative where people work together to repair rain damage in Sudanese villages.",
      unit: 2, lessonId: 1
    },
    {
      names: ["solar", "energy", "sunlight", "شمس", "طاقة", "كهرباء"],
      title: "Solar Power in Sudan ☀️",
      description: "Sudan receives bright sunlight all year round, making solar energy highly suitable for generating clean electricity for homes, schools, and farm irrigation pumps. It is silent and does not pollute the air.",
      englishText: "Sudan has bright sunlight all year, making solar panels perfect for clean, renewable electricity.",
      unit: 5, lessonId: 1
    },
    {
      names: ["camel", "market", "جمال", "ابل", "دارفور", "كردفان"],
      title: "Sudanese Camels & Markets 🐪",
      description: "Sudan is famous for its massive camel markets. Most camels exported or sold come from the rich pastoral regions of Darfur and Kordofan in western Sudan.",
      englishText: "Most camels sold in the market come from Darfur and Kordofan regions.",
      unit: 7, lessonId: 7
    },
    {
      names: ["heart", "blood", "skull", "قلب", "جمجمة", "دم"],
      title: "The Human Heart & Skull 🩺",
      description: "Your skull acts as a hard bone shell that protects your brain from damage. Your heart acts as a tireless muscle pump that circulates blood through your body; it takes only 16 seconds for blood to travel to your toes and back.",
      englishText: "Your heart pumps blood to your toes and back in 16 seconds, and the skull protects your brain.",
      unit: 8, lessonId: 3
    },
    {
      names: ["garad", "acacia", "nilotica", "herb", "قرض", "علاج"],
      title: "Garad (Acacia Nilotica) 🌿",
      description: "Garad is a traditional Sudanese medicine harvested from Acacia Nilotica trees. It is widely used as a disinfectant, brewed as a tea, or inhaled as smoke to treat severe colds, coughs, and sore throats.",
      englishText: "Garad (Acacia Nilotica) is a traditional herb used as a disinfectant to soothe colds and sore throats.",
      unit: 10, lessonId: 6
    },
    {
      names: ["maasai", "cattle", "ماساي"],
      title: "The Maasai Pastoralists 🐄",
      description: "The Maasai are a traditional pastoralist ethnic group living in Kenya and Tanzania, who move continuously across grasslands to herd and graze their cattle and sheep.",
      englishText: "The Maasai are pastoralists in Kenya and Tanzania who move to herd cattle.",
      unit: 11, lessonId: 1
    }
  ];

  for (const fact of facts) {
    if (fact.names.some(name => normQuery.includes(name) || normQueryAr.includes(normalizeArabic(name)))) {
      result.reply = `🌿 **Curriculum Fact: ${fact.title}**\n\n` +
        `**Description:**\n${fact.description}\n\n` +
        `**From your Textbook:**\n*"${fact.englishText}"*\n\n` +
        `💡 This fact is covered in **Unit ${fact.unit}, Lesson ${fact.lessonId}**!`;
      result.voiceText = fact.englishText;
      result.suggestions = ["Explain Nafeer 🌱", "Solar Power in Sudan ☀️", "Who is Osman Digna? 🗡️"];
      
      const unit = SMILE_UNITS.find(u => u.id === fact.unit);
      const lesson = unit?.lessons.find(l => l.id === fact.lessonId);
      if (lesson && unit) {
        result.matchedLessons.push({ lesson, unitId: unit.id, unitTitle: unit.title });
      }
      return result;
    }
  }

  // 5. VOCABULARY WORD MATCHING (Scan all vocabulary words in the whole syllabus)
  let bestWordMatch: WordItem | null = null;
  let wordUnit: UnitItem | null = null;
  
  for (const unit of SMILE_UNITS) {
    for (const w of unit.words) {
      if (
        w.word.toLowerCase() === normQuery || 
        normalizeArabic(w.arabic) === normQueryAr ||
        w.word.toLowerCase().includes(normQuery) && normQuery.length > 3 ||
        normalizeArabic(w.arabic).includes(normQueryAr) && normQueryAr.length > 2
      ) {
        bestWordMatch = w;
        wordUnit = unit;
        break;
      }
    }
    if (bestWordMatch) break;
  }

  if (bestWordMatch && wordUnit) {
    result.matchedWords.push(bestWordMatch);
    result.reply = `✨ **Dictionary Entry: ${bestWordMatch.image} ${bestWordMatch.word}**\n\n` +
      `• **Arabic Meaning:** ${bestWordMatch.arabic}\n` +
      `• **Example Sentence from Textbook:**\n` +
      `  *"${bestWordMatch.example}"*\n\n` +
      `💡 This vocabulary item is a key word in **Unit ${bestWordMatch.unit}: ${wordUnit.title} (${wordUnit.arabicTitle})**!`;
    result.voiceText = `${bestWordMatch.word} means ${bestWordMatch.arabic}. For example: ${bestWordMatch.example}`;
    
    // Suggest other words from the same unit
    result.suggestions = wordUnit.words.filter(w => w.id !== bestWordMatch?.id).slice(0, 3).map(w => `${w.word}`);
    return result;
  }

  // 6. LESSON TEXT COMPREHENSIVE SEARCH (Scan all titles and text within lessons)
  let foundLessonMatch = false;
  for (const unit of SMILE_UNITS) {
    for (const lesson of unit.lessons) {
      const titleMatch = lesson.title.toLowerCase().includes(normQuery) || normalizeArabic(lesson.title).includes(normQueryAr);
      const songTextMatch = lesson.content.songText?.toLowerCase().includes(normQuery) || normalizeArabic(lesson.content.songText || "").includes(normQueryAr);
      
      let dialogueMatch = false;
      if (lesson.content.dialogue) {
        dialogueMatch = lesson.content.dialogue.some(d => 
          d.text.toLowerCase().includes(normQuery) || 
          normalizeArabic(d.text).includes(normQueryAr) ||
          d.speaker.toLowerCase().includes(normQuery)
        );
      }

      if (titleMatch || songTextMatch || dialogueMatch) {
        result.matchedLessons.push({ lesson, unitId: unit.id, unitTitle: unit.title });
        foundLessonMatch = true;
      }
    }
  }

  if (foundLessonMatch) {
    const primary = result.matchedLessons[0];
    let excerpt = "";
    if (primary.lesson.content.songText) {
      const lines = primary.lesson.content.songText.split("\n");
      const matchedLine = lines.find(l => l.toLowerCase().includes(normQuery) || normalizeArabic(l).includes(normQueryAr));
      if (matchedLine) {
        excerpt = `\n\n📖 **Excerpt from lesson:**\n> *"${matchedLine.trim()}"*`;
      }
    }

    result.reply = `🔍 **I found "${query}" in these lessons in your book:**\n\n` +
      result.matchedLessons.slice(0, 3).map(ml => `• **${ml.lesson.title}** (Unit ${ml.unitId}: ${ml.unitTitle})`).join("\n") +
      excerpt + 
      `\n\n💡 You can click these lessons in the book view list to read and listen to them!`;
    
    result.voiceText = `I found matches for ${query} in ${primary.lesson.title}.`;
    result.suggestions = ["Who is Osman Digna? 🗡️", "Explain Nafeer 🌱", "What is Unit 1 about? 🔬"];
    return result;
  }

  // 7. DEFAULT FALLBACK RESPONSE (Encouraging and helpful)
  result.reply = `😊 Sorry! I couldn't find an exact match for **"${query}"** in your Grade 10 textbook content.\n\n**But don't worry! Try searching for one of these topics from your syllabus:**\n` +
    `• Type **Osman Digna** or **Saadia** to learn about inspiring historical and traditional figures.\n` +
    `• Type **Nafeer** or **Solar Power** to explore interesting local themes.\n` +
    `• Type **Conditionals** or **Relative Pronouns** to learn grammar rules.\n` +
    `• Type **Garad** or **Heart** to explore health facts in your textbook.`;
  result.voiceText = "I couldn't find an exact match, but you can search for Osman Digna, Nafeer, or Conditionals!";
  result.suggestions = ["Who is Osman Digna? 🗡️", "Explain Nafeer 🌱", "Explain Conditionals 📝", "Solar Power in Sudan ☀️"];

  return result;
}
