import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { generateTestSchema } from '../../utils/schema';
import { useRatings } from '../../hooks/useRatings';
import { getBreadcrumbs } from '../../utils/breadcrumbs';

export default function TestSchema() {
  const { state, category, testId } = useParams();
  const location = useLocation();
  const { getRatingForCategory } = useRatings();

  useEffect(() => {
    if (!state || !category || !testId) return;

    // Format state name from URL parameter
    const formattedState = state
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Format category name from URL parameter
    const formattedCategory = category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const { averageRating, totalReviews } = getRatingForCategory(category);
    
    const schema = generateTestSchema(
      formattedState,
      formattedCategory,
      testId,
      averageRating,
      totalReviews
    );
    
    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.text = JSON.stringify(schema, null, 2);
    document.head.appendChild(schemaTag);

    return () => {
      document.head.removeChild(schemaTag);
    };
  }, [state, category, testId]);

  return null;
}