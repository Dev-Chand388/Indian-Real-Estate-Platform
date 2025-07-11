import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, IndianRupee } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (propertyId: string) => void;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
}) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} Lakh`;
    }
    return price.toLocaleString('en-IN');
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(property.id);
  };

  const handleViewDetails = () => {
    onViewDetails(property);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        {property.isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            New
          </span>
        )}
        {property.isFeatured && !property.isNew && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-center space-x-1 mb-2">
          <IndianRupee className="h-4 w-4 text-green-600" />
          <span className="text-2xl font-bold text-green-600">
            {formatPrice(property.price)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center space-x-1 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{property.location}, {property.city}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{property.bedrooms} BHK</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="h-4 w-4" />
            <span className="text-sm">{property.area} sq ft</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleViewDetails}
          className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;