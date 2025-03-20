
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Bell, User, Search } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex-shrink-0 flex items-center mr-4 md:mr-0">
              <span className="text-xl font-bold text-hrm-blue">نظام الموارد البشرية</span>
            </div>
          </div>

          <div className="hidden md:flex items-center mx-4 flex-1">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pr-10 py-2 border border-gray-200 rounded-lg bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-hrm-blue/20 text-sm"
                placeholder="بحث..."
              />
            </div>
          </div>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="mr-3 flex items-center">
              <div className="rounded-full bg-hrm-lightBlue p-2">
                <User className="h-5 w-5 text-hrm-blue" />
              </div>
              <span className="mr-2 text-sm font-medium hidden md:block">المدير</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
