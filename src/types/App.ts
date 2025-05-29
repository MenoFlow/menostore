
export interface App {
  id: string;
  name: string;
  developer: string;
  description: string;
  shortDescription: string;
  category: string;
  rating: number;
  downloads: string;
  version: string;
  size: string;
  icon: string;
  screenshots: string[];
  features: string[];
  downloadUrl: string;
  isFeatured: boolean;
  releaseDate: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
