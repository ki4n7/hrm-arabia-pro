
import React from "react";
import { Search, Filter, ChevronDown, Calendar, Download, LineChart, PiggyBank, TrendingUp, TrendingDown } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableCell, TableRow, TableHeader, TableHead, Table, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const InvestmentReturnsPage = () => {
  // Demo data for investment returns
  const returns = [
    {
      id: 1,
      projectName: "برج الأعمال المركزي",
      date: "2024-03-15",
      amount: 187500,
      returnRate: 12.5,
      status: "تم التوزيع",
      quarter: "Q1 2024",
      trending: "up"
    },
    {
      id: 2,
      projectName: "مجمع الواحة السكني",
      date: "2024-03-01",
      amount: 83300,
      returnRate: 9.8,
      status: "تم التوزيع",
      quarter: "Q1 2024",
      trending: "up"
    },
    {
      id: 3,
      projectName: "مركز التسوق الجديد",
      date: "2024-04-10",
      amount: 334400,
      returnRate: 15.2,
      status: "قيد المعالجة",
      quarter: "Q2 2024",
      trending: "up"
    },
    {
      id: 4,
      projectName: "مشروع الطاقة الشمسية",
      date: "2024-03-20",
      amount: 297500,
      returnRate: 8.5,
      status: "تم التوزيع",
      quarter: "Q1 2024",
      trending: "down"
    },
    {
      id: 5,
      projectName: "مجمع المكاتب الذكية",
      date: "2024-04-05",
      amount: 203400,
      returnRate: 11.3,
      status: "قيد المعالجة",
      quarter: "Q2 2024",
      trending: "up"
    },
    {
      id: 6,
      projectName: "منتجع سياحي",
      date: "2024-04-15",
      amount: 705600,
      returnRate: 16.8,
      status: "معلق",
      quarter: "Q2 2024",
      trending: "up"
    }
  ];

  // Statistics for cards
  const stats = {
    totalDistributed: 568300,
    pendingDistribution: 1243400,
    averageReturnRate: 12.35,
    totalProjects: 6
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div>
          <h1 className="text-2xl font-bold">الأرباح والعوائد الاستثمارية</h1>
          <p className="text-muted-foreground">إدارة ومتابعة عوائد المشاريع الاستثمارية</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <PiggyBank className="w-4 h-4 ml-2" />
                إجمالي العوائد الموزعة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.totalDistributed.toLocaleString()} ريال</p>
              <Badge variant="success" className="mt-2">تم التوزيع</Badge>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <Calendar className="w-4 h-4 ml-2" />
                عوائد منتظرة التوزيع
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.pendingDistribution.toLocaleString()} ريال</p>
              <Badge variant="warning" className="mt-2">قيد المعالجة</Badge>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <TrendingUp className="w-4 h-4 ml-2" />
                متوسط نسبة العائد
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.averageReturnRate}%</p>
              <Badge variant="info" className="mt-2">معدل سنوي</Badge>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <LineChart className="w-4 h-4 ml-2" />
                عدد المشاريع المدرة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.totalProjects} مشاريع</p>
              <Badge variant="success" className="mt-2">نشطة</Badge>
            </CardContent>
          </Card>
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
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="w-4 h-4" />
              <span>تصفية</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>ربع سنوي</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>تصدير</span>
            </Button>
          </div>
        </div>

        {/* Returns table */}
        <Card className="border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم المشروع</TableHead>
                <TableHead>تاريخ التوزيع</TableHead>
                <TableHead>الربع السنوي</TableHead>
                <TableHead>مبلغ العائد</TableHead>
                <TableHead>نسبة العائد</TableHead>
                <TableHead>الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {returns.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.projectName}</TableCell>
                  <TableCell>{formatDate(item.date)}</TableCell>
                  <TableCell>{item.quarter}</TableCell>
                  <TableCell className="text-right font-semibold">
                    {item.amount.toLocaleString()} ريال
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {item.returnRate}%
                      {item.trending === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        item.status === "تم التوزيع" ? "success" : 
                        item.status === "قيد المعالجة" ? "warning" : "outline"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Chart placeholder - to be implemented with recharts */}
        <Card className="border p-6">
          <CardTitle className="mb-4">تحليل العوائد الاستثمارية</CardTitle>
          <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentReturnsPage;
