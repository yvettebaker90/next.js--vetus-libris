import BookGrid from "@/components/dashboard/books/book-grid";
import SearchResults from "@/components/dashboard/searchbar/search-result";

type Props = {
  searchParams: Promise<{
    query?: string;
    type?: string;
  }>;
};

export default async function DashboardPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params?.query;
  const type = params?.type;

  return (
    <div className="space-y-6">
      {query ? (
        <SearchResults query={query} type={type} />
      ) : (
        <BookGrid />
      )}
    </div>
  );
}