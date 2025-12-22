// import styles from "./Header.module.css"
import Avatar from "./Avatar.jsx"
import Link from "./Link.jsx"
import { useState } from "react"

export default function Header() {

    const options = [
        { href: "/", label: "Inicio" },
        { href: "/books", label: "Mi Biblioteca" },
        { href: "/login", label: "Iniciar Sesión" }
    ]

    const [isActive, setIsActive] = useState("/books");


    return (
        <header className="navbar index">
            <Link href="/" className="navbar-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-book">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                </svg>
                <h2>BookTrackr</h2>
            </Link>

            <nav className="navbar-links desktop-nav">
                <ul>
                    {options.map(opt => (
                        <li key={opt.href} onClick={() => setIsActive(opt.href)}>
                            <Link href={opt.href} className={isActive === opt.href ? "active" : ""}>
                                {opt.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>

            <Avatar />

            <button className="hamburger-button" aria-label="Abrir menú">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <div className="mobile-nav">
                <a href="index.html">Inicio</a>
                <a href="./pages/books.html" className="active">Mi Biblioteca</a>
                <a href="./pages/login.html">Iniciar Sesión</a>
            </div>
        </header>
    )
}