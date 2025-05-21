
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBg?: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, iconBg = 'bg-doctor-purple/10', change, className }: StatCardProps) => {
  return (
    <div className={cn("metric-card", className)}>
      <div className="flex justify-between items-start">
        <div>
          <div className="stat-value">{value}</div>
          <div className="stat-label mt-1">{title}</div>
          {change && (
            <div className={`text-xs flex items-center mt-2 ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              <span className="font-medium">
                {change.isPositive ? '+' : ''}{change.value}%
              </span>
              <span className="ml-1 text-doctor-neutral-gray">vs last week</span>
            </div>
          )}
        </div>
        <div className={`${iconBg} p-2 rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
