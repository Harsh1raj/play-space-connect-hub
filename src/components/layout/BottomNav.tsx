
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Calendar, MapPin, Trophy } from "lucide-react";

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-purple-100 dark:bg-gray-800/90 dark:border-gray-700 shadow-lg z-10">
      <div className="grid grid-cols-5 h-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive 
                ? "text-purple-600 dark:text-purple-400" 
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1.5 rounded-full ${isActive ? 'bg-purple-100 dark:bg-purple-900/30' : ''}`}>
                <Home size={20} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className="text-xs mt-1 font-medium">Home</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/players"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive 
                ? "text-blue-500 dark:text-blue-400" 
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1.5 rounded-full ${isActive ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
                <Users size={20} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className="text-xs mt-1 font-medium">Players</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/matches"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive 
                ? "text-green-500 dark:text-green-400" 
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1.5 rounded-full ${isActive ? 'bg-green-100 dark:bg-green-900/30' : ''}`}>
                <Calendar size={20} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className="text-xs mt-1 font-medium">Matches</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/turfs"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive 
                ? "text-orange-500 dark:text-orange-400" 
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1.5 rounded-full ${isActive ? 'bg-orange-100 dark:bg-orange-900/30' : ''}`}>
                <MapPin size={20} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className="text-xs mt-1 font-medium">Turfs</span>
            </>
          )}
        </NavLink>
        <NavLink
          to="/tournaments"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive 
                ? "text-rose-500 dark:text-rose-400" 
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className={`p-1.5 rounded-full ${isActive ? 'bg-rose-100 dark:bg-rose-900/30' : ''}`}>
                <Trophy size={20} className={isActive ? 'animate-pulse' : ''} />
              </div>
              <span className="text-xs mt-1 font-medium">Tourneys</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
