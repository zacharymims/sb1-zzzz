import { Question } from '../../../../types';

export const coloradoPassenger4: Question[] = [
  {
    id: 'pe-4-1',
    question: 'What is the primary purpose of requiring a passenger (P) endorsement?',
    answers: [
      'To allow drivers to operate any commercial vehicle',
      'To ensure drivers are qualified to safely transport passengers',
      'To permit operation of vehicles designed for hazardous materials',
      'To increase driver revenue'
    ],
    correctAnswers: ['To ensure drivers are qualified to safely transport passengers'],
    explanation: 'The primary purpose of the passenger (P) endorsement is to ensure that drivers are qualified to safely transport passengers in vehicles designed to carry 16 or more people, including the driver.',
    questionTag: 'passenger-endorsement'
  },
  {
    id: 'pe-4-2',
    question: 'Which of the following vehicles requires a passenger endorsement?',
    answers: [
      'A vehicle designed to transport 10 passengers',
      'A vehicle designed to transport 15 passengers',
      'A vehicle designed to transport 16 or more passengers',
      'Any vehicle that can carry more than 5 passengers'
    ],
    correctAnswers: ['A vehicle designed to transport 16 or more passengers'],
    explanation: 'A passenger endorsement is required for vehicles designed to transport 16 or more people, including the driver.',
    questionTag: 'passenger-endorsement'
  },
  {
    id: 'pe-4-3',
    question: 'What additional test must be passed to obtain a passenger endorsement?',
    answers: [
      'A written test only',
      'A skills test only',
      'Both a written and skills test',
      'No additional tests are required'
    ],
    correctAnswers: ['Both a written and skills test'],
    explanation: 'To obtain a passenger endorsement, drivers must pass both a written knowledge test and a skills test in a passenger vehicle.',
    questionTag: 'passenger-endorsement'
  },
  {
    id: 'pe-4-4',
    question: 'Is a passenger endorsement required for operating a van with a capacity of 15 passengers?',
    answers: [
      'Yes, always',
      'No, never',
      'Only if used for commercial purposes',
      'Only if crossing state lines'
    ],
    correctAnswers: ['No, never'],
    explanation: 'A passenger endorsement is only required for vehicles designed to transport 16 or more passengers, including the driver. A van with a capacity of 15 does not require it.',
    questionTag: 'passenger-endorsement'
  },
  {
    id: 'pe-4-5',
    question: 'What type of vehicle requires both a passenger (P) and school bus (S) endorsement?',
    answers: [
      'Any bus used for public transportation',
      'Vehicles transporting students to school',
      'Only large school buses over 30 feet long',
      'Any vehicle that can carry more than 10 passengers'
    ],
    correctAnswers: ['Vehicles transporting students to school'],
    explanation: 'To operate a school bus that transports students, both the passenger (P) and school bus (S) endorsements are required.',
    questionTag: 'passenger-endorsement'
  },
  {
    id: 'pe-4-6',
    question: 'Can a driver with a Class B CDL and a passenger endorsement operate any bus?',
    answers: [
      'Yes, all types of buses are allowed',
      'No, they can only operate Class B buses',
      'Only if they have additional training',
      'Only if they do not have an air brake restriction'
    ],
    correctAnswers: ['No, they can only operate Class B buses'],
    explanation: 'A driver with a Class B CDL can operate buses that fall within Class B specifications but cannot operate Class A vehicles without the appropriate class of CDL.',
    questionTag: 'passenger-endorsement'
  },
  {
    id: 'pe-4-7',
    question: "What should drivers do before transporting passengers?",
    answers: [
      "Inspect the vehicle for safety",
      "Plan the route carefully",
      "Check weather conditions",
      "All of the above"
    ],
    correctAnswers: ['All of the above'],
    explanation: "Drivers should inspect their vehicles for safety, plan their routes carefully, and check weather conditions before transporting passengers.",
    questionTag: 'passenger-endorsement'
  },
  {
   id:'pe-4-8', 
   question:'Is a passenger endorsement required for drivers operating personal vehicles like RVs?', 
   answers:[
       "Yes, if it carries more than 16 people", 
       "No, personal use is exempt", 
       "Only if used for commercial purposes", 
       "Only if crossing state lines"
   ], 
   correctAnswers:['No, personal use is exempt'], 
   explanation:'Personal RVs used for family transportation are exempt from CDL requirements.', 
   questionTag:'passenger-endorsement' 
  },
  {
   id:'pe-4-9', 
   question:'What is one requirement when transporting children in a school bus?', 
   answers:[
       "Children must be seated at all times", 
       "Children can stand while the bus is moving", 
       "Children do not need seat belts", 
       "Children can sit in the aisle"
   ], 
   correctAnswers:['Children must be seated at all times'], 
   explanation:'When transporting children in a school bus, it is important that they remain seated at all times for safety.', 
   questionTag:'passenger-endorsement' 
  },
  {
   id:'pe-4-10', 
   question:'What should drivers do if they encounter an emergency while transporting passengers?', 
   answers:[
       "Continue driving until reaching their destination", 
       "Pull over safely and assess the situation", 
       "Call emergency services while driving", 
       "Ignore it if it seems minor"
   ], 
   correctAnswers:['Pull over safely and assess the situation'], 
   explanation:'If drivers encounter an emergency while transporting passengers, they should pull over safely and assess the situation before taking further action.', 
   questionTag:'passenger-endorsement' 
  },
  {
   id:'pe-4-11',  
   question:'Is training required for drivers who wish to obtain a passenger endorsement?',  
   answers:[
       "Yes, specific training on safety considerations is required",  
       "No training is needed",  
       "Only refresher training every few years is needed",  
       "Training is optional"
     ],  
     correctAnswers:['Yes, specific training on safety considerations is required'],  
     explanation:'Training on safety considerations when transporting passengers is required before obtaining a passenger endorsement.',  
     questionTag:'passenger-endorsement'  
 },
 {
     id:'pe-4-12',    
     question:'What does it mean if a vehicle has an air brake system?',    
     answers:[
         "It requires special training to operate",    
         "It cannot be used in inclement weather",    
         "It has no impact on driving safety",    
         "It indicates lower maintenance costs"
     ],    
     correctAnswers:['It requires special training to operate'],    
     explanation:'Vehicles equipped with air brakes require special training due to their unique operating characteristics and maintenance needs.',    
     questionTag:'passenger-endorsement'    
 },
 {
     id:'pe-4-13',    
     question:'What should you do if you need to make an emergency stop while transporting passengers?',    
     answers:[
         "Stop suddenly without warning",    
         "Alert passengers before stopping",    
         "Use your horn as you stop",    
         "Drive faster to find a safe place"
     ],    
     correctAnswers:['Alert passengers before stopping'],    
     explanation:'When making an emergency stop while transporting passengers, alerting them helps ensure their safety during the sudden stop.',    
     questionTag:'passenger-endorsement'    
 },
 {
     id:'pe-4-14',     
     question:'What type of insurance may be required for operating a vehicle with a passenger endorsement?',     
     answers:[
         "Basic liability insurance only",     
         "Comprehensive insurance only",     
         "Liability insurance covering passenger transport",     
         "No insurance is needed"
     ],     
     correctAnswers:['Liability insurance covering passenger transport'],     
     explanation:'When operating vehicles designed for passenger transport, liability insurance covering such operations may be required.',     
     questionTag:'passenger-endorsement'     
 },
 {
     id:'pe-4-15',     
     question:'What should you do if you receive complaints about your driving while transporting passengers?',     
     answers:[
         "Ignore them as they are not valid",     
         "Take them seriously and evaluate your driving habits",     
         "Blame other drivers for your mistakes",     
         "Defend your actions aggressively"
     ],     
     correctAnswers:['Take them seriously and evaluate your driving habits'],     
     explanation:'Complaints about driving should be taken seriously as they may indicate unsafe practices that need addressing.',     
     questionTag:'passenger-endorsement'     
 },
 {
     id:'pe-4-16',      
     question:'Is it permissible to use electronic devices while driving with passengers?',      
     answers:[
         "Yes, as long as you are careful",      
         "No, it is strictly prohibited" ,      
         "Only hands-free devices are allowed" ,      
         "Only during long stops"
        ],      
        correctAnswers:['No, it is strictly prohibited'],      
        explanation:"Using electronic devices while driving with passengers is prohibited due to safety concerns.",      
        questionTag:"passenger-endorsement"      
},
{
id:'pe-4-17',      
question:"What does it mean if your CDL has restrictions?",      
answers:[      
"It allows you to drive any commercial vehicle without limitations",      
"It indicates limitations on what types of vehicles you can drive",      
"It means you cannot drive at night",      
"It signifies that you have passed all tests"
],      
correctAnswers:["It indicates limitations on what types of vehicles you can drive"],      
explanation:"Restrictions on your CDL indicate limitations regarding what types of vehicles you are authorized to drive.",      
questionTag:"passenger-endorsement"      
},
{
id:'pe-4-18',      
question:"What is one reason why regular training may be necessary after obtaining your passenger endorsement?",      
answers:[      
"To maintain compliance with changing regulations",      
"To increase your pay rate",      
"To reduce your workload",      
"To avoid taking additional tests"
],      
correctAnswers:["To maintain compliance with changing regulations"],      
explanation:"Regular training helps ensure that drivers remain compliant with any changes in regulations governing passenger transportation.",      
questionTag:"passenger-endorsement"      
},
{
id:'pe-4-19',       
question:"What action should you take if you feel unwell before starting your shift as a driver?",       
answers:[       
"Drive anyway; you will feel better later",       
"Notify your supervisor and seek assistance or rest",       
"Ignore it; it will not affect your performance",       
"Take medication and continue driving"
],       
correctAnswers:["Notify your supervisor and seek assistance or rest"],       
explanation:"If feeling unwell before starting your shift, notify your supervisor and seek assistance or rest to ensure safety during transportation.",       
questionTag:"passenger-endorsement"       
},
{
id:'pe-4-20',       
question:"What should be done if there are signs of fatigue during long trips with passengers?",       
answers:[       
"Push through; you will feel better soon",       
"Take regular breaks and switch drivers if possible",       
"Drink energy drinks to stay awake",       
"Ignore fatigue; it does not affect driving ability"
],       
correctAnswers:["Take regular breaks and switch drivers if possible"],       
explanation:"Taking regular breaks and switching drivers helps manage fatigue during long trips with passengers.",       
questionTag:"passenger-endorsment"       
}
];