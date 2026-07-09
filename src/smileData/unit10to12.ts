import { UnitItem } from "../types";

export const units10to12: UnitItem[] = [
  {
    id: 10,
    title: "Health and Environment",
    arabicTitle: "الصحة والبيئة",
    color: "bg-cyan-50 text-cyan-950 border-cyan-400",
    icon: "🌿",
    words: [
      { id: "w10-1", word: "Ecosystem", arabic: "نظام بيئي", image: "🌳", example: "Ponds and grasslands have living things that form an ecosystem.", soundText: "Ponds and grasslands have living things that form an ecosystem.", unit: 10 },
      { id: "w10-2", word: "Pollution", arabic: "تلوث", image: "💨", example: "Factory smoke and car emissions cause severe air pollution.", soundText: "Factory smoke and car emissions cause severe air pollution.", unit: 10 },
      { id: "w10-3", word: "Epidemic", arabic: "وباء", image: "🦠", example: "Cholera and malaria can spread quickly as dangerous epidemics.", soundText: "Cholera and malaria can spread quickly as dangerous epidemics.", unit: 10 },
      { id: "w10-4", word: "Symptom", arabic: "عرض المرض", image: "🤒", example: "A high temperature is a major symptom of the flu.", soundText: "A high temperature is a major symptom of the flu.", unit: 10 },
      { id: "w10-5", word: "Nicotine", arabic: "نيكوتين", image: "🚭", example: "Cigarettes contain nicotine, which is very harmful to the heart.", soundText: "Cigarettes contain nicotine, which is very harmful to the heart.", unit: 10 },
      { id: "w10-6", word: "Quarantine", arabic: "حجر صحي", image: "🏥", example: "Patients with infectious diseases are put in quarantine.", soundText: "Patients with infectious diseases are put in quarantine.", unit: 10 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: The Ecosystem",
        type: "vocab",
        content: {
          songText: "When people talk about an ecosystem they often use the example of a pond. The pond is an example of a place. The ecosystem in this example is all the living things in the pond and the way they interact. They interact with each other as well as non-living things like the weather. There has to be enough food for all the living things in an ecosystem. For example, in and around a pond the plants have soil and water and attract insects. Frogs live in the water and eat the insects. The frogs are sometimes eaten by birds.\n\nThere are lots of different living things in an ecosystem and they all live and interact together. Only small changes happen in a successful ecosystem. The most important thing is that there is a balance. As soon as there is a big change, the ecosystem loses its balance. For example, if there are too many frogs, they will eat all the insects. Then there will be too few insects. The change might be because of disease, change in the weather or because of something man made, like too much pollution from towns and villages."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Water Pollution",
        type: "vocab",
        content: {
          songText: "Seventy-one percent of our planet is water, but almost 783 million people do not have clean water to use!\n\n• If we don’t have clean water for drinking, cooking and washing, people can get sick.\n• If we don’t wash our hands before eating, we can also get sick.\n\nIn many countries, women spend their time collecting water, sometimes for six hours a day!\n• If young girls spend time collecting water, they can’t go to school.\n• If women spend less time collecting water, they can do other things.\n\nA lot of fresh water is used when farmers grow food for people to eat.\n• If the population keeps growing, we will need sixty percent more food by 2050.\n• If we need more food, we’ll also need more water to grow it.\n\nAround 3.5 million people die every year because of polluted water and poor sanitation. Ninety percent of these people are children under five years old.\n• If everyone had clean water, we could prevent 350,000 adults from dying every year.\n• If every child had clean water, maybe 3.15 million children wouldn’t die every year!\n\nThink before you use water!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Epidemics",
        type: "vocab",
        content: {
          songText: "• What is an epidemic? It is when a disease infects a large number of people in a short time. Examples of epidemics in the past 35 years are Ebola and HIV / AIDS.\n\n• What happens in an epidemic? When it starts, many people get the disease. The disease can be spread by touching infected people, dirty drinking water or infected food. It can also be spread by animals and insects.\n\n• What can we do in an epidemic? The World Health Organisation (WHO) teaches people what to do during epidemics. For example, you should wash your hands more and stop sharing things like food bowls and water bottles.\n\n• What should governments do in an epidemic? They should act quickly to stop the spread of the disease. This includes keeping people away from others if they have an infection.\n\n• What else could we do? Millions of people would be protected if they were vaccinated against diseases such as cholera. Millions more would be protected if we could find a vaccine for diseases such as malaria and Ebola."
        }
      },
      {
        id: 4,
        title: "Lesson 4: Colds and Flu",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Dr. Israa", text: "What is the matter, Alaa?", voice: "Kore" },
            { speaker: "Alaa", text: "I have a headache, a sore throat, and a cough.", voice: "Zephyr" },
            { speaker: "Dr. Israa", text: "Let me check your temperature. If you had the flu, you would have a high temperature. You just have a common cold!", voice: "Kore" }
          ],
          songText: "Dr. Israa: Hello Alaa, what is the matter?\nAlaa: I have a terrible headache, a sore throat, and a cough. I feel cold too!\nDr. Israa: Let me take your temperature. It's normal. If you had the flu, you would have a high temperature. You just have a common cold!\nAlaa: Is anyone else ill in my family?\nDr. Israa: Yes, your sister was here with a cold too. You should rest and drink hot lemon tea, Alaa."
        }
      },
      {
        id: 5,
        title: "Lesson 5: Don’t Smoke!",
        type: "vocab",
        content: {
          songText: "Coach Ronnie: Smoking is bad for young people even if they feel healthy. Smokers usually find it more difficult to breathe and exercise. They also get tired quickly. I only let non-smokers play on my team because they are better footballers and can run more quickly. If someone gave up smoking, I would let him play on my team.\n\nDoctor Safa: Children often have health problems if their parents smoke. For example, they are more likely to get coughs and ear infections. But it is also bad for their health later in life. Smokers should think carefully about other people before they light a cigarette.\n\nEl Sheikh: I started smoking when I was very young. I smoked for more than 30 years. I liked smoking and it made me feel like a man. Some of my relatives said I should stop but I didn’t – I was very selfish. I used to smoke in the bedroom where my wife and our baby slept and my baby often had a cough. Then one day, I had a heart attack and I stayed in hospital for nine days. After that I gave up smoking easily and I’ve never smoked again."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Herbal Medicine in Sudan",
        type: "vocab",
        content: {
          songText: "• Moringa: Moringa leaves have lots of proteins, vitamins and minerals. You can take them as a medicine to help with diseases such as eye diseases. You should boil a few Moringa leaves and drink a little of the liquid before breakfast.\n\n• Sesame Oil: Sesame oil has lots of vitamins and minerals. You can use it to improve your skin and hair. You can also add the seeds to food to make it taste good. Dentists say you should use it to clean your teeth.\n\n• Hibiscus Tea: Hibiscus tea has lots of vitamin C and minerals. Hibiscus lowers your blood pressure when you drink it as a hot tea or cold juice. It also lowers cholesterol and helps people to lose weight. You can prepare it by boiling a few flowers, but you shouldn’t drink too much hibiscus tea.\n\n• Garad: Acacia nilotica (Garad) kills germs. You can boil it as a tea for colds and flu. The crushed seeds are also used to clean cuts. In the future, it could be used by doctors to treat diabetes."
        }
      },
      {
        id: 7,
        title: "Lesson 7: Healthy Living",
        type: "vocab",
        content: {
          songText: "Dr. Kamal explains: 'Good food and exercise is not enough to be healthy. Lots of people breathe polluted air, which damages their lungs. We should use cars that make less pollution, walk short distances, and plant more trees in our towns. Also, cigarette smoke is a dangerous kind of air pollution that we must avoid to live a healthy life.'"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: A Healthy World",
        type: "vocab",
        content: {
          songText: "The British organisation Oxfam spoke to ten children in a poor part of Nairobi, the capital of Kenya. They asked them a question: ‘What would you do if you were President of Kenya for a day.’ Here are some of their ideas:\n\n• A: 'If I were president, I would change the roads. Mud is a problem. I would make them easier to use.'\n• B: 'If I were President, I would make Nairobi safer. I would also open more hospitals because a lot of people get sick.'\n• C: 'If I were President I would make sure there were good toilets. I would bring good toilets to the whole country.'\n• D: 'If I was President, I would make the houses safer. I would make them of concrete so the children don’t get burned when there is a fire.'\n• F: 'If I were President, I would make sure the water was clean enough to drink.'"
        }
      }
    ]
  },
  {
    id: 11,
    title: "Amazing People, Animals and Places",
    arabicTitle: "أشخاص وحيوانات وأماكن مذهلة",
    color: "bg-fuchsia-50 text-fuchsia-950 border-fuchsia-400",
    icon: "🐘",
    words: [
      { id: "w11-1", word: "Pastoralist", arabic: "راعٍ", image: "🐑", example: "The Maasai are pastoralists who move with their cattle.", soundText: "The Maasai are pastoralists who move with their cattle.", unit: 11 },
      { id: "w11-2", word: "Lighthouse", arabic: "منارة", image: "🚨", example: "The Lighthouse of Alexandria was one of the Seven Wonders.", soundText: "The Lighthouse of Alexandria was one of the Seven Wonders.", unit: 11 },
      { id: "w11-3", word: "Mimic", arabic: "يقلد", image: "🦜", example: "Parrots are famous for their ability to mimic human speech.", soundText: "Parrots are famous for their ability to mimic human speech.", unit: 11 },
      { id: "w11-4", word: "Polyglot", arabic: "متعدد اللغات", image: "🗣️", example: "Nicholas is a polyglot who speaks eighteen different languages.", soundText: "Nicholas is a polyglot who speaks eighteen different languages.", unit: 11 },
      { id: "w11-5", word: "Midnight", arabic: "منتصف الليل", image: "🌙", example: "Finland is famous for the midnight sun during the summer.", soundText: "Finland is famous for the midnight sun during the summer.", unit: 11 },
      { id: "w11-6", word: "Novel", arabic: "رواية", image: "📚", example: "Charlotte Bronte wrote her famous novel Jane Eyre under a male name.", soundText: "Charlotte Bronte wrote her famous novel Jane Eyre under a male name.", unit: 11 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: The Maasai of Kenya",
        type: "vocab",
        content: {
          songText: "The Maasai are traditional pastoralists living in Kenya and Tanzania. They move constantly across grasslands to find fresh pasture for their sheep and cattle. A Maasai boy named Leshan says: 'We move from place to place. My family lives in traditional mud-and-grass houses. I look after the sheep and cows, but I also study hard. My dream is to go to university and become a teacher to help my community.'"
        }
      },
      {
        id: 2,
        title: "Lesson 2: Amazing World Records",
        type: "vocab",
        content: {
          songText: "Nicholas Kontovas: My teacher is amazing. He can speak about 18 languages so he’s a polyglot – that’s what they call people who speak lots of languages. He’s one of the most famous polyglots in the world. His name is Nicholas Kontovas. That’s a Greek name even though he’s from New York City. I’m Turkish and study at a university in Istanbul where he teaches. He can speak languages as well as a native speaker – someone who was born there. He has also learnt lots of different language types, like Spanish, Persian and Chinese.\n\nOther world records include:\n• Makkah Clock: 581.1 metres high, with two million lights seen from far away.\n• Hussain Bisad: 232cm tall, born in Somalia in 1975, living in Britain.\n• World's largest pumpkin: 1,190.5 kg grown in Germany in 2016."
        }
      },
      {
        id: 3,
        title: "Lesson 3: Alexandria Lighthouse",
        type: "vocab",
        content: {
          songText: "• The lighthouse of Alexandria was one of the Seven Wonders of the World. It was built in the 3rd century BC and for hundreds of years was the tallest building in the world. It was about 120 metres tall. It was built to help sailors see the location of the city at night. There was a mirror in the lighthouse that reflected sunlight into the sea. Some people say that the mirror was used to set enemy ships on fire. The lighthouse was damaged by three different earthquakes. By the 14th century, only a few stones were left.\n\n• The Library of Alexandria was the oldest library in the world. It was built over two thousand years ago. For hundreds of years, the world’s most important books were kept there. In those days, it was a very special place to visit and study. During the famous fires of Alexandria, the library was destroyed and many of the books were lost forever. A new Alexandria library was built in 2002."
        }
      },
      {
        id: 4,
        title: "Lesson 4: Talking Parrots",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Mansour", text: "Look, my parrot can mimic every word I say!", voice: "Kore" },
            { speaker: "Ali", text: "Wow! Can it also express emotions like feeling happy, sad, or angry?", voice: "Zephyr" },
            { speaker: "Mansour", text: "Yes! If I don't feed him on time, he shouts loudly to show he is angry!", voice: "Kore" }
          ],
          songText: "Dialogue:\n\nMansour: Look, my parrot can mimic every word I say! It's so funny!\nAli: Really? I don't think that is true! Parrots just make noise, don't they?\nMansour: No! Watch this. Parrot, say hello to Ali!\nParrot: Hello Ali! Hello Ali!\nAli: That is amazing! It sounds like a real person! You've cheered me up a lot!"
        }
      },
      {
        id: 5,
        title: "Lesson 5: An Amazing Child",
        type: "vocab",
        content: {
          songText: "Email from Yasir:\n\nHi Atif, Can I ask your advice? I’ll tell you why. Yesterday I saw a young boy. He was carrying a water container. He looked very tired so I asked him what his name was and if he needed help. He said his name was Awad and he was collecting water for the tea ladies at the market - they give him a bit of money for that. He said he also worked in the market helping people who sell vegetables. I asked him what his parents did. He told me that his father was dead and his mother was sick – the doctor had told her that she couldn’t work. I felt very sorry for the boy, but the more he talked, the more I liked him. He said he was working to support his family. He is trying to get money so his younger brother and sister can go to school. But he also said he wanted to save money and go back to school himself. I was amazed by his strength and ambition. I’d like to help Awad, but I don’t know how. Do you have any suggestions? Yasir"
        }
      },
      {
        id: 6,
        title: "Lesson 6: Finland’s 24-hour Sun",
        type: "vocab",
        content: {
          songText: "Siri explains: 'Finland has very short cold days in winter with lots of snow. But in summer we have long, warm, sunny days. People call Finland ‘the land of the midnight sun’ because where we live in the north, there are 24 hours of sun in June and July! People ask us: ‘How do you sleep in summer when there is no sunset?’ In fact, we don’t sleep very much in June and July. One reason is that the countryside of Finland is so beautiful. After the long, cold, dark, winter nights, most Finns like to leave the city and stay in small, wooden houses in the countryside. Finland has about 188,000 lakes and 179,000 islands to visit – it’s great for walking and sailing. My family spends a lot of time outdoors. We often go swimming or fishing in the lake. Then we make a fire and sit around it – we cook fish, talk and play games. Sometimes we stay up all night.'"
        }
      },
      {
        id: 7,
        title: "Lesson 7: Two Famous English Novelists",
        type: "vocab",
        content: {
          songText: "• Charlotte Bronte: Charlotte Bronte was born in 1816 and started writing poetry at the age of 13 when she started a magazine at home with her brother and sisters. She and her sisters published their poetry, but gave themselves male names at first, so that people would read their work. Later, she wrote her famous novel ‘Jane Eyre’, which quickly became popular because of her dramatic way of writing. After her brother and sisters died, Charlotte wrote two more novels and then married in 1854. She died less than one year later at the age of 38.\n\n• Charles Dickens: Charles Dickens was born in 1812. He had a poor and unhappy childhood after his father was sent to prison, but later he became a writer for a magazine. He wrote at least 24 novels and is often described as the greatest English novelist. Dickens had a busy life writing books and plays and travelling. He had lots of friends and a big family with 10 children. When Dickens died in 1870, he was rich and famous. His novels are still very popular because they describe old English life in a clever and interesting way. They include many unusual and amusing characters like Fagin and Mr Bumble."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Amazing Wonders",
        type: "vocab",
        content: {
          songText: "• Stonehenge: Stonehenge is the oldest. It was built around 5,000 years ago in England. People wonder how such big stones were brought there from places far away. And why was it built? Was it a way of keeping the time, or something else? It is still not known why.\n\n• The Pyramids of Egypt: These were built as tombs. Most of them were built between about 3,600 and 4,600 years ago by thousands of people. Inside the pyramids, there were rooms full of treasure, but most of this was taken or is now in museums.\n\n• The Great Wall of China: This is 3,000 miles long. Many people think it’s the only man-made object you can see from space – but that’s not true! Some parts of the walls are ten metres high with room to walk along the top, built to keep out the people who lived in the north."
        }
      }
    ]
  },
  {
    id: 12,
    title: "Finishing Up",
    arabicTitle: "الخاتمة والمراجعة",
    color: "bg-violet-50 text-violet-950 border-violet-400",
    icon: "🎓",
    words: [
      { id: "w12-1", word: "Gardening", arabic: "البستنة", image: "🏡", example: "Doha loves gardening in the backyard with her grandmother.", soundText: "Doha loves gardening in the backyard with her grandmother.", unit: 12 },
      { id: "w12-2", word: "Bankrupt", arabic: "مفلس", image: "📉", example: "The merchant went bankrupt because he could not pay back his loans.", soundText: "The merchant went bankrupt because he could not pay back his loans.", unit: 12 },
      { id: "w12-3", word: "Logic", arabic: "منطق", image: "🧩", example: "Solve the logic puzzle about crossing the river Nile in a boat.", soundText: "Solve the logic puzzle about crossing the river Nile in a boat.", unit: 12 },
      { id: "w12-4", word: "Manufactured", arabic: "مصنع", image: "🏭", example: "Sudan exports agricultural goods and manufactured products.", soundText: "Sudan exports agricultural goods and manufactured products.", unit: 12 },
      { id: "w12-5", word: "Oxygen", arabic: "أكسجين", image: "🫁", example: "Lungs bring oxygen into the body, which is pumped by the heart.", soundText: "Lungs bring oxygen into the body, which is pumped by the heart.", unit: 12 },
      { id: "w12-6", word: "Revision", arabic: "مراجعة", image: "📝", example: "We are finishing up our book with a complete revision lesson.", soundText: "We are finishing up our book with a complete revision lesson.", unit: 12 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Twin Passions",
        type: "vocab",
        content: {
          songText: "My name is Lina and I have a twin sister called Doha. She has been my friend since we were very young and we have always done things together. We have always gone to the same school together and we have always liked doing the same things. We even used to dress the same so people couldn’t tell us apart.\n\nBut now we are 15, we have started to do different things. These days, I don’t like going out in the hot sun so I like to stay inside and read. But Doha prefers to go outdoors – even when it is hot. She loves growing things and working with our grandmother in the garden.\n\nAt first Doha was angry with me. She still wanted me to do everything with her. So we talked to my grandmother and she was very helpful. She told us that we would change as we grew up into adults and didn’t need to do everything together. She said if we tried to keep things the same, we would be unhappy. My grandmother is a very wise woman and we both listened to her. The funny thing is that we have started doing more things together again, even though we still do some things differently."
        }
      },
      {
        id: 2,
        title: "Lesson 2: The Arts",
        type: "vocab",
        content: {
          songText: "In a village by the River Nile, there lived a wise old man. The old man had more money than he needed and he kept it buried in his garden. There were different quantities of money buried in different places. When anyone asked to borrow money, he told them where to dig and they found what they needed. The old man always said, “Just put the money back when you can.”\n\nOne day, a merchant borrowed a large quantity of money from the old man to help his business. Months passed and he didn’t take it back. Months turned into years and he still didn’t return it. But one day, business was very bad and the merchant lost all his money. He decided to go back to the old man for more.\n\n“There should be some money over there,” replied the old man, pointing to the place in the garden where the merchant dug before. The merchant began to dig. Down and down he dug but there was no money to be found. He went back to the old man and said angrily, “They told me you were wise, but that there’s no money there at all!”\n\nThe old man held up his hand and replied, “When you pay it back, you will find it again.”"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Amazing Organs",
        type: "vocab",
        content: {
          songText: "All the organs in the human body are important for keeping us alive. But the heart and lungs are special. We can hear our heart pump and we can feel ourselves breathe. They are also important because they help produce energy.\n\nWhen we breathe in, the air is processed by our lungs and the oxygen from it is added to our blood. The heart then pumps the blood around the body. Our body needs oxygen to burn our food and produce energy. The blood also collects the carbon dioxide that is left after the oxygen has been used. When we breathe out, the carbon dioxide is returned to the air. We need energy to keep all the other organs in our bodies alive and working. For example, when you are sitting at school and learning things, your brain is working hard. The brain uses lots of energy to process information and control the body, so it needs lots of oxygen. So don’t forget that the lungs, the heart and the brain all need oxygen and look after them!"
        }
      },
      {
        id: 4,
        title: "Lesson 4: A Sudanese Adventure",
        type: "vocab",
        content: {
          songText: "Alex explains his travel experiences: 'I have visited Sudan three times! It is an amazing country. I love the warm hospitality of the Sudanese people. On my first visit, I went to Khartoum and Suakin. On my second visit, I went to the Nuba Mountains. And on my third visit, I brought my brother to explore the incredible wildlife at Dinder National Park. This time, I’m planning to visit the camel market and learn some more Arabic!'"
        }
      },
      {
        id: 5,
        title: "Lesson 5: River Crossing Logic Puzzle",
        type: "vocab",
        content: {
          songText: "A very popular hobby around the world is doing puzzles. There are all sorts of puzzle activities such as crosswords, jigsaw puzzles and logic puzzles. Here are three logic puzzles. See if you can solve them?\n\n• Puzzle 1: Ohaj used to be a teacher who worked in a big town. He used to take 15 minutes to walk to the bus station and 35 minutes to go to work by bus. What time did he leave the house to get to work at 7.30 a.m.?\n\n• Puzzle 2: Loqman and Aliya have a total of 39 toys. If Omnia has 5 more toys than Loqman, how many toys does each one have?\n\n• Puzzle 3: A farmer is going home from the market where he bought a goat, some straw and a fox. On the way home he has to cross the Nile, but there are no bridges nearby. He has a boat, but it is small. This means he can’t take all the things he bought each time he crosses the river. But he cannot leave the goat alone with the straw – because the goat would eat it. And he cannot leave the goat alone with the fox – because the goat would be eaten. How can the farmer get everything onto the other side safely?"
        }
      },
      {
        id: 6,
        title: "Lesson 6: Trade",
        type: "vocab",
        content: {
          songText: "Dialogue:\n\nAl Tayib: Look – there’s so much hibiscus on that stall. I feel like a nice glass of hibiscus tea.\nEl Fatih: Yes, hibiscus has a lot of vitamins in it. Did you know that Sudan has increased its exports of hibiscus by more than 50% during the last ten years?\nAl Tayib: How do you know?\nEl Fatih: My uncle works as an export business man.\nAl Tayib: Oh, really? What else do we export?\nEl Fatih: Peanuts, sesame, sheep…\nAl Tayib: I thought we exported minerals and oil.\nEl Fatih: Yes, we export fuel and metals like gold and iron. But not as much metal as agricultural products. Look, it shows you on this chart on my phone.\nAl Tayib: Oh yes. 57.9% of Sudan’s exports are agricultural products.\nEl Fatih: Almost 60% of our exports. Only 21.2% of our exports are minerals and fuels.\nAl Tayib: OK, and what other things do we export?\nEl Fatih: About 5% of exports are manufactured goods, like clothes and processed food. My uncle says that’s not enough.\nAl Tayib: What, like those plastic sandals over there?\nEl Fatih: Yes, but they are probably imported from China, and those clothes are probably imported from India.\nEl Fatih: Yes, we should make more things here."
        }
      },
      {
        id: 7,
        title: "Lesson 7: Solar Panels and Electric Cars!",
        type: "vocab",
        content: {
          songText: "Buthaina is very excited about the future of energy and transport. She says: 'I think things might be getting better. Solar panels will become cheaper, and we can install them on the roofs of our houses to make clean, free electricity. Also, electric cars will replace dirty, noisy engines. If we stopped putting dangerous chemicals and smoke into our environment, our air and rivers would be much cleaner. This will help make Sudan a wonderful and healthy place to live!'"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: The End!",
        type: "vocab",
        content: {
          songText: "1. I might play some memory games to keep my brain active.\n\n2. My cousins from overseas are coming to visit us. I want to practise my English with them.\n\n3. I’m travelling with my family to Kenya. I might go up in a hot air balloon!\n\n4. I’m going to the market with my aunt. I really like being with her because we laugh and talk all the time.\n\n5. I’m going to help my dad repair the house because it might rain.\n\n6. I think I’ll read ‘Jane Eyre’ by Charlotte Bronte. One day I’d like to study English at university."
        }
      }
    ]
  }
];
