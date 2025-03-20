
import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import StatCard from "../components/dashboard/StatCard";
import { LogOut, Plus, Clock, Users, QrCode, CheckCircle, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QRCodeGenerator from "../components/dashboard/QRCodeGenerator";
import QRCodeScanner from "../components/dashboard/QRCodeScanner";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Departures = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  const [attendanceDialogOpen, setAttendanceDialogOpen] = useState(false);
  const [departureDialogOpen, setDepartureDialogOpen] = useState(false);
  
  // Mock data for departure stats
  const stats = [
    {
      title: "إجمالي المغادرات اليوم",
      value: 15,
      icon: <LogOut className="h-6 w-6" />,
    },
    {
      title: "المغادرات المعتمدة",
      value: 12,
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "المغادرات المتأخرة",
      value: 3,
      icon: <Users className="h-6 w-6" />,
    }
  ];

  // Generate a unique code for the organization
  const organizationCode = "org-12345";
  const currentDate = new Date().toISOString().split('T')[0];
  
  // QR code values
  const attendanceQRValue = `${organizationCode}/attendance/${currentDate}`;
  const departureQRValue = `${organizationCode}/departure/${currentDate}`;

  // Handle QR scan for attendance
  const handleAttendanceScan = (data: string) => {
    // In a real application, you would validate this data against your backend
    if (data.includes('attendance')) {
      toast.success("تم تسجيل الحضور بنجاح", {
        description: new Date().toLocaleTimeString('ar-SA'),
        icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      });
    } else {
      toast.error("رمز QR غير صالح للحضور", {
        description: "يرجى التأكد من مسح الرمز الصحيح",
        icon: <XCircle className="h-4 w-4 text-red-500" />,
      });
    }
    setAttendanceDialogOpen(false);
  };

  // Handle QR scan for departure
  const handleDepartureScan = (data: string) => {
    // In a real application, you would validate this data against your backend
    if (data.includes('departure')) {
      toast.success("تم تسجيل المغادرة بنجاح", {
        description: new Date().toLocaleTimeString('ar-SA'),
        icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      });
    } else {
      toast.error("رمز QR غير صالح للمغادرة", {
        description: "يرجى التأكد من مسح الرمز الصحيح",
        icon: <XCircle className="h-4 w-4 text-red-500" />,
      });
    }
    setDepartureDialogOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 page-transition">
        {/* Tabs Navigation */}
        <Tabs 
          defaultValue="overview" 
          value={currentTab}
          onValueChange={setCurrentTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="attendance">تسجيل الحضور</TabsTrigger>
            <TabsTrigger value="departure">تسجيل المغادرة</TabsTrigger>
          </TabsList>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                />
              ))}
            </div>
            
            {/* Actions Bar */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">سجل المغادرات</h2>
              
              <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
                <Plus className="h-4 w-4" />
                تسجيل مغادرة جديدة
              </Button>
            </div>
            
            {/* Content Placeholder */}
            <div className="card-glass p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <LogOut className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">قسم المغادرات</h3>
              <p className="text-gray-500 mt-2 max-w-md mx-auto">
                يمكنك من خلال هذه الصفحة تسجيل وإدارة مغادرات الموظفين وتتبع المغادرات المعتمدة والمتأخرة
              </p>
              <div className="mt-6">
                <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
                  <Plus className="h-4 w-4" />
                  تسجيل مغادرة جديدة
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Attendance Tab Content */}
          <TabsContent value="attendance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QR Code Generator for Attendance */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-medium text-center mb-4">إنشاء رمز QR للحضور</h3>
                <p className="text-gray-500 text-sm text-center mb-6">
                  قم بتوليد رمز QR ليقوم الموظفون بمسحه لتسجيل حضورهم
                </p>
                <QRCodeGenerator 
                  value={attendanceQRValue} 
                  title="رمز الحضور اليومي" 
                />
              </div>
              
              {/* QR Scanner Button for Attendance */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-medium text-center mb-4">مسح رمز QR للحضور</h3>
                <p className="text-gray-500 text-sm text-center mb-6">
                  قم بمسح رمز QR الخاص بالحضور لتسجيل حضورك
                </p>
                <div className="flex flex-col items-center justify-center h-64">
                  <QrCode className="h-16 w-16 text-hrm-blue mb-4" />
                  <p className="text-gray-500 mb-6">قم بمسح رمز QR لتسجيل حضورك</p>
                  
                  <Dialog open={attendanceDialogOpen} onOpenChange={setAttendanceDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
                        <Camera className="h-4 w-4" />
                        فتح الماسح الضوئي
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>مسح رمز QR للحضور</DialogTitle>
                        <DialogDescription>
                          قم بتوجيه الكاميرا نحو رمز QR لتسجيل حضورك
                        </DialogDescription>
                      </DialogHeader>
                      <QRCodeScanner 
                        onScan={handleAttendanceScan} 
                        title="مسح رمز الحضور" 
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Departure Tab Content */}
          <TabsContent value="departure" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* QR Code Generator for Departure */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-medium text-center mb-4">إنشاء رمز QR للمغادرة</h3>
                <p className="text-gray-500 text-sm text-center mb-6">
                  قم بتوليد رمز QR ليقوم الموظفون بمسحه لتسجيل مغادرتهم
                </p>
                <QRCodeGenerator 
                  value={departureQRValue} 
                  title="رمز المغادرة اليومي" 
                />
              </div>
              
              {/* QR Scanner Button for Departure */}
              <div className="card-glass p-6">
                <h3 className="text-lg font-medium text-center mb-4">مسح رمز QR للمغادرة</h3>
                <p className="text-gray-500 text-sm text-center mb-6">
                  قم بمسح رمز QR الخاص بالمغادرة لتسجيل مغادرتك
                </p>
                <div className="flex flex-col items-center justify-center h-64">
                  <QrCode className="h-16 w-16 text-hrm-blue mb-4" />
                  <p className="text-gray-500 mb-6">قم بمسح رمز QR لتسجيل مغادرتك</p>
                  
                  <Dialog open={departureDialogOpen} onOpenChange={setDepartureDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
                        <Camera className="h-4 w-4" />
                        فتح الماسح الضوئي
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>مسح رمز QR للمغادرة</DialogTitle>
                        <DialogDescription>
                          قم بتوجيه الكاميرا نحو رمز QR لتسجيل مغادرتك
                        </DialogDescription>
                      </DialogHeader>
                      <QRCodeScanner 
                        onScan={handleDepartureScan} 
                        title="مسح رمز المغادرة" 
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Departures;
