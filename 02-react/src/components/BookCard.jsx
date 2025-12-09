export default function BookCard({ img, title, author, status, notes, genre, onClick }) {

    const statusText = status === "reading" ? "Leyendo"
                     : status === "read"    ? "Leído"
                     :                        "Pendiente";

    return (
        <article className="book-card" data-genre={genre} data-status={status} onClick={onClick}>
            <img src={img} alt={`Portada del libro ${title}`} />
            <h2 className="book-title">{title}</h2>
            <p className="book-author">{author}</p>
            <p className="book-status">{statusText}</p>
            <p className="book-notes hidden">{notes}</p>
        </article>
    )
}
