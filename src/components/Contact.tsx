import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | CDL Practice Tests</title>
        <meta 
          name="description" 
          content="Get in touch with our support team for any questions about CDL practice tests or technical assistance." 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help with any questions about our CDL practice tests
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Email Support</h2>
                  <p className="mt-2 text-gray-600">
                    For technical support or general inquiries, please email us at:
                  </p>
                  <a 
                    href="mailto:support@cdlemploymentsolutions.com"
                    className="mt-2 inline-block text-lg font-medium text-blue-600 hover:text-blue-500"
                  >
                    support@cdlemploymentsolutions.com
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What We Can Help With
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
                    <span>Technical issues with practice tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
                    <span>Questions about test content or scoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
                    <span>Account-related assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
                    <span>General inquiries about our services</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600">
                  We strive to respond to all inquiries within 24-48 business hours. For immediate job opportunities, please visit our{' '}
                  <a 
                    href="https://www.cdlemploymentsolutions.com/jobs"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    jobs page
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