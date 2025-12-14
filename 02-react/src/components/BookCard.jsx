import styles from "./BookCard.module.css"

export default function BookCard({ img, title, author, status, notes, genre, onClick }) {

    const statusText = status === "reading" ? "Leyendo"
                     : status === "read"    ? "Leído"
                     :                        "Pendiente";

    return (
        <article className={styles.bookCard} data-genre={genre} data-status={status} onClick={onClick}>
            <img src={img} alt={`Portada del libro ${title}`} />
            <h2>{title}</h2>
            <p className={styles.bookAuthor}>{author}</p>
            <p className={styles.bookStatus}>{statusText}</p>
            <p className={styles.bookNotes}>{notes}</p>
        </article>
    )
}
