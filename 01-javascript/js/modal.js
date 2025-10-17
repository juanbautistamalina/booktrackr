const contenedorLibros = document.querySelector(".book-list");
const modal = document.getElementById('modal');
const modalTitle = modal.querySelector('#modal-title');
const modalAuthor = modal.querySelector('#modal-author');
const modalStatus = modal.querySelector('#modal-status');
const btnSave = modal.querySelector('button');

contenedorLibros.addEventListener("click", (event) => {
  const card = event.target.closest(".book-card");
  
  if (card) {  
    modal.classList.remove('hidden'); // mostrar el modal
  
    // Obtener el titulo, autor y estado del libro y mostrarlos en el modal
    modalTitle.value = card.querySelector('.book-title').textContent;
    modalAuthor.value = card.querySelector('.book-author').textContent;
    modalStatus.value = card.querySelector('.book-status').textContent;
    
    // Editar las propiedades del libro
    btnSave.addEventListener('click', (event) => {
      event.preventDefault()
      card.querySelector('.book-title').textContent = modalTitle.value;
      card.querySelector('.book-author').textContent = modalAuthor.value;
      card.querySelector('.book-status').textContent = modalStatus.value;
      modal.classList.add('hidden');
    });    
  }
})


modal.querySelector('.close').addEventListener('click', () => {
  modal.classList.add('hidden');
});

