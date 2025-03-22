
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import FormModal from "@/components/FormModal";
import { Search, Filter, Plus, Calendar, Clock, Edit, MoreVertical, Check, X, Loader2 } from "lucide-react";

// تعريف أنواع البيانات
interface Task {
  id: number;
  title: string;
  project: {
    id: number;
    name: string;
  };
  assignee: {
    id: number;
    name: string;
    avatar: string;
  };
  status: "new" | "in-progress" | "testing" | "completed" | "delayed";
  priority: "high" | "medium" | "low";
  dueDate: string;
  createdAt: string;
}

// بيانات وهمية للمهام
const tasksData: Task[] = [
  {
    id: 1,
    title: "تحليل متطلبات النظام",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 1, name: "أحمد محمد", avatar: "أ" },
    status: "completed",
    priority: "high",
    dueDate: "2023-09-15",
    createdAt: "2023-09-01",
  },
  {
    id: 2,
    title: "تصميم قاعدة البيانات",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 3, name: "محمد خالد", avatar: "م" },
    status: "completed",
    priority: "high",
    dueDate: "2023-09-30",
    createdAt: "2023-09-10",
  },
  {
    id: 3,
    title: "تصميم واجهات المستخدم",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 4, name: "نورا سعيد", avatar: "ن" },
    status: "completed",
    priority: "medium",
    dueDate: "2023-10-15",
    createdAt: "2023-09-20",
  },
  {
    id: 4,
    title: "تطوير وحدة إدارة المستخدمين",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 3, name: "محمد خالد", avatar: "م" },
    status: "in-progress",
    priority: "high",
    dueDate: "2023-10-31",
    createdAt: "2023-10-01",
  },
  {
    id: 5,
    title: "تطوير وحدة الإجازات",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 2, name: "سارة احمد", avatar: "س" },
    status: "in-progress",
    priority: "medium",
    dueDate: "2023-11-15",
    createdAt: "2023-10-10",
  },
  {
    id: 6,
    title: "اختبار النظام",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 1, name: "أحمد محمد", avatar: "أ" },
    status: "new",
    priority: "high",
    dueDate: "2023-12-01",
    createdAt: "2023-10-20",
  },
  {
    id: 7,
    title: "توثيق النظام",
    project: { id: 1, name: "تطوير نظام إدارة الموارد البشرية" },
    assignee: { id: 2, name: "سارة احمد", avatar: "س" },
    status: "new",
    priority: "low",
    dueDate: "2023-12-15",
    createdAt: "2023-10-25",
  },
  {
    id: 8,
    title: "تصميم الشعار الجديد",
    project: { id: 2, name: "تصميم موقع الشركة الجديد" },
    assignee: { id: 4, name: "نورا سعيد", avatar: "ن" },
    status: "delayed",
    priority: "medium",
    dueDate: "2023-11-10",
    createdAt: "2023-10-15",
  },
  {
    id: 9,
    title: "تطوير صفحة تسجيل الدخول",
    project: { id: 2, name: "تصميم موقع الشركة الجديد" },
    assignee: { id: 2, name: "سارة احمد", avatar: "س" },
    status: "testing",
    priority: "high",
    dueDate: "2023-11-20",
    createdAt: "2023-10-30",
  },
  {
    id: 10,
    title: "إعداد التحليلات",
    project: { id: 2, name: "تصميم موقع الشركة الجديد" },
    assignee: { id: 5, name: "خالد علي", avatar: "خ" },
    status: "in-progress",
    priority: "low",
    dueDate: "2023-11-30",
    createdAt: "2023-11-01",
  },
];

// دالة للحصول على شارة الحالة
const getStatusBadge = (status: Task["status"]) => {
  switch (status) {
    case "new":
      return <Badge className="bg-purple-500">جديد</Badge>;
    case "in-progress":
      return <Badge className="bg-blue-500">قيد التنفيذ</Badge>;
    case "testing":
      return <Badge className="bg-amber-500">قيد الاختبار</Badge>;
    case "completed":
      return <Badge className="bg-green-500">مكتمل</Badge>;
    case "delayed":
      return <Badge className="bg-red-500">متأخر</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

// دالة للحصول على شارة الأولوية
const getPriorityBadge = (priority: Task["priority"]) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-100 text-red-800 border-none">عالي</Badge>;
    case "medium":
      return <Badge className="bg-amber-100 text-amber-800 border-none">متوسط</Badge>;
    case "low":
      return <Badge className="bg-green-100 text-green-800 border-none">منخفض</Badge>;
    default:
      return null;
  }
};

const Tasks = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  // تصفية المهام بناءً على البحث والفلتر
  const filteredTasks = tasksData.filter(
    (task) =>
      (task.title.includes(searchTerm) ||
        task.project.name.includes(searchTerm) ||
        task.assignee.name.includes(searchTerm)) &&
      (statusFilter === "" || task.status === statusFilter)
  );

  // إحصائيات المهام
  const stats = [
    {
      title: "إجمالي المهام",
      value: tasksData.length,
      icon: <div className="p-2 rounded-full bg-blue-50 text-blue-600"><Clock className="h-5 w-5" /></div>,
    },
    {
      title: "المهام المكتملة",
      value: tasksData.filter((t) => t.status === "completed").length,
      icon: <div className="p-2 rounded-full bg-green-50 text-green-600"><Check className="h-5 w-5" /></div>,
    },
    {
      title: "المهام الجارية",
      value: tasksData.filter((t) => t.status === "in-progress" || t.status === "testing").length,
      icon: <div className="p-2 rounded-full bg-amber-50 text-amber-600"><Loader2 className="h-5 w-5" /></div>,
    },
    {
      title: "المهام المتأخرة",
      value: tasksData.filter((t) => t.status === "delayed").length,
      icon: <div className="p-2 rounded-full bg-red-50 text-red-600"><X className="h-5 w-5" /></div>,
    },
  ];

  return (
    <DashboardLayout>
      {/* رأس الصفحة */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">إدارة المهام</h1>
            <p className="text-gray-600 mt-1">عرض وإدارة جميع المهام</p>
          </div>
          <div className="flex gap-3">
            <Link to="/task-board">
              <Button variant="outline">لوحة المهام</Button>
            </Link>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsAddTaskModalOpen(true)}
            >
              <Plus className="h-4 w-4 ml-2" />
              مهمة جديدة
            </Button>
          </div>
        </div>
      </div>

      {/* بطاقات الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              {stat.icon}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* فلتر وبحث */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="relative w-full md:w-96">
            <Search className="h-4 w-4 absolute right-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="البحث عن مهمة..."
              className="pr-9 pl-3 py-2 w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select
              className="p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">جميع الحالات</option>
              <option value="new">جديد</option>
              <option value="in-progress">قيد التنفيذ</option>
              <option value="testing">قيد الاختبار</option>
              <option value="completed">مكتمل</option>
              <option value="delayed">متأخر</option>
            </select>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              <Filter className="h-4 w-4 ml-2" />
              خيارات متقدمة
            </Button>
          </div>
        </div>

        {/* جدول المهام */}
        <div className="p-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المهمة</TableHead>
                <TableHead>المشروع</TableHead>
                <TableHead>المسؤول</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الأولوية</TableHead>
                <TableHead>تاريخ التسليم</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <TableRow key={task.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      <Link
                        to={`/tasks/${task.id}`}
                        className="hover:text-blue-600"
                      >
                        {task.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`/projects/${task.project.id}`}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {task.project.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div
                          className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-xs ml-2"
                          title={task.assignee.name}
                        >
                          {task.assignee.avatar}
                        </div>
                        <span>{task.assignee.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(task.status)}</TableCell>
                    <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 text-gray-400 ml-1" />
                        {task.dueDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <p className="text-gray-500">لم يتم العثور على مهام مطابقة</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* إضافة مهمة جديدة */}
      <FormModal
        title="إضافة مهمة جديدة"
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
              <label htmlFor="project" className="text-sm font-medium">
                المشروع
              </label>
              <select
                id="project"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">اختر المشروع</option>
                <option value="1">تطوير نظام إدارة الموارد البشرية</option>
                <option value="2">تصميم موقع الشركة الجديد</option>
                <option value="3">تطوير تطبيق الجوال</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="assignee" className="text-sm font-medium">
                المسؤول
              </label>
              <select
                id="assignee"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">اختر المسؤول</option>
                <option value="1">أحمد محمد</option>
                <option value="2">سارة احمد</option>
                <option value="3">محمد خالد</option>
                <option value="4">نورا سعيد</option>
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
                <option value="in-progress">قيد التنفيذ</option>
                <option value="testing">قيد الاختبار</option>
                <option value="completed">مكتمل</option>
              </select>
            </div>
          </div>
        </div>
      </FormModal>
    </DashboardLayout>
  );
};

export default Tasks;
