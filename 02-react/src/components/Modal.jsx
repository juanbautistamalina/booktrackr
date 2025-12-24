import styles from "./Modal.module.css"
import Button from "./Button"
import { useId } from "react";

export default function Modal({ isModalOpen, selectedBook, onSaveBook, onDeleteBook, onCloseModal }) {

    const idTitle = useId();
    const idAuthor = useId();
    const idStatus = useId();
    const idGenre = useId();
    const idNotes = useId();

    if (!isModalOpen) return null;

    const {
        img = "",
        title = "",
        author = "",
        status = "reading",
        genre = "",
        notes = ""
    } = selectedBook || {};


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const bookData = {
            id: selectedBook?.id ?? crypto.randomUUID(),
            img: selectedBook?.img ?? "/books/default.jpg",
            title: formData.get("modal-title"),
            author: formData.get("modal-author"),
            status: formData.get("modal-status"),
            genre: formData.get("modal-genre"),
            notes: formData.get("modal-notes"),
        };

        onSaveBook(bookData);
        onCloseModal();
    };


    const handleDelete = (id) => {
        onDeleteBook(id);
        onCloseModal();
    }


    return (
        <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : styles.hidden}`}>

            <div className={styles.modalContent}>
                <span onClick={onCloseModal} className={styles.close}>&times;</span>

                <div className={styles.modalBody}>
                    <img src={img || "/books/default.jpg"} alt={`Portada del libro ${title}`} />

                    <form onSubmit={handleSubmit}>
                        <h2>{selectedBook ? "Editar Detalles del Libro" : "Agregar Nuevo Libro"}</h2>
                        <fieldset>
                            <label htmlFor={idTitle}>Titulo</label>
                            <input type="text" name="modal-title" id={idTitle} defaultValue={title} required/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor={idAuthor}>Autor</label>
                            <input type="text" name="modal-author" id={idAuthor} defaultValue={author} required/>
                        </fieldset>

                        <div className={styles.groupInline}>
                            <fieldset>
                                <label htmlFor={idStatus}>Estado</label>
                                <select name="modal-status" id={idStatus} defaultValue={status}>
                                    <option value="reading">Leyendo</option>
                                    <option value="read">Leido</option>
                                    <option value="pending">Pendiente</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <label htmlFor={idGenre}>Género</label>
                                <select name="modal-genre" id={idGenre} defaultValue={genre}>
                                    <option value="Novela">Novela</option>
                                    <option value="Filosofia">Filosofía</option>
                                    <option value="Autoayuda">Autoayuda</option>
                                    <option value="Ensayo">Ensayo</option>
                                    <option value="Historia">Historia</option>
                                    <option value="Biografia">Biografía</option>
                                    <option value="Cienciaficcion">Ciencia Ficción</option>
                                    <option value="Fantasia">Fantasía</option>
                                    <option value="Poesia">Poesía</option>
                                    <option value="Espiritualidad">Espiritualidad</option>
                                    <option value="Distopia">Distopía</option>
                                    <option value="Existencialismo">Existencialismo</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </fieldset>
                        </div>

                        <fieldset>
                            <label htmlFor={idNotes}>Notas Personales</label>
                            <textarea name="modal-notes" id={idNotes} defaultValue={notes}></textarea>
                        </fieldset>

                        <div className={styles.groupInline}>

                            <Button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                                Guardar
                            </Button>

                            {selectedBook && (
                                <Button type="button" onClick={() => handleDelete(selectedBook.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                    Eliminar
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}