
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-03-15', revenue: 4000 },
  { date: '2024-03-16', revenue: 3000 },
  { date: '2024-03-17', revenue: 5000 },
  { date: '2024-03-18', revenue: 2780 },
  { date: '2024-03-19', revenue: 1890 },
  { date: '2024-03-20', revenue: 2390 },
  { date: '2024-03-21', revenue: 3490 },
];

export const RevenueChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Revenue Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#0EA5E9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
