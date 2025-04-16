
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
import Elements from "./pages/Elements"; // Added Elements page import
// Accounting System Pages
import JournalEntries from "./pages/accounting/JournalEntries";
import GeneralLedger from "./pages/accounting/GeneralLedger";
import Vouchers from "./pages/accounting/Vouchers";
import Invoices from "./pages/accounting/Invoices";
import BalanceSheet from "./pages/accounting/BalanceSheet";
import IncomeStatement from "./pages/accounting/IncomeStatement";
import CostCenters from "./pages/accounting/CostCenters";
import Assets from "./pages/accounting/Assets";
// Project Management Pages
import Projects from "./pages/projects/Projects";
import ProjectDetails from "./pages/projects/ProjectDetails";
import CreateProject from "./pages/projects/CreateProject";
import Tasks from "./pages/projects/Tasks";
import TaskDetails from "./pages/projects/TaskDetails";
import TaskBoard from "./pages/projects/TaskBoard";
// Investment Management Pages
import Investors from "./pages/investments/Investors";
import InvestmentProjects from "./pages/investments/Projects";
import InvestmentProjectDetails from "./pages/investments/ProjectDetails";
import Returns from "./pages/investments/Returns";
import Portfolio from "./pages/investments/Portfolio";
import Analysis from "./pages/investments/Analysis";
import Reports from "./pages/investments/Reports";

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
          <Route path="/elements" element={<Elements />} /> {/* Added Elements page route */}
          
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
          
          {/* Project Management Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/task-board" element={<TaskBoard />} />
          
          {/* Investment Management Routes */}
          <Route path="/investments/investors" element={<Investors />} />
          <Route path="/investments/projects" element={<InvestmentProjects />} />
          <Route path="/investments/project/:id" element={<InvestmentProjectDetails />} />
          <Route path="/investments/returns" element={<Returns />} />
          <Route path="/investments/portfolio" element={<Portfolio />} />
          <Route path="/investments/analysis" element={<Analysis />} />
          <Route path="/investments/reports" element={<Reports />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
