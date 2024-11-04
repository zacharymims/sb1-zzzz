import { Question } from '../../../../types';

export const alabamaHazmat5: Question[] = [
  {
    id: 'hm-5-1',
    question: 'What is the purpose of the Hazardous Materials Regulations?',
    answers: [
      'To increase transportation speed',
      'To reduce shipping costs',
      'To communicate risks and provide safe shipping requirements',
      'To promote the use of hazardous materials'
    ],
    correctAnswers: ['To communicate risks and provide safe shipping requirements'],
    explanation: 'The Hazardous Materials Regulations are designed to communicate risks and provide requirements for safe shipping of hazardous materials.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-2',
    question: 'What does the term "oxidizer" mean in hazardous materials transportation?',
    answers: [
      'A material that removes oxygen from the air',
      'A material that readily yields oxygen to stimulate combustion',
      'A material that prevents oxidation',
      'A material used in vehicle exhaust systems'
    ],
    correctAnswers: ['A material that readily yields oxygen to stimulate combustion'],
    explanation: 'An oxidizer is a material that readily yields oxygen to stimulate the combustion of other materials.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-3',
    question: 'What is the purpose of the compatibility group letter on explosives placards?',
    answers: [
      'To indicate the explosives manufacturer',
      'To show the explosives weight',
      'To identify which explosives can be transported together',
      'To specify the explosives destination'
    ],
    correctAnswers: ['To identify which explosives can be transported together'],
    explanation: 'The compatibility group letter on explosives placards indicates which explosives can be safely transported together.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-4',
    question: 'What is the main danger of transporting Division 2.3 (Poisonous Gas) materials?',
    answers: [
      'Explosion risk',
      'Corrosion of the vehicle',
      'Inhalation hazard',
      'Flammability'
    ],
    correctAnswers: ['Inhalation hazard'],
    explanation: 'The main danger of transporting Division 2.3 (Poisonous Gas) materials is the inhalation hazard they pose.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-5',
    question: 'What should you do if you break down while transporting explosives?',
    answers: [
      'Use flares to warn others',
      'Use reflective triangles or red electric lights to warn others',
      'Leave the vehicle unattended',
      'Call for a tow truck immediately'
    ],
    correctAnswers: ['Use reflective triangles or red electric lights to warn others'],
    explanation: 'If you break down while transporting explosives, use reflective triangles or red electric lights to warn others. Never use flares.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-6',
    question: 'What is the minimum distance you must keep tires away from heat when transporting Division 1.1, 1.2, or 1.3 explosives?',
    answers: [
      '25 feet',
      '50 feet',
      '100 feet',
      '200 feet'
    ],
    correctAnswers: ['100 feet'],
    explanation: 'When transporting Division 1.1, 1.2, or 1.3 explosives, you must keep tires at least 100 feet away from heat.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-7',
    question: 'What does a "Dangerous" placard indicate?',
    answers: [
      'The vehicle is oversized',
      'The load contains mixed hazardous materials',
      'The driver is dangerous',
      'The vehicle is speeding'
    ],
    correctAnswers: ['The load contains mixed hazardous materials'],
    explanation: 'A "Dangerous" placard indicates that the load contains mixed hazardous materials of different classes.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-8',
    question: 'What is the purpose of container markings?',
    answers: [
      'To identify the shipper',
      'To indicate the contents and potential hazards',
      'To show the manufacturing date',
      'To display the price of the contents'
    ],
    correctAnswers: ['To indicate the contents and potential hazards'],
    explanation: 'Container markings are used to indicate the contents of the container and their potential hazards.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-9',
    question: 'What should you do if you are in an accident involving hazardous materials?',
    answers: [
      'Leave the scene immediately',
      'Keep people away and notify authorities',
      'Try to clean up any spills yourself',
      'Remove placards to avoid attention'
    ],
    correctAnswers: ['Keep people away and notify authorities'],
    explanation: 'In case of an accident involving hazardous materials, you should keep people away from the scene and notify authorities immediately.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-10',
    question: 'What is the purpose of the segregation table for hazardous materials?',
    answers: [
      'To determine which materials can be transported together',
      'To calculate shipping costs',
      'To determine required placards',
      'To specify container types'
    ],
    correctAnswers: ['To determine which materials can be transported together'],
    explanation: 'The segregation table is used to determine which hazardous materials can be safely transported together.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-11',
    question: 'What does the term "water reactive" mean?',
    answers: [
      'The material dissolves in water',
      'The material floats on water',
      'The material produces a dangerous gas when exposed to water',
      'The material is used to purify water'
    ],
    correctAnswers: ['The material produces a dangerous gas when exposed to water'],
    explanation: 'Water reactive materials produce dangerous gases when exposed to water.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-12',
    question: 'What is the purpose of the Hazardous Materials Regulations Segregation Table?',
    answers: [
      'To show which materials must be kept apart',
      'To indicate loading sequence',
      'To display vehicle weight limits',
      'To list required safety equipment'
    ],
    correctAnswers: ['To show which materials must be kept apart'],
    explanation: 'The Segregation Table shows which hazardous materials must be kept apart from each other during transportation.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-13',
    question: 'What does ORM-D stand for?',
    answers: [
      'Oversize Regular Materials - Domestic',
      'Other Regulated Materials - Domestic',
      'Oxidizing Reactive Materials - Dangerous',
      'Organic Radioactive Materials - Domestic'
    ],
    correctAnswers: ['Other Regulated Materials - Domestic'],
    explanation: 'ORM-D stands for Other Regulated Materials - Domestic, which are materials that present a limited hazard during transportation due to their form, quantity, or packaging.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-14',
    question: 'What is the proper way to load Class 2 (Gases) cylinders?',
    answers: [
      'Horizontally for all gases',
      'Vertically for all gases',
      'Vertically and secured for most gases',
      'At a 45-degree angle'
    ],
    correctAnswers: ['Vertically and secured for most gases'],
    explanation: 'Most Class 2 (Gases) cylinders should be loaded vertically and securely fastened to prevent movement.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-15',
    question: 'What does the term "subsidiary hazard" mean?',
    answers: [
      'A less important hazard',
      'A secondary hazard of a material in addition to its primary hazard',
      'A hazard that only applies to certain states',
      'A hazard that only occurs during unloading'
    ],
    correctAnswers: ['A secondary hazard of a material in addition to its primary hazard'],
    explanation: 'A subsidiary hazard is a secondary hazard that a material possesses in addition to its primary hazard class.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-16',
    question: 'What is the maximum amount of a hazardous material that can be transported without using placards?',
    answers: [
      '1000 pounds for all materials',
      'Depends on the specific material and its hazard class',
      '500 pounds for all materials',
      'Any amount as long as its in proper packaging'
    ],
    correctAnswers: ['Depends on the specific material and its hazard class'],
    explanation: 'The amount of hazardous material that can be transported without placards depends on the specific material and its hazard class, as specified in the regulations.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-17',
    question: 'What does the term "limited quantity" mean in hazardous materials transportation?',
    answers: [
      'A shipment that requires a police escort',
      'A small amount of hazardous material that may have less stringent packaging requirements',
      'A material that can only be shipped by air',
      'A package that weighs less than 100 pounds'
    ],
    correctAnswers: ['A small amount of hazardous material that may have less stringent packaging requirements'],
    explanation: 'Limited quantity refers to a small amount of hazardous material that may be subject to less stringent packaging requirements due to the reduced risk it poses during transportation.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-18',
    question: 'What is the purpose of the "Cargo Aircraft Only" label?',
    answers: [
      'To indicate materials too valuable for ground transport',
      'To show that the material can only be shipped by air',
      'To restrict the material from being transported on passenger aircraft',
      'To indicate oversized packages'
    ],
    correctAnswers: ['To restrict the material from being transported on passenger aircraft'],
    explanation: 'The "Cargo Aircraft Only" label indicates that the hazardous material is forbidden on passenger aircraft and may only be transported on cargo aircraft.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-19',
    question: 'What does the term "overpack" mean in hazardous materials shipping?',
    answers: [
      'An overfilled package',
      'An enclosure used to provide protection or convenience for handling',
      'A package that exceeds weight limits',
      'Extra packaging material inside a container'
    ],
    correctAnswers: ['An enclosure used to provide protection or convenience for handling'],
    explanation: 'An overpack is an enclosure used by a single shipper to provide protection or convenience in handling of one or more packages.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-5-20',
    question: 'What is the purpose of the "Elevated Temperature Material" marking?',
    answers: [
      'To indicate materials sensitive to high temperatures',
      'To warn that the material is transported at high temperatures',
      'To show that the material must be kept warm',
      'To indicate materials used in high-temperature industrial processes'
    ],
    correctAnswers: ['To warn that the material is transported at high temperatures'],
    explanation: 'The "Elevated Temperature Material" marking warns that the material is transported at high temperatures and may cause burns if contacted.',
    questionTag: 'hazardous materials'
  }
];