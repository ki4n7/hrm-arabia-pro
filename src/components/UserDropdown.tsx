
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut } from "lucide-react";

const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <div className="flex items-center">
          <div className="rounded-full bg-hrm-lightBlue p-2">
            <User className="h-5 w-5 text-hrm-blue" />
          </div>
          <span className="mr-2 text-sm font-medium hidden md:block">المدير</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white">
        <div className="flex items-center justify-start gap-2 p-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt="Avatar" />
            <AvatarFallback className="bg-hrm-lightBlue">
              <User className="h-4 w-4 text-hrm-blue" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">المدير</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 cursor-pointer">
          <User className="h-4 w-4" />
          <span>الملف الشخصي</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 cursor-pointer">
          <Settings className="h-4 w-4" />
          <span>إعدادات الحساب</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 cursor-pointer text-red-500 hover:text-red-500">
          <LogOut className="h-4 w-4" />
          <span>تسجيل خروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
