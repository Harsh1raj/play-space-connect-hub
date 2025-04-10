
import React, { useState } from "react";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { users } from "@/data/mockData";
import { User } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Players: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "beginner" | "intermediate" | "advanced" | "professional">("all");

  const filteredPlayers = users.filter((player) => {
    const matchesSearch = 
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (player.location?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    
    const matchesFilter = filter === "all" || player.skillLevel === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Find Players</h1>
        <p className="text-gray-600 dark:text-gray-300">Connect with cricket players who match your play style</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cricket-green-dark focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            All Players
          </Button>
          <Button
            variant={filter === "beginner" ? "default" : "outline"}
            onClick={() => setFilter("beginner")}
            className={filter === "beginner" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Beginner
          </Button>
          <Button
            variant={filter === "intermediate" ? "default" : "outline"}
            onClick={() => setFilter("intermediate")}
            className={filter === "intermediate" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Intermediate
          </Button>
          <Button
            variant={filter === "advanced" ? "default" : "outline"}
            onClick={() => setFilter("advanced")}
            className={filter === "advanced" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Advanced
          </Button>
          <Button
            variant={filter === "professional" ? "default" : "outline"}
            onClick={() => setFilter("professional")}
            className={filter === "professional" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Professional
          </Button>
        </div>
      </div>

      {filteredPlayers.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-lg text-gray-600 dark:text-gray-300">No players found matching your criteria.</p>
          <Button 
            onClick={() => {setSearchTerm(""); setFilter("all");}}
            className="mt-4 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
};

const PlayerCard: React.FC<{ player: User }> = ({ player }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              <img src={player.avatar || "/placeholder.svg"} alt={player.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{player.name}</h3>
              {player.location && (
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                  <MapPin size={14} className="mr-1" />
                  {player.location}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  player.skillLevel === "beginner" ? "bg-green-100 text-green-800" :
                  player.skillLevel === "intermediate" ? "bg-blue-100 text-blue-800" :
                  player.skillLevel === "advanced" ? "bg-purple-100 text-purple-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {player.skillLevel}
                </span>
                {player.preferredFormat && (
                  <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                    {player.preferredFormat}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            {player.bio && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {player.bio}
              </p>
            )}
            {player.preferredTimeSlots && player.preferredTimeSlots.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium mb-1">Availability</p>
                <div className="flex flex-wrap gap-2">
                  {player.preferredTimeSlots.map((slot, index) => (
                    <span key={index} className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex border-t border-gray-200 dark:border-gray-700">
          <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            View Profile
          </button>
          <button className="flex-1 py-3 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
            Connect
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Players;
