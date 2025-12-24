import { useState } from "react";

export default function useBookFilters(books) {

    const [currentStatus, setCurrentStatus] = useState("all");
    const [currentGenre, setCurrentGenre] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBooks = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesStatus =
            currentStatus === "all" || book.status === currentStatus

        const matchesGenre =
            currentGenre === "" || book.genre === currentGenre

        // El libro se muestra SOLO si cumple TODAS las condiciones
        return matchesSearch && matchesStatus && matchesGenre
    })

    return {
        currentStatus,
        setCurrentStatus,
        currentGenre,
        setCurrentGenre,
        searchQuery,
        setSearchQuery,
        filteredBooks
    }
}
