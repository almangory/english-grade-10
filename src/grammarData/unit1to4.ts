export interface GrammarRule {
  title: string;
  titleAr: string;
  explanation: string;
  explanationAr: string;
  formula?: string;
  examples: Array<{ en: string; ar: string }>;
}

export interface GrammarQuizQuestion {
  question: string;
  questionAr: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  explanationAr: string;
}

export const grammarUnit1to4: Record<string, { rule: GrammarRule; quiz: GrammarQuizQuestion[] }> = {
  // UNIT 1: English is Everywhere
  "1-1": {
    rule: {
      title: "Past Simple & Past Continuous for Holidays",
      titleAr: "الماضي البسيط والماضي المستمر لوصف العطلة",
      explanation: "We use the Past Simple to describe completed holiday actions and Past Continuous to describe ongoing actions during the holiday.",
      explanationAr: "نستخدم الماضي البسيط لوصف أحداث مكتملة في الماضي، والماضي المستمر لوصف أحداث مستمرة واستغرقت وقتاً خلال عطلتك.",
      formula: "Past Simple: Subject + Verb2\nPast Continuous: Subject + was/were + Verb-ing",
      examples: [
        { en: "I went by bus to my grandparents' house.", ar: "ذهبتُ بالحافلة إلى منزل جدي وجدتي." },
        { en: "For most of the journey I was playing with my Rubik’s cube.", ar: "طوال الرحلة تقريباً، كنت ألعب بمكعب روبيك الخاص بي." }
      ]
    },
    quiz: [
      {
        question: "During the holidays, Tariq _______ weights in the morning.",
        questionAr: "خلال العطلة، طارق _______ الأوزان في الصباح.",
        options: ["lifts", "lifted", "was lift", "lifting"],
        correctAnswer: "lifted",
        explanation: "We use the Past Simple 'lifted' to describe a completed action in the past holiday.",
        explanationAr: "نستخدم الماضي البسيط (lifted) لوصف حدث مكتمل ومنتهي في الماضي."
      },
      {
        question: "While I was travelling on the bus, I _______ with my Rubik’s cube.",
        questionAr: "بينما كنت مسافراً بالحافلة، كنت _______ بمكعب روبيك الخاص بي.",
        options: ["play", "played", "was playing", "playing"],
        correctAnswer: "was playing",
        explanation: "We use the Past Continuous 'was playing' for an ongoing background action.",
        explanationAr: "نستخدم الماضي المستمر (was playing) لوصف حدث كان مستمراً في الماضي عند السفر."
      }
    ]
  },
  "1-2": {
    rule: {
      title: "Expressing Wishes and Conditional Type 1",
      titleAr: "التعبير عن الأمنيات والشرطية من النوع الأول",
      explanation: "We use 'will' for future outcomes in conditional sentences when a real, possible condition is met in the present.",
      explanationAr: "نستخدم الجمل الشرطية من النوع الأول للتعبير عن أحداث مستقبلية محتملة الحدوث إذا تحقق الشرط في الحاضر.",
      formula: "If + Present Simple, will + Verb (Base)",
      examples: [
        { en: "If you turn the ring three times, I will come to you.", ar: "إذا أدرتِ الخاتم ثلاث مرات، سآتي إليكِ." },
        { en: "Can you find my father and bring him home?", ar: "هل يمكنك العثور على والدي وإحضاره للمنزل؟" }
      ]
    },
    quiz: [
      {
        question: "If Samira _______ the ring, Princess Saadia will appear.",
        questionAr: "إذا _______ سميرة الخاتم، ستظهر الأميرة سعدية.",
        options: ["turns", "turned", "turning", "turn"],
        correctAnswer: "turns",
        explanation: "In Conditional Type 1, the 'If' clause takes the Present Simple (turns for singular Samira).",
        explanationAr: "في الجملة الشرطية الأولى، يأخذ شق الشرط المضارع البسيط (turns) مع الفاعل المفرد."
      },
      {
        question: "If you call my name, I _______ to you immediately.",
        questionAr: "إذا ناديتِ اسمي، _______ إليكِ فوراً.",
        options: ["come", "will come", "came", "would come"],
        correctAnswer: "will come",
        explanation: "The main clause in Conditional Type 1 uses 'will + base verb' to express the future result.",
        explanationAr: "جواب الشرط في الحالة الشرطية الأولى يتكون من (will + المصدر) للتعبير عن النتيجة المستقبلية."
      }
    ]
  },
  "1-3": {
    rule: {
      title: "Concession with 'Even though'",
      titleAr: "أسلوب التنازل والمفارقة باستخدام 'Even though'",
      explanation: "We use 'even though' to connect two clauses that have a surprising contrast or conflict.",
      explanationAr: "نستخدم 'even though' (على الرغم من أن) لربط جملتين بينهما تباين أو تناقض غير متوقع.",
      formula: "Even though + Clause 1, Clause 2",
      examples: [
        { en: "Even though the sun is very hot, I feel extremely happy.", ar: "على الرغم من أن الشمس حارة جداً، إلا أنني أشعر بسعادة بالغة." },
        { en: "Even though the work on the agricultural land is hard, she loves it.", ar: "على الرغم من أن العمل في الأرض الزراعية شاق، إلا أنها تحبه." }
      ]
    },
    quiz: [
      {
        question: "_______ the sun was extremely hot, Selma helped her grandfather on the farm.",
        questionAr: "_______ الشمس كانت حارة للغاية، ساعدت سلمى جدها في المزرعة.",
        options: ["Because", "So", "Even though", "But"],
        correctAnswer: "Even though",
        explanation: "We use 'Even though' to express contrast between the hot sun and her willing help.",
        explanationAr: "نستخدم (Even though) للتعبير عن التناقض بين حرارة الشمس الشديدة ورغبتها في المساعدة."
      },
      {
        question: "Even though she is only fifteen, she _______ hard on the agricultural land.",
        questionAr: "على الرغم من أنها تبلغ من العمر خمسة عشر عاماً فقط، إلا أنها _______ بجد في الأرض الزراعية.",
        options: ["works", "work", "working", "worked"],
        correctAnswer: "works",
        explanation: "After 'even though', we use a normal clause. Since 'she' is singular present, we use 'works'.",
        explanationAr: "بعد 'even though' نستخدم جملة فعلية طبيعية، ومع الفاعل المفرد في الحاضر نختار (works)."
      }
    ]
  },
  "1-4": {
    rule: {
      title: "Modals of Ability and Necessity (Can & Need to)",
      titleAr: "الأفعال الناقصة للقدرة والضرورة (Can و Need to)",
      explanation: "We use 'can' to express ability or possibility, and 'need to' to express necessity or obligation.",
      explanationAr: "نستخدم (can) للتعبير عن القدرة أو الإمكانية، ونستخدم (need to) للتعبير عن الضرورة والوجوب.",
      formula: "Subject + can + Verb (Base)\nSubject + need to / needs to + Verb (Base)",
      examples: [
        { en: "Locusts are small but they can eat a field in minutes.", ar: "الجراد صغير الحجم لكنه يستطيع أكل حقل كامل في دقائق." },
        { en: "We need to protect animals so they don't become extinct.", ar: "نحن بحاجة لحماية الحيوانات حتى لا تنقرض." }
      ]
    },
    quiz: [
      {
        question: "Mosquitoes are dangerous; they _______ kill about one million people every year.",
        questionAr: "البعوض خطير؛ فهو _______ يقتل حوالي مليون شخص كل عام.",
        options: ["need", "can", "should", "must to"],
        correctAnswer: "can",
        explanation: "'Can' is used here to show the ability or potential of mosquitoes to cause deaths.",
        explanationAr: "نستخدم الفعل الناقص (can) هنا للتعبير عن قدرة البعوض على إحداث الوفيات."
      },
      {
        question: "Future generations _______ have national parks to see pandas.",
        questionAr: "الأجيال القادمة _______ أن يكون لديها محميات وطنية لتتمكن من رؤية الباندا.",
        options: ["need to", "can to", "needs", "needing"],
        correctAnswer: "need to",
        explanation: "We use plural 'need to' to express necessity for future generations.",
        explanationAr: "نستخدم (need to) للجمع للتعبير عن الضرورة والاحتياج لإنشاء المحميات للأجيال القادمة."
      }
    ]
  },
  "1-5": {
    rule: {
      title: "Past Simple for Historical Narrative",
      titleAr: "الماضي البسيط للسرد التاريخي والتواريخ",
      explanation: "We use the Past Simple to describe real, finished historical events accompanied by dates or specific years.",
      explanationAr: "نستخدم الماضي البسيط لسرد الأحداث التاريخية الحقيقية والمكتملة التي وقعت في أوقات محددة من الماضي.",
      formula: "Subject + Verb2 (Regular -ed / Irregular)\nTime Marker (In 1840, in 1883)",
      examples: [
        { en: "Osman Digna was born in Suakin in 1840.", ar: "وُلد عثمان دقنة في سواكن عام 1840." },
        { en: "In 1883, he attacked the Egyptian army near Tokar.", ar: "في عام 1883، هاجم الجيش المصري بالقرب من طوكر." }
      ]
    },
    quiz: [
      {
        question: "Osman Digna _______ a merchant before he joined Al Mahdi.",
        questionAr: "عثمان دقنة _______ تاجراً قبل أن ينضم للمهدي.",
        options: ["is", "was", "were", "been"],
        correctAnswer: "was",
        explanation: "We use 'was' as the past simple of 'be' for the singular subject 'Osman Digna'.",
        explanationAr: "نستخدم الفعل (was) كفعل ماضي بسيط مفرد مناسب للفاعل عثمان دقنة."
      },
      {
        question: "In 1900, the British forces _______ Osman Digna and put him in prison.",
        questionAr: "في عام 1900، القوات البريطانية _______ عثمان دقنة ووضعته في السجن.",
        options: ["catch", "catches", "caught", "catching"],
        correctAnswer: "caught",
        explanation: "The past simple of the irregular verb 'catch' is 'caught'.",
        explanationAr: "الفعل الماضي البسيط الشاذ من 'catch' (يمسك) هو (caught) (قبض على)."
      }
    ]
  },
  "1-6": {
    rule: {
      title: "Reason (Because of) & Purpose (To + Verb)",
      titleAr: "السببية باستخدام (Because of) والغرض باستخدام (To + المصدر)",
      explanation: "We use 'because of' followed by a noun to show cause, and 'to + infinitive' to express the purpose of an action.",
      explanationAr: "نستخدم 'because of' متبوعة باسم للتعبير عن السبب، ونستخدم 'to' متبوعة بمصدر الفعل للتعبير عن الغاية والغرض.",
      formula: "Subject + verb + because of + Noun\nSubject + verb + to + Verb (Base)",
      examples: [
        { en: "Because of its location, Port Sudan is known as the 'Eastern Gate'.", ar: "بسبب موقعها، تُعرف بورتسودان بـ 'البوابة الشرقية'." },
        { en: "Visitors come from all over Sudan to enjoy the celebrations.", ar: "يأتي الزوار من جميع أنحاء السودان للاستمتاع بالاحتفالات." }
      ]
    },
    quiz: [
      {
        question: "Port Sudan is famous _______ its beautiful coral reef beaches.",
        questionAr: "بورتسودان مشهورة _______ شواطئها المرجانية الجميلة.",
        options: ["because", "to", "for", "with"],
        correctAnswer: "for",
        explanation: "The adjective 'famous' is followed by the preposition 'for' to explain why something is known.",
        explanationAr: "تتبع الصفة 'famous' (مشهور) بحرف الجر (for) لربطها بسب الشهرة."
      },
      {
        question: "Richard flew to Port Sudan _______ take photographs of the Red Sea.",
        questionAr: "سافر ريتشارد إلى بورتسودان _______ يلتقط صوراً للبحر الأحمر.",
        options: ["to", "for", "because of", "so"],
        correctAnswer: "to",
        explanation: "We use the infinitive of purpose 'to' followed by the base verb 'take'.",
        explanationAr: "نستخدم أداة الغرض (to) متبوعة بمصدر الفعل (take) لبيان غرض السفر."
      }
    ]
  },
  "1-7": {
    rule: {
      title: "Future Plans (Want to vs Going to)",
      titleAr: "خطط المستقبل والنيات باستخدام (Want to و Going to)",
      explanation: "We use 'want to' to express our desires or wishes for the future, and 'going to' for planned decisions and intentions.",
      explanationAr: "نستخدم 'want to' للتعبير عن الرغبات والأمنيات المستقبلية، ونستخدم 'going to' للقرارات والخطط والنيات المؤكدة.",
      formula: "Subject + want to / wants to + Verb (Base)\nSubject + is/are + going to + Verb (Base)",
      examples: [
        { en: "When I leave school, I want to study to be a teacher.", ar: "عندما أغادر المدرسة، أريد الدراسة لأصبح معلماً." },
        { en: "Rana and Rashid are going to study computer sciences.", ar: "رنا ورشيد يعتزمان دراسة علوم الحاسوب." }
      ]
    },
    quiz: [
      {
        question: "Manal finishes school soon; she _______ to be a scientist to find new medicines.",
        questionAr: "منال تنهي المدرسة قريباً؛ هي _______ أن تصبح عالمة لتجد أدوية جديدة.",
        options: ["want", "wants", "going to", "wanting"],
        correctAnswer: "wants",
        explanation: "We use 'wants' (singular) to express Manal's future desire/ambition.",
        explanationAr: "نستخدم (wants) للمفرد للتعبير عن رغبتها وطموحها المستقبلي."
      },
      {
        question: "Rana is a programmer. She _______ to write useful computer programs.",
        questionAr: "رنا مبرمجة. هي _______ كتابة برامج حاسوبية مفيدة.",
        options: ["is going", "going", "goes", "will going"],
        correctAnswer: "is going",
        explanation: "We use 'is going' before 'to + verb' to express a future plan or intention.",
        explanationAr: "نستخدم التركيب (is going) قبل حرف الجر والفعل (to write) للتعبير عن خطة مستقبلية."
      }
    ]
  },
  "1-8": {
    rule: {
      title: "Obligation & Necessity (Have to / Had to)",
      titleAr: "الإلزام والاضطرار باستخدام (Have to و Had to)",
      explanation: "We use 'have to' / 'has to' for present obligations, and 'had to' for obligations that occurred in the past.",
      explanationAr: "نستخدم 'have to' أو 'has to' للتعبير عن الإلزام والضرورة في الحاضر، ونستخدم 'had to' للتعبير عن ضرورة كانت في الماضي.",
      formula: "Present: Subject + have to / has to + Verb (Base)\nPast: Subject + had to + Verb (Base)",
      examples: [
        { en: "Sometimes I have to speak English to visitors.", ar: "في بعض الأحيان يترتب علي التحدث بالإنجليزية مع الزوار." },
        { en: "I had to write down useful phrases in my notebook.", ar: "كان عليّ تدوين العبارات المفيدة في دفتري." }
      ]
    },
    quiz: [
      {
        question: "At the hotel, Hana _______ speak English because the guests didn't know Arabic.",
        questionAr: "في الفندق، هناء _______ تتحدث الإنجليزية لأن الضيوف لم يعرفوا العربية.",
        options: ["has", "have to", "has to", "having to"],
        correctAnswer: "has to",
        explanation: "Since 'Hana' is a singular subject in the present context, we use 'has to'.",
        explanationAr: "بما أن الفاعل 'هناء' مفرد غائب، نستخدم صيغة الوجوب الحالية للمفرد (has to)."
      },
      {
        question: "I knew I _______ read English books if I went to university.",
        questionAr: "كنت أعلم أنه _______ علي قراءة كتب إنجليزية إذا ذهبت للجامعة.",
        options: ["have to", "had to", "has to", "having"],
        correctAnswer: "had to",
        explanation: "Since the thought is framed in the past ('I knew... went...'), the past obligation form 'had to' is required.",
        explanationAr: "بما أن الجملة مصاغة في سياق الماضي (I knew)، نستخدم صيغة الاضطرار والالتزام الماضي (had to)."
      }
    ]
  },

  // UNIT 2: Relationships
  "2-1": {
    rule: {
      title: "Adverbs of Sequence for Planning",
      titleAr: "ظروف التتابع والترتيب للتخطيط",
      explanation: "We use adverbs of sequence (Firstly, Secondly, Finally) to organize steps, plans, or guidelines in a logical order.",
      explanationAr: "نستخدم ظروف التتابع (أولاً، ثانياً، أخيراً) لتنظيم الخطوات أو الخطط في سياق مرتب ومفهوم.",
      formula: "Firstly, + Sentence. Secondly, + Sentence. Finally, + Sentence.",
      examples: [
        { en: "Firstly, they have to check the walls and the roof.", ar: "أولاً، يتعين عليهم فحص الجدران والسقف." },
        { en: "Finally, they need to build a secure storm shelter.", ar: "أخيراً، يحتاجون لبناء مأوى آمن للسيول." }
      ]
    },
    quiz: [
      {
        question: "To prepare for rain, _______ they have to check the mud walls.",
        questionAr: "للتحضير للسيول، _______ يتعين عليهم فحص الجدران الطينية.",
        options: ["Secondly", "Firstly", "Finally", "Next"],
        correctAnswer: "Firstly",
        explanation: "We use 'Firstly' to introduce the very first step in a sequential process.",
        explanationAr: "نستخدم (Firstly) للبدء بالخطوة الأولى في سلسلة خطوات التتابع."
      },
      {
        question: "They cleared the drainage; _______, they built the shelter for the family.",
        questionAr: "لقد قاموا بتنظيف قنوات التصريف؛ _______، قاموا ببناء مأوى للعائلة.",
        options: ["first", "finally", "firstly", "secondly"],
        correctAnswer: "finally",
        explanation: "We use 'finally' to indicate the last or concluding step of a sequence.",
        explanationAr: "نستخدم (finally) لبيان الخطوة الأخيرة أو الختامية في سلسلة الأعمال."
      }
    ]
  },
  "2-2": {
    rule: {
      title: "Both vs Neither",
      titleAr: "استخدام Both (كلاهما) و Neither (لا أحد منهما)",
      explanation: "We use 'both' to link shared positive features between two entities, and 'neither' to indicate that a negative statement applies to both.",
      explanationAr: "نستخدم (both) للإشارة إلى صفتين إيجابيتين مشتركتين بين طرفين، ونستخدم (neither) لنفي الصفة عن الطرفين معاً.",
      formula: "Both + Plural Noun + Plural Verb\nNeither + Singular Noun + Singular Verb",
      examples: [
        { en: "Both boys are tall and slim.", ar: "كلا الولدين طويلان ونحيفان." },
        { en: "Neither boy likes swimming in the river.", ar: "لا أحد من الولدين يحب السباحة في النهر." }
      ]
    },
    quiz: [
      {
        question: "Hassan and Hussain are twins. _______ boys enjoy playing sports.",
        questionAr: "حسن وحسين توأمان. _______ الولدين يستمتعان بممارسة الرياضة.",
        options: ["Both", "Neither", "Either", "None"],
        correctAnswer: "Both",
        explanation: "We use 'Both' followed by a plural noun 'boys' to show a shared positive quality.",
        explanationAr: "نستخدم (Both) متبوعاً باسم جمع للتعبير عن صفة إيجابية مشتركة لكلا التوأمين."
      },
      {
        question: "They hate cold water. _______ boy enjoys swimming in winter.",
        questionAr: "هما يكرهان الماء البارد. _______ الولد يحب السباحة في الشتاء.",
        options: ["Both", "Neither", "Either", "Every"],
        correctAnswer: "Neither",
        explanation: "We use 'Neither' followed by a singular noun 'boy' and a singular verb 'enjoys' to express a shared negative attitude.",
        explanationAr: "نستخدم (Neither) متبوعة باسم مفرد وفعل مفرد لنفي رغبة السباحة عن كلاهما."
      }
    ]
  },
  "2-3": {
    rule: {
      title: "Not Only... But Also",
      titleAr: "التركيب التوكيدي 'ليس فقط... بل أيضاً'",
      explanation: "We use 'not only... but also' to combine two pieces of information, emphasizing that the second one is even more surprising or important.",
      explanationAr: "نستخدم التركيب (not only... but also) لربط حقيقتين ببعضهما، مع التركيز وتأكيد الأهمية أو المفاجأة في الحقيقة الثانية.",
      formula: "Subject + not only + Verb/Adjective + but also + Verb/Adjective",
      examples: [
        { en: "The brave goat Timur not only saved his own life, but also kicked the tiger out.", ar: "الماعز الشجاع تيمور لم ينقذ حياته فحسب، بل طرد النمر أيضاً." },
        { en: "They are not only friends, but also business partners.", ar: "هما ليسا صديقين فحسب، بل شريكان تجاريان أيضاً." }
      ]
    },
    quiz: [
      {
        question: "The little goat Timur not only survived, _______ slept in the tiger's bed.",
        questionAr: "الماعز الصغير تيمور لم ينجُ فحسب، _______ نام في سرير النمر.",
        options: ["but also", "and", "so", "but instead"],
        correctAnswer: "but also",
        explanation: "The correct correlative conjunction pairing for 'not only' is 'but also'.",
        explanationAr: "الاقتران اللغوي التوكيدي الصحيح لـ 'not only' هو دائماً 'but also'."
      },
      {
        question: "Amur is not only a tiger, but he is _______ a famous zoo animal in Russia.",
        questionAr: "عمور ليس مجرد نمر فحسب، بل هو _______ حيوان مشهور في حديقة الحيوان بروسيا.",
        options: ["too", "either", "also", "so"],
        correctAnswer: "also",
        explanation: "In 'not only... but...' clauses, we add 'also' to complete the emphatic contrast.",
        explanationAr: "في شق الجملة الثاني المرافق لـ 'not only'، نضع كلمة 'also' لإكمال المعنى التوكيدي."
      }
    ]
  },
  "2-4": {
    rule: {
      title: "Preferences with 'Would prefer to'",
      titleAr: "التعبير عن التفضيلات الشخصية باستخدام 'Would prefer to'",
      explanation: "We use 'would prefer to + verb' to express a specific, strong personal choice or desire in a particular situation.",
      explanationAr: "نستخدم التعبير (would prefer to) متبوعاً بالمصدر لبيان واختيار بديل مفضل بوضوح في موقف معين.",
      formula: "Subject + would prefer to + Verb (Base) + rather than...",
      examples: [
        { en: "I would prefer to spend the holidays at summer camp.", ar: "أفضل قضاء الإجازات في المخيم الصيفي." },
        { en: "Would you prefer to drink tea or coffee?", ar: "هل تفضل شرب الشاي أم القهوة؟" }
      ]
    },
    quiz: [
      {
        question: "Jane is stressed; she _______ to relax with her friends rather than study.",
        questionAr: "جين مجهدة؛ هي _______ أن تسترخي مع صديقاتها بدلاً من المذاكرة.",
        options: ["prefer", "would prefer", "prefers", "is preferring"],
        correctAnswer: "would prefer",
        explanation: "We use 'would prefer' before 'to + verb' to indicate her specific situational preference.",
        explanationAr: "نستخدم (would prefer) للتعبير عن الرغبة المفضلة المحددة لها في هذا الموقف الصعب."
      },
      {
        question: "I would prefer to stay at home rather than _______ in the hot sun.",
        questionAr: "أفضل البقاء في المنزل بدلاً من _______ في الشمس الحارة.",
        options: ["walk", "walking", "walked", "to walk"],
        correctAnswer: "walk",
        explanation: "After 'rather than' in a preference structure, we use the bare infinitive ('walk') to match the first action.",
        explanationAr: "بعد التعبير 'rather than' في تفضيل الأفعال، نستخدم صيغة الفعل المجردة (walk)."
      }
    ]
  },
  "2-5": {
    rule: {
      title: "Invitations & Offers (Would you like to...?)",
      titleAr: "تقديم الدعوات والعروض المهذبة",
      explanation: "We use polite question frames like 'Would you like to + verb?' to invite friends or offer hospitality.",
      explanationAr: "نستخدم صيغة السؤال المهذبة (Would you like to...؟) لتقديم دعوة لصديق أو عرض ضيافة بلطف.",
      formula: "Would you like to + Verb (Base)?",
      examples: [
        { en: "Would you like to come to my house for a party?", ar: "هل ترغب في المجيء إلى منزلي لحضور حفلة؟" },
        { en: "Can I bring my friend Rihab with me?", ar: "هل يمكنني إحضار صديقتي رحاب معي؟" }
      ]
    },
    quiz: [
      {
        question: "Samah, _______ you like to join our Eid party on Monday?",
        questionAr: "سماح، _______ ترغبين في الانضمام لحفلة العيد يوم الاثنين؟",
        options: ["Do", "Would", "Will", "Can"],
        correctAnswer: "Would",
        explanation: "We use 'Would you like to...' to extend a warm and polite invitation.",
        explanationAr: "نستخدم الكلمة المساعد (Would) لصياغة دعوة رقيقة ومهذبة للأصدقاء."
      },
      {
        question: "I am preparing a party. What _______ I bring with me?",
        questionAr: "أنا أعد لحفلة. ماذا _______ أحضر معي؟",
        options: ["shall", "do", "must", "want"],
        correctAnswer: "shall",
        explanation: "We use 'shall' (What shall I...) to make polite offers or ask for suggestions.",
        explanationAr: "نستخدم الأداة (shall) لتقديم اقتراح أو الاستفسار عن المطلوب بلطف في الحوار."
      }
    ]
  },
  "2-6": {
    rule: {
      title: "Reciprocal Pronouns (Each other)",
      titleAr: "الضمير المتبادل (Each other - بعضنا البعض)",
      explanation: "We use 'each other' to show that two or more people perform the same action to one another.",
      explanationAr: "نستخدم الضمير المتبادل (each other) للتعبير عن فعل يقوم به طرفان أو أكثر تجاه بعضهما البعض بشكل متبادل.",
      formula: "Subject (Plural) + Verb + each other",
      examples: [
        { en: "We have to pass the ball and support each other to win.", ar: "يتعين علينا تمرير الكرة ومساندة بعضنا البعض لنفوز." },
        { en: "They smiled at each other after finishing the game.", ar: "ابتسم كل منهما للآخر بعد انتهاء المباراة." }
      ]
    },
    quiz: [
      {
        question: "A good football team requires players who support _______.",
        questionAr: "يتطلب فريق كرة القدم الجيد لاعبين يدعمون _______.",
        options: ["themselves", "ourselves", "each other", "one self"],
        correctAnswer: "each other",
        explanation: "We use 'each other' to show mutual support between different teammates.",
        explanationAr: "نستخدم (each other) لبيان الدعم المتبادل المشترك بين أعضاء الفريق."
      },
      {
        question: "The twin brothers looked at _______ and laughed at the joke.",
        questionAr: "نظر الأخوان التوأم إلى _______ وضحكا على الأضحوكة.",
        options: ["each other", "themselves", "himself", "yourself"],
        correctAnswer: "each other",
        explanation: "They looked at one another, so the reciprocal 'each other' is the correct choice.",
        explanationAr: "بما أن كلاً منهما نظر للآخر، نستخدم الضمير المتبادل (each other)."
      }
    ]
  },
  "2-7": {
    rule: {
      title: "Present Perfect with Since & For",
      titleAr: "المضارع التام مع (Since) و (For)",
      explanation: "We use 'since' to point to a specific starting moment in the past, and 'for' to describe a duration of time.",
      explanationAr: "نستخدم (since) للإشارة إلى نقطة بداية الحدث في الماضي، ونستخدم (for) للإشارة إلى مدة زمنية محددة المستغرقة.",
      formula: "Subject + have/has + Verb3 + since (starting time)\nSubject + have/has + Verb3 + for (duration)",
      examples: [
        { en: "We have been great friends for a long time.", ar: "لقد كنا صديقين رائعين لفترة طويلة." },
        { en: "We have been friends ever since we first met.", ar: "لقد كنا صديقين منذ التقينا لأول مرة." }
      ]
    },
    quiz: [
      {
        question: "Marwa and I have lived near each other _______ childhood.",
        questionAr: "أنا ومروة نعيش بالقرب من بعضنا البعض _______ الطفولة.",
        options: ["for", "since", "during", "ago"],
        correctAnswer: "since",
        explanation: "We use 'since' because 'childhood' is a specific starting point in time.",
        explanationAr: "نستخدم (since) لأن 'childhood' (الطفولة) تعبر عن نقطة بداية زمنية محددة."
      },
      {
        question: "They have been studying at the same university _______ three years.",
        questionAr: "هما يدرسان في نفس الجامعة _______ ثلاث سنوات.",
        options: ["since", "ago", "for", "while"],
        correctAnswer: "for",
        explanation: "We use 'for' because 'three years' is a calculated duration/length of time.",
        explanationAr: "نستخدم (for) لأن 'ثلاث سنوات' تعبر عن مدة زمنية كاملة ومحسوبة."
      }
    ]
  },
  "2-8": {
    rule: {
      title: "Present Perfect vs Past Simple",
      titleAr: "المضارع التام مقابل الماضي البسيط",
      explanation: "We use the Past Simple for events completed at a known past time, and Present Perfect for experiences or states connected to the present.",
      explanationAr: "نستخدم الماضي البسيط لأحداث انتهت بالكامل في وقت معروف بالماضي، ونستخدم المضارع التام لأحداث مرتبطة بالحاضر.",
      formula: "Past Simple: Subject + Verb2 (specific past time)\nPresent Perfect: Subject + have/has + Verb3 (unspecified time)",
      examples: [
        { en: "I haven't seen Ali for six years.", ar: "لم أرَ علياً منذ ست سنوات. (مرتبط بالحاضر)" },
        { en: "Two years ago, I got a mobile phone.", ar: "منذ عامين، حصلتُ على هاتف محمول. (ماضي بسيط محدد الزمن)" }
      ]
    },
    quiz: [
      {
        question: "Two years ago, Adam _______ a phone and started texting Ali.",
        questionAr: "منذ عامين، آدم _______ هاتفاً وبدأ بمراسلة علي.",
        options: ["gets", "got", "has got", "getting"],
        correctAnswer: "got",
        explanation: "Because of the specific past time marker 'Two years ago', we must use the Past Simple 'got'.",
        explanationAr: "بسبب وجود ظرف الزمان الماضي المحدد 'Two years ago'، يجب استخدام الماضي البسيط (got)."
      },
      {
        question: "I finished school recently, but I _______ my childhood friend since 2020.",
        questionAr: "لقد أنهيت المدرسة مؤخراً، لكنني _______ صديق طفولتي منذ عام 2020.",
        options: ["haven't seen", "didn't see", "don't see", "not saw"],
        correctAnswer: "haven't seen",
        explanation: "We use Present Perfect negative 'haven't seen' with the time marker 'since 2020'.",
        explanationAr: "نستخدم المضارع التام المنفي (haven't seen) لوجود الرابط الزمني (since 2020)."
      }
    ]
  },

  // UNIT 3: Going Places
  "3-1": {
    rule: {
      title: "Describing Geographical Locations",
      titleAr: "وصف المواقع الجغرافية والبلدان",
      explanation: "We use prepositional phrases like 'situated in' or passive structures like 'is bordered by' to describe maps and locations.",
      explanationAr: "نستخدم جمل الجر والأفعال الوصفية مثل (situated in - تقع في) لوصف الخرائط والمواقع الجغرافية للدول والمدن.",
      formula: "Subject + is + situated / located + in + Region",
      examples: [
        { en: "Sudan is a very large country situated in Northeast Africa.", ar: "السودان بلد كبير جداً يقع في شمال شرق أفريقيا." },
        { en: "Khartoum is the capital city where the two Niles meet.", ar: "الخرطوم هي العاصمة حيث يلتقي النيلان." }
      ]
    },
    quiz: [
      {
        question: "The Republic of Sudan is _______ in Northeast Africa.",
        questionAr: "جمهورية السودان _______ في شمال شرق أفريقيا.",
        options: ["situating", "situated", "situate", "situates"],
        correctAnswer: "situated",
        explanation: "We use the past participle adjective 'situated' to describe geographical position.",
        explanationAr: "نستخدم الصفة المشتقة (situated) (المتموضعة/الواقعة) لوصف الموقع الجغرافي."
      },
      {
        question: "Khartoum is the busy capital city _______ the Blue and White Niles meet.",
        questionAr: "الخرطوم هي العاصمة المزدحمة _______ يلتقي النيلان الأزرق والأبيض.",
        options: ["which", "who", "where", "when"],
        correctAnswer: "where",
        explanation: "We use the relative adverb 'where' to link a clause describing a place ('capital city').",
        explanationAr: "نستخدم ظرف المكان الوصلي (where) لربط الجملة بوصف مكان العاصمة."
      }
    ]
  },
  "3-2": {
    rule: {
      title: "Equative Comparison (As + Adjective + As)",
      titleAr: "المقارنة المتساوية (as + الصفة + as)",
      explanation: "We use the 'as + adjective + as' structure to show that two people or things are equal in a specific quality.",
      explanationAr: "نستخدم التركيب (as + الصفة + as) للتعبير عن تساوي شخصين أو شيئين في صفة معينة تماماً.",
      formula: "Subject + is + as + Adjective + as + Object",
      examples: [
        { en: "Having a strong mind is just as important as having a strong body.", ar: "امتلاك عقل قوي لا يقل أهمية عن امتلاك جسد قوي." },
        { en: "Sudanese hospitality is as warm as the sunshine.", ar: "الكرم السوداني دافئ مثل أشعة الشمس تماماً." }
      ]
    },
    quiz: [
      {
        question: "When climbing mountains, determination is as _______ as strength.",
        questionAr: "عند تسلق الجبال، العزيمة والتحمل تكون _______ مثل القوة الجسدية تماماً.",
        options: ["important", "more important", "most important", "importantly"],
        correctAnswer: "important",
        explanation: "The structure 'as... as' sandwiches a base adjective ('important') without any comparative suffixes.",
        explanationAr: "التركيب 'as... as' يوضع بين طرفيه الصفة مجردة في شكلها الأساسي البسيط (important)."
      },
      {
        question: "My second Everest climb was as difficult _______ the first one.",
        questionAr: "تسلقي الثاني لجبل إيفرست كان صعباً _______ التسلق الأول.",
        options: ["like", "than", "as", "so"],
        correctAnswer: "as",
        explanation: "The second part of the equative comparison requires 'as' to complete the 'as... as' pairing.",
        explanationAr: "الطرف الثاني للمقارنة المتساوية يتطلب كلمة (as) لإكمال صياغة التساوي اللغوي."
      }
    ]
  },
  "3-3": {
    rule: {
      title: "Sequencing Events with Past Tenses",
      titleAr: "ترتيب الأحداث التاريخية باستخدام أزمنة الماضي",
      explanation: "We use the Past Simple to list actions in a sequence, and indicate the starting age or time with the past verb 'began'.",
      explanationAr: "نستخدم الماضي البسيط لسرد أحداث السفر التاريخية المتتابعة، وبداية الأعمال بكلمة 'began' (بدأ).",
      formula: "Subject + started/began + Verb-ing\nSubject + Past Simple (visited, travelled)",
      examples: [
        { en: "Ibn Battuta began travelling when he was twenty years old.", ar: "بدأ ابن بطوطة السفر والترحال عندما كان في العشرين من عمره." },
        { en: "He left Morocco to go on Hajj in Makkah.", ar: "غادر المغرب متوجهاً لأداء فريضة الحج في مكة." }
      ]
    },
    quiz: [
      {
        question: "Ibn Battuta _______ travelling in the year 1325.",
        questionAr: "ابن بطوطة _______ السفر والرحلات في عام 1325.",
        options: ["began", "begins", "begun", "beginning"],
        correctAnswer: "began",
        explanation: "We use the irregular Past Simple 'began' to describe when his travel adventure started.",
        explanationAr: "نستخدم الفعل الماضي البسيط الشاذ (began) لبدء الحدث التاريخي القديم."
      },
      {
        question: "After studying in Makkah, he _______ a small boat to continue his journey.",
        questionAr: "بعد الدراسة في مكة، _______ قارباً صغيراً لمواصلة رحلته.",
        options: ["takes", "took", "taken", "taking"],
        correctAnswer: "took",
        explanation: "The sequential completed action requires Past Simple ('took').",
        explanationAr: "الحدث المكتمل المتتابع في الماضي يتطلب استخدام الماضي البسيط (took)."
      }
    ]
  },
  "3-4": {
    rule: {
      title: "Superlatives with 'One of the'",
      titleAr: "صيغ التفضيل العليا مع التعبير 'واحد من الـ'",
      explanation: "We use 'one of the + superlative adjective + plural noun' to single out an extreme example within a group.",
      explanationAr: "نستخدم الصيغة (one of the + صفة التفضيل القصوى + اسم جمع) للإشارة لشيء مميز ومتطرف في صفة بين مجموعة.",
      formula: "one of the + Superlative (most... / -est) + Plural Noun",
      examples: [
        { en: "Shanghai is one of the most crowded and modern cities in China.", ar: "شانغهاي هي واحدة من أكثر المدن ازدحاماً وحداثة في الصين." },
        { en: "The SWFC is one of the tallest skyscrapers in Asia.", ar: "مركز شانغهاي المالي العالمي هو أحد أطول ناطحات السحاب في آسيا." }
      ]
    },
    quiz: [
      {
        question: "Shanghai's Maglev is one of the _______ trains in the world.",
        questionAr: "قطار ماجليف في شانغهاي هو واحد من _______ القطارات في العالم.",
        options: ["fast", "faster", "fastest", "fastly"],
        correctAnswer: "fastest",
        explanation: "After 'one of the', we use the superlative form 'fastest' to compare it with all other trains.",
        explanationAr: "بعد التعبير 'one of the'، نستخدم صفة التفضيل العليا المطلقة المنتهية بـ -est أي (fastest)."
      },
      {
        question: "Shanghai is one of the most crowded _______ in China.",
        questionAr: "شانغهاي هي واحدة من أكثر _______ ازدحاماً في الصين.",
        options: ["city", "cities", "town", "place"],
        correctAnswer: "cities",
        explanation: "The phrase 'one of the...' must be followed by a plural noun ('cities').",
        explanationAr: "يجب أن يتبع التعبير اسم جمع يدل على المجموعة وهو هنا (cities) (مدن)."
      }
    ]
  },
  "3-5": {
    rule: {
      title: "Concession and Clause-connecting 'Which'",
      titleAr: "أدوات الربط: المفارقة (Even though) والوصل الوصفي (Which)",
      explanation: "We use 'even though' to show surprise or contrast, and 'which' to refer back to the entire situation in the previous clause.",
      explanationAr: "نستخدم 'even though' لربط جمل متناقضة، ونستخدم 'which' لتعود على الموقف أو الجملة السابقة كاملة لبيان النتيجة.",
      formula: "Clause 1, which + Verb (effect on the whole clause)",
      examples: [
        { en: "Even though Sultans cared for the road, caravans faced dangers.", ar: "على الرغم من أن السلاطين اهتموا بالطريق، إلا أن القوافل واجهت مخاطر." },
        { en: "Sometimes there was not enough water, which could lead to problems.", ar: "في بعض الأحيان لم يكن هناك ماء كافٍ، وهو ما قد يؤدي إلى مشاكل." }
      ]
    },
    quiz: [
      {
        question: "_______ the journey on Forty Days Road was difficult, traders kept going.",
        questionAr: "_______ الرحلة على طريق الأربعين كانت شاقة، إلا أن التجار واصلوا المسير.",
        options: ["Even though", "Because", "Which", "So"],
        correctAnswer: "Even though",
        explanation: "We use 'Even though' to show the concession/contrast of a dangerous road but continuing traders.",
        explanationAr: "نستخدم (Even though) للتعبير عن التناقض والتنازل بين صعوبة الطريق ومواصلة التجار."
      },
      {
        question: "Caravans were sometimes attacked by bandits, _______ caused great loss.",
        questionAr: "كانت القوافل تتعرض أحياناً لهجوم اللصوص، _______ تسبب في خسائر فادحة.",
        options: ["who", "which", "whose", "where"],
        correctAnswer: "which",
        explanation: "We use 'which' to refer back to the entire previous clause/situation (being attacked by bandits).",
        explanationAr: "نستخدم ضمير الوصل (which) ليعود على الموقف السابق بأكمله (تعرض القوافل لسرقة اللصوص)."
      }
    ]
  },
  "3-6": {
    rule: {
      title: "Imperatives for Invitation and Action",
      titleAr: "صيغ الأمر للدعوة والترويج السياحي",
      explanation: "We use the imperative (base verb at the start of a sentence) in guides and advertisements to urge action or offer choices.",
      explanationAr: "نستخدم فعل الأمر في المصدر مباشرة في بداية الجملة في الإعلانات والأدلة السياحية لحث الزائر على الفعل.",
      formula: "Verb (Base) + Object / Destination!",
      examples: [
        { en: "Watch a traditional wrestling match in El Dalang.", ar: "شاهد مباراة مصارعة تقليدية في الدلنج." },
        { en: "Explore colourful villages and see the mountain spring.", ar: "استكشف القرى الملونة وشاهد نبع الجبل." }
      ]
    },
    quiz: [
      {
        question: "_______ a camera with you to take wonderful photos in Nuba Mountains!",
        questionAr: "_______ كاميرا معك لالتقاط صور رائعة في جبال النوبة!",
        options: ["Bring", "Brings", "Brought", "Bringing"],
        correctAnswer: "Bring",
        explanation: "We use the bare imperative verb 'Bring' to start an instruction or recommendation.",
        explanationAr: "نستخدم فعل الأمر المجرد (Bring) للبدء في صياغة الإرشاد والتوجيه الترويجي."
      },
      {
        question: "_______ our state next winter and enjoy delicious mangoes!",
        questionAr: "_______ ولايتنا في الشتاء القادم واستمتع بالمانجو اللذيذة!",
        options: ["Visiting", "Visit", "Visits", "Visited"],
        correctAnswer: "Visit",
        explanation: "An imperative action for tourists uses the base form 'Visit'.",
        explanationAr: "لصياغة دعوة أو حث السياح، نبدأ بفعل الأمر في المصدر (Visit)."
      }
    ]
  },
  "3-7": {
    rule: {
      title: "Gerunds as Subjects or Objects (Verb-ing)",
      titleAr: "استخدام صيغة اسم المصدر كفاعل أو مفعول به",
      explanation: "A gerund is a verb ending in '-ing' that acts as a noun. It can be the subject of a sentence or the object of verbs like 'prefer' or 'like'.",
      explanationAr: "اسم المصدر (Gerund) هو فعل ينتهي بـ (-ing) ويعامل كاسم. يمكن أن يقع فاعلاً للجملة أو مفعولاً به بعد أفعال معينة.",
      formula: "Verb-ing + verb + complement\nSubject + enjoy/like + Verb-ing",
      examples: [
        { en: "Travelling in a hot-air balloon is an amazing experience.", ar: "الترحال في منطاد الهواء الساخن تجربة مذهلة." },
        { en: "I love seeing wild giraffes in the Maasai Mara.", ar: "أعشق رؤية الزرافات البرية في ماساي مارا." }
      ]
    },
    quiz: [
      {
        question: "_______ photos of wild animals is a popular tourist hobby in Kenya.",
        questionAr: "_______ صور الحيوانات البرية هواية سياحية شعبية في كينيا.",
        options: ["Take", "Takes", "Taking", "Taken"],
        correctAnswer: "Taking",
        explanation: "The gerund 'Taking' is used here as the singular subject of the sentence.",
        explanationAr: "نستخدم اسم المصدر (Taking) (التقاط) كفاعل مفرد للجملة الاسمية."
      },
      {
        question: "Most tourists enjoy _______ about the traditional Maasai lifestyle.",
        questionAr: "يستمتع معظم السياح بـ _______ عن نمط حياة شعب الماساي التقليدي.",
        options: ["learn", "learned", "learning", "to learning"],
        correctAnswer: "learning",
        explanation: "The verb 'enjoy' is followed by the gerund '-ing' form ('learning').",
        explanationAr: "يتبع الفعل 'enjoy' (يستمتع) باسم المصدر المنتهي بـ (-ing) أي (learning)."
      }
    ]
  },
  "3-8": {
    rule: {
      title: "Expressing Future Intent with Programmed Actions",
      titleAr: "التعبير عن النية المستقبلية والخطط الأكيدة",
      explanation: "We use 'are/is + verb-ing' or 'are going to' to describe future volunteer plans and scheduled programs.",
      explanationAr: "نستخدم مضارع مستمر أو تركيب (going to) لوصف خطط مستقبلية أكيدة تم الترتيب لها رسمياً.",
      formula: "Subject + is/are + Verb-ing (Future arrangement)\nSubject + is/are + going to + Verb (Desire/Plan)",
      examples: [
        { en: "We are coming to Sudan with the volunteer programme.", ar: "نحن قادمون إلى السودان مع برنامج التطوع." },
        { en: "We are going to help teach English at schools.", ar: "سوف نساعد في تدريس اللغة الإنجليزية في المدارس." }
      ]
    },
    quiz: [
      {
        question: "Richard and Kate _______ to Sudan next month as English teachers.",
        questionAr: "ريتشارد وكيت _______ إلى السودان الشهر المقبل كمعلمين للغة الإنجليزية.",
        options: ["are coming", "comes", "came", "is coming"],
        correctAnswer: "are coming",
        explanation: "We use 'are coming' (Present Continuous with future meaning) for scheduled travel plans for a plural subject.",
        explanationAr: "نستخدم المضارع المستمر بصيغة الجمع (are coming) للتعبير عن خطط سفر مستقبلية مؤكدة وجدولة."
      },
      {
        question: "I am determined _______ some Arabic words while helping Sudanese pupils.",
        questionAr: "أنا عازم _______ بعض الكلمات العربية أثناء مساعدة التلاميذ السودانيين.",
        options: ["to learn", "learn", "learning", "learned"],
        correctAnswer: "to learn",
        explanation: "The adjective phrase 'determined' is followed by an infinitive 'to learn'.",
        explanationAr: "يتبع التعبير الوصفي 'determined' (عازم/مصمم) بحرف الجر والمصدر (to learn)."
      }
    ]
  },

  // UNIT 4: Arts and Literature
  "4-1": {
    rule: {
      title: "Clauses of Condition (On one condition)",
      titleAr: "جمل الشرط والقيود باستخدام (On one condition)",
      explanation: "We use the expression 'on one condition' to set a specific, non-negotiable rule before completing a deal or contract.",
      explanationAr: "نستخدم التعبير (on one condition) (بشرط واحد) لوضع قيد أو قاعدة أساسية صارمة قبل إتمام اتفاق أو بيع.",
      formula: "Action + on one condition + to + Verb (Base)",
      examples: [
        { en: "Juha agreed to sell the house on one condition.", ar: "وافق جحا على بيع المنزل بشرط واحد." },
        { en: "He wanted to keep one nail in the wall.", ar: "أراد الاحتفاظ بمسمار واحد في الحائط." }
      ]
    },
    quiz: [
      {
        question: "Juha sold his house _______ that he could visit his nail anytime.",
        questionAr: "باع جحا منزله _______ أن يتمكن من زيارة مسماره في أي وقت.",
        options: ["so that", "on one condition", "because", "even though"],
        correctAnswer: "on one condition",
        explanation: "We use 'on one condition' to express the specific terms of Juha's real estate deal.",
        explanationAr: "نستخدم التعبير (on one condition) لبيان الشرط الاستثنائي الذي وضعه جحا لبيع المنزل."
      },
      {
        question: "The buyer agreed _______ Juha keep the nail in the living room wall.",
        questionAr: "وافق المشتري _______ أن يحتفظ جحا بالمسمار في جدار غرفة المعيشة.",
        options: ["to let", "letting", "lets", "let"],
        correctAnswer: "to let",
        explanation: "The verb 'agree' is followed by the infinitive 'to let'.",
        explanationAr: "يتبع الفعل 'agree' (يوافق) بـ (to + المصدر) لتصبح الجملة (to let)."
      }
    ]
  },
  "4-2": {
    rule: {
      title: "Polite Advice with 'It's important to'",
      titleAr: "تقديم النصيحة المهذبة باستخدام 'It's important to'",
      explanation: "We use the structure 'It is + adjective + to + verb' to offer wise advice or state standards of behavior without sounding bossy.",
      explanationAr: "نستخدم الصيغة (It is + صفة + to + المصدر) لتقديم نصيحة حكيمة أو توضيح معيار سلوكي بلطف.",
      formula: "It's important / polite / good + to + Verb (Base)",
      examples: [
        { en: "It’s important to have neat handwriting.", ar: "من المهم أن يكون خط يدك مرتباً ونظيفاً." },
        { en: "Be polite and well-behaved at home and school.", ar: "كن مؤدباً وحسن السلوك في البيت والمدرسة." }
      ]
    },
    quiz: [
      {
        question: "Wad Al-Baseer says, 'It's important _______ respect to the older generation.'",
        questionAr: "يقول ود البصير: 'من المهم _______ الاحترام للجيل الأكبر سناً.'",
        options: ["showing", "to show", "show", "shows"],
        correctAnswer: "to show",
        explanation: "The construction 'It is important' requires 'to + infinitive' ('to show').",
        explanationAr: "تتطلب الصيغة 'It is important' استخدام (to + المصدر) لإكمال النصيحة."
      },
      {
        question: "Young people must learn traditional crafts _______ keep Sudanese values alive.",
        questionAr: "يجب على الشباب تعلم الحرف التقليدية _______ يحافظوا على القيم السودانية حية.",
        options: ["in order to", "for", "so", "because"],
        correctAnswer: "in order to",
        explanation: "We use 'in order to' followed by a base verb to show the purpose or reason behind an action.",
        explanationAr: "نستخدم (in order to) (من أجل/لكي) متبوعة بمصدر الفعل لبيان الغرض من التعلم."
      }
    ]
  },
  "4-3": {
    rule: {
      title: "Poetic Similes (Like & As... as)",
      titleAr: "التشبيهات البلاغية الشعرية باستخدام (Like و As)",
      explanation: "We use 'like' or 'as... as' to compare one thing to another, illustrating qualities vividly in poetry and speech.",
      explanationAr: "نستخدم التشبيه بـ (like) (مثل) أو (as... as) لتشبيه شيء بآخر وتوضيح المعاني والأوصاف بصورة فنية جمالية.",
      formula: "Noun A + is + like + Noun B\nNoun A + is + as + Adjective + as + Noun B",
      examples: [
        { en: "Life is like a wild and crazy jumping horse.", ar: "الحياة تشبه حصاناً برياً مجنوناً يقفز." },
        { en: "My grandfather is like an old tree.", ar: "جدي يشبه شجرة عتيقة وراسخة." }
      ]
    },
    quiz: [
      {
        question: "The poet describes the sun as _______ a ball of fire.",
        questionAr: "يصف الشاعر الشمس بأنها _______ كرة من نار.",
        options: ["like", "as", "same", "such as"],
        correctAnswer: "like",
        explanation: "We use 'like' for comparison to mean 'similar to' in descriptive/poetic writing.",
        explanationAr: "نستخدم أداة التشبيه (like) لتعني 'يشبه' أو 'مثل' في الكتابة البلاغية."
      },
      {
        question: "In Sudan, grandfather's wisdom is described _______ an old tree.",
        questionAr: "في السودان، توصف حكمة الجد بأنها تشبه _______ شجرة عتيقة.",
        options: ["as", "like", "similar", "same like"],
        correctAnswer: "like",
        explanation: "Comparing wisdom directly to an old tree uses the preposition of similarity 'like'.",
        explanationAr: "مقارنة الحكمة بالشجرة العتيقة تستوجب حرف التشبيه (like)."
      }
    ]
  },
  "4-4": {
    rule: {
      title: "Urgent Obligation (Have to / Late for)",
      titleAr: "الالتزام والاضطرار المستعجل (Have to)",
      explanation: "We use 'have to + verb' to express a strong, immediate obligation, especially when running late or facing a deadline.",
      explanationAr: "نستخدم 'have to' للتعبير عن وجوب والتزام قوي وفوري، خاصة عند التأخر أو مواجهة ظرف طارئ.",
      formula: "Subject + have to / has to + Verb (Base)",
      examples: [
        { en: "I’m late. I have to be there at 7:45!", ar: "لقد تأخرت. يجب أن أكون هناك في الساعة 7:45!" },
        { en: "Where are you going in such a rush?", ar: "إلى أين أنت ذاهب بكل هذه العجلة؟" }
      ]
    },
    quiz: [
      {
        question: "Salim looked at his clock and screamed, 'I _______ be there at school now!'",
        questionAr: "نظر سليم إلى ساعته وصرخ: 'أنا _______ أكون في المدرسة الآن!'",
        options: ["has to", "have to", "must to", "having to"],
        correctAnswer: "have to",
        explanation: "For the pronoun 'I', we use 'have to' to express immediate necessity.",
        explanationAr: "مع الضمير المتكلم 'I'، نستخدم (have to) للتعبير عن الضرورة والوجوب الفوري."
      },
      {
        question: "Friday is a holiday, so Salim _______ go to school.",
        questionAr: "الجمعة يوم عطلة، لذا سليم _______ يذهب إلى المدرسة.",
        options: ["doesn't have to", "must not to", "has not to", "don't have to"],
        correctAnswer: "doesn't have to",
        explanation: "We use 'doesn't have to' to show the absence of obligation on holiday for a singular subject.",
        explanationAr: "نستخدم (doesn't have to) لنفي الوجوب والاضطرار في يوم الإجازة للمفرد الغائب سليم."
      }
    ]
  },
  "4-5": {
    rule: {
      title: "Question Tags for Affirmation",
      titleAr: "الأسئلة المذيلة للتأكيد والتحقق",
      explanation: "We use question tags at the end of statements to check if the listener agrees or to confirm our guesses.",
      explanationAr: "نستخدم الأسئلة المذيلة (Question Tags) في نهاية الجمل للتأكد من موافقة السامع أو للتحقق من صحة تخميننا.",
      formula: "Positive statement, negative tag? (e.g., He is a poet, isn't he?)\nNegative statement, positive tag? (e.g., He isn't alive, is he?)",
      examples: [
        { en: "It’s a woman, isn’t it?", ar: "إنها امرأة، أليس كذلك؟" },
        { en: "Was he a poet? Yes, he was.", ar: "هل كان شاعراً؟ نعم، لقد كان." }
      ]
    },
    quiz: [
      {
        question: "Al-Jaily Abdel Rahman was a famous Sudanese poet, _______?",
        questionAr: "الجيلي عبد الرحمن كان شاعراً سودانياً مشهوراً، _______؟",
        options: ["wasn't he", "was he", "isn't he", "didn't he"],
        correctAnswer: "wasn't he",
        explanation: "Since the main clause is positive past ('was'), the question tag must be negative past ('wasn't he').",
        explanationAr: "بما أن الجملة الرئيسية ماضي إيجابي (was)، يجب أن يكون السؤال المذيل ماضي منفي (wasn't he)."
      },
      {
        question: "You have to think of another famous person, _______?",
        questionAr: "يتعين عليك التفكير في شخص مشهور آخر، _______؟",
        options: ["don't you", "haven't you", "mustn't you", "are you"],
        correctAnswer: "don't you",
        explanation: "For present obligation 'have to', we use 'don't you' as the helping verb tag.",
        explanationAr: "مع الفعل المضارع 'have to' للتزام، نستخدم أداة النفي المذيلة (don't you)."
      }
    ]
  },
  "4-6": {
    rule: {
      title: "Result Clauses with 'So + Adjective + That'",
      titleAr: "جمل النتيجة والسبب باستخدام (so + الصفة + that)",
      explanation: "We use 'so + adjective + that + clause' to show that an extreme quality led to a specific result or reaction.",
      explanationAr: "نستخدم الصياغة (so + صفة + that) للتعبير عن أن صفة بالغة الأثر أدت إلى نتيجة معينة.",
      formula: "Subject + verb + so + Adjective + that + Result Clause",
      examples: [
        { en: "The boys became so crazy with hunger that they decided to ask for more.", ar: "أصبح الفتيان مجانين للغاية من الجوع لدرجة أنهم قرروا طلب المزيد." },
        { en: "The master was so cruel that he hit Oliver with a spoon.", ar: "كان المدير قاسياً جداً لدرجة أنه ضرب أوليفر بالملعقة." }
      ]
    },
    quiz: [
      {
        question: "Oliver Twist was _______ hungry _______ he asked for more food.",
        questionAr: "كان أوليفر تويست جائعاً _______ لدرجة _______ أنه طلب المزيد من الطعام.",
        options: ["so / that", "too / to", "very / so", "enough / that"],
        correctAnswer: "so / that",
        explanation: "The correct result clause structure is 'so... that' (so hungry that...).",
        explanationAr: "صيغة النتيجة الصحيحة المقترنة بالصفة هي (so ... that) لتعني (جائعاً لدرجة أنه)."
      },
      {
        question: "The cruel master became so angry _______ he went extremely pale.",
        questionAr: "أصبح السيد القاسي غاضباً جداً _______ أصبح وجهه شاحباً للغاية.",
        options: ["that", "so", "than", "because"],
        correctAnswer: "that",
        explanation: "We use 'that' to introduce the result clause after the 'so + adjective' ('so angry').",
        explanationAr: "نستخدم كلمة (that) لإدخال شق النتيجة بعد الصفة المسبوقة بـ (so)."
      }
    ]
  },
  "4-7": {
    rule: {
      title: "Relative Clauses & Infinitive of Training",
      titleAr: "جمل الوصل الوصفية ومصدر التعليم والتدريب",
      explanation: "We use 'who' to specify a person in a relative clause, and 'teach/learn + how to + verb' to describe skill acquisition.",
      explanationAr: "نستخدم 'who' للتعريف بالأشخاص في جمل الوصل، ونستخدم التركيب (taught/learned how to) لبيان تعليم مهارة.",
      formula: "Noun (Person) + who + verb\nteach / learn + how to + Verb (Base)",
      examples: [
        { en: "Fagin was a bad old man who taught poor boys how to steal.", ar: "كان فاجين رجلاً عجوزاً سيئاً علّم الصبية الفقراء كيفية السرقة." },
        { en: "The Dodger taught Oliver Twist how to live in London.", ar: "علّم دوجر أوليفر تويست كيفية العيش في لندن." }
      ]
    },
    quiz: [
      {
        question: "Oliver met a young boy named Dodger _______ stole money in London.",
        questionAr: "التقى أوليفر بصبي صغير يدعى دوجر _______ كان يسرق المال في لندن.",
        options: ["which", "who", "whom", "whose"],
        correctAnswer: "who",
        explanation: "Since 'Dodger' is a human person, we use the relative pronoun 'who'.",
        explanationAr: "بما أن 'دوجر' عاقل، نستخدم ضمير الوصل المخصص للأشخاص (who)."
      },
      {
        question: "Fagin kept the homeless boys and taught them how _______ in the streets.",
        questionAr: "احتفظ فاجين بالصبية المشردين وعلمهم كيفية _______ في الشوارع.",
        options: ["steal", "stealing", "to steal", "stole"],
        correctAnswer: "to steal",
        explanation: "We use 'how' followed by the infinitive 'to + verb' ('how to steal').",
        explanationAr: "بعد التعبير 'how' لبيان الطريقة، نستخدم حرف الجر والمصدر (to steal)."
      }
    ]
  },
  "4-8": {
    rule: {
      title: "Indefinite Pronouns of Indetermination",
      titleAr: "الضمائر المبهمة غير المحددة",
      explanation: "We use indefinite pronouns like 'someone' or 'nothing' when we don't know or don't want to specify which person or thing we are referring to.",
      explanationAr: "نستخدم الضمائر المبهمة مثل (someone - شخص ما) أو (nothing - لا شيء) عندما لا نعرف هوية الفاعل أو الشيء بالتحديد.",
      formula: "someone / anyone / nothing / something + Singular Verb",
      examples: [
        { en: "Someone is stealing my camels!", ar: "شخص ما يسرق جمالي!" },
        { en: "Juha thought that there was nothing wrong with the count.", ar: "ظن جحا أنه لا توجد مشكلة في العد." }
      ]
    },
    quiz: [
      {
        question: "Juha was worried because _______ was stealing his camels.",
        questionAr: "كان جحا قلقاً لأن _______ كان يسرق جماله.",
        options: ["anyone", "someone", "nothing", "everything"],
        correctAnswer: "someone",
        explanation: "We use 'someone' to indicate an unknown person who is committing an action.",
        explanationAr: "نستخدم الضمير غير المحدد (someone) للتعبير عن شخص مجهول يقوم بالسرقة."
      },
      {
        question: "Juha checked his camels and found _______ missing when he stood up.",
        questionAr: "فحص جحا جماله ولم يجد _______ مفقوداً عندما وقف.",
        options: ["nothing", "anything", "something", "someone"],
        correctAnswer: "nothing",
        explanation: "We use 'nothing' in positive sentences to express a total absence of things or missing animals.",
        explanationAr: "نستخدم الضمير (nothing) للتعبير عن عدم وجود أي شيء مفقود أو غائب."
      }
    ]
  }
};
