export type TButtonText = {
    children?: React.ReactNode;
    className?: string | undefined;
    onClick?: () => void;
    isValid?: boolean
}

export default function Button({ children, className, onClick, isValid }: TButtonText) {

    return (
        <button
            type="submit"
            className={className}
            onClick={onClick}
            disabled={isValid}
        >
            { children }
        </button>
    )
}