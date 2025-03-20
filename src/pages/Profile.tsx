
import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, Calendar, MapPin, Building, Shield } from "lucide-react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-hrm-lightBlue">
                  <User className="h-12 w-12 text-hrm-blue" />
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">أحمد محمد</h2>
              <p className="text-gray-500 mb-2">مدير الموارد البشرية</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="h-4 w-4 ml-1" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="w-full mt-4 space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 ml-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                    <p className="font-medium">ahmed@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 ml-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">رقم الهاتف</p>
                    <p className="font-medium">+966 55 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 ml-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">تاريخ التعيين</p>
                    <p className="font-medium">15/05/2020</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 ml-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">القسم</p>
                    <p className="font-medium">إدارة الموارد البشرية</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="details">التفاصيل الشخصية</TabsTrigger>
              <TabsTrigger value="employment">بيانات العمل</TabsTrigger>
              <TabsTrigger value="permissions">الصلاحيات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>المعلومات الشخصية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">الاسم الكامل</p>
                      <p className="font-medium">أحمد محمد عبد الله</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">تاريخ الميلاد</p>
                      <p className="font-medium">15/05/1985</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">الجنسية</p>
                      <p className="font-medium">سعودي</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">رقم الهوية</p>
                      <p className="font-medium">1234567890</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">الحالة الاجتماعية</p>
                      <p className="font-medium">متزوج</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">العنوان</p>
                      <p className="font-medium">حي النخيل، الرياض</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="employment">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات العمل</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">المسمى الوظيفي</p>
                      <p className="font-medium">مدير الموارد البشرية</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">القسم</p>
                      <p className="font-medium">إدارة الموارد البشرية</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">تاريخ التعيين</p>
                      <p className="font-medium">15/05/2020</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">نوع العقد</p>
                      <p className="font-medium">دوام كامل</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">الراتب الأساسي</p>
                      <p className="font-medium">15,000 ريال</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">البدلات</p>
                      <p className="font-medium">3,000 ريال</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="permissions">
              <Card>
                <CardHeader>
                  <CardTitle>الصلاحيات والأدوار</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg flex items-start">
                      <Shield className="h-5 w-5 ml-3 text-hrm-blue mt-0.5" />
                      <div>
                        <h3 className="font-medium">مدير النظام</h3>
                        <p className="text-sm text-gray-500">صلاحيات كاملة للنظام مع إمكانية الوصول لكافة الوظائف والإعدادات</p>
                      </div>
                    </div>
                    
                    <h3 className="font-medium text-lg mt-4 mb-2">الوحدات والصلاحيات</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">الموظفين</h4>
                        <p className="text-sm text-gray-500">صلاحيات كاملة</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">العطل والإجازات</h4>
                        <p className="text-sm text-gray-500">صلاحيات كاملة</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">السلف المالية</h4>
                        <p className="text-sm text-gray-500">صلاحيات كاملة</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">المغادرات</h4>
                        <p className="text-sm text-gray-500">صلاحيات كاملة</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">التأمين الصحي</h4>
                        <p className="text-sm text-gray-500">صلاحيات كاملة</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">الضمان الاجتماعي</h4>
                        <p className="text-sm text-gray-500">صلاحيات كاملة</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
