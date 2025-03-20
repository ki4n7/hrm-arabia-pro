
import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Lock, Bell, Shield, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfileSettings = () => {
  const { toast } = useToast();

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم حفظ التغييرات",
      description: "تم تحديث بيانات الملف الشخصي بنجاح",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="personal">المعلومات الشخصية</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
            <TabsTrigger value="account">إدارة الحساب</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>المعلومات الشخصية</CardTitle>
                <CardDescription>قم بتحديث معلوماتك الشخصية وبيانات التواصل</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-4">
                    <div className="mb-6">
                      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="/placeholder.svg" alt="Profile" />
                          <AvatarFallback className="bg-hrm-lightBlue">
                            <User className="h-12 w-12 text-hrm-blue" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                          <Button variant="outline" className="gap-1">
                            <Upload className="h-4 w-4 ml-1" />
                            تغيير الصورة
                          </Button>
                          <p className="text-sm text-gray-500">يفضل أن تكون الصورة بحجم 300×300 بكسل وبصيغة JPG أو PNG</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium">
                          الاسم الأول
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          defaultValue="أحمد"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium">
                          الاسم الأخير
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          defaultValue="محمد"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          البريد الإلكتروني
                        </label>
                        <input
                          id="email"
                          type="email"
                          defaultValue="ahmed@example.com"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          رقم الهاتف
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          defaultValue="+966 55 123 4567"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium">
                          العنوان
                        </label>
                        <input
                          id="address"
                          type="text"
                          defaultValue="حي النخيل، الرياض"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-medium">
                          المدينة
                        </label>
                        <input
                          id="city"
                          type="text"
                          defaultValue="الرياض"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="country" className="block text-sm font-medium">
                          الدولة
                        </label>
                        <input
                          id="country"
                          type="text"
                          defaultValue="المملكة العربية السعودية"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                    </div>
                  </div>
                  <CardFooter className="flex justify-end px-0">
                    <Button type="submit">حفظ التغييرات</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>الأمان</CardTitle>
                <CardDescription>إدارة كلمة المرور وإعدادات الأمان لحسابك</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="currentPassword" className="block text-sm font-medium">
                        كلمة المرور الحالية
                      </label>
                      <input
                        id="currentPassword"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="newPassword" className="block text-sm font-medium">
                        كلمة المرور الجديدة
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                      <p className="text-xs text-gray-500 mt-1">يجب أن تكون كلمة المرور على الأقل 8 أحرف وتحتوي على أحرف كبيرة وصغيرة وأرقام</p>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium">
                        تأكيد كلمة المرور الجديدة
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-medium">التحقق بخطوتين</h3>
                    <p className="text-sm text-gray-500">تفعيل التحقق بخطوتين يعزز أمان حسابك من خلال طلب رمز تحقق إضافي عند تسجيل الدخول</p>
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 ml-3 text-hrm-blue" />
                        <div>
                          <h4 className="font-medium">التحقق عبر الهاتف</h4>
                          <p className="text-sm text-gray-500">استخدام رسائل SMS للتحقق</p>
                        </div>
                      </div>
                      <Button variant="outline">تفعيل</Button>
                    </div>
                  </div>
                  
                  <CardFooter className="flex justify-end px-0">
                    <Button type="submit">حفظ التغييرات</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات الإشعارات</CardTitle>
                <CardDescription>تحكم في كيفية تلقي الإشعارات من النظام</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">إشعارات النظام</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h4 className="font-medium">طلبات الإجازة</h4>
                            <p className="text-sm text-gray-500">إشعارات بشأن طلبات الإجازة الجديدة والموافقات</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hrm-blue"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h4 className="font-medium">طلبات السلف</h4>
                            <p className="text-sm text-gray-500">إشعارات بشأن طلبات السلف الجديدة والموافقات</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hrm-blue"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h4 className="font-medium">المغادرات</h4>
                            <p className="text-sm text-gray-500">إشعارات بشأن طلبات المغادرة الجديدة والموافقات</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hrm-blue"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h4 className="font-medium">التأمين الصحي</h4>
                            <p className="text-sm text-gray-500">إشعارات بشأن تحديثات وطلبات التأمين الصحي</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hrm-blue"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">طريقة استلام الإشعارات</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h4 className="font-medium">البريد الإلكتروني</h4>
                            <p className="text-sm text-gray-500">استلام الإشعارات عبر البريد الإلكتروني</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hrm-blue"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <h4 className="font-medium">إشعارات النظام</h4>
                            <p className="text-sm text-gray-500">إشعارات داخل النظام</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-hrm-blue"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardFooter className="flex justify-end px-0">
                    <Button type="submit">حفظ التغييرات</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الحساب</CardTitle>
                <CardDescription>إدارة إعدادات حسابك والخصوصية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 ml-3 text-hrm-blue mt-0.5" />
                      <div>
                        <h3 className="font-medium">تصدير بياناتك</h3>
                        <p className="text-sm text-gray-500 mb-3">يمكنك تصدير نسخة من بياناتك الشخصية بتنسيق CSV</p>
                        <Button variant="outline" size="sm">تصدير البيانات</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-red-200 bg-red-50 rounded-md space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 p-1 rounded-full ml-3">
                        <Lock className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-red-600">حذف الحساب</h3>
                        <p className="text-sm text-red-500 mb-3">سيؤدي حذف حسابك إلى إزالة جميع بياناتك من النظام بشكل نهائي</p>
                        <Button variant="outline" size="sm" className="border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600">
                          حذف حسابي
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ProfileSettings;
