"use client";

import Link from "next/link";
import { Home, Users, Lightbulb, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Leaderboard", href: "/leaderboard", icon: Users },
  { name: "Insights", href: "/insights", icon: Lightbulb },
  { name: "Missions", href: "/missions", icon: Award },
];

export default function Sidebar({ current = "/dashboard" }) {
  return (
    <aside className="w-64 bg-emerald-900 text-white min-h-screen p-4 flex flex-col">
      {/* Logo */}
      <h2 className="text-2xl font-extrabold mb-8 text-emerald-200">
        ⚡ ECOWATT!
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = current === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-emerald-700",
                active && "bg-emerald-700 font-semibold"
              )}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-sm text-emerald-300">
        © 2025 Ecowatt
      </div>
    </aside>
  );
}
