export default function StatusFilter({ currentStatus, onChange }) {
    const options = [
        { value: "all", label: "Todos" },
        { value: "reading", label: "Leyendo" },
        { value: "read", label: "Leídos" },
        { value: "pending", label: "Pendientes" }
    ];

    return (
        <ul className="filter-status">
            {options.map(opt => (
                <li key={opt.value}>
                    <button
                        className={`filter-item ${currentStatus === opt.value ? "active" : ""}`}
                        onClick={() => onChange(opt.value)}
                    >
                        {opt.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}
