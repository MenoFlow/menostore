
import { App, Category } from '@/types/App';

export const categories: Category[] = [
  { id: 'all', name: 'Toutes', icon: '📱' },
  { id: 'games', name: 'Jeux', icon: '🎮' },
  { id: 'productivity', name: 'Productivité', icon: '💼' },
  { id: 'social', name: 'Social', icon: '👥' },
  { id: 'photo', name: 'Photo', icon: '📷' },
  { id: 'music', name: 'Musique', icon: '🎵' },
  { id: 'education', name: 'Éducation', icon: '📚' },
];

export const apps: App[] = [
  // {
  //   id: '1',
  //   name: 'PhotoMaster Pro',
  //   developer: 'Meno Studio',
  //   description: 'PhotoMaster Pro est l\'application ultime pour l\'édition de photos. Avec des outils professionnels et une interface intuitive, transformez vos photos en œuvres d\'art. Fonctionnalités avancées incluant des filtres IA, correction automatique des couleurs, et outils de retouche précis.',
  //   shortDescription: 'Éditeur photo professionnel avec IA',
  //   category: 'photo',
  //   rating: 4.8,
  //   downloads: '1M+',
  //   version: '2.1.0',
  //   size: '45 MB',
  //   icon: '📷',
  //   screenshots: [
  //     'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop',
  //     'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=300&h=600&fit=crop'
  //   ],
  //   features: ['Filtres IA avancés', 'Retouche professionnelle', 'Export haute qualité', 'Partage direct'],
  //   downloadUrl: '/downloads/photomaster-pro.apk',
  //   isFeatured: true,
  //   releaseDate: '2024-03-15',
  //   price: 0
  // },
  // {
  //   id: '2',
  //   name: 'TaskFlow',
  //   developer: 'Productivity Labs',
  //   description: 'TaskFlow révolutionne la gestion de tâches avec son interface moderne et ses fonctionnalités intelligentes. Organisez vos projets, collaborez en équipe, et atteignez vos objectifs plus efficacement.',
  //   shortDescription: 'Gestionnaire de tâches intelligent',
  //   category: 'productivity',
  //   rating: 4.6,
  //   downloads: '500K+',
  //   version: '1.8.2',
  //   size: '32 MB',
  //   icon: '✅',
  //   screenshots: [
  //     'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop'
  //   ],
  //   features: ['Synchronisation cloud', 'Collaboration équipe', 'Rappels intelligents', 'Analytics'],
  //   downloadUrl: '/downloads/taskflow.apk',
  //   isFeatured: true,
  //   releaseDate: '2024-03-10',
  //   price: 0
  // },
  // {
  //   id: '3',
  //   name: 'GameZone',
  //   developer: 'Epic Games Co',
  //   description: 'Découvrez GameZone, l\'expérience de jeu mobile ultime avec des graphismes époustouflants et un gameplay addictif. Affrontez des joueurs du monde entier dans des batailles épiques.',
  //   shortDescription: 'Jeu de stratégie multijoueur',
  //   category: 'games',
  //   rating: 4.5,
  //   downloads: '2M+',
  //   version: '3.2.1',
  //   size: '120 MB',
  //   icon: '🎮',
  //   screenshots: [
  //     'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop'
  //   ],
  //   features: ['Multijoueur en ligne', 'Graphismes 3D', 'Événements spéciaux', 'Classements'],
  //   downloadUrl: '/downloads/gamezone.apk',
  //   isFeatured: false,
  //   releaseDate: '2024-02-20',
  //   price: 0
  // },
  // {
  //   id: '4',
  //   name: 'SocialConnect',
  //   developer: 'Connect Inc',
  //   description: 'SocialConnect réinvente les réseaux sociaux avec un focus sur la confidentialité et les connexions authentiques. Partagez vos moments avec vos proches en toute sécurité.',
  //   shortDescription: 'Réseau social sécurisé',
  //   category: 'social',
  //   rating: 4.3,
  //   downloads: '750K+',
  //   version: '2.0.5',
  //   size: '55 MB',
  //   icon: '👥',
  //   screenshots: [
  //     'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop'
  //   ],
  //   features: ['Chiffrement bout-à-bout', 'Stories temporaires', 'Groupes privés', 'Appels vidéo'],
  //   downloadUrl: '/downloads/socialconnect.apk',
  //   isFeatured: true,
  //   releaseDate: '2024-03-05',
  //   price: 0
  // },
  // {
  //   id: '5',
  //   name: 'MusicWave',
  //   developer: 'Sound Studios',
  //   description: 'MusicWave offre une expérience d\'écoute musicale premium avec un son haute fidélité et des recommandations personnalisées basées sur l\'IA.',
  //   shortDescription: 'Lecteur musique premium',
  //   category: 'music',
  //   rating: 4.7,
  //   downloads: '1.2M+',
  //   version: '4.1.0',
  //   size: '38 MB',
  //   icon: '🎵',
  //   screenshots: [
  //     'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop'
  //   ],
  //   features: ['Qualité Hi-Fi', 'Recommandations IA', 'Mode hors-ligne', 'Égaliseur avancé'],
  //   downloadUrl: '/downloads/musicwave.apk',
  //   isFeatured: false,
  //   releaseDate: '2024-03-01',
  //   price: 0
  // },
  {
    id: '1',
    name: 'Trackimo',
    developer: 'Menoh Studio',
    description: "Une application mobile de gestion d’appartements permet aux propriétaires, gestionnaires immobiliers ou agences de centraliser toutes les informations liées à leurs biens locatifs. Elle offre une interface intuitive pour gérer les appartements, suivre les loyers et analyser les performances financières.",
    shortDescription: 'Application mobile pour gérer appartements et loyers simplement.',
    category: 'immobilier',
    rating: 4.9,
    downloads: '1K+',
    version: '1.2.3',
    size: '92 MB',
    icon: '🏢',
    screenshots: [
      '/screenshoots/trackimo/1.png',
      '/screenshoots/trackimo/2.png',
      '/screenshoots/trackimo/3.png',
      '/screenshoots/trackimo/4.png',
      '/screenshoots/trackimo/5.png',
      '/screenshoots/trackimo/6.png',
      '/screenshoots/trackimo/7.png',
    ],
    features: [
      'CRUD Appartements (ajout, modification, suppression)',
      'Gestion des locataires et contrats',
      'Suivi des loyers et notifications de paiement',
      'Tableaux de bord et statistiques financières',
      'Visualisation du taux d’occupation',
      'Exportation des données (PDF, Excel)',
      'Interface intuitive et design moderne',
      'Sauvegarde et synchronisation cloud',
      'Multi-utilisateurs avec rôles (propriétaire, gestionnaire, comptable)',
      'Sécurité renforcée (authentification, chiffrement)'
    ],

    downloadUrl: '/downloads/trackimo.apk',
    isFeatured: true,
    releaseDate: '2025-03-09',
    price: 0
  },
  {
    id: '2',
    name: 'MenoScan',
    developer: 'Menoh Studio',
    description: "MenoScan est une application mobile intuitive, développée dans le cadre d’un projet scolaire par une équipe de trois étudiants motivés : Herizo, Zo Mahefa et Hermenio.Elle a été conçue pour simplifier la gestion et l’enregistrement des cartes de visite, en utilisant les fonctionnalités modernes des smartphones. Grâce à MenoScan, vous pouvez scanner, visualiser, modifier et enregistrer facilement les coordonnées figurant sur une carte de visite, directement dans les contacts de votre téléphone.",
    shortDescription: 'Scanneur de carte de visite avec enregistrement dans les contacts',
    category: 'photo',
    rating: 3.2,
    downloads: '100',
    version: '1.0',
    size: '54 MB',
    icon: '📄',
    screenshots: [
      '/screenshoots/menoScan/1.png',
      '/screenshoots/menoScan/2.png',
      '/screenshoots/menoScan/3.png',
      '/screenshoots/menoScan/4.png',
    ],
    features: ['Scan IA avancés', 'Design Intuitif', 'import haute qualité', 'Exportation de numero'],
    downloadUrl: '/downloads/menoScan.apk',
    isFeatured: true,
    releaseDate: '2025-05-29',
    price: 0
  },
];
