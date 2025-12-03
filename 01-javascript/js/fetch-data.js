const container = document.querySelector('.book-list');

fetch("../js/data.json") // obtener los datos de los libros
    .then((response) => response.json()) // convertir los datos a json
    .then((books) => { // para cada libro, crear los elementos HTML
        books.forEach(book => {
            const bookCard = document.createElement("article"); 
            bookCard.classList.add("book-card");
            bookCard.setAttribute("data-genre", book.genre);
            bookCard.setAttribute("data-status", book.status);
            
            const statusText = book.status === "reading" ? "Leyendo" : 
                               book.status === "read" ? "Leído" : "Pendiente"; 

            bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h2 class="book-title">${book.title}</h2>
            <p class="book-author">${book.author}</p>
            <p class="book-status">${statusText}</p>
            <p class="book-notes hidden">${book.notes}</p>
            `;
            
            container.appendChild(bookCard); // agregar la tarjeta del libro al contenedor
        })
    })