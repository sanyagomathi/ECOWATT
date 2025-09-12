"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", usage: 12, renewable: 6 },
  { day: "Tue", usage: 18, renewable: 9 },
  { day: "Wed", usage: 15, renewable: 8 },
  { day: "Thu", usage: 20, renewable: 10 },
  { day: "Fri", usage: 22, renewable: 12 },
  { day: "Sat", usage: 25, renewable: 13 },
  { day: "Sun", usage: 19, renewable: 11 },
];

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-emerald-700 mb-8">
        ⚡ Ecowatt Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-emerald-700">Total Energy Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-800">131 kWh</p>
            <p className="text-sm text-emerald-600">This week</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-green-700">Renewable Share</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-800">47%</p>
            <p className="text-sm text-green-600">Solar & Wind</p>
          </CardContent>
        </Card>

        <Card className="border-lime-200 shadow-lg hover:shadow-xl transition">
          <CardHeader>
            <CardTitle className="text-lime-700">Neighbours Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-lime-800">#3</p>
            <p className="text-sm text-lime-600">Out of 10</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Card className="mt-8 border-green-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-green-800">Weekly Usage Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="usage" className="w-full">
            <TabsList className="bg-emerald-100 rounded-lg mb-4">
              <TabsTrigger
                value="usage"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Total Usage
              </TabsTrigger>
              <TabsTrigger
                value="renewable"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
              >
                Renewable vs Non-Renewable
              </TabsTrigger>
            </TabsList>

            <TabsContent value="usage" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="day" stroke="#065f46" />
                  <YAxis stroke="#065f46" />
                  <Tooltip />
                  <Bar dataKey="usage" fill="#10b981" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="renewable" className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="day" stroke="#166534" />
                  <YAxis stroke="#166534" />
                  <Tooltip />
                  <Bar dataKey="renewable" fill="#22c55e" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="usage" fill="#f87171" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
