"use client";

import { useBookmarks } from "@/lib/bookmark-context";
import BookCard from "@/components/dashboard/books/book-card";

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();

  if (bookmarks.length === 0) {
  return (
    <div className="text-center py-20 text-lg">
      <span className="font-bold">Your bookmark shelf is empty...</span>
      <p className="text-sm mt-2 text-gray-300">
        ...and we're disappointed.<br />
        What are you even doing here? <br />
        Go and find a book worth bookmarking asap.<br />
        <span className="font-bold text-gray-300">Chop chop!</span>
      </p>
    </div>
  );
}

  return (
    <div className="px-35 py-15">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12">
        {bookmarks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}