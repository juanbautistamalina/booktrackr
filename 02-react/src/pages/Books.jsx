import data from '../data.json'
import BookCard from '../components/BookCard.jsx'

export default function Books() {
    return (
        <>
            <title>BookTrackr - Mis Libros</title>
            <div className="background-image"></div>
            <main className="books">
                <section>
                    <h1>Mis Libros</h1>
                    <input type="text" id="search-bar" placeholder="Buscar libro por título o autor" />

                    <div className="filter-container">
                        <ul id="filter-status">
                            <li><button className="filter-item active" data-filter="all">Todos</button></li>
                            <li><button className="filter-item" data-filter="reading">Leyendo</button></li>
                            <li><button className="filter-item" data-filter="read">Leídos</button></li>
                            <li><button className="filter-item" data-filter="pending">Pendientes</button></li>
                        </ul>


                        <select id="filter-genre">
                            <option value="">Elegir género</option>
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
                        </select>
                    </div>

                    <div className="book-list">
                        {data.map((book) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    img={book.img}
                                    titulo={book.title}
                                    autor={book.author}
                                    estado={book.status}
                                    genero={book.genre}
                                    notas={book.notes} />
                            )
                        })}
                    </div>
                </section>

                <div className="add-book-button">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>Agregar libro
                    </button>
                </div>
            </main>

            <div id="modal" className='hidden'>
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
        </>
    )
}
