import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/dashboard/sidebar";
import Header from "@/components/dashboard/dashboard/header";
import { BookmarkProvider } from "@/lib/bookmark-context";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BookmarkProvider>
      <div className="min-h-screen grid grid-cols-[300px_1fr]">
        <Sidebar />

        <div className="flex flex-col">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </BookmarkProvider>
  );
}