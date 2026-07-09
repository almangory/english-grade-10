import { GrammarRule, GrammarQuizQuestion } from "./unit1to4";

export const grammarUnit9to12: Record<string, { rule: GrammarRule; quiz: GrammarQuizQuestion[] }> = {
  // UNIT 9: Wonderful Sudan
  "9-1": {
    rule: {
      title: "Past Passive for Historical Origins",
      titleAr: "المبني للمجهول في الماضي للأصول التاريخية ومسميات المدن",
      explanation: "We use the Past Simple Passive to describe how places were named, created, or discovered in historical times.",
      explanationAr: "نستخدم صيغة المبني للمجهول في زمن الماضي البسيط للتعبير عن تسمية الأماكن الجغرافية وتأسيسها قديماً.",
      formula: "Subject + was/were + Verb3 (Past Participle)",
      examples: [
        { en: "Kosti was named after a Greek merchant who lived there.", ar: "سُميت كوستي على اسم تاجر يوناني كان يعيش هناك." },
        { en: "The ancient city was built near the coastal harbour.", ar: "بُنيت المدينة القديمة بالقرب من الميناء الساحلي." }
      ]
    },
    quiz: [
      {
        question: "Port Sudan _______ built in 1905 to replace the old harbour of Suakin.",
        questionAr: "بورتسودان _______ بُنيت في عام 1905 لتحل محل ميناء سواكن القديم.",
        options: ["was", "were", "is", "been"],
        correctAnswer: "was",
        explanation: "Since 'Port Sudan' is singular and the action is in the past (1905), we use 'was'.",
        explanationAr: "بما أن بورتسودان مفرد والحدث تاريخي في الماضي (1905)، نختار الفعل المساعد الماضي المفرد للمجهول (was)."
      },
      {
        question: "Many towns in Sudan _______ named after respected local leaders.",
        questionAr: "العديد من البلدات في السودان _______ سُميت تيمناً بالقادة المحليين المحترمين.",
        options: ["is", "was", "were", "are"],
        correctAnswer: "were",
        explanation: "The subject 'Many towns' is plural, so we use 'were' in the past passive.",
        explanationAr: "الفاعل 'العديد من البلدات' جمع غير غائب، فنستخدم صيغة الجمع للمجهول في الماضي (were)."
      }
    ]
  },
  "9-2": {
    rule: {
      title: "Present Simple for Cultural Facts",
      titleAr: "المضارع البسيط للحقائق الثقافية واللغات",
      explanation: "We use the Present Simple to state enduring facts about national languages, daily habits, and cultural greetings.",
      explanationAr: "نستخدم زمن المضارع البسيط للتعبير عن الحقائق المستمرة والمستقرة مثل اللغات الرسمية، العادات الاجتماعية، والتحايا.",
      formula: "Subject + Verb / Verb-s\nSubject + greet + each other + by + Verb-ing",
      examples: [
        { en: "Almost everyone in Sudan speaks Arabic as their main language.", ar: "يتحدث الجميع في السودان تقريباً العربية كلغة أساسية." },
        { en: "Beja people greet each other by saying 'Khalaqo'.", ar: "يرحب شعب البجا ببعضهم البعض بقول 'خلاقو'." }
      ]
    },
    quiz: [
      {
        question: "The Nuba people _______ different beautiful dialects in Kordofan.",
        questionAr: "شعب النوبة _______ لهجات جميلة مختلفة في كردفان.",
        options: ["speak", "speaks", "speaking", "spoke"],
        correctAnswer: "speak",
        explanation: "Since 'The Nuba people' is a plural subject, we use the base present verb 'speak'.",
        explanationAr: "بما أن الفاعل 'شعب النوبة' جمع، نستخدم الفعل المضارع المجرد بدون إضافات (speak)."
      },
      {
        question: "In many states, people greet each other by _______ handshakes.",
        questionAr: "في العديد من الولايات، يرحب الناس ببعضهم البعض بـ _______ الأيدي (المصافحة).",
        options: ["exchanged", "exchanging", "exchange", "exchanges"],
        correctAnswer: "exchanging",
        explanation: "The preposition 'by' is followed by the gerund form 'exchanging' (-ing).",
        explanationAr: "حرف الجر 'by' يتبعه دائماً اسم المصدر المنتهي بـ (-ing) أي (exchanging)."
      }
    ]
  },
  "9-3": {
    rule: {
      title: "Past Simple for Ancient History",
      titleAr: "الماضي البسيط لتاريخ الملوك والحضارات القديمة",
      explanation: "We use the Past Simple with active action verbs to describe battles, decisions, and achievements of historical figures like King Piankhi.",
      explanationAr: "نستخدم الماضي البسيط مع أفعال الحركة لسرد الفتوحات الحربية وإنجازات ملوك العصور الغابرة.",
      formula: "Subject + Verb2 (took, marched, ruled, defeated)",
      examples: [
        { en: "King Piankhi ruled Kush and took a large army north to Egypt.", ar: "حكم الملك بعانخي كوش وقاد جيشاً كبيراً شمالاً إلى مصر." },
        { en: "The Sudanese soldiers got back their absolute independence.", ar: "استرد الجنود السودانيون استقلالهم المطلق." }
      ]
    },
    quiz: [
      {
        question: "King Piankhi _______ Egypt and united the Nile Valley under Kushite rule.",
        questionAr: "الملك بعانخي _______ مصر ووحد وادي النيل تحت حكم مملكة كوش.",
        options: ["conquers", "conquered", "conquering", "conquer"],
        correctAnswer: "conquered",
        explanation: "We use the regular Past Simple 'conquered' to describe King Piankhi's historical victory.",
        explanationAr: "نستخدم الفعل الماضي البسيط المنتظم (conquered) (فتح/غزا) لوصف نصر تاريخي قديم."
      },
      {
        question: "In ancient times, Sudanese kings _______ grand pyramids in Meroe.",
        questionAr: "في العصور القديمة، _______ الملوك السودانيون أهرامات مهيبة في مروي.",
        options: ["build", "built", "building", "has built"],
        correctAnswer: "built",
        explanation: "The past simple of the irregular verb 'build' is 'built'.",
        explanationAr: "التصريف الثاني للماضي البسيط من الفعل الشاذ 'build' (يبني) هو (built)."
      }
    ]
  },
  "9-4": {
    rule: {
      title: "Adjectival Participle Clauses in Architecture",
      titleAr: "جمل الوصف المعمارية باستخدام اسم الفاعل والمفعول",
      explanation: "We use adjectival participle clauses (e.g., 'located in', 'featuring a dome') to add descriptive details about buildings without starting a new sentence.",
      explanationAr: "نستخدم الجمل الوصفية بأسماء الفاعل والمفعول (مثل 'تقع في'، 'تتميز بقبة') لإضافة تفاصيل معمارية دون تكلف جمل مستقلة.",
      formula: "Building + located/situated + in + City\nBuilding + featuring/showing + Architectural Element",
      examples: [
        { en: "Al Neelain Mosque is located in Omdurman, featuring a giant glass dome.", ar: "يقع مسجد النيلين في أم درمان، ويتميز بقبة زجاجية عملاقة." },
        { en: "It was designed by an architect graduating from Khartoum University.", ar: "تم تصميمه بواسطة مهندس معماري متخرج من جامعة الخرطوم." }
      ]
    },
    quiz: [
      {
        question: "The historic museum, _______ in Khartoum, contains ancient royal gold.",
        questionAr: "المتحف التاريخي، _______ في الخرطوم، يحتوي على ذهب ملكي قديم.",
        options: ["locating", "located", "locate", "locates"],
        correctAnswer: "located",
        explanation: "We use the past participle adjective 'located' to mean 'which is located'.",
        explanationAr: "نستخدم اسم المفعول الوصفي (located) (الواقع/الموجود) لتوضيح مكان المتحف."
      },
      {
        question: "We visited a new library _______ a modern solar roof.",
        questionAr: "زرنا مكتبة جديدة _______ بسقف شمسي حديث.",
        options: ["featuring", "featured", "features", "feature"],
        correctAnswer: "featuring",
        explanation: "We use the active participle 'featuring' (-ing) to describe what the library shows or contains.",
        explanationAr: "نستخدم اسم الفاعل الوصفي (featuring) (تتميز بـ / تعرض) لوصف ما تحويه المكتبة."
      }
    ]
  },
  "9-5": {
    rule: {
      title: "Present Perfect Continuous (Has been producing)",
      titleAr: "المضارع المستمر التام (الحدث المستمر منذ الماضي للحاضر)",
      explanation: "We use the Present Perfect Continuous to show that an industrial or agricultural activity started in the past and has continued without stopping until today.",
      explanationAr: "نستخدم زمن المضارع المستمر التام لبيان أن نشاطاً صناعياً أو زراعياً بدأ في الماضي ومستمر دون انقطاع حتى اليوم.",
      formula: "Subject + has/have + been + Verb-ing + since (year) / for (duration)",
      examples: [
        { en: "Kenana has been producing sugar for more than thirty years.", ar: "تنتج شركة كنانة السكر منذ أكثر من ثلاثين عاماً (ولا تزال مستمرة)." },
        { en: "They have been working in the fields since sunrise.", ar: "هم يعملون في الحقول منذ شروق الشمس (ولا يزالون)." }
      ]
    },
    quiz: [
      {
        question: "The Kenana factory _______ sugar since it was opened in 1984.",
        questionAr: "مصنع كنانة _______ السكر منذ أن تم افتتاحه في عام 1984.",
        options: ["produces", "has been producing", "was produced", "producing"],
        correctAnswer: "has been producing",
        explanation: "We use 'has been producing' (Present Perfect Continuous) because the action started in 1984 and is still happening.",
        explanationAr: "نستخدم المضارع التام المستمر (has been producing) لأن المصنع بدأ الإنتاج في 1984 ولا يزال ينتج حتى الحاضر."
      },
      {
        question: "Sudanese farmers _______ cotton in the Gezira Scheme for many generations.",
        questionAr: "المزارعون السودانيون _______ القطن في مشروع الجزيرة لعدة أجيال متعاقبة.",
        options: ["have been growing", "has been growing", "growing", "grown"],
        correctAnswer: "have been growing",
        explanation: "Since 'farmers' is plural, we use 'have been growing' to describe the ongoing historical practice.",
        explanationAr: "بما أن الفاعل 'farmers' جمع، نستخدم صيغة الجمع للمستمر التام (have been growing)."
      }
    ]
  },
  "9-6": {
    rule: {
      title: "Clauses of Advantage and Disadvantage",
      titleAr: "صياغة جمل المزايا والعيوب وتناقض الحقائق",
      explanation: "We use specific noun phrases like 'advantage of' and 'disadvantage of' paired with contrast connectors to evaluate historical regimes or technologies.",
      explanationAr: "نستخدم تركيبات اسمية مثل (advantage of - ميزة لـ) و (disadvantage of - عيب لـ) مع روابط التناقض لتقييم الحقب التاريخية.",
      formula: "One advantage / disadvantage + of + Noun + was + Clause",
      examples: [
        { en: "One disadvantage of Ottoman rule was the very high taxes.", ar: "أحد عيوب الحكم العثماني كان الضرائب المرتفعة للغاية." },
        { en: "But there were some advantages, such as new trade roads.", ar: "ولكن كانت هناك بعض المزايا، مثل طرق التجارة الجديدة." }
      ]
    },
    quiz: [
      {
        question: "A major _______ of living near the river is the fertile soil for crops.",
        questionAr: "من المزايا الكبرى _______ للعيش بالقرب من النهر هي التربة الخصبة للمحاصيل.",
        options: ["disadvantage", "advantage", "problem", "obstacle"],
        correctAnswer: "advantage",
        explanation: "Fertile soil is positive, so it is an 'advantage' of living near the river.",
        explanationAr: "التربة الخصبة أمر إيجابي، لذا فهي ميزة (advantage) وليست عيباً."
      },
      {
        question: "One serious disadvantage of old trains was that they _______ a lot of coal pollution.",
        questionAr: "أحد العيوب الخطيرة للقطارات القديمة كان أنها _______ الكثير من التلوث بالفحم.",
        options: ["made", "make", "making", "are making"],
        correctAnswer: "made",
        explanation: "Since the statement is about the past ('was that...'), the verb must be in the past simple ('made').",
        explanationAr: "بما أن الحديث عن العيوب التاريخية في الماضي (was)، نستخدم الفعل في الماضي البسيط (made)."
      }
    ]
  },
  "9-7": {
    rule: {
      title: "Future Predictions and Future Passive",
      titleAr: "التوقعات المستقبلية والمبني للمجهول في المستقبل",
      explanation: "We use 'will' and 'won't' for future predictions, and 'will be + past participle' when describing what will be done by technology or robots.",
      explanationAr: "نستخدم (will) و (won't) للتوقعات المستقبلية، وصيغة المجهول (will be + التصريف الثالث) عند الحديث عما سينجز مستقبلاً بالتكنولوجيا.",
      formula: "Subject + will/won't + Verb (Base)\nSubject + will be + Verb3 (Past Participle)",
      examples: [
        { en: "In the future, I think we won't need petrol cars.", ar: "في المستقبل، أعتقد أننا لن نحتاج لسيارات البنزين." },
        { en: "In Future Sudan, many hard farming jobs will be done by robots.", ar: "في سودان المستقبل، العديد من الأعمال الزراعية الشاقة ستُنجز بواسطة الروبوتات." }
      ]
    },
    quiz: [
      {
        question: "I believe that solar energy _______ used in every Sudanese home by 2035.",
        questionAr: "أعتقد أن الطاقة الشمسية _______ تُستخدم في كل منزل سوداني بحلول عام 2035.",
        options: ["will be", "is", "was", "will been"],
        correctAnswer: "will be",
        explanation: "We use the Future Passive 'will be' + Verb3 ('used') to predict future technology deployment.",
        explanationAr: "نستخدم صيغة المستقبل للمجهول (will be) متبوعة بالتصريف الثالث للتنبؤ باستخدام التكنولوجيا."
      },
      {
        question: "With electric vehicles, our city air _______ cleaner than it is today.",
        questionAr: "مع المركبات الكهربائية، هواء مدينتنا _______ أنظف مما هو عليه اليوم.",
        options: ["will be", "is going", "would be", "will been"],
        correctAnswer: "will be",
        explanation: "We use 'will be' for a positive future prediction about city air quality.",
        explanationAr: "نستخدم صيغة المستقبل البسيط (will be) للتنبؤ بحالة جودة الهواء المستقبلية."
      }
    ]
  },
  "9-8": {
    rule: {
      title: "Participle Clauses of Association (Beginning with)",
      titleAr: "جمل الوصف الإضافية بأسماء الفاعل المتصلة",
      explanation: "We use active participle clauses like 'beginning with' or 'coming from' to give linguistic etymology of national words and places.",
      explanationAr: "نستخدم شبه جمل اسم الفاعل الحاضر (مثل 'تبدأ بـ'، 'تأتي من') لتوضيح أصول معاني أسماء المدن والقرى.",
      formula: "Noun + Verb-ing (beginning / coming / starting) + complement",
      examples: [
        { en: "There are many place names beginning with the letter 'Wad'.", ar: "هناك العديد من أسماء الأماكن التي تبدأ بكلمة 'ود'." },
        { en: "These Arabic names come from original historical tribes.", ar: "تأتي هذه الأسماء العربية من القبائل التاريخية الأصلية." }
      ]
    },
    quiz: [
      {
        question: "Sudan has many historical town names _______ with 'Abu' or 'Um'.",
        questionAr: "السودان لديه العديد من أسماء البلدات التاريخية _______ بـ 'أبو' أو 'أم'.",
        options: ["beginning", "begun", "begins", "began"],
        correctAnswer: "beginning",
        explanation: "We use the active participle 'beginning' to describe the names of towns directly.",
        explanationAr: "نستخدم اسم الفاعل الحاضر (beginning) (تبدأ بـ) لربط وتوصيف أسماء البلدات مباشرة."
      },
      {
        question: "Many beautiful words _______ from ancient Nubian languages are still spoken.",
        questionAr: "العديد من الكلمات الجميلة _______ من اللغات النوبية القديمة لا تزال منطوقة.",
        options: ["coming", "come", "comes", "came"],
        correctAnswer: "coming",
        explanation: "We use the active participle 'coming' to show the origin of the words in an adjectival clause.",
        explanationAr: "نستخدم اسم الفاعل (coming) (القادمة/المنحدرة من) لوصف أصل ومنشأ الكلمات."
      }
    ]
  },

  // UNIT 10: Health and Environment
  "10-1": {
    rule: {
      title: "As Soon As & Conditional Type 1",
      titleAr: "الرابط الزمني (As soon as - بمجرد أن) والشرطية الأولى",
      explanation: "We use 'As soon as' to show that a physical reaction or event occurs immediately when a condition is met in ecosystems.",
      explanationAr: "نستخدم الرابط الزمني (As soon as) للتعبير عن حدوث فوري وتلقائي لحدث بمجرد تحقق حدث آخر في البيئة.",
      formula: "As soon as + Subject + Present Simple, Subject + will + Verb (Base)",
      examples: [
        { en: "As soon as there is a big change, the ecosystem loses its balance.", ar: "بمجرد حدوث تغير كبير، يفقد النظام البيئي توازنه." },
        { en: "If we cut down trees, birds will lose their homes immediately.", ar: "إذا قطعنا الأشجار، ستفقد الطيور منازلها على الفور." }
      ]
    },
    quiz: [
      {
        question: "As soon as the rain _______, the desert sand turns beautifully green.",
        questionAr: "بمجرد أن _______ المطر، تتحول رمال الصحراء إلى بساط أخضر بديع.",
        options: ["falls", "fall", "will fall", "fell"],
        correctAnswer: "falls",
        explanation: "After 'as soon as', we use the Present Simple ('falls' for singular rain) to express a natural law.",
        explanationAr: "بعد التعبير 'as soon as'، نستخدم المضارع البسيط للمفرد (falls) لبيان الحقيقة الطبيعية الجارية."
      },
      {
        question: "If there are too many frogs in the pond, they _______ all the insects.",
        questionAr: "إذا زاد عدد الضفادع في البركة، فإنها _______ كل الحشرات.",
        options: ["will eat", "eat", "ate", "would eat"],
        correctAnswer: "will eat",
        explanation: "In Conditional Type 1, the main clause predicts future outcomes using 'will + base verb' ('will eat').",
        explanationAr: "في الجملة الشرطية الأولى، نستخدم صيغة المستقبل بـ (will eat) للتنبؤ بالنتيجة البيئية المترتبة."
      }
    ]
  },
  "10-2": {
    rule: {
      title: "First Conditional vs Second Conditional",
      titleAr: "الجمل الشرطية: الأولى (الواقعية) مقابل الثانية (الافتراضية)",
      explanation: "We use the First Conditional for real, likely scenarios in the present/future, and the Second Conditional for imaginary, hypothetical, or impossible situations.",
      explanationAr: "نستخدم الشرطية الأولى للمواقف الواقعية والممكنة، بينما نستخدم الشرطية الثانية للمواقف الخيالية أو الافتراضية غير الممكنة حالياً.",
      formula: "First: If + Present, will + Verb\nSecond: If + Past, would + Verb",
      examples: [
        { en: "If we don’t clean the river water, people can get sick.", ar: "إذا لم ننظف مياه النهر، يمكن أن يمرض الناس. (واقعي ومحتمل)" },
        { en: "If everyone had clean water, we could prevent many diseases.", ar: "لو كان لدى الجميع مياه نظيفة، لتمكنا من منع أمراض كثيرة. (خيالي/افتراضي)" }
      ]
    },
    quiz: [
      {
        question: "If you _______ dirty water from the canal, you will get very sick.",
        questionAr: "إذا _______ مياهاً ملوثة من القناة، فسوف تصاب بمرض شديد.",
        options: ["drink", "drank", "drinking", "will drink"],
        correctAnswer: "drink",
        explanation: "This is a real warning, so we use First Conditional present simple ('drink').",
        explanationAr: "هذا تحذير واقعي ومحتمل، لذا نستخدم الشرطية الأولى في المضارع البسيط (drink)."
      },
      {
        question: "If everyone _______ plastic bags, our streets would look much cleaner.",
        questionAr: "لو أن الجميع _______ عن استخدام الأكياس البلاستيكية، لبدت شوارعنا أنظف بكثير.",
        options: ["stopped", "stop", "stops", "will stop"],
        correctAnswer: "stopped",
        explanation: "The result clause has 'would look' (Second Conditional), so the 'If' clause must take the Past Simple ('stopped').",
        explanationAr: "جملة جواب الشرط تحوي 'would look' (شرطية ثانية)، لذا يجب صياغة فعل الشرط في الماضي البسيط (stopped)."
      }
    ]
  },
  "10-3": {
    rule: {
      title: "Second Conditional Passive & Gerunds",
      titleAr: "الشرطية الثانية للمجهول وصيغ اسم المصدر للامتناع",
      explanation: "We use 'would be + Verb3' in Second Conditional to show hypothetical results of actions like vaccines, and gerunds after prepositions to show how diseases spread.",
      explanationAr: "نستخدم تركيب (would be + التصريف الثالث) في الشرطية الثانية لبيان النتائج الافتراضية المرجوة كالتطعيم، والاسم المصدر لبيان انتشار الأمراض.",
      formula: "Subject + would be + Verb3 + if + Subject + Past Simple\nby / from + Verb-ing",
      examples: [
        { en: "Millions of people would be protected if they were vaccinated.", ar: "كان ملايين الناس سيحصلون على الحماية لو تم تطعيمهم." },
        { en: "You can stop flu spreading by washing your hands often.", ar: "يمكنك إيقاف انتشار الإنفلونزا بغسل يديك غالباً." }
      ]
    },
    quiz: [
      {
        question: "Diseases can be spread by _______ dirty cups and shared towels.",
        questionAr: "يمكن أن تنتشر الأمراض بـ _______ الأكواب المتسخة والمناشف المشتركة.",
        options: ["touching", "touch", "touched", "to touch"],
        correctAnswer: "touching",
        explanation: "The preposition 'by' is followed by the gerund 'touching' (-ing).",
        explanationAr: "حرف الجر الباء (by) يتبعه دائماً اسم المصدر المنتهي بـ (-ing) وهو هنا (touching)."
      },
      {
        question: "Many lives _______ saved if communities cleaned the water wells.",
        questionAr: "كانت الكثير من الأرواح _______ تُنقذ لو قامت المجتمعات بتنظيف آبار المياه.",
        options: ["would be", "will be", "were", "are"],
        correctAnswer: "would be",
        explanation: "In hypothetical Second Conditional passive, we use 'would be + Verb3' ('would be saved').",
        explanationAr: "في جواب الشرط الافتراضي للحالة الثانية مبني للمجهول، نستخدم الصيغة التركيبية (would be saved)."
      }
    ]
  },
  "10-4": {
    rule: {
      title: "Hypothetical Present with Second Conditional",
      titleAr: "الافتراض الحالي المستحيل باستخدام الحالة الشرطية الثانية",
      explanation: "We use the Second Conditional to contrast a current reality with a purely imaginary alternative.",
      explanationAr: "نستخدم الحالة الشرطية الثانية للمقارنة والمفارقة بين الواقع الفعلي والبديل الخيالي الافتراضي الحاضر.",
      formula: "If + Subject + Past Simple, Subject + would + Verb (Base)",
      examples: [
        { en: "If you had the flu, you would have a high temperature. (But you don't!)", ar: "لو كنت مصاباً بالإنفلونزا، لكانت حرارتك مرتفعة. (لكنها ليست كذلك!)" },
        { en: "If I felt sick, I would visit the school clinic.", ar: "لو كنت أشعر بالمرض، لزرتُ عيادة المدرسة." }
      ]
    },
    quiz: [
      {
        question: "If Salim _______ the flu, he would stay home in bed today.",
        questionAr: "لو كان سليم _______ بالإنفلونزا الحادة، لبقي في المنزل بالسرير اليوم.",
        options: ["has", "had", "have", "having"],
        correctAnswer: "had",
        explanation: "We use 'had' (Past Simple) in the 'If' clause to show a hypothetical present condition.",
        explanationAr: "نستخدم الماضي البسيط (had) في شق الشرط لبيان افتراض غير حقيقي وحال في الوقت الحالي."
      },
      {
        question: "If you had a cold, you _______ have a runny nose.",
        questionAr: "لو كنت مصاباً بنزلة برد، لـ _______ تعاني من سيلان الأنف.",
        options: ["will", "would", "shall", "won't"],
        correctAnswer: "would",
        explanation: "The imaginary outcome clause in Second Conditional takes 'would + base verb'.",
        explanationAr: "جواب الشرط في الحالة الافتراضية الثانية يأخذ الفعل المساعد للرغبة والنتيجة (would)."
      }
    ]
  },
  "10-5": {
    rule: {
      title: "Second Conditional for Serious Scenarios",
      titleAr: "الحالة الشرطية الثانية للقرارات والمواقف الصارمة",
      explanation: "We use Second Conditional to express strong hypothetical terms, such as giving up smoking or changing rules.",
      explanationAr: "نستخدم الحالة الثانية للتعبير عن سيناريوهات جادة وقرارات مصيرية افتراضية مثل الإقلاع عن التدخين أو سن الأنظمة.",
      formula: "If + Subject + Past Simple (gave up), Subject + would + Verb (let)",
      examples: [
        { en: "If someone gave up smoking, I would let him join our football team.", ar: "لو أن شخصاً ما أقلع عن التدخين، لسمحتُ له بالانضمام لفريقنا الرياضي." },
        { en: "Children often have health problems if their parents smoke.", ar: "يعاني الأطفال غالباً من مشاكل صحية إذا كان آباؤهم يدخنون. (حقيقة عامة)" }
      ]
    },
    quiz: [
      {
        question: "If my brother _______ up smoking, he would breathe much easier during running.",
        questionAr: "لو أن أخي _______ عن التدخين، لكان يتنفس بسهولة أكبر أثناء الجري.",
        options: ["give", "gave", "gives", "giving"],
        correctAnswer: "gave",
        explanation: "The past simple of 'give' is 'gave' for the hypothetical Second Conditional.",
        explanationAr: "التصريف الماضي من الفعل 'give' هو (gave) للتعبير عن شرط افتراضي في الحالة الثانية."
      },
      {
        question: "If smokers knew the real dangers, they _______ stop immediately.",
        questionAr: "لو عرف المدخنون الأخطار الحقيقية، لـ _______ توقفوا عن التدخين فوراً.",
        options: ["will", "would", "can", "shall"],
        correctAnswer: "would",
        explanation: "We use 'would' to indicate the hypothetical result of smokers knowing the truth.",
        explanationAr: "نستخدم الفعل المساعد (would) لبيان النتيجة الافتراضية المرجوة لو عرفوا الحقيقة."
      }
    ]
  },
  "10-6": {
    rule: {
      title: "Modals & Quantifiers for Health Advice",
      titleAr: "الأفعال الناقصة ومحددات الكمية للنصائح العلاجية الطبيعية",
      explanation: "We use 'should' and 'shouldn't' paired with precise quantifiers like 'a few' (countable) or 'too much' (uncountable) for safe herbal remedies.",
      explanationAr: "نستخدم (should) للنصيحة الطبية مدعومة بمحددات دقيقة مثل (a few) للقرون والأوراق و (too much) للجرعات الزائدة من السوائل.",
      formula: "should + Verb (Base) + a few + Plural Noun\nshouldn't + Verb (Base) + too much + Uncountable Noun",
      examples: [
        { en: "You should boil a few Moringa leaves in warm water.", ar: "ينبغي عليك غلي بضع أوراق من المورينجا في ماء دافئ." },
        { en: "You shouldn't drink too much herbal tea in one hour.", ar: "لا ينبغي عليك شرب الكثير من الشاي العشبي في ساعة واحدة." }
      ]
    },
    quiz: [
      {
        question: "You _______ boil a few ginger roots if you have a sore throat.",
        questionAr: "ينبغي _______ عليك غلي بضع جذور من الزنجبيل إذا كان حلقك يؤلمك.",
        options: ["should", "should to", "needing", "must to"],
        correctAnswer: "should",
        explanation: "We use 'should' to offer gentle medical advice for herbal treatment.",
        explanationAr: "نستخدم الفعل الناقص (should) لتقديم نصيحة علاجية طبيعية لطيفة ومفيدة."
      },
      {
        question: "Do not put _______ sugar in your herbal medicine; keep it healthy.",
        questionAr: "لا تضع _______ من السكر في دوائك العشبي؛ حافظ عليه صحياً.",
        options: ["too many", "too much", "a few", "fewer"],
        correctAnswer: "too much",
        explanation: "Sugar is uncountable, so we use 'too much' to indicate an unhealthy excess.",
        explanationAr: "السكر اسم غير معدود، لذا نستخدم عبارة الكثرة المفرطة (too much) للتعبير عن الزيادة الضارة."
      }
    ]
  },
  "10-7": {
    rule: {
      title: "Defining Relative Clauses for Environment",
      titleAr: "جمل الوصل التعريفية للحديث عن البيئة والتلوث",
      explanation: "We use relative pronouns like 'that' and 'which' to define the specific types of vehicles or pollutants that damage our world.",
      explanationAr: "نستخدم ضمائر الوصل التعريفية (that) و (which) لتعريف أنواع المركبات أو الملوثات المحددة التي تضر ببيئتنا.",
      formula: "Noun (Thing) + that/which + Verb",
      examples: [
        { en: "We should use cars that make less air pollution.", ar: "ينبغي علينا استخدام سيارات تصنع تلوثاً أقل للهواء." },
        { en: "Cigarette smoke is a dangerous pollutant which harms children.", ar: "دخان السجائر ملوث خطير يضر بالأطفال." }
      ]
    },
    quiz: [
      {
        question: "We must support green technologies _______ protect our rivers and canals.",
        questionAr: "يجب علينا دعم التقنيات الخضراء _______ تحمي أنهارنا وقنواتنا المائية.",
        options: ["who", "that", "whose", "where"],
        correctAnswer: "that",
        explanation: "We use the relative pronoun 'that' (or 'which') to refer to plural non-human technologies.",
        explanationAr: "نستخدم ضمير الوصل غير العاقل (that) للإشارة إلى التقنيات الخضراء والتعريف بها."
      },
      {
        question: "Electric cars run on battery power, _______ does not create toxic smoke.",
        questionAr: "تعمل السيارات الكهربائية على طاقة البطارية، _______ لا تصنع دخاناً ساماً.",
        options: ["which", "who", "where", "whose"],
        correctAnswer: "which",
        explanation: "We use 'which' to add descriptive information about battery power.",
        explanationAr: "نستخدم ضمير الوصل (which) لتعريف وشرح خصائص طاقة البطاريات النظيفة."
      }
    ]
  },
  "10-8": {
    rule: {
      title: "Hypothetical Subjunctive 'If I were president'",
      titleAr: "الماضي الافتراضي للتمني بـ 'If I were' (لو كنتُ مكانك / لو كنتُ رئيساً)",
      explanation: "We use 'If I were...' (subjunctive) instead of 'If I was...' to express purely imaginary wishes and policy ideas.",
      explanationAr: "نستخدم التركيب الافتراضي بصيغة التمني الجمعي (If I were...) (لو كنتُ...) للتعبير عن أماني ورغبات مستحيلة الحدوث حالياً.",
      formula: "If I were + Noun, I would + Verb (Base)",
      examples: [
        { en: "If I were president, I would change the road regulations.", ar: "لو كنتُ رئيساً، لغيرتُ أنظمة السير على الطرق." },
        { en: "If I were you, I would stop smoking immediately.", ar: "لو كنتُ مكانك، لأقلعتُ عن التدخين فوراً." }
      ]
    },
    quiz: [
      {
        question: "If I _______ you, I would drink Moringa tea every evening to stay active.",
        questionAr: "لو كنت _______ مكانك، لشربت شاي المورينجا كل مساء لأبقى نشيطاً.",
        options: ["am", "was", "were", "been"],
        correctAnswer: "were",
        explanation: "In formal subjunctive hypothetical English, we use 'were' with 'I' ('If I were you').",
        explanationAr: "في التعبير عن النصيحة والافتراض الخيالي، نستخدم الصيغة التمنية (were) مع الضمير I."
      },
      {
        question: "If my uncle were the health minister, he _______ build a new school clinic.",
        questionAr: "لو كان عمي وزيراً للصحة، لـ _______ بنى عيادة مدرسية جديدة.",
        options: ["will", "would", "shall", "can"],
        correctAnswer: "would",
        explanation: "The main clause of a subjunctive Second Conditional always takes the modal 'would'.",
        explanationAr: "جواب الشرط المرافق لصيغة التمني والشرطية الثانية يأخذ دائماً الفعل المساعد للنتيجة (would)."
      }
    ]
  },

  // UNIT 11: Amazing People, Animals and Places
  "11-1": {
    rule: {
      title: "Infinitive of Purpose (To + Verb)",
      titleAr: "مصدر الغاية لبيان الغرض والهدف والمسعى",
      explanation: "We use 'to + base verb' to explain why someone performs an action, travels, or pursues a career.",
      explanationAr: "نستخدم حرف الجر والمصدر (to + الفعل مجرد) لبيان علة وسَبب قيام الشخص بعمل ما أو اختيار مهنته.",
      formula: "Subject + verb + to + Verb (Base) + complement",
      examples: [
        { en: "My dream is to go to university to study medicine.", ar: "حلمي هو الذهاب إلى الجامعة لدراسة الطب." },
        { en: "He worked hard to help disabled children read and write.", ar: "لقد عمل بجد لمساعدة الأطفال ذوي الاحتياجات الخاصة على القراءة والكتابة." }
      ]
    },
    quiz: [
      {
        question: "Richard left his home country _______ English as a volunteer in Sudan.",
        questionAr: "غادر ريتشارد بلده الأصلي _______ الإنجليزية كمتطوع في السودان.",
        options: ["teaching", "to teach", "taught", "for teaching"],
        correctAnswer: "to teach",
        explanation: "We use the infinitive of purpose 'to teach' to explain why he left his country.",
        explanationAr: "نستخدم مصدر الغرض (to teach) (لكي يدرس/ليعلم) لتوضيح سبب مغادرته لبلده."
      },
      {
        question: "She saved a lot of money _______ a modern laptop for computer science studies.",
        questionAr: "ادخرت الكثير من المال _______ حاسوباً محمولاً حديثاً لدراسة علوم الكمبيوتر.",
        options: ["to buy", "buying", "bought", "buy"],
        correctAnswer: "to buy",
        explanation: "We use 'to buy' (infinitive of purpose) to express her objective for saving money.",
        explanationAr: "نستخدم أداة وبيان الغرض (to buy) (لتشتري) لبيان هدف الادخار المالي."
      }
    ]
  },
  "11-2": {
    rule: {
      title: "Passive Participles of Visual Range",
      titleAr: "جمل الوصف بأسماء المفعول للمدى البصري والمسافات",
      explanation: "We use past participles like 'seen from' or 'known as' to describe famous landmarks or world records from a distant perspective.",
      explanationAr: "نستخدم اسم المفعول في جمل الوصف المقتضبة (مثل 'يُرى من'، 'يُعرف بـ') لتوصيف المعالم الشهيرة من مسافات بعيدة.",
      formula: "Landmark + Past Participle (seen/built/known) + from + Distance",
      examples: [
        { en: "The Makkah Clock is 581 metres high, seen from far away.", ar: "يبلغ ارتفاع ساعة مكة 581 متراً، وتُرى من مسافات بعيدة للغاية." },
        { en: "Omdurman is a busy historic city, known for its camel market.", ar: "أم درمان مدينة تاريخية مزدحمة، وتشتهر بسوق الجمال الخاص بها." }
      ]
    },
    quiz: [
      {
        question: "The giant mosque dome is extremely tall, _______ from many kilometres away.",
        questionAr: "قبة المسجد العملاقة مرتفعة للغاية، و _______ من مسافة عدة كيلومترات.",
        options: ["seeing", "seen", "saw", "sees"],
        correctAnswer: "seen",
        explanation: "We use the past participle 'seen' to mean 'which can be seen' in an adjectival clause.",
        explanationAr: "نستخدم اسم المفعول (seen) (مريئاً/تُرى) للتعبير عن إمكانية الرؤية من مسافة بعيدة."
      },
      {
        question: "He is an amazing linguist _______ as a polyglot because he speaks 18 languages.",
        questionAr: "إنه لغوي مذهل _______ بـ 'متعدد اللغات' لأنه يتحدث 18 لغة مختلفة.",
        options: ["knowing", "known", "knows", "knew"],
        correctAnswer: "known",
        explanation: "We use the past participle 'known' in the descriptive phrase 'known as'.",
        explanationAr: "نستخدم التعبير وصيغة المفعول (known) في التركيب الوصفي الشهير (known as) (المعروف بـ)."
      }
    ]
  },
  "11-3": {
    rule: {
      title: "Past Passive for Historic Monuments",
      titleAr: "المبني للمجهول في الماضي للصروح والمعالم التاريخية",
      explanation: "We use 'was/were built' or 'was/were used to' to explain the construction and purpose of ancient world wonders.",
      explanationAr: "نستخدم (was/were built - بُنيت) و (was/were used to - كانت تستخدم لـ) للحديث عن تشييد معالم العالم القديم.",
      formula: "Monument + was/were + Verb3 + to + Verb (Base)",
      examples: [
        { en: "The Alexandria Lighthouse was built to help sailors see rocks at night.", ar: "بُنيت منارة الإسكندرية لمساعدة البحارة على رؤية الصخور ليلاً." },
        { en: "The giant glass mirror was used to set fire to enemy ships.", ar: "كانت المرآة الزجاجية العملاقة تُستخدم لإشعال النيران في سفن الأعداء." }
      ]
    },
    quiz: [
      {
        question: "The grand stone monument of Stonehenge _______ built around 5,000 years ago.",
        questionAr: "أثر ستونهنج الحجري المهيب _______ بُني قبل حوالي 5,000 عام.",
        options: ["was", "were", "is", "been"],
        correctAnswer: "was",
        explanation: "Since Stonehenge is a singular monument and the action was in the past, we use 'was'.",
        explanationAr: "أثر ستونهنج مفرد غائب، وفي الماضي التاريخي نستخدم الفعل المساعد المجهول المفرد (was)."
      },
      {
        question: "In the past, these ancient mirrors _______ used to reflect light to ships.",
        questionAr: "في الماضي، كانت هذه المرايا القديمة _______ تُستخدم لتعكس الضوء للسفن.",
        options: ["was", "were", "is", "are"],
        correctAnswer: "were",
        explanation: "The subject 'mirrors' is plural, so we use the auxiliary past passive 'were'.",
        explanationAr: "الفاعل 'mirrors' (المرايا) جمع، لذا نستخدم الفعل المساعد الماضي للمجهول جمع (were)."
      }
    ]
  },
  "11-4": {
    rule: {
      title: "Ability Modals for Animal Behaviour",
      titleAr: "الأفعال الناقصة للقدرة والسلوكيات الحيوانية المدهشة",
      explanation: "We use 'can' to state current biological abilities and talents of amazing animals like parrots or dolphins.",
      explanationAr: "نستخدم الفعل الناقص (can) للتعبير عن القدرات البيولوجية الطبيعية والمواهب التي تتميز بها الحيوانات المدهشة.",
      formula: "Animal (Subject) + can + Verb (Base)",
      examples: [
        { en: "Parrots can mimic every single word I say!", ar: "تستطيع الببغاوات تقليد كل كلمة أقولها تماماً!" },
        { en: "Kangaroos can hop high and carry babies in their pouch.", ar: "تستطيع الكناغر القفز عالياً وحمل صغارها في الجيب." }
      ]
    },
    quiz: [
      {
        question: "My clever parrot _______ mimic sentences when he is happy.",
        questionAr: "ببغائي الذكي _______ يقلد الجمل عندما يكون سعيداً ومبتهجاً.",
        options: ["can", "should to", "needing", "ought"],
        correctAnswer: "can",
        explanation: "We use 'can' to express the biological ability of the parrot.",
        explanationAr: "نستخدم فعل القدرة الطبيعية الحاضرة (can) لبيان قدرة الببغاء على المحاكاة."
      },
      {
        question: "Scorpions are dangerous; they _______ sting people with their tails.",
        questionAr: "العقارب خطيرة؛ يمكنها أن _______ تلدغ الناس بذيلها السام.",
        options: ["should to", "need", "can", "must to"],
        correctAnswer: "can",
        explanation: "We use 'can' to show the physical potential or danger of the scorpion's tail.",
        explanationAr: "نستخدم (can) للتعبير عن الإمكانية والقدرة الجسدية لسلوك العقرب الخطير."
      }
    ]
  },
  "11-5": {
    rule: {
      title: "Double Comparatives (The more..., the more...)",
      titleAr: "المقارنة المزدوجة المتناسبة (كلما... كلما...)",
      explanation: "We use the double comparative structure 'the + comparative, the + comparative' to show that two qualities increase or decrease in proportion to each other.",
      explanationAr: "نستخدم صيغة المقارنة المزدوجة (the + صفة مقارنة، the + صفة مقارنة) للتعبير عن التناسب الطردي بين أمرين.",
      formula: "The + Comparative + Clause 1, the + Comparative + Clause 2",
      examples: [
        { en: "The more he talked to me, the more I liked his wise words.", ar: "كلما تحدث إلي أكثر، كلما أعجبتني كلماته الحكيمة أكثر." },
        { en: "The higher you climb Mount Everest, the colder the air becomes.", ar: "كلما تسلقت جبل إيفرست لأعلى، كلما أصبح الهواء أكثر برودة." }
      ]
    },
    quiz: [
      {
        question: "The older a person becomes, _______ wisdom they usually have.",
        questionAr: "كلما كبر المرء في السن، _______ حكمة نالها في العادة.",
        options: ["the more", "more", "the most", "most"],
        correctAnswer: "the more",
        explanation: "The double comparative pattern requires 'the more' to match the first clause 'The older...'.",
        explanationAr: "يتطلب هيكل المقارنة المتناسبة المزدوجة استخدام الأداة (the more) لتطابق الشق الأول 'The older'."
      },
      {
        question: "The more you practice spelling English words, the _______ your writing becomes.",
        questionAr: "كلما تدربت على تهجئة الكلمات الإنجليزية أكثر، كلما _______ كتابتك.",
        options: ["good", "better", "best", "the better"],
        correctAnswer: "better",
        explanation: "We complete the comparative pattern 'the better your writing becomes' (with 'better' as the comparative of 'good').",
        explanationAr: "نكمل الصياغة بالتصريف المقارن من صفة جيد وهو (better) لتصبح (the better...)."
      }
    ]
  },
  "11-6": {
    rule: {
      title: "Present Simple & 'Go + Verb-ing' for Routine Activities",
      titleAr: "المضارع البسيط والتركيب 'Go + الفعل-ing' للأنشطة الروتينية",
      explanation: "We use 'go + verb-ing' to describe recreational and outdoor activities like swimming, fishing, or shopping that we do regularly.",
      explanationAr: "نستخدم الصيغة التركيبية (go + فعل منتهي بـ -ing) لوصف الأنشطة الترفيهية والخارجية الروتينية مثل السباحة أو الصيد.",
      formula: "Subject + go / goes + Verb-ing",
      examples: [
        { en: "My family spends time outdoors; we often go swimming in the lake.", ar: "تقضي عائلتي وقتها في الخارج؛ نحن غالباً ما نذهب للسباحة في البحيرة." },
        { en: "Every winter, many visitors go shopping in Port Sudan festival.", ar: "في كل شتاء، يذهب الكثير من الزوار للتسوق في مهرجان بورتسودان." }
      ]
    },
    quiz: [
      {
        question: "During hot holidays, children in the village often go _______ in the river.",
        questionAr: "خلال العطلات الحارة، غالباً ما يذهب الأطفال في القرية لـ _______ في النهر.",
        options: ["swim", "swimming", "swam", "swimmer"],
        correctAnswer: "swimming",
        explanation: "After the action verb 'go', we use the gerund 'swimming' (-ing) to name the sport activity.",
        explanationAr: "بعد فعل الحركة (go)، نستخدم اسم النشاط الرياضي والترفهي منتهياً بـ -ing وهو (swimming)."
      },
      {
        question: "Selma and her grandmother go _______ fresh vegetables in Kassala market.",
        questionAr: "تذهب سلمى وجدتها لـ _______ الخضراوات الطازجة في سوق كسلا.",
        options: ["buying", "buy", "bought", "to buying"],
        correctAnswer: "buying",
        explanation: "The combination 'go buying' (or 'go shopping' for groceries) uses the verb-ing after 'go'.",
        explanationAr: "بعد الفعل 'go'، نضع اسم المصدر (buying) (للذهاب للشراء والتبضع)."
      }
    ]
  },
  "11-7": {
    rule: {
      title: "Past Simple for Biographical Events",
      titleAr: "الماضي البسيط لسرد السير الذاتية والأدبية",
      explanation: "We use a chain of Past Simple verbs to describe key completed milestones in a writer's or historical person's life.",
      explanationAr: "نستخدم سلسلة متتابعة من الأفعال في الماضي البسيط لسرد المحطات والمفاصل الحياتية التاريخية للشخصيات والأدباء.",
      formula: "Subject + born (was born) + started + published + married",
      examples: [
        { en: "Charlotte Bronte was born in 1816 and started writing poetry as a child.", ar: "وُلدت شارلوت برونتي عام 1816 وبدأت كتابة الشعر وهي طفلة." },
        { en: "She published her famous novel Jane Eyre under a pen name.", ar: "نشرت روايتها الشهيرة جين آير تحت اسم مستعار." }
      ]
    },
    quiz: [
      {
        question: "The famous novelist Charlotte Bronte _______ in the north of England in 1816.",
        questionAr: "الروائية الشهيرة شارلوت برونتي _______ في شمال إنجلترا عام 1816.",
        options: ["born", "was born", "is born", "were born"],
        correctAnswer: "was born",
        explanation: "We use 'was born' to state a historical birth event for a singular person.",
        explanationAr: "للحديث عن الولادة التاريخية لشخصية مفردة، نستخدم الصيغة المبنية للمجهول في الماضي (was born)."
      },
      {
        question: "She _______ her most successful novel 'Jane Eyre' in the year 1847.",
        questionAr: "هي _______ روايتها الأكثر نجاحاً 'جين آير' في عام 1847.",
        options: ["publish", "publishes", "published", "publishing"],
        correctAnswer: "published",
        explanation: "We use the regular Past Simple 'published' to describe a finished historical action with a date (1847).",
        explanationAr: "نستخدم الفعل الماضي البسيط المنتظم (published) لوصف حدث نشر الرواية المكتمل في عام 1847."
      }
    ]
  },
  "11-8": {
    rule: {
      title: "Wh- Indirect Clauses with Past Passive",
      titleAr: "جمل التساؤل والتعجب غير المباشرة بـ (wonder how) والمجهول",
      explanation: "We use the phrase 'wonder how/why' followed by a clause containing a past passive verb to express amazement about ancient technology.",
      explanationAr: "نستخدم التعبير (wonder how/why - يتساءل كيف) متبوعاً بجملة مبنية للمجهول في الماضي للتعبير عن الدهشة من إنجازات البناء القديمة.",
      formula: "Subject + wonder + how + Subject + was/were + Verb3 (Past Participle)",
      examples: [
        { en: "People wonder how such big stones were brought to Stonehenge.", ar: "يتساءل الناس كيف جُلبت هذه الحجارة الكبيرة إلى ستونهنج." },
        { en: "We wonder why the ancient monuments were destroyed.", ar: "نتساءل لماذا دُمرت المعالم الأثرية القديمة." }
      ]
    },
    quiz: [
      {
        question: "Modern scientists still wonder how the giant pyramids _______ built by early peoples.",
        questionAr: "لا يزال العلماء المعاصرون يتساءلون كيف _______ بناء الأهرامات الضخمة بواسطة الشعوب القديمة.",
        options: ["was", "were", "is", "are"],
        correctAnswer: "were",
        explanation: "The subject 'pyramids' is plural and the action was in the past, so we use 'were'.",
        explanationAr: "الفاعل 'الأهرامات' جمع والحدث تاريخي قديم، لذا نستخدم الفعل المساعد الماضي المجهول للجمع (were)."
      },
      {
        question: "Visitors wonder how these heavy gold rings _______ crafted by hand without machines.",
        questionAr: "يتساءل الزوار كيف _______ صياغة هذه الخواتم الذهبية الثقيلة يدوياً دون آلات.",
        options: ["was", "were", "is", "are"],
        correctAnswer: "were",
        explanation: "Since 'rings' is plural, we use 'were' to complete the passive voice structure.",
        explanationAr: "بما أن الفاعل 'الخواتم' (rings) جمع، نستخدم الفعل المساعد الجمع للمجهول في الماضي (were)."
      }
    ]
  },

  // UNIT 12: Finishing Up
  "12-1": {
    rule: {
      title: "Past Habits with 'Used to dress'",
      titleAr: "العادات السلوكية واللباس في الماضي بـ 'Used to'",
      explanation: "We use 'used to' to contrast actions we repeated in childhood with our current adult lifestyle.",
      explanationAr: "نستخدم (used to) (اعتاد على) للمقارنة والربط بين الأنشطة والسلوكيات التي كررناها في طفولتنا وحياتنا الحالية.",
      formula: "Subject + used to + Verb (Base) + complement",
      examples: [
        { en: "We used to dress the same when we were very young.", ar: "اعتدنا أن نرتدي ملابس متماثلة عندما كنا صغيرين جداً." },
        { en: "I used to have twin passions for reading and drawing.", ar: "اعتاد أن يكون لدي شغف ثنائي بالقراءة والرسم." }
      ]
    },
    quiz: [
      {
        question: "My best friend and I _______ walk to basic school together every day.",
        questionAr: "أنا وصديقي المفضل _______ نذهب سيراً على الأقدام للمدرسة الأساسية معاً كل يوم.",
        options: ["used to", "would to", "are used to", "use to"],
        correctAnswer: "used to",
        explanation: "We use 'used to' to express our regular, past childhood habit.",
        explanationAr: "نستخدم التعبير (used to) للتعبير عن العادة والسلوك المنتظم في طفولتنا."
      },
      {
        question: "Doha and Mona _______ be angry with each other, but now they are best friends.",
        questionAr: "ضحى ومنى _______ تكونان غاضبتين من بعضهما، لكنهما الآن أعز صديقتين.",
        options: ["used to", "would", "are", "using to"],
        correctAnswer: "used to",
        explanation: "Since 'be' is a state verb, we must use 'used to' rather than 'would' to describe a past state.",
        explanationAr: "بما أن 'be' (يكون) فعل حالة وليس حركة، فيجب استخدام (used to) وليس would."
      }
    ]
  },
  "12-2": {
    rule: {
      title: "Comparatives & Time Clauses of Trust",
      titleAr: "جمل التفضيل والظروف الزمنية للأمانة وحفظ المال",
      explanation: "We use comparative structures with 'when' time clauses to describe general wisdom and moral outcomes.",
      explanationAr: "نستخدم تراكيب المقارنة مع جمل التتابع الزمني بـ 'when' لصياغة الحكم الأخلاقية والأمانة المالية.",
      formula: "Subject + had + Comparative (more... than) + noun\nWhen + Subject + Present, Subject + will + Verb",
      examples: [
        { en: "The old man had more money than he needed.", ar: "كان لدى الرجل العجوز مال أكثر مما يحتاجه." },
        { en: "When you pay it back, you will find trust again.", ar: "عندما تقوم برد الأمانة، ستجد الثقة والتقدير مجدداً." }
      ]
    },
    quiz: [
      {
        question: "A honest merchant always gives back _______ money than he was borrowed.",
        questionAr: "التاجر الأمين دائماً يعيد مالاً _______ مما اقترضه.",
        options: ["more", "most", "many", "as much"],
        correctAnswer: "more",
        explanation: "The presence of 'than' requires the comparative word 'more'.",
        explanationAr: "وجود حرف المقارنة (than) (من) يستوجب استخدام صيغة الزيادة (more) (أكثر)."
      },
      {
        question: "When you _______ the borrow money, the community will trust you.",
        questionAr: "عندما _______ المال المقترض، سيثق بك المجتمع بأكمله.",
        options: ["return", "returned", "will return", "returning"],
        correctAnswer: "return",
        explanation: "In time clauses with 'when' referring to the future, we use the Present Simple ('return').",
        explanationAr: "في جمل التتابع الزمني بـ 'when' التي تشير للمستقبل، نستخدم المضارع البسيط (return)."
      }
    ]
  },
  "12-3": {
    rule: {
      title: "Verbs of Perception with Bare Infinitive",
      titleAr: "أفعال الإدراك والحواس متبوعة بالمصدر المجرد",
      explanation: "We use verbs of sensory perception (hear, feel, see) followed by an object and a bare infinitive (verb without 'to') to describe witnessing an entire action.",
      explanationAr: "نستخدم أفعال الإدراك الحسي (hear - يسمع، feel - يشعر) متبوعة بمفعول به ومصدر مجرد (بدون to) لوصف مشاهدة حدث كامل.",
      formula: "Subject + hear/feel/see + Object + Verb (Base)",
      examples: [
        { en: "We can hear our heart pump blood around our body.", ar: "يمكننا سماع قلوبنا تضخ الدم في جميع أنحاء أجسادنا." },
        { en: "I can feel my lungs expand when I breathe deep.", ar: "يمكنني الشعور برئتي تتمددان عندما أتنفس بعمق." }
      ]
    },
    quiz: [
      {
        question: "I can feel myself _______ with happiness when my spelling is perfect.",
        questionAr: "يمكنني أن أشعر بنفسي _______ من السعادة عندما تكون تهجئتي مثالية.",
        options: ["smile", "to smile", "smiles", "smiled"],
        correctAnswer: "smile",
        explanation: "The sensory verb 'feel' followed by the object 'myself' takes the bare infinitive 'smile'.",
        explanationAr: "فعل الإدراك الحسي 'feel' متبوعاً بمفعوله يتطلب مصدراً مجرداً بدون إضافات وهو (smile)."
      },
      {
        question: "Did you hear the doctor _______ about the amazing brain controls?",
        questionAr: "هل سمعت الطبيب _______ عن التحكم المذهل للدماغ؟",
        options: ["speak", "to speak", "speaks", "spoke"],
        correctAnswer: "speak",
        explanation: "After perception verb 'hear' + object 'the doctor', we use the bare infinitive 'speak'.",
        explanationAr: "بعد فعل الإدراك 'hear' ومفعوله الطبيب، نضع مصدر الفعل مجرداً (speak)."
      }
    ]
  },
  "12-4": {
    rule: {
      title: "Present Perfect for Life Experiences",
      titleAr: "المضارع التام للتعبير عن تجارب الحياة ومرات تكرارها",
      explanation: "We use the Present Perfect to state how many times we have visited a place or experienced something in our lives up to the present.",
      explanationAr: "نستخدم زمن المضارع التام للتعبير عن تجارب وخبرات الحياة وعدد مرات تكرار حدوثها حتى الوقت الحالي.",
      formula: "Subject + have/has + Verb3 (Past Participle) + Number of times",
      examples: [
        { en: "I have visited Sudan three times during the holidays.", ar: "لقد زرتُ السودان ثلاث مرات خلال العطلات." },
        { en: "She has travelled to Kenya twice with her family.", ar: "لقد سافرتْ إلى كينيا مرتين اثنتين مع عائلتها." }
      ]
    },
    quiz: [
      {
        question: "Richard _______ many amazing places in Sudan since he arrived.",
        questionAr: "ريتشارد _______ العديد من الأماكن المذهلة في السودان منذ وصوله.",
        options: ["has visited", "visited", "visiting", "is visiting"],
        correctAnswer: "has visited",
        explanation: "We use 'has visited' (Present Perfect) because the experience is connected to his ongoing stay since arrival.",
        explanationAr: "نستخدم المضارع التام (has visited) لربط زيارته وتجربته بفترة إقامته الممتدة منذ وصوله."
      },
      {
        question: "I have _______ to Port Sudan twice to see the coral reefs.",
        questionAr: "لقد _______ إلى بورتسودان مرتين اثنتين لرؤية الشعاب المرجانية.",
        options: ["go", "gone", "went", "going"],
        correctAnswer: "gone",
        explanation: "The Present Perfect helper 'have' requires the past participle 'gone'.",
        explanationAr: "الفعل المساعد للمضارع التام (have) يتطلب إلحاق التصريف الثالث للفعل وهو (gone)."
      }
    ]
  },
  "12-5": {
    rule: {
      title: "Past Habits & Wh- Questions for Logic Puzzles",
      titleAr: "العادات السلوكية وأسئلة الاستفهام لحل الألغاز المنطقية",
      explanation: "We use Wh- question words (What, How, When) combined with auxiliary verbs to solve logic puzzles about characters like Ohaj.",
      explanationAr: "نستخدم أدوات الاستفهام الاستفسارية (What, How, When) مدمجة مع الأفعال المساعدة لحل وتحليل الألغاز المنطقية.",
      formula: "Wh- Word + did/can + Subject + Verb (Base)?",
      examples: [
        { en: "Ohaj used to be a camel trader in Kassala.", ar: "اعتاد أوهج أن يكون تاجر جمال في كسلا." },
        { en: "How can the farmer get the goat and grass across the river safely?", ar: "كيف يستطيع المزارع نقل الماعز والعشب عبر النهر بأمان؟" }
      ]
    },
    quiz: [
      {
        question: "What time _______ Ohaj leave his house with his hungry goat?",
        questionAr: "في أي وقت _______ أوهج غادر منزله مع ماعزه الجائعة؟",
        options: ["did", "does", "do", "done"],
        correctAnswer: "did",
        explanation: "For a past question about a completed action, we use the helping verb 'did'.",
        explanationAr: "لصياغة سؤال في الماضي عن عمل مكتمل وانتهى، نستخدم الفعل المساعد للماضي البسيط (did)."
      },
      {
        question: "How _______ the farmer cross the river safely without losing his crops?",
        questionAr: "كيف _______ يستطيع المزارع عبور النهر بأمان دون خسارة محاصيله؟",
        options: ["can", "should to", "needing", "ought"],
        correctAnswer: "can",
        explanation: "We use 'can' to ask about physical capability and solution in the river crossing puzzle.",
        explanationAr: "نستخدم فعل القدرة (can) للتساؤل عن القدرة والسبيل الممكن لحل اللغز."
      }
    ]
  },
  "12-6": {
    rule: {
      title: "Present Perfect for National Statistics & Comparison",
      titleAr: "المضارع التام لإحصاءات نمو الدولة والمقارنات السلبية",
      explanation: "We use the Present Perfect (has/have + Verb3) to describe national economic changes, and negative equatives to contrast materials.",
      explanationAr: "نستخدم زمن المضارع التام لوصف المتغيرات الاقتصادية والإحصائية للبلاد، والتساوي السلبي للمقارنة بين الصادرات.",
      formula: "Subject + has/have + increased/decreased + by + Percentage\nnot as + Adjective + as + Object",
      examples: [
        { en: "Sudan has increased its agricultural exports during the last ten years.", ar: "لقد زاد السودان صادراته الزراعية خلال السنوات العشر الماضية." },
        { en: "Machinery is not as heavy as mineral products in this port.", ar: "الآلات ليست بنفس ثقل المنتجات المعدنية في هذا الميناء." }
      ]
    },
    quiz: [
      {
        question: "Sudan _______ its exports of sesame by more than 50% recently.",
        questionAr: "لقد _______ السودان صادراته من السمسم بأكثر من 50% مؤخراً.",
        options: ["has increased", "have increased", "increase", "increasing"],
        correctAnswer: "has increased",
        explanation: "Since 'Sudan' is a singular country, we use 'has increased' in the present perfect.",
        explanationAr: "بما أن السودان فاعل مفرد، نستخدم الفعل المضارع التام المناسب للمفرد (has increased)."
      },
      {
        question: "The camel export is not _______ large _______ the sheep trade in Sudan.",
        questionAr: "تصدير الجمال ليس _______ ضخامة _______ تجارة الأغنام في السودان.",
        options: ["as / as", "so / that", "more / than", "too / to"],
        correctAnswer: "as / as",
        explanation: "For negative equative comparison, we use the pairing 'as... as' ('not as large as').",
        explanationAr: "للتعبير عن المقارنة المتساوية السلبية، نستخدم الرابط المزدوج المتطابق (as ... as)."
      }
    ]
  },
  "12-7": {
    rule: {
      title: "Second Conditional for Environmental Future",
      titleAr: "الحالة الشرطية الثانية للتطلع والتحسين البيئي الافتراضي",
      explanation: "We use the Second Conditional (If + Past Simple, would + base verb) to describe how the air and rivers would improve if we changed our technology.",
      explanationAr: "نستخدم الحالة الشرطية الثانية لوصف كيف سيتحسن نقاء الهواء والأنهار في حال غيرنا تكنولوجياتنا الحالية افتراضياً.",
      formula: "If + Subject + Past Simple, Subject + would be + Adjective",
      examples: [
        { en: "If we stopped putting dangerous chemicals, our air would be cleaner.", ar: "لو توقفنا عن وضع الكيماويات الخطيرة، لكان هواؤنا أكثر نقاءً." },
        { en: "Solar panels would save energy if we installed them on school roofs.", ar: "لَوفّرت الألواح الشمسية الطاقة لو قمنا بتركيبها على أسطح المدارس." }
      ]
    },
    quiz: [
      {
        question: "If we _______ electric cars, our city streets would be much quieter.",
        questionAr: "لو _______ السيارات الكهربائية، لكانت شوارع مدينتنا أكثر هدوءاً بكثير.",
        options: ["used", "use", "will use", "using"],
        correctAnswer: "used",
        explanation: "The main clause has 'would be' (Second Conditional), so the 'If' clause must take the Past Simple 'used'.",
        explanationAr: "جملة جواب الشرط تحوي 'would be' (شرطية ثانية)، لذا يجب صياغة فعل الشرط في الماضي البسيط (used)."
      },
      {
        question: "If we protected our local environment, Sudan _______ a paradise for future generations.",
        questionAr: "لو قمنا بحماية بيئتنا المحلية، لـ _______ السودان جنة للأجيال القادمة.",
        options: ["would become", "will become", "becomes", "became"],
        correctAnswer: "would become",
        explanation: "We use 'would become' to show the hypothetical result of protecting the environment in the Second Conditional.",
        explanationAr: "نستخدم الفعل المساعد (would become) لبيان النتيجة الافتراضية المترتبة في الحالة الشرطية الثانية."
      }
    ]
  },
  "12-8": {
    rule: {
      title: "Modals of Future Possibility (Might & Will)",
      titleAr: "أفعال الاحتمالية والمخطط اللغوي للمستقبل (Might و Will)",
      explanation: "We use 'might' to express a slight or uncertain possibility for the future, and 'will' or 'want to' for definite plans.",
      explanationAr: "نستخدم الفعل الناقص (might) (قد/ربما) للتعبير عن احتمالية ضعيفة أو غير مؤكدة للمستقبل، و (will) للخطط الجازمة.",
      formula: "Subject + might / will + Verb (Base)",
      examples: [
        { en: "I might play some spelling games tonight, but I'm not sure.", ar: "ربما ألعب بعض ألعاب التهجئة الليلة، ولكنني لست متأكداً." },
        { en: "I think I’ll read my new English books tomorrow.", ar: "أعتقد أنني سأقرأ كتبي الإنجليزية الجديدة غداً." }
      ]
    },
    quiz: [
      {
        question: "Mona isn't sure about her evening plans; she _______ practice her listening skills on the computer.",
        questionAr: "منى ليست متأكدة من خططها المسائية؛ هي _______ تتدرب على مهارات الاستماع بالكمبيوتر.",
        options: ["might", "will", "must", "want to"],
        correctAnswer: "might",
        explanation: "Because she 'isn't sure', we use the modal of weak possibility 'might'.",
        explanationAr: "بما أنها غير متأكدة (not sure)، نستخدم فعل الاحتمالية الضعيفة وغير الجازمة (might) (ربما)."
      },
      {
        question: "Tomorrow is Saturday. I _______ study computer engineering lessons all day.",
        questionAr: "غداً السبت. أنا _______ أدرس دروس هندسة الكمبيوتر طوال اليوم.",
        options: ["will", "might to", "wanting", "would be"],
        correctAnswer: "will",
        explanation: "For a definite planned action on Saturday, we use 'will' (or 'am going to').",
        explanationAr: "للحدث المخطط له والواثق من حدوثه يوم السبت، نستخدم الفعل المساعد الجازم (will)."
      }
    ]
  }
};
