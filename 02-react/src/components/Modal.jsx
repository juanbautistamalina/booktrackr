export default function Modal() {
    return (
        <div id="modal" className='hidden'>
            <div className="modal-content">
                <span className="close">&times;</span>

                <div className="modal-body">
                    <img src="/books/crimen-y-castigo.jpg" alt="" />
                    <form>
                        <h2>Editar Detalles del Libro</h2>
                        <fieldset>
                            <label htmlFor="modal-title">Titulo</label>
                            <input type="text" id="modal-title" />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="modal-author">Autor</label>
                            <input type="text" id="modal-author" />
                        </fieldset>

                        <div className="group-inline">
                            <fieldset>
                                <label htmlFor="modal-status">Estado</label>
                                <select name="" id="modal-status">
                                    <option value="reading">Leyendo</option>
                                    <option value="read">Leido</option>
                                    <option value="pending">Pendiente</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <label htmlFor="modal-genre">Género</label>
                                <input type="text" id="modal-genre" />
                            </fieldset>
                        </div>

                        <fieldset>
                            <label htmlFor="modal-notes">Notas Personales</label>
                            <textarea name="" id="modal-notes"></textarea>
                        </fieldset>
                        <button type="submit">Guardar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
