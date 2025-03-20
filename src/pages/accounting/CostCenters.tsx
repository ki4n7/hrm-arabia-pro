
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, Plus, Search, Filter, PieChart } from "lucide-react";

const CostCenters = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">عدد مراكز التكلفة</p>
                  <h3 className="text-2xl font-bold mt-1">١٢</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">التكاليف المباشرة</p>
                  <h3 className="text-2xl font-bold mt-1">١٨٥,٠٠٠ ريال</h3>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">التكاليف غير المباشرة</p>
                  <h3 className="text-2xl font-bold mt-1">٧٥,٠٠٠ ريال</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Center Distribution */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">توزيع التكاليف حسب المراكز</CardTitle>
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
              <PieChart className="h-4 w-4 mr-1" /> 
              عرض التقرير
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Admin Department */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3">
                  <h3 className="font-medium">الإدارة</h3>
                </div>
                <div className="p-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          ٦٠,٠٠٠ ريال (٢٣٪)
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "23%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-hrm-blue"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sales Department */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3">
                  <h3 className="font-medium">المبيعات</h3>
                </div>
                <div className="p-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          ٤٥,٠٠٠ ريال (١٧٪)
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "17%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Production Department */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3">
                  <h3 className="font-medium">الإنتاج</h3>
                </div>
                <div className="p-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          ١٠٠,٠٠٠ ريال (٣٨٪)
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "38%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Marketing Department */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3">
                  <h3 className="font-medium">التسويق</h3>
                </div>
                <div className="p-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          ٣٠,٠٠٠ ريال (١٢٪)
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "12%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* IT Department */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3">
                  <h3 className="font-medium">تقنية المعلومات</h3>
                </div>
                <div className="p-4">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          ٢٥,٠٠٠ ريال (١٠٪)
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Centers List */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">مراكز التكلفة</CardTitle>
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
              <Plus className="h-4 w-4 mr-1" /> إضافة مركز تكلفة
            </Button>
          </CardHeader>
          
          <CardContent className="p-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  className="pr-10 w-full" 
                  placeholder="بحث عن مركز تكلفة..." 
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
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الرمز</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">اسم مركز التكلفة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">القسم</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">مسؤول المركز</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">النوع</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">إجمالي التكاليف</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">CC-001</td>
                    <td className="py-3 px-4 text-sm text-gray-700">الإدارة العامة</td>
                    <td className="py-3 px-4 text-sm text-gray-700">إداري</td>
                    <td className="py-3 px-4 text-sm text-gray-700">أحمد محمد</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        غير مباشر
                      </span>
                    </td>
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
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">CC-002</td>
                    <td className="py-3 px-4 text-sm text-gray-700">المبيعات</td>
                    <td className="py-3 px-4 text-sm text-gray-700">تجاري</td>
                    <td className="py-3 px-4 text-sm text-gray-700">سارة عبدالله</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        مباشر
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">٤٥,٠٠٠ ريال</td>
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
                    <td className="py-3 px-4 text-sm text-gray-700">CC-003</td>
                    <td className="py-3 px-4 text-sm text-gray-700">الإنتاج</td>
                    <td className="py-3 px-4 text-sm text-gray-700">صناعي</td>
                    <td className="py-3 px-4 text-sm text-gray-700">خالد عمر</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        مباشر
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">١٠٠,٠٠٠ ريال</td>
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
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CostCenters;
