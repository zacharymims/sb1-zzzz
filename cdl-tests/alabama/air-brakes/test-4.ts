import { Question } from '../../../../types';

export const alabamaAirBrakes4: Question[] = [
  {
    id: 'ab-4-1',
    question: 'What is the primary function of the air compressor in an air brake system?',
    answers: [
      'To cool the air system',
      'To pump air into the storage tanks',
      'To release excess pressure',
      'To monitor brake performance'
    ],
    correctAnswers: ['To pump air into the storage tanks'],
    explanation: 'The air compressor pumps compressed air into the storage tanks, providing necessary pressure for braking operations.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-4-2',
    question: 'What does the air compressor governor control?',
    answers: [
      'The temperature of the air',
      'When the compressor pumps air into storage tanks',
      'The pressure in the brake lines',
      'The speed of the vehicle'
    ],
    correctAnswers: ['When the compressor pumps air into storage tanks'],
    explanation: 'The governor regulates when the air compressor starts and stops pumping based on tank pressure levels.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-4-3',
    question: 'What is the purpose of air storage tanks in an air brake system?',
    answers: [
      'To hold compressed air for braking',
      'To cool down the brake system',
      'To store brake fluid',
      'To increase vehicle weight'
    ],
    correctAnswers: ['To hold compressed air for braking'],
    explanation: 'Air storage tanks hold compressed air, allowing for multiple brake applications even if the compressor stops working.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-4-4',
    question: 'Why is it important to drain air tanks at the end of each day?',
    answers: [
      'To increase tank pressure',
      'To remove moisture and prevent freezing',
      'To check for leaks',
      'To maintain tire pressure'
    ],
    correctAnswers: ['To remove moisture and prevent freezing'],
    explanation: 'Draining removes moisture that can freeze and cause brake failure, especially in cold weather conditions.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-4-5',
    question: 'What role does an alcohol evaporator play in some air brake systems?',
    answers: [
      'It lubricates moving parts',
      'It prevents ice formation in cold weather',
      'It increases braking power',
      'It reduces wear on tires'
    ],
    correctAnswers: ['It prevents ice formation in cold weather'],
    explanation: "An alcohol evaporator introduces alcohol into the air system to reduce ice buildup during cold conditions.",
    questionTag: 'air brakes'
  },
  {
   id:'ab-4-6', 
   question:'What is a safety relief valve designed to do?', 
   answers:[
       "Control airflow",
       "Protect against excessive pressure",
       "Regulate braking force",
       "Monitor tire pressure"
   ], 
   correctAnswers:["Protect against excessive pressure"], 
   explanation:"The safety relief valve prevents overpressure in the tank, typically set to open at around 150 psi.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-4-7', 
   question:'How does the brake pedal function in an air brake system?', 
   answers:[
       "It controls engine speed",
       "It applies and releases brakes by regulating air pressure",
       "It only engages parking brakes",
       "It monitors tire pressure"
   ], 
   correctAnswers:["It applies and releases brakes by regulating air pressure"], 
   explanation:"Pushing down on the brake pedal allows compressed air to enter each brake chamber, applying the brakes accordingly.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-4-8', 
   question:'What are foundation brakes used for?', 
   answers:[
       "To provide emergency stopping power",
       "To engage parking brakes",
       "To stop each wheel of a vehicle",
       "To monitor tire wear"
   ], 
   correctAnswers:["To stop each wheel of a vehicle"], 
   explanation:"Foundation brakes are used at each wheel to provide stopping power, with s-cam drum brakes being the most common type.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-4-9',  
   question:'How does an S-cam brake work?',  
   answers:[
       "By using hydraulic fluid to apply pressure",
       "By twisting a camshaft that pushes brake shoes against a drum",
       "By using electric signals to engage brakes",
       "By applying spring tension only"
     ],  
     correctAnswers:["By twisting a camshaft that pushes brake shoes against a drum"],  
     explanation:"In S-cam brakes, pressing the pedal allows air into each chamber, pushing rods that twist a camshaft and apply braking force.",  
     questionTag:"air brakes"  
  },  
  {
     id:'ab-4-10',  
     question:'What should you check during a pre-trip inspection regarding slack adjusters?',  
     answers:[
         "They should be visually inspected only",
         "They must not move more than one inch where attached to push rods",
         "They should be lubricated daily",
         "They do not need checking if automatic"
     ],  
     correctAnswers:["They must not move more than one inch where attached to push rods"],  
     explanation:"During inspections, slack adjusters should not move excessively; if they do, they may need adjustment to ensure proper braking.",  
     questionTag:"air brakes"  
  },  
  {
     id:'ab-4-11',   
     question:'What is indicated by a low air pressure warning signal?',   
     answers:[
         "That everything is functioning correctly",
         "That there may be an issue with your braking system",
         "That you need more fuel",
         "That your tires need checking"
     ],   
     correctAnswers:["That there may be an issue with your braking system"],   
     explanation:"A low air pressure warning indicates that there may be an issue with the air brake system that needs immediate attention.",   
     questionTag:"air brakes"   
  },   
  {
     id:'ab-4-12',    
     question:'How does an alcohol evaporator help an air brake system?',    
     answers:[
         "It increases braking power",
         "It prevents ice formation in cold weather",
         "It lubricates moving parts",
         "It reduces wear on tires"
     ],    
     correctAnswers:["It prevents ice formation in cold weather"],    
     explanation:"An alcohol evaporator introduces alcohol into the air system to reduce ice buildup during cold conditions, ensuring proper braking function.",    
     questionTag:"air brakes"    
  },    
  {
     id:'ab-4-13',     
     question:'What is indicated by a malfunctioning ABS warning light?',     
     answers:[
         "The ABS is working correctly",
         "There may be an issue with ABS control at one or more wheels",
         "The vehicle has no regular braking capability",
         "The vehicle is not equipped with ABS"
     ],     
     correctAnswers:["There may be an issue with ABS control at one or more wheels"],     
     explanation:"A malfunctioning ABS warning light indicates potential issues with ABS functionality that need attention.",     
     questionTag:"air brakes"     
  },     
  {
        id:'ab-4-14',     
        question:'What should be done if you experience brake fade while driving?',     
        answers:[
            "Continue using the same braking technique",
            "Increase application pressure continuously",
            "Slow down and shift to a lower gear",
            "Stop immediately without checking anything"
        ],     
        correctAnswers:["Slow down and shift to a lower gear"],     
        explanation:"If you notice fading brakes, slowing down and using a lower gear helps reduce reliance on service brakes, preventing further fade.",     
        questionTag:"air brakes"     
   },     
   {
        id:'ab-4-15',     
        question:'When should you use wheel chocks with your vehicle?',     
        answers:[
            "When parked on level ground without using parking brakes",
            "Only when parked on steep grades",
            "Whenever you leave your vehicle unattended",
            "Only during long stops"
        ],     
        correctAnswers:["Whenever you leave your vehicle unattended"],     
        explanation:"Wheel chocks should always be used when leaving a vehicle unattended to prevent it from rolling away.",     
        questionTag:"air brakes"     
   },     
   {
        id:'ab-4-16',     
        question:'How does antilock braking systems (ABS) assist drivers during braking?',     
        answers:[
            "It increases stopping distance significantly",
            "It prevents wheel lockup during hard braking applications",
            "It replaces normal braking functions entirely",
            "It only works on slippery surfaces"
        ],     
        correctAnswers:["It prevents wheel lockup during hard braking applications"],     
        explanation:"ABS helps maintain steering control by preventing wheels from locking up during hard braking situations.",     
        questionTag:"air brakes"     
   },     
];
