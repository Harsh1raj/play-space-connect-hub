
import React, { useState } from "react";
import { Search, Filter, MapPin, Calendar, Trophy, Users } from "lucide-react";
import { tournaments } from "@/data/mockData";
import { Tournament } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Tournaments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "upcoming" | "ongoing" | "completed">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "open" | "corporate" | "regional">("all");

  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch = 
      tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tournament.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (tournament.description?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    
    const matchesStatusFilter = statusFilter === "all" || tournament.status === statusFilter;
    const matchesTypeFilter = typeFilter === "all" || tournament.type === typeFilter;
    
    return matchesSearch && matchesStatusFilter && matchesTypeFilter;
  });

  // Sort by date
  const sortedTournaments = [...filteredTournaments].sort((a, b) => {
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Tournaments & Challenges</h1>
        <p className="text-gray-600 dark:text-gray-300">Discover and join cricket tournaments in your area</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tournaments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cricket-green-dark focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 pb-2">
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          className={statusFilter === "all" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          All Status
        </Button>
        <Button
          variant={statusFilter === "upcoming" ? "default" : "outline"}
          onClick={() => setStatusFilter("upcoming")}
          className={statusFilter === "upcoming" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Upcoming
        </Button>
        <Button
          variant={statusFilter === "ongoing" ? "default" : "outline"}
          onClick={() => setStatusFilter("ongoing")}
          className={statusFilter === "ongoing" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Ongoing
        </Button>
        <Button
          variant={statusFilter === "completed" ? "default" : "outline"}
          onClick={() => setStatusFilter("completed")}
          className={statusFilter === "completed" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Completed
        </Button>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-8 pb-2">
        <Button
          variant={typeFilter === "all" ? "default" : "outline"}
          onClick={() => setTypeFilter("all")}
          className={typeFilter === "all" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          All Types
        </Button>
        <Button
          variant={typeFilter === "open" ? "default" : "outline"}
          onClick={() => setTypeFilter("open")}
          className={typeFilter === "open" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Open/Public
        </Button>
        <Button
          variant={typeFilter === "corporate" ? "default" : "outline"}
          onClick={() => setTypeFilter("corporate")}
          className={typeFilter === "corporate" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Corporate
        </Button>
        <Button
          variant={typeFilter === "regional" ? "default" : "outline"}
          onClick={() => setTypeFilter("regional")}
          className={typeFilter === "regional" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
        >
          Regional
        </Button>
      </div>

      {sortedTournaments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-lg text-gray-600 dark:text-gray-300">No tournaments found matching your criteria.</p>
          <Button 
            onClick={() => {setSearchTerm(""); setStatusFilter("all"); setTypeFilter("all");}}
            className="mt-4 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      )}

      <div className="mt-12 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Current Challenges</h2>
          <Button className="bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-cricket-accent to-yellow-500 text-white p-4">
                <span className="inline-block px-2 py-1 bg-white bg-opacity-20 rounded text-xs font-medium mb-2">
                  Batting Challenge
                </span>
                <h3 className="text-lg font-bold mb-1">Most Runs in April</h3>
                <p className="text-sm opacity-90">Score the most runs this month to win exciting prizes</p>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">CURRENT LEADER</p>
                    <p className="text-sm font-medium">Virat Kohli - 342 runs</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PARTICIPANTS</p>
                    <p className="text-sm font-medium">64 players</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PRIZE</p>
                  <p className="text-sm font-medium">Premium Cricket Kit + ₹5,000</p>
                </div>
              </div>
              <div className="flex border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                  View Leaderboard
                </button>
                <button className="flex-1 py-3 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
                  Join Challenge
                </button>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-cricket-secondary to-blue-600 text-white p-4">
                <span className="inline-block px-2 py-1 bg-white bg-opacity-20 rounded text-xs font-medium mb-2">
                  Bowling Challenge
                </span>
                <h3 className="text-lg font-bold mb-1">Fastest Bowler of the Week</h3>
                <p className="text-sm opacity-90">Clock the highest speed on our radar turfs</p>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">CURRENT LEADER</p>
                    <p className="text-sm font-medium">Jasprit Bumrah - 145 km/h</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PARTICIPANTS</p>
                    <p className="text-sm font-medium">38 players</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PRIZE</p>
                  <p className="text-sm font-medium">Professional Bowling Analysis + ₹2,500</p>
                </div>
              </div>
              <div className="flex border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                  View Leaderboard
                </button>
                <button className="flex-1 py-3 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
                  Join Challenge
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const TournamentCard: React.FC<{ tournament: Tournament }> = ({ tournament }) => {
  const startDate = new Date(tournament.startDate);
  const endDate = new Date(tournament.endDate);
  
  // Determine status badge style
  const getStatusBadgeStyle = () => {
    switch(tournament.status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="bg-cricket-accent text-white px-6 py-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs uppercase font-semibold tracking-wider bg-white bg-opacity-20 px-2 py-1 rounded">
              {tournament.type}
            </span>
            <span className={`text-xs uppercase font-semibold px-2 py-1 rounded ${getStatusBadgeStyle()}`}>
              {tournament.status}
            </span>
          </div>
          <h4 className="text-xl font-bold mb-1">{tournament.name}</h4>
          <p className="text-sm opacity-85">{tournament.description}</p>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">LOCATION</p>
              <p className="text-sm font-medium flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {tournament.location}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">ORGANIZER</p>
              <p className="text-sm font-medium">
                {tournament.organizer}
              </p>
            </div>
          </div>
          
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">DATES</p>
              <p className="text-sm font-medium flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">TEAMS</p>
              <p className="text-sm font-medium flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {tournament.teams.length} registered
              </p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">ENTRY FEE</p>
            <p className="text-sm font-medium">
              {tournament.entryFee ? `₹${tournament.entryFee.amount}` : 'Free'}
            </p>
          </div>
          
          {tournament.prizes && (
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">PRIZES</p>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded">
                  <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                  <div>
                    <p className="text-xs font-medium">1st Prize</p>
                    <p className="text-xs">{tournament.prizes.first}</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 dark:bg-gray-800/50 p-2 rounded">
                  <Trophy className="w-4 h-4 text-gray-500 mr-2" />
                  <div>
                    <p className="text-xs font-medium">2nd Prize</p>
                    <p className="text-xs">{tournament.prizes.second}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex border-t border-gray-200 dark:border-gray-700">
          <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            View Details
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium ${
              tournament.status === "upcoming" 
                ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" 
                : "bg-gray-100 text-gray-500 cursor-not-allowed dark:bg-gray-800"
            }`}
            disabled={tournament.status !== "upcoming"}
          >
            {tournament.status === "upcoming" ? "Register Team" : "Registration Closed"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tournaments;
