
import React from "react";
import { NavLink } from "react-router-dom";
import { X, Users, Calendar, DollarSign, LogOut, Heart, Shield, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  // Define sidebar links
  const links = [
    {
      name: "لوحة التحكم",
      to: "/",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
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
        
        <nav className="p-4 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeSidebar}
              className={({ isActive }) => cn(
                "flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-hrm-lightBlue text-hrm-blue font-medium" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <span className="ml-3">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
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
