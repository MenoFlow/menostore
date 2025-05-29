
import React from 'react';
import { App } from '@/types/App';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppCardProps {
  app: App;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/app/${app.id}`);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Simulate download
    window.open(app.downloadUrl, '_blank');
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
      onClick={handleViewDetails}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-4xl bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg">
            {app.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {app.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{app.developer}</p>
            <p className="text-sm text-gray-700 line-clamp-2 mb-3">
              {app.shortDescription}
            </p>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 ml-1">
                    {app.rating}
                  </span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600">{app.downloads}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {app.category}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{app.size}</span>
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-1" />
                Télécharger
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
