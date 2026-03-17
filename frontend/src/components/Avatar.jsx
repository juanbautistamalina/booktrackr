import styles from "./Avatar.module.css"

export default function Avatar({ size = "45" }) {
    const token = localStorage.getItem("token")

    if (!token) return null
    const payload = JSON.parse(atob(token.split(".")[1]))
    const email = payload.email

    const url = `https://api.dicebear.com/7.x/initials/svg?seed=${email}`

    return (
        <img
            src={url}
            className={styles.avatar}
            style={{ width: `${size}px`, height: `${size}px` }}
        />
    )
}