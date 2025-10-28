const searchBar = document.querySelector("#search-bar");

searchBar.addEventListener("input", () => {
    let query = searchBar.value.toLowerCase();
    
    // books debe estar dentro del event listener para que se actualice cada vez que se escribe
    let books = document.querySelectorAll(".book-card");

    books.forEach((book) => {
        let title = book.querySelector(".book-title").innerText.toLowerCase();
        let author = book.querySelector(".book-author").innerText.toLowerCase();
        
        if (title.includes(query) || author.includes(query)) {
            book.classList.remove("hidden");
        } else {
            book.classList.add("hidden");
        }
    });

})