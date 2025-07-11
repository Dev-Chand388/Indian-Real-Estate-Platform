import React from 'react';
import { X, Heart, MapPin, Bed, Bath, Square, Calendar, Car, Sofa } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyModalProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onClose
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={() => onToggleFavorite(property.id)}
            className={`absolute top-4 left-4 p-2 rounded-full transition-colors ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium capitalize">
            {property.type}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-600 mt-2 md:mt-0">
              {formatPrice(property.price)}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Bed className="w-5 h-5" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Bath className="w-5 h-5" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Square className="w-5 h-5" />
              <span>{property.area} sq ft</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>Built {property.yearBuilt}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Car className={`w-5 h-5 ${property.parking ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={property.parking ? 'text-gray-900' : 'text-gray-400'}>
                  Parking {property.parking ? 'Available' : 'Not Available'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Sofa className={`w-5 h-5 ${property.furnished ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={property.furnished ? 'text-gray-900' : 'text-gray-400'}>
                  {property.furnished ? 'Furnished' : 'Unfurnished'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Agent
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;