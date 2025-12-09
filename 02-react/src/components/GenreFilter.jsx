export default function GenreFilter({ data, setFilteredBooks, setCurrentGenre }) {

  const genres = [
    "novela", "filosofia", "autoayuda", "ensayo", "historia",
    "biografia", "cienciaficcion", "fantasia", "poesia",
    "espiritualidad", "distopia", "existencialismo", "otro"
  ];

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleChange = (event) => {
    const genre = event.target.value;
    setCurrentGenre(genre);
    setFilteredBooks(genre === "" ? data : data.filter(book => book.genre.toLowerCase() === genre));
  }

  return (
    <select onChange={handleChange} className="filter-genre">
      <option value="">Elegir género</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{capitalize(genre)}</option>
      ))}
    </select>
  )
}
