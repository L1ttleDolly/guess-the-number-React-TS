import Button from "../../components/Button/Button.tsx";
import {useState} from "react";
import {Article} from "../../components/Article/Article.tsx";
import {cardData} from "../../data/cards/cards.ts";

export default function TwoChairsPage() {
    const cards = cardData.cardsQuestions

    const [whiteStat, setWhiteStat] = useState('')
    const [dartStat, setDartStat] = useState('')

    const [currentId, setCurrentId] = useState('')

    const card = cards.find(c => c.id === currentId) // first render undefined

    const showChairOne = () => {
        console.log('Не нажимай на меня')
        setDartStat('+1')
    }

    const showChairTwo = () => {
        console.log('Второй стул')
        setWhiteStat('+1')
    }

    const startGame = () => {
        const currentIndex = cards.findIndex(c => c.id === card?.id)
        const nextCard = (currentIndex + 1) % cards.length
        setCurrentId(cards[nextCard].id)
    }

    return (
        <>
            <section className="container-game-chairs">
                <div className="container-start">
                    <Button
                        onClick={startGame}
                        className="button-start"
                    >
                        Начать
                    </Button>
                </div>
                <div className="stat1">{dartStat}</div>
                <div className="questions-container">
                   {/* <h2 className="questions-title"> Ситуация:</h2>*/}
                    <p className="questions-text">{card?.title}</p>
                    <p className="questions-subtitle">Твой выбор?</p>
                </div>
                <div className="stat2">{whiteStat}</div>
                <div className="chairs-container">
                    <Article className="card-container">
                        <Button
                            onClick={showChairOne}
                            className="button"
                        >
                            Первый стул
                        </Button>
                        <p className="card-subtitle">{card?.cardsAnswers.firstAnswer}</p>
                    </Article>

                    <Article className="card-container">
                        <Button
                            onClick={showChairTwo}
                            className="button"
                        >
                            Второй стул
                        </Button>
                        <p className="card-subtitle">{card?.cardsAnswers.secondAnswer}</p>
                    </Article>
                </div>

            </section>

        </>
    )
}