import * as React from "react";

type TArticle = {
    children: React.ReactNode
    className: string
}

export function Article({children, className}:TArticle) {
    return (
        <article className={className}>{ children }</article>
    )

}