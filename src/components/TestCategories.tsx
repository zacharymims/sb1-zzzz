import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { CategoryRating } from '../types';
import { categories } from '../data/categories';
import ReviewSection from './ReviewSection';
import StarRating from './StarRating';
import Breadcrumbs from './Breadcrumbs';
import { getBreadcrumbs } from '../utils/breadcrumbs';
import SchemaScript from './SchemaScript';
import { generateSoftwareSchema } from '../utils/schema';
import { 
  BookOpenIcon,
  TruckIcon, 
  ShieldExclamationIcon,
  UsersIcon,
  BeakerIcon,
  AcademicCapIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const SchoolBusIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 12H2v4h2M20 12h2v4h-2" />
    <rect x="4" y="12" width="16" height="6" rx="2" />
    <path d="M7 18v2M17 18v2M15 6h2M7 6h2M9 6v3M15 6v3" />
    <circle cx="8" cy="15" r="1" />
    <circle cx="16" cy="15" r="1" />
  </svg>
);

const categoryIcons = {
  'air-brakes': {
    icon: TruckIcon,
    color: 'text-blue-600'
  },
  'combination-vehicles': {
    icon: TruckIcon,
    color: 'text-indigo-600'
  },
  'doubles-triples': {
    icon: TruckIcon,
    color: 'text-purple-600'
  },
  'general-knowledge': {
    icon: BookOpenIcon,
    color: 'text-green-600'
  },
  'hazmat': {
    icon: ShieldExclamationIcon,
    color: 'text-red-600'
  },
  'passenger': {
    icon: UsersIcon,
    color: 'text-orange-600'
  },
  'school-bus': {
    icon: SchoolBusIcon,
    color: 'text-yellow-600'
  },
  'tanker': {
    icon: BeakerIcon,
    color: 'text-teal-600'
  }
};

export default function TestCategories() {
  const { state } = useParams();
  const location = useLocation();
  const formattedState = state?.replace(/-/g, ' ');
  const [categoryRatings, setCategoryRatings] = useState<Record<string, CategoryRating>>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadRatings = () => {
      const savedRatings = localStorage.getItem(`${state}-ratings`);
      if (savedRatings) {
        setCategoryRatings(JSON.parse(savedRatings));
      } else {
        const initialRatings: Record<string, CategoryRating> = {};
        categories.forEach((category) => {
          initialRatings[category.id] = {
            state: state || '',
            category: category.id,
            averageRating: 0,
            totalReviews: 0,
            reviews: []
          };
        });
        setCategoryRatings(initialRatings);
        localStorage.setItem(`${state}-ratings`, JSON.stringify(initialRatings));
      }
    };

    loadRatings();
  }, [state]);

  const handleAddReview = (categoryId: string, review: { rating: number; comment: string; userName: string }) => {
    const newRatings = { ...categoryRatings };
    const category = newRatings[categoryId];

    const newReview = {
      id: Date.now().toString(),
      ...review,
      date: new Date().toLocaleDateString()
    };

    category.reviews.unshift(newReview);
    category.totalReviews = category.reviews.length;
    category.averageRating = category.reviews.reduce((acc, r) => acc + r.rating, 0) / category.totalReviews;

    setCategoryRatings(newRatings);
    localStorage.setItem(`${state}-ratings`, JSON.stringify(newRatings));
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);
  const schema = generateSoftwareSchema();

  return (
    <>
      <SchemaScript schema={schema} />
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 capitalize mb-4">
          {formattedState} CDL Practice Tests
        </h1>
        <p className="text-xl text-gray-600">Select a test category to begin practicing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons].icon;
          const iconColor = categoryIcons[category.id as keyof typeof categoryIcons].color;
          
          return (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${iconColor} bg-opacity-10`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <StarRating 
                        rating={categoryRatings[category.id]?.averageRating || 0} 
                        readonly 
                        size="sm"
                      />
                    </div>
                    <p className="text-gray-600 mt-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.tests.map((test) => (
                    <Link
                      key={`${category.id}-${test.id}`}
                      to={`/state/${state}/${category.id}/${test.id}`}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <span className="font-medium text-gray-900">{test.name}</span>
                      <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Start Test →
                      </span>
                    </Link>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  className="mt-6 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  {selectedCategory === category.id ? 'Hide Reviews' : 'Show Reviews'}
                  <ChevronDownIcon 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      selectedCategory === category.id ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {selectedCategory === category.id && (
                  <ReviewSection
                    categoryRating={categoryRatings[category.id]}
                    onAddReview={(review) => handleAddReview(category.id, review)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}