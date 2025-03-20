
import React from "react";
import { MoreHorizontal, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface EmployeeCardProps {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
  position,
  department,
  email,
  phone,
  avatarUrl,
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <div className="card-glass overflow-hidden animate-scale-in">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-hrm-blue/10 flex items-center justify-center overflow-hidden">
              {avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={name} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-lg font-bold text-hrm-blue">
                  {name.charAt(0)}
                </span>
              )}
            </div>
            <div className="mr-3">
              <h3 className="font-medium text-lg">{name}</h3>
              <p className="text-sm text-gray-500">{position}</p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {onView && (
                <DropdownMenuItem onClick={() => onView(id)}>
                  عرض التفاصيل
                </DropdownMenuItem>
              )}
              {onEdit && (
                <DropdownMenuItem onClick={() => onEdit(id)}>
                  تعديل
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              {onDelete && (
                <DropdownMenuItem 
                  onClick={() => onDelete(id)}
                  className="text-red-600"
                >
                  حذف
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="mt-4">
          <div className="px-3 py-1 bg-gray-100 rounded-lg inline-block text-xs">
            {department}
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 ml-2" />
            <span>{email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 ml-2" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-hrm-blue hover:text-hrm-blue/80 hover:bg-hrm-blue/10"
          onClick={() => onView && onView(id)}
        >
          عرض الملف الكامل
        </Button>
      </div>
    </div>
  );
};

export default EmployeeCard;
