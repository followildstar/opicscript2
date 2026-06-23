const STORAGE_KEY = 'opic-script-trainer-v3';

const DEFAULT_SCRIPT_DATA = [
  {
    "set": "Set 01",
    "number": "Q1",
    "question": "Please introduce yourself.",
    "category": "자기소개",
    "flow": [
      "Name and job",
      "Creative hobbies",
      "Healthy habits and growth",
      "English goal",
      "Current life attitude"
    ],
    "keywords": "web designer / drawing / piano / personal growth / express my thoughts",
    "answer": "Hi, my name is Amy.\n\nI work as a web designer and publisher in Korea.\n\nI enjoy creative hobbies like drawing and playing the piano.\n\nRecently, I’ve been trying to build healthier habits and focus more on personal growth.\n\nI also study English because I want to express my thoughts more naturally.\n\nThese days, I’m trying to enjoy simple things in life and take care of myself more.",
    "similar": [
      "Tell me about yourself.",
      "What kind of person are you?",
      "Tell me about your daily life.",
      "What are your hobbies?",
      "What are you interested in these days?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q2",
    "question": "Tell me about your hobbies.",
    "category": "취미",
    "flow": [
      "Drawing and piano",
      "Drawing expresses myself",
      "Stopped because of perfectionism",
      "Restarted with process mindset",
      "Piano helps me relax"
    ],
    "keywords": "drawing / piano / perfection / process / Turkish March",
    "answer": "I enjoy drawing and playing the piano.\n\nDrawing is something I really love because it helps me express myself.\n\nActually, I stopped drawing for a while because I wanted everything to be perfect.\n\nBut recently, I started again and realized enjoying the process is more important.\n\nI also enjoy piano practice.\n\nLately, I’ve been practicing the Turkish March.\n\nPlaying piano helps me relax and makes me feel proud of myself.",
    "similar": [
      "Tell me about your favorite hobby.",
      "What do you usually do in your free time?",
      "Describe something you enjoy doing.",
      "Tell me about a hobby you recently started or restarted.",
      "What helps you relax?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q3",
    "question": "What do you usually do in your free time?",
    "category": "취미",
    "flow": [
      "Quiet activities",
      "Drawing, piano, workout, yoga",
      "Writing and organizing thoughts",
      "Recharge",
      "Small routines feel meaningful"
    ],
    "keywords": "quiet activities / recharge / meaningful routines",
    "answer": "In my free time, I usually do quiet activities.\n\nI enjoy drawing, practicing piano, working out, or going to yoga classes.\n\nSometimes I also spend time organizing my thoughts or writing.\n\nI like peaceful activities because they help me recharge.\n\nI think small routines make my daily life feel meaningful.",
    "similar": [
      "What do you usually do on weekends?",
      "How do you spend your free time?",
      "What do you do when you want to relax?",
      "Tell me about your hobbies.",
      "What do you do after work?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q4",
    "question": "Tell me about your exercise routine.",
    "category": "일상",
    "flow": [
      "Regular exercise",
      "Yoga and simple workouts",
      "Body and mind",
      "Proud and energetic",
      "Consistency over perfection"
    ],
    "keywords": "regularly / yoga / mental health / consistent",
    "answer": "I try to exercise regularly.\n\nThese days, I mostly do yoga and simple workouts.\n\nI learned that exercise is really important for both physical and mental health.\n\nAfter working out, I feel proud of myself and more energetic.\n\nIt also helps me focus better during the day.\n\nRecently, I’ve been trying to stay consistent instead of being perfect.",
    "similar": [
      "What do you do to stay healthy?",
      "Tell me about your workout routine.",
      "How often do you exercise?",
      "Describe a healthy habit you have.",
      "What helps you manage stress?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q5",
    "question": "When do you usually work out?",
    "category": "일상",
    "flow": [
      "Prefer morning",
      "Difficult at first",
      "Morning is consistent",
      "Evening changes easily",
      "Productive and confident"
    ],
    "keywords": "morning workout / consistent / evening variables / confidence",
    "answer": "I usually prefer morning workouts.\n\nAt first, it was difficult because I felt tired.\n\nBut later, I realized mornings are more consistent for me.\n\nIn the evening, plans can easily change or I can feel too tired.\n\nMorning exercise helps me feel more productive and confident throughout the day.",
    "similar": [
      "What is your morning routine?",
      "Why do you like mornings?",
      "When are you most productive?",
      "Tell me about a recent change in your routine.",
      "Why do you prefer morning exercise?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q6",
    "question": "Tell me about a recent change in your life.",
    "category": "마인드셋",
    "flow": [
      "Mindset changed",
      "Perfection focus before",
      "Stopped what I loved",
      "Now consistency and process",
      "Happier and less stressed"
    ],
    "keywords": "mindset / perfection / consistency / process",
    "answer": "Recently, my mindset changed a lot.\n\nBefore, I focused too much on perfection.\n\nBecause of that, I sometimes stopped doing things I actually loved.\n\nBut now, I focus more on consistency and enjoying the process.\n\nI think this mindset made me happier and less stressed.",
    "similar": [
      "How have you changed recently?",
      "Tell me about a change you made.",
      "What changed in your mindset?",
      "Describe a recent personal growth experience.",
      "Tell me about something important you realized."
    ]
  },
  {
    "set": "Set 01",
    "number": "Q7",
    "question": "Tell me about something you recently learned.",
    "category": "마인드셋",
    "flow": [
      "Learned about myself",
      "No need to be perfect",
      "Drawing and others’ opinions",
      "Draw what I like",
      "Creative and confident"
    ],
    "keywords": "not perfect / what I like / creative confidence",
    "answer": "Recently, I learned something important about myself.\n\nI realized I don’t need to be perfect to enjoy something.\n\nFor example, with drawing, I used to worry too much about what other people thought.\n\nBut now, I just draw what I truly like.\n\nThat change made me feel more creative and confident.",
    "similar": [
      "Tell me about an important lesson you learned.",
      "What did you learn about yourself recently?",
      "Describe something meaningful you realized.",
      "Tell me about a personal discovery.",
      "What helped you grow recently?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q8",
    "question": "What do you do when you feel stressed?",
    "category": "마인드셋",
    "flow": [
      "Take care of myself",
      "Workout, piano, walk",
      "Write thoughts",
      "Do not avoid emotions",
      "Process in healthy ways"
    ],
    "keywords": "stress / take care / process feelings / calmer",
    "answer": "When I feel stressed, I try to take care of myself.\n\nUsually, I work out, play piano, or go for a walk.\n\nSometimes I write down my thoughts too.\n\nI learned that avoiding emotions doesn’t really help.\n\nInstead, I try to process my feelings in healthy ways.\n\nAfter that, I usually feel calmer.",
    "similar": [
      "How do you manage stress?",
      "What helps you relax?",
      "What do you do when you feel overwhelmed?",
      "Tell me about your stress relief habits.",
      "How do you take care of yourself?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q9",
    "question": "Describe your daily routine.",
    "category": "일상",
    "flow": [
      "Simple weekdays",
      "Wake up and work",
      "After work habits",
      "Workout, piano, English, drawing",
      "Routine gives stability"
    ],
    "keywords": "weekday / after work / healthy habits / stable",
    "answer": "My weekdays are pretty simple.\n\nI usually wake up, get ready, and go to work.\n\nAfter work, I try to focus on healthy habits.\n\nI work out, practice piano, study English, or draw.\n\nBefore sleeping, I sometimes listen to English audio or review what I studied.\n\nI like routines because they make me feel stable.",
    "similar": [
      "Tell me about your weekday routine.",
      "What does a typical day look like for you?",
      "What do you usually do after work?",
      "Describe your lifestyle.",
      "What habits are important to you?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q10",
    "question": "What do you usually do on weekends?",
    "category": "일상",
    "flow": [
      "Relax and recharge",
      "Workout, piano, drawing",
      "Library or quiet cafe",
      "Slow mornings",
      "Time with my cat"
    ],
    "keywords": "weekend / recharge / slow morning / cat",
    "answer": "On weekends, I try to relax and recharge.\n\nI usually work out more, practice piano, and spend time drawing.\n\nSometimes I go to a library or a quiet café.\n\nI enjoy slow mornings on weekends because they make me feel peaceful.\n\nI also like spending quiet time with my cat at home.",
    "similar": [
      "How do you spend your weekends?",
      "Tell me about your free time.",
      "Describe a relaxing day.",
      "What do you usually do when you are off work?",
      "What do you enjoy doing on weekends?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q11",
    "question": "Tell me about a memorable experience recently.",
    "category": "경험",
    "flow": [
      "Yoga experience",
      "Saw someone’s hand",
      "Looked at my hands",
      "Felt grateful for health",
      "Appreciate what I have"
    ],
    "keywords": "yoga / hands / health / gratitude",
    "answer": "Recently, I had a meaningful experience during yoga.\n\nI saw someone with a disability and suddenly looked at my own hands.\n\nAt that moment, I felt grateful for being healthy.\n\nIt made me realize I should appreciate what I already have.\n\nSince then, I’ve been trying to live with more gratitude.",
    "similar": [
      "Describe a meaningful experience.",
      "Tell me about a moment that changed your perspective.",
      "Tell me about a recent realization.",
      "Describe a memorable moment.",
      "What made you feel grateful recently?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q12",
    "question": "Tell me about a hobby you stopped and restarted.",
    "category": "취미",
    "flow": [
      "Drawing restarted",
      "Stopped due to perfection",
      "Cared about opinions",
      "Started again",
      "Draw for enjoyment"
    ],
    "keywords": "drawing / stopped / restarted / enjoy / not impress",
    "answer": "One hobby I restarted is drawing.\n\nI stopped for a while because I worried too much about doing it perfectly.\n\nI also cared too much about what other people thought.\n\nBut recently, I started again.\n\nNow, I draw what I truly enjoy instead of trying to impress people.\n\nIt feels much more fun and natural now.",
    "similar": [
      "Tell me about something you started again.",
      "Describe a hobby that is important to you.",
      "Why did you stop your hobby?",
      "Tell me about something you changed recently.",
      "Describe something you enjoy these days."
    ]
  },
  {
    "set": "Set 01",
    "number": "Q13",
    "question": "What makes you happy these days?",
    "category": "마인드셋",
    "flow": [
      "Simple things",
      "Workout, piano, drawing, English",
      "Life I dreamed of",
      "Gratitude",
      "Enjoy present"
    ],
    "keywords": "simple happiness / dreamed life / present",
    "answer": "Simple things make me happy these days.\n\nWorking out, playing piano, drawing, and studying English.\n\nRecently, I realized I’m already living the life I once dreamed about.\n\nThat made me feel much more grateful.\n\nNow, I try to enjoy the present instead of always chasing the next goal.",
    "similar": [
      "What do you enjoy these days?",
      "What makes your life meaningful?",
      "What are you grateful for these days?",
      "Tell me about a recent happy moment.",
      "What gives you energy these days?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q14",
    "question": "What are your future goals?",
    "category": "마인드셋",
    "flow": [
      "Healthier and creative",
      "Improve English and creative skills",
      "Drawing and piano",
      "Meaningful balanced life",
      "Enjoy process and grow"
    ],
    "keywords": "future goal / healthier / creative / balanced",
    "answer": "My goal is to become healthier and more creative.\n\nI want to keep improving my English and creative skills.\n\nI also want to continue drawing and playing piano.\n\nMost importantly, I want to live a meaningful and balanced life.\n\nI want to become someone who enjoys the process and keeps growing.",
    "similar": [
      "Tell me about your future plans.",
      "What do you want to achieve?",
      "What are your personal goals?",
      "What kind of life do you want in the future?",
      "What is important to you?"
    ]
  },
  {
    "set": "Set 01",
    "number": "Q15",
    "question": "How have you changed over time?",
    "category": "마인드셋",
    "flow": [
      "Changed a lot",
      "Perfection and opinions before",
      "Stress",
      "Focus on myself",
      "Consistency over perfection"
    ],
    "keywords": "changed / perfection / opinions / calmer / confident",
    "answer": "I think I changed a lot over time.\n\nBefore, I cared too much about perfection and other people’s opinions.\n\nBecause of that, I often felt stressed.\n\nBut now, I try to focus more on myself and what truly matters.\n\nI learned that consistency is more important than perfection.\n\nI think I’m becoming calmer and more confident.",
    "similar": [
      "Describe how you changed.",
      "What kind of person were you before?",
      "Tell me about personal growth.",
      "How is your life different now?",
      "Tell me about an important change in your life."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q1",
    "question": "Tell me about a difficult time in your life and how you handled it.",
    "category": "경험",
    "flow": [
      "Perfectionism was difficult",
      "Stopped what I loved",
      "Drawing example",
      "Fear of disappointment",
      "Changed mindset",
      "Process and starting"
    ],
    "keywords": "difficult time / perfectionism / drawing / process",
    "answer": "One difficult thing for me was dealing with perfectionism.\n\nI used to stop doing things I loved because I wanted everything to be perfect.\n\nFor example, I stopped drawing for a long time.\n\nI was afraid of disappointing myself or not being good enough.\n\nBut recently, I changed my mindset.\n\nNow, I focus more on enjoying the process and just starting.\n\nThat change helped me feel happier and less stressed.",
    "similar": [
      "Tell me about a challenge you faced.",
      "Describe a difficult experience.",
      "Tell me about something stressful in your life.",
      "How did you overcome a problem?",
      "Tell me about a time you changed yourself."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q2",
    "question": "Tell me about something you recently realized.",
    "category": "마인드셋",
    "flow": [
      "Realized happiness",
      "Compared myself before",
      "Felt behind",
      "Workout changed thought",
      "Dreamed life now",
      "Grateful"
    ],
    "keywords": "realization / comparison / workout / dreamed life",
    "answer": "Recently, I realized something important about happiness.\n\nI used to compare myself to other people a lot.\n\nSometimes I felt behind in life.\n\nBut one day while working out, I suddenly realized something.\n\nI’m already living the life I once dreamed about.\n\nI have meaningful work, hobbies I enjoy, and healthier habits.\n\nThat realization made me feel much more grateful.",
    "similar": [
      "Tell me about an important realization.",
      "What made you feel grateful recently?",
      "Describe something meaningful you learned.",
      "Tell me about a recent change in perspective.",
      "What changed your mindset?"
    ]
  },
  {
    "set": "Set 02",
    "number": "Q3",
    "question": "Describe a memorable place you often go to.",
    "category": "장소",
    "flow": [
      "Yoga studio",
      "Relax and clear mind",
      "Peaceful atmosphere",
      "Feel calmer after",
      "New life ideas",
      "Mental reset"
    ],
    "keywords": "yoga studio / peaceful / reset mentally",
    "answer": "One place I often go to is my yoga studio.\n\nI like it because it helps me relax and clear my mind.\n\nUsually, the atmosphere is very peaceful.\n\nAfter yoga, I feel calmer and healthier.\n\nSometimes, I even get new ideas about my life during class.\n\nThat place became important to me because it helps me reset mentally.",
    "similar": [
      "Tell me about a place you often visit.",
      "Describe a place where you relax.",
      "Tell me about your yoga studio.",
      "What helps you manage stress?",
      "Describe a meaningful place."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q4",
    "question": "Tell me about a time you changed your opinion.",
    "category": "마인드셋",
    "flow": [
      "Changed opinion about exercise",
      "Thought morning was not for me",
      "Tired before",
      "Tried again",
      "Morning better for consistency",
      "Consistency over timing"
    ],
    "keywords": "changed opinion / morning workout / consistency",
    "answer": "I changed my opinion about exercise.\n\nBefore, I thought morning workouts were not for me.\n\nI felt tired and thought it didn’t fit my lifestyle.\n\nBut after trying again, I realized mornings are actually better for consistency.\n\nIn the evening, I often get tired or busy.\n\nMorning workouts helped me feel more energetic and productive.\n\nSo now, I think consistency matters more than perfect timing.",
    "similar": [
      "Tell me about a time you changed your mind.",
      "Describe a change in your routine.",
      "What habit changed your life?",
      "Tell me about something that surprised you.",
      "What changed your perspective?"
    ]
  },
  {
    "set": "Set 02",
    "number": "Q5",
    "question": "Tell me about something you enjoy doing alone.",
    "category": "취미",
    "flow": [
      "Enjoy alone time",
      "Draw, piano, walk",
      "Organize thoughts",
      "Creative activities calm me",
      "Discover ideas",
      "Quiet time matters"
    ],
    "keywords": "alone time / quiet / organize thoughts / creative",
    "answer": "I enjoy spending time alone a lot.\n\nUsually, I draw, practice piano, or go for a walk.\n\nI think being alone helps me organize my thoughts.\n\nAlso, creative activities make me feel calm.\n\nSometimes I even discover new ideas about myself.\n\nFor me, quiet time is very important.",
    "similar": [
      "How do you spend time alone?",
      "What do you usually do in your free time?",
      "What helps you relax?",
      "Describe an activity you enjoy.",
      "What do you do when you need quiet time?"
    ]
  },
  {
    "set": "Set 02",
    "number": "Q6",
    "question": "Describe a recent problem and how you solved it.",
    "category": "경험",
    "flow": [
      "Workout routine problem",
      "Morning exercise first",
      "Tired all day",
      "Needed adjustment",
      "Switched routine",
      "Learned flexibility"
    ],
    "keywords": "problem / routine / adjust / flexibility",
    "answer": "Recently, I struggled with my workout routine.\n\nAt first, I tried exercising in the morning.\n\nBut after a while, I realized I felt tired all day.\n\nI thought something was wrong with me.\n\nLater, I realized I simply needed to adjust my routine.\n\nSo I switched to evening workouts for a while.\n\nThat experience taught me that flexibility is important.",
    "similar": [
      "Tell me about a recent challenge.",
      "Describe a problem you had recently.",
      "Tell me about a time something did not go as planned.",
      "How did you solve a problem?",
      "Tell me about a change you made."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q7",
    "question": "Tell me about someone important in your life.",
    "category": "경험",
    "flow": [
      "Parents are important",
      "Appreciate them more",
      "Health and life realization",
      "Gratitude",
      "Express love more",
      "Family meaning"
    ],
    "keywords": "parents / gratitude / express love / family",
    "answer": "My parents are very important to me.\n\nAs I got older, I started appreciating them more.\n\nRecently, I realized how grateful I am for my health and life.\n\nThat made me think more about my parents too.\n\nI want to express my love and gratitude more often.\n\nI think family becomes more meaningful as time passes.",
    "similar": [
      "Who is important to you?",
      "Tell me about your family.",
      "Describe someone meaningful in your life.",
      "Who do you feel grateful for?",
      "Tell me about someone who influenced you."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q8",
    "question": "Tell me about something you are trying to improve.",
    "category": "영어공부",
    "flow": [
      "Improving English",
      "Speak naturally and confidently",
      "Practice every day",
      "Listen, repeat, record",
      "Consistency over talent",
      "Feel improvement"
    ],
    "keywords": "English / natural / repeat / record / consistency",
    "answer": "These days, I’m trying to improve my English.\n\nI want to speak more naturally and confidently.\n\nSo I practice every day.\n\nI listen to audio, repeat sentences, and record my voice.\n\nI think consistency is more important than talent.\n\nLittle by little, I feel myself improving.",
    "similar": [
      "What are you learning these days?",
      "Tell me about a skill you want to improve.",
      "What do you do for self-improvement?",
      "Tell me about a recent goal.",
      "What is something challenging for you?"
    ]
  },
  {
    "set": "Set 02",
    "number": "Q9",
    "question": "Tell me about a healthy habit you have.",
    "category": "일상",
    "flow": [
      "Regular exercise",
      "Body and mind",
      "Confidence and focus",
      "Manage stress",
      "Stay consistent",
      "Habits change life"
    ],
    "keywords": "healthy habit / exercise / stress / consistency",
    "answer": "One healthy habit I’m trying to keep is regular exercise.\n\nI realized exercise affects both my body and mind.\n\nAfter working out, I feel more confident and focused.\n\nIt also helps me manage stress better.\n\nEven when I don’t feel motivated, I try to stay consistent.\n\nI think healthy habits slowly change your life.",
    "similar": [
      "What do you do to stay healthy?",
      "Tell me about your exercise routine.",
      "Describe a healthy habit.",
      "What helps you manage stress?",
      "Tell me about a good habit you have."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q10",
    "question": "Tell me about something that changed your perspective.",
    "category": "마인드셋",
    "flow": [
      "Drawing changed perspective",
      "Thought style was wrong",
      "Softer, prettier drawings",
      "Thought lack of skill",
      "Realized interpretation",
      "More confidence"
    ],
    "keywords": "drawing / perspective / interpretation / confidence",
    "answer": "Drawing changed my perspective recently.\n\nI used to think my drawing style was wrong.\n\nBecause my drawings looked softer or prettier than real life.\n\nI thought I lacked skill.\n\nBut later, I realized it was actually my own artistic interpretation.\n\nThat helped me feel more confident.\n\nNow, I enjoy drawing much more.",
    "similar": [
      "Tell me about a realization you had.",
      "Describe something that changed the way you think.",
      "Tell me about a moment of growth.",
      "What helped you become more confident?",
      "Tell me about something meaningful you learned."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q11",
    "question": "Describe a recent activity you enjoyed.",
    "category": "취미",
    "flow": [
      "Piano practice",
      "Rented grand piano room",
      "Compared myself at first",
      "Realized I work hard too",
      "Piano recharges me",
      "Meaningful experience"
    ],
    "keywords": "piano / grand piano / comparison / recharge",
    "answer": "Recently, I enjoyed practicing piano.\n\nI rented a grand piano room and spent time practicing.\n\nAt first, I felt a little awkward because I compared myself to better players.\n\nBut while playing, I realized something.\n\nI’ve been working hard too.\n\nPiano helps me recharge after a long day.\n\nSo the experience became very meaningful.",
    "similar": [
      "Tell me about something fun you did recently.",
      "Describe a hobby you enjoy.",
      "Tell me about a meaningful experience.",
      "What do you enjoy doing in your free time?",
      "Describe a memorable activity."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q12",
    "question": "Tell me about a personal goal you have.",
    "category": "마인드셋",
    "flow": [
      "Healthier and balanced",
      "Body and mind",
      "Regular workout and routines",
      "Creative hobbies",
      "Growth means happier little by little"
    ],
    "keywords": "personal goal / balanced / body and mind / growth",
    "answer": "One of my personal goals is becoming healthier and more balanced.\n\nI want to take care of both my body and mind.\n\nSo I try to work out regularly and build healthy routines.\n\nI also want to keep improving my creative hobbies.\n\nFor me, growth means becoming healthier and happier little by little.",
    "similar": [
      "Tell me about your future goals.",
      "What kind of life do you want?",
      "What are you trying to improve?",
      "Describe something important to you.",
      "What motivates you these days?"
    ]
  },
  {
    "set": "Set 02",
    "number": "Q13",
    "question": "Describe something you learned from experience.",
    "category": "마인드셋",
    "flow": [
      "Planning is not enough",
      "Too much thinking before",
      "Action is important",
      "Start before ready",
      "Reality feels real",
      "Changed approach"
    ],
    "keywords": "planning / action / start / before ready",
    "answer": "I learned that planning alone is not enough.\n\nBefore, I spent too much time thinking and planning.\n\nBut recently, I realized action is more important.\n\nEven if I’m not fully ready, I try to start anyway.\n\nOnce I actually do something, it feels more real.\n\nThat mindset changed the way I approach goals.",
    "similar": [
      "Tell me about an important lesson you learned.",
      "Describe something experience taught you.",
      "Tell me about a recent realization.",
      "What changed the way you think?",
      "Tell me about personal growth."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q14",
    "question": "Tell me about a time you felt proud of yourself.",
    "category": "경험",
    "flow": [
      "Proud after exercise consistency",
      "Difficult at first",
      "Positive changes",
      "More energy and confidence",
      "Trusted myself",
      "Proud feeling"
    ],
    "keywords": "proud / exercise / consistency / self-trust",
    "answer": "Recently, I felt proud after staying consistent with exercise.\n\nAt first, it was really difficult.\n\nBut after a few weeks, I noticed positive changes.\n\nI had more energy and felt more confident.\n\nMost importantly, I started trusting myself more.\n\nThat feeling made me proud.",
    "similar": [
      "Describe something you achieved.",
      "Tell me about a proud moment.",
      "What made you feel confident recently?",
      "Tell me about a personal success.",
      "Describe a meaningful accomplishment."
    ]
  },
  {
    "set": "Set 02",
    "number": "Q15",
    "question": "What kind of person do you want to become?",
    "category": "마인드셋",
    "flow": [
      "Calm, healthy, creative",
      "Express through art",
      "Speak thoughtfully",
      "Words have meaning",
      "Enjoy life and grow"
    ],
    "keywords": "calm / healthy / creative / thoughtful / grow",
    "answer": "I want to become someone calm, healthy, and creative.\n\nI want to express myself through drawing, piano, and writing.\n\nI also want to be someone who speaks thoughtfully.\n\nInstead of talking too much, I want my words to have meaning.\n\nMost importantly, I want to enjoy life while continuing to grow.",
    "similar": [
      "What kind of future do you want?",
      "Tell me about your values.",
      "What is important to you in life?",
      "What are your personal goals?",
      "Describe the person you want to become."
    ]
  },
  {
    "set": "Set 03",
    "number": "23",
    "question": "Yoga studio I often go to",
    "category": "장소",
    "flow": [
      "Yoga studio near my house",
      "Quiet and peaceful atmosphere",
      "Clear my mind after work",
      "Changed exercise because of back pain",
      "Listen to my body",
      "Special recharge place"
    ],
    "keywords": "yoga studio / peaceful / back pain / listen to my body / recharge",
    "answer": "I usually go to a yoga studio near my house. I have been going there for quite a while, and it has become an important part of my weekly routine.\n\nThe studio is quiet and peaceful. The lights are soft, and there is calm music playing in the background. Most people there are very focused on themselves, so the atmosphere feels comfortable and relaxing.\n\nOne reason I like this place is that I can clear my mind there. I work as a designer, so I spend a lot of time in front of a computer. Sometimes I feel mentally tired after work, but yoga helps me feel calm again.\n\nRecently, I changed the way I exercise because I had some back pain. So now I try to listen to my body more carefully and avoid pushing myself too hard. Yoga has helped me become healthier both physically and mentally.\n\nThat’s why this yoga studio is special to me.",
    "similar": [
      "Tell me about a place you often visit.",
      "Describe a place where you exercise.",
      "What do you usually do to stay healthy?",
      "Tell me about a place that helps you relax.",
      "What do you do after work?"
    ]
  },
  {
    "set": "Set 03",
    "number": "24",
    "question": "My favorite piano practice room",
    "category": "장소",
    "flow": [
      "Favorite piano practice room",
      "Choose a grand piano room",
      "Quiet and simple space",
      "Piano expresses emotions",
      "Meaningful peaceful moment",
      "Important part of life"
    ],
    "keywords": "piano practice room / grand piano / quiet / emotions / peaceful",
    "answer": "One of my favorite places is a piano practice room that I often visit.\n\nI usually choose a room with a grand piano because I enjoy the sound and feeling of it. The room is quiet and simple, so I can focus completely on practicing.\n\nPiano is very important to me because it helps me express my emotions. When I play piano, I feel calm and focused. It almost feels like meditation.\n\nI still remember one meaningful moment. One day after work, I practiced piano for about an hour, and I suddenly felt very happy and peaceful. I realized that I really enjoy this kind of quiet time.\n\nThese days, piano practice has become one of the most important parts of my life.",
    "similar": [
      "Describe a place that is special to you.",
      "Tell me about your hobby.",
      "What do you usually do in your free time?",
      "Describe a place where you spend a lot of time.",
      "What helps you relax?"
    ]
  },
  {
    "set": "Set 03",
    "number": "25",
    "question": "A quiet café I enjoy",
    "category": "장소",
    "flow": [
      "Enjoy quiet cafés",
      "Need peaceful places after work",
      "Quiet atmosphere and soft music",
      "Write and think there",
      "Slow down and recharge"
    ],
    "keywords": "quiet café / peaceful / soft music / notebook / recharge",
    "answer": "I really enjoy going to quiet cafés.\n\nI usually prefer calm places because noisy places make me tired. Since I work in front of a computer all day, I sometimes need a peaceful place to relax and organize my thoughts.\n\nThere is a café I like because it has a quiet atmosphere and soft music. It is not crowded, and people usually spend time reading or working quietly.\n\nWhen I go there, I often write in my notebook, think about my future, or simply enjoy a cup of coffee.\n\nI especially like quiet cafés because they help me slow down and recharge myself.",
    "similar": [
      "Describe a café you enjoy going to.",
      "Tell me about a place where you relax.",
      "Why do you like quiet places?",
      "What do you usually do when you need a break?",
      "Describe a place you visit in your free time."
    ]
  },
  {
    "set": "Set 03",
    "number": "26",
    "question": "A library I often visit",
    "category": "장소",
    "flow": [
      "Library on weekends",
      "Part of weekend routine",
      "Quiet atmosphere helps me focus",
      "Borrow books about growth and creativity",
      "Discover new ideas"
    ],
    "keywords": "library / weekends / quiet / books / creativity / new ideas",
    "answer": "I often go to a library on weekends.\n\nGoing to the library has become part of my weekend routine. I usually stop by after exercising or spending some time outside.\n\nI enjoy the quiet atmosphere there. Everyone is focused on reading or studying, so it helps me concentrate as well.\n\nI often borrow books about writing, self-growth, or creativity because I want to become more creative in the future.\n\nSometimes I just walk around and look at different books without any plan. I think libraries are special because they help me discover new ideas.\n\nThat is one reason why I enjoy spending time there.",
    "similar": [
      "Tell me about a place you often visit.",
      "Describe a place where you study or read.",
      "What do you usually do on weekends?",
      "Tell me about something you do for self-improvement.",
      "Describe a quiet place you like."
    ]
  },
  {
    "set": "Set 03",
    "number": "27",
    "question": "My home is my recharge place",
    "category": "장소",
    "flow": [
      "Home is favorite place",
      "Relax after work",
      "Piano, English, drawing, resting",
      "Spend time with my cat",
      "Alone time organizes thoughts",
      "Recharge place"
    ],
    "keywords": "home / recharge / cat / alone time / simple routine",
    "answer": "My home is probably my favorite place because it helps me recharge.\n\nI spend most of my day working, so after work, I really enjoy being at home. I like quiet and comfortable spaces because they help me relax.\n\nAt home, I usually do simple things like practicing piano, studying English, drawing, or just resting. I also spend time with my cat, and that makes me feel relaxed.\n\nSometimes, I simply stay home without any special plans. I think being alone is important because it gives me time to organize my thoughts and emotions.\n\nThat is why my home feels like a recharge place to me.",
    "similar": [
      "Tell me about your home.",
      "Describe a place where you relax.",
      "What do you usually do at home?",
      "How do you spend time alone?",
      "What do you usually do on rainy days?"
    ]
  },
  {
    "set": "Set 03",
    "number": "28",
    "question": "My after-work routine",
    "category": "일상",
    "flow": [
      "Get home in the evening",
      "Do something healthy after work",
      "Exercise or yoga first",
      "Practice piano",
      "Study English and shadowing",
      "Routine balances body and mind"
    ],
    "keywords": "after work / exercise / yoga / piano / English / balance",
    "answer": "My after-work routine is very important to me.\n\nI usually get home around the evening after work. Since I spend a lot of time sitting in front of a computer, I try to do something healthy after work.\n\nUsually, I exercise first. Sometimes I go to yoga, and sometimes I do light workouts or stretching. After that, I practice piano for about thirty minutes to an hour.\n\nThese days, I also study English regularly. I listen to MP3 recordings, practice shadowing, and review my scripts.\n\nEven though I feel tired after work, I try to keep this routine because it makes me feel balanced and productive.\n\nHonestly, I think this routine helps me take care of both my body and mind.",
    "similar": [
      "What is your after-work routine?",
      "Tell me about your daily routine.",
      "What do you usually do after work?",
      "How do you spend your evenings?",
      "What do you do to stay healthy?"
    ]
  },
  {
    "set": "Set 03",
    "number": "29",
    "question": "What my weekends look like",
    "category": "일상",
    "flow": [
      "Calm and productive weekends",
      "Exercise, piano, drawing, library",
      "Enjoy slow mornings",
      "Quiet café and thoughts",
      "Borrow books",
      "Recharge for new week"
    ],
    "keywords": "weekends / slow mornings / library / quiet café / recharge",
    "answer": "My weekends are usually calm and productive.\n\nI try to spend my weekends doing things that I enjoy. For example, I exercise, practice piano, draw, and sometimes go to the library.\n\nI especially enjoy slow mornings on weekends because I do not have to rush. I can take my time and focus on myself.\n\nSometimes, I visit a quiet café or spend time organizing my thoughts. I also like borrowing books from the library because I enjoy learning new things.\n\nI think weekends are important because they help me recharge and prepare for a new week.",
    "similar": [
      "What do your weekends usually look like?",
      "What do you usually do in your free time?",
      "Tell me about your weekend routine.",
      "How do you spend your weekends?",
      "Describe a relaxing day."
    ]
  },
  {
    "set": "Set 03",
    "number": "30",
    "question": "Why mornings matter to me",
    "category": "일상",
    "flow": [
      "Mornings are important",
      "Best energy and focus",
      "Quiet morning time",
      "Study English and organize thoughts",
      "Good morning improves the day",
      "Make mornings meaningful"
    ],
    "keywords": "mornings / energy / focus / English / meaningful",
    "answer": "Mornings are very important to me.\n\nI think my energy and focus are the best in the morning, so I try to use that time wisely.\n\nUsually, I like spending quiet time in the morning. Sometimes I study English, organize my thoughts, or think about ideas for drawing and writing.\n\nI realized that when I start my morning well, the rest of the day goes much better. On the other hand, if I waste my morning, I sometimes feel unmotivated all day.\n\nThat is why I try to make my mornings calm and meaningful.",
    "similar": [
      "Why are mornings important to you?",
      "Tell me about your morning routine.",
      "What time of day do you like the most?",
      "When are you most productive?",
      "How do you usually start your day?"
    ]
  },
  {
    "set": "Set 03",
    "number": "31",
    "question": "How I study English these days",
    "category": "영어공부",
    "flow": [
      "Study English practically",
      "Focus on speaking",
      "Listen to MP3 and shadow",
      "Repeat expressions many times",
      "Use real-life scripts",
      "Practice little by little"
    ],
    "keywords": "English / speaking / MP3 / shadowing / real-life scripts / consistency",
    "answer": "These days, I study English in a very practical way.\n\nI mainly focus on speaking because I want to communicate naturally in English.\n\nUsually, I listen to MP3 recordings and practice shadowing. I repeat the same expressions many times because repetition helps me remember naturally.\n\nI also make my own English scripts based on my real life. Since the topics are about my daily routine and personal experiences, they feel more useful and easier to remember.\n\nHonestly, learning English is still challenging for me, but I try to practice a little every day instead of giving up.\n\nI think consistency is more important than studying too much at once.",
    "similar": [
      "How do you study English?",
      "Tell me about something you are learning these days.",
      "What do you do for self-improvement?",
      "How do you practice speaking English?",
      "Tell me about a recent habit you made."
    ]
  }
];

const CATEGORIES = ['자기소개', '취미', '일상', '경험', '마인드셋', '장소', '영어공부', '기타'];

const sampleScripts = DEFAULT_SCRIPT_DATA.map((item, index) => createScriptItem(item, index));

function createScriptItem(data, index = 0) {
  return {
    id: makeId(),
    set: data.set || '직접 추가',
    number: data.number || '',
    question: data.question || '',
    category: data.category || '기타',
    flow: data.flow || [],
    keywords: data.keywords || '',
    answer: data.answer || '',
    similar: data.similar || [],
    favorite: false,
    status: '새 스크립트',
    review: false,
    practiceCount: 0,
    lastPracticed: '',
    order: index + 1
  };
}

let state = loadState();
let currentFilter = 'all';
let currentPracticeId = null;
let timerId = null;
let remaining = 60;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const elements = {
  tabs: $$('.tab'),
  views: $$('.view'),
  cards: $('#scriptCards'),
  reviewCards: $('#reviewCards'),
  search: $('#searchInput'),
  categoryFilters: $('#categoryFilters'),
  flowOnly: $('#flowOnly'),
  closeAnswers: $('#closeAnswers'),
  randomPractice: $('#randomPractice'),
  resetAll: $('#resetAll'),
  todayQuestion: $('#todayQuestion'),
  countTotal: $('#countTotal'),
  countDone: $('#countDone'),
  countReview: $('#countReview'),
  form: $('#scriptForm'),
  questionInput: $('#questionInput'),
  categoryInput: $('#categoryInput'),
  flowInput: $('#flowInput'),
  keywordsInput: $('#keywordsInput'),
  answerInput: $('#answerInput'),
  similarInput: $('#similarInput'),
  clearForm: $('#clearForm'),
  bulkInput: $('#bulkInput'),
  bulkImport: $('#bulkImport'),
  progressPanel: $('#progressPanel'),
  modal: $('#practiceModal'),
  modalClose: $('#modalClose'),
  practiceMeta: $('#practiceMeta'),
  practiceTitle: $('#practiceTitle'),
  practiceFlow: $('#practiceFlow'),
  timer: $('#timer'),
  timerMsg: $('#timerMsg'),
  startTimer: $('#startTimer'),
  stopTimer: $('#stopTimer'),
  resetTimer: $('#resetTimer'),
  checkFlow: $('#checkFlow'),
  checkTime: $('#checkTime'),
  checkReview: $('#checkReview'),
  savePractice: $('#savePractice')
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.warn('저장된 데이터를 불러오지 못했습니다.', error);
  }
  return { scripts: DEFAULT_SCRIPT_DATA.map((item, index) => createScriptItem(item, index)) };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function makeId() {
  return crypto?.randomUUID ? crypto.randomUUID() : `script-${Date.now()}-${Math.random()}`;
}

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function toLines(value = '') {
  return value
    .split('\n')
    .map(line => line.replace(/^[-•\d.)\s]+/, '').trim())
    .filter(Boolean);
}

function getVisibleScripts() {
  const keyword = elements.search.value.trim().toLowerCase();
  return state.scripts.filter(item => {
    const filterMatch = currentFilter === 'all' || item.category === currentFilter;
    const text = `${item.question} ${item.category} ${item.keywords} ${item.answer}`.toLowerCase();
    return filterMatch && (!keyword || text.includes(keyword));
  });
}

function renderAll() {
  renderStats();
  renderCards();
  renderReview();
  renderProgress();
  saveState();
}

function renderStats() {
  const total = state.scripts.length;
  const done = state.scripts.filter(item => item.status === '완료').length;
  const review = state.scripts.filter(item => item.review).length;
  elements.countTotal.textContent = total;
  elements.countDone.textContent = done;
  elements.countReview.textContent = review;
  elements.todayQuestion.textContent = total ? '랜덤 질문으로 바로 말하기 연습을 시작하세요.' : '스크립트를 추가하고 연습을 시작하세요.';
}

function renderCards() {
  const scripts = getVisibleScripts();
  elements.cards.innerHTML = scripts.length
    ? scripts.map(renderCard).join('')
    : `<div class="empty">아직 표시할 스크립트가 없습니다. 스크립트 추가 탭에서 직접 입력해 주세요.</div>`;
}

function renderReview() {
  const scripts = state.scripts.filter(item => item.favorite || item.review);
  elements.reviewCards.innerHTML = scripts.length
    ? scripts.map(renderCard).join('')
    : `<div class="empty">복습할 스크립트가 없습니다. 즐겨찾기 또는 복습 필요를 체크하면 여기에 모입니다.</div>`;
}

function renderCard(item) {
  const flowHtml = item.flow.length
    ? item.flow.map((step, index) => `<div class="step"><span class="num">${index + 1}</span><span>${escapeHtml(step)}</span></div>`).join('')
    : `<div class="step"><span class="num">1</span><span>흐름 메모가 없습니다. 답변을 읽고 직접 말할 순서를 정리해보세요.</span></div>`;

  const similarHtml = item.similar?.length
    ? `<details class="details-box similar-details"><summary>유사 질문</summary><ul class="similar-list">${item.similar.map(q => `<li>${escapeHtml(q)}</li>`).join('')}</ul></details>`
    : '';

  return `
    <article class="card" data-id="${item.id}">
      <div class="card-head">
        <div>
          <div class="meta">${escapeHtml(item.set || '직접 추가')} ${item.number ? '· ' + escapeHtml(item.number) : ''} · ${escapeHtml(item.category)} · ${item.practiceCount || 0}회 연습</div>
          <h3>${escapeHtml(item.question)}</h3>
        </div>
        <select class="status-select" data-action="status" aria-label="학습 상태">
          ${['새 스크립트', '연습중', '완료'].map(status => `<option ${item.status === status ? 'selected' : ''}>${status}</option>`).join('')}
        </select>
      </div>

      <div class="flow">${flowHtml}</div>
      ${item.keywords ? `<p class="keywords"><b>키워드:</b> ${escapeHtml(item.keywords)}</p>` : ''}

      ${similarHtml}
      <details class="details-box answer-details"><summary>영어 답변 보기</summary><div class="answer">${escapeHtml(item.answer)}</div></details>

      <div class="card-actions">
        <button class="card-btn" data-action="practice" type="button">60초 연습</button>
        <button class="card-btn ${item.favorite ? 'active' : ''}" data-action="favorite" type="button">즐겨찾기</button>
        <button class="card-btn ${item.review ? 'active' : ''}" data-action="review" type="button">복습 필요</button>
        <button class="card-btn" data-action="edit" type="button">수정</button>
        <button class="card-btn danger" data-action="delete" type="button">삭제</button>
      </div>
    </article>`;
}

function renderProgress() {
  const total = state.scripts.length || 1;
  const categories = CATEGORIES;
  const totalPractice = state.scripts.reduce((sum, item) => sum + (item.practiceCount || 0), 0);
  const done = state.scripts.filter(item => item.status === '완료').length;

  const rows = categories.map(cat => {
    const items = state.scripts.filter(item => item.category === cat);
    const complete = items.filter(item => item.status === '완료').length;
    const percent = items.length ? Math.round((complete / items.length) * 100) : 0;
    return `<div class="progress-row"><header><span>${cat}</span><span>${complete}/${items.length}</span></header><div class="bar"><span style="width:${percent}%"></span></div></div>`;
  }).join('');

  elements.progressPanel.innerHTML = `
    <div class="progress-row"><header><span>전체 완료율</span><span>${done}/${total}</span></header><div class="bar"><span style="width:${Math.round((done / total) * 100)}%"></span></div></div>
    <div class="progress-row"><header><span>누적 말하기 연습</span><span>${totalPractice}회</span></header></div>
    ${rows}
  `;
}

function addScript(data) {
  state.scripts.unshift({
    id: makeId(),
    set: data.set || '직접 추가',
    number: data.number || '',
    question: data.question.trim(),
    category: data.category || '기타',
    flow: data.flow || [],
    keywords: data.keywords || '',
    answer: data.answer.trim(),
    similar: data.similar || [],
    favorite: false,
    status: '새 스크립트',
    review: false,
    practiceCount: 0,
    lastPracticed: ''
  });
}

function clearForm() {
  elements.form.reset();
}

function parseBulk(text) {
  return text
    .split(/\n---+\n/g)
    .map(block => block.trim())
    .filter(Boolean)
    .map(block => {
      const getValue = (label) => {
        const match = block.match(new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n(?:Q|Question|Category|Flow|Keywords|Answer|Similar):|$)`, 'i'));
        return match ? match[1].trim() : '';
      };
      const question = getValue('(?:Q|Question)');
      const category = getValue('Category') || '기타';
      const flow = toLines(getValue('Flow'));
      const keywords = getValue('Keywords');
      const answer = getValue('Answer');
      const similar = toLines(getValue('Similar'));
      if (!question || !answer) return null;
      return { question, category, flow, keywords, answer, similar };
    })
    .filter(Boolean);
}

function handleCardAction(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const card = event.target.closest('.card');
  if (!card) return;

  const id = card.dataset.id;
  const item = state.scripts.find(script => script.id === id);
  if (!item) return;

  const action = button.dataset.action;

  if (action === 'practice') openPractice(item.id);
  if (action === 'favorite') item.favorite = !item.favorite;
  if (action === 'review') item.review = !item.review;
  if (action === 'delete') {
    if (confirm('이 스크립트를 삭제할까요?')) {
      state.scripts = state.scripts.filter(script => script.id !== id);
    }
  }
  if (action === 'edit') {
    fillFormForEdit(item);
    state.scripts = state.scripts.filter(script => script.id !== id);
    switchView('addView');
  }
  if (action === 'status') item.status = button.value;

  renderAll();
}

function fillFormForEdit(item) {
  elements.questionInput.value = item.question;
  elements.categoryInput.value = item.category;
  elements.flowInput.value = item.flow.join('\n');
  elements.keywordsInput.value = item.keywords;
  elements.answerInput.value = item.answer;
  elements.similarInput.value = item.similar.join('\n');
}

function switchView(viewId) {
  elements.tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.view === viewId));
  elements.views.forEach(view => view.classList.toggle('active-view', view.id === viewId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openPractice(id) {
  const item = state.scripts.find(script => script.id === id);
  if (!item) return;
  currentPracticeId = id;
  remaining = 60;
  stopTimer();
  elements.practiceMeta.textContent = `${item.category} · 말하기 연습`;
  elements.practiceTitle.textContent = item.question;
  elements.practiceFlow.innerHTML = (item.flow.length ? item.flow : ['답변을 떠올리며 자유롭게 말해보세요.'])
    .map((step, index) => `<div class="step"><span class="num">${index + 1}</span><span>${escapeHtml(step)}</span></div>`)
    .join('');
  elements.checkFlow.checked = false;
  elements.checkTime.checked = false;
  elements.checkReview.checked = item.review;
  updateTimer();
  elements.modal.classList.add('open');
  elements.modal.setAttribute('aria-hidden', 'false');
}

function closePractice() {
  stopTimer();
  elements.modal.classList.remove('open');
  elements.modal.setAttribute('aria-hidden', 'true');
}

function updateTimer() {
  const min = String(Math.floor(remaining / 60)).padStart(2, '0');
  const sec = String(remaining % 60).padStart(2, '0');
  elements.timer.textContent = `${min}:${sec}`;
  const spoken = 60 - remaining;
  if (spoken < 40) elements.timerMsg.textContent = '아직 준비 구간입니다. 흐름을 따라 계속 말해보세요.';
  else if (spoken <= 60) elements.timerMsg.textContent = '좋습니다. 오픽 답변으로 충분한 길이에 가까워졌습니다.';
  else elements.timerMsg.textContent = '이제 마무리 문장으로 정리해보세요.';
}

function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    remaining -= 1;
    if (remaining <= -30) stopTimer();
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  stopTimer();
  remaining = 60;
  updateTimer();
}

function savePractice() {
  const item = state.scripts.find(script => script.id === currentPracticeId);
  if (!item) return;
  item.practiceCount = (item.practiceCount || 0) + 1;
  item.lastPracticed = new Date().toLocaleDateString('ko-KR');
  item.review = elements.checkReview.checked;
  if (elements.checkFlow.checked && elements.checkTime.checked && !elements.checkReview.checked) {
    item.status = '완료';
  } else {
    item.status = '연습중';
  }
  closePractice();
  renderAll();
}

function randomPractice() {
  if (!state.scripts.length) {
    switchView('addView');
    return;
  }
  const pick = state.scripts[Math.floor(Math.random() * state.scripts.length)];
  switchView('libraryView');
  setTimeout(() => {
    renderCards();
    const card = document.querySelector(`[data-id="${pick.id}"]`);
    card?.classList.add('random-focus');
    card?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    openPractice(pick.id);
  }, 100);
}

// Events
elements.tabs.forEach(tab => tab.addEventListener('click', () => switchView(tab.dataset.view)));
elements.search.addEventListener('input', renderCards);
elements.categoryFilters.addEventListener('click', (event) => {
  const chip = event.target.closest('.chip');
  if (!chip) return;
  currentFilter = chip.dataset.filter;
  $$('.chip').forEach(item => item.classList.remove('active'));
  chip.classList.add('active');
  renderCards();
});
elements.flowOnly.addEventListener('click', () => {
  document.body.classList.toggle('flow-mode');
  elements.flowOnly.classList.toggle('active', document.body.classList.contains('flow-mode'));
});
elements.closeAnswers.addEventListener('click', () => $$('details').forEach(detail => detail.open = false));
elements.cards.addEventListener('click', handleCardAction);
elements.cards.addEventListener('change', handleCardAction);
elements.reviewCards.addEventListener('click', handleCardAction);
elements.reviewCards.addEventListener('change', handleCardAction);
elements.randomPractice.addEventListener('click', randomPractice);
elements.form.addEventListener('submit', (event) => {
  event.preventDefault();
  addScript({
    question: elements.questionInput.value,
    category: elements.categoryInput.value,
    flow: toLines(elements.flowInput.value),
    keywords: elements.keywordsInput.value.trim(),
    answer: elements.answerInput.value,
    similar: toLines(elements.similarInput.value)
  });
  clearForm();
  switchView('libraryView');
  renderAll();
});
elements.clearForm.addEventListener('click', clearForm);
elements.bulkImport.addEventListener('click', () => {
  const parsed = parseBulk(elements.bulkInput.value);
  if (!parsed.length) {
    alert('가져올 수 있는 스크립트가 없습니다. 예시 형식에 맞게 입력해 주세요.');
    return;
  }
  parsed.reverse().forEach(addScript);
  elements.bulkInput.value = '';
  switchView('libraryView');
  renderAll();
});
elements.resetAll.addEventListener('click', () => {
  if (!confirm('저장된 스크립트와 기록을 모두 초기화할까요?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = { scripts: DEFAULT_SCRIPT_DATA.map((item, index) => createScriptItem(item, index)) };
  renderAll();
});
elements.modalClose.addEventListener('click', closePractice);
elements.modal.addEventListener('click', (event) => {
  if (event.target.dataset.close) closePractice();
});
elements.startTimer.addEventListener('click', startTimer);
elements.stopTimer.addEventListener('click', stopTimer);
elements.resetTimer.addEventListener('click', resetTimer);
elements.savePractice.addEventListener('click', savePractice);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && elements.modal.classList.contains('open')) closePractice();
});

renderAll();
