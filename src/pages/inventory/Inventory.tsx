
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, Download, Upload, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/layouts/DashboardLayout";

const Inventory = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">إدارة المخزون</h1>
            <p className="text-sm text-gray-500">عرض وإدارة المخزون والمستودعات والمنتجات</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 ml-2" />
              تحديث
            </Button>
            <Button variant="default" size="sm">
              <Plus className="h-4 w-4 ml-2" />
              إضافة منتج
            </Button>
          </div>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="products">المنتجات</TabsTrigger>
            <TabsTrigger value="categories">الأصناف</TabsTrigger>
            <TabsTrigger value="warehouses">المستودعات</TabsTrigger>
            <TabsTrigger value="pos">نقاط البيع</TabsTrigger>
            <TabsTrigger value="importExport">الاستيراد والتصدير</TabsTrigger>
          </TabsList>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center w-full max-w-md">
              <Input 
                type="search"
                placeholder="بحث..." 
                className="max-w-xs ml-2" 
              />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 ml-1" />
                تصدير
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 ml-1" />
                استيراد
              </Button>
            </div>
          </div>

          <TabsContent value="products" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle>منتج {i + 1}</CardTitle>
                    <CardDescription>
                      رمز المنتج: PRD-{1000 + i}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">الكمية:</span>
                        <span className="font-medium">{Math.floor(Math.random() * 100) + 10}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">السعر:</span>
                        <span className="font-medium">{Math.floor(Math.random() * 1000) + 100} ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">المستودع:</span>
                        <span className="font-medium">المستودع الرئيسي</span>
                      </div>
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          عرض التفاصيل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['إلكترونيات', 'أثاث', 'مواد غذائية', 'أدوات مكتبية', 'ملابس', 'مواد بناء'].map((category, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                    <CardDescription>
                      عدد المنتجات: {Math.floor(Math.random() * 50) + 5}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      عرض المنتجات
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="warehouses" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['المستودع الرئيسي', 'مستودع الفرع الأول', 'مستودع الفرع الثاني', 'مستودع المواد الخام'].map((warehouse, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{warehouse}</CardTitle>
                    <CardDescription>
                      الموقع: {['الرياض', 'جدة', 'الدمام', 'المدينة المنورة'][i]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">عدد المنتجات:</span>
                        <span className="font-medium">{Math.floor(Math.random() * 1000) + 100}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">السعة:</span>
                        <span className="font-medium">{Math.floor(Math.random() * 10000) + 1000} م²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">نسبة الامتلاء:</span>
                        <span className="font-medium">{Math.floor(Math.random() * 90) + 10}%</span>
                      </div>
                      <div className="pt-2 flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          عرض المخزون
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          إدارة المستودع
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pos" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>نقاط البيع</CardTitle>
                <CardDescription>
                  إدارة نقاط البيع والمبيعات والفواتير
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['نقطة البيع الرئيسية', 'فرع الرياض', 'فرع جدة', 'فرع الدمام', 'فرع المدينة المنورة', 'المتجر الإلكتروني'].map((pos, i) => (
                    <Card key={i} className="border shadow-sm">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{pos}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">المبيعات اليومية:</span>
                            <span className="font-medium">{Math.floor(Math.random() * 50) + 10}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">الإيرادات:</span>
                            <span className="font-medium">{Math.floor(Math.random() * 20000) + 5000} ريال</span>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-2">
                            فتح نقطة البيع
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="importExport" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>عمليات الاستيراد</CardTitle>
                  <CardDescription>
                    إدارة طلبات وشحنات الاستيراد
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 'IMP-1001', source: 'الصين', status: 'قيد الشحن', date: '15/04/2025' },
                      { id: 'IMP-1002', source: 'تركيا', status: 'وصل للجمارك', date: '20/04/2025' },
                      { id: 'IMP-1003', source: 'الهند', status: 'مكتمل', date: '10/04/2025' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{item.id}</div>
                          <div className="text-sm text-muted-foreground">من: {item.source}</div>
                        </div>
                        <div className="text-left">
                          <div className="text-sm">
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              item.status === 'مكتمل' 
                                ? 'bg-green-50 text-green-700' 
                                : item.status === 'قيد الشحن'
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-yellow-50 text-yellow-700'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">تاريخ: {item.date}</div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      عرض كل الشحنات
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>عمليات التصدير</CardTitle>
                  <CardDescription>
                    إدارة طلبات وشحنات التصدير
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 'EXP-2001', destination: 'الإمارات', status: 'جاهز للشحن', date: '18/04/2025' },
                      { id: 'EXP-2002', destination: 'مصر', status: 'مكتمل', date: '12/04/2025' },
                      { id: 'EXP-2003', destination: 'الكويت', status: 'قيد التجهيز', date: '22/04/2025' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{item.id}</div>
                          <div className="text-sm text-muted-foreground">إلى: {item.destination}</div>
                        </div>
                        <div className="text-left">
                          <div className="text-sm">
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              item.status === 'مكتمل' 
                                ? 'bg-green-50 text-green-700' 
                                : item.status === 'جاهز للشحن'
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-yellow-50 text-yellow-700'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">تاريخ: {item.date}</div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      عرض كل الشحنات
                    </Button>
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

export default Inventory;
