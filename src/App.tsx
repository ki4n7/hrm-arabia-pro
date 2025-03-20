
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
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
// Accounting System Pages
import JournalEntries from "./pages/accounting/JournalEntries";
import GeneralLedger from "./pages/accounting/GeneralLedger";
import Vouchers from "./pages/accounting/Vouchers";
import Invoices from "./pages/accounting/Invoices";
import BalanceSheet from "./pages/accounting/BalanceSheet";
import IncomeStatement from "./pages/accounting/IncomeStatement";
import CostCenters from "./pages/accounting/CostCenters";
import Assets from "./pages/accounting/Assets";

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
          
          {/* User Profile & Settings Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/settings" element={<ProfileSettings />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Accounting System Routes */}
          <Route path="/accounting/journal-entries" element={<JournalEntries />} />
          <Route path="/accounting/general-ledger" element={<GeneralLedger />} />
          <Route path="/accounting/vouchers" element={<Vouchers />} />
          <Route path="/accounting/invoices" element={<Invoices />} />
          <Route path="/accounting/balance-sheet" element={<BalanceSheet />} />
          <Route path="/accounting/income-statement" element={<IncomeStatement />} />
          <Route path="/accounting/cost-centers" element={<CostCenters />} />
          <Route path="/accounting/assets" element={<Assets />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
