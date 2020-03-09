'use strict';

const ru = [
  {
    answers: [
      {correct: false, answer: "они"},
      {correct: true, answer: "мы"},
      {correct: false, answer: "вы"},
      {correct: false, answer: "я"},
    ],
    question: "Translate to Russian: 'we'",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "она прибежала"},
      {correct: false, answer: "она бежала"},
      {correct: false, answer: "она бежит"},
      {correct: true, answer: "она убежала"},
    ],
    question: "Translate to Russian: 'she ran away'",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "она понимает пять слов"},
      {correct: false, answer: "она поняла пять слов"},
      {correct: false, answer: "она понял пять слова"},
      {correct: false, answer: "она понимает пять слова"},
    ],
    question: "Translate to Russian: 'she understands five words'",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "синий"},
      {correct: false, answer: "гриб"},
      {correct: false, answer: "кресло"},
      {correct: true, answer: "шумное"},
      {correct: true, answer: "высокий"},
      {correct: false, answer: "луч"},
      {correct: false, answer: "работай"},
      {correct: true, answer: "утренняя"},
    ],
    question: "Pick all the words that are adjectives?",
    type: "checkbox",
  },
  {
    answers: [
      {correct: false, answer: "холодный"},
      {correct: false, answer: "это холодно"},
      {correct: true, answer: "холодно"},
      {correct: false, answer: "холодное"},
      {correct: false, answer: "это холодный"},
    ],
    question: "Translate to Russian: 'it\'s cold'",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "work"},
      {correct: false, answer: "joy"},
      {correct: true, answer: "life"},
      {correct: false, answer: "time"},
    ],
    question: "Translate to Russian: 'жизнь'",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "His book is on the stool."},
      {correct: false, answer: "My book is on the stool"},
      {correct: true, answer: "My book is on the table"},
      {correct: false, answer: "My book on the table"},
    ],
    question: "Translate to Russian: 'Моя книга на столе' (на столе - Prepositional)",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "Моя кошка играет с мячом."},
      {correct: false, answer: "Моя кошка играла с мячом."},
      {correct: false, answer: "Моя кошка играет со своим мячом."},
      {correct: false, answer: "Кошка играет с мячом."},
    ],
    question: "Translate to Russian: 'My cat is playing with a ball. (with a ball - Instrumental in Russian)",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "столе"},
      {correct: true, answer: "стола"},
      {correct: false, answer: "столом."},
      {correct: false, answer: "столу"},
    ],
    question: "Translate to Russian: 'table' in Genitive case",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "ведром"},
      {correct: false, answer: "ведра"},
      {correct: true, answer: "ведру"},
      {correct: false, answer: "ведре"},
    ],
    question: "Translate to Russian: 'bucket' in Dative case",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "дверь"},
      {correct: false, answer: "дверей"},
      {correct: false, answer: "двери"},
      {correct: true, answer: "дверью"},
    ],
    question: "Translate to Russian: 'door' in Instrumental case",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "окно"},
      {correct: false, answer: "окна"},
      {correct: true, answer: "окне"},
      {correct: false, answer: "окну"},
    ],
    question: "Translate to Russian: 'window' in Prepositional case",
    type: "radio",
  },
];


const en = [
  {
    answers: [
      {correct: false, answer: "on"},
      {correct: true, answer: "at"},
      {correct: false, answer: "in"},
      {correct: false, answer: "for"},
    ],
    question: "She\'s ... work all day today.",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "got bored"},
      {correct: false, answer: "bored"},
      {correct: false, answer: "boring"},
      {correct: true, answer: "was getting bored"},
    ],
    question: "He .... with the game.",
    type: "checkbox",
  },
  {
    answers: [
      {correct: true, answer: "are boring her"},
      {correct: false, answer: "got bored her"},
      {correct: true, answer: "bored her"},
      {correct: true, answer: "bore her"},
      {correct: false, answer: "are bored her"},
      {correct: true, answer: "are getting her bored"},
    ],
    question: "They .... with their complaining.",
    type: "checkbox",
  },
  {
    answers: [
      {correct: false, answer: "lives in"},
      {correct: false, answer: "are living in"},
      {correct: false, answer: "live at"},
      {correct: true, answer: "live in"},
    ],
    question: "They .... Paris.",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "in"},
      {correct: true, answer: "at"},
      {correct: false, answer: "on"},
      {correct: false, answer: "to"},
    ],
    question: "We're arriving .... the station at noon.",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "There"},
      {correct: false, answer: "It"},
    ],
    question: ".... is a cinema in the city centre.",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "much time"},
      {correct: false, answer: "long time"},
      {correct: true, answer: "long"},
      {correct: false, answer: "much"},
    ],
    question: "How ... does it take you to get to work?",
    type: "checkbox",
  },
  {
    answers: [
      {correct: false, answer: "for"},
      {correct: true, answer: "on"},
    ],
    question: "Is there anything .... sale at the mall this week? I don't have much money to spend.",
    type: "radio",
  },
  {
    answers: [
      {correct: true, answer: "for"},
      {correct: false, answer: "about"},
      {correct: false, answer: "with"},
      {correct: false, answer: "because of"},
    ],
    question: "Switzerland is famous .... its cheese.",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "in"},
      {correct: false, answer: "for"},
      {correct: true, answer: "with"},
      {correct: false, answer: "by"},
    ],
    question: "You can pay for this dress .... euros.",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "afraid with"},
      {correct: false, answer: "is afraid at"},
      {correct: false, answer: "afraid of"},
      {correct: true, answer: "is afraid of"},
    ],
    question: "She .... the dark.",
    type: "radio",
  },
  {
    answers: [
      {correct: false, answer: "was walking, was meeting"},
      {correct: true, answer: "was walking, met"},
      {correct: false, answer: "was walking, have met"},
      {correct: true, answer: "am walking, meet"},
    ],
    question: "When I .... around the park, I .... my friends.",
    type: "checkbox",
  },
  {
    answers: [
      {correct: true, answer: "in"},
      {correct: false, answer: "to"},
      {correct: false, answer: "by"},
      {correct: false, answer: "at"},
    ],
    question: "He arrived .... Amsterdam yesterday.",
    type: "radio",
  },



];

const dataList = {
  'en': en,
  'ru': ru,
};

const dataToFeedEn = [
  [
    'Who wrote \'Harry Potter\'?',
    ['R.L. Stine', 'J.K. Rowling', 'Terry Goodkind', 'J.R.R. Tolkien'],
    [1]
  ],
  [
    'What is the capital of Spain?',
    ['Barcelona', 'Valencia', 'Madrid', 'Seville'],
    [2]
  ],
  [
    'Who insulted siamese cats?',
    ['Trump', 'Tom Cruise', 'J.R.R. Tolkien', 'A.S. Pushkin'],
    [2]
  ],

  [
    'Which are the words for \'cat\' in Russian?',
    ['собака', 'кошка', 'феня', 'кот'],
    [1, 3]
  ],
];
const dataToFeedRu = [
  [
    'Who wrote \'Legend of the Seeker\'?',
    ['Clive Staples Lewis Lewis', 'Robert Jordan', 'Terry Goodkind', 'George R. R. Martin'],
    [2]
  ],
  [
    'What is the capital of Portugal?',
    ['Barcelona', 'Porto', 'Madrid', 'Lisbon'],
    [3]
  ],
  [
    'Which word is the Russian word for \'window\'?',
    ['стена', 'окна', 'окно', 'подоконник'],
    [2]
  ],

  [
    'Which words are feminine?',
    ['луч', 'ночь', 'море', 'дверь', 'сумка', 'стол'],
    [1, 3, 4]
  ],
];

