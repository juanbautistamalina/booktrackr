import styles from "./BookList.module.css"
import BookCard from '../components/BookCard.jsx'

export default function BookList({ books, setIsModalOpen, setSelectedBook }) {

    const handleClick = (book) => {
        setIsModalOpen(true);
        setSelectedBook(book);
    }

    return (
        <div className={styles.bookList}>

            {books.length === 0 ? (
                <p>No hay libros disponibles.</p>
            ) : (

                books.map((book) => {
                    return (
                        <BookCard
                            onClick={() => handleClick(book)}
                            key={book.id}
                            img={book.img}
                            title={book.title}
                            author={book.author}
                            status={book.status}
                            genre={book.genre}
                            notes={book.notes} />
                    )
                })
            )}

        </div>
    )
}
