
import { User, Group, Match, Turf, Tournament } from "../types";

// Sample Users
export const users: User[] = [
  {
    id: "u1",
    name: "Virat Kohli",
    email: "virat@example.com",
    phone: "9876543210",
    avatar: "/placeholder.svg",
    location: "Delhi",
    bio: "Passionate cricket player with 10+ years experience",
    skillLevel: "advanced",
    preferredTimeSlots: ["Weekends Morning", "Weekdays Evening"],
    favoriteTurf: "Delhi Cricket Club",
    preferredFormat: "T20",
  },
  {
    id: "u2",
    name: "MS Dhoni",
    email: "dhoni@example.com",
    phone: "9876543211",
    avatar: "/placeholder.svg",
    location: "Ranchi",
    bio: "Cricket enthusiast with a love for wicket-keeping",
    skillLevel: "professional",
    preferredTimeSlots: ["Weekdays Evening"],
    favoriteTurf: "Ranchi Stadium",
    preferredFormat: "ODI",
  },
  {
    id: "u3",
    name: "Rohit Sharma",
    email: "rohit@example.com",
    phone: "9876543212",
    avatar: "/placeholder.svg",
    location: "Mumbai",
    bio: "Opening batsman looking for weekend matches",
    skillLevel: "advanced",
    preferredTimeSlots: ["Weekends Evening"],
    favoriteTurf: "Mumbai Cricket Ground",
    preferredFormat: "T20",
  },
  {
    id: "u4",
    name: "Jasprit Bumrah",
    email: "bumrah@example.com",
    phone: "9876543213",
    avatar: "/placeholder.svg",
    location: "Ahmedabad",
    bio: "Fast bowler available for evening games",
    skillLevel: "professional",
    preferredTimeSlots: ["Weekdays Evening"],
    favoriteTurf: "Ahmedabad Stadium",
    preferredFormat: "Test",
  },
  {
    id: "u5",
    name: "Ravindra Jadeja",
    email: "jadeja@example.com",
    phone: "9876543214",
    avatar: "/placeholder.svg",
    location: "Saurashtra",
    bio: "All-rounder looking for weekend matches",
    skillLevel: "advanced",
    preferredTimeSlots: ["Weekends Morning"],
    favoriteTurf: "Saurashtra Cricket Association Stadium",
    preferredFormat: "T20",
  },
  {
    id: "u6",
    name: "Smriti Mandhana",
    email: "smriti@example.com",
    phone: "9876543215",
    avatar: "/placeholder.svg",
    location: "Mumbai",
    bio: "Left-handed opening batter",
    skillLevel: "professional",
    preferredTimeSlots: ["Weekends Morning", "Weekdays Evening"],
    favoriteTurf: "Mumbai Cricket Ground",
    preferredFormat: "T20",
  },
];

// Sample Groups
export const groups: Group[] = [
  {
    id: "g1",
    name: "Weekend Warriors",
    description: "A group for weekend cricket enthusiasts",
    image: "/placeholder.svg",
    members: ["u1", "u3", "u5", "u6"],
    admins: ["u1"],
    rules: ["Be on time", "Bring your own equipment"],
    matchDays: ["Saturday", "Sunday"],
    createdAt: "2023-01-15",
  },
  {
    id: "g2",
    name: "Corporate Cricket Club",
    description: "Cricket group for corporate professionals",
    image: "/placeholder.svg",
    members: ["u2", "u4", "u1"],
    admins: ["u2"],
    rules: ["Professional behavior", "Company jerseys mandatory"],
    matchDays: ["Friday"],
    createdAt: "2023-02-20",
  },
  {
    id: "g3",
    name: "Neighborhood Players",
    description: "Local group for casual cricket matches",
    image: "/placeholder.svg",
    members: ["u3", "u5", "u6", "u2"],
    admins: ["u3"],
    rules: ["Respect the neighbors", "Clean up after matches"],
    matchDays: ["Wednesday", "Sunday"],
    createdAt: "2023-03-10",
  },
];

// Sample Matches
export const matches: Match[] = [
  {
    id: "m1",
    title: "Weekend Warriors vs Neighborhood Players",
    groupId: "g1",
    date: "2023-04-15",
    time: "07:00 AM",
    turfId: "t1",
    players: {
      confirmed: ["u1", "u3", "u5"],
      pending: ["u6"],
      declined: [],
    },
    format: "T20",
    notes: "Bring extra balls",
    status: "scheduled",
  },
  {
    id: "m2",
    title: "Corporate Friday Match",
    groupId: "g2",
    date: "2023-04-14",
    time: "06:00 PM",
    turfId: "t2",
    players: {
      confirmed: ["u2", "u4", "u1"],
      pending: [],
      declined: [],
    },
    format: "T10",
    notes: "Company jerseys required",
    status: "scheduled",
  },
  {
    id: "m3",
    title: "Midweek Practice Match",
    groupId: "g3",
    date: "2023-04-12",
    time: "05:30 PM",
    turfId: "t3",
    players: {
      confirmed: ["u3", "u5"],
      pending: ["u6", "u2"],
      declined: [],
    },
    format: "Other",
    notes: "Focus on batting practice",
    status: "completed",
  },
];

// Sample Turfs
export const turfs: Turf[] = [
  {
    id: "t1",
    name: "Green Field Cricket Club",
    address: "123 Sports Lane, Delhi",
    location: {
      lat: 28.6139,
      lng: 77.2090,
    },
    distance: 2.5,
    price: {
      amount: 800,
      currency: "INR",
      perHour: true,
    },
    amenities: ["Floodlights", "Changing Rooms", "Parking", "Refreshments"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    rating: 4.5,
    reviews: 120,
    availability: [
      {
        date: "2023-04-15",
        slots: [
          {
            id: "s1",
            startTime: "06:00 AM",
            endTime: "08:00 AM",
            isAvailable: false,
          },
          {
            id: "s2",
            startTime: "08:00 AM",
            endTime: "10:00 AM",
            isAvailable: true,
            price: 800,
          },
          {
            id: "s3",
            startTime: "05:00 PM",
            endTime: "07:00 PM",
            isAvailable: true,
            price: 1200,
          },
        ],
      },
    ],
  },
  {
    id: "t2",
    name: "City Sports Complex",
    address: "456 Urban Avenue, Mumbai",
    location: {
      lat: 19.0760,
      lng: 72.8777,
    },
    distance: 5.1,
    price: {
      amount: 1200,
      currency: "INR",
      perHour: true,
    },
    amenities: ["Indoor", "AC", "Changing Rooms", "Parking", "Cafeteria"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 95,
    availability: [
      {
        date: "2023-04-14",
        slots: [
          {
            id: "s4",
            startTime: "04:00 PM",
            endTime: "06:00 PM",
            isAvailable: true,
            price: 1200,
          },
          {
            id: "s5",
            startTime: "06:00 PM",
            endTime: "08:00 PM",
            isAvailable: false,
          },
        ],
      },
    ],
  },
  {
    id: "t3",
    name: "Neighborhood Sports Club",
    address: "789 Local Street, Bangalore",
    location: {
      lat: 12.9716,
      lng: 77.5946,
    },
    distance: 1.2,
    price: {
      amount: 500,
      currency: "INR",
      perHour: true,
    },
    amenities: ["Basic Facilities", "Parking"],
    images: ["/placeholder.svg"],
    rating: 3.9,
    reviews: 42,
    availability: [
      {
        date: "2023-04-12",
        slots: [
          {
            id: "s6",
            startTime: "04:00 PM",
            endTime: "06:00 PM",
            isAvailable: false,
          },
          {
            id: "s7",
            startTime: "06:00 PM",
            endTime: "08:00 PM",
            isAvailable: true,
            price: 500,
          },
        ],
      },
    ],
  },
  {
    id: "t4",
    name: "Premier Cricket Academy",
    address: "101 Elite Boulevard, Chennai",
    location: {
      lat: 13.0827,
      lng: 80.2707,
    },
    distance: 3.8,
    price: {
      amount: 1500,
      currency: "INR",
      perHour: true,
    },
    amenities: ["Professional Pitch", "Changing Rooms", "Coaching", "Equipment Rental", "Floodlights"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 150,
    availability: [
      {
        date: "2023-04-15",
        slots: [
          {
            id: "s8",
            startTime: "08:00 AM",
            endTime: "10:00 AM",
            isAvailable: true,
            price: 1300,
          },
          {
            id: "s9",
            startTime: "05:00 PM",
            endTime: "07:00 PM",
            isAvailable: true,
            price: 1800,
          },
        ],
      },
    ],
  },
];

// Sample Tournaments
export const tournaments: Tournament[] = [
  {
    id: "trn1",
    name: "Corporate Cricket League",
    description: "Annual cricket tournament for corporate teams",
    startDate: "2023-05-01",
    endDate: "2023-05-15",
    location: "Mumbai",
    organizer: "SportEvents Inc.",
    entryFee: {
      amount: 5000,
      currency: "INR",
    },
    teams: [
      {
        id: "team1",
        name: "TechGiants XI",
        members: ["u1", "u3", "u5"],
      },
      {
        id: "team2",
        name: "FinanceStars",
        members: ["u2", "u4"],
      },
    ],
    prizes: {
      first: "Trophy + ₹50,000",
      second: "Trophy + ₹25,000",
      other: "Best Player: ₹10,000",
    },
    status: "upcoming",
    type: "corporate",
  },
  {
    id: "trn2",
    name: "Weekend Warriors Tournament",
    description: "Tournament for weekend cricket enthusiasts",
    startDate: "2023-04-20",
    endDate: "2023-04-23",
    location: "Delhi",
    organizer: "Local Sports Club",
    entryFee: {
      amount: 2000,
      currency: "INR",
    },
    teams: [
      {
        id: "team3",
        name: "Delhi Dynamos",
        members: ["u1", "u5"],
      },
      {
        id: "team4",
        name: "Noida Nighthawks",
        members: ["u3", "u6"],
      },
    ],
    prizes: {
      first: "Trophy + ₹20,000",
      second: "Trophy + ₹10,000",
    },
    status: "upcoming",
    type: "open",
  },
  {
    id: "trn3",
    name: "Regional T20 Championship",
    description: "Official regional cricket tournament",
    startDate: "2023-06-10",
    endDate: "2023-06-25",
    location: "Bangalore",
    organizer: "State Cricket Association",
    entryFee: {
      amount: 10000,
      currency: "INR",
    },
    teams: [
      {
        id: "team5",
        name: "Bangalore Tigers",
        members: ["u2", "u4"],
      },
      {
        id: "team6",
        name: "Chennai Kings",
        members: ["u1", "u3"],
      },
    ],
    prizes: {
      first: "Trophy + ₹100,000",
      second: "Trophy + ₹50,000",
      other: "Best Batsman, Best Bowler: ₹15,000 each",
    },
    status: "upcoming",
    type: "regional",
  },
];
