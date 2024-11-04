import { useMemo } from 'react';

const defaultRatings = {
  'air-brakes': { averageRating: 4.5, totalReviews: 150 },
  'combination-vehicles': { averageRating: 4.3, totalReviews: 120 },
  'doubles-triples': { averageRating: 4.7, totalReviews: 90 },
  'general-knowledge': { averageRating: 4.6, totalReviews: 200 },
  'hazmat': { averageRating: 4.4, totalReviews: 110 },
  'passenger': { averageRating: 4.8, totalReviews: 95 },
  'school-bus': { averageRating: 4.9, totalReviews: 85 },
  'tanker': { averageRating: 4.2, totalReviews: 75 }
};

export function useRatings() {
  const getAllRatings = () => defaultRatings;

  const getRatingForCategory = (category: string) => {
    return defaultRatings[category] || { averageRating: 0, totalReviews: 0 };
  };

  const calculateOverallRating = () => {
    const ratings = Object.values(defaultRatings);
    const overallRating = ratings.reduce((acc, curr) => acc + curr.averageRating, 0) / ratings.length;
    const totalReviews = ratings.reduce((acc, curr) => acc + curr.totalReviews, 0);
    return { overallRating, totalReviews };
  };

  return {
    getAllRatings,
    getRatingForCategory,
    calculateOverallRating
  };
}