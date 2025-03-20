
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Download, Printer, Calendar } from "lucide-react";

const IncomeStatement = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Date Selection */}
        <Card className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">قائمة الدخل</h3>
                <p className="text-sm text-gray-500">للفترة من ١ يناير ٢٠٢٣ إلى ٣١ ديسمبر ٢٠٢٣</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>تغيير الفترة</span>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي الإيرادات</p>
                  <h3 className="text-2xl font-bold mt-1">٥٠٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">تكلفة المبيعات</p>
                  <h3 className="text-2xl font-bold mt-1">٣٠٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-red-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي المصروفات</p>
                  <h3 className="text-2xl font-bold mt-1">١٥٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">صافي الربح</p>
                  <h3 className="text-2xl font-bold mt-1">٥٠,٠٠٠ ريال</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Income Statement */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">تفاصيل قائمة الدخل</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Revenues */}
              <div>
                <h3 className="font-medium text-lg mb-3 text-green-700">الإيرادات</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">إيرادات المبيعات</span>
                    <span className="font-medium">٤٥٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">إيرادات الخدمات</span>
                    <span className="font-medium">٥٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span>إجمالي الإيرادات</span>
                    <span className="text-green-700">٥٠٠,٠٠٠ ريال</span>
                  </div>
                </div>
              </div>
              
              {/* Cost of Sales */}
              <div className="pt-4">
                <h3 className="font-medium text-lg mb-3 text-red-700">تكلفة المبيعات</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">تكلفة البضاعة المباعة</span>
                    <span className="font-medium">٢٥٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">أجور عمال</span>
                    <span className="font-medium">٥٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span>إجمالي تكلفة المبيعات</span>
                    <span className="text-red-700">٣٠٠,٠٠٠ ريال</span>
                  </div>
                </div>
              </div>
              
              {/* Gross Profit */}
              <div className="pt-4 pb-4 border-b-2 border-gray-200">
                <div className="flex justify-between font-bold">
                  <span>مجمل الربح</span>
                  <span className="text-blue-700">٢٠٠,٠٠٠ ريال</span>
                </div>
              </div>
              
              {/* Operating Expenses */}
              <div className="pt-4">
                <h3 className="font-medium text-lg mb-3 text-orange-700">المصروفات التشغيلية</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">رواتب وأجور</span>
                    <span className="font-medium">٨٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">إيجارات</span>
                    <span className="font-medium">٣٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">مصروفات تسويق وإعلان</span>
                    <span className="font-medium">٢٠,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">مصروفات عمومية وإدارية</span>
                    <span className="font-medium">١٥,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">استهلاك وإطفاء</span>
                    <span className="font-medium">٥,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span>إجمالي المصروفات التشغيلية</span>
                    <span className="text-orange-700">١٥٠,٠٠٠ ريال</span>
                  </div>
                </div>
              </div>
              
              {/* Operating Income */}
              <div className="pt-4 pb-4 border-b-2 border-gray-200">
                <div className="flex justify-between font-bold">
                  <span>الدخل التشغيلي</span>
                  <span className="text-blue-700">٥٠,٠٠٠ ريال</span>
                </div>
              </div>
              
              {/* Non-Operating Items */}
              <div className="pt-4">
                <h3 className="font-medium text-lg mb-3">البنود غير التشغيلية</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">إيرادات أخرى</span>
                    <span className="font-medium">٥,٠٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                    <span className="text-gray-600">مصروفات تمويلية</span>
                    <span className="font-medium">(٥,٠٠٠) ريال</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span>صافي البنود غير التشغيلية</span>
                    <span>٠ ريال</span>
                  </div>
                </div>
              </div>
              
              {/* Net Profit Before Tax */}
              <div className="pt-4 pb-4 border-b-2 border-gray-200">
                <div className="flex justify-between font-bold">
                  <span>صافي الربح قبل الضريبة</span>
                  <span className="text-blue-700">٥٠,٠٠٠ ريال</span>
                </div>
              </div>
              
              {/* Tax */}
              <div className="pt-4">
                <div className="flex justify-between py-1 border-b border-dashed border-gray-200">
                  <span className="text-gray-600">ضريبة الدخل</span>
                  <span className="font-medium">(٠) ريال</span>
                </div>
              </div>
              
              {/* Net Profit */}
              <div className="pt-6 pb-2 border-t-2 border-b-2 border-blue-700 mt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>صافي الربح</span>
                  <span className="text-blue-700">٥٠,٠٠٠ ريال</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default IncomeStatement;
