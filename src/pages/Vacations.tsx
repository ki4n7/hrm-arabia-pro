import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Calendar, 
  ChevronDown, 
  Plus, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Calendar as CalendarIcon 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import StatCard from "../components/dashboard/StatCard";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800"
};

const Vacations = () => {
  const [filter, setFilter] = useState("all");
  
  // Mock data for vacation stats
  const stats = [
    {
      title: "الإجازات السنوية",
      value: 48,
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "الإجازات المرضية",
      value: 12,
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "إجازات بدون راتب",
      value: 5,
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "الإجازات الاضطرارية",
      value: 3,
      icon: <Calendar className="h-6 w-6" />,
    }
  ];
  
  // Mock data for vacation requests
  const vacationRequests = [
    {
      id: "1",
      employeeName: "أحمد محمد",
      department: "تقنية المعلومات",
      type: "سنوية",
      startDate: "15/06/2023",
      endDate: "30/06/2023",
      duration: "15 يوم",
      status: "approved",
      reason: "إجازة سنوية"
    },
    {
      id: "2",
      employeeName: "سارة علي",
      department: "التسويق",
      type: "مرضية",
      startDate: "05/07/2023",
      endDate: "10/07/2023",
      duration: "5 أيام",
      status: "pending",
      reason: "مرض"
    },
    {
      id: "3",
      employeeName: "محمد خالد",
      department: "المالية",
      type: "بدون راتب",
      startDate: "20/07/2023",
      endDate: "05/08/2023",
      duration: "15 يوم",
      status: "rejected",
      reason: "ظروف شخصية"
    },
    {
      id: "4",
      employeeName: "فاطمة أحمد",
      department: "الموارد البشرية",
      type: "اضطرارية",
      startDate: "12/08/2023",
      endDate: "15/08/2023",
      duration: "3 أيام",
      status: "pending",
      reason: "ظروف عائلية"
    }
  ];

  // Filter vacation requests based on status
  const filteredRequests = filter === "all" 
    ? vacationRequests 
    : vacationRequests.filter(req => req.status === filter);

  // Status display helper
  const getStatusBadge = (status) => {
    switch(status) {
      case "pending":
        return (
          <Badge variant="outline" className={`${statusColors.pending} border-yellow-200 gap-1`}>
            <Clock className="h-3 w-3" />
            قيد الانتظار
          </Badge>
        );
      case "approved":
        return (
          <Badge variant="outline" className={`${statusColors.approved} border-green-200 gap-1`}>
            <CheckCircle className="h-3 w-3" />
            تمت الموافقة
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="outline" className={`${statusColors.rejected} border-red-200 gap-1`}>
            <XCircle className="h-3 w-3" />
            مرفوض
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 page-transition">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
        
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <h2 className="text-xl font-bold">طلبات الإجازات</h2>
          
          <div className="flex gap-3 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  الحالة
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setFilter("all")}>
                  جميع الطلبات
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("pending")}>
                  قيد الانتظار
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("approved")}>
                  تمت الموافقة
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter("rejected")}>
                  مرفوض
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
              <Plus className="h-4 w-4" />
              طلب إجازة جديد
            </Button>
          </div>
        </div>
        
        {/* Vacation Requests */}
        {filteredRequests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="overflow-hidden animate-scale-in">
                <CardHeader className="bg-gray-50 border-b border-gray-100 pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{request.employeeName}</CardTitle>
                      <p className="text-sm text-gray-500">{request.department}</p>
                    </div>
                    {getStatusBadge(request.status)}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3">
                      <div className="bg-hrm-blue/10 p-2 rounded-full">
                        <CalendarIcon className="h-4 w-4 text-hrm-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">المدة</p>
                        <p className="font-medium">{request.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center gap-4">
                      <div className="bg-gray-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-500">من</p>
                        <p className="font-medium">{request.startDate}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-500">إلى</p>
                        <p className="font-medium">{request.endDate}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">نوع الإجازة</p>
                      <Badge variant="secondary">{request.type}</Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-1">السبب</p>
                      <p className="text-sm">{request.reason}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-100 bg-gray-50 flex justify-end gap-2">
                  {request.status === "pending" && (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        رفض
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-green-600 border-green-200 hover:bg-green-50"
                      >
                        موافقة
                      </Button>
                    </>
                  )}
                  <Button variant="outline" size="sm">
                    التفاصيل
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-lg border border-gray-100">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">لا توجد طلبات إجازات</h3>
            <p className="text-gray-500 mt-2">لا توجد طلبات إجازات مطابقة للفلتر المحدد</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Vacations;
