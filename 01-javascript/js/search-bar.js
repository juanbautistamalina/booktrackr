const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", () => {
  let query = searchBar.value.toLowerCase(); // lo que el usuario escribe en la barra de búsqueda

  let books = document.querySelectorAll(".book-card"); // actualizar la lista de libros cada vez que el usuario escribe

  books.forEach((book) => {
    let title = book.querySelector(".book-title").innerText.toLowerCase();
    let author = book.querySelector(".book-author").innerText.toLowerCase();

    // Verificar si el título o el autor incluyen la consulta de búsqueda
    if (title.includes(query) || author.includes(query)) {
      book.classList.remove("hidden");
    } else {
      book.classList.add("hidden");
    }
  });
});
