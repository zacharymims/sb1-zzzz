import React from 'react';

interface JobOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JobOpportunityModal({ isOpen, onClose }: JobOpportunityModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Congratulations on Passing!</h2>
        
        <p className="text-gray-600 mb-6">
          Are you currently looking for CDL job opportunities? We partner with top employers nationwide 
          offering competitive pay and benefits.
        </p>

        <div className="space-y-4">
          <a
            href="https://jobs.cdlemploymentsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center font-medium inline-block"
          >
            View CDL Job Opportunities
          </a>
          
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 font-medium"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}