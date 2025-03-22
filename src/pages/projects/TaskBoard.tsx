
import React, { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FormModal from "@/components/FormModal";
import { Plus, Search, Filter, Users, Clock, MoreVertical, Calendar } from "lucide-react";

// تعريف أنواع البيانات
interface Task {
  id: number;
  title: string;
  description: string;
  status: "new" | "in-progress" | "testing" | "completed";
  priority: "high" | "medium" | "low";
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  project: string;
}

// بيانات وهمية للمهام
const taskData: Task[] = [
  {
    id: 1,
    title: "تصميم واجهة صفحة تسجيل الدخول",
    description: "تصميم واجهة مستخدم جديدة لصفحة تسجيل الدخول بمعايير سهولة الاستخدام الحديثة",
    status: "new",
    priority: "high",
    assignee: { name: "نورا سعيد", avatar: "ن" },
    dueDate: "2023-12-10",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 2,
    title: "تطوير واجهة API للمستخدمين",
    description: "إنشاء واجهة برمجة تطبيقات لإدارة بيانات المستخدمين والصلاحيات",
    status: "in-progress",
    priority: "high",
    assignee: { name: "محمد خالد", avatar: "م" },
    dueDate: "2023-12-15",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 3,
    title: "تطوير وحدة الإجازات",
    description: "تطوير الوحدة المسؤولة عن طلبات الإجازات وإدارتها",
    status: "in-progress",
    priority: "medium",
    assignee: { name: "سارة احمد", avatar: "س" },
    dueDate: "2023-12-20",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 4,
    title: "اختبار وحدة المستخدمين",
    description: "إجراء اختبارات شاملة لوحدة إدارة المستخدمين والصلاحيات",
    status: "testing",
    priority: "medium",
    assignee: { name: "خالد علي", avatar: "خ" },
    dueDate: "2023-12-08",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 5,
    title: "توثيق API للمطورين",
    description: "إعداد وثائق API مفصلة للمطورين الخارجيين",
    status: "completed",
    priority: "low",
    assignee: { name: "أحمد محمد", avatar: "أ" },
    dueDate: "2023-12-01",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 6,
    title: "تصميم صفحات التقارير",
    description: "تصميم واجهة مستخدم لصفحات التقارير المختلفة",
    status: "new",
    priority: "medium",
    assignee: { name: "نورا سعيد", avatar: "ن" },
    dueDate: "2023-12-25",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 7,
    title: "تطوير نظام الإشعارات",
    description: "تطوير آلية إرسال وعرض الإشعارات للمستخدمين",
    status: "in-progress",
    priority: "low",
    assignee: { name: "محمد خالد", avatar: "م" },
    dueDate: "2023-12-18",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
  {
    id: 8,
    title: "تطوير خاصية استيراد وتصدير البيانات",
    description: "تطوير وحدة لاستيراد وتصدير بيانات الموظفين بصيغ مختلفة",
    status: "testing",
    priority: "high",
    assignee: { name: "سارة احمد", avatar: "س" },
    dueDate: "2023-12-22",
    project: "تطوير نظام إدارة الموارد البشرية",
  },
];

// ترتيب المهام حسب العمود
const getTasksByStatus = (status: Task["status"]) => {
  return taskData.filter((task) => task.status === status);
};

// عنوان كل عمود
const getColumnTitle = (status: Task["status"]) => {
  switch (status) {
    case "new":
      return "مهام جديدة";
    case "in-progress":
      return "قيد التنفيذ";
    case "testing":
      return "قيد الاختبار";
    case "completed":
      return "مكتملة";
    default:
      return "";
  }
};

// لون كل عمود
const getColumnColor = (status: Task["status"]) => {
  switch (status) {
    case "new":
      return "border-t-purple-500";
    case "in-progress":
      return "border-t-blue-500";
    case "testing":
      return "border-t-amber-500";
    case "completed":
      return "border-t-green-500";
    default:
      return "";
  }
};

// الشارة الخاصة بالأولوية
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

const TaskBoard = () => {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // تصفية المهام بناءً على البحث
  const filterTasks = (tasks: Task[]) => {
    if (!searchTerm) return tasks;
    return tasks.filter(
      (task) =>
        task.title.includes(searchTerm) ||
        task.description.includes(searchTerm) ||
        task.assignee.name.includes(searchTerm)
    );
  };

  // الأعمدة التي سيتم عرضها
  const columns: Task["status"][] = ["new", "in-progress", "testing", "completed"];

  return (
    <DashboardLayout>
      {/* رأس الصفحة */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">لوحة المهام</h1>
            <p className="text-gray-600 mt-1">إدارة وتتبع تقدم المهام</p>
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsAddTaskModalOpen(true)}
          >
            <Plus className="h-4 w-4 ml-2" />
            مهمة جديدة
          </Button>
        </div>
      </div>

      {/* أدوات التصفية والبحث */}
      <div className="bg-white rounded-lg shadow-sm p-3 mb-4 flex flex-col md:flex-row justify-between items-center gap-3">
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
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <Filter className="h-4 w-4 ml-2" />
            تصفية
          </Button>
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <Users className="h-4 w-4 ml-2" />
            المسؤولين
          </Button>
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <Clock className="h-4 w-4 ml-2" />
            المواعيد
          </Button>
        </div>
      </div>

      {/* لوحة المهام الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4">
        {columns.map((status) => (
          <div key={status} className="min-w-[300px] h-full">
            <div className={`bg-white rounded-t-md p-3 border-t-2 ${getColumnColor(status)}`}>
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{getColumnTitle(status)}</h3>
                <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-full">
                  {filterTasks(getTasksByStatus(status)).length}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-b-md p-2 min-h-[500px] max-h-[calc(100vh-240px)] overflow-y-auto space-y-2">
              {filterTasks(getTasksByStatus(status)).map((task) => (
                <Card
                  key={task.id}
                  className="bg-white border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1 -mr-1">
                        <MoreVertical className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-3">
                      {task.description}
                    </p>
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 ml-1" />
                        {task.dueDate}
                      </div>
                      {getPriorityBadge(task.priority)}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div
                          className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-xs"
                          title={task.assignee.name}
                        >
                          {task.assignee.avatar}
                        </div>
                        <span className="text-xs text-gray-500 mr-2">
                          {task.assignee.name}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
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

export default TaskBoard;
