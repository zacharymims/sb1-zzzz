import { Question } from '../../../../types';

export const alabamaGeneralKnowledge1: Question[] = [
  {
    id: 'gk-1-1',
    question: 'What is the minimum weight rating for a single vehicle that requires a CDL?',
    answers: [
      '10,001 pounds',
      '16,001 pounds',
      '26,001 pounds',
      '80,001 pounds'
    ],
    correctAnswers: ['26,001 pounds'],
    explanation: 'You must have a CDL to operate any single vehicle with a gross vehicle weight rating (GVWR) of 26,001 pounds or more.',
    questionTag: 'general knowledge'
  },
  {
    id: 'gk-1-2',
    question: 'Which of the following vehicles requires a CDL to operate?',
    answers: [
      'A vehicle designed to transport 12 passengers including the driver',
      'A vehicle with a GVWR of 24,000 pounds',
      'A combination vehicle with a gross combination weight rating of 26,001 or more pounds, if the trailer has a GVWR of 10,001 or more pounds',
      'A personal pickup truck towing a small trailer'
    ],
    correctAnswers: ['A combination vehicle with a gross combination weight rating of 26,001 or more pounds, if the trailer has a GVWR of 10,001 or more pounds'],
    explanation: 'A CDL is required for a combination vehicle with a gross combination weight rating of 26,001 or more pounds if the trailer(s) has a GVWR of 10,001 or more pounds.',
    questionTag: 'general knowledge'
  },
  {
    id: 'gk-1-3',
    question: 'Which of the following is NOT a type of CDL knowledge test?',
    answers: [
      'General knowledge test',
      'Air brakes test',
      'Combination vehicles test',
      'Fuel efficiency test'
    ],
    correctAnswers: ['Fuel efficiency test'],
    explanation: 'The fuel efficiency test is not a standard CDL knowledge test. The typical tests include general knowledge, air brakes, combination vehicles, and others specific to certain endorsements.',
    questionTag: 'general knowledge'
  },
  {
    id: 'gk-1-4',
    question: 'What is the blood alcohol concentration (BAC) limit for CDL holders operating a commercial motor vehicle?',
    answers: [
      '0.08%',
      '0.04%',
      '0.02%',
      '0.00%'
    ],
    correctAnswers: ['0.04%'],
    explanation: 'It is illegal to operate a CMV if your blood alcohol concentration (BAC) is .04% or more.',
    questionTag: 'general knowledge'
  },
  {
    id: 'gk-1-5',
    question: 'How long will you lose your CDL for a first offense of driving a CMV under the influence of alcohol?',
    answers: [
      'At least 30 days',
      'At least 60 days',
      'At least 6 months',
      'At least one year'
    ],
    correctAnswers: ['At least one year'],
    explanation: 'You will lose your CDL for at least one year for a first offense of driving a CMV under the influence of alcohol.',
    questionTag: 'general knowledge'
  },
  {
   id:'gk-1-6', 
   question:'What action is required if your privilege to operate your personal vehicle is revoked due to a DUI?', 
   answers:[
       "You can still operate a CMV with restrictions",
       "You will lose your CDL for at least 30 days",
       "You will lose your CDL for at least one year",
       "No action is required for your CDL"
   ], 
   correctAnswers:["You will lose your CDL for at least one year"], 
   explanation:"If your privilege to operate your personal vehicle is revoked due to alcohol violations, you will also lose your CDL for at least one year.", 
   questionTag:"general knowledge"
  },
  {
   id:'gk-1-7', 
   question:'How many serious traffic violations within a three-year period will result in losing your CDL for at least 60 days?', 
   answers:[
       "One",
       "Two",
       "Three",
       "Four"
   ], 
   correctAnswers:["Two"], 
   explanation:"You will lose your CDL for at least 60 days if you have committed two serious traffic violations within a three-year period involving a CMV.", 
   questionTag:"general knowledge"
  },
  {
   id:'gk-1-8', 
   question:'What should you do if you receive any traffic violation while driving?', 
   answers:[
       "Ignore it as it does not affect your CDL",
       "Notify your employer within 30 days",
       "Only notify if it involves another vehicle",
       "Wait until you receive the court papers"
   ], 
   correctAnswers:["Notify your employer within 30 days."], 
   explanation:"You must notify your employer within 30 days of any traffic violations (except parking), regardless of what type of vehicle you were driving.", 
   questionTag:"general knowledge"
  },
  {
   id:'gk-1-9',  
   question:'What should you do if you are convicted of two serious traffic violations?',  
   answers:[
       "Continue driving normally",
       "Notify your employer immediately",
       "Prepare to lose your license for at least two months",
       "Take an advanced driving course"
   ],  
   correctAnswers:["Notify your employer immediately"],  
   explanation:"If convicted of serious traffic violations, notify your employer immediately as required by law.",  
   questionTag:"general knowledge"  
  },  
  {
     id:'gk-1-10',  
     question:'What is considered a serious traffic violation?',  
     answers:[
         "Driving without wearing seatbelts",
         "Excessive speeding (15 mph or more above the posted limit)",
         "Parking violations",
         "Driving with expired registration"
     ],  
     correctAnswers:["Excessive speeding (15 mph or more above the posted limit)"],  
     explanation:"Serious traffic violations include excessive speeding (15 mph or more above the posted limit), reckless driving, and following too closely.",  
     questionTag:"general knowledge"  
  },  
  {
     id:'gk-1-11',   
     question:'How long will you lose your CDL for committing two violations of an out-of-service order?',   
     answers:[
         "30 days",
         "90 days",
         "One year",
         "Lifetime"
     ],   
     correctAnswers:["One year"],   
     explanation:"You will lose your CDL for at least one year if you commit two violations of an out-of-service order in ten years.",   
     questionTag:"general knowledge"   
  },   
  {
     id:'gk-1-12',    
     question:'What happens if you are convicted of DUI while operating any motor vehicle?',    
     answers:[
         "You will only lose your personal license.",
         "You may lose both personal and commercial licenses.",
         "Your license will be suspended temporarily.",
         "No action will be taken."
     ],    
     correctAnswers:["You may lose both personal and commercial licenses."],    
     explanation:"A DUI conviction can affect both personal and commercial licenses, leading to potential disqualification from operating commercial vehicles.",    
     questionTag:"general knowledge"    
  },    
  {
     id:'gk-1-13',     
     question:'What should you do if you have been disqualified from driving?',     
     answers:[
         "Continue driving until caught.",
         "Inform your employer immediately.",
         "Ignore it; it does not matter.",
         "Only inform them if asked."
     ],     
     correctAnswers:["Inform your employer immediately."],     
     explanation:"If disqualified from driving, you must inform your employer immediately as required by law.",     
     questionTag:"general knowledge"     
  },     
  {
        id:'gk-1-14',     
        question:'What actions can lead to disqualification from operating a commercial motor vehicle?',     
        answers:[
            "Traffic violations in personal vehicles only.",
            "Alcohol-related offenses while operating any vehicle.",
            "Having multiple licenses.",
            "All of the above."
        ],     
        correctAnswers:["All of the above."],     
        explanation:"Traffic violations in personal vehicles and alcohol-related offenses can lead to disqualification from operating CMVs.",     
        questionTag:"general knowledge"     
   },     
   {
        id:'gk-1-15',     
        question:'What must you do when applying for a commercial driver license?',     
        answers:[
            "Provide proof of residency only.",
            "Provide information on all previous driving jobs held in the past ten years.",
            "Only provide information about current employment.",
            "Provide no information."
        ],     
        correctAnswers:["Provide information on all previous driving jobs held in the past ten years."],     
        explanation:"When applying for a commercial driver license, you must provide information on all driving jobs held in the past ten years.",     
        questionTag:"general knowledge"     
   },    
   {
        id:'gk-1-16',    
        question:'What should you do if you are involved in an accident while operating a CMV?',    
        answers:[
            "Leave the scene immediately.",
            "Stay at the scene and provide assistance.",
            "Call emergency services only if there are injuries.",
            "Only report it to your employer."
        ],
        correctAnswers:["Stay at the scene and provide assistance."],
        explanation:"If involved in an accident while operating a CMV, stay at the scene and provide assistance as needed until help arrives.",
        questionTag:"general knowledge"
   },
   {
       id:'gk-1-17',    
       question:'What should be done after receiving any traffic violation while holding a CDL?',    
       answers:[
           "Ignore it; it does not affect my job.",
           "Notify my employer within two business days.",
           "Wait until I receive court papers before notifying anyone.",
           "Only inform my supervisor."
       ],
       correctAnswers:["Notify my employer within two business days."],
       explanation:"You must notify your employer within two business days after receiving any traffic violation while holding a CDL.",
       questionTag:"general knowledge"
   },
];
