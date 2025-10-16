const container = document.querySelector('.book-list');

fetch("../js/data.json")
    .then((response) => response.json())
    .then((books) => {
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