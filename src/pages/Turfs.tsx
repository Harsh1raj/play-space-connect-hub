
import React, { useState } from "react";
import { Search, Filter, MapPin, Calendar, Clock, Star } from "lucide-react";
import { turfs } from "@/data/mockData";
import { Turf } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Turfs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState<"all" | "under500" | "under1000" | "under1500" | "premium">("all");
  const [amenityFilter, setAmenityFilter] = useState<string | null>(null);

  const filteredTurfs = turfs.filter((turf) => {
    const matchesSearch = 
      turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      turf.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriceFilter = 
      priceFilter === "all" ||
      (priceFilter === "under500" && turf.price.amount < 500) ||
      (priceFilter === "under1000" && turf.price.amount < 1000) ||
      (priceFilter === "under1500" && turf.price.amount < 1500) ||
      (priceFilter === "premium" && turf.price.amount >= 1500);
    
    const matchesAmenityFilter = 
      !amenityFilter || 
      turf.amenities.some(amenity => amenity.toLowerCase().includes(amenityFilter.toLowerCase()));
    
    return matchesSearch && matchesPriceFilter && matchesAmenityFilter;
  });

  // Sort by distance
  const sortedTurfs = [...filteredTurfs].sort((a, b) => {
    if (a.distance && b.distance) {
      return a.distance - b.distance;
    }
    return 0;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Book Turf</h1>
        <p className="text-gray-600 dark:text-gray-300">Find and book the best cricket turfs near you</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by turf name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cricket-green-dark focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 pb-2">
        <Button
          variant={priceFilter === "all" ? "default" : "outline"}
          onClick={() => setPriceFilter("all")}
          className={priceFilter === "all" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          All Prices
        </Button>
        <Button
          variant={priceFilter === "under500" ? "default" : "outline"}
          onClick={() => setPriceFilter("under500")}
          className={priceFilter === "under500" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Under ₹500
        </Button>
        <Button
          variant={priceFilter === "under1000" ? "default" : "outline"}
          onClick={() => setPriceFilter("under1000")}
          className={priceFilter === "under1000" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Under ₹1000
        </Button>
        <Button
          variant={priceFilter === "under1500" ? "default" : "outline"}
          onClick={() => setPriceFilter("under1500")}
          className={priceFilter === "under1500" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Under ₹1500
        </Button>
        <Button
          variant={priceFilter === "premium" ? "default" : "outline"}
          onClick={() => setPriceFilter("premium")}
          className={priceFilter === "premium" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Premium
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-8 pb-2">
        <Button
          variant={amenityFilter === null ? "default" : "outline"}
          onClick={() => setAmenityFilter(null)}
          className={amenityFilter === null ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          All Amenities
        </Button>
        <Button
          variant={amenityFilter === "floodlights" ? "default" : "outline"}
          onClick={() => setAmenityFilter("floodlights")}
          className={amenityFilter === "floodlights" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Floodlights
        </Button>
        <Button
          variant={amenityFilter === "indoor" ? "default" : "outline"}
          onClick={() => setAmenityFilter("indoor")}
          className={amenityFilter === "indoor" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Indoor
        </Button>
        <Button
          variant={amenityFilter === "changing" ? "default" : "outline"}
          onClick={() => setAmenityFilter("changing")}
          className={amenityFilter === "changing" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Changing Rooms
        </Button>
        <Button
          variant={amenityFilter === "parking" ? "default" : "outline"}
          onClick={() => setAmenityFilter("parking")}
          className={amenityFilter === "parking" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Parking
        </Button>
      </div>

      {sortedTurfs.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-lg text-gray-600 dark:text-gray-300">No turfs found matching your criteria.</p>
          <Button 
            onClick={() => {setSearchTerm(""); setPriceFilter("all"); setAmenityFilter(null);}}
            className="mt-4 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTurfs.map((turf) => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>
      )}
    </div>
  );
};

const TurfCard: React.FC<{ turf: Turf }> = ({ turf }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="h-48 bg-gray-200 relative">
          <img src={turf.images[0] || "/placeholder.svg"} alt={turf.name} className="w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow">
            {turf.distance} km away
          </div>
          <div className="absolute top-3 left-3 flex items-center bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow">
            <Star className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" />
            {turf.rating} ({turf.reviews})
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">{turf.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start mb-3">
            <MapPin size={14} className="mr-1 mt-0.5 flex-shrink-0" />
            <span>{turf.address}</span>
          </p>
          <p className="text-base font-medium text-cricket-accent mb-3">
            ₹{turf.price.amount} per hour
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {turf.amenities.map((amenity, index) => (
              <span key={index} className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                {amenity}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium mb-2">NEXT AVAILABLE SLOTS</p>
            {turf.availability && turf.availability.length > 0 && (
              <div className="flex flex-col gap-2">
                {turf.availability.map((day, dayIndex) => (
                  <div key={dayIndex} className="flex items-center gap-2">
                    <div className="w-20 text-xs font-medium">
                      {new Date(day.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                      {day.slots.filter(slot => slot.isAvailable).map((slot, slotIndex) => (
                        <button 
                          key={slotIndex}
                          className="whitespace-nowrap px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-cricket-green-light hover:text-white dark:hover:bg-cricket-green-dark"
                        >
                          {slot.startTime}
                        </button>
                      ))}
                      {day.slots.filter(slot => slot.isAvailable).length === 0 && (
                        <span className="text-xs text-gray-500 italic">No available slots</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex border-t border-gray-200 dark:border-gray-700">
          <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            View Details
          </button>
          <button className="flex-1 py-3 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
            Book Now
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Turfs;
