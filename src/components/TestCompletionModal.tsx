import React, { useState } from 'react';
import RatingReviewModal from './RatingReviewModal';
import JobOpportunityModal from './JobOpportunityModal';

interface TestCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  category: string;
  onSubmitRating: (rating: number, comment: string) => void;
}

export default function TestCompletionModal({ 
  isOpen, 
  onClose, 
  score, 
  category,
  onSubmitRating 
}: TestCompletionModalProps) {
  const [showRatingModal, setShowRatingModal] = useState(true);
  const [showJobModal, setShowJobModal] = useState(false);

  const handleRatingSubmit = (rating: number, comment: string, name: string) => {
    onSubmitRating(rating, comment);
    setShowRatingModal(false);
    setShowJobModal(true);
  };

  const handleJobModalClose = () => {
    setShowJobModal(false);
    setShowRatingModal(true);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {showRatingModal && (
        <RatingReviewModal
          isOpen={true}
          onClose={onClose}
          onSubmit={handleRatingSubmit}
          category={category}
        />
      )}
      {showJobModal && (
        <JobOpportunityModal
          isOpen={true}
          onClose={handleJobModalClose}
        />
      )}
    </>
  );
}