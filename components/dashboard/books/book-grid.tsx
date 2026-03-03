import BookCard from "@/components/dashboard/books/book-card";

export default function BookGrid() {
  const books = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      image: "/profile_picture.svg",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      image: "/profile_picture.svg",
    },
    {
        title: "The Night Circus",
        author: "Erin Morgenstern",
        image: "/profile_picture.svg",
    },
    { title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "/profile_picture.svg",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-10">
      {books.map((book) => (
        <BookCard key={book.title} {...book} />
      ))}
    </div>
  );
}