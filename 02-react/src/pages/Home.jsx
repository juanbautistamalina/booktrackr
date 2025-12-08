import Button from "../components/Button";

export default function Home() {
    return (
        <>
            <title>BookTrackr - Inicio</title>
            <div className="background-image"></div>

            <main className="home">
                <div className="book-stack-area">
                    <svg className="book-stack-svg" fill="none" viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-primary-20" d="M20 130 L330 130 L330 145 L20 145 Z"></path>
                        <path className="fill-primary-60" d="M20 130 L330 130 L325 115 L15 115 Z"></path>
                        <rect className="fill-pages-light fill-pages-dark" height="2" width="290" x="25" y="118"></rect>

                        <path className="fill-primary-20" d="M40 110 L310 110 L310 125 L40 125 Z"></path>
                        <path className="fill-primary-70" d="M40 110 L310 110 L305 95 L35 95 Z"></path>
                        <rect className="fill-pages-light fill-pages-dark" height="2" width="250" x="45" y="98"></rect>

                        <path className="fill-primary-20" d="M70 90 L280 90 L280 105 L70 105 Z"></path>
                        <path className="fill-primary-100" d="M70 90 L280 90 L275 75 L65 75 Z"></path>
                        <rect className="fill-pages-light fill-pages-dark" height="2" width="190" x="75" y="78"></rect>
                    </svg>
                </div>

                <section>
                    <h1>BookTrackr</h1>
                    <p>Tu biblioteca personal en línea.</p>
                    <Button>Entrar a Mi Biblioteca</Button>
                </section>
            </main>
        </>
    )
}
