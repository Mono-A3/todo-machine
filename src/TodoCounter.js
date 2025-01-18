import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      <h1>TODOs Andres</h1>
      <h2>
        Has completado {completed} de {total} TODOs
      </h2>
    </>
  );
}

export { TodoCounter };
