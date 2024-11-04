import { Question } from '../../../../types';

export const coloradoCombinationVehicles1: Question[] = [
  {
    id: 'cv-1',
    question: 'In what situation is it appropriate to use the hand valve for parking a combination vehicle?',
    answers: [
      'When parking on a steep grade',
      'When the parking brake is malfunctioning',
      'During routine parking procedures',
      'Never'
    ],
    correctAnswers: ['Never'],
    explanation: 'The hand valve should never be used for parking a combination vehicle. It is designed for testing trailer brakes only.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-2',
    question: 'When testing only the trailer service brakes, what is the correct configuration for the air valves?',
    answers: [
      'Tractor protection valve closed, trailer air supply valve open',
      'Tractor protection valve open, trailer air supply valve closed',
      'Both valves open',
      'Both valves closed'
    ],
    correctAnswers: ['Both valves open'],
    explanation: 'To test only the trailer service brakes, both the tractor protection valve and trailer air supply valve should be open to allow air flow to the trailer brakes.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-3',
    question: 'What is the correct height for a semi-trailer when coupling to a tractor before backing under?',
    answers: [
      'Level with the fifth wheel',
      'Slightly lower than the fifth wheel',
      'Slightly higher than the fifth wheel',
      'As high as the landing gear allows'
    ],
    correctAnswers: ['Slightly higher than the fifth wheel'],
    explanation: 'The trailer should be slightly higher than the fifth wheel when coupling. This allows the kingpin to slide into the fifth wheel as the tractor backs under.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-4',
    question: 'What is the most effective method to test the security of a tractor-trailer connection?',
    answers: [
      'Visually inspect the fifth wheel',
      'Pull forward gently in low gear',
      'Rock the trailer back and forth',
      'Apply the trailer brakes and attempt to pull forward'
    ],
    correctAnswers: ['Apply the trailer brakes and attempt to pull forward'],
    explanation: 'To test the tractor-trailer connection security, apply only the trailer brakes and gently try to pull forward. If the connection is secure, the unit should not move.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-5',
    question: 'What is the correct air valve configuration when testing only the trailer spring/parking brakes?',
    answers: [
      'Tractor protection valve open, trailer air supply valve closed',
      'Tractor protection valve closed, trailer air supply valve open',
      'Both valves open',
      'Both valves closed'
    ],
    correctAnswers: ['Tractor protection valve open, trailer air supply valve closed'],
    explanation: 'To test only the trailer spring/parking brakes, the tractor protection valve should be open and the trailer air supply valve closed.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-6',
    question: 'What happens if your emergency air line breaks or gets pulled apart while driving?',
    answers: [
      'The trailer service brakes will activate',
      'The trailer emergency brakes will come on',
      'The tractor brakes will lock up',
      'The engine will shut off automatically'
    ],
    correctAnswers: ['The trailer emergency brakes will come on'],
    explanation: 'If the emergency air line breaks or gets pulled apart while driving, the loss of pressure will cause the trailer emergency brakes to come on automatically.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-7',
    question: 'How do you supply air to the trailer tanks?',
    answers: [
      'By opening the tractor protection valve',
      'By closing the trailer air supply valve',
      'By pushing in the trailer air supply knob',
      'By applying the service brakes'
    ],
    correctAnswers: ['By pushing in the trailer air supply knob'],
    explanation: 'You supply air to the trailer tanks by pushing in the trailer air supply knob, which opens the tractor protection valve and allows air to flow to the trailer.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-8',
    question: 'Besides keeping the cargo as close to the ground as possible, what else can a driver do to prevent a rollover?',
    answers: [
      'Increase speed in turns',
      'Brake hard in curves',
      'Drive slowly around turns',
      'Shift cargo to one side'
    ],
    correctAnswers: ['Drive slowly around turns'],
    explanation: 'To prevent rollovers, drivers should keep cargo low and drive slowly around turns, avoiding sudden steering movements.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-9',
    question: 'What does it indicate if the fifth wheel locking lever is not locked after the jaws close around the kingpin?',
    answers: [
      'The trailer is too high',
      'The coupling is incomplete',
      'The kingpin is damaged',
      'The fifth wheel needs lubrication'
    ],
    correctAnswers: ['The coupling is incomplete'],
    explanation: 'If the fifth wheel locking lever is not locked after the jaws close around the kingpin, it means the coupling is incomplete and not secure.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-10',
    question: 'What should you expect when backing your tractor under a trailer?',
    answers: [
      'The trailer to lift slightly',
      'The landing gear to collapse',
      'The fifth wheel to automatically lock',
      'Resistance as the fifth wheel meets the trailer plate'
    ],
    correctAnswers: ['The trailer to lift slightly'],
    explanation: 'When backing under a trailer, you should expect the trailer to lift slightly as the fifth wheel makes contact with the trailer plate.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-11',
    question: 'What must you do before starting to uncouple a tractor-trailer?',
    answers: [
      'Release the fifth wheel locking lever',
      'Secure the tractor with parking brakes and chocks',
      'Disconnect the air lines',
      'Lower the landing gear'
    ],
    correctAnswers: ['Secure the tractor with parking brakes and chocks'],
    explanation: 'Before uncoupling, you must secure the tractor with parking brakes and chocks to prevent any movement during the process.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-12',
    question: 'During the uncoupling process, when should you disconnect the electrical cable?',
    answers: [
      'Before lowering the landing gear',
      'After releasing the fifth wheel',
      'Before disconnecting air lines',
      'After pulling away from the trailer'
    ],
    correctAnswers: ['Before disconnecting air lines'],
    explanation: 'During uncoupling, you should disconnect the electrical cable before disconnecting the air lines to prevent potential electrical issues.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-13',
    question: 'What component should you ensure is locked in place and free of damage or air leaks when inspecting air connections between the truck/tractor and trailer?',
    answers: [
      'Gladhands',
      'Couplings',
      'Connectors',
      'Hoses'
    ],
    correctAnswers: ['Gladhands'],
    explanation: 'During inspection, ensure that the gladhands (air line connectors) are locked in place and free of damage or air leaks.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-14',
    question: 'If your vehicle gets stuck on a railroad track, what should you do?',
    answers: [
      'Stay in the vehicle and call for help',
      'Try to drive off the tracks immediately',
      'Exit the vehicle and move away from the tracks',
      'Place reflective triangles on the tracks'
    ],
    correctAnswers: ['Exit the vehicle and move away from the tracks'],
    explanation: 'If your vehicle is stuck on railroad tracks, you should immediately exit the vehicle and move away from the tracks to ensure your safety.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-15',
    question: 'What indicates a successful test of the tractor protection valve?',
    answers: [
      'The trailer brakes release',
      'The tractor brakes engage',
      'You hear air escaping rapidly',
      'The air pressure increases'
    ],
    correctAnswers: ['You hear air escaping rapidly'],
    explanation: 'A successful test of the tractor protection valve should result in hearing air escaping rapidly, indicating the valve is closing to protect the tractor air supply.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-16',
    question: 'Why should you not use the trailer hand brake to straighten out a jackknifing trailer?',
    answers: [
      'It will damage the brake system',
      'It may cause the trailer to skid',
      'It will deplete air pressure too quickly',
      'It only affects the tractor brakes'
    ],
    correctAnswers: ['It may cause the trailer to skid'],
    explanation: 'You should not use the trailer hand brake to straighten a jackknifing trailer because it may cause the trailer to skid, potentially worsening the situation.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-17',
    question: 'Why is it inadvisable to use the trailer hand valve while driving?',
    answers: [
      'It reduces fuel efficiency',
      'It can cause the trailer to skid',
      'It only works when parked',
      'It affects only the tractor brakes'
    ],
    correctAnswers: ['It can cause the trailer to skid'],
    explanation: 'You should not use the trailer hand valve while driving because it can cause the trailer to skid, leading to loss of control or jackknifing.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-18',
    question: 'Under what condition is a trailer most likely to jackknife?',
    answers: [
      'When it is empty',
      'When it is fully loaded',
      'When it is half-loaded',
      'When it is overloaded'
    ],
    correctAnswers: ['When it is empty'],
    explanation: 'A trailer is most likely to jackknife when it is empty because there is less weight over the trailer axles, reducing traction.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-19',
    question: 'What precaution should you take when backing a tractor under a trailer?',
    answers: [
      'Back as quickly as possible',
      'Use the trailer hand valve to brake',
      'Have someone guide you',
      'Keep the tractor doors open'
    ],
    correctAnswers: ['Have someone guide you'],
    explanation: 'When backing a tractor under a trailer, you should have someone guide you to ensure proper alignment and prevent damage.',
    questionTag: 'combination-vehicles'
  },
  {
    id: 'cv-20',
    question: 'What is the primary purpose of the tractor protection valve?',
    answers: [
      'To increase brake power',
      'To protect the tractor air supply',
      'To regulate air pressure',
      'To control the trailer brakes'
    ],
    correctAnswers: ['To protect the tractor air supply'],
    explanation: 'The tractor protection valve\'s primary function is to protect the tractor air supply in case of a trailer breakaway or severe air leak.',
    questionTag: 'combination-vehicles'
  }
];