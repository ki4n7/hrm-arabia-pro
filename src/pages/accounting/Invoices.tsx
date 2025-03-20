
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File, Plus, Search, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Invoices = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي الفواتير</p>
                  <h3 className="text-2xl font-bold mt-1">١٨٥</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <File className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">فواتير المبيعات</p>
                  <h3 className="text-2xl font-bold mt-1">١٠٥</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <File className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">فواتير المشتريات</p>
                  <h3 className="text-2xl font-bold mt-1">٨٠</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <File className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">القيمة الإجمالية</p>
                  <h3 className="text-2xl font-bold mt-1">٤٢٥,٧٥٠ ريال</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <File className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Invoices List */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">الفواتير</CardTitle>
            <div className="flex gap-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                <Plus className="h-4 w-4 mr-1" /> فاتورة مبيعات
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                <Plus className="h-4 w-4 mr-1" /> فاتورة مشتريات
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <div className="border-b px-6 py-2">
                <TabsList className="grid w-full sm:w-auto sm:inline-grid grid-cols-3 sm:grid-cols-3 h-auto bg-transparent gap-2">
                  <TabsTrigger value="all" className="data-[state=active]:bg-hrm-blue data-[state=active]:text-white rounded-lg py-2">
                    جميع الفواتير
                  </TabsTrigger>
                  <TabsTrigger value="sales" className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg py-2">
                    مبيعات
                  </TabsTrigger>
                  <TabsTrigger value="purchases" className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg py-2">
                    مشتريات
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* All Invoices Tab */}
              <TabsContent value="all" className="p-6 mt-0">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      className="pr-10 w-full" 
                      placeholder="بحث عن فاتورة..." 
                    />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" /> تصفية
                  </Button>
                </div>
                
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">رقم الفاتورة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">التاريخ</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">النوع</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">العميل/المورد</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الضريبة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الإجمالي</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الحالة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <tr key={item} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-700">
                            {item % 2 === 0 ? 'INV-' : 'BILL-'}{2023100 + item}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-700">١٥ مايو ٢٠٢٣</td>
                          <td className="py-3 px-4 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item % 2 === 0 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {item % 2 === 0 ? 'مبيعات' : 'مشتريات'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-700">
                            {item % 2 === 0 ? 'شركة الأفق' : 'شركة المستقبل'}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-700">{item * 150} ريال</td>
                          <td className="py-3 px-4 text-sm text-gray-700">{item * 1000 + 500} ريال</td>
                          <td className="py-3 px-4 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item % 3 === 0 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {item % 3 === 0 ? 'غير مدفوعة' : 'مدفوعة'}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="flex justify-between items-center mt-6">
                  <p className="text-sm text-gray-500">عرض ١-٥ من أصل ١٨٥ فاتورة</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>السابق</Button>
                    <Button variant="outline" size="sm" className="bg-hrm-blue text-white">١</Button>
                    <Button variant="outline" size="sm">٢</Button>
                    <Button variant="outline" size="sm">٣</Button>
                    <Button variant="outline" size="sm">التالي</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Sales Invoices Tab */}
              <TabsContent value="sales" className="p-6 mt-0">
                <div className="flex flex-col items-center justify-center py-12">
                  <File className="h-16 w-16 text-green-600 mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">فواتير المبيعات</h3>
                  <p className="text-gray-500 mb-6">يمكنك إدارة فواتير المبيعات وإنشاء فواتير جديدة</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                    <Plus className="h-4 w-4 mr-1" /> إنشاء فاتورة مبيعات جديدة
                  </Button>
                </div>
              </TabsContent>
              
              {/* Purchase Invoices Tab */}
              <TabsContent value="purchases" className="p-6 mt-0">
                <div className="flex flex-col items-center justify-center py-12">
                  <File className="h-16 w-16 text-red-600 mb-4" />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">فواتير المشتريات</h3>
                  <p className="text-gray-500 mb-6">يمكنك إدارة فواتير المشتريات وإنشاء فواتير جديدة</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                    <Plus className="h-4 w-4 mr-1" /> إنشاء فاتورة مشتريات جديدة
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
