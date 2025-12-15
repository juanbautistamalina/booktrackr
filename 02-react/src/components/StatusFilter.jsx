import styles from "./StatusFilter.module.css"

export default function StatusFilter({ currentStatus, setCurrentStatus }) {
    
    const options = [
        { value: "all", label: "Todos" },
        { value: "reading", label: "Leyendo" },
        { value: "read", label: "Leídos" },
        { value: "pending", label: "Pendientes" }
    ];

    const handleClick = (status) => {
        setCurrentStatus(status);
    }

    return (
        <ul className={styles.filterStatus}>
            {options.map(opt => (
                <li key={opt.value}>
                    <button
                        className={`filterItem ${currentStatus === opt.value ? styles.active : ""}`}
                        onClick={() => handleClick(opt.value)}
                    >
                        {opt.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}
