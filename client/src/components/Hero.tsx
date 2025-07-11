import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-orange-600 block">Home in India</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover thousands of properties across India's major cities. 
            From luxury apartments to family homes, find your dream property today.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="relative flex items-center bg-white rounded-lg shadow-lg p-2">
              <MapPin className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search by city, location, or property type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors flex items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50,000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;