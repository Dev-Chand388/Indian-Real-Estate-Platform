import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import PropertyCard from './components/PropertyCard';
import PropertyDetails from './components/PropertyDetails';
import Dashboard from './components/Dashboard';
import FavoritesList from './components/FavoritesList';
import Footer from './components/Footer';
import { mockProperties } from './utils/mockData';
import { Property, SearchFilters as SearchFiltersType } from './types/Property';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'favorites' | 'dashboard'>('home');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [filters, setFilters] = useState<SearchFiltersType>({
    city: '',
    type: '',
    minPrice: 0,
    maxPrice: 50000000,
    bedrooms: '',
    minArea: 0,
    maxArea: 10000,
  });

  // Filter properties based on search and filters
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.city) {
      filtered = filtered.filter((property) => property.city === filters.city);
    }

    if (filters.type) {
      filtered = filtered.filter((property) => property.type === filters.type);
    }

    if (filters.bedrooms) {
      const bedroomCount = parseInt(filters.bedrooms);
      if (bedroomCount === 4) {
        filtered = filtered.filter((property) => property.bedrooms >= 4);
      } else {
        filtered = filtered.filter((property) => property.bedrooms === bedroomCount);
      }
    }

    filtered = filtered.filter(
      (property) =>
        property.price >= filters.minPrice &&
        property.price <= filters.maxPrice &&
        property.area >= filters.minArea &&
        property.area <= filters.maxArea
    );

    return filtered;
  }, [searchQuery, filters]);

  const favoriteProperties = useMemo(() => {
    return mockProperties.filter((property) => favorites.has(property.id));
  }, [favorites]);

  const handleToggleFavorite = (propertyId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('home');
  };

  const handleViewChange = (view: 'home' | 'favorites' | 'dashboard') => {
    setCurrentView(view);
  };

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'favorites':
        return (
          <FavoritesList
            favorites={favoriteProperties}
            onToggleFavorite={handleToggleFavorite}
            onViewChange={handleViewChange}
            onViewDetails={handleViewDetails}
          />
        );
      case 'dashboard':
        return (
          <Dashboard
            favoriteCount={favorites.size}
            onViewChange={handleViewChange}
          />
        );
      default:
        return (
          <>
            <Hero onSearch={handleSearch} />
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen(!filtersOpen)}
            />
            <main className="bg-gray-50 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Results Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'Featured Properties'}
                  </h2>
                  <p className="text-gray-600">
                    {filteredProperties.length} properties found
                  </p>
                </div>

                {/* Properties Grid */}
                {filteredProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProperties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        isFavorite={favorites.has(property.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        No properties found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Try adjusting your search criteria or filters to find more properties.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setFilters({
                            city: '',
                            type: '',
                            minPrice: 0,
                            maxPrice: 50000000,
                            bedrooms: '',
                            minArea: 0,
                            maxArea: 10000,
                          });
                        }}
                        className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={handleViewChange} />
      {renderContent()}
      <Footer />
      
      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default App;