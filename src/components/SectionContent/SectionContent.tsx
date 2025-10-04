import Button from "../Button/Button.tsx";
import SectionForm from "../Form/SectionForm.tsx";
import {useState} from "react";
import * as React from "react";

export default function SectionContent() {

    const [text, setText] = useState<string | null>("")
    const [textResult, setTextResult] = useState<React.ReactNode>(null)

    const [randomInt, setRandomInt] = useState(getRandomInt())

    function getRandomInt() {
        return Math.floor(Math.random() * 100) + 1
    }

    function restartGame(){
        setRandomInt(getRandomInt)
        setText("")
        setTextResult("")
    }

    return (
        <section className="content">
            <h2 className="content__title">Результат:</h2>
            <p className="content__result">{text}</p>
           <SectionForm setText={setText} setTextResult={setTextResult} randomNumber={randomInt} />
            <p className="content__answers">{textResult}</p>
            <Button className={"button-restart button-transform"} onClick={restartGame}></Button>
        </section>
    )
}