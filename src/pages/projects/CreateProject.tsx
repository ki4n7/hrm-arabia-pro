
import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { ArrowRight, Calendar, Briefcase, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

const CreateProject = () => {
  const navigate = useNavigate();

  // Mock data for team members
  const teamMembers = [
    { id: 1, name: "أحمد محمد", role: "مدير مشاريع", department: "تطوير البرمجيات", avatar: "أ" },
    { id: 2, name: "سارة احمد", role: "مطور واجهة أمامية", department: "تطوير البرمجيات", avatar: "س" },
    { id: 3, name: "محمد خالد", role: "مطور خلفية", department: "تطوير البرمجيات", avatar: "م" },
    { id: 4, name: "نورا سعيد", role: "مصمم واجهات", department: "التصميم", avatar: "ن" },
    { id: 5, name: "خالد علي", role: "مختبر برمجيات", department: "ضمان الجودة", avatar: "خ" },
    { id: 6, name: "ليلى حسن", role: "محلل أعمال", department: "تحليل الأعمال", avatar: "ل" },
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إنشاء المشروع بنجاح",
      description: "تم إنشاء المشروع الجديد وإضافته إلى قائمة المشاريع",
    });
    navigate("/projects");
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Link 
            to="/projects" 
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            المشاريع
          </Link>
          <ArrowRight className="h-3 w-3 text-gray-500 rotate-180" />
          <span className="text-gray-700 text-sm">إنشاء مشروع جديد</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">إنشاء مشروع جديد</h1>
        <p className="text-gray-600 mt-1">أدخل معلومات المشروع لإنشاء مشروع جديد</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>معلومات المشروع</CardTitle>
                <CardDescription>أدخل المعلومات الأساسية للمشروع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="project-name" className="text-sm font-medium">
                    اسم المشروع
                  </label>
                  <input
                    id="project-name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="أدخل اسم المشروع"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project-description" className="text-sm font-medium">
                    وصف المشروع
                  </label>
                  <textarea
                    id="project-description"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="أدخل وصف المشروع"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="start-date" className="text-sm font-medium">
                      تاريخ البدء
                    </label>
                    <div className="relative">
                      <input
                        id="start-date"
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="end-date" className="text-sm font-medium">
                      تاريخ الانتهاء المتوقع
                    </label>
                    <div className="relative">
                      <input
                        id="end-date"
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="project-type" className="text-sm font-medium">
                      نوع المشروع
                    </label>
                    <select
                      id="project-type"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">اختر نوع المشروع</option>
                      <option value="development">تطوير برمجيات</option>
                      <option value="design">تصميم</option>
                      <option value="marketing">تسويق</option>
                      <option value="research">بحث وتطوير</option>
                      <option value="consulting">استشارات</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project-priority" className="text-sm font-medium">
                      أولوية المشروع
                    </label>
                    <select
                      id="project-priority"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">اختر الأولوية</option>
                      <option value="high">عالية</option>
                      <option value="medium">متوسطة</option>
                      <option value="low">منخفضة</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>فريق العمل</CardTitle>
                <CardDescription>اختر أعضاء فريق العمل للمشروع</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">
                      مدير المشروع
                    </label>
                  </div>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">اختر مدير المشروع</option>
                    {teamMembers.filter((m) => m.role === "مدير مشاريع").map((member) => (
                      <option key={member.id} value={member.id}>{member.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">
                      أعضاء الفريق
                    </label>
                    <span className="text-xs text-gray-500">
                      اختر واحدًا أو أكثر
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center border border-gray-200 rounded-md p-3"
                      >
                        <input
                          type="checkbox"
                          id={`member-${member.id}`}
                          className="ml-3"
                        />
                        <label
                          htmlFor={`member-${member.id}`}
                          className="flex items-center flex-1 cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm ml-3">
                            {member.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.role}</p>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>نشر المشروع</CardTitle>
                <CardDescription>إعدادات نشر المشروع</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="project-status" className="text-sm font-medium">
                    حالة المشروع
                  </label>
                  <select
                    id="project-status"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="draft">مسودة</option>
                    <option value="active">نشط</option>
                  </select>
                </div>

                <div className="flex items-center py-2">
                  <input
                    type="checkbox"
                    id="notify-team"
                    className="ml-2"
                  />
                  <label htmlFor="notify-team" className="text-sm">
                    إرسال إشعار لفريق العمل
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => navigate("/projects")}>
                  إلغاء
                </Button>
                <Button type="submit">إنشاء المشروع</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>إعدادات إضافية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="general">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="general">عام</TabsTrigger>
                    <TabsTrigger value="budget">الميزانية</TabsTrigger>
                  </TabsList>
                  <TabsContent value="general" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label htmlFor="project-tags" className="text-sm font-medium">
                        العلامات
                      </label>
                      <input
                        id="project-tags"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="أدخل العلامات مفصولة بفواصل"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="project-category" className="text-sm font-medium">
                        التصنيف
                      </label>
                      <select
                        id="project-category"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">اختر التصنيف</option>
                        <option>تطوير البرمجيات</option>
                        <option>التصميم</option>
                        <option>الأبحاث</option>
                        <option>التسويق</option>
                      </select>
                    </div>
                  </TabsContent>
                  <TabsContent value="budget" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label htmlFor="project-budget" className="text-sm font-medium">
                        الميزانية التقديرية
                      </label>
                      <div className="relative">
                        <input
                          id="project-budget"
                          type="number"
                          className="w-full p-2 pr-8 border border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cost-center" className="text-sm font-medium">
                        مركز التكلفة
                      </label>
                      <select
                        id="cost-center"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">اختر مركز التكلفة</option>
                        <option>قسم تكنولوجيا المعلومات</option>
                        <option>قسم التطوير</option>
                        <option>قسم التسويق</option>
                        <option>قسم المبيعات</option>
                      </select>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default CreateProject;
