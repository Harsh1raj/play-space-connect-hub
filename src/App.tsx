
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Matches from "./pages/Matches";
import Turfs from "./pages/Turfs";
import Tournaments from "./pages/Tournaments";
import Login from "./pages/Login";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="app-wrapper bg-purple-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="players" element={<Players />} />
              <Route path="matches" element={<Matches />} />
              <Route path="turfs" element={<Turfs />} />
              <Route path="tournaments" element={<Tournaments />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
