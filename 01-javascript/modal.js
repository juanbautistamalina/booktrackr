const contenedorLibros = document.querySelector(".book-list");
const modal = document.getElementById('modal');
const modalTitle = modal.querySelector('#modal-title');
const modalAuthor = modal.querySelector('#modal-author');
const modalStatus = modal.querySelector('#modal-status');

contenedorLibros.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  if (card) {
    
    modal.classList.remove('hidden');
    

    // Obtener el titulo, autor y estado del libro y mostrarlos en el modal
    modalTitle.value = card.querySelector('.book-title').textContent;
    modalAuthor.value = card.querySelector('.book-author').textContent;
    modalStatus.value = card.querySelector('.book-status').textContent;
    
  }
})


modal.querySelector('.close').addEventListener('click', () => {
  modal.classList.add('hidden');
});

