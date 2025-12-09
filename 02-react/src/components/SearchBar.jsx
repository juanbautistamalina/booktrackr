export default function SearchBar({ data, setFilteredBooks, searchQuery, setSearchQuery }) {
    
    const handleInputChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(event.target.value);
        setFilteredBooks(data.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        ))

    }
    
    return (
        <input
            onChange={handleInputChange}
            value={searchQuery}
            className="search-bar"
            type="text"
            placeholder="Buscar libro por título o autor"
        />
    );
}
