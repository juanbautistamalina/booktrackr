import styles from "./BookList.module.css"
import BookCard from '../components/BookCard.jsx'

export default function BookList({ books, onBookClick }) {

    return (
        <div className={styles.bookList}>

            {books.length === 0 ? (
                <p>No hay libros disponibles.</p>
            ) : (
                books.map((book) => {
                    return (
                        <BookCard
                            key={book.id}
                            book={book}
                            onClick={() => onBookClick(book)}
                        />
                    )
                })
            )}
        </div>
    )
}
