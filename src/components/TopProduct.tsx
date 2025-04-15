
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUpIcon } from 'lucide-react';

export const TopProduct = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Product</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <TrendingUpIcon className="text-blue-500" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Wireless Earbuds</h3>
            <p className="text-sm text-gray-500">342 units sold</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
