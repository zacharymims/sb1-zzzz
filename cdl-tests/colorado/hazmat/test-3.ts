import { Question } from '../../../../types';

export const coloradoHazmat3: Question[] = [
  {
    id: 'hm-3-1',
    question: 'What type of endorsement is required to transport hazardous materials?',
    answers: [
      'T endorsement',
      'N endorsement',
      'H endorsement',
      'P endorsement'
    ],
    correctAnswers: ['H endorsement'],
    explanation: 'The H endorsement is required for drivers who wish to haul hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-2',
    question: 'What federal agency requires background checks for the Hazardous Materials endorsement?',
    answers: [
      'Department of Transportation',
      'Federal Motor Carrier Safety Administration',
      'Department of Homeland Security',
      'Environmental Protection Agency'
    ],
    correctAnswers: ['Department of Homeland Security'],
    explanation: 'Federal regulations through the Department of Homeland Security require a background check and fingerprinting for the Hazardous Materials endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-3',
    question: 'What does the Hazardous Materials endorsement allow a driver to transport?',
    answers: [
      'Any size vehicle with a GVWR of 26,001 pounds or more',
      'A combination vehicle with a GCWR of 26,001 or more pounds',
      'A vehicle designed to transport 16 or more passengers',
      'Any size vehicle which requires hazardous material placards'
    ],
    correctAnswers: ['Any size vehicle which requires hazardous material placards'],
    explanation: 'The H endorsement allows drivers to operate any size vehicle which requires hazardous material placards or is carrying material listed as a select agent or toxin in 42 CFR part 73.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-4',
    question: 'What additional procedure is required for obtaining a Hazardous Materials endorsement?',
    answers: [
      'A road test with hazardous materials',
      'Fingerprinting',
      'A medical examination',
      'A written exam on vehicle inspection'
    ],
    correctAnswers: ['Fingerprinting'],
    explanation: 'Federal regulations require fingerprinting for the Hazardous Materials endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-5',
    question: 'Which agency conducts background checks for the Hazardous Materials endorsement?',
    answers: [
      'Federal Bureau of Investigation (FBI)',
      'Transportation Security Administration (TSA)',
      'Federal Motor Carrier Safety Administration (FMCSA)',
      'Department of Transportation (DOT)'
    ],
    correctAnswers: ['Transportation Security Administration (TSA)'],
    explanation: 'The Transportation Security Administration (TSA) conducts background checks on commercial drivers who are certified to transport hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-6',
    question: 'What type of records are reviewed in the background check for a Hazardous Materials endorsement?',
    answers: [
      'Only criminal records',
      'Only immigration records',
      'Only FBI records',
      'Criminal, immigration, and FBI records'
    ],
    correctAnswers: ['Criminal, immigration, and FBI records'],
    explanation: 'The background checks for a Hazardous Materials endorsement include a review of criminal, immigration and FBI records.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-7',
    question: 'What happens if a driver is found to represent a security threat during the background check?',
    answers: [
      'The driver is given a chance to appeal',
      'The TSA will notify the person and the state will deny issuance of an endorsement',
      'The driver is required to take additional training',
      'The driver is placed on a probationary period'
    ],
    correctAnswers: ['The TSA will notify the person and the state will deny issuance of an endorsement'],
    explanation: 'If the driver is found to represent a security threat, TSA will notify the person and the state will deny issuance of an endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-8',
    question: 'What is the minimum age requirement for drivers transporting hazardous materials?',
    answers: [
      '18 years old',
      '21 years old',
      '25 years old',
      'There is no minimum age requirement'
    ],
    correctAnswers: ['21 years old'],
    explanation: 'The minimum age to obtain a CDL for interstate commerce, which includes hazardous materials transportation, is 21 years old.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-9',
    question: 'What type of endorsement is required for drivers who transport both hazardous materials and use tank vehicles?',
    answers: [
      'H endorsement',
      'N endorsement',
      'X endorsement',
      'T endorsement'
    ],
    correctAnswers: ['X endorsement'],
    explanation: 'Drivers of tank vehicles who haul hazardous materials or waste in amounts requiring placards must add an X endorsement to their CDL.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-10',
    question: 'What does the X endorsement represent?',
    answers: [
      'Extra large vehicles',
      'Explosive materials',
      'Combination of Hazardous Materials and Tank Vehicle',
      'Extended trailers'
    ],
    correctAnswers: ['Combination of Hazardous Materials and Tank Vehicle'],
    explanation: 'The X endorsement represents a combination of Hazardous Materials (H) and Tank Vehicle (N) endorsements.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-11',
    question: 'What type of background check is required for the Hazardous Materials endorsement?',
    answers: [
      'Only a criminal record check',
      'Only an immigration status check',
      'A review of criminal, immigration, and FBI records',
      'Only a driving record check'
    ],
    correctAnswers: ['A review of criminal, immigration, and FBI records'],
    explanation: 'The background checks for a Hazardous Materials endorsement include a review of criminal, immigration and FBI records.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-12',
    question: 'What agency is responsible for conducting background checks for the Hazardous Materials endorsement?',
    answers: [
      'Federal Motor Carrier Safety Administration (FMCSA)',
      'Transportation Security Administration (TSA)',
      'Department of Transportation (DOT)',
      'Federal Bureau of Investigation (FBI)'
    ],
    correctAnswers: ['Transportation Security Administration (TSA)'],
    explanation: 'The Transportation Security Administration (TSA) conducts background checks on commercial drivers who are certified to transport hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-13',
    question: 'What happens if a driver is found to represent a security threat during the Hazardous Materials endorsement background check?',
    answers: [
      'The driver is given a warning',
      'The driver is required to undergo additional training',
      'TSA will notify the person and the state will deny issuance of an endorsement',
      'The driver is automatically disqualified from holding any CDL'
    ],
    correctAnswers: ['TSA will notify the person and the state will deny issuance of an endorsement'],
    explanation: 'If the driver is found to represent a security threat, TSA will notify the person and the state will deny issuance of an endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-14',
    question: 'What additional procedure is required for obtaining a Hazardous Materials endorsement besides the knowledge test?',
    answers: [
      'A road test with hazardous materials',
      'Fingerprinting',
      'A medical examination',
      'A written exam on vehicle inspection'
    ],
    correctAnswers: ['Fingerprinting'],
    explanation: 'Federal regulations require fingerprinting for the Hazardous Materials endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-15',
    question: 'What type of vehicles does the Hazardous Materials endorsement allow a driver to operate?',
    answers: [
      'Only tank vehicles',
      'Any vehicle carrying any amount of hazardous materials',
      'Any size vehicle which requires hazardous material placards',
      'Only vehicles with a GVWR of 26,001 pounds or more'
    ],
    correctAnswers: ['Any size vehicle which requires hazardous material placards'],
    explanation: 'The H endorsement allows drivers to operate any size vehicle which requires hazardous material placards or is carrying material listed as a select agent or toxin in 42 CFR part 73.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-16',
    question: 'What endorsement is required for drivers who transport both hazardous materials and use tank vehicles?',
    answers: [
      'H endorsement',
      'N endorsement',
      'X endorsement',
      'T endorsement'
    ],
    correctAnswers: ['X endorsement'],
    explanation: 'Drivers of tank vehicles who haul hazardous materials or waste in amounts requiring placards must add an X endorsement to their CDL.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-17',
    question: 'What does the X endorsement represent?',
    answers: [
      'Extra large vehicles',
      'Explosive materials',
      'Combination of Hazardous Materials and Tank Vehicle',
      'Extended trailers'
    ],
    correctAnswers: ['Combination of Hazardous Materials and Tank Vehicle'],
    explanation: 'The X endorsement represents a combination of Hazardous Materials (H) and Tank Vehicle (N) endorsements.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-18',
    question: 'What federal agency requires background checks for the Hazardous Materials endorsement?',
    answers: [
      'Department of Transportation',
      'Federal Motor Carrier Safety Administration',
      'Department of Homeland Security',
      'Environmental Protection Agency'
    ],
    correctAnswers: ['Department of Homeland Security'],
    explanation: 'Federal regulations through the Department of Homeland Security require a background check and fingerprinting for the Hazardous Materials endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-19',
    question: 'What is the minimum age requirement for drivers to obtain a Hazardous Materials endorsement?',
    answers: [
      '18 years old',
      '21 years old',
      '25 years old',
      'There is no minimum age requirement'
    ],
    correctAnswers: ['21 years old'],
    explanation: 'The minimum age to obtain a CDL for interstate commerce, which includes hazardous materials transportation, is 21 years old.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-3-20',
    question: 'What type of materials require a Hazardous Materials endorsement to transport?',
    answers: [
      'Any liquid in a tanker',
      'Any flammable material',
      'Materials requiring hazardous material placards or listed as select agents or toxins',
      'Only explosive materials'
    ],
    correctAnswers: ['Materials requiring hazardous material placards or listed as select agents or toxins'],
    explanation: 'A Hazardous Materials endorsement is required for transporting any material that requires hazardous material placards or is listed as a select agent or toxin in 42 CFR part 73.',
    questionTag: 'hazmat'
  }
];