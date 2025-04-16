import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { 
  Calendar, Users, Briefcase, BarChart, PieChart, ChevronLeft, 
  Banknote, TrendingUp, TrendingDown, FileText, ArrowUp, ArrowDown, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock project data - would be fetched from a real API in production
const projectsData = [
  {
    id: 1,
    name: "برج الأعمال المركزي",
    location: "الرياض - حي العليا",
    description: "برج مكتبي فاخر يتكون من 30 طابقاً في قلب الحي التجاري بالرياض، يوفر مساحات مكتبية حديثة ومرافق متكاملة.",
    totalInvestment: 15000000,
    returnRate: 12.5,
    trending: "up",
    progress: 65,
    investors: 8,
    status: "قيد التنفيذ",
    startDate: "2023-06-15",
    endDate: "2025-12-30",
    manager: "عبدالله محمد",
    totalArea: "8,500 متر مربع",
    expectedROI: "15.2%",
    riskLevel: "متوسط",
    sector: "عقارات تجارية",
    projectImages: [], // Would contain image URLs in a real application
    milestones: [
      { title: "شراء الأرض", completionDate: "2023-06-15", status: "مكتمل", progress: 100 },
      { title: "الحصول على التراخيص", completionDate: "2023-08-20", status: "مكتمل", progress: 100 },
      { title: "أعمال الحفر والأساسات", completionDate: "2023-11-30", status: "مكتمل", progress: 100 },
      { title: "البناء الهيكلي", completionDate: "2024-06-30", status: "قيد التنفيذ", progress: 65 },
      { title: "التشطيبات الداخلية", completionDate: "2025-04-15", status: "مخطط", progress: 0 },
      { title: "تركيب الأنظمة والمرافق", completionDate: "2025-08-20", status: "مخطط", progress: 0 },
      { title: "التسليم النهائي", completionDate: "2025-12-30", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "محمد أحمد", investmentAmount: 2500000, joinDate: "2023-05-01", share: "16.7%" },
      { id: 2, name: "سارة خالد", investmentAmount: 3000000, joinDate: "2023-05-05", share: "20%" },
      { id: 3, name: "عبدالله العتيبي", investmentAmount: 1800000, joinDate: "2023-05-10", share: "12%" },
      { id: 4, name: "نورة سعد", investmentAmount: 1500000, joinDate: "2023-05-15", share: "10%" },
      { id: 5, name: "فهد الشمري", investmentAmount: 2200000, joinDate: "2023-05-20", share: "14.7%" },
      { id: 6, name: "لمى الحربي", investmentAmount: 1500000, joinDate: "2023-05-22", share: "10%" },
      { id: 7, name: "خالد الدوسري", investmentAmount: 1200000, joinDate: "2023-05-25", share: "8%" },
      { id: 8, name: "عمر القحطاني", investmentAmount: 1300000, joinDate: "2023-05-28", share: "8.6%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q1 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2024", amount: 250000, status: "أول عائد" },
        { quarter: "Q4 2024", amount: 480000, status: "نشط" },
        { quarter: "Q1 2025", amount: 520000, status: "نشط" },
      ],
      expenses: [
        { category: "تكلفة الأرض", amount: 4200000, percentage: 28 },
        { category: "تكاليف البناء", amount: 7800000, percentage: 52 },
        { category: "التصاميم والاستشارات", amount: 900000, percentage: 6 },
        { category: "التراخيص والرسوم", amount: 600000, percentage: 4 },
        { category: "المرافق والأنظمة", amount: 1200000, percentage: 8 },
        { category: "أخرى", amount: 300000, percentage: 2 }
      ],
      monthlyReports: [
        { month: "يناير 2024", completionAdded: "5%", expensesAmount: 750000, notes: "تأخير بسيط بسبب الأحوال الجوية" },
        { month: "فبراير 2024", completionAdded: "4%", expensesAmount: 620000, notes: "تم استئناف العمل بشكل طبيعي" },
        { month: "مارس 2024", completionAdded: "6%", expensesAmount: 800000, notes: "وتيرة العمل تتقدم بشكل جيد" },
        { month: "أبريل 2024", completionAdded: "5%", expensesAmount: 730000, notes: "تم الانتهاء من الطابق العاشر" }
      ]
    },
    riskAnalysis: {
      marketRisk: { level: "منخفض", description: "موقع متميز في منطقة ذات طلب مرتفع" },
      operationalRisk: { level: "متوسط", description: "احتمالية تأخير في مواد البناء" },
      financialRisk: { level: "منخفض", description: "تمويل مستقر وتكاليف محددة مسبقاً" },
      regulatoryRisk: { level: "منخفض", description: "جميع التصاريح تم الحصول عليها" }
    },
    updates: [
      { date: "2024-04-10", title: "اكتمال البناء الهيكلي للطابق 15", description: "تم الانتهاء من صب الخرسانة للطابق 15 حسب الجدول الزمني المخطط له." },
      { date: "2024-03-22", title: "توقيع عقد مع شركة التشطيبات", description: "تم التعاقد مع شركة متخصصة للبدء في أعمال التشطيبات بمجرد اكتمال الهيكل." },
      { date: "2024-02-15", title: "زيارة المستثمرين للموقع", description: "تمت زيارة جماعية للمستثمرين لموقع المشروع للاطلاع على سير العمل." },
      { date: "2024-01-05", title: "الحصول على تمويل إضافي", description: "تم الحصول على دفعة التمويل الثالثة من البنك حسب الاتفاق." }
    ]
  },
  {
    id: 2,
    name: "مجمع الواحة السكني",
    location: "جدة - حي الشاطئ",
    description: "مجمع سكني فاخر يضم 120 وحدة سكنية متنوعة مع مرافق ترفيهية متكاملة على الواجهة البحرية في جدة.",
    totalInvestment: 8500000,
    returnRate: 9.8,
    trending: "up",
    progress: 40,
    investors: 6,
    status: "قيد التنفيذ",
    startDate: "2023-09-01",
    endDate: "2025-03-15",
    manager: "خالد العنزي",
    totalArea: "12,000 متر مربع",
    expectedROI: "11.3%",
    riskLevel: "منخفض",
    sector: "عقارات سكنية",
    // ...similar data structure as for project 1
  },
  // ...other projects data would follow the same pattern
];

const InvestmentProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  // Find the project by ID, default to first one if not found
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];
  
  // Format currency to Saudi Riyal
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString() + " ريال";
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Back button and header */}
        <div className="flex items-center justify-between">
          <Link to="/investments/projects">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              <span>العودة للمشاريع</span>
            </Button>
          </Link>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>تصدير البيانات</span>
          </Button>
        </div>
        
        {/* Project header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <Badge variant={project.status === "قيد التنفيذ" ? "success" : "info"}>
              {project.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        {/* Project overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">إجمالي الاستثمار</p>
                  <p className="text-2xl font-bold">{formatCurrency(project.totalInvestment)}</p>
                </div>
                <Briefcase className="h-8 w-8 text-hrm-blue" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">معدل العائد</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold">{project.returnRate}%</p>
                    {project.trending === "up" ? (
                      <ArrowUp className="w-5 h-5 text-green-500 mr-1" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-red-500 mr-1" />
                    )}
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">نسبة الإنجاز</p>
                  <p className="text-2xl font-bold">{project.progress}%</p>
                </div>
                <BarChart className="h-8 w-8 text-hrm-blue" />
              </div>
              <Progress value={project.progress} className="h-2 mt-4" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">عدد المستثمرين</p>
                  <p className="text-2xl font-bold">{project.investors}</p>
                </div>
                <Users className="h-8 w-8 text-hrm-blue" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Project details tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>نظرة عامة</span>
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>المستثمرون</span>
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <Banknote className="w-4 h-4" />
              <span>البيانات المالية</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <PieChart className="w-4 h-4" />
              <span>تحليل المشروع</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>معلومات المشروع</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">الموقع</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">مدير المشروع</p>
                        <p className="font-medium">{project.manager}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">القطاع</p>
                        <p className="font-medium">{project.sector}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">تاريخ البدء</p>
                        <p className="font-medium">{project.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">تاريخ الانتهاء المتوقع</p>
                        <p className="font-medium">{project.endDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">المساحة الإجمالية</p>
                        <p className="font-medium">{project.totalArea}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">العائد المتوقع</p>
                        <p className="font-medium">{project.expectedROI}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">مستوى المخاطرة</p>
                        <p className="font-medium">{project.riskLevel}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>تحليل المخاطر</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">مخاطر السوق</p>
                        <Badge variant={project.riskAnalysis.marketRisk.level === "منخفض" ? "success" : 
                                        project.riskAnalysis.marketRisk.level === "متوسط" ? "warning" : "destructive"}>
                          {project.riskAnalysis.marketRisk.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.riskAnalysis.marketRisk.description}</p>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">مخاطر التشغيل</p>
                        <Badge variant={project.riskAnalysis.operationalRisk.level === "منخفض" ? "success" : 
                                        project.riskAnalysis.operationalRisk.level === "متوسط" ? "warning" : "destructive"}>
                          {project.riskAnalysis.operationalRisk.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.riskAnalysis.operationalRisk.description}</p>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">مخاطر مالية</p>
                        <Badge variant={project.riskAnalysis.financialRisk.level === "منخفض" ? "success" : 
                                        project.riskAnalysis.financialRisk.level === "متوسط" ? "warning" : "destructive"}>
                          {project.riskAnalysis.financialRisk.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.riskAnalysis.financialRisk.description}</p>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">مخاطر تنظيمية</p>
                        <Badge variant={project.riskAnalysis.regulatoryRisk.level === "منخفض" ? "success" : 
                                       project.riskAnalysis.regulatoryRisk.level === "متوسط" ? "warning" : "destructive"}>
                          {project.riskAnalysis.regulatoryRisk.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.riskAnalysis.regulatoryRisk.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>مراحل المشروع</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{milestone.title}</p>
                          <p className="text-sm text-muted-foreground">تاريخ الإتمام: {milestone.completionDate}</p>
                        </div>
                        <Badge variant={
                          milestone.status === "مكتمل" ? "success" : 
                          milestone.status === "قيد التنفيذ" ? "info" : 
                          "outline"
                        }>
                          {milestone.status}
                        </Badge>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>نسبة الإنجاز:</span>
                          <span>{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>آخر التحديثات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.updates.map((update, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <p className="font-medium">{update.title}</p>
                        <p className="text-sm text-muted-foreground">{update.date}</p>
                      </div>
                      <p className="text-sm mt-1">{update.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Investors Tab */}
          <TabsContent value="investors" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>المستثمرون في المشروع</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>إضافة مستثمر</span>
                </Button>
              </CardHeader>
              <CardContent>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead>اسم المستثمر</TableHead>
                      <TableHead>قيمة الاستثمار</TableHead>
                      <TableHead>النسبة من المشروع</TableHead>
                      <TableHead>تاريخ الانضمام</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.investorsDetails.map((investor) => (
                      <TableRow key={investor.id}>
                        <TableCell className="font-medium">{investor.name}</TableCell>
                        <TableCell>{formatCurrency(investor.investmentAmount)}</TableCell>
                        <TableCell>{investor.share}</TableCell>
                        <TableCell>{investor.joinDate}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">عرض التفاصيل</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between bg-muted/50 border-t p-3">
                <div className="text-sm text-muted-foreground">إجمالي المستثمرين: {project.investorsDetails.length}</div>
                <div className="font-medium">إجمالي الاستثمارات: {formatCurrency(project.totalInvestment)}</div>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>توزيع الحصص</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>توزيع الأرباح المتوقعة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Financial Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>العوائد ربع السنوية</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table className="border">
                    <TableHeader>
                      <TableRow>
                        <TableHead>الفترة</TableHead>
                        <TableHead>العائد</TableHead>
                        <TableHead>الحالة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {project.financialData.quarterlyReturns.map((quarter, index) => (
                        <TableRow key={index}>
                          <TableCell>{quarter.quarter}</TableCell>
                          <TableCell>
                            {quarter.amount > 0 ? formatCurrency(quarter.amount) : "-"}
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              quarter.status === "نشط" ? "success" : 
                              quarter.status === "أول عائد" ? "info" : 
                              "outline"
                            }>
                              {quarter.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>توزيع النفقات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.financialData.expenses.map((expense, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{expense.category}</span>
                          <span className="text-sm font-medium">{formatCurrency(expense.amount)}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-hrm-blue" 
                            style={{ width: `${expense.percentage}%` }} 
                          />
                        </div>
                        <div className="flex justify-end mt-1">
                          <span className="text-xs text-muted-foreground">{expense.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>التقارير الشهرية</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead>الشهر</TableHead>
                      <TableHead>نسبة الإنجاز المضافة</TableHead>
                      <TableHead>المصروفات</TableHead>
                      <TableHead>ملاحظات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.financialData.monthlyReports.map((report, index) => (
                      <TableRow key={index}>
                        <TableCell>{report.month}</TableCell>
                        <TableCell>{report.completionAdded}</TableCell>
                        <TableCell>{formatCurrency(report.expensesAmount)}</TableCell>
                        <TableCell>{report.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="bg-muted/50 p-3 flex justify-end">
                <Button variant="outline" size="sm">عرض جميع التقارير</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>تحليل العائد المتوقع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>مقارنة بالمشاريع المماثلة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>مؤشرات الأداء الرئيسية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">معدل العائد الداخلي</p>
                    <p className="text-xl font-bold">14.2%</p>
                    <div className="flex items-center mt-1 text-green-600 text-sm">
                      <ArrowUp className="w-4 h-4 mr-1" />
                      <span>أعلى من المتوقع بنسبة 1.5%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">فترة الاسترداد</p>
                    <p className="text-xl font-bold">5.8 سنوات</p>
                    <div className="flex items-center mt-1 text-green-600 text-sm">
                      <ArrowDown className="w-4 h-4 mr-1" />
                      <span>أقل من المتوقع بـ 0.7 سنة</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">صافي القيمة الحالية</p>
                    <p className="text-xl font-bold">{formatCurrency(3200000)}</p>
                    <div className="flex items-center mt-1 text-green-600 text-sm">
                      <ArrowUp className="w-4 h-4 mr-1" />
                      <span>إيجابية ومرتفعة</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">نسبة الربحية</p>
                    <p className="text-xl font-bold">1.28</p>
                    <div className="flex items-center mt-1 text-amber-600 text-sm">
                      <span>ضمن النطاق المتوقع</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>تحليل المخاطر والفرص</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">البند</TableHead>
                      <TableHead>التأثير</TableHead>
                      <TableHead>الاحتمالية</TableHead>
                      <TableHead>استراتيجية الاستجابة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">تغير أسعار مواد البناء</TableCell>
                      <TableCell>
                        <Badge variant="warning">متوسط</Badge>
                      </TableCell>
                      <TableCell>مرتفعة</TableCell>
                      <TableCell>التعاقد المسبق وشراء المواد الرئيسية</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">تأخر في الجدول الزمني</TableCell>
                      <TableCell>
                        <Badge variant="warning">متوسط</Badge>
                      </TableCell>
                      <TableCell>متوسطة</TableCell>
                      <TableCell>تخصيص موارد إضافية وخطة طوارئ</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ارتفاع الطلب في المنطقة</TableCell>
                      <TableCell>
                        <Badge variant="success">إيجابي</Badge>
                      </TableCell>
                      <TableCell>مرتفعة</TableCell>
                      <TableCell>زيادة الأسعار والعائد المتوقع</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">تغير اللوائح التنظيمية</TableCell>
                      <TableCell>
                        <Badge variant="destructive">مرتفع</Badge>
                      </TableCell>
                      <TableCell>منخفضة</TableCell>
                      <TableCell>متابعة مستمرة للتحديثات التنظيمية</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentProjectDetails;
