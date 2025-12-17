import styles from "./GenreFilter.module.css"

export default function GenreFilter({ onGenreChange }) {

  const genres = [
    "Novela",
    "Filosofia",
    "Autoayuda",
    "Ensayo",
    "Historia",
    "Biografia",
    "Ciencia ficcion",
    "Fantasia",
    "Poesia",
    "Espiritualidad",
    "Distopia",
    "Existencialismo",
    "Otro"
  ];

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    onGenreChange(genre);
  }

  return (
    <select onChange={handleGenreChange} className={styles.filterGenre} name="genre">
      <option value="">Todos los géneros</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  )
}
