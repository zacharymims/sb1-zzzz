import { Question } from '../../../../types';

export const coloradoTanker5: Question[] = [
  {
    id: 'te-5-1',
    question: 'What should you ensure about manhole covers on a tanker before transport?',
    answers: [
      'They are securely fastened',
      'They can be left slightly open',
      'They should be removed during loading',
      'They must be ventilated'
    ],
    correctAnswers: ['They are securely fastened'],
    explanation: 'Manhole covers must be securely fastened to prevent leaks and ensure safety during transportation.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-5-2',
    question: 'If your tanker does not have an automatic drain, when is the appropriate time to drain the air tanks?',
    answers: [
      'At the end of each trip',
      'Only if you notice moisture',
      'Before loading any liquids',
      'Once a week'
    ],
    correctAnswers: ['At the end of each trip'],
    explanation: 'Draining air tanks at the end of each trip helps eliminate moisture that could freeze and affect braking performance in cold weather.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-5-3',
    question: 'What is the recommended method for inspecting your tank vehicle?',
    answers: [
      'Conduct a visual inspection only',
      'Follow a detailed checklist',
      'Inspect only before long hauls',
      'Check only exterior components'
    ],
    correctAnswers: ['Follow a detailed checklist'],
    explanation: 'A thorough inspection should adhere to a checklist to ensure all critical components are evaluated for safety.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-5-4',
    question: 'What is another term commonly used for a smooth bore tank?',
    answers: [
      'Baffle tank',
      'Single compartment tank',
      'Non-baffled tank',
      'Bulk tank'
    ],
    correctAnswers: ['Non-baffled tank'],
    explanation: 'A smooth bore tank is also referred to as a non-baffled tank because it lacks internal structures to control liquid movement.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-5-5',
    question: 'Why is liquid surge particularly hazardous while driving a tanker?',
    answers: [
      'It can improve vehicle handling',
      'It may cause sudden shifts in weight distribution',
      'It reduces stopping distance significantly',
      'It has no impact on vehicle stability'
    ],
    correctAnswers: ['It may cause sudden shifts in weight distribution'],
    explanation: 'Liquid surge can lead to unexpected shifts in weight, making it difficult to maintain control of the vehicle.',
    questionTag: 'tanker endorsement'
  },
  {
   id:'te-5-6', 
   question:'What should you do if you notice your tanker leaking while on the road?', 
   answers:[
       "Continue driving until you reach your destination", 
       "Stop immediately and report the leak", 
       "Try to fix it while driving", 
       "Ignore it if it is minor"
   ], 
   correctAnswers:["Stop immediately and report the leak"], 
   explanation:"If a leak is detected, you must stop immediately and report it to prevent environmental hazards and ensure safety.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-5-7', 
   question:'What is required when transporting hazardous materials regarding placarding?', 
   answers:[
       "Placards are optional",
       "They must be displayed on all four sides",
       "They must be displayed on two sides",
       "Only one side needs placards"
   ], 
   correctAnswers:["They must be displayed on two sides"], 
   explanation:"Vehicles transporting hazardous materials must display placards on at least two sides for visibility and safety.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-5-8', 
   question:'When loading liquids into a tank, why is it important to know about outage?', 
   answers:[
       "To ensure proper filling levels",
       "To comply with legal requirements",
       "To prevent overloading",
       "All of the above"
   ], 
   correctAnswers:["All of the above"], 
   explanation:"Understanding outage helps ensure safe loading practices, compliance with regulations, and prevention of spills.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-5-9', 
   question:'What should you do if your vehicle becomes stuck on railroad tracks?', 
   answers:[
       "Stay inside until help arrives", 
       "Evacuate passengers immediately and call for help", 
       "Try to push it off yourself", 
       "Attempt to restart the engine"
   ], 
   correctAnswers:["Evacuate passengers immediately and call for help"], 
   explanation:"In emergencies involving railroad tracks, evacuating passengers ensures their safety while seeking assistance is critical.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-5-10',  
   question:'How many sides must a vehicle placarded for hazardous materials display placards?',  
   answers:[
       "One side only",  
       "Two sides",  
       "Three sides",  
       "All four sides"
   ],  
   correctAnswers:["Two sides"],  
   explanation:"Vehicles carrying hazardous materials must display placards on at least two sides for visibility.",  
   questionTag:"tanker endorsement"  
  },  
  {
     id:'te-5-11',  
     question:'What technique can you use to start moving without rolling backward on an incline?',  
     answers:[
         "Accelerate quickly",
         "Use your parking brake",
         "Shift into neutral",
         "Turn off your engine"
     ],  
     correctAnswers:["Use your parking brake"],  
     explanation:"Using your parking brake helps prevent rolling back when starting from an incline.",
     questionTag:"tanker endorsement"  
  },  
  {
     id:'te-5-12',   
     question:'Why is it important to know the outage required for the liquids you transport?',   
     answers:[
         "To ensure proper filling procedures",
         "To comply with legal regulations",
         "To prevent overloading",
         "All of the above"
     ],   
     correctAnswers:["All of the above"],   
     explanation:"Understanding outage helps ensure safety, compliance, and proper handling during transport.",   
     questionTag:"tanker endorsement"   
  },   
  {
     id:'te-5-13',   
     question:'When driving on a clear night, what should you do when dimming your headlights from high to low?',   
     answers:[
         "Increase your speed",
         "Adjust your speed so you can stop within visible distance",
         "Maintain your current speed",
         "Switch off your headlights temporarily"
     ],   
     correctAnswers:["Adjust your speed so you can stop within visible distance"],   
     explanation:"Dimming headlights should be accompanied by adjusting speed for safe stopping distances in low visibility conditions.",   
     questionTag:"tanker endorsement"   
  },   
  {
     id:'te-5-14',    
     question:'What is true about empty trucks regarding their handling characteristics?',    
     answers:[
         "They have better traction than loaded trucks",    
         "They are easier to maneuver than loaded trucks",    
         "They require longer stopping distances than loaded trucks",    
         "They have less stability than loaded trucks"
     ],    
     correctAnswers:["They have less stability than loaded trucks"],    
     explanation:"Empty trucks can be less stable due to reduced weight over axles, affecting handling and braking.",    
     questionTag:"tanker endorsement"    
  },    
  {
     id:'te-5-15',    
     question:'What impact do baffles have in liquid cargo tanks concerning surge movement?',    
     answers:[
         "They completely eliminate surge movement",    
         "They reduce but do not eliminate surge movement",    
         "They increase surge movement significantly",    
         "They have no effect on surge movement"
     ],    
     correctAnswers:["They reduce but do not eliminate surge movement"],    
     explanation:"Baffles help minimize surge but cannot completely prevent it during transport.",    
     questionTag:"tanker endorsement"    
  },    
  {
     id:'te-5-16',     
     question:'What term describes liquid-tight separations between compartments inside tanks?',     
     answers:[
         "Bulkheads",
         "Baffles",
         "Compartments",
         "Dividers"
     ],     
     correctAnswers:["Bulkheads"],     
     explanation:"Liquid-tight separations that create compartments within tanks are known as bulkheads.",     
     questionTag:"tanker endorsement"     
  },     
  {
        id:'te-5-17',     
        question:'What is referred to as the movement of liquid in partially filled tanks?',     
        answers:[
            "Surge",
            "Outage",
            "Slosh",
            "Flow"
        ],     
        correctAnswers:["Slosh"],     
        explanation:"The movement of liquid in partially filled tanks is commonly referred to as slosh.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-5-18',     
        question:'What type of vehicles require a tank endorsement due to their cargo type?',     
        answers:[
            "Vehicles transporting solid materials",
            "Vehicles transporting hazardous materials only",
            "Vehicles designed specifically for transporting liquids in bulk",
            "Any commercial vehicle"
        ],     
        correctAnswers:["Vehicles designed specifically for transporting liquids in bulk"],     
        explanation:"A tank endorsement is required for vehicles that are specifically designed to transport liquids in bulk containers.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-5-19',     
        question:'When loading a tank with bulkheads, where should weight not be excessively placed?',     
        answers:[
            "On one side only",
            "On top of the vehicle",
            "On both ends equally",
            "On one end only"
        ],     
        correctAnswers:["On one end only"],     
        explanation:"Excessive weight on one end can cause instability; therefore, weight should be evenly distributed across compartments.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-5-20',     
        question:'On a long or steep downgrade, once you have reached your safe speed, what should you do next?',     
        answers:[
            "Brake continuously until stopped",
            "Coast without braking",
            "Use intermittent braking as needed",
            "Accelerate slightly"
        ],     
        correctAnswers:["Use intermittent braking as needed"],     
        explanation:"Using intermittent braking helps maintain control while managing speed on downgrades without overheating brakes.",     
        questionTag:"tanker endorsement"     
   }    
];