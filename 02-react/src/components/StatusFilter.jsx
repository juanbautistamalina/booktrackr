export default function StatusFilter({ data, setFilteredBooks, currentStatus, setCurrentStatus }) {
    const options = [
        { value: "all", label: "Todos" },
        { value: "reading", label: "Leyendo" },
        { value: "read", label: "Leídos" },
        { value: "pending", label: "Pendientes" }
    ];

    const handleClick = (status) => {
        setCurrentStatus(status);
        setFilteredBooks(status === "all" ? data : data.filter(book => book.status === status));

    }

    return (
        <ul className="filter-status">
            {options.map(opt => (
                <li key={opt.value}>
                    <button
                        className={`filter-item ${currentStatus === opt.value ? "active" : ""}`}
                        onClick={() => handleClick(opt.value)}
                    >
                        {opt.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}
