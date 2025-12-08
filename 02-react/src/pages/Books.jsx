import { useState } from 'react'
import data from '../data.json'
import BookList from '../components/BookList.jsx'
import SearchBar from "../components/SearchBar.jsx"
import StatusFilter from '../components/StatusFilter.jsx'
import GenreFilter from '../components/GenreFilter.jsx'
import Modal from '../components/Modal.jsx'
import Button from '../components/Button.jsx'


export default function Books() {

    const [currentStatus, setCurrentStatus] = useState("all");
    const [currentGenre, setCurrentGenre] = useState("");
    // const [searchQuery, setSearchQuery] = useState("");

    const [filteredBooks, setFilteredBooks] = useState(data);

    return (
        <>
            <title>BookTrackr - Mis Libros</title>
            <div className="background-image"></div>

            <main className="books">
                <section>
                    <h1>Mis Libros</h1>

                    <SearchBar/>

                    <div className="filter-container">
                        <StatusFilter
                            currentStatus={currentStatus}
                            onChange={setCurrentStatus}
                            setFilteredBooks={setFilteredBooks}
                        />

                        <GenreFilter
                            currentGenre={currentGenre}
                            onChange={setCurrentGenre}
                            setFilteredBooks={setFilteredBooks}
                        />
                    </div>

                    <BookList books={filteredBooks} />

                </section>

                <div className="add-book-button">
                    <Button >
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

            <Modal />

        </>
    )
}
