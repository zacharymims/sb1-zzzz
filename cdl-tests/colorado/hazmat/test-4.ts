import { Question } from '../../../../types';

export const coloradoHazmat4: Question[] = [
  {
    id: 'hm-4-1',
    question: 'What is the primary purpose of placarding a vehicle transporting hazardous materials?',
    answers: [
      'To indicate the cargo type',
      'To improve fuel efficiency',
      'To enhance vehicle aesthetics',
      'To comply with state regulations'
    ],
    correctAnswers: ['To indicate the cargo type'],
    explanation: 'Placarding is used to indicate the type of hazardous materials being transported, allowing others to recognize potential dangers.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-2',
    question: 'What is required for a driver to transport hazardous materials?',
    answers: [
      'A regular driver’s license',
      'A Commercial Learner Permit (CLP)',
      'A Commercial Driver License (CDL) with a HazMat endorsement',
      'No special requirements are needed'
    ],
    correctAnswers: ['A Commercial Driver License (CDL) with a HazMat endorsement'],
    explanation: 'To transport hazardous materials, a driver must have a CDL with a Hazardous Materials endorsement.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-3',
    question: 'What should you do if your cargo of hazardous materials begins to leak?',
    answers: [
      'Ignore it and continue driving',
      'Stop immediately and call for help',
      'Try to fix the leak while driving',
      'Drive faster to reach your destination quickly'
    ],
    correctAnswers: ['Stop immediately and call for help'],
    explanation: 'If your cargo of hazardous materials begins to leak, you should stop immediately and call for help to manage the situation safely.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-4',
    question: 'What does the term "hazard class" refer to?',
    answers: [
      'The size of the shipment',
      'The type of vehicle used for transport',
      'The category of hazard associated with the material',
      'The weight of the material being transported'
    ],
    correctAnswers: ['The category of hazard associated with the material'],
    explanation: 'Hazard class refers to the category of hazard associated with a specific material, such as flammable, toxic, or explosive.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-5',
    question: 'What is the proper way to secure hazardous materials in a vehicle?',
    answers: [
      'Use any available tie-downs',
      'Follow specific regulations for securing each type of material',
      'Only secure them if they are heavy',
      'Do not secure them if they fit well in place'
    ],
    correctAnswers: ['Follow specific regulations for securing each type of material'],
    explanation: 'Hazardous materials must be secured according to specific regulations that apply to each type of material to prevent shifting during transport.',
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-6',
    question: "What should be included in your emergency response plan when transporting hazardous materials?",
    answers: [
      "Only contact numbers for local authorities",
      "Instructions for handling spills and leaks",
      "Only evacuation routes",
      "No plan is necessary"
    ],
    correctAnswers: ['Instructions for handling spills and leaks'],
    explanation: "Your emergency response plan must include instructions for handling spills and leaks as well as contact information for emergency services.",
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-7',
    question: "What should you do if you receive a shipment of hazardous materials that is damaged?",
    answers: [
      "Ignore it and continue with delivery",
      "Contact your supervisor and follow proper procedures",
      "Try to repair the damage yourself",
      "Dispose of it immediately"
    ],
    correctAnswers: ['Contact your supervisor and follow proper procedures'],
    explanation: "If you receive a shipment of hazardous materials that is damaged, you should contact your supervisor and follow proper procedures for handling such situations.",
    questionTag: 'hazmat'
  },
  {
    id: 'hm-4-8',
    question: "What does it mean if a placard has a number on it?",
    answers: [
      "It indicates the weight of the cargo",
      "It shows how many people can be transported",
      "It identifies the hazard class of the material",
      "It represents the shipping company"
    ],
    correctAnswers: ['It identifies the hazard class of the material'],
    explanation: "A number on a placard identifies the hazard class of the material being transported, providing critical information about its risks.",
    questionTag: 'hazmat'
  },
  {
   id:'hm-4-9', 
   question:'Which document must accompany all shipments of hazardous materials?', 
   answers:[
       "Shipping papers", 
       "Vehicle registration", 
       "Insurance documents", 
       "Driver's license"
   ], 
   correctAnswers:['Shipping papers'], 
   explanation:'Shipping papers must accompany all shipments of hazardous materials, detailing what is being transported and any hazards associated with it.', 
   questionTag:'hazmat' 
  },
  {
   id:'hm-4-10', 
   question:'What should be done if you are involved in an accident while transporting hazardous materials?', 
   answers:[
       "Leave the scene immediately", 
       "Call emergency services and report the incident", 
       "Continue driving to your destination", 
       "Try to clean up any spills yourself"
   ], 
   correctAnswers:['Call emergency services and report the incident'], 
   explanation:'If involved in an accident while transporting hazardous materials, you should call emergency services and report the incident immediately.', 
   questionTag:'hazmat' 
  },
  {
   id:'hm-4-11', 
   question:'How often should drivers inspect their vehicles when transporting hazardous materials?', 
   answers:[
       "Once a week", 
       "Before each trip", 
       "Only when carrying large quantities", 
       "Monthly"
   ], 
   correctAnswers:['Before each trip'], 
   explanation:'Drivers should perform vehicle inspections before each trip when transporting hazardous materials to ensure safety and compliance.', 
   questionTag:'hazmat' 
  },
  {
   id:'hm-4-12', 
   question:'What is required for packaging hazardous materials?', 
   answers:[
       "Any available container", 
       "Containers that meet specific regulatory standards", 
       "Only cardboard boxes", 
       "Plastic bags"
   ], 
   correctAnswers:['Containers that meet specific regulatory standards'], 
   explanation:'Hazardous materials must be packaged in containers that meet specific regulatory standards designed to prevent leaks and spills.', 
   questionTag:'hazmat' 
  },
  {
   id:'hm-4-13',  
   question:'What does it mean if a material is labeled as a “flammable solid”?',  
   answers:[
       "It can easily ignite and burn",  
       "It is safe under all conditions",  
       "It can only ignite at high temperatures",  
       "It does not require special handling"  
     ],  
     correctAnswers:['It can easily ignite and burn'],  
     explanation:'A “flammable solid” is a material that can easily ignite and burn, requiring careful handling during transport.',  
     questionTag:'hazmat'  
 },
 {
     id:'hm-4-14',   
     question:'What does “Hazard Class” refer to?',   
     answers:[
         "The size of the shipment",   
         "The type of vehicle used for transport",   
         "The category assigned based on its risk level",   
         "The weight of the material being transported"
     ],   
     correctAnswers:['The category assigned based on its risk level'],   
     explanation:'“Hazard Class” refers to the category assigned based on its risk level, such as flammable liquids or toxic substances.',   
     questionTag:'hazmat'   
 },
 {
     id:'hm-4-15',    
     question:'When must shipping papers be kept within reach while driving?',    
     answers:[
         "Only during long trips",    
         "At all times when transporting hazardous materials",    
         "Only when parked",    
         "Only during inspections"
     ],    
     correctAnswers:['At all times when transporting hazardous materials'],    
     explanation:'Shipping papers must be kept within reach at all times while transporting hazardous materials.',    
     questionTag:'hazmat'    
 },
 {
     id:'hm-4-16',    
     question:'What does “Limited Quantity” designation mean?',    
     answers:[
         "Materials that are not dangerous",    
         "Small amounts that may have less stringent packaging requirements",    
         "Materials that can be transported without a CDL",    
         "Only applies to liquids"
     ],    
     correctAnswers:['Small amounts that may have less stringent packaging requirements'],    
     explanation:'“Limited Quantity” designation refers to small amounts of hazardous materials that may have less stringent packaging requirements due to their reduced risk.',    
     questionTag:'hazmat'    
 },
 {
     id:'hm-4-17',     
     question:'How often should drivers review their knowledge about transporting hazardous materials?',     
     answers:[
         "Once every few years",     
         "After every trip",     
         "Regularly as regulations change",     
         "Only when they first receive their CDL"
     ],     
     correctAnswers:['Regularly as regulations change'],     
     explanation:'Drivers should regularly review their knowledge about transporting hazardous materials as regulations may change frequently.',     
     questionTag:'hazmat'     
 },
 {
     id:'hm-4-18',     
     question:'What action should be taken if there is an indication that cargo may shift during transport?',     
     answers:[
         "Ignore it if it seems minor",     
         "Stop immediately and inspect cargo securement",     
         "Continue driving but at a slower speed",     
         "Rearrange cargo while driving"
     ],     
     correctAnswers:['Stop immediately and inspect cargo securement'],     
     explanation:'If there is an indication that cargo may shift during transport, stop immediately and inspect cargo securement to ensure safety.',     
     questionTag:'hazmat'     
 },
 {
     id:'hm-4-19',      
     question:'What should be done if you are unsure about how to handle a specific hazardous material?',      
     answers:[
         "Guess based on past experience",      
         "'Ask someone else who has handled it before'",      
         "'Consult safety data sheets (SDS)' ",      
         "'Ignore it until you arrive at your destination'"
        ],      
        correctAnswers:['Consult safety data sheets (SDS)'],      
        explanation:"If unsure about how to handle a specific hazardous material, consult safety data sheets (SDS) which provide detailed information on handling procedures.",      
        questionTag:'hazmat'      
},
{
id:'hm-4-20',      
question:"What does it mean if a placard has an identification number on it?",      
answers:[      
"Indicates weight limits",      
"Identifies specific hazards associated with the material",      
"Shows how many people can be transported",      
"Represents shipping costs"      
],      
correctAnswers:["Identifies specific hazards associated with the material"],      
explanation:"An identification number on a placard indicates specific hazards associated with that particular material being transported.",      
questionTag:"hazmat"      
}
];