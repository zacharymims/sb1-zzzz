import { Question } from '../../../../types';

export const alabamaAirBrakes3: Question[] = [
  {
    id: 'ab-3-1',
    question: 'What is a dual air brake system?',
    answers: [
      'A single system that operates all brakes',
      'Two separate air brake systems using one control',
      'A system that uses hydraulic pressure',
      'A system designed only for trailers'
    ],
    correctAnswers: ['Two separate air brake systems using one control'],
    explanation: 'A dual air brake system consists of two separate systems that share a single set of controls, providing redundancy for safety.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-3-2',
    question: 'What are slack adjusters used for in an air brake system?',
    answers: [
      'To adjust the air compressor',
      'To maintain proper brake shoe positioning',
      'To measure air pressure',
      'To control the parking brake'
    ],
    correctAnswers: ['To maintain proper brake shoe positioning'],
    explanation: 'Slack adjusters ensure that the brake shoes are properly positioned for effective braking performance.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-3-3',
    question: 'How can you check slack adjusters during an inspection?',
    answers: [
      'By visually inspecting them only',
      'By pulling hard on each adjuster you can reach',
      'By checking their lubrication levels',
      'By testing the brakes while driving'
    ],
    correctAnswers: ['By pulling hard on each adjuster you can reach'],
    explanation: 'You should pull hard on slack adjusters to ensure they are properly adjusted; excessive movement indicates they need adjustment.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-3-4',
    question: 'What is the purpose of testing the low pressure warning signal?',
    answers: [
      'To ensure it activates before pressure drops below 60 psi',
      'To check if the air compressor is functioning',
      'To monitor brake fluid levels',
      'To measure tire pressure'
    ],
    correctAnswers: ['To ensure it activates before pressure drops below 60 psi'],
    explanation: 'The low pressure warning signal must activate before the air pressure in the tanks falls below 60 psi to alert the driver of potential issues.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-3-5',
    question: 'How can you verify that spring brakes engage automatically?',
    answers: [
      'By observing the brake lights',
      'By reducing air pressure and checking if they activate',
      'By testing the service brakes only',
      'By checking tire wear'
    ],
    correctAnswers: ['By reducing air pressure and checking if they activate'],
    explanation: 'You can check if spring brakes engage by fanning off the air pressure and observing if they activate at specified low pressures.',
    questionTag: 'air brakes'
  },
  {
   id:'ab-3-6', 
   question:'What are the maximum allowable leakage rates for air brake systems?', 
   answers:[
       "Less than two psi per minute for single vehicles", 
       "Less than three psi per minute for combination vehicles", 
       "Both A and B", 
       "There are no limits"
   ], 
   correctAnswers:["Both A and B"], 
   explanation:"The maximum allowable leakage rates are less than two psi per minute for single vehicles and less than three psi per minute for combination vehicles.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-3-7', 
   question:'What happens when you push down on the brake pedal in an air brake system?', 
   answers:[
       "Air is released from the tanks",
       "Air is let into each brake chamber",
       "The vehicle accelerates",
       "The parking brake engages"
   ], 
   correctAnswers:["Air is let into each brake chamber"], 
   explanation:"Pushing down on the brake pedal allows compressed air to enter each brake chamber, applying the brakes.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-3-8', 
   question:'What should you do if your vehicle has automatic slack adjusters but they are out of adjustment?', 
   answers:[
       "Manually adjust them yourself",
       "Take it to a repair facility immediately",
       "Ignore it since they are automatic",
       "Adjust them during your next trip"
   ], 
   correctAnswers:["Take it to a repair facility immediately"], 
   explanation:"If automatic slack adjusters are out of adjustment, it indicates a mechanical problem that requires professional attention.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-3-9',  
   question:'What does a safety relief valve do in an air brake system?',  
   answers:[
       "Controls air compressor speed",
       "Protects against excessive pressure in tanks",
       "Regulates braking force",
       "Maintains tire pressure"
     ],  
     correctAnswers:["Protects against excessive pressure in tanks"],  
     explanation:"The safety relief valve prevents overpressure in the tank, typically set to open at around 150 psi.",  
     questionTag:"air brakes"  
  },  
  {
     id:'ab-3-10',  
     question:'What should you do if your low air pressure warning light comes on while driving?',  
     answers:[
         "Continue driving until you reach your destination",
         "Pull over safely and investigate immediately",
         "Ignore it if it stops after a few seconds",
         "Accelerate to build up more pressure"
     ],  
     correctAnswers:["Pull over safely and investigate immediately"],  
     explanation:"If the low air pressure warning light activates, pull over immediately to check for issues before continuing your trip.",  
     questionTag:"air brakes"  
  },  
  {
     id:'ab-3-11',   
     question:'What should be done during a pre-trip inspection regarding parking brakes?',   
     answers:[
         "Test that they hold when engaged",
         "Check their color",
         "Ensure they are not needed",
         "Leave them disengaged"
     ],   
     correctAnswers:["Test that they hold when engaged"],   
     explanation:"During pre-trip inspections, always test parking brakes to confirm they function properly and will hold the vehicle in place.",   
     questionTag:"air brakes"   
  },   
  {
     id:'ab-3-12',    
     question:'How does an alcohol evaporator help an air brake system?',    
     answers:[
         "It increases braking power",
         "It prevents ice formation in cold weather",
         "It lubricates moving parts",
         "It reduces wear on tires"
     ],    
     correctAnswers:["It prevents ice formation in cold weather"],    
     explanation:"An alcohol evaporator introduces alcohol into the air system to reduce ice buildup in cold conditions, ensuring proper braking function.",    
     questionTag:"air brakes"    
  },    
  {
     id:'ab-3-13',     
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
        id:'ab-3-14',     
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
        id:'ab-3-15',     
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
        id:'ab-3-16',     
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
