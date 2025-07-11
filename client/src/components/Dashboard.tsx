import React from 'react';
import { Heart, Search, TrendingUp, Eye, Calendar, MapPin } from 'lucide-react';

interface DashboardProps {
  favoriteCount: number;
  onViewChange: (view: 'home' | 'favorites' | 'dashboard') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ favoriteCount, onViewChange }) => {
  const recentSearches = [
    { query: 'Mumbai Apartments', timestamp: '2 hours ago', results: 150 },
    { query: '3BHK Bangalore', timestamp: '1 day ago', results: 89 },
    { query: 'Villas in Gurgaon', timestamp: '3 days ago', results: 23 },
  ];

  const viewedProperties = [
    { title: 'Luxury 3BHK in Bandra West', price: 85, views: 3, lastViewed: '1 hour ago' },
    { title: 'Modern Villa in Whitefield', price: 120, views: 2, lastViewed: '6 hours ago' },
    { title: '2BHK Flat in Sector 62', price: 45, views: 1, lastViewed: '2 days ago' },
  ];

  const handleSearchAgain = (query: string) => {
    // In a real app, this would trigger a search with the query
    onViewChange('home');
  };

  const handleViewProperty = (propertyTitle: string) => {
    // In a real app, this would navigate to the property details
    console.log('Viewing property:', propertyTitle);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your property search journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Saved Properties</p>
                <p className="text-3xl font-bold text-orange-600">{favoriteCount}</p>
              </div>
              <Heart className="h-12 w-12 text-orange-200" />
            </div>
            <button
              onClick={() => onViewChange('favorites')}
              className="mt-4 text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors"
            >
              View All →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Searches</p>
                <p className="text-3xl font-bold text-blue-600">24</p>
              </div>
              <Search className="h-12 w-12 text-blue-200" />
            </div>
            <p className="mt-4 text-green-600 text-sm font-medium">
              ↑ 12% from last week
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Properties Viewed</p>
                <p className="text-3xl font-bold text-green-600">47</p>
              </div>
              <Eye className="h-12 w-12 text-green-200" />
            </div>
            <p className="mt-4 text-green-600 text-sm font-medium">
              ↑ 8% from last week
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Searches */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">Recent Searches</h2>
            </div>
            <div className="space-y-4">
              {recentSearches.map((search, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{search.query}</p>
                    <p className="text-sm text-gray-600">{search.results} results • {search.timestamp}</p>
                  </div>
                  <button 
                    onClick={() => handleSearchAgain(search.query)}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    Search Again
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">Recently Viewed</h2>
            </div>
            <div className="space-y-4">
              {viewedProperties.map((property, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{property.title}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>₹{property.price}L</span>
                      <span>Viewed {property.views} times</span>
                      <span>{property.lastViewed}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleViewProperty(property.title)}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Market Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">+12%</p>
              <p className="text-sm text-gray-600">Mumbai prices this month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">₹85L</p>
              <p className="text-sm text-gray-600">Average 3BHK price</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">24 days</p>
              <p className="text-sm text-gray-600">Average time on market</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onViewChange('home')}
              className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>New Search</span>
            </button>
            <button
              onClick={() => onViewChange('favorites')}
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>View Favorites</span>
            </button>
            <button 
              onClick={() => onViewChange('home')}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>Explore Areas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;