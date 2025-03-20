
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Employees from "./pages/Employees";
import Vacations from "./pages/Vacations";
import Advances from "./pages/Advances";
import Departures from "./pages/Departures";
import HealthInsurance from "./pages/HealthInsurance";
import SocialSecurity from "./pages/SocialSecurity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/vacations" element={<Vacations />} />
          <Route path="/advances" element={<Advances />} />
          <Route path="/departures" element={<Departures />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/social-security" element={<SocialSecurity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
