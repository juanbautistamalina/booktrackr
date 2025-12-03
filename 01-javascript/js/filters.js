// Aplicando delegación de eventos para los filtros
const contenedorFiltros = document.querySelector(".filter-list");
contenedorFiltros.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#search-bar").value = ""; // limpiar la barra de búsqueda al aplicar un filtro

  // verficar si el elemento clickeado es un filtro
  if (event.target.classList.contains("filter-item")) {
    const filtroSeleccionado = event.target.getAttribute("data-filter"); // el atributo data-filter es el que contiene el estado del filtro
    const libros = document.querySelectorAll(".book-card"); // actualizar la lista de libros cada vez que se filtra
    
    libros.forEach((libro) => {
      const estado = libro.getAttribute("data-status");
      const isShown = filtroSeleccionado === "all" || filtroSeleccionado === estado;
      libro.classList.toggle("hidden", !isShown);
    });
  }
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
