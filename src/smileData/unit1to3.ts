import { UnitItem } from "../types";

export const units1to3: UnitItem[] = [
  {
    id: 1,
    title: "English is Everywhere",
    arabicTitle: "الإنجليزية في كل مكان",
    color: "bg-sky-50 text-sky-950 border-sky-400",
    icon: "🌍",
    words: [
      { id: "w1-1", word: "Journey", arabic: "رحلة", image: "🚌", example: "It was a long journey but I kept myself busy.", soundText: "It was a long journey but I kept myself busy.", unit: 1 },
      { id: "w1-2", word: "Puzzle", arabic: "لغز", image: "🧩", example: "I did lots of puzzles so that I can remember more English words.", soundText: "I did lots of puzzles so that I can remember more English words.", unit: 1 },
      { id: "w1-3", word: "Princess", arabic: "أميرة", image: "👑", example: "A beautiful princess called Saadia came out of the tin can.", soundText: "A beautiful princess called Saadia came out of the tin can.", unit: 1 },
      { id: "w1-4", word: "Active", arabic: "نشيط", image: "💪", example: "I did exercises like sit-ups every morning to stay active.", soundText: "I did exercises like sit-ups every morning to stay active.", unit: 1 },
      { id: "w1-5", word: "Ambition", arabic: "طموح", image: "⭐", example: "His future ambition is to become a teacher for disabled children.", soundText: "His future ambition is to become a teacher for disabled children.", unit: 1 },
      { id: "w1-6", word: "Spelling", arabic: "تهجئة", image: "✏️", example: "Hala practices her spelling to write English correctly.", soundText: "Hala practices her spelling to write English correctly.", unit: 1 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Holiday Fun",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Ali", text: "What did you do during the school holidays, Tariq?", voice: "Kore" },
            { speaker: "Tariq", text: "I was very active! I lifted weights in the morning and played computer games in the evening.", voice: "Zephyr" },
            { speaker: "Ali", text: "That sounds fun! I stayed in a small village and played traditional board games with my cousin Amna.", voice: "Kore" }
          ],
          songText: "1. I went by bus to my grandparents’ house. It was a long journey but I kept myself busy. For most of the journey I was playing with my Rubik’s cube. I can solve it really quickly now.\n\n2. I enjoy school, but I also like learning things myself. In the holidays I read some English books. I also did lots of puzzles so that I can remember more English words.\n\n3. I stayed with my cousin Amna. I usually play computer games, but she lives in a small village and doesn’t have the Internet. It was very hot so we stayed at home. We talked, drank tea and played board games and traditional games.\n\n4. I was very active in the holidays. I did exercises like sit-ups every morning and then I lifted weights. But in the evenings I needed to relax, so I watched television or played computer games.\n\n5. I really enjoyed the holidays. I flew to Port Sudan and I went to the beach. I learnt to play volleyball and I watched some older boys playing football."
        }
      },
      {
        id: 2,
        title: "Lesson 2: The Princess and the Ring",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Fatma", text: "Who gave you this golden ring, Samira? You must tell me immediately.", voice: "Kore" },
            { speaker: "Samira", text: "I saved a princess named Saadia who was trapped in a tin can! She gave me the ring to say thank you.", voice: "Zephyr" },
            { speaker: "Fatma", text: "A princess inside a tin can? Are you crazy, Samira?", voice: "Kore" }
          ],
          songText: "Fatma saw a golden ring shining on her daughter’s hand.\n'Who gave you this ring, Samira?' asked Fatma. 'You must tell me.'\n'A princess,' said Samira.\n'Are you crazy?' the mother shouted.\n'No mother' said Samira 'I saw a tin can on the ground near our house. Then I heard a noise from inside so I opened it. A beautiful princess called Saadia came out of the tin and gave me the ring. She wanted to say thank you because I saved her life. She said: “If you turn the ring three times and call my name, I will come to you. Then you can make a wish”.'\n'A wish!' said the mother and smiled.\n'Yes mum' said Samira.\n\nFatma thought about her lost husband, Samira’s father. He went to another country many years ago and no one knew where he was. She said: 'Let’s ask Saadia to find your father and bring him home.'\nSamira took the ring. Slowly, she turned it three times on her finger and called 'Saadia.' Suddenly, the princess was there in front of her.\n“We want you to find my father. Can you bring him home? ” Samira asked. 'Yes' said Saadia 'I will bring him, it will be easy'."
        }
      },
      {
        id: 3,
        title: "Lesson 3: Working the Land",
        type: "vocab",
        content: {
          songText: "Selma loves working on the agricultural land during the holidays. She enjoys helping her grandmother and grandfather who is almost 60 years old. Working the soil requires strength and patience, but growing food brings great joy to the whole family. Selma says: 'I love helping my grandfather on the land during the holidays. We plant seeds and water the crops. Even though the sun is very hot and the work is hard, I feel extremely happy because we are growing healthy food for our family and community.'"
        }
      },
      {
        id: 4,
        title: "Lesson 4: World of Animals",
        type: "vocab",
        content: {
          songText: "1. Animals are important in our lives. We all use animal products and have them in our homes. Leather and soap come from animals as well as meat, eggs and milk. People have kept animals on farms and as pets for many generations. For example, we have used oxen for work on farms and horses to carry us for over 6,000 years.\n\n2. Not all animals help us. They sometimes eat our food and crops. For example, locusts are small but they can eat a field of plants in minutes. Animals like scorpions and sharks can hurt us and sometimes kill us. However, the most dangerous animal is the mosquito. These animals kill about one million people every year.\n\n3. Some animals are very interesting because they are different from other animals. Sometimes they are different because they live in special places. For example, kangaroos are large Australian herbivores that hop and carry their babies in a pouch. Octopuses are also strange because they have three hearts and eight arms.\n\n4. We need to protect animals so they don’t become extinct. Many animals like rhinos are in danger because we hunt them for their skin or horns. Animals like pandas and mountain gorillas are in danger if we cut down forests. If we make more national parks, future generations will be able to see these amazing animals."
        }
      },
      {
        id: 5,
        title: "Lesson 5: Osman Digna",
        type: "vocab",
        content: {
          songText: "Osman Digna was a friend of Al Mahdi. He was named ‘Digna’ because of his beard. He was born in Suakin in 1840. He was a merchant before he joined Al Mahdi. Sudan was ruled from Egypt but he wanted to change that.\n\nIn 1883, he attacked the Egyptian army near Tokar and a few months later he took control of the city. Over the next 16 years his army fought many times - sometimes they won and sometimes they didn’t. In 1891, the combined British and Egyptian army joined together and took Tokar back. Osman Digna had to hide in the mountains. In 1899, he tried to reach safety in the Hejaz but he was caught at the end of January 1900 and put in prison.\n\nThe British let him go free in 1908 and he lived in Egypt until he died in 1926. After he died, his body was brought back to Sudan and he was buried near Khartoum."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Travel and Celebrations",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Huzaifa", text: "Uncle, can we go to the beach in Port Sudan?", voice: "Kore" },
            { speaker: "Uncle", text: "Of course! Port Sudan is famous for beaches, islands, and the Tourism and Shopping Festival.", voice: "Zephyr" },
            { speaker: "John", text: "That is excellent! I want to take lots of photos of the sea.", voice: "Kore" }
          ],
          songText: "Port Sudan is on the west coast of the Red Sea. Because of its location, it is known as the ‘Eastern Gate’ to Sudan. It has a population of 490,000. It is famous for its beaches, islands and natural reserves.\n\nPort Sudan has a Tourism and Shopping Festival from November to January. Visitors come from all over Sudan to enjoy the celebrations, buy local crafts, and explore the beautiful Red Sea coast."
        }
      },
      {
        id: 7,
        title: "Lesson 7: Future Ambitions",
        type: "vocab",
        content: {
          songText: "1. Hi there. My name is Ibrahim. I live in Abu Hamad. When I leave school, I want to study to be a teacher. I hope to teach children with disabilities. I am going to teach them how to read and write and help them as much as I can.\n\n2. Hello. I am Manal. I am from Wad Medani. When I finish secondary school, I’d like to be a scientist. If I can look for new medicines, I can help sick people with different diseases. I want all people to be healthy and happy.\n\n3. Hi everybody. I am Rana and my brother is Rashid. We are from Sinja. We are going to study computer sciences at university when we leave school. Rashid is going to study computer engineering. He can fix computers. I am going to study computer programming and become a programmer. I hope to make useful computer programs that help people in their lives."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Learning English",
        type: "vocab",
        content: {
          songText: "1. I’m Abdullah and I’m 16. I like English but I find reading difficult and my spelling is bad. I know I will have to read English books if I go to college or university so I need to practise writing by myself in the holidays.\n\n2. Hi! I’m Hala and I’m 15. I’m learning English and French at school and I want to study more languages. I’m practising listening and speaking on the computer so I can talk to people in other parts of the world.\n\n3. Hello! I’m Yusif and I’m 14. I love sports and my dream is to be a professional athlete. I’ve started watching films and sports programmes on TV in English. It’s difficult to understand sometimes, but I know lots of English words now.\n\n4. I’m Hana and I’m 15. My parents have a small hotel and we have visitors from lots of different countries. Sometimes I have to speak English to them because they don’t understand Arabic. I write down useful phrases in my notebook."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Relationships",
    arabicTitle: "العلاقات والقرابات",
    color: "bg-emerald-50 text-emerald-950 border-emerald-400",
    icon: "🤝",
    words: [
      { id: "w2-1", word: "Volunteer", arabic: "متطوع", image: "🤝", example: "Volunteers worked together in a Nafeer to repair the houses.", soundText: "Volunteers worked together in a Nafeer to repair the houses.", unit: 2 },
      { id: "w2-2", word: "Twin", arabic: "توأم", image: "👥", example: "Hassan and Hussain are twin brothers who look very similar.", soundText: "Hassan and Hussain are twin brothers who look very similar.", unit: 2 },
      { id: "w2-3", word: "Prey", arabic: "فريسة", image: "🦌", example: "The brave goat Timur did not act like prey to the tiger.", soundText: "The brave goat Timur did not act like prey to the tiger.", unit: 2 },
      { id: "w2-4", word: "Camp", arabic: "مخيم", image: "⛺", example: "Jane prefers going to a summer camp with her school friends.", soundText: "Jane prefers going to a summer camp with her school friends.", unit: 2 },
      { id: "w2-5", word: "Stressed", arabic: "مجهد", image: "😫", example: "She was studying day and night and felt very stressed before exams.", soundText: "She was studying day and night and felt very stressed before exams.", unit: 2 },
      { id: "w2-6", word: "Surprise", arabic: "مفاجأة", image: "🎁", example: "It was a big surprise when Marwa married Omnia's brother.", soundText: "It was a big surprise when Marwa married Omnia's brother.", unit: 2 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: Preparing for Heavy Rain",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Tasneem", text: "Hi Yusra, how are you?", voice: "Kore" },
            { speaker: "Yusra", text: "Our house is old and made of mud. We need to repair it before the heavy rain next week.", voice: "Zephyr" },
            { speaker: "Tasneem", text: "I hope the Nafeer volunteers are going to help your family.", voice: "Kore" }
          ],
          songText: "Every year during autumn there is a chance of heavy rain. Many Sudanese houses are damaged because of these rains. Before the rains, it’s important to repair houses so there is not so much damage. In each community, young volunteers, called nafeer, work together to help their communities prepare for the rain.\n\nDialogue between Tasneem and Yusra:\nTasneem: Hi Yusra.\nYusra: Hi Tasneem, how are you?\nTasneem: Fine. My father said there was an announcement on the radio today. People should take care because there may be heavy rain next week.\nYusra: So soon? That’s a problem. Our house is very old and made of mud. We need to repair it soon.\nTasneem: I think your family should move to your grandma’s place until the rain passes.\nYusra: No, we’ll stay at home to prepare food for the nafeer while they are working.\nTasneem: I hope people are going to help your father?\nYusra: Yes, they are. He sat with them to plan what to do.\nTasneem: What did they plan to do?\nYusra: Firstly, they have to check the walls and the roof and repair them. Secondly, they should probably remove rubbish so the water can flow away easily. Finally, they need to build a shelter. The family can go to the shelter if the house isn’t safe during the rains.\nTasneem: That’s not easy. I hope it goes well.\nYusra: Thank you Tasneem. See you later. Bye."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Hassan and Hussain",
        type: "vocab",
        content: {
          songText: "Hassan and Hussain are twin brothers. They look very similar, both are tall and slim, but they have different personalities. Hassan is a bit quiet and loves reading, while Hussain is outgoing, loves playing football, and enjoys playing tricks on people. Both boys like sports, but neither boy likes swimming. They don't always like the same colours, and it can be hard to tell the difference between the two boys when they are dressed in the same clothes!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: Amur and Timur",
        type: "vocab",
        content: {
          songText: "There is a very unusual friendship in a Russian zoo. Amur is a large tiger and Timur is a small goat. Now they have become the best of friends, even though they should be enemies.\n\nTimur the goat was given as food for the tiger, Amur. Amur loves meat, especially goats. Usually when an animal was put in his cage he would eat it quickly.\n\nHowever, Timur was not scared of the dangerous predator. When he was put in the cage he showed no fear, even though the tiger could eat him in a second. Timur didn’t act like prey, so Amur decided not to eat him. The brave goat not only saved his own life, but he kicked the tiger out of his shelter and went to sleep in his bed! Now, Amur and Timur are the best of friends and spend all their time together."
        }
      },
      {
        id: 4,
        title: "Lesson 4: My Best Friend Jane",
        type: "vocab",
        content: {
          songText: "Email from Jane to Mona:\n\nDear Mona, How are you doing? I’m sorry I haven’t written to you for a long time, but we have examinations on Monday and I’m studying day and night. I’m feeling very tired and worried about the exams at the moment. I’m not sleeping or eating much because I’m so busy! I’m also feeling upset because my mother said I‘m not getting enough fresh air and healthy food. She says I should visit my grandparents at their farm for two weeks. My grandparents also really want me to come. I love my grandparents but I would prefer to spend the holidays at summer camp with my friends. After all this studying I just want to have fun. I’m worried though that my grandparents will be sad if I don’t go to stay with them. What do you think I should do? I can’t wait to hear from you, Jane"
        }
      },
      {
        id: 5,
        title: "Lesson 5: Plans with Friends",
        type: "conversation",
        content: {
          dialogue: [
            { speaker: "Ehlam", text: "What are you doing on the second day of Eid, Samah?", voice: "Kore" },
            { speaker: "Samah", text: "Nothing much. Are you planning something special?", voice: "Zephyr" },
            { speaker: "Ehlam", text: "Yes! All our friends are meeting at my house for a party. Would you like to come?", voice: "Kore" }
          ],
          songText: "SMS Dialogue:\n\nEhlam: Hi, Samah. It’s Ehlam. I’m sending you a text message.\nSamah: Hi Ehlam. I just got your message. How are you?\nEhlam: I’m great! What are you doing on the second day of Eid?\nSamah: Nothing much. Are you planning something special?\nEhlam: Yes, all our friends are meeting at my house for a party and dinner. Would you like to come?\nSamah: Yes, I’d love to. Can I bring my friend Rihab with me?\nEhlam: Yes, you’re all welcome.\nSamah: What shall I bring with me?\nEhlam: Nothing. It’s OK, I’m preparing everything. See you soon.\nSamah: Bye. See you soon, Inshallah."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Winning the Match",
        type: "vocab",
        content: {
          songText: "Our school football team plays in local competitions. The next game is really important because it decides who wins the league. The football coach sat with his team and said that Wail is going to be the next team captain because he is a winner and always works hard. Wail told the team that they all have to play with determination, pass the ball, and support each other to win the match."
        }
      },
      {
        id: 7,
        title: "Lesson 7: Friends for Life",
        type: "vocab",
        content: {
          songText: "Email from Omnia to Sara:\n\nMarwa and I have lived near to each other since childhood. Both our parents moved to the same town. We have been great friends for a long time, even though we come from different parts of Sudan. I still remember when we first met at school. We have been friends ever since we first met.\n\nMarwa is very smart and she’s very kind as well. We always supported each other at school. We shared our school books and helped each other with our homework. During the holidays we visited each other. We even went on a tour with our parents. We went to her hometown and then to mine. After high school, we both went to the same university.\n\nThe big surprise today is that my brother and Marwa are getting married! They decided to get married after my brother returned from Saudi Arabia. Marwa is very happy and so is her family. I’m so excited. Soon my best friend will become my sister!"
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Childhood Friends",
        type: "vocab",
        content: {
          songText: "Hi, my name is Adam and I am 19. This is a picture of me and my friend Ali. Our hometown is Buram, a town in South Darfur state. We were friends at basic school. We were born on the same day and we were in the same class. We enjoyed doing the same things and we enjoyed playing the same games. We loved playing hide and seek. Football was our favourite game. Our coach said we were the best players. Sometimes we also helped to make repairs to houses to prepare for rains.\n\nI haven’t seen Ali for 6 years because his father got a job in Saudi Arabia. Lots of other things have changed since then. I’ve finished school now, I’ve learned to speak English, and I’ve even learned to drive. But I still miss him. Two years ago, I got a mobile phone and we started sending messages to each other. Last week, he told me that he’s coming back to Buram during Eid El Fitr! I am going to prepare a party for him. I’m so excited that we can be together again like the old days."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Going Places",
    arabicTitle: "زيارة الأماكن والترحال",
    color: "bg-blue-50 text-blue-950 border-blue-400",
    icon: "✈️",
    words: [
      { id: "w3-1", word: "Capital", arabic: "عاصمة", image: "🏛️", example: "Khartoum is the capital city where the Blue and White Niles meet.", soundText: "Khartoum is the capital city where the Blue and White Niles meet.", unit: 3 },
      { id: "w3-2", word: "Climb", arabic: "يتسلق", image: "🧗", example: "Ray had determination to climb to the top of Mount Everest.", soundText: "Ray had determination to climb to the top of Mount Everest.", unit: 3 },
      { id: "w3-3", word: "Sickness", arabic: "مرض", image: "🤢", example: "Ibn Battuta suffered from sea sickness while sailing the Red Sea.", soundText: "Ibn Battuta suffered from sea sickness while sailing the Red Sea.", unit: 3 },
      { id: "w3-4", word: "Skyscraper", arabic: "ناطحة سحاب", image: "🏢", example: "Shanghai is famous for its high skyscrapers and fast Maglev train.", soundText: "Shanghai is famous for its high skyscrapers and fast Maglev train.", unit: 3 },
      { id: "w3-5", word: "Caravan", arabic: "قافلة", image: "🐪", example: "Caravans carried gold and feathers on the Forty Days Road.", soundText: "Caravans carried gold and feathers on the Forty Days Road.", unit: 3 },
      { id: "w3-6", word: "Wrestling", arabic: "مصارعة", image: "🤼", example: "El Dalang is famous for its traditional wrestling matches.", soundText: "El Dalang is famous for its traditional wrestling matches.", unit: 3 }
    ],
    lessons: [
      {
        id: 1,
        title: "Lesson 1: The World around Us",
        type: "vocab",
        content: {
          songText: "Sudan is a very large country situated in Northeast Africa. It has seven neighbors: Egypt, Libya, Chad, the Central African Republic, South Sudan, Ethiopia, and Eritrea. The capital of Sudan is Khartoum, where the Blue Nile and White Nile meet. Sudan is one of the largest countries on the African continent, famous for its rich geographical diversity, including desert sands in the north, savannas in the central states, and beautiful mountains in the west and south."
        }
      },
      {
        id: 2,
        title: "Lesson 2: Climbing Mount Everest",
        type: "vocab",
        content: {
          songText: "Blog post:\n\nI’ve attempted to climb Mount Everest twice. The first time I didn’t make it to the top. However, I learned the second time that having a strong mind with determination was just as important as having a strong body. I kept going until I reached the top – even though my body was telling me to stop. The weather was good on my first climb, but during the second climb, there was a terrible storm. We had to wait for two days. Luckily, the storm passed quickly. The first time, I got sick and felt exhausted. Many climbers feel ill when they are high up on the mountain. I had to go back down the mountain and rest. It’s amazing when you finally reach the top. After years of training, my dream had come true. Finally, I was standing on top of the world!"
        }
      },
      {
        id: 3,
        title: "Lesson 3: The Journeys of Ibn Battuta",
        type: "vocab",
        content: {
          songText: "Ibn Battuta was a famous traveller. During his life, he covered about 121,000 kilometres and visited many countries. Ibn Battuta began travelling when he was 20 years old. He left his home country, Morocco, in 1325 to go on Hajj, in Makkah.\n\nAfter the Hajj, Ibn Battuta stayed in Makkah and studied there for about a year. Then he left and started another adventure. From Makkah, he went to Jeddah on the Red Sea coast where he and some people took a small boat. This was Ibn Battuta’s first time on a boat and he didn’t like it. They were travelling on a calm sea, but then the winds changed. There was a storm and big waves flooded the boat. Everyone was feeling very sick during the rest of the journey. When the ship finally reached the shore, Ibn Battuta was able to rent camels and continue by land to West Africa. After that, he had many more adventures. He joined trading ships and travelled to Asian countries such as India and China. In India he found work and then got married to an Indian woman."
        }
      },
      {
        id: 4,
        title: "Lesson 4: Shanghai!",
        type: "vocab",
        content: {
          songText: "Shanghai is close to the East China Sea and is one of the most crowded and modern cities in China. It is famous for its massive skyscrapers like the Shanghai World Financial Centre (SWFC). It also features the famous Maglev Train, which is one of the fastest trains in the world. Visitors are always amazed by the contrast between busy, futuristic streets and quiet, green public parks inside the city."
        }
      },
      {
        id: 5,
        title: "Lesson 5: Early Sudanese Traders",
        type: "vocab",
        content: {
          songText: "A caravan is a group of people who travel together. In the past, traders carried goods on camels. These days, traders use trucks to transport the goods they want to sell. Temperatures were cooler in the winter months, making travelling easier. Each caravan had a leader who decided the goods to take and planned the journey. Caravans also included a muezzin, guards and people to load the camels.\n\nOne of the most important trade journeys in Sudan was called the Forty Days Road (Darb al-Arba'in). It began in El Fashir, Darfur and ended in Asyut, Egypt, where people wanted to buy the Sudanese goods. The caravan would bring goods such as beautiful feathers, gold, dates and copper to be sold at the markets there.\n\nOn the return journey, the caravan brought cotton, which the people in Darfur wanted. The Nuba and the Beja also sold gold, dates and leather to the caravan. They got sugar, cotton and other goods in return.\n\nEven though the Sultans of Darfur cared for the road, caravans faced many difficulties on the long journey. Sometimes there was not enough water for the men and camels, which could lead to problems. Sometimes dangerous bandits attacked the caravans to take the goods."
        }
      },
      {
        id: 6,
        title: "Lesson 6: Let’s Visit the Nuba Mountains!",
        type: "vocab",
        content: {
          songText: "The Nuba Mountains in South Kordofan are one of the most beautiful places in Sudan. With Nuba Tours, you can visit South Kordofan and learn about its places, people and traditions. Choose from these amazing travel options:\n\n1. Kadugli: The capital of South Kordofan. See the Kambala dance at the local festival and visit the Miri dam. Price: 400 SDG\n\n2. El Dalang: Watch a traditional wrestling match. Bring a camera and take wonderful photos! Price: 400 SDG\n\n3. Nuba Mountains: Explore colourful villages and see the spring on the top of the mountain. Camp for two nights. Price: 650 SDG\n\n4. Abu Jubayhah: Green and beautiful. Enjoy the fresh taste of delicious mangoes with us!"
        }
      },
      {
        id: 7,
        title: "Lesson 7: A Trip to Kenya!",
        type: "vocab",
        content: {
          songText: "Many people visit Kenya because they want to experience the rich African wildlife and landscape. Popular tourist reasons include: taking photos of the Great Rift Valley, travelling in a hot-air balloon, seeing big animals in the Maasai Mara Park (like lions, elephants and giraffes), seeing pink flamingos at Lake Nakuru, and learning about the traditional Maasai people."
        }
      },
      {
        id: 8,
        title: "Lesson 8: Revision: Travelling to Sudan",
        type: "vocab",
        content: {
          songText: "Email from Richard:\n\nDear Zakaria, Hello to you and your family. My name is Richard. Kate and I are very excited that we are coming to Sudan with the Sudan Volunteer Programme! We are going to help teach English at schools. We can’t wait and we are sure we will enjoy ourselves. Kate is very happy to have a chance like this in Africa. I am determined to learn some Arabic while I’m there too! Tim McVicar, the manager of the programme in Khartoum, said we can choose any state to work in. He gave me your email address and said you could give us information about your state. Could you please send us some information about your state? We want to know about the location, the weather and the places we can go on the weekend. We are very interested in learning about Sudanese life and traditions. We would be very thankful for any information you can give us, Best regards, Richard"
        }
      }
    ]
  }
];
