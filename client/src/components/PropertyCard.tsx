import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Eye } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onViewDetails
}) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(property.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium capitalize">
          {property.type}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area} sq ft</span>
          </div>
        </div>
        
        <button
          onClick={() => onViewDetails(property)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;