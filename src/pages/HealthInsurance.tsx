
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import StatCard from "../components/dashboard/StatCard";
import { Heart, Plus, Users, AlertCircle } from "lucide-react";

const HealthInsurance = () => {
  // Mock data for health insurance stats
  const stats = [
    {
      title: "الموظفين المشمولين",
      value: 120,
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "شركات التأمين",
      value: 3,
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "بطاقات منتهية",
      value: 5,
      icon: <AlertCircle className="h-6 w-6" />,
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 page-transition">
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
          <h2 className="text-xl font-bold">التأمين الصحي</h2>
          
          <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
            <Plus className="h-4 w-4" />
            إضافة بطاقة تأمين
          </Button>
        </div>
        
        {/* Content Placeholder */}
        <div className="card-glass p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">قسم التأمين الصحي</h3>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            يمكنك من خلال هذه الصفحة إدارة التأمين الصحي للموظفين ومتابعة بطاقات التأمين وتواريخ الانتهاء
          </p>
          <div className="mt-6">
            <Button className="bg-hrm-blue hover:bg-hrm-blue/90 gap-2">
              <Plus className="h-4 w-4" />
              إضافة بطاقة تأمين
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HealthInsurance;
