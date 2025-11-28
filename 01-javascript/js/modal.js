const contenedorLibros = document.querySelector(".book-list");

// Variables del Modal
const modal = document.getElementById("modal");

const modalTitle = modal.querySelector("#modal-title");
const modalAuthor = modal.querySelector("#modal-author");
const modalStatus = modal.querySelector("#modal-status");
const modalNotes = modal.querySelector("#modal-notes");
const modalGenre = modal.querySelector("#modal-genre");
const btnSave = modal.querySelector("button");

let modalTitleHeader = modal.querySelector("h2");
let modalMode = "add"; // valores posibles -> "add" o "edit"
let selectedCard = null;

// Funcionalidad de Edición de Libros
contenedorLibros.addEventListener("click", (event) => {
  modalTitleHeader.textContent = "Editar Detalles del Libro";
  const card = event.target.closest(".book-card");
  if (card) {
    modalMode = "edit";
    selectedCard = card;
    modal.classList.remove("hidden"); // mostrar el modal

    // obtener los datos del libro y mostrarlos en el modal
    modalTitle.value = card.querySelector(".book-title").textContent;
    modalAuthor.value = card.querySelector(".book-author").textContent;
    modalStatus.value = card.querySelector(".book-status").textContent;
    modalNotes.value = card.querySelector(".book-notes").textContent;
    modalGenre.value = card.querySelector(".book-genre").textContent;
  }
});

modal.querySelector(".close").addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Funcionalidad de Agregar un nuevo libro (botón)
const btnAdd = document.querySelector(".add-book-button");
btnAdd.addEventListener("click", () => {
  modalTitleHeader.textContent = "Agregar Nuevo Libro";
  modalMode = "add";
  selectedCard = null;

  // mostrar modal
  modal.classList.remove("hidden");

  // vaciar campos del modal
  modalTitle.value = "";
  modalAuthor.value = "";
  modalStatus.value = "reading";
  modalNotes.value = "";
  modalGenre.value = "";
});

// Funcionalidad de Guardado de Libros (botón)
btnSave.addEventListener("click", (event) => {
  event.preventDefault();

  if (modalMode === "add") {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <img class="default-cover" src="../img/books/default.jpg" alt="${modalTitle.value}">
      <h2 class="book-title">${modalTitle.value}</h2>
      <p class="book-author">${modalAuthor.value}</p>
      <p class="book-status" value="${modalStatus.value}">${modalStatus.value}</p>
      <p class="book-notes hidden">${modalNotes.value}</p>
      <p class="book-genre hidden">${modalGenre.value}</p>
    `;
    contenedorLibros.appendChild(bookCard);
  }

  if (modalMode === "edit") {
    if (selectedCard) {
      // cambiar los valores (internos) del libro seleccionado por lo introducido en los inputs del modal
      selectedCard.querySelector(".book-title").textContent = modalTitle.value;
      selectedCard.querySelector(".book-author").textContent = modalAuthor.value;
      selectedCard.querySelector(".book-status").textContent = modalStatus.value;
      selectedCard.querySelector(".book-status").setAttribute("value", modalStatus.value);
      selectedCard.querySelector(".book-notes").textContent = modalNotes.value;
      selectedCard.querySelector(".book-genre").textContent = modalGenre.value;
    }
  }

  modal.classList.add("hidden");
});
