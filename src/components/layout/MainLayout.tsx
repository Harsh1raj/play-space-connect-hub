
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import Sidebar from "./Sidebar";
import { App } from "@capacitor/app";

const MainLayout: React.FC = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Handle hardware back button for Android
    const backButtonListener = App.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        // Ask for confirmation before exiting the app
        if (confirm("Are you sure you want to exit the app?")) {
          App.exitApp();
        }
      }
    });

    return () => {
      // Clean up the listener when component unmounts
      backButtonListener.remove();
    };
  }, []);
  
  return (
    <div className="flex h-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {!isMobile && <Sidebar />}
      <div className="flex-1 overflow-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10"></div>
        <main className="pb-16 md:pb-0 min-h-screen">
          <Outlet />
        </main>
        {isMobile && <BottomNav />}
      </div>
    </div>
  );
};

export default MainLayout;
