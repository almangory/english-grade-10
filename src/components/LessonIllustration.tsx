import React from "react";
import { motion } from "motion/react";
import { 
  Globe, Heart, Compass, PenTool, FlaskConical, Trophy, 
  DollarSign, Activity, Map, ShieldAlert, Users, Award, BookOpen 
} from "lucide-react";

interface LessonIllustrationProps {
  unitId: number;
  lessonId: number;
  title: string;
}

// 100% Complete, Exact, and Unabridged Curriculum Illustrations Mapping
// For Sudanese SMILE Book 6 (Grade 10 Secondary Syllabus)
const ILLUSTRATION_DETAILS: Record<string, { emoji: string; arabicDesc: string; bullets: string[] }> = {
  // UNIT 1: English is Everywhere
  "1-1": {
    emoji: "🎮",
    arabicDesc: "رسوم توضيحية للألعاب والأنشطة المتنوعة التي مارسها الطلاب خلال العطلة المدرسية.",
    bullets: ["Playing Rubik's cube on long journeys", "Reading English books and puzzles", "Volleyball on the beaches of Port Sudan"]
  },
  "1-2": {
    emoji: "👑",
    arabicDesc: "لوحة كرتونية تجسد قصة الأميرة سميرة وخاتمها الذهبي السحري الذي يحقق الأمنيات.",
    bullets: ["Saving Princess Saadia from a tin can", "Turning the ring three times for a wish", "Finding Samira's lost father"]
  },
  "1-3": {
    emoji: "🌱",
    arabicDesc: "تمثيل لعمل الفتاة سلمى مع أجدادها في الأراضي الزراعية تحت شمس السودان الدافئة.",
    bullets: ["Selma helping her grandparents on the farm", "Working the soil with strength and patience", "The joy of growing fresh food for the family"]
  },
  "1-4": {
    emoji: "🦁",
    arabicDesc: "رسم توضيحي يعرض الحيوانات النافعة والخطيرة كالمسكيت والغوريلا وضرورة حمايتها.",
    bullets: ["Useful animal products like leather and milk", "The dangerous mosquito and crop-eating locusts", "Protecting endangered pandas and rhinos"]
  },
  "1-5": {
    emoji: "⚔️",
    arabicDesc: "لوحة تاريخية للبطل السوداني عثمان دقنة بلحيته الطويلة وحروبه في شرق السودان.",
    bullets: ["Osman Digna: famous merchant born in Suakin", "Attacking the Egyptian army near Tokar in 1883", "A brave national leader buried near Khartoum"]
  },
  "1-6": {
    emoji: "🌊",
    arabicDesc: "رسم مائي لبورتسودان وموانئها المطلة على البحر الأحمر ومهرجان التسوق والسياحة.",
    bullets: ["Port Sudan: the Eastern Gate of Sudan", "Famous beaches, islands, and marine reserves", "The Tourism & Shopping Festival (Nov - Jan)"]
  },
  "1-7": {
    emoji: "⭐",
    arabicDesc: "توضيح لطموحات الطلاب المستقبلية كالتعليم والبرمجة والبحث العلمي لمساعدة المجتمع.",
    bullets: ["Ibrahim's ambition to teach disabled children", "Manal's goal to find new medical cures", "Rana and Rashid studying computer programming"]
  },
  "1-8": {
    emoji: "📚",
    arabicDesc: "مجموعة من الطلاب يمارسون مهارات اللغة الإنجليزية المختلفة لخدمة مستقبلهم المهني.",
    bullets: ["Abdullah practicing writing and spelling", "Hala using the computer for listening skills", "Hana speaking English with hotel visitors"]
  },

  // UNIT 2: Relationships
  "2-1": {
    emoji: "🌧️",
    arabicDesc: "رسم يجسد قيم النفير التطوعي في السودان وإصلاح جدران المنازل الطينية قبل الخريف.",
    bullets: ["The Sudanese tradition of 'Nafeer'", "Young volunteers repairing mud houses together", "Building safe community shelters for heavy rains"]
  },
  "2-2": {
    emoji: "👥",
    arabicDesc: "توضيح كرتوني للتوأمين المتطابقين حسن وحسين واختلاف هواياتهما ومزاحهما المرح.",
    bullets: ["Hassan and Hussain: tall and slim twin brothers", "Quiet Hassan loves books; playful Hussain plays tricks", "Both sharing a great passion for football"]
  },
  "2-3": {
    emoji: "🐯",
    arabicDesc: "لوحة كرتونية دافئة تجسد الصداقة غير المألوفة بين النمر آمور والماعز الشجاع تيمور.",
    bullets: ["Timur the goat showing no fear of the predator", "The tiger deciding to make the brave goat his friend", "Sleeping and playing together in the Russian zoo"]
  },
  "2-4": {
    emoji: "😫",
    arabicDesc: "رسم يعبر عن الضغط الدراسي والتوتر قبل الامتحانات وضرورة أخذ قسط من الراحة.",
    bullets: ["Jane feeling tired and worried about school exams", "Balancing hard study with fresh air on a farm", "Deciding between family expectations and summer camp"]
  },
  "2-5": {
    emoji: "✉️",
    arabicDesc: "رسالة هاتفية تفاعلية لتنظيم حفل عشاء وتواصل الأصدقاء للاحتفال بثاني أيام العيد.",
    bullets: ["Ehlam sending text messages to Samah for Eid", "Planning a special gathering and dinner party", "Welcoming friends to share food and happiness"]
  },
  "2-6": {
    emoji: "🏆",
    arabicDesc: "رسم لمدرب كرة القدم يحث فريقه على اللعب بإصرار وعزيمة لتحقيق الفوز الكروي.",
    bullets: ["The football coach preparing his team for matches", "Wail appointed as the new team captain", "Playing with determination and supporting others"]
  },
  "2-7": {
    emoji: "💍",
    arabicDesc: "لوحة تعبر عن الصداقة القوية بين مروة وصديقتها منذ الطفولة والتحضير لمناسبة زواج سعيدة.",
    bullets: ["Lifelong friendship from childhood to university", "Sharing school books, homework, and family trips", "The big surprise of Marwa marrying her friend's brother"]
  },
  "2-8": {
    emoji: "🇸🇩",
    arabicDesc: "رسم لأصدقاء الطفولة آدم وعلي في بورم بجنوب دارفور واسترجاع ذكريات اللعب الممتعة.",
    bullets: ["Childhood friends from Buram, South Darfur State", "Playing hide and seek and football in the village", "Reconnecting via mobile phones after six years apart"]
  },

  // UNIT 3: Going Places
  "3-1": {
    emoji: "🌍",
    arabicDesc: "خريطة تفاعلية توضح موقع السودان الجغرافي المتميز في شمال شرق أفريقيا وجيرانه السبعة.",
    bullets: ["Sudan's strategic location in Northeast Africa", "Khartoum as the tri-river capital city", "Sharing borders with Egypt, Libya, Chad, and others"]
  },
  "3-2": {
    emoji: "🧗",
    arabicDesc: "رسم يعبر عن العزيمة والإصرار عند تسلق قمة جبل إيفرست ومواجهة العواصف الثلجية.",
    bullets: ["Climbing Mount Everest with mental determination", "Overcoming exhaustion, sickness, and heavy blizzards", "The dream of standing on top of the world"]
  },
  "3-3": {
    emoji: "⛵",
    arabicDesc: "لوحة مائية تجسد رحلات المستكشف ابن بطوطة ومغامراته البحرية والعواصف في البحر الأحمر.",
    bullets: ["Ibn Battuta: covering 121,000 km in travel", "Leaving Morocco in 1325 to go on Hajj in Makkah", "Facing a big storm on a small boat near Jeddah"]
  },
  "3-4": {
    emoji: "🚄",
    arabicDesc: "رسم كرتوني حديث لقطار ماجليف السريع وناطحات السحاب في مدينة شنغهاي المزدحمة.",
    bullets: ["Nada's visit to the modern city of Shanghai", "Riding the incredibly fast Maglev Train", "Marveling at skyscrapers and crowded streets"]
  },
  "3-5": {
    emoji: "🐪",
    arabicDesc: "لوحة تجسد قوافل التجارة القديمة ودرب الأربعين بين الفاشر في دارفور وأسيوط بمصر.",
    bullets: ["Caravans transporting copper, gold, and dates", "The famous 'Forty Days Road' from Darfur to Egypt", "Trading Sudanese goods for Egyptian cotton and sugar"]
  },
  "3-6": {
    emoji: "⛰️",
    arabicDesc: "رسم كرتوني مبهج للجولات السياحية في جبال النوبة ومصارعة النوبة ورقصة الكمبلا الشعبية.",
    bullets: ["Nuba Mountains tours in South Kordofan State", "Kadugli's Kambala dance and Miri dam", "Watching traditional wrestling matches in El Dalang"]
  },
  "3-7": {
    emoji: "🦒",
    arabicDesc: "رسم يعرض معالم السياحة في كينيا ورؤية الحيوانات الضخمة والمنطاد الهوائي الساخن.",
    bullets: ["Taking photos of the Great Rift Valley", "Riding a hot-air balloon over Maasai Mara", "Seeing pink flamingos and learning Maasai culture"]
  },
  "3-8": {
    emoji: "✈️",
    arabicDesc: "أصدقاء يتبادلون المعلومات حول الطقس والتقاليد السودانية ترحيباً بمتطوعي التدريس.",
    bullets: ["Richard and Kate joining the Sudan Volunteer Programme", "Teaching English at local schools across the states", "Eager to learn Arabic and discover Sudanese life"]
  },

  // UNIT 4: Arts and Literature
  "4-1": {
    emoji: "💅",
    arabicDesc: "قصة جحا ومسماره الشهير في جدار منزله وحيله الطريفة لإزعاج المشتري الجديد وتناول الطعام.",
    bullets: ["Juha selling his house on one condition: keeping one nail", "Visiting at all hours of the day and night to see his nail", "The angry new owner shouting and giving the house back"]
  },
  "4-2": {
    emoji: "📝",
    arabicDesc: "لوحات إرشادية مكتوبة بخط يد سوداني جميل تحث الشباب على التحلي بالأخلاق والأدب.",
    bullets: ["The importance of having neat, clear handwriting", "Youth of today are the builders and adults of tomorrow", "Encouraging polite and well-behaved conduct everywhere"]
  },
  "4-3": {
    emoji: "🌳",
    arabicDesc: "رسم شاعري يشبه الجد بالشجرة العظيمة المعطاءة والشمس بكرة اللهب المشتعلة في السماء.",
    bullets: ["Using similes to describe life and family members", "Grandfather is compared to a wise, ancient tree", "The sun is pictured as a radiant ball of fire"]
  },
  "4-4": {
    emoji: "💤",
    arabicDesc: "توضيح كرتوني هزلي لسليم وهو غارق في النوم ويسرع للحاق بـمواعيد المدرسة.",
    bullets: ["Salim sleeping deeply and dreaming of adventures", "Waking up late and rushing to get to school by 7:45", "Playful cartoon panels guiding daily time management"]
  },
  "4-5": {
    emoji: "🎭",
    arabicDesc: "طالبان يلعبان لعبة التخمين ومحاولة حزر اسم الشاعر السوداني الراحل الجيلي عبد الرحمن.",
    bullets: ["Rayan and Nuha playing a famous guessing game", "Asking yes/no questions about a historical figure", "Discovering the Sudanese poet Al-Jaily Abdel Rahman"]
  },
  "4-6": {
    emoji: "🥣",
    arabicDesc: "رسم يجسد المشهد الشهير لأولفر تويست وهو يطلب المزيد من الطعام في ملجأ الأيتام.",
    bullets: ["Charles Dickens' story of Oliver Twist in the workhouse", "Oliver being chosen by hungry boys to ask for food", "Oliver saying 'Please, sir, I want some more' to the master"]
  },
  "4-7": {
    emoji: "⛓️",
    arabicDesc: "توضيح للشخصيات الشريرة في قصة أوليفر تويست مثل السيد ساوربيري والشرير فاجن.",
    bullets: ["Oliver working for the cruel undertaker Mr. Sowerberry", "Meeting the Artful Dodger and the criminal Fagin", "Oliver being locked in a cold cell without food"]
  },
  "4-8": {
    emoji: "🐪",
    arabicDesc: "رسم طريف لجحا وهو يعد جماله العشرة وينسى عد الجمل الذي يركب فوقه.",
    bullets: ["Juha taking ten camels to the market for trading", "Going pale after counting only nine camels while riding", "Realizing there are ten when standing on the ground"]
  },

  // UNIT 5: Science
  "5-1": {
    emoji: "☀️",
    arabicDesc: "رسم توضيحي لمنزل في السودان مزود بألواح شمسية لتوليد الكهرباء النظيفة والمجانية.",
    bullets: ["Solar panels absorbing sunlight on the house roof", "Using free and renewable solar power for cooling", "A great eco-friendly resource for sunny Sudan"]
  },
  "5-2": {
    emoji: "🍫",
    arabicDesc: "رسم لخطوات تصنيع الشوكولاتة اللذيذة بدءاً من جني حبوب الكاكاو وحتى تغليفها.",
    bullets: ["Picking and roasting fresh cocoa beans in the factory", "Removing bean shells and pressing liquid chocolate", "Adding sweet milk and sugar before molding shapes"]
  },
  "5-3": {
    emoji: "📊",
    arabicDesc: "توضيح لكيفية استخدام الإحصاءات والرسوم البيانية لتعداد السكان وتخطيط الخدمات.",
    bullets: ["Understanding population statistics and census data", "Helping the government plan schools and hospitals", "Using surveys, graphs, and tables to track growth"]
  },
  "5-4": {
    emoji: "🐝",
    arabicDesc: "رسم مجهري يوضح دور النحلة النشيطة في تلقيح الأزهار لإنتاج بذور ونباتات جديدة.",
    bullets: ["Bee attracted by bright colors and sweet smells", "Pollen sticking to the bee's bright yellow legs", "Fertilizing flower eggs to make healthy seeds grow"]
  },
  "5-5": {
    emoji: "🩹",
    arabicDesc: "تعليمات إسعاف أولية بسيطة للتعامل مع لسعات النحل وغسل مكان اللسعة بالصابون.",
    bullets: ["Removing any jewelry near the bee sting immediately", "Washing the sting area with clean soap and water", "Applying cooling remedies to reduce painful swelling"]
  },
  "5-6": {
    emoji: "🚗",
    arabicDesc: "رسم للعم إبراهيم وهو يفحص محرك سيارته القديمة ويملأ المبرد بالماء قبل السفر للخرطوم.",
    bullets: ["Uncle Ibrahim doing essential maintenance on his car", "Changing engine oil and pumping up rubber tyres", "Filling the radiator to prevent engine overheating in summer"]
  },
  "5-7": {
    emoji: "🥚",
    arabicDesc: "رسم يوضح تجربة البيضة الطافية في الماء المالح وتفسير الكثافة الفيزيائية ببساطة.",
    bullets: ["Floating egg experiment in a kitchen laboratory", "Adding salt to water and dissolving it with a spoon", "Salty water is denser, causing the fresh egg to float"]
  },
  "5-8": {
    emoji: "🔬",
    arabicDesc: "رسم يجمع موضوعات العلوم المتنوعة كالمحركات والكهرباء الشمسية وتصنيع الشوكولاتة.",
    bullets: ["Revision of solar energy and eco-friendly devices", "Remembering pollination and bee life cycles", "Summary of safe car preparation steps for travel"]
  },

  // UNIT 6: Hobbies and Pastimes
  "6-1": {
    emoji: "⚽",
    arabicDesc: "رسم يمثل الفرحة الغامرة لـلاعبي وجماهير هلال الأبيض بعد فوزهم غير المتوقع على هلال الخرطوم.",
    bullets: ["El Obeid Hilal playing against Khartoum Hilal", "Khartoum leading 2-0 before El Obeid's amazing comeback", "Winning 4-2 through determination and teamwork"]
  },
  "6-2": {
    emoji: "🏺",
    arabicDesc: "رسم للحرف اليدوية السودانية الرائعة كالخرز الملون والجلود المصبوغة والمنحوتات الخشبية.",
    bullets: ["Colored glass bead necklaces with center holes", "Traditional hand-dyed leather sandals and crafts", "Wooden designs carved by hand using sharp tools"]
  },
  "6-3": {
    emoji: "📸",
    arabicDesc: "رسم لمنظر طبيعي رائع يوضح توزيع الأبقار والطيور البيضاء لتعلم قواعد التصوير الفوتوغرافي.",
    bullets: ["Describing scenery photography composition", "Cows in the center and white birds on the ground", "Using spatial terms like foreground and background"]
  },
  "6-4": {
    emoji: "✉️",
    arabicDesc: "رسم لهوايات جمع الطوابع البريدية والرسم على البيض الفارغ وجمع الحشرات بالشبكة.",
    bullets: ["Paul's stamp collection of 3,000 stamps from 73 nations", "Mary painting beautiful patterns on empty eggshells", "Peter catching spiders and insects with a sweep net"]
  },
  "6-5": {
    emoji: "🥁",
    arabicDesc: "توضيح للحياة البسيطة في الماضي ولعب كرة القدم والسباحة في النيل والعزف على الطبول.",
    bullets: ["Grandfather's childhood hobbies before modern technology", "Reading books and playing football outside with friends", "Swimming in the blue river and playing traditional drums"]
  },
  "6-6": {
    emoji: "📖",
    arabicDesc: "رسم يمثل حوار شقيقات رواية 'نساء صغيرات' وأحلامهن بالثراء والشهرة والموسيقى والكتابة.",
    bullets: ["The four sisters from Charles Dickens' classic 'Little Women'", "Jo's dream of writing novels and getting rich and famous", "Meeting again in ten years to see if dreams came true"]
  },
  "6-7": {
    emoji: "⛺",
    arabicDesc: "رسم لفرق الكشافة السودانية وهي تقوم بأعمال تطوعية لمساعدة كبار السن وإعداد الطعام للفقراء.",
    bullets: ["Scouts and Guides volunteering to help communities", "Yasmeen and Amal cleaning the house for elderly Khadijah", "Preparing warm meals for the poor during mid-term holidays"]
  },
  "6-8": {
    emoji: "🎸",
    arabicDesc: "رسم لخطاب متبادل يعرض هوايات العزف على الجيتار والتقاط الصور وممارسة كرة القدم.",
    bullets: ["Amjed's email from Dongola about his local lifestyle", "Enjoying history books, photography, and football", "Excited to join the scouts and play the acoustic guitar"]
  },

  // UNIT 7: Money and Trade
  "7-1": {
    emoji: "💵",
    arabicDesc: "رسم يوضح العملات العالمية المختلفة كالجنيه الإسترليني والين الياباني والعملة الموحدة 'اليورو'.",
    bullets: ["Every country using its own currency for trade", "The UK Pound, Japan's Yen, and the shared Euro", "How a common currency makes international trading easier"]
  },
  "7-2": {
    emoji: "🚢",
    arabicDesc: "رسم يعبر عن واردات السودان كالملابس الهندية والسيارات الكورية والبن الإثيوبي الفاخر.",
    bullets: ["Sudan importing products from partners around the world", "Cars from Korea/Japan and cotton clothing from India", "Fresh Kenyan tea and delicious coffee from Ethiopia"]
  },
  "7-3": {
    emoji: "📦",
    arabicDesc: "رسم لسفينة حاويات عملاقة في بورتسودان تصدر ملايين المانجو السودانية اللذيذة للأسواق.",
    bullets: ["Container ships transport massive boxes of goods", "Exporting sweet Sudanese mangoes worth millions", "Understanding large numbers: a billion is a thousand millions"]
  },
  "7-4": {
    emoji: "🤝",
    arabicDesc: "رسم يوضح الشراكات التجارية الكبرى للسودان مع الصين والهند والمملكة العربية السعودية والبرازيل.",
    bullets: ["Trading partners export and import essential goods", "Investments in Sudan's petroleum and agricultural industries", "Importing cheap medicine from India and farm tools from Brazil"]
  },
  "7-5": {
    emoji: "🏷️",
    arabicDesc: "توضيح لأهمية قراءة ملصق الأغذية لمعرفة المكونات الغذائية وتاريخ الصلاحية والانتهاء.",
    bullets: ["Checking ingredients and expiry dates on food labels", "Understanding nutrition facts before buying products", "Being a smart consumer and choosing healthy options"]
  },
  "7-6": {
    emoji: "🛒",
    arabicDesc: "رسم يوضح دورة المنتج من المزارع (المنتج) لتاجر الجملة ثم التجزئة والزبون النهائي.",
    bullets: ["The cycle of trade: Producer, Wholesaler, Retailer", "Producer grows crops; Wholesaler buys in bulk", "Consumer purchasing goods from local retail shops"]
  },
  "7-7": {
    emoji: "🐪",
    arabicDesc: "رسم لسوق الإبل الشهير في السودان وتصدير الجمال لمصر عبر الشاحنات وتناول لحم الإبل الصحي.",
    bullets: ["Camel market trading with camels from Darfur", "Exporting camels to Egypt across the desert borders", "Camel meat is highly nutritious with low fat and cholesterol"]
  },
  "7-8": {
    emoji: "🌾",
    arabicDesc: "رسم يجمع آراء الناس حول دور الموارد الطبيعية والعمل الجاد في تحقيق التنمية والرخاء.",
    bullets: ["Revision of trade, currencies, and shopping costs", "Different viewpoints on saving money and importing goods", "How natural resources help build a prosperous nation"]
  },

  // UNIT 8: Our Bodies
  "8-1": {
    emoji: "🩺",
    arabicDesc: "طبيب يقدم نصائح صحية هامة حول شرب الماء عند الشعور بالحر وممارسة التمارين.",
    bullets: ["Doctor Ayman advising young Adam on healthy living", "Drinking plenty of clean water to prevent dehydration", "Taking care of your body under the hot sun"]
  },
  "8-2": {
    emoji: "🦴",
    arabicDesc: "رسم يوضح مريضة تعرضت لكسر في المعصم أثناء لعب كرة الطائرة وتستعد لعمل أشعة سينية.",
    bullets: ["Munira visiting Dr. Hanan at the local clinic", "Sustaining a wrist injury during a volleyball game", "Going to the X-ray room to check for broken bones"]
  },
  "8-3": {
    emoji: "❤️",
    arabicDesc: "رسم لقلب بشري يوضح حجراته وصماماته وأهمية الرياضة لتقوية عضلاته وضخ الأكسجين.",
    bullets: ["The human heart beating 100,000 times a day", "Right side pumps to lungs; left side pumps to body", "Exercise is the ultimate way to maintain heart health"]
  },
  "8-4": {
    emoji: "🚌",
    arabicDesc: "رسم لحافلة ركاب تقف بالقرب من مستشفى القضارف لعلاج طفل مصاب بالجفاف أثناء السفر.",
    bullets: ["Osman getting a fever and dehydration during a long trip", "The mother asking the bus driver to stop near a hospital", "Learning to carry plenty of drinking water on hot journeys"]
  },
  "8-5": {
    emoji: "💪",
    arabicDesc: "رسم يعرض أشخاصاً بقدرات خارقة كصبي المطاط المرن وأقوى رجل وطفلة عبقرية الرياضيات.",
    bullets: ["Daniel 'Rubberboy': the most flexible person in the world", "Dennis Rogers: lifting cars and bending heavy metals", "Pryanshi Somani: mental calculation world champion"]
  },
  "8-6": {
    emoji: "🧠",
    arabicDesc: "توضيح للدماغ البشري المكون بنسبة 75% من الماء وضرورة حمايته من الصدمات والضرر.",
    bullets: ["About three quarters of the brain is made of water", "The brain is delicate and can be easily damaged", "How the skull acts as a helmet protecting memory"]
  },
  "8-7": {
    emoji: "🃏",
    arabicDesc: "أطفال يلعبون لعبة بطاقات الذاكرة ومطابقة الصور لتنمية خلايا الدماغ والقدرات الإدراكية.",
    bullets: ["Rules of the picture-card memory game", "Matching words to illustrations with classmates", "Fun educational pastimes that boost brain activity"]
  },
  "8-8": {
    emoji: "🩻",
    arabicDesc: "رسم تفاعلي للهيكل العظمي والضلوع التي تحمي الرئتين والجمجمة التي تحمي الذاكرة والدماغ.",
    bullets: ["Revision of our amazing body parts and organs", "Ribs protect the heart and lungs from external impacts", "Skull consists of 22 bones protecting our brain cells"]
  },

  // UNIT 9: Wonderful Sudan
  "9-1": {
    emoji: "🇸🇩",
    arabicDesc: "رسم يوضح معاني أسماء المدن السودانية مثل كوستي والفاشر وجزيرة توتي بلغة النوبة.",
    bullets: ["Kosti named after Kostinos, a historical Greek trader", "Fashir meaning 'a place to meet' in the Fur language", "Tuti Island meaning 'cow's stomach' in Nubian tongue"]
  },
  "9-2": {
    emoji: "🗣️",
    arabicDesc: "رسم مبهج للغات السودانية المتنوعة كالنوبية في الشمال والبداويت في الشرق وترحيب 'دبايوا'.",
    bullets: ["Sudan is rich with multiple languages and cultures", "Nubians in northern Sudan speaking Dongolese", "Eastern Beja greeting guests with the warm word 'Dabaywa'"]
  },
  "9-3": {
    emoji: "👑",
    arabicDesc: "لوحة تاريخية للملك الكوشي بعنخي وهو يوحد مملكتي كوش ومصر تحت حكم الفراعنة النوبيين.",
    bullets: ["The independent Nubian Kingdom of Kush 3,000 years ago", "Kush becoming rich and powerful through gold trade", "King Piankhi taking control of Egypt and building pyramids"]
  },
  "9-4": {
    emoji: "🕌",
    arabicDesc: "رسم هندسي رائع لـمسجد النيلين في أم درمان بقبته الفريدة التي تشبه الصدفة عند ملتقى النيلين.",
    bullets: ["Al Neelain Mosque in Omdurman built in the 1970s", "Unique architectural dome designed to look like a sea shell", "Located beautifully at the confluence of Blue and White Niles"]
  },
  "9-5": {
    emoji: "🌾",
    arabicDesc: "رسم لحقول قصب السكر الواسعة ومصنع سكر كنانة الشهير الذي ينتج السكر منذ عقود.",
    bullets: ["Kenana Sugar Factory: producing sweet sugar since 1984", "Vast agricultural green fields of sugarcane stalks", "One of Sudan's greatest industrial achievements"]
  },
  "9-6": {
    emoji: "📜",
    arabicDesc: "لوحة مائية تجسد العهد العثماني في السودان وتأثيراته التجارية والزراعية والتعليمية.",
    bullets: ["Muhammad Ali Pasha invading Sudan in 1820", "Ottomans seeking gold and ruling for over sixty years", "Pros and cons of rule: safety and trade vs heavy taxes"]
  },
  "9-7": {
    emoji: "🤖",
    arabicDesc: "رسم مستقبلي تفاعلي يمثل تطلعات الطلاب كاستبدال الكتب بالأجهزة اللوحية واستخدام الروبوتات.",
    bullets: ["Azza's hope: school books replaced by electronic tablets", "Ahmed's prediction: robots doing factory jobs in future", "Desiring a wonderful, peaceful world free from war"]
  },
  "9-8": {
    emoji: "🗺️",
    arabicDesc: "رسم لخريطة السودان يعرض أسماء المدن التي تبدأ بـ 'أبو' أو 'أم' والأسماء البجاوية في الشرق.",
    bullets: ["Sudanese place names starting with Abu or Um", "Eastern Beja names like Durdaib, Arkaweet, and Hamashkoraib", "Summary of Sudan's historic geography and culture"]
  },

  // UNIT 10: Health and Environment
  "10-1": {
    emoji: "🌿",
    arabicDesc: "رسم يمثل التوازن البيئي في بركة مياه وتفاعل النباتات والحشرات والضفادع والطيور.",
    bullets: ["An ecosystem is all living things interacting in a place", "Food chains in a pond: plants attract insects, eaten by frogs", "Maintaining balance: big changes cause ecological imbalance"]
  },
  "10-2": {
    emoji: "🚰",
    arabicDesc: "رسم يعرض مشكلة تلوث المياه وأهمية توفير المياه النظيفة للفتيات ليذهبن للمدارس.",
    bullets: ["Almost 783 million people lack clean water to use", "Preventing disease by washing hands with soap and water", "Helping girls avoid walking hours to collect fresh water"]
  },
  "10-3": {
    emoji: "🦠",
    arabicDesc: "رسم لجهود منظمة الصحة العالمية في التوعية ضد الأوبئة وأهمية التطعيم واللقاحات.",
    bullets: ["An epidemic is a disease infecting many in a short time", "Ebola, Cholera, and HIV/AIDS as historical examples", "Preventing spread via handwashing, vaccines, and quarantine"]
  },
  "10-4": {
    emoji: "🤒",
    arabicDesc: "رسم يوضح الفرق بين أعراض الزكام والإنفلونزا وقياس درجات الحرارة والراحة.",
    bullets: ["Alaa consulting Dr. Israa about sudden illness symptoms", "Differentiating cold symptoms from more severe flu cases", "Resting, drinking warm liquids, and checking temperature"]
  },
  "10-5": {
    emoji: "🚭",
    arabicDesc: "رسم توعوي يحذر من مخاطر التدخين على صحة المدخن وأطفاله وضرورة الإقلاع عنه.",
    bullets: ["Smoking causing breathing difficulties for young athletes", "Second-hand smoke causes ear infections in small children", "El Sheikh giving up smoking easily after a heart attack"]
  },
  "10-6": {
    emoji: "🌱",
    arabicDesc: "لوحة مائية تعرض الأعشاب الطبية السودانية كالمورينجا وزيت السمسم والكركديه والقرض.",
    bullets: ["Moringa leaves boiled to help cure eye diseases", "Sesame seeds clean teeth and lower high blood pressure", "Garad (Acacia nilotica) kills germs and cleans deep cuts"]
  },
  "10-7": {
    emoji: "🚶",
    arabicDesc: "رسم كرتوني يحث على المشي لمسافات قصيرة واستخدام سيارات أقل تلوثاً لنقاء الهواء.",
    bullets: ["Interview with Dr. Kamal on clean, healthy living", "Walking short distances instead of driving fuel cars", "Keeping the air clean and free of toxic cigarette smoke"]
  },
  "10-8": {
    emoji: "🏥",
    arabicDesc: "أطفال يشاركون آرائهم حول ما سيفعلونه لو كانوا رؤساء كبناء مستشفيات وتوفير مياه شرب نظيفة.",
    bullets: ["Oxfam asking Nairobi youth: 'If you were President...'", "Providing mud-free concrete roads and clean water", "Opening safer hospitals and improving community lives"]
  },

  // UNIT 11: Amazing People, Animals and Places
  "11-1": {
    emoji: "🏹",
    arabicDesc: "رسم كرتوني يعرض نمط حياة قبيلة الماساي الرعوية وطموح الفتى ليشان ليصبح معلماً.",
    bullets: ["The Maasai pastoralists moving constantly in Kenya/Tanzania", "Wearing colorful traditional blankets called Shuka", "Young Leshan dreaming of studying to become a school teacher"]
  },
  "11-2": {
    emoji: "⏰",
    arabicDesc: "رسم لأرقام قياسية عالمية كساعة مكة الشامخة والعملاق الصومالي وأكبر يقطينة.",
    bullets: ["Makkah Clock Tower standing tall at 581.1 meters high", "Hussain Bisad: Somali tall man measuring 232 cm", "A polyglot teacher speaking 18 languages fluently"]
  },
  "11-3": {
    emoji: "🛕",
    arabicDesc: "لوحة تاريخية لمنارة الإسكندرية القديمة ومكتبتها التاريخية التي دمرتها الحرائق.",
    bullets: ["Alexandria Lighthouse: one of the Seven Wonders of the World", "The oldest library of Alexandria destroyed by ancient fires", "Building the modern, beautiful new Alexandria Library in 2002"]
  },
  "11-4": {
    emoji: "🦜",
    arabicDesc: "رسم طريف لمنصور وببغائه الذكي الذي يقلد أصوات البشر ببراعة ومرح.",
    bullets: ["Mansour talking to his colorful, intelligent parrot", "The parrot mimicking human speech and unique voices", "Discovering how amazing animals can interact with humans"]
  },
  "11-5": {
    emoji: "👦",
    arabicDesc: "رسم للصبي الطموح عوض وهو يساعد بائعات الشاي في السوق لإعالة أسرته المريضة.",
    bullets: ["Awad collecting water for tea ladies at the market", "Helping vegetable sellers to earn a bit of money", "An amazing child working hard to support his sick mother"]
  },
  "11-6": {
    emoji: "☀️",
    arabicDesc: "لوحة تجسد شمس منتصف الليل في فنلندا والبحيرات الجميلة ونشاط العائلات تحت الشمس.",
    bullets: ["Finland is 'the land of the midnight sun' in summer", "24 hours of continuous sunlight in June and July", "Finns leaving cities to enjoy wooden houses and lakes"]
  },
  "11-7": {
    emoji: "✍️",
    arabicDesc: "رسم بورتريه للكاتبة شارلوت برونتي وروايتها جين إير والكاتب العظيم تشارلز ديكنز.",
    bullets: ["Charlotte Bronte publishing 'Jane Eyre' under a pen name", "Charles Dickens writing 24 novels after a poor childhood", "Dickens' famous characters like Fagin and Mr. Bumble"]
  },
  "11-8": {
    emoji: "🗿",
    arabicDesc: "رسم للمعالم التاريخية القديمة كأحجار ستونهنج وأهرامات الجيزة وسور الصين العظيم.",
    bullets: ["Stonehenge built in England over 5,000 years ago", "The pyramids of Egypt built as ancient royal tombs", "The Great Wall of China stretching over 3,000 miles"]
  },

  // UNIT 12: Finishing Up
  "12-1": {
    emoji: "👯",
    arabicDesc: "رسم يوضح التوأم لينا وضحى وااختلاف اهتماماتهما بين القراءة والزراعة ونصيحة الجدة الحكيمة.",
    bullets: ["Identical twins Lina and Doha starting to change at age 15", "Lina loves reading indoors; Doha enjoys outdoor gardening", "Grandmother advising that growing up means doing some things differently"]
  },
  "12-2": {
    emoji: "👴",
    arabicDesc: "لوحة للرجل الحكيم الذي يدفن الأموال في حديقته بالقرية ويعيرها للمحتاجين بشرط إعادتها.",
    bullets: ["A wise old man living by the Nile burying money in his garden", "Lending money to villagers: 'Just put it back when you can'", "The greedy merchant finding no money until he repays his debt"]
  },
  "12-3": {
    emoji: "🫁",
    arabicDesc: "رسم توضيحي للقلب والرئتين والدماغ ودورها الحيوي في إنتاج الطاقة باستخدام الأكسجين.",
    bullets: ["Lungs processing inhaled air to add oxygen to our blood", "Heart pumping oxygenated blood to feed brain and muscles", "We need energy to keep all bodily organs alive and working"]
  },
  "12-4": {
    emoji: "🇸🇩",
    arabicDesc: "رسم للمستكشف أليكس وهو يستمتع بـمحمية الدندر وآثار سواكن وكرم الضيافة السوداني.",
    bullets: ["Alex visiting Sudan three times because he loves it", "Exploring wildlife at Dinder and historical ruins in Suakin", "Feeling amazed by the warm and friendly Sudanese hospitality"]
  },
  "12-5": {
    emoji: "🦊",
    arabicDesc: "رسم للغز المزارع الذي يريد عبور النيل مع ثعلب وماعز وقش باستخدام قارب صغير.",
    bullets: ["Ohaj solving math riddles and calculating travel times", "The river crossing logic puzzle with a fox, goat, and straw", "How to get everything to the other side safely without loss"]
  },
  "12-6": {
    emoji: "🌾",
    arabicDesc: "رسم بياني يوضح نسب الصادرات السودانية حيث تشكل المنتجات الزراعية النسبة الأكبر.",
    bullets: ["Sudan's exports: 57.9% are agricultural products", "Minerals and fuels make up 21.2% of national exports", "Discussion on importing vs producing manufactured goods locally"]
  },
  "12-7": {
    emoji: "⚡",
    arabicDesc: "رسم كرتوني مبهج للمستقبل واستخدام السيارات الكهربائية النظيفة والألواح الشمسية الرخيصة.",
    bullets: ["Buthaina's excitement about clean green technologies", "Cheap solar panels providing electricity to all homes", "Quiet electric cars protecting the city air from pollution"]
  },
  "12-8": {
    emoji: "🎓",
    arabicDesc: "أطفال يحتفلون بانتهاء منهج الصف الأول الثانوي وإنجازاتهم الأكاديمية وطموحات العطلة.",
    bullets: ["Completing the full Grade 10 SMILE Book 6 curriculum", "Sharing holiday plans: reading, travelling, and helping family", "Celebrating academic success and looking forward to the future"]
  }
};

const UNIT_THEMES: Record<number, { gradient: string; icon: any }> = {
  1: { gradient: "from-sky-500 to-indigo-600", icon: Globe },
  2: { gradient: "from-rose-500 to-pink-600", icon: Heart },
  3: { gradient: "from-teal-500 to-emerald-600", icon: Compass },
  4: { gradient: "from-amber-500 to-orange-600", icon: PenTool },
  5: { gradient: "from-cyan-500 to-blue-600", icon: FlaskConical },
  6: { gradient: "from-emerald-500 to-teal-600", icon: Trophy },
  7: { gradient: "from-amber-500 to-yellow-600", icon: DollarSign },
  8: { gradient: "from-rose-500 to-red-600", icon: Activity },
  9: { gradient: "from-emerald-500 to-teal-600", icon: Map },
  10: { gradient: "from-blue-500 to-indigo-600", icon: ShieldAlert },
  11: { gradient: "from-purple-500 to-pink-600", icon: Users },
  12: { gradient: "from-amber-500 to-yellow-600", icon: Award }
};

// Map each Unit and Lesson to a distinctive education category to render rich SVGs
function getLessonCategory(unitId: number, lessonId: number): string {
  if (unitId === 1) {
    if (lessonId === 1) return "sports";
    if (lessonId === 2) return "history";
    if (lessonId === 3) return "agriculture";
    if (lessonId === 4) return "animals";
    if (lessonId === 5) return "history";
    if (lessonId === 6) return "sea";
    if (lessonId === 7) return "education";
    return "education";
  }
  if (unitId === 2) {
    if (lessonId === 1) return "community";
    if (lessonId === 2) return "sports";
    if (lessonId === 3) return "animals";
    if (lessonId === 4) return "education";
    if (lessonId === 5) return "community";
    if (lessonId === 6) return "sports";
    if (lessonId === 7) return "community";
    return "community";
  }
  if (unitId === 3) {
    if (lessonId === 1) return "travel";
    if (lessonId === 2) return "travel";
    if (lessonId === 3) return "sea";
    if (lessonId === 4) return "future";
    if (lessonId === 5) return "travel";
    if (lessonId === 6) return "sports";
    if (lessonId === 7) return "animals";
    return "travel";
  }
  if (unitId === 4) {
    if (lessonId === 1) return "history";
    if (lessonId === 2) return "education";
    if (lessonId === 3) return "agriculture";
    if (lessonId === 4) return "sports";
    if (lessonId === 5) return "education";
    if (lessonId === 6) return "community";
    if (lessonId === 7) return "community";
    return "travel";
  }
  if (unitId === 5) {
    if (lessonId === 1) return "future";
    if (lessonId === 2) return "trade";
    if (lessonId === 3) return "science";
    if (lessonId === 4) return "animals";
    if (lessonId === 5) return "science";
    if (lessonId === 6) return "future";
    if (lessonId === 7) return "science";
    return "science";
  }
  if (unitId === 6) {
    if (lessonId === 1) return "sports";
    if (lessonId === 2) return "trade";
    if (lessonId === 3) return "animals";
    if (lessonId === 4) return "sports";
    if (lessonId === 5) return "history";
    if (lessonId === 6) return "education";
    if (lessonId === 7) return "community";
    return "sports";
  }
  if (unitId === 7) {
    if (lessonId === 1) return "trade";
    if (lessonId === 2) return "trade";
    if (lessonId === 3) return "sea";
    if (lessonId === 4) return "trade";
    if (lessonId === 5) return "science";
    if (lessonId === 6) return "trade";
    if (lessonId === 7) return "travel";
    return "science";
  }
  if (unitId === 8) {
    if (lessonId === 1) return "anatomy";
    if (lessonId === 2) return "anatomy";
    if (lessonId === 3) return "anatomy";
    if (lessonId === 4) return "anatomy";
    if (lessonId === 5) return "sports";
    if (lessonId === 6) return "anatomy";
    if (lessonId === 7) return "education";
    return "anatomy";
  }
  if (unitId === 9) {
    if (lessonId === 1) return "travel";
    if (lessonId === 2) return "community";
    if (lessonId === 3) return "history";
    if (lessonId === 4) return "history";
    if (lessonId === 5) return "agriculture";
    if (lessonId === 6) return "history";
    if (lessonId === 7) return "future";
    return "travel";
  }
  if (unitId === 10) {
    if (lessonId === 1) return "animals";
    if (lessonId === 2) return "science";
    if (lessonId === 3) return "science";
    if (lessonId === 4) return "anatomy";
    if (lessonId === 5) return "anatomy";
    if (lessonId === 6) return "agriculture";
    if (lessonId === 7) return "science";
    return "community";
  }
  if (unitId === 11) {
    if (lessonId === 1) return "community";
    if (lessonId === 2) return "science";
    if (lessonId === 3) return "history";
    if (lessonId === 4) return "animals";
    if (lessonId === 5) return "community";
    if (lessonId === 6) return "travel";
    if (lessonId === 7) return "education";
    return "history";
  }
  if (unitId === 12) {
    if (lessonId === 1) return "community";
    if (lessonId === 2) return "history";
    if (lessonId === 3) return "anatomy";
    if (lessonId === 4) return "travel";
    if (lessonId === 5) return "science";
    if (lessonId === 6) return "trade";
    if (lessonId === 7) return "future";
    return "education";
  }
  return "education";
}

// Gorgeous Responsive React Vector SVG Component for Lessons
function LessonSVG({ category, emoji }: { category: string; emoji: string }) {
  const getCategoryPaths = () => {
    switch (category) {
      case "agriculture":
        return (
          <>
            {/* Rich ground */}
            <path d="M10,150 Q100,135 190,150 L190,190 L10,190 Z" fill="#7c2d12" stroke="#0f172a" strokeWidth="3" />
            <path d="M10,165 Q100,155 190,165" fill="none" stroke="#9a3412" strokeWidth="2" />
            {/* Golden Sun */}
            <circle cx="150" cy="50" r="22" fill="#facc15" stroke="#0f172a" strokeWidth="3" />
            <circle cx="150" cy="50" r="30" fill="none" stroke="#fef08a" strokeWidth="2" strokeDasharray="6 4" />
            {/* Crops growing */}
            <path d="M50,150 Q30,105 60,75 Q70,105 50,150 Z" fill="#22c55e" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M55,150 Q80,115 65,90 Q50,120 55,150 Z" fill="#4ade80" stroke="#0f172a" strokeWidth="2" />
            <path d="M105,150 Q125,110 100,80 Q90,110 105,150 Z" fill="#16a34a" stroke="#0f172a" strokeWidth="2.5" />
            {/* Watering drop */}
            <path d="M100,45 C100,45 108,55 108,60 C108,65 104,68 100,68 C96,68 92,65 92,60 C92,55 100,45 100,45 Z" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
          </>
        );
      case "history":
        return (
          <>
            {/* Golden Pyramids of Sudan (Meroe) */}
            <polygon points="100,40 40,150 160,150" fill="#eab308" stroke="#0f172a" strokeWidth="3" />
            <polygon points="100,40 100,150 160,150" fill="#ca8a04" stroke="#0f172a" strokeWidth="1.5" />
            <polygon points="135,70 90,150 180,150" fill="#facc15" stroke="#0f172a" strokeWidth="2.5" />
            <polygon points="135,70 135,150 180,150" fill="#d97706" stroke="#0f172a" strokeWidth="1.5" />
            {/* Historic shield & sword */}
            <circle cx="50" cy="115" r="18" fill="#e2e8f0" stroke="#0f172a" strokeWidth="3" />
            <path d="M35,115 L65,115 M50,100 L50,130" stroke="#94a3b8" strokeWidth="2" />
            <path d="M30,135 L70,95" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            {/* Sky rays */}
            <line x1="20" y1="30" x2="50" y2="50" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
            <line x1="180" y1="30" x2="150" y2="50" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case "sea":
        return (
          <>
            {/* Lighthouse */}
            <rect x="140" y="60" width="20" height="90" fill="#ef4444" stroke="#0f172a" strokeWidth="3" />
            <rect x="140" y="80" width="20" height="20" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
            <polygon points="135,60 150,45 165,60" fill="#1e293b" stroke="#0f172a" strokeWidth="2.5" />
            {/* Glowing light rays */}
            <polygon points="150,52 30,20 30,80" fill="#fef08a" opacity="0.35" />
            {/* Sea Waves */}
            <path d="M10,140 Q50,115 100,140 T190,140" fill="none" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
            <path d="M15,155 Q55,130 105,155 T185,155" fill="none" stroke="#0284c7" strokeWidth="4.5" strokeLinecap="round" />
            {/* Sailboat */}
            <path d="M40,115 L90,115 L80,130 L50,130 Z" fill="#b45309" stroke="#0f172a" strokeWidth="2.5" />
            <polygon points="65,115 65,80 85,110" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
          </>
        );
      case "animals":
        return (
          <>
            {/* Giant sunset sun */}
            <circle cx="100" cy="90" r="45" fill="#f97316" stroke="#ea580c" strokeWidth="1" opacity="0.8" />
            {/* Ground */}
            <path d="M10,145 Q100,135 190,145 L190,190 L10,190 Z" fill="#854d0e" stroke="#0f172a" strokeWidth="3" />
            {/* African Acacia tree silhouette */}
            <path d="M60,145 L65,100 Q40,80 35,65 Q60,65 62,90 L64,90 Q85,75 95,60 Q105,75 98,100 L100,145 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
            <ellipse cx="38" cy="58" rx="25" ry="9" fill="#15803d" stroke="#0f172a" strokeWidth="2.5" />
            <ellipse cx="92" cy="54" rx="30" ry="10" fill="#166534" stroke="#0f172a" strokeWidth="2.5" />
            <ellipse cx="65" cy="45" rx="35" ry="11" fill="#15803d" stroke="#0f172a" strokeWidth="2.5" />
            {/* Little bird silhouette */}
            <path d="M140,55 Q145,50 150,55 Q155,50 160,55" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case "education":
        return (
          <>
            {/* Stacked Textbook */}
            <rect x="45" y="110" width="110" height="25" rx="4" fill="#2563eb" stroke="#0f172a" strokeWidth="3" />
            <line x1="45" y1="122" x2="155" y2="122" stroke="#0f172a" strokeWidth="2" />
            <rect x="50" y="135" width="100" height="20" rx="3" fill="#ec4899" stroke="#0f172a" strokeWidth="3" />
            <line x1="50" y1="145" x2="150" y2="145" stroke="#0f172a" strokeWidth="2" />
            {/* Graduation Cap */}
            <polygon points="100,45 150,65 100,85 50,65" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
            <rect x="85" y="75" width="30" height="15" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
            <path d="M150,65 L155,95 C155,100 150,100 150,100" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            {/* Glowing academic star */}
            <polygon points="100,20 103,28 112,28 105,33 107,41 100,36 93,41 95,33 88,28 97,28" fill="#eab308" stroke="#0f172a" strokeWidth="1.5" />
          </>
        );
      case "community":
        return (
          <>
            {/* Big pink heart background */}
            <path d="M100,145 C100,145 40,105 40,70 C40,45 60,30 80,42 C100,52 100,52 120,42 C140,30 160,45 160,70 C160,105 100,145 100,145 Z" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 3" opacity="0.7" />
            {/* Interlinked friendly community figures */}
            <circle cx="70" cy="80" r="11" fill="#e11d48" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M52,125 L61,95 Q70,91 79,95 L88,125" fill="none" stroke="#e11d48" strokeWidth="7" strokeLinecap="round" />
            
            <circle cx="100" cy="72" r="13" fill="#be123c" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M82,120 L91,87 Q100,81 109,87 L118,120" fill="none" stroke="#be123c" strokeWidth="8" strokeLinecap="round" />
            
            <circle cx="130" cy="80" r="11" fill="#e11d48" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M112,125 L121,95 Q130,91 139,95 L148,125" fill="none" stroke="#e11d48" strokeWidth="7" strokeLinecap="round" />
            {/* Hand-in-hand link bar */}
            <path d="M62,100 Q100,110 138,100" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          </>
        );
      case "sports":
        return (
          <>
            {/* Golden Trophy Cup */}
            <path d="M65,65 L135,65 L125,120 A25,25 0 0,1 75,120 Z" fill="#fbbf24" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
            <path d="M65,75 Q45,85 65,100" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <path d="M135,75 Q155,85 135,100" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <path d="M100,120 L100,150 M75,150 L125,150" fill="none" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
            {/* Soccer / football layout backdrop */}
            <circle cx="100" cy="42" r="15" fill="#f8fafc" stroke="#0f172a" strokeWidth="2" />
            <path d="M90,32 Q100,42 110,32 M90,52 Q100,42 110,52 M100,27 L100,57" stroke="#0f172a" strokeWidth="1.5" />
            {/* Sparkles */}
            <circle cx="45" cy="50" r="3" fill="#fef08a" />
            <circle cx="155" cy="50" r="3" fill="#fef08a" />
          </>
        );
      case "travel":
        return (
          <>
            {/* Desert Sun */}
            <circle cx="100" cy="70" r="32" fill="#ea580c" opacity="0.9" />
            {/* Desert sand dunes */}
            <path d="M10,145 Q70,115 130,155 T210,135 L210,190 L10,190 Z" fill="#eab308" stroke="#0f172a" strokeWidth="3" />
            <path d="M10,160 Q90,140 150,170 T210,150 L210,190 L10,190 Z" fill="#ca8a04" opacity="0.9" />
            {/* Camel silhouette traveling */}
            <path d="M65,140 C65,140 70,122 75,122 C80,122 83,131 87,126 C90,121 88,111 92,107 C96,102 100,105 102,109 Q98,115 100,121 C103,126 110,124 115,128 C120,132 118,140 118,140 L116,152 M67,140 L64,152 M87,140 L87,152" fill="none" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Compass indicator */}
            <circle cx="160" cy="45" r="16" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.5" />
            <polygon points="160,34 164,45 160,48 156,45" fill="#ef4444" stroke="#0f172a" strokeWidth="1" />
            <polygon points="160,56 164,45 160,48 156,45" fill="#64748b" stroke="#0f172a" strokeWidth="1" />
          </>
        );
      case "trade":
        return (
          <>
            {/* Global Trade gears and coin scale */}
            <path d="M100,50 L100,145 M60,145 L140,145" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <path d="M65,70 L135,70" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            {/* Scales left plate */}
            <path d="M65,70 L50,115 L80,115 Z" fill="none" stroke="#0f172a" strokeWidth="2" />
            <rect x="54" y="110" width="22" height="10" rx="2" fill="#10b981" stroke="#0f172a" strokeWidth="1.5" />
            <text x="61" y="118" fill="#fff" fontSize="8" fontWeight="bold">S</text>
            {/* Scales right plate */}
            <path d="M135,70 L120,115 L150,115 Z" fill="none" stroke="#0f172a" strokeWidth="2" />
            <circle cx="135" cy="115" r="9" fill="#eab308" stroke="#0f172a" strokeWidth="1.5" />
            <text x="132" y="118" fill="#0f172a" fontSize="10" fontWeight="bold">$</text>
            {/* Floating cargo box */}
            <rect x="85" y="115" width="30" height="20" rx="3" fill="#d97706" stroke="#0f172a" strokeWidth="2" />
            <line x1="85" y1="125" x2="115" y2="125" stroke="#0f172a" strokeWidth="1.5" />
          </>
        );
      case "anatomy":
        return (
          <>
            {/* Pulse rhythm heartbeat line */}
            <path d="M15,135 L55,135 L65,105 L75,165 L85,125 L95,140 L105,135 L185,135" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Anatomical brain silhouette map */}
            <path d="M70,72 A16,16 0 0,1 88,58 A20,20 0 0,1 128,68 A16,16 0 0,1 122,96 A14,14 0 0,1 100,101 A16,16 0 0,1 70,91 A14,14 0 0,1 70,72 Z" fill="#ffe4e6" stroke="#e11d48" strokeWidth="3" strokeLinejoin="round" />
            <path d="M92,60 Q98,75 88,90 M112,68 Q108,82 112,91 M82,76 L112,76" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
            {/* Breathing lungs bubbles */}
            <circle cx="150" cy="55" r="7" fill="#f43f5e" opacity="0.8" />
            <circle cx="162" cy="65" r="5" fill="#f43f5e" opacity="0.6" />
          </>
        );
      case "science":
        return (
          <>
            {/* Atomic ring orbit path */}
            <ellipse cx="100" cy="95" rx="75" ry="28" fill="none" stroke="#818cf8" strokeWidth="1.5" transform="rotate(30,100,95)" strokeDasharray="5 3" />
            <ellipse cx="100" cy="95" rx="75" ry="28" fill="none" stroke="#312e81" strokeWidth="1.5" transform="rotate(-30,100,95)" />
            {/* Chemistry beaker laboratory flask */}
            <path d="M85,45 L115,45 M95,45 L95,75 L65,135 A18,18 0 0,0 83,155 L117,155 A18,18 0 0,0 135,135 L105,75 L105,45" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinejoin="round" />
            <path d="M72,125 Q100,115 128,125 L124,140 A12,12 0 0,1 115,150 L85,150 A12,12 0 0,1 76,140 Z" fill="#a855f7" />
            {/* Fizzing bubbles */}
            <circle cx="92" cy="105" r="4" fill="#f3e8ff" />
            <circle cx="108" cy="115" r="5" fill="#f3e8ff" />
            <circle cx="100" cy="85" r="3" fill="#c084fc" />
          </>
        );
      case "future":
        return (
          <>
            {/* High-tech Solar Panel panel */}
            <polygon points="30,115 65,115 75,145 20,145" fill="#1d4ed8" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="47" y1="115" x2="47" y2="145" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="25" y1="130" x2="70" y2="130" stroke="#f8fafc" strokeWidth="1.5" />
            {/* Windmill turbine generating electricity */}
            <path d="M140,145 L145,75 L150,145 Z" fill="#64748b" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="145" cy="75" r="6" fill="#334155" stroke="#0f172a" strokeWidth="2" />
            {/* Spinning blades */}
            <path d="M145,75 L118,60 M145,75 L172,60 M145,75 L145,108" stroke="#cbd5e1" strokeWidth="3.5" strokeLinecap="round" />
            {/* Dynamic Energy lightning bolt */}
            <polygon points="100,35 115,60 95,60 110,90 85,55 100,55" fill="#eab308" stroke="#0f172a" strokeWidth="2" />
          </>
        );
      default:
        return (
          <>
            <circle cx="100" cy="100" r="50" fill="#f8fafc" stroke="#0f172a" strokeWidth="3" />
            <text x="100" y="115" fontSize="50" textAnchor="middle">{emoji}</text>
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[150px] max-h-[150px] md:max-w-[180px] md:max-h-[180px] drop-shadow-md select-none">
      <defs>
        <radialGradient id="cardBg" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
        </radialGradient>
      </defs>
      {/* Visual background circle frame */}
      <circle cx="100" cy="100" r="92" fill="url(#cardBg)" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Category-specific vector drawings */}
      {getCategoryPaths()}

      {/* Floating active emoji emblem in corner */}
      <g transform="translate(145, 145)">
        <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#fff" strokeWidth="2" />
        <text x="0" y="7" fontSize="20" textAnchor="middle">{emoji}</text>
      </g>
    </svg>
  );
}

export default function LessonIllustration({ unitId, lessonId, title }: LessonIllustrationProps) {
  const key = `${unitId}-${lessonId}`;
  const details = ILLUSTRATION_DETAILS[key] || {
    emoji: "📖",
    arabicDesc: "رسم توضيحي تفاعلي لطلاب السودان بلمسات تعليمية مبهجة ومميزة.",
    bullets: ["Exploring SMILE Book 6 curriculum lessons", "Interactive language exercises and activities", "Polished lesson summaries with vocabulary guides"]
  };

  const theme = UNIT_THEMES[unitId] || { gradient: "from-indigo-500 to-purple-600", icon: BookOpen };
  const IconComponent = theme.icon;
  const category = getLessonCategory(unitId, lessonId);

  const containerStyle = "relative w-full min-h-[280px] md:min-h-[220px] rounded-[32px] overflow-hidden border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col md:flex-row items-stretch justify-between p-4 sm:p-6 gap-5 bg-gradient-to-br";

  return (
    <div className="w-full relative">
      <div className={`${containerStyle} ${theme.gradient} text-white`}>
        {/* Decorative ambient radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent)] pointer-events-none" />
        
        {/* Left Side: Lesson details, text description, Arabic notes */}
        <div className="flex-1 flex flex-col justify-between gap-4 z-10">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-white/15 rounded-2xl border border-white/20 backdrop-blur-xs shrink-0">
              <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white stroke-[1.5]" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/70 block">
                Unit {unitId} • Lesson {lessonId}
              </span>
              <h3 className="text-sm sm:text-base font-black text-white line-clamp-2">
                {title.replace(/^Lesson \d+:\s*/i, "")}
              </h3>
            </div>
          </div>

          {/* Quick summary bullets */}
          <div className="flex flex-col gap-1 sm:gap-1.5 text-left pl-1 sm:pl-2">
            {details.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[10px] sm:text-xs text-white/90 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 shrink-0" />
                <span className="line-clamp-2">{bullet}</span>
              </div>
            ))}
          </div>

          {/* Bottom Arabic Explanation block */}
          <div className="bg-slate-950/45 border border-white/10 p-2 sm:p-2.5 rounded-2xl backdrop-blur-sm flex items-center gap-2.5">
            <span className="text-sm sm:text-base shrink-0 select-none">💡</span>
            <p className="text-[10px] sm:text-xs font-bold leading-normal text-right text-slate-100 w-full" dir="rtl">
              {details.arabicDesc}
            </p>
          </div>
        </div>

        {/* Right Side: High-fidelity Vector SVG Illustration Canvas */}
        <div className="w-full md:w-56 shrink-0 flex items-center justify-center bg-slate-950/20 border-2 border-white/10 rounded-[24px] relative overflow-hidden p-3 min-h-[160px] md:min-h-0 z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center"
          >
            <LessonSVG category={category} emoji={details.emoji} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
