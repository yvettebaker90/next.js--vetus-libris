import BookCard from "@/components/dashboard/books/book-card";
import { getBooks } from "@/lib/gutendex";

const placeholderImage = "/placeholder_cover.png";

type Props = {
  query?: string;
  type?: string;
};

export default async function SearchResults({ query, type }: Props) {
  const data = await getBooks(query, type);
  const count = data.results.length;

  return (
    <div className="px-35 py-15 text-center">
      <p className="mb-8 text-lg text-gray-300">
        {count === 0 ? (
          <>
            The archives found absolutely{" "}
            <span className="underline italic">nothing</span> for{" "}
            <span className="font-semibold">"{query}"</span>.
          </>
        ) : (
          <>
            The librarians managed to dig up {count} book{count !== 1 ? "s" : ""} for "{query}".
          </>
        )}
      </p>

      {count === 0 ? (
        <div className="py-16">
          <span className="font-bold text-xl">
            We searched every dusty shelf… nothing!
          </span>

          <p className="mt-2 text-md text-gray-300">
            Even the librarians are confused by that search.
            <br />
            Try again and better.
            <br />
            <span className="text-xl">🧐</span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12 text-left">
          {data.results.map((book: any) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.authors?.[0]?.name ?? "Unknown Author"}
              image={book.formats?.["image/jpeg"] ?? placeholderImage}
            />
          ))}
        </div>
      )}
    </div>
  );
}