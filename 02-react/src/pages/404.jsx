import Button from "../components/Button";

export default function NotFoundPage() {
    return (
        <>
            <title>BookTrackr - Página no encontrada</title>
            <main className="not-found-page">
                <h1>404 - Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <Button>Volver al inicio</Button>
            </main>
        </>
    )
}