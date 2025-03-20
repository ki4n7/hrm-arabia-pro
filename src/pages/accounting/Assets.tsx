
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, Plus, Search, Filter, PieChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Assets = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي الأصول</p>
                  <h3 className="text-2xl font-bold mt-1">٥٧٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">مجمع الإهلاك</p>
                  <h3 className="text-2xl font-bold mt-1">١٠٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">صافي القيمة الدفترية</p>
                  <h3 className="text-2xl font-bold mt-1">٤٧٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">مصاريف الصيانة</p>
                  <h3 className="text-2xl font-bold mt-1">٢٥,٠٠٠ ريال</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assets List */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">إدارة الأصول والصيانة والاستهلاك</CardTitle>
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
              <Plus className="h-4 w-4 mr-1" /> إضافة أصل جديد
            </Button>
          </CardHeader>
          
          <CardContent className="p-0">
            <Tabs defaultValue="assets" className="w-full">
              <div className="border-b px-6 py-2">
                <TabsList className="grid w-full sm:w-auto sm:inline-grid grid-cols-3 sm:grid-cols-3 h-auto bg-transparent gap-2">
                  <TabsTrigger value="assets" className="data-[state=active]:bg-hrm-blue data-[state=active]:text-white rounded-lg py-2">
                    الأصول
                  </TabsTrigger>
                  <TabsTrigger value="maintenance" className="data-[state=active]:bg-hrm-blue data-[state=active]:text-white rounded-lg py-2">
                    الصيانة
                  </TabsTrigger>
                  <TabsTrigger value="depreciation" className="data-[state=active]:bg-hrm-blue data-[state=active]:text-white rounded-lg py-2">
                    الاستهلاك
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Assets Tab */}
              <TabsContent value="assets" className="p-6 mt-0">
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      className="pr-10 w-full" 
                      placeholder="بحث عن أصل..." 
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
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">رقم الأصل</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">اسم الأصل</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">التصنيف</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">تاريخ الشراء</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">القيمة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">مجمع الإهلاك</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">صافي القيمة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">FA-001</td>
                        <td className="py-3 px-4 text-sm text-gray-700">مبنى الإدارة</td>
                        <td className="py-3 px-4 text-sm text-gray-700">عقارات</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١ يناير ٢٠١٨</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٣٠٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٤٥,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٢٥٥,٠٠٠ ريال</td>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">FA-002</td>
                        <td className="py-3 px-4 text-sm text-gray-700">سيارات نقل</td>
                        <td className="py-3 px-4 text-sm text-gray-700">وسائل نقل</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٥ مارس ٢٠١٩</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٢٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٣٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٩٠,٠٠٠ ريال</td>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">FA-003</td>
                        <td className="py-3 px-4 text-sm text-gray-700">أجهزة حاسب آلي</td>
                        <td className="py-3 px-4 text-sm text-gray-700">أجهزة إلكترونية</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٠ أغسطس ٢٠٢١</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٨٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٥,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٦٥,٠٠٠ ريال</td>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">FA-004</td>
                        <td className="py-3 px-4 text-sm text-gray-700">أثاث مكتبي</td>
                        <td className="py-3 px-4 text-sm text-gray-700">أثاث ومفروشات</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٥ فبراير ٢٠٢٠</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٧٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٦٠,٠٠٠ ريال</td>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              {/* Maintenance Tab */}
              <TabsContent value="maintenance" className="p-6 mt-0">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      className="pr-10 w-full" 
                      placeholder="بحث عن صيانة..." 
                    />
                  </div>
                  <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
                    <Plus className="h-4 w-4 mr-1" /> تسجيل صيانة جديدة
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">رقم العملية</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الأصل</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">نوع الصيانة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">تاريخ الصيانة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">التكلفة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الحالة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">M-001</td>
                        <td className="py-3 px-4 text-sm text-gray-700">سيارات نقل (FA-002)</td>
                        <td className="py-3 px-4 text-sm text-gray-700">صيانة دورية</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٥ مايو ٢٠٢٣</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٢,٥٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            مكتملة
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
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">M-002</td>
                        <td className="py-3 px-4 text-sm text-gray-700">مبنى الإدارة (FA-001)</td>
                        <td className="py-3 px-4 text-sm text-gray-700">إصلاح تكييف</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٣ يونيو ٢٠٢٣</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٨,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            مكتملة
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
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">M-003</td>
                        <td className="py-3 px-4 text-sm text-gray-700">أجهزة حاسب آلي (FA-003)</td>
                        <td className="py-3 px-4 text-sm text-gray-700">تحديث برامج</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٢٠ يوليو ٢٠٢٣</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٣,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm">
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                            قيد التنفيذ
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
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              {/* Depreciation Tab */}
              <TabsContent value="depreciation" className="p-6 mt-0">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input 
                      className="pr-10 w-full" 
                      placeholder="بحث..." 
                    />
                  </div>
                  <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
                    <PieChart className="h-4 w-4 mr-1" /> تقرير الاستهلاك
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الأصل</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">التكلفة</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">طريقة الإهلاك</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">العمر الإنتاجي</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">معدل الإهلاك</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">قيمة الإهلاك السنوي</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">مجمع الإهلاك</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">صافي القيمة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">مبنى الإدارة</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٣٠٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">القسط الثابت</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٤٠ سنة</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٢.٥٪</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٧,٥٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٤٥,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٢٥٥,٠٠٠ ريال</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">سيارات نقل</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٢٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">القسط الثابت</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٨ سنوات</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٢.٥٪</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٥,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٣٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٩٠,٠٠٠ ريال</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">أجهزة حاسب آلي</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٨٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">القسط المتناقص</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٥ سنوات</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٢٠٪</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٦,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٥,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٦٥,٠٠٠ ريال</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">أثاث مكتبي</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٧٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">القسط الثابت</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٠ سنوات</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٠٪</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٧,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">١٠,٠٠٠ ريال</td>
                        <td className="py-3 px-4 text-sm text-gray-700">٦٠,٠٠٠ ريال</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Assets;
