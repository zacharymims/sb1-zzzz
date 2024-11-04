import { generateSoftwareSchema, generateTestSchema, generateCourseListSchema } from '../utils/schema';
import { useRatings } from '../hooks/useRatings';
import { useParams } from 'react-router-dom';

export default function SchemaDebug() {
  const { state, category, testId } = useParams();
  const { calculateOverallRating, getAllRatings, getRatingForCategory } = useRatings();
  const { overallRating, totalReviews } = calculateOverallRating();

  // Format state name from URL parameter
  const formattedState = state
    ? state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '';

  // Format category name from URL parameter
  const formattedCategory = category
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '';

  const { averageRating, totalReviews: categoryReviews } = getRatingForCategory(category || '');

  // Test Software Schema
  const softwareSchema = generateSoftwareSchema(overallRating, totalReviews);
  console.log('Software Schema:', softwareSchema);

  // Test Course Schema with current state, category and test ID
  const testSchema = generateTestSchema(
    formattedState,
    formattedCategory,
    testId || 'test-1',
    averageRating,
    categoryReviews
  );
  console.log('Test Schema:', testSchema);

  // Test Course List Schema
  const courseListSchema = generateCourseListSchema(formattedState, getAllRatings());
  console.log('Course List Schema:', courseListSchema);

  return null;
}