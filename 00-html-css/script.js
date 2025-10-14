// Filtrado de Libros

const contenedorLibros = document.querySelector(".book-list");
contenedorLibros.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  if (card) {
    alert("Libro Clickeado");
  }
});

const filtros = document.querySelectorAll(".filter-item");
filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    const filtroSeleccionado = filtro.textContent;
    const libros = contenedorLibros.querySelectorAll(".book-card");

    switch (filtroSeleccionado) {
      case "Todos":
        libros.forEach((libro) => libro.classList.remove("reading", "read", "pending"));
        break;

      case "Leyendo":
        libros.forEach((libro) => libro.classList.remove("read", "pending"));
        libros.forEach((libro) => libro.classList.add("reading"));
        break;

      case "Leídos":
        libros.forEach((libro) => libro.classList.remove("reading", "pending"));
        libros.forEach((libro) => libro.classList.add("read"));
        break;

      case "Pendientes":
        libros.forEach((libro) => libro.classList.remove("reading", "read"));
        libros.forEach((libro) => libro.classList.add("pending"));
        break;
    }
  });
});

// Modal
