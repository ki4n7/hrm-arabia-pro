
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, ChevronDown, Search, Filter, Download } from "lucide-react";

const GeneralLedger = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">عدد الحسابات</p>
                  <h3 className="text-2xl font-bold mt-1">٨٧</h3>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي المدين</p>
                  <h3 className="text-2xl font-bold mt-1">٣٥٦,٧٠٠ ريال</h3>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">إجمالي الدائن</p>
                  <h3 className="text-2xl font-bold mt-1">٣٥٦,٧٠٠ ريال</h3>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* General Ledger */}
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b px-6 py-4">
            <CardTitle className="text-xl font-bold">دفتر الأستاذ العام</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> تصدير
              </Button>
              <Button className="bg-hrm-blue hover:bg-hrm-blue/90 text-white rounded-lg">
                عرض التقرير
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  className="pr-10 w-full" 
                  placeholder="بحث عن حساب..." 
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> تصفية
              </Button>
            </div>
            
            {/* Accounts Tree */}
            <div className="space-y-4">
              {/* Account Group 1 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
                    <h3 className="font-medium">الأصول (١-١٠٠٠)</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-500">المدين:</span>
                      <span className="font-medium mr-1">٢٥٠,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الدائن:</span>
                      <span className="font-medium mr-1">٥٠,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الرصيد:</span>
                      <span className="font-medium mr-1">٢٠٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  {/* Subaccount */}
                  <div className="hover:bg-gray-50 rounded px-4 py-2 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-5 mr-2"></div>
                        <span className="text-sm">النقدية (١-١١٠٠)</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="text-gray-500">المدين:</span>
                          <span className="font-medium mr-1">١٥٠,٠٠٠ ريال</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">الدائن:</span>
                          <span className="font-medium mr-1">٣٠,٠٠٠ ريال</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">الرصيد:</span>
                          <span className="font-medium mr-1">١٢٠,٠٠٠ ريال</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subaccount */}
                  <div className="hover:bg-gray-50 rounded px-4 py-2 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-5 mr-2"></div>
                        <span className="text-sm">المخزون (١-١٢٠٠)</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span className="text-gray-500">المدين:</span>
                          <span className="font-medium mr-1">١٠٠,٠٠٠ ريال</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">الدائن:</span>
                          <span className="font-medium mr-1">٢٠,٠٠٠ ريال</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">الرصيد:</span>
                          <span className="font-medium mr-1">٨٠,٠٠٠ ريال</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Account Group 2 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
                    <h3 className="font-medium">الخصوم (٢-٢٠٠٠)</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-500">المدين:</span>
                      <span className="font-medium mr-1">٢٠,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الدائن:</span>
                      <span className="font-medium mr-1">١٢٠,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الرصيد:</span>
                      <span className="font-medium mr-1">١٠٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Account Group 3 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
                    <h3 className="font-medium">حقوق الملكية (٣-٣٠٠٠)</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-500">المدين:</span>
                      <span className="font-medium mr-1">١٠,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الدائن:</span>
                      <span className="font-medium mr-1">١١٠,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الرصيد:</span>
                      <span className="font-medium mr-1">١٠٠,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Account Group 4 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
                    <h3 className="font-medium">الإيرادات (٤-٤٠٠٠)</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-500">المدين:</span>
                      <span className="font-medium mr-1">٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الدائن:</span>
                      <span className="font-medium mr-1">٧٥,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الرصيد:</span>
                      <span className="font-medium mr-1">٧٥,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Account Group 5 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                    <ChevronDown className="h-5 w-5 text-gray-500 ml-2" />
                    <h3 className="font-medium">المصروفات (٥-٥٠٠٠)</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-500">المدين:</span>
                      <span className="font-medium mr-1">٧٥,٠٠٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الدائن:</span>
                      <span className="font-medium mr-1">٠ ريال</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">الرصيد:</span>
                      <span className="font-medium mr-1">٧٥,٠٠٠ ريال</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default GeneralLedger;
