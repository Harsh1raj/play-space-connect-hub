
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Calendar, MapPin, Trophy, Settings, LogIn } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="h-full flex flex-col">
        <div className="px-6 py-6">
          <h1 className="text-2xl font-bold text-cricket-green-dark">CricBuddies</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Connect & Play Cricket</p>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-cricket-green-dark text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/players"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-cricket-green-dark text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
          >
            <Users size={18} />
            <span>Players</span>
          </NavLink>
          <NavLink
            to="/matches"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-cricket-green-dark text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
          >
            <Calendar size={18} />
            <span>Matches</span>
          </NavLink>
          <NavLink
            to="/turfs"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-cricket-green-dark text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
          >
            <MapPin size={18} />
            <span>Turfs</span>
          </NavLink>
          <NavLink
            to="/tournaments"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-cricket-green-dark text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
          >
            <Trophy size={18} />
            <span>Tournaments</span>
          </NavLink>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <NavLink
            to="/login"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <LogIn size={18} />
            <span>Login / Sign Up</span>
          </NavLink>
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
