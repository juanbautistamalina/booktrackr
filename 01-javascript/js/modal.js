const contenedorLibros = document.querySelector(".book-list");
const modal = document.getElementById("modal");
const modalTitle = modal.querySelector("#modal-title");
const modalAuthor = modal.querySelector("#modal-author");
const modalStatus = modal.querySelector("#modal-status");
const btnSave = modal.querySelector("button");
let modalMode = "add"; // "add" o "edit"

// Edición de Libros
contenedorLibros.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  modalMode = "edit";

  if (card) {
    modal.classList.remove("hidden"); // mostrar el modal

    // obtener el titulo, autor y estado del libro y mostrarlos en el modal
    modalTitle.value = card.querySelector(".book-title").textContent;
    modalAuthor.value = card.querySelector(".book-author").textContent;
    modalStatus.value = card.querySelector(".book-status").textContent;

    // editar las propiedades del libro
    btnSave.addEventListener("click", (event) => {
      event.preventDefault();
      card.querySelector(".book-title").textContent = modalTitle.value;
      card.querySelector(".book-author").textContent = modalAuthor.value;
      card.querySelector(".book-status").textContent = modalStatus.value;
      modal.classList.add("hidden");
    });
  }
});

modal.querySelector(".close").addEventListener("click", () => {
  modal.classList.add("hidden");
});



// Agregar un nuevo libro
const btnAdd = document.querySelector(".navbar-info").querySelector("button");
btnAdd.addEventListener("click", () => {
  modalMode = "add";
  modal.classList.remove("hidden");
  modalTitle.value = "";
  modalAuthor.value = "";
  modalStatus.value = "reading";
});

contenedorLibros.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  if (card) {
    modalMode = "edit";
    modal.classList.remove("hidden");

    modalTitle.value = card.querySelector(".book-title").textContent;
    modalAuthor.value = card.querySelector(".book-author").textContent;
    modalStatus.value = card.querySelector(".book-status").textContent;
  }
});

btnSave.addEventListener("click", (event) => {
  event.preventDefault();

  if (modalMode === "add") {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <img src="../img/books/default.jpg" alt="${modalTitle.value}">
      <h2 class="book-title">${modalTitle.value}</h2>
      <p class="book-author">${modalAuthor.value}</p>
      <p class="book-status">${modalStatus.value}</p>
    `;
    contenedorLibros.appendChild(bookCard);
  }

  if (modalMode === "edit") {
    const card = document.querySelector(`[data-id="${modal.dataset.id}"]`);
    if (card) {
      card.querySelector(".book-title").textContent = modalTitle.value;
      card.querySelector(".book-author").textContent = modalAuthor.value;
      card.querySelector(".book-status").textContent = modalStatus.value;
    }
  }

  modal.classList.add("hidden");
});


// Error: Al editar un libro, este se edita correctamente, pero al editar otro libro, el anterior se edita también
// Solución: 
