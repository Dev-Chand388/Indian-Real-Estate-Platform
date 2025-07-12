import { Property } from '../types/Property';

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment in Bandra",
    location: "Bandra West, Mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    price: 25000000,
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 1200,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Stunning 3BHK apartment with sea view in the heart of Bandra. Features modern amenities and premium finishes.",
    amenities: ["Swimming Pool", "Gym", "Security", "Parking", "Garden", "Club House", "24/7 Concierge"],
    yearBuilt: 2020,
    parking: true,
    furnished: true,
    virtualTour: "https://example.com/virtual-tour-1",
    rating: 4.8,
    reviews: 124,
    agent: {
      name: "Priya Sharma",
      phone: "+91-9876543210",
      email: "priya@prophub.in",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    nearbyPlaces: {
      schools: ["Dhirubhai Ambani International School", "Jamnabai Narsee School"],
      hospitals: ["Lilavati Hospital", "Holy Family Hospital"],
      malls: ["Palladium Mall", "Infiniti Mall"],
      transport: ["Bandra Railway Station", "Bandra-Kurla Complex Metro"]
    },
    priceHistory: [
      { date: "2024-01-01", price: 23000000 },
      { date: "2024-06-01", price: 24000000 },
      { date: "2024-12-01", price: 25000000 }
    ]
  },
  {
    id: 2,
    title: "Modern 2BHK in Koramangala",
    location: "Koramangala 4th Block, Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    price: 8500000,
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Contemporary 2BHK apartment in prime Koramangala location with excellent connectivity.",
    amenities: ["Gym", "Security", "Parking", "Power Backup", "Elevator", "Intercom"],
    yearBuilt: 2019,
    parking: true,
    furnished: false,
    rating: 4.5,
    reviews: 89,
    agent: {
      name: "Rajesh Kumar",
      phone: "+91-9876543211",
      email: "rajesh@prophub.in",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    nearbyPlaces: {
      schools: ["Inventure Academy", "Greenwood High"],
      hospitals: ["Manipal Hospital", "Apollo Hospital"],
      malls: ["Forum Mall", "5th Avenue Mall"],
      transport: ["Koramangala Bus Stop", "Silk Board Metro"]
    },
    priceHistory: [
      { date: "2024-01-01", price: 8000000 },
      { date: "2024-06-01", price: 8200000 },
      { date: "2024-12-01", price: 8500000 }
    ]
  },
  {
    id: 3,
    title: "Spacious Villa in Gurgaon",
    location: "DLF Phase 2, Gurgaon",
    city: "Gurgaon",
    state: "Haryana",
    price: 45000000,
    type: "villa",
    bedrooms: 4,
    bathrooms: 5,
    area: 2800,
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Luxurious 4BHK villa with private garden and modern amenities in prestigious DLF Phase 2.",
    amenities: ["Swimming Pool", "Garden", "Security", "Parking", "Gym", "Club House", "Tennis Court", "Spa"],
    yearBuilt: 2018,
    parking: true,
    furnished: true,
    virtualTour: "https://example.com/virtual-tour-3",
    rating: 4.9,
    reviews: 67,
    agent: {
      name: "Anita Verma",
      phone: "+91-9876543212",
      email: "anita@prophub.in",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    nearbyPlaces: {
      schools: ["DPS Gurgaon", "The Shri Ram School"],
      hospitals: ["Medanta Hospital", "Fortis Hospital"],
      malls: ["DLF Mega Mall", "Ambience Mall"],
      transport: ["DLF Phase 2 Metro", "Gurgaon Railway Station"]
    },
    priceHistory: [
      { date: "2024-01-01", price: 42000000 },
      { date: "2024-06-01", price: 43500000 },
      { date: "2024-12-01", price: 45000000 }
    ]
  },
  {
    id: 4,
    title: "Cozy Studio in Pune",
    location: "Hinjewadi Phase 1, Pune",
    city: "Pune",
    state: "Maharashtra",
    price: 3200000,
    type: "studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Compact and efficient studio apartment perfect for young professionals in IT hub.",
    amenities: ["Security", "Parking", "Power Backup", "Elevator", "Gym"],
    yearBuilt: 2021,
    parking: true,
    furnished: true,
    rating: 4.3,
    reviews: 45,
    agent: {
      name: "Vikram Singh",
      phone: "+91-9876543213",
      email: "vikram@prophub.in",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    nearbyPlaces: {
      schools: ["Symbiosis International School", "Delhi Public School"],
      hospitals: ["Ruby Hall Clinic", "Sahyadri Hospital"],
      malls: ["Westend Mall", "Phoenix MarketCity"],
      transport: ["Hinjewadi IT Park", "Pune Metro"]
    },
    priceHistory: [
      { date: "2024-01-01", price: 3000000 },
      { date: "2024-06-01", price: 3100000 },
      { date: "2024-12-01", price: 3200000 }
    ]
  },
  {
    id: 5,
    title: "Heritage House in Old Delhi",
    location: "Chandni Chowk, Delhi",
    city: "Delhi",
    state: "Delhi",
    price: 15000000,
    type: "house",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Traditional house with modern renovations in the historic heart of Delhi.",
    amenities: ["Parking", "Garden", "Security", "Heritage Architecture"],
    yearBuilt: 1950,
    parking: true,
    furnished: false,
    rating: 4.2,
    reviews: 32,
    agent: {
      name: "Suresh Gupta",
      phone: "+91-9876543214",
      email: "suresh@prophub.in",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    nearbyPlaces: {
      schools: ["Modern School", "St. Columba's School"],
      hospitals: ["LNJP Hospital", "Hindu Rao Hospital"],
      malls: ["Red Fort", "Chandni Chowk Market"],
      transport: ["Chandni Chowk Metro", "Old Delhi Railway Station"]
    },
    priceHistory: [
      { date: "2024-01-01", price: 14000000 },
      { date: "2024-06-01", price: 14500000 },
      { date: "2024-12-01", price: 15000000 }
    ]
  },
  {
    id: 6,
    title: "Sea View Apartment in Chennai",
    location: "Marina Beach Road, Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    price: 12000000,
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Beautiful apartment with stunning sea views and beach access.",
    amenities: ["Swimming Pool", "Security", "Parking", "Beach Access", "Gym", "Yoga Deck"],
    yearBuilt: 2017,
    parking: true,
    furnished: true,
    virtualTour: "https://example.com/virtual-tour-6",
    rating: 4.7,
    reviews: 98,
    agent: {
      name: "Meera Krishnan",
      phone: "+91-9876543215",
      email: "meera@prophub.in",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    nearbyPlaces: {
      schools: ["DAV School", "Chettinad Vidyashram"],
      hospitals: ["Apollo Hospital", "Fortis Malar"],
      malls: ["Express Avenue", "Phoenix MarketCity"],
      transport: ["Chennai Central", "Marina Beach Metro"]
    },
    priceHistory: [
      { date: "2024-01-01", price: 11500000 },
      { date: "2024-06-01", price: 11750000 },
      { date: "2024-12-01", price: 12000000 }
    ]
  }
];

export const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
  "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
  "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar",
  "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
  "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
  "Madurai", "Raipur", "Kota", "Gurgaon", "Chandigarh", "Solapur"
];