
export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string;
  location?: string;
  bio?: string;
  skillLevel?: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  preferredTimeSlots?: string[];
  favoriteTurf?: string;
  preferredFormat?: 'T10' | 'T20' | 'ODI' | 'Test' | 'Other';
}

export interface Group {
  id: string;
  name: string;
  description?: string;
  image?: string;
  members: string[]; // User IDs
  admins: string[]; // User IDs
  rules?: string[];
  matchDays?: string[];
  createdAt: string;
}

export interface Match {
  id: string;
  title: string;
  groupId: string;
  date: string;
  time: string;
  turfId?: string;
  players: {
    confirmed: string[]; // User IDs
    pending: string[]; // User IDs
    declined: string[]; // User IDs
  };
  format: 'T10' | 'T20' | 'ODI' | 'Test' | 'Other';
  notes?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Turf {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  distance?: number; // Distance from user in km
  price: {
    amount: number;
    currency: string;
    perHour: boolean;
  };
  amenities: string[];
  images: string[];
  rating: number;
  reviews: number;
  availability?: {
    date: string;
    slots: {
      id: string;
      startTime: string;
      endTime: string;
      isAvailable: boolean;
      price?: number;
    }[];
  }[];
}

export interface Tournament {
  id: string;
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  location: string;
  organizer: string;
  entryFee?: {
    amount: number;
    currency: string;
  };
  teams: {
    id: string;
    name: string;
    members: string[]; // User IDs
  }[];
  matches?: {
    id: string;
    teams: [string, string]; // Team IDs
    date: string;
    time: string;
    location: string;
    result?: {
      winner: string; // Team ID
      score: string;
    };
  }[];
  prizes?: {
    first: string;
    second: string;
    other?: string;
  };
  status: 'upcoming' | 'ongoing' | 'completed';
  type: 'open' | 'corporate' | 'regional';
}
