const API_URL = import.meta.env.VITE_API_URL;

export async function fetchBooks() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/books`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { data: data.books };
}

export async function createBook(bookData) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });

  const data = await response.json();
  return { data: data.book };
}

export async function updateBook(id, bookData) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });

  const data = await response.json();
  return { data: data.book };
}

export async function deleteBook(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return { data: data.book };
}
