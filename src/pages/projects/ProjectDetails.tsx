
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import FormModal from "@/components/FormModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Clock,
  Edit,
  FileText,
  MoreVertical,
  Plus,
  Users,
  MessageSquare,
  Check,
  X,
  AlertTriangle,
} from "lucide-react";

// Mock project data
const projectData = {
  id: 1,
  name: "تطوير نظام إدارة الموارد البشرية",
  description:
    "تطوير نظام متكامل لإدارة شؤون الموظفين والموارد البشرية بما في ذلك إدارة الإجازات، الرواتب، التقييمات، والتدريب.",
  status: "جارٍ",
  progress: 75,
  startDate: "2023-09-01",
  deadline: "2023-12-31",
  manager: "أحمد محمد",
  team: [
    { id: 1, name: "أحمد محمد", role: "مدير المشروع", avatar: "أ" },
    { id: 2, name: "سارة احمد", role: "مطور واجهة أمامية", avatar: "س" },
    { id: 3, name: "محمد خالد", role: "مطور خلفية", avatar: "م" },
    { id: 4, name: "نورا سعيد", role: "مصمم واجهات", avatar: "ن" },
  ],
  tasks: [
    { id: 1, title: "تحليل متطلبات النظام", status: "مكتمل", assignee: "أحمد محمد", dueDate: "2023-09-15", priority: "عالي" },
    { id: 2, title: "تصميم قاعدة البيانات", status: "مكتمل", assignee: "محمد خالد", dueDate: "2023-09-30", priority: "عالي" },
    { id: 3, title: "تصميم واجهات المستخدم", status: "مكتمل", assignee: "نورا سعيد", dueDate: "2023-10-15", priority: "متوسط" },
    { id: 4, title: "تطوير وحدة إدارة المستخدمين", status: "جارٍ", assignee: "محمد خالد", dueDate: "2023-10-31", priority: "عالي" },
    { id: 5, title: "تطوير وحدة الإجازات", status: "جارٍ", assignee: "سارة احمد", dueDate: "2023-11-15", priority: "متوسط" },
    { id: 6, title: "اختبار النظام", status: "معلق", assignee: "أحمد محمد", dueDate: "2023-12-01", priority: "عالي" },
    { id: 7, title: "توثيق النظام", status: "معلق", assignee: "سارة احمد", dueDate: "2023-12-15", priority: "منخفض" },
    { id: 8, title: "التدريب ونقل المعرفة", status: "معلق", assignee: "أحمد محمد", dueDate: "2023-12-30", priority: "متوسط" },
  ],
  documents: [
    { id: 1, name: "وثيقة متطلبات المشروع", type: "PDF", size: "2.4 MB", date: "2023-09-05" },
    { id: 2, name: "مخطط قاعدة البيانات", type: "PNG", size: "1.8 MB", date: "2023-09-20" },
    { id: 3, name: "تصاميم واجهات المستخدم", type: "Figma", size: "5.2 MB", date: "2023-10-10" },
    { id: 4, name: "تقرير تقدم المشروع - أكتوبر", type: "DOCX", size: "1.2 MB", date: "2023-11-01" },
  ],
  updates: [
    { id: 1, text: "تم الانتهاء من تحليل متطلبات النظام وتوثيقها", date: "2023-09-15", user: "أحمد محمد" },
    { id: 2, text: "تم الانتهاء من تصميم قاعدة البيانات", date: "2023-09-30", user: "محمد خالد" },
    { id: 3, text: "اكتملت تصاميم واجهات المستخدم الأساسية", date: "2023-10-15", user: "نورا سعيد" },
    { id: 4, text: "بدأ العمل على تطوير وحدة إدارة المستخدمين", date: "2023-10-16", user: "محمد خالد" },
    { id: 5, text: "بدأ العمل على تطوير وحدة الإجازات", date: "2023-10-25", user: "سارة احمد" },
  ],
};

// Helper function for task status badge
const getTaskStatusBadge = (status: string) => {
  switch (status) {
    case "مكتمل":
      return <Badge className="bg-green-500">مكتمل</Badge>;
    case "جارٍ":
      return <Badge className="bg-blue-500">جارٍ</Badge>;
    case "معلق":
      return <Badge className="bg-amber-500">معلق</Badge>;
    case "متأخر":
      return <Badge className="bg-red-500">متأخر</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

// Helper function for priority badge
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "عالي":
      return <Badge className="bg-red-100 text-red-800 border-none">عالي</Badge>;
    case "متوسط":
      return <Badge className="bg-amber-100 text-amber-800 border-none">متوسط</Badge>;
    case "منخفض":
      return <Badge className="bg-green-100 text-green-800 border-none">منخفض</Badge>;
    default:
      return <Badge variant="outline">{priority}</Badge>;
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  // Stat calculations
  const completedTasks = projectData.tasks.filter((task) => task.status === "مكتمل").length;
  const totalTasks = projectData.tasks.length;
  const pendingTasks = projectData.tasks.filter((task) => task.status === "معلق").length;
  const inProgressTasks = projectData.tasks.filter((task) => task.status === "جارٍ").length;
  
  const stats = [
    {
      title: "التقدم الكلي",
      value: `${projectData.progress}%`,
      icon: <Progress value={projectData.progress} className="h-2 w-24" />,
      color: "text-blue-600",
    },
    {
      title: "المهام المكتملة",
      value: `${completedTasks}/${totalTasks}`,
      icon: <Check className="h-5 w-5 text-green-500" />,
      color: "text-green-600",
    },
    {
      title: "المهام الجارية",
      value: inProgressTasks,
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      color: "text-blue-600",
    },
    {
      title: "المهام المعلقة",
      value: pendingTasks,
      icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
      color: "text-amber-600",
    },
  ];

  return (
    <DashboardLayout>
      {/* Project Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">{projectData.name}</h1>
            <Badge className="bg-blue-500">جارٍ</Badge>
          </div>
          <p className="text-gray-600 mt-1">{projectData.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Edit className="h-4 w-4 ml-2" />
            تعديل المشروع
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsAddTaskModalOpen(true)}>
            <Plus className="h-4 w-4 ml-2" />
            مهمة جديدة
          </Button>
        </div>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{stat.title}</p>
                {typeof stat.icon === "object" && stat.icon}
              </div>
              <p className={`text-2xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Info & Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Project Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">معلومات المشروع</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">الحالة</p>
                  <p className="font-medium">{projectData.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">مدير المشروع</p>
                  <p className="font-medium">{projectData.manager}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">تاريخ البداية</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 ml-1" />
                    <p className="font-medium">{projectData.startDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">تاريخ التسليم</p>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 ml-1" />
                    <p className="font-medium">{projectData.deadline}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">فريق العمل</CardTitle>
              <CardDescription>
                {projectData.team.length} أعضاء
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {projectData.team.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm ml-3">
                        {member.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="h-4 w-4 ml-2" />
                إضافة عضو
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">المستندات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {projectData.documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 ml-3">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {doc.type} · {doc.size} · {doc.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="h-4 w-4 ml-2" />
                إضافة مستند
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Tabs */}
        <div className="lg:col-span-2">
          <Card>
            <Tabs defaultValue="tasks" className="w-full">
              <CardHeader className="pb-0">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="tasks">المهام</TabsTrigger>
                  <TabsTrigger value="updates">التحديثات</TabsTrigger>
                  <TabsTrigger value="discussions">المناقشات</TabsTrigger>
                </TabsList>
              </CardHeader>
              
              <CardContent className="pt-6">
                {/* Tasks Tab */}
                <TabsContent value="tasks" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">قائمة المهام</h3>
                    <Button
                      size="sm"
                      onClick={() => setIsAddTaskModalOpen(true)}
                    >
                      <Plus className="h-4 w-4 ml-2" />
                      مهمة جديدة
                    </Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[300px]">عنوان المهمة</TableHead>
                          <TableHead>المسؤول</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الأولوية</TableHead>
                          <TableHead>تاريخ التسليم</TableHead>
                          <TableHead className="text-left">الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projectData.tasks.map((task) => (
                          <TableRow key={task.id}>
                            <TableCell className="font-medium">
                              <Link
                                to={`/tasks/${task.id}`}
                                className="hover:text-blue-600"
                              >
                                {task.title}
                              </Link>
                            </TableCell>
                            <TableCell>{task.assignee}</TableCell>
                            <TableCell>{getTaskStatusBadge(task.status)}</TableCell>
                            <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                            <TableCell>{task.dueDate}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                {/* Updates Tab */}
                <TabsContent value="updates" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">تحديثات المشروع</h3>
                    <Button size="sm">
                      <Plus className="h-4 w-4 ml-2" />
                      إضافة تحديث
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {projectData.updates.map((update) => (
                      <div key={update.id} className="p-4 border border-gray-100 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                              {update.user.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{update.user}</p>
                              <p className="text-sm text-gray-500">{update.date}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-gray-700 mt-3">{update.text}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Discussions Tab */}
                <TabsContent value="discussions" className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">مناقشات المشروع</h3>
                    <Button size="sm">
                      <Plus className="h-4 w-4 ml-2" />
                      موضوع جديد
                    </Button>
                  </div>
                  
                  <div className="p-6 text-center border border-dashed border-gray-200 rounded-lg">
                    <MessageSquare className="h-12 w-12 text-gray-300 mx-auto" />
                    <h3 className="font-medium text-gray-700 mt-3">لا توجد مناقشات حالية</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      ابدأ أول مناقشة في هذا المشروع للتواصل مع فريق العمل
                    </p>
                    <Button className="mt-4">
                      <Plus className="h-4 w-4 ml-2" />
                      بدء مناقشة
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>

      {/* Add Task Modal */}
      <FormModal
        title="إضافة مهمة جديدة"
        description="أضف مهمة جديدة لمشروع تطوير نظام إدارة الموارد البشرية"
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddTaskModalOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={() => setIsAddTaskModalOpen(false)}>
              إضافة المهمة
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              عنوان المهمة
            </label>
            <input
              id="title"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="أدخل عنوان المهمة"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              وصف المهمة
            </label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="أدخل وصف المهمة"
            ></textarea>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="assignee" className="text-sm font-medium">
                المسؤول
              </label>
              <select
                id="assignee"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">اختر المسؤول</option>
                {projectData.team.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="dueDate" className="text-sm font-medium">
                تاريخ التسليم
              </label>
              <input
                id="dueDate"
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="priority" className="text-sm font-medium">
                الأولوية
              </label>
              <select
                id="priority"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="high">عالي</option>
                <option value="medium">متوسط</option>
                <option value="low">منخفض</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                الحالة
              </label>
              <select
                id="status"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="new">جديد</option>
                <option value="in-progress">جارٍ</option>
                <option value="pending">معلق</option>
                <option value="completed">مكتمل</option>
              </select>
            </div>
          </div>
        </div>
      </FormModal>
    </DashboardLayout>
  );
};

export default ProjectDetails;
