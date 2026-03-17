import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

    return (
        <input
            onChange={e => onSearch(e.target.value)}
            className={styles.searchBar}
            name="search"
            type="text"
            placeholder="Buscar libro por título o autor"
        />
    );
}
