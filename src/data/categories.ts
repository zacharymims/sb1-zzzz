import { Question } from '../types';

interface Test {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  tests: Test[];
}

export const categories: Category[] = [
  {
    id: 'air-brakes',
    name: 'Air Brakes',
    description: 'Practice tests covering air brake systems, dual air brake systems, and combination vehicle air brakes.',
    tests: [
      { id: 'test-1', name: 'Air Brakes Test 1' },
      { id: 'test-2', name: 'Air Brakes Test 2' },
      { id: 'test-3', name: 'Air Brakes Test 3' },
      { id: 'test-4', name: 'Air Brakes Test 4' },
      { id: 'test-5', name: 'Air Brakes Test 5' }

    ]
  },
  {
    id: 'combination-vehicles',
    name: 'Combination Vehicles',
    description: 'Tests covering coupling and uncoupling, inspecting combinations, and combination vehicle air brakes.',
    tests: [
      { id: 'test-1', name: 'Combination Vehicles Test 1' },
      { id: 'test-2', name: 'Combination Vehicles Test 2' },
      { id: 'test-3', name: 'Combination Vehicles Test 3' },
      { id: 'test-4', name: 'Combination Vehicles Test 4' },
      { id: 'test-5', name: 'Combination Vehicles Test 5' }


    ]
  },
  {
    id: 'doubles-triples',
    name: 'Doubles & Triples',
    description: 'Practice tests for operating double and triple trailer combinations safely.',
    tests: [
      { id: 'test-1', name: 'Doubles & Triples Test 1' },
      { id: 'test-2', name: 'Doubles & Triples Test 2' },
      { id: 'test-3', name: 'Doubles & Triples Test 3' },
      { id: 'test-4', name: 'Doubles & Triples Test 4' },
      { id: 'test-5', name: 'Doubles & Triples Test 5' }

    ]
  },
  {
    id: 'general-knowledge',
    name: 'General Knowledge',
    description: 'Essential CDL knowledge including vehicle inspection, basic control, and communication.',
    tests: [
      { id: 'test-1', name: 'General Knowledge Test 1' },
      { id: 'test-2', name: 'General Knowledge Test 2' },
      { id: 'test-3', name: 'General Knowledge Test 3' },
      { id: 'test-4', name: 'General Knowledge Test 4' },
      { id: 'test-5', name: 'General Knowledge Test 5' }

    ]
  },
  {
    id: 'hazmat',
    name: 'Hazardous Materials',
    description: 'Tests covering the transportation of hazardous materials and required placarding.',
    tests: [
      { id: 'test-1', name: 'Hazmat Test 1' },
      { id: 'test-2', name: 'Hazmat Test 2' },
      { id: 'test-3', name: 'Hazmat Test 3' },
      { id: 'test-4', name: 'Hazmat Test 4' },
      { id: 'test-5', name: 'Hazmat Test 5' }

    ]
  },
  {
    id: 'passenger',
    name: 'Passenger Transport',
    description: 'Practice tests for safely loading, transporting, and unloading passengers.',
    tests: [
      { id: 'test-1', name: 'Passenger Transport Test 1' },
      { id: 'test-2', name: 'Passenger Transport Test 2' },
      { id: 'test-3', name: 'Passenger Transport Test 3' },
      { id: 'test-4', name: 'Passenger Transport Test 4' },
      { id: 'test-5', name: 'Passenger Transport Test 5' }

    ]
  },
  {
    id: 'school-bus',
    name: 'School Bus',
    description: 'Tests covering school bus operation, student safety, and emergency procedures.',
    tests: [
      { id: 'test-1', name: 'School Bus Test 1' },
      { id: 'test-2', name: 'School Bus Test 2' },
      { id: 'test-3', name: 'School Bus Test 3' },
      { id: 'test-4', name: 'School Bus Test 4' },
      { id: 'test-5', name: 'School Bus Test 5' }

    ]
  },
  {
    id: 'tanker',
    name: 'Tanker Vehicles',
    description: 'Practice tests for operating vehicles designed to transport liquids or gases.',
    tests: [
      { id: 'test-1', name: 'Tanker Vehicles Test 1' },
      { id: 'test-2', name: 'Tanker Vehicles Test 2' },
      { id: 'test-3', name: 'Tanker Vehicles Test 3' },
      { id: 'test-4', name: 'Tanker Vehicles Test 4' },
      { id: 'test-5', name: 'Tanker Vehicles Test 5' }

    ]
  }
];