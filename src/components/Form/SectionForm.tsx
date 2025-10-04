import Button from "../Button/Button.tsx";
import { useState } from "react";

export type TTextResult = {
    setText : React.Dispatch<React.SetStateAction<string | null>>;
    setTextResult: React.Dispatch<React.SetStateAction<string | null>>;
    randomNumber: number;

}

export default function SectionForm({ setText, setTextResult, randomNumber }: TTextResult) {

    const [inputValue, setInputValue] = useState<string| null>(null)

   /* const [randomInt, setRandomInt] = useState(getRandomInt())*/

    const [hasError, setHasError] = useState('')

    const [attempts, setAttempts] = useState(0)

    const maxAttempts = 5


   /* function getRandomInt() {
        return Math.floor(Math.random() * 100) + 1
    }*/


    function isShowResult() {
        setAttempts(prev => prev + 1)

        console.log(randomNumber)

        if(!inputValue) return null

        const value = parseInt(inputValue)

        if(randomNumber === value) {
            setText("Вы выиграли")
            setTextResult(" ")
        } else if (attempts === maxAttempts) {
            setText("Вы проиграли")
            setTextResult(" ")
        } else if (randomNumber > value) {
            setText("Игра продолжается")
            setTextResult('Число меньше загаданного')
        } else if (randomNumber < value) {
            setText("Игра продолжается")
            setTextResult('Число больше загаданного')
        }
    }

  /*  function startNewGame() {
        getRandomInt()
        setText(" ")
        setTextResult(" ")
    }*/

    return (
        <form
            onSubmit={(event) =>
            {
                event.preventDefault()
                isShowResult()
            }
        }
            name="form">
            <label className="field__label" htmlFor="field"> </label>
            <input
                onChange={(e) => setInputValue(e.target.value)}
                id="field"
                type="number"
                className="input"
                placeholder="Введите число от 1 до 100"
            />
            <Button className={"button-submit"}>Отправить</Button>
        </form>
    )
}