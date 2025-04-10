
import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex h-full">
      {!isMobile && <Sidebar />}
      <div className="flex-1 overflow-auto">
        <main className="pb-16 md:pb-0 min-h-screen">
          <Outlet />
        </main>
        {isMobile && <BottomNav />}
      </div>
    </div>
  );
};

export default MainLayout;
