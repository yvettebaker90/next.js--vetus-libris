const API_URL = "https://gutendex.com/books";

export async function getBooks(query?: string, type?: string) {
  let url = API_URL;

  if (query) {
    const params = new URLSearchParams();

    if (type === "genre") {
      params.set("topic", query);
    } else {
      params.set("search", query);
    }

    url += `?${params.toString()}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}