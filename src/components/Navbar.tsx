
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Bell, User, Search, Plus } from "lucide-react";
import NotificationsDropdown from "./NotificationsDropdown";
import UserDropdown from "./UserDropdown";
import FormModal from "./FormModal";
import { useToast } from "@/hooks/use-toast";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال النموذج بنجاح",
      description: "سيتم مراجعة الطلب في أقرب وقت ممكن",
    });
    closeModal();
  };

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

          <div className="flex items-center gap-2">
            <Button
              onClick={openModal}
              size="sm"
              className="hidden md:flex bg-hrm-blue hover:bg-hrm-blue/90"
            >
              <Plus className="h-4 w-4 ml-1" />
              إضافة جديد
            </Button>
            
            <NotificationsDropdown />
            
            <UserDropdown />
          </div>
        </div>
      </div>

      {/* Form Modal Example */}
      <FormModal
        title="نموذج طلب جديد"
        description="يرجى ملء البيانات المطلوبة لإنشاء طلب جديد"
        isOpen={isModalOpen}
        onClose={closeModal}
        footer={
          <div className="flex justify-between w-full">
            <Button variant="outline" onClick={closeModal}>
              إلغاء
            </Button>
            <Button type="submit" form="demoForm">
              إرسال الطلب
            </Button>
          </div>
        }
      >
        <form id="demoForm" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium">
              عنوان الطلب
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium">
              وصف الطلب
            </label>
            <textarea
              id="description"
              rows={3}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
              required
            ></textarea>
          </div>
        </form>
      </FormModal>
    </nav>
  );
};

export default Navbar;
