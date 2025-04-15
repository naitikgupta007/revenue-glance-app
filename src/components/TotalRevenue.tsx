
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon } from 'lucide-react';

export const TotalRevenue = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          Total Revenue
        </CardTitle>
        <div className="flex items-center space-x-1 text-green-500">
          <ArrowUpIcon size={16} />
          <span className="text-sm">12%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$5,234</div>
        <p className="text-xs text-gray-500 mt-1">
          vs. $4,675 last period
        </p>
      </CardContent>
    </Card>
  );
};
