"use client";

import Image from "next/image";
import { useBookmarks } from "@/lib/bookmark-context";
import { Bookmark } from "lucide-react";

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  image: string;
};

export default function BookCard({ id, title, author, image }: BookCardProps) {
  const { toggleBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(id);

  function handleBookmark(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();

    toggleBookmark({ id, title, author, image });
  }

  return (
    <div className="relative rounded-sm shadow-md bg-gray-100 px-2 py-2">
      
      {/* Bookmark button */}
      <button
        type="button"
        onClick={handleBookmark}
        className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow cursor-pointer"
      >
        <Bookmark className={`h-5 w-5 ${bookmarked ? "text-yellow-500 fill-current" : "text-gray-400"}`} />
      </button>

      <div className="relative aspect-[2/3] rounded-t-sm overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="ml-2 mt-2 min-w-0">
        <p
          className="font-bold text-md text-black line-clamp-2 cursor-help"
          title={title}
        >
          {title}
        </p>

        <p className="text-sm text-gray-900 mb-2 mt-1 line-clamp-1">
          {author}
        </p>
      </div>
    </div>
  );
}