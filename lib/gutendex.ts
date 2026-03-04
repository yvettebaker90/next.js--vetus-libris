const API_URL = "https://gutendex.com/";

export async function getBooks() {
  const res = await fetch(`${API_URL}/books/`);

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}