
import React, { useState } from "react";
import { Search, Users, Calendar, MapPin, Trophy } from "lucide-react";
import { users, groups, turfs, tournaments } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  
  // Function to smoothly scroll to a section
  const scrollToSection = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
    const sections = document.querySelectorAll('.section-container');
    sections[sectionIndex]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Section Navigation (Desktop) */}
      <div className="hidden md:flex sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 gap-6">
        <button 
          onClick={() => scrollToSection(0)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            activeSection === 0 ? "bg-cricket-green-dark text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          <Users size={16} />
          <span>Find Players</span>
        </button>
        <button 
          onClick={() => scrollToSection(1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            activeSection === 1 ? "bg-cricket-green-dark text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          <MapPin size={16} />
          <span>Book Turf</span>
        </button>
        <button 
          onClick={() => scrollToSection(2)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            activeSection === 2 ? "bg-cricket-green-dark text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          <Trophy size={16} />
          <span>Tournaments</span>
        </button>
      </div>

      {/* Layer 1: Find Players */}
      <section className="section-container flex flex-col">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Find Players & Make Groups</h2>
          <p className="text-gray-600 dark:text-gray-300">Connect with players near you and schedule matches</p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by location, skill level, or name..."
            className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cricket-green-dark focus:border-transparent"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Suggested Players</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.slice(0, 3).map((user) => (
              <Card key={user.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                      <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{user.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{user.location}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        <span className="inline-block px-2 py-1 bg-cricket-green-light bg-opacity-20 text-cricket-green-dark rounded-full text-xs mr-2">
                          {user.skillLevel}
                        </span>
                        {user.preferredFormat}
                      </p>
                    </div>
                  </div>
                  <div className="flex border-t border-gray-200 dark:border-gray-700">
                    <button className="flex-1 py-2 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                      View Profile
                    </button>
                    <button className="flex-1 py-2 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
                      Connect
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Your Groups</h3>
            <Link to="/groups" className="text-sm text-cricket-green-dark font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{group.members.length}</span> members
                    </p>
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

        <div className="text-center mt-4">
          <button 
            onClick={() => scrollToSection(1)}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90 font-medium"
          >
            Explore Turfs Next
          </button>
        </div>
      </section>

      {/* Layer 2: Book Turf */}
      <section className="section-container bg-gray-50 dark:bg-gray-900 flex flex-col">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Book Turf Instantly</h2>
          <p className="text-gray-600 dark:text-gray-300">Find and book available cricket grounds near you</p>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-cricket-green-dark text-white text-sm font-medium">
            All Turfs
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            Under ₹500
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            Indoor
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            With Lights
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            Showers
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Nearby Turfs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {turfs.slice(0, 3).map((turf) => (
              <Card key={turf.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="h-40 bg-gray-200 relative">
                    <img src={turf.images[0] || "/placeholder.svg"} alt={turf.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                      {turf.distance} km away
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{turf.name}</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{turf.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{turf.address}</p>
                    <p className="text-sm font-medium text-cricket-accent">
                      ₹{turf.price.amount} per hour
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {turf.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300">
                          {amenity}
                        </span>
                      ))}
                      {turf.amenities.length > 3 && (
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300">
                          +{turf.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex border-t border-gray-200 dark:border-gray-700">
                    <button className="flex-1 py-2 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                      View Details
                    </button>
                    <button className="flex-1 py-2 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
                      Book Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <button 
            onClick={() => scrollToSection(2)}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90 font-medium"
          >
            Explore Tournaments
          </button>
        </div>
      </section>

      {/* Layer 3: Tournaments */}
      <section className="section-container flex flex-col">
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Tournaments & Challenges</h2>
          <p className="text-gray-600 dark:text-gray-300">Join exciting tournaments and showcase your cricket skills</p>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-cricket-green-dark text-white text-sm font-medium">
            All Tournaments
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            Corporate
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            Open/Public
          </button>
          <button className="whitespace-nowrap rounded-full px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium">
            Regional
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Upcoming Tournaments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tournaments.filter(t => t.status === "upcoming").slice(0, 2).map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-cricket-accent text-white px-6 py-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase font-semibold tracking-wider bg-white bg-opacity-20 px-2 py-1 rounded">
                        {tournament.type}
                      </span>
                      <span className="text-sm font-medium">
                        {tournament.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{tournament.name}</h4>
                    <p className="text-sm opacity-85">{tournament.description}</p>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">DATES</p>
                        <p className="text-sm font-medium">
                          {new Date(tournament.startDate).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">TEAMS</p>
                        <p className="text-sm font-medium">
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
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PRIZES</p>
                      <p className="text-sm font-medium">
                        1st: {tournament.prizes?.first}
                      </p>
                    </div>
                  </div>
                  <div className="flex border-t border-gray-200 dark:border-gray-700">
                    <button className="flex-1 py-3 text-cricket-green-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                      View Details
                    </button>
                    <button className="flex-1 py-3 bg-cricket-green-dark text-white text-sm font-medium hover:bg-cricket-green-dark/90">
                      Register Team
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-3">Current Challenges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium mb-2">
                Batting Challenge
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Most Runs in April</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Score the most runs this month to win exciting prizes
              </p>
              <button className="w-full py-2 bg-cricket-green-dark text-white text-sm font-medium rounded-md hover:bg-cricket-green-dark/90">
                Join Challenge
              </button>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium mb-2">
                Bowling Challenge
              </span>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Fastest Bowler of the Week</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Clock the highest speed on our radar turfs
              </p>
              <button className="w-full py-2 bg-cricket-green-dark text-white text-sm font-medium rounded-md hover:bg-cricket-green-dark/90">
                Join Challenge
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button 
            onClick={() => scrollToSection(0)}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-cricket-green-dark text-white hover:bg-cricket-green-dark/90 font-medium"
          >
            Back to Top
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
