
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  X, Users, Calendar, DollarSign, LogOut, Heart, Shield, LayoutDashboard,
  BookOpen, FileText, Receipt, File, PieChart, TrendingUp, Target, 
  Briefcase, FolderKanban, ListTodo, ClipboardList, UserPlus, Puzzle,
  PiggyBank, Wallet, CoinsIcon, LineChart, BarChart, MessageCircle,
  HelpCircle, LifeBuoy, FileQuestion, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  // State to toggle submenus
  const [showAccountingMenu, setShowAccountingMenu] = useState(false);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showHRMenu, setShowHRMenu] = useState(false);
  const [showInvestmentsMenu, setShowInvestmentsMenu] = useState(false);
  const [showSupportMenu, setShowSupportMenu] = useState(false);

  // Define main dashboard link
  const dashboardLink = {
    name: "لوحة التحكم",
    to: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  };
  
  // Define Elements link
  const elementsLink = {
    name: "العناصر",
    to: "/elements",
    icon: <Puzzle className="h-5 w-5" />,
  };
  
  // Define HR links
  const hrLinks = [
    {
      name: "الموظفين",
      to: "/employees",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: "العطل والإجازات",
      to: "/vacations",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "السلف المالية",
      to: "/advances",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      name: "المغادرات",
      to: "/departures",
      icon: <LogOut className="h-5 w-5" />,
    },
    {
      name: "التأمين الصحي",
      to: "/health-insurance",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      name: "الضمان الاجتماعي",
      to: "/social-security",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  // Define accounting links
  const accountingLinks = [
    {
      name: "القيود",
      to: "/accounting/journal-entries",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: "دفتر الاستاذ العام",
      to: "/accounting/general-ledger",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "السندات",
      to: "/accounting/vouchers",
      icon: <Receipt className="h-5 w-5" />,
    },
    {
      name: "الفواتير",
      to: "/accounting/invoices",
      icon: <File className="h-5 w-5" />,
    },
    {
      name: "الموزانة العامة",
      to: "/accounting/balance-sheet",
      icon: <PieChart className="h-5 w-5" />,
    },
    {
      name: "تقرير الدخل",
      to: "/accounting/income-statement",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      name: "مراكز التكلفة",
      to: "/accounting/cost-centers",
      icon: <Target className="h-5 w-5" />,
    },
    {
      name: "الاصول والصيانة والاستهلاك",
      to: "/accounting/assets",
      icon: <Briefcase className="h-5 w-5" />,
    },
  ];
  
  // Define project management links
  const projectLinks = [
    {
      name: "المشاريع",
      to: "/projects",
      icon: <FolderKanban className="h-5 w-5" />,
    },
    {
      name: "إنشاء مشروع جديد",
      to: "/projects/create",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: "المهام",
      to: "/tasks",
      icon: <ListTodo className="h-5 w-5" />,
    },
    {
      name: "لوحة المهام",
      to: "/task-board",
      icon: <ClipboardList className="h-5 w-5" />,
    }
  ];

  // Define investment management links
  const investmentLinks = [
    {
      name: "المستثمرين",
      to: "/investments/investors",
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: "المشاريع الاستثمارية",
      to: "/investments/projects",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: "الأرباح والعوائد",
      to: "/investments/returns",
      icon: <PiggyBank className="h-5 w-5" />,
    },
    {
      name: "المحفظة الاستثمارية",
      to: "/investments/portfolio",
      icon: <Wallet className="h-5 w-5" />,
    },
    {
      name: "تحليل الاستثمارات",
      to: "/investments/analysis",
      icon: <LineChart className="h-5 w-5" />,
    },
    {
      name: "التقارير المالية",
      to: "/investments/reports",
      icon: <BarChart className="h-5 w-5" />,
    },
  ];

  // Define customer support links
  const supportLinks = [
    {
      name: "خدمة العملاء والدعم",
      to: "/support",
      icon: <LifeBuoy className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed md:sticky inset-y-0 right-0 w-72 bg-white border-l border-gray-200 z-50 md:z-0 shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 md:border-0">
          <h2 className="text-xl font-bold text-hrm-blue">القائمة الرئيسية</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeSidebar}
            className="md:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {/* Dashboard Link */}
          <NavLink
            key={dashboardLink.to}
            to={dashboardLink.to}
            onClick={closeSidebar}
            className={({ isActive }) => cn(
              "flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200",
              isActive 
                ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <span className="ml-3">{dashboardLink.icon}</span>
            {dashboardLink.name}
          </NavLink>
          
          {/* Elements Link */}
          <NavLink
            key={elementsLink.to}
            to={elementsLink.to}
            onClick={closeSidebar}
            className={({ isActive }) => cn(
              "flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200",
              isActive 
                ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <span className="ml-3">{elementsLink.icon}</span>
            {elementsLink.name}
          </NavLink>
          
          {/* HR Section */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => setShowHRMenu(!showHRMenu)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <span className="ml-3"><UserPlus className="h-5 w-5" /></span>
                <span className="font-semibold">إدارة الموارد البشرية</span>
              </div>
              <span className={`transform transition-transform ${showHRMenu ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {showHRMenu && (
              <div className="mt-2 mr-4 pr-2 space-y-1 border-r border-gray-100">
                {hrLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeSidebar}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <span className="ml-3">{link.icon}</span>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          
          {/* Customer Support Section */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => setShowSupportMenu(!showSupportMenu)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <span className="ml-3"><MessageCircle className="h-5 w-5" /></span>
                <span className="font-semibold">خدمة العملاء والدعم</span>
              </div>
              <span className={`transform transition-transform ${showSupportMenu ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {showSupportMenu && (
              <div className="mt-2 mr-4 pr-2 space-y-1 border-r border-gray-100">
                {supportLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeSidebar}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <span className="ml-3">{link.icon}</span>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          
          {/* Investments Section */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => setShowInvestmentsMenu(!showInvestmentsMenu)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <span className="ml-3"><CoinsIcon className="h-5 w-5" /></span>
                <span className="font-semibold">إدارة الاستثمارات</span>
              </div>
              <span className={`transform transition-transform ${showInvestmentsMenu ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {showInvestmentsMenu && (
              <div className="mt-2 mr-4 pr-2 space-y-1 border-r border-gray-100">
                {investmentLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeSidebar}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <span className="ml-3">{link.icon}</span>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          
          {/* Project Management Section */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => setShowProjectsMenu(!showProjectsMenu)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <span className="ml-3"><FolderKanban className="h-5 w-5" /></span>
                <span className="font-semibold">إدارة المشاريع والمهام</span>
              </div>
              <span className={`transform transition-transform ${showProjectsMenu ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {showProjectsMenu && (
              <div className="mt-2 mr-4 pr-2 space-y-1 border-r border-gray-100">
                {projectLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeSidebar}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <span className="ml-3">{link.icon}</span>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          
          {/* Accounting Section */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => setShowAccountingMenu(!showAccountingMenu)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                <span className="ml-3"><DollarSign className="h-5 w-5" /></span>
                <span className="font-semibold">نظام المحاسبة</span>
              </div>
              <span className={`transform transition-transform ${showAccountingMenu ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {showAccountingMenu && (
              <div className="mt-2 mr-4 pr-2 space-y-1 border-r border-gray-100">
                {accountingLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeSidebar}
                    className={({ isActive }) => cn(
                      "flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <span className="ml-3">{link.icon}</span>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4">
          <div className="card-glass overflow-hidden">
            <div className="bg-hrm-blue/10 px-4 py-3 border-b border-hrm-blue/10">
              <h3 className="font-medium text-hrm-blue">بحاجة للمساعدة؟</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">هل تواجه صعوبة في استخدام النظام؟</p>
              <Button size="sm" className="w-full bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg transition-all">
                الدعم الفني
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
