import useRouter from "../hooks/useRouter";

export default function Route({ path, component: Component }) {
    const { currentPath } = useRouter();
    return currentPath === path ? <Component /> : null;
}
