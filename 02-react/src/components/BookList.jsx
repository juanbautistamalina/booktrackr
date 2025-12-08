import BookCard from '../components/BookCard.jsx'

export default function BookList({ books }) {
    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <BookCard
                        key={book.id}
                        img={book.img}
                        title={book.title}
                        author={book.author}
                        status={book.status}
                        genre={book.genre}
                        notes={book.notes} />
                )
            })}
        </div>
    )
}
