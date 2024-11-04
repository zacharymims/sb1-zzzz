import { Question } from '../../../../types';

export const coloradoHazmat1: Question[] = [
  {
    id: 'hm-1-1',
    question: 'What does the term "hazardous materials" mean?',
    answers: [
      'Materials that pose no risk during transportation',
      'Any substance or material that could adversely affect the safety of the public, handlers, or carriers during transportation',
      'Only explosive materials',
      'Materials that are only dangerous when exposed to high temperatures'
    ],
    correctAnswers: ['Any substance or material that could adversely affect the safety of the public, handlers, or carriers during transportation'],
    explanation: 'Hazardous materials are substances or materials that pose a risk to health, safety, and property during transportation.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-2',
    question: 'Which of the following is required to transport hazardous materials?',
    answers: [
      'A regular drivers license',
      'A CDL with hazardous materials endorsement',
      'A motorcycle license',
      'No special license is required'
    ],
    correctAnswers: ['A CDL with hazardous materials endorsement'],
    explanation: 'To transport hazardous materials, drivers must have a CDL with a hazardous materials endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-3',
    question: 'What is the purpose of placards on a vehicle transporting hazardous materials?',
    answers: [
      'To make the vehicle look more attractive',
      'To indicate the company name',
      'To warn others of the hazardous cargo',
      'To display the drivers name'
    ],
    correctAnswers: ['To warn others of the hazardous cargo'],
    explanation: 'Placards are used to warn others of the hazardous materials being transported.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-4',
    question: 'When are shipping papers required for transporting hazardous materials?',
    answers: [
      'Only for international shipments',
      'For all hazardous materials shipments',
      'Only for liquid hazardous materials',
      'Only when transporting more than 1000 pounds of hazardous materials'
    ],
    correctAnswers: ['For all hazardous materials shipments'],
    explanation: 'Shipping papers are required for all hazardous materials shipments, regardless of quantity or destination.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-5',
    question: 'What information must be included on shipping papers for hazardous materials?',
    answers: [
      'Only the shippers address',
      'The drivers personal information',
      'The proper shipping name, hazard class, and identification number',
      'The vehicles make and model'
    ],
    correctAnswers: ['The proper shipping name, hazard class, and identification number'],
    explanation: 'Shipping papers must include the proper shipping name, hazard class, and identification number of the hazardous materials being transported.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-6',
    question: 'Where should hazardous materials shipping papers be kept while driving?',
    answers: [
      'In the trunk',
      'Within immediate reach of the driver',
      'In the sleeper berth',
      'They can be stored anywhere in the vehicle'
    ],
    correctAnswers: ['Within immediate reach of the driver'],
    explanation: 'Hazardous materials shipping papers must be kept within immediate reach of the driver while driving.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-7',
    question: 'What is the minimum distance you should park from a bridge, tunnel, or building when transporting Division 1.1, 1.2, or 1.3 explosives?',
    answers: [
      '20 feet',
      '50 feet',
      '100 feet',
      '300 feet'
    ],
    correctAnswers: ['300 feet'],
    explanation: 'When transporting Division 1.1, 1.2, or 1.3 explosives, you must park at least 300 feet from bridges, tunnels, or buildings.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-8',
    question: 'What should a driver do if hazardous materials are leaking from the vehicle?',
    answers: [
      'Continue driving to the nearest service station',
      'Stop immediately and call for help',
      'Try to fix the leak without stopping',
      'Ignore it if its a small leak'
    ],
    correctAnswers: ['Stop immediately and call for help'],
    explanation: 'If hazardous materials are leaking, the driver should stop immediately and call for help. Do not continue driving with a leak.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-9',
    question: 'What is the purpose of the Emergency Response Guidebook (ERG)?',
    answers: [
      'To provide entertainment during long trips',
      'To list truck stops and rest areas',
      'To help identify hazardous materials and respond to emergencies',
      'To provide road maps'
    ],
    correctAnswers: ['To help identify hazardous materials and respond to emergencies'],
    explanation: 'The Emergency Response Guidebook (ERG) helps identify specific or generic hazards of materials and provides guidance for protecting responders and the public during hazardous materials incidents.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-10',
    question: 'What does the term "compatibility" mean in relation to hazardous materials?',
    answers: [
      'Materials that look alike',
      'Materials that can be safely loaded together',
      'Materials from the same manufacturer',
      'Materials with the same color'
    ],
    correctAnswers: ['Materials that can be safely loaded together'],
    explanation: 'Compatibility in hazardous materials transportation refers to materials that can be safely loaded, transported, or stored together without risk of dangerous interactions.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-11',
    question: 'What is the proper way to load hazardous materials in a cargo tank?',
    answers: [
      'As quickly as possible',
      'Only during daylight hours',
      'According to the proper loading sequence and weight distribution',
      'In any order as long as they fit'
    ],
    correctAnswers: ['According to the proper loading sequence and weight distribution'],
    explanation: 'Hazardous materials must be loaded in cargo tanks according to the proper loading sequence and weight distribution to ensure safe transportation.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-12',
    question: 'What should you do if you discover a fire in your cargo of explosives during transport?',
    answers: [
      'Try to fight the fire',
      'Drive faster to reach the destination quickly',
      'Park the vehicle and leave the area immediately',
      'Open all doors to ventilate the vehicle'
    ],
    correctAnswers: ['Park the vehicle and leave the area immediately'],
    explanation: 'If you discover a fire in a cargo of explosives, park the vehicle and leave the area immediately. Do not attempt to fight the fire.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-13',
    question: 'What is the purpose of the segregation table for hazardous materials?',
    answers: [
      'To determine which materials can be legally transported',
      'To show which materials can be safely stored together',
      'To list the prices of different hazardous materials',
      'To indicate the shelf life of materials'
    ],
    correctAnswers: ['To show which materials can be safely stored together'],
    explanation: 'The segregation table for hazardous materials shows which materials can be safely stored together without risk of dangerous interactions.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-14',
    question: 'What does the term "subsidiary hazard" mean?',
    answers: [
      'A less important hazard',
      'A secondary hazard in addition to the primary hazard',
      'A hazard that only applies to certain states',
      'A hazard that only occurs during accidents'
    ],
    correctAnswers: ['A secondary hazard in addition to the primary hazard'],
    explanation: 'A subsidiary hazard is a secondary hazard that a material may possess in addition to its primary hazard class.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-15',
    question: 'What is the minimum age requirement for drivers transporting hazardous materials?',
    answers: [
      '18 years old',
      '21 years old',
      '25 years old',
      'There is no minimum age requirement'
    ],
    correctAnswers: ['21 years old'],
    explanation: 'Drivers must be at least 21 years old to transport hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-16',
    question: 'What should you do if you are in an accident involving hazardous materials?',
    answers: [
      'Leave the scene immediately',
      'Try to clean up the spill yourself',
      'Notify authorities and provide them with the shipping papers',
      'Move the vehicle to a less crowded area'
    ],
    correctAnswers: ['Notify authorities and provide them with the shipping papers'],
    explanation: 'In case of an accident involving hazardous materials, notify authorities immediately and provide them with the shipping papers for the hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-17',
    question: 'What does the term "reportable quantity" mean in hazardous materials transportation?',
    answers: [
      'The maximum amount that can be transported',
      'The minimum amount that requires placarding',
      'The amount that must be reported if spilled',
      'The amount exempt from regulations'
    ],
    correctAnswers: ['The amount that must be reported if spilled'],
    explanation: 'Reportable quantity refers to the amount of a hazardous material that, if spilled, must be reported to the appropriate authorities.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-18',
    question: 'What is the purpose of the UN/NA identification number for hazardous materials?',
    answers: [
      'To indicate the price of the material',
      'To identify the specific or generic hazardous material',
      'To show the manufacturing date',
      'To display the expiration date'
    ],
    correctAnswers: ['To identify the specific or generic hazardous material'],
    explanation: 'The UN/NA identification number is used to identify specific or generic hazardous materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-19',
    question: 'What does the term "oxidizer" mean in hazardous materials classification?',
    answers: [
      'A material that removes oxygen from the air',
      'A material that yields oxygen to support combustion',
      'A material that prevents oxidation',
      'A material used in welding'
    ],
    correctAnswers: ['A material that yields oxygen to support combustion'],
    explanation: 'An oxidizer is a material that yields oxygen to support the combustion of other materials.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-1-20',
    question: 'What is the purpose of the "toxic inhalation hazard" designation?',
    answers: [
      'To indicate materials that are only dangerous when inhaled',
      'To show materials that produce toxic gas when exposed to water',
      'To identify gases that are poisonous by inhalation',
      'To mark materials that have a strong odor'
    ],
    correctAnswers: ['To identify gases that are poisonous by inhalation'],
    explanation: 'The "toxic inhalation hazard" designation is used to identify gases and volatile liquids that are poisonous when inhaled.',
    questionTag: 'hazmat'
  }
];