import { Question } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const getTestQuestions = async (state: string, category: string, testId: string): Promise<Question[]> => {
  try {
    // Convert state name to lowercase and replace spaces with hyphens
    const formattedState = state.toLowerCase().replace(/\s+/g, '-');
    
    // Dynamically import the test file based on the testId
    const testModule = await import(`../../cdl-tests/${formattedState}/${category}/${testId}.ts`);
    
    // Get the questions array using the correct export name format
    // e.g., alabamaAirBrakes1, alabamaAirBrakes3, etc.
    const statePrefix = formattedState.replace(/-/g, '');
    const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    const testNumber = testId.replace('test-', '');
    const exportName = `${statePrefix}${categoryName}${testNumber}`;
    
    // Get questions and shuffle them
    const questions = testModule[exportName] || [];
    return shuffleArray(questions);
  } catch (error) {
    console.error('Error loading questions:', error);
    return [];
  }
};