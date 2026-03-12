"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type BookDetailsProps = {
  title: string;
  author: string;
  image: string;
  genre?: string;
  description?: string;
  onClose: () => void;
};

export default function BookDetails({
  title,
  author,
  image,
  genre,
  description,
  onClose,
}: BookDetailsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:flex-row md:gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-black cursor-pointer"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="relative mx-auto mb-4 h-[360px] w-[240px] shrink-0 md:mb-0 md:h-[460px] md:w-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-lg object-contain bg-gray-100"
          />
        </div>

        <div className="flex flex-col text-black">
          <h2 className="mb-2 text-3xl font-bold">{title}</h2>
          <p className="mb-2 text-lg font-medium">{author}</p>

          {genre && (
            <p className="mb-4">
              <span className="font-semibold">Genre:</span> {genre}
            </p>
          )}

          <div>
            <h3 className="mb-2 text-xl font-semibold">Summary:</h3>
            <p className="leading-7 text-gray-700">
              {description || "No summary available."}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}