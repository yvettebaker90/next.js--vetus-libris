export default function Sidebar() {
  return (
    <aside className="h-screen border-r p-6">
      <h2 className="text-lg font-semibold">Vetus Libris</h2>

      <nav className="mt-6 flex flex-col gap-2 text-sm">
        <a className="rounded px-3 py-2 bg-nav-active" href="/dashboard">
          Dashboard
        </a>
        <a className="rounded px-3 py-2 " href="/dashboard/products">
          My Collection
        </a>
        <a className="rounded px-3 py-2 " href="/dashboard/orders">
          My Bookmarks
        </a>
      </nav>
    </aside>
  );
}