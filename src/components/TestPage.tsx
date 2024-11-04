import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Question } from '../types';
import { categories } from '../data/categories';
import { getTestQuestions } from '../data/testData';
import Breadcrumbs from './Breadcrumbs';
import { getBreadcrumbs } from '../utils/breadcrumbs';
import { generateTestSchema } from '../utils/schema';
import { useRatings } from '../hooks/useRatings';
import TestCompletionModal from './TestCompletionModal';

export default function TestPage() {
  const { state, category, testId } = useParams();
  const location = useLocation();
  const { getRatingForCategory } = useRatings();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [maxIncorrect, setMaxIncorrect] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  useEffect(() => {
    const loadQuestions = async () => {
      if (!state || !category || !testId) {
        setError('Invalid test parameters');
        setIsLoading(false);
        return;
      }

      try {
        const testQuestions = await getTestQuestions(state, category, testId);
        if (testQuestions.length === 0) {
          setError('No questions found for this test');
        } else {
          setQuestions(testQuestions);
          setMaxIncorrect(Math.floor(testQuestions.length * 0.2)); // 80% passing requirement
        }
      } catch (err) {
        setError('Error loading test questions');
        console.error('Error loading questions:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [state, category, testId]);

  // Generate schema for the test page
  useEffect(() => {
    if (!state || !category || !testId) return;

    // Format state and category names for display
    const formattedState = state
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

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

    // Add schema to head
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [state, category, testId]);

  const handleAnswerSelect = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswers([answer]);
      setHasAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    const currentQ = questions[currentQuestion];
    const isCorrect = currentQ.correctAnswers.includes(selectedAnswers[0]);
    const newIncorrectCount = isCorrect ? incorrectCount : incorrectCount + 1;

    setIncorrectCount(newIncorrectCount);

    if (newIncorrectCount > maxIncorrect) {
      setIsTestComplete(true);
      setScore((currentQuestion / questions.length) * 100);
      setShowCompletionModal(true);
      return;
    }

    if (currentQuestion + 1 >= questions.length) {
      setIsTestComplete(true);
      const finalScore = ((currentQuestion + (isCorrect ? 1 : 0)) / questions.length) * 100;
      setScore(finalScore);
      setShowCompletionModal(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswers([]);
      setHasAnswered(false);
    }
  };

  const handleRatingSubmit = (rating: number, comment: string) => {
    const savedRatings = localStorage.getItem(`${state}-ratings`);
    const ratings = savedRatings ? JSON.parse(savedRatings) : {};
    
    const categoryRating = ratings[category || ''] || {
      state: state,
      category: category,
      averageRating: 0,
      totalReviews: 0,
      reviews: []
    };

    const newReview = {
      id: Date.now().toString(),
      rating,
      comment,
      userName: 'Anonymous',
      date: new Date().toLocaleDateString()
    };

    categoryRating.reviews.unshift(newReview);
    categoryRating.totalReviews = categoryRating.reviews.length;
    categoryRating.averageRating = categoryRating.reviews.reduce((acc, r) => acc + r.rating, 0) / categoryRating.totalReviews;

    ratings[category || ''] = categoryRating;
    localStorage.setItem(`${state}-ratings`, JSON.stringify(ratings));
  };

  const getAnswerClassName = (answer: string) => {
    if (!hasAnswered) {
      return 'border-gray-300 hover:border-blue-600';
    }

    const currentQ = questions[currentQuestion];
    const isSelected = selectedAnswers.includes(answer);
    const isCorrect = currentQ.correctAnswers.includes(answer);

    if (isCorrect) {
      return 'border-green-600 bg-green-50 text-green-700';
    }
    if (isSelected && !isCorrect) {
      return 'border-red-600 bg-red-50 text-red-700';
    }
    return 'border-gray-300 opacity-50';
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading test questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link
            to={`/state/${state}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
          >
            Return to Test Categories
          </Link>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return null;
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const incorrectProgress = (incorrectCount / maxIncorrect) * 100;

  return (
    <>
      <Helmet>
        <title>{`${state} CDL ${category} Practice Test ${testId.replace('test-', '')}`}</title>
        <meta 
          name="description" 
          content={`Free CDL ${category} practice test for ${state}. Question ${currentQuestion + 1} of ${questions.length}.`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Progress: {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Incorrect Answers: {incorrectCount} of {maxIncorrect} allowed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    incorrectProgress > 75 ? 'bg-red-600' : 'bg-yellow-600'
                  }`}
                  style={{ width: `${incorrectProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQ.question}
              </h2>
              <div className="space-y-3">
                {currentQ.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(answer)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-4 rounded-lg border transition-colors duration-200 ${getAnswerClassName(answer)}`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>

            {hasAnswered && (
              <div className="mb-8 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Explanation:</h3>
                <p className="text-gray-700">{currentQ.explanation}</p>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={!hasAnswered}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <TestCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        score={score}
        category={category || ''}
        onSubmitRating={handleRatingSubmit}
      />
    </>
  );
}