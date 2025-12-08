import BookCard from '../components/BookCard.jsx'

export default function BookList({ books }) {
    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <BookCard
                        key={book.id}
                        img={book.img}
                        titulo={book.title}
                        autor={book.author}
                        estado={book.status}
                        genero={book.genre}
                        notas={book.notes} />
                )
            })}
        </div>
    )
}
