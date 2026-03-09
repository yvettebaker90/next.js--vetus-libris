"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [type] = useState("title");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      router.push("/dashboard");
      return;
    }

    router.push(
      `/dashboard?query=${encodeURIComponent(trimmedQuery)}&type=${type}`
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-xl bg-white text-black placeholder:text-gray-500 px-3 py-2"
      />

      <button className="px-4 py-2 bg-black text-white rounded-xl cursor-pointer" type="submit">
        Search
      </button>
    </form>
  );
}