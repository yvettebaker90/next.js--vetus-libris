import Image from "next/image";

type BookCardProps = {
  title: string;
  author: string;
  image: string;
};

export default function BookCard({ title, author, image }: BookCardProps) {
  return (
    <div className="rounded-xl bg-card-bg p-4 shadow-md bg-card-bg">
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 font-semibold text-lg text-card-title">{title}</h3>
      <p className="text-sm text-white">{author}</p>
    </div>
  );
}