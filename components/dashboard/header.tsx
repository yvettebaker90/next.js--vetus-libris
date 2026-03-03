import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-6 px-6 py-4">
      
      <div className="flex-1 max-w-2xl">
        <div className="h-11 w-full rounded-xl border bg-zinc-50 px-4 flex items-center">
          <span className="text-sm text-zinc-500">Search...</span>
        </div>
      </div>

      {/* Profile */}
      <div className="relative h-15 w-15 overflow-hidden rounded-full">
        <Image
          src="/profile_picture.svg"
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>
    </header>
  );
}



// profile icon: Image by <a href="https://pixabay.com/users/prettysleepy-2973588/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5458225">Amy</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5458225">Pixabay</a>