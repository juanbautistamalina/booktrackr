export default function GenreFilter({ currentGenre, onChange }) {

  const genres = [
    "novela", "filosofia", "autoayuda", "ensayo", "historia",
    "biografia", "cienciaficcion", "fantasia", "poesia",
    "espiritualidad", "distopia", "existencialismo", "otro"
  ];

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      value={currentGenre}
      className="filter-genre"
      
      >
      <option value="">Elegir género</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{capitalize(genre)}</option>
      ))}
    </select>
  )
}
