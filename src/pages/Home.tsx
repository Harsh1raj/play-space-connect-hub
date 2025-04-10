
import React, { useState, useEffect } from "react";
import { Search, Gift, Clock, Tag, ChevronRight, Star, Percent } from "lucide-react";
import { users, turfs } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Categories like Zepto app
  const categories = [
    { name: "All Turfs", icon: "🏏" },
    { name: "Premium", icon: "✨" },
    { name: "Indoor", icon: "🏠" },
    { name: "Outdoor", icon: "🌳" },
    { name: "Best Rated", icon: "⭐" },
    { name: "Offers", icon: "🎁" },
  ];
  
  // Featured collections like Zepto
  const featuredCollections = [
    { id: 1, title: "Special Offers", color: "from-pink-500 to-purple-500", icon: <Gift size={24} className="text-white" /> },
    { id: 2, title: "Quick Booking", color: "from-blue-500 to-cyan-500", icon: <Clock size={24} className="text-white" /> },
    { id: 3, title: "Premium Turfs", color: "from-green-500 to-emerald-500", icon: <Star size={24} className="text-white" /> },
    { id: 4, title: "Big Discounts", color: "from-amber-500 to-orange-500", icon: <Percent size={24} className="text-white" /> },
  ];

  return (
    <div className="flex flex-col pb-16">
      {/* Address and Delivery Section - Zepto Style */}
      <div className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex flex-col px-4 py-3">
          <div className="flex justify-between items-center mb-1">
            <div>
              <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-400">LOCATION</h3>
              <p className="font-medium">Mumbai, MH</p>
            </div>
            <Link to="/profile" className="text-blue-600 font-medium text-sm">
              CHANGE
            </Link>
          </div>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for turfs, tournaments..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Categories Scroll - Zepto Style */}
        <div className="overflow-x-auto scrollbar-hide border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex px-4 py-3 space-x-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center space-y-1 min-w-[60px] ${activeSection === index ? 'opacity-100' : 'opacity-70'}`}
                onClick={() => setActiveSection(index)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  activeSection === index 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  <span className="text-lg">{category.icon}</span>
                </div>
                <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Zepto Style */}
      <div className="flex-1 px-4 pt-4">
        {/* Featured Banners - Zepto Style */}
        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-3">
            {featuredCollections.map((collection) => (
              <div 
                key={collection.id} 
                className={`min-w-[140px] h-24 rounded-xl bg-gradient-to-r ${collection.color} p-4 flex flex-col justify-between`}
              >
                <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                  {collection.icon}
                </div>
                <h3 className="text-white font-medium text-sm">{collection.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers Section - Zepto Style */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Special Offers</h2>
            <Link to="/offers" className="text-blue-600 text-sm font-medium flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {turfs.slice(0, 4).map((turf) => (
              <div key={turf.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="relative h-32">
                  <img src={turf.images[0]} alt={turf.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white rounded-md px-1.5 py-0.5 flex items-center">
                    <Star size={12} className="text-yellow-500 mr-1" />
                    <span className="text-xs font-medium">{turf.rating}</span>
                  </div>
                  {turf.discount && (
                    <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                      {turf.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm line-clamp-1">{turf.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 line-clamp-1">{turf.address}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold">₹{turf.price.amount} <span className="text-xs font-normal text-gray-500">/hr</span></p>
                    <button className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md">
                      BOOK
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Booked Turfs - Zepto Style */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Most Booked Turfs</h2>
            <Link to="/popular" className="text-blue-600 text-sm font-medium flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {turfs.slice(0, 3).map((turf) => (
              <div key={turf.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex">
                <div className="w-24 h-24">
                  <img src={turf.images[0]} alt={turf.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-sm">{turf.name}</h3>
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded px-1">
                      <Star size={12} className="text-yellow-500 mr-0.5" />
                      <span className="text-xs font-medium">{turf.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{turf.address}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm font-bold">₹{turf.price.amount} <span className="text-xs font-normal text-gray-500">/hr</span></p>
                    <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Find Players Near You - Zepto Style */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Players Near You</h2>
            <Link to="/players" className="text-blue-600 text-sm font-medium flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {users.slice(0, 4).map((user) => (
              <div key={user.id} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 p-0.5">
                  <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h4 className="mt-2 text-sm font-medium text-center">{user.name.split(' ')[0]}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user.skillLevel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
