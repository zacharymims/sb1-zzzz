import { Question } from '../../../../types';

export const coloradoHazmat5: Question[] = [
  {
    id: 'hm-5-1',
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
    id: 'hm-5-2',
    question: 'What does the background check for a Hazardous Materials endorsement include?',
    answers: [
      'Only criminal records',
      'Only immigration records',
      'Only FBI records',
      'Criminal, immigration, and FBI records'
    ],
    correctAnswers: ['Criminal, immigration, and FBI records'],
    explanation: 'The background check for a Hazardous Materials endorsement includes a review of criminal, immigration, and FBI records.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-3',
    question: 'Which agency conducts the background checks for the Hazardous Materials endorsement?',
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
    id: 'hm-5-4',
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
    id: 'hm-5-5',
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
    id: 'hm-5-6',
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
    id: 'hm-5-7',
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
  },
  {
    id: 'hm-5-8',
    question: 'What is the purpose of the background check for the Hazardous Materials endorsement?',
    answers: [
      'To verify driving experience',
      'To check for outstanding traffic violations',
      'To identify potential security threats',
      'To confirm educational qualifications'
    ],
    correctAnswers: ['To identify potential security threats'],
    explanation: 'The background check for the Hazardous Materials endorsement is conducted to identify potential security threats among drivers who transport hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-9',
    question: 'What is required in addition to a CDL to transport hazardous materials?',
    answers: [
      'Only a clean driving record',
      'A Hazardous Materials endorsement',
      'A special vehicle',
      'Additional insurance'
    ],
    correctAnswers: ['A Hazardous Materials endorsement'],
    explanation: 'In addition to a CDL, drivers must obtain a Hazardous Materials endorsement to transport hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-10',
    question: 'What regulation defines select agents or toxins for hazardous materials transportation?',
    answers: [
      '49 CFR part 172',
      '42 CFR part 73',
      '29 CFR part 1910',
      '40 CFR part 261'
    ],
    correctAnswers: ['42 CFR part 73'],
    explanation: 'Select agents or toxins are defined in 42 CFR part 73 for the purposes of hazardous materials transportation requirements.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-11',
    question: 'What is the primary purpose of the Hazardous Materials endorsement?',
    answers: [
      'To increase driver pay',
      'To allow transportation of any type of cargo',
      'To ensure drivers are qualified to safely transport hazardous materials',
      'To bypass weigh stations'
    ],
    correctAnswers: ['To ensure drivers are qualified to safely transport hazardous materials'],
    explanation: 'The primary purpose of the Hazardous Materials endorsement is to ensure that drivers are qualified to safely transport hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-12',
    question: 'What does GCWR stand for in the context of commercial motor vehicles?',
    answers: [
      'Gross Cargo Weight Rating',
      'General Commercial Weight Restriction',
      'Gross Combination Weight Rating',
      'Global Commercial Weight Regulation'
    ],
    correctAnswers: ['Gross Combination Weight Rating'],
    explanation: 'GCWR stands for Gross Combination Weight Rating, which is relevant when determining the class of CDL required.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-13',
    question: 'What is the minimum age requirement for interstate transportation of hazardous materials?',
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
    id: 'hm-5-14',
    question: 'What does the term "placard" refer to in hazardous materials transportation?',
    answers: [
      'A type of container for hazardous materials',
      'A sign on the vehicle indicating the presence of hazardous materials',
      'A special license for hazardous materials drivers',
      'A route plan for hazardous materials transportation'
    ],
    correctAnswers: ['A sign on the vehicle indicating the presence of hazardous materials'],
    explanation: 'A placard is a sign placed on the outside of a vehicle that indicates the presence of hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-15',
    question: 'What is the purpose of requiring fingerprinting for the Hazardous Materials endorsement?',
    answers: [
      'To create a driver identification system',
      'To check for criminal history',
      'To verify driving skills',
      'To establish a medical baseline'
    ],
    correctAnswers: ['To check for criminal history'],
    explanation: 'Fingerprinting is required for the Hazardous Materials endorsement to facilitate a thorough background check, including criminal history.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-16',
    question: 'What type of vehicles are exempt from CDL requirements when used for emergency snow removal?',
    answers: [
      'All snow removal vehicles',
      'Only state-owned snow plows',
      'Snowplow vehicles during declared emergency snow removal operations',
      'Private contractor snow removal equipment'
    ],
    correctAnswers: ['Snowplow vehicles during declared emergency snow removal operations'],
    explanation: 'During declared emergency snow removal operations, non-CDL holders may operate snowplow vehicles.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-17',
    question: 'Who determines when emergency snow conditions exist for the purpose of CDL exemptions?',
    answers: [
      'The governor',
      'The Department of Transportation',
      'The Colorado State Patrol (CSP)',
      'Local law enforcement'
    ],
    correctAnswers: ['The Colorado State Patrol (CSP)'],
    explanation: 'The Colorado State Patrol (CSP) determines when emergency snow conditions exist for the purpose of CDL exemptions.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-18',
    question: 'What is the purpose of the International Registration Program (IRP)?',
    answers: [
      'To regulate international truck drivers',
      'To provide registration reciprocity for interstate operations',
      'To enforce speed limits across state lines',
      'To standardize truck designs internationally'
    ],
    correctAnswers: ['To provide registration reciprocity for interstate operations'],
    explanation: 'The IRP provides registration reciprocity for carriers operating in multiple jurisdictions, allowing them to register in one base jurisdiction for all states.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-19',
    question: 'What type of vehicle is exempt from CDL requirements when used for military purposes?',
    answers: [
      'Any vehicle driven by a veteran',
      'Vehicles transporting military supplies',
      'CMVs operated by military personnel for military purposes',
      'Only tanks and armored vehicles'
    ],
    correctAnswers: ['CMVs operated by military personnel for military purposes'],
    explanation: 'Commercial Motor Vehicles (CMVs) operated by military personnel for military purposes are exempt from CDL requirements.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-5-20',
    question: 'Under what conditions are farm vehicles exempt from CDL requirements?',
    answers: [
      'When used within 150 miles of the farm',
      'When transporting any type of goods',
      'When driven by anyone over 18',
      'Only when used on private property'
    ],
    correctAnswers: ['When used within 150 miles of the farm'],
    explanation: 'Farm vehicles are exempt from CDL requirements when used within 150 miles of the farm, among other conditions such as being operated by a farmer and not used in for-hire motor carrier operations.',
    questionTag: 'hazmat'
  }
];