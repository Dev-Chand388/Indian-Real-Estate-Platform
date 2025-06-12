import React from 'react';
import { X, MapPin, Bed, Bath, Square, IndianRupee, Calendar, User, Phone, Mail } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyDetailsProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property, isOpen, onClose }) => {
  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} Lakh`;
    }
    return price.toLocaleString('en-IN');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Property Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image */}
          <div className="mb-6">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Property Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2">
              {/* Title and Price */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <div className="flex items-center space-x-1 mb-4">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                  <span className="text-3xl font-bold text-green-600">
                    {formatPrice(property.price)}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>{property.location}, {property.city}, {property.state}</span>
                </div>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Bed className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Bath className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Square className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 text-orange-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Type</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {property.type}
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Rajesh Kumar</div>
                      <div className="text-sm text-gray-600">Property Agent</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">+91-9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">rajesh@prophub.in</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium">
                    Call Now
                  </button>
                  <button className="w-full bg-white text-orange-600 border border-orange-600 py-2 px-4 rounded-md hover:bg-orange-50 transition-colors font-medium">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Property Stats */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listed</span>
                    <span className="text-gray-900 font-medium">15 days ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Views</span>
                    <span className="text-gray-900 font-medium">234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interested</span>
                    <span className="text-gray-900 font-medium">12 people</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price/Sq Ft</span>
                    <span className="text-gray-900 font-medium">
                      ₹{Math.round(property.price / property.area).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;