
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
import { 
  Plus, Search, Filter, Users, Clock, MoreVertical, Calendar, 
  UserPlus, MessageCircle, ClipboardPen, Settings
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

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

// نماذج التحقق للنماذج المختلفة
const addTaskSchema = z.object({
  title: z.string().min(3, { message: "يجب أن يحتوي العنوان على 3 أحرف على الأقل" }),
  description: z.string().min(5, { message: "يجب أن يحتوي الوصف على 5 أحرف على الأقل" }),
  project: z.string().min(1, { message: "الرجاء اختيار مشروع" }),
  assignee: z.string().min(1, { message: "الرجاء اختيار مسؤول" }),
  dueDate: z.string().min(1, { message: "الرجاء اختيار تاريخ التسليم" }),
  priority: z.string().min(1, { message: "الرجاء اختيار أولوية" }),
  status: z.string().min(1, { message: "الرجاء اختيار الحالة" }),
});

const addMemberSchema = z.object({
  name: z.string().min(3, { message: "يجب أن يحتوي الاسم على 3 أحرف على الأقل" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  role: z.string().min(1, { message: "الرجاء اختيار الدور" }),
});

const addUpdateSchema = z.object({
  title: z.string().min(3, { message: "يجب أن يحتوي العنوان على 3 أحرف على الأقل" }),
  description: z.string().min(5, { message: "يجب أن يحتوي الوصف على 5 أحرف على الأقل" }),
  taskId: z.string().min(1, { message: "الرجاء اختيار مهمة" }),
});

const addDiscussionSchema = z.object({
  topic: z.string().min(3, { message: "يجب أن يحتوي الموضوع على 3 أحرف على الأقل" }),
  message: z.string().min(5, { message: "يجب أن تحتوي الرسالة على 5 أحرف على الأقل" }),
  taskId: z.string().min(1, { message: "الرجاء اختيار مهمة" }),
});

const actionsSchema = z.object({
  action: z.string().min(1, { message: "الرجاء اختيار إجراء" }),
  taskId: z.string().min(1, { message: "الرجاء اختيار مهمة" }),
  reason: z.string().optional(),
});

const TaskBoard = () => {
  // حالة النوافذ المنبثقة
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [isActionsModalOpen, setIsActionsModalOpen] = useState(false);
  const [isAddUpdateModalOpen, setIsAddUpdateModalOpen] = useState(false);
  const [isDiscussionsModalOpen, setIsDiscussionsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  // نماذج react-hook-form
  const addTaskForm = useForm({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      project: "",
      assignee: "",
      dueDate: "",
      priority: "medium",
      status: "new",
    },
  });

  const addMemberForm = useForm({
    resolver: zodResolver(addMemberSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
    },
  });

  const actionsForm = useForm({
    resolver: zodResolver(actionsSchema),
    defaultValues: {
      action: "",
      taskId: "",
      reason: "",
    },
  });

  const addUpdateForm = useForm({
    resolver: zodResolver(addUpdateSchema),
    defaultValues: {
      title: "",
      description: "",
      taskId: "",
    },
  });

  const discussionsForm = useForm({
    resolver: zodResolver(addDiscussionSchema),
    defaultValues: {
      topic: "",
      message: "",
      taskId: "",
    },
  });

  // وظائف التقديم
  const onAddTaskSubmit = (values: z.infer<typeof addTaskSchema>) => {
    console.log(values);
    toast({
      title: "تم إضافة المهمة",
      description: `تم إضافة مهمة ${values.title} بنجاح.`,
    });
    setIsAddTaskModalOpen(false);
    addTaskForm.reset();
  };

  const onAddMemberSubmit = (values: z.infer<typeof addMemberSchema>) => {
    console.log(values);
    toast({
      title: "تم إضافة العضو",
      description: `تم إضافة العضو ${values.name} بنجاح.`,
    });
    setIsAddMemberModalOpen(false);
    addMemberForm.reset();
  };

  const onActionsSubmit = (values: z.infer<typeof actionsSchema>) => {
    console.log(values);
    toast({
      title: "تم تنفيذ الإجراء",
      description: `تم تنفيذ الإجراء ${values.action} بنجاح.`,
    });
    setIsActionsModalOpen(false);
    actionsForm.reset();
  };

  const onAddUpdateSubmit = (values: z.infer<typeof addUpdateSchema>) => {
    console.log(values);
    toast({
      title: "تم إضافة التحديث",
      description: `تم إضافة التحديث ${values.title} بنجاح.`,
    });
    setIsAddUpdateModalOpen(false);
    addUpdateForm.reset();
  };

  const onDiscussionsSubmit = (values: z.infer<typeof addDiscussionSchema>) => {
    console.log(values);
    toast({
      title: "تم إضافة المناقشة",
      description: `تم إضافة المناقشة ${values.topic} بنجاح.`,
    });
    setIsDiscussionsModalOpen(false);
    discussionsForm.reset();
  };

  // معالجة فتح النوافذ المنبثقة للإجراءات
  const handleTaskAction = (taskId: number, action: 'actions' | 'update' | 'discussion') => {
    setSelectedTaskId(taskId);
    
    // تعيين قيمة المهمة المحددة في النماذج
    const taskIdString = taskId.toString();
    
    if (action === 'actions') {
      actionsForm.setValue('taskId', taskIdString);
      setIsActionsModalOpen(true);
    } else if (action === 'update') {
      addUpdateForm.setValue('taskId', taskIdString);
      setIsAddUpdateModalOpen(true);
    } else if (action === 'discussion') {
      discussionsForm.setValue('taskId', taskIdString);
      setIsDiscussionsModalOpen(true);
    }
  };

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
          <div className="flex gap-2">
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsAddTaskModalOpen(true)}
            >
              <Plus className="h-4 w-4 ml-2" />
              مهمة جديدة
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsAddMemberModalOpen(true)}
            >
              <UserPlus className="h-4 w-4 ml-2" />
              إضافة عضو
            </Button>
          </div>
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
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full md:w-auto"
            onClick={() => setIsActionsModalOpen(true)}
          >
            <Settings className="h-4 w-4 ml-2" />
            الإجراءات
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full md:w-auto"
            onClick={() => setIsAddUpdateModalOpen(true)}
          >
            <ClipboardPen className="h-4 w-4 ml-2" />
            إضافة تحديث
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full md:w-auto"
            onClick={() => setIsDiscussionsModalOpen(true)}
          >
            <MessageCircle className="h-4 w-4 ml-2" />
            المناقشات
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
                      <div className="flex gap-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 -mt-1" 
                          onClick={() => handleTaskAction(task.id, 'discussion')}
                        >
                          <MessageCircle className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 -mt-1" 
                          onClick={() => handleTaskAction(task.id, 'update')}
                        >
                          <ClipboardPen className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-6 w-6 -mt-1" 
                          onClick={() => handleTaskAction(task.id, 'actions')}
                        >
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
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
            <Button onClick={addTaskForm.handleSubmit(onAddTaskSubmit)}>
              إضافة المهمة
            </Button>
          </div>
        }
      >
        <Form {...addTaskForm}>
          <form onSubmit={addTaskForm.handleSubmit(onAddTaskSubmit)} className="space-y-4">
            <FormField
              control={addTaskForm.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>عنوان المهمة</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="أدخل عنوان المهمة" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={addTaskForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>وصف المهمة</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="أدخل وصف المهمة" rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={addTaskForm.control}
                name="project"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>المشروع</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">اختر المشروع</option>
                        <option value="1">تطوير نظام إدارة الموارد البشرية</option>
                        <option value="2">تصميم موقع الشركة الجديد</option>
                        <option value="3">تطوير تطبيق الجوال</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={addTaskForm.control}
                name="assignee"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>المسؤول</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">اختر المسؤول</option>
                        <option value="1">أحمد محمد</option>
                        <option value="2">سارة احمد</option>
                        <option value="3">محمد خالد</option>
                        <option value="4">نورا سعيد</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={addTaskForm.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>تاريخ التسليم</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={addTaskForm.control}
                name="priority"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>الأولوية</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="high">عالي</option>
                        <option value="medium">متوسط</option>
                        <option value="low">منخفض</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={addTaskForm.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>الحالة</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="new">جديد</option>
                        <option value="in-progress">قيد التنفيذ</option>
                        <option value="testing">قيد الاختبار</option>
                        <option value="completed">مكتمل</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </FormModal>

      {/* إضافة عضو */}
      <FormModal
        title="إضافة عضو جديد"
        isOpen={isAddMemberModalOpen}
        onClose={() => setIsAddMemberModalOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddMemberModalOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={addMemberForm.handleSubmit(onAddMemberSubmit)}>
              إضافة العضو
            </Button>
          </div>
        }
      >
        <Form {...addMemberForm}>
          <form onSubmit={addMemberForm.handleSubmit(onAddMemberSubmit)} className="space-y-4">
            <FormField
              control={addMemberForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>اسم العضو</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="أدخل اسم العضو" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={addMemberForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="أدخل البريد الإلكتروني" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={addMemberForm.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>الدور</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">اختر الدور</option>
                      <option value="admin">مدير</option>
                      <option value="developer">مطوّر</option>
                      <option value="designer">مصمم</option>
                      <option value="tester">مختبر</option>
                      <option value="project_manager">مدير مشروع</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </FormModal>

      {/* الإجراءات */}
      <FormModal
        title="إجراءات المهمة"
        isOpen={isActionsModalOpen}
        onClose={() => setIsActionsModalOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsActionsModalOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={actionsForm.handleSubmit(onActionsSubmit)}>
              تنفيذ الإجراء
            </Button>
          </div>
        }
      >
        <Form {...actionsForm}>
          <form onSubmit={actionsForm.handleSubmit(onActionsSubmit)} className="space-y-4">
            <FormField
              control={actionsForm.control}
              name="taskId"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>المهمة</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">اختر المهمة</option>
                      {taskData.map(task => (
                        <option key={task.id} value={task.id.toString()}>{task.title}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={actionsForm.control}
              name="action"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>الإجراء</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">اختر الإجراء</option>
                      <option value="change_status">تغيير الحالة</option>
                      <option value="change_assignee">تغيير المسؤول</option>
                      <option value="change_priority">تغيير الأولوية</option>
                      <option value="archive">أرشفة المهمة</option>
                      <option value="delete">حذف المهمة</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={actionsForm.control}
              name="reason"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>سبب الإجراء (اختياري)</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="أدخل سبب الإجراء" rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </FormModal>

      {/* إضافة تحديث */}
      <FormModal
        title="إضافة تحديث للمهمة"
        isOpen={isAddUpdateModalOpen}
        onClose={() => setIsAddUpdateModalOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddUpdateModalOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={addUpdateForm.handleSubmit(onAddUpdateSubmit)}>
              إضافة التحديث
            </Button>
          </div>
        }
      >
        <Form {...addUpdateForm}>
          <form onSubmit={addUpdateForm.handleSubmit(onAddUpdateSubmit)} className="space-y-4">
            <FormField
              control={addUpdateForm.control}
              name="taskId"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>المهمة</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">اختر المهمة</option>
                      {taskData.map(task => (
                        <option key={task.id} value={task.id.toString()}>{task.title}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={addUpdateForm.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>عنوان التحديث</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="أدخل عنوان التحديث" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={addUpdateForm.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>تفاصيل التحديث</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="أدخل تفاصيل التحديث" rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </FormModal>

      {/* المناقشات */}
      <FormModal
        title="إضافة مناقشة جديدة"
        isOpen={isDiscussionsModalOpen}
        onClose={() => setIsDiscussionsModalOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDiscussionsModalOpen(false)}>
              إلغاء
            </Button>
            <Button onClick={discussionsForm.handleSubmit(onDiscussionsSubmit)}>
              إضافة المناقشة
            </Button>
          </div>
        }
      >
        <Form {...discussionsForm}>
          <form onSubmit={discussionsForm.handleSubmit(onDiscussionsSubmit)} className="space-y-4">
            <FormField
              control={discussionsForm.control}
              name="taskId"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>المهمة</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">اختر المهمة</option>
                      {taskData.map(task => (
                        <option key={task.id} value={task.id.toString()}>{task.title}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={discussionsForm.control}
              name="topic"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>موضوع المناقشة</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="أدخل موضوع المناقشة" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={discussionsForm.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>رسالة المناقشة</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="أدخل رسالة المناقشة" rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </FormModal>
    </DashboardLayout>
  );
};

export default TaskBoard;
