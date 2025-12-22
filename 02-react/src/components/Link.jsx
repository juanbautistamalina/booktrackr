import useRouter from "../hooks/useRouter";

export default function Link({ href, children, ...resOfProps }) {
    const { navigateTo } = useRouter();

    const handleClick = (event) => {
        event.preventDefault();
        navigateTo(href);
    }

    return (
        <a href={href} onClick={handleClick} {...resOfProps}>
            {children}
        </a>
    )
}
