import { Question } from '../../../../types';

export const coloradoTanker3: Question[] = [
  {
    id: 'te-3-1',
    question: 'How should manhole covers be positioned on a tanker?',
    answers: [
      'Securely closed',
      'Left slightly ajar',
      'Completely removed',
      'Open for ventilation'
    ],
    correctAnswers: ['Securely closed'],
    explanation: 'Manhole covers should always be securely closed to prevent leaks and ensure safety during transport.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-3-2',
    question: 'If your tanker does not have an automatic drain, when is the appropriate time to drain your air tanks?',
    answers: [
      'At the end of each trip',
      'Before loading liquids',
      'After every fuel stop',
      'Only when the air pressure drops'
    ],
    correctAnswers: ['At the end of each trip'],
    explanation: 'Air tanks should be drained at the end of each trip to remove moisture and prevent freezing in cold weather.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-3-3',
    question: 'What is the proper method for inspecting your tank vehicle?',
    answers: [
      'Visual inspection only',
      'Follow a comprehensive checklist',
      'Inspect only before long trips',
      'Check only the exterior components'
    ],
    correctAnswers: ['Follow a comprehensive checklist'],
    explanation: 'A thorough inspection should follow a detailed checklist to ensure all critical components are checked for safety.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-3-4',
    question: 'What is another term commonly used for a smooth bore tank?',
    answers: [
      'Baffle tank',
      'Single compartment tank',
      'Bulk tank',
      'Non-baffled tank'
    ],
    correctAnswers: ['Non-baffled tank'],
    explanation: 'A smooth bore tank is also referred to as a non-baffled tank, as it lacks internal baffles to control liquid movement.',
    questionTag: 'tanker endorsement'
  },
  {
    id: 'te-3-5',
    question: 'Why is liquid surge particularly hazardous while driving?',
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
   id:'te-3-6', 
   question:'Which statement about emergency steering techniques with tankers is accurate?', 
   answers:[
       "You can steer sharply without consequences", 
       "Emergency steering requires smooth adjustments", 
       "Steering has no effect on stability", 
       "You should always brake before steering"
   ], 
   correctAnswers:["Emergency steering requires smooth adjustments"], 
   explanation:"Smooth steering adjustments are crucial for maintaining control during emergencies with tankers.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-3-7', 
   question:'When driving smooth bore tankers, what situation requires extra caution?', 
   answers:[
       "When driving on straight roads", 
       "When approaching curves or turns", 
       "When traveling downhill", 
       "When stopped at traffic signals"
   ], 
   correctAnswers:["When approaching curves or turns"], 
   explanation:"Extra caution is necessary when navigating curves or turns due to potential surge effects that can destabilize the vehicle.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-3-8', 
   question:'If you are aware that your tank vehicle is leaking, what should you do?', 
   answers:[
       "Continue driving to your destination", 
       "Report it and stop driving immediately", 
       "Try to fix it while driving", 
       "Ignore it if it is minor"
   ], 
   correctAnswers:["Report it and stop driving immediately"], 
   explanation:"If a leak is detected, you must report it and cease operation immediately to prevent environmental hazards and ensure safety.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-3-9', 
   question:'When transporting hazardous materials, how far must you stop before the nearest rail at a railroad crossing?', 
   answers:[
       "10 feet", 
       "15 feet", 
       "20 feet", 
       "50 feet"
   ], 
   correctAnswers:["15 feet"], 
   explanation:"Vehicles placarded for hazardous materials must stop at least 15 feet before the nearest rail at railroad crossings.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-3-10', 
   question:'To correct a drive-wheel braking skid, what action should you take?', 
   answers:[
       "Steer in the direction of the skid", 
       "Brake harder", 
       "Accelerate quickly", 
       "Shift into neutral"
   ], 
   correctAnswers:["Steer in the direction of the skid"], 
   explanation:"To regain control during a drive-wheel braking skid, steer in the direction you want the front wheels to go.", 
   questionTag:"tanker endorsement"
  },
  {
   id:'te-3-11',  
   question:'During your pre-trip inspection of a tanker, what specific items should you check?',  
   answers:[
       "Only exterior lights",
       "Brakes, hoses, and valves",
       "Tires and mirrors only",
       "Interior cleanliness"
   ],  
   correctAnswers:["Brakes, hoses, and valves"],  
   explanation:"During pre-trip inspections, it's essential to check brakes, hoses, valves, and other critical components for safety.",  
   questionTag:"tanker endorsement"  
  },  
  {
     id:'te-3-12',  
     question:'What effect does liquid surge have on tanker handling?',  
     answers:[
         "Improves stability",
         "Makes handling more difficult",
         "Has no effect on handling",
         "Reduces stopping distance"
     ],  
     correctAnswers:["Makes handling more difficult"],  
     explanation:"Liquid surge can create instability and make it challenging to control the tanker effectively.",  
     questionTag:"tanker endorsement"  
  },  
  {
     id:'te-3-13',   
     question:'When hauling two tankers, where should the weight be distributed?',   
     answers:[
         "Evenly across both tanks",
         "Primarily in one tanker",
         "Towards the front of both tanks",
         "At the rear of both tanks"
     ],   
     correctAnswers:["Evenly across both tanks"],   
     explanation:"Weight should be evenly distributed across both tankers to maintain balance and stability during transport.",   
     questionTag:"tanker endorsement"   
  },   
  {
     id:'te-3-14',   
     question:'How can you tell that your brakes are fading while driving?',   
     answers:[
         "They make loud noises",
         "The pedal feels spongy or soft",
         "They smell like burning rubber",
         "They respond quickly when pressed"
     ],   
     correctAnswers:["The pedal feels spongy or soft"],   
     explanation:"A spongy or soft brake pedal indicates that brakes may be fading and require immediate attention.",   
     questionTag:"tanker endorsement"   
  },   
  {
     id:'te-3-15',    
     question:'What factors determine how much liquid you can load into a tank?',    
     answers:[
         "The size of the tank only",    
         "The type of liquid being transported",    
         "The temperature of the liquid only",    
         "Both size and type of liquid"
     ],    
     correctAnswers:["Both size and type of liquid"],    
     explanation:"The amount of liquid loaded depends on both the size of the tank and specific properties of the liquid being transported.",    
     questionTag:"tanker endorsement"    
  },    
  {
     id:'te-3-16',    
     question:'Which statement about managing space to the sides of your tanker is accurate?',    
     answers:[
         "You need less space when turning",
         "You should always maintain extra space",
         "Space management is not important",
         "You can ignore side space if traffic is light"
     ],    
     correctAnswers:["You should always maintain extra space"],    
     explanation:"Maintaining extra space around your tanker helps prevent collisions and allows for safe maneuvering.",    
     questionTag:"tanker endorsement"    
  },    
  {
     id:'te-3-17',     
     question:'Hauling liquids in tank vehicles requires special care for two reasons. One reason is:',     
     answers:[
         "The high center of gravity associated with loaded tanks",
         "The low weight of liquids compared to solids",
         "The ease of maneuvering empty tanks",
         "The reduced risk of spills"
     ],     
     correctAnswers:["The high center of gravity associated with loaded tanks"],     
     explanation:"Tank vehicles have a high center of gravity when loaded, increasing their risk of tipping over during turns or sudden stops.",     
     questionTag:"tanker endorsement"     
  },     
  {
        id:'te-3-18',     
        question:'Loaded tankers are said to have a high center of gravity. What does this imply for their handling?',     
        answers:[
            "They are more stable than empty trucks",
            "They are easier to control than other vehicles",
            "They require careful maneuvering to avoid tipping",
            "They have no impact on driving dynamics"
        ],     
        correctAnswers:["They require careful maneuvering to avoid tipping"],     
        explanation:"A high center of gravity means loaded tankers are more prone to tipping over, requiring careful handling while driving.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-3-19',     
        question:'In case a tanker loses its brakes, when should the driver utilize an escape ramp designed for trucks?',     
        answers:[
            "Only if there is heavy traffic ahead",
            "As soon as they realize they cannot stop safely",
            "When they reach a certain speed limit",
            "Only if instructed by authorities"
        ],     
        correctAnswers:["As soon as they realize they cannot stop safely"],     
        explanation:"Escape ramps are designed for emergency use; drivers should utilize them immediately if they cannot safely stop their vehicle.",     
        questionTag:"tanker endorsement"     
   },     
   {
        id:'te-3-20',     
        question:'When transporting hazardous materials, what must you check regarding any dual tires on your vehicle?',     
        answers:[
            "That they are inflated equally",
            "That they are worn evenly",
            "That they are free from leaks",
            "All of these options"
        ],     
        correctAnswers:["All of these options"],     
        explanation:"All aspects regarding dual tires must be checked for safety when transporting hazardous materials.",     
        questionTag:"tanker endorsement"     
   }    
];