import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from './Breadcrumbs';
import { getBreadcrumbs } from '../utils/breadcrumbs';
import SchemaScript from './SchemaScript';
import { generateSoftwareSchema, generateCourseListSchema } from '../utils/schema';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
];

export default function StateSelection() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const filteredStates = states.filter(state =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStateSelect = (state: string) => {
    const formattedState = state.toLowerCase().replace(/\s+/g, '-');
    navigate(`/state/${formattedState}`);
  };

  const breadcrumbs = getBreadcrumbs(location.pathname);
  const softwareSchema = generateSoftwareSchema();
  const courseListSchema = generateCourseListSchema();

  return (
    <>
      <Helmet>
        <title>Free CDL Practice Tests by State | CDL Test Prep</title>
        <meta 
          name="description" 
          content="Prepare for your CDL test with our free state-specific practice tests. Study Air Brakes, Combination Vehicles, Hazmat, and more. Updated for 2024." 
        />
        <meta 
          name="keywords" 
          content="CDL practice test, CDL test prep, commercial drivers license, state CDL test, CDL study guide" 
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <SchemaScript schema={softwareSchema} />
      <SchemaScript schema={courseListSchema} />
      
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              CDL Practice Tests by State
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your state to access free CDL practice tests tailored to your location's requirements
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <label htmlFor="search-states" className="sr-only">Search states</label>
              <input
                type="search"
                id="search-states"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search states..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStates.map((state) => (
              <button
                key={state}
                onClick={() => handleStateSelect(state)}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 text-left border border-gray-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-blue-500 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {state}
                    </h2>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        8 Tests Available
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      State-specific CDL practice tests
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredStates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No states found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}