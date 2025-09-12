import Sidebar from "@/components/Sidebar";

export default function InsightsLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar current="/insights" />
      <main className="flex-1 p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}

