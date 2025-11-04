export default function Login() {
    return (
        <>
            <main className="main-form">
                <form className="form-container">
                    <h1>BookTrackr</h1>
                    <p>Bienvenido de nuevo a tu librería personal.</p>

                    <fieldset>
                        <legend>Credenciales</legend>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Contraseña" required />
                    </fieldset>

                    <div className="form-options">
                        <label><input type="checkbox" /> Recordar sesión</label>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit">Iniciar Sesión</button>

                    <div className="form-footer">
                        <p>¿No tienes cuenta?</p>
                        <a href="#">Registrarse</a>
                    </div>
                </form>
            </main>
        </>
    )
}
