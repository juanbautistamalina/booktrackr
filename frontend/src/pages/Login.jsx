import { useState } from "react"
import Button from "../components/Button"
import { login } from "../services/authApi"
import useRouter from "../hooks/useRouter"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const { navigateTo } = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        const data = await login(email, password)

        if (data.token) {
            localStorage.setItem("token", data.token)
            navigateTo("/books")
        } else {
            setError(data.error || "Email o contraseña incorrectos")
        }
    }

    return (
        <>
            <title>BookTrackr - Iniciar Sesión</title>
            <main className="main-form">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h1>BookTrackr</h1>
                    <p>Bienvenido de nuevo a tu librería personal.</p>

                    <fieldset>
                        <legend>Credenciales</legend>
                        <input type="email" placeholder="Email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Contraseña" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </fieldset>

                    {error && <p className="form-error">{error}</p>}

                    <Button type="submit">Iniciar Sesión</Button>

                    <div className="form-footer">
                        <p>¿No tienes cuenta?</p>
                        <span
                            onClick={() => navigateTo("/register")}
                            className="form-link"
                        >Registrarse</span>
                    </div>
                </form>
            </main>
        </>
    )
}