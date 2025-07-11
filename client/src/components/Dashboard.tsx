import React from 'react';
import { Heart, Home, TrendingUp, MapPin } from 'lucide-react';
import { Property } from '../types/Property';

interface DashboardProps {
  favorites: Set<number>;
  properties: Property[];
}

const Dashboard: React.FC<DashboardProps> = ({ favorites, properties }) => {
  const favoriteProperties = properties.filter(p => favorites.has(p.id));
  
  const avgPrice = favoriteProperties.length > 0 
    ? favoriteProperties.reduce((sum, p) => sum + p.price, 0) / favoriteProperties.length
    : 0;

  const cityDistribution = favoriteProperties.reduce((acc, property) => {
    acc[property.city] = (acc[property.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const typeDistribution = favoriteProperties.reduce((acc, property) => {
    acc[property.type] = (acc[property.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Overview of your property preferences
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Favorites</p>
              <p className="text-3xl font-bold text-blue-600">{favorites.size}</p>
            </div>
            <Heart className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Properties</p>
              <p className="text-3xl font-bold text-green-600">{properties.length}</p>
            </div>
            <Home className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Favorite Price</p>
              <p className="text-2xl font-bold text-purple-600">
                {avgPrice > 0 ? formatPrice(avgPrice) : '₹0'}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cities Explored</p>
              <p className="text-3xl font-bold text-orange-600">
                {Object.keys(cityDistribution).length}
              </p>
            </div>
            <MapPin className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* City Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Favorites by City</h3>
          {Object.keys(cityDistribution).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(cityDistribution).map(([city, count]) => (
                <div key={city} className="flex items-center justify-between">
                  <span className="text-gray-700">{city}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${(count / favorites.size) * 100}%`
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No favorites yet</p>
          )}
        </div>

        {/* Type Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Favorites by Type</h3>
          {Object.keys(typeDistribution).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(typeDistribution).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-gray-700 capitalize">{type}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{
                          width: `${(count / favorites.size) * 100}%`
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No favorites yet</p>
          )}
        </div>
      </div>

      {/* Recent Favorites */}
      {favoriteProperties.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Favorites</h3>
          <div className="space-y-3">
            {favoriteProperties.slice(0, 5).map((property) => (
              <div key={property.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{property.title}</h4>
                  <p className="text-sm text-gray-600">{property.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">{formatPrice(property.price)}</p>
                  <p className="text-sm text-gray-500 capitalize">{property.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;