
import React from 'react';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              📱 MenoStore
            </h1>
            <p className="text-gray-600 mt-2">Développé par ANDRIANTSOA Hermenio M.</p>
          </div>
          
          {/* Search Bar */}
          <SearchBar 
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Rechercher des applications..."
          />
        </div>
      </div>
    </header>
  );
};
