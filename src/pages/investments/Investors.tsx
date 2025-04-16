
import React from "react";
import { PlusCircle, Search, Users, UserPlus, Trash2, Edit, MoreHorizontal } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const InvestorsPage = () => {
  // Demo data for investors
  const investors = [
    {
      id: 1,
      name: "محمد أحمد",
      email: "mohammed@example.com",
      phone: "+966 55 123 4567",
      investmentTotal: 1200000,
      activeProjects: 3,
      status: "نشط"
    },
    {
      id: 2,
      name: "عبدالله محمد",
      email: "abdullah@example.com",
      phone: "+966 50 765 4321",
      investmentTotal: 850000,
      activeProjects: 2,
      status: "نشط"
    },
    {
      id: 3,
      name: "سارة خالد",
      email: "sara@example.com",
      phone: "+966 54 987 6543",
      investmentTotal: 2000000,
      activeProjects: 4,
      status: "نشط"
    },
    {
      id: 4,
      name: "فهد العتيبي",
      email: "fahad@example.com",
      phone: "+966 56 111 2222",
      investmentTotal: 500000,
      activeProjects: 1,
      status: "معلق"
    },
    {
      id: 5,
      name: "نورة سعد",
      email: "noura@example.com",
      phone: "+966 59 333 4444",
      investmentTotal: 1500000,
      activeProjects: 3,
      status: "نشط"
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">المستثمرين</h1>
            <p className="text-muted-foreground">إدارة المستثمرين والشراكات الاستثمارية</p>
          </div>
          <Button className="flex items-center gap-2 bg-hrm-blue hover:bg-hrm-blue/90">
            <PlusCircle className="w-4 h-4" />
            <span>إضافة مستثمر</span>
          </Button>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="بحث عن مستثمر..." 
              className="pr-10 w-full" 
            />
          </div>
          <div className="flex gap-2 self-end">
            <Button variant="outline" size="sm">
              جميع المستثمرين
            </Button>
            <Button variant="outline" size="sm">
              المستثمرين النشطين
            </Button>
            <Button variant="outline" size="sm">
              المستثمرين المعلقين
            </Button>
          </div>
        </div>

        {/* Investors list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor) => (
            <Card key={investor.id} className="overflow-hidden border-2 hover:border-hrm-blue/20 transition-all duration-200">
              <CardHeader className="bg-gradient-to-r from-hrm-lightBlue to-blue-50 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <CardTitle className="text-xl">{investor.name}</CardTitle>
                    <CardDescription className="mt-1">{investor.email}</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Edit className="w-4 h-4" /> تعديل بيانات
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4" /> إضافة لمشروع
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2 text-destructive">
                        <Trash2 className="w-4 h-4" /> حذف المستثمر
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Badge 
                  variant={investor.status === "نشط" ? "success" : "warning"}
                  className="mt-2 self-start"
                >
                  {investor.status}
                </Badge>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">رقم الهاتف:</span>
                    <span className="font-medium">{investor.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">إجمالي الاستثمارات:</span>
                    <span className="font-medium">{investor.investmentTotal.toLocaleString()} ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">المشاريع النشطة:</span>
                    <span className="font-medium">{investor.activeProjects} مشاريع</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 flex justify-between">
                <Button variant="ghost" size="sm">عرض المحفظة</Button>
                <Button variant="ghost" size="sm">المشاريع</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestorsPage;
