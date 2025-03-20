
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Plus, Search, Filter } from "lucide-react";

const JournalEntries = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي القيود</p>
                  <h3 className="text-2xl font-bold mt-1">١٥٨</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">القيود المفتوحة</p>
                  <h3 className="text-2xl font-bold mt-1">٢٤</h3>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">القيود المغلقة</p>
                  <h3 className="text-2xl font-bold mt-1">١٣٤</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Journal Entries List */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">قائمة القيود المحاسبية</CardTitle>
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
              <Plus className="h-4 w-4 mr-1" /> إضافة قيد جديد
            </Button>
          </CardHeader>
          
          <CardContent className="p-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  className="pr-10 w-full" 
                  placeholder="بحث عن قيد..." 
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
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">رقم القيد</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">التاريخ</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الوصف</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">المدين</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الدائن</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-700">JE-{2023100 + item}</td>
                      <td className="py-3 px-4 text-sm text-gray-700">١٥ مايو ٢٠٢٣</td>
                      <td className="py-3 px-4 text-sm text-gray-700">قيد تسجيل مصروفات</td>
                      <td className="py-3 px-4 text-sm text-gray-700">٣,٥٠٠ ريال</td>
                      <td className="py-3 px-4 text-sm text-gray-700">٣,٥٠٠ ريال</td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item % 3 === 0 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {item % 3 === 0 ? 'مفتوح' : 'مغلق'}
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
              <p className="text-sm text-gray-500">عرض ١-٥ من أصل ١٥٨ قيد</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>السابق</Button>
                <Button variant="outline" size="sm" className="bg-hrm-blue text-white">١</Button>
                <Button variant="outline" size="sm">٢</Button>
                <Button variant="outline" size="sm">٣</Button>
                <Button variant="outline" size="sm">التالي</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default JournalEntries;
