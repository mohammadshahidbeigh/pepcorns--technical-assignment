import React from "react";
import {LucideIcon} from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  iconColor,
}) => {
  return (
    <div className="flex items-center">
      <Icon className={`h-8 w-8 ${iconColor} mr-4`} />
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
