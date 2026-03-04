import Image from "next/image";

type BookCardProps = {
  title: string;
  author: string;
  image: string;
};

export default function BookCard({ title, author, image }: BookCardProps) {
  return (
    <div className="rounded-sm shadow-md bg-gray-100 px-2 py-2">
      <div className="relative aspect-[2/3] rounded-t-sm overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
        <div className="ml-2 mt-2 min-w-0">
        <p className="font-bold text-md text-black line-clamp-2 cursor-help" title={title}>{title}</p>
        <p className="text-sm text-gray-900 mb-2 mt-1 line-clamp-1">{author}</p></div>
    </div>
  );
}