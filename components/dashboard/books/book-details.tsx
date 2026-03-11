import Image from "next/image";

export default function BookDetails() {
  return (
    <div className="flex flex-col items-center bg-neutral-primary-soft p-6 rounded shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl bg-white">
        <Image className="object-cover rounded-base md:h-auto md:w-48 mb-4 md:mb-0" src="/placeholder_cover.png" alt="Book Cover"
        width={100}
        height={100} />
        <div className="flex flex-col justify-between md:p-4 leading-normal text-black">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">Booktitle</h5>
            <p className="text-body font-semibold">Author</p>
            <p className="text-body font-semibold">Published</p>
            <p className="text-body font-semibold">Genre</p>
            <p className="text-body font-semibold">Description</p>
            <div>
                <button type="button" className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Read book
                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </button>
            </div>
        </div>
    </div>
  );
}