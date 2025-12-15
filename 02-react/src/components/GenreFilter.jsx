import styles from "./GenreFilter.module.css"

export default function GenreFilter({ currentGenre, setCurrentGenre }) {

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

  const handleChange = (event) => {
    const genre = event.target.value;
    setCurrentGenre(genre);
  }

  return (
    <select
      value={currentGenre}
      onChange={handleChange}
      className={styles.filterGenre}
    >
      <option value="">Elegir género</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  )
}
