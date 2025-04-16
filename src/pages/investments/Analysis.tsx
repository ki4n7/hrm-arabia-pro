
import React from "react";
import { LineChart, BarChart, PieChart, Download, RefreshCw, Filter, ChevronDown, Calendar } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AnalysisPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">تحليل الاستثمارات</h1>
            <p className="text-muted-foreground">البيانات التحليلية والرسوم البيانية للاستثمارات</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <RefreshCw className="w-4 h-4" />
              <span>تحديث البيانات</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="w-4 h-4" />
              <span>تصفية</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>الفترة</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>تصدير التقرير</span>
            </Button>
          </div>
        </div>

        {/* Analysis tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <PieChart className="w-4 h-4" />
              <span>نظرة عامة</span>
            </TabsTrigger>
            <TabsTrigger value="returns" className="flex items-center gap-2">
              <LineChart className="w-4 h-4" />
              <span>تحليل العوائد</span>
            </TabsTrigger>
            <TabsTrigger value="sectors" className="flex items-center gap-2">
              <BarChart className="w-4 h-4" />
              <span>تحليل القطاعات</span>
            </TabsTrigger>
            <TabsTrigger value="comparisons" className="flex items-center gap-2">
              <LineChart className="w-4 h-4" />
              <span>مقارنات الأداء</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">توزيع الاستثمارات حسب القطاع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">توزيع العوائد عبر الزمن</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">أداء الاستثمارات بمرور الوقت</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="returns">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">معدل العائد الشهري</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة معدلات العائد حسب المشروع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">تحليل العوائد الفصلية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sectors">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">أداء القطاعات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">توزيع الاستثمارات حسب القطاع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة معدلات النمو بين القطاعات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="comparisons">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة الأداء بين المشاريع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة المخاطر والعوائد</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">تحليل الكفاءة الاستثمارية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AnalysisPage;
