import BookCard from "@/components/dashboard/books/book-card";

export default function BookGrid() {
  const books = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      image: "/",
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      image: "/",
    },
    {
        title: "The Night Circus",
        author: "Erin Morgenstern",
        image: "/",
    },
    { title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "/",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
}