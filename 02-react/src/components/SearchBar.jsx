import styles from "./SearchBar.module.css"

export default function SearchBar({ searchQuery, setSearchQuery }) {
    
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }
    
    return (
        <input
            onChange={handleInputChange}
            value={searchQuery}
            className={styles.searchBar}
            type="text"
            placeholder="Buscar libro por título o autor"
        />
    );
}
