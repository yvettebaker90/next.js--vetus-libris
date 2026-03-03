import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">

      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-zinc-50">
          {children}
        </main>
      </div>
    </div>
  );
}