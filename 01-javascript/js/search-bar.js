const searchBar = document.querySelector("#search-bar");
searchBar.addEventListener("input", () => {
  let query = searchBar.value.toLowerCase(); // lo que el usuario escribe en la barra de búsqueda
  let books = document.querySelectorAll(".book-card"); // actualizar la lista de libros cada vez que el usuario escribe

  books.forEach((book) => {
    const title = book.querySelector(".book-title").innerText.toLowerCase();
    const author = book.querySelector(".book-author").innerText.toLowerCase();
    const isShown = title.includes(query) || author.includes(query);

    // Verificar si el título o el autor incluyen la consulta de búsqueda
    book.classList.toggle("hidden", !isShown);
  });
});
