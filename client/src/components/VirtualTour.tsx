import React from 'react';
import { X, Play, Camera, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface VirtualTourProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
  tourUrl?: string;
}

const VirtualTour: React.FC<VirtualTourProps> = ({
  isOpen,
  onClose,
  propertyTitle,
  tourUrl
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Virtual Tour - {propertyTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="relative bg-gray-900" style={{ height: '70vh' }}>
          {tourUrl ? (
            <iframe
              src={tourUrl}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title="Virtual Tour"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white">
                <div className="bg-blue-600 rounded-full p-6 mx-auto mb-4 w-24 h-24 flex items-center justify-center">
                  <Play className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2">360° Virtual Tour</h3>
                <p className="text-gray-300 mb-6">Experience this property from the comfort of your home</p>
                <div className="bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <Camera className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                      <div className="text-sm">HD Quality</div>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                      <RotateCcw className="h-8 w-8 mx-auto mb-2 text-green-400" />
                      <div className="text-sm">360° View</div>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Start Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ZoomIn className="h-4 w-4" />
                <span>Zoom In</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ZoomOut className="h-4 w-4" />
                <span>Zoom Out</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <RotateCcw className="h-4 w-4" />
                <span>Reset View</span>
              </button>
            </div>
            <div className="text-sm text-gray-600">
              Use mouse to navigate • Scroll to zoom • Click and drag to rotate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;