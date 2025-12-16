import { useState } from 'react'
import data from '../data.json'
import BookList from '../components/BookList.jsx'
import SearchBar from "../components/SearchBar.jsx"
import StatusFilter from '../components/StatusFilter.jsx'
import GenreFilter from '../components/GenreFilter.jsx'
import Modal from '../components/Modal.jsx'
import Button from '../components/Button.jsx'


export default function Books() {

    const [books, setBooks] = useState(data);

    // Filtros
    const [currentStatus, setCurrentStatus] = useState("all");
    const [currentGenre, setCurrentGenre] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);



    const filteredBooks = books.filter(book => {

        // matchesSearch → true si el texto buscado aparece en el título o en el autor
        const matchesSearch =
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())

        // matchesStatus → true si el filtro está en "all" o si el estado del libro coincide con el seleccionado
        const matchesStatus =
            currentStatus === "all" || book.status === currentStatus

        // matchesGenre → true si no hay género seleccionado o si el género del libro coincide con el seleccionado
        const matchesGenre =
            currentGenre === "" || book.genre === currentGenre

        // El libro se muestra SOLO si cumple TODAS las condiciones
        return matchesSearch && matchesStatus && matchesGenre
    })

    const handleEditBook = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const handleAddBook = () => {
        setSelectedBook(null);
        setIsModalOpen(true);
    }

    
    return (
        <>
            <title>BookTrackr - Mis Libros</title>
            <div className="background-image"></div>

            <main className="books">
                <section>
                    <h1>Mis Libros</h1>

                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />

                    <div className="filter-container">
                        <StatusFilter
                            currentStatus={currentStatus}
                            setCurrentStatus={setCurrentStatus}
                        />

                        <GenreFilter
                            currentGenre={currentGenre}
                            setCurrentGenre={setCurrentGenre}
                        />
                    </div>

                    <BookList
                        books={filteredBooks}
                        onBookClick={handleEditBook}
                    />
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
                setBooks={setBooks}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                selectedBook={selectedBook}
            />
        </>
    )
}
