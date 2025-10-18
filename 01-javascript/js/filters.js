const filtros = document.querySelectorAll(".filter-item"); // seleccionar todos los filtros

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    const filtroSeleccionado = filtro.getAttribute("data-filter");
    const libros = document.querySelectorAll(".book-card"); // actualizar la lista de libros cada vez que se filtra

    libros.forEach((libro) => {
      const estado = libro.querySelector("p:last-child").getAttribute("value");
      
      // para cada libro, verificar si su estado coincide con el filtro seleccionado
      if (estado === filtroSeleccionado || filtroSeleccionado === "all") {
        libro.classList.remove("hidden");
      } else {
        libro.classList.add("hidden");
      }
    });
  });
});
