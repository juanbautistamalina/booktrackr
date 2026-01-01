import { useEffect, useState } from 'react'
// import data from '../data.json'
import BookList from '../components/BookList.jsx'
import SearchBar from "../components/SearchBar.jsx"
import StatusFilter from '../components/StatusFilter.jsx'
import GenreFilter from '../components/GenreFilter.jsx'
import Modal from '../components/Modal.jsx'
import Button from '../components/Button.jsx'
// import useLocalStorage from '../hooks/useLocalStorage.jsx'
import useBookFilters from '../hooks/useBookFilters.jsx'
import useBooksTitle from '../hooks/useBooksTitle.jsx'
import { fetchBooks } from '../services/booksApi.js'

export default function Books() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        async function loadBooks() {
            try {
                setLoading(true);
                const response = await fetchBooks();
                setBooks(response.data);
            }
            catch (error) {
                console.error("Error al cargar los libros:", error);
            }
            finally {
                setLoading(false);
            }
        }
        loadBooks();
    }, [])


    const {
        currentStatus,
        filteredBooks,
        handleSearch,
        handleStatusFilter,
        handleGenreFilter
    } = useBookFilters(books);

    useBooksTitle(isModalOpen, selectedBook);

    const handleEditBook = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const handleAddBook = () => {
        setSelectedBook(null);
        setIsModalOpen(true);
    };

    const handleDeleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleSaveBook = (bookData) => {
        setBooks(prevBooks =>
            selectedBook
                ? prevBooks.map(book => book.id === selectedBook.id ? bookData : book) // editar libro existente
                : [bookData, ...prevBooks] // agregar un nuevo libro
        )
    };

    return (
        <>
            <title>BookTrackr - Mis Libros</title>
            <div className="background-image"></div>
            <main className="books">
                <section className={`${isModalOpen ? "no-scroll" : " "}`}>

                    <h1>Mis Libros</h1>

                    <SearchBar onSearch={handleSearch} />

                    <div className="filter-container">
                        <StatusFilter
                            currentStatus={currentStatus}
                            onStatusChange={handleStatusFilter}
                        />

                        <GenreFilter onGenreChange={handleGenreFilter} />
                    </div>

                    {loading ? <p>Cargando libros...</p> : <BookList books={filteredBooks} onBookClick={handleEditBook} />}

                </section>

                <div className="add-book-button">
                    <Button onClick={handleAddBook}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
                        Agregar libro
                    </Button>
                </div>
            </main>

            <Modal
                isModalOpen={isModalOpen}
                onCloseModal={handleCloseModal}
                selectedBook={selectedBook}
                onSaveBook={handleSaveBook}
                onDeleteBook={handleDeleteBook}
            />
        </>
    )
}
