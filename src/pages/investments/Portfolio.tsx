
import React from "react";
import { Wallet, PieChart, Download, RefreshCw, TrendingUp, TrendingDown, ChevronDown } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableCell, TableRow, TableHeader, TableHead, Table, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const PortfolioPage = () => {
  // Demo data for investment portfolio
  const portfolioItems = [
    {
      id: 1,
      projectName: "برج الأعمال المركزي",
      investedAmount: 500000,
      currentValue: 550000,
      ownership: 3.33,
      returnRate: 12.5,
      trend: "up",
      sector: "عقاري"
    },
    {
      id: 2,
      projectName: "مجمع الواحة السكني",
      investedAmount: 350000,
      currentValue: 372000,
      ownership: 4.12,
      returnRate: 9.8,
      trend: "up",
      sector: "عقاري"
    },
    {
      id: 3,
      projectName: "مركز التسوق الجديد",
      investedAmount: 800000,
      currentValue: 860000,
      ownership: 3.64,
      returnRate: 15.2,
      trend: "up",
      sector: "تجاري"
    },
    {
      id: 4,
      projectName: "مشروع الطاقة الشمسية",
      investedAmount: 1200000,
      currentValue: 1140000,
      ownership: 3.43,
      returnRate: 8.5,
      trend: "down",
      sector: "طاقة"
    },
    {
      id: 5,
      projectName: "مجمع المكاتب الذكية",
      investedAmount: 600000,
      currentValue: 654000,
      ownership: 3.33,
      returnRate: 11.3,
      trend: "up",
      sector: "عقاري"
    }
  ];

  // Calculate portfolio stats
  const totalInvested = portfolioItems.reduce((sum, item) => sum + item.investedAmount, 0);
  const totalCurrentValue = portfolioItems.reduce((sum, item) => sum + item.currentValue, 0);
  const totalGain = totalCurrentValue - totalInvested;
  const totalGainPercentage = (totalGain / totalInvested) * 100;

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">المحفظة الاستثمارية</h1>
            <p className="text-muted-foreground">نظرة عامة على استثماراتك الحالية</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <RefreshCw className="w-4 h-4" />
              <span>تحديث البيانات</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>تصدير التقرير</span>
            </Button>
          </div>
        </div>

        {/* Portfolio summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <Wallet className="w-4 h-4 ml-2" />
                إجمالي الاستثمارات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalInvested.toLocaleString()} ريال</p>
              <p className="text-sm text-muted-foreground">موزعة على {portfolioItems.length} مشاريع</p>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <PieChart className="w-4 h-4 ml-2" />
                القيمة الحالية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalCurrentValue.toLocaleString()} ريال</p>
              <div className="flex items-center text-sm">
                {totalGain >= 0 ? (
                  <>
                    <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                    <span className="text-green-600">+{totalGain.toLocaleString()} ريال</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="w-4 h-4 text-red-500 ml-1" />
                    <span className="text-red-600">{totalGain.toLocaleString()} ريال</span>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <TrendingUp className="w-4 h-4 ml-2" />
                الربح الإجمالي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {totalGainPercentage.toFixed(2)}%
              </p>
              <Badge 
                variant={totalGainPercentage >= 0 ? "success" : "destructive"}
                className="mt-1"
              >
                {totalGainPercentage >= 0 ? "نمو" : "انخفاض"}
              </Badge>
            </CardContent>
          </Card>
          
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center">
                <PieChart className="w-4 h-4 ml-2" />
                توزيع القطاعات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="border-blue-300 bg-blue-50">عقاري 60%</Badge>
                <Badge variant="outline" className="border-green-300 bg-green-50">طاقة 25%</Badge>
                <Badge variant="outline" className="border-purple-300 bg-purple-50">تجاري 15%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio details table */}
        <Card className="border">
          <div className="p-4 border-b flex flex-col md:flex-row justify-between">
            <h3 className="font-medium">تفاصيل المحفظة</h3>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button variant="outline" size="sm">الجميع</Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <span>القطاع</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <span>الأداء</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>اسم المشروع</TableHead>
                <TableHead>القطاع</TableHead>
                <TableHead>المبلغ المستثمر</TableHead>
                <TableHead>القيمة الحالية</TableHead>
                <TableHead>نسبة التملك</TableHead>
                <TableHead>نسبة العائد</TableHead>
                <TableHead>الأداء</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {portfolioItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.projectName}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      item.sector === "عقاري" ? "border-blue-300 bg-blue-50" :
                      item.sector === "طاقة" ? "border-green-300 bg-green-50" :
                      "border-purple-300 bg-purple-50"
                    }>
                      {item.sector}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.investedAmount.toLocaleString()} ريال</TableCell>
                  <TableCell>{item.currentValue.toLocaleString()} ريال</TableCell>
                  <TableCell>{item.ownership}%</TableCell>
                  <TableCell>{item.returnRate}%</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {item.trend === "up" ? (
                        <>
                          <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                          <span className="text-green-600">
                            +{((item.currentValue - item.investedAmount) / item.investedAmount * 100).toFixed(2)}%
                          </span>
                        </>
                      ) : (
                        <>
                          <TrendingDown className="w-4 h-4 text-red-500 ml-1" />
                          <span className="text-red-600">
                            {((item.currentValue - item.investedAmount) / item.investedAmount * 100).toFixed(2)}%
                          </span>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        {/* Chart placeholder - to be implemented with recharts */}
        <Card className="border p-6">
          <CardTitle className="mb-4">تحليل أداء المحفظة</CardTitle>
          <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PortfolioPage;
