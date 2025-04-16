
import React from "react";
import { PlusCircle, Search, Briefcase, BarChart, FileText, MoreHorizontal, Users, ArrowUp, ArrowDown } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const InvestmentProjectsPage = () => {
  // Demo data for investment projects
  const projects = [
    {
      id: 1,
      name: "برج الأعمال المركزي",
      location: "الرياض - حي العليا",
      totalInvestment: 15000000,
      returnRate: 12.5,
      trending: "up",
      progress: 65,
      investors: 8,
      status: "قيد التنفيذ",
      startDate: "2023-06-15",
      endDate: "2025-12-30"
    },
    {
      id: 2,
      name: "مجمع الواحة السكني",
      location: "جدة - حي الشاطئ",
      totalInvestment: 8500000,
      returnRate: 9.8,
      trending: "up",
      progress: 40,
      investors: 6,
      status: "قيد التنفيذ",
      startDate: "2023-09-01",
      endDate: "2025-03-15"
    },
    {
      id: 3,
      name: "مركز التسوق الجديد",
      location: "الدمام - حي الفيصلية",
      totalInvestment: 22000000,
      returnRate: 15.2,
      trending: "up",
      progress: 25,
      investors: 12,
      status: "قيد التنفيذ",
      startDate: "2024-01-10",
      endDate: "2026-07-25"
    },
    {
      id: 4,
      name: "مشروع الطاقة الشمسية",
      location: "تبوك - المنطقة الصناعية",
      totalInvestment: 35000000,
      returnRate: 8.5,
      trending: "down",
      progress: 15,
      investors: 14,
      status: "مرحلة التخطيط",
      startDate: "2024-04-01",
      endDate: "2027-06-30"
    },
    {
      id: 5,
      name: "مجمع المكاتب الذكية",
      location: "الرياض - حي الملقا",
      totalInvestment: 18000000,
      returnRate: 11.3,
      trending: "up",
      progress: 80,
      investors: 9,
      status: "قيد التنفيذ",
      startDate: "2022-11-20",
      endDate: "2024-10-15"
    },
    {
      id: 6,
      name: "منتجع سياحي",
      location: "أبها - الهضبة الغربية",
      totalInvestment: 42000000,
      returnRate: 16.8,
      trending: "up",
      progress: 5,
      investors: 18,
      status: "مرحلة التخطيط",
      startDate: "2024-06-15",
      endDate: "2027-12-31"
    }
  ];

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">المشاريع الاستثمارية</h1>
            <p className="text-muted-foreground">إدارة ومتابعة المشاريع الاستثمارية</p>
          </div>
          <Button className="flex items-center gap-2 bg-hrm-blue hover:bg-hrm-blue/90">
            <PlusCircle className="w-4 h-4" />
            <span>إضافة مشروع</span>
          </Button>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="بحث عن مشروع..." 
              className="pr-10 w-full" 
            />
          </div>
          <div className="flex gap-2 self-end">
            <Button variant="outline" size="sm">
              جميع المشاريع
            </Button>
            <Button variant="outline" size="sm">
              قيد التنفيذ
            </Button>
            <Button variant="outline" size="sm">
              مرحلة التخطيط
            </Button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="border-2 hover:border-hrm-blue/20 transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <FileText className="w-4 h-4" /> تفاصيل المشروع
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <BarChart className="w-4 h-4" /> تقرير الأداء
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Users className="w-4 h-4" /> المستثمرين
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-muted-foreground text-sm">{project.location}</p>
                <Badge 
                  variant={project.status === "قيد التنفيذ" ? "success" : "info"}
                  className="mt-2"
                >
                  {project.status}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>تاريخ البدء:</span>
                  <span className="font-medium">{formatDate(project.startDate)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>تاريخ الإنتهاء المتوقع:</span>
                  <span className="font-medium">{formatDate(project.endDate)}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>نسبة الإنجاز:</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">عدد المستثمرين</p>
                    <p className="font-bold text-lg">{project.investors}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-center">
                    <p className="text-sm text-muted-foreground">نسبة العائد</p>
                    <div className="flex items-center justify-center font-bold text-lg">
                      {project.returnRate}%
                      {project.trending === "up" ? (
                        <ArrowUp className="w-4 h-4 text-green-500 ml-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-500 ml-1" />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <span className="text-muted-foreground">إجمالي الاستثمار:</span>
                <span className="font-bold">{project.totalInvestment.toLocaleString()} ريال</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentProjectsPage;
