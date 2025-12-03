// Utilidad: convierte el valor interno del estado a su representación visual
function getStatusText(statusValue) {
  return statusValue === "reading"
    ? "Leyendo"
    : statusValue === "read"
    ? "Leído"
    : "Pendiente";
}

// --- Referencias al DOM ---
const contenedorLibros = document.querySelector(".book-list");
const modal = document.getElementById("modal");

const modalTitleHeader = modal.querySelector("h2");
const modalTitle = modal.querySelector("#modal-title");
const modalAuthor = modal.querySelector("#modal-author");
const modalStatus = modal.querySelector("#modal-status");
const modalGenre = modal.querySelector("#modal-genre");
const modalNotes = modal.querySelector("#modal-notes");
const btnSave = modal.querySelector("button");
const btnAdd = document.querySelector(".add-book-button");

// Estado del modal
let modalMode = "add"; // "add" o "edit"
let selectedCard = null;


// Cerrar el modal
modal.querySelector(".close").addEventListener("click", () => {
  modal.classList.add("hidden");
});


// Inicializar el modal para crear un nuevo libro
btnAdd.addEventListener("click", () => {
  modalMode = "add";
  selectedCard = null;
  modalTitleHeader.textContent = "Agregar Nuevo Libro";
  
  // reiniciar campos
  modalTitle.value = "";
  modalAuthor.value = "";
  modalStatus.value = "reading";
  modalGenre.value = "";
  modalNotes.value = "";
  
  // mostrar modal
  modal.classList.remove("hidden");

});


// Abre el modal prellenado para editar una card seleccionada
contenedorLibros.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  if (!card) return;

  modalMode = "edit";
  selectedCard = card;
  modalTitleHeader.textContent = "Editar Detalles del Libro";

  // obtener los datos del libro y mostrarlos en el modal
  modalTitle.value = card.querySelector(".book-title").textContent;
  modalAuthor.value = card.querySelector(".book-author").textContent;
  modalStatus.value = card.getAttribute("data-status");
  modalGenre.value = card.getAttribute("data-genre");
  modalNotes.value = card.querySelector(".book-notes").textContent;

  modal.classList.remove("hidden"); 
});


// Crear o editar un libro según el modo del modal
btnSave.addEventListener("click", (event) => {
  event.preventDefault();
  const statusText = getStatusText(modalStatus.value)

  if (modalMode === "add") {
    const bookCard = document.createElement("article");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-status", modalStatus.value);
    bookCard.setAttribute("data-genre", modalGenre.value);

    bookCard.innerHTML = `
      <img class="default-cover" src="../img/books/default.jpg" alt="${modalTitle.value}">
      <h2 class="book-title">${modalTitle.value}</h2>
      <p class="book-author">${modalAuthor.value}</p>
      <p class="book-status">${statusText}</p>
      <p class="book-notes hidden">${modalNotes.value}</p>
    `;

    contenedorLibros.appendChild(bookCard);
  }

  if (modalMode === "edit" && selectedCard) {
    // cambiar los valores (internos) del libro por lo introducido en los inputs del modal
    selectedCard.querySelector(".book-title").textContent = modalTitle.value;
    selectedCard.querySelector(".book-author").textContent = modalAuthor.value;
    selectedCard.setAttribute("data-status", modalStatus.value);
    selectedCard.querySelector(".book-status").textContent = statusText;
    selectedCard.setAttribute("data-genre", modalGenre.value);
    selectedCard.querySelector(".book-notes").textContent = modalNotes.value;
  }

  modal.classList.add("hidden");
});
