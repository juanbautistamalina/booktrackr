import Button from "../components/Button";
import useRouter from "../hooks/useRouter";

export default function NotFoundPage() {
    const { navigateTo } = useRouter();
    return (
        <>
            <title>BookTrackr - Página no encontrada</title>
            <main className="not-found-page">
                <h1>404 - Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <Button onClick={() => navigateTo('/')}>Volver al inicio</Button>
            </main>
        </>
    )
}