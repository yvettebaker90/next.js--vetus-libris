"use client";

import Image from "next/image";
import { useState } from "react";
import { useBookmarks } from "@/lib/bookmark-context";
import { Bookmark } from "lucide-react";
import BookDetails from "@/components/dashboard/books/book-details";

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  image: string;
  description?: string;
  genre?: string;
};

export default function BookCard({
  id,
  title,
  author,
  image,
  description,
  genre,
}: BookCardProps) {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const [isOpen, setIsOpen] = useState(false);

  const bookmarked = isBookmarked(id);

  function handleBookmark(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    toggleBookmark({
      id,
      title,
      author,
      image,
      description,
      genre
    });
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="relative cursor-pointer rounded-sm bg-gray-100 px-1 py-1 shadow-md"
>
        <button
          type="button"
          title="Bookmark"
          onClick={handleBookmark}
          className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow cursor-pointer"
        >
          <Bookmark
            className={`h-5 w-5 ${
              bookmarked ? "text-yellow-500 fill-current" : "text-gray-400"
            }`}
          />
        </button>

        <div className="relative aspect-[3/4] overflow-hidden rounded-t-sm">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="ml-2 mt-2 min-w-0">
          <p
            className="line-clamp-2 text-md font-bold text-black"
            title={title}
          >
            {title}
          </p>
          <p className="mb-2 mt-1 line-clamp-1 text-sm text-gray-900">
            {author}
          </p>
        </div>
      </div>

      {isOpen && (
        <BookDetails
          title={title}
          author={author}
          image={image}
          genre={genre}
          description={description}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}