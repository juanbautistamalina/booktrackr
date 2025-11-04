import data from '../data.json'
import BookCard from '../components/BookCard.jsx'

export default function Books() {
    return (
        <>
            <div className="background-image"></div>
            <main className="books">
                <section>
                    <h1>Mis Libros</h1>
                    <input type="text" id="search-bar" placeholder="Buscar libro por título o autor" />
                    <ul className="filter-list">
                        <li><a href="#" className="filter-item" data-filter="all">Todos</a></li>
                        <li><a href="#" className="filter-item" data-filter="reading">Leyendo</a></li>
                        <li><a href="#" className="filter-item" data-filter="read">Leídos</a></li>
                        <li><a href="#" className="filter-item" data-filter="pending">Pendientes</a></li>
                    </ul>

                    <div className="book-list">
                        {data.map((book) => {
                            return (
                                <BookCard
                                key={book.id}
                                img={book.img}
                                titulo={book.title}
                                autor={book.author}
                                estado={book.status} 
                                notas={book.notes}
                                genero={book.genre} />
                            )
                        })}
                    </div>
                </section>

                <div className="add-book-button">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                    </svg>Agregar libro</button>
                </div>

            </main>

            <div id="modal" className="hidden">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <h2>Editar Detalles del Libro</h2>
                    <form>
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
                                <label htmlFor="">Género</label>
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
        </>
    )
}
