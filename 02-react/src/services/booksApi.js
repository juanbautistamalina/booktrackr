import data from "../data.json";

// Simular llamada a API (hasta que desarrolle la API real)
export async function fetchBooks({ status, genre, search } = {}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = [...data];

      if (status) {
        result = result.filter(book => book.status === status);
      }

      if (genre) {
        result = result.filter(book => book.genre === genre);
      }

      if (search) {
        result = result.filter(book =>
          book.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      resolve({ data: result });
    }, 800);
  });
}
