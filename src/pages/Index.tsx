
import React from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { TotalRevenue } from '@/components/TotalRevenue';
import { RevenueChart } from '@/components/RevenueChart';
import { CategoryChart } from '@/components/CategoryChart';
import { TopProduct } from '@/components/TopProduct';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <TotalRevenue />
          <TopProduct />
          <RevenueChart />
          <CategoryChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
