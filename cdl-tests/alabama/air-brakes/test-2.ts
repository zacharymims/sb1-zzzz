import { Question } from '../../../../types';

export const alabamaAirBrakes2: Question[] = [
  {
    id: 'ab-2-1',
    question: 'Why is it essential to drain air tanks regularly?',
    answers: [
      'To prevent moisture buildup that can freeze',
      'To maintain tire pressure',
      'To ensure proper fuel efficiency',
      'To check for leaks'
    ],
    correctAnswers: ['To prevent moisture buildup that can freeze'],
    explanation: 'Draining air tanks helps remove moisture that could freeze and affect the braking system in cold weather conditions.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-2-2',
    question: 'What is the function of a supply pressure gauge in an air brake system?',
    answers: [
      'To measure the temperature of the air',
      'To indicate the pressure of the air supply',
      'To monitor brake fluid levels',
      'To show the speed of the vehicle'
    ],
    correctAnswers: ['To indicate the pressure of the air supply'],
    explanation: 'The supply pressure gauge displays the current pressure level in the air brake system, helping drivers monitor its performance.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-2-3',
    question: 'True or False: All vehicles equipped with air brakes must have a low air pressure warning signal.',
    answers: [
      'True',
      'False'
    ],
    correctAnswers: ['True'],
    explanation: 'It is mandatory for all vehicles with air brakes to have a low air pressure warning signal to alert drivers of insufficient pressure.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-2-4',
    question: 'What are spring brakes in an air brake system?',
    answers: [
      'Brakes that engage automatically when air pressure is low',
      'Brakes that require manual adjustment',
      'Brakes that are used only for parking',
      'Brakes that operate without any air pressure'
    ],
    correctAnswers: ['Brakes that engage automatically when air pressure is low'],
    explanation: 'Spring brakes are designed to automatically engage when the air pressure drops below a certain level, providing a safety mechanism.',
    questionTag: 'air brakes'
  },
  {
    id: 'ab-2-5',
    question: 'True or False: Front wheel brakes perform well under all driving conditions.',
    answers: [
      'True',
      'False'
    ],
    correctAnswers: ['False'],
    explanation: 'Front wheel brakes may not perform effectively under certain conditions, such as icy or slippery surfaces, where traction is compromised.',
    questionTag: 'air brakes'
  },
  {
   id:'ab-2-6', 
   question:'How can you determine if your vehicle is equipped with antilock brakes?', 
   answers:[
       "By checking manufacturer specifications", 
       "By looking for a yellow ABS light on the dashboard", 
       "By inspecting brake fluid levels", 
       "By testing the brakes while driving"
   ], 
   correctAnswers:["By looking for a yellow ABS light on the dashboard"], 
   explanation:"Vehicles equipped with antilock braking systems will typically have a yellow ABS warning light on the dashboard.",
   questionTag:"air brakes"
  },
  {
   id:'ab-2-7', 
   question:'What should you do if your low air pressure warning signal activates while driving?', 
   answers:[
       "Continue driving until your destination", 
       "Pull over safely and investigate the issue", 
       "Ignore it if it stops after a few seconds", 
       "Accelerate to build up more pressure"
   ], 
   correctAnswers:["Pull over safely and investigate the issue"], 
   explanation:"If the low air pressure warning signal activates, you should pull over immediately to check for problems before continuing.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-2-8', 
   question:'What happens when air pressure in your braking system drops below 60 psi?', 
   answers:[
       "The parking brake will automatically engage", 
       "You will lose all braking power", 
       "The vehicle will stop moving", 
       "You can still control your speed"
   ], 
   correctAnswers:["The parking brake will automatically engage"], 
   explanation:"When air pressure drops below 60 psi, spring-loaded parking brakes engage automatically to prevent movement.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-2-9', 
   question:'What should you check during a pre-trip inspection of your air brake system?', 
   answers:[
       "Only exterior lights",
       "Air hoses, connections, and brake components",
       "The engine oil level",
       "The tire tread depth only"
   ], 
   correctAnswers:["Air hoses, connections, and brake components"], 
   explanation:"During a pre-trip inspection, it's essential to check all components related to the air brake system for safety and functionality.", 
   questionTag:"air brakes"
  },
  {
   id:'ab-2-10',  
   question:'What does liquid surge do to tanker handling?',  
   answers:[
       "Improves stability",
       "Makes handling more difficult",
       "Has no impact on handling",
       "Reduces stopping distance"
     ],  
     correctAnswers:["Makes handling more difficult"],  
     explanation:"Liquid surge can create instability, making it challenging to control a tanker effectively.",  
     questionTag:"air brakes"  
  },  
  {
     id:'ab-2-11',  
     question:'When hauling two tankers, how should weight be distributed for optimal stability?',  
     answers:[
         "Evenly across both tankers",
         "Primarily in one tanker",
         "Towards the front of both tankers",
         "At the rear of both tankers"
     ],   
     correctAnswers:["Evenly across both tankers"],   
     explanation:"Weight should be evenly distributed across both tankers to maintain balance and stability during transport.",   
     questionTag:"air brakes"   
  },   
  {
     id:'ab-2-12',    
     question:'How can you identify fading brakes while driving?',    
     answers:[
         "They make loud noises",
         "The pedal feels spongy or soft",
         "They smell like burning rubber",
         "They respond quickly when pressed"
     ],    
     correctAnswers:["The pedal feels spongy or soft"],    
     explanation:"A spongy or soft brake pedal indicates that brakes may be fading and require immediate attention.",    
     questionTag:"air brakes"    
  },    
  {
     id:'ab-2-13',     
     question:'What factors determine how much liquid can be loaded into a tank?',     
     answers:[
         "The size of the tank only",    
         "The type of liquid being transported",    
         "The temperature of the liquid only",    
         "Both size and type of liquid"
     ],     
     correctAnswers:["Both size and type of liquid"],     
     explanation:"The amount of liquid loaded depends on both the size of the tank and specific properties of the liquid being transported.",     
     questionTag:"air brakes"     
  },     
  {
        id:'ab-2-14',     
        question:'Which statement about managing space to the sides of your tanker is accurate?',     
        answers:[
            "You need less space when turning",
            "You should always maintain extra space",
            "Space management is not important",
            "You can ignore side space if traffic is light"
        ],     
        correctAnswers:["You should always maintain extra space"],     
        explanation:"Maintaining extra space around your tanker helps prevent collisions and allows for safe maneuvering.",     
        questionTag:"air brakes"     
   },     
   {
        id:'ab-2-15',     
        question:'Hauling liquids in tank vehicles requires special care for two reasons. One reason is:',     
        answers:[
            "The high center of gravity associated with loaded tanks",
            "The low weight of liquids compared to solids",
            "The ease of maneuvering empty tanks",
            "The reduced risk of spills"
        ],     
        correctAnswers:["The high center of gravity associated with loaded tanks"],     
        explanation:"Tank vehicles have a high center of gravity when loaded, increasing their risk of tipping over during turns or sudden stops.",     
        questionTag:"air brakes"     
   },     
   {
        id:'ab-2-16',     
        question:'Loaded tankers are said to have a high center of gravity. What does this imply for their handling?',     
        answers:[
            "They are more stable than empty trucks",
            "They are easier to control than other vehicles",
            "They require careful maneuvering to avoid tipping",
            "They have no impact on driving dynamics"
        ],     
        correctAnswers:["They require careful maneuvering to avoid tipping"],     
        explanation:"A high center of gravity means loaded tankers are more prone to tipping over, requiring careful handling while driving.",     
        questionTag:"air brakes"     
   },     
   {
        id:'ab-2-17',     
        question:'In case a tanker loses its brakes, when should the driver utilize an escape ramp designed for trucks?',     
        answers:[
            "Only if there is heavy traffic ahead",
            "As soon as they realize they cannot stop safely",
            "When they reach a certain speed limit",
            "Only if instructed by authorities"
        ],     
        correctAnswers:["As soon as they realize they cannot stop safely"],     
        explanation:"Escape ramps are designed for emergency use; drivers should utilize them immediately if they cannot safely stop their vehicle.",     
        questionTag:"air brakes"     
   },     
];
