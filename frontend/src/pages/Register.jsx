import Button from "../components/Button"
import { useState } from "react"
import { register } from "../services/authApi"
import useRouter from "../hooks/useRouter"

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const { navigateTo } = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        const data = await register(email, password)

        if (data.id) {
            navigateTo("/login")
        } else {
            setError(data.error || "El email ya existe")
        }
    }


    return (
        <>
            <title>BookTrackr - Registrate</title>

            <main className="main-form">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h1>BookTrackr</h1>
                    <p>Regístrate para crear tu librería personal.</p>

                    <fieldset>
                        <legend>Credenciales</legend>
                        <input type="email" placeholder="Email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Contraseña" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </fieldset>
                    {error && <p className="form-error">{error}</p>}
                    <Button type="submit">Registrarse</Button>

                    <div className="form-footer">
                        <p>¿Ya tienes cuenta?</p>
                        <a href="/login">Iniciar Sesión</a>
                    </div>
                </form>
            </main>
        </>
    )
}
