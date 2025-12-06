export default function Avatar({ service = "github", username = "juanbautistamalina", size = "45" }) {

    const createUrl = (service, username) => `https://unavatar.io/${service}/${username}`
    const url = createUrl(service, username);

    return (
        <img
            src={url}
            alt={`Avatar de ${username}`}
            className="avatar"
            style={{width: `${size}px`, height: `${size}px`}}
        />
    )
}
