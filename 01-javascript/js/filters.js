const contenedorFiltros = document.querySelector("#filter-status");
const filterGenre = document.querySelector("#filter-genre");
const searchBar = document.querySelector("#search-bar");
const filterItems = document.querySelectorAll(".filter-item");

let libros = document.querySelectorAll(".book-card"); 


// Filtro por estado (leyendo, leído y pendiente) (agregar .active para resaltar el filtro seleccionado)
contenedorFiltros.addEventListener("click", (event) => {
  event.preventDefault();
  searchBar.value = "";

  // verficar si el elemento clickeado es un filtro
  if (event.target.classList.contains("filter-item")) {
    
    filterItems.forEach((filtro) => {
    filtro.classList.remove("active");
   })

    event.target.classList.add("active");


    const filtroSeleccionado = event.target.getAttribute("data-filter"); // el atributo data-filter es el que contiene el estado del filtro
    libros = document.querySelectorAll(".book-card") // actualizar la lista de libros cada vez que se filtra

    libros.forEach((libro) => {
      const estado = libro.getAttribute("data-status");
      const isShown = filtroSeleccionado === "all" || filtroSeleccionado === estado;
      libro.classList.toggle("hidden", !isShown);
    });
  }
});


// Filtro por género
filterGenre.addEventListener("change", (event) => {
  const generoSeleccionado = event.target.value;
  libros = document.querySelectorAll(".book-card");

  libros.forEach((libro) => {
    const genero = libro.getAttribute("data-genre").toLowerCase();
    const isShown = generoSeleccionado === "" || generoSeleccionado === genero;
    libro.classList.toggle("hidden", !isShown)
  })

})

// Filtro con barra de búsqueda
searchBar.addEventListener("input", () => {
  let query = searchBar.value.toLowerCase(); // lo que el usuario escribe en la barra de búsqueda
  libros = document.querySelectorAll(".book-card"); // actualizar la lista de libros cada vez que el usuario escribe

  libros.forEach((libro) => {
    const title = libro.querySelector(".book-title").innerText.toLowerCase();
    const author = libro.querySelector(".book-author").innerText.toLowerCase();
    const isShown = title.includes(query) || author.includes(query);

    // Verificar si el título o el autor incluyen la consulta de búsqueda
    libro.classList.toggle("hidden", !isShown);
  });
});


// Aplicando un evento para cada filtro de manera individual
// const filtros = document.querySelectorAll(".filter-item"); // seleccionar todos los filtros
// filtros.forEach((filtro) => {
//   filtro.addEventListener("click", () => {
//     searchBar.value = ""; // limpiar la barra de búsqueda al aplicar un filtro
//     const filtroSeleccionado = filtro.getAttribute("data-filter");
//     const libros = document.querySelectorAll(".book-card"); // actualizar la lista de libros cada vez que se filtra

//     libros.forEach((libro) => {
//       const estado = libro.querySelector("p.book-status").getAttribute("value");

//       // para cada libro, verificar si su estado coincide con el filtro seleccionado
//       if (estado === filtroSeleccionado || filtroSeleccionado === "all") {
//         libro.classList.remove("hidden");
//       } else {
//         libro.classList.add("hidden");
//       }
//     });
//   });
// });
