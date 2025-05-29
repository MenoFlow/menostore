
import React, { useState, useMemo } from 'react';
import { apps } from '@/data/apps';
import { Header } from '@/components/Header';
import { CategoryFilter } from '@/components/CategoryFilter';
import { AppCard } from '@/components/AppCard';
import { FeaturedApps } from '@/components/FeaturedApps';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredApps = useMemo(() => {
    let filtered = apps;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.developer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(app => app.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const showFeatured = !searchTerm && selectedCategory === 'all';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Featured Apps */}
        {showFeatured && <FeaturedApps apps={apps} />}

        {/* Apps Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm ? `Résultats pour "${searchTerm}"` : 'Toutes les applications'}
            </h2>
            <span className="text-gray-600">
              {filteredApps.length} application{filteredApps.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredApps.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucune application trouvée
              </h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">MenoStore</h3>
            <p className="text-gray-600">
              Votre destination pour les meilleures applications mobiles
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © 2025 MenoStore. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
