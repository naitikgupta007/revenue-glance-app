
import React from 'react';
import { CalendarIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sales Dashboard</h1>
        <p className="text-gray-500 mt-1">Track your business performance</p>
      </div>
      <div className="flex items-center gap-3">
        <CalendarIcon className="text-gray-400" size={20} />
        <Select defaultValue="30">
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="365">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
