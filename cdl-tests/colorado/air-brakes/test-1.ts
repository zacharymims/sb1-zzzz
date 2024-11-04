import { Question } from '../../../../types';

export const coloradoAirBrakes1: Question[] = [
  {
    id: 'ab1-1',
    question: 'What is the main purpose of the air compressor in an air brake system?',
    answers: [
      'To apply the brakes',
      'To compress air to store in the tanks',
      'To regulate brake fluid',
      'To release brake pressure'
    ],
    correctAnswers: ['To compress air to store in the tanks'],
    explanation: 'The air compressor generates compressed air and stores it in tanks for braking.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-2',
    question: 'What is the function of the air dryer in an air brake system?',
    answers: [
      'To cool down the brakes',
      'To remove moisture from the air',
      'To store extra compressed air',
      'To release excess pressure'
    ],
    correctAnswers: ['To remove moisture from the air'],
    explanation: 'The air dryer removes moisture to prevent freezing in cold weather.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-3',
    question: 'What does the low air pressure warning signal alert the driver to?',
    answers: [
      'High brake fluid level',
      'Low air tank pressure',
      'Brake overheating',
      'Brake malfunction'
    ],
    correctAnswers: ['Low air tank pressure'],
    explanation: 'The low air pressure warning alerts the driver when air pressure drops below safe levels.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-4',
    question: 'At what psi should the low air pressure warning signal activate?',
    answers: [
      '20-30 psi',
      '50-60 psi',
      '70-80 psi',
      '90-100 psi'
    ],
    correctAnswers: ['50-60 psi'],
    explanation: 'The low air pressure warning is required to activate when air pressure drops to around 60 psi.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-5',
    question: 'What is a dual air brake system?',
    answers: [
      'Two sets of air brakes for the front and back',
      'An air brake system with an extra air compressor',
      'A system with separate air circuits for safety',
      'A system with two brake pedals'
    ],
    correctAnswers: ['A system with separate air circuits for safety'],
    explanation: 'A dual air brake system has two separate circuits to ensure safety if one circuit fails.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-6',
    question: 'What is the purpose of the slack adjuster?',
    answers: [
      'To adjust brake pedal height',
      'To maintain proper brake shoe-to-drum distance',
      'To increase air tank pressure',
      'To reduce brake lag'
    ],
    correctAnswers: ['To maintain proper brake shoe-to-drum distance'],
    explanation: 'The slack adjuster keeps the correct distance between brake shoes and drums to ensure effective braking.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-7',
    question: 'When should you use the parking brake in an air brake system?',
    answers: [
      'Only when parked on a hill',
      'Whenever you leave the vehicle',
      'Only during emergency stops',
      'Whenever the low air pressure warning comes on'
    ],
    correctAnswers: ['Whenever you leave the vehicle'],
    explanation: 'The parking brake should be used anytime the driver leaves the vehicle to prevent unintended movement.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-8',
    question: 'What are spring brakes used for?',
    answers: [
      'For emergency braking only',
      'As the primary braking system',
      'To automatically apply brakes when air pressure is low',
      'To control brake temperature'
    ],
    correctAnswers: ['To automatically apply brakes when air pressure is low'],
    explanation: 'Spring brakes engage automatically when air pressure drops below a certain threshold, serving as a safety feature.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-9',
    question: 'Why should you regularly drain the air tanks?',
    answers: [
      'To increase air compressor efficiency',
      'To remove water and prevent freezing',
      'To improve air brake response time',
      'To maintain tire pressure'
    ],
    correctAnswers: ['To remove water and prevent freezing'],
    explanation: 'Draining the air tanks removes moisture that can freeze and cause brake failure in cold conditions.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-10',
    question: 'What does the air gauge measure in an air brake system?',
    answers: [
      'The amount of air in the tires',
      'The temperature of the brake pads',
      'The pressure in the air brake tanks',
      'The level of brake fluid'
    ],
    correctAnswers: ['The pressure in the air brake tanks'],
    explanation: 'The air gauge measures the pressure in the air brake system, indicating when brakes can be applied safely.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-11',
    question: 'When should the air tanks be drained in an air brake system?',
    answers: [
      'Once a month',
      'Every week',
      'At the end of each day',
      'Only if there is low air pressure'
    ],
    correctAnswers: ['At the end of each day'],
    explanation: 'To maintain the air brake system, air tanks should be drained daily to remove moisture and contaminants.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-12',
    question: 'Which component helps to release the spring brakes?',
    answers: [
      'Parking brake',
      'Air compressor',
      'Brake pedal',
      'Air release valve'
    ],
    correctAnswers: ['Air release valve'],
    explanation: 'The air release valve releases air pressure, which disengages the spring brakes when pressure is restored.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-13',
    question: 'How often should you inspect the slack adjusters on an air brake system?',
    answers: [
      'Every month',
      'Every day during pre-trip inspection',
      'Only when brake performance declines',
      'Once every year'
    ],
    correctAnswers: ['Every day during pre-trip inspection'],
    explanation: 'Slack adjusters should be inspected daily as part of the pre-trip inspection to ensure they are functioning correctly.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-14',
    question: 'What psi range should the air pressure build up to before you start driving?',
    answers: [
      '20-40 psi',
      '40-60 psi',
      '80-100 psi',
      '100-125 psi'
    ],
    correctAnswers: ['100-125 psi'],
    explanation: 'The air pressure should build up to between 100 and 125 psi before driving to ensure sufficient braking power.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-15',
    question: 'When should the air brake safety valve release air?',
    answers: [
      'When pressure reaches around 150 psi',
      'At 60 psi',
      'When the compressor stops',
      'Only in an emergency'
    ],
    correctAnswers: ['When pressure reaches around 150 psi'],
    explanation: 'The safety valve releases air automatically if pressure reaches 150 psi to prevent overpressure.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-16',
    question: 'What should you do if the low air pressure warning signal comes on?',
    answers: [
      'Continue driving to the nearest repair facility',
      'Stop immediately and inspect the brakes',
      'Pump the brakes to increase pressure',
      'Release the parking brake'
    ],
    correctAnswers: ['Stop immediately and inspect the brakes'],
    explanation: 'If the low air pressure warning comes on, stop immediately to avoid brake failure and inspect the brakes.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-17',
    question: 'What is brake fade?',
    answers: [
      'A decrease in brake efficiency due to overheating',
      'A delay in brake response time',
      'An increase in air pressure',
      'A buildup of moisture in the air tanks'
    ],
    correctAnswers: ['A decrease in brake efficiency due to overheating'],
    explanation: 'Brake fade is the loss of braking power that occurs when brakes overheat due to excessive use.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-18',
    question: 'How can you prevent brake fade?',
    answers: [
      'By applying the brakes harder',
      'By maintaining a low gear on downhill grades',
      'By using the parking brake periodically',
      'By releasing the brakes every 5 minutes'
    ],
    correctAnswers: ['By maintaining a low gear on downhill grades'],
    explanation: 'To prevent brake fade, maintain a low gear on downhill grades and avoid constant brake application.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-19',
    question: 'What is the maximum air leakage rate for a straight truck or bus with the brakes applied?',
    answers: [
      '3 psi in one minute',
      '4 psi in one minute',
      '5 psi in one minute',
      '6 psi in one minute'
    ],
    correctAnswers: ['3 psi in one minute'],
    explanation: 'The air leakage rate for a straight truck or bus should not exceed 3 psi in one minute with brakes applied.',
    questionTag: 'air-brakes-1'
  },
  {
    id: 'ab1-20',
    question: 'What is the purpose of the anti-compounding valve in an air brake system?',
    answers: [
      'To prevent brake fade',
      'To reduce the buildup of brake pressure',
      'To prevent spring and service brakes from applying together',
      'To enhance brake power'
    ],
    correctAnswers: ['To prevent spring and service brakes from applying together'],
    explanation: 'The anti-compounding valve prevents the application of both spring and service brakes simultaneously, protecting the brake components.',
    questionTag: 'air-brakes-1'
  },
];

// Repeat with `airBrakes2`, `airBrakes3`, and so on for remaining 80 questions
