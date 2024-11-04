import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function StarRating({ 
  rating, 
  onRatingChange, 
  readonly = false,
  size = 'md'
}: StarRatingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const starClass = sizes[size];

  const handleStarClick = (star: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(star);
    }
  };

  const handleStarHover = (star: number) => {
    if (!readonly && onRatingChange) {
      const stars = document.querySelectorAll('.star-rating-btn');
      stars.forEach((s, index) => {
        if (index < star) {
          s.classList.add('hover:text-yellow-400');
        } else {
          s.classList.remove('hover:text-yellow-400');
        }
      });
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={() => handleStarHover(0)}
          className={`star-rating-btn transition-colors duration-150 ${
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
          }`}
          disabled={readonly}
          type="button"
          aria-label={`Rate ${star} stars`}
        >
          {star <= rating ? (
            <StarSolid className={`${starClass} text-yellow-400`} />
          ) : (
            <StarOutline className={`${starClass} ${readonly ? 'text-gray-300' : 'text-gray-400'}`} />
          )}
        </button>
      ))}
    </div>
  );
}