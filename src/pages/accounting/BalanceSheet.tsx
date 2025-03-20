
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PieChart, Download, Printer, Calendar } from "lucide-react";

const BalanceSheet = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Date Selection */}
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">الميزانية العمومية</h3>
                <p className="text-sm text-gray-500">تاريخ التقرير: ٣١ ديسمبر ٢٠٢٣</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>تغيير التاريخ</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  <span>طباعة</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>تصدير PDF</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي الأصول</p>
                  <h3 className="text-2xl font-bold mt-1">٧٥٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <PieChart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي الخصوم</p>
                  <h3 className="text-2xl font-bold mt-1">٣٥٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <PieChart className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">صافي حقوق الملكية</p>
                  <h3 className="text-2xl font-bold mt-1">٤٠٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <PieChart className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Balance Sheet Report */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Assets */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b px-6 py-4">
              <CardTitle className="text-xl font-bold text-blue-700">الأصول</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Current Assets */}
                <div>
                  <h3 className="font-medium text-lg mb-3">الأصول المتداولة</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">النقدية</span>
                      <span className="font-medium">١٢٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">الذمم المدينة</span>
                      <span className="font-medium">٨٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">المخزون</span>
                      <span className="font-medium">١٥٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">مدفوعات مقدمة</span>
                      <span className="font-medium">٣٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-2 font-medium">
                      <span>إجمالي الأصول المتداولة</span>
                      <span className="text-blue-700">٣٨٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
                
                {/* Fixed Assets */}
                <div className="mt-6">
                  <h3 className="font-medium text-lg mb-3">الأصول الثابتة</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">أراضي ومباني</span>
                      <span className="font-medium">٢٥٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">معدات وأجهزة</span>
                      <span className="font-medium">١٥٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">أثاث ومفروشات</span>
                      <span className="font-medium">٧٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">مجمع الإهلاك</span>
                      <span className="font-medium text-red-600">(١٠٠,٠٠٠) ريال</span>
                    </div>
                    <div className="flex justify-between py-2 font-medium">
                      <span>صافي الأصول الثابتة</span>
                      <span className="text-blue-700">٣٧٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
                
                {/* Total Assets */}
                <div className="py-3 border-t-2 border-blue-700 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>إجمالي الأصول</span>
                    <span className="text-blue-700">٧٥٠,٠٠٠ ريال</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Liabilities & Equity */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b px-6 py-4">
              <CardTitle className="text-xl font-bold text-red-700">الخصوم وحقوق الملكية</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Current Liabilities */}
                <div>
                  <h3 className="font-medium text-lg mb-3">الخصوم المتداولة</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">الذمم الدائنة</span>
                      <span className="font-medium">١٠٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">قروض قصيرة الأجل</span>
                      <span className="font-medium">٥٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">مصروفات مستحقة</span>
                      <span className="font-medium">٢٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-2 font-medium">
                      <span>إجمالي الخصوم المتداولة</span>
                      <span className="text-red-700">١٧٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
                
                {/* Long Term Liabilities */}
                <div className="mt-6">
                  <h3 className="font-medium text-lg mb-3">الخصوم طويلة الأجل</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">قروض طويلة الأجل</span>
                      <span className="font-medium">١٨٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-2 font-medium">
                      <span>إجمالي الخصوم طويلة الأجل</span>
                      <span className="text-red-700">١٨٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
                
                {/* Total Liabilities */}
                <div className="py-2">
                  <div className="flex justify-between font-bold">
                    <span>إجمالي الخصوم</span>
                    <span className="text-red-700">٣٥٠,٠٠٠ ريال</span>
                  </div>
                </div>
                
                {/* Equity */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-lg mb-3">حقوق الملكية</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">رأس المال</span>
                      <span className="font-medium">٣٠٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                      <span className="text-gray-600">الأرباح المحتجزة</span>
                      <span className="font-medium">١٠٠,٠٠٠ ريال</span>
                    </div>
                    <div className="flex justify-between py-2 font-medium">
                      <span>إجمالي حقوق الملكية</span>
                      <span className="text-green-700">٤٠٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
                
                {/* Total Liabilities & Equity */}
                <div className="py-3 border-t-2 border-red-700 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>إجمالي الخصوم وحقوق الملكية</span>
                    <span className="text-red-700">٧٥٠,٠٠٠ ريال</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BalanceSheet;
