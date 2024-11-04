import { useState } from 'react';
import { Review, CategoryRating } from '../types';
import StarRating from './StarRating';

interface ReviewSectionProps {
  categoryRating: CategoryRating;
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export default function ReviewSection({ categoryRating, onAddReview }: ReviewSectionProps) {
  const [newRating, setNewRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    onAddReview({
      rating: newRating,
      comment,
      userName
    });

    // Reset form
    setNewRating(0);
    setComment('');
    setUserName('');
    setIsSubmitting(false);
  };

  return (
    <div className="mt-8">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <StarRating rating={categoryRating.averageRating} readonly size="lg" />
          <span className="text-lg font-medium">
            {categoryRating.averageRating.toFixed(1)} out of 5
          </span>
        </div>
        <p className="text-gray-600 mt-1">
          Based on {categoryRating.totalReviews} reviews
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <StarRating 
              rating={newRating} 
              onRatingChange={setNewRating}
              size="md"
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Review
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || newRating === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
          >
            Submit Review
          </button>
        </div>
      </form>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Reviews</h3>
        {categoryRating.reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet. Be the first to review!</p>
        ) : (
          categoryRating.reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-4 mb-2">
                <StarRating rating={review.rating} readonly size="sm" />
                <span className="font-medium">{review.userName}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}