import useRouter from "../hooks/useRouter";
import { useEffect } from "react";

export default function Route({ path, component: Component, protected: isProtected }) {
    const { currentPath, navigateTo } = useRouter();
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (isProtected && !token && currentPath === path) {
            navigateTo("/login")
        }

        if (!isProtected && token && (path === "/login" || path === "/register") && currentPath === path) {
            navigateTo("/books")
        }
    }, [currentPath])

    if (isProtected && !token) return null

    return currentPath === path ? <Component /> : null;
}