import React from 'react';
import './TodoCounter.css';

import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const textH2 =
    completedTodos === totalTodos
      ? 'Felicidades! Completaste todos los TODOs 🥳'
      : `Completaste ${completedTodos} de ${totalTodos} TODOs`;

  return (
    <>
      <h1>TODOs Andres</h1>
      <h2>{textH2}</h2>
    </>
  );
}

export { TodoCounter };
