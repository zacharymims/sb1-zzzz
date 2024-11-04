import { AcademicCapIcon, CheckCircleIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';

const features = [
  {
    name: 'State-Specific Tests',
    description: 'Practice tests tailored to your state\'s CDL requirements and regulations.',
    icon: GlobeAltIcon
  },
  {
    name: 'Comprehensive Coverage',
    description: 'All CDL endorsements covered: Air Brakes, Combination Vehicles, Hazmat, and more.',
    icon: CheckCircleIcon
  },
  {
    name: 'Always Free',
    description: 'No hidden fees or subscriptions. All practice tests are completely free.',
    icon: AcademicCapIcon
  },
  {
    name: 'Updated Content',
    description: 'Regular updates to match current CDL test requirements and regulations.',
    icon: ClockIcon
  }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Free CDL Practice Tests</title>
        <meta 
          name="description" 
          content="Learn about our mission to provide free, comprehensive CDL practice tests to help aspiring commercial drivers succeed." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              About CDL Practice Tests
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Helping aspiring commercial drivers succeed with free, comprehensive practice tests
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We believe that access to quality CDL test preparation materials should be free and accessible to everyone. 
                Our mission is to help aspiring commercial drivers prepare for their CDL tests effectively, leading to 
                successful careers in the transportation industry.
              </p>
              <p className="text-gray-600">
                As a service provided by{' '}
                <a 
                  href="https://www.cdlemploymentsolutions.com" 
                  className="text-blue-600 hover:text-blue-500"
                >
                  CDL Employment Solutions
                </a>
                , we're committed to supporting the entire journey from test preparation to job placement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature) => (
              <div 
                key={feature.name}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our practice tests are designed to simulate the actual CDL test experience, helping you 
                  build confidence and identify areas that need more attention. We offer:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Regularly updated question banks based on current CDL requirements</li>
                  <li>Detailed explanations for every answer to enhance learning</li>
                  <li>State-specific practice tests for all CDL endorsements</li>
                  <li>Progress tracking and performance analytics</li>
                  <li>Mobile-friendly design for studying on the go</li>
                </ul>
                <p className="mt-6">
                  Ready to start practicing? Select your state and begin your journey toward earning your CDL. 
                  When you're ready to find employment, explore opportunities through{' '}
                  <a 
                    href="https://www.cdlemploymentsolutions.com/jobs" 
                    className="text-blue-600 hover:text-blue-500"
                  >
                    CDL Employment Solutions
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}