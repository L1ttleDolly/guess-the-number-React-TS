export type TButtonText = {
    children?: React.ReactNode;
    className: string | undefined;
    onClick?: () => void;
}

export default function Button({ children, className, onClick }: TButtonText) {
    return (
        <button
            type="submit"
            className={className}
            onClick={onClick}
        >
            { children }
        </button>
    )
}