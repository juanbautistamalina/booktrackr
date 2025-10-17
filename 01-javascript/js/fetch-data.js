const container = document.querySelector('.book-list'); // seleccionar el contenedor de los libros

fetch("../js/data.json") // obtener los datos de los libros
    .then((response) => response.json()) // convertir los datos a json
    .then((books) => { // para cada libro, crear los elementos HTML
        books.forEach(book => {
            const bookCard = document.createElement("div"); 
            bookCard.classList.add("book-card"); 
            bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h2 class="book-title">${book.title}</h2>
            <p class="book-author">${book.author}</p>
            <p class="book-status" value="${book.status}">${book.status}</p>
            `;
            container.appendChild(bookCard);
        })
    })