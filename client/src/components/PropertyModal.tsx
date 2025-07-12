import React from 'react';
import { X, Heart, MapPin, Bed, Bath, Square, Calendar, Car, Sofa, Star, Camera, Calculator, TrendingUp, Phone, Mail, User } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyModalProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClose: () => void;
  onVirtualTour?: () => void;
  onMortgageCalculator?: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onClose,
  onVirtualTour,
  onMortgageCalculator
}) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    }
    return `₹${price.toLocaleString()}`;
  };

  const formatPriceHistory = () => {
    const latest = property.priceHistory[property.priceHistory.length - 1];
    const previous = property.priceHistory[property.priceHistory.length - 2];
    if (latest && previous) {
      const change = ((latest.price - previous.price) / previous.price) * 100;
      return {
        change: change.toFixed(1),
        isPositive: change > 0
      };
    }
    return null;
  };

  const priceChange = formatPriceHistory();

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
          {property.virtualTour && (
            <button
              onClick={onVirtualTour}
              className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-2 rounded flex items-center space-x-1 hover:bg-green-700 transition-colors"
            >
              <Camera className="w-4 h-4" />
              <span className="text-sm">Virtual Tour</span>
            </button>
          )}
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
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="text-gray-500">({property.reviews} reviews)</span>
                </div>
                {priceChange && (
                  <div className={`flex items-center space-x-1 ${priceChange.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {priceChange.isPositive ? '+' : ''}{priceChange.change}% this year
                    </span>
                  </div>
                )}
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
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Agent Information</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{property.agent.name}</h4>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Nearby Places</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Schools</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {property.nearbyPlaces.schools.slice(0, 2).map((school, index) => (
                    <li key={index}>• {school}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Hospitals</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {property.nearbyPlaces.hospitals.slice(0, 2).map((hospital, index) => (
                    <li key={index}>• {hospital}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Agent
            </button>
            <button 
              onClick={onMortgageCalculator}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculate EMI</span>
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4" />
              Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;