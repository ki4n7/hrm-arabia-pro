
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import EmployeeCard from "../components/dashboard/EmployeeCard";
import { Users, Calendar, DollarSign, LogOut, Heart, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Mock data for stats
  const stats = [
    {
      title: "إجمالي الموظفين",
      value: 125,
      icon: <Users className="h-6 w-6" />,
      change: { value: "5%", isPositive: true }
    },
    {
      title: "طلبات الإجازات",
      value: 8,
      icon: <Calendar className="h-6 w-6" />,
      change: { value: "2%", isPositive: false }
    },
    {
      title: "طلبات السلف",
      value: 4,
      icon: <DollarSign className="h-6 w-6" />,
      change: { value: "10%", isPositive: true }
    },
    {
      title: "المغادرات",
      value: 12,
      icon: <LogOut className="h-6 w-6" />,
      change: { value: "3%", isPositive: false }
    }
  ];

  // Mock data for recent employees
  const recentEmployees = [
    {
      id: "1",
      name: "أحمد محمد",
      position: "مهندس برمجيات",
      department: "تقنية المعلومات",
      email: "ahmed@example.com",
      phone: "0112345678",
    },
    {
      id: "2",
      name: "سارة علي",
      position: "مصممة جرافيك",
      department: "التسويق",
      email: "sara@example.com",
      phone: "0123456789",
    },
    {
      id: "3",
      name: "محمد خالد",
      position: "محاسب",
      department: "المالية",
      email: "mohamed@example.com",
      phone: "0123456789",
    }
  ];

  // Mock data for alerts
  const alerts = [
    {
      id: "1",
      title: "طلب إجازة جديد",
      message: "طلب إجازة جديد من سارة علي بانتظار الموافقة",
      time: "منذ ساعتين",
      type: "info"
    },
    {
      id: "2",
      title: "تنبيه انتهاء عقد",
      message: "سينتهي عقد أحمد محمد خلال 15 يوم",
      time: "منذ 3 ساعات",
      type: "warning"
    },
    {
      id: "3",
      title: "تحديث بيانات مطلوب",
      message: "يجب تحديث بيانات التأمين الصحي لـ 5 موظفين",
      time: "منذ يوم واحد",
      type: "error"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 page-transition">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              change={stat.change}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Employees */}
          <div className="col-span-2">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">الموظفين الجدد</h2>
              <Button 
                variant="outline" 
                size="sm"
                className="text-hrm-blue border-hrm-blue/30 hover:bg-hrm-blue/10"
              >
                عرض الكل
              </Button>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {recentEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  position={employee.position}
                  department={employee.department}
                  email={employee.email}
                  phone={employee.phone}
                  onView={(id) => console.log("View employee", id)}
                  onEdit={(id) => console.log("Edit employee", id)}
                  onDelete={(id) => console.log("Delete employee", id)}
                />
              ))}
            </div>
          </div>

          {/* Alerts / Notifications */}
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">آخر التنبيهات</h2>
            </div>
            <div className="card-glass overflow-hidden">
              <div className="divide-y">
                {alerts.map((alert) => (
                  <div key={alert.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full mr-3 ${
                        alert.type === 'info' ? 'bg-blue-100 text-blue-600' : 
                        alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{alert.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-hrm-blue hover:text-hrm-blue/80 hover:bg-hrm-blue/10"
                >
                  عرض جميع التنبيهات
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <StatCard
                title="التأمين الصحي"
                value="98%"
                icon={<Heart className="h-5 w-5" />}
                className="p-4"
              />
              <StatCard
                title="الضمان الاجتماعي"
                value="100%"
                icon={<Shield className="h-5 w-5" />}
                className="p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
