import Button from '../../components/Button/Button.tsx';
import { useState } from 'react';
import { Article } from '../../components/Article/Article.tsx';
import { cardData } from '../../data/cards/cards.ts';

export default function TwoChairsPage() {
  const cards = cardData.cardsQuestions;

  const [whiteStat, setWhiteStat] = useState(0);
  const [dartStat, setDartStat] = useState(0);

  const [currentId, setCurrentId] = useState(0);

  const [btnValid, setBtnValid] = useState(false);

  const card = cards.find((c) => c.id === currentId);
  /*  console.log('текущий айди ', currentId);*/

  const getNextCard = () => {
    const currentIndex = cards.findIndex((c) => c.id === card?.id);
    const nextCard = (currentIndex + 1) % cards.length;
    setCurrentId(cards[nextCard].id);
  };

  /*const finishGame = () => {
    console.log('cards id', cards.at(-1)?.id);
    console.log('текущий айди в функции финиш', currentId);
    if (cards.at(-1)?.id === currentId) {
      /!* setBtnValid(true);*!/
    }
  };*/

  const incrementStat = () => {
    setWhiteStat((prevState) => prevState + 1);
    getNextCard();
  };

  const decrementStat = () => {
    setDartStat((prevState) => prevState - 1);
    getNextCard();
  };

  /*
  finishGame();
*/

  return (
    <>
      <section className='container-game-chairs'>
        <div className='container-start'></div>
        <div className='stat1'>{dartStat}</div>
        <div className='questions-container'>
          <p className='questions-text'>{card?.title}</p>
          <p className='questions-subtitle'>
            {card?.title === undefined
              ? `Выбери стул, чтобы начать`
              : `Твой выбор?`}
          </p>
        </div>
        <div className='stat2'>{whiteStat}</div>
        <div className='chairs-container'>
          <Article className='card-container'>
            <Button
              onClick={decrementStat}
              className='button'
              isValid={btnValid}
            >
              Первый стул
            </Button>
            <p className='card-subtitle'>{card?.cardsAnswers.firstAnswer}</p>
          </Article>

          <Article className='card-container'>
            <Button
              onClick={incrementStat}
              className='button'
              isValid={btnValid}
            >
              Второй стул
            </Button>
            <p className='card-subtitle'>{card?.cardsAnswers.secondAnswer}</p>
          </Article>
        </div>
      </section>
    </>
  );
}
