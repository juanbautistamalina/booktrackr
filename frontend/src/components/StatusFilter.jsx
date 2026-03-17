import styles from "./StatusFilter.module.css"

export default function StatusFilter({ currentStatus, onStatusChange }) {

    const options = [
        { value: "all", label: "Todos" },
        { value: "reading", label: "Leyendo" },
        { value: "read", label: "Leídos" },
        { value: "pending", label: "Pendientes" }
    ];

    return (
        <ul className={styles.filterStatus}>
            {options.map(opt => (
                <li key={opt.value}>
                    <button
                        className={`filterItem ${currentStatus === opt.value ? styles.active : ""}`}
                        onClick={() => onStatusChange(opt.value)}
                    >
                        {opt.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}
