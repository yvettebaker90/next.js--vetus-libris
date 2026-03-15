"use client";

import Link from "next/link";
import { Bookmark, BookOpen, House } from "lucide-react";
import { usePathname } from "next/navigation";

const pages = [
  { 
    name: "Dashboard",
    href: "/dashboard",
    Icon: House 
  },
  { 
    name: "My Collection",
    href: "/#",
    Icon: BookOpen
  },
  { 
    name: "My Bookmarks", 
    href: "/dashboard/bookmarks", 
    Icon: Bookmark 
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen border-r border-button">
      <div className="p-6">
        <h2 className="text-4xl font-semibold font-cinzel">
          <span className="text-card-title">Vetus</span> Libris
        </h2>
      </div>

      <nav className="mt-20 flex flex-col text-sm gap-10">
        {pages.map((page) => {
          const isActive = pathname === page.href;

          return (
            <Link
              key={page.name}
              href={page.href}
              className={`pl-10 pr-4 py-4 font-raleway text-xl flex items-center gap-2
              hover:bg-card hover:text-gray-300 hover:underline underline-offset-8 rounded-r-4xl
              ${isActive ? "bg-nav-active mr-10 text-card-title" : ""}`}
            >
              <page.Icon className="mr-2 text-card-title" />
              {page.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}