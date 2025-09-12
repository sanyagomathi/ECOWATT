import Sidebar from "@/components/Sidebar";

export default function MissionsLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar current="/missions" />
      <main className="flex-1 p-8 bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}
