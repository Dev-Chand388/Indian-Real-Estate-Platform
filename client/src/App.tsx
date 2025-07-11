import React, { useState, useMemo } from 'react';
import { Search, Filter, Heart, Home, BarChart3, MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property, FilterState } from './types/Property';
import { mockProperties } from './utils/mockData';
import PropertyCard from './components/PropertyCard';
import PropertyModal from './components/PropertyModal';
import FilterPanel from './components/FilterPanel';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

type View = 'home' | 'favorites' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [filters, setFilters] = useState<FilterState>({
    city: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    minArea: '',
    maxArea: ''
  });

  const filteredProperties = useMemo(() => {
    let filtered = mockProperties;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.city) {
      filtered = filtered.filter(property => 
        property.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(property => property.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(property => property.price <= parseInt(filters.maxPrice));
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(filters.bedrooms));
    }

    if (filters.minArea) {
      filtered = filtered.filter(property => property.area >= parseInt(filters.minArea));
    }

    if (filters.maxArea) {
      filtered = filtered.filter(property => property.area <= parseInt(filters.maxArea));
    }

    return filtered;
  }, [searchTerm, filters]);

  const favoriteProperties = useMemo(() => {
    return mockProperties.filter(property => favorites.has(property.id));
  }, [favorites]);

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      minArea: '',
      maxArea: ''
    });
    setSearchTerm('');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'favorites':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="w-5 h-5 text-red-500" />
                <span>{favorites.size} properties</span>
              </div>
            </div>
            
            {favoriteProperties.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
                <p className="text-gray-500">Start browsing properties and add them to your favorites!</p>
                <button
                  onClick={() => setCurrentView('home')}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Properties
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={favorites.has(property.id)}
                    onToggleFavorite={toggleFavorite}
                    onViewDetails={setSelectedProperty}
                  />
                ))}
              </div>
            )}
          </div>
        );

      case 'dashboard':
        return <Dashboard favorites={favorites} properties={mockProperties} />;

      default:
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">Find Your Dream Home</h1>
              <p className="text-xl text-gray-600">Discover the perfect property in India's top cities</p>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by location, property name..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>

              {showFilters && (
                <FilterPanel
                  filters={filters}
                  onFiltersChange={setFilters}
                  onClearFilters={clearFilters}
                />
              )}
            </div>

            {/* Results */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">
                {filteredProperties.length} Properties Found
              </h2>
              {(searchTerm || Object.values(filters).some(f => f !== '')) && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.has(property.id)}
                  onToggleFavorite={toggleFavorite}
                  onViewDetails={setSelectedProperty}
                />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isFavorite={favorites.has(selectedProperty.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}

export default App;