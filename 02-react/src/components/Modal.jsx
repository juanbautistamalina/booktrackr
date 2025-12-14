import styles from "./Modal.module.css"
import Button from "./Button"

export default function Modal({ dataBooks, setDataBooks, isModalOpen, setIsModalOpen, selectedBook }) {

    const { img, title, author, status, genre, notes } = selectedBook;

    // Agregar funcionalidad para editar los campos del libro en el modal (usando los states)
    const handleEdit = () => {
        // setDataBooks(updatedBooks);
        setIsModalOpen(false);
    }



    return (
        <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : styles.hidden}`}>

            <div className={styles.modalContent}>
                <span onClick={() => setIsModalOpen(false)} className={styles.close}>&times;</span>

                <div className={styles.modalBody}>
                    <img src={img} alt={`Portada del libro ${title}`} />
                    <form>
                        <h2>Editar Detalles del Libro</h2>
                        <fieldset>
                            <label htmlFor="modal-title">Titulo</label>
                            <input type="text" id="modal-title" defaultValue={title} />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="modal-author">Autor</label>
                            <input type="text" id="modal-author" defaultValue={author} />
                        </fieldset>

                        <div className={styles.groupInline}>
                            <fieldset>
                                <label htmlFor="modal-status">Estado</label>
                                <select name="" id="modal-status" defaultValue={status}>
                                    <option value="reading">Leyendo</option>
                                    <option value="read">Leido</option>
                                    <option value="pending">Pendiente</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <label htmlFor="modal-genre">Género</label>
                                <input type="text" id="modal-genre" defaultValue={genre} />


                                {/* Cambiar el input por un select con el género del libro */}
                                {/* <select id="modal-genre" defaultValue={genre}>
                                    <option value="novela">Novela</option>
                                    <option value="filosofia">Filosofía</option>
                                    <option value="autoayuda">Autoayuda</option>
                                    <option value="ensayo">Ensayo</option>
                                    <option value="historia">Historia</option>
                                    <option value="biografia">Biografía</option>
                                    <option value="cienciaficcion">Ciencia Ficción</option>
                                    <option value="fantasia">Fantasía</option>
                                    <option value="poesia">Poesía</option>
                                    <option value="espiritualidad">Espiritualidad</option>
                                    <option value="distopia">Distopía</option>
                                    <option value="existencialismo">Existencialismo</option>
                                    <option value="otro">Otro</option>
                                </select> */}

                            </fieldset>
                        </div>

                        <fieldset>
                            <label htmlFor="modal-notes">Notas Personales</label>
                            <textarea name="" id="modal-notes" defaultValue={notes}></textarea>
                        </fieldset>

                        <div className={styles.groupInline}>

                            <Button type="button" onClick={handleEdit}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                                Guardar
                            </Button>

                            <Button type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                Eliminar
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}