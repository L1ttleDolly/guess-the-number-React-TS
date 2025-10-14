
import type {ReactNode} from "react";

export type THeaderChildren = {
    children: ReactNode
}

export default function Header({children}:THeaderChildren) {
    return (
        <header className="header">
            {children}
        </header>
    )
}