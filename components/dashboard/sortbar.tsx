"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "default";
  const currentPage = searchParams.get("page") || "1";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    params.set("page", "1");
    router.push(`/dashboard?${params.toString()}`);
  }

  return (
    <div className="px-4 pt-6">
      <select
        title="Sort books"
        value={currentSort}
        onChange={handleChange}
        className="rounded-xl border bg-white px-3 py-2 text-black"
      >
        <option value="default">Sort by</option>
        <option value="title-asc">Title A–Z</option>
        <option value="title-desc">Title Z–A</option>
        <option value="author-asc">Author A–Z</option>
        <option value="author-desc">Author Z–A</option>
        <option value="popular">Most downloaded</option>
      </select>
    </div>
  );
}