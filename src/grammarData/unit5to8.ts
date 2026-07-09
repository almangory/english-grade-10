import { GrammarRule, GrammarQuizQuestion } from "./unit1to4";

export const grammarUnit5to8: Record<string, { rule: GrammarRule; quiz: GrammarQuizQuestion[] }> = {
  // UNIT 5: Science
  "5-1": {
    rule: {
      title: "Present Simple for Scientific Facts",
      titleAr: "المضارع البسيط للحقائق العلمية والكونية",
      explanation: "We use the Present Simple to state scientific truths, natural laws, and general facts that are always true.",
      explanationAr: "نستخدم زمن المضارع البسيط للتعبير عن الحقائق العلمية والقوانين الطبيعية التي تظل صحيحة ومؤكدة دائماً.",
      formula: "Subject (Singular) + Verb + -s/-es\nSubject (Plural) + Verb (Base)",
      examples: [
        { en: "Solar energy comes from the sun and makes free electricity.", ar: "تأتي الطاقة الشمسية من الشمس وتصنع كهرباء مجانية." },
        { en: "The sun shines in Sudan almost every day.", ar: "تشرق الشمس في السودان كل يوم تقريباً." }
      ]
    },
    quiz: [
      {
        question: "Solar panels _______ sunlight into clean electricity.",
        questionAr: "الألواح الشمسية _______ ضوء الشمس إلى كهرباء نظيفة.",
        options: ["converts", "convert", "converting", "converted"],
        correctAnswer: "convert",
        explanation: "Since 'panels' is plural, we use the base verb 'convert' for scientific facts.",
        explanationAr: "بما أن الفاعل جمع (panels)، نستخدم مصدر الفعل (convert) للتعبير عن حقيقة علمية."
      },
      {
        question: "Solar energy _______ from the sun, which never stops shining.",
        questionAr: "الطاقة الشمسية _______ من الشمس، التي لا تتوقف عن الشروق أبداً.",
        options: ["come", "comes", "coming", "came"],
        correctAnswer: "comes",
        explanation: "Solar energy is uncountable (singular), so we add '-s' to the verb ('comes').",
        explanationAr: "الطاقة الشمسية اسم غير معدود يعامل كالمفرد، لذا نضيف حرف s للفعل ليصبح (comes)."
      }
    ]
  },
  "5-2": {
    rule: {
      title: "Present Passive Voice for Processes",
      titleAr: "المبني للمجهول في المضارع لوصف العمليات والخطوات",
      explanation: "We use the Present Simple Passive when describing the steps of an industrial process or recipe where the actions are more important than who does them.",
      explanationAr: "نستخدم صيغة المبني للمجهول في زمن المضارع البسيط لوصف خطوات عملية تصنيع أو كيميائية عندما يكون الفعل أهم من فاعله.",
      formula: "Subject + is/are + Verb3 (Past Participle)",
      examples: [
        { en: "The cocoa beans are roasted in large ovens first.", ar: "يتم تحميص حبوب الكاكاو في أفران كبيرة أولاً." },
        { en: "Sugar and milk are added to make sweet chocolate.", ar: "يُضاف السكر والحليب لصناعة الشوكولاتة الحلوة." }
      ]
    },
    quiz: [
      {
        question: "First of all, the dry cocoa beans _______ to remove dirt.",
        questionAr: "أولاً وقبل كل شيء، حبوب الكاكاو الجافة _______ لإزالة الأتربة.",
        options: ["is washed", "are washed", "washed", "washing"],
        correctAnswer: "are washed",
        explanation: "Since 'beans' is a plural object being acted upon, we use 'are washed' in the present passive.",
        explanationAr: "حبوب الكاكاو (beans) جمع وقع عليها الفعل، فنستخدم صيغة الجمع للمجهول (are washed)."
      },
      {
        question: "Finally, the liquid chocolate _______ into beautiful plastic moulds.",
        questionAr: "أخيراً، الشوكولاتة السائلة _______ في قوالب بلاستيكية جميلة.",
        options: ["is poured", "are poured", "pours", "pour"],
        correctAnswer: "is poured",
        explanation: "Liquid chocolate is uncountable (singular), so we use 'is poured' in the present passive.",
        explanationAr: "الشوكولاتة السائلة مفرد غير معدود، لذا نستخدم صيغة المفرد للمبني للمجهول (is poured)."
      }
    ]
  },
  "5-3": {
    rule: {
      title: "Clauses of Purpose (So that / So + Can)",
      titleAr: "روابط الغاية والغرض (So that و So)",
      explanation: "We use 'so that' or 'so' followed by a modal like 'can' or 'could' to show the purpose, reason, or objective of an action.",
      explanationAr: "نستخدم (so that) أو (so) (لكي/حتى يتمكن) متبوعة بفاعل وفعل ناقص لبيان هدف وغاية وقوع الفعل الرئيسي.",
      formula: "Sentence + so that / so + Subject + can/will + Verb (Base)",
      examples: [
        { en: "The government needs statistics so they can plan services.", ar: "تحتاج الحكومة للإحصاءات لكي تتمكن من التخطيط للخدمات." },
        { en: "Teams use computers so that they can count people quickly.", ar: "تستخدم الفرق الحواسيب حتى يتمكنوا من عد الناس بسرعة." }
      ]
    },
    quiz: [
      {
        question: "We collect population data _______ we can build schools and hospitals.",
        questionAr: "نحن نجمع بيانات السكان _______ نتمكن من بناء المدارس والمستشفيات.",
        options: ["so that", "because", "even though", "to"],
        correctAnswer: "so that",
        explanation: "We use 'so that' to connect the action of collecting data to its future purpose 'we can build'.",
        explanationAr: "نستخدم (so that) لربط عملية جمع البيانات بهدفها المستقبلي وهو القدرة على البناء."
      },
      {
        question: "Teams write down statistics _______ they don't forget the exact numbers.",
        questionAr: "تكتب الفرق الإحصاءات _______ لا ينسوا الأرقام الدقيقة.",
        options: ["so that", "because", "but", "though"],
        correctAnswer: "so that",
        explanation: "We use 'so that' followed by a clause to express the purpose of not forgetting numbers.",
        explanationAr: "نستخدم (so that) متبوعة بجملة لبيان الغرض والنتيجة المرجوة."
      }
    ]
  },
  "5-4": {
    rule: {
      title: "Zero Conditional for Scientific Truths",
      titleAr: "الشرطية من النوع صفر للحقائق الثابتة والطبيعة",
      explanation: "We use the Zero Conditional to describe situations that are always true, such as natural cycles, rules, or scientific causes and effects.",
      explanationAr: "نستخدم الحالة الشرطية صفر للتعبير عن أشياء تحدث دائماً كنتيجة لحدث آخر مثل قوانين الطبيعة وسلوك الحشرات والعلوم.",
      formula: "If/When + Present Simple, Present Simple",
      examples: [
        { en: "When I land on flowers, the pollen sticks to my legs.", ar: "عندما أهبط على الزهور، يعلق حبوب اللقاح بأرجلي." },
        { en: "If you heat ice, it melts into water.", ar: "إذا سخنت الثلج، فإنه يذوب ويتحول إلى ماء." }
      ]
    },
    quiz: [
      {
        question: "If a bee _______ a special dance, other bees find the flowers.",
        questionAr: "إذا _______ النحلة رقصة خاصة، تجد النحلات الأخرى الزهور.",
        options: ["does", "do", "doing", "did"],
        correctAnswer: "does",
        explanation: "In Zero Conditional, both clauses are in the Present Simple. 'A bee' is singular, so we use 'does'.",
        explanationAr: "في الحالة صفر، تكون الجملتان في المضارع البسيط. الفاعل مفرد (a bee) فنختار (does)."
      },
      {
        question: "When I fly back to the hive, I _______ food to the queen bee.",
        questionAr: "عندما أطير عائداً للخلية، أنا _______ الغذاء لملكة النحل.",
        options: ["give", "gives", "giving", "gave"],
        correctAnswer: "give",
        explanation: "The pronoun 'I' takes the base verb 'give' in the present simple zero conditional.",
        explanationAr: "الضمير المتكلم 'I' يأخذ الفعل المضارع بدون إضافات (give) في جواب الشرط للحالة صفر."
      }
    ]
  },
  "5-5": {
    rule: {
      title: "Modal 'Should' for Instructions & First Aid",
      titleAr: "الفعل الناقص 'Should' للنصائح الطبية والتعليمات",
      explanation: "We use 'should' and 'should not' to give recommendations, first aid advice, and helpful instructions.",
      explanationAr: "نستخدم الفعل الناقص (should) (ينبغي) و (shouldn't) (لا ينبغي) لتقديم التوجيهات الطبية ونصائح الإسعافات الأولية.",
      formula: "Subject + should / shouldn't + Verb (Base)",
      examples: [
        { en: "If you are bitten by a scorpion, you should wash the bite.", ar: "إذا لدغك عقرب، ينبغي عليك غسل مكان اللدغة." },
        { en: "You should not run because it makes your blood flow faster.", ar: "لا ينبغي عليك الجري لأن ذلك يجعل دمك يتدفق بشكل أسرع." }
      ]
    },
    quiz: [
      {
        question: "If a mosquito bites you, you _______ scratch the skin.",
        questionAr: "إذا لدغتك بعوضة، لا _______ تحك جلدك.",
        options: ["shouldn't", "should", "need", "must to"],
        correctAnswer: "shouldn't",
        explanation: "Scratching makes the bite worse, so we advise 'shouldn't scratch'.",
        explanationAr: "حك الجلد يجعل اللدغة أسوأ، لذا ننصح بعدم فعل ذلك باستخدام (shouldn't)."
      },
      {
        question: "You _______ drink warm water and rest quietly if you feel dizzy.",
        questionAr: "ينبغي _______ عليك شرب ماء دافئ والاستراحة بهدوء إذا شعرت بالدوار.",
        options: ["should", "should to", "needing", "ought"],
        correctAnswer: "should",
        explanation: "We use 'should' followed directly by the base verb 'drink' to give advice.",
        explanationAr: "نستخدم (should) متبوعة بمصدر الفعل مباشرة لتقديم النصيحة الطبية الفعالة."
      }
    ]
  },
  "5-6": {
    rule: {
      title: "Present Continuous vs Present Simple",
      titleAr: "المضارع المستمر مقابل المضارع البسيط",
      explanation: "We use the Present Continuous for temporary actions happening right now, and the Present Simple for permanent states or regular routines.",
      explanationAr: "نستخدم المضارع المستمر للأحداث الجارية حالياً ومؤقتاً، والمضارع البسيط للحالات الدائمة والعادات الروتينية.",
      formula: "Continuous: Subject + am/is/are + Verb-ing\nSimple: Subject + Verb / Verb-s",
      examples: [
        { en: "I'm changing the car tyres now so they don't wear out.", ar: "أقوم بتغيير إطارات السيارة الآن حتى لا تتآكل. (حدث جاري)" },
        { en: "He drives his car to work every day.", ar: "يقود سيارته إلى العمل كل يوم. (عادة متكررة)" }
      ]
    },
    quiz: [
      {
        question: "Look! The mechanic _______ the car engine at the moment.",
        questionAr: "انظر! الميكانيكي _______ محرك السيارة في هذه اللحظة.",
        options: ["fixes", "is fixing", "fixed", "fixing"],
        correctAnswer: "is fixing",
        explanation: "The word 'Look!' indicates that the action is happening right now, so we use Present Continuous ('is fixing').",
        explanationAr: "وجود كلمة التنبيه (Look!) يعني أن الحدث مستمر ويقع الآن، فنستخدم المضارع المستمر (is fixing)."
      },
      {
        question: "My father always _______ the water levels before starting his car journey.",
        questionAr: "دائماً والدي _______ مستويات المياه قبل بدء رحلته بالسيارة.",
        options: ["checks", "checking", "is checking", "check"],
        correctAnswer: "checks",
        explanation: "The frequency adverb 'always' indicates a regular routine, so we use the Present Simple ('checks').",
        explanationAr: "وجود ظرف التكرار (always) يدل على عادة روتينية منتظمة، فنستخدم المضارع البسيط (checks)."
      }
    ]
  },
  "5-7": {
    rule: {
      title: "Comparatives with 'Which' Clause Connection",
      titleAr: "صفات المقارنة متبوعة بجملة وصل توضيحية",
      explanation: "We use comparative adjectives (-er than) to contrast two things, followed by a 'which' clause to explain the physical result of that difference.",
      explanationAr: "نستخدم صفات المقارنة (أكثر من) للمقارنة بين شيئين علميين، ونتبع ذلك بجملة وصل بـ (which) لبيان الأثر المترتب على الفرق.",
      formula: "Noun A + is + Comparative + than + Noun B, which + Verb",
      examples: [
        { en: "Salty water is denser than fresh water, which pushes the egg up.", ar: "الماء المالح أكثر كثافة من الماء العذب، وهو ما يدفع البيضة لأعلى." },
        { en: "Salty water makes things float, which is amazing.", ar: "الماء المالح يجعل الأشياء تطفو، وهو أمر مذهل." }
      ]
    },
    quiz: [
      {
        question: "Warm air is lighter _______ cold air, which makes it rise up.",
        questionAr: "الهواء الدافئ أخف وزناً _______ الهواء البارد، وهو ما يجعله يرتفع لأعلى.",
        options: ["as", "than", "then", "like"],
        correctAnswer: "than",
        explanation: "Comparative adjectives like 'lighter' are followed by 'than'.",
        explanationAr: "الصفات المقارنة مثل 'lighter' (أخف) تتبع دائماً بـ (than) (من)."
      },
      {
        question: "Salt water has a higher density, _______ helps objects float easily.",
        questionAr: "الماء المالح لديه كثافة أعلى، _______ يساعد الأجسام على الطفو بسهولة.",
        options: ["who", "which", "whose", "where"],
        correctAnswer: "which",
        explanation: "We use 'which' to refer back to the entire physical fact in the previous clause.",
        explanationAr: "نستخدم ضمير الوصل غير العاقل (which) ليعود على الحقيقة العلمية السابقة بكاملها."
      }
    ]
  },
  "5-8": {
    rule: {
      title: "Scientific Passive with Modal Possibility",
      titleAr: "المبني للمجهول العلمي مع إمكانية الأفعال الناقصة",
      explanation: "We combine modals like 'can' or 'must' with 'be + past participle' to state scientific possibilities or rules of materials.",
      explanationAr: "نجمع الأفعال الناقصة مثل (can) أو (must) مع التركيب (be + التصريف الثالث) للتعبير عن الإمكانيات والخصائص العلمية للمواد.",
      formula: "Subject + can/must + be + Verb3 (Past Participle)",
      examples: [
        { en: "In hot weather, car tyres can be damaged easily.", ar: "في الطقس الحار، يمكن أن تتعرض إطارات السيارات للتلف بسهولة." },
        { en: "Sorghum must be harvested before the heavy rains start.", ar: "يجب حصاد الذرة الرفيعة قبل بدء هطول الأمطار الغزيرة." }
      ]
    },
    quiz: [
      {
        question: "Plastic bottles can _______ recycled to make new science equipment.",
        questionAr: "يمكن _______ تدوير الزجاجات البلاستيكية لصنع أدوات علمية جديدة.",
        options: ["be", "been", "being", "is"],
        correctAnswer: "be",
        explanation: "After modal 'can' in passive voice, we must use the base helper 'be' followed by Verb3.",
        explanationAr: "بعد الفعل الناقص (can) في المبني للمجهول، نضع مصدر الفعل المساعد (be) متبوعاً بالتصريف الثالث."
      },
      {
        question: "Solar power must _______ carefully to avoid losing electricity.",
        questionAr: "يجب _______ الطاقة الشمسية بعناية لتجنب فقدان الكهرباء.",
        options: ["store", "stored", "be stored", "being stored"],
        correctAnswer: "be stored",
        explanation: "We use the passive infinitive 'be stored' after the modal of obligation 'must'.",
        explanationAr: "نستخدم صيغة المجهول (be stored) بعد فعل الوجوب والاضطرار (must)."
      }
    ]
  },

  // UNIT 6: Hobbies and Pastimes
  "6-1": {
    rule: {
      title: "Concession with 'Although'",
      titleAr: "التنازل والمفارقة بـ 'Although'",
      explanation: "We use 'although' or 'though' at the start of a sentence to show a surprising contrast between a challenge and a positive outcome.",
      explanationAr: "نستخدم 'although' (على الرغم من) للربط بين جملتين وبدء فكرة تحتوي على تباين ومفارقة غير متوقعة لنتيجة إيجابية.",
      formula: "Although + Clause 1 (obstacle), Clause 2 (surprising outcome)",
      examples: [
        { en: "Although they were behind, El Obeid team didn't lose hope.", ar: "على الرغم من أنهم كانوا متأخرين، إلا أن فريق الأبيض لم يفقد الأمل." },
        { en: "We won the football match although our captain was injured.", ar: "فزنا بمباراة كرة القدم على الرغم من إصابة قائد فريقنا." }
      ]
    },
    quiz: [
      {
        question: "_______ the other football team led the match, our school scored in the final minute.",
        questionAr: "_______ الفريق الآخر كان متصدراً للمباراة، إلا أن مدرستنا سجلت في الدقيقة الأخيرة.",
        options: ["Because", "Although", "So", "However"],
        correctAnswer: "Although",
        explanation: "We use 'Although' to contrast the opponent's lead with our surprise final score.",
        explanationAr: "نستخدم (Although) للتعبير عن التناقض والمفارقة بين تقدم الخصم وهدفنا المفاجئ."
      },
      {
        question: "Wail ran very fast _______ he had a sore foot.",
        questionAr: "ركض وائل بسرعة كبيرة _______ كان لديه قدم تؤلمه.",
        options: ["because of", "although", "so", "but"],
        correctAnswer: "although",
        explanation: "We use 'although' to join the contrast of running fast despite having a sore foot.",
        explanationAr: "نستخدم (although) لربط حقيقة ركضه السريع كفعل على الرغم من وجود ألم بقدمه."
      }
    ]
  },
  "6-2": {
    rule: {
      title: "Made of vs Made by",
      titleAr: "الفرق بين 'صُنع من مادة' و 'صُنع بواسطة'",
      explanation: "We use 'made of' to name the material of an object (which hasn't changed its form completely), and 'made by' to name the person, tool, or country of manufacture.",
      explanationAr: "نستخدم (made of) للإشارة للمادة الخام المصنوع منها الشيء، ونستخدم (made by) للإشارة للشخص أو الجهة الصانعة للشيء.",
      formula: "Subject + is/are + made + of + Material\nSubject + is/are + made + by + Person / Method",
      examples: [
        { en: "These traditional sandals are made of genuine leather.", ar: "هذه الصنادل التقليدية مصنوعة من الجلد الطبيعي." },
        { en: "This wooden box was made by hand by my grandfather.", ar: "هذا الصندوق الخشبي صُنع يدوياً بواسطة جدي." }
      ]
    },
    quiz: [
      {
        question: "Sudanese traditional sandals are made _______ strong leather.",
        questionAr: "الصنادل السودانية التقليدية مصنوعة _______ جلد قوي.",
        options: ["by", "of", "from", "for"],
        correctAnswer: "of",
        explanation: "We use 'made of' because the material (leather) is still visible and recognizable in the final sandals.",
        explanationAr: "نستخدم (made of) لأن المادة الأساسية (الجلد) لم تتغير طبيعتها بالكامل ولا تزال واضحة."
      },
      {
        question: "This beautiful pottery vase was made _______ a local craftsman in Kassala.",
        questionAr: "هذه المزهرية الفخارية الجميلة صُنعت _______ حرفي محلي في كسلا.",
        options: ["of", "from", "by", "with"],
        correctAnswer: "by",
        explanation: "We use 'made by' to indicate the person or craftsman who created the vase.",
        explanationAr: "نستخدم (made by) لربط الإناء بالشخص الصانع له (الحرفي المحلي)."
      }
    ]
  },
  "6-3": {
    rule: {
      title: "Spatial Prepositions for Photo Description",
      titleAr: "حروف جر المكان لوصف الصور واللوحات",
      explanation: "We use spatial prepositions (on the left, on the right, in the middle, behind, in front of) to guide people's eyes when describing photos.",
      explanationAr: "نستخدم حروف الجر المكانية (على اليسار، في المنتصف، خلف، أمام) لمساعدة المستمع على تصور عناصر وتفاصيل الصورة المعروضة.",
      formula: "on the left/right / in the middle / in front of / behind + of the picture",
      examples: [
        { en: "Some cows are standing in the middle of the photograph.", ar: "تقف بعض الأبقار في منتصف الصورة الفوتوغرافية." },
        { en: "On the left of the scene, you can see a large green tree.", ar: "على يسار المشهد، يمكنك رؤية شجرة خضراء كبيرة." }
      ]
    },
    quiz: [
      {
        question: "In my holiday photo, my sister Hala is standing _______ the middle.",
        questionAr: "في صورة عطلتي، تقف أختي هالة _______ المنتصف.",
        options: ["at", "on", "in", "by"],
        correctAnswer: "in",
        explanation: "The correct preposition for 'middle' in physical spaces is 'in' ('in the middle').",
        explanationAr: "حرف الجر الصحيح المرافق لكلمة 'middle' في المواقع هو (in) لتصبح (in the middle)."
      },
      {
        question: "Hala is on the right, and my brother Abdullah is standing _______ the left of the image.",
        questionAr: "هالة على اليمين، وأخي عبد الله يقف _______ يسار الصورة.",
        options: ["on", "in", "at", "to"],
        correctAnswer: "on",
        explanation: "We use the preposition 'on' with directional sides ('on the left', 'on the right').",
        explanationAr: "نستخدم حرف الجر (on) مع الاتجاهات الجانبية لتصبح الجملة (on the left)."
      }
    ]
  },
  "6-4": {
    rule: {
      title: "Gerunds vs Infinitives for Opinions",
      titleAr: "المصدر (Gerund) مقابل المصدر بحرف جر (Infinitive) في التعبير عن الرأي",
      explanation: "We can use gerunds (verb-ing) or infinitives (to + verb) to express opinions and judgments about hobbies.",
      explanationAr: "يمكننا استخدام صيغة اسم المصدر (-ing) أو المصدر الكامل (to + المصدر) للتعبير عن آرائنا وهواياتنا المفضلة.",
      formula: "Subject + think + Gerund + is + Adjective\nIt is + Adjective + to + Verb (Base)",
      examples: [
        { en: "My friends think collecting spiders is a waste of time.", ar: "صديقاتي يعتقدن أن جمع العناكب هو تضييع للوقت." },
        { en: "I think it’s really fun to paint traditional designs.", ar: "أعتقد أنه من الممتع حقاً رسم التصاميم التقليدية." }
      ]
    },
    quiz: [
      {
        question: "_______ traditional board games is a great way to make friends.",
        questionAr: "_______ الألعاب اللوحية التقليدية طريقة رائعة لتكوين صداقات.",
        options: ["Play", "Played", "Playing", "To playing"],
        correctAnswer: "Playing",
        explanation: "The gerund 'Playing' functions as the subject of the sentence expressing an opinion.",
        explanationAr: "نستخدم اسم المصدر (Playing) (اللعب) كفاعل في بداية الجملة لبيان الرأي."
      },
      {
        question: "I think it's very exciting _______ old historic coins.",
        questionAr: "أعتقد أنه من المثير جداً _______ العملات التاريخية القديمة.",
        options: ["collect", "to collect", "collected", "collecting to"],
        correctAnswer: "to collect",
        explanation: "After the dummy subject 'It is + adjective' ('It's exciting'), we use 'to + infinitive'.",
        explanationAr: "بعد التعبير الإنشائي (It is + صفة) نستخدم المصدر المسبوق بـ to لتصبح الجملة (to collect)."
      }
    ]
  },
  "6-5": {
    rule: {
      title: "Past Habits with 'Used to' and 'Would'",
      titleAr: "العادات والأنشطة الماضية باستخدام (Used to) و (Would)",
      explanation: "We use 'used to' for past states and habits that are no longer true, and 'would' for repeated past actions (but not states).",
      explanationAr: "نستخدم (used to) للتعبير عن حالات وعادات ماضية لم تعد قائمة الآن، ونستخدم (would) للتعبير عن أفعال ماضية تكررت بانتظام.",
      formula: "Subject + used to + Verb (Base)\nSubject + would + Verb (Base - action verbs only)",
      examples: [
        { en: "I used to spend all my time playing computer games.", ar: "اعتدتُ قضاء كل وقتي في لعب ألعاب الكمبيوتر." },
        { en: "When I was ten, we would play traditional games every evening.", ar: "عندما كنت في العاشرة من عمري، كنا نلعب الألعاب التقليدية كل مساء." }
      ]
    },
    quiz: [
      {
        question: "I _______ have a bike, but I sold it when I started high school.",
        questionAr: "_______ لدي دراجة نارية، لكنني بعتها عندما بدأت المدرسة الثانوية.",
        options: ["would", "used to", "used", "use to"],
        correctAnswer: "used to",
        explanation: "Since 'have' is a state verb, we must use 'used to' rather than 'would' to describe a past state.",
        explanationAr: "بما أن 'have' (يمتلك) يعبر عن حالة وليس حركة، فيجب استخدام (used to) وليس would."
      },
      {
        question: "Every Friday in childhood, we _______ go fishing in the Blue Nile with our father.",
        questionAr: "كل جمعة في طفولتنا، كنا _______ نذهب للصيد في النيل الأزرق مع والدنا.",
        options: ["would", "used", "use to", "are"],
        correctAnswer: "would",
        explanation: "We can use 'would' here to describe a repeated action ('go fishing') in the past.",
        explanationAr: "يمكننا استخدام (would) هنا لوصف نشاط حركي تكرر بانتظام في الماضي وهو (go fishing)."
      }
    ]
  },
  "6-6": {
    rule: {
      title: "Desires with 'Want to be' & Conditional Type 1",
      titleAr: "الرغبات المستقبلية مع (Want to be) والشرطية الأولى",
      explanation: "We use 'want to be + noun' to express career aspirations, combined with Conditional Type 1 for real agreements or predictions.",
      explanationAr: "نستخدم التعبير (want to be) لبيان طموحات المهنة في المستقبل، متبوعاً بالشرطية الأولى للوعود والتخطيط.",
      formula: "Subject + want to be + Noun\nIf + Present Simple, will + Verb (Base)",
      examples: [
        { en: "I want to be a professional writer when I grow up.", ar: "أريد أن أصبح كاتباً محترفاً عندما أكبر." },
        { en: "If we are all alive, let’s meet here in ten years.", ar: "إذا كنا جميعاً على قيد الحياة، فلنلتقِ هنا بعد عشر سنوات." }
      ]
    },
    quiz: [
      {
        question: "Mona _______ to be an artist because she loves drawing local landscapes.",
        questionAr: "منى _______ أن تصبح فنانة تشكيلية لأنها تعشق رسم المناظر الطبيعية المحلية.",
        options: ["want", "wants", "is wanting", "wanted"],
        correctAnswer: "wants",
        explanation: "Since Mona is singular, we use 'wants' in the present simple to show her aspiration.",
        explanationAr: "بما أن منى فاعل مفرد غائب، نستخدم الفعل المضارع المضاف له s وهو (wants)."
      },
      {
        question: "If I find a good English novel, I _______ it to you to read.",
        questionAr: "إذا وجدتُ رواية إنجليزية جيدة، _______ إياها لك لتقرأها.",
        options: ["give", "will give", "gave", "would give"],
        correctAnswer: "will give",
        explanation: "In Conditional Type 1, the main result clause uses 'will + base verb' ('will give').",
        explanationAr: "في الحالة الشرطية الأولى، نستخدم في جواب الشرط صيغة المستقبل البسيط (will give)."
      }
    ]
  },
  "6-7": {
    rule: {
      title: "Agreement with 'So do I' & 'Neither do I'",
      titleAr: "التعبير عن الموافقة والتوافق بـ 'So do I' و 'Neither do I'",
      explanation: "We use 'So do I' to agree with a positive statement, and 'Neither do I' to agree with a negative statement in the present simple.",
      explanationAr: "نستخدم (So do I) (وأنا كذلك) للموافقة على جملة إيجابية، ونستخدم (Neither do I) (ولا أنا كذلك) للموافقة على جملة منفية.",
      formula: "Positive Statement -> So + Auxiliary + Subject\nNegative Statement -> Neither + Auxiliary + Subject",
      examples: [
        { en: "I like helping disabled children. Yes, so do I.", ar: "أنا أحب مساعدة الأطفال ذوي الاحتياجات الخاصة. نعم، وأنا كذلك." },
        { en: "I don't like watching too much TV. Neither do I.", ar: "أنا لا أحب مشاهدة التلفاز كثيراً. ولا أنا كذلك." }
      ]
    },
    quiz: [
      {
        question: "Ali: 'I love playing football with my cousins.' - Tariq: '_______.'",
        questionAr: "علي: 'أنا أعشق لعب كرة القدم مع أبناء عمي.' - طارق: '_______.'",
        options: ["Neither do I", "So do I", "So I do", "Neither I do"],
        correctAnswer: "So do I",
        explanation: "Tariq agrees with a positive statement ('I love...'), so he must use 'So do I'.",
        explanationAr: "طارق يوافق على جملة مثبتة (I love)، لذا يجب استخدام التركيب (So do I) (وأنا كذلك)."
      },
      {
        question: "Samah: 'I don't enjoy swimming in cold deep rivers.' - Mona: '_______.'",
        questionAr: "سماح: 'أنا لا أستمتع بالسباحة في الأنهار العميقة الباردة.' - منى: '_______.'",
        options: ["So do I", "Neither do I", "Neither I enjoy", "So I don't"],
        correctAnswer: "Neither do I",
        explanation: "Mona agrees with a negative statement ('I don't...'), so she uses 'Neither do I'.",
        explanationAr: "منى توافق على جملة سلبية منفية (I don't)، لذا تستخدم التركيب النحوي (Neither do I)."
      }
    ]
  },
  "6-8": {
    rule: {
      title: "Expressing Preference with 'Prefer ... to ...'",
      titleAr: "التعبير عن التفضيل بين هوايتين باستخدام 'prefer ... to ...'",
      explanation: "We use 'prefer + gerund + to + gerund' to show that we like one activity more than another.",
      explanationAr: "نستخدم التركيب (prefer + اسم مصدر + to + اسم مصدر) لبيان تفضيل ممارسة نشاط أو هواية على أخرى.",
      formula: "Subject + prefer + Verb-ing + to + Verb-ing",
      examples: [
        { en: "I prefer reading novels to playing video games.", ar: "أفضل قراءة الروايات على لعب ألعاب الفيديو." },
        { en: "She prefers swimming to running in the hot sun.", ar: "هي تفضل السباحة على الجري في الشمس الحارة." }
      ]
    },
    quiz: [
      {
        question: "Hana prefers writing useful phrases _______ memorizing lists.",
        questionAr: "تفضل هناء كتابة العبارات المفيدة _______ حفظ القوائم صماً.",
        options: ["than", "to", "rather", "from"],
        correctAnswer: "to",
        explanation: "The verb 'prefer' takes the preposition 'to' when comparing two noun/gerund activities.",
        explanationAr: "الفعل 'prefer' (يفضل) يربط بين نشاطين باستخدام حرف الجر (to) وليس than."
      },
      {
        question: "I prefer _______ photos of historic sites to sketching them.",
        questionAr: "أنا أفضل _______ صور للمواقع التاريخية على رسمها تخطيطياً.",
        options: ["take", "taking", "to take", "taken"],
        correctAnswer: "taking",
        explanation: "To match the structure, 'prefer' is followed by the gerund 'taking'.",
        explanationAr: "لتطابق الهيكل اللغوي للتفضيل، نستخدم صيغة المصدر (-ing) وهي (taking)."
      }
    ]
  },

  // UNIT 7: Money and Trade
  "7-1": {
    rule: {
      title: "Contrast with 'While' and 'Whereas'",
      titleAr: "إظهار التباين والمقارنة باستخدام 'While' و 'Whereas'",
      explanation: "We use 'while' and 'whereas' to contrast facts or currencies of different countries in a single sentence.",
      explanationAr: "نستخدم الروابط 'while' و 'whereas' (بينما / في حين أن) لإظهار التباين والمفارقة بين حقائق أو عملات بلدان مختلفة.",
      formula: "Clause 1, + while / whereas + Clause 2",
      examples: [
        { en: "In Sudan they use the pound, while in Japan they use the yen.", ar: "في السودان يستخدمون الجنيه، بينما في اليابان يستخدمون الين." },
        { en: "Gold is very heavy, whereas feathers are extremely light.", ar: "الذهب ثقيل جداً، في حين أن الريش خفيف للغاية." }
      ]
    },
    quiz: [
      {
        question: "In Kenya people buy goods with the shilling, _______ in the UK they use the pound.",
        questionAr: "في كينيا يشتري الناس البضائع بالشلن، _______ في المملكة المتحدة يستخدمون الجنيه.",
        options: ["because", "whereas", "so", "since"],
        correctAnswer: "whereas",
        explanation: "We use 'whereas' to show a direct contrast between the currencies used in two countries.",
        explanationAr: "نستخدم (whereas) (بينما/في حين أن) للربط وإظهار التناقض والتباين بين عملات الدول."
      },
      {
        question: "Camels are used in the desert, _______ trucks are used in modern trade roads.",
        questionAr: "تُستخدم الجمال في الصحراء، _______ تُستخدم الشاحنات في طرق التجارة الحديثة.",
        options: ["while", "because", "so", "unless"],
        correctAnswer: "while",
        explanation: "We use 'while' to contrast traditional camel transport with modern trucks.",
        explanationAr: "نستخدم أداة التباين (while) لبيان الفرق والتباين بين طريقتي النقل القديمة والحديثة."
      }
    ]
  },
  "7-2": {
    rule: {
      title: "Present Simple Passive for Industry & Origins",
      titleAr: "المبني للمجهول في المضارع البسيط للصناعات والمنشأ",
      explanation: "We use the Present Simple Passive to describe where goods are manufactured, grown, or produced.",
      explanationAr: "نستخدم صيغة المبني للمجهول في زمن المضارع البسيط للحديث عن منشأ السلع والمنتجات ومكان زراعتها وتصنيعها.",
      formula: "Subject + is/are + Verb3 (Past Participle) + in/by + Place/Agent",
      examples: [
        { en: "Most of the cars in Sudan are manufactured in Japan.", ar: "معظم السيارات في السودان تُصنع في اليابان." },
        { en: "Tea is grown in Kenya and imported to Sudan.", ar: "الشاي يُزرع في كينيا ويُستورد إلى السودان." }
      ]
    },
    quiz: [
      {
        question: "Gum Arabic _______ from acacia trees in western Sudan.",
        questionAr: "الصمغ العربي _______ من أشجار الهشاب في غرب السودان.",
        options: ["is produced", "are produced", "produces", "producing"],
        correctAnswer: "is produced",
        explanation: "Gum Arabic is singular/uncountable, so we use 'is produced' in the present passive.",
        explanationAr: "الصمغ العربي اسم مفرد غير معدود، لذا نستخدم صيغة المفرد للمجهول (is produced)."
      },
      {
        question: "Camels _______ to neighboring countries for trade.",
        questionAr: "الجمال _______ إلى الدول المجاورة بغرض التجارة.",
        options: ["is exported", "are exported", "export", "exporting"],
        correctAnswer: "are exported",
        explanation: "Since 'camels' is plural, we use 'are exported' in the passive structure.",
        explanationAr: "بما أن الفاعل 'الجمال' جمع، نختار صيغة المبني للمجهول للجمع (are exported)."
      }
    ]
  },
  "7-3": {
    rule: {
      title: "Large Numbers & Expressions of Value (Worth)",
      titleAr: "الأعداد الكبيرة والتعبير عن القيمة المادية بـ 'Worth'",
      explanation: "We use 'worth' followed by an amount of money to describe the trade value of exports.",
      explanationAr: "نستخدم التعبير (worth) (يساوي/قيمته مادية) متبوعاً بقيمة مالية أو أعداد كبيرة لوصف القيمة التجارية للصادرات.",
      formula: "Subject + is/are + worth + Number + Currency",
      examples: [
        { en: "These sheep exports are worth millions of pounds.", ar: "هذه صادرات الأغنام تساوي ملايين الجنيهات." },
        { en: "A billion is a thousand times a million.", ar: "المليار هو ألف ضعف المليون." }
      ]
    },
    quiz: [
      {
        question: "Sudan's sesame exports are _______ millions of dollars every year.",
        questionAr: "صادرات السمسم السودانية _______ ملايين الدولارات كل عام.",
        options: ["cost", "price", "worth", "valued"],
        correctAnswer: "worth",
        explanation: "We use 'worth' to express the cash value of trade exports directly before the amount.",
        explanationAr: "نستخدم كلمة (worth) (قيمتها/تساوي) للتعبير عن القيمة المالية للصادرات مباشرة قبل الرقم."
      },
      {
        question: "One _______ is equal to ten hundred thousand.",
        questionAr: "واحد _______ يساوي عشر مئات آلاف (أي مليون).",
        options: ["million", "billion", "thousand", "hundred"],
        correctAnswer: "million",
        explanation: "Ten hundred thousand equals one million (1,000,000).",
        explanationAr: "عشر مئات آلاف تساوي لغوياً وحسابياً المليون (million)."
      }
    ]
  },
  "7-4": {
    rule: {
      title: "Imports and Exports (Active vs Passive)",
      titleAr: "الاستيراد والتصدير (المعلوم مقابل المجهول في التجارة)",
      explanation: "We use active voice when focusing on the country performing the action, and passive voice when focusing on the goods being traded.",
      explanationAr: "نستخدم مبني للمعلوم عندما نركز على الدولة التي تقوم بالعمل التجاري، ومبني للمجهول عند التركيز على البضائع والسلع ذاتها.",
      formula: "Active: Country + imports/exports + Goods\nPassive: Goods + are imported/exported + by/from + Country",
      examples: [
        { en: "Sudan imports trucks from other trading partners.", ar: "يستورد السودان الشاحنات من الشركاء التجاريين الآخرين." },
        { en: "Most machinery is imported from industrial countries.", ar: "معظم الآلات تُستورد من الدول الصناعية." }
      ]
    },
    quiz: [
      {
        question: "Sudan _______ high-quality cotton to textile factories abroad.",
        questionAr: "السودان _______ القطن عالي الجودة إلى مصانع الغزل والنسيج في الخارج.",
        options: ["exports", "is exported", "import", "are imported"],
        correctAnswer: "exports",
        explanation: "We use active voice 'exports' because Sudan is the singular subject performing the action.",
        explanationAr: "نستخدم صيغة المعلوم الحاضر (exports) لأن السودان هو الفاعل المفرد الذي يقوم بالتصدير."
      },
      {
        question: "Many electronic goods _______ into Sudan from Asian markets.",
        questionAr: "العديد من السلع الإلكترونية _______ إلى السودان من الأسواق الآسيوية.",
        options: ["is imported", "are imported", "imports", "importing"],
        correctAnswer: "are imported",
        explanation: "Since 'electronic goods' is plural and receives the action, we use passive 'are imported'.",
        explanationAr: "بما أن الفاعل 'السلع الإلكترونية' جمع وقع عليه فعل الاستيراد، نستخدم المجهول (are imported)."
      }
    ]
  },
  "7-5": {
    rule: {
      title: "Quantifiers for Food & Ingredients",
      titleAr: "محددات الكمية للأطعمة والمكونات الغذائية",
      explanation: "We use quantifiers like 'a lot of', 'less' (for uncountable nouns), and 'fewer' (for countable nouns) to describe nutrition labels.",
      explanationAr: "نستخدم محددات الكمية مثل (a lot of) و (less) (لغير المعدود كالسكر والدهون) و (fewer) (للمعدود كالسعرات الحرارية).",
      formula: "a lot of + Countable/Uncountable Noun\nless + Uncountable Noun\nfewer + Plural Countable Noun",
      examples: [
        { en: "This sweet drink contains a lot of sugar.", ar: "هذا المشروب الحلو يحتوي على الكثير من السكر." },
        { en: "You should eat food with less fat to stay healthy.", ar: "ينبغي عليك تناول أطعمة تحتوي على دهون أقل لتبقى بصحة جيدة." }
      ]
    },
    quiz: [
      {
        question: "Children should drink fruit juices that have _______ sugar.",
        questionAr: "ينبغي على الأطفال شرب عصائر الفاكهة التي تحتوي على سكر _______.",
        options: ["fewer", "less", "many", "few"],
        correctAnswer: "less",
        explanation: "Sugar is uncountable, so we use 'less' to mean a smaller quantity of it.",
        explanationAr: "السكر اسم غير معدود، لذا نستخدم كلمة المقارنة (less) لتعني كمية أقل."
      },
      {
        question: "This diet bar has _______ calories than the chocolate biscuit.",
        questionAr: "هذا البار الغذائي يحتوي على سعرات حرارية _______ من بسكويت الشوكولاتة.",
        options: ["less", "fewer", "least", "much"],
        correctAnswer: "fewer",
        explanation: "Calories is a countable plural noun, so we use 'fewer' to compare it.",
        explanationAr: "السعرات الحرارية (calories) اسم جمع معدود، لذا نستخدم المقارنة (fewer) (أقل)."
      }
    ]
  },
  "7-6": {
    rule: {
      title: "Verbs of Business (Buy, Sell, Trade)",
      titleAr: "أفعال المعاملات التجارية والبيع والشراء",
      explanation: "We use verbs like 'buy from' and 'sell to' in the Present Simple to describe continuous business cycles and supply chains.",
      explanationAr: "نستخدم أفعالاً مثل 'buy from' (يشتري من) و 'sell to' (يبيع لـ) في المضارع البسيط لوصف دورات التجارة المستمرة.",
      formula: "Subject + buy (goods) + from + Supplier\nSubject + sell (goods) + to + Customer",
      examples: [
        { en: "Farmers sell their fresh crops to local wholesale traders.", ar: "يبيع المزارعون محاصيلهم الطازجة لتجار الجملة المحليين." },
        { en: "We buy wheat from agricultural merchants in the market.", ar: "نحن نشتري القمح من تجار المحاصيل في السوق." }
      ]
    },
    quiz: [
      {
        question: "The camel trader _______ his camels to merchants in Egypt.",
        questionAr: "تاجر الجمال _______ جماله للتجار في مصر.",
        options: ["sells", "buys", "import", "exports to"],
        correctAnswer: "sells",
        explanation: "The trader 'sells' his camels to others in Egypt (subject-verb agreement: trader sells).",
        explanationAr: "التاجر يبيع (sells) جماله لجهات أخرى (مفرده الغائب تتطلب s)."
      },
      {
        question: "Sudanese markets _______ delicious tea from Kenya.",
        questionAr: "تشتري الأسواق السودانية الشاي اللذيذ _______ كينيا.",
        options: ["buy of", "buy from", "sell to", "export from"],
        correctAnswer: "buy from",
        explanation: "We use the verb combination 'buy from' to show the source of imported tea.",
        explanationAr: "نستخدم التركيب الفعلي (buy from) (يشتري من) لبيان مصدر السلعة المستوردة."
      }
    ]
  },
  "7-7": {
    rule: {
      title: "Passive Question Tags for Trade",
      titleAr: "الأسئلة المذيلة للمبني للمجهول في التجارة",
      explanation: "When a statement is in the passive voice, we form the question tag using the passive auxiliary verb (is/are/was/were).",
      explanationAr: "عندما تصاغ الجملة في المبني للمجهول، نصيغ السؤال المذيل باستخدام نفس الفعل المساعد للمجهول (is/are/was/were).",
      formula: "Subject + is/are + Verb3, isn't/aren't + subject pronoun?",
      examples: [
        { en: "Camels are exported to Egypt, aren't they?", ar: "تُصَدَّر الجمال إلى مصر، أليس كذلك؟" },
        { en: "The contract was signed yesterday, wasn't it?", ar: "العقد تم توقيعه بالأمس، أليس كذلك؟" }
      ]
    },
    quiz: [
      {
        question: "Most Sudanese camels are exported to neighboring countries, _______?",
        questionAr: "معظم الجمال السودانية تُصَدَّر للدول المجاورة، _______؟",
        options: ["aren't they", "are they", "don't they", "isn't it"],
        correctAnswer: "aren't they",
        explanation: "The passive verb is 'are exported' (plural/positive), so the question tag is 'aren't they'.",
        explanationAr: "بما أن الفعل مبني للمجهول جمع مثبت (are exported)، يكون السؤال المذيل جمع منفي (aren't they)."
      },
      {
        question: "This gold ring is manufactured in Omdurman, _______?",
        questionAr: "هذا الخاتم الذهبي يُصنع في أم درمان، _______؟",
        options: ["isn't it", "is it", "doesn't it", "wasn't it"],
        correctAnswer: "isn't it",
        explanation: "The singular passive 'is manufactured' requires the negative tag 'isn't it' to confirm.",
        explanationAr: "المجهول المفرد الإيجابي (is manufactured) يتطلب سؤالاً مذيلاً منفرداً منفياً وهو (isn't it)."
      }
    ]
  },
  "7-8": {
    rule: {
      title: "Passive Voice with 'Wasted on'",
      titleAr: "المبني للمجهول مع التعبير 'Wasted on' (مُهْدَر على)",
      explanation: "We use 'is/are wasted on' to describe resources like money, time, or water that are spent unwisely on useless things.",
      explanationAr: "نستخدم التركيب المجهول (is/are wasted on) للحديث عن موارد مادية أو معنوية (كالمال أو الوقت) يتم هدرها وضياعها دون نفع.",
      formula: "Subject (Resource) + is/are + wasted + on + Noun/Gerund",
      examples: [
        { en: "A lot of money is wasted on useless advertisements.", ar: "الكثير من الأموال تُهدر على الإعلانات غير المفيدة." },
        { en: "Water is easily wasted in summer if we don't fix the pipes.", ar: "المياه تُهدر بسهولة في الصيف إذا لم نصلح الأنابيب." }
      ]
    },
    quiz: [
      {
        question: "A lot of school time is _______ on playing games instead of studying.",
        questionAr: "الكثير من وقت المدرسة يكون _______ في لعب الألعاب بدلاً من المذاكرة.",
        options: ["wasting", "wasted", "waste", "been wasted"],
        correctAnswer: "wasted",
        explanation: "We use the past participle 'wasted' after 'is' to complete the passive voice structure.",
        explanationAr: "نستخدم التصريف الثالث (wasted) بعد الفعل المساعد (is) لتشكيل المبني للمجهول (مُهْدَر)."
      },
      {
        question: "Precious clean water _______ wasted on watering sandy roads.",
        questionAr: "المياه النظيفة الثمينة _______ تُهدر على ري الطرق الرملية.",
        options: ["is", "are", "were", "been"],
        correctAnswer: "is",
        explanation: "Water is an uncountable singular noun, so it takes the singular auxiliary verb 'is'.",
        explanationAr: "الماء اسم غير معدود مفرد، لذا يأخذ الفعل المساعد المفرد للمجهول (is)."
      }
    ]
  },

  // UNIT 8: Our Bodies
  "8-1": {
    rule: {
      title: "Conditional Type 1 for Health Guidelines",
      titleAr: "الجمل الشرطية من النوع الأول للإرشادات الصحية",
      explanation: "We use Conditional Type 1 to give health advice and state guaranteed scientific results if instructions are followed.",
      explanationAr: "نستخدم الجمل الشرطية من النوع الأول لتقديم نصائح صحية وبيان النتائج الإيجابية الأكيدة في حال اتباع الإرشادات.",
      formula: "If + Present Simple, Subject + will / should + Verb (Base)",
      examples: [
        { en: "If you follow these instructions, you’ll stay healthy.", ar: "إذا اتبعت هذه الإرشادات، فسوف تظل متمتعاً بالصحة." },
        { en: "If you are hot and dehydrated, you should drink water.", ar: "إذا كنت حاراً ومصاباً بالجفاف، ينبغي عليك شرب الماء." }
      ]
    },
    quiz: [
      {
        question: "If you _______ exercises every morning, your heart will stay strong.",
        questionAr: "إذا _______ التمارين كل صباح، فسيبقى قلبك قوياً.",
        options: ["do", "does", "did", "doing"],
        correctAnswer: "do",
        explanation: "For the pronoun 'you' in present simple, we use the base verb 'do' in the 'If' clause.",
        explanationAr: "مع الضمير المخاطب 'you' في المضارع البسيط، نستخدم المصدر (do) في جملة الشرط."
      },
      {
        question: "If she drinks enough water, she _______ dehydrated.",
        questionAr: "إذا شربت مياه كافية، هي لن _______ بالجفاف.",
        options: ["won't get", "don't get", "doesn't get", "wouldn't get"],
        correctAnswer: "won't get",
        explanation: "We use 'won't get' (will not get) to show the guaranteed future outcome in Conditional Type 1.",
        explanationAr: "نستخدم المستقبل البسيط المنفي (won't get) لبيان النتيجة المستقبلية المترتبة على شرب الماء."
      }
    ]
  },
  "8-2": {
    rule: {
      title: "Past Continuous Interrupted by Past Simple",
      titleAr: "الماضي المستمر المقاطع بحدث ماضي بسيط",
      explanation: "We use the Past Continuous to describe an ongoing background activity, and the Past Simple to describe a sudden event that interrupted it.",
      explanationAr: "نستخدم الماضي المستمر لوصف نشاط كان مستمراً في الماضي، والماضي البسيط لوصف حدث مفاجئ قطع هذا الاستمرار.",
      formula: "Subject + was/were + Verb-ing + when + Subject + Verb2 (Past Simple)",
      examples: [
        { en: "I was playing football when I fell and broke my wrist.", ar: "كنت ألعب كرة القدم عندما سقطت وكسرت معصمي." },
        { en: "The doctor was examining a patient when the bell rang.", ar: "كان الطبيب يفحص مريضاً عندما رن الجرس." }
      ]
    },
    quiz: [
      {
        question: "I _______ in the field when I suddenly felt a terrible pain in my foot.",
        questionAr: "كنت _______ في الحقل عندما شعرت فجأة بألم رهيب في قدمي.",
        options: ["was running", "ran", "were running", "am running"],
        correctAnswer: "was running",
        explanation: "We use 'was running' (Past Continuous) to show the background action that was in progress.",
        explanationAr: "نستخدم الماضي المستمر (was running) للتعبير عن الفعل الذي كان مستمراً قبل المقاطعة."
      },
      {
        question: "Wail was lifting weights when his cousin _______ him to help.",
        questionAr: "كان وائل يرفع الأوزان عندما _______ ابن عمه لطلب المساعدة.",
        options: ["calls", "called", "was calling", "calling"],
        correctAnswer: "called",
        explanation: "The action that interrupted Wail was sudden, so we use the Past Simple 'called' after 'when'.",
        explanationAr: "الفعل الذي قاطع وائل هو حدث مفاجئ منتهٍ، فنضع ماضي بسيط (called) بعد الأداة 'when'."
      }
    ]
  },
  "8-3": {
    rule: {
      title: "Comparatives with Numerical Measurements",
      titleAr: "صفات المقارنة متبوعة بالمقاييس الرقمية المحددة",
      explanation: "We can combine comparatives (-er than / more than) with numerical stats to show the exact scale of physical differences.",
      explanationAr: "يمكننا دمج صفات المقارنة والزيادة (more than) مع الأرقام القياسية لبيان الفروق الجسدية بدقة متناهية.",
      formula: "Subject + weighs/beats + Number + grams/times + more than + Object",
      examples: [
        { en: "The male heart weighs about 60 grams more than the female heart.", ar: "يزن قلب الرجل حوالي 60 جراماً أكثر من قلب المرأة." },
        { en: "My brother runs much faster than me.", ar: "أخي يجري أسرع مني بكثير." }
      ]
    },
    quiz: [
      {
        question: "An adult heart beats _______ times faster during physical exercise than at rest.",
        questionAr: "ينبض قلب البالغين _______ مرات أسرع أثناء التمرين البدني مقارنة بوقت الراحة.",
        options: ["many", "more", "much", "most"],
        correctAnswer: "many",
        explanation: "We use 'many' before plural countable noun 'times' to show scale of comparative speed.",
        explanationAr: "نستخدم (many) قبل الاسم المعدود جمع (times) لبيان مقدار زيادة سرعة النبض."
      },
      {
        question: "An athlete's lung capacity is larger _______ an inactive person's.",
        questionAr: "سعة رئة الرياضي تكون أكبر _______ سعة رئة الشخص غير النشط.",
        options: ["as", "than", "then", "like"],
        correctAnswer: "than",
        explanation: "The comparative adjective 'larger' requires 'than' to complete the contrast.",
        explanationAr: "الصفة المقارنة (larger) (أكبر) تتطلب وجود حرف المقارنة (than) (من)."
      }
    ]
  },
  "8-4": {
    rule: {
      title: "Past Perfect with 'By the time'",
      titleAr: "الماضي التام مع الرابط الزمني 'By the time'",
      explanation: "We use the Past Perfect (had + Verb3) to describe an action that was fully completed BEFORE another action in the past occurred.",
      explanationAr: "نستخدم زمن الماضي التام (had + التصريف الثالث) للتعبير عن حدث اكتمل تماماً وقبل وقوع حدث آخر في الماضي.",
      formula: "By the time + Subject + Past Simple, Subject + had + Verb3",
      examples: [
        { en: "By the time the bus reached the clinic, Osman had developed a high fever.", ar: "بحلول الوقت الذي وصلت فيه الحافلة للعيادة، كان عثمان قد أصيب بحمى شديدة." },
        { en: "When the ambulance arrived, the patient had already lost consciousness.", ar: "عندما وصلت سيارة الإسعاف، كان المريض قد فقد وعيه بالفعل." }
      ]
    },
    quiz: [
      {
        question: "By the time the doctor arrived, the injured boy _______ pain medicine.",
        questionAr: "بحلول الوقت الذي وصل فيه الطبيب، كان الولد المصاب _______ مسكن الألم.",
        options: ["took", "had taken", "takes", "was taking"],
        correctAnswer: "had taken",
        explanation: "The action of taking medicine was completed before the doctor arrived, so we use Past Perfect 'had taken'.",
        explanationAr: "أخذ الدواء اكتمل وانتهى قبل وصول الطبيب، لذا نستخدم صيغة الماضي التام (had taken)."
      },
      {
        question: " osman had lost a lot of water by the time he _______ the oral rehydration salts.",
        questionAr: "كان عثمان قد فقد الكثير من الماء بحلول الوقت الذي _______ فيه أملاح تعويض الجفاف.",
        options: ["drank", "had drunk", "drinks", "drinking"],
        correctAnswer: "drank",
        explanation: "The clause after 'by the time' takes the Past Simple ('drank') because it happened second.",
        explanationAr: "الجملة الواقعة بعد الرابط 'by the time' تأخذ الماضي البسيط (drank) لأنها الحدث الثاني في الترتيب."
      }
    ]
  },
  "8-5": {
    rule: {
      title: "Clauses of Reason with 'Because of' vs 'Because'",
      titleAr: "جمل التعليل بـ 'Because of' (بسبب) مقابل 'Because' (لأن)",
      explanation: "We use 'because of' followed by a noun or noun phrase, and 'because' followed by a full clause (subject + verb).",
      explanationAr: "نستخدم (because of) متبوعة باسم أو شبه جملة اسمية، ونستخدم (because) متبوعة بجملة فعلية كاملة (فاعل + فعل).",
      formula: "Sentence + because of + Noun\nSentence + because + Subject + Verb",
      examples: [
        { en: "He is known as 'Rubberboy' because of his extreme flexibility.", ar: "إنه معروف بـ 'الولد المطاطي' بسبب مرونته الفائقة." },
        { en: "He can bend his body easily because his joints are different.", ar: "يستطيع ثني جسده بسهولة لأن مفاصله مختلفة." }
      ]
    },
    quiz: [
      {
        question: "Osman was taken to the hospital _______ his severe dehydration.",
        questionAr: "تم نقل عثمان للمستشفى _______ جفافه الحاد.",
        options: ["because", "because of", "so", "consequently"],
        correctAnswer: "because of",
        explanation: "Since 'his severe dehydration' is a noun phrase, we must use 'because of'.",
        explanationAr: "بما أن 'his severe dehydration' تركيب اسمي، يجب استخدام (because of) للجر."
      },
      {
        question: "He could not walk easily _______ he had broken his leg.",
        questionAr: "لم يستطع المشي بسهولة _______ كان قد كسر رجله.",
        options: ["because of", "because", "so that", "even though"],
        correctAnswer: "because",
        explanation: "We use 'because' here because it is followed by a full subject-verb clause ('he had broken...').",
        explanationAr: "نستخدم (because) هنا لأن ما بعدها جملة كاملة تحتوي فاعلاً وفعلاً."
      }
    ]
  },
  "8-6": {
    rule: {
      title: "Modals of Passive Voice (Can be / Protected by)",
      titleAr: "الأفعال الناقصة في المبني للمجهول و 'Protected by'",
      explanation: "We use 'can be + past participle' to show potential danger or capability, and 'is protected by + agent' to show defense mechanisms of the body.",
      explanationAr: "نستخدم (can be + التصريف الثالث) لبيان الاحتمالية والقدرة، ونستخدم (is protected by) لوصف آليات الدفاع الجسدية والمسببات.",
      formula: "Subject + can/could + be + Verb3\nSubject + is/are + protected + by + Noun",
      examples: [
        { en: "The brain is protected by a hard bone called the skull.", ar: "الدماغ محمي بعظم صلب يسمى الجمجمة." },
        { en: "Without enough water, the kidney can be damaged.", ar: "بدون ماء كافٍ، يمكن أن تتضرر الكلى." }
      ]
    },
    quiz: [
      {
        question: "The delicate human brain is _______ by the hard bones of the skull.",
        questionAr: "الدماغ البشري الحساس يكون _______ بواسطة عظام الجمجمة الصلبة.",
        options: ["protecting", "protect", "protected", "be protected"],
        correctAnswer: "protected",
        explanation: "We use the past participle 'protected' after the verb 'is' in the passive structure.",
        explanationAr: "نستخدم التصريف الثالث (protected) بعد الفعل المساعد (is) لإكمال المبني للمجهول."
      },
      {
        question: "If we do not drink water, our body organs can _______ severely harmed.",
        questionAr: "إذا لم نشرب الماء، فإن أعضاء جسدنا يمكن أن _______ بأذى شديد.",
        options: ["be", "been", "being", "is"],
        correctAnswer: "be",
        explanation: "After modal 'can' in passive voice, we must use the base helper 'be'.",
        explanationAr: "بعد الفعل الناقص (can) في المبني للمجهول، نستخدم دائماً المصدر المساعد (be)."
      }
    ]
  },
  "8-7": {
    rule: {
      title: "Imperatives & Zero Conditional for Games",
      titleAr: "صيغ الأمر والحالة الشرطية صفر لقوانين الألعاب والتعليمات",
      explanation: "We use imperative verbs to state game rules clearly, combined with Zero Conditional to describe automatic results.",
      explanationAr: "نستخدم أفعال الأمر لصياغة قواعد اللعبة وإرشاداتها، مع الحالة الشرطية صفر لوصف النتائج التلقائية للعب الحذر.",
      formula: "Verb (Base) + Object. If + Present, Present.",
      examples: [
        { en: "Turn over two cards during your turn.", ar: "اقلب بطاقتين اثنتين خلال دورك." },
        { en: "If the cards match, you keep them in your hands.", ar: "إذا تطابقت البطاقتان، تحتفظ بهما في يديك." }
      ]
    },
    quiz: [
      {
        question: "_______ the card slowly and look at the picture under it.",
        questionAr: "_______ البطاقة ببطء وانظر إلى الصورة التي تحتها.",
        options: ["Turn", "Turns", "Turned", "Turning"],
        correctAnswer: "Turn",
        explanation: "We use the bare base verb 'Turn' to give an imperative instruction in game rules.",
        explanationAr: "نستخدم فعل الأمر في المصدر مباشرة وبدون إضافات (Turn) لإعطاء التعليمات."
      },
      {
        question: "If the two cards _______ match, you must turn them back over.",
        questionAr: "إذا _______ تتطابق البطاقتان، يجب عليك قلبهما مجدداً.",
        options: ["doesn't", "don't", "not", "didn't"],
        correctAnswer: "don't",
        explanation: "For the plural subject 'the two cards' in the Zero Conditional 'If' clause, we use 'don't' to make it negative.",
        explanationAr: "للجمع (the two cards) في جملة الشرط الحالية، نستخدم أداة النفي (don't)."
      }
    ]
  },
  "8-8": {
    rule: {
      title: "Modals of Possibility & Physical Senses (Can & Feel)",
      titleAr: "أفعال الاحتمالية والمشاعر الجسدية (Can و Feel)",
      explanation: "We use 'can' and sensory verbs like 'feel' to describe physical experiences, aches, and abilities of our amazing bodies.",
      explanationAr: "نستخدم أفعال الاحتمالية والمشاعر الحسية مثل (can) و (feel) (يشعر) لوصف الحالات الجسدية والآلام ووظائف الأعضاء.",
      formula: "Subject + can + Verb (Base)\nSubject + feel + Adjective",
      examples: [
        { en: "If you break a bone, it can hurt when you breathe.", ar: "إذا كسرت ضلعاً، يمكن أن يؤلمك ذلك عندما تتنفس." },
        { en: "We can hear our heart pump and feel ourselves breathe.", ar: "يمكننا سماع نبض قلوبنا والشعور بأنفسنا نتنفس." }
      ]
    },
    quiz: [
      {
        question: "If you injure your arm, you will _______ a sharp pain immediately.",
        questionAr: "إذا أصبت ذراعك، فسوف _______ بألم حاد على الفور.",
        options: ["feeling", "feels", "feel", "felt"],
        correctAnswer: "feel",
        explanation: "After the modal helper 'will', we use the base form 'feel' to express future sensory experience.",
        explanationAr: "بعد الفعل المساعد (will) للمستقبل، نستخدم دائماً مصدر الفعل مجرداً (feel)."
      },
      {
        question: "Bones are strong, but they _______ break if you fall from a high place.",
        questionAr: "العظام قوية، لكن يمكنها أن _______ تنكسر إذا سقطت من مكان مرتفع.",
        options: ["can", "should to", "needing", "ought"],
        correctAnswer: "can",
        explanation: "We use 'can' to express physical possibility in health contexts.",
        explanationAr: "نستخدم الفعل الناقص (can) للتعبير عن الإمكانية الطبية والفيزيائية للحدث."
      }
    ]
  }
};
