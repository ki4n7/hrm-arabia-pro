
import React from "react";
import { FileText, Download, Printer, Mail, Calendar, Filter, ChevronDown } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow, TableHeader, TableHead, Table, TableBody } from "@/components/ui/table";

const ReportsPage = () => {
  // Demo data for reports
  const reports = [
    {
      id: 1,
      title: "تقرير الأداء الربع سنوي",
      description: "ملخص أداء المحفظة الاستثمارية للربع الأول من عام 2024",
      date: "2024-04-01",
      type: "ربع سنوي",
      status: "مكتمل",
      format: "PDF"
    },
    {
      id: 2,
      title: "تقرير توزيعات الأرباح",
      description: "ملخص توزيعات الأرباح للمستثمرين للربع الأول من عام 2024",
      date: "2024-04-05",
      type: "ربع سنوي",
      status: "مكتمل",
      format: "PDF"
    },
    {
      id: 3,
      title: "تحليل أداء المشاريع",
      description: "تحليل مفصل لأداء كل مشروع استثماري خلال الربع الأول",
      date: "2024-04-10",
      type: "ربع سنوي",
      status: "مكتمل",
      format: "PDF"
    },
    {
      id: 4,
      title: "تقرير التدفقات النقدية",
      description: "تحليل التدفقات النقدية الواردة والصادرة من الاستثمارات",
      date: "2024-04-15",
      type: "شهري",
      status: "قيد التحضير",
      format: "EXCEL"
    },
    {
      id: 5,
      title: "تقرير المستثمرين",
      description: "ملخص شامل لجميع المستثمرين وحصصهم في المشاريع المختلفة",
      date: "2024-03-30",
      type: "ربع سنوي",
      status: "مكتمل",
      format: "PDF"
    },
    {
      id: 6,
      title: "تقرير مؤشرات الأداء الرئيسية",
      description: "تحليل لمؤشرات الأداء الرئيسية للمحفظة الاستثمارية",
      date: "2024-04-20",
      type: "شهري",
      status: "قيد التحضير",
      format: "PDF"
    }
  ];

  // Report templates
  const templates = [
    {
      id: 1,
      title: "تقرير الأداء الشامل",
      description: "تقرير شامل عن أداء جميع الاستثمارات مع مؤشرات الأداء الرئيسية",
      category: "أداء"
    },
    {
      id: 2,
      title: "تقرير توزيعات الأرباح",
      description: "ملخص لتوزيعات الأرباح لفترة محددة مع التفاصيل لكل مستثمر",
      category: "أرباح"
    },
    {
      id: 3,
      title: "تقرير مشروع استثماري",
      description: "تقرير مفصل عن أداء مشروع استثماري محدد",
      category: "مشاريع"
    },
    {
      id: 4,
      title: "تقرير استثمارات المستثمر",
      description: "ملخص استثمارات مستثمر محدد مع تفاصيل العوائد والأرباح",
      category: "مستثمرين"
    }
  ];

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header section */}
        <div>
          <h1 className="text-2xl font-bold">التقارير المالية</h1>
          <p className="text-muted-foreground">إدارة وإنشاء التقارير المالية للاستثمارات</p>
        </div>

        {/* Create report section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>إنشاء تقرير جديد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="text-sm font-medium block mb-1">نوع التقرير</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>تقرير الأداء الشامل</option>
                    <option>تقرير توزيعات الأرباح</option>
                    <option>تقرير مشروع استثماري</option>
                    <option>تقرير استثمارات المستثمر</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="text-sm font-medium block mb-1">الفترة الزمنية</label>
                  <div className="flex gap-2">
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>الربع الأول 2024</option>
                      <option>الربع الثاني 2024</option>
                      <option>النصف الأول 2024</option>
                      <option>مخصص</option>
                    </select>
                    <Button variant="ghost" size="icon">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="text-sm font-medium block mb-1">تصفية حسب المشروع (اختياري)</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>جميع المشاريع</option>
                    <option>برج الأعمال المركزي</option>
                    <option>مجمع الواحة السكني</option>
                    <option>مركز التسوق الجديد</option>
                    <option>مشروع الطاقة الشمسية</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="text-sm font-medium block mb-1">تصفية حسب المستثمر (اختياري)</label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>جميع المستثمرين</option>
                    <option>محمد أحمد</option>
                    <option>عبدالله محمد</option>
                    <option>سارة خالد</option>
                    <option>فهد العتيبي</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">تنسيق التقرير</label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>PDF</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>Excel</span>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>Word</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 border-t pt-4">
            <Button variant="outline">معاينة</Button>
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90">إنشاء التقرير</Button>
          </CardFooter>
        </Card>

        {/* Recent reports */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-xl font-semibold">التقارير الأخيرة</h2>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="w-4 h-4" />
                <span>تصفية</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>الفترة</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Card className="border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>عنوان التقرير</TableHead>
                  <TableHead>التاريخ</TableHead>
                  <TableHead>النوع</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>التنسيق</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(report.date)}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={report.status === "مكتمل" ? "success" : "warning"}
                      >
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{report.format}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" disabled={report.status !== "مكتمل"}>
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" disabled={report.status !== "مكتمل"}>
                          <Printer className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" disabled={report.status !== "مكتمل"}>
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Report templates */}
        <div>
          <h2 className="text-xl font-semibold mb-4">قوالب التقارير</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="border hover:border-hrm-blue/20 transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <FileText className="h-5 w-5 text-hrm-blue" />
                  </div>
                  <Badge variant="outline" className="mt-2">{template.category}</Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardContent>
                <CardFooter className="flex justify-end pt-4 border-t">
                  <Button variant="outline" size="sm">استخدام القالب</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
