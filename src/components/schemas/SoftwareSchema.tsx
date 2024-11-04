import { useEffect } from 'react';
import { generateSoftwareSchema } from '../../utils/schema';
import { useRatings } from '../../hooks/useRatings';

export default function SoftwareSchema() {
  const { calculateOverallRating } = useRatings();
  const { overallRating, totalReviews } = calculateOverallRating();

  useEffect(() => {
    const schema = generateSoftwareSchema(overallRating, totalReviews);
    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.text = JSON.stringify(schema, null, 2);
    document.head.appendChild(schemaTag);

    return () => {
      document.head.removeChild(schemaTag);
    };
  }, [overallRating, totalReviews]);

  return null;
}