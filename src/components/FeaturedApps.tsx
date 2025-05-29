
import React from 'react';
import { App } from '@/types/App';
import { AppCard } from './AppCard';

interface FeaturedAppsProps {
  apps: App[];
}

export const FeaturedApps: React.FC<FeaturedAppsProps> = ({ apps }) => {
  const featuredApps = apps.filter(app => app.isFeatured).slice(0, 3);

  if (featuredApps.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications en vedette</h2>
        <p className="text-gray-600">Découvrez les applications les plus populaires du moment</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredApps.map((app) => (
          <div key={app.id} className="relative">
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
              ⭐ Vedette
            </div>
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </section>
  );
};
