const filtros = document.querySelectorAll(".filter-item");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    const filtroSeleccionado = filtro.getAttribute("data-filter");
    const libros = document.querySelectorAll(".book-card");

    libros.forEach((libro) => {
      const estado = libro.querySelector("p:last-child").getAttribute("value");

      if (estado === filtroSeleccionado || filtroSeleccionado === "all") {
        libro.classList.remove("hidden");
      } else {
        libro.classList.add("hidden");
      }
    });
  });
});
