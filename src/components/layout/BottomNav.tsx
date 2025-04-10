
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Calendar, MapPin, Trophy } from "lucide-react";

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700 z-10">
      <div className="grid grid-cols-5 h-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-cricket-green-dark" : "text-gray-500"
            }`
          }
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink
          to="/players"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-cricket-green-dark" : "text-gray-500"
            }`
          }
        >
          <Users size={20} />
          <span className="text-xs mt-1">Players</span>
        </NavLink>
        <NavLink
          to="/matches"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-cricket-green-dark" : "text-gray-500"
            }`
          }
        >
          <Calendar size={20} />
          <span className="text-xs mt-1">Matches</span>
        </NavLink>
        <NavLink
          to="/turfs"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-cricket-green-dark" : "text-gray-500"
            }`
          }
        >
          <MapPin size={20} />
          <span className="text-xs mt-1">Turfs</span>
        </NavLink>
        <NavLink
          to="/tournaments"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center ${
              isActive ? "text-cricket-green-dark" : "text-gray-500"
            }`
          }
        >
          <Trophy size={20} />
          <span className="text-xs mt-1">Tourneys</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
