
import ContentNumberForm from "./FormGameNumber/ContentNumberForm.tsx";
import {useState} from "react";
import ContentNumberContainer from "./ContentTitle/ContentNumberContainer.tsx";
import Button from "../../components/Button/Button.tsx";

export default function SectionGameNumberContent() {

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
        <>
            <section className="content">
                <ContentNumberContainer />
                <div className="content__container">
                    <h2 className="content__title">Результат:</h2>
                    <p className="content__result">{text}</p>
                    <ContentNumberForm setText={setText} setTextResult={setTextResult} randomNumber={randomInt} />
                    <p className="content__answers">{textResult}</p>
                    <Button className={"button-restart button-transform"} onClick={restartGame}></Button>
                </div>

            </section>
        </>

    )
}