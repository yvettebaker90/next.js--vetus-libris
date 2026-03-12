"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  description?: string;
  genre?: string;
};

type BookmarkContextType = {
  bookmarks: Book[];
  toggleBookmark: (book: Book) => void;
  isBookmarked: (id: number) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarks, setBookmarks] = useState<Book[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");

    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks, isLoaded]);

  function toggleBookmark(book: Book) {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === book.id);

      if (exists) {
        return prev.filter((b) => b.id !== book.id);
      }

      return [...prev, book];
    });
  }

  function isBookmarked(id: number) {
    return bookmarks.some((book) => book.id === id);
  }

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, toggleBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);

  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }

  return context;
}