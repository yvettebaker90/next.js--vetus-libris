import BookCard from "@/components/dashboard/books/book-card";
import { getBooks } from "@/lib/gutendex";

const placeholderImage = "@/public/placeholder_cover.png";

export default async function BookGrid() {
  const books = await getBooks();

  return (
    <div className="px-35 py-15">
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-12">
      {books.results.map((book: any) => (
        <BookCard 
          key={book.id}
          title={book.title}
          author={book.authors?.[0]?.name ?? "Unknown Author"}
          image={book.formats?.["image/jpeg"] ?? placeholderImage}
          />
      ))}
    </div>
    </div>
  );
}

// placeholder image: https://pixabay.com/illustrations/ribbon-bookmark-education-school-1202756/