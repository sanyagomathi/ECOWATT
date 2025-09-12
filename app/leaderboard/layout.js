import Sidebar from "@/components/Sidebar";

export default function LeaderboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar stays fixed on the left */}
      <Sidebar current="/leaderboard" />

      {/* Page content */}
      <main className="flex-1 p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}

