import React from 'react';
import { Home, Heart, User, Menu, Search } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: 'home' | 'favorites' | 'dashboard') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <Home className="h-8 w-8 text-orange-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">PropHub</span>
              <span className="text-xs text-gray-500 -mt-1">India</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onViewChange('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            <button
              onClick={() => onViewChange('favorites')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'favorites'
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              <Heart className="h-4 w-4" />
              <span>Favorites</span>
            </button>
            <button
              onClick={() => onViewChange('dashboard')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'dashboard'
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="flex justify-around py-2">
            <button
              onClick={() => onViewChange('home')}
              className={`flex flex-col items-center py-2 px-1 text-xs ${
                currentView === 'home' ? 'text-orange-600' : 'text-gray-700'
              }`}
            >
              <Search className="h-5 w-5 mb-1" />
              Search
            </button>
            <button
              onClick={() => onViewChange('favorites')}
              className={`flex flex-col items-center py-2 px-1 text-xs ${
                currentView === 'favorites' ? 'text-orange-600' : 'text-gray-700'
              }`}
            >
              <Heart className="h-5 w-5 mb-1" />
              Favorites
            </button>
            <button
              onClick={() => onViewChange('dashboard')}
              className={`flex flex-col items-center py-2 px-1 text-xs ${
                currentView === 'dashboard' ? 'text-orange-600' : 'text-gray-700'
              }`}
            >
              <User className="h-5 w-5 mb-1" />
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;