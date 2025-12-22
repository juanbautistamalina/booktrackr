import { useEffect, useState } from "react";

export default function useRouter() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate", handleLocationChange)

        return () => {
            window.removeEventListener("popstate", handleLocationChange)
        }
    }, []);

    function navigateTo(path) {
        // cambiar la url sin recargar la página
        window.history.pushState({}, "", path);

        // crear y emitir un evento de navegación
        window.dispatchEvent(new PopStateEvent("popstate"));
    }

    return {
        currentPath,
        navigateTo
    }
}