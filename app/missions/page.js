"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Recycle, Sun } from "lucide-react";

const missions = [
  {
    id: 1,
    icon: Award,
    title: "Eco Champion",
    description: "Reduce weekly usage by 10%.",
    progress: 70,
    color: "text-emerald-700",
  },
  {
    id: 2,
    icon: Recycle,
    title: "Green Saver",
    description: "Use 60% renewable energy this week.",
    progress: 40,
    color: "text-green-600",
  },
  {
    id: 3,
    icon: Sun,
    title: "Daylight Hero",
    description: "Shift 30% of appliance use to daytime.",
    progress: 90,
    color: "text-yellow-600",
  },
];

export default function MissionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-700">🎯 Missions & Challenges</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {missions.map((mission) => {
          const Icon = mission.icon;
          return (
            <Card
              key={mission.id}
              className="shadow-lg border-emerald-200 hover:shadow-xl transition"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-800">
                  <Icon className={mission.color} size={20} />
                  {mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{mission.description}</p>
                <Progress value={mission.progress} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">
                  {mission.progress}% complete
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

