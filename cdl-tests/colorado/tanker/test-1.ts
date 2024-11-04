import { Question } from '../../../../types';

export const coloradoTanker1: Question[] = [
  {
    id: 'te-1',
    question: 'What characteristic of tankers contributes to their need for special handling due to a higher risk of tipping?',
    answers: [
      'Their elevated center of gravity',
      'Their low profile',
      'Their compact design',
      'Their lightweight materials'
    ],
    correctAnswers: ['Their elevated center of gravity'],
    explanation: 'Tankers have an elevated center of gravity, which increases the likelihood of tipping during sharp turns or sudden maneuvers.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-2',
    question: 'If the front wheels of a tank truck begin to skid, what is the most probable result?',
    answers: [
      'The vehicle may spin out of control',
      'The rear wheels will also skid',
      'The truck will stop immediately',
      'The steering will become ineffective'
    ],
    correctAnswers: ['The vehicle may spin out of control'],
    explanation: 'When the front wheels skid, it can lead to a loss of control, causing the vehicle to spin or veer off course.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-3',
    question: 'What is the recommended distance for a helper to stand while pumping or unloading liquids from a tanker?',
    answers: [
      'At least 5 feet away',
      'At least 10 feet away',
      'At least 15 feet away',
      'At least 20 feet away'
    ],
    correctAnswers: ['At least 10 feet away'],
    explanation: 'Helpers should maintain a distance of at least 10 feet from the tanker during unloading to ensure safety from spills or surges.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-4',
    question: 'In liquid transportation terminology, what does the term outage refer to?',
    answers: [
      'The volume of liquid lost during transport',
      'The empty space left in a tank for expansion',
      'The duration taken for unloading liquids',
      'The distance traveled without stopping'
    ],
    correctAnswers: ['The empty space left in a tank for expansion'],
    explanation: 'Outage refers to the intentional empty space in a tank that allows for liquid expansion due to temperature changes.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-5',
    question: 'What potential issue can arise from side-to-side surge when transporting liquids in a tanker?',
    answers: [
      'Improved fuel efficiency',
      'Loss of vehicle control',
      'Better handling during turns',
      'Shortened stopping distance'
    ],
    correctAnswers: ['Loss of vehicle control'],
    explanation: 'Side-to-side surge can shift the liquid within the tank, leading to instability and possible loss of control while driving.',
    questionTag: 'tanker endorsement'
  },
  {
   id:'te-6', 
   question:'When operating smooth bore tankers, why is it essential to exercise caution', 
   answers:[
       "They are more stable than baffle tanks", 
       "They can experience significant surge during maneuvers", 
       "They are lighter than other types", 
       "They are less likely to leak"
   ], 
   correctAnswers:["They can experience significant surge during maneuvers"], 
   explanation:"Smooth bore tankers are prone to substantial surge effects, especially when making turns, requiring careful handling.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-7', 
   question:'What type of surge is typically observed in tanks equipped with baffles', 
   answers:[
       "No surge at all", 
       "Minimal surge", 
       "Only side-to-side surge", 
       "Forward and backward surge"
   ], 
   correctAnswers:["Minimal surge"], 
   explanation:"Baffles help reduce the amount of surge by breaking up liquid flow, resulting in minimal movement compared to smooth bore tanks.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-8', 
   question:'With baffles in your cargo tank, what handling effect should you anticipate', 
   answers:[
       "Increased stability while turning", 
       "Decreased stopping distance", 
       "Reduced side-to-side movement", 
       "Increased forward surge"
   ], 
   correctAnswers:["Reduced side-to-side movement"], 
   explanation:"Baffles are designed to minimize side-to-side liquid movement, enhancing stability while driving.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-9', 
   question:'Which statement about speed and stopping distance is accurate', 
   answers:[
       "Higher speeds lead to shorter stopping distances", 
       "Stopping distance increases as speed rises", 
       "Stopping distance remains constant regardless of speed", 
       "Lower speeds require longer stopping distances"
   ], 
   correctAnswers:["Stopping distance increases as speed rises"], 
   explanation:"As speed increases, so does the distance required to come to a complete stop safely.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-10', 
   question:'Which fact regarding tankers and their center of gravity is true', 
   answers:[
       "Tankers have a low center of gravity", 
       "Tankers have a high center of gravity", 
       "Tankers do not possess a center of gravity", 
       "Tankers have an unstable center of gravity"
   ], 
   correctAnswers:["Tankers have a high center of gravity"], 
   explanation:"Tankers generally have a high center of gravity, making them more susceptible to tipping over during sharp turns or sudden stops.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-11',  
   question:'To legally drive a vehicle with significant tank capacity, which endorsement is required',  
   answers:[
       "N Endorsement for Tank Vehicles",  
       "H Endorsement for Hazardous Materials",  
       "P Endorsement for Passenger Vehicles",  
       "X Endorsement for Combination Loads"
   ],  
   correctAnswers:["N Endorsement for Tank Vehicles"],  
   explanation:"An N Endorsement is necessary for drivers operating vehicles designed to transport liquids in bulk.",  
   questionTag:"tanker endorsement"  
  },  
  {
     id:'te-12',  
     question:'When is it necessary to perform an inspection on a tank vehicle',  
     answers:[
         "Only before long trips",  
         "At the start and end of each shift",  
         "Once every month",  
         "Only when issues arise"
     ],  
     correctAnswers:["At the start and end of each shift"],  
     explanation:"Regular inspections should occur at both the beginning and end of each shift to ensure safety and compliance.",  
     questionTag:"tanker endorsement"  
  },  
  {
     id:'te-13',   
     question:'What is the most effective way to manage surge while braking',   
     answers:[
         "Braking hard and abruptly",   
         "Applying brakes smoothly and gradually",   
         "Using engine braking only",   
         "Slamming on brakes if necessary"
     ],   
     correctAnswers:["Applying brakes smoothly and gradually"],   
     explanation:"Gradual braking helps control surge effectively and maintains vehicle stability during stops.",   
     questionTag:"tanker endorsement"   
  },   
  {
     id:'te-14',   
     question:'Under what circumstances must a tank be un-baffled',   
     answers:[
         "When transporting hazardous materials only",   
         "If required by law enforcement officials",   
         "When it is empty after unloading operations",   
         "If specified by manufacturer guidelines"
     ],   
     correctAnswers:["If specified by manufacturer guidelines"],   
     explanation:"A tank must be un-baffled according to specific manufacturer guidelines or safety regulations.",   
     questionTag:"tanker endorsement"   
  },   
  {
     id:'te-15',    
     question:'What is crucial to remember regarding emergency braking techniques with a tanker load',    
     answers:[
         "Always brake as forcefully as possible",    
         "Utilize gradual pressure on brakes instead",    
         "Emergency braking is never needed",    
         "Only brake if absolutely necessary"
     ],    
     correctAnswers:["Utilize gradual pressure on brakes instead"],    
     explanation:"Using gradual pressure helps maintain control over the vehicle and reduces risks during emergency situations.",    
     questionTag:"tanker endorsement"    
  },    
  {
     id:'te-16',    
     question:'If you need to execute an emergency stop, how should you apply your brakes',    
     answers:[
         "Apply them suddenly and forcefully",    
         "Ease into braking gradually but firmly",    
         "Only use engine brakes if feasible",    
         "Brake lightly at first then increase pressure"
     ],    
     correctAnswers:["Ease into braking gradually but firmly"],    
     explanation:"Gradual braking assists in maintaining control while bringing the vehicle to a stop safely in emergencies.",    
     questionTag:"tanker endorsement"    
  },    
  {
     id:'te-17',     
     question:'If your vehicle includes specific equipment, what must function properly before you begin driving',     
     answers:[
         "Only lights and signals",
         "Brakes, lights, and all safety equipment",
         "Just the engine",
         "Only mirrors"
     ],     
     correctAnswers:["Brakes, lights, and all safety equipment"],     
     explanation:"All critical systems such as brakes and lights must function properly before operating any vehicle safely.",     
     questionTag:"tanker endorsement"     
  },     
  {
        id:'te-18',     
        question:'When navigating hills or curves where visibility is restricted, what should you do if drivers behind you cannot see your vehicle within a certain distance',     
        answers:[
            "Accelerate to get ahead",
            "Activate hazard lights and reduce speed",
            "Stop immediately",
            "Disregard it since it does not concern you"
        ],     
        correctAnswers:["Activate hazard lights and reduce speed"],     
        explanation:"Using hazard lights alerts other drivers that they need to be cautious due to limited visibility around your vehicle.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-19',     
        question:'When loading smaller tanks equipped with bulkheads, what should you carefully check prior to starting the process',     
        answers:[
            "The weight distribution",
            "The weather conditions",
            "The planned route",
            "The fuel level"
        ],     
        correctAnswers:["The weight distribution"],     
        explanation:"Checking weight distribution ensures that smaller tanks are loaded safely without risking imbalance during transport.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-20',     
        question:'During unloading operations with smaller tanks containing bulkheads, what should you always verify before proceeding with unloading',     
        answers:[
            "That no one is nearby",
            "That all connections are secure",
            "That weather conditions are favorable",
            "That your phone is charged"
        ],     
        correctAnswers:["That all connections are secure"],     
        explanation:"Verifying that all connections are secure prevents spills or accidents during unloading operations.",     
        questionTag:"tanker endorsement"     
   }    
];