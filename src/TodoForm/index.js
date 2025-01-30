import React from 'react';

import './TodoForm.css';

function TodoForm({ setOpenModal }) {
  return (
    <form
      className="TodoForm"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="TodoForm-label">Escribe tu nuevo TODO</label>

      <textarea className="TodoForm-textarea" placeholder="Cortar cebolla para el almuerzo" />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={() => {
            setOpenModal((state) => !state);
          }}
        >
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
