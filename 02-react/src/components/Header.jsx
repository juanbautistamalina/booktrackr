import { useState } from "react";
import styles from "./Header.module.css";
import Avatar from "./Avatar.jsx";
import useRouter from "../hooks/useRouter.jsx";

export default function Header() {
    const { currentPath, navigateTo } = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: "/", label: "Inicio" },
        { path: "/books", label: "Mi Biblioteca" },
        { path: "/login", label: "Iniciar Sesión" }
    ];

    const handleNavigate = (path) => {
        navigateTo(path);
        setIsMenuOpen(false);
    };

    const renderLinks = () => (
        <ul>
            {navLinks.map(link => (
                <li key={link.path}>
                    <button
                        className={currentPath === link.path ? styles.active : ""}
                        onClick={() => handleNavigate(link.path)}
                    >
                        {link.label}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <header className={styles.navbar}>

            <button onClick={() => handleNavigate("/")} className={styles.navbarLogo}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                </svg>
                <h2>BookTrackr</h2>
            </button>

            {/* Desktop nav */}
            <nav className={styles.navbarLinks}>
                {renderLinks()}
            </nav>

            <Avatar />

            <button
                className={`${styles.hamburgerButton} ${isMenuOpen ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-label="Abrir menú"
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            {/* Mobile nav - Modal */}
            <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ""}`}>
                {renderLinks()}
            </nav>
        </header>
    );
}