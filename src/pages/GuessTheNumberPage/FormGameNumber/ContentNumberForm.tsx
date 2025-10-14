import {type ChangeEvent, useEffect, useRef, useState} from "react";
import Button from "../../../components/Button/Button.tsx";

export type TTextResult = {
    setText : React.Dispatch<React.SetStateAction<string | null>>;
    setTextResult: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    randomNumber: number;
}

export default function ContentNumberForm({ setText, setTextResult, randomNumber }: TTextResult) {

    const [inputValue, setInputValue] = useState("")

    const [attempts, setAttempts] = useState(0)

    const [hasError, setHasError] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const maxAttempts = 5

    useEffect(() => {
        setInputValue("")
        setHasError(false)
        setAttempts(0)
        inputRef.current?.focus()
        setInputValid(false)
    }, [randomNumber])

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)

        if(e.target.value.trim().length === 0) {
            setHasError(true)
        } else {
            setHasError(false)
        }
    }

    const showResult = () => {

        const nextAttempts = attempts + 1
        setAttempts(nextAttempts)

        if(!inputValue) return null
        const value = parseInt(inputValue)

        if(randomNumber === value) {
            setText("Вы выиграли")
            setTextResult("")
        } else if (nextAttempts  >= maxAttempts) {
            setText("Вы проиграли")
            setTextResult("")
            setHasError(true)
            setInputValid(true)
        } else if (randomNumber > value) {
            setText("Игра продолжается")
            setTextResult(<>Число <span style={{color: '#bd3c3c'}}>меньше</span> загадонного</>)

        } else if (randomNumber < value) {
            setText("Игра продолжается")
            setTextResult(<>Число <span style={{color: '#63d26b'}}>больше</span> загадонного</>)
        }
    }

    return (
        <form
            onSubmit={(event) =>
            {
                event.preventDefault()
                showResult()
            }
        }
            name="form">
            <label className="field__label" htmlFor="field"> </label>
            <input
                aria-label="Введите число от 1 до 100"
                disabled={inputValid}
                ref={inputRef}
                value={inputValue}
                onChange={handleInputValue}
                id="field"
                type="number"
                className="input"
                placeholder="Введите число от 1 до 100"
            />
            <Button className={"button-submit button-transform"} isValid={hasError}>Отправить</Button>
        </form>
    )
}