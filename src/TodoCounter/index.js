import './TodoCounter.css';
import React from 'react';

function TodoCounter({ total, completed }) {
  const textH2 =
    completed === total ? 'Felicidades! Completaste todos los TODOs 🥳' : `Completaste ${completed} de ${total} TODOs`;

  return (
    <>
      <h1>TODOs Andres</h1>
      <h2>{textH2}</h2>
    </>
  );
}

export { TodoCounter };
