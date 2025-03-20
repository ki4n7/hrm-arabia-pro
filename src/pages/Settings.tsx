
import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Globe, Users, FileText, Lock, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم حفظ التغييرات",
      description: "تم تحديث إعدادات النظام بنجاح",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-5 mb-6">
            <TabsTrigger value="general">عام</TabsTrigger>
            <TabsTrigger value="appearance">المظهر</TabsTrigger>
            <TabsTrigger value="organization">بيانات المؤسسة</TabsTrigger>
            <TabsTrigger value="permissions">الصلاحيات</TabsTrigger>
            <TabsTrigger value="backup">النسخ الاحتياطي</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>الإعدادات العامة</CardTitle>
                <CardDescription>إدارة الإعدادات العامة للنظام</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="systemName" className="block text-sm font-medium">
                        اسم النظام
                      </label>
                      <input
                        id="systemName"
                        type="text"
                        defaultValue="نظام إدارة الموارد البشرية"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="systemEmail" className="block text-sm font-medium">
                        البريد الإلكتروني للنظام
                      </label>
                      <input
                        id="systemEmail"
                        type="email"
                        defaultValue="system@example.com"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                      <p className="text-xs text-gray-500 mt-1">يستخدم هذا البريد لإرسال الإشعارات والتنبيهات من النظام</p>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="timezone" className="block text-sm font-medium">
                        المنطقة الزمنية
                      </label>
                      <select
                        id="timezone"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        defaultValue="Asia/Riyadh"
                      >
                        <option value="Asia/Riyadh">الرياض (GMT+3)</option>
                        <option value="Asia/Dubai">دبي (GMT+4)</option>
                        <option value="Asia/Kuwait">الكويت (GMT+3)</option>
                        <option value="Africa/Cairo">القاهرة (GMT+2)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="dateFormat" className="block text-sm font-medium">
                        تنسيق التاريخ
                      </label>
                      <select
                        id="dateFormat"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        defaultValue="dd/MM/yyyy"
                      >
                        <option value="dd/MM/yyyy">DD/MM/YYYY</option>
                        <option value="MM/dd/yyyy">MM/DD/YYYY</option>
                        <option value="yyyy-MM-dd">YYYY-MM-DD</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium mb-2">
                        خيارات العرض
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="showEmployeePhotos"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-hrm-blue border-gray-300 rounded focus:ring-hrm-blue"
                          />
                          <label htmlFor="showEmployeePhotos" className="ml-2 text-sm text-gray-700">
                            عرض صور الموظفين في القوائم
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="enableAdvanceSearch"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-hrm-blue border-gray-300 rounded focus:ring-hrm-blue"
                          />
                          <label htmlFor="enableAdvanceSearch" className="ml-2 text-sm text-gray-700">
                            تمكين البحث المتقدم
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="enableNotifications"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-hrm-blue border-gray-300 rounded focus:ring-hrm-blue"
                          />
                          <label htmlFor="enableNotifications" className="ml-2 text-sm text-gray-700">
                            تمكين الإشعارات التلقائية
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
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>إعدادات المظهر</CardTitle>
                <CardDescription>تخصيص مظهر النظام وواجهة المستخدم</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium mb-3">
                        الألوان الرئيسية
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="space-y-2 text-center">
                          <div className="h-10 rounded-md bg-hrm-blue"></div>
                          <span className="text-xs">الرئيسي</span>
                        </div>
                        <div className="space-y-2 text-center">
                          <div className="h-10 rounded-md bg-hrm-lightBlue"></div>
                          <span className="text-xs">الثانوي</span>
                        </div>
                        <div className="space-y-2 text-center">
                          <div className="h-10 rounded-md bg-green-500"></div>
                          <span className="text-xs">النجاح</span>
                        </div>
                        <div className="space-y-2 text-center">
                          <div className="h-10 rounded-md bg-red-500"></div>
                          <span className="text-xs">التنبيه</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-medium">
                        الشعار
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 bg-gray-100 rounded p-2 w-24 h-24 flex items-center justify-center text-center">
                          <span className="text-sm text-gray-500">الشعار الحالي</span>
                        </div>
                        <div>
                          <Button variant="outline" size="sm" className="mb-2">
                            تغيير الشعار
                          </Button>
                          <p className="text-xs text-gray-500">يفضل أن يكون الشعار بصيغة PNG وبدقة عالية</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="language" className="block text-sm font-medium">
                        اللغة الافتراضية
                      </label>
                      <select
                        id="language"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        defaultValue="ar"
                      >
                        <option value="ar">العربية</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="fontsize" className="block text-sm font-medium">
                        حجم الخط الافتراضي
                      </label>
                      <select
                        id="fontsize"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        defaultValue="medium"
                      >
                        <option value="small">صغير</option>
                        <option value="medium">متوسط</option>
                        <option value="large">كبير</option>
                      </select>
                    </div>
                  </div>
                  
                  <CardFooter className="flex justify-end px-0">
                    <Button type="submit">حفظ التغييرات</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="organization">
            <Card>
              <CardHeader>
                <CardTitle>بيانات المؤسسة</CardTitle>
                <CardDescription>إدارة المعلومات الأساسية للمؤسسة</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="orgName" className="block text-sm font-medium">
                        اسم المؤسسة
                      </label>
                      <input
                        id="orgName"
                        type="text"
                        defaultValue="شركة التقنية الحديثة"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="legalName" className="block text-sm font-medium">
                          الاسم القانوني
                        </label>
                        <input
                          id="legalName"
                          type="text"
                          defaultValue="شركة التقنية الحديثة للخدمات المحدودة"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="taxId" className="block text-sm font-medium">
                          الرقم الضريبي
                        </label>
                        <input
                          id="taxId"
                          type="text"
                          defaultValue="12345678901234"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="orgPhone" className="block text-sm font-medium">
                          رقم الهاتف
                        </label>
                        <input
                          id="orgPhone"
                          type="tel"
                          defaultValue="+966 11 234 5678"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="orgEmail" className="block text-sm font-medium">
                          البريد الإلكتروني
                        </label>
                        <input
                          id="orgEmail"
                          type="email"
                          defaultValue="info@moderntech.com"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="orgAddress" className="block text-sm font-medium">
                        العنوان
                      </label>
                      <input
                        id="orgAddress"
                        type="text"
                        defaultValue="طريق الملك فهد، حي العليا، الرياض"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="orgCity" className="block text-sm font-medium">
                          المدينة
                        </label>
                        <input
                          id="orgCity"
                          type="text"
                          defaultValue="الرياض"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="orgPostalCode" className="block text-sm font-medium">
                          الرمز البريدي
                        </label>
                        <input
                          id="orgPostalCode"
                          type="text"
                          defaultValue="12345"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="orgCountry" className="block text-sm font-medium">
                          الدولة
                        </label>
                        <input
                          id="orgCountry"
                          type="text"
                          defaultValue="المملكة العربية السعودية"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="orgWebsite" className="block text-sm font-medium">
                        الموقع الإلكتروني
                      </label>
                      <input
                        id="orgWebsite"
                        type="url"
                        defaultValue="https://www.moderntech.sa"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hrm-blue/20"
                      />
                    </div>
                  </div>
                  
                  <CardFooter className="flex justify-end px-0">
                    <Button type="submit">حفظ التغييرات</Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="permissions">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الصلاحيات</CardTitle>
                <CardDescription>تهيئة أدوار المستخدمين والصلاحيات في النظام</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">الأدوار الحالية</h3>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-md flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">مدير النظام</h4>
                            <p className="text-sm text-gray-500">صلاحيات كاملة للنظام</p>
                          </div>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                        <div className="p-4 border rounded-md flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">مدير الموارد البشرية</h4>
                            <p className="text-sm text-gray-500">صلاحيات إدارة الموظفين والإجازات</p>
                          </div>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                        <div className="p-4 border rounded-md flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">محاسب</h4>
                            <p className="text-sm text-gray-500">صلاحيات النظام المالي</p>
                          </div>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                        <div className="p-4 border rounded-md flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">موظف</h4>
                            <p className="text-sm text-gray-500">صلاحيات محدودة للوصول للبيانات الشخصية</p>
                          </div>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" className="gap-1">
                          <Users className="h-4 w-4 ml-1" />
                          إضافة دور جديد
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">إعدادات الأمان</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            id="enableTwoFactor"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-hrm-blue border-gray-300 rounded focus:ring-hrm-blue"
                          />
                          <label htmlFor="enableTwoFactor" className="ml-2 text-sm text-gray-700">
                            تفعيل التحقق بخطوتين لجميع المستخدمين
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="passwordPolicy"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-hrm-blue border-gray-300 rounded focus:ring-hrm-blue"
                          />
                          <label htmlFor="passwordPolicy" className="ml-2 text-sm text-gray-700">
                            تطبيق سياسة قوية لكلمات المرور
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="autoLogout"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-hrm-blue border-gray-300 rounded focus:ring-hrm-blue"
                          />
                          <label htmlFor="autoLogout" className="ml-2 text-sm text-gray-700">
                            تسجيل الخروج التلقائي بعد فترة عدم نشاط
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
          
          <TabsContent value="backup">
            <Card>
              <CardHeader>
                <CardTitle>النسخ الاحتياطي واستعادة البيانات</CardTitle>
                <CardDescription>إدارة النسخ الاحتياطي للبيانات واستعادتها</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-start">
                      <Database className="h-5 w-5 ml-3 text-hrm-blue mt-0.5" />
                      <div>
                        <h3 className="font-medium">إنشاء نسخة احتياطية</h3>
                        <p className="text-sm text-gray-500 mb-3">إنشاء نسخة احتياطية كاملة من بيانات النظام</p>
                        <Button variant="outline" size="sm">إنشاء نسخة الآن</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md space-y-4">
                    <h3 className="font-medium">النسخ الاحتياطية الحالية</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">backup_20230615.zip</p>
                          <p className="text-sm text-gray-500">15/06/2023 - 10:30</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">استعادة</Button>
                          <Button variant="outline" size="sm">تنزيل</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <div>
                          <p className="font-medium">backup_20230601.zip</p>
                          <p className="text-sm text-gray-500">01/06/2023 - 09:15</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">استعادة</Button>
                          <Button variant="outline" size="sm">تنزيل</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">backup_20230515.zip</p>
                          <p className="text-sm text-gray-500">15/05/2023 - 11:45</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">استعادة</Button>
                          <Button variant="outline" size="sm">تنزيل</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full ml-3">
                        <FileText className="h-5 w-5 text-hrm-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">جدولة النسخ الاحتياطي</h3>
                        <p className="text-sm text-gray-500 mb-3">إعداد جدولة تلقائية للنسخ الاحتياطي</p>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input
                              id="dailyBackup"
                              type="radio"
                              name="backupSchedule"
                              className="h-4 w-4 text-hrm-blue border-gray-300 focus:ring-hrm-blue"
                            />
                            <label htmlFor="dailyBackup" className="ml-2 text-sm text-gray-700">
                              يومي
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="weeklyBackup"
                              type="radio"
                              name="backupSchedule"
                              defaultChecked
                              className="h-4 w-4 text-hrm-blue border-gray-300 focus:ring-hrm-blue"
                            />
                            <label htmlFor="weeklyBackup" className="ml-2 text-sm text-gray-700">
                              أسبوعي
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="monthlyBackup"
                              type="radio"
                              name="backupSchedule"
                              className="h-4 w-4 text-hrm-blue border-gray-300 focus:ring-hrm-blue"
                            />
                            <label htmlFor="monthlyBackup" className="ml-2 text-sm text-gray-700">
                              شهري
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardFooter className="flex justify-end px-0 mt-6">
                  <Button>حفظ التغييرات</Button>
                </CardFooter>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
