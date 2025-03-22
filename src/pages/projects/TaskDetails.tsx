
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  Calendar,
  Clock,
  Edit,
  FileText,
  Link as LinkIcon,
  MessageSquare,
  PlusCircle,
  User,
  AlertTriangle,
  Check,
  X,
  BarChart,
} from "lucide-react";

// بيانات وهمية للمهمة
const taskData = {
  id: 4,
  title: "تطوير وحدة إدارة المستخدمين",
  description:
    "تطوير الوحدة المسؤولة عن إدارة المستخدمين وصلاحياتهم، بما في ذلك إنشاء المستخدمين وتعديلهم وحذفهم، بالإضافة إلى إدارة الأدوار والصلاحيات. يجب أن تتضمن الوحدة واجهة مستخدم سهلة الاستخدام وأن تكون متوافقة مع متطلبات الأمان.",
  status: "in-progress",
  progress: 60,
  priority: "high",
  assignee: {
    id: 3,
    name: "محمد خالد",
    avatar: "م",
    role: "مطور خلفية",
  },
  creator: {
    id: 1,
    name: "أحمد محمد",
    avatar: "أ",
  },
  dates: {
    created: "2023-10-01",
    updated: "2023-10-25",
    dueDate: "2023-10-31",
  },
  project: {
    id: 1,
    name: "تطوير نظام إدارة الموارد البشرية",
  },
  subtasks: [
    {
      id: 1,
      title: "تصميم نموذج البيانات للمستخدمين والأدوار",
      status: "completed",
    },
    {
      id: 2,
      title: "تطوير واجهة برمجة التطبيقات للمستخدمين",
      status: "completed",
    },
    {
      id: 3,
      title: "تطوير واجهة المستخدم لإدارة المستخدمين",
      status: "in-progress",
    },
    {
      id: 4,
      title: "تكامل نظام المصادقة",
      status: "in-progress",
    },
    {
      id: 5,
      title: "اختبار وحدة المستخدمين",
      status: "pending",
    },
  ],
  comments: [
    {
      id: 1,
      user: {
        id: 1,
        name: "أحمد محمد",
        avatar: "أ",
      },
      text: "يرجى التأكد من تضمين جميع متطلبات الأمان في تطوير وحدة المستخدمين.",
      date: "2023-10-05",
    },
    {
      id: 2,
      user: {
        id: 3,
        name: "محمد خالد",
        avatar: "م",
      },
      text: "تم الانتهاء من تصميم نموذج البيانات، وسأبدأ الآن في تطوير واجهة برمجة التطبيقات.",
      date: "2023-10-10",
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "محمد خالد",
        avatar: "م",
      },
      text: "اكتملت واجهة برمجة التطبيقات وبدأت العمل على واجهة المستخدم.",
      date: "2023-10-20",
    },
  ],
  attachments: [
    {
      id: 1,
      name: "مخطط قاعدة بيانات المستخدمين",
      type: "PDF",
      size: "1.2 MB",
      date: "2023-10-05",
    },
    {
      id: 2,
      name: "توثيق واجهة برمجة التطبيقات",
      type: "DOCX",
      size: "843 KB",
      date: "2023-10-15",
    },
    {
      id: 3,
      name: "تصميم واجهة المستخدم",
      type: "Figma",
      size: "2.5 MB",
      date: "2023-10-18",
    },
  ],
  activityLog: [
    {
      id: 1,
      action: "إنشاء المهمة",
      date: "2023-10-01",
      user: "أحمد محمد",
    },
    {
      id: 2,
      action: "تغيير الحالة من 'جديد' إلى 'قيد التنفيذ'",
      date: "2023-10-02",
      user: "محمد خالد",
    },
    {
      id: 3,
      action: "تحديث وصف المهمة",
      date: "2023-10-05",
      user: "أحمد محمد",
    },
    {
      id: 4,
      action: "إضافة مهمة فرعية: 'تصميم نموذج البيانات للمستخدمين والأدوار'",
      date: "2023-10-05",
      user: "محمد خالد",
    },
    {
      id: 5,
      action: "إضافة مهمة فرعية: 'تطوير واجهة برمجة التطبيقات للمستخدمين'",
      date: "2023-10-05",
      user: "محمد خالد",
    },
    {
      id: 6,
      action: "اكتمال المهمة الفرعية: 'تصميم نموذج البيانات للمستخدمين والأدوار'",
      date: "2023-10-10",
      user: "محمد خالد",
    },
    {
      id: 7,
      action: "إضافة مهمة فرعية: 'تطوير واجهة المستخدم لإدارة المستخدمين'",
      date: "2023-10-15",
      user: "محمد خالد",
    },
    {
      id: 8,
      action: "اكتمال المهمة الفرعية: 'تطوير واجهة برمجة التطبيقات للمستخدمين'",
      date: "2023-10-18",
      user: "محمد خالد",
    },
    {
      id: 9,
      action: "إضافة مهمة فرعية: 'تكامل نظام المصادقة'",
      date: "2023-10-18",
      user: "محمد خالد",
    },
    {
      id: 10,
      action: "إضافة مهمة فرعية: 'اختبار وحدة المستخدمين'",
      date: "2023-10-20",
      user: "محمد خالد",
    },
    {
      id: 11,
      action: "تحديث التقدم إلى 60%",
      date: "2023-10-25",
      user: "محمد خالد",
    },
  ],
};

// دالة للحصول على شارة الحالة
const getStatusBadge = (status: string) => {
  switch (status) {
    case "new":
      return <Badge className="bg-purple-500">جديد</Badge>;
    case "in-progress":
      return <Badge className="bg-blue-500">قيد التنفيذ</Badge>;
    case "completed":
      return <Badge className="bg-green-500">مكتمل</Badge>;
    case "pending":
      return <Badge className="bg-amber-500">معلق</Badge>;
    case "delayed":
      return <Badge className="bg-red-500">متأخر</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

// دالة للحصول على شارة الأولوية
const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-100 text-red-800 border-none">عالي</Badge>;
    case "medium":
      return <Badge className="bg-amber-100 text-amber-800 border-none">متوسط</Badge>;
    case "low":
      return <Badge className="bg-green-100 text-green-800 border-none">منخفض</Badge>;
    default:
      return <Badge variant="outline">{priority}</Badge>;
  }
};

const TaskDetails = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  
  // حساب عدد المهام الفرعية المكتملة
  const completedSubtasks = taskData.subtasks.filter(
    (subtask) => subtask.status === "completed"
  ).length;
  
  // حساب نسبة الإكمال
  const completionPercentage = Math.round(
    (completedSubtasks / taskData.subtasks.length) * 100
  );

  // إضافة تعليق جديد
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // هنا ستتم إضافة التعليق إلى القائمة (ستحتاج إلى حالة لحفظ التعليقات)
      setNewComment("");
    }
  };

  // تغيير حالة المهمة الفرعية
  const handleSubtaskStatusChange = (subtaskId: number, status: string) => {
    // هنا ستتم تحديث حالة المهمة الفرعية
    console.log(`Updating subtask ${subtaskId} to status ${status}`);
  };

  return (
    <DashboardLayout>
      {/* رأس الصفحة */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Link
            to="/tasks"
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            المهام
          </Link>
          <ArrowRight className="h-3 w-3 text-gray-500 rotate-180" />
          <span className="text-gray-700 text-sm">تفاصيل المهمة</span>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{taskData.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Link
                to={`/projects/${taskData.project.id}`}
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                {taskData.project.name}
              </Link>
              {getStatusBadge(taskData.status)}
              {getPriorityBadge(taskData.priority)}
            </div>
          </div>
          <Button variant="outline">
            <Edit className="h-4 w-4 ml-2" />
            تعديل المهمة
          </Button>
        </div>
      </div>

      {/* محتوى الصفحة */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* العمود الأيمن - معلومات المهمة */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">معلومات المهمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">المسؤول</h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm ml-3">
                    {taskData.assignee.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{taskData.assignee.name}</p>
                    <p className="text-xs text-gray-500">{taskData.assignee.role}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">حالة المهمة</h3>
                  <p className="font-medium">{taskData.status === "in-progress" ? "قيد التنفيذ" : taskData.status}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">الأولوية</h3>
                  <p className="font-medium">{taskData.priority === "high" ? "عالية" : taskData.priority}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">تاريخ الإنشاء</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 ml-1" />
                    <p className="font-medium">{taskData.dates.created}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">تاريخ التسليم</h3>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 ml-1" />
                    <p className="font-medium">{taskData.dates.dueDate}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">التقدم</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{completedSubtasks} من {taskData.subtasks.length} مهام فرعية</span>
                    <span>{completionPercentage}%</span>
                  </div>
                  <Progress value={completionPercentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">المهام الفرعية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {taskData.subtasks.map((subtask) => (
                <div key={subtask.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`subtask-${subtask.id}`}
                      checked={subtask.status === "completed"}
                      onChange={(e) =>
                        handleSubtaskStatusChange(
                          subtask.id,
                          e.target.checked ? "completed" : "pending"
                        )
                      }
                      className="ml-3"
                    />
                    <label
                      htmlFor={`subtask-${subtask.id}`}
                      className={`text-sm cursor-pointer ${
                        subtask.status === "completed" ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {subtask.title}
                    </label>
                  </div>
                  {getStatusBadge(subtask.status)}
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full mt-2">
                <PlusCircle className="h-4 w-4 ml-2" />
                إضافة مهمة فرعية
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">المرفقات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {taskData.attachments.map((attachment) => (
                <div key={attachment.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 ml-3">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{attachment.name}</p>
                      <p className="text-xs text-gray-500">
                        {attachment.type} · {attachment.size} · {attachment.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full mt-2">
                <PlusCircle className="h-4 w-4 ml-2" />
                إضافة مرفق
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* العمود الأيسر - التفاصيل والتعليقات */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">وصف المهمة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-wrap">
                {taskData.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <Tabs defaultValue="comments">
              <CardHeader className="pb-0">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="comments">التعليقات</TabsTrigger>
                  <TabsTrigger value="activity">سجل النشاطات</TabsTrigger>
                  <TabsTrigger value="time">تتبع الوقت</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent className="pt-6">
                <TabsContent value="comments" className="space-y-4">
                  {/* نموذج إضافة تعليق */}
                  <form onSubmit={handleAddComment} className="mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                        {taskData.assignee.avatar}
                      </div>
                      <div className="flex-1">
                        <textarea
                          placeholder="اكتب تعليقًا..."
                          className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          rows={3}
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-2">
                          <Button type="submit" disabled={!newComment.trim()}>
                            <MessageSquare className="h-4 w-4 ml-2" />
                            إرسال
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* قائمة التعليقات */}
                  <div className="space-y-4">
                    {taskData.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                          {comment.user.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{comment.user.name}</h4>
                            <span className="text-xs text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700 mt-1">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* سجل النشاطات */}
                <TabsContent value="activity" className="space-y-4">
                  <div className="space-y-4">
                    {taskData.activityLog.map((activity) => (
                      <div key={activity.id} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                          <User className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{activity.user}</h4>
                            <span className="text-xs text-gray-500">{activity.date}</span>
                          </div>
                          <p className="text-gray-700 mt-1">{activity.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* تتبع الوقت */}
                <TabsContent value="time" className="space-y-4">
                  <div className="p-6 text-center border border-dashed border-gray-200 rounded-lg">
                    <BarChart className="h-12 w-12 text-gray-300 mx-auto" />
                    <h3 className="font-medium text-gray-700 mt-3">لا يوجد سجل زمني بعد</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      ابدأ تسجيل الوقت المستغرق لإكمال هذه المهمة
                    </p>
                    <Button className="mt-4">
                      <Clock className="h-4 w-4 ml-2" />
                      بدء تسجيل الوقت
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaskDetails;
