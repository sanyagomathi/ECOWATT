import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar current="/dashboard" />
      <main className="flex-1 p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        {children}
      </main>
    </div>
  );
}
