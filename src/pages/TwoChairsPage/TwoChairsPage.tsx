import Button from "../../components/Button/Button.tsx";
import {useState} from "react";

export default function TwoChairsPage() {

    /*const [textArticle, setTextArticle] = useState('')*/
    const [buttonTextOne, setButtonTextOne] = useState('Первый стул')
    const [buttonTextTwo, setButtonTextTwo] = useState('Второй стул')

    const showChairOne = () => {
        console.log('Не нажимай на меня')
    }

    const showChairTwo = () => {
        console.log('Второй стул')
    }

    return (
      /*  <div className="container">
            <h2 className="title">
                Скоро здесь появится игра...
            </h2>
                <p className="subTitle">
                    Пока держите котика :3
                </p>
                    <div className="decor-cat"></div>
        </div>*/
        <>
            <section className="container">
                <div className="container-start">
                    <Button className="button-start">
                        Начать
                    </Button>
                </div>
                <div className="questions-container">
                    В разработке!
                    <div className="decor-cat"></div>
                </div>
                <div className="chairs-container">

                    <Button
                        onClick={showChairOne}
                        className="chair"
                    >
                        {buttonTextOne}
                    </Button>

                    <Button
                        onClick={showChairTwo}
                        className="chair"
                    >
                        {buttonTextTwo}
                    </Button>

                    <Button
                        onClick={showChairOne}
                        className="chair"
                    >
                        {buttonTextOne}
                    </Button>
                </div>

            </section>

        </>
    )
}