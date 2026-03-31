import styles from "./BookCard.module.css"

export default function BookCard({book, onClick}) {

    const { image, title, author, status, notes, genre } = book;
 
    const statusText = status === "reading" ? "Leyendo"
                     : status === "read"    ? "Leído"
                     :                        "Pendiente";

    return (
        <article className={styles.bookCard} data-genre={genre} data-status={status} onClick={onClick}>
            <img src={image || "/books/default.jpg"} alt={`Portada del libro ${title}`} />
            <h2 className="book-title">{title}</h2>
            <p className={styles.bookAuthor}>{author}</p>
            <p className={styles.bookStatus}>{statusText}</p>
            <p className={styles.bookNotes}>{notes}</p>
        </article>
    )
}
