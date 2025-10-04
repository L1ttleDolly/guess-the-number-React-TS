import * as React from "react";
import {createPortal} from "react-dom";
import { useRef } from "react";

export type TModal = {
    children: React.ReactNode;
    open: boolean;
}

export default function Modal({children, open}: TModal) {
    const dialog = useRef<HTMLDialogElement>(null)

    const container = document.getElementById('modal')

    if (!container) return null

    if(open) {
        dialog.current?.showModal()
    } else {
        dialog.current?.close()
    }

    return createPortal(
        <dialog
            ref={dialog}
            open={open}
            aria-label="Правила игры"
            className="modal"
        >
            {children}
        </dialog>,
        container
    )
}
