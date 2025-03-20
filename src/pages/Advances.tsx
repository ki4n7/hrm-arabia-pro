
import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  DollarSign, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  CheckCircle, 
  XCircle,
  Calendar,
  ArrowUpDown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import StatCard from "../components/dashboard/StatCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  paid: "bg-blue-100 text-blue-800"
};

const Advances = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Mock data for advances stats
  const stats = [
    {
      title: "إجمالي السلف",
      value: "SAR 125,000",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "السلف المعتمدة",
      value: "SAR 80,000",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "السلف المعلقة",
      value: "SAR 45,000",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "السلف المرفوضة",
      value: "SAR 15,000",
      icon: <XCircle className="h-6 w-6" />,
    }
  ];
  
  // Mock data for advance requests
  const advanceRequests = [
    {
      id: "1",
      employeeName: "أحمد محمد",
      department: "تقنية المعلومات",
      position: "مهندس برمجيات",
      amount: 10000,
      requestDate: "10/05/2023",
      paymentDate: "15/05/2023",
      reason: "ظروف شخصية",
      status: "approved"
    },
    {
      id: "2",
      employeeName: "سارة علي",
      department: "التسويق",
      position: "مصممة جرافيك",
      amount: 5000,
      requestDate: "22/05/2023",
      paymentDate: "-",
      reason: "مصاريف طبية",
      status: "pending"
    },
    {
      id: "3",
      employeeName: "محمد خالد",
      department: "المالية",
      position: "محاسب",
      amount: 8000,
      requestDate: "15/06/2023",
      paymentDate: "-",
      reason: "مصاريف تعليم",
      status: "rejected"
    },
    {
      id: "4",
      employeeName: "فاطمة أحمد",
      department: "الموارد البشرية",
      position: "مديرة الموارد البشرية",
      amount: 15000,
      requestDate: "01/07/2023",
      paymentDate: "05/07/2023",
      reason: "مصاريف سكن",
      status: "paid"
    }
  ];

  // Filter advance requests based on search and status
  const filteredRequests = advanceRequests.filter(request => {
    const matchesSearch = request.employeeName.includes(searchQuery) || 
                           request.department.includes(searchQuery);
    
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

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
      case "paid":
        return (
          <Badge variant="outline" className={`${statusColors.paid} border-blue-200 gap-1`}>
            <DollarSign className="h-3 w-3" />
            تم الدفع
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
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="بحث..."
              className="pr-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <div className="flex gap-2">
              <Button 
                variant="outline"
                className={statusFilter === "all" ? "bg-gray-100" : ""}
                onClick={() => setStatusFilter("all")}
              >
                الكل
              </Button>
              <Button 
                variant="outline"
                className={statusFilter === "pending" ? "bg-gray-100" : ""}
                onClick={() => setStatusFilter("pending")}
              >
                معلق
              </Button>
              <Button 
                variant="outline"
                className={statusFilter === "approved" ? "bg-gray-100" : ""}
                onClick={() => setStatusFilter("approved")}
              >
                معتمد
              </Button>
              <Button 
                variant="outline"
                className={statusFilter === "paid" ? "bg-gray-100" : ""}
                onClick={() => setStatusFilter("paid")}
              >
                مدفوع
              </Button>
            </div>
            
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
              <Plus className="h-4 w-4" />
              طلب سلفة جديد
            </Button>
          </div>
        </div>
        
        {/* Advance Requests Table */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>طلبات السلف</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الموظف</TableHead>
                  <TableHead>القسم</TableHead>
                  <TableHead className="text-left">المبلغ</TableHead>
                  <TableHead>تاريخ الطلب</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead className="text-center">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">
                      <div>
                        {request.employeeName}
                        <div className="text-sm text-gray-500">
                          {request.position}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{request.department}</TableCell>
                    <TableCell className="text-left">SAR {request.amount.toLocaleString()}</TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>
                      {getStatusBadge(request.status)}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        {request.status === "pending" && (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-red-600 border-red-200 hover:bg-red-50 h-8 w-8 p-0"
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-green-600 border-green-200 hover:bg-green-50 h-8 w-8 p-0"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                          <DollarSign className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {filteredRequests.length === 0 && (
              <div className="text-center p-8">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">لا توجد طلبات سلف</h3>
                <p className="text-gray-500 mt-2">لم يتم العثور على طلبات سلف مطابقة للبحث</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Advances;
