import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Employment</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://www.cdlemploymentsolutions.com/jobs" 
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  CDL Job Openings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link 
                  to="/about"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            A service provided by{' '}
            <a 
              href="https://www.cdlemploymentsolutions.com" 
              className="text-blue-600 hover:text-blue-500"
            >
              CDL Employment Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}