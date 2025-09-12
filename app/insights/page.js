"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Leaf, Zap } from "lucide-react";

const insights = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Night-time Usage Alert",
    description:
      "Your energy use between 10 PM – 6 AM is 20% higher than average. Consider switching off standby devices.",
    color: "text-yellow-600",
  },
  {
    id: 2,
    icon: Leaf,
    title: "Green Energy Tip",
    description:
      "47% of your energy came from renewable sources this week. Aim for 60% by shifting laundry and cooling to daytime hours.",
    color: "text-green-600",
  },
  {
    id: 3,
    icon: Zap,
    title: "Efficiency Boost",
    description:
      "Replacing incandescent bulbs with LEDs in your living room could cut 5 kWh per week.",
    color: "text-emerald-700",
  },
];

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-700">💡 Insights & Tips</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return (
            <Card
              key={insight.id}
              className="shadow-lg border-emerald-200 hover:shadow-xl transition"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <Icon className={insight.color} size={20} />
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
