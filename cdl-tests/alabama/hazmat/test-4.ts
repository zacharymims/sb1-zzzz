import { Question } from '../../../../types';

export const alabamaHazmat4: Question[] = [
  {
    id: 'hm-4-1',
    question: 'What is the purpose of the Hazardous Materials Table in the regulations?',
    answers: [
      'To list all possible hazardous materials',
      'To provide shipping information for hazardous materials',
      'To show hazmat routing information',
      'To list fines for hazmat violations'
    ],
    correctAnswers: ['To provide shipping information for hazardous materials'],
    explanation: 'The Hazardous Materials Table provides crucial shipping information for hazardous materials, including proper shipping names, hazard classes, and ID numbers.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-2',
    question: 'What does the term "N.O.S." mean when used in a proper shipping name?',
    answers: [
      'Not Otherwise Specified',
      'New Organic Substance',
      'Non-Oxidizing Solid',
      'Naturally Occurring Substance'
    ],
    correctAnswers: ['Not Otherwise Specified'],
    explanation: 'N.O.S. stands for "Not Otherwise Specified" and is used for generic descriptions when a specific material name is not listed in the regulations.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-3',
    question: 'What is the purpose of the Packing Group in hazardous materials transportation?',
    answers: [
      'To indicate the size of the package',
      'To show the degree of danger presented by the material',
      'To specify the type of vehicle needed',
      'To determine the route of transportation'
    ],
    correctAnswers: ['To show the degree of danger presented by the material'],
    explanation: 'The Packing Group indicates the degree of danger presented by the material, with I being the most dangerous and III being the least dangerous.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-4',
    question: 'What does the term "technical name" mean in hazardous materials shipping?',
    answers: [
      'The chemical formula of the material',
      'A recognized chemical name used in scientific and technical handbooks',
      'The brand name of the product',
      'The name of the manufacturing process'
    ],
    correctAnswers: ['A recognized chemical name used in scientific and technical handbooks'],
    explanation: 'A technical name is a recognized chemical name used in scientific and technical handbooks, journals, and texts.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-5',
    question: 'What is the purpose of the Hazardous Materials Identification Number?',
    answers: [
      'To identify the shipper',
      'To indicate the materials toxicity level',
      'To uniquely identify the hazardous material',
      'To show the date of manufacture'
    ],
    correctAnswers: ['To uniquely identify the hazardous material'],
    explanation: 'The Hazardous Materials Identification Number (or UN/NA number) is used to uniquely identify specific hazardous materials or groups of hazardous materials.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-6',
    question: 'What does the term "mixture" mean in hazardous materials classification?',
    answers: [
      'A combination of two or more materials that retain their original properties',
      'A single substance with multiple hazard classes',
      'A material that changes its properties during transportation',
      'A substance that reacts with air'
    ],
    correctAnswers: ['A combination of two or more materials that retain their original properties'],
    explanation: 'In hazardous materials classification, a mixture is a combination of two or more materials that retain their own properties in the final product.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-7',
    question: 'What is the purpose of the "Limited Quantity" designation?',
    answers: [
      'To indicate materials that are not hazardous',
      'To allow for less stringent packaging and labeling requirements',
      'To restrict the material to ground transportation only',
      'To indicate materials that cannot be shipped internationally'
    ],
    correctAnswers: ['To allow for less stringent packaging and labeling requirements'],
    explanation: 'The "Limited Quantity" designation allows for less stringent packaging and labeling requirements for small amounts of certain hazardous materials.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-8',
    question: 'What does the term "self-reactive" mean in hazardous materials classification?',
    answers: [
      'Materials that react with water',
      'Materials that decompose, polymerize, or react on their own',
      'Materials that only react when heated',
      'Materials that react only with acids'
    ],
    correctAnswers: ['Materials that decompose, polymerize, or react on their own'],
    explanation: 'Self-reactive materials are those that are liable to undergo strong exothermic decomposition even without the participation of oxygen.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-9',
    question: 'What is the purpose of the "Excepted Quantity" provision in hazardous materials regulations?',
    answers: [
      'To exempt materials from all regulations',
      'To allow very small amounts of hazardous materials to be shipped with minimal regulation',
      'To indicate materials that are not dangerous',
      'To specify materials that can only be shipped by air'
    ],
    correctAnswers: ['To allow very small amounts of hazardous materials to be shipped with minimal regulation'],
    explanation: 'The "Excepted Quantity" provision allows very small amounts of certain hazardous materials to be shipped with minimal regulation due to the low risk they pose.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-10',
    question: 'What does the term "pyrophoric" mean in hazardous materials classification?',
    answers: [
      'Materials that ignite when exposed to water',
      'Materials that ignite spontaneously in air',
      'Materials that produce toxic gases when heated',
      'Materials that explode when subjected to shock'
    ],
    correctAnswers: ['Materials that ignite spontaneously in air'],
    explanation: 'Pyrophoric materials are those that ignite spontaneously in air at or below 130°F (54.4°C).',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-11',
    question: 'What is the purpose of the "Dangerous When Wet" label?',
    answers: [
      'To indicate materials that dissolve in water',
      'To warn that the material produces flammable gases when wet',
      'To show that the material should be kept dry during shipping',
      'To indicate materials used in water treatment'
    ],
    correctAnswers: ['To warn that the material produces flammable gases when wet'],
    explanation: 'The "Dangerous When Wet" label warns that the material may produce flammable gases upon contact with water.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-12',
    question: 'What does the term "subsidiary risk" mean in hazardous materials classification?',
    answers: [
      'A less dangerous hazard',
      'A secondary hazard of a material',
      'A risk only applicable to certain states',
      'A hazard that only occurs during unloading'
    ],
    correctAnswers: ['A secondary hazard of a material'],
    explanation: 'A subsidiary risk is a secondary hazard that a material possesses in addition to its primary hazard class.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-13',
    question: 'What is the purpose of the "Organic Peroxide" label?',
    answers: [
      'To indicate materials that are derived from plants',
      'To warn of materials that can decompose explosively',
      'To show that the material is biodegradable',
      'To indicate materials used in organic farming'
    ],
    correctAnswers: ['To warn of materials that can decompose explosively'],
    explanation: 'The "Organic Peroxide" label warns that these materials can decompose explosively, burn rapidly, be sensitive to impact or friction, or react dangerously with other substances.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-14',
    question: 'What does the term "inhibited" mean when used in a proper shipping name?',
    answers: [
      'The material is non-reactive',
      'The material has been treated to reduce its hazard',
      'The material is prohibited from transportation',
      'The material requires refrigeration'
    ],
    correctAnswers: ['The material has been treated to reduce its hazard'],
    explanation: '"Inhibited" in a proper shipping name indicates that the material has been treated with a chemical inhibitor to reduce its reactivity or stabilize it for transportation.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-15',
    question: 'What is the purpose of the "Keep Away From Heat" label?',
    answers: [
      'To indicate temperature-sensitive materials',
      'To warn of materials that may decompose when heated',
      'To show that the material must be refrigerated',
      'To indicate materials used in heat-resistant products'
    ],
    correctAnswers: ['To warn of materials that may decompose when heated'],
    explanation: 'The "Keep Away From Heat" label warns that the material may decompose, generating heat and possibly evolving flammable or poisonous gases when exposed to heat.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-16',
    question: 'What does the term "anhydrous" mean when used in hazardous materials shipping?',
    answers: [
      'Contains water',
      'Reacts with water',
      'Free from water',
      'Dissolves in water'
    ],
    correctAnswers: ['Free from water'],
    explanation: '"Anhydrous" means the material is free from water. This is important because some anhydrous materials can react violently with water.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-17',
    question: 'What is the purpose of the "Poison-Inhalation Hazard" label?',
    answers: [
      'To indicate materials poisonous only if swallowed',
      'To warn of highly toxic gases or very volatile liquids',
      'To show that the material is used to treat poisoning',
      'To indicate materials that cause skin irritation'
    ],
    correctAnswers: ['To warn of highly toxic gases or very volatile liquids'],
    explanation: 'The "Poison-Inhalation Hazard" label warns of materials that are highly toxic by inhalation, including gases and very volatile liquids.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-18',
    question: 'What does the term "stabilized" mean when used in a proper shipping name?',
    answers: [
      'The material is non-reactive',
      'The material has been treated to prevent dangerous decomposition',
      'The material is solid at room temperature',
      'The material is approved for all modes of transport'
    ],
    correctAnswers: ['The material has been treated to prevent dangerous decomposition'],
    explanation: '"Stabilized" in a proper shipping name indicates that the material has been treated to prevent dangerous decomposition, polymerization, or reaction during transportation.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-19',
    question: 'What is the purpose of the "Spontaneously Combustible" label?',
    answers: [
      'To indicate materials that burn when exposed to water',
      'To warn of materials that can ignite without an external ignition source',
      'To show that the material burns quickly',
      'To indicate materials used in fire-starting products'
    ],
    correctAnswers: ['To warn of materials that can ignite without an external ignition source'],
    explanation: 'The "Spontaneously Combustible" label warns of materials that can ignite without an external ignition source, often due to reaction with air.',
    questionTag: 'hazardous materials'
  },
  {
    id: 'hm-4-20',
    question: 'What does the term "viscous" mean when used in hazardous materials classification?',
    answers: [
      'Highly toxic',
      'Thick and slow-flowing',
      'Easily vaporized',
      'Highly reactive'
    ],
    correctAnswers: ['Thick and slow-flowing'],
    explanation: 'In hazardous materials classification, "viscous" refers to materials that are thick and slow-flowing, which can affect their hazard classification and packaging requirements.',
    questionTag: 'hazardous materials'
  }
];