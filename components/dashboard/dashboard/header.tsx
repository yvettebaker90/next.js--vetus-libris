"use client";

import Image from "next/image";
import Searchbar from "@/components/dashboard/searchbar/searchbar";

export default function Header() {
  return (
    <header className="grid grid-flow-col justify-items-end gap-6 px-6 py-4 mt-2">
      <div className="flex-1 min-w-2xl">
        <Searchbar />
      </div>

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