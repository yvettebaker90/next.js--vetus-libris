import BookGrid from "@/components/dashboard/books/book-grid";
import SearchResults from "@/components/dashboard/searchbar/search-result";
import SortBar from "@/components/dashboard/sortbar";

type Props = {
  searchParams: Promise<{
    query?: string;
    type?: string;
    page?: string;
    sort?: string;
  }>;
};

export default async function DashboardPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params?.query;
  const type = params?.type;
  const page = Number(params?.page) || 1;
  const sort = params?.sort || "default";

  return (
    <div className="space-y-6">
      {!query && <SortBar />}

      {query ? (
        <SearchResults query={query} type={type} />
      ) : (
        <BookGrid page={page} sort={sort} />
      )}
    </div>
  );
}