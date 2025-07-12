export interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  state: string;
  price: number;
  type: 'apartment' | 'house' | 'villa' | 'studio';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  yearBuilt: number;
  parking: boolean;
  furnished: boolean;
  virtualTour?: string;
  rating: number;
  reviews: number;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  nearbyPlaces: {
    schools: string[];
    hospitals: string[];
    malls: string[];
    transport: string[];
  };
  priceHistory: {
    date: string;
    price: number;
  }[];
}

export interface FilterState {
  city: string;
  type: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  minArea: string;
  maxArea: string;
  furnished: string;
  parking: string;
  rating: string;
}