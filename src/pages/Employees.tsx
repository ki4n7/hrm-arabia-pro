import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import EmployeeCard from "../components/dashboard/EmployeeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus, Search, Filter, Users } from "lucide-react";

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  
  // Mock data for employees
  const employeesData = [
    {
      id: "1",
      name: "أحمد محمد",
      position: "مهندس برمجيات",
      department: "تقنية المعلومات",
      email: "ahmed@example.com",
      phone: "0112345678",
    },
    {
      id: "2",
      name: "سارة علي",
      position: "مصممة جرافيك",
      department: "التسويق",
      email: "sara@example.com",
      phone: "0123456789",
    },
    {
      id: "3",
      name: "محمد خالد",
      position: "محاسب",
      department: "المالية",
      email: "mohamed@example.com",
      phone: "0123456789",
    },
    {
      id: "4",
      name: "فاطمة أحمد",
      position: "مديرة الموارد البشرية",
      department: "الموارد البشرية",
      email: "fatima@example.com",
      phone: "0145678923",
    },
    {
      id: "5",
      name: "عمر حسن",
      position: "مدير مبيعات",
      department: "المبيعات",
      email: "omar@example.com",
      phone: "0567891234",
    },
    {
      id: "6",
      name: "نورا سعيد",
      position: "محللة بيانات",
      department: "تقنية المعلومات",
      email: "noura@example.com",
      phone: "0567123498",
    }
  ];

  // Extract unique departments
  const departments = [...new Set(employeesData.map(emp => emp.department))];

  // Filter employees based on search and department
  const filteredEmployees = employeesData.filter(employee => {
    const matchesSearch = employee.name.includes(searchQuery) || 
                         employee.position.includes(searchQuery) ||
                         employee.email.includes(searchQuery);
    
    const matchesDepartment = selectedDepartment ? employee.department === selectedDepartment : true;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6 page-transition">
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="بحث عن موظف..."
              className="pr-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Actions */}
          <div className="flex gap-3 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  القسم
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSelectedDepartment(null)}>
                  الكل
                </DropdownMenuItem>
                {departments.map((dept) => (
                  <DropdownMenuItem 
                    key={dept} 
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
              <Plus className="h-4 w-4" />
              إضافة موظف
            </Button>
          </div>
        </div>
        
        {/* Employees Grid */}
        {filteredEmployees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                id={employee.id}
                name={employee.name}
                position={employee.position}
                department={employee.department}
                email={employee.email}
                phone={employee.phone}
                onView={(id) => console.log("View employee", id)}
                onEdit={(id) => console.log("Edit employee", id)}
                onDelete={(id) => console.log("Delete employee", id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-lg border border-gray-100">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">لم يتم العثور على موظفين</h3>
            <p className="text-gray-500 mt-2">لا يوجد موظفين مطابقين لمعايير البحث الخاصة بك</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Employees;
