import { useEffect } from "react";

export default function useBooksTitle(isModalOpen, selectedBook) {
    useEffect(() => {
        {
            isModalOpen && selectedBook
                ? document.title = `BookTrackr - ${selectedBook.title}`
                : document.title = `BookTrackr - Agregar Libro`
        }
        if (!isModalOpen) document.title = "BookTrackr - Mis Libros";

    }, [isModalOpen, selectedBook])

}
