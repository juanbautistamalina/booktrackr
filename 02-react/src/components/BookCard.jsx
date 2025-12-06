export default function BookCard({ img, titulo, autor, estado, notas, genero }) {
    return (
        <article className="book-card" data-genre={genero} data-status={estado}>
            <img src={img} alt={`Portada del libro ${titulo}`} />
            <h2 className="book-title">{titulo}</h2>
            <p className="book-author">{autor}</p>
            <p className="book-status" value={estado}>{estado}</p>
            <p className="book-notes hidden">{notas}</p>
        </article>
    )
}
