import BookCard from '../components/BookCard.jsx'

export default function BookList({ books, setIsModalOpen, selectedBook, setSelectedBook }) {
    
    const handleClick = () => {
        setIsModalOpen(true);
    }
    
    return (
        <div className="book-list">
            {books.map((book) => {
                return (
                    <BookCard
                        onClick={handleClick}
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
