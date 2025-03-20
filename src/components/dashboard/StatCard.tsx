
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change, 
  className 
}) => {
  return (
    <div className={cn("card-glass p-6", className)}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          
          {change && (
            <div className="mt-2 flex items-center">
              <span 
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded",
                  change.isPositive 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                )}
              >
                {change.isPositive ? "+" : "-"}{change.value}
              </span>
              <span className="text-xs text-gray-500 mr-2">منذ الشهر الماضي</span>
            </div>
          )}
        </div>
        
        <div className="rounded-full p-3 bg-hrm-lightBlue text-hrm-blue">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
