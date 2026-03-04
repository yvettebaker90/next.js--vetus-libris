import Image from "next/image";

type BookCardProps = {
  title: string;
  author: string;
  image: string;
};

export default function BookCard({ title, author, image }: BookCardProps) {
  return (
    <div className="rounded-xl shadow-md bg-card-bg">
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
        <div className="px-4">
        <h3 className="mt-2 font-semibold text-xl text-card-title">{title}</h3>
        <p className="text-sm text-white mb-4 mt-2">{author}</p></div>
    </div>
  );
}