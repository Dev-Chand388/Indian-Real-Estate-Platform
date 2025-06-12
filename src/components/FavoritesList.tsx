import React from 'react';
import { Heart, AlertCircle } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { Property } from '../types/Property';

interface FavoritesListProps {
  favorites: Property[];
  onToggleFavorite: (propertyId: string) => void;
  onViewChange: (view: 'home' | 'favorites' | 'dashboard') => void;
  onViewDetails: (property: Property) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onToggleFavorite,
  onViewChange,
  onViewDetails,
}) => {
  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
            <p className="text-gray-600">Properties you've saved for later</p>
          </div>

          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-white rounded-full p-6 mb-6 shadow-lg">
              <Heart className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
              Start exploring properties and click the heart icon to save your favorites here.
            </p>
            <button
              onClick={() => onViewChange('home')}
              className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors font-medium"
            >
              Explore Properties
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
          <p className="text-gray-600">
            {favorites.length} saved {favorites.length === 1 ? 'property' : 'properties'}
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-blue-900">Stay Updated</h3>
              <p className="text-sm text-blue-700 mt-1">
                We'll notify you of price changes and similar properties for your saved listings.
              </p>
            </div>
          </div>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;