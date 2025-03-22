
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, FolderKanban, Clock, Users, BarChart } from "lucide-react";

// Mock data for projects
const projectsData = [
  {
    id: 1,
    name: "تطوير نظام إدارة الموارد البشرية",
    description: "تطوير نظام متكامل لإدارة شؤون الموظفين والموارد البشرية",
    status: "جارٍ",
    progress: 75,
    team: ["أحمد محمد", "سارة احمد", "محمد خالد"],
    deadline: "2023-12-31",
    tasks: { total: 24, completed: 18 },
  },
  {
    id: 2,
    name: "تصميم موقع الشركة الجديد",
    description: "إعادة تصميم الموقع الإلكتروني للشركة بتقنيات حديثة",
    status: "متأخر",
    progress: 45,
    team: ["خالد علي", "نورا سعيد"],
    deadline: "2023-11-15",
    tasks: { total: 15, completed: 7 },
  },
  {
    id: 3,
    name: "تطوير تطبيق الجوال",
    description: "تطوير وإطلاق تطبيق الهاتف المحمول للعملاء",
    status: "مكتمل",
    progress: 100,
    team: ["عمر احمد", "لينا حسن", "سعيد محمود"],
    deadline: "2023-10-01",
    tasks: { total: 32, completed: 32 },
  },
  {
    id: 4,
    name: "أتمتة العمليات الإدارية",
    description: "تطوير أنظمة لأتمتة العمليات الإدارية الداخلية",
    status: "جديد",
    progress: 10,
    team: ["فاطمة علي"],
    deadline: "2024-02-28",
    tasks: { total: 18, completed: 2 },
  },
];

// Helper function for status badge
const getStatusBadge = (status: string) => {
  switch (status) {
    case "جارٍ":
      return <Badge className="bg-blue-500">جارٍ</Badge>;
    case "متأخر":
      return <Badge className="bg-red-500">متأخر</Badge>;
    case "مكتمل":
      return <Badge className="bg-green-500">مكتمل</Badge>;
    case "جديد":
      return <Badge className="bg-purple-500">جديد</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.includes(searchTerm) || project.description.includes(searchTerm)
  );

  // Stats for the dashboard
  const stats = [
    {
      title: "إجمالي المشاريع",
      value: projectsData.length,
      icon: <FolderKanban className="h-5 w-5 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "المشاريع النشطة",
      value: projectsData.filter((p) => p.status === "جارٍ").length,
      icon: <Clock className="h-5 w-5 text-amber-500" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "المشاريع المكتملة",
      value: projectsData.filter((p) => p.status === "مكتمل").length,
      icon: <BarChart className="h-5 w-5 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "فريق العمل",
      value: [...new Set(projectsData.flatMap((p) => p.team))].length,
      icon: <Users className="h-5 w-5 text-purple-500" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">إدارة المشاريع</h1>
            <p className="text-gray-600 mt-1">عرض وإدارة مشاريع الشركة</p>
          </div>
          <Link to="/projects/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 ml-2" />
              مشروع جديد
            </Button>
          </Link>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>{stat.icon}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold">قائمة المشاريع</h2>
          <div className="relative">
            <Search className="h-4 w-4 absolute right-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="البحث عن مشروع..."
              className="pr-9 pl-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="grid" className="p-4">
          <TabsList className="mb-4">
            <TabsTrigger value="grid">عرض البطاقات</TabsTrigger>
            <TabsTrigger value="table">عرض الجدول</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {project.description}
                        </CardDescription>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="mt-3 space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-xs">
                          <span className="font-medium">التقدم</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex justify-between text-sm">
                        <div>
                          <span className="text-gray-500">المهام:</span>{" "}
                          <span className="font-medium">
                            {project.tasks.completed}/{project.tasks.total}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">تاريخ التسليم:</span>{" "}
                          <span className="font-medium">{project.deadline}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 border-t border-gray-100 flex justify-between">
                    <div className="flex -space-x-3 rtl:space-x-reverse">
                      {project.team.map((member, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                          title={member}
                        >
                          {member.charAt(0)}
                        </div>
                      ))}
                    </div>
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="outline" size="sm">
                        التفاصيل
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="table">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>اسم المشروع</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>التقدم</TableHead>
                    <TableHead>فريق العمل</TableHead>
                    <TableHead>الموعد النهائي</TableHead>
                    <TableHead>المهام</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{getStatusBadge(project.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <Progress value={project.progress} className="h-2 w-24" />
                          <span className="text-xs">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex -space-x-2 rtl:space-x-reverse">
                          {project.team.map((member, index) => (
                            <div
                              key={index}
                              className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                              title={member}
                            >
                              {member.charAt(0)}
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{project.deadline}</TableCell>
                      <TableCell>
                        {project.tasks.completed}/{project.tasks.total}
                      </TableCell>
                      <TableCell>
                        <Link to={`/projects/${project.id}`}>
                          <Button variant="outline" size="sm">
                            التفاصيل
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
