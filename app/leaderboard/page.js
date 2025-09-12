"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const neighbours = [
  { id: 1, name: "Parleen", usage: 110, renewable: 65 },
  { id: 2, name: "Apoorva", usage: 125, renewable: 55 },
  { id: 3, name: "You", usage: 131, renewable: 47 },
  { id: 4, name: "Parla", usage: 150, renewable: 40 },
  { id: 5, name: "are yrr", usage: 170, renewable: 35 },
];

export default function LeaderboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-emerald-700">
        🏆 Neighbourhood Leaderboard
      </h1>

      <Card className="shadow-lg border-emerald-200">
        <CardHeader>
          <CardTitle className="text-emerald-800">Top Energy Savers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-emerald-100">
                <TableHead className="w-[50px]">Rank</TableHead>
                <TableHead>Neighbour</TableHead>
                <TableHead className="text-right">Usage (kWh)</TableHead>
                <TableHead className="text-right">Renewable %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {neighbours.map((n, index) => (
                <TableRow
                  key={n.id}
                  className={
                    n.name === "You"
                      ? "bg-emerald-50 font-semibold"
                      : "hover:bg-emerald-50"
                  }
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="flex items-center gap-3">
                    <Avatar className="bg-emerald-200 text-emerald-900">
                      <AvatarFallback>
                        {n.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {n.name}
                  </TableCell>
                  <TableCell className="text-right">{n.usage}</TableCell>
                  <TableCell
                    className={`text-right ${
                      n.renewable > 50
                        ? "text-green-600 font-bold"
                        : "text-red-500"
                    }`}
                  >
                    {n.renewable}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

