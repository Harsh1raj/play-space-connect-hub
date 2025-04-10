
import React, { useState } from "react";
import { Search, Filter, MapPin, Calendar, Clock, Users, Check, X, HelpCircle } from "lucide-react";
import { matches, groups, turfs } from "@/data/mockData";
import { Match } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Matches: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<"all" | "scheduled" | "completed" | "cancelled">("all");

  const getGroupName = (groupId: string) => {
    const group = groups.find(g => g.id === groupId);
    return group ? group.name : "Unknown Group";
  };

  const getTurfName = (turfId?: string) => {
    if (!turfId) return "TBD";
    const turf = turfs.find(t => t.id === turfId);
    return turf ? turf.name : "Unknown Turf";
  };

  const filteredMatches = matches.filter(match => {
    return statusFilter === "all" || match.status === statusFilter;
  });

  // Sort matches by date (nearest first)
  const sortedMatches = [...filteredMatches].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Cricket Matches</h1>
        <p className="text-gray-600 dark:text-gray-300">View and manage your upcoming and past cricket matches</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          <Button
            variant={statusFilter === "all" ? "default" : "outline"}
            onClick={() => setStatusFilter("all")}
            className={statusFilter === "all" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            All Matches
          </Button>
          <Button
            variant={statusFilter === "scheduled" ? "default" : "outline"}
            onClick={() => setStatusFilter("scheduled")}
            className={statusFilter === "scheduled" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Scheduled
          </Button>
          <Button
            variant={statusFilter === "completed" ? "default" : "outline"}
            onClick={() => setStatusFilter("completed")}
            className={statusFilter === "completed" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Completed
          </Button>
          <Button
            variant={statusFilter === "cancelled" ? "default" : "outline"}
            onClick={() => setStatusFilter("cancelled")}
            className={statusFilter === "cancelled" ? "bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90" : ""}
          >
            Cancelled
          </Button>
        </div>
        <Button className="bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90">
          Create Match
        </Button>
      </div>

      {sortedMatches.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-lg text-gray-600 dark:text-gray-300">No matches found.</p>
          {statusFilter !== "all" && (
            <Button 
              onClick={() => setStatusFilter("all")}
              className="mt-4 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90"
            >
              Show All Matches
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sortedMatches.map((match) => (
            <MatchCard 
              key={match.id} 
              match={match} 
              groupName={getGroupName(match.groupId)} 
              turfName={getTurfName(match.turfId)} 
            />
          ))}
        </div>
      )}

      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Groups</h2>
          <Button className="bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90">
            Create Group
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.slice(0, 3).map((group) => (
            <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="h-32 bg-gray-200 relative">
                  <img src={group.image || "/placeholder.svg"} alt={group.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h4 className="absolute bottom-3 left-4 font-semibold text-white text-lg">{group.name}</h4>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {group.description}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{group.members.length}</span> members
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Created {new Date(group.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 py-2 text-sm font-medium text-cricket-green-dark hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Calendar className="inline-block w-4 h-4 mr-1" />
                    Schedule Match
                  </button>
                  <button className="flex-1 py-2 text-sm font-medium text-cricket-green-dark hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Users className="inline-block w-4 h-4 mr-1" />
                    Group Chat
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const MatchCard: React.FC<{ 
  match: Match; 
  groupName: string;
  turfName: string;
}> = ({ match, groupName, turfName }) => {
  const matchDate = new Date(match.date);
  const isPastMatch = matchDate < new Date();
  
  // Get status badge style
  const getStatusBadge = () => {
    switch(match.status) {
      case "scheduled":
        return <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Scheduled</span>;
      case "completed":
        return <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Completed</span>;
      case "cancelled":
        return <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Cancelled</span>;
      default:
        return null;
    }
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="bg-cricket-green-dark text-white px-6 py-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-white text-opacity-80">
              {matchDate.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
            </span>
            {getStatusBadge()}
          </div>
          <h4 className="text-xl font-bold mb-1">{match.title}</h4>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span className="opacity-90">{groupName}</span>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">TIME</p>
              <p className="text-sm font-medium flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {match.time}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">FORMAT</p>
              <p className="text-sm font-medium">{match.format}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">VENUE</p>
            <p className="text-sm font-medium flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {turfName}
            </p>
          </div>
          
          {match.notes && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">NOTES</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-2 rounded mt-1">
                {match.notes}
              </p>
            </div>
          )}
          
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">PLAYERS ({match.players.confirmed.length} confirmed)</p>
            <div className="flex justify-between mb-1">
              <span className="flex items-center text-xs text-green-600">
                <Check className="w-3 h-3 mr-1" />
                {match.players.confirmed.length} confirmed
              </span>
              <span className="flex items-center text-xs text-yellow-600">
                <HelpCircle className="w-3 h-3 mr-1" />
                {match.players.pending.length} pending
              </span>
              <span className="flex items-center text-xs text-red-600">
                <X className="w-3 h-3 mr-1" />
                {match.players.declined.length} declined
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
              <div 
                className="bg-green-500 h-1.5 rounded-full" 
                style={{ 
                  width: `${(match.players.confirmed.length / (match.players.confirmed.length + match.players.pending.length + match.players.declined.length)) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex border-t border-gray-200 dark:border-gray-700">
          <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
            View Details
          </button>
          {match.status === "scheduled" && !isPastMatch ? (
            <button className="flex-1 py-3 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
              Respond to RSVP
            </button>
          ) : match.status === "scheduled" && isPastMatch ? (
            <button className="flex-1 py-3 bg-gray-100 text-gray-500 dark:bg-gray-800 text-sm font-medium cursor-not-allowed">
              Match Date Passed
            </button>
          ) : (
            <button className="flex-1 py-3 bg-gray-100 text-gray-500 dark:bg-gray-800 text-sm font-medium cursor-not-allowed">
              {match.status === "completed" ? "Match Completed" : "Match Cancelled"}
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Matches;
