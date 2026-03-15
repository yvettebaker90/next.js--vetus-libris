const API_URL = "https://gutendex.com/books";

export async function getBooks(query?: string, type?: string, page: number = 1) {
  const params = new URLSearchParams();

  params.set("page", String(page));

  if (query) {
    if (type === "genre") {
      params.set("topic", query);
    } else {
      params.set("search", query);
    }
  }

  const url = `${API_URL}?${params.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}