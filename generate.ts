import * as fs from 'fs';
import * as path from 'path';

const states = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
  'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
  'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
  'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
  'wisconsin', 'wyoming'
];

const categories = [
  'air-brakes',
  'combination-vehicles',
  'doubles-triples',
  'general-knowledge',
  'hazmat',
  'passenger',
  'school-bus',
  'tanker'
];

function capitalizeFirstLetter(string: string): string {
  return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function generateTestFile(state: string, category: string): string {
  const stateCode = state.substring(0, 2);
  const categoryShort = category.split('-').map(word => word[0]).join('');
  
  return `import { Question } from '../../../../types';

export const ${state}${capitalizeFirstLetter(category)}1: Question[] = [
  {
    id: '${stateCode}-${categoryShort}1-1',
    question: 'Sample question for ${state} ${category}?',
    answers: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4'
    ],
    correctAnswers: ['Option 1'],
    explanation: 'This is a sample explanation for the ${state} ${category} test.',
    questionTag: '${category}-1'
  }
];`;
}

function generateCategoryIndex(state: string, category: string): string {
  return `import { ${state}${capitalizeFirstLetter(category)}1 } from './test-1';

export const ${state}${capitalizeFirstLetter(category)}Questions = {
  '${category}-1': ${state}${capitalizeFirstLetter(category)}1
};`;
}

function generateStateIndex(state: string): string {
  const imports = categories
    .map(category => `import { ${state}${capitalizeFirstLetter(category)}Questions } from './${category}';`)
    .join('\n');

  const exports = `\nexport const ${state}Questions = {
  ${categories.map(category => `'${category}': ${state}${capitalizeFirstLetter(category)}Questions`).join(',\n  ')}
};`;

  return imports + exports;
}

// Create base directory
const baseDir = 'cdl-tests';
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

// Generate directory structure
states.forEach(state => {
  // Create state directory
  const stateDir = path.join(baseDir, state);
  if (!fs.existsSync(stateDir)) {
    fs.mkdirSync(stateDir);
  }

  // Create state index.ts
  fs.writeFileSync(
    path.join(stateDir, 'index.ts'),
    generateStateIndex(state)
  );

  // Create category directories and files
  categories.forEach(category => {
    const categoryDir = path.join(stateDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir);
    }

    // Create category index.ts
    fs.writeFileSync(
      path.join(categoryDir, 'index.ts'),
      generateCategoryIndex(state, category)
    );

    // Create test file
    fs.writeFileSync(
      path.join(categoryDir, 'test-1.ts'),
      generateTestFile(state, category)
    );
  });
});

console.log('Directory structure generated successfully!');