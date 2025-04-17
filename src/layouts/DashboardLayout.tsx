
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300 ease-in-out animate-fade-in">
          {/* Header section for each page */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-hrm-black">
              {getTitleFromPath(location.pathname)}
            </h1>
            <p className="text-hrm-darkGray mt-1">
              {getDescriptionFromPath(location.pathname)}
            </p>
          </div>
          {/* Main content */}
          <div>
            {children}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
};

// Helper function to get the title based on the current path
const getTitleFromPath = (path: string): string => {
  switch (path) {
    case "/":
      return "لوحة التحكم";
    case "/employees":
      return "إدارة الموظفين";
    case "/vacations":
      return "إدارة العطل والإجازات";
    case "/advances":
      return "إدارة السلف المالية";
    case "/departures":
      return "إدارة المغادرات";
    case "/health-insurance":
      return "التأمين الصحي";
    case "/social-security":
      return "الضمان الاجتماعي";
    case "/support":
      return "خدمة العملاء والدعم الفني";
    case "/inventory/inventory":
      return "إدارة المخزون والمستودعات";
    default:
      // Handle inventory product or warehouse detail pages
      if (path.startsWith("/inventory/product/")) {
        return "تفاصيل المنتج";
      } else if (path.startsWith("/inventory/warehouse/")) {
        return "تفاصيل المستودع";
      }
      return "نظام إدارة الموارد البشرية";
  }
};

// Helper function to get the description based on the current path
const getDescriptionFromPath = (path: string): string => {
  switch (path) {
    case "/":
      return "نظرة عامة على نظام إدارة الموارد البشرية";
    case "/employees":
      return "عرض وإدارة بيانات الموظفين";
    case "/vacations":
      return "إدارة طلبات الإجازات والعطل";
    case "/advances":
      return "إدارة طلبات السلف المالية";
    case "/departures":
      return "تسجيل وإدارة المغادرات";
    case "/health-insurance":
      return "إدارة التأمين الصحي للموظفين";
    case "/social-security":
      return "إدارة الضمان الاجتماعي";
    case "/support":
      return "تذاكر الدعم الفني وخدمة العملاء والمحادثة والاستفسارات والشكاوى";
    case "/inventory/inventory":
      return "إدارة المخزون والمستودعات والمنتجات ونقاط البيع والاستيراد والتصدير";
    default:
      // Handle inventory product or warehouse detail pages
      if (path.startsWith("/inventory/product/")) {
        return "عرض وإدارة تفاصيل المنتج والمخزون";
      } else if (path.startsWith("/inventory/warehouse/")) {
        return "عرض وإدارة تفاصيل المستودع";
      }
      return "";
  }
};

export default DashboardLayout;
