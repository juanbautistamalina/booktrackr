const statusFilter = document.getElementById("filter-status");
const genreFilter = document.getElementById("filter-genre");

statusFilter.addEventListener("change", () => {
  let books = document.querySelectorAll(".book-card");
  let selectedStatus = statusFilter.value;

  books.forEach((book) => {
    const bookStatus = book.querySelector(".book-status").getAttribute("value");

    if (selectedStatus === "all" || bookStatus === selectedStatus) {
      book.classList.remove("hidden");
    } else {
      book.classList.add("hidden");
    }
  });
});

// genreFilter.addEventListener("change", () => {
//   let books = document.querySelectorAll(".book-card");
//   let selectedGenre = genreFilter.value;

//   books.forEach((book) => {
//     const bookGenre = book.querySelector(".book-genre").getAttribute("value");
//     console.log(bookGenre);

//     if (selectedGenre === "all" || bookGenre === selectedGenre) {
//       book.classList.remove("hidden");
//     } else {
//       book.classList.add("hidden");
//     }
//   });
// });
