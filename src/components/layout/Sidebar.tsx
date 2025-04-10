
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Users, Calendar, MapPin, Trophy, Settings, LogIn, Sun, Moon } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen sticky top-0 border-r border-purple-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl">
      <div className="h-full flex flex-col">
        <div className="px-6 py-6 border-b border-purple-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">CricBuddies</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Connect & Play Cricket</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto scrollbar-hide">
          <div className="mb-4">
            <h2 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Main
            </h2>
          </div>
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`
            }
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/players"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`
            }
          >
            <Users size={18} />
            <span>Players</span>
          </NavLink>
          <NavLink
            to="/matches"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-green-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`
            }
          >
            <Calendar size={18} />
            <span>Matches</span>
          </NavLink>
          <NavLink
            to="/turfs"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-orange-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`
            }
          >
            <MapPin size={18} />
            <span>Turfs</span>
          </NavLink>
          <NavLink
            to="/tournaments"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-rose-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`
            }
          >
            <Trophy size={18} />
            <span>Tournaments</span>
          </NavLink>

          <div className="pt-4 mt-4 border-t border-purple-100 dark:border-gray-700">
            <h2 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Account
            </h2>
            
            <NavLink
              to="/login"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-gray-700 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              <LogIn size={18} />
              <span>Login / Sign Up</span>
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-gray-700 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-700/50 transition-all duration-200"
            >
              <Settings size={18} />
              <span>Settings</span>
            </NavLink>
          </div>
        </nav>
        
        <div className="p-4 border-t border-purple-100 dark:border-gray-700">
          <div className="rounded-xl bg-purple-50 dark:bg-gray-700 p-3">
            <div className="flex justify-between items-center">
              <button className="p-2 rounded-lg bg-white dark:bg-gray-600 text-purple-600 dark:text-purple-400 shadow-sm">
                <Sun size={16} />
              </button>
              <div className="h-5 w-10 bg-gray-200 dark:bg-gray-500 rounded-full relative px-1 flex items-center cursor-pointer">
                <div className="h-3 w-3 bg-white rounded-full absolute transition-all duration-300 transform translate-x-5"></div>
              </div>
              <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <Moon size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
