import Link from "next/link";
import BookCard from "@/components/dashboard/books/book-card";
import { getBooks } from "@/lib/gutendex";

const placeholderImage = "/placeholder_cover.png";

type Props = {
  page?: number;
  sort?: string;
};

export default async function BookGrid({ page = 1, sort = "default" }: Props) {
  const books = await getBooks(undefined, undefined, page);

  const sortedBooks = [...books.results];

  if (sort === "title-asc") {
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "title-desc") {
    sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sort === "author-asc") {
    sortedBooks.sort((a, b) =>
      (a.authors?.[0]?.name ?? "").localeCompare(b.authors?.[0]?.name ?? "")
    );
  }

  if (sort === "author-desc") {
    sortedBooks.sort((a, b) =>
      (b.authors?.[0]?.name ?? "").localeCompare(a.authors?.[0]?.name ?? "")
    );
  }

  if (sort === "popular") {
    sortedBooks.sort((a, b) => b.download_count - a.download_count);
  }

  return (
    <div className="px-4 py-15">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
        {sortedBooks.map((book: any) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.authors?.[0]?.name ?? "Unknown Author"}
            image={book.formats?.["image/jpeg"] ?? placeholderImage}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {books.previous && (
          <Link
            href={`/dashboard?page=${page - 1}&sort=${sort}`}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            Previous
          </Link>
        )}

        {books.next && (
          <Link
            href={`/dashboard?page=${page + 1}&sort=${sort}`}
            className="rounded-xl bg-black px-4 py-2 text-white"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

// placeholder image: https://pixabay.com/illustrations/ribbon-bookmark-education-school-1202756/