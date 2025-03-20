
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotificationsDropdown = () => {
  const notifications = [
    {
      id: 1,
      title: "طلب إجازة جديد",
      time: "منذ ٥ دقائق",
      read: false,
    },
    {
      id: 2,
      title: "طلب سلفة مالية",
      time: "منذ ساعة",
      read: false,
    },
    {
      id: 3,
      title: "تحديث معلومات الموظف",
      time: "منذ يومين",
      read: true,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-white">
        <DropdownMenuLabel className="text-center border-b pb-2">الإشعارات</DropdownMenuLabel>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="cursor-pointer flex flex-col items-start p-3 hover:bg-gray-50">
                <div className="flex w-full justify-between">
                  <span className={`text-sm font-medium ${notification.read ? 'text-gray-500' : 'text-gray-900'}`}>
                    {notification.title}
                  </span>
                  {!notification.read && <span className="h-2 w-2 bg-blue-500 rounded-full"></span>}
                </div>
                <span className="text-xs text-gray-500 mt-1">{notification.time}</span>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              لا توجد إشعارات
            </div>
          )}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-center cursor-pointer text-hrm-blue">
          <Check className="h-4 w-4 mr-1" />
          <span>تعليم الكل كمقروء</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;
