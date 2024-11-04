import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { generateCourseListSchema } from '../../utils/schema';
import { useRatings } from '../../hooks/useRatings';

export default function CourseListSchema() {
  const { state } = useParams();
  const { getAllRatings } = useRatings();

  useEffect(() => {
    const ratings = getAllRatings();
    const schema = generateCourseListSchema(state, ratings);
    
    const schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.text = JSON.stringify(schema, null, 2);
    document.head.appendChild(schemaTag);

    return () => {
      document.head.removeChild(schemaTag);
    };
  }, [state]);

  return null;
}