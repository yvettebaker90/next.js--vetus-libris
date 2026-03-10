import BookCard from "@/components/dashboard/books/book-card";
import { getBooks } from "@/lib/gutendex";

const placeholderImage = "/placeholder_cover.png";

type Props = {
  query?: string;
  type?: string;
};

export default async function SearchResults({ query, type }: Props) {
  const data = await getBooks(query, type);

  if (!data.results.length) {
  return (
    <div className="text-center py-20 text-lg">
      <span className="font-bold">We searched every dusty shelf… nothing!</span>
      <p className="text-sm mt-2 text-gray-300">
        Even the librarians are confused by that search.<br />
        Try again and better<br />
        <span className="text-xl">🧐</span>
      </p>
    </div>
  );
}

  return (
    <div className="px-35 py-15">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12">
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
    </div>
  );
}