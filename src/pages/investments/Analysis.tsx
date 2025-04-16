
import React, { useState } from "react";
import { 
  LineChart as LineChartIcon, 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon, 
  Download, 
  RefreshCw, 
  Filter, 
  ChevronDown, 
  Calendar,
  TrendingUp,
  DollarSign,
  PiggyBank,
  Briefcase,
  GlassWater
} from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

// Mock data for charts
const sectorDistributionData = [
  { name: "عقارات تجارية", value: 35 },
  { name: "عقارات سكنية", value: 25 },
  { name: "صناعي", value: 15 },
  { name: "طاقة", value: 12 },
  { name: "سياحة", value: 8 },
  { name: "تعليم", value: 5 }
];

const returnsOverTimeData = [
  { name: "يناير", العائد: 1200000, التكلفة: 800000 },
  { name: "فبراير", العائد: 1350000, التكلفة: 820000 },
  { name: "مارس", العائد: 1100000, التكلفة: 790000 },
  { name: "أبريل", العائد: 1450000, التكلفة: 850000 },
  { name: "مايو", العائد: 1600000, التكلفة: 880000 },
  { name: "يونيو", العائد: 1750000, التكلفة: 900000 },
  { name: "يوليو", العائد: 1900000, التكلفة: 950000 },
  { name: "أغسطس", العائد: 2100000, التكلفة: 980000 },
  { name: "سبتمبر", العائد: 2300000, التكلفة: 1000000 },
  { name: "أكتوبر", العائد: 2500000, التكلفة: 1050000 },
  { name: "نوفمبر", العائد: 2700000, التكلفة: 1100000 },
  { name: "ديسمبر", العائد: 2900000, التكلفة: 1150000 }
];

const investmentPerformanceData = [
  { name: "برج الأعمال المركزي", سنة_2022: 8.2, سنة_2023: 10.5, سنة_2024: 12.3 },
  { name: "مجمع الواحة السكني", سنة_2022: 7.5, سنة_2023: 9.2, سنة_2024: 9.8 },
  { name: "مركز التسوق الجديد", سنة_2022: 0, سنة_2023: 6.8, سنة_2024: 13.5 },
  { name: "مشروع الطاقة الشمسية", سنة_2022: 0, سنة_2023: 0, سنة_2024: 8.5 },
  { name: "مجمع المكاتب الذكية", سنة_2022: 10.2, سنة_2023: 11.8, سنة_2024: 11.3 },
  { name: "منتجع سياحي", سنة_2022: 0, سنة_2023: 0, سنة_2024: 0 }
];

const monthlyReturnRatesData = [
  { month: "يناير", معدل_العائد: 8.2 },
  { month: "فبراير", معدل_العائد: 8.5 },
  { month: "مارس", معدل_العائد: 8.3 },
  { month: "أبريل", معدل_العائد: 8.7 },
  { month: "مايو", معدل_العائد: 9.1 },
  { month: "يونيو", معدل_العائد: 9.4 },
  { month: "يوليو", معدل_العائد: 9.6 },
  { month: "أغسطس", معدل_العائد: 9.8 },
  { month: "سبتمبر", معدل_العائد: 10.2 },
  { month: "أكتوبر", معدل_العائد: 10.5 },
  { month: "نوفمبر", معدل_العائد: 10.8 },
  { month: "ديسمبر", معدل_العائد: 11.2 }
];

const projectComparisonData = [
  { name: "برج الأعمال المركزي", معدل_العائد: 12.5, المخاطرة: 5, الاستثمار: 15000000 },
  { name: "مجمع الواحة السكني", معدل_العائد: 9.8, المخاطرة: 3, الاستثمار: 8500000 },
  { name: "مركز التسوق الجديد", معدل_العائد: 15.2, المخاطرة: 7, الاستثمار: 22000000 },
  { name: "مشروع الطاقة الشمسية", معدل_العائد: 8.5, المخاطرة: 2, الاستثمار: 35000000 },
  { name: "مجمع المكاتب الذكية", معدل_العائد: 11.3, المخاطرة: 4, الاستثمار: 18000000 },
  { name: "منتجع سياحي", معدل_العائد: 16.8, المخاطرة: 8, الاستثمار: 42000000 }
];

const sectorPerformanceData = [
  { name: "عقارات تجارية", معدل_النمو: 14.2, العائد: 12.5, المخاطرة: 6 },
  { name: "عقارات سكنية", معدل_النمو: 10.5, العائد: 9.8, المخاطرة: 4 },
  { name: "صناعي", معدل_النمو: 8.3, العائد: 7.9, المخاطرة: 5 },
  { name: "طاقة", معدل_النمو: 7.8, العائد: 8.5, المخاطرة: 3 },
  { name: "سياحة", معدل_النمو: 15.6, العائد: 14.2, المخاطرة: 7 },
  { name: "تعليم", معدل_النمو: 6.9, العائد: 7.2, المخاطرة: 2 }
];

const quarterlyReturnsData = [
  { quarter: "الربع الأول 2023", العائد: 2500000 },
  { quarter: "الربع الثاني 2023", العائد: 2750000 },
  { quarter: "الربع الثالث 2023", العائد: 3100000 },
  { quarter: "الربع الرابع 2023", العائد: 3450000 },
  { quarter: "الربع الأول 2024", العائد: 3800000 },
  { quarter: "الربع الثاني 2024", العائد: 4250000 },
  { quarter: "الربع الثالث 2024", العائد: 4600000 },
];

const riskReturnData = [
  { x: 2, y: 7.5, z: 8500000, name: "مشروع 1" },
  { x: 3, y: 9.2, z: 12000000, name: "مشروع 2" },
  { x: 5, y: 12.5, z: 15000000, name: "مشروع 3" },
  { x: 4, y: 10.8, z: 9000000, name: "مشروع 4" },
  { x: 7, y: 15.2, z: 22000000, name: "مشروع 5" },
  { x: 2, y: 8.5, z: 35000000, name: "مشروع 6" },
  { x: 4, y: 11.3, z: 18000000, name: "مشروع 7" },
  { x: 8, y: 16.8, z: 42000000, name: "مشروع 8" },
  { x: 3, y: 9.8, z: 7500000, name: "مشروع 9" },
  { x: 6, y: 13.5, z: 27000000, name: "مشروع 10" },
];

// COLORS for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const AnalysisPage = () => {
  const [period, setPeriod] = useState("سنة");
  
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
            <div className="flex gap-1">
              <Button 
                variant={period === "سنة" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setPeriod("سنة")}
              >
                سنة
              </Button>
              <Button 
                variant={period === "ربع سنوي" ? "default" : "outline"} 
                size="sm"
                onClick={() => setPeriod("ربع سنوي")}
              >
                ربع سنوي
              </Button>
              <Button 
                variant={period === "شهري" ? "default" : "outline"} 
                size="sm"
                onClick={() => setPeriod("شهري")}
              >
                شهري
              </Button>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              <span>تصدير التقرير</span>
            </Button>
          </div>
        </div>

        {/* Analysis stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">إجمالي الاستثمارات</p>
                <p className="text-2xl font-bold">141,500,000 ريال</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  زيادة 12.5% عن العام الماضي
                </p>
              </div>
              <DollarSign className="h-10 w-10 text-hrm-blue opacity-80" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">متوسط العائد</p>
                <p className="text-2xl font-bold">12.35%</p>
                <p className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  زيادة 1.2% عن العام الماضي
                </p>
              </div>
              <PiggyBank className="h-10 w-10 text-green-500 opacity-80" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">عدد المشاريع</p>
                <p className="text-2xl font-bold">6 مشاريع</p>
                <div className="flex mt-1">
                  <Badge variant="success" className="text-[10px] h-4">4 نشطة</Badge>
                  <Badge variant="outline" className="text-[10px] h-4 mr-1">2 تخطيط</Badge>
                </div>
              </div>
              <Briefcase className="h-10 w-10 text-hrm-blue opacity-80" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">مؤشر السيولة</p>
                <p className="text-2xl font-bold">82.5%</p>
                <p className="text-xs text-amber-600 mt-1 flex items-center">
                  <GlassWater className="h-3 w-3 mr-1" />
                  انخفاض 3.1% عن الربع السابق
                </p>
              </div>
              <GlassWater className="h-10 w-10 text-blue-500 opacity-80" />
            </CardContent>
          </Card>
        </div>

        {/* Analysis tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <PieChartIcon className="w-4 h-4" />
              <span>نظرة عامة</span>
            </TabsTrigger>
            <TabsTrigger value="returns" className="flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" />
              <span>تحليل العوائد</span>
            </TabsTrigger>
            <TabsTrigger value="sectors" className="flex items-center gap-2">
              <BarChartIcon className="w-4 h-4" />
              <span>تحليل القطاعات</span>
            </TabsTrigger>
            <TabsTrigger value="comparisons" className="flex items-center gap-2">
              <LineChartIcon className="w-4 h-4" />
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
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sectorDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {sectorDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">توزيع العوائد عبر الزمن</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={returnsOverTimeData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value.toLocaleString()} ريال`} />
                        <Legend />
                        <Line type="monotone" dataKey="العائد" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="التكلفة" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">أداء الاستثمارات بمرور الوقت</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={investmentPerformanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="سنة_2022" fill="#8884d8" />
                        <Bar dataKey="سنة_2023" fill="#82ca9d" />
                        <Bar dataKey="سنة_2024" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
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
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyReturnRatesData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Line type="monotone" dataKey="معدل_العائد" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة معدلات العائد حسب المشروع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={projectComparisonData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value, name) => name === "معدل_العائد" ? `${value}%` : value} />
                        <Legend />
                        <Bar dataKey="معدل_العائد" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">تحليل العوائد الفصلية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={quarterlyReturnsData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value.toLocaleString()} ريال`} />
                        <Legend />
                        <Bar dataKey="العائد" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
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
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={sectorPerformanceData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="العائد" fill="#82ca9d" />
                        <Bar dataKey="المخاطرة" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">توزيع الاستثمارات حسب القطاع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sectorDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {sectorDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة معدلات النمو بين القطاعات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={sectorPerformanceData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="معدل_النمو" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
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
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={projectComparisonData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value, name) => name === "معدل_العائد" ? `${value}%` : value} />
                        <Legend />
                        <Bar dataKey="معدل_العائد" fill="#8884d8" />
                        <Bar dataKey="المخاطرة" fill="#ff8042" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border">
                <CardHeader>
                  <CardTitle className="text-lg">مقارنة المخاطر والعوائد</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                      >
                        <CartesianGrid />
                        <XAxis 
                          type="number" 
                          dataKey="x" 
                          name="مستوى المخاطرة" 
                          unit=""
                        />
                        <YAxis 
                          type="number" 
                          dataKey="y" 
                          name="معدل العائد" 
                          unit="%"
                        />
                        <ZAxis 
                          type="number" 
                          dataKey="z" 
                          range={[60, 400]} 
                          name="حجم الاستثمار" 
                          unit=" ريال"
                        />
                        <Tooltip 
                          cursor={{ strokeDasharray: '3 3' }}
                          formatter={(value, name) => {
                            if (name === "مستوى المخاطرة") return [`${value}/10`, "مستوى المخاطرة"];
                            if (name === "معدل العائد") return [`${value}%`, "معدل العائد"];
                            if (name === "حجم الاستثمار") return [`${value.toLocaleString()} ريال`, "حجم الاستثمار"];
                            return [value, name];
                          }}
                        />
                        <Legend />
                        <Scatter name="المشاريع" data={riskReturnData} fill="#8884d8" />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg">تحليل الكفاءة الاستثمارية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-muted/20 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                      <div className="text-4xl font-bold text-hrm-blue">12.35%</div>
                      <div className="text-lg mt-2">متوسط العائد</div>
                      <div className="text-sm text-muted-foreground mt-1">عبر جميع المشاريع</div>
                      <div className="flex items-center text-green-600 mt-3">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>أعلى من المتوسط السوقي</span>
                      </div>
                    </div>
                    
                    <div className="bg-muted/20 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                      <div className="text-4xl font-bold text-hrm-blue">4.57</div>
                      <div className="text-lg mt-2">مؤشر المخاطرة</div>
                      <div className="text-sm text-muted-foreground mt-1">متوسط درجة المخاطر (من 10)</div>
                      <div className="flex items-center text-amber-600 mt-3">
                        <span>ضمن النطاق المقبول</span>
                      </div>
                    </div>
                    
                    <div className="bg-muted/20 p-6 rounded-lg flex flex-col items-center justify-center text-center">
                      <div className="text-4xl font-bold text-hrm-blue">2.7</div>
                      <div className="text-lg mt-2">معامل شارب</div>
                      <div className="text-sm text-muted-foreground mt-1">قياس العائد المعدل بالمخاطر</div>
                      <div className="flex items-center text-green-600 mt-3">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>أداء استثماري متفوق</span>
                      </div>
                    </div>
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
