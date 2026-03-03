export default function Sidebar() {
  return (
    <aside className="h-screen border-r bg-white p-6">
      <h2 className="text-lg font-semibold">Vetus Libris</h2>

      <nav className="mt-6 flex flex-col gap-2 text-sm">
        <a className="rounded px-3 py-2 hover:bg-zinc-100" href="/dashboard">
          Dashboard
        </a>
        <a className="rounded px-3 py-2 hover:bg-zinc-100" href="/dashboard/products">
          My Collection
        </a>
        <a className="rounded px-3 py-2 hover:bg-zinc-100" href="/dashboard/orders">
          My Bookmarks
        </a>
      </nav>
    </aside>
  );
}