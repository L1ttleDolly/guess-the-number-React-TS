import { useState } from 'react';

export default function AboutPage() {
  const [initialNumber, setInitialNumber] = useState(0);

  function increment() {
    console.log(+1);
    setInitialNumber(initialNumber + 1);
  }

  function decrement() {
    console.log(-1);
    setInitialNumber(initialNumber - 1);
  }

  return (
    <div className='container'>
      <h2 className='title'>Скоро мир узнает обо мне!</h2>
      <p style={{ color: 'plum', marginTop: '1rem' }}>{initialNumber}</p>
      <button
        onClick={increment}
        style={{ margin: '10px', width: '6rem', height: '1.5rem' }}
      >
        Увеличить
      </button>
      <button
        onClick={decrement}
        style={{ margin: '10px', width: '6rem', height: '1.5rem' }}
      >
        Уменьшить
      </button>
    </div>
  );
}
