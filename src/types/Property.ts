export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  state: string;
  type: 'apartment' | 'house' | 'villa' | 'plot';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  amenities: string[];
  description: string;
  isNew: boolean;
  isFeatured: boolean;
}

export interface SearchFilters {
  city: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  minArea: number;
  maxArea: number;
}