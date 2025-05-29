
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apps } from '@/data/apps';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Download, Shield, Users, Calendar } from 'lucide-react';

const AppDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const app = apps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Application non trouvée</h1>
          <Button onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    window.open(app.downloadUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          <div className="flex items-start space-x-6">
            <div className="text-6xl bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-xl">
              {app.icon}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.name}</h1>
              <p className="text-lg text-gray-600 mb-3">{app.developer}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-medium text-gray-700 ml-1">
                    {app.rating}
                  </span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">{app.downloads} téléchargements</span>
                <span className="text-gray-300">•</span>
                <Badge variant="secondary">{app.category}</Badge>
              </div>
              
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{app.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Fonctionnalités</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {app.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            {app.screenshots.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Captures d'écran</h2>
                <div className="flex space-x-4 overflow-x-auto">
                  {app.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`Capture ${index + 1}`}
                      className="w-48 h-96 object-cover rounded-lg shadow-md flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* App Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Version</span>
                  <span className="text-gray-900 font-medium">{app.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taille</span>
                  <span className="text-gray-900 font-medium">{app.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date de sortie</span>
                  <span className="text-gray-900 font-medium">
                    {new Date(app.releaseDate).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prix</span>
                  <span className="text-gray-900 font-medium">
                    {app.price === 0 ? 'Gratuit' : `${app.price}€`}
                  </span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sécurité</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Application vérifiée</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Développeur certifié</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Mis à jour récemment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
