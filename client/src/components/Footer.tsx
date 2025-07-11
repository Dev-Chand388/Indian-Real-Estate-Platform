import React from 'react';
import { Home, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-orange-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">PropHub</span>
                <span className="text-sm text-gray-400 -mt-1">India</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              India's leading real estate platform helping millions find their perfect home. 
              Discover, compare, and connect with verified properties across the country.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@prophub.in</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91-9876543210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Search Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Trends</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EMI Calculator</a></li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bangalore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pune</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PropHub India. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Made with ❤️ by <span className="text-orange-500 font-medium">Kethe Dev Chand</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;