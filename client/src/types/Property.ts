export interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  price: number;
  type: 'apartment' | 'house' | 'villa' | 'studio';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  amenities: string[];
  yearBuilt: number;
  parking: boolean;
  furnished: boolean;
}

export interface FilterState {
  city: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  minArea: string;
  maxArea: string;
}